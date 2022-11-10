

<template>
  <div class="history">
    history实现1
    <Map  :zoom="3" ref="MAP" id="history">
      <!-- 不能跳点 -->
      <PathSimplifierIns ref="hPathSimplifierIns"
        :position="hisdata"
        model="history"
        @pointClick='pointClicks'
        @moveing="moveing"
      />
      
      <!-- <Liner :path="path" /> -->
    
    </Map>

    <el-button @click="startAnimation">开始动画</el-button>
    <el-button @click="pauseAnimation">暂停动画</el-button>
    <el-button @click="resumeAnimation">继续动画</el-button>
    <el-button @click="stopAnimation">停止动画</el-button>
    <el-button @click="destroy">销毁</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { listPoints, icon1, icon2 } from "@utils/dataC";
const hPathSimplifierIns = ref();
function startAnimation() {
 hPathSimplifierIns.value.start();
}
function pauseAnimation() {
 hPathSimplifierIns.value.pause()
}
function resumeAnimation() {
 hPathSimplifierIns.value.resume()
}
function stopAnimation() {
 hPathSimplifierIns.value.stop()
}
function destroy() {
 hPathSimplifierIns.value.destroy()
}
function moveing(val:any){
}
//平滑对象
const hisdata = [
  { point: [111.497428, 39.20923], icon: icon2 },
  { point: [116.497428, 21.20923], icon: icon1 },
  { point: [113.597428, 36.20923], icon: icon2 },
  { point: [124.697428, 29.280923], icon: icon1 },
  { point: [125.397428, 37.20923], icon: icon2 },
];

const path = [
  [111.497428, 39.20923],
  [116.497428, 21.20923],
  [113.597428, 36.20923],
  [124.697428, 29.280923],
  [125.397428, 37.20923],
];

const movepath=ref([])
 
// const historyData = ref([{}]);
// setTimeout(() => {
//   console.log('settimg')
//   historyData.value =hisdata ;
// }, 8000);


function pointClicks(){
  return  console.log(arguments,'pointClick')
}
</script>


<style scoped lang='scss'>
.history {
  .Map {
    height: 500px;
    width: 100%;
  }
}
</style>