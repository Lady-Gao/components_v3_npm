<template>
    <div class="grid">
        <div class="boxTable havePagin">
            <el-table :data="filterTableData" ref="table">
                <el-table-column v-if="selection" type="selection"></el-table-column>
                <!-- 默认模板 -->
                <slot></slot>
                 <!-- render模板 -->
                <el-table-column 
                    align="center"
                    showOverflowTooltip
                    v-for="item in renderArr"
                    :key="item.prop"
                    :label="item.label"
                    :prop="item.prop"
                    :min-width="item.width || 100"
                   header-align="center"
                   :sortable ="item.sortable||false "
                    :formatter="item.formatter|| null"
                    :filters="item.filter?filters(item):null" 
                     :filter-method="item.filter?(item.nodefilters?item.nodefilters:nodefilters):null"
                >
            <template #header="{column}" v-if="item.filter_input" @mouseout="column.show=false">
                <span @mouseenter="column.show=true" v-show="!column.show"> {{column['property']}} </span>
                
                <el-input  v-show="column.show" 
                v-model="column.input_text" size="small" 
                @input="(val)=>input_textChange(val,column)" clearable
                placeholder="Type to search" />
      </template>
            </el-table-column>
               
                <!---存放操作按钮 -->
                <slot name="opertion"></slot>
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
</template>

<script lang="ts">
/**
 * 表头一定要平铺不能折叠 设置好width 不然找不到表格横向滚动条
 */
import { Function } from '@babel/types'
import { Callback } from 'element-plus'
import { computed, defineComponent, PropType, ref, watch ,onMounted} from 'vue'
type Row={
                prop:string,
                label:string,
                width:string|number,
                formatter?:Function,
                sortable?:boolean,//对表格进行排序
                filter_input?:boolean,//开启该列的筛选，input框的展示形式
                input_text?:string,//筛选条件文本
                filter?:boolean,//开启该列的筛选,勾选的展示形式
                nodefilters?:Function,//勾选_用于决定某些数据是否显示
                filtertext?:Function//勾选_该列的筛选数据需要做转换，显示的文字更改
            }
export default defineComponent({
    name: 'Grid',
    props: {
        data: {
            type: Object || Array,
            default() {
                return []
            }
        },
        renderArr: {//入参模板
            type: Array as PropType<Row[]>,
            default() {
                return []
            },
        },
        selection: {//   //是否启用复选表格
            type: Boolean,
            default: false,
        },
       
    },
    setup(props: any) {
        const table=ref()
        const tableData = ref()
        const columnList=ref({})//需要筛选的字段合集
  watch(() => props.data, watchData,
            { immediate: true, deep: true }
 )
 function watchData(val:any){
tableData.value=props.data
 }
  const filterTableData=ref(tableData.value.filter(
    (item) =>{
        // console.log(item.input_text,'.input_text')
    //  return !item.input_text ||
    //   item.name.includes( item.input_text)
    return item
  }))
 
//  input搜索的方法
function input_textChange(val,column){
    let property=column['property']
columnList.value[property]=val
    filterTableData.value=tableData.value.filter(
    (item) =>{
        let arr=[]
        for (const key in columnList.value) {
           let bool=columnList.value[key]?item[key].includes( columnList.value[key]):true
           arr.push(bool)
        }
    return !arr.includes(false)
  })
}
function filters(item:Row){
    return addFilters(item.prop,item.filtertext)
}
//filter=true 开启搜索功能的情况下  搜索返回的数据
function nodefilters ( value: string,  row: {},  column: any) {
  const property = column['property']
  return row[property] === value
}
//数组去重，返回新的格式数组 
function  addFilters(key:string,filtertext?:any){
    let arrays = new Set(tableData.value.map(item=>item[key]))
   let  filterArr =   Array.from(arrays)
   let filters=  filterArr.map(item=>{
       if(filtertext){
           return filtertext(item)
       }else{
           return {text:item,value:item}
       }
       })
   return filters
}
onMounted(() => {
    console.log(table)
})

        return { table,tableData ,
        filters,
        addFilters,
        nodefilters,
        filterTableData,
        input_textChange,
        columnList
        }
    }
})
</script>

<style  lang="scss">
.grid {
    position: relative;

    height: 100%;
    width: 98%;

    .boxTable {
        position: absolute;
        top: 0px;
        bottom: 5px;
        width: 99.8%;
        border: 1px solid #eee;
        border-radius: 3px;

        // background-color: rgb(221, 206, 206);
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

        .el-table__inner-wrapper .el-scrollbar__bar.is-horizontal {
            // height:0;
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

    .el-pagination {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
}
</style>