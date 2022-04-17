import { h, inject, watch } from 'vue'
import { asyncDownloadScript } from '../../../src/utils/scriptHelper'
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
        // id:''
    },
    setup(props:any, context:any) {
        const storeData = inject<any>('storeData')
        const {  map } = storeData
        var MoveAnimationMarker:any = null
     
        
        watch(() => props.lineArr, watchlineArr,
        { immediate: true, deep: true }
    )
         // 绘制轨迹
     function watchlineArr(val:boolean){
         val[0]&& init()
     }

        function init() {
            console.log(props.lineArr[0],'props.lineArr')
            window.AMap.plugin('AMap.MoveAnimation', function () {
             
                MoveAnimationMarker = new window.AMap.Marker({
                    map: map,
                    position: props.lineArr[0],
                    icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
                   
                });

               

                let passedPolyline = new window.AMap.Polyline({
                    map: map,
                    strokeColor: "#AF5",  //线颜色
                    strokeWeight: 6,      //线宽
                });


                MoveAnimationMarker.on('moving', function (e:any) {
                    passedPolyline.setPath(e.passedPath);
                    // map.setCenter(e.target.getPosition(),true)
                });

                map.setFitView();



            });

        }
// 开始动画
        function startAnimation() {
            MoveAnimationMarker.moveAlong(props.lineArr, {
                // 每一段的时长
                duration: 500,//可根据实际采集时间间隔设置
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true,
            });
        };
// 暂停动画
        function pauseAnimation() {
            MoveAnimationMarker.pauseMove();
        };
// 继续动画
        function resumeAnimation() {
            MoveAnimationMarker.resumeMove();
        };
// 停止动画
        function stopAnimation() {
            MoveAnimationMarker.stopMove();
        };


        return {
            startAnimation,
            pauseAnimation,
            resumeAnimation,
            stopAnimation,
        }
    },
    render() {

        return () => h('div', { class: 'MoveAnimation' }, 'MoveAnimation')
    }
}