<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import multiCar from './views/multiCar/multiCar.vue'
import history from './views/history/history.vue'
import history2 from './views/history2/history2.vue'
import { getMapScript } from './utils/scriptHelper';
import { ref } from 'vue';

const mapReady=ref(false)
//加载js地图文件
// getMapScript('AMap', 'https://webapi.amap.com/maps?v=2.0&key=966a1cec27bf619fc0b3d8683e8f4c01').then(val=>{
//     mapReady.value=true
// })v-if="mapReady"
</script>

<template>
   <el-tabs tab-position="left"  >
     <el-tab-pane label="history2">
        <history2/>
    </el-tab-pane>
    <el-tab-pane label="history">
        <history/>
    </el-tab-pane>
    <el-tab-pane label="multiCar">
        <multiCar/>
    </el-tab-pane>
  
  </el-tabs>
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
