<template>
    <div class="TreeTab">
        <el-tabs type="border-card"  v-model="activeName">
            <el-tab-pane :label="titles[0]" name="tab0" v-if="titles[0]">
                <treeSearch  ref="treeSearch"
                 :treeData='treeData'
                 :lazy='lazy' 
                 :headers='headers' 
                 :autoParam="autoParam"
                 :otherParam="otherParam"
                 :isCheck='isCheck'
                 @node-click="nodeClick"
                 @node-check="nodeCheck"
                 
                 />
            </el-tab-pane>
            <el-tab-pane :label="titles[1]" name="tab1" v-if="titles[1]">
                <treeList :ListApi="vehicleListApi" ref="vehicleList"
                 :headers='headers' 
                 :otherParam="otherParam"
                 :isCheck='isCheck'
                  :isCollection="true" 
                  :selection="selection"
                  @current-change="currentChange"
                />
            </el-tab-pane>
            <el-tab-pane :label="titles[2]" name="tab2" v-if="titles[2]">
                <treeList :ListApi="vehicleAttentionApi" ref="vehicleAttentionList"
                 :headers='headers' 
                 :otherParam="otherParam"
                 :isCheck='isCheck'
                  :isEdit="true" :isDelete="true"
                  :selection="selection"
                   @current-change="currentChange"
                />
             </el-tab-pane>
          
        </el-tabs>
    </div>
</template>

<script lang="ts" >
import { computed, defineComponent, onMounted, PropType, reactive, ref, watch, watchEffect } from "vue";
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
  lazy: {// 树的接口(/monitor/findVehicleTreeInfoList)
    type: String,
    default: 'http://web2.test.cvtsp.com/api/basic/tree/findVehicleTreeInfoList',
  },
  type: { //树的异步请求方式
    type: String,
    default: 'get'
  },
  headers: { //树的异步请求头部 
    type: Object,
    default: {
      'token':localStorage.getItem("token"),
      'Authorization':'Bearer '+localStorage.getItem("token")
    }
  },
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
            default: 'http://web2.test.cvtsp.com/api/basic/tree/getVehicleListByPlate'
      },
 vehicleAttentionApi: { // 车辆关注 搜索接口url
            type: String,
            default: 'http://web2.test.cvtsp.com/api/basic/vehicle/findVehicleAttentionInfoList'
      },
    
  },
  emits:['current-change'],
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
  vehiclestates()
}

//改变树和列表的选中状态
function changeCheckStates(type,id){
   // 车辆列表的状态
 vehiclestates()
  // 车辆树的状态
   treeSearch.value.changeCheckStates(type,id)
}
function vehiclestates(){
  vehicleList.value.changeCheckStates(allCurrentIds.value)
  vehicleAttentionList.value.changeCheckStates(allCurrentIds.value)
  sendcurrentChange()
}
function sendcurrentChange(){
context.emit('current-change',allCurrentIds.value)
}
        return {
            activeName,
            currentChange,
            nodeClick,
            nodeCheck,
            treeSearch,
            vehicleList,
vehicleAttentionList,
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