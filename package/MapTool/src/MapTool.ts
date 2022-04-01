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
    name: 'MapTool',
    props: {
        type: {
            type: String,
            default: 'rectangle'
        },
     

    },
    setup(props, contex) {
        const storeData = inject<any>('storeData')
        const { map } = storeData
        var mouseTool =null //绘制对象
        var overlays = [];
      
        map.plugin(["AMap.MouseTool"],function(){ 
            initMouseTool()
        });

        

        watch(() => props.type, watchType,
        { immediate: true, deep: true }
        )
      
        function initMouseTool(){
            mouseTool= new window.AMap.MouseTool(map); 
           
        }

        /**
         * 结束绘制
         * @param e 
         */
        function draw(e){
            console.log(props.type,e,)
            overlays.push(e.obj);
          
        }

        function remove(){
            map.remove(overlays)
        }

        //关闭，并清除覆盖物
        function close(flag=true){
            mouseTool.close(flag)
        }

       


       

       
        /**
         * 监听类型变化
         * @param val 
         */
        function watchType(val) {
            // close()
        
            mouseTool[val]()
            mouseTool.on('draw',draw) 
        }
        return {
            remove,
            close
        }
    },
    render(){
       
        return () => h('div', { class: 'MapTool' }, 'MapTool')
    }
}