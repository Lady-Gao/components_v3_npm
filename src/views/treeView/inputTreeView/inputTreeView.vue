<template>
    <div>
        <el-form :inline="true"  class="demo-form-inline">
    <el-form-item label="Approved by">
       <InputTree  :treeData="EnterpriseTreeList"  />
    </el-form-item>
    <el-form-item label="Activity zone">
    
    </el-form-item>
    <el-form-item>
      <el-button type="primary">Query</el-button>
    </el-form-item>
  </el-form>
       
        <!-- <inputLinkTree   width="200"  v-model="search" :data="$store.getters.getOrganization"/> -->
    </div>
</template>

<script  setup lang='ts'>
    import getEnterpriseTreeList from '@/utils/getEnterpriseTreeList.json'
   import findEnterpriseOrganizationTreeList from '@/utils/findEnterpriseOrganizationTreeList.json'
 const {EnterpriseTreeList}=getEnterpriseTreeList
 const {OrganizationTreeList}=findEnterpriseOrganizationTreeList

</script>

<style lang="scss" scoped>

</style>