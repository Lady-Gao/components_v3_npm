

<template>
  <div class="history2">
    history实现2
    <Map  :zoom="13" ref="MAP" id="history2" :center='[116.478935, 39.997761]'>
      
      <Liner :path="lineArr" />
         <MoveAnimation ref='hMoveAnimation' :lineArr='lineArr' id=''/> 
    </Map>

  
    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="pauseAnimation">暂停动画</el-button>
    <el-button @click="resumeAnimation">继续动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
    <el-button>跳点</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { listPoints, icon1, icon2 } from "@/utils/data";
console.log('history2')
const lineArr = ref();
const hMoveAnimation = ref();
setTimeout(() => {
  lineArr.value=[[116.478935, 39.997761], [116.478939, 39.997825], [116.478912, 39.998549], [116.478912, 39.998549], [116.478998, 39.998555], [116.478998, 39.998555], [116.479282, 39.99856], [116.479658, 39.998528], [116.480151, 39.998453], [116.480784, 39.998302], [116.480784, 39.998302], [116.481149, 39.998184], [116.481573, 39.997997], [116.481863, 39.997846], [116.482072, 39.997718], [116.482362, 39.997718], [116.483633, 39.998935], [116.48367, 39.998968], [116.484648, 39.999861]]
  
}, 3000);
function startAnimation() {

  hMoveAnimation.value.startAnimation();
}
function pauseAnimation() {
  hMoveAnimation.value.pauseAnimation();
}
function resumeAnimation() {
  hMoveAnimation.value.resumeAnimation();
}
function stopAnimation() {
  hMoveAnimation.value.stopAnimation();
}
function jump() {
  hMoveAnimation.value.startAnimation();
}






</script>


<style scoped lang='scss'>
.history2 {
  .Map {
    height: 500px;
    width: 100%;
  }
}
</style>