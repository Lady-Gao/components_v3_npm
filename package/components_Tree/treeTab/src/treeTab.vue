<template>
    <div class="TreeTab">
       
        <el-tabs type="border-card"  v-model="activeName">
            <el-tab-pane :label="titles[0]" name="tab0" v-if="titles[0]">
                <treeSearch  ref="treeSearch"
                 :treeData='treeData'
                 :lazy='lazy' 
                 :autoParam="autoParam"
                 :otherParam="otherParam"
                 :isCheck='isCheck'
                 :isCollection="isCollection" 
                  :hoverOperation="isCollection&&hoverOperation"
                 @node-click="nodeClick"
                 @node-check="nodeCheck"
                 
                 />
            </el-tab-pane>
            <el-tab-pane :label="titles[1]" name="tab1" v-if="titles[1]">
                <treeList :ListApi="vehicleListApi" ref="vehicleList"
                 :otherParam="otherParam"
                 :isCheck='isCheck'
                  :isCollection="isCollection" 
                  :selection="selection"
                  @clcik_collection="collectionOnclick"
                  @current-change="currentChange"
                />
            </el-tab-pane>
            <el-tab-pane :label="titles[2]" name="tab2" v-if="titles[2]">
                <treeList :ListApi="vehicleAttentionApi" ref="vehicleAttentionList"
                 :otherParam="otherParam"
                 :isCheck='isCheck'
                   :isCollection="false"
                  :isEdit="true" :isDelete="true"
                  :selection="selection"
                   @clcik_collection="collectionOnclick"
                   @clcik_delete="collection_delete"
                   @current-change="currentChange"
                />
             </el-tab-pane>
          
        </el-tabs>
    <el-popover ref="popoverRefTab" v-if="isCollection"  :visible="showPopover" trigger="click" title="备注" virtual-triggering>
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
import {insertVehicleAttentionInfo, deleteVehicleAttentionInfo } from "../../../util/http";
export default defineComponent({
  name: "TreeTab",
  props:{
       titles: {//显示的tabs项
            type: Array ,
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
  name: {//显示节点时,将返回的text作为节点名称
    type: String,
    default: "text"
  },
  showIcon: { // 是否显示图标
    type: Boolean,
    default: true,
  },
  isCheck: { // 是否是多选还是单选模式 true(多选) 
    type: Boolean,
    default: false,
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
  // headers: { //树的异步请求头部 
  //   type: Object,
  //   default: {
  //   }
  // },
  autoParam: {// 异步加载时(点击节点)需要 自动提交父节点属性的参数  ['id=123232', "type",]
    type: Array,
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
  emits:['current-change','node-click'],
    setup (props:any, context: any) {
    const treeSearch=ref()
    const vehicleList=ref()
    const vehicleAttentionList=ref()
     const activeName=ref('tab0')
     props.titles.some((item,index)=>{
       if(item){
        activeName.value='tab'+index
       }
       return item
     })
    
var allCurrentIds=ref([]),treeSearchCurrent=[],treeListCurrent=[],treeAttentionCurrent=[];
//type:勾选状态  
function currentChange(type,id){
  if(type){
    // 勾选中
    allCurrentIds.value.push(id)
  }else{
    // 取消勾选
    let index=allCurrentIds.value.indexOf(id)
    allCurrentIds.value.splice(index,1)
  }
   context.emit('node-click',{
   type,
   data: [id]
  })
  // 更改状态
  changeCheckStates(type,id)
}

function nodeClick(mess){
console.log(mess,'nodeClick,')
}
function nodeCheck(mess){
  if(mess.checked){
    // 勾选中,异步加载时可能会重复勾选
    allCurrentIds.value.push(...mess.checkedList)
    //去重
   allCurrentIds.value= Array.from(new Set(allCurrentIds.value))
  }else{
     // 取消勾选
     for (let i = 0; i < mess.checkedList.length; i++) {
        let index=allCurrentIds.value.indexOf(mess.checkedList[i])
         allCurrentIds.value.splice(index,1)
     }
   
  }
  context.emit('node-click',{
   type: mess.checked,
   data: mess.checkedList
  })
  vehiclestates()
}

//改变树和列表的选中状态--复选
function changeCheckStates(type,id){
   // 车辆列表的状态
 vehiclestates()
  // 车辆树的状态
   treeSearch.value.changeCheckStates(allCurrentIds.value,type,id)
}
function vehiclestates(){
  vehicleList.value.changeCheckStates(allCurrentIds.value)
  vehicleAttentionList.value.changeCheckStates(allCurrentIds.value)
  sendcurrentChange()
}
function sendcurrentChange(){
context.emit('current-change',allCurrentIds.value)
}
const currentTreeNode=ref()
  const showPopover = ref(false)
function hoverOperation(val: any){
 if (val.type != 4) return
 console.log(Number(val.isAttention),'Number(val.isAttention)')
  return {
    template: `<span id="${val.id}" class="${Number(val.isAttention) ? 'cvIcon_collection' : 'cvIcon_uncollection'}"
                         ></span>`,
    methods() {//点击会触发onclick方法
      const collection = document.getElementById(val.id);
                    if(collection) {
                        collection.onclick = (event) => {
                         collectionOnclick(event,val)
                        }
                    }
    }
  }
}
  const popover = reactive({
            remark: '',
        })
        const popoverRefTab=ref()
        // 收藏事件
function collectionOnclick(event,val){
 popover.remark=val.remark
 currentTreeNode.value = val;
  handlerCollection(event);
}
function collection_delete(val){
   currentTreeNode.value=val
 handlerCollection();
}
//车辆列表关注按钮点击事件
async function handlerCollection(event?){
  event&&event.stopPropagation();
            const { isAttention, id } = currentTreeNode.value;
            console.log(isAttention,'handlerCollection')
            if(Number(isAttention)) {
            //     // 已经关注过，执行取消(cancel)操作
                    const { flag } = await deleteVehicleAttentionInfo(id);
                    currentTreeNode.value.isAttention =0
                    monitor_vehicleAttention(currentTreeNode.value)
                   
            }else {
            //     // 未关注过， 执行打开气泡，显示input内容
             unref(popoverRefTab).popperRef.triggerRef = event.target;
            showPopover.value=true
            
            }
          
}
async function node_collection(event){
   const { flag } =await insertVehicleAttentionInfo({
                    remark: popover.remark,
                    vehicleId: currentTreeNode.value.id
            })
            if(flag){
              showPopover.value=false
               currentTreeNode.value.isAttention =1
             monitor_vehicleAttention(currentTreeNode.value)
            }
}
   // 监听车辆关注变化
      function  monitor_vehicleAttention(val) {
      
        let params={
          id:val.vehicleId||val.id,
          isAttention:val.isAttention,//关注状态
          onlineStatus:(val.messageText&&val.messageText =='上线')?true:false,//在线状态
        }
        treeSearch.value.upNodeIcon(params)
         vehicleList.value.upNodeIcon(params)//只是关注或者上下线条，可以前端做显示图标处理
         vehicleAttentionList.value.handlerSearch()//取消关注时重新刷新
        }

 // 监听车辆添加还是删除还是修改 add remove modify
      function   monitor_vehicle(val){

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
.TreeTab{
     max-width: 320px;
  height: 95%;
  position: relative;
  .el-tabs{
      height:100%;
      .el-tabs__content{
          height:97%;
          .el-tab-pane{
               height:100%;
          }
      }
  }
}
</style>