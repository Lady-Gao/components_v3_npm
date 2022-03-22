
/**
 * 获取地图cdn接口
 * 有回调
 */
export const getMapScript = function (name: String, cdn: String) {
if (!window[name]) {
    window[name] = {};
    window[name]._preloader = new Promise(function (resolve, reject) {
        window._initMap = function () {
            resolve(window[name]);
            //window.document.body.removeChild($script)
            window[name]._preloader = null;
            window._initMap = null;
        };
        var $script = document.createElement('script');
        $script.type = 'text/javascript';
        window.document.body.appendChild($script);
        $script.src = cdn + '&callback=_initMap';
    });
    return window[name]._preloader;
} else if (!window[name]._preloader) {
    return Promise.resolve(window[name]);
} else {
    return window[name]._preloader;
}
};

/**
 * 异步加载远程js脚本
 * @param {String} name: 全局变量名
 * @param {URL} cdn: 远程cdn地址
 * @return {Promise} 返回一个promise
 */
 export const asyncDownloadScript = function (name :string , cdn:string ) {
    // window == window   window.baidu = {_preloader: null}
    if (!window[name]) {
        window[name] = {}; // window.baidu = {}
        // window.baidu._preloader = new promise
        window[name]._preloader = new Promise((resolve, reject) => {
            const $script = document.createElement("script");
            $script.src = cdn;
            window.document.body.appendChild($script); // window.document.body.appendCHild
           
                // 高级浏览器  11  edge chrome fix opera
                $script.onload = function () {
                    resolve(window[name]);
                    // wind.baidu._preloader = null 释放内存
                    window[name]._preloader = null;
                };
        });
        return window[name]._preloader;
    } else if (!window[name]._preloader) {
        return Promise.resolve(window[name]);
    } else {
        return window[name]._preloader;
    }
};