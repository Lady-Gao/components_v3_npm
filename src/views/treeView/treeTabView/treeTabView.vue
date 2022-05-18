<template>
    <div class="content">
      <!--   :titles="treeTitle" -->
        <treeTab
     
         :isCheck='false'
         :otherParam="{categories:'2'}"
        />
         <treeTab
       
         :isCheck='true'
         :otherParam="{categories:'2'}"
         @current-change="currentChange"
         @node-click='nodeClick'
        />
    </div>
</template>

<script setup lang="ts">
  import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
   const {VehicleTreeInfoList}=findVehicleTreeInfoList
  const treeTitle=[false, '车辆列表',false ]
  function currentChange(val:any){
    console.log(val,'currentChange')
  }
  function nodeClick(mess:{}){
    console.log(mess,'nodeClick')
  }
</script>

<style lang="scss" scoped>
.content{
    height:100%;
    display: flex;
  justify-content: space-between;
}
</style>