<template>
    <div class="treeListView">
        <treeList  :ListApi="ListApi1" :headers="headers"
            :isCollection="true" :collectionApi="collectionApi" :uncollectionApi="uncollectionApi"
             @clcik_collection='clcik_collection'/>
         <treeList  :ListApi="ListApi2" :headers="headers"  :uncollectionApi="uncollectionApi"
         :isEdit="true" :isDelete="true"  :collectionApi="collectionApi"   @clcik_edit='clcik_edit'  @clcik_delete='clcik_delete' 
/>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const ListApi1='http://web2.test.cvtsp.com/api/basic/tree/getVehicleListByPlate'                         
const ListApi2='http://web2.test.cvtsp.com/api/basic/vehicle/findVehicleAttentionInfoList'
const collectionApi='http://web2.test.cvtsp.com/api/basic/vehicle/insertVehicleAttentionInfo'
const uncollectionApi='http://web2.test.cvtsp.com/api/basic/vehicle/deleteVehicleAttentionInfo'
const deleteApi='http://web2.test.cvtsp.com/api/basic/vehicle/deleteVehicleAttentionInfo'
const token = localStorage.getItem('token')
const headers = {
  token,
  'Authorization': 'Bearer ' + token
}
 // 收藏事件
        function clcik_collection(row:{}){
            console.log(row,'row')
        }
         // 编辑事件
        function clcik_edit(row:{}){
        }
         // 删除事件
        function clcik_delete(row:{}){
        }
</script>
<style>
.treeListView {
  display: flex;
  justify-content: space-between;
  height: 500px;

}
</style>