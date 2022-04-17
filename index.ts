// const modulesFiles = import.meta.globEager("./package/*/index.ts");

// const modules = Object.keys(modulesFiles).reduce(
//     (modules: { [key: string]: any }, path: string) => {
//         let moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
//         let name = moduleName.split('/')[2] //文件名
//       modules[name] = modulesFiles[path]?.default
//       return modules
//     },
//     {}
// )
import Map from "./package/Map/index";
import Marker from "./package/Marker/index";
import Liner from "./package/Liner/index";
import InfoWindow from "./package/InfoWindow/index";
import MouseTool from "./package/MouseTool/index";
import PathSimplifierIns from "./package/PathSimplifierIns/index";
import MoveAnimation from "./package/MoveAnimation/index";
import EditPlugin from "./package/EditPlugin/index";

const modules:any={
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

console.log(modules,'modules')
let moduleComponent = {
    version: '0.1.0',
     install,
     ...modules
}

export default moduleComponent