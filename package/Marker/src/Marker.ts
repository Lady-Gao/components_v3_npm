import { h, onMounted, inject, ref, nextTick, watch, reactive, toRefs, toRef ,defineExpose, defineComponent,Options} from "vue";
import { getMapScript } from '../../../src/utils/scriptHelper';
import '../../Map/src/Map'
export default {
    name: 'Marker',
    props: {
        //[116.478935, 39.997761]
        position: {
            type: Array,
            default() {
                return []
            }
        },
        size:{
            type:Array,
            default(){
                return [32,32]
            }
        },
        id: null,
        Icon: {
            type: String,
            default:''
        },
        //是否使用平滑移动
        usemoveTransform: {
            type: Boolean,
            default() {
                return false
            }
        },
        //是否拖尾
        drawLine: {
            type: Boolean,
            default() {
                return false
            }
        },
        //平滑速度
        moveSpeed: {
            type: Number,
            default() {
                return 1000
            }
        },
        Editor: null,//function
        //初始化就加载显示到地图上
        intoMap: {
            type: Boolean,
            default() {
                return true
            }
        },
        //是否删除
        remove: {
            type: Boolean,
            default() {
                return false
            }
        },
    },
    emits:['click','moving'],
    setup(props,context) {
        
        const storeData = inject<any>('storeData')
           const {mapMethods,map}=storeData
        let myMarker = null//marker对象

        initMakrt()
        watch(() => props.position, watchPostion,
            { immediate: true, deep: true }
        )
        watch(() => props.Icon, watchIcon,
            { immediate: true, deep: true }
        )
      
        
        /**
         * 初始化
         */
       function initMakrt(){
            //生成marker
        //    myMarker=creatMarker({
        //         position:props.position,
        //         icon:props.Icon
        //     })
        myMarker=new window.AMap.Marker({
            position:props.position,
            icon:props.Icon,
            size: new AMap.Size(50, 50),    // 图标尺寸  宽  高
            // anchor: anchor[i], //设置锚点
            // offset: new AMap.Pixel(0,0), //设置偏移量
            // label: {
            //     direction: 'top',
            //     content: props.id+'号',
            // }
        });
        myMarker.id=props.id
            if(props.intoMap){
                addOverlay()
               
           }
           myMarker.on('click', onClick)
           myMarker.on('moving', onMoving)
        }

        /**
         * 创建marker
         * @param position options
         * @returns 
         */
        function creatMarker(options) {
              myMarker= mapMethods.creatMarker(options)
                return myMarker
        }
 
        /**
         * 将marker添加在地图上
         */
       function addOverlay(){
        //   mapMethods.addOverlay(myMarker)
        myMarker.setMap(map);
        //       map.add(myMarker);
             return myMarker
        }
       
        
         /**
        * 监听position
        * @param newVal  Array 更新值
        * @param oldVal  Array 旧值
        * 当定位更新，有marker就更新定位，没有marker就创建marker
        */
        function watchPostion(newVal, oldVal) {
            setPosition(newVal)
        }
         /**
        * 监听Icon
        * @param newVal  Array 更新值
        * @param oldVal  Array 旧值
        * 当图片更新，有marker就更新 不显示图片不能穿空或者null  不识别？建议传‘null'
        */
        function watchIcon(newVal, oldVal) {
            if (newVal != oldVal ) {
                  myMarker.setIcon(newVal)
             }
           
        }

        /**
         * 更新marker定位
         * @param point  Array 新位置信息 
         */
        function setPosition(point, speed = 1000) {
            if (!myMarker) return
            if(point==null){
                return  myMarker.setMap(null);
            }
             // 用平滑的方式移动还是跳点移动
            if (props.usemoveTransform) {
                  //平滑移动
                myMarker.moveTo(point,{
                    duration: speed,
                    delay: 500,
                  })
            } else {
                //跳点
                myMarker.setPosition(point)
                // mapMethods.setFitView(myMarker)
            }
            
        }
      
        /**
         * 移除marker
         */
        function removeMarker(val){
             console.log('removeMarker')
            if(myMarker){
                myMarker.off('click', onClick)
           myMarker.off('moving', onMoving)
                map.remove(myMarker)
                 myMarker=null
            }
           
        }

        /**
         * marker点击事件
         * @param e 
         */
        function onClick(e) {
            context.emit('click', {
                // e,
                id:props.id,
                lnglat:props.position,
           })
        }
        
        function onMoving(e) {
            context.emit('moving', {
                id:props.id,
                lnglat:e.target._position,
             })
        }
        //地图上树后 拿到数据
        nextTick(() => {

        })
        
        return {
            removeMarker
        }
    },
    render(){
       
        return () => h('div', { class: 'Marker' }, 'Marker')
    }
}