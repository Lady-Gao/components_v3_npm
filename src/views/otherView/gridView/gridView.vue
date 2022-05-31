<template>
    <div class="gridView">
         <grid :data="tableData" v-loading="loading"  :renderArr="columnList" @row-click="rowClick"
          @selection-change="selectionChange" s
         @loadTable="loadTable"
         @expand-change="expandChange" 
         >
          <el-table-column  type="selection"></el-table-column>
       <el-table-column type="expand">
        <template #default="props">
            <p >State: {{ props.row.plateCode }}</p>
        </template>
      </el-table-column>
         </grid> 
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { addFilters } from "@/utils/common";
import {findAlarmPolymerizationInfoList,findAlarmInfoDetails} from '../../../utils/API'
const tableData = ref({})
const loading = ref(true)
let params={
  vehicleIds: '',
alarmTypeIds: '',
mapType: 3,
startTime: '2022-05-21 00:00:00',
endTime: '2022-05-25 23:59:59',
status: '',
current: 1
}

const columnList=ref([
     { label: 'plateCode', prop: "plateCode",filter:true,},
      { label: '所属公司', prop: "enterpriseName",filter_input:true},
       { label: '车牌頗色', prop: "plateColorName",filter:true,filters:filter},
        { label: '持续时间', prop: "alarmDurationStr",filter:true,sortable:true},
        { label: '报警类型', prop: "alarmTypeName",},
         { label: '在线状态', prop: "isLogout",filter:true,
       formatter:filterLogStuas,
        filtertext:LogStuasfiltertext
         },
])

loadTable()

function filterLogStuas  (row:any) {
  return row.isLogout?'在线':'离线'
 
}

function LogStuasfiltertext(item:any){
  return {text:item?'在线':'离线',value:item}
}
function filter(){
  return [
    {text:'红色',value:1},
    {text:"粉色",value:5},
    {text:"蓝色",value:"蓝色"}
  ]
}
function rowClick(row:any){
  console.log(row,'rowClick')
}
function selectionChange(val:any){
  console.log(val,'selectionChange')
}
function loadTable(val={}){
  loading.value=true
   findAlarmPolymerizationInfoList(Object.assign(params,val) ).then(res=>{
   tableData.value=res.data
    loading.value=false
})
}

function expandChange(val:any){
 
}
</script>

<style lang="scss" scoped>
.gridView{
    height: 100%;
}
</style>