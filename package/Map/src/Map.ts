import { h, provide,  reactive } from 'vue'

import { getMapScript } from '../../../src/utils/scriptHelper'
/**
 * author: gaoyanan
 * Amap加载完成之后，加载slot各个组件，组件内部获取地图对象和地图操作方法
 */
export default {
    name: 'Map',
    props: {
        //地图名称 高德AMap
        name: {
            type: String,
            default() { return 'AMap' }
        },
        //地图级别  值越大 城市约清晰
        zoom: {
            type: Number,
            default() {
                return 13
            }
        },
        //中心点坐标
        center: {
            type: Array,
            default() {
                return [116.397428, 39.90923]
            }
        },
        //使用地图视图
        viewMode: {
            type: String,
            default: '2D'
        },
        //在同一个页面使用  需要加id区分 不然只会初始化一个
        id:{
            type: String,
            default:'MapDom'
        },
    },

    setup(props: any, contex:any) {

        const storeData = reactive({
            map: {},//地图对象
            isReady: false,//地图对象是否加载完成
        })
        provide('storeData', storeData)

        MapScript()


        //根据地图名称加载对应的js文件
        function MapScript() {
            let url = '';
            switch (props.name) {
                case 'AMap':
                   url='https://webapi.amap.com/maps?v=2.1Beta&key=966a1cec27bf619fc0b3d8683e8f4c01&plugin=AMap.MarkerCluster'
                    break;
            
             
            }

            getMapScript(props.name, url)
                .then((AMap:any) => {
                    mapInitial(AMap)
                   
                 
                })
        }

        //地图初始化
        function mapInitial(AMap:any) {
            storeData.map = new AMap.Map(props.id, {
                zoom: props.zoom,//级别
                center: props.center,//中心点坐标
                viewMode: props.viewMode//使用地图视图
            });
            // storeData.map.mapId=props.id new Gaode(storeData.map)
            storeData.isReady = true;



// new window.AMap.Marker({
//     map: storeData.map,
//     position:[121.434529,31.215641],
    // icon:props.Icon,
    // size: new AMap.Size(50, 50),
// })
//巡航器实验
            // asyncDownloadScript('AMapUI','https://webapi.amap.com/ui/1.1/main.js?v=1.1.1').then(res=>{
            //     AMapUI.load(['ui/misc/PathSimplifier'], function (PathSimplifier) {
            //         var pathSimplifierIns = new PathSimplifier({
            //             zIndex: 100,
            //             //autoSetFitView:false,
            //             map: storeData.map, //所属的地图实例
            
            //             getPath: function(pathData, pathIndex) {
            
            //                 return pathData.path;
            //             },
            //             getHoverTitle: function(pathData, pathIndex, pointIndex) {
            
            //                 if (pointIndex >= 0) {
            //                     //point 
            //                     return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
            //                 }
            
            //                 return pathData.name + '，点数量' + pathData.path.length;
            //             },
            //             renderOptions: {
            
            //                 renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
            //             }
            //         });
            
            
            //         //设置数据
            //         pathSimplifierIns.setData([{
            //             name: '路线0',
            //             path: [
            //                 [116.405289, 39.904987],
            //                 [113.964458, 40.54664],
            //                 [111.47836, 41.135964],
            //                 [108.949297, 41.670904],
            //                 [106.380111, 42.149509],
            //                 [103.774185, 42.56996],
            //                 [101.135432, 42.930601],
            //                 [98.46826, 43.229964],
            //                 [95.777529, 43.466798],
            //                 [93.068486, 43.64009],
            //                 [90.34669, 43.749086],
            //                 [87.61792, 43.793308]
            //             ]
            //         }]);
            
            //         //对第一条线路（即索引 0）创建一个巡航器
            //         var navg1 = pathSimplifierIns.createPathNavigator(0, {
            //             loop: true, //循环播放
            //             speed: 1000000 //巡航速度，单位千米/小时
            //         });
            
            //         navg1.start();
            //     })
            // })

//聚合实验
    //             var points = [{"lnglat":["113.864691","22.942327"]},{"lnglat":["113.370643","22.938827"]},{"lnglat":["112.985037","23.15046"]},{"lnglat":["110.361899","20.026695"]},{"lnglat":["121.434529","31.215641"]},{"lnglat":["120.682502","28.011099"]},{"lnglat":["126.687123","45.787618"]},{"lnglat":["103.970724","30.397931"]},{"lnglat":["117.212164","31.831641"]},{"lnglat":["121.411101","31.059407"]},{"lnglat":["104.137953","30.784276"]},{"lnglat":["120.499683","30.042305"]},{"lnglat":["108.94686","34.362975"]},{"lnglat":["112.873295","22.920901"]},{"lnglat":["113.373916","23.086728"]},{"lnglat":["113.250159","23.075847"]},{"lnglat":["116.675933","39.986343"]},{"lnglat":["120.75997","31.734934"]},{"lnglat":["118.314741","32.26999"]},{"lnglat":["111.723311","34.771838"]}]
    //             let markers=[]
    //             for (var i = 0; i < points.length; i += 1) {
    //                 markers.push(new AMap.Marker({
    //                     position: points[i]['lnglat'],
    //                     content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
    //                     offset: new AMap.Pixel(-15, -15)
    //                 }))
    //             }
    // console.log(markers,'markers')
    //         let cluster = new AMap.MarkerCluster(storeData.map, points, {
    //             gridSize: 80,
    //             // renderClusterMarker: _renderClusterMarker, // 自定义聚合点样式
    //             renderMarker: _renderMarker, // 自定义非聚合点样式
    //         });
    //        function _renderMarker (context) {
    //             let content = '<div style="background-color: hsla(180, 100%, 50%, 0.3); height: 18px; width: 18px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 3px;"></div>';
    //             let offset = new AMap.Pixel(-9, -9);
    //             context.marker.setContent(content)
    //            context.marker.setOffset(offset)
    //            context.marker.setIcon('https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png')
    //            console.log(context,'context')
    //         }
               

        }
       
        return () => h('div', {
            class: 'Map',
            id: props.id,
            style:{
                height: '500px'
            }
        }, h('div', {
         
        }, storeData.isReady ? (contex.slots.default?contex.slots.default() : ''): ''))
    }
}