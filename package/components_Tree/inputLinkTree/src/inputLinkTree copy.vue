<template>
  <div class='inputLinkTree'>
      <el-form-item label="Approved by">
        <treeSearch :treeData="treeData" :name="name" v-model="value1" :open="false" ref="treeSearch1"  @tree-ready="treeReady1"
         @node-click='nodeClick1' @clear='clear1'/>
      </el-form-item>
       <el-form-item label="Approved by">
        <treeSearch :treeData="treeData2" :name="name"  v-model="value2"  :open="false" ref="treeSearch2"  @tree-ready="treeReady2"
        @node-click='nodeClick2'  @clear='clear2'/>
          
      </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, watch, watchEffect } from "vue";
const props = defineProps({

  modelFormObj: { //表单绑定的对象
    type: Object,
    required: true,
    default() {
      return {
        enterpriseId:'',
        fleetId:''
      }
    }
  },
  // modelKey: {//表单的key值 modelFormObj['enterpriseId'] 
  //   type: Array,
  //   default() {
  //     return ['enterpriseId','fleetId'];
  //   },
  // },
  treeData: {//树的初始化数据
    type: Array,
    default() {
      return [];
    },
  },
  // tree2url: { //传入的是接口方式：第二棵树  车组树接口
  //     type: String,
  //     default: "/basic/fleet/findFleetTreeList",
  // },
   lazy: {// 传入的是接口方式：第二棵树  车组树接口(/basic/fleet/findFleetTreeList)
      type: String,
      default: '',
    },
    type: { //树的异步请求方式
      type: String,
      default: 'get'
    },
    headers: { //树的异步请求头部 
      type: Object,
      default: {
        'token':localStorage.getItem("token"),
        'Authorization':'Bearer '+localStorage.getItem("token")
      }

    },
  name: {//显示节点时,将返回的text作为节点名称
    type: String,
    default: "text"
  },
  showIcon: { // 是否显示图标
    type: Boolean,
    default: true,
  },
})


const value1=ref(props.modelFormObj.enterpriseId)
const value2=ref(props.modelFormObj.fleetId)
const treeData2=ref([])
const treeSearch1=ref()
const treeSearch2=ref()
watch(() => props.modelFormObj, modelFormObjChange, { immediate: true, deep: true })
//父级传值
function modelFormObjChange(val: any) {
  value1.value=val.enterpriseId
  if(val.enterpriseId&&treeSearch1.value){
    getHttptreeData2()
  }
}

const nodeSendArr=ref()
const emit = defineEmits(['current-change','tree-ready'])
// nodeClick
function nodeClick1(mess:any){
   value2.value=''
  getHttptreeData2(mess.treeNode)
  nodeSendArr.value=[mess.treeNode.id,'']
     emit('current-change', nodeSendArr.value)
}
function nodeClick2(mess:any){
 nodeSendArr.value=[value1.value,mess.treeNode.id]
   emit('current-change', nodeSendArr.value)
}
// clear
function clear1(){
    value2.value=''
   treeData2.value=[]
   nodeSendArr.value=['','']
   emit('current-change', nodeSendArr.value)
}
function clear2(){
  let clear2value=[value1.value,'']
  //避免重复更新
 if(nodeSendArr.value.join(',')!=clear2value.join(',')){
    nodeSendArr.value=clear2value
  emit('current-change',  nodeSendArr.value)
 }
}
function treeReady1(){
      value1.value&&getHttptreeData2()
}
function treeReady2(){
 emit('tree-ready')
}


const token=localStorage.getItem('token')

const  headers={
              token,
              'Authorization':'Bearer '+token
  }
//请求第二棵树数据
function getHttptreeData2(treeNode=null){
  let nodes=treeNode||treeSearch1.value.getNodeByParam()


 let str = `?enterpriseId=${nodes.enterpriseId}&pId=${nodes.id}&type=${nodes.type}`
 
      fetch(props.lazy + str, {
        method: props.type,
        headers:props.headers
      }).then(response => {
        return response.json();
      }).then(res => {
        if(res.data){
          treeData2.value=res.data
        }else{
  treeData2.value=[]
        }
      })
}

</script>

<style lang='scss'>

</style>