<template>
  <el-container class="lowCode">
    <el-header>
      <el-button @click="submit">查看</el-button>
    </el-header>
    <el-row>
      <el-col :span="8">
        <div class="components-list">
          <div v-for="(item, listIndex) in leftComponents" :key="listIndex">
            <div class="components-title">
              <i class="el-icon-goods"></i>
              {{ item.title }}
            </div>

            <div class="drag-box">
              <Draggable v-model="tags"  :list="item.list"
                 :animation="100" item-key="id" 
                   :group="{ name: 'componentsGroup', pull: 'clone', put: false }"
                class="list-group" :forceFallback="true" ghost-class="ghost"    
                :sort="false">
                <template #item="{ element }">
                  <div class="items">
                    <div class="title">{{ element.__config__.label }}</div>
                  </div>
                </template>
              </Draggable>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
       <Draggable v-model="tags"  :list="drawingList" class="drag-box"
                 :animation="100" item-key="id" group="componentsGroup"
                >
                <template #item="{ element,index }"  >
                  <div  class="list-group">
                    <div class="title">{{ element.__config__.label }}{{index}}
                     <span @click="deleteElement(index)">X</span>
                    </div>
                   
                  </div>
                 
                </template>
              </Draggable>
      </el-col>
      <el-col :span="8">
        erer
      </el-col>
    </el-row>
  </el-container>
</template> 

<script setup lang="ts">
import leftPage from "./src/left.vue";
import Draggable from 'vuedraggable';
import {
  inputComponents, selectComponents, layoutComponents, formConf, tspComponents
} from "./src/left.config";
import { reactive } from "@vue/reactivity";
const leftComponents = [
  {
    title: '输入型组件',
    list: inputComponents
  },
  {
    title: '选择型组件',
    list: selectComponents
  },
  {
    title: '布局型组件',
    list: layoutComponents
  },

]

const drawingList = reactive([
   {
      // 组件的自定义配置
      __config__: {
        label: '单行文本',
        labelWidth: null,
        showLabel: true,
        changeTag: true,
        tag: 'el-input',
        tagIcon: 'chat-square',
        defaultValue: undefined,
        required: true,
        layout: 'colFormItem',
        span: 24,
        document: 'https://element.eleme.cn/#/zh-CN/component/input',
        // 正则校验规则
        regList: []
      },
      // 组件的插槽属性
      __slot__: {
        prepend: '',
        append: ''
      },
      // 其余的为可直接写在组件标签上的属性
      placeholder: '请输入',
      style: { width: '100%' },
      clearable: true,
      'prefix-icon': '',
      'suffix-icon': '',
      maxlength: null,
      'show-word-limit': false,
      readonly: false,
      disabled: false
    },
])
// function   cloneComponent(origin) {
//             const clone =Object.assign({},origin)
//             const config = clone.__config__
//             config.span = formConf.span // 生成代码时，会根据span做精简判断
//             return clone
//         }



//删除元素
function deleteElement(index){
drawingList.splice(index,1)
}

// 查看最新的数据
const submit = () => {
  console.log(drawingList);
};
</script>

<style lang='scss'>
#app {
  height: 100%;
 .components-list{
     .components-title{
         font-size: 20px;
     }
 }
}
</style>