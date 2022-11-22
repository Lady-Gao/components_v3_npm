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
                    strokeWeight:6,//轮廓线宽度
                    strokeOpacity: 0.8,     //线透明度
                }
            }
        },

    },
    setup(props:any) {
        const storeData = inject<any>('storeData')
        const {  map } = storeData
        const myLiner = ref() //liner对象
        initLiner()
      

        watch(() => props.path, watchPath,
            { immediate: true, deep: true }
        )

        function initLiner(){
            myLiner.value=new window.AMap.Polyline({
                map: map,
                ...props.options,
                zIndex:1
            });
          myLiner.value.on('click',linerClick)
        }
        function watchPath(val:[]) {
            console.log(val.length,'val')
            if(val.length){
                setPath()
            }else{
                 myLiner.value.setMap(null)
            }
        }

        //设置路线
        function setPath(){
            myLiner.value.setPath(props.path)
            myLiner.value.setMap( map)
        }

        function linerClick(val:any,e:any){
            
        }
        /**
         * 移除marker
         */
         function removeMarker(){
           if( myLiner.value){
              myLiner.value.off('click', linerClick)
              map.remove( myLiner.value)
              myLiner.value=null
          }
          
       }
       return {
        removeMarker,
        myLiner
    }
},
// render(){
   
    // return () => h('div', { class: 'Liner' }, 'Liner')
// }
}