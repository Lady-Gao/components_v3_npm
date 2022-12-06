<template>
  <div class="TreeTab">
    <el-tabs type="border-card" v-model="activeName">
      <el-tab-pane :label="titles[0]" name="tab0" v-if="titles[0]">

        <treeSearch ref="treeSearch" :name="name" :treeData='treeData' :lazy='lazy' :autoParam="autoParam"
          :otherParam="otherParam" :isCheck='isCheck' :isCollection="isCollection" @tree-loaded="treeLoaded" @tree-ready="treeReady"
          :hoverOperation="isCollection && hoverOperation" @node-click="nodeClick" @node-check="nodeCheck"
          />

      </el-tab-pane>
      <el-tab-pane :label="titles[1]" name="tab1" v-if="titles[1]">
        <treeList :isVideo="isVideo" :ListApi="vehicleListApi" ref="vehicleList" :name="vehicleListName"
          :otherParam="otherParam" :isCheck='isCheck' :isCollection="isCollection" :selection="selection"
          :isOnlineStatus="isOnlineStatus" @clcik_collection="collectionOnclick" @current-change="currentChange"
          @node-click="nodeClickList" @node-check="nodeCheckList" @checked-list="checkedList" />
      </el-tab-pane>
      <el-tab-pane :label="titles[2]" name="tab2" v-if="titles[2]">
        <treeList :isVideo="isVideo" :ListApi="vehicleAttentionApi" ref="vehicleAttentionList" :name="vehicleListName"
          :otherParam="otherParam" :isCheck='isCheck' :isCollection="false" :isEdit="true" :isDelete="true"
          :selection="selection" :isOnlineStatus="isOnlineStatus" @clcik_collection="collectionOnclick"
          @clcik_delete="collection_delete" @current-change="currentChange" @node-click="nodeClickList"
          @node-check="nodeCheckList" @checked-list="checkedList" />
      </el-tab-pane>

    </el-tabs>
    <el-popover ref="popoverRefTab" v-if="isCollection" :visible="showPopover" trigger="click" title="备注"
      virtual-triggering>
      <el-input clearable v-model="popover.remark" :maxlength="50" />
      <div style="text-align: right;">
        <span class="el-button el-button--text" @click="showPopover = false">取消</span>
        <span class="el-button el-button--text" @click="node_collection">确定</span>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" >
import { computed, defineComponent, onMounted, PropType, reactive, ref, unref, watch, watchEffect } from "vue";
import { insertVehicleAttentionInfo, deleteVehicleAttentionInfo } from "../../../utils/http";
import { ElMessage } from 'element-plus'
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
    isVideo: {//是否展示视频摄像头
      type: Boolean,
      default: false
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
  emits: ['checked-list', 'node-click', 'node-check', 'tree-ready','tree-loaded'],
  setup(props: any, context: any) {
    const treeSearch = ref()
    const vehicleList = ref()
    const vehicleAttentionList = ref()
    const activeName = ref('tab0')
    props.titles.some((item: string, index: number) => {
      if (item) {
        activeName.value = 'tab' + index
      }
      return item
    })

    var allCurrentIds = ref<any[]>([])
    //车辆列表选中的id [id,id]
    function checkedList(list: any) {
      allCurrentIds.value = list
      // context.emit('checked-list',list)
      // 更改状态
    }
    //车辆列表 type:勾选状态  多选
    function currentChange(type: boolean, id: string) {
      // console.log('er334343')
      // return
      if (type) {
        // 勾选中
        allCurrentIds.value.push(id)
      } else {
        // 取消勾选
        let index = allCurrentIds.value.indexOf(id)
        allCurrentIds.value.splice(index, 1)
      }
      // context.emit('current-change', {
      //   type,
      //   data: [id]
      // })
      // 更改状态
      changeCheckStates(type, id)
    }
    //车辆列表的emit
    function nodeClickList(val: any) {
      context.emit('node-click', val)
    }
    // 车辆树的emit只返回车辆
    function nodeClick(val: any) {
      let data = val.treeNode
      if (val.treeNode) {
        if (val.treeNode.type == 4) {
          data = val.treeNode
          context.emit('node-click', data)
        }
        if (val.treeNode.type == 5) {//视频icon
          let node = treeSearch.value.getNodeByParam('id', val.treeNode.pId);    //父节点
          val.treeNode.id = node.id
          val.treeNode.vehicleId = node.id
          val.treeNode.channelCount = node.channelCount
          val.treeNode.onlineStatus = node.online//在线状态
          val.treeNode.deviceTypeCode = node.deviceTypeCode//在线状态
          val.treeNode.clickChannel = parseInt(val.treeNode.text.split("CH")[1]);
          data = val.treeNode
          context.emit('node-click', data)
        }
      }


    }
    //车辆树
    function nodeCheck(mess: any) {
      let data = mess.checkedListObj
      // if (mess.checked) {
      // 勾选中,异步加载时可能会重复勾选
      // allCurrentIds.value.push(...mess.checkedList)
      // allCurrentIds.value=mess.allList
      //去重

      // } else {
      //如果是通号号 
      // if(props.isVideo&&!mess.checked&&data[0]&&data[0].checked){
      // nothing
      // }else{
      // 取消勾选
      // for (let i = 0; i < mess.checkedList.length; i++) {
      //   let index = allCurrentIds.value.indexOf(mess.checkedList[i])
      //   allCurrentIds.value.splice(index, 1)
      // }
      // allCurrentIds.value=mess.allList
      // }
      
      // }
      
      allCurrentIds.value = allCurrentIds.value.concat(mess.allList)
      if (!mess.checked) {
        for (let i = 0; i < mess.checkedListObj.length; i++) {
          let index = allCurrentIds.value.indexOf(mess.checkedListObj[i])
          allCurrentIds.value.splice(index, 1)
        }
      }
      console.log(allCurrentIds.value, 'allCurrentIds.value')
      allCurrentIds.value = Array.from(new Set(allCurrentIds.value))
      context.emit('node-check', {//取消或选中得是哪一个
        type: mess.checked,
        data
      })
      vehiclestates()
    }
    //车辆列表
    function nodeCheckList(mess: any) {
      context.emit('node-check', {//取消或选中得是哪一个
        type: mess.type,
        data: mess.data
      })
    }
    //改变树和列表的选中状态--复选
    function changeCheckStates(type: boolean, id: string) {
      // 车辆列表的状态
      vehiclestates()
      // 车辆树的状态
      treeSearch.value && treeSearch.value.changeCheckStates(allCurrentIds.value, type, id)
    }
    function vehiclestates() {
      vehicleList.value && vehicleList.value.changeCheckStates(allCurrentIds.value)
      vehicleAttentionList.value && vehicleAttentionList.value.changeCheckStates(allCurrentIds.value)
      // sendcurrentChange()
      context.emit('checked-list', allCurrentIds.value)

    }
    function sendcurrentChange() {
      // context.emit('current-change', allCurrentIds.value)
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
    function collectionOnclick(event: any, val: any) {
      popover.remark = val.remark
      currentTreeNode.value = val;
      handlerCollection(event);
    }
    function collection_delete(val: any) {
      currentTreeNode.value = val
      handlerCollection();
    }
    //车辆列表关注按钮点击事件
    async function handlerCollection(event?: any) {
      event && event.stopPropagation();
      const { isAttention, id } = currentTreeNode.value;
      if (Number(isAttention)) {
        //     // 已经关注过，执行取消(cancel)操作
        const { flag }: any = await deleteVehicleAttentionInfo(id);
        currentTreeNode.value.isAttention = 0
        monitor_vehicleAttention(currentTreeNode.value)
        flag && ElMessage({
          message: '删除成功',
          type: 'success',
        })
      } else {
        //     // 未关注过， 执行打开气泡，显示input内容
        unref(popoverRefTab).popperRef.triggerRef = event.target;
        showPopover.value = true

      }

    }
    async function node_collection() {
      const { flag }: any = await insertVehicleAttentionInfo({
        remark: popover.remark,
        vehicleId: currentTreeNode.value.id
      })
      ElMessage({
        message: '操作成功',
        type: 'success',
      })
      if (currentTreeNode.value.isAttention == 0) {
        console.log('关注成功')
        //关注成功
      } else {
        console.log('修改成功')
        //修改成功
      }
      if (flag) {
        showPopover.value = false
        currentTreeNode.value.isAttention = 1
        monitor_vehicleAttention(currentTreeNode.value)
      }

    }
    // 监听车辆关注变化
    function monitor_vehicleAttention(val: any) {

      let params = {
        id: val.vehicleId || val.id,
        isAttention: val.isAttention,//关注状态
        onlineStatus: (val.messageText && val.messageText == '上线') ? true : false,//在线状态
      }
      treeSearch.value && treeSearch.value.upNodeIcon(params)
      vehicleList.value && vehicleList.value.upNodeIcon(params)//只是关注或者上下线条，可以前端做显示图标处理
      vehicleAttentionList.value && vehicleAttentionList.value.handlerSearch()//取消关注时重新刷新
    }

    // 监听车辆添加还是删除还是修改 add remove modify
    function monitor_vehicle() {

    }
  function treeLoaded(zTree:any){
  context.emit('tree-loaded',zTree)
}
    //树异步加载完成
    function treeReady(zTree:any) {
      context.emit('tree-ready', zTree)
    }

    return {
      activeName,
      currentChange,
      nodeClick,
      nodeClickList,
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
      collection_delete,
      nodeCheckList,
      checkedList,
      treeLoaded,
      treeReady,
    }
  }
})
</script>

<style lang="scss" >
.TreeTab {
  width: 280px;
  position: absolute;
  bottom: 5px;
  top: 0px;

  .el-tabs {
    height: 100%;

    .el-tabs__content {
      height: calc(100% - 40px);
      box-sizing: border-box;

      .el-tab-pane {
        height: 100%;
      }
    }

    .cv-ztree {
      width: calc(100% + 20px);
      box-shadow: none;
      border-radius: 0;
    }

    .treeList-lists {
      width: calc(100% + 18px);
      padding-right: 20px;
      box-sizing: border-box;
    }

  }
}
</style>