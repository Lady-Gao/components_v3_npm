<template>
  <div :class="open ? 'treeSearch' : 'treeSearch inputTree'" @mouseleave="mouseleave">
    <!--  @input='fliterNode' @clear="fliterNode" -->
    <el-input placeholder="Please input" ref="Input" @keydown.enter="fliterNode" v-model="inputValue" :maxlength="20"
      clearable @input='fliterNode' @focus="focus">
      <template #suffix>
        <span @click="fliterNode" class="cvIcon_search"></span>
      </template>
    </el-input>
    <tree ref="baseTree" v-show="isShowTree" :treeData="treeData" :lazy='lazy' :headers='headers' :autoParam="autoParam"
      :otherParam="otherParam" :isCheck="isCheck" :showIcon="showIcon" :limit-check="limitCheck"
      :hoverOperation="hoverOperation" @node-check="nodeCheck" @node-click='nodClick'>
    </tree>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, onMounted, reactive, ref, watch, watchEffect } from "vue";
const props = defineProps({
  modelValue: {//v-model的value 文本内容(目前默认id值)
    default: null
  },

  valueName: { //v-model的key 反选查找节点时 使用的字段 valueName：value
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
  }
})

const inputValue = ref('')

const baseTree = ref()
function fliterNode() {
  console.log('fliterNode')

  const { zTree } = baseTree.value
  const all_nodes = zTree.getNodes();
  const { childs, filterNodes } = filterNodes_search();
  all_nodes.forEach((node: any) => {
    const children = node && node.children;
    children && zTree.hideNodes(children);
  });

  zTree.showNodes(inputValue.value == "" ? childs : filterNodes);
  filterNodes_highlight(all_nodes, childs);
}

/**
* 过滤节点信息
* @param {String} value 查找文本
* return 
*/
function filterNodes_search(level = 1) {
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


const emit = defineEmits(['update:modelValue', 'node-click', 'node-check'])

function nodClick(mess: any) {
  inputValue.value = mess.treeNode[props.name]
  emit('node-click', mess)
  // 更新当前的text显示和当前的node节点信息
  emit("update:modelValue", mess.treeNode[props.valueName]);
  if (!props.open) {//inputTree模式
    isShowTree.value = false
  }
}
function nodeCheck(mess: any) {
  emit('node-check', mess)
}


const isShowTree = ref(props.open)
const Input = ref()

function focus() {
  if (!props.open) {//inputTree模式
    isShowTree.value = true
  }
}
function mouseleave() {
  if (!props.open) {//inputTree模式
    //移除光标
    Input.value.blur();
    isShowTree.value = false
  }

}
</script>

<style lang="scss" >
@import '../../../asset';

.treeSearch {
  min-width: 320px;
  box-sizing: border-box;
  height: 95%;
  position: relative;
}

.cv-ztree {
  padding-top: 8px;
}

.inputTree {

  .cv-ztree {
    max-height: 320px;
    overflow: scroll;
    position: absolute;
    width: 100%;
  }
}
</style>