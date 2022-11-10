<template>
  <div class='treeSearchView'>
    <p>
      <!-- <treeSearch :treeData="VehicleTreeInfoList" :lazy='lazy' :headers='headers' :isCheck="true" :showIcon="true"
        :hoverOperation="hoverOperation"  @node-check="nodeCheck" @node-click='nodClick' /> -->
    </p>
    <el-form  class="demo-form-inline"  :model="ruleForm"  ref="ruleFormRef"
    :rules="rules">
      <el-form-item label="Approved by" prop="myId">
        <treeSearch :treeData="EnterpriseTreeList" v-model="ruleForm.myId" :open="false" @node-check="nodeCheck"
          @node-click='nodClick' />
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Create</el-button
      >
    </el-form-item>
    </el-form>
 <el-form >
      <el-form-item label="Approved by">
        <treeSearch :treeData="EnterpriseTreeList" v-model="ruleForm.myId3" :open="false" @node-check="nodeCheck"
          @node-click='nodClick' />
      </el-form-item>
      
    </el-form>
  </div>
</template>

<script setup lang="ts">
import findVehicleTreeInfoList from '@utils/findVehicleTreeInfoList.json'
import getEnterpriseTreeList from '@utils/getEnterpriseTreeList.json'
import { reactive, ref, watch } from 'vue'
const { VehicleTreeInfoList } = findVehicleTreeInfoList
const { EnterpriseTreeList } = getEnterpriseTreeList
const lazy = '/basic/tree/findVehicleTreeInfoList'
const token = localStorage.getItem('token')
console.log(token)
const headers = {
  token,
  'Authorization': 'Bearer ' + token
}

const Mockdata=[
      {text: "父节点1", 
      id:0,
        children: [
            {text: "子节点1",id:1},
            {text: "子节点2",id:2}
        ]
      }
    ]
function hoverOperation(val: any) {
  if (val.type != 4) return {}
  return {
    template: val.type == 4 ? '<i>收藏</i>' : '',
    methods() {//点击会触发onclick方法
      console.log(77777)
    }
  }
}
//点击事件
function nodClick(mess: any) {
  console.log(mess, 'onClicktreeSearch')
  console.log(ruleForm.myId3,'ruleForm.myId3')
}
//复选框点击事件
function nodeCheck(mess: any) {
  console.log(mess, 'nodeChecktreeSearch')
}


const ruleForm = reactive({
  myId: '',
   myId2: '4811864113058280',//4811864113058280
   myId3:''
})
const rules = reactive({
  myId: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
  ],
   myId2: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
  ],
})

const ruleFormRef = ref()
const submitForm =async (formEl:any) => {
  if (!formEl) return
  await formEl.validate((valid:any, fields:any) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
setTimeout(() => {
  // ruleForm.myId= '10000000000'
  
}, 1000);
watch(() => ruleForm.myId, myIdChange)
//输入框改变
function myIdChange(val: any) {
  console.log(val,'myIdChange')

}


</script>

<style lang='scss'>
.treeSearchView {
  display: flex;
  justify-content: space-between;
  height: 500px;

}
</style>