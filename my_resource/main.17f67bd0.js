(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    "+mZ4": function (e, t, n) {
        e.exports = n.p + "electro_text.3f75108cc933acde9469312d7b9ece31.png"
    }, "+nVp": function (e, t, n) {
        e.exports = n.p + "bottom-lovesong.f5999bd83d70cf64837b24b6cb9f6832.png"
    }, "/H1Q": function (e, t, n) {
    }, "/NGB": function (e, t, n) {
    }, "/NeI": function (e, t, n) {
        e.exports = n.p + "emotion_4.28561cbd24de89daa266809a78b09cf8.png"
    }, "/P7Y": function (e, t, n) {
        e.exports = n.p + "yinfu1-2.1710983d6dd26391d05d33de42b2c41e.png"
    }, "/UHX": function (e, t) {
        e.exports = "#define GLSLIFY 1\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n\t#include <clipping_planes_fragment>\n\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n\t// accumulation (baked indirect lighting only)\n\t#ifdef USE_LIGHTMAP\n\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n\t#else\n\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\n\t#endif\n\n\t// modulation\n\t#include <aomap_fragment>\n\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n\t#include <envmap_fragment>\n\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\n}"
    }, "/rMn": function (e, t, n) {
    }, "/tM/": function (e, t, n) {
    }, 0: function (e, t) {
    }, "0fgi": function (e, t, n) {
    }, "1E3q": function (e, t, n) {
        e.exports = n.p + "bgg.d78404cec29e5275598b87d1716f0592.png"
    }, "1FdU": function (e, t, n) {
    }, "2dPG": function (e, t, n) {
    }, "2wDU": function (e, t, n) {
        e.exports = n.p + "yes.fffdb36e151a599a4be80e4fdbde2026.gif"
    }, "3IA8": function (e, t, n) {
        e.exports = n.p + "prechat_match.40c95dc5b64dcdcdd00e608bb09297f3.png"
    }, "3cNW": function (e, t, n) {
    }, "3nt6": function (e, t, n) {
    }, "47JS": function (e, t, n) {
        e.exports = n.p + "logo@2x.ee1c21d17dd0694e5798709dd2ed0052.png"
    }, "4WOI": function (e, t, n) {
        e.exports = n.p + "share@2x.c5d1ed060684fabc3f96ad4a10dc2592.png"
    }, "4oZB": function (e, t, n) {
    }, "5+Cm": function (e, t, n) {
    }, "50pn": function (e, t, n) {
    }, "5JIZ": function (e, t, n) {
    }, "5QVD": function (e, t, n) {
    }, "5vyc": function (e, t, n) {
        e.exports = n.p + "chat-btn.fbe9d73afd4cc25ee5ef31b656dbb45c.png"
    }, "6SUK": function (e, t, n) {
        e.exports = n.p + "bottom-common.834258c02ced1af0d8c2872f47121b82.png"
    }, "6gHW": function (e, t, n) {
        e.exports = n.p + "bg_x.01b96c1f3d0cc1801ecad75f8647a2c9.jpg"
    }, "72YD": function (e, t, n) {
        e.exports = n.p + "title@2x.7c87506dfb012b9dfac5fdd39e2ccb06.png"
    }, "79Vo": function (e, t, n) {
    }, "8Iw+": function (e, t, n) {
    }, "8RZR": function (e, t, n) {
        e.exports = n.p + "middlePlanet.f172a1e4ac5730fa50bc41def8a1552b.png"
    }, "8tiM": function (e, t, n) {
    }, "8yGH": function (e, t, n) {
    }, "9Q/W": function (e, t, n) {
    }, BSiH: function (e, t, n) {
    }, BfhL: function (e, t, n) {
        e.exports = n.p + "back_android@2x.1628fb395c7ae74de7486e8ed4aa2986.png"
    }, CAMv: function (e, t, n) {
        e.exports = n.p + "menu_ios@2x.87caadc87959380f0dea52360f8d5e6a.png"
    }, CB7T: function (e, t, n) {
    }, CqLX: function (e, t, h) {
        "use strict";
        h.r(t);
        h("55Il"), h("Off7"), h("Z2l5");
        var n = h("OjQg"), r = h.n(n), s = h("q1tI"), C = h.n(s), o = h("i8i4"), i = h.n(o), a = h("4fDp"), u = h.n(a),
            c = h("y7P4"), l = h.n(c), f = h("aY4z"), m = h.n(f), p = h("raXG"), d = h.n(p), y = h("w/jR"), b = h.n(y),
            v = h("s4NR"), g = h.n(v), w = h("1w3K"), E = h("17x9"), S = h.n(E);
        h("RPlU");

        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function N(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function _(e) {
            return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function k(e, t) {
            return (k = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function T(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var j = {ios: "Safari", ie: "ie"}, P = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = _(o).call(this)) || "object" !== O(n) && "function" != typeof n ? T(t) : n).state = {show: !0}, e.close = e.close.bind(T(T(e))), e.dispose = e.dispose.bind(T(T(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && k(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.platform, t = this.state.show, n = j[e] || "浏览器";
                    return C.a.createElement(w.CSSTransition, {
                        in: t,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {
                        className: "m-openmask",
                        onClick: this.close
                    }, C.a.createElement("div", {className: "opentip"}, C.a.createElement("div", {className: "lay"}, C.a.createElement("div", {className: "note"}, C.a.createElement("h3", null, "链接打不开？"), C.a.createElement("p", null, "请点击右上角", C.a.createElement("br", null), "选择在", C.a.createElement("span", {className: "s-fc5"}, " “", n, "”"), "中打开"))))))
                }
            }]) && N(t.prototype, n), a && N(t, a), o
        }();

        function R() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement(P, n), t)
        }

        P.propTypes = {
            container: S.a.instanceOf(Element).isRequired,
            platform: S.a.string
        }, P.defaultProps = {platform: ""};
        h("iKw2");

        function D(e) {
            return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function x(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function M(e) {
            return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function U(e, t) {
            return (U = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function I(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var L = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = M(o).call(this)) || "object" !== D(n) && "function" != typeof n ? I(t) : n).state = {show: !0}, e.close = e.close.bind(I(I(e))), e.dispose = e.dispose.bind(I(I(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && U(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.show;
                    return C.a.createElement(w.CSSTransition, {
                        in: e,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {
                        className: "m-sharemask",
                        onClick: this.close
                    }, C.a.createElement("div", {className: "sharetip"}, C.a.createElement("p", null, "请点击右上角", C.a.createElement("span", {className: "icn"})), C.a.createElement("p", null, "分享给更多小伙伴"))))
                }
            }]) && x(t.prototype, n), a && x(t, a), o
        }();

        function A() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement(L, n), t)
        }

        L.propTypes = {container: S.a.instanceOf(Element).isRequired};
        var H = h("etx1"), z = h.n(H), q = h("OMJ6"), B = h.n(q), W = "USER_ID", G = "E_USER_ID", F = "USER_AVATAR",
            V = "USER_NICKNAME", Y = "IS_VIEWED", J = "SET_VIEWED", Q = "CREATE_TOP_PLAYLIST", K = "EXIT_COUNT",
            X = "GENDER", Z = "COMPLAIN_TIMES", $ = "BI_PAGE_NAME", ee = "BI_REFER", te = "BI_GENDER",
            ne = "BI_START_MATCH_TIME", oe = "BI_END_MATCH_TIME", ae = "BI_MATCH_ALG", re = "BI_CHAT_TYPE",
            ie = "BI_VIEW_STYLE", ce = "CHATROOM_ID", se = window.location,
            ue = ["PiESs", "yZh74", "Mrkpp", "3w1Y9", "GH0tY", "YSDlI", "vhlx3", "fC6ia", "q0Rmw", "WJfaV", "3Lodq", "LPG7v", "oJ6i2", "kbSJt", "ZfBLy", "Ps1Qz", "jgZ8X", "UlTeQ", "Sl6S4", "ex4ms", "FxrfI", "MIP7h", "iJN1n", "Ckr9m", "lNAjl", "2XDxL", "wKTCW", "J7yKv", "cv5QJ", "eqO5K", "haIRh", "p7bIM", "sMs9A", "59Tyn", "Aqt1I", "nLeI7", "Wufgf", "LwHtA", "bVGb4", "JllmA", "iH2yf", "Nww6N", "KvQbJ", "Bx25i", "RILnv", "SQXdP", "0GbEu", "ZdqHo", "wtVVa", "utfHc", "jDjtb", "efwl5", "8zkze", "Yrm9v", "3HMS6", "i3gqN", "ggrBL", "9cEHM", "5WOUj", "4DbDK", "4RRgG", "5jU0z", "E10gJ", "xKQHC", "O3sZy", "mo08n", "Hwlav", "SqbuJ", "Sy81h", "Zmu0v", "OOXWq", "bCASZ", "b2GUZ", "YUVtA", "KIKU0", "tbG5y", "qzfOa", "qmcOW", "HT9CK", "KPFjV", "zt2BW", "tqNAb", "EjD9D", "u7jNM", "j3POd", "WBP4D", "9odV8", "6DnYx", "QQjGb", "WsG63", "UaCVM", "EPoNy", "E7oGH", "mf7V8", "V9Mo7", "SLFew", "rXmxl", "oTO7T", "rSM1q", "tUdeQ"],
            le = ["m2.link", "orpheus.ink", "col.ink", "bdi.pub", "m2.21cntx.com"];

        function fe() {
            var e, t = (e = le, /\bmusic\.163\.com$/.test(se.host) ? e[Math.floor(Math.random() * e.length)] : se.host);
            return (/\.163\.com$/.test(t) ? "https://" : "http://") + t + function (e) {
                var t = se.pathname, n = e[Math.floor(Math.random() * e.length)], o = /^\/c\/([\w\d-]+)\/?/.exec(t);
                if (o) return "/c/".concat(o[1], "/").concat(n);
                var a = /^\/([\w\d-]+)\/?/.exec(t);
                return a ? "/".concat(a[1], "/").concat(n) : ""
            }(ue)
        }

        function me(e) {
            return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var pe, he, de, ye, be = window.location, ve = {}, ge = {};
        ge.isOnline = function () {
            return !!/music\.163\.com$|m2\.link$|orpheus\.ink$|col\.ink$|bdi\.pub$|m2\.21cntx\.com$/.test(be.host)
        }, ge.getHost = function () {
            return ge.isOnline() ? "interface.music.163.com" : "qa.igame.163.com"
        }, ge.URL = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            return /^\//.test(e) ? "".concat(be.protocol, "//").concat(ge.getHost()).concat(e) : e
        }, ge.setLogger = function (e) {
            pe = new z.a(e, e)
        }, ge.biLogPage = function (e, t) {
            pe.page(e, t)
        }, ge.biLogClick = function (e, t, n) {
            pe.click(e, t, n)
        }, ge.biLogAction = function (e, t) {
            pe.action(e, t)
        }, ge.query = function (e) {
            return (be.search ? g.a.parse(be.search.substring(1)) : {})[e]
        }, ge.isWechat = function () {
            return /micromessenger/i.test(navigator.userAgent)
        }, ge.memo = function (e, t) {
            return void 0 === t ? ve[e] : ve[e] = t
        }, ge.share = function () {
            l.a.isInNEMapp() ? m.a.onAppShare() : l.a.getClient() ? A() : alert("想分享给更多好友？复制上面的链接发给他们"), console.log("[SHARE] ", JSON.stringify(m.a.getShareData()))
        }, ge.getShareLink = function () {
            var e = {
                uid: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                full_screen: !0,
                keep_status_bar: !0,
                top_bar_bg_color: "f9f9f9",
                status_bar_type: "dark"
            };
            return e.uid || delete e.uid, ge.memo(W) && (e.userid = ge.memo(W)), e = g.a.stringify(e), "".concat(fe(), "/?").concat(e)
        }, ge.getShareChatLink = function () {
            var e = {
                msgto: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                lastwith: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                theme: 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                full_screen: !0,
                keep_status_bar: !0,
                top_bar_bg_color: "f9f9f9",
                status_bar_type: "dark"
            };
            return e.msgto || delete e.msgto, ge.memo(W) && (e.userid = ge.memo(W)), e = g.a.stringify(e), "".concat(fe(), "/sharechat.html?").concat(e)
        }, ge.wakeup = function () {
            var e = be.search ? g.a.parse(be.search.substring(1)) : {};
            e.full_screen = "true", e.source = "outside", delete e.refer;
            var t = g.a.stringify(e), n = ge.isOnline() ? "st.music.163.com" : "st.igame.163.com",
                o = "".concat(be.protocol, "//").concat(n).concat(be.pathname, "?").concat(t);
            b.a.wakeup({
                deepLink: "orpheus://openurl?url=".concat(encodeURIComponent(o)),
                storeLink: "https://music.163.com/m/download",
                guideCallback: R
            })
        }, ge.orpheus = (he = 10, de = [], ye = 0, function (e) {
            e && (de.push(e), function e() {
                ye || 0 !== de.length && (ye = setTimeout(function () {
                    be.href = de[0], de.splice(0, 1), ye = 0, e()
                }, he))
            }())
        }), ge.login = function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : be.href;
            l.a.isInNEMapp() ? ge.orpheus("orpheus://login?rurl=".concat(encodeURIComponent("/m/stat?redirect=".concat(encodeURIComponent(e))))) : be.href = ge.URL("/m/login?redirect_url=".concat(encodeURIComponent(e)))
        }, ge.randomString = function (e) {
            for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = 0; o < e; o++) t += n.charAt(Math.floor(Math.random() * n.length));
            return t
        }, ge.hideTopButton = function () {
            l.a.isInNEMapp() && setTimeout(function () {
                ge.orpheus("orpheus://settopbutton?show=false&playshow=false")
            }, 500)
        }, ge.stopAppMusic = function () {
            setTimeout(function () {
                l.a.isInNEMapp() && ge.orpheus("orpheus://stopplay")
            }, 300)
        }, ge.noop = function () {
        }, ge.getDateByTimezone = function (e, t) {
            void 0 === e && (e = new Date), "number" != typeof e && "string" != typeof e || (e = new Date(e)), void 0 === t && (t = 8);
            var n = e.getTimezoneOffset(), o = e.getTime();
            return new Date(o + 60 * n * 1e3 + 60 * t * 60 * 1e3)
        }, ge.isEmpty = function (e) {
            return !e || !e.length
        }, ge.timeObject = function (e) {
            var t = ge.getDateByTimezone(e);
            return t ? {
                year: t.getFullYear(),
                month: t.getMonth() + 1,
                day: t.getDate(),
                hour: t.getHours(),
                min: t.getMinutes(),
                sec: t.getSeconds()
            } : null
        }, ge.timeDelta = function (e) {
            if (!e || e < 0) return null;
            var t = (e = e / 1e3 | 0) % 60;
            return {hour: e / 3600 | 0, min: (e - t) / 60 % 60, sec: t}
        }, ge.simpleTrack2NormalTrack = function () {
            function n(e) {
                return e ? {
                    album: e.al,
                    alias: e.alia || e.ala || [],
                    artists: e.ar || [],
                    commentThreadId: "R_SO_4_".concat(e.id),
                    copyrightId: e.cp || 0,
                    duration: e.dt || 0,
                    id: e.id,
                    mvid: e.mv || 0,
                    name: e.name || "",
                    cd: e.cd,
                    position: e.no || 0,
                    ringtone: e.rt,
                    rtUrl: e.rtUrl,
                    status: e.st || 0,
                    pstatus: e.pst || 0,
                    fee: e.fee || 0,
                    version: e.v || 0,
                    eq: e.eq,
                    songType: e.t || 0,
                    mst: e.mst,
                    score: e.pop || 0,
                    ftype: e.ftype,
                    rtUrls: e.rtUrls,
                    transNames: e.tns,
                    privilege: e.privilege,
                    lyrics: e.lyrics,
                    publishTime: e.publishTime
                } : null
            }

            return function (e) {
                if (Array.isArray(e)) {
                    var t = [];
                    return e.forEach(function (e) {
                        t.push(n(e))
                    }), t
                }
                return n(e)
            }
        }();
        ge.resizeFullPage = function () {
            u()(".j-fullpage").forEach(function (e) {
                var t = e.parentNode.offsetWidth, n = e.parentNode.offsetHeight, o = t / 375, a = n / 667,
                    r = Math.max(o, a);
                u()(e).css({
                    webkitTransform: "scale(".concat(r, ")"),
                    transform: "scale(".concat(r, ")"),
                    top: "".concat((n - 667) / 2, "px"),
                    left: "".concat((t - 375) / 2, "px")
                })
            })
        };
        var we = document.querySelector("#j-root");

        function Ee(e) {
            e.preventDefault()
        }

        var Se = !1;
        ge.preventDefaultTouch = function () {
            Se || (Se = !0, we.addEventListener("touchmove", Ee, {passive: !1}))
        }, ge.enableDefaultTouch = function () {
            Se && (Se = !1, we.removeEventListener("touchmove", Ee, {passive: !1}))
        }, ge.isSupportFullscreen = function () {
            return l.a.isInNEMapp() && (l.a.isHigherVersion("5.6.0") || l.a.isEqualVersion("5.6.0")) && /\bfull_screen=true/.test(window.location.search)
        }, ge.closeWebview = function () {
            l.a.isInNEMapp() && ge.orpheus("orpheus://back")
        }, ge.mediaProtect = function () {
            l.a.isInNEMapp() && setTimeout(function () {
                ge.orpheus("orpheus://mediaPlayProtect?enable=true")
            }, 100)
        }, ge.imageCache = B.a.suffix({webp: !0}), ge.ellipsisText = function (e, t) {
            if (t <= 0 || !e) return "";
            for (var n = 0, o = [], a = [].slice.call(e), r = 0; r < a.length && n < t; ++r) n += ge.stringLength(a[r]), o.push(a[r]);
            return o.length < a.length && o.push("..."), o.join("")
        }, ge.throttle = function (r, i, c) {
            var s, e, u, l = null, f = 0;
            c || (c = {});
            var m = function () {
                f = !1 === c.leading ? 0 : (new Date).getTime(), l = null, u = r.apply(s, e), l || (e = s = null)
            };
            return function () {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var o = (new Date).getTime();
                f || !1 !== c.leading || (f = o);
                var a = i - (o - f);
                return s = this, a <= 0 || i < a ? (l && (clearTimeout(l), l = null), f = o, u = r.apply(s, t), l || (t = s = null)) : l || !1 === c.trailing || (l = setTimeout(m, a)), u
            }
        }, ge.group = function (e, t) {
            if (!Array.isArray(e) || 0 === e.length) return [];
            if (t <= 0) return e;
            for (var n = [], o = 0; o < e.length; o += t) n.push(e.slice(o, Math.min(e.length, o + t)));
            return n
        }, ge.dateDuration = function (e) {
            if (!e) return "";
            var t = (new Date - new Date(e)) / 1e3 / 60;
            switch (!!t) {
                case t < 1:
                    return "现在";
                case t < 60:
                    return "".concat(Math.floor(t), "分钟前");
                case t < 1440:
                    return "".concat(Math.floor(t / 60), "小时前");
                default:
                    return "".concat(Math.floor(t / 1440), "天前")
            }
        }, ge.chatRoomScrollBottom = ge.throttle(function () {
            var e = u()("#j-chatroom-scroll")[0];
            e && e.scroll(0, e.scrollHeight)
        }, 200), function () {
            function e() {
                var e = window.WeixinJSBridge;
                e.invoke("setFontSizeCallback", {fontSize: 0}), e.on("menu:setfont", function () {
                    e.invoke("setFontSizeCallback", {fontSize: 0})
                })
            }

            function t() {
                u()("#j-bgm")[0].play(), document.removeEventListener("WeixinJSBridgeReady", t), document.removeEventListener("YixinJSBridgeReady", t)
            }

            "object" === me(window.WeixinJSBridge) && "function" == typeof window.WeixinJSBridge.invoke ? e() : document.addEventListener ? (document.addEventListener("WeixinJSBridgeReady", e, !1), document.addEventListener("WeixinJSBridgeReady", t, !1), document.addEventListener("YixinJSBridgeReady", t, !1)) : document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", e), document.attachEvent("onWeixinJSBridgeReady", e), document.addEventListener("WeixinJSBridgeReady", t, !1), document.addEventListener("YixinJSBridgeReady", t, !1))
        }(), void 0 === window.bringBack && (window.bringBack = ge.noop);
        var Oe = ge, Ne = {}, _e = null;
        Ne.initWatchman = function () {
            window.initWatchman({
                productNumber: "YD00000558929251", onload: function (e) {
                    _e = e
                }
            })
        }, Ne.getMatchToken = function (e) {
            _e ? _e.getToken("5a09f92505794023af79d87f67926f3b", e) : e("")
        }, Ne.getMainSiteToken = function (e) {
            _e ? _e.getToken("bd5d2f973ef74cd2a61325a412ae54d9", e) : e("")
        };
        var ke, Te = Ne, je = h("ORHi"), Pe = h.n(je), Ce = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = Oe.URL(e),
                o = Object.assign(t, {});
            return o.noEnc = !!o.noEnc, o.method = o.method || "GET", o.credentials = o.credentials || "include", o.withCredentials = "include" === o.credentials, o.data && (/GET|HEAD/.test(o.method) || (o.headers = {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }, o.body = g.a.stringify(o.data))), o.query && (n = "".concat(n, "?").concat(g.a.stringify(o.query))), Pe()(n, o).then(function (e) {
                return o.raw ? e.text() : e.json().then(function (e) {
                    if (void 0 === e.code || 200 === e.code) return e;
                    throw e
                })
            }).catch(function (e) {
                throw window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                    url: n,
                    err: e
                })), e
            })
        }, Re = {1: "likecalc", 2: "likegenre", 3: "dualsex", 4: "unisex"}, De = {};
        De.getGender = function () {
            var n = Oe.memo(X);
            return n ? Promise.resolve(n) : new Promise(function (t) {
                Ce("/api/activity/summary/annual/2018/user/gender").then(function (e) {
                    e && 200 === e.code && e.data && e.data.gender ? (n = e.data.gender, Oe.memo(X, n), Oe.memo(te, 1 === n ? "male" : "female"), t(e.data.gender)) : t(null)
                }).catch(function () {
                    t(null)
                })
            })
        }, De.getMatchUser = function (e, t) {
            return Ce("/api/activity/summary/annual/2018/user/match", {
                data: {gender: e, forced: !1, checkToken: t},
                method: "GET"
            }).then(function (e) {
                var t = Re[e.data.matchType];
                return t && Oe.memo(ae, t), e
            })
        }, De.getMatchUserPoll = function (e) {
            var t = e.gender, n = e.forced;
            return Ce("/api/activity/summary/annual/2018/user/async/match", {
                data: {gender: t, forced: n},
                method: "GET"
            }).then(function (e) {
                var t = Re[e.data.matchType];
                return t && Oe.memo(ae, t), e
            })
        }, De.stopMatch = function (e) {
            return Ce("/api/activity/summary/annual/2018/match/stop", {data: {type: e}}).then(function (e) {
                return e
            }).catch(function () {
                return !0
            })
        }, De.getLoadingTips = (ke = null, function () {
            return ke ? Promise.resolve(ke) : Ce("/api/activity/summary/annual/2018/user/match/loading/documents").then(function (e) {
                return ke = e.data
            }).catch(function () {
                return {}
            })
        }), De.getOnlineCount = function () {
            return new Promise(function (t) {
                Ce("/api/activity/summary/annual/2018/user/match/online/count").then(function (e) {
                    t({onlineCount: e.data.onlineCount, totalCount: e.data.totalCount})
                }).catch(function () {
                    return t({onlineCount: 0, totalCount: 0})
                })
            })
        }, De.getMatchData = function (e, t) {
            return Ce("/api/activity/summary/annual/2018/match/data", {
                data: {targetUserId: e, songId: t},
                method: "GET"
            }).then(function (e) {
                return e.data
            })
        };
        var xe = De, Me = {}, Ue = window.localStorage, Ie = "STORAGE_USER_DATA", Le = "YEAR2018_LAST_CLEAR";
        Me.val = function (e, t) {
            try {
                return void 0 === t ? Ue.getItem(e) : Ue.setItem(e, t)
            } catch (e) {
                return null
            }
        }, Me.gc = function () {
            Me.val(Le) || (Ue.clear(), Me.val(Le, +new Date))
        };
        var Ae, He = Me, ze = window.location, qe = {
            lightmusic: "轻音乐",
            rapmusic: "说唱",
            metalmusic: "金属",
            acgmusic: "ACG",
            folkmusic: "民谣",
            electronicmusic: "电音",
            dancemusic: "舞曲",
            childmusic: "童谣",
            jazzmusic: "爵士",
            postrockmusic: "后摇",
            yueyumusic: "粤语",
            punkmusic: "朋克",
            latinkmusic: "拉丁",
            rnbmusic: "R&B",
            classicalmusic: "古典",
            gufengmusic: "古风"
        }, Be = {
            "喜欢": ["000", "001"],
            "世界": ["002", "003"],
            "心": ["004"],
            "永远": ["005", "006"],
            "宝贝": ["007", "008"],
            "亲爱": ["009", "010"],
            "时间": ["011", "012"],
            "记得": ["013", "014"],
            "快乐": ["015", "016"],
            "未来": ["017", "018"],
            "再见": ["019", "020"],
            "梦": ["021"],
            "生活": ["022", "023"],
            "朋友": ["024", "025"],
            "希望": ["026", "027"],
            "等待": ["028", "029"],
            "一生": ["030", "031"],
            "幸福": ["032", "033"],
            "遇见": ["034", "035"],
            "嗨": ["036"],
            "姑娘": ["037", "038"],
            "时光": ["039", "040"],
            "天空": ["041", "042"],
            "自由": ["043", "044"],
            "美丽": ["045", "046"],
            "想起": ["047", "048"],
            "人生": ["049", "050"],
            "改变": ["051", "052"],
            "唯一": ["053", "054"],
            "寻找": ["055", "056"],
            "愿": ["057"],
            "梦想": ["058", "059"],
            "吃": ["060"],
            "忘记": ["061", "062"],
            "青春": ["063", "064"],
            "美好": ["065", "066"],
            "依然": ["067", "068"],
            "明天": ["069", "070"],
            "岁月": ["071", "072"],
            "温柔": ["073", "074"],
            "吻": ["075"],
            "拥有": ["076", "077"],
            "少年": ["078", "079"],
            "美": ["080"],
            "飞": ["081"],
            "微笑": ["082", "083"],
            "勇敢": ["084", "085"],
            "想念": ["086", "087"],
            "值得": ["088", "089"],
            "温暖": ["090", "091"],
            "拥抱": ["092", "093"],
            "年轻": ["094", "095"],
            "回家": ["096", "097"],
            "永恒": ["098", "099"],
            "靠近": ["100", "101"],
            "阳光": ["102", "103"],
            "甜蜜": ["104", "105"],
            "完美": ["106", "107"],
            "天使": ["108", "109"],
            "奔跑": ["110", "111"],
            "长大": ["112", "113"],
            "远方": ["114", "115"],
            "相遇": ["116", "117"],
            "简单": ["118", "119"],
            "晚安": ["120", "121"],
            "开心": ["122", "123"],
            "幸运": ["124", "125"],
            "陪伴": ["126", "127"],
            "闪耀": ["128", "129"],
            "可爱": ["130", "131"],
            "遥远": ["132", "133"],
            "年华": ["134", "135"],
            "努力": ["136", "137"]
        };
        Oe.me = function () {
            return l.a.isInNEMapp() ? "你" : "TA"
        }, Oe.isChinese = function (e) {
            return /^[\u4e00-\u9fa5]+$/.test(e)
        }, Oe.getPlayCount = function (e) {
            return 1e8 <= e ? "".concat(Math.floor(e / 1e7) / 10, "亿") : 1e5 <= e ? "".concat(Math.floor(e / 1e3) / 10, "万") : e
        }, Oe.stringLength = (Ae = /[^\x00-\xfff]/g, function (e) {
            return "".concat(e || "").replace(Ae, "**").length
        }), Oe.getSubCount = function (e) {
            return 1e8 <= e ? "".concat(Math.floor(e / 1e7) / 10, "亿") : 1e7 <= e ? "".concat(Math.floor(e / 1e4), "万") : 1e4 <= e ? "".concat(Math.floor(e / 1e3) / 10, "万") : e
        };
        var We = null, Ge = function (e) {
            if (!e) return null;
            (We = e).st && "unknown" !== We.st && (We.st = qe[We.st.toLowerCase()] || "unknown"), 225 < We.rc && (We.rc = 225 + (We.rc - 225) % 75);
            var t = We.stp || [];
            return t.sort(function (e, t) {
                return t.pc - e.pc
            }), 10 < t.length && (t = t.slice(0, 10)), We.stp = t, We
        };

        function Fe() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
            return Ce(Oe.URL("/api/activity/summary/annual/2018/userdata"), {
                method: "get",
                data: {uid: e}
            }).then(function (e) {
                var t = e.data;
                if (Ge(t), We.uid) {
                    var n = Ie + We.uid, o = +new Date;
                    He.val(n, JSON.stringify({lastModified: o, userData: We}))
                }
                return We
            })
        }

        Oe.getUserData = function () {
            return We
        }, Oe.fetchUserData = function () {
            if (We) return Promise.resolve(We);
            var e = ze.search ? g.a.parse(ze.search.substring(1)) : {}, t = "";
            l.a.isInNEMapp() || (t = e.uid || ""), He.gc();
            var n = t || Oe.memo(G), o = Ie + n, a = +new Date;
            if (!n) return Fe();
            var r = He.val(o);
            try {
                r = JSON.parse(r)
            } catch (e) {
                r = null
            }
            return !r || 0 < a - r.lastModified || !r.userData || "true" === e.nocache ? (He.val(o, ""), Fe(n)) : (Ge(r.userData), Promise.resolve(We))
        }, Oe.me = function () {
            return l.a.isInNEMapp() ? "你" : "TA"
        }, Oe.canShowPage01 = function () {
            return We && Be[We.kw] && !Oe.isEmpty(We.lyr)
        }, Oe.canShowPage02 = function () {
            return We && 0 < We.psc
        }, Oe.canShowPage03 = function () {
            return We && 4 < We.rc && /\d{8}/.test(We.rsd)
        }, Oe.canShowPage04 = function () {
            var e = We ? 1e3 * We.mpt : 0;
            if (We && We.msn && We.man && 1514736e6 <= e && e < 1546271999e3) {
                var t = Oe.timeObject(e);
                return 22 <= t.hour || t.hour <= 4
            }
            return !1
        }, Oe.canShowPage05 = function () {
            return We && 5 < We.mdc
        }, Oe.canShowPage06 = function () {
            return We && We.mrsn && 10 <= We.mrspc
        }, Oe.canShowPage07 = function () {
            return We && We.mdsn && 15 < We.mdspc
        }, Oe.canShowPage08 = function () {
            return !(!We || !We.osn) && Oe.timeObject(We.ospb).year < 2e3
        }, Oe.canShowPage09 = function () {
            return We && We.fsan && We.fsn
        }, Oe.canShowPage10 = function () {
            return !1
        }, Oe.canShowPlaylist = function () {
            if (!We) return !1;
            var e = We, t = e.cpc, n = e.cppc, o = e.cpsc, a = e.cprc, r = e.cprpc, i = e.cprsc;
            return 0 < t && 1e4 < n && 0 < o && (a <= t || r <= 1e4 || i <= 0)
        }, Oe.canShowProgram = function () {
            if (!We) return !1;
            var e = We, t = e.cprc, n = e.cprpc, o = e.cprsc;
            return 0 < t && 1e4 < n && 0 < o && !Oe.canShowPlaylist()
        }, Oe.canShowPage11 = function () {
            return Oe.canShowPlaylist() || Oe.canShowProgram()
        }, Oe.canShowPage12 = function () {
            return We && We.aan && 0 < We.arpc && !Oe.isEmpty(We.arstp)
        }, Oe.canShowPage13 = function () {
            if (We && We.pst) {
                var e = Oe.timeDelta(We.pst);
                return e && (0 < e.hour || 0 < e.min)
            }
            return !1
        }, Oe.canShowPage14 = function () {
            return We && !Oe.isEmpty(We.stp)
        }, Oe.canShowPage15 = function () {
            if (We && We.rann) {
                var e = Oe.timeDelta(We.ratpc);
                return e && 0 < e.hour
            }
            return !1
        }, Oe.canShowPage16 = function () {
            return We && We.vd && We.vd < "20190101" && ("0" === We.vpt || "1" === We.vpt)
        }, Oe.canShowPage17 = function () {
            return We && 10 <= We.crlc
        }, Oe.hasUserData = function () {
            return !!We && (Oe.canShowPage01() || Oe.canShowPage02() || Oe.canShowPage03() || Oe.canShowPage04() || Oe.canShowPage05() || Oe.canShowPage06() || Oe.canShowPage07() || Oe.canShowPage08() || Oe.canShowPage09() || Oe.canShowPage10() || Oe.canShowPage11() || Oe.canShowPage12() || Oe.canShowPage13() || Oe.canShowPage14() || Oe.canShowPage15() || Oe.canShowPage16() || Oe.canShowPage17())
        };
        var Ve = Oe, Ye = {
            setViewed: function () {
                return Ve.memo(J) ? Promise.resolve(!0) : l.a.isInNEMapp() ? Ce("/api/activity/summary/annual/2018/review/set").then(function (e) {
                    e && 200 === e.code && !0 === e.data && Ve.memo(J, !0)
                }).catch(function () {
                }) : Promise.resolve(!1)
            }, getViewed: function () {
                return l.a.isInNEMapp() ? Ce("/api/activity/summary/annual/2018/review/get").then(function (e) {
                    var t = e.data || {};
                    return Ve.memo(Y, t.isReviewed), Ve.memo(G, t.uid), Ve.memo(ie, t.isReviewed ? 2 : 1), t.isReviewed
                }).catch(function () {
                    return !1
                }) : Promise.resolve(!1)
            }, createTopPlaylist: function (e) {
                return Ve.memo(Q) ? Promise.resolve(!0) : l.a.isInNEMapp() && Ve.memo(W) ? Ve.isEmpty(e) ? Promise.resolve(!1) : Ce("/api/activity/summary/annual/2018/playlist/create", {
                    method: "POST",
                    data: {sids: e.join(",")}
                }).then(function (e) {
                    return !(!e || 200 !== e.code || !0 !== e.data) && (Ve.memo(Q, !0), !0)
                }).catch(function () {
                    return !1
                }) : Promise.resolve(!1)
            }
        }, Je = Ye, Qe = h("0FX9"), Ke = h.n(Qe), Xe = h("ULts"), Ze = h.n(Xe), $e = (h("Ecko"), h("dyvk"), {
            common: [h("pdN1"), h("rLDq"), h("K3rD"), h("dYDG"), h("5vyc"), h("hnHO"), h("YvdO"), h("Irui"), h("T/mK"), h("INS3"), h("47JS"), h("tsfi"), h("VJkS"), h("FuHi"), h("4WOI"), h("VRVe")],
            cover: [h("TDJo"), h("8RZR"), h("1E3q"), h("72YD")],
            p01: [h("vn1I"), h("sC++"), h("bnSU"), h("gm9a")],
            p02: [h("Sedh"), h("6gHW"), h("/P7Y"), h("T+TW"), h("XLsk")],
            chat: [h("2wDU"), h("ho3F"), h("3IA8"), h("H45Z"), h("jJhB"), h("HS1D"), h("QB1s"), h("jZcQ"), h("BfhL"), h("yH2k"), h("wKCG"), h("CAMv"), h("QA6n"), h("Ny8A"), h("iXIo"), h("/NeI"), h("IkjW"), h("q2Lj")]
        }), et = {
            show: function () {
                u()("#j-preloader").removeClass("z-hide")
            }, hide: function () {
                u()("#j-progress").html(""), u()("#j-preloader").addClass("z-hide")
            }, preload: function (o) {
                return 1 < arguments.length && void 0 !== arguments[1] && arguments[1] && et.show(), new Promise(function (e) {
                    if (!o || o.length <= 0) return e(), "";
                    var t = new Ze.a, n = setTimeout(function () {
                        e()
                    }, 1e4);
                    return o.forEach(function (e) {
                        t.addImage(e)
                    }), t.addProgressListener(function (e) {
                        var t = e.completedCount, n = e.totalCount;
                        u()("#j-progress").html("".concat(t / n * 100 | 0, "%"))
                    }), t.addCompletionListener(function () {
                        n = clearTimeout(n), e()
                    }), t.start(), ""
                })
            }
        }, tt = et;
        h("BSiH");

        function nt(e) {
            return (nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ot(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function at(e, t) {
            return !t || "object" !== nt(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function rt(e) {
            return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function it(e, t) {
            return (it = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var ct = function (e) {
                function t() {
                    var e;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), (e = at(this, rt(t).call(this))).state = {qrcodeURL: h("lAQi"), title: ""}, e
                }

                var n, o, a;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && it(e, t)
                }(t, s["Component"]), n = t, (o = [{
                    key: "componentDidMount", value: function () {
                        var o = this;
                        this.getQRCodeURL().then(function (e) {
                            var t = e.url, n = e.link;
                            o.setState({qrcodeURL: t, title: n})
                        }), tt.hide()
                    }
                }, {
                    key: "getQRCodeURL", value: function () {
                        var a = Ve.getShareLink();
                        return new Promise(function (n, o) {
                            Ke.a.toDataURL(a, {
                                margin: 0,
                                errorCorrectionLevel: "Q",
                                width: 200,
                                height: 200
                            }, function (e, t) {
                                e ? o(e) : n({url: t, link: a})
                            })
                        })
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.state, t = e.qrcodeURL, n = e.title;
                        return C.a.createElement("div", {className: "m-web"}, C.a.createElement("img", {
                            src: h("HcEM"),
                            className: "pic"
                        }), C.a.createElement("img", {src: t, title: n, className: "qrcode"}))
                    }
                }]) && ot(n.prototype, o), a && ot(n, a), t
            }(), st = h("yfwS"), ut = h.n(st), lt = "SHOW_TOOLBAR", ft = "HIDE_QR", mt = "QR_DARK", pt = "QR_LIGHT",
            ht = "HIDE_CHAT", dt = "SHOW_CHAT", yt = "SHOW_MATCH_LOADING", bt = "HIDE_MATCH_LOADING",
            vt = "ASYNC_MATCH", gt = "SHOW_REPORT", wt = "HIDE_REPORT", Et = "SHOW_PRE_CHAT", St = "HIDE_PRE_CHAT",
            Ot = "SHOW_CHAT_ROOM", Nt = "HIDE_CHAT_ROOM", _t = "CLICK_FRIEND", kt = "MATCH_SUCCESS", Tt = "MATCH_ERROR",
            jt = "FROM_REPORT", Pt = "FROM_PRE_CHAT", Ct = "FROM_CHAT_ROOM", Rt = "MSG_UPDATE", Dt = "GET_CHAT_DATA",
            xt = "MSG_SEND", Mt = "MSG_CLEAR", Ut = "MSG_BLACK", It = "MSG_FAIL", Lt = "MSG_DONE", At = "MSG_HISTORY",
            Ht = "CHAT_OVER", zt = "ROBOT_SHOW", qt = "ROBOT_DONE", Bt = "MSG_CUSTOM", Wt = "SYSMSG_SEND",
            Gt = "SYSMSG_UPDATE", Ft = "MSG_CHOOSE", Vt = "MSG_TOAST", Yt = "MSG_USERIN", Jt = "CHAT_TARGET_QUIT",
            Qt = "CHAT_TARGET_IN", Kt = "ROBOT_INTERACT_INIT", Xt = "ADD_FRIEND", Zt = "SHOW_2ND_COUNTDOWN",
            $t = "OPEN_CHAT_ROOM", en = "CHANGE_INPUT_STATUS";

        function tn() {
        }

        ut()(tn.prototype);
        var nn = new tn;

        function on(e) {
            return (on = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function an(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function rn(e) {
            return (rn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function cn(e, t) {
            return (cn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function sn(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var un = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = rn(o).call(this)) || "object" !== on(n) && "function" != typeof n ? sn(t) : n).state = {}, e.TRANS_OUT_TIME = 300, e.commonEvents = {
                    from: "",
                    show: "",
                    hide: ""
                }, e.show = e.show.bind(sn(sn(e))), e.hide = e.hide.bind(sn(sn(e))), e.onMatchError = e.onMatchError.bind(sn(sn(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && cn(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    var e = this.commonEvents || {};
                    e.show && nn.on(e.show, this.show), e.hide && nn.on(e.hide, this.hide), nn.on(Tt, this.onMatchError)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    var e = this.commonEvents || {};
                    e.show && nn.off(e.show, this.show), e.hide && nn.off(e.hide, this.hide), nn.off(Tt, this.onMatchError)
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    if (this.container) {
                        var e = u()(this.container);
                        this.props.initShow && e.addClass("z-modshow");
                        var t = this.state.transitionIn;
                        void 0 !== t && (t ? e.removeClass("z-modhide").addClass("z-modshow") : (e.removeClass("z-modshow").addClass("z-modhide"), setTimeout(function () {
                            e.removeClass("z-modehide")
                        }, this.TRANS_OUT_TIME)))
                    }
                }
            }, {
                key: "createEl", value: function () {
                    throw new Error("未实现")
                }
            }, {
                key: "onMatchError", value: function (e) {
                    e.from === (this.commonEvents || {}).from && this.show()
                }
            }, {
                key: "hide", value: function () {
                    this.setState({transitionIn: !1})
                }
            }, {
                key: "show", value: function () {
                    this.setState({transitionIn: !0})
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.initShow, t = this.state.transitionIn;
                    return e || void 0 !== t ? this.createEl() : null
                }
            }]) && an(t.prototype, n), a && an(t, a), o
        }();
        un.propTypes = {initShow: S.a.bool}, un.defaultProps = {initShow: !1};
        h("kwsH");

        function ln(e) {
            return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function fn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function mn(e, t) {
            return !t || "object" !== ln(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function pn(e) {
            return (pn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function hn(e, t) {
            return (hn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function dn() {
            Ve.closeWebview()
        }

        function yn() {
            Ve.share()
        }

        var bn = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = mn(this, pn(t).call(this))).state = {
                    isShow: !1,
                    isSupportFullscreen: Ve.isSupportFullscreen()
                }, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && hn(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    nn.on(lt, function () {
                        setTimeout(function () {
                            e.setState({isShow: !0})
                        }, 10)
                    }), nn.on("HIDE_TOOLBAR", function () {
                        setTimeout(function () {
                            e.setState({isShow: !1})
                        }, 10)
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this.state, t = e.isShow, n = e.isSupportFullscreen;
                    return l.a.isInNEMapp() && t && n ? C.a.createElement("div", {className: "m-reporttoolbar f-bd"}, C.a.createElement("h3", null, "年度听歌报告"), C.a.createElement("div", {className: "tool-action f-bd"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "share",
                        onClick: yn
                    }), C.a.createElement("span", {className: "line"}), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "close",
                        onClick: dn
                    }))) : null
                }
            }]) && fn(n.prototype, o), a && fn(n, a), t
        }();
        h("PYKw");

        function vn(e) {
            return (vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function gn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function wn(e, t) {
            return !t || "object" !== vn(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function En(e) {
            return (En = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Sn(e, t) {
            return (Sn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var On = window.location;

        function Nn() {
            On.reload()
        }

        var _n = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), wn(this, En(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Sn(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    setTimeout(function () {
                        nn.emit(lt)
                    }, 10), Oe.memo($, "p18"), Oe.biLogPage("p18")
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.errorText;
                    return C.a.createElement("div", null, C.a.createElement("div", {className: "m-page m-page-error f-page z-enter"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "gear"}), C.a.createElement("div", {className: "content"}, C.a.createElement("p", {className: "tip"}, e), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "button",
                        onClick: Nn
                    }, "点击重试"))), C.a.createElement(bn, null))
                }
            }]) && gn(n.prototype, o), a && gn(n, a), t
        }();
        _n.defaultProps = {errorText: "抱歉，当前参与人数过多，请稍后再试"}, _n.propTypes = {errorText: S.a.string};
        var kn = ["//m8.music.126.net/20281225173104/c829a19335e57a6ca3a8157bf8b07df6/ymusic/annual2018/v1/male1.mp3", "//m8.music.126.net/20281225173100/739fb14a3932aef798b6f311ca75d6c9/ymusic/annual2018/v1/male2.mp3", "//m8.music.126.net/20281225173102/54adacfeac99f64eb9fae022ae5d3158/ymusic/annual2018/v1/male3.mp3", "//m8.music.126.net/20281225173104/deec15fafb9bcc38619de23f7934285c/ymusic/annual2018/v1/male4.mp3"],
            Tn = ["//m8.music.126.net/20281225173059/af4a870da56465ce3a25f770b12bca61/ymusic/annual2018/v1/female1.mp3", "//m8.music.126.net/20281225173058/e389fa281b17d5e85af8f9ad3eb7b0be/ymusic/annual2018/v1/female2.mp3", "//m8.music.126.net/20281225173057/a52c9aabb90ddfe926971ef81dece59b/ymusic/annual2018/v1/female3.mp3", "//m8.music.126.net/20281225173100/6b1f7a9a768104b35c0e0f8fd4130070/ymusic/annual2018/v1/female4.mp3"],
            jn = {
                base: [{
                    name: "Lovesong",
                    url: "http://m8.music.126.net/20191226192336/96fe8a393889747668825ceb1f24fb8f/ymusic/8b69/1b9c/d016/a7b2a8e80c6bab9a5eccd615e8f459d7.mp3"
                }, {
                    name: "Gotta Have You",
                    url: "http://m8.music.126.net/20191226192336/1e3d6109391f997afc8a61cdbe4f56a1/ymusic/5a7d/70d2/733e/1b2873e2d76246dadae622a56c99c3f9.mp3"
                }, {
                    name: "Scarborough Fair",
                    url: "http://m8.music.126.net/20191226192336/eed7723d8452cf8eeeb2a1b5270fe0a1/ymusic/334f/ccaf/f674/232d715aa74c7bd4e96c5978e88abadf.mp3"
                }, {
                    name: "Everytime",
                    url: "http://m8.music.126.net/20191226192336/127658d1d6215fa9ba8bfd87629ab67c/ymusic/742e/7c28/a3df/fe41cb20eba0c5e6f2d30c103bcb8346.mp3"
                }, {
                    name: "我喜欢上你时的内心活动",
                    url: "http://m8.music.126.net/20191226192336/6165f83d716ef98d17117fd254fd25c1/ymusic/b83f/631f/0bb5/dbd2764e8f27cfced44b5b84d5a4df5c.mp3"
                }, {
                    name: "Let Me Know",
                    url: "http://m8.music.126.net/20191226192336/b45edd9f430ea25b31323e4c46cf18d1/ymusic/cef6/38b0/9931/46f68ea78bdbad163c81c3e36a4df08f.mp3"
                }, {
                    name: "The Rose",
                    url: "http://m8.music.126.net/20191226192336/02d0af5e99afed4ecae5f0fc6ab9d203/ymusic/0c4b/f38e/64bb/a07014eba60045ef23443be1e3570ce9.mp3"
                }, {
                    name: "Make You Feel My Love",
                    url: "http://m8.music.126.net/20191226192336/6ac219ab006ae7ec0883bc16c10a5e8c/ymusic/ce67/af4e/4308/87dbe2eff3484b5666acef51bc18c405.mp3"
                }, {
                    name: "As Long as You Love Me",
                    url: "http://m8.music.126.net/20191226192336/d92bc9276fd3a64e96d3b652a5769364/ymusic/43e4/01a5/181f/e7a521a256062a0c1702b6121fc7d362.mp3"
                }, {
                    name: "Torna A Surriento",
                    url: "http://m8.music.126.net/20191226192336/1ddcf7d58e3c352a30ba4c4f499a747d/ymusic/e864/0f4b/8e05/929fc7e29b3e300fb1e75d2158ce2a59.mp3"
                }, {
                    name: "桜・咲くころ",
                    url: "http://m8.music.126.net/20191226192336/a249d87d5ea4e81677202aa38a589eae/ymusic/fcab/dd8d/a79b/03f3431c4da5e1583eac2c9a3ac21957.mp3"
                }, {
                    name: "Love You Like A Love Song",
                    url: "http://m8.music.126.net/20191226192336/efde696a7fec7d723a0819c56dee1d95/ymusic/4544/d96b/7973/b1f7c4cdb658ff3e0fdd92bba587edeb.mp3"
                }, {
                    name: "Hey Jude",
                    url: "http://m8.music.126.net/20191226192336/1d72690fd1dd2c27b7dd8b75ff72e6ad/ymusic/926e/bf9c/43fe/7778fac9cc318988a6d15b6aaa5e4787.mp3"
                }, {
                    name: "Love Yourself",
                    url: "http://m8.music.126.net/20191226192336/4e3dc498d3a9bf88dd6ffac758c529f8/ymusic/9c9f/15fa/51b4/aa935f7b9829ce1e0b8b0bd4eabfba50.mp3"
                }, {
                    name: "Everything I Need",
                    url: "http://m8.music.126.net/20191226192336/e5f09a156b58e8dff8e2c47427ebf4ff/ymusic/5252/000c/545a/e80b1d6f467f6ed6b16dc08230d50154.mp3"
                }, {
                    name: "Chasing All the Stars",
                    url: "http://m8.music.126.net/20191226192336/0dce8146ebae804c12407e9c21432d70/ymusic/07c7/c9a9/a5ea/b3ef900bd1e9504a1f7807abcaeb4eb8.mp3"
                }, {
                    name: "小幸运",
                    url: "http://m8.music.126.net/20191226192336/972687cca8db97d315c372c5d5a5f01a/ymusic/bc6c/30dc/8605/ccc2b44ae52058a8b47c76a05a7a2e9a.mp3"
                }, {
                    name: "Don‘t Keep Me Waiting",
                    url: "http://m8.music.126.net/20191226192336/94ccbe79fb4a99f459bec7634b59e814/ymusic/6491/feee/b18d/58bdf42371506fc4c72cffa55eb17f1c.mp3"
                }, {
                    name: "行星",
                    url: "http://m8.music.126.net/20191226192336/35c8296195d097ba4349e8d024b851c7/ymusic/41a4/9517/dfea/80357c5fa1df3799f770fb1fb4ce604d.mp3"
                }, {
                    name: "红豆",
                    url: "http://m8.music.126.net/20191226192336/b184097f965cc0e50b7646447e011e9d/ymusic/e3d8/7972/8c74/1e2ab2b9735ed438f747b34c7c852448.mp3"
                }, {
                    name: "Landing Guy",
                    url: "http://m8.music.126.net/20191226192336/c6801470b190a6ecb02e51f04ee85f6b/ymusic/c0f6/d87b/7047/dac645b0ce76cd35534d4aa2c8add2c4.mp3"
                }, {
                    name: "今夜も星に抱かれて…",
                    url: "http://m8.music.126.net/20191226192336/e5b7a6e6774864396ac3dff5699ac77c/ymusic/e15a/5aa9/3785/6c2d25b66f3c04049d4feb042ca04c94.mp3"
                }, {
                    name: "Can’t Help Falling in Love",
                    url: "http://m8.music.126.net/20191226192336/404bf8298aef5ac92d10d69a45cc1318/ymusic/a924/9982/71ba/2a5a559caf3d518d10304051bcb8cdd6.mp3"
                }, {
                    name: "What You May Find",
                    url: "http://m8.music.126.net/20191226192336/c313c3848d84e67bbd88647f6ebfb309/ymusic/514f/36ce/82a6/16d4721ff449dc2667cf37fe61f679b1.mp3"
                }, {
                    name: "花屋敷",
                    url: "http://m8.music.126.net/20191226192336/a697f3dbd7388279fc3ed1f125437272/ymusic/ff5c/3dcb/1d02/72e6917b4eb79f46d3177786abcc38a1.mp3"
                }, {
                    name: "遇见",
                    url: "http://m8.music.126.net/20191226192336/db51b7ba0caf7fe0bf2c411756afa92f/ymusic/b88f/9a76/ba3a/36ff506c53f5dfd9b67df887bceecfa2.mp3"
                }, {
                    name: "All Of Me",
                    url: "http://m8.music.126.net/20191226192336/f571c31c6bae10b84f6f597fb59167be/ymusic/1dfc/17fc/4561/6e892774d1ea52855c47e42208f5d94f.mp3"
                }, {
                    name: "Stay With Me",
                    url: "http://m8.music.126.net/20191226192336/27da72f3c5635c559418950f03113c3f/ymusic/0217/b7e0/8593/c18657168611da8e76af41df09205104.mp3"
                }, {
                    name: "To The Lost and Forgotten",
                    url: "http://m8.music.126.net/20191226192336/679472194a2979df7ac0549e02c8c5e7/ymusic/31ab/c26f/c7ea/290fdfb363208552689a34a55a3876c4.mp3"
                }],
                ballad: [{
                    name: "揪心的玩笑与漫长的白日梦",
                    url: "http://m8.music.126.net/20191226194545/070e3801dab1b0bf2c3218a6ede410fe/ymusic/f853/527b/8492/b5d241e80375a696517dacf5ec11cae7.mp3"
                }, {
                    name: "我说今晚月光那么美,你说是的",
                    url: "http://m8.music.126.net/20191226194545/e918045f72a3c083877170197cd84488/ymusic/168a/736d/f541/f26ee201916132c0ff8e2451636d49aa.mp3"
                }, {
                    name: "美好事物",
                    url: "http://m8.music.126.net/20191226194545/c56c9940a60c6e610540fa55fe2d5d8a/ymusic/f539/1cac/377a/3534c5f83cd42ad2a8c17c17be1364c9.mp3"
                }, {
                    name: "白兰鸽巡游记",
                    url: "http://m8.music.126.net/20191226194545/a4257ec2879564f43a2da19717fb60f4/ymusic/b2c1/e84e/f14e/d288a4ad009c048b3acecba1e0c32073.mp3"
                }, {
                    name: "认真地老去",
                    url: "http://m8.music.126.net/20191226194545/229f21035a196916a40c9ae2188b2a8c/ymusic/101a/d47e/66c0/2ad01c8866871fff0b80d373ad0631ae.mp3"
                }, {
                    name: "儿时",
                    url: "http://m8.music.126.net/20191226194545/f9983053c58231a1da172dc163f9bb7d/ymusic/f576/d3c0/e51f/e6870cb067d9edb64e33a40a938f8f37.mp3"
                }, {
                    name: "鱼书",
                    url: "http://m8.music.126.net/20191226194545/186ffe4766ed8c53de78faa80960f6ac/ymusic/e6bd/968c/d5c5/3827dd876a2dacce4726a9e0745d8434.mp3"
                }, {
                    name: "自拔",
                    url: "http://m8.music.126.net/20191226194545/913a0d9bcbb519e682fdec227cb8e225/ymusic/d560/6a3b/b4ab/3137732d9e370607bdaf5d1238a82f31.mp3"
                }, {
                    name: "往后余生",
                    url: "http://m8.music.126.net/20191226194545/4e69f7b1b3b0008b441bdf0e31cb3713/ymusic/3100/ee55/63a0/cabf1202833584a184c654785799565d.mp3"
                }, {
                    name: "And I Love You So",
                    url: "http://m8.music.126.net/20191226194545/e597fe84fbf81dda50a9beaa1ba39280/ymusic/620d/9de0/95b4/fb35d2f4ca82195dc552b905ca9951a8.mp3"
                }, {
                    name: "New Soul",
                    url: "http://m8.music.126.net/20191226194545/156fc0e15d96ca77f9b49c5e4d851b25/ymusic/df45/edbd/6581/0c3c5f1e87c3220e421c812827eb0f37.mp3"
                }, {
                    name: "Romeo‘s Tune",
                    url: "http://m8.music.126.net/20191226194545/e7a7a12a9d1eba68cca79b6370160258/ymusic/c3e1/fe47/091b/a13b943cd66c89a0128041098a3bc9e5.mp3"
                }, {
                    name: "Say Hello",
                    url: "http://m8.music.126.net/20191226194545/ea9b654a6bdcd48fb5d15e0d2cc93837/ymusic/b643/5bb8/c2fb/43ee5e3bfa73b10baa4a76568a56de6d.mp3"
                }, {
                    name: "春风十里",
                    url: "http://m8.music.126.net/20191226194545/6ddbe97b89d2969f1895f7ec631d3a3a/ymusic/9f7c/6801/744b/e96b3804c7f62c0e8b2a0737b4b3b80f.mp3"
                }, {
                    name: "Peach Tree",
                    url: "http://m8.music.126.net/20191226194545/8ac16821a7b3bc3cbfe75b26611cca87/ymusic/d5f1/3707/be41/618acfd9a5b2561e17c22a6c649ef9e4.mp3"
                }, {
                    name: "Gotta Have You",
                    url: "http://m8.music.126.net/20191226194545/4d4c8f052a8282f55056822e66dc4c86/ymusic/5a7d/70d2/733e/1b2873e2d76246dadae622a56c99c3f9.mp3"
                }, {
                    name: "Happy Together",
                    url: "http://m8.music.126.net/20191226194545/4086715a19047f6fb97a014bb7a4ea9d/ymusic/366b/2c6b/5311/c1aae5608efb49ded7d517ea53205589.mp3"
                }, {
                    name: "Loving Strangers",
                    url: "http://m8.music.126.net/20191226194545/a50a8c41d298dcea7db846fe7c350eb3/ymusic/64fd/8736/b92e/5eb7f6aa00c4699717c25bd442bb9e70.mp3"
                }],
                electro: [{
                    name: "Closer (R3hab Remix)",
                    url: "http://m8.music.126.net/20191226192605/397889872e31ca117e0ddb3cf199af3b/ymusic/0192/d9d3/97ad/276f563f1bea21a462f4b4df8d61235c.mp3"
                }, {
                    name: "High On Life ",
                    url: "http://m8.music.126.net/20191226192605/6f8b61b58b561339bd23b2bd364ab326/ymusic/8ced/b468/a5af/a01d5fc3afc69312fe354c7ecd932026.mp3"
                }, {
                    name: "Stay",
                    url: "http://m8.music.126.net/20191226192605/1b24fe715146ca793cece6ad1aa904e6/ymusic/41c7/1813/c478/8e5317b479fcc5f9ef2622217bf9efcd.mp3"
                }, {
                    name: "Wake Me Up",
                    url: "http://m8.music.126.net/20191226192605/5d90649893af1eaa0948e3913947841e/ymusic/95fc/f4ca/1b05/683e47768294f45ad327a3ab061c0a37.mp3"
                }, {
                    name: "Darkside",
                    url: "http://m8.music.126.net/20191226192605/cfb0a911009e9ca6b0d053f859c7d753/ymusic/d900/fb5c/2c57/81c83f834e7607ff0d11c22b5d3eaa5a.mp3"
                }, {
                    name: "My Way",
                    url: "http://m8.music.126.net/20191226192605/fc4e46c987c9abad50fc6e9cdb847827/ymusic/bc86/fb97/36ad/186f8835e8396c17dc92d13e20fc78ef.mp3"
                }, {
                    name: "Roses",
                    url: "http://m8.music.126.net/20191226192605/79f41378033220226dea4229e63f1bf3/ymusic/a82e/0bdd/2517/e2d1debb628c166bd81db6100c24f07e.mp3"
                }, {
                    name: "Future ❤ Love",
                    url: "http://m8.music.126.net/20191226192605/2608482a3fde6c5f390e1fb27e841494/ymusic/6a65/46c6/8cd0/23a26d3377fb05a7c149c6d4db9dd104.mp3"
                }, {
                    name: "Nevada (feat. Cozi Zuehlsdorff)",
                    url: "http://m8.music.126.net/20191226192605/fc847fcc0a80b5f340729ea5c80a0620/ymusic/5ad3/d057/f099/ed1f306dbc5058abe0e5f1fb8c53f5fb.mp3"
                }, {
                    name: "Faking",
                    url: "http://m8.music.126.net/20191226192605/58e8865c8c2efb028aaa40488ac56af2/ymusic/5259/510c/0059/e38e0ddb18ff383ab4e873d7aaa0361a.mp3"
                }, {
                    name: "Christine",
                    url: "http://m8.music.126.net/20191226192605/ca2ac792b06cefb53375f4db4c7bff97/ymusic/28e3/7869/e140/c4b684917b752e850c52caf16db324e7.mp3"
                }],
                national: [{
                    name: "眉心妆",
                    url: "http://m8.music.126.net/20191226192510/6474878d36870c58d2927e7fa5997b58/ymusic/2095/3463/92ce/4a15b4bab37d3a81a957323ac7d4b3c0.mp3"
                }, {
                    name: "半壶纱",
                    url: "http://m8.music.126.net/20191226192510/6d5e1a57f6b1da0b6a77a1b20318a97c/ymusic/3f33/d603/b3c7/76bd7ae6901e2ccf14e24fb5bc48d538.mp3"
                }, {
                    name: "但愿人长久",
                    url: "http://m8.music.126.net/20191226192510/60a3f2084c9efe303d0e8114915a1ad1/ymusic/0832/cff8/1a7d/e2c6d1f9c85da97aa007bd3064a1e9a8.mp3"
                }, {
                    name: "幽兰操",
                    url: "http://m8.music.126.net/20191226192510/68754355f12997fce6afc72089531989/ymusic/7636/3b2b/e0ce/40527f515445f390f30b020c493adb23.mp3"
                }, {
                    name: "清平调 (独唱版)",
                    url: "http://m8.music.126.net/20191226192510/473b9007be50f3c56e64a398eb9c1d46/ymusic/e56b/c8ab/b5bd/d0a89ccbb0b6d18dc727e749c48e40bd.mp3"
                }, {
                    name: "大鱼",
                    url: "http://m8.music.126.net/20191226192510/056f72933957b36336466265a932b72c/ymusic/97c3/d51e/0c07/93d8505d1fd24410ef0f46dbc2e2cc89.mp3"
                }, {
                    name: "江上清风游",
                    url: "http://m8.music.126.net/20191226192510/1352949d66a81b6f4ae167b583dc8ca6/ymusic/e1c1/c78f/2c3f/d753353be2c9969ea700cc47c9bb9533.mp3"
                }, {
                    name: "春风十里",
                    url: "http://m8.music.126.net/20191226192510/7f9b6d3201bd729507f32c1861ef8fc6/ymusic/9f7c/6801/744b/e96b3804c7f62c0e8b2a0737b4b3b80f.mp3"
                }, {
                    name: "江南",
                    url: "http://m8.music.126.net/20191226192510/d92d47fbc17da319770fd9540f227316/ymusic/1e8f/7c78/659d/1710815548b9f8520a4e64dd3a2c1cd3.mp3"
                }, {
                    name: "牵丝戏",
                    url: "http://m8.music.126.net/20191226192510/d0b87b6afd1811567409b1a568a47537/ymusic/669a/f889/ad4f/0ed49b2d769282256430a7f7f76b5711.mp3"
                }, {
                    name: "流云",
                    url: "http://m8.music.126.net/20191226192510/0b70fa001fd77c05bbef80ea7593eb1a/ymusic/4645/b479/f7a9/caeb49844b1ca28c43961dbb8970f878.mp3"
                }, {
                    name: "倾尽天下",
                    url: "http://m8.music.126.net/20191226192510/2b3a09767700fb2798acb4f0d4919e54/ymusic/0f37/a3e2/103e/502f310683a84d91d810357aa4a5b672.mp3"
                }]
            };

        function Pn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        var Cn = window.AudioContext || window.webkitAudioContext;
        var Rn = function () {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), ut()(this), this.url = e, this.onPlay = this.onPlay.bind(this), this.onLoadedMetaData = this.onLoadedMetaData.bind(this)
                }

                var e, n, o;
                return e = t, (n = [{
                    key: "setup", value: function () {
                        this.isSetup || (this.isSetup = !0, this.player = document.createElement("audio"), this.player.crossOrigin = "anonymous", this.player.addEventListener("play", this.onPlay), this.player.addEventListener("loadedmetadata", this.onLoadedMetaData), document.body.appendChild(this.player), this.audio = document.createElement("audio"), this.audio.crossOrigin = "anonymous", this.audio.addEventListener("play", this.onPlay), this.context = new Cn, this.analyser = this.context.createAnalyser(), this.analyser.fftSize = 512, this.source = this.context.createMediaElementSource(this.audio), this.source.connect(this.analyser))
                    }
                }, {
                    key: "onPlay", value: function () {
                        this.audio.currentTime = 0, this.player.currentTime = 0
                    }
                }, {
                    key: "onLoadedMetaData", value: function () {
                        this.emit("loadedmetadata", this.player)
                    }
                }, {
                    key: "dispose", value: function () {
                        this.isPlaying = !1, this.isSetup = !1, this.player && (this.player.pause(), this.player.removeEventListener("play", this.onPlay), this.player.removeEventListener("loadedmetadata", this.onLoadedMetaData), document.body.removeChild(this.player)), this.audio && (this.audio.pause(), this.audio.removeEventListener("play", this.onPlay), this.source.disconnect(this.analyser))
                    }
                }, {
                    key: "play", value: function (e, t) {
                        this.isPlaying || (this.isPlaying = !0, this.setup(), this.player.autoplay = !0, this.audio.autoplay = !0, this.changeSrc(e, t))
                    }
                }, {
                    key: "changeSrc", value: function (e, t) {
                        if (e && (this.url = e), this.loop = void 0 === t || t, !this.player) return this.play(this.url, t);
                        this.player.loop = this.loop, this.audio.loop = this.loop, this.player.src = this.url, this.audio.src = this.url, this.player.play(), this.audio.play()
                    }
                }, {
                    key: "pause", value: function () {
                        this.player && this.player.pause(), this.audio && this.audio.pause()
                    }
                }, {
                    key: "getFrequencyData", value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 30;
                        if (this.analyser) {
                            var t = new Uint8Array(this.analyser.frequencyBinCount);
                            return this.analyser.getByteFrequencyData(t), function (e, t) {
                                if (t >= e.length) return e;
                                for (var n = [], o = parseInt(e.length / t, 10), a = 0; a < e.length; a += o) {
                                    for (var r = 0, i = 0; i < o && a + i < e.length; i++) r += e[a + i];
                                    n.push(parseInt(r / o, 10))
                                }
                                return n
                            }(t, e)
                        }
                        return new Uint8Array(e)
                    }
                }]) && Pn(e.prototype, n), o && Pn(e, o), t
            }(), Dn = (h("nmsm"), "@toast/loading/show"), xn = "@toast/loading/hide", Mn = "@toast/confirm/show",
            Un = "@toast/alert/show", In = "@toast/notice/show", Ln = "@toast/clear", An = "@toast/ok/show",
            Hn = "@toast/fail/show", zn = ["确定", "取消"];

        function qn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        var Bn = new (function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.registry = {}
            }

            var t, n, o;
            return t = e, (n = [{
                key: "on", value: function (e, t) {
                    void 0 === this.registry[e] && (this.registry[e] = []), this.registry[e].push(t)
                }
            }, {
                key: "off", value: function (e, t) {
                    if (void 0 !== this.registry[e]) for (var n = this.registry[e], o = n.length; o--;) n[o] === t && n.splice(o, 1)
                }
            }, {
                key: "clearAllEvents", value: function () {
                    this.registry = {}
                }
            }, {
                key: "emit", value: function (e, t) {
                    if (void 0 !== this.registry[e]) for (var n = this.registry[e], o = 0, a = n.length; o < a; o++) n[o].call(null, t)
                }
            }]) && qn(t.prototype, n), o && qn(t, o), e
        }()), Wn = {
            loading: function () {
                return Bn.emit(Dn)
            }, loaded: function () {
                return Bn.emit(xn)
            }, confirm: function (e) {
                return Bn.emit(Mn, e)
            }, alert: function (e) {
                return Bn.emit(Un, e)
            }, notify: function (e, t) {
                return Bn.emit(In, [e, t])
            }, clear: function () {
                return Bn.emit(Ln)
            }, ok: function (e, t) {
                return Bn.emit(An, [e, t])
            }, fail: function (e, t) {
                return Bn.emit(Hn, [e, t])
            }
        };

        function Gn(e) {
            return (Gn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Fn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Vn(e, t) {
            return !t || "object" !== Gn(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Yn(e) {
            return (Yn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Jn(e, t) {
            return (Jn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Qn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Kn = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Vn(this, Yn(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Jn(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "render", value: function () {
                    return C.a.createElement("div", null, C.a.createElement("div", {className: "preloader-indicator-overlay"}), C.a.createElement("div", {className: "preloader-indicator-modal"}, C.a.createElement("span", {className: "preloader preloader-white"})))
                }
            }]) && Fn(n.prototype, o), a && Fn(n, a), t
        }();

        function Xn(e) {
            return (Xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Zn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function $n(e, t) {
            return !t || "object" !== Xn(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function eo(e) {
            return (eo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function to(e, t) {
            return (to = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function no(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Qn(Kn, "propTypes", {type: S.a.string, color: S.a.string}), Qn(Kn, "defaultProps", {
            type: "spin",
            color: "#f60"
        });
        var oo = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), $n(this, eo(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && to(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "render", value: function () {
                    var n = this, e = this.props, t = e.title, o = e.message, a = e.option, r = e.close,
                        i = 2 === a.length ? "toast-btn-item left-right" : "toast-btn-item top-bottom";
                    return C.a.createElement("div", {className: "toast-window "}, C.a.createElement("article", {className: t ? "toast-withtitle" : "toast-notitle"}, t && C.a.createElement("div", {className: "toast-window-head"}, t), o && C.a.createElement("div", {
                        className: "toast-window-body",
                        dangerouslySetInnerHTML: {__html: o}
                    })), C.a.createElement("div", {className: "toast-window-foot"}, a.map(function (e, t) {
                        return C.a.createElement("div", {
                            key: t, className: i, onClick: function () {
                                e.fn && e.fn(), r(n.props.id)
                            }
                        }, e.text)
                    })))
                }
            }]) && Zn(n.prototype, o), a && Zn(n, a), t
        }();

        function ao(e) {
            return (ao = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ro(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function io(e, t) {
            return !t || "object" !== ao(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function co(e) {
            return (co = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function so(e, t) {
            return (so = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        no(oo, "propTypes", {
            id: S.a.string,
            title: S.a.string,
            message: S.a.oneOfType([S.a.string, S.a.number]),
            option: S.a.array
        }), no(oo, "defaultProps", {option: []});
        var uo, lo, fo, mo = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), io(this, co(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && so(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.props.close(e.props.id)
                    }, this.props.duration)
                }
            }, {
                key: "shouldComponentUpdate", value: function (e, t) {
                    return this.props.id !== e.id
                }
            }, {
                key: "componentWillUpdate", value: function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        n.props.close(n.props.id)
                    }, this.props.duration)
                }
            }, {
                key: "render", value: function () {
                    return C.a.createElement("div", {className: "notice"}, this.props.message)
                }
            }]) && ro(n.prototype, o), a && ro(n, a), t
        }();

        function po(e) {
            return (po = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ho(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function yo(e, t) {
            return !t || "object" !== po(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function bo(e) {
            return (bo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function vo(e, t) {
            return (vo = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        uo = mo, lo = "propTypes", fo = {
            id: S.a.string,
            message: S.a.oneOfType([S.a.string, S.a.number]),
            duration: S.a.number
        }, lo in uo ? Object.defineProperty(uo, lo, {
            value: fo,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : uo[lo] = fo;
        var go, wo, Eo, So = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), yo(this, bo(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && vo(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.props.close(e.props.id)
                    }, this.props.duration)
                }
            }, {
                key: "shouldComponentUpdate", value: function (e, t) {
                    return this.props.id !== e.id
                }
            }, {
                key: "componentWillUpdate", value: function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        n.props.close(n.props.id)
                    }, this.props.duration)
                }
            }, {
                key: "render", value: function () {
                    return C.a.createElement("div", null, C.a.createElement("i", {className: "okfail-icon ok-icon"}), C.a.createElement("div", {className: "okfail-text"}, this.props.message))
                }
            }]) && ho(n.prototype, o), a && ho(n, a), t
        }();

        function Oo(e) {
            return (Oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function No(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function _o(e, t) {
            return !t || "object" !== Oo(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function ko(e) {
            return (ko = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function To(e, t) {
            return (To = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        go = So, wo = "propTypes", Eo = {
            id: S.a.string,
            message: S.a.oneOfType([S.a.string, S.a.number]),
            duration: S.a.number
        }, wo in go ? Object.defineProperty(go, wo, {
            value: Eo,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : go[wo] = Eo;
        var jo, Po, Co, Ro = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), _o(this, ko(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && To(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.props.close(e.props.id)
                    }, this.props.duration)
                }
            }, {
                key: "shouldComponentUpdate", value: function (e) {
                    return this.props.id !== e.id
                }
            }, {
                key: "componentWillUpdate", value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.props.close(e.props.id)
                    }, this.props.duration)
                }
            }, {
                key: "render", value: function () {
                    return C.a.createElement("div", null, C.a.createElement("i", {className: "okfail-icon fail-icon"}), C.a.createElement("div", {className: "okfail-text"}, this.props.message))
                }
            }]) && No(n.prototype, o), a && No(n, a), t
        }();

        function Do(e) {
            return (Do = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function xo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Mo(e, t) {
            return !t || "object" !== Do(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Uo(e) {
            return (Uo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Io(e, t) {
            return (Io = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Lo() {
            var e = function () {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            };
            return e() + e() + e() + "-" + e() + "_" + e() + "-" + e() + "_" + e() + e() + e()
        }

        jo = Ro, Po = "propTypes", Co = {
            id: S.a.string,
            message: S.a.oneOfType([S.a.string, S.a.number]),
            duration: S.a.number,
            close: S.a.func
        }, Po in jo ? Object.defineProperty(jo, Po, {
            value: Co,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : jo[Po] = Co;
        var Ao = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Mo(this, Uo(t).call(this))).state = {
                    loading: !1,
                    notices: [],
                    modals: [],
                    oks: [],
                    fails: []
                }, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Io(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var n = this;
                    Bn.on(Dn, function () {
                        n.setState({loading: !0})
                    }), Bn.on(xn, function () {
                        n.setState({loading: !1})
                    }), Bn.on(Un, function (e) {
                        var t = n.state.modals;
                        "object" === Do(e) ? t.push({
                            id: Lo(),
                            title: e.title,
                            message: e.message,
                            className: e.className,
                            option: [{text: e.text || zn[0], fn: e.fn}]
                        }) : t.push({
                            id: Lo(),
                            title: "",
                            message: e,
                            className: e.className,
                            option: [{text: zn[0]}]
                        }), n.setState({loading: !1, modals: t})
                    }), Bn.on(Mn, function (e) {
                        var t = n.state.modals;
                        e.id = Lo(), t.push(e), n.setState({loading: !1, modals: t})
                    }), Bn.on(In, function (e) {
                        var t = n.state.notices;
                        t.push({id: Lo(), duration: e[1] || 2e3, message: e[0] || ""}), n.setState({
                            loading: !1,
                            notices: t
                        })
                    }), Bn.on(Ln, function () {
                        return n.setState({loading: !1, modals: []})
                    }), Bn.on(An, function (e) {
                        var t = n.state.oks;
                        t.push({id: Lo(), duration: e[1] || 2e3, message: e[0] || ""}), n.setState({
                            loading: !1,
                            oks: t
                        })
                    }), Bn.on(Hn, function (e) {
                        var t = n.state.fails;
                        t.push({id: Lo(), duration: e[1] || 2e3, message: e[0] || ""}), n.setState({
                            loading: !1,
                            fails: t
                        })
                    })
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    Bn.clearAllEvents()
                }
            }, {
                key: "closeModal", value: function (t) {
                    var e = this.state.modals.filter(function (e) {
                        return e.id !== t
                    });
                    this.setState({modals: e})
                }
            }, {
                key: "closeNotice", value: function (t) {
                    var e = this.state.notices.filter(function (e) {
                        return e.id !== t
                    });
                    this.setState({notices: e})
                }
            }, {
                key: "closeOk", value: function (t) {
                    var e = this.state.oks.filter(function (e) {
                        return e.id !== t
                    });
                    this.setState({oks: e})
                }
            }, {
                key: "closeFail", value: function (t) {
                    var e = this.state.fails.filter(function (e) {
                        return e.id !== t
                    });
                    this.setState({fails: e})
                }
            }, {
                key: "_renderModal", value: function () {
                    var e = this.state.modals[0];
                    return e ? C.a.createElement("div", {className: "toast-root " + (e.className || "")}, C.a.createElement(oo, {
                        id: e.id,
                        title: e.title,
                        message: e.message,
                        option: e.option,
                        close: this.closeModal.bind(this)
                    })) : null
                }
            }, {
                key: "_renderNotice", value: function () {
                    var e = this.state.notices[0];
                    return e ? C.a.createElement("div", {className: "toast-notify-root"}, C.a.createElement(mo, {
                        id: e.id,
                        close: this.closeNotice.bind(this),
                        duration: e.duration,
                        message: e.message
                    })) : null
                }
            }, {
                key: "_renderOk", value: function () {
                    var e = this.state.oks[0];
                    return e ? C.a.createElement("div", {className: "okfail-root"}, C.a.createElement(So, {
                        id: e.id,
                        close: this.closeOk.bind(this),
                        duration: e.duration,
                        message: e.message
                    })) : null
                }
            }, {
                key: "_renderFail", value: function () {
                    var e = this.state.fails[0];
                    return e ? C.a.createElement("div", {className: "okfail-root"}, C.a.createElement(Ro, {
                        id: e.id,
                        close: this.closeFail.bind(this),
                        duration: e.duration,
                        message: e.message
                    })) : null
                }
            }, {
                key: "_renderPreloader", value: function () {
                    return C.a.createElement("div", {className: "toast-root"}, C.a.createElement(Kn, null))
                }
            }, {
                key: "render", value: function () {
                    return 0 < this.state.modals.length ? this._renderModal() : 0 < this.state.notices.length ? this._renderNotice() : this.state.loading ? this._renderPreloader() : 0 < this.state.oks.length ? this._renderOk() : 0 < this.state.fails.length ? this._renderFail() : null
                }
            }]) && xo(n.prototype, o), a && xo(n, a), t
        }();
        if ("undefined" != typeof window) {
            var Ho = document.createElement("div");
            document.body.appendChild(Ho), i.a.render(C.a.createElement("div", null, C.a.createElement(Ao, null)), Ho)
        }
        var zo = Wn;
        h("xwN8");

        function qo(e) {
            return (qo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Bo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Wo(e) {
            return (Wo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Go(e, t) {
            return (Go = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Fo(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Vo = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Wo(o).call(this)) || "object" !== qo(n) && "function" != typeof n ? Fo(t) : n).state = {show: !0}, e.close = e.close.bind(Fo(Fo(e))), e.dispose = e.dispose.bind(Fo(Fo(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Go(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "onSelect", value: function (e) {
                    var t = this.props.onSelect;
                    "function" == typeof t && t(e), this.close()
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.show;
                    return C.a.createElement(w.CSSTransition, {
                        in: e,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer m-layer-gender f-page"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "m-chatNav"}, C.a.createElement("span", {
                        className: "u-back icon",
                        onClick: this.close
                    })), C.a.createElement("div", {className: "content f-pr"}, C.a.createElement("h4", {className: "tt"}, "请选择你的性别"), C.a.createElement("p", {className: "tip"}, "一旦选择后将无法更改"), C.a.createElement("div", {className: "cgender"}, C.a.createElement("div", {className: "icons f-cb"}, C.a.createElement("div", {
                        className: "icon icon-male",
                        onClick: this.onSelect.bind(this, 1)
                    }), C.a.createElement("div", {
                        className: "icon icon-female",
                        onClick: this.onSelect.bind(this, 2)
                    })), C.a.createElement("div", {className: "txts"}, C.a.createElement("a", {
                        className: "txt txt-male",
                        onClick: this.onSelect.bind(this, 1)
                    }, "我是男孩"), C.a.createElement("a", {
                        className: "txt txt-female",
                        onClick: this.onSelect.bind(this, 2)
                    }, "我是女孩"))))))
                }
            }]) && Bo(t.prototype, n), a && Bo(t, a), o
        }();

        function Yo() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                e = document.createElement("div");
            document.body.appendChild(e);
            var t = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, n, {
                container: e, onSelect: function (t) {
                    "number" == typeof t && ("function" == typeof n.onclose && n.onclose(t), Te.getMatchToken(function (e) {
                        n.callback({gender: t, token: e})
                    }))
                }
            });
            i.a.render(C.a.createElement(Vo, t), e), Oe.biLogAction("view", {
                target: "selectgender",
                page: "matchinited",
                is_subpage: 1
            })
        }

        Vo.propTypes = {
            container: S.a.instanceOf(Element).isRequired,
            onSelect: S.a.func
        }, Vo.defaultProps = {
            onSelect: function () {
            }
        };
        h("sH6w");

        function Jo(e) {
            return (Jo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Qo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ko(e) {
            return (Ko = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Xo(e, t) {
            return (Xo = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Zo(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var $o = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Ko(o).call(this)) || "object" !== Jo(n) && "function" != typeof n ? Zo(t) : n).state = {show: !0}, e.close = e.close.bind(Zo(Zo(e))), e.dispose = e.dispose.bind(Zo(Zo(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Xo(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.show;
                    return C.a.createElement(w.CSSTransition, {
                        in: e,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer m-layer-star f-page"}, C.a.createElement("div", {className: "content f-pr"}, C.a.createElement("div", {className: "pic"}), C.a.createElement("p", {className: "tip"}, "需要添加5首红心单曲", C.a.createElement("br", null), "才能参与匹配"), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "close",
                        onClick: this.close
                    }))))
                }
            }]) && Qo(t.prototype, n), a && Qo(t, a), o
        }();

        function ea() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement($o, n), t), Oe.biLogAction("view", {
                target: "zerolike",
                page: "matchinited",
                is_subpage: 1
            })
        }

        $o.propTypes = {container: S.a.instanceOf(Element).isRequired};
        var ta = h("3IA8"), na = h.n(ta);

        function oa(e) {
            return (oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function aa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ra(e) {
            return (ra = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ia(e, t) {
            return (ia = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ca(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var sa = new Rn, ua = !1, la = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = ra(o).call(this)) || "object" !== oa(n) && "function" != typeof n ? ca(t) : n).onClick = e.onClick.bind(ca(ca(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ia(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "onClick", value: function () {
                    var o = this, e = this.props.onClick;
                    if (!e()) {
                        u()("#j-bgm")[0].pause();
                        var n = Oe.memo($);
                        n = -1 < ["matchinited", "chatend"].indexOf(n) ? n : "matchinited";
                        var t = Oe.memo(X);
                        t ? (this.showLoading(t), Te.getMatchToken(function (e) {
                            o.startMatch(t, e)
                        })) : Yo({
                            onclose: function (e) {
                                Oe.memo(X, e);
                                var t = 1 === e ? "male" : "female";
                                Oe.memo(te, t), Oe.biLogClick(n, t), o.showLoading(e)
                            }, callback: function (e) {
                                var t = e.gender, n = e.token;
                                o.startMatch(t, n)
                            }
                        }), Je.setViewed(), Oe.biLogClick(n, "entermatch", {style: Oe.memo(ie) || 2})
                    }
                }
            }, {
                key: "showLoading", value: function (e) {
                    sa.setup(), sa.changeSrc(1 == +e ? kn[Math.floor(Math.random() * kn.length)] : Tn[Math.floor(Math.random() * Tn.length)]);
                    var t = this.props.from;
                    switch (t) {
                        case jt:
                            nn.emit(wt);
                            break;
                        case Pt:
                            nn.emit(St);
                            break;
                        case Ct:
                            nn.emit(Nt)
                    }
                    nn.emit(yt, {from: t, sound: sa})
                }
            }, {
                key: "hideLoading", value: function () {
                    var e = this.props.from;
                    setTimeout(function () {
                        nn.emit(Tt, {from: e}), nn.emit(bt), sa.pause()
                    }, 3e3)
                }
            }, {
                key: "startMatch", value: function (o, e) {
                    var a = this;
                    this.isStartMatch || (this.isStartMatch = !0, Oe.memo(ne, +new Date), xe.getMatchUser(o, e).then(function (e) {
                        var t = parseInt(e.data.matched, 10), n = parseInt(e.data.reportedCount, 10);
                        switch (t) {
                            case 0:
                            case 1:
                                nn.emit(vt, {
                                    gender: o,
                                    initMatchUser: e.data
                                }), ua || (ua = !0, 1 === n ? zo.notify("你被举报过一次，请注意言行哦！", 4e3) : 2 === n && zo.notify("你已经被举报两次，请注意言行哦，超过3次就不能匹配啦X﹏X ", 4e3));
                                break;
                            case-1:
                                zo.notify("检测到你多次消极聊天，6小时内将无法参与匹配", 4e3), a.hideLoading();
                                break;
                            case-2:
                                zo.notify("您已被举报3次了，当前无法参与匹配", 4e3), a.hideLoading();
                                break;
                            case-3:
                                ea(), a.hideLoading();
                                break;
                            case-4:
                                zo.notify("你已连续退出多次，请2小时候后再来参与匹配", 4e3), a.hideLoading();
                                break;
                            default:
                                a.hideLoading()
                        }
                    }).catch(function (e) {
                        a.hideLoading(), !e || 301 !== e.code && 302 !== e.code ? zo.fail(e && e.message || "抱歉！当前参与人数较多，请稍后再试", 4e3) : Oe.login()
                    }).finally(function () {
                        a.isStartMatch = !1
                    }))
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.className,
                        n = e.children || C.a.createElement("div", {className: "start-btn"}, C.a.createElement("img", {src: na.a}));
                    return C.a.createElement("a", {className: t, onClick: this.onClick, href: "javascript:;"}, n)
                }
            }]) && aa(t.prototype, n), a && aa(t, a), o
        }();
        la.propTypes = {
            from: S.a.string.isRequired,
            children: S.a.any,
            className: S.a.string,
            onClick: S.a.func
        }, la.defaultProps = {className: "", onClick: Oe.noop};
        var fa = h("Y/le"), ma = h.n(fa), pa = h("Y6G0"), ha = h.n(pa);
        h("fxr8");

        function da(e) {
            return (da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ya(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ba(e) {
            return (ba = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function va(e, t) {
            return (va = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ga(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function wa() {
            Ve.memo(W) ? Ve.share() : Ve.login()
        }

        var Ea = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = ba(o).call(this)) || "object" !== da(n) && "function" != typeof n ? ga(t) : n).onResize = e.onResize.bind(ga(ga(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && va(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    u()(window).on("resize", this.onResize), this.onResize(), setTimeout(function () {
                        nn.emit(lt)
                    }, 10), Ve.memo($, "matchinited"), Ve.memo(ie, 3), Ve.biLogPage("matchinited", {style: 3})
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    u()(window).off("resize", this.onResize)
                }
            }, {
                key: "onResize", value: function () {
                    Ve.resizeFullPage()
                }
            }, {
                key: "render", value: function () {
                    return C.a.createElement("div", {className: "m-reportcontent f-page"}, C.a.createElement("div", {className: "m-page m-page-nodata f-page z-enter"}, C.a.createElement("h3", {className: "hi"}, "Hi Dear："), C.a.createElement("p", {className: "txt"}, "我们错过了你的2018年度听歌报告"), C.a.createElement("p", {className: "txt"}, "但你可参加云村", C.a.createElement("b", {className: "red"}, "在线匹配"), "哦"), C.a.createElement("p", {className: "txt"}, "打开网易云音乐,", C.a.createElement("b", {className: "red"}, " 添加红心歌曲「至少5首」")), C.a.createElement("p", {className: "txt"}, "即可参与,", C.a.createElement("b", {className: "red"}, " 寻找与你灵魂最相似的人")), C.a.createElement("div", {className: "heart-gif"}, C.a.createElement("img", {src: ma.a})), C.a.createElement("div", {className: "steps-png"}, C.a.createElement("img", {src: ha.a})), C.a.createElement("div", {className: "buttons"}, C.a.createElement(la, {
                        from: jt,
                        className: "button button-1"
                    }, "开始音乐匹配"), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "button button-2",
                        onClick: wa
                    }, "分享"))))
                }
            }]) && ya(t.prototype, n), a && ya(t, a), o
        }();
        h("8yGH");

        function Sa(e) {
            return (Sa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Oa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Na(e, t) {
            return !t || "object" !== Sa(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function _a(e) {
            return (_a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ka(e, t) {
            return (ka = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ta() {
            Ve.wakeup()
        }

        var ja = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Na(this, _a(t).call(this))).state = {totalCount: 0}, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ka(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var n = this;
                    xe.getOnlineCount().then(function (e) {
                        var t = e.totalCount;
                        n.setState({totalCount: t})
                    }), Ve.memo($, "matchinited"), Ve.biLogPage("matchinited", {style: 3})
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.totalCount;
                    return C.a.createElement("div", {className: "m-reportcontent f-page"}, C.a.createElement("div", {className: "m-page m-page-nodata-out z-enter f-page"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "content"}, C.a.createElement("div", {className: "tt"}, "我们错过了你的2018", C.a.createElement("br", null), "但现在打开网易云音乐，", C.a.createElement("br", null), "至少添加五首红心歌曲", C.a.createElement("br", null), "就可以参与匹配，", C.a.createElement("br", null), "寻找与你灵魂最相似的人"), C.a.createElement("p", {className: "tip"}, "·添加的红心歌曲越多，匹配的越准·"), C.a.createElement("div", {className: "pic"}), C.a.createElement("a", {
                        className: "button",
                        href: "javascript:;",
                        onClick: Ta
                    }, "点击开始匹配"), 5e3 <= e && C.a.createElement("p", null, "已有", C.a.createElement("span", {className: "s-fcRed"}, "".concat(e, "人")), "参与"))))
                }
            }]) && Oa(n.prototype, o), a && Oa(n, a), t
        }(), Pa = h("patp"), Ca = h.n(Pa);
        h("cYVt");

        function Ra(e) {
            return (Ra = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Da(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function xa(e) {
            return (xa = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ma(e, t) {
            return (Ma = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ua(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Ia, La, Aa, Ha = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = xa(o).call(this)) || "object" !== Ra(n) && "function" != typeof n ? Ua(t) : n).transitionTime = 300, e.leaveTime = 500, e.transitionOut = e.transitionOut.bind(Ua(Ua(e))), e.transitionIn = e.transitionIn.bind(Ua(Ua(e))), e.onSwipeUp = e.onSwipeUp.bind(Ua(Ua(e))), e.onSwipeDown = e.onSwipeDown.bind(Ua(Ua(e))), e.onResize = e.onResize.bind(Ua(Ua(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ma(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "setup", value: function () {
                    return !this.isSetup && (this.isSetup = !0, this.container && (u()(this.container).on("swipeUp", this.onSwipeUp), u()(this.container).on("swipeDown", this.onSwipeDown)), u()(window).on("resize", this.onResize), !this.constructor.hasLoged && this.pageName && (this.constructor.hasLoged = !0, Ve.biLogPage(this.pageName, this.biPageExtra)), Ve.memo($, this.pageName), !0)
                }
            }, {
                key: "dispose", value: function () {
                    this.isSetup = !1, this.mounted = !1, this.container && (u()(this.container).off("swipeUp", this.onSwipeUp), u()(this.container).off("swipeDown", this.onSwipeDown)), u()(window).off("resize", this.onResize), this.transitionTimer && (this.transitionTimer = clearTimeout(this.transitionTimer)), this.leaveTimer && (this.leaveTimer = clearTimeout(this.leaveTimer))
                }
            }, {
                key: "onSwipeDown", value: function () {
                }
            }, {
                key: "onSwipeUp", value: function () {
                }
            }, {
                key: "onResize", value: function () {
                }
            }, {
                key: "transitionIn", value: function () {
                    return !this.isEnter && (this.isEnter = !0, u()(this.container).addClass("z-enter"), this.logoEvent && nn.emit(this.logoEvent), this.chatEvent && nn.emit(this.chatEvent), this.setup(), Ve.preventDefaultTouch(), nn.emit(lt), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    var t = this;
                    if (!this.isEnter || this.isLeave) return !1;
                    this.isLeave = !0, u()(this.container).addClass("z-leave");
                    var n = this.props, o = n.onTransition, a = n.onLeave;
                    return this.transitionTimer = setTimeout(function () {
                        return o(e)
                    }, this.transitionTime), this.leaveTimer = setTimeout(function () {
                        u()(t.container).removeClass("z-enter z-leave"), t.isEnter = !1, t.isLeave = !1, a(e)
                    }, this.leaveTime), !0
                }
            }, {
                key: "createEl", value: function () {
                    return null
                }
            }, {
                key: "el", value: function () {
                    return null
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this;
                    this.mounted = !0, this.props.current === this.constructor && setTimeout(function () {
                        e.transitionIn()
                    }, 10)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.dispose()
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.current, n = e.next, o = e.isTransition;
                    return t === this.constructor && this.mounted && this.transitionIn(), n === this.constructor && o && this.transitionIn(), this.createEl()
                }
            }]) && Da(t.prototype, n), a && Da(t, a), o
        }();
        Aa = !(La = "hasLoged"), La in (Ia = Ha) ? Object.defineProperty(Ia, La, {
            value: Aa,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Ia[La] = Aa, Ha.propTypes = {
            onTransition: S.a.func,
            onLeave: S.a.func,
            current: S.a.func.isRequired,
            next: S.a.func,
            isTransition: S.a.bool
        }, Ha.defaultProps = {onTransition: Ve.noop, onLeave: Ve.noop, isTransition: !1, next: null};
        h("79Vo");

        function za(e) {
            return (za = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function qa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ba(e, t, n) {
            return (Ba = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Wa(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Wa(e) {
            return (Wa = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ga(e, t) {
            return (Ga = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Fa(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Va = function (e) {
            function a() {
                var e, t, n;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), t = this, (e = !(n = Wa(a).call(this)) || "object" !== za(n) && "function" != typeof n ? Fa(t) : n).logoEvent = ft, e.chatEvent = dt, e.pageName = "homepage";
                var o = Ve.memo(ee);
                return o && (e.biPageExtra = {refer: o}), e.onPlay = e.onPlay.bind(Fa(Fa(e))), e.onTouch = e.onTouch.bind(Fa(Fa(e))), e
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ga(e, t)
            }(a, Ha), t = a, (n = [{
                key: "componentDidMount", value: function () {
                    Ba(Wa(a.prototype), "componentDidMount", this).call(this), this.parallax(), this.onResize(), u()(this.container).on("touchstart", this.onTouch)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    Ba(Wa(a.prototype), "componentWillUnmount", this).call(this), u()(this.container).off("touchstart", this.onTouch)
                }
            }, {
                key: "parallax", value: function () {
                    new Ca.a(this.comp, {pointerEvents: !0})
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Ba(Wa(a.prototype), "onSwipeUp", this).call(this), this.transitionOut(), this.onPlay()
                }
            }, {
                key: "onTouch", value: function () {
                    this.onPlay(), u()(this.container).off("touchstart", this.onTouch)
                }
            }, {
                key: "onPlay", value: function () {
                    u()("#j-bgm")[0].muted = !1, u()("#j-bgm")[0].play()
                }
            }, {
                key: "onResize", value: function () {
                    Ve.resizeFullPage()
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.getUserData().nkn;
                    return e || (e = "游客"), C.a.createElement("div", {
                        className: "m-page m-page-cover f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {
                        id: "comp", ref: function (e) {
                            t.comp = e
                        }
                    }, C.a.createElement("div", {
                        "data-depth": "0",
                        className: "id8_bggpngc"
                    }, C.a.createElement("div", {id: "id8_bggpng"})), C.a.createElement("div", {
                        "data-depth": "0.4",
                        className: "id7_stars2pngc"
                    }, C.a.createElement("div", {id: "id7_stars2png"})), C.a.createElement("div", {
                        "data-depth": "0.7",
                        className: "id6_stars1pngc"
                    }, C.a.createElement("div", {id: "id6_stars1png"})), C.a.createElement("div", {
                        "data-depth": "0.2",
                        className: "id4_middlePlanetpngc"
                    }, C.a.createElement("div", {id: "id4_middlePlanetpng"})), C.a.createElement("div", {id: "no2"}, C.a.createElement("div", {id: "liuxing2"}), C.a.createElement("div", {id: "id5_manwithbigplanetpng"}), C.a.createElement("div", {className: "logotxt "}, C.a.createElement("span", {className: "f-thide2"}, Ve.ellipsisText(e, 30))), C.a.createElement("div", {className: "tt"}), C.a.createElement("div", {id: "id2_gxpng"}), C.a.createElement("div", {id: "id1_lightNotepng"}), C.a.createElement("div", {className: "enter"}, "进入"))), C.a.createElement("div", {className: "egg_tips"}))
                }
            }]) && qa(t.prototype, n), o && qa(t, o), a
        }();
        h("i5qh");

        function Ya(e) {
            return (Ya = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ja(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Qa(e, t, n) {
            return (Qa = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ka(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Ka(e) {
            return (Ka = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Xa(e, t) {
            return (Xa = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Za(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var $a = function (e) {
            function c() {
                var e, t, n, o, a, r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, c), t = this, e = !(n = Ka(c).call(this)) || "object" !== Ya(n) && "function" != typeof n ? Za(t) : n, o = Za(Za(e)), r = function () {
                    var e = null, t = Ve.getUserData().kw, n = Be[t];
                    return 1 === n.length ? e = C.a.createElement("div", {className: "words words-1"}, C.a.createElement("span", {className: "word word-0"}, C.a.createElement("i", {className: "u-word u-word-".concat(n[0])}))) : 2 === n.length && (e = C.a.createElement("div", {className: "words words-2"}, C.a.createElement("span", {className: "word word-1"}, C.a.createElement("i", {className: "u-word u-word-".concat(n[0])})), C.a.createElement("span", {className: "word word-2"}, C.a.createElement("i", {className: "u-word u-word-".concat(n[1])})))), e
                }, (a = "getWordEl") in o ? Object.defineProperty(o, a, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = r, e.pageName = "p1", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Xa(e, t)
            }(c, Ha), t = c, (n = [{
                key: "componentDidMount", value: function () {
                    Qa(Ka(c.prototype), "componentDidMount", this).call(this);
                    var i = .5 < Math.random();
                    u()(this.container).find(".lyrics .itm").forEach(function (e) {
                        var t = u()(e), n = u()(e.firstElementChild), o = t.width(), a = n.width(),
                            r = Math.random() * (o - a) / 2;
                        i || (r += (o - a) / 2), n.css({
                            webkitTransform: "translateX(".concat(r, "px)"),
                            transform: "translateX(".concat(r, "px)")
                        }), i = !i
                    })
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Qa(Ka(c.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Qa(Ka(c.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "transitionIn", value: function () {
                    return !!Qa(Ka(c.prototype), "transitionIn", this).call(this) && (u()(".j-anim01").addClass("z-anim"), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    return !!Qa(Ka(c.prototype), "transitionOut", this).call(this, e) && (setTimeout(function () {
                        u()(".j-anim01").removeClass("z-anim")
                    }, 300), !0)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData().kwc, o = this.getWordEl(), a = Ve.getUserData().lyr;
                    return 5 < a.length && (a = a.slice(0, 5)), !l.a.isInNEMapp() && 4 < a.length && (a = a.slice(0, 4)), C.a.createElement("div", {
                        className: "m-page m-page-01 f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "tt f-animOpac"}, C.a.createElement("h4", null, "2018"), C.a.createElement("h4", null, "".concat(e, "在网易云音乐听到的最多的歌词是"))), C.a.createElement("div", {className: "ckeywords j-anim01"}, C.a.createElement("div", {className: "hands"}, C.a.createElement("div", {className: "hand2"}), C.a.createElement("div", {className: "hand1"}), C.a.createElement("div", {className: "hand3"})), o, C.a.createElement("div", {className: "nums f-animOpac"}, "".concat(n).split("").reverse().map(function (e, t) {
                        return C.a.createElement("span", {className: "n", key: t}, e)
                    }), C.a.createElement("i", {className: "unit"}))), C.a.createElement("div", {className: "hand4"}), C.a.createElement("ul", {className: "lyrics"}, a.map(function (e, t) {
                        return C.a.createElement("li", {
                            className: "itm f-animLineUp",
                            key: t
                        }, C.a.createElement("div", null, C.a.createElement("div", {
                            className: "line1 f-thide",
                            dangerouslySetInnerHTML: {__html: (n = e.lyc, o = e.w, n && o ? n.replace(new RegExp(o, "g"), '<em class="s-fcRed">'.concat(o, "</em>")) : "")}
                        }), C.a.createElement("br", null), C.a.createElement("div", {className: "line2 f-thide"}, "- ".concat(Ve.ellipsisText(e.an, 17), "《").concat(Ve.ellipsisText(e.sn, 14), "》"))));
                        var n, o
                    })))
                }
            }]) && Ja(t.prototype, n), o && Ja(t, o), c
        }();
        h("9Q/W");

        function er(e) {
            return (er = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function tr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function nr(e, t) {
            return !t || "object" !== er(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function or(e, t, n) {
            return (or = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ar(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function ar(e) {
            return (ar = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function rr(e, t) {
            return (rr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var ir = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = nr(this, ar(n).call(this))).pageName = "p2", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && rr(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    or(ar(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    or(ar(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    or(ar(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art02").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.psc, a = n.le, r = n.psto, i = n.st,
                        c = n.cc, s = n.clc, u = null;
                    return u = 0 === c && 0 === s ? C.a.createElement("div", null, C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "习惯"), C.a.createElement("em", {className: "s-fcRed"}, "默默"), "地听"), C.a.createElement("p", {className: "para f-animLineUp"}, "评论区的狂欢".concat(e, "很少参与"))) : 0 === c && 0 < s ? C.a.createElement("div", null, C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "习惯"), C.a.createElement("em", {className: "s-fcRed"}, "默默"), "点赞"), C.a.createElement("p", {className: "para f-animLineUp"}, "却很少分享自己的回忆")) : C.a.createElement("div", null, C.a.createElement("p", {className: "para f-animLineUp"}, e, C.a.createElement("em", {className: "s-fcRed"}, "热爱分享")), C.a.createElement("p", {className: "para f-animLineUp"}, "评论区里藏着".concat(e, "的许多回忆"))), C.a.createElement("div", {
                        className: "m-page m-page-02 f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "mountain"}, C.a.createElement("div", {className: "piece piece-1"}), C.a.createElement("div", {className: "piece piece-2"})), C.a.createElement("div", {className: "j-art02 clanche"}, C.a.createElement("div", {className: "id22_line4png"}, C.a.createElement("div", {className: "id24_yinfu4"}), C.a.createElement("div", {className: "id23_yinfu5"})), C.a.createElement("div", {className: "id20_line3png"}, C.a.createElement("div", {className: "id19_yinfu31"}, C.a.createElement("div", {className: "id21_yinfu32png"}))), C.a.createElement("div", {className: "id20_line3png"}, C.a.createElement("div", {className: "id19_yinfu31"})), C.a.createElement("div", {className: "id17_line2png"}, C.a.createElement("div", {className: "id16_yinfu21"}, C.a.createElement("div", {className: "id18_yinfu22"}))), C.a.createElement("div", {className: "id17_line2png"}, C.a.createElement("div", {className: "id16_yinfu21"})), C.a.createElement("div", {className: "id14_line1png"}, C.a.createElement("div", {className: "id7_yinfu11"}, C.a.createElement("div", {className: "id6_tou"}, C.a.createElement("div", {className: "P1hair"})), C.a.createElement("div", {className: "id13_shenti"}), C.a.createElement("div", {className: "id11_2xiaotui"}, C.a.createElement("div", {className: "id12_2jiojiopng"})), C.a.createElement("div", {className: "id8_1datui"}, C.a.createElement("div", {className: "id9_1xiaotui"}, C.a.createElement("div", {className: "id10_1jiojiopng"}))), C.a.createElement("div", {className: "id15_yinfu12"}))), C.a.createElement("div", {className: "id14_line1png"}, C.a.createElement("div", {className: "id7_yinfu11"}, C.a.createElement("div", {className: "id4_dabi"}, C.a.createElement("div", {className: "id3_yifu"}), C.a.createElement("div", {className: "id2_xiaobi"}, C.a.createElement("div", {className: "id1_hand"})))))), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年里"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "一共在云村听了"), C.a.createElement("em", {className: "s-fcRed f-fw1"}, 1e4 <= o ? "9999+" : o), "首歌"), 10 <= a && C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "是网易云音乐的十级用户")), 10 <= a && C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "的听歌总数，超过了"), C.a.createElement("em", {className: "s-fcRed f-fw1"}, "99%"), "的人"), C.a.createElement("p", {className: "para f-animLineUp"}, " "), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "热衷"), "unknown" === i ? "的风格成谜" : C.a.createElement("em", {className: "s-fcRed"}, i)), C.a.createElement("p", {className: "para f-animLineUp"}, "喜欢在", C.a.createElement("em", {className: "s-fcRed"}, r), "听歌"), C.a.createElement("p", {className: "para f-animLineUp"}, " "), u))
                }
            }]) && tr(t.prototype, o), a && tr(t, a), n
        }();
        h("CB7T");

        function cr(e) {
            return (cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function sr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ur(e, t) {
            return !t || "object" !== cr(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function lr(e, t, n) {
            return (lr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = fr(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function fr(e) {
            return (fr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function mr(e, t) {
            return (mr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var pr = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = ur(this, fr(n).call(this))).pageName = "p3", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && mr(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    lr(fr(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    lr(fr(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    lr(fr(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art03").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "transitionIn", value: function () {
                    return !!lr(fr(n.prototype), "transitionIn", this).call(this) && (u()(this.container).find(".j-anim03").addClass("z-anim"), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    var t = this;
                    return !!lr(fr(n.prototype), "transitionOut", this).call(this, e) && (setTimeout(function () {
                        u()(t.container).find(".j-anim03").removeClass("z-anim")
                    }, 300), !0)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.rsd, a = n.rc, r = n.rsn, i = n.ran,
                        c = /\d{4}-?(\d{2})-?(\d{2})/.exec(o), s = parseInt(c[1], 10), u = parseInt(c[2], 10);
                    return C.a.createElement("div", {
                        className: "m-page m-page-03 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "sun f-center"}), C.a.createElement("div", {className: "art j-art03"}, C.a.createElement("div", {className: "swing j-anim03"}, C.a.createElement("div", {className: "leg2"}, C.a.createElement("div", {className: "part"})), C.a.createElement("div", {className: "leg1"}, C.a.createElement("div", {className: "part"})), C.a.createElement("div", {className: "neck"}), C.a.createElement("div", {className: "head"}, C.a.createElement("div", {className: "part"})))), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, "".concat(s, "月").concat(u, "日"))), C.a.createElement("p", {className: "para f-animLineUp"}, "大概是很特别的一天"), C.a.createElement("p", {className: "para f-animLineUp"}, "这一天里"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "把").concat(Ve.ellipsisText(i, 17), "的"), C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(r, 60), "》"))), C.a.createElement("p", {className: "para f-animLineUp"}, "反复听了", C.a.createElement("em", {className: "s-fcRed"}, "".concat(500 < a ? "500+" : a, "次")))))
                }
            }]) && sr(t.prototype, o), a && sr(t, a), n
        }();
        h("8tiM");

        function hr(e) {
            return (hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function dr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function yr(e, t) {
            return !t || "object" !== hr(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function br(e, t, n) {
            return (br = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = vr(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function vr(e) {
            return (vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function gr(e, t) {
            return (gr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var wr = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = yr(this, vr(n).call(this))).pageName = "p4", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && gr(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    br(vr(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    br(vr(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    br(vr(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-ccat").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.mpt, a = n.msn, r = n.man,
                        i = Ve.timeObject(1e3 * o);
                    return C.a.createElement("div", {
                        className: "m-page m-page-04 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "j-ccat ccat"}, C.a.createElement("div", {className: "id25_ren"}), C.a.createElement("div", {className: "id22_shou1-3"}, C.a.createElement("div", {className: "id24_shou1-2"}, C.a.createElement("div", {className: "id23_shou1-1"}))), C.a.createElement("div", {className: "id22_shou1-3"}), C.a.createElement("div", {className: "id21_xiuzi"}), C.a.createElement("div", {className: "id20_yanzhu"}), C.a.createElement("div", {className: "id13_maowei"}), C.a.createElement("div", {className: "id11_maozhua-1"}), C.a.createElement("div", {className: "id10_maoshenti"}), C.a.createElement("div", {className: "id9_maoyan1"}), C.a.createElement("div", {className: "id8_maoyan2"}), C.a.createElement("div", {className: "id7_maozui"}), C.a.createElement("div", {className: "id6_wuxianpu"}), C.a.createElement("div", {className: "id5_yinfu"}), C.a.createElement("div", {className: "id4_yinfu-1"}), C.a.createElement("div", {className: "id3_yinfuqiu3"}), C.a.createElement("div", {className: "id2_yinfuqiu2"}), C.a.createElement("div", {className: "id1_yinfuqiu1"})), C.a.createElement("div", {className: "corner"}, C.a.createElement("div", {className: "id7_night-wave"}), C.a.createElement("div", {className: "id6_moon"})), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(i.month, "月").concat(i.day, "日")), C.a.createElement("p", {className: "para f-animLineUp"}, "这一天".concat(e, "睡得很晚")), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, "".concat("00".concat(i.hour).slice(-2), ":").concat("00".concat(i.min).slice(-2))), "还在与音乐为伴"), C.a.createElement("p", {className: "para f-animLineUp"}, " "), C.a.createElement("p", {className: "para f-animLineUp"}, "那一刻".concat(e, "在听")), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, Ve.ellipsisText(r, 17)), " 的", C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(a, 40), "》")))))
                }
            }]) && dr(t.prototype, o), a && dr(t, a), n
        }();
        h("SaWy");

        function Er(e) {
            return (Er = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Sr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Or(e, t) {
            return !t || "object" !== Er(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Nr(e, t, n) {
            return (Nr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _r(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function _r(e) {
            return (_r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function kr(e, t) {
            return (kr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Tr = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = Or(this, _r(n).call(this))).pageName = "p5", e.logoEvent = pt, e.HIDE_CHAT = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && kr(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    Nr(_r(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Nr(_r(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Nr(_r(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth, t = e / 750;
                    window.innerHeight;
                    t *= .8, u()(".j-cfly").css({
                        webkitTransform: "scale(".concat(t, ")"),
                        transform: "scale(".concat(t, ")"),
                        top: "".concat(0, "px"),
                        left: "".concat((e - 750 * t) / 2, "px")
                    })
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData().mdc, o = 365 < n ? "300+" : n;
                    return C.a.createElement("div", {
                        className: "m-page m-page-05 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "j-cfly cfly"}, C.a.createElement("div", {className: "id21_p4notesmall"}), C.a.createElement("div", {className: "id20_p4notebig"}), C.a.createElement("div", {className: "id19_p4body"}, C.a.createElement("div", {className: "id18_p4hand2"}), C.a.createElement("div", {className: "id17_p4leg2"}), C.a.createElement("div", {className: "id16_p4leg1"}), C.a.createElement("div", {className: "id10_p4cloth"}), C.a.createElement("div", {className: "id9_p4head"}), C.a.createElement("div", {className: "id5_p4hair"}), C.a.createElement("div", {className: "id4_p4hand1"})), C.a.createElement("div", {className: "id15_p4matt1"}), C.a.createElement("div", {className: "id3_p4light1"}), C.a.createElement("div", {className: "id2_p4light2"})), C.a.createElement("div", {className: "stars f-page"}), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年，".concat(e, "有"), C.a.createElement("span", {className: "s-fcRed"}, o, "天")), C.a.createElement("p", {className: "para f-animLineUp"}, "深夜", C.a.createElement("span", {className: "s-fcRed"}, "12点"), "后"), C.a.createElement("p", {className: "para f-animLineUp"}, "仍沉浸在音乐世界"), C.a.createElement("p", {className: "para f-animLineUp"}, "睡不着的夜晚"), C.a.createElement("p", {className: "para f-animLineUp"}, "还有网易云音乐陪伴")))
                }
            }]) && Sr(t.prototype, o), a && Sr(t, a), n
        }();
        h("t3rD");

        function jr(e) {
            return (jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Pr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Cr(e, t) {
            return !t || "object" !== jr(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Rr(e, t, n) {
            return (Rr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Dr(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Dr(e) {
            return (Dr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function xr(e, t) {
            return (xr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Mr = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Cr(this, Dr(t).call(this))).pageName = "p6", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && xr(e, t)
            }(t, Ha), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    })
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Rr(Dr(t.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Rr(Dr(t.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.mrsn, a = n.mrspc;
                    return C.a.createElement("div", {
                        className: "m-page m-page-06 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "在".concat(e, "的音乐品味中"), " "), C.a.createElement("p", {className: "para f-animLineUp"}, "也藏着高冷的一面 "), C.a.createElement("p", {className: "para f-animLineUp"}, "这首有些小众的 "), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(o, 80), "》"))), C.a.createElement("p", {className: "para f-animLineUp"}, "在今年".concat(e, "一共听了"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(a, "次")), " ")), C.a.createElement("div", {className: "art"}, C.a.createElement("div", {className: "man"}), C.a.createElement("div", {className: "shadow"})))
                }
            }]) && Pr(n.prototype, o), a && Pr(n, a), t
        }();
        h("OVjV");

        function Ur(e) {
            return (Ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ir(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Lr(e, t) {
            return !t || "object" !== Ur(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Ar(e, t, n) {
            return (Ar = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Hr(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Hr(e) {
            return (Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function zr(e, t) {
            return (zr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var qr = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = Lr(this, Hr(n).call(this))).pageName = "p7", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && zr(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    Ar(Hr(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Ar(Hr(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Ar(Hr(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art07").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.mdspc, a = n.mdsn, r = 365 < o ? "300+" : o;
                    return C.a.createElement("div", {
                        className: "m-page m-page-07 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "art j-art07"}, C.a.createElement("div", {className: "mountain"}), C.a.createElement("div", {className: "shadow"}), C.a.createElement("div", {className: "id25_youbi3-static"}, C.a.createElement("div", {className: "id24_youbi2-static"})), C.a.createElement("div", {className: "id20_youtui1-static"}, C.a.createElement("div", {className: "id22_yuotui2-static"}, C.a.createElement("div", {className: "id21_youtui3-static"}, C.a.createElement("div", {className: "id19_yinfu-1"})))), C.a.createElement("div", {className: "id18_cheba2"}), C.a.createElement("div", {className: "id17_zixingche"}), C.a.createElement("div", {className: "id15_tou-no-eye"}, C.a.createElement("div", {className: "id13_toufa-static"}), C.a.createElement("div", {className: "id14_eye"})), C.a.createElement("div", {className: "id11_shenti-static"}), C.a.createElement("div", {className: "id12_shenti2-static"}, C.a.createElement("div", {className: "id9_zuotui1-static"}, C.a.createElement("div", {className: "id8_zuotui2-static"}, C.a.createElement("div", {className: "id10_zuotui3-static"}, C.a.createElement("div", {className: "id7_yinfu-1"})))), C.a.createElement("div", {className: "id6_yifu-static"})), C.a.createElement("div", {className: "id5_zuoshou-static"}, C.a.createElement("div", {className: "id3_zuobi-static"}, C.a.createElement("div", {className: "id4_zuobi-1"}, C.a.createElement("div", {className: "id2_xiuzi-static"})))), C.a.createElement("div", {className: "id1_cheba"}), C.a.createElement("div", {className: "notesfly"})), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年 "), C.a.createElement("p", {className: "para f-animLineUp"}, "有", C.a.createElement("em", {className: "s-fcRed"}, r), "天".concat(e, "都听了"), " "), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(a, 40), "》"))), C.a.createElement("p", {className: "para f-animLineUp"}, "在所有熟悉的旋律中 "), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "对它最专一"), " ")))
                }
            }]) && Ir(t.prototype, o), a && Ir(t, a), n
        }();
        h("sKN3");

        function Br(e) {
            return (Br = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Wr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Gr(e, t) {
            return !t || "object" !== Br(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Fr(e, t, n) {
            return (Fr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Vr(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Vr(e) {
            return (Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Yr(e, t) {
            return (Yr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Jr = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = Gr(this, Vr(n).call(this))).pageName = "p8", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Yr(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    Fr(Vr(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Fr(Vr(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Fr(Vr(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-cchair").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.osn, a = n.ospb, r = Ve.timeObject(a);
                    return C.a.createElement("div", {
                        className: "m-page m-page-08 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "j-cchair cchair"}, C.a.createElement("div", {className: "id17_bozi"}), C.a.createElement("div", {className: "id16_tui"}), C.a.createElement("div", {className: "id15_body"}), C.a.createElement("div", {className: "id14_qinti2"}), C.a.createElement("div", {className: "arm_right"}, C.a.createElement("div", {className: "id6_dabi2"}, C.a.createElement("div", {className: "id4_xiaobi2"}, C.a.createElement("div", {className: "id1_ganzi"}), C.a.createElement("div", {className: "id5_muzhi2"})), C.a.createElement("div", {className: "id2_p8-split-1_0"}))), C.a.createElement("div", {className: "id9_qinti1"}), C.a.createElement("div", {className: "id13_dabi"}, C.a.createElement("div", {className: "id12_xiaobi"})), C.a.createElement("div", {className: "id11_xiuzi"}), C.a.createElement("div", {className: "id8_head"})), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这首", C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(o, 60), "》"))), C.a.createElement("p", {className: "para f-animLineUp"}, "是".concat(e, "今年听过年代最久远的歌"), " "), C.a.createElement("p", {className: "para f-animLineUp"}, " "), 0 !== a && C.a.createElement("p", {className: "para f-animLineUp"}, "发行于", C.a.createElement("em", {className: "s-fcRed"}, "".concat(r.year, "年").concat(r.month, "月")), " ")))
                }
            }]) && Wr(t.prototype, o), a && Wr(t, a), n
        }();
        h("DG9H");

        function Qr(e) {
            return (Qr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Kr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Xr(e, t) {
            return !t || "object" !== Qr(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Zr(e, t, n) {
            return (Zr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = $r(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function $r(e) {
            return ($r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ei(e, t) {
            return (ei = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var ti = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = Xr(this, $r(n).call(this))).pageName = "p9", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ei(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    Zr($r(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Zr($r(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Zr($r(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art09").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "transitionIn", value: function () {
                    var e = this;
                    return !!Zr($r(n.prototype), "transitionIn", this).call(this) && (setTimeout(function () {
                        u()(e.container).find(".j-anim").addClass("z-anim")
                    }, 300), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    var t = this;
                    return !!Zr($r(n.prototype), "transitionOut", this).call(this, e) && (setTimeout(function () {
                        u()(t.container).find(".j-anim").removeClass("z-anim")
                    }, 300), !0)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.fsan, a = n.fsn;
                    return C.a.createElement("div", {
                        className: "m-page m-page-09 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "j-art09 art j-anim"}, C.a.createElement("div", {className: "line line-1"}), C.a.createElement("div", {className: "line line-2"}), C.a.createElement("div", {className: "line line-3"}), C.a.createElement("div", {className: "id16_shadow"}), C.a.createElement("div", {className: "id15_shadow"}), C.a.createElement("div", {className: "id14_shadow"}), C.a.createElement("div", {className: "id13_shadow"}), C.a.createElement("div", {className: "id12_shadow"}), C.a.createElement("div", {className: "id11_shadow"}), C.a.createElement("div", {className: "id10_shadow"}), C.a.createElement("div", {className: "id9_shadow"}), C.a.createElement("div", {className: "id8_note4"}), C.a.createElement("div", {className: "id7_note2"}), C.a.createElement("div", {className: "id6_note3"}), C.a.createElement("div", {className: "id5_note4"}), C.a.createElement("div", {className: "id4_note5"}), C.a.createElement("div", {className: "id3_note6"}), C.a.createElement("div", {className: "id2_note7"}), C.a.createElement("div", {className: "id1_note7"})), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "还记得"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(Ve.ellipsisText(o, 17), "的"), C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(a, 40), "》")), "吗"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "曾经很喜欢")), C.a.createElement("p", {className: "para f-animLineUp"}, "但最近似乎把它遗忘了")))
                }
            }]) && Kr(t.prototype, o), a && Kr(t, a), n
        }();
        h("K7Au");

        function ni(e) {
            return (ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function oi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ai(e, t) {
            return !t || "object" !== ni(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function ri(e, t, n) {
            return (ri = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = ii(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function ii(e) {
            return (ii = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ci(e, t) {
            return (ci = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var si = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = ai(this, ii(n).call(this))).pageName = "p10", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ci(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    ri(ii(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    ri(ii(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    ri(ii(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art10").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData().lsc, o = Ve.getUserData().rlc;
                    n < o && (o = n);
                    var a = null;
                    return a = 10 <= n && .5 <= o / n || n < 10 && .8 <= o / n ? C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "收藏的"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(n, "首")), "歌"), C.a.createElement("p", {className: "para f-animLineUp"}, "有", C.a.createElement("em", {className: "s-fcRed"}, "".concat(o, "首")), "是网易云音乐精心为".concat(e, "推荐的")), C.a.createElement("p", {className: "para f-animLineUp"}, " "), C.a.createElement("p", {className: "para f-animLineUp"}, "2019年，网易云音乐想要更懂".concat(e, "。"))) : C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年"), C.a.createElement("p", {className: "para f-animLineUp"}, "在".concat(e, "收藏的歌")), C.a.createElement("p", {className: "para f-animLineUp"}, "有", C.a.createElement("em", {className: "s-fcRed"}, "".concat(o, "首")), "是网易云音乐精心为".concat(e, "推荐的")), C.a.createElement("p", {className: "para f-animLineUp"}, " "), C.a.createElement("p", {className: "para f-animLineUp"}, "2018，还是网易云音乐最懂".concat(e, "。"))), C.a.createElement("div", {
                        className: "m-page m-page-10 f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "art j-art10"}, C.a.createElement("div", {className: "theBG"}), C.a.createElement("div", {className: "id16_note1png"}), C.a.createElement("div", {className: "id6_xiuzi"}, C.a.createElement("div", {className: "id11_dabi3_1"}, C.a.createElement("div", {className: "id8_xiaobi3_1"}, C.a.createElement("div", {className: "id7_hand"}, C.a.createElement("div", {className: "id15_note1png_1"}, C.a.createElement("div", {className: "id14_note1png"}))))), C.a.createElement("div", {className: "id13_dabi"}, C.a.createElement("div", {className: "id10_xiaobi"}, C.a.createElement("div", {className: "id7_hand"}, C.a.createElement("div", {className: "id15_note1png"}, C.a.createElement("div", {className: "id14_note1png"}))))), C.a.createElement("div", {className: "id11_dabi3"}, C.a.createElement("div", {className: "id8_xiaobi3"}, C.a.createElement("div", {className: "id7_hand"}, C.a.createElement("div", {className: "id15_note1png"}, C.a.createElement("div", {className: "id14_note1png"})))))), C.a.createElement("div", {className: "id3_p10-101png"}), C.a.createElement("div", {className: "id2_toupng"}, C.a.createElement("div", {className: "id5_toupngComp3png"})), C.a.createElement("div", {className: "id3_notematt"}), C.a.createElement("div", {className: "id2_note3png"}), C.a.createElement("div", {className: "id1_note2pngComp11png"})), a)
                }
            }]) && oi(t.prototype, o), a && oi(t, a), n
        }();
        h("M9HO");

        function ui(e) {
            return (ui = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function li(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function fi(e, t) {
            return !t || "object" !== ui(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function mi(e, t, n) {
            return (mi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = pi(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function pi(e) {
            return (pi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function hi(e, t) {
            return (hi = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var di = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = fi(this, pi(n).call(this))).pageName = "p11", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && hi(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    mi(pi(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    mi(pi(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    mi(pi(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art11").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "transitionIn", value: function () {
                    return !!mi(pi(n.prototype), "transitionIn", this).call(this) && (u()(".j-anim").addClass("z-anim"), this.animate(), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    return !!mi(pi(n.prototype), "transitionOut", this).call(this, e) && (this.stopAnimate(), u()(".j-anim").removeClass("z-anim"), !0)
                }
            }, {
                key: "animate", value: function () {
                    var e = this;
                    this.animTimer1 = setTimeout(function () {
                        u()(".j-anim").removeClass("z-anim"), e.animTimer2 = setTimeout(function () {
                            u()(".j-anim").addClass("z-anim")
                        }, 100), e.animate()
                    }, 3e3)
                }
            }, {
                key: "stopAnimate", value: function () {
                    this.animTimer1 = clearTimeout(this.animTimer1), this.animTimer2 = clearTimeout(this.animTimer2)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.cpc, a = n.cppc, r = n.cpsc, i = n.cprc,
                        c = n.cprpc, s = n.cprsc, u = null;
                    return u = Ve.canShowPlaylist() ? C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "做了"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(o, "个")), "歌单"), 1e4 < a && C.a.createElement("p", {className: "para f-animLineUp"}, "有", C.a.createElement("em", {className: "s-fcRed"}, "".concat(Ve.getPlayCount(a), "次")), "播放"), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, Ve.getSubCount(r)), "人喜欢了".concat(e, "的歌单")), C.a.createElement("p", {className: "para f-animLineUp"}, "感谢".concat(e, "在网易云音乐")), C.a.createElement("p", {className: "para"}, "创造了这些作品")) : C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "做了"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(i, "个")), "电台"), 1e4 < c && C.a.createElement("p", {className: "para f-animLineUp"}, "有", C.a.createElement("em", {className: "s-fcRed"}, "".concat(Ve.getPlayCount(c), "次")), "播放"), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed"}, Ve.getSubCount(s)), "人订阅了".concat(e, "的电台")), C.a.createElement("p", {className: "para f-animLineUp"}, "感谢".concat(e, "在网易云音乐")), C.a.createElement("p", {className: "para f-animLineUp"}, "创造了这些作品")), C.a.createElement("div", {
                        className: "m-page m-page-11 f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "art j-art11 j-anim"}, C.a.createElement("div", {className: "id20_beijing2"}), C.a.createElement("div", {className: "id19_beijing1"}), C.a.createElement("div", {className: "id17_yz2"}), C.a.createElement("div", {className: "id16_yz1"}), C.a.createElement("div", {className: "rope2"}), C.a.createElement("div", {className: "id11_zuoshou1"}), C.a.createElement("div", {className: "id10_youshou1"}), C.a.createElement("div", {className: "rope1"}), C.a.createElement("div", {className: "id3_yinfu3"}), C.a.createElement("div", {className: "id2_yinfu2"}), C.a.createElement("div", {className: "id1_yinfu1"})), u)
                }
            }]) && li(t.prototype, o), a && li(t, a), n
        }();
        h("ZLqY");

        function yi(e) {
            return (yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function bi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function vi(e, t) {
            return !t || "object" !== yi(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function gi(e, t, n) {
            return (gi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = wi(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function wi(e) {
            return (wi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ei(e, t) {
            return (Ei = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Si = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = vi(this, wi(n).call(this))).pageName = "p12", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ei(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    gi(wi(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".itm").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    gi(wi(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    gi(wi(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art12").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "transitionIn", value: function () {
                    return !!gi(wi(n.prototype), "transitionIn", this).call(this) && (u()(".j-renAni").addClass("z-renAni"), u()(".j-juanAni2").addClass("z-juanAni2"), this.animate(), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    return !!gi(wi(n.prototype), "transitionOut", this).call(this, e) && (this.stopAnimate(), u()(".j-renAni").removeClass("z-renAni"), u()(".j-juanAni2").removeClass("z-juanAni2"), !0)
                }
            }, {
                key: "animate", value: function () {
                    var e = this;
                    this.animTimer1 = setTimeout(function () {
                        u()(".j-renAni").removeClass("z-renAni"), u()(".j-juanAni2").removeClass("z-juanAni2"), e.animTimer2 = setTimeout(function () {
                            u()(".j-renAni").addClass("z-renAni"), u()(".j-juanAni2").addClass("z-juanAni2")
                        }, 100), e.animate()
                    }, 5e3)
                }
            }, {
                key: "stopAnimate", value: function () {
                    this.animTimer1 = clearTimeout(this.animTimer1), this.animTimer2 = clearTimeout(this.animTimer2)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.arpc, a = n.aan, r = n.arul,
                        i = Ve.getUserData().arstp;
                    10 < i.length && (i = i.slice(0, 10)), !l.a.isInNEMapp() && 5 < i.length && (i = i.slice(0, 5));
                    var c = B.a.directSuffix(r, {paramWidth: 375});
                    return C.a.createElement("div", {
                        className: "m-page m-page-12 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "pic"}, C.a.createElement("div", {
                        className: "in",
                        style: {backgroundImage: "url(".concat(c, ")")}
                    }), C.a.createElement("div", {className: "mask"})), C.a.createElement("div", {className: "j-art12 art"}, C.a.createElement("div", {className: "id28_yinfu"}), C.a.createElement("div", {className: "id26_yinfu-1"}), C.a.createElement("div", {className: "id22_line562"}), C.a.createElement("div", {className: "id21_line563"}), C.a.createElement("div", {className: "id20_line564"}), C.a.createElement("div", {className: "id24_line561 j-renAni"}), C.a.createElement("div", {className: "id19_p12 j-renAni"}), C.a.createElement("div", {className: "id1_gunzi j-renAni"})), C.a.createElement("div", {className: "id18_juian j-juanAni2"}), C.a.createElement("div", {className: "content"}, C.a.createElement("div", {className: "tt"}, C.a.createElement("h4", {className: "f-thide"}, "·".concat(a, "·")), C.a.createElement("h5", null, "是".concat(e, "的2018年度歌手")), C.a.createElement("h5", null, "共听了", C.a.createElement("em", {className: "s-fcRed f-fw1"}, o), "次")), C.a.createElement("ul", {className: "songs"}, i.map(function (e, t) {
                        return C.a.createElement("li", {
                            className: "itm f-animLineUp f-thide",
                            key: t
                        }, "《".concat(Ve.ellipsisText(e.sn, 20), "》 ").concat(e.pc, "次"))
                    }), C.a.createElement("li", {className: "itm f-animLineUp f-thide"}, "..."))))
                }
            }]) && bi(t.prototype, o), a && bi(t, a), n
        }();
        h("ePZe");

        function Oi(e) {
            return (Oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ni(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function _i(e, t) {
            return !t || "object" !== Oi(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function ki(e, t, n) {
            return (ki = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ti(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Ti(e) {
            return (Ti = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ji(e, t) {
            return (ji = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Pi = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = _i(this, Ti(n).call(this))).pageName = "p13", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ji(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    ki(Ti(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    ki(Ti(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    ki(Ti(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art13").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData().pst, o = Ve.timeDelta(n), a = "";
                    return 0 < o.hour ? a = "".concat(8760 <= o.hour ? "999+" : o.hour, "小时") : 0 < o.min && (a = "".concat(o.min, "分钟")), C.a.createElement("div", {
                        className: "m-page m-page-13 f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "j-art13 art"}, C.a.createElement("div", {className: "id16_p13bg"}), C.a.createElement("div", {className: "id9_wave5"}), C.a.createElement("div", {className: "id8_wave4"}), C.a.createElement("div", {className: "id7_boy1"}), C.a.createElement("div", {className: "id6_wave3"}), C.a.createElement("div", {className: "id5_wave2"}), C.a.createElement("div", {className: "id4_wave1"}), C.a.createElement("div", {className: "id3_boy4"}), C.a.createElement("div", {className: "id2_yinfu"}), C.a.createElement("div", {className: "id1_yinfu2"})), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "这一年"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "有"), C.a.createElement("em", {className: "s-fcRed"}, a), "与音乐相伴"), C.a.createElement("p", {className: "para f-animLineUp"}, "在音乐的世界"), C.a.createElement("p", {className: "para f-animLineUp"}, "遇见你真好")))
                }
            }]) && Ni(t.prototype, o), a && Ni(t, a), n
        }();
        h("bQMk");

        function Ci(e) {
            return (Ci = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ri(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Di(e, t) {
            return !t || "object" !== Ci(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function xi(e, t, n) {
            return (xi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Mi(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Mi(e) {
            return (Mi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ui(e, t) {
            return (Ui = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Ii = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Di(this, Mi(t).call(this))).state = {isCreatePlaylist: !1}, e.pageName = "p14", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ui(e, t)
            }(t, Ha), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var n = this;
                    xi(Mi(t.prototype), "componentDidMount", this).call(this);
                    var e = (Ve.getUserData().stp || []).map(function (e) {
                        return e.sid
                    });
                    Je.createTopPlaylist(e).then(function (e) {
                        e && n.setState({isCreatePlaylist: !0});
                        var t = .2;
                        u()(n.container).find(".para").forEach(function (e) {
                            u()(e).css({
                                webkitTransitionDelay: "".concat(t, "s"),
                                transitionDelay: "".concat(t, "s")
                            }), t += .1
                        })
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    xi(Mi(t.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    xi(Mi(t.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art14").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData().stp, o = this.state.isCreatePlaylist;
                    return C.a.createElement("div", {
                        className: "m-page m-page-14 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "art j-art14"}, C.a.createElement("div", {className: "lines"}), C.a.createElement("div", {className: "manwrap"}, C.a.createElement("div", {className: "shoubi"}), C.a.createElement("div", {className: "man"}), C.a.createElement("div", {className: "tou"})), C.a.createElement("div", {className: "notes"})), C.a.createElement("div", {className: "content"}, C.a.createElement("h4", {className: "tt para f-animLineUp"}, "2018，这些是".concat(e, "最爱的歌")), C.a.createElement("div", {className: "paras"}, n.map(function (e, t) {
                        return C.a.createElement("p", {
                            className: "para f-animLineUp",
                            key: t
                        }, C.a.createElement("span", {className: "f-trunk"}, "《".concat(e.sn)))
                    }), o && C.a.createElement("div", {className: "tip para f-animLineUp"}, C.a.createElement("p", null, "已保存为你的年度歌单"), C.a.createElement("p", null, "请在你的歌单列表中查看")))))
                }
            }]) && Ri(n.prototype, o), a && Ri(n, a), t
        }();
        h("qXDx");

        function Li(e) {
            return (Li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ai(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Hi(e, t) {
            return !t || "object" !== Li(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function zi(e, t, n) {
            return (zi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = qi(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function qi(e) {
            return (qi = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Bi(e, t) {
            return (Bi = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Wi = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = Hi(this, qi(n).call(this))).pageName = "p15", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Bi(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    zi(qi(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    zi(qi(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    zi(qi(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art15").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.ratpc, a = n.rann, r = n.rapc,
                        i = Ve.timeDelta(o), c = Ve.timeDelta(r), s = 8760 <= i.hour ? "999+" : i.hour,
                        u = 8760 <= c.hour ? "999+" : c.hour;
                    return C.a.createElement("div", {
                        className: "m-page m-page-15 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "art j-art15"}, C.a.createElement("div", {className: "id5_16bgpng"}), C.a.createElement("div", {className: "id1_blx"}), C.a.createElement("div", {className: "notes"}), C.a.createElement("div", {className: "ren"})), C.a.createElement("div", {className: "paras"}, C.a.createElement("p", {className: "para f-animLineUp"}, "今年"), C.a.createElement("p", {className: "para f-animLineUp"}, "云村的电台陪伴".concat(e, "度过了"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(s, "个小时"))), C.a.createElement("p", {className: "para f-animLineUp"}, C.a.createElement("em", {className: "s-fcRed f-trunk"}, "《".concat(a))), C.a.createElement("p", {className: "para f-animLineUp"}, "是".concat(e, "最爱的电台")), 0 < (0 < c.hour || c.min) && C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "花了"), C.a.createElement("em", {className: "s-fcRed"}, 0 < c.hour ? "".concat(u, "个小时") : "".concat(c.min, "分钟")), "收听"), C.a.createElement("p", {className: "para f-animLineUp"}, "有温度的声音"), C.a.createElement("p", {className: "para f-animLineUp"}, "就好似时光的慰藉")))
                }
            }]) && Ai(t.prototype, o), a && Ai(t, a), n
        }();
        h("HRug");

        function Gi(e) {
            return (Gi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Fi(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Vi(e, t) {
            return !t || "object" !== Gi(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Yi(e, t, n) {
            return (Yi = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ji(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Ji(e) {
            return (Ji = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Qi(e, t) {
            return (Qi = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Ki = /(\d{4})-?(\d{2})-?(\d{2})/;

        function Xi(e) {
            var t = Ki.exec(e);
            return t ? {year: t[1], month: parseInt(t[2], 10), day: parseInt(t[3], 10)} : null
        }

        var Zi = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = Vi(this, Ji(n).call(this))).pageName = "p16", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Qi(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    Yi(Ji(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    Yi(Ji(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    Yi(Ji(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-cdisc").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.vd, a = n.vpt, r = n.vpc, i = n.vsac,
                        c = n.vsbd, s = n.vsn, u = n.vsan, l = n.vabd, f = n.van, m = n.vaan, p = n.vrc, h = n.vrabd,
                        d = n.vran, y = n.vraan, b = Xi(o) || {year: "", month: "", day: ""},
                        v = "".concat(b.year, "年").concat(b.month, "月").concat(b.day, "日"),
                        g = "0" === a ? "黑胶会员" : "会员包", w = "0" === a ? "成为" : "购买", E = null;
                    0 < r && (E = C.a.createElement("p", {className: "para para-1 f-animLineUp"}, "一共收听了", C.a.createElement("em", {className: "s-fcRed"}, "".concat(r, "次")), "无损单曲"));
                    var S = null, O = !1;
                    if (0 < i || 0 < p) {
                        O = !0;
                        var N = c && s && u, _ = l && f && m, k = h && d && y, T = Xi(c), j = Xi(l), P = Xi(h);
                        S = C.a.createElement("div", {className: "paras paras-2"}, C.a.createElement("p", {className: "para para-1 f-animLineUp"}, "".concat(e, "在").concat(v).concat(w), C.a.createElement("em", {className: "s-fcRed"}, g)), E, C.a.createElement("p", {className: "para para-2 para-2-1 f-animLineUp"}, "今年"), 0 < i && C.a.createElement("p", {className: "para para-2 para-2-1 f-animLineUp"}, "".concat(e, "为"), C.a.createElement("em", {className: "s-fcRed"}, "数字专辑"), "和", C.a.createElement("em", {className: "s-fcRed"}, "单曲"), "贡献了", C.a.createElement("em", {className: "s-fcRed"}, Number(i).toFixed(2)), "元"), N && C.a.createElement("p", {className: "para para-2 para-2-1 f-animLineUp"}, "".concat(T.month, "月").concat(T.day, "日")), N && C.a.createElement("p", {className: "para para-2 para-2-1 f-animLineUp"}, "".concat(e, "购买了").concat(Ve.ellipsisText(u, 20), "的单曲《").concat(Ve.ellipsisText(s, 40), "》")), _ && C.a.createElement("p", {className: "para para-2 para-2-1 f-animLineUp"}, "".concat(j.month, "月").concat(j.day, "日")), _ && C.a.createElement("p", {className: "para para-2 para-2-1 f-animLineUp"}, "".concat(e, "购买了").concat(Ve.ellipsisText(m, 20), "的专辑《").concat(Ve.ellipsisText(f, 40), "》")), 0 < p && C.a.createElement("p", {className: "para para-2 para-2-2 f-animLineUp"}, "今年".concat(e, "在"), C.a.createElement("em", {className: "s-fcRed"}, "电台"), "一共贡献了", C.a.createElement("em", {className: "s-fcRed"}, Number(p).toFixed(2)), "元"), k && C.a.createElement("p", {className: "para para-2 para-2-2 f-animLineUp"}, "".concat(P.month, "月").concat(P.day, "日 ").concat(e, "购买了").concat(Ve.ellipsisText(y, 10), "的电台《").concat(Ve.ellipsisText(d, 40), "》")))
                    } else S = C.a.createElement("div", {className: "paras paras-1 "}, C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "在").concat(v)), C.a.createElement("p", {className: "para f-animLineUp"}, w, C.a.createElement("em", {className: "s-fcRed"}, g)), E, C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "的习惯是追求极致")), C.a.createElement("p", {className: "para f-animLineUp"}, "包括在音乐的王国"));
                    return C.a.createElement("div", {
                        className: "m-page m-page-16 f-page", ref: function (e) {
                            t.container = e
                        }, onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "speedline"}), C.a.createElement("div", {className: "j-cdisc cdisc ".concat(O ? "" : "z-notbuy")}, C.a.createElement("div", {className: "id5_discman"}, C.a.createElement("div", {className: "id11_heijiao"}, C.a.createElement("div", {className: "id10_youtui3"}, C.a.createElement("div", {className: "id9_youtui2"}, C.a.createElement("div", {className: "id8_youtui1pngComp1"}))), C.a.createElement("div", {className: "id7_zuotui3"}, C.a.createElement("div", {className: "id6_zuotui2"}, C.a.createElement("div", {className: "id5_zuotui1"}, C.a.createElement("div", {className: "id3_shenti"}, C.a.createElement("div", {className: "id4_shou2"})), C.a.createElement("div", {className: "id3_shenti"}, C.a.createElement("div", {className: "id2_shou1"}), C.a.createElement("div", {className: "id1_tou"})))))), C.a.createElement("div", {className: "id4_xiaoyinfu"}), C.a.createElement("div", {className: "id3_yinfu3"}))), S)
                }
            }]) && Fi(t.prototype, o), a && Fi(t, a), n
        }();
        h("plDS");

        function $i(e) {
            return ($i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ec(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function tc(e, t) {
            return !t || "object" !== $i(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function nc(e, t, n) {
            return (nc = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = oc(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function oc(e) {
            return (oc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ac(e, t) {
            return (ac = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var rc = function (e) {
            function n() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (e = tc(this, oc(n).call(this))).pageName = "p17", e.logoEvent = mt, e.chatEvent = ht, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ac(e, t)
            }(n, Ha), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    nc(oc(n.prototype), "componentDidMount", this).call(this);
                    var t = .2;
                    u()(this.container).find(".para").forEach(function (e) {
                        u()(e).css({
                            webkitTransitionDelay: "".concat(t, "s"),
                            transitionDelay: "".concat(t, "s")
                        }), t += .1
                    }), this.onResize()
                }
            }, {
                key: "onSwipeUp", value: function () {
                    nc(oc(n.prototype), "onSwipeUp", this).call(this), this.transitionOut()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    nc(oc(n.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "onResize", value: function () {
                    var e = window.innerWidth / 750;
                    u()(".j-art17").css({webkitTransform: "scale(".concat(e, ")"), transform: "scale(".concat(e, ")")})
                }
            }, {
                key: "transitionIn", value: function () {
                    return !!nc(oc(n.prototype), "transitionIn", this).call(this) && (u()(".j-anim").addClass("z-anim"), this.animate(), !0)
                }
            }, {
                key: "transitionOut", value: function (e) {
                    return !!nc(oc(n.prototype), "transitionOut", this).call(this, e) && (this.stopAnimate(), u()(".j-anim").removeClass("z-anim"), !0)
                }
            }, {
                key: "animate", value: function () {
                    var e = this;
                    this.animTimer1 = setTimeout(function () {
                        u()(".j-anim").removeClass("z-anim"), e.animTimer2 = setTimeout(function () {
                            u()(".j-anim").addClass("z-anim")
                        }, 100), e.animate()
                    }, 4950)
                }
            }, {
                key: "stopAnimate", value: function () {
                    this.animTimer1 = clearTimeout(this.animTimer1), this.animTimer2 = clearTimeout(this.animTimer2)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = Ve.me(), n = Ve.getUserData(), o = n.crlc, a = n.hcc, r = n.mln, i = n.jcz,
                        c = n.mlc, s = null, u = !1, l = o;
                    return 999 < o && (l = "999+"), s = 0 < a ? (u = !0, C.a.createElement("div", {className: "paras paras-2 "}, C.a.createElement("p", {className: "para para-1 f-animLineUp"}, "今年"), C.a.createElement("p", {className: "para para-1 f-animLineUp"}, "".concat(e, "的评论一共收获了"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(l, "个")), "赞"), C.a.createElement("p", {className: "para para-1 f-animLineUp"}, "上过", C.a.createElement("em", {className: "s-fcRed"}, "".concat(a, "次")), "精彩评论"), 10 <= i && C.a.createElement("div", null, C.a.createElement("p", {className: "para para-2 f-animLineUp"}, "".concat(e, "在"), C.a.createElement("em", {className: "s-fcRed"}, "《".concat(Ve.ellipsisText(r, 16), "》")), "下面的评论"), C.a.createElement("p", {className: "para para-2 f-animLineUp"}, "获得了", C.a.createElement("em", {className: "s-fcRed"}, "".concat(i, "个赞"))), C.a.createElement("p", {className: "para para-2 f-animLineUp"}, "引发了很多人的共鸣："), C.a.createElement("p", {className: "para para-2 f-trunk f-animLineUp"}, "“".concat(c))))) : C.a.createElement("div", {className: "paras paras-1 "}, C.a.createElement("p", {className: "para f-animLineUp"}, "今年"), C.a.createElement("p", {className: "para f-animLineUp"}, "".concat(e, "的评论一共收获了"), C.a.createElement("em", {className: "s-fcRed"}, "".concat(l, "个")), "赞"), C.a.createElement("p", {className: "para f-animLineUp"}, "陌生人的共鸣"), C.a.createElement("p", {className: "para f-animLineUp"}, "总是让人欣喜")), C.a.createElement("div", {
                        className: "m-page m-page-17 f-page",
                        ref: function (e) {
                            t.container = e
                        },
                        onClick: this.onSwipeUp
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "art j-art17 ".concat(u ? "" : "z-nohot")}, C.a.createElement("div", {className: "aixin j-anim"}), C.a.createElement("div", {className: "id7_heartpng j-anim"}), C.a.createElement("div", {className: "id6_handpng j-anim"}), C.a.createElement("div", {className: "id4_bodypng"}), C.a.createElement("div", {className: "id3_headpng"})), s)
                }
            }]) && ec(t.prototype, o), a && ec(t, a), n
        }(), ic = (h("dBWJ"), function () {
            return C.a.createElement("div", {className: "j-fullpage m-endfullbg f-fpic"}, C.a.createElement("div", {className: "star star-1"}), C.a.createElement("div", {className: "star star-2"}), C.a.createElement("div", {className: "star star-3"}), C.a.createElement("div", {className: "star star-4"}), C.a.createElement("div", {className: "star star-5"}), C.a.createElement("div", {className: "star star-6"}), C.a.createElement("div", {className: "man"}))
        });
        h("oXMO");

        function cc(e) {
            return (cc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function sc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function uc(e, t) {
            return !t || "object" !== cc(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function lc(e, t, n) {
            return (lc = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = fc(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function fc(e) {
            return (fc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function mc(e, t) {
            return (mc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var pc = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = uc(this, fc(t).call(this))).state = {onlineCount: 0}, e.pageName = "matchinited", e.biPageExtra = {style: 1}, e.logoEvent = ft, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && mc(e, t)
            }(t, Ha), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    lc(fc(t.prototype), "componentDidMount", this).call(this), this.onResize()
                }
            }, {
                key: "onSwipeDown", value: function () {
                    lc(fc(t.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "transitionIn", value: function () {
                    return !!lc(fc(t.prototype), "transitionIn", this).call(this) && (this.onResize(), !0)
                }
            }, {
                key: "onResize", value: function () {
                    Ve.resizeFullPage()
                }
            }, {
                key: "createEl", value: function () {
                    var t = this;
                    return C.a.createElement("div", {
                        className: "m-page m-page-end f-page", ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "bg f-page"}, C.a.createElement(ic, null)), C.a.createElement("div", {className: "ctt"}, C.a.createElement("h4", {className: "tt"}, "在云村的", C.a.createElement("span", {className: "s-fcRed"}, "6亿人"), "中", C.a.createElement("br", null), "寻找和你灵魂最匹配的那个人"), C.a.createElement("p", {className: "tip"}, "将依据你的听歌品味进行匹配")), C.a.createElement("div", {className: "cbutton"}, C.a.createElement(la, {
                        from: jt,
                        className: "button"
                    }, "点击开始匹配")))
                }
            }]) && sc(n.prototype, o), a && sc(n, a), t
        }();
        h("1FdU");

        function hc(e) {
            return (hc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function dc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function yc(e, t) {
            return !t || "object" !== hc(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function bc(e, t, n) {
            return (bc = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = vc(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function vc(e) {
            return (vc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function gc(e, t) {
            return (gc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function wc() {
            Ve.wakeup()
        }

        var Ec = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = yc(this, vc(t).call(this))).state = {totalCount: 0}, e.pageName = "p20", e.logoEvent = ft, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && gc(e, t)
            }(t, Ha), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var n = this;
                    bc(vc(t.prototype), "componentDidMount", this).call(this), xe.getOnlineCount().then(function (e) {
                        var t = e.totalCount;
                        n.setState({totalCount: t})
                    })
                }
            }, {
                key: "onSwipeDown", value: function () {
                    bc(vc(t.prototype), "onSwipeDown", this).call(this), this.transitionOut(!0)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = this.state.totalCount;
                    return C.a.createElement("div", {
                        className: "m-page m-page-end-out f-page", ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "content"}, C.a.createElement("div", {className: "tt"}, "依据你的听歌品味", C.a.createElement("br", null), "寻找与你灵魂最相似的人"), C.a.createElement("p", {className: "tip"}, "新用户添加5首红心单曲", C.a.createElement("br", null), "即可参与匹配·"), C.a.createElement("div", {className: "pic"}), C.a.createElement("a", {
                        className: "button",
                        href: "javascript:;",
                        onClick: wc
                    }, "点击开始匹配"), 5e3 <= e && C.a.createElement("p", null, "已有", C.a.createElement("span", {className: "s-fcRed"}, "".concat(e, "人")), "参与")))
                }
            }]) && dc(n.prototype, o), a && dc(n, a), t
        }();

        function Sc(e) {
            return (Sc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Oc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Nc(e, t) {
            return !t || "object" !== Sc(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function _c(e, t, n) {
            return (_c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = kc(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function kc(e) {
            return (kc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Tc(e, t) {
            return (Tc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var jc = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Nc(this, kc(t).call(this))).leaveTime = 0, e.logoEvent = pt, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Tc(e, t)
            }(t, Ha), n = t, (o = [{
                key: "transitionIn", value: function () {
                    return !!_c(kc(t.prototype), "transitionIn", this).call(this) && (setTimeout(function () {
                        nn.emit(Et), nn.emit(wt)
                    }, 100), !0)
                }
            }]) && Oc(n.prototype, o), a && Oc(n, a), t
        }(), Pc = (h("xLGR"), h("+nVp")), Cc = h.n(Pc), Rc = h("a7Z6"), Dc = h.n(Rc), xc = h("6SUK"), Mc = h.n(xc);

        function Uc(e) {
            return (Uc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ic(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Lc(e, t) {
            return !t || "object" !== Uc(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Ac(e) {
            return (Ac = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Hc(e, t) {
            return (Hc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var zc = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Lc(this, Ac(t).call(this))).state = {
                    qrClass: "",
                    qrcodeURL: "",
                    qrcodeTitle: "",
                    showOpenText: !0
                }, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Hc(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var o = this;
                    /z-noqr/.test(document.documentElement.className) || this.getQRCodeURL().then(function (e) {
                        var t = e.url, n = e.text;
                        o.setState({qrcodeURL: t, qrcodeTitle: n})
                    }), nn.on(ft, function () {
                        setTimeout(function () {
                            o.setState({qrClass: ""})
                        }, 20)
                    }), nn.on(mt, function () {
                        setTimeout(function () {
                            o.setState({qrClass: "z-dark"})
                        }, 20)
                    }), nn.on(pt, function () {
                        setTimeout(function () {
                            o.setState({qrClass: "z-light"})
                        }, 20)
                    })
                }
            }, {
                key: "getQRCodeURL", value: function () {
                    var e = Ve.memo(G), a = Ve.getShareLink(e);
                    return new Promise(function (n, o) {
                        Ke.a.toDataURL(a, {
                            margin: 0,
                            errorCorrectionLevel: "Q",
                            width: 150,
                            height: 150
                        }, function (e, t) {
                            e ? o(e) : n({url: t, text: a})
                        })
                    })
                }
            }, {
                key: "getOpenText", value: function () {
                    var e = "";
                    switch (this.props.textType) {
                        case 2:
                            e = Cc.a;
                            break;
                        case 3:
                            e = Dc.a;
                            break;
                        case 1:
                        default:
                            e = Mc.a
                    }
                    return C.a.createElement("div", {className: "open-text"}, C.a.createElement("img", {src: e}))
                }
            }, {
                key: "render", value: function () {
                    var e = this.state, t = e.qrClass, n = e.qrcodeURL, o = e.qrcodeTitle, a = e.showOpenText,
                        r = this.getOpenText();
                    return n && t ? a ? r : C.a.createElement("div", {className: "m-reportqr ".concat(t)}, C.a.createElement("div", {className: "qr"}, C.a.createElement("img", {
                        src: n,
                        className: "pic",
                        title: o
                    }), C.a.createElement("div", {className: "icn"})), C.a.createElement("div", {className: "txt"})) : null
                }
            }]) && Ic(n.prototype, o), a && Ic(n, a), t
        }();
        zc.propTypes = {textType: S.a.number};
        h("gfDR");

        function qc(e) {
            return (qc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Bc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Wc(e, t) {
            return !t || "object" !== qc(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Gc(e) {
            return (Gc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Fc(e, t) {
            return (Fc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Vc = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Wc(this, Gc(t).call(this))).state = {showChat: !0}, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Fc(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    nn.on(ht, function () {
                        setTimeout(function () {
                            e.setState({showChat: !0})
                        }, 20)
                    }), nn.on(dt, function () {
                        setTimeout(function () {
                            e.setState({showChat: !1})
                        }, 20)
                    })
                }
            }, {
                key: "showChatModule", value: function () {
                    nn.emit(wt), nn.emit(Et)
                }
            }, {
                key: "render", value: function () {
                    var e = null, t = this.state.showChat;
                    return Oe.memo(Y) && t && (e = C.a.createElement("div", {
                        className: "m-chatbar",
                        onClick: this.showChatModule
                    })), e
                }
            }]) && Bc(n.prototype, o), a && Bc(n, a), t
        }();
        h("KVXd");

        function Yc(e) {
            return (Yc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Jc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Qc(e) {
            return (Qc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Kc(e, t) {
            return (Kc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Xc(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Zc = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Qc(o).call(this)) || "object" !== Yc(n) && "function" != typeof n ? Xc(t) : n).createPages(), e.state = {
                    current: 0,
                    next: 1,
                    isTransition: !1
                }, e.onTransition = e.onTransition.bind(Xc(Xc(e))), e.onLeave = e.onLeave.bind(Xc(Xc(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Kc(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "onTransition", value: function (e) {
                    var t = this.state.current;
                    this.setState({current: t, next: t + (e ? -1 : 1), isTransition: !0})
                }
            }, {
                key: "onLeave", value: function (e) {
                    var t = this.state.next;
                    this.setState({current: t, next: t + (e ? -1 : 1), isTransition: !1})
                }
            }, {
                key: "createPages", value: function () {
                    this.pages = [Va], Ve.canShowPage02() && this.pages.push(ir), Ve.canShowPage01() && this.pages.push($a), Ve.canShowPage03() && this.pages.push(pr), Ve.canShowPage04() && this.pages.push(wr), Ve.canShowPage05() && this.pages.push(Tr), Ve.canShowPage06() && this.pages.push(Mr), Ve.canShowPage07() && this.pages.push(qr), Ve.canShowPage08() && this.pages.push(Jr), Ve.canShowPage09() && this.pages.push(ti), Ve.canShowPage15() && this.pages.push(Wi), Ve.canShowPage16() && this.pages.push(Zi), Ve.canShowPage17() && this.pages.push(rc), Ve.canShowPage10() && this.pages.push(si), Ve.canShowPage11() && this.pages.push(di), Ve.canShowPage12() && this.pages.push(Si), Ve.canShowPage13() && this.pages.push(Pi), Ve.canShowPage14() && this.pages.push(Ii);
                    var e = Ve.memo(Y);
                    l.a.isInNEMapp() ? e ? this.pages.push(jc) : this.pages.push(pc) : this.pages.push(Ec)
                }
            }, {
                key: "devPages", value: function () {
                    this.pages = []
                }
            }, {
                key: "componentDidMount", value: function () {
                    var e = this;
                    nn.on(gt, function () {
                        setTimeout(function () {
                            e.setState({current: 0, next: 1, isTransition: !1})
                        }, 15)
                    })
                }
            }, {
                key: "render", value: function () {
                    var n = this, e = this.state, o = e.current, a = e.next, r = e.isTransition, i = this.pages;
                    return C.a.createElement("div", {className: "m-reportcontent f-page"}, i.map(function (e, t) {
                        return t === o || t === o + 1 || t === o - 1 ? C.a.createElement(e, {
                            key: "page".concat(t),
                            current: i[o],
                            next: i[a],
                            isTransition: r,
                            onTransition: n.onTransition,
                            onLeave: n.onLeave
                        }) : null
                    }), C.a.createElement(zc, null), C.a.createElement(Vc, null))
                }
            }]) && Jc(t.prototype, n), a && Jc(t, a), o
        }();
        h("oJhw");

        function $c(e) {
            return ($c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function es(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ts(e, t) {
            return !t || "object" !== $c(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function ns(e) {
            return (ns = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function os(e, t) {
            return (os = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function as() {
            Oe.wakeup();
            var e = Oe.memo($);
            Oe.biLogClick(e || "homepage", "viewmyreport")
        }

        var rs = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ts(this, ns(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && os(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "render", value: function () {
                    var e = null;
                    return l.a.isInNEMapp() || (e = C.a.createElement("div", {className: "m-btmbar"}, C.a.createElement("div", {className: "inner f-bd"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "btn",
                        onClick: as
                    }, "查看我的年度报告")))), e
                }
            }]) && es(n.prototype, o), a && es(n, a), t
        }();
        h("XkRB"), h("5w+e");

        function is(e) {
            return (is = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function cs(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function ss(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function us(e, t) {
            return !t || "object" !== is(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function ls(e, t, n) {
            return (ls = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = fs(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function fs(e) {
            return (fs = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ms(e, t) {
            return (ms = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var ps = function (e) {
            function n() {
                var e;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n);
                return (e = us(this, fs(n).call(this))).state = {
                    isFetching: !0,
                    isLoading: !0,
                    isShowError: !1,
                    isShowEmpty: !1
                }, e.commonEvents = {from: jt, show: gt, hide: wt}, e
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ms(e, t)
            }(n, un), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    ls(fs(n.prototype), "componentDidMount", this).call(this)
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    ls(fs(n.prototype), "componentDidUpdate", this).call(this);
                    var e = this.props.initShow, t = this.state.transitionIn;
                    (e || t) && (this.fetchUserData(), this.preload())
                }
            }, {
                key: "show", value: function () {
                    ls(fs(n.prototype), "show", this).call(this), u()("#j-bgm")[0].play(), u()("#j-bgm")[0].muted = !1, this.updateShareData(), this.preload()
                }
            }, {
                key: "preload", value: function () {
                    var e = this;
                    this.state.isLoading && tt.preload(cs($e.common).concat(cs($e.cover), cs($e.p01), cs($e.p02)), !0).then(function () {
                        e.setState({isLoading: !1})
                    })
                }
            }, {
                key: "updateShareData", value: function (e) {
                    if (e || this.state.isShowEmpty) {
                        var t = Ve.memo(W);
                        t && m.a.updateShareData({
                            title: "".concat(Ve.ellipsisText(Ve.memo(V), 12), "邀请你体验一种神奇有趣的聊天"),
                            subTitle: "点击这里！解锁".concat(Ve.ellipsisText(Ve.memo(V), 12), "刚选的聊天背景"),
                            text: "".concat(Ve.ellipsisText(Ve.memo(V), 12), "邀请你体验一种神奇有趣的聊天"),
                            link: Ve.getShareChatLink(t),
                            picUrl: Ve.memo(F)
                        })
                    } else m.a.updateShareData({
                        title: "2018，我的网易云音乐听歌日记",
                        subTitle: "点击查看，我的网易云音乐年度听歌报告",
                        text: "2018，我的网易云音乐听歌日记",
                        link: Ve.getShareLink(Ve.memo(G)),
                        picUrl: "https://p1.music.126.net/uLDm27B4bC_kKSD8le3WwA==/109951163754269117.jpg"
                    })
                }
            }, {
                key: "hide", value: function () {
                    ls(fs(n.prototype), "hide", this).call(this), u()("#j-bgm")[0].pause()
                }
            }, {
                key: "fetchUserData", value: function () {
                    var t = this;
                    this.isFetchedUserData || (this.isFetchedUserData = !0, Ve.fetchUserData().then(function (e) {
                        e && e.ouid && Ve.memo(W, e.ouid), Ve.memo(V, e.nkn || ""), Ve.memo(F, e.aul || "https://p1.music.126.net/uLDm27B4bC_kKSD8le3WwA==/109951163754269117.jpg"), e && e.uid && Ve.memo(G, e.uid), e && e.uid && Ve.hasUserData() ? (t.setState({isFetching: !1}), t.updateShareData()) : (t.setState({
                            isFetching: !1,
                            isShowEmpty: !0
                        }), t.updateShareData(!0))
                    }).catch(function (e) {
                        -1 < [301, 302, 404, 400].indexOf(e.code) ? t.setState({
                            isFetching: !1,
                            isShowEmpty: !0
                        }) : t.setState({isFetching: !1, isShowError: !0})
                    }))
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = this.state, n = e.isFetching, o = e.isShowError, a = e.isShowEmpty;
                    if (e.isLoading || n) return null;
                    if (tt.hide(), o) return C.a.createElement(_n, null);
                    var r = null;
                    return r = a ? l.a.isInNEMapp() ? C.a.createElement(Ea, null) : C.a.createElement(ja, null) : C.a.createElement(Zc, null), C.a.createElement("div", {
                        className: "m-module m-module-report",
                        ref: function (e) {
                            t.container = e
                        }
                    }, r, C.a.createElement(bn, null), C.a.createElement(rs, null))
                }
            }]) && ss(t.prototype, o), a && ss(t, a), n
        }(), hs = (h("zyiN"), h("jJhB")), ds = h.n(hs), ys = h("H45Z"), bs = h.n(ys);

        function vs(e) {
            return (vs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function gs(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ws(e, t) {
            return !t || "object" !== vs(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Es(e) {
            return (Es = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ss(e, t) {
            return (Ss = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Os = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = ws(this, Es(t).call(this))).state = {onlineCount: 0}, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ss(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var n = this;
                    xe.getOnlineCount().then(function (e) {
                        var t = e.onlineCount;
                        n.setState({onlineCount: t})
                    })
                }
            }, {
                key: "render", value: function () {
                    return C.a.createElement("div", {className: "m-ChatButton"}, 5e3 < this.state.onlineCount ? C.a.createElement("div", {
                        className: "m-online  u-icon",
                        style: {display: "none"}
                    }, "在线：".concat(this.state.onlineCount, "人")) : null, C.a.createElement("div", {
                        className: "m-checkReport u-icon",
                        onClick: this.props.onReadReport
                    }, C.a.createElement("img", {src: bs.a})), C.a.createElement("div", {
                        className: "m-match u-icon",
                        onClick: function () {
                            nn.emit(Nt)
                        }
                    }, C.a.createElement(la, {
                        from: this.props.commonEvents.from,
                        onClick: this.props.onClickMatch
                    })), C.a.createElement("div", {
                        className: "m-share  u-icon",
                        onClick: this.props.onShare
                    }, C.a.createElement("img", {src: ds.a})))
                }
            }]) && gs(n.prototype, o), a && gs(n, a), t
        }();
        Os.propTypes = {
            commonEvents: S.a.objectOf(S.a.string).isRequired,
            onClickMatch: S.a.func,
            onReadReport: S.a.func.isRequired,
            onShare: S.a.func.isRequired
        }, Os.defaultProps = {onClickMatch: Oe.noop};
        var Ns = h("ANjH"), _s = "ADD_USER";
        var ks = Object(Ns.a)(function () {
            var e, t, n, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                a = 1 < arguments.length ? arguments[1] : void 0, r = a.info;
            switch (a.type) {
                case _s:
                    return Object.assign({}, o, (e = {}, t = r.userId, n = r, t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e));
                default:
                    return o
            }
        });
        h("ef13");

        function Ts(e) {
            return (Ts = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function js(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ps(e) {
            return (Ps = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Cs(e, t) {
            return (Cs = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Rs(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Ds = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Ps(o).call(this)) || "object" !== Ts(n) && "function" != typeof n ? Rs(t) : n).state = {show: !0}, e.close = e.close.bind(Rs(Rs(e))), e.dispose = e.dispose.bind(Rs(Rs(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Cs(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "shareTheme", value: function (e) {
                    var t = this.props, n = t.msgto, o = t.lastwith;
                    o ? Oe.biLogClick("chatend", "share", {
                        activitygender: 1 === Oe.memo(X) ? "male" : "female",
                        activityalg: Oe.memo(ae),
                        background: e
                    }) : Oe.biLogClick("matchinited", "share", {
                        activitygender: 1 === Oe.memo(X) ? "male" : "female",
                        background: e
                    }), m.a.updateShareData({
                        title: "".concat(Oe.ellipsisText(Oe.memo(V), 12), "邀请你体验一种神奇有趣的聊天"),
                        subTitle: "点击这里！解锁".concat(Oe.ellipsisText(Oe.memo(V), 12), "刚选的聊天背景"),
                        text: "".concat(Oe.ellipsisText(Oe.memo(V), 12), "邀请你体验一种神奇有趣的聊天"),
                        link: Oe.getShareChatLink(n, o, e),
                        picUrl: Oe.memo(F)
                    }), Oe.share(), this.close()
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.show, t = ks.getState()[this.props.msgto];
                    return C.a.createElement(w.CSSTransition, {
                        in: e,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer-sharechat"}, C.a.createElement("div", {className: "content"}, C.a.createElement("h4", {className: "tt f-thide"}, "Hi ".concat(t.nickname, ":")), C.a.createElement("p", {className: "sub"}, "分享给站外好友，并点开你分享的那条链接，即可解锁聊天背景。"), C.a.createElement("ul", {className: "styles f-cb"}, C.a.createElement("li", {className: "itm"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "f-blk",
                        onClick: this.shareTheme.bind(this, 1)
                    }, "经典")), C.a.createElement("li", {className: "itm"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "f-blk",
                        onClick: this.shareTheme.bind(this, 2)
                    }, "电音")), C.a.createElement("li", {className: "itm"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "f-blk",
                        onClick: this.shareTheme.bind(this, 3)
                    }, "国风")), C.a.createElement("li", {className: "itm"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "f-blk",
                        onClick: this.shareTheme.bind(this, 4)
                    }, "民谣"))), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "close",
                        onClick: this.close
                    }))))
                }
            }]) && js(t.prototype, n), a && js(t, a), o
        }();

        function xs() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement(Ds, n), t)
        }

        Ds.propTypes = {
            container: S.a.instanceOf(Element).isRequired,
            msgto: S.a.number.isRequired,
            lastwith: S.a.oneOfType([S.a.string, S.a.number])
        }, Ds.defaultProps = {lastwith: ""};
        var Ms = function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.userId = t.userId || "", this.avatar = t.avatar || "//p2.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg", this.nickname = t.nickname || "", this.text = t.text || "", this.time = t.time || null, this.unread = t.unread || 0, this.gender = t.gender || 1
        }, Us = {
            getAccount: function () {
                return Ce(Oe.URL("/api/activity/summary/annual/2018/user/yunxin/account/get"))
            }, getUserInfo: function (n) {
                if (Array.isArray(n) || (n = [n]), 0 === n.length) return Promise.resolve([]);
                var r = ks.getState(), e = n.filter(function (e) {
                    return e && (!r[e] || !r[e].nickname)
                }), i = [];
                return 0 === e.length ? (n.forEach(function (e) {
                    i.push(r[e])
                }), Promise.resolve(i)) : Ce(Oe.URL("/api/activity/summary/annual/2018/user/info"), {
                    data: {userIds: e.join(",")},
                    method: "post"
                }).then(function (e) {
                    var t = e && e.data || [], a = {};
                    return t.forEach(function (e) {
                        a[e.userId] = e
                    }), n.forEach(function (e) {
                        var t = r[e], n = a[e] || {};
                        if (t && t.nickname) i.push(t); else if (t) t.nickname = n.nickname, t.avatar = n.avatar, t.gender = n.gender, i.push(t); else {
                            var o = new Ms(n);
                            i.push(o), ks.dispatch({type: _s, info: o})
                        }
                    }), i
                }).catch(function () {
                    zo.notify("用户信息获取有误", 3e3)
                })
            }, resetSessionUnread: function (e) {
                return Ce(Oe.URL("/api/activity/summary/annual/2018/yunxin/unread/clear"), {data: e})
            }, report: function (e) {
                var t = e.targetUserId, n = e.message;
                return Ce(Oe.URL("/api/activity/summary/annual/2018/match/report"), {
                    data: {
                        targetUserId: t,
                        message: n
                    }
                })
            }, getSecondMatchSong: function (e) {
                var t = e.targetUserId, n = e.userId;
                return Ce(Oe.URL("/api/activity/summary/annual/2018/match/song"), {data: {targetUserId: t, userId: n}})
            }, clearQuitTimes: function () {
                return Ce(Oe.URL("/api/activity/summary/annual/2018/match/exitcount/clear")).catch(function () {
                    return !0
                })
            }, punish: function () {
                return Ce(Oe.URL("/api/activity/summary/annual/2018/match/noresponse")).catch(function () {
                    return !0
                })
            }
        }, Is = Us, Ls = "ADD_MSG";

        function As(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Hs(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var zs = Object(Ns.a)(function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = 1 < arguments.length ? arguments[1] : void 0, n = t.type, o = t.targetUserId, a = t.msgs,
                r = e[o] || [];
            switch (n) {
                case"INIT_MSG":
                    return Object.assign({}, e, Hs({}, o, a));
                case Ls:
                    return Object.assign({}, e, Hs({}, o, As(a).concat(As(r))));
                case"RM_MSG":
                    return Object.assign({}, e, Hs({}, o, null));
                default:
                    return e
            }
        }), qs = null, Bs = {
            setNim: function (e) {
                qs = e
            }, getHistoryMsgs: function (a) {
                return new Promise(function (o) {
                    var e = zs.getState();
                    e[a] ? setTimeout(function () {
                        qs.resetSessionUnread("p2p-".concat(a)), Is.resetSessionUnread({fromUserId: +a}), o(e[a])
                    }, 50) : qs.getHistoryMsgs({
                        scene: "p2p", to: a, done: function (e, t) {
                            var n;
                            e ? n = [] : (n = t.msgs, qs.resetSessionUnread("p2p-".concat(a)), Is.resetSessionUnread({fromUserId: +a})), zs.dispatch({
                                type: Ls,
                                targetUserId: a,
                                msgs: n
                            }), o(n)
                        }
                    })
                })
            }, pushHistoryMsg: function (e, t) {
                zs.dispatch({type: Ls, targetUserId: e, msgs: [t]})
            }
        }, Ws = Bs, Gs = h("o96g"), Fs = h.n(Gs);

        function Vs(e) {
            return (Vs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ys(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Js(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Qs(e) {
            return (Qs = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ks(e, t) {
            return (Ks = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Xs(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Zs = h("JeI0"), $s = h.n(Zs);

        function eu(e) {
            return (eu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function tu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function nu(e) {
            return (nu = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ou(e, t) {
            return (ou = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function au(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var ru = B.a.suffix({paramWidth: 100, heightRatio: 1, restrain: !0}), iu = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = nu(o).call(this)) || "object" !== eu(n) && "function" != typeof n ? au(t) : n).onClick = e.onClick.bind(au(au(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ou(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "onClick", value: function () {
                    var e = this.props.friend;
                    e.userId && nn.emit(_t, {msgto: +e.userId})
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.friend;
                    return C.a.createElement("div", {
                        className: "m-userInfo",
                        onClick: this.onClick
                    }, C.a.createElement("div", {className: "avatar"}, C.a.createElement("img", {src: ru(e.avatar)})), e.unread ? C.a.createElement("span", {className: "u-unread"}) : null, C.a.createElement("span", {className: "updateTime"}, Oe.dateDuration(e.time)), C.a.createElement("div", {className: "nameContent"}, C.a.createElement("span", {className: "nickname f-thide"}, e.nickname), C.a.createElement("span", {className: "content"}, e.text || "m2小可爱向你发送一条新消息喽")))
                }
            }]) && tu(t.prototype, n), a && tu(t, a), o
        }();

        function cu(e) {
            return (cu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function su(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function uu(e) {
            return (uu = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function lu(e, t) {
            return (lu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function fu(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        iu.propTypes = {friend: S.a.instanceOf(Ms)}, iu.defaultProps = {friend: new Ms};
        var mu = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = uu(o).call(this)) || "object" !== cu(n) && "function" != typeof n ? fu(t) : n).state = {users: []}, e.getUserInfo = e.getUserInfo.bind(fu(fu(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && lu(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "getUserInfo", value: function () {
                    var t = this, e = this.props.group.map(function (e) {
                        return e && e.userId
                    });
                    Is.getUserInfo(e).then(function (e) {
                        t.setState({users: e})
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.users, t = this.props.group;
                    return C.a.createElement("div", {style: {minHeight: "".concat(65 * t.length, "px")}}, C.a.createElement($s.a, {
                        offsetBottom: 100,
                        onContentVisible: this.getUserInfo
                    }, C.a.createElement("div", null, e.map(function (e, t) {
                        return C.a.createElement("div", {
                            className: "m-userInfo-wrap",
                            key: t + e.text
                        }, C.a.createElement(iu, {friend: e}))
                    }))))
                }
            }]) && su(t.prototype, n), a && su(t, a), o
        }();
        mu.propTypes = {group: S.a.arrayOf(S.a.instanceOf(Ms)).isRequired};
        h("/NGB");

        function pu(e) {
            return (pu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function hu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function du(e) {
            return (du = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function yu(e, t) {
            return (yu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function bu(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var vu = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = du(o).call(this)) || "object" !== pu(n) && "function" != typeof n ? bu(t) : n).state = {}, e.onOpenChatRoom = e.onOpenChatRoom.bind(bu(bu(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && yu(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    nn.on($t, this.onOpenChatRoom)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    nn.off($t, this.onOpenChatRoom)
                }
            }, {
                key: "onOpenChatRoom", value: function (e) {
                    var t = e.msgto;
                    Is.getUserInfo(t).then(function () {
                        nn.emit(_t, {msgto: t})
                    })
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props.friends, n = Oe.group(e, 50).map(function (e) {
                        var t = e.reduce(function (e, t) {
                            return "".concat(t.userId).slice(-2) + e
                        }, "");
                        return C.a.createElement(mu, {group: e, key: t})
                    });
                    return C.a.createElement("div", {
                        className: "m-friendList", ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-friendMsgs"}, n))
                }
            }]) && hu(t.prototype, n), a && hu(t, a), o
        }();
        vu.propTypes = {friends: S.a.arrayOf(S.a.object).isRequired};
        h("U56G");

        function gu(e) {
            return (gu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function wu(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Eu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Su(e, t, n) {
            return (Su = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Ou(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Ou(e) {
            return (Ou = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Nu(e, t) {
            return (Nu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _u(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var ku, Tu, ju = (ku = function (e) {
                function o() {
                    var e, t, n;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, o), t = this, (e = !(n = Ou(o).call(this)) || "object" !== gu(n) && "function" != typeof n ? _u(t) : n).state = {isLoading: !0}, e.onReadReport = e.onReadReport.bind(_u(_u(e))), e.onShare = e.onShare.bind(_u(_u(e))), e.commonEvents = {
                        from: Pt,
                        show: Et,
                        hide: St
                    }, e
                }

                var t, n, a;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Nu(e, t)
                }(o, un), t = o, (n = [{
                    key: "componentDidMount", value: function () {
                        var e = this;
                        Su(Ou(o.prototype), "componentDidMount", this).call(this), tt.preload(wu($e.common).concat(wu($e.chat)), !0).then(function () {
                            e.setState({isLoading: !1})
                        })
                    }
                }, {
                    key: "onReadReport", value: function () {
                        this.hide(), nn.emit(gt)
                    }
                }, {
                    key: "show", value: function () {
                        Su(Ou(o.prototype), "show", this).call(this), Oe.enableDefaultTouch()
                    }
                }, {
                    key: "goBack", value: function () {
                        b.a.orpheus("orpheus://back")
                    }
                }, {
                    key: "hidePreloader", value: function () {
                        this.isHidePreloader || (this.isHidePreloader = !0, tt.hide())
                    }
                }, {
                    key: "checkChatRoom", value: function () {
                        var e = this;
                        if (this.isCheckChatRoom) return !1;
                        this.isCheckChatRoom = !0;
                        var t = parseInt(Oe.query("msgto"), 10), n = parseInt(Oe.query("lastwith"), 10),
                            o = Oe.query("from"), a = +Oe.memo(W);
                        return setTimeout(function () {
                            a !== t && t ? (nn.emit(Xt, t), e.onOpenChatRoom({msgto: t})) : a === t && n && n !== a && "singlemessage" === o && (nn.emit(Xt, n), e.onOpenChatRoom({msgto: n}))
                        }, 10), !0
                    }
                }, {
                    key: "onOpenChatRoom", value: function (e) {
                        var t = e.msgto;
                        Is.getUserInfo(t).then(function () {
                            nn.emit(_t, {msgto: t})
                        })
                    }
                }, {
                    key: "onShare", value: function () {
                        xs({msgto: +Oe.memo(W)})
                    }
                }, {
                    key: "createEl", value: function () {
                        var t = this, e = ks.getState(), n = Oe.memo(W), o = this.state.isLoading, a = this.props,
                            r = a.friends, i = a.nimMsg, c = i.dataInit, s = i.ifLogin, u = i.error, l = i.errorText;
                        if (u) return this.hidePreloader(), C.a.createElement(_n, {errorText: l});
                        if (!s || o) return null;
                        this.hidePreloader(), c && this.checkChatRoom();
                        var f = 0 < r.length,
                            m = C.a.createElement("div", {className: "noListToast"}, "（ 点击下方匹配按钮，遇见相似的人 ）"), p = null;
                        return f && c && (m = null, p = C.a.createElement(vu, {friends: r})), C.a.createElement("div", {
                            className: "m-module m-module-prechat f-page",
                            ref: function (e) {
                                t.container = e
                            }
                        }, C.a.createElement("div", {className: "m-chatNav"}, C.a.createElement("span", {
                            className: "u-back icon",
                            onClick: this.goBack
                        })), C.a.createElement("div", {className: "m-header"}, C.a.createElement("h1", {className: "name f-thide"}, "Hi ".concat(e[n].nickname, ":")), C.a.createElement("div", {className: "welcome text ".concat(f ? "" : "z-noMsg")}, "看完年度听歌报告"), C.a.createElement("div", {className: "welcome text ".concat(f ? "" : "z-noMsg")}, "欢迎来到云村一歌一遇~"), f ? C.a.createElement("div", {className: "welcome Msg text"}, "多添加红心歌曲，遇见更多有趣的人") : C.a.createElement("div", {className: "welcome noMsg"}, C.a.createElement("div", {className: "text"}, "在6亿人中"), C.a.createElement("div", {className: "text"}, "遇见和自己听歌品味相似的人"), C.a.createElement("div", {className: "text"}, "是一件美好而幸福的事"))), m, C.a.createElement(Os, {
                            commonEvents: this.commonEvents,
                            onReadReport: this.onReadReport,
                            onShare: this.onShare
                        }), p)
                    }
                }]) && Eu(t.prototype, n), a && Eu(t, a), o
            }(), (Tu = function (e) {
                function a(e) {
                    var t, n, o;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), n = this, (t = !(o = Qs(a).call(this, e)) || "object" !== Vs(o) && "function" != typeof o ? Xs(n) : o).state = {
                        ifLogin: !1,
                        dataInit: !1,
                        error: !1,
                        friends: [],
                        me: 0
                    }, t.addFriend = t.addFriend.bind(Xs(Xs(t))), t.Login = t.Login.bind(Xs(Xs(t))), t.onClickFriend = t.onClickFriend.bind(Xs(Xs(t))), t.onMatchSuccess = t.onMatchSuccess.bind(Xs(Xs(t))), t.onMsgClear = t.onMsgClear.bind(Xs(Xs(t))), t.onMsgSend = t.onMsgSend.bind(Xs(Xs(t))), t.onMsgCustom = t.onMsgCustom.bind(Xs(Xs(t))), t.onSysMsg = t.onSysMsg.bind(Xs(Xs(t))), t.onMsgBlack = t.onMsgBlack.bind(Xs(Xs(t))), t.setup = t.setup.bind(Xs(Xs(t))), nn.on(kt, t.onMatchSuccess), nn.on(_t, t.onClickFriend), nn.on(Mt, t.onMsgClear), nn.on(xt, t.onMsgSend), nn.on(Bt, t.onMsgCustom), nn.on(Wt, t.onSysMsg), nn.on(Ut, t.onMsgBlack), nn.on(Et, t.setup), nn.on(Ot, t.setup), nn.on(Xt, t.addFriend), t
                }

                var t, n;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Ks(e, t)
                }(a, s.Component), Js((t = a).prototype, [{
                    key: "componentWillReceiveProps", value: function (e) {
                        e.initShow && this.setup()
                    }
                }, {
                    key: "onClickFriend", value: function (e) {
                        var t = e.msgto, n = t;
                        nn.emit(Dt, {msgto: t}), this.getHistoryMsgs(n).then(function (e) {
                            nn.emit(At, {historyMsgs: e})
                        })
                    }
                }, {
                    key: "onMatchSuccess", value: function (e) {
                        var t = this, n = e.matchUser, o = e.matchData, a = e.song, r = e.playUrl, i = e.msgto,
                            c = n.targetUser.userId;
                        this.setup().then(function () {
                            Is.getUserInfo([c]).then(function () {
                            })
                        }).then(function () {
                            nn.emit(Dt, {
                                matchUser: n,
                                matchData: o,
                                song: a,
                                playUrl: r,
                                msgto: i
                            }), t.getHistoryMsgs(c).then(function (e) {
                                nn.emit(At, {historyMsgs: e})
                            })
                        })
                    }
                }, {
                    key: "getHistoryMsgs", value: function (e) {
                        return Ws.getHistoryMsgs(e)
                    }
                }, {
                    key: "onMsgClear", value: function (e) {
                        this.nim.resetSessionUnread("p2p-".concat(e))
                    }
                }, {
                    key: "onMsgBlack", value: function (n) {
                        var o = this, a = this;
                        this.nim.deleteFriend({account: n}), this.nim.addToBlacklist({account: n}), this.nim.deleteSessions({
                            sessions: [{
                                scene: "p2p",
                                to: n
                            }], done: function (e) {
                                if (e) window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                                    type: "deleteSessions",
                                    uid: a.nim.account,
                                    error: e
                                })); else {
                                    nn.emit(Nt), nn.emit(Et);
                                    var t = o.state.friends;
                                    t = t.filter(function (e) {
                                        return +e.userId !== n
                                    }), a.setState({friends: t})
                                }
                            }
                        })
                    }
                }, {
                    key: "setup", value: function () {
                        var t = this;
                        if (this.isSetup) return Promise.resolve();
                        this.isSetup = !0;
                        var n = 0;
                        return Is.getAccount().then(function (e) {
                            return t.Login(e.data)
                        }).catch(function (e) {
                            n < 1 ? (Is.getAccount().then(function (e) {
                                return t.Login(e.data)
                            }).catch(function () {
                                t.setState({error: !0})
                            }), n++) : 301 === e.code || 302 === e.code ? Oe.wakeup() : t.setState({error: !0})
                        })
                    }
                }, {
                    key: "addFriend", value: function (t) {
                        var n = this, o = this.state.friends;
                        this.nim.account !== t && (0 < o.filter(function (e) {
                            return +e.userId == +t
                        }).length || this.nim.addFriend({
                            account: t, done: function () {
                                var e = new Ms({userId: t});
                                o.unshift(e), n.setState({friends: o})
                            }
                        }))
                    }
                }, {
                    key: "onMsgSend", value: function (e, n) {
                        var o = this;
                        this.sendMsgLog || (this.sendMsgLog = !0, Oe.biLogAction("sendmsg", {
                            target: "text",
                            page: "chatroom",
                            type: Oe.memo(re),
                            chatroomid: Oe.memo(ce)
                        })), this.nim.sendText({
                            scene: "p2p", to: n, text: e, done: function (e, t) {
                                e ? (window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                                    type: "sendText",
                                    uid: o.nim.account,
                                    error: e
                                })), nn.emit(It, e)) : (Ws.pushHistoryMsg(n, t), nn.emit(Rt, t), nn.emit(Lt, t))
                            }
                        })
                    }
                }, {
                    key: "onMsgCustom", value: function (e) {
                        var t = e.value, o = e.msgto, n = {type: e.type, data: {value: t}};
                        this.sendLogCustom || (this.sendLogCustom = !0, Oe.biLogAction("sendmsg", {
                            target: "chatbot",
                            page: "chatroom",
                            type: Oe.memo(re),
                            chatroomid: Oe.memo(ce)
                        })), this.nim.sendCustomMsg({
                            scene: "p2p",
                            to: o,
                            content: JSON.stringify(n),
                            done: function (e, t) {
                                if (e) nn.emit(It, e), nn.emit(qt); else {
                                    if (Ws.pushHistoryMsg(o, t), nn.emit(Rt, t), "custom" === t.type) {
                                        var n = JSON.parse(t.content).type;
                                        if ("ROBOT_INTERACT_INIT" === n || "ROBOT_INTERACT" === n) return
                                    }
                                    nn.emit(qt)
                                }
                            }
                        })
                    }
                }, {
                    key: "onSysMsg", value: function (e) {
                        var t = e.value, n = e.msgto, o = {type: e.type, data: {value: t}}, a = this;
                        this.nim.sendCustomSysMsg({
                            scene: "p2p", to: n, content: JSON.stringify(o), done: function (e) {
                                e && window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                                    type: "sendCustomSysMsg",
                                    uid: a.nim.account,
                                    error: e
                                }))
                            }
                        })
                    }
                }, {
                    key: "getFriends", value: function () {
                        var n = this;
                        this.nim.getFriends({
                            done: function (e, t) {
                                0 < t.length ? Oe.biLogPage("msglist") : Oe.biLogPage("matchinited"), n.isGetFriends = !0, n.initFriends = t, n.doAfterGetFriends(t)
                            }
                        })
                    }
                }, {
                    key: "doAfterGetFriends", value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                        if (0 !== e.length || 0 !== t.length) {
                            var r = [];
                            if (0 < t.length) {
                                var i = {}, c = this.nim.account;
                                e.forEach(function (e) {
                                    i[e.account] = !0
                                }), (this.initSessions = t).forEach(function (e) {
                                    var t = e.unread, n = e.lastMsg, o = n.from === c ? n.to : n.from;
                                    if (i[o]) {
                                        var a = new Ms({userId: o, text: n.text, time: n.time, unread: t});
                                        r.push(a), ks.dispatch({type: _s, info: a}), i[o] = !1
                                    }
                                }), e.forEach(function (e) {
                                    if (i[e.account]) {
                                        var t = new Ms({userId: e.account, text: " ", time: null, unread: 0});
                                        r.push(t), ks.dispatch({type: _s, info: t})
                                    }
                                })
                            } else e.forEach(function (e) {
                                var t = new Ms({userId: e.account, text: " ", time: null, unread: 0});
                                r.push(t), ks.dispatch({type: _s, info: t})
                            });
                            this.setState({friends: r.concat(), dataInit: !0})
                        } else this.setState({dataInit: !0})
                    }
                }, {
                    key: "Login", value: function (e) {
                        var i = this, n = e.appKey, o = e.account, a = e.token, r = 0;
                        return new Promise(function (t) {
                            i.nim = Fs.a.NIM.getInstance({
                                appKey: n,
                                account: o,
                                token: a,
                                db: !1,
                                autoMarkRead: !1,
                                syncSessionUnread: !0,
                                onconnect: function () {
                                    r = 0, Is.getUserInfo([i.nim.account]).then(function (e) {
                                        Oe.memo(W, e[0].userId), Oe.memo(F, e[0].avatar), Oe.memo(V, e[0].nickname), i.setState({ifLogin: !0}), i.getFriends(), t()
                                    }), Is.resetSessionUnread()
                                },
                                onWillReconnect: function (e) {
                                    zo.notify("正在尝试重新连接，请检查当前网络状态", 3e3), window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                                        type: "onWillReconnect",
                                        uid: i.nim.account,
                                        error: e
                                    })), 3 < r ? i.setState(function (e) {
                                        return Object.assign(e, {error: !0}), e
                                    }) : r++
                                },
                                ondisconnect: function (e) {
                                    var t = "页面加载失败，请检查网络问题";
                                    e && (window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                                        type: "ondisconnect",
                                        uid: i.nim.account,
                                        error: e
                                    })), "kicked" === e.code && (t = "你的账号已在其他地方登陆，刷新即可重新登陆哦"), i.setState(function (e) {
                                        return Object.assign(e, {error: !0, errorText: t}), e
                                    }))
                                },
                                onsessions: function (e) {
                                    i.isGetSessions = !0, i.initSessions = e, i.isGetFriends && i.doAfterGetFriends(i.initFriends, e)
                                },
                                onupdatesession: function (e) {
                                    i.nim.mergeSessions(i.initSessions, e);
                                    var t = i.state.friends, n = i.nim.account, o = e.unread, a = e.lastMsg,
                                        r = ks.getState()[a.from === n ? a.to : a.from];
                                    r && (r.text = a.text, r.time = a.time, r.unread = o), i.setState({friends: Ys(t)})
                                },
                                onmsg: function (e) {
                                    var t = ks.getState();
                                    Ws.pushHistoryMsg(e.from, e), t[+e.from] ? nn.emit(Rt, e) : Is.getUserInfo([+e.from]).then(function () {
                                        nn.emit(Rt, e)
                                    })
                                },
                                oncustomsysmsg: function (e) {
                                    nn.emit(Gt, e)
                                },
                                onerror: function (e) {
                                    window.Raven && window.Raven.captureMessage && window.Raven.captureMessage(JSON.stringify({
                                        type: "onerror",
                                        uid: i.nim.account,
                                        error: e
                                    }))
                                }
                            }), Ws.setNim(i.nim)
                        })
                    }
                }, {
                    key: "render", value: function () {
                        return C.a.createElement(ku, {
                            nimMsg: this.state,
                            friends: this.state.friends,
                            dataInit: this.state.dataInit,
                            initShow: this.props.initShow
                        })
                    }
                }, {
                    key: "componentWillUnmount", value: function () {
                        nn.emit(kt, this.matchSuccess), nn.emit(Mt, this.onMsgClear), nn.emit(xt, this.onMsgSend), nn.emit(Ut, this.onMsgBlack)
                    }
                }]), n && Js(t, n), a
            }()).propTypes = {initShow: S.a.bool}, Tu.defaultProps = {initShow: !1}, Tu),
            Pu = (h("Pr7m"), h("Qzdx"), h("50pn"), function () {
                return C.a.createElement("div", {className: "bamboo-pendant bamboo-pendant-".concat(parseInt(7 * Math.random() + 1, 10))}, C.a.createElement("div", {className: "b1"}), C.a.createElement("div", {className: "b2"}), C.a.createElement("div", {className: "b3"}), C.a.createElement("div", {className: "b4"}), C.a.createElement("div", {className: "b5"}))
            }), Cu = new Rn, Ru = {};

        function Du(e, t, n) {
            this.x = e, this.y = t, this.z = n
        }

        Du.prototype.dot2 = function (e, t) {
            return this.x * e + this.y * t
        }, Du.prototype.dot3 = function (e, t, n) {
            return this.x * e + this.y * t + this.z * n
        };
        var xu = [new Du(1, 1, 0), new Du(-1, 1, 0), new Du(1, -1, 0), new Du(-1, -1, 0), new Du(1, 0, 1), new Du(-1, 0, 1), new Du(1, 0, -1), new Du(-1, 0, -1), new Du(0, 1, 1), new Du(0, -1, 1), new Du(0, 1, -1), new Du(0, -1, -1)],
            Mu = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
            Uu = new Array(512), Iu = new Array(512);
        Ru.seed = function (e) {
            var t = e;
            0 < t && t < 1 && (t *= 65536), (t = Math.floor(t)) < 256 && (t |= t << 8);
            for (var n = 0; n < 256; n++) {
                var o = void 0;
                o = 1 & n ? Mu[n] ^ 255 & t : Mu[n] ^ t >> 8 & 255, Uu[n] = o, Uu[n + 256] = o, Iu[n] = xu[o % 12], Iu[n + 256] = xu[o % 12]
            }
        }, Ru.seed(0);
        var Lu = .5 * (Math.sqrt(3) - 1), Au = (3 - Math.sqrt(3)) / 6, Hu = 1 / 6;

        function zu(e) {
            return e * e * e * (e * (6 * e - 15) + 10)
        }

        function qu(e, t, n) {
            return (1 - n) * e + n * t
        }

        Ru.simplex2 = function (e, t) {
            var n, o, a = (e + t) * Lu, r = Math.floor(e + a), i = Math.floor(t + a), c = (r + i) * Au, s = e - r + c,
                u = t - i + c;
            o = u < s ? (n = 1, 0) : (n = 0, 1);
            var l = s - n + Au, f = u - o + Au, m = s - 1 + 2 * Au, p = u - 1 + 2 * Au,
                h = Iu[(r &= 255) + Uu[i &= 255]], d = Iu[r + n + Uu[i + o]], y = Iu[r + 1 + Uu[i + 1]],
                b = .5 - s * s - u * u, v = .5 - l * l - f * f, g = .5 - m * m - p * p;
            return 70 * ((b < 0 ? 0 : (b *= b) * b * h.dot2(s, u)) + (v < 0 ? 0 : (v *= v) * v * d.dot2(l, f)) + (g < 0 ? 0 : (g *= g) * g * y.dot2(m, p)))
        }, Ru.simplex3 = function (e, t, n) {
            var o, a, r, i, c, s, u = (e + t + n) * (1 / 3), l = Math.floor(e + u), f = Math.floor(t + u),
                m = Math.floor(n + u), p = (l + f + m) * Hu, h = e - l + p, d = t - f + p, y = n - m + p;
            s = d <= h ? y <= d ? (c = i = o = 1, r = a = 0) : i = y <= h ? (c = r = a = 0, o = 1) : (c = a = o = 0, r = 1) : d < y ? (i = a = o = 0, c = r = 1) : h < y ? (i = r = o = 0, c = a = 1) : (c = i = a = 1, r = o = 0);
            var b = h - o + Hu, v = d - a + Hu, g = y - r + Hu, w = h - i + 2 * Hu, E = d - c + 2 * Hu,
                S = y - s + 2 * Hu, O = h - 1 + .5, N = d - 1 + .5, _ = y - 1 + .5,
                k = Iu[(l &= 255) + Uu[(f &= 255) + Uu[m &= 255]]], T = Iu[l + o + Uu[f + a + Uu[m + r]]],
                j = Iu[l + i + Uu[f + c + Uu[m + s]]], P = Iu[l + 1 + Uu[f + 1 + Uu[m + 1]]],
                C = .6 - h * h - d * d - y * y, R = .6 - b * b - v * v - g * g, D = .6 - w * w - E * E - S * S,
                x = .6 - O * O - N * N - _ * _;
            return 32 * ((C < 0 ? 0 : (C *= C) * C * k.dot3(h, d, y)) + (R < 0 ? 0 : (R *= R) * R * T.dot3(b, v, g)) + (D < 0 ? 0 : (D *= D) * D * j.dot3(w, E, S)) + (x < 0 ? 0 : (x *= x) * x * P.dot3(O, N, _)))
        }, Ru.perlin2 = function (e, t) {
            var n = e, o = t, a = Math.floor(n), r = Math.floor(o);
            n -= a, o -= r;
            var i = Iu[(a &= 255) + Uu[r &= 255]].dot2(n, o), c = Iu[a + Uu[r + 1]].dot2(n, o - 1),
                s = Iu[a + 1 + Uu[r]].dot2(n - 1, o), u = Iu[a + 1 + Uu[r + 1]].dot2(n - 1, o - 1), l = zu(n);
            return qu(qu(i, s, l), qu(c, u, l), zu(o))
        }, Ru.perlin3 = function (e, t, n) {
            var o = e, a = t, r = n, i = Math.floor(o), c = Math.floor(a), s = Math.floor(r);
            o -= i, a -= c, r -= s;
            var u = Iu[(i &= 255) + Uu[(c &= 255) + Uu[s &= 255]]].dot3(o, a, r),
                l = Iu[i + Uu[c + Uu[s + 1]]].dot3(o, a, r - 1), f = Iu[i + Uu[c + 1 + Uu[s]]].dot3(o, a - 1, r),
                m = Iu[i + Uu[c + 1 + Uu[s + 1]]].dot3(o, a - 1, r - 1),
                p = Iu[i + 1 + Uu[c + Uu[s]]].dot3(o - 1, a, r),
                h = Iu[i + 1 + Uu[c + Uu[s + 1]]].dot3(o - 1, a, r - 1),
                d = Iu[i + 1 + Uu[c + 1 + Uu[s]]].dot3(o - 1, a - 1, r),
                y = Iu[i + 1 + Uu[c + 1 + Uu[s + 1]]].dot3(o - 1, a - 1, r - 1), b = zu(o), v = zu(a), g = zu(r);
            return qu(qu(qu(u, p, b), qu(l, h, b), g), qu(qu(f, d, b), qu(m, y, b), g), v)
        };
        var Bu = Ru;
        h("g/YY");

        function Wu(e) {
            return (Wu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Gu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Fu(e) {
            return (Fu = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Vu(e, t) {
            return (Vu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Yu(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Ju(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Qu = function (e) {
            function o(e) {
                var m, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, n = Fu(o).call(this), Ju(Yu(Yu(m = !n || "object" !== Wu(n) && "function" != typeof n ? Yu(t) : n)), "generateCurve", function () {
                    m.canvas = document.createElement("canvas"), m.canvas.height = 80, m.canvas.width = 2 * (m.ref.curveWrp.current.parentNode.clientWidth - 40), m.canvas.style.width = "".concat(m.canvas.width / 2, "px"), m.canvas.style.height = "".concat((m.canvas.height + 10) / 2, "px"), m.ref.curve.current.appendChild(m.canvas), m.ctx = m.canvas.getContext("2d"), m.colors = ["#FF0000", "#00FF00", "#0000FF", "#000000"], m.STEPX = m.canvas.width / 19, m.STEPR = Math.PI / 19, m.ratio = .8, Bu.seed(Math.random()), m.startTime = Date.now(), m.animate()
                }), Ju(Yu(Yu(m)), "destroyCurve", function () {
                    m.isDestroying = !0
                }), Ju(Yu(Yu(m)), "recyleCurve", function () {
                    m.canvas = null, m.ctx = null, m.STEPX = 0, m.STEPR = 0
                }), Ju(Yu(Yu(m)), "animate", function () {
                    if (m.ratio <= 0) m.setState({isShowCurve: !1}, function () {
                        m.isDestroying = !1, m.recyleCurve()
                    }); else {
                        requestAnimationFrame(m.animate);
                        var e = m.canvas, t = e.width, n = e.height;
                        m.frequencyData = Cu.getFrequencyData(40), m.isDestroying && (m.ratio = m.ratio - .005), m.ratio < 0 && (m.ratio = 0);
                        var o, a, r = Date.now() - m.startTime;
                        for (m.ctx.clearRect(0, 0, t, m.canvas.height), o = 0; o < 4; ++o) {
                            for (m.points = [], a = 0; a < 20; ++a) m.points.push({
                                x: m.STEPX * a,
                                y: n - m.ratio * n * Math.sin(m.STEPR * a) * m.frequencyData[a] / 256 * (Bu.perlin3(o, a, .001 * r) + 2 + .4 * (4 - o)) / 2
                            });
                            for (m.ctx.beginPath(), m.ctx.moveTo(-m.STEPX, n), a = 1; a < 18; ++a) {
                                var i = m.points[a], c = m.points[a + 1], s = i.x, u = i.y,
                                    l = parseInt((i.x + c.x) / 2, 10), f = parseInt((i.y + c.y) / 2, 10);
                                m.ctx.quadraticCurveTo(s, u, l, f)
                            }
                            m.ctx.quadraticCurveTo(m.points[a].x, m.points[a].y, t + m.STEPX, m.points[a + 1].y), m.ctx.closePath(), m.ctx.fillStyle = m.colors[o], m.ctx.fill()
                        }
                    }
                }), m.ref = {
                    curve: Object(s.createRef)(),
                    curveWrp: Object(s.createRef)()
                }, m.state = {isShowCurve: e.isLast}, m.isDestroying = !1, m
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Vu(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    this.state.isShowCurve && this.ref.curve.current && this.ref.curveWrp.current && this.generateCurve()
                }
            }, {
                key: "componentWillReceiveProps", value: function (e) {
                    this.state.isShowCurve && !1 === e.isLast && this.destroyCurve()
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.isShowCurve;
                    return C.a.createElement("div", {
                        ref: this.ref.curveWrp,
                        onClick: this.play,
                        className: "m-electro-curve"
                    }, e ? C.a.createElement("div", {ref: this.ref.curve}) : null)
                }
            }]) && Gu(t.prototype, n), a && Gu(t, a), o
        }();

        function Ku(e) {
            return (Ku = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Xu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Zu(e, t) {
            return !t || "object" !== Ku(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function $u(e) {
            return ($u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function el(e, t) {
            return (el = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        Qu.propTypes = {isLast: S.a.bool};
        var tl = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Zu(this, $u(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && el(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.msg, o = e.viewStyle, a = e.isLast, r = ks.getState()[n.from],
                        i = B.a.directSuffix(r.avatar, {paramWidth: 80, restrain: !0}), c = n.theme,
                        s = void 0 === c ? "" : c,
                        u = "national" === o ? C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)) : null;
                    return C.a.createElement("li", {
                        className: "m-messagePop ".concat(n.flow, " ").concat(s),
                        ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, u, C.a.createElement("img", {src: i}))), C.a.createElement("div", {className: "m-message m-message-info"}, "electro" === o ? C.a.createElement(Qu, {isLast: a}) : null, C.a.createElement("span", {className: "m-message-text"}, n.text)))
                }
            }]) && Xu(n.prototype, o), a && Xu(n, a), t
        }();

        function nl(e) {
            return (nl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ol(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function al(e, t) {
            return !t || "object" !== nl(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function rl(e) {
            return (rl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function il(e, t) {
            return (il = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        tl.propTypes = {msg: S.a.objectOf(S.a.any).isRequired, viewStyle: S.a.string, isLast: S.a.bool};
        var cl = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), al(this, rl(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && il(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.msg, o = e.viewStyle, a = ks.getState()[Oe.memo(W)],
                        r = B.a.directSuffix(a.avatar, {paramWidth: 80, restrain: !0}), i = n.theme,
                        c = void 0 === i ? "" : i,
                        s = "national" === o ? C.a.createElement($s.a, null, C.a.createElement(Pu, null)) : null;
                    return C.a.createElement("li", {
                        className: "m-messagePop out ".concat(c), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, s, C.a.createElement("img", {src: r}))), C.a.createElement("div", {className: "m-message"}, n.content), C.a.createElement("span", {className: "u-toast"}, "（此条对方看不到哦）"))
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }]) && ol(n.prototype, o), a && ol(n, a), t
        }();

        function sl(e) {
            return (sl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ul(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ll(e, t) {
            return !t || "object" !== sl(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function fl(e) {
            return (fl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ml(e, t) {
            return (ml = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        cl.propTypes = {msg: S.a.objectOf(S.a.any).isRequired, viewStyle: S.a.string};
        var pl = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ll(this, fl(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ml(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.content, o = e.theme, a = void 0 === o ? "" : o;
                    return C.a.createElement("li", {
                        className: "m-messagePop ".concat(a), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-blackTost"}, n))
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }]) && ul(n.prototype, o), a && ul(n, a), t
        }();
        pl.propTypes = {content: S.a.string.isRequired, theme: S.a.string};
        h("4oZB");

        function hl(e) {
            return (hl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function dl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function yl(e) {
            return (yl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function bl(e, t) {
            return (bl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function vl(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var gl = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = yl(o).call(this)) || "object" !== hl(n) && "function" != typeof n ? vl(t) : n).state = {status: ""}, e.onChatTargetIn = e.onChatTargetIn.bind(vl(vl(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && bl(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    nn.on(Qt, this.onChatTargetIn)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    nn.off(Qt, this.onChatTargetIn)
                }
            }, {
                key: "onChatTargetIn", value: function () {
                    this.setState({status: !0})
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.msgto, o = e.status, a = ks.getState()[n],
                        r = B.a.directSuffix(a.avatar, {paramWidth: 80, restrain: !0});
                    return C.a.createElement("li", {
                        className: "m-messagePop m-userComeIn", ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: r})), C.a.createElement("div", {className: "m-toast"}, "".concat(a.nickname, " ").concat(this.state.status || o ? " 已经进入会话" : " 等待进入会话", "..."))))
                }
            }]) && dl(t.prototype, n), a && dl(t, a), o
        }();
        gl.propTypes = {msgto: S.a.number.isRequired, status: S.a.bool.isRequired};
        var wl = h("HS1D"), El = h.n(wl), Sl = {
                LIFE: {
                    TYPE1: ["你朋友圈（空间）最近晒的一张照片是什么？", "你现在最想买买买的东西是？", "你现在自己住吗？", "你觉得自己性格中比较好的一面是？", "你害怕打针吗？", "你最喜欢年度听歌报告的哪一页？", "你买过最贵的礼物是什么？", "你的家乡有什么特产美食吗？", "最近买到最让你满意的东西是什么？"],
                    TYPE2: ["2018年最让你感到开心的事情是？", "2019年你最期待的事情是？", "你收到过最奇葩的礼物是？", "你下一次旅游准备去哪？", "哪首歌让你感到身心愉悦？", "你的昵称（小名）是？", "你认为金钱能带来快乐吗？", "你最近一次做过的疯狂事情是？", "你上一次熬夜是为了啥？", "你觉得自己最大的天赋是什么？", "你小时候梦想的职业是？", "上一次让你高兴一天的事情是什么？", "亲人、爱人、朋友你怎么排序？", "最近什么事让你压力很大？", "今天早上几点起床？起床时在想什么？", "最想生活在哪个城市？", "最喜欢爸爸妈妈做的哪道菜？", "你吃过最奇葩的东西是什么？", "平时喜欢看书还是看电影还是听音乐？", "小时候最爱看的动画片是？", "你最喜欢的味道是？", "跨年的时候，在做什么呢？", "你收藏最久的一件物品是什么？", "想睡就睡和想吃就吃，你更喜欢？"]
                },
                LOVE: {
                    TYPE1: ["如果你能邀请任何一位异性共进晚餐，你会请谁？", "你最关注另一半身体的哪一部分？", "如果你突然变成异性，第一件事干什么？", "喜欢壁咚还是公主抱？", "你更相信一见钟情还是日久生情？", "如果你是异性，愿意和现在的自己谈恋爱吗？", "你选择有趣的高晓松还是无趣的吴彦祖？", "你觉得精神出轨和肉体出轨，哪个更不能接受？", "会把微信密码告诉另一半吗？", "你觉得谁可以称为完美的情人？"],
                    TYPE2: ["如果你给异性送一个礼物，你会送什么？", "约会中， 你最看重的是脸、幽默还是钱？", "能接受另一半睡觉打呼噜吗？", "人生中第一次约会是在什么时候？", "颜值上，你希望你更好看还是另一半更好看？", "最棒的身材和最好看的脸想要哪个？", "激情和浪漫哪个更重要？", "只剩下1个草莓会不会留给另一半？", "如果告诉你5年后会遇到真爱，会不会等？", "你最好看的地方是哪里？", "你看脸还是看身材？", "喜欢亲亲还是抱抱？", "上学的时候有收到过情书吗？", "约会那天超冷，要风度还是要套上秋裤？", "扑倒和被扑倒，你希望自己是哪边？", "抽烟、纹身、抖腿，最不能接受异性哪个癖好？", "你觉得一辈子谈几次恋爱合适？", "深邃的思想和浪漫的灵魂想要哪一个？", "你会为了爱情改变自己吗？"]
                },
                WORLD: {
                    TYPE1: ["如果你中了一千万大奖，你准备怎么花？", "你想穿越回过去，还是穿越到未来？", "如果你能买一张任何地方都能去的机票，你会选择去哪里？", "你现在玩的最多的游戏是什么？", "如果能和一位明星对望10秒，你最想和谁对望？", "可以穿越到电影里，希望是科幻片、爱情片还是纪录片？", "如果此时此刻能立即实现你一个愿望，你的愿望是？", "如果能免费清空你的购物车，你下意识第一个加进去的东西是什么呢？", "如果选择一道菜能让你终身免费吃，你会选择哪道菜？"],
                    TYPE2: ["最让你感到害怕的动物是？", "你相信有外星人的存在吗？", "如果你能养一只动物，你想养什么？", "如果你能买世界上任何东西，你会买什么？", "如果纹身，你希望能纹一个什么？", "如果你可以任意体验一项工作一天，你会选哪个", "如果一觉醒来发现自己变成猫，第一件事干什么？", "每天都能充满干劲的起床，每晚都做最甜蜜的梦，更想要哪一个？", "旅游去最想去的地方，和最喜欢的人一起去，哪个更重要？", "一般听音乐的时候在干嘛？", "十天不洗澡和三天没手机，你更愿意选哪个？", "和偶像在线聊一小时和见面1分钟，选哪个？", "如果能永久停留在某一岁，你希望是几岁？", "如果你现在能隐身打一个人，你想打谁？"]
                }
            },
            Ol = ["如果,你可以让任何人喜欢你,但是,你很难爱上别人", "如果,你可以永远年轻,但是,永远不能刷朋友圈", "如果,你能年轻两岁,但是,你最好的朋友会老两岁", "如果,你会说动物话,但是,你会忘记一种人类语言", "如果,你可以进入游戏的世界里,但是,打通关才能回到现实", "如果,你能变成明星,但是,不能和现在所有认识的人有交集", "如果,你能控制梦,但是,你不能去梦里去过的地方。", "如果,你可以得到一千万,但是,要卖掉你的另一半。", "如果,你能得到一个亿,但是,你一生不能再吃肉。", "如果,你能成为世界上最美的人,但是,找不到真爱。", "如果,你能用任何乐器演奏出美妙音乐,但是,唱歌超级难听。", "如果,你的余生可以一直健康快乐,但是,你永远不能用手机。", "如果,你能做出世界上最美味的菜,但是,你自己不能吃。", "如果,你的手机永远不会没电,但是,手机里只能装三个app", "如果,你能靠旅游赚钱,但是,你一年必须去一次危险的地方。", "如果,你可以认识外星人,但是,每年必须有一半时间去他们星球生活。", "如果,你创作的歌十年后能成为经典,但是,这十年人人都讨厌这首歌。", "如果,你能买到最好看的衣服,但是,每件衣服你只能穿一天。", "如果,你每天只用睡三个小时就很清醒,但是,每天只能吃一顿饭。", "如果,你每天能有两小时智力变高,但是,有两小时外貌变丑。", "如果,你能让自己和家人衣食无忧过余生,但是,你的体重要变成现在的两倍。", "如果,你能得到100万,但是,你必须清空微信里所有联系人。", "如果,你不用健身就可以拥有完美体形,但是,你一生不能换内裤。", "如果,世界永远和平,但是,网络从此消失。", "如果,你可以活在你的梦里,但是,你无法回到现实。", "如果,你可以变成任意一种动物,但是,再也不能变回人类。", "如果,你走到哪里都温暖如春,但是,你的被窝永远是凉的。", "如果,你吃任何东西都会觉得美味,但是,你的食欲会增加一倍。", "如果,每天早上你都能听到一句我爱你,但是,每天早上都是不同的人对你说的。", "如果,你能变成超人,但是,会一直被一个外星人追杀。", "如果,你能得到一只多啦A梦,但是,你最珍惜的朋友会离开你。", "如果,你可以得到最想要的超能力,但是,你控制不了它。", "如果,你能得到一张可以无限刷的信用卡,但是,每刷一次你会少1000根头发。", "如果,你能成为亿万富翁,但是,到80岁才能退休。", "如果,只要你一出门颜值就能提升两倍,但是,在家要变丑两倍。", "如果,你的生命可以延长2倍,但是,你的体重也要增加2倍。", "如果,你会变得聪明绝顶,但是,你会忘记最珍贵的回忆。", "如果,你暗恋的人也暗恋你,但是,你们要10年后才能在一起", "如果,1天有30个小时,但是,工作时间10小时", "如果,你可以变成任意一种动物,但是,再也不能变回人类。"];
        h("/tM/");

        function Nl(e) {
            return (Nl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function _l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function kl(e) {
            return (kl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Tl(e, t) {
            return (Tl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function jl(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Pl = function (e) {
            function a(e) {
                var t, n, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), n = this, (t = !(o = kl(a).call(this, e)) || "object" !== Nl(o) && "function" != typeof o ? jl(n) : o).state = {
                    played: !1,
                    selected: !1,
                    hasShowHand: !!localStorage.getItem("hasShowHand")
                }, t.onShow = t.onShow.bind(jl(jl(t))), t.onClear = t.onClear.bind(jl(jl(t))), t.interactArr = Oe.memo("INTERACT_ARR") || [], nn.on(Kt, t.onClear), t
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Tl(e, t)
            }(a, s["Component"]), t = a, (n = [{
                key: "onClear", value: function () {
                    this.setState({selected: !0})
                }
            }, {
                key: "onShow", value: function (e, t) {
                    if ("ASK" === e) {
                        var n = sessionStorage.getItem("ASK");
                        if (3 < n) return nn.emit(zt, {
                            type: "TOAST",
                            content: "已经问了三个问题了，先等TA回复一下吧"
                        }), void nn.emit(qt);
                        n || (n = 0), n++, sessionStorage.setItem("ASK", n)
                    }
                    if (!this.state.played) if (nn.emit(Ft, {content: t}), this.setState({
                        played: !0,
                        selected: !0
                    }), localStorage.setItem("hasShowHand", !0), localStorage.setItem("hasShowArrow", !0), "NOTHING" !== e) if ("INTERACT" !== e) {
                        if ("PLAYSONG" === e) {
                            var o = this.props.viewStyle,
                                a = (r = jn[o || "base"])[Math.floor(Math.random() * r.length)];
                            return nn.emit(Bt, {
                                value: a,
                                msgto: this.props.msgto,
                                type: "ROBOT_PLAY"
                            }), void Cu.changeSrc(a.url, !1)
                        }
                        var r;
                        nn.emit(zt, {type: e})
                    } else {
                        var i = Ol[Math.floor(Math.random() * Ol.length)];
                        nn.emit(Bt, {value: i, msgto: this.props.msgto, type: "ROBOT_INTERACT_INIT"})
                    } else nn.emit(qt)
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.theme, o = void 0 === n ? "" : n, a = e.viewStyle,
                        r = e.emotion, i = void 0 === r ? "" : r, c = this.state, s = c.selected, u = c.hasShowHand,
                        l = "national" === a ? C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)) : null,
                        f = i ? null : C.a.createElement("img", {src: El.a}),
                        m = s ? null : C.a.createElement("div", {className: "m-select ".concat(u ? "hasShowHand" : "")}, C.a.createElement("div", {
                            className: "u-select",
                            onClick: function () {
                                t.onShow("ASK", "问TA一个问题")
                            }
                        }, "问TA一个问题"), C.a.createElement("div", {
                            className: "u-select", onClick: function () {
                                t.onShow("INTERACT", "默契大考验")
                            }
                        }, "默契大考验"), "oneoff" !== Oe.memo(re) ? C.a.createElement("div", {
                            className: "u-select",
                            onClick: function () {
                                t.onShow("PLAYSONG", "随机播放一首歌曲")
                            }
                        }, "随机播放一首") : null, C.a.createElement("div", {
                            className: "u-select", onClick: function () {
                                t.onShow("NOTHING", "木有事，哈哈")
                            }
                        }, "木有事，哈哈"));
                    return C.a.createElement("li", {
                        className: "m-messagePop init in ".concat(o), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic ".concat(i)}, l, f), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", {className: "m-robot-message select"}, C.a.createElement("div", {className: "m-message-wrap"}, C.a.createElement("span", {className: "m-message"}, "hi 找我什么事啊!"), C.a.createElement("span", {className: "u-toast"}, "（此条对方看不到哦）")), m))
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    Cu.pause(), nn.off(Kt, this.onClear)
                }
            }]) && _l(t.prototype, n), o && _l(t, o), a
        }();

        function Cl(e) {
            return (Cl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Rl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Dl(e, t) {
            return !t || "object" !== Cl(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function xl(e) {
            return (xl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ml(e, t) {
            return (Ml = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        Pl.propTypes = {msgto: S.a.number.isRequired, theme: S.a.string, viewStyle: S.a.string, emotion: S.a.string};
        var Ul = function (e) {
            function n(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (t = Dl(this, xl(n).call(this, e))).state = {
                    played: !1,
                    selected: !1,
                    hasShowHand: !!localStorage.getItem("hasShowHand")
                }, t
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ml(e, t)
            }(n, s["Component"]), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "onAsk", value: function (e, t) {
                    if (!this.state.played) {
                        nn.emit(Ft, {content: t});
                        var n = .6 < Math.random() ? "TYPE2" : "TYPE1",
                            o = Sl[e][n][Math.floor(Math.random() * Sl[e][n].length)];
                        this.setState({played: !0, selected: !0}), nn.emit(Bt, {
                            value: o,
                            msgto: this.props.msgto,
                            type: "ROBOT_ASK"
                        })
                    }
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.theme, o = void 0 === n ? "" : n, a = e.viewStyle,
                        r = this.state, i = r.selected, c = r.hasShowHand,
                        s = "national" === a ? C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)) : null,
                        u = i ? null : C.a.createElement("div", {className: "m-select ".concat(c ? "hasShowHand" : "")}, C.a.createElement("div", {
                            className: "u-select life",
                            onClick: this.onAsk.bind(this, "LIFE", "人生观")
                        }, "人生观"), C.a.createElement("div", {
                            className: "u-select world",
                            onClick: this.onAsk.bind(this, "WORLD", "世界观")
                        }, "世界观"), C.a.createElement("div", {
                            className: "u-select love",
                            onClick: this.onAsk.bind(this, "LOVE", "爱情观")
                        }, "爱情观"));
                    return C.a.createElement("li", {
                        className: "m-messagePop in m-ask ".concat(o), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, s, C.a.createElement("img", {src: El.a})), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", {className: "m-robot-message select"}, C.a.createElement("div", {className: "m-message-wrap"}, C.a.createElement("span", {className: "m-message"}, "选择一个类型哈"), C.a.createElement("span", {className: "u-toast"}, "（此条对方看不到哦）")), u))
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }]) && Rl(t.prototype, o), a && Rl(t, a), n
        }();

        function Il(e) {
            return (Il = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ll(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Al(e, t) {
            return !t || "object" !== Il(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Hl(e) {
            return (Hl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function zl(e, t) {
            return (zl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        Ul.propTypes = {msgto: S.a.number.isRequired, theme: S.a.string, viewStyle: S.a.string};
        var ql = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Al(this, Hl(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && zl(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.content, o = e.theme, a = void 0 === o ? "" : o;
                    return C.a.createElement("li", {
                        className: "m-messagePop in m-toast ".concat(a), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)), C.a.createElement("img", {src: El.a})), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", {className: "m-message"}, n))
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }]) && Ll(n.prototype, o), a && Ll(n, a), t
        }();
        ql.propTypes = {content: S.a.string.isRequired, theme: S.a.string};
        h("0fgi");

        function Bl(e) {
            return (Bl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Wl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Gl(e, t) {
            return !t || "object" !== Bl(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Fl(e) {
            return (Fl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Vl(e, t) {
            return (Vl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Yl = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Gl(this, Fl(t).call(this))).userId = "".concat(Oe.memo(W)), e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Vl(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props.msg, n = JSON.parse(e.content), o = e.theme, a = void 0 === o ? "" : o,
                        r = e.emotion, i = void 0 === r ? "" : r, c = i ? null : C.a.createElement("img", {src: El.a}),
                        s = C.a.createElement("div", {className: "ask-blackTost"}, C.a.createElement("div", {className: "m-blackTost"}, "你唤起M2小可爱，向对方问了一个问题")),
                        u = this.userId;
                    return e.from && e.from !== u && (s = C.a.createElement("div", {className: "ask-blackTost"}, C.a.createElement("div", {className: "m-blackTost"}, "对方唤起M2小可爱，向你问了一个问题"))), C.a.createElement("li", {
                        className: "m-messagePop in m-send ".concat(a),
                        ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic  ".concat(i)}, c), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", null, C.a.createElement("div", {className: "m-message m-msgto"}, n.data.value)), s)
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }]) && Wl(n.prototype, o), a && Wl(n, a), t
        }();

        function Jl(e) {
            return (Jl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ql(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Kl(e, t) {
            return !t || "object" !== Jl(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Xl(e) {
            return (Xl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Zl(e, t) {
            return (Zl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        Yl.propTypes = {msg: S.a.objectOf(S.a.any).isRequired};
        var $l = function (e) {
            function n(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (t = Kl(this, Xl(n).call(this, e))).state = {played: !1, countDown: "", showSelect: !0}, t
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Zl(e, t)
            }(n, s["Component"]), t = n, (o = [{
                key: "onSelect", value: function (e, t) {
                    if (!this.state.played) {
                        var n = "GOON_CHAT" === t ? "继续聊天" : "算了";
                        nn.emit(Ht, t), nn.emit(Wt, {
                            msgto: this.props.msgto,
                            value: n,
                            type: t
                        }), nn.emit(qt), this.setState({played: !0, showSelect: !1})
                    }
                }
            }, {
                key: "componentDidMount", value: function () {
                    clearTimeout(this.countDownTimer);
                    var a = 15, r = +new Date, i = this;
                    !function o() {
                        i.countDownTimer = setTimeout(function () {
                            var e = Math.max(0, a - (+new Date - r) / 1e3 | 0), t = e % 60, n = e / 60 | 0;
                            i.setState({countDown: "".concat("00".concat(n).slice(-2), ":").concat("00".concat(t).slice(-2))}), 0 < e && o()
                        }, 500)
                    }(), this.container.scrollIntoView()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    clearTimeout(this.countDownTimer)
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props.theme, n = void 0 === e ? "" : e, o = this.state.showSelect;
                    return C.a.createElement("li", {
                        className: "m-messagePop in m-ask ".concat(n), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)), C.a.createElement("img", {src: El.a})), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", {className: "m-robot-message select"}, C.a.createElement("div", {className: "m-message-wrap"}, C.a.createElement("div", {className: "m-message"}, C.a.createElement("span", {className: "text"}, "hi，一首歌的时间快要结束喽", C.a.createElement("br", null), "你是否想跟TA再聊一首歌呢？"), C.a.createElement("span", {className: "countDown"}, this.state.countDown))), o ? C.a.createElement("div", {className: "m-select hasShowHand"}, C.a.createElement("div", {
                        className: "u-select goon",
                        onClick: this.onSelect.bind(this, "CHATOVER", "GOON_CHAT")
                    }, "继续聊天"), C.a.createElement("div", {
                        className: "u-select leave",
                        onClick: this.onSelect.bind(this, "CHATOVER", "LEAVE_CHAT")
                    }, "算了")) : null))
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }]) && Ql(t.prototype, o), a && Ql(t, a), n
        }();
        $l.propTypes = {msgto: S.a.number.isRequired, theme: S.a.string}, $l.defaultProps = {theme: "base"};
        h("3cNW");

        function ef(e) {
            return (ef = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function tf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function nf(e) {
            return (nf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function of(e, t) {
            return (of = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function af(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function rf(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var cf = [{id: 0, w: 160, h: 283}, {id: 1, w: 600, h: 687}, {id: 2, w: 506, h: 658}, {
            id: 3,
            w: 200,
            h: 388
        }, {id: 4, w: 100, h: 166}, {id: 5, w: 183, h: 338}, {id: 6, w: 97, h: 314}, {id: 7, w: 210, h: 266}, {
            id: 8,
            w: 533,
            h: 320
        }, {id: 9, w: 100, h: 166}, {id: 10, w: 241, h: 356}, {id: 11, w: 300, h: 99}, {
            id: 12,
            w: 170,
            h: 220
        }, {id: 13, w: 133, h: 276}, {id: 14, w: 511, h: 877}, {id: 15, w: 530, h: 399}, {
            id: 16,
            w: 811,
            h: 755
        }, {id: 17, w: 268, h: 204}, {id: 18, w: 307, h: 333}, {id: 19, w: 484, h: 429}, {
            id: 20,
            w: 1182,
            h: 1310
        }, {id: 21, w: 447, h: 376}, {id: 22, w: 235, h: 110}, {id: 23, w: 585, h: 278}], sf = function (e) {
            function n() {
                var c, e, t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), e = this, t = nf(n).call(this), rf(af(af(c = !t || "object" !== ef(t) && "function" != typeof t ? af(e) : t)), "onScroll", function () {
                    c.timer && clearTimeout(c.timer);
                    var e = c.parentNode.scrollTop;
                    c.timer = setTimeout(function () {
                        c.parentNode.scrollTop === e && c.computeAnimate()
                    }, 500)
                }), rf(af(af(c)), "computeAnimate", function () {
                    for (var e = {}, t = 0, n = c.state.bgLength.length; t < n; t++) for (var o = 0, a = cf.length; o < a; o++) {
                        var r = "".concat(t, "_").concat(o);
                        if (c.imgItem[r]) {
                            var i = c.imgItem[r].offsetTop - c.parentNode.scrollTop;
                            i < -600 || i > c.bodyHeight + 600 ? e[r] = !1 : e[r] = !0
                        }
                    }
                    c.setState({scrollMap: e})
                }), rf(af(af(c)), "updateBgLength", function () {
                    if (c.ref.ballad.current) {
                        for (var e = c.ref.ballad.current.parentNode.scrollHeight, t = c.bgItemHeight, n = 0 === e || 0 === t ? 1 : Math.ceil(e / t), o = [], a = 0; a < n; a++) o.push(a);
                        c.setState({bgLength: o}), c.imgItem = {}
                    }
                }), rf(af(af(c)), "renderBgItem", function (e, o) {
                    var a = c.state.scrollMap;
                    return C.a.createElement("div", {
                        key: e, ref: function (e) {
                            e && (c.bgItemHeight = e.clientHeight)
                        }, className: "m-ballad-bg-item"
                    }, cf.map(function (e, t) {
                        var n = a["".concat(o, "_").concat(t)] ? "u-bg-item-img-".concat(t + 1, " active") : "u-bg-item-img-".concat(t + 1);
                        return C.a.createElement("div", {
                            key: "".concat(o, "_").concat(t),
                            className: "f-cb",
                            ref: function (e) {
                                c.imgItem["".concat(o, "_").concat(t)] = e
                            }
                        }, C.a.createElement("svg", {
                            viewBox: "0, 0, ".concat(e.w, ", ").concat(e.h),
                            className: "u-bg-item-".concat(t + 1, " u-bg-item")
                        }, C.a.createElement("foreignObject", {
                            className: "html",
                            width: e.w,
                            height: e.h
                        }, C.a.createElement("div", {className: n}))))
                    }))
                }), c.ref = {
                    ballad: Object(s.createRef)(),
                    bgItem: Object(s.createRef)()
                }, c.imgItem = {}, c.bgItemHeight = 0, c.bodyHeight = document.body.clientHeight, c.state = {
                    bgLength: [0],
                    scrollMap: {}
                }, c
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && of(e, t)
            }(n, s["Component"]), t = n, (o = [{
                key: "componentDidMount", value: function () {
                    var r, i, c, s, e = this;
                    nn.on(Rt, this.onMsgUpdate.bind(this)), nn.on(Ot, this.onShowChatRoom.bind(this)), setTimeout(function () {
                        e.updateBgLength()
                    }, 1e3), this.onScrollDebounce = (r = this.onScroll, function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var o = this, a = c & !s;
                        clearTimeout(s), s = setTimeout(function () {
                            s = null, c || r.apply(o, t)
                        }, i), a && r.apply(o, t)
                    }), this.ref.ballad.current && (this.parentNode = this.ref.ballad.current.parentNode.parentNode, this.parentNode.addEventListener("scroll", this.onScrollDebounce))
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.parentNode.removeEventListener("scroll", this.onScrollDebounce)
                }
            }, {
                key: "onMsgUpdate", value: function () {
                    this.updateBgLength()
                }
            }, {
                key: "onShowChatRoom", value: function () {
                    var e = this;
                    setTimeout(function () {
                        e.updateBgLength()
                    }, 1e3)
                }
            }, {
                key: "render", value: function () {
                    var n = this, e = this.state.bgLength;
                    return C.a.createElement("div", {
                        ref: this.ref.ballad,
                        className: "m-background ballad"
                    }, C.a.createElement("div", {className: "m-ballad"}, e.map(function (e, t) {
                        return n.renderBgItem(e, t)
                    })))
                }
            }]) && tf(t.prototype, o), a && tf(t, a), n
        }();
        h("/rMn"), h("op74"), h("5JIZ");

        function uf(e) {
            return (uf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function lf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ff(e) {
            return (ff = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function mf(e, t) {
            return (mf = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function pf(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var hf = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = ff(o).call(this)) || "object" !== uf(n) && "function" != typeof n ? pf(t) : n).state = {
                    targetRes: !1,
                    played: !1
                }, e.onMsgUpdate = e.onMsgUpdate.bind(pf(pf(e))), nn.on(Rt, e.onMsgUpdate), e.targetQuited = !1, e.onReMatch = e.onReMatch.bind(pf(pf(e))), e.onWait = e.onWait.bind(pf(pf(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && mf(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "onMsgUpdate", value: function (e) {
                    +e.from === this.props.msgto && (this.setState({targetRes: !0}), nn.emit(qt), nn.off(Rt, this.onMsgUpdate))
                }
            }, {
                key: "onReMatch", value: function () {
                    this.setState(function (e) {
                        return {played: !0, targetRes: e.targetRes}
                    }), nn.emit(qt), nn.off(Rt, this.onMsgUpdate), nn.emit(Nt)
                }
            }, {
                key: "onWait", value: function () {
                    this.state.played || (this.setState(function (e) {
                        return {played: !0, targetRes: e.targetRes}
                    }), nn.emit(Ft, {content: "再等等吧"}), nn.emit(qt), nn.off(Rt, this.onMsgUpdate))
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.msgto, o = e.theme, a = void 0 === o ? "" : o,
                        r = ks.getState()[+n].nickname;
                    return C.a.createElement("div", {
                        className: "m-longTimeNoRes in ".concat(a), ref: function (e) {
                            t.container = e
                        }
                    }, this.state.targetRes ? C.a.createElement("div", {className: "m-choose m-btnWrap"}, C.a.createElement("div", {className: "m-reMatch btn disable"}, "再匹配"), C.a.createElement("div", {
                        className: "m-wait btn disable",
                        onClick: this.onWait
                    }, "再等等")) : C.a.createElement("div", null, C.a.createElement(ql, {content: "".concat(r, "已经").concat("10000min", "没有说话了，是否开始重新匹配？")}), C.a.createElement("div", {className: "m-choose m-btnWrap"}, C.a.createElement("div", {
                        className: "u-choose m-reMatch",
                        onClick: function () {
                            nn.emit(Nt)
                        }
                    }, C.a.createElement(la, {
                        from: Pt,
                        onClick: this.onReMatch
                    }, "再匹配")), C.a.createElement("div", {
                        className: "u-choose m-wait btn",
                        onClick: this.onWait
                    }, "再等等"))))
                }
            }]) && lf(t.prototype, n), a && lf(t, a), o
        }();
        hf.propTypes = {msgto: S.a.number.isRequired, theme: S.a.string};
        h("zlVy");

        function df(e) {
            return (df = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function yf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function bf(e, t) {
            return !t || "object" !== df(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function vf(e) {
            return (vf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function gf(e, t) {
            return (gf = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var wf = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), bf(this, vf(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && gf(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    return C.a.createElement("div", {className: "m-background base"})
                }
            }]) && yf(n.prototype, o), a && yf(n, a), t
        }();
        h("5QVD");

        function Ef(e) {
            return (Ef = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Sf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Of(e) {
            return (Of = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Nf(e, t) {
            return (Nf = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _f(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function kf(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Tf = [{start: [128, 179, 171], stop: [30, 41, 58]}, {
                start: [255, 207, 160],
                stop: [234, 92, 68]
            }, {start: [212, 121, 121], stop: [130, 105, 151]}], jf = Math.round(240),
            Pf = ["-webkit-", "-moz-", "-o-", "-ms-", ""], Cf = function (e) {
                function n() {
                    var i, e, t;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), e = this, t = Of(n).call(this), kf(_f(_f(i = !t || "object" !== Ef(t) && "function" != typeof t ? _f(e) : t)), "setNext", function (e) {
                        return e + 1 < Tf.length ? e + 1 : 0
                    }), kf(_f(_f(i)), "calcSteps", function () {
                        for (var e in i.rgbValue) if (Object.prototype.hasOwnProperty.call(i.rgbValue, e)) for (var t = 0; t < 3; t++) i.rgbValue[e][t] = Tf[i.currentIndex][e][t], i.rgbSteps[e][t] = i.calcStepSize(Tf[i.nextIndex][e][t], i.rgbValue[e][t])
                    }), kf(_f(_f(i)), "updateGradient", function () {
                        if (i.ref.electro.current) {
                            var e = i.ref.electro.current.style;
                            for (var t in i.rgbValue) if (Object.prototype.hasOwnProperty.call(i.rgbValue, t)) for (var n = 0; n < 3; n++) i.rgbValue[t][n] += i.rgbSteps[t][n];
                            var o = "rgb(".concat(0 | i.rgbValue.start[0], ",").concat(0 | i.rgbValue.start[1], ",").concat(0 | i.rgbValue.start[2], ")"),
                                a = "rgb(".concat(0 | i.rgbValue.stop[0], ",").concat(0 | i.rgbValue.stop[1], ",").concat(0 | i.rgbValue.stop[2], ")");
                            if (o !== i.color1 || a !== i.color2) {
                                i.color1 = o, i.color2 = a, e.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from(".concat(i.color1, "), to(").concat(i.color2, "))");
                                for (var r = 0; r < 4; r++) e.backgroundImage = "".concat(Pf[r], "linear-gradient(45deg, ").concat(i.color1, ", ").concat(i.color2, ")")
                            }
                            i.stepCount++, i.stepCount > jf && (i.stepCount = 0, i.currentIndex = i.setNext(i.currentIndex), i.nextIndex = i.setNext(i.nextIndex), i.calcSteps()), -1 !== e.backgroundImage.indexOf("gradient") && window.requestAnimationFrame(i.updateGradient.bind(_f(_f(i))))
                        }
                    }), i.ref = {electro: Object(s.createRef)()}, i.currentIndex = 0, i.nextIndex = 1, i.stepCount = 0, i.rgbSteps = {
                        start: [0, 0, 0],
                        stop: [0, 0, 0]
                    }, i.rgbValue = {start: [0, 0, 0], stop: [0, 0, 0]}, i
                }

                var t, o, a;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Nf(e, t)
                }(n, s["Component"]), t = n, (o = [{
                    key: "componentDidMount", value: function () {
                        this.calcSteps(), requestAnimationFrame(this.updateGradient.bind(this))
                    }
                }, {
                    key: "calcStepSize", value: function (e, t) {
                        return (e - t) / jf
                    }
                }, {
                    key: "render", value: function () {
                        return C.a.createElement("div", {ref: this.ref.electro, className: "m-background electro"})
                    }
                }]) && Sf(t.prototype, o), a && Sf(t, a), n
            }();
        h("s1Bh");

        function Rf(e) {
            return (Rf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Df(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function xf(e, t) {
            return !t || "object" !== Rf(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Mf(e) {
            return (Mf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Uf(e, t) {
            return (Uf = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var If = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = xf(this, Mf(t).call(this))).state = {}, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Uf(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "render", value: function () {
                    return C.a.createElement("div", {className: "m-background national"}, C.a.createElement("div", {className: "bamboo1"}), C.a.createElement("div", {className: "bamboo2"}))
                }
            }]) && Df(n.prototype, o), a && Df(n, a), t
        }();
        h("nX9n");

        function Lf(e) {
            return (Lf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Af(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Hf(e, t) {
            return !t || "object" !== Lf(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function zf(e) {
            return (zf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function qf(e, t) {
            return (qf = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Bf = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Hf(this, zf(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && qf(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.move, n = e.myInfo, o = e.matchUser, a = e.currentUserImageUrl,
                        r = e.targetUserImageUrl;
                    return C.a.createElement("div", {
                        className: "m-BaseCover m-coverPage ".concat(t),
                        onClick: this.props.onStartChat.bind(this, "background")
                    }, C.a.createElement("div", {className: "m-user me"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: a})), C.a.createElement("div", {className: "userName"}, n.nickname)), C.a.createElement("div", {className: "m-text"}, C.a.createElement("p", null, "一歌一遇 "), C.a.createElement("p", null, "难得一面"), C.a.createElement("p", null, "世当珍惜")), C.a.createElement("div", {className: "m-user target"}, C.a.createElement("div", {className: "userName"}, o.targetUser.nickname), C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: r}))), C.a.createElement("div", {className: "m-coverBottom"}, C.a.createElement("div", {className: "m-successToast"}, "“已经成功匹配”"), C.a.createElement("div", {
                        className: "m-startChat",
                        onClick: this.props.onStartChat.bind(this, "btn")
                    }, "点击开始聊天")))
                }
            }]) && Af(n.prototype, o), a && Af(n, a), t
        }();

        function Wf(e) {
            return (Wf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Gf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ff(e) {
            return (Ff = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Vf(e, t) {
            return (Vf = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Yf(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        Bf.propTypes = {
            matchUser: S.a.objectOf(S.a.any).isRequired,
            myInfo: S.a.objectOf(S.a.any).isRequired,
            onStartChat: S.a.func.isRequired,
            move: S.a.string,
            currentUserImageUrl: S.a.string.isRequired,
            targetUserImageUrl: S.a.string.isRequired
        };
        var Jf = function (e) {
            function i() {
                var e, t, n, o, a, r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), t = this, n = Ff(i).call(this), e = !n || "object" !== Wf(n) && "function" != typeof n ? Yf(t) : n, o = Yf(Yf(e)), r = function () {
                    e.setState({show: !1}), e.props.onStartChat && e.props.onStartChat()
                }, (a = "onStartChat") in o ? Object.defineProperty(o, a, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = r, e.state = {show: !0}, e
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Vf(e, t)
            }(i, s["Component"]), t = i, (n = [{
                key: "render", value: function () {
                    var e = this.props, t = e.move, n = e.myInfo, o = e.matchUser, a = e.currentUserImageUrl,
                        r = e.targetUserImageUrl, i = this.state.show;
                    return C.a.createElement("div", {
                        className: "m-coverPage m-ballad-cover-page ".concat(t),
                        onClick: this.props.onStartChat.bind(this, "background")
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: a}))), C.a.createElement("div", {className: "userName-ballad"}, n.nickname), C.a.createElement("div", {className: "u-ballad-cover-bg"}, C.a.createElement(w.CSSTransition, {
                        in: i,
                        timeout: 300,
                        classNames: "z-eye"
                    }, C.a.createElement("div", {className: "u-ballad-eyes-right"}, C.a.createElement("div", {className: "u-ballad-eyescenter-right"}))), C.a.createElement(w.CSSTransition, {
                        in: i,
                        timeout: 300,
                        classNames: "z-eye"
                    }, C.a.createElement("div", {className: "u-ballad-eyes-left"}, C.a.createElement("div", {className: "u-ballad-eyescenter-left"}))), C.a.createElement("div", {className: "u-ballad-txt"}, C.a.createElement("p", null, "一歌一遇 "), C.a.createElement("p", null, "难得一面"), C.a.createElement("p", null, "世当珍惜"))), C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: r}))), C.a.createElement("div", {className: "userName-ballad"}, o.targetUser.nickname), C.a.createElement("div", {className: "m-coverBottom"}, C.a.createElement("div", {className: "m-successToast"}, "“已经成功匹配”"), C.a.createElement("div", {
                        className: "m-startChat",
                        onClick: this.props.onStartChat.bind(this, "btn")
                    }, "点击开始聊天")))
                }
            }]) && Gf(t.prototype, n), o && Gf(t, o), i
        }();
        Jf.propTypes = {
            matchUser: S.a.objectOf(S.a.any).isRequired,
            myInfo: S.a.objectOf(S.a.any).isRequired,
            onStartChat: S.a.func.isRequired,
            move: S.a.string,
            currentUserImageUrl: S.a.string.isRequired,
            targetUserImageUrl: S.a.string.isRequired
        };
        h("ydeM");

        function Qf(e) {
            return (Qf = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Kf(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Xf(e, t) {
            return !t || "object" !== Qf(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Zf(e) {
            return (Zf = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function $f(e, t) {
            return ($f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var em = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Xf(this, Zf(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && $f(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.move, n = e.myInfo, o = e.matchUser, a = e.currentUserImageUrl,
                        r = e.targetUserImageUrl;
                    return C.a.createElement("div", {
                        className: "m-coverPage ".concat(t, " m-national-coverPage"),
                        onClick: this.props.onStartChat.bind(this, "background")
                    }, C.a.createElement("div", {className: "comp1"}, C.a.createElement("div", {className: "layer4"}), C.a.createElement("div", {className: "layer1"})), C.a.createElement("div", {
                        className: "comp2",
                        style: {height: "".concat(.85 * window.innerWidth, "px")}
                    }, C.a.createElement("div", {className: "layer6"}), C.a.createElement("div", {className: "layer5"}), C.a.createElement("div", {className: "layer2"}), C.a.createElement("div", {className: "boat"})), C.a.createElement("div", {className: "text"}), C.a.createElement("div", {className: "user-me"}, C.a.createElement("div", {className: "user-pic"}, C.a.createElement("img", {src: a})), C.a.createElement("div", {className: "user-name"}, n.nickname)), C.a.createElement("div", {className: "user-target"}, C.a.createElement("div", {className: "user-pic"}, C.a.createElement("img", {src: r})), C.a.createElement("div", {className: "user-name"}, o.targetUser.nickname)), C.a.createElement("div", {className: "start-chart-area"}, C.a.createElement("div", {
                        className: "start-chart",
                        onClick: this.props.onStartChat.bind(this, "btn")
                    })))
                }
            }]) && Kf(n.prototype, o), a && Kf(n, a), t
        }();
        em.propTypes = {
            matchUser: S.a.objectOf(S.a.any).isRequired,
            myInfo: S.a.objectOf(S.a.any).isRequired,
            onStartChat: S.a.func.isRequired,
            move: S.a.string,
            currentUserImageUrl: S.a.string.isRequired,
            targetUserImageUrl: S.a.string.isRequired
        };
        h("jDmM");

        function tm(e) {
            return (tm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function nm(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function om(e, t) {
            return !t || "object" !== tm(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function am(e) {
            return (am = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function rm(e, t) {
            return (rm = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var im = h("+mZ4"),
            cm = [{id: 0, rotate: [0]}, {id: 1, rotate: [1]}, {id: 2, rotate: [3]}, {id: 3, rotate: [0]}, {
                id: 4,
                rotate: []
            }], sm = ["动", "次", "打", "次"], um = function (e) {
                function t() {
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), om(this, am(t).apply(this, arguments))
                }

                var n, o, a;
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && rm(e, t)
                }(t, s["Component"]), n = t, (o = [{
                    key: "componentDidMount", value: function () {
                    }
                }, {
                    key: "render", value: function () {
                        var e = this.props, t = e.move, n = e.myInfo, o = e.matchUser, a = e.currentUserImageUrl,
                            r = e.targetUserImageUrl;
                        return C.a.createElement("div", {
                            className: "m-coverPage m-electro-cover-page ".concat(t),
                            onClick: this.props.onStartChat.bind(this, "background")
                        }, C.a.createElement("div", {className: "m-user me"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: a})), C.a.createElement("div", {className: "userName-electro"}, n.nickname)), C.a.createElement("div", {className: "m-text"}, C.a.createElement("div", {className: "electro-ground"}, C.a.createElement(Cf, null)), C.a.createElement("img", {
                            src: im,
                            className: "text-title"
                        }), cm.map(function (n, e) {
                            return C.a.createElement("div", {
                                key: n.id,
                                className: "u-electro-text-group text-group-".concat(e)
                            }, sm.map(function (e, t) {
                                return C.a.createElement("span", {
                                    key: "".concat("".concat(t, "1")),
                                    className: (n.rotate || []).includes(t) ? "animate" : ""
                                }, e)
                            }))
                        })), C.a.createElement("div", {className: "m-user me"}, C.a.createElement("div", {className: "userPic"}, C.a.createElement("img", {src: r})), C.a.createElement("div", {className: "userName-electro"}, o.targetUser.nickname)), C.a.createElement("div", {className: "m-coverBottom"}, C.a.createElement("div", {className: "m-successToast"}, "“已经成功匹配”"), C.a.createElement("div", {
                            className: "m-startChat",
                            onClick: this.props.onStartChat.bind(this, "btn")
                        }, "点击开始聊天")))
                    }
                }]) && nm(n.prototype, o), a && nm(n, a), t
            }();
        um.propTypes = {
            matchUser: S.a.objectOf(S.a.any).isRequired,
            myInfo: S.a.objectOf(S.a.any).isRequired,
            onStartChat: S.a.func.isRequired,
            move: S.a.string,
            currentUserImageUrl: S.a.string.isRequired,
            targetUserImageUrl: S.a.string.isRequired
        };
        var lm = {
            ACG: 1,
            "电子": 2,
            "儿童": 1,
            "古典": 1,
            "节日音乐": 1,
            "节奏布鲁斯": 2,
            "金属": 2,
            "爵士": 1,
            "拉丁音乐": 1,
            "蓝调": 1,
            "雷鬼": 2,
            "流行": 1,
            "民谣": 4,
            "其他": 1,
            "轻音乐": 1,
            "实验": 2,
            "世界音乐": 1,
            "舞台": 2,
            "西洋乐器体裁": 1,
            "嘻哈说唱": 2,
            "乡村": 4,
            "新世纪": 1,
            "摇滚": 2,
            "音乐人特有": 1,
            "有声": 1,
            "语种": 1,
            "原声": 1,
            "中国音乐": 3,
            "古风": 3,
            "宗教": 1,
            "电音": 2,
            "国风": 3,
            "通用": 1
        }, fm = {1: "base", 2: "electro", 3: "national", 4: "ballad"}, mm = {
            base: {bg: wf, cover: Bf},
            ballad: {cover: Jf},
            electro: {bg: Cf, cover: um},
            national: {bg: If, cover: em}
        }, pm = function (e) {
            return fm[lm[e]] || "base"
        }, hm = mm;
        h("whlo");

        function dm(e) {
            return (dm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ym(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function bm(e) {
            return (bm = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function vm(e, t) {
            return (vm = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function gm(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var wm = function (e) {
            function a(e) {
                var t, n, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), n = this, (t = !(o = bm(a).call(this, e)) || "object" !== dm(o) && "function" != typeof o ? gm(n) : o).state = {
                    played: !1,
                    choose: ""
                }, t.myAnswer = "", t.targetAnswer = "", t.onMsgUpdate = t.onMsgUpdate.bind(gm(gm(t))), t.onHideRoom = t.onHideRoom.bind(gm(gm(t))), t.onShowResult = t.onShowResult.bind(gm(gm(t))), nn.on(Rt, t.onMsgUpdate), nn.on(Nt, t.onHideRoom), t
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && vm(e, t)
            }(a, s["Component"]), t = a, (n = [{
                key: "onAnswer", value: function (e) {
                    this.state.played || (this.setState({played: !0, choose: e}), nn.emit(Bt, {
                        value: e,
                        msgto: this.props.msgto,
                        type: "ROBOT_INTERACT"
                    }), nn.emit(Ft, {content: "YES" === e ? "我愿意" : "我不愿意"}), this.myAnswer = e, this.targetAnswer || nn.emit(Vt, {content: "已回答，等待对方回答中..."}), this.onShowResult())
                }
            }, {
                key: "onMsgUpdate", value: function (e) {
                    if ("custom" === e.type) {
                        var t = JSON.parse(e.content);
                        if ("ROBOT_INTERACT" === t.type && +e.from === this.props.msgto) {
                            if (this.targetAnswer = t.data.value, !this.myAnswer) return void nn.emit(Vt, {content: "hi，对方已经回答了哦，你要加油啊~"});
                            this.onShowResult()
                        }
                    }
                }
            }, {
                key: "onShowResult", value: function () {
                    this.targetAnswer && this.myAnswer && (this.targetAnswer === this.myAnswer ? nn.emit(zt, {
                        type: "TOAST",
                        content: "哇哦，你们的选择是一样的呀"
                    }) : nn.emit(zt, {
                        type: "TOAST",
                        content: "咦~你们选择不一样，交流下吧"
                    }), nn.off(Rt, this.onMsgUpdate), nn.emit(qt))
                }
            }, {
                key: "onHideRoom", value: function () {
                    nn.off(Rt, this.onMsgUpdate)
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.theme, o = void 0 === n ? "" : n, a = e.emotion,
                        r = void 0 === a ? "" : a, i = this.props.content || "如果,你可以进入游戏的世界里,但是,打通关才能回到现实",
                        c = r ? null : C.a.createElement("img", {src: El.a});
                    return C.a.createElement("li", {
                        className: "m-messagePop in m-interact ".concat(o),
                        ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic ".concat(r)}, C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)), c), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", {className: "m-robot-message select"}, C.a.createElement("div", {className: "m-message-wrap"}, C.a.createElement("span", {className: "m-message"}, "亲们，默契大考验开始咯")), C.a.createElement("div", {className: "m-message question-wrap"}, C.a.createElement("p", {className: "question if"}, "如果"), C.a.createElement("p", {className: "question ifQues"}, i.split(",")[1]), C.a.createElement("p", {className: "question but"}, "但是"), C.a.createElement("p", {className: "question butQues"}, i.split(",")[3])), C.a.createElement("div", {className: "m-choose ".concat(this.state.choose)}, C.a.createElement("div", {
                        className: "u-choose yes",
                        onClick: this.onAnswer.bind(this, "YES")
                    }, "愿意"), C.a.createElement("div", {
                        className: "u-choose no",
                        onClick: this.onAnswer.bind(this, "NO")
                    }, "不愿意"))))
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    nn.emit(Rt, this.onMsgUpdate), nn.emit(Nt, this.onHideRoom)
                }
            }]) && ym(t.prototype, n), o && ym(t, o), a
        }();

        function Em(e) {
            return (Em = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Sm(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Om(e, t) {
            return !t || "object" !== Em(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Nm(e) {
            return (Nm = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function _m(e, t) {
            return (_m = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        wm.propTypes = {
            msgto: S.a.number.isRequired,
            content: S.a.string.isRequired,
            theme: S.a.string,
            emotion: S.a.string
        };
        var km = function (e) {
            function n(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), (t = Om(this, Nm(n).call(this, e))).state = {
                    played: !1,
                    hasShowHand: !!localStorage.getItem("hasShowHand"),
                    showSelect: !0
                }, t
            }

            var t, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _m(e, t)
            }(n, s["Component"]), t = n, (o = [{
                key: "onPLAY", value: function (e, t) {
                    this.state.played || ("PLAY" === e ? (Cu.changeSrc(this.props.song.url, !1), this.setState({played: !0}), nn.emit(Ft, {content: "播放"})) : nn.emit(Ft, {content: "算了"}), this.setState({showSelect: !1}))
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.msgFrom, o = e.song, a = e.emotion, r = e.theme,
                        i = void 0 === r ? "" : r, c = +Oe.memo(W), s = ks.getState()[n].nickname,
                        u = a ? null : C.a.createElement("img", {src: El.a}), l = this.state, f = l.hasShowHand,
                        m = l.showSelect;
                    return C.a.createElement("li", {
                        className: "m-messagePop in m-ask ".concat(i), ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "m-user"}, C.a.createElement("div", {className: "userPic ".concat(a)}, C.a.createElement($s.a, {once: !0}, C.a.createElement(Pu, null)), u), C.a.createElement("div", {className: "userName"}, "M2小可爱")), C.a.createElement("div", {className: "m-robot-message select"}, C.a.createElement("div", {className: "m-message-wrap"}, C.a.createElement("span", {className: "m-message"}, "".concat(s, "点播了一首歌曲，下面为你们播放一首《").concat(o.name, "》，记得打开声音哦"))), n !== c && m ? C.a.createElement("div", {className: "m-select ".concat(f ? "hasShowHand" : "")}, C.a.createElement("div", {
                        className: "u-select life",
                        onClick: this.onPLAY.bind(this, "PLAY")
                    }, "播放"), C.a.createElement("div", {
                        className: "u-select world",
                        onClick: this.onPLAY.bind(this, "NOPLAY")
                    }, "算了")) : null))
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.container.scrollIntoView()
                }
            }, {
                key: "componentDidUpdate", value: function () {
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    Cu.pause()
                }
            }]) && Sm(t.prototype, o), a && Sm(t, a), n
        }();

        function Tm(e) {
            return (Tm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function jm(e) {
            return function (e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function (e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function Pm(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Cm(e) {
            return (Cm = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Rm(e, t) {
            return (Rm = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Dm(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        km.propTypes = {
            msgFrom: S.a.number.isRequired,
            song: S.a.objectOf(S.a.string).isRequired,
            theme: S.a.string,
            emotion: S.a.string
        };
        var xm = ["t1", "t2", "t3", "t4", "t5", "t6", "t7", "t8", "t9"], Mm = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Cm(o).call(this)) || "object" !== Tm(n) && "function" != typeof n ? Dm(t) : n).state = {msgs: []}, e.onHistoryMsgs = e.onHistoryMsgs.bind(Dm(Dm(e))), e.onMsgUpdate = e.onMsgUpdate.bind(Dm(Dm(e))), e.onMsgUserIn = e.onMsgUserIn.bind(Dm(Dm(e))), e.onRobotShow = e.onRobotShow.bind(Dm(Dm(e))), e.onMsgChoose = e.onMsgChoose.bind(Dm(Dm(e))), e.onMsgToast = e.onMsgToast.bind(Dm(Dm(e))), window.globalTheme = "", e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Rm(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    nn.on(At, this.onHistoryMsgs), nn.on(Rt, this.onMsgUpdate), nn.on(zt, this.onRobotShow), nn.on(Ft, this.onMsgChoose), nn.on(Vt, this.onMsgToast), nn.on(Yt, this.onMsgUserIn)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    nn.off(At, this.onHistoryMsgs), nn.off(Rt, this.onMsgUpdate), nn.off(zt, this.onRobotShow), nn.off(Ft, this.onMsgChoose), nn.off(Vt, this.onMsgToast), nn.off(Yt, this.onMsgUserIn), clearTimeout(this.clear)
                }
            }, {
                key: "componentDidUpdate", value: function () {
                    var e = this.props.viewStyle;
                    this.sessionList.scrollTop = this.sessionList.scrollHeight, "ballad" === e && (this.chatView.scrollTop = this.chatView.scrollHeight)
                }
            }, {
                key: "onMsgToast", value: function (e) {
                    var t = e.content;
                    this.setState(function (e) {
                        return e.msgs.push({
                            initType: "MSG_TOAST",
                            content: t,
                            theme: window.globalTheme,
                            key: (new Date).getTime() + 1e3 * Math.random()
                        }), e
                    })
                }
            }, {
                key: "onMsgChoose", value: function (e) {
                    var t = e.content;
                    this.setState(function (e) {
                        return e.msgs.push({
                            initType: "CHOOSE",
                            content: t,
                            theme: window.globalTheme,
                            key: (new Date).getTime() + Math.random() * Math.random() * 1e3
                        }), e
                    })
                }
            }, {
                key: "onRobotShow", value: function (e) {
                    var t = e.type, n = e.content, o = Math.floor(6 * Math.random()), a = "emotion".concat(o + 1),
                        r = this.props.viewStyle;
                    switch (t) {
                        case"INIT":
                            if ("base" === r) {
                                var i = window.lastRobotShow || 0;
                                4 < this.state.msgs.length - i && (window.lastRobotShow = this.state.msgs.length - 1, window.globalTheme = xm[Math.floor(Math.random() * xm.length)])
                            }
                            this.setState(function (e) {
                                return e.msgs.push({
                                    initType: "ROBOT",
                                    robotType: "INIT",
                                    theme: window.globalTheme,
                                    emotion: a,
                                    key: (new Date).getTime() + 1e3 * Math.random()
                                }), e
                            });
                            break;
                        case"ASK":
                            this.setState(function (e) {
                                return e.msgs.push({
                                    initType: "ROBOT",
                                    robotType: "ASK",
                                    theme: window.globalTheme,
                                    emotion: a,
                                    key: (new Date).getTime() + 1e3 * Math.random()
                                }), e
                            });
                            break;
                        case"TOAST":
                            this.setState(function (e) {
                                return e.msgs.push({
                                    initType: "ROBOT",
                                    robotType: "TOAST",
                                    theme: window.globalTheme,
                                    emotion: a,
                                    key: (new Date).getTime() + 1e3 * Math.random(),
                                    content: n
                                }), e
                            });
                            break;
                        case"CHATOVER":
                            this.setState(function (e) {
                                return e.msgs.push({
                                    initType: "ROBOT",
                                    robotType: "CHATOVER",
                                    theme: window.globalTheme,
                                    emotion: a,
                                    key: (new Date).getTime() + 1e3 * Math.random()
                                }), e
                            });
                            break;
                        case"CHAT_TARGET_NORES":
                            this.setState(function (e) {
                                return e.msgs.push({
                                    initType: "ROBOT",
                                    robotType: "CHAT_TARGET_NORES",
                                    theme: window.globalTheme,
                                    emotion: a,
                                    key: (new Date).getTime() + 1e3 * Math.random()
                                }), e
                            });
                            break;
                        case"ROBOT_INTERACT_INIT":
                            this.setState(function (e) {
                                return e.msgs.push({
                                    initType: "ROBOT",
                                    robotType: "INTERACT",
                                    key: (new Date).getTime() + 1e3 * Math.random(),
                                    theme: window.globalTheme,
                                    emotion: a,
                                    content: n
                                }), e
                            })
                    }
                }
            }, {
                key: "onMsgUserIn", value: function (e) {
                    var t = e.status;
                    this.setState(function (e) {
                        return e.msgs.push({initType: "MSG_USERIN", status: t, key: (new Date).getTime()}), e
                    })
                }
            }, {
                key: "onHistoryMsgs", value: function (e) {
                    var t = e.historyMsgs;
                    if ("oneoff" !== Oe.memo(re) && 0 === t.length) {
                        var n = Oe.memo(V);
                        return nn.emit(zt, {
                            type: "TOAST",
                            content: "HI，".concat(n, "，欢迎来到网易云音乐《一歌一遇》，你可以和好友在这里一边听歌一边聊天，分享给其他人，还能解锁更多聊天主题，有事可以叫我！")
                        }), void nn.emit(qt)
                    }
                    if ("oneoff" !== Oe.memo(re)) {
                        var o = [];
                        t && 0 < t.length && t.forEach(function (e) {
                            var t = e;
                            delete t.theme, o.unshift(t)
                        }), this.setState(function (e) {
                            return Object.assign(e, {msgs: o}), e
                        })
                    }
                }
            }, {
                key: "onMsgUpdate", value: function (e) {
                    var t = e, n = this.props.msgto;
                    if (n) {
                        +t.from === n && sessionStorage.setItem("ASK", 0), t.theme = window.globalTheme;
                        var o = Math.floor(6 * Math.random()), a = "emotion".concat(o + 1);
                        if (t.emotion = a, +t.from === n || +t.to === n) {
                            nn.emit(Mt, n);
                            var r = this.state.msgs;
                            this.setState({msgs: jm(r).concat([t])})
                        }
                        Is.resetSessionUnread({fromUserId: +t.from})
                    } else Is.resetSessionUnread({fromUserId: +t.from})
                }
            }, {
                key: "render", value: function () {
                    var o = this, e = this.state.msgs, t = this.props, a = t.msgto, r = t.viewStyle, n = t.className,
                        i = e.filter(function (e) {
                            return "ROBOT" !== e.initType && "CHOOSE" !== e.initType && "MSG_TOAST" !== e.initType && "custom" !== e.type
                        }), c = i[i.length - 1], s = e.map(function (e) {
                            var t = e.theme || "";
                            if ("ROBOT" === e.initType) switch (e.robotType) {
                                case"INIT":
                                    return C.a.createElement(Pl, {
                                        key: e.key,
                                        theme: t,
                                        msgto: a,
                                        viewStyle: r,
                                        emotion: e.emotion
                                    });
                                case"ASK":
                                    return C.a.createElement(Ul, {
                                        key: e.key,
                                        theme: t,
                                        msgto: a,
                                        viewStyle: r,
                                        emotion: e.emotion
                                    });
                                case"TOAST":
                                    return C.a.createElement(ql, {
                                        content: e.content,
                                        theme: t,
                                        key: e.key,
                                        viewStyle: r,
                                        emotion: e.emotion
                                    });
                                case"CHATOVER":
                                    return C.a.createElement($l, {
                                        msgto: a,
                                        theme: t,
                                        emotion: e.emotion,
                                        viewStyle: r,
                                        key: e.key
                                    });
                                case"CHAT_TARGET_NORES":
                                    return C.a.createElement(hf, {
                                        theme: t,
                                        emotion: e.emotion,
                                        msgto: a,
                                        viewStyle: r,
                                        key: e.key || e.time
                                    });
                                case"INTERACT":
                                    return C.a.createElement(wm, {
                                        msgto: o.props.msgto,
                                        key: e.key || e.time,
                                        theme: t,
                                        emotion: e.emotion,
                                        viewStyle: r,
                                        content: e.content
                                    });
                                default:
                                    return null
                            } else {
                                if ("CHOOSE" === e.initType) return C.a.createElement(cl, {
                                    key: e.key,
                                    viewStyle: r,
                                    msg: e
                                });
                                if ("MSG_TOAST" === e.initType) return C.a.createElement(pl, {
                                    key: e.key,
                                    theme: e.theme,
                                    viewStyle: r,
                                    content: e.content
                                });
                                if ("MSG_USERIN" === e.initType) return C.a.createElement(gl, {
                                    key: e.key,
                                    msgto: a,
                                    status: e.status
                                });
                                if ("custom" !== e.type) return C.a.createElement(tl, {
                                    isLast: e.sessionId === c.sessionId && e.time === c.time,
                                    viewStyle: r,
                                    key: e.time,
                                    msg: e
                                });
                                var n = JSON.parse(e.content);
                                switch (n.type) {
                                    case"ROBOT_ASK":
                                        return C.a.createElement(Yl, {
                                            viewStyle: r,
                                            msg: e,
                                            theme: t,
                                            emotion: e.emotion,
                                            key: e.time
                                        });
                                    case"ROBOT_PLAY":
                                        return C.a.createElement(km, {
                                            key: e.key || e.time,
                                            msgFrom: +e.from,
                                            theme: t,
                                            emotion: e.emotion,
                                            song: n.data.value
                                        });
                                    default:
                                        return null
                                }
                            }
                        });
                    return C.a.createElement("div", {
                        id: "j-chatroom-parent",
                        className: "m-module-chatroom-baseview m-module-chatroom-".concat(r, "view ").concat(n)
                    }, C.a.createElement("div", {
                        id: "j-chatroom-scroll-ballad", ref: function (e) {
                            o.chatView = e
                        }, className: "m-chatView"
                    }, C.a.createElement("ul", {
                        id: "j-chatroom-scroll", className: "m-sessionList", ref: function (e) {
                            o.sessionList = e
                        }
                    }, "ballad" === r ? C.a.createElement(sf, null) : null, s)))
                }
            }]) && Pm(t.prototype, n), a && Pm(t, a), o
        }();
        Mm.propTypes = {
            msgto: S.a.number.isRequired,
            viewStyle: S.a.string,
            className: S.a.string
        }, Mm.defaultProps = {viewStyle: "base", className: ""};
        var Um = h("8NXd"), Im = h.n(Um), Lm = (h("2dPG"), h("5+Cm"), h("/H1Q"), h("efHz")), Am = h.n(Lm);

        function Hm(e) {
            return (Hm = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function zm(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function qm(e) {
            return (qm = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Bm(e, t) {
            return (Bm = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Wm(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Gm = function (e) {
            function a(e) {
                var t, n, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), n = this, o = qm(a).call(this, e), (t = !o || "object" !== Hm(o) && "function" != typeof o ? Wm(n) : o).state = {
                    inputValue: "",
                    inputDisable: !1,
                    robotDisable: !1,
                    hasShowArrow: !!localStorage.getItem("hasShowArrow"),
                    hasShowM2: !!localStorage.getItem("hasShowM2")
                }, t.toast = "请回答上面的问题哟", t.lastUpdate = !1, t.oninputChange = t.oninputChange.bind(Wm(Wm(t))), t.onMsgDone = t.onMsgDone.bind(Wm(Wm(t))), t.onMsgFail = t.onMsgFail.bind(Wm(Wm(t))), t.onRobotShow = t.onRobotShow.bind(Wm(Wm(t))), t.onRobotDone = t.onRobotDone.bind(Wm(Wm(t))), t.sendMsg = t.sendMsg.bind(Wm(Wm(t))), t.onKeyDown = t.onKeyDown.bind(Wm(Wm(t))), t.onTargetQuit = t.onTargetQuit.bind(Wm(Wm(t))), t.onMsgCustom = t.onMsgCustom.bind(Wm(Wm(t))), t.onClickRobot = t.onClickRobot.bind(Wm(Wm(t))), t.onClickInputWrap = t.onClickInputWrap.bind(Wm(Wm(t))), t.onFocus = t.onFocus.bind(Wm(Wm(t))), t.onBlur = t.onBlur.bind(Wm(Wm(t))), t.onClickDoc = t.onClickDoc.bind(Wm(Wm(t))), t.onMsgUpdate = t.onMsgUpdate.bind(Wm(Wm(t))), t.m2Ani = t.m2Ani.bind(Wm(Wm(t))), t.onChangeInputStatus = t.onChangeInputStatus.bind(Wm(Wm(t))), t.inputSysMsg = Oe.throttle(function () {
                    nn.emit(Wt, {value: "", msgto: t.props.msgto, type: "INPUT_SYS"})
                }, 3e3), t
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Bm(e, t)
            }(a, s["Component"]), t = a, (n = [{
                key: "componentDidMount", value: function () {
                    var e = this;
                    (l.a.isIos() && u()(".j-sendBar").css({top: "".concat(window.innerHeight - 66, "px")}), nn.on(Lt, this.onMsgDone), nn.on(It, this.onMsgFail), nn.on(zt, this.onRobotShow), nn.on(qt, this.onRobotDone), nn.on(Jt, this.onTargetQuit), nn.on(Bt, this.onMsgCustom), nn.on(Rt, this.onMsgUpdate), nn.on(en, this.onChangeInputStatus), u()(".j-chatroom").on("click", this.onClickDoc), this.state.hasShowM2) || ((new Image).src = Am.a, this.m2AniTimer = setTimeout(this.m2Ani, 3e3));
                    window.onresize = function () {
                        e.shouldPadding() && u()("#j-chatroom-parent").css({"padding-bottom": "".concat(window.innerHeight / 2 + 55, "px")})
                    }
                }
            }, {
                key: "onChangeInputStatus", value: function (e) {
                    var t = this, n = e.disable, o = e.blur;
                    setTimeout(function () {
                        o && t.inputEl && t.inputEl.blur(), n && t.setState({inputDisable: !0})
                    }, 100)
                }
            }, {
                key: "m2Ani", value: function () {
                    var e = this;
                    u()(this.m2Robot).removeClass("ani"), setTimeout(function () {
                        u()(e.m2Robot).addClass("ani")
                    }, 100), this.state.hasShowM2 || (this.m2AniTimer = setTimeout(this.m2Ani, 3e3))
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    sessionStorage.setItem("ASK", 0), nn.off(Lt, this.onMsgDone), nn.off(It, this.onMsgFail), nn.off(zt, this.onRobotShow), nn.off(qt, this.onRobotDone), nn.off(Jt, this.onTargetQuit), nn.off(Bt, this.onMsgCustom), nn.off(Rt, this.onMsgUpdate), nn.off(en, this.onChangeInputStatus), clearTimeout(this.inputingCountDown), clearTimeout(this.m2AniTimer), u()(".j-chatroom").off("click", this.onClickDoc), window.onresize = null
                }
            }, {
                key: "onClickDoc", value: function (e) {
                    u.a.contains(this.sendBarEl, e.target) || this.inputEl.blur()
                }
            }, {
                key: "onTargetQuit", value: function () {
                    this.toast = "对方已经离开了，去寻找新的缘分吧"
                }
            }, {
                key: "onMsgDone", value: function () {
                    this.setState({inputValue: ""})
                }
            }, {
                key: "onMsgUpdate", value: function (e) {
                    var t = this;
                    +e.from === this.props.msgto && (this.lastUpdate = !0, clearTimeout(this.inputingCountDown), this.inputingCountDown = setTimeout(function () {
                        t.lastUpdate = !1
                    }, 1e4))
                }
            }, {
                key: "onMsgFail", value: function (e) {
                    if (7101 === e.code) {
                        var t = "";
                        ks.getState()[this.props.msgto] && (t = ks.getState()[this.props.msgto].nickname), zo.notify("您已被".concat(t, "拉黑，消息发送失败"), 3e3)
                    } else zo.notify("消息发送失败，请检查当前网络状态", 3e3)
                }
            }, {
                key: "onMsgCustom", value: function (e) {
                    var t = e.type, n = e.msgto;
                    "ROBOT_INTERACT_INIT" === t ? this.toast = "请先完成答题，再点击输入框" : "ROBOT_INTERACT" === t && (n === this.props.msgto ? this.toast = "请先等待对方回答问题哦" : this.toast = "请先完成答题，再点击输入框")
                }
            }, {
                key: "onRobotShow", value: function (e) {
                    var t = e.type;
                    "ROBOT_INTERACT_INIT" === t || "ROBOT_INTERACT" === t ? (this.toast = "请先完成答题，再点击输入框", nn.emit(en, {blur: !0})) : this.toast = "请先回答M2小可爱的问题哟", "oneoff" === Oe.memo(re) ? this.setState(function (e) {
                        return {inputValue: e.inputValue, inputDisable: !0, robotDisable: !0}
                    }) : this.setState(function (e) {
                        return {inputValue: e.inputValue, inputDisable: !1, robotDisable: !0}
                    })
                }
            }, {
                key: "onRobotDone", value: function () {
                    this.setState(function (e) {
                        return {inputValue: e.inputValue, inputDisable: !1, robotDisable: !1}
                    })
                }
            }, {
                key: "onKeyDown", value: function (e) {
                    13 === e.keyCode && this.sendMsg()
                }
            }, {
                key: "onClickRobot", value: function () {
                    this.state.robotDisable ? zo.notify(this.toast, 3e3) : (localStorage.setItem("hasShowM2", !0), clearTimeout(this.m2AniTimer), u()(this.m2Robot).removeClass("ani"), nn.emit(zt, {type: "INIT"}))
                }
            }, {
                key: "onClickInputWrap", value: function () {
                    this.state.inputDisable && zo.notify(this.toast, 3e3)
                }
            }, {
                key: "shouldPadding", value: function () {
                    var e = "ballad" === this.props.viewStyle ? u()("#j-chatroom-scroll-ballad")[0] : u()("#j-chatroom-scroll")[0];
                    return 12 <= l.a.getIosLargeVersion() && e && e.scrollHeight > e.offsetHeight
                }
            }, {
                key: "onFocus", value: function () {
                    var t = this;
                    u()(".j-has-sendbar").addClass("z-keyboard"), l.a.isIos() && u()(".j-sendBar").css({top: "".concat(window.innerHeight - 55, "px")}), setTimeout(function () {
                        if (t.shouldPadding()) {
                            window.scroll(0, document.documentElement.scrollHeight);
                            var e = u()("#j-chatroom-scroll .m-messagePop").last()[0];
                            e && e.scrollIntoView()
                        }
                    }, 300)
                }
            }, {
                key: "onBlur", value: function () {
                    var e = this;
                    setTimeout(function () {
                        u()(e.inputEl).is(":focus") || (u()(".j-has-sendbar").removeClass("z-keyboard"), l.a.isIos() && (window.scroll(0, 0), u()(".j-sendBar").css({top: "".concat(window.innerHeight - 66, "px")}), e.shouldPadding() && u()("#j-chatroom-parent").css({"padding-bottom": "".concat(66, "px")})))
                    }, 300)
                }
            }, {
                key: "oninputChange", value: function (e) {
                    var t = JSON.parse(JSON.stringify(this.state));
                    this.setState(Object.assign(t, {inputValue: e.target.value})), this.lastUpdate && this.inputSysMsg()
                }
            }, {
                key: "sendMsg", value: function () {
                    var e = this.state.inputValue, t = this.props.msgto;
                    this.state.inputDisable ? zo.notify(this.toast, 3e3) : e ? (nn.emit(xt, e, t), this.setState(function (e) {
                        return {inputValue: "", inputDisable: e.inputDisable, robotDisable: e.robotDisable}
                    })) : zo.notify("发送信息不能为空哦", 3e3)
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props.viewStyle, n = this.state, o = n.hasShowArrow, a = n.inputDisable,
                        r = n.hasShowM2 ? "hasShowM2" : "";
                    return C.a.createElement("div", {
                        className: "j-sendBar m-sendBar m-".concat(e, "-sendBar ").concat(o ? "hasShowArrow" : "", " ").concat(a ? "z-gray" : ""),
                        ref: function (e) {
                            t.sendBarEl = e
                        }
                    }, C.a.createElement("div", {className: "skinbg"}), C.a.createElement("div", {className: "ctrl"}, C.a.createElement("a", {
                        href: "javascript:;",
                        className: "send",
                        onClick: this.sendMsg
                    }, "发送"), C.a.createElement("div", {
                        className: "robot ".concat(r), ref: function (e) {
                            t.m2Robot = e
                        }, onClick: this.onClickRobot
                    })), C.a.createElement("div", {
                        className: "inputWrap",
                        onClick: this.onClickInputWrap
                    }, C.a.createElement("div", {className: "inner f-bd"}, C.a.createElement(Im.a, {
                        ref: function (e) {
                            t.inputEl = e
                        },
                        className: "ipt",
                        value: this.state.inputValue,
                        onChange: this.oninputChange,
                        disabled: this.state.inputDisable,
                        onKeyDown: this.onKeyDown,
                        onFocus: this.onFocus,
                        onBlur: this.onBlur
                    }))))
                }
            }]) && zm(t.prototype, n), o && zm(t, o), a
        }();
        Gm.propTypes = {msgto: S.a.number.isRequired, viewStyle: S.a.string}, Gm.defaultProps = {viewStyle: "base"};
        var Fm = {
            getSong: function (e) {
                return Ce("/api/song/static/detail", {
                    data: {c: JSON.stringify([{id: e}])},
                    method: "GET"
                }).then(function (e) {
                    var t = e.songs[0];
                    return t = Oe.simpleTrack2NormalTrack(t)
                })
            }, getPlayUrl: function (e) {
                return Ce("/api/song/enhance/play/url", {
                    data: {ids: JSON.stringify([e]), br: 128e3},
                    method: "GET"
                }).then(function (e) {
                    return e.data[0]
                })
            }, followUser: function (o) {
                return o ? new Promise(function (t, n) {
                    Te.getMainSiteToken(function (e) {
                        Ce("/api/user/follow/".concat(o), {data: {followId: o, checkToken: e}}).then(function (e) {
                            t(e)
                        }).catch(function (e) {
                            201 === e.code ? t(e) : n(e)
                        })
                    })
                }) : Promise.reject()
            }, getLoginUser: function () {
                return Ce("/api/nuser/account/get").then(function (e) {
                    return e.profile
                }).catch(function () {
                    return null
                })
            }, getUserProfile: function (e) {
                return e ? Ce("/api/v1/user/detail/".concat(e, "/")).then(function (e) {
                    return e.profile
                }).catch(function () {
                    return null
                }) : Promise.resolve(null)
            }
        }, Vm = Fm;
        h("MHtf");

        function Ym(e) {
            return (Ym = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Jm(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Qm(e) {
            return (Qm = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Km(e, t) {
            return (Km = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Xm(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Zm = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Qm(o).call(this)) || "object" !== Ym(n) && "function" != typeof n ? Xm(t) : n).state = {show: !0}, e.close = e.close.bind(Xm(Xm(e))), e.dispose = e.dispose.bind(Xm(Xm(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Km(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.show, n = this.props.msgto, o = Oe.memo(K),
                        a = ks.getState()[Oe.memo(W)];
                    return C.a.createElement(w.CSSTransition, {
                        in: t,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer m-layer-gender f-page m-chatQuitModal"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "content f-pr"}, C.a.createElement("div", {className: "m-quitText"}, C.a.createElement("h4", {className: "tt f-thide"}, "HI ".concat(a.nickname)), C.a.createElement("p", {className: "tip"}, "确定要退出吗？"), 3 < o ? C.a.createElement("p", {className: "tip"}, "再退出2小时内不能再玩匹配了哟!") : C.a.createElement("p", {className: "tip"}, "可能再也见不到对方啦"), C.a.createElement("div", {className: "m-quit"}, C.a.createElement("div", {
                        className: "btn quit",
                        onClick: function () {
                            nn.emit(Nt), nn.emit(Et), nn.emit(Wt, {
                                msgto: n,
                                value: "CHAT_TARGET_QUIT",
                                type: "CHAT_TARGET_QUIT"
                            }), e.close()
                        }
                    }, "狠心退出"), C.a.createElement("div", {
                        className: "btn cancel", onClick: function () {
                            e.close()
                        }
                    }, "取消"))))))
                }
            }]) && Jm(t.prototype, n), a && Jm(t, a), o
        }();

        function $m() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement(Zm, n), t), nn.emit(en, {blur: !0})
        }

        Zm.propTypes = {container: S.a.instanceOf(Element).isRequired, msgto: S.a.number.isRequired};
        h("GQoy");

        function ep(e) {
            return (ep = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function tp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function np(e) {
            return (np = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function op(e, t) {
            return (op = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ap(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var rp, ip = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = np(o).call(this)) || "object" !== ep(n) && "function" != typeof n ? ap(t) : n).state = {show: !0}, rp = ap(ap(e)), e.close = e.close.bind(ap(ap(e))), e.dispose = e.dispose.bind(ap(ap(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && op(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    rp && (rp.setState({show: !1}), setTimeout(rp.dispose, 300))
                }
            }, {
                key: "dispose", value: function () {
                    var e = rp.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e), rp = null
                }
            }, {
                key: "onReport", value: function (e) {
                    var t = this;
                    if (void 0 === Oe.memo(Z)) Oe.memo(Z, 1); else {
                        var n = Oe.memo(Z);
                        if (2 < n) return zo.notify("举报成功", 3e3), void this.close();
                        Oe.memo(Z, n + 1)
                    }
                    Is.report({targetUserId: this.props.msgto, message: e}).then(function () {
                        var e = Oe.memo(W);
                        Oe.biLogClick("chatroom", "complain", {
                            targetid: t.props.msgto,
                            page: "chatroom",
                            chatroomid: t.props.msgto + e + (new Date).getTime()
                        }), t.props.cb(), zo.notify("举报成功", 3e3), t.close()
                    }).catch(function () {
                        zo.notify("举报失败，请稍后再试试哦", 3e3)
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.show, n = Oe.memo(W), o = ks.getState()[n].nickname,
                        a = ks.getState()[this.props.msgto].nickname;
                    return C.a.createElement(w.CSSTransition, {
                        in: t,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer m-layer-report f-page m-reportReasonModal"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "content f-pr"}, C.a.createElement("div", {className: "m-quitText"}, C.a.createElement("h4", {className: "tt f-thide"}, "Hi ".concat(o)), C.a.createElement("p", {className: "tip"}, "举报".concat(a, "的原因？")), C.a.createElement("ul", {className: "m-reason"}, C.a.createElement("li", {
                        className: "reason",
                        onClick: this.onReport.bind(this, "营销广告")
                    }, "营销广告"), C.a.createElement("li", {
                        className: "reason",
                        onClick: this.onReport.bind(this, "营销广告")
                    }, "淫秽色情"), C.a.createElement("li", {
                        className: "reason",
                        onClick: this.onReport.bind(this, "人身攻击")
                    }, "人身攻击"), C.a.createElement("li", {
                        className: "reason",
                        onClick: this.onReport.bind(this, "其他")
                    }, "其他")), C.a.createElement("div", {
                        className: "m-cancel", onClick: function () {
                            e.close()
                        }
                    }, "X")))))
                }
            }]) && tp(t.prototype, n), a && tp(t, a), o
        }();

        function cp() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement(ip, n), t), nn.emit(en, {blur: !0})
        }

        ip.propTypes = {
            container: S.a.instanceOf(Element).isRequired,
            msgto: S.a.number.isRequired,
            cb: S.a.func.isRequired
        };
        h("8Iw+");

        function sp(e) {
            return (sp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function up(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function lp(e) {
            return (lp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function fp(e, t) {
            return (fp = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function mp(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var pp = function (e) {
            function a(e) {
                var t, n, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), n = this, (t = !(o = lp(a).call(this, e)) || "object" !== sp(o) && "function" != typeof o ? mp(n) : o).state = {
                    nav: "hideNav",
                    shouldPunish: !0,
                    inputNav: "",
                    followedId: {}
                }, t.showNav = t.showNav.bind(mp(mp(t))), t.onFollow = t.onFollow.bind(mp(mp(t))), t.onBlackList = t.onBlackList.bind(mp(mp(t))), t.onPunish = t.onPunish.bind(mp(mp(t))), t.onCountDown = t.onCountDown.bind(mp(mp(t))), t.clearCountDown = t.clearCountDown.bind(mp(mp(t))), t.onBack = t.onBack.bind(mp(mp(t))), t.onClickDoc = t.onClickDoc.bind(mp(mp(t))), t.onSysMsgUpdate = t.onSysMsgUpdate.bind(mp(mp(t))), t.onShowChatRoom = t.onShowChatRoom.bind(mp(mp(t))), t
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && fp(e, t)
            }(a, s["Component"]), t = a, (n = [{
                key: "componentDidMount", value: function () {
                    this.setState({
                        showCountDown: !1,
                        countdownNum: "00:00"
                    }), nn.on(Jt, this.onPunish), nn.on(Ot, this.onShowChatRoom), nn.on(Zt, this.onCountDown), nn.on(Nt, this.clearCountDown), nn.on(Gt, this.onSysMsgUpdate), document.body.addEventListener("click", this.show), u()(".j-chatroom").on("click", this.onClickDoc)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    this.clearCountDown(), nn.off(Jt, this.onPunish), nn.off(Ot, this.onShowChatRoom), nn.off(Zt, this.onCountDown), nn.off(Nt, this.clearCountDown), nn.off(Gt, this.onSysMsgUpdate), u()(".j-chatroom").off("click", this.onClickDoc), document.body.removeEventListener("click", this.show), rp && rp.close()
                }
            }, {
                key: "onShowChatRoom", value: function () {
                    this.hasReport = !1
                }
            }, {
                key: "onSysMsgUpdate", value: function (e) {
                    var t = this;
                    "custom" === e.type && ("INPUT_SYS" === JSON.parse(e.content).type && (this.setState(function (e) {
                        return Object.assign(e, {inputNav: "正在输入..."}), e
                    }), clearTimeout(this.resetInputNav), this.resetInputNav = setTimeout(function () {
                        t.setState(function (e) {
                            return Object.assign(e, {inputNav: ""}), e
                        })
                    }, 3e3)))
                }
            }, {
                key: "onClickDoc", value: function (e) {
                    u.a.contains(this.chatNavEl, e.target) || this.setState({nav: "hideNav"})
                }
            }, {
                key: "onPunish", value: function () {
                    this.setState(function (e) {
                        return Object.assign(e, {shouldPunish: !1}), e
                    })
                }
            }, {
                key: "showNav", value: function () {
                    this.setState(function (e) {
                        var t = "hideNav" === e.nav ? "showNav" : "hideNav";
                        return Object.assign(e, {nav: t}), e
                    })
                }
            }, {
                key: "onFollow", value: function () {
                    var e = this, t = this.props, n = t.msgto, o = t.matchUser, a = this.state.followedId;
                    a[n] || o && o.follow ? this.setState({nav: "hideNav"}) : (Vm.followUser(n).then(function () {
                        zo.notify("关注成功", 3e3), a[n] = !0, e.setState({followedId: Object.assign({}, a)}), nn.emit(Xt, n), o && (o.follow = !0)
                    }).catch(function () {
                        zo.notify("关注失败", 3e3)
                    }), this.showNav())
                }
            }, {
                key: "onBlackList", value: function () {
                    if (this.hasReport) return zo.notify("已经举报过了", 3e3), void this.showNav();
                    if ("oneoff" !== Oe.memo(re)) {
                        var e = Oe.memo(W);
                        Oe.biLogClick("msgbox", "complain", {
                            targetid: this.props.msgto,
                            page: "chatend",
                            chatroomid: this.props.msgto + e + (new Date).getTime(),
                            friendtype: "wxfriend"
                        }), nn.emit(Ut, this.props.msgto), this.hasReport = !0
                    } else {
                        var t = this;
                        cp({
                            msgto: this.props.msgto, cb: function () {
                                t.hasReport = !0
                            }
                        })
                    }
                    this.showNav()
                }
            }, {
                key: "onBack", value: function () {
                    var e = this.props.msgto, t = this.state.shouldPunish;
                    "oneoff" === Oe.memo(re) && t ? $m({msgto: e}) : (nn.emit(Nt), nn.emit(Et))
                }
            }, {
                key: "onCountDown", value: function (e) {
                    clearTimeout(this.countDownTimer);
                    var a = 0 | e, r = +new Date, i = this;
                    !function o() {
                        i.countDownTimer = setTimeout(function () {
                            var e = Math.max(0, a - (+new Date - r) / 1e3 | 0), t = e % 60, n = e / 60 | 0;
                            i.setState({
                                countdownNum: "".concat("00".concat(n).slice(-2), ":").concat("00".concat(t).slice(-2)),
                                showCountDown: !0
                            }), 0 < e && o()
                        }, 200)
                    }()
                }
            }, {
                key: "clearCountDown", value: function () {
                    this.countDownTimer = clearInterval(this.countDownTimer), clearTimeout(this.resetInputNav)
                }
            }, {
                key: "render", value: function () {
                    var t = this, e = this.props, n = e.msgto, o = e.viewStyle, a = e.matchUser, r = this.state,
                        i = r.followedId, c = r.showCountDown, s = r.countdownNum, u = ks.getState()[n],
                        l = i[n] || a && a.follow;
                    return C.a.createElement("div", {
                        className: "m-chatNav m-chatNav-".concat(o), ref: function (e) {
                            t.chatNavEl = e
                        }
                    }, C.a.createElement("span", {
                        className: "u-back icon",
                        onClick: this.onBack
                    }), c && C.a.createElement("span", {className: "countdown"}), C.a.createElement("span", {className: "u-inputStatus f-thide"}, this.state.inputNav || u.nickname), c && C.a.createElement("span", {className: "countdown"}, s), C.a.createElement("div", {
                        className: "u-menu icon",
                        onClick: this.showNav
                    }), C.a.createElement("div", {className: "menu-wrapper ".concat(this.state.nav)}, C.a.createElement("div", {
                        className: "follow menu-item",
                        onClick: this.onFollow
                    }, l ? "已添加对方为好友" : "添加对方为云村好友"), "oneoff" !== Oe.memo(re) ? C.a.createElement("div", {
                        className: "blacklist menu-item",
                        onClick: this.onBlackList
                    }, "加入黑名单") : C.a.createElement("div", {
                        className: "blacklist menu-item",
                        onClick: this.onBlackList
                    }, "举报Ta")))
                }
            }]) && up(t.prototype, n), o && up(t, o), a
        }();

        function hp(e) {
            return (hp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function dp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function yp(e, t) {
            return !t || "object" !== hp(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function bp(e) {
            return (bp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function vp(e, t) {
            return (vp = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        pp.propTypes = {
            matchUser: S.a.objectOf(S.a.any),
            msgto: S.a.number.isRequired,
            viewStyle: S.a.string
        }, pp.defaultProps = {viewStyle: "base", matchUser: null};
        var gp = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), yp(this, bp(t).apply(this, arguments))
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && vp(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.viewStyle, t = void 0 === e ? "base" : e, n = hm[t].bg,
                        o = n ? C.a.createElement(n, null) : null;
                    return C.a.createElement("div", {className: "j-has-sendbar m-familiar"}, o, C.a.createElement(pp, {
                        msgto: this.props.msgto,
                        viewStyle: t
                    }), C.a.createElement(Mm, {
                        msgto: this.props.msgto,
                        viewStyle: t
                    }), C.a.createElement(Gm, {msgto: this.props.msgto, viewStyle: t}))
                }
            }]) && dp(n.prototype, o), a && dp(n, a), t
        }();
        gp.propTypes = {msgto: S.a.number.isRequired, viewStyle: S.a.string}, gp.defaultProps = {viewStyle: "base"};
        h("dHzd");

        function wp(e) {
            return (wp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ep(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Sp(e) {
            return (Sp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Op(e, t) {
            return (Op = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Np(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var _p = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Sp(o).call(this)) || "object" !== wp(n) && "function" != typeof n ? Np(t) : n).state = {
                    show: !0,
                    follow: !1
                }, e.close = e.close.bind(Np(Np(e))), e.dispose = e.dispose.bind(Np(Np(e))), e.onMatchError = e.onMatchError.bind(Np(Np(e))), e.onFollow = e.onFollow.bind(Np(Np(e))), e.onBackToPreChat = e.onBackToPreChat.bind(Np(Np(e))), e.commonEvents = {
                    from: Pt,
                    show: Ot,
                    hide: Nt
                }, nn.on(Tt, e.onMatchError), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Op(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "onMatchError", value: function () {
                    nn.emit(Et), nn.off(Tt, this.onMatchError)
                }
            }, {
                key: "onFollow", value: function () {
                    var e = this;
                    Vm.followUser(this.props.targetUserId).then(function () {
                        nn.emit(Xt, e.props.targetUserId), e.setState(function (e) {
                            return Object.assign(e, {follow: !0}), e
                        })
                    }).catch(function () {
                        zo.notify("关注失败", 3e3)
                    }), Ve.biLogClick("chatroom", "follow", {
                        targetid: this.props.targetUserId,
                        page: "chatroom",
                        chatroomid: this.props.userId + (new Date).getTime()
                    })
                }
            }, {
                key: "onBackToPreChat", value: function () {
                    this.close(), nn.emit(Nt), nn.emit(Et)
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.show, n = this.props, o = n.follow, a = n.userId, r = n.targetUserId,
                        i = ks.getState(), c = i[a], s = i[r], u = (s.nickname || "").slice(0, 8);
                    return 8 < s.nickname.length && (u += "..."), C.a.createElement(w.CSSTransition, {
                        in: t,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer m-layer-chatOver f-page m-chatOver"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {
                        className: "backToPreChat",
                        onClick: this.onBackToPreChat
                    }), C.a.createElement("div", {className: "content f-pr"}, C.a.createElement("h4", {className: "tt f-thide"}, "Hi  ".concat(c.nickname, ":")), o ? C.a.createElement("div", {className: "m-follow"}, C.a.createElement("p", {className: "tip"}, "歌曲已经听完啦"), C.a.createElement("p", {className: "tip"}, "你和".concat(u, "成为云村好友喽")), C.a.createElement("p", {className: "tip last"}, "可以在你的消息列表中找到TA"), C.a.createElement("p", {className: "tip"}, "分享给你的好友"), C.a.createElement("p", {className: "tip"}, "可以解锁更多聊天背景模式哦！")) : C.a.createElement("div", {className: "m-unfollow"}, C.a.createElement("p", {className: "tip"}, "聊天已经结束了"), C.a.createElement("p", {className: "tip"}, "在云村与".concat(u, "相遇")), C.a.createElement("p", {className: "tip last"}, "是奇妙的缘分"), this.state.follow ? C.a.createElement("span", {className: "btn followed"}, "已关注") : C.a.createElement("span", {
                        className: "btn follow",
                        onClick: this.onFollow
                    }, "关注Ta")), C.a.createElement("div", {className: "divide"}), C.a.createElement(Os, {
                        commonEvents: this.commonEvents,
                        onClickMatch: function () {
                            e.props.biLogReplay(), e.close(), nn.emit(Nt), nn.emit(St)
                        },
                        onReadReport: function () {
                            nn.emit(gt), nn.emit(Nt), nn.emit(St), e.close()
                        },
                        onShare: function () {
                            xs({msgto: e.props.userId, lastwith: e.props.targetUserId})
                        }
                    }), C.a.createElement("p", {className: "matchTip"}, "（点击开始匹配，寻找灵魂匹配的人）"))))
                }
            }]) && Ep(t.prototype, n), a && Ep(t, a), o
        }();

        function kp() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function () {
                var e = document.createElement("div");
                document.body.appendChild(e);
                var t = function (a) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), t.forEach(function (e) {
                            var t, n, o;
                            t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = o
                        })
                    }
                    return a
                }({}, n, {container: e});
                i.a.render(C.a.createElement(_p, t), e), nn.emit(en, {blur: !0})
            })
        }

        _p.propTypes = {
            container: S.a.instanceOf(Element).isRequired,
            userId: S.a.number.isRequired,
            targetUserId: S.a.number.isRequired,
            follow: S.a.bool.isRequired,
            biLogReplay: S.a.func
        }, _p.defaultProps = {
            biLogReplay: function () {
            }
        };
        h("f43M");

        function Tp(e) {
            return (Tp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function jp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Pp(e) {
            return (Pp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Cp(e, t) {
            return (Cp = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Rp(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Dp = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Pp(o).call(this)) || "object" !== Tp(n) && "function" != typeof n ? Rp(t) : n).state = {show: !0}, e.close = e.close.bind(Rp(Rp(e))), e.dispose = e.dispose.bind(Rp(Rp(e))), e.onReMatch = e.onReMatch.bind(Rp(Rp(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Cp(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "close", value: function () {
                    nn.emit(Nt), this.setState({show: !1}), setTimeout(this.dispose, 300)
                }
            }, {
                key: "dispose", value: function () {
                    var e = this.props.container;
                    i.a.unmountComponentAtNode(e), e.parentNode.removeChild(e)
                }
            }, {
                key: "onReMatch", value: function () {
                    this.close()
                }
            }, {
                key: "render", value: function () {
                    var e = this, t = this.state.show, n = this.props.msgto, o = ks.getState()[+n].nickname;
                    return C.a.createElement(w.CSSTransition, {
                        in: t,
                        classNames: "z-fade",
                        appear: !0,
                        enter: !1,
                        exit: !1,
                        unmountOnExit: !0,
                        timeout: 300
                    }, C.a.createElement("div", {className: "m-layer m-layer-targetQuit f-page"}, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "content f-pr"}, C.a.createElement("div", {className: "m-quitText"}, C.a.createElement("h4", {className: "tt"}, "".concat(o, "已退出，是否需要重新开始匹配？")), C.a.createElement("div", {className: "m-quit btn quit"}, C.a.createElement("div", {className: "m-reMatch"}, C.a.createElement(la, {
                        from: Pt,
                        onClick: this.onReMatch
                    }, "重新匹配"), C.a.createElement("div", {
                        className: "btn cancel backIndex", onClick: function () {
                            nn.emit(Nt), nn.emit(Et), e.close()
                        }
                    }, "返回首页")))))))
                }
            }]) && jp(t.prototype, n), a && jp(t, a), o
        }();

        function xp() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = document.createElement("div");
            document.body.appendChild(t);
            var n = function (a) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), t.forEach(function (e) {
                        var t, n, o;
                        t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    })
                }
                return a
            }({}, e, {container: t});
            i.a.render(C.a.createElement(Dp, n), t), nn.emit(en, {blur: !0})
        }

        Dp.propTypes = {container: S.a.instanceOf(Element).isRequired, msgto: S.a.number.isRequired};
        h("3nt6");

        function Mp(e) {
            return (Mp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Up(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Ip(e) {
            return (Ip = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Lp(e, t) {
            return (Lp = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ap(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var Hp = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Ip(o).call(this)) || "object" !== Mp(n) && "function" != typeof n ? Ap(t) : n).state = {
                    move: "",
                    moveDone: !1
                }, e.myChatover = "", e.targetChatover = "", e.targetStartChat = !1, e.myStartChat = !1, e.hasAddClock = !1, e.onStartChat = e.onStartChat.bind(Ap(Ap(e))), e.onSysMsgUpdate = e.onSysMsgUpdate.bind(Ap(Ap(e))), e.onChatOver = e.onChatOver.bind(Ap(Ap(e))), e.addClock = e.addClock.bind(Ap(Ap(e))), e.onMsgUpdate = e.onMsgUpdate.bind(Ap(Ap(e))), e.onLoadedMetaData = e.onLoadedMetaData.bind(Ap(Ap(e))), window.globalTheme = "", e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Lp(e, t)
            }(o, s["Component"]), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    nn.on(Gt, this.onSysMsgUpdate), nn.on(Ht, this.onChatOver), nn.on(Rt, this.onMsgUpdate), Cu.on("loadedmetadata", this.onLoadedMetaData), this.myThirtyCountDownFn()
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    clearInterval(this.countDownTimer), clearTimeout(this.targetThirtyCountDown), clearTimeout(this.myThirtyCountDown), clearTimeout(this.moveTimeStep2), clearTimeout(this.moveTimeStep3), clearTimeout(this.moveTimeStep4), clearTimeout(this.moveTimeStep5), nn.off(Gt, this.onSysMsgUpdate), nn.off(Ht, this.onChatOver), nn.off(Rt, this.onMsgUpdate), Cu.off("loadedmetadata", this.onLoadedMetaData), Cu.pause(), Oe.biLogClick("chatroom", "leavechat", {
                        background: this.props.viewStyle || "base",
                        activitygender: 1 === Oe.memo(X) ? "male" : "female",
                        activityalg: Oe.memo(ae),
                        time: this.duration - this.countDownNum,
                        chatroomid: Oe.memo(ce)
                    })
                }
            }, {
                key: "onLoadedMetaData", value: function (e) {
                    this.duration = e.duration, this.countDownNum = e.duration, "GOON_CHAT" === this.targetChatover && "GOON_CHAT" === this.myChatover ? (this.onStartCountDown(), nn.emit(Zt, e.duration)) : this.shouldCountDown() && this.onStartCountDown()
                }
            }, {
                key: "onMsgUpdate", value: function (e) {
                    var t = this.props, n = t.matchUser, o = t.matchData;
                    if (+e.from === n.targetUser.userId) {
                        if (this.targetNoRes) return;
                        this.targetThirtyCountDownFn()
                    } else +e.from === o.userId && clearTimeout(this.myThirtyCountDown)
                }
            }, {
                key: "targetThirtyCountDownFn", value: function () {
                    var e = this;
                    clearTimeout(this.targetThirtyCountDown), this.targetThirtyCountDown = setTimeout(function () {
                        e.targetNoRes || (e.targetNoRes = !0, nn.emit(zt, {type: "CHAT_TARGET_NORES"}), nn.emit(Jt), clearTimeout(e.targetThirtyCountDown))
                    }, 6e8)
                }
            }, {
                key: "myThirtyCountDownFn", value: function () {
                    var e = this;
                    this.myThirtyCountDown = setTimeout(function () {
                        Is.punish(), clearTimeout(e.myThirtyCountDown)
                    }, 6e8)
                }
            }, {
                key: "onStartChat", value: function (e, t) {
                    var n = this;
                    if (!this.myStartChat) {
                        Oe.biLogClick("chatroom", "startchat", {
                            area: e || "background",
                            background: this.props.viewStyle || "base",
                            activitygender: 1 === Oe.memo(X) ? "male" : "female",
                            activityalg: Oe.memo(ae),
                            chatroomid: Oe.memo(ce)
                        }), Cu.changeSrc(this.props.playUrl, !1), t && t.stopPropagation && t.stopPropagation();
                        var o = this.props.matchUser.targetUser.userId;
                        this.myStartChat = !0, nn.emit(Wt, {
                            msgto: o,
                            value: "START_CHAT",
                            type: "START_CHAT"
                        }), this.setState(function (e) {
                            return Object.assign(e, {move: "moveStep1"}), e
                        }), this.targetThirtyCountDownFn(), this.shouldCountDown() && this.onStartCountDown(), this.moveTimeStep2 = setTimeout(function () {
                            nn.emit(zt, {
                                type: "TOAST", content: "hi～已经成功匹配到了最相似的".concat(function () {
                                    var e = Oe.memo(X);
                                    switch (n.props.matchUser.matchType) {
                                        case 1:
                                        case 2:
                                        case 3:
                                            return 1 === e ? "小姐姐" : "小哥哥";
                                        case 4:
                                            return 1 === e ? "小哥哥" : "小姐姐";
                                        default:
                                            return "云村用户"
                                    }
                                }())
                            }), n.setState(function (e) {
                                return Object.assign(e, {move: "moveStep2"}), e
                            })
                        }, 1e3), this.moveTimeStep3 = setTimeout(function () {
                            nn.emit(Yt, {status: n.targetStartChat}), n.setState(function (e) {
                                return Object.assign(e, {move: "moveStep3"}), e
                            })
                        }, 2e3), this.moveTimeStep4 = setTimeout(function () {
                            nn.emit(zt, {type: "TOAST", content: "慢慢聊，有事可以叫我，我可以帮你问对方一个问题。"}), n.setState(function (e) {
                                return Object.assign(e, {move: "moveStep4"}), e
                            })
                        }, 3e3), this.moveTimeStep5 = setTimeout(function () {
                            n.props.song && n.props.song.name && (n.props.matchData.bothStarSong ? nn.emit(Vt, {content: "播放你们共同的红心歌曲《".concat(n.props.song.name, "》，记得打开声音哦")}) : nn.emit(Vt, {content: "为你们共同推荐一首《".concat(n.props.song.name, "》，记得打开声音哦")})), n.setState(function (e) {
                                return Object.assign(e, {moveDone: !0}), e
                            })
                        }, 4e3)
                    }
                }
            }, {
                key: "shouldCountDown", value: function () {
                    return 0 < this.duration && this.targetStartChat && this.myStartChat
                }
            }, {
                key: "onStartCountDown", value: function () {
                    clearTimeout(this.countDownTimer);
                    var n = this.duration || 180, o = +new Date, a = this;
                    !function t() {
                        a.countDownTimer = setTimeout(function () {
                            var e = Math.max(0, n - (+new Date - o) / 1e3 | 0);
                            a.countDownNum = e, a.targetStartChat && a.myStartChat ? (e <= 20 && a.onCountDown15(), e <= 0 && a.onCountDownEnd(), 0 < e && t()) : clearTimeout(a.countDownTimer)
                        }, 200)
                    }()
                }
            }, {
                key: "onCountDown15", value: function () {
                    this.isCountDown15 || (this.isCountDown15 = !0, Is.clearQuitTimes().then(function () {
                        Oe.memo(K, 0)
                    }), this.hasAddClock ? nn.emit(Vt, {content: "聊天马上就要结束了，关注对方，即可在活动页继续找他聊天哦"}) : nn.emit(zt, {type: "CHATOVER"}))
                }
            }, {
                key: "onCountDownEnd", value: function () {
                    this.isCountDownEnd || (this.isCountDownEnd = !0, kp({
                        targetUserId: this.props.matchUser.targetUser.userId,
                        userId: this.props.matchData.userId,
                        follow: this.props.matchUser.follow,
                        biLogReplay: this.biLogReplay.bind(this),
                        matchType: this.props.matchUser.matchType
                    }), clearInterval(this.countDownTimer), Oe.biLogPage("chatend", {
                        background: this.props.viewStyle || "base",
                        activitygender: 1 === Oe.memo(X) ? "male" : "female",
                        activityalg: Oe.memo(ae)
                    }))
                }
            }, {
                key: "onSysMsgUpdate", value: function (e) {
                    var t = JSON.parse(e.content);
                    switch (t.type) {
                        case"START_CHAT":
                            this.targetStartChat = !0, this.shouldCountDown() && this.onStartCountDown(), nn.emit(Qt);
                            break;
                        case"GOON_CHAT":
                            this.targetChatover = t.type, this.myChatover ? "GOON_CHAT" === this.myChatover && (nn.emit(Vt, {content: "哇哦，你们彼此都再想聊一会儿"}), this.addClock()) : nn.emit(Vt, {content: "对方已选择继续聊天～等你呦"});
                            break;
                        case"LEAVE_CHAT":
                            this.targetChatover = t.type, this.myChatover ? nn.emit(Vt, {content: "关注对方，即可在活动页继续找他聊天哦"}) : nn.emit(Vt, {content: "对方已作出选择～等你们呦"});
                            break;
                        case"CHAT_TARGET_QUIT":
                            xp({msgto: this.props.matchUser.targetUser.userId}), nn.emit(Jt), this.targetNoRes = !0, clearTimeout(this.myThirtyCountDown), clearTimeout(this.targetThirtyCountDown), clearInterval(this.countDownTimer)
                    }
                }
            }, {
                key: "onChatOver", value: function (e) {
                    this.myChatover = e, "GOON_CHAT" === this.myChatover && Oe.biLogClick("chatroom", "staychat", {
                        background: this.props.viewStyle || "base",
                        activitygender: 1 === Oe.memo(X) ? "male" : "female",
                        activityalg: Oe.memo(ae),
                        chatroomid: Oe.memo(ce)
                    }), this.targetChatover ? "GOON_CHAT" === this.targetChatover && "GOON_CHAT" === this.myChatover ? (nn.emit(Vt, {content: "哇哦，你们彼此都再想聊一会儿"}), this.addClock()) : "LEAVE_CHAT" !== this.targetChatover && "LEAVE_CHAT" !== this.myChatover || nn.emit(Vt, {content: "关注对方，即可在活动页继续找他聊天哦"}) : nn.emit(Vt, {content: "等待对方选择，双方都选择继续聊天，即可增加一首歌的聊天时间"})
                }
            }, {
                key: "addClock", value: function () {
                    var t = this;
                    clearInterval(this.countDownTimer), Is.getSecondMatchSong({
                        targetUserId: this.props.matchUser.targetUser.userId,
                        userId: this.props.matchData.userId
                    }).then(function (e) {
                        Cu.changeSrc(e.playUrl, !1), t.hasAddClock = !0, nn.emit(Vt, {content: "为你们挑选第二首歌《".concat(e.name, "》，请继续聊天吧")})
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this.props, t = e.matchUser, n = e.matchData, o = ks.getState()[n.userId];
                    if (!o) return null;
                    var a = B.a.directSuffix(o.avatar, {paramWidth: 80, restrain: !0}),
                        r = B.a.directSuffix(t.targetUser.avatarUrl, {paramWidth: 80, restrain: !0}),
                        i = this.props.viewStyle, c = void 0 === i ? "base" : i, s = hm[c].cover,
                        u = C.a.createElement(s, {
                            onStartChat: this.onStartChat,
                            currentUserImageUrl: a,
                            targetUserImageUrl: r,
                            move: this.state.move,
                            myInfo: o,
                            matchUser: t
                        }), l = hm[c].bg, f = l ? C.a.createElement(l, null) : null;
                    return C.a.createElement("div", {className: "j-has-sendbar m-stranger"}, u, C.a.createElement("div", {className: "m-chatPage ".concat(this.state.move)}, f, this.state.moveDone ? C.a.createElement(pp, {
                        matchUser: t,
                        msgto: t.targetUser.userId,
                        viewStyle: c
                    }) : null, C.a.createElement(Mm, {
                        className: this.state.move || this.state.moveDone ? "" : "z-hide",
                        msgto: t.targetUser.userId,
                        viewStyle: c
                    })), this.state.moveDone ? C.a.createElement(Gm, {
                        msgto: t.targetUser.userId,
                        matchType: t.matchType,
                        viewStyle: c
                    }) : null)
                }
            }, {
                key: "biLogReplay", value: function () {
                    Oe.biLogClick("chatend", "repeat", {
                        background: this.props.viewStyle || "base",
                        activitygender: 1 === Oe.memo(X) ? "male" : "female",
                        activityalg: Oe.memo(ae),
                        chatroomid: Oe.memo(ce)
                    })
                }
            }]) && Up(t.prototype, n), a && Up(t, a), o
        }();

        function zp(e) {
            return (zp = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function qp(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Bp(e, t, n) {
            return (Bp = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = Wp(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function Wp(e) {
            return (Wp = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Gp(e, t) {
            return (Gp = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Fp(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        Hp.propTypes = {
            matchUser: S.a.objectOf(S.a.any).isRequired,
            matchData: S.a.objectOf(S.a.any).isRequired,
            song: S.a.objectOf(S.a.any).isRequired,
            playUrl: S.a.string.isRequired,
            viewStyle: S.a.string
        };
        Hp.defaultProps = {viewStyle: "base"};
        var Vp = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = Wp(o).call(this)) || "object" !== zp(n) && "function" != typeof n ? Fp(t) : n).state = {chatType: "none"}, e.onMsgUpdate = e.onMsgUpdate.bind(Fp(Fp(e))), e.onGetChatData = e.onGetChatData.bind(Fp(Fp(e))), nn.on(Rt, e.onMsgUpdate), nn.on(Dt, e.onGetChatData), e.commonEvents = {
                    from: Ct,
                    show: Ot,
                    hide: Nt
                }, e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Gp(e, t)
            }(o, un), t = o, (n = [{
                key: "onMsgUpdate", value: function (e) {
                    var t = this.msgto;
                    if (t && "custom" === e.type) {
                        var n = JSON.parse(e.content);
                        "ROBOT_INTERACT_INIT" !== n.type || +e.from !== t && +e.to !== t || (nn.emit(Kt), nn.emit(zt, {
                            type: "ROBOT_INTERACT_INIT",
                            content: n.data.value
                        }))
                    }
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    Bp(Wp(o.prototype), "componentWillUnmount", this).call(this), nn.off(Dt, this.onGetChatData), nn.off(Rt, this.onMsgUpdate)
                }
            }, {
                key: "onGetChatData", value: function (e) {
                    var t, n, o, a = e.matchUser, r = e.matchData, i = e.song, c = e.playUrl, s = e.msgto;
                    if (this.show(), r) {
                        this.matchUser = a, this.matchData = r, this.song = i, this.playUrl = c, this.viewStyle = pm((a.tag || "").split(",")[0]), Oe.memo(re, "oneoff"), this.setState({chatType: "stranger"}), this.msgto = a.targetUser.userId;
                        var u = this.msgto + r.userId + (new Date).getTime();
                        Oe.memo(ce, u), Oe.memo(K, a.exitCount), Oe.biLogPage("chatroom", {
                            background: this.viewStyle,
                            activitygender: 1 === Oe.memo(X) ? "male" : "female",
                            activityalg: Oe.memo(ae),
                            time: Oe.memo(oe) - Oe.memo(ne),
                            chatroomid: u
                        })
                    } else {
                        this.msgto = s;
                        var l = Oe.memo(W), f = Oe.query("msgto"), m = (o = Oe.query("theme"), fm[o] || "base"),
                            p = this.msgto + l + (new Date).getTime();
                        Oe.memo(ce, p), Oe.memo(re, "wxfriend"), Oe.query("theme") && +l == +f || +f == +s ? this.viewStyle = m : this.viewStyle = (n = s, (t = l) && n && He.val("THEME_".concat(t, "_").concat(n)) || "base"), this.setState({chatType: "familiar"}), nn.emit(St), Is.resetSessionUnread({fromUserId: s}), Oe.biLogPage("msgbox", {
                            friendtype: "wxfriend",
                            friendid: this.msgto,
                            chatroomid: p
                        })
                    }
                }
            }, {
                key: "show", value: function () {
                    Bp(Wp(o.prototype), "show", this).call(this), Oe.enableDefaultTouch()
                }
            }, {
                key: "hide", value: function () {
                    this.setState({chatType: "none"}), Bp(Wp(o.prototype), "hide", this).call(this)
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = this.state.chatType;
                    return C.a.createElement("div", {
                        className: "j-chatroom m-module m-module-chatroom f-page ".concat(e),
                        ref: function (e) {
                            t.container = e
                        }
                    }, "stranger" === e ? C.a.createElement(Hp, {
                        matchUser: this.matchUser,
                        matchData: this.matchData,
                        song: this.song,
                        playUrl: this.playUrl,
                        viewStyle: this.viewStyle
                    }) : null, "familiar" === e ? C.a.createElement(gp, {
                        msgto: this.msgto,
                        viewStyle: this.viewStyle
                    }) : null)
                }
            }]) && qp(t.prototype, n), a && qp(t, a), o
        }();

        function Yp(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = [], o = !0, a = !1, r = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(o = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0) ;
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        var Jp = !1, Qp = 0, Kp = 0;

        function Xp() {
            Jp = !0, clearTimeout(Qp), Kp = 0
        }

        function Zp(r, n) {
            return new Promise(function (e, t) {
                Jp = !1, Kp = 0, function t(n, o, a) {
                    switch (n.matched) {
                        case 1:
                            Xp(), o(n);
                            break;
                        case 0:
                            if (100 <= Kp) {
                                Xp(), a();
                                break
                            }
                            Qp = setTimeout(function () {
                                Jp || (++Kp, xe.getMatchUserPoll({gender: r, forced: n.forced}).then(function (e) {
                                    t(e.data, o, a)
                                }).catch(function (e) {
                                    e && e.message ? (Xp(), a(e)) : (t(n, o, a), Oe.biLogAction("sysaction", {
                                        target: "annualreport2018_match_error",
                                        err: e
                                    }))
                                }))
                            }, n.nextQueryInterval || 3e3);
                            break;
                        default:
                            Xp(), a()
                    }
                }(n, e, t)
            })
        }

        var $p, eh, th, nh = ($p = 0, function (n) {
            return new Promise(function (e, t) {
                !function e(t, n, o) {
                    Vm.getSong(t).then(function (e) {
                        n(e)
                    }).catch(function () {
                        1 < $p ? o() : setTimeout(function () {
                            ++$p, e(t, n, o)
                        }, 800)
                    })
                }(n, e, t)
            })
        }), oh = (eh = 0, function (n) {
            return new Promise(function (e, t) {
                !function e(t, n, o) {
                    Vm.getPlayUrl(t).then(function (e) {
                        n(e.url)
                    }).catch(function () {
                        1 < eh ? o() : setTimeout(function () {
                            ++eh, e(t, n, o)
                        }, 800)
                    })
                }(n, e, t)
            })
        }), ah = (th = 0, function (n, o) {
            return new Promise(function (e, t) {
                !function e(t, n, o, a) {
                    xe.getMatchData(t, n).then(function (e) {
                        o(e)
                    }).catch(function () {
                        1 < th ? a() : setTimeout(function () {
                            ++th, e(t, n, o, a)
                        }, 800)
                    })
                }(n, o, e, t)
            })
        });
        var rh = h("4EFF");

        function ih(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        var ch = function () {
            function p(e, t, n, o, a, r, i, c, s, u, l) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, p), this.curve = new rh.EllipseCurve(e, t, n, o, a, r, i, c);
                var f = this.curve.getPoints(100), m = new rh.BufferGeometry;
                m.setFromPoints(f), this.material = new rh.ShaderMaterial({
                    uniforms: rh.UniformsUtils.merge([rh.UniformsLib.common, rh.UniformsLib.specularmap, rh.UniformsLib.envmap, rh.UniformsLib.aomap, rh.UniformsLib.lightmap, rh.UniformsLib.fog, {
                        diffuse: {value: new rh.Color(16777215)},
                        u_time: {value: 1, type: "f"},
                        shape: {value: l}
                    }]), defines: {USE_ENVMAP: !0}, vertexShader: h("dNiJ"), fragmentShader: h("/UHX")
                }), this.line = new rh.Line(m, this.material), this.line.rotation.x += Math.cos(s) * u
            }

            var e, t, n;
            return e = p, (t = [{
                key: "update", value: function (e) {
                    this.material.uniforms.u_time.value = e
                }
            }, {
                key: "changeShape", value: function (e) {
                    this.material.uniforms.shape.value = e, this.material.needsUpdate = !0
                }
            }]) && ih(e.prototype, t), n && ih(e, n), p
        }();

        function sh(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        var uh = function () {
            function o(e) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), this.width = e.clientWidth, this.height = e.clientHeight, this.camera = new rh.PerspectiveCamera(70, this.width / this.height, .1, 100), this.camera.position.z = 42, this.scene = new rh.Scene, this.lines = [], this.groupEllipse = new rh.Group;
                for (var t = 0; t < 105; t++) {
                    var n = new ch(0, 0, 10, 10, 0, 2 * Math.PI, !1, 0, 10, t, .03);
                    this.lines.push(n), this.groupEllipse.add(n.line)
                }
                this.scene.add(this.groupEllipse), this.renderer = new rh.WebGLRenderer({
                    antialias: !0,
                    alpha: !0
                }), this.renderer.setPixelRatio(2), this.renderer.setSize(this.width, this.height), e.appendChild(this.renderer.domElement), this.animate = this.animate.bind(this)
            }

            var e, t, n;
            return e = o, (t = [{
                key: "setSound", value: function (e) {
                    this.sound = e
                }
            }, {
                key: "removeSound", value: function () {
                    this.sound && (this.sound.pause(), this.sound = null)
                }
            }, {
                key: "animate", value: function () {
                    this.animateId = requestAnimationFrame(this.animate), this.groupEllipse.rotation.x += .005 * Math.cos(10), this.groupEllipse.rotation.y += .01 * Math.sin(10);
                    var e, t = 0;
                    this.sound && (e = this.sound.getFrequencyData(20), t = e.reduce(function (e, t) {
                        return e + t
                    }) / e.length / 200), this.lines.forEach(function (e) {
                        e.update(t)
                    }), this.renderer.render(this.scene, this.camera)
                }
            }, {
                key: "stop", value: function () {
                    this.removeSound(), this.animateId = cancelAnimationFrame(this.animateId)
                }
            }]) && sh(e.prototype, t), n && sh(e, n), o
        }();
        h("SBbV");

        function lh(e) {
            return (lh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function fh(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = [], o = !0, a = !1, r = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(o = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0) ;
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function mh(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function ph(e, t, n) {
            return (ph = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
                var o = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = hh(e));) ;
                    return e
                }(e, t);
                if (o) {
                    var a = Object.getOwnPropertyDescriptor(o, t);
                    return a.get ? a.get.call(n) : a.value
                }
            })(e, t, n || e)
        }

        function hh(e) {
            return (hh = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function dh(e, t) {
            return (dh = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function yh(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        var bh = function (e) {
            function o() {
                var e, t, n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), t = this, (e = !(n = hh(o).call(this)) || "object" !== lh(n) && "function" != typeof n ? yh(t) : n).state = {
                    onlineCount: 0,
                    tips: []
                }, e.onShowMatchLoading = e.onShowMatchLoading.bind(yh(yh(e))), e.onHideMatchLoading = e.onHideMatchLoading.bind(yh(yh(e))), e.onAsyncMatch = e.onAsyncMatch.bind(yh(yh(e))), e.onStopMatch = e.onStopMatch.bind(yh(yh(e))), e
            }

            var t, n, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && dh(e, t)
            }(o, un), t = o, (n = [{
                key: "componentDidMount", value: function () {
                    ph(hh(o.prototype), "componentDidMount", this).call(this), this.getOnlineCount(), nn.on(yt, this.onShowMatchLoading), nn.on(bt, this.onHideMatchLoading), nn.on(vt, this.onAsyncMatch)
                }
            }, {
                key: "componentWillUnmount", value: function () {
                    ph(hh(o.prototype), "componentWillUnmount", this).call(this), nn.off(yt, this.onShowMatchLoading), nn.off(bt, this.onHideMatchLoading), nn.off(vt, this.onAsyncMatch)
                }
            }, {
                key: "getOnlineCount", value: function () {
                    var n = this;
                    xe.getOnlineCount().then(function (e) {
                        var t = e.onlineCount;
                        n.setState({onlineCount: t})
                    })
                }
            }, {
                key: "onShowMatchLoading", value: function (e) {
                    var t = this, n = e.from, o = e.sound;
                    this.show(), setTimeout(function () {
                        t.showWebgl(o)
                    }, 10), this.from = n, Ve.preventDefaultTouch(), Ve.biLogPage("matching", {activitygender: Ve.memo(te)})
                }
            }, {
                key: "onHideMatchLoading", value: function () {
                    this.hide()
                }
            }, {
                key: "onAsyncMatch", value: function (e) {
                    var a = this, t = e.gender, n = e.initMatchUser;
                    this.isStopMatch = !1, xe.getLoadingTips().then(function (e) {
                        a.loadingData = e, a.calcLoadingTips(e)
                    }), Promise.all([Zp(t, n), new Promise(function (e) {
                        setTimeout(function () {
                            e()
                        }, 3e3)
                    })]).then(function (e) {
                        var u, l, t = fh(e, 1)[0];
                        return u = n, l = t, new Promise(function (s) {
                            Promise.all([nh(l.songId), oh(l.songId), ah(l.targetUser.userId, l.songId)]).then(function (e) {
                                var t = Yp(e, 3), n = t[0], o = t[1], a = t[2];
                                delete l.exitCount, delete l.reportCount, delete l.punished;
                                var r = Object.assign(u, l), i = n, c = o;
                                i && c || !r.song || !r.song.playUrl || (i = r.song, c = r.song.playUrl), s({
                                    matchUser: r,
                                    song: i,
                                    playUrl: c,
                                    matchData: a
                                })
                            })
                        })
                    }).then(function (e) {
                        a.hide();
                        var t = a.loadingData, n = e.matchUser, o = e.matchData;
                        t && (o.keyword = t.keyword, o.playDayTime = t.playDayTime, o.cityId = t.city, o.cityName = t.cityName), function (e, t, n) {
                            var o = "base";
                            if (n) {
                                var a = n.split(",");
                                if (0 < a.length) {
                                    var r = a[0];
                                    o = pm(r)
                                }
                            }
                            e && t || (o = "base"), He.val("THEME_".concat(e, "_").concat(t), o)
                        }(o.userId, o.matchUserId, n.tag), nn.emit(kt, function (a) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), t.forEach(function (e) {
                                    var t, n, o;
                                    t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[n] = o
                                })
                            }
                            return a
                        }({}, e)), Ve.memo(oe, +new Date)
                    }).catch(function (e) {
                        e && e.message ? (a.onStopMatch(), zo.notify(e && e.message), Ve.memo(oe, +new Date)) : Ve.biLogAction("sysaction", {
                            target: "annualreport2018_match_error",
                            err: e
                        })
                    })
                }
            }, {
                key: "onStopMatch", value: function () {
                    var e = this;
                    this.isStopMatch || (this.isStopMatch = !0, nn.emit(Tt, {from: this.from}), this.hide(), Xp(), xe.stopMatch().then(function () {
                    }).finally(function () {
                        e.isStopMatch = !1
                    }), Ve.biLogClick("matching", "cancelmatch", {
                        activitygender: Ve.memo(te),
                        activityalg: Ve.memo(ae),
                        time: +new Date - Ve.memo(ne)
                    }))
                }
            }, {
                key: "hide", value: function () {
                    this.hideWebgl(), this.stopAnimateGlory(), ph(hh(o.prototype), "hide", this).call(this)
                }
            }, {
                key: "showWebgl", value: function (e) {
                    var t = window.innerWidth / 750;
                    u()(".j-matchnotes").css({
                        webkitTransform: "scale(".concat(t, ")"),
                        transform: "scale(".concat(t, ")")
                    }), this.soundBall || (this.webgl = document.querySelector("#j-match-webgl"), this.soundBall = new uh(this.webgl)), this.soundBall.setSound(e), this.soundBall.animate(), u()(this.webgl).addClass("z-show")
                }
            }, {
                key: "hideWebgl", value: function () {
                    this.soundBall && this.soundBall.stop(), u()(this.webgl).removeClass("z-show")
                }
            }, {
                key: "calcLoadingTips", value: function (e) {
                    var t = e.playDayTime, n = e.playDayTimeCount, o = e.style, a = e.styleCount, r = e.cityName,
                        i = e.cityCount, c = e.keyword, s = e.keywordCount, u = e.topSong, l = e.mostPlayDaySong,
                        f = e.minoritySong, m = e.midnightSong, p = [];
                    if (Ve.getSubCount(), p.push(["&nbsp;", '在云村，你和<span class="s-fcRed">6亿</span>用户相遇'].join("<br/>")), t && 0 < n && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | n), "</span>人"), "热衷在".concat(t, "听歌")].join("<br/>")), o && qe[o] && "unknown" !== o && 0 < a && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | a), "</span>人"), "沉迷在".concat(qe[o], "的世界")].join("<br/>")), r && 0 < i && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | i), "</span>人"), "来自于同一个城市——".concat(r)].join("<br/>")), c && 0 < s && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | s), "</span>人"), "拥有同一个年度关键词——".concat(c)].join("<br/>")), u && u.songName && 0 < u.count && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | u.count), "</span>人"), "在今年播放次数最多的歌都是《".concat(Ve.ellipsisText(u.songName, 20), "》")].join("<br/>")), l && l.songName && 0 < l.count && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | l.count), "</span>人"), "这一年，在很多天里听了《".concat(Ve.ellipsisText(l.songName, 20), "》这首歌")].join("<br/>")), f && f.songName && 0 < f.count && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | f.count), "</span>人"), "喜爱同一首冷门歌《".concat(Ve.ellipsisText(f.songName, 20), "》")].join("<br/>")), m && m.songName && 0 < m.count && 0 < m.time) {
                        var h = Ve.timeObject(1e3 * m.time), d = "";
                        22 <= h.hour ? d = "".concat(h.hour, "点") : h.hour < 4 && (d = "凌晨".concat(h.hour, "点")), d && p.push(['你与<span class="s-fcRed">'.concat(Ve.getSubCount(0 | m.count), "</span>人"), "在".concat(h.month, "月").concat(h.day, "日的").concat(d), "依然沉浸在音乐世界"].join("<br/>"))
                    }
                    this.setState({tips: p})
                }
            }, {
                key: "animateGlory", value: function () {
                    var e = this, t = u()(this.container).find(".j-glory");
                    if (!(t.length <= 1)) {
                        var n = this.animateIndex || 0, o = (n + 1) % t.length;
                        this.gloryTimer = setTimeout(function () {
                            u()(t[n]).addClass("z-hide"), u()(t[o]).addClass("z-show"), setTimeout(function () {
                                u()(t[n]).removeClass("z-show z-hide").addClass("z-init")
                            }, 1e3), e.animateIndex = o, e.animateGlory()
                        }, 5e3)
                    }
                }
            }, {
                key: "stopAnimateGlory", value: function () {
                    this.gloryTimer && (this.gloryTimer = clearTimeout(this.gloryTimer))
                }
            }, {
                key: "createEl", value: function () {
                    var t = this, e = this.state;
                    e.tips, e.onlineCount;
                    return C.a.createElement("div", {
                        className: "m-module m-module-matchloading f-page",
                        ref: function (e) {
                            t.container = e
                        }
                    }, C.a.createElement("div", {className: "bg f-page"}), C.a.createElement("div", {className: "nav"}, C.a.createElement("a", {
                        className: "back",
                        href: "javascript:;",
                        onClick: this.onStopMatch
                    })), C.a.createElement("h4", {className: "tt"}, "在等待匹配的人中", C.a.createElement("br", null), "寻找和你", C.a.createElement("span", {className: "s-fcRed s-fit"}, "听歌品味最像"), "的TA"), C.a.createElement("div", {
                        id: "j-match-webgl",
                        className: "webgl f-page"
                    }, C.a.createElement("div", {className: "j-matchnotes notes"})), C.a.createElement("h5", {className: "sub"}, "你们将进行", C.a.createElement("span", {className: "s-fcRed"}, "实时聊天"), C.a.createElement("br", null), "请珍惜这", C.a.createElement("span", {className: "s-fcRed"}, "一首歌的聊天时间")))
                }
            }]) && mh(t.prototype, n), a && mh(t, a), o
        }();
        h("PtG5");

        function vh(e) {
            return (vh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function gh(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                var n = [], o = !0, a = !1, r = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(o = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); o = !0) ;
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return n
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function wh(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function Eh(e, t) {
            return !t || "object" !== vh(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Sh(e) {
            return (Sh = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Oh(e, t) {
            return (Oh = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Nh() {
            Oe.wakeup()
        }

        var _h = function (e) {
            function t() {
                var e;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (e = Eh(this, Sh(t).call(this))).state = {nickname: "", isSelf: !1}, e
            }

            var n, o, a;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Oh(e, t)
            }(t, s["Component"]), n = t, (o = [{
                key: "componentDidMount", value: function () {
                    var r = this;
                    if (l.a.isInNEMapp()) {
                        var e = window.location.href;
                        return e = e.replace("/sharechat.html", "/index.html"), void setTimeout(function () {
                            Oe.orpheus("orpheus://replace?url=".concat(encodeURIComponent(e)))
                        }, 600)
                    }
                    var t = Oe.query("msgto");
                    Promise.all([Vm.getLoginUser(), Vm.getUserProfile(t)]).then(function (e) {
                        var t = gh(e, 2), n = t[0], o = t[1], a = {isLoading: !1};
                        o && (a.nickname = o.nickname), o && n && o.userId === n.userId ? a.isSelf = !0 : a.isSelf = !1, r.setState(function (a) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {}, t = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                                }))), t.forEach(function (e) {
                                    var t, n, o;
                                    t = a, o = r[n = e], n in t ? Object.defineProperty(t, n, {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[n] = o
                                })
                            }
                            return a
                        }({}, a))
                    })
                }
            }, {
                key: "render", value: function () {
                    var e = this.state, t = e.nickname;
                    return e.isSelf ? C.a.createElement("div", {className: "m-sharechat f-page"}, C.a.createElement("div", {className: "content"}, C.a.createElement("p", {className: "para f-thide"}, "Hi ".concat(t, ":")), C.a.createElement("p", {className: "para para-1"}, "欢迎回来"), C.a.createElement("p", {className: "para"}, "已邀请好友一起聊天"), C.a.createElement("p", {className: "para"}, "比心~", C.a.createElement("span", {className: "love"})), C.a.createElement("p", {className: "from"}, "网易云音乐年度策划", C.a.createElement("br", null), "一歌一遇 世当珍惜")), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "button",
                        onClick: Nh
                    }, "进入聊天")) : C.a.createElement("div", {className: "m-sharechat f-page"}, C.a.createElement("div", {className: "content"}, C.a.createElement("p", {className: "para"}, "Hi Dear:"), C.a.createElement("p", {className: "para"}, "你的好友".concat(t, "，邀请你来网易云音乐体验一种新奇有趣的聊天方式。")), C.a.createElement("p", {className: "para"}, "比心~", C.a.createElement("span", {className: "love"})), C.a.createElement("p", {className: "from"}, "网易云音乐年度策划", C.a.createElement("br", null), "一歌一遇 世当珍惜")), C.a.createElement("a", {
                        href: "javascript:;",
                        className: "button",
                        onClick: Nh
                    }, "接受邀请"))
                }
            }]) && wh(n.prototype, o), a && wh(n, a), t
        }();
        h("cbQP"), h("iDtL");

        function kh(e) {
            return (kh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Th(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }

        function jh(e, t) {
            return !t || "object" !== kh(t) && "function" != typeof t ? function (e) {
                if (void 0 !== e) return e;
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }(e) : t
        }

        function Ph(e) {
            return (Ph = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ch(e, t) {
            return (Ch = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var Rh = window.location, Dh = "annualreport2018",
            xh = {home: "home", msglist: "msglist", msgdetail: "msgdetail"};
        d()("https://c7fdc330349f4356a9e868fdc2a7e1fe@music-sentry.hz.netease.com/56", {sampleRate: .01});
        var Mh = function (e) {
            function a() {
                var e;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), e = jh(this, Ph(a).call(this));
                var t = {module: ""}, n = Rh.pathname;
                /\/sharechat\.html$/.test(n) && (t.module = "sharechat");
                var o = Oe.query("refer");
                return o && Oe.memo(ee, xh[o.toLowerCase()]), e.state = t, setTimeout(function () {
                    /\b_console\b/.test(window.location.search) && new r.a
                }, 500), e
            }

            var t, n, o;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ch(e, t)
            }(a, s["Component"]), t = a, (n = [{
                key: "componentDidMount", value: function () {
                    var t = this;
                    if (Oe.setLogger(Dh), m.a.init({
                        name: Dh,
                        id: Dh,
                        title: "2018，我的网易云音乐听歌日记",
                        subTitle: "点击查看，我的网易云音乐年度听歌报告",
                        link: Oe.getShareLink(),
                        picUrl: "https://p1.music.126.net/uLDm27B4bC_kKSD8le3WwA==/109951163754269117.jpg"
                    }), Oe.isSupportFullscreen() && Oe.hideTopButton(), Te.initWatchman(), Oe.stopAppMusic(), Oe.mediaProtect(), xe.getGender(), !this.state.module) {
                        var n = Oe.query("source");
                        Je.getViewed().then(function (e) {
                            "banner" !== n && e ? (t.setState({module: "prechat"}), u()("#j-bgm")[0].pause()) : (t.setState({module: "report"}), u()("#j-bgm")[0].muted = !1)
                        })
                    }
                }
            }, {
                key: "render", value: function () {
                    var e = this.state.module;
                    return l.a.isMobile() ? "sharechat" === e ? C.a.createElement(_h, null) : C.a.createElement("div", {className: "m-app"}, C.a.createElement(ps, {initShow: "report" === e}), C.a.createElement(ju, {initShow: "prechat" === e}), C.a.createElement(Vp, {initShow: "chatroom" === e}), C.a.createElement(bh, {initShow: !1})) : C.a.createElement(ct, null)
                }
            }]) && Th(t.prototype, n), o && Th(t, o), a
        }(), Uh = document.documentElement, Ih = "";
        l.a.isMobile() || (Ih += " z-web"), l.a.isInNEMapp() && (Ih += " z-inapp"), Oe.isSupportFullscreen() && (Ih += " z-fullscreen"), l.a.isIos() && (Ih += " z-ios"), Uh.className += Ih, Object(o.render)(C.a.createElement(Mh, null), document.getElementById("j-root"))
    }, DG9H: function (e, t, n) {
    }, FuHi: function (e, t, n) {
        e.exports = n.p + "share.704f8dfa5bb259252c679398b904592c.png"
    }, GQoy: function (e, t, n) {
    }, H45Z: function (e, t, n) {
        e.exports = n.p + "prechat_report.67e1e187f10bd7afe6024e37146b72f2.png"
    }, HRug: function (e, t, n) {
    }, HS1D: function (e, t, n) {
        e.exports = n.p + "robot.d6364e215bd772374cb62e9991081834.png"
    }, HcEM: function (e, t, n) {
        e.exports = n.p + "web.e30988ca8c097901b2135cec764cd9b2.jpg"
    }, INS3: function (e, t, n) {
        e.exports = n.p + "txt-light@2x.b90649ba3dcc47d5410cb767416093bb.png"
    }, IkjW: function (e, t, n) {
        e.exports = n.p + "emotion_5.4e262b14b107be84a7786dda52556425.png"
    }, Irui: function (e, t, n) {
        e.exports = n.p + "logo@3x.1a3dd8469e6e45ad4a4baa48f753704d.png"
    }, K3rD: function (e, t, n) {
        e.exports = n.p + "female@2x.34ba74b17eb37f48a37b268d6f55c69d.png"
    }, K7Au: function (e, t, n) {
    }, KVXd: function (e, t, n) {
    }, M9HO: function (e, t, n) {
    }, MHtf: function (e, t, n) {
    }, Ny8A: function (e, t, n) {
        e.exports = n.p + "emotion_2.73c8bd63020d2a68b9ec86ef2a6f31e8.png"
    }, OVjV: function (e, t, n) {
    }, PYKw: function (e, t, n) {
    }, Pr7m: function (e, t, n) {
    }, PtG5: function (e, t, n) {
    }, QA6n: function (e, t, n) {
        e.exports = n.p + "emotion_1.823cadde327afa8d2073a93c04e70358.png"
    }, QB1s: function (e, t, n) {
        e.exports = n.p + "prechat_online.923a3404b1f7d48f2d679a78b5647091.png"
    }, Qzdx: function (e, t, n) {
    }, RPlU: function (e, t, n) {
    }, SBbV: function (e, t, n) {
    }, SaWy: function (e, t, n) {
    }, Sedh: function (e, t, n) {
        e.exports = n.p + "toufa-sprite.85e8b92b5b47b55607f19d4e4f35d6a2.png"
    }, "T+TW": function (e, t, n) {
        e.exports = n.p + "yinfu1-1.b2e338269ef39154a08de1c4cbab204c.png"
    }, "T/mK": function (e, t, n) {
        e.exports = n.p + "txt-dark@2x.b4289e8b2d667a00c1ac4a5f461cf26c.png"
    }, TDJo: function (e, t, n) {
        e.exports = n.p + "manwithbigplanet.e50e9c858c331005b93ca2d2a8fa66cd.png"
    }, U56G: function (e, t, n) {
    }, VJkS: function (e, t, n) {
        e.exports = n.p + "close@2x.1012f1232b5876edb06c202115315e46.png"
    }, VRVe: function (e, t, n) {
        e.exports = n.p + "share@3x.c5d1ed060684fabc3f96ad4a10dc2592.png"
    }, XLsk: function (e, t, n) {
        e.exports = n.p + "yinfu3-1ren.6964bb3319b7e9fdc6e46d7ae68d1afa.png"
    }, "Y/le": function (e, t, n) {
        e.exports = n.p + "heart.5d429e908f7a08f362fd04f51350dd32.gif"
    }, Y6G0: function (e, t, n) {
        e.exports = n.p + "steps.ba163bc17d985b62b923f8fedd15033c.png"
    }, YvdO: function (e, t, n) {
        e.exports = n.p + "txt-dark@3x.fb6a456339f3fde1970af861051ddb40.png"
    }, ZLqY: function (e, t, n) {
    }, a7Z6: function (e, t, n) {
        e.exports = n.p + "bottom-singer.71f09ef593639e246523b057051a5866.png"
    }, bQMk: function (e, t, n) {
    }, bnSU: function (e, t, n) {
        e.exports = n.p + "shou-mohu.9be9924e44b41258c71596bf5f41f588.png"
    }, dBWJ: function (e, t, n) {
    }, dHzd: function (e, t, n) {
    }, dNiJ: function (e, t) {
        e.exports = "#define GLSLIFY 1\nuniform float u_time;\nuniform float shape;\n\n\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\n\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n\nvoid main() {\n\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\n\t#ifdef USE_ENVMAP\n\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\n\t#endif\n\n\t#include <begin_vertex>\n\n\ttransformed.xy += (snoise(u_time + transformed * shape) * 3.);\n\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n\n}"
    }, dYDG: function (e, t, n) {
        e.exports = n.p + "male@2x.8c37d98038a85504a0f1e9960c5044d6.png"
    }, dyvk: function (e, t, n) {
    }, ePZe: function (e, t, n) {
    }, ef13: function (e, t, n) {
    }, efHz: function (e, t, n) {
        e.exports = n.p + "action.74694653987e720e123014bf11d62835.png"
    }, f43M: function (e, t, n) {
    }, fxr8: function (e, t, n) {
    }, "g/YY": function (e, t, n) {
    }, gfDR: function (e, t, n) {
    }, gm9a: function (e, t, n) {
        e.exports = n.p + "youshou.c3f154ec3c137d00e25b8358ef32666c.png"
    }, hnHO: function (e, t, n) {
        e.exports = n.p + "txt-light@3x.3dd78d1ca4e6252b27c946465c8b2ef5.png"
    }, ho3F: function (e, t, n) {
        e.exports = n.p + "no.94db5e11865e9fc9d7fc2dc05090547d.gif"
    }, i5qh: function (e, t, n) {
    }, iKw2: function (e, t, n) {
    }, iXIo: function (e, t, n) {
        e.exports = n.p + "emotion_3.3e05e78cd6970e2e45663b869ab0248e.png"
    }, jDmM: function (e, t, n) {
    }, jJhB: function (e, t, n) {
        e.exports = n.p + "prechat_share.938adbd5204fd68c4bbbaff7e8d23a18.png"
    }, jZcQ: function (e, t, n) {
        e.exports = n.p + "m2arrow.10c95881e6d17190b9934c1e1c0105d8.png"
    }, kwsH: function (e, t, n) {
    }, lAQi: function (e, t, n) {
        e.exports = n.p + "year2018-online.56be63aba807a7f9374ab6936ae59b50.png"
    }, nX9n: function (e, t, n) {
    }, nmsm: function (e, t, n) {
    }, oJhw: function (e, t, n) {
    }, oXMO: function (e, t, n) {
    }, op74: function (e, t, n) {
    }, pdN1: function (e, t, n) {
        e.exports = n.p + "howto-star@2x.ac2142165fe7c2bd5fa6c8cd8bec9787.png"
    }, plDS: function (e, t, n) {
    }, q2Lj: function (e, t, n) {
        e.exports = n.p + "emotion_6.589d43ac5877602f05a078311028cbc7.png"
    }, qXDx: function (e, t, n) {
    }, rLDq: function (e, t, n) {
        e.exports = n.p + "howto@2x.d825b8aa3e85aed8473f1a08f03b8ea7.png"
    }, s1Bh: function (e, t, n) {
    }, "sC++": function (e, t, n) {
        e.exports = n.p + "touying.1c2c5c64bf54d8371bf6c1db816ba1c3.png"
    }, sH6w: function (e, t, n) {
    }, sKN3: function (e, t, n) {
    }, t3rD: function (e, t, n) {
    }, tsfi: function (e, t, n) {
        e.exports = n.p + "close@3x.2acfde6ad449a5a236a93e2fe188ff7c.png"
    }, vn1I: function (e, t, n) {
        e.exports = n.p + "shou-qingxi.399c1a9ab86a96159c1620fc7e2c5853.png"
    }, wKCG: function (e, t, n) {
        e.exports = n.p + "menu_android@2x.67a6f9466714526117c5764226ba081f.png"
    }, whlo: function (e, t, n) {
    }, xLGR: function (e, t, n) {
    }, xwN8: function (e, t, n) {
    }, yH2k: function (e, t, n) {
        e.exports = n.p + "back_ios@2x.8f57dd48e1164ac37fbdc254c35a5468.png"
    }, ydeM: function (e, t, n) {
    }, zlVy: function (e, t, n) {
    }, zyiN: function (e, t, n) {
    }
}, [["CqLX", 1, 2]]]);