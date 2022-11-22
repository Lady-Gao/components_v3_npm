
 // @ts-nocheck # 忽略全文
 import Config from '@Config'//引入公用文件
export const baseUrl=Config.host
export const token = window.localStorage.getItem('token')

export const  headers:{token:any,Authorization:string}={
    token,
    'Authorization': 'Bearer ' + token
  }
export  function Http({url='',method='get',params={}}){
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
export default Http