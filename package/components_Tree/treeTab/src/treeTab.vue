<template>
  <div class="TreeTab">

    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane :label="titles[0]" name="tab0" v-if="titles[0]">
        <treeSearch ref="treeSearch" :name="name" :treeData='treeData' :lazy='lazy' :autoParam="autoParam"
          :otherParam="otherParam" :isCheck='isCheck' :isCollection="isCollection"
          :hoverOperation="isCollection && hoverOperation" @node-click="nodeClick" @node-check="nodeCheck" />
      </el-tab-pane>
      <el-tab-pane :label="titles[1]" name="tab1" v-if="titles[1]">
        <treeList :ListApi="vehicleListApi" ref="vehicleList" :name="vehicleListName" :otherParam="otherParam"
          :isCheck='isCheck' :isCollection="isCollection" :selection="selection" :isOnlineStatus="isOnlineStatus"
          @clcik_collection="collectionOnclick" @current-change="currentChange" 
          @node-click="nodeClick"/>
      </el-tab-pane>
      <el-tab-pane :label="titles[2]" name="tab2" v-if="titles[2]">
        <treeList :ListApi="vehicleAttentionApi" ref="vehicleAttentionList" :name="vehicleListName"
          :otherParam="otherParam" :isCheck='isCheck' :isCollection="false" :isEdit="true" :isDelete="true"
          :selection="selection" :isOnlineStatus="isOnlineStatus" @clcik_collection="collectionOnclick"
          @clcik_delete="collection_delete" @current-change="currentChange" 
          @node-click="nodeClick"/>
      </el-tab-pane>

    </el-tabs>
    <el-popover ref="popoverRefTab" v-if="isCollection" :visible="showPopover" trigger="click" title="备注"
      virtual-triggering>
      <el-input clearable v-model="popover.remark" :maxlength="50" />
      <div style="text-align: right;">
        <el-button type="text" @click="showPopover = false">取消</el-button>
        <el-button type="text" @click="node_collection">确定</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" >
import { computed, defineComponent, onMounted, PropType, reactive, ref, unref, watch, watchEffect } from "vue";
import { insertVehicleAttentionInfo, deleteVehicleAttentionInfo } from "../../../util/http";
export default defineComponent({
  name: "TreeTab",
  props: {
    titles: {//显示的tabs项
      type: Array,
      default() {
        return [
          '车辆树',
          '车辆列表',
          '车辆关注',
        ]

      }
    },
    selection: { // 搜索下拉数据
      type: Array as PropType<{
        label: string
        value: string
      }[]>,
      default() {
        return [
          { label: 'plateCode', value: "plateCode" },
          { label: 'enterpriseName', value: 'enterpriseName' },
          { label: 'fleetName', value: 'fleetName' },
          { label: 'terminalCode', value: 'terminalCode' },
          { label: 'carVin', value: 'carVin' },
          { label: 'mobileCode', value: 'mobileCode' }
        ]
      }
    },
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
    vehicleListName: {//车辆列表列表显示节点时,将返回的text作为节点名称
      type: String,
      default: "plateCode"
    },

    showIcon: { // 是否显示图标
      type: Boolean,
      default: true,
    },
    isCheck: { // 是否是多选还是单选模式 true(多选) 
      type: Boolean,
      default: false,
    },
    isOnlineStatus: {//是否显示在线离线搜索条件
      type: Boolean,
      default: true
    },
    isCollection: {//是否显示收藏
      type: Boolean,
      default: true
    },

    lazy: {// 树的接口(/monitor/findVehicleTreeInfoList)
      type: String,
      default: '/basic/tree/findVehicleTreeInfoList',
    },
    type: { //树的异步请求方式
      type: String,
      default: 'get'
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
    vehicleListApi: { // 车辆列表 搜索接口url
      type: String,
      default: '/basic/tree/getVehicleListByPlate'
    },
    vehicleAttentionApi: { // 车辆关注 搜索接口url
      type: String,
      default: '/basic/vehicle/findVehicleAttentionInfoList'
    },

  },
  emits: ['current-change', 'node-click'],
  setup(props: any, context: any) {
    const treeSearch = ref()
    const vehicleList = ref()
    const vehicleAttentionList = ref()
    const activeName = ref('tab0')
    props.titles.some((item:string, index:number) => {
      if (item) {
        activeName.value = 'tab' + index
      }
      return item
    })

    var allCurrentIds = ref()
    //type:勾选状态  多选
    function currentChange(type:boolean, id:string) {
      if (type) {
        // 勾选中
        allCurrentIds.value.push(id)
      } else {
        // 取消勾选
        let index = allCurrentIds.value.indexOf(id)
        allCurrentIds.value.splice(index, 1)
      }
      context.emit('node-click', {
        type,
        data: [id]
      })
      // 更改状态
      changeCheckStates(type, id)
    }
    // 只返回车辆
    function nodeClick(val:any) {
      let data={}
      if(!val.treeNode){
        data=val
      }else if(val.treeNode&&val.treeNode.type==4){
        data=val.treeNode
      }else{
        return
      }
      context.emit('node-click',data)
    }
    function nodeCheck(mess:any) {
      if (mess.checked) {
        // 勾选中,异步加载时可能会重复勾选
        allCurrentIds.value.push(...mess.checkedList)
        //去重
        allCurrentIds.value = Array.from(new Set(allCurrentIds.value))
      } else {
        // 取消勾选
        for (let i = 0; i < mess.checkedList.length; i++) {
          let index = allCurrentIds.value.indexOf(mess.checkedList[i])
          allCurrentIds.value.splice(index, 1)
        }

      }
      context.emit('node-click', {
        type: mess.checked,
        data: mess.checkedList
      })
      vehiclestates()
    }

    //改变树和列表的选中状态--复选
    function changeCheckStates(type:boolean, id:string) {
      // 车辆列表的状态
      vehiclestates()
      // 车辆树的状态
       treeSearch.value&&treeSearch.value.changeCheckStates(allCurrentIds.value, type, id)
    }
    function vehiclestates() {
      vehicleList.value&&vehicleList.value.changeCheckStates(allCurrentIds.value)
      vehicleAttentionList.value&&vehicleAttentionList.value.changeCheckStates(allCurrentIds.value)
      sendcurrentChange()
    }
    function sendcurrentChange() {
      context.emit('current-change', allCurrentIds.value)
    }
    const currentTreeNode = ref()
    const showPopover = ref(false)
    function hoverOperation(val: any) {
      if (val.type != 4) return
      return {
        template: `<span id="${val.id}" class="${Number(val.isAttention) ? 'cvIcon_collection' : 'cvIcon_uncollection'}"
                         ></span>`,
        methods() {//点击会触发onclick方法
          const collection = document.getElementById(val.id);
          if (collection) {
            collection.onclick = (event) => {
              collectionOnclick(event, val)
            }
          }
        }
      }
    }
    const popover = reactive({
      remark: '',
    })
    const popoverRefTab = ref()
    // 收藏事件
    function collectionOnclick(event:any, val:any) {
      popover.remark = val.remark
      currentTreeNode.value = val;
      handlerCollection(event);
    }
    function collection_delete(val:any) {
      currentTreeNode.value = val
      handlerCollection();
    }
    //车辆列表关注按钮点击事件
    async function handlerCollection(event?:any) {
      event && event.stopPropagation();
      const { isAttention, id } = currentTreeNode.value;
      if (Number(isAttention)) {
        //     // 已经关注过，执行取消(cancel)操作
        const { flag } = await deleteVehicleAttentionInfo(id);
        currentTreeNode.value.isAttention = 0
        monitor_vehicleAttention(currentTreeNode.value)

      } else {
        //     // 未关注过， 执行打开气泡，显示input内容
        unref(popoverRefTab).popperRef.triggerRef = event.target;
        showPopover.value = true

      }

    }
    async function node_collection() {
      const { flag } = await insertVehicleAttentionInfo({
        remark: popover.remark,
        vehicleId: currentTreeNode.value.id
      })
      if (flag) {
        showPopover.value = false
        currentTreeNode.value.isAttention = 1
        monitor_vehicleAttention(currentTreeNode.value)
      }
    }
    // 监听车辆关注变化
    function monitor_vehicleAttention(val:any) {

      let params = {
        id: val.vehicleId || val.id,
        isAttention: val.isAttention,//关注状态
        onlineStatus: (val.messageText && val.messageText == '上线') ? true : false,//在线状态
      }
      treeSearch.value&&treeSearch.value.upNodeIcon(params)
      vehicleList.value&&vehicleList.value.upNodeIcon(params)//只是关注或者上下线条，可以前端做显示图标处理
      vehicleAttentionList.value&&vehicleAttentionList.value.handlerSearch()//取消关注时重新刷新
    }

    // 监听车辆添加还是删除还是修改 add remove modify
    function monitor_vehicle() {

    }

    return {
      activeName,
      currentChange,
      nodeClick,
      nodeCheck,
      treeSearch,
      vehicleList,
      vehicleAttentionList,
      hoverOperation,
      currentTreeNode,
      showPopover,
      popover,
      popoverRefTab,
      node_collection,
      collectionOnclick,
      collection_delete
    }
  }
})
</script>

<style lang="scss" >
.TreeTab {
  width: 280px;
  position: absolute;
    bottom: 5px;
    top: 0;
  .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: 97%;
      box-sizing: border-box;
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>