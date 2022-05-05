<template>
    <div class="inputTree"  :style="{ width: width + 'px' }">
<el-input
      :disabled="disabled"
     
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
    />
     <div class="tree-scroll" v-show="showTree" style='{"top:33px"}'>
      <tree  ref="tree"
        :treeData="treeData"
        :name="name"
        :isCheck="isCheck"
        @tree-loaded="treeLoaded"
        @treeReady="treeReady"
          @node-check="nodeCheck"
         @node-click='nodClick'
      />
    </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineComponent, onMounted, reactive, ref, watch } from "vue";
const props = defineProps({
    treeData: {//树的初始化数据
      type: Array,
      default() {
        return [];
      },
    },
      isCheck: { // 是否是多选还是单选模式 true(多选) 
    type: Boolean,
    default: false,
  },
    name: {//显示节点时,将返回的text作为节点名称
      type: String,
      default() {
        return "text";
      },
    },
    disabled:{//是否禁用
      type:Boolean,
      default:false
    },
    showIcon:{//是否显示图标
      type:Boolean,
      default:true
    }, 
    placeholder: { //提示文字
      type: String,
      default: "输入关键字进行过滤",
    },
    width: { //input框的宽度
      type: [String, Number],
      default: "160",
    },
  })
    const showTree=ref(false)
    const filterText=ref('')
    function treeLoaded(){
      console.log('treeLoaded')
    }
 function treeReady(){
      console.log('treeReady')
    }
     function nodeCheck(){
      console.log('nodeCheck')
    }
     function nodClick(){
      console.log('nodClick')
    }
    

    //节点过滤
    function filterNodes(val:string) {
      // this.$refs["tree"].filterNodes(val);
    }

    function clear(){

    }

</script>

<style lang="scss" >
// .inputTree{
//   position: relative;
//  .el-input--small .el-input__inner {
//     height: 32px;
//     line-height: 32px;
//   width: 100%;
//   }
//   .tree-scroll{
//     max-height: 320px;
//     overflow: scroll;
//     position: absolute;
//     width: 100%;
//   }
// }
</style>