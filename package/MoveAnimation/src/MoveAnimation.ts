import { h, inject } from 'vue'
import { asyncDownloadScript } from '../../../src/utils/scriptHelper'

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
        const lineArr = [[116.478935, 39.997761], [116.478939, 39.997825], [116.478912, 39.998549], [116.478912, 39.998549], [116.478998, 39.998555], [116.478998, 39.998555], [116.479282, 39.99856], [116.479658, 39.998528], [116.480151, 39.998453], [116.480784, 39.998302], [116.480784, 39.998302], [116.481149, 39.998184], [116.481573, 39.997997], [116.481863, 39.997846], [116.482072, 39.997718], [116.482362, 39.997718], [116.483633, 39.998935], [116.48367, 39.998968], [116.484648, 39.999861]];
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
            MoveAnimationMarker.moveAlong(lineArr, {
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