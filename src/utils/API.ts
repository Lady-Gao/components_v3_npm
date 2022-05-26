import {Http } from '../../package/util/http'

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