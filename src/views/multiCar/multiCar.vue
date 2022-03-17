

<template>
    <div>
multiCar  {{currentMarkerId}}
 <Map :name="mapName" >
     <span v-for="item in carList"  :key="item.id">

     <Marker :id="item.id" 
     :position="currentMarkerId!=item.id?null:item.position" :Icon="item.icon"  :usemoveTransform="true"
      @click="clickMarker" @moving="markerMoving" 
      ></Marker>
     </span>
     <!-- 巡航器 平滑的对象 -->
      <PathSimplifierIns :currentData='currentData'  @moveing='PathSimplifierInsmoveing' ref='PathSimplifierIns' @click="PathSimplifierInsClick"/>
    <InfoWindow :position='InfoBox.position' :content='InfoBox.content' 
     @close='InfoWindowclose'/>
</Map>
<el-button @click="addCar">添加一辆车</el-button>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import httpData from './data'
const mapName='AMap'
const icon1="https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"
const icon2="https://fs.cvtsp.com/images-shihang-login.png"
let id=0;

const carList=reactive([{
    id:0,
    icon:icon1,
    position:[116.497428, 39.20923],
     
}])
let currentMarkerId=ref(0)//当前选中的id

const InfoBox=reactive({
    position:[],//信息弹框定位
    content:''//信息弹框文本内容
})




const currentData=ref({})//平滑对象
/**
 * 点击marker,弹出信息框，marker移动，更新信息框，
 * 未点击marker,不弹出信息框
 */
let haveclickMarker=false //当前是否点击了marker,
function clickMarker(val ){
    console.log('点击了marker')
      currentMarkerId.value=val.id
      InfoBox.content=`<div><h1>${val.id+'号 ： '+val.lnglat}</h1></div>`
     InfoBox.position=val.lnglat
     haveclickMarker=true
     
}

/**
 * 
 * @param val 点击平滑对象
 */
function PathSimplifierInsClick(val){
console.log(val,'点击了PathSimplifierIns')
}

/**
 * 添加一个marker  弹框更新
 */
function addCar(){
    id++;
    let num=parseInt(Math.random()*30)
    carList[id]={
        id,
        position:httpData[num],
         icon:icon1,
    }
        currentMarkerId.value=id
      clickMarker({
          id,
           icon:icon1,
          lnglat:httpData[num]
      })
}

/**
 * marker移动时 点击了marker 就更新定位
 */
function markerMoving(val){
    if(haveclickMarker&&val.id==currentMarkerId.value){
        //只对当前选中的车辆 进行信息框更新
         InfoBox.position=val.lnglat
    }
}
/**
 * PathSimplifierIns平滑对象移动时 点击了marker 就更新定位
 */
function PathSimplifierInsmoveing(val){

}

function InfoWindowclose(){
    haveclickMarker=false
    console.log('关闭了')
}


setInterval(()=>{
    for (let index = 0; index < carList.length; index++) {
         let num=parseInt(Math.random()*30)
       carList[index].position=httpData[num]//更换位置
    //    carList[index].icon=icon2//更换图标
         
        
     }
   
    //更新弹框内容
     InfoBox.content=`<div><h1>${carList[currentMarkerId.value].id +'号 ： '+carList[currentMarkerId.value].position}</h1></div>`

},5000)
</script>

<style scoped>
.Map{
    height:500px;
    width: 100%;
}
</style>