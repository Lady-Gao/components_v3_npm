<template>
<div class='baseTree'>
  <p>
 异步加载树 为平铺的数据格式 VehicleTreeInfoList
       <tree 
         :treeData='VehicleTreeInfoList'
       :lazy='lazy'
       :headers='headers'
         :isCheck='true'
         :limitCheck="limitCheck"
        
         @node-check="nodeCheck"
       />

  </p>
   <p>
 子节点异步加载树 为平铺的数据格式 VehicleTreeInfoList
       <tree 
       :lazy='lazy'  
       :headers='headers'
       :otherParam='{categories: 2}'
         @node-click='nodClick'
       />

  </p>
   <p>
     正常树 为有层级且带有有children属性 EnterpriseTreeList
       <tree  :isCheck='true'
       :treeData='EnterpriseTreeList'
         @node-check="nodeCheck"
      
       />
   </p>
     <p>
     正常树 OrganizationTreeList
       <tree 
       :treeData='OrganizationTreeList'
        @node-click='nodClick'
       />
   </p>
</div>
      
      
</template>
    
<script setup lang='ts'>
    import findVehicleTreeInfoList from '@utils/findVehicleTreeInfoList.json'
    import getEnterpriseTreeList from '@utils/getEnterpriseTreeList.json'
      import findEnterpriseOrganizationTreeList from '@utils/findEnterpriseOrganizationTreeList.json'
    const {VehicleTreeInfoList}=findVehicleTreeInfoList
    const {EnterpriseTreeList}=getEnterpriseTreeList

    const {OrganizationTreeList}=findEnterpriseOrganizationTreeList
    const lazy='/basic/tree/findVehicleTreeInfoList'
    const token=localStorage.getItem('token')
    console.log(token)
    const headers={
                    token,
                   'Authorization':'Bearer '+token
    }

    //勾选之前的条件限制 车辆大于10条 不可勾选
    function limitCheck(treeNode:any){
      if(treeNode.sumCount>80){
        alert('车辆大于10条 不可勾选')
        return false
      }else{
        return true
      }
    }
//点击事件
    function nodClick(mess:any){
      console.log(mess,'onClick')
    }
    //复选框点击事件
    function nodeCheck(mess:any){
      console.log(mess,'nodeCheck')
    }
</script>
    
<style lang='scss'>
 .baseTree{
display: flex;
    justify-content: space-between;
   height: 500px;
  
 }
</style>