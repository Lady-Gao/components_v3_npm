

<template>
  <div class='multiCar'>
    multiCar {{ currentMarkerId }} carList:{{ carList.length }}
    <Map  :zoom="3" ref="MAP" id='multiCar'>
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
      <PathSimplifierIns  :id='currentMarkerId' :position='realTimeData.position' :icon='realTimeData.icon'   model='realTime' @moveing='PathSimplifierInsmoveing'/>
        <!-- <PathSimplifierIns     model="history"    :position="hisdata"  :icon='icon1'/> -->
   
      <!-- <Liner :path="[[111.497428, 39.20923],[125.397428, 37.20923]]" /> -->
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
import {listPoints,icon1,icon2} from "@/utils/dataC";
const mapName = "AMap";

const carObj = reactive<any>({});
const carList = reactive<
  { id: string; position: number[]; icon: String | null; remove: boolean }[]
>([]);
// {
//     id:0,
//     icon:icon1,
//     position:[116.497428, 39.20923],

// }
let currentMarkerId = ref(); //当前选中的id

const InfoBox = reactive({
  position: [], //信息弹框定位
  content: "", //信息弹框文本内容
});

const realTimeData = reactive<{ position: number[]; icon: string; id: any }>({
  position:[],
  icon: '',
  id: null,
}); //平滑对象
const hisdata=[
    { point: [111.497428, 39.20923], icon: icon2 },
    { point: [116.497428, 21.20923], icon: icon1 },
    { point: [113.597428, 36.20923], icon: icon2 },
    { point: [124.697428, 29.280923], icon: icon1 },
    { point: [125.397428, 37.20923], icon: icon2 },
  ]
  const hisArr=[[111.497428, 39.20923],[116.497428, 21.20923]]
const historyData = ref([{}]);
setTimeout(() => {
  console.log('settimg')
  historyData.value =hisdata ;
}, 8000);
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
    position: listPoints[num],
    icon: "null",
    remove: false,
  });
  clickMarker({
    id,
    lnglat: listPoints[num],
  });
}

/**
 * 点击marker,弹出信息框，marker移动，更新信息框，
 * 未点击marker,不弹出信息框
 */
let haveclickMarker = false; //当前是否点击了marker,
function clickMarker(val: { lnglat: any; id: string }) {
  console.log("点击了marker", val.id);

  carList.map((item) => {
    if (item.id == val.id) {
      //点击时变图片
      item.icon = "null";
    } else {
      item.icon = icon1;
    }
  });
  currentMarkerId.value = val.id;
  InfoBox.content = `<div><h1>${val.id + "号 ： " + val.lnglat}</h1></div>`;
  InfoBox.position = val.lnglat;

  realTimeData.id = val.id;
  realTimeData.position = val.lnglat; //平滑更新
  realTimeData.icon = icon1;

  haveclickMarker = true;
}

/**
 * marker移动时 更新infort弹框
 */
function markerMoving(val: { lnglat: []; id: string }) {
  // if (haveclickMarker && val.id == currentMarkerId.value) {
  //   //只对当前选中的车辆 进行信息框更新
  //   InfoBox.position = val.lnglat;
  // }
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
 
  if (delidnex.value == currentMarkerId.value) {
    //关闭弹框
    infoBoxref.value.close();
     currentMarkerId.value=null
  }
  
}

function InfoWindowclose() {
  haveclickMarker = false;
  console.log("关闭了");
}

/**
 * PathSimplifierIns平滑对象移动时 点击了marker 就更新定位
 */
function PathSimplifierInsmoveing(val:any) {
  // console.log(val,'PathSimplifierInsmoveing')
  if (haveclickMarker) {
    //只对当前选中的车辆 进行信息框更新
    InfoBox.position = val;
  }
}
/**
 *
 * @param val 点击平滑对象
 */
function PathSimplifierInsClick(val: any) {
  console.log(val, "点击了PathSimplifierIns");
}
var bool: boolean = true;
setInterval(() => {
  if (!carList.length) return;
  carList.map((item) => {
    let num = Math.floor(Math.random() * 30);
    item.position = listPoints[num]; //更换位置

    if (item.id == currentMarkerId.value) {
      //实时更换图标

      realTimeData.position = item.position; //平滑更新
      //模拟图片更滑
      realTimeData.icon = bool ? icon1 : icon2;
      bool = !bool;

      item.icon = null;
    } else {
      item.icon = icon1;
    }
  });
  //    carList[index].icon=icon2//更换图标
}, 5000);
</script>

<style scoped lang='scss'>
.multiCar{
.Map{
  height: 500px;
  width: 100%;
}
}
</style>