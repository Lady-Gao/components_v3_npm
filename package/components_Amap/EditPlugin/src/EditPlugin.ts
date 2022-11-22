import { defineComponent, h, inject, onMounted, ref, watch } from "vue";
/**
 * edit:
 * marker 点
 * PolyEditor  折线
 * PolyEditor 多边形
 * RectangleEditor 矩形
 * CircleEditor 圆
 * 
 */
export default {
    name: 'EditPlugin',
    props: {
        type: {
            type: String,
            default: ''
        },
        //是否开启 编辑模式
        edit:{
            type:Boolean,
            default:false
        },
        overlayOptions:{
            type:Object,
            default(){
                return {}
            }
        }

    },
    emits:['end'],
    setup(props:any, contex:any) {
        const storeData = inject<any>('storeData')
        const { map } = storeData
        const editType=ref('')
        const myoverlay=ref()
        const myoverlayEditor=ref() //编辑对象
       

        watch(() => props.edit, watchEdit,
        { immediate: true, deep: true }
        )
       
        watch(() => props.type, watchType,
        { immediate: true, deep: true }
        )
       
      
       function createOverlay(){
        if(!editType.value)return 
           let otherOptions:{bounds?:Object,draggable?:boolean}={}
           
        //矩形 需要计算周边
        if(props.type=='rectangle'){
            otherOptions.bounds= new  window.AMap.Bounds(props.overlayOptions.southWest, props.overlayOptions.northEast)
        }
        
           myoverlay.value=new  window.AMap[editType.value]({
               ...props.overlayOptions,
               ...otherOptions
             
           })
       
           myoverlay.value.setMap(map)
                //先创建对象，再编辑对象
                 if(props.edit){
                    EditPlugin()
                 }
        }

        function EditPlugin(){
           if(!editType.value)return 
           // //点 进入编辑状态
            if(props.type=='marker'){
              return   myoverlay.value.setDraggable(true)
            }
            map.plugin(["AMap."+ editType.value+"Editor"],function(){ 
              myoverlayEditor.value = new  window.AMap[editType.value+"Editor"](map,  myoverlay.value); 

                // 开启编辑模式
                myoverlayEditor.value.open(); 
                // myoverlayEditor.on('adjust', function(event:any) {
                //     console.log('触发事件： adjust',event)
                // })
                myoverlayEditor.value.on('end', endCallback)
            });
        }
        //结束编辑
        function endCallback(event:any) {
            contex.emit('end',event)
        }
        function watchEdit(val:boolean){
            if(!props.type)return
            if(val){//开启编辑状态
                if(! myoverlay.value){
                    //先创建覆盖物
                    createOverlay()
                }else{

                    EditPlugin()
                }
            }else{ //仅展示
            //    props.type&& clearMap()
            myoverlayEditor.value&&myoverlayEditor.value.close()
            }
        }

        function watchType(val:string){
            clearMap()
            if(val){
                //marker=>Marker
            let str=val.split('')
            str[0]=str[0].toUpperCase()
            editType.value=str.join('')
        
       
             createOverlay()
            }
            
        }
        

        /**
         *  清除地图覆盖物和编辑对象
         */
       function  clearMap(){
            if( myoverlay.value){
                map.remove( myoverlay.value)
                myoverlay.value=null
            }
            if(myoverlayEditor.value){
                myoverlayEditor.value.close()
                myoverlayEditor.value.off('end',endCallback)
                myoverlayEditor.value=null

            }
        }
       
    },
    render(){
       
        return () => h('div', { class: 'EditPlugin' }, 'EditPlugin')
    }
}