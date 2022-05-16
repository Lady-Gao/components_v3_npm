<template>
    <div class="treeList">
        <!-- 条件下拉框搜索 -->
        <el-input v-model="search.text" class="treeList-input" :maxlength="20" @keyup.native.enter="handlerSearch">
            <template #prepend>
                <el-select style="width: 115px" v-model="search.selectionValue" @change="selectChange">
                    <el-option :label="item.label" :value="item.value" v-for="(item, index) in selection"
                        :key="index" />
                </el-select>
            </template>
            <template #append>
                <span class="cvIcon_search" @click="handlerSearch(true)"></span>
            </template>
        </el-input>
        <!-- 多选框  在线离线-->
        <el-checkbox-group v-model="search.onlineStatus">
            <el-checkbox :label="item.value" v-for="(item, index) in onlinection" :key="index">{{ item.label }}
            </el-checkbox>
        </el-checkbox-group>
        <!-- 多选(checkbox)列表选择 -->
        <div class="treeList-lists" v-loading="loading">
            <el-checkbox-group v-if="isCheck">
                <el-checkbox :label="item.id" v-for="(item, index) in listsData" :key="index">
                    <template class="group_content" :scope="item">
                        <p class="content_text">
                            <span :class="item.icon + 'car'"></span>
                            <span class="text">{{ item[name] }}</span>
                            <el-tooltip effect="dark" :content="item.remark" placement="top-start"  v-if="!isCollection">
                                <i class="remark">{{ item.remark }}</i>
                            </el-tooltip>

                        </p>
                        <p class="operation">
                            <span v-if="isCollection"
                                :class="item.isAttention ? 'cvIcon_collection' : 'cvIcon_uncollection'"
                                @click="clcik_collection($event, item)"></span>
                            <span v-if="isEdit" class="cvIcon_edit" @click="clcik_edit($event, item)"></span>
                            <span v-if="isDelete" class="cvIcon_delete" @click="clcik_delete($event, item)"></span>
                        </p>
                    </template>

                </el-checkbox>
            </el-checkbox-group>

            <el-popover ref="popoverRef" :visible="showPopover" trigger="click" title="备注" virtual-triggering>
                <el-input  clearable v-model="popover.remark" :maxlength="50" />
                <div style="text-align: right;">
                    <el-button  type="text" @click="showPopover = false">取消</el-button>
                    <el-button  type="text" @click="node_collection">确定</el-button>
                </div>
            </el-popover>
        </div>
        <!-- 单选(radio)列表选择 -->
        <!-- <div  class="treeList-lists">
         </div> -->
        <!-- 分页 -->
        <div class="pagination">
            <p>{{ pagination.total }}条</p>
            <el-pagination v-show="pagination.total ? true : false" v-model:currentPage="pagination.current"
                :page-size="pagination.size" layout="prev, next" :total="pagination.total"  @current-change="handlerCurrentChange"/>
            <p v-show="pagination.total ? true : false" class="tabspan">{{ pagination.current }} / {{ allPage }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Http } from '../../../asset/common'
import { defineComponent, PropType, reactive, ref, unref, getCurrentInstance, computed } from "vue"
import { ElMessage, ElMessageBox } from 'element-plus'
type Opstions = {
    label: string
    value: string
}[]
export default defineComponent({
    name: "TreeList",
    props: {
        ListApi: { // 搜索接口url
            type: String,
            default: ''
        },
        collectionApi: { //收藏接口url
            type: String,
            default: ''
        },
        uncollectionApi: { // 取消收藏接口url
            type: String,
            default: ''
        },
        deleteApi: {//删除关注接口url
            type: String,
        },
        isCheck: {//是否多选
            type: Boolean,
            default: true
        },
        isCollection: {//是否显示收藏五角星
            type: Boolean,
            default: false
        },
        isEdit: {//是否显示收藏五角星
            type: Boolean,
            default: false
        },
        isDelete: {//是否显示收藏五角星
            type: Boolean,
            default: false
        },
        selection: { // 搜索下拉数据
            type: Array as PropType<Opstions>,
            default() {
                return [
                    { label: 'plateCode', value: "plateCode" },
                    { label: 'company', value: 'enterpriseName' },
                    { label: 'wasName', value: 'fleetName' },
                    { label: 'Terminal', value: 'terminalCode' },
                    { label: 'VINNumber', value: 'carVin' },
                    { label: 'SIMNumber', value: 'mobileCode' }
                ]
            }
        },
        onlinection: {//在线离线数据
            type: Array as PropType<Opstions>,
            default() {
                return [
                    { label: '在线', value: "1" },
                    { label: '离线', value: '0' },
                ]
            }
        },
        name: {//显示节点名称
            type: String,
            default: "plateCode"
        },
        headers: { //树的异步请求头部 
            type: Object,
            default: {
                // 'token':localStorage.getItem("token"),
                // 'Authorization':'Bearer '+localStorage.getItem("token")
            }
        },
        otherParam: { // 额外的参数 在这里传
            default() {
                return {};
            },
        },
    },
    emits: ["clcik_collection", "clcik_edit", "clcik_delete"],
    setup(props: any, context: any) {

        const search = reactive({
            text: '',//输入框文本
            onlineStatus: [],//在线状态
            selectionValue: props.selection[0].value,//查询类型 车牌司机公司
            current: 1.//分页
        })
        const pagination = reactive({
            total: 1000,
            current: 1,
            size: 10,
        })
        const allPage = computed(() => {
            let num = pagination.total / 10
            let page = Math.ceil(num)
            return page
        })
        const listsData = ref()
        const loading = ref(false)
        handlerSearch()
        function selectChange() {

        }
        const popover = reactive({
            remark: '',
            row: {
                remark: "",
                id: '',
                isAttention: 1
            }
        })
        const showPopover = ref(true)
        const popoverRef = ref()
        // 收藏事件
        function clcik_collection(event, row) {
            console.log(row.remark, 'row.remark')
            popover.remark = row.remark
            popover.row = row
            if (!row.isAttention) {
                //弹备注信息框
                unref(popoverRef).popperRef.triggerRef = event.target;
                showPopover.value = true
            } else {
                //取消收藏
                showPopover.value = false
                unnode_collection()
            }
        }
        // 编辑事件
        function clcik_edit(event, row) {
            popover.remark = row.remark
            popover.row = row
            unref(popoverRef).popperRef.triggerRef = event.target;
            showPopover.value = true
            // context.emit('clcik_edit',row)
        }
        // 删除事件
        function clcik_delete(event, row) {
            ElMessageBox.confirm(
                '是否确认当前操作?',
                '提示',
                {
                    distinguishCancelAndClose: true,
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            )
                .then(() => {
                    node_delete(row)
                })
            // context.emit('clcik_delete',row)
        }
        //删除的请求
        function node_delete(row: any) {
            Http({
                url: props.deleteApi,
                method: 'DELETE',
                headers: props.headers,
                params: {
                    vehicleId: row.id
                }
            }).then(res => {
                //删除该车辆 障眼法
                if (res.flag) {
                    //列表中删除
                    listsData.value = unref(listsData).filter(item => {
                        return item.id != row.id

                    })
                    //分页删除一条
                    pagination.total=pagination.total-1
                }

            })
        }
        //关注请求
        function node_collection() {
            Http({
                url: props.collectionApi,
                method: 'post',
                headers: props.headers,
                params: {
                    remark: popover.remark,
                    vehicleId: popover.row.id
                }
            }).then(res => {
                showPopover.value = false
                if (res.flag) {
                    //更改状态 障眼法
                    popover.row.isAttention = 1
                    popover.row.remark = popover.remark
                    // context.emit('clcik_collection')
                } else {
                }
            })
        }
        //取消关注请求
        function unnode_collection() {
            Http({
                url: props.uncollectionApi,
                method: 'DELETE',
                headers: props.headers,
                params: {
                    vehicleId: popover.row.id
                }
            }).then(res => {
                showPopover.value = false
                if (res.flag) {
                    //  ElMessage({
                    //     message: '操作成功',
                    //     type: 'success',
                    // })
                    popover.row.isAttention = 0
                } else {
                    //  ElMessage({
                    //     message: '操作失败',
                    //     type: 'error',
                    // })
                }
            })
        }
        const onClickOutside = () => {
            // unref(popoverRef).popperRef?.delayHide?.()
        }

            //分页变化
         function handlerCurrentChange(val){
             search.current = val;
                handlerSearch();
        }

        // 搜索
        function handlerSearch(repeat?:boolean) {
            loading.value = true
            let onlineStatus = search.onlineStatus.length == 1 ? search.onlineStatus[0] : ''
            let params = {
                current:repeat?1: search.current,
                [search.selectionValue]: search.text,//输入框文本
                onlineStatus,//在线状态
                ...props.otherParam

            }
            getHttpTreeData(params)
        }
       
        function getHttpTreeData(params: any) {
            Http({
                url: props.ListApi,
                headers: props.headers,
                params
            }).then(res => {
                loading.value = false
                if (res.flag && res.data) {
                    const { total, records, current } = res.data;
                    listsData.value = records
                    pagination.total = total;
                    pagination.current = current;
                } else {
                    this.lists = [];
                    this.pagination.total = 0;
                }
            })
        }
        const buttonRef = ref()
        return {
            search,
            listsData,
            pagination,
            allPage,
            loading,
            handlerSearch,
            selectChange,
            clcik_collection,
            clcik_edit,
            clcik_delete,
            onClickOutside,
            popover,
            popoverRef,
            buttonRef,
            showPopover,
            node_collection,
            handlerCurrentChange
        }
    }

})
</script>

<style lang="scss" >
.treeList {
    position: relative;
    max-width: 300px;
    width: 100%;
    height: 95%;

    .treeList-lists {
        min-height: 320px;

        .el-checkbox {
            width: 100%;
            border-bottom: 1px solid #eee;

            .el-checkbox__label {
                width: 100% !important;
            }

            .group_content {
                display: flex;
                justify-content: space-between;

                .text {
                    display: inline-block;
                    padding-left: 5px;
                }

                .remark {
                    padding-left: 5px;
                    color: #b3b0b0;
                    font-size: 12px;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: left;
                    line-height: 10px;
                    width: 80px;
                }

                .cvIcon_edit {
                    margin-right: 5px;
                    display: inline-block;
                }
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: space-between;
        line-height: 32px;
        color: #7d7d7b;
        position: absolute;
    bottom: 5px;
            width: 100%;
    }

}
</style>