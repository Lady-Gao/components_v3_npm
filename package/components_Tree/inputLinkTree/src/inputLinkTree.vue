<template>
  <div class='inputLinkTree'>
    <el-form-item label="所属公司">
      <treeSearch :treeData="treeData" :name="name" v-model="value1" :open="false" ref="treeSearch1"
        @tree-loaded="treeLoaded1" @node-click='nodeClick1' @clear='clear1' :isLinkTree="true"/>
    </el-form-item>
    <el-form-item label="所属车组">
      <treeSearch :lazy="lazy" :name="name" :treeData="treeData2" v-model="value2" :open="false" :isLinkTree="true"
        @tree-loaded="treeLoaded2" @node-click='nodeClick2' @clear='clear2'  :isSendHttp="isSendHttp"
        :otherParam="{'enterpriseId':currentDATA1.enterpriseId,'pId':currentDATA1.id,'type':currentDATA1.type}"
        />

    </el-form-item>
  </div>
</template>

<script  lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, watch, watchEffect } from "vue";
export default defineComponent({
  name: "InputLinkTree",
  props: {
    modelFormObj: { //表单绑定的对象
      type: Object,
      required: true,
      default() {
        return {
          enterpriseId: '',
          fleetId: ''
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
        'token': localStorage.getItem("token"),
        'Authorization': 'Bearer ' + localStorage.getItem("token")
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
  },
  emits: ['current-change', 'tree-loaded'],
  setup(props: any, context: any) {

    const value1 =ref()
    const value2 = ref()
    const treeData2 = ref([])
    const treeSearch1 = ref()
    const isSendHttp=ref(false)
    const inputzTree=ref()
    const currentDATA1=ref({
      enterpriseId:'',
      pId:'',
      type:'',
    })
    watch(() => props.modelFormObj, modelFormObjChange, { immediate: true, deep: true })
    //父级传值
    function modelFormObjChange(val: any) {
      console.log(val,'modelFormObjChange')
      value1.value=props.modelFormObj.enterpriseId
value2.value=props.modelFormObj.fleetId
      if (val.enterpriseId && treeSearch1.value) {
        getHttptreeData2()
      //  let nodes =  treeSearch1.value.getNodeByParam('id',val.enterpriseId)
      //  console.log(nodes,'------------------modelFormObjChange')
      }
    }

    const nodeSendArr = ref()
    // nodeClick
    function nodeClick1(mess: any) {
      value2.value = ''
      getHttptreeData2(mess.treeNode)
      nodeSendArr.value = [mess.treeNode.id, '']
      context.emit('current-change', nodeSendArr.value)
      
    }
    function nodeClick2(mess: any) {
      nodeSendArr.value = [value1.value, mess.treeNode.id]
      context.emit('current-change', nodeSendArr.value)
      
    }
    // clear
    function clear1() {
      value2.value = ''
      // isSendHttp.value=false
      // treeData2.value = []
      // console.log(inputzTree.value,'clear1')
      // // inputzTree.value.showNode([])
      // var nodes = inputzTree.value.getNodes();
      // console.log(nodes,'nodes')
      // inputzTree.value.destroy();
      // inputzTree.value.hideNode(nodes);
      currentDATA1.value={
        enterpriseId:'0',
      pId:'0',
      type:'0',
      }
      treeData2.value = []
      nodeSendArr.value = ['', '']
      context.emit('current-change', nodeSendArr.value)
    }
    function clear2() {
      let clear2value = [value1.value, '']
      //避免重复更新
      if (nodeSendArr.value.join(',') != clear2value.join(',')) {
        nodeSendArr.value = clear2value
        context.emit('current-change', nodeSendArr.value)
      }
    }
    function treeLoaded1(zTree:any) {
    
      // context.emit('tree-loaded',zTree)
      // console.log(1111)
      // value1.value && getHttptreeData2()
    }
    function treeLoaded2(zTree:any) {
      console.log('tree-loaded1122222')
// value2.value=props.modelFormObj.fleetId
inputzTree.value=zTree
      context.emit('tree-loaded')
    }

    
    //请求第二棵树数据
    function getHttptreeData2(treeNode = null) {
   
      let nodes = treeNode || treeSearch1.value.getNodeByParam('id',value1.value)
      if(nodes){
      currentDATA1.value=nodes
      isSendHttp.value=true
      treeData2.value = []
    }

      // let str = `?enterpriseId=${nodes.enterpriseId}&pId=${nodes.id}&type=${nodes.type}`

      // fetch(props.lazy + str, {
      //   method: props.type,
      //   headers: props.headers
      // }).then(response => {
      //   return response.json();
      // }).then(res => {
      //   if (res.data) {
      //     treeData2.value = res.data
      //   } else {
      //     treeData2.value = []
      //   }
      //   console.log(treeData2.value.length)
      // })
    }

    return {
      value1,
      nodeClick1,
      clear1,
      treeData2,
      value2,
      nodeClick2,
      clear2,
      treeSearch1,
      nodeSendArr,
      treeLoaded1,
      treeLoaded2,
      currentDATA1,
      isSendHttp
    }
  }
})

</script>

<style lang='scss'>
.inputLinkTree{
  display: inline-block;
  .cv-ztree{
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 12%);
    border-radius: 5px;
  }
  
}
</style>