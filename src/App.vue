<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { getMapScript } from "@/utils/scriptHelper";
import { ref } from "vue";
import { useRouter } from "vue-router"
const activeName = ref('/baseTree')
    const router = useRouter()
 
function tabClick(val:String){
  router.push(activeName.value)


}
</script>

<template>
  <div class='flexRoute'>
      <div >
        <el-tabs tab-position='left'  @tab-click='tabClick' v-model="activeName" >
       <el-tab-pane label="home" name='home'> </el-tab-pane>
      <el-tab-pane label="multiCar" name='multiCar'> </el-tab-pane>
      <el-tab-pane label="MoveAnimation" name='history2'> </el-tab-pane>
      <el-tab-pane label="history" name='history'> </el-tab-pane>
      <el-tab-pane label="fenceManage" name='fenceManage'> </el-tab-pane>
       <el-tab-pane label="baseTree" name='baseTree'> </el-tab-pane>
    </el-tabs>
      </div>
    <div class='flex1'><router-view /></div>
  </div>
</template>

<style lang='scss'>
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
.flexRoute{
  display: flex;
  .flex1{
    flex: 1;
  }
}
</style>
