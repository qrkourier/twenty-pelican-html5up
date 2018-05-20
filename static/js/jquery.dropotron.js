(function(e) {
    var t = "openerActiveClass", n = "left", r = "doCollapseAll", i = "position", s = "trigger", o = "disableSelection_dropotron", u = "addClass", a = "doCollapse", f = !1, l = "outerWidth", c = "removeClass", h = "preventDefault", p = "dropotron", d = "clearTimeout", v = "length", m = "right", g = "speed", y = !0, b = "parent", w = "none", E = "stopPropagation", S = ":visible", x = "absolute", T = "click", N = "doExpand", C = "css", k = "center", L = "toggle", A = "baseZIndex", O = "offsetX", M = "alignment", _ = "children", D = "submenuClassPrefix", P = "doToggle", H = "hover", B = "ul", j = "relative", F = "opacity", I = "z-index", q = "opener", R = "find", U = "px", z = null, W = "fadeTo", X = "offset";
    e.fn[o] = function() {
        return e(this)[C]("user-select", w)[C]("-khtml-user-select", w)[C]("-moz-user-select", w)[C]("-o-user-select", w)[C]("-webkit-user-select", w);
    }, e.fn[p] = function(t) {
        var n;
        if (this[v] > 1) for (n = 0; n < this[v]; n++) e(this[n])[p](t);
        return e[p](e.extend({
            selectorParent: e(this)
        }, t));
    }, e[p] = function(w) {
        var et = e.extend({
            selectorParent: z,
            baseZIndex: 1e3,
            menuClass: p,
            expandMode: H,
            hoverDelay: 150,
            hideDelay: 250,
            openerClass: q,
            openerActiveClass: "active",
            submenuClassPrefix: "level-",
            mode: "fade",
            speed: "fast",
            easing: "swing",
            alignment: n,
            offsetX: 0,
            offsetY: 0,
            globalOffsetY: 0,
            IEOffsetX: 0,
            IEOffsetY: 0,
            noOpenerFade: y,
            detach: y,
            cloneOnDetach: y
        }, w), tt = et.selectorParent, nt = tt[R](B), rt = e("body"), it = e(window), st = f, ot = z, ut = z;
        tt.on(r, function() {
            nt[s](a);
        }), nt.each(function() {
            var r = e(this), p = r[b]();
            et.hideDelay > 0 && r.add(p).on("mouseleave", function() {
                window[d](ut), ut = window.setTimeout(function() {
                    r[s](a);
                }, et.hideDelay);
            }), r[o]().hide()[u](et.menuClass)[C](i, x).on("mouseenter", function() {
                window[d](ut);
            }).on(N, function() {
                var o, h, v, w, E, T, N, _, D, P, H;
                if (r.is(S)) return f;
                window[d](ut), nt.each(function() {
                    var t = e(this);
                    e.contains(t.get(0), p.get(0)) || t[s](a);
                }), o = p[X](), h = p[i](), v = p[b]()[i](), w = p[l](), E = r[l](), T = r[C](I) == et[A];
                if (T) {
                    et.detach ? N = o : N = h, P = N.top + p.outerHeight() + et.globalOffsetY, _ = et[M], 
                    r[c](n)[c](m)[c](k);
                    switch (et[M]) {
                      case m:
                        D = N[n] - E + w, D < 0 && (D = N[n], _ = n);
                        break;

                      case k:
                        D = N[n] - Math.floor((E - w) / 2), D < 0 ? (D = N[n], _ = n) : D + E > it.width() && (D = N[n] - E + w, 
                        _ = m);
                        break;

                      case n:
                      default:
                        D = N[n], D + E > it.width() && (D = N[n] - E + w, _ = m);
                    }
                    r[u](_);
                } else {
                    p[C](i) == j || p[C](i) == x ? (P = et.offsetY, D = -1 * h[n]) : (P = h.top + et.offsetY, 
                    D = 0);
                    switch (et[M]) {
                      case m:
                        D += -1 * p[b]()[l]() + et[O];
                        break;

                      case k:
                      case n:
                      default:
                        D += p[b]()[l]() + et[O];
                    }
                }
                navigator.userAgent.match(/MSIE ([0-9]+)\./) && RegExp.$1 < 8 && (D += et.IEOffsetX, 
                P += et.IEOffsetY), r[C](n, D + U)[C]("top", P + U), r[C](F, "0.01").show(), H = f, 
                p[C](i) == j || p[C](i) == x ? D = -1 * h[n] : D = 0, r[X]()[n] < 0 ? (D += p[b]()[l]() - et[O], 
                H = y) : r[X]()[n] + E > it.width() && (D += -1 * p[b]()[l]() - et[O], H = y), H && r[C](n, D + U), 
                r.hide()[C](F, "1");
                switch (et.mode) {
                  case "zoom":
                    st = y, p[u](et[t]), r.animate({
                        width: L,
                        height: L
                    }, et[g], et.easing, function() {
                        st = f;
                    });
                    break;

                  case "slide":
                    st = y, p[u](et[t]), r.animate({
                        height: L
                    }, et[g], et.easing, function() {
                        st = f;
                    });
                    break;

                  case "fade":
                    st = y, T && !et.noOpenerFade ? (et[g] == "slow" ? H = 80 : et[g] == "fast" ? H = 40 : H = Math.floor(et[g] / 2), 
                    p[W](H, .01, function() {
                        p[u](et[t]), p[W](et[g], 1), r.fadeIn(et[g], function() {
                            st = f;
                        });
                    })) : (p[u](et[t]), p[W](et[g], 1), r.fadeIn(et[g], function() {
                        st = f;
                    }));
                    break;

                  case "instant":
                  default:
                    p[u](et[t]), r.show();
                }
                return f;
            }).on(a, function() {
                return r.is(S) ? (r.hide(), p[c](et[t]), r[R]("." + et[t])[c](et[t]), r[R](B).hide(), 
                f) : f;
            }).on(P, function() {
                return r.is(S) ? r[s](a) : r[s](N), f;
            }), p[o]()[u](q)[C]("cursor", "pointer").on(T, function(e) {
                if (st) return;
                e[h](), e[E](), r[s](P);
            }), et.expandMode == H && p[H](function() {
                if (st) return;
                ot = window.setTimeout(function() {
                    r[s](N);
                }, et.hoverDelay);
            }, function() {
                window[d](ot);
            });
        }), nt[R]("a")[C]("display", "block").on(T, function(t) {
            if (st) return;
            e(this).attr("href")[v] < 1 && t[h]();
        }), tt[R]("li")[C]("white-space", "nowrap").each(function() {
            var t = e(this), n = t[_]("a"), i = t[_](B);
            n.on(T, function(t) {
                e(this).attr("href")[v] < 1 ? t[h]() : t[E]();
            }), n[v] > 0 && i[v] == 0 && t.on(T, function(e) {
                if (st) return;
                tt[s](r), e[E]();
            });
        }), tt[_]("li").each(function() {
            var t, n, r, i, s = e(this), o = s[_](B);
            if (o[v] > 0) {
                et.detach && (et.cloneOnDetach && (t = o.clone(), t.attr("class", "").hide().appendTo(o[b]())), 
                o.detach().appendTo(rt));
                for (n = et[A], r = 1, i = o; i[v] > 0; r++) i[C](I, n++), et[D] && i[u](et[D] + (n - 1 - et[A])), 
                i = i[R]("> li > ul");
            }
        }), it.on("scroll", function() {
            tt[s](r);
        }).on("keypress", function(e) {
            !st && e.keyCode == 27 && (e[h](), tt[s](r));
        }), rt.on(T, function() {
            st || tt[s](r);
        });
    };
})(jQuery);
