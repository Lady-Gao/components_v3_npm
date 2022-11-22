

import { getCurrentInstance } from "vue";
const Http = getCurrentInstance()?.appContext.config.globalProperties.$Http
//车辆树接口
export function getHttpTreeData(params:any){
    return Http(params) 
}
// 车辆列表
export function getHttpListData(params:any){
    return Http(params) 
}
// 取消关注
export function deleteVehicleAttentionInfo(vehicleId:string){
    return Http({
        url: '/basic/vehicle/deleteVehicleAttentionInfo',
        params: {
            vehicleId
        },
        method:"DELETE"
    })
}
//关注车辆
export function insertVehicleAttentionInfo(params:{}){
    return  Http({
        url: '/basic/vehicle/insertVehicleAttentionInfo',
        params,
        method:"post"
    })
}
