
<template>
    <div class="grid">
        <div :class="['boxTable', pagination.pages?'havePagin':'']">
            <el-table :data="filterTableData" ref="table" @row-click="rowClick" @selection-change="selectionChange"
                @expand-change="expandChange"
                highlight-current-row :expand-row-keys="expands" :row-key="rowKey">
               <el-table-column v-if="selection" type="selection"></el-table-column>
               
                <!-- 默认模板 -->
                <slot></slot>
                <!-- render模板 -->
                <el-table-column align="center" showOverflowTooltip v-for="item in renderArr" :key="item.prop"
                    :label="item.label" :prop="item.prop" :min-width="item.width || 100" header-align="center"
                    :sortable="item.sortable || false" :formatter="item.formatter || null"
                    :filters="item.filter ? (item.filters ? item.filters(item) : filters(item)) : null"
                    :filter-method="item.filter ? nodefilters : null">
                    <template #header="{ column }" v-if="item.filter_input">
                        <span @mouseenter="column.show = true" v-show="!column.show"> {{ column['property'] }} </span>
                        <el-input class="inputFilter" v-show="column.show" @mouseleave="column.show = false" v-model="column.input_text"
                            size="small" @input="(val) => input_textChange(val, column)" clearable
                            placeholder="Type to search" />
                    </template>
                </el-table-column>

                <!---存放操作按钮 -->
                <slot name="opertion"></slot>
            </el-table>
        </div>
        <div class="pagination" v-if="pagination.total > 10">

            <el-pagination background 
             @size-change="sizeChange" @current-change="currentChange"
            layout="total, jumper, sizes, prev, next" 
            :total="pagination.total"
            v-model:currentPage="pagination.current"
            v-model:page-size="pagination.size"
            >

            </el-pagination>
            <span style="line-height: 30px">{{ pagination.current }}/{{ pagination.pages }}</span>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * 表头一定要平铺不能折叠 设置好width 不然找不到表格横向滚动条
 */
 // @ts-nocheck # 忽略全文
import { computed, defineComponent, PropType, ref, watch, onMounted, reactive } from 'vue'
type Row = {
    prop: string,
    label: string,
    width: string | number,
    formatter?: Function,
    sortable?: boolean,//对表格进行排序
    filter_input?: boolean,//开启该列的筛选，input框的展示形式
    input_text?: string,//筛选条件文本
    filter?: boolean,//是否开启勾选_该列的筛选 true|false
    filters?: Function,//开启该列的筛选,勾选的展示形式 需返回筛选数组 [{text,label}]

    filtertext?: Function//勾选_该列的筛选数据需要做转换，显示的文字更改
}

export default defineComponent({
    name: 'Grid',
    props: {
        data: {//显示的数据 可以是分页数据和全部数据
            type: [Object, Array],
            default() {
                return {
                    records: []
                }
            }
        },
        renderArr: {//显示的column模板  
            type: Array as PropType<Row[]>,
            default() {
                return []
            },
        },
        selection: {//   //是否启用复选表格
            type: Boolean,
            default: false,
        },
      
        expandKeyID: {//行数据的 Key，用来优化 Table 的渲染；展开时取的列表的值 不能有重复 不然展开出问题
            type: String,
            default: "id"
        }

    },
    emits: ["row-click", "selection-change", "loadTable", "expand-change"],
    setup(props: any, context: any) {
        const table = ref()
        const tableData = ref([])
        const filterTableData = ref([])
        const columnList = reactive([])//需要筛选的字段合集
        const pagination = reactive({
            current: 1,
            total: 0,
            pages:0,
            size: 10
        })

        watch(() => props.data, watchData,
            { immediate: true, deep: true }
        )
        function watchData(val: any) {

            if (val.records) {//对象
               tableData.value= val.records
            } else {//数组
                 tableData.value=val
            }
            if(tableData.value.length){
                filterTableData.value=[].concat(tableData.value)   
            }else{
                filterTableData.value=[]
            }
            console.log(filterTableData.value,'filterTableData')
            pagination.total=val.total||0
            pagination.pages=val.pages||0
            pagination.current=val.current||1
            pagination.size=val.size||10

        }


        //  input搜索的方法
        function input_textChange(val:any, column:any) {
            let property:string = column['property']
            columnList[property as keyof typeof columnList] = val
            filterTableData.value = tableData.value.filter(
                (item:any) => {
                    let arr = []
                    for (const key in columnList) {
                        let bool = columnList[key  as keyof typeof columnList] ? item[key].includes(columnList[key  as keyof typeof columnList]) : true
                        arr.push(bool)
                    }
                    return !arr.includes(false)
                })
        }
        function filters(item: Row) {
            return addFilters(item.prop, item.filtertext)
        }
        //filter=true 开启搜索功能的情况下  搜索返回的数据
        function nodefilters(value: string, row: {}, column: any) {
            const property = column['property']
            return row[property] === value
        }
        //数组去重，返回新的格式数组 
        function addFilters(key: string, filtertext?: any) {
            if (!tableData.value.length) return
            let arrays = new Set(tableData.value.map((item:any) => item[key]))
            let filterArr = Array.from(arrays)
            let filters = filterArr.map((item:any) => {
                if (filtertext) {
                    return filtertext(item)
                } else {
                    return { text: item, value: item }
                }
            })
            return filters
        }
        // ------------------------事件------------------------
        function rowClick() {
            context.emit('row-click', ...arguments)
        }
        function selectionChange() {
            context.emit('selection-change', ...arguments)
        }
        function sizeChange(val:number|string) {
            context.emit('loadTable',{
                current:pagination.current,
                size:val
                })
        }
        function currentChange(val:number|string) {
            context.emit('loadTable',{
                current:val,
                size:pagination.size
                })
        }
        const expands = ref()
        function expandChange(row: any, expandedRows: []) {
            context.emit('expand-change', ...arguments)
            expands.value = []
            if (expandedRows.length) {
                expands.value.push(String(row[props.expandKeyID]))
            } else {
                expands.value = []
            }
        }
        function rowKey(row: any) {
            return row[props.expandKeyID];
        }


        return {
            table, tableData,
            filters,
            addFilters,
            nodefilters,
            filterTableData,
            input_textChange,
            columnList,
            pagination,
            rowClick,
            selectionChange,
            sizeChange,
            currentChange,
            expandChange,
            expands,
            rowKey
        }
    }
})
</script>

<style  lang="scss">
.grid {
    position: relative;

    height: 100%;
    width: 100%;

    .boxTable {
        position: absolute;
        top: 0px;
        bottom: 5px;
        width: 99.8%;
        border: 1px solid #eee;
        border-radius: 3px;
        .el-table--fit {
            height: 100%;

            .el-table__inner-wrapper {
                height: 100% !important;

                &::before {
                    height: 0;
                }

                .el-table__body-wrapper {
                    height: calc(100% - 40px)
                }
            }
        }



        .el-table__empty-text {
            position: relative;
            padding-top: 200px;
            display: inline-block;
        }
    }

    .havePagin {
        bottom: 50px;
    }

    .pagination {
        position: absolute;
        bottom: 5px;
        right: 5px;
        line-height: 36px;

        .el-pagination {
            float: left;
        }
    }
    .inputFilter input{
        height: 22px;
    }
}
</style>