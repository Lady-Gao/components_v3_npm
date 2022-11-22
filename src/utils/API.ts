import { getCurrentInstance } from "vue";
const Http = getCurrentInstance()?.appContext.config.globalProperties.$Http
//报警历史查询表格接口
export function findAlarmPolymerizationInfoList (params:{}){
    return  Http({
        url: '/gps/alarmDispose/findAlarmPolymerizationInfoList',
        params,
        method:"get"
    })
}

export function findAlarmInfoDetails (params:{}){
    return  Http(
        {
        url: '/gps/alarmDispose/findAlarmInfoDetails',
        params,
        method:"get"
    })
}