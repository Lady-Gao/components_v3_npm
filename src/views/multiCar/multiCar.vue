

<template>
    <div>
multiCar  {{currentMarkerId}} carList:{{carList.length}}
 <Map :name="mapName" :zoom='3' ref='MAP'>
     <!--  :Icon="currentMarkerId==item.id?null:item.icon" :remove='item.remove'-->
         <Marker :id="item.id"  v-for="item in carList"  :key="item.id" :ref='Markers'
     :position="item.position" :Icon="currentMarkerId==item.id?null:item.icon"  :usemoveTransform="true"
      @click="clickMarker" @moving="markerMoving"  
      ></Marker>
     <!-- 巡航器 平滑的对象 -->
      <!-- <PathSimplifierIns :currentData='currentData'  @moveing='PathSimplifierInsmoveing' ref='PathSimplifierIns' @click="PathSimplifierInsClick"/> -->
    <InfoWindow :position='InfoBox.position' :content='InfoBox.content' 
     @close='InfoWindowclose'/>
</Map>
<el-button @click="addCar">添加一辆车</el-button>
<el-button @click="delCar">删除一号</el-button>
    </div>
</template>

<script setup lang="ts">
/**
 * 点击车辆时  讲当前车辆图片设置为透明
 */
import { reactive, ref } from "vue"
import httpData from './data'
const mapName='AMap'
const icon1="https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"
const icon2="https://fs.cvtsp.com/images-shihang-login.png"
let id=-1;

const carList=reactive<{id:number,position:number[],icon:String,remove:boolean}[]>([])
// {
//     id:0,
//     icon:icon1,
//     position:[116.497428, 39.20923],
     
// }
let currentMarkerId=ref(0)//当前选中的id

const InfoBox=reactive({
    position:[],//信息弹框定位
    content:''//信息弹框文本内容
})




const currentData=ref({})//平滑对象
 const lsit=reactive({})

const  Markers=(el)=>{
     lsit[el.id]=el
    
    
 }

/**
 * 点击marker,弹出信息框，marker移动，更新信息框，
 * 未点击marker,不弹出信息框
 */
let haveclickMarker=false //当前是否点击了marker,
function clickMarker(val:{lnglat:any,id:number,icon:String} ){
    console.log('点击了marker')
      currentMarkerId.value=val.id
      InfoBox.content=`<div><h1>${val.id+'号 ： '+val.lnglat}</h1></div>`
     InfoBox.position=val.lnglat
     haveclickMarker=true
     
}
/**
 * 删除marker
 */
function delCar(){
lsit[1].removeMarker()
 delete lsit[1]
console.log(lsit,'lsit')
 
}
/**
 * 
 * @param val 点击平滑对象
 */
function PathSimplifierInsClick(val:{lnglat:number[],id:number}){
console.log(val,'点击了PathSimplifierIns')
}

/**
 * 添加一个marker  弹框更新
 */
function addCar(){
    id++;

    let num=Math.floor(Math.random()*30)
    carList[id]={
        id,
        position:httpData[num],
         icon:icon1,
         remove:false
    }
        currentMarkerId.value=id
        console.log(carList,'carList',id)
      clickMarker({
          id,
           icon:icon1,
          lnglat:httpData[num]
      })

}

/**
 * marker移动时 点击了marker 就更新定位
 */
function markerMoving(val:{lnglat:[],id:number}){
    if(haveclickMarker&&val.id==currentMarkerId.value){
        //只对当前选中的车辆 进行信息框更新
         InfoBox.position=val.lnglat
    }
}
/**
 * PathSimplifierIns平滑对象移动时 点击了marker 就更新定位
 */
function PathSimplifierInsmoveing(val:{lnglat:[],id:number}){

}

function InfoWindowclose(){
    haveclickMarker=false
    console.log('关闭了')
}


setInterval(()=>{

    if(!carList.length)return 
    for (let index = 0; index < carList.length; index++) {
        let num=Math.floor(Math.random()*30)
       carList[index].position=httpData[num]//更换位置
    //    carList[index].icon=icon2//更换图标
         
        
     }
//    console.log(lsit,'lsit')
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