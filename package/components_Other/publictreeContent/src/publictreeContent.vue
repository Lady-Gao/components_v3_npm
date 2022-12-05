<template>

    <div class="publictreeContent">
        <div :class="['container', treeState ? 'containeropen' : 'containerclose']">
            <slot></slot>

            <slot name="main"></slot>

        </div>
        <div :class="['aside', treeState ? 'asideopen' : 'asideclose']">
            <el-button class="jiantou" @click="changeTreeStates">
                <span :class="treeState ? 'cvIcon-jiantouLeft' : 'cvIcon-jiantouRight'"></span>
            </el-button>
            <!--  @current-change="currentChange" -->
            <treeTab :isVideo="isVideo" :treeData="treeData" :lazy="lazy" :isCheck='isCheck' :autoParam="autoParam"
                :otherParam="otherParam" @node-click='nodeClick' @node-check="nodeCheck" @checkedList="checkedList"
                @tree-ready="treeReady" @tree-loaded="treeLoaded" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, reactive, ref, unref, watch, watchEffect } from "vue";

export default defineComponent({
    name: "PublicTreeContent",
    props: {
        treeData: {//树的初始化数据
            type: Array,
            default() {
                return [];
            },
        },
        lazy: {// 树的接口(/monitor/findVehicleTreeInfoList)
            type: String,
            default: '/basic/tree/findVehicleTreeInfoList',
        },
        name: {//车辆树显示节点时,将返回的text作为节点名称
            type: String,
            default: "text"
        },
        isCheck: { // 是否是多选还是单选模式 true(多选) 
            type: Boolean,
            default: false,
        },
        autoParam: {// 异步加载时(点击节点)需要 自动提交父节点属性的参数  ['id=123232', "type",]
            type: Array as PropType<String[]>,
            default() {
                return ["id", "type"];
            },
        },
        otherParam: { // 增加树基础传参 除了autoParam以外的参数 在这里传
            default() {
                return {};
            },
        },
        isVideo: {//是否展示视频摄像头
            type: Boolean,
            default: false
        },

    },
    emits: ['checked-list', 'node-click', 'node-check', 'tree-ready', 'tree-loaded'],//多选时用node-check,checked-list，单选用node-click
    setup(props: any, context: any) {

        const treeState = ref(true)
        //更改tabtree收缩状态
        function changeTreeStates() {
            treeState.value = !treeState.value
        }
        // function currentChange(val: any) {
        //     context.emit('current-change', val)
        // }
        function nodeClick(mess: {}) {
            context.emit('node-click', mess)
        }
        function nodeCheck(mess: {}) {
            context.emit('node-check', mess)
        }
        function checkedList(mess: {}) {
            context.emit('checked-list', mess)
        }
        function treeLoaded(ztree: any) {
            context.emit('tree-loaded', ztree)
        }

        //树异步加载完成
        function treeReady(ztree: any) {
            context.emit('tree-ready', ztree)
        }

        return {
            treeReady,
            treeState,
            changeTreeStates,
            // currentChange,
            nodeClick,
            nodeCheck,//[{type:true,data:[]}]
            checkedList,//[ID,ID...]
        }
    }
})
</script>

<style lang="scss" >
.publictreeContent {
    position: absolute;
    top: 10px;
    left: 0;
    bottom: 5px;

    .main {
        position: relative;
    }

    .aside {
        width: 300px;
        position: absolute;
        height: 100%;
        left: 0;
        transition: all 0.3s ease-in-out;

        .jiantou {
            position: absolute;
            top: 46%;
            right: 0px;
            padding: 3px;
            z-index: 2;
        }
    }

    .container {
        position: absolute;
        height: 100%;
        right: 0;
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        width: calc(100% - 300px);
    }

    .containeropen {
        width: calc(100% - 300px);
    }

    .containerclose {
        width: calc(100% - 15px);
    }

    .asideopen {
        left: 0px;
    }

    .asideclose {
        left: -283px;
    }
}
</style>