/*
 * Copyright 2016 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */
(function() {
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ba(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments)
    }
    var q = Date.now || function() {
        return +new Date
    };
    function ca(a, b) {
        this.a = a;
        this.m = b || a;
        this.c = this.m.document
    }
    var da = !!window.FontFace;
    function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c)
            for (var e in c)
                c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b
    }
    function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild)
    }
    function v(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }
    function w(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = !1, g = 0; g < d.length; g += 1)
                if (b[e] === d[g]) {
                    f = !0;
                    break
                }
            f || d.push(b[e])
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
            f = !1;
            for (g = 0; g < c.length; g += 1)
                if (d[e] === c[g]) {
                    f = !0;
                    break
                }
            f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }
    function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b)
                return !0;
        return !1
    }
    function z(a) {
        if ("string" === typeof a.f)
            return a.f;
        var b = a.m.location.protocol;
        "about:" == b && (b = a.a.location.protocol);
        return "https:" == b ? "https:" : "http:"
    }
    function ea(a) {
        return a.m.location.hostname || a.a.location.hostname
    }
    function A(a, b, c) {
        function d() {
            k && e && f && (k(g), k = null)
        }
        b = t(a, "link", {
            rel: "stylesheet",
            href: b,
            media: "all"
        });
        var e = !1,
            f = !0,
            g = null,
            k = c || null;
        da ? (b.onload = function() {
            e = !0;
            d()
        }, b.onerror = function() {
            e = !0;
            g = Error("Stylesheet failed to load");
            d()
        }) : setTimeout(function() {
            e = !0;
            d()
        }, 0);
        u(a, "head", b)
    }
    function B(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
            var f = t(a, "script", {
                    src: b
                }),
                g = !1;
            f.onload = f.onreadystatechange = function() {
                g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f))
            };
            e.appendChild(f);
            setTimeout(function() {
                g || (g = !0, c && c(Error("Script load timeout")))
            }, d || 5E3);
            return f
        }
        return null
    }
    ;
    function C() {
        this.a = 0;
        this.c = null
    }
    function D(a) {
        a.a++;
        return function() {
            a.a--;
            E(a)
        }
    }
    function F(a, b) {
        a.c = b;
        E(a)
    }
    function E(a) {
        0 == a.a && a.c && (a.c(), a.c = null)
    }
    ;
    function G(a) {
        this.a = a || "-"
    }
    G.prototype.c = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++)
            b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a)
    };
    function H(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10))
    }
    function fa(a) {
        return I(a) + " " + (a.f + "00") + " 300px " + J(a.c)
    }
    function J(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, "");
            -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d)
        }
        return b.join(",")
    }
    function K(a) {
        return a.a + a.f
    }
    function I(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b
    }
    function ga(a) {
        var b = 4,
            c = "n",
            d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b
    }
    ;
    function ha(a, b) {
        this.c = a;
        this.f = a.m.document.documentElement;
        this.h = b;
        this.a = new G("-");
        this.j = !1 !== b.events;
        this.g = !1 !== b.classes
    }
    function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        L(a, "loading")
    }
    function M(a) {
        if (a.g) {
            var b = y(a.f, a.a.c("wf", "active")),
                c = [],
                d = [a.a.c("wf", "loading")];
            b || c.push(a.a.c("wf", "inactive"));
            w(a.f, c, d)
        }
        L(a, "inactive")
    }
    function L(a, b, c) {
        if (a.j && a.h[b])
            if (c)
                a.h[b](c.c, K(c));
            else
                a.h[b]()
    }
    ;
    function ja() {
        this.c = {}
    }
    function ka(a, b, c) {
        var d = [],
            e;
        for (e in b)
            if (b.hasOwnProperty(e)) {
                var f = a.c[e];
                f && d.push(f(b[e], c))
            }
        return d
    }
    ;
    function N(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", {
            "aria-hidden": "true"
        }, this.f)
    }
    function O(a) {
        u(a.c, "body", a.a)
    }
    function P(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";" + ("font-style:" + I(a) + ";font-weight:" + (a.f + "00") + ";")
    }
    ;
    function Q(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3E3;
        this.h = f || void 0
    }
    Q.prototype.start = function() {
        var a = this.c.m.document,
            b = this,
            c = q(),
            d = new Promise(function(d, e) {
                function k() {
                    q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function(a) {
                        1 <= a.length ? d() : setTimeout(k, 25)
                    }, function() {
                        e()
                    })
                }
                k()
            }),
            e = new Promise(function(a, d) {
                setTimeout(d, b.f)
            });
        Promise.race([e, d]).then(function() {
            b.g(b.a)
        }, function() {
            b.j(b.a)
        })
    };
    function R(a, b, c, d, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3E3;
        this.u = f || null;
        this.o = this.j = this.h = this.g = null;
        this.g = new N(this.c, this.s);
        this.h = new N(this.c, this.s);
        this.j = new N(this.c, this.s);
        this.o = new N(this.c, this.s);
        a = new H(this.a.c + ",serif", K(this.a));
        a = P(a);
        this.g.a.style.cssText = a;
        a = new H(this.a.c + ",sans-serif", K(this.a));
        a = P(a);
        this.h.a.style.cssText = a;
        a = new H("serif", K(this.a));
        a = P(a);
        this.j.a.style.cssText = a;
        a = new H("sans-serif", K(this.a));
        a =
        P(a);
        this.o.a.style.cssText = a;
        O(this.g);
        O(this.h);
        O(this.j);
        O(this.o)
    }
    var S = {
            D: "serif",
            C: "sans-serif"
        },
        T = null;
    function U() {
        if (null === T) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return T
    }
    R.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.o.a.offsetWidth;
        this.A = q();
        la(this)
    };
    function ma(a, b, c) {
        for (var d in S)
            if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]])
                return !0;
        return !1
    }
    function la(a) {
        var b = a.g.a.offsetWidth,
            c = a.h.a.offsetWidth,
            d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c));
        d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v)
    }
    function na(a) {
        setTimeout(p(function() {
            la(this)
        }, a), 50)
    }
    function V(a, b) {
        setTimeout(p(function() {
            v(this.g.a);
            v(this.h.a);
            v(this.j.a);
            v(this.o.a);
            b(this.a)
        }, a), 0)
    }
    ;
    function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.o = this.j = !1;
        this.s = c
    }
    var X = null;
    W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]);
        L(b, "fontactive", a);
        this.o = !0;
        oa(this)
    };
    W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
            var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")),
                d = [],
                e = [b.a.c("wf", a.c, K(a).toString(), "loading")];
            c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive"));
            w(b.f, d, e)
        }
        L(b, "fontinactive", a);
        oa(this)
    };
    function oa(a) {
        0 == --a.f && a.j && (a.o ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a))
    }
    ;
    function pa(a) {
        this.j = a;
        this.a = new ja;
        this.h = 0;
        this.f = this.g = !0
    }
    pa.prototype.load = function(a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = !1 !== a.events;
        this.f = !1 !== a.classes;
        qa(this, new ha(this.c, a), a)
    };
    function ra(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
            var a = e || null,
                k = d || null || {};
            if (0 === c.length && f)
                M(b.a);
            else {
                b.f += c.length;
                f && (b.j = f);
                var h,
                    m = [];
                for (h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = k[l.c],
                        r = b.a,
                        x = l;
                    r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]);
                    L(r, "fontloading", x);
                    r = null;
                    null === X && (X = window.FontFace ? (x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) ? 42 < parseInt(x[1], 10) : !0 : !1);
                    X ? r = new Q(p(b.g, b), p(b.h, b), b.c, l, b.s, n) : r = new R(p(b.g, b), p(b.h, b), b.c, l, b.s, a,
                    n);
                    m.push(r)
                }
                for (h = 0; h < m.length; h++)
                    m[h].start()
            }
        }, 0)
    }
    function qa(a, b, c) {
        var d = [],
            e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c),
            f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;
        for (c = d.length; b < c; b++)
            d[b].load(function(b, d, c) {
                ra(a, f, b, d, c)
            })
    }
    ;
    function sa(a, b) {
        this.c = a;
        this.a = b
    }
    function ta(a, b, c) {
        var d = z(a.c);
        a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return d + "//" + a + "/" + b + ".js" + (c ? "?v=" + c : "")
    }
    sa.prototype.load = function(a) {
        function b() {
            if (f["__mti_fntLst" + d]) {
                var c = f["__mti_fntLst" + d](),
                    e = [],
                    h;
                if (c)
                    for (var m = 0; m < c.length; m++) {
                        var l = c[m].fontfamily;
                        void 0 != c[m].fontStyle && void 0 != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l))
                    }
                a(e)
            } else
                setTimeout(function() {
                    b()
                }, 50)
        }
        var c = this,
            d = c.a.projectId,
            e = c.a.version;
        if (d) {
            var f = c.c.m;
            B(this.c, ta(c, d, e), function(e) {
                e ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
                    return c.a
                }, b())
            }).id = "__MonotypeAPIScript__" +
            d
        } else
            a([])
    };
    function ua(a, b) {
        this.c = a;
        this.a = b
    }
    ua.prototype.load = function(a) {
        var b,
            c,
            d = this.a.urls || [],
            e = this.a.families || [],
            f = this.a.testStrings || {},
            g = new C;
        b = 0;
        for (c = d.length; b < c; b++)
            A(this.c, d[b], D(g));
        var k = [];
        b = 0;
        for (c = e.length; b < c; b++)
            if (d = e[b].split(":"), d[1])
                for (var h = d[1].split(","), m = 0; m < h.length; m += 1)
                    k.push(new H(d[0], h[m]));
            else
                k.push(new H(d[0]));
        F(g, function() {
            a(k, f)
        })
    };
    function va(a, b, c) {
        a ? this.c = a : this.c = b + wa;
        this.a = [];
        this.f = [];
        this.g = c || ""
    }
    var wa = "//fonts.googleapis.com/css";
    function xa(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
            var e = b[d].split(":");
            3 == e.length && a.f.push(e.pop());
            var f = "";
            2 == e.length && "" != e[1] && (f = ":");
            a.a.push(e.join(f))
        }
    }
    function ya(a) {
        if (0 == a.a.length)
            throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit="))
            return a.c;
        for (var b = a.a.length, c = [], d = 0; d < b; d++)
            c.push(a.a[d].replace(/ /g, "+"));
        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b
    }
    ;
    function za(a) {
        this.f = a;
        this.a = [];
        this.c = {}
    }
    var Aa = {
            latin: "BESbswy",
            "latin-ext": "\u00e7\u00f6\u00fc\u011f\u015f",
            cyrillic: "\u0439\u044f\u0416",
            greek: "\u03b1\u03b2\u03a3",
            khmer: "\u1780\u1781\u1782",
            Hanuman: "\u1780\u1781\u1782"
        },
        Ba = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        Ca = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    function Ea(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
            var d = a.f[c].split(":"),
                e = d[0].replace(/\+/g, " "),
                f = ["n4"];
            if (2 <= d.length) {
                var g;
                var k = d[1];
                g = [];
                if (k)
                    for (var k = k.split(","), h = k.length, m = 0; m < h; m++) {
                        var l;
                        l = k[m];
                        if (l.match(/^[\w-]+$/)) {
                            var n = Da.exec(l.toLowerCase());
                            if (null == n)
                                l = "";
                            else {
                                l = n[2];
                                l = null == l || "" == l ? "n" : Ca[l];
                                n = n[1];
                                if (null == n || "" == n)
                                    n = "4";
                                else
                                    var r = Ba[n],
                                        n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                                l = [l, n].join("")
                            }
                        } else
                            l = "";
                        l && g.push(l)
                    }
                0 < g.length && (f = g);
                3 == d.length && (d = d[2], g = [], d = d ? d.split(",") :
                g, 0 < d.length && (d = Aa[d[0]]) && (a.c[e] = d))
            }
            a.c[e] || (d = Aa[e]) && (a.c[e] = d);
            for (d = 0; d < f.length; d += 1)
                a.a.push(new H(e, f[d]))
        }
    }
    ;
    function Fa(a, b) {
        this.c = a;
        this.a = b
    }
    var Ga = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    Fa.prototype.load = function(a) {
        var b = new C,
            c = this.c,
            d = new va(this.a.api, z(c), this.a.text),
            e = this.a.families;
        xa(d, e);
        var f = new za(e);
        Ea(f);
        A(c, ya(d), D(b));
        F(b, function() {
            a(f.a, f.c, Ga)
        })
    };
    function Ha(a, b) {
        this.c = a;
        this.a = b
    }
    Ha.prototype.load = function(a) {
        var b = this.a.id,
            c = this.c.m;
        b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b) {
            if (b)
                a([]);
            else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                b = c.Typekit.config.fn;
                for (var e = [], f = 0; f < b.length; f += 2)
                    for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++)
                        e.push(new H(g, k[h]));
                try {
                    c.Typekit.load({
                        events: !1,
                        classes: !1,
                        async: !0
                    })
                } catch (m) {}
                a(e)
            }
        }, 2E3) : a([])
    };
    function Ia(a, b) {
        this.c = a;
        this.f = b;
        this.a = []
    }
    Ia.prototype.load = function(a) {
        var b = this.f.id,
            c = this.c.m,
            d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b, c) {
            for (var g = 0, k = c.fonts.length; g < k; ++g) {
                var h = c.fonts[g];
                d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)))
            }
            a(d.a)
        }, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b) {
            b && a([])
        })) : a([])
    };
    var Y = new pa(window);
    Y.a.c.custom = function(a, b) {
        return new ua(b, a)
    };
    Y.a.c.fontdeck = function(a, b) {
        return new Ia(b, a)
    };
    Y.a.c.monotype = function(a, b) {
        return new sa(b, a)
    };
    Y.a.c.typekit = function(a, b) {
        return new Ha(b, a)
    };
    Y.a.c.google = function(a, b) {
        return new Fa(b, a)
    };
    var Z = {
        load: p(Y.load, Y)
    };
    "function" === typeof define && define.amd ? define(function() {
        return Z
    }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
}());
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
!function(t) {
    var e = {};
    function n(i) {
        if (e[i])
            return e[i].exports;
        var r = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    },
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    },
    n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t)
                n.d(i, r, function(e) {
                    return t[e]
                }.bind(null, r));
        return i
    },
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    },
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    },
    n.p = "",
    n(n.s = 5)
}([function(t, e, n) {
    "use strict";
    var i = {},
        r = {},
        o = [],
        a = window.Webflow || [],
        s = window.jQuery,
        u = s(window),
        c = s(document),
        l = s.isFunction,
        d = i._ = n(7),
        f = i.tram = n(2) && s.tram,
        h = !1,
        p = !1;
    function v(t) {
        i.env() && (l(t.design) && u.on("__wf_design", t.design), l(t.preview) && u.on("__wf_preview", t.preview)),
        l(t.destroy) && u.on("__wf_destroy", t.destroy),
        t.ready && l(t.ready) && function(t) {
            if (h)
                return void t.ready();
            if (d.contains(o, t.ready))
                return;
            o.push(t.ready)
        }(t)
    }
    function m(t) {
        l(t.design) && u.off("__wf_design", t.design),
        l(t.preview) && u.off("__wf_preview", t.preview),
        l(t.destroy) && u.off("__wf_destroy", t.destroy),
        t.ready && l(t.ready) && function(t) {
            o = d.filter(o, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    f.config.hideBackface = !1,
    f.config.keepInherited = !0,
    i.define = function(t, e, n) {
        r[t] && m(r[t]);
        var i = r[t] = e(s, d, n) || {};
        return v(i), i
    },
    i.require = function(t) {
        return r[t]
    },
    i.push = function(t) {
        h ? l(t) && t() : a.push(t)
    },
    i.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var w,
        g = navigator.userAgent.toLowerCase(),
        b = i.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        y = i.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
        x = i.env.ios = /(ipod|iphone|ipad)/.test(g);
    i.env.safari = /safari/.test(g) && !y && !x,
    b && c.on("touchstart mousedown", function(t) {
        w = t.target
    }),
    i.validClick = b ? function(t) {
        return t === w || s.contains(t, w)
    } : function() {
        return !0
    };
    var k,
        E = "resize.webflow orientationchange.webflow load.webflow";
    function _(t, e) {
        var n = [],
            i = {};
        return i.up = d.throttle(function(t) {
            d.each(n, function(e) {
                e(t)
            })
        }), t && e && t.on(e, i.up), i.on = function(t) {
            "function" == typeof t && (d.contains(n, t) || n.push(t))
        }, i.off = function(t) {
            n = arguments.length ? d.filter(n, function(e) {
                return e !== t
            }) : []
        }, i
    }
    function A(t) {
        l(t) && t()
    }
    function O() {
        k && (k.reject(), u.off("load", k.resolve)),
        k = new s.Deferred,
        u.on("load", k.resolve)
    }
    i.resize = _(u, E),
    i.scroll = _(u, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"),
    i.redraw = _(),
    i.location = function(t) {
        window.location = t
    },
    i.env() && (i.location = function() {}),
    i.ready = function() {
        h = !0,
        p ? (p = !1, d.each(r, v)) : d.each(o, A),
        d.each(a, A),
        i.resize.up()
    },
    i.load = function(t) {
        k.then(t)
    },
    i.destroy = function(t) {
        t = t || {},
        p = !0,
        u.triggerHandler("__wf_destroy"),
        null != t.domready && (h = t.domready),
        d.each(r, m),
        i.resize.off(),
        i.scroll.off(),
        i.redraw.off(),
        o = [],
        a = [],
        "pending" === k.state() && O()
    },
    s(i.ready),
    O(),
    t.exports = window.Webflow = i
}, function(t, e, n) {
    "use strict";
    var i = window.jQuery,
        r = {},
        o = [],
        a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, i(e).triggerHandler(r.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, i(e).triggerHandler(r.types.OUTRO))
            }
        };
    r.triggers = {},
    r.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    },
    r.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [],
        i.extend(r.triggers, a)
    },
    r.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (r.triggers[t] = function(t, n) {
                o.push([e, n])
            })
        }
    },
    r.async(),
    t.exports = r
}, function(t, e, n) {
    "use strict";
    var i = n(3)(n(8));
    window.tram = function(t) {
        function e(t, e) {
            return (new P.Bare).init(t, e)
        }
        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        function r(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }
        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }
        function a() {}
        function s(t, e, n) {
            c("Units do not match [" + t + "]: " + e + ", " + n)
        }
        function u(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t)
                return n;
            var i = n;
            return Q.test(t) || !V.test(t) ? i = parseInt(t, 10) : V.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : n
        }
        function c(t) {
            B.debug && window && window.console.warn(t)
        }
        var l = function(t, e, n) {
                function r(t) {
                    return "object" == (0, i.default)(t)
                }
                function o(t) {
                    return "function" == typeof t
                }
                function a() {}
                return function i(s, u) {
                    function c() {
                        var t = new l;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }
                    function l() {}
                    u === n && (u = s, s = Object),
                    c.Bare = l;
                    var d,
                        f = a[t] = s[t],
                        h = l[t] = c[t] = new a;
                    return h.constructor = c, c.mixin = function(e) {
                        return l[t] = c[t] = i(c, e)[t], c
                    }, c.open = function(t) {
                        if (d = {}, o(t) ? d = t.call(c, h, f, c, s) : r(t) && (d = t), r(d))
                            for (var n in d)
                                e.call(d, n) && (h[n] = d[n]);
                        return o(h.init) || (h.init = s), c
                    }, c.open(u)
                }
            }("prototype", {}.hasOwnProperty),
            d = {
                ease: ["ease", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
                }],
                "ease-out": ["ease-out", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
                }],
                linear: ["linear", function(t, e, n, i) {
                    return n * t / i + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, i) {
                    return n * (t /= i) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, i) {
                    return -n * (t /= i) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, i) {
                    return n * (t /= i) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, i) {
                    return n * (t /= i) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, i) {
                    return -n * ((t = t / i - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, i) {
                    return n * (t /= i) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, i) {
                    return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, i) {
                    return n * Math.sin(t / i * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, i) {
                    return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, i) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, i) {
                    return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, i) {
                    return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, i) {
                    return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, i) {
                    return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                }]
            },
            f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            h = document,
            p = window,
            v = "bkwld-tram",
            m = /[\-\.0-9]/g,
            w = /[A-Z]/,
            g = "number",
            b = /^(rgb|#)/,
            y = /(em|cm|mm|in|pt|pc|px)$/,
            x = /(em|cm|mm|in|pt|pc|px|%)$/,
            k = /(deg|rad|turn)$/,
            E = "unitless",
            _ = /(all|none) 0s ease 0s/,
            A = /^(width|height)$/,
            O = " ",
            T = h.createElement("a"),
            L = ["Webkit", "Moz", "O", "ms"],
            C = ["-webkit-", "-moz-", "-o-", "-ms-"],
            R = function(t) {
                if (t in T.style)
                    return {
                        dom: t,
                        css: t
                    };
                var e,
                    n,
                    i = "",
                    r = t.split("-");
                for (e = 0; e < r.length; e++)
                    i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
                for (e = 0; e < L.length; e++)
                    if ((n = L[e] + i) in T.style)
                        return {
                            dom: n,
                            css: C[e] + t
                        }
            },
            S = e.support = {
                bind: Function.prototype.bind,
                transform: R("transform"),
                transition: R("transition"),
                backface: R("backface-visibility"),
                timing: R("transition-timing-function")
            };
        if (S.transition) {
            var I = S.timing.dom;
            if (T.style[I] = d["ease-in-back"][0], !T.style[I])
                for (var D in f)
                    d[D][0] = f[D]
        }
        var M = e.frame = function() {
                var t = p.requestAnimationFrame || p.webkitRequestAnimationFrame || p.mozRequestAnimationFrame || p.oRequestAnimationFrame || p.msRequestAnimationFrame;
                return t && S.bind ? t.bind(p) : function(t) {
                    p.setTimeout(t, 16)
                }
            }(),
            N = e.now = function() {
                var t = p.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && S.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            z = l(function(e) {
                function r(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                                var r = t[e];
                                r && i.push(r)
                            }
                            return i
                        }(("" + t).split(O)),
                        i = n[0];
                    e = e || {};
                    var r = Z[i];
                    if (!r)
                        return c("Unsupported property: " + i);
                    if (!e.weak || !this.props[i]) {
                        var o = r[0],
                            a = this.props[i];
                        return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
                    }
                }
                function o(t, e, n) {
                    if (t) {
                        var o = (0, i.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e)
                            return this.timer = new H({
                                duration: t,
                                context: this,
                                complete: a
                            }), void (this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                            case "hide":
                                l.call(this);
                                break;
                            case "stop":
                                s.call(this);
                                break;
                            case "redraw":
                                d.call(this);
                                break;
                            default:
                                r.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o)
                            return void t.call(this, this);
                        if ("object" == o) {
                            var c = 0;
                            h.call(this, t, function(t, e) {
                                t.span > c && (c = t.span),
                                t.stop(),
                                t.animate(e)
                            }, function(t) {
                                "wait" in t && (c = u(t.wait, 0))
                            }),
                            f.call(this),
                            c > 0 && (this.timer = new H({
                                duration: c,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var p = this,
                                v = !1,
                                m = {};
                            M(function() {
                                h.call(p, t, function(t) {
                                    t.active && (v = !0, m[t.name] = t.nextStyle)
                                }),
                                v && p.$el.css(m)
                            })
                        }
                    }
                }
                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }
                function s(t) {
                    var e;
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1,
                    "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, i.default)(t) && null != t ? t : this.props,
                    h.call(this, e, p),
                    f.call(this)
                }
                function l() {
                    s.call(this),
                    this.el.style.display = "none"
                }
                function d() {
                    this.el.offsetHeight
                }
                function f() {
                    var t,
                        e,
                        n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)
                        (e = this.props[t]).active && n.push(e.string);
                    n = n.join(","),
                    this.style !== n && (this.style = n, this.el.style[S.transition.dom] = n)
                }
                function h(t, e, i) {
                    var o,
                        a,
                        s,
                        u,
                        c = e !== p,
                        l = {};
                    for (o in t)
                        s = t[o],
                        o in K ? (l.transform || (l.transform = {}), l.transform[o] = s) : (w.test(o) && (o = n(o)), o in Z ? l[o] = s : (u || (u = {}), u[o] = s));
                    for (o in l) {
                        if (s = l[o], !(a = this.props[o])) {
                            if (!c)
                                continue;
                            a = r.call(this, o)
                        }
                        e.call(this, a, s)
                    }
                    i && u && i.call(this, u)
                }
                function p(t) {
                    t.stop()
                }
                function m(t, e) {
                    t.set(e)
                }
                function g(t) {
                    this.$el.css(t)
                }
                function b(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n,
                                i = this.children.length;
                            for (n = 0; i > n; n++)
                                t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, B.keepInherited && !B.fallback) {
                        var n = G(this.el, "transition");
                        n && !_.test(n) && (this.upstream = n)
                    }
                    S.backface && B.hideBackface && X(this.el, S.backface.css, "hidden")
                },
                b("add", r),
                b("start", o),
                b("wait", function(t) {
                    t = u(t, 0),
                    this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new H({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }),
                b("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void (this.timer.complete = a)) : c("No active transition timer. Use start() or wait() before then().")
                }),
                b("next", a),
                b("stop", s),
                b("set", function(t) {
                    s.call(this, t),
                    h.call(this, t, m, g)
                }),
                b("show", function(t) {
                    "string" != typeof t && (t = "block"),
                    this.el.style.display = t
                }),
                b("hide", l),
                b("redraw", d),
                b("destroy", function() {
                    s.call(this),
                    t.removeData(this.el, v),
                    this.$el = this.el = null
                })
            }),
            P = l(z, function(e) {
                function n(e, n) {
                    var i = t.data(e, v) || t.data(e, v, new z.Bare);
                    return i.el || i.init(e), n ? i.start(n) : i
                }
                e.init = function(e, i) {
                    var r = t(e);
                    if (!r.length)
                        return this;
                    if (1 === r.length)
                        return n(r[0], i);
                    var o = [];
                    return r.each(function(t, e) {
                        o.push(n(e, i))
                    }), this.children = o, this
                }
            }),
            F = l(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }
                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var r = 500,
                    a = "ease",
                    s = 0;
                t.init = function(t, e, n, i) {
                    this.$el = t,
                    this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]),
                    Y[o] && (o = Y[o]),
                    this.name = o,
                    this.type = n[1],
                    this.duration = u(e[1], this.duration, r),
                    this.ease = function(t, e, n) {
                        return void 0 !== e && (n = e), t in d ? t : n
                    }(e[2], this.ease, a),
                    this.delay = u(e[3], this.delay, s),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = A.test(this.name),
                    this.unit = i.unit || this.unit || B.defaultUnit,
                    this.angle = i.angle || this.angle || B.defaultAngle,
                    B.fallback || i.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + O + this.duration + "ms" + ("ease" != this.ease ? O + d[this.ease][0] : "") + (this.delay ? O + this.delay + "ms" : ""))
                },
                t.set = function(t) {
                    t = this.convert(t, this.type),
                    this.update(t),
                    this.redraw()
                },
                t.transition = function(t) {
                    this.active = !0,
                    t = this.convert(t, this.type),
                    this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))),
                    this.nextStyle = t
                },
                t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type),
                    this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))),
                    this.tween = new q({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                },
                t.get = function() {
                    return G(this.el, this.name)
                },
                t.update = function(t) {
                    X(this.el, this.name, t)
                },
                t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, X(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                },
                t.convert = function(t, e) {
                    if ("auto" == t && this.auto)
                        return t;
                    var r,
                        o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                    case g:
                        if (o)
                            return t;
                        if (a && "" === t.replace(m, ""))
                            return +t;
                        r = "number(unitless)";
                        break;
                    case b:
                        if (a) {
                            if ("" === t && this.original)
                                return this.original;
                            if (e.test(t))
                                return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                        }
                        r = "hex or rgb string";
                        break;
                    case y:
                        if (o)
                            return t + this.unit;
                        if (a && e.test(t))
                            return t;
                        r = "number(px) or string(unit)";
                        break;
                    case x:
                        if (o)
                            return t + this.unit;
                        if (a && e.test(t))
                            return t;
                        r = "number(px) or string(unit or %)";
                        break;
                    case k:
                        if (o)
                            return t + this.angle;
                        if (a && e.test(t))
                            return t;
                        r = "number(deg) or string(angle)";
                        break;
                    case E:
                        if (o)
                            return t;
                        if (a && x.test(t))
                            return t;
                        r = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        c("Type warning: Expected: [" + t + "] Got: [" + (0, i.default)(e) + "] " + e)
                    }(r, t), t
                },
                t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            W = l(F, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), b))
                }
            }),
            j = l(F, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments),
                    this.animate = this.fallback
                },
                t.get = function() {
                    return this.$el[this.name]()
                },
                t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            $ = l(F, function(t, e) {
                function n(t, e) {
                    var n,
                        i,
                        r,
                        o,
                        a;
                    for (n in t)
                        r = (o = K[n])[0],
                        i = o[1] || n,
                        a = this.convert(t[n], r),
                        e.call(this, i, a, r)
                }
                t.init = function() {
                    e.init.apply(this, arguments),
                    this.current || (this.current = {}, K.perspective && B.perspective && (this.current.perspective = B.perspective, X(this.el, this.name, this.style(this.current)), this.redraw()))
                },
                t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }),
                    X(this.el, this.name, this.style(this.current)),
                    this.redraw()
                },
                t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new U({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n,
                        i = {};
                    for (n in this.current)
                        i[n] = n in e ? e[n] : this.current[n];
                    this.active = !0,
                    this.nextStyle = this.style(i)
                },
                t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new U({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                },
                t.update = function() {
                    X(this.el, this.name, this.style(this.current))
                },
                t.style = function(t) {
                    var e,
                        n = "";
                    for (e in t)
                        n += e + "(" + t[e] + ") ";
                    return n
                },
                t.values = function(t) {
                    var e,
                        i = {};
                    return n.call(this, t, function(t, n, r) {
                        i[t] = n,
                        void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
                    }), i
                }
            }),
            q = l(function(e) {
                function n() {
                    var t,
                        e,
                        i,
                        r = u.length;
                    if (r)
                        for (M(n), e = N(), t = r; t--;)
                            (i = u[t]) && i.render(e)
                }
                var i = {
                    ease: d.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0,
                    this.delay = t.delay || 0;
                    var e = t.ease || i.ease;
                    d[e] && (e = d[e][1]),
                    "function" != typeof e && (e = i.ease),
                    this.ease = e,
                    this.update = t.update || a,
                    this.complete = t.complete || a,
                    this.context = t.context || this,
                    this.name = t.name;
                    var n = t.from,
                        r = t.to;
                    void 0 === n && (n = i.from),
                    void 0 === r && (r = i.to),
                    this.unit = t.unit || "",
                    "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n),
                    this.value = this.begin + this.unit,
                    this.start = N(),
                    !1 !== t.autoplay && this.play()
                },
                e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = N()), this.active = !0, t = this, 1 === u.push(t) && M(n))
                },
                e.stop = function() {
                    var e,
                        n,
                        i;
                    this.active && (this.active = !1, e = this, (i = t.inArray(e, u)) >= 0 && (n = u.slice(i + 1), u.length = i, n.length && (u = u.concat(n))))
                },
                e.render = function(t) {
                    var e,
                        n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay)
                            return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var i = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, i) : function(t) {
                            return Math.round(t * c) / c
                        }(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change,
                    this.value = e + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                },
                e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0))
                        return this.startRGB = r(e), this.endRGB = r(t), this.endHex = t, this.begin = 0, void (this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(m, "");
                        n !== t.replace(m, "") && s("tween", e, t),
                        this.unit = n
                    }
                    e = parseFloat(e),
                    t = parseFloat(t),
                    this.begin = this.value = e,
                    this.change = t - e
                },
                e.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = a
                };
                var u = [],
                    c = 1e3
            }),
            H = l(q, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0,
                    this.complete = t.complete || a,
                    this.context = t.context,
                    this.play()
                },
                t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            U = l(q, function(t, e) {
                t.init = function(t) {
                    var e,
                        n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values)
                        n = t.values[e],
                        this.current[e] !== n && this.tweens.push(new q({
                            name: e,
                            from: this.current[e],
                            to: n,
                            duration: t.duration,
                            delay: t.delay,
                            ease: t.ease,
                            autoplay: !1
                        }));
                    this.play()
                },
                t.render = function(t) {
                    var e,
                        n,
                        i = !1;
                    for (e = this.tweens.length; e--;)
                        (n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, i = !0);
                    return i ? void (this.update && this.update.call(this.context)) : this.destroy()
                },
                t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;)
                            this.tweens[t].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            }),
            B = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !S.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!S.transition)
                return B.fallback = !0;
            B.agentTests.push("(" + t + ")");
            var e = new RegExp(B.agentTests.join("|"), "i");
            B.fallback = e.test(navigator.userAgent)
        },
        e.fallback("6.0.[2-5] Safari"),
        e.tween = function(t) {
            return new q(t)
        },
        e.delay = function(t, e, n) {
            return new H({
                complete: e,
                duration: t,
                context: n
            })
        },
        t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var X = t.style,
            G = t.css,
            Y = {
                transform: S.transform && S.transform.css
            },
            Z = {
                color: [W, b],
                background: [W, b, "background-color"],
                "outline-color": [W, b],
                "border-color": [W, b],
                "border-top-color": [W, b],
                "border-right-color": [W, b],
                "border-bottom-color": [W, b],
                "border-left-color": [W, b],
                "border-width": [F, y],
                "border-top-width": [F, y],
                "border-right-width": [F, y],
                "border-bottom-width": [F, y],
                "border-left-width": [F, y],
                "border-spacing": [F, y],
                "letter-spacing": [F, y],
                margin: [F, y],
                "margin-top": [F, y],
                "margin-right": [F, y],
                "margin-bottom": [F, y],
                "margin-left": [F, y],
                padding: [F, y],
                "padding-top": [F, y],
                "padding-right": [F, y],
                "padding-bottom": [F, y],
                "padding-left": [F, y],
                "outline-width": [F, y],
                opacity: [F, g],
                top: [F, x],
                right: [F, x],
                bottom: [F, x],
                left: [F, x],
                "font-size": [F, x],
                "text-indent": [F, x],
                "word-spacing": [F, x],
                width: [F, x],
                "min-width": [F, x],
                "max-width": [F, x],
                height: [F, x],
                "min-height": [F, x],
                "max-height": [F, x],
                "line-height": [F, E],
                "scroll-top": [j, g, "scrollTop"],
                "scroll-left": [j, g, "scrollLeft"]
            },
            K = {};
        S.transform && (Z.transform = [$], K = {
            x: [x, "translateX"],
            y: [x, "translateY"],
            rotate: [k],
            rotateX: [k],
            rotateY: [k],
            scale: [g],
            scaleX: [g],
            scaleY: [g],
            skew: [k],
            skewX: [k],
            skewY: [k]
        }),
        S.transform && S.backface && (K.z = [x, "translateZ"], K.rotateZ = [k], K.scaleZ = [g], K.perspective = [y]);
        var Q = /ms/,
            V = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(1);
    function r(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null),
        t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        s = {
            reset: function(t, e) {
                i.triggers.reset(t, e)
            },
            intro: function(t, e) {
                i.triggers.intro(t, e),
                r(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                i.triggers.outro(t, e),
                r(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {},
    a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    },
    o.extend(a.triggers, s),
    t.exports = a
}, function(t, e, n) {
    n(6),
    n(9),
    n(10),
    n(11),
    n(12),
    n(1),
    n(13),
    n(14),
    n(15),
    n(16),
    n(17),
    n(22),
    t.exports = n(23)
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("brand", t.exports = function(t) {
        var e,
            n = {},
            r = document,
            o = t("html"),
            a = t("body"),
            s = ".w-webflow-badge",
            u = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
        function d() {
            var n = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || Boolean(r.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }
        function f() {
            var t = a.children(s),
                n = t.length && t.get(0) === e,
                r = i.env("editor");
            n ? r && t.remove() : (t.length && t.remove(), r || a.append(e))
        }
        return n.ready = function() {
            var n,
                i,
                a,
                s = o.attr("data-wf-status"),
                h = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(h) && u.hostname !== h && (s = !0),
            s && !c && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", ""), i = t("<img>").attr("src", "").attr("alt", "").css({
                marginRight: "2px",
                width: "16px"
            }), a = t("<img>").attr("src", "").attr("alt", "Made By Nani"), n.append(i, a), n[0]), f(), setTimeout(f, 500), t(r).off(l, d).on(l, d))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var i = window.$,
        r = n(2) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {
                VERSION: "1.6.0-Webflow"
            },
            e = {},
            n = Array.prototype,
            i = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            s = (n.concat, i.toString, i.hasOwnProperty),
            u = n.forEach,
            c = n.map,
            l = (n.reduce, n.reduceRight, n.filter),
            d = (n.every, n.some),
            f = n.indexOf,
            h = (n.lastIndexOf, Array.isArray, Object.keys),
            p = (o.bind, t.each = t.forEach = function(n, i, r) {
                if (null == n)
                    return n;
                if (u && n.forEach === u)
                    n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (i.call(r, n[o], o, n) === e)
                            return
                } else {
                    var s = t.keys(n);
                    for (o = 0, a = s.length; o < a; o++)
                        if (i.call(r, n[s[o]], s[o], n) === e)
                            return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function(t, r, o) {
                i.push(e.call(n, t, r, o))
            }), i)
        },
        t.find = t.detect = function(t, e, n) {
            var i;
            return v(t, function(t, r, o) {
                if (e.call(n, t, r, o))
                    return i = t, !0
            }), i
        },
        t.filter = t.select = function(t, e, n) {
            var i = [];
            return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function(t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }), i)
        };
        var v = t.some = t.any = function(n, i, r) {
            i || (i = t.identity);
            var o = !1;
            return null == n ? o : d && n.some === d ? n.some(i, r) : (p(n, function(t, n, a) {
                if (o || (o = i.call(r, t, n, a)))
                    return e
            }), !!o)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (f && t.indexOf === f ? -1 != t.indexOf(e) : v(t, function(t) {
                    return t === e
                }))
        },
        t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        },
        t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        },
        t.throttle = function(t) {
            var e,
                n,
                i;
            return function() {
                e || (e = !0, n = arguments, i = this, r.frame(function() {
                    e = !1,
                    t.apply(i, n)
                }))
            }
        },
        t.debounce = function(e, n, i) {
            var r,
                o,
                a,
                s,
                u,
                c = function c() {
                    var l = t.now() - s;
                    l < n ? r = setTimeout(c, n - l) : (r = null, i || (u = e.apply(a, o), a = o = null))
                };
            return function() {
                a = this,
                o = arguments,
                s = t.now();
                var l = i && !r;
                return r || (r = setTimeout(c, n)), l && (u = e.apply(a, o), a = o = null), u
            }
        },
        t.defaults = function(e) {
            if (!t.isObject(e))
                return e;
            for (var n = 1, i = arguments.length; n < i; n++) {
                var r = arguments[n];
                for (var o in r)
                    void 0 === e[o] && (e[o] = r[o])
            }
            return e
        },
        t.keys = function(e) {
            if (!t.isObject(e))
                return [];
            if (h)
                return h(e);
            var n = [];
            for (var i in e)
                t.has(e, i) && n.push(i);
            return n
        },
        t.has = function(t, e) {
            return s.call(t, e)
        },
        t.isObject = function(t) {
            return t === Object(t)
        },
        t.now = Date.now || function() {
            return (new Date).getTime()
        },
        t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var m = /(.)^/,
            w = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            g = /\\|'|\r|\n|\u2028|\u2029/g,
            b = function(t) {
                return "\\" + w[t]
            };
        return t.template = function(e, n, i) {
            !n && i && (n = i),
            n = t.defaults({}, n, t.templateSettings);
            var r = RegExp([(n.escape || m).source, (n.interpolate || m).source, (n.evaluate || m).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function(t, n, i, r, s) {
                return a += e.slice(o, s).replace(g, b), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
            }),
            a += "';\n",
            n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
            a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var s = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var u = function(e) {
                    return s.call(this, e, t)
                },
                c = n.variable || "obj";
            return u.source = "function(" + c + "){\n" + a + "}", u
        }, t
    }()
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    function i(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = i = function(t) {
            return n(t)
        } : t.exports = i = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, i(e)
    }
    t.exports = i
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("edit", t.exports = function(t, e, n) {
        if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture && !function() {
            try {
                return window.top.__Cypress__
            } catch (t) {
                return !1
            }
        }())
            return {
                exit: 1
            };
        var r,
            o = t(window),
            a = t(document.documentElement),
            s = document.location,
            u = "hashchange",
            c = n.load || function() {
                r = !0,
                window.WebflowEditor = !0,
                o.off(u, d),
                function(t) {
                    var e = window.document.createElement("iframe");
                    e.src = "https://webflow.com/site/third-party-cookie-check.html",
                    e.style.display = "none",
                    e.sandbox = "allow-scripts allow-same-origin";
                    var n = function n(i) {
                        "WF_third_party_cookies_unsupported" === i.data ? (w(e, n), t(!1)) : "WF_third_party_cookies_supported" === i.data && (w(e, n), t(!0))
                    };
                    e.onerror = function() {
                        w(e, n),
                        t(!1)
                    },
                    window.addEventListener("message", n, !1),
                    window.document.body.appendChild(e)
                }(function(e) {
                    t.ajax({
                        url: m("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: a.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: f(e)
                    })
                })
            },
            l = !1;
        try {
            l = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}
        function d() {
            r || /\?edit/.test(s.hash) && c()
        }
        function f(t) {
            return function(e) {
                e ? (e.thirdPartyCookiesSupported = t, h(v(e.bugReporterScriptPath), function() {
                    h(v(e.scriptPath), function() {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }
        function h(e, n) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(n, p)
        }
        function p(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }
        function v(t) {
            return t.indexOf("//") >= 0 ? t : m("https://editor-api.webflow.com" + t)
        }
        function m(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }
        function w(t, e) {
            window.removeEventListener("message", e, !1),
            t.remove()
        }
        return l ? c() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && c() : o.on(u, d).triggerHandler(u), {}
    })
}, function(t, e, n) {
    "use strict";
    n(0).define("focus-visible", t.exports = function() {
        function t(t) {
            var e = !0,
                n = !1,
                i = null,
                r = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
            function o(t) {
                return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList)
            }
            function a(t) {
                t.getAttribute("data-wf-focus-visible") || t.setAttribute("data-wf-focus-visible", "true")
            }
            function s() {
                e = !1
            }
            function u() {
                document.addEventListener("mousemove", c),
                document.addEventListener("mousedown", c),
                document.addEventListener("mouseup", c),
                document.addEventListener("pointermove", c),
                document.addEventListener("pointerdown", c),
                document.addEventListener("pointerup", c),
                document.addEventListener("touchmove", c),
                document.addEventListener("touchstart", c),
                document.addEventListener("touchend", c)
            }
            function c(t) {
                t.target.nodeName && "html" === t.target.nodeName.toLowerCase() || (e = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
            }
            document.addEventListener("keydown", function(n) {
                n.metaKey || n.altKey || n.ctrlKey || (o(t.activeElement) && a(t.activeElement), e = !0)
            }, !0),
            document.addEventListener("mousedown", s, !0),
            document.addEventListener("pointerdown", s, !0),
            document.addEventListener("touchstart", s, !0),
            document.addEventListener("visibilitychange", function() {
                "hidden" === document.visibilityState && (n && (e = !0), u())
            }, !0),
            u(),
            t.addEventListener("focus", function(t) {
                var n,
                    i,
                    s;
                o(t.target) && (e || (n = t.target, i = n.type, "INPUT" === (s = n.tagName) && r[i] && !n.readOnly || "TEXTAREA" === s && !n.readOnly || n.isContentEditable)) && a(t.target)
            }, !0),
            t.addEventListener("blur", function(t) {
                var e;
                o(t.target) && t.target.hasAttribute("data-wf-focus-visible") && (n = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                    n = !1
                }, 100), (e = t.target).getAttribute("data-wf-focus-visible") && e.removeAttribute("data-wf-focus-visible"))
            }, !0)
        }
        return {
            ready: function() {
                if ("undefined" != typeof document)
                    try {
                        document.querySelector(":focus-visible")
                    } catch (e) {
                        t(document)
                    }
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(0).define("focus-within", t.exports = function() {
        function t(t) {
            for (var e = [t], n = null; n = t.parentNode || t.host || t.defaultView;)
                e.push(n),
                t = n;
            return e
        }
        function e(t) {
            "function" != typeof t.getAttribute || t.getAttribute("data-wf-focus-within") || t.setAttribute("data-wf-focus-within", "true")
        }
        function n(t) {
            "function" == typeof t.getAttribute && t.getAttribute("data-wf-focus-within") && t.removeAttribute("data-wf-focus-within")
        }
        return {
            ready: function() {
                if ("undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within"))
                    try {
                        document.querySelector(":focus-within")
                    } catch (r) {
                        i = function(i) {
                            var r;
                            r || (window.requestAnimationFrame(function() {
                                r = !1,
                                "blur" === i.type && Array.prototype.slice.call(t(i.target)).forEach(n),
                                "focus" === i.type && Array.prototype.slice.call(t(i.target)).forEach(e)
                            }), r = !0)
                        },
                        document.addEventListener("focus", i, !0),
                        document.addEventListener("blur", i, !0),
                        e(document.body)
                    }
                var i
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("focus", t.exports = function() {
        var t = [],
            e = !1;
        function n(n) {
            e && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t.unshift(n))
        }
        function r(n) {
            (function(t) {
                var e = t.target,
                    n = e.tagName;
                return /^a$/i.test(n) && null != e.href || /^(button|textarea)$/i.test(n) && !0 !== e.disabled || /^input$/i.test(n) && /^(button|reset|submit|radio|checkbox)$/i.test(e.type) && !e.disabled || !/^(button|input|textarea|select|a)$/i.test(n) && !Number.isNaN(Number.parseFloat(e.tabIndex)) || /^audio$/i.test(n) || /^video$/i.test(n) && !0 === e.controls
            })(n) && (e = !0, setTimeout(function() {
                for (e = !1, n.target.focus(); t.length > 0;) {
                    var i = t.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i))
                }
            }, 0))
        }
        return {
            ready: function() {
                "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && i.env.safari && (document.addEventListener("mousedown", r, !0), document.addEventListener("mouseup", n, !0), document.addEventListener("click", n, !0))
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(1);
    i.define("ix", t.exports = function(t, e) {
        var n,
            o,
            a = {},
            s = t(window),
            u = ".w-ix",
            c = t.tram,
            l = i.env,
            d = l(),
            f = l.chrome && l.chrome < 35,
            h = "none 0s ease 0s",
            p = t(),
            v = {},
            m = [],
            w = [],
            g = [],
            b = 1,
            y = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };
        function x(t) {
            t && (v = {}, e.each(t, function(t) {
                v[t.slug] = t.value
            }), k())
        }
        function k() {
            !function() {
                var e = t("[data-ix]");
                if (!e.length)
                    return;
                e.each(A),
                e.each(E),
                m.length && (i.scroll.on(O), setTimeout(O, 1));
                w.length && i.load(T);
                g.length && setTimeout(L, b)
            }(),
            r.init(),
            i.redraw.up()
        }
        function E(n, o) {
            var s = t(o),
                c = s.attr("data-ix"),
                l = v[c];
            if (l) {
                var f = l.triggers;
                f && (a.style(s, l.style), e.each(f, function(t) {
                    var e = {},
                        n = t.type,
                        o = t.stepsB && t.stepsB.length;
                    function a() {
                        C(t, s, {
                            group: "A"
                        })
                    }
                    function c() {
                        C(t, s, {
                            group: "B"
                        })
                    }
                    if ("load" !== n) {
                        if ("click" === n)
                            return s.on("click" + u, function(n) {
                                i.validClick(n.currentTarget) && ("#" === s.attr("href") && n.preventDefault(), C(t, s, {
                                    group: e.clicked ? "B" : "A"
                                }), o && (e.clicked = !e.clicked))
                            }), void (p = p.add(s));
                        if ("hover" === n)
                            return s.on("mouseenter" + u, a), s.on("mouseleave" + u, c), void (p = p.add(s));
                        if ("scroll" !== n) {
                            var l = y[n];
                            if (l) {
                                var f = s.closest(l);
                                return f.on(r.types.INTRO, a).on(r.types.OUTRO, c), void (p = p.add(f))
                            }
                        } else
                            m.push({
                                el: s,
                                trigger: t,
                                state: {
                                    active: !1
                                },
                                offsetTop: _(t.offsetTop),
                                offsetBot: _(t.offsetBot)
                            })
                    } else
                        t.preload && !d ? w.push(a) : g.push(a)
                }))
            }
        }
        function _(t) {
            if (!t)
                return 0;
            t = String(t);
            var e = parseInt(t, 10);
            return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
        }
        function A(e, n) {
            t(n).off(u)
        }
        function O() {
            for (var t = s.scrollTop(), e = s.height(), n = m.length, i = 0; i < n; i++) {
                var r = m[i],
                    o = r.el,
                    a = r.trigger,
                    u = a.stepsB && a.stepsB.length,
                    c = r.state,
                    l = o.offset().top,
                    d = o.outerHeight(),
                    f = r.offsetTop,
                    h = r.offsetBot;
                f < 1 && f > 0 && (f *= e),
                h < 1 && h > 0 && (h *= e);
                var p = l + d - f >= t && l + h <= t + e;
                p !== c.active && ((!1 !== p || u) && (c.active = p, C(a, o, {
                    group: p ? "A" : "B"
                })))
            }
        }
        function T() {
            for (var t = w.length, e = 0; e < t; e++)
                w[e]()
        }
        function L() {
            for (var t = g.length, e = 0; e < t; e++)
                g[e]()
        }
        function C(e, i, r, o) {
            var a = (r = r || {}).done,
                s = e.preserve3d;
            if (!n || r.force) {
                var u = r.group || "A",
                    l = e["loop" + u],
                    h = e["steps" + u];
                if (h && h.length) {
                    if (h.length < 2 && (l = !1), !o) {
                        var p = e.selector;
                        p && (i = e.descend ? i.find(p) : e.siblings ? i.siblings(p) : t(p), d && i.attr("data-ix-affect", 1)),
                        f && i.addClass("w-ix-emptyfix"),
                        s && i.css("transform-style", "preserve-3d")
                    }
                    for (var v = c(i), m = {
                            omit3d: !s
                        }, w = 0; w < h.length; w++)
                        R(v, h[w], m);
                    m.start ? v.then(g) : g()
                }
            }
            function g() {
                if (l)
                    return C(e, i, r, !0);
                "auto" === m.width && v.set({
                    width: "auto"
                }),
                "auto" === m.height && v.set({
                    height: "auto"
                }),
                a && a()
            }
        }
        function R(t, e, n) {
            var r = "add",
                o = "start";
            n.start && (r = o = "then");
            var a = e.transition;
            if (a) {
                a = a.split(",");
                for (var s = 0; s < a.length; s++) {
                    var u = a[s];
                    t[r](u)
                }
            }
            var c = S(e, n) || {};
            if (null != c.width && (n.width = c.width), null != c.height && (n.height = c.height), null == a) {
                n.start ? t.then(function() {
                    var e = this.queue;
                    this.set(c),
                    c.display && (t.redraw(), i.redraw.up()),
                    this.queue = e,
                    this.next()
                }) : (t.set(c), c.display && (t.redraw(), i.redraw.up()));
                var l = c.wait;
                null != l && (t.wait(l), n.start = !0)
            } else {
                if (c.display) {
                    var d = c.display;
                    delete c.display,
                    n.start ? t.then(function() {
                        var t = this.queue;
                        this.set({
                            display: d
                        }).redraw(),
                        i.redraw.up(),
                        this.queue = t,
                        this.next()
                    }) : (t.set({
                        display: d
                    }).redraw(), i.redraw.up())
                }
                t[o](c),
                n.start = !0
            }
        }
        function S(t, e) {
            var n = e && e.omit3d,
                i = {},
                r = !1;
            for (var o in t)
                "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (i[o] = t[o], r = !0);
            return r ? i : null
        }
        return a.init = function(t) {
            setTimeout(function() {
                x(t)
            }, 1)
        }, a.preview = function() {
            n = !1,
            b = 100,
            setTimeout(function() {
                x(window.__wf_ix)
            }, 1)
        }, a.design = function() {
            n = !0,
            a.destroy()
        }, a.destroy = function() {
            o = !0,
            p.each(A),
            i.scroll.off(O),
            r.async(),
            m = [],
            w = [],
            g = []
        }, a.ready = function() {
            if (d)
                return l("design") ? a.design() : a.preview();
            v && o && (o = !1, k())
        }, a.run = C, a.style = d ? function(e, n) {
            var i = c(e);
            if (t.isEmptyObject(n))
                return;
            e.css("transition", "");
            var r = e.css("transition");
            r === h && (r = i.upstream = null);
            i.upstream = h,
            i.set(S(n)),
            i.upstream = r
        } : function(t, e) {
            c(t).set(S(e))
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("links", t.exports = function(t, e) {
        var n,
            r,
            o,
            a = {},
            s = t(window),
            u = i.env(),
            c = window.location,
            l = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            h = /\/$/;
        function p(e) {
            var i = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (l.href = i, !(i.indexOf(":") >= 0)) {
                var a = t(e);
                if (l.hash.length > 1 && l.host + l.pathname === c.host + c.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash))
                        return;
                    var s = t(l.hash);
                    s.length && r.push({
                        link: a,
                        sec: s,
                        active: !1
                    })
                } else if ("#" !== i && "" !== i) {
                    var u = l.href === c.href || i === o || f.test(i) && h.test(o);
                    m(a, d, u)
                }
            }
        }
        function v() {
            var t = s.scrollTop(),
                n = s.height();
            e.each(r, function(e) {
                var i = e.link,
                    r = e.sec,
                    o = r.offset().top,
                    a = r.outerHeight(),
                    s = .5 * n,
                    u = r.is(":visible") && o + a - s >= t && o + s <= t + n;
                e.active !== u && (e.active = u, m(i, d, u))
            })
        }
        function m(t, e, n) {
            var i = t.hasClass(e);
            n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = u && i.env("design"),
            o = i.env("slug") || c.pathname || "",
            i.scroll.off(v),
            r = [];
            for (var t = document.links, e = 0; e < t.length; ++e)
                p(t[e]);
            r.length && (i.scroll.on(v), v())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    i.define("scroll", t.exports = function(t) {
        var e = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
            n = window.location,
            r = function() {
                try {
                    return Boolean(window.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : window.history,
            o = t(window),
            a = t(document),
            s = t(document.body),
            u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                window.setTimeout(t, 15)
            },
            c = i.env("editor") ? ".w-editor-body" : "body",
            l = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            h = document.createElement("style");
        h.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
        var p = /^#[a-zA-Z0-9][\w:.-]*$/;
        var v = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
        function m(t, e) {
            var n;
            switch (e) {
            case "add":
                (n = t.attr("tabindex")) ? t.attr("data-wf-tabindex-swap", n) : t.attr("tabindex", "-1");
                break;
            case "remove":
                (n = t.attr("data-wf-tabindex-swap")) ? (t.attr("tabindex", n), t.removeAttr("data-wf-tabindex-swap")) : t.removeAttr("tabindex")
            }
            t.toggleClass("wf-force-outline-none", "add" === e)
        }
        function w(e) {
            var a = e.currentTarget;
            if (!(i.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(a.className))) {
                var c,
                    d = (c = a, p.test(c.hash) && c.host + c.pathname === n.host + n.pathname ? a.hash : "");
                if ("" !== d) {
                    var f = t(d);
                    f.length && (e && (e.preventDefault(), e.stopPropagation()), function(t) {
                        if (n.hash !== t && r && r.pushState && (!i.env.chrome || "file:" !== n.protocol)) {
                            var e = r.state && r.state.hash;
                            e !== t && r.pushState({
                                hash: t
                            }, "", t)
                        }
                    }(d), window.setTimeout(function() {
                        !function(e, n) {
                            var i = o.scrollTop(),
                                r = function(e) {
                                    var n = t(l),
                                        i = "fixed" === n.css("position") ? n.outerHeight() : 0,
                                        r = e.offset().top - i;
                                    if ("mid" === e.data("scroll")) {
                                        var a = o.height() - i,
                                            s = e.outerHeight();
                                        s < a && (r -= Math.round((a - s) / 2))
                                    }
                                    return r
                                }(e);
                            if (i === r)
                                return;
                            var a = function(t, e, n) {
                                    if ("none" === document.body.getAttribute("data-wf-scroll-motion") || v.matches)
                                        return 0;
                                    var i = 1;
                                    return s.add(t).each(function(t, e) {
                                        var n = parseFloat(e.getAttribute("data-scroll-time"));
                                        !isNaN(n) && n >= 0 && (i = n)
                                    }), (472.143 * Math.log(Math.abs(e - n) + 125) - 2e3) * i
                                }(e, i, r),
                                c = Date.now();
                            u(function t() {
                                var e = Date.now() - c;
                                window.scroll(0, function(t, e, n, i) {
                                    return n > i ? e : t + (e - t) * ((r = n / i) < .5 ? 4 * r * r * r : (r - 1) * (2 * r - 2) * (2 * r - 2) + 1);
                                    var r
                                }(i, r, e, a)),
                                e <= a ? u(t) : "function" == typeof n && n()
                            })
                        }(f, function() {
                            m(f, "add"),
                            f.get(0).focus({
                                preventScroll: !0
                            }),
                            m(f, "remove")
                        })
                    }, e ? 0 : 300))
                }
            }
        }
        return {
            ready: function() {
                var t = e.WF_CLICK_EMPTY,
                    n = e.WF_CLICK_SCROLL;
                a.on(n, f, w),
                a.on(t, d, function(t) {
                    t.preventDefault()
                }),
                document.head.insertBefore(h, document.head.firstChild)
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(0).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;
        function i(e) {
            var i,
                r,
                o = !1,
                a = !1,
                s = Math.min(Math.round(.04 * window.innerWidth), 40);
            function u(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, i = e[0].clientX) : i = t.clientX, r = i)
            }
            function c(e) {
                if (o) {
                    if (a && "mousemove" === e.type)
                        return e.preventDefault(), void e.stopPropagation();
                    var i = e.touches,
                        u = i ? i[0].clientX : e.clientX,
                        c = u - r;
                    r = u,
                    Math.abs(c) > s && n && "" === String(n()) && (!function(e, n, i) {
                        var r = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(r, i)
                    }("swipe", e, {
                        direction: c > 0 ? "right" : "left"
                    }), d())
                }
            }
            function l(t) {
                if (o)
                    return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0
            }
            function d() {
                o = !1
            }
            e.addEventListener("touchstart", u, !1),
            e.addEventListener("touchmove", c, !1),
            e.addEventListener("touchend", l, !1),
            e.addEventListener("touchcancel", d, !1),
            e.addEventListener("mousedown", u, !1),
            e.addEventListener("mousemove", c, !1),
            e.addEventListener("mouseup", l, !1),
            e.addEventListener("mouseout", d, !1),
            this.destroy = function() {
                e.removeEventListener("touchstart", u, !1),
                e.removeEventListener("touchmove", c, !1),
                e.removeEventListener("touchend", l, !1),
                e.removeEventListener("touchcancel", d, !1),
                e.removeEventListener("mousedown", u, !1),
                e.removeEventListener("mousemove", c, !1),
                e.removeEventListener("mouseup", l, !1),
                e.removeEventListener("mouseout", d, !1),
                e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new i(e) : null
        }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var i = n(3)(n(18)),
        r = n(0);
    r.define("forms", t.exports = function(t, e) {
        var n,
            o,
            a,
            s,
            u,
            c = {},
            l = t(document),
            d = window.location,
            f = window.XDomainRequest && !window.atob,
            h = ".w-form",
            p = /e(-)?mail/i,
            v = /^\S+@\S+$/,
            m = window.alert,
            w = r.env(),
            g = /list-manage[1-9]?.com/i,
            b = e.debounce(function() {
                m("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
        function y(e, n) {
            var i = t(n),
                r = t.data(n, h);
            r || (r = t.data(n, h, {
                form: i
            })),
            x(r);
            var a = i.closest("div.w-form");
            r.done = a.find("> .w-form-done"),
            r.fail = a.find("> .w-form-fail"),
            r.fileUploads = a.find(".w-file-upload"),
            r.fileUploads.each(function(e) {
                !function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e])
                        return;
                    var i,
                        r = t(n.fileUploads[e]),
                        o = r.find("> .w-file-upload-default"),
                        a = r.find("> .w-file-upload-uploading"),
                        s = r.find("> .w-file-upload-success"),
                        c = r.find("> .w-file-upload-error"),
                        l = o.find(".w-file-upload-input"),
                        d = o.find(".w-file-upload-label"),
                        f = d.children(),
                        h = c.find(".w-file-upload-error-msg"),
                        p = s.find(".w-file-upload-file"),
                        v = s.find(".w-file-remove-link"),
                        m = p.find(".w-file-upload-file-name"),
                        g = h.attr("data-w-size-error"),
                        b = h.attr("data-w-type-error"),
                        y = h.attr("data-w-generic-error");
                    w || d.on("click keydown", function(t) {
                        "keydown" === t.type && 13 !== t.which && 32 !== t.which || (t.preventDefault(), l.click())
                    });
                    if (d.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), v.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), w)
                        l.on("click", function(t) {
                            t.preventDefault()
                        }),
                        d.on("click", function(t) {
                            t.preventDefault()
                        }),
                        f.on("click", function(t) {
                            t.preventDefault()
                        });
                    else {
                        v.on("click keydown", function(t) {
                            if ("keydown" === t.type) {
                                if (13 !== t.which && 32 !== t.which)
                                    return;
                                t.preventDefault()
                            }
                            l.removeAttr("data-value"),
                            l.val(""),
                            m.html(""),
                            o.toggle(!0),
                            s.toggle(!1),
                            d.focus()
                        }),
                        l.on("change", function(r) {
                            (i = r.target && r.target.files && r.target.files[0]) && (o.toggle(!1), c.toggle(!1), a.toggle(!0), a.focus(), m.text(i.name), T() || k(n), n.fileUploads[e].uploading = !0, function(e, n) {
                                var i = new URLSearchParams({
                                    name: e.name,
                                    size: e.size
                                });
                                t.ajax({
                                    type: "GET",
                                    url: "".concat(u, "?").concat(i),
                                    crossDomain: !0
                                }).done(function(t) {
                                    n(null, t)
                                }).fail(function(t) {
                                    n(t)
                                })
                            }(i, A))
                        });
                        var E = d.outerHeight();
                        l.height(E),
                        l.width(1)
                    }
                    function _(t) {
                        var i = t.responseJSON && t.responseJSON.msg,
                            r = y;
                        "string" == typeof i && 0 === i.indexOf("InvalidFileTypeError") ? r = b : "string" == typeof i && 0 === i.indexOf("MaxFileSizeError") && (r = g),
                        h.text(r),
                        l.removeAttr("data-value"),
                        l.val(""),
                        a.toggle(!1),
                        o.toggle(!0),
                        c.toggle(!0),
                        c.focus(),
                        n.fileUploads[e].uploading = !1,
                        T() || x(n)
                    }
                    function A(e, n) {
                        if (e)
                            return _(e);
                        var r = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            s = n.s3Url;
                        l.attr("data-value", a),
                        function(e, n, i, r, o) {
                            var a = new FormData;
                            for (var s in n)
                                a.append(s, n[s]);
                            a.append("file", i, r),
                            t.ajax({
                                type: "POST",
                                url: e,
                                data: a,
                                processData: !1,
                                contentType: !1
                            }).done(function() {
                                o(null)
                            }).fail(function(t) {
                                o(t)
                            })
                        }(s, o, i, r, O)
                    }
                    function O(t) {
                        if (t)
                            return _(t);
                        a.toggle(!1),
                        s.css("display", "inline-block"),
                        s.focus(),
                        n.fileUploads[e].uploading = !1,
                        T() || x(n)
                    }
                    function T() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function(t) {
                            return t.uploading
                        })
                    }
                }(e, r)
            });
            var s = r.form.attr("aria-label") || r.form.attr("data-name") || "Form";
            r.done.attr("aria-label") || r.form.attr("aria-label", s),
            r.done.attr("tabindex", "-1"),
            r.done.attr("role", "region"),
            r.done.attr("aria-label") || r.done.attr("aria-label", s + " success"),
            r.fail.attr("tabindex", "-1"),
            r.fail.attr("role", "region"),
            r.fail.attr("aria-label") || r.fail.attr("aria-label", s + " failure");
            var c = r.action = i.attr("action");
            r.handler = null,
            r.redirect = i.attr("data-redirect"),
            g.test(c) ? r.handler = O : c || (o ? r.handler = A : b())
        }
        function x(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null,
            t.success = !1,
            e.prop("disabled", !1),
            t.label && e.val(t.label)
        }
        function k(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0),
            n && (t.label = e.val(), e.val(n))
        }
        function E(e, n) {
            var i = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(r, o) {
                var a = t(o),
                    s = a.attr("type"),
                    u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1),
                    c = a.val();
                if ("checkbox" === s)
                    c = a.is(":checked");
                else if ("radio" === s) {
                    if (null === n[u] || "string" == typeof n[u])
                        return;
                    c = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof c && (c = t.trim(c)),
                n[u] = c,
                i = i || function(t, e, n, i) {
                    var r = null;
                    "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") ? i ? p.test(t.attr("type")) && (v.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || i || (r = "Please confirm you’re not a robot.");
                    return r
                }(a, s, u, c)
            }), i
        }
        c.ready = c.design = c.preview = function() {
            !function() {
                o = t("html").attr("data-wf-site"),
                s = "https://webflow.com/api/v1/form/" + o,
                f && s.indexOf("https://webflow.com") >= 0 && (s = s.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (u = "".concat(s, "/signFile"), !(n = t(h + " form")).length)
                    return;
                n.each(y)
            }(),
            w || a || function() {
                a = !0,
                l.on("submit", h + " form", function(e) {
                    var n = t.data(this, h);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [["checkbox", ".w-checkbox-input"], ["radio", ".w-radio-input"]];
                l.on("change", h + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }),
                l.on("change", h + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, n) {
                        return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }),
                e.forEach(function(e) {
                    var n = (0, i.default)(e, 2),
                        r = n[0],
                        o = n[1];
                    l.on("focus", h + ' form input[type="'.concat(r, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).addClass("w--redirected-focus"),
                        t(e.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(o).addClass("w--redirected-focus-visible")
                    }),
                    l.on("blur", h + ' form input[type="'.concat(r, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).removeClass("".concat("w--redirected-focus", " ").concat("w--redirected-focus-visible"))
                    })
                })
            }()
        };
        var _ = {
            _mkto_trk: "marketo"
        };
        function A(e) {
            x(e);
            var n = e.form,
                i = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: d.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()),
                    trackingCookies: document.cookie.split("; ").reduce(function(t, e) {
                        var n = e.split("="),
                            i = n[0];
                        if (i in _) {
                            var r = _[i],
                                o = n.slice(1).join("=");
                            t[r] = o
                        }
                        return t
                    }, {})
                },
                a = n.attr("data-wf-flow");
            a && (i.wfFlow = a),
            L(e);
            var u = E(n, i.fields);
            if (u)
                return m(u);
            i.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, i) {
                    var r = t(i),
                        o = r.attr("data-name") || r.attr("name") || "File " + (e + 1),
                        a = r.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)),
                    n[o] = a
                }), n
            }(n),
            k(e),
            o ? t.ajax({
                url: s,
                type: "POST",
                data: i,
                dataType: "json",
                crossDomain: !0
            }).done(function(t) {
                t && 200 === t.code && (e.success = !0),
                T(e)
            }).fail(function() {
                T(e)
            }) : T(e)
        }
        function O(n) {
            x(n);
            var i = n.form,
                r = {};
            if (!/^https/.test(d.href) || /^https/.test(n.action)) {
                L(n);
                var o,
                    a = E(i, r);
                if (a)
                    return m(a);
                k(n),
                e.each(r, function(t, e) {
                    p.test(e) && (r.EMAIL = t),
                    /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                    /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t),
                    /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                }),
                o && !r.FNAME && (o = o.split(" "), r.FNAME = o[0], r.LNAME = r.LNAME || o[1]);
                var s = n.action.replace("/post?", "/post-json?") + "&c=?",
                    u = s.indexOf("u=") + 2;
                u = s.substring(u, s.indexOf("&", u));
                var c = s.indexOf("id=") + 3;
                c = s.substring(c, s.indexOf("&", c)),
                r["b_" + u + "_" + c] = "",
                t.ajax({
                    url: s,
                    data: r,
                    dataType: "jsonp"
                }).done(function(t) {
                    n.success = "success" === t.result || /already/.test(t.msg),
                    n.success || console.info("MailChimp error: " + t.msg),
                    T(n)
                }).fail(function() {
                    T(n)
                })
            } else
                i.attr("method", "post")
        }
        function T(t) {
            var e = t.form,
                n = t.redirect,
                i = t.success;
            i && n ? r.location(n) : (t.done.toggle(i), t.fail.toggle(!i), i ? t.done.focus() : t.fail.focus(), e.toggle(!i), x(t))
        }
        function L(t) {
            t.evt && t.evt.preventDefault(),
            t.evt = null
        }
        return c
    })
}, function(t, e, n) {
    var i = n(19),
        r = n(20),
        o = n(21);
    t.exports = function(t, e) {
        return i(t) || r(t, e) || o()
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t))
            return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            i = !0,
            r = !1,
            o = void 0;
        try {
            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0)
                ;
        } catch (t) {
            r = !0,
            o = t
        } finally {
            try {
                i || null == s.return || s.return()
            } finally {
                if (r)
                    throw o
            }
        }
        return n
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(4),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
    i.define("navbar", t.exports = function(t, e) {
        var n,
            a,
            s,
            u,
            c = {},
            l = t.tram,
            d = t(window),
            f = t(document),
            h = e.debounce,
            p = i.env(),
            v = '<div class="w-nav-overlay" data-wf-ignore />',
            m = ".w-nav",
            w = "w--open",
            g = "w--nav-dropdown-open",
            b = "w--nav-dropdown-toggle-open",
            y = "w--nav-dropdown-list-open",
            x = "w--nav-link-open",
            k = r.triggers,
            E = t();
        function _() {
            i.resize.off(A)
        }
        function A() {
            a.each(N)
        }
        function O(n, i) {
            var r = t(i),
                a = t.data(i, m);
            a || (a = t.data(i, m, {
                open: !1,
                el: r,
                config: {},
                selectedIdx: -1
            })),
            a.menu = r.find(".w-nav-menu"),
            a.links = a.menu.find(".w-nav-link"),
            a.dropdowns = a.menu.find(".w-dropdown"),
            a.dropdownToggle = a.menu.find(".w-dropdown-toggle"),
            a.dropdownList = a.menu.find(".w-dropdown-list"),
            a.button = r.find(".w-nav-button"),
            a.container = r.find(".w-container"),
            a.overlayContainerId = "w-nav-overlay-" + n,
            a.outside = function(e) {
                e.outside && f.off("click" + m, e.outside);
                return function(n) {
                    var i = t(n.target);
                    u && i.closest(".w-editor-bem-EditorOverlay").length || M(e, i)
                }
            }(a);
            var c = r.find(".w-nav-brand");
            c && "/" === c.attr("href") && null == c.attr("aria-label") && c.attr("aria-label", "home"),
            a.button.attr("style", "-webkit-user-select: text;"),
            null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"),
            a.button.attr("role", "button"),
            a.button.attr("tabindex", "0"),
            a.button.attr("aria-controls", a.overlayContainerId),
            a.button.attr("aria-haspopup", "menu"),
            a.button.attr("aria-expanded", "false"),
            a.el.off(m),
            a.button.off(m),
            a.menu.off(m),
            C(a),
            s ? (L(a), a.el.on("setting" + m, function(t) {
                return function(n, i) {
                    i = i || {};
                    var r = d.width();
                    C(t),
                    !0 === i.open && W(t, !0),
                    !1 === i.open && $(t, !0),
                    t.open && e.defer(function() {
                        r !== d.width() && S(t)
                    })
                }
            }(a))) : (!function(e) {
                if (e.overlay)
                    return;
                e.overlay = t(v).appendTo(e.el),
                e.overlay.attr("id", e.overlayContainerId),
                e.parent = e.menu.parent(),
                $(e, !0)
            }(a), a.button.on("click" + m, I(a)), a.menu.on("click" + m, "a", D(a)), a.button.on("keydown" + m, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                    case o.SPACE:
                    case o.ENTER:
                        return I(t)(), e.preventDefault(), e.stopPropagation();
                    case o.ESCAPE:
                        return $(t), e.preventDefault(), e.stopPropagation();
                    case o.ARROW_RIGHT:
                    case o.ARROW_DOWN:
                    case o.HOME:
                    case o.END:
                        return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, R(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + m, function(t) {
                return function(e) {
                    if (t.open)
                        switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, R(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return $(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), R(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), R(t), e.preventDefault(), e.stopPropagation()
                        }
                }
            }(a))),
            N(n, i)
        }
        function T(e, n) {
            var i = t.data(n, m);
            i && (L(i), t.removeData(n, m))
        }
        function L(t) {
            t.overlay && ($(t, !0), t.overlay.remove(), t.overlay = null)
        }
        function C(t) {
            var n = {},
                i = t.config || {},
                r = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(r),
            n.animDirect = /left$/.test(r) ? -1 : 1,
            i.animation !== r && t.open && e.defer(S, t),
            n.easing = t.el.attr("data-easing") || "ease",
            n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400,
            n.docHeight = t.el.attr("data-doc-height"),
            t.config = n
        }
        function R(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(),
                D(e)
            }
        }
        function S(t) {
            t.open && ($(t, !0), W(t, !0))
        }
        function I(t) {
            return h(function() {
                t.open ? $(t) : W(t)
            })
        }
        function D(e) {
            return function(n) {
                var r = t(this).attr("href");
                i.validClick(n.currentTarget) ? r && 0 === r.indexOf("#") && e.open && $(e) : n.preventDefault()
            }
        }
        c.ready = c.design = c.preview = function() {
            if (s = p && i.env("design"), u = i.env("editor"), n = t(document.body), !(a = f.find(m)).length)
                return;
            a.each(O),
            _(),
            i.resize.on(A)
        },
        c.destroy = function() {
            E = t(),
            _(),
            a && a.length && a.each(T)
        };
        var M = h(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || $(t)
            }
        });
        function N(e, n) {
            var i = t.data(n, m),
                r = i.collapsed = "none" !== i.button.css("display");
            if (!i.open || r || s || $(i, !0), i.container.length) {
                var o = function(e) {
                    var n = e.container.css(z);
                    "none" === n && (n = "");
                    return function(e, i) {
                        (i = t(i)).css(z, ""),
                        "none" === i.css(z) && i.css(z, n)
                    }
                }(i);
                i.links.each(o),
                i.dropdowns.each(o)
            }
            i.open && j(i)
        }
        var z = "max-width";
        function P(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }
        function F(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }
        function W(t, e) {
            if (!t.open) {
                t.open = !0,
                t.menu.each(P),
                t.links.addClass(x),
                t.dropdowns.addClass(g),
                t.dropdownToggle.addClass(b),
                t.dropdownList.addClass(y),
                t.button.addClass(w);
                var n = t.config;
                ("none" === n.animation || !l.support.transform || n.duration <= 0) && (e = !0);
                var r = j(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    u = t.el.height(),
                    c = t.el[0];
                if (N(0, c), k.intro(0, c), i.redraw.up(), s || f.on("click" + m, t.outside), e)
                    p();
                else {
                    var d = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (E = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver)
                        return l(t.menu).add(d).set({
                            x: n.animDirect * a,
                            height: r
                        }).start({
                            x: 0
                        }).then(p), void (t.overlay && t.overlay.width(a));
                    var h = u + o;
                    l(t.menu).add(d).set({
                        y: -h
                    }).start({
                        y: 0
                    }).then(p)
                }
            }
            function p() {
                t.button.attr("aria-expanded", "true")
            }
        }
        function j(t) {
            var e = t.config,
                i = e.docHeight ? f.height() : n.height();
            return e.animOver ? t.menu.height(i) : "fixed" !== t.el.css("position") && (i -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(i), i
        }
        function $(t, e) {
            if (t.open) {
                t.open = !1,
                t.button.removeClass(w);
                var n = t.config;
                if (("none" === n.animation || !l.support.transform || n.duration <= 0) && (e = !0), k.outro(0, t.el[0]), f.off("click" + m, t.outside), e)
                    return l(t.menu).stop(), void u();
                var i = "transform " + n.duration + "ms " + n.easing2,
                    r = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver)
                    l(t.menu).add(i).start({
                        x: o * n.animDirect
                    }).then(u);
                else {
                    var s = a + r;
                    l(t.menu).add(i).start({
                        y: -s
                    }).then(u)
                }
            }
            function u() {
                t.menu.height(""),
                l(t.menu).set({
                    x: 0,
                    y: 0
                }),
                t.menu.each(F),
                t.links.removeClass(x),
                t.dropdowns.removeClass(g),
                t.dropdownToggle.removeClass(b),
                t.dropdownList.removeClass(y),
                t.overlay && t.overlay.children().length && (E.length ? t.menu.insertAfter(E) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()),
                t.el.triggerHandler("w-close"),
                t.button.attr("aria-expanded", "false")
            }
        }
        return c
    })
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        r = n(4),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        },
        a = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    i.define("slider", t.exports = function(t, e) {
        var n,
            s,
            u,
            c = {},
            l = t.tram,
            d = t(document),
            f = i.env(),
            h = ".w-slider",
            p = '<div class="w-slider-dot" data-wf-ignore />',
            v = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
            m = "w-slider-force-show",
            w = r.triggers,
            g = !1;
        function b() {
            (n = d.find(h)).length && (n.each(k), u || (y(), i.resize.on(x), i.redraw.on(c.redraw)))
        }
        function y() {
            i.resize.off(x),
            i.redraw.off(c.redraw)
        }
        function x() {
            n.filter(":visible").each(M)
        }
        function k(e, n) {
            var i = t(n),
                r = t.data(n, h);
            r || (r = t.data(n, h, {
                index: 0,
                depth: 1,
                hasFocus: {
                    keyboard: !1,
                    mouse: !1
                },
                el: i,
                config: {}
            })),
            r.mask = i.children(".w-slider-mask"),
            r.left = i.children(".w-slider-arrow-left"),
            r.right = i.children(".w-slider-arrow-right"),
            r.nav = i.children(".w-slider-nav"),
            r.slides = r.mask.children(".w-slide"),
            r.slides.each(w.reset),
            g && (r.maskWidth = 0),
            void 0 === i.attr("role") && i.attr("role", "region"),
            void 0 === i.attr("aria-label") && i.attr("aria-label", "carousel");
            var o = r.mask.attr("id");
            if (o || (o = "w-slider-mask-" + e, r.mask.attr("id", o)), s || r.ariaLiveLabel || (r.ariaLiveLabel = t(v).appendTo(r.mask)), r.left.attr("role", "button"), r.left.attr("tabindex", "0"), r.left.attr("aria-controls", o), void 0 === r.left.attr("aria-label") && r.left.attr("aria-label", "previous slide"), r.right.attr("role", "button"), r.right.attr("tabindex", "0"), r.right.attr("aria-controls", o), void 0 === r.right.attr("aria-label") && r.right.attr("aria-label", "next slide"), !l.support.transform)
                return r.left.hide(), r.right.hide(), r.nav.hide(), void (u = !0);
            r.el.off(h),
            r.left.off(h),
            r.right.off(h),
            r.nav.off(h),
            E(r),
            s ? (r.el.on("setting" + h, S(r)), R(r), r.hasTimer = !1) : (r.el.on("swipe" + h, S(r)), r.left.on("click" + h, T(r)), r.right.on("click" + h, L(r)), r.left.on("keydown" + h, O(r, T)), r.right.on("keydown" + h, O(r, L)), r.nav.on("keydown" + h, "> div", S(r)), r.config.autoplay && !r.hasTimer && (r.hasTimer = !0, r.timerCount = 1, C(r)), r.el.on("mouseenter" + h, A(r, !0, "mouse")), r.el.on("focusin" + h, A(r, !0, "keyboard")), r.el.on("mouseleave" + h, A(r, !1, "mouse")), r.el.on("focusout" + h, A(r, !1, "keyboard"))),
            r.nav.on("click" + h, "> div", S(r)),
            f || r.mask.contents().filter(function() {
                return 3 === this.nodeType
            }).remove();
            var a = i.filter(":hidden");
            a.addClass(m);
            var c = i.parents(":hidden");
            c.addClass(m),
            g || M(e, n),
            a.removeClass(m),
            c.removeClass(m)
        }
        function E(t) {
            var e = {
                crossOver: 0
            };
            e.animation = t.el.attr("data-animation") || "slide",
            "outin" === e.animation && (e.animation = "cross", e.crossOver = .5),
            e.easing = t.el.attr("data-easing") || "ease";
            var n = t.el.attr("data-duration");
            if (e.duration = null != n ? parseInt(n, 10) : 500, _(t.el.attr("data-infinite")) && (e.infinite = !0), _(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0), _(t.el.attr("data-hide-arrows")) ? e.hideArrows = !0 : t.config.hideArrows && (t.left.show(), t.right.show()), _(t.el.attr("data-autoplay"))) {
                e.autoplay = !0,
                e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3,
                e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10);
                var i = "mousedown" + h + " touchstart" + h;
                s || t.el.off(i).one(i, function() {
                    R(t)
                })
            }
            var r = t.right.width();
            e.edge = r ? r + 40 : 100,
            t.config = e
        }
        function _(t) {
            return "1" === t || "true" === t
        }
        function A(e, n, i) {
            return function(r) {
                if (n)
                    e.hasFocus[i] = n;
                else {
                    if (t.contains(e.el.get(0), r.relatedTarget))
                        return;
                    if (e.hasFocus[i] = n, e.hasFocus.mouse && "keyboard" === i || e.hasFocus.keyboard && "mouse" === i)
                        return
                }
                n ? (e.ariaLiveLabel.attr("aria-live", "polite"), e.hasTimer && R(e)) : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && C(e))
            }
        }
        function O(t, e) {
            return function(n) {
                switch (n.keyCode) {
                case o.SPACE:
                case o.ENTER:
                    return e(t)(), n.preventDefault(), n.stopPropagation()
                }
            }
        }
        function T(t) {
            return function() {
                D(t, {
                    index: t.index - 1,
                    vector: -1
                })
            }
        }
        function L(t) {
            return function() {
                D(t, {
                    index: t.index + 1,
                    vector: 1
                })
            }
        }
        function C(t) {
            R(t);
            var e = t.config,
                n = e.timerMax;
            n && t.timerCount++ > n || (t.timerId = window.setTimeout(function() {
                null == t.timerId || s || (L(t)(), C(t))
            }, e.delay))
        }
        function R(t) {
            window.clearTimeout(t.timerId),
            t.timerId = null
        }
        function S(n) {
            return function(r, a) {
                a = a || {};
                var u = n.config;
                if (s && "setting" === r.type) {
                    if ("prev" === a.select)
                        return T(n)();
                    if ("next" === a.select)
                        return L(n)();
                    if (E(n), N(n), null == a.select)
                        return;
                    !function(n, i) {
                        var r = null;
                        i === n.slides.length && (b(), N(n)),
                        e.each(n.anchors, function(e, n) {
                            t(e.els).each(function(e, o) {
                                t(o).index() === i && (r = n)
                            })
                        }),
                        null != r && D(n, {
                            index: r,
                            immediate: !0
                        })
                    }(n, a.select)
                } else {
                    if ("swipe" === r.type) {
                        if (u.disableSwipe)
                            return;
                        if (i.env("editor"))
                            return;
                        return "left" === a.direction ? L(n)() : "right" === a.direction ? T(n)() : void 0
                    }
                    if (n.nav.has(r.target).length) {
                        var c = t(r.target).index();
                        if ("click" === r.type && D(n, {
                            index: c
                        }), "keydown" === r.type)
                            switch (r.keyCode) {
                            case o.ENTER:
                            case o.SPACE:
                                D(n, {
                                    index: c
                                }),
                                r.preventDefault();
                                break;
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                I(n.nav, Math.max(c - 1, 0)),
                                r.preventDefault();
                                break;
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                I(n.nav, Math.min(c + 1, n.pages)),
                                r.preventDefault();
                                break;
                            case o.HOME:
                                I(n.nav, 0),
                                r.preventDefault();
                                break;
                            case o.END:
                                I(n.nav, n.pages),
                                r.preventDefault();
                                break;
                            default:
                                return
                            }
                    }
                }
            }
        }
        function I(t, e) {
            var n = t.children().eq(e).focus();
            t.children().not(n)
        }
        function D(e, n) {
            n = n || {};
            var i = e.config,
                r = e.anchors;
            e.previous = e.index;
            var o = n.index,
                u = {};
            o < 0 ? (o = r.length - 1, i.infinite && (u.x = -e.endX, u.from = 0, u.to = r[0].width)) : o >= r.length && (o = 0, i.infinite && (u.x = r[r.length - 1].width, u.from = -r[r.length - 1].x, u.to = u.from - u.x)),
            e.index = o;
            var c = e.nav.children().eq(o).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
            e.nav.children().not(c).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
            i.hideArrows && (e.index === r.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
            var d = e.offsetX || 0,
                f = e.offsetX = -r[e.index].x,
                h = {
                    x: f,
                    opacity: 1,
                    visibility: ""
                },
                p = t(r[e.index].els),
                v = t(r[e.previous] && r[e.previous].els),
                m = e.slides.not(p),
                b = i.animation,
                y = i.easing,
                x = Math.round(i.duration),
                k = n.vector || (e.index > e.previous ? 1 : -1),
                E = "opacity " + x + "ms " + y,
                _ = "transform " + x + "ms " + y;
            if (p.find(a).removeAttr("tabindex"), p.removeAttr("aria-hidden"), p.find("*").removeAttr("aria-hidden"), m.find(a).attr("tabindex", "-1"), m.attr("aria-hidden", "true"), m.find("*").attr("aria-hidden", "true"), s || (p.each(w.intro), m.each(w.outro)), n.immediate && !g)
                return l(p).set(h), void T();
            if (e.index !== e.previous) {
                if (s || e.ariaLiveLabel.text("Slide ".concat(o + 1, " of ").concat(r.length, ".")), "cross" === b) {
                    var A = Math.round(x - x * i.crossOver),
                        O = Math.round(x - A);
                    return E = "opacity " + A + "ms " + y, l(v).set({
                        visibility: ""
                    }).add(E).start({
                        opacity: 0
                    }), void l(p).set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(E).wait(O).then({
                        opacity: 1
                    }).then(T)
                }
                if ("fade" === b)
                    return l(v).set({
                        visibility: ""
                    }).stop(), void l(p).set({
                        visibility: "",
                        x: f,
                        opacity: 0,
                        zIndex: e.depth++
                    }).add(E).start({
                        opacity: 1
                    }).then(T);
                if ("over" === b)
                    return h = {
                        x: e.endX
                    }, l(v).set({
                        visibility: ""
                    }).stop(), void l(p).set({
                        visibility: "",
                        zIndex: e.depth++,
                        x: f + r[e.index].width * k
                    }).add(_).start({
                        x: f
                    }).then(T);
                i.infinite && u.x ? (l(e.slides.not(v)).set({
                    visibility: "",
                    x: u.x
                }).add(_).start({
                    x: f
                }), l(v).set({
                    visibility: "",
                    x: u.from
                }).add(_).start({
                    x: u.to
                }), e.shifted = v) : (i.infinite && e.shifted && (l(e.shifted).set({
                    visibility: "",
                    x: d
                }), e.shifted = null), l(e.slides).set({
                    visibility: ""
                }).add(_).start({
                    x: f
                }))
            }
            function T() {
                p = t(r[e.index].els),
                m = e.slides.not(p),
                "slide" !== b && (h.visibility = "hidden"),
                l(m).set(h)
            }
        }
        function M(e, n) {
            var i = t.data(n, h);
            if (i)
                return function(t) {
                    var e = t.mask.width();
                    if (t.maskWidth !== e)
                        return t.maskWidth = e, !0;
                    return !1
                }(i) ? N(i) : void (s && function(e) {
                    var n = 0;
                    if (e.slides.each(function(e, i) {
                        n += t(i).outerWidth(!0)
                    }), e.slidesWidth !== n)
                        return e.slidesWidth = n, !0;
                    return !1
                }(i) && N(i))
        }
        function N(e) {
            var n = 1,
                i = 0,
                r = 0,
                o = 0,
                a = e.maskWidth,
                u = a - e.config.edge;
            u < 0 && (u = 0),
            e.anchors = [{
                els: [],
                x: 0,
                width: 0
            }],
            e.slides.each(function(s, c) {
                r - i > u && (n++, i += a, e.anchors[n - 1] = {
                    els: [],
                    x: r,
                    width: 0
                }),
                o = t(c).outerWidth(!0),
                r += o,
                e.anchors[n - 1].width += o,
                e.anchors[n - 1].els.push(c);
                var l = s + 1 + " of " + e.slides.length;
                t(c).attr("aria-label", l),
                t(c).attr("role", "group")
            }),
            e.endX = r,
            s && (e.pages = null),
            e.nav.length && e.pages !== n && (e.pages = n, function(e) {
                var n,
                    i = [],
                    r = e.el.attr("data-nav-spacing");
                r && (r = parseFloat(r) + "px");
                for (var o = 0, a = e.pages; o < a; o++)
                    (n = t(p)).attr("aria-label", "Show slide " + (o + 1) + " of " + a).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    e.nav.hasClass("w-num") && n.text(o + 1),
                    null != r && n.css({
                        "margin-left": r,
                        "margin-right": r
                    }),
                    i.push(n);
                e.nav.empty().append(i)
            }(e));
            var c = e.index;
            c >= n && (c = n - 1),
            D(e, {
                immediate: !0,
                index: c
            })
        }
        return c.ready = function() {
            s = i.env("design"),
            b()
        }, c.design = function() {
            s = !0,
            setTimeout(b, 1e3)
        }, c.preview = function() {
            s = !1,
            b()
        }, c.redraw = function() {
            g = !0,
            b(),
            g = !1
        }, c.destroy = y, c
    })
}]); /**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */



Webflow.require('ix').init([
{
    "slug": "fade-up-and-in",
    "name": "Fade up and in",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "20%",
            "stepsA": [{
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-in",
    "name": "Fade in",
    "value": {
        "style": {
            "opacity": 0
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "10%",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 800ms ease-out 0ms"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "slide-right",
    "name": "SLIDE RIGHT",
    "value": {
        "style": {
            "opacity": 0,
            "x": "-100px",
            "y": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "brighten-bg",
    "name": "Brighten BG",
    "value": {
        "style": {
            "opacity": 0.2
        },
        "triggers": [{
            "type": "scroll",
            "offsetTop": "50%",
            "offsetBot": "50%",
            "stepsA": [{
                "wait": 2000,
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": [{
                "wait": 2000,
                "opacity": 0.3,
                "transition": "opacity 2000ms ease 0ms"
            }]
        }]
    }
},
{
    "slug": "slide-left",
    "name": "SLIDE LEFT",
    "value": {
        "style": {
            "opacity": 0,
            "x": "100px",
            "y": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "brighten-bg-2",
    "name": "Brighten BG 2",
    "value": {
        "style": {
            "opacity": 0.35
        },
        "triggers": [{
            "type": "scroll",
            "offsetTop": "40%",
            "offsetBot": "50%",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-delay",
    "name": "Fade up and in Delay",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "20%",
            "stepsA": [{
                "wait": 500
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "load-animation",
    "name": "Load Animation",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "100px"
        },
        "triggers": [{
            "type": "load",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "load-animation-delay",
    "name": "Load Animation Delay",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "100px"
        },
        "triggers": [{
            "type": "load",
            "stepsA": [{
                "wait": 300
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-2",
    "name": "Fade up and in 2",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "40%",
            "stepsA": [{
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-delay-2",
    "name": "Fade up and in Delay 2",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "wait": 300
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-delay-3",
    "name": "Fade up and in Delay 3",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "wait": 600
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-delay-4",
    "name": "Fade up and in Delay 4",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "wait": 900
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-on-load",
    "name": "Fade up and in on load",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "load",
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }, {
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "pink-bg-fade-in",
    "name": "Pink BG Fade In",
    "value": {
        "style": {
            "opacity": 0
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "90%",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "new-interaction",
    "name": "New Interaction",
    "value": {
        "style": {},
        "triggers": []
    }
},
{
    "slug": "display-none",
    "name": "Display None",
    "value": {
        "style": {
            "display": "none"
        },
        "triggers": []
    }
},
{
    "slug": "display-nav",
    "name": "Display Nav",
    "value": {
        "style": {},
        "triggers": [{
            "type": "scroll",
            "selector": ".navbar",
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "-71px"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block",
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }]
        }]
    }
},
{
    "slug": "did-you-know",
    "name": "Did you know",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "-12px"
        },
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "enlarge",
    "name": "enlarge",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "scaleX": 1.03,
                "scaleY": 1.03,
                "scaleZ": 1
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            }]
        }]
    }
},
{
    "slug": "copy-fade-in",
    "name": "Copy Fade In",
    "value": {
        "style": {
            "opacity": 0
        },
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }]
        }]
    }
},
{
    "slug": "fade-up-and-in-cell-1",
    "name": "Fade up and in CELL 1",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "50%",
            "stepsA": [{
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-cell-2",
    "name": "Fade up and in CELL 2",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "50%",
            "stepsA": [{
                "wait": 700
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-cell-3",
    "name": "Fade up and in CELL 3",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "50%",
            "stepsA": [{
                "wait": 1400
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-stats",
    "name": "Fade up and in Stats",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "10%",
            "stepsA": [{
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-in-stats",
    "name": "Fade in stats",
    "value": {
        "style": {
            "opacity": 0
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "10%",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 800ms ease-out 0ms"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-3",
    "name": "Fade up and in 3",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-delay-stats",
    "name": "Fade up and in Delay Stats",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "10%",
            "stepsA": [{
                "wait": 300
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
},
{
    "slug": "fade-up-and-in-delay-stats-3",
    "name": "Fade up and in Delay Stats 3",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "71px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "10%",
            "stepsA": [{
                "wait": 600
            }, {
                "wait": 2000,
                "opacity": 1,
                "transition": "transform 800ms ease-out 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px"
            }],
            "stepsB": []
        }]
    }
}
]);
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
    function b(e, t, n) {
        var r,
            i,
            o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };
    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e,
            t,
            n,
            r,
            i,
            o,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    },
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t,
                n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n,
                r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r,
                i,
                o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e,
            d,
            b,
            o,
            i,
            h,
            f,
            g,
            w,
            u,
            l,
            T,
            C,
            a,
            E,
            v,
            s,
            c,
            y,
            S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a), n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0, e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n,
                        r = a([], e.length, o),
                        i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }, T = se.setDocument = function(e) {
            var t,
                n,
                r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), d.attributes = ce(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
            }), d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n,
                        r,
                        i,
                        o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }), ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }, D = t ? function(e, t) {
                if (e === t)
                    return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t)
                    return l = !0, 0;
                var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }), C
        }, se.matches = function(e, t) {
            return se(e, null, null, t)
        }, se.matchesSelector = function(e, t) {
            if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t)
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, se.escape = function(e) {
            return (e + "").replace(re, ie)
        }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function(e) {
            var t,
                n = [],
                r = 0,
                i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null, e
        }, o = se.getText = function(e) {
            var t,
                n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t,
                        n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3),
                        m = "last" !== h.slice(-4),
                        x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, n) {
                        var r,
                            i,
                            o,
                            a,
                            s,
                            u,
                            l = y !== m ? "nextSibling" : "previousSibling",
                            c = e.parentNode,
                            f = x && e.nodeName.toLowerCase(),
                            p = !n && !x,
                            d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t,
                        a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n,
                            r = a(e, o),
                            i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = [],
                        i = [],
                        s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i,
                            o = s(e, null, r, []),
                            a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;)
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r,
                    i,
                    o,
                    a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            } : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i,
                    o,
                    a,
                    s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s,
                u,
                l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length)), b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n,
                v,
                y,
                m,
                x,
                r,
                i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o,
                        a,
                        s,
                        u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o)))
                            return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    },
    S.fn.extend({
        find: function(e) {
            var t,
                n,
                r = this.length,
                i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]), t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j,
        q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r,
            i;
        if (!e)
            return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn,
    j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e,
            n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i,
            t,
            o,
            a,
            s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1),
                i = !1,
                a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n)))
                            s.splice(n, 1),
                            n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    },
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                            i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;
                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e,
                                            t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                            m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                            u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                            o[1][3].add(l(0, e, m(t) ? t : R)),
                            o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                },
                s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this,
                        i[t] = 1 < arguments.length ? s.call(arguments) : e,
                        --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    },
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    },
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n)
                    $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                return l.call(S(e), n)
            })), t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r,
                i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n,
                r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;
    function Z(e, t, n) {
        var r,
            i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t,
                r,
                i,
                o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                    empty: S.Callbacks("once memory").add(function() {
                        Y.remove(e, [t + "queue", n])
                    })
                })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n,
                r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce,
        fe,
        pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0
    }
    function Ee() {
        return !1
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function ke(e, t, n, r, i, o) {
        var a,
            s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t)
                ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i)
            i = Ee;
        else if (!i)
            return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t,
                    n,
                    r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n)
                        return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = Te.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    },
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t,
                    n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r,
                i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }
    function Oe(e, t) {
        var n,
            r,
            i,
            o,
            a,
            s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e,
            t,
            a,
            s,
            u,
            l,
            c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Pe(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
                        Oe(o[r], a[r]);
                else
                    Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0)
        },
        remove: function(e) {
            return Re(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function(e, t, n) {
            var r,
                i,
                o = {};
            for (i in t)
                o[i] = e.style[i],
                e.style[i] = t[i];
            for (i in r = n.call(e), t)
                e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");
    function Be(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e,
                    t,
                    n,
                    r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};
    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function(e) {
                var t = e[0].toUpperCase() + e.slice(1),
                    n = _e.length;
                while (n--)
                    if ((e = _e[n] + t) in ze)
                        return e
            }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }
    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i,
                o,
                a,
                s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                        return Ze(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r,
                    i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Je)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r,
                    i,
                    o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t,
                n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype,
    (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = et.prototype.init,
    S.fx.step = {};
    var tt,
        nt,
        rt,
        it,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }
    function lt(e, t) {
        var n,
            r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function ft(o, e, t) {
        var n,
            a,
            r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a)
                    return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                    l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a)
                        return this;
                    for (a = !0; t < n; t++)
                        l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (!function(e, t) {
            var n,
                r,
                i,
                o,
                a;
            for (n in e)
                if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                    for (n in o = a.expand(o), delete e[r], o)
                        n in e || (e[n] = o[n], t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                ft.tweeners[n] = ft.tweeners[n] || [],
                ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s()
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })), u = !1, d)
                    u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                        for (r in g || le([e]), Y.remove(e, "fxshow"), d)
                            S.style(e, r, d[r])
                    })),
                    u = ct(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }, r
    },
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;)
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e,
                    t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;)
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e,
            t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        tt = void 0
    },
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    },
    S.fx.interval = 13,
    S.fx.start = function() {
        nt || (nt = !0, st())
    },
    S.fx.stop = function() {
        nt = null
    },
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    },
    rt = E.createElement("input"),
    it = E.createElement("select").appendChild(E.createElement("option")),
    rt.type = "checkbox",
    y.checkOn = "" !== rt.value,
    y.optSelected = it.selected,
    (rt = E.createElement("input")).value = "t",
    rt.type = "radio",
    y.radioValue = "t" === rt.value;
    var pt,
        dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n,
                r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r,
                i,
                o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ")
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r,
                i,
                o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, yt(this)))
                });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, yt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function() {
                var e,
                    t,
                    n,
                    r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = mt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r,
                e,
                i,
                t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t,
                        n,
                        r,
                        i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n,
                        r,
                        i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }),
    y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n,
            r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Dt(n, e[n], t, i);
        return r.join("&")
    },
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n,
                r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function $t(e, t) {
        var n,
            r,
            i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0),
            t = t || {};
            var c,
                f,
                p,
                n,
                d,
                r,
                h,
                g,
                i,
                o,
                v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p))
                                    n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    },
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    },
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    },
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt,
    y.ajax = zt = !!zt,
    S.ajaxTransport(function(i) {
        var o,
            a;
        if (y.cors || zt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n,
                        r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    },
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    },
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r,
            i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ut,
        Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r,
            i,
            o,
            a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || S.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }), "script"
    }),
    y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r,
            i,
            o
    },
    S.fn.load = function(e, t, n) {
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    },
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    },
    S.offset = {
        setOffset: function(e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e,
                n,
                r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e,
                    t,
                    n,
                    r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t)
                return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n,
            r,
            i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e))
            return r = s.call(arguments, 2), (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || S.guid++, i
    },
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    },
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    },
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    },
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
