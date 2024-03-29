// @ts-nocheck # 忽略全文
// https://monstergao.gitee.io/cv_amapv3/
import Map from "./components_Amap/Map/index";
import Marker from "./components_Amap/Marker/index";
import Liner from "./components_Amap/Liner/index";
import InfoWindow from "./components_Amap/InfoWindow/index";
import MouseTool from "./components_Amap/MouseTool/index";
import PathSimplifierIns from "./components_Amap/PathSimplifierIns/index";
import MoveAnimation from "./components_Amap/MoveAnimation/index";
import EditPlugin from "./components_Amap/EditPlugin/index";

// components_Tree
import Tree from "./components_Tree/tree/index" 
import TreeSearch from "./components_Tree/treeSearch/index" 
import InputLinkTree from "./components_Tree/inputLinkTree/index" 
import TreeList from "./components_Tree/treeList/index"
import TreeTab from "./components_Tree/treeTab/index"
import PublicTreeContent from "./components_Other/publictreeContent/index"
import Operation from "./components_Other/operation/index"
import OpretionTool from "./components_Other/opretionTool/index"
import Grid from "./components_Other/grid/index"
const modules={
    Map,
    Marker,
    Liner,
    InfoWindow,
    MouseTool,
    PathSimplifierIns ,
    MoveAnimation,
    EditPlugin,
    Tree,
    TreeSearch,
    InputLinkTree,
    TreeList,
    TreeTab,
    PublicTreeContent,
    Operation,
    OpretionTool,
    Grid
}

const install = function (app:any) {
    for (var key in modules) {
        app.component(key,modules[key]);
    }
    
};
// console.log(modules,'modules')
let moduleComponent = {
    version: '0.0.08',
     install,
     ...modules
}
console.log(moduleComponent,'moduleComponent2')
export default moduleComponent