import { defineComponent, h, inject, onMounted, ref, watch } from "vue";

export default {
    name: 'InfoWindow',
    props: {
        position:{
            type:Array,
            default(){
                return []
            }
        },
        content: null,
      
    },
    emits:['close'],
    setup(props,context) {
        const storeData = inject<any>('storeData')
        const {mapMethods,map}=storeData
     let InfoWindow = null//marker对象
     initInfoWindow()
        
        onMounted(() => {
            console.log('InfoWindow')
        })

        watch(() => props.position, watchPostion,
        { immediate: true, deep: true }
        )

        watch(() => props.content, watchContent,
        { immediate: true, deep: true }
        )

        function initInfoWindow() {
           InfoWindow= new window.AMap.InfoWindow({
                offset: new window.AMap.Pixel(0, -30),
                autoMove: true,
             });
             InfoWindow.id=props.id
             InfoWindow.on('close',onclose)

         }
         //设置图片  定位
         function  open(){
            setContent()
            InfoWindow.open(map, props.position);
           
        }
        /**
         * 1.props.position有值  代表点击信息框上的’关闭‘，触发的事件
         * 2.props.position 没值 代表InfoWindow.close()手动调用
         */
        function onclose() {
            if (props.position.length) {
                context.emit('close')
            } else {
                console.log('手动调用')
            }
        }
        function setContent(){
            InfoWindow.setContent(props.content);
        }
        function setPosition(val){
             setContent()
             InfoWindow.setPosition(val);
        }
        /**
         * 定位有更新就更新定位，没有数据则关闭infowindow
         * @param point 
         */
        function watchPostion(point) {
             if (InfoWindow && point.length) {
                 //打开状态下 更新定位
                if (InfoWindow.getIsOpen()) {
                   setPosition(point);
                } else {

                    open()
                    
                }
             }
            //  else {
            //      InfoWindow.close()
            // }
           
        }

        function close(){
            InfoWindow.close()
        }
        function watchContent(text) {
            InfoWindow.setContent(text);
        }
       return {
        close
       }
    },
    render(){
        return () => h('div',{class:'InfoWindow'},'InfoWindow')
    }
}