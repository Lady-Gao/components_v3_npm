
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
import inputLinkTree from "./components_Tree/inputLinkTree/index" 
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
    inputLinkTree
}

const install = function (app:any) {
    for (var key in modules) {
        app.component(key,modules[key]);
    }
    
};

let moduleComponent = {
    version: '0.0.1',
     install,
     ...modules
}
console.log(moduleComponent,'moduleComponent')
export default moduleComponent