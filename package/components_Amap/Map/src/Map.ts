import { h, provide,  reactive } from 'vue'

import { getMapScript } from '../../../../src/utils/scriptHelper'
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

    setup(props: any, { attrs, slots, emit, expose }:any) {

        const storeData:{map:any,isReady:boolean} = reactive({
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


        }
        function clearMap(){
            storeData.map.clearMap();
        }
        //根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别
        function setFitView(){
            storeData.map.setFitView();
        }
        function setCenter(lnglat:[],flag=true){
            storeData.map.setCenter(lnglat,flag);
        }
        expose({ storeData ,clearMap,setFitView,setCenter})
        return () => h('div', {
            class: 'Map',
            id: props.id,
            style:{
                height: '500px'
            },

        }, h('div', { class: 'Map_slots',
        }, storeData.isReady ? (slots.default?slots.default() : ''): ''))
    }
}