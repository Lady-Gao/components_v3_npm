/*!
 * jQuery JavaScript Library v1.5.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Mar 31 15:28:23 2011 -0400
 */
(function(J, j) {
  function Ne(t) {
    return e.isWindow(t) ? t : t.nodeType === 9 ? t.defaultView || t.parentWindow : !1;
  }
  function ve(t) {
    if (!yt[t]) {
      var r = e("<" + t + ">").appendTo("body"), a = r.css("display");
      r.remove(), (a === "none" || a === "") && (a = "block"), yt[t] = a;
    }
    return yt[t];
  }
  function Se(t, r) {
    var a = {};
    return e.each(Yt.concat.apply([], Yt.slice(0, r)), function() {
      a[this] = t;
    }), a;
  }
  function Oe() {
    try {
      return new J.ActiveXObject("Microsoft.XMLHTTP");
    } catch {
    }
  }
  function We() {
    try {
      return new J.XMLHttpRequest();
    } catch {
    }
  }
  function He() {
    e(J).unload(function() {
      for (var t in Xe)
        Xe[t](0, 1);
    });
  }
  function $e(t, r) {
    t.dataFilter && (r = t.dataFilter(r, t.dataType));
    var a = t.dataTypes, s = {}, u, f, y = a.length, b, I = a[0], g, L, W, X, q;
    for (u = 1; u < y; u++) {
      if (u === 1)
        for (f in t.converters)
          typeof f == "string" && (s[f.toLowerCase()] = t.converters[f]);
      if (g = I, I = a[u], I === "*")
        I = g;
      else if (g !== "*" && g !== I) {
        if (L = g + " " + I, W = s[L] || s["* " + I], !W) {
          q = j;
          for (X in s)
            if (b = X.split(" "), (b[0] === g || b[0] === "*") && (q = s[b[1] + " " + I], q)) {
              X = s[X], X === !0 ? W = q : q === !0 && (W = X);
              break;
            }
        }
        !W && !q && e.error("No conversion from " + L.replace(" ", " to ")), W !== !0 && (r = W ? W(r) : q(X(r)));
      }
    }
    return r;
  }
  function Ge(t, r, a) {
    var s = t.contents, u = t.dataTypes, f = t.responseFields, y, b, I, g;
    for (b in f)
      b in a && (r[f[b]] = a[b]);
    for (; u[0] === "*"; )
      u.shift(), y === j && (y = t.mimeType || r.getResponseHeader("content-type"));
    if (y) {
      for (b in s)
        if (s[b] && s[b].test(y)) {
          u.unshift(b);
          break;
        }
    }
    if (u[0] in a)
      I = u[0];
    else {
      for (b in a) {
        if (!u[0] || t.converters[b + " " + u[0]]) {
          I = b;
          break;
        }
        g || (g = b);
      }
      I = I || g;
    }
    if (I)
      return I !== u[0] && u.unshift(I), a[I];
  }
  function ee(t, r, a, s) {
    if (e.isArray(r) && r.length)
      e.each(r, function(f, y) {
        a || St.test(t) ? s(t, y) : ee(t + "[" + (typeof y == "object" || e.isArray(y) ? f : "") + "]", y, a, s);
      });
    else if (a || r == null || typeof r != "object")
      s(t, r);
    else if (e.isArray(r) || e.isEmptyObject(r))
      s(t, "");
    else
      for (var u in r)
        ee(t + "[" + u + "]", r[u], a, s);
  }
  function oe(t, r, a, s, u, f) {
    u = u || r.dataTypes[0], f = f || {}, f[u] = !0;
    for (var y = t[u], b = 0, I = y ? y.length : 0, g = t === nt, L; b < I && (g || !L); b++)
      L = y[b](r, a, s), typeof L == "string" && (!g || f[L] ? L = j : (r.dataTypes.unshift(L), L = oe(t, r, a, s, L, f)));
    return (g || !L) && !f["*"] && (L = oe(t, r, a, s, "*", f)), L;
  }
  function te(t) {
    return function(r, a) {
      if (typeof r != "string" && (a = r, r = "*"), e.isFunction(a))
        for (var s = r.toLowerCase().split(mt), u = 0, f = s.length, y, b, I; u < f; u++)
          y = s[u], I = /^\+/.test(y), I && (y = y.substr(1) || "*"), b = t[y] = t[y] || [], b[I ? "unshift" : "push"](a);
    };
  }
  function x(t, r, a) {
    var s = r === "width" ? Ct : kt, u = r === "width" ? t.offsetWidth : t.offsetHeight;
    return a === "border" || e.each(s, function() {
      a || (u -= parseFloat(e.css(t, "padding" + this)) || 0), a === "margin" ? u += parseFloat(e.css(t, "margin" + this)) || 0 : u -= parseFloat(e.css(t, "border" + this + "Width")) || 0;
    }), u;
  }
  function de(t, r) {
    r.src ? e.ajax({ url: r.src, async: !1, dataType: "script" }) : e.globalEval(r.text || r.textContent || r.innerHTML || ""), r.parentNode && r.parentNode.removeChild(r);
  }
  function be(t) {
    return "getElementsByTagName" in t ? t.getElementsByTagName("*") : "querySelectorAll" in t ? t.querySelectorAll("*") : [];
  }
  function B(t, r) {
    if (r.nodeType === 1) {
      var a = r.nodeName.toLowerCase();
      r.clearAttributes(), r.mergeAttributes(t), a === "object" ? r.outerHTML = t.outerHTML : a !== "input" || t.type !== "checkbox" && t.type !== "radio" ? a === "option" ? r.selected = t.defaultSelected : (a === "input" || a === "textarea") && (r.defaultValue = t.defaultValue) : (t.checked && (r.defaultChecked = r.checked = t.checked), r.value !== t.value && (r.value = t.value)), r.removeAttribute(e.expando);
    }
  }
  function S(t, r) {
    if (r.nodeType === 1 && e.hasData(t)) {
      var a = e.expando, s = e.data(t), u = e.data(r, s);
      if (s = s[a]) {
        var f = s.events;
        if (u = u[a] = e.extend({}, s), f) {
          delete u.handle, u.events = {};
          for (var y in f)
            for (var b = 0, I = f[y].length; b < I; b++)
              e.event.add(r, y + (f[y][b].namespace ? "." : "") + f[y][b].namespace, f[y][b], f[y][b].data);
        }
      }
    }
  }
  function P(t, r) {
    return e.nodeName(t, "table") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
  }
  function w(t, r, a) {
    if (e.isFunction(r))
      return e.grep(t, function(u, f) {
        var y = !!r.call(u, f, u);
        return y === a;
      });
    if (r.nodeType)
      return e.grep(t, function(u, f) {
        return u === r === a;
      });
    if (typeof r == "string") {
      var s = e.grep(t, function(u) {
        return u.nodeType === 1;
      });
      if (gt.test(r))
        return e.filter(r, s, !a);
      r = e.filter(r, s);
    }
    return e.grep(t, function(u, f) {
      return e.inArray(u, r) >= 0 === a;
    });
  }
  function v(t) {
    return !t || !t.parentNode || t.parentNode.nodeType === 11;
  }
  function n(t, r) {
    return (t && t !== "*" ? t + "." : "") + r.replace(Le, "`").replace(V, "&");
  }
  function i(t) {
    var r, a, s, u, f, y, b, I, g, L, W, X, q = [], re = [], ce = e._data(this, "events");
    if (t.liveFired !== this && ce && ce.live && !t.target.disabled && (!t.button || t.type !== "click")) {
      t.namespace && (W = new RegExp("(^|\\.)" + t.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), t.liveFired = this;
      var fe = ce.live.slice(0);
      for (b = 0; b < fe.length; b++)
        f = fe[b], f.origType.replace(Ce, "") === t.type ? re.push(f.selector) : fe.splice(b--, 1);
      for (u = e(t.target).closest(re, t.currentTarget), I = 0, g = u.length; I < g; I++)
        for (L = u[I], b = 0; b < fe.length; b++)
          f = fe[b], L.selector === f.selector && (!W || W.test(f.namespace)) && !L.elem.disabled && (y = L.elem, s = null, (f.preType === "mouseenter" || f.preType === "mouseleave") && (t.type = f.preType, s = e(t.relatedTarget).closest(f.selector)[0]), (!s || s !== y) && q.push({ elem: y, handleObj: f, level: L.level }));
      for (I = 0, g = q.length; I < g && (u = q[I], !(a && u.level > a || (t.currentTarget = u.elem, t.data = u.handleObj.data, t.handleObj = u.handleObj, X = u.handleObj.origHandler.apply(u.elem, arguments), (X === !1 || t.isPropagationStopped()) && (a = u.level, X === !1 && (r = !1), t.isImmediatePropagationStopped())))); I++)
        ;
      return r;
    }
  }
  function l(t, r, a) {
    var s = e.extend({}, a[0]);
    s.type = t, s.originalEvent = {}, s.liveFired = j, e.event.handle.call(r, s), s.isDefaultPrevented() && a[0].preventDefault();
  }
  function c() {
    return !0;
  }
  function C() {
    return !1;
  }
  function m(t) {
    for (var r in t)
      if (r !== "toJSON")
        return !1;
    return !0;
  }
  function h(t, r, a) {
    if (a === j && t.nodeType === 1)
      if (a = t.getAttribute("data-" + r), typeof a == "string") {
        try {
          a = a === "true" ? !0 : a === "false" ? !1 : a === "null" ? null : e.isNaN(a) ? T.test(a) ? e.parseJSON(a) : a : parseFloat(a);
        } catch {
        }
        e.data(t, r, a);
      } else
        a = j;
    return a;
  }
  var o = J.document, e = function() {
    function t() {
      if (!r.isReady) {
        try {
          o.documentElement.doScroll("left");
        } catch {
          setTimeout(t, 1);
          return;
        }
        r.ready();
      }
    }
    var r = function(k, M) {
      return new r.fn.init(k, M, u);
    }, a = J.jQuery, s = J.$, u, f = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/, y = /\S/, b = /^\s+/, I = /\s+$/, g = /\d/, L = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, W = /^[\],:{}\s]*$/, X = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, re = /(?:^|:|,)(?:\s*\[)+/g, ce = /(webkit)[ \/]([\w.]+)/, fe = /(opera)(?:.*version)?[ \/]([\w.]+)/, _e = /(msie) ([\w.]+)/, p = /(mozilla)(?:.*? rv:([\w.]+))?/, N = navigator.userAgent, F, _, O, D = Object.prototype.toString, U = Object.prototype.hasOwnProperty, G = Array.prototype.push, K = Array.prototype.slice, ne = String.prototype.trim, Te = Array.prototype.indexOf, xe = {};
    return r.fn = r.prototype = { constructor: r, init: function(k, M, Y) {
      var z, le, pe, ge;
      if (!k)
        return this;
      if (k.nodeType)
        return this.context = this[0] = k, this.length = 1, this;
      if (k === "body" && !M && o.body)
        return this.context = o, this[0] = o.body, this.selector = "body", this.length = 1, this;
      if (typeof k == "string") {
        if (z = f.exec(k), !z || !z[1] && M)
          return !M || M.jquery ? (M || Y).find(k) : this.constructor(M).find(k);
        if (z[1])
          return M = M instanceof r ? M[0] : M, ge = M ? M.ownerDocument || M : o, pe = L.exec(k), pe ? r.isPlainObject(M) ? (k = [o.createElement(pe[1])], r.fn.attr.call(k, M, !0)) : k = [ge.createElement(pe[1])] : (pe = r.buildFragment([z[1]], [ge]), k = (pe.cacheable ? r.clone(pe.fragment) : pe.fragment).childNodes), r.merge(this, k);
        if (le = o.getElementById(z[2]), le && le.parentNode) {
          if (le.id !== z[2])
            return Y.find(k);
          this.length = 1, this[0] = le;
        }
        return this.context = o, this.selector = k, this;
      }
      return r.isFunction(k) ? Y.ready(k) : (k.selector !== j && (this.selector = k.selector, this.context = k.context), r.makeArray(k, this));
    }, selector: "", jquery: "1.5.2", length: 0, size: function() {
      return this.length;
    }, toArray: function() {
      return K.call(this, 0);
    }, get: function(k) {
      return k == null ? this.toArray() : k < 0 ? this[this.length + k] : this[k];
    }, pushStack: function(k, M, Y) {
      var z = this.constructor();
      return r.isArray(k) ? G.apply(z, k) : r.merge(z, k), z.prevObject = this, z.context = this.context, M === "find" ? z.selector = this.selector + (this.selector ? " " : "") + Y : M && (z.selector = this.selector + "." + M + "(" + Y + ")"), z;
    }, each: function(k, M) {
      return r.each(this, k, M);
    }, ready: function(k) {
      return r.bindReady(), _.done(k), this;
    }, eq: function(k) {
      return k === -1 ? this.slice(k) : this.slice(k, +k + 1);
    }, first: function() {
      return this.eq(0);
    }, last: function() {
      return this.eq(-1);
    }, slice: function() {
      return this.pushStack(K.apply(this, arguments), "slice", K.call(arguments).join(","));
    }, map: function(k) {
      return this.pushStack(r.map(this, function(M, Y) {
        return k.call(M, Y, M);
      }));
    }, end: function() {
      return this.prevObject || this.constructor(null);
    }, push: G, sort: [].sort, splice: [].splice }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function() {
      var k, M, Y, z, le, pe, ge = arguments[0] || {}, Ue = 1, et = arguments.length, Wt = !1;
      for (typeof ge == "boolean" && (Wt = ge, ge = arguments[1] || {}, Ue = 2), typeof ge != "object" && !r.isFunction(ge) && (ge = {}), et === Ue && (ge = this, --Ue); Ue < et; Ue++)
        if ((k = arguments[Ue]) != null)
          for (M in k)
            Y = ge[M], z = k[M], ge !== z && (Wt && z && (r.isPlainObject(z) || (le = r.isArray(z))) ? (le ? (le = !1, pe = Y && r.isArray(Y) ? Y : []) : pe = Y && r.isPlainObject(Y) ? Y : {}, ge[M] = r.extend(Wt, pe, z)) : z !== j && (ge[M] = z));
      return ge;
    }, r.extend({ noConflict: function(k) {
      return J.$ = s, k && (J.jQuery = a), r;
    }, isReady: !1, readyWait: 1, ready: function(k) {
      if (k === !0 && r.readyWait--, !r.readyWait || k !== !0 && !r.isReady) {
        if (!o.body)
          return setTimeout(r.ready, 1);
        if (r.isReady = !0, k !== !0 && --r.readyWait > 0)
          return;
        _.resolveWith(o, [r]), r.fn.trigger && r(o).trigger("ready").unbind("ready");
      }
    }, bindReady: function() {
      if (!_) {
        if (_ = r._Deferred(), o.readyState === "complete")
          return setTimeout(r.ready, 1);
        if (o.addEventListener)
          o.addEventListener("DOMContentLoaded", O, !1), J.addEventListener("load", r.ready, !1);
        else if (o.attachEvent) {
          o.attachEvent("onreadystatechange", O), J.attachEvent("onload", r.ready);
          var k = !1;
          try {
            k = J.frameElement == null;
          } catch {
          }
          o.documentElement.doScroll && k && t();
        }
      }
    }, isFunction: function(k) {
      return r.type(k) === "function";
    }, isArray: Array.isArray || function(k) {
      return r.type(k) === "array";
    }, isWindow: function(k) {
      return k && typeof k == "object" && "setInterval" in k;
    }, isNaN: function(k) {
      return k == null || !g.test(k) || isNaN(k);
    }, type: function(k) {
      return k == null ? String(k) : xe[D.call(k)] || "object";
    }, isPlainObject: function(k) {
      if (!k || r.type(k) !== "object" || k.nodeType || r.isWindow(k) || k.constructor && !U.call(k, "constructor") && !U.call(k.constructor.prototype, "isPrototypeOf"))
        return !1;
      var M;
      for (M in k)
        ;
      return M === j || U.call(k, M);
    }, isEmptyObject: function(k) {
      for (var M in k)
        return !1;
      return !0;
    }, error: function(k) {
      throw k;
    }, parseJSON: function(k) {
      if (typeof k != "string" || !k)
        return null;
      if (k = r.trim(k), W.test(k.replace(X, "@").replace(q, "]").replace(re, "")))
        return J.JSON && J.JSON.parse ? J.JSON.parse(k) : new Function("return " + k)();
      r.error("Invalid JSON: " + k);
    }, parseXML: function(k, M, Y) {
      return J.DOMParser ? (Y = new DOMParser(), M = Y.parseFromString(k, "text/xml")) : (M = new ActiveXObject("Microsoft.XMLDOM"), M.async = "false", M.loadXML(k)), Y = M.documentElement, (!Y || !Y.nodeName || Y.nodeName === "parsererror") && r.error("Invalid XML: " + k), M;
    }, noop: function() {
    }, globalEval: function(k) {
      if (k && y.test(k)) {
        var M = o.head || o.getElementsByTagName("head")[0] || o.documentElement, Y = o.createElement("script");
        r.support.scriptEval() ? Y.appendChild(o.createTextNode(k)) : Y.text = k, M.insertBefore(Y, M.firstChild), M.removeChild(Y);
      }
    }, nodeName: function(k, M) {
      return k.nodeName && k.nodeName.toUpperCase() === M.toUpperCase();
    }, each: function(k, M, Y) {
      var z, le = 0, pe = k.length, ge = pe === j || r.isFunction(k);
      if (Y)
        if (ge) {
          for (z in k)
            if (M.apply(k[z], Y) === !1)
              break;
        } else
          for (; le < pe && M.apply(k[le++], Y) !== !1; )
            ;
      else if (ge) {
        for (z in k)
          if (M.call(k[z], z, k[z]) === !1)
            break;
      } else
        for (var Ue = k[0]; le < pe && M.call(Ue, le, Ue) !== !1; Ue = k[++le])
          ;
      return k;
    }, trim: ne ? function(k) {
      return k == null ? "" : ne.call(k);
    } : function(k) {
      return k == null ? "" : (k + "").replace(b, "").replace(I, "");
    }, makeArray: function(k, M) {
      var Y = M || [];
      if (k != null) {
        var z = r.type(k);
        k.length == null || z === "string" || z === "function" || z === "regexp" || r.isWindow(k) ? G.call(Y, k) : r.merge(Y, k);
      }
      return Y;
    }, inArray: function(k, M) {
      if (M.indexOf)
        return M.indexOf(k);
      for (var Y = 0, z = M.length; Y < z; Y++)
        if (M[Y] === k)
          return Y;
      return -1;
    }, merge: function(k, M) {
      var Y = k.length, z = 0;
      if (typeof M.length == "number")
        for (var le = M.length; z < le; z++)
          k[Y++] = M[z];
      else
        for (; M[z] !== j; )
          k[Y++] = M[z++];
      return k.length = Y, k;
    }, grep: function(k, M, Y) {
      var z = [], le;
      Y = !!Y;
      for (var pe = 0, ge = k.length; pe < ge; pe++)
        le = !!M(k[pe], pe), Y !== le && z.push(k[pe]);
      return z;
    }, map: function(k, M, Y) {
      for (var z = [], le, pe = 0, ge = k.length; pe < ge; pe++)
        le = M(k[pe], pe, Y), le != null && (z[z.length] = le);
      return z.concat.apply([], z);
    }, guid: 1, proxy: function(k, M, Y) {
      return arguments.length === 2 && (typeof M == "string" ? (Y = k, k = Y[M], M = j) : M && !r.isFunction(M) && (Y = M, M = j)), !M && k && (M = function() {
        return k.apply(Y || this, arguments);
      }), k && (M.guid = k.guid = k.guid || M.guid || r.guid++), M;
    }, access: function(k, M, Y, z, le, pe) {
      var ge = k.length;
      if (typeof M == "object") {
        for (var Ue in M)
          r.access(k, Ue, M[Ue], z, le, Y);
        return k;
      }
      if (Y !== j) {
        z = !pe && z && r.isFunction(Y);
        for (var et = 0; et < ge; et++)
          le(k[et], M, z ? Y.call(k[et], et, le(k[et], M)) : Y, pe);
        return k;
      }
      return ge ? le(k[0], M) : j;
    }, now: function() {
      return new Date().getTime();
    }, uaMatch: function(k) {
      k = k.toLowerCase();
      var M = ce.exec(k) || fe.exec(k) || _e.exec(k) || k.indexOf("compatible") < 0 && p.exec(k) || [];
      return { browser: M[1] || "", version: M[2] || "0" };
    }, sub: function() {
      function k(Y, z) {
        return new k.fn.init(Y, z);
      }
      r.extend(!0, k, this), k.superclass = this, k.fn = k.prototype = this(), k.fn.constructor = k, k.subclass = this.subclass, k.fn.init = function(Y, z) {
        return z && z instanceof r && !(z instanceof k) && (z = k(z)), r.fn.init.call(this, Y, z, M);
      }, k.fn.init.prototype = k.fn;
      var M = k(o);
      return k;
    }, browser: {} }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(k, M) {
      xe["[object " + M + "]"] = M.toLowerCase();
    }), F = r.uaMatch(N), F.browser && (r.browser[F.browser] = !0, r.browser.version = F.version), r.browser.webkit && (r.browser.safari = !0), Te && (r.inArray = function(k, M) {
      return Te.call(M, k);
    }), y.test(" ") && (b = /^[\s\xA0]+/, I = /[\s\xA0]+$/), u = r(o), o.addEventListener ? O = function() {
      o.removeEventListener("DOMContentLoaded", O, !1), r.ready();
    } : o.attachEvent && (O = function() {
      o.readyState === "complete" && (o.detachEvent("onreadystatechange", O), r.ready());
    }), r;
  }(), d = "then done fail isResolved isRejected promise".split(" "), E = [].slice;
  e.extend({ _Deferred: function() {
    var t = [], r, a, s, u = { done: function() {
      if (!s) {
        var f = arguments, y, b, I, g, L;
        for (r && (L = r, r = 0), y = 0, b = f.length; y < b; y++)
          I = f[y], g = e.type(I), g === "array" ? u.done.apply(u, I) : g === "function" && t.push(I);
        L && u.resolveWith(L[0], L[1]);
      }
      return this;
    }, resolveWith: function(f, y) {
      if (!s && !r && !a) {
        y = y || [], a = 1;
        try {
          for (; t[0]; )
            t.shift().apply(f, y);
        } finally {
          r = [f, y], a = 0;
        }
      }
      return this;
    }, resolve: function() {
      return u.resolveWith(this, arguments), this;
    }, isResolved: function() {
      return a || r;
    }, cancel: function() {
      return s = 1, t = [], this;
    } };
    return u;
  }, Deferred: function(t) {
    var r = e._Deferred(), a = e._Deferred(), s;
    return e.extend(r, { then: function(u, f) {
      return r.done(u).fail(f), this;
    }, fail: a.done, rejectWith: a.resolveWith, reject: a.resolve, isRejected: a.isResolved, promise: function(u) {
      if (u == null) {
        if (s)
          return s;
        s = u = {};
      }
      for (var f = d.length; f--; )
        u[d[f]] = r[d[f]];
      return u;
    } }), r.done(a.cancel).fail(r.cancel), delete r.cancel, t && t.call(r, r), r;
  }, when: function(t) {
    function r(b) {
      return function(I) {
        a[b] = arguments.length > 1 ? E.call(arguments, 0) : I, --f || y.resolveWith(y, E.call(a, 0));
      };
    }
    var a = arguments, s = 0, u = a.length, f = u, y = u <= 1 && t && e.isFunction(t.promise) ? t : e.Deferred();
    if (u > 1) {
      for (; s < u; s++)
        a[s] && e.isFunction(a[s].promise) ? a[s].promise().then(r(s), y.reject) : --f;
      f || y.resolveWith(y, a);
    } else
      y !== t && y.resolveWith(y, u ? [t] : []);
    return y.promise();
  } }), function() {
    e.support = {};
    var t = o.createElement("div");
    t.style.display = "none", t.innerHTML = "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
    var r = t.getElementsByTagName("*"), a = t.getElementsByTagName("a")[0], s = o.createElement("select"), u = s.appendChild(o.createElement("option")), f = t.getElementsByTagName("input")[0];
    if (r && r.length && a) {
      e.support = { leadingWhitespace: t.firstChild.nodeType === 3, tbody: !t.getElementsByTagName("tbody").length, htmlSerialize: !!t.getElementsByTagName("link").length, style: /red/.test(a.getAttribute("style")), hrefNormalized: a.getAttribute("href") === "/a", opacity: /^0.55$/.test(a.style.opacity), cssFloat: !!a.style.cssFloat, checkOn: f.value === "on", optSelected: u.selected, deleteExpando: !0, optDisabled: !1, checkClone: !1, noCloneEvent: !0, noCloneChecked: !0, boxModel: null, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableHiddenOffsets: !0, reliableMarginRight: !0 }, f.checked = !0, e.support.noCloneChecked = f.cloneNode(!0).checked, s.disabled = !0, e.support.optDisabled = !u.disabled;
      var y = null;
      e.support.scriptEval = function() {
        if (y === null) {
          var g = o.documentElement, L = o.createElement("script"), W = "script" + e.now();
          try {
            L.appendChild(o.createTextNode("window." + W + "=1;"));
          } catch {
          }
          g.insertBefore(L, g.firstChild), J[W] ? (y = !0, delete J[W]) : y = !1, g.removeChild(L);
        }
        return y;
      };
      try {
        delete t.test;
      } catch {
        e.support.deleteExpando = !1;
      }
      !t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function g() {
        e.support.noCloneEvent = !1, t.detachEvent("onclick", g);
      }), t.cloneNode(!0).fireEvent("onclick")), t = o.createElement("div"), t.innerHTML = "<input type='radio' name='radiotest' checked='checked'/>";
      var b = o.createDocumentFragment();
      b.appendChild(t.firstChild), e.support.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, e(function() {
        var g = o.createElement("div"), L = o.getElementsByTagName("body")[0];
        if (L) {
          g.style.width = g.style.paddingLeft = "1px", L.appendChild(g), e.boxModel = e.support.boxModel = g.offsetWidth === 2, "zoom" in g.style && (g.style.display = "inline", g.style.zoom = 1, e.support.inlineBlockNeedsLayout = g.offsetWidth === 2, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", e.support.shrinkWrapBlocks = g.offsetWidth !== 2), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
          var W = g.getElementsByTagName("td");
          e.support.reliableHiddenOffsets = W[0].offsetHeight === 0, W[0].style.display = "", W[1].style.display = "none", e.support.reliableHiddenOffsets = e.support.reliableHiddenOffsets && W[0].offsetHeight === 0, g.innerHTML = "", o.defaultView && o.defaultView.getComputedStyle && (g.style.width = "1px", g.style.marginRight = "0", e.support.reliableMarginRight = (parseInt(o.defaultView.getComputedStyle(g, null).marginRight, 10) || 0) === 0), L.removeChild(g).style.display = "none", g = W = null;
        }
      });
      var I = function(g) {
        var L = o.createElement("div");
        if (g = "on" + g, !L.attachEvent)
          return !0;
        var W = g in L;
        return W || (L.setAttribute(g, "return;"), W = typeof L[g] == "function"), W;
      };
      e.support.submitBubbles = I("submit"), e.support.changeBubbles = I("change"), t = r = a = null;
    }
  }();
  var T = /^(?:\{.*\}|\[.*\])$/;
  e.extend({ cache: {}, uuid: 0, expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(t) {
    return t = t.nodeType ? e.cache[t[e.expando]] : t[e.expando], !!t && !m(t);
  }, data: function(t, r, a, s) {
    if (e.acceptData(t)) {
      var u = e.expando, f = typeof r == "string", y, b = t.nodeType, I = b ? e.cache : t, g = b ? t[e.expando] : t[e.expando] && e.expando;
      return (!g || s && g && !I[g][u]) && f && a === j ? void 0 : (g || (b ? t[e.expando] = g = ++e.uuid : g = e.expando), I[g] || (I[g] = {}, b || (I[g].toJSON = e.noop)), (typeof r == "object" || typeof r == "function") && (s ? I[g][u] = e.extend(I[g][u], r) : I[g] = e.extend(I[g], r)), y = I[g], s && (y[u] || (y[u] = {}), y = y[u]), a !== j && (y[r] = a), r === "events" && !y[r] ? y[u] && y[u].events : f ? y[r] : y);
    }
  }, removeData: function(t, r, a) {
    if (e.acceptData(t)) {
      var s = e.expando, u = t.nodeType, f = u ? e.cache : t, y = u ? t[e.expando] : e.expando;
      if (!f[y])
        return;
      if (r) {
        var b = a ? f[y][s] : f[y];
        if (b && (delete b[r], !m(b)))
          return;
      }
      if (a && (delete f[y][s], !m(f[y])))
        return;
      var I = f[y][s];
      e.support.deleteExpando || f != J ? delete f[y] : f[y] = null, I ? (f[y] = {}, u || (f[y].toJSON = e.noop), f[y][s] = I) : u && (e.support.deleteExpando ? delete t[e.expando] : t.removeAttribute ? t.removeAttribute(e.expando) : t[e.expando] = null);
    }
  }, _data: function(t, r, a) {
    return e.data(t, r, a, !0);
  }, acceptData: function(t) {
    if (t.nodeName) {
      var r = e.noData[t.nodeName.toLowerCase()];
      if (r)
        return r !== !0 && t.getAttribute("classid") === r;
    }
    return !0;
  } }), e.fn.extend({ data: function(t, r) {
    var a = null;
    if (typeof t > "u") {
      if (this.length && (a = e.data(this[0]), this[0].nodeType === 1))
        for (var s = this[0].attributes, u, f = 0, y = s.length; f < y; f++)
          u = s[f].name, u.indexOf("data-") === 0 && (u = u.substr(5), h(this[0], u, a[u]));
      return a;
    }
    if (typeof t == "object")
      return this.each(function() {
        e.data(this, t);
      });
    var b = t.split(".");
    return b[1] = b[1] ? "." + b[1] : "", r === j ? (a = this.triggerHandler("getData" + b[1] + "!", [b[0]]), a === j && this.length && (a = e.data(this[0], t), a = h(this[0], t, a)), a === j && b[1] ? this.data(b[0]) : a) : this.each(function() {
      var I = e(this), g = [b[0], r];
      I.triggerHandler("setData" + b[1] + "!", g), e.data(this, t, r), I.triggerHandler("changeData" + b[1] + "!", g);
    });
  }, removeData: function(t) {
    return this.each(function() {
      e.removeData(this, t);
    });
  } }), e.extend({ queue: function(t, r, a) {
    if (t) {
      r = (r || "fx") + "queue";
      var s = e._data(t, r);
      return a ? (!s || e.isArray(a) ? s = e._data(t, r, e.makeArray(a)) : s.push(a), s) : s || [];
    }
  }, dequeue: function(t, r) {
    r = r || "fx";
    var a = e.queue(t, r), s = a.shift();
    s === "inprogress" && (s = a.shift()), s && (r === "fx" && a.unshift("inprogress"), s.call(t, function() {
      e.dequeue(t, r);
    })), a.length || e.removeData(t, r + "queue", !0);
  } }), e.fn.extend({ queue: function(t, r) {
    return typeof t != "string" && (r = t, t = "fx"), r === j ? e.queue(this[0], t) : this.each(function(a) {
      var s = e.queue(this, t, r);
      t === "fx" && s[0] !== "inprogress" && e.dequeue(this, t);
    });
  }, dequeue: function(t) {
    return this.each(function() {
      e.dequeue(this, t);
    });
  }, delay: function(t, r) {
    return t = e.fx && e.fx.speeds[t] || t, r = r || "fx", this.queue(r, function() {
      var a = this;
      setTimeout(function() {
        e.dequeue(a, r);
      }, t);
    });
  }, clearQueue: function(t) {
    return this.queue(t || "fx", []);
  } });
  var A = /[\n\t\r]/g, R = /\s+/, H = /\r/g, Q = /^(?:href|src|style)$/, Z = /^(?:button|input)$/i, ae = /^(?:button|input|object|select|textarea)$/i, Ie = /^a(?:rea)?$/i, we = /^(?:radio|checkbox)$/i;
  e.props = { for: "htmlFor", class: "className", readonly: "readOnly", maxlength: "maxLength", cellspacing: "cellSpacing", rowspan: "rowSpan", colspan: "colSpan", tabindex: "tabIndex", usemap: "useMap", frameborder: "frameBorder" }, e.fn.extend({ attr: function(t, r) {
    return e.access(this, t, r, !0, e.attr);
  }, removeAttr: function(t, r) {
    return this.each(function() {
      e.attr(this, t, ""), this.nodeType === 1 && this.removeAttribute(t);
    });
  }, addClass: function(t) {
    if (e.isFunction(t))
      return this.each(function(g) {
        var L = e(this);
        L.addClass(t.call(this, g, L.attr("class")));
      });
    if (t && typeof t == "string")
      for (var r = (t || "").split(R), a = 0, s = this.length; a < s; a++) {
        var u = this[a];
        if (u.nodeType === 1)
          if (u.className) {
            for (var f = " " + u.className + " ", y = u.className, b = 0, I = r.length; b < I; b++)
              f.indexOf(" " + r[b] + " ") < 0 && (y += " " + r[b]);
            u.className = e.trim(y);
          } else
            u.className = t;
      }
    return this;
  }, removeClass: function(t) {
    if (e.isFunction(t))
      return this.each(function(I) {
        var g = e(this);
        g.removeClass(t.call(this, I, g.attr("class")));
      });
    if (t && typeof t == "string" || t === j)
      for (var r = (t || "").split(R), a = 0, s = this.length; a < s; a++) {
        var u = this[a];
        if (u.nodeType === 1 && u.className)
          if (t) {
            for (var f = (" " + u.className + " ").replace(A, " "), y = 0, b = r.length; y < b; y++)
              f = f.replace(" " + r[y] + " ", " ");
            u.className = e.trim(f);
          } else
            u.className = "";
      }
    return this;
  }, toggleClass: function(t, r) {
    var a = typeof t, s = typeof r == "boolean";
    return e.isFunction(t) ? this.each(function(u) {
      var f = e(this);
      f.toggleClass(t.call(this, u, f.attr("class"), r), r);
    }) : this.each(function() {
      if (a === "string")
        for (var u, f = 0, y = e(this), b = r, I = t.split(R); u = I[f++]; )
          b = s ? b : !y.hasClass(u), y[b ? "addClass" : "removeClass"](u);
      else
        (a === "undefined" || a === "boolean") && (this.className && e._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : e._data(this, "__className__") || "");
    });
  }, hasClass: function(t) {
    for (var r = " " + t + " ", a = 0, s = this.length; a < s; a++)
      if ((" " + this[a].className + " ").replace(A, " ").indexOf(r) > -1)
        return !0;
    return !1;
  }, val: function(t) {
    if (!arguments.length) {
      var r = this[0];
      if (r) {
        if (e.nodeName(r, "option")) {
          var a = r.attributes.value;
          return !a || a.specified ? r.value : r.text;
        }
        if (e.nodeName(r, "select")) {
          var s = r.selectedIndex, u = [], f = r.options, y = r.type === "select-one";
          if (s < 0)
            return null;
          for (var b = y ? s : 0, I = y ? s + 1 : f.length; b < I; b++) {
            var g = f[b];
            if (g.selected && (e.support.optDisabled ? !g.disabled : g.getAttribute("disabled") === null) && (!g.parentNode.disabled || !e.nodeName(g.parentNode, "optgroup"))) {
              if (t = e(g).val(), y)
                return t;
              u.push(t);
            }
          }
          return y && !u.length && f.length ? e(f[s]).val() : u;
        }
        return we.test(r.type) && !e.support.checkOn ? r.getAttribute("value") === null ? "on" : r.value : (r.value || "").replace(H, "");
      }
      return j;
    }
    var L = e.isFunction(t);
    return this.each(function(W) {
      var X = e(this), q = t;
      if (this.nodeType === 1)
        if (L && (q = t.call(this, W, X.val())), q == null ? q = "" : typeof q == "number" ? q += "" : e.isArray(q) && (q = e.map(q, function(ce) {
          return ce == null ? "" : ce + "";
        })), e.isArray(q) && we.test(this.type))
          this.checked = e.inArray(X.val(), q) >= 0;
        else if (e.nodeName(this, "select")) {
          var re = e.makeArray(q);
          e("option", this).each(function() {
            this.selected = e.inArray(e(this).val(), re) >= 0;
          }), re.length || (this.selectedIndex = -1);
        } else
          this.value = q;
    });
  } }), e.extend({ attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 }, attr: function(t, r, a, s) {
    if (!t || t.nodeType === 3 || t.nodeType === 8 || t.nodeType === 2)
      return j;
    if (s && r in e.attrFn)
      return e(t)[r](a);
    var u = t.nodeType !== 1 || !e.isXMLDoc(t), f = a !== j;
    if (r = u && e.props[r] || r, t.nodeType === 1) {
      var y = Q.test(r);
      if (r === "selected" && !e.support.optSelected) {
        var b = t.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
      }
      if ((r in t || t[r] !== j) && u && !y) {
        if (f && (r === "type" && Z.test(t.nodeName) && t.parentNode && e.error("type property can't be changed"), a === null ? t.nodeType === 1 && t.removeAttribute(r) : t[r] = a), e.nodeName(t, "form") && t.getAttributeNode(r))
          return t.getAttributeNode(r).nodeValue;
        if (r === "tabIndex") {
          var I = t.getAttributeNode("tabIndex");
          return I && I.specified ? I.value : ae.test(t.nodeName) || Ie.test(t.nodeName) && t.href ? 0 : j;
        }
        return t[r];
      }
      if (!e.support.style && u && r === "style")
        return f && (t.style.cssText = "" + a), t.style.cssText;
      if (f && t.setAttribute(r, "" + a), !t.attributes[r] && t.hasAttribute && !t.hasAttribute(r))
        return j;
      var g = !e.support.hrefNormalized && u && y ? t.getAttribute(r, 2) : t.getAttribute(r);
      return g === null ? j : g;
    }
    return f && (t[r] = a), t[r];
  } });
  var Ce = /\.(.*)$/, ie = /^(?:textarea|input|select)$/i, Le = /\./g, V = / /g, qe = /[^\w\s.|`]/g, Ke = function(t) {
    return t.replace(qe, "\\$&");
  };
  e.event = { add: function(t, r, a, s) {
    if (t.nodeType !== 3 && t.nodeType !== 8) {
      try {
        e.isWindow(t) && t !== J && !t.frameElement && (t = J);
      } catch {
      }
      if (a === !1)
        a = C;
      else if (!a)
        return;
      var u, f;
      a.handler && (u = a, a = u.handler), a.guid || (a.guid = e.guid++);
      var y = e._data(t);
      if (!y)
        return;
      var b = y.events, I = y.handle;
      b || (y.events = b = {}), I || (y.handle = I = function(re) {
        return typeof e < "u" && e.event.triggered !== re.type ? e.event.handle.apply(I.elem, arguments) : j;
      }), I.elem = t, r = r.split(" ");
      for (var g, L = 0, W; g = r[L++]; ) {
        f = u ? e.extend({}, u) : { handler: a, data: s }, g.indexOf(".") > -1 ? (W = g.split("."), g = W.shift(), f.namespace = W.slice(0).sort().join(".")) : (W = [], f.namespace = ""), f.type = g, f.guid || (f.guid = a.guid);
        var X = b[g], q = e.event.special[g] || {};
        X || (X = b[g] = [], (!q.setup || q.setup.call(t, s, W, I) === !1) && (t.addEventListener ? t.addEventListener(g, I, !1) : t.attachEvent && t.attachEvent("on" + g, I))), q.add && (q.add.call(t, f), f.handler.guid || (f.handler.guid = a.guid)), X.push(f), e.event.global[g] = !0;
      }
      t = null;
    }
  }, global: {}, remove: function(t, r, a, s) {
    if (t.nodeType !== 3 && t.nodeType !== 8) {
      a === !1 && (a = C);
      var u, f, y = 0, b, I, g, L, W, X, q, re = e.hasData(t) && e._data(t), ce = re && re.events;
      if (!re || !ce)
        return;
      if (r && r.type && (a = r.handler, r = r.type), !r || typeof r == "string" && r.charAt(0) === ".") {
        r = r || "";
        for (u in ce)
          e.event.remove(t, u + r);
        return;
      }
      for (r = r.split(" "); u = r[y++]; )
        if (q = u, X = null, b = u.indexOf(".") < 0, I = [], b || (I = u.split("."), u = I.shift(), g = new RegExp("(^|\\.)" + e.map(I.slice(0).sort(), Ke).join("\\.(?:.*\\.)?") + "(\\.|$)")), W = ce[u], !!W) {
          if (!a) {
            for (f = 0; f < W.length; f++)
              X = W[f], (b || g.test(X.namespace)) && (e.event.remove(t, q, X.handler, f), W.splice(f--, 1));
            continue;
          }
          for (L = e.event.special[u] || {}, f = s || 0; f < W.length && (X = W[f], !(a.guid === X.guid && ((b || g.test(X.namespace)) && (s == null && W.splice(f--, 1), L.remove && L.remove.call(t, X)), s != null))); f++)
            ;
          (W.length === 0 || s != null && W.length === 1) && ((!L.teardown || L.teardown.call(t, I) === !1) && e.removeEvent(t, u, re.handle), delete ce[u]);
        }
      if (e.isEmptyObject(ce)) {
        var fe = re.handle;
        fe && (fe.elem = null), delete re.events, delete re.handle, e.isEmptyObject(re) && e.removeData(t, j, !0);
      }
    }
  }, trigger: function(t, r, a) {
    var s = t.type || t, u = arguments[3];
    if (!u) {
      if (t = typeof t == "object" ? t[e.expando] ? t : e.extend(e.Event(s), t) : e.Event(s), s.indexOf("!") >= 0 && (t.type = s = s.slice(0, -1), t.exclusive = !0), a || (t.stopPropagation(), e.event.global[s] && e.each(e.cache, function() {
        var X = e.expando, q = this[X];
        q && q.events && q.events[s] && e.event.trigger(t, r, q.handle.elem);
      })), !a || a.nodeType === 3 || a.nodeType === 8)
        return j;
      t.result = j, t.target = a, r = e.makeArray(r), r.unshift(t);
    }
    t.currentTarget = a;
    var f = e._data(a, "handle");
    f && f.apply(a, r);
    var y = a.parentNode || a.ownerDocument;
    try {
      a && a.nodeName && e.noData[a.nodeName.toLowerCase()] || a["on" + s] && a["on" + s].apply(a, r) === !1 && (t.result = !1, t.preventDefault());
    } catch {
    }
    if (!t.isPropagationStopped() && y)
      e.event.trigger(t, r, y, !0);
    else if (!t.isDefaultPrevented()) {
      var b, I = t.target, g = s.replace(Ce, ""), L = e.nodeName(I, "a") && g === "click", W = e.event.special[g] || {};
      if ((!W._default || W._default.call(a, t) === !1) && !L && !(I && I.nodeName && e.noData[I.nodeName.toLowerCase()])) {
        try {
          I[g] && (b = I["on" + g], b && (I["on" + g] = null), e.event.triggered = t.type, I[g]());
        } catch {
        }
        b && (I["on" + g] = b), e.event.triggered = j;
      }
    }
  }, handle: function(t) {
    var r, a, s, u, f, y = [], b = e.makeArray(arguments);
    if (t = b[0] = e.event.fix(t || J.event), t.currentTarget = this, r = t.type.indexOf(".") < 0 && !t.exclusive, r || (s = t.type.split("."), t.type = s.shift(), y = s.slice(0).sort(), u = new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.)?") + "(\\.|$)")), t.namespace = t.namespace || y.join("."), f = e._data(this, "events"), a = (f || {})[t.type], f && a) {
      a = a.slice(0);
      for (var I = 0, g = a.length; I < g; I++) {
        var L = a[I];
        if (r || u.test(L.namespace)) {
          t.handler = L.handler, t.data = L.data, t.handleObj = L;
          var W = L.handler.apply(this, b);
          if (W !== j && (t.result = W, W === !1 && (t.preventDefault(), t.stopPropagation())), t.isImmediatePropagationStopped())
            break;
        }
      }
    }
    return t.result;
  }, props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "), fix: function(t) {
    if (t[e.expando])
      return t;
    var r = t;
    t = e.Event(r);
    for (var a = this.props.length, s; a; )
      s = this.props[--a], t[s] = r[s];
    if (t.target || (t.target = t.srcElement || o), t.target.nodeType === 3 && (t.target = t.target.parentNode), !t.relatedTarget && t.fromElement && (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.pageX == null && t.clientX != null) {
      var u = o.documentElement, f = o.body;
      t.pageX = t.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), t.pageY = t.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0);
    }
    return t.which == null && (t.charCode != null || t.keyCode != null) && (t.which = t.charCode != null ? t.charCode : t.keyCode), !t.metaKey && t.ctrlKey && (t.metaKey = t.ctrlKey), !t.which && t.button !== j && (t.which = t.button & 1 ? 1 : t.button & 2 ? 3 : t.button & 4 ? 2 : 0), t;
  }, guid: 1e8, proxy: e.proxy, special: { ready: { setup: e.bindReady, teardown: e.noop }, live: { add: function(t) {
    e.event.add(this, n(t.origType, t.selector), e.extend({}, t, { handler: i, guid: t.handler.guid }));
  }, remove: function(t) {
    e.event.remove(this, n(t.origType, t.selector), t);
  } }, beforeunload: { setup: function(t, r, a) {
    e.isWindow(this) && (this.onbeforeunload = a);
  }, teardown: function(t, r) {
    this.onbeforeunload === r && (this.onbeforeunload = null);
  } } } }, e.removeEvent = o.removeEventListener ? function(t, r, a) {
    t.removeEventListener && t.removeEventListener(r, a, !1);
  } : function(t, r, a) {
    t.detachEvent && t.detachEvent("on" + r, a);
  }, e.Event = function(t) {
    if (!this.preventDefault)
      return new e.Event(t);
    t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? c : C) : this.type = t, this.timeStamp = e.now(), this[e.expando] = !0;
  }, e.Event.prototype = { preventDefault: function() {
    this.isDefaultPrevented = c;
    var t = this.originalEvent;
    t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
  }, stopPropagation: function() {
    this.isPropagationStopped = c;
    var t = this.originalEvent;
    t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0);
  }, stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = c, this.stopPropagation();
  }, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C };
  var je = function(t) {
    var r = t.relatedTarget;
    try {
      if (r && r !== o && !r.parentNode)
        return;
      for (; r && r !== this; )
        r = r.parentNode;
      r !== this && (t.type = t.data, e.event.handle.apply(this, arguments));
    } catch {
    }
  }, Re = function(t) {
    t.type = t.data, e.event.handle.apply(this, arguments);
  };
  if (e.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(t, r) {
    e.event.special[t] = { setup: function(a) {
      e.event.add(this, r, a && a.selector ? Re : je, t);
    }, teardown: function(a) {
      e.event.remove(this, r, a && a.selector ? Re : je);
    } };
  }), e.support.submitBubbles || (e.event.special.submit = { setup: function(t, r) {
    if (this.nodeName && this.nodeName.toLowerCase() !== "form")
      e.event.add(this, "click.specialSubmit", function(a) {
        var s = a.target, u = s.type;
        (u === "submit" || u === "image") && e(s).closest("form").length && l("submit", this, arguments);
      }), e.event.add(this, "keypress.specialSubmit", function(a) {
        var s = a.target, u = s.type;
        (u === "text" || u === "password") && e(s).closest("form").length && a.keyCode === 13 && l("submit", this, arguments);
      });
    else
      return !1;
  }, teardown: function(t) {
    e.event.remove(this, ".specialSubmit");
  } }), !e.support.changeBubbles) {
    var Ve, ye = function(t) {
      var r = t.type, a = t.value;
      return r === "radio" || r === "checkbox" ? a = t.checked : r === "select-multiple" ? a = t.selectedIndex > -1 ? e.map(t.options, function(s) {
        return s.selected;
      }).join("-") : "" : t.nodeName.toLowerCase() === "select" && (a = t.selectedIndex), a;
    }, me = function(r) {
      var a = r.target, s, u;
      if (ie.test(a.nodeName) && !a.readOnly) {
        if (s = e._data(a, "_change_data"), u = ye(a), (r.type !== "focusout" || a.type !== "radio") && e._data(a, "_change_data", u), s === j || u === s)
          return;
        (s != null || u) && (r.type = "change", r.liveFired = j, e.event.trigger(r, arguments[1], a));
      }
    };
    e.event.special.change = { filters: { focusout: me, beforedeactivate: me, click: function(t) {
      var r = t.target, a = r.type;
      (a === "radio" || a === "checkbox" || r.nodeName.toLowerCase() === "select") && me.call(this, t);
    }, keydown: function(t) {
      var r = t.target, a = r.type;
      (t.keyCode === 13 && r.nodeName.toLowerCase() !== "textarea" || t.keyCode === 32 && (a === "checkbox" || a === "radio") || a === "select-multiple") && me.call(this, t);
    }, beforeactivate: function(t) {
      var r = t.target;
      e._data(r, "_change_data", ye(r));
    } }, setup: function(t, r) {
      if (this.type === "file")
        return !1;
      for (var a in Ve)
        e.event.add(this, a + ".specialChange", Ve[a]);
      return ie.test(this.nodeName);
    }, teardown: function(t) {
      return e.event.remove(this, ".specialChange"), ie.test(this.nodeName);
    } }, Ve = e.event.special.change.filters, Ve.focus = Ve.beforeactivate;
  }
  o.addEventListener && e.each({ focus: "focusin", blur: "focusout" }, function(t, r) {
    function a(u) {
      var f = e.event.fix(u);
      f.type = r, f.originalEvent = {}, e.event.trigger(f, null, f.target), f.isDefaultPrevented() && u.preventDefault();
    }
    var s = 0;
    e.event.special[r] = { setup: function() {
      s++ === 0 && o.addEventListener(t, a, !0);
    }, teardown: function() {
      --s === 0 && o.removeEventListener(t, a, !0);
    } };
  }), e.each(["bind", "one"], function(t, r) {
    e.fn[r] = function(a, s, u) {
      if (typeof a == "object") {
        for (var f in a)
          this[r](f, s, a[f], u);
        return this;
      }
      (e.isFunction(s) || s === !1) && (u = s, s = j);
      var y = r === "one" ? e.proxy(u, function(g) {
        return e(this).unbind(g, y), u.apply(this, arguments);
      }) : u;
      if (a === "unload" && r !== "one")
        this.one(a, s, u);
      else
        for (var b = 0, I = this.length; b < I; b++)
          e.event.add(this[b], a, y, s);
      return this;
    };
  }), e.fn.extend({ unbind: function(t, r) {
    if (typeof t != "object" || t.preventDefault)
      for (var a = 0, s = this.length; a < s; a++)
        e.event.remove(this[a], t, r);
    else
      for (var u in t)
        this.unbind(u, t[u]);
    return this;
  }, delegate: function(t, r, a, s) {
    return this.live(r, a, s, t);
  }, undelegate: function(t, r, a) {
    return arguments.length === 0 ? this.unbind("live") : this.die(r, null, a, t);
  }, trigger: function(t, r) {
    return this.each(function() {
      e.event.trigger(t, r, this);
    });
  }, triggerHandler: function(t, r) {
    if (this[0]) {
      var a = e.Event(t);
      return a.preventDefault(), a.stopPropagation(), e.event.trigger(a, r, this[0]), a.result;
    }
  }, toggle: function(t) {
    for (var r = arguments, a = 1; a < r.length; )
      e.proxy(t, r[a++]);
    return this.click(e.proxy(t, function(s) {
      var u = (e._data(this, "lastToggle" + t.guid) || 0) % a;
      return e._data(this, "lastToggle" + t.guid, u + 1), s.preventDefault(), r[u].apply(this, arguments) || !1;
    }));
  }, hover: function(t, r) {
    return this.mouseenter(t).mouseleave(r || t);
  } });
  var dt = { focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout" };
  e.each(["live", "die"], function(t, r) {
    e.fn[r] = function(a, s, u, f) {
      var y, b = 0, I, g, L, W = f || this.selector, X = f ? this : e(this.context);
      if (typeof a == "object" && !a.preventDefault) {
        for (var q in a)
          X[r](q, s, a[q], W);
        return this;
      }
      for (e.isFunction(s) && (u = s, s = j), a = (a || "").split(" "); (y = a[b++]) != null; ) {
        if (I = Ce.exec(y), g = "", I && (g = I[0], y = y.replace(Ce, "")), y === "hover") {
          a.push("mouseenter" + g, "mouseleave" + g);
          continue;
        }
        if (L = y, y === "focus" || y === "blur" ? (a.push(dt[y] + g), y = y + g) : y = (dt[y] || y) + g, r === "live")
          for (var re = 0, ce = X.length; re < ce; re++)
            e.event.add(X[re], "live." + n(y, W), { data: s, selector: W, handler: u, origType: y, origHandler: u, preType: L });
        else
          X.unbind("live." + n(y, W), u);
      }
      return this;
    };
  }), e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function(t, r) {
    e.fn[r] = function(a, s) {
      return s == null && (s = a, a = null), arguments.length > 0 ? this.bind(r, a, s) : this.trigger(r);
    }, e.attrFn && (e.attrFn[r] = !0);
  }), function() {
    function t(p, N, F, _, O, D) {
      for (var U = 0, G = _.length; U < G; U++) {
        var K = _[U];
        if (K) {
          var ne = !1;
          for (K = K[p]; K; ) {
            if (K.sizcache === F) {
              ne = _[K.sizset];
              break;
            }
            if (K.nodeType === 1) {
              if (D || (K.sizcache = F, K.sizset = U), typeof N != "string") {
                if (K === N) {
                  ne = !0;
                  break;
                }
              } else if (g.filter(N, [K]).length > 0) {
                ne = K;
                break;
              }
            }
            K = K[p];
          }
          _[U] = ne;
        }
      }
    }
    function r(p, N, F, _, O, D) {
      for (var U = 0, G = _.length; U < G; U++) {
        var K = _[U];
        if (K) {
          var ne = !1;
          for (K = K[p]; K; ) {
            if (K.sizcache === F) {
              ne = _[K.sizset];
              break;
            }
            if (K.nodeType === 1 && !D && (K.sizcache = F, K.sizset = U), K.nodeName.toLowerCase() === N) {
              ne = K;
              break;
            }
            K = K[p];
          }
          _[U] = ne;
        }
      }
    }
    var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, s = 0, u = Object.prototype.toString, f = !1, y = !0, b = /\\/g, I = /\W/;
    [0, 0].sort(function() {
      return y = !1, 0;
    });
    var g = function(p, N, F, _) {
      F = F || [], N = N || o;
      var O = N;
      if (N.nodeType !== 1 && N.nodeType !== 9)
        return [];
      if (!p || typeof p != "string")
        return F;
      var D, U, G, K, ne, Te, xe, k, M = !0, Y = g.isXML(N), z = [], le = p;
      do
        if (a.exec(""), D = a.exec(le), D && (le = D[3], z.push(D[1]), D[2])) {
          K = D[3];
          break;
        }
      while (D);
      if (z.length > 1 && W.exec(p))
        if (z.length === 2 && L.relative[z[0]])
          U = _e(z[0] + z[1], N);
        else
          for (U = L.relative[z[0]] ? [N] : g(z.shift(), N); z.length; )
            p = z.shift(), L.relative[p] && (p += z.shift()), U = _e(p, U);
      else if (!_ && z.length > 1 && N.nodeType === 9 && !Y && L.match.ID.test(z[0]) && !L.match.ID.test(z[z.length - 1]) && (ne = g.find(z.shift(), N, Y), N = ne.expr ? g.filter(ne.expr, ne.set)[0] : ne.set[0]), N)
        for (ne = _ ? { expr: z.pop(), set: re(_) } : g.find(z.pop(), z.length === 1 && (z[0] === "~" || z[0] === "+") && N.parentNode ? N.parentNode : N, Y), U = ne.expr ? g.filter(ne.expr, ne.set) : ne.set, z.length > 0 ? G = re(U) : M = !1; z.length; )
          Te = z.pop(), xe = Te, L.relative[Te] ? xe = z.pop() : Te = "", xe == null && (xe = N), L.relative[Te](G, xe, Y);
      else
        G = z = [];
      if (G || (G = U), G || g.error(Te || p), u.call(G) === "[object Array]")
        if (M)
          if (N && N.nodeType === 1)
            for (k = 0; G[k] != null; k++)
              G[k] && (G[k] === !0 || G[k].nodeType === 1 && g.contains(N, G[k])) && F.push(U[k]);
          else
            for (k = 0; G[k] != null; k++)
              G[k] && G[k].nodeType === 1 && F.push(U[k]);
        else
          F.push.apply(F, G);
      else
        re(G, F);
      return K && (g(K, O, F, _), g.uniqueSort(F)), F;
    };
    g.uniqueSort = function(p) {
      if (ce && (f = y, p.sort(ce), f))
        for (var N = 1; N < p.length; N++)
          p[N] === p[N - 1] && p.splice(N--, 1);
      return p;
    }, g.matches = function(p, N) {
      return g(p, null, null, N);
    }, g.matchesSelector = function(p, N) {
      return g(N, null, null, [p]).length > 0;
    }, g.find = function(p, N, F) {
      var _;
      if (!p)
        return [];
      for (var O = 0, D = L.order.length; O < D; O++) {
        var U, G = L.order[O];
        if (U = L.leftMatch[G].exec(p)) {
          var K = U[1];
          if (U.splice(1, 1), K.substr(K.length - 1) !== "\\" && (U[1] = (U[1] || "").replace(b, ""), _ = L.find[G](U, N, F), _ != null)) {
            p = p.replace(L.match[G], "");
            break;
          }
        }
      }
      return _ || (_ = typeof N.getElementsByTagName < "u" ? N.getElementsByTagName("*") : []), { set: _, expr: p };
    }, g.filter = function(p, N, F, _) {
      for (var O, D, U = p, G = [], K = N, ne = N && N[0] && g.isXML(N[0]); p && N.length; ) {
        for (var Te in L.filter)
          if ((O = L.leftMatch[Te].exec(p)) != null && O[2]) {
            var xe, k, M = L.filter[Te], Y = O[1];
            if (D = !1, O.splice(1, 1), Y.substr(Y.length - 1) === "\\")
              continue;
            if (K === G && (G = []), L.preFilter[Te])
              if (O = L.preFilter[Te](O, K, F, G, _, ne), O) {
                if (O === !0)
                  continue;
              } else
                D = xe = !0;
            if (O) {
              for (var z = 0; (k = K[z]) != null; z++)
                if (k) {
                  xe = M(k, O, z, K);
                  var le = _ ^ !!xe;
                  F && xe != null ? le ? D = !0 : K[z] = !1 : le && (G.push(k), D = !0);
                }
            }
            if (xe !== j) {
              if (F || (K = G), p = p.replace(L.match[Te], ""), !D)
                return [];
              break;
            }
          }
        if (p === U)
          if (D == null)
            g.error(p);
          else
            break;
        U = p;
      }
      return K;
    }, g.error = function(p) {
      throw "Syntax error, unrecognized expression: " + p;
    };
    var L = g.selectors = { order: ["ID", "NAME", "TAG"], match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { class: "className", for: "htmlFor" }, attrHandle: { href: function(p) {
      return p.getAttribute("href");
    }, type: function(p) {
      return p.getAttribute("type");
    } }, relative: { "+": function(p, N) {
      var F = typeof N == "string", _ = F && !I.test(N), O = F && !_;
      _ && (N = N.toLowerCase());
      for (var D = 0, U = p.length, G; D < U; D++)
        if (G = p[D]) {
          for (; (G = G.previousSibling) && G.nodeType !== 1; )
            ;
          p[D] = O || G && G.nodeName.toLowerCase() === N ? G || !1 : G === N;
        }
      O && g.filter(N, p, !0);
    }, ">": function(p, N) {
      var F, _ = typeof N == "string", O = 0, D = p.length;
      if (_ && !I.test(N)) {
        for (N = N.toLowerCase(); O < D; O++)
          if (F = p[O], F) {
            var U = F.parentNode;
            p[O] = U.nodeName.toLowerCase() === N ? U : !1;
          }
      } else {
        for (; O < D; O++)
          F = p[O], F && (p[O] = _ ? F.parentNode : F.parentNode === N);
        _ && g.filter(N, p, !0);
      }
    }, "": function(p, N, F) {
      var _, O = s++, D = t;
      typeof N == "string" && !I.test(N) && (N = N.toLowerCase(), _ = N, D = r), D("parentNode", N, O, p, _, F);
    }, "~": function(p, N, F) {
      var _, O = s++, D = t;
      typeof N == "string" && !I.test(N) && (N = N.toLowerCase(), _ = N, D = r), D("previousSibling", N, O, p, _, F);
    } }, find: { ID: function(p, N, F) {
      if (typeof N.getElementById < "u" && !F) {
        var _ = N.getElementById(p[1]);
        return _ && _.parentNode ? [_] : [];
      }
    }, NAME: function(p, N) {
      if (typeof N.getElementsByName < "u") {
        for (var F = [], _ = N.getElementsByName(p[1]), O = 0, D = _.length; O < D; O++)
          _[O].getAttribute("name") === p[1] && F.push(_[O]);
        return F.length === 0 ? null : F;
      }
    }, TAG: function(p, N) {
      if (typeof N.getElementsByTagName < "u")
        return N.getElementsByTagName(p[1]);
    } }, preFilter: { CLASS: function(p, N, F, _, O, D) {
      if (p = " " + p[1].replace(b, "") + " ", D)
        return p;
      for (var U = 0, G; (G = N[U]) != null; U++)
        G && (O ^ (G.className && (" " + G.className + " ").replace(/[\t\n\r]/g, " ").indexOf(p) >= 0) ? F || _.push(G) : F && (N[U] = !1));
      return !1;
    }, ID: function(p) {
      return p[1].replace(b, "");
    }, TAG: function(p, N) {
      return p[1].replace(b, "").toLowerCase();
    }, CHILD: function(p) {
      if (p[1] === "nth") {
        p[2] || g.error(p[0]), p[2] = p[2].replace(/^\+|\s*/g, "");
        var N = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(p[2] === "even" && "2n" || p[2] === "odd" && "2n+1" || !/\D/.test(p[2]) && "0n+" + p[2] || p[2]);
        p[2] = N[1] + (N[2] || 1) - 0, p[3] = N[3] - 0;
      } else
        p[2] && g.error(p[0]);
      return p[0] = s++, p;
    }, ATTR: function(p, N, F, _, O, D) {
      var U = p[1] = p[1].replace(b, "");
      return !D && L.attrMap[U] && (p[1] = L.attrMap[U]), p[4] = (p[4] || p[5] || "").replace(b, ""), p[2] === "~=" && (p[4] = " " + p[4] + " "), p;
    }, PSEUDO: function(p, N, F, _, O) {
      if (p[1] === "not")
        if ((a.exec(p[3]) || "").length > 1 || /^\w/.test(p[3]))
          p[3] = g(p[3], null, null, N);
        else {
          var D = g.filter(p[3], N, F, !0 ^ O);
          return F || _.push.apply(_, D), !1;
        }
      else if (L.match.POS.test(p[0]) || L.match.CHILD.test(p[0]))
        return !0;
      return p;
    }, POS: function(p) {
      return p.unshift(!0), p;
    } }, filters: { enabled: function(p) {
      return p.disabled === !1 && p.type !== "hidden";
    }, disabled: function(p) {
      return p.disabled === !0;
    }, checked: function(p) {
      return p.checked === !0;
    }, selected: function(p) {
      return p.parentNode && p.parentNode.selectedIndex, p.selected === !0;
    }, parent: function(p) {
      return !!p.firstChild;
    }, empty: function(p) {
      return !p.firstChild;
    }, has: function(p, N, F) {
      return !!g(F[3], p).length;
    }, header: function(p) {
      return /h\d/i.test(p.nodeName);
    }, text: function(p) {
      var N = p.getAttribute("type"), F = p.type;
      return F === "text" && (N === F || N === null);
    }, radio: function(p) {
      return p.type === "radio";
    }, checkbox: function(p) {
      return p.type === "checkbox";
    }, file: function(p) {
      return p.type === "file";
    }, password: function(p) {
      return p.type === "password";
    }, submit: function(p) {
      return p.type === "submit";
    }, image: function(p) {
      return p.type === "image";
    }, reset: function(p) {
      return p.type === "reset";
    }, button: function(p) {
      return p.type === "button" || p.nodeName.toLowerCase() === "button";
    }, input: function(p) {
      return /input|select|textarea|button/i.test(p.nodeName);
    } }, setFilters: { first: function(p, N) {
      return N === 0;
    }, last: function(p, N, F, _) {
      return N === _.length - 1;
    }, even: function(p, N) {
      return N % 2 === 0;
    }, odd: function(p, N) {
      return N % 2 === 1;
    }, lt: function(p, N, F) {
      return N < F[3] - 0;
    }, gt: function(p, N, F) {
      return N > F[3] - 0;
    }, nth: function(p, N, F) {
      return F[3] - 0 === N;
    }, eq: function(p, N, F) {
      return F[3] - 0 === N;
    } }, filter: { PSEUDO: function(p, N, F, _) {
      var O = N[1], D = L.filters[O];
      if (D)
        return D(p, F, N, _);
      if (O === "contains")
        return (p.textContent || p.innerText || g.getText([p]) || "").indexOf(N[3]) >= 0;
      if (O === "not") {
        for (var U = N[3], G = 0, K = U.length; G < K; G++)
          if (U[G] === p)
            return !1;
        return !0;
      }
      g.error(O);
    }, CHILD: function(p, N) {
      var F = N[1], _ = p;
      switch (F) {
        case "only":
        case "first":
          for (; _ = _.previousSibling; )
            if (_.nodeType === 1)
              return !1;
          if (F === "first")
            return !0;
          _ = p;
        case "last":
          for (; _ = _.nextSibling; )
            if (_.nodeType === 1)
              return !1;
          return !0;
        case "nth":
          var O = N[2], D = N[3];
          if (O === 1 && D === 0)
            return !0;
          var U = N[0], G = p.parentNode;
          if (G && (G.sizcache !== U || !p.nodeIndex)) {
            var K = 0;
            for (_ = G.firstChild; _; _ = _.nextSibling)
              _.nodeType === 1 && (_.nodeIndex = ++K);
            G.sizcache = U;
          }
          var ne = p.nodeIndex - D;
          return O === 0 ? ne === 0 : ne % O === 0 && ne / O >= 0;
      }
    }, ID: function(p, N) {
      return p.nodeType === 1 && p.getAttribute("id") === N;
    }, TAG: function(p, N) {
      return N === "*" && p.nodeType === 1 || p.nodeName.toLowerCase() === N;
    }, CLASS: function(p, N) {
      return (" " + (p.className || p.getAttribute("class")) + " ").indexOf(N) > -1;
    }, ATTR: function(p, N) {
      var F = N[1], _ = L.attrHandle[F] ? L.attrHandle[F](p) : p[F] != null ? p[F] : p.getAttribute(F), O = _ + "", D = N[2], U = N[4];
      return _ == null ? D === "!=" : D === "=" ? O === U : D === "*=" ? O.indexOf(U) >= 0 : D === "~=" ? (" " + O + " ").indexOf(U) >= 0 : U ? D === "!=" ? O !== U : D === "^=" ? O.indexOf(U) === 0 : D === "$=" ? O.substr(O.length - U.length) === U : D === "|=" ? O === U || O.substr(0, U.length + 1) === U + "-" : !1 : O && _ !== !1;
    }, POS: function(p, N, F, _) {
      var O = N[2], D = L.setFilters[O];
      if (D)
        return D(p, F, N, _);
    } } }, W = L.match.POS, X = function(p, N) {
      return "\\" + (N - 0 + 1);
    };
    for (var q in L.match)
      L.match[q] = new RegExp(L.match[q].source + /(?![^\[]*\])(?![^\(]*\))/.source), L.leftMatch[q] = new RegExp(/(^(?:.|\r|\n)*?)/.source + L.match[q].source.replace(/\\(\d+)/g, X));
    var re = function(p, N) {
      return p = Array.prototype.slice.call(p, 0), N ? (N.push.apply(N, p), N) : p;
    };
    try {
      Array.prototype.slice.call(o.documentElement.childNodes, 0)[0].nodeType;
    } catch {
      re = function(N, F) {
        var _ = 0, O = F || [];
        if (u.call(N) === "[object Array]")
          Array.prototype.push.apply(O, N);
        else if (typeof N.length == "number")
          for (var D = N.length; _ < D; _++)
            O.push(N[_]);
        else
          for (; N[_]; _++)
            O.push(N[_]);
        return O;
      };
    }
    var ce, fe;
    o.documentElement.compareDocumentPosition ? ce = function(p, N) {
      return p === N ? (f = !0, 0) : !p.compareDocumentPosition || !N.compareDocumentPosition ? p.compareDocumentPosition ? -1 : 1 : p.compareDocumentPosition(N) & 4 ? -1 : 1;
    } : (ce = function(p, N) {
      var F, _, O = [], D = [], U = p.parentNode, G = N.parentNode, K = U;
      if (p === N)
        return f = !0, 0;
      if (U === G)
        return fe(p, N);
      if (!U)
        return -1;
      if (!G)
        return 1;
      for (; K; )
        O.unshift(K), K = K.parentNode;
      for (K = G; K; )
        D.unshift(K), K = K.parentNode;
      F = O.length, _ = D.length;
      for (var ne = 0; ne < F && ne < _; ne++)
        if (O[ne] !== D[ne])
          return fe(O[ne], D[ne]);
      return ne === F ? fe(p, D[ne], -1) : fe(O[ne], N, 1);
    }, fe = function(p, N, F) {
      if (p === N)
        return F;
      for (var _ = p.nextSibling; _; ) {
        if (_ === N)
          return -1;
        _ = _.nextSibling;
      }
      return 1;
    }), g.getText = function(p) {
      for (var N = "", F, _ = 0; p[_]; _++)
        F = p[_], F.nodeType === 3 || F.nodeType === 4 ? N += F.nodeValue : F.nodeType !== 8 && (N += g.getText(F.childNodes));
      return N;
    }, function() {
      var p = o.createElement("div"), N = "script" + new Date().getTime(), F = o.documentElement;
      p.innerHTML = "<a name='" + N + "'/>", F.insertBefore(p, F.firstChild), o.getElementById(N) && (L.find.ID = function(_, O, D) {
        if (typeof O.getElementById < "u" && !D) {
          var U = O.getElementById(_[1]);
          return U ? U.id === _[1] || typeof U.getAttributeNode < "u" && U.getAttributeNode("id").nodeValue === _[1] ? [U] : j : [];
        }
      }, L.filter.ID = function(_, O) {
        var D = typeof _.getAttributeNode < "u" && _.getAttributeNode("id");
        return _.nodeType === 1 && D && D.nodeValue === O;
      }), F.removeChild(p), F = p = null;
    }(), function() {
      var p = o.createElement("div");
      p.appendChild(o.createComment("")), p.getElementsByTagName("*").length > 0 && (L.find.TAG = function(N, F) {
        var _ = F.getElementsByTagName(N[1]);
        if (N[1] === "*") {
          for (var O = [], D = 0; _[D]; D++)
            _[D].nodeType === 1 && O.push(_[D]);
          _ = O;
        }
        return _;
      }), p.innerHTML = "<a href='#'></a>", p.firstChild && typeof p.firstChild.getAttribute < "u" && p.firstChild.getAttribute("href") !== "#" && (L.attrHandle.href = function(N) {
        return N.getAttribute("href", 2);
      }), p = null;
    }(), o.querySelectorAll && function() {
      var p = g, N = o.createElement("div"), F = "__sizzle__";
      if (N.innerHTML = "<p class='TEST'></p>", !N.querySelectorAll || N.querySelectorAll(".TEST").length !== 0) {
        g = function(O, D, U, G) {
          if (D = D || o, !G && !g.isXML(D)) {
            var K = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(O);
            if (K && (D.nodeType === 1 || D.nodeType === 9)) {
              if (K[1])
                return re(D.getElementsByTagName(O), U);
              if (K[2] && L.find.CLASS && D.getElementsByClassName)
                return re(D.getElementsByClassName(K[2]), U);
            }
            if (D.nodeType === 9) {
              if (O === "body" && D.body)
                return re([D.body], U);
              if (K && K[3]) {
                var ne = D.getElementById(K[3]);
                if (!ne || !ne.parentNode)
                  return re([], U);
                if (ne.id === K[3])
                  return re([ne], U);
              }
              try {
                return re(D.querySelectorAll(O), U);
              } catch {
              }
            } else if (D.nodeType === 1 && D.nodeName.toLowerCase() !== "object") {
              var Te = D, xe = D.getAttribute("id"), k = xe || F, M = D.parentNode, Y = /^\s*[+~]/.test(O);
              xe ? k = k.replace(/'/g, "\\$&") : D.setAttribute("id", k), Y && M && (D = D.parentNode);
              try {
                if (!Y || M)
                  return re(D.querySelectorAll("[id='" + k + "'] " + O), U);
              } catch {
              } finally {
                xe || Te.removeAttribute("id");
              }
            }
          }
          return p(O, D, U, G);
        };
        for (var _ in p)
          g[_] = p[_];
        N = null;
      }
    }(), function() {
      var p = o.documentElement, N = p.matchesSelector || p.mozMatchesSelector || p.webkitMatchesSelector || p.msMatchesSelector;
      if (N) {
        var F = !N.call(o.createElement("div"), "div"), _ = !1;
        try {
          N.call(o.documentElement, "[test!='']:sizzle");
        } catch {
          _ = !0;
        }
        g.matchesSelector = function(O, D) {
          if (D = D.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !g.isXML(O))
            try {
              if (_ || !L.match.PSEUDO.test(D) && !/!=/.test(D)) {
                var U = N.call(O, D);
                if (U || !F || O.document && O.document.nodeType !== 11)
                  return U;
              }
            } catch {
            }
          return g(D, null, null, [O]).length > 0;
        };
      }
    }(), function() {
      var p = o.createElement("div");
      if (p.innerHTML = "<div class='test e'></div><div class='test'></div>", p.getElementsByClassName && p.getElementsByClassName("e").length !== 0) {
        if (p.lastChild.className = "e", p.getElementsByClassName("e").length === 1)
          return;
        L.order.splice(1, 0, "CLASS"), L.find.CLASS = function(N, F, _) {
          if (typeof F.getElementsByClassName < "u" && !_)
            return F.getElementsByClassName(N[1]);
        }, p = null;
      }
    }(), o.documentElement.contains ? g.contains = function(p, N) {
      return p !== N && (p.contains ? p.contains(N) : !0);
    } : o.documentElement.compareDocumentPosition ? g.contains = function(p, N) {
      return !!(p.compareDocumentPosition(N) & 16);
    } : g.contains = function() {
      return !1;
    }, g.isXML = function(p) {
      var N = (p ? p.ownerDocument || p : 0).documentElement;
      return N ? N.nodeName !== "HTML" : !1;
    };
    var _e = function(p, N) {
      for (var F, _ = [], O = "", D = N.nodeType ? [N] : N; F = L.match.PSEUDO.exec(p); )
        O += F[0], p = p.replace(L.match.PSEUDO, "");
      p = L.relative[p] ? p + "*" : p;
      for (var U = 0, G = D.length; U < G; U++)
        g(p, D[U], _);
      return g.filter(O, _);
    };
    e.find = g, e.expr = g.selectors, e.expr[":"] = e.expr.filters, e.unique = g.uniqueSort, e.text = g.getText, e.isXMLDoc = g.isXML, e.contains = g.contains;
  }();
  var Ot = /Until$/, Et = /^(?:parents|prevUntil|prevAll)/, bt = /,/, gt = /^.[^:#\[\.,]*$/, xt = Array.prototype.slice, se = e.expr.match.POS, he = { children: !0, contents: !0, next: !0, prev: !0 };
  e.fn.extend({ find: function(t) {
    for (var r = this.pushStack("", "find", t), a = 0, s = 0, u = this.length; s < u; s++)
      if (a = r.length, e.find(t, this[s], r), s > 0) {
        for (var f = a; f < r.length; f++)
          for (var y = 0; y < a; y++)
            if (r[y] === r[f]) {
              r.splice(f--, 1);
              break;
            }
      }
    return r;
  }, has: function(t) {
    var r = e(t);
    return this.filter(function() {
      for (var a = 0, s = r.length; a < s; a++)
        if (e.contains(this, r[a]))
          return !0;
    });
  }, not: function(t) {
    return this.pushStack(w(this, t, !1), "not", t);
  }, filter: function(t) {
    return this.pushStack(w(this, t, !0), "filter", t);
  }, is: function(t) {
    return !!t && e.filter(t, this).length > 0;
  }, closest: function(t, r) {
    var a = [], s, u, f = this[0];
    if (e.isArray(t)) {
      var y, b, I = {}, g = 1;
      if (f && t.length) {
        for (s = 0, u = t.length; s < u; s++)
          b = t[s], I[b] || (I[b] = e.expr.match.POS.test(b) ? e(b, r || this.context) : b);
        for (; f && f.ownerDocument && f !== r; ) {
          for (b in I)
            y = I[b], (y.jquery ? y.index(f) > -1 : e(f).is(y)) && a.push({ selector: b, elem: f, level: g });
          f = f.parentNode, g++;
        }
      }
      return a;
    }
    var L = se.test(t) ? e(t, r || this.context) : null;
    for (s = 0, u = this.length; s < u; s++)
      for (f = this[s]; f; ) {
        if (L ? L.index(f) > -1 : e.find.matchesSelector(f, t)) {
          a.push(f);
          break;
        }
        if (f = f.parentNode, !f || !f.ownerDocument || f === r)
          break;
      }
    return a = a.length > 1 ? e.unique(a) : a, this.pushStack(a, "closest", t);
  }, index: function(t) {
    return !t || typeof t == "string" ? e.inArray(this[0], t ? e(t) : this.parent().children()) : e.inArray(t.jquery ? t[0] : t, this);
  }, add: function(t, r) {
    var a = typeof t == "string" ? e(t, r) : e.makeArray(t), s = e.merge(this.get(), a);
    return this.pushStack(v(a[0]) || v(s[0]) ? s : e.unique(s));
  }, andSelf: function() {
    return this.add(this.prevObject);
  } }), e.each({ parent: function(t) {
    var r = t.parentNode;
    return r && r.nodeType !== 11 ? r : null;
  }, parents: function(t) {
    return e.dir(t, "parentNode");
  }, parentsUntil: function(t, r, a) {
    return e.dir(t, "parentNode", a);
  }, next: function(t) {
    return e.nth(t, 2, "nextSibling");
  }, prev: function(t) {
    return e.nth(t, 2, "previousSibling");
  }, nextAll: function(t) {
    return e.dir(t, "nextSibling");
  }, prevAll: function(t) {
    return e.dir(t, "previousSibling");
  }, nextUntil: function(t, r, a) {
    return e.dir(t, "nextSibling", a);
  }, prevUntil: function(t, r, a) {
    return e.dir(t, "previousSibling", a);
  }, siblings: function(t) {
    return e.sibling(t.parentNode.firstChild, t);
  }, children: function(t) {
    return e.sibling(t.firstChild);
  }, contents: function(t) {
    return e.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : e.makeArray(t.childNodes);
  } }, function(t, r) {
    e.fn[t] = function(a, s) {
      var u = e.map(this, r, a), f = xt.call(arguments);
      return Ot.test(t) || (s = a), s && typeof s == "string" && (u = e.filter(s, u)), u = this.length > 1 && !he[t] ? e.unique(u) : u, (this.length > 1 || bt.test(s)) && Et.test(t) && (u = u.reverse()), this.pushStack(u, t, f.join(","));
    };
  }), e.extend({ filter: function(t, r, a) {
    return a && (t = ":not(" + t + ")"), r.length === 1 ? e.find.matchesSelector(r[0], t) ? [r[0]] : [] : e.find.matches(t, r);
  }, dir: function(t, r, a) {
    for (var s = [], u = t[r]; u && u.nodeType !== 9 && (a === j || u.nodeType !== 1 || !e(u).is(a)); )
      u.nodeType === 1 && s.push(u), u = u[r];
    return s;
  }, nth: function(t, r, a, s) {
    r = r || 1;
    for (var u = 0; t && !(t.nodeType === 1 && ++u === r); t = t[a])
      ;
    return t;
  }, sibling: function(t, r) {
    for (var a = []; t; t = t.nextSibling)
      t.nodeType === 1 && t !== r && a.push(t);
    return a;
  } });
  var Be = / jQuery\d+="(?:\d+|null)"/g, ue = /^\s+/, Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, ke = /<([\w:]+)/, Fe = /<tbody/i, tt = /<|&#?\w+;/, Pe = /<(?:script|object|embed|option|style)/i, Me = /checked\s*(?:[^=]|=\s*.checked.)/i, De = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] };
  De.optgroup = De.option, De.tbody = De.tfoot = De.colgroup = De.caption = De.thead, De.th = De.td, e.support.htmlSerialize || (De._default = [1, "div<div>", "</div>"]), e.fn.extend({ text: function(t) {
    return e.isFunction(t) ? this.each(function(r) {
      var a = e(this);
      a.text(t.call(this, r, a.text()));
    }) : typeof t != "object" && t !== j ? this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(t)) : e.text(this);
  }, wrapAll: function(t) {
    if (e.isFunction(t))
      return this.each(function(a) {
        e(this).wrapAll(t.call(this, a));
      });
    if (this[0]) {
      var r = e(t, this[0].ownerDocument).eq(0).clone(!0);
      this[0].parentNode && r.insertBefore(this[0]), r.map(function() {
        for (var a = this; a.firstChild && a.firstChild.nodeType === 1; )
          a = a.firstChild;
        return a;
      }).append(this);
    }
    return this;
  }, wrapInner: function(t) {
    return e.isFunction(t) ? this.each(function(r) {
      e(this).wrapInner(t.call(this, r));
    }) : this.each(function() {
      var r = e(this), a = r.contents();
      a.length ? a.wrapAll(t) : r.append(t);
    });
  }, wrap: function(t) {
    return this.each(function() {
      e(this).wrapAll(t);
    });
  }, unwrap: function() {
    return this.parent().each(function() {
      e.nodeName(this, "body") || e(this).replaceWith(this.childNodes);
    }).end();
  }, append: function() {
    return this.domManip(arguments, !0, function(t) {
      this.nodeType === 1 && this.appendChild(t);
    });
  }, prepend: function() {
    return this.domManip(arguments, !0, function(t) {
      this.nodeType === 1 && this.insertBefore(t, this.firstChild);
    });
  }, before: function() {
    if (this[0] && this[0].parentNode)
      return this.domManip(arguments, !1, function(r) {
        this.parentNode.insertBefore(r, this);
      });
    if (arguments.length) {
      var t = e(arguments[0]);
      return t.push.apply(t, this.toArray()), this.pushStack(t, "before", arguments);
    }
  }, after: function() {
    if (this[0] && this[0].parentNode)
      return this.domManip(arguments, !1, function(r) {
        this.parentNode.insertBefore(r, this.nextSibling);
      });
    if (arguments.length) {
      var t = this.pushStack(this, "after", arguments);
      return t.push.apply(t, e(arguments[0]).toArray()), t;
    }
  }, remove: function(t, r) {
    for (var a = 0, s; (s = this[a]) != null; a++)
      (!t || e.filter(t, [s]).length) && (!r && s.nodeType === 1 && (e.cleanData(s.getElementsByTagName("*")), e.cleanData([s])), s.parentNode && s.parentNode.removeChild(s));
    return this;
  }, empty: function() {
    for (var t = 0, r; (r = this[t]) != null; t++)
      for (r.nodeType === 1 && e.cleanData(r.getElementsByTagName("*")); r.firstChild; )
        r.removeChild(r.firstChild);
    return this;
  }, clone: function(t, r) {
    return t = t == null ? !1 : t, r = r == null ? t : r, this.map(function() {
      return e.clone(this, t, r);
    });
  }, html: function(t) {
    if (t === j)
      return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(Be, "") : null;
    if (typeof t != "string" || Pe.test(t) || !e.support.leadingWhitespace && ue.test(t) || De[(ke.exec(t) || ["", ""])[1].toLowerCase()])
      e.isFunction(t) ? this.each(function(s) {
        var u = e(this);
        u.html(t.call(this, s, u.html()));
      }) : this.empty().append(t);
    else {
      t = t.replace(Ae, "<$1></$2>");
      try {
        for (var r = 0, a = this.length; r < a; r++)
          this[r].nodeType === 1 && (e.cleanData(this[r].getElementsByTagName("*")), this[r].innerHTML = t);
      } catch {
        this.empty().append(t);
      }
    }
    return this;
  }, replaceWith: function(t) {
    return this[0] && this[0].parentNode ? e.isFunction(t) ? this.each(function(r) {
      var a = e(this), s = a.html();
      a.replaceWith(t.call(this, r, s));
    }) : (typeof t != "string" && (t = e(t).detach()), this.each(function() {
      var r = this.nextSibling, a = this.parentNode;
      e(this).remove(), r ? e(r).before(t) : e(a).append(t);
    })) : this.length ? this.pushStack(e(e.isFunction(t) ? t() : t), "replaceWith", t) : this;
  }, detach: function(t) {
    return this.remove(t, !0);
  }, domManip: function(t, r, a) {
    var s, u, f, y, b = t[0], I = [];
    if (!e.support.checkClone && arguments.length === 3 && typeof b == "string" && Me.test(b))
      return this.each(function() {
        e(this).domManip(t, r, a, !0);
      });
    if (e.isFunction(b))
      return this.each(function(X) {
        var q = e(this);
        t[0] = b.call(this, X, r ? q.html() : j), q.domManip(t, r, a);
      });
    if (this[0]) {
      if (y = b && b.parentNode, e.support.parentNode && y && y.nodeType === 11 && y.childNodes.length === this.length ? s = { fragment: y } : s = e.buildFragment(t, this, I), f = s.fragment, f.childNodes.length === 1 ? u = f = f.firstChild : u = f.firstChild, u) {
        r = r && e.nodeName(u, "tr");
        for (var g = 0, L = this.length, W = L - 1; g < L; g++)
          a.call(r ? P(this[g]) : this[g], s.cacheable || L > 1 && g < W ? e.clone(f, !0, !0) : f);
      }
      I.length && e.each(I, de);
    }
    return this;
  } }), e.buildFragment = function(t, r, a) {
    var s, u, f, y = r && r[0] ? r[0].ownerDocument || r[0] : o;
    return t.length === 1 && typeof t[0] == "string" && t[0].length < 512 && y === o && t[0].charAt(0) === "<" && !Pe.test(t[0]) && (e.support.checkClone || !Me.test(t[0])) && (u = !0, f = e.fragments[t[0]], f && f !== 1 && (s = f)), s || (s = y.createDocumentFragment(), e.clean(t, y, s, a)), u && (e.fragments[t[0]] = f ? s : 1), { fragment: s, cacheable: u };
  }, e.fragments = {}, e.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, r) {
    e.fn[t] = function(a) {
      var s = [], u = e(a), f = this.length === 1 && this[0].parentNode;
      if (f && f.nodeType === 11 && f.childNodes.length === 1 && u.length === 1)
        return u[r](this[0]), this;
      for (var y = 0, b = u.length; y < b; y++) {
        var I = (y > 0 ? this.clone(!0) : this).get();
        e(u[y])[r](I), s = s.concat(I);
      }
      return this.pushStack(s, t, u.selector);
    };
  }), e.extend({ clone: function(t, r, a) {
    var s = t.cloneNode(!0), u, f, y;
    if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (t.nodeType === 1 || t.nodeType === 11) && !e.isXMLDoc(t))
      for (B(t, s), u = be(t), f = be(s), y = 0; u[y]; ++y)
        B(u[y], f[y]);
    if (r && (S(t, s), a))
      for (u = be(t), f = be(s), y = 0; u[y]; ++y)
        S(u[y], f[y]);
    return s;
  }, clean: function(t, r, a, s) {
    r = r || o, typeof r.createElement > "u" && (r = r.ownerDocument || r[0] && r[0].ownerDocument || o);
    for (var u = [], f = 0, y; (y = t[f]) != null; f++)
      if (typeof y == "number" && (y += ""), !!y) {
        if (typeof y != "string" || tt.test(y)) {
          if (typeof y == "string") {
            y = y.replace(Ae, "<$1></$2>");
            var b = (ke.exec(y) || ["", ""])[1].toLowerCase(), I = De[b] || De._default, g = I[0], L = r.createElement("div");
            for (L.innerHTML = I[1] + y + I[2]; g--; )
              L = L.lastChild;
            if (!e.support.tbody)
              for (var W = Fe.test(y), X = b === "table" && !W ? L.firstChild && L.firstChild.childNodes : I[1] === "<table>" && !W ? L.childNodes : [], q = X.length - 1; q >= 0; --q)
                e.nodeName(X[q], "tbody") && !X[q].childNodes.length && X[q].parentNode.removeChild(X[q]);
            !e.support.leadingWhitespace && ue.test(y) && L.insertBefore(r.createTextNode(ue.exec(y)[0]), L.firstChild), y = L.childNodes;
          }
        } else
          y = r.createTextNode(y);
        y.nodeType ? u.push(y) : u = e.merge(u, y);
      }
    if (a)
      for (f = 0; u[f]; f++)
        !s || !e.nodeName(u[f], "script") || u[f].type && u[f].type.toLowerCase() !== "text/javascript" ? (u[f].nodeType === 1 && u.splice.apply(u, [f + 1, 0].concat(e.makeArray(u[f].getElementsByTagName("script")))), a.appendChild(u[f])) : s.push(u[f].parentNode ? u[f].parentNode.removeChild(u[f]) : u[f]);
    return u;
  }, cleanData: function(t) {
    for (var r, a, s = e.cache, u = e.expando, f = e.event.special, y = e.support.deleteExpando, b = 0, I; (I = t[b]) != null; b++)
      if (!(I.nodeName && e.noData[I.nodeName.toLowerCase()]) && (a = I[e.expando], a)) {
        if (r = s[a] && s[a][u], r && r.events) {
          for (var g in r.events)
            f[g] ? e.event.remove(I, g) : e.removeEvent(I, g, r.handle);
          r.handle && (r.handle.elem = null);
        }
        y ? delete I[e.expando] : I.removeAttribute && I.removeAttribute(e.expando), delete s[a];
      }
  } });
  var Ze = /alpha\([^)]*\)/i, rt = /opacity=([^)]*)/, ht = /-([a-z])/ig, Nt = /([A-Z]|^ms)/g, at = /^-?\d+(?:px)?$/i, Pt = /^-?\d/, _t = { position: "absolute", visibility: "hidden", display: "block" }, Ct = ["Left", "Right"], kt = ["Top", "Bottom"], Je, pt, lt, It = function(t, r) {
    return r.toUpperCase();
  };
  e.fn.css = function(t, r) {
    return arguments.length === 2 && r === j ? this : e.access(this, t, r, !0, function(a, s, u) {
      return u !== j ? e.style(a, s, u) : e.css(a, s);
    });
  }, e.extend({ cssHooks: { opacity: { get: function(t, r) {
    if (r) {
      var a = Je(t, "opacity", "opacity");
      return a === "" ? "1" : a;
    }
    return t.style.opacity;
  } } }, cssNumber: { zIndex: !0, fontWeight: !0, opacity: !0, zoom: !0, lineHeight: !0 }, cssProps: { float: e.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(t, r, a, s) {
    if (t && t.nodeType !== 3 && t.nodeType !== 8 && t.style) {
      var u, f = e.camelCase(r), y = t.style, b = e.cssHooks[f];
      if (r = e.cssProps[f] || f, a === j)
        return b && "get" in b && (u = b.get(t, !1, s)) !== j ? u : y[r];
      if (typeof a == "number" && isNaN(a) || a == null)
        return;
      if (typeof a == "number" && !e.cssNumber[f] && (a += "px"), !b || !("set" in b) || (a = b.set(t, a)) !== j)
        try {
          y[r] = a;
        } catch {
        }
    }
  }, css: function(t, r, a) {
    var s, u = e.camelCase(r), f = e.cssHooks[u];
    if (r = e.cssProps[u] || u, f && "get" in f && (s = f.get(t, !0, a)) !== j)
      return s;
    if (Je)
      return Je(t, r, u);
  }, swap: function(t, r, a) {
    var s = {};
    for (var u in r)
      s[u] = t.style[u], t.style[u] = r[u];
    a.call(t);
    for (u in r)
      t.style[u] = s[u];
  }, camelCase: function(t) {
    return t.replace(ht, It);
  } }), e.curCSS = e.css, e.each(["height", "width"], function(t, r) {
    e.cssHooks[r] = { get: function(a, s, u) {
      var f;
      if (s)
        return a.offsetWidth !== 0 ? f = x(a, r, u) : e.swap(a, _t, function() {
          f = x(a, r, u);
        }), f <= 0 && (f = Je(a, r, r), f === "0px" && lt && (f = lt(a, r, r)), f != null) ? f === "" || f === "auto" ? "0px" : f : f < 0 || f == null ? (f = a.style[r], f === "" || f === "auto" ? "0px" : f) : typeof f == "string" ? f : f + "px";
    }, set: function(a, s) {
      if (!at.test(s))
        return s;
      if (s = parseFloat(s), s >= 0)
        return s + "px";
    } };
  }), e.support.opacity || (e.cssHooks.opacity = { get: function(t, r) {
    return rt.test((r && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : r ? "1" : "";
  }, set: function(t, r) {
    var a = t.style;
    a.zoom = 1;
    var s = e.isNaN(r) ? "" : "alpha(opacity=" + r * 100 + ")", u = a.filter || "";
    a.filter = Ze.test(u) ? u.replace(Ze, s) : a.filter + " " + s;
  } }), e(function() {
    e.support.reliableMarginRight || (e.cssHooks.marginRight = { get: function(t, r) {
      var a;
      return e.swap(t, { display: "inline-block" }, function() {
        r ? a = Je(t, "margin-right", "marginRight") : a = t.style.marginRight;
      }), a;
    } });
  }), o.defaultView && o.defaultView.getComputedStyle && (pt = function(t, r, a) {
    var s, u, f;
    return a = a.replace(Nt, "-$1").toLowerCase(), (u = t.ownerDocument.defaultView) ? ((f = u.getComputedStyle(t, null)) && (s = f.getPropertyValue(a), s === "" && !e.contains(t.ownerDocument.documentElement, t) && (s = e.style(t, a))), s) : j;
  }), o.documentElement.currentStyle && (lt = function(t, r) {
    var a, s = t.currentStyle && t.currentStyle[r], u = t.runtimeStyle && t.runtimeStyle[r], f = t.style;
    return !at.test(s) && Pt.test(s) && (a = f.left, u && (t.runtimeStyle.left = t.currentStyle.left), f.left = r === "fontSize" ? "1em" : s || 0, s = f.pixelLeft + "px", f.left = a, u && (t.runtimeStyle.left = u)), s === "" ? "auto" : s;
  }), Je = pt || lt, e.expr && e.expr.filters && (e.expr.filters.hidden = function(t) {
    var r = t.offsetWidth, a = t.offsetHeight;
    return r === 0 && a === 0 || !e.support.reliableHiddenOffsets && (t.style.display || e.css(t, "display")) === "none";
  }, e.expr.filters.visible = function(t) {
    return !e.expr.filters.hidden(t);
  });
  var wt = /%20/g, St = /\[\]$/, Lt = /\r?\n/g, Rt = /#.*$/, Ft = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Mt = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Ht = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/, ze = /^(?:GET|HEAD)$/, Tt = /^\/\//, st = /\?/, vt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Ee = /^(?:select|textarea)/i, mt = /\s+/, jt = /([?&])_=[^&]*/, Bt = /(^|\-)([a-z])/g, zt = function(t, r, a) {
    return r + a.toUpperCase();
  }, ut = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ct = e.fn.load, nt = {}, it = {}, Qe, Ye;
  try {
    Qe = o.location.href;
  } catch {
    Qe = o.createElement("a"), Qe.href = "", Qe = Qe.href;
  }
  Ye = ut.exec(Qe.toLowerCase()) || [], e.fn.extend({ load: function(t, r, a) {
    if (typeof t != "string" && ct)
      return ct.apply(this, arguments);
    if (!this.length)
      return this;
    var s = t.indexOf(" ");
    if (s >= 0) {
      var u = t.slice(s, t.length);
      t = t.slice(0, s);
    }
    var f = "GET";
    r && (e.isFunction(r) ? (a = r, r = j) : typeof r == "object" && (r = e.param(r, e.ajaxSettings.traditional), f = "POST"));
    var y = this;
    return e.ajax({ url: t, type: f, dataType: "html", data: r, complete: function(b, I, g) {
      g = b.responseText, b.isResolved() && (b.done(function(L) {
        g = L;
      }), y.html(u ? e("<div>").append(g.replace(vt, "")).find(u) : g)), a && y.each(a, [g, I, b]);
    } }), this;
  }, serialize: function() {
    return e.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      return this.elements ? e.makeArray(this.elements) : this;
    }).filter(function() {
      return this.name && !this.disabled && (this.checked || Ee.test(this.nodeName) || Mt.test(this.type));
    }).map(function(t, r) {
      var a = e(this).val();
      return a == null ? null : e.isArray(a) ? e.map(a, function(s, u) {
        return { name: r.name, value: s.replace(Lt, `\r
`) };
      }) : { name: r.name, value: a.replace(Lt, `\r
`) };
    }).get();
  } }), e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, r) {
    e.fn[r] = function(a) {
      return this.bind(r, a);
    };
  }), e.each(["get", "post"], function(t, r) {
    e[r] = function(a, s, u, f) {
      return e.isFunction(s) && (f = f || u, u = s, s = j), e.ajax({ type: r, url: a, data: s, success: u, dataType: f });
    };
  }), e.extend({ getScript: function(t, r) {
    return e.get(t, j, r, "script");
  }, getJSON: function(t, r, a) {
    return e.get(t, r, a, "json");
  }, ajaxSetup: function(t, r) {
    r ? e.extend(!0, t, e.ajaxSettings, r) : (r = t, t = e.extend(!0, e.ajaxSettings, r));
    for (var a in { context: 1, url: 1 })
      a in r ? t[a] = r[a] : a in e.ajaxSettings && (t[a] = e.ajaxSettings[a]);
    return t;
  }, ajaxSettings: { url: Qe, isLocal: Ht.test(Ye[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": "*/*" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": J.String, "text html": !0, "text json": e.parseJSON, "text xml": e.parseXML } }, ajaxPrefilter: te(nt), ajaxTransport: te(it), ajax: function(t, r) {
    function a(O, D, U, G) {
      if (fe !== 2) {
        fe = 2, re && clearTimeout(re), q = j, W = G || "", N.readyState = O ? 4 : 0;
        var K, ne, Te, xe = U ? Ge(s, N, U) : j, k, M;
        if (O >= 200 && O < 300 || O === 304)
          if (s.ifModified && ((k = N.getResponseHeader("Last-Modified")) && (e.lastModified[g] = k), (M = N.getResponseHeader("Etag")) && (e.etag[g] = M)), O === 304)
            D = "notmodified", K = !0;
          else
            try {
              ne = $e(s, xe), D = "success", K = !0;
            } catch (Y) {
              D = "parsererror", Te = Y;
            }
        else
          Te = D, (!D || O) && (D = "error", O < 0 && (O = 0));
        N.status = O, N.statusText = D, K ? y.resolveWith(u, [ne, D, N]) : y.rejectWith(u, [N, D, Te]), N.statusCode(I), I = j, _e && f.trigger("ajax" + (K ? "Success" : "Error"), [N, s, K ? ne : Te]), b.resolveWith(u, [N, D]), _e && (f.trigger("ajaxComplete", [N, s]), --e.active || e.event.trigger("ajaxStop"));
      }
    }
    typeof t == "object" && (r = t, t = j), r = r || {};
    var s = e.ajaxSetup({}, r), u = s.context || s, f = u !== s && (u.nodeType || u instanceof e) ? e(u) : e.event, y = e.Deferred(), b = e._Deferred(), I = s.statusCode || {}, g, L = {}, W, X, q, re, ce, fe = 0, _e, p, N = { readyState: 0, setRequestHeader: function(O, D) {
      return fe || (L[O.toLowerCase().replace(Bt, zt)] = D), this;
    }, getAllResponseHeaders: function() {
      return fe === 2 ? W : null;
    }, getResponseHeader: function(O) {
      var D;
      if (fe === 2) {
        if (!X)
          for (X = {}; D = Ft.exec(W); )
            X[D[1].toLowerCase()] = D[2];
        D = X[O.toLowerCase()];
      }
      return D === j ? null : D;
    }, overrideMimeType: function(O) {
      return fe || (s.mimeType = O), this;
    }, abort: function(O) {
      return O = O || "abort", q && q.abort(O), a(0, O), this;
    } };
    if (y.promise(N), N.success = N.done, N.error = N.fail, N.complete = b.done, N.statusCode = function(O) {
      if (O) {
        var D;
        if (fe < 2)
          for (D in O)
            I[D] = [I[D], O[D]];
        else
          D = O[N.status], N.then(D, D);
      }
      return this;
    }, s.url = ((t || s.url) + "").replace(Rt, "").replace(Tt, Ye[1] + "//"), s.dataTypes = e.trim(s.dataType || "*").toLowerCase().split(mt), s.crossDomain == null && (ce = ut.exec(s.url.toLowerCase()), s.crossDomain = ce && (ce[1] != Ye[1] || ce[2] != Ye[2] || (ce[3] || (ce[1] === "http:" ? 80 : 443)) != (Ye[3] || (Ye[1] === "http:" ? 80 : 443)))), s.data && s.processData && typeof s.data != "string" && (s.data = e.param(s.data, s.traditional)), oe(nt, s, r, N), fe === 2)
      return !1;
    if (_e = s.global, s.type = s.type.toUpperCase(), s.hasContent = !ze.test(s.type), _e && e.active++ === 0 && e.event.trigger("ajaxStart"), !s.hasContent && (s.data && (s.url += (st.test(s.url) ? "&" : "?") + s.data), g = s.url, s.cache === !1)) {
      var F = e.now(), _ = s.url.replace(jt, "$1_=" + F);
      s.url = _ + (_ === s.url ? (st.test(s.url) ? "&" : "?") + "_=" + F : "");
    }
    (s.data && s.hasContent && s.contentType !== !1 || r.contentType) && (L["Content-Type"] = s.contentType), s.ifModified && (g = g || s.url, e.lastModified[g] && (L["If-Modified-Since"] = e.lastModified[g]), e.etag[g] && (L["If-None-Match"] = e.etag[g])), L.Accept = s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : s.accepts["*"];
    for (p in s.headers)
      N.setRequestHeader(p, s.headers[p]);
    if (s.beforeSend && (s.beforeSend.call(u, N, s) === !1 || fe === 2))
      return N.abort(), !1;
    for (p in { success: 1, error: 1, complete: 1 })
      N[p](s[p]);
    if (q = oe(it, s, r, N), q) {
      N.readyState = 1, _e && f.trigger("ajaxSend", [N, s]), s.async && s.timeout > 0 && (re = setTimeout(function() {
        N.abort("timeout");
      }, s.timeout));
      try {
        fe = 1, q.send(L, a);
      } catch (O) {
        status < 2 ? a(-1, O) : e.error(O);
      }
    } else
      a(-1, "No Transport");
    return N;
  }, param: function(t, r) {
    var a = [], s = function(f, y) {
      y = e.isFunction(y) ? y() : y, a[a.length] = encodeURIComponent(f) + "=" + encodeURIComponent(y);
    };
    if (r === j && (r = e.ajaxSettings.traditional), e.isArray(t) || t.jquery && !e.isPlainObject(t))
      e.each(t, function() {
        s(this.name, this.value);
      });
    else
      for (var u in t)
        ee(u, t[u], r, s);
    return a.join("&").replace(wt, "+");
  } }), e.extend({ active: 0, lastModified: {}, etag: {} });
  var Ut = e.now(), ft = /(\=)\?(&|$)|\?\?/i;
  e.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    return e.expando + "_" + Ut++;
  } }), e.ajaxPrefilter("json jsonp", function(t, r, a) {
    var s = typeof t.data == "string";
    if (t.dataTypes[0] === "jsonp" || r.jsonpCallback || r.jsonp != null || t.jsonp !== !1 && (ft.test(t.url) || s && ft.test(t.data))) {
      var u, f = t.jsonpCallback = e.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, y = J[f], b = t.url, I = t.data, g = "$1" + f + "$2", L = function() {
        J[f] = y, u && e.isFunction(y) && J[f](u[0]);
      };
      return t.jsonp !== !1 && (b = b.replace(ft, g), t.url === b && (s && (I = I.replace(ft, g)), t.data === I && (b += (/\?/.test(b) ? "&" : "?") + t.jsonp + "=" + f))), t.url = b, t.data = I, J[f] = function(W) {
        u = [W];
      }, a.then(L, L), t.converters["script json"] = function() {
        return u || e.error(f + " was not called"), u[0];
      }, t.dataTypes[0] = "json", "script";
    }
  }), e.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(t) {
    return e.globalEval(t), t;
  } } }), e.ajaxPrefilter("script", function(t) {
    t.cache === j && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
  }), e.ajaxTransport("script", function(t) {
    if (t.crossDomain) {
      var r, a = o.head || o.getElementsByTagName("head")[0] || o.documentElement;
      return { send: function(s, u) {
        r = o.createElement("script"), r.async = "async", t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function(f, y) {
          (!r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, a && r.parentNode && a.removeChild(r), r = j, y || u(200, "success"));
        }, a.insertBefore(r, a.firstChild);
      }, abort: function() {
        r && r.onload(0, 1);
      } };
    }
  });
  var At = e.now(), Xe, ot;
  e.ajaxSettings.xhr = J.ActiveXObject ? function() {
    return !this.isLocal && We() || Oe();
  } : We, ot = e.ajaxSettings.xhr(), e.support.ajax = !!ot, e.support.cors = ot && "withCredentials" in ot, ot = j, e.support.ajax && e.ajaxTransport(function(t) {
    if (!t.crossDomain || e.support.cors) {
      var r;
      return { send: function(a, s) {
        var u = t.xhr(), f, y;
        if (t.username ? u.open(t.type, t.url, t.async, t.username, t.password) : u.open(t.type, t.url, t.async), t.xhrFields)
          for (y in t.xhrFields)
            u[y] = t.xhrFields[y];
        t.mimeType && u.overrideMimeType && u.overrideMimeType(t.mimeType), !t.crossDomain && !a["X-Requested-With"] && (a["X-Requested-With"] = "XMLHttpRequest");
        try {
          for (y in a)
            u.setRequestHeader(y, a[y]);
        } catch {
        }
        u.send(t.hasContent && t.data || null), r = function(b, I) {
          var g, L, W, X, q;
          try {
            if (r && (I || u.readyState === 4))
              if (r = j, f && (u.onreadystatechange = e.noop, delete Xe[f]), I)
                u.readyState !== 4 && u.abort();
              else {
                g = u.status, W = u.getAllResponseHeaders(), X = {}, q = u.responseXML, q && q.documentElement && (X.xml = q), X.text = u.responseText;
                try {
                  L = u.statusText;
                } catch {
                  L = "";
                }
                g || !t.isLocal || t.crossDomain ? g === 1223 && (g = 204) : g = X.text ? 200 : 404;
              }
          } catch (re) {
            I || s(-1, re);
          }
          X && s(g, L, X, W);
        }, t.async && u.readyState !== 4 ? (Xe || (Xe = {}, He()), f = At++, u.onreadystatechange = Xe[f] = r) : r();
      }, abort: function() {
        r && r(0, 1);
      } };
    }
  });
  var yt = {}, Kt = /^(?:toggle|show|hide)$/, Vt = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, Dt, Yt = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
  e.fn.extend({ show: function(t, r, a) {
    var s, u;
    if (t || t === 0)
      return this.animate(Se("show", 3), t, r, a);
    for (var f = 0, y = this.length; f < y; f++)
      s = this[f], u = s.style.display, !e._data(s, "olddisplay") && u === "none" && (u = s.style.display = ""), u === "" && e.css(s, "display") === "none" && e._data(s, "olddisplay", ve(s.nodeName));
    for (f = 0; f < y; f++)
      s = this[f], u = s.style.display, (u === "" || u === "none") && (s.style.display = e._data(s, "olddisplay") || "");
    return this;
  }, hide: function(t, r, a) {
    if (t || t === 0)
      return this.animate(Se("hide", 3), t, r, a);
    for (var s = 0, u = this.length; s < u; s++) {
      var f = e.css(this[s], "display");
      f !== "none" && !e._data(this[s], "olddisplay") && e._data(this[s], "olddisplay", f);
    }
    for (s = 0; s < u; s++)
      this[s].style.display = "none";
    return this;
  }, _toggle: e.fn.toggle, toggle: function(t, r, a) {
    var s = typeof t == "boolean";
    return e.isFunction(t) && e.isFunction(r) ? this._toggle.apply(this, arguments) : t == null || s ? this.each(function() {
      var u = s ? t : e(this).is(":hidden");
      e(this)[u ? "show" : "hide"]();
    }) : this.animate(Se("toggle", 3), t, r, a), this;
  }, fadeTo: function(t, r, a, s) {
    return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: r }, t, a, s);
  }, animate: function(t, r, a, s) {
    var u = e.speed(r, a, s);
    return e.isEmptyObject(t) ? this.each(u.complete) : this[u.queue === !1 ? "each" : "queue"](function() {
      var f = e.extend({}, u), y, b = this.nodeType === 1, I = b && e(this).is(":hidden"), g = this;
      for (y in t) {
        var L = e.camelCase(y);
        if (y !== L && (t[L] = t[y], delete t[y], y = L), t[y] === "hide" && I || t[y] === "show" && !I)
          return f.complete.call(this);
        if (b && (y === "height" || y === "width") && (f.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], e.css(this, "display") === "inline" && e.css(this, "float") === "none"))
          if (e.support.inlineBlockNeedsLayout) {
            var W = ve(this.nodeName);
            W === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1);
          } else
            this.style.display = "inline-block";
        e.isArray(t[y]) && ((f.specialEasing = f.specialEasing || {})[y] = t[y][1], t[y] = t[y][0]);
      }
      return f.overflow != null && (this.style.overflow = "hidden"), f.curAnim = e.extend({}, t), e.each(t, function(X, q) {
        var re = new e.fx(g, f, X);
        if (Kt.test(q))
          re[q === "toggle" ? I ? "show" : "hide" : q](t);
        else {
          var ce = Vt.exec(q), fe = re.cur();
          if (ce) {
            var _e = parseFloat(ce[2]), p = ce[3] || (e.cssNumber[X] ? "" : "px");
            p !== "px" && (e.style(g, X, (_e || 1) + p), fe = (_e || 1) / re.cur() * fe, e.style(g, X, fe + p)), ce[1] && (_e = (ce[1] === "-=" ? -1 : 1) * _e + fe), re.custom(fe, _e, p);
          } else
            re.custom(fe, q, "");
        }
      }), !0;
    });
  }, stop: function(t, r) {
    var a = e.timers;
    return t && this.queue([]), this.each(function() {
      for (var s = a.length - 1; s >= 0; s--)
        a[s].elem === this && (r && a[s](!0), a.splice(s, 1));
    }), r || this.dequeue(), this;
  } }), e.each({ slideDown: Se("show", 1), slideUp: Se("hide", 1), slideToggle: Se("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, r) {
    e.fn[t] = function(a, s, u) {
      return this.animate(r, a, s, u);
    };
  }), e.extend({ speed: function(t, r, a) {
    var s = t && typeof t == "object" ? e.extend({}, t) : { complete: a || !a && r || e.isFunction(t) && t, duration: t, easing: a && r || r && !e.isFunction(r) && r };
    return s.duration = e.fx.off ? 0 : typeof s.duration == "number" ? s.duration : s.duration in e.fx.speeds ? e.fx.speeds[s.duration] : e.fx.speeds._default, s.old = s.complete, s.complete = function() {
      s.queue !== !1 && e(this).dequeue(), e.isFunction(s.old) && s.old.call(this);
    }, s;
  }, easing: { linear: function(t, r, a, s) {
    return a + s * t;
  }, swing: function(t, r, a, s) {
    return (-Math.cos(t * Math.PI) / 2 + 0.5) * s + a;
  } }, timers: [], fx: function(t, r, a) {
    this.options = r, this.elem = t, this.prop = a, r.orig || (r.orig = {});
  } }), e.fx.prototype = { update: function() {
    this.options.step && this.options.step.call(this.elem, this.now, this), (e.fx.step[this.prop] || e.fx.step._default)(this);
  }, cur: function() {
    if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
      return this.elem[this.prop];
    var t, r = e.css(this.elem, this.prop);
    return isNaN(t = parseFloat(r)) ? !r || r === "auto" ? 0 : r : t;
  }, custom: function(t, r, a) {
    function s(y) {
      return u.step(y);
    }
    var u = this, f = e.fx;
    this.startTime = e.now(), this.start = t, this.end = r, this.unit = a || this.unit || (e.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, s.elem = this.elem, s() && e.timers.push(s) && !Dt && (Dt = setInterval(f.tick, f.interval));
  }, show: function() {
    this.options.orig[this.prop] = e.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), e(this.elem).show();
  }, hide: function() {
    this.options.orig[this.prop] = e.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
  }, step: function(t) {
    var r = e.now(), a = !0;
    if (t || r >= this.options.duration + this.startTime) {
      this.now = this.end, this.pos = this.state = 1, this.update(), this.options.curAnim[this.prop] = !0;
      for (var s in this.options.curAnim)
        this.options.curAnim[s] !== !0 && (a = !1);
      if (a) {
        if (this.options.overflow != null && !e.support.shrinkWrapBlocks) {
          var u = this.elem, f = this.options;
          e.each(["", "X", "Y"], function(L, W) {
            u.style["overflow" + W] = f.overflow[L];
          });
        }
        if (this.options.hide && e(this.elem).hide(), this.options.hide || this.options.show)
          for (var y in this.options.curAnim)
            e.style(this.elem, y, this.options.orig[y]);
        this.options.complete.call(this.elem);
      }
      return !1;
    }
    var b = r - this.startTime;
    this.state = b / this.options.duration;
    var I = this.options.specialEasing && this.options.specialEasing[this.prop], g = this.options.easing || (e.easing.swing ? "swing" : "linear");
    return this.pos = e.easing[I || g](this.state, b, 0, 1, this.options.duration), this.now = this.start + (this.end - this.start) * this.pos, this.update(), !0;
  } }, e.extend(e.fx, { tick: function() {
    for (var t = e.timers, r = 0; r < t.length; r++)
      t[r]() || t.splice(r--, 1);
    t.length || e.fx.stop();
  }, interval: 13, stop: function() {
    clearInterval(Dt), Dt = null;
  }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function(t) {
    e.style(t.elem, "opacity", t.now);
  }, _default: function(t) {
    t.elem.style && t.elem.style[t.prop] != null ? t.elem.style[t.prop] = (t.prop === "width" || t.prop === "height" ? Math.max(0, t.now) : t.now) + t.unit : t.elem[t.prop] = t.now;
  } } }), e.expr && e.expr.filters && (e.expr.filters.animated = function(t) {
    return e.grep(e.timers, function(r) {
      return t === r.elem;
    }).length;
  });
  var Xt = /^t(?:able|d|h)$/i, qt = /^(?:body|html)$/i;
  "getBoundingClientRect" in o.documentElement ? e.fn.offset = function(t) {
    var r = this[0], a;
    if (t)
      return this.each(function(q) {
        e.offset.setOffset(this, t, q);
      });
    if (!r || !r.ownerDocument)
      return null;
    if (r === r.ownerDocument.body)
      return e.offset.bodyOffset(r);
    try {
      a = r.getBoundingClientRect();
    } catch {
    }
    var s = r.ownerDocument, u = s.documentElement;
    if (!a || !e.contains(u, r))
      return a ? { top: a.top, left: a.left } : { top: 0, left: 0 };
    var f = s.body, y = Ne(s), b = u.clientTop || f.clientTop || 0, I = u.clientLeft || f.clientLeft || 0, g = y.pageYOffset || e.support.boxModel && u.scrollTop || f.scrollTop, L = y.pageXOffset || e.support.boxModel && u.scrollLeft || f.scrollLeft, W = a.top + g - b, X = a.left + L - I;
    return { top: W, left: X };
  } : e.fn.offset = function(t) {
    var r = this[0];
    if (t)
      return this.each(function(W) {
        e.offset.setOffset(this, t, W);
      });
    if (!r || !r.ownerDocument)
      return null;
    if (r === r.ownerDocument.body)
      return e.offset.bodyOffset(r);
    e.offset.initialize();
    for (var a, s = r.offsetParent, u = r.ownerDocument, f = u.documentElement, y = u.body, b = u.defaultView, I = b ? b.getComputedStyle(r, null) : r.currentStyle, g = r.offsetTop, L = r.offsetLeft; (r = r.parentNode) && r !== y && r !== f && !(e.offset.supportsFixedPosition && I.position === "fixed"); )
      a = b ? b.getComputedStyle(r, null) : r.currentStyle, g -= r.scrollTop, L -= r.scrollLeft, r === s && (g += r.offsetTop, L += r.offsetLeft, e.offset.doesNotAddBorder && (!e.offset.doesAddBorderForTableAndCells || !Xt.test(r.nodeName)) && (g += parseFloat(a.borderTopWidth) || 0, L += parseFloat(a.borderLeftWidth) || 0), s = r.offsetParent), e.offset.subtractsBorderForOverflowNotVisible && a.overflow !== "visible" && (g += parseFloat(a.borderTopWidth) || 0, L += parseFloat(a.borderLeftWidth) || 0), I = a;
    return (I.position === "relative" || I.position === "static") && (g += y.offsetTop, L += y.offsetLeft), e.offset.supportsFixedPosition && I.position === "fixed" && (g += Math.max(f.scrollTop, y.scrollTop), L += Math.max(f.scrollLeft, y.scrollLeft)), { top: g, left: L };
  }, e.offset = { initialize: function() {
    var t = o.body, r = o.createElement("div"), a, s, u, f = parseFloat(e.css(t, "marginTop")) || 0, y = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
    e.extend(r.style, { position: "absolute", top: 0, left: 0, margin: 0, border: 0, width: "1px", height: "1px", visibility: "hidden" }), r.innerHTML = y, t.insertBefore(r, t.firstChild), a = r.firstChild, s = a.firstChild, u = a.nextSibling.firstChild.firstChild, this.doesNotAddBorder = s.offsetTop !== 5, this.doesAddBorderForTableAndCells = u.offsetTop === 5, s.style.position = "fixed", s.style.top = "20px", this.supportsFixedPosition = s.offsetTop === 20 || s.offsetTop === 15, s.style.position = s.style.top = "", a.style.overflow = "hidden", a.style.position = "relative", this.subtractsBorderForOverflowNotVisible = s.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = t.offsetTop !== f, t.removeChild(r), e.offset.initialize = e.noop;
  }, bodyOffset: function(t) {
    var r = t.offsetTop, a = t.offsetLeft;
    return e.offset.initialize(), e.offset.doesNotIncludeMarginInBodyOffset && (r += parseFloat(e.css(t, "marginTop")) || 0, a += parseFloat(e.css(t, "marginLeft")) || 0), { top: r, left: a };
  }, setOffset: function(t, r, a) {
    var s = e.css(t, "position");
    s === "static" && (t.style.position = "relative");
    var u = e(t), f = u.offset(), y = e.css(t, "top"), b = e.css(t, "left"), I = (s === "absolute" || s === "fixed") && e.inArray("auto", [y, b]) > -1, g = {}, L = {}, W, X;
    I && (L = u.position()), W = I ? L.top : parseInt(y, 10) || 0, X = I ? L.left : parseInt(b, 10) || 0, e.isFunction(r) && (r = r.call(t, a, f)), r.top != null && (g.top = r.top - f.top + W), r.left != null && (g.left = r.left - f.left + X), "using" in r ? r.using.call(t, g) : u.css(g);
  } }, e.fn.extend({ position: function() {
    if (!this[0])
      return null;
    var t = this[0], r = this.offsetParent(), a = this.offset(), s = qt.test(r[0].nodeName) ? { top: 0, left: 0 } : r.offset();
    return a.top -= parseFloat(e.css(t, "marginTop")) || 0, a.left -= parseFloat(e.css(t, "marginLeft")) || 0, s.top += parseFloat(e.css(r[0], "borderTopWidth")) || 0, s.left += parseFloat(e.css(r[0], "borderLeftWidth")) || 0, { top: a.top - s.top, left: a.left - s.left };
  }, offsetParent: function() {
    return this.map(function() {
      for (var t = this.offsetParent || o.body; t && !qt.test(t.nodeName) && e.css(t, "position") === "static"; )
        t = t.offsetParent;
      return t;
    });
  } }), e.each(["Left", "Top"], function(t, r) {
    var a = "scroll" + r;
    e.fn[a] = function(s) {
      var u = this[0], f;
      return u ? s !== j ? this.each(function() {
        f = Ne(this), f ? f.scrollTo(t ? e(f).scrollLeft() : s, t ? s : e(f).scrollTop()) : this[a] = s;
      }) : (f = Ne(u), f ? "pageXOffset" in f ? f[t ? "pageYOffset" : "pageXOffset"] : e.support.boxModel && f.document.documentElement[a] || f.document.body[a] : u[a]) : null;
    };
  }), e.each(["Height", "Width"], function(t, r) {
    var a = r.toLowerCase();
    e.fn["inner" + r] = function() {
      return this[0] ? parseFloat(e.css(this[0], a, "padding")) : null;
    }, e.fn["outer" + r] = function(s) {
      return this[0] ? parseFloat(e.css(this[0], a, s ? "margin" : "border")) : null;
    }, e.fn[a] = function(s) {
      var u = this[0];
      if (!u)
        return s == null ? null : this;
      if (e.isFunction(s))
        return this.each(function(I) {
          var g = e(this);
          g[a](s.call(this, I, g[a]()));
        });
      if (e.isWindow(u)) {
        var f = u.document.documentElement["client" + r];
        return u.document.compatMode === "CSS1Compat" && f || u.document.body["client" + r] || f;
      }
      if (u.nodeType === 9)
        return Math.max(u.documentElement["client" + r], u.body["scroll" + r], u.documentElement["scroll" + r], u.body["offset" + r], u.documentElement["offset" + r]);
      if (s === j) {
        var y = e.css(u, a), b = parseFloat(y);
        return e.isNaN(b) ? y : b;
      }
      return this.css(a, typeof s == "string" ? s : s + "px");
    };
  }), J.jQuery = J.$ = e;
})(window);
(function(J) {
  var j = {}, Ne = {}, ve = {}, Se = {
    className: {
      BUTTON: "button",
      LEVEL: "level",
      ICO_LOADING: "ico_loading",
      SWITCH: "switch",
      NAME: "node_name"
    },
    event: {
      NODECREATED: "ztree_nodeCreated",
      CLICK: "ztree_click",
      EXPAND: "ztree_expand",
      COLLAPSE: "ztree_collapse",
      ASYNC_SUCCESS: "ztree_async_success",
      ASYNC_ERROR: "ztree_async_error",
      REMOVE: "ztree_remove",
      SELECTED: "ztree_selected",
      UNSELECTED: "ztree_unselected"
    },
    id: {
      A: "_a",
      ICON: "_ico",
      SPAN: "_span",
      SWITCH: "_switch",
      UL: "_ul"
    },
    line: {
      ROOT: "root",
      ROOTS: "roots",
      CENTER: "center",
      BOTTOM: "bottom",
      NOLINE: "noline",
      LINE: "line"
    },
    folder: {
      OPEN: "open",
      CLOSE: "close",
      DOCU: "docu"
    },
    node: {
      CURSELECTED: "curSelectedNode"
    }
  }, Oe = {
    treeId: "",
    treeObj: null,
    view: {
      addDiyDom: null,
      autoCancelSelected: !0,
      dblClickExpand: !0,
      expandSpeed: "fast",
      fontCss: {},
      nodeClasses: {},
      nameIsHTML: !1,
      selectedMulti: !0,
      showIcon: !0,
      showLine: !0,
      showTitle: !0,
      txtSelectedEnable: !1
    },
    data: {
      key: {
        isParent: "isParent",
        children: "children",
        name: "name",
        title: "",
        url: "url",
        icon: "icon"
      },
      render: {
        name: null,
        title: null
      },
      simpleData: {
        enable: !1,
        idKey: "id",
        pIdKey: "pId",
        rootPId: null
      },
      keep: {
        parent: !1,
        leaf: !1
      }
    },
    async: {
      enable: !1,
      contentType: "application/x-www-form-urlencoded",
      type: "post",
      dataType: "text",
      headers: {},
      xhrFields: {},
      url: "",
      autoParam: [],
      otherParam: [],
      dataFilter: null
    },
    callback: {
      beforeAsync: null,
      beforeClick: null,
      beforeDblClick: null,
      beforeRightClick: null,
      beforeMouseDown: null,
      beforeMouseUp: null,
      beforeExpand: null,
      beforeCollapse: null,
      beforeRemove: null,
      onAsyncError: null,
      onAsyncSuccess: null,
      onNodeCreated: null,
      onClick: null,
      onDblClick: null,
      onRightClick: null,
      onMouseDown: null,
      onMouseUp: null,
      onExpand: null,
      onCollapse: null,
      onRemove: null
    }
  }, We = function(n) {
    var i = x.getRoot(n);
    i || (i = {}, x.setRoot(n, i)), x.nodeChildren(n, i, []), i.expandTriggerFlag = !1, i.curSelectedList = [], i.noSelection = !0, i.createdNodes = [], i.zId = 0, i._ver = new Date().getTime();
  }, He = function(n) {
    var i = x.getCache(n);
    i || (i = {}, x.setCache(n, i)), i.nodes = [], i.doms = [];
  }, $e = function(n) {
    var i = n.treeObj, l = v.event;
    i.bind(l.NODECREATED, function(c, C, m) {
      B.apply(n.callback.onNodeCreated, [c, C, m]);
    }), i.bind(l.CLICK, function(c, C, m, h, o) {
      B.apply(n.callback.onClick, [C, m, h, o]);
    }), i.bind(l.EXPAND, function(c, C, m) {
      B.apply(n.callback.onExpand, [c, C, m]);
    }), i.bind(l.COLLAPSE, function(c, C, m) {
      B.apply(n.callback.onCollapse, [c, C, m]);
    }), i.bind(l.ASYNC_SUCCESS, function(c, C, m, h) {
      B.apply(n.callback.onAsyncSuccess, [c, C, m, h]);
    }), i.bind(l.ASYNC_ERROR, function(c, C, m, h, o, e) {
      B.apply(n.callback.onAsyncError, [c, C, m, h, o, e]);
    }), i.bind(l.REMOVE, function(c, C, m) {
      B.apply(n.callback.onRemove, [c, C, m]);
    }), i.bind(l.SELECTED, function(c, C, m) {
      B.apply(n.callback.onSelected, [C, m]);
    }), i.bind(l.UNSELECTED, function(c, C, m) {
      B.apply(n.callback.onUnSelected, [C, m]);
    });
  }, Ge = function(n) {
    var i = n.treeObj, l = v.event;
    i.unbind(l.NODECREATED).unbind(l.CLICK).unbind(l.EXPAND).unbind(l.COLLAPSE).unbind(l.ASYNC_SUCCESS).unbind(l.ASYNC_ERROR).unbind(l.REMOVE).unbind(l.SELECTED).unbind(l.UNSELECTED);
  }, ee = function(n) {
    var i = n.target, l = x.getSetting(n.data.treeId), c = "", C = null, m = "", h = "", o = null, e = null, d = null;
    if (B.eqs(n.type, "mousedown") ? h = "mousedown" : B.eqs(n.type, "mouseup") ? h = "mouseup" : B.eqs(n.type, "contextmenu") ? h = "contextmenu" : B.eqs(n.type, "click") ? B.eqs(i.tagName, "span") && i.getAttribute("treeNode" + v.id.SWITCH) !== null ? (c = B.getNodeMainDom(i).id, m = "switchNode") : (d = B.getMDom(l, i, [{ tagName: "a", attrName: "treeNode" + v.id.A }]), d && (c = B.getNodeMainDom(d).id, m = "clickNode")) : B.eqs(n.type, "dblclick") && (h = "dblclick", d = B.getMDom(l, i, [{ tagName: "a", attrName: "treeNode" + v.id.A }]), d && (c = B.getNodeMainDom(d).id, m = "switchNode")), h.length > 0 && c.length == 0 && (d = B.getMDom(l, i, [{ tagName: "a", attrName: "treeNode" + v.id.A }]), d && (c = B.getNodeMainDom(d).id)), c.length > 0)
      switch (C = x.getNodeCache(l, c), m) {
        case "switchNode":
          var E = x.nodeIsParent(l, C);
          E && (B.eqs(n.type, "click") || B.eqs(n.type, "dblclick") && B.apply(l.view.dblClickExpand, [l.treeId, C], l.view.dblClickExpand)) ? o = be.onSwitchNode : m = "";
          break;
        case "clickNode":
          o = be.onClickNode;
          break;
      }
    switch (h) {
      case "mousedown":
        e = be.onZTreeMousedown;
        break;
      case "mouseup":
        e = be.onZTreeMouseup;
        break;
      case "dblclick":
        e = be.onZTreeDblclick;
        break;
      case "contextmenu":
        e = be.onZTreeContextmenu;
        break;
    }
    var T = {
      stop: !1,
      node: C,
      nodeEventType: m,
      nodeEventCallback: o,
      treeEventType: h,
      treeEventCallback: e
    };
    return T;
  }, oe = function(n, i, l, c, C, m, h) {
    if (!!l) {
      var o = x.getRoot(n), e = x.nodeChildren(n, l);
      l.level = i, l.tId = n.treeId + "_" + ++o.zId, l.parentTId = c ? c.tId : null, l.open = typeof l.open == "string" ? B.eqs(l.open, "true") : !!l.open;
      var d = x.nodeIsParent(n, l);
      B.isArray(e) ? (x.nodeIsParent(n, l, !0), l.zAsync = !0) : (d = x.nodeIsParent(n, l, d), l.open = d && !n.async.enable ? l.open : !1, l.zAsync = !d), l.isFirstNode = C, l.isLastNode = m, l.getParentNode = function() {
        return x.getNodeCache(n, l.parentTId);
      }, l.getPreNode = function() {
        return x.getPreNode(n, l);
      }, l.getNextNode = function() {
        return x.getNextNode(n, l);
      }, l.getIndex = function() {
        return x.getNodeIndex(n, l);
      }, l.getPath = function() {
        return x.getNodePath(n, l);
      }, l.isAjaxing = !1, x.fixPIdKeyValue(n, l);
    }
  }, te = {
    bind: [$e],
    unbind: [Ge],
    caches: [He],
    nodes: [oe],
    proxys: [ee],
    roots: [We],
    beforeA: [],
    afterA: [],
    innerBeforeA: [],
    innerAfterA: [],
    zTreeTools: []
  }, x = {
    addNodeCache: function(n, i) {
      x.getCache(n).nodes[x.getNodeCacheId(i.tId)] = i;
    },
    getNodeCacheId: function(n) {
      return n.substring(n.lastIndexOf("_") + 1);
    },
    addAfterA: function(n) {
      te.afterA.push(n);
    },
    addBeforeA: function(n) {
      te.beforeA.push(n);
    },
    addInnerAfterA: function(n) {
      te.innerAfterA.push(n);
    },
    addInnerBeforeA: function(n) {
      te.innerBeforeA.push(n);
    },
    addInitBind: function(n) {
      te.bind.push(n);
    },
    addInitUnBind: function(n) {
      te.unbind.push(n);
    },
    addInitCache: function(n) {
      te.caches.push(n);
    },
    addInitNode: function(n) {
      te.nodes.push(n);
    },
    addInitProxy: function(n, i) {
      i ? te.proxys.splice(0, 0, n) : te.proxys.push(n);
    },
    addInitRoot: function(n) {
      te.roots.push(n);
    },
    addNodesData: function(n, i, l, c) {
      var C = x.nodeChildren(n, i), m;
      C ? l >= C.length && (l = -1) : (C = x.nodeChildren(n, i, []), l = -1), C.length > 0 && l === 0 ? (C[0].isFirstNode = !1, S.setNodeLineIcos(n, C[0])) : C.length > 0 && l < 0 && (C[C.length - 1].isLastNode = !1, S.setNodeLineIcos(n, C[C.length - 1])), x.nodeIsParent(n, i, !0), l < 0 ? x.nodeChildren(n, i, C.concat(c)) : (m = [l, 0].concat(c), C.splice.apply(C, m));
    },
    addSelectedNode: function(n, i) {
      var l = x.getRoot(n);
      x.isSelectedNode(n, i) || l.curSelectedList.push(i);
    },
    addCreatedNode: function(n, i) {
      if (!!n.callback.onNodeCreated || !!n.view.addDiyDom) {
        var l = x.getRoot(n);
        l.createdNodes.push(i);
      }
    },
    addZTreeTools: function(n) {
      te.zTreeTools.push(n);
    },
    exSetting: function(n) {
      J.extend(!0, Oe, n);
    },
    fixPIdKeyValue: function(n, i) {
      n.data.simpleData.enable && (i[n.data.simpleData.pIdKey] = i.parentTId ? i.getParentNode()[n.data.simpleData.idKey] : n.data.simpleData.rootPId);
    },
    getAfterA: function(n, i, l) {
      for (var c = 0, C = te.afterA.length; c < C; c++)
        te.afterA[c].apply(this, arguments);
    },
    getBeforeA: function(n, i, l) {
      for (var c = 0, C = te.beforeA.length; c < C; c++)
        te.beforeA[c].apply(this, arguments);
    },
    getInnerAfterA: function(n, i, l) {
      for (var c = 0, C = te.innerAfterA.length; c < C; c++)
        te.innerAfterA[c].apply(this, arguments);
    },
    getInnerBeforeA: function(n, i, l) {
      for (var c = 0, C = te.innerBeforeA.length; c < C; c++)
        te.innerBeforeA[c].apply(this, arguments);
    },
    getCache: function(n) {
      return ve[n.treeId];
    },
    getNodeIndex: function(n, i) {
      if (!i)
        return null;
      for (var l = i.parentTId ? i.getParentNode() : x.getRoot(n), c = x.nodeChildren(n, l), C = 0, m = c.length - 1; C <= m; C++)
        if (c[C] === i)
          return C;
      return -1;
    },
    getNextNode: function(n, i) {
      if (!i)
        return null;
      for (var l = i.parentTId ? i.getParentNode() : x.getRoot(n), c = x.nodeChildren(n, l), C = 0, m = c.length - 1; C <= m; C++)
        if (c[C] === i)
          return C == m ? null : c[C + 1];
      return null;
    },
    getNodeByParam: function(n, i, l, c) {
      if (!i || !l)
        return null;
      for (var C = 0, m = i.length; C < m; C++) {
        var h = i[C];
        if (h[l] == c)
          return i[C];
        var o = x.nodeChildren(n, h), e = x.getNodeByParam(n, o, l, c);
        if (e)
          return e;
      }
      return null;
    },
    getNodeCache: function(n, i) {
      if (!i)
        return null;
      var l = ve[n.treeId].nodes[x.getNodeCacheId(i)];
      return l || null;
    },
    getNodePath: function(n, i) {
      if (!i)
        return null;
      var l;
      return i.parentTId ? l = i.getParentNode().getPath() : l = [], l && l.push(i), l;
    },
    getNodes: function(n) {
      return x.nodeChildren(n, x.getRoot(n));
    },
    getNodesByParam: function(n, i, l, c) {
      if (!i || !l)
        return [];
      for (var C = [], m = 0, h = i.length; m < h; m++) {
        var o = i[m];
        o[l] == c && C.push(o);
        var e = x.nodeChildren(n, o);
        C = C.concat(x.getNodesByParam(n, e, l, c));
      }
      return C;
    },
    getNodesByParamFuzzy: function(n, i, l, c) {
      if (!i || !l)
        return [];
      var C = [];
      c = c.toLowerCase();
      for (var m = 0, h = i.length; m < h; m++) {
        var o = i[m];
        typeof o[l] == "string" && i[m][l].toLowerCase().indexOf(c) > -1 && C.push(o);
        var e = x.nodeChildren(n, o);
        C = C.concat(x.getNodesByParamFuzzy(n, e, l, c));
      }
      return C;
    },
    getNodesByFilter: function(n, i, l, c, C) {
      if (!i)
        return c ? null : [];
      for (var m = c ? null : [], h = 0, o = i.length; h < o; h++) {
        var e = i[h];
        if (B.apply(l, [e, C], !1)) {
          if (c)
            return e;
          m.push(e);
        }
        var d = x.nodeChildren(n, e), E = x.getNodesByFilter(n, d, l, c, C);
        if (c && !!E)
          return E;
        m = c ? E : m.concat(E);
      }
      return m;
    },
    getPreNode: function(n, i) {
      if (!i)
        return null;
      for (var l = i.parentTId ? i.getParentNode() : x.getRoot(n), c = x.nodeChildren(n, l), C = 0, m = c.length; C < m; C++)
        if (c[C] === i)
          return C == 0 ? null : c[C - 1];
      return null;
    },
    getRoot: function(n) {
      return n ? Ne[n.treeId] : null;
    },
    getRoots: function() {
      return Ne;
    },
    getSetting: function(n) {
      return j[n];
    },
    getSettings: function() {
      return j;
    },
    getZTreeTools: function(n) {
      var i = this.getRoot(this.getSetting(n));
      return i ? i.treeTools : null;
    },
    initCache: function(n) {
      for (var i = 0, l = te.caches.length; i < l; i++)
        te.caches[i].apply(this, arguments);
    },
    initNode: function(n, i, l, c, C, m) {
      for (var h = 0, o = te.nodes.length; h < o; h++)
        te.nodes[h].apply(this, arguments);
    },
    initRoot: function(n) {
      for (var i = 0, l = te.roots.length; i < l; i++)
        te.roots[i].apply(this, arguments);
    },
    isSelectedNode: function(n, i) {
      for (var l = x.getRoot(n), c = 0, C = l.curSelectedList.length; c < C; c++)
        if (i === l.curSelectedList[c])
          return !0;
      return !1;
    },
    nodeChildren: function(n, i, l) {
      if (!i)
        return null;
      var c = n.data.key.children;
      return typeof l < "u" && (i[c] = l), i[c];
    },
    nodeIsParent: function(n, i, l) {
      if (!i)
        return !1;
      var c = n.data.key.isParent;
      return typeof l < "u" ? (typeof l == "string" && (l = B.eqs(l, "true")), l = !!l, i[c] = l) : typeof i[c] == "string" ? i[c] = B.eqs(i[c], "true") : i[c] = !!i[c], i[c];
    },
    nodeName: function(n, i, l) {
      var c = n.data.key.name;
      typeof l < "u" && (i[c] = l);
      var C = "" + i[c];
      return typeof n.data.render.name == "function" ? n.data.render.name.call(this, C, i) : C;
    },
    nodeTitle: function(n, i) {
      var l = n.data.key.title === "" ? n.data.key.name : n.data.key.title, c = "" + i[l];
      return typeof n.data.render.title == "function" ? n.data.render.title.call(this, c, i) : c;
    },
    removeNodeCache: function(n, i) {
      var l = x.nodeChildren(n, i);
      if (l)
        for (var c = 0, C = l.length; c < C; c++)
          x.removeNodeCache(n, l[c]);
      x.getCache(n).nodes[x.getNodeCacheId(i.tId)] = null;
    },
    removeSelectedNode: function(n, i) {
      for (var l = x.getRoot(n), c = 0, C = l.curSelectedList.length; c < C; c++)
        (i === l.curSelectedList[c] || !x.getNodeCache(n, l.curSelectedList[c].tId)) && (l.curSelectedList.splice(c, 1), n.treeObj.trigger(v.event.UNSELECTED, [n.treeId, i]), c--, C--);
    },
    setCache: function(n, i) {
      ve[n.treeId] = i;
    },
    setRoot: function(n, i) {
      Ne[n.treeId] = i;
    },
    setZTreeTools: function(n, i) {
      for (var l = 0, c = te.zTreeTools.length; l < c; l++)
        te.zTreeTools[l].apply(this, arguments);
    },
    transformToArrayFormat: function(n, i) {
      if (!i)
        return [];
      var l = [];
      if (B.isArray(i))
        for (var c = 0, C = i.length; c < C; c++) {
          var m = i[c];
          h(m);
        }
      else
        h(i);
      return l;
      function h(o) {
        l.push(o);
        var e = x.nodeChildren(n, o);
        e && (l = l.concat(x.transformToArrayFormat(n, e)));
      }
    },
    transformTozTreeFormat: function(n, i) {
      var l, c, C = n.data.simpleData.idKey, m = n.data.simpleData.pIdKey;
      if (!C || C == "" || !i)
        return [];
      if (B.isArray(i)) {
        var h = [], o = {};
        for (l = 0, c = i.length; l < c; l++)
          o[i[l][C]] = i[l];
        for (l = 0, c = i.length; l < c; l++) {
          var e = o[i[l][m]];
          if (e && i[l][C] != i[l][m]) {
            var d = x.nodeChildren(n, e);
            d || (d = x.nodeChildren(n, e, [])), d.push(i[l]);
          } else
            h.push(i[l]);
        }
        return h;
      } else
        return [i];
    }
  }, de = {
    bindEvent: function(n) {
      for (var i = 0, l = te.bind.length; i < l; i++)
        te.bind[i].apply(this, arguments);
    },
    unbindEvent: function(n) {
      for (var i = 0, l = te.unbind.length; i < l; i++)
        te.unbind[i].apply(this, arguments);
    },
    bindTree: function(n) {
      var i = {
        treeId: n.treeId
      }, l = n.treeObj;
      n.view.txtSelectedEnable || l.bind("selectstart", be.onSelectStart).css({
        "-moz-user-select": "-moz-none"
      }), l.bind("click", i, de.proxy), l.bind("dblclick", i, de.proxy), l.bind("mouseover", i, de.proxy), l.bind("mouseout", i, de.proxy), l.bind("mousedown", i, de.proxy), l.bind("mouseup", i, de.proxy), l.bind("contextmenu", i, de.proxy);
    },
    unbindTree: function(n) {
      var i = n.treeObj;
      i.unbind("selectstart", be.onSelectStart).unbind("click", de.proxy).unbind("dblclick", de.proxy).unbind("mouseover", de.proxy).unbind("mouseout", de.proxy).unbind("mousedown", de.proxy).unbind("mouseup", de.proxy).unbind("contextmenu", de.proxy);
    },
    doProxy: function(n) {
      for (var i = [], l = 0, c = te.proxys.length; l < c; l++) {
        var C = te.proxys[l].apply(this, arguments);
        if (i.push(C), C.stop)
          break;
      }
      return i;
    },
    proxy: function(n) {
      var i = x.getSetting(n.data.treeId);
      if (!B.uCanDo(i, n))
        return !0;
      for (var l = de.doProxy(n), c = !0, C = 0, m = l.length; C < m; C++) {
        var h = l[C];
        h.nodeEventCallback && (c = h.nodeEventCallback.apply(h, [n, h.node]) && c), h.treeEventCallback && (c = h.treeEventCallback.apply(h, [n, h.node]) && c);
      }
      return c;
    }
  }, be = {
    onSwitchNode: function(n, i) {
      var l = x.getSetting(n.data.treeId);
      if (i.open) {
        if (B.apply(l.callback.beforeCollapse, [l.treeId, i], !0) == !1)
          return !0;
        x.getRoot(l).expandTriggerFlag = !0, S.switchNode(l, i);
      } else {
        if (B.apply(l.callback.beforeExpand, [l.treeId, i], !0) == !1)
          return !0;
        x.getRoot(l).expandTriggerFlag = !0, S.switchNode(l, i);
      }
      return !0;
    },
    onClickNode: function(n, i) {
      var l = x.getSetting(n.data.treeId), c = l.view.autoCancelSelected && (n.ctrlKey || n.metaKey) && x.isSelectedNode(l, i) ? 0 : l.view.autoCancelSelected && (n.ctrlKey || n.metaKey) && l.view.selectedMulti ? 2 : 1;
      return B.apply(l.callback.beforeClick, [l.treeId, i, c], !0) == !1 || (c === 0 ? S.cancelPreSelectedNode(l, i) : S.selectNode(l, i, c === 2), l.treeObj.trigger(v.event.CLICK, [n, l.treeId, i, c])), !0;
    },
    onZTreeMousedown: function(n, i) {
      var l = x.getSetting(n.data.treeId);
      return B.apply(l.callback.beforeMouseDown, [l.treeId, i], !0) && B.apply(l.callback.onMouseDown, [n, l.treeId, i]), !0;
    },
    onZTreeMouseup: function(n, i) {
      var l = x.getSetting(n.data.treeId);
      return B.apply(l.callback.beforeMouseUp, [l.treeId, i], !0) && B.apply(l.callback.onMouseUp, [n, l.treeId, i]), !0;
    },
    onZTreeDblclick: function(n, i) {
      var l = x.getSetting(n.data.treeId);
      return B.apply(l.callback.beforeDblClick, [l.treeId, i], !0) && B.apply(l.callback.onDblClick, [n, l.treeId, i]), !0;
    },
    onZTreeContextmenu: function(n, i) {
      var l = x.getSetting(n.data.treeId);
      return B.apply(l.callback.beforeRightClick, [l.treeId, i], !0) && B.apply(l.callback.onRightClick, [n, l.treeId, i]), typeof l.callback.onRightClick != "function";
    },
    onSelectStart: function(n) {
      var i = n.originalEvent.srcElement.nodeName.toLowerCase();
      return i === "input" || i === "textarea";
    }
  }, B = {
    apply: function(n, i, l) {
      return typeof n == "function" ? n.apply(P, i || []) : l;
    },
    canAsync: function(n, i) {
      var l = x.nodeChildren(n, i), c = x.nodeIsParent(n, i);
      return n.async.enable && i && c && !(i.zAsync || l && l.length > 0);
    },
    clone: function(n) {
      if (n === null)
        return null;
      var i = B.isArray(n) ? [] : {};
      for (var l in n)
        i[l] = n[l] instanceof Date ? new Date(n[l].getTime()) : typeof n[l] == "object" ? B.clone(n[l]) : n[l];
      return i;
    },
    eqs: function(n, i) {
      return n.toLowerCase() === i.toLowerCase();
    },
    isArray: function(n) {
      return Object.prototype.toString.apply(n) === "[object Array]";
    },
    isElement: function(n) {
      return typeof HTMLElement == "object" ? n instanceof HTMLElement : n && typeof n == "object" && n !== null && n.nodeType === 1 && typeof n.nodeName == "string";
    },
    $: function(n, i, l) {
      return !!i && typeof i != "string" && (l = i, i = ""), typeof n == "string" ? J(n, l ? l.treeObj.get(0).ownerDocument : null) : J("#" + n.tId + i, l ? l.treeObj : null);
    },
    getMDom: function(n, i, l) {
      if (!i)
        return null;
      for (; i && i.id !== n.treeId; ) {
        for (var c = 0, C = l.length; i.tagName && c < C; c++)
          if (B.eqs(i.tagName, l[c].tagName) && i.getAttribute(l[c].attrName) !== null)
            return i;
        i = i.parentNode;
      }
      return null;
    },
    getNodeMainDom: function(n) {
      return J(n).parent("li").get(0) || J(n).parentsUntil("li").parent().get(0);
    },
    isChildOrSelf: function(n, i) {
      return J(n).closest("#" + i).length > 0;
    },
    uCanDo: function(n, i) {
      return !0;
    }
  }, S = {
    addNodes: function(n, i, l, c, C) {
      var m = x.nodeIsParent(n, i);
      if (!(n.data.keep.leaf && i && !m))
        if (B.isArray(c) || (c = [c]), n.data.simpleData.enable && (c = x.transformTozTreeFormat(n, c)), i) {
          var h = w(i, v.id.SWITCH, n), o = w(i, v.id.ICON, n), e = w(i, v.id.UL, n);
          i.open || (S.replaceSwitchClass(i, h, v.folder.CLOSE), S.replaceIcoClass(i, o, v.folder.CLOSE), i.open = !1, e.css({
            display: "none"
          })), x.addNodesData(n, i, l, c), S.createNodes(n, i.level + 1, c, i, l), C || S.expandCollapseParentNode(n, i, !0);
        } else
          x.addNodesData(n, x.getRoot(n), l, c), S.createNodes(n, 0, c, null, l);
    },
    appendNodes: function(n, i, l, c, C, m, h) {
      if (!l)
        return [];
      var o = [], e = c || x.getRoot(n), d = x.nodeChildren(n, e), E, T;
      (!d || C >= d.length - l.length) && (C = -1);
      for (var A = 0, R = l.length; A < R; A++) {
        var H = l[A];
        m && (E = (C === 0 || d.length == l.length) && A == 0, T = C < 0 && A == l.length - 1, x.initNode(n, i, H, c, E, T, h), x.addNodeCache(n, H));
        var Q = x.nodeIsParent(n, H), Z = [], ae = x.nodeChildren(n, H);
        ae && ae.length > 0 && (Z = S.appendNodes(n, i + 1, ae, H, -1, m, h && H.open)), h && (S.makeDOMNodeMainBefore(o, n, H), S.makeDOMNodeLine(o, n, H), x.getBeforeA(n, H, o), S.makeDOMNodeNameBefore(o, n, H), x.getInnerBeforeA(n, H, o), S.makeDOMNodeIcon(o, n, H), x.getInnerAfterA(n, H, o), S.makeDOMNodeNameAfter(o, n, H), x.getAfterA(n, H, o), Q && H.open && S.makeUlHtml(n, H, o, Z.join("")), S.makeDOMNodeMainAfter(o, n, H), x.addCreatedNode(n, H));
      }
      return o;
    },
    appendParentULDom: function(n, i) {
      var l = [], c = w(i, n);
      !c.get(0) && !!i.parentTId && (S.appendParentULDom(n, i.getParentNode()), c = w(i, n));
      var C = w(i, v.id.UL, n);
      C.get(0) && C.remove();
      var m = x.nodeChildren(n, i), h = S.appendNodes(n, i.level + 1, m, i, -1, !1, !0);
      S.makeUlHtml(n, i, l, h.join("")), c.append(l.join(""));
    },
    asyncNode: function(n, i, l, c) {
      var C, m, h = x.nodeIsParent(n, i);
      if (i && !h)
        return B.apply(c), !1;
      if (i && i.isAjaxing)
        return !1;
      if (B.apply(n.callback.beforeAsync, [n.treeId, i], !0) == !1)
        return B.apply(c), !1;
      if (i) {
        i.isAjaxing = !0;
        var o = w(i, v.id.ICON, n);
        o.attr({ style: "", class: v.className.BUTTON + " " + v.className.ICO_LOADING });
      }
      var e = {}, d = B.apply(n.async.autoParam, [n.treeId, i], n.async.autoParam);
      for (C = 0, m = d.length; i && C < m; C++) {
        var E = d[C].split("="), T = E;
        E.length > 1 && (T = E[1], E = E[0]), e[T] = i[E];
      }
      var A = B.apply(n.async.otherParam, [n.treeId, i], n.async.otherParam);
      if (B.isArray(A))
        for (C = 0, m = A.length; C < m; C += 2)
          e[A[C]] = A[C + 1];
      else
        for (var R in A)
          e[R] = A[R];
      var H = x.getRoot(n)._ver;
      return J.ajax({
        contentType: n.async.contentType,
        cache: !1,
        type: n.async.type,
        url: B.apply(n.async.url, [n.treeId, i], n.async.url),
        data: n.async.contentType.indexOf("application/json") > -1 ? JSON.stringify(e) : e,
        dataType: n.async.dataType,
        headers: n.async.headers,
        xhrFields: n.async.xhrFields,
        success: function(Q) {
          if (H == x.getRoot(n)._ver) {
            var Z = [];
            try {
              !Q || Q.length == 0 ? Z = [] : typeof Q == "string" ? Z = function() {
                return JSON.parse(Q);
              }() : Z = Q;
            } catch {
              Z = Q;
            }
            i && (i.isAjaxing = null, i.zAsync = !0), S.setNodeLineIcos(n, i), Z && Z !== "" ? (Z = B.apply(n.async.dataFilter, [n.treeId, i, Z], Z), S.addNodes(n, i, -1, Z ? B.clone(Z) : [], !!l)) : S.addNodes(n, i, -1, [], !!l), n.treeObj.trigger(v.event.ASYNC_SUCCESS, [n.treeId, i, Q]), B.apply(c);
          }
        },
        error: function(Q, Z, ae) {
          H == x.getRoot(n)._ver && (i && (i.isAjaxing = null), S.setNodeLineIcos(n, i), n.treeObj.trigger(v.event.ASYNC_ERROR, [n.treeId, i, Q, Z, ae]));
        }
      }), !0;
    },
    cancelPreSelectedNode: function(n, i, l) {
      var c = x.getRoot(n).curSelectedList, C, m;
      for (C = c.length - 1; C >= 0; C--)
        if (m = c[C], i === m || !i && (!l || l !== m))
          if (w(m, v.id.A, n).removeClass(v.node.CURSELECTED), i) {
            x.removeSelectedNode(n, i);
            break;
          } else
            c.splice(C, 1), n.treeObj.trigger(v.event.UNSELECTED, [n.treeId, m]);
    },
    createNodeCallback: function(n) {
      if (!!n.callback.onNodeCreated || !!n.view.addDiyDom)
        for (var i = x.getRoot(n); i.createdNodes.length > 0; ) {
          var l = i.createdNodes.shift();
          B.apply(n.view.addDiyDom, [n.treeId, l]), n.callback.onNodeCreated && n.treeObj.trigger(v.event.NODECREATED, [n.treeId, l]);
        }
    },
    createNodes: function(n, i, l, c, C) {
      if (!(!l || l.length == 0)) {
        var m = x.getRoot(n), h = !c || c.open || !!w(x.nodeChildren(n, c)[0], n).get(0);
        m.createdNodes = [];
        var o = S.appendNodes(n, i, l, c, C, !0, h), e, d;
        if (!c)
          e = n.treeObj;
        else {
          var E = w(c, v.id.UL, n);
          E.get(0) && (e = E);
        }
        e && (C >= 0 && (d = e.children()[C]), C >= 0 && d ? J(d).before(o.join("")) : e.append(o.join(""))), S.createNodeCallback(n);
      }
    },
    destroy: function(n) {
      !n || (x.initCache(n), x.initRoot(n), de.unbindTree(n), de.unbindEvent(n), n.treeObj.empty(), delete j[n.treeId]);
    },
    expandCollapseNode: function(n, i, l, c, C) {
      var m = x.getRoot(n), h, o;
      if (!i) {
        B.apply(C, []);
        return;
      }
      var e = x.nodeChildren(n, i), d = x.nodeIsParent(n, i);
      if (m.expandTriggerFlag && (o = C, h = function() {
        o && o(), i.open ? n.treeObj.trigger(v.event.EXPAND, [n.treeId, i]) : n.treeObj.trigger(v.event.COLLAPSE, [n.treeId, i]);
      }, C = h, m.expandTriggerFlag = !1), !i.open && d && (!w(i, v.id.UL, n).get(0) || e && e.length > 0 && !w(e[0], n).get(0)) && (S.appendParentULDom(n, i), S.createNodeCallback(n)), i.open == l) {
        B.apply(C, []);
        return;
      }
      var E = w(i, v.id.UL, n), T = w(i, v.id.SWITCH, n), A = w(i, v.id.ICON, n);
      d ? (i.open = !i.open, i.iconOpen && i.iconClose && A.attr("style", S.makeNodeIcoStyle(n, i)), i.open ? (S.replaceSwitchClass(i, T, v.folder.OPEN), S.replaceIcoClass(i, A, v.folder.OPEN), c == !1 || n.view.expandSpeed == "" ? (E.show(), B.apply(C, [])) : e && e.length > 0 ? E.slideDown(n.view.expandSpeed, C) : (E.show(), B.apply(C, []))) : (S.replaceSwitchClass(i, T, v.folder.CLOSE), S.replaceIcoClass(i, A, v.folder.CLOSE), c == !1 || n.view.expandSpeed == "" || !(e && e.length > 0) ? (E.hide(), B.apply(C, [])) : E.slideUp(n.view.expandSpeed, C))) : B.apply(C, []);
    },
    expandCollapseParentNode: function(n, i, l, c, C) {
      if (!!i) {
        if (i.parentTId)
          S.expandCollapseNode(n, i, l, c);
        else {
          S.expandCollapseNode(n, i, l, c, C);
          return;
        }
        i.parentTId && S.expandCollapseParentNode(n, i.getParentNode(), l, c, C);
      }
    },
    expandCollapseSonNode: function(n, i, l, c, C) {
      var m = x.getRoot(n), h = i ? x.nodeChildren(n, i) : x.nodeChildren(n, m), o = i ? !1 : c, e = x.getRoot(n).expandTriggerFlag;
      if (x.getRoot(n).expandTriggerFlag = !1, h)
        for (var d = 0, E = h.length; d < E; d++)
          h[d] && S.expandCollapseSonNode(n, h[d], l, o);
      x.getRoot(n).expandTriggerFlag = e, S.expandCollapseNode(n, i, l, c, C);
    },
    isSelectedNode: function(n, i) {
      if (!i)
        return !1;
      var l = x.getRoot(n).curSelectedList, c;
      for (c = l.length - 1; c >= 0; c--)
        if (i === l[c])
          return !0;
      return !1;
    },
    makeDOMNodeIcon: function(n, i, l) {
      var c = x.nodeName(i, l), C = i.view.nameIsHTML ? c : c.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      n.push(
        "<span id='",
        l.tId,
        v.id.ICON,
        "' title='' treeNode",
        v.id.ICON,
        " class='",
        S.makeNodeIcoClass(i, l),
        "' style='",
        S.makeNodeIcoStyle(i, l),
        "'></span><span id='",
        l.tId,
        v.id.SPAN,
        "' class='",
        v.className.NAME,
        "'>",
        C,
        "</span>"
      );
    },
    makeDOMNodeLine: function(n, i, l) {
      n.push("<span id='", l.tId, v.id.SWITCH, "' title='' class='", S.makeNodeLineClass(i, l), "' treeNode", v.id.SWITCH, "></span>");
    },
    makeDOMNodeMainAfter: function(n, i, l) {
      n.push("</li>");
    },
    makeDOMNodeMainBefore: function(n, i, l) {
      n.push("<li id='", l.tId, "' class='", v.className.LEVEL, l.level, "' tabindex='0' hidefocus='true' treenode>");
    },
    makeDOMNodeNameAfter: function(n, i, l) {
      n.push("</a>");
    },
    makeDOMNodeNameBefore: function(n, i, l) {
      var c = x.nodeTitle(i, l), C = S.makeNodeUrl(i, l), m = S.makeNodeFontCss(i, l), h = S.makeNodeClasses(i, l), o = [];
      for (var e in m)
        o.push(e, ":", m[e], ";");
      n.push(
        "<a id='",
        l.tId,
        v.id.A,
        "' class='",
        v.className.LEVEL,
        l.level,
        h.add ? " " + h.add.join(" ") : "",
        "' treeNode",
        v.id.A,
        l.click ? ' onclick="' + l.click + '"' : "",
        C != null && C.length > 0 ? " href='" + C + "'" : "",
        " target='",
        S.makeNodeTarget(l),
        "' style='",
        o.join(""),
        "'"
      ), B.apply(i.view.showTitle, [i.treeId, l], i.view.showTitle) && c && n.push("title='", c.replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "'"), n.push(">");
    },
    makeNodeFontCss: function(n, i) {
      var l = B.apply(n.view.fontCss, [n.treeId, i], n.view.fontCss);
      return l && typeof l != "function" ? l : {};
    },
    makeNodeClasses: function(n, i) {
      var l = B.apply(n.view.nodeClasses, [n.treeId, i], n.view.nodeClasses);
      return l && typeof l != "function" ? l : { add: [], remove: [] };
    },
    makeNodeIcoClass: function(n, i) {
      var l = ["ico"];
      if (!i.isAjaxing) {
        var c = x.nodeIsParent(n, i);
        l[0] = (i.iconSkin ? i.iconSkin + "_" : "") + l[0], c ? l.push(i.open ? v.folder.OPEN : v.folder.CLOSE) : l.push(v.folder.DOCU);
      }
      return v.className.BUTTON + " " + l.join("_");
    },
    makeNodeIcoStyle: function(n, i) {
      var l = [];
      if (!i.isAjaxing) {
        var c = x.nodeIsParent(n, i), C = c && i.iconOpen && i.iconClose ? i.open ? i.iconOpen : i.iconClose : i[n.data.key.icon];
        C && l.push("background:url(", C, ") 0 0 no-repeat;"), (n.view.showIcon == !1 || !B.apply(n.view.showIcon, [n.treeId, i], !0)) && l.push("display:none;");
      }
      return l.join("");
    },
    makeNodeLineClass: function(n, i) {
      var l = [];
      return n.view.showLine ? i.level == 0 && i.isFirstNode && i.isLastNode ? l.push(v.line.ROOT) : i.level == 0 && i.isFirstNode ? l.push(v.line.ROOTS) : i.isLastNode ? l.push(v.line.BOTTOM) : l.push(v.line.CENTER) : l.push(v.line.NOLINE), x.nodeIsParent(n, i) ? l.push(i.open ? v.folder.OPEN : v.folder.CLOSE) : l.push(v.folder.DOCU), S.makeNodeLineClassEx(i) + l.join("_");
    },
    makeNodeLineClassEx: function(n) {
      return v.className.BUTTON + " " + v.className.LEVEL + n.level + " " + v.className.SWITCH + " ";
    },
    makeNodeTarget: function(n) {
      return n.target || "_blank";
    },
    makeNodeUrl: function(n, i) {
      var l = n.data.key.url;
      return i[l] ? i[l] : null;
    },
    makeUlHtml: function(n, i, l, c) {
      l.push("<ul id='", i.tId, v.id.UL, "' class='", v.className.LEVEL, i.level, " ", S.makeUlLineClass(n, i), "' style='display:", i.open ? "block" : "none", "'>"), l.push(c), l.push("</ul>");
    },
    makeUlLineClass: function(n, i) {
      return n.view.showLine && !i.isLastNode ? v.line.LINE : "";
    },
    removeChildNodes: function(n, i) {
      if (!!i) {
        var l = x.nodeChildren(n, i);
        if (!!l) {
          for (var c = 0, C = l.length; c < C; c++)
            x.removeNodeCache(n, l[c]);
          if (x.removeSelectedNode(n), delete i[n.data.key.children], n.data.keep.parent)
            w(i, v.id.UL, n).empty();
          else {
            x.nodeIsParent(n, i, !1), i.open = !1;
            var m = w(i, v.id.SWITCH, n), h = w(i, v.id.ICON, n);
            S.replaceSwitchClass(i, m, v.folder.DOCU), S.replaceIcoClass(i, h, v.folder.DOCU), w(i, v.id.UL, n).remove();
          }
        }
      }
    },
    scrollIntoView: function(n, i) {
      if (!!i) {
        if (typeof Element > "u" || typeof HTMLElement > "u") {
          var l = n.treeObj.get(0).getBoundingClientRect(), c = i.getBoundingClientRect();
          (c.top < l.top || c.bottom > l.bottom || c.right > l.right || c.left < l.left) && i.scrollIntoView();
          return;
        }
        Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(C) {
          function m(R, H) {
            return { start: R, length: H, end: R + H };
          }
          function h(R, H) {
            return C === !1 || H.start < R.end && R.start < H.end ? Math.max(
              R.end - H.length,
              Math.min(H.start, R.start)
            ) : (R.start + R.end - H.length) / 2;
          }
          function o(R, H) {
            return {
              x: R,
              y: H,
              translate: function(Z, ae) {
                return o(R + Z, H + ae);
              }
            };
          }
          function e(R, H) {
            for (; R; )
              H = H.translate(R.offsetLeft, R.offsetTop), R = R.offsetParent;
            return H;
          }
          for (var d = e(this, o(0, 0)), E = o(this.offsetWidth, this.offsetHeight), T = this.parentNode, A; T instanceof HTMLElement; )
            A = e(T, o(T.clientLeft, T.clientTop)), T.scrollLeft = h(
              m(d.x - A.x, E.x),
              m(T.scrollLeft, T.clientWidth)
            ), T.scrollTop = h(
              m(d.y - A.y, E.y),
              m(T.scrollTop, T.clientHeight)
            ), d = d.translate(-T.scrollLeft, -T.scrollTop), T = T.parentNode;
        }), i.scrollIntoViewIfNeeded();
      }
    },
    setFirstNode: function(n, i) {
      var l = x.nodeChildren(n, i);
      l.length > 0 && (l[0].isFirstNode = !0);
    },
    setLastNode: function(n, i) {
      var l = x.nodeChildren(n, i);
      l.length > 0 && (l[l.length - 1].isLastNode = !0);
    },
    removeNode: function(n, i) {
      var l = x.getRoot(n), c = i.parentTId ? i.getParentNode() : l;
      if (i.isFirstNode = !1, i.isLastNode = !1, i.getPreNode = function() {
        return null;
      }, i.getNextNode = function() {
        return null;
      }, !!x.getNodeCache(n, i.tId)) {
        w(i, n).remove(), x.removeNodeCache(n, i), x.removeSelectedNode(n, i);
        for (var C = x.nodeChildren(n, c), m = 0, h = C.length; m < h; m++)
          if (C[m].tId == i.tId) {
            C.splice(m, 1);
            break;
          }
        S.setFirstNode(n, c), S.setLastNode(n, c);
        var o, e, d, E = C.length;
        if (!n.data.keep.parent && E == 0)
          x.nodeIsParent(n, c, !1), c.open = !1, delete c[n.data.key.children], o = w(c, v.id.UL, n), e = w(c, v.id.SWITCH, n), d = w(c, v.id.ICON, n), S.replaceSwitchClass(c, e, v.folder.DOCU), S.replaceIcoClass(c, d, v.folder.DOCU), o.css("display", "none");
        else if (n.view.showLine && E > 0) {
          var T = C[E - 1];
          if (o = w(T, v.id.UL, n), e = w(T, v.id.SWITCH, n), d = w(T, v.id.ICON, n), c == l)
            if (C.length == 1)
              S.replaceSwitchClass(T, e, v.line.ROOT);
            else {
              var A = w(C[0], v.id.SWITCH, n);
              S.replaceSwitchClass(C[0], A, v.line.ROOTS), S.replaceSwitchClass(T, e, v.line.BOTTOM);
            }
          else
            S.replaceSwitchClass(T, e, v.line.BOTTOM);
          o.removeClass(v.line.LINE);
        }
      }
    },
    replaceIcoClass: function(n, i, l) {
      if (!(!i || n.isAjaxing)) {
        var c = i.attr("class");
        if (c != null) {
          var C = c.split("_");
          switch (l) {
            case v.folder.OPEN:
            case v.folder.CLOSE:
            case v.folder.DOCU:
              C[C.length - 1] = l;
              break;
          }
          i.attr("class", C.join("_"));
        }
      }
    },
    replaceSwitchClass: function(n, i, l) {
      if (!!i) {
        var c = i.attr("class");
        if (c != null) {
          var C = c.split("_");
          switch (l) {
            case v.line.ROOT:
            case v.line.ROOTS:
            case v.line.CENTER:
            case v.line.BOTTOM:
            case v.line.NOLINE:
              C[0] = S.makeNodeLineClassEx(n) + l;
              break;
            case v.folder.OPEN:
            case v.folder.CLOSE:
            case v.folder.DOCU:
              C[1] = l;
              break;
          }
          i.attr("class", C.join("_")), l !== v.folder.DOCU ? i.removeAttr("disabled") : i.attr("disabled", "disabled");
        }
      }
    },
    selectNode: function(n, i, l) {
      l || S.cancelPreSelectedNode(n, null, i), w(i, v.id.A, n).addClass(v.node.CURSELECTED), x.addSelectedNode(n, i), n.treeObj.trigger(v.event.SELECTED, [n.treeId, i]);
    },
    setNodeFontCss: function(n, i) {
      var l = w(i, v.id.A, n), c = S.makeNodeFontCss(n, i);
      c && l.css(c);
    },
    setNodeClasses: function(n, i) {
      var l = w(i, v.id.A, n), c = S.makeNodeClasses(n, i);
      "add" in c && c.add.length && l.addClass(c.add.join(" ")), "remove" in c && c.remove.length && l.removeClass(c.remove.join(" "));
    },
    setNodeLineIcos: function(n, i) {
      if (!!i) {
        var l = w(i, v.id.SWITCH, n), c = w(i, v.id.UL, n), C = w(i, v.id.ICON, n), m = S.makeUlLineClass(n, i);
        m.length == 0 ? c.removeClass(v.line.LINE) : c.addClass(m), l.attr("class", S.makeNodeLineClass(n, i)), x.nodeIsParent(n, i) ? l.removeAttr("disabled") : l.attr("disabled", "disabled"), C.removeAttr("style"), C.attr("style", S.makeNodeIcoStyle(n, i)), C.attr("class", S.makeNodeIcoClass(n, i));
      }
    },
    setNodeName: function(n, i) {
      var l = x.nodeTitle(n, i), c = w(i, v.id.SPAN, n);
      if (c.empty(), n.view.nameIsHTML ? c.html(x.nodeName(n, i)) : c.text(x.nodeName(n, i)), B.apply(n.view.showTitle, [n.treeId, i], n.view.showTitle)) {
        var C = w(i, v.id.A, n);
        C.attr("title", l || "");
      }
    },
    setNodeTarget: function(n, i) {
      var l = w(i, v.id.A, n);
      l.attr("target", S.makeNodeTarget(i));
    },
    setNodeUrl: function(n, i) {
      var l = w(i, v.id.A, n), c = S.makeNodeUrl(n, i);
      c == null || c.length == 0 ? l.removeAttr("href") : l.attr("href", c);
    },
    switchNode: function(n, i) {
      if (i.open || !B.canAsync(n, i))
        S.expandCollapseNode(n, i, !i.open);
      else if (n.async.enable) {
        if (!S.asyncNode(n, i)) {
          S.expandCollapseNode(n, i, !i.open);
          return;
        }
      } else
        i && S.expandCollapseNode(n, i, !i.open);
    }
  };
  J.fn.zTree = {
    consts: Se,
    _z: {
      tools: B,
      view: S,
      event: de,
      data: x
    },
    getZTreeObj: function(n) {
      var i = x.getZTreeTools(n);
      return i || null;
    },
    destroy: function(n) {
      if (!!n && n.length > 0)
        S.destroy(x.getSetting(n));
      else
        for (var i in j)
          S.destroy(j[i]);
    },
    init: function(n, i, l) {
      console.log(n, i, l, "obj, zSetting, zNodes");
      var c = B.clone(Oe);
      J.extend(!0, c, i), c.treeId = n.attr("id"), c.treeObj = n, c.treeObj.empty(), j[c.treeId] = c, typeof document.body.style.maxHeight > "u" && (c.view.expandSpeed = ""), x.initRoot(c);
      var C = x.getRoot(c);
      l = l ? B.clone(B.isArray(l) ? l : [l]) : [], c.data.simpleData.enable ? x.nodeChildren(c, C, x.transformTozTreeFormat(c, l)) : x.nodeChildren(c, C, l), x.initCache(c), de.unbindTree(c), de.bindTree(c), de.unbindEvent(c), de.bindEvent(c);
      var m = {
        setting: c,
        addNodes: function(o, e, d, E) {
          o || (o = null);
          var T = x.nodeIsParent(c, o);
          if (o && !T && c.data.keep.leaf)
            return null;
          var A = parseInt(e, 10);
          if (isNaN(A) ? (E = !!d, d = e, e = -1) : e = A, !d)
            return null;
          var R = B.clone(B.isArray(d) ? d : [d]);
          function H() {
            S.addNodes(c, o, e, R, E == !0);
          }
          return B.canAsync(c, o) ? S.asyncNode(c, o, E, H) : H(), R;
        },
        cancelSelectedNode: function(o) {
          S.cancelPreSelectedNode(c, o);
        },
        destroy: function() {
          S.destroy(c);
        },
        expandAll: function(o) {
          return o = !!o, S.expandCollapseSonNode(c, null, o, !0), o;
        },
        expandNode: function(o, e, d, E, T) {
          if (!o || !x.nodeIsParent(c, o) || (e !== !0 && e !== !1 && (e = !o.open), T = !!T, T && e && B.apply(c.callback.beforeExpand, [c.treeId, o], !0) == !1))
            return null;
          if (T && !e && B.apply(c.callback.beforeCollapse, [c.treeId, o], !0) == !1 || (e && o.parentTId && S.expandCollapseParentNode(c, o.getParentNode(), e, !1), e === o.open && !d))
            return null;
          return x.getRoot(c).expandTriggerFlag = T, !B.canAsync(c, o) && d ? S.expandCollapseSonNode(c, o, e, !0, A) : (o.open = !e, S.switchNode(this.setting, o), A()), e;
          function A() {
            var R = w(o, v.id.A, c).get(0);
            R && E !== !1 && S.scrollIntoView(c, R);
          }
        },
        getNodes: function() {
          return x.getNodes(c);
        },
        getNodeByParam: function(o, e, d) {
          return o ? x.getNodeByParam(c, d ? x.nodeChildren(c, d) : x.getNodes(c), o, e) : null;
        },
        getNodeByTId: function(o) {
          return x.getNodeCache(c, o);
        },
        getNodesByParam: function(o, e, d) {
          return o ? x.getNodesByParam(c, d ? x.nodeChildren(c, d) : x.getNodes(c), o, e) : null;
        },
        getNodesByParamFuzzy: function(o, e, d) {
          return o ? x.getNodesByParamFuzzy(c, d ? x.nodeChildren(c, d) : x.getNodes(c), o, e) : null;
        },
        getNodesByFilter: function(o, e, d, E) {
          return e = !!e, !o || typeof o != "function" ? e ? null : [] : x.getNodesByFilter(c, d ? x.nodeChildren(c, d) : x.getNodes(c), o, e, E);
        },
        getNodeIndex: function(o) {
          if (!o)
            return null;
          for (var e = o.parentTId ? o.getParentNode() : x.getRoot(c), d = x.nodeChildren(c, e), E = 0, T = d.length; E < T; E++)
            if (d[E] == o)
              return E;
          return -1;
        },
        getSelectedNodes: function() {
          for (var o = [], e = x.getRoot(c).curSelectedList, d = 0, E = e.length; d < E; d++)
            o.push(e[d]);
          return o;
        },
        isSelectedNode: function(o) {
          return x.isSelectedNode(c, o);
        },
        reAsyncChildNodesPromise: function(o, e, d) {
          var E = new Promise(function(T, A) {
            try {
              m.reAsyncChildNodes(o, e, d, function() {
                T(o);
              });
            } catch (R) {
              A(R);
            }
          });
          return E;
        },
        reAsyncChildNodes: function(o, e, d, E) {
          if (!!this.setting.async.enable) {
            var T = !o;
            if (T && (o = x.getRoot(c)), e == "refresh") {
              for (var A = x.nodeChildren(c, o), R = 0, H = A ? A.length : 0; R < H; R++)
                x.removeNodeCache(c, A[R]);
              if (x.removeSelectedNode(c), x.nodeChildren(c, o, []), T)
                this.setting.treeObj.empty();
              else {
                var Q = w(o, v.id.UL, c);
                Q.empty();
              }
            }
            S.asyncNode(this.setting, T ? null : o, !!d, E);
          }
        },
        refresh: function() {
          this.setting.treeObj.empty();
          var o = x.getRoot(c), e = x.nodeChildren(c, o);
          x.initRoot(c), x.nodeChildren(c, o, e), x.initCache(c), S.createNodes(c, 0, x.nodeChildren(c, o), null, -1);
        },
        removeChildNodes: function(o) {
          if (!o)
            return null;
          var e = x.nodeChildren(c, o);
          return S.removeChildNodes(c, o), e || null;
        },
        removeNode: function(o, e) {
          !o || (e = !!e, !(e && B.apply(c.callback.beforeRemove, [c.treeId, o], !0) == !1) && (S.removeNode(c, o), e && this.setting.treeObj.trigger(v.event.REMOVE, [c.treeId, o])));
        },
        selectNode: function(o, e, d) {
          if (!o)
            return;
          if (B.uCanDo(c)) {
            if (e = c.view.selectedMulti && e, o.parentTId)
              S.expandCollapseParentNode(c, o.getParentNode(), !0, !1, E);
            else if (!d)
              try {
                w(o, c).focus().blur();
              } catch {
              }
            S.selectNode(c, o, e);
          }
          function E() {
            if (!d) {
              var T = w(o, c).get(0);
              S.scrollIntoView(c, T);
            }
          }
        },
        transformTozTreeNodes: function(o) {
          return x.transformTozTreeFormat(c, o);
        },
        transformToArray: function(o) {
          return x.transformToArrayFormat(c, o);
        },
        updateNode: function(o, e) {
          if (!!o) {
            var d = w(o, c);
            d.get(0) && B.uCanDo(c) && (S.setNodeName(c, o), S.setNodeTarget(c, o), S.setNodeUrl(c, o), S.setNodeLineIcos(c, o), S.setNodeFontCss(c, o), S.setNodeClasses(c, o));
          }
        }
      };
      C.treeTools = m, x.setZTreeTools(c, m);
      var h = x.nodeChildren(c, C);
      return h && h.length > 0 ? S.createNodes(c, 0, h, null, -1) : c.async.enable && c.async.url && c.async.url !== "" && S.asyncNode(c), m;
    }
  };
  var P = J.fn.zTree, w = B.$, v = P.consts;
})(jQuery);
(function(J) {
  var j = {
    event: {
      CHECK: "ztree_check"
    },
    id: {
      CHECK: "_check"
    },
    checkbox: {
      STYLE: "checkbox",
      DEFAULT: "chk",
      DISABLED: "disable",
      FALSE: "false",
      TRUE: "true",
      FULL: "full",
      PART: "part",
      FOCUS: "focus"
    },
    radio: {
      STYLE: "radio",
      TYPE_ALL: "all",
      TYPE_LEVEL: "level"
    }
  }, Ne = {
    check: {
      enable: !1,
      autoCheckTrigger: !1,
      chkStyle: j.checkbox.STYLE,
      nocheckInherit: !1,
      chkDisabledInherit: !1,
      radioType: j.radio.TYPE_LEVEL,
      chkboxType: {
        Y: "ps",
        N: "ps"
      }
    },
    data: {
      key: {
        checked: "checked"
      }
    },
    callback: {
      beforeCheck: null,
      onCheck: null
    }
  }, ve = function(m) {
    var h = n.getRoot(m);
    h.radioCheckedList = [];
  }, Se = function(m) {
  }, Oe = function(m) {
    var h = m.treeObj, o = w.event;
    h.bind(o.CHECK, function(e, d, E, T) {
      e.srcEvent = d, P.apply(m.callback.onCheck, [e, E, T]);
    });
  }, We = function(m) {
    var h = m.treeObj, o = w.event;
    h.unbind(o.CHECK);
  }, He = function(m) {
    var h = m.target, o = n.getSetting(m.data.treeId), e = "", d = null, E = "", T = "", A = null, R = null;
    if (P.eqs(m.type, "mouseover") ? o.check.enable && P.eqs(h.tagName, "span") && h.getAttribute("treeNode" + w.id.CHECK) !== null && (e = P.getNodeMainDom(h).id, E = "mouseoverCheck") : P.eqs(m.type, "mouseout") ? o.check.enable && P.eqs(h.tagName, "span") && h.getAttribute("treeNode" + w.id.CHECK) !== null && (e = P.getNodeMainDom(h).id, E = "mouseoutCheck") : P.eqs(m.type, "click") && o.check.enable && P.eqs(h.tagName, "span") && h.getAttribute("treeNode" + w.id.CHECK) !== null && (e = P.getNodeMainDom(h).id, E = "checkNode"), e.length > 0)
      switch (d = n.getNodeCache(o, e), E) {
        case "checkNode":
          A = x.onCheckNode;
          break;
        case "mouseoverCheck":
          A = x.onMouseoverCheck;
          break;
        case "mouseoutCheck":
          A = x.onMouseoutCheck;
          break;
      }
    var H = {
      stop: E === "checkNode",
      node: d,
      nodeEventType: E,
      nodeEventCallback: A,
      treeEventType: T,
      treeEventCallback: R
    };
    return H;
  }, $e = function(m, h, o, e, d, E, T) {
    if (!!o) {
      var A = m.data.key.checked;
      if (typeof o[A] == "string" && (o[A] = P.eqs(o[A], "true")), o[A] = !!o[A], o.checkedOld = o[A], typeof o.nocheck == "string" && (o.nocheck = P.eqs(o.nocheck, "true")), o.nocheck = !!o.nocheck || m.check.nocheckInherit && e && !!e.nocheck, typeof o.chkDisabled == "string" && (o.chkDisabled = P.eqs(o.chkDisabled, "true")), o.chkDisabled = !!o.chkDisabled || m.check.chkDisabledInherit && e && !!e.chkDisabled, typeof o.halfCheck == "string" && (o.halfCheck = P.eqs(o.halfCheck, "true")), o.halfCheck = !!o.halfCheck, o.check_Child_State = -1, o.check_Focus = !1, o.getCheckStatus = function() {
        return n.getCheckStatus(m, o);
      }, m.check.chkStyle == w.radio.STYLE && m.check.radioType == w.radio.TYPE_ALL && o[A]) {
        var R = n.getRoot(m);
        R.radioCheckedList.push(o);
      }
    }
  }, Ge = function(m, h, o) {
    m.data.key.checked, m.check.enable && (n.makeChkFlag(m, h), o.push("<span ID='", h.tId, w.id.CHECK, "' class='", v.makeChkClass(m, h), "' treeNode", w.id.CHECK, h.nocheck === !0 ? " style='display:none;'" : "", "></span>"));
  }, ee = function(m, h) {
    h.checkNode = function(e, d, E, T) {
      var A = this.setting.data.key.checked;
      if (e.chkDisabled !== !0 && (d !== !0 && d !== !1 && (d = !e[A]), T = !!T, !(e[A] === d && !E) && !(T && P.apply(this.setting.callback.beforeCheck, [this.setting.treeId, e], !0) == !1) && P.uCanDo(this.setting) && this.setting.check.enable && e.nocheck !== !0)) {
        e[A] = d;
        var R = i(e, w.id.CHECK, this.setting);
        (E || this.setting.check.chkStyle === w.radio.STYLE) && v.checkNodeRelation(this.setting, e), v.setChkClass(this.setting, R, e), v.repairParentChkClassWithSelf(this.setting, e), T && this.setting.treeObj.trigger(w.event.CHECK, [null, this.setting.treeId, e]);
      }
    }, h.checkAllNodes = function(e) {
      v.repairAllChk(this.setting, !!e);
    }, h.getCheckedNodes = function(e) {
      var d = this.setting.data.key.children;
      return e = e !== !1, n.getTreeCheckedNodes(this.setting, n.getRoot(this.setting)[d], e);
    }, h.getChangeCheckedNodes = function() {
      var e = this.setting.data.key.children;
      return n.getTreeChangeCheckedNodes(this.setting, n.getRoot(this.setting)[e]);
    }, h.setChkDisabled = function(e, d, E, T) {
      d = !!d, E = !!E, T = !!T, v.repairSonChkDisabled(this.setting, e, d, T), v.repairParentChkDisabled(this.setting, e.getParentNode(), d, E);
    };
    var o = h.updateNode;
    h.updateNode = function(e, d) {
      if (o && o.apply(h, arguments), !(!e || !this.setting.check.enable)) {
        var E = i(e, this.setting);
        if (E.get(0) && P.uCanDo(this.setting)) {
          var T = i(e, w.id.CHECK, this.setting);
          (d == !0 || this.setting.check.chkStyle === w.radio.STYLE) && v.checkNodeRelation(this.setting, e), v.setChkClass(this.setting, T, e), v.repairParentChkClassWithSelf(this.setting, e);
        }
      }
    };
  }, oe = {
    getRadioCheckedList: function(m) {
      for (var h = n.getRoot(m).radioCheckedList, o = 0, e = h.length; o < e; o++)
        n.getNodeCache(m, h[o].tId) || (h.splice(o, 1), o--, e--);
      return h;
    },
    getCheckStatus: function(m, h) {
      if (!m.check.enable || h.nocheck || h.chkDisabled)
        return null;
      var o = m.data.key.checked, e = {
        checked: h[o],
        half: h.halfCheck ? h.halfCheck : m.check.chkStyle == w.radio.STYLE ? h.check_Child_State === 2 : h[o] ? h.check_Child_State > -1 && h.check_Child_State < 2 : h.check_Child_State > 0
      };
      return e;
    },
    getTreeCheckedNodes: function(m, h, o, e) {
      if (!h)
        return [];
      var d = m.data.key.children, E = m.data.key.checked, T = o && m.check.chkStyle == w.radio.STYLE && m.check.radioType == w.radio.TYPE_ALL;
      e = e || [];
      for (var A = 0, R = h.length; A < R && !(h[A].nocheck !== !0 && h[A].chkDisabled !== !0 && h[A][E] == o && (e.push(h[A]), T) || (n.getTreeCheckedNodes(m, h[A][d], o, e), T && e.length > 0)); A++)
        ;
      return e;
    },
    getTreeChangeCheckedNodes: function(m, h, o) {
      if (!h)
        return [];
      var e = m.data.key.children, d = m.data.key.checked;
      o = o || [];
      for (var E = 0, T = h.length; E < T; E++)
        h[E].nocheck !== !0 && h[E].chkDisabled !== !0 && h[E][d] != h[E].checkedOld && o.push(h[E]), n.getTreeChangeCheckedNodes(m, h[E][e], o);
      return o;
    },
    makeChkFlag: function(m, h) {
      if (!!h) {
        var o = m.data.key.children, e = m.data.key.checked, d = -1;
        if (h[o])
          for (var E = 0, T = h[o].length; E < T; E++) {
            var A = h[o][E], R = -1;
            if (m.check.chkStyle == w.radio.STYLE)
              if (A.nocheck === !0 || A.chkDisabled === !0 ? R = A.check_Child_State : A.halfCheck === !0 || A[e] ? R = 2 : R = A.check_Child_State > 0 ? 2 : 0, R == 2) {
                d = 2;
                break;
              } else
                R == 0 && (d = 0);
            else if (m.check.chkStyle == w.checkbox.STYLE)
              if (A.nocheck === !0 || A.chkDisabled === !0 ? R = A.check_Child_State : A.halfCheck === !0 ? R = 1 : A[e] ? R = A.check_Child_State === -1 || A.check_Child_State === 2 ? 2 : 1 : R = A.check_Child_State > 0 ? 1 : 0, R === 1) {
                d = 1;
                break;
              } else if (R === 2 && d > -1 && E > 0 && R !== d) {
                d = 1;
                break;
              } else if (d === 2 && R > -1 && R < 2) {
                d = 1;
                break;
              } else
                R > -1 && (d = R);
          }
        h.check_Child_State = d;
      }
    }
  }, te = {}, x = {
    onCheckNode: function(m, h) {
      if (h.chkDisabled === !0)
        return !1;
      var o = n.getSetting(m.data.treeId), e = o.data.key.checked;
      if (P.apply(o.callback.beforeCheck, [o.treeId, h], !0) == !1)
        return !0;
      h[e] = !h[e], v.checkNodeRelation(o, h);
      var d = i(h, w.id.CHECK, o);
      return v.setChkClass(o, d, h), v.repairParentChkClassWithSelf(o, h), o.treeObj.trigger(w.event.CHECK, [m, o.treeId, h]), !0;
    },
    onMouseoverCheck: function(m, h) {
      if (h.chkDisabled === !0)
        return !1;
      var o = n.getSetting(m.data.treeId), e = i(h, w.id.CHECK, o);
      return h.check_Focus = !0, v.setChkClass(o, e, h), !0;
    },
    onMouseoutCheck: function(m, h) {
      if (h.chkDisabled === !0)
        return !1;
      var o = n.getSetting(m.data.treeId), e = i(h, w.id.CHECK, o);
      return h.check_Focus = !1, v.setChkClass(o, e, h), !0;
    }
  }, de = {}, be = {
    checkNodeRelation: function(m, h) {
      var o, e, d, E = m.data.key.children, T = m.data.key.checked, A = w.radio;
      if (m.check.chkStyle == A.STYLE) {
        var R = n.getRadioCheckedList(m);
        if (h[T])
          if (m.check.radioType == A.TYPE_ALL) {
            for (e = R.length - 1; e >= 0; e--)
              o = R[e], o[T] && o != h && (o[T] = !1, R.splice(e, 1), v.setChkClass(m, i(o, w.id.CHECK, m), o), o.parentTId != h.parentTId && v.repairParentChkClassWithSelf(m, o));
            R.push(h);
          } else {
            var H = h.parentTId ? h.getParentNode() : n.getRoot(m);
            for (e = 0, d = H[E].length; e < d; e++)
              o = H[E][e], o[T] && o != h && (o[T] = !1, v.setChkClass(m, i(o, w.id.CHECK, m), o));
          }
        else if (m.check.radioType == A.TYPE_ALL) {
          for (e = 0, d = R.length; e < d; e++)
            if (h == R[e]) {
              R.splice(e, 1);
              break;
            }
        }
      } else
        h[T] && (!h[E] || h[E].length == 0 || m.check.chkboxType.Y.indexOf("s") > -1) && v.setSonNodeCheckBox(m, h, !0), !h[T] && (!h[E] || h[E].length == 0 || m.check.chkboxType.N.indexOf("s") > -1) && v.setSonNodeCheckBox(m, h, !1), h[T] && m.check.chkboxType.Y.indexOf("p") > -1 && v.setParentNodeCheckBox(m, h, !0), !h[T] && m.check.chkboxType.N.indexOf("p") > -1 && v.setParentNodeCheckBox(m, h, !1);
    },
    makeChkClass: function(m, h) {
      var o = m.data.key.checked, e = w.checkbox, d = w.radio, E = "";
      h.chkDisabled === !0 ? E = e.DISABLED : h.halfCheck ? E = e.PART : m.check.chkStyle == d.STYLE ? E = h.check_Child_State < 1 ? e.FULL : e.PART : E = h[o] ? h.check_Child_State === 2 || h.check_Child_State === -1 ? e.FULL : e.PART : h.check_Child_State < 1 ? e.FULL : e.PART;
      var T = m.check.chkStyle + "_" + (h[o] ? e.TRUE : e.FALSE) + "_" + E;
      return T = h.check_Focus && h.chkDisabled !== !0 ? T + "_" + e.FOCUS : T, w.className.BUTTON + " " + e.DEFAULT + " " + T;
    },
    repairAllChk: function(m, h) {
      if (m.check.enable && m.check.chkStyle === w.checkbox.STYLE)
        for (var o = m.data.key.checked, e = m.data.key.children, d = n.getRoot(m), E = 0, T = d[e].length; E < T; E++) {
          var A = d[e][E];
          A.nocheck !== !0 && A.chkDisabled !== !0 && (A[o] = h), v.setSonNodeCheckBox(m, A, h);
        }
    },
    repairChkClass: function(m, h) {
      if (!!h && (n.makeChkFlag(m, h), h.nocheck !== !0)) {
        var o = i(h, w.id.CHECK, m);
        v.setChkClass(m, o, h);
      }
    },
    repairParentChkClass: function(m, h) {
      if (!(!h || !h.parentTId)) {
        var o = h.getParentNode();
        v.repairChkClass(m, o), v.repairParentChkClass(m, o);
      }
    },
    repairParentChkClassWithSelf: function(m, h) {
      if (!!h) {
        var o = m.data.key.children;
        h[o] && h[o].length > 0 ? v.repairParentChkClass(m, h[o][0]) : v.repairParentChkClass(m, h);
      }
    },
    repairSonChkDisabled: function(m, h, o, e) {
      if (!!h) {
        var d = m.data.key.children;
        if (h.chkDisabled != o && (h.chkDisabled = o), v.repairChkClass(m, h), h[d] && e)
          for (var E = 0, T = h[d].length; E < T; E++) {
            var A = h[d][E];
            v.repairSonChkDisabled(m, A, o, e);
          }
      }
    },
    repairParentChkDisabled: function(m, h, o, e) {
      !h || (h.chkDisabled != o && e && (h.chkDisabled = o), v.repairChkClass(m, h), v.repairParentChkDisabled(m, h.getParentNode(), o, e));
    },
    setChkClass: function(m, h, o) {
      !h || (o.nocheck === !0 ? h.hide() : h.show(), h.attr("class", v.makeChkClass(m, o)));
    },
    setParentNodeCheckBox: function(m, h, o, e) {
      var d = m.data.key.children, E = m.data.key.checked, T = i(h, w.id.CHECK, m);
      if (e || (e = h), n.makeChkFlag(m, h), h.nocheck !== !0 && h.chkDisabled !== !0 && (h[E] = o, v.setChkClass(m, T, h), m.check.autoCheckTrigger && h != e && m.treeObj.trigger(w.event.CHECK, [null, m.treeId, h])), h.parentTId) {
        var A = !0;
        if (!o) {
          for (var R = h.getParentNode()[d], H = 0, Q = R.length; H < Q; H++)
            if (R[H].nocheck !== !0 && R[H].chkDisabled !== !0 && R[H][E] || (R[H].nocheck === !0 || R[H].chkDisabled === !0) && R[H].check_Child_State > 0) {
              A = !1;
              break;
            }
        }
        A && v.setParentNodeCheckBox(m, h.getParentNode(), o, e);
      }
    },
    setSonNodeCheckBox: function(m, h, o, e) {
      if (!!h) {
        var d = m.data.key.children, E = m.data.key.checked, T = i(h, w.id.CHECK, m);
        e || (e = h);
        var A = !1;
        if (h[d])
          for (var R = 0, H = h[d].length; R < H; R++) {
            var Q = h[d][R];
            v.setSonNodeCheckBox(m, Q, o, e), Q.chkDisabled === !0 && (A = !0);
          }
        h != n.getRoot(m) && h.chkDisabled !== !0 && (A && h.nocheck !== !0 && n.makeChkFlag(m, h), h.nocheck !== !0 && h.chkDisabled !== !0 ? (h[E] = o, A || (h.check_Child_State = h[d] && h[d].length > 0 ? o ? 2 : 0 : -1)) : h.check_Child_State = -1, v.setChkClass(m, T, h), m.check.autoCheckTrigger && h != e && h.nocheck !== !0 && h.chkDisabled !== !0 && m.treeObj.trigger(w.event.CHECK, [null, m.treeId, h]));
      }
    }
  }, B = {
    tools: de,
    view: be,
    event: te,
    data: oe
  };
  J.extend(!0, J.fn.zTree.consts, j), J.extend(!0, J.fn.zTree._z, B);
  var S = J.fn.zTree, P = S._z.tools, w = S.consts, v = S._z.view, n = S._z.data;
  S._z.event;
  var i = P.$;
  n.exSetting(Ne), n.addInitBind(Oe), n.addInitUnBind(We), n.addInitCache(Se), n.addInitNode($e), n.addInitProxy(He, !0), n.addInitRoot(ve), n.addBeforeA(Ge), n.addZTreeTools(ee);
  var l = v.createNodes;
  v.createNodes = function(m, h, o, e, d) {
    l && l.apply(v, arguments), o && v.repairParentChkClassWithSelf(m, e);
  };
  var c = v.removeNode;
  v.removeNode = function(m, h) {
    var o = h.getParentNode();
    c && c.apply(v, arguments), !(!h || !o) && (v.repairChkClass(m, o), v.repairParentChkClass(m, o));
  };
  var C = v.appendNodes;
  v.appendNodes = function(m, h, o, e, d, E, T) {
    var A = "";
    return C && (A = C.apply(v, arguments)), e && n.makeChkFlag(m, e), A;
  };
})(jQuery);
(function(J) {
  var j = {
    event: {
      DRAG: "ztree_drag",
      DROP: "ztree_drop",
      RENAME: "ztree_rename",
      DRAGMOVE: "ztree_dragmove"
    },
    id: {
      EDIT: "_edit",
      INPUT: "_input",
      REMOVE: "_remove"
    },
    move: {
      TYPE_INNER: "inner",
      TYPE_PREV: "prev",
      TYPE_NEXT: "next"
    },
    node: {
      CURSELECTED_EDIT: "curSelectedNode_Edit",
      TMPTARGET_TREE: "tmpTargetzTree",
      TMPTARGET_NODE: "tmpTargetNode"
    }
  }, Ne = {
    edit: {
      enable: !1,
      editNameSelectAll: !1,
      showRemoveBtn: !0,
      showRenameBtn: !0,
      removeTitle: "remove",
      renameTitle: "rename",
      drag: {
        autoExpandTrigger: !1,
        isCopy: !0,
        isMove: !0,
        prev: !0,
        next: !0,
        inner: !0,
        minMoveSize: 5,
        borderMax: 10,
        borderMin: -5,
        maxShowNodeNum: 5,
        autoOpenTime: 500
      }
    },
    view: {
      addHoverDom: null,
      removeHoverDom: null
    },
    callback: {
      beforeDrag: null,
      beforeDragOpen: null,
      beforeDrop: null,
      beforeEditName: null,
      beforeRename: null,
      onDrag: null,
      onDragMove: null,
      onDrop: null,
      onRename: null
    }
  }, ve = function(o) {
    var e = v.getRoot(o), d = v.getRoots();
    e.curEditNode = null, e.curEditInput = null, e.curHoverNode = null, e.dragFlag = 0, e.dragNodeShowBefore = [], e.dragMaskList = new Array(), d.showHoverDom = !0;
  }, Se = function(o) {
  }, Oe = function(o) {
    var e = o.treeObj, d = P.event;
    e.bind(d.RENAME, function(E, T, A, R) {
      S.apply(o.callback.onRename, [E, T, A, R]);
    }), e.bind(d.DRAG, function(E, T, A, R) {
      S.apply(o.callback.onDrag, [T, A, R]);
    }), e.bind(d.DRAGMOVE, function(E, T, A, R) {
      S.apply(o.callback.onDragMove, [T, A, R]);
    }), e.bind(d.DROP, function(E, T, A, R, H, Q, Z) {
      S.apply(o.callback.onDrop, [T, A, R, H, Q, Z]);
    });
  }, We = function(o) {
    var e = o.treeObj, d = P.event;
    e.unbind(d.RENAME), e.unbind(d.DRAG), e.unbind(d.DRAGMOVE), e.unbind(d.DROP);
  }, He = function(o) {
    var e = o.target, d = v.getSetting(o.data.treeId), E = o.relatedTarget, T = "", A = null, R = "", H = "", Q = null, Z = null, ae = null;
    if (S.eqs(o.type, "mouseover") ? (ae = S.getMDom(d, e, [{ tagName: "a", attrName: "treeNode" + P.id.A }]), ae && (T = S.getNodeMainDom(ae).id, R = "hoverOverNode")) : S.eqs(o.type, "mouseout") ? (ae = S.getMDom(d, E, [{ tagName: "a", attrName: "treeNode" + P.id.A }]), ae || (T = "remove", R = "hoverOutNode")) : S.eqs(o.type, "mousedown") && (ae = S.getMDom(d, e, [{ tagName: "a", attrName: "treeNode" + P.id.A }]), ae && (T = S.getNodeMainDom(ae).id, R = "mousedownNode")), T.length > 0)
      switch (A = v.getNodeCache(d, T), R) {
        case "mousedownNode":
          Q = te.onMousedownNode;
          break;
        case "hoverOverNode":
          Q = te.onHoverOverNode;
          break;
        case "hoverOutNode":
          Q = te.onHoverOutNode;
          break;
      }
    var Ie = {
      stop: !1,
      node: A,
      nodeEventType: R,
      nodeEventCallback: Q,
      treeEventType: H,
      treeEventCallback: Z
    };
    return Ie;
  }, $e = function(o, e, d, E, T, A, R) {
    !d || (d.isHover = !1, d.editNameFlag = !1);
  }, Ge = function(o, e) {
    e.cancelEditName = function(d) {
      var E = v.getRoot(this.setting);
      !E.curEditNode || w.cancelCurEditNode(this.setting, d || null, !0);
    }, e.copyNode = function(d, E, T, A) {
      if (!E || d && !d.isParent && this.setting.data.keep.leaf && T === P.move.TYPE_INNER)
        return null;
      var R = this, H = S.clone(E);
      if (d || (d = null, T = P.move.TYPE_INNER), T == P.move.TYPE_INNER) {
        let Q = function() {
          w.addNodes(R.setting, d, -1, [H], A);
        };
        S.canAsync(this.setting, d) ? w.asyncNode(this.setting, d, A, Q) : Q();
      } else
        w.addNodes(this.setting, d.parentNode, -1, [H], A), w.moveNode(this.setting, d, H, T, !1, A);
      return H;
    }, e.editName = function(d) {
      !d || !d.tId || d !== v.getNodeCache(this.setting, d.tId) || (d.parentTId && w.expandCollapseParentNode(this.setting, d.getParentNode(), !0), w.editNode(this.setting, d));
    }, e.moveNode = function(d, E, T, A) {
      if (!E)
        return E;
      if (d && !d.isParent && this.setting.data.keep.leaf && T === P.move.TYPE_INNER)
        return null;
      if (d && (E.parentTId == d.tId && T == P.move.TYPE_INNER || n(E, this.setting).find("#" + d.tId).length > 0))
        return null;
      d || (d = null);
      var R = this;
      function H() {
        w.moveNode(R.setting, d, E, T, !1, A);
      }
      return S.canAsync(this.setting, d) && T === P.move.TYPE_INNER ? w.asyncNode(this.setting, d, A, H) : H(), E;
    }, e.setEditable = function(d) {
      return this.setting.edit.enable = d, this.refresh();
    };
  }, ee = {
    setSonNodeLevel: function(o, e, d) {
      if (!!d) {
        var E = o.data.key.children;
        if (d.level = e ? e.level + 1 : 0, !!d[E])
          for (var T = 0, A = d[E].length; T < A; T++)
            d[E][T] && v.setSonNodeLevel(o, d, d[E][T]);
      }
    }
  }, oe = {}, te = {
    onHoverOverNode: function(o, e) {
      var d = v.getSetting(o.data.treeId), E = v.getRoot(d);
      E.curHoverNode != e && te.onHoverOutNode(o), E.curHoverNode = e, w.addHoverDom(d, e);
    },
    onHoverOutNode: function(o, e) {
      var d = v.getSetting(o.data.treeId), E = v.getRoot(d);
      E.curHoverNode && !v.isSelectedNode(d, E.curHoverNode) && (w.removeTreeDom(d, E.curHoverNode), E.curHoverNode = null);
    },
    onMousedownNode: function(o, e) {
      var d, E, T = v.getSetting(o.data.treeId), A = v.getRoot(T), R = v.getRoots();
      if (o.button == 2 || !T.edit.enable || !T.edit.drag.isCopy && !T.edit.drag.isMove)
        return !0;
      var H = o.target, Q = v.getRoot(T).curSelectedList, Z = [];
      if (!v.isSelectedNode(T, e))
        Z = [e];
      else
        for (d = 0, E = Q.length; d < E; d++) {
          if (Q[d].editNameFlag && S.eqs(H.tagName, "input") && H.getAttribute("treeNode" + P.id.INPUT) !== null)
            return !0;
          if (Z.push(Q[d]), Z[0].parentTId !== Q[d].parentTId) {
            Z = [e];
            break;
          }
        }
      w.editNodeBlur = !0, w.cancelCurEditNode(T);
      var ae = J(T.treeObj.get(0).ownerDocument), Ie = J(T.treeObj.get(0).ownerDocument.body), we, Ce, ie, Le = !1, V = T, qe = T, Ke, je, Re = null, Ve = null, ye = null, me = P.move.TYPE_INNER, dt = o.clientX, Ot = o.clientY, Et = new Date().getTime();
      S.uCanDo(T) && ae.bind("mousemove", bt);
      function bt(se) {
        if (A.dragFlag == 0 && Math.abs(dt - se.clientX) < T.edit.drag.minMoveSize && Math.abs(Ot - se.clientY) < T.edit.drag.minMoveSize)
          return !0;
        var he, Be, ue, Ae, ke, Fe = T.data.key.children;
        if (Ie.css("cursor", "pointer"), A.dragFlag == 0) {
          if (S.apply(T.callback.beforeDrag, [T.treeId, Z], !0) == !1)
            return gt(se), !0;
          for (he = 0, Be = Z.length; he < Be; he++)
            he == 0 && (A.dragNodeShowBefore = []), ue = Z[he], ue.isParent && ue.open ? (w.expandCollapseNode(T, ue, !ue.open), A.dragNodeShowBefore[ue.tId] = !0) : A.dragNodeShowBefore[ue.tId] = !1;
          A.dragFlag = 1, R.showHoverDom = !1, S.showIfameMask(T, !0);
          var tt = !0, Pe = -1;
          if (Z.length > 1) {
            var Me = Z[0].parentTId ? Z[0].getParentNode()[Fe] : v.getNodes(T);
            for (ke = [], he = 0, Be = Me.length; he < Be; he++)
              if (A.dragNodeShowBefore[Me[he].tId] !== void 0 && (tt && Pe > -1 && Pe + 1 !== he && (tt = !1), ke.push(Me[he]), Pe = he), Z.length === ke.length) {
                Z = ke;
                break;
              }
          }
          for (tt && (Ke = Z[0].getPreNode(), je = Z[Z.length - 1].getNextNode()), we = n("<ul class='zTreeDragUL'></ul>", T), he = 0, Be = Z.length; he < Be; he++)
            ue = Z[he], ue.editNameFlag = !1, w.selectNode(T, ue, he > 0), w.removeTreeDom(T, ue), !(he > T.edit.drag.maxShowNodeNum - 1) && (Ae = n("<li id='" + ue.tId + "_tmp'></li>", T), Ae.append(n(ue, P.id.A, T).clone()), Ae.css("padding", "0"), Ae.children("#" + ue.tId + P.id.A).removeClass(P.node.CURSELECTED), we.append(Ae), he == T.edit.drag.maxShowNodeNum - 1 && (Ae = n("<li id='" + ue.tId + "_moretmp'><a>  ...  </a></li>", T), we.append(Ae)));
          we.attr("id", Z[0].tId + P.id.UL + "_tmp"), we.addClass(T.treeObj.attr("class")), we.appendTo(Ie), Ce = n("<span class='tmpzTreeMove_arrow'></span>", T), Ce.attr("id", "zTreeMove_arrow_tmp"), Ce.appendTo(Ie), T.treeObj.trigger(P.event.DRAG, [se, T.treeId, Z]);
        }
        if (A.dragFlag == 1) {
          if (ie && Ce.attr("id") == se.target.id && ye && se.clientX + ae.scrollLeft() + 2 > J("#" + ye + P.id.A, ie).offset().left) {
            var De = J("#" + ye + P.id.A, ie);
            se.target = De.length > 0 ? De.get(0) : se.target;
          } else
            ie && (ie.removeClass(P.node.TMPTARGET_TREE), ye && J("#" + ye + P.id.A, ie).removeClass(P.node.TMPTARGET_NODE + "_" + P.move.TYPE_PREV).removeClass(P.node.TMPTARGET_NODE + "_" + j.move.TYPE_NEXT).removeClass(P.node.TMPTARGET_NODE + "_" + j.move.TYPE_INNER));
          ie = null, ye = null, Le = !1, V = T;
          var Ze = v.getSettings();
          for (var rt in Ze)
            Ze[rt].treeId && Ze[rt].edit.enable && Ze[rt].treeId != T.treeId && (se.target.id == Ze[rt].treeId || J(se.target).parents("#" + Ze[rt].treeId).length > 0) && (Le = !0, V = Ze[rt]);
          var ht = ae.scrollTop(), Nt = ae.scrollLeft(), at = V.treeObj.offset(), Pt = V.treeObj.get(0).scrollHeight, _t = V.treeObj.get(0).scrollWidth, Ct = se.clientY + ht - at.top, kt = V.treeObj.height() + at.top - se.clientY - ht, Je = se.clientX + Nt - at.left, pt = V.treeObj.width() + at.left - se.clientX - Nt, lt = Ct < T.edit.drag.borderMax && Ct > T.edit.drag.borderMin, It = kt < T.edit.drag.borderMax && kt > T.edit.drag.borderMin, wt = Je < T.edit.drag.borderMax && Je > T.edit.drag.borderMin, St = pt < T.edit.drag.borderMax && pt > T.edit.drag.borderMin, Lt = Ct > T.edit.drag.borderMin && kt > T.edit.drag.borderMin && Je > T.edit.drag.borderMin && pt > T.edit.drag.borderMin, Rt = lt && V.treeObj.scrollTop() <= 0, Ft = It && V.treeObj.scrollTop() + V.treeObj.height() + 10 >= Pt, Mt = wt && V.treeObj.scrollLeft() <= 0, Ht = St && V.treeObj.scrollLeft() + V.treeObj.width() + 10 >= _t;
          if (se.target && S.isChildOrSelf(se.target, V.treeId)) {
            for (var ze = se.target; ze && ze.tagName && !S.eqs(ze.tagName, "li") && ze.id != V.treeId; )
              ze = ze.parentNode;
            var Tt = !0;
            for (he = 0, Be = Z.length; he < Be; he++)
              if (ue = Z[he], ze.id === ue.tId) {
                Tt = !1;
                break;
              } else if (n(ue, T).find("#" + ze.id).length > 0) {
                Tt = !1;
                break;
              }
            Tt && se.target && S.isChildOrSelf(se.target, ze.id + P.id.A) && (ie = J(ze), ye = ze.id);
          }
          ue = Z[0], Lt && S.isChildOrSelf(se.target, V.treeId) && (!ie && (se.target.id == V.treeId || Rt || Ft || Mt || Ht) && (Le || !Le && ue.parentTId) && (ie = V.treeObj), lt ? V.treeObj.scrollTop(V.treeObj.scrollTop() - 10) : It && V.treeObj.scrollTop(V.treeObj.scrollTop() + 10), wt ? V.treeObj.scrollLeft(V.treeObj.scrollLeft() - 10) : St && V.treeObj.scrollLeft(V.treeObj.scrollLeft() + 10), ie && ie != V.treeObj && ie.offset().left < V.treeObj.offset().left && V.treeObj.scrollLeft(V.treeObj.scrollLeft() + ie.offset().left - V.treeObj.offset().left)), we.css({
            top: se.clientY + ht + 3 + "px",
            left: se.clientX + Nt + 3 + "px"
          });
          var st = 0, vt = 0;
          if (ie && ie.attr("id") != V.treeId) {
            let yt = function() {
              ie = null, ye = "", me = P.move.TYPE_INNER, Ce.css({
                display: "none"
              }), window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null);
            };
            var Ee = ye == null ? null : v.getNodeCache(V, ye), mt = (se.ctrlKey || se.metaKey) && T.edit.drag.isMove && T.edit.drag.isCopy || !T.edit.drag.isMove && T.edit.drag.isCopy, jt = !!(Ke && ye === Ke.tId), Bt = !!(je && ye === je.tId), zt = ue.parentTId && ue.parentTId == ye, ut = (mt || !Bt) && S.apply(V.edit.drag.prev, [V.treeId, Z, Ee], !!V.edit.drag.prev), ct = (mt || !jt) && S.apply(V.edit.drag.next, [V.treeId, Z, Ee], !!V.edit.drag.next), nt = (mt || !zt) && !(V.data.keep.leaf && !Ee.isParent) && S.apply(V.edit.drag.inner, [V.treeId, Z, Ee], !!V.edit.drag.inner);
            if (!ut && !ct && !nt)
              yt();
            else {
              var it = J("#" + ye + P.id.A, ie), Qe = Ee.isLastNode ? null : J("#" + Ee.getNextNode().tId + P.id.A, ie.next()), Ye = it.offset().top, Ut = it.offset().left, ft = ut ? nt ? 0.25 : ct ? 0.5 : 1 : -1, At = ct ? nt ? 0.75 : ut ? 0.5 : 0 : -1, Xe = (se.clientY + ht - Ye) / it.height();
              if ((ft == 1 || Xe <= ft && Xe >= -0.2) && ut ? (st = 1 - Ce.width(), vt = Ye - Ce.height() / 2, me = P.move.TYPE_PREV) : (At == 0 || Xe >= At && Xe <= 1.2) && ct ? (st = 1 - Ce.width(), vt = Qe == null || Ee.isParent && Ee.open ? Ye + it.height() - Ce.height() / 2 : Qe.offset().top - Ce.height() / 2, me = P.move.TYPE_NEXT) : nt ? (st = 5 - Ce.width(), vt = Ye, me = P.move.TYPE_INNER) : yt(), ie && (Ce.css({
                display: "block",
                top: vt + "px",
                left: Ut + st + "px"
              }), it.addClass(P.node.TMPTARGET_NODE + "_" + me), (Re != ye || Ve != me) && (Et = new Date().getTime()), Ee && Ee.isParent && me == P.move.TYPE_INNER)) {
                var ot = !0;
                window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId !== Ee.tId ? (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null) : window.zTreeMoveTimer && window.zTreeMoveTargetNodeTId === Ee.tId && (ot = !1), ot && (window.zTreeMoveTimer = setTimeout(function() {
                  me == P.move.TYPE_INNER && Ee && Ee.isParent && !Ee.open && new Date().getTime() - Et > V.edit.drag.autoOpenTime && S.apply(V.callback.beforeDragOpen, [V.treeId, Ee], !0) && (w.switchNode(V, Ee), V.edit.drag.autoExpandTrigger && V.treeObj.trigger(P.event.EXPAND, [V.treeId, Ee]));
                }, V.edit.drag.autoOpenTime + 50), window.zTreeMoveTargetNodeTId = Ee.tId);
              }
            }
          } else
            me = P.move.TYPE_INNER, ie && S.apply(V.edit.drag.inner, [V.treeId, Z, null], !!V.edit.drag.inner) ? ie.addClass(P.node.TMPTARGET_TREE) : ie = null, Ce.css({
              display: "none"
            }), window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null);
          Re = ye, Ve = me, T.treeObj.trigger(P.event.DRAGMOVE, [se, T.treeId, Z]);
        }
        return !1;
      }
      ae.bind("mouseup", gt);
      function gt(se) {
        if (window.zTreeMoveTimer && (clearTimeout(window.zTreeMoveTimer), window.zTreeMoveTargetNodeTId = null), Re = null, Ve = null, ae.unbind("mousemove", bt), ae.unbind("mouseup", gt), ae.unbind("selectstart", xt), Ie.css("cursor", ""), ie && (ie.removeClass(P.node.TMPTARGET_TREE), ye && J("#" + ye + P.id.A, ie).removeClass(P.node.TMPTARGET_NODE + "_" + P.move.TYPE_PREV).removeClass(P.node.TMPTARGET_NODE + "_" + j.move.TYPE_NEXT).removeClass(P.node.TMPTARGET_NODE + "_" + j.move.TYPE_INNER)), S.showIfameMask(T, !1), R.showHoverDom = !0, A.dragFlag != 0) {
          A.dragFlag = 0;
          var he, Be, ue;
          for (he = 0, Be = Z.length; he < Be; he++)
            ue = Z[he], ue.isParent && A.dragNodeShowBefore[ue.tId] && !ue.open && (w.expandCollapseNode(T, ue, !ue.open), delete A.dragNodeShowBefore[ue.tId]);
          we && we.remove(), Ce && Ce.remove();
          var Ae = (se.ctrlKey || se.metaKey) && T.edit.drag.isMove && T.edit.drag.isCopy || !T.edit.drag.isMove && T.edit.drag.isCopy;
          if (!Ae && ie && ye && Z[0].parentTId && ye == Z[0].parentTId && me == P.move.TYPE_INNER && (ie = null), ie) {
            let tt = function() {
              if (Le) {
                if (!Ae)
                  for (var Pe = 0, Me = Z.length; Pe < Me; Pe++)
                    w.removeNode(T, Z[Pe]);
                me == P.move.TYPE_INNER ? w.addNodes(V, ke, -1, Fe) : w.addNodes(V, ke.getParentNode(), me == P.move.TYPE_PREV ? ke.getIndex() : ke.getIndex() + 1, Fe);
              } else if (Ae && me == P.move.TYPE_INNER)
                w.addNodes(V, ke, -1, Fe);
              else if (Ae)
                w.addNodes(V, ke.getParentNode(), me == P.move.TYPE_PREV ? ke.getIndex() : ke.getIndex() + 1, Fe);
              else if (me != P.move.TYPE_NEXT)
                for (Pe = 0, Me = Fe.length; Pe < Me; Pe++)
                  w.moveNode(V, ke, Fe[Pe], me, !1);
              else
                for (Pe = -1, Me = Fe.length - 1; Pe < Me; Me--)
                  w.moveNode(V, ke, Fe[Me], me, !1);
              w.selectNodes(V, Fe);
              var De = n(Fe[0], T).get(0);
              w.scrollIntoView(De), T.treeObj.trigger(P.event.DROP, [se, V.treeId, Fe, ke, me, Ae]);
            };
            var ke = ye == null ? null : v.getNodeCache(V, ye);
            if (S.apply(T.callback.beforeDrop, [V.treeId, Z, ke, me, Ae], !0) == !1) {
              w.selectNodes(qe, Z);
              return;
            }
            var Fe = Ae ? S.clone(Z) : Z;
            me == P.move.TYPE_INNER && S.canAsync(V, ke) ? w.asyncNode(V, ke, !1, tt) : tt();
          } else
            w.selectNodes(qe, Z), T.treeObj.trigger(P.event.DROP, [se, T.treeId, Z, null, null, null]);
        }
      }
      ae.bind("selectstart", xt);
      function xt() {
        return !1;
      }
      return o.preventDefault && o.preventDefault(), !0;
    }
  }, x = {
    getAbs: function(o) {
      var e = o.getBoundingClientRect(), d = document.body.scrollTop + document.documentElement.scrollTop, E = document.body.scrollLeft + document.documentElement.scrollLeft;
      return [e.left + E, e.top + d];
    },
    inputFocus: function(o) {
      o.get(0) && (o.focus(), S.setCursorPosition(o.get(0), o.val().length));
    },
    inputSelect: function(o) {
      o.get(0) && (o.focus(), o.select());
    },
    setCursorPosition: function(o, e) {
      if (o.setSelectionRange)
        o.focus(), o.setSelectionRange(e, e);
      else if (o.createTextRange) {
        var d = o.createTextRange();
        d.collapse(!0), d.moveEnd("character", e), d.moveStart("character", e), d.select();
      }
    },
    showIfameMask: function(o, e) {
      for (var d = v.getRoot(o); d.dragMaskList.length > 0; )
        d.dragMaskList[0].remove(), d.dragMaskList.shift();
      if (e)
        for (var E = n("iframe", o), T = 0, A = E.length; T < A; T++) {
          var R = E.get(T), H = S.getAbs(R), Q = n("<div id='zTreeMask_" + T + "' class='zTreeMask' style='top:" + H[1] + "px; left:" + H[0] + "px; width:" + R.offsetWidth + "px; height:" + R.offsetHeight + "px;'></div>", o);
          Q.appendTo(n("body", o)), d.dragMaskList.push(Q);
        }
    }
  }, de = {
    addEditBtn: function(o, e) {
      if (!(e.editNameFlag || n(e, P.id.EDIT, o).length > 0) && !!S.apply(o.edit.showRenameBtn, [o.treeId, e], o.edit.showRenameBtn)) {
        var d = n(e, P.id.A, o), E = "<span class='" + P.className.BUTTON + " edit' id='" + e.tId + P.id.EDIT + "' title='" + S.apply(o.edit.renameTitle, [o.treeId, e], o.edit.renameTitle) + "' treeNode" + P.id.EDIT + " style='display:none;'></span>";
        d.append(E), n(e, P.id.EDIT, o).bind(
          "click",
          function() {
            return !S.uCanDo(o) || S.apply(o.callback.beforeEditName, [o.treeId, e], !0) == !1 || w.editNode(o, e), !1;
          }
        ).show();
      }
    },
    addRemoveBtn: function(o, e) {
      if (!(e.editNameFlag || n(e, P.id.REMOVE, o).length > 0) && !!S.apply(o.edit.showRemoveBtn, [o.treeId, e], o.edit.showRemoveBtn)) {
        var d = n(e, P.id.A, o), E = "<span class='" + P.className.BUTTON + " remove' id='" + e.tId + P.id.REMOVE + "' title='" + S.apply(o.edit.removeTitle, [o.treeId, e], o.edit.removeTitle) + "' treeNode" + P.id.REMOVE + " style='display:none;'></span>";
        d.append(E), n(e, P.id.REMOVE, o).bind(
          "click",
          function() {
            return !S.uCanDo(o) || S.apply(o.callback.beforeRemove, [o.treeId, e], !0) == !1 || (w.removeNode(o, e), o.treeObj.trigger(P.event.REMOVE, [o.treeId, e])), !1;
          }
        ).bind(
          "mousedown",
          function(T) {
            return !0;
          }
        ).show();
      }
    },
    addHoverDom: function(o, e) {
      v.getRoots().showHoverDom && (e.isHover = !0, o.edit.enable && (w.addEditBtn(o, e), w.addRemoveBtn(o, e)), S.apply(o.view.addHoverDom, [o.treeId, e]));
    },
    cancelCurEditNode: function(o, e, d) {
      var E = v.getRoot(o), T = o.data.key.name, A = E.curEditNode;
      if (A) {
        var R = E.curEditInput, H = e || (d ? A[T] : R.val());
        if (S.apply(o.callback.beforeRename, [o.treeId, A, H, d], !0) === !1)
          return !1;
        A[T] = H;
        var Q = n(A, P.id.A, o);
        Q.removeClass(P.node.CURSELECTED_EDIT), R.unbind(), w.setNodeName(o, A), A.editNameFlag = !1, E.curEditNode = null, E.curEditInput = null, w.selectNode(o, A, !1), o.treeObj.trigger(P.event.RENAME, [o.treeId, A, d]);
      }
      return E.noSelection = !0, !0;
    },
    editNode: function(o, e) {
      var d = v.getRoot(o);
      if (w.editNodeBlur = !1, v.isSelectedNode(o, e) && d.curEditNode == e && e.editNameFlag) {
        setTimeout(function() {
          S.inputFocus(d.curEditInput);
        }, 0);
        return;
      }
      var E = o.data.key.name;
      e.editNameFlag = !0, w.removeTreeDom(o, e), w.cancelCurEditNode(o), w.selectNode(o, e, !1), n(e, P.id.SPAN, o).html("<input type=text class='rename' id='" + e.tId + P.id.INPUT + "' treeNode" + P.id.INPUT + " >");
      var T = n(e, P.id.INPUT, o);
      T.attr("value", e[E]), o.edit.editNameSelectAll ? S.inputSelect(T) : S.inputFocus(T), T.bind("blur", function(A) {
        w.editNodeBlur || w.cancelCurEditNode(o);
      }).bind("keydown", function(A) {
        A.keyCode == "13" ? (w.editNodeBlur = !0, w.cancelCurEditNode(o)) : A.keyCode == "27" && w.cancelCurEditNode(o, null, !0);
      }).bind("click", function(A) {
        return !1;
      }).bind("dblclick", function(A) {
        return !1;
      }), n(e, P.id.A, o).addClass(P.node.CURSELECTED_EDIT), d.curEditInput = T, d.noSelection = !1, d.curEditNode = e;
    },
    moveNode: function(o, e, d, E, T, A) {
      var R = v.getRoot(o), H = o.data.key.children;
      if (e != d && !(o.data.keep.leaf && e && !e.isParent && E == P.move.TYPE_INNER)) {
        var Q = d.parentTId ? d.getParentNode() : R, Z = e === null || e == R;
        Z && e === null && (e = R), Z && (E = P.move.TYPE_INNER);
        var ae = e.parentTId ? e.getParentNode() : R;
        E != P.move.TYPE_PREV && E != P.move.TYPE_NEXT && (E = P.move.TYPE_INNER), E == P.move.TYPE_INNER && (Z ? d.parentTId = null : (e.isParent || (e.isParent = !0, e.open = !!e.open, w.setNodeLineIcos(o, e)), d.parentTId = e.tId));
        var Ie, we;
        if (Z)
          Ie = o.treeObj, we = Ie;
        else {
          if (!A && E == P.move.TYPE_INNER ? w.expandCollapseNode(o, e, !0, !1) : A || w.expandCollapseNode(o, e.getParentNode(), !0, !1), Ie = n(e, o), we = n(e, P.id.UL, o), !!Ie.get(0) && !we.get(0)) {
            var Ce = [];
            w.makeUlHtml(o, e, Ce, ""), Ie.append(Ce.join(""));
          }
          we = n(e, P.id.UL, o);
        }
        var ie = n(d, o);
        ie.get(0) ? Ie.get(0) || ie.remove() : ie = w.appendNodes(o, d.level, [d], null, -1, !1, !0).join(""), we.get(0) && E == P.move.TYPE_INNER ? we.append(ie) : Ie.get(0) && E == P.move.TYPE_PREV ? Ie.before(ie) : Ie.get(0) && E == P.move.TYPE_NEXT && Ie.after(ie);
        var Le, V, qe = -1, Ke = 0, je = null, Re = null, Ve = d.level;
        if (d.isFirstNode)
          qe = 0, Q[H].length > 1 && (je = Q[H][1], je.isFirstNode = !0);
        else if (d.isLastNode)
          qe = Q[H].length - 1, je = Q[H][qe - 1], je.isLastNode = !0;
        else
          for (Le = 0, V = Q[H].length; Le < V; Le++)
            if (Q[H][Le].tId == d.tId) {
              qe = Le;
              break;
            }
        if (qe >= 0 && Q[H].splice(qe, 1), E != P.move.TYPE_INNER)
          for (Le = 0, V = ae[H].length; Le < V; Le++)
            ae[H][Le].tId == e.tId && (Ke = Le);
        if (E == P.move.TYPE_INNER ? (e[H] || (e[H] = new Array()), e[H].length > 0 && (Re = e[H][e[H].length - 1], Re.isLastNode = !1), e[H].splice(e[H].length, 0, d), d.isLastNode = !0, d.isFirstNode = e[H].length == 1) : e.isFirstNode && E == P.move.TYPE_PREV ? (ae[H].splice(Ke, 0, d), Re = e, Re.isFirstNode = !1, d.parentTId = e.parentTId, d.isFirstNode = !0, d.isLastNode = !1) : e.isLastNode && E == P.move.TYPE_NEXT ? (ae[H].splice(Ke + 1, 0, d), Re = e, Re.isLastNode = !1, d.parentTId = e.parentTId, d.isFirstNode = !1, d.isLastNode = !0) : (E == P.move.TYPE_PREV ? ae[H].splice(Ke, 0, d) : ae[H].splice(Ke + 1, 0, d), d.parentTId = e.parentTId, d.isFirstNode = !1, d.isLastNode = !1), v.fixPIdKeyValue(o, d), v.setSonNodeLevel(o, d.getParentNode(), d), w.setNodeLineIcos(o, d), w.repairNodeLevelClass(o, d, Ve), !o.data.keep.parent && Q[H].length < 1) {
          Q.isParent = !1, Q.open = !1;
          var ye = n(Q, P.id.UL, o), me = n(Q, P.id.SWITCH, o), dt = n(Q, P.id.ICON, o);
          w.replaceSwitchClass(Q, me, P.folder.DOCU), w.replaceIcoClass(Q, dt, P.folder.DOCU), ye.css("display", "none");
        } else
          je && w.setNodeLineIcos(o, je);
        Re && w.setNodeLineIcos(o, Re), !!o.check && o.check.enable && w.repairChkClass && (w.repairChkClass(o, Q), w.repairParentChkClassWithSelf(o, Q), Q != d.parent && w.repairParentChkClassWithSelf(o, d)), A || w.expandCollapseParentNode(o, d.getParentNode(), !0, T);
      }
    },
    removeEditBtn: function(o, e) {
      n(e, P.id.EDIT, o).unbind().remove();
    },
    removeRemoveBtn: function(o, e) {
      n(e, P.id.REMOVE, o).unbind().remove();
    },
    removeTreeDom: function(o, e) {
      e.isHover = !1, w.removeEditBtn(o, e), w.removeRemoveBtn(o, e), S.apply(o.view.removeHoverDom, [o.treeId, e]);
    },
    repairNodeLevelClass: function(o, e, d) {
      if (d !== e.level) {
        var E = n(e, o), T = n(e, P.id.A, o), A = n(e, P.id.UL, o), R = P.className.LEVEL + d, H = P.className.LEVEL + e.level;
        E.removeClass(R), E.addClass(H), T.removeClass(R), T.addClass(H), A.removeClass(R), A.addClass(H);
      }
    },
    selectNodes: function(o, e) {
      for (var d = 0, E = e.length; d < E; d++)
        w.selectNode(o, e[d], d > 0);
    }
  }, be = {
    tools: x,
    view: de,
    event: oe,
    data: ee
  };
  J.extend(!0, J.fn.zTree.consts, j), J.extend(!0, J.fn.zTree._z, be);
  var B = J.fn.zTree, S = B._z.tools, P = B.consts, w = B._z.view, v = B._z.data;
  B._z.event;
  var n = S.$;
  v.exSetting(Ne), v.addInitBind(Oe), v.addInitUnBind(We), v.addInitCache(Se), v.addInitNode($e), v.addInitProxy(He), v.addInitRoot(ve), v.addZTreeTools(Ge);
  var i = w.cancelPreSelectedNode;
  w.cancelPreSelectedNode = function(o, e) {
    for (var d = v.getRoot(o).curSelectedList, E = 0, T = d.length; E < T && !((!e || e === d[E]) && (w.removeTreeDom(o, d[E]), e)); E++)
      ;
    i && i.apply(w, arguments);
  };
  var l = w.createNodes;
  w.createNodes = function(o, e, d, E, T) {
    l && l.apply(w, arguments), !!d && w.repairParentChkClassWithSelf && w.repairParentChkClassWithSelf(o, E);
  };
  var c = w.makeNodeUrl;
  w.makeNodeUrl = function(o, e) {
    return o.edit.enable ? null : c.apply(w, arguments);
  };
  var C = w.removeNode;
  w.removeNode = function(o, e) {
    var d = v.getRoot(o);
    d.curEditNode === e && (d.curEditNode = null), C && C.apply(w, arguments);
  };
  var m = w.selectNode;
  w.selectNode = function(o, e, d) {
    var E = v.getRoot(o);
    return v.isSelectedNode(o, e) && E.curEditNode == e && e.editNameFlag ? !1 : (m && m.apply(w, arguments), w.addHoverDom(o, e), !0);
  };
  var h = S.uCanDo;
  S.uCanDo = function(o, e) {
    var d = v.getRoot(o);
    return e && (S.eqs(e.type, "mouseover") || S.eqs(e.type, "mouseout") || S.eqs(e.type, "mousedown") || S.eqs(e.type, "mouseup")) ? !0 : (d.curEditNode && (w.editNodeBlur = !1, d.curEditInput.focus()), !d.curEditNode && (h ? h.apply(w, arguments) : !0));
  };
})(jQuery);
(function(J) {
  var j = function(v, n, i, l, c, C, m) {
    typeof i.isHidden == "string" && (i.isHidden = $e.eqs(i.isHidden, "true")), i.isHidden = !!i.isHidden, oe.initHideForExCheck(v, i);
  }, Ne = function(v, n, i) {
  }, ve = function(v, n) {
    n.showNodes = function(l, c) {
      ee.showNodes(v, l, c);
    }, n.showNode = function(l, c) {
      !l || ee.showNodes(v, [l], c);
    }, n.hideNodes = function(l, c) {
      ee.hideNodes(v, l, c);
    }, n.hideNode = function(l, c) {
      !l || ee.hideNodes(v, [l], c);
    };
    var i = n.checkNode;
    i && (n.checkNode = function(l, c, C, m) {
      !!l && !!l.isHidden || i.apply(n, arguments);
    });
  }, Se = {
    initHideForExCheck: function(v, n) {
      n.isHidden && v.check && v.check.enable && (typeof n._nocheck > "u" && (n._nocheck = !!n.nocheck, n.nocheck = !0), n.check_Child_State = -1, ee.repairParentChkClassWithSelf && ee.repairParentChkClassWithSelf(v, n));
    },
    initShowForExCheck: function(v, n) {
      if (!n.isHidden && v.check && v.check.enable) {
        if (typeof n._nocheck < "u" && (n.nocheck = n._nocheck, delete n._nocheck), ee.setChkClass) {
          var i = te(n, Ge.id.CHECK, v);
          ee.setChkClass(v, i, n);
        }
        ee.repairParentChkClassWithSelf && ee.repairParentChkClassWithSelf(v, n);
      }
    }
  }, Oe = {
    clearOldFirstNode: function(v, n) {
      for (var i = n.getNextNode(); i; ) {
        if (i.isFirstNode) {
          i.isFirstNode = !1, ee.setNodeLineIcos(v, i);
          break;
        }
        if (i.isLastNode)
          break;
        i = i.getNextNode();
      }
    },
    clearOldLastNode: function(v, n, i) {
      for (var l = n.getPreNode(); l; ) {
        if (l.isLastNode) {
          l.isLastNode = !1, i && ee.setNodeLineIcos(v, l);
          break;
        }
        if (l.isFirstNode)
          break;
        l = l.getPreNode();
      }
    },
    makeDOMNodeMainBefore: function(v, n, i) {
      v.push("<li ", i.isHidden ? "style='display:none;' " : "", "id='", i.tId, "' class='", Ge.className.LEVEL, i.level, "' tabindex='0' hidefocus='true' treenode>");
    },
    showNode: function(v, n, i) {
      n.isHidden = !1, oe.initShowForExCheck(v, n), te(n, v).show();
    },
    showNodes: function(v, n, i) {
      if (!(!n || n.length == 0)) {
        var l = {}, c, C;
        for (c = 0, C = n.length; c < C; c++) {
          var m = n[c];
          if (!l[m.parentTId]) {
            var h = m.getParentNode();
            l[m.parentTId] = h === null ? oe.getRoot(v) : m.getParentNode();
          }
          ee.showNode(v, m, i);
        }
        for (var o in l) {
          var e = l[o][v.data.key.children];
          ee.setFirstNodeForShow(v, e), ee.setLastNodeForShow(v, e);
        }
      }
    },
    hideNode: function(v, n, i) {
      n.isHidden = !0, n.isFirstNode = !1, n.isLastNode = !1, oe.initHideForExCheck(v, n), ee.cancelPreSelectedNode(v, n), te(n, v).hide();
    },
    hideNodes: function(v, n, i) {
      if (!(!n || n.length == 0)) {
        var l = {}, c, C;
        for (c = 0, C = n.length; c < C; c++) {
          var m = n[c];
          if ((m.isFirstNode || m.isLastNode) && !l[m.parentTId]) {
            var h = m.getParentNode();
            l[m.parentTId] = h === null ? oe.getRoot(v) : m.getParentNode();
          }
          ee.hideNode(v, m, i);
        }
        for (var o in l) {
          var e = l[o][v.data.key.children];
          ee.setFirstNodeForHide(v, e), ee.setLastNodeForHide(v, e);
        }
      }
    },
    setFirstNode: function(v, n) {
      var i = v.data.key.children, l = n[i].length;
      l > 0 && !n[i][0].isHidden ? n[i][0].isFirstNode = !0 : l > 0 && ee.setFirstNodeForHide(v, n[i]);
    },
    setLastNode: function(v, n) {
      var i = v.data.key.children, l = n[i].length;
      l > 0 && !n[i][0].isHidden ? n[i][l - 1].isLastNode = !0 : l > 0 && ee.setLastNodeForHide(v, n[i]);
    },
    setFirstNodeForHide: function(v, n) {
      var i, l, c;
      for (l = 0, c = n.length; l < c && (i = n[l], !i.isFirstNode); l++)
        if (!i.isHidden && !i.isFirstNode) {
          i.isFirstNode = !0, ee.setNodeLineIcos(v, i);
          break;
        } else
          i = null;
      return i;
    },
    setFirstNodeForShow: function(v, n) {
      var i, l, c, C, m;
      for (l = 0, c = n.length; l < c; l++)
        if (i = n[l], !C && !i.isHidden && i.isFirstNode) {
          C = i;
          break;
        } else if (!C && !i.isHidden && !i.isFirstNode)
          i.isFirstNode = !0, C = i, ee.setNodeLineIcos(v, i);
        else if (C && i.isFirstNode) {
          i.isFirstNode = !1, m = i, ee.setNodeLineIcos(v, i);
          break;
        } else
          i = null;
      return { new: C, old: m };
    },
    setLastNodeForHide: function(v, n) {
      var i, l;
      for (l = n.length - 1; l >= 0 && (i = n[l], !i.isLastNode); l--)
        if (!i.isHidden && !i.isLastNode) {
          i.isLastNode = !0, ee.setNodeLineIcos(v, i);
          break;
        } else
          i = null;
      return i;
    },
    setLastNodeForShow: function(v, n) {
      var i, l, c, C;
      for (l = n.length - 1; l >= 0; l--)
        if (i = n[l], !c && !i.isHidden && i.isLastNode) {
          c = i;
          break;
        } else if (!c && !i.isHidden && !i.isLastNode)
          i.isLastNode = !0, c = i, ee.setNodeLineIcos(v, i);
        else if (c && i.isLastNode) {
          i.isLastNode = !1, C = i, ee.setNodeLineIcos(v, i);
          break;
        } else
          i = null;
      return { new: c, old: C };
    }
  }, We = {
    view: Oe,
    data: Se
  };
  J.extend(!0, J.fn.zTree._z, We);
  var He = J.fn.zTree, $e = He._z.tools, Ge = He.consts, ee = He._z.view, oe = He._z.data;
  He._z.event;
  var te = $e.$;
  oe.addInitNode(j), oe.addBeforeA(Ne), oe.addZTreeTools(ve);
  var x = oe.initNode;
  oe.initNode = function(v, n, i, l, c, C, m) {
    var h = l || oe.getRoot(v), o = h[v.data.key.children];
    oe.tmpHideFirstNode = ee.setFirstNodeForHide(v, o), oe.tmpHideLastNode = ee.setLastNodeForHide(v, o), m && (ee.setNodeLineIcos(v, oe.tmpHideFirstNode), ee.setNodeLineIcos(v, oe.tmpHideLastNode)), c = oe.tmpHideFirstNode === i, C = oe.tmpHideLastNode === i, x && x.apply(oe, arguments), m && C && ee.clearOldLastNode(v, i, m);
  };
  var de = oe.makeChkFlag;
  de && (oe.makeChkFlag = function(v, n) {
    !!n && !!n.isHidden || de.apply(oe, arguments);
  });
  var be = oe.getTreeCheckedNodes;
  be && (oe.getTreeCheckedNodes = function(v, n, i, l) {
    if (!!n && n.length > 0) {
      var c = n[0].getParentNode();
      if (!!c && !!c.isHidden)
        return [];
    }
    return be.apply(oe, arguments);
  });
  var B = oe.getTreeChangeCheckedNodes;
  B && (oe.getTreeChangeCheckedNodes = function(v, n, i) {
    if (!!n && n.length > 0) {
      var l = n[0].getParentNode();
      if (!!l && !!l.isHidden)
        return [];
    }
    return B.apply(oe, arguments);
  });
  var S = ee.expandCollapseSonNode;
  S && (ee.expandCollapseSonNode = function(v, n, i, l, c) {
    !!n && !!n.isHidden || S.apply(ee, arguments);
  });
  var P = ee.setSonNodeCheckBox;
  P && (ee.setSonNodeCheckBox = function(v, n, i, l) {
    !!n && !!n.isHidden || P.apply(ee, arguments);
  });
  var w = ee.repairParentChkClassWithSelf;
  w && (ee.repairParentChkClassWithSelf = function(v, n) {
    !!n && !!n.isHidden || w.apply(ee, arguments);
  });
})(jQuery);
class $t {
  constructor(j) {
    this.zTree = null, this.treeId = j.el, this.el = $("#" + this.treeId), this._eachProperties(j.options), this._eachProperties(j.methods), this.currentHandlerName = null;
  }
  setInitialTree(ve, Ne) {
    var ve = this.iconsFilter({ data: ve });
    $.fn.zTree.init(
      this.el,
      this.treeConfig(),
      this.setIsFirstNodesExpand(ve)
    ), this.zTree = $.fn.zTree.getZTreeObj(this.treeId), this.expandAll && this.zTree.expandAll(!0), typeof Ne == "function" && Ne(this.zTree);
  }
  setIsFirstNodesExpand(j) {
    return Array.isArray(j) && j.length > 0 && (j[0].open = this.isExpand, j[0].chkDisabled = this.isFreeze), j;
  }
  treeConfig() {
    const j = this;
    return {
      data: {
        key: { name: this.name },
        simpleData: { enable: !0 }
      },
      check: {
        enable: this.isCheck,
        nocheckInherit: !0,
        chkStyle: "checkbox",
        chkboxType: { Y: "ps", N: "ps" },
        chkDisabledInherit: !0
      },
      edit: {
        drag: {
          isCopy: this.isCopy,
          isMove: this.isMove,
          prev: !1
        },
        enable: this.edit,
        showRemoveBtn: this.showRemoveBtn,
        showRenameBtn: this.showRenameBtn
      },
      view: {
        selectedMulti: !0,
        showLine: !1,
        txtSelectedEnable: !0,
        showIcon: this.showIcon,
        fontCss(Ne, ve) {
          return ve.highlight ? { color: "red" } : { color: "#333" };
        },
        addHoverDom(Ne, ve) {
          let Se = $("#" + ve.tId + "_a"), Oe = j.hoverOperation && j.hoverOperation(ve);
          if (!Oe || $(`#operation-btn${ve.id}`).length > 0)
            return;
          let We = `<span id="operation-btn${ve.id}">${Oe.template ? Oe.template : ""}</span>`;
          Se.append(We), typeof Oe.methods == "function" && Oe.methods();
        },
        removeHoverDom(Ne, ve) {
          $(`#operation-btn${ve.id}`).unbind().remove();
        }
      },
      async: {
        enable: !0,
        url: this.lazy,
        autoParam: this.autoParam,
        otherParam: this.otherParam,
        dataFilter: function(Ne, ve, Se) {
          return j.iconsFilter(Se);
        },
        type: this.type,
        headers: {
          token: localStorage.getItem("token"),
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      },
      callback: {
        beforeClick: this.beforeClick,
        beforeCheck: this.beforeCheck,
        beforeRemove: this.beforeRemove,
        beforeRename: this.beforeRename,
        onExpand: this.onExpand,
        beforeAsync: this.beforeAsync,
        onAsyncSuccess: this.onAsyncSuccess,
        onCheck: this.onCheck,
        onClick: this.onClick,
        onRightClick: this.onRightClick,
        onRename: this.onRename,
        onCollapse: this.onCollapse,
        beforeDrop: this.beforeDrop,
        onDrop: this.onDrop
      }
    };
  }
  _eachProperties(j) {
    Object.keys(j).forEach((Ne) => {
      const ve = j[Ne];
      this[Ne] = ve;
    });
  }
}
export {
  $t as default
};
