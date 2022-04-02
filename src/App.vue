<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { getMapScript } from "./utils/scriptHelper";
import { ref } from "vue";
import { useRouter } from "vue-router"
const activeName = ref('/multiCar')
    const router = useRouter()
 
function tabClick(val:String){
  router.push(activeName.value)


}
</script>

<template>
  <div>
    <el-tabs  @tab-click='tabClick' v-model="activeName">
      <el-tab-pane label="multiCar" name='multiCar'> </el-tab-pane>
      <el-tab-pane label="history2" name='history2'> </el-tab-pane>
      <el-tab-pane label="history" name='history'> </el-tab-pane>
      <el-tab-pane label="fenceManage" name='fenceManage'> </el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
