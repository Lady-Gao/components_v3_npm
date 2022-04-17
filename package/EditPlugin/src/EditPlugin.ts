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
        var myEditor=null //编辑对象
        var editType=''
        var myoverlay:any=null
        var myoverlayEditor:any=null
       
 

        watch(() => props.edit, watchEdit,
        { immediate: true, deep: true }
        )
        watch(() => props.type, watchType,
        { immediate: true, deep: true }
        )

       
      
       function createOverlay(){
           console.log(editType,'createOverlayeditType Circle')
           let otherOptions:{bounds?:Object,draggable?:boolean}={}
           
        //矩形 需要计算周边
        if(props.type=='rectangle'){
            otherOptions.bounds= new  window.AMap.Bounds(props.overlayOptions.southWest, props.overlayOptions.northEast)
        }
        
           myoverlay=new  window.AMap[editType]({
               ...props.overlayOptions,
               ...otherOptions
             
           })
       
                 myoverlay.setMap(map)
                //先创建对象，再编辑对象
                 if(props.edit){
                    EditPlugin()
                 }
        }

        function EditPlugin(){
          
           
           // //点 进入编辑状态
            if(props.type=='marker'){
              return  myoverlay.setDraggable(true)
            }
            map.plugin(["AMap."+ editType+"Editor"],function(){ 
              myoverlayEditor = new  window.AMap[editType+"Editor"](map, myoverlay); 

                // 开启编辑模式
                myoverlayEditor.open(); 
                // myoverlayEditor.on('adjust', function(event:any) {
                //     console.log('触发事件： adjust',event)
                // })
                myoverlayEditor.on('end', endCallback)
            });
        }
        //结束编辑
        function endCallback(event:any) {
            contex.emit('end',event)
        }
        function watchEdit(val:boolean){
            if(! props.type)return
            if(val){//开启编辑状态
                if(!myoverlay){
                    //先创建覆盖物
                    createOverlay()
                }else{

                    EditPlugin()
                }
            }else{ //仅展示
            //    props.type&& clearMap()
            myoverlayEditor&&myoverlayEditor.close()
            }
        }

        function watchType(val:string){
            clearMap()
            if(val){
                //marker=>Marker
            let str=val.split('')
            str[0]=str[0].toUpperCase()
             editType=str.join('')
        
       
             createOverlay()
            }
            
        }
        

        /**
         *  清除地图覆盖物和编辑对象
         */
       function  clearMap(){
           
            if(myoverlay){
                map.remove(myoverlay)
                myoverlay=null
            }
            if(myoverlayEditor){
                myoverlayEditor.close()
                myoverlayEditor.off('end',endCallback)
                myoverlayEditor=null

            }
        }
       
    },
    render(){
       
        return () => h('div', { class: 'EditPlugin' }, 'EditPlugin')
    }
}