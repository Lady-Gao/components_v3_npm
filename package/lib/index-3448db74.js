import{reactive as e,provide as t,h as n,inject as o,ref as a,watch as i,nextTick as l,onMounted as r,defineComponent as u,openBlock as c,createElementBlock as d,createElementVNode as s,resolveComponent as p,normalizeClass as f,createCommentVNode as v,createVNode as m,withCtx as h,withDirectives as y,vShow as g}from"vue";var w={name:"Map",props:{name:{type:String,default:()=>"AMap"},zoom:{type:Number,default:()=>13},center:{type:Array,default:()=>[116.397428,39.90923]},viewMode:{type:String,default:"2D"},id:{type:String,default:"MapDom"}},setup(o,a){const i=e({map:{},isReady:!1});return t("storeData",i),function(){let e="";if("AMap"===o.name)e="https://webapi.amap.com/maps?v=2.1Beta&key=966a1cec27bf619fc0b3d8683e8f4c01&plugin=AMap.MarkerCluster";(t=o.name,n=e,window[t]?window[t]._preloader?window[t]._preloader:Promise.resolve(window[t]):(window[t]={},window[t]._preloader=new Promise((function(e,o){window._initMap=function(){e(window[t]),window[t]._preloader=null,window._initMap=null};var a=document.createElement("script");a.type="text/javascript",window.document.body.appendChild(a),a.src=n+"&callback=_initMap"})),window[t]._preloader)).then((e=>{!function(e){i.map=new e.Map(o.id,{zoom:o.zoom,center:o.center,viewMode:o.viewMode}),i.isReady=!0}(e)}));var t,n}(),console.log(a.slots,"contex.slots"),()=>n("div",{class:"Map",id:o.id,style:{height:"500px"}},n("div",{},i.isReady&&a.slots.default?a.slots.default():""))}},k={name:"Marker",props:{position:{type:Array,default:()=>[]},size:{type:Array,default:()=>[32,32]},id:null,Icon:{type:String||null,default:null},usemoveTransform:{type:Boolean,default:()=>!1}},emits:["click","moving"],setup(e,t){const n=o("storeData"),{map:r}=n,u=a();function c(){e.position.length&&(console.log(e.size,"initMakrt"),u.value=new window.AMap.Marker({map:r,position:e.position,icon:e.Icon,size:new window.AMap.Size(e.size[0],e.size[1])}),u.value.id=e.id,u.value.on("click",s),u.value.on("moving",p))}function d(){console.log("removeMarker"),u.value&&(u.value.off("click",s),u.value.off("moving",p),r.remove(u.value),u.value=null)}function s(n){t.emit("click",{id:e.id,lnglat:e.position})}function p(n){t.emit("moving",{id:e.id,lnglat:n.target._position})}return c(),i((()=>e.position),(function(t){if(!u.value)return c();if(!t.length)return d();!function(t,n=1e3){console.log(t,"setPosition"),e.usemoveTransform?u.value.moveTo(t,{duration:n,delay:500}):u.value.setPosition(t)}(t)}),{immediate:!0,deep:!0}),i((()=>e.Icon),(function(e,t){if(!u.value)return;e!=t&&u.value.setIcon(e)}),{immediate:!0,deep:!0}),l((()=>{})),{removeMarker:d,myMarker:u}},render:()=>()=>n("div",{class:"Marker"},"Marker")},b={name:"Liner",props:{path:{type:Array,default:()=>[]},options:{type:Object,default:()=>({borderWeight:2,strokeColor:"#28F"})}},setup(e){const t=o("storeData");console.log(t,"storeData");const{map:l}=t,r=a();function u(e,t){console.log(e,t,"val,e")}return r.value=new window.AMap.Polyline({map:l,...e.options}),r.value.on("click",u),i((()=>e.path),(function(t){t.length&&r.value.setPath(e.path)}),{immediate:!0,deep:!0}),()=>n("div",{class:"Liner"},"Liner")}},_={name:"InfoWindow",props:{position:{type:Array,default:()=>[]},content:null},emits:["close"],setup(e,t){const n=o("storeData"),{map:l}=n,u=a();function c(){e.position.length?t.emit("close"):console.log("手动调用")}function d(){u.value.setContent(e.content)}return u.value=new window.AMap.InfoWindow({offset:new window.AMap.Pixel(0,-30),autoMove:!0}),u.value.id=e.id,u.value.on("close",c),r((()=>{console.log("InfoWindow")})),i((()=>e.position),(function(t){u.value&&t.length&&(u.value.getIsOpen()?(n=t,d(),u.value.setPosition(n)):(d(),u.value.open(l,e.position)));var n}),{immediate:!0,deep:!0}),i((()=>e.content),(function(e){u.value.setContent(e)}),{immediate:!0,deep:!0}),{close:function(){u.value.close()}}},render:()=>()=>n("div",{class:"InfoWindow"},"InfoWindow")},C={name:"MouseTool",props:{type:{type:String,default:"marker"}},emits:["draw"],setup(e,t){const n=o("storeData"),{map:l}=n,r=a(),u=a([{}]);function c(n){console.log(e.type,n),u.value.push(n.obj),t.emit("draw",{obj:n.obj,overlays:u.value})}return l.plugin(["AMap.MouseTool"],(function(){r.value=new window.AMap.MouseTool(l)})),i((()=>e.type),(function(e){console.log(e,"watchType"),e&&e!=r.value&&(r.value[e](),r.value.on("draw",c))}),{immediate:!0,deep:!0}),{remove:function(){l.remove(u.value)},close:function(e=!0){r.value.close(e)}}},render:()=>()=>n("div",{class:"MouseTool"},"MouseTool")},S={name:"PathSimplifierIns",props:{model:{type:String,default:()=>"realTime"},icon:{type:String||null,default:""},id:null,position:{type:Array,default:()=>[]}},emits:["moveing","pointClick"],setup(e,t){const l=o("storeData");console.log(l,"storeData");const{map:u}=l,c=a();c.value=null;const d=a(),s={lineWidth:0,fillStyle:null,strokeStyle:null,borderStyle:null},p=a(),f=a([{name:"动态路线",path:[[]]}]),v=a(0);var m,h;function y(){c.value=new d.value({zIndex:100,autoSetFitView:!1,map:u,pathNavigatorStyle:{width:32,height:32,content:d.value.Render.Canvas.getImageContent(e.icon)},getPath:function(e){return e.path},getHoverTitle:function(e){return e.name+"，点数量"+e.path.length},renderOptions:"realTime"==e.model?{pathLineStyle:s,pathLineSelectedStyle:s,pathLineHoverStyle:s,keyPointStyle:s,startPointStyle:s,endPointStyle:s,keyPointHoverStyle:s,keyPointOnSelectedPathLineStyle:s}:{}})}function g(n,o){let a=o.dataItem.pointIndex,i=p.value.getPosition();if(t.emit("moveing",[i.lng,i.lat]),"realTime"==e.model);else{if(!e.position[v.value].icon)return;if(v.value!=a){v.value=a,p.value.getStyleOptions().content=d.value.Render.Canvas.getImageContent(e.position[v.value].icon),c.value.renderLater(200)}}}function w(e,n){t.emit("pointClick",e,n)}function k(t){c.value?"realTime"==e.model?p.value?function(t){if(t.length){var n=p.value.getCursor().clone(),o=p.value.getNaviStatus();f.value[0].path[0].length?f.value[0].path.push(t):f.value[0].path[0]=t,c.value.setData(f.value),p.value=c.value.createPathNavigator(0,{speed:1e6,pathNavigatorStyle:{width:32,height:32,content:d.value.Render.Canvas.getImageContent(e.icon)}}),p.value.on("move",g),"stop"!==o&&p.value.start(),n.idx>=0&&p.value.moveToPoint(n.idx,n.tail)}}(t):(f.value[0].path[0]=e.position,c.value.setData(f.value),p.value=c.value.createPathNavigator(0,{speed:1e6,loop:!1,pathNavigatorStyle:{width:32,height:32,content:d.value.Render.Canvas.getImageContent(e.icon)}}),p.value.start()):function(){let t=[];if(e.position[0].point&&(t=e.position.map((e=>e.point))),e.position[0].length&&(t=e.position),console.log(t,"historyStart"),t[0]){let n=e.position[0].icon||e.icon;console.log(e.position,"historyStart"),f.value[0].path=t,c.value.setData(f.value),p.value=c.value.createPathNavigator(0,{loop:!1,speed:1e6,pathNavigatorStyle:{width:32,height:32,content:d.value.Render.Canvas.getImageContent(n)},getPath:function(e){return e.path}}),p.value.start(),p.value.on("move",g),c.value.off("pathClick pointClick",w)}}():setTimeout((()=>{"realTime"==e.model?k(t):k(null)}),200)}return(m="AMapUI",h="https://webapi.amap.com/ui/1.1/main.js?v=1.1.1",window[m]?window[m]._preloader?window[m]._preloader:Promise.resolve(window[m]):(window[m]={},window[m]._preloader=new Promise(((e,t)=>{const n=document.createElement("script");n.src=h,window.document.body.appendChild(n),n.onload=function(){e(window[m]),window[m]._preloader=null}})),window[m]._preloader)).then((e=>{!function(e){e.load(["ui/misc/PathSimplifier"],(function(e){e.supportCanvas?(d.value=e,y()):alert("当前环境不支持 Canvas！")}))}(e)})),r((()=>{})),i((()=>e.id),(function(t,n){if(!n)return;p.value&&p.value.destroy(),p.value=null,"realTime"==e.model&&t&&(f.value[0].path=[e.position],y())}),{immediate:!0,deep:!0}),i((()=>e.position),(function(e){if(!e[0])return;k(e)}),{immediate:!0,deep:!0}),()=>n("div",{class:"PathSimplifierIns"},"PathSimplifierIns")}},z={name:"MoveAnimation",props:{lineArr:{type:Array,default:()=>[]}},setup(e,t){const n=o("storeData"),{map:l}=n,r=a();return i((()=>e.lineArr),(function(t){t[0]&&(console.log(e.lineArr[0],"props.lineArr"),window.AMap.plugin("AMap.MoveAnimation",(function(){r.value=new window.AMap.Marker({map:l,position:e.lineArr[0],icon:"https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png"});let t=new window.AMap.Polyline({map:l,strokeColor:"#AF5",strokeWeight:6});r.value.on("moving",(function(e){t.setPath(e.passedPath)})),l.setFitView()})))}),{immediate:!0,deep:!0}),{startAnimation:function(){r.value.moveAlong(e.lineArr,{duration:500,autoRotation:!0})},pauseAnimation:function(){r.value.pauseMove()},resumeAnimation:function(){r.value.resumeMove()},stopAnimation:function(){r.value.stopMove()}}},render:()=>()=>n("div",{class:"MoveAnimation"},"MoveAnimation")},A={name:"EditPlugin",props:{type:{type:String,default:""},edit:{type:Boolean,default:!1},overlayOptions:{type:Object,default:()=>({})}},emits:["end"],setup(e,t){const n=o("storeData"),{map:l}=n,r=a(""),u=a(),c=a();function d(){if(!r.value)return;console.log(r.value,"createOverlayeditType Circle");let t={};"rectangle"==e.type&&(t.bounds=new window.AMap.Bounds(e.overlayOptions.southWest,e.overlayOptions.northEast)),u.value=new window.AMap[r.value]({...e.overlayOptions,...t}),u.value.setMap(l),e.edit&&s()}function s(){if(r.value)return"marker"==e.type?u.value.setDraggable(!0):void l.plugin(["AMap."+r.value+"Editor"],(function(){c.value=new window.AMap[r.value+"Editor"](l,u.value),c.value.open(),c.value.on("end",p)}))}function p(e){t.emit("end",e)}console.log(e,"EditPlugin"),i((()=>e.edit),(function(t){if(console.log(t,"watchEdit"),!e.type)return;t?u.value?s():d():c.value&&c.value.close()}),{immediate:!0,deep:!0}),i((()=>e.type),(function(e){if(function(){u.value&&(l.remove(u.value),u.value=null,console.log(u.value,"myoverlay"));c.value&&(c.value.close(),c.value.off("end",p),c.value=null)}(),e){let t=e.split("");t[0]=t[0].toUpperCase(),r.value=t.join(""),d()}}),{immediate:!0,deep:!0})},render:()=>()=>n("div",{class:"EditPlugin"},"EditPlugin")};function M(e){return{lazy:e.lazy,type:e.type,headers:e.headers,autoParam:e.autoParam,otherParam:e.otherParam,name:e.name,isCheck:e.isCheck,showIcon:e.showIcon,isCopy:e.isCopy,isRemoveBtn:e.isRemoveBtn,isRenameBtn:e.isRenameBtn,isMove:e.isMove,nodeFilter:e.nodeFilter,isContextmenu:e.isContextmenu,isExpand:e.isExpand,isFreeze:e.isFreeze,hoverOperation:e.hoverOperation,iconsFilter:function(t){var{data:n,flag:o}=t;return e.iconsFilter&&Array.isArray(n)?(n.forEach((t=>{e.iconsFilter(t)})),n):(Array.isArray(n)&&n.forEach((e=>{switch(e.type){case 1:return e.iconSkin="company";case 2:return e.iconSkin="organize";case 3:return e.iconSkin="fleed";case 4:return e.iconSkin=2==e.deviceTypeCode?e.online?"onlineCamera":"unlineCamera":e.online?"online"+(e.icon||"icon1"):"unline"+(e.icon||"icon1");case 5:return e.iconSkin="camera"}})),n)}}}function T(e,t){var n=null;function o(n,o){let a=[],i=[];const l=e.nodeFilter[0],r=e.nodeFilter[1];console.log(l,r,"nodeFilter");let u=o.getNodesByParam(l,r,n);for(let e=0;e<u.length;e++){let t=u[e].id;t&&a.push(t)}let c=o.getCheckedNodes();for(let e=0;e<c.length;e++)c[e][l]==r&&i.push(c[e].id);t.emit("node-check",{checked:n.checked,treeNode:n,checkedList:a,allList:i})}return{treeLoaded(){t.emit("tree-loaded")},beforeClick(e,t){},onClick(e,o,a){let i=this.getZTreeObj(o);n==a.tId?(a.click=!1,n=null,i.cancelSelectedNode()):(a.click=!0,n=a.tId),t.emit("node-click",{click:a.click,id:a.id,treeNode:a})},beforeCheck(t,n){if(!n.checked&&e.limitCheck)return e.limitCheck(n)},onCheck(e,t,n){let a=this.getZTreeObj(t);if(n.checked){if(a.expandNode(n,!0,!1,!0),!n.zAsync)return;o(n,a)}else o(n,a)},beforeRemove(e,t){},beforeRename(e,t){},onExpand(e,t,n){},onAsyncSuccess(e,t,n,a){let i=this.getZTreeObj(t);n&&n.checked&&(i.checkNode(n,!0,!0),o(n,i))},onRightClick(e,t,n){},onRename(e,t,n,o){},onCollapse(e,t,n){},beforeDrop:(t,n,o,a)=>(e.nodeBeforeDrop&&e.nodeBeforeDrop(n,o),"function"!=typeof e.limitDrop||e.limitDrop(n,o,a)),onDrop(t,n,o,a,i,l){"function"==typeof e.nodeDrop&&e.nodeDrop(o,a)}}}var x=u({name:"Tree",props:{treeData:{type:Array,default:()=>[]},name:{type:String,default:"text"},showIcon:{type:Boolean,default:!0},isCheck:{type:Boolean,default:!1},isCopy:{default:!1},isEdit:{default:!1},isRemoveBtn:{default:!1},isRenameBtn:{default:!1},isMove:{default:!1},iconsFilter:{type:Function,default:null},isContextmenu:{type:Boolean,default:!1},isExpand:{type:Boolean,default:!0},isFreeze:{type:Boolean,default:!1},lazy:{type:String,default:""},type:{type:String,default:"get"},headers:{type:Object,default:{}},autoParam:{type:Array,default:()=>["id","type"]},otherParam:{type:Object,default:()=>({})},limitCheck:{type:Function,default:()=>null},nodeFilter:{type:Array,default:()=>["type",4]},hoverOperation:{type:Function,default:()=>()=>{}}},emits:["tree-loaded","tree-ready","node-click","node-check"],setup(e,t){const n=a(),o=a(),l=a();function u(){import("./base-tree-b7143b16.js").then((a=>{console.log(888888),n.value=new a.default({el:o.value,options:M(e),methods:T(e,t)}),Array.isArray(e.treeData)?c(e.treeData):e.lazy&&function(){console.log("内部请求数据");let t="?";for(const n in e.otherParam)t+=n+"="+e.otherParam[n]+"&";fetch(e.lazy+t,{method:e.type,headers:e.headers}).then((e=>e.json())).then((e=>{c(e.data)}))}()}))}function c(e){n.value.setInitialTree(e),l.value=n.value.zTree,t.emit("tree-ready")}return o.value=(o.value=`tree${Math.floor((new Date).getTime()+1e5*Math.random())}`,o.value),r((()=>{u()})),i((()=>e.treeData),(function(e){u()})),{treeId:o,tree:n,zTree:l,init:u}}});const P={class:"cv-ztree",ref:"tree"},I=["id"];function N(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}N('@font-face {\n  font-family: "iconfont-tree";\n  /* project id 3354902 */\n  src: url("//at.alicdn.com/t/font_3354902_ay4w47j4gq.woff2?t=1650857568480") format("woff2"), url("//at.alicdn.com/t/font_3354902_ay4w47j4gq.woff?t=1650857568480") format("woff"), url("//at.alicdn.com/t/font_3354902_ay4w47j4gq.ttf?t=1650857568480") format("truetype");\n}\n.cv-ztree {\n  width: 100%;\n  min-width: 200px;\n  height: 95%;\n  min-height: 200px;\n  overflow-y: scroll;\n  background-color: #fff;\n  min-height: 320px;\n  font-family: "Microsoft YaHei";\n}\n.cv-ztree ul, .cv-ztree li {\n  padding: 0px;\n  margin: 0;\n}\n.cv-ztree li {\n  font-family: "iconfont-tree";\n  line-height: 26px;\n  text-align: left;\n  padding-left: 5px;\n}\n.cv-ztree li a {\n  text-align: left;\n}\n.cv-ztree li a:hover {\n  text-indent: 3px;\n}\n.cv-ztree li .node_name {\n  display: inline-block;\n  width: 60%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 12px;\n}\n.cv-ztree li .curSelectedNode {\n  background: #e4e7ed;\n  text-indent: 3px;\n  padding: 5px 0;\n  opacity: 0.8;\n  border-radius: 6px;\n}\n.cv-ztree li .button {\n  padding-right: 3px;\n}\n.cv-ztree li .company_ico_open:before,\n.cv-ztree li .company_ico_close:before,\n.cv-ztree li .company_ico_docu:before {\n  content: "\\e61a";\n}\n.cv-ztree li .noline_close:before {\n  content: "\\e62d";\n}\n.cv-ztree li .noline_open:before {\n  content: "\\e62e";\n}\n.cv-ztree li .checkbox_false_full:before,\n.cv-ztree li .checkbox_false_full_focus:before,\n.cv-ztree li .checkbox_false_part:before,\n.cv-ztree li .checkbox_false_part_focus:before {\n  content: "\\e67b";\n}\n.cv-ztree li .checkbox_true_full:before,\n.cv-ztree li .checkbox_true_full_focus:before,\n.cv-ztree li .checkbox_true_part:before,\n.cv-ztree li .checkbox_true_part_focus:before {\n  content: "\\e686";\n  color: #409eff;\n}\n.cv-ztree li .organize_ico_open:before,\n.cv-ztree li .organize_ico_close:before,\n.cv-ztree li .organize_ico_docu:before {\n  content: "\\e666";\n}\n.cv-ztree li .fleed_ico_open:before,\n.cv-ztree li .fleed_ico_close:before,\n.cv-ztree li .fleed_ico_docu:before {\n  content: "\\e77a";\n}'),x.render=function(e,t,n,o,a,i){return c(),d("div",P,[s("ul",{id:e.treeId},null,8,I)],512)},x.__file="package/components_Tree/tree/src/tree.vue";var D=u({name:"TreeSearch",props:{modelValue:{default:null},valueName:{type:String,default:()=>"id"},treeData:{type:Array,default:()=>[]},name:{type:String,default:"text"},showIcon:{type:Boolean,default:!0},isCheck:{type:Boolean,default:!1},lazy:{type:String,default:""},type:{type:String,default:"get"},headers:{type:Object,default:{}},autoParam:{type:Array,default:()=>["id","type"]},otherParam:{default:()=>({})},limitCheck:{type:Function,default:()=>null},hoverOperation:{type:Function,default:()=>()=>{}},open:{type:Boolean,default:!0},nodeFilter:{type:Array,default:()=>["type",4]}},emits:["clear","update:modelValue","node-click","node-check","tree-ready"],setup(e,t){const n=a(""),o=a(""),l=a();function r(){const{zTree:a}=l.value,i=a.getNodes(),{childs:r,filterNodes:u}=function(t=1){const{zTree:o}=l.value;let a=[];var i=o.getNodesByParamFuzzy(e.name,n.value);n.value&&i.forEach((e=>{let n=e;for(;n.level>t;)n=n.getParentNode(),n.open||o.expandNode(n,!0,!1,!1);a.push(n)}));return{filterNodes:a,childs:i}}();i.forEach((e=>{const t=e&&e.children;t&&a.hideNodes(t)}));let c={};""==n.value?(t.emit("update:modelValue",""),t.emit("clear"),o.value="",c=r):c=u,a.showNodes(c),function(e,t){const{zTree:o}=l.value;o.transformToArray(e?e:o.getNodes()).forEach((e=>{e.highlight=!1,o.updateNode(e)})),""!=n.value&&t.forEach((e=>{e.highlight=!0,o.updateNode(e)}))}(i,r)}const u=a(e.open),c=a();function d(){let t=s();t&&"object"==typeof t&&(o.value=n.value=t[e.name],r())}function s(){const{zTree:t}=l.value;return t.getNodes(),t.getNodeByParam(e.valueName,e.modelValue)}return i((()=>e.modelValue),(function(e){e&&l.value?d():""!==o.value&&(o.value=n.value="",r())}),{immediate:!0,deep:!0}),{baseTree:l,Input:c,mouseleave:function(){n.value=o.value,e.open||(c.value.blur(),u.value=!1)},inputValue:n,focus:function(){e.open||(u.value=!0)},fliterNode:r,isShowTree:u,nodeCheck:function(e){t.emit("node-check",e)},nodClick:function(a){o.value=n.value=a.treeNode[e.name],t.emit("node-click",a),t.emit("update:modelValue",a.treeNode[e.valueName]),e.open||(u.value=!1)},treeLoaded:function(){},treeReady:function(){e.modelValue&&d(),t.emit("tree-ready",!0)},getNodeByParam:s}}});const F=s("span",{class:"cvIcon_search"},null,-1);N('@font-face {\n  font-family: "iconfont-cv_components_v3";\n  /* project id 3365244 */\n  src: url("");\n  src: url("?#iefix") format("embedded-opentype"), url("//at.alicdn.com/t/font_3365244_7q9ep99pblg.woff2") format("woff2"), url("//at.alicdn.com/t/font_3365244_7q9ep99pblg.woff") format("woff"), url("//at.alicdn.com/t/font_3365244_7q9ep99pblg.ttf") format("truetype"), url("#iconfont") format("svg");\n}\n.cvIcon_search {\n  cursor: pointer;\n}\n.cvIcon_search::before {\n  content: "\\e62f";\n  font-family: "iconfont-cv_components_v3";\n}\n.cvIcon_search:hover {\n  font-size: 16px;\n}\n\n.treeSearch {\n  min-width: 320px;\n  box-sizing: border-box;\n  height: 95%;\n  position: relative;\n}\n\n.cv-ztree {\n  padding-top: 8px;\n}\n\n.inputTree .cv-ztree {\n  max-height: 320px;\n  overflow: scroll;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}'),D.render=function(e,t,n,o,a,i){const l=p("el-input"),r=p("tree");return c(),d("div",{class:f(e.open?"treeSearch":"treeSearch inputTree"),onMouseleave:t[1]||(t[1]=(...t)=>e.mouseleave&&e.mouseleave(...t))},[v("  @input='fliterNode' @clear=\"fliterNode\"  "),m(l,{placeholder:"Please input",ref:"Input",modelValue:e.inputValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.inputValue=t),maxlength:20,clearable:"",onFocus:e.focus,onInput:e.fliterNode},{suffix:h((()=>[F])),_:1},8,["modelValue","onFocus","onInput"]),y(m(r,{ref:"baseTree",treeData:e.treeData,lazy:e.lazy,headers:e.headers,autoParam:e.autoParam,otherParam:e.otherParam,isCheck:e.isCheck,name:e.name,showIcon:e.showIcon,"limit-check":e.limitCheck,hoverOperation:e.hoverOperation,nodeFilter:e.nodeFilter,onNodeCheck:e.nodeCheck,onNodeClick:e.nodClick,onTreeLoaded:e.treeLoaded,onTreeReady:e.treeReady},null,8,["treeData","lazy","headers","autoParam","otherParam","isCheck","name","showIcon","limit-check","hoverOperation","nodeFilter","onNodeCheck","onNodeClick","onTreeLoaded","onTreeReady"]),[[g,e.isShowTree]])],34)},D.__file="package/components_Tree/treeSearch/src/treeSearch.vue";var j=u({name:"InputLinkTree",props:{modelFormObj:{type:Object,required:!0,default:()=>({enterpriseId:"",fleetId:""})},treeData:{type:Array,default:()=>[]},lazy:{type:String,default:""},type:{type:String,default:"get"},headers:{type:Object,default:{token:localStorage.getItem("token"),Authorization:"Bearer "+localStorage.getItem("token")}},name:{type:String,default:"text"},showIcon:{type:Boolean,default:!0}},emits:["current-change","tree-ready"],setup(e,t){const n=a(e.modelFormObj.enterpriseId),o=a(e.modelFormObj.fleetId),l=a([]),r=a();i((()=>e.modelFormObj),(function(e){n.value=e.enterpriseId,e.enterpriseId&&r.value&&c()}),{immediate:!0,deep:!0});const u=a();function c(t=null){let n=t||r.value.getNodeByParam(),o=`?enterpriseId=${n.enterpriseId}&pId=${n.id}&type=${n.type}`;fetch(e.lazy+o,{method:e.type,headers:e.headers}).then((e=>e.json())).then((e=>{e.data?l.value=e.data:l.value=[]}))}return localStorage.getItem("token"),{value1:n,nodeClick1:function(e){o.value="",c(e.treeNode),u.value=[e.treeNode.id,""],t.emit("current-change",u.value)},clear1:function(){o.value="",l.value=[],u.value=["",""],t.emit("current-change",u.value)},treeData2:l,value2:o,nodeClick2:function(e){u.value=[n.value,e.treeNode.id],t.emit("current-change",u.value)},clear2:function(){let e=[n.value,""];u.value.join(",")!=e.join(",")&&(u.value=e,t.emit("current-change",u.value))},treeSearch1:r,nodeSendArr:u,treeReady1:function(){n.value&&c()},treeReady2:function(){t.emit("tree-ready")}}}});const R={class:"inputLinkTree"};j.render=function(e,t,n,o,a,i){const l=p("treeSearch"),r=p("el-form-item");return c(),d("div",R,[m(r,{label:"Approved by"},{default:h((()=>[m(l,{treeData:e.treeData,name:e.name,modelValue:e.value1,"onUpdate:modelValue":t[0]||(t[0]=t=>e.value1=t),open:!1,ref:"treeSearch1",onTreeReady:e.treeReady1,onNodeClick:e.nodeClick1,onClear:e.clear1},null,8,["treeData","name","modelValue","onTreeReady","onNodeClick","onClear"])])),_:1}),m(r,{label:"Approved by"},{default:h((()=>[m(l,{treeData:e.treeData2,name:e.name,modelValue:e.value2,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value2=t),open:!1,ref:"treeSearch2",onTreeReady:e.treeReady2,onNodeClick:e.nodeClick2,onClear:e.clear2},null,8,["treeData","name","modelValue","onTreeReady","onNodeClick","onClear"])])),_:1})])},j.__file="package/components_Tree/inputLinkTree/src/inputLinkTree.vue";const O={Map:w,Marker:k,Liner:b,InfoWindow:_,MouseTool:C,PathSimplifierIns:S,MoveAnimation:z,EditPlugin:A,Tree:x,TreeSearch:D,inputLinkTree:j};let B={version:"0.0.1",install:function(e){for(var t in O)e.component(t,O[t])},...O};console.log(B,"moduleComponent");export{B as m,N as s};
