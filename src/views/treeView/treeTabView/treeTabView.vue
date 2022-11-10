<template>
    <div class="treeTabView">
      <!--   :titles="treeTitle"       :isCollection="false" -->
      <el-col span="6">
          <treeTab
      :treeData="VehicleTreeInfoList"
         :isCheck='false'
  @node-click='nodeClick'
        />
      </el-col>
       <el-col span="6">
         <treeTab :titles="treeTitle" 
       :lazy="divervehilceApi"
       :vehicleListApi="diverlistsApi"
       :selection="selection"
   :isCollection="false"
         :isCheck='true'
          :isOnlineStatus="false"
         vehicleListName="text"
         :otherParam="{categories:'2'}"
         @current-change="currentChange"
         @node-click='nodeClick'
        />
         </el-col>
    </div>
</template>

<script setup lang="ts">
  import findVehicleTreeInfoList from '@utils/findVehicleTreeInfoList.json'
   const {VehicleTreeInfoList}=findVehicleTreeInfoList
  const treeTitle=['车辆树', '车辆列表',false ]
  const lazy="/basic/tree/findVehicleTreeInfoList"//车多
   const diverlistsApi= "/basic/driver/findDriverMenuPage"
  const divervehilceApi='/basic/sysEnterprise/findEnterpriseTreeDriverList'
  const selection =[
        { label: "司机姓名", value: "username" },
        { label: "components.common.company", value: "enterpriseName" },
        { label: "components.common.plateCode", value: "plateCode" },
      ]
  function currentChange(val:any){
    console.log(val,'currentChange')
  }
  function nodeClick(mess:{}){
    console.log(mess,'nodeClick')
  }
</script>

<style lang="scss" scoped>
.treeTabView{
    height:100%;
 width: 100%;
     display: flex;
    justify-content: space-between;
  .el-col{
        height:100%;
         width: 320px;
    position: relative;
  }
}
</style>