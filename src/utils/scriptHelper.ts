export const getMapScript = function (name: String, cdn: String) {
   return new Promise(function (resolve, reject) {
       window._initMap = function () {
           console.log(window,'name',name)
                resolve(window[name]);
              
                window._preloader = null;
                window._initMap = null;
            };
            var $script = document.createElement('script');
            $script.type = 'text/javascript';
       window.document.body.appendChild($script);
       $script.src = cdn + '&callback=_initMap';
        });
// if (!window[name]) {
//     window[name] = {};
//     window[name]._preloader = new Promise(function (resolve, reject) {
//         window._initMap = function () {
//             resolve(window[name]);
//             //window.document.body.removeChild($script)
//             window[name]._preloader = null;
//             window._initMap = null;
//         };
//         var $script = document.createElement('script');
//         $script.type = 'text/javascript';
//         window.document.body.appendChild($script);
//         $script.src = cdn + '&callback=_initMap';
//     });
// debugger
//     return window[name]._preloader;
// } else if (!window[name]._preloader) {
//     return Promise.resolve(window[name]);
// } else {
//     return window[name]._preloader;
// }
};