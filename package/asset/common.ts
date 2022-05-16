export  function Http({url,method='get',headers={},params={}}){
    let str = '?'
    for (const key in params) {
        str += key + '=' +params[key] + '&'
    }
   return  fetch(url+str, {
        method,
        headers
    }).then(response => {
        return response.json();
    })
}