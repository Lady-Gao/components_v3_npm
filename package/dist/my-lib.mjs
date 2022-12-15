(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode("@charset \"UTF-8\";@font-face{font-family:iconfont-cv_components_v3;src:url(//at.alicdn.com/t/c/font_3365244_3dug04ny1jg.woff2?t=1669601044768) format(\"woff2\"),url(//at.alicdn.com/t/c/font_3365244_3dug04ny1jg.woff?t=1669601044768) format(\"woff\"),url(//at.alicdn.com/t/c/font_3365244_3dug04ny1jg.ttf?t=1669601044768) format(\"truetype\")}.cvIcon_search:before{content:\"\\e62f\";font-family:iconfont-cv_components_v3}.cvIcon_collection:before{font-family:iconfont-cv_components_v3;content:\"\\e86d\";color:#f3aa4e}.cvIcon_uncollection:before{font-family:iconfont-cv_components_v3;content:\"\\e600\"}.cvIcon_edit:before{font-family:iconfont-cv_components_v3;content:\"\\e62a\"}.cvIcon_delete:before{font-family:iconfont-cv_components_v3;content:\"\\e6b4\"}.icon0car_ico_open:before,.icon0car_ico_close:before,.icon0car_ico_docu:before{font-family:iconfont-cv_components_v3;content:\"\\e65a\"}.icon1car_ico_docu:before{font-family:iconfont-cv_components_v3;content:\"\\e9cc\"}.icon0car_online_ico_close:before,.icon0car_online_ico_open:before,.icon0car_online_ico_docu:before{font-family:iconfont-cv_components_v3;content:\"\\e65a\";color:#008000cf}.icon1car_online_ico_docu:before{font-family:iconfont-cv_components_v3;content:\"\\e9cc\";color:#008000cf}.cvIcon-jiantouLeft:before{font-family:iconfont-cv_components_v3;content:\"\\e9cd\"}.cvIcon-jiantouRight:before{font-family:iconfont-cv_components_v3;content:\"\\e63c\"}.yunwei_ico_docu:before{font-family:iconfont-cv_components_v3;content:\"\\e652\";color:#6b6a6a}.unlineCamera_ico_open:before,.unlineCamera_ico_close:before{font-family:iconfont-cv_components_v3;content:\"\\e969\"}.onlineCamera_ico_open:before,.onlineCamera_ico_close:before,.onlineCamera_ico_docu:before{font-family:iconfont-cv_components_v3;content:\"\\e969\";color:#008000cf}.treeSearch{width:100%;min-width:200px;box-sizing:border-box;height:95%;position:relative}.inputTree .cv-ztree{max-height:320px;position:absolute;width:100%;z-index:9999;padding-top:8px;margin-top:0}.inputLinkTree{display:inline-block}.inputLinkTree .cv-ztree{box-shadow:0 2px 4px #0000001f,0 0 6px #0000001f;border-radius:5px}.treeList{position:relative;max-width:300px;width:100%;height:100%}.treeList .onlineStatusCheck{margin:5px 0}.treeList .treeList-lists{height:calc(100% - 100px)}.treeList .treeList-lists .online{color:#008000cf}.treeList .treeList-lists .el-checkbox{width:100%;float:left}.treeList .treeList-lists .group_content{display:flex;justify-content:space-between;cursor:pointer;width:100%;line-height:32px;height:auto;border-bottom:1px solid #eee;user-select:initial}.treeList .treeList-lists .group_content .content_text{flex:2;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;user-select:initial}.treeList .treeList-lists .group_content .content_text .name{display:inline-block;width:100%}.treeList .treeList-lists .group_content .text{display:inline-block;padding-left:5px}.treeList .treeList-lists .group_content .remark{padding-left:5px;color:#b3b0b0;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left;width:80px}.treeList .treeList-lists .group_content .cvIcon_edit{margin-right:5px;display:inline-block}.treeList .treeList-lists .text_active{background:#eee}.treeList .treeList-lists .checkboxGroup .group_content{display:unset}.treeList .treeList-lists .checkboxGroup .group_content .operation{position:absolute;right:5px;top:0}.treeList .treeList-lists .checkboxGroup .channelInfos{width:100%;line-height:32px;padding-top:35px}.treeList .treeList-lists .radioGroup .group_content{margin-right:30px;line-height:32px}.treeList .treeList-lists .radioGroup .group_content .channelInfos{padding-left:15px}.treeList .treeList-lists .radioGroup .group_content .channelInfos .clickChanne{color:var(--el-color-primary)}.treeList .treeList-lists .radioGroup .group_content .channelInfos .channe_text{margin-left:5px}.treeList .treeList-lists .radioGroup .group_content .onlinecamera:before{font-family:iconfont-tree;content:\"\\e965\";color:#008000cf}.treeList .treeList-lists .radioGroup .group_content .unlinecamera:before{font-family:iconfont-tree;content:\"\\e965\";color:#7d7d7b}.treeList .pagination{display:flex;justify-content:space-between;line-height:32px;color:#7d7d7b;position:absolute;bottom:-15px;width:100%}.TreeTab{width:280px;position:absolute;bottom:5px;top:0px}.TreeTab .el-tabs{height:100%}.TreeTab .el-tabs .el-tabs__content{height:calc(100% - 40px);box-sizing:border-box}.TreeTab .el-tabs .el-tabs__content .el-tab-pane{height:100%}.TreeTab .el-tabs .cv-ztree{width:calc(100% + 20px);box-shadow:none;border-radius:0}.TreeTab .el-tabs .treeList-lists{width:calc(100% + 18px);padding-right:20px;box-sizing:border-box}.publictreeContent{position:absolute;top:10px;left:0;bottom:5px}.publictreeContent .main{position:relative}.publictreeContent .aside{width:300px;position:absolute;height:100%;left:0;transition:all .3s ease-in-out}.publictreeContent .aside .jiantou{position:absolute;top:46%;right:0px;padding:3px;z-index:2}.publictreeContent .container{position:absolute;height:100%;right:0;transition:all .3s ease-in-out;display:flex;flex-direction:column;width:calc(100% - 300px)}.publictreeContent .containeropen{width:calc(100% - 300px)}.publictreeContent .containerclose{width:calc(100% - 15px)}.publictreeContent .asideopen{left:0px}.publictreeContent .asideclose{left:-283px}.Operation{text-align:left}.Operation .slotBtn{margin-right:6px}.Operation .treeSearch{min-width:180px}.Operation .el-input{width:180px!important}.Operation .el-input .el-input__inner{width:100%}.Operation .el-form-item{margin-right:0!important}.Operation .buttonForm{display:flex;justify-content:flex-end}.opretionTool[data-v-468a3bbc]{margin-right:6px}.grid{position:relative;height:100%;width:100%}.grid .boxTable{position:absolute;top:0px;bottom:5px;width:99.8%;border:1px solid #eee;border-radius:3px}.grid .boxTable .el-table--fit{height:100%}.grid .boxTable .el-table--fit .el-table__inner-wrapper{height:100%!important}.grid .boxTable .el-table--fit .el-table__inner-wrapper:before{height:0}.grid .boxTable .el-table--fit .el-table__inner-wrapper .el-table__body-wrapper{height:calc(100% - 40px)}.grid .boxTable .el-table__empty-text{position:relative;padding-top:200px;display:inline-block}.grid .havePagin{bottom:50px}.grid .pagination{position:absolute;bottom:5px;right:5px;line-height:36px}.grid .pagination .el-pagination{float:left}.grid .inputFilter input{height:22px}@font-face{font-family:iconfont-tree;src:url(//at.alicdn.com/t/c/font_3354902_8tcdiy7lyl4.woff2?t=1669785215272) format(\"woff2\"),url(//at.alicdn.com/t/c/font_3354902_8tcdiy7lyl4.woff?t=1669785215272) format(\"woff\"),url(//at.alicdn.com/t/c/font_3354902_8tcdiy7lyl4.ttf?t=1669785215272) format(\"truetype\")}.cv-ztree{width:100%;min-width:100px;height:100%;min-height:200px;overflow-y:scroll;background-color:#fff;min-height:320px;font-family:Microsoft YaHei;margin-top:15px;box-shadow:0 2px 4px #0000001f,0 0 6px #0000001f;border-radius:5px}.cv-ztree ul,.cv-ztree li{padding:0;margin:0}.cv-ztree li{font-family:iconfont-tree;line-height:26px;text-align:left;padding-left:5px;position:relative}.cv-ztree li a{white-space:nowrap;text-align:left}.cv-ztree li a .button{padding-right:3px;display:inline}.cv-ztree li .node_name{width:75%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:28px;position:absolute}.cv-ztree li .curSelectedNode{background:#e4e7ed;padding:5px 0;opacity:.8;border-radius:6px}.cv-ztree li .button{padding-right:3px;display:inline-block;min-width:14px}.cv-ztree li .company_ico_open:before,.cv-ztree li .company_ico_close:before,.cv-ztree li .company_ico_docu:before{content:\"\\e61a\"}.cv-ztree li .noline_close:before{content:\"\\e62d\"}.cv-ztree li .noline_open:before{content:\"\\e62e\"}.cv-ztree li .checkbox_false_full:before,.cv-ztree li .checkbox_false_full_focus:before,.cv-ztree li .checkbox_false_part:before,.cv-ztree li .checkbox_false_part_focus:before{content:\"\\e67b\"}.cv-ztree li .checkbox_true_full:before,.cv-ztree li .checkbox_true_full_focus:before,.cv-ztree li .checkbox_true_part:before,.cv-ztree li .checkbox_true_part_focus:before{content:\"\\e686\";color:#409eff}.cv-ztree li .organize_ico_open:before,.cv-ztree li .organize_ico_close:before,.cv-ztree li .organize_ico_docu:before{content:\"\\e666\"}.cv-ztree li .fleed_ico_open:before,.cv-ztree li .fleed_ico_close:before,.cv-ztree li .fleed_ico_docu:before{content:\"\\e77a\"}.cv-ztree li .camera_ico_docu:before{content:\"\\e965\"}.cv-ztree li .ico_loading:before{content:\"\\e627\"}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { reactive as oe, provide as Ue, onMounted as le, nextTick as fe, h as ie, inject as te, ref as g, watch as V, defineComponent as U, resolveComponent as N, resolveDirective as He, withDirectives as Q, openBlock as y, createElementBlock as $, createVNode as L, withCtx as A, createElementVNode as T, normalizeClass as M, createSlots as We, vShow as X, computed as K, withKeys as ut, Fragment as J, renderList as x, createBlock as B, createTextVNode as pe, toDisplayString as R, createCommentVNode as z, getCurrentScope as ct, onScopeDispose as dt, unref as D, getCurrentInstance as _e, warn as ft, mergeProps as pt, renderSlot as G, Transition as Ke, shallowReactive as vt, normalizeStyle as Ge, resolveDynamicComponent as mt, withModifiers as ht, isVNode as Ze, render as Pe, pushScopeId as gt, popScopeId as yt } from "vue";
const kt = function(e, t) {
  return window[e] ? window[e]._preloader ? window[e]._preloader : Promise.resolve(window[e]) : (window[e] = {}, window[e]._preloader = new Promise(function(o, a) {
    window._initMap = function() {
      o(window[e]), window[e]._preloader = null, window._initMap = null;
    };
    var n = document.createElement("script");
    n.type = "text/javascript", window.document.body.appendChild(n), n.src = t + "&callback=_initMap";
  }), window[e]._preloader);
}, Ct = function(e, t) {
  return window[e] ? window[e]._preloader ? window[e]._preloader : Promise.resolve(window[e]) : (window[e] = {}, window[e]._preloader = new Promise((o, a) => {
    const n = document.createElement("script");
    n.src = t, window.document.body.appendChild(n), n.onload = function() {
      o(window[e]), window[e]._preloader = null;
    };
  }), window[e]._preloader);
}, _t = {
  name: "Map",
  props: {
    name: {
      type: String,
      default() {
        return "AMap";
      }
    },
    zoom: {
      type: Number,
      default() {
        return 13;
      }
    },
    center: {
      type: Array,
      default() {
        return [116.397428, 39.90923];
      }
    },
    viewMode: {
      type: String,
      default: "2D"
    },
    id: {
      type: String,
      default: () => "mapDom" + Math.random() * 1001
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(e, { attrs: t, slots: o, emit: a, expose: n }) {
    const l = oe({
      map: {},
      isReady: !1
    });
    Ue("storeData", l), le(() => {
      fe(() => {
        p();
      });
      function p() {
        document.getElementById(e.id) ? i() : setTimeout(() => {
          p();
        }, 50);
      }
    });
    function i() {
      let p = "";
      switch (e.name) {
        case "AMap":
          p = "https://webapi.amap.com/maps?v=2.1Beta&key=966a1cec27bf619fc0b3d8683e8f4c01&plugin=AMap.MarkerCluster";
          break;
      }
      kt(e.name, p).then((m) => {
        r(m);
      });
    }
    function r(p) {
      l.map = new p.Map(e.id, {
        zoom: e.zoom,
        center: e.center,
        viewMode: e.viewMode,
        ...e.options
      }), l.isReady = !0;
    }
    function s() {
      l.map.clearMap();
    }
    function v() {
      l.map.setFitView();
    }
    function u(p, m = !0) {
      l.map.setCenter(p, m);
    }
    return n({ storeData: l, clearMap: s, setFitView: v, setCenter: u }), () => ie("div", {
      class: "Map",
      id: e.id,
      style: {
        height: "500px"
      }
    }, ie("div", {
      class: "Map_slots"
    }, l.isReady && o.default ? o.default() : ""));
  }
}, bt = {
  name: "Marker",
  props: {
    position: {
      type: Array,
      default() {
        return [];
      }
    },
    size: {
      type: Array,
      default() {
        return [32, 32];
      }
    },
    id: null,
    Icon: {
      type: String || null,
      default: null
    },
    usemoveTransform: {
      type: Boolean,
      default() {
        return !1;
      }
    },
    offset: {
      type: Array,
      default() {
        return [-13, 0];
      }
    }
  },
  emits: ["click", "moving"],
  setup(e, t) {
    const o = te("storeData"), { map: a } = o, n = g();
    l(), V(
      () => e.position,
      i,
      { immediate: !0, deep: !0 }
    ), V(
      () => e.Icon,
      r,
      { immediate: !0, deep: !0 }
    );
    function l() {
      !e.position.length || (n.value = new window.AMap.Marker({
        map: a,
        position: e.position,
        offset: e.offset,
        size: e.size,
        zIndex: 0
      }), n.value.setIcon(e.Icon), n.value.id = e.id, n.value.on("click", u), n.value.on("moving", p));
    }
    function i(m) {
      if (!n.value)
        return l();
      m.length ? (n.value.setMap(a), s(m)) : n.value.setMap(null);
    }
    function r(m, b) {
      !n.value || m != b && n.value.setIcon(m);
    }
    function s(m, b = 1e3) {
      e.usemoveTransform ? n.value.moveTo(m, {
        duration: b,
        delay: 500
      }) : n.value.setPosition(m), n.value.setMap(a);
    }
    function v() {
      n.value && (n.value.off("click", u), n.value.off("moving", p), a.remove(n.value), n.value = null);
    }
    function u(m) {
      t.emit("click", {
        id: e.id,
        lnglat: e.position
      });
    }
    function p(m) {
      t.emit("moving", {
        id: e.id,
        lnglat: m.target._position
      });
    }
    return fe(() => {
    }), {
      removeMarker: v,
      myMarker: n
    };
  },
  render() {
  }
}, wt = {
  name: "Liner",
  props: {
    path: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {
          borderWeight: 2,
          strokeColor: "#28F",
          strokeWeight: 6,
          strokeOpacity: 0.8
        };
      }
    }
  },
  setup(e) {
    const t = te("storeData"), { map: o } = t, a = g();
    n(), V(
      () => e.path,
      l,
      { immediate: !0, deep: !0 }
    );
    function n() {
      a.value = new window.AMap.Polyline({
        map: o,
        ...e.options,
        zIndex: 1
      }), a.value.on("click", r);
    }
    function l(v) {
      a.value || (n(), i()), v.length ? i() : a.value.setMap(null);
    }
    function i() {
      a.value.setPath(e.path), a.value.setMap(o);
    }
    function r(v, u) {
    }
    function s() {
      a.value && (a.value.off("click", r), o.remove(a.value), a.value = null);
    }
    return {
      removeLiner: s,
      myLiner: a
    };
  },
  render() {
  }
}, St = {
  name: "InfoWindow",
  props: {
    position: {
      type: Array || Object
    },
    content: null
  },
  emits: ["close"],
  setup(e, { emit: t, expose: o }) {
    const a = te("storeData"), { map: n } = a, l = g();
    i(), le(() => {
    }), V(
      () => e.position,
      p,
      { immediate: !0, deep: !0 }
    ), V(
      () => e.content,
      b,
      { immediate: !0, deep: !0 }
    );
    function i() {
      l.value = new window.AMap.InfoWindow({
        offset: new window.AMap.Pixel(0, -30)
      }), l.value.id = e.id, l.value.on("close", s);
    }
    function r() {
      l.value.open(n, e.position);
    }
    function s() {
      e.position ? t("close") : console.log(e.position, "onclose\u624B\u52A8\u8C03\u7528");
    }
    function v() {
      l.value.setContent(e.content);
    }
    function u(h) {
      v(), l.value.setPosition(h);
    }
    function p(h) {
      l.value.setMap(n), l.value && h ? l.value.getIsOpen() && u(h) : l.value.close();
    }
    function m() {
      l.value.close();
    }
    function b(h) {
      l.value.setContent(h);
    }
    return {
      close: m,
      open: r
    };
  },
  render() {
  }
}, It = {
  name: "MouseTool",
  props: {
    type: {
      type: String,
      default: "marker"
    }
  },
  emits: ["draw"],
  setup(e, t) {
    const o = te("storeData"), { map: a } = o, n = g(), l = g([{}]);
    a.plugin(["AMap.MouseTool"], function() {
      i();
    }), V(
      () => e.type,
      u,
      { immediate: !0, deep: !0 }
    );
    function i() {
      n.value = new window.AMap.MouseTool(a);
    }
    function r(p) {
      l.value.push(p.obj), t.emit("draw", { obj: p.obj, overlays: l.value });
    }
    function s() {
      a.remove(l.value);
    }
    function v(p = !0) {
      n.value.close(p);
    }
    function u(p) {
      p && p != n.value && (n.value[p](), n.value.on("draw", r));
    }
    return {
      remove: s,
      close: v
    };
  },
  render() {
    return () => ie("div", { class: "MouseTool" }, "MouseTool");
  }
}, Tt = {
  name: "PathSimplifierIns",
  props: {
    model: {
      type: String,
      default() {
        return "realTime";
      }
    },
    icon: {
      type: String || null,
      default: ""
    },
    id: null,
    position: {
      type: Array,
      default() {
        return [];
      }
    },
    speed: {
      type: Number,
      default: 0
    }
  },
  emits: ["moveing", "pointClick"],
  setup(e, t) {
    const o = te("storeData"), { map: a } = o, n = g();
    n.value = null;
    const l = g(), i = {
      lineWidth: 0,
      fillStyle: null,
      strokeStyle: null,
      borderStyle: null
    }, r = g(), s = g([{
      name: "\u52A8\u6001\u8DEF\u7EBF",
      path: [[]]
    }]), v = g(0);
    Ct("AMapUI", "https://webapi.amap.com/ui/1.1/main.js?v=1.1.1").then((f) => {
      u(f);
    }), le(() => {
    }), V(
      () => e.id,
      _,
      { immediate: !0, deep: !0 }
    ), V(
      () => e.position,
      P,
      { immediate: !0, deep: !0 }
    );
    function u(f) {
      f.load(["ui/misc/PathSimplifier"], function(k) {
        if (!k.supportCanvas) {
          alert("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 Canvas\uFF01");
          return;
        }
        l.value = k, p();
      });
    }
    function p() {
      n.value = new l.value({
        zIndex: 100,
        autoSetFitView: !1,
        map: a,
        pathNavigatorStyle: {
          width: 32,
          height: 32,
          content: l.value.Render.Canvas.getImageContent(e.icon)
        },
        getPath: function(f) {
          return f.path;
        },
        getHoverTitle: function(f) {
          return f.name + "\uFF0C\u70B9\u6570\u91CF" + f.path.length;
        },
        renderOptions: e.model == "realTime" ? {
          pathLineStyle: i,
          pathLineSelectedStyle: i,
          pathLineHoverStyle: i,
          keyPointStyle: i,
          startPointStyle: i,
          endPointStyle: i,
          keyPointHoverStyle: i,
          keyPointOnSelectedPathLineStyle: i
        } : {}
      });
    }
    function m() {
      s.value[0].path[0] = e.position, n.value.setData(s.value), r.value = n.value.createPathNavigator(0, {
        speed: e.speed || 1e6,
        loop: !1,
        pathNavigatorStyle: {
          width: 32,
          height: 32,
          content: l.value.Render.Canvas.getImageContent(e.icon)
        }
      }), r.value.start();
    }
    function b() {
      let f = [];
      if (e.position[0].point && (f = e.position.map((k) => k.point)), e.position[0].length && (f = e.position), console.log(f, "historyStart"), f[0]) {
        let k = e.position[0].icon || e.icon;
        console.log(e.position, "historyStart"), s.value[0].path = f, n.value.setData(s.value), r.value = n.value.createPathNavigator(0, {
          loop: !1,
          speed: e.speed || 1e6,
          pathNavigatorStyle: {
            width: 32,
            height: 32,
            content: l.value.Render.Canvas.getImageContent(k)
          },
          getPath: function(d) {
            return d.path;
          }
        }), r.value.start(), r.value.on("move", C), n.value.off("pathClick pointClick", c);
      }
    }
    function h(f) {
      if (f.length) {
        var k = r.value.getCursor().clone(), d = r.value.getNaviStatus();
        s.value[0].path[0].length ? s.value[0].path.push(f) : s.value[0].path[0] = f, n.value.setData(s.value), r.value = n.value.createPathNavigator(0, {
          speed: e.speed || 1e6,
          pathNavigatorStyle: {
            width: 32,
            height: 32,
            content: l.value.Render.Canvas.getImageContent(e.icon)
          }
        }), r.value.on("move", C), d !== "stop" && r.value.start(), k.idx >= 0 && r.value.moveToPoint(k.idx, k.tail);
      }
    }
    function C(f, k) {
      let d = k.dataItem.pointIndex, w = r.value.getPosition();
      if (t.emit("moveing", [w.lng, w.lat]), e.model != "realTime") {
        if (!e.position[v.value].icon)
          return;
        if (v.value != d) {
          v.value = d;
          let S = r.value.getStyleOptions();
          S.content = l.value.Render.Canvas.getImageContent(e.position[v.value].icon), n.value.renderLater(200);
        }
      }
    }
    function c(f, k) {
      t.emit("pointClick", f, k);
    }
    function P(f) {
      !f[0] || O(f);
    }
    function O(f) {
      n.value ? e.model == "realTime" && (r.value ? h(f) : m()) : setTimeout(() => {
        e.model == "realTime" ? O(f) : O(null);
      }, 200);
    }
    function _(f, k) {
      !k || (r.value && F(), r.value = null, e.model == "realTime" && f && (s.value[0].path = [e.position], p()));
    }
    function I() {
      b();
    }
    function j() {
      r.value.pause();
    }
    function H() {
      r.value.resume();
    }
    function Z() {
      r.value.stop();
    }
    function F() {
      r.value.destroy();
    }
    return {
      start: I,
      pause: j,
      resume: H,
      stop: Z,
      destroy: F
    };
  },
  render() {
    return () => ie("div", { class: "MoveAnimation" }, "MoveAnimation");
  }
}, At = {
  name: "MoveAnimation",
  props: {
    lineArr: {
      type: Array,
      default() {
        return [];
      }
    },
    Icon: {
      type: String,
      default: null
    },
    size: {
      type: Array,
      default() {
        return [50, 50];
      }
    },
    offset: {
      type: Array,
      default() {
        return [-13, 0];
      }
    }
  },
  emits: ["moving", "pointClick"],
  setup(e, t) {
    const o = te("storeData"), { map: a } = o, n = g(), l = g(), i = g(e.lineArr);
    V(
      () => e.lineArr,
      r,
      { immediate: !0, deep: !0 }
    ), V(
      () => e.Icon,
      s,
      { immediate: !1, deep: !0 }
    );
    function r(P) {
      i.value = e.lineArr, P[0] && v();
    }
    function s(P) {
      n.value && n.value.setIcon(P);
    }
    function v() {
      window.AMap.plugin("AMap.MoveAnimation", function() {
        n.value && a.remove(n.value), n.value = new window.AMap.Marker({
          map: a,
          position: i.value[0],
          offset: e.offset,
          zIndex: 13
        }), n.value.setIcon(e.Icon), l.value = new window.AMap.Polyline({
          map: a,
          strokeColor: "#AF5",
          strokeWeight: 6,
          zIndex: 10,
          strokeOpacity: 0.8
        }), a.setFitView(), n.value.on("moving", p), n.value.on("click", u), n.value.on("movealong", m);
      });
    }
    function u(P) {
      t.emit("pointClick", P);
    }
    function p(P) {
      l.value.setPath(P.passedPath), t.emit("moving", P);
    }
    function m() {
      console.log("onmoveAlong");
    }
    function b(P) {
      c(), console.log(i.value.length, "lineArr"), n.value.moveAlong(i.value, {
        duration: 500,
        autoRotation: !0,
        ...P
      });
    }
    function h() {
      n.value.pauseMove();
    }
    function C() {
      n.value.resumeMove();
    }
    function c() {
      console.log("\u505C\u6B62\u52A8\u753B"), n.value && n.value.stopMove();
    }
    return {
      lineArr: i,
      startAnimation: b,
      pauseAnimation: h,
      resumeAnimation: C,
      stopAnimation: c,
      init: v
    };
  },
  render() {
  }
}, $t = {
  name: "EditPlugin",
  props: {
    type: {
      type: String,
      default: ""
    },
    edit: {
      type: Boolean,
      default: !1
    },
    overlayOptions: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["end"],
  setup(e, t) {
    const o = te("storeData"), { map: a } = o, n = g(""), l = g(), i = g();
    V(
      () => e.edit,
      u,
      { immediate: !0, deep: !0 }
    ), V(
      () => e.type,
      p,
      { immediate: !0, deep: !0 }
    );
    function r() {
      if (!n.value)
        return;
      let b = {};
      e.type == "rectangle" && (b.bounds = new window.AMap.Bounds(e.overlayOptions.southWest, e.overlayOptions.northEast)), l.value = new window.AMap[n.value]({
        ...e.overlayOptions,
        ...b
      }), l.value.setMap(a), e.edit && s();
    }
    function s() {
      if (!!n.value) {
        if (e.type == "marker")
          return l.value.setDraggable(!0);
        a.plugin(["AMap." + n.value + "Editor"], function() {
          i.value = new window.AMap[n.value + "Editor"](a, l.value), i.value.open(), i.value.on("end", v);
        });
      }
    }
    function v(b) {
      t.emit("end", b);
    }
    function u(b) {
      !e.type || (b ? l.value ? s() : r() : i.value && i.value.close());
    }
    function p(b) {
      if (m(), b) {
        let h = b.split("");
        h[0] = h[0].toUpperCase(), n.value = h.join(""), r();
      }
    }
    function m() {
      l.value && (a.remove(l.value), l.value = null), i.value && (i.value.close(), i.value.off("end", v), i.value = null);
    }
  },
  render() {
    return () => ie("div", { class: "EditPlugin" }, "EditPlugin");
  }
}, Pt = {
  host: localStorage.getItem("dev-Api") || "//web2.test.cvtsp.com/api",
  socketUrl: localStorage.getItem("socket-Api") || "//web2.test.cvtsp.com",
  staticServer: "//fs.cvtsp.com/",
  nodeUrl: "http://192.168.199.247:4000",
  nodeSocketUrl: "http://192.168.199.247:3000",
  switch: "shihang",
  title: "\u4E0A\u6D77\u52BF\u822A\u7F51\u7EDC\u79D1\u6280\u6709\u9650\u516C\u53F8",
  loginText: "",
  isAndroid: !0,
  isPc: !0,
  HomePage: "",
  publicSecurity: "\u6CAA\u516C\u7F51\u5B89\u5907 31011802003619\u53F7",
  ICPbeiAn: "\u6CAAICP \u590716025594\u53F7-6"
}, Qe = Pt.host, Oe = window.localStorage.getItem("token"), Ot = {
  token: Oe,
  Authorization: "Bearer " + Oe
};
function be({ url: e = "", method: t = "get", params: o = {} }) {
  let a = "?";
  for (const n in o)
    a += n + "=" + o[n] + "&";
  return fetch(Qe + e + a, {
    method: t,
    headers: Ot
  }).then((n) => n.json());
}
function Nt(e) {
  function t(o) {
    var { data: a, flag: n } = o;
    return e.iconsFilter && Array.isArray(a) ? (a.forEach((l) => {
      e.iconsFilter(l);
    }), a) : (Array.isArray(a) && a.forEach((l) => {
      switch (l.type) {
        case 1:
          return l.iconSkin = "company";
        case 2:
          return l.iconSkin = "organize";
        case 3:
          return l.iconSkin = "fleed";
        case 4:
          l.deviceTypeCode == 2 ? l.iconSkin = l.online ? "onlineCamera" : "unlineCamera" : l.iconSkin = l.online ? `${l.icon || "icon0"}car_online` : `${l.icon || "icon0"}car`;
          return;
        case 5:
          return l.iconSkin = "camera";
      }
    }), a);
  }
  return {
    lazy: Qe + e.lazy,
    type: e.type,
    headers: {
      token: localStorage.getItem("token"),
      Authorization: "Bearer " + localStorage.getItem("token")
    },
    autoParam: e.autoParam,
    otherParam: e.otherParam,
    name: e.name,
    isCheck: e.isCheck,
    showIcon: e.showIcon,
    isCopy: e.isCopy,
    isRemoveBtn: e.isRemoveBtn,
    isRenameBtn: e.isRenameBtn,
    isMove: e.isMove,
    nodeFilter: e.nodeFilter,
    isContextmenu: e.isContextmenu,
    isExpand: e.isExpand,
    isFreeze: e.isFreeze,
    hoverOperation: e.hoverOperation,
    iconsFilter: t
  };
}
function Lt(e, t) {
  var o = null;
  function a(l, i) {
    let r = [], s = [];
    const v = e.nodeFilter[0], u = e.nodeFilter[1];
    l[v] == u && s.push(l);
    let p = i.getNodesByParam(v, u, l);
    if (l.type == 5) {
      let b = i.getNodeByParam("id", l.pId);
      b.type = l.type, b.onlineStatus = l.online, b.clickChannel = l.text.split("CH")[1], p = [b];
    }
    s = p;
    let m = i.getCheckedNodes();
    for (let b = 0; b < m.length; b++)
      m[b][v] == u && r.push(m[b].id);
    t.emit("node-check", {
      checked: l.checked,
      treeNode: l,
      checkedListObj: s,
      allList: r
    });
  }
  function n(l, i) {
    let r = l.children;
    r && r.forEach((s) => {
      i.checkNode(s, !0, !0), !s.zAsync && i.reAsyncChildNodes(s, !0, !0);
    });
  }
  return {
    beforeClick(l, i) {
    },
    onClick(l, i, r) {
      l.stopPropagation();
      let s = this.getZTreeObj(i);
      o == r.tId ? (r.click = !1, o = null, s.cancelSelectedNode()) : (r.click = !0, o = r.tId), t.emit("node-click", {
        click: r.click,
        id: r.id,
        type: r.type,
        treeNode: r
      });
    },
    beforeCheck(l, i) {
      if (!i.checked && e.limitCheck)
        return e.limitCheck(i);
    },
    onCheck(l, i, r) {
      let s = this.getZTreeObj(i);
      if (r.checked)
        if (s.expandNode(r, !0, !1, !0), r.zAsync)
          r.isParent && n(r, s), a(r, s);
        else
          return;
      else
        a(r, s);
    },
    beforeRemove(l, i) {
    },
    beforeRename(l, i) {
    },
    onExpand(l, i, r) {
    },
    beforeAsync(l, i, r) {
      console.log("beforeAsync"), e.loading.value = !0;
    },
    onAsyncSuccess(l, i, r, s) {
      let v = this.getZTreeObj(i);
      r && r.checked && (v.checkNode(r, !0, !0), r.isParent && n(r, v), a(r, v)), e.loading.value = !1, t.emit("tree-ready", v);
    },
    onRightClick(l, i, r) {
      this.getZTreeObj(i).selectNode(r), t.emit("right-click", l, i, r);
    },
    onRename(l, i, r, s) {
    },
    onCollapse(l, i, r) {
    },
    beforeDrop(l, i, r, s) {
      return e.nodeBeforeDrop && e.nodeBeforeDrop(i, r), typeof e.limitDrop == "function" ? e.limitDrop(i, r, s) : !0;
    },
    onDrop(l, i, r, s, v, u) {
      typeof e.nodeDrop == "function" && e.nodeDrop(r, s);
    }
  };
}
const Y = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, n] of t)
    o[a] = n;
  return o;
}, Dt = U({
  name: "Tree",
  props: {
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      default: "text"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    isCheck: {
      type: Boolean,
      default: !1
    },
    isCopy: {
      default: !1
    },
    isEdit: {
      default: !1
    },
    isRemoveBtn: {
      default: !1
    },
    isRenameBtn: {
      default: !1
    },
    isMove: {
      default: !1
    },
    iconsFilter: {
      type: Function,
      default: null
    },
    isContextmenu: {
      type: Boolean,
      default: !1
    },
    isExpand: {
      type: Boolean,
      default: !0
    },
    isFreeze: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "get"
    },
    autoParam: {
      type: Array,
      default() {
        return ["id", "type"];
      }
    },
    otherParam: {
      type: Object,
      default() {
        return {};
      }
    },
    limitCheck: {
      type: Function,
      default() {
        return null;
      }
    },
    nodeFilter: {
      type: Array,
      default() {
        return ["type", 4];
      }
    },
    hoverOperation: {
      type: Function,
      default() {
        return () => {
        };
      }
    }
  },
  emits: ["tree-loaded", "node-click", "node-check", "right-click"],
  setup(e, t) {
    const o = g(), a = g(s()), n = g(), l = g(!0);
    le(() => {
      fe(() => {
        setTimeout(() => {
          i();
        }, 10);
      });
    });
    function i() {
      import("./base-tree.13c2d1f7.mjs").then((u) => {
        o.value = new u.default({
          el: a.value,
          options: Nt(e),
          methods: Lt({ ...e, loading: l }, t)
        }), Array.isArray(e.treeData) && e.lazy && r(e.treeData);
      });
    }
    function r(u, p = {}) {
      o.value.setInitialTree && o.value.setInitialTree(u, p), console.log("-----------tree-loaded---------1--------"), t.emit("tree-loaded", o.value.zTree);
    }
    function s() {
      return `tree${Math.floor(new Date().getTime() + Math.random() * 1e5)}`;
    }
    V(
      () => e.treeData,
      v
    );
    function v(u) {
      i();
    }
    return {
      treeId: a,
      tree: o,
      zTree: n,
      init: i,
      loading: l
    };
  }
}), Et = {
  class: "cv-ztree",
  ref: "tree"
}, zt = ["id"];
function Mt(e, t, o, a, n, l) {
  const i = N("el-scrollbar"), r = He("loading");
  return Q((y(), $("div", Et, [
    L(i, null, {
      default: A(() => [
        T("ul", { id: e.treeId }, null, 8, zt)
      ]),
      _: 1
    })
  ])), [
    [r, e.loading]
  ]);
}
const Bt = /* @__PURE__ */ Y(Dt, [["render", Mt]]);
const Vt = U({
  name: "TreeSearch",
  props: {
    currentValue: {
      default: null
    },
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      default: "text"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    isCheck: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: String,
      default: "/basic/tree/findVehicleTreeInfoList"
    },
    type: {
      type: String,
      default: "get"
    },
    autoParam: {
      type: Array,
      default() {
        return ["id", "type"];
      }
    },
    otherParam: {
      default() {
        return {};
      }
    },
    limitCheck: {
      type: Function,
      default() {
        return null;
      }
    },
    hoverOperation: {
      type: Function,
      default() {
        return () => {
        };
      }
    },
    open: {
      type: Boolean,
      default: !0
    },
    nodeFilter: {
      type: Array,
      default() {
        return ["type", 4];
      }
    },
    isLinkTree: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["clear", "node-click", "node-check", "tree-ready", "tree-loaded", "right-click"],
  setup(e, t) {
    const o = g(""), a = g(""), n = g(), l = g(e.treeData), i = g();
    function r() {
      const f = i.value, k = f.getNodes(), { childs: d, filterNodes: w } = s();
      k.forEach((E) => {
        const $e = E && E.children;
        $e && f.hideNodes($e);
      });
      let S = {};
      o.value == "" ? (t.emit("clear"), a.value = "", S = d) : S = w, f.showNodes(S), v(k, d);
    }
    function s(f = 1) {
      const k = i.value;
      let d = [];
      var w = k.getNodesByParamFuzzy(e.name, o.value);
      return o.value && w.forEach((S) => {
        let E = S;
        for (; E.level > f; )
          E = E.getParentNode(), E.open || k.expandNode(E, !0, !1, !1);
        d.push(E);
      }), {
        filterNodes: d,
        childs: w
      };
    }
    function v(f, k) {
      const d = i.value;
      d.transformToArray(
        f || d.getNodes()
      ).forEach((S) => {
        S.highlight = !1, d.updateNode(S);
      }), o.value != "" && k.forEach((S) => {
        S.highlight = !0, d.updateNode(S);
      });
    }
    function u(f) {
      a.value = o.value = f.treeNode[e.name], t.emit("node-click", f), e.open || (m.value = !1);
    }
    function p(f) {
      t.emit("node-check", f);
    }
    const m = g(e.open), b = g();
    function h() {
      e.open || (m.value = !0);
    }
    function C() {
      e.isLinkTree && (o.value = a.value), e.open || (b.value.blur(), m.value = !1);
    }
    function c(f) {
      i.value = f, console.log("search-----load"), n.value.loading = !1, e.currentValue && _(), t.emit("tree-loaded", f);
    }
    function P(f) {
      i.value = f, console.log("search-----ready"), e.currentValue && _(), t.emit("tree-ready", f);
    }
    V(
      () => e.currentValue,
      O,
      { immediate: !0, deep: !0 }
    ), V(() => e.treeData, (f) => {
      l.value = f;
    }, { immediate: !0, deep: !0 });
    function O(f) {
      f && i.value ? (a.value = o.value = "", _()) : a.value !== "" && i.value && (a.value = o.value = "", r());
    }
    function _() {
      let f = I();
      f && typeof f == "object" && (a.value = o.value = f[e.name], r());
    }
    function I(f, k) {
      const d = i.value;
      let w = f || "id", S = k || e.currentValue;
      return d.getNodeByParam(w, parseInt(S));
    }
    function j(f, k, d) {
      const w = i.value;
      if (f.length || w.checkAllNodes(!1), typeof d == "string") {
        let S = I("id", d);
        S && w.checkNode(S, k, !0);
      } else
        d.forEach((S) => {
          let E = I("id", S);
          E && w.checkNode(E, k, !0);
        });
    }
    function H(f) {
      const k = i.value, { id: d, isAttention: w, onlineStatus: S } = f, E = k.getNodeByParam("id", d);
      E && (E.isAttention = w, E.iconSkin = S ? `${E.icon || "icon0"}car_online` : `${E.icon || "icon0"}car`, E.online = !!S, k.updateNode(E));
    }
    function Z() {
      l.value = [];
    }
    function F(f, k, d) {
      t.emit("right-click", f, k, d);
    }
    return {
      baseTree: n,
      Input: b,
      mouseleave: C,
      inputValue: o,
      focus: h,
      fliterNode: r,
      isShowTree: m,
      nodeCheck: p,
      nodClick: u,
      treeLoaded: c,
      treeReady: P,
      getNodeByParam: I,
      changeCheckStates: j,
      upNodeIcon: H,
      loadTree: Z,
      treeSearchData: l,
      onRightClick: F
    };
  }
}), Ft = /* @__PURE__ */ T("span", { class: "cvIcon_search" }, null, -1);
function Rt(e, t, o, a, n, l) {
  const i = N("el-input"), r = N("tree");
  return y(), $("div", {
    class: M(e.open ? "treeSearch" : "treeSearch inputTree"),
    onMouseleave: t[1] || (t[1] = (...s) => e.mouseleave && e.mouseleave(...s))
  }, [
    L(i, {
      ref: "Input",
      modelValue: e.inputValue,
      "onUpdate:modelValue": t[0] || (t[0] = (s) => e.inputValue = s),
      clearable: "",
      onFocus: e.focus,
      onInput: e.fliterNode
    }, We({ _: 2 }, [
      e.isLinkTree ? void 0 : {
        name: "suffix",
        fn: A(() => [
          Ft
        ])
      }
    ]), 1032, ["modelValue", "onFocus", "onInput"]),
    Q(L(r, {
      ref: "baseTree",
      treeData: e.treeSearchData,
      lazy: e.lazy,
      autoParam: e.autoParam,
      otherParam: e.otherParam,
      isCheck: e.isCheck,
      name: e.name,
      showIcon: e.showIcon,
      "limit-check": e.limitCheck,
      hoverOperation: e.hoverOperation,
      nodeFilter: e.nodeFilter,
      onNodeCheck: e.nodeCheck,
      onNodeClick: e.nodClick,
      onTreeReady: e.treeReady,
      onTreeLoaded: e.treeLoaded,
      onRightClick: e.onRightClick
    }, null, 8, ["treeData", "lazy", "autoParam", "otherParam", "isCheck", "name", "showIcon", "limit-check", "hoverOperation", "nodeFilter", "onNodeCheck", "onNodeClick", "onTreeReady", "onTreeLoaded", "onRightClick"]), [
      [X, e.isShowTree]
    ])
  ], 34);
}
const jt = /* @__PURE__ */ Y(Vt, [["render", Rt]]);
const Ut = U({
  name: "InputLinkTree",
  props: {
    currentValue: {
      type: Object,
      required: !0,
      default() {
        return {
          enterpriseId: "",
          fleetId: ""
        };
      }
    },
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    lazy: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "text"
    },
    showIcon: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["current-change", "tree-loaded"],
  setup(e, t) {
    const o = g(), a = g(), n = g([]), l = g();
    g();
    const i = g({
      enterpriseId: "",
      pId: "",
      type: ""
    });
    V(() => e.currentValue, r, { immediate: !0, deep: !0 });
    function r(c) {
      o.value = e.currentValue.enterpriseId, a.value = e.currentValue.fleetId, c.enterpriseId && l.value && C();
    }
    const s = g();
    function v(c) {
      o.value = c.treeNode.id, a.value = "", C(c.treeNode), s.value = [c.treeNode.id, ""], t.emit("current-change", s.value);
    }
    function u(c) {
      s.value = [o.value, c.treeNode.id], a.value = c.treeNode.id, t.emit("current-change", s.value);
    }
    function p() {
      a.value = "", i.value = {
        enterpriseId: "0",
        pId: "0",
        type: "0"
      }, n.value = [], s.value = ["", ""], t.emit("current-change", s.value);
    }
    function m() {
      let c = [o.value, ""];
      s.value.join(",") != c.join(",") && (s.value = c, t.emit("current-change", s.value));
    }
    function b(c) {
      t.emit("tree-loaded", c);
    }
    function h(c) {
      t.emit("tree-ready", c);
    }
    function C(c = null) {
      let P = c || l.value.getNodeByParam("id", o.value);
      P && (i.value = P, n.value = []);
    }
    return {
      value1: o,
      nodeClick1: v,
      clear1: p,
      treeData2: n,
      value2: a,
      nodeClick2: u,
      clear2: m,
      treeSearch1: l,
      nodeSendArr: s,
      treeLoaded1: b,
      treeReady2: h,
      currentDATA1: i
    };
  }
}), Ht = { class: "inputLinkTree" };
function Wt(e, t, o, a, n, l) {
  const i = N("treeSearch"), r = N("el-form-item");
  return y(), $("div", Ht, [
    L(r, { label: "\u6240\u5C5E\u516C\u53F8" }, {
      default: A(() => [
        L(i, {
          treeData: e.treeData,
          name: e.name,
          currentValue: e.value1,
          open: !1,
          ref: "treeSearch1",
          onTreeLoaded: e.treeLoaded1,
          onNodeClick: e.nodeClick1,
          onClear: e.clear1,
          isLinkTree: !0
        }, null, 8, ["treeData", "name", "currentValue", "onTreeLoaded", "onNodeClick", "onClear"])
      ]),
      _: 1
    }),
    L(r, { label: "\u6240\u5C5E\u8F66\u7EC4" }, {
      default: A(() => [
        L(i, {
          lazy: e.lazy,
          name: e.name,
          treeData: e.treeData2,
          currentValue: e.value2,
          open: !1,
          isLinkTree: !0,
          onTreeReady: e.treeReady2,
          onNodeClick: e.nodeClick2,
          onClear: e.clear2,
          otherParam: { enterpriseId: e.currentDATA1.enterpriseId, pId: e.currentDATA1.id, type: e.currentDATA1.type }
        }, null, 8, ["lazy", "name", "treeData", "currentValue", "onTreeReady", "onNodeClick", "onClear", "otherParam"])
      ]),
      _: 1
    })
  ]);
}
const Kt = /* @__PURE__ */ Y(Ut, [["render", Wt]]);
function Gt(e) {
  return be(e);
}
function Zt(e) {
  return be({
    url: "/basic/vehicle/deleteVehicleAttentionInfo",
    params: {
      vehicleId: e
    },
    method: "DELETE"
  });
}
function Qt(e) {
  return be({
    url: "/basic/vehicle/insertVehicleAttentionInfo",
    params: e,
    method: "post"
  });
}
const qt = U({
  name: "TreeList",
  props: {
    ListApi: {
      type: String,
      default: ""
    },
    collectionApi: {
      type: String,
      default: "/basic/vehicle/insertVehicleAttentionInfo"
    },
    uncollectionApi: {
      type: String,
      default: "/basic/vehicle/deleteVehicleAttentionInfo"
    },
    isCheck: {
      type: Boolean,
      default: !0
    },
    isOnlineStatus: {
      type: Boolean,
      default: !0
    },
    isCollection: {
      type: Boolean,
      default: !0
    },
    isEdit: {
      type: Boolean,
      default: !1
    },
    isDelete: {
      type: Boolean,
      default: !1
    },
    selection: {
      type: Array,
      default() {
        return [
          { label: "plateCode", value: "plateCode" },
          { label: "enterpriseName", value: "enterpriseName" },
          { label: "fleetName", value: "fleetName" },
          { label: "terminalCode", value: "terminalCode" },
          { label: "carVin", value: "carVin" },
          { label: "mobileCode", value: "mobileCode" }
        ];
      }
    },
    onlinection: {
      type: Array,
      default() {
        return [
          { label: "\u5728\u7EBF", value: "1" },
          { label: "\u79BB\u7EBF", value: "0" }
        ];
      }
    },
    name: {
      type: String,
      default: "plateCode"
    },
    otherParam: {
      default() {
        return {};
      }
    },
    isVideo: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["current-change", "clcik_collection", "clcik_delete", "checked-list", "node-click", "node-check"],
  setup(e, t) {
    const o = oe({
      text: "",
      onlineStatus: [],
      selectionValue: e.selection[0].value,
      current: 1
    }), a = oe({
      total: 1e3,
      current: 1,
      size: 10
    }), n = K(() => {
      let f = a.total / 10;
      return Math.ceil(f);
    }), l = g([]), i = g(!1);
    _();
    function r() {
    }
    const s = oe({
      remark: "",
      row: {
        remark: "",
        id: "",
        isAttention: 1
      }
    }), v = g(!1), u = g(), p = g([]);
    function m(f, k) {
      k.clickChanneArr = [], t.emit("node-check", { type: f, data: [k] }), t.emit("current-change", f, k.id);
    }
    function b(f, k) {
      f.clickChannel = k;
      let d = f.clickChanneArr.includes(k);
      t.emit("node-check", { type: d, data: [f] });
    }
    function h(f, k) {
      return t.emit("clcik_collection", f, k);
    }
    function C(f, k) {
      return t.emit("clcik_collection", f, k);
    }
    function c(f) {
      return f.isAttention = 1, t.emit("clcik_delete", f);
    }
    const P = (f) => {
      p.value = f;
    };
    function O(f) {
      o.current = f, _();
    }
    function _(f) {
      i.value = !0;
      let k = o.onlineStatus.length == 1 ? o.onlineStatus[0] : "", d = {
        current: f ? 1 : o.current,
        [o.selectionValue]: o.text,
        onlineStatus: k,
        ...e.otherParam
      };
      I(d);
    }
    function I(f) {
      Gt({
        url: e.ListApi,
        method: "get",
        params: f
      }).then((k) => {
        if (i.value = !1, k.flag && k.data) {
          const { total: d, records: w, current: S } = k.data;
          l.value = w, a.total = d, a.current = S;
        } else
          l.value = [], a.total = 0, a.current = 0;
      });
    }
    const j = g();
    function H(f) {
      const { id: k, isAttention: d, onlineStatus: w } = f;
      l.value.some((S) => (S.id == k && (S.isAttention = Number(d), S.onlineStatus = w), S.id == k));
    }
    function Z(f, k) {
      l.value.forEach((d) => {
        d.id !== f.id ? (d.click = !1, d.clickChannel = 0) : d.click = !d.click;
      }), t.emit("node-click", f);
    }
    function F(f, k) {
      f.clickChannel = k, t.emit("node-click", f);
    }
    return {
      search: o,
      listsData: l,
      pagination: a,
      allPage: n,
      loading: i,
      handlerSearch: _,
      selectChange: r,
      clcik_collection: h,
      clcik_edit: C,
      clcik_delete: c,
      changeCheckStates: P,
      popover: s,
      popoverRef: u,
      buttonRef: j,
      showPopover: v,
      handlerCurrentChange: O,
      checkList: p,
      checkcheckboxChange: m,
      upNodeIcon: H,
      textClick: Z,
      clickCamera: F,
      clickChannecheckboxChange: b
    };
  }
}), Jt = { class: "treeList" }, Xt = { class: "onlineStatusCheck" }, Yt = { class: "text" }, xt = { class: "remark" }, en = {
  key: 0,
  class: "channelInfos"
}, tn = { class: "operation" }, nn = ["onClick"], on = ["onClick"], an = {
  key: 0,
  class: "cvIcon_delete"
}, ln = {
  key: 1,
  class: "radioGroup"
}, rn = { class: "content_text" }, sn = ["onClick"], un = { class: "remark" }, cn = {
  key: 1,
  class: "channelInfos"
}, dn = ["onClick"], fn = { class: "operation" }, pn = ["onClick"], vn = ["onClick"], mn = {
  key: 0,
  class: "cvIcon_delete"
}, hn = { class: "pagination" };
function gn(e, t, o, a, n, l) {
  const i = N("el-option"), r = N("el-select"), s = N("el-input"), v = N("el-checkbox"), u = N("el-checkbox-group"), p = N("el-tooltip"), m = N("el-popconfirm"), b = N("el-scrollbar"), h = N("el-pagination"), C = He("loading");
  return y(), $("div", Jt, [
    L(s, {
      modelValue: e.search.text,
      "onUpdate:modelValue": t[2] || (t[2] = (c) => e.search.text = c),
      class: "treeList-input",
      maxlength: 20,
      onKeyup: ut(e.handlerSearch, ["native", "enter"])
    }, {
      prepend: A(() => [
        L(r, {
          style: { width: "115px" },
          modelValue: e.search.selectionValue,
          "onUpdate:modelValue": t[0] || (t[0] = (c) => e.search.selectionValue = c),
          onChange: e.selectChange
        }, {
          default: A(() => [
            (y(!0), $(J, null, x(e.selection, (c, P) => (y(), B(i, {
              label: c.label,
              value: c.value,
              key: P
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "onChange"])
      ]),
      append: A(() => [
        T("span", {
          class: "cvIcon_search",
          onClick: t[1] || (t[1] = (c) => e.handlerSearch(!0))
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onKeyup"]),
    T("div", Xt, [
      e.isOnlineStatus ? (y(), B(u, {
        key: 0,
        modelValue: e.search.onlineStatus,
        "onUpdate:modelValue": t[3] || (t[3] = (c) => e.search.onlineStatus = c)
      }, {
        default: A(() => [
          (y(!0), $(J, null, x(e.onlinection, (c, P) => (y(), B(v, {
            label: c.value,
            key: P
          }, {
            default: A(() => [
              pe(R(c.label), 1)
            ]),
            _: 2
          }, 1032, ["label"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])) : z("", !0)
    ]),
    Q((y(), B(b, { class: "treeList-lists" }, {
      default: A(() => [
        e.isCheck ? (y(), B(u, {
          key: 0,
          modelValue: e.checkList,
          "onUpdate:modelValue": t[4] || (t[4] = (c) => e.checkList = c),
          class: "checkboxGroup"
        }, {
          default: A(() => [
            (y(!0), $(J, null, x(e.listsData, (c, P) => (y(), $("li", {
              key: P,
              class: "el-checkbox group_content"
            }, [
              L(v, {
                label: c.id,
                class: "content_text",
                onChange: (O) => e.checkcheckboxChange(O, c)
              }, {
                default: A(() => [
                  T("span", {
                    class: M(c.onlineStatus == "1" ? `${c.icon || "icon0"}car_online_ico_docu` : `${c.icon || "icon0"}car_ico_docu`)
                  }, null, 2),
                  T("span", Yt, R(c[e.name]), 1),
                  e.isCollection ? z("", !0) : (y(), B(p, {
                    key: 0,
                    effect: "dark",
                    content: c.remark,
                    placement: "top-start"
                  }, {
                    default: A(() => [
                      T("i", xt, R(c.remark), 1)
                    ]),
                    _: 2
                  }, 1032, ["content"]))
                ]),
                _: 2
              }, 1032, ["label", "onChange"]),
              e.isVideo && e.checkList.includes(c.id) ? (y(), $("div", en, [
                L(u, {
                  modelValue: c.clickChanneArr,
                  "onUpdate:modelValue": (O) => c.clickChanneArr = O
                }, {
                  default: A(() => [
                    (y(!0), $(J, null, x(c.channelInfos, (O, _) => (y(), B(v, {
                      class: "camera",
                      key: _,
                      label: _ + 1,
                      onChange: (I) => e.clickChannecheckboxChange(c, _ + 1)
                    }, {
                      default: A(() => [
                        T("p", null, [
                          T("span", {
                            class: M(c.onlineStatus == "1" ? "onlinecamera" : "unlinecamera")
                          }, null, 2),
                          T("span", {
                            class: M(["channe_text", c.clickChannel == _ + 1 ? "clickChanne" : ""])
                          }, "CH" + R(_ + 1), 3)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["label", "onChange"]))), 128))
                  ]),
                  _: 2
                }, 1032, ["modelValue", "onUpdate:modelValue"])
              ])) : z("", !0),
              T("p", tn, [
                e.isCollection ? (y(), $("span", {
                  key: 0,
                  class: M(c.isAttention ? "cvIcon_collection" : "cvIcon_uncollection"),
                  onClick: (O) => e.clcik_collection(O, c)
                }, null, 10, nn)) : z("", !0),
                e.isEdit ? (y(), $("span", {
                  key: 1,
                  class: "cvIcon_edit",
                  onClick: (O) => e.clcik_collection(O, c)
                }, null, 8, on)) : z("", !0),
                L(m, {
                  title: "\u60A8\u662F\u5426\u8981\u8FDB\u884C\u5220\u9664\u64CD\u4F5C",
                  onConfirm: (O) => e.clcik_delete(c)
                }, {
                  reference: A(() => [
                    e.isDelete ? (y(), $("span", an)) : z("", !0)
                  ]),
                  _: 2
                }, 1032, ["onConfirm"])
              ])
            ]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue"])) : (y(), $("div", ln, [
          (y(!0), $(J, null, x(e.listsData, (c, P) => (y(), $("div", {
            class: M(["group_content", c.click ? "text_active" : ""]),
            key: P
          }, [
            T("p", rn, [
              T("span", {
                class: M(c.onlineStatus == "1" ? `${c.icon || "icon0"}car_online_ico_docu` : `${c.icon || "icon0"}car_ico_docu`)
              }, null, 2),
              T("span", {
                class: "text",
                onClick: (O) => e.textClick(c, P)
              }, R(c[e.name]), 9, sn),
              e.isCollection ? z("", !0) : (y(), B(p, {
                key: 0,
                effect: "dark",
                content: c.remark,
                placement: "top-start"
              }, {
                default: A(() => [
                  T("i", un, R(c.remark), 1)
                ]),
                _: 2
              }, 1032, ["content"])),
              e.isVideo && c.click ? (y(), $("div", cn, [
                (y(!0), $(J, null, x(c.channelInfos, (O, _) => (y(), $("p", {
                  class: "camera",
                  onClick: (I) => e.clickCamera(c, _ + 1)
                }, [
                  T("span", {
                    class: M(c.onlineStatus == "1" ? "onlinecamera" : "unlinecamera")
                  }, null, 2),
                  T("span", {
                    class: M(["channe_text", c.clickChannel == _ + 1 ? "clickChanne" : ""])
                  }, "CH" + R(_ + 1), 3)
                ], 8, dn))), 256))
              ])) : z("", !0)
            ]),
            T("p", fn, [
              e.isCollection ? (y(), $("span", {
                key: 0,
                class: M(c.isAttention ? "cvIcon_collection" : "cvIcon_uncollection"),
                onClick: (O) => e.clcik_collection(O, c)
              }, null, 10, pn)) : z("", !0),
              e.isEdit ? (y(), $("span", {
                key: 1,
                class: "cvIcon_edit",
                onClick: (O) => e.clcik_collection(O, c)
              }, null, 8, vn)) : z("", !0),
              L(m, {
                title: "\u60A8\u662F\u5426\u8981\u8FDB\u884C\u5220\u9664\u64CD\u4F5C",
                onConfirm: (O) => e.clcik_delete(c)
              }, {
                reference: A(() => [
                  e.isDelete ? (y(), $("span", mn)) : z("", !0)
                ]),
                _: 2
              }, 1032, ["onConfirm"])
            ])
          ], 2))), 128))
        ]))
      ]),
      _: 1
    })), [
      [C, e.loading]
    ]),
    T("div", hn, [
      T("p", null, R(e.pagination.total) + "\u6761", 1),
      Q(L(h, {
        currentPage: e.pagination.current,
        "onUpdate:currentPage": t[5] || (t[5] = (c) => e.pagination.current = c),
        "page-size": e.pagination.size,
        layout: "prev, next",
        total: e.pagination.total,
        onCurrentChange: e.handlerCurrentChange
      }, null, 8, ["currentPage", "page-size", "total", "onCurrentChange"]), [
        [X, !!e.pagination.total]
      ]),
      Q(T("p", { class: "tabspan" }, R(e.pagination.current) + " / " + R(e.allPage), 513), [
        [X, !!e.pagination.total]
      ])
    ])
  ]);
}
const yn = /* @__PURE__ */ Y(qt, [["render", gn]]);
function kn(e) {
  for (var t = -1, o = e == null ? 0 : e.length, a = {}; ++t < o; ) {
    var n = e[t];
    a[n[0]] = n[1];
  }
  return a;
}
var Ne;
const re = typeof window < "u", ue = (e) => typeof e == "number", Cn = (e) => typeof e == "string", me = () => {
};
re && ((Ne = window == null ? void 0 : window.navigator) == null ? void 0 : Ne.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function qe(e) {
  return typeof e == "function" ? e() : D(e);
}
function _n(e) {
  return e;
}
function we(e) {
  return ct() ? (dt(e), !0) : !1;
}
function bn(e, t = !0) {
  _e() ? le(e) : t ? e() : fe(e);
}
function wn(e, t, o = {}) {
  const {
    immediate: a = !0
  } = o, n = g(!1);
  let l = null;
  function i() {
    l && (clearTimeout(l), l = null);
  }
  function r() {
    n.value = !1, i();
  }
  function s(...v) {
    i(), n.value = !0, l = setTimeout(() => {
      n.value = !1, l = null, e(...v);
    }, qe(t));
  }
  return a && (n.value = !0, re && s()), we(r), {
    isPending: n,
    start: s,
    stop: r
  };
}
function Je(e) {
  var t;
  const o = qe(e);
  return (t = o == null ? void 0 : o.$el) != null ? t : o;
}
const Xe = re ? window : void 0;
function Sn(...e) {
  let t, o, a, n;
  if (Cn(e[0]) ? ([o, a, n] = e, t = Xe) : [t, o, a, n] = e, !t)
    return me;
  let l = me;
  const i = V(() => Je(t), (s) => {
    l(), s && (s.addEventListener(o, a, n), l = () => {
      s.removeEventListener(o, a, n), l = me;
    });
  }, { immediate: !0, flush: "post" }), r = () => {
    i(), l();
  };
  return we(r), r;
}
function In(e, t = !1) {
  const o = g(), a = () => o.value = Boolean(e());
  return a(), bn(a, t), o;
}
const he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = "__vueuse_ssr_handlers__";
he[ge] = he[ge] || {};
he[ge];
var Le = Object.getOwnPropertySymbols, Tn = Object.prototype.hasOwnProperty, An = Object.prototype.propertyIsEnumerable, $n = (e, t) => {
  var o = {};
  for (var a in e)
    Tn.call(e, a) && t.indexOf(a) < 0 && (o[a] = e[a]);
  if (e != null && Le)
    for (var a of Le(e))
      t.indexOf(a) < 0 && An.call(e, a) && (o[a] = e[a]);
  return o;
};
function Pn(e, t, o = {}) {
  const a = o, { window: n = Xe } = a, l = $n(a, ["window"]);
  let i;
  const r = In(() => n && "ResizeObserver" in n), s = () => {
    i && (i.disconnect(), i = void 0);
  }, v = V(() => Je(e), (p) => {
    s(), r.value && n && p && (i = new ResizeObserver(t), i.observe(p, l));
  }, { immediate: !0, flush: "post" }), u = () => {
    s(), v();
  };
  return we(u), {
    isSupported: r,
    stop: u
  };
}
var De;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(De || (De = {}));
var On = Object.defineProperty, Ee = Object.getOwnPropertySymbols, Nn = Object.prototype.hasOwnProperty, Ln = Object.prototype.propertyIsEnumerable, ze = (e, t, o) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Dn = (e, t) => {
  for (var o in t || (t = {}))
    Nn.call(t, o) && ze(e, o, t[o]);
  if (Ee)
    for (var o of Ee(t))
      Ln.call(t, o) && ze(e, o, t[o]);
  return e;
};
const En = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Dn({
  linear: _n
}, En);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const zn = Object.prototype.hasOwnProperty, Me = (e, t) => zn.call(e, t), ye = (e) => typeof e == "function", ce = (e) => typeof e == "string", Ye = (e) => e !== null && typeof e == "object", Mn = (e) => e === void 0, Bn = (e) => typeof Element > "u" ? !1 : e instanceof Element, Be = (e) => Object.keys(e);
class Vn extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Se(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const o = ce(e) ? new Vn(`[${e}] ${t}`) : e;
    console.warn(o);
  }
}
const Fn = "utils/dom/style";
function Rn(e, t = "px") {
  if (!e)
    return "";
  if (ce(e))
    return e;
  if (ue(e))
    return `${e}${t}`;
  Se(Fn, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.10 */
var se = (e, t) => {
  let o = e.__vccOpts || e;
  for (let [a, n] of t)
    o[a] = n;
  return o;
}, jn = {
  name: "CircleCloseFilled"
}, Un = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Hn = /* @__PURE__ */ T("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), Wn = [
  Hn
];
function Kn(e, t, o, a, n, l) {
  return y(), $("svg", Un, Wn);
}
var xe = /* @__PURE__ */ se(jn, [["render", Kn], ["__file", "circle-close-filled.vue"]]), Gn = {
  name: "Close"
}, Zn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qn = /* @__PURE__ */ T("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), qn = [
  Qn
];
function Jn(e, t, o, a, n, l) {
  return y(), $("svg", Zn, qn);
}
var Xn = /* @__PURE__ */ se(Gn, [["render", Jn], ["__file", "close.vue"]]), Yn = {
  name: "InfoFilled"
}, xn = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, eo = /* @__PURE__ */ T("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), to = [
  eo
];
function no(e, t, o, a, n, l) {
  return y(), $("svg", xn, to);
}
var et = /* @__PURE__ */ se(Yn, [["render", no], ["__file", "info-filled.vue"]]), oo = {
  name: "SuccessFilled"
}, ao = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, lo = /* @__PURE__ */ T("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), io = [
  lo
];
function ro(e, t, o, a, n, l) {
  return y(), $("svg", ao, io);
}
var tt = /* @__PURE__ */ se(oo, [["render", ro], ["__file", "success-filled.vue"]]), so = {
  name: "WarningFilled"
}, uo = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, co = /* @__PURE__ */ T("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), fo = [
  co
];
function po(e, t, o, a, n, l) {
  return y(), $("svg", uo, fo);
}
var nt = /* @__PURE__ */ se(so, [["render", po], ["__file", "warning-filled.vue"]]);
const ot = "__epPropKey", ee = (e) => e, vo = (e) => Ye(e) && !!e[ot], at = (e, t) => {
  if (!Ye(e) || vo(e))
    return e;
  const { values: o, required: a, default: n, type: l, validator: i } = e, s = {
    type: l,
    required: !!a,
    validator: o || i ? (v) => {
      let u = !1, p = [];
      if (o && (p = Array.from(o), Me(e, "default") && p.push(n), u || (u = p.includes(v))), i && (u || (u = i(v))), !u && p.length > 0) {
        const m = [...new Set(p)].map((b) => JSON.stringify(b)).join(", ");
        ft(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(v)}.`);
      }
      return u;
    } : void 0,
    [ot]: !0
  };
  return Me(e, "default") && (s.default = n), s;
}, ve = (e) => kn(Object.entries(e).map(([t, o]) => [
  t,
  at(o, t)
])), mo = ee([
  String,
  Object,
  Function
]), ho = {
  Close: Xn,
  SuccessFilled: tt,
  InfoFilled: et,
  WarningFilled: nt,
  CircleCloseFilled: xe
}, Ve = {
  success: tt,
  warning: nt,
  error: xe,
  info: et
}, lt = (e, t) => {
  if (e.install = (o) => {
    for (const a of [e, ...Object.values(t != null ? t : {})])
      o.component(a.name, a);
  }, t)
    for (const [o, a] of Object.entries(t))
      e[o] = a;
  return e;
}, go = (e, t) => (e.install = (o) => {
  e._context = o._context, o.config.globalProperties[t] = e;
}, e), yo = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, ko = ["", "default", "small", "large"], Co = (e) => e, it = Symbol(), de = g();
function Ie(e, t = void 0) {
  const o = _e() ? te(it, de) : de;
  return e ? K(() => {
    var a, n;
    return (n = (a = o.value) == null ? void 0 : a[e]) != null ? n : t;
  }) : o;
}
const _o = (e, t, o = !1) => {
  var a;
  const n = !!_e(), l = n ? Ie() : void 0, i = (a = t == null ? void 0 : t.provide) != null ? a : n ? Ue : void 0;
  if (!i) {
    Se("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const r = K(() => {
    const s = D(e);
    return l != null && l.value ? bo(l.value, s) : s;
  });
  return i(it, r), (o || !de.value) && (de.value = r.value), r;
}, bo = (e, t) => {
  var o;
  const a = [.../* @__PURE__ */ new Set([...Be(e), ...Be(t)])], n = {};
  for (const l of a)
    n[l] = (o = t[l]) != null ? o : e[l];
  return n;
}, wo = at({
  type: String,
  values: ko,
  required: !1
}), So = "el", Io = "is-", ne = (e, t, o, a, n) => {
  let l = `${e}-${t}`;
  return o && (l += `-${o}`), a && (l += `__${a}`), n && (l += `--${n}`), l;
}, Te = (e) => {
  const t = Ie("namespace", So);
  return {
    namespace: t,
    b: (h = "") => ne(t.value, e, h, "", ""),
    e: (h) => h ? ne(t.value, e, "", h, "") : "",
    m: (h) => h ? ne(t.value, e, "", "", h) : "",
    be: (h, C) => h && C ? ne(t.value, e, h, C, "") : "",
    em: (h, C) => h && C ? ne(t.value, e, "", h, C) : "",
    bm: (h, C) => h && C ? ne(t.value, e, h, "", C) : "",
    bem: (h, C, c) => h && C && c ? ne(t.value, e, h, C, c) : "",
    is: (h, ...C) => {
      const c = C.length >= 1 ? C[0] : !0;
      return h && c ? `${Io}${h}` : "";
    },
    cssVar: (h) => {
      const C = {};
      for (const c in h)
        h[c] && (C[`--${t.value}-${c}`] = h[c]);
      return C;
    },
    cssVarName: (h) => `--${t.value}-${h}`,
    cssVarBlock: (h) => {
      const C = {};
      for (const c in h)
        h[c] && (C[`--${t.value}-${e}-${c}`] = h[c]);
      return C;
    },
    cssVarBlockName: (h) => `--${t.value}-${e}-${h}`
  };
}, Fe = g(0), To = () => {
  const e = Ie("zIndex", 2e3), t = K(() => e.value + Fe.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Fe.value++, t.value)
  };
};
var Ae = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, n] of t)
    o[a] = n;
  return o;
};
const Ao = ve({
  size: {
    type: ee([Number, String])
  },
  color: {
    type: String
  }
}), $o = U({
  name: "ElIcon",
  inheritAttrs: !1
}), Po = /* @__PURE__ */ U({
  ...$o,
  props: Ao,
  setup(e) {
    const t = e, o = Te("icon"), a = K(() => {
      const { size: n, color: l } = t;
      return !n && !l ? {} : {
        fontSize: Mn(n) ? void 0 : Rn(n),
        "--color": l
      };
    });
    return (n, l) => (y(), $("i", pt({
      class: D(o).b(),
      style: D(a)
    }, n.$attrs), [
      G(n.$slots, "default")
    ], 16));
  }
});
var Oo = /* @__PURE__ */ Ae(Po, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Re = lt(Oo), No = ve({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  }
}), Lo = ["textContent"], Do = U({
  name: "ElBadge"
}), Eo = /* @__PURE__ */ U({
  ...Do,
  props: No,
  setup(e, { expose: t }) {
    const o = e, a = Te("badge"), n = K(() => o.isDot ? "" : ue(o.value) && ue(o.max) ? o.max < o.value ? `${o.max}+` : `${o.value}` : `${o.value}`);
    return t({
      content: n
    }), (l, i) => (y(), $("div", {
      class: M(D(a).b())
    }, [
      G(l.$slots, "default"),
      L(Ke, {
        name: `${D(a).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: A(() => [
          Q(T("sup", {
            class: M([
              D(a).e("content"),
              D(a).em("content", l.type),
              D(a).is("fixed", !!l.$slots.default),
              D(a).is("dot", l.isDot)
            ]),
            textContent: R(D(n))
          }, null, 10, Lo), [
            [X, !l.hidden && (D(n) || l.isDot)]
          ])
        ]),
        _: 1
      }, 8, ["name"])
    ], 2));
  }
});
var zo = /* @__PURE__ */ Ae(Eo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);
const Mo = lt(zo), ke = {}, Bo = ve({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ee(Object)
  },
  size: wo,
  button: {
    type: ee(Object)
  },
  experimentalFeatures: {
    type: ee(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ee(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  }
});
U({
  name: "ElConfigProvider",
  props: Bo,
  setup(e, { slots: t }) {
    V(() => e.message, (a) => {
      Object.assign(ke, a != null ? a : {});
    }, { immediate: !0, deep: !0 });
    const o = _o(e);
    return () => G(t, "default", { config: o == null ? void 0 : o.value });
  }
});
const rt = ["success", "info", "warning", "error"], W = Co({
  customClass: "",
  center: !1,
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  offset: 16,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: re ? document.body : void 0
}), Vo = ve({
  customClass: {
    type: String,
    default: W.customClass
  },
  center: {
    type: Boolean,
    default: W.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: W.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: W.duration
  },
  icon: {
    type: mo,
    default: W.icon
  },
  id: {
    type: String,
    default: W.id
  },
  message: {
    type: ee([
      String,
      Object,
      Function
    ]),
    default: W.message
  },
  onClose: {
    type: ee(Function),
    required: !1
  },
  showClose: {
    type: Boolean,
    default: W.showClose
  },
  type: {
    type: String,
    values: rt,
    default: W.type
  },
  offset: {
    type: Number,
    default: W.offset
  },
  zIndex: {
    type: Number,
    default: W.zIndex
  },
  grouping: {
    type: Boolean,
    default: W.grouping
  },
  repeatNum: {
    type: Number,
    default: W.repeatNum
  }
}), Fo = {
  destroy: () => !0
}, q = vt([]), Ro = (e) => {
  const t = q.findIndex((n) => n.id === e), o = q[t];
  let a;
  return t > 0 && (a = q[t - 1]), { current: o, prev: a };
}, jo = (e) => {
  const { prev: t } = Ro(e);
  return t ? t.vm.exposed.bottom.value : 0;
}, Uo = ["id"], Ho = ["innerHTML"], Wo = U({
  name: "ElMessage"
}), Ko = /* @__PURE__ */ U({
  ...Wo,
  props: Vo,
  emits: Fo,
  setup(e, { expose: t }) {
    const o = e, { Close: a } = ho, n = Te("message"), l = g(), i = g(!1), r = g(0);
    let s;
    const v = K(() => o.type ? o.type === "error" ? "danger" : o.type : "info"), u = K(() => {
      const I = o.type;
      return { [n.bm("icon", I)]: I && Ve[I] };
    }), p = K(() => o.icon || Ve[o.type] || ""), m = K(() => jo(o.id)), b = K(() => o.offset + m.value), h = K(() => r.value + b.value), C = K(() => ({
      top: `${b.value}px`,
      zIndex: o.zIndex
    }));
    function c() {
      o.duration !== 0 && ({ stop: s } = wn(() => {
        O();
      }, o.duration));
    }
    function P() {
      s == null || s();
    }
    function O() {
      i.value = !1;
    }
    function _({ code: I }) {
      I === yo.esc && O();
    }
    return le(() => {
      c(), i.value = !0;
    }), V(() => o.repeatNum, () => {
      P(), c();
    }), Sn(document, "keydown", _), Pn(l, () => {
      r.value = l.value.getBoundingClientRect().height;
    }), t({
      visible: i,
      bottom: h,
      close: O
    }), (I, j) => (y(), B(Ke, {
      name: D(n).b("fade"),
      onBeforeLeave: I.onClose,
      onAfterLeave: j[0] || (j[0] = (H) => I.$emit("destroy")),
      persisted: ""
    }, {
      default: A(() => [
        Q(T("div", {
          id: I.id,
          ref_key: "messageRef",
          ref: l,
          class: M([
            D(n).b(),
            { [D(n).m(I.type)]: I.type && !I.icon },
            D(n).is("center", I.center),
            D(n).is("closable", I.showClose),
            I.customClass
          ]),
          style: Ge(D(C)),
          role: "alert",
          onMouseenter: P,
          onMouseleave: c
        }, [
          I.repeatNum > 1 ? (y(), B(D(Mo), {
            key: 0,
            value: I.repeatNum,
            type: D(v),
            class: M(D(n).e("badge"))
          }, null, 8, ["value", "type", "class"])) : z("v-if", !0),
          D(p) ? (y(), B(D(Re), {
            key: 1,
            class: M([D(n).e("icon"), D(u)])
          }, {
            default: A(() => [
              (y(), B(mt(D(p))))
            ]),
            _: 1
          }, 8, ["class"])) : z("v-if", !0),
          G(I.$slots, "default", {}, () => [
            I.dangerouslyUseHTMLString ? (y(), $(J, { key: 1 }, [
              z(" Caution here, message could've been compromised, never use user's input as message "),
              T("p", {
                class: M(D(n).e("content")),
                innerHTML: I.message
              }, null, 10, Ho)
            ], 2112)) : (y(), $("p", {
              key: 0,
              class: M(D(n).e("content"))
            }, R(I.message), 3))
          ]),
          I.showClose ? (y(), B(D(Re), {
            key: 2,
            class: M(D(n).e("closeBtn")),
            onClick: ht(O, ["stop"])
          }, {
            default: A(() => [
              L(D(a))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : z("v-if", !0)
        ], 46, Uo), [
          [X, i.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeLeave"]));
  }
});
var Go = /* @__PURE__ */ Ae(Ko, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);
let Zo = 1;
const st = (e) => {
  const t = !e || ce(e) || Ze(e) || ye(e) ? { message: e } : e, o = {
    ...W,
    ...t
  };
  if (!o.appendTo)
    o.appendTo = document.body;
  else if (ce(o.appendTo)) {
    let a = document.querySelector(o.appendTo);
    Bn(a) || (Se("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body."), a = document.body), o.appendTo = a;
  }
  return o;
}, Qo = (e) => {
  const t = q.indexOf(e);
  if (t === -1)
    return;
  q.splice(t, 1);
  const { handler: o } = e;
  o.close();
}, qo = ({ appendTo: e, ...t }, o) => {
  const { nextZIndex: a } = To(), n = `message_${Zo++}`, l = t.onClose, i = document.createElement("div"), r = {
    ...t,
    zIndex: a() + t.zIndex,
    id: n,
    onClose: () => {
      l == null || l(), Qo(p);
    },
    onDestroy: () => {
      Pe(null, i);
    }
  }, s = L(Go, r, ye(r.message) || Ze(r.message) ? {
    default: ye(r.message) ? r.message : () => r.message
  } : null);
  s.appContext = o || ae._context, Pe(s, i), e.appendChild(i.firstElementChild);
  const v = s.component, p = {
    id: n,
    vnode: s,
    vm: v,
    handler: {
      close: () => {
        v.exposed.visible.value = !1;
      }
    },
    props: s.component.props
  };
  return p;
}, ae = (e = {}, t) => {
  if (!re)
    return { close: () => {
    } };
  if (ue(ke.max) && q.length >= ke.max)
    return { close: () => {
    } };
  const o = st(e);
  if (o.grouping && q.length) {
    const n = q.find(({ vnode: l }) => {
      var i;
      return ((i = l.props) == null ? void 0 : i.message) === o.message;
    });
    if (n)
      return n.props.repeatNum += 1, n.props.type = o.type, n.handler;
  }
  const a = qo(o, t);
  return q.push(a), a.handler;
};
rt.forEach((e) => {
  ae[e] = (t = {}, o) => {
    const a = st(t);
    return ae({ ...a, type: e }, o);
  };
});
function Jo(e) {
  for (const t of q)
    (!e || e === t.props.type) && t.handler.close();
}
ae.closeAll = Jo;
ae._context = null;
const je = go(ae, "$message");
const Xo = U({
  name: "TreeTab",
  props: {
    titles: {
      type: Array,
      default() {
        return [
          "\u8F66\u8F86\u6811",
          "\u8F66\u8F86\u5217\u8868",
          "\u8F66\u8F86\u5173\u6CE8"
        ];
      }
    },
    selection: {
      type: Array,
      default() {
        return [
          { label: "plateCode", value: "plateCode" },
          { label: "enterpriseName", value: "enterpriseName" },
          { label: "fleetName", value: "fleetName" },
          { label: "terminalCode", value: "terminalCode" },
          { label: "carVin", value: "carVin" },
          { label: "mobileCode", value: "mobileCode" }
        ];
      }
    },
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    name: {
      type: String,
      default: "text"
    },
    vehicleListName: {
      type: String,
      default: "plateCode"
    },
    showIcon: {
      type: Boolean,
      default: !0
    },
    isCheck: {
      type: Boolean,
      default: !1
    },
    isOnlineStatus: {
      type: Boolean,
      default: !0
    },
    isCollection: {
      type: Boolean,
      default: !0
    },
    isVideo: {
      type: Boolean,
      default: !1
    },
    lazy: {
      type: String,
      default: "/basic/tree/findVehicleTreeInfoList"
    },
    type: {
      type: String,
      default: "get"
    },
    autoParam: {
      type: Array,
      default() {
        return ["id", "type"];
      }
    },
    otherParam: {
      default() {
        return {};
      }
    },
    vehicleListApi: {
      type: String,
      default: "/basic/tree/getVehicleListByPlate"
    },
    vehicleAttentionApi: {
      type: String,
      default: "/basic/vehicle/findVehicleAttentionInfoList"
    }
  },
  emits: ["checked-list", "node-click", "node-check", "tree-ready", "tree-loaded"],
  setup(e, t) {
    const o = g(), a = g(), n = g(), l = g("tab0");
    e.titles.some((d, w) => (d && (l.value = "tab" + w), d));
    var i = g([]);
    function r(d) {
      i.value = d;
    }
    function s(d, w) {
      if (d)
        i.value.push(w);
      else {
        let S = i.value.indexOf(w);
        i.value.splice(S, 1);
      }
      b(d, w);
    }
    function v(d) {
      t.emit("node-click", d);
    }
    function u(d) {
      let w = d.treeNode;
      if (d.treeNode && (d.treeNode.type == 4 && (w = d.treeNode, t.emit("node-click", w)), d.treeNode.type == 5)) {
        let S = o.value.getNodeByParam("id", d.treeNode.pId);
        d.treeNode.id = S.id, d.treeNode.vehicleId = S.id, d.treeNode.channelCount = S.channelCount, d.treeNode.onlineStatus = S.online, d.treeNode.deviceTypeCode = S.deviceTypeCode, d.treeNode.clickChannel = parseInt(d.treeNode.text.split("CH")[1]), w = d.treeNode, t.emit("node-click", w);
      }
    }
    function p(d) {
      let w = d.checkedListObj;
      if (i.value = i.value.concat(d.allList), !d.checked)
        for (let S = 0; S < d.checkedListObj.length; S++) {
          let E = i.value.indexOf(d.checkedListObj[S]);
          i.value.splice(E, 1);
        }
      console.log(i.value, "allCurrentIds.value"), i.value = Array.from(new Set(i.value)), t.emit("node-check", {
        type: d.checked,
        data: w
      }), h();
    }
    function m(d) {
      t.emit("node-check", {
        type: d.type,
        data: d.data
      });
    }
    function b(d, w) {
      h(), o.value && o.value.changeCheckStates(i.value, d, w);
    }
    function h() {
      a.value && a.value.changeCheckStates(i.value), n.value && n.value.changeCheckStates(i.value), t.emit("checked-list", i.value);
    }
    const C = g(), c = g(!1);
    function P(d) {
      if (d.type == 4)
        return {
          template: `<span id="${d.id}" class="${Number(d.isAttention) ? "cvIcon_collection" : "cvIcon_uncollection"}"
                         ></span>`,
          methods() {
            const w = document.getElementById(d.id);
            w && (w.onclick = (S) => {
              I(S, d);
            });
          }
        };
    }
    const O = oe({
      remark: ""
    }), _ = g();
    function I(d, w) {
      O.remark = w.remark, C.value = w, H(d);
    }
    function j(d) {
      C.value = d, H();
    }
    async function H(d) {
      d && d.stopPropagation();
      const { isAttention: w, id: S } = C.value;
      if (Number(w)) {
        const { flag: E } = await Zt(S);
        C.value.isAttention = 0, F(C.value), E && je({
          message: "\u5220\u9664\u6210\u529F",
          type: "success"
        });
      } else
        D(_).popperRef.triggerRef = d.target, c.value = !0;
    }
    async function Z() {
      const { flag: d } = await Qt({
        remark: O.remark,
        vehicleId: C.value.id
      });
      je({
        message: "\u64CD\u4F5C\u6210\u529F",
        type: "success"
      }), C.value.isAttention == 0 ? console.log("\u5173\u6CE8\u6210\u529F") : console.log("\u4FEE\u6539\u6210\u529F"), d && (c.value = !1, C.value.isAttention = 1, F(C.value));
    }
    function F(d) {
      let w = {
        id: d.vehicleId || d.id,
        isAttention: d.isAttention,
        onlineStatus: !!(d.messageText && d.messageText == "\u4E0A\u7EBF")
      };
      o.value && o.value.upNodeIcon(w), a.value && a.value.upNodeIcon(w), n.value && n.value.handlerSearch();
    }
    function f(d) {
      t.emit("tree-loaded", d);
    }
    function k(d) {
      t.emit("tree-ready", d);
    }
    return {
      activeName: l,
      currentChange: s,
      nodeClick: u,
      nodeClickList: v,
      nodeCheck: p,
      treeSearch: o,
      vehicleList: a,
      vehicleAttentionList: n,
      hoverOperation: P,
      currentTreeNode: C,
      showPopover: c,
      popover: O,
      popoverRefTab: _,
      node_collection: Z,
      collectionOnclick: I,
      collection_delete: j,
      nodeCheckList: m,
      checkedList: r,
      treeLoaded: f,
      treeReady: k
    };
  }
}), Yo = { class: "TreeTab" }, xo = { style: { "text-align": "right" } };
function ea(e, t, o, a, n, l) {
  const i = N("treeSearch"), r = N("el-tab-pane"), s = N("treeList"), v = N("el-tabs"), u = N("el-input"), p = N("el-popover");
  return y(), $("div", Yo, [
    L(v, {
      type: "border-card",
      modelValue: e.activeName,
      "onUpdate:modelValue": t[0] || (t[0] = (m) => e.activeName = m)
    }, {
      default: A(() => [
        e.titles[0] ? (y(), B(r, {
          key: 0,
          label: e.titles[0],
          name: "tab0"
        }, {
          default: A(() => [
            L(i, {
              ref: "treeSearch",
              name: e.name,
              treeData: e.treeData,
              lazy: e.lazy,
              autoParam: e.autoParam,
              otherParam: e.otherParam,
              isCheck: e.isCheck,
              isCollection: e.isCollection,
              onTreeLoaded: e.treeLoaded,
              onTreeReady: e.treeReady,
              hoverOperation: e.isCollection && e.hoverOperation,
              onNodeClick: e.nodeClick,
              onNodeCheck: e.nodeCheck
            }, null, 8, ["name", "treeData", "lazy", "autoParam", "otherParam", "isCheck", "isCollection", "onTreeLoaded", "onTreeReady", "hoverOperation", "onNodeClick", "onNodeCheck"])
          ]),
          _: 1
        }, 8, ["label"])) : z("", !0),
        e.titles[1] ? (y(), B(r, {
          key: 1,
          label: e.titles[1],
          name: "tab1"
        }, {
          default: A(() => [
            L(s, {
              isVideo: e.isVideo,
              ListApi: e.vehicleListApi,
              ref: "vehicleList",
              name: e.vehicleListName,
              otherParam: e.otherParam,
              isCheck: e.isCheck,
              isCollection: e.isCollection,
              selection: e.selection,
              isOnlineStatus: e.isOnlineStatus,
              onClcik_collection: e.collectionOnclick,
              onCurrentChange: e.currentChange,
              onNodeClick: e.nodeClickList,
              onNodeCheck: e.nodeCheckList,
              onCheckedList: e.checkedList
            }, null, 8, ["isVideo", "ListApi", "name", "otherParam", "isCheck", "isCollection", "selection", "isOnlineStatus", "onClcik_collection", "onCurrentChange", "onNodeClick", "onNodeCheck", "onCheckedList"])
          ]),
          _: 1
        }, 8, ["label"])) : z("", !0),
        e.titles[2] ? (y(), B(r, {
          key: 2,
          label: e.titles[2],
          name: "tab2"
        }, {
          default: A(() => [
            L(s, {
              isVideo: e.isVideo,
              ListApi: e.vehicleAttentionApi,
              ref: "vehicleAttentionList",
              name: e.vehicleListName,
              otherParam: e.otherParam,
              isCheck: e.isCheck,
              isCollection: !1,
              isEdit: !0,
              isDelete: !0,
              selection: e.selection,
              isOnlineStatus: e.isOnlineStatus,
              onClcik_collection: e.collectionOnclick,
              onClcik_delete: e.collection_delete,
              onCurrentChange: e.currentChange,
              onNodeClick: e.nodeClickList,
              onNodeCheck: e.nodeCheckList,
              onCheckedList: e.checkedList
            }, null, 8, ["isVideo", "ListApi", "name", "otherParam", "isCheck", "selection", "isOnlineStatus", "onClcik_collection", "onClcik_delete", "onCurrentChange", "onNodeClick", "onNodeCheck", "onCheckedList"])
          ]),
          _: 1
        }, 8, ["label"])) : z("", !0)
      ]),
      _: 1
    }, 8, ["modelValue"]),
    e.isCollection ? (y(), B(p, {
      key: 0,
      ref: "popoverRefTab",
      visible: e.showPopover,
      trigger: "click",
      title: "\u5907\u6CE8",
      "virtual-triggering": ""
    }, {
      default: A(() => [
        L(u, {
          clearable: "",
          modelValue: e.popover.remark,
          "onUpdate:modelValue": t[1] || (t[1] = (m) => e.popover.remark = m),
          maxlength: 50
        }, null, 8, ["modelValue"]),
        T("div", xo, [
          T("span", {
            class: "el-button el-button--text",
            onClick: t[2] || (t[2] = (m) => e.showPopover = !1)
          }, "\u53D6\u6D88"),
          T("span", {
            class: "el-button el-button--text",
            onClick: t[3] || (t[3] = (...m) => e.node_collection && e.node_collection(...m))
          }, "\u786E\u5B9A")
        ])
      ]),
      _: 1
    }, 8, ["visible"])) : z("", !0)
  ]);
}
const ta = /* @__PURE__ */ Y(Xo, [["render", ea]]);
const na = U({
  name: "PublicTreeContent",
  props: {
    treeData: {
      type: Array,
      default() {
        return [];
      }
    },
    lazy: {
      type: String,
      default: "/basic/tree/findVehicleTreeInfoList"
    },
    name: {
      type: String,
      default: "text"
    },
    isCheck: {
      type: Boolean,
      default: !1
    },
    autoParam: {
      type: Array,
      default() {
        return ["id", "type"];
      }
    },
    otherParam: {
      default() {
        return {};
      }
    },
    isVideo: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["checked-list", "node-click", "node-check", "tree-ready", "tree-loaded"],
  setup(e, t) {
    const o = g(!0);
    function a() {
      o.value = !o.value;
    }
    function n(s) {
      t.emit("node-click", s);
    }
    function l(s) {
      t.emit("node-check", s);
    }
    function i(s) {
      t.emit("checked-list", s);
    }
    function r(s) {
      t.emit("tree-ready", s);
    }
    return {
      treeReady: r,
      treeState: o,
      changeTreeStates: a,
      nodeClick: n,
      nodeCheck: l,
      checkedList: i
    };
  }
}), oa = { class: "publictreeContent" };
function aa(e, t, o, a, n, l) {
  const i = N("el-button"), r = N("treeTab");
  return y(), $("div", oa, [
    T("div", {
      class: M(["container", e.treeState ? "containeropen" : "containerclose"])
    }, [
      G(e.$slots, "default"),
      G(e.$slots, "main")
    ], 2),
    T("div", {
      class: M(["aside", e.treeState ? "asideopen" : "asideclose"])
    }, [
      L(i, {
        class: "jiantou",
        onClick: e.changeTreeStates
      }, {
        default: A(() => [
          T("span", {
            class: M(e.treeState ? "cvIcon-jiantouLeft" : "cvIcon-jiantouRight")
          }, null, 2)
        ]),
        _: 1
      }, 8, ["onClick"]),
      L(r, {
        isVideo: e.isVideo,
        treeData: e.treeData,
        lazy: e.lazy,
        isCheck: e.isCheck,
        autoParam: e.autoParam,
        otherParam: e.otherParam,
        onNodeClick: e.nodeClick,
        onNodeCheck: e.nodeCheck,
        onCheckedList: e.checkedList,
        onTreeReady: e.treeReady,
        onTreeLoaded: e.treeLoaded
      }, null, 8, ["isVideo", "treeData", "lazy", "isCheck", "autoParam", "otherParam", "onNodeClick", "onNodeCheck", "onCheckedList", "onTreeReady", "onTreeLoaded"])
    ], 2)
  ]);
}
const la = /* @__PURE__ */ Y(na, [["render", aa]]);
const ia = U({
  name: "Operation",
  props: {
    span: {
      type: Array,
      default() {
        return [16, 8];
      }
    },
    isSearch: {
      type: Boolean,
      default: !0
    },
    searchLoading: {
      type: Boolean,
      default: !1
    },
    powerTool: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  setup(e, t) {
    const o = g(!1);
    function a() {
      o.value = !o.value;
    }
    function n(l) {
      t.emit(l);
    }
    return {
      flag: o,
      showItem: a,
      bottonClick: n
    };
  }
}), ra = /* @__PURE__ */ pe(" \u641C\u7D22 "), sa = { class: "slotBtn" };
function ua(e, t, o, a, n, l) {
  const i = N("el-col"), r = N("el-button"), s = N("OpretionTool"), v = N("el-form-item"), u = N("el-row"), p = N("el-form");
  return y(), B(p, {
    inline: !0,
    class: "Operation",
    "label-position": "right",
    "label-width": "80px"
  }, {
    default: A(() => [
      L(u, null, {
        default: A(() => [
          L(i, {
            span: e.$slots.default ? e.span[0] : 0
          }, {
            default: A(() => [
              G(e.$slots, "default")
            ]),
            _: 3
          }, 8, ["span"]),
          L(i, {
            style: { "text-align": "right", height: "55px" },
            span: e.$slots.default ? e.span[1] : 24
          }, {
            default: A(() => [
              L(v, { class: "buttonForm" }, {
                default: A(() => [
                  e.$slots.header ? (y(), $("span", {
                    key: 0,
                    class: "el-button el-button--text toggle",
                    onClick: t[0] || (t[0] = (...m) => e.showItem && e.showItem(...m))
                  }, R(e.flag ? "\u6536\u8D77" : "\u5C55\u5F00"), 1)) : z("", !0),
                  e.isSearch ? (y(), B(r, {
                    key: 1,
                    class: "toggle",
                    onClick: t[1] || (t[1] = (m) => e.bottonClick("search")),
                    type: "primary",
                    loading: e.searchLoading
                  }, {
                    default: A(() => [
                      ra
                    ]),
                    _: 1
                  }, 8, ["loading"])) : z("", !0),
                  L(s, {
                    powerTool: e.powerTool,
                    onBottonClick: e.bottonClick
                  }, null, 8, ["powerTool", "onBottonClick"]),
                  T("div", sa, [
                    G(e.$slots, "button")
                  ])
                ]),
                _: 3
              })
            ]),
            _: 3
          }, 8, ["span"])
        ]),
        _: 3
      }),
      L(u, null, {
        default: A(() => [
          e.flag ? G(e.$slots, "header", { key: 0 }) : z("", !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
const ca = /* @__PURE__ */ Y(ia, [["render", ua]]);
const da = U({
  name: "OpretionTool",
  props: {
    powerTool: {
      type: Array,
      default() {
        return [];
      }
    },
    Heard: {
      type: Boolean,
      default: !0
    }
  },
  setup(e, t) {
    const o = g(""), a = g([]), n = g([]);
    e.Heard ? a.value = e.powerTool.map((u) => r(u)) : (a.value = e.powerTool.map((u) => s(u)), v());
    function l(u) {
      e.Heard ? t.emit("bottonClick", u) : t.emit(u);
    }
    function i(u) {
      return e.Heard ? r(u) : s(u);
    }
    function r(u) {
      let p = {
        type: "",
        text: "",
        fun: u
      };
      switch (u) {
        case "add":
          p.text = "\u6DFB\u52A0";
          break;
        case "import":
          p.text = "\u5BFC\u5165";
          break;
        case "export":
          p.text = "\u5BFC\u51FA";
          break;
      }
      return p;
    }
    function s(u) {
      let p = {
        type: "text",
        text: "",
        fun: u
      };
      switch (u) {
        case "look":
          p.text = "\u67E5\u770B";
          break;
        case "modify":
          p.text = "\u4FEE\u6539";
          break;
        case "remove":
          p.text = "\u5220\u9664", p.type = "red";
          break;
      }
      return p;
    }
    function v() {
      e.powerTool.forEach((u) => {
        switch (u) {
          case "resend":
            n.value[3] = u;
            break;
          case "modifycomp":
            n.value[4] = u;
            break;
          case "modifyplat":
            n.value[5] = u;
            break;
          case "sendAdd":
            n.value[6] = u;
            break;
          case "sendEdit":
            n.value[7] = u;
            break;
          case "sendDown":
            n.value[8] = u;
            break;
          case "reset":
            n.value[9] = u;
            break;
          case "deactivate":
            n.value[10] = u;
            break;
          case "offline":
            n.value[11] = u;
            break;
          case "unbind":
            n.value[12] = u;
            break;
          case "deviceinfo":
            n.value[13] = u;
            break;
          case "logout":
            n.value[14] = u;
            break;
          case "bound":
            n.value[15] = u;
            break;
          case "unbound":
            n.value[16] = u;
            break;
          case "apply":
            n.value[17] = u;
            break;
          case "processAlarm":
            n.value[18] = u;
            break;
          case "removeAlarm":
            n.value[19] = u;
            break;
        }
      }), n.value = n.value.filter((u) => u);
    }
    return {
      type: o,
      bottonClick: l,
      getText: i,
      ToolList: a,
      pxToolList: n
    };
  }
}), fa = (e) => (gt("data-v-468a3bbc"), e = e(), yt(), e), pa = { class: "opretionTool" }, va = /* @__PURE__ */ fa(() => /* @__PURE__ */ T("span", { class: "el-button el-button--text el-dropdown-link" }, [
  /* @__PURE__ */ T("pre", null, [
    /* @__PURE__ */ pe(" \u66F4\u591A"),
    /* @__PURE__ */ T("span", { class: "iconfont icon-arrow-down" })
  ])
], -1));
function ma(e, t, o, a, n, l) {
  const i = N("el-button"), r = N("el-dropdown");
  return y(), $("div", pa, [
    (y(!0), $(J, null, x(e.ToolList, (s) => Q((y(), B(i, {
      class: M(e.Heard ? "" : "el-button--text"),
      style: Ge({ color: s.type }),
      onClick: (v) => e.bottonClick(s.fun)
    }, {
      default: A(() => [
        pe(R(s.text), 1)
      ]),
      _: 2
    }, 1032, ["class", "style", "onClick"])), [
      [X, s.text]
    ])), 256)),
    Q(L(r, null, {
      dropdown: A(() => [
        G(e.$slots, "button", { pxToolList: e.pxToolList }, void 0, !0)
      ]),
      default: A(() => [
        va
      ]),
      _: 3
    }, 512), [
      [X, !e.Heard && e.powerTool.length > 3]
    ])
  ]);
}
const ha = /* @__PURE__ */ Y(da, [["render", ma], ["__scopeId", "data-v-468a3bbc"]]);
const ga = U({
  name: "Grid",
  props: {
    data: {
      type: [Object, Array],
      default() {
        return {
          records: []
        };
      }
    },
    renderArr: {
      type: Array,
      default() {
        return [];
      }
    },
    selection: {
      type: Boolean,
      default: !1
    },
    expandKeyID: {
      type: String,
      default: "id"
    }
  },
  emits: ["row-click", "selection-change", "loadTable", "expand-change"],
  setup(e, t) {
    const o = g(), a = g([]), n = g([]), l = oe([]), i = oe({
      current: 1,
      total: 0,
      pages: 0,
      size: 10
    });
    V(
      () => e.data,
      r,
      { immediate: !0, deep: !0 }
    );
    function r(_) {
      _.records ? a.value = _.records : a.value = _, a.value.length ? n.value = [].concat(a.value) : n.value = [], i.total = _.total || 0, i.pages = _.pages || 0, i.current = _.current || 1, i.size = _.size || 10;
    }
    function s(_, I) {
      let j = I.property;
      l[j] = _, n.value = a.value.filter(
        (H) => {
          let Z = [];
          for (const F in l) {
            let f = l[F] ? H[F].includes(l[F]) : !0;
            Z.push(f);
          }
          return !Z.includes(!1);
        }
      );
    }
    function v(_) {
      return p(_.prop, _.filtertext);
    }
    function u(_, I, j) {
      const H = j.property;
      return I[H] === _;
    }
    function p(_, I) {
      if (!a.value.length)
        return;
      let j = new Set(a.value.map((F) => F[_]));
      return Array.from(j).map((F) => I ? I(F) : { text: F, value: F });
    }
    function m() {
      t.emit("row-click", ...arguments);
    }
    function b() {
      t.emit("selection-change", ...arguments);
    }
    function h(_) {
      t.emit("loadTable", {
        current: i.current,
        size: _
      });
    }
    function C(_) {
      t.emit("loadTable", {
        current: _,
        size: i.size
      });
    }
    const c = g();
    function P(_, I) {
      t.emit("expand-change", ...arguments), c.value = [], I.length ? c.value.push(String(_[e.expandKeyID])) : c.value = [];
    }
    function O(_) {
      return _[e.expandKeyID];
    }
    return {
      table: o,
      tableData: a,
      filters: v,
      addFilters: p,
      nodefilters: u,
      filterTableData: n,
      input_textChange: s,
      columnList: l,
      pagination: i,
      rowClick: m,
      selectionChange: b,
      sizeChange: h,
      currentChange: C,
      expandChange: P,
      expands: c,
      rowKey: O
    };
  }
}), ya = { class: "grid" }, ka = ["onMouseenter"], Ca = {
  key: 0,
  class: "pagination"
}, _a = { style: { "line-height": "30px" } };
function ba(e, t, o, a, n, l) {
  const i = N("el-table-column"), r = N("el-input"), s = N("el-table"), v = N("el-pagination");
  return y(), $("div", ya, [
    T("div", {
      class: M(["boxTable", e.pagination.pages ? "havePagin" : ""])
    }, [
      L(s, {
        data: e.filterTableData,
        ref: "table",
        onRowClick: e.rowClick,
        onSelectionChange: e.selectionChange,
        onExpandChange: e.expandChange,
        "highlight-current-row": "",
        "expand-row-keys": e.expands,
        "row-key": e.rowKey
      }, {
        default: A(() => [
          e.selection ? (y(), B(i, {
            key: 0,
            type: "selection"
          })) : z("", !0),
          G(e.$slots, "default"),
          (y(!0), $(J, null, x(e.renderArr, (u) => (y(), B(i, {
            align: "center",
            showOverflowTooltip: "",
            key: u.prop,
            label: u.label,
            prop: u.prop,
            "min-width": u.width || 100,
            "header-align": "center",
            sortable: u.sortable || !1,
            formatter: u.formatter || null,
            filters: u.filter ? u.filters ? u.filters(u) : e.filters(u) : null,
            "filter-method": u.filter ? e.nodefilters : null
          }, We({ _: 2 }, [
            u.filter_input ? {
              name: "header",
              fn: A(({ column: p }) => [
                Q(T("span", {
                  onMouseenter: (m) => p.show = !0
                }, R(p.property), 41, ka), [
                  [X, !p.show]
                ]),
                Q(L(r, {
                  class: "inputFilter",
                  onMouseleave: (m) => p.show = !1,
                  modelValue: p.input_text,
                  "onUpdate:modelValue": (m) => p.input_text = m,
                  size: "small",
                  onInput: (m) => e.input_textChange(m, p),
                  clearable: "",
                  placeholder: "Type to search"
                }, null, 8, ["onMouseleave", "modelValue", "onUpdate:modelValue", "onInput"]), [
                  [X, p.show]
                ])
              ])
            } : void 0
          ]), 1032, ["label", "prop", "min-width", "sortable", "formatter", "filters", "filter-method"]))), 128)),
          G(e.$slots, "opertion")
        ]),
        _: 3
      }, 8, ["data", "onRowClick", "onSelectionChange", "onExpandChange", "expand-row-keys", "row-key"])
    ], 2),
    e.pagination.total > 10 ? (y(), $("div", Ca, [
      L(v, {
        background: "",
        onSizeChange: e.sizeChange,
        onCurrentChange: e.currentChange,
        layout: "total, jumper, sizes, prev, next",
        total: e.pagination.total,
        currentPage: e.pagination.current,
        "onUpdate:currentPage": t[0] || (t[0] = (u) => e.pagination.current = u),
        "page-size": e.pagination.size,
        "onUpdate:page-size": t[1] || (t[1] = (u) => e.pagination.size = u)
      }, null, 8, ["onSizeChange", "onCurrentChange", "total", "currentPage", "page-size"]),
      T("span", _a, R(e.pagination.current) + "/" + R(e.pagination.pages), 1)
    ])) : z("", !0)
  ]);
}
const wa = /* @__PURE__ */ Y(ga, [["render", ba]]), Ce = {
  Map: _t,
  Marker: bt,
  Liner: wt,
  InfoWindow: St,
  MouseTool: It,
  PathSimplifierIns: Tt,
  MoveAnimation: At,
  EditPlugin: $t,
  Tree: Bt,
  TreeSearch: jt,
  InputLinkTree: Kt,
  TreeList: yn,
  TreeTab: ta,
  PublicTreeContent: la,
  Operation: ca,
  OpretionTool: ha,
  Grid: wa
}, Sa = function(e) {
  for (var t in Ce)
    e.component(t, Ce[t]);
};
let Ia = {
  version: "0.0.08",
  install: Sa,
  ...Ce
};
console.log(Ia, "moduleComponent2");
export {
  Ia as default
};
