<template>
  <div :class="open ? 'treeSearch' : 'treeSearch inputTree'" @mouseleave="mouseleave">
    <!--  @input='fliterNode' @clear="fliterNode"  -->
    <el-input  ref="Input"  v-model="inputValue"
      clearable  @focus="focus"  @input='fliterNode'>
      <template #suffix v-if="!isLinkTree">
        <!--  @click="loadTree" -->
        <span class="cvIcon_search" ></span>
      </template>
    </el-input>
    <!-- <el-scrollbar> -->
      <tree ref="baseTree"  v-show="isShowTree" :treeData="treeSearchData"  :lazy='lazy'  :autoParam="autoParam"
        :otherParam="otherParam" :isCheck="isCheck" :name="name" :showIcon="showIcon" :limit-check="limitCheck"
        :hoverOperation="hoverOperation" :nodeFilter="nodeFilter" @node-check="nodeCheck" @node-click='nodClick'
        @tree-ready="treeReady" @tree-loaded="treeLoaded" @right-click="onRightClick" 
        >
      </tree>
  <!-- </el-scrollbar> -->
  </div>
</template>

<script lang="ts" >
import { computed, defineComponent, onMounted, reactive, ref, watch, watchEffect } from "vue";
export default defineComponent({
  name: "TreeSearch",
  props: {
    currentValue: {//初始化选中的id 
    default: null
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
    default: '/basic/tree/findVehicleTreeInfoList',
  },
  type: { //树的异步请求方式
    type: String,
    default: 'get'
  },
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
    isLinkTree:{//是否为关联性组件inputlinktree需要鼠标移开时需要保持选中的文字
      type: Boolean,
    default: false
    },
   
  },
   emits:['clear', 'node-click', 'node-check','tree-ready','tree-loaded','right-click'],//'update:modelValue'
   
   setup(props: any, context: any) {
const inputValue = ref('')
const nondeClickinputValue = ref('')
const baseTree = ref()
const treeSearchData=ref(props.treeData)
const baseTreezTree=ref()
function fliterNode() { 
  const zTree=  baseTreezTree.value
  const all_nodes = zTree.getNodes();
  const { childs, filterNodes } = filterNodes_search();
  all_nodes.forEach((node: any) => {
    const children = node && node.children;
    children && zTree.hideNodes(children);
  });

  let showNode={}
  if(inputValue.value == ""){//清空了输入框，要把modelvalue清空
    // context.emit("update:currentValue",'')
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
  const zTree=  baseTreezTree.value
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
  const zTree=  baseTreezTree.value
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
  // context.emit("update:modelValue", mess.treeNode[props.valueName]);
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
  //鼠标移开 保持选中的文本（防止选中后删除文字） 用于linktree
 if(props.isLinkTree){
  inputValue.value=nondeClickinputValue.value
  // fliterNode()
 }
  if (!props.open) {//inputTree模式
    //移除光标
    Input.value.blur();
    isShowTree.value = false
  }

}

function treeLoaded(zTree:any){
  baseTreezTree.value=zTree
  console.log('search-----load')
  baseTree.value.loading=false
  props.currentValue&&selectNode()
  context.emit('tree-loaded',zTree)
}
//树异步加载完成
function treeReady(zTree:any){
  baseTreezTree.value=zTree
  console.log('search-----ready')
    props.currentValue&&selectNode()
     context.emit('tree-ready',zTree)
}




  watch(() => props.currentValue, watchModelValue,
            { immediate: true, deep: true }
        )
  watch(() => props.treeData, (val)=>{
    treeSearchData.value=val
  },  { immediate: true, deep: true })

//监听传入的ModelValue 在树上选中 
  function watchModelValue(val:any){
    if(val&&baseTreezTree.value){
      nondeClickinputValue.value= inputValue.value =''
      selectNode()//点击选中时不过滤节点 只显示选中状态
    }else{
      //值被删除但未清除文字和筛选状态
      if(nondeClickinputValue.value!==""&&baseTreezTree.value){
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

  function getNodeByParam(K?:any,V?:any){
    const zTree=  baseTreezTree.value
      let key=K||'id'
      let value=V||props.currentValue
        let nodes=zTree.getNodeByParam(key,parseInt(value))
    return nodes
  }
//更改勾选状态
function changeCheckStates(allCurrentIds:any,check:boolean,ids:any){
  const zTree=  baseTreezTree.value
  //没有选中的就取消所有
  if(!allCurrentIds.length){
    zTree.checkAllNodes(false);
  }
    // 找到node  
    if(typeof ids =="string"){
      let node=getNodeByParam('id',ids)
        //设置勾选状态
      node&&zTree.checkNode(node, check, true);
    }else{
      ids.forEach((id:any) => {
        let node=getNodeByParam('id',id)
       //设置勾选状态
        node&&zTree.checkNode(node, check, true);
      });
    }
}

// 更新收藏和在线图标
function upNodeIcon(val:any){
  const zTree=  baseTreezTree.value
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
  // loading.value=true
//   baseTree.value
//  baseTree.value.init()
treeSearchData.value=[]
}
function  onRightClick(event: Event, treeId: string, treeNode: any) {
            context.emit('right-click',event,treeId,treeNode)
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
        treeSearchData,
        onRightClick
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



.inputTree {

  .cv-ztree {
    max-height: 320px;
    position: absolute;
    width: 100%;
    z-index: 9999;
    padding-top:8px;
     margin-top:0px;
   
  }
}
</style>