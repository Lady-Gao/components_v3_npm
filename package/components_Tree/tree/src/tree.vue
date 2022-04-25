

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
    isCheck: { // 是否是多选还是单选模式 true(多选) 事件触发current-change
      type: Boolean,
      default: false,
    },
    isCopy: {//拖拽时，是否复制节点，false为移动节点
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
  },
  setup(props: any, context: any) {
    console.log(props)
    const tree = ref();
    const treeId = ref()
    treeId.value = randomMakeTreeid()
    onMounted(() => {
      tree.value = new BaseTree({
        el: treeId.value,
        options: {
          baseUrl: props.baseUrl,
          lazy: props.lazy,
          type: props.type,
          headers: props.headers,
          autoParam: props.autoParam,
          otherParam: props.otherParam,
          name: props.name,
          isCheck: props.isCheck,
          showIcon: props.showIcon,
          isCopy: props.isCopy,
          isRemoveBtn: props.isRemoveBtn,
          isRenameBtn: props.isRenameBtn,
          isMove: props.isMove,
          nodeFilter: props.nodeFilter,
          isContextmenu: props.isContextmenu,
          isExpand: props.isExpand,
          isFreeze: props.isFreeze,
          iconsFilter,
        },
        methods: {
          treeLoaded,
          nodeClick,
          nodeCollapse() { },
          nodeBeforeCheck(){},
        }

      });

      //如果传了treeData  就不是异步
      if (Array.isArray(props.treeData) && props.treeData.length) {
        //传进来的数据是数组
        tree.value.setInitialTree(props.treeData);
      } else {
        getHttpTreeData()
      }
    });

    // 使用请求数据 lazy headers  type otherParam
    function getHttpTreeData() {
      console.log('内部请求数据')
      let str = '?'
      for (const key in props.otherParam) {
        str += key + '=' + props.otherParam[key] + '&'
      }
      console.log(str)
      fetch(props.lazy + str, {
        method: props.type,
        headers: props.headers
      }).then(response => {
        return response.json();
      }).then(res => {
        console.log(res, 'fetchres')
        tree.value.setInitialTree(res.data);
      })
    }

    watch(() => props.treeData, watchTreeData,
      { immediate: true, deep: true }
    )

    function watchTreeData(val: []) {
      if (val.length && tree.value) {

        console.log(val, 'watchTreeData')
        // tree.setInitialTree(this.names, val)
      }
    }
    // 随意生成树的id编号
    function randomMakeTreeid() {
      treeId.value = `tree${Math.floor(new Date().getTime() + Math.random() * 100000)}`;
      return treeId.value
    }

    //更改节点得图标
    function iconsFilter(nodes: any) {
      var { data, flag } = nodes;
      if (props.iconsFilter && Array.isArray(data)) {
        data.forEach((val) => {
          iconsFilter(val);
        });
        return data;
      } else {
        Array.isArray(data) &&
          data.forEach((val) => {
            switch (val.type) {
              case 1:
                return (val.iconSkin = "company");
              case 2:
                return (val.iconSkin = "organize");
              case 3:
                return (val.iconSkin = "fleed");
              case 4:
                return (val.iconSkin =
                  val.deviceTypeCode == 2
                    ? val.online
                      ? "onlineCamera"
                      : "unlineCamera"
                    : val.online
                      ? "online" + (val.icon || "icon1")
                      : "unline" + (val.icon || "icon1"));
              case 5:
                return (val.iconSkin = "camera");
            }
          });
        console.log(data, 'iconsFilter')
        return data;
      }
    }
    // 数据成功渲染完成的回调
    function treeLoaded() {

    }
    const zTree = computed(() => {
      return tree.value.zTree
    })
    function nodeClick() {
      console.log(arguments)
      console.log(zTree, 'zTree')


    }
    return {
      treeId,
      tree,
      zTree
    }
  },
});
</script>
    
<style lang='scss'>
@import './assets/css/awesome.scss';
</style>