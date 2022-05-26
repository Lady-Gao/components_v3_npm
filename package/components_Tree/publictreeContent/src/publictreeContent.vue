<template>

    <div class="publictreeContent">
        <div :class="['container',treeState?'containeropen':'containerclose']">
            <!-- <el-header>
                  <slot ></slot>
            </el-header> -->
            <!-- <el-main>
                 <slot name="main"></slot>
            </el-main> -->
                 <slot ></slot>
                 <!-- <div class="main"> -->
                  <slot name="main" ></slot>
                 <!-- </div> -->
        </div>
        <div  :class="['aside' ,treeState?'asideopen':'asideclose']">
             <el-button class="jiantou" @click="changeTreeStates">
                 <span :class="treeState?'cvIcon-jiantouLeft':'cvIcon-jiantouRight'"></span>
             </el-button>
                 <treeTab :treeData="treeData" :isCheck='false' />
        </div>
    </div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref, unref, watch, watchEffect } from "vue";

export default defineComponent({
    name: "PublicTreeContent",
    props: {
        treeData: {//树的初始化数据
            type: Array,
            default() {
                return [];
            },
        },
        name: {//车辆树显示节点时,将返回的text作为节点名称
            type: String,
            default: "text"
        },
    },
    setup(){
const treeState=ref(true)
//更改tabtree收缩状态
        function changeTreeStates(){
treeState.value=!treeState.value
console.log(treeState.value,'treeState.value')
        }

        return {
            treeState,
            changeTreeStates
        }
    }
})
</script>

<style lang="scss" scoped>
.publictreeContent { 
    overflow: scroll;
    width: 100%;
    position: absolute;
    top:65px;
    bottom: 0;
    overflow: hidden;
    .main{
        position: relative;
    }
    .aside{
       width:300px;
        position: absolute;
       height: 100%;
        left:0;
	transition: all 0.3s ease-in-out; 
        .jiantou{
            position: absolute;
            top: 46%;
            right: 0px;
            padding: 3px;
        }
    }
    .container{
          position: absolute;
       height: 100%;
      right: 0;
      transition: all 0.3s ease-in-out; 
      display: flex;
      flex-direction: column;
       width:  calc(100% - 300px);
    }
    .containeropen{
    //    width:  calc(100% - 300px);
     width:  calc(100% - 300px);
    }
      .containerclose{
         width:  100%;
        // left: 5px;
    }
     .asideopen{
             left: 0px;
        }
     .asideclose{
           left: -283px;
        }
}
</style>