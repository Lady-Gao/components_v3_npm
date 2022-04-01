

<template>
  <div class="fenceManage">
    fenceManage
    <el-button @click="changeedit(false)">添加</el-button>
    <el-button @click="changeedit(true)">修改</el-button>
    <Map :zoom="13" ref="MAP" id="fenceManage">
      <!-- <MapTool :type='fenceManageType' ref='MapToolRef' /> -->
      <EditPlugin
        :type="fenceManageType"
        :edit="edit"
        :overlayOptions="overlayOptions"
      />
    </Map>

    <div>
      <el-button @click="change('marker')">画点</el-button>
      <el-button @click="change('polyline')"> 画折线</el-button>
      <el-button @click="change('polygon')"> 画多边形</el-button>
      <el-button @click="change('rectangle')"> 画矩形</el-button>
      <el-button @click="change('circle')"> 画圆</el-button>
      <el-button @click="remove"> 清除 </el-button>
      <el-button @click="close"> 关闭绘制 </el-button>
    </div>
    <div>
      <el-button @click="and('marker')">显示点</el-button>
      <el-button @click="and('polyline')">显示 折线</el-button>
      <el-button @click="and('polygon')"> 显示多边形</el-button>
      <el-button @click="and('rectangle')"> 显示矩形</el-button>
      <el-button @click="and('circle')">显示 圆</el-button>
     <el-button @click="changeedit(true)">开启编辑状态</el-button>
       <el-button @click="changeedit(false)">关闭编辑状态</el-button>
    </div>

    <div>
      <el-button @click="and('marker',true)">一开始就编辑点</el-button>
      <el-button @click="and('polyline',true)">一开始就编辑 折线</el-button>
      <el-button @click="and('polygon',true)"> 一开始就编辑多边形</el-button>
      <el-button @click="and('rectangle',true)"> 一开始就编辑矩形</el-button>
      <el-button @click="and('circle',true)">一开始就编辑 圆</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const fenceManageType = ref<String>("marker");
const overlayOptions = ref({
   position: [116.428945, 39.89663],
        icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
});
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
  edit.value = val;
    if(!val)change('')
}

function and(val: string,flag?:boolean) {
  //编辑打开
  if(flag){
    edit.value=true
  }

  fenceManageType.value = val; //更改类型]
  
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
}

function editFun(val){

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