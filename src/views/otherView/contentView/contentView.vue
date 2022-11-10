<template>
    <div class="contentView">
  <PublicTreeContent :treeData="VehicleTreeInfoList">
 <Operation  @search="search" @import="importL"
 @add="add" @modify="modify" @export="exportL"
   :powerTool="powerTool"> </Operation>
            <grid :data="tableData" class="bgr" >
                <el-table-column prop="date" label="Date"   align="center"  header-align="center"/>
                <el-table-column   label="操作"   align="center"  header-align="center" fixed="right">
                    <OpretionTool :Heard="false" :powerTool="powerTool" @look="lookL"/>
                </el-table-column>
            </grid> 
           

  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
  </PublicTreeContent>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
 import findVehicleTreeInfoList from '@utils/findVehicleTreeInfoList.json'
    import findEnterpriseOrganizationTreeList from '@utils/findEnterpriseOrganizationTreeList.json'
  const {VehicleTreeInfoList}=findVehicleTreeInfoList
    const {OrganizationTreeList}=findEnterpriseOrganizationTreeList
const formInline = ref()
const dialogVisible=ref(false)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
 const powerTool=["search","add","modify","import","export","look"]
function search(){
  console.log('search-')
}
function add(){
  console.log('add-')
}
function modify(){
  console.log('modify-')
}
function importL(){
  console.log('import-')
}
function exportL(){
  console.log('exportL-')
}
function lookL(){
  console.log('lookL')
}
</script>

<style lang="scss" scoped>
.contentView{
    height: 100%;
}
</style>