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
            <div class="grid">dsdfsdfsd</div>
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

     
</script>
<style lang="scss" scoped>
.publictreeContentView{
    height: 100%;
    .header{
        height:65px;
    }
    .grid{
        background-color: antiquewhite;
        height: 100%;
    }
}
</style>