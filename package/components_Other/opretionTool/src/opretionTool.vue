<template>
    <div class="opretionTool">
        <el-button v-for="item in ToolList" :type="item.type" 
        v-show="item.text" @click="bottonClick(item.fun)">
            {{ item.text }}
        </el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
export default defineComponent({
    name: "OpretionTool",
    props: {
        powerTool: {//按钮权限
            type: Array as PropType<string[]>,
            default() {
                return ['search']
            }
        },
        Heard: {//是头部的搜索按钮
            type: Boolean,
            default: true
        }

    },
    setup(props: any, context: any) {
        const type = ref("")
        const ToolList = ref([])

        if (props.Heard) {
            ToolList.value = props.powerTool.map((item:any) => {
                let newitem = HeardText(item)
                return newitem
            })
        } else {
            ToolList.value = props.powerTool.map((item:any) => {
                let newitem = GridText(item)
                return newitem
            })
        }
        console.log(props.powerTool,'ToolList')
        function bottonClick(item:any) {
             if (props.Heard) {
                 context.emit('bottonClick', item)
             }else{
                  context.emit(item)
             }
        }
        function getText(key: string) {
            if (props.Heard) {//放在搜索位置
                return HeardText(key)
            } else {//表格内的操作
                return GridText(key)
            }

        }
        // 搜索按钮
        function HeardText(key: string) {
            let data = {
                type: "",
                text: "",
                fun: key,
            }
            switch (key) {
                case "search":
                    data.text = "搜索"
                    break;
                case "add":
                    data.text = "添加"
                    break;
                case "import":
                    data.text = "导入"
                    break;
                case "export":
                    data.text = "导出"
                    break;
            }
            return data
        }
        // 表格按钮
        function GridText(key: string) {
        let data = {
                type: "text",
                text: "",
                fun: key,
            }
            switch (key) {
                case "look":
                     data.text = "查看"
                    break;
                case "modify":
                     data.text = "修改"
                    break;
            }
            return  data
        }
       
        return {
            type,
            bottonClick,
            getText,
            ToolList
        }
    }
})
</script>

<style lang="scss" scoped>
</style>