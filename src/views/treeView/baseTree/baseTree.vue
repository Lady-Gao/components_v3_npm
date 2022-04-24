<template>
<div class='baseTree'>
  <el-col :span='12'>
 异步树 为平铺的数据格式
       <tree 
            :treeData='VehicleTreeInfoList'
       :lazy='lazy'
       :headers='headers'
       :otherParam='{categories: 2}'
       />

  </el-col>
   <el-col :span='12'>
     正常树 为有层级且带有有children属性
       <tree 
       :treeData='EnterpriseTreeList'
       />
   </el-col>
</div>
      
      
</template>
    
<script setup lang='ts'>
    import getEnterpriseTreeList from '@/utils/getEnterpriseTreeList.json'
    import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
    const {EnterpriseTreeList}=getEnterpriseTreeList
    const {VehicleTreeInfoList}=findVehicleTreeInfoList


    const lazy='http://web2.test.cvtsp.com/api/basic/tree/findVehicleTreeInfoList'
    const token='588a179d-8415-4f10-9062-f61e7c0d017a'
    const headers={
                    token,
                   'Authorization':'Bearer '+token
    }
</script>
    
<style lang='scss'>
 .baseTree{

   height: 500px;
   background: pink;
   .el-col{
 height: 100%;
   }
 }
</style>