import { defineComponent, h, inject, onMounted, provide, ref } from "vue";
import { getMapScript } from '../../../src/utils/scriptHelper'
export default {
    name: 'DistrictCluster',
    props: {

    },
    setup(props, contex) {
        const storeData = inject<any>('storeData')
        const mySlot = contex.slots.default()
        const { map } = storeData
      
        //    getMapScript('AMapUI', 'https://webapi.amap.com/ui/1.1/main.js?v=1.1')

        onMounted(() => {

        })



        var points = [{ "lnglat": ["113.864691", "22.942327"] }, { "lnglat": ["113.370643", "22.938827"] },
        { "lnglat": ["112.985037", "23.15046"] }, { "lnglat": ["110.361899", "20.026695"] }, { "lnglat": ["121.434529", "31.215641"] },
        { "lnglat": ["120.682502", "28.011099"] }, { "lnglat": ["126.687123", "45.787618"] }, { "lnglat": ["103.970724", "30.397931"] },
        { "lnglat": ["117.212164", "31.831641"] }, { "lnglat": ["121.411101", "31.059407"] }, { "lnglat": ["104.137953", "30.784276"] },
        { "lnglat": ["120.499683", "30.042305"] }, { "lnglat": ["108.94686", "34.362975"] }, { "lnglat": ["112.873295", "22.920901"] },
        { "lnglat": ["113.373916", "23.086728"] }, { "lnglat": ["113.250159", "23.075847"] }, { "lnglat": ["116.675933", "39.986343"] },
        { "lnglat": ["120.75997", "31.734934"] }, { "lnglat": ["118.314741", "32.26999"] }, { "lnglat": ["111.723311", "34.771838"] },
       ]
        //             let markers=[]
        //             for (var i = 0; i < points.length; i += 1) {
        //                 markers.push(new AMap.Marker({
        //                     position: points[i]['lnglat'],
        //                     content: '<div style="background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
        //                     offset: new AMap.Pixel(-15, -15)
        //                 }))
        //             }
        //             console.log(mySlot,'mySlot')
        // console.log(markers,'markers')
        let cluster = new AMap.MarkerCluster(storeData.map, points, {
            gridSize: 0,
            // renderClusterMarker: _renderClusterMarker, // 自定义聚合点样式
            renderMarker: _renderMarker, // 自定义非聚合点样式
        });
        function _renderMarker(context) {
            let content = '<div ></div>';
            let offset = new AMap.Pixel(-9, -9);
            context.marker.setContent(content)
            context.marker.setOffset(offset)
            console.log(context, 'context')
        }


        return () => h('div', { class: 'DistrictCluster' }, mySlot)
    }
}