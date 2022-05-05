<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { getMapScript } from "@/utils/scriptHelper";
import { ref } from "vue";
import { useRouter } from "vue-router"
const activeName = ref('/baseTree')
    const router = useRouter()
    const waitToken=ref(false)
 getToken()


 //请求token
 function getToken(){
    fetch("http://web2.test.cvtsp.com/api/auth/oauth/token", { 
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa("web:web"),
        },
        body: encodeURI(
          "grant_type=password&username=11111111/admin/zh_CN&password=a5450fefb424604b5e5e81d688e9d4dbf6a974bcb46100aaa89fe357d9763a0592e6d261782ce321b3395fdeba841d46930806fc253108eabd113d2526745051&scope=server"
        ),
      })
        .then((res) => {
          return res.json();
        })
        .then((data:any) => {
         localStorage.setItem('token',data.access_token)
          waitToken.value=true
        })
 }
function tabClick(val:String){
  router.push(activeName.value)


}
</script>

<template>
  <div class='flexRoute'>
      <div >
        <el-tabs tab-position='left'  @tab-click='tabClick' v-model="activeName" >
       <!-- <el-tab-pane label="home" name='home'> </el-tab-pane>
      <el-tab-pane label="multiCar" name='multiCar'> </el-tab-pane>
      <el-tab-pane label="MoveAnimation" name='history2'> </el-tab-pane>
      <el-tab-pane label="history" name='history'> </el-tab-pane>
      <el-tab-pane label="fenceManage" name='fenceManage'> </el-tab-pane> -->
       <el-tab-pane label="baseTree" name='baseTree'> </el-tab-pane>
         <el-tab-pane label="treeSearchView" name='treeSearchView'> </el-tab-pane>
    </el-tabs>
      </div>
    <div class='flex1' v-if="waitToken"><router-view /></div>
  </div>
</template>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.flexRoute{
   height: 100%;
  display: flex;
  .flex1{
    flex: 1;
  }
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
 ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #fff;
  }
  /*定义滚动条轨道
   内阴影+圆角*/
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  /*定义滑块
   内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #d4d3d3;;
  }

</style>
