<template>
<div class='baseTree'>
  <p>
 异步树 为平铺的数据格式 VehicleTreeInfoList
       <tree 
            :treeData='VehicleTreeInfoList'
       :lazy='lazy'
       :headers='headers'
       :otherParam='{categories: 2}'
       />

  </p>
   <p>
     正常树 为有层级且带有有children属性 EnterpriseTreeList
       <tree  :isCheck='true'
       :treeData='EnterpriseTreeList'
       />
   </p>
     <p>
     正常树 OrganizationTreeList
       <tree 
       :treeData='OrganizationTreeList'
       />
   </p>
</div>
      
      
</template>
    
<script setup lang='ts'>
    import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
    import getEnterpriseTreeList from '@/utils/getEnterpriseTreeList.json'
      import findEnterpriseOrganizationTreeList from '@/utils/findEnterpriseOrganizationTreeList.json'
    const {VehicleTreeInfoList}=findVehicleTreeInfoList
    const {EnterpriseTreeList}=getEnterpriseTreeList

    const {OrganizationTreeList}=findEnterpriseOrganizationTreeList
    const lazy='http://web2.test.cvtsp.com/api/basic/tree/findVehicleTreeInfoList'

    
    const token='1b03d944-2292-484b-91d6-cf68f67486f4'
    const headers={
                    token,
                   'Authorization':'Bearer '+token
    }
</script>
    
<style lang='scss'>
 .baseTree{
display: flex;
    justify-content: space-between;
   height: 500px;
   .el-col{
 height: 100%;
   }
 }
</style>