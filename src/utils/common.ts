
//数组去重，返回新的格式数组 
export function  addFilters(data:{}[],key:string){
    let arrays = new Set(data.map(item=>item[key]))
   let  filterArr =   Array.from(arrays)
   let filters=  filterArr.map(item=>{return {text:item,value:item}})
   return filters
}