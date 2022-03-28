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
    setup(props) {
        const storeData = inject<any>('storeData')
        console.log(storeData,'storeData')
        const { mapMethods, map } = storeData
        var myLiner = null //liner对象
        initLiner()
        onMounted(() => {
            console.log('Liner')
        })

        watch(() => props.path, watchPath,
            { immediate: true, deep: true }
        )

        function initLiner(){
            myLiner=new window.AMap.Polyline({
                map: map,
                ...props.options
            });
          myLiner.on('click',linerClick)
        }
        function watchPath(val) {
            if(val.length){
                setPath()
            }
        }

        //设置路线
        function setPath(){
            myLiner.setPath(props.path)
        }

        function linerClick(val,e){
            
            console.log(val,e,'val,e')
        }
        return () => h('div', { class: 'Liner' }, 'Liner')
    }
}