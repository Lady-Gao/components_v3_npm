<template>
    <div class="treeListView">
        <treeList  :ListApi="ListApi1" 
            :isCollection="true" :collectionApi="collectionApi" :uncollectionApi="uncollectionApi"
             @clcik_collection='clcik_collection'/>
         <treeList  :ListApi="ListApi2"  :uncollectionApi="uncollectionApi"
         :isEdit="true" :isDelete="true"  :collectionApi="collectionApi"   @clcik_edit='clcik_edit'  @clcik_delete='clcik_delete' 
/>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const ListApi1='/basic/tree/getVehicleListByPlate'                         
const ListApi2='/basic/vehicle/findVehicleAttentionInfoList'
const collectionApi='/basic/vehicle/insertVehicleAttentionInfo'
const uncollectionApi='/basic/vehicle/deleteVehicleAttentionInfo'
const deleteApi='/basic/vehicle/deleteVehicleAttentionInfo'

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