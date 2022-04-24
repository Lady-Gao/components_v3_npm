import { defineComponent, h, inject, onMounted, ref, watch } from "vue";

export default {
    name: 'Liner',
    props: {
        //路径数组 [[],[]]
        path: {
            type: Array,
            default() {
                return []
            }
        },
        //线条的属性配置
        options:{
            type:Object,
            default(){
                return {
                    borderWeight: 2, // 线条宽度，默认为 1
                    strokeColor: "#28F", // 线条颜色
                }
            }
        },

    },
    setup(props:any) {
        const storeData = inject<any>('storeData')
        console.log(storeData,'storeData')
        const {  map } = storeData
        const myLiner = ref() //liner对象
        initLiner()
      

        watch(() => props.path, watchPath,
            { immediate: true, deep: true }
        )

        function initLiner(){
            myLiner.value=new window.AMap.Polyline({
                map: map,
                ...props.options
            });
          myLiner.value.on('click',linerClick)
        }
        function watchPath(val:[]) {
            if(val.length){
                setPath()
            }
        }

        //设置路线
        function setPath(){
            myLiner.value.setPath(props.path)
        }

        function linerClick(val:any,e:any){
            
            console.log(val,e,'val,e')
        }
        return () => h('div', { class: 'Liner' }, 'Liner')
    }
}