<template>
 <el-form :inline="true"  class="Operation" label-position="right" label-width="80px">
    <el-row>
            <el-col :span="$slots.default?span[0]:0" >
                <slot></slot>
            </el-col>
            <el-col style="text-align:right;height:55px" :span="$slots.default?span[1]:24" >
                <el-form-item class="buttonForm">
                 <span class="el-button el-button--text toggle" v-if="$slots.header"  @click="showItem">
                    {{flag ?"收起":"展开"}}
                 </span>
                <el-button  v-if="isSearch" class="toggle" @click="bottonClick('search')" type="primary" :loading="searchLoading">
                    搜索
                 </el-button>
                <OpretionTool :powerTool="powerTool" @bottonClick="bottonClick"/>
                   <div class="slotBtn">
                       <slot name="button" ></slot>
                    </div>
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
        span:{
             type: Array, 
            default(){
                return [16,8]
            }
        },
        isSearch:{//是否显示搜索按钮
            type:Boolean,
            default:true
        },
        searchLoading:{//搜索按钮的loading
            type:Boolean,
            default:false
        },
        powerTool:{//按钮权限
        type:Array as PropType<string[]>,
        default(){
            return []
        }

        },
    },
    setup (props: any, context: any) {
   const flag=ref(false)
function showItem(){
    flag.value=!flag.value
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
.slotBtn{
    margin-right: 6px;
}
.treeSearch{
    min-width:180px;
}
.el-input{
        width: 180px !important;
        .el-input__inner{
            width: 100%;
        }
    }
.el-form-item{
    margin-right: 0 !important;
  }
.buttonForm{
    .el-form-item__content{
        // display: flex;

        // justify-content: flex-end !important;
    }
}
}
</style>