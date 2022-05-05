<template>
       <div class='treeSearchView'>
         <p>
            <treeSearch :treeData="VehicleTreeInfoList"
                      :lazy='lazy'
                    :headers='headers'
                    :isCheck="false"
                    :showIcon="true"
                    :hoverOperation="hoverOperation"
                      @node-check="nodeCheck"
                       @node-click='nodClick'
               />
         </p>
             <el-form :inline="true"  class="demo-form-inline">
    <el-form-item label="Approved by">
       <treeSearch :treeData="EnterpriseTreeList" v-model="myId"
            :open="false"
                      @node-check="nodeCheck"
                       @node-click='nodClick'
               />
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary">Query</el-button>
    </el-form-item>
  </el-form>
           
       </div>
</template>

<script setup lang="ts">
 import findVehicleTreeInfoList from '@/utils/findVehicleTreeInfoList.json'
     import getEnterpriseTreeList from '@/utils/getEnterpriseTreeList.json'
import { ref,watch } from 'vue'
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
    if(val.type!=4)return {}
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


    const myId=ref()
    setTimeout(() => {
      myId.value=53434
    }, 3000);
    watch(() => myId.value, myIdChange)
//输入框改变
function myIdChange(val: any) {
  console.log(val)

}
</script>

<style lang='scss'>
 .treeSearchView{
display: flex;
    justify-content: space-between;
   height: 500px;
  
 }
</style>