import { reactive, provide, onMounted, nextTick, h, inject, ref, watch } from 'vue';

const getMapScript = function (name, cdn) {
    if (!window[name]) {
        window[name] = {};
        window[name]._preloader = new Promise(function (resolve, reject) {
            window._initMap = function () {
                resolve(window[name]);
                //window.document.body.removeChild($script)
                window[name]._preloader = null;
                window._initMap = null;
            };
            var $script = document.createElement('script');
            $script.type = 'text/javascript';
            window.document.body.appendChild($script);
            $script.src = cdn + '&callback=_initMap';
        });
        return window[name]._preloader;
    }
    else if (!window[name]._preloader) {
        return Promise.resolve(window[name]);
    }
    else {
        return window[name]._preloader;
    }
};
/**
 * 异步加载远程js脚本
 * @param {String} name: 全局变量名
 * @param {URL} cdn: 远程cdn地址
 * @return {Promise} 返回一个promise
 */
const asyncDownloadScript = function (name, cdn) {
    // window == window   window.baidu = {_preloader: null}
    if (!window[name]) {
        window[name] = {}; // window.baidu = {}
        // window.baidu._preloader = new promise
        window[name]._preloader = new Promise((resolve, reject) => {
            const $script = document.createElement("script");
            $script.src = cdn;
            window.document.body.appendChild($script); // window.document.body.appendCHild
            // 高级浏览器  11  edge chrome fix opera
            $script.onload = function () {
                resolve(window[name]);
                // wind.baidu._preloader = null 释放内存
                window[name]._preloader = null;
            };
        });
        return window[name]._preloader;
    }
    else if (!window[name]._preloader) {
        return Promise.resolve(window[name]);
    }
    else {
        return window[name]._preloader;
    }
};

/**
 * author: gaoyanan
 * Amap加载完成之后，加载slot各个组件，组件内部获取地图对象和地图操作方法
 */
var Map = {
    name: 'Map',
    props: {
        //地图名称 高德AMap
        name: {
            type: String,
            default() { return 'AMap'; }
        },
        //地图级别  值越大 城市约清晰
        zoom: {
            type: Number,
            default() {
                return 13;
            }
        },
        //中心点坐标
        center: {
            type: Array,
            default() {
                return [116.397428, 39.90923];
            }
        },
        //使用地图视图
        viewMode: {
            type: String,
            default: '2D'
        },
        //在同一个页面使用  需要加id区分 不然只会初始化一个
        id: {
            type: String,
            default: () => "mapDom" + Math.random() * 1001
        },
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    setup(props, { attrs, slots, emit, expose, }) {
        const storeData = reactive({
            map: {},
            isReady: false, //地图对象是否加载完成
        });
        provide('storeData', storeData);
        onMounted(() => {
            nextTick(() => {
                needDom();
            });
            function needDom() {
                let dom = document.getElementById(props.id);
                if (dom) {
                    MapScript();
                }
                else {
                    setTimeout(() => {
                        needDom();
                    }, 50);
                }
            }
        });
        //根据地图名称加载对应的js文件
        function MapScript() {
            let url = '';
            switch (props.name) {
                case 'AMap':
                    url = 'https://webapi.amap.com/maps?v=2.1Beta&key=966a1cec27bf619fc0b3d8683e8f4c01&plugin=AMap.MarkerCluster';
                    break;
            }
            getMapScript(props.name, url)
                .then((AMap) => {
                mapInitial(AMap);
            });
        }
        //地图初始化
        function mapInitial(AMap) {
            storeData.map = new AMap.Map(props.id, {
                zoom: props.zoom,
                center: props.center,
                viewMode: props.viewMode,
                ...props.options
            });
            // storeData.map.mapId=props.id new Gaode(storeData.map)
            storeData.isReady = true;
        }
        function clearMap() {
            storeData.map.clearMap();
        }
        //根据地图上添加的覆盖物分布情况，自动缩放地图到合适的视野级别
        function setFitView() {
            storeData.map.setFitView();
        }
        function setCenter(lnglat, flag = true) {
            storeData.map.setCenter(lnglat, flag);
        }
        expose({ storeData, clearMap, setFitView, setCenter });
        return () => h('div', {
            class: 'Map',
            id: props.id,
            style: {
                height: '500px'
            },
        }, h('div', {
            class: 'Map_slots',
        }, storeData.isReady ? (slots.default ? slots.default() : '') : ''));
    }
};

var Marker = {
    name: 'Marker',
    props: {
        //[116.478935, 39.997761]
        //点标记在地图上显示的位置
        position: {
            type: Array,
            default() {
                return [];
            }
        },
        size: {
            type: Array,
            default() {
                return [32, 32];
            }
        },
        id: null,
        //点标记中显示的图标
        Icon: {
            type: String || null,
            default: null
        },
        //是否使用平滑移动
        usemoveTransform: {
            type: Boolean,
            default() {
                return false;
            }
        },
        offset: {
            type: Array,
            default() {
                return [-13, 0];
            }
        }
        //是否拖尾
        // drawLine: {
        //     type: Boolean,
        //     default() {
        //         return false
        //     }
        // },
        //平滑速度
        // moveSpeed: {
        //     type: Number,
        //     default() {
        //         return 1000
        //     }
        // },
        // Editor: null,//function
        //初始化就加载显示到地图上
        // intoMap: {
        //     type: Boolean,
        //     default() {
        //         return true
        //     }
        // },
        //是否删除
        // remove: {
        //     type: Boolean,
        //     default() {
        //         return false
        //     }
        // },
    },
    emits: ['click', 'moving'],
    setup(props, context) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const myMarker = ref(); //marker对象
        initMakrt();
        watch(() => props.position, watchPostion, { immediate: true, deep: true });
        watch(() => props.Icon, watchIcon, { immediate: true, deep: true });
        /**
         * 初始化
         */
        function initMakrt() {
            if (!props.position.length)
                return;
            myMarker.value = new window.AMap.Marker({
                map: map,
                position: props.position,
                offset: props.offset,
                // icon:props.Icon,
                size: props.size,
                // anchor: anchor[i], //设置锚点
                zIndex: 0
            });
            myMarker.value.setIcon(props.Icon);
            // props.position&& myMarker.setPosition(props.position)
            myMarker.value.id = props.id;
            //     if(props.intoMap){
            //         addOverlay()
            //    }
            myMarker.value.on('click', onClick);
            myMarker.value.on('moving', onMoving);
        }
        /**
         * 创建marker
         * @param position options
         * @returns
         */
        // function creatMarker(options) {
        //       myMarker= mapMethods.creatMarker(options)
        //         return myMarker
        // }
        /**
         * 将marker添加在地图上
         */
        //    function addOverlay(){
        //     //   mapMethods.addOverlay(myMarker)
        //     myMarker.setMap(map);
        //     //       map.add(myMarker);
        //          return myMarker
        //     }
        /**
       * 监听position
       * @param newVal  Array 更新值
       * @param oldVal  Array 旧值
       * 当定位更新，有marker就更新定位，没有marker就创建marker
       */
        function watchPostion(newVal) {
            if (!myMarker.value) {
                return initMakrt();
            }
            if (!newVal.length) {
                myMarker.value.setMap(null);
                // return removeMarker()
            }
            else {
                myMarker.value.setMap(map);
                setPosition(newVal);
            }
        }
        /**
       * 监听Icon
       * @param newVal  Array 更新值
       * @param oldVal  Array 旧值
       * 当图片更新，有marker就更新 不显示图片不能穿空或者null  不识别？建议传‘null'
       */
        function watchIcon(newVal, oldVal) {
            if (!myMarker.value)
                return;
            if (newVal != oldVal) {
                myMarker.value.setIcon(newVal);
            }
        }
        /**
         * 更新marker定位
         * @param point  Array 新位置信息
         */
        function setPosition(point, speed = 1000) {
            // 用平滑的方式移动还是跳点移动
            if (props.usemoveTransform) {
                //平滑移动
                myMarker.value.moveTo(point, {
                    duration: speed,
                    delay: 500,
                });
            }
            else {
                //跳点
                myMarker.value.setPosition(point);
                // mapMethods.setFitView(myMarker)
            }
            myMarker.value.setMap(map);
        }
        /**
         * 移除marker
         */
        function removeMarker() {
            if (myMarker.value) {
                myMarker.value.off('click', onClick);
                myMarker.value.off('moving', onMoving);
                map.remove(myMarker.value);
                myMarker.value = null;
            }
        }
        /**
         * marker点击事件
         * @param e
         */
        function onClick(e) {
            context.emit('click', {
                // e,
                id: props.id,
                lnglat: props.position,
            });
        }
        function onMoving(e) {
            context.emit('moving', {
                id: props.id,
                lnglat: e.target._position,
            });
        }
        //地图上树后 拿到数据
        nextTick(() => {
        });
        return {
            removeMarker,
            myMarker
        };
    },
    render() {
        return;
        //     return () => h('div', { class: 'Marker' })
    }
};

var Liner = {
    name: 'Liner',
    props: {
        //路径数组 [[],[]]
        path: {
            type: Array,
            default() {
                return [];
            }
        },
        //线条的属性配置
        options: {
            type: Object,
            default() {
                return {
                    borderWeight: 2,
                    strokeColor: "#28F",
                    strokeWeight: 6,
                    strokeOpacity: 0.8, //线透明度
                };
            }
        },
    },
    setup(props) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const myLiner = ref(); //liner对象
        initLiner();
        watch(() => props.path, watchPath, { immediate: true, deep: true });
        function initLiner() {
            myLiner.value = new window.AMap.Polyline({
                map: map,
                ...props.options,
                zIndex: 1
            });
            myLiner.value.on('click', linerClick);
        }
        function watchPath(val) {
            if (!myLiner.value) {
                initLiner();
                setPath();
            }
            if (val.length) {
                setPath();
            }
            else {
                myLiner.value.setMap(null);
            }
        }
        //设置路线
        function setPath() {
            myLiner.value.setPath(props.path);
            myLiner.value.setMap(map);
        }
        function linerClick(val, e) {
        }
        /**
         * 移除marker
         */
        function removeLiner() {
            if (myLiner.value) {
                myLiner.value.off('click', linerClick);
                map.remove(myLiner.value);
                myLiner.value = null;
            }
        }
        return {
            removeLiner,
            myLiner
        };
    },
    render() {
        return;
        // return () => h('div', { class: 'Liner' }, 'Liner')
    }
};

/**
 * 信息弹框组件
 */
var InfoWindow = {
    name: 'InfoWindow',
    props: {
        position: {
            type: Array || Object,
        },
        content: null,
    },
    emits: ['close'],
    setup(props, { emit, expose }) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const InfoWindow = ref(); //marker对象
        initInfoWindow();
        onMounted(() => {
        });
        watch(() => props.position, watchPostion, { immediate: true, deep: true });
        watch(() => props.content, watchContent, { immediate: true, deep: true });
        function initInfoWindow() {
            InfoWindow.value = new window.AMap.InfoWindow({
                offset: new window.AMap.Pixel(0, -30),
                // autoMove: true,
            });
            InfoWindow.value.id = props.id;
            InfoWindow.value.on('close', onclose);
        }
        //设置图片  定位
        function open() {
            // setContent()
            console.log(props.position, 'open');
            InfoWindow.value.open(map, props.position);
        }
        /**
         * 1.props.position有值  代表点击信息框上的’关闭‘，触发的事件
         * 2.props.position 没值 代表InfoWindow.close()手动调用
         */
        function onclose() {
            console.log('onclose');
            if (props.position) {
                emit('close');
            }
            else {
                console.log(props.position, 'onclose手动调用');
            }
        }
        function setContent() {
            InfoWindow.value.setContent(props.content);
        }
        function setPosition(val) {
            setContent();
            InfoWindow.value.setPosition(val);
        }
        /**
         * 定位有更新就更新定位，没有数据则关闭infowindow
         * @param point
         */
        function watchPostion(point) {
            InfoWindow.value.setMap(map);
            if (InfoWindow.value && point) {
                //打开状态下 更新定位
                if (InfoWindow.value.getIsOpen()) {
                    setPosition(point);
                }
            }
            else {
                InfoWindow.value.close();
            }
        }
        function close() {
            InfoWindow.value.close();
        }
        function watchContent(text) {
            InfoWindow.value.setContent(text);
        }
        return {
            close, open
        };
    },
    render() {
        return;
        //return () => h('div',{class:'InfoWindow'},'InfoWindow')
    }
};

/**
 * MouseTool:
 * marker 点
 * polyline  折线
 * polygon 多边形
 * rectangle 矩形
 * circle 圆
 *
 *
 */
var MouseTool = {
    name: 'MouseTool',
    props: {
        type: {
            type: String,
            default: 'marker'
        },
    },
    emits: ['draw'],
    setup(props, context) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const mouseTool = ref(); //绘制对象
        const overlays = ref([{}]);
        map.plugin(["AMap.MouseTool"], function () {
            initMouseTool();
        });
        watch(() => props.type, watchType, { immediate: true, deep: true });
        function initMouseTool() {
            mouseTool.value = new window.AMap.MouseTool(map);
        }
        /**
         * 鼠标工具绘制覆盖物结束时触发此事件
         * 结束绘制
         * @param e
         */
        function draw(e) {
            overlays.value.push(e.obj);
            context.emit('draw', { obj: e.obj, overlays: overlays.value });
        }
        function remove() {
            map.remove(overlays.value);
        }
        //结束绘制 true:清除覆盖物，false:不清除覆盖物
        function close(flag = true) {
            mouseTool.value.close(flag);
        }
        /**
         * 监听类型变化
         * @param val
         */
        function watchType(val) {
            // close()
            if (val && val != mouseTool.value) {
                mouseTool.value[val]();
                mouseTool.value.on('draw', draw);
            }
        }
        return {
            remove,
            close
        };
    },
    render() {
        return () => h('div', { class: 'MouseTool' }, 'MouseTool');
    }
};

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
var PathSimplifierIns = {
    name: 'PathSimplifierIns',
    props: {
        // 巡航方式
        model: {
            type: String,
            default() {
                return 'realTime'; // realTime/ history
            }
        },
        icon: {
            type: String || null,
            default: ''
        },
        // 巡航器更换标识，id改变，将重置巡航器
        id: null,
        //定位信息
        position: {
            type: Array,
            default() {
                return [];
            }
        },
        speed: {
            type: Number,
            default: 0
        }
    },
    emits: ['moveing', 'pointClick'],
    setup(props, context) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const pathSimplifierIns = ref(); //pathSimplifierIns对象
        pathSimplifierIns.value = null;
        const myPathSimplifier = ref();
        const emptyLineStyle = {
            lineWidth: 0,
            fillStyle: null,
            strokeStyle: null,
            borderStyle: null
        };
        const navg1 = ref();
        const data = ref([{
                name: '动态路线',
                path: [[]]
            }]);
        const historyIndex = ref(0); //轨迹当前的点记录
        asyncDownloadScript('AMapUI', 'https://webapi.amap.com/ui/1.1/main.js?v=1.1.1').then((AMapUI) => {
            init(AMapUI);
        });
        onMounted(() => {
        });
        watch(() => props.id, clearpathSimplifierIns, { immediate: true, deep: true });
        watch(() => props.position, watchPosition, { immediate: true, deep: true });
        function init(AMapUI) {
            AMapUI.load(['ui/misc/PathSimplifier'], function (PathSimplifier) {
                if (!PathSimplifier.supportCanvas) {
                    alert('当前环境不支持 Canvas！');
                    return;
                }
                myPathSimplifier.value = PathSimplifier;
                initPathSimplifier();
            });
        }
        //初始化pathSimplifierIns
        function initPathSimplifier() {
            pathSimplifierIns.value = new myPathSimplifier.value({
                zIndex: 100,
                autoSetFitView: false,
                map: map,
                pathNavigatorStyle: {
                    width: 32,
                    height: 32,
                    //使用图片
                    content: myPathSimplifier.value.Render.Canvas.getImageContent(props.icon)
                },
                getPath: function (pathData) {
                    // console.log(2,'getPath')//实时才调用
                    return pathData.path;
                },
                getHoverTitle: function (pathData) {
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
            data.value[0].path[0] = props.position;
            pathSimplifierIns.value.setData(data.value);
            navg1.value = pathSimplifierIns.value.createPathNavigator(0, {
                speed: props.speed || 1000000,
                loop: false,
                pathNavigatorStyle: {
                    width: 32,
                    height: 32,
                    //使用图片
                    content: myPathSimplifier.value.Render.Canvas.getImageContent(props.icon)
                }
            });
            navg1.value.start();
        }
        //轨迹路劲 设置一次
        function historyStart() {
            let point = [];
            //判断传入的数据类别
            //[{point:[],icon}]
            if (props.position[0].point) {
                point = props.position.map((item) => {
                    return item.point;
                });
            }
            //[[],[]]
            if (props.position[0].length) {
                point = props.position;
            }
            console.log(point, 'historyStart');
            if (point[0]) {
                let icon = props.position[0].icon || props.icon;
                console.log(props.position, 'historyStart');
                //设置数据
                data.value[0].path = point;
                pathSimplifierIns.value.setData(data.value);
                //对第一条线路（即索引 0）创建一个巡航器
                navg1.value = pathSimplifierIns.value.createPathNavigator(0, {
                    loop: false,
                    speed: props.speed || 1000000,
                    pathNavigatorStyle: {
                        width: 32,
                        height: 32,
                        //使用图片
                        content: myPathSimplifier.value.Render.Canvas.getImageContent(icon)
                    },
                    getPath: function (pathData) {
                        return pathData.path;
                    },
                });
                navg1.value.start();
                navg1.value.on('move', onMoveing);
                pathSimplifierIns.value.off('pathClick pointClick', pointClick);
            }
        }
        //实时数据 跟新路劲 更新图标
        function doExpand(position) {
            if (position.length) {
                var cursor = navg1.value.getCursor().clone(), //保存巡航器的位置
                status = navg1.value.getNaviStatus();
                //替换第0项
                if (!data.value[0].path[0].length) {
                    data.value[0].path[0] = position;
                }
                else {
                    data.value[0].path.push(position);
                }
                pathSimplifierIns.value.setData(data.value); //延展路径
                //重新建立一个巡航器
                navg1.value = pathSimplifierIns.value.createPathNavigator(0, {
                    //loop: true, //循环播放
                    speed: props.speed || 1000000,
                    pathNavigatorStyle: {
                        width: 32,
                        height: 32,
                        //使用图片
                        content: myPathSimplifier.value.Render.Canvas.getImageContent(props.icon)
                    }
                });
                navg1.value.on('move', onMoveing);
                if (status !== 'stop') {
                    navg1.value.start();
                }
                //恢复巡航器的位置
                if (cursor.idx >= 0) {
                    navg1.value.moveToPoint(cursor.idx, cursor.tail);
                }
            }
        }
        function onMoveing(e, info) {
            let index = info.dataItem.pointIndex;
            let position = navg1.value.getPosition();
            context.emit('moveing', [position.lng, position.lat]);
            if (props.model == 'realTime') ;
            else {
                if (!props.position[historyIndex.value].icon)
                    return;
                //轨迹更换图标 
                if (historyIndex.value != index) {
                    historyIndex.value = index;
                    let pathNavigatorStyle = navg1.value.getStyleOptions();
                    pathNavigatorStyle.content = myPathSimplifier.value.Render.Canvas.getImageContent(props.position[historyIndex.value].icon);
                    pathSimplifierIns.value.renderLater(200);
                }
            }
        }
        function pointClick(e, info) {
            context.emit('pointClick', e, info);
        }
        /**
         * 监听实时定位数据的变化
         *
         */
        function watchPosition(val) {
            if (!val[0])
                return;
            waitingJs(val);
        }
        /**
         * 循环等到js文件加载完成执行historyStart
         * @param val
         */
        function waitingJs(val) {
            if (pathSimplifierIns.value) { //已加载完js文件
                if (props.model == 'realTime') {
                    //实时
                    if (!navg1.value) { //进行初始化
                        realTimestart();
                    }
                    else {
                        doExpand(val);
                    }
                }
            }
            else {
                //值已传入 但js文件未加载完成  
                setTimeout(() => {
                    if (props.model == 'realTime') {
                        // 实时
                        waitingJs(val);
                    }
                    else {
                        //轨迹
                        waitingJs(null);
                    }
                }, 200);
            }
        }
        //清空
        function clearpathSimplifierIns(newval, oldval) {
            // if (pathSimplifierIns) {
            //    pathSimplifierIns.setData([])
            //   
            //    pathSimplifierIns.off('pathClick pointClick', pathOrpointClick)
            //    navg1.off('move', onMoveing);
            // }
            if (!oldval)
                return;
            navg1.value && destroy();
            navg1.value = null;
            if (props.model == 'realTime' && newval) {
                data.value[0].path = [props.position];
                initPathSimplifier();
            }
        }
        function start() {
            historyStart();
        }
        function pause() {
            navg1.value.pause();
        }
        function resume() {
            navg1.value.resume();
        }
        function stop() {
            navg1.value.stop();
        }
        //销毁
        function destroy() {
            navg1.value.destroy();
        }
        return {
            start,
            pause,
            resume,
            stop,
            destroy
        };
    },
    render() {
        return () => h('div', { class: 'MoveAnimation' }, 'MoveAnimation');
    }
};

/**
 * 平滑轨迹移动
 */
var MoveAnimation = {
    name: 'MoveAnimation',
    props: {
        // 轨迹路径
        lineArr: {
            type: Array,
            default() {
                return [];
            }
        },
        Icon: {
            type: String,
            default: null
        },
        size: {
            type: Array,
            default() {
                return [50, 50];
            }
        },
        offset: {
            type: Array,
            default() {
                return [-13, 0];
            }
        }
        // id:''
    },
    emits: ['moving', 'pointClick'],
    setup(props, context) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const MoveAnimationMarker = ref();
        const passedPolyline = ref();
        const lineArr = ref(props.lineArr);
        watch(() => props.lineArr, watchlineArr, { immediate: true, deep: true });
        watch(() => props.Icon, watchIcon, { immediate: false, deep: true });
        // 绘制轨迹
        function watchlineArr(val) {
            lineArr.value = props.lineArr;
            val[0] && init();
        }
        function watchIcon(val) {
            MoveAnimationMarker.value && MoveAnimationMarker.value.setIcon(val);
        }
        function init() {
            window.AMap.plugin('AMap.MoveAnimation', function () {
                MoveAnimationMarker.value && map.remove(MoveAnimationMarker.value);
                MoveAnimationMarker.value = new window.AMap.Marker({
                    map,
                    // icon:props.Icon,
                    // size: new window.AMap.Size(props.size[0], props.size[1]), 
                    position: lineArr.value[0],
                    offset: props.offset,
                    zIndex: 13
                });
                MoveAnimationMarker.value.setIcon(props.Icon);
                // MoveAnimationMarker.value.setMap( map)
                passedPolyline.value = new window.AMap.Polyline({
                    map: map,
                    strokeColor: "#AF5",
                    strokeWeight: 6,
                    zIndex: 10,
                    strokeOpacity: 0.8, //线透明度
                });
                map.setFitView();
                MoveAnimationMarker.value.on('moving', onMoveing);
                MoveAnimationMarker.value.on('click', onClick);
                MoveAnimationMarker.value.on('movealong', onmoveAlong);
            });
        }
        function onClick(e) {
            context.emit('pointClick', e);
        }
        function onMoveing(e) {
            passedPolyline.value.setPath(e.passedPath);
            // map.setCenter(e.target.getPosition(),true)
            context.emit('moving', e);
        }
        function onmoveAlong() {
            console.log('onmoveAlong');
        }
        // 开始动画
        function startAnimation(opstions) {
            stopAnimation();
            console.log(lineArr.value.length, 'lineArr');
            MoveAnimationMarker.value.moveAlong(lineArr.value, {
                // 每一段的时长
                duration: 500,
                // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
                autoRotation: true,
                ...opstions,
            });
        }
        // 暂停动画
        function pauseAnimation() {
            MoveAnimationMarker.value.pauseMove();
        }
        // 继续动画
        function resumeAnimation() {
            MoveAnimationMarker.value.resumeMove();
        }
        // 停止动画
        function stopAnimation() {
            console.log('停止动画');
            MoveAnimationMarker.value && MoveAnimationMarker.value.stopMove();
        }
        return {
            lineArr,
            startAnimation,
            pauseAnimation,
            resumeAnimation,
            stopAnimation,
            init
        };
    },
    render() {
        return;
        //      return () => h('div', { class: 'MoveAnimation' }, 'MoveAnimation')
    }
};

/**
 * edit:
 * marker 点
 * PolyEditor  折线
 * PolyEditor 多边形
 * RectangleEditor 矩形
 * CircleEditor 圆
 *
 */
var EditPlugin = {
    name: 'EditPlugin',
    props: {
        type: {
            type: String,
            default: ''
        },
        //是否开启 编辑模式
        edit: {
            type: Boolean,
            default: false
        },
        overlayOptions: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    emits: ['end'],
    setup(props, contex) {
        const storeData = inject('storeData');
        const { map } = storeData;
        const editType = ref('');
        const myoverlay = ref();
        const myoverlayEditor = ref(); //编辑对象
        watch(() => props.edit, watchEdit, { immediate: true, deep: true });
        watch(() => props.type, watchType, { immediate: true, deep: true });
        function createOverlay() {
            if (!editType.value)
                return;
            let otherOptions = {};
            //矩形 需要计算周边
            if (props.type == 'rectangle') {
                otherOptions.bounds = new window.AMap.Bounds(props.overlayOptions.southWest, props.overlayOptions.northEast);
            }
            myoverlay.value = new window.AMap[editType.value]({
                ...props.overlayOptions,
                ...otherOptions
            });
            myoverlay.value.setMap(map);
            //先创建对象，再编辑对象
            if (props.edit) {
                EditPlugin();
            }
        }
        function EditPlugin() {
            if (!editType.value)
                return;
            // //点 进入编辑状态
            if (props.type == 'marker') {
                return myoverlay.value.setDraggable(true);
            }
            map.plugin(["AMap." + editType.value + "Editor"], function () {
                myoverlayEditor.value = new window.AMap[editType.value + "Editor"](map, myoverlay.value);
                // 开启编辑模式
                myoverlayEditor.value.open();
                // myoverlayEditor.on('adjust', function(event:any) {
                //     console.log('触发事件： adjust',event)
                // })
                myoverlayEditor.value.on('end', endCallback);
            });
        }
        //结束编辑
        function endCallback(event) {
            contex.emit('end', event);
        }
        function watchEdit(val) {
            if (!props.type)
                return;
            if (val) { //开启编辑状态
                if (!myoverlay.value) {
                    //先创建覆盖物
                    createOverlay();
                }
                else {
                    EditPlugin();
                }
            }
            else { //仅展示
                //    props.type&& clearMap()
                myoverlayEditor.value && myoverlayEditor.value.close();
            }
        }
        function watchType(val) {
            clearMap();
            if (val) {
                //marker=>Marker
                let str = val.split('');
                str[0] = str[0].toUpperCase();
                editType.value = str.join('');
                createOverlay();
            }
        }
        /**
         *  清除地图覆盖物和编辑对象
         */
        function clearMap() {
            if (myoverlay.value) {
                map.remove(myoverlay.value);
                myoverlay.value = null;
            }
            if (myoverlayEditor.value) {
                myoverlayEditor.value.close();
                myoverlayEditor.value.off('end', endCallback);
                myoverlayEditor.value = null;
            }
        }
    },
    render() {
        return () => h('div', { class: 'EditPlugin' }, 'EditPlugin');
    }
};

// https://monstergao.gitee.io/cv_amapv3/
const modules = {
    Map,
    Marker,
    Liner,
    InfoWindow,
    MouseTool,
    PathSimplifierIns,
    MoveAnimation,
    EditPlugin,
};
const install = function (app) {
    for (var key in modules) {
        app.component(key, modules[key]);
    }
};
let moduleComponent = {
    version: '0.0.1',
    install,
    ...modules
};

export { moduleComponent as default };
