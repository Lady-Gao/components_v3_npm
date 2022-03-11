import { h, onMounted, inject, ref, nextTick, watch, reactive, toRefs, toRef } from "vue";
import { getMapScript } from '../../../src/utils/scriptHelper';

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
        id: null,
        Icon: String,
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
    },

    setup(props,context) {
        const storeData = inject<any>('storeData')
           const {mapMethods,map}=storeData
        let myMarker = null//marker对象

        initMakrt()
        watch(() => props.position, watchPostion,
            { immediate: true, deep: true }
        )
      
        
        /**
         * 初始化
         */
       function initMakrt(){
            //生成marker
           myMarker=creatMarker({
                position:props.position,
                icon:props.Icon
            })
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
          mapMethods.addOverlay(myMarker)
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
         * 更新marker定位
         * @param point  Array 新位置信息 
         */
        function setPosition(point, speed = 1000) {
            if (!myMarker) return
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
        return () => h('div', { class: 'Marker' }, 'Marker')
    }
}