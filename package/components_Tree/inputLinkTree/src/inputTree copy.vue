<template>
  <div class="myInputTree" @mouseleave="mouseleave">
    <el-input
      :disabled="disabled"
      :style="{ width: width + 'px' }"
      :placeholder="placeholder"
      v-model="filterText"
      @input="filterNodes"
      @clear="clear"
      clearable
      :maxlength="20"
      :showIcon="showIcon"
      ref="InputTreeInput"
      class="InputTreeInput"
      @focus="showTree = true"
      v-show='useInput'
    />
    <div class="scrollW1" v-show="showTree || open" :style='{"top":useInput?"33px":"0"}'>
      <tree
        style="min-height: 300px"
        :data="treeData"
        ref="tree"
              :allowCancel="allowCancel"
        :names="names"
        :isCheck="isCheck"
        :treeLoaded="treeLoaded"
        :treeReady="treeReady"
        @node-click="handleclickChange"
        @node-check="handlerNodeCheck"
      />
    </div>
  </div>
</template>

<script>
/**
 * author Gaoyann
 * Sat Jul 31 2021 14:25:26 GMT+0800 (中国标准时间)
 * 使用方式
 *   <InputTree  :data="$store.getters.getEntTreeList" v-model='grid.enterpriseId'/>
 *   <InputTree  :data="$store.getters.getEntTreeList" width='215' :disabled="options.roleID?true:false"	v-model='roleForm.enterpriseId'/>
 */
export default {
  name: "InputTree",
  props: {
    // v-model的value 文本内容(目前默认id值)
    value: {},
     //v-model的key 反选查找节点时 使用的字段 valueName：vakue
    valueName: {
      type: String,
      default() {
        return "id";
      },
    },
    //是否展示输入框
    useInput:{
          type: Boolean,
      default: true,
    },
    //保持打开状态
    open: {
      type: Boolean,
      default: false,
    },
    // 是否是多选还是单选模式 true(多选) 事件触发current-change
    isCheck: {
      type: Boolean,
      default: false,
    },
    // 数据方式
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    //是否显示图标
    showIcon: true,
    //是否禁用
    disabled: false,
    //提示文字
    placeholder: {
      type: String,
      default: "输入关键字进行过滤",
    },
    //input框的宽度
    width: {
      type: [String, Number],
      default: "217",
    },
    // 需要请求的参数
    autoParams: {
      type: Object,
      default() {
        return null;
      },
    },
    //显示的文字字段
    names: {
      type: String,
      default() {
        return "text";
      },
    },
   
    lable: {
      type: Object,
      default() {
        return {};
      },
    },
    //是否有反选需求  true   取消选中时触发node-click事件
      allowCancel: {
      type: Boolean ,
      default() {
        return false;
      },
    },
    
  },
  data() {
    return {
      filterText: "",
      showTree: false,
      treeLoading: false,
      treeData: {},
      node: {},
      ztree: {},
    };
  },
  computed: {},
  created() {
    if (this.data) {
      this.treeData = this.data;
    }
  },
  methods: {
    //树加在完成   只执行一次
    treeReady(data) {
      this.$emit("tree-ready", data);
    },
    //数据渲染完成 跟新数据时执行
    treeLoaded(data, ztree) {
      this.filterText = "";
      this.ztree = ztree;
      if(this.value){
        this.isCheckAccordValue_findNode(this.value)
      }
      this.$emit("tree-load", data);
    },
    /**
     * 点击节点
     */
    handleclickChange(item) {
      if(this.isCheck)return //复选框点击击文本时会触发
      this.isCheckAccordValue_findNode(item[this.valueName]);
      //赋值
      if (!this.open) {
        this.showTree = false;
      }
    },
    /**
     * 下拉树多选的勾选事件
     * @param {Object} node: 勾选的当前节点信息
     */
    handlerNodeCheck(node) {
      const { getCheckedNodes } = this.$refs["tree"];

      let results = getCheckedNodes();
      let keys = results.map((item) => {
        return item.id;
      });

      this.isCheckAccordValue_findNodes(keys);
    },
    /**
     * 根据v-model(默认id)查找已存在的节点数据(单选逻辑)
     * @param {String} key: id
     */
    isCheckAccordValue_findNode(key) {
      const { getNodeByParam, selectNode } = this.$refs["tree"];
      const nodes = getNodeByParam(this.valueName, key);
      if (nodes && typeof nodes === "object") {
        // 更新当前的text显示和当前的node节点信息
        this.$emit("input", nodes[this.valueName]);
        //为什么放在这里   联动的时候会触发点击事件 触发车组请求接口
        this.$emit("node-click", nodes);
        //去掉筛选
        this.filterNodes('')
        selectNode(nodes);
        //有验证时  输入名称  点击节点text和名称相同  验证会不更新
        this.filterText = nodes[this.names] + " ";
      } else {
        // 如果需要接受取消点击的事件
        if(this.allowCancel){
           this.$emit("node-click", {});
        }
        this.clear(false);
      }
    },
     /**
     * 根据v-model(默认id数组)查找已存在的节点数据(多选逻辑)
     * @param {Array} keys: [id, id ...]
     */
    isCheckAccordValue_findNodes(keys) {
      const { getNodeByParam } = this.$refs["tree"];
      if (keys.length) {
        this.$emit("input", keys);
        // 当keys数据量太大，去除此功能(影响性能)
        //setCheckedKeys(keys, true);
        // 此处为了性能只显示一个内容展示
        const nodes = getNodeByParam(this.valueName, keys[0]);
        if (nodes) {
          this.filterText =
            "报警" + (keys.length == 1 ? "" : `(${keys.length}+)`);
        }
      } else {
        this.clear(false)
      }
    },
    clear(flag=true) {
      const { cancelSelectedNode} = this.$refs["tree"];
      // 当前没有选择的节点 清空所有值(默认为null)
      cancelSelectedNode();
      flag&&this.$emit("input", null);
      this.$emit("clear");
      this.filterText=''
    },
    mouseleave() {
      //移除光标
      this.$refs.InputTreeInput.blur();
      this.showTree = false;
    },
    //节点过滤
    filterNodes(val) {
      this.$refs["tree"].filterNodes(val);
    },
  },
  watch: {
    data: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.treeData = newVal;
        } else {
          this.treeData = [];
        }
      },
    },
    value: {
      immediate: true,
      handler(newVal,oldVal) {
        //单纯监听 修改时 传过来的数据
        if (newVal && this.$refs["tree"]) {
          if (this.isCheck) {
            //多选
             //this.isCheckAccordValue_findNodes(newVal);
          } else {
            if(!oldVal){
                //单选
               this.isCheckAccordValue_findNode(newVal);
            }
          }
        }
      },
    },
    lable: {
      immediate: true,
      handler(val) {},
    },
  },
};
</script>

<style lang="scss" scoped>
.myInputTree {
  position: relative;
  height: 100%;
  .InputTreeInput {
    position: relative;
    z-index: 999;
  }

  .scrollW1 {
    position: absolute;
    z-index: 999;
    top: 33px;
    padding-top: 10px;
    background: #fff;
    width: 100%;
    height: 310px;
    overflow: scroll;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12);
  }
}
</style>

