(function(t) {
  function e(e) {
    for (
      var r, i, s = e[0], l = e[1], c = e[2], u = 0, f = [];
      u < s.length;
      u++
    )
      (i = s[u]), a[i] && f.push(a[i][0]), (a[i] = 0);
    for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (t[r] = l[r]);
    p && p(e);
    while (f.length) f.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, i = 1; i < n.length; i++) {
        var l = n[i];
        0 !== a[l] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = s((s.s = n[0]))));
    }
    return t;
  }
  var r = {},
    a = { app: 0 },
    o = [];
  function i(t) {
    return (
      s.p +
      "js/" +
      ({ about: "about" }[t] || t) +
      "." +
      { about: "28e689c8" }[t] +
      ".js"
    );
  }
  function s(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function(t) {
    var e = [],
      n = a[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var r = new Promise(function(e, r) {
          n = a[t] = [e, r];
        });
        e.push((n[2] = r));
        var o,
          l = document.getElementsByTagName("head")[0],
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          s.nc && c.setAttribute("nonce", s.nc),
          (c.src = i(t)),
          (o = function(e) {
            (c.onerror = c.onload = null), clearTimeout(u);
            var n = a[t];
            if (0 !== n) {
              if (n) {
                var r = e && ("load" === e.type ? "missing" : e.type),
                  o = e && e.target && e.target.src,
                  i = new Error(
                    "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")"
                  );
                (i.type = r), (i.request = o), n[1](i);
              }
              a[t] = void 0;
            }
          });
        var u = setTimeout(function() {
          o({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = o), l.appendChild(c);
      }
    return Promise.all(e);
  }),
    (s.m = t),
    (s.c = r),
    (s.d = function(t, e, n) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (s.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          s.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = "/"),
    (s.oe = function(t) {
      throw (console.error(t), t);
    });
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = l.push.bind(l);
  (l.push = e), (l = l.slice());
  for (var u = 0; u < l.length; u++) e(l[u]);
  var p = c;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function(t, e, n) {
    t.exports = n("56d7");
  },
  2725: function(t, e, n) {
    var r = n("3948");
    "string" === typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    var a = n("499e").default;
    a("4743fc33", r, !0, {});
  },
  3948: function(t, e, n) {
    (e = t.exports = n("2350")(!1)),
      e.push([
        t.i,
        "\nbody {\n  margin: 0;\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n}\nhtml,\nbody,\n#app {\n  height: 100%;\n  overflow-x: hidden;\n}\n.vux-drawer > div {\n  width: 100%;\n}\n",
        ""
      ]);
  },
  "56d7": function(t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("097d");
    var r = n("2b0e"),
      a = n("1686"),
      o = (a["a"],
      {
        name: "app",
        components: { Drawer: a["a"] },
        data: function() {
          return { drawerVisibility: !1 };
        },
        methods: {
          changeDrawerVisibility: function() {
            this.drawerVisibility = !this.drawerVisibility;
          }
        }
      }),
      i = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n(
              "drawer",
              {
                attrs: { show: t.drawerVisibility, placement: "right" },
                on: {
                  "update:show": function(e) {
                    t.drawerVisibility = e;
                  }
                }
              },
              [
                n(
                  "div",
                  {
                    staticClass: "side",
                    attrs: { slot: "drawer" },
                    slot: "drawer"
                  },
                  [
                    n(
                      "x-button",
                      {
                        attrs: { type: "primary" },
                        nativeOn: {
                          click: function(e) {
                            return t.changeDrawerVisibility(e);
                          }
                        }
                      },
                      [t._v(t._s(t.drawerVisibility))]
                    )
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "div",
                  { attrs: { slot: "default" }, slot: "default" },
                  [
                    n("router-link", { attrs: { to: "/" } }, [t._v("Home")]),
                    t._v(" | "),
                    n("router-link", { attrs: { to: "/about" } }, [
                      t._v("About")
                    ]),
                    t._v(" "),
                    n(
                      "x-button",
                      {
                        attrs: { type: "primary" },
                        nativeOn: {
                          click: function(e) {
                            return t.changeDrawerVisibility(e);
                          }
                        }
                      },
                      [t._v(t._s(t.drawerVisibility))]
                    )
                  ],
                  1
                ),
                t._v(" "),
                n("div", [n("router-view")], 1)
              ]
            )
          ],
          1
        );
      },
      s = [],
      l = n("2455");
    function c(t) {
      n("2725");
    }
    var u = !1,
      p = c,
      f = null,
      d = null,
      v = Object(l["a"])(o, i, s, u, p, f, d),
      b = v.exports,
      m = n("8c4f"),
      h = (String, { name: "HelloWorld", props: { msg: String } }),
      g = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "hello" }, [
          n("h1", [t._v(t._s(t.msg))])
        ]);
      },
      y = [];
    function _(t) {
      n("5c07");
    }
    var w = !1,
      x = _,
      j = "data-v-2c3c4891",
      O = null,
      V = Object(l["a"])(h, g, y, w, x, j, O),
      k = V.exports,
      P = n("bb51"),
      T = n("4e41"),
      S = (P["a"],
      T["a"],
      {
        name: "home",
        components: { HelloWorld: k, Tabbar: P["a"], TabbarItem: T["a"] }
      }),
      E = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "home" },
          [
            r("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } }),
            t._v(" "),
            r("x-button", { attrs: { type: "primary" } }, [t._v("primary")]),
            t._v(" "),
            r("x-button", { attrs: { type: "warn" } }, [t._v("Delete")]),
            t._v(" "),
            r("font-awesome-icon", { attrs: { icon: "coffee" } }),
            t._v(" "),
            r(
              "tabbar",
              [
                r("tabbar-item", { attrs: { selected: "", "show-dot": "" } }, [
                  r("img", {
                    attrs: { slot: "icon", src: n("cf05") },
                    slot: "icon"
                  }),
                  t._v(" "),
                  r("span", { attrs: { slot: "label" }, slot: "label" }, [
                    t._v("遊戲")
                  ])
                ]),
                t._v(" "),
                r("tabbar-item", { attrs: { "show-dot": "" } }, [
                  r("img", {
                    attrs: { slot: "icon", src: n("cf05") },
                    slot: "icon"
                  }),
                  t._v(" "),
                  r("span", { attrs: { slot: "label" }, slot: "label" }, [
                    t._v("帳務中心")
                  ])
                ]),
                t._v(" "),
                r("tabbar-item", [
                  r("img", {
                    attrs: { slot: "icon", src: n("cf05") },
                    slot: "icon"
                  }),
                  t._v(" "),
                  r("span", { attrs: { slot: "label" }, slot: "label" }, [
                    t._v("在線客服")
                  ])
                ]),
                t._v(" "),
                r("tabbar-item", { attrs: { badge: "12" } }, [
                  r("img", {
                    attrs: { slot: "icon", src: n("cf05") },
                    slot: "icon"
                  }),
                  t._v(" "),
                  r("span", { attrs: { slot: "label" }, slot: "label" }, [
                    t._v("優惠活動")
                  ])
                ]),
                t._v(" "),
                r("tabbar-item", { attrs: { badge: "2" } }, [
                  r("img", {
                    attrs: { slot: "icon", src: n("cf05") },
                    slot: "icon"
                  }),
                  t._v(" "),
                  r("span", { attrs: { slot: "label" }, slot: "label" }, [
                    t._v("我的")
                  ])
                ])
              ],
              1
            )
          ],
          1
        );
      },
      A = [],
      D = !1,
      H = null,
      C = null,
      M = null,
      W = Object(l["a"])(S, E, A, D, H, C, M),
      $ = W.exports;
    r["a"].use(m["a"]);
    var B = new m["a"]({
        routes: [
          { path: "/", name: "home", component: $ },
          {
            path: "/about",
            name: "about",
            component: function() {
              return n.e("about").then(n.bind(null, "f820"));
            }
          }
        ]
      }),
      J = n("6a95"),
      q = n("ecee"),
      z = n("c074"),
      I = n("ad3d");
    r["a"].component("XButton", J["a"]),
      q["c"].add(z["a"]),
      r["a"].component("font-awesome-icon", I["a"]),
      (r["a"].config.productionTip = !1),
      new r["a"]({
        router: B,
        render: function(t) {
          return t(b);
        }
      }).$mount("#app");
  },
  "5c07": function(t, e, n) {
    var r = n("9520");
    "string" === typeof r && (r = [[t.i, r, ""]]),
      r.locals && (t.exports = r.locals);
    var a = n("499e").default;
    a("ae530e7e", r, !0, {});
  },
  9520: function(t, e, n) {
    (e = t.exports = n("2350")(!1)),
      e.push([
        t.i,
        "\nh3[data-v-2c3c4891] {\n  margin: 40px 0 0;\n}\nul[data-v-2c3c4891] {\n  list-style-type: none;\n  padding: 0;\n}\nli[data-v-2c3c4891] {\n  display: inline-block;\n  margin: 0 10px;\n}\na[data-v-2c3c4891] {\n  color: #42b983;\n}\n",
        ""
      ]);
  },
  cf05: function(t, e, n) {
    t.exports = n.p + "img/logo.82b9c7a5.png";
  }
});
//# sourceMappingURL=app.5052abff.js.map
