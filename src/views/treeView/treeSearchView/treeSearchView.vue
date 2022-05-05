<template>
        <treeSearch :treeData="VehicleTreeInfoList"
         :lazy='lazy'
       :headers='headers'
       :isCheck="false"
       :showIcon="true"
       :hoverOperation="hoverOperation"
        @node-check="nodeCheck"
 @node-click='nodClick'
        />
</template>

<script setup lang="ts">
 import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
     import getEnterpriseTreeList from '@/utils/getEnterpriseTreeList.json'
   const {VehicleTreeInfoList}=findVehicleTreeInfoList
 const {EnterpriseTreeList}=getEnterpriseTreeList
  const lazy='http://web2.test.cvtsp.com/api/basic/tree/findVehicleTreeInfoList'
    const token=localStorage.getItem('token')
    console.log(token)
    const headers={
                    token,
                   'Authorization':'Bearer '+token
    }


    function hoverOperation(val:any){
    
     return {
        template:val.type==4?'<i>收藏</i>':'',
        methods(){//点击会触发onclick方法
         console.log(77777)
        }
     }
    }
    //点击事件
    function nodClick(mess:any){
      console.log(mess,'onClicktreeSearch')
    }
    //复选框点击事件
    function nodeCheck(mess:any){
      console.log(mess,'nodeChecktreeSearch')
    }
</script>

<style>

</style>