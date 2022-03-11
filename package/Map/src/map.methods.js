export default class Gaode {
    constructor(map) {
        this.map = map;
        this.addMoveAnimation()
    }
    //平滑移动需要的插件
    addMoveAnimation(){
       AMap.plugin('AMap.MoveAnimation',res=>{
            console.log(res)
        })
    }
    /**
  *point坐标方法
  *
  * @param {object} point
  * @memberof gaodeMap
  */
    point(pointobj) {
        return new AMap.LngLat(pointobj.longitude || pointobj.lng || 0, pointobj.latitude || pointobj.lat || 0);
    }
    setCenter(position) {

        this.map.setCenter(position);
    }
    /**
   *设置经纬度为中心点，zoom是必要参数
   *
   * @param {object} point
   * @param {number} zoom 范围3-19
   * @memberof gaodeMap
   */
    setZoomAndCenter(point, zoom) {
        this.map.setZoomAndCenter(zoom || 17, point);
    }
    
    /**
     * 设置最佳视野
     * 第一个参数为空，表明用图上所有覆盖物 setFitview
     * 第二个参数为false, 非立即执行
     * 第三个参数设置上左下右的空白
     */
        setFitView(view=null){

            this.map.setFitView(view);
        }
  
    /**
     * 在地图上添加覆盖物
     * @param {object} overlay
     */
    addOverlay(overlay) {
        this.map.add(overlay);
        // this.map.panTo(point)
        return overlay
    }
    /**
     * 删除覆盖物
     * @param {*} overlay
     */
    removeOverlay(overlay) {
        this.map.remove(overlay);
    }
    /**
     * 清空地图上所有覆盖物
     */
    removerAllOverlay() {
        this.map.clearMap();
    }
    /**
     * 创建线
     * @param {} style 
     * @returns 
     */
    creatLine(style={}) {
           //平滑通过后线条的样式
           let passedPolyline = new AMap.Polyline({
            map: this.map,
            showDir:true,
            strokeColor: "#28F",  //线颜色
            // strokeColor: "#AF5",  //线颜色 默认绿色
            strokeWeight: 6,      //线宽
            ...style
        });
        return passedPolyline
    }
    /**
     * 创建marker
     */
    creatMarker(Options = {}) {
        
        let point=Options.position[0]?Options.position:this.point(Options.position)
       let marker = new AMap.Marker({
            position: point,
            topWhenClick: true,
            icon: Options.icon||null,
            offset: new AMap.Pixel(-13, -26),
            ...Options
        });
    
        return marker
    }

      /**
    * 添加数组线line
    * @param {object} pathArr [[],[]]
    * @param {object} style 
    */
       addLineArr(pathArr, style={}) {
        let polyline = this.creatLine(style)
        polyline.setPath(pathArr)
        this.setZoomAndCenter(pathArr[0])
        return polyline
    }
    startPlay(marker,lineArr,Speed) {
    //    var marker = new AMap.Marker({
    //             map: this.map,
    //             position: lineArr[0],
    //             icon: "https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png",
    //             offset: new AMap.Pixel(-13, -26),
    //         });
    //         this.map.add(marker)
        //  this.setZoomAndCenter(lineArr[0])
        // AMap.plugin('AMap.MoveAnimation', (res) => {
            // JSAPI2.0 moveAlong 示例
              // 绘制轨迹
            // 绘制轨迹
           // this.map.panTo(lineArr[0].position)
         
            this.moverAlong(marker,lineArr,Speed)
            // marker.on('moving', (e) => {
            //     passedPolyline.setPath(e.passedPath);
            // });
           
        // })
        return marker
    }
    moverAlong(marker,lineArr,Speed){
        marker.moveAlong(lineArr,{
            // 每一段的时长
            duration: Speed,
            // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
            autoRotation: true,
    })
    }
    //移动定位
    moveTo(marker,lnglat,speed=500){
        marker.moveTo(lnglat,{
                duration: speed,
                delay: 500,
        })
     
    }
    /**
     * 暂停播放
     * @param {*} marker 
     */
     pauseMove(marker){
        marker.pauseMove();
    }
    /**
     * 停止播放
     * @param {*} marker 
     */
    stopMove(marker){
        marker.stopMove();
    }
    /**
     * 继续播放
     * @param {*} marker 
     */
     resumeMove(marker){
        marker.resumeMove(marker);
    }
}