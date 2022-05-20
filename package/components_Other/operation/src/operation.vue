<template>
 <el-form :inline="true"  class="Operation" label-position="right" label-width="80px">
    <el-row>
            <el-col :span="Span[0]" >
                <slot></slot>
            </el-col>
            <el-col style="text-align:right;height:55px" :span="Span[1]" >
                <el-form-item class="buttonForm">
                 <el-button type="text" v-if="$slots.header" class="toggle" @click="showItem">
                    {{flag ?"收起":"展开"}}
                 </el-button>
                <!-- <slot name="operations"></slot> -->
                <el-button  v-for="item in powerTool" >{{item}}</el-button>
                </el-form-item>
            </el-col>
        </el-row>
 <el-row>
     <slot name="header" v-if="flag"></slot>
 </el-row>
          
  </el-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
        type:Array,
        default(){
            return ['search']
        }

        },
    },
    setup () {
   const flag=ref(false)
function showItem(){
    flag.value=!flag.value
    console.log(flag.value)
}
        return {
           flag,
           showItem
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