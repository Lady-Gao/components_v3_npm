<template>
  <div class='inputLinkTreeView'>
    
   
 <el-form :line="true"  :model="ruleForm"  ref="ruleFormRef"    :rules="rules">
        <inputLinkTree :initValue="ruleForm" 
        :treeData="OrganizationTreeList"
         :lazy='lazy'  
       @tree-ready="treeReady"
       @current-change="currentChange"
        />
      
        <!-- :modelKey="['enterpriseId','fleetId']" -->
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
  import findEnterpriseOrganizationTreeList from '@utils/findEnterpriseOrganizationTreeList.json'
  const {OrganizationTreeList}=findEnterpriseOrganizationTreeList
 const lazy='http://web2.test.cvtsp.com/api/basic/fleet/findFleetTreeList'
 const dataT=[
      {text: "父节点1", 
       id:999,
        children: [
            {text: "子节点1",id:1},
            {text: "子节点2",id:2}
        ]
      }
    ]

//点击事件
function nodClick(mess: any) {
  console.log(mess, 'onClicktreeSearch')
}


const ruleForm = reactive({
   enterpriseId: '4811864113058280',//4811864113058280
   fleetId:''
})
const rules = reactive({
  enterpriseId: [
    { required: true, message: 'Please input Activity name', trigger: 'change' },
  ],
   fleetId: [
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
// setTimeout(() => {
//    ruleForm.enterpriseId= '4811864113058280'
//     console.log('settime')
//    setTimeout(() => {
//       ruleForm.myId3= ''
//       console.log(' ruleForm.myId3= ')
//    }, 1000);
//  }, 10000);
 watch(() => ruleForm, enterpriseIdChange)
// //输入框改变
function enterpriseIdChange(val: any) {
  console.log(val,'enterpriseIdChange')

}
// ruleForm.enterpriseId fleetId


function currentChange(val:{}){
  console.log(val,'currentChange')
}
function treeReady(){
   ruleForm.enterpriseId= '4811864113058280'
}
</script>

<style lang='scss'>

</style>