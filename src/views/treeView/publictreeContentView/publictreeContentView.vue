<template>
    <div class="publictreeContentView">
        <div class="header"></div>
        <PublicTreeContent :treeData="VehicleTreeInfoList">
      
            <Operation :powerTool="powerTool1">
                <el-form-item label="起止时间">
                    <el-input v-model="formInline" placeholder="Approved" />
                    </el-form-item>
                     <el-form-item label="姓名">
                    <el-input v-model="formInline" placeholder="Approved" />
                    </el-form-item>
                <template #header>
                    <el-form-item label="报警类型">
                    <el-select v-model="formInline" placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai" />
                        <el-option label="Zone two" value="beijing" />
                    </el-select>
                    </el-form-item>
                </template>
            </Operation>
  
        <template #main>
         

                <grid :data="tableData" class="bgr" :renderArr="columnList">
  <el-table-column prop="date" label="Date" width="180"  align="center"  header-align="center"/>
    <template #opertion>
  
     <el-table-column   label="操作" width="180"  align="center"  header-align="center" >
         <el-button>dr</el-button>
         </el-table-column>
           </template>
            </grid> 
               <!-- <div class="bgr"></div> -->
           
        </template> 
        </PublicTreeContent>
    </div>
</template>

<script setup lang="ts">
  import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
import { ref } from 'vue';
   const {VehicleTreeInfoList}=findVehicleTreeInfoList
   const powerTool=["deactivate", "add", "export", "offline", "remove", "unbind", "replace", "modify", "import", "modifycomp", "modifyplat"]
     const formInline=ref()
 const powerTool1=["add","modify","import"]
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
const columnList=ref([
        { label: 'label', prop: "name" },
        { label: 'labelmber', prop: "address" },
        { label: 'labelcE', rop: "date" },
        { label: 'labeltecode', prop: "terminalCode",width:120 },
        { label: 'labelc', prop: "realMobileCode" },
        { label: 'labelus', prop: "isLogout",formatter:filterLogStuas },
])
function filterLogStuas(item:{}){
console.log(item)
}
     
</script>
<style lang="scss" scoped>
.publictreeContentView{
    height: 100%;
    position: relative;
    .header{
        height:65px;
    }
  
}
</style>