<template>
  <div class='inputLinkTree' >
    <el-form-item
      :label="label"
      prop="enterpriseId"
      class="myinputLinkTree"
    >
      <InputTree
      :width='width'
        :disabled="disabled"
       :data="data"
        v-model="enterpriseId"
        ref="InputTree1"
        @node-click="nodeClick1"
        @clear='clear'
        @tree-load='treeLoad'
      />
    </el-form-item>
    <el-form-item label="车组" prop="fleetId">
      <InputTree
      v-loading="treeLoading"
      :width='width'
        :disabled="disabled"
         :data="data2"
        :initLoadUrl='false'
        v-model="fleetId"
        ref="InputTree2"
        @tree-load="treeLoad2"
        @node-click="nodeClick2"
         @clear='clear2'
      />
    </el-form-item>
  </div>
</template>

<script>
/**
 *   
 * <inputLinkTree  v-model="search" :data="$store.getters.getOrganization"  :disabled="true"  @node-click='nodeClick'/>
 * 
 * 
 */
export default {
  name: "InputLinkTree",
  props: {
    // v-model对象
    value: {
      type: Object,
      default() {
        return {};
      },
    },
    //传入的是数据方式：第一棵树的数据
    data: {
      type: Array,
      default() {
        return [];
      },
    },
   
   
       //是否禁用
    disabled: {
      type:Boolean,
      default:false,
    },
     //传入的是接口方式：第二棵树  车组树接口
    url2: {
      type: String,
      default: "/basic/fleet/findFleetTreeList",
    },
       //input框宽度
    width: {
      type:String,
      default(){
        return '215'
      },
    },
    //第一棵树的文字
  label:{
     type:String,
      default:'所属公司'
  }
  },
  data() {
    return {
      enterpriseId: "",
      fleetId: "",
      data2: [], //车组树数据
      treeLoading: false,
    };
  },
  methods: {
      //树加载完成    value.enterpriseId接口请求还没有回来还没有数据
    treeLoad() {
    },
    //车组树渲染完成 赋值
    treeLoad2() {
        this.fleetId=this.value.fleetId
    },
    /**
     *  1 公司树的点击事件
     *  2 公司反选上之后  会触发该事件，请求完车组接口后会重新渲染
     */
    nodeClick1(val) {
   
     if(val.id){
        //请求车组树
      this.findFleetTreeList(val);
     }
     
      this.value.enterpriseId=val.id||null
        //  console.log( this.value.enterpriseId,'nodeClick1')
      // this.value.fleetId=''
    },
     //车组树的点击 通知父组件
    nodeClick2(val) {

      // this.$emit("node-click", {
      //   enterpriseId: val.enterpriseId,
      //   fleetId: val.id,
      // },val);
       this.value.fleetId=val.id||null
        // console.log( this.value.fleetId,'nodeClick2')
    },
    //车组的数据请求
    async findFleetTreeList(val) {
      this.treeLoading = true;
      let params = this.autoParams? this.autoParams: {
                                                            enterpriseId: val.enterpriseId,
                                                            pId: val.id,
                                                            type: val.type,
                                                        };
     const { data } = await this.$http({
        url: this.url2,
        params,
        method: "GET",
      });
      if (data) {
        this.data2 = data;
      } else {
        this.data2 = [];
      }
      this.treeLoading = false;
    },
    //公司框清空事件
    clear(){
         this.data2 = [];
         this.value.enterpriseId=''
        this.value.fleetId=''
    },
    //车组框清空事件
    clear2(){
         this.value.fleetId=''
    }
  },
  watch: {
      "value.enterpriseId": {
      immediate: true,
      handler(val) {
        //主要是修改时  进入页面 树加载完成  但是value可能会没有值  所以放在监听
        val&&(this.enterpriseId = val);
       
      },
     
    },

   }
};
</script>

<style lang="scss" scoped>
.inputLinkTree {
  display: inline-block;
 
}
</style>
