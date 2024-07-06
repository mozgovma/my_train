(() => {
  "use strict";
  var e, r = {
    272: (e, r, t) => {
      var n = t(540);
      const l = function o() {
        return n.createElement("div", null, "Hello, world!");
      };
      t(961).render(n.createElement(l, null), document.getElementById("full-width-element"));
    }
  }, t = {};
  function n(e) {
    var l = t[e];
    if (void 0 !== l) return l.exports;
    var o = t[e] = {
      exports: {}
    };
    return r[e](o, o.exports, n), o.exports;
  }
  n.m = r, e = [], n.O = (r, t, l, o) => {
    if (!t) {
      var a = 1 / 0;
      for (f = 0; f < e.length; f++) {
        for (var [t, l, o] = e[f], i = !0, u = 0; u < t.length; u++) (!1 & o || a >= o) && Object.keys(n.O).every((e => n.O[e](t[u]))) ? t.splice(u--, 1) : (i = !1, 
        o < a && (a = o));
        if (i) {
          e.splice(f--, 1);
          var v = l();
          void 0 !== v && (r = v);
        }
      }
      return r;
    }
    o = o || 0;
    for (var f = e.length; f > 0 && e[f - 1][2] > o; f--) e[f] = e[f - 1];
    e[f] = [ t, l, o ];
  }, n.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
    var e = {
      644: 0
    };
    n.O.j = r => 0 === e[r];
    var r = (r, t) => {
      var l, o, [a, i, u] = t, v = 0;
      if (a.some((r => 0 !== e[r]))) {
        for (l in i) n.o(i, l) && (n.m[l] = i[l]);
        if (u) var f = u(n);
      }
      for (r && r(t); v < a.length; v++) o = a[v], n.o(e, o) && e[o] && e[o][0](), e[o] = 0;
      return n.O(f);
    }, t = self.webpackChunkmy_train = self.webpackChunkmy_train || [];
    t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t));
  })();
  var l = n.O(void 0, [ 961 ], (() => n(272)));
  l = n.O(l);
})();