
// https://monstergao.gitee.io/cv_amapv3/
import Map from "./Map/index";
import Marker from "./Marker/index";
import Liner from "./Liner/index";
import InfoWindow from "./InfoWindow/index";
import MouseTool from "./MouseTool/index";
import PathSimplifierIns from "./PathSimplifierIns/index";
import MoveAnimation from "./MoveAnimation/index";
import EditPlugin from "./EditPlugin/index";

const modules={
    Map,
    Marker,
    Liner,
    InfoWindow,
    MouseTool,
    PathSimplifierIns ,
    MoveAnimation,
    EditPlugin,
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

export default moduleComponent