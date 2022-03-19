

<template>
  <div>
    multiCar {{ currentMarkerId }} carList:{{ carList.length }}
    <Map :name="mapName" :zoom="3" ref="MAP">
      <!--  :Icon="currentMarkerId==item.id?null:item.icon" :remove='item.remove'-->
      <Marker
        :id="item.id"
        v-for="item in carList"
        :key="item.id"
        :ref="Markers"
        :position="item.position"
        :Icon="item.icon"
        :usemoveTransform="true"
        @click="clickMarker"
        @moving="markerMoving"
      ></Marker>
      <!-- 巡航器 平滑的对象 -->
      <!-- <PathSimplifierIns :currentData='currentData'  @moveing='PathSimplifierInsmoveing' ref='PathSimplifierIns' @click="PathSimplifierInsClick"/> -->
      <InfoWindow
        :position="InfoBox.position"
        :content="InfoBox.content"
        ref="infoBoxref"
        @close="InfoWindowclose"
      />
    </Map>
    <el-button @click="addCar">添加一辆车</el-button>
    <el-button @click="delCar">删除{{ delidnex }}号</el-button>
    <el-input v-model="delidnex"></el-input>
  </div>
</template>

<script setup lang="ts">
/**
 * 点击车辆时  讲当前车辆图片设置为透明
 */
import { computed, reactive, ref } from "vue";
import httpData from "./data";
const mapName = "AMap";
const icon1 = "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png";
const icon2 = "https://fs.cvtsp.com/images-shihang-login.png";

const carList = reactive<
  { id: string; position: number[]; icon: String|null; remove: boolean }[]
>([]);
// {
//     id:0,
//     icon:icon1,
//     position:[116.497428, 39.20923],

// }
let currentMarkerId = ref(""); //当前选中的id

const InfoBox = reactive({
  position: [], //信息弹框定位
  content: "", //信息弹框文本内容
});

const currentData = ref({}); //平滑对象
const carObj = reactive<any>({});

const Markers = (el: any) => {
  el && (carObj[el.id] = el);
};

const infoBoxref = ref();

/**
 * 添加一个marker  弹框更新
 */
function addCar() {
  let id = Math.floor(Math.random() * 10000) + "";
  let num = Math.floor(Math.random() * 30);

  carList.push({
    id,
    position: httpData[num],
    icon: 'null',
    remove: false,
  });
  clickMarker({
    id,
    lnglat: httpData[num],
  });
}

/**
 * 点击marker,弹出信息框，marker移动，更新信息框，
 * 未点击marker,不弹出信息框
 */
let haveclickMarker = false; //当前是否点击了marker,
function clickMarker(val: { lnglat: any; id: string;  }) {
  console.log("点击了marker", val.id);
  currentMarkerId.value = val.id;

  carList.map((item) => {
    if (item.id == val.id) {
      //点击时变图片
      item.icon = 'null';
    } else {
      item.icon = icon1;
    }
  });
  InfoBox.content = `<div><h1>${val.id + "号 ： " + val.lnglat}</h1></div>`;
  InfoBox.position = val.lnglat;
  haveclickMarker = true;
}


/**
 * marker移动时 点击了marker 就更新定位
 */
function markerMoving(val: { lnglat: []; id: string }) {
  if (haveclickMarker && val.id == currentMarkerId.value) {
    //只对当前选中的车辆 进行信息框更新
    InfoBox.position = val.lnglat;
  }
}

/**
 * 删除marker
 */
const delidnex = ref("");
function delCar() {
  carObj[delidnex.value].removeMarker();
  delete carObj[delidnex.value];

  carList.map((item, idx) => {
    if (delidnex.value == item.id) {
      carList.splice(idx, 1);
    }
  });
  if(delidnex.value==currentMarkerId.value){
    //关闭弹框
  infoBoxref.value.close();
  }
}


function InfoWindowclose() {
  haveclickMarker = false;
  console.log("关闭了");
}

/**
 * PathSimplifierIns平滑对象移动时 点击了marker 就更新定位
 */
function PathSimplifierInsmoveing(val: { lnglat: []; id: number }) {}
/**
 *
 * @param val 点击平滑对象
 */
function PathSimplifierInsClick(val: any) {
  console.log(val, "点击了PathSimplifierIns");
}
setInterval(() => {
  if (!carList.length) return;
  carList.map((item) => {
    let num = Math.floor(Math.random() * 30);
    item.position = httpData[num]; //更换位置

     if (item.id == currentMarkerId.value) {//实时更换图标
      item.icon = null;
    } else {
      item.icon = icon1;
    }
  });
  //    carList[index].icon=icon2//更换图标

}, 5000);
</script>

<style scoped>
.Map {
  height: 500px;
  width: 100%;
}
</style>