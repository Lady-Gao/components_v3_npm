import { defineComponent, h, inject, onMounted, ref, watch } from "vue";
import { asyncDownloadScript } from '../../../src/utils/scriptHelper'
/**
 *巡航器 
 *
 *
 * 实时： <!-- <PathSimplifierIns  
 *              :id='currentMarkerId' 
 *              :position='realTimeData.position' 
 *              :icon='realTimeData.icon'   
 *              model='realTime' 
 *              @moveing='PathSimplifierInsmoveing'/> -->
 * 
 * position：[116.497428, 39.20923]
 * 
 * 轨迹：    <PathSimplifierIns
              :position="historyData"
              model="history"
              @moveing='PathSimplifierInsmoveing'
      />

 * 方式一 position：[
    { point: [116.497428, 39.20923], icon: icon1 },
    { point: [116.497428, 39.20923] },
    { point: [113.597428, 36.20923], icon: icon1 },
    { point: [116.697428, 39.280923] },
    { point: [115.397428, 37.20923], icon: icon1 },
  ]
 * 
 * 方式二 position：[[116.497428, 39.20923],[113.597428, 36.20923]]  icon：icon1 单独传
 * 
 * 
 */
export default {
    name: 'PathSimplifierIns',
    props: {
        // 巡航方式
        model: {
            type: String,
            default() {
                return 'realTime'// realTime/ history
            }
        },
        // //实时数据，medel=='realTime' 传入改值 [116.497428, 39.20923]
        // position: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
        icon: {
            type: String || null,
            default: ''
        },
        // 巡航器更换标识，id改变，将重置巡航器
        id: null
        ,


        // //历史数据 medel=='history' 传入改值 [[],[]]
        // historyData: {
        //     type: Array,
        //     default() {
        //         return []
        //     }
        // },
        //定位信息
        position: {
            type: Array,
            default() {
                return []
            }
        }
    },
    emits: ['moveing','pointClick'],
    setup(props:any, context:any) {
        const storeData = inject<any>('storeData')
        console.log(storeData,'storeData')
        const {  map } = storeData
        var pathSimplifierIns:any = null//pathSimplifierIns对象
        var myPathSimplifier:any = null
        const emptyLineStyle = {
            lineWidth: 0,
            fillStyle: null,
            strokeStyle: null,
            borderStyle: null
        };
        var navg1:any = null;
        var data = [{
            name: '动态路线',
            path: [[]]
        }];
        var historyIndex=0//轨迹当前的点记录
        asyncDownloadScript('AMapUI', 'https://webapi.amap.com/ui/1.1/main.js?v=1.1.1').then((AMapUI: any) => {
            init(AMapUI)
        })

        onMounted(() => {

        })


        watch(() => props.id, clearpathSimplifierIns,
            { immediate: true, deep: true }
        )
        watch(() => props.position, watchPosition,
            { immediate: true, deep: true }
        )


        function init(AMapUI:any) {
            AMapUI.load(['ui/misc/PathSimplifier'], function (PathSimplifier:any) {

                if (!PathSimplifier.supportCanvas) {
                    alert('当前环境不支持 Canvas！');
                    return;
                }
                myPathSimplifier = PathSimplifier

                initPathSimplifier();




            });

        }
        //初始化pathSimplifierIns
        function initPathSimplifier() {
            pathSimplifierIns = new myPathSimplifier({
                zIndex: 100,
                autoSetFitView: false,
                map: map, //所属的地图实例
                pathNavigatorStyle: {
                    width: 32,
                    height: 32,
                    //使用图片
                    content: myPathSimplifier.Render.Canvas.getImageContent(props.icon)
                },
                getPath: function (pathData:any) {
                    // console.log(2,'getPath')//实时才调用
                    return pathData.path;
                },
                getHoverTitle: function (pathData:any) {
                    
                //   console.log(pathData, pathIndex, pointIndex,'pathData, pathIndex, pointIndex')
                   

                    return pathData.name + '，点数量' + pathData.path.length;
                },
                renderOptions: props.model == 'realTime' ? {
                    //将点、线相关的style全部置emptyLineStyle
                    pathLineStyle: emptyLineStyle,
                    pathLineSelectedStyle: emptyLineStyle,
                    pathLineHoverStyle: emptyLineStyle,
                    keyPointStyle: emptyLineStyle,
                    startPointStyle: emptyLineStyle,
                    endPointStyle: emptyLineStyle,
                    keyPointHoverStyle: emptyLineStyle,
                    keyPointOnSelectedPathLineStyle: emptyLineStyle
                } : {}
            });
        }


        function realTimestart() {
            data[0].path[0] = props.position
            pathSimplifierIns.setData(data);
            navg1 = pathSimplifierIns.createPathNavigator(0, {
                speed: 1000000, //巡航速度，单位千米/小时\
                loop: false, //循环播放
                pathNavigatorStyle: {
                    width: 32,
                    height: 32,
                    //使用图片
                    content: myPathSimplifier.Render.Canvas.getImageContent(props.icon)
                }
            });


            navg1.start();

        }

        //轨迹路劲 设置一次
        function historyStart() {
            let point =[]
            //判断传入的数据类别
            //[{point:[],icon}]
            if(props.position[0].point){
                point = props.position.map((item:{point:[]}) => {
                    return item.point
                })
            }
            //[[],[]]
            if(props.position[0].length){
                point=props.position
            }
            
           console.log(point,'historyStart')

            if (point[0]) {
                let icon=props.position[0].icon||props.icon
                console.log(props.position,'historyStart')
                //设置数据

                data[0].path = point
                pathSimplifierIns.setData(data);

                //对第一条线路（即索引 0）创建一个巡航器
                navg1 = pathSimplifierIns.createPathNavigator(0, {
                    loop: false, //循环播放
                    speed: 1000000, //巡航速度，单位千米/小时
                    pathNavigatorStyle: {
                        width: 32,
                        height: 32,
                        //使用图片
                        content: myPathSimplifier.Render.Canvas.getImageContent(icon)
                    },
                    getPath: function (pathData:any) {
                        return pathData.path;
                    },
                });

                navg1.start();
                navg1.on('move', onMoveing);
                
                pathSimplifierIns.off('pathClick pointClick', pointClick)
            }

        }

        //实时数据 跟新路劲 更新图标
        function doExpand(position:[]) {
            if (position.length) {
                var cursor = navg1.getCursor().clone(), //保存巡航器的位置
                    status = navg1.getNaviStatus();

                //替换第0项
                if (!data[0].path[0].length) {
                    data[0].path[0] = position
                } else {
                    data[0].path.push(position);
                }

                pathSimplifierIns.setData(data); //延展路径

                //重新建立一个巡航器
                navg1 = pathSimplifierIns.createPathNavigator(0, {
                    //loop: true, //循环播放
                    speed: 1000000, //巡航速度，单位千米/小时
                    pathNavigatorStyle: {
                        width: 32,
                        height: 32,
                        //使用图片
                        content: myPathSimplifier.Render.Canvas.getImageContent(props.icon)
                    }
                });

                navg1.on('move', onMoveing);

                if (status !== 'stop') {
                    navg1.start();
                }

                //恢复巡航器的位置
                if (cursor.idx >= 0) {
                    navg1.moveToPoint(cursor.idx, cursor.tail);
                }
            }

        }
        function onMoveing(e:any,info:any) {
           
            let index=info.dataItem.pointIndex
           
            let position = navg1.getPosition()
            context.emit('moveing', [position.lng, position.lat])
            if(props.model=='realTime'){

            }else{
                if(!props.position[historyIndex].icon)return
                //轨迹更换图标 
                if(historyIndex!=index){
                    historyIndex=index
                    let pathNavigatorStyle = navg1.getStyleOptions();
                    pathNavigatorStyle.content= myPathSimplifier.Render.Canvas.getImageContent(props.position[historyIndex].icon)
                     pathSimplifierIns.renderLater(200);
                   }
                
               
            }

        }
        function pointClick(e:any,info:any) {
            context.emit('pointClick', e,info)

        }
        /**
         * 监听实时定位数据的变化
         * 
         */
        function watchPosition(val:any) {
            if (!val[0]) return
            waitingJs(val)
        }
        /**
         * 循环等到js文件加载完成执行historyStart
         * @param val 
         */
        function waitingJs(val:any) {
            if (pathSimplifierIns) {//已加载完js文件
                if (props.model == 'realTime') {
                    //实时
                    if (!navg1) {//进行初始化
                        realTimestart()
                    } else {

                        doExpand(val)
                    }
                } else {
                    //轨迹
                    historyStart()
                }
            } else {
                //值已传入 但js文件未加载完成  
                setTimeout(() => {
                    if (props.model == 'realTime') {
                        // 实时
                        waitingJs(val)
                    } else {

                        //轨迹
                        waitingJs(null)
                    }
                }, 200);
            }
        }

        //清空
        function clearpathSimplifierIns(newval:any, oldval:any) {
            // if (pathSimplifierIns) {
            //    pathSimplifierIns.setData([])
            //   
            //    pathSimplifierIns.off('pathClick pointClick', pathOrpointClick)
            //    navg1.off('move', onMoveing);

            // }
            if (!oldval) return
            navg1 && navg1.destroy()
            navg1 = null
            if (props.model == 'realTime' && newval) {
                data[0].path = [props.position]
                initPathSimplifier()
            }



        }



        return () => h('div', { class: 'PathSimplifierIns' }, 'PathSimplifierIns')
    }
}