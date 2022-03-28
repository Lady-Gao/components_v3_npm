

<template>
  <div class="history">
    history
    <Map :name="mapName" :zoom="3" ref="MAP" id="history">
      <!-- 不能跳点 -->
      <PathSimplifierIns
        :position="hisdata"
        :icon="icon1"
        model="history"
        @pointClick='pointClicks'
      />
      
      <Liner :path="path" />
      <!-- <Liner :path="movepath" /> -->
      <!-- <MoveAnimation ref='hMoveAnimation'/> -->
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
import { listPoints, icon1, icon2 } from "../../utils/data";
const hMoveAnimation = ref();
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