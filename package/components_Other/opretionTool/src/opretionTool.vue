<template>
    <div class="opretionTool">
        <el-button :class="Heard?'':'el-button--text'" :style="{'color':item.type}" v-for="item in ToolList"  v-show="item.text" @click="bottonClick(item.fun)">
            {{ item.text }}
       </el-button>
        <el-dropdown  v-show="!Heard&&powerTool.length>3"> 
            <span class="el-button el-button--text el-dropdown-link" >
                <pre> 更多<span class="iconfont icon-arrow-down"></span></pre>
            </span>
            <template #dropdown>
                <slot name="button" :pxToolList="pxToolList"></slot>
            </template>
        </el-dropdown>
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
        const ToolList = ref<any[]>([])
        const pxToolList = ref<any[]>([])
        if (props.Heard) {
            ToolList.value = props.powerTool.map((item: any) => {
                let newitem = HeardText(item)
                return newitem
            })
        } else {
            ToolList.value = props.powerTool.map((item: any) => {
                let newitem = GridText(item)
                return newitem
            })
            refsetarr()
        }
        function bottonClick(item: any) {
            if (props.Heard) {
                context.emit('bottonClick', item)
            } else {
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
                // case "search":
                //     data.text = "搜索"
                //     break;
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
                case "remove":
                    data.text = "删除"
                    data.type = "red"
                    
                    break;
                // case "resend":
                //     data.text = "resend"
                //     break;
                // case "modifycomp":
                //     data.text = "modifycomp"
                //     break;
                // case "modifyplat":
                //     data.text = "modifyplat"
                //     break;
                // case "sendAdd":
                //     data.text = "sendAdd"
                //     break;
                // case "sendEdit":
                //     data.text = "sendEdit"
                //     break;
                // case "sendDown":
                //     data.text = "sendDown"
                //     break;
                // case "reset":
                //     data.text = "reset"
                //     break;
                // case "deactivate":
                //     data.text = "deactivate"
                //     break;
                // case "offline":
                //     data.text = "offline"
                //     break;
                // case "unbind":
                //     data.text = "unbind"
                //     break;
                // case "deviceinfo":
                //     data.text = "deviceinfo"
                //     break;
                // case "logout":
                //     data.text = "logout"
                //     break;
                // case "bound":
                //     data.text = "bound"
                //     break;
                // case "unbound":
                //     data.text = "unbound"
                //     break;
                // case "apply":
                //     data.text = "apply"
                //     break;
                // case "processAlarm":
                //     data.text = "processAlarm"
                //     break;
                // case "removeAlarm":
                //     data.text = "removeAlarm"
                //     break;
            }
            return data
        }
        function refsetarr() {
            //排序
            props.powerTool.forEach((item: any) => {
                switch (item) {
                    // case "look":
                    //     console.log(item, 'item')
                    //     pxToolList.value[0] = item
                    //     break;
                    // case "modify":
                    //     pxToolList.value[1] = item
                    //     break;
                    // case "remove":
                    //     pxToolList.value[2] = item
                    //     break;
                    case "resend":
                        pxToolList.value[3] = item
                        break;
                    case "modifycomp"://修改公司
                        pxToolList.value[4] = item
                        break;
                    case "modifyplat"://修改车牌号
                        pxToolList.value[5] = item
                        break;
                    case "sendAdd":
                        pxToolList.value[6] = item
                        break;
                    case "sendEdit":
                        pxToolList.value[7] = item
                        break;
                    case "sendDown":
                        pxToolList.value[8] = item
                        break;
                    case "reset"://重置
                        pxToolList.value[9] = item
                        break;
                    case "deactivate"://停用
                        pxToolList.value[10] = item
                        break;
                    case "offline"://车辆下线
                        pxToolList.value[11] = item
                        break;
                    case "unbind"://解绑设备 绑定设备 更换设备
                        pxToolList.value[12] = item
                        break;
                    case "deviceinfo"://设备信息
                        pxToolList.value[13] = item
                        break;
                    case "logout":
                        pxToolList.value[14] = item
                        break;
                    case "bound"://绑定车辆
                        pxToolList.value[15] = item
                        break;
                    case "unbound"://解绑车辆
                        pxToolList.value[16] = item
                        break;
                    case "apply"://应用
                        pxToolList.value[17] = item
                        break;
                    case "processAlarm":
                        pxToolList.value[18] = item
                        break;
                    case "removeAlarm":
                        pxToolList.value[19] = item
                        break;


                }
            })
            pxToolList.value = pxToolList.value.filter(item => item)

        }
        return {
            type,
            bottonClick,
            getText,
            ToolList,
            pxToolList
        }
    }
})
</script>

<style lang="scss" scoped>
.opretionTool{
    margin-right: 6px;
}
</style>