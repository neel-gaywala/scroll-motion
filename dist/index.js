(() => {
  function t(t, e, r, n) {
    Object.defineProperty(t, e, {
      get: r,
      set: n,
      enumerable: !0,
      configurable: !0,
    });
  }
  function e(t) {
    return t && t.__esModule ? t.default : t;
  }
  var r,
    n,
    i,
    o,
    a,
    s,
    u,
    l,
    c,
    f,
    h,
    p,
    d,
    g,
    m,
    _,
    v,
    y,
    b,
    x,
    w,
    T,
    k,
    O,
    M,
    A,
    E,
    C,
    S,
    P,
    D,
    z,
    R,
    F,
    L,
    Y,
    I,
    B,
    N,
    X,
    U,
    q,
    j,
    W,
    H,
    V,
    G,
    $,
    Q,
    Z,
    J,
    K,
    tt,
    te,
    tr,
    tn,
    ti,
    to,
    ta,
    ts,
    tu,
    tl,
    tc,
    tf,
    th,
    tp,
    td,
    tg,
    tm,
    t_,
    tv,
    ty,
    tb,
    tx,
    tw,
    tT,
    tk,
    tO,
    tM,
    tA,
    tE,
    tC,
    tS,
    tP,
    tD,
    tz,
    tR,
    tF,
    tL,
    tY,
    tI,
    tB,
    tN,
    tX,
    tU,
    tq,
    tj,
    tW,
    tH,
    tV,
    tG,
    t$,
    tQ,
    tZ,
    tJ,
    tK,
    t0,
    t1,
    t2,
    t5,
    t3,
    t8,
    t6,
    t4,
    t9,
    t7,
    et,
    ee,
    er,
    en,
    ei,
    eo,
    ea,
    es,
    eu,
    el,
    ec,
    ef,
    eh,
    ep,
    ed,
    eg,
    em,
    e_,
    ev,
    ey,
    eb,
    ex,
    ew,
    eT,
    ek,
    eO,
    eM,
    eA,
    eE,
    eC,
    eS,
    eP,
    eD,
    ez,
    eR,
    eF,
    eL,
    eY,
    eI,
    eB,
    eN,
    eX,
    eU,
    eq,
    ej,
    eW,
    eH,
    eV,
    eG,
    e$,
    eQ,
    eZ,
    eJ,
    eK,
    e0,
    e1,
    e2,
    e5,
    e3,
    e8,
    e6,
    e4,
    e9,
    e7,
    rt,
    re,
    rr,
    rn,
    ri = globalThis,
    ro = {},
    ra = {},
    rs = ri.parcelRequire94c2;
  null == rs &&
    (((rs = function (t) {
      if (t in ro) return ro[t].exports;
      if (t in ra) {
        var e = ra[t];
        delete ra[t];
        var r = { id: t, exports: {} };
        return (ro[t] = r), e.call(r.exports, r, r.exports), r.exports;
      }
      var n = Error("Cannot find module '" + t + "'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }).register = function (t, e) {
      ra[t] = e;
    }),
    (ri.parcelRequire94c2 = rs)),
    (0, rs.register)("6wLgJ", function (e, r) {
      function n(t) {
        if (void 0 === t)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function i(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      t(e.exports, "_config", () => P),
        t(e.exports, "_isString", () => B),
        t(e.exports, "_isUndefined", () => U),
        t(e.exports, "_numExp", () => Q),
        t(e.exports, "_numWithUnitExp", () => Z),
        t(e.exports, "_relExp", () => K),
        t(e.exports, "gsap", () => rO),
        t(e.exports, "_missingPlugin", () => to),
        t(e.exports, "_plugins", () => tg),
        t(e.exports, "GSCache", () => eX),
        t(e.exports, "_getCache", () => tx),
        t(e.exports, "_getProperty", () => tw),
        t(e.exports, "_forEachName", () => tT),
        t(e.exports, "_round", () => tk),
        t(e.exports, "_parseRelative", () => tM),
        t(e.exports, "_ticker", () => eM),
        t(e.exports, "getUnit", () => et),
        t(e.exports, "_replaceRandom", () => ef),
        t(e.exports, "_getSetter", () => rr),
        t(e.exports, "PropTween", () => rf),
        t(e.exports, "_colorExp", () => eT),
        t(e.exports, "_colorStringFilter", () => eO),
        t(e.exports, "_renderComplexString", () => ro),
        t(e.exports, "_checkPlugin", () => eK),
        t(e.exports, "_sortPropTweensByPriority", () => rc);
      /*!
       * GSAP 3.12.7
       * https://gsap.com
       *
       * @license Copyright 2008-2025, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ var o,
        a,
        s,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        _,
        v,
        y,
        b,
        x,
        w,
        T,
        k,
        O,
        M,
        A,
        E,
        C,
        S,
        P = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        D = { duration: 0.5, overwrite: !1, delay: 0 },
        z = 2 * Math.PI,
        R = z / 4,
        F = 0,
        L = Math.sqrt,
        Y = Math.cos,
        I = Math.sin,
        B = function (t) {
          return "string" == typeof t;
        },
        N = function (t) {
          return "function" == typeof t;
        },
        X = function (t) {
          return "number" == typeof t;
        },
        U = function (t) {
          return void 0 === t;
        },
        q = function (t) {
          return "object" == typeof t;
        },
        j = function (t) {
          return !1 !== t;
        },
        W = function () {
          return "undefined" != typeof window;
        },
        H = function (t) {
          return N(t) || B(t);
        },
        V =
          ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        G = Array.isArray,
        $ = /(?:-?\.?\d|\.)+/gi,
        Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        J = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        K = /[+-]=-?[.\d]+/,
        tt = /[^,'"\[\]\s]+/gi,
        te = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        tr = {},
        tn = {},
        ti = function (t) {
          return (tn = tz(t, tr)) && rO;
        },
        to = function (t, e) {
          return console.warn(
            "Invalid property",
            t,
            "set to",
            e,
            "Missing plugin? gsap.registerPlugin()"
          );
        },
        ta = function (t, e) {
          return !e && console.warn(t);
        },
        ts = function (t, e) {
          return (t && (tr[t] = e) && tn && (tn[t] = e)) || tr;
        },
        tu = function () {
          return 0;
        },
        tl = { suppressEvents: !0, isStart: !0, kill: !1 },
        tc = { suppressEvents: !0, kill: !1 },
        tf = { suppressEvents: !0 },
        th = {},
        tp = [],
        td = {},
        tg = {},
        tm = {},
        t_ = 30,
        tv = [],
        ty = "",
        tb = function (t) {
          var e,
            r,
            n = t[0];
          if ((q(n) || N(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = tv.length; r-- && !tv[r].targetTest(n); );
            e = tv[r];
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new eX(t[r], e)))) ||
              t.splice(r, 1);
          return t;
        },
        tx = function (t) {
          return t._gsap || tb(en(t))[0]._gsap;
        },
        tw = function (t, e, r) {
          return (r = t[e]) && N(r)
            ? t[e]()
            : (U(r) && t.getAttribute && t.getAttribute(e)) || r;
        },
        tT = function (t, e) {
          return (t = t.split(",")).forEach(e) || t;
        },
        tk = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        },
        tO = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0;
        },
        tM = function (t, e) {
          var r = e.charAt(0),
            n = parseFloat(e.substr(2));
          return (
            (t = parseFloat(t)),
            "+" === r ? t + n : "-" === r ? t - n : "*" === r ? t * n : t / n
          );
        },
        tA = function (t, e) {
          for (var r = e.length, n = 0; 0 > t.indexOf(e[n]) && ++n < r; );
          return n < r;
        },
        tE = function () {
          var t,
            e,
            r = tp.length,
            n = tp.slice(0);
          for (t = 0, td = {}, tp.length = 0; t < r; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        },
        tC = function (t, e, r, n) {
          tp.length && !x && tE(),
            t.render(e, r, n || (x && e < 0 && (t._initted || t._startAt))),
            tp.length && !x && tE();
        },
        tS = function (t) {
          var e = parseFloat(t);
          return (e || 0 === e) && (t + "").match(tt).length < 2
            ? e
            : B(t)
            ? t.trim()
            : t;
        },
        tP = function (t) {
          return t;
        },
        tD = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        },
        tz = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        tR = function t(e, r) {
          for (var n in r)
            "__proto__" !== n &&
              "constructor" !== n &&
              "prototype" !== n &&
              (e[n] = q(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n]);
          return e;
        },
        tF = function (t, e) {
          var r,
            n = {};
          for (r in t) r in e || (n[r] = t[r]);
          return n;
        },
        tL = function (t) {
          var e,
            r = t.parent || T,
            n = t.keyframes
              ? ((e = G(t.keyframes)),
                function (t, r) {
                  for (var n in r)
                    n in t ||
                      ("duration" === n && e) ||
                      "ease" === n ||
                      (t[n] = r[n]);
                })
              : tD;
          if (j(t.inherit))
            for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp);
          return t;
        },
        tY = function (t, e) {
          for (
            var r = t.length, n = r === e.length;
            n && r-- && t[r] === e[r];

          );
          return r < 0;
        },
        tI = function (t, e, r, n, i) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var o,
            a = t[n];
          if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev;
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          );
        },
        tB = function (t, e, r, n) {
          void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
          var i = e._prev,
            o = e._next;
          i ? (i._next = o) : t[r] === e && (t[r] = o),
            o ? (o._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null);
        },
        tN = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0);
        },
        tX = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
          return t;
        },
        tU = function (t) {
          for (var e = t.parent; e && e.parent; )
            (e._dirty = 1), e.totalDuration(), (e = e.parent);
          return t;
        },
        tq = function (t, e, r, n) {
          return (
            t._startAt &&
            (x
              ? t._startAt.revert(tc)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, n))
          );
        },
        tj = function (t) {
          return t._repeat
            ? tW(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0;
        },
        tW = function (t, e) {
          var r = Math.floor((t = tO(t / e)));
          return t && r === t ? r - 1 : r;
        },
        tH = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          );
        },
        tV = function (t) {
          return (t._end = tO(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
          ));
        },
        tG = function (t, e) {
          var r = t._dp;
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = tO(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))
              )),
              tV(t),
              r._dirty || tX(r, t)),
            t
          );
        },
        t$ = function (t, e) {
          var r;
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((r = tH(t.rawTime(), e)),
              (!e._dur || t7(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
                e.render(r, !0)),
            tX(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
            t._zTime = -1e-8;
          }
        },
        tQ = function (t, e, r, n) {
          return (
            e.parent && tN(e),
            (e._start = tO(
              (X(r) ? r : r || t !== T ? t6(t, r, e) : t._time) + e._delay
            )),
            (e._end = tO(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            tI(t, e, "_first", "_last", t._sort ? "_start" : 0),
            t0(e) || (t._recent = e),
            n || t$(t, e),
            t._ts < 0 && tG(t, t._tTime),
            t
          );
        },
        tZ = function (t, e) {
          return (
            (tr.ScrollTrigger || to("scrollTrigger", e)) &&
            tr.ScrollTrigger.create(e, t)
          );
        },
        tJ = function (t, e, r, n, i) {
          return (e0(t, e, i), t._initted)
            ? !r &&
              t._pt &&
              !x &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              E !== eM.frame
              ? (tp.push(t), (t._lazy = [i, n]), 1)
              : void 0
            : 1;
        },
        tK = function t(e) {
          var r = e.parent;
          return (
            r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
          );
        },
        t0 = function (t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e;
        },
        t1 = function (t, e, r, n) {
          var i,
            o,
            a,
            s = t.ratio,
            u =
              e < 0 ||
              (!e &&
                ((!t._start && tK(t) && !(!t._initted && t0(t))) ||
                  ((t._ts < 0 || t._dp._ts < 0) && !t0(t))))
                ? 0
                : 1,
            l = t._rDelay,
            c = 0;
          if (
            (l &&
              t._repeat &&
              ((o = tW((c = t7(0, t._tDur, e)), l)),
              t._yoyo && 1 & o && (u = 1 - u),
              o !== tW(t._tTime, l) &&
                ((s = 1 - u),
                t.vars.repeatRefresh && t._initted && t.invalidate())),
            u !== s || x || n || 1e-8 === t._zTime || (!e && t._zTime))
          ) {
            if (!t._initted && tJ(t, e, n, r, c)) return;
            for (
              a = t._zTime,
                t._zTime = e || 1e-8 * !!r,
                r || (r = e && !a),
                t.ratio = u,
                t._from && (u = 1 - u),
                t._time = 0,
                t._tTime = c,
                i = t._pt;
              i;

            )
              i.r(u, i.d), (i = i._next);
            e < 0 && tq(t, e, r, !0),
              t._onUpdate && !r && ed(t, "onUpdate"),
              c && t._repeat && !r && t.parent && ed(t, "onRepeat"),
              (e >= t._tDur || e < 0) &&
                t.ratio === u &&
                (u && tN(t, 1),
                r ||
                  x ||
                  (ed(t, u ? "onComplete" : "onReverseComplete", !0),
                  t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        },
        t2 = function (t, e, r) {
          var n;
          if (r > e)
            for (n = t._first; n && n._start <= r; ) {
              if ("isPause" === n.data && n._start > e) return n;
              n = n._next;
            }
          else
            for (n = t._last; n && n._start >= r; ) {
              if ("isPause" === n.data && n._start < e) return n;
              n = n._prev;
            }
        },
        t5 = function (t, e, r, n) {
          var i = t._repeat,
            o = tO(e) || 0,
            a = t._tTime / t._tDur;
          return (
            a && !n && (t._time *= o / t._dur),
            (t._dur = o),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : tO(o * (i + 1) + t._rDelay * i)
              : o),
            a > 0 && !n && tG(t, (t._tTime = t._tDur * a)),
            t.parent && tV(t),
            r || tX(t.parent, t),
            t
          );
        },
        t3 = function (t) {
          return t instanceof eq ? tX(t) : t5(t, t._dur);
        },
        t8 = { _start: 0, endTime: tu, totalDuration: tu },
        t6 = function t(e, r, n) {
          var i,
            o,
            a,
            s = e.labels,
            u = e._recent || t8,
            l = e.duration() >= 1e8 ? u.endTime(!1) : e._dur;
          return B(r) && (isNaN(r) || r in s)
            ? ((o = r.charAt(0)),
              (a = "%" === r.substr(-1)),
              (i = r.indexOf("=")),
              "<" === o || ">" === o)
              ? (i >= 0 && (r = r.replace(/=/, "")),
                ("<" === o ? u._start : u.endTime(u._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0) *
                    (a ? (i < 0 ? u : n).totalDuration() / 100 : 1))
              : i < 0
              ? (r in s || (s[r] = l), s[r])
              : ((o = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                a && n && (o = (o / 100) * (G(n) ? n[0] : n).totalDuration()),
                i > 1 ? t(e, r.substr(0, i - 1), n) + o : l + o)
            : null == r
            ? l
            : +r;
        },
        t4 = function (t, e, r) {
          var n,
            i,
            o = X(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[a];
          if ((o && (s.duration = e[1]), (s.parent = r), t)) {
            for (n = s, i = r; i && !("immediateRender" in n); )
              (n = i.vars.defaults || {}), (i = j(i.vars.inherit) && i.parent);
            (s.immediateRender = j(n.immediateRender)),
              t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1]);
          }
          return new e4(e[0], s, e[a + 1]);
        },
        t9 = function (t, e) {
          return t || 0 === t ? e(t) : e;
        },
        t7 = function (t, e, r) {
          return r < t ? t : r > e ? e : r;
        },
        et = function (t, e) {
          return B(t) && (e = te.exec(t)) ? e[1] : "";
        },
        ee = [].slice,
        er = function (t, e) {
          return (
            t &&
            q(t) &&
            "length" in t &&
            ((!e && !t.length) || (t.length - 1 in t && q(t[0]))) &&
            !t.nodeType &&
            t !== k
          );
        },
        en = function (t, e, r) {
          var n;
          return w && !e && w.selector
            ? w.selector(t)
            : B(t) && !r && (O || !eA())
            ? ee.call((e || M).querySelectorAll(t), 0)
            : G(t)
            ? (void 0 === n && (n = []),
              t.forEach(function (t) {
                var e;
                return (B(t) && !r) || er(t, 1)
                  ? (e = n).push.apply(e, en(t))
                  : n.push(t);
              }) || n)
            : er(t)
            ? ee.call(t, 0)
            : t
            ? [t]
            : [];
        },
        ei = function (t) {
          return (
            (t = en(t)[0] || ta("Invalid scope") || {}),
            function (e) {
              var r = t.current || t.nativeElement || t;
              return en(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? ta("Invalid scope") || M.createElement("div")
                  : t
              );
            }
          );
        },
        eo = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random();
          });
        },
        ea = function (t) {
          if (N(t)) return t;
          var e = q(t) ? t : { each: t },
            r = eL(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            a = n > 0 && n < 1,
            s = isNaN(n) || a,
            u = e.axis,
            l = n,
            c = n;
          return (
            B(n)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
              : !a && s && ((l = n[0]), (c = n[1])),
            function (t, a, f) {
              var h,
                p,
                d,
                g,
                m,
                _,
                v,
                y,
                b,
                x = (f || e).length,
                w = o[x];
              if (!w) {
                if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                  for (
                    v = -1e8;
                    v < (v = f[b++].getBoundingClientRect().left) && b < x;

                  );
                  b < x && b--;
                }
                for (
                  _ = 0,
                    w = o[x] = [],
                    h = s ? Math.min(b, x) * l - 0.5 : n % b,
                    p = 1e8 === b ? 0 : s ? (x * c) / b - 0.5 : (n / b) | 0,
                    v = 0,
                    y = 1e8;
                  _ < x;
                  _++
                )
                  (d = (_ % b) - h),
                    (g = p - ((_ / b) | 0)),
                    (w[_] = m =
                      u ? Math.abs("y" === u ? g : d) : L(d * d + g * g)),
                    m > v && (v = m),
                    m < y && (y = m);
                "random" === n && eo(w),
                  (w.max = v - y),
                  (w.min = y),
                  (w.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > x
                          ? x - 1
                          : u
                          ? "y" === u
                            ? x / b
                            : b
                          : Math.max(b, x / b)) ||
                      0) * ("edges" === n ? -1 : 1)),
                  (w.b = x < 0 ? i - x : i),
                  (w.u = et(e.amount || e.each) || 0),
                  (r = r && x < 0 ? eR(r) : r);
              }
              return (
                (x = (w[t] - w.min) / w.max || 0),
                tO(w.b + (r ? r(x) : x) * w.v) + w.u
              );
            }
          );
        },
        es = function (t) {
          var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
          return function (r) {
            var n = tO(Math.round(parseFloat(r) / t) * t * e);
            return (n - (n % 1)) / e + (X(r) ? 0 : et(r));
          };
        },
        eu = function (t, e) {
          var r,
            n,
            i = G(t);
          return (
            !i &&
              q(t) &&
              ((r = i = t.radius || 1e8),
              t.values
                ? (n = !X((t = en(t.values))[0])) && (r *= r)
                : (t = es(t.increment))),
            t9(
              e,
              i
                ? N(t)
                  ? function (e) {
                      return Math.abs((n = t(e)) - e) <= r ? n : e;
                    }
                  : function (e) {
                      for (
                        var i,
                          o,
                          a = parseFloat(n ? e.x : e),
                          s = parseFloat(n ? e.y : 0),
                          u = 1e8,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (i = n
                          ? (i = t[c].x - a) * i + (o = t[c].y - s) * o
                          : Math.abs(t[c] - a)) < u && ((u = i), (l = c));
                      return (
                        (l = !r || u <= r ? t[l] : e),
                        n || l === e || X(e) ? l : l + et(e)
                      );
                    }
                : es(t)
            )
          );
        },
        el = function (t, e, r, n) {
          return t9(G(t) ? !e : !0 === r ? ((r = 0), !1) : !n, function () {
            return G(t)
              ? t[~~(Math.random() * t.length)]
              : (n =
                  (r = r || 1e-5) < 1
                    ? Math.pow(10, (r + "").length - 2)
                    : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      n
                  ) / n;
          });
        },
        ec = function (t, e, r) {
          return t9(r, function (r) {
            return t[~~e(r)];
          });
        },
        ef = function (t) {
          for (var e, r, n, i, o = 0, a = ""; ~(e = t.indexOf("random(", o)); )
            (n = t.indexOf(")", e)),
              (i = "[" === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? tt : $)),
              (a +=
                t.substr(o, e - o) +
                el(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
              (o = n + 1);
          return a + t.substr(o, t.length - o);
        },
        eh = function (t, e, r, n, i) {
          var o = e - t,
            a = n - r;
          return t9(i, function (e) {
            return r + (((e - t) / o) * a || 0);
          });
        },
        ep = function (t, e, r) {
          var n,
            i,
            o,
            a = t.labels,
            s = 1e8;
          for (n in a)
            (i = a[n] - e) < 0 == !!r &&
              i &&
              s > (i = Math.abs(i)) &&
              ((o = n), (s = i));
          return o;
        },
        ed = function (t, e, r) {
          var n,
            i,
            o,
            a = t.vars,
            s = a[e],
            u = w,
            l = t._ctx;
          if (s)
            return (
              (n = a[e + "Params"]),
              (i = a.callbackScope || t),
              r && tp.length && tE(),
              l && (w = l),
              (o = n ? s.apply(i, n) : s.call(i)),
              (w = u),
              o
            );
        },
        eg = function (t) {
          return (
            tN(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!x),
            1 > t.progress() && ed(t, "onInterrupt"),
            t
          );
        },
        em = [],
        e_ = function (t) {
          if (t) {
            if (((t = (!t.name && t.default) || t), W() || t.headless)) {
              var e = t.name,
                r = N(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                i = {
                  init: tu,
                  render: ra,
                  add: eZ,
                  kill: ru,
                  modifier: rs,
                  rawVars: 0,
                },
                o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: rr,
                  aliases: {},
                  register: 0,
                };
              if ((eA(), t !== n)) {
                if (tg[e]) return;
                tD(n, tD(tF(t, i), o)),
                  tz(n.prototype, tz(i, tF(t, o))),
                  (tg[(n.prop = e)] = n),
                  t.targetTest && (tv.push(n), (th[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              ts(e, n), t.register && t.register(rO, n, rf);
            } else em.push(t);
          }
        },
        ev = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        ey = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              255 +
              0.5) |
            0
          );
        },
        eb = function (t, e, r) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            p = t ? (X(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : ev.black;
          if (!p) {
            if (
              ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ev[t])
            )
              p = ev[t];
            else if ("#" === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((n = t.charAt(1)),
                  (t =
                    "#" +
                    n +
                    n +
                    (i = t.charAt(2)) +
                    i +
                    (o = t.charAt(3)) +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & 255,
                  255 & p,
                  parseInt(t.substr(7), 16) / 255,
                ];
              p = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & 255,
                255 & t,
              ];
            } else if ("hsl" === t.substr(0, 3)) {
              if (((p = h = t.match($)), e)) {
                if (~t.indexOf("="))
                  return (p = t.match(Q)), r && p.length < 4 && (p[3] = 1), p;
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (i = (u = +p[2] / 100) <= 0.5 ? u * (s + 1) : u + s - u * s),
                  (n = 2 * u - i),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = ey(a + 1 / 3, n, i)),
                  (p[1] = ey(a, n, i)),
                  (p[2] = ey(a - 1 / 3, n, i));
            } else p = t.match($) || ev.transparent;
            p = p.map(Number);
          }
          return (
            e &&
              !h &&
              ((n = p[0] / 255),
              (u =
                ((l = Math.max(n, (i = p[1] / 255), (o = p[2] / 255))) +
                  (c = Math.min(n, i, o))) /
                2),
              l === c
                ? (a = s = 0)
                : ((f = l - c),
                  (s = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
                  (a =
                    (l === n
                      ? (i - o) / f + 6 * (i < o)
                      : l === i
                      ? (o - n) / f + 2
                      : (n - i) / f + 4) * 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            r && p.length < 4 && (p[3] = 1),
            p
          );
        },
        ex = function (t) {
          var e = [],
            r = [],
            n = -1;
          return (
            t.split(eT).forEach(function (t) {
              var i = t.match(Z) || [];
              e.push.apply(e, i), r.push((n += i.length + 1));
            }),
            (e.c = r),
            e
          );
        },
        ew = function (t, e, r) {
          var n,
            i,
            o,
            a,
            s = "",
            u = (t + s).match(eT),
            l = e ? "hsla(" : "rgba(",
            c = 0;
          if (!u) return t;
          if (
            ((u = u.map(function (t) {
              return (
                (t = eb(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                    : t.join(",")) +
                  ")"
              );
            })),
            r && ((o = ex(t)), (n = r.c).join(s) !== o.c.join(s)))
          )
            for (a = (i = t.replace(eT, "1").split(Z)).length - 1; c < a; c++)
              s +=
                i[c] +
                (~n.indexOf(c)
                  ? u.shift() || l + "0,0,0,0)"
                  : (o.length ? o : u.length ? u : r).shift());
          if (!i)
            for (a = (i = t.split(eT)).length - 1; c < a; c++) s += i[c] + u[c];
          return s + i[a];
        },
        eT = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in ev) e += "|" + t + "\\b";
          return RegExp(e + ")", "gi");
        })(),
        ek = /hsl[a]?\(/,
        eO = function (t) {
          var e,
            r = t.join(" ");
          if (((eT.lastIndex = 0), eT.test(r)))
            return (
              (e = ek.test(r)),
              (t[1] = ew(t[1], e)),
              (t[0] = ew(t[0], e, ex(t[1]))),
              !0
            );
        },
        eM =
          ((f = Date.now),
          (h = 500),
          (p = 33),
          (g = d = f()),
          (m = 1e3 / 240),
          (_ = 1e3 / 240),
          (v = []),
          (y = function t(e) {
            var r,
              n,
              i,
              s,
              y = f() - g,
              b = !0 === e;
            if (
              ((y > h || y < 0) && (d += y - p),
              (g += y),
              ((r = (i = g - d) - _) > 0 || b) &&
                ((s = ++u.frame),
                (l = i - 1e3 * u.time),
                (u.time = i /= 1e3),
                (_ += r + (r >= m ? 4 : m - r)),
                (n = 1)),
              b || (o = a(t)),
              n)
            )
              for (c = 0; c < v.length; c++) v[c](i, l, s, e);
          }),
          (u = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0);
            },
            deltaRatio: function (t) {
              return l / (1e3 / (t || 60));
            },
            wake: function () {
              A &&
                (!O &&
                  W() &&
                  ((M = (k = O = window).document || {}),
                  (tr.gsap = rO),
                  (k.gsapVersions || (k.gsapVersions = [])).push(rO.version),
                  ti(tn || k.GreenSockGlobals || (!k.gsap && k) || {}),
                  em.forEach(e_)),
                (s =
                  "undefined" != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                o && u.sleep(),
                (a =
                  s ||
                  function (t) {
                    return setTimeout(t, (_ - 1e3 * u.time + 1) | 0);
                  }),
                (S = 1),
                y(2));
            },
            sleep: function () {
              (s ? cancelAnimationFrame : clearTimeout)(o), (S = 0), (a = tu);
            },
            lagSmoothing: function (t, e) {
              p = Math.min(e || 33, (h = t || 1 / 0));
            },
            fps: function (t) {
              (m = 1e3 / (t || 240)), (_ = 1e3 * u.time + m);
            },
            add: function (t, e, r) {
              var n = e
                ? function (e, r, i, o) {
                    t(e, r, i, o), u.remove(n);
                  }
                : t;
              return u.remove(t), v[r ? "unshift" : "push"](n), eA(), n;
            },
            remove: function (t, e) {
              ~(e = v.indexOf(t)) && v.splice(e, 1) && c >= e && c--;
            },
            _listeners: v,
          })),
        eA = function () {
          return !S && eM.wake();
        },
        eE = {},
        eC = /^[\d.\-M][\d.\-,\s]/,
        eS = /["']/g,
        eP = function (t) {
          for (
            var e,
              r,
              n,
              i = {},
              o = t.substr(1, t.length - 3).split(":"),
              a = o[0],
              s = 1,
              u = o.length;
            s < u;
            s++
          )
            (r = o[s]),
              (e = s !== u - 1 ? r.lastIndexOf(",") : r.length),
              (n = r.substr(0, e)),
              (i[a] = isNaN(n) ? n.replace(eS, "").trim() : +n),
              (a = r.substr(e + 1).trim());
          return i;
        },
        eD = function (t) {
          var e = t.indexOf("(") + 1,
            r = t.indexOf(")"),
            n = t.indexOf("(", e);
          return t.substring(e, ~n && n < r ? t.indexOf(")", r + 1) : r);
        },
        ez = function (t) {
          var e = (t + "").split("("),
            r = eE[e[0]];
          return r && e.length > 1 && r.config
            ? r.config.apply(
                null,
                ~t.indexOf("{") ? [eP(e[1])] : eD(t).split(",").map(tS)
              )
            : eE._CE && eC.test(t)
            ? eE._CE("", t)
            : r;
        },
        eR = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        eF = function t(e, r) {
          for (var n, i = e._first; i; )
            i instanceof eq
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline
                  ? t(i.timeline, r)
                  : ((n = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = n),
                    (i._yoyo = r))),
              (i = i._next);
        },
        eL = function (t, e) {
          return (t && (N(t) ? t : eE[t] || ez(t))) || e;
        },
        eY = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t);
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
              });
          var i,
            o = { easeIn: e, easeOut: r, easeInOut: n };
          return (
            tT(t, function (t) {
              for (var e in ((eE[t] = tr[t] = o),
              (eE[(i = t.toLowerCase())] = r),
              o))
                eE[
                  i +
                    ("easeIn" === e
                      ? ".in"
                      : "easeOut" === e
                      ? ".out"
                      : ".inOut")
                ] = eE[t + "." + e] = o[e];
            }),
            o
          );
        },
        eI = function (t) {
          return function (e) {
            return e < 0.5
              ? (1 - t(1 - 2 * e)) / 2
              : 0.5 + t((e - 0.5) * 2) / 2;
          };
        },
        eB = function t(e, r, n) {
          var i = r >= 1 ? r : 1,
            o = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            a = (o / z) * (Math.asin(1 / i) || 0),
            s = function (t) {
              return 1 === t
                ? 1
                : i * Math.pow(2, -10 * t) * I((t - a) * o) + 1;
            },
            u =
              "out" === e
                ? s
                : "in" === e
                ? function (t) {
                    return 1 - s(1 - t);
                  }
                : eI(s);
          return (
            (o = z / o),
            (u.config = function (r, n) {
              return t(e, r, n);
            }),
            u
          );
        },
        eN = function t(e, r) {
          void 0 === r && (r = 1.70158);
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
            },
            i =
              "out" === e
                ? n
                : "in" === e
                ? function (t) {
                    return 1 - n(1 - t);
                  }
                : eI(n);
          return (
            (i.config = function (r) {
              return t(e, r);
            }),
            i
          );
        };
      tT("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        eY(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow((1 - t) * 2, r) / 2;
          }
        );
      }),
        (eE.Linear.easeNone = eE.none = eE.Linear.easeIn),
        eY("Elastic", eB("in"), eB("out"), eB()),
        (eW = 2 * (ej = 1 / 2.75)),
        (eH = 2.5 * ej),
        eY(
          "Bounce",
          function (t) {
            return 1 - eV(1 - t);
          },
          (eV = function (t) {
            return t < ej
              ? 7.5625 * t * t
              : t < eW
              ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
              : t < eH
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
          })
        ),
        eY("Expo", function (t) {
          return (
            Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
          );
        }),
        eY("Circ", function (t) {
          return -(L(1 - t * t) - 1);
        }),
        eY("Sine", function (t) {
          return 1 === t ? 1 : -Y(t * R) + 1;
        }),
        eY("Back", eN("in"), eN("out"), eN()),
        (eE.SteppedEase =
          eE.steps =
          tr.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  n = t + +!e,
                  i = +!!e,
                  o = 0.99999999;
                return function (t) {
                  return (((n * t7(0, o, t)) | 0) + i) * r;
                };
              },
            }),
        (D.ease = eE["quad.out"]),
        tT(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ty += t + "," + t + "Params,");
          }
        );
      var eX = function (t, e) {
          (this.id = F++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : tw),
            (this.set = e ? e.getSetter : rr);
        },
        eU = (function () {
          function t(t) {
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              t5(this, +t.duration, 1, 1),
              (this.data = t.data),
              w && ((this._ctx = w), w.data.push(this)),
              S || eM.wake();
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  t5(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur;
            }),
            (e.totalTime = function (t, e) {
              if ((eA(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  tG(this, t), !r._dp || r.parent || t$(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : -((r.totalDuration() - r._tTime) / r._ts)) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  tQ(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime === t &&
                  (this._dur || e) &&
                  (!this._initted || 1e-8 !== Math.abs(this._zTime)) &&
                  (t || this._initted || (!this.add && !this._ptLookup))) ||
                  (this._ts || (this._pTime = t), tC(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + tj(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                ? 1
                : 0;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                      tj(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : +(this.rawTime() > 0);
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? tW(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
              if (this._rts === t) return this;
              var r =
                this.parent && this._ts
                  ? tH(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  t7(-Math.abs(this._delay), this._tDur, r),
                  !1 !== e
                ),
                tV(this),
                tU(this)
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (eA(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            1e-8 !== Math.abs(this._zTime) &&
                            (this._tTime -= 1e-8)
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    tQ(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (j(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && 1 > this.totalProgress()))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? tH(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.revert = function (t) {
              void 0 === t && (t = tf);
              var e = x;
              return (
                (x = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                (x = e),
                this
              );
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp);
              return !this.parent && this._sat ? this._sat.globalTime(t) : r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), t3(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time;
                return (this._rDelay = t), t3(this), e ? this.time(e) : this;
              }
              return this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(t6(this, t), j(e));
            }),
            (e.restart = function (t, e) {
              return (
                this.play().totalTime(t ? -this._delay : 0, j(e)),
                this._dur || (this._zTime = -1e-8),
                this
              );
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              );
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !!(
                !e ||
                (this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - 1e-8)
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      r && (n[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var n = N(t) ? t : tP,
                  i = function () {
                    var t = e.then;
                    (e.then = null),
                      N(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      r(n),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i);
              });
            }),
            (e.kill = function () {
              eg(this);
            }),
            t
          );
        })();
      tD(eU.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var eq = (function (t) {
        function e(e, r) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = j(e.sortChildren)),
            T && tQ(e.parent || T, n(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && tZ(n(i), e.scrollTrigger),
            i
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.to = function (t, e, r) {
            return t4(0, arguments, this), this;
          }),
          (r.from = function (t, e, r) {
            return t4(1, arguments, this), this;
          }),
          (r.fromTo = function (t, e, r, n) {
            return t4(2, arguments, this), this;
          }),
          (r.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              tL(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new e4(t, e, t6(this, r), 1),
              this
            );
          }),
          (r.call = function (t, e, r) {
            return tQ(this, e4.delayedCall(0, t, e), r);
          }),
          (r.staggerTo = function (t, e, r, n, i, o, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = o),
              (r.onCompleteParams = a),
              (r.parent = this),
              new e4(t, r, t6(this, i)),
              this
            );
          }),
          (r.staggerFrom = function (t, e, r, n, i, o, a) {
            return (
              (r.runBackwards = 1),
              (tL(r).immediateRender = j(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, o, a)
            );
          }),
          (r.staggerFromTo = function (t, e, r, n, i, o, a, s) {
            return (
              (n.startAt = r),
              (tL(n).immediateRender = j(n.immediateRender)),
              this.staggerTo(t, e, n, i, o, a, s)
            );
          }),
          (r.render = function (t, e, r) {
            var n,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              h,
              p,
              d,
              g = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              _ = this._dur,
              v = t <= 0 ? 0 : tO(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !_);
            if (
              (this !== T && v > m && t >= 0 && (v = m),
              v !== this._tTime || r || y)
            ) {
              if (
                (g !== this._time &&
                  _ &&
                  ((v += this._time - g), (t += this._time - g)),
                (n = v),
                (f = this._start),
                (u = !(c = this._ts)),
                y && (_ || (g = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((p = this._yoyo),
                  (s = _ + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * s + t, e, r);
                if (
                  ((n = tO(v % s)),
                  v === m
                    ? ((a = this._repeat), (n = _))
                    : ((a = ~~(h = tO(v / s))) && a === h && ((n = _), a--),
                      n > _ && (n = _)),
                  (h = tW(this._tTime, s)),
                  !g &&
                    this._tTime &&
                    h !== a &&
                    this._tTime - h * s - this._dur <= 0 &&
                    (h = a),
                  p && 1 & a && ((n = _ - n), (d = 1)),
                  a !== h && !this._lock)
                ) {
                  var b = p && 1 & h,
                    w = b === (p && 1 & a);
                  if (
                    (a < h && (b = !b),
                    (g = b ? 0 : v % _ ? _ : v),
                    (this._lock = 1),
                    (this.render(g || (d ? 0 : tO(a * s)), e, !_)._lock = 0),
                    (this._tTime = v),
                    !e && this.parent && ed(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !d &&
                      (this.invalidate()._lock = 1),
                    (g && g !== this._time) ||
                      !this._ts !== u ||
                      (this.vars.onRepeat && !this.parent && !this._act) ||
                      ((_ = this._dur),
                      (m = this._tDur),
                      w &&
                        ((this._lock = 2),
                        (g = b ? _ : -1e-4),
                        this.render(g, !0),
                        this.vars.repeatRefresh && !d && this.invalidate()),
                      (this._lock = 0),
                      !this._ts && !u))
                  )
                    return this;
                  eF(this, d);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (l = t2(this, tO(g), tO(n))) &&
                  (v -= n - (n = l._start)),
                (this._tTime = v),
                (this._time = n),
                (this._act = !c),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (g = 0)),
                !g && n && !e && !a && (ed(this, "onStart"), this._tTime !== v))
              )
                return this;
              if (n >= g && t >= 0)
                for (i = this._first; i; ) {
                  if (
                    ((o = i._next),
                    (i._act || n >= i._start) && i._ts && l !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !u))
                    ) {
                      (l = 0), o && (v += this._zTime = -1e-8);
                      break;
                    }
                  }
                  i = o;
                }
              else {
                i = this._last;
                for (var k = t < 0 ? t : n; i; ) {
                  if (
                    ((o = i._prev), (i._act || k <= i._end) && i._ts && l !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        i._ts > 0
                          ? (k - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (k - i._start) * i._ts,
                        e,
                        r || (x && (i._initted || i._startAt))
                      ),
                      n !== this._time || (!this._ts && !u))
                    ) {
                      (l = 0), o && (v += this._zTime = k ? -1e-8 : 1e-8);
                      break;
                    }
                  }
                  i = o;
                }
              }
              if (
                l &&
                !e &&
                (this.pause(),
                (l.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1),
                this._ts)
              )
                return (this._start = f), tV(this), this.render(t, e, r);
              this._onUpdate && !e && ed(this, "onUpdate", !0),
                ((v === m && this._tTime >= this.totalDuration()) ||
                  (!v && g)) &&
                  (f === this._start || Math.abs(c) !== Math.abs(this._ts)) &&
                  !this._lock &&
                  ((t || !_) &&
                    ((v === m && this._ts > 0) || (!v && this._ts < 0)) &&
                    tN(this, 1),
                  e ||
                    (t < 0 && !g) ||
                    (!v && !g && m) ||
                    (ed(
                      this,
                      v === m && t >= 0 ? "onComplete" : "onReverseComplete",
                      !0
                    ),
                    this._prom &&
                      !(v < m && this.timeScale() > 0) &&
                      this._prom()));
            }
            return this;
          }),
          (r.add = function (t, e) {
            var r = this;
            if ((X(e) || (e = t6(this, e, t)), !(t instanceof eU))) {
              if (G(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  this
                );
              if (B(t)) return this.addLabel(t, e);
              if (!N(t)) return this;
              t = e4.delayedCall(0, t);
            }
            return this !== t ? tQ(this, t, e) : this;
          }),
          (r.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -1e8);
            for (var i = [], o = this._first; o; )
              o._start >= n &&
                (o instanceof e4
                  ? e && i.push(o)
                  : (r && i.push(o),
                    t && i.push.apply(i, o.getChildren(!0, e, r)))),
                (o = o._next);
            return i;
          }),
          (r.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (r.remove = function (t) {
            return B(t)
              ? this.removeLabel(t)
              : N(t)
              ? this.killTweensOf(t)
              : (t.parent === this && tB(this, t),
                t === this._recent && (this._recent = this._last),
                tX(this));
          }),
          (r.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = tO(
                    eM.time -
                      (this._ts > 0
                        ? e / this._ts
                        : -((this.totalDuration() - e) / this._ts))
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (r.addLabel = function (t, e) {
            return (this.labels[t] = t6(this, e)), this;
          }),
          (r.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (r.addPause = function (t, e, r) {
            var n = e4.delayedCall(0, e || tu, r);
            return (
              (n.data = "isPause"),
              (this._hasPause = 1),
              tQ(this, n, t6(this, t))
            );
          }),
          (r.removePause = function (t) {
            var e = this._first;
            for (t = t6(this, t); e; )
              e._start === t && "isPause" === e.data && tN(e), (e = e._next);
          }),
          (r.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              eG !== n[i] && n[i].kill(t, e);
            return this;
          }),
          (r.getTweensOf = function (t, e) {
            for (var r, n = [], i = en(t), o = this._first, a = X(e); o; )
              o instanceof e4
                ? tA(o._targets, i) &&
                  (a
                    ? (!eG || (o._initted && o._ts)) &&
                      o.globalTime(0) <= e &&
                      o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  n.push(o)
                : (r = o.getTweensOf(i, e)).length && n.push.apply(n, r),
                (o = o._next);
            return n;
          }),
          (r.tweenTo = function (t, e) {
            e = e || {};
            var r,
              n = this,
              i = t6(n, t),
              o = e,
              a = o.startAt,
              s = o.onStart,
              u = o.onStartParams,
              l = o.immediateRender,
              c = e4.to(
                n,
                tD(
                  {
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (a && "time" in a ? a.time : n._time)) /
                          n.timeScale()
                      ) ||
                      1e-8,
                    onStart: function () {
                      if ((n.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (a && "time" in a ? a.time : n._time)) /
                              n.timeScale()
                          );
                        c._dur !== t && t5(c, t, 0, 1).render(c._time, !0, !0),
                          (r = 1);
                      }
                      s && s.apply(c, u || []);
                    },
                  },
                  e
                )
              );
            return l ? c.render(0) : c;
          }),
          (r.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, tD({ startAt: { time: t6(this, t) } }, r));
          }),
          (r.recent = function () {
            return this._recent;
          }),
          (r.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ep(this, t6(this, t));
          }),
          (r.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ep(this, t6(this, t), 1);
          }),
          (r.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + 1e-8);
          }),
          (r.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, o = this.labels; i; )
              i._start >= r && ((i._start += t), (i._end += t)), (i = i._next);
            if (e) for (n in o) o[n] >= r && (o[n] += t);
            return tX(this);
          }),
          (r.invalidate = function (e) {
            var r = this._first;
            for (this._lock = 0; r; ) r.invalidate(e), (r = r._next);
            return t.prototype.invalidate.call(this, e);
          }),
          (r.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              tX(this)
            );
          }),
          (r.totalDuration = function (t) {
            var e,
              r,
              n,
              i = 0,
              o = this._last,
              a = 1e8;
            if (arguments.length)
              return this.timeScale(
                (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                  (this.reversed() ? -t : t)
              );
            if (this._dirty) {
              for (n = this.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  (r = o._start) > a && this._sort && o._ts && !this._lock
                    ? ((this._lock = 1),
                      (tQ(this, o, r - o._delay, 1)._lock = 0))
                    : (a = r),
                  r < 0 &&
                    o._ts &&
                    ((i -= r),
                    ((!n && !this._dp) || (n && n.smoothChildTiming)) &&
                      ((this._start += r / this._ts),
                      (this._time -= r),
                      (this._tTime -= r)),
                    this.shiftChildren(-r, !1, -1 / 0),
                    (a = 0)),
                  o._end > i && o._ts && (i = o._end),
                  (o = e);
              t5(this, this === T && this._time > i ? this._time : i, 1, 1),
                (this._dirty = 0);
            }
            return this._tDur;
          }),
          (e.updateRoot = function (t) {
            if ((T._ts && (tC(T, tH(t, T)), (E = eM.frame)), eM.frame >= t_)) {
              t_ += P.autoSleep || 120;
              var e = T._first;
              if ((!e || !e._ts) && P.autoSleep && eM._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || eM.sleep();
              }
            }
          }),
          e
        );
      })(eU);
      tD(eq.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var ej,
        eW,
        eH,
        eV,
        eG,
        e$,
        eQ = function (t, e, r, n, i, o, a) {
          var s,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g = new rf(this._pt, t, e, 0, 1, ro, null, i),
            m = 0,
            _ = 0;
          for (
            g.b = r,
              g.e = n,
              r += "",
              n += "",
              (p = ~n.indexOf("random(")) && (n = ef(n)),
              o && (o((d = [r, n]), t, e), (r = d[0]), (n = d[1])),
              u = r.match(J) || [];
            (s = J.exec(n));

          )
            (c = s[0]),
              (f = n.substring(m, s.index)),
              l ? (l = (l + 1) % 5) : "rgba(" === f.substr(-5) && (l = 1),
              c !== u[_++] &&
                ((h = parseFloat(u[_ - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: f || 1 === _ ? f : ",",
                  s: h,
                  c: "=" === c.charAt(1) ? tM(h, c) - h : parseFloat(c) - h,
                  m: l && l < 4 ? Math.round : 0,
                }),
                (m = J.lastIndex));
          return (
            (g.c = m < n.length ? n.substring(m, n.length) : ""),
            (g.fp = a),
            (K.test(n) || p) && (g.e = 0),
            (this._pt = g),
            g
          );
        },
        eZ = function (t, e, r, n, i, o, a, s, u, l) {
          N(n) && (n = n(i || 0, t, o));
          var c,
            f = t[e],
            h =
              "get" !== r
                ? r
                : N(f)
                ? u
                  ? t[
                      e.indexOf("set") || !N(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](u)
                  : t[e]()
                : f,
            p = N(f) ? (u ? rt : e7) : e9;
          if (
            (B(n) &&
              (~n.indexOf("random(") && (n = ef(n)),
              "=" === n.charAt(1) &&
                ((c = tM(h, n) + (et(h) || 0)) || 0 === c) &&
                (n = c)),
            !l || h !== n || e$)
          )
            return isNaN(h * n) || "" === n
              ? (f || e in t || to(e, n),
                eQ.call(this, t, e, h, n, p, s || P.stringFilter, u))
              : ((c = new rf(
                  this._pt,
                  t,
                  e,
                  +h || 0,
                  n - (h || 0),
                  "boolean" == typeof f ? ri : rn,
                  0,
                  p
                )),
                u && (c.fp = u),
                a && c.modifier(a, this, t),
                (this._pt = c));
        },
        eJ = function (t, e, r, n, i) {
          if (
            (N(t) && (t = e3(t, i, e, r, n)),
            !q(t) || (t.style && t.nodeType) || G(t) || V(t))
          )
            return B(t) ? e3(t, i, e, r, n) : t;
          var o,
            a = {};
          for (o in t) a[o] = e3(t[o], i, e, r, n);
          return a;
        },
        eK = function (t, e, r, n, i, o) {
          var a, s, u, l;
          if (
            tg[t] &&
            !1 !==
              (a = new tg[t]()).init(
                i,
                a.rawVars ? e[t] : eJ(e[t], n, i, o, r),
                r,
                n,
                o
              ) &&
            ((r._pt = s =
              new rf(r._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
            r !== C)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(i)], l = a._props.length;
              l--;

            )
              u[a._props[l]] = s;
          return a;
        },
        e0 = function t(e, r, n) {
          var i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g,
            m,
            _ = e.vars,
            v = _.ease,
            y = _.startAt,
            w = _.immediateRender,
            k = _.lazy,
            O = _.onUpdate,
            M = _.runBackwards,
            A = _.yoyoEase,
            E = _.keyframes,
            C = _.autoRevert,
            S = e._dur,
            P = e._startAt,
            z = e._targets,
            R = e.parent,
            F = R && "nested" === R.data ? R.vars.targets : z,
            L = "auto" === e._overwrite && !b,
            Y = e.timeline;
          if (
            (!Y || (E && v) || (v = "none"),
            (e._ease = eL(v, D.ease)),
            (e._yEase = A ? eR(eL(!0 === A ? v : A, D.ease)) : 0),
            A &&
              e._yoyo &&
              !e._repeat &&
              ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
            (e._from = !Y && !!_.runBackwards),
            !Y || (E && !_.stagger))
          ) {
            if (
              ((g = (f = z[0] ? tx(z[0]).harness : 0) && _[f.prop]),
              (i = tF(_, th)),
              P &&
                (P._zTime < 0 && P.progress(1),
                r < 0 && M && w && !C
                  ? P.render(-1, !0)
                  : P.revert(M && S ? tc : tl),
                (P._lazy = 0)),
              y)
            ) {
              if (
                (tN(
                  (e._startAt = e4.set(
                    z,
                    tD(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: R,
                        immediateRender: !0,
                        lazy: !P && j(k),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          O &&
                          function () {
                            return ed(e, "onUpdate");
                          },
                        stagger: 0,
                      },
                      y
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (x || (!w && !C)) && e._startAt.revert(tc),
                w && S && r <= 0 && n <= 0)
              ) {
                r && (e._zTime = r);
                return;
              }
            } else if (M && S && !P) {
              if (
                (r && (w = !1),
                (a = tD(
                  {
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: w && !P && j(k),
                    immediateRender: w,
                    stagger: 0,
                    parent: R,
                  },
                  i
                )),
                g && (a[f.prop] = g),
                tN((e._startAt = e4.set(z, a))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 &&
                  (x ? e._startAt.revert(tc) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                w)
              ) {
                if (!r) return;
              } else t(e._startAt, 1e-8, 1e-8);
            }
            for (
              o = 0, e._pt = e._ptCache = 0, k = (S && j(k)) || (k && !S);
              o < z.length;
              o++
            ) {
              if (
                ((c = (u = z[o])._gsap || tb(z)[o]._gsap),
                (e._ptLookup[o] = p = {}),
                td[c.id] && tp.length && tE(),
                (d = F === z ? o : F.indexOf(u)),
                f &&
                  !1 !== (h = new f()).init(u, g || i, e, d, F) &&
                  ((e._pt = s =
                    new rf(e._pt, u, h.name, 0, 1, h.render, h, 0, h.priority)),
                  h._props.forEach(function (t) {
                    p[t] = s;
                  }),
                  h.priority && (l = 1)),
                !f || g)
              )
                for (a in i)
                  tg[a] && (h = eK(a, i, e, d, u, F))
                    ? h.priority && (l = 1)
                    : (p[a] = s =
                        eZ.call(e, u, a, "get", i[a], d, F, 0, _.stringFilter));
              e._op && e._op[o] && e.kill(u, e._op[o]),
                L &&
                  e._pt &&
                  ((eG = e),
                  T.killTweensOf(u, p, e.globalTime(r)),
                  (m = !e.parent),
                  (eG = 0)),
                e._pt && k && (td[c.id] = 1);
            }
            l && rc(e), e._onInit && e._onInit(e);
          }
          (e._onUpdate = O),
            (e._initted = (!e._op || e._pt) && !m),
            E && r <= 0 && Y.render(1e8, !0, !0);
        },
        e1 = function (t, e, r, n, i, o, a, s) {
          var u,
            l,
            c,
            f,
            h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
          if (!h)
            for (
              h = t._ptCache[e] = [], c = t._ptLookup, f = t._targets.length;
              f--;

            ) {
              if ((u = c[f][e]) && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== e && u.fp !== e; ) u = u._next;
              if (!u)
                return (
                  (e$ = 1),
                  (t.vars[e] = "+=0"),
                  e0(t, a),
                  (e$ = 0),
                  s ? ta(e + " not eligible for reset") : 1
                );
              h.push(u);
            }
          for (f = h.length; f--; )
            ((u = (l = h[f])._pt || l).s =
              (n || 0 === n) && !i ? n : u.s + (n || 0) + o * u.c),
              (u.c = r - u.s),
              l.e && (l.e = tk(r) + et(l.e)),
              l.b && (l.b = u.s + et(l.b));
        },
        e2 = function (t, e) {
          var r,
            n,
            i,
            o,
            a = t[0] ? tx(t[0]).harness : 0,
            s = a && a.aliases;
          if (!s) return e;
          for (n in ((r = tz({}, e)), s))
            if (n in r)
              for (i = (o = s[n].split(",")).length; i--; ) r[o[i]] = r[n];
          return r;
        },
        e5 = function (t, e, r, n) {
          var i,
            o,
            a = e.ease || n || "power1.inOut";
          if (G(e))
            (o = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return o.push({ t: (r / (e.length - 1)) * 100, v: t, e: a });
              });
          else
            for (i in e)
              (o = r[i] || (r[i] = [])),
                "ease" === i || o.push({ t: parseFloat(t), v: e[i], e: a });
        },
        e3 = function (t, e, r, n, i) {
          return N(t)
            ? t.call(e, r, n, i)
            : B(t) && ~t.indexOf("random(")
            ? ef(t)
            : t;
        },
        e8 = ty + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        e6 = {};
      tT(e8 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
        return (e6[t] = 1);
      });
      var e4 = (function (t) {
        function e(e, r, i, o) {
          "number" == typeof r && ((i.duration = r), (r = i), (i = null));
          var a,
            s,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g = (a = t.call(this, o ? r : tL(r)) || this).vars,
            m = g.duration,
            _ = g.delay,
            v = g.immediateRender,
            y = g.stagger,
            x = g.overwrite,
            w = g.keyframes,
            k = g.defaults,
            O = g.scrollTrigger,
            M = g.yoyoEase,
            A = r.parent || T,
            E = (G(e) || V(e) ? X(e[0]) : "length" in r) ? [e] : en(e);
          if (
            ((a._targets = E.length
              ? tb(E)
              : ta(
                  "GSAP target " + e + " not found. https://gsap.com",
                  !P.nullTargetWarn
                ) || []),
            (a._ptLookup = []),
            (a._overwrite = x),
            w || y || H(m) || H(_))
          ) {
            if (
              ((r = a.vars),
              (s = a.timeline =
                new eq({
                  data: "nested",
                  defaults: k || {},
                  targets: A && "nested" === A.data ? A.vars.targets : E,
                })).kill(),
              (s.parent = s._dp = n(a)),
              (s._start = 0),
              y || H(m) || H(_))
            ) {
              if (((c = E.length), (p = y && ea(y)), q(y)))
                for (f in y) ~e8.indexOf(f) && (d || (d = {}), (d[f] = y[f]));
              for (u = 0; u < c; u++)
                ((l = tF(r, e6)).stagger = 0),
                  M && (l.yoyoEase = M),
                  d && tz(l, d),
                  (h = E[u]),
                  (l.duration = +e3(m, n(a), u, h, E)),
                  (l.delay = (+e3(_, n(a), u, h, E) || 0) - a._delay),
                  !y &&
                    1 === c &&
                    l.delay &&
                    ((a._delay = _ = l.delay), (a._start += _), (l.delay = 0)),
                  s.to(h, l, p ? p(u, h, E) : 0),
                  (s._ease = eE.none);
              s.duration() ? (m = _ = 0) : (a.timeline = 0);
            } else if (w) {
              tL(tD(s.vars.defaults, { ease: "none" })),
                (s._ease = eL(w.ease || r.ease || "none"));
              var C,
                S,
                D,
                z = 0;
              if (G(w))
                w.forEach(function (t) {
                  return s.to(E, t, ">");
                }),
                  s.duration();
              else {
                for (f in ((l = {}), w))
                  "ease" === f ||
                    "easeEach" === f ||
                    e5(f, w[f], l, w.easeEach);
                for (f in l)
                  for (
                    u = 0,
                      C = l[f].sort(function (t, e) {
                        return t.t - e.t;
                      }),
                      z = 0;
                    u < C.length;
                    u++
                  )
                    ((D = {
                      ease: (S = C[u]).e,
                      duration: ((S.t - (u ? C[u - 1].t : 0)) / 100) * m,
                    })[f] = S.v),
                      s.to(E, D, z),
                      (z += D.duration);
                s.duration() < m && s.to({}, { duration: m - s.duration() });
              }
            }
            m || a.duration((m = s.duration()));
          } else a.timeline = 0;
          return (
            !0 !== x || b || ((eG = n(a)), T.killTweensOf(E), (eG = 0)),
            tQ(A, n(a), i),
            r.reversed && a.reverse(),
            r.paused && a.paused(!0),
            (v ||
              (!m &&
                !w &&
                a._start === tO(A._time) &&
                j(v) &&
                (function t(e) {
                  return !e || (e._ts && t(e.parent));
                })(n(a)) &&
                "nested" !== A.data)) &&
              ((a._tTime = -1e-8), a.render(Math.max(0, -_) || 0)),
            O && tZ(n(a), O),
            a
          );
        }
        i(e, t);
        var r = e.prototype;
        return (
          (r.render = function (t, e, r) {
            var n,
              i,
              o,
              a,
              s,
              u,
              l,
              c,
              f,
              h = this._time,
              p = this._tDur,
              d = this._dur,
              g = t < 0,
              m = t > p - 1e-8 && !g ? p : t < 1e-8 ? 0 : t;
            if (d) {
              if (
                m !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== g) ||
                this._lazy
              ) {
                if (((n = m), (c = this.timeline), this._repeat)) {
                  if (((a = d + this._rDelay), this._repeat < -1 && g))
                    return this.totalTime(100 * a + t, e, r);
                  if (
                    ((n = tO(m % a)),
                    m === p
                      ? ((o = this._repeat), (n = d))
                      : (o = ~~(s = tO(m / a))) && o === s
                      ? ((n = d), o--)
                      : n > d && (n = d),
                    (u = this._yoyo && 1 & o) &&
                      ((f = this._yEase), (n = d - n)),
                    (s = tW(this._tTime, a)),
                    n === h && !r && this._initted && o === s)
                  )
                    return (this._tTime = m), this;
                  o !== s &&
                    (c && this._yEase && eF(c, u),
                    this.vars.repeatRefresh &&
                      !u &&
                      !this._lock &&
                      n !== a &&
                      this._initted &&
                      ((this._lock = r = 1),
                      (this.render(tO(a * o), !0).invalidate()._lock = 0)));
                }
                if (!this._initted) {
                  if (tJ(this, g ? t : n, r, e, m))
                    return (this._tTime = 0), this;
                  if (
                    h !== this._time &&
                    !(r && this.vars.repeatRefresh && o !== s)
                  )
                    return this;
                  if (d !== this._dur) return this.render(t, e, r);
                }
                if (
                  ((this._tTime = m),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (f || this._ease)(n / d)),
                  this._from && (this.ratio = l = 1 - l),
                  n &&
                    !h &&
                    !e &&
                    !o &&
                    (ed(this, "onStart"), this._tTime !== m))
                )
                  return this;
                for (i = this._pt; i; ) i.r(l, i.d), (i = i._next);
                (c &&
                  c.render(
                    t < 0 ? t : c._dur * c._ease(n / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (g && tq(this, t, e, r), ed(this, "onUpdate")),
                  this._repeat &&
                    o !== s &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    ed(this, "onRepeat"),
                  (m === this._tDur || !m) &&
                    this._tTime === m &&
                    (g && !this._onUpdate && tq(this, t, !0, !0),
                    (t || !d) &&
                      ((m === this._tDur && this._ts > 0) ||
                        (!m && this._ts < 0)) &&
                      tN(this, 1),
                    !e &&
                      !(g && !h) &&
                      (m || h || u) &&
                      (ed(
                        this,
                        m === p ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom &&
                        !(m < p && this.timeScale() > 0) &&
                        this._prom()));
              }
            } else t1(this, t, e, r);
            return this;
          }),
          (r.targets = function () {
            return this._targets;
          }),
          (r.invalidate = function (e) {
            return (
              (e && this.vars.runBackwards) || (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(e),
              t.prototype.invalidate.call(this, e)
            );
          }),
          (r.resetTo = function (t, e, r, n, i) {
            S || eM.wake(), this._ts || this.play();
            var o = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            );
            return (this._initted || e0(this, o),
            e1(this, t, e, r, n, this._ease(o / this._dur), o, i))
              ? this.resetTo(t, e, r, n, 1)
              : (tG(this, 0),
                this.parent ||
                  tI(
                    this._dp,
                    this,
                    "_first",
                    "_last",
                    this._dp._sort ? "_start" : 0
                  ),
                this.render(0));
          }),
          (r.kill = function (t, e) {
            if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
              return (
                (this._lazy = this._pt = 0),
                this.parent
                  ? eg(this)
                  : this.scrollTrigger && this.scrollTrigger.kill(!!x),
                this
              );
            if (this.timeline) {
              var r = this.timeline.totalDuration();
              return (
                this.timeline.killTweensOf(t, e, eG && !0 !== eG.vars.overwrite)
                  ._first || eg(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  t5(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              );
            }
            var n,
              i,
              o,
              a,
              s,
              u,
              l,
              c = this._targets,
              f = t ? en(t) : c,
              h = this._ptLookup,
              p = this._pt;
            if ((!e || "all" === e) && tY(c, f))
              return "all" === e && (this._pt = 0), eg(this);
            for (
              n = this._op = this._op || [],
                "all" !== e &&
                  (B(e) &&
                    ((s = {}),
                    tT(e, function (t) {
                      return (s[t] = 1);
                    }),
                    (e = s)),
                  (e = e2(c, e))),
                l = c.length;
              l--;

            )
              if (~f.indexOf(c[l]))
                for (s in ((i = h[l]),
                "all" === e
                  ? ((n[l] = e), (a = i), (o = {}))
                  : ((o = n[l] = n[l] || {}), (a = e)),
                a))
                  (u = i && i[s]) &&
                    (("kill" in u.d && !0 !== u.d.kill(s)) ||
                      tB(this, u, "_pt"),
                    delete i[s]),
                    "all" !== o && (o[s] = 1);
            return this._initted && !this._pt && p && eg(this), this;
          }),
          (e.to = function (t, r) {
            return new e(t, r, arguments[2]);
          }),
          (e.from = function (t, e) {
            return t4(1, arguments);
          }),
          (e.delayedCall = function (t, r, n, i) {
            return new e(r, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: r,
              onReverseComplete: r,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: i,
            });
          }),
          (e.fromTo = function (t, e, r) {
            return t4(2, arguments);
          }),
          (e.set = function (t, r) {
            return (
              (r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(t, r)
            );
          }),
          (e.killTweensOf = function (t, e, r) {
            return T.killTweensOf(t, e, r);
          }),
          e
        );
      })(eU);
      tD(e4.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        tT("staggerTo,staggerFrom,staggerFromTo", function (t) {
          e4[t] = function () {
            var e = new eq(),
              r = ee.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var e9 = function (t, e, r) {
          return (t[e] = r);
        },
        e7 = function (t, e, r) {
          return t[e](r);
        },
        rt = function (t, e, r, n) {
          return t[e](n.fp, r);
        },
        re = function (t, e, r) {
          return t.setAttribute(e, r);
        },
        rr = function (t, e) {
          return N(t[e]) ? e7 : U(t[e]) && t.setAttribute ? re : e9;
        },
        rn = function (t, e) {
          return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
        },
        ri = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        ro = function (t, e) {
          var r = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
                n),
                (r = r._next);
            n += e.c;
          }
          e.set(e.t, e.p, n, e);
        },
        ra = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        rs = function (t, e, r, n) {
          for (var i, o = this._pt; o; )
            (i = o._next), o.p === n && o.modifier(t, e, r), (o = i);
        },
        ru = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p !== t || n.op) && n.op !== t
                ? n.dep || (e = 1)
                : tB(this, n, "_pt"),
              (n = r);
          return !e;
        },
        rl = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
        },
        rc = function (t) {
          for (var e, r, n, i, o = t._pt; o; ) {
            for (e = o._next, r = n; r && r.pr > o.pr; ) r = r._next;
            (o._prev = r ? r._prev : i) ? (o._prev._next = o) : (n = o),
              (o._next = r) ? (r._prev = o) : (i = o),
              (o = e);
          }
          t._pt = n;
        },
        rf = (function () {
          function t(t, e, r, n, i, o, a, s, u) {
            (this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = o || rn),
              (this.d = a || this),
              (this.set = s || e9),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = rl),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
      tT(
        ty +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
        function (t) {
          return (th[t] = 1);
        }
      ),
        (tr.TweenMax = tr.TweenLite = e4),
        (tr.TimelineLite = tr.TimelineMax = eq),
        (T = new eq({
          sortChildren: !1,
          defaults: D,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (P.stringFilter = eO);
      var rh = [],
        rp = {},
        rd = [],
        rg = 0,
        rm = 0,
        r_ = function (t) {
          return (rp[t] || rd).map(function (t) {
            return t();
          });
        },
        rv = function () {
          var t = Date.now(),
            e = [];
          t - rg > 2 &&
            (r_("matchMediaInit"),
            rh.forEach(function (t) {
              var r,
                n,
                i,
                o,
                a = t.queries,
                s = t.conditions;
              for (n in a)
                (r = k.matchMedia(a[n]).matches) && (i = 1),
                  r !== s[n] && ((s[n] = r), (o = 1));
              o && (t.revert(), i && e.push(t));
            }),
            r_("matchMediaRevert"),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e);
              });
            }),
            (rg = t),
            r_("matchMedia"));
        },
        ry = (function () {
          function t(t, e) {
            (this.selector = e && ei(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = rm++),
              t && this.add(t);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              N(t) && ((r = e), (e = t), (t = N));
              var n = this,
                i = function () {
                  var t,
                    i = w,
                    o = n.selector;
                  return (
                    i && i !== n && i.data.push(n),
                    r && (n.selector = ei(r)),
                    (w = n),
                    (t = e.apply(n, arguments)),
                    N(t) && n._r.push(t),
                    (w = i),
                    (n.selector = o),
                    (n.isReverted = !1),
                    t
                  );
                };
              return (
                (n.last = i),
                t === N
                  ? i(n, function (t) {
                      return n.add(null, t);
                    })
                  : t
                  ? (n[t] = i)
                  : i
              );
            }),
            (e.ignore = function (t) {
              var e = w;
              (w = null), t(this), (w = e);
            }),
            (e.getTweens = function () {
              var e = [];
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof e4 &&
                        !(r.parent && "nested" === r.parent.data) &&
                        e.push(r);
                }),
                e
              );
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0;
            }),
            (e.kill = function (t, e) {
              var r = this;
              if (
                (t
                  ? (function () {
                      for (var e, n = r.getTweens(), i = r.data.length; i--; )
                        "isFlip" === (e = r.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return n.splice(n.indexOf(t), 1);
                          }));
                      for (
                        n
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t: t,
                            };
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0;
                          })
                          .forEach(function (e) {
                            return e.t.revert(t);
                          }),
                          i = r.data.length;
                        i--;

                      )
                        (e = r.data[i]) instanceof eq
                          ? "nested" !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : e instanceof e4 || !e.revert || e.revert(t);
                      r._r.forEach(function (e) {
                        return e(t, r);
                      }),
                        (r.isReverted = !0);
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill();
                    }),
                this.clear(),
                e)
              )
                for (var n = rh.length; n--; )
                  rh[n].id === this.id && rh.splice(n, 1);
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            t
          );
        })(),
        rb = (function () {
          function t(t) {
            (this.contexts = []), (this.scope = t), w && w.data.push(this);
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e, r) {
              q(t) || (t = { matches: t });
              var n,
                i,
                o,
                a = new ry(0, r || this.scope),
                s = (a.conditions = {});
              for (i in (w && !a.selector && (a.selector = w.selector),
              this.contexts.push(a),
              (e = a.add("onMatch", e)),
              (a.queries = t),
              t))
                "all" === i
                  ? (o = 1)
                  : (n = k.matchMedia(t[i])) &&
                    (0 > rh.indexOf(a) && rh.push(a),
                    (s[i] = n.matches) && (o = 1),
                    n.addListener
                      ? n.addListener(rv)
                      : n.addEventListener("change", rv));
              return (
                o &&
                  e(a, function (t) {
                    return a.add(null, t);
                  }),
                this
              );
            }),
            (e.revert = function (t) {
              this.kill(t || {});
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0);
              });
            }),
            t
          );
        })(),
        rx = {
          registerPlugin: function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return e_(t);
            });
          },
          timeline: function (t) {
            return new eq(t);
          },
          getTweensOf: function (t, e) {
            return T.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, n) {
            B(t) && (t = en(t)[0]);
            var i = tx(t || {}).get,
              o = r ? tP : tS;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? o(((tg[e] && tg[e].get) || i)(t, e, r, n))
                  : function (e, r, n) {
                      return o(((tg[e] && tg[e].get) || i)(t, e, r, n));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = en(t)).length > 1) {
              var n = t.map(function (t) {
                  return rO.quickSetter(t, e, r);
                }),
                i = n.length;
              return function (t) {
                for (var e = i; e--; ) n[e](t);
              };
            }
            t = t[0] || {};
            var o = tg[e],
              a = tx(t),
              s = (a.harness && (a.harness.aliases || {})[e]) || e,
              u = o
                ? function (e) {
                    var n = new o();
                    (C._pt = 0),
                      n.init(t, r ? e + r : e, C, 0, [t]),
                      n.render(1, n),
                      C._pt && ra(1, C);
                  }
                : a.set(t, s);
            return o
              ? u
              : function (e) {
                  return u(t, s, r ? e + r : e, a, 1);
                };
          },
          quickTo: function (t, e, r) {
            var n,
              i = rO.to(
                t,
                tD(
                  (((n = {})[e] = "+=0.1"),
                  (n.paused = !0),
                  (n.stagger = 0),
                  n),
                  r || {}
                )
              ),
              o = function (t, r, n) {
                return i.resetTo(e, t, r, n);
              };
            return (o.tween = i), o;
          },
          isTweening: function (t) {
            return T.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = eL(t.ease, D.ease)), tR(D, t || {});
          },
          config: function (t) {
            return tR(P, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              n = t.plugins,
              i = t.defaults,
              o = t.extendTimeline;
            (n || "").split(",").forEach(function (t) {
              return (
                t &&
                !tg[t] &&
                !tr[t] &&
                ta(e + " effect requires " + t + " plugin.")
              );
            }),
              (tm[e] = function (t, e, n) {
                return r(en(t), tD(e || {}, i), n);
              }),
              o &&
                (eq.prototype[e] = function (t, r, n) {
                  return this.add(tm[e](t, q(r) ? r : (n = r) && {}, this), n);
                });
          },
          registerEase: function (t, e) {
            eE[t] = eL(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? eL(t, e) : eE;
          },
          getById: function (t) {
            return T.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var r,
              n,
              i = new eq(t);
            for (
              i.smoothChildTiming = j(t.smoothChildTiming),
                T.remove(i),
                i._dp = 0,
                i._time = i._tTime = T._time,
                r = T._first;
              r;

            )
              (n = r._next),
                (e ||
                  !(
                    !r._dur &&
                    r instanceof e4 &&
                    r.vars.onComplete === r._targets[0]
                  )) &&
                  tQ(i, r, r._start - r._delay),
                (r = n);
            return tQ(T, i, 0), i;
          },
          context: function (t, e) {
            return t ? new ry(t, e) : w;
          },
          matchMedia: function (t) {
            return new rb(t);
          },
          matchMediaRefresh: function () {
            return (
              rh.forEach(function (t) {
                var e,
                  r,
                  n = t.conditions;
                for (r in n) n[r] && ((n[r] = !1), (e = 1));
                e && t.revert();
              }) || rv()
            );
          },
          addEventListener: function (t, e) {
            var r = rp[t] || (rp[t] = []);
            ~r.indexOf(e) || r.push(e);
          },
          removeEventListener: function (t, e) {
            var r = rp[t],
              n = r && r.indexOf(e);
            n >= 0 && r.splice(n, 1);
          },
          utils: {
            wrap: function t(e, r, n) {
              var i = r - e;
              return G(e)
                ? ec(e, t(0, e.length), r)
                : t9(n, function (t) {
                    return ((i + ((t - e) % i)) % i) + e;
                  });
            },
            wrapYoyo: function t(e, r, n) {
              var i = r - e,
                o = 2 * i;
              return G(e)
                ? ec(e, t(0, e.length - 1), r)
                : t9(n, function (t) {
                    return (
                      (t = (o + ((t - e) % o)) % o || 0),
                      e + (t > i ? o - t : t)
                    );
                  });
            },
            distribute: ea,
            random: el,
            snap: eu,
            normalize: function (t, e, r) {
              return eh(t, e, 0, 1, r);
            },
            getUnit: et,
            clamp: function (t, e, r) {
              return t9(r, function (r) {
                return t7(t, e, r);
              });
            },
            splitColor: eb,
            toArray: en,
            selector: ei,
            mapRange: eh,
            pipe: function () {
              for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t);
                }, t);
              };
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || et(r));
              };
            },
            interpolate: function t(e, r, n, i) {
              var o = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r;
                  };
              if (!o) {
                var a,
                  s,
                  u,
                  l,
                  c,
                  f = B(e),
                  h = {};
                if ((!0 === n && (i = 1) && (n = null), f))
                  (e = { p: e }), (r = { p: r });
                else if (G(e) && !G(r)) {
                  for (s = 1, u = [], c = (l = e.length) - 2; s < l; s++)
                    u.push(t(e[s - 1], e[s]));
                  l--,
                    (o = function (t) {
                      var e = Math.min(c, ~~(t *= l));
                      return u[e](t - e);
                    }),
                    (n = r);
                } else i || (e = tz(G(e) ? [] : {}, e));
                if (!u) {
                  for (a in r) eZ.call(h, e, a, "get", r[a]);
                  o = function (t) {
                    return ra(t, h) || (f ? e.p : e);
                  };
                }
              }
              return t9(n, o);
            },
            shuffle: eo,
          },
          install: ti,
          effects: tm,
          ticker: eM,
          updateRoot: eq.updateRoot,
          plugins: tg,
          globalTimeline: T,
          core: {
            PropTween: rf,
            globals: ts,
            Tween: e4,
            Timeline: eq,
            Animation: eU,
            getCache: tx,
            _removeLinkedListItem: tB,
            reverting: function () {
              return x;
            },
            context: function (t) {
              return t && w && (w.data.push(t), (t._ctx = w)), w;
            },
            suppressOverwrites: function (t) {
              return (b = t);
            },
          },
        };
      tT("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (rx[t] = e4[t]);
      }),
        eM.add(eq.updateRoot),
        (C = rx.to({}, { duration: 0 }));
      var rw = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
          return r;
        },
        rT = function (t, e) {
          var r,
            n,
            i,
            o = t._targets;
          for (r in e)
            for (n = o.length; n--; )
              (i = t._ptLookup[n][r]) &&
                (i = i.d) &&
                (i._pt && (i = rw(i, r)),
                i && i.modifier && i.modifier(e[r], t, o[n], r));
        },
        rk = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i;
                if (
                  (B(r) &&
                    ((n = {}),
                    tT(r, function (t) {
                      return (n[t] = 1);
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i]);
                  r = n;
                }
                rT(t, r);
              };
            },
          };
        },
        rO =
          rx.registerPlugin(
            {
              name: "attr",
              init: function (t, e, r, n, i) {
                var o, a, s;
                for (o in ((this.tween = r), e))
                  (s = t.getAttribute(o) || ""),
                    ((a = this.add(
                      t,
                      "setAttribute",
                      (s || 0) + "",
                      e[o],
                      n,
                      i,
                      0,
                      0,
                      o
                    )).op = o),
                    (a.b = s),
                    this._props.push(o);
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  x ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next);
              },
            },
            {
              name: "endArray",
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
              },
            },
            rk("roundProps", es),
            rk("modifiers"),
            rk("snap", eu)
          ) || rx;
      (e4.version = eq.version = rO.version = "3.12.7"),
        (A = 1),
        W() && eA(),
        eE.Power0,
        eE.Power1,
        eE.Power2,
        eE.Power3,
        eE.Power4,
        eE.Linear,
        eE.Quad,
        eE.Cubic,
        eE.Quart,
        eE.Quint,
        eE.Strong,
        eE.Elastic,
        eE.Back,
        eE.SteppedEase,
        eE.Bounce,
        eE.Sine,
        eE.Expo,
        eE.Circ;
    });
  /*!
   * CSSPlugin 3.12.7
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   */ var ru,
    rl,
    rc,
    rf,
    rh,
    rp,
    rd,
    rg = (rs("6wLgJ"), rs("6wLgJ")),
    rm = {},
    r_ = 180 / Math.PI,
    rv = Math.PI / 180,
    ry = Math.atan2,
    rb = /([A-Z])/g,
    rx = /(left|right|width|margin|padding|x)/i,
    rw = /[\s,\(]\S/,
    rT = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    rk = function (t, e) {
      return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
    },
    rO = function (t, e) {
      return e.set(
        e.t,
        e.p,
        1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
        e
      );
    },
    rM = function (t, e) {
      return e.set(
        e.t,
        e.p,
        t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
        e
      );
    },
    rA = function (t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
    },
    rE = function (t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    },
    rC = function (t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    },
    rS = function (t, e, r) {
      return (t.style[e] = r);
    },
    rP = function (t, e, r) {
      return t.style.setProperty(e, r);
    },
    rD = function (t, e, r) {
      return (t._gsap[e] = r);
    },
    rz = function (t, e, r) {
      return (t._gsap.scaleX = t._gsap.scaleY = r);
    },
    rR = function (t, e, r, n, i) {
      var o = t._gsap;
      (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
    },
    rF = function (t, e, r, n, i) {
      var o = t._gsap;
      (o[e] = r), o.renderTransform(i, o);
    },
    rL = "transform",
    rY = rL + "Origin",
    rI = function t(e, r) {
      var n = this,
        i = this.target,
        o = i.style,
        a = i._gsap;
      if (e in rm && o) {
        if (((this.tfm = this.tfm || {}), "transform" === e))
          return rT.transform.split(",").forEach(function (e) {
            return t.call(n, e, r);
          });
        if (
          (~(e = rT[e] || e).indexOf(",")
            ? e.split(",").forEach(function (t) {
                return (n.tfm[t] = r2(i, t));
              })
            : (this.tfm[e] = a.x ? a[e] : r2(i, e)),
          e === rY && (this.tfm.zOrigin = a.zOrigin),
          this.props.indexOf(rL) >= 0)
        )
          return;
        a.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(rY, r, "")),
          (e = rL);
      }
      (o || r) && this.props.push(e, r, o[e]);
    },
    rB = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    rN = function () {
      var t,
        e,
        r = this.props,
        n = this.target,
        i = n.style,
        o = n._gsap;
      for (t = 0; t < r.length; t += 3)
        r[t + 1]
          ? 2 === r[t + 1]
            ? n[r[t]](r[t + 2])
            : (n[r[t]] = r[t + 2])
          : r[t + 2]
          ? (i[r[t]] = r[t + 2])
          : i.removeProperty(
              "--" === r[t].substr(0, 2)
                ? r[t]
                : r[t].replace(rb, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (e in this.tfm) o[e] = this.tfm[e];
        o.svg &&
          (o.renderTransform(),
          n.setAttribute("data-svg-origin", this.svgo || "")),
          ((t = rp()) && t.isStart) ||
            i[rL] ||
            (rB(i),
            o.zOrigin &&
              i[rY] &&
              ((i[rY] += " " + o.zOrigin + "px"),
              (o.zOrigin = 0),
              o.renderTransform()),
            (o.uncache = 1));
      }
    },
    rX = function (t, e) {
      var r = { target: t, props: [], revert: rN, save: rI };
      return (
        t._gsap || (0, rg.gsap).core.getCache(t),
        e &&
          t.style &&
          t.nodeType &&
          e.split(",").forEach(function (t) {
            return r.save(t);
          }),
        r
      );
    },
    rU = function (t, e) {
      var r = ru.createElementNS
        ? ru.createElementNS(
            (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : ru.createElement(t);
      return r && r.style ? r : ru.createElement(t);
    },
    rq = function t(e, r, n) {
      var i = getComputedStyle(e);
      return (
        i[r] ||
        i.getPropertyValue(r.replace(rb, "-$1").toLowerCase()) ||
        i.getPropertyValue(r) ||
        (!n && t(e, rW(r) || r, 1)) ||
        ""
      );
    },
    rj = "O,Moz,ms,Ms,Webkit".split(","),
    rW = function (t, e, r) {
      var n = (e || rf).style,
        i = 5;
      if (t in n && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        i-- && !(rj[i] + t in n);

      );
      return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? rj[i] : "") + t;
    },
    rH = function () {
      "undefined" != typeof window &&
        window.document &&
        ((rl = (ru = window.document).documentElement),
        (rf = rU("div") || { style: {} }),
        rU("div"),
        (rY = (rL = rW(rL)) + "Origin"),
        (rf.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (rd = !!rW("perspective")),
        (rp = rg.gsap.core.reverting),
        (rc = 1));
    },
    rV = function (t) {
      var e,
        r = t.ownerSVGElement,
        n = rU(
          "svg",
          (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
        ),
        i = t.cloneNode(!0);
      (i.style.display = "block"), n.appendChild(i), rl.appendChild(n);
      try {
        e = i.getBBox();
      } catch (t) {}
      return n.removeChild(i), rl.removeChild(n), e;
    },
    rG = function (t, e) {
      for (var r = e.length; r--; )
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
    },
    r$ = function (t) {
      var e, r;
      try {
        e = t.getBBox();
      } catch (n) {
        (e = rV(t)), (r = 1);
      }
      return (
        (e && (e.width || e.height)) || r || (e = rV(t)),
        !e || e.width || e.x || e.y
          ? e
          : {
              x: +rG(t, ["x", "cx", "x1"]) || 0,
              y: +rG(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
      );
    },
    rQ = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && r$(t));
    },
    rZ = function (t, e) {
      if (e) {
        var r,
          n = t.style;
        e in rm && e !== rY && (e = rL),
          n.removeProperty
            ? (("ms" === (r = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) &&
                (e = "-" + e),
              n.removeProperty(
                "--" === r ? e : e.replace(rb, "-$1").toLowerCase()
              ))
            : n.removeAttribute(e);
      }
    },
    rJ = function (t, e, r, n, i, o) {
      var a = new rg.PropTween(t._pt, e, r, 0, 1, o ? rC : rE);
      return (t._pt = a), (a.b = n), (a.e = i), t._props.push(r), a;
    },
    rK = { deg: 1, rad: 1, turn: 1 },
    r0 = { grid: 1, flex: 1 },
    r1 = function t(e, r, n, i) {
      var o,
        a,
        s,
        u,
        l = parseFloat(n) || 0,
        c = (n + "").trim().substr((l + "").length) || "px",
        f = rf.style,
        h = rx.test(r),
        p = "svg" === e.tagName.toLowerCase(),
        d = (p ? "client" : "offset") + (h ? "Width" : "Height"),
        g = "px" === i,
        m = "%" === i;
      if (i === c || !l || rK[i] || rK[c]) return l;
      if (
        ("px" === c || g || (l = t(e, r, n, "px")),
        (u = e.getCTM && rQ(e)),
        (m || "%" === c) && (rm[r] || ~r.indexOf("adius")))
      )
        return (
          (o = u ? e.getBBox()[h ? "width" : "height"] : e[d]),
          (0, rg._round)(m ? (l / o) * 100 : (l / 100) * o)
        );
      if (
        ((f[h ? "width" : "height"] = 100 + (g ? c : i)),
        (a =
          ("rem" !== i && ~r.indexOf("adius")) ||
          ("em" === i && e.appendChild && !p)
            ? e
            : e.parentNode),
        u && (a = (e.ownerSVGElement || {}).parentNode),
        (a && a !== ru && a.appendChild) || (a = ru.body),
        (s = a._gsap) &&
          m &&
          s.width &&
          h &&
          s.time === rg._ticker.time &&
          !s.uncache)
      )
        return (0, rg._round)((l / s.width) * 100);
      if (m && ("height" === r || "width" === r)) {
        var _ = e.style[r];
        (e.style[r] = 100 + i), (o = e[d]), _ ? (e.style[r] = _) : rZ(e, r);
      } else
        (m || "%" === c) &&
          !r0[rq(a, "display")] &&
          (f.position = rq(e, "position")),
          a === e && (f.position = "static"),
          a.appendChild(rf),
          (o = rf[d]),
          a.removeChild(rf),
          (f.position = "absolute");
      return (
        h &&
          m &&
          (((s = (0, rg._getCache)(a)).time = rg._ticker.time),
          (s.width = a[d])),
        (0, rg._round)(g ? (o * l) / 100 : o && l ? (100 / o) * l : 0)
      );
    },
    r2 = function (t, e, r, n) {
      var i;
      return (
        rc || rH(),
        e in rT &&
          "transform" !== e &&
          ~(e = rT[e]).indexOf(",") &&
          (e = e.split(",")[0]),
        rm[e] && "transform" !== e
          ? ((i = ni(t, n)),
            (i =
              "transformOrigin" !== e
                ? i[e]
                : i.svg
                ? i.origin
                : no(rq(t, rY)) + " " + i.zOrigin + "px"))
          : (!(i = t.style[e]) ||
              "auto" === i ||
              n ||
              ~(i + "").indexOf("calc(")) &&
            (i =
              (r4[e] && r4[e](t, e, r)) ||
              rq(t, e) ||
              (0, rg._getProperty)(t, e) ||
              +("opacity" === e)),
        r && !~(i + "").trim().indexOf(" ") ? r1(t, e, i, r) + r : i
      );
    },
    r5 = function (t, e, r, n) {
      if (!r || "none" === r) {
        var i = rW(e, t, 1),
          o = i && rq(t, i, 1);
        o && o !== r
          ? ((e = i), (r = o))
          : "borderColor" === e && (r = rq(t, "borderTopColor"));
      }
      var a,
        s,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        _ = new rg.PropTween(
          this._pt,
          t.style,
          e,
          0,
          1,
          rg._renderComplexString
        ),
        v = 0,
        y = 0;
      if (
        ((_.b = r),
        (_.e = n),
        (r += ""),
        "auto" == (n += "") &&
          ((f = t.style[e]),
          (t.style[e] = n),
          (n = rq(t, e) || n),
          f ? (t.style[e] = f) : rZ(t, e)),
        (a = [r, n]),
        (0, rg._colorStringFilter)(a),
        (r = a[0]),
        (n = a[1]),
        (u = r.match(rg._numWithUnitExp) || []),
        (n.match(rg._numWithUnitExp) || []).length)
      ) {
        for (; (s = (0, rg._numWithUnitExp).exec(n)); )
          (h = s[0]),
            (d = n.substring(v, s.index)),
            c
              ? (c = (c + 1) % 5)
              : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) &&
                (c = 1),
            h !== (f = u[y++] || "") &&
              ((l = parseFloat(f) || 0),
              (m = f.substr((l + "").length)),
              "=" === h.charAt(1) && (h = (0, rg._parseRelative)(l, h) + m),
              (p = parseFloat(h)),
              (g = h.substr((p + "").length)),
              (v = rg._numWithUnitExp.lastIndex - g.length),
              g ||
                ((g = g || rg._config.units[e] || m),
                v !== n.length || ((n += g), (_.e += g))),
              m !== g && (l = r1(t, e, f, g) || 0),
              (_._pt = {
                _next: _._pt,
                p: d || 1 === y ? d : ",",
                s: l,
                c: p - l,
                m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
              }));
        _.c = v < n.length ? n.substring(v, n.length) : "";
      } else _.r = "display" === e && "none" === n ? rC : rE;
      return (0, rg._relExp).test(n) && (_.e = 0), (this._pt = _), _;
    },
    r3 = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    r8 = function (t) {
      var e = t.split(" "),
        r = e[0],
        n = e[1] || "50%";
      return (
        ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
          ((t = r), (r = n), (n = t)),
        (e[0] = r3[r] || r),
        (e[1] = r3[n] || n),
        e.join(" ")
      );
    },
    r6 = function (t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
          n,
          i,
          o = e.t,
          a = o.style,
          s = e.u,
          u = o._gsap;
        if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
        else
          for (i = (s = s.split(",")).length; --i > -1; )
            rm[(r = s[i])] &&
              ((n = 1), (r = "transformOrigin" === r ? rY : rL)),
              rZ(o, r);
        n &&
          (rZ(o, rL),
          u &&
            (u.svg && o.removeAttribute("transform"),
            (a.scale = a.rotate = a.translate = "none"),
            ni(o, 1),
            (u.uncache = 1),
            rB(a)));
      }
    },
    r4 = {
      clearProps: function (t, e, r, n, i) {
        if ("isFromStart" !== i.data) {
          var o = (t._pt = new rg.PropTween(t._pt, e, r, 0, 0, r6));
          return (o.u = n), (o.pr = -10), (o.tween = i), t._props.push(r), 1;
        }
      },
    },
    r9 = [1, 0, 0, 1, 0, 0],
    r7 = {},
    nt = function (t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    },
    ne = function (t) {
      var e = rq(t, rL);
      return nt(e) ? r9 : e.substr(7).match(rg._numExp).map(rg._round);
    },
    nr = function (t, e) {
      var r,
        n,
        i,
        o,
        a = t._gsap || (0, rg._getCache)(t),
        s = t.style,
        u = ne(t);
      return a.svg && t.getAttribute("transform")
        ? "1,0,0,1,0,0" ===
          (u = [
            (i = t.transform.baseVal.consolidate().matrix).a,
            i.b,
            i.c,
            i.d,
            i.e,
            i.f,
          ]).join(",")
          ? r9
          : u
        : (u !== r9 ||
            t.offsetParent ||
            t === rl ||
            a.svg ||
            ((i = s.display),
            (s.display = "block"),
            ((r = t.parentNode) &&
              (t.offsetParent || t.getBoundingClientRect().width)) ||
              ((o = 1), (n = t.nextElementSibling), rl.appendChild(t)),
            (u = ne(t)),
            i ? (s.display = i) : rZ(t, "display"),
            o &&
              (n
                ? r.insertBefore(t, n)
                : r
                ? r.appendChild(t)
                : rl.removeChild(t))),
          e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    },
    nn = function (t, e, r, n, i, o) {
      var a,
        s,
        u,
        l,
        c = t._gsap,
        f = i || nr(t, !0),
        h = c.xOrigin || 0,
        p = c.yOrigin || 0,
        d = c.xOffset || 0,
        g = c.yOffset || 0,
        m = f[0],
        _ = f[1],
        v = f[2],
        y = f[3],
        b = f[4],
        x = f[5],
        w = e.split(" "),
        T = parseFloat(w[0]) || 0,
        k = parseFloat(w[1]) || 0;
      r
        ? f !== r9 &&
          (s = m * y - _ * v) &&
          ((u = (y / s) * T + (-v / s) * k + (v * x - y * b) / s),
          (l = (-_ / s) * T + (m / s) * k - (m * x - _ * b) / s),
          (T = u),
          (k = l))
        : ((T = (a = r$(t)).x + (~w[0].indexOf("%") ? (T / 100) * a.width : T)),
          (k =
            a.y + (~(w[1] || w[0]).indexOf("%") ? (k / 100) * a.height : k))),
        n || (!1 !== n && c.smooth)
          ? ((b = T - h),
            (x = k - p),
            (c.xOffset = d + (b * m + x * v) - b),
            (c.yOffset = g + (b * _ + x * y) - x))
          : (c.xOffset = c.yOffset = 0),
        (c.xOrigin = T),
        (c.yOrigin = k),
        (c.smooth = !!n),
        (c.origin = e),
        (c.originIsAbsolute = !!r),
        (t.style[rY] = "0px 0px"),
        o &&
          (rJ(o, c, "xOrigin", h, T),
          rJ(o, c, "yOrigin", p, k),
          rJ(o, c, "xOffset", d, c.xOffset),
          rJ(o, c, "yOffset", g, c.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + k);
    },
    ni = function (t, e) {
      var r = t._gsap || new rg.GSCache(t);
      if ("x" in r && !e && !r.uncache) return r;
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        _,
        v,
        y,
        b,
        x,
        w,
        T,
        k,
        O,
        M,
        A,
        E,
        C,
        S,
        P,
        D,
        z,
        R,
        F = t.style,
        L = r.scaleX < 0,
        Y = getComputedStyle(t),
        I = rq(t, rY) || "0";
      return (
        (n = i = o = u = l = c = f = h = p = 0),
        (a = s = 1),
        (r.svg = !!(t.getCTM && rQ(t))),
        Y.translate &&
          (("none" !== Y.translate ||
            "none" !== Y.scale ||
            "none" !== Y.rotate) &&
            (F[rL] =
              ("none" !== Y.translate
                ? "translate3d(" +
                  (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") +
              ("none" !== Y.scale
                ? "scale(" + Y.scale.split(" ").join(",") + ") "
                : "") +
              ("none" !== Y[rL] ? Y[rL] : "")),
          (F.scale = F.rotate = F.translate = "none")),
        (m = nr(t, r.svg)),
        r.svg &&
          (r.uncache
            ? ((A = t.getBBox()),
              (I = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px"),
              (M = ""))
            : (M = !e && t.getAttribute("data-svg-origin")),
          nn(t, M || I, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (d = r.xOrigin || 0),
        (g = r.yOrigin || 0),
        m !== r9 &&
          ((b = m[0]),
          (x = m[1]),
          (w = m[2]),
          (T = m[3]),
          (n = k = m[4]),
          (i = O = m[5]),
          6 === m.length
            ? ((a = Math.sqrt(b * b + x * x)),
              (s = Math.sqrt(T * T + w * w)),
              (u = b || x ? ry(x, b) * r_ : 0),
              (f = w || T ? ry(w, T) * r_ + u : 0) &&
                (s *= Math.abs(Math.cos(f * rv))),
              r.svg && ((n -= d - (d * b + g * w)), (i -= g - (d * x + g * T))))
            : ((R = m[6]),
              (D = m[7]),
              (C = m[8]),
              (S = m[9]),
              (P = m[10]),
              (z = m[11]),
              (n = m[12]),
              (i = m[13]),
              (o = m[14]),
              (l = (_ = ry(R, P)) * r_),
              _ &&
                ((M = k * (v = Math.cos(-_)) + C * (y = Math.sin(-_))),
                (A = O * v + S * y),
                (E = R * v + P * y),
                (C = -(k * y) + C * v),
                (S = -(O * y) + S * v),
                (P = -(R * y) + P * v),
                (z = -(D * y) + z * v),
                (k = M),
                (O = A),
                (R = E)),
              (c = (_ = ry(-w, P)) * r_),
              _ &&
                ((M = b * (v = Math.cos(-_)) - C * (y = Math.sin(-_))),
                (A = x * v - S * y),
                (E = w * v - P * y),
                (z = T * y + z * v),
                (b = M),
                (x = A),
                (w = E)),
              (u = (_ = ry(x, b)) * r_),
              _ &&
                ((M = b * (v = Math.cos(_)) + x * (y = Math.sin(_))),
                (A = k * v + O * y),
                (x = x * v - b * y),
                (O = O * v - k * y),
                (b = M),
                (k = A)),
              l &&
                Math.abs(l) + Math.abs(u) > 359.9 &&
                ((l = u = 0), (c = 180 - c)),
              (a = (0, rg._round)(Math.sqrt(b * b + x * x + w * w))),
              (s = (0, rg._round)(Math.sqrt(O * O + R * R))),
              (f = Math.abs((_ = ry(k, O))) > 2e-4 ? _ * r_ : 0),
              (p = z ? 1 / (z < 0 ? -z : z) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !nt(rq(t, rL))),
            M && t.setAttribute("transform", M))),
        Math.abs(f) > 90 &&
          270 > Math.abs(f) &&
          (L
            ? ((a *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((s *= -1), (f += f <= 0 ? 180 : -180))),
        (e = e || r.uncache),
        (r.x =
          n -
          ((r.xPercent =
            n &&
            ((!e && r.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          i -
          ((r.yPercent =
            i &&
            ((!e && r.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = o + "px"),
        (r.scaleX = (0, rg._round)(a)),
        (r.scaleY = (0, rg._round)(s)),
        (r.rotation = (0, rg._round)(u) + "deg"),
        (r.rotationX = (0, rg._round)(l) + "deg"),
        (r.rotationY = (0, rg._round)(c) + "deg"),
        (r.skewX = f + "deg"),
        (r.skewY = h + "deg"),
        (r.transformPerspective = p + "px"),
        (r.zOrigin = parseFloat(I.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
          (F[rY] = no(I)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = rg._config.force3D),
        (r.renderTransform = r.svg ? nc : rd ? nl : ns),
        (r.uncache = 0),
        r
      );
    },
    no = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    na = function (t, e, r) {
      var n = (0, rg.getUnit)(e);
      return (
        (0, rg._round)(parseFloat(e) + parseFloat(r1(t, "x", r + "px", n))) + n
      );
    },
    ns = function (t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        nl(t, e);
    },
    nu = "0deg",
    nl = function (t, e) {
      var r = e || this,
        n = r.xPercent,
        i = r.yPercent,
        o = r.x,
        a = r.y,
        s = r.z,
        u = r.rotation,
        l = r.rotationY,
        c = r.rotationX,
        f = r.skewX,
        h = r.skewY,
        p = r.scaleX,
        d = r.scaleY,
        g = r.transformPerspective,
        m = r.force3D,
        _ = r.target,
        v = r.zOrigin,
        y = "",
        b = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (c !== nu || l !== nu)) {
        var x,
          w = parseFloat(l) * rv,
          T = Math.sin(w),
          k = Math.cos(w);
        (o = na(_, o, -(T * (x = Math.cos((w = parseFloat(c) * rv))) * v))),
          (a = na(_, a, -(-Math.sin(w) * v))),
          (s = na(_, s, -(k * x * v) + v));
      }
      "0px" !== g && (y += "perspective(" + g + ") "),
        (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
        (b || "0px" !== o || "0px" !== a || "0px" !== s) &&
          (y +=
            "0px" !== s || b
              ? "translate3d(" + o + ", " + a + ", " + s + ") "
              : "translate(" + o + ", " + a + ") "),
        u !== nu && (y += "rotate(" + u + ") "),
        l !== nu && (y += "rotateY(" + l + ") "),
        c !== nu && (y += "rotateX(" + c + ") "),
        (f !== nu || h !== nu) && (y += "skew(" + f + ", " + h + ") "),
        (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + ") "),
        (_.style[rL] = y || "translate(0, 0)");
    },
    nc = function (t, e) {
      var r,
        n,
        i,
        o,
        a,
        s = e || this,
        u = s.xPercent,
        l = s.yPercent,
        c = s.x,
        f = s.y,
        h = s.rotation,
        p = s.skewX,
        d = s.skewY,
        g = s.scaleX,
        m = s.scaleY,
        _ = s.target,
        v = s.xOrigin,
        y = s.yOrigin,
        b = s.xOffset,
        x = s.yOffset,
        w = s.forceCSS,
        T = parseFloat(c),
        k = parseFloat(f);
      (h = parseFloat(h)),
        (p = parseFloat(p)),
        (d = parseFloat(d)) && ((p += d = parseFloat(d)), (h += d)),
        h || p
          ? ((h *= rv),
            (p *= rv),
            (r = Math.cos(h) * g),
            (n = Math.sin(h) * g),
            (i = -(Math.sin(h - p) * m)),
            (o = Math.cos(h - p) * m),
            p &&
              ((d *= rv),
              (i *= a = Math.sqrt(1 + (a = Math.tan(p - d)) * a)),
              (o *= a),
              d && ((r *= a = Math.sqrt(1 + (a = Math.tan(d)) * a)), (n *= a))),
            (r = (0, rg._round)(r)),
            (n = (0, rg._round)(n)),
            (i = (0, rg._round)(i)),
            (o = (0, rg._round)(o)))
          : ((r = g), (o = m), (n = i = 0)),
        ((T && !~(c + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) &&
          ((T = r1(_, "x", c, "px")), (k = r1(_, "y", f, "px"))),
        (v || y || b || x) &&
          ((T = (0, rg._round)(T + v - (v * r + y * i) + b)),
          (k = (0, rg._round)(k + y - (v * n + y * o) + x))),
        (u || l) &&
          ((a = _.getBBox()),
          (T = (0, rg._round)(T + (u / 100) * a.width)),
          (k = (0, rg._round)(k + (l / 100) * a.height))),
        (a =
          "matrix(" +
          r +
          "," +
          n +
          "," +
          i +
          "," +
          o +
          "," +
          T +
          "," +
          k +
          ")"),
        _.setAttribute("transform", a),
        w && (_.style[rL] = a);
    },
    nf = function (t, e, r, n, i) {
      var o,
        a,
        s = (0, rg._isString)(i),
        u = parseFloat(i) * (s && ~i.indexOf("rad") ? r_ : 1) - n,
        l = n + u + "deg";
      return (
        s &&
          ("short" === (o = i.split("_")[1]) &&
            (u %= 360) != u % 180 &&
            (u += u < 0 ? 360 : -360),
          "cw" === o && u < 0
            ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
            : "ccw" === o &&
              u > 0 &&
              (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
        (t._pt = a = new rg.PropTween(t._pt, e, r, n, u, rO)),
        (a.e = l),
        (a.u = "deg"),
        t._props.push(r),
        a
      );
    },
    nh = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    np = function (t, e, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l,
        c = nh({}, r._gsap),
        f = r.style;
      for (i in (c.svg
        ? ((o = r.getAttribute("transform")),
          r.setAttribute("transform", ""),
          (f[rL] = e),
          (n = ni(r, 1)),
          rZ(r, rL),
          r.setAttribute("transform", o))
        : ((o = getComputedStyle(r)[rL]),
          (f[rL] = e),
          (n = ni(r, 1)),
          (f[rL] = o)),
      rm))
        (o = c[i]) !== (a = n[i]) &&
          0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
          ((s =
            (0, rg.getUnit)(o) !== (l = (0, rg.getUnit)(a))
              ? r1(r, i, o, l)
              : parseFloat(o)),
          (u = parseFloat(a)),
          (t._pt = new rg.PropTween(t._pt, n, i, s, u - s, rk)),
          (t._pt.u = l || 0),
          t._props.push(i));
      nh(n, c);
    };
  (0, rg._forEachName)("padding,margin,Width,Radius", function (t, e) {
    var r = "Right",
      n = "Bottom",
      i = "Left",
      o = (e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]).map(
        function (r) {
          return e < 2 ? t + r : "border" + r + t;
        }
      );
    r4[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
      var a, s;
      if (arguments.length < 4)
        return 5 ===
          (s = (a = o.map(function (e) {
            return r2(t, e, r);
          })).join(" ")).split(a[0]).length
          ? a[0]
          : s;
      (a = (n + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        t.init(e, s, i);
    };
  });
  var nd = {
    name: "css",
    register: rH,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, r, n, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        h,
        p,
        d,
        g,
        m,
        _,
        v,
        y,
        b,
        x = this._props,
        w = t.style,
        T = r.vars.startAt;
      for (f in (rc || rH(),
      (this.styles = this.styles || rX(t)),
      (b = this.styles.props),
      (this.tween = r),
      e))
        if (
          "autoRound" !== f &&
          ((a = e[f]),
          !(rg._plugins[f] && (0, rg._checkPlugin)(f, e, r, n, t, i)))
        ) {
          if (
            ((l = typeof a),
            (c = r4[f]),
            "function" === l && (l = typeof (a = a.call(r, n, t, i))),
            "string" === l &&
              ~a.indexOf("random(") &&
              (a = (0, rg._replaceRandom)(a)),
            c)
          )
            c(this, t, f, a, r) && (y = 1);
          else if ("--" === f.substr(0, 2))
            (o = (getComputedStyle(t).getPropertyValue(f) + "").trim()),
              (a += ""),
              (rg._colorExp.lastIndex = 0),
              (0, rg._colorExp).test(o) ||
                ((h = (0, rg.getUnit)(o)), (p = (0, rg.getUnit)(a))),
              p ? h !== p && (o = r1(t, f, o, p) + p) : h && (a += h),
              this.add(w, "setProperty", o, a, n, i, 0, 0, f),
              x.push(f),
              b.push(f, 0, w[f]);
          else if ("undefined" !== l) {
            if (
              (T && f in T
                ? ((o =
                    "function" == typeof T[f] ? T[f].call(r, n, t, i) : T[f]),
                  (0, rg._isString)(o) &&
                    ~o.indexOf("random(") &&
                    (o = (0, rg._replaceRandom)(o)),
                  (0, rg.getUnit)(o + "") ||
                    "auto" === o ||
                    (o +=
                      rg._config.units[f] || (0, rg.getUnit)(r2(t, f)) || ""),
                  "=" === (o + "").charAt(1) && (o = r2(t, f)))
                : (o = r2(t, f)),
              (u = parseFloat(o)),
              (d = "string" === l && "=" === a.charAt(1) && a.substr(0, 2)) &&
                (a = a.substr(2)),
              (s = parseFloat(a)),
              f in rT &&
                ("autoAlpha" === f &&
                  (1 === u && "hidden" === r2(t, "visibility") && s && (u = 0),
                  b.push("visibility", 0, w.visibility),
                  rJ(
                    this,
                    w,
                    "visibility",
                    u ? "inherit" : "hidden",
                    s ? "inherit" : "hidden",
                    !s
                  )),
                "scale" !== f &&
                  "transform" !== f &&
                  ~(f = rT[f]).indexOf(",") &&
                  (f = f.split(",")[0])),
              (g = f in rm))
            ) {
              if (
                (this.styles.save(f),
                m ||
                  (((_ = t._gsap).renderTransform && !e.parseTransform) ||
                    ni(t, e.parseTransform),
                  (v = !1 !== e.smoothOrigin && _.smooth),
                  ((m = this._pt =
                    new rg.PropTween(
                      this._pt,
                      w,
                      rL,
                      0,
                      1,
                      _.renderTransform,
                      _,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === f)
              )
                (this._pt = new rg.PropTween(
                  this._pt,
                  _,
                  "scaleY",
                  _.scaleY,
                  (d ? (0, rg._parseRelative)(_.scaleY, d + s) : s) -
                    _.scaleY || 0,
                  rk
                )),
                  (this._pt.u = 0),
                  x.push("scaleY", f),
                  (f += "X");
              else if ("transformOrigin" === f) {
                b.push(rY, 0, w[rY]),
                  (a = r8(a)),
                  _.svg
                    ? nn(t, a, 0, v, 0, this)
                    : ((p = parseFloat(a.split(" ")[2]) || 0) !== _.zOrigin &&
                        rJ(this, _, "zOrigin", _.zOrigin, p),
                      rJ(this, w, f, no(o), no(a)));
                continue;
              } else if ("svgOrigin" === f) {
                nn(t, a, 1, v, 0, this);
                continue;
              } else if (f in r7) {
                nf(this, _, f, u, d ? (0, rg._parseRelative)(u, d + a) : a);
                continue;
              } else if ("smoothOrigin" === f) {
                rJ(this, _, "smooth", _.smooth, a);
                continue;
              } else if ("force3D" === f) {
                _[f] = a;
                continue;
              } else if ("transform" === f) {
                np(this, a, t);
                continue;
              }
            } else f in w || (f = rW(f) || f);
            if (
              g ||
              ((s || 0 === s) && (u || 0 === u) && !rw.test(a) && f in w)
            )
              (h = (o + "").substr((u + "").length)),
                s || (s = 0),
                (p =
                  (0, rg.getUnit)(a) ||
                  (f in rg._config.units ? rg._config.units[f] : h)),
                h !== p && (u = r1(t, f, o, p)),
                (this._pt = new rg.PropTween(
                  this._pt,
                  g ? _ : w,
                  f,
                  u,
                  (d ? (0, rg._parseRelative)(u, d + s) : s) - u,
                  g || ("px" !== p && "zIndex" !== f) || !1 === e.autoRound
                    ? rk
                    : rA
                )),
                (this._pt.u = p || 0),
                h !== p && "%" !== p && ((this._pt.b = o), (this._pt.r = rM));
            else if (f in w) r5.call(this, t, f, o, d ? d + a : a);
            else if (f in t) this.add(t, f, o || t[f], d ? d + a : a, n, i);
            else if ("parseTransform" !== f) {
              (0, rg._missingPlugin)(f, a);
              continue;
            }
            g ||
              (f in w
                ? b.push(f, 0, w[f])
                : "function" == typeof t[f]
                ? b.push(f, 2, t[f]())
                : b.push(f, 1, o || t[f])),
              x.push(f);
          }
        }
      y && (0, rg._sortPropTweensByPriority)(this);
    },
    render: function (t, e) {
      if (e.tween._time || !rp())
        for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
      else e.styles.revert();
    },
    get: r2,
    aliases: rT,
    getSetter: function (t, e, r) {
      var n = rT[e];
      return (
        n && 0 > n.indexOf(",") && (e = n),
        e in rm && e !== rY && (t._gsap.x || r2(t, "x"))
          ? r && rh === r
            ? "scale" === e
              ? rz
              : rD
            : ((rh = r || {}), "scale" === e ? rR : rF)
          : t.style && !(0, rg._isUndefined)(t.style[e])
          ? rS
          : ~e.indexOf("-")
          ? rP
          : (0, rg._getSetter)(t, e)
      );
    },
    core: { _removeProperty: rZ, _getMatrix: nr },
  };
  (rg.gsap.utils.checkPrefix = rW),
    (rg.gsap.core.getStyleSaver = rX),
    (rt = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
    (re = "rotation,rotationX,rotationY,skewX,skewY"),
    (rr =
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
    (rn = (0, rg._forEachName)(
      rt +
        "," +
        re +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        rm[t] = 1;
      }
    )),
    (0, rg._forEachName)(re, function (t) {
      (rg._config.units[t] = "deg"), (r7[t] = 1);
    }),
    (rT[rn[13]] = rt + "," + re),
    (0, rg._forEachName)(rr, function (t) {
      var e = t.split(":");
      rT[e[1]] = rn[e[0]];
    }),
    (0, rg._forEachName)(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        rg._config.units[t] = "px";
      }
    ),
    (0, rg.gsap).registerPlugin(nd);
  var ng = (0, rg.gsap).registerPlugin(nd) || rg.gsap;
  ng.core.Tween;
  var nm = {};
  (r = nm),
    (m = function () {
      return (
        n ||
        ("undefined" != typeof window &&
          (n = window.gsap) &&
          n.registerPlugin &&
          n)
      );
    }),
    (_ = 1),
    (v = []),
    (y = []),
    (b = []),
    (x = Date.now),
    (w = function (t, e) {
      return e;
    }),
    (T = function () {
      var t = f.core,
        e = t.bridge || {},
        r = t._scrollers,
        n = t._proxies;
      r.push.apply(r, y),
        n.push.apply(n, b),
        (y = r),
        (b = n),
        (w = function (t, r) {
          return e[t](r);
        });
    }),
    (k = function (t, e) {
      return ~b.indexOf(t) && b[b.indexOf(t) + 1][e];
    }),
    (O = function (t) {
      return !!~h.indexOf(t);
    }),
    (M = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !1 !== n, capture: !!i });
    }),
    (A = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    }),
    (E = "scrollLeft"),
    (C = "scrollTop"),
    (S = function () {
      return (p && p.isPressed) || y.cache++;
    }),
    (z = {
      s: C,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: (D = {
        s: E,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: (P = function (t, e) {
          var r = function r(n) {
            if (n || 0 === n) {
              _ && (o.history.scrollRestoration = "manual");
              var i = p && p.isPressed;
              t((n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0))),
                (r.cacheID = y.cache),
                i && w("ss", n);
            } else
              (e || y.cache !== r.cacheID || w("ref")) &&
                ((r.cacheID = y.cache), (r.v = t()));
            return r.v + r.offset;
          };
          return (r.offset = 0), t && r;
        })(function (t) {
          return arguments.length
            ? o.scrollTo(t, z.sc())
            : o.pageXOffset || a[E] || s[E] || u[E] || 0;
        }),
      }),
      sc: P(function (t) {
        return arguments.length
          ? o.scrollTo(D.sc(), t)
          : o.pageYOffset || a[C] || s[C] || u[C] || 0;
      }),
    }),
    (R = function (t, e) {
      return (
        ((e && e._ctx && e._ctx.selector) || n.utils.toArray)(t)[0] ||
        ("string" == typeof t && !1 !== n.config().nullTargetWarn
          ? console.warn("Element not found:", t)
          : null)
      );
    }),
    (F = function (t, e) {
      var r = e.s,
        i = e.sc;
      O(t) && (t = a.scrollingElement || s);
      var o = y.indexOf(t),
        u = i === z.sc ? 1 : 2;
      ~o || (o = y.push(t) - 1), y[o + u] || M(t, "scroll", S);
      var l = y[o + u],
        c =
          l ||
          (y[o + u] =
            P(k(t, r), !0) ||
            (O(t)
              ? i
              : P(function (e) {
                  return arguments.length ? (t[r] = e) : t[r];
                })));
      return (
        (c.target = t),
        l || (c.smooth = "smooth" === n.getProperty(t, "scrollBehavior")),
        c
      );
    }),
    (L = function (t, e, r) {
      var n = t,
        i = t,
        o = x(),
        a = o,
        s = e || 50,
        u = Math.max(500, 3 * s),
        l = function (t, e) {
          var u = x();
          e || u - o > s
            ? ((i = n), (n = t), (a = o), (o = u))
            : r
            ? (n += t)
            : (n = i + ((t - i) / (u - a)) * (o - a));
        };
      return {
        update: l,
        reset: function () {
          (i = n = r ? 0 : n), (a = o = 0);
        },
        getVelocity: function (t) {
          var e = a,
            s = i,
            c = x();
          return (
            (t || 0 === t) && t !== n && l(t),
            o === a || c - a > u
              ? 0
              : ((n + (r ? s : -s)) / ((r ? c : o) - e)) * 1e3
          );
        },
      };
    }),
    (Y = function (t, e) {
      return (
        e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    }),
    (I = function (t) {
      var e = Math.max.apply(Math, t),
        r = Math.min.apply(Math, t);
      return Math.abs(e) >= Math.abs(r) ? e : r;
    }),
    (B = function () {
      (f = n.core.globals().ScrollTrigger) && f.core && T();
    }),
    (N = function (t) {
      return (
        (n = t || m()),
        !i &&
          n &&
          "undefined" != typeof document &&
          document.body &&
          ((o = window),
          (s = (a = document).documentElement),
          (u = a.body),
          (h = [o, a, s, u]),
          n.utils.clamp,
          (g = n.core.context || function () {}),
          (c = "onpointerenter" in u ? "pointer" : "mouse"),
          (l = X.isTouch =
            o.matchMedia &&
            o.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : 2 *
                ("ontouchstart" in o ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0)),
          (d = X.eventTypes =
            (
              "ontouchstart" in s
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in s
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (_ = 0);
          }, 500),
          B(),
          (i = 1)),
        i
      );
    }),
    (D.op = z),
    (y.cache = 0),
    ((X = (function () {
      var t;
      function e(t) {
        this.init(t);
      }
      return (
        (e.prototype.init = function (t) {
          i || N(n) || console.warn("Please gsap.registerPlugin(Observer)"),
            f || B();
          var e = t.tolerance,
            r = t.dragMinimum,
            h = t.type,
            m = t.target,
            _ = t.lineHeight,
            y = t.debounce,
            b = t.preventDefault,
            w = t.onStop,
            T = t.onStopDelay,
            k = t.ignore,
            E = t.wheelSpeed,
            C = t.event,
            P = t.onDragStart,
            X = t.onDragEnd,
            U = t.onDrag,
            q = t.onPress,
            j = t.onRelease,
            W = t.onRight,
            H = t.onLeft,
            V = t.onUp,
            G = t.onDown,
            $ = t.onChangeX,
            Q = t.onChangeY,
            Z = t.onChange,
            J = t.onToggleX,
            K = t.onToggleY,
            tt = t.onHover,
            te = t.onHoverEnd,
            tr = t.onMove,
            tn = t.ignoreCheck,
            ti = t.isNormalizer,
            to = t.onGestureStart,
            ta = t.onGestureEnd,
            ts = t.onWheel,
            tu = t.onEnable,
            tl = t.onDisable,
            tc = t.onClick,
            tf = t.scrollSpeed,
            th = t.capture,
            tp = t.allowClicks,
            td = t.lockAxis,
            tg = t.onLockAxis;
          (this.target = m = R(m) || s),
            (this.vars = t),
            k && (k = n.utils.toArray(k)),
            (e = e || 1e-9),
            (r = r || 0),
            (E = E || 1),
            (tf = tf || 1),
            (h = h || "wheel,touch,pointer"),
            (y = !1 !== y),
            _ || (_ = parseFloat(o.getComputedStyle(u).lineHeight) || 22);
          var tm,
            t_,
            tv,
            ty,
            tb,
            tx,
            tw,
            tT = this,
            tk = 0,
            tO = 0,
            tM = t.passive || (!b && !1 !== t.passive),
            tA = F(m, D),
            tE = F(m, z),
            tC = tA(),
            tS = tE(),
            tP =
              ~h.indexOf("touch") &&
              !~h.indexOf("pointer") &&
              "pointerdown" === d[0],
            tD = O(m),
            tz = m.ownerDocument || a,
            tR = [0, 0, 0],
            tF = [0, 0, 0],
            tL = 0,
            tY = function () {
              return (tL = x());
            },
            tI = function (t, e) {
              return (
                ((tT.event = t) && k && ~k.indexOf(t.target)) ||
                (e && tP && "touch" !== t.pointerType) ||
                (tn && tn(t, e))
              );
            },
            tB = function () {
              var t = (tT.deltaX = I(tR)),
                r = (tT.deltaY = I(tF)),
                n = Math.abs(t) >= e,
                i = Math.abs(r) >= e;
              Z && (n || i) && Z(tT, t, r, tR, tF),
                n &&
                  (W && tT.deltaX > 0 && W(tT),
                  H && tT.deltaX < 0 && H(tT),
                  $ && $(tT),
                  J && tT.deltaX < 0 != tk < 0 && J(tT),
                  (tk = tT.deltaX),
                  (tR[0] = tR[1] = tR[2] = 0)),
                i &&
                  (G && tT.deltaY > 0 && G(tT),
                  V && tT.deltaY < 0 && V(tT),
                  Q && Q(tT),
                  K && tT.deltaY < 0 != tO < 0 && K(tT),
                  (tO = tT.deltaY),
                  (tF[0] = tF[1] = tF[2] = 0)),
                (ty || tv) &&
                  (tr && tr(tT),
                  tv && (P && 1 === tv && P(tT), U && U(tT), (tv = 0)),
                  (ty = !1)),
                tx && ((tx = !1), 1) && tg && tg(tT),
                tb && (ts(tT), (tb = !1)),
                (tm = 0);
            },
            tN = function (t, e, r) {
              (tR[r] += t),
                (tF[r] += e),
                tT._vx.update(t),
                tT._vy.update(e),
                y ? tm || (tm = requestAnimationFrame(tB)) : tB();
            },
            tX = function (t, e) {
              td &&
                !tw &&
                ((tT.axis = tw = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                (tx = !0)),
                "y" !== tw && ((tR[2] += t), tT._vx.update(t, !0)),
                "x" !== tw && ((tF[2] += e), tT._vy.update(e, !0)),
                y ? tm || (tm = requestAnimationFrame(tB)) : tB();
            },
            tU = function (t) {
              if (!tI(t, 1)) {
                var e = (t = Y(t, b)).clientX,
                  n = t.clientY,
                  i = e - tT.x,
                  o = n - tT.y,
                  a = tT.isDragging;
                (tT.x = e),
                  (tT.y = n),
                  (a ||
                    ((i || o) &&
                      (Math.abs(tT.startX - e) >= r ||
                        Math.abs(tT.startY - n) >= r))) &&
                    ((tv = a ? 2 : 1), a || (tT.isDragging = !0), tX(i, o));
              }
            },
            tq = (tT.onPress = function (t) {
              tI(t, 1) ||
                (t && t.button) ||
                ((tT.axis = tw = null),
                t_.pause(),
                (tT.isPressed = !0),
                (t = Y(t)),
                (tk = tO = 0),
                (tT.startX = tT.x = t.clientX),
                (tT.startY = tT.y = t.clientY),
                tT._vx.reset(),
                tT._vy.reset(),
                M(ti ? m : tz, d[1], tU, tM, !0),
                (tT.deltaX = tT.deltaY = 0),
                q && q(tT));
            }),
            tj = (tT.onRelease = function (t) {
              if (!tI(t, 1)) {
                A(ti ? m : tz, d[1], tU, !0);
                var e = !isNaN(tT.y - tT.startY),
                  r = tT.isDragging,
                  i =
                    r &&
                    (Math.abs(tT.x - tT.startX) > 3 ||
                      Math.abs(tT.y - tT.startY) > 3),
                  a = Y(t);
                !i &&
                  e &&
                  (tT._vx.reset(),
                  tT._vy.reset(),
                  b &&
                    tp &&
                    n.delayedCall(0.08, function () {
                      if (x() - tL > 300 && !t.defaultPrevented) {
                        if (t.target.click) t.target.click();
                        else if (tz.createEvent) {
                          var e = tz.createEvent("MouseEvents");
                          e.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            o,
                            1,
                            a.screenX,
                            a.screenY,
                            a.clientX,
                            a.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            t.target.dispatchEvent(e);
                        }
                      }
                    })),
                  (tT.isDragging = tT.isGesturing = tT.isPressed = !1),
                  w && r && !ti && t_.restart(!0),
                  tv && tB(),
                  X && r && X(tT),
                  j && j(tT, i);
              }
            }),
            tW = function (t) {
              return (
                t.touches &&
                t.touches.length > 1 &&
                (tT.isGesturing = !0) &&
                to(t, tT.isDragging)
              );
            },
            tH = function () {
              return (tT.isGesturing = !1), ta(tT);
            },
            tV = function (t) {
              if (!tI(t)) {
                var e = tA(),
                  r = tE();
                tN((e - tC) * tf, (r - tS) * tf, 1),
                  (tC = e),
                  (tS = r),
                  w && t_.restart(!0);
              }
            },
            tG = function (t) {
              if (!tI(t)) {
                (t = Y(t, b)), ts && (tb = !0);
                var e =
                  (1 === t.deltaMode
                    ? _
                    : 2 === t.deltaMode
                    ? o.innerHeight
                    : 1) * E;
                tN(t.deltaX * e, t.deltaY * e, 0), w && !ti && t_.restart(!0);
              }
            },
            t$ = function (t) {
              if (!tI(t)) {
                var e = t.clientX,
                  r = t.clientY,
                  n = e - tT.x,
                  i = r - tT.y;
                (tT.x = e),
                  (tT.y = r),
                  (ty = !0),
                  w && t_.restart(!0),
                  (n || i) && tX(n, i);
              }
            },
            tQ = function (t) {
              (tT.event = t), tt(tT);
            },
            tZ = function (t) {
              (tT.event = t), te(tT);
            },
            tJ = function (t) {
              return tI(t) || (Y(t, b) && tc(tT));
            };
          (t_ = tT._dc =
            n
              .delayedCall(T || 0.25, function () {
                tT._vx.reset(), tT._vy.reset(), t_.pause(), w && w(tT);
              })
              .pause()),
            (tT.deltaX = tT.deltaY = 0),
            (tT._vx = L(0, 50, !0)),
            (tT._vy = L(0, 50, !0)),
            (tT.scrollX = tA),
            (tT.scrollY = tE),
            (tT.isDragging = tT.isGesturing = tT.isPressed = !1),
            g(this),
            (tT.enable = function (t) {
              return (
                !tT.isEnabled &&
                  (M(tD ? tz : m, "scroll", S),
                  h.indexOf("scroll") >= 0 &&
                    M(tD ? tz : m, "scroll", tV, tM, th),
                  h.indexOf("wheel") >= 0 && M(m, "wheel", tG, tM, th),
                  ((h.indexOf("touch") >= 0 && l) ||
                    h.indexOf("pointer") >= 0) &&
                    (M(m, d[0], tq, tM, th),
                    M(tz, d[2], tj),
                    M(tz, d[3], tj),
                    tp && M(m, "click", tY, !0, !0),
                    tc && M(m, "click", tJ),
                    to && M(tz, "gesturestart", tW),
                    ta && M(tz, "gestureend", tH),
                    tt && M(m, c + "enter", tQ),
                    te && M(m, c + "leave", tZ),
                    tr && M(m, c + "move", t$)),
                  (tT.isEnabled = !0),
                  (tT.isDragging =
                    tT.isGesturing =
                    tT.isPressed =
                    ty =
                    tv =
                      !1),
                  tT._vx.reset(),
                  tT._vy.reset(),
                  (tC = tA()),
                  (tS = tE()),
                  t && t.type && tq(t),
                  tu && tu(tT)),
                tT
              );
            }),
            (tT.disable = function () {
              tT.isEnabled &&
                (v.filter(function (t) {
                  return t !== tT && O(t.target);
                }).length || A(tD ? tz : m, "scroll", S),
                tT.isPressed &&
                  (tT._vx.reset(),
                  tT._vy.reset(),
                  A(ti ? m : tz, d[1], tU, !0)),
                A(tD ? tz : m, "scroll", tV, th),
                A(m, "wheel", tG, th),
                A(m, d[0], tq, th),
                A(tz, d[2], tj),
                A(tz, d[3], tj),
                A(m, "click", tY, !0),
                A(m, "click", tJ),
                A(tz, "gesturestart", tW),
                A(tz, "gestureend", tH),
                A(m, c + "enter", tQ),
                A(m, c + "leave", tZ),
                A(m, c + "move", t$),
                (tT.isEnabled = tT.isPressed = tT.isDragging = !1),
                tl && tl(tT));
            }),
            (tT.kill = tT.revert =
              function () {
                tT.disable();
                var t = v.indexOf(tT);
                t >= 0 && v.splice(t, 1), p === tT && (p = 0);
              }),
            v.push(tT),
            ti && O(m) && (p = tT),
            tT.enable(C);
        }),
        (t = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        })(e.prototype, t),
        e
      );
    })()).version = "3.12.7"),
    (X.create = function (t) {
      return new X(t);
    }),
    (X.register = N),
    (X.getAll = function () {
      return v.slice();
    }),
    (X.getById = function (t) {
      return v.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    m() && n.registerPlugin(X),
    (tM = 1),
    (tE = (tA = Date.now)()),
    (tC = 0),
    (tS = 0),
    (tP = function (t, e, r) {
      var n = tW(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
      return (r["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
    }),
    (tD = function (t, e) {
      return e && (!tW(t) || "clamp(" !== t.substr(0, 6))
        ? "clamp(" + t + ")"
        : t;
    }),
    (tz = function () {
      return (te = 1);
    }),
    (tR = function () {
      return (te = 0);
    }),
    (tF = function (t) {
      return t;
    }),
    (tL = function (t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    }),
    (tY = function () {
      return "undefined" != typeof window;
    }),
    (tI = function () {
      return U || (tY() && (U = window.gsap) && U.registerPlugin && U);
    }),
    (tB = function (t) {
      return !!~G.indexOf(t);
    }),
    (tN = function (t) {
      return (
        ("Height" === t ? tv : j["inner" + t]) ||
        H["client" + t] ||
        V["client" + t]
      );
    }),
    (tX = function (t) {
      return (
        k(t, "getBoundingClientRect") ||
        (tB(t)
          ? function () {
              return (eV.width = j.innerWidth), (eV.height = tv), eV;
            }
          : function () {
              return en(t);
            })
      );
    }),
    (tU = function (t, e, r) {
      var n = r.d,
        i = r.d2,
        o = r.a;
      return (o = k(t, "getBoundingClientRect"))
        ? function () {
            return o()[n];
          }
        : function () {
            return (e ? tN(i) : t["client" + i]) || 0;
          };
    }),
    (tq = function (t, e) {
      var r = e.s,
        n = e.d2,
        i = e.d,
        o = e.a;
      return Math.max(
        0,
        (o = k(t, (r = "scroll" + n)))
          ? o() - tX(t)()[i]
          : tB(t)
          ? (H[r] || V[r]) - tN(n)
          : t[r] - t["offset" + n]
      );
    }),
    (tj = function (t, e) {
      for (var r = 0; r < ta.length; r += 3)
        (!e || ~e.indexOf(ta[r + 1])) && t(ta[r], ta[r + 1], ta[r + 2]);
    }),
    (tW = function (t) {
      return "string" == typeof t;
    }),
    (tH = function (t) {
      return "function" == typeof t;
    }),
    (tV = function (t) {
      return "number" == typeof t;
    }),
    (tG = function (t) {
      return "object" == typeof t;
    }),
    (t$ = function (t, e, r) {
      return t && t.progress(+!e) && r && t.pause();
    }),
    (tQ = function (t, e) {
      if (t.enabled) {
        var r = t._ctx
          ? t._ctx.add(function () {
              return e(t);
            })
          : e(t);
        r && r.totalTime && (t.callbackAnimation = r);
      }
    }),
    (tZ = Math.abs),
    (tJ = "left"),
    (tK = "right"),
    (t0 = "bottom"),
    (t1 = "width"),
    (t2 = "height"),
    (t5 = "Right"),
    (t3 = "Left"),
    (t8 = "Bottom"),
    (t6 = "padding"),
    (t4 = "margin"),
    (t9 = "Width"),
    (t7 = "Height"),
    (et = function (t) {
      return j.getComputedStyle(t);
    }),
    (ee = function (t) {
      var e = et(t).position;
      t.style.position = "absolute" === e || "fixed" === e ? e : "relative";
    }),
    (er = function (t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t;
    }),
    (en = function (t, e) {
      var r =
          e &&
          "matrix(1, 0, 0, 1, 0, 0)" !== et(t)[tr] &&
          U.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = t.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    }),
    (ei = function (t, e) {
      var r = e.d2;
      return t["offset" + r] || t["client" + r] || 0;
    }),
    (eo = function (t) {
      var e,
        r = [],
        n = t.labels,
        i = t.duration();
      for (e in n) r.push(n[e] / i);
      return r;
    }),
    (ea = function (t) {
      var e = U.utils.snap(t),
        r =
          Array.isArray(t) &&
          t.slice(0).sort(function (t, e) {
            return t - e;
          });
      return r
        ? function (t, n, i) {
            var o;
            if ((void 0 === i && (i = 0.001), !n)) return e(t);
            if (n > 0) {
              for (t -= i, o = 0; o < r.length; o++) if (r[o] >= t) return r[o];
              return r[o - 1];
            }
            for (o = r.length, t += i; o--; ) if (r[o] <= t) return r[o];
            return r[0];
          }
        : function (r, n, i) {
            void 0 === i && (i = 0.001);
            var o = e(r);
            return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
              ? o
              : e(n < 0 ? r - t : r + t);
          };
    }),
    (es = function (t, e, r, n) {
      return r.split(",").forEach(function (r) {
        return t(e, r, n);
      });
    }),
    (eu = function (t, e, r, n, i) {
      return t.addEventListener(e, r, { passive: !n, capture: !!i });
    }),
    (el = function (t, e, r, n) {
      return t.removeEventListener(e, r, !!n);
    }),
    (ec = function (t, e, r) {
      (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
    }),
    (ef = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    }),
    (eh = { toggleActions: "play", anticipatePin: 0 }),
    (ep = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }),
    (ed = function (t, e) {
      if (tW(t)) {
        var r = t.indexOf("="),
          n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
        ~r && (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
          (t =
            n +
            (t in ep
              ? ep[t] * e
              : ~t.indexOf("%")
              ? (parseFloat(t) * e) / 100
              : parseFloat(t) || 0));
      }
      return t;
    }),
    (eg = function (t, e, r, n, i, o, a, s) {
      var u = i.startColor,
        l = i.endColor,
        c = i.fontSize,
        f = i.indent,
        h = i.fontWeight,
        p = W.createElement("div"),
        d = tB(r) || "fixed" === k(r, "pinType"),
        g = -1 !== t.indexOf("scroller"),
        m = d ? V : r,
        _ = -1 !== t.indexOf("start"),
        v = _ ? u : l,
        y =
          "border-color:" +
          v +
          ";font-size:" +
          c +
          ";color:" +
          v +
          ";font-weight:" +
          h +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (y += "position:" + ((g || s) && d ? "fixed;" : "absolute;")),
        (g || s || !d) &&
          (y += (n === z ? tK : t0) + ":" + (o + parseFloat(f)) + "px;"),
        a &&
          (y +=
            "box-sizing:border-box;text-align:left;width:" +
            a.offsetWidth +
            "px;"),
        (p._isStart = _),
        p.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        (p.style.cssText = y),
        (p.innerText = e || 0 === e ? t + "-" + e : t),
        m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
        (p._offset = p["offset" + n.op.d2]),
        em(p, 0, n, _),
        p
      );
    }),
    (em = function (t, e, r, n) {
      var i = { display: "block" },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (t._isFlipped = n),
        (i[r.a + "Percent"] = n ? -100 : 0),
        (i[r.a] = n ? "1px" : 0),
        (i["border" + o + t9] = 1),
        (i["border" + a + t9] = 0),
        (i[r.p] = e + "px"),
        U.set(t, i);
    }),
    (e_ = []),
    (ev = {}),
    (ey = function () {
      return tA() - tC > 34 && (tw || (tw = requestAnimationFrame(eI)));
    }),
    (eb = function () {
      (tc && tc.isPressed && !(tc.startX > V.clientWidth)) ||
        (y.cache++,
        tc ? tw || (tw = requestAnimationFrame(eI)) : eI(),
        tC || eM("scrollStart"),
        (tC = tA()));
    }),
    (ex = function () {
      (tp = j.innerWidth), (th = j.innerHeight);
    }),
    (ew = function (t) {
      y.cache++,
        (!0 === t ||
          (!tt &&
            !tl &&
            !W.fullscreenElement &&
            !W.webkitFullscreenElement &&
            (!tf ||
              tp !== j.innerWidth ||
              Math.abs(j.innerHeight - th) > 0.25 * j.innerHeight))) &&
          $.restart(!0);
    }),
    (eT = {}),
    (ek = []),
    (eO = function t() {
      return el(e0, "scrollEnd", t) || eF(!0);
    }),
    (eM = function (t) {
      return (
        (eT[t] &&
          eT[t].map(function (t) {
            return t();
          })) ||
        ek
      );
    }),
    (eA = []),
    (eE = function (t) {
      for (var e = 0; e < eA.length; e += 5)
        (!t || (eA[e + 4] && eA[e + 4].query === t)) &&
          ((eA[e].style.cssText = eA[e + 1]),
          eA[e].getBBox && eA[e].setAttribute("transform", eA[e + 2] || ""),
          (eA[e + 3].uncache = 1));
    }),
    (eC = function (t, e) {
      var r;
      for (tn = 0; tn < e_.length; tn++)
        (r = e_[tn]) &&
          (!e || r._ctx === e) &&
          (t ? r.kill(1) : r.revert(!0, !0));
      (ty = !0), e && eE(e), e || eM("revert");
    }),
    (eS = function (t, e) {
      y.cache++,
        (e || !tT) &&
          y.forEach(function (t) {
            return tH(t) && t.cacheID++ && (t.rec = 0);
          }),
        tW(t) && (j.history.scrollRestoration = tm = t);
    }),
    (eP = 0),
    (eD = function () {
      if (tk !== eP) {
        var t = (tk = eP);
        requestAnimationFrame(function () {
          return t === eP && eF(!0);
        });
      }
    }),
    (ez = function () {
      V.appendChild(t_),
        (tv = (!tc && t_.offsetHeight) || j.innerHeight),
        V.removeChild(t_);
    }),
    (eR = function (t) {
      return Q(
        ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
      ).forEach(function (e) {
        return (e.style.display = t ? "none" : "block");
      });
    }),
    (eF = function (t, e) {
      if (
        ((H = W.documentElement),
        (V = W.body),
        (G = [j, W, H, V]),
        tC && !t && !ty)
      ) {
        eu(e0, "scrollEnd", eO);
        return;
      }
      ez(),
        (tT = e0.isRefreshing = !0),
        y.forEach(function (t) {
          return tH(t) && ++t.cacheID && (t.rec = t());
        });
      var r = eM("refreshInit");
      ts && e0.sort(),
        e || eC(),
        y.forEach(function (t) {
          tH(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
        }),
        e_.slice(0).forEach(function (t) {
          return t.refresh();
        }),
        (ty = !1),
        e_.forEach(function (t) {
          if (t._subPinOffset && t.pin) {
            var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
              r = t.pin[e];
            t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh();
          }
        }),
        (tb = 1),
        eR(!0),
        e_.forEach(function (t) {
          var e = tq(t.scroller, t._dir),
            r = "max" === t.vars.end || (t._endClamp && t.end > e),
            n = t._startClamp && t.start >= e;
          (r || n) &&
            t.setPositions(
              n ? e - 1 : t.start,
              r ? Math.max(n ? e : t.start + 1, e) : t.end,
              !0
            );
        }),
        eR(!1),
        (tb = 0),
        r.forEach(function (t) {
          return t && t.render && t.render(-1);
        }),
        y.forEach(function (t) {
          tH(t) &&
            (t.smooth &&
              requestAnimationFrame(function () {
                return (t.target.style.scrollBehavior = "smooth");
              }),
            t.rec && t(t.rec));
        }),
        eS(tm, 1),
        $.pause(),
        eP++,
        (tT = 2),
        eI(2),
        e_.forEach(function (t) {
          return tH(t.vars.onRefresh) && t.vars.onRefresh(t);
        }),
        (tT = e0.isRefreshing = !1),
        eM("refresh");
    }),
    (eL = 0),
    (eY = 1),
    (eI = function (t) {
      if (2 === t || (!tT && !ty)) {
        (e0.isUpdating = !0), tO && tO.update(0);
        var e = e_.length,
          r = tA(),
          n = r - tE >= 50,
          i = e && e_[0].scroll();
        if (
          ((eY = eL > i ? -1 : 1),
          tT || (eL = i),
          n &&
            (tC && !te && r - tC > 200 && ((tC = 0), eM("scrollEnd")),
            (J = tE),
            (tE = r)),
          eY < 0)
        ) {
          for (tn = e; tn-- > 0; ) e_[tn] && e_[tn].update(0, n);
          eY = 1;
        } else for (tn = 0; tn < e; tn++) e_[tn] && e_[tn].update(0, n);
        e0.isUpdating = !1;
      }
      tw = 0;
    }),
    (eN = (eB = [
      tJ,
      "top",
      t0,
      tK,
      t4 + t8,
      t4 + t5,
      t4 + "Top",
      t4 + t3,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ]).concat([
      t1,
      t2,
      "boxSizing",
      "max" + t9,
      "max" + t7,
      "position",
      t4,
      t6,
      t6 + "Top",
      t6 + t5,
      t6 + t8,
      t6 + t3,
    ])),
    (eX = function (t, e, r) {
      ej(r);
      var n = t._gsap;
      if (n.spacerIsNative) ej(n.spacerState);
      else if (t._gsap.swappedIn) {
        var i = e.parentNode;
        i && (i.insertBefore(t, e), i.removeChild(e));
      }
      t._gsap.swappedIn = !1;
    }),
    (eU = function (t, e, r, n) {
      if (!t._gsap.swappedIn) {
        for (var i, o = eB.length, a = e.style, s = t.style; o--; )
          a[(i = eB[o])] = r[i];
        (a.position = "absolute" === r.position ? "absolute" : "relative"),
          "inline" === r.display && (a.display = "inline-block"),
          (s[t0] = s[tK] = "auto"),
          (a.flexBasis = r.flexBasis || "auto"),
          (a.overflow = "visible"),
          (a.boxSizing = "border-box"),
          (a[t1] = ei(t, D) + "px"),
          (a[t2] = ei(t, z) + "px"),
          (a[t6] = s[t4] = s.top = s[tJ] = "0"),
          ej(n),
          (s[t1] = s["max" + t9] = r[t1]),
          (s[t2] = s["max" + t7] = r[t2]),
          (s[t6] = r[t6]),
          t.parentNode !== e &&
            (t.parentNode.insertBefore(e, t), e.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    }),
    (eq = /([A-Z])/g),
    (ej = function (t) {
      if (t) {
        var e,
          r,
          n = t.t.style,
          i = t.length,
          o = 0;
        for ((t.t._gsap || U.core.getCache(t.t)).uncache = 1; o < i; o += 2)
          (r = t[o + 1]),
            (e = t[o]),
            r
              ? (n[e] = r)
              : n[e] && n.removeProperty(e.replace(eq, "-$1").toLowerCase());
      }
    }),
    (eW = function (t) {
      for (var e = eN.length, r = t.style, n = [], i = 0; i < e; i++)
        n.push(eN[i], r[eN[i]]);
      return (n.t = t), n;
    }),
    (eH = function (t, e, r) {
      for (var n, i = [], o = t.length, a = 8 * !!r; a < o; a += 2)
        (n = t[a]), i.push(n, n in e ? e[n] : t[a + 1]);
      return (i.t = t.t), i;
    }),
    (eV = { left: 0, top: 0 }),
    (eG = function (t, e, r, n, i, o, a, s, u, l, c, f, h, p) {
      tH(t) && (t = t(s)),
        tW(t) &&
          "max" === t.substr(0, 3) &&
          (t = f + ("=" === t.charAt(4) ? ed("0" + t.substr(3), r) : 0));
      var d,
        g,
        m,
        _ = h ? h.time() : 0;
      if ((h && h.seek(0), isNaN(t) || (t *= 1), tV(t)))
        h &&
          (t = U.utils.mapRange(
            h.scrollTrigger.start,
            h.scrollTrigger.end,
            0,
            f,
            t
          )),
          a && em(a, r, n, !0);
      else {
        tH(e) && (e = e(s));
        var v,
          y,
          b,
          x,
          w = (t || "0").split(" ");
        (v = en((m = R(e, s) || V)) || {}).left ||
          v.top ||
          "none" !== et(m).display ||
          ((x = m.style.display),
          (m.style.display = "block"),
          (v = en(m)),
          x ? (m.style.display = x) : m.style.removeProperty("display")),
          (y = ed(w[0], v[n.d])),
          (b = ed(w[1] || "0", r)),
          (t = v[n.p] - u[n.p] - l + y + i - b),
          a && em(a, b, n, r - b < 20 || (a._isStart && b > 20)),
          (r -= r - b);
      }
      if ((p && ((s[p] = t || -0.001), t < 0 && (t = 0)), o)) {
        var T = t + r,
          k = o._isStart;
        (d = "scroll" + n.d2),
          em(
            o,
            T,
            n,
            (k && T > 20) ||
              (!k && (c ? Math.max(V[d], H[d]) : o.parentNode[d]) <= T + 1)
          ),
          c &&
            ((u = en(a)),
            c && (o.style[n.op.p] = u[n.op.p] - n.op.m - o._offset + "px"));
      }
      return (
        h &&
          m &&
          ((d = en(m)),
          h.seek(f),
          (g = en(m)),
          (h._caScrollDist = d[n.p] - g[n.p]),
          (t = (t / h._caScrollDist) * f)),
        h && h.seek(_),
        h ? t : Math.round(t)
      );
    }),
    (e$ = /(webkit|moz|length|cssText|inset)/i),
    (eQ = function (t, e, r, n) {
      if (t.parentNode !== e) {
        var i,
          o,
          a = t.style;
        if (e === V) {
          for (i in ((t._stOrig = a.cssText), (o = et(t))))
            +i ||
              e$.test(i) ||
              !o[i] ||
              "string" != typeof a[i] ||
              "0" === i ||
              (a[i] = o[i]);
          (a.top = r), (a.left = n);
        } else a.cssText = t._stOrig;
        (U.core.getCache(t).uncache = 1), e.appendChild(t);
      }
    }),
    (eZ = function (t, e, r) {
      var n = e,
        i = n;
      return function (e) {
        var o = Math.round(t());
        return (
          o !== n &&
            o !== i &&
            Math.abs(o - n) > 3 &&
            Math.abs(o - i) > 3 &&
            ((e = o), r && r()),
          (i = n),
          (n = Math.round(e))
        );
      };
    }),
    (eJ = function (t, e, r) {
      var n = {};
      (n[e.p] = "+=" + r), U.set(t, n);
    }),
    (eK = function (t, e) {
      var r = F(t, e),
        n = "_scroll" + e.p2,
        i = function e(i, o, a, s, u) {
          var l = e.tween,
            c = o.onComplete,
            f = {};
          a = a || r();
          var h = eZ(r, a, function () {
            l.kill(), (e.tween = 0);
          });
          return (
            (u = (s && u) || 0),
            (s = s || i - a),
            l && l.kill(),
            (o[n] = i),
            (o.inherit = !1),
            (o.modifiers = f),
            (f[n] = function () {
              return h(a + s * l.ratio + u * l.ratio * l.ratio);
            }),
            (o.onUpdate = function () {
              y.cache++, e.tween && eI();
            }),
            (o.onComplete = function () {
              (e.tween = 0), c && c.call(l);
            }),
            (l = e.tween = U.to(t, o))
          );
        };
      return (
        (t[n] = r),
        (r.wheelHandler = function () {
          return i.tween && i.tween.kill() && (i.tween = 0);
        }),
        eu(t, "wheel", r.wheelHandler),
        e0.isTouch && eu(t, "touchmove", r.wheelHandler),
        i
      );
    }),
    ((e0 = (function () {
      function t(e, r) {
        q ||
          t.register(U) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          tg(this),
          this.init(e, r);
      }
      return (
        (t.prototype.init = function (e, r) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !tS)
          ) {
            this.update = this.refresh = this.kill = tF;
            return;
          }
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            p,
            d,
            g,
            m,
            _,
            v,
            x,
            w,
            T,
            O,
            M,
            A,
            E,
            C,
            S,
            P,
            L,
            Y,
            I,
            B,
            N,
            X,
            q,
            G,
            $,
            K,
            tr,
            ti,
            to,
            ta,
            tl,
            tc = (e = er(
              tW(e) || tV(e) || e.nodeType ? { trigger: e } : e,
              eh
            )),
            tf = tc.onUpdate,
            th = tc.toggleClass,
            tp = tc.id,
            td = tc.onToggle,
            tg = tc.onRefresh,
            tm = tc.scrub,
            t_ = tc.trigger,
            tv = tc.pin,
            ty = tc.pinSpacing,
            tw = tc.invalidateOnRefresh,
            tk = tc.anticipatePin,
            tE = tc.onScrubComplete,
            tz = tc.onSnapComplete,
            tR = tc.once,
            tY = tc.snap,
            tI = tc.pinReparent,
            tN = tc.pinSpacer,
            tj = tc.containerAnimation,
            tJ = tc.fastScrollEnd,
            tK = tc.preventOverlaps,
            t0 =
              e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                ? D
                : z,
            es = !tm && 0 !== tm,
            ec = R(e.scroller || j),
            ep = U.core.getCache(ec),
            em = tB(ec),
            ey =
              ("pinType" in e
                ? e.pinType
                : k(ec, "pinType") || (em && "fixed")) === "fixed",
            ex = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            eT = es && e.toggleActions.split(" "),
            ek = "markers" in e ? e.markers : eh.markers,
            eM = em ? 0 : parseFloat(et(ec)["border" + t0.p2 + t9]) || 0,
            eA = this,
            eE =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(eA);
              },
            eC = tU(ec, em, t0),
            eS =
              !em || ~b.indexOf(ec)
                ? tX(ec)
                : function () {
                    return eV;
                  },
            eP = 0,
            ez = 0,
            eR = 0,
            eF = F(ec, t0);
          if (
            ((eA._startClamp = eA._endClamp = !1),
            (eA._dir = t0),
            (tk *= 45),
            (eA.scroller = ec),
            (eA.scroll = tj ? tj.time.bind(tj) : eF),
            (u = eF()),
            (eA.vars = e),
            (r = r || e.animation),
            "refreshPriority" in e &&
              ((ts = 1), -9999 === e.refreshPriority && (tO = eA)),
            (ep.tweenScroll = ep.tweenScroll || {
              top: eK(ec, z),
              left: eK(ec, D),
            }),
            (eA.tweenTo = o = ep.tweenScroll[t0.p]),
            (eA.scrubDuration = function (t) {
              ($ = tV(t) && t)
                ? G
                  ? G.duration(t)
                  : (G = U.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: $,
                      paused: !0,
                      onComplete: function () {
                        return tE && tE(eA);
                      },
                    }))
                : (G && G.progress(1).kill(), (G = 0));
            }),
            r &&
              ((r.vars.lazy = !1),
              (r._initted && !eA.isReverted) ||
                (!1 !== r.vars.immediateRender &&
                  !1 !== e.immediateRender &&
                  r.duration() &&
                  r.render(0, !0, !0)),
              (eA.animation = r.pause()),
              (r.scrollTrigger = eA),
              eA.scrubDuration(tm),
              (X = 0),
              tp || (tp = r.vars.id)),
            tY &&
              ((!tG(tY) || tY.push) && (tY = { snapTo: tY }),
              "scrollBehavior" in V.style &&
                U.set(em ? [V, H] : ec, { scrollBehavior: "auto" }),
              y.forEach(function (t) {
                return (
                  tH(t) &&
                  t.target === (em ? W.scrollingElement || H : ec) &&
                  (t.smooth = !1)
                );
              }),
              (s = tH(tY.snapTo)
                ? tY.snapTo
                : "labels" === tY.snapTo
                ? ((n = r),
                  function (t) {
                    return U.utils.snap(eo(n), t);
                  })
                : "labelsDirectional" === tY.snapTo
                ? ((i = r),
                  function (t, e) {
                    return ea(eo(i))(t, e.direction);
                  })
                : !1 !== tY.directional
                ? function (t, e) {
                    return ea(tY.snapTo)(t, tA() - ez < 500 ? 0 : e.direction);
                  }
                : U.utils.snap(tY.snapTo)),
              (K = tG((K = tY.duration || { min: 0.1, max: 2 }))
                ? Z(K.min, K.max)
                : Z(K, K)),
              (tr = U.delayedCall(tY.delay || $ / 2 || 0.1, function () {
                var t = eF(),
                  e = tA() - ez < 500,
                  n = o.tween;
                if (
                  (e || 10 > Math.abs(eA.getVelocity())) &&
                  !n &&
                  !te &&
                  eP !== t
                ) {
                  var i,
                    a,
                    u = (t - c) / v,
                    l = r && !es ? r.totalProgress() : u,
                    h = e ? 0 : ((l - q) / (tA() - J)) * 1e3 || 0,
                    p = U.utils.clamp(-u, 1 - u, (tZ(h / 2) * h) / 0.185),
                    d = u + (!1 === tY.inertia ? 0 : p),
                    g = tY,
                    m = g.onStart,
                    _ = g.onInterrupt,
                    y = g.onComplete;
                  if (
                    (tV((i = s(d, eA))) || (i = d),
                    (a = Math.max(0, Math.round(c + i * v))),
                    t <= f && t >= c && a !== t)
                  ) {
                    if (n && !n._initted && n.data <= tZ(a - t)) return;
                    !1 === tY.inertia && (p = i - u),
                      o(
                        a,
                        {
                          duration: K(
                            tZ(
                              (0.185 * Math.max(tZ(d - l), tZ(i - l))) /
                                h /
                                0.05 || 0
                            )
                          ),
                          ease: tY.ease || "power3",
                          data: tZ(a - t),
                          onInterrupt: function () {
                            return tr.restart(!0) && _ && _(eA);
                          },
                          onComplete: function () {
                            eA.update(),
                              (eP = eF()),
                              r &&
                                !es &&
                                (G
                                  ? G.resetTo(
                                      "totalProgress",
                                      i,
                                      r._tTime / r._tDur
                                    )
                                  : r.progress(i)),
                              (X = q =
                                r && !es ? r.totalProgress() : eA.progress),
                              tz && tz(eA),
                              y && y(eA);
                          },
                        },
                        t,
                        p * v,
                        a - t - p * v
                      ),
                      m && m(eA, o.tween);
                  }
                } else eA.isActive && eP !== t && tr.restart(!0);
              }).pause())),
            tp && (ev[tp] = eA),
            (tl =
              (t_ = eA.trigger = R(t_ || (!0 !== tv && tv))) &&
              t_._gsap &&
              t_._gsap.stRevert) && (tl = tl(eA)),
            (tv = !0 === tv ? t_ : R(tv)),
            tW(th) && (th = { targets: t_, className: th }),
            tv &&
              (!1 === ty ||
                ty === t4 ||
                (ty =
                  (!!ty ||
                    !tv.parentNode ||
                    !tv.parentNode.style ||
                    "flex" !== et(tv.parentNode).display) &&
                  t6),
              (eA.pin = tv),
              (a = U.core.getCache(tv)).spacer
                ? (x = a.pinState)
                : (tN &&
                    ((tN = R(tN)) &&
                      !tN.nodeType &&
                      (tN = tN.current || tN.nativeElement),
                    (a.spacerIsNative = !!tN),
                    tN && (a.spacerState = eW(tN))),
                  (a.spacer = O = tN || W.createElement("div")),
                  O.classList.add("pin-spacer"),
                  tp && O.classList.add("pin-spacer-" + tp),
                  (a.pinState = x = eW(tv))),
              !1 !== e.force3D && U.set(tv, { force3D: !0 }),
              (eA.spacer = O = a.spacer),
              (P = (N = et(tv))[ty + t0.os2]),
              (A = U.getProperty(tv)),
              (E = U.quickSetter(tv, t0.a, "px")),
              eU(tv, O, N),
              (T = eW(tv))),
            ek)
          ) {
            (m = tG(ek) ? er(ek, ef) : ef),
              (d = eg("scroller-start", tp, ec, t0, m, 0)),
              (g = eg("scroller-end", tp, ec, t0, m, 0, d)),
              (M = d["offset" + t0.op.d2]);
            var eL = R(k(ec, "content") || ec);
            (h = this.markerStart = eg("start", tp, eL, t0, m, M, 0, tj)),
              (p = this.markerEnd = eg("end", tp, eL, t0, m, M, 0, tj)),
              tj && (ta = U.quickSetter([h, p], t0.a, "px")),
              ey ||
                (b.length && !0 === k(ec, "fixedMarkers")) ||
                (ee(em ? V : ec),
                U.set([d, g], { force3D: !0 }),
                (Y = U.quickSetter(d, t0.a, "px")),
                (B = U.quickSetter(g, t0.a, "px")));
          }
          if (tj) {
            var eI = tj.vars.onUpdate,
              eB = tj.vars.onUpdateParams;
            tj.eventCallback("onUpdate", function () {
              eA.update(0, 0, 1), eI && eI.apply(tj, eB || []);
            });
          }
          if (
            ((eA.previous = function () {
              return e_[e_.indexOf(eA) - 1];
            }),
            (eA.next = function () {
              return e_[e_.indexOf(eA) + 1];
            }),
            (eA.revert = function (t, e) {
              if (!e) return eA.kill(!0);
              var n = !1 !== t || !eA.enabled,
                i = tt;
              n !== eA.isReverted &&
                (n &&
                  ((ti = Math.max(eF(), eA.scroll.rec || 0)),
                  (eR = eA.progress),
                  (to = r && r.progress())),
                h &&
                  [h, p, d, g].forEach(function (t) {
                    return (t.style.display = n ? "none" : "block");
                  }),
                n && ((tt = eA), eA.update(n)),
                !tv ||
                  (tI && eA.isActive) ||
                  (n ? eX(tv, O, x) : eU(tv, O, et(tv), L)),
                n || eA.update(n),
                (tt = i),
                (eA.isReverted = n));
            }),
            (eA.refresh = function (n, i, a, s) {
              if ((!tt && eA.enabled) || i) {
                if (tv && n && tC) {
                  eu(t, "scrollEnd", eO);
                  return;
                }
                !tT && eE && eE(eA),
                  (tt = eA),
                  o.tween && !a && (o.tween.kill(), (o.tween = 0)),
                  G && G.pause(),
                  tw && r && r.revert({ kill: !1 }).invalidate(),
                  eA.isReverted || eA.revert(!0, !0),
                  (eA._subPinOffset = !1);
                var m,
                  y,
                  b,
                  k,
                  M,
                  E,
                  P,
                  Y,
                  B,
                  N,
                  X,
                  q,
                  j,
                  $ = eC(),
                  Q = eS(),
                  Z = tj ? tj.duration() : tq(ec, t0),
                  J = v <= 0.01,
                  K = 0,
                  te = s || 0,
                  tn = tG(a) ? a.end : e.end,
                  ta = e.endTrigger || t_,
                  ts = tG(a)
                    ? a.start
                    : e.start ||
                      (0 !== e.start && t_ ? (tv ? "0 0" : "0 100%") : 0),
                  tl = (eA.pinnedContainer =
                    e.pinnedContainer && R(e.pinnedContainer, eA)),
                  tc = (t_ && Math.max(0, e_.indexOf(eA))) || 0,
                  tf = tc;
                for (
                  ek &&
                  tG(a) &&
                  ((q = U.getProperty(d, t0.p)), (j = U.getProperty(g, t0.p)));
                  tf-- > 0;

                )
                  (E = e_[tf]).end || E.refresh(0, 1) || (tt = eA),
                    (P = E.pin) &&
                      (P === t_ || P === tv || P === tl) &&
                      !E.isReverted &&
                      (N || (N = []), N.unshift(E), E.revert(!0, !0)),
                    E !== e_[tf] && (tc--, tf--);
                for (
                  tH(ts) && (ts = ts(eA)),
                    c =
                      eG(
                        (ts = tP(ts, "start", eA)),
                        t_,
                        $,
                        t0,
                        eF(),
                        h,
                        d,
                        eA,
                        Q,
                        eM,
                        ey,
                        Z,
                        tj,
                        eA._startClamp && "_startClamp"
                      ) || (tv ? -0.001 : 0),
                    tH(tn) && (tn = tn(eA)),
                    tW(tn) &&
                      !tn.indexOf("+=") &&
                      (~tn.indexOf(" ")
                        ? (tn = (tW(ts) ? ts.split(" ")[0] : "") + tn)
                        : ((K = ed(tn.substr(2), $)),
                          (tn = tW(ts)
                            ? ts
                            : (tj
                                ? U.utils.mapRange(
                                    0,
                                    tj.duration(),
                                    tj.scrollTrigger.start,
                                    tj.scrollTrigger.end,
                                    c
                                  )
                                : c) + K),
                          (ta = t_))),
                    tn = tP(tn, "end", eA),
                    f =
                      Math.max(
                        c,
                        eG(
                          tn || (ta ? "100% 0" : Z),
                          ta,
                          $,
                          t0,
                          eF() + K,
                          p,
                          g,
                          eA,
                          Q,
                          eM,
                          ey,
                          Z,
                          tj,
                          eA._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    K = 0,
                    tf = tc;
                  tf--;

                )
                  (P = (E = e_[tf]).pin) &&
                    E.start - E._pinPush <= c &&
                    !tj &&
                    E.end > 0 &&
                    ((m =
                      E.end -
                      (eA._startClamp ? Math.max(0, E.start) : E.start)),
                    ((P === t_ && E.start - E._pinPush < c) || P === tl) &&
                      isNaN(ts) &&
                      (K += m * (1 - E.progress)),
                    P === tv && (te += m));
                if (
                  ((c += K),
                  (f += K),
                  eA._startClamp && (eA._startClamp += K),
                  eA._endClamp &&
                    !tT &&
                    ((eA._endClamp = f || -0.001),
                    (f = Math.min(f, tq(ec, t0)))),
                  (v = f - c || ((c -= 0.01) && 0.001)),
                  J && (eR = U.utils.clamp(0, 1, U.utils.normalize(c, f, ti))),
                  (eA._pinPush = te),
                  h &&
                    K &&
                    (((m = {})[t0.a] = "+=" + K),
                    tl && (m[t0.p] = "-=" + eF()),
                    U.set([h, p], m)),
                  tv && !(tb && eA.end >= tq(ec, t0)))
                )
                  (m = et(tv)),
                    (k = t0 === z),
                    (b = eF()),
                    (C = parseFloat(A(t0.a)) + te),
                    !Z &&
                      f > 1 &&
                      ((X = {
                        style: (X = (em ? W.scrollingElement || H : ec).style),
                        value: X["overflow" + t0.a.toUpperCase()],
                      }),
                      em &&
                        "scroll" !== et(V)["overflow" + t0.a.toUpperCase()] &&
                        (X.style["overflow" + t0.a.toUpperCase()] = "scroll")),
                    eU(tv, O, m),
                    (T = eW(tv)),
                    (y = en(tv, !0)),
                    (Y = ey && F(ec, k ? D : z)()),
                    ty
                      ? (((L = [ty + t0.os2, v + te + "px"]).t = O),
                        (tf = ty === t6 ? ei(tv, t0) + v + te : 0) &&
                          (L.push(t0.d, tf + "px"),
                          "auto" !== O.style.flexBasis &&
                            (O.style.flexBasis = tf + "px")),
                        ej(L),
                        tl &&
                          e_.forEach(function (t) {
                            t.pin === tl &&
                              !1 !== t.vars.pinSpacing &&
                              (t._subPinOffset = !0);
                          }),
                        ey && eF(ti))
                      : (tf = ei(tv, t0)) &&
                        "auto" !== O.style.flexBasis &&
                        (O.style.flexBasis = tf + "px"),
                    ey &&
                      (((M = {
                        top: y.top + (k ? b - c : Y) + "px",
                        left: y.left + (k ? Y : b - c) + "px",
                        boxSizing: "border-box",
                        position: "fixed",
                      })[t1] = M["max" + t9] =
                        Math.ceil(y.width) + "px"),
                      (M[t2] = M["max" + t7] = Math.ceil(y.height) + "px"),
                      (M[t4] =
                        M[t4 + "Top"] =
                        M[t4 + t5] =
                        M[t4 + t8] =
                        M[t4 + t3] =
                          "0"),
                      (M[t6] = m[t6]),
                      (M[t6 + "Top"] = m[t6 + "Top"]),
                      (M[t6 + t5] = m[t6 + t5]),
                      (M[t6 + t8] = m[t6 + t8]),
                      (M[t6 + t3] = m[t6 + t3]),
                      (w = eH(x, M, tI)),
                      tT && eF(0)),
                    r
                      ? ((B = r._initted),
                        tu(1),
                        r.render(r.duration(), !0, !0),
                        (S = A(t0.a) - C + v + te),
                        (I = Math.abs(v - S) > 1),
                        ey && I && w.splice(w.length - 2, 2),
                        r.render(0, !0, !0),
                        B || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        tu(0))
                      : (S = v),
                    X &&
                      (X.value
                        ? (X.style["overflow" + t0.a.toUpperCase()] = X.value)
                        : X.style.removeProperty("overflow-" + t0.a));
                else if (t_ && eF() && !tj)
                  for (y = t_.parentNode; y && y !== V; )
                    y._pinOffset && ((c -= y._pinOffset), (f -= y._pinOffset)),
                      (y = y.parentNode);
                N &&
                  N.forEach(function (t) {
                    return t.revert(!1, !0);
                  }),
                  (eA.start = c),
                  (eA.end = f),
                  (u = l = tT ? ti : eF()),
                  tj || tT || (u < ti && eF(ti), (eA.scroll.rec = 0)),
                  eA.revert(!1, !0),
                  (ez = tA()),
                  tr && ((eP = -1), tr.restart(!0)),
                  (tt = 0),
                  r &&
                    es &&
                    (r._initted || to) &&
                    r.progress() !== to &&
                    r.progress(to || 0, !0).render(r.time(), !0, !0),
                  (J || eR !== eA.progress || tj || tw || (r && !r._initted)) &&
                    (r &&
                      !es &&
                      r.totalProgress(
                        tj && c < -0.001 && !eR
                          ? U.utils.normalize(c, f, 0)
                          : eR,
                        !0
                      ),
                    (eA.progress = J || (u - c) / v === eR ? 0 : eR)),
                  tv && ty && (O._pinOffset = Math.round(eA.progress * S)),
                  G && G.invalidate(),
                  isNaN(q) ||
                    ((q -= U.getProperty(d, t0.p)),
                    (j -= U.getProperty(g, t0.p)),
                    eJ(d, t0, q),
                    eJ(h, t0, q - (s || 0)),
                    eJ(g, t0, j),
                    eJ(p, t0, j - (s || 0))),
                  J && !tT && eA.update(),
                  !tg || tT || _ || ((_ = !0), tg(eA), (_ = !1));
              }
            }),
            (eA.getVelocity = function () {
              return ((eF() - l) / (tA() - J)) * 1e3 || 0;
            }),
            (eA.endAnimation = function () {
              t$(eA.callbackAnimation),
                r &&
                  (G
                    ? G.progress(1)
                    : r.paused()
                    ? es || t$(r, eA.direction < 0, 1)
                    : t$(r, r.reversed()));
            }),
            (eA.labelToScroll = function (t) {
              return (
                (r &&
                  r.labels &&
                  (c || eA.refresh() || c) +
                    (r.labels[t] / r.duration()) * v) ||
                0
              );
            }),
            (eA.getTrailing = function (t) {
              var e = e_.indexOf(eA),
                r =
                  eA.direction > 0 ? e_.slice(0, e).reverse() : e_.slice(e + 1);
              return (
                tW(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (t) {
                return eA.direction > 0 ? t.end <= c : t.start >= f;
              });
            }),
            (eA.update = function (t, e, n) {
              if (!tj || n || t) {
                var i,
                  a,
                  s,
                  h,
                  p,
                  g,
                  m,
                  _ = !0 === tT ? ti : eA.scroll(),
                  y = t ? 0 : (_ - c) / v,
                  b = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                  x = eA.progress;
                if (
                  (e &&
                    ((l = u),
                    (u = tj ? eF() : _),
                    tY && ((q = X), (X = r && !es ? r.totalProgress() : b))),
                  tk &&
                    tv &&
                    !tt &&
                    !tM &&
                    tC &&
                    (!b && c < _ + ((_ - l) / (tA() - J)) * tk
                      ? (b = 1e-4)
                      : 1 === b &&
                        f > _ + ((_ - l) / (tA() - J)) * tk &&
                        (b = 0.9999)),
                  b !== x && eA.enabled)
                ) {
                  if (
                    ((h =
                      (p =
                        (i = eA.isActive = !!b && b < 1) != (!!x && x < 1)) ||
                      !!b != !!x),
                    (eA.direction = b > x ? 1 : -1),
                    (eA.progress = b),
                    h &&
                      !tt &&
                      ((a = b && !x ? 0 : 1 === b ? 1 : 1 === x ? 2 : 3),
                      es &&
                        ((s =
                          (!p && "none" !== eT[a + 1] && eT[a + 1]) || eT[a]),
                        (m =
                          r && ("complete" === s || "reset" === s || s in r)))),
                    tK &&
                      (p || m) &&
                      (m || tm || !r) &&
                      (tH(tK)
                        ? tK(eA)
                        : eA.getTrailing(tK).forEach(function (t) {
                            return t.endAnimation();
                          })),
                    !es &&
                      (!G || tt || tM
                        ? r && r.totalProgress(b, !!(tt && (ez || t)))
                        : (G._dp._time - G._start !== G._time &&
                            G.render(G._dp._time - G._start),
                          G.resetTo
                            ? G.resetTo("totalProgress", b, r._tTime / r._tDur)
                            : ((G.vars.totalProgress = b),
                              G.invalidate().restart()))),
                    tv)
                  ) {
                    if ((t && ty && (O.style[ty + t0.os2] = P), ey)) {
                      if (h) {
                        if (
                          ((g =
                            !t && b > x && f + 1 > _ && _ + 1 >= tq(ec, t0)),
                          tI)
                        ) {
                          if (!t && (i || g)) {
                            var k = en(tv, !0),
                              M = _ - c;
                            eQ(
                              tv,
                              V,
                              k.top + (t0 === z ? M : 0) + "px",
                              k.left + (t0 === z ? 0 : M) + "px"
                            );
                          } else eQ(tv, O);
                        }
                        ej(i || g ? w : T),
                          (I && b < 1 && i) || E(C + (1 !== b || g ? 0 : S));
                      }
                    } else E(tL(C + S * b));
                  }
                  !tY || o.tween || tt || tM || tr.restart(!0),
                    th &&
                      (p || (tR && b && (b < 1 || !tx))) &&
                      Q(th.targets).forEach(function (t) {
                        return t.classList[i || tR ? "add" : "remove"](
                          th.className
                        );
                      }),
                    !tf || es || t || tf(eA),
                    h && !tt
                      ? (es &&
                          (m &&
                            ("complete" === s
                              ? r.pause().totalProgress(1)
                              : "reset" === s
                              ? r.restart(!0).pause()
                              : "restart" === s
                              ? r.restart(!0)
                              : r[s]()),
                          tf && tf(eA)),
                        (p || !tx) &&
                          (td && p && tQ(eA, td),
                          ex[a] && tQ(eA, ex[a]),
                          tR && (1 === b ? eA.kill(!1, 1) : (ex[a] = 0)),
                          !p && ex[(a = 1 === b ? 1 : 3)] && tQ(eA, ex[a])),
                        tJ &&
                          !i &&
                          Math.abs(eA.getVelocity()) > (tV(tJ) ? tJ : 2500) &&
                          (t$(eA.callbackAnimation),
                          G
                            ? G.progress(1)
                            : t$(r, "reverse" === s ? 1 : !b, 1)))
                      : es && tf && !tt && tf(eA);
                }
                if (B) {
                  var A = tj
                    ? (_ / tj.duration()) * (tj._caScrollDist || 0)
                    : _;
                  Y(A + +!!d._isFlipped), B(A);
                }
                ta && ta((-_ / tj.duration()) * (tj._caScrollDist || 0));
              }
            }),
            (eA.enable = function (e, r) {
              eA.enabled ||
                ((eA.enabled = !0),
                eu(ec, "resize", ew),
                em || eu(ec, "scroll", eb),
                eE && eu(t, "refreshInit", eE),
                !1 !== e && ((eA.progress = eR = 0), (u = l = eP = eF())),
                !1 !== r && eA.refresh());
            }),
            (eA.getTween = function (t) {
              return t && o ? o.tween : G;
            }),
            (eA.setPositions = function (t, e, r, n) {
              if (tj) {
                var i = tj.scrollTrigger,
                  o = tj.duration(),
                  a = i.end - i.start;
                (t = i.start + (a * t) / o), (e = i.start + (a * e) / o);
              }
              eA.refresh(
                !1,
                !1,
                {
                  start: tD(t, r && !!eA._startClamp),
                  end: tD(e, r && !!eA._endClamp),
                },
                n
              ),
                eA.update();
            }),
            (eA.adjustPinSpacing = function (t) {
              if (L && t) {
                var e = L.indexOf(t0.d) + 1;
                (L[e] = parseFloat(L[e]) + t + "px"),
                  (L[1] = parseFloat(L[1]) + t + "px"),
                  ej(L);
              }
            }),
            (eA.disable = function (e, r) {
              if (
                eA.enabled &&
                (!1 !== e && eA.revert(!0, !0),
                (eA.enabled = eA.isActive = !1),
                r || (G && G.pause()),
                (ti = 0),
                a && (a.uncache = 1),
                eE && el(t, "refreshInit", eE),
                tr && (tr.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                !em)
              ) {
                for (var n = e_.length; n--; )
                  if (e_[n].scroller === ec && e_[n] !== eA) return;
                el(ec, "resize", ew), em || el(ec, "scroll", eb);
              }
            }),
            (eA.kill = function (t, n) {
              eA.disable(t, n), G && !n && G.kill(), tp && delete ev[tp];
              var i = e_.indexOf(eA);
              i >= 0 && e_.splice(i, 1),
                i === tn && eY > 0 && tn--,
                (i = 0),
                e_.forEach(function (t) {
                  return t.scroller === eA.scroller && (i = 1);
                }),
                i || tT || (eA.scroll.rec = 0),
                r &&
                  ((r.scrollTrigger = null),
                  t && r.revert({ kill: !1 }),
                  n || r.kill()),
                h &&
                  [h, p, d, g].forEach(function (t) {
                    return t.parentNode && t.parentNode.removeChild(t);
                  }),
                tO === eA && (tO = 0),
                tv &&
                  (a && (a.uncache = 1),
                  (i = 0),
                  e_.forEach(function (t) {
                    return t.pin === tv && i++;
                  }),
                  i || (a.spacer = 0)),
                e.onKill && e.onKill(eA);
            }),
            e_.push(eA),
            eA.enable(!1, !1),
            tl && tl(eA),
            r && r.add && !v)
          ) {
            var eN = eA.update;
            (eA.update = function () {
              (eA.update = eN), y.cache++, c || f || eA.refresh();
            }),
              U.delayedCall(0.01, eA.update),
              (v = 0.01),
              (c = f = 0);
          } else eA.refresh();
          tv && eD();
        }),
        (t.register = function (e) {
          return (
            q ||
              ((U = e || tI()),
              tY() && window.document && t.enable(),
              (q = tS)),
            q
          );
        }),
        (t.defaults = function (t) {
          if (t) for (var e in t) eh[e] = t[e];
          return eh;
        }),
        (t.disable = function (t, e) {
          (tS = 0),
            e_.forEach(function (r) {
              return r[e ? "kill" : "disable"](t);
            }),
            el(j, "wheel", eb),
            el(W, "scroll", eb),
            clearInterval(K),
            el(W, "touchcancel", tF),
            el(V, "touchstart", tF),
            es(el, W, "pointerdown,touchstart,mousedown", tz),
            es(el, W, "pointerup,touchend,mouseup", tR),
            $.kill(),
            tj(el);
          for (var r = 0; r < y.length; r += 3)
            ec(el, y[r], y[r + 1]), ec(el, y[r], y[r + 2]);
        }),
        (t.enable = function () {
          if (
            ((j = window),
            (H = (W = document).documentElement),
            (V = W.body),
            U &&
              ((Q = U.utils.toArray),
              (Z = U.utils.clamp),
              (tg = U.core.context || tF),
              (tu = U.core.suppressOverwrites || tF),
              (tm = j.history.scrollRestoration || "auto"),
              (eL = j.pageYOffset || 0),
              U.core.globals("ScrollTrigger", t),
              V))
          ) {
            (tS = 1),
              ((t_ = document.createElement("div")).style.height = "100vh"),
              (t_.style.position = "absolute"),
              ez(),
              (function t() {
                return tS && requestAnimationFrame(t);
              })(),
              X.register(U),
              (t.isTouch = X.isTouch),
              (td =
                X.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (tf = 1 === X.isTouch),
              eu(j, "wheel", eb),
              (G = [j, W, H, V]),
              U.matchMedia
                ? ((t.matchMedia = function (t) {
                    var e,
                      r = U.matchMedia();
                    for (e in t) r.add(e, t[e]);
                    return r;
                  }),
                  U.addEventListener("matchMediaInit", function () {
                    return eC();
                  }),
                  U.addEventListener("matchMediaRevert", function () {
                    return eE();
                  }),
                  U.addEventListener("matchMedia", function () {
                    eF(0, 1), eM("matchMedia");
                  }),
                  U.matchMedia().add("(orientation: portrait)", function () {
                    return ex(), ex;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              ex(),
              eu(W, "scroll", eb);
            var e,
              r,
              n = V.hasAttribute("style"),
              i = V.style,
              o = i.borderTopStyle,
              a = U.core.Animation.prototype;
            for (
              a.revert ||
                Object.defineProperty(a, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                i.borderTopStyle = "solid",
                e = en(V),
                z.m = Math.round(e.top + z.sc()) || 0,
                D.m = Math.round(e.left + D.sc()) || 0,
                o
                  ? (i.borderTopStyle = o)
                  : i.removeProperty("border-top-style"),
                n || (V.setAttribute("style", ""), V.removeAttribute("style")),
                K = setInterval(ey, 250),
                U.delayedCall(0.5, function () {
                  return (tM = 0);
                }),
                eu(W, "touchcancel", tF),
                eu(V, "touchstart", tF),
                es(eu, W, "pointerdown,touchstart,mousedown", tz),
                es(eu, W, "pointerup,touchend,mouseup", tR),
                tr = U.utils.checkPrefix("transform"),
                eN.push(tr),
                q = tA(),
                $ = U.delayedCall(0.2, eF).pause(),
                ta = [
                  W,
                  "visibilitychange",
                  function () {
                    var t = j.innerWidth,
                      e = j.innerHeight;
                    W.hidden
                      ? ((ti = t), (to = e))
                      : (ti !== t || to !== e) && ew();
                  },
                  W,
                  "DOMContentLoaded",
                  eF,
                  j,
                  "load",
                  eF,
                  j,
                  "resize",
                  ew,
                ],
                tj(eu),
                e_.forEach(function (t) {
                  return t.enable(0, 1);
                }),
                r = 0;
              r < y.length;
              r += 3
            )
              ec(el, y[r], y[r + 1]), ec(el, y[r], y[r + 2]);
          }
        }),
        (t.config = function (e) {
          "limitCallbacks" in e && (tx = !!e.limitCallbacks);
          var r = e.syncInterval;
          (r && clearInterval(K)) || ((K = r) && setInterval(ey, r)),
            "ignoreMobileResize" in e &&
              (tf = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (tj(el) || tj(eu, e.autoRefreshEvents || "none"),
              (tl = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
        }),
        (t.scrollerProxy = function (t, e) {
          var r = R(t),
            n = y.indexOf(r),
            i = tB(r);
          ~n && y.splice(n, i ? 6 : 2),
            e && (i ? b.unshift(j, e, V, e, H, e) : b.unshift(r, e));
        }),
        (t.clearMatchMedia = function (t) {
          e_.forEach(function (e) {
            return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
          });
        }),
        (t.isInViewport = function (t, e, r) {
          var n = (tW(t) ? R(t) : t).getBoundingClientRect(),
            i = n[r ? t1 : t2] * e || 0;
          return r
            ? n.right - i > 0 && n.left + i < j.innerWidth
            : n.bottom - i > 0 && n.top + i < j.innerHeight;
        }),
        (t.positionInViewport = function (t, e, r) {
          tW(t) && (t = R(t));
          var n = t.getBoundingClientRect(),
            i = n[r ? t1 : t2],
            o =
              null == e
                ? i / 2
                : e in ep
                ? ep[e] * i
                : ~e.indexOf("%")
                ? (parseFloat(e) * i) / 100
                : parseFloat(e) || 0;
          return r ? (n.left + o) / j.innerWidth : (n.top + o) / j.innerHeight;
        }),
        (t.killAll = function (t) {
          if (
            (e_.slice(0).forEach(function (t) {
              return "ScrollSmoother" !== t.vars.id && t.kill();
            }),
            !0 !== t)
          ) {
            var e = eT.killAll || [];
            (eT = {}),
              e.forEach(function (t) {
                return t();
              });
          }
        }),
        t
      );
    })()).version = "3.12.7"),
    (e0.saveStyles = function (t) {
      return t
        ? Q(t).forEach(function (t) {
            if (t && t.style) {
              var e = eA.indexOf(t);
              e >= 0 && eA.splice(e, 5),
                eA.push(
                  t,
                  t.style.cssText,
                  t.getBBox && t.getAttribute("transform"),
                  U.core.getCache(t),
                  tg()
                );
            }
          })
        : eA;
    }),
    (e0.revert = function (t, e) {
      return eC(!t, e);
    }),
    (e0.create = function (t, e) {
      return new e0(t, e);
    }),
    (e0.refresh = function (t) {
      return t ? ew(!0) : (q || e0.register()) && eF(!0);
    }),
    (e0.update = function (t) {
      return ++y.cache && eI(2 * (!0 === t));
    }),
    (e0.clearScrollMemory = eS),
    (e0.maxScroll = function (t, e) {
      return tq(t, e ? D : z);
    }),
    (e0.getScrollFunc = function (t, e) {
      return F(R(t), e ? D : z);
    }),
    (e0.getById = function (t) {
      return ev[t];
    }),
    (e0.getAll = function () {
      return e_.filter(function (t) {
        return "ScrollSmoother" !== t.vars.id;
      });
    }),
    (e0.isScrolling = function () {
      return !!tC;
    }),
    (e0.snapDirectional = ea),
    (e0.addEventListener = function (t, e) {
      var r = eT[t] || (eT[t] = []);
      ~r.indexOf(e) || r.push(e);
    }),
    (e0.removeEventListener = function (t, e) {
      var r = eT[t],
        n = r && r.indexOf(e);
      n >= 0 && r.splice(n, 1);
    }),
    (e0.batch = function (t, e) {
      var r,
        n = [],
        i = {},
        o = e.interval || 0.016,
        a = e.batchMax || 1e9,
        s = function (t, e) {
          var r = [],
            n = [],
            i = U.delayedCall(o, function () {
              e(r, n), (r = []), (n = []);
            }).pause();
          return function (t) {
            r.length || i.restart(!0),
              r.push(t.trigger),
              n.push(t),
              a <= r.length && i.progress(1);
          };
        };
      for (r in e)
        i[r] =
          "on" === r.substr(0, 2) && tH(e[r]) && "onRefreshInit" !== r
            ? s(r, e[r])
            : e[r];
      return (
        tH(a) &&
          ((a = a()),
          eu(e0, "refresh", function () {
            return (a = e.batchMax());
          })),
        Q(t).forEach(function (t) {
          var e = {};
          for (r in i) e[r] = i[r];
          (e.trigger = t), n.push(e0.create(e));
        }),
        n
      );
    }),
    (e2 = function (t, e, r, n) {
      return (
        e > n ? t(n) : e < 0 && t(0),
        r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
      );
    }),
    (e5 = function t(e, r) {
      !0 === r
        ? e.style.removeProperty("touch-action")
        : (e.style.touchAction =
            !0 === r
              ? "auto"
              : r
              ? "pan-" + r + (X.isTouch ? " pinch-zoom" : "")
              : "none"),
        e === H && t(V, r);
    }),
    (e3 = { auto: 1, scroll: 1 }),
    (e8 = function (t) {
      var e,
        r = t.event,
        n = t.target,
        i = t.axis,
        o = (r.changedTouches ? r.changedTouches[0] : r).target,
        a = o._gsap || U.core.getCache(o),
        s = tA();
      if (!a._isScrollT || s - a._isScrollT > 2e3) {
        for (
          ;
          o &&
          o !== V &&
          ((o.scrollHeight <= o.clientHeight &&
            o.scrollWidth <= o.clientWidth) ||
            !(e3[(e = et(o)).overflowY] || e3[e.overflowX]));

        )
          o = o.parentNode;
        (a._isScroll =
          o &&
          o !== n &&
          !tB(o) &&
          (e3[(e = et(o)).overflowY] || e3[e.overflowX])),
          (a._isScrollT = s);
      }
      (a._isScroll || "x" === i) && (r.stopPropagation(), (r._gsapAllow = !0));
    }),
    (e6 = function (t, e, r, n) {
      return X.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: e,
        onWheel: (n = n && e8),
        onPress: n,
        onDrag: n,
        onScroll: n,
        onEnable: function () {
          return r && eu(W, X.eventTypes[0], e9, !1, !0);
        },
        onDisable: function () {
          return el(W, X.eventTypes[0], e9, !0);
        },
      });
    }),
    (e4 = /(input|label|select|textarea)/i),
    (e9 = function (t) {
      var e = e4.test(t.target.tagName);
      (e || e1) && ((t._gsapAllow = !0), (e1 = e));
    }),
    (e7 = function (t) {
      tG(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var e,
        r,
        n,
        i,
        o,
        a,
        s,
        u,
        l = t,
        c = l.normalizeScrollX,
        f = l.momentum,
        h = l.allowNestedScroll,
        p = l.onRelease,
        d = R(t.target) || H,
        g = U.core.globals().ScrollSmoother,
        m = g && g.get(),
        _ =
          td &&
          ((t.content && R(t.content)) ||
            (m && !1 !== t.content && !m.smooth() && m.content())),
        v = F(d, z),
        b = F(d, D),
        x = 1,
        w =
          (X.isTouch && j.visualViewport
            ? j.visualViewport.scale * j.visualViewport.width
            : j.outerWidth) / j.innerWidth,
        T = 0,
        k = tH(f)
          ? function () {
              return f(e);
            }
          : function () {
              return f || 2.8;
            },
        O = e6(d, t.type, !0, h),
        M = function () {
          return (i = !1);
        },
        A = tF,
        E = tF,
        C = function () {
          (r = tq(d, z)),
            (E = Z(+!!td, r)),
            c && (A = Z(0, tq(d, D))),
            (n = eP);
        },
        S = function () {
          (_._gsap.y = tL(parseFloat(_._gsap.y) + v.offset) + "px"),
            (_.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(_._gsap.y) +
              ", 0, 1)"),
            (v.offset = v.cacheID = 0);
        },
        P = function () {
          if (i) {
            requestAnimationFrame(M);
            var t = tL(e.deltaY / 2),
              r = E(v.v - t);
            if (_ && r !== v.v + v.offset) {
              v.offset = r - v.v;
              var n = tL((parseFloat(_ && _._gsap.y) || 0) - v.offset);
              (_.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                n +
                ", 0, 1)"),
                (_._gsap.y = n + "px"),
                (v.cacheID = y.cache),
                eI();
            }
            return !0;
          }
          v.offset && S(), (i = !0);
        },
        L = function () {
          C(),
            o.isActive() &&
              o.vars.scrollY > r &&
              (v() > r ? o.progress(1) && v(r) : o.resetTo("scrollY", r));
        };
      return (
        _ && U.set(_, { y: "+=0" }),
        (t.ignoreCheck = function (t) {
          return (
            (td && "touchmove" === t.type && P()) ||
            (x > 1.05 && "touchstart" !== t.type) ||
            e.isGesturing ||
            (t.touches && t.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          i = !1;
          var t = x;
          (x = tL(((j.visualViewport && j.visualViewport.scale) || 1) / w)),
            o.pause(),
            t !== x && e5(d, x > 1.01 || (!c && "x")),
            (a = b()),
            (s = v()),
            C(),
            (n = eP);
        }),
        (t.onRelease = t.onGestureStart =
          function (t, e) {
            if ((v.offset && S(), e)) {
              y.cache++;
              var n,
                i,
                a = k();
              c &&
                ((i = (n = b()) + -(0.05 * a * t.velocityX) / 0.227),
                (a *= e2(b, n, i, tq(d, D))),
                (o.vars.scrollX = A(i))),
                (i = (n = v()) + -(0.05 * a * t.velocityY) / 0.227),
                (a *= e2(v, n, i, tq(d, z))),
                (o.vars.scrollY = E(i)),
                o.invalidate().duration(a).play(0.01),
                ((td && o.vars.scrollY >= r) || n >= r - 1) &&
                  U.to({}, { onUpdate: L, duration: a });
            } else u.restart(!0);
            p && p(t);
          }),
        (t.onWheel = function () {
          o._ts && o.pause(), tA() - T > 1e3 && ((n = 0), (T = tA()));
        }),
        (t.onChange = function (t, e, r, i, o) {
          if (
            (eP !== n && C(),
            e && c && b(A(i[2] === e ? a + (t.startX - t.x) : b() + e - i[1])),
            r)
          ) {
            v.offset && S();
            var u = o[2] === r,
              l = u ? s + t.startY - t.y : v() + r - o[1],
              f = E(l);
            u && l !== f && (s += f - l), v(f);
          }
          (r || e) && eI();
        }),
        (t.onEnable = function () {
          e5(d, !c && "x"),
            e0.addEventListener("refresh", L),
            eu(j, "resize", L),
            v.smooth &&
              ((v.target.style.scrollBehavior = "auto"),
              (v.smooth = b.smooth = !1)),
            O.enable();
        }),
        (t.onDisable = function () {
          e5(d, !0),
            el(j, "resize", L),
            e0.removeEventListener("refresh", L),
            O.kill();
        }),
        (t.lockAxis = !1 !== t.lockAxis),
        ((e = new X(t)).iOS = td),
        td && !v() && v(1),
        td && U.ticker.add(tF),
        (u = e._dc),
        (o = U.to(e, {
          ease: "power4",
          paused: !0,
          inherit: !1,
          scrollX: c ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: eZ(v, v(), function () {
              return o.pause();
            }),
          },
          onUpdate: eI,
          onComplete: u.vars.onComplete,
        })),
        e
      );
    }),
    (e0.sort = function (t) {
      if (tH(t)) return e_.sort(t);
      var e = j.pageYOffset || 0;
      return (
        e0.getAll().forEach(function (t) {
          return (t._sortY = t.trigger
            ? e + t.trigger.getBoundingClientRect().top
            : t.start + j.innerHeight);
        }),
        e_.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                (t.vars.containerAnimation ? 1e6 : t._sortY) -
                ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                  -1e6 * (e.vars.refreshPriority || 0))
              );
            }
        )
      );
    }),
    (e0.observe = function (t) {
      return new X(t);
    }),
    (e0.normalizeScroll = function (t) {
      if (void 0 === t) return tc;
      if (!0 === t && tc) return tc.enable();
      if (!1 === t) {
        tc && tc.kill(), (tc = t);
        return;
      }
      var e = t instanceof X ? t : e7(t);
      return (
        tc && tc.target === e.target && tc.kill(), tB(e.target) && (tc = e), e
      );
    }),
    (e0.core = {
      _getVelocityProp: L,
      _inputObserver: e6,
      _scrollers: y,
      _proxies: b,
      bridge: {
        ss: function () {
          tC || eM("scrollStart"), (tC = tA());
        },
        ref: function () {
          return tt;
        },
      },
    }),
    tI() && U.registerPlugin(e0),
    (r.ScrollTrigger = e0),
    (r.default = e0),
    "undefined" == typeof window || window !== r
      ? Object.defineProperty(r, "__esModule", { value: !0 })
      : delete window.default;
  var n_ = {},
    nv = 0 / 0,
    ny = /^\s+|\s+$/g,
    nb = /^[-+]0x[0-9a-f]+$/i,
    nx = /^0b[01]+$/i,
    nw = /^0o[0-7]+$/i,
    nT = parseInt,
    nk = "object" == typeof ri && ri && ri.Object === Object && ri,
    nO = "object" == typeof self && self && self.Object === Object && self,
    nM = nk || nO || Function("return this")(),
    nA = Object.prototype.toString,
    nE = Math.max,
    nC = Math.min,
    nS = function () {
      return nM.Date.now();
    };
  function nP(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
  }
  function nD(t) {
    if ("number" == typeof t) return t;
    if (
      "symbol" == typeof (e = t) ||
      (e && "object" == typeof e && "[object Symbol]" == nA.call(e))
    )
      return nv;
    if (nP(t)) {
      var e,
        r = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = nP(r) ? r + "" : r;
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(ny, "");
    var n = nx.test(t);
    return n || nw.test(t) ? nT(t.slice(2), n ? 2 : 8) : nb.test(t) ? nv : +t;
  }
  n_ = function (t, e, r) {
    var n,
      i,
      o,
      a,
      s,
      u,
      l = 0,
      c = !1,
      f = !1,
      h = !0;
    if ("function" != typeof t) throw TypeError("Expected a function");
    function p(e) {
      var r = n,
        o = i;
      return (n = i = void 0), (l = e), (a = t.apply(o, r));
    }
    function d(t) {
      var r = t - u,
        n = t - l;
      return void 0 === u || r >= e || r < 0 || (f && n >= o);
    }
    function g() {
      var t,
        r,
        n,
        i = nS();
      if (d(i)) return m(i);
      s = setTimeout(
        g,
        ((t = i - u), (r = i - l), (n = e - t), f ? nC(n, o - r) : n)
      );
    }
    function m(t) {
      return ((s = void 0), h && n) ? p(t) : ((n = i = void 0), a);
    }
    function _() {
      var t,
        r = nS(),
        o = d(r);
      if (((n = arguments), (i = this), (u = r), o)) {
        if (void 0 === s)
          return (l = t = u), (s = setTimeout(g, e)), c ? p(t) : a;
        if (f) return (s = setTimeout(g, e)), p(u);
      }
      return void 0 === s && (s = setTimeout(g, e)), a;
    }
    return (
      (e = nD(e) || 0),
      nP(r) &&
        ((c = !!r.leading),
        (o = (f = "maxWait" in r) ? nE(nD(r.maxWait) || 0, e) : o),
        (h = "trailing" in r ? !!r.trailing : h)),
      (_.cancel = function () {
        void 0 !== s && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
      }),
      (_.flush = function () {
        return void 0 === s ? a : m(nS());
      }),
      _
    );
  };
  let nz =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    nR =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    nF =
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    nL =
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function nY() {
    return navigator.userAgent || navigator.vendor || window.opera || "";
  }
  var nI = new (class {
      phone() {
        let t = nY();
        return !!(nz.test(t) || nR.test(t.substr(0, 4)));
      }
      mobile() {
        let t = nY();
        return !!(nF.test(t) || nL.test(t.substr(0, 4)));
      }
      tablet() {
        return this.mobile() && !this.phone();
      }
      ie11() {
        return (
          "-ms-scroll-limit" in document.documentElement.style &&
          "-ms-ime-align" in document.documentElement.style
        );
      }
    })(),
    nB = () => {
      let t = document.querySelectorAll("[data-aos]");
      return Array.prototype.map.call(t, (t) => ({ node: t, animation: null }));
    };
  let nN = {
      fade: { autoAlpha: 0 },
      "fade-up": { y: 50, autoAlpha: 0 },
      "fade-down": { y: -50, autoAlpha: 0 },
      "fade-left": { x: 50, autoAlpha: 0 },
      "fade-right": { x: -50, autoAlpha: 0 },
      "fade-up-right": { x: -30, y: 30, autoAlpha: 0 },
      "fade-up-left": { x: 30, y: 30, autoAlpha: 0 },
      "fade-down-right": { x: -30, y: -30, autoAlpha: 0 },
      "fade-down-left": { x: 30, y: -30, autoAlpha: 0 },
      "flip-up": { rotateX: -90, autoAlpha: 0 },
      "flip-down": { rotateX: 90, autoAlpha: 0 },
      "flip-left": { rotateY: -90, autoAlpha: 0 },
      "flip-right": { rotateY: 90, autoAlpha: 0 },
      "zoom-in": { scale: 0.8, autoAlpha: 0 },
      "zoom-in-up": { scale: 0.8, y: 50, autoAlpha: 0 },
      "zoom-in-down": { scale: 0.8, y: -50, autoAlpha: 0 },
      "zoom-in-left": { scale: 0.8, x: 50, autoAlpha: 0 },
      "zoom-in-right": { scale: 0.8, x: -50, autoAlpha: 0 },
      "zoom-out": { scale: 1.2, autoAlpha: 0 },
      "zoom-out-up": { scale: 1.2, y: 50, autoAlpha: 0 },
      "zoom-out-down": { scale: 1.2, y: -50, autoAlpha: 0 },
      "zoom-out-left": { scale: 1.2, x: 50, autoAlpha: 0 },
      "zoom-out-right": { scale: 1.2, x: -50, autoAlpha: 0 },
    },
    nX = () => {};
  function nU(t) {
    t &&
      t.forEach((t) => {
        let e = Array.prototype.slice.call(t.addedNodes),
          r = Array.prototype.slice.call(t.removedNodes);
        if (
          (function t(e) {
            let r, n;
            for (r = 0; r < e.length; r += 1)
              if (
                ((n = e[r]).dataset && n.dataset.aos) ||
                (n.children && t(n.children))
              )
                return !0;
            return !1;
          })(e.concat(r))
        )
          return nX();
      });
  }
  function nq() {
    return (
      window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    );
  }
  var nj = {
    isSupported: function () {
      return !!nq();
    },
    ready: function (t, e) {
      let r = window.document,
        n = new (nq())(nU);
      (nX = e),
        n.observe(r.documentElement, {
          childList: !0,
          subtree: !0,
          removedNodes: !0,
        });
    },
  };
  ng.registerPlugin(nm.ScrollTrigger);
  let nW = [],
    nH = !1,
    nV = {
      disable: !1,
      startEvent: "DOMContentLoaded",
      disableMutationObserver: !1,
      debounceDelay: 50,
    },
    nG = () => document.all && !window.atob,
    n$ = function () {
      (0, nm.ScrollTrigger).refresh();
    },
    nQ = function (t = !1) {
      nH
        ? n$()
        : t &&
          ((nH = !0),
          (function (t) {
            t.forEach((t) => {
              let e = t.node,
                r = e.getAttribute("data-aos") || "fade-up",
                n = parseFloat(e.getAttribute("data-aos-duration")) || 0.8,
                i = parseFloat(e.getAttribute("data-aos-delay")) || 0,
                o = e.getAttribute("data-aos-easing") || "power2.out",
                a = nN[r] || {};
              if ("custom" === r) {
                let t = parseFloat(e.getAttribute("data-aos-x")) || 0,
                  r = parseFloat(e.getAttribute("data-aos-y")) || 0;
                a = {
                  x: t,
                  y: r,
                  scale: parseFloat(e.getAttribute("data-aos-scale")) || 1,
                  rotate: parseFloat(e.getAttribute("data-aos-rotate")) || 0,
                  autoAlpha: 0,
                };
              }
              ng.fromTo(e, a, {
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                autoAlpha: 1,
                scrollTrigger: {
                  trigger: e,
                  start: "top bottom",
                  end: "top top",
                  toggleActions: "play none none reverse",
                },
                duration: n,
                delay: i,
                ease: o,
              }),
                (t.animation = a);
            });
          })(nW));
    },
    nZ = function () {
      if (((nW = nB()), nK(nV.disable) || nG())) return nJ();
      n$();
    },
    nJ = function () {},
    nK = function (t) {
      return (
        !0 === t ||
        ("mobile" === t && nI.mobile()) ||
        ("phone" === t && nI.phone()) ||
        ("tablet" === t && nI.tablet()) ||
        ("function" == typeof t && !0 === t())
      );
    };
  "undefined" != typeof window &&
    (window.AOSGSAP = {
      init: function (t) {
        return ((nV = Object.assign(nV, t)),
        (nW = nB()),
        nV.disableMutationObserver ||
          nj.isSupported() ||
          (console.info(`
      scroll-animation: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
          (nV.disableMutationObserver = !0)),
        nV.disableMutationObserver || nj.ready("[data-sm]", nZ),
        nK(nV.disable) || nG())
          ? nJ()
          : (-1 === ["DOMContentLoaded", "load"].indexOf(nV.startEvent)
              ? document.addEventListener(nV.startEvent, function () {
                  nQ(!0);
                })
              : window.addEventListener("load", function () {
                  nQ(!0);
                }),
            "DOMContentLoaded" === nV.startEvent &&
              ["complete", "interactive"].indexOf(document.readyState) > -1 &&
              nQ(!0),
            window.addEventListener(
              "resize",
              e(n_)(() => nQ(), nV.debounceDelay)
            ),
            window.addEventListener(
              "orientationchange",
              e(n_)(() => nQ(), nV.debounceDelay)
            ),
            nW);
      },
      refresh: nQ,
      refreshHard: nZ,
    });
})();
