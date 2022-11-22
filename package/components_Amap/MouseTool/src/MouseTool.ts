import { defineComponent, h, inject, onMounted, ref, watch } from "vue";
/**
 * MouseTool:
 * marker 点
 * polyline  折线
 * polygon 多边形
 * rectangle 矩形
 * circle 圆
 * 
 * 
 */
export default {
    name: 'MouseTool',
    props: {
        type: {
            type: String,
            default: 'marker'
        },
     

    },
    emits:['draw'],
    setup(props:any, context:any) {
        const storeData = inject<any>('storeData')
        const { map } = storeData
        const mouseTool =ref() //绘制对象
        const overlays = ref([{}]);
      
        map.plugin(["AMap.MouseTool"],function(){ 
            initMouseTool()
        });

        

        watch(() => props.type, watchType,
        { immediate: true, deep: true }
        )
      
        function initMouseTool(){
            mouseTool.value= new window.AMap.MouseTool(map); 
           
        }

        /**
         * 鼠标工具绘制覆盖物结束时触发此事件
         * 结束绘制
         * @param e 
         */
       
        function draw(e:any){
            overlays.value.push(e.obj);
            context.emit('draw',{obj:e.obj,overlays:overlays.value})
        }

        function remove(){
            map.remove(overlays.value)
        }

        //关闭，并清除覆盖物
        function close(flag=true){
            mouseTool.value.close(flag)
        }

       


       

       
        /**
         * 监听类型变化
         * @param val 
         */
        function watchType(val:string) {
            // close()
        if(val&&val!=mouseTool.value){

            mouseTool.value[val]()
            mouseTool.value.on('draw',draw) 
        }

        }
        return {
            remove,
            close
        }
    },
    render(){
        
        return () => h('div', { class: 'MouseTool' }, 'MouseTool')
    }
}