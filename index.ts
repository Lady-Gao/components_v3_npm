const modulesFiles = import.meta.globEager("./package/*/index.ts");

const modules = Object.keys(modulesFiles).reduce(
    (modules: { [key: string]: any }, path: string) => {
        let moduleName = path.replace(/^\.\/modules\/(.*)\.\w+$/, '$1')
        let name = moduleName.split('/')[2] //文件名
      modules[name] = modulesFiles[path]?.default
      return modules
    },
    {}
)
const install = function (app:any) {
    for (var key in modules) {
        app.component(key, modules[key]);
    }
    
};
let moduleComponent = {
    version: '0.1.0',
    install,
    ...modules
}

export default moduleComponent