
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
        <div class="onlineStatusCheck">
            <el-checkbox-group v-model="search.onlineStatus" v-if="isOnlineStatus">
                <el-checkbox :label="item.value" v-for="(item, index) in onlinection" :key="index">{{ item.label }}
                </el-checkbox>
            </el-checkbox-group>
        </div>
        <!-- 多选(checkbox)列表选择 @change="checkListChange"-->
        <el-scrollbar  class="treeList-lists" v-loading="loading">
            <el-checkbox-group v-if="isCheck" v-model="checkList">
                <li v-for="(item, index) in listsData" :key="index" class="el-checkbox group_content">
                    <el-checkbox :label="item.id" class="content_text" @change="checkcheckboxChange($event, item)">
                        <span
                            :class="item.onlineStatus == '1' ? `${item.icon || 'icon0'}car_online_ico_docu` : `${item.icon || 'icon0'}car_ico_docu`"></span>
                        <span class="text">{{ item[name] }}</span>
                        <el-tooltip effect="dark" :content="item.remark" placement="top-start" v-if="!isCollection">
                            <i class="remark">{{ item.remark }}</i>
                        </el-tooltip>
                    </el-checkbox>
                    <p class="operation">
                        <span v-if="isCollection"
                            :class="item.isAttention ? 'cvIcon_collection' : 'cvIcon_uncollection'"
                            @click="clcik_collection($event, item)"></span>
                        <span v-if="isEdit" class="cvIcon_edit" @click="clcik_collection($event, item)"></span>
                        <el-popconfirm title="您是否要进行删除操作" @confirm="clcik_delete(item)">
                            <template #reference>
                                <span v-if="isDelete" class="cvIcon_delete"></span>
                            </template>
                        </el-popconfirm>
                    </p>
                </li>
            </el-checkbox-group>
            <div v-else class="radioGroup">
                <div :class="['group_content',item.click?'group_content_active':'']" v-for="(item, index) in listsData" :key="index" @click="textClick(item,index)">
                    <p class="content_text">
                        <span
                            :class="item.onlineStatus == '1' ? `${item.icon || 'icon0'}car_online_ico_docu` : `${item.icon || 'icon0'}car_ico_docu`"></span>
                        <span class="text" >{{ item[name] }}</span>
                        <el-tooltip effect="dark" :content="item.remark" placement="top-start" v-if="!isCollection">
                            <i class="remark">{{ item.remark }}</i>
                        </el-tooltip>
                    </p>
                    <p class="operation">
                        <span v-if="isCollection"
                            :class="item.isAttention ? 'cvIcon_collection' : 'cvIcon_uncollection'"
                            @click="clcik_collection($event, item)"></span>
                        <span v-if="isEdit" class="cvIcon_edit" @click="clcik_collection($event, item)"></span>
                        <el-popconfirm title="您是否要进行删除操作" @confirm="clcik_delete(item)">
                            <template #reference>
                                <span v-if="isDelete" class="cvIcon_delete"></span>
                            </template>
                        </el-popconfirm>
                        <!-- <span v-if="isDelete" class="cvIcon_delete" @click="clcik_delete(item)"></span> -->
                    </p>
                </div>
            </div>
            <!-- <el-popover ref="popoverRef" :visible="showPopover" trigger="click" title="备注" virtual-triggering>
                <el-input clearable v-model="popover.remark" :maxlength="50" />
                <div style="text-align: right;">
                    <el-button type="text" @click="showPopover = false">取消</el-button>
                    <el-button type="text" @click="node_collection">确定</el-button>
                </div>
            </el-popover> -->
        </el-scrollbar>
        <!-- 单选(radio)列表选择 -->
        <!-- 分页 -->
        <div class="pagination">
            <p>{{ pagination.total }}条</p>
            <el-pagination v-show="pagination.total ? true : false" v-model:currentPage="pagination.current"
                :page-size="pagination.size" layout="prev, next" :total="pagination.total"
                @current-change="handlerCurrentChange" />
            <p v-show="pagination.total ? true : false" class="tabspan">{{ pagination.current }} / {{ allPage }}</p>
        </div>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import { defineComponent, PropType, reactive, ref, unref, getCurrentInstance, computed } from "vue"
import { getHttpListData } from "../../../utils/http";
export default defineComponent({
    name: "TreeList",
    props: {
        ListApi: { // 搜索接口url
            type: String,
            default: ''
        },
        collectionApi: { //收藏接口url
            type: String,
            default: '/basic/vehicle/insertVehicleAttentionInfo'
        },
        uncollectionApi: { // 取消收藏接口url
            type: String,
            default: '/basic/vehicle/deleteVehicleAttentionInfo'
        },

        isCheck: {//是否多选
            type: Boolean,
            default: true
        },
        isOnlineStatus: {//是否显示在线离线搜索条件
            type: Boolean,
            default: true
        },
        isCollection: {//是否显示收藏五角星
            type: Boolean,
            default: true
        },
        isEdit: {//是否显示收藏五角星
            type: Boolean,
            default: false
        },
        isDelete: {//是否显示删除按钮
            type: Boolean,
            default: false
        },
        selection: { // 搜索下拉数据
            type: Array as PropType<{
                label: string
                value: string
            }[]>,
            default() {
                return [
                    { label: 'plateCode', value: "plateCode" },
                    { label: 'enterpriseName', value: 'enterpriseName' },
                    { label: 'fleetName', value: 'fleetName' },
                    { label: 'terminalCode', value: 'terminalCode' },
                    { label: 'carVin', value: 'carVin' },
                    { label: 'mobileCode', value: 'mobileCode' }
                ]
            }
        },
        onlinection: {//在线离线数据
            type: Array as PropType<{
                label: string
                value: string
            }[]>,
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
        otherParam: { // 额外的参数 在这里传
            default() {
                return {};
            },
        },
    },
    emits: ["clcik_collection", "clcik_delete", "current-change", "node-click"],
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
        const showPopover = ref(false)
        const popoverRef = ref()
        const checkList = ref([])
        //   多选才会触发
        function checkcheckboxChange(event: Event, row: any) {
            context.emit('current-change', event, row.id)
        }
        // 收藏事件
        function clcik_collection(event: Event, row: any) {
            return context.emit('clcik_collection', event, row)
        }
        // 编辑事件
        function clcik_edit(event: Event, row: any) {
            return context.emit('clcik_collection', event, row)
        }
        // 删除事件
        function clcik_delete(row: any) {
            row.isAttention = 1
            return context.emit('clcik_delete', row)

        }


        //选中与取消
        const changeCheckStates = (list: any) => {
            checkList.value = list
        }

        //分页变化
        function handlerCurrentChange(val: any) {
            search.current = val;
            handlerSearch();
        }

        // 搜索
        function handlerSearch(repeat?: boolean) {
            loading.value = true
            let onlineStatus = search.onlineStatus.length == 1 ? search.onlineStatus[0] : ''
            let params = {
                current: repeat ? 1 : search.current,
                [search.selectionValue]: search.text,//输入框文本
                onlineStatus,//在线状态
                ...props.otherParam

            }
            getListData(params)
        }

        function getListData(params: any) {
            getHttpListData({
                url: props.ListApi,
                method: 'get',
                params
            }).then((res:any) => {
                loading.value = false
                if (res.flag && res.data) {
                    const { total, records, current } = res.data;
                    listsData.value = records
                    pagination.total = total;
                    pagination.current = current;
                } else {
                    listsData.value = [];
                    pagination.total = 0;
                    pagination.current = 0;
                }
            })
        }
        const buttonRef = ref()
        // 更新收藏和在线图标
        function upNodeIcon(val: any) {
            const { id, isAttention, onlineStatus } = val;
            //列表查找ID 有就更新
            listsData.value.some((item: any) => {
                if (item.id == id) {
                    item.isAttention = Number(isAttention)
                    item.onlineStatus = onlineStatus
                }
                return item.id == id
            })
        }
        function textClick(val: any,index:number) {
         
            listsData.value.forEach((element:any) => {
                if(element.id!==val.id){
                    element.click=false
                }else{
                    element.click=!element.click
                }
            });
            
            context.emit('node-click', val)
           
        }
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
            changeCheckStates,
            popover,
            popoverRef,
            buttonRef,
            showPopover,
            handlerCurrentChange,
            checkList,
            checkcheckboxChange,
            upNodeIcon,
            textClick,
        }
    }

})
</script>

<style lang="scss" >
.treeList {
    position: relative;
    max-width: 300px;
    width: 100%;
    height: 100%;

    .onlineStatusCheck {
        margin: 5px 0;
    }

    .treeList-lists {
        height: calc(100% - 100px);
        .online {
            color: #008000cf;
        }

        .el-checkbox {
            width: 100%;
            border-bottom: 1px solid #eee;
            float: left;


        }

        .group_content {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
            width: 100%;

            .content_text {
                flex: 2;
                text-align: left;
            }

            .text {
                display: inline-block;
                padding-left: 5px;

            }

            .remark {
                padding-left: 5px;
                color: #b3b0b0;
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: left;
                width: 80px;
            }

            .cvIcon_edit {
                margin-right: 5px;
                display: inline-block;
            }


        }
        .group_content_active{
            background: #eee;
        }
        .radioGroup {
            .group_content {
                border-bottom: 1px solid #eee;
                margin-right: 30px;
                line-height: 32px;
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: space-between;
        line-height: 32px;
        color: #7d7d7b;
        position: absolute;
        bottom: -15px;
        width: 100%;
    }

}
</style>