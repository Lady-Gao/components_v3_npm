

<template>
  home
  <Map  :zoom="3">
         <!-- <Liner :path="pathList" />
         <Marker :position="InfoBoxposition" id='1' :Icon='icon1'/>
          <InfoWindow :position="InfoBoxposition"  :content="InfoBoxcontent" /> -->
<!-- 巡航器 -->
             <PathSimplifierIns  :id='1' :position='InfoBoxposition' :icon='icon1'   model='realTime' @moveing='PathSimplifierInsmoveing'/>
              <InfoWindow :position="moveposition"  :content="InfoBoxcontent" />
  </Map>
</template>

<script setup lang='ts'>

import {listPoints,icon1} from "../../utils/data";

import { ref } from "vue";
const pathList=ref([])
const InfoBoxposition=ref( [121.434529,31.215641])
const InfoBoxcontent=ref('')
const moveposition=ref([121.434529,31.215641])
let path=[]

//模拟接口返回
setInterval(() => {
  let index= Math.floor(Math.random()*20)//随机数
console.log(listPoints[index],'listPoints[index]')
// pathList.value.push(listPoints[index])

InfoBoxposition.value=listPoints[index]


},5000)

function PathSimplifierInsmoveing(val:any){
  console.log(val,'PathSimplifierInsmoveing')
  moveposition.value=val
  InfoBoxcontent.value='当前位置：'+val
}

</script>

<style>
.Map{
  height: 500px;
  width: 100%;
}
</style>