var skel = function() {
    var e = "config", t = "elements", n = "breakpoints", r = "iterate", i = "getCachedElement", s = "stateId", o = "getElementsByClassName", u = !1, a = "stateElements", f = "cacheElement", l = "length", c = "getElementsByTagName", h = "deviceType", p = null, d = "match", v = "config_breakpoint", m = "parentNode", g = "cache", y = "newInline", b = "orientationChange", w = "insertBefore", E = "object", S = "lockState", x = "vars", T = "head", N = "containers", C = "createElement", k = "_skel_isReversed", L = "locations", A = "className", O = "extend", M = " 0 0 ", _ = !0, D = "isArray", P = "indexOf", H = "onorientationchange", B = "}", j = "location", F = "replace", I = "devicePixelRatio", q = "DOMReady", R = "push", U = "addEventListener", z = "{display:none!important}", W = "parseMeasurement", X = "registerLocation", V = "defaults", $ = "events", J = "substring", K = "!important", Q = "^head", G = "hasOwnProperty", Y = "viewportWidth", Z = "DOMContentLoaded", et = "string", tt = "getDevicePixelRatio", nt = ".row", rt = "_skel_attach", it = "states", st = "matchMedia", ot = "IEVersion", ut = "ignoreOrientation", at = "placeholder", ft = "removeEventListener", lt = "padding-top:", ct = "documentElement", ht = "attached", pt = "resize", dt = "firstChild", vt = "_skel_placeholder", mt = "stateChange", gt = "!important;", yt = "href", bt = "getViewportWidth", wt = "windows", Et = "android", St = "querySelectorAll", xt = "prototype", Tt = "previousSibling", Nt = "innerHTML", Ct = "gutters", kt = "padding:", Lt = "attachElements", At = "domready", Ot = "text/css", Mt = "html", _t = "priority", Dt = "readyState", Pt = "onresize", Ht = "attachElement", Bt = ".\\3$1 ", jt = "collapse", Ft = {
        config: {
            containers: 960,
            pollOnce: u,
            pollOnLock: u,
            prefix: p,
            preload: u,
            reset: u,
            perpetualLock: _,
            domainLock: _,
            ignoreOrientation: u,
            RTL: u,
            grid: {
                collapse: u,
                gutters: 40
            },
            breakpoints: {
                global: {
                    href: u,
                    range: "*"
                }
            },
            events: {}
        },
        isInit: u,
        lockState: p,
        stateId: "",
        me: p,
        breakpoints: [],
        breakpointList: [],
        events: [],
        plugins: {},
        cache: {
            elements: {},
            states: {},
            stateElements: {}
        },
        locations: {
            html: p,
            head: p,
            body: p
        },
        vars: {},
        lsc: "_skel_lock",
        sd: " ",
        css: {
            n: 'article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}a{background:transparent}a:focus{outline:thin dotted}a:active,a:hover{outline:0}h1{font-size:2em;margin:.67em 0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:bold}dfn{font-style:italic}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}mark{background:#ff0;color:#000}code,kbd,pre,samp{font-family:monospace,serif;font-size:1em}pre{white-space:pre-wrap}q{quotes:"C" "D" "8" "9"}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}button,input,select,textarea{font-family:inherit;font-size:100%;margin:0}button,input{line-height:normal}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="search"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}',
            r: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",
            bm: "*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}"
        },
        defaults: {
            breakpoint: {
                config: p,
                elements: p,
                test: p
            },
            config_breakpoint: {
                containers: "100%",
                grid: {},
                href: "",
                lockViewport: u,
                range: "",
                viewport: "",
                viewportWidth: u
            }
        },
        DOMReady: p,
        getElementsByClassName: p,
        indexOf: p,
        isArray: p,
        iterate: p,
        extend: function(e, t) {
            var n;
            Ft[r](t, function(n) {
                Ft[D](t[n]) ? (Ft[D](e[n]) || (e[n] = []), Ft[O](e[n], t[n])) : typeof t[n] == E ? (typeof e[n] != E && (e[n] = {}),
                Ft[O](e[n], t[n])) : e[n] = t[n];
            });
        },
        parseMeasurement: function(e) {
            var t, n;
            if (typeof e !== et) t = [ e, "px" ]; else if (e == "fluid") t = [ 100, "%" ]; else {
                var n;
                n = e[d](/([0-9\.]+)([^\s]*)/), n[l] < 3 || !n[2] ? t = [ parseFloat(e), "px" ] : t = [ parseFloat(n[1]), n[2] ];
            }
            return t;
        },
        getArray: function(e) {
            return Ft[D](e) ? e : [ e ];
        },
        getDevicePixelRatio: function() {
            var e = navigator.userAgent;
            if (Ft[x][h] == "ios" || Ft[x][h] == "mac" || Ft[x][h] == wt || Ft[x][h] == Et && e[d](/Safari\/([0-9]+)/) && parseInt(RegExp.$1) >= 537) return 1;
            if (window[I] !== undefined && !e[d](/(Firefox; Mobile)/)) return window[I];
            if (window[st]) {
                if (window[st]("(-webkit-min-device-pixel-ratio: 2),(min--moz-device-pixel-ratio: 2),(-o-min-device-pixel-ratio: 2/1),(min-resolution: 2dppx)").matches) return 2;
                if (window[st]("(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)").matches) return 1.5;
            }
            return 1;
        },
        getLevel: function(e) {
            return typeof e == "boolean" ? e ? 1 : 0 : parseInt(e);
        },
        getViewportWidth: function() {
            var t, n, r;
            return t = document[ct].clientWidth, n = window.orientation !== undefined ? Math.abs(window.orientation) : u,
            r = Ft[tt](), screen.width < t && (t = screen.width), n !== u && (Ft[e][ut] ? t = Math.min(screen.width, screen.height) : n === 90 ? t = Math.max(screen.width, screen.height) : t = Math.min(screen.width, screen.height)),
            t /= r, t;
        },
        unlock: function() {
            Ft[S] = p, document.cookie = Ft.lsc + "=;expires=Thu, 1 Jan 1970 12:00:00 UTC; path=" + (Ft[e].domainLock ? "/" : window[j].pathname),
            Ft[e].pollOnLock ? Ft.poll() : window[j].reload();
        },
        lock: function(t) {
            Ft[S] = t, document.cookie = Ft.lsc + "=" + t + ";expires=" + (Ft[e].perpetualLock ? "Thu, 1 Jan 2077 12:00:00 UTC" : 0) + "; path=" + (Ft[e].domainLock ? "/" : window[j].pathname),
            Ft[e].pollOnLock ? Ft.poll() : window[j].reload();
        },
        getLock: function() {
            return Ft[S];
        },
        isLocked: function() {
            return !!Ft[S];
        },
        hasActive: function(e) {
            var t = u;
            return Ft[r](e, function(n) {
                t = t || Ft.isActive(e[n]);
            }), t;
        },
        isActive: function(e) {
            return Ft[P](Ft[s], Ft.sd + e) !== -1;
        },
        wasActive: function(e) {
            return Ft[P](Ft[x].lastStateId, Ft.sd + e) !== -1;
        },
        canUse: function(e) {
            return Ft[n][e] && Ft[n][e].test(Ft[bt]());
        },
        useActive: function(e) {
            if (typeof e !== E) return e;
            var t = p;
            return Ft[r](e, function(n) {
                if (t !== p) return;
                Ft.isActive(n) && (t = e[n]);
            }), t;
        },
        unreverseRows: function() {
            var e = Ft[o]("row");
            Ft[r](e, function(t) {
                if (t === l) return;
                var n = e[t];
                if (!n[k]) return;
                var r = n.children, i;
                for (i = 1; i < r[l]; i++) n[w](r[i], r[0]);
                n[k] = u;
            });
        },
        reverseRows: function(e) {
            var t = Ft[o]("row");
            Ft[r](t, function(n) {
                if (n === l) return;
                var r = t[n];
                if (r[k] || e > 0 && r[A][d](/\bno-collapse-([0-9])\b/) && parseInt(RegExp.$1) >= e) return;
                var i = r.children, s;
                for (s = 1; s < i[l]; s++) r[w](i[s], i[0]);
                r[k] = _;
            });
        },
        bind: function(e, t) {
            Ft[$][e] || (Ft[$][e] = []), Ft[$][e][R](t);
        },
        trigger: function(e) {
            if (!Ft[$][e] || Ft[$][e][l] == 0) return;
            var t;
            Ft[r](Ft[$][e], function(t) {
                Ft[$][e][t]();
            });
        },
        onStateChange: function(e) {
            Ft.bind(mt, e), Ft.isInit && e();
        },
        registerLocation: function(e, t) {
            e == T ? t[rt] = function(e, t) {
                t ? this[w](e, this[dt]) : this === Ft.me[m] ? this[w](e, Ft.me) : this.appendChild(e);
            } : t[rt] = function(e, t) {
                t ? this[w](e, this[dt]) : this.appendChild(e);
            }, Ft[L][e] = t;
        },
        addCachedElementToBreakpoint: function(e, r) {
            Ft[n][e] && Ft[n][e][t][R](r);
        },
        addCachedElementToState: function(e, t) {
            Ft[g][a][e] ? Ft[g][a][e][R](t) : Ft[g][a][e] = [ t ];
        },
        cacheElement: function(e, n, r, i) {
            return Ft[g][t][e] = {
                id: e,
                object: n,
                location: r,
                priority: i,
                attached: u
            };
        },
        getCachedElement: function(e) {
            return Ft[g][t][e] ? Ft[g][t][e] : p;
        },
        detachAllElements: function(e) {
            var n, i, s = {};
            Ft[r](e, function(t) {
                s[e[t].id] = _;
            }), Ft[r](Ft[g][t], function(e) {
                if (Ft[g][t][e].id in s) return;
                if (!Ft[g][t][e][ht]) return;
                i = Ft[g][t][e][E];
                if (!i[m] || i[m] && !i[m].tagName) return;
                i[m].removeChild(i), Ft[g][t][e][ht] = u, Ft[g][t][e].onDetach && Ft[g][t][e].onDetach();
            });
        },
        attachElement: function(e) {
            var t, n = e[j], r = u;
            return e[ht] ? _ : (n[0] == "^" && (n = n[J](1), r = _), n in Ft[L] ? (t = Ft[L][n],
            t[rt](e[E], r), e[ht] = _, e.onAttach && e.onAttach(), _) : u);
        },
        attachElements: function(e) {
            var t = [], n = [], i, s, o;
            Ft[r](e, function(n) {
                t[e[n][_t]] || (t[e[n][_t]] = []), t[e[n][_t]][R](e[n]);
            }), Ft[r](t, function(e) {
                if (t[e][l] == 0) return;
                Ft[r](t[e], function(r) {
                    Ft[Ht](t[e][r]) || n[R](t[e][r]);
                });
            }), n[l] > 0 && Ft[q](function() {
                Ft[r](n, function(e) {
                    Ft[Ht](n[e]);
                });
            });
        },
        poll: function() {
            var e, t, i = "";
            Ft[S] ? t = Ft[S] : t = Ft[bt](), Ft[x][Y] = t, Ft[x][I] = Ft[tt](), Ft[r](Ft[n], function(e) {
                Ft[n][e].test(t) && (i += Ft.sd + e);
            }), i === "" && (i = Ft.sd), i !== Ft[s] && (Ft[L][Mt][A] = Ft[L][Mt][A][F](Ft[s], ""),
            Ft.changeState(i), Ft[L][Mt][A] = Ft[L][Mt][A] + Ft[s]);
        },
        updateState: function() {
            var e, i, o, u, f = [];
            if (Ft[s] == Ft.sd) return;
            e = Ft[s][J](1).split(Ft.sd), Ft[r](e, function(o) {
                i = Ft[n][e[o]];
                if (i[t][l] == 0) return;
                Ft[r](i[t], function(e) {
                    Ft[g][it][Ft[s]][t][R](i[t][e]), f[R](i[t][e]);
                });
            }), Ft[g][a][Ft[s]] && (Ft[r](Ft[g][a][Ft[s]], function(e) {
                Ft[g][it][Ft[s]][t][R](Ft[g][a][Ft[s]][e]), f[R](Ft[g][a][Ft[s]][e]);
            }), Ft[g][a][Ft[s]] = []), f[l] > 0 && Ft[Lt](f);
        },
        changeState: function(c) {
            var h, p, b, E, S, C, k, L;
            Ft[x].lastStateId = Ft[s], Ft[s] = c;
            if (!Ft[g][it][Ft[s]]) {
                Ft[g][it][Ft[s]] = {
                    config: {},
                    elements: [],
                    values: {}
                }, b = Ft[g][it][Ft[s]], Ft[s] === Ft.sd ? h = [] : h = Ft[s][J](1).split(Ft.sd),
                Ft[O](b[e], Ft[V][v]), Ft[r](h, function(t) {
                    Ft[O](b[e], Ft[n][h[t]][e]);
                });
                switch (Ft[e].reset) {
                  case "full":
                    C = "iR", (S = Ft[i](C)) || (S = Ft[f](C, Ft[y](Ft.css.r), Q, 2)), b[t][R](S);
                    break;

                  case "normalize":
                    C = "iN", (S = Ft[i](C)) || (S = Ft[f](C, Ft[y](Ft.css.n), Q, 2)), b[t][R](S);
                }
                C = "iBM", (S = Ft[i](C)) || (S = Ft[f](C, Ft[y](Ft.css.bm), Q, 1)), b[t][R](S),
                k = b[e].viewport, b[e][Y] ? k += (k != "" ? "," : "") + "width=" + b[e][Y] : b[e].lockViewport && (k += (k != "" ? "," : "") + "width=device-width"),
                b[e].lockViewport && (k += (k != "" ? "," : "") + "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0"),
                k != "" && (C = "mV" + Ft[s], (S = Ft[i](C)) || (S = Ft[f](C, Ft.newMeta("viewport", k), Q, 4)),
                b[t][R](S)), Ft[x][ot] >= 10 && (C = "mVIE" + Ft[s], (S = Ft[i](C)) || (S = Ft[f](C, Ft[y]("@-ms-viewport{width: device-width}"), Q, 3)),
                b[t][R](S));
                var _, D;
                E = Ft[W](b[e][N]), _ = E[0], D = E[1], b.values[N] = _ + D, C = "iC" + b.values[N];
                if (!(S = Ft[i](C))) {
                    var H, j, I;
                    H = _ * .75 + D, j = _ + D, I = _ * 1.25 + D, S = Ft[f](C, Ft[y]("body{min-width:" + j + B + ".container{margin-left:auto;margin-right:auto;width:" + j + B + ".container.small{width:" + H + B + ".container.big{width:100%;max-width:" + I + ";min-width:" + j + B), T, 3);
                }
                b[t][R](S), C = "iG", (S = Ft[i](C)) || (S = Ft[f](C, Ft[y](".\\31 2u{width:100%}.\\31 1u{width:91.6666666667%}.\\31 0u{width:83.3333333333%}.\\39 u{width:75%}.\\38 u{width:66.6666666667%}.\\37 u{width:58.3333333333%}.\\36 u{width:50%}.\\35 u{width:41.6666666667%}.\\34 u{width:33.3333333333%}.\\33 u{width:25%}.\\32 u{width:16.6666666667%}.\\31 u{width:8.3333333333%}.\\-11u{margin-left:91.6666666667%}.\\-10u{margin-left:83.3333333333%}.\\-9u{margin-left:75%}.\\-8u{margin-left:66.6666666667%}.\\-7u{margin-left:58.3333333333%}.\\-6u{margin-left:50%}.\\-5u{margin-left:41.6666666667%}.\\-4u{margin-left:33.3333333333%}.\\-3u{margin-left:25%}.\\-2u{margin-left:16.6666666667%}.\\-1u{margin-left:8.3333333333%}"), T, 3)),
                b[t][R](S), C = "iGR", (S = Ft[i](C)) || (S = Ft[f](C, Ft[y](".row>*{float:left}.row:after{content:'';display:block;clear:both;height:0}.row:first-child>*{padding-top:0!important}"), T, 3)),
                b[t][R](S), C = "iGG" + b[e].grid[Ct];
                if (!(S = Ft[i](C))) {
                    var U, X, $, Z, et, tt, rt;
                    E = Ft[W](b[e].grid[Ct]), U = E[0], X = E[1], $ = U + X, Z = U / 2 + X, et = U / 4 + X,
                    tt = U * 1.5 + X, rt = U * 2 + X, S = Ft[f]("iGG" + b[e].grid[Ct], Ft[y](".row>*{padding-left:" + $ + B + ".row+.row>*{padding:" + $ + M + $ + B + ".row{margin-left:-" + $ + B + ".row.flush>*{padding-left:0}" + ".row+.row.flush>*{padding:0}" + ".row.flush{margin-left:0}" + ".row.half>*{padding-left:" + Z + B + ".row+.row.half>*{padding:" + Z + M + Z + B + ".row.half{margin-left:-" + Z + B + ".row.quarter>*{padding-left:" + et + B + ".row+.row.quarter>*{padding:" + et + M + et + B + ".row.quarter{margin-left:-" + et + B + ".row.oneandhalf>*{padding-left:" + tt + B + ".row+.row.oneandhalf>*{padding:" + tt + M + tt + B + ".row.oneandhalf{margin-left:-" + tt + B + ".row.double>*{padding-left:" + rt + B + ".row+.row.double>*{padding:" + rt + M + rt + B + ".row.double{margin-left:-" + rt + B), T, 3);
                }
                b[t][R](S);
                if (b[e].grid[jt]) {
                    var st = Ft.getLevel(b[e].grid[jt]);
                    C = "iGC" + st + "-" + b.values[N];
                    if (!(S = Ft[i](C))) {
                        k = ":not(.no-collapse)";
                        switch (st) {
                          case 4:
                            break;

                          case 3:
                            k += ":not(.no-collapse-3)";
                            break;

                          case 2:
                            k += ":not(.no-collapse-2):not(.no-collapse-3)";
                            break;

                          case 1:
                          default:
                            k += ":not(.no-collapse-1):not(.no-collapse-2):not(.no-collapse-3)";
                        }
                        E = Ft[W](b[e].grid[Ct]), L = E[0] + E[1], S = Ft[f](C, Ft[y](".row>*{padding-left:" + L + K + B + ".row>*:first-child{" + "padding-top:0!important" + B + ".row+.row>*{" + kt + L + M + L + K + B + ".row{" + "margin-left:-" + L + gt + B + nt + k + ">*{" + "float:none!important;" + "width:100%!important;" + "margin-left:0!important" + B + nt + k + ":first-child>*{" + lt + L + gt + B + nt + k + ":first-child>:first-child {" + "padding-top:0!important;" + B + nt + k + ">*{" + lt + L + B + nt + k + ">*:first-child{" + "padding-top:0" + B + ".row+.row" + k + ">*{" + kt + L + M + L + B + ".container{" + "max-width:none!important;" + "min-width:0!important;" + "width:" + b[e][N] + K + B), T, 3);
                    }
                    b[t][R](S);
                }
                C = "iCd" + Ft[s];
                if (!(S = Ft[i](C))) {
                    k = [], L = [], Ft[r](Ft[n], function(e) {
                        Ft[P](h, e) !== -1 ? k[R](".not-" + e) : L[R](".only-" + e);
                    });
                    var ut = (k[l] > 0 ? k.join(",") + z : "") + (L[l] > 0 ? L.join(",") + z : "");
                    S = Ft[f](C, Ft[y](ut[F](/\.([0-9])/, Bt)), T, 3), b[t][R](S);
                }
                Ft[r](h, function(s) {
                    Ft[n][h[s]][e][yt] && (C = "ss" + h[s], (S = Ft[i](C)) || (S = Ft[f](C, Ft.newStyleSheet(Ft[n][h[s]][e][yt]), T, 5)),
                    b[t][R](S)), Ft[n][h[s]][t][l] > 0 && Ft[r](Ft[n][h[s]][t], function(e) {
                        b[t][R](Ft[n][h[s]][t][e]);
                    });
                }), Ft[g][a][Ft[s]] && (Ft[r](Ft[g][a][Ft[s]], function(e) {
                    b[t][R](Ft[g][a][Ft[s]][e]);
                }), Ft[g][a][Ft[s]] = []);
            } else b = Ft[g][it][Ft[s]];
            Ft.detachAllElements(b[t]), Ft[Lt](b[t]), Ft[q](function() {
                var t, n, i, s = Ft.getLevel(b[e].grid[jt]);
                Ft[e].RTL && (Ft.unreverseRows(), s > 0 && Ft.reverseRows(s)), Ft[x][ot] > 8 && (n = "_skel_cell_important_placeholder",
                t = Ft[o]("skel-cell-important"), t && t[l] > 0 && Ft[r](t, function(e) {
                    if (e === l) return;
                    var r = t[e], i = r[m], o;
                    if (!i) return;
                    i[A][d](/no-collapse-([0-9])/) ? o = parseInt(RegExp.$1) : i[A][d](/no-collapse/) ? o = 100 : o = 0;
                    if (o < s) {
                        if (r[G](n) && r[n] !== u) return;
                        i = r[Tt];
                        while (i && i.nodeName == "#text") i = i[Tt];
                        if (!i) return;
                        r[m][w](r, r[m][dt]), r[n] = i;
                    } else r[G](n) || (r[n] = u), i = r[n], i !== u && (r[m][w](r, i.nextSibling), r[n] = u);
                }));
            }), Ft[x].state = Ft[g][it][Ft[s]], Ft[x][s] = Ft[s], Ft.trigger(mt);
        },
        newMeta: function(e, t) {
            var n = document[C]("meta");
            return n.name = e, n.content = t, n;
        },
        newStyleSheet: function(e) {
            var t = document[C]("link");
            return t.rel = "stylesheet", t.type = Ot, t[yt] = e, t;
        },
        newInline: function(e) {
            var t;
            return Ft[x][ot] <= 8 ? (t = document[C]("span"), t[Nt] = '&nbsp;<style type="text/css">' + e + "</style>") : (t = document[C]("style"),
            t.type = Ot, t[Nt] = e), t;
        },
        newDiv: function(e) {
            var t = document[C]("div");
            return t[Nt] = e, t;
        },
        registerPlugin: function(e, t) {
            if (!t) return u;
            Ft.plugins[e] = t, t._ = this;
        },
        initPlugin: function(t, n) {
            typeof n == E && Ft[O](t[e], n), t.init();
        },
        initConfig: function(i) {
            function a(e, t) {
                var n;
                return typeof t != et && (n = function(e) {
                    return u;
                }), t == "*" ? n = function(e) {
                    return _;
                } : t.charAt(0) == "-" ? (s[e] = parseInt(t[J](1)), n = function(t) {
                    return t <= s[e];
                }) : t.charAt(t[l] - 1) == "-" ? (s[e] = parseInt(t[J](0, t[l] - 1)), n = function(t) {
                    return t >= s[e];
                }) : Ft[P](t, "-") != -1 ? (t = t.split("-"), s[e] = [ parseInt(t[0]), parseInt(t[1]) ],
                n = function(t) {
                    return t >= s[e][0] && t <= s[e][1];
                }) : (s[e] = parseInt(t), n = function(t) {
                    return t == s[e];
                }), n;
            }
            var s = [], o = [];
            typeof i == E && (i[n] && (Ft[e][n] = {}), Ft[O](Ft[e], i)), Ft[O](Ft[V][v].grid, Ft[e].grid),
            Ft[V][v][N] = Ft[e][N], Ft[r](Ft[e][n], function(r) {
                var i, s = {};
                Ft[O](s, Ft[e][n][r]), yt in s || (s[yt] = Ft[V][v][yt]), "range" in s || (s.range = Ft[V][v].range),
                Ft[e][n][r] = s, i = {}, Ft[O](i, Ft[V].breakpoint), i[e] = Ft[e][n][r], i.test = a(r, i[e].range),
                i[t] = [], Ft[e].prefix && i[e][yt] !== u && (i[e][yt] = Ft[e].prefix + "-" + r + ".css"),
                i[e][yt] === "" && (i[e][yt] = u), Ft[e].preload && i[e][yt] && o[R](i[e][yt]),
                Ft[n][r] = i, Ft.breakpointList[R](r);
            }), Ft[r](Ft[e][$], function(t) {
                Ft.bind(t, Ft[e][$][t]);
            }), o[l] > 0 && window[j].protocol != "file:" && Ft[q](function() {
                var e, t = document[c](T)[0], n = new XMLHttpRequest();
                Ft[r](o, function(e) {
                    n.open("GET", o[e], u), n.send("");
                });
            });
        },
        initEvents: function() {
            var t;
            Ft[e].pollOnce || (Ft.bind(pt, function() {
                Ft.poll();
            }), Ft[e][ut] || Ft.bind(b, function() {
                Ft.poll();
            })), Ft[x][h] == "ios" && Ft[q](function() {
                Ft.bind(b, function() {
                    var e = document[c]("input");
                    Ft[r](e, function(t) {
                        e[t][vt] = e[t][at], e[t][at] = "";
                    }), window.setTimeout(function() {
                        Ft[r](e, function(t) {
                            e[t][at] = e[t][vt];
                        });
                    }, 100);
                });
            }), window[Pt] && Ft.bind(pt, window[Pt]), window[Pt] = function() {
                Ft.trigger(pt);
            }, window[H] && Ft.bind(b, window[H]), window[H] = function() {
                Ft.trigger(b);
            };
        },
        initUtilityMethods: function() {
            document[U] ? !function(e, t) {
                Ft[q] = t();
            }(At, function() {
                function e(e) {
                    s = 1;
                    while (e = t.shift()) e();
                }
                var t = [], n, r = document, i = Z, s = /^loaded|^c/.test(r[Dt]);
                return r[U](i, n = function() {
                    r[ft](i, n), e();
                }), function(e) {
                    s ? e() : t[R](e);
                };
            }) : !function(e, t) {
                Ft[q] = t();
            }(At, function(e) {
                function t(e) {
                    p = 1;
                    while (e = n.shift()) e();
                }
                var n = [], r, i = !1, s = document, o = s[ct], u = o.doScroll, a = Z, f = U, l = "onreadystatechange", c = Dt, h = u ? /^loaded|^c/ : /^loaded|c/, p = h.test(s[c]);
                return s[f] && s[f](a, r = function() {
                    s[ft](a, r, i), t();
                }, i), u && s.attachEvent(l, r = function() {
                    /^c/.test(s[c]) && (s.detachEvent(l, r), t());
                }), e = u ? function(t) {
                    self != top ? p ? t() : n[R](t) : function() {
                        try {
                            o.doScroll("left");
                        } catch (n) {
                            return setTimeout(function() {
                                e(t);
                            }, 50);
                        }
                        t();
                    }();
                } : function(e) {
                    p ? e() : n[R](e);
                };
            }), document[o] ? Ft[o] = function(e) {
                return document[o](e);
            } : Ft[o] = function(e) {
                var t = document;
                return t[St] ? t[St](("." + e[F](" ", " ."))[F](/\.([0-9])/, Bt)) : [];
            }, Array[xt][P] ? Ft[P] = function(e, t) {
                return e[P](t);
            } : Ft[P] = function(e, t) {
                if (typeof e == et) return e[P](t);
                var n, r = t ? t : 0, i;
                if (!this) throw new TypeError();
                i = this[l];
                if (i === 0 || r >= i) return -1;
                r < 0 && (r = i - Math.abs(r));
                for (n = r; n < i; n++) if (this[n] === e) return n;
                return -1;
            }, Array[D] ? Ft[D] = function(e) {
                return Array[D](e);
            } : Ft[D] = function(e) {
                return Object[xt].toString.call(e) === "[object Array]";
            }, Object.keys ? Ft[r] = function(e, t) {
                if (!e) return [];
                var n, r = Object.keys(e);
                for (n = 0; r[n]; n++) t(r[n]);
            } : Ft[r] = function(e, t) {
                if (!e) return [];
                var n;
                for (n in e) Object[xt][G].call(e, n) && t(n);
            };
        },
        initAPI: function() {
            var e, t, n = navigator.userAgent;
            Ft[x][ot] = n[d](/MSIE ([0-9]+)\./) ? RegExp.$1 : 99, e = "other", n[d](/Firefox/) ? e = "firefox" : n[d](/Chrome/) ? e = "chrome" : n[d](/Safari/) && !n[d](/Chrome/) ? e = "safari" : n[d](/(OPR|Opera)/) ? e = "opera" : n[d](/MSIE/) && (e = "ie"),
            Ft[x].browser = e, Ft[x][h] = "other", t = {
                ios: "(iPad|iPhone|iPod)",
                android: "Android",
                mac: "Macintosh",
                wp: "Windows Phone",
                windows: "Windows NT"
            }, Ft[r](t, function(e) {
                n[d](new RegExp(t[e], "g")) && (Ft[x][h] = e);
            });
            switch (Ft[x][h]) {
              case "ios":
                n[d](/([0-9_]+) like Mac OS X/), e = parseFloat(RegExp.$1[F]("_", ".")[F]("_", ""));
                break;

              case Et:
                n[d](/Android ([0-9\.]+)/), e = parseFloat(RegExp.$1);
                break;

              case "mac":
                n[d](/Mac OS X ([0-9_]+)/), e = parseFloat(RegExp.$1[F]("_", ".")[F]("_", ""));
                break;

              case "wp":
                n[d](/IEMobile\/([0-9\.]+)/), e = parseFloat(RegExp.$1);
                break;

              case wt:
                n[d](/Windows NT ([0-9\.]+)/), e = parseFloat(RegExp.$1);
                break;

              default:
                e = 99;
            }
            Ft[x].deviceVersion = e, Ft[x].isTouch = Ft[x][h] == "wp" ? navigator.msMaxTouchPoints > 0 : "ontouchstart" in window,
            e = document.cookie.split(";"), Ft[r](e, function(t) {
                var n = e[t].split("=");
                if (n[0][F](/^\s+|\s+$/g, "") == Ft.lsc) {
                    Ft[S] = n[1];
                    return;
                }
            });
        },
        init: function(e, t) {
            Ft.initUtilityMethods(), Ft.initAPI(), Ft.initConfig(e), Ft[X](Mt, document[c](Mt)[0]),
            Ft[X](T, document[c](T)[0]), Ft[q](function() {
                Ft[X]("body", document[c]("body")[0]);
            }), Ft.initEvents(), Ft.poll(), Ft[r](Ft.plugins, function(e) {
                Ft.initPlugin(Ft.plugins[e], typeof t == E && e in t ? t[e] : p);
            }), Ft.isInit = _;
        }
    }, It = document[c]("script");
    return Ft.me = It[It[l] - 1], Ft;
}();
