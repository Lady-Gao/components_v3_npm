

<template>
  <div class="fenceManage">
    fenceManage
    
    <!-- 鼠标工具demo -->
    <!-- <Map :zoom="13" ref="MAP" id="fenceManage">
      <MouseTool :type='fenceManageType' ref='MapToolRef' @draw='draw' />
      
    </Map>

    <div>
      <el-button @click="change('marker')">画点</el-button>
      <el-button @click="change('polyline')"> 画折线</el-button>
      <el-button @click="change('polygon')"> 画多边形</el-button>
      <el-button @click="change('rectangle')"> 画矩形</el-button>
      <el-button @click="change('circle')"> 画圆</el-button>
      <el-button @click="remove"> 清除 </el-button>
      <el-button @click="close"> 关闭绘制 </el-button>
    </div> -->

      <!-- 矢量图形编辑demo -->
      <Map :zoom="13">
        <EditPlugin
        type="circle"
        :edit="true"
        :overlayOptions="{
          center: [116.433322, 39.900255],
        radius: 1000, //半径
        }"
        @end='endCallback'
      />  
    </Map>
    <!-- <Map :zoom="13">
        <EditPlugin
        :type="fenceManageType"
        :edit="edit"
        :overlayOptions="overlayOptions"
        @end='endCallback'
      /> 
    </Map>
    <div>
      <el-button @click="and('marker')">显示点</el-button>
      <el-button @click="and('polyline')">显示 折线</el-button>
      <el-button @click="and('polygon')"> 显示多边形</el-button>
      <el-button @click="and('rectangle')"> 显示矩形</el-button>
      <el-button @click="and('circle')">显示 圆</el-button>
     <el-button @click="changeedit(true)">开启编辑状态</el-button>
       <el-button @click="changeedit(false)">关闭编辑状态</el-button>
        <el-button @click="cleanOverlay">关闭并清除覆盖物</el-button>
    </div> -->

    <!-- <div>
      <el-button @click="and('marker',true)">一开始就编辑点</el-button>
      <el-button @click="and('polyline',true)">一开始就编辑 折线</el-button>
      <el-button @click="and('polygon',true)">一开始就编辑多边形</el-button>
      <el-button @click="and('rectangle',true)">一开始就编辑矩形</el-button>
      <el-button @click="and('circle',true)">一开始就编辑 圆</el-button>
    </div> -->
   
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const fenceManageType = ref<String>("");
const overlayOptions = ref();
const edit = ref<boolean>(false);
const MapToolRef = ref();
let path = [
  [116.362209, 39.887487],
  [116.422897, 39.878002],
  [116.372105, 39.90651],
  [116.428945, 39.89663],
];


function change(val: String) {
  fenceManageType.value = val;

}


function changeedit(val: boolean) {
  console.log('changeedit')
  edit.value = val;
}
function cleanOverlay(){
   edit.value =false
  fenceManageType.value=''
}
function and(val: string,flag?:boolean) {
  //编辑打开
 
  
  switch (val) {
    case "marker":
      overlayOptions.value = {
        position: [116.428945, 39.89663],
        icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
       
      };
      break;
    case "polyline":
      overlayOptions.value = {
        path,
      };
      break;
    case "polygon":
      overlayOptions.value = {
        path,
      };
      break;
    case "rectangle":
      overlayOptions.value = {
        southWest: [116.356449, 39.859008],
        northEast: [116.417901, 39.893797],
      };
      break;
    case "circle":
      overlayOptions.value = {
        center: [116.433322, 39.900255],
        radius: 1000, //半径
      };
      break;
  }
  

  fenceManageType.value = val; //更改类型]
   if(flag){
    edit.value=true
  }
}

function draw(val:any){
  console.log(val,'draw')
}
function endCallback(val:Event){
console.log(val,'endCallback')
}
function remove() {
  MapToolRef.value.remove();
}

function close() {
  MapToolRef.value.close();
}
</script>

<style scoped lang='scss'>
.fenceManage {
  .Map {
    height: 500px;
    width: 100%;
  }
}
</style>