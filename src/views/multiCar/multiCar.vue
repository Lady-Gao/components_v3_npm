

<template>
    <div>
multiCar
 <Map :name="mapName" >
     <Marker v-for="item in carList" :id="item.id" :key="item.id"
     :position="item.position" :Icon="icon"  :usemoveTransform="true"
      @click="clickMarker" @moving="markerMoving"
      ></Marker>
          <!-- <Marker :position="position" :Icon="icon" :intoMap="false"></Marker> -->
      <!-- <Liner></Liner> -->
      <!-- <DistrictCluster>
      </DistrictCluster> -->
    <InfoWindow :position='position' :content='InfoWindowcontent' 
     @close='InfoWindowclose'/>
</Map>
<el-button @click="addCar">添加一辆车</el-button>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import httpData from './data'
const mapName='AMap'
const icon="https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"
 const position=ref([])
 const InfoWindowcontent=ref('InfoWindowcontent')
const currentMarkerId=ref(0)
let haveclickMarker=false
let id=0;
const carList=reactive([{
    id:0,
    position:[116.497428, 39.20923]
}])
/**
 * 点击marker,弹出信息框，marker移动，更新信息框，
 * 未点击marker,不弹出信息框
 */
function clickMarker(val ){
    console.log(val,'clickMarker')
   
      currentMarkerId.value=val.id
      InfoWindowcontent.value=val.id
     position.value=val.lnglat
     haveclickMarker=true
     
}

function addCar(){
    id++;
    let num=parseInt(Math.random()*30)
    carList[id]={
        id,
        position:httpData[num]
    }
        currentMarkerId.value=id
}
setInterval(()=>{
    for (let index = 0; index < carList.length; index++) {
         let num=parseInt(Math.random()*30)
       carList[index].position=httpData[num]
         
     }
   
},5000)

function markerMoving(val){
    if(haveclickMarker&&val.id==currentMarkerId.value){
        //当前选中的车辆 进行信息框更新
        position.value=val.lnglat
        InfoWindowcontent.value=val.id 
    }
}

function InfoWindowclose(){
    //  position.value=[]
    haveclickMarker=false
    console.log('关闭了')
}
</script>

<style scoped>
.Map{
    height:500px;
    width: 100%;
}
</style>