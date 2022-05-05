

<template>
  <div class="cv-ztree" ref="tree">

    <ul :id="treeId"></ul>
  </div>
</template>
    
<script  lang='ts'>
/**
 * 传进来的数据为标准json （有层级 有children属性）  就不会进行异步请求
 * 传进来的数据为简单json （平铺数据没有层级）  会进行异步请求
 */
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
import BaseTree from "./js/base-tree";
import {getOptions,getMethods} from './js/treeMinxi'
export default defineComponent({
  name: "Tree",
  props: {
    treeData: {//树的初始化数据
      type: Array,
      default() {
        return [];
      },
    },
    name: {//显示节点时,将返回的text作为节点名称
      type: String,
      default() {
        return "text";
      },
    },
    showIcon: { // 是否显示图标
      type: Boolean,
      default: true,
    },
    isCheck: { // 是否是多选还是单选模式 true(多选) 
      type: Boolean,
      default: false,
    },
    isCopy: {//拖拽时，是否复制节点，false为移动节点
      default: false,
    },
    isEdit:{//设置 zTree 是否处于编辑状态
      default: false,
    },
    isRemoveBtn: {//
      default: false,
    },
    isRenameBtn: {//
      default: false,
    },
    isMove: {//拖拽时，设置是否允许移动节点
      default: false,
    },
    iconsFilter: {//树上的节点图标更改方法 val.iconSkin = 'camera'
      type: Function,
      default: null
    },

    isContextmenu: {// 是否开启右击功能
      type: Boolean,
      default: false,
    },
    isExpand: {// 是否默认打开根节点
      type: Boolean,
      default: true,
    },
    isFreeze: { // 是否冻结根节点
      type: Boolean,
      default: false,
    },
    baseUrl: {//请求的域名
      type: String,
      default: '',
    },
    lazy: {// 树的接口(/monitor/findVehicleTreeInfoList)
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
        // 'token':localStorage.getItem("token"),
        // 'Authorization':'Bearer '+localStorage.getItem("token")
      }

    },
    autoParam: {// 异步加载时(点击节点)需要 自动提交父节点属性的参数  ['id', "type",]
      type: Array,
      default() {
        return ["id", "type"];//['id=enterpriseId']  这种写法   接口传过去的key是id,value是父节点的enterpriseId值
      },
    },
    otherParam: { // 增加树基础传参 除了autoParam以外的参数 在这里传
      type:Object,
     default() {
        return {};
      },
    },
    limitCheck:{//beforeCheck点击选中之前的事件,return true|false (是否勾选)
    type:Function,
      default(){
        return null
      }
    },
    nodeFilter: {// 树上的节点筛选 return [条件, 符合的结果]
      type: Array,
      default() {
        return ["type", 4];
      },
    },
    hoverOperation:{//用于当鼠标移动到节点上时，页面显示的用户自定义控件
      type:Function||null,
      default:()=>null
    }

  },
  emits:['node-click','node-check'],
  setup(props: any, context: any) {
    const tree = ref();
    const treeId = ref()
     const zTree = ref()
    treeId.value = randomMakeTreeid()
    onMounted(() => {
      tree.value = new BaseTree({
        el: treeId.value,
        options:getOptions(props),
        methods:getMethods(props,context)
      });
      //如果传了treeData  就不是异步
      if (Array.isArray(props.treeData) && props.treeData.length) {
        //传进来的数据是数组
         setInitialTree()
      } else {
        getHttpTreeData()
      }
      zTree.value=tree.value.zTree
    });
//设置树的初始化数据
  function setInitialTree() {
     tree.value.setInitialTree(props.treeData);
    }
    // 使用请求数据 lazy headers  type otherParam
  function getHttpTreeData() {
      console.log('内部请求数据')
      let str = '?'
      for (const key in props.otherParam) {
        str += key + '=' + props.otherParam[key] + '&'
      }
      fetch(props.lazy + str, {
        method: props.type,
        headers: props.headers
      }).then(response => {
        return response.json();
      }).then(res => {
        tree.value.setInitialTree(res.data);
      })
    }

    // 随意生成树的id编号
    function randomMakeTreeid() {
      treeId.value = `tree${Math.floor(new Date().getTime() + Math.random() * 100000)}`;
      return treeId.value
    }
    

  /**
   * 根据节点数据的属性搜索，获取条件模糊匹配的节点数据 JSON 对象集合
   * @param key 需要模糊匹配的属性名称
   * @param value 需要模糊匹配的属性值
   * @param parentNode 可以指定在某个父节点下的子节点中搜索 忽略此参数，表示在全部节点中搜索
   * return  返回值 Array(JSON) 匹配模糊搜索的节点数据集合
   * 
   */
    // function getNodesByParamFuzzy(key:StringConstructor,value:string,parentNode:any){
    //   let nodes=zTree.value.getNodesByParamFuzzy(key, value, null);
    //   return nodes
    // }


    // 监听 treeData
    //   watch(() => props.treeData, watchTreeData,
    //     )
    // //输入框改变
    // function watchTreeData(val: any) {
    //   console.log( props.treeData,'watchTreeData')
    //   setInitialTree()

    // }
    return {
      treeId,
      tree,
      zTree,
    }
  },
});
</script>
    
<style lang='scss'>
@import './assets/css/awesome.scss';
</style>