import{reactive as e,provide as t,h as o,inject as n,ref as a,watch as i,nextTick as l,onMounted as r,openBlock as u,createElementBlock as s}from"vue";var p={name:"Map",props:{name:{type:String,default:()=>"AMap"},zoom:{type:Number,default:()=>13},center:{type:Array,default:()=>[116.397428,39.90923]},viewMode:{type:String,default:"2D"},id:{type:String,default:"MapDom"}},setup(n,a){const i=e({map:{},isReady:!1});return t("storeData",i),function(){let e="";if("AMap"===n.name)e="https://webapi.amap.com/maps?v=2.1Beta&key=966a1cec27bf619fc0b3d8683e8f4c01&plugin=AMap.MarkerCluster";(t=n.name,o=e,window[t]?window[t]._preloader?window[t]._preloader:Promise.resolve(window[t]):(window[t]={},window[t]._preloader=new Promise((function(e,n){window._initMap=function(){e(window[t]),window[t]._preloader=null,window._initMap=null};var a=document.createElement("script");a.type="text/javascript",window.document.body.appendChild(a),a.src=o+"&callback=_initMap"})),window[t]._preloader)).then((e=>{!function(e){i.map=new e.Map(n.id,{zoom:n.zoom,center:n.center,viewMode:n.viewMode}),i.isReady=!0}(e)}));var t,o}(),console.log(a.slots,"contex.slots"),()=>o("div",{class:"Map",id:n.id,style:{height:"500px"}},o("div",{},i.isReady&&a.slots.default?a.slots.default():""))}},d={name:"Marker",props:{position:{type:Array,default:()=>[]},size:{type:Array,default:()=>[32,32]},id:null,Icon:{type:String||null,default:null},usemoveTransform:{type:Boolean,default:()=>!1}},emits:["click","moving"],setup(e,t){const o=n("storeData"),{map:r}=o,u=a();function s(){e.position.length&&(console.log(e.size,"initMakrt"),u.value=new window.AMap.Marker({map:r,position:e.position,icon:e.Icon,size:new window.AMap.Size(e.size[0],e.size[1])}),u.value.id=e.id,u.value.on("click",d),u.value.on("moving",v))}function p(){console.log("removeMarker"),u.value&&(u.value.off("click",d),u.value.off("moving",v),r.remove(u.value),u.value=null)}function d(o){t.emit("click",{id:e.id,lnglat:e.position})}function v(o){t.emit("moving",{id:e.id,lnglat:o.target._position})}return s(),i((()=>e.position),(function(t){if(!u.value)return s();if(!t.length)return p();!function(t,o=1e3){console.log(t,"setPosition"),e.usemoveTransform?u.value.moveTo(t,{duration:o,delay:500}):u.value.setPosition(t)}(t)}),{immediate:!0,deep:!0}),i((()=>e.Icon),(function(e,t){if(!u.value)return;e!=t&&u.value.setIcon(e)}),{immediate:!0,deep:!0}),l((()=>{})),{removeMarker:p,myMarker:u}},render:()=>()=>o("div",{class:"Marker"},"Marker")},v={name:"Liner",props:{path:{type:Array,default:()=>[]},options:{type:Object,default:()=>({borderWeight:2,strokeColor:"#28F"})}},setup(e){const t=n("storeData");console.log(t,"storeData");const{map:l}=t,r=a();function u(e,t){console.log(e,t,"val,e")}return r.value=new window.AMap.Polyline({map:l,...e.options}),r.value.on("click",u),i((()=>e.path),(function(t){t.length&&r.value.setPath(e.path)}),{immediate:!0,deep:!0}),()=>o("div",{class:"Liner"},"Liner")}},c={name:"InfoWindow",props:{position:{type:Array,default:()=>[]},content:null},emits:["close"],setup(e,t){const o=n("storeData"),{map:l}=o,u=a();function s(){e.position.length?t.emit("close"):console.log("手动调用")}function p(){u.value.setContent(e.content)}return u.value=new window.AMap.InfoWindow({offset:new window.AMap.Pixel(0,-30),autoMove:!0}),u.value.id=e.id,u.value.on("close",s),r((()=>{console.log("InfoWindow")})),i((()=>e.position),(function(t){u.value&&t.length&&(u.value.getIsOpen()?(o=t,p(),u.value.setPosition(o)):(p(),u.value.open(l,e.position)));var o}),{immediate:!0,deep:!0}),i((()=>e.content),(function(e){u.value.setContent(e)}),{immediate:!0,deep:!0}),{close:function(){u.value.close()}}},render:()=>()=>o("div",{class:"InfoWindow"},"InfoWindow")},m={name:"MouseTool",props:{type:{type:String,default:"marker"}},emits:["draw"],setup(e,t){const o=n("storeData"),{map:l}=o,r=a(),u=a([{}]);function s(o){console.log(e.type,o),u.value.push(o.obj),t.emit("draw",{obj:o.obj,overlays:u.value})}return l.plugin(["AMap.MouseTool"],(function(){r.value=new window.AMap.MouseTool(l)})),i((()=>e.type),(function(e){console.log(e,"watchType"),e&&e!=r.value&&(r.value[e](),r.value.on("draw",s))}),{immediate:!0,deep:!0}),{remove:function(){l.remove(u.value)},close:function(e=!0){r.value.close(e)}}},render:()=>()=>o("div",{class:"MouseTool"},"MouseTool")},f={name:"PathSimplifierIns",props:{model:{type:String,default:()=>"realTime"},icon:{type:String||null,default:""},id:null,position:{type:Array,default:()=>[]}},emits:["moveing","pointClick"],setup(e,t){const l=n("storeData");console.log(l,"storeData");const{map:u}=l,s=a();s.value=null;const p=a(),d={lineWidth:0,fillStyle:null,strokeStyle:null,borderStyle:null},v=a(),c=a([{name:"动态路线",path:[[]]}]),m=a(0);var f,w;function g(){s.value=new p.value({zIndex:100,autoSetFitView:!1,map:u,pathNavigatorStyle:{width:32,height:32,content:p.value.Render.Canvas.getImageContent(e.icon)},getPath:function(e){return e.path},getHoverTitle:function(e){return e.name+"，点数量"+e.path.length},renderOptions:"realTime"==e.model?{pathLineStyle:d,pathLineSelectedStyle:d,pathLineHoverStyle:d,keyPointStyle:d,startPointStyle:d,endPointStyle:d,keyPointHoverStyle:d,keyPointOnSelectedPathLineStyle:d}:{}})}function y(o,n){let a=n.dataItem.pointIndex,i=v.value.getPosition();if(t.emit("moveing",[i.lng,i.lat]),"realTime"==e.model);else{if(!e.position[m.value].icon)return;if(m.value!=a){m.value=a,v.value.getStyleOptions().content=p.value.Render.Canvas.getImageContent(e.position[m.value].icon),s.value.renderLater(200)}}}function h(e,o){t.emit("pointClick",e,o)}function M(t){s.value?"realTime"==e.model?v.value?function(t){if(t.length){var o=v.value.getCursor().clone(),n=v.value.getNaviStatus();c.value[0].path[0].length?c.value[0].path.push(t):c.value[0].path[0]=t,s.value.setData(c.value),v.value=s.value.createPathNavigator(0,{speed:1e6,pathNavigatorStyle:{width:32,height:32,content:p.value.Render.Canvas.getImageContent(e.icon)}}),v.value.on("move",y),"stop"!==n&&v.value.start(),o.idx>=0&&v.value.moveToPoint(o.idx,o.tail)}}(t):(c.value[0].path[0]=e.position,s.value.setData(c.value),v.value=s.value.createPathNavigator(0,{speed:1e6,loop:!1,pathNavigatorStyle:{width:32,height:32,content:p.value.Render.Canvas.getImageContent(e.icon)}}),v.value.start()):function(){let t=[];if(e.position[0].point&&(t=e.position.map((e=>e.point))),e.position[0].length&&(t=e.position),console.log(t,"historyStart"),t[0]){let o=e.position[0].icon||e.icon;console.log(e.position,"historyStart"),c.value[0].path=t,s.value.setData(c.value),v.value=s.value.createPathNavigator(0,{loop:!1,speed:1e6,pathNavigatorStyle:{width:32,height:32,content:p.value.Render.Canvas.getImageContent(o)},getPath:function(e){return e.path}}),v.value.start(),v.value.on("move",y),s.value.off("pathClick pointClick",h)}}():setTimeout((()=>{"realTime"==e.model?M(t):M(null)}),200)}return(f="AMapUI",w="https://webapi.amap.com/ui/1.1/main.js?v=1.1.1",window[f]?window[f]._preloader?window[f]._preloader:Promise.resolve(window[f]):(window[f]={},window[f]._preloader=new Promise(((e,t)=>{const o=document.createElement("script");o.src=w,window.document.body.appendChild(o),o.onload=function(){e(window[f]),window[f]._preloader=null}})),window[f]._preloader)).then((e=>{!function(e){e.load(["ui/misc/PathSimplifier"],(function(e){e.supportCanvas?(p.value=e,g()):alert("当前环境不支持 Canvas！")}))}(e)})),r((()=>{})),i((()=>e.id),(function(t,o){if(!o)return;v.value&&v.value.destroy(),v.value=null,"realTime"==e.model&&t&&(c.value[0].path=[e.position],g())}),{immediate:!0,deep:!0}),i((()=>e.position),(function(e){if(!e[0])return;M(e)}),{immediate:!0,deep:!0}),()=>o("div",{class:"PathSimplifierIns"},"PathSimplifierIns")}},w={name:"MoveAnimation",props:{lineArr:{type:Array,default:()=>[]}},setup(e,t){const o=n("storeData"),{map:l}=o,r=a();return i((()=>e.lineArr),(function(t){t[0]&&(console.log(e.lineArr[0],"props.lineArr"),window.AMap.plugin("AMap.MoveAnimation",(function(){r.value=new window.AMap.Marker({map:l,position:e.lineArr[0],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"});let t=new window.AMap.Polyline({map:l,strokeColor:"#AF5",strokeWeight:6});r.value.on("moving",(function(e){t.setPath(e.passedPath)})),l.setFitView()})))}),{immediate:!0,deep:!0}),{startAnimation:function(){r.value.moveAlong(e.lineArr,{duration:500,autoRotation:!0})},pauseAnimation:function(){r.value.pauseMove()},resumeAnimation:function(){r.value.resumeMove()},stopAnimation:function(){r.value.stopMove()}}},render:()=>()=>o("div",{class:"MoveAnimation"},"MoveAnimation")},g={name:"EditPlugin",props:{type:{type:String,default:""},edit:{type:Boolean,default:!1},overlayOptions:{type:Object,default:()=>({})}},emits:["end"],setup(e,t){const o=n("storeData"),{map:l}=o,r=a(""),u=a(),s=a();function p(){if(!r.value)return;console.log(r.value,"createOverlayeditType Circle");let t={};"rectangle"==e.type&&(t.bounds=new window.AMap.Bounds(e.overlayOptions.southWest,e.overlayOptions.northEast)),u.value=new window.AMap[r.value]({...e.overlayOptions,...t}),u.value.setMap(l),e.edit&&d()}function d(){if(r.value)return"marker"==e.type?u.value.setDraggable(!0):void l.plugin(["AMap."+r.value+"Editor"],(function(){s.value=new window.AMap[r.value+"Editor"](l,u.value),s.value.open(),s.value.on("end",v)}))}function v(e){t.emit("end",e)}console.log(e,"EditPlugin"),i((()=>e.edit),(function(t){if(console.log(t,"watchEdit"),!e.type)return;t?u.value?d():p():s.value&&s.value.close()}),{immediate:!0,deep:!0}),i((()=>e.type),(function(e){if(function(){u.value&&(l.remove(u.value),u.value=null,console.log(u.value,"myoverlay"));s.value&&(s.value.close(),s.value.off("end",v),s.value=null)}(),e){let t=e.split("");t[0]=t[0].toUpperCase(),r.value=t.join(""),p()}}),{immediate:!0,deep:!0})},render:()=>()=>o("div",{class:"EditPlugin"},"EditPlugin")};const y={class:"cv-tree",ref:"tree"};const h={render:function(e,t){return u(),s("div",y," ddd ",512)},__file:"package/components_Tree/tree/src/tree.vue"};console.log(h.name);const M={Map:p,Marker:d,Liner:v,InfoWindow:c,MouseTool:m,PathSimplifierIns:f,MoveAnimation:w,EditPlugin:g,tree:h};let A={version:"0.0.1",install:function(e){for(var t in M)e.component(t,M[t])},...M};export{A as default};