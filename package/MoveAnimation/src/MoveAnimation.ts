import { h, inject } from 'vue'
import { asyncDownloadScript } from '../../../src/utils/scriptHelper'
/**
 * 平滑轨迹移动
 */
export default {
    name: 'MoveAnimation',
    props: {
        lineArr:{
            type:Array,
            default(){
                return []
            }
        }
    },
    setup(props, context) {
        const storeData = inject<any>('storeData')
        const { mapMethods, map } = storeData
        var MoveAnimationMarker = null
     
        init()

         // 绘制轨迹
     

        function init() {
            window.AMap.plugin('AMap.MoveAnimation', function () {
                console.log('init')
                MoveAnimationMarker = new window.AMap.Marker({
                    map: map,
                    position: [116.478935, 39.997761],
                    icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
                    offset: new window.AMap.Pixel(-13, -26),
                });

               

                var passedPolyline = new window.AMap.Polyline({
                    map: map,
                    strokeColor: "#AF5",  //线颜色
                    strokeWeight: 6,      //线宽
                });


                MoveAnimationMarker.on('moving', function (e) {
                    passedPolyline.setPath(e.passedPath);
                    // map.setCenter(e.target.getPosition(),true)
                });

                map.setFitView();



            });

        }

        function startAnimation() {
            MoveAnimationMarker.moveAlong(props.lineArr, {
                // 每一段的时长
                duration: 500,//可根据实际采集时间间隔设置
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true,
            });
        };

        function pauseAnimation() {
            MoveAnimationMarker.pauseMove();
        };

        function resumeAnimation() {
            MoveAnimationMarker.resumeMove();
        };

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