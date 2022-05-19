<template>
  <div :class="open ? 'treeSearch' : 'treeSearch inputTree'" @mouseleave="mouseleave">
    <!--  @input='fliterNode' @clear="fliterNode"  -->
    <el-input  ref="Input"  v-model="inputValue" :maxlength="20"
      clearable  @focus="focus"  @input='fliterNode'>
      <template #suffix>
        <span class="cvIcon_search" @click="loadTree"></span>
      </template>
    </el-input>
    <tree ref="baseTree" v-loading="loading" v-show="isShowTree" :treeData="treeData" :lazy='lazy'  :autoParam="autoParam"
      :otherParam="otherParam" :isCheck="isCheck" :name="name" :showIcon="showIcon" :limit-check="limitCheck"
      :hoverOperation="hoverOperation" :nodeFilter="nodeFilter" @node-check="nodeCheck" @node-click='nodClick'
      @tree-loaded="treeLoaded" @tree-ready="treeReady"
      >
    </tree>
  </div>
</template>

<script lang="ts" >
import { computed, defineComponent, onMounted, reactive, ref, watch, watchEffect } from "vue";
export default defineComponent({
  name: "TreeSearch",
  props: {
     modelValue: {//v-model的value 文本内容(目前默认id值)
    default: null
  },

  valueName: { //v-model接收的字段key 
    type: String,
    default() {
      return "id";
    },
  },
  treeData: {//树的初始化数据
    type: Array,
    default() {
      return [];
    },
  },
  name: {//显示节点时,将返回的text作为节点名称
    type: String,
    default: "text"
  },
  showIcon: { // 是否显示图标
    type: Boolean,
    default: true,
  },
  isCheck: { // 是否是多选还是单选模式 true(多选) 
    type: Boolean,
    default: false,
  },
  lazy: {// 树的接口(/monitor/findVehicleTreeInfoList)
    type: String,
    default: '',
  },
  type: { //树的异步请求方式
    type: String,
    default: 'get'
  },
  // headers: { //树的异步请求头部 
  //   type: Object,
  //   default: {
  //   }
  // },
  autoParam: {// 异步加载时(点击节点)需要 自动提交父节点属性的参数  ['id=123232', "type",]
    type: Array,
    default() {
      return ["id", "type"];
    },
  },
  otherParam: { // 增加树基础传参 除了autoParam以外的参数 在这里传
    default() {
      return {};
    },
  },
  limitCheck: {//beforeCheck点击选中之前的事件,return true|false (是否勾选)
    type: Function,
    default() {
      return null
    }
  },
  hoverOperation: {//用于当鼠标移动到节点上时，页面显示的用户自定义控件
    type: Function,
    default() {
      return () => { }
    }
  },
  open: {//是否保持展开
    type: Boolean,
    default: true
  },
    nodeFilter: {// 树上的节点筛选 return [条件, 符合的结果]
      type: Array,
      default() {
        return ["type", 4];
      },
    },
  },
   emits:['clear','update:modelValue', 'node-click', 'node-check','tree-ready'],
   
   setup(props: any, context: any) {
     const loading=ref(true)
const inputValue = ref('')
const nondeClickinputValue = ref('')
const baseTree = ref()
function fliterNode() {
  const { zTree } = baseTree.value
  const all_nodes = zTree.getNodes();
  const { childs, filterNodes } = filterNodes_search();
  all_nodes.forEach((node: any) => {
    const children = node && node.children;
    children && zTree.hideNodes(children);
  });

  let showNode={}
  if(inputValue.value == ""){//清空了输入框，要把modelvalue清空
    context.emit("update:modelValue",'')
     context.emit("clear")
     nondeClickinputValue.value=""
    showNode=childs
  }else{
    showNode=filterNodes
  }
  zTree.showNodes(showNode);
  filterNodes_highlight(all_nodes, childs);
}

/**
* 过滤节点信息
* @param {String} value 查找文本
* return 
*/
function filterNodes_search(level:number = 1) {
  const { zTree } = baseTree.value
  let filterNodes: any[] = [];
  var results = zTree.getNodesByParamFuzzy(props.name, inputValue.value);
  if (inputValue.value) {
    results.forEach((result: any) => {
      let item: any = result;
      while (item.level > level) {
        item = item.getParentNode();
        if (!item.open) {
          // 展开父节点
          zTree.expandNode(item, true, false, false);

        }
      }
      filterNodes.push(item);
    });
  }
  return {
    filterNodes,//所有选符合条件过滤的父组件数组 
    childs: results,//所有符合条件的模糊查到到的子节点数组
  };
}

/**
* 设置过滤节点高亮
* @param {String} value 需要筛选的文本条件
* @param {Node} allNodes 所有符合条件的节点
*/
function filterNodes_highlight(Nodes: any, childs: any) {
  const { zTree } = baseTree.value
  const all_nodes = zTree.transformToArray(
    Nodes ? Nodes : zTree.getNodes()
  );

  // 初始化清除所有高亮
  all_nodes.forEach((node: any) => {
    node.highlight = false;
    zTree.updateNode(node);
  });

  if (inputValue.value != "") {
    childs.forEach((child: any) => {
      child.highlight = true;
      zTree.updateNode(child);
      // 展开节点
    });

  }


}


interface mess{
  treeNode:{
    [key:string]:string
  }
}
function nodClick(mess: mess) {
 nondeClickinputValue.value= inputValue.value = mess.treeNode[props.name]

  context.emit('node-click', mess)
  // 更新当前的text显示和当前的node节点信息
  context.emit("update:modelValue", mess.treeNode[props.valueName]);
  if (!props.open) {//inputTree模式
    isShowTree.value = false
  }
}
function nodeCheck(mess: any) {
  context.emit('node-check', mess)
}


const isShowTree = ref(props.open)
const Input = ref()

function focus() {
  if (!props.open) {//inputTree模式
    isShowTree.value = true
  }
}
function mouseleave() {
  //鼠标移开 保持选中的文本（防止选中后删除文字）
  inputValue.value=nondeClickinputValue.value
  if (!props.open) {//inputTree模式
    //移除光标
    Input.value.blur();
    isShowTree.value = false
  }

}

function treeLoaded(){
  console.log('treeLoaded')
}
function treeReady(){
     props.modelValue&&selectNode()
     context.emit('tree-ready',true)
     console.log('treeReady')
     loading.value=false
}




  watch(() => props.modelValue, watchModelValue,
            { immediate: true, deep: true }
        )
// function watchTreeData(val:any){
//   console.log(val,'watchTreeData')
// }
//监听传入的ModelValue 在树上选中 
  function watchModelValue(val:any){
    if(val&&baseTree.value){
        selectNode()
    }else{
      //值被删除但未清除文字和筛选状态
      if(nondeClickinputValue.value!==""){
         nondeClickinputValue.value= inputValue.value =''
          fliterNode()//过滤数据 选中
      }
    }
  }

  function selectNode(){
   
      let nodes=getNodeByParam()
      if (nodes && typeof nodes === "object") {
          nondeClickinputValue.value= inputValue.value = nodes[props.name]//显示文字更改
          fliterNode()//过滤数据 选中
      }else{

      }
  }

  function getNodeByParam(valueName?,modelValue?){
    const { zTree } = baseTree.value
      const all_nodes = zTree.getNodes(); 
      let key=valueName||props.valueName,value=modelValue||props.modelValue
      let nodes=zTree.getNodeByParam(key,value)
    return nodes
  }
//更改勾选状态
function changeCheckStates(allCurrentIds,check,ids){
  const { zTree } = baseTree.value
  //没有选中的就取消所有
  if(!allCurrentIds.length){
    zTree.checkAllNodes(false);
  }
    // 找到node  
    if(typeof ids =="string"){
      let node=getNodeByParam(props.valueName,ids)
        //设置勾选状态
      node&&zTree.checkNode(node, check, true);
    }else{
      ids.forEach(id => {
        let node=getNodeByParam(props.valueName,id)
       //设置勾选状态
        node&&zTree.checkNode(node, check, true);
      });
    }
}

// 更新收藏和在线图标
function upNodeIcon(val){
const { zTree } = baseTree.value
   const { id, isAttention,onlineStatus } = val;
  const node = zTree.getNodeByParam('id', id);
if(node){
  // 关注更新
     // const isClickedNode=document.getElementById(id);
    //     if(isClickedNode){
    //       isClickedNode.setAttribute('class', `${Number(isAttention) ? 'cvIcon_collection' : 'cvIcon_uncollection'}`);
    //  console.log(isClickedNode,'isClickedNode')
    //  }
     node.isAttention=isAttention
//在线离线
   node.iconSkin = onlineStatus? `${node.icon||'icon0'}car_online`: `${node.icon||'icon0'}car`;
   node.online = onlineStatus ? true : false;
          zTree.updateNode(node);
}
      
}
//重新加载树
function loadTree(){
  loading.value=true
 baseTree.value.init()
}
      return{
        baseTree,
        Input,
        mouseleave,
        inputValue,
        focus,
        fliterNode,
        isShowTree,
        nodeCheck,
        nodClick,
        treeLoaded,
        treeReady,
        getNodeByParam,
        changeCheckStates,
        upNodeIcon,
        loadTree,
        loading
      }
   }
})
</script>

<style lang="scss" >
@import '../../../asset';

.treeSearch {
 width:100%;
 min-width:200px;
  box-sizing: border-box;
  height: 95%;
  position: relative;
}

.cv-ztree {
  margin-top:15px;
}

.inputTree {

  .cv-ztree {
    max-height: 320px;
    overflow: scroll;
    position: absolute;
    width: 100%;
    z-index: 1;
    padding-top:8px;
     margin-top:0px;
  }
}
</style>