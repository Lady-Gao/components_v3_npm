import { emit } from 'process'
import { h, inject, ref, watch } from 'vue'
import { asyncDownloadScript } from '../../../../src/utils/scriptHelper'
/**
 * 平滑轨迹移动
 */
export default {
    name: 'MoveAnimation',
    props: {
        // 轨迹路径
        lineArr:{
            type:Array,
            default(){
                return []
            }
        },
        Icon:{
            type:String,
            default: null
        },
        size:{
            type:Array,
            default(){
                return [50,50]
            }
        },
        offset:{
            type:Array,
            default(){
                return [-13,0]
            }
        }
        // id:''
    },
    emits: ['moving','pointClick'],
    setup(props:any, context:any) {
        const storeData = inject<any>('storeData')
        const {  map } = storeData
        const MoveAnimationMarker = ref()
        const passedPolyline=ref()
        const lineArr=ref(props.lineArr)
        watch(() => props.lineArr, watchlineArr,
        { immediate: true, deep: true }
    )
        watch(() => props.Icon, watchIcon,
        { immediate: false, deep: true }
    )
         // 绘制轨迹
     function watchlineArr(val:any){
        lineArr.value=props.lineArr
         val[0]&& init()
     }
     function watchIcon(val:any){
         MoveAnimationMarker.value&&MoveAnimationMarker.value.setIcon(val)
     }

        function init() {
            window.AMap.plugin('AMap.MoveAnimation', function () {
                MoveAnimationMarker.value&&map.remove(MoveAnimationMarker.value)
                MoveAnimationMarker.value = new window.AMap.Marker({
                    map,
                   // icon:props.Icon,
                     // size: new window.AMap.Size(props.size[0], props.size[1]), 
                    position: lineArr.value[0],
                    offset: props.offset,
                    zIndex :13
                });

                MoveAnimationMarker.value.setIcon(props.Icon)
                // MoveAnimationMarker.value.setMap( map)
         

                passedPolyline.value = new window.AMap.Polyline({
                    map: map,
                    strokeColor: "#AF5",  //线颜色
                    strokeWeight: 6,      //线宽
                    zIndex:10,
                    strokeOpacity: 0.8,     //线透明度
                });


              

                map.setFitView();

                MoveAnimationMarker.value.on('moving',onMoveing);
                MoveAnimationMarker.value.on('click', onClick);
                MoveAnimationMarker.value.on('movealong', onmoveAlong);
            });

        }
        function onClick(e:any) {
            context.emit('pointClick',e)
        }
        function onMoveing(e:any) {
            passedPolyline.value.setPath(e.passedPath);
             // map.setCenter(e.target.getPosition(),true)
            context.emit('moving',e)
        }
        function onmoveAlong(){

            console.log('onmoveAlong')
        }
// 开始动画
        function startAnimation(opstions:{}) {
            stopAnimation()
            console.log(lineArr.value.length,'lineArr')
            MoveAnimationMarker.value.moveAlong(lineArr.value, {
                // 每一段的时长
                duration: 500,//可根据实际采集时间间隔设置
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true,
                ...opstions,
            });
        };
// 暂停动画
        function pauseAnimation() {
            MoveAnimationMarker.value.pauseMove();
        };
// 继续动画
        function resumeAnimation() {
            MoveAnimationMarker.value.resumeMove();
        };
// 停止动画
        function stopAnimation() {
    console.log('停止动画')
            MoveAnimationMarker.value&&MoveAnimationMarker.value.stopMove();
        };


        return {
            lineArr,
            startAnimation,
            pauseAnimation,
            resumeAnimation,
            stopAnimation,
            init
        }
    },
     render() {
        return 
    //      return () => h('div', { class: 'MoveAnimation' }, 'MoveAnimation')
     }
}