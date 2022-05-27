<template>
 <el-form :inline="true"  class="Operation" label-position="right" label-width="80px">
    <el-row>
            <el-col :span="$slots.default?Span[0]:0" >
                <slot></slot>
            </el-col>
            <el-col style="text-align:right;height:55px" :span="$slots.default?Span[1]:24" >
                <el-form-item class="buttonForm">
                 <el-button type="text" v-if="$slots.header" class="toggle" @click="showItem">
                    {{flag ?"收起":"展开"}}
                 </el-button>
                <!-- <slot name="operations"></slot> -->
                <!-- <el-button  v-for="item in powerTool"  @click="bottomClick(item)">{{getText(item)}}</el-button> -->
               <OpretionTool :powerTool="powerTool" @bottonClick="bottonClick"/>
               </el-form-item>
            </el-col>
        </el-row>
 <el-row>
     <slot name="header" v-if="flag"></slot>
 </el-row>
          
  </el-form>
</template>

<script lang="ts">
/**
 * powerTool类型
 * search
 * add
 * modify
 * import
 * export
 */
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
    name:"Operation",
    props:{
          //对搜索条件和按钮的分配比例
        Span:{
             type: Array, 
            default(){
                return [16,8]
            }
        },
        powerTool:{//按钮权限
        type:Array as PropType<string[]>,
        default(){
            return ['search']
        }

        },
    },
    setup (props: any, context: any) {
   const flag=ref(false)
function showItem(){
    flag.value=!flag.value
    console.log(flag.value)
}
//点击按钮
function bottonClick(item:string){
    context.emit(item)
}
//显示按钮权限对应的中文

        return {
           flag,
           showItem,
           bottonClick
          
        }
    }
})


</script>

<style lang="scss" >
.Operation{
text-align: left;
.el-input__inner{
    width: 173px;
}
.buttonForm{
    display: flex;
    justify-content: flex-end;
}
}
</style>