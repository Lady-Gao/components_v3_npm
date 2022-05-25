<template>
    <div class="gridView">
         <grid :data="filterTableData"  :renderArr="columnList">
  
     <el-table-column prop="name" label="Name" width="180" 
     > 
    
    <!-- <template #header="{column}" >
   <span @mouseenter="column.show=true" v-show="!column.show"> {{column['property']}} {{column['show']}}</span>
        <el-input @mouseout="column.show=false" v-show="column.show" v-model="search" size="small" placeholder="Type to search" />
      </template> -->
     </el-table-column>
     
    <el-table-column prop="address" label="Address"  />
  
      </grid> 
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { addFilters } from "../../../utils/common";
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'jj',
    isLogout:0
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
    input_text:'',
    isLogout:1
  },
  {
    date: '2016-05-02',
    name: 'dd',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
    isLogout:0
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
    isLogout:1
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
    isLogout:0
  },
])
const filterTableData = computed(() =>{
  let arr=tableData.value.filter(
    (data) =>{

     return !search.value ||
      data.name.includes(search.value)}
  )
  return arr
  }
)
const search=ref()
const columnList=ref([
     { label: 'date', prop: "date",filter:true,sortable:true},
      { label: 'filter_inputtag', prop: "tag",filter_input:true},
       { label: 'filter_inputname', prop: "name",filter_input:true},
        { label: 'filtername', prop: "name",filter:true,sortable:true},
        { label: 'columnListlabelus', prop: "isLogout",filter:true,
       formatter:filterLogStuas,
        filtertext:LogStuasfiltertext
         },
])

function filterHandler ( value: string,  row: {},  column: any) {
  const property = column['property']
  return row[property] === value
}
function filterLogStuas  (row:any) {
  return row.isLogout?'在线':'离线'
 
}

function LogStuasfiltertext(item:any){
  return {text:item?'在线':'离线',value:item}
}
</script>

<style lang="scss" scoped>
.gridView{
    height: 100%;
}
</style>