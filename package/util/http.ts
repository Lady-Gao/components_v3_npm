

export const baseUrl='http://web2.test.cvtsp.com/api'
export const token = localStorage.getItem('token')
export const  headers={
    token,
    'Authorization': 'Bearer ' + token
  }
export  function Http({url,method='get',params={}}){
    let str = '?'
    for (const key in params) {
        str += key + '=' +params[key] + '&'
    }
   
     
   return  fetch(baseUrl+url+str, {
        method,
        headers
    }).then(response => {
        return response.json();
    })
}


//车辆树接口
export function getHttpTreeData({url,method,params}){
    return Http({
        url,
        method,
        params
    }) 
}
// 车辆列表
export function getHttpListData({url,method,params}){
    return Http({
        url,
        method,
        params
    }) 
}
// 取消关注
export function deleteVehicleAttentionInfo(vehicleId){
    return Http({
        url: '/basic/vehicle/deleteVehicleAttentionInfo',
        params: {
            vehicleId
        },
        method:"DELETE"
    })
}
//关注车辆
export function insertVehicleAttentionInfo(params){
    return  Http({
        url: '/basic/vehicle/insertVehicleAttentionInfo',
        params,
        method:"post"
    })
}