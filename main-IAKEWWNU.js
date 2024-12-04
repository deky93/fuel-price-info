import {
    $ as G,
    $a as ee,
    $b as Ke,
    A as qn,
    Aa as Ro,
    Ab as $i,
    B as Me,
    Ba as Fo,
    Bb as Hi,
    C as Co,
    Ca as Oo,
    Cb as Gi,
    D as ko,
    Da as Po,
    Db as Zt,
    E as nt,
    Ea as No,
    Eb as Ho,
    F as qe,
    Fa as Lo,
    Fb as Xn,
    G as Wn,
    Ga as jo,
    Gb as Go,
    H as Io,
    Ha as me,
    Hb as Ce,
    I as Eo,
    Ia as Vo,
    Ib as qo,
    J as Mo,
    Ja as qt,
    Jb as Wo,
    K as Ri,
    Ka as m,
    Kb as K,
    L as Fi,
    La as y,
    Lb as Yt,
    M as Ae,
    Ma as Li,
    Mb as qi,
    N as vt,
    Na as Bo,
    Nb as dt,
    O as Y,
    Oa as ji,
    Ob as kt,
    P as U,
    Pa as Vi,
    Pb as Zo,
    Q as rt,
    Qa as zo,
    Qb as Yo,
    R as w,
    Ra as Bi,
    Rb as $,
    S,
    Sa as zi,
    Sb as Wi,
    T as Ao,
    Ta as st,
    Tb as Jn,
    U as k,
    Ua as he,
    Ub as Ko,
    V as Zn,
    Va as Uo,
    Vb as Zi,
    W as _,
    Wa as $o,
    Wb as Qo,
    X as b,
    Xa as _e,
    Xb as Xo,
    Y as $t,
    Ya as Ui,
    Yb as Jo,
    Z as X,
    Za as te,
    Zb as Te,
    _ as T,
    _a as v,
    _b as ea,
    a as f,
    aa as ot,
    ab as ct,
    ac as Kt,
    b as z,
    ba as Do,
    bb as d,
    bc as ta,
    c as yo,
    ca as Ht,
    cb as l,
    d as zt,
    da as Oe,
    db as R,
    e as xo,
    ea as We,
    eb as Pe,
    f as Bn,
    fa as M,
    fb as Wt,
    g as zn,
    ga as A,
    gb as F,
    h as Un,
    ha as Oi,
    hb as E,
    i as ce,
    ia as Pi,
    ib as ue,
    j as de,
    ja as _t,
    jb as se,
    k as He,
    ka as Ze,
    kb as Ct,
    l as le,
    la as yt,
    lb as Be,
    m as x,
    ma as Yn,
    mb as pe,
    n as tt,
    na as re,
    nb as fe,
    o as $n,
    oa as q,
    ob as Qn,
    p as wo,
    pa as at,
    pb as h,
    q as C,
    qa as W,
    qb as Ne,
    r as Ut,
    ra as So,
    rb as V,
    s as ve,
    sa as Ni,
    sb as ye,
    t as Si,
    ta as To,
    tb as xe,
    u as Hn,
    ua as De,
    ub as we,
    v as Ti,
    va as Ye,
    vb as Se,
    w as Ve,
    wa as Gt,
    wb as J,
    x as Ge,
    xa as Kn,
    xb as j,
    y as it,
    ya as xt,
    yb as O,
    z as Gn,
    za as wt,
    zb as P,
  } from "./chunk-MQSCNJOQ.js";
  var tr = class {};
  var lt = class t {
    constructor(i) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        i
          ? typeof i == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  i
                    .split(
                      `
  `
                    )
                    .forEach((e) => {
                      let n = e.indexOf(":");
                      if (n > 0) {
                        let r = e.slice(0, n),
                          o = r.toLowerCase(),
                          a = e.slice(n + 1).trim();
                        this.maybeSetNormalizedName(r, o),
                          this.headers.has(o)
                            ? this.headers.get(o).push(a)
                            : this.headers.set(o, [a]);
                      }
                    });
              })
            : typeof Headers < "u" && i instanceof Headers
            ? ((this.headers = new Map()),
              i.forEach((e, n) => {
                this.setHeaderEntries(n, e);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(i).forEach(([e, n]) => {
                    this.setHeaderEntries(e, n);
                  });
              })
          : (this.headers = new Map());
    }
    has(i) {
      return this.init(), this.headers.has(i.toLowerCase());
    }
    get(i) {
      this.init();
      let e = this.headers.get(i.toLowerCase());
      return e && e.length > 0 ? e[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(i) {
      return this.init(), this.headers.get(i.toLowerCase()) || null;
    }
    append(i, e) {
      return this.clone({ name: i, value: e, op: "a" });
    }
    set(i, e) {
      return this.clone({ name: i, value: e, op: "s" });
    }
    delete(i, e) {
      return this.clone({ name: i, value: e, op: "d" });
    }
    maybeSetNormalizedName(i, e) {
      this.normalizedNames.has(e) || this.normalizedNames.set(e, i);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((i) => this.applyUpdate(i)),
          (this.lazyUpdate = null)));
    }
    copyFrom(i) {
      i.init(),
        Array.from(i.headers.keys()).forEach((e) => {
          this.headers.set(e, i.headers.get(e)),
            this.normalizedNames.set(e, i.normalizedNames.get(e));
        });
    }
    clone(i) {
      let e = new t();
      return (
        (e.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (e.lazyUpdate = (this.lazyUpdate || []).concat([i])),
        e
      );
    }
    applyUpdate(i) {
      let e = i.name.toLowerCase();
      switch (i.op) {
        case "a":
        case "s":
          let n = i.value;
          if ((typeof n == "string" && (n = [n]), n.length === 0)) return;
          this.maybeSetNormalizedName(i.name, e);
          let r = (i.op === "a" ? this.headers.get(e) : void 0) || [];
          r.push(...n), this.headers.set(e, r);
          break;
        case "d":
          let o = i.value;
          if (!o) this.headers.delete(e), this.normalizedNames.delete(e);
          else {
            let a = this.headers.get(e);
            if (!a) return;
            (a = a.filter((c) => o.indexOf(c) === -1)),
              a.length === 0
                ? (this.headers.delete(e), this.normalizedNames.delete(e))
                : this.headers.set(e, a);
          }
          break;
      }
    }
    setHeaderEntries(i, e) {
      let n = (Array.isArray(e) ? e : [e]).map((o) => o.toString()),
        r = i.toLowerCase();
      this.headers.set(r, n), this.maybeSetNormalizedName(i, r);
    }
    forEach(i) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((e) =>
          i(this.normalizedNames.get(e), this.headers.get(e))
        );
    }
  };
  var ir = class {
    encodeKey(i) {
      return ia(i);
    }
    encodeValue(i) {
      return ia(i);
    }
    decodeKey(i) {
      return decodeURIComponent(i);
    }
    decodeValue(i) {
      return decodeURIComponent(i);
    }
  };
  function yc(t, i) {
    let e = new Map();
    return (
      t.length > 0 &&
        t
          .replace(/^\?/, "")
          .split("&")
          .forEach((r) => {
            let o = r.indexOf("="),
              [a, c] =
                o == -1
                  ? [i.decodeKey(r), ""]
                  : [i.decodeKey(r.slice(0, o)), i.decodeValue(r.slice(o + 1))],
              s = e.get(a) || [];
            s.push(c), e.set(a, s);
          }),
      e
    );
  }
  var xc = /%(\d[a-f0-9])/gi,
    wc = {
      40: "@",
      "3A": ":",
      24: "$",
      "2C": ",",
      "3B": ";",
      "3D": "=",
      "3F": "?",
      "2F": "/",
    };
  function ia(t) {
    return encodeURIComponent(t).replace(xc, (i, e) => wc[e] ?? i);
  }
  function Yi(t) {
    return `${t}`;
  }
  var Qe = class t {
    constructor(i = {}) {
      if (
        ((this.updates = null),
        (this.cloneFrom = null),
        (this.encoder = i.encoder || new ir()),
        i.fromString)
      ) {
        if (i.fromObject)
          throw new Error("Cannot specify both fromString and fromObject.");
        this.map = yc(i.fromString, this.encoder);
      } else
        i.fromObject
          ? ((this.map = new Map()),
            Object.keys(i.fromObject).forEach((e) => {
              let n = i.fromObject[e],
                r = Array.isArray(n) ? n.map(Yi) : [Yi(n)];
              this.map.set(e, r);
            }))
          : (this.map = null);
    }
    has(i) {
      return this.init(), this.map.has(i);
    }
    get(i) {
      this.init();
      let e = this.map.get(i);
      return e ? e[0] : null;
    }
    getAll(i) {
      return this.init(), this.map.get(i) || null;
    }
    keys() {
      return this.init(), Array.from(this.map.keys());
    }
    append(i, e) {
      return this.clone({ param: i, value: e, op: "a" });
    }
    appendAll(i) {
      let e = [];
      return (
        Object.keys(i).forEach((n) => {
          let r = i[n];
          Array.isArray(r)
            ? r.forEach((o) => {
                e.push({ param: n, value: o, op: "a" });
              })
            : e.push({ param: n, value: r, op: "a" });
        }),
        this.clone(e)
      );
    }
    set(i, e) {
      return this.clone({ param: i, value: e, op: "s" });
    }
    delete(i, e) {
      return this.clone({ param: i, value: e, op: "d" });
    }
    toString() {
      return (
        this.init(),
        this.keys()
          .map((i) => {
            let e = this.encoder.encodeKey(i);
            return this.map
              .get(i)
              .map((n) => e + "=" + this.encoder.encodeValue(n))
              .join("&");
          })
          .filter((i) => i !== "")
          .join("&")
      );
    }
    clone(i) {
      let e = new t({ encoder: this.encoder });
      return (
        (e.cloneFrom = this.cloneFrom || this),
        (e.updates = (this.updates || []).concat(i)),
        e
      );
    }
    init() {
      this.map === null && (this.map = new Map()),
        this.cloneFrom !== null &&
          (this.cloneFrom.init(),
          this.cloneFrom
            .keys()
            .forEach((i) => this.map.set(i, this.cloneFrom.map.get(i))),
          this.updates.forEach((i) => {
            switch (i.op) {
              case "a":
              case "s":
                let e = (i.op === "a" ? this.map.get(i.param) : void 0) || [];
                e.push(Yi(i.value)), this.map.set(i.param, e);
                break;
              case "d":
                if (i.value !== void 0) {
                  let n = this.map.get(i.param) || [],
                    r = n.indexOf(Yi(i.value));
                  r !== -1 && n.splice(r, 1),
                    n.length > 0
                      ? this.map.set(i.param, n)
                      : this.map.delete(i.param);
                } else {
                  this.map.delete(i.param);
                  break;
                }
            }
          }),
          (this.cloneFrom = this.updates = null));
    }
  };
  var nr = class {
    constructor() {
      this.map = new Map();
    }
    set(i, e) {
      return this.map.set(i, e), this;
    }
    get(i) {
      return (
        this.map.has(i) || this.map.set(i, i.defaultValue()), this.map.get(i)
      );
    }
    delete(i) {
      return this.map.delete(i), this;
    }
    has(i) {
      return this.map.has(i);
    }
    keys() {
      return this.map.keys();
    }
  };
  function Cc(t) {
    switch (t) {
      case "DELETE":
      case "GET":
      case "HEAD":
      case "OPTIONS":
      case "JSONP":
        return !1;
      default:
        return !0;
    }
  }
  function na(t) {
    return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer;
  }
  function ra(t) {
    return typeof Blob < "u" && t instanceof Blob;
  }
  function oa(t) {
    return typeof FormData < "u" && t instanceof FormData;
  }
  function kc(t) {
    return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
  }
  var Qt = class t {
      constructor(i, e, n, r) {
        (this.url = e),
          (this.body = null),
          (this.reportProgress = !1),
          (this.withCredentials = !1),
          (this.responseType = "json"),
          (this.method = i.toUpperCase());
        let o;
        if (
          (Cc(this.method) || r
            ? ((this.body = n !== void 0 ? n : null), (o = r))
            : (o = n),
          o &&
            ((this.reportProgress = !!o.reportProgress),
            (this.withCredentials = !!o.withCredentials),
            o.responseType && (this.responseType = o.responseType),
            o.headers && (this.headers = o.headers),
            o.context && (this.context = o.context),
            o.params && (this.params = o.params),
            (this.transferCache = o.transferCache)),
          (this.headers ??= new lt()),
          (this.context ??= new nr()),
          !this.params)
        )
          (this.params = new Qe()), (this.urlWithParams = e);
        else {
          let a = this.params.toString();
          if (a.length === 0) this.urlWithParams = e;
          else {
            let c = e.indexOf("?"),
              s = c === -1 ? "?" : c < e.length - 1 ? "&" : "";
            this.urlWithParams = e + s + a;
          }
        }
      }
      serializeBody() {
        return this.body === null
          ? null
          : typeof this.body == "string" ||
            na(this.body) ||
            ra(this.body) ||
            oa(this.body) ||
            kc(this.body)
          ? this.body
          : this.body instanceof Qe
          ? this.body.toString()
          : typeof this.body == "object" ||
            typeof this.body == "boolean" ||
            Array.isArray(this.body)
          ? JSON.stringify(this.body)
          : this.body.toString();
      }
      detectContentTypeHeader() {
        return this.body === null || oa(this.body)
          ? null
          : ra(this.body)
          ? this.body.type || null
          : na(this.body)
          ? null
          : typeof this.body == "string"
          ? "text/plain"
          : this.body instanceof Qe
          ? "application/x-www-form-urlencoded;charset=UTF-8"
          : typeof this.body == "object" ||
            typeof this.body == "number" ||
            typeof this.body == "boolean"
          ? "application/json"
          : null;
      }
      clone(i = {}) {
        let e = i.method || this.method,
          n = i.url || this.url,
          r = i.responseType || this.responseType,
          o = i.transferCache ?? this.transferCache,
          a = i.body !== void 0 ? i.body : this.body,
          c = i.withCredentials ?? this.withCredentials,
          s = i.reportProgress ?? this.reportProgress,
          u = i.headers || this.headers,
          p = i.params || this.params,
          g = i.context ?? this.context;
        return (
          i.setHeaders !== void 0 &&
            (u = Object.keys(i.setHeaders).reduce(
              (D, Q) => D.set(Q, i.setHeaders[Q]),
              u
            )),
          i.setParams &&
            (p = Object.keys(i.setParams).reduce(
              (D, Q) => D.set(Q, i.setParams[Q]),
              p
            )),
          new t(e, n, a, {
            params: p,
            headers: u,
            context: g,
            reportProgress: s,
            responseType: r,
            withCredentials: c,
            transferCache: o,
          })
        );
      }
    },
    ha = (function (t) {
      return (
        (t[(t.Sent = 0)] = "Sent"),
        (t[(t.UploadProgress = 1)] = "UploadProgress"),
        (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
        (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
        (t[(t.Response = 4)] = "Response"),
        (t[(t.User = 5)] = "User"),
        t
      );
    })(ha || {}),
    rr = class {
      constructor(i, e = 200, n = "OK") {
        (this.headers = i.headers || new lt()),
          (this.status = i.status !== void 0 ? i.status : e),
          (this.statusText = i.statusText || n),
          (this.url = i.url || null),
          (this.ok = this.status >= 200 && this.status < 300);
      }
    };
  var Xt = class t extends rr {
    constructor(i = {}) {
      super(i),
        (this.type = ha.Response),
        (this.body = i.body !== void 0 ? i.body : null);
    }
    clone(i = {}) {
      return new t({
        body: i.body !== void 0 ? i.body : this.body,
        headers: i.headers || this.headers,
        status: i.status !== void 0 ? i.status : this.status,
        statusText: i.statusText || this.statusText,
        url: i.url || this.url || void 0,
      });
    }
  };
  function er(t, i) {
    return {
      body: i,
      headers: t.headers,
      context: t.context,
      observe: t.observe,
      params: t.params,
      reportProgress: t.reportProgress,
      responseType: t.responseType,
      withCredentials: t.withCredentials,
      transferCache: t.transferCache,
    };
  }
  var pa = (() => {
    class t {
      constructor(e) {
        this.handler = e;
      }
      request(e, n, r = {}) {
        let o;
        if (e instanceof Qt) o = e;
        else {
          let s;
          r.headers instanceof lt ? (s = r.headers) : (s = new lt(r.headers));
          let u;
          r.params &&
            (r.params instanceof Qe
              ? (u = r.params)
              : (u = new Qe({ fromObject: r.params }))),
            (o = new Qt(e, n, r.body !== void 0 ? r.body : null, {
              headers: s,
              context: r.context,
              params: u,
              reportProgress: r.reportProgress,
              responseType: r.responseType || "json",
              withCredentials: r.withCredentials,
              transferCache: r.transferCache,
            }));
        }
        let a = x(o).pipe(it((s) => this.handler.handle(s)));
        if (e instanceof Qt || r.observe === "events") return a;
        let c = a.pipe(Ve((s) => s instanceof Xt));
        switch (r.observe || "body") {
          case "body":
            switch (o.responseType) {
              case "arraybuffer":
                return c.pipe(
                  C((s) => {
                    if (s.body !== null && !(s.body instanceof ArrayBuffer))
                      throw new Error("Response is not an ArrayBuffer.");
                    return s.body;
                  })
                );
              case "blob":
                return c.pipe(
                  C((s) => {
                    if (s.body !== null && !(s.body instanceof Blob))
                      throw new Error("Response is not a Blob.");
                    return s.body;
                  })
                );
              case "text":
                return c.pipe(
                  C((s) => {
                    if (s.body !== null && typeof s.body != "string")
                      throw new Error("Response is not a string.");
                    return s.body;
                  })
                );
              case "json":
              default:
                return c.pipe(C((s) => s.body));
            }
          case "response":
            return c;
          default:
            throw new Error(`Unreachable: unhandled observe type ${r.observe}}`);
        }
      }
      delete(e, n = {}) {
        return this.request("DELETE", e, n);
      }
      get(e, n = {}) {
        return this.request("GET", e, n);
      }
      head(e, n = {}) {
        return this.request("HEAD", e, n);
      }
      jsonp(e, n) {
        return this.request("JSONP", e, {
          params: new Qe().append(n, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(e, n = {}) {
        return this.request("OPTIONS", e, n);
      }
      patch(e, n, r = {}) {
        return this.request("PATCH", e, er(r, n));
      }
      post(e, n, r = {}) {
        return this.request("POST", e, er(r, n));
      }
      put(e, n, r = {}) {
        return this.request("PUT", e, er(r, n));
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(_(tr));
        };
      }
      static {
        this.ɵprov = w({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })();
  var Ic = new k("");
  var Ec = new k(""),
    aa = "b",
    sa = "h",
    ca = "s",
    da = "st",
    la = "u",
    ua = "rt",
    Ki = new k(""),
    Mc = ["GET", "HEAD"];
  function Ac(t, i) {
    let Q = b(Ki),
      { isCacheActive: e } = Q,
      n = yo(Q, ["isCacheActive"]),
      { transferCache: r, method: o } = t;
    if (
      !e ||
      r === !1 ||
      (o === "POST" && !n.includePostRequests && !r) ||
      (o !== "POST" && !Mc.includes(o)) ||
      (!n.includeRequestsWithAuthHeaders && Dc(t)) ||
      n.filter?.(t) === !1
    )
      return i(t);
    let a = b(Kn),
      c = b(Ec, { optional: !0 }),
      s = Kt(b(De));
    if (c && !s) throw new U(2803, !1);
    let u = s && c ? Fc(t.url, c) : t.url,
      p = Tc(t, u),
      g = a.get(p, null),
      D = n.includeHeaders;
    if ((typeof r == "object" && r.includeHeaders && (D = r.includeHeaders), g)) {
      let { [aa]: L, [ua]: ie, [sa]: ne, [ca]: Fe, [da]: et, [la]: je } = g,
        Vn = L;
      switch (ie) {
        case "arraybuffer":
          Vn = new TextEncoder().encode(L).buffer;
          break;
        case "blob":
          Vn = new Blob([L]);
          break;
      }
      let vc = new lt(ne);
      return x(
        new Xt({ body: Vn, headers: vc, status: Fe, statusText: et, url: je })
      );
    }
    return i(t).pipe(
      Y((L) => {
        L instanceof Xt &&
          s &&
          a.set(p, {
            [aa]: L.body,
            [sa]: Sc(L.headers, D),
            [ca]: L.status,
            [da]: L.statusText,
            [la]: u,
            [ua]: t.responseType,
          });
      })
    );
  }
  function Dc(t) {
    return t.headers.has("authorization") || t.headers.has("proxy-authorization");
  }
  function Sc(t, i) {
    if (!i) return {};
    let e = {};
    for (let n of i) {
      let r = t.getAll(n);
      r !== null && (e[n] = r);
    }
    return e;
  }
  function ma(t) {
    return [...t.keys()]
      .sort()
      .map((i) => `${i}=${t.getAll(i)}`)
      .join("&");
  }
  function Tc(t, i) {
    let { params: e, method: n, responseType: r } = t,
      o = ma(e),
      a = t.serializeBody();
    a instanceof URLSearchParams ? (a = ma(a)) : typeof a != "string" && (a = "");
    let c = [n, r, i, a, o].join("|"),
      s = Rc(c);
    return s;
  }
  function Rc(t) {
    let i = 0;
    for (let e of t) i = (Math.imul(31, i) + e.charCodeAt(0)) << 0;
    return (i += 2147483648), i.toString();
  }
  function fa(t) {
    return [
      {
        provide: Ki,
        useFactory: () => (
          Bi("NgHttpTransferCache"), f({ isCacheActive: !0 }, t)
        ),
      },
      { provide: Ic, useValue: Ac, multi: !0, deps: [Kn, Ki] },
      {
        provide: Gi,
        multi: !0,
        useFactory: () => {
          let i = b(Zt),
            e = b(Ki);
          return () => {
            Ho(i).then(() => {
              e.isCacheActive = !1;
            });
          };
        },
      },
    ];
  }
  function Fc(t, i) {
    let e = new URL(t, "resolve://").origin,
      n = i[e];
    return n ? t.replace(e, n) : t;
  }
  var sr = class extends Yo {
      constructor() {
        super(...arguments), (this.supportsDOMEvents = !0);
      }
    },
    cr = class t extends sr {
      static makeCurrent() {
        Zo(new t());
      }
      onAndCancel(i, e, n) {
        return (
          i.addEventListener(e, n),
          () => {
            i.removeEventListener(e, n);
          }
        );
      }
      dispatchEvent(i, e) {
        i.dispatchEvent(e);
      }
      remove(i) {
        i.remove();
      }
      createElement(i, e) {
        return (e = e || this.getDefaultDocument()), e.createElement(i);
      }
      createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle");
      }
      getDefaultDocument() {
        return document;
      }
      isElementNode(i) {
        return i.nodeType === Node.ELEMENT_NODE;
      }
      isShadowRoot(i) {
        return i instanceof DocumentFragment;
      }
      getGlobalEventTarget(i, e) {
        return e === "window"
          ? window
          : e === "document"
          ? i
          : e === "body"
          ? i.body
          : null;
      }
      getBaseHref(i) {
        let e = Nc();
        return e == null ? null : Lc(e);
      }
      resetBaseElement() {
        Jt = null;
      }
      getUserAgent() {
        return window.navigator.userAgent;
      }
      getCookie(i) {
        return Jn(document.cookie, i);
      }
    },
    Jt = null;
  function Nc() {
    return (
      (Jt = Jt || document.querySelector("base")),
      Jt ? Jt.getAttribute("href") : null
    );
  }
  function Lc(t) {
    return new URL(t, document.baseURI).pathname;
  }
  var jc = (() => {
      class t {
        build() {
          return new XMLHttpRequest();
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })(),
    dr = new k(""),
    _a = (() => {
      class t {
        constructor(e, n) {
          (this._zone = n),
            (this._eventNameToPlugin = new Map()),
            e.forEach((r) => {
              r.manager = this;
            }),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, n, r) {
          return this._findPluginFor(n).addEventListener(e, n, r);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          let n = this._eventNameToPlugin.get(e);
          if (n) return n;
          if (((n = this._plugins.find((o) => o.supports(e))), !n))
            throw new U(5101, !1);
          return this._eventNameToPlugin.set(e, n), n;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(dr), _(q));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })(),
    Qi = class {
      constructor(i) {
        this._doc = i;
      }
    },
    or = "ng-app-id",
    ya = (() => {
      class t {
        constructor(e, n, r, o = {}) {
          (this.doc = e),
            (this.appId = n),
            (this.nonce = r),
            (this.platformId = o),
            (this.styleRef = new Map()),
            (this.hostNodes = new Set()),
            (this.styleNodesInDOM = this.collectServerRenderedStyles()),
            (this.platformIsServer = Kt(o)),
            this.resetHostNodes();
        }
        addStyles(e) {
          for (let n of e)
            this.changeUsageCount(n, 1) === 1 && this.onStyleAdded(n);
        }
        removeStyles(e) {
          for (let n of e)
            this.changeUsageCount(n, -1) <= 0 && this.onStyleRemoved(n);
        }
        ngOnDestroy() {
          let e = this.styleNodesInDOM;
          e && (e.forEach((n) => n.remove()), e.clear());
          for (let n of this.getAllStyles()) this.onStyleRemoved(n);
          this.resetHostNodes();
        }
        addHost(e) {
          this.hostNodes.add(e);
          for (let n of this.getAllStyles()) this.addStyleToHost(e, n);
        }
        removeHost(e) {
          this.hostNodes.delete(e);
        }
        getAllStyles() {
          return this.styleRef.keys();
        }
        onStyleAdded(e) {
          for (let n of this.hostNodes) this.addStyleToHost(n, e);
        }
        onStyleRemoved(e) {
          let n = this.styleRef;
          n.get(e)?.elements?.forEach((r) => r.remove()), n.delete(e);
        }
        collectServerRenderedStyles() {
          let e = this.doc.head?.querySelectorAll(`style[${or}="${this.appId}"]`);
          if (e?.length) {
            let n = new Map();
            return (
              e.forEach((r) => {
                r.textContent != null && n.set(r.textContent, r);
              }),
              n
            );
          }
          return null;
        }
        changeUsageCount(e, n) {
          let r = this.styleRef;
          if (r.has(e)) {
            let o = r.get(e);
            return (o.usage += n), o.usage;
          }
          return r.set(e, { usage: n, elements: [] }), n;
        }
        getStyleElement(e, n) {
          let r = this.styleNodesInDOM,
            o = r?.get(n);
          if (o?.parentNode === e) return r.delete(n), o.removeAttribute(or), o;
          {
            let a = this.doc.createElement("style");
            return (
              this.nonce && a.setAttribute("nonce", this.nonce),
              (a.textContent = n),
              this.platformIsServer && a.setAttribute(or, this.appId),
              e.appendChild(a),
              a
            );
          }
        }
        addStyleToHost(e, n) {
          let r = this.getStyleElement(e, n),
            o = this.styleRef,
            a = o.get(n)?.elements;
          a ? a.push(r) : o.set(n, { elements: [r], usage: 1 });
        }
        resetHostNodes() {
          let e = this.hostNodes;
          e.clear(), e.add(this.doc.head);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_($), _(Ni), _(Gt, 8), _(De));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })(),
    ar = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: "http://www.w3.org/1999/xhtml",
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
      math: "http://www.w3.org/1998/Math/MathML",
    },
    hr = /%COMP%/g,
    xa = "%COMP%",
    Vc = `_nghost-${xa}`,
    Bc = `_ngcontent-${xa}`,
    zc = !0,
    Uc = new k("", { providedIn: "root", factory: () => zc });
  function $c(t) {
    return Bc.replace(hr, t);
  }
  function Hc(t) {
    return Vc.replace(hr, t);
  }
  function wa(t, i) {
    return i.map((e) => e.replace(hr, t));
  }
  var Xi = (() => {
      class t {
        constructor(e, n, r, o, a, c, s, u = null) {
          (this.eventManager = e),
            (this.sharedStylesHost = n),
            (this.appId = r),
            (this.removeStylesOnCompDestroy = o),
            (this.doc = a),
            (this.platformId = c),
            (this.ngZone = s),
            (this.nonce = u),
            (this.rendererByCompId = new Map()),
            (this.platformIsServer = Kt(c)),
            (this.defaultRenderer = new ei(e, a, s, this.platformIsServer));
        }
        createRenderer(e, n) {
          if (!e || !n) return this.defaultRenderer;
          this.platformIsServer &&
            n.encapsulation === $t.ShadowDom &&
            (n = z(f({}, n), { encapsulation: $t.Emulated }));
          let r = this.getOrCreateRenderer(e, n);
          return (
            r instanceof Ji
              ? r.applyToHost(e)
              : r instanceof ti && r.applyStyles(),
            r
          );
        }
        getOrCreateRenderer(e, n) {
          let r = this.rendererByCompId,
            o = r.get(n.id);
          if (!o) {
            let a = this.doc,
              c = this.ngZone,
              s = this.eventManager,
              u = this.sharedStylesHost,
              p = this.removeStylesOnCompDestroy,
              g = this.platformIsServer;
            switch (n.encapsulation) {
              case $t.Emulated:
                o = new Ji(s, u, n, this.appId, p, a, c, g);
                break;
              case $t.ShadowDom:
                return new lr(s, u, e, n, a, c, this.nonce, g);
              default:
                o = new ti(s, u, n, p, a, c, g);
                break;
            }
            r.set(n.id, o);
          }
          return o;
        }
        ngOnDestroy() {
          this.rendererByCompId.clear();
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(
              _(_a),
              _(ya),
              _(Ni),
              _(Uc),
              _($),
              _(De),
              _(q),
              _(Gt)
            );
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })(),
    ei = class {
      constructor(i, e, n, r) {
        (this.eventManager = i),
          (this.doc = e),
          (this.ngZone = n),
          (this.platformIsServer = r),
          (this.data = Object.create(null)),
          (this.throwOnSyntheticProps = !0),
          (this.destroyNode = null);
      }
      destroy() {}
      createElement(i, e) {
        return e
          ? this.doc.createElementNS(ar[e] || e, i)
          : this.doc.createElement(i);
      }
      createComment(i) {
        return this.doc.createComment(i);
      }
      createText(i) {
        return this.doc.createTextNode(i);
      }
      appendChild(i, e) {
        (ga(i) ? i.content : i).appendChild(e);
      }
      insertBefore(i, e, n) {
        i && (ga(i) ? i.content : i).insertBefore(e, n);
      }
      removeChild(i, e) {
        e.remove();
      }
      selectRootElement(i, e) {
        let n = typeof i == "string" ? this.doc.querySelector(i) : i;
        if (!n) throw new U(-5104, !1);
        return e || (n.textContent = ""), n;
      }
      parentNode(i) {
        return i.parentNode;
      }
      nextSibling(i) {
        return i.nextSibling;
      }
      setAttribute(i, e, n, r) {
        if (r) {
          e = r + ":" + e;
          let o = ar[r];
          o ? i.setAttributeNS(o, e, n) : i.setAttribute(e, n);
        } else i.setAttribute(e, n);
      }
      removeAttribute(i, e, n) {
        if (n) {
          let r = ar[n];
          r ? i.removeAttributeNS(r, e) : i.removeAttribute(`${n}:${e}`);
        } else i.removeAttribute(e);
      }
      addClass(i, e) {
        i.classList.add(e);
      }
      removeClass(i, e) {
        i.classList.remove(e);
      }
      setStyle(i, e, n, r) {
        r & (qt.DashCase | qt.Important)
          ? i.style.setProperty(e, n, r & qt.Important ? "important" : "")
          : (i.style[e] = n);
      }
      removeStyle(i, e, n) {
        n & qt.DashCase ? i.style.removeProperty(e) : (i.style[e] = "");
      }
      setProperty(i, e, n) {
        i != null && (i[e] = n);
      }
      setValue(i, e) {
        i.nodeValue = e;
      }
      listen(i, e, n) {
        if (
          typeof i == "string" &&
          ((i = kt().getGlobalEventTarget(this.doc, i)), !i)
        )
          throw new Error(`Unsupported event target ${i} for event ${e}`);
        return this.eventManager.addEventListener(
          i,
          e,
          this.decoratePreventDefault(n)
        );
      }
      decoratePreventDefault(i) {
        return (e) => {
          if (e === "__ngUnwrap__") return i;
          (this.platformIsServer ? this.ngZone.runGuarded(() => i(e)) : i(e)) ===
            !1 && e.preventDefault();
        };
      }
    };
  function ga(t) {
    return t.tagName === "TEMPLATE" && t.content !== void 0;
  }
  var lr = class extends ei {
      constructor(i, e, n, r, o, a, c, s) {
        super(i, o, a, s),
          (this.sharedStylesHost = e),
          (this.hostEl = n),
          (this.shadowRoot = n.attachShadow({ mode: "open" })),
          this.sharedStylesHost.addHost(this.shadowRoot);
        let u = wa(r.id, r.styles);
        for (let p of u) {
          let g = document.createElement("style");
          c && g.setAttribute("nonce", c),
            (g.textContent = p),
            this.shadowRoot.appendChild(g);
        }
      }
      nodeOrShadowRoot(i) {
        return i === this.hostEl ? this.shadowRoot : i;
      }
      appendChild(i, e) {
        return super.appendChild(this.nodeOrShadowRoot(i), e);
      }
      insertBefore(i, e, n) {
        return super.insertBefore(this.nodeOrShadowRoot(i), e, n);
      }
      removeChild(i, e) {
        return super.removeChild(null, e);
      }
      parentNode(i) {
        return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)));
      }
      destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot);
      }
    },
    ti = class extends ei {
      constructor(i, e, n, r, o, a, c, s) {
        super(i, o, a, c),
          (this.sharedStylesHost = e),
          (this.removeStylesOnCompDestroy = r),
          (this.styles = s ? wa(s, n.styles) : n.styles);
      }
      applyStyles() {
        this.sharedStylesHost.addStyles(this.styles);
      }
      destroy() {
        this.removeStylesOnCompDestroy &&
          this.sharedStylesHost.removeStyles(this.styles);
      }
    },
    Ji = class extends ti {
      constructor(i, e, n, r, o, a, c, s) {
        let u = r + "-" + n.id;
        super(i, e, n, o, a, c, s, u),
          (this.contentAttr = $c(u)),
          (this.hostAttr = Hc(u));
      }
      applyToHost(i) {
        this.applyStyles(), this.setAttribute(i, this.hostAttr, "");
      }
      createElement(i, e) {
        let n = super.createElement(i, e);
        return super.setAttribute(n, this.contentAttr, ""), n;
      }
    },
    Gc = (() => {
      class t extends Qi {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, n, r) {
          return (
            e.addEventListener(n, r, !1), () => this.removeEventListener(e, n, r)
          );
        }
        removeEventListener(e, n, r) {
          return e.removeEventListener(n, r);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_($));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })(),
    ba = ["alt", "control", "meta", "shift"],
    qc = {
      "\b": "Backspace",
      "	": "Tab",
      "\x7F": "Delete",
      "\x1B": "Escape",
      Del: "Delete",
      Esc: "Escape",
      Left: "ArrowLeft",
      Right: "ArrowRight",
      Up: "ArrowUp",
      Down: "ArrowDown",
      Menu: "ContextMenu",
      Scroll: "ScrollLock",
      Win: "OS",
    },
    Wc = {
      alt: (t) => t.altKey,
      control: (t) => t.ctrlKey,
      meta: (t) => t.metaKey,
      shift: (t) => t.shiftKey,
    },
    Zc = (() => {
      class t extends Qi {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return t.parseEventName(e) != null;
        }
        addEventListener(e, n, r) {
          let o = t.parseEventName(n),
            a = t.eventCallback(o.fullKey, r, this.manager.getZone());
          return this.manager
            .getZone()
            .runOutsideAngular(() => kt().onAndCancel(e, o.domEventName, a));
        }
        static parseEventName(e) {
          let n = e.toLowerCase().split("."),
            r = n.shift();
          if (n.length === 0 || !(r === "keydown" || r === "keyup")) return null;
          let o = t._normalizeKey(n.pop()),
            a = "",
            c = n.indexOf("code");
          if (
            (c > -1 && (n.splice(c, 1), (a = "code.")),
            ba.forEach((u) => {
              let p = n.indexOf(u);
              p > -1 && (n.splice(p, 1), (a += u + "."));
            }),
            (a += o),
            n.length != 0 || o.length === 0)
          )
            return null;
          let s = {};
          return (s.domEventName = r), (s.fullKey = a), s;
        }
        static matchEventFullKeyCode(e, n) {
          let r = qc[e.key] || e.key,
            o = "";
          return (
            n.indexOf("code.") > -1 && ((r = e.code), (o = "code.")),
            r == null || !r
              ? !1
              : ((r = r.toLowerCase()),
                r === " " ? (r = "space") : r === "." && (r = "dot"),
                ba.forEach((a) => {
                  if (a !== r) {
                    let c = Wc[a];
                    c(e) && (o += a + ".");
                  }
                }),
                (o += r),
                o === n)
          );
        }
        static eventCallback(e, n, r) {
          return (o) => {
            t.matchEventFullKeyCode(o, e) && r.runGuarded(() => n(o));
          };
        }
        static _normalizeKey(e) {
          return e === "esc" ? "escape" : e;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_($));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })();
  function Ca(t, i) {
    return qo(f({ rootComponent: t }, Yc(i)));
  }
  function Yc(t) {
    return {
      appProviders: [...ed, ...(t?.providers ?? [])],
      platformProviders: Jc,
    };
  }
  function Kc() {
    cr.makeCurrent();
  }
  function Qc() {
    return new at();
  }
  function Xc() {
    return So(document), document;
  }
  var Jc = [
    { provide: De, useValue: ea },
    { provide: To, useValue: Kc, multi: !0 },
    { provide: $, useFactory: Xc, deps: [] },
  ];
  var ed = [
    { provide: Do, useValue: "root" },
    { provide: at, useFactory: Qc, deps: [] },
    { provide: dr, useClass: Gc, multi: !0, deps: [$, q, De] },
    { provide: dr, useClass: Zc, multi: !0, deps: [$] },
    Xi,
    ya,
    _a,
    { provide: ji, useExisting: Xi },
    { provide: ta, useClass: jc, deps: [] },
    [],
  ];
  var ka = (() => {
    class t {
      constructor(e) {
        this._doc = e;
      }
      getTitle() {
        return this._doc.title;
      }
      setTitle(e) {
        this._doc.title = e || "";
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(_($));
        };
      }
      static {
        this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
  var pr = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({
            token: t,
            factory: function (n) {
              let r = null;
              return n ? (r = new (n || t)()) : (r = _(td)), r;
            },
            providedIn: "root",
          });
        }
      }
      return t;
    })(),
    td = (() => {
      class t extends pr {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, n) {
          if (n == null) return null;
          switch (e) {
            case me.NONE:
              return n;
            case me.HTML:
              return wt(n, "HTML") ? xt(n) : jo(this._doc, String(n)).toString();
            case me.STYLE:
              return wt(n, "Style") ? xt(n) : n;
            case me.SCRIPT:
              if (wt(n, "Script")) return xt(n);
              throw new U(5200, !1);
            case me.URL:
              return wt(n, "URL") ? xt(n) : Lo(String(n));
            case me.RESOURCE_URL:
              if (wt(n, "ResourceURL")) return xt(n);
              throw new U(5201, !1);
            default:
              throw new U(5202, !1);
          }
        }
        bypassSecurityTrustHtml(e) {
          return Ro(e);
        }
        bypassSecurityTrustStyle(e) {
          return Fo(e);
        }
        bypassSecurityTrustScript(e) {
          return Oo(e);
        }
        bypassSecurityTrustUrl(e) {
          return Po(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return No(e);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_($));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })(),
    ur = (function (t) {
      return (
        (t[(t.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
        (t[(t.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
        (t[(t.I18nSupport = 2)] = "I18nSupport"),
        (t[(t.EventReplay = 3)] = "EventReplay"),
        t
      );
    })(ur || {});
  function Ia(...t) {
    let i = [],
      e = new Set(),
      n = e.has(ur.HttpTransferCacheOptions);
    for (let { ɵproviders: r, ɵkind: o } of t) e.add(o), r.length && i.push(r);
    return ot([[], Wo(), e.has(ur.NoHttpTransferCache) || n ? [] : fa({}), i]);
  }
  var I = "primary",
    vi = Symbol("RouteTitle"),
    _r = class {
      constructor(i) {
        this.params = i || {};
      }
      has(i) {
        return Object.prototype.hasOwnProperty.call(this.params, i);
      }
      get(i) {
        if (this.has(i)) {
          let e = this.params[i];
          return Array.isArray(e) ? e[0] : e;
        }
        return null;
      }
      getAll(i) {
        if (this.has(i)) {
          let e = this.params[i];
          return Array.isArray(e) ? e : [e];
        }
        return [];
      }
      get keys() {
        return Object.keys(this.params);
      }
    };
  function St(t) {
    return new _r(t);
  }
  function nd(t, i, e) {
    let n = e.path.split("/");
    if (
      n.length > t.length ||
      (e.pathMatch === "full" && (i.hasChildren() || n.length < t.length))
    )
      return null;
    let r = {};
    for (let o = 0; o < n.length; o++) {
      let a = n[o],
        c = t[o];
      if (a[0] === ":") r[a.substring(1)] = c;
      else if (a !== c.path) return null;
    }
    return { consumed: t.slice(0, n.length), posParams: r };
  }
  function rd(t, i) {
    if (t.length !== i.length) return !1;
    for (let e = 0; e < t.length; ++e) if (!Le(t[e], i[e])) return !1;
    return !0;
  }
  function Le(t, i) {
    let e = t ? yr(t) : void 0,
      n = i ? yr(i) : void 0;
    if (!e || !n || e.length != n.length) return !1;
    let r;
    for (let o = 0; o < e.length; o++)
      if (((r = e[o]), !Oa(t[r], i[r]))) return !1;
    return !0;
  }
  function yr(t) {
    return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
  }
  function Oa(t, i) {
    if (Array.isArray(t) && Array.isArray(i)) {
      if (t.length !== i.length) return !1;
      let e = [...t].sort(),
        n = [...i].sort();
      return e.every((r, o) => n[o] === r);
    } else return t === i;
  }
  function Pa(t) {
    return t.length > 0 ? t[t.length - 1] : null;
  }
  function Xe(t) {
    return $n(t) ? t : Hi(t) ? le(Promise.resolve(t)) : x(t);
  }
  var od = { exact: La, subset: ja },
    Na = { exact: ad, subset: sd, ignored: () => !0 };
  function Ma(t, i, e) {
    return (
      od[e.paths](t.root, i.root, e.matrixParams) &&
      Na[e.queryParams](t.queryParams, i.queryParams) &&
      !(e.fragment === "exact" && t.fragment !== i.fragment)
    );
  }
  function ad(t, i) {
    return Le(t, i);
  }
  function La(t, i, e) {
    if (
      !mt(t.segments, i.segments) ||
      !nn(t.segments, i.segments, e) ||
      t.numberOfChildren !== i.numberOfChildren
    )
      return !1;
    for (let n in i.children)
      if (!t.children[n] || !La(t.children[n], i.children[n], e)) return !1;
    return !0;
  }
  function sd(t, i) {
    return (
      Object.keys(i).length <= Object.keys(t).length &&
      Object.keys(i).every((e) => Oa(t[e], i[e]))
    );
  }
  function ja(t, i, e) {
    return Va(t, i, i.segments, e);
  }
  function Va(t, i, e, n) {
    if (t.segments.length > e.length) {
      let r = t.segments.slice(0, e.length);
      return !(!mt(r, e) || i.hasChildren() || !nn(r, e, n));
    } else if (t.segments.length === e.length) {
      if (!mt(t.segments, e) || !nn(t.segments, e, n)) return !1;
      for (let r in i.children)
        if (!t.children[r] || !ja(t.children[r], i.children[r], n)) return !1;
      return !0;
    } else {
      let r = e.slice(0, t.segments.length),
        o = e.slice(t.segments.length);
      return !mt(t.segments, r) || !nn(t.segments, r, n) || !t.children[I]
        ? !1
        : Va(t.children[I], i, o, n);
    }
  }
  function nn(t, i, e) {
    return i.every((n, r) => Na[e](t[r].parameters, n.parameters));
  }
  var Ue = class {
      constructor(i = new N([], {}), e = {}, n = null) {
        (this.root = i), (this.queryParams = e), (this.fragment = n);
      }
      get queryParamMap() {
        return (
          (this._queryParamMap ??= St(this.queryParams)), this._queryParamMap
        );
      }
      toString() {
        return ld.serialize(this);
      }
    },
    N = class {
      constructor(i, e) {
        (this.segments = i),
          (this.children = e),
          (this.parent = null),
          Object.values(e).forEach((n) => (n.parent = this));
      }
      hasChildren() {
        return this.numberOfChildren > 0;
      }
      get numberOfChildren() {
        return Object.keys(this.children).length;
      }
      toString() {
        return rn(this);
      }
    },
    ut = class {
      constructor(i, e) {
        (this.path = i), (this.parameters = e);
      }
      get parameterMap() {
        return (this._parameterMap ??= St(this.parameters)), this._parameterMap;
      }
      toString() {
        return za(this);
      }
    };
  function cd(t, i) {
    return mt(t, i) && t.every((e, n) => Le(e.parameters, i[n].parameters));
  }
  function mt(t, i) {
    return t.length !== i.length ? !1 : t.every((e, n) => e.path === i[n].path);
  }
  function dd(t, i) {
    let e = [];
    return (
      Object.entries(t.children).forEach(([n, r]) => {
        n === I && (e = e.concat(i(r, n)));
      }),
      Object.entries(t.children).forEach(([n, r]) => {
        n !== I && (e = e.concat(i(r, n)));
      }),
      e
    );
  }
  var qr = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({
            token: t,
            factory: () => new ci(),
            providedIn: "root",
          });
        }
      }
      return t;
    })(),
    ci = class {
      parse(i) {
        let e = new wr(i);
        return new Ue(
          e.parseRootSegment(),
          e.parseQueryParams(),
          e.parseFragment()
        );
      }
      serialize(i) {
        let e = `/${ii(i.root, !0)}`,
          n = hd(i.queryParams),
          r = typeof i.fragment == "string" ? `#${ud(i.fragment)}` : "";
        return `${e}${n}${r}`;
      }
    },
    ld = new ci();
  function rn(t) {
    return t.segments.map((i) => za(i)).join("/");
  }
  function ii(t, i) {
    if (!t.hasChildren()) return rn(t);
    if (i) {
      let e = t.children[I] ? ii(t.children[I], !1) : "",
        n = [];
      return (
        Object.entries(t.children).forEach(([r, o]) => {
          r !== I && n.push(`${r}:${ii(o, !1)}`);
        }),
        n.length > 0 ? `${e}(${n.join("//")})` : e
      );
    } else {
      let e = dd(t, (n, r) =>
        r === I ? [ii(t.children[I], !1)] : [`${r}:${ii(n, !1)}`]
      );
      return Object.keys(t.children).length === 1 && t.children[I] != null
        ? `${rn(t)}/${e[0]}`
        : `${rn(t)}/(${e.join("//")})`;
    }
  }
  function Ba(t) {
    return encodeURIComponent(t)
      .replace(/%40/g, "@")
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",");
  }
  function en(t) {
    return Ba(t).replace(/%3B/gi, ";");
  }
  function ud(t) {
    return encodeURI(t);
  }
  function xr(t) {
    return Ba(t)
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/%26/gi, "&");
  }
  function on(t) {
    return decodeURIComponent(t);
  }
  function Aa(t) {
    return on(t.replace(/\+/g, "%20"));
  }
  function za(t) {
    return `${xr(t.path)}${md(t.parameters)}`;
  }
  function md(t) {
    return Object.entries(t)
      .map(([i, e]) => `;${xr(i)}=${xr(e)}`)
      .join("");
  }
  function hd(t) {
    let i = Object.entries(t)
      .map(([e, n]) =>
        Array.isArray(n)
          ? n.map((r) => `${en(e)}=${en(r)}`).join("&")
          : `${en(e)}=${en(n)}`
      )
      .filter((e) => e);
    return i.length ? `?${i.join("&")}` : "";
  }
  var pd = /^[^\/()?;#]+/;
  function fr(t) {
    let i = t.match(pd);
    return i ? i[0] : "";
  }
  var fd = /^[^\/()?;=#]+/;
  function gd(t) {
    let i = t.match(fd);
    return i ? i[0] : "";
  }
  var bd = /^[^=?&#]+/;
  function vd(t) {
    let i = t.match(bd);
    return i ? i[0] : "";
  }
  var _d = /^[^&#]+/;
  function yd(t) {
    let i = t.match(_d);
    return i ? i[0] : "";
  }
  var wr = class {
    constructor(i) {
      (this.url = i), (this.remaining = i);
    }
    parseRootSegment() {
      return (
        this.consumeOptional("/"),
        this.remaining === "" ||
        this.peekStartsWith("?") ||
        this.peekStartsWith("#")
          ? new N([], {})
          : new N([], this.parseChildren())
      );
    }
    parseQueryParams() {
      let i = {};
      if (this.consumeOptional("?"))
        do this.parseQueryParam(i);
        while (this.consumeOptional("&"));
      return i;
    }
    parseFragment() {
      return this.consumeOptional("#")
        ? decodeURIComponent(this.remaining)
        : null;
    }
    parseChildren() {
      if (this.remaining === "") return {};
      this.consumeOptional("/");
      let i = [];
      for (
        this.peekStartsWith("(") || i.push(this.parseSegment());
        this.peekStartsWith("/") &&
        !this.peekStartsWith("//") &&
        !this.peekStartsWith("/(");
  
      )
        this.capture("/"), i.push(this.parseSegment());
      let e = {};
      this.peekStartsWith("/(") &&
        (this.capture("/"), (e = this.parseParens(!0)));
      let n = {};
      return (
        this.peekStartsWith("(") && (n = this.parseParens(!1)),
        (i.length > 0 || Object.keys(e).length > 0) && (n[I] = new N(i, e)),
        n
      );
    }
    parseSegment() {
      let i = fr(this.remaining);
      if (i === "" && this.peekStartsWith(";")) throw new U(4009, !1);
      return this.capture(i), new ut(on(i), this.parseMatrixParams());
    }
    parseMatrixParams() {
      let i = {};
      for (; this.consumeOptional(";"); ) this.parseParam(i);
      return i;
    }
    parseParam(i) {
      let e = gd(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        let r = fr(this.remaining);
        r && ((n = r), this.capture(n));
      }
      i[on(e)] = on(n);
    }
    parseQueryParam(i) {
      let e = vd(this.remaining);
      if (!e) return;
      this.capture(e);
      let n = "";
      if (this.consumeOptional("=")) {
        let a = yd(this.remaining);
        a && ((n = a), this.capture(n));
      }
      let r = Aa(e),
        o = Aa(n);
      if (i.hasOwnProperty(r)) {
        let a = i[r];
        Array.isArray(a) || ((a = [a]), (i[r] = a)), a.push(o);
      } else i[r] = o;
    }
    parseParens(i) {
      let e = {};
      for (
        this.capture("(");
        !this.consumeOptional(")") && this.remaining.length > 0;
  
      ) {
        let n = fr(this.remaining),
          r = this.remaining[n.length];
        if (r !== "/" && r !== ")" && r !== ";") throw new U(4010, !1);
        let o;
        n.indexOf(":") > -1
          ? ((o = n.slice(0, n.indexOf(":"))), this.capture(o), this.capture(":"))
          : i && (o = I);
        let a = this.parseChildren();
        (e[o] = Object.keys(a).length === 1 ? a[I] : new N([], a)),
          this.consumeOptional("//");
      }
      return e;
    }
    peekStartsWith(i) {
      return this.remaining.startsWith(i);
    }
    consumeOptional(i) {
      return this.peekStartsWith(i)
        ? ((this.remaining = this.remaining.substring(i.length)), !0)
        : !1;
    }
    capture(i) {
      if (!this.consumeOptional(i)) throw new U(4011, !1);
    }
  };
  function Ua(t) {
    return t.segments.length > 0 ? new N([], { [I]: t }) : t;
  }
  function $a(t) {
    let i = {};
    for (let [n, r] of Object.entries(t.children)) {
      let o = $a(r);
      if (n === I && o.segments.length === 0 && o.hasChildren())
        for (let [a, c] of Object.entries(o.children)) i[a] = c;
      else (o.segments.length > 0 || o.hasChildren()) && (i[n] = o);
    }
    let e = new N(t.segments, i);
    return xd(e);
  }
  function xd(t) {
    if (t.numberOfChildren === 1 && t.children[I]) {
      let i = t.children[I];
      return new N(t.segments.concat(i.segments), i.children);
    }
    return t;
  }
  function di(t) {
    return t instanceof Ue;
  }
  function wd(t, i, e = null, n = null) {
    let r = Ha(t);
    return Ga(r, i, e, n);
  }
  function Ha(t) {
    let i;
    function e(o) {
      let a = {};
      for (let s of o.children) {
        let u = e(s);
        a[s.outlet] = u;
      }
      let c = new N(o.url, a);
      return o === t && (i = c), c;
    }
    let n = e(t.root),
      r = Ua(n);
    return i ?? r;
  }
  function Ga(t, i, e, n) {
    let r = t;
    for (; r.parent; ) r = r.parent;
    if (i.length === 0) return gr(r, r, r, e, n);
    let o = Cd(i);
    if (o.toRoot()) return gr(r, r, new N([], {}), e, n);
    let a = kd(o, r, t),
      c = a.processChildren
        ? oi(a.segmentGroup, a.index, o.commands)
        : Wa(a.segmentGroup, a.index, o.commands);
    return gr(r, a.segmentGroup, c, e, n);
  }
  function an(t) {
    return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
  }
  function li(t) {
    return typeof t == "object" && t != null && t.outlets;
  }
  function gr(t, i, e, n, r) {
    let o = {};
    n &&
      Object.entries(n).forEach(([s, u]) => {
        o[s] = Array.isArray(u) ? u.map((p) => `${p}`) : `${u}`;
      });
    let a;
    t === i ? (a = e) : (a = qa(t, i, e));
    let c = Ua($a(a));
    return new Ue(c, o, r);
  }
  function qa(t, i, e) {
    let n = {};
    return (
      Object.entries(t.children).forEach(([r, o]) => {
        o === i ? (n[r] = e) : (n[r] = qa(o, i, e));
      }),
      new N(t.segments, n)
    );
  }
  var sn = class {
    constructor(i, e, n) {
      if (
        ((this.isAbsolute = i),
        (this.numberOfDoubleDots = e),
        (this.commands = n),
        i && n.length > 0 && an(n[0]))
      )
        throw new U(4003, !1);
      let r = n.find(li);
      if (r && r !== Pa(n)) throw new U(4004, !1);
    }
    toRoot() {
      return (
        this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
      );
    }
  };
  function Cd(t) {
    if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
      return new sn(!0, 0, t);
    let i = 0,
      e = !1,
      n = t.reduce((r, o, a) => {
        if (typeof o == "object" && o != null) {
          if (o.outlets) {
            let c = {};
            return (
              Object.entries(o.outlets).forEach(([s, u]) => {
                c[s] = typeof u == "string" ? u.split("/") : u;
              }),
              [...r, { outlets: c }]
            );
          }
          if (o.segmentPath) return [...r, o.segmentPath];
        }
        return typeof o != "string"
          ? [...r, o]
          : a === 0
          ? (o.split("/").forEach((c, s) => {
              (s == 0 && c === ".") ||
                (s == 0 && c === ""
                  ? (e = !0)
                  : c === ".."
                  ? i++
                  : c != "" && r.push(c));
            }),
            r)
          : [...r, o];
      }, []);
    return new sn(e, i, n);
  }
  var Mt = class {
    constructor(i, e, n) {
      (this.segmentGroup = i), (this.processChildren = e), (this.index = n);
    }
  };
  function kd(t, i, e) {
    if (t.isAbsolute) return new Mt(i, !0, 0);
    if (!e) return new Mt(i, !1, NaN);
    if (e.parent === null) return new Mt(e, !0, 0);
    let n = an(t.commands[0]) ? 0 : 1,
      r = e.segments.length - 1 + n;
    return Id(e, r, t.numberOfDoubleDots);
  }
  function Id(t, i, e) {
    let n = t,
      r = i,
      o = e;
    for (; o > r; ) {
      if (((o -= r), (n = n.parent), !n)) throw new U(4005, !1);
      r = n.segments.length;
    }
    return new Mt(n, !1, r - o);
  }
  function Ed(t) {
    return li(t[0]) ? t[0].outlets : { [I]: t };
  }
  function Wa(t, i, e) {
    if (((t ??= new N([], {})), t.segments.length === 0 && t.hasChildren()))
      return oi(t, i, e);
    let n = Md(t, i, e),
      r = e.slice(n.commandIndex);
    if (n.match && n.pathIndex < t.segments.length) {
      let o = new N(t.segments.slice(0, n.pathIndex), {});
      return (
        (o.children[I] = new N(t.segments.slice(n.pathIndex), t.children)),
        oi(o, 0, r)
      );
    } else
      return n.match && r.length === 0
        ? new N(t.segments, {})
        : n.match && !t.hasChildren()
        ? Cr(t, i, e)
        : n.match
        ? oi(t, 0, r)
        : Cr(t, i, e);
  }
  function oi(t, i, e) {
    if (e.length === 0) return new N(t.segments, {});
    {
      let n = Ed(e),
        r = {};
      if (
        Object.keys(n).some((o) => o !== I) &&
        t.children[I] &&
        t.numberOfChildren === 1 &&
        t.children[I].segments.length === 0
      ) {
        let o = oi(t.children[I], i, e);
        return new N(t.segments, o.children);
      }
      return (
        Object.entries(n).forEach(([o, a]) => {
          typeof a == "string" && (a = [a]),
            a !== null && (r[o] = Wa(t.children[o], i, a));
        }),
        Object.entries(t.children).forEach(([o, a]) => {
          n[o] === void 0 && (r[o] = a);
        }),
        new N(t.segments, r)
      );
    }
  }
  function Md(t, i, e) {
    let n = 0,
      r = i,
      o = { match: !1, pathIndex: 0, commandIndex: 0 };
    for (; r < t.segments.length; ) {
      if (n >= e.length) return o;
      let a = t.segments[r],
        c = e[n];
      if (li(c)) break;
      let s = `${c}`,
        u = n < e.length - 1 ? e[n + 1] : null;
      if (r > 0 && s === void 0) break;
      if (s && u && typeof u == "object" && u.outlets === void 0) {
        if (!Sa(s, u, a)) return o;
        n += 2;
      } else {
        if (!Sa(s, {}, a)) return o;
        n++;
      }
      r++;
    }
    return { match: !0, pathIndex: r, commandIndex: n };
  }
  function Cr(t, i, e) {
    let n = t.segments.slice(0, i),
      r = 0;
    for (; r < e.length; ) {
      let o = e[r];
      if (li(o)) {
        let s = Ad(o.outlets);
        return new N(n, s);
      }
      if (r === 0 && an(e[0])) {
        let s = t.segments[i];
        n.push(new ut(s.path, Da(e[0]))), r++;
        continue;
      }
      let a = li(o) ? o.outlets[I] : `${o}`,
        c = r < e.length - 1 ? e[r + 1] : null;
      a && c && an(c)
        ? (n.push(new ut(a, Da(c))), (r += 2))
        : (n.push(new ut(a, {})), r++);
    }
    return new N(n, {});
  }
  function Ad(t) {
    let i = {};
    return (
      Object.entries(t).forEach(([e, n]) => {
        typeof n == "string" && (n = [n]),
          n !== null && (i[e] = Cr(new N([], {}), 0, n));
      }),
      i
    );
  }
  function Da(t) {
    let i = {};
    return Object.entries(t).forEach(([e, n]) => (i[e] = `${n}`)), i;
  }
  function Sa(t, i, e) {
    return t == e.path && Le(i, e.parameters);
  }
  var ai = "imperative",
    oe = (function (t) {
      return (
        (t[(t.NavigationStart = 0)] = "NavigationStart"),
        (t[(t.NavigationEnd = 1)] = "NavigationEnd"),
        (t[(t.NavigationCancel = 2)] = "NavigationCancel"),
        (t[(t.NavigationError = 3)] = "NavigationError"),
        (t[(t.RoutesRecognized = 4)] = "RoutesRecognized"),
        (t[(t.ResolveStart = 5)] = "ResolveStart"),
        (t[(t.ResolveEnd = 6)] = "ResolveEnd"),
        (t[(t.GuardsCheckStart = 7)] = "GuardsCheckStart"),
        (t[(t.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
        (t[(t.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
        (t[(t.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
        (t[(t.ChildActivationStart = 11)] = "ChildActivationStart"),
        (t[(t.ChildActivationEnd = 12)] = "ChildActivationEnd"),
        (t[(t.ActivationStart = 13)] = "ActivationStart"),
        (t[(t.ActivationEnd = 14)] = "ActivationEnd"),
        (t[(t.Scroll = 15)] = "Scroll"),
        (t[(t.NavigationSkipped = 16)] = "NavigationSkipped"),
        t
      );
    })(oe || {}),
    ke = class {
      constructor(i, e) {
        (this.id = i), (this.url = e);
      }
    },
    ui = class extends ke {
      constructor(i, e, n = "imperative", r = null) {
        super(i, e),
          (this.type = oe.NavigationStart),
          (this.navigationTrigger = n),
          (this.restoredState = r);
      }
      toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
      }
    },
    ht = class extends ke {
      constructor(i, e, n) {
        super(i, e), (this.urlAfterRedirects = n), (this.type = oe.NavigationEnd);
      }
      toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
      }
    },
    be = (function (t) {
      return (
        (t[(t.Redirect = 0)] = "Redirect"),
        (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
        (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
        (t[(t.GuardRejected = 3)] = "GuardRejected"),
        t
      );
    })(be || {}),
    kr = (function (t) {
      return (
        (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
        (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
          "IgnoredByUrlHandlingStrategy"),
        t
      );
    })(kr || {}),
    ze = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.reason = n),
          (this.code = r),
          (this.type = oe.NavigationCancel);
      }
      toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
      }
    },
    pt = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.reason = n),
          (this.code = r),
          (this.type = oe.NavigationSkipped);
      }
    },
    mi = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.error = n),
          (this.target = r),
          (this.type = oe.NavigationError);
      }
      toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
      }
    },
    cn = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.urlAfterRedirects = n),
          (this.state = r),
          (this.type = oe.RoutesRecognized);
      }
      toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    },
    Ir = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.urlAfterRedirects = n),
          (this.state = r),
          (this.type = oe.GuardsCheckStart);
      }
      toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    },
    Er = class extends ke {
      constructor(i, e, n, r, o) {
        super(i, e),
          (this.urlAfterRedirects = n),
          (this.state = r),
          (this.shouldActivate = o),
          (this.type = oe.GuardsCheckEnd);
      }
      toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
      }
    },
    Mr = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.urlAfterRedirects = n),
          (this.state = r),
          (this.type = oe.ResolveStart);
      }
      toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    },
    Ar = class extends ke {
      constructor(i, e, n, r) {
        super(i, e),
          (this.urlAfterRedirects = n),
          (this.state = r),
          (this.type = oe.ResolveEnd);
      }
      toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    },
    Dr = class {
      constructor(i) {
        (this.route = i), (this.type = oe.RouteConfigLoadStart);
      }
      toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`;
      }
    },
    Sr = class {
      constructor(i) {
        (this.route = i), (this.type = oe.RouteConfigLoadEnd);
      }
      toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`;
      }
    },
    Tr = class {
      constructor(i) {
        (this.snapshot = i), (this.type = oe.ChildActivationStart);
      }
      toString() {
        return `ChildActivationStart(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    },
    Rr = class {
      constructor(i) {
        (this.snapshot = i), (this.type = oe.ChildActivationEnd);
      }
      toString() {
        return `ChildActivationEnd(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    },
    Fr = class {
      constructor(i) {
        (this.snapshot = i), (this.type = oe.ActivationStart);
      }
      toString() {
        return `ActivationStart(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    },
    Or = class {
      constructor(i) {
        (this.snapshot = i), (this.type = oe.ActivationEnd);
      }
      toString() {
        return `ActivationEnd(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    };
  var hi = class {},
    Tt = class {
      constructor(i, e) {
        (this.url = i), (this.navigationBehaviorOptions = e);
      }
    };
  function Dd(t, i) {
    return (
      t.providers &&
        !t._injector &&
        (t._injector = $o(t.providers, i, `Route: ${t.path}`)),
      t._injector ?? i
    );
  }
  function Re(t) {
    return t.outlet || I;
  }
  function Sd(t, i) {
    let e = t.filter((n) => Re(n) === i);
    return e.push(...t.filter((n) => Re(n) !== i)), e;
  }
  function _i(t) {
    if (!t) return null;
    if (t.routeConfig?._injector) return t.routeConfig._injector;
    for (let i = t.parent; i; i = i.parent) {
      let e = i.routeConfig;
      if (e?._loadedInjector) return e._loadedInjector;
      if (e?._injector) return e._injector;
    }
    return null;
  }
  var Pr = class {
      get injector() {
        return _i(this.route?.snapshot) ?? this.rootInjector;
      }
      set injector(i) {}
      constructor(i) {
        (this.rootInjector = i),
          (this.outlet = null),
          (this.route = null),
          (this.children = new fn(this.rootInjector)),
          (this.attachRef = null);
      }
    },
    fn = (() => {
      class t {
        constructor(e) {
          (this.rootInjector = e), (this.contexts = new Map());
        }
        onChildOutletCreated(e, n) {
          let r = this.getOrCreateContext(e);
          (r.outlet = n), this.contexts.set(e, r);
        }
        onChildOutletDestroyed(e) {
          let n = this.getContext(e);
          n && ((n.outlet = null), (n.attachRef = null));
        }
        onOutletDeactivated() {
          let e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let n = this.getContext(e);
          return (
            n || ((n = new Pr(this.rootInjector)), this.contexts.set(e, n)), n
          );
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(Ht));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })(),
    dn = class {
      constructor(i) {
        this._root = i;
      }
      get root() {
        return this._root.value;
      }
      parent(i) {
        let e = this.pathFromRoot(i);
        return e.length > 1 ? e[e.length - 2] : null;
      }
      children(i) {
        let e = Nr(i, this._root);
        return e ? e.children.map((n) => n.value) : [];
      }
      firstChild(i) {
        let e = Nr(i, this._root);
        return e && e.children.length > 0 ? e.children[0].value : null;
      }
      siblings(i) {
        let e = Lr(i, this._root);
        return e.length < 2
          ? []
          : e[e.length - 2].children.map((r) => r.value).filter((r) => r !== i);
      }
      pathFromRoot(i) {
        return Lr(i, this._root).map((e) => e.value);
      }
    };
  function Nr(t, i) {
    if (t === i.value) return i;
    for (let e of i.children) {
      let n = Nr(t, e);
      if (n) return n;
    }
    return null;
  }
  function Lr(t, i) {
    if (t === i.value) return [i];
    for (let e of i.children) {
      let n = Lr(t, e);
      if (n.length) return n.unshift(i), n;
    }
    return [];
  }
  var ge = class {
    constructor(i, e) {
      (this.value = i), (this.children = e);
    }
    toString() {
      return `TreeNode(${this.value})`;
    }
  };
  function Et(t) {
    let i = {};
    return t && t.children.forEach((e) => (i[e.value.outlet] = e)), i;
  }
  var ln = class extends dn {
    constructor(i, e) {
      super(i), (this.snapshot = e), Wr(this, i);
    }
    toString() {
      return this.snapshot.toString();
    }
  };
  function Za(t) {
    let i = Td(t),
      e = new de([new ut("", {})]),
      n = new de({}),
      r = new de({}),
      o = new de({}),
      a = new de(""),
      c = new Rt(e, n, o, a, r, I, t, i.root);
    return (c.snapshot = i.root), new ln(new ge(c, []), i);
  }
  function Td(t) {
    let i = {},
      e = {},
      n = {},
      r = "",
      o = new At([], i, n, r, e, I, t, null, {});
    return new mn("", new ge(o, []));
  }
  var Rt = class {
    constructor(i, e, n, r, o, a, c, s) {
      (this.urlSubject = i),
        (this.paramsSubject = e),
        (this.queryParamsSubject = n),
        (this.fragmentSubject = r),
        (this.dataSubject = o),
        (this.outlet = a),
        (this.component = c),
        (this._futureSnapshot = s),
        (this.title = this.dataSubject?.pipe(C((u) => u[vi])) ?? x(void 0)),
        (this.url = i),
        (this.params = e),
        (this.queryParams = n),
        (this.fragment = r),
        (this.data = o);
    }
    get routeConfig() {
      return this._futureSnapshot.routeConfig;
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return (
        (this._paramMap ??= this.params.pipe(C((i) => St(i)))), this._paramMap
      );
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= this.queryParams.pipe(C((i) => St(i)))),
        this._queryParamMap
      );
    }
    toString() {
      return this.snapshot
        ? this.snapshot.toString()
        : `Future(${this._futureSnapshot})`;
    }
  };
  function un(t, i, e = "emptyOnly") {
    let n,
      { routeConfig: r } = t;
    return (
      i !== null &&
      (e === "always" ||
        r?.path === "" ||
        (!i.component && !i.routeConfig?.loadComponent))
        ? (n = {
            params: f(f({}, i.params), t.params),
            data: f(f({}, i.data), t.data),
            resolve: f(f(f(f({}, t.data), i.data), r?.data), t._resolvedData),
          })
        : (n = {
            params: f({}, t.params),
            data: f({}, t.data),
            resolve: f(f({}, t.data), t._resolvedData ?? {}),
          }),
      r && Ka(r) && (n.resolve[vi] = r.title),
      n
    );
  }
  var At = class {
      get title() {
        return this.data?.[vi];
      }
      constructor(i, e, n, r, o, a, c, s, u) {
        (this.url = i),
          (this.params = e),
          (this.queryParams = n),
          (this.fragment = r),
          (this.data = o),
          (this.outlet = a),
          (this.component = c),
          (this.routeConfig = s),
          (this._resolve = u);
      }
      get root() {
        return this._routerState.root;
      }
      get parent() {
        return this._routerState.parent(this);
      }
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      get children() {
        return this._routerState.children(this);
      }
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      get paramMap() {
        return (this._paramMap ??= St(this.params)), this._paramMap;
      }
      get queryParamMap() {
        return (
          (this._queryParamMap ??= St(this.queryParams)), this._queryParamMap
        );
      }
      toString() {
        let i = this.url.map((n) => n.toString()).join("/"),
          e = this.routeConfig ? this.routeConfig.path : "";
        return `Route(url:'${i}', path:'${e}')`;
      }
    },
    mn = class extends dn {
      constructor(i, e) {
        super(e), (this.url = i), Wr(this, e);
      }
      toString() {
        return Ya(this._root);
      }
    };
  function Wr(t, i) {
    (i.value._routerState = t), i.children.forEach((e) => Wr(t, e));
  }
  function Ya(t) {
    let i = t.children.length > 0 ? ` { ${t.children.map(Ya).join(", ")} } ` : "";
    return `${t.value}${i}`;
  }
  function br(t) {
    if (t.snapshot) {
      let i = t.snapshot,
        e = t._futureSnapshot;
      (t.snapshot = e),
        Le(i.queryParams, e.queryParams) ||
          t.queryParamsSubject.next(e.queryParams),
        i.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
        Le(i.params, e.params) || t.paramsSubject.next(e.params),
        rd(i.url, e.url) || t.urlSubject.next(e.url),
        Le(i.data, e.data) || t.dataSubject.next(e.data);
    } else
      (t.snapshot = t._futureSnapshot),
        t.dataSubject.next(t._futureSnapshot.data);
  }
  function jr(t, i) {
    let e = Le(t.params, i.params) && cd(t.url, i.url),
      n = !t.parent != !i.parent;
    return e && !n && (!t.parent || jr(t.parent, i.parent));
  }
  function Ka(t) {
    return typeof t.title == "string" || t.title === null;
  }
  var Rd = (() => {
      class t {
        constructor() {
          (this.activated = null),
            (this._activatedRoute = null),
            (this.name = I),
            (this.activateEvents = new re()),
            (this.deactivateEvents = new re()),
            (this.attachEvents = new re()),
            (this.detachEvents = new re()),
            (this.parentContexts = b(fn)),
            (this.location = b(zo)),
            (this.changeDetector = b(Ce)),
            (this.inputBinder = b(Zr, { optional: !0 })),
            (this.supportsBindingToComponentInputs = !0);
        }
        get activatedComponentRef() {
          return this.activated;
        }
        ngOnChanges(e) {
          if (e.name) {
            let { firstChange: n, previousValue: r } = e.name;
            if (n) return;
            this.isTrackedInParentContexts(r) &&
              (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
              this.initializeOutletWithName();
          }
        }
        ngOnDestroy() {
          this.isTrackedInParentContexts(this.name) &&
            this.parentContexts.onChildOutletDestroyed(this.name),
            this.inputBinder?.unsubscribeFromRouteData(this);
        }
        isTrackedInParentContexts(e) {
          return this.parentContexts.getContext(e)?.outlet === this;
        }
        ngOnInit() {
          this.initializeOutletWithName();
        }
        initializeOutletWithName() {
          if (
            (this.parentContexts.onChildOutletCreated(this.name, this),
            this.activated)
          )
            return;
          let e = this.parentContexts.getContext(this.name);
          e?.route &&
            (e.attachRef
              ? this.attach(e.attachRef, e.route)
              : this.activateWith(e.route, e.injector));
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new U(4012, !1);
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new U(4012, !1);
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new U(4012, !1);
          this.location.detach();
          let e = this.activated;
          return (
            (this.activated = null),
            (this._activatedRoute = null),
            this.detachEvents.emit(e.instance),
            e
          );
        }
        attach(e, n) {
          (this.activated = e),
            (this._activatedRoute = n),
            this.location.insert(e.hostView),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.attachEvents.emit(e.instance);
        }
        deactivate() {
          if (this.activated) {
            let e = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(e);
          }
        }
        activateWith(e, n) {
          if (this.isActivated) throw new U(4013, !1);
          this._activatedRoute = e;
          let r = this.location,
            a = e.snapshot.component,
            c = this.parentContexts.getOrCreateContext(this.name).children,
            s = new Vr(e, c, r.injector);
          (this.activated = r.createComponent(a, {
            index: r.length,
            injector: s,
            environmentInjector: n,
          })),
            this.changeDetector.markForCheck(),
            this.inputBinder?.bindActivatedRouteToOutletComponent(this),
            this.activateEvents.emit(this.activated.instance);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [["router-outlet"]],
            inputs: { name: "name" },
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
              attachEvents: "attach",
              detachEvents: "detach",
            },
            exportAs: ["outlet"],
            standalone: !0,
            features: [We],
          });
        }
      }
      return t;
    })(),
    Vr = class t {
      __ngOutletInjector(i) {
        return new t(this.route, this.childContexts, i);
      }
      constructor(i, e, n) {
        (this.route = i), (this.childContexts = e), (this.parent = n);
      }
      get(i, e) {
        return i === Rt
          ? this.route
          : i === fn
          ? this.childContexts
          : this.parent.get(i, e);
      }
    },
    Zr = new k("");
  function Fd(t, i, e) {
    let n = pi(t, i._root, e ? e._root : void 0);
    return new ln(n, i);
  }
  function pi(t, i, e) {
    if (e && t.shouldReuseRoute(i.value, e.value.snapshot)) {
      let n = e.value;
      n._futureSnapshot = i.value;
      let r = Od(t, i, e);
      return new ge(n, r);
    } else {
      if (t.shouldAttach(i.value)) {
        let o = t.retrieve(i.value);
        if (o !== null) {
          let a = o.route;
          return (
            (a.value._futureSnapshot = i.value),
            (a.children = i.children.map((c) => pi(t, c))),
            a
          );
        }
      }
      let n = Pd(i.value),
        r = i.children.map((o) => pi(t, o));
      return new ge(n, r);
    }
  }
  function Od(t, i, e) {
    return i.children.map((n) => {
      for (let r of e.children)
        if (t.shouldReuseRoute(n.value, r.value.snapshot)) return pi(t, n, r);
      return pi(t, n);
    });
  }
  function Pd(t) {
    return new Rt(
      new de(t.url),
      new de(t.params),
      new de(t.queryParams),
      new de(t.fragment),
      new de(t.data),
      t.outlet,
      t.component,
      t
    );
  }
  var fi = class {
      constructor(i, e) {
        (this.redirectTo = i), (this.navigationBehaviorOptions = e);
      }
    },
    Qa = "ngNavigationCancelingError";
  function hn(t, i) {
    let { redirectTo: e, navigationBehaviorOptions: n } = di(i)
        ? { redirectTo: i, navigationBehaviorOptions: void 0 }
        : i,
      r = Xa(!1, be.Redirect);
    return (r.url = e), (r.navigationBehaviorOptions = n), r;
  }
  function Xa(t, i) {
    let e = new Error(`NavigationCancelingError: ${t || ""}`);
    return (e[Qa] = !0), (e.cancellationCode = i), e;
  }
  function Nd(t) {
    return Ja(t) && di(t.url);
  }
  function Ja(t) {
    return !!t && t[Qa];
  }
  var Ld = (t, i, e, n) =>
      C(
        (r) => (
          new Br(i, r.targetRouterState, r.currentRouterState, e, n).activate(t),
          r
        )
      ),
    Br = class {
      constructor(i, e, n, r, o) {
        (this.routeReuseStrategy = i),
          (this.futureState = e),
          (this.currState = n),
          (this.forwardEvent = r),
          (this.inputBindingEnabled = o);
      }
      activate(i) {
        let e = this.futureState._root,
          n = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(e, n, i),
          br(this.futureState.root),
          this.activateChildRoutes(e, n, i);
      }
      deactivateChildRoutes(i, e, n) {
        let r = Et(e);
        i.children.forEach((o) => {
          let a = o.value.outlet;
          this.deactivateRoutes(o, r[a], n), delete r[a];
        }),
          Object.values(r).forEach((o) => {
            this.deactivateRouteAndItsChildren(o, n);
          });
      }
      deactivateRoutes(i, e, n) {
        let r = i.value,
          o = e ? e.value : null;
        if (r === o)
          if (r.component) {
            let a = n.getContext(r.outlet);
            a && this.deactivateChildRoutes(i, e, a.children);
          } else this.deactivateChildRoutes(i, e, n);
        else o && this.deactivateRouteAndItsChildren(e, n);
      }
      deactivateRouteAndItsChildren(i, e) {
        i.value.component &&
        this.routeReuseStrategy.shouldDetach(i.value.snapshot)
          ? this.detachAndStoreRouteSubtree(i, e)
          : this.deactivateRouteAndOutlet(i, e);
      }
      detachAndStoreRouteSubtree(i, e) {
        let n = e.getContext(i.value.outlet),
          r = n && i.value.component ? n.children : e,
          o = Et(i);
        for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
        if (n && n.outlet) {
          let a = n.outlet.detach(),
            c = n.children.onOutletDeactivated();
          this.routeReuseStrategy.store(i.value.snapshot, {
            componentRef: a,
            route: i,
            contexts: c,
          });
        }
      }
      deactivateRouteAndOutlet(i, e) {
        let n = e.getContext(i.value.outlet),
          r = n && i.value.component ? n.children : e,
          o = Et(i);
        for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
        n &&
          (n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated()),
          (n.attachRef = null),
          (n.route = null));
      }
      activateChildRoutes(i, e, n) {
        let r = Et(e);
        i.children.forEach((o) => {
          this.activateRoutes(o, r[o.value.outlet], n),
            this.forwardEvent(new Or(o.value.snapshot));
        }),
          i.children.length && this.forwardEvent(new Rr(i.value.snapshot));
      }
      activateRoutes(i, e, n) {
        let r = i.value,
          o = e ? e.value : null;
        if ((br(r), r === o))
          if (r.component) {
            let a = n.getOrCreateContext(r.outlet);
            this.activateChildRoutes(i, e, a.children);
          } else this.activateChildRoutes(i, e, n);
        else if (r.component) {
          let a = n.getOrCreateContext(r.outlet);
          if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
            let c = this.routeReuseStrategy.retrieve(r.snapshot);
            this.routeReuseStrategy.store(r.snapshot, null),
              a.children.onOutletReAttached(c.contexts),
              (a.attachRef = c.componentRef),
              (a.route = c.route.value),
              a.outlet && a.outlet.attach(c.componentRef, c.route.value),
              br(c.route.value),
              this.activateChildRoutes(i, null, a.children);
          } else
            (a.attachRef = null),
              (a.route = r),
              a.outlet && a.outlet.activateWith(r, a.injector),
              this.activateChildRoutes(i, null, a.children);
        } else this.activateChildRoutes(i, null, n);
      }
    },
    pn = class {
      constructor(i) {
        (this.path = i), (this.route = this.path[this.path.length - 1]);
      }
    },
    Dt = class {
      constructor(i, e) {
        (this.component = i), (this.route = e);
      }
    };
  function jd(t, i, e) {
    let n = t._root,
      r = i ? i._root : null;
    return ni(n, r, e, [n.value]);
  }
  function Vd(t) {
    let i = t.routeConfig ? t.routeConfig.canActivateChild : null;
    return !i || i.length === 0 ? null : { node: t, guards: i };
  }
  function Ot(t, i) {
    let e = Symbol(),
      n = i.get(t, e);
    return n === e ? (typeof t == "function" && !Ao(t) ? t : i.get(t)) : n;
  }
  function ni(
    t,
    i,
    e,
    n,
    r = { canDeactivateChecks: [], canActivateChecks: [] }
  ) {
    let o = Et(i);
    return (
      t.children.forEach((a) => {
        Bd(a, o[a.value.outlet], e, n.concat([a.value]), r),
          delete o[a.value.outlet];
      }),
      Object.entries(o).forEach(([a, c]) => si(c, e.getContext(a), r)),
      r
    );
  }
  function Bd(
    t,
    i,
    e,
    n,
    r = { canDeactivateChecks: [], canActivateChecks: [] }
  ) {
    let o = t.value,
      a = i ? i.value : null,
      c = e ? e.getContext(t.value.outlet) : null;
    if (a && o.routeConfig === a.routeConfig) {
      let s = zd(a, o, o.routeConfig.runGuardsAndResolvers);
      s
        ? r.canActivateChecks.push(new pn(n))
        : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
        o.component ? ni(t, i, c ? c.children : null, n, r) : ni(t, i, e, n, r),
        s &&
          c &&
          c.outlet &&
          c.outlet.isActivated &&
          r.canDeactivateChecks.push(new Dt(c.outlet.component, a));
    } else
      a && si(i, c, r),
        r.canActivateChecks.push(new pn(n)),
        o.component
          ? ni(t, null, c ? c.children : null, n, r)
          : ni(t, null, e, n, r);
    return r;
  }
  function zd(t, i, e) {
    if (typeof e == "function") return e(t, i);
    switch (e) {
      case "pathParamsChange":
        return !mt(t.url, i.url);
      case "pathParamsOrQueryParamsChange":
        return !mt(t.url, i.url) || !Le(t.queryParams, i.queryParams);
      case "always":
        return !0;
      case "paramsOrQueryParamsChange":
        return !jr(t, i) || !Le(t.queryParams, i.queryParams);
      case "paramsChange":
      default:
        return !jr(t, i);
    }
  }
  function si(t, i, e) {
    let n = Et(t),
      r = t.value;
    Object.entries(n).forEach(([o, a]) => {
      r.component
        ? i
          ? si(a, i.children.getContext(o), e)
          : si(a, null, e)
        : si(a, i, e);
    }),
      r.component
        ? i && i.outlet && i.outlet.isActivated
          ? e.canDeactivateChecks.push(new Dt(i.outlet.component, r))
          : e.canDeactivateChecks.push(new Dt(null, r))
        : e.canDeactivateChecks.push(new Dt(null, r));
  }
  function yi(t) {
    return typeof t == "function";
  }
  function Ud(t) {
    return typeof t == "boolean";
  }
  function $d(t) {
    return t && yi(t.canLoad);
  }
  function Hd(t) {
    return t && yi(t.canActivate);
  }
  function Gd(t) {
    return t && yi(t.canActivateChild);
  }
  function qd(t) {
    return t && yi(t.canDeactivate);
  }
  function Wd(t) {
    return t && yi(t.canMatch);
  }
  function es(t) {
    return t instanceof wo || t?.name === "EmptyError";
  }
  var tn = Symbol("INITIAL_VALUE");
  function Ft() {
    return Ae((t) =>
      Ut(t.map((i) => i.pipe(Me(1), Fi(tn)))).pipe(
        C((i) => {
          for (let e of i)
            if (e !== !0) {
              if (e === tn) return tn;
              if (e === !1 || Zd(e)) return e;
            }
          return !0;
        }),
        Ve((i) => i !== tn),
        Me(1)
      )
    );
  }
  function Zd(t) {
    return di(t) || t instanceof fi;
  }
  function Yd(t, i) {
    return ve((e) => {
      let {
        targetSnapshot: n,
        currentSnapshot: r,
        guards: { canActivateChecks: o, canDeactivateChecks: a },
      } = e;
      return a.length === 0 && o.length === 0
        ? x(z(f({}, e), { guardsResult: !0 }))
        : Kd(a, n, r, t).pipe(
            ve((c) => (c && Ud(c) ? Qd(n, o, t, i) : x(c))),
            C((c) => z(f({}, e), { guardsResult: c }))
          );
    });
  }
  function Kd(t, i, e, n) {
    return le(t).pipe(
      ve((r) => il(r.component, r.route, e, i, n)),
      qe((r) => r !== !0, !0)
    );
  }
  function Qd(t, i, e, n) {
    return le(i).pipe(
      it((r) =>
        Si(
          Jd(r.route.parent, n),
          Xd(r.route, n),
          tl(t, r.path, e),
          el(t, r.route, e)
        )
      ),
      qe((r) => r !== !0, !0)
    );
  }
  function Xd(t, i) {
    return t !== null && i && i(new Fr(t)), x(!0);
  }
  function Jd(t, i) {
    return t !== null && i && i(new Tr(t)), x(!0);
  }
  function el(t, i, e) {
    let n = i.routeConfig ? i.routeConfig.canActivate : null;
    if (!n || n.length === 0) return x(!0);
    let r = n.map((o) =>
      Hn(() => {
        let a = _i(i) ?? e,
          c = Ot(o, a),
          s = Hd(c) ? c.canActivate(i, t) : Oe(a, () => c(i, t));
        return Xe(s).pipe(qe());
      })
    );
    return x(r).pipe(Ft());
  }
  function tl(t, i, e) {
    let n = i[i.length - 1],
      o = i
        .slice(0, i.length - 1)
        .reverse()
        .map((a) => Vd(a))
        .filter((a) => a !== null)
        .map((a) =>
          Hn(() => {
            let c = a.guards.map((s) => {
              let u = _i(a.node) ?? e,
                p = Ot(s, u),
                g = Gd(p) ? p.canActivateChild(n, t) : Oe(u, () => p(n, t));
              return Xe(g).pipe(qe());
            });
            return x(c).pipe(Ft());
          })
        );
    return x(o).pipe(Ft());
  }
  function il(t, i, e, n, r) {
    let o = i && i.routeConfig ? i.routeConfig.canDeactivate : null;
    if (!o || o.length === 0) return x(!0);
    let a = o.map((c) => {
      let s = _i(i) ?? r,
        u = Ot(c, s),
        p = qd(u) ? u.canDeactivate(t, i, e, n) : Oe(s, () => u(t, i, e, n));
      return Xe(p).pipe(qe());
    });
    return x(a).pipe(Ft());
  }
  function nl(t, i, e, n) {
    let r = i.canLoad;
    if (r === void 0 || r.length === 0) return x(!0);
    let o = r.map((a) => {
      let c = Ot(a, t),
        s = $d(c) ? c.canLoad(i, e) : Oe(t, () => c(i, e));
      return Xe(s);
    });
    return x(o).pipe(Ft(), ts(n));
  }
  function ts(t) {
    return xo(
      Y((i) => {
        if (typeof i != "boolean") throw hn(t, i);
      }),
      C((i) => i === !0)
    );
  }
  function rl(t, i, e, n) {
    let r = i.canMatch;
    if (!r || r.length === 0) return x(!0);
    let o = r.map((a) => {
      let c = Ot(a, t),
        s = Wd(c) ? c.canMatch(i, e) : Oe(t, () => c(i, e));
      return Xe(s);
    });
    return x(o).pipe(Ft(), ts(n));
  }
  var gi = class {
      constructor(i) {
        this.segmentGroup = i || null;
      }
    },
    bi = class extends Error {
      constructor(i) {
        super(), (this.urlTree = i);
      }
    };
  function It(t) {
    return tt(new gi(t));
  }
  function ol(t) {
    return tt(new U(4e3, !1));
  }
  function al(t) {
    return tt(Xa(!1, be.GuardRejected));
  }
  var zr = class {
      constructor(i, e) {
        (this.urlSerializer = i), (this.urlTree = e);
      }
      lineralizeSegments(i, e) {
        let n = [],
          r = e.root;
        for (;;) {
          if (((n = n.concat(r.segments)), r.numberOfChildren === 0)) return x(n);
          if (r.numberOfChildren > 1 || !r.children[I])
            return ol(`${i.redirectTo}`);
          r = r.children[I];
        }
      }
      applyRedirectCommands(i, e, n, r, o) {
        if (typeof e != "string") {
          let c = e,
            {
              queryParams: s,
              fragment: u,
              routeConfig: p,
              url: g,
              outlet: D,
              params: Q,
              data: L,
              title: ie,
            } = r,
            ne = Oe(o, () =>
              c({
                params: Q,
                data: L,
                queryParams: s,
                fragment: u,
                routeConfig: p,
                url: g,
                outlet: D,
                title: ie,
              })
            );
          if (ne instanceof Ue) throw new bi(ne);
          e = ne;
        }
        let a = this.applyRedirectCreateUrlTree(
          e,
          this.urlSerializer.parse(e),
          i,
          n
        );
        if (e[0] === "/") throw new bi(a);
        return a;
      }
      applyRedirectCreateUrlTree(i, e, n, r) {
        let o = this.createSegmentGroup(i, e.root, n, r);
        return new Ue(
          o,
          this.createQueryParams(e.queryParams, this.urlTree.queryParams),
          e.fragment
        );
      }
      createQueryParams(i, e) {
        let n = {};
        return (
          Object.entries(i).forEach(([r, o]) => {
            if (typeof o == "string" && o[0] === ":") {
              let c = o.substring(1);
              n[r] = e[c];
            } else n[r] = o;
          }),
          n
        );
      }
      createSegmentGroup(i, e, n, r) {
        let o = this.createSegments(i, e.segments, n, r),
          a = {};
        return (
          Object.entries(e.children).forEach(([c, s]) => {
            a[c] = this.createSegmentGroup(i, s, n, r);
          }),
          new N(o, a)
        );
      }
      createSegments(i, e, n, r) {
        return e.map((o) =>
          o.path[0] === ":" ? this.findPosParam(i, o, r) : this.findOrReturn(o, n)
        );
      }
      findPosParam(i, e, n) {
        let r = n[e.path.substring(1)];
        if (!r) throw new U(4001, !1);
        return r;
      }
      findOrReturn(i, e) {
        let n = 0;
        for (let r of e) {
          if (r.path === i.path) return e.splice(n), r;
          n++;
        }
        return i;
      }
    },
    Ur = {
      matched: !1,
      consumedSegments: [],
      remainingSegments: [],
      parameters: {},
      positionalParamSegments: {},
    };
  function sl(t, i, e, n, r) {
    let o = is(t, i, e);
    return o.matched
      ? ((n = Dd(i, n)),
        rl(n, i, e, r).pipe(C((a) => (a === !0 ? o : f({}, Ur)))))
      : x(o);
  }
  function is(t, i, e) {
    if (i.path === "**") return cl(e);
    if (i.path === "")
      return i.pathMatch === "full" && (t.hasChildren() || e.length > 0)
        ? f({}, Ur)
        : {
            matched: !0,
            consumedSegments: [],
            remainingSegments: e,
            parameters: {},
            positionalParamSegments: {},
          };
    let r = (i.matcher || nd)(e, t, i);
    if (!r) return f({}, Ur);
    let o = {};
    Object.entries(r.posParams ?? {}).forEach(([c, s]) => {
      o[c] = s.path;
    });
    let a =
      r.consumed.length > 0
        ? f(f({}, o), r.consumed[r.consumed.length - 1].parameters)
        : o;
    return {
      matched: !0,
      consumedSegments: r.consumed,
      remainingSegments: e.slice(r.consumed.length),
      parameters: a,
      positionalParamSegments: r.posParams ?? {},
    };
  }
  function cl(t) {
    return {
      matched: !0,
      parameters: t.length > 0 ? Pa(t).parameters : {},
      consumedSegments: t,
      remainingSegments: [],
      positionalParamSegments: {},
    };
  }
  function Ta(t, i, e, n) {
    return e.length > 0 && ul(t, e, n)
      ? {
          segmentGroup: new N(i, ll(n, new N(e, t.children))),
          slicedSegments: [],
        }
      : e.length === 0 && ml(t, e, n)
      ? {
          segmentGroup: new N(t.segments, dl(t, e, n, t.children)),
          slicedSegments: e,
        }
      : { segmentGroup: new N(t.segments, t.children), slicedSegments: e };
  }
  function dl(t, i, e, n) {
    let r = {};
    for (let o of e)
      if (gn(t, i, o) && !n[Re(o)]) {
        let a = new N([], {});
        r[Re(o)] = a;
      }
    return f(f({}, n), r);
  }
  function ll(t, i) {
    let e = {};
    e[I] = i;
    for (let n of t)
      if (n.path === "" && Re(n) !== I) {
        let r = new N([], {});
        e[Re(n)] = r;
      }
    return e;
  }
  function ul(t, i, e) {
    return e.some((n) => gn(t, i, n) && Re(n) !== I);
  }
  function ml(t, i, e) {
    return e.some((n) => gn(t, i, n));
  }
  function gn(t, i, e) {
    return (t.hasChildren() || i.length > 0) && e.pathMatch === "full"
      ? !1
      : e.path === "";
  }
  function hl(t, i, e) {
    return i.length === 0 && !t.children[e];
  }
  var $r = class {};
  function pl(t, i, e, n, r, o, a = "emptyOnly") {
    return new Hr(t, i, e, n, r, a, o).recognize();
  }
  var fl = 31,
    Hr = class {
      constructor(i, e, n, r, o, a, c) {
        (this.injector = i),
          (this.configLoader = e),
          (this.rootComponentType = n),
          (this.config = r),
          (this.urlTree = o),
          (this.paramsInheritanceStrategy = a),
          (this.urlSerializer = c),
          (this.applyRedirects = new zr(this.urlSerializer, this.urlTree)),
          (this.absoluteRedirectCount = 0),
          (this.allowRedirects = !0);
      }
      noMatchError(i) {
        return new U(4002, `'${i.segmentGroup}'`);
      }
      recognize() {
        let i = Ta(this.urlTree.root, [], [], this.config).segmentGroup;
        return this.match(i).pipe(
          C(({ children: e, rootSnapshot: n }) => {
            let r = new ge(n, e),
              o = new mn("", r),
              a = wd(n, [], this.urlTree.queryParams, this.urlTree.fragment);
            return (
              (a.queryParams = this.urlTree.queryParams),
              (o.url = this.urlSerializer.serialize(a)),
              { state: o, tree: a }
            );
          })
        );
      }
      match(i) {
        let e = new At(
          [],
          Object.freeze({}),
          Object.freeze(f({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          Object.freeze({}),
          I,
          this.rootComponentType,
          null,
          {}
        );
        return this.processSegmentGroup(this.injector, this.config, i, I, e).pipe(
          C((n) => ({ children: n, rootSnapshot: e })),
          Ge((n) => {
            if (n instanceof bi)
              return (this.urlTree = n.urlTree), this.match(n.urlTree.root);
            throw n instanceof gi ? this.noMatchError(n) : n;
          })
        );
      }
      processSegmentGroup(i, e, n, r, o) {
        return n.segments.length === 0 && n.hasChildren()
          ? this.processChildren(i, e, n, o)
          : this.processSegment(i, e, n, n.segments, r, !0, o).pipe(
              C((a) => (a instanceof ge ? [a] : []))
            );
      }
      processChildren(i, e, n, r) {
        let o = [];
        for (let a of Object.keys(n.children))
          a === "primary" ? o.unshift(a) : o.push(a);
        return le(o).pipe(
          it((a) => {
            let c = n.children[a],
              s = Sd(e, a);
            return this.processSegmentGroup(i, s, c, a, r);
          }),
          Eo((a, c) => (a.push(...c), a)),
          qn(null),
          Io(),
          ve((a) => {
            if (a === null) return It(n);
            let c = ns(a);
            return gl(c), x(c);
          })
        );
      }
      processSegment(i, e, n, r, o, a, c) {
        return le(e).pipe(
          it((s) =>
            this.processSegmentAgainstRoute(
              s._injector ?? i,
              e,
              s,
              n,
              r,
              o,
              a,
              c
            ).pipe(
              Ge((u) => {
                if (u instanceof gi) return x(null);
                throw u;
              })
            )
          ),
          qe((s) => !!s),
          Ge((s) => {
            if (es(s)) return hl(n, r, o) ? x(new $r()) : It(n);
            throw s;
          })
        );
      }
      processSegmentAgainstRoute(i, e, n, r, o, a, c, s) {
        return Re(n) !== a && (a === I || !gn(r, o, n))
          ? It(r)
          : n.redirectTo === void 0
          ? this.matchSegmentAgainstRoute(i, r, n, o, a, s)
          : this.allowRedirects && c
          ? this.expandSegmentAgainstRouteUsingRedirect(i, r, e, n, o, a, s)
          : It(r);
      }
      expandSegmentAgainstRouteUsingRedirect(i, e, n, r, o, a, c) {
        let {
          matched: s,
          parameters: u,
          consumedSegments: p,
          positionalParamSegments: g,
          remainingSegments: D,
        } = is(e, r, o);
        if (!s) return It(e);
        typeof r.redirectTo == "string" &&
          r.redirectTo[0] === "/" &&
          (this.absoluteRedirectCount++,
          this.absoluteRedirectCount > fl && (this.allowRedirects = !1));
        let Q = new At(
            o,
            u,
            Object.freeze(f({}, this.urlTree.queryParams)),
            this.urlTree.fragment,
            Ra(r),
            Re(r),
            r.component ?? r._loadedComponent ?? null,
            r,
            Fa(r)
          ),
          L = un(Q, c, this.paramsInheritanceStrategy);
        (Q.params = Object.freeze(L.params)), (Q.data = Object.freeze(L.data));
        let ie = this.applyRedirects.applyRedirectCommands(
          p,
          r.redirectTo,
          g,
          Q,
          i
        );
        return this.applyRedirects
          .lineralizeSegments(r, ie)
          .pipe(ve((ne) => this.processSegment(i, n, e, ne.concat(D), a, !1, c)));
      }
      matchSegmentAgainstRoute(i, e, n, r, o, a) {
        let c = sl(e, n, r, i, this.urlSerializer);
        return (
          n.path === "**" && (e.children = {}),
          c.pipe(
            Ae((s) =>
              s.matched
                ? ((i = n._injector ?? i),
                  this.getChildConfig(i, n, r).pipe(
                    Ae(({ routes: u }) => {
                      let p = n._loadedInjector ?? i,
                        {
                          parameters: g,
                          consumedSegments: D,
                          remainingSegments: Q,
                        } = s,
                        L = new At(
                          D,
                          g,
                          Object.freeze(f({}, this.urlTree.queryParams)),
                          this.urlTree.fragment,
                          Ra(n),
                          Re(n),
                          n.component ?? n._loadedComponent ?? null,
                          n,
                          Fa(n)
                        ),
                        ie = un(L, a, this.paramsInheritanceStrategy);
                      (L.params = Object.freeze(ie.params)),
                        (L.data = Object.freeze(ie.data));
                      let { segmentGroup: ne, slicedSegments: Fe } = Ta(
                        e,
                        D,
                        Q,
                        u
                      );
                      if (Fe.length === 0 && ne.hasChildren())
                        return this.processChildren(p, u, ne, L).pipe(
                          C((je) => new ge(L, je))
                        );
                      if (u.length === 0 && Fe.length === 0)
                        return x(new ge(L, []));
                      let et = Re(n) === o;
                      return this.processSegment(
                        p,
                        u,
                        ne,
                        Fe,
                        et ? I : o,
                        !0,
                        L
                      ).pipe(C((je) => new ge(L, je instanceof ge ? [je] : [])));
                    })
                  ))
                : It(e)
            )
          )
        );
      }
      getChildConfig(i, e, n) {
        return e.children
          ? x({ routes: e.children, injector: i })
          : e.loadChildren
          ? e._loadedRoutes !== void 0
            ? x({ routes: e._loadedRoutes, injector: e._loadedInjector })
            : nl(i, e, n, this.urlSerializer).pipe(
                ve((r) =>
                  r
                    ? this.configLoader.loadChildren(i, e).pipe(
                        Y((o) => {
                          (e._loadedRoutes = o.routes),
                            (e._loadedInjector = o.injector);
                        })
                      )
                    : al(e)
                )
              )
          : x({ routes: [], injector: i });
      }
    };
  function gl(t) {
    t.sort((i, e) =>
      i.value.outlet === I
        ? -1
        : e.value.outlet === I
        ? 1
        : i.value.outlet.localeCompare(e.value.outlet)
    );
  }
  function bl(t) {
    let i = t.value.routeConfig;
    return i && i.path === "";
  }
  function ns(t) {
    let i = [],
      e = new Set();
    for (let n of t) {
      if (!bl(n)) {
        i.push(n);
        continue;
      }
      let r = i.find((o) => n.value.routeConfig === o.value.routeConfig);
      r !== void 0 ? (r.children.push(...n.children), e.add(r)) : i.push(n);
    }
    for (let n of e) {
      let r = ns(n.children);
      i.push(new ge(n.value, r));
    }
    return i.filter((n) => !e.has(n));
  }
  function Ra(t) {
    return t.data || {};
  }
  function Fa(t) {
    return t.resolve || {};
  }
  function vl(t, i, e, n, r, o) {
    return ve((a) =>
      pl(t, i, e, n, a.extractedUrl, r, o).pipe(
        C(({ state: c, tree: s }) =>
          z(f({}, a), { targetSnapshot: c, urlAfterRedirects: s })
        )
      )
    );
  }
  function _l(t, i) {
    return ve((e) => {
      let {
        targetSnapshot: n,
        guards: { canActivateChecks: r },
      } = e;
      if (!r.length) return x(e);
      let o = new Set(r.map((s) => s.route)),
        a = new Set();
      for (let s of o) if (!a.has(s)) for (let u of rs(s)) a.add(u);
      let c = 0;
      return le(a).pipe(
        it((s) =>
          o.has(s)
            ? yl(s, n, t, i)
            : ((s.data = un(s, s.parent, t).resolve), x(void 0))
        ),
        Y(() => c++),
        Wn(1),
        ve((s) => (c === a.size ? x(e) : He))
      );
    });
  }
  function rs(t) {
    let i = t.children.map((e) => rs(e)).flat();
    return [t, ...i];
  }
  function yl(t, i, e, n) {
    let r = t.routeConfig,
      o = t._resolve;
    return (
      r?.title !== void 0 && !Ka(r) && (o[vi] = r.title),
      xl(o, t, i, n).pipe(
        C(
          (a) => (
            (t._resolvedData = a), (t.data = un(t, t.parent, e).resolve), null
          )
        )
      )
    );
  }
  function xl(t, i, e, n) {
    let r = yr(t);
    if (r.length === 0) return x({});
    let o = {};
    return le(r).pipe(
      ve((a) =>
        wl(t[a], i, e, n).pipe(
          qe(),
          Y((c) => {
            if (c instanceof fi) throw hn(new ci(), c);
            o[a] = c;
          })
        )
      ),
      Wn(1),
      Co(o),
      Ge((a) => (es(a) ? He : tt(a)))
    );
  }
  function wl(t, i, e, n) {
    let r = _i(i) ?? n,
      o = Ot(t, r),
      a = o.resolve ? o.resolve(i, e) : Oe(r, () => o(i, e));
    return Xe(a);
  }
  function vr(t) {
    return Ae((i) => {
      let e = t(i);
      return e ? le(e).pipe(C(() => i)) : x(i);
    });
  }
  var os = (() => {
      class t {
        buildTitle(e) {
          let n,
            r = e.root;
          for (; r !== void 0; )
            (n = this.getResolvedTitleForRoute(r) ?? n),
              (r = r.children.find((o) => o.outlet === I));
          return n;
        }
        getResolvedTitleForRoute(e) {
          return e.data[vi];
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: () => b(Cl), providedIn: "root" });
        }
      }
      return t;
    })(),
    Cl = (() => {
      class t extends os {
        constructor(e) {
          super(), (this.title = e);
        }
        updateTitle(e) {
          let n = this.buildTitle(e);
          n !== void 0 && this.title.setTitle(n);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(ka));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })(),
    Yr = new k("", { providedIn: "root", factory: () => ({}) }),
    kl = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵcmp = X({
            type: t,
            selectors: [["ng-component"]],
            standalone: !0,
            features: [J],
            decls: 1,
            vars: 0,
            template: function (n, r) {
              n & 1 && R(0, "router-outlet");
            },
            dependencies: [Rd],
            encapsulation: 2,
          });
        }
      }
      return t;
    })();
  function Kr(t) {
    let i = t.children && t.children.map(Kr),
      e = i ? z(f({}, t), { children: i }) : f({}, t);
    return (
      !e.component &&
        !e.loadComponent &&
        (i || e.loadChildren) &&
        e.outlet &&
        e.outlet !== I &&
        (e.component = kl),
      e
    );
  }
  var Qr = new k(""),
    Il = (() => {
      class t {
        constructor() {
          (this.componentLoaders = new WeakMap()),
            (this.childrenLoaders = new WeakMap()),
            (this.compiler = b(Xn));
        }
        loadComponent(e) {
          if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
          if (e._loadedComponent) return x(e._loadedComponent);
          this.onLoadStartListener && this.onLoadStartListener(e);
          let n = Xe(e.loadComponent()).pipe(
              C(as),
              Y((o) => {
                this.onLoadEndListener && this.onLoadEndListener(e),
                  (e._loadedComponent = o);
              }),
              nt(() => {
                this.componentLoaders.delete(e);
              })
            ),
            r = new Un(n, () => new ce()).pipe(zn());
          return this.componentLoaders.set(e, r), r;
        }
        loadChildren(e, n) {
          if (this.childrenLoaders.get(n)) return this.childrenLoaders.get(n);
          if (n._loadedRoutes)
            return x({ routes: n._loadedRoutes, injector: n._loadedInjector });
          this.onLoadStartListener && this.onLoadStartListener(n);
          let o = El(n, this.compiler, e, this.onLoadEndListener).pipe(
              nt(() => {
                this.childrenLoaders.delete(n);
              })
            ),
            a = new Un(o, () => new ce()).pipe(zn());
          return this.childrenLoaders.set(n, a), a;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  function El(t, i, e, n) {
    return Xe(t.loadChildren()).pipe(
      C(as),
      ve((r) =>
        r instanceof Uo || Array.isArray(r) ? x(r) : le(i.compileModuleAsync(r))
      ),
      C((r) => {
        n && n(t);
        let o,
          a,
          c = !1;
        return (
          Array.isArray(r)
            ? ((a = r), (c = !0))
            : ((o = r.create(e).injector),
              (a = o.get(Qr, [], { optional: !0, self: !0 }).flat())),
          { routes: a.map(Kr), injector: o }
        );
      })
    );
  }
  function Ml(t) {
    return t && typeof t == "object" && "default" in t;
  }
  function as(t) {
    return Ml(t) ? t.default : t;
  }
  var Xr = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: () => b(Al), providedIn: "root" });
        }
      }
      return t;
    })(),
    Al = (() => {
      class t {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, n) {
          return e;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })(),
    Dl = new k("");
  var Sl = new k(""),
    Tl = (() => {
      class t {
        get hasRequestedNavigation() {
          return this.navigationId !== 0;
        }
        constructor() {
          (this.currentNavigation = null),
            (this.currentTransition = null),
            (this.lastSuccessfulNavigation = null),
            (this.events = new ce()),
            (this.transitionAbortSubject = new ce()),
            (this.configLoader = b(Il)),
            (this.environmentInjector = b(Ht)),
            (this.urlSerializer = b(qr)),
            (this.rootContexts = b(fn)),
            (this.location = b(Wi)),
            (this.inputBindingEnabled = b(Zr, { optional: !0 }) !== null),
            (this.titleStrategy = b(os)),
            (this.options = b(Yr, { optional: !0 }) || {}),
            (this.paramsInheritanceStrategy =
              this.options.paramsInheritanceStrategy || "emptyOnly"),
            (this.urlHandlingStrategy = b(Xr)),
            (this.createViewTransition = b(Dl, { optional: !0 })),
            (this.navigationErrorHandler = b(Sl, { optional: !0 })),
            (this.navigationId = 0),
            (this.afterPreactivation = () => x(void 0)),
            (this.rootComponentType = null);
          let e = (r) => this.events.next(new Dr(r)),
            n = (r) => this.events.next(new Sr(r));
          (this.configLoader.onLoadEndListener = n),
            (this.configLoader.onLoadStartListener = e);
        }
        complete() {
          this.transitions?.complete();
        }
        handleNavigationRequest(e) {
          let n = ++this.navigationId;
          this.transitions?.next(
            z(f(f({}, this.transitions.value), e), { id: n })
          );
        }
        setupNavigations(e, n, r) {
          return (
            (this.transitions = new de({
              id: 0,
              currentUrlTree: n,
              currentRawUrl: n,
              extractedUrl: this.urlHandlingStrategy.extract(n),
              urlAfterRedirects: this.urlHandlingStrategy.extract(n),
              rawUrl: n,
              extras: {},
              resolve: () => {},
              reject: () => {},
              promise: Promise.resolve(!0),
              source: ai,
              restoredState: null,
              currentSnapshot: r.snapshot,
              targetSnapshot: null,
              currentRouterState: r,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null,
            })),
            this.transitions.pipe(
              Ve((o) => o.id !== 0),
              C((o) =>
                z(f({}, o), {
                  extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
                })
              ),
              Ae((o) => {
                let a = !1,
                  c = !1;
                return x(o).pipe(
                  Ae((s) => {
                    if (this.navigationId > o.id)
                      return (
                        this.cancelNavigationTransition(
                          o,
                          "",
                          be.SupersededByNewNavigation
                        ),
                        He
                      );
                    (this.currentTransition = o),
                      (this.currentNavigation = {
                        id: s.id,
                        initialUrl: s.rawUrl,
                        extractedUrl: s.extractedUrl,
                        targetBrowserUrl:
                          typeof s.extras.browserUrl == "string"
                            ? this.urlSerializer.parse(s.extras.browserUrl)
                            : s.extras.browserUrl,
                        trigger: s.source,
                        extras: s.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? z(f({}, this.lastSuccessfulNavigation), {
                              previousNavigation: null,
                            })
                          : null,
                      });
                    let u =
                        !e.navigated ||
                        this.isUpdatingInternalState() ||
                        this.isUpdatedBrowserUrl(),
                      p = s.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                    if (!u && p !== "reload") {
                      let g = "";
                      return (
                        this.events.next(
                          new pt(
                            s.id,
                            this.urlSerializer.serialize(s.rawUrl),
                            g,
                            kr.IgnoredSameUrlNavigation
                          )
                        ),
                        s.resolve(!1),
                        He
                      );
                    }
                    if (this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))
                      return x(s).pipe(
                        Ae((g) => {
                          let D = this.transitions?.getValue();
                          return (
                            this.events.next(
                              new ui(
                                g.id,
                                this.urlSerializer.serialize(g.extractedUrl),
                                g.source,
                                g.restoredState
                              )
                            ),
                            D !== this.transitions?.getValue()
                              ? He
                              : Promise.resolve(g)
                          );
                        }),
                        vl(
                          this.environmentInjector,
                          this.configLoader,
                          this.rootComponentType,
                          e.config,
                          this.urlSerializer,
                          this.paramsInheritanceStrategy
                        ),
                        Y((g) => {
                          (o.targetSnapshot = g.targetSnapshot),
                            (o.urlAfterRedirects = g.urlAfterRedirects),
                            (this.currentNavigation = z(
                              f({}, this.currentNavigation),
                              { finalUrl: g.urlAfterRedirects }
                            ));
                          let D = new cn(
                            g.id,
                            this.urlSerializer.serialize(g.extractedUrl),
                            this.urlSerializer.serialize(g.urlAfterRedirects),
                            g.targetSnapshot
                          );
                          this.events.next(D);
                        })
                      );
                    if (
                      u &&
                      this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)
                    ) {
                      let {
                          id: g,
                          extractedUrl: D,
                          source: Q,
                          restoredState: L,
                          extras: ie,
                        } = s,
                        ne = new ui(g, this.urlSerializer.serialize(D), Q, L);
                      this.events.next(ne);
                      let Fe = Za(this.rootComponentType).snapshot;
                      return (
                        (this.currentTransition = o =
                          z(f({}, s), {
                            targetSnapshot: Fe,
                            urlAfterRedirects: D,
                            extras: z(f({}, ie), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })),
                        (this.currentNavigation.finalUrl = D),
                        x(o)
                      );
                    } else {
                      let g = "";
                      return (
                        this.events.next(
                          new pt(
                            s.id,
                            this.urlSerializer.serialize(s.extractedUrl),
                            g,
                            kr.IgnoredByUrlHandlingStrategy
                          )
                        ),
                        s.resolve(!1),
                        He
                      );
                    }
                  }),
                  Y((s) => {
                    let u = new Ir(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      this.urlSerializer.serialize(s.urlAfterRedirects),
                      s.targetSnapshot
                    );
                    this.events.next(u);
                  }),
                  C(
                    (s) => (
                      (this.currentTransition = o =
                        z(f({}, s), {
                          guards: jd(
                            s.targetSnapshot,
                            s.currentSnapshot,
                            this.rootContexts
                          ),
                        })),
                      o
                    )
                  ),
                  Yd(this.environmentInjector, (s) => this.events.next(s)),
                  Y((s) => {
                    if (
                      ((o.guardsResult = s.guardsResult),
                      s.guardsResult && typeof s.guardsResult != "boolean")
                    )
                      throw hn(this.urlSerializer, s.guardsResult);
                    let u = new Er(
                      s.id,
                      this.urlSerializer.serialize(s.extractedUrl),
                      this.urlSerializer.serialize(s.urlAfterRedirects),
                      s.targetSnapshot,
                      !!s.guardsResult
                    );
                    this.events.next(u);
                  }),
                  Ve((s) =>
                    s.guardsResult
                      ? !0
                      : (this.cancelNavigationTransition(s, "", be.GuardRejected),
                        !1)
                  ),
                  vr((s) => {
                    if (s.guards.canActivateChecks.length)
                      return x(s).pipe(
                        Y((u) => {
                          let p = new Mr(
                            u.id,
                            this.urlSerializer.serialize(u.extractedUrl),
                            this.urlSerializer.serialize(u.urlAfterRedirects),
                            u.targetSnapshot
                          );
                          this.events.next(p);
                        }),
                        Ae((u) => {
                          let p = !1;
                          return x(u).pipe(
                            _l(
                              this.paramsInheritanceStrategy,
                              this.environmentInjector
                            ),
                            Y({
                              next: () => (p = !0),
                              complete: () => {
                                p ||
                                  this.cancelNavigationTransition(
                                    u,
                                    "",
                                    be.NoDataFromResolver
                                  );
                              },
                            })
                          );
                        }),
                        Y((u) => {
                          let p = new Ar(
                            u.id,
                            this.urlSerializer.serialize(u.extractedUrl),
                            this.urlSerializer.serialize(u.urlAfterRedirects),
                            u.targetSnapshot
                          );
                          this.events.next(p);
                        })
                      );
                  }),
                  vr((s) => {
                    let u = (p) => {
                      let g = [];
                      p.routeConfig?.loadComponent &&
                        !p.routeConfig._loadedComponent &&
                        g.push(
                          this.configLoader.loadComponent(p.routeConfig).pipe(
                            Y((D) => {
                              p.component = D;
                            }),
                            C(() => {})
                          )
                        );
                      for (let D of p.children) g.push(...u(D));
                      return g;
                    };
                    return Ut(u(s.targetSnapshot.root)).pipe(qn(null), Me(1));
                  }),
                  vr(() => this.afterPreactivation()),
                  Ae(() => {
                    let { currentSnapshot: s, targetSnapshot: u } = o,
                      p = this.createViewTransition?.(
                        this.environmentInjector,
                        s.root,
                        u.root
                      );
                    return p ? le(p).pipe(C(() => o)) : x(o);
                  }),
                  C((s) => {
                    let u = Fd(
                      e.routeReuseStrategy,
                      s.targetSnapshot,
                      s.currentRouterState
                    );
                    return (
                      (this.currentTransition = o =
                        z(f({}, s), { targetRouterState: u })),
                      (this.currentNavigation.targetRouterState = u),
                      o
                    );
                  }),
                  Y(() => {
                    this.events.next(new hi());
                  }),
                  Ld(
                    this.rootContexts,
                    e.routeReuseStrategy,
                    (s) => this.events.next(s),
                    this.inputBindingEnabled
                  ),
                  Me(1),
                  Y({
                    next: (s) => {
                      (a = !0),
                        (this.lastSuccessfulNavigation = this.currentNavigation),
                        this.events.next(
                          new ht(
                            s.id,
                            this.urlSerializer.serialize(s.extractedUrl),
                            this.urlSerializer.serialize(s.urlAfterRedirects)
                          )
                        ),
                        this.titleStrategy?.updateTitle(
                          s.targetRouterState.snapshot
                        ),
                        s.resolve(!0);
                    },
                    complete: () => {
                      a = !0;
                    },
                  }),
                  vt(
                    this.transitionAbortSubject.pipe(
                      Y((s) => {
                        throw s;
                      })
                    )
                  ),
                  nt(() => {
                    !a &&
                      !c &&
                      this.cancelNavigationTransition(
                        o,
                        "",
                        be.SupersededByNewNavigation
                      ),
                      this.currentTransition?.id === o.id &&
                        ((this.currentNavigation = null),
                        (this.currentTransition = null));
                  }),
                  Ge((s) => {
                    if (((c = !0), Ja(s)))
                      this.events.next(
                        new ze(
                          o.id,
                          this.urlSerializer.serialize(o.extractedUrl),
                          s.message,
                          s.cancellationCode
                        )
                      ),
                        Nd(s)
                          ? this.events.next(
                              new Tt(s.url, s.navigationBehaviorOptions)
                            )
                          : o.resolve(!1);
                    else {
                      let u = new mi(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        s,
                        o.targetSnapshot ?? void 0
                      );
                      try {
                        let p = Oe(this.environmentInjector, () =>
                          this.navigationErrorHandler?.(u)
                        );
                        if (p instanceof fi) {
                          let { message: g, cancellationCode: D } = hn(
                            this.urlSerializer,
                            p
                          );
                          this.events.next(
                            new ze(
                              o.id,
                              this.urlSerializer.serialize(o.extractedUrl),
                              g,
                              D
                            )
                          ),
                            this.events.next(
                              new Tt(p.redirectTo, p.navigationBehaviorOptions)
                            );
                        } else {
                          this.events.next(u);
                          let g = e.errorHandler(s);
                          o.resolve(!!g);
                        }
                      } catch (p) {
                        this.options.resolveNavigationPromiseOnError
                          ? o.resolve(!1)
                          : o.reject(p);
                      }
                    }
                    return He;
                  })
                );
              })
            )
          );
        }
        cancelNavigationTransition(e, n, r) {
          let o = new ze(
            e.id,
            this.urlSerializer.serialize(e.extractedUrl),
            n,
            r
          );
          this.events.next(o), e.resolve(!1);
        }
        isUpdatingInternalState() {
          return (
            this.currentTransition?.extractedUrl.toString() !==
            this.currentTransition?.currentUrlTree.toString()
          );
        }
        isUpdatedBrowserUrl() {
          let e = this.urlHandlingStrategy.extract(
              this.urlSerializer.parse(this.location.path(!0))
            ),
            n =
              this.currentNavigation?.targetBrowserUrl ??
              this.currentNavigation?.extractedUrl;
          return (
            e.toString() !== n?.toString() &&
            !this.currentNavigation?.extras.skipLocationChange
          );
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  function Rl(t) {
    return t !== ai;
  }
  var Fl = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: () => b(Ol), providedIn: "root" });
        }
      }
      return t;
    })(),
    Gr = class {
      shouldDetach(i) {
        return !1;
      }
      store(i, e) {}
      shouldAttach(i) {
        return !1;
      }
      retrieve(i) {
        return null;
      }
      shouldReuseRoute(i, e) {
        return i.routeConfig === e.routeConfig;
      }
    },
    Ol = (() => {
      class t extends Gr {
        static {
          this.ɵfac = (() => {
            let e;
            return function (r) {
              return (e || (e = _t(t)))(r || t);
            };
          })();
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })(),
    ss = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: () => b(Pl), providedIn: "root" });
        }
      }
      return t;
    })(),
    Pl = (() => {
      class t extends ss {
        constructor() {
          super(...arguments),
            (this.location = b(Wi)),
            (this.urlSerializer = b(qr)),
            (this.options = b(Yr, { optional: !0 }) || {}),
            (this.canceledNavigationResolution =
              this.options.canceledNavigationResolution || "replace"),
            (this.urlHandlingStrategy = b(Xr)),
            (this.urlUpdateStrategy =
              this.options.urlUpdateStrategy || "deferred"),
            (this.currentUrlTree = new Ue()),
            (this.rawUrlTree = this.currentUrlTree),
            (this.currentPageId = 0),
            (this.lastSuccessfulId = -1),
            (this.routerState = Za(null)),
            (this.stateMemento = this.createStateMemento());
        }
        getCurrentUrlTree() {
          return this.currentUrlTree;
        }
        getRawUrlTree() {
          return this.rawUrlTree;
        }
        restoredState() {
          return this.location.getState();
        }
        get browserPageId() {
          return this.canceledNavigationResolution !== "computed"
            ? this.currentPageId
            : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
        }
        getRouterState() {
          return this.routerState;
        }
        createStateMemento() {
          return {
            rawUrlTree: this.rawUrlTree,
            currentUrlTree: this.currentUrlTree,
            routerState: this.routerState,
          };
        }
        registerNonRouterCurrentEntryChangeListener(e) {
          return this.location.subscribe((n) => {
            n.type === "popstate" && e(n.url, n.state);
          });
        }
        handleRouterEvent(e, n) {
          if (e instanceof ui) this.stateMemento = this.createStateMemento();
          else if (e instanceof pt) this.rawUrlTree = n.initialUrl;
          else if (e instanceof cn) {
            if (
              this.urlUpdateStrategy === "eager" &&
              !n.extras.skipLocationChange
            ) {
              let r = this.urlHandlingStrategy.merge(n.finalUrl, n.initialUrl);
              this.setBrowserUrl(n.targetBrowserUrl ?? r, n);
            }
          } else
            e instanceof hi
              ? ((this.currentUrlTree = n.finalUrl),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  n.finalUrl,
                  n.initialUrl
                )),
                (this.routerState = n.targetRouterState),
                this.urlUpdateStrategy === "deferred" &&
                  !n.extras.skipLocationChange &&
                  this.setBrowserUrl(n.targetBrowserUrl ?? this.rawUrlTree, n))
              : e instanceof ze &&
                (e.code === be.GuardRejected || e.code === be.NoDataFromResolver)
              ? this.restoreHistory(n)
              : e instanceof mi
              ? this.restoreHistory(n, !0)
              : e instanceof ht &&
                ((this.lastSuccessfulId = e.id),
                (this.currentPageId = this.browserPageId));
        }
        setBrowserUrl(e, n) {
          let r = e instanceof Ue ? this.urlSerializer.serialize(e) : e;
          if (this.location.isCurrentPathEqualTo(r) || n.extras.replaceUrl) {
            let o = this.browserPageId,
              a = f(f({}, n.extras.state), this.generateNgRouterState(n.id, o));
            this.location.replaceState(r, "", a);
          } else {
            let o = f(
              f({}, n.extras.state),
              this.generateNgRouterState(n.id, this.browserPageId + 1)
            );
            this.location.go(r, "", o);
          }
        }
        restoreHistory(e, n = !1) {
          if (this.canceledNavigationResolution === "computed") {
            let r = this.browserPageId,
              o = this.currentPageId - r;
            o !== 0
              ? this.location.historyGo(o)
              : this.currentUrlTree === e.finalUrl &&
                o === 0 &&
                (this.resetState(e), this.resetUrlToCurrentUrlTree());
          } else
            this.canceledNavigationResolution === "replace" &&
              (n && this.resetState(e), this.resetUrlToCurrentUrlTree());
        }
        resetState(e) {
          (this.routerState = this.stateMemento.routerState),
            (this.currentUrlTree = this.stateMemento.currentUrlTree),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(
              this.currentUrlTree,
              e.finalUrl ?? this.rawUrlTree
            ));
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(
            this.urlSerializer.serialize(this.rawUrlTree),
            "",
            this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
          );
        }
        generateNgRouterState(e, n) {
          return this.canceledNavigationResolution === "computed"
            ? { navigationId: e, ɵrouterPageId: n }
            : { navigationId: e };
        }
        static {
          this.ɵfac = (() => {
            let e;
            return function (r) {
              return (e || (e = _t(t)))(r || t);
            };
          })();
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })(),
    ri = (function (t) {
      return (
        (t[(t.COMPLETE = 0)] = "COMPLETE"),
        (t[(t.FAILED = 1)] = "FAILED"),
        (t[(t.REDIRECTING = 2)] = "REDIRECTING"),
        t
      );
    })(ri || {});
  function Nl(t, i) {
    t.events
      .pipe(
        Ve(
          (e) =>
            e instanceof ht ||
            e instanceof ze ||
            e instanceof mi ||
            e instanceof pt
        ),
        C((e) =>
          e instanceof ht || e instanceof pt
            ? ri.COMPLETE
            : (
                e instanceof ze
                  ? e.code === be.Redirect ||
                    e.code === be.SupersededByNewNavigation
                  : !1
              )
            ? ri.REDIRECTING
            : ri.FAILED
        ),
        Ve((e) => e !== ri.REDIRECTING),
        Me(1)
      )
      .subscribe(() => {
        i();
      });
  }
  function Ll(t) {
    throw t;
  }
  var jl = {
      paths: "exact",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "exact",
    },
    Vl = {
      paths: "subset",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "subset",
    },
    cs = (() => {
      class t {
        get currentUrlTree() {
          return this.stateManager.getCurrentUrlTree();
        }
        get rawUrlTree() {
          return this.stateManager.getRawUrlTree();
        }
        get events() {
          return this._events;
        }
        get routerState() {
          return this.stateManager.getRouterState();
        }
        constructor() {
          (this.disposed = !1),
            (this.console = b($i)),
            (this.stateManager = b(ss)),
            (this.options = b(Yr, { optional: !0 }) || {}),
            (this.pendingTasks = b(Yn)),
            (this.urlUpdateStrategy =
              this.options.urlUpdateStrategy || "deferred"),
            (this.navigationTransitions = b(Tl)),
            (this.urlSerializer = b(qr)),
            (this.location = b(Wi)),
            (this.urlHandlingStrategy = b(Xr)),
            (this._events = new ce()),
            (this.errorHandler = this.options.errorHandler || Ll),
            (this.navigated = !1),
            (this.routeReuseStrategy = b(Fl)),
            (this.onSameUrlNavigation =
              this.options.onSameUrlNavigation || "ignore"),
            (this.config = b(Qr, { optional: !0 })?.flat() ?? []),
            (this.componentInputBindingEnabled = !!b(Zr, { optional: !0 })),
            (this.eventsSubscription = new zt()),
            this.resetConfig(this.config),
            this.navigationTransitions
              .setupNavigations(this, this.currentUrlTree, this.routerState)
              .subscribe({
                error: (e) => {
                  this.console.warn(e);
                },
              }),
            this.subscribeToNavigationEvents();
        }
        subscribeToNavigationEvents() {
          let e = this.navigationTransitions.events.subscribe((n) => {
            try {
              let r = this.navigationTransitions.currentTransition,
                o = this.navigationTransitions.currentNavigation;
              if (r !== null && o !== null) {
                if (
                  (this.stateManager.handleRouterEvent(n, o),
                  n instanceof ze &&
                    n.code !== be.Redirect &&
                    n.code !== be.SupersededByNewNavigation)
                )
                  this.navigated = !0;
                else if (n instanceof ht) this.navigated = !0;
                else if (n instanceof Tt) {
                  let a = n.navigationBehaviorOptions,
                    c = this.urlHandlingStrategy.merge(n.url, r.currentRawUrl),
                    s = f(
                      {
                        browserUrl: r.extras.browserUrl,
                        info: r.extras.info,
                        skipLocationChange: r.extras.skipLocationChange,
                        replaceUrl:
                          r.extras.replaceUrl ||
                          this.urlUpdateStrategy === "eager" ||
                          Rl(r.source),
                      },
                      a
                    );
                  this.scheduleNavigation(c, ai, null, s, {
                    resolve: r.resolve,
                    reject: r.reject,
                    promise: r.promise,
                  });
                }
              }
              zl(n) && this._events.next(n);
            } catch (r) {
              this.navigationTransitions.transitionAbortSubject.next(r);
            }
          });
          this.eventsSubscription.add(e);
        }
        resetRootComponentType(e) {
          (this.routerState.root.component = e),
            (this.navigationTransitions.rootComponentType = e);
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            this.navigationTransitions.hasRequestedNavigation ||
              this.navigateToSyncWithBrowser(
                this.location.path(!0),
                ai,
                this.stateManager.restoredState()
              );
        }
        setUpLocationChangeListener() {
          this.nonRouterCurrentEntryChangeSubscription ??=
            this.stateManager.registerNonRouterCurrentEntryChangeListener(
              (e, n) => {
                setTimeout(() => {
                  this.navigateToSyncWithBrowser(e, "popstate", n);
                }, 0);
              }
            );
        }
        navigateToSyncWithBrowser(e, n, r) {
          let o = { replaceUrl: !0 },
            a = r?.navigationId ? r : null;
          if (r) {
            let s = f({}, r);
            delete s.navigationId,
              delete s.ɵrouterPageId,
              Object.keys(s).length !== 0 && (o.state = s);
          }
          let c = this.parseUrl(e);
          this.scheduleNavigation(c, n, a, o);
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.navigationTransitions.currentNavigation;
        }
        get lastSuccessfulNavigation() {
          return this.navigationTransitions.lastSuccessfulNavigation;
        }
        resetConfig(e) {
          (this.config = e.map(Kr)), (this.navigated = !1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.navigationTransitions.complete(),
            this.nonRouterCurrentEntryChangeSubscription &&
              (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
              (this.nonRouterCurrentEntryChangeSubscription = void 0)),
            (this.disposed = !0),
            this.eventsSubscription.unsubscribe();
        }
        createUrlTree(e, n = {}) {
          let {
              relativeTo: r,
              queryParams: o,
              fragment: a,
              queryParamsHandling: c,
              preserveFragment: s,
            } = n,
            u = s ? this.currentUrlTree.fragment : a,
            p = null;
          switch (c ?? this.options.defaultQueryParamsHandling) {
            case "merge":
              p = f(f({}, this.currentUrlTree.queryParams), o);
              break;
            case "preserve":
              p = this.currentUrlTree.queryParams;
              break;
            default:
              p = o || null;
          }
          p !== null && (p = this.removeEmptyProps(p));
          let g;
          try {
            let D = r ? r.snapshot : this.routerState.snapshot.root;
            g = Ha(D);
          } catch {
            (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
              (g = this.currentUrlTree.root);
          }
          return Ga(g, e, p, u ?? null);
        }
        navigateByUrl(e, n = { skipLocationChange: !1 }) {
          let r = di(e) ? e : this.parseUrl(e),
            o = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
          return this.scheduleNavigation(o, ai, null, n);
        }
        navigate(e, n = { skipLocationChange: !1 }) {
          return Bl(e), this.navigateByUrl(this.createUrlTree(e, n), n);
        }
        serializeUrl(e) {
          return this.urlSerializer.serialize(e);
        }
        parseUrl(e) {
          try {
            return this.urlSerializer.parse(e);
          } catch {
            return this.urlSerializer.parse("/");
          }
        }
        isActive(e, n) {
          let r;
          if (
            (n === !0 ? (r = f({}, jl)) : n === !1 ? (r = f({}, Vl)) : (r = n),
            di(e))
          )
            return Ma(this.currentUrlTree, e, r);
          let o = this.parseUrl(e);
          return Ma(this.currentUrlTree, o, r);
        }
        removeEmptyProps(e) {
          return Object.entries(e).reduce(
            (n, [r, o]) => (o != null && (n[r] = o), n),
            {}
          );
        }
        scheduleNavigation(e, n, r, o, a) {
          if (this.disposed) return Promise.resolve(!1);
          let c, s, u;
          a
            ? ((c = a.resolve), (s = a.reject), (u = a.promise))
            : (u = new Promise((g, D) => {
                (c = g), (s = D);
              }));
          let p = this.pendingTasks.add();
          return (
            Nl(this, () => {
              queueMicrotask(() => this.pendingTasks.remove(p));
            }),
            this.navigationTransitions.handleNavigationRequest({
              source: n,
              restoredState: r,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              rawUrl: e,
              extras: o,
              resolve: c,
              reject: s,
              promise: u,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState,
            }),
            u.catch((g) => Promise.reject(g))
          );
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  function Bl(t) {
    for (let i = 0; i < t.length; i++) if (t[i] == null) throw new U(4008, !1);
  }
  function zl(t) {
    return !(t instanceof hi) && !(t instanceof Tt);
  }
  var Ul = new k("");
  function ds(t, ...i) {
    return ot([
      { provide: Qr, multi: !0, useValue: t },
      [],
      { provide: Rt, useFactory: $l, deps: [cs] },
      { provide: Gi, multi: !0, useFactory: Hl },
      i.map((e) => e.ɵproviders),
    ]);
  }
  function $l(t) {
    return t.routerState.root;
  }
  function Hl() {
    let t = b(yt);
    return (i) => {
      let e = t.get(Zt);
      if (i !== e.components[0]) return;
      let n = t.get(cs),
        r = t.get(Gl);
      t.get(ql) === 1 && n.initialNavigation(),
        t.get(Wl, null, Zn.Optional)?.setUpPreloading(),
        t.get(Ul, null, Zn.Optional)?.init(),
        n.resetRootComponentType(e.componentTypes[0]),
        r.closed || (r.next(), r.complete(), r.unsubscribe());
    };
  }
  var Gl = new k("", { factory: () => new ce() }),
    ql = new k("", { providedIn: "root", factory: () => 1 });
  var Wl = new k("");
  var ls = [];
  var Zl = "@",
    Yl = (() => {
      class t {
        constructor(e, n, r, o, a) {
          (this.doc = e),
            (this.delegate = n),
            (this.zone = r),
            (this.animationType = o),
            (this.moduleImpl = a),
            (this._rendererFactoryPromise = null),
            (this.scheduler = b(Bo, { optional: !0 })),
            (this.loadingSchedulerFn = b(Kl, { optional: !0 }));
        }
        ngOnDestroy() {
          this._engine?.flush();
        }
        loadImpl() {
          let e = () =>
              this.moduleImpl ?? import("./chunk-UF7BI4HY.js").then((r) => r),
            n;
          return (
            this.loadingSchedulerFn
              ? (n = this.loadingSchedulerFn(e))
              : (n = e()),
            n
              .catch((r) => {
                throw new U(5300, !1);
              })
              .then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: o }) => {
                this._engine = r(this.animationType, this.doc);
                let a = new o(this.delegate, this._engine, this.zone);
                return (this.delegate = a), a;
              })
          );
        }
        createRenderer(e, n) {
          let r = this.delegate.createRenderer(e, n);
          if (r.ɵtype === 0) return r;
          typeof r.throwOnSyntheticProps == "boolean" &&
            (r.throwOnSyntheticProps = !1);
          let o = new Jr(r);
          return (
            n?.data?.animation &&
              !this._rendererFactoryPromise &&
              (this._rendererFactoryPromise = this.loadImpl()),
            this._rendererFactoryPromise
              ?.then((a) => {
                let c = a.createRenderer(e, n);
                o.use(c), this.scheduler?.notify(10);
              })
              .catch((a) => {
                o.use(r);
              }),
            o
          );
        }
        begin() {
          this.delegate.begin?.();
        }
        end() {
          this.delegate.end?.();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
        }
        static {
          this.ɵfac = function (n) {
            Li();
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac });
        }
      }
      return t;
    })(),
    Jr = class {
      constructor(i) {
        (this.delegate = i), (this.replay = []), (this.ɵtype = 1);
      }
      use(i) {
        if (((this.delegate = i), this.replay !== null)) {
          for (let e of this.replay) e(i);
          this.replay = null;
        }
      }
      get data() {
        return this.delegate.data;
      }
      destroy() {
        (this.replay = null), this.delegate.destroy();
      }
      createElement(i, e) {
        return this.delegate.createElement(i, e);
      }
      createComment(i) {
        return this.delegate.createComment(i);
      }
      createText(i) {
        return this.delegate.createText(i);
      }
      get destroyNode() {
        return this.delegate.destroyNode;
      }
      appendChild(i, e) {
        this.delegate.appendChild(i, e);
      }
      insertBefore(i, e, n, r) {
        this.delegate.insertBefore(i, e, n, r);
      }
      removeChild(i, e, n) {
        this.delegate.removeChild(i, e, n);
      }
      selectRootElement(i, e) {
        return this.delegate.selectRootElement(i, e);
      }
      parentNode(i) {
        return this.delegate.parentNode(i);
      }
      nextSibling(i) {
        return this.delegate.nextSibling(i);
      }
      setAttribute(i, e, n, r) {
        this.delegate.setAttribute(i, e, n, r);
      }
      removeAttribute(i, e, n) {
        this.delegate.removeAttribute(i, e, n);
      }
      addClass(i, e) {
        this.delegate.addClass(i, e);
      }
      removeClass(i, e) {
        this.delegate.removeClass(i, e);
      }
      setStyle(i, e, n, r) {
        this.delegate.setStyle(i, e, n, r);
      }
      removeStyle(i, e, n) {
        this.delegate.removeStyle(i, e, n);
      }
      setProperty(i, e, n) {
        this.shouldReplay(e) && this.replay.push((r) => r.setProperty(i, e, n)),
          this.delegate.setProperty(i, e, n);
      }
      setValue(i, e) {
        this.delegate.setValue(i, e);
      }
      listen(i, e, n) {
        return (
          this.shouldReplay(e) && this.replay.push((r) => r.listen(i, e, n)),
          this.delegate.listen(i, e, n)
        );
      }
      shouldReplay(i) {
        return this.replay !== null && i.startsWith(Zl);
      }
    },
    Kl = new k("");
  function us(t = "animations") {
    return (
      Bi("NgAsyncAnimations"),
      ot([
        {
          provide: ji,
          useFactory: (i, e, n) => new Yl(i, e, n, t),
          deps: [$, Xi, q],
        },
        {
          provide: Ye,
          useValue: t === "noop" ? "NoopAnimations" : "BrowserAnimations",
        },
      ])
    );
  }
  var ms = { providers: [Go({ eventCoalescing: !0 }), ds(ls), Ia(), us()] };
  var to;
  try {
    to = typeof Intl < "u" && Intl.v8BreakIterator;
  } catch {
    to = !1;
  }
  var Ie = (() => {
    class t {
      constructor(e) {
        (this._platformId = e),
          (this.isBrowser = this._platformId
            ? Ke(this._platformId)
            : typeof document == "object" && !!document),
          (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
          (this.TRIDENT =
            this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
          (this.BLINK =
            this.isBrowser &&
            !!(window.chrome || to) &&
            typeof CSS < "u" &&
            !this.EDGE &&
            !this.TRIDENT),
          (this.WEBKIT =
            this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) &&
            !this.BLINK &&
            !this.EDGE &&
            !this.TRIDENT),
          (this.IOS =
            this.isBrowser &&
            /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !("MSStream" in window)),
          (this.FIREFOX =
            this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
          (this.ANDROID =
            this.isBrowser &&
            /android/i.test(navigator.userAgent) &&
            !this.TRIDENT),
          (this.SAFARI =
            this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(_(De));
        };
      }
      static {
        this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
  var xi;
  function Ql() {
    if (xi == null && typeof window < "u")
      try {
        window.addEventListener(
          "test",
          null,
          Object.defineProperty({}, "passive", { get: () => (xi = !0) })
        );
      } finally {
        xi = xi || !1;
      }
    return xi;
  }
  function Pt(t) {
    return Ql() ? t : !!t.capture;
  }
  var eo;
  function Xl() {
    if (eo == null) {
      let t = typeof document < "u" ? document.head : null;
      eo = !!(t && (t.createShadowRoot || t.attachShadow));
    }
    return eo;
  }
  function hs(t) {
    if (Xl()) {
      let i = t.getRootNode ? t.getRootNode() : null;
      if (typeof ShadowRoot < "u" && ShadowRoot && i instanceof ShadowRoot)
        return i;
    }
    return null;
  }
  function Je(t) {
    return t.composedPath ? t.composedPath()[0] : t.target;
  }
  function ps() {
    return (
      (typeof __karma__ < "u" && !!__karma__) ||
      (typeof jasmine < "u" && !!jasmine) ||
      (typeof jest < "u" && !!jest) ||
      (typeof Mocha < "u" && !!Mocha)
    );
  }
  function io(t) {
    return Array.isArray(t) ? t : [t];
  }
  function ft(t) {
    return t instanceof W ? t.nativeElement : t;
  }
  var Jl = (() => {
    class t {
      create(e) {
        return typeof MutationObserver > "u" ? null : new MutationObserver(e);
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
  var fs = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ providers: [Jl] });
      }
    }
    return t;
  })();
  var gs = new Set(),
    gt,
    eu = (() => {
      class t {
        constructor(e, n) {
          (this._platform = e),
            (this._nonce = n),
            (this._matchMedia =
              this._platform.isBrowser && window.matchMedia
                ? window.matchMedia.bind(window)
                : iu);
        }
        matchMedia(e) {
          return (
            (this._platform.WEBKIT || this._platform.BLINK) && tu(e, this._nonce),
            this._matchMedia(e)
          );
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(Ie), _(Gt, 8));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  function tu(t, i) {
    if (!gs.has(t))
      try {
        gt ||
          ((gt = document.createElement("style")),
          i && gt.setAttribute("nonce", i),
          gt.setAttribute("type", "text/css"),
          document.head.appendChild(gt)),
          gt.sheet &&
            (gt.sheet.insertRule(`@media ${t} {body{ }}`, 0), gs.add(t));
      } catch (e) {
        console.error(e);
      }
  }
  function iu(t) {
    return {
      matches: t === "all" || t === "",
      media: t,
      addListener: () => {},
      removeListener: () => {},
    };
  }
  var vs = (() => {
    class t {
      constructor(e, n) {
        (this._mediaMatcher = e),
          (this._zone = n),
          (this._queries = new Map()),
          (this._destroySubject = new ce());
      }
      ngOnDestroy() {
        this._destroySubject.next(), this._destroySubject.complete();
      }
      isMatched(e) {
        return bs(io(e)).some((r) => this._registerQuery(r).mql.matches);
      }
      observe(e) {
        let r = bs(io(e)).map((a) => this._registerQuery(a).observable),
          o = Ut(r);
        return (
          (o = Si(o.pipe(Me(1)), o.pipe(Ri(1), Gn(0)))),
          o.pipe(
            C((a) => {
              let c = { matches: !1, breakpoints: {} };
              return (
                a.forEach(({ matches: s, query: u }) => {
                  (c.matches = c.matches || s), (c.breakpoints[u] = s);
                }),
                c
              );
            })
          )
        );
      }
      _registerQuery(e) {
        if (this._queries.has(e)) return this._queries.get(e);
        let n = this._mediaMatcher.matchMedia(e),
          o = {
            observable: new Bn((a) => {
              let c = (s) => this._zone.run(() => a.next(s));
              return (
                n.addListener(c),
                () => {
                  n.removeListener(c);
                }
              );
            }).pipe(
              Fi(n),
              C(({ matches: a }) => ({ query: e, matches: a })),
              vt(this._destroySubject)
            ),
            mql: n,
          };
        return this._queries.set(e, o), o;
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)(_(eu), _(q));
        };
      }
      static {
        this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
  function bs(t) {
    return t
      .map((i) => i.split(","))
      .reduce((i, e) => i.concat(e))
      .map((i) => i.trim());
  }
  function ro(t) {
    return t.buttons === 0 || t.detail === 0;
  }
  function oo(t) {
    let i =
      (t.touches && t.touches[0]) || (t.changedTouches && t.changedTouches[0]);
    return (
      !!i &&
      i.identifier === -1 &&
      (i.radiusX == null || i.radiusX === 1) &&
      (i.radiusY == null || i.radiusY === 1)
    );
  }
  var nu = new k("cdk-input-modality-detector-options"),
    ru = { ignoreKeys: [18, 17, 224, 91, 16] },
    xs = 650,
    Nt = Pt({ passive: !0, capture: !0 }),
    ou = (() => {
      class t {
        get mostRecentModality() {
          return this._modality.value;
        }
        constructor(e, n, r, o) {
          (this._platform = e),
            (this._mostRecentTarget = null),
            (this._modality = new de(null)),
            (this._lastTouchMs = 0),
            (this._onKeydown = (a) => {
              this._options?.ignoreKeys?.some((c) => c === a.keyCode) ||
                (this._modality.next("keyboard"),
                (this._mostRecentTarget = Je(a)));
            }),
            (this._onMousedown = (a) => {
              Date.now() - this._lastTouchMs < xs ||
                (this._modality.next(ro(a) ? "keyboard" : "mouse"),
                (this._mostRecentTarget = Je(a)));
            }),
            (this._onTouchstart = (a) => {
              if (oo(a)) {
                this._modality.next("keyboard");
                return;
              }
              (this._lastTouchMs = Date.now()),
                this._modality.next("touch"),
                (this._mostRecentTarget = Je(a));
            }),
            (this._options = f(f({}, ru), o)),
            (this.modalityDetected = this._modality.pipe(Ri(1))),
            (this.modalityChanged = this.modalityDetected.pipe(ko())),
            e.isBrowser &&
              n.runOutsideAngular(() => {
                r.addEventListener("keydown", this._onKeydown, Nt),
                  r.addEventListener("mousedown", this._onMousedown, Nt),
                  r.addEventListener("touchstart", this._onTouchstart, Nt);
              });
        }
        ngOnDestroy() {
          this._modality.complete(),
            this._platform.isBrowser &&
              (document.removeEventListener("keydown", this._onKeydown, Nt),
              document.removeEventListener("mousedown", this._onMousedown, Nt),
              document.removeEventListener("touchstart", this._onTouchstart, Nt));
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(Ie), _(q), _($), _(nu, 8));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  var _n = (function (t) {
      return (
        (t[(t.IMMEDIATE = 0)] = "IMMEDIATE"),
        (t[(t.EVENTUAL = 1)] = "EVENTUAL"),
        t
      );
    })(_n || {}),
    au = new k("cdk-focus-monitor-default-options"),
    vn = Pt({ passive: !0, capture: !0 }),
    ws = (() => {
      class t {
        constructor(e, n, r, o, a) {
          (this._ngZone = e),
            (this._platform = n),
            (this._inputModalityDetector = r),
            (this._origin = null),
            (this._windowFocused = !1),
            (this._originFromTouchInteraction = !1),
            (this._elementInfo = new Map()),
            (this._monitoredElementCount = 0),
            (this._rootNodeFocusListenerCount = new Map()),
            (this._windowFocusListener = () => {
              (this._windowFocused = !0),
                (this._windowFocusTimeoutId = window.setTimeout(
                  () => (this._windowFocused = !1)
                ));
            }),
            (this._stopInputModalityDetector = new ce()),
            (this._rootNodeFocusAndBlurListener = (c) => {
              let s = Je(c);
              for (let u = s; u; u = u.parentElement)
                c.type === "focus" ? this._onFocus(c, u) : this._onBlur(c, u);
            }),
            (this._document = o),
            (this._detectionMode = a?.detectionMode || _n.IMMEDIATE);
        }
        monitor(e, n = !1) {
          let r = ft(e);
          if (!this._platform.isBrowser || r.nodeType !== 1) return x();
          let o = hs(r) || this._getDocument(),
            a = this._elementInfo.get(r);
          if (a) return n && (a.checkChildren = !0), a.subject;
          let c = { checkChildren: n, subject: new ce(), rootNode: o };
          return (
            this._elementInfo.set(r, c),
            this._registerGlobalListeners(c),
            c.subject
          );
        }
        stopMonitoring(e) {
          let n = ft(e),
            r = this._elementInfo.get(n);
          r &&
            (r.subject.complete(),
            this._setClasses(n),
            this._elementInfo.delete(n),
            this._removeGlobalListeners(r));
        }
        focusVia(e, n, r) {
          let o = ft(e),
            a = this._getDocument().activeElement;
          o === a
            ? this._getClosestElementsInfo(o).forEach(([c, s]) =>
                this._originChanged(c, n, s)
              )
            : (this._setOrigin(n), typeof o.focus == "function" && o.focus(r));
        }
        ngOnDestroy() {
          this._elementInfo.forEach((e, n) => this.stopMonitoring(n));
        }
        _getDocument() {
          return this._document || document;
        }
        _getWindow() {
          return this._getDocument().defaultView || window;
        }
        _getFocusOrigin(e) {
          return this._origin
            ? this._originFromTouchInteraction
              ? this._shouldBeAttributedToTouch(e)
                ? "touch"
                : "program"
              : this._origin
            : this._windowFocused && this._lastFocusOrigin
            ? this._lastFocusOrigin
            : e && this._isLastInteractionFromInputLabel(e)
            ? "mouse"
            : "program";
        }
        _shouldBeAttributedToTouch(e) {
          return (
            this._detectionMode === _n.EVENTUAL ||
            !!e?.contains(this._inputModalityDetector._mostRecentTarget)
          );
        }
        _setClasses(e, n) {
          e.classList.toggle("cdk-focused", !!n),
            e.classList.toggle("cdk-touch-focused", n === "touch"),
            e.classList.toggle("cdk-keyboard-focused", n === "keyboard"),
            e.classList.toggle("cdk-mouse-focused", n === "mouse"),
            e.classList.toggle("cdk-program-focused", n === "program");
        }
        _setOrigin(e, n = !1) {
          this._ngZone.runOutsideAngular(() => {
            if (
              ((this._origin = e),
              (this._originFromTouchInteraction = e === "touch" && n),
              this._detectionMode === _n.IMMEDIATE)
            ) {
              clearTimeout(this._originTimeoutId);
              let r = this._originFromTouchInteraction ? xs : 1;
              this._originTimeoutId = setTimeout(() => (this._origin = null), r);
            }
          });
        }
        _onFocus(e, n) {
          let r = this._elementInfo.get(n),
            o = Je(e);
          !r ||
            (!r.checkChildren && n !== o) ||
            this._originChanged(n, this._getFocusOrigin(o), r);
        }
        _onBlur(e, n) {
          let r = this._elementInfo.get(n);
          !r ||
            (r.checkChildren &&
              e.relatedTarget instanceof Node &&
              n.contains(e.relatedTarget)) ||
            (this._setClasses(n), this._emitOrigin(r, null));
        }
        _emitOrigin(e, n) {
          e.subject.observers.length && this._ngZone.run(() => e.subject.next(n));
        }
        _registerGlobalListeners(e) {
          if (!this._platform.isBrowser) return;
          let n = e.rootNode,
            r = this._rootNodeFocusListenerCount.get(n) || 0;
          r ||
            this._ngZone.runOutsideAngular(() => {
              n.addEventListener("focus", this._rootNodeFocusAndBlurListener, vn),
                n.addEventListener(
                  "blur",
                  this._rootNodeFocusAndBlurListener,
                  vn
                );
            }),
            this._rootNodeFocusListenerCount.set(n, r + 1),
            ++this._monitoredElementCount === 1 &&
              (this._ngZone.runOutsideAngular(() => {
                this._getWindow().addEventListener(
                  "focus",
                  this._windowFocusListener
                );
              }),
              this._inputModalityDetector.modalityDetected
                .pipe(vt(this._stopInputModalityDetector))
                .subscribe((o) => {
                  this._setOrigin(o, !0);
                }));
        }
        _removeGlobalListeners(e) {
          let n = e.rootNode;
          if (this._rootNodeFocusListenerCount.has(n)) {
            let r = this._rootNodeFocusListenerCount.get(n);
            r > 1
              ? this._rootNodeFocusListenerCount.set(n, r - 1)
              : (n.removeEventListener(
                  "focus",
                  this._rootNodeFocusAndBlurListener,
                  vn
                ),
                n.removeEventListener(
                  "blur",
                  this._rootNodeFocusAndBlurListener,
                  vn
                ),
                this._rootNodeFocusListenerCount.delete(n));
          }
          --this._monitoredElementCount ||
            (this._getWindow().removeEventListener(
              "focus",
              this._windowFocusListener
            ),
            this._stopInputModalityDetector.next(),
            clearTimeout(this._windowFocusTimeoutId),
            clearTimeout(this._originTimeoutId));
        }
        _originChanged(e, n, r) {
          this._setClasses(e, n),
            this._emitOrigin(r, n),
            (this._lastFocusOrigin = n);
        }
        _getClosestElementsInfo(e) {
          let n = [];
          return (
            this._elementInfo.forEach((r, o) => {
              (o === e || (r.checkChildren && o.contains(e))) && n.push([o, r]);
            }),
            n
          );
        }
        _isLastInteractionFromInputLabel(e) {
          let { _mostRecentTarget: n, mostRecentModality: r } =
            this._inputModalityDetector;
          if (
            r !== "mouse" ||
            !n ||
            n === e ||
            (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
            e.disabled
          )
            return !1;
          let o = e.labels;
          if (o) {
            for (let a = 0; a < o.length; a++) if (o[a].contains(n)) return !0;
          }
          return !1;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(q), _(Ie), _(ou), _($, 8), _(au, 8));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  var bt = (function (t) {
      return (
        (t[(t.NONE = 0)] = "NONE"),
        (t[(t.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
        (t[(t.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
        t
      );
    })(bt || {}),
    _s = "cdk-high-contrast-black-on-white",
    ys = "cdk-high-contrast-white-on-black",
    no = "cdk-high-contrast-active",
    Cs = (() => {
      class t {
        constructor(e, n) {
          (this._platform = e),
            (this._document = n),
            (this._breakpointSubscription = b(vs)
              .observe("(forced-colors: active)")
              .subscribe(() => {
                this._hasCheckedHighContrastMode &&
                  ((this._hasCheckedHighContrastMode = !1),
                  this._applyBodyHighContrastModeCssClasses());
              }));
        }
        getHighContrastMode() {
          if (!this._platform.isBrowser) return bt.NONE;
          let e = this._document.createElement("div");
          (e.style.backgroundColor = "rgb(1,2,3)"),
            (e.style.position = "absolute"),
            this._document.body.appendChild(e);
          let n = this._document.defaultView || window,
            r = n && n.getComputedStyle ? n.getComputedStyle(e) : null,
            o = ((r && r.backgroundColor) || "").replace(/ /g, "");
          switch ((e.remove(), o)) {
            case "rgb(0,0,0)":
            case "rgb(45,50,54)":
            case "rgb(32,32,32)":
              return bt.WHITE_ON_BLACK;
            case "rgb(255,255,255)":
            case "rgb(255,250,239)":
              return bt.BLACK_ON_WHITE;
          }
          return bt.NONE;
        }
        ngOnDestroy() {
          this._breakpointSubscription.unsubscribe();
        }
        _applyBodyHighContrastModeCssClasses() {
          if (
            !this._hasCheckedHighContrastMode &&
            this._platform.isBrowser &&
            this._document.body
          ) {
            let e = this._document.body.classList;
            e.remove(no, _s, ys), (this._hasCheckedHighContrastMode = !0);
            let n = this.getHighContrastMode();
            n === bt.BLACK_ON_WHITE
              ? e.add(no, _s)
              : n === bt.WHITE_ON_BLACK && e.add(no, ys);
          }
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(Ie), _($));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  var ao = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({});
      }
    }
    return t;
  })();
  var cu = ["mat-internal-form-field", ""],
    du = ["*"];
  function lu() {
    return !0;
  }
  var uu = new k("mat-sanity-checks", { providedIn: "root", factory: lu }),
    H = (() => {
      class t {
        constructor(e, n, r) {
          (this._sanityChecks = n),
            (this._document = r),
            (this._hasDoneGlobalChecks = !1),
            e._applyBodyHighContrastModeCssClasses(),
            this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
        }
        _checkIsEnabled(e) {
          return ps()
            ? !1
            : typeof this._sanityChecks == "boolean"
            ? this._sanityChecks
            : !!this._sanityChecks[e];
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(Cs), _(uu, 8), _($));
          };
        }
        static {
          this.ɵmod = T({ type: t });
        }
        static {
          this.ɵinj = S({ imports: [ao, ao] });
        }
      }
      return t;
    })();
  var Ee = (function (t) {
      return (
        (t[(t.FADING_IN = 0)] = "FADING_IN"),
        (t[(t.VISIBLE = 1)] = "VISIBLE"),
        (t[(t.FADING_OUT = 2)] = "FADING_OUT"),
        (t[(t.HIDDEN = 3)] = "HIDDEN"),
        t
      );
    })(Ee || {}),
    so = class {
      constructor(i, e, n, r = !1) {
        (this._renderer = i),
          (this.element = e),
          (this.config = n),
          (this._animationForciblyDisabledThroughCss = r),
          (this.state = Ee.HIDDEN);
      }
      fadeOut() {
        this._renderer.fadeOutRipple(this);
      }
    },
    Is = Pt({ passive: !0, capture: !0 }),
    co = class {
      constructor() {
        (this._events = new Map()),
          (this._delegateEventHandler = (i) => {
            let e = Je(i);
            e &&
              this._events.get(i.type)?.forEach((n, r) => {
                (r === e || r.contains(e)) && n.forEach((o) => o.handleEvent(i));
              });
          });
      }
      addHandler(i, e, n, r) {
        let o = this._events.get(e);
        if (o) {
          let a = o.get(n);
          a ? a.add(r) : o.set(n, new Set([r]));
        } else
          this._events.set(e, new Map([[n, new Set([r])]])),
            i.runOutsideAngular(() => {
              document.addEventListener(e, this._delegateEventHandler, Is);
            });
      }
      removeHandler(i, e, n) {
        let r = this._events.get(i);
        if (!r) return;
        let o = r.get(e);
        o &&
          (o.delete(n),
          o.size === 0 && r.delete(e),
          r.size === 0 &&
            (this._events.delete(i),
            document.removeEventListener(i, this._delegateEventHandler, Is)));
      }
    },
    Es = { enterDuration: 225, exitDuration: 150 },
    mu = 800,
    Ms = Pt({ passive: !0, capture: !0 }),
    As = ["mousedown", "touchstart"],
    Ds = ["mouseup", "mouseleave", "touchend", "touchcancel"],
    lo = class t {
      static {
        this._eventManager = new co();
      }
      constructor(i, e, n, r) {
        (this._target = i),
          (this._ngZone = e),
          (this._platform = r),
          (this._isPointerDown = !1),
          (this._activeRipples = new Map()),
          (this._pointerUpEventsRegistered = !1),
          r.isBrowser && (this._containerElement = ft(n));
      }
      fadeInRipple(i, e, n = {}) {
        let r = (this._containerRect =
            this._containerRect ||
            this._containerElement.getBoundingClientRect()),
          o = f(f({}, Es), n.animation);
        n.centered && ((i = r.left + r.width / 2), (e = r.top + r.height / 2));
        let a = n.radius || hu(i, e, r),
          c = i - r.left,
          s = e - r.top,
          u = o.enterDuration,
          p = document.createElement("div");
        p.classList.add("mat-ripple-element"),
          (p.style.left = `${c - a}px`),
          (p.style.top = `${s - a}px`),
          (p.style.height = `${a * 2}px`),
          (p.style.width = `${a * 2}px`),
          n.color != null && (p.style.backgroundColor = n.color),
          (p.style.transitionDuration = `${u}ms`),
          this._containerElement.appendChild(p);
        let g = window.getComputedStyle(p),
          D = g.transitionProperty,
          Q = g.transitionDuration,
          L =
            D === "none" ||
            Q === "0s" ||
            Q === "0s, 0s" ||
            (r.width === 0 && r.height === 0),
          ie = new so(this, p, n, L);
        (p.style.transform = "scale3d(1, 1, 1)"),
          (ie.state = Ee.FADING_IN),
          n.persistent || (this._mostRecentTransientRipple = ie);
        let ne = null;
        return (
          !L &&
            (u || o.exitDuration) &&
            this._ngZone.runOutsideAngular(() => {
              let Fe = () => {
                  ne && (ne.fallbackTimer = null),
                    clearTimeout(je),
                    this._finishRippleTransition(ie);
                },
                et = () => this._destroyRipple(ie),
                je = setTimeout(et, u + 100);
              p.addEventListener("transitionend", Fe),
                p.addEventListener("transitioncancel", et),
                (ne = {
                  onTransitionEnd: Fe,
                  onTransitionCancel: et,
                  fallbackTimer: je,
                });
            }),
          this._activeRipples.set(ie, ne),
          (L || !u) && this._finishRippleTransition(ie),
          ie
        );
      }
      fadeOutRipple(i) {
        if (i.state === Ee.FADING_OUT || i.state === Ee.HIDDEN) return;
        let e = i.element,
          n = f(f({}, Es), i.config.animation);
        (e.style.transitionDuration = `${n.exitDuration}ms`),
          (e.style.opacity = "0"),
          (i.state = Ee.FADING_OUT),
          (i._animationForciblyDisabledThroughCss || !n.exitDuration) &&
            this._finishRippleTransition(i);
      }
      fadeOutAll() {
        this._getActiveRipples().forEach((i) => i.fadeOut());
      }
      fadeOutAllNonPersistent() {
        this._getActiveRipples().forEach((i) => {
          i.config.persistent || i.fadeOut();
        });
      }
      setupTriggerEvents(i) {
        let e = ft(i);
        !this._platform.isBrowser ||
          !e ||
          e === this._triggerElement ||
          (this._removeTriggerEvents(),
          (this._triggerElement = e),
          As.forEach((n) => {
            t._eventManager.addHandler(this._ngZone, n, e, this);
          }));
      }
      handleEvent(i) {
        i.type === "mousedown"
          ? this._onMousedown(i)
          : i.type === "touchstart"
          ? this._onTouchStart(i)
          : this._onPointerUp(),
          this._pointerUpEventsRegistered ||
            (this._ngZone.runOutsideAngular(() => {
              Ds.forEach((e) => {
                this._triggerElement.addEventListener(e, this, Ms);
              });
            }),
            (this._pointerUpEventsRegistered = !0));
      }
      _finishRippleTransition(i) {
        i.state === Ee.FADING_IN
          ? this._startFadeOutTransition(i)
          : i.state === Ee.FADING_OUT && this._destroyRipple(i);
      }
      _startFadeOutTransition(i) {
        let e = i === this._mostRecentTransientRipple,
          { persistent: n } = i.config;
        (i.state = Ee.VISIBLE), !n && (!e || !this._isPointerDown) && i.fadeOut();
      }
      _destroyRipple(i) {
        let e = this._activeRipples.get(i) ?? null;
        this._activeRipples.delete(i),
          this._activeRipples.size || (this._containerRect = null),
          i === this._mostRecentTransientRipple &&
            (this._mostRecentTransientRipple = null),
          (i.state = Ee.HIDDEN),
          e !== null &&
            (i.element.removeEventListener("transitionend", e.onTransitionEnd),
            i.element.removeEventListener(
              "transitioncancel",
              e.onTransitionCancel
            ),
            e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)),
          i.element.remove();
      }
      _onMousedown(i) {
        let e = ro(i),
          n =
            this._lastTouchStartEvent &&
            Date.now() < this._lastTouchStartEvent + mu;
        !this._target.rippleDisabled &&
          !e &&
          !n &&
          ((this._isPointerDown = !0),
          this.fadeInRipple(i.clientX, i.clientY, this._target.rippleConfig));
      }
      _onTouchStart(i) {
        if (!this._target.rippleDisabled && !oo(i)) {
          (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
          let e = i.changedTouches;
          if (e)
            for (let n = 0; n < e.length; n++)
              this.fadeInRipple(
                e[n].clientX,
                e[n].clientY,
                this._target.rippleConfig
              );
        }
      }
      _onPointerUp() {
        this._isPointerDown &&
          ((this._isPointerDown = !1),
          this._getActiveRipples().forEach((i) => {
            let e =
              i.state === Ee.VISIBLE ||
              (i.config.terminateOnPointerUp && i.state === Ee.FADING_IN);
            !i.config.persistent && e && i.fadeOut();
          }));
      }
      _getActiveRipples() {
        return Array.from(this._activeRipples.keys());
      }
      _removeTriggerEvents() {
        let i = this._triggerElement;
        i &&
          (As.forEach((e) => t._eventManager.removeHandler(e, i, this)),
          this._pointerUpEventsRegistered &&
            (Ds.forEach((e) => i.removeEventListener(e, this, Ms)),
            (this._pointerUpEventsRegistered = !1)));
      }
    };
  function hu(t, i, e) {
    let n = Math.max(Math.abs(t - e.left), Math.abs(t - e.right)),
      r = Math.max(Math.abs(i - e.top), Math.abs(i - e.bottom));
    return Math.sqrt(n * n + r * r);
  }
  var pu = new k("mat-ripple-global-options"),
    wi = (() => {
      class t {
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          e && this.fadeOutAllNonPersistent(),
            (this._disabled = e),
            this._setupTriggerEventsIfEnabled();
        }
        get trigger() {
          return this._trigger || this._elementRef.nativeElement;
        }
        set trigger(e) {
          (this._trigger = e), this._setupTriggerEventsIfEnabled();
        }
        constructor(e, n, r, o, a) {
          (this._elementRef = e),
            (this._animationMode = a),
            (this.radius = 0),
            (this._disabled = !1),
            (this._isInitialized = !1),
            (this._globalOptions = o || {}),
            (this._rippleRenderer = new lo(this, n, e, r));
        }
        ngOnInit() {
          (this._isInitialized = !0), this._setupTriggerEventsIfEnabled();
        }
        ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        fadeOutAllNonPersistent() {
          this._rippleRenderer.fadeOutAllNonPersistent();
        }
        get rippleConfig() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: f(
              f(
                f({}, this._globalOptions.animation),
                this._animationMode === "NoopAnimations"
                  ? { enterDuration: 0, exitDuration: 0 }
                  : {}
              ),
              this.animation
            ),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
          };
        }
        get rippleDisabled() {
          return this.disabled || !!this._globalOptions.disabled;
        }
        _setupTriggerEventsIfEnabled() {
          !this.disabled &&
            this._isInitialized &&
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
        launch(e, n = 0, r) {
          return typeof e == "number"
            ? this._rippleRenderer.fadeInRipple(
                e,
                n,
                f(f({}, this.rippleConfig), r)
              )
            : this._rippleRenderer.fadeInRipple(
                0,
                0,
                f(f({}, this.rippleConfig), e)
              );
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(W), y(q), y(Ie), y(pu, 8), y(Ye, 8));
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [
              ["", "mat-ripple", ""],
              ["", "matRipple", ""],
            ],
            hostAttrs: [1, "mat-ripple"],
            hostVars: 2,
            hostBindings: function (n, r) {
              n & 2 && ee("mat-ripple-unbounded", r.unbounded);
            },
            inputs: {
              color: [0, "matRippleColor", "color"],
              unbounded: [0, "matRippleUnbounded", "unbounded"],
              centered: [0, "matRippleCentered", "centered"],
              radius: [0, "matRippleRadius", "radius"],
              animation: [0, "matRippleAnimation", "animation"],
              disabled: [0, "matRippleDisabled", "disabled"],
              trigger: [0, "matRippleTrigger", "trigger"],
            },
            exportAs: ["matRipple"],
            standalone: !0,
          });
        }
      }
      return t;
    })(),
    yn = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵmod = T({ type: t });
        }
        static {
          this.ɵinj = S({ imports: [H, H] });
        }
      }
      return t;
    })();
  var xn = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵcmp = X({
          type: t,
          selectors: [["div", "mat-internal-form-field", ""]],
          hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
          hostVars: 2,
          hostBindings: function (n, r) {
            n & 2 &&
              ee("mdc-form-field--align-end", r.labelPosition === "before");
          },
          inputs: { labelPosition: "labelPosition" },
          standalone: !0,
          features: [J],
          attrs: cu,
          ngContentSelectors: du,
          decls: 1,
          vars: 0,
          template: function (n, r) {
            n & 1 && (ue(), se(0));
          },
          styles: [
            ".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return t;
  })();
  var fu = ["*"];
  var gu = new k("MAT_CARD_CONFIG"),
    Ss = (() => {
      class t {
        constructor(e) {
          this.appearance = e?.appearance || "raised";
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(gu, 8));
          };
        }
        static {
          this.ɵcmp = X({
            type: t,
            selectors: [["mat-card"]],
            hostAttrs: [1, "mat-mdc-card", "mdc-card"],
            hostVars: 4,
            hostBindings: function (n, r) {
              n & 2 &&
                ee("mat-mdc-card-outlined", r.appearance === "outlined")(
                  "mdc-card--outlined",
                  r.appearance === "outlined"
                );
            },
            inputs: { appearance: "appearance" },
            exportAs: ["matCard"],
            standalone: !0,
            features: [J],
            ngContentSelectors: fu,
            decls: 1,
            vars: 0,
            template: function (n, r) {
              n & 1 && (ue(), se(0));
            },
            styles: [
              '.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
            ],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
      }
      return t;
    })(),
    Ts = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [
              ["mat-card-title"],
              ["", "mat-card-title", ""],
              ["", "matCardTitle", ""],
            ],
            hostAttrs: [1, "mat-mdc-card-title"],
            standalone: !0,
          });
        }
      }
      return t;
    })();
  var Rs = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵdir = G({
          type: t,
          selectors: [["mat-card-content"]],
          hostAttrs: [1, "mat-mdc-card-content"],
          standalone: !0,
        });
      }
    }
    return t;
  })();
  var Fs = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [H, Te, H] });
      }
    }
    return t;
  })();
  var zs = (() => {
      class t {
        constructor(e, n) {
          (this._renderer = e),
            (this._elementRef = n),
            (this.onChange = (r) => {}),
            (this.onTouched = () => {});
        }
        setProperty(e, n) {
          this._renderer.setProperty(this._elementRef.nativeElement, e, n);
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        registerOnChange(e) {
          this.onChange = e;
        }
        setDisabledState(e) {
          this.setProperty("disabled", e);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(Vi), y(W));
          };
        }
        static {
          this.ɵdir = G({ type: t });
        }
      }
      return t;
    })(),
    vu = (() => {
      class t extends zs {
        static {
          this.ɵfac = (() => {
            let e;
            return function (r) {
              return (e || (e = _t(t)))(r || t);
            };
          })();
        }
        static {
          this.ɵdir = G({ type: t, features: [st] });
        }
      }
      return t;
    })(),
    Bt = new k("");
  var _u = { provide: Bt, useExisting: rt(() => Us), multi: !0 };
  function yu() {
    let t = kt() ? kt().getUserAgent() : "";
    return /android (\d+)/.test(t.toLowerCase());
  }
  var xu = new k(""),
    Us = (() => {
      class t extends zs {
        constructor(e, n, r) {
          super(e, n),
            (this._compositionMode = r),
            (this._composing = !1),
            this._compositionMode == null && (this._compositionMode = !yu());
        }
        writeValue(e) {
          let n = e ?? "";
          this.setProperty("value", n);
        }
        _handleInput(e) {
          (!this._compositionMode ||
            (this._compositionMode && !this._composing)) &&
            this.onChange(e);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(e) {
          (this._composing = !1), this._compositionMode && this.onChange(e);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(Vi), y(W), y(xu, 8));
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [
              ["input", "formControlName", "", 3, "type", "checkbox"],
              ["textarea", "formControlName", ""],
              ["input", "formControl", "", 3, "type", "checkbox"],
              ["textarea", "formControl", ""],
              ["input", "ngModel", "", 3, "type", "checkbox"],
              ["textarea", "ngModel", ""],
              ["", "ngDefaultControl", ""],
            ],
            hostBindings: function (n, r) {
              n & 1 &&
                F("input", function (a) {
                  return r._handleInput(a.target.value);
                })("blur", function () {
                  return r.onTouched();
                })("compositionstart", function () {
                  return r._compositionStart();
                })("compositionend", function (a) {
                  return r._compositionEnd(a.target.value);
                });
            },
            features: [Se([_u]), st],
          });
        }
      }
      return t;
    })();
  var fo = new k(""),
    wu = new k("");
  function $s(t) {
    return t != null;
  }
  function Hs(t) {
    return Hi(t) ? le(t) : t;
  }
  function Gs(t) {
    let i = {};
    return (
      t.forEach((e) => {
        i = e != null ? f(f({}, i), e) : i;
      }),
      Object.keys(i).length === 0 ? null : i
    );
  }
  function qs(t, i) {
    return i.map((e) => e(t));
  }
  function Cu(t) {
    return !t.validate;
  }
  function Ws(t) {
    return t.map((i) => (Cu(i) ? i : (e) => i.validate(e)));
  }
  function ku(t) {
    if (!t) return null;
    let i = t.filter($s);
    return i.length == 0
      ? null
      : function (e) {
          return Gs(qs(e, i));
        };
  }
  function Zs(t) {
    return t != null ? ku(Ws(t)) : null;
  }
  function Iu(t) {
    if (!t) return null;
    let i = t.filter($s);
    return i.length == 0
      ? null
      : function (e) {
          let n = qs(e, i).map(Hs);
          return Ti(n).pipe(C(Gs));
        };
  }
  function Ys(t) {
    return t != null ? Iu(Ws(t)) : null;
  }
  function Os(t, i) {
    return t === null ? [i] : Array.isArray(t) ? [...t, i] : [t, i];
  }
  function Eu(t) {
    return t._rawValidators;
  }
  function Mu(t) {
    return t._rawAsyncValidators;
  }
  function uo(t) {
    return t ? (Array.isArray(t) ? t : [t]) : [];
  }
  function Cn(t, i) {
    return Array.isArray(t) ? t.includes(i) : t === i;
  }
  function Ps(t, i) {
    let e = uo(i);
    return (
      uo(t).forEach((r) => {
        Cn(e, r) || e.push(r);
      }),
      e
    );
  }
  function Ns(t, i) {
    return uo(i).filter((e) => !Cn(t, e));
  }
  var kn = class {
      constructor() {
        (this._rawValidators = []),
          (this._rawAsyncValidators = []),
          (this._onDestroyCallbacks = []);
      }
      get value() {
        return this.control ? this.control.value : null;
      }
      get valid() {
        return this.control ? this.control.valid : null;
      }
      get invalid() {
        return this.control ? this.control.invalid : null;
      }
      get pending() {
        return this.control ? this.control.pending : null;
      }
      get disabled() {
        return this.control ? this.control.disabled : null;
      }
      get enabled() {
        return this.control ? this.control.enabled : null;
      }
      get errors() {
        return this.control ? this.control.errors : null;
      }
      get pristine() {
        return this.control ? this.control.pristine : null;
      }
      get dirty() {
        return this.control ? this.control.dirty : null;
      }
      get touched() {
        return this.control ? this.control.touched : null;
      }
      get status() {
        return this.control ? this.control.status : null;
      }
      get untouched() {
        return this.control ? this.control.untouched : null;
      }
      get statusChanges() {
        return this.control ? this.control.statusChanges : null;
      }
      get valueChanges() {
        return this.control ? this.control.valueChanges : null;
      }
      get path() {
        return null;
      }
      _setValidators(i) {
        (this._rawValidators = i || []),
          (this._composedValidatorFn = Zs(this._rawValidators));
      }
      _setAsyncValidators(i) {
        (this._rawAsyncValidators = i || []),
          (this._composedAsyncValidatorFn = Ys(this._rawAsyncValidators));
      }
      get validator() {
        return this._composedValidatorFn || null;
      }
      get asyncValidator() {
        return this._composedAsyncValidatorFn || null;
      }
      _registerOnDestroy(i) {
        this._onDestroyCallbacks.push(i);
      }
      _invokeOnDestroyCallbacks() {
        this._onDestroyCallbacks.forEach((i) => i()),
          (this._onDestroyCallbacks = []);
      }
      reset(i = void 0) {
        this.control && this.control.reset(i);
      }
      hasError(i, e) {
        return this.control ? this.control.hasError(i, e) : !1;
      }
      getError(i, e) {
        return this.control ? this.control.getError(i, e) : null;
      }
    },
    mo = class extends kn {
      get formDirective() {
        return null;
      }
      get path() {
        return null;
      }
    },
    Mi = class extends kn {
      constructor() {
        super(...arguments),
          (this._parent = null),
          (this.name = null),
          (this.valueAccessor = null);
      }
    },
    ho = class {
      constructor(i) {
        this._cd = i;
      }
      get isTouched() {
        return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
      }
      get isUntouched() {
        return !!this._cd?.control?.untouched;
      }
      get isPristine() {
        return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
      }
      get isDirty() {
        return !!this._cd?.control?.dirty;
      }
      get isValid() {
        return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
      }
      get isInvalid() {
        return !!this._cd?.control?.invalid;
      }
      get isPending() {
        return !!this._cd?.control?.pending;
      }
      get isSubmitted() {
        return this._cd?._submitted?.(), !!this._cd?.submitted;
      }
    },
    Au = {
      "[class.ng-untouched]": "isUntouched",
      "[class.ng-touched]": "isTouched",
      "[class.ng-pristine]": "isPristine",
      "[class.ng-dirty]": "isDirty",
      "[class.ng-valid]": "isValid",
      "[class.ng-invalid]": "isInvalid",
      "[class.ng-pending]": "isPending",
    },
    $f = z(f({}, Au), { "[class.ng-submitted]": "isSubmitted" }),
    Ks = (() => {
      class t extends ho {
        constructor(e) {
          super(e);
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(Mi, 2));
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [
              ["", "formControlName", ""],
              ["", "ngModel", ""],
              ["", "formControl", ""],
            ],
            hostVars: 14,
            hostBindings: function (n, r) {
              n & 2 &&
                ee("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
                  "ng-pristine",
                  r.isPristine
                )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
                  "ng-invalid",
                  r.isInvalid
                )("ng-pending", r.isPending);
            },
            features: [st],
          });
        }
      }
      return t;
    })();
  var Ci = "VALID",
    wn = "INVALID",
    Lt = "PENDING",
    ki = "DISABLED",
    Vt = class {},
    In = class extends Vt {
      constructor(i, e) {
        super(), (this.value = i), (this.source = e);
      }
    },
    Ii = class extends Vt {
      constructor(i, e) {
        super(), (this.pristine = i), (this.source = e);
      }
    },
    Ei = class extends Vt {
      constructor(i, e) {
        super(), (this.touched = i), (this.source = e);
      }
    },
    jt = class extends Vt {
      constructor(i, e) {
        super(), (this.status = i), (this.source = e);
      }
    };
  function Du(t) {
    return (En(t) ? t.validators : t) || null;
  }
  function Su(t) {
    return Array.isArray(t) ? Zs(t) : t || null;
  }
  function Tu(t, i) {
    return (En(i) ? i.asyncValidators : t) || null;
  }
  function Ru(t) {
    return Array.isArray(t) ? Ys(t) : t || null;
  }
  function En(t) {
    return t != null && !Array.isArray(t) && typeof t == "object";
  }
  var po = class {
    constructor(i, e) {
      (this._pendingDirty = !1),
        (this._hasOwnPendingAsyncValidator = null),
        (this._pendingTouched = !1),
        (this._onCollectionChange = () => {}),
        (this._parent = null),
        (this._status = qi(() => this.statusReactive())),
        (this.statusReactive = zi(void 0)),
        (this._pristine = qi(() => this.pristineReactive())),
        (this.pristineReactive = zi(!0)),
        (this._touched = qi(() => this.touchedReactive())),
        (this.touchedReactive = zi(!1)),
        (this._events = new ce()),
        (this.events = this._events.asObservable()),
        (this._onDisabledChange = []),
        this._assignValidators(i),
        this._assignAsyncValidators(e);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(i) {
      this._rawValidators = this._composedValidatorFn = i;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(i) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = i;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return dt(this.statusReactive);
    }
    set status(i) {
      dt(() => this.statusReactive.set(i));
    }
    get valid() {
      return this.status === Ci;
    }
    get invalid() {
      return this.status === wn;
    }
    get pending() {
      return this.status == Lt;
    }
    get disabled() {
      return this.status === ki;
    }
    get enabled() {
      return this.status !== ki;
    }
    get pristine() {
      return dt(this.pristineReactive);
    }
    set pristine(i) {
      dt(() => this.pristineReactive.set(i));
    }
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return dt(this.touchedReactive);
    }
    set touched(i) {
      dt(() => this.touchedReactive.set(i));
    }
    get untouched() {
      return !this.touched;
    }
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(i) {
      this._assignValidators(i);
    }
    setAsyncValidators(i) {
      this._assignAsyncValidators(i);
    }
    addValidators(i) {
      this.setValidators(Ps(i, this._rawValidators));
    }
    addAsyncValidators(i) {
      this.setAsyncValidators(Ps(i, this._rawAsyncValidators));
    }
    removeValidators(i) {
      this.setValidators(Ns(i, this._rawValidators));
    }
    removeAsyncValidators(i) {
      this.setAsyncValidators(Ns(i, this._rawAsyncValidators));
    }
    hasValidator(i) {
      return Cn(this._rawValidators, i);
    }
    hasAsyncValidator(i) {
      return Cn(this._rawAsyncValidators, i);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(i = {}) {
      let e = this.touched === !1;
      this.touched = !0;
      let n = i.sourceControl ?? this;
      this._parent &&
        !i.onlySelf &&
        this._parent.markAsTouched(z(f({}, i), { sourceControl: n })),
        e && i.emitEvent !== !1 && this._events.next(new Ei(!0, n));
    }
    markAllAsTouched(i = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: i.emitEvent,
        sourceControl: this,
      }),
        this._forEachChild((e) => e.markAllAsTouched(i));
    }
    markAsUntouched(i = {}) {
      let e = this.touched === !0;
      (this.touched = !1), (this._pendingTouched = !1);
      let n = i.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: i.emitEvent,
          sourceControl: n,
        });
      }),
        this._parent && !i.onlySelf && this._parent._updateTouched(i, n),
        e && i.emitEvent !== !1 && this._events.next(new Ei(!1, n));
    }
    markAsDirty(i = {}) {
      let e = this.pristine === !0;
      this.pristine = !1;
      let n = i.sourceControl ?? this;
      this._parent &&
        !i.onlySelf &&
        this._parent.markAsDirty(z(f({}, i), { sourceControl: n })),
        e && i.emitEvent !== !1 && this._events.next(new Ii(!1, n));
    }
    markAsPristine(i = {}) {
      let e = this.pristine === !1;
      (this.pristine = !0), (this._pendingDirty = !1);
      let n = i.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: i.emitEvent });
      }),
        this._parent && !i.onlySelf && this._parent._updatePristine(i, n),
        e && i.emitEvent !== !1 && this._events.next(new Ii(!0, n));
    }
    markAsPending(i = {}) {
      this.status = Lt;
      let e = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
        (this._events.next(new jt(this.status, e)),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !i.onlySelf &&
          this._parent.markAsPending(z(f({}, i), { sourceControl: e }));
    }
    disable(i = {}) {
      let e = this._parentMarkedDirty(i.onlySelf);
      (this.status = ki),
        (this.errors = null),
        this._forEachChild((r) => {
          r.disable(z(f({}, i), { onlySelf: !0 }));
        }),
        this._updateValue();
      let n = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
        (this._events.next(new In(this.value, n)),
        this._events.next(new jt(this.status, n)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(z(f({}, i), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(i = {}) {
      let e = this._parentMarkedDirty(i.onlySelf);
      (this.status = Ci),
        this._forEachChild((n) => {
          n.enable(z(f({}, i), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent }),
        this._updateAncestors(z(f({}, i), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((n) => n(!1));
    }
    _updateAncestors(i, e) {
      this._parent &&
        !i.onlySelf &&
        (this._parent.updateValueAndValidity(i),
        i.skipPristineCheck || this._parent._updatePristine({}, e),
        this._parent._updateTouched({}, e));
    }
    setParent(i) {
      this._parent = i;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(i = {}) {
      if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
        let n = this._cancelExistingSubscription();
        (this.errors = this._runValidator()),
          (this.status = this._calculateStatus()),
          (this.status === Ci || this.status === Lt) &&
            this._runAsyncValidator(n, i.emitEvent);
      }
      let e = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
        (this._events.next(new In(this.value, e)),
        this._events.next(new jt(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent &&
          !i.onlySelf &&
          this._parent.updateValueAndValidity(z(f({}, i), { sourceControl: e }));
    }
    _updateTreeValidity(i = { emitEvent: !0 }) {
      this._forEachChild((e) => e._updateTreeValidity(i)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? ki : Ci;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(i, e) {
      if (this.asyncValidator) {
        (this.status = Lt),
          (this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1 });
        let n = Hs(this.asyncValidator(this));
        this._asyncValidationSubscription = n.subscribe((r) => {
          (this._hasOwnPendingAsyncValidator = null),
            this.setErrors(r, { emitEvent: e, shouldHaveEmitted: i });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let i = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return (this._hasOwnPendingAsyncValidator = null), i;
      }
      return !1;
    }
    setErrors(i, e = {}) {
      (this.errors = i),
        this._updateControlsErrors(e.emitEvent !== !1, this, e.shouldHaveEmitted);
    }
    get(i) {
      let e = i;
      return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0)
        ? null
        : e.reduce((n, r) => n && n._find(r), this);
    }
    getError(i, e) {
      let n = e ? this.get(e) : this;
      return n && n.errors ? n.errors[i] : null;
    }
    hasError(i, e) {
      return !!this.getError(i, e);
    }
    get root() {
      let i = this;
      for (; i._parent; ) i = i._parent;
      return i;
    }
    _updateControlsErrors(i, e, n) {
      (this.status = this._calculateStatus()),
        i && this.statusChanges.emit(this.status),
        (i || n) && this._events.next(new jt(this.status, e)),
        this._parent && this._parent._updateControlsErrors(i, e, n);
    }
    _initObservables() {
      (this.valueChanges = new re()), (this.statusChanges = new re());
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? ki
        : this.errors
        ? wn
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Lt)
        ? Lt
        : this._anyControlsHaveStatus(wn)
        ? wn
        : Ci;
    }
    _anyControlsHaveStatus(i) {
      return this._anyControls((e) => e.status === i);
    }
    _anyControlsDirty() {
      return this._anyControls((i) => i.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((i) => i.touched);
    }
    _updatePristine(i, e) {
      let n = !this._anyControlsDirty(),
        r = this.pristine !== n;
      (this.pristine = n),
        this._parent && !i.onlySelf && this._parent._updatePristine(i, e),
        r && this._events.next(new Ii(this.pristine, e));
    }
    _updateTouched(i = {}, e) {
      (this.touched = this._anyControlsTouched()),
        this._events.next(new Ei(this.touched, e)),
        this._parent && !i.onlySelf && this._parent._updateTouched(i, e);
    }
    _registerOnCollectionChange(i) {
      this._onCollectionChange = i;
    }
    _setUpdateStrategy(i) {
      En(i) && i.updateOn != null && (this._updateOn = i.updateOn);
    }
    _parentMarkedDirty(i) {
      let e = this._parent && this._parent.dirty;
      return !i && !!e && !this._parent._anyControlsDirty();
    }
    _find(i) {
      return null;
    }
    _assignValidators(i) {
      (this._rawValidators = Array.isArray(i) ? i.slice() : i),
        (this._composedValidatorFn = Su(this._rawValidators));
    }
    _assignAsyncValidators(i) {
      (this._rawAsyncValidators = Array.isArray(i) ? i.slice() : i),
        (this._composedAsyncValidatorFn = Ru(this._rawAsyncValidators));
    }
  };
  var Qs = new k("CallSetDisabledState", {
      providedIn: "root",
      factory: () => go,
    }),
    go = "always";
  function Fu(t, i) {
    return [...i.path, t];
  }
  function Ou(t, i, e = go) {
    Nu(t, i),
      i.valueAccessor.writeValue(t.value),
      (t.disabled || e === "always") &&
        i.valueAccessor.setDisabledState?.(t.disabled),
      Lu(t, i),
      Vu(t, i),
      ju(t, i),
      Pu(t, i);
  }
  function Ls(t, i) {
    t.forEach((e) => {
      e.registerOnValidatorChange && e.registerOnValidatorChange(i);
    });
  }
  function Pu(t, i) {
    if (i.valueAccessor.setDisabledState) {
      let e = (n) => {
        i.valueAccessor.setDisabledState(n);
      };
      t.registerOnDisabledChange(e),
        i._registerOnDestroy(() => {
          t._unregisterOnDisabledChange(e);
        });
    }
  }
  function Nu(t, i) {
    let e = Eu(t);
    i.validator !== null
      ? t.setValidators(Os(e, i.validator))
      : typeof e == "function" && t.setValidators([e]);
    let n = Mu(t);
    i.asyncValidator !== null
      ? t.setAsyncValidators(Os(n, i.asyncValidator))
      : typeof n == "function" && t.setAsyncValidators([n]);
    let r = () => t.updateValueAndValidity();
    Ls(i._rawValidators, r), Ls(i._rawAsyncValidators, r);
  }
  function Lu(t, i) {
    i.valueAccessor.registerOnChange((e) => {
      (t._pendingValue = e),
        (t._pendingChange = !0),
        (t._pendingDirty = !0),
        t.updateOn === "change" && Xs(t, i);
    });
  }
  function ju(t, i) {
    i.valueAccessor.registerOnTouched(() => {
      (t._pendingTouched = !0),
        t.updateOn === "blur" && t._pendingChange && Xs(t, i),
        t.updateOn !== "submit" && t.markAsTouched();
    });
  }
  function Xs(t, i) {
    t._pendingDirty && t.markAsDirty(),
      t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
      i.viewToModelUpdate(t._pendingValue),
      (t._pendingChange = !1);
  }
  function Vu(t, i) {
    let e = (n, r) => {
      i.valueAccessor.writeValue(n), r && i.viewToModelUpdate(n);
    };
    t.registerOnChange(e),
      i._registerOnDestroy(() => {
        t._unregisterOnChange(e);
      });
  }
  function Bu(t, i) {
    if (!t.hasOwnProperty("model")) return !1;
    let e = t.model;
    return e.isFirstChange() ? !0 : !Object.is(i, e.currentValue);
  }
  function zu(t) {
    return Object.getPrototypeOf(t.constructor) === vu;
  }
  function Uu(t, i) {
    if (!i) return null;
    Array.isArray(i);
    let e, n, r;
    return (
      i.forEach((o) => {
        o.constructor === Us ? (e = o) : zu(o) ? (n = o) : (r = o);
      }),
      r || n || e || null
    );
  }
  function js(t, i) {
    let e = t.indexOf(i);
    e > -1 && t.splice(e, 1);
  }
  function Vs(t) {
    return (
      typeof t == "object" &&
      t !== null &&
      Object.keys(t).length === 2 &&
      "value" in t &&
      "disabled" in t
    );
  }
  var $u = class extends po {
    constructor(i = null, e, n) {
      super(Du(e), Tu(n, e)),
        (this.defaultValue = null),
        (this._onChange = []),
        (this._pendingChange = !1),
        this._applyFormState(i),
        this._setUpdateStrategy(e),
        this._initObservables(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        }),
        En(e) &&
          (e.nonNullable || e.initialValueIsDefault) &&
          (Vs(i) ? (this.defaultValue = i.value) : (this.defaultValue = i));
    }
    setValue(i, e = {}) {
      (this.value = this._pendingValue = i),
        this._onChange.length &&
          e.emitModelToViewChange !== !1 &&
          this._onChange.forEach((n) =>
            n(this.value, e.emitViewToModelChange !== !1)
          ),
        this.updateValueAndValidity(e);
    }
    patchValue(i, e = {}) {
      this.setValue(i, e);
    }
    reset(i = this.defaultValue, e = {}) {
      this._applyFormState(i),
        this.markAsPristine(e),
        this.markAsUntouched(e),
        this.setValue(this.value, e),
        (this._pendingChange = !1);
    }
    _updateValue() {}
    _anyControls(i) {
      return !1;
    }
    _allControlsDisabled() {
      return this.disabled;
    }
    registerOnChange(i) {
      this._onChange.push(i);
    }
    _unregisterOnChange(i) {
      js(this._onChange, i);
    }
    registerOnDisabledChange(i) {
      this._onDisabledChange.push(i);
    }
    _unregisterOnDisabledChange(i) {
      js(this._onDisabledChange, i);
    }
    _forEachChild(i) {}
    _syncPendingControls() {
      return this.updateOn === "submit" &&
        (this._pendingDirty && this.markAsDirty(),
        this._pendingTouched && this.markAsTouched(),
        this._pendingChange)
        ? (this.setValue(this._pendingValue, {
            onlySelf: !0,
            emitModelToViewChange: !1,
          }),
          !0)
        : !1;
    }
    _applyFormState(i) {
      Vs(i)
        ? ((this.value = this._pendingValue = i.value),
          i.disabled
            ? this.disable({ onlySelf: !0, emitEvent: !1 })
            : this.enable({ onlySelf: !0, emitEvent: !1 }))
        : (this.value = this._pendingValue = i);
    }
  };
  var Hu = { provide: Mi, useExisting: rt(() => bo) },
    Bs = Promise.resolve(),
    bo = (() => {
      class t extends Mi {
        constructor(e, n, r, o, a, c) {
          super(),
            (this._changeDetectorRef = a),
            (this.callSetDisabledState = c),
            (this.control = new $u()),
            (this._registered = !1),
            (this.name = ""),
            (this.update = new re()),
            (this._parent = e),
            this._setValidators(n),
            this._setAsyncValidators(r),
            (this.valueAccessor = Uu(this, o));
        }
        ngOnChanges(e) {
          if ((this._checkForErrors(), !this._registered || "name" in e)) {
            if (this._registered && (this._checkName(), this.formDirective)) {
              let n = e.name.previousValue;
              this.formDirective.removeControl({
                name: n,
                path: this._getPath(n),
              });
            }
            this._setUpControl();
          }
          "isDisabled" in e && this._updateDisabled(e),
            Bu(e, this.viewModel) &&
              (this._updateValue(this.model), (this.viewModel = this.model));
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        get path() {
          return this._getPath(this.name);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        viewToModelUpdate(e) {
          (this.viewModel = e), this.update.emit(e);
        }
        _setUpControl() {
          this._setUpdateStrategy(),
            this._isStandalone()
              ? this._setUpStandalone()
              : this.formDirective.addControl(this),
            (this._registered = !0);
        }
        _setUpdateStrategy() {
          this.options &&
            this.options.updateOn != null &&
            (this.control._updateOn = this.options.updateOn);
        }
        _isStandalone() {
          return !this._parent || !!(this.options && this.options.standalone);
        }
        _setUpStandalone() {
          Ou(this.control, this, this.callSetDisabledState),
            this.control.updateValueAndValidity({ emitEvent: !1 });
        }
        _checkForErrors() {
          this._isStandalone() || this._checkParentType(), this._checkName();
        }
        _checkParentType() {}
        _checkName() {
          this.options && this.options.name && (this.name = this.options.name),
            !this._isStandalone() && this.name;
        }
        _updateValue(e) {
          Bs.then(() => {
            this.control.setValue(e, { emitViewToModelChange: !1 }),
              this._changeDetectorRef?.markForCheck();
          });
        }
        _updateDisabled(e) {
          let n = e.isDisabled.currentValue,
            r = n !== 0 && K(n);
          Bs.then(() => {
            r && !this.control.disabled
              ? this.control.disable()
              : !r && this.control.disabled && this.control.enable(),
              this._changeDetectorRef?.markForCheck();
          });
        }
        _getPath(e) {
          return this._parent ? Fu(e, this._parent) : [e];
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(
              y(mo, 9),
              y(fo, 10),
              y(wu, 10),
              y(Bt, 10),
              y(Ce, 8),
              y(Qs, 8)
            );
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [
              ["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""],
            ],
            inputs: {
              name: "name",
              isDisabled: [0, "disabled", "isDisabled"],
              model: [0, "ngModel", "model"],
              options: [0, "ngModelOptions", "options"],
            },
            outputs: { update: "ngModelChange" },
            exportAs: ["ngModel"],
            features: [Se([Hu]), st, We],
          });
        }
      }
      return t;
    })();
  var Gu = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({});
      }
    }
    return t;
  })();
  var Js = (() => {
    class t {
      static withConfig(e) {
        return {
          ngModule: t,
          providers: [{ provide: Qs, useValue: e.callSetDisabledState ?? go }],
        };
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [Gu] });
      }
    }
    return t;
  })();
  var Wu = ["*"],
    Mn;
  function Zu() {
    if (Mn === void 0 && ((Mn = null), typeof window < "u")) {
      let t = window;
      t.trustedTypes !== void 0 &&
        (Mn = t.trustedTypes.createPolicy("angular#components", {
          createHTML: (i) => i,
        }));
    }
    return Mn;
  }
  function Ai(t) {
    return Zu()?.createHTML(t) || t;
  }
  function ec(t) {
    return Error(`Unable to find icon with the name "${t}"`);
  }
  function Yu() {
    return Error(
      "Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers."
    );
  }
  function tc(t) {
    return Error(
      `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`
    );
  }
  function ic(t) {
    return Error(
      `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`
    );
  }
  var $e = class {
      constructor(i, e, n) {
        (this.url = i), (this.svgText = e), (this.options = n);
      }
    },
    Ku = (() => {
      class t {
        constructor(e, n, r, o) {
          (this._httpClient = e),
            (this._sanitizer = n),
            (this._errorHandler = o),
            (this._svgIconConfigs = new Map()),
            (this._iconSetConfigs = new Map()),
            (this._cachedIconsByUrl = new Map()),
            (this._inProgressUrlFetches = new Map()),
            (this._fontCssClassesByAlias = new Map()),
            (this._resolvers = []),
            (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
            (this._document = r);
        }
        addSvgIcon(e, n, r) {
          return this.addSvgIconInNamespace("", e, n, r);
        }
        addSvgIconLiteral(e, n, r) {
          return this.addSvgIconLiteralInNamespace("", e, n, r);
        }
        addSvgIconInNamespace(e, n, r, o) {
          return this._addSvgIconConfig(e, n, new $e(r, null, o));
        }
        addSvgIconResolver(e) {
          return this._resolvers.push(e), this;
        }
        addSvgIconLiteralInNamespace(e, n, r, o) {
          let a = this._sanitizer.sanitize(me.HTML, r);
          if (!a) throw ic(r);
          let c = Ai(a);
          return this._addSvgIconConfig(e, n, new $e("", c, o));
        }
        addSvgIconSet(e, n) {
          return this.addSvgIconSetInNamespace("", e, n);
        }
        addSvgIconSetLiteral(e, n) {
          return this.addSvgIconSetLiteralInNamespace("", e, n);
        }
        addSvgIconSetInNamespace(e, n, r) {
          return this._addSvgIconSetConfig(e, new $e(n, null, r));
        }
        addSvgIconSetLiteralInNamespace(e, n, r) {
          let o = this._sanitizer.sanitize(me.HTML, n);
          if (!o) throw ic(n);
          let a = Ai(o);
          return this._addSvgIconSetConfig(e, new $e("", a, r));
        }
        registerFontClassAlias(e, n = e) {
          return this._fontCssClassesByAlias.set(e, n), this;
        }
        classNameForFontAlias(e) {
          return this._fontCssClassesByAlias.get(e) || e;
        }
        setDefaultFontSetClass(...e) {
          return (this._defaultFontSetClass = e), this;
        }
        getDefaultFontSetClass() {
          return this._defaultFontSetClass;
        }
        getSvgIconFromUrl(e) {
          let n = this._sanitizer.sanitize(me.RESOURCE_URL, e);
          if (!n) throw tc(e);
          let r = this._cachedIconsByUrl.get(n);
          return r
            ? x(An(r))
            : this._loadSvgIconFromConfig(new $e(e, null)).pipe(
                Y((o) => this._cachedIconsByUrl.set(n, o)),
                C((o) => An(o))
              );
        }
        getNamedSvgIcon(e, n = "") {
          let r = nc(n, e),
            o = this._svgIconConfigs.get(r);
          if (o) return this._getSvgFromConfig(o);
          if (((o = this._getIconConfigFromResolvers(n, e)), o))
            return this._svgIconConfigs.set(r, o), this._getSvgFromConfig(o);
          let a = this._iconSetConfigs.get(n);
          return a ? this._getSvgFromIconSetConfigs(e, a) : tt(ec(r));
        }
        ngOnDestroy() {
          (this._resolvers = []),
            this._svgIconConfigs.clear(),
            this._iconSetConfigs.clear(),
            this._cachedIconsByUrl.clear();
        }
        _getSvgFromConfig(e) {
          return e.svgText
            ? x(An(this._svgElementFromConfig(e)))
            : this._loadSvgIconFromConfig(e).pipe(C((n) => An(n)));
        }
        _getSvgFromIconSetConfigs(e, n) {
          let r = this._extractIconWithNameFromAnySet(e, n);
          if (r) return x(r);
          let o = n
            .filter((a) => !a.svgText)
            .map((a) =>
              this._loadSvgIconSetFromConfig(a).pipe(
                Ge((c) => {
                  let u = `Loading icon set URL: ${this._sanitizer.sanitize(
                    me.RESOURCE_URL,
                    a.url
                  )} failed: ${c.message}`;
                  return this._errorHandler.handleError(new Error(u)), x(null);
                })
              )
            );
          return Ti(o).pipe(
            C(() => {
              let a = this._extractIconWithNameFromAnySet(e, n);
              if (!a) throw ec(e);
              return a;
            })
          );
        }
        _extractIconWithNameFromAnySet(e, n) {
          for (let r = n.length - 1; r >= 0; r--) {
            let o = n[r];
            if (o.svgText && o.svgText.toString().indexOf(e) > -1) {
              let a = this._svgElementFromConfig(o),
                c = this._extractSvgIconFromSet(a, e, o.options);
              if (c) return c;
            }
          }
          return null;
        }
        _loadSvgIconFromConfig(e) {
          return this._fetchIcon(e).pipe(
            Y((n) => (e.svgText = n)),
            C(() => this._svgElementFromConfig(e))
          );
        }
        _loadSvgIconSetFromConfig(e) {
          return e.svgText
            ? x(null)
            : this._fetchIcon(e).pipe(Y((n) => (e.svgText = n)));
        }
        _extractSvgIconFromSet(e, n, r) {
          let o = e.querySelector(`[id="${n}"]`);
          if (!o) return null;
          let a = o.cloneNode(!0);
          if ((a.removeAttribute("id"), a.nodeName.toLowerCase() === "svg"))
            return this._setSvgAttributes(a, r);
          if (a.nodeName.toLowerCase() === "symbol")
            return this._setSvgAttributes(this._toSvgElement(a), r);
          let c = this._svgElementFromString(Ai("<svg></svg>"));
          return c.appendChild(a), this._setSvgAttributes(c, r);
        }
        _svgElementFromString(e) {
          let n = this._document.createElement("DIV");
          n.innerHTML = e;
          let r = n.querySelector("svg");
          if (!r) throw Error("<svg> tag not found");
          return r;
        }
        _toSvgElement(e) {
          let n = this._svgElementFromString(Ai("<svg></svg>")),
            r = e.attributes;
          for (let o = 0; o < r.length; o++) {
            let { name: a, value: c } = r[o];
            a !== "id" && n.setAttribute(a, c);
          }
          for (let o = 0; o < e.childNodes.length; o++)
            e.childNodes[o].nodeType === this._document.ELEMENT_NODE &&
              n.appendChild(e.childNodes[o].cloneNode(!0));
          return n;
        }
        _setSvgAttributes(e, n) {
          return (
            e.setAttribute("fit", ""),
            e.setAttribute("height", "100%"),
            e.setAttribute("width", "100%"),
            e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
            e.setAttribute("focusable", "false"),
            n && n.viewBox && e.setAttribute("viewBox", n.viewBox),
            e
          );
        }
        _fetchIcon(e) {
          let { url: n, options: r } = e,
            o = r?.withCredentials ?? !1;
          if (!this._httpClient) throw Yu();
          if (n == null) throw Error(`Cannot fetch icon from URL "${n}".`);
          let a = this._sanitizer.sanitize(me.RESOURCE_URL, n);
          if (!a) throw tc(n);
          let c = this._inProgressUrlFetches.get(a);
          if (c) return c;
          let s = this._httpClient
            .get(a, { responseType: "text", withCredentials: o })
            .pipe(
              C((u) => Ai(u)),
              nt(() => this._inProgressUrlFetches.delete(a)),
              Mo()
            );
          return this._inProgressUrlFetches.set(a, s), s;
        }
        _addSvgIconConfig(e, n, r) {
          return this._svgIconConfigs.set(nc(e, n), r), this;
        }
        _addSvgIconSetConfig(e, n) {
          let r = this._iconSetConfigs.get(e);
          return r ? r.push(n) : this._iconSetConfigs.set(e, [n]), this;
        }
        _svgElementFromConfig(e) {
          if (!e.svgElement) {
            let n = this._svgElementFromString(e.svgText);
            this._setSvgAttributes(n, e.options), (e.svgElement = n);
          }
          return e.svgElement;
        }
        _getIconConfigFromResolvers(e, n) {
          for (let r = 0; r < this._resolvers.length; r++) {
            let o = this._resolvers[r](n, e);
            if (o)
              return Qu(o) ? new $e(o.url, null, o.options) : new $e(o, null);
          }
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(_(pa, 8), _(pr), _($, 8), _(at));
          };
        }
        static {
          this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
        }
      }
      return t;
    })();
  function An(t) {
    return t.cloneNode(!0);
  }
  function nc(t, i) {
    return t + ":" + i;
  }
  function Qu(t) {
    return !!(t.url && t.options);
  }
  var Xu = new k("MAT_ICON_DEFAULT_OPTIONS"),
    Ju = new k("mat-icon-location", { providedIn: "root", factory: em });
  function em() {
    let t = b($),
      i = t ? t.location : null;
    return { getPathname: () => (i ? i.pathname + i.search : "") };
  }
  var rc = [
      "clip-path",
      "color-profile",
      "src",
      "cursor",
      "fill",
      "filter",
      "marker",
      "marker-start",
      "marker-mid",
      "marker-end",
      "mask",
      "stroke",
    ],
    tm = rc.map((t) => `[${t}]`).join(", "),
    im = /^url\(['"]?#(.*?)['"]?\)$/,
    oc = (() => {
      class t {
        get color() {
          return this._color || this._defaultColor;
        }
        set color(e) {
          this._color = e;
        }
        get svgIcon() {
          return this._svgIcon;
        }
        set svgIcon(e) {
          e !== this._svgIcon &&
            (e
              ? this._updateSvgIcon(e)
              : this._svgIcon && this._clearSvgElement(),
            (this._svgIcon = e));
        }
        get fontSet() {
          return this._fontSet;
        }
        set fontSet(e) {
          let n = this._cleanupFontValue(e);
          n !== this._fontSet &&
            ((this._fontSet = n), this._updateFontIconClasses());
        }
        get fontIcon() {
          return this._fontIcon;
        }
        set fontIcon(e) {
          let n = this._cleanupFontValue(e);
          n !== this._fontIcon &&
            ((this._fontIcon = n), this._updateFontIconClasses());
        }
        constructor(e, n, r, o, a, c) {
          (this._elementRef = e),
            (this._iconRegistry = n),
            (this._location = o),
            (this._errorHandler = a),
            (this.inline = !1),
            (this._previousFontSetClass = []),
            (this._currentIconFetch = zt.EMPTY),
            c &&
              (c.color && (this.color = this._defaultColor = c.color),
              c.fontSet && (this.fontSet = c.fontSet)),
            r || e.nativeElement.setAttribute("aria-hidden", "true");
        }
        _splitIconName(e) {
          if (!e) return ["", ""];
          let n = e.split(":");
          switch (n.length) {
            case 1:
              return ["", n[0]];
            case 2:
              return n;
            default:
              throw Error(`Invalid icon name: "${e}"`);
          }
        }
        ngOnInit() {
          this._updateFontIconClasses();
        }
        ngAfterViewChecked() {
          let e = this._elementsWithExternalReferences;
          if (e && e.size) {
            let n = this._location.getPathname();
            n !== this._previousPath &&
              ((this._previousPath = n), this._prependPathToReferences(n));
          }
        }
        ngOnDestroy() {
          this._currentIconFetch.unsubscribe(),
            this._elementsWithExternalReferences &&
              this._elementsWithExternalReferences.clear();
        }
        _usingFontIcon() {
          return !this.svgIcon;
        }
        _setSvgElement(e) {
          this._clearSvgElement();
          let n = this._location.getPathname();
          (this._previousPath = n),
            this._cacheChildrenWithExternalReferences(e),
            this._prependPathToReferences(n),
            this._elementRef.nativeElement.appendChild(e);
        }
        _clearSvgElement() {
          let e = this._elementRef.nativeElement,
            n = e.childNodes.length;
          for (
            this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
            n--;
  
          ) {
            let r = e.childNodes[n];
            (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") &&
              r.remove();
          }
        }
        _updateFontIconClasses() {
          if (!this._usingFontIcon()) return;
          let e = this._elementRef.nativeElement,
            n = (
              this.fontSet
                ? this._iconRegistry
                    .classNameForFontAlias(this.fontSet)
                    .split(/ +/)
                : this._iconRegistry.getDefaultFontSetClass()
            ).filter((r) => r.length > 0);
          this._previousFontSetClass.forEach((r) => e.classList.remove(r)),
            n.forEach((r) => e.classList.add(r)),
            (this._previousFontSetClass = n),
            this.fontIcon !== this._previousFontIconClass &&
              !n.includes("mat-ligature-font") &&
              (this._previousFontIconClass &&
                e.classList.remove(this._previousFontIconClass),
              this.fontIcon && e.classList.add(this.fontIcon),
              (this._previousFontIconClass = this.fontIcon));
        }
        _cleanupFontValue(e) {
          return typeof e == "string" ? e.trim().split(" ")[0] : e;
        }
        _prependPathToReferences(e) {
          let n = this._elementsWithExternalReferences;
          n &&
            n.forEach((r, o) => {
              r.forEach((a) => {
                o.setAttribute(a.name, `url('${e}#${a.value}')`);
              });
            });
        }
        _cacheChildrenWithExternalReferences(e) {
          let n = e.querySelectorAll(tm),
            r = (this._elementsWithExternalReferences =
              this._elementsWithExternalReferences || new Map());
          for (let o = 0; o < n.length; o++)
            rc.forEach((a) => {
              let c = n[o],
                s = c.getAttribute(a),
                u = s ? s.match(im) : null;
              if (u) {
                let p = r.get(c);
                p || ((p = []), r.set(c, p)), p.push({ name: a, value: u[1] });
              }
            });
        }
        _updateSvgIcon(e) {
          if (
            ((this._svgNamespace = null),
            (this._svgName = null),
            this._currentIconFetch.unsubscribe(),
            e)
          ) {
            let [n, r] = this._splitIconName(e);
            n && (this._svgNamespace = n),
              r && (this._svgName = r),
              (this._currentIconFetch = this._iconRegistry
                .getNamedSvgIcon(r, n)
                .pipe(Me(1))
                .subscribe(
                  (o) => this._setSvgElement(o),
                  (o) => {
                    let a = `Error retrieving icon ${n}:${r}! ${o.message}`;
                    this._errorHandler.handleError(new Error(a));
                  }
                ));
          }
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(
              y(W),
              y(Ku),
              Ze("aria-hidden"),
              y(Ju),
              y(at),
              y(Xu, 8)
            );
          };
        }
        static {
          this.ɵcmp = X({
            type: t,
            selectors: [["mat-icon"]],
            hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
            hostVars: 10,
            hostBindings: function (n, r) {
              n & 2 &&
                (te("data-mat-icon-type", r._usingFontIcon() ? "font" : "svg")(
                  "data-mat-icon-name",
                  r._svgName || r.fontIcon
                )("data-mat-icon-namespace", r._svgNamespace || r.fontSet)(
                  "fontIcon",
                  r._usingFontIcon() ? r.fontIcon : null
                ),
                ct(r.color ? "mat-" + r.color : ""),
                ee("mat-icon-inline", r.inline)(
                  "mat-icon-no-color",
                  r.color !== "primary" &&
                    r.color !== "accent" &&
                    r.color !== "warn"
                ));
            },
            inputs: {
              color: "color",
              inline: [2, "inline", "inline", K],
              svgIcon: "svgIcon",
              fontSet: "fontSet",
              fontIcon: "fontIcon",
            },
            exportAs: ["matIcon"],
            standalone: !0,
            features: [he, J],
            ngContentSelectors: Wu,
            decls: 1,
            vars: 0,
            template: function (n, r) {
              n & 1 && (ue(), se(0));
            },
            styles: [
              "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
            ],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
      }
      return t;
    })(),
    Dn = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵmod = T({ type: t });
        }
        static {
          this.ɵinj = S({ imports: [H, H] });
        }
      }
      return t;
    })();
  var ac = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [H, yn, H] });
      }
    }
    return t;
  })();
  var rm = ["*", [["mat-toolbar-row"]]],
    om = ["*", "mat-toolbar-row"],
    am = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [["mat-toolbar-row"]],
            hostAttrs: [1, "mat-toolbar-row"],
            exportAs: ["matToolbarRow"],
            standalone: !0,
          });
        }
      }
      return t;
    })(),
    Sn = (() => {
      class t {
        constructor(e, n, r) {
          (this._elementRef = e), (this._platform = n), (this._document = r);
        }
        ngAfterViewInit() {
          this._platform.isBrowser &&
            (this._checkToolbarMixedModes(),
            this._toolbarRows.changes.subscribe(() =>
              this._checkToolbarMixedModes()
            ));
        }
        _checkToolbarMixedModes() {
          this._toolbarRows.length;
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(W), y(Ie), y($));
          };
        }
        static {
          this.ɵcmp = X({
            type: t,
            selectors: [["mat-toolbar"]],
            contentQueries: function (n, r, o) {
              if ((n & 1 && Ct(o, am, 5), n & 2)) {
                let a;
                pe((a = fe())) && (r._toolbarRows = a);
              }
            },
            hostAttrs: [1, "mat-toolbar"],
            hostVars: 6,
            hostBindings: function (n, r) {
              n & 2 &&
                (ct(r.color ? "mat-" + r.color : ""),
                ee("mat-toolbar-multiple-rows", r._toolbarRows.length > 0)(
                  "mat-toolbar-single-row",
                  r._toolbarRows.length === 0
                ));
            },
            inputs: { color: "color" },
            exportAs: ["matToolbar"],
            standalone: !0,
            features: [J],
            ngContentSelectors: om,
            decls: 2,
            vars: 0,
            template: function (n, r) {
              n & 1 && (ue(rm), se(0), se(1, 1));
            },
            styles: [
              ".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
            ],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
      }
      return t;
    })();
  var Tn = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [H, H] });
      }
    }
    return t;
  })();
  var sm = ["input"],
    cm = ["label"],
    dm = ["*"],
    lm = new k("mat-checkbox-default-options", {
      providedIn: "root",
      factory: dc,
    });
  function dc() {
    return {
      color: "accent",
      clickAction: "check-indeterminate",
      disabledInteractive: !1,
    };
  }
  var ae = (function (t) {
      return (
        (t[(t.Init = 0)] = "Init"),
        (t[(t.Checked = 1)] = "Checked"),
        (t[(t.Unchecked = 2)] = "Unchecked"),
        (t[(t.Indeterminate = 3)] = "Indeterminate"),
        t
      );
    })(ae || {}),
    um = { provide: Bt, useExisting: rt(() => Rn), multi: !0 },
    vo = class {},
    mm = 0,
    cc = dc(),
    Rn = (() => {
      class t {
        focus() {
          this._inputElement.nativeElement.focus();
        }
        _createChangeEvent(e) {
          let n = new vo();
          return (n.source = this), (n.checked = e), n;
        }
        _getAnimationTargetElement() {
          return this._inputElement?.nativeElement;
        }
        get inputId() {
          return `${this.id || this._uniqueId}-input`;
        }
        constructor(e, n, r, o, a, c) {
          (this._elementRef = e),
            (this._changeDetectorRef = n),
            (this._ngZone = r),
            (this._animationMode = a),
            (this._options = c),
            (this._animationClasses = {
              uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
              uncheckedToIndeterminate:
                "mdc-checkbox--anim-unchecked-indeterminate",
              checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
              checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
              indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
              indeterminateToUnchecked:
                "mdc-checkbox--anim-indeterminate-unchecked",
            }),
            (this.ariaLabel = ""),
            (this.ariaLabelledby = null),
            (this.labelPosition = "after"),
            (this.name = null),
            (this.change = new re()),
            (this.indeterminateChange = new re()),
            (this._onTouched = () => {}),
            (this._currentAnimationClass = ""),
            (this._currentCheckState = ae.Init),
            (this._controlValueAccessorChangeFn = () => {}),
            (this._validatorChangeFn = () => {}),
            (this._checked = !1),
            (this._disabled = !1),
            (this._indeterminate = !1),
            (this._options = this._options || cc),
            (this.color = this._options.color || cc.color),
            (this.tabIndex = parseInt(o) || 0),
            (this.id = this._uniqueId = `mat-mdc-checkbox-${++mm}`),
            (this.disabledInteractive = c?.disabledInteractive ?? !1);
        }
        ngOnChanges(e) {
          e.required && this._validatorChangeFn();
        }
        ngAfterViewInit() {
          this._syncIndeterminate(this._indeterminate);
        }
        get checked() {
          return this._checked;
        }
        set checked(e) {
          e != this.checked &&
            ((this._checked = e), this._changeDetectorRef.markForCheck());
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          e !== this.disabled &&
            ((this._disabled = e), this._changeDetectorRef.markForCheck());
        }
        get indeterminate() {
          return this._indeterminate;
        }
        set indeterminate(e) {
          let n = e != this._indeterminate;
          (this._indeterminate = e),
            n &&
              (this._indeterminate
                ? this._transitionCheckState(ae.Indeterminate)
                : this._transitionCheckState(
                    this.checked ? ae.Checked : ae.Unchecked
                  ),
              this.indeterminateChange.emit(this._indeterminate)),
            this._syncIndeterminate(this._indeterminate);
        }
        _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        _onLabelTextChange() {
          this._changeDetectorRef.detectChanges();
        }
        writeValue(e) {
          this.checked = !!e;
        }
        registerOnChange(e) {
          this._controlValueAccessorChangeFn = e;
        }
        registerOnTouched(e) {
          this._onTouched = e;
        }
        setDisabledState(e) {
          this.disabled = e;
        }
        validate(e) {
          return this.required && e.value !== !0 ? { required: !0 } : null;
        }
        registerOnValidatorChange(e) {
          this._validatorChangeFn = e;
        }
        _transitionCheckState(e) {
          let n = this._currentCheckState,
            r = this._getAnimationTargetElement();
          if (
            !(n === e || !r) &&
            (this._currentAnimationClass &&
              r.classList.remove(this._currentAnimationClass),
            (this._currentAnimationClass =
              this._getAnimationClassForCheckStateTransition(n, e)),
            (this._currentCheckState = e),
            this._currentAnimationClass.length > 0)
          ) {
            r.classList.add(this._currentAnimationClass);
            let o = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
              setTimeout(() => {
                r.classList.remove(o);
              }, 1e3);
            });
          }
        }
        _emitChangeEvent() {
          this._controlValueAccessorChangeFn(this.checked),
            this.change.emit(this._createChangeEvent(this.checked)),
            this._inputElement &&
              (this._inputElement.nativeElement.checked = this.checked);
        }
        toggle() {
          (this.checked = !this.checked),
            this._controlValueAccessorChangeFn(this.checked);
        }
        _handleInputClick() {
          let e = this._options?.clickAction;
          !this.disabled && e !== "noop"
            ? (this.indeterminate &&
                e !== "check" &&
                Promise.resolve().then(() => {
                  (this._indeterminate = !1),
                    this.indeterminateChange.emit(this._indeterminate);
                }),
              (this._checked = !this._checked),
              this._transitionCheckState(
                this._checked ? ae.Checked : ae.Unchecked
              ),
              this._emitChangeEvent())
            : ((this.disabled && this.disabledInteractive) ||
                (!this.disabled && e === "noop")) &&
              ((this._inputElement.nativeElement.checked = this.checked),
              (this._inputElement.nativeElement.indeterminate =
                this.indeterminate));
        }
        _onInteractionEvent(e) {
          e.stopPropagation();
        }
        _onBlur() {
          Promise.resolve().then(() => {
            this._onTouched(), this._changeDetectorRef.markForCheck();
          });
        }
        _getAnimationClassForCheckStateTransition(e, n) {
          if (this._animationMode === "NoopAnimations") return "";
          switch (e) {
            case ae.Init:
              if (n === ae.Checked)
                return this._animationClasses.uncheckedToChecked;
              if (n == ae.Indeterminate)
                return this._checked
                  ? this._animationClasses.checkedToIndeterminate
                  : this._animationClasses.uncheckedToIndeterminate;
              break;
            case ae.Unchecked:
              return n === ae.Checked
                ? this._animationClasses.uncheckedToChecked
                : this._animationClasses.uncheckedToIndeterminate;
            case ae.Checked:
              return n === ae.Unchecked
                ? this._animationClasses.checkedToUnchecked
                : this._animationClasses.checkedToIndeterminate;
            case ae.Indeterminate:
              return n === ae.Checked
                ? this._animationClasses.indeterminateToChecked
                : this._animationClasses.indeterminateToUnchecked;
          }
          return "";
        }
        _syncIndeterminate(e) {
          let n = this._inputElement;
          n && (n.nativeElement.indeterminate = e);
        }
        _onInputClick() {
          this._handleInputClick();
        }
        _onTouchTargetClick() {
          this._handleInputClick(),
            this.disabled || this._inputElement.nativeElement.focus();
        }
        _preventBubblingFromLabel(e) {
          e.target &&
            this._labelElement.nativeElement.contains(e.target) &&
            e.stopPropagation();
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(
              y(W),
              y(Ce),
              y(q),
              Ze("tabindex"),
              y(Ye, 8),
              y(lm, 8)
            );
          };
        }
        static {
          this.ɵcmp = X({
            type: t,
            selectors: [["mat-checkbox"]],
            viewQuery: function (n, r) {
              if ((n & 1 && (Be(sm, 5), Be(cm, 5), Be(wi, 5)), n & 2)) {
                let o;
                pe((o = fe())) && (r._inputElement = o.first),
                  pe((o = fe())) && (r._labelElement = o.first),
                  pe((o = fe())) && (r.ripple = o.first);
              }
            },
            hostAttrs: [1, "mat-mdc-checkbox"],
            hostVars: 16,
            hostBindings: function (n, r) {
              n & 2 &&
                (Wt("id", r.id),
                te("tabindex", null)("aria-label", null)("aria-labelledby", null),
                ct(r.color ? "mat-" + r.color : "mat-accent"),
                ee(
                  "_mat-animation-noopable",
                  r._animationMode === "NoopAnimations"
                )("mdc-checkbox--disabled", r.disabled)(
                  "mat-mdc-checkbox-disabled",
                  r.disabled
                )("mat-mdc-checkbox-checked", r.checked)(
                  "mat-mdc-checkbox-disabled-interactive",
                  r.disabledInteractive
                ));
            },
            inputs: {
              ariaLabel: [0, "aria-label", "ariaLabel"],
              ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
              ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
              id: "id",
              required: [2, "required", "required", K],
              labelPosition: "labelPosition",
              name: "name",
              value: "value",
              disableRipple: [2, "disableRipple", "disableRipple", K],
              tabIndex: [
                2,
                "tabIndex",
                "tabIndex",
                (e) => (e == null ? void 0 : Yt(e)),
              ],
              color: "color",
              disabledInteractive: [
                2,
                "disabledInteractive",
                "disabledInteractive",
                K,
              ],
              checked: [2, "checked", "checked", K],
              disabled: [2, "disabled", "disabled", K],
              indeterminate: [2, "indeterminate", "indeterminate", K],
            },
            outputs: {
              change: "change",
              indeterminateChange: "indeterminateChange",
            },
            exportAs: ["matCheckbox"],
            standalone: !0,
            features: [
              Se([um, { provide: fo, useExisting: t, multi: !0 }]),
              he,
              We,
              J,
            ],
            ngContentSelectors: dm,
            decls: 15,
            vars: 20,
            consts: [
              ["checkbox", ""],
              ["input", ""],
              ["label", ""],
              ["mat-internal-form-field", "", 3, "click", "labelPosition"],
              [1, "mdc-checkbox"],
              [1, "mat-mdc-checkbox-touch-target", 3, "click"],
              [
                "type",
                "checkbox",
                1,
                "mdc-checkbox__native-control",
                3,
                "blur",
                "click",
                "change",
                "checked",
                "indeterminate",
                "disabled",
                "id",
                "required",
                "tabIndex",
              ],
              [1, "mdc-checkbox__ripple"],
              [1, "mdc-checkbox__background"],
              [
                "focusable",
                "false",
                "viewBox",
                "0 0 24 24",
                "aria-hidden",
                "true",
                1,
                "mdc-checkbox__checkmark",
              ],
              [
                "fill",
                "none",
                "d",
                "M1.73,12.91 8.1,19.28 22.79,4.59",
                1,
                "mdc-checkbox__checkmark-path",
              ],
              [1, "mdc-checkbox__mixedmark"],
              [
                "mat-ripple",
                "",
                1,
                "mat-mdc-checkbox-ripple",
                "mat-mdc-focus-indicator",
                3,
                "matRippleTrigger",
                "matRippleDisabled",
                "matRippleCentered",
              ],
              [1, "mdc-label", 3, "for"],
            ],
            template: function (n, r) {
              if (n & 1) {
                let o = Pe();
                ue(),
                  d(0, "div", 3),
                  F("click", function (c) {
                    return M(o), A(r._preventBubblingFromLabel(c));
                  }),
                  d(1, "div", 4, 0)(3, "div", 5),
                  F("click", function () {
                    return M(o), A(r._onTouchTargetClick());
                  }),
                  l(),
                  d(4, "input", 6, 1),
                  F("blur", function () {
                    return M(o), A(r._onBlur());
                  })("click", function () {
                    return M(o), A(r._onInputClick());
                  })("change", function (c) {
                    return M(o), A(r._onInteractionEvent(c));
                  }),
                  l(),
                  R(6, "div", 7),
                  d(7, "div", 8),
                  Oi(),
                  d(8, "svg", 9),
                  R(9, "path", 10),
                  l(),
                  Pi(),
                  R(10, "div", 11),
                  l(),
                  R(11, "div", 12),
                  l(),
                  d(12, "label", 13, 2),
                  se(14),
                  l()();
              }
              if (n & 2) {
                let o = Qn(2);
                v("labelPosition", r.labelPosition),
                  m(4),
                  ee("mdc-checkbox--selected", r.checked),
                  v("checked", r.checked)("indeterminate", r.indeterminate)(
                    "disabled",
                    r.disabled && !r.disabledInteractive
                  )("id", r.inputId)("required", r.required)(
                    "tabIndex",
                    r.disabled && !r.disabledInteractive ? -1 : r.tabIndex
                  ),
                  te("aria-label", r.ariaLabel || null)(
                    "aria-labelledby",
                    r.ariaLabelledby
                  )("aria-describedby", r.ariaDescribedby)(
                    "aria-checked",
                    r.indeterminate ? "mixed" : null
                  )(
                    "aria-disabled",
                    r.disabled && r.disabledInteractive ? !0 : null
                  )("name", r.name)("value", r.value),
                  m(7),
                  v("matRippleTrigger", o)(
                    "matRippleDisabled",
                    r.disableRipple || r.disabled
                  )("matRippleCentered", !0),
                  m(),
                  v("for", r.inputId);
              }
            },
            dependencies: [wi, xn],
            styles: [
              '.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}',
            ],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
      }
      return t;
    })();
  var lc = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [Rn, H, H] });
      }
    }
    return t;
  })();
  var uc = (() => {
    class t {
      constructor() {
        this._listeners = [];
      }
      notify(e, n) {
        for (let r of this._listeners) r(e, n);
      }
      listen(e) {
        return (
          this._listeners.push(e),
          () => {
            this._listeners = this._listeners.filter((n) => e !== n);
          }
        );
      }
      ngOnDestroy() {
        this._listeners = [];
      }
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
  var fm = ["input"],
    gm = ["formField"],
    bm = ["*"],
    mc = 0,
    Fn = class {
      constructor(i, e) {
        (this.source = i), (this.value = e);
      }
    },
    vm = { provide: Bt, useExisting: rt(() => _o), multi: !0 },
    hc = new k("MatRadioGroup"),
    _m = new k("mat-radio-default-options", { providedIn: "root", factory: ym });
  function ym() {
    return { color: "accent", disabledInteractive: !1 };
  }
  var _o = (() => {
      class t {
        get name() {
          return this._name;
        }
        set name(e) {
          (this._name = e), this._updateRadioButtonNames();
        }
        get labelPosition() {
          return this._labelPosition;
        }
        set labelPosition(e) {
          (this._labelPosition = e === "before" ? "before" : "after"),
            this._markRadiosForCheck();
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this._value !== e &&
            ((this._value = e),
            this._updateSelectedRadioFromValue(),
            this._checkSelectedRadioButton());
        }
        _checkSelectedRadioButton() {
          this._selected &&
            !this._selected.checked &&
            (this._selected.checked = !0);
        }
        get selected() {
          return this._selected;
        }
        set selected(e) {
          (this._selected = e),
            (this.value = e ? e.value : null),
            this._checkSelectedRadioButton();
        }
        get disabled() {
          return this._disabled;
        }
        set disabled(e) {
          (this._disabled = e), this._markRadiosForCheck();
        }
        get required() {
          return this._required;
        }
        set required(e) {
          (this._required = e), this._markRadiosForCheck();
        }
        get disabledInteractive() {
          return this._disabledInteractive;
        }
        set disabledInteractive(e) {
          (this._disabledInteractive = e), this._markRadiosForCheck();
        }
        constructor(e) {
          (this._changeDetector = e),
            (this._value = null),
            (this._name = `mat-radio-group-${mc++}`),
            (this._selected = null),
            (this._isInitialized = !1),
            (this._labelPosition = "after"),
            (this._disabled = !1),
            (this._required = !1),
            (this._controlValueAccessorChangeFn = () => {}),
            (this.onTouched = () => {}),
            (this.change = new re()),
            (this._disabledInteractive = !1);
        }
        ngAfterContentInit() {
          (this._isInitialized = !0),
            (this._buttonChanges = this._radios.changes.subscribe(() => {
              this.selected &&
                !this._radios.find((e) => e === this.selected) &&
                (this._selected = null);
            }));
        }
        ngOnDestroy() {
          this._buttonChanges?.unsubscribe();
        }
        _touch() {
          this.onTouched && this.onTouched();
        }
        _updateRadioButtonNames() {
          this._radios &&
            this._radios.forEach((e) => {
              (e.name = this.name), e._markForCheck();
            });
        }
        _updateSelectedRadioFromValue() {
          let e = this._selected !== null && this._selected.value === this._value;
          this._radios &&
            !e &&
            ((this._selected = null),
            this._radios.forEach((n) => {
              (n.checked = this.value === n.value),
                n.checked && (this._selected = n);
            }));
        }
        _emitChangeEvent() {
          this._isInitialized &&
            this.change.emit(new Fn(this._selected, this._value));
        }
        _markRadiosForCheck() {
          this._radios && this._radios.forEach((e) => e._markForCheck());
        }
        writeValue(e) {
          (this.value = e), this._changeDetector.markForCheck();
        }
        registerOnChange(e) {
          this._controlValueAccessorChangeFn = e;
        }
        registerOnTouched(e) {
          this.onTouched = e;
        }
        setDisabledState(e) {
          (this.disabled = e), this._changeDetector.markForCheck();
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(y(Ce));
          };
        }
        static {
          this.ɵdir = G({
            type: t,
            selectors: [["mat-radio-group"]],
            contentQueries: function (n, r, o) {
              if ((n & 1 && Ct(o, On, 5), n & 2)) {
                let a;
                pe((a = fe())) && (r._radios = a);
              }
            },
            hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
            inputs: {
              color: "color",
              name: "name",
              labelPosition: "labelPosition",
              value: "value",
              selected: "selected",
              disabled: [2, "disabled", "disabled", K],
              required: [2, "required", "required", K],
              disabledInteractive: [
                2,
                "disabledInteractive",
                "disabledInteractive",
                K,
              ],
            },
            outputs: { change: "change" },
            exportAs: ["matRadioGroup"],
            standalone: !0,
            features: [Se([vm, { provide: hc, useExisting: t }]), he],
          });
        }
      }
      return t;
    })(),
    On = (() => {
      class t {
        get checked() {
          return this._checked;
        }
        set checked(e) {
          this._checked !== e &&
            ((this._checked = e),
            e && this.radioGroup && this.radioGroup.value !== this.value
              ? (this.radioGroup.selected = this)
              : !e &&
                this.radioGroup &&
                this.radioGroup.value === this.value &&
                (this.radioGroup.selected = null),
            e && this._radioDispatcher.notify(this.id, this.name),
            this._changeDetector.markForCheck());
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this._value !== e &&
            ((this._value = e),
            this.radioGroup !== null &&
              (this.checked || (this.checked = this.radioGroup.value === e),
              this.checked && (this.radioGroup.selected = this)));
        }
        get labelPosition() {
          return (
            this._labelPosition ||
            (this.radioGroup && this.radioGroup.labelPosition) ||
            "after"
          );
        }
        set labelPosition(e) {
          this._labelPosition = e;
        }
        get disabled() {
          return (
            this._disabled ||
            (this.radioGroup !== null && this.radioGroup.disabled)
          );
        }
        set disabled(e) {
          this._setDisabled(e);
        }
        get required() {
          return this._required || (this.radioGroup && this.radioGroup.required);
        }
        set required(e) {
          this._required = e;
        }
        get color() {
          return (
            this._color ||
            (this.radioGroup && this.radioGroup.color) ||
            (this._defaultOptions && this._defaultOptions.color) ||
            "accent"
          );
        }
        set color(e) {
          this._color = e;
        }
        get disabledInteractive() {
          return (
            this._disabledInteractive ||
            (this.radioGroup !== null && this.radioGroup.disabledInteractive)
          );
        }
        set disabledInteractive(e) {
          this._disabledInteractive = e;
        }
        get inputId() {
          return `${this.id || this._uniqueId}-input`;
        }
        constructor(e, n, r, o, a, c, s, u) {
          (this._elementRef = n),
            (this._changeDetector = r),
            (this._focusMonitor = o),
            (this._radioDispatcher = a),
            (this._defaultOptions = s),
            (this._ngZone = b(q)),
            (this._uniqueId = `mat-radio-${++mc}`),
            (this.id = this._uniqueId),
            (this.disableRipple = !1),
            (this.tabIndex = 0),
            (this.change = new re()),
            (this._checked = !1),
            (this._value = null),
            (this._removeUniqueSelectionListener = () => {}),
            (this._injector = b(yt)),
            (this._onInputClick = (p) => {
              this.disabled && this.disabledInteractive && p.preventDefault();
            }),
            (this.radioGroup = e),
            (this._noopAnimations = c === "NoopAnimations"),
            (this._disabledInteractive = s?.disabledInteractive ?? !1),
            u && (this.tabIndex = Yt(u, 0));
        }
        focus(e, n) {
          n
            ? this._focusMonitor.focusVia(this._inputElement, n, e)
            : this._inputElement.nativeElement.focus(e);
        }
        _markForCheck() {
          this._changeDetector.markForCheck();
        }
        ngOnInit() {
          this.radioGroup &&
            ((this.checked = this.radioGroup.value === this._value),
            this.checked && (this.radioGroup.selected = this),
            (this.name = this.radioGroup.name)),
            (this._removeUniqueSelectionListener = this._radioDispatcher.listen(
              (e, n) => {
                e !== this.id && n === this.name && (this.checked = !1);
              }
            ));
        }
        ngDoCheck() {
          this._updateTabIndex();
        }
        ngAfterViewInit() {
          this._updateTabIndex(),
            this._focusMonitor.monitor(this._elementRef, !0).subscribe((e) => {
              !e && this.radioGroup && this.radioGroup._touch();
            }),
            this._ngZone.runOutsideAngular(() => {
              this._inputElement.nativeElement.addEventListener(
                "click",
                this._onInputClick
              );
            });
        }
        ngOnDestroy() {
          this._inputElement?.nativeElement.removeEventListener(
            "click",
            this._onInputClick
          ),
            this._focusMonitor.stopMonitoring(this._elementRef),
            this._removeUniqueSelectionListener();
        }
        _emitChangeEvent() {
          this.change.emit(new Fn(this, this._value));
        }
        _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        _onInputInteraction(e) {
          if ((e.stopPropagation(), !this.checked && !this.disabled)) {
            let n = this.radioGroup && this.value !== this.radioGroup.value;
            (this.checked = !0),
              this._emitChangeEvent(),
              this.radioGroup &&
                (this.radioGroup._controlValueAccessorChangeFn(this.value),
                n && this.radioGroup._emitChangeEvent());
          }
        }
        _onTouchTargetClick(e) {
          this._onInputInteraction(e),
            (!this.disabled || this.disabledInteractive) &&
              this._inputElement?.nativeElement.focus();
        }
        _setDisabled(e) {
          this._disabled !== e &&
            ((this._disabled = e), this._changeDetector.markForCheck());
        }
        _updateTabIndex() {
          let e = this.radioGroup,
            n;
          if (
            (!e || !e.selected || this.disabled
              ? (n = this.tabIndex)
              : (n = e.selected === this ? this.tabIndex : -1),
            n !== this._previousTabIndex)
          ) {
            let r = this._inputElement?.nativeElement;
            r &&
              (r.setAttribute("tabindex", n + ""),
              (this._previousTabIndex = n),
              Ui(
                () => {
                  queueMicrotask(() => {
                    e &&
                      e.selected &&
                      e.selected !== this &&
                      document.activeElement === r &&
                      (e.selected?._inputElement.nativeElement.focus(),
                      document.activeElement === r &&
                        this._inputElement.nativeElement.blur());
                  });
                },
                { injector: this._injector }
              ));
          }
        }
        static {
          this.ɵfac = function (n) {
            return new (n || t)(
              y(hc, 8),
              y(W),
              y(Ce),
              y(ws),
              y(uc),
              y(Ye, 8),
              y(_m, 8),
              Ze("tabindex")
            );
          };
        }
        static {
          this.ɵcmp = X({
            type: t,
            selectors: [["mat-radio-button"]],
            viewQuery: function (n, r) {
              if ((n & 1 && (Be(fm, 5), Be(gm, 7, W)), n & 2)) {
                let o;
                pe((o = fe())) && (r._inputElement = o.first),
                  pe((o = fe())) && (r._rippleTrigger = o.first);
              }
            },
            hostAttrs: [1, "mat-mdc-radio-button"],
            hostVars: 19,
            hostBindings: function (n, r) {
              n & 1 &&
                F("focus", function () {
                  return r._inputElement.nativeElement.focus();
                }),
                n & 2 &&
                  (te("id", r.id)("tabindex", null)("aria-label", null)(
                    "aria-labelledby",
                    null
                  )("aria-describedby", null),
                  ee("mat-primary", r.color === "primary")(
                    "mat-accent",
                    r.color === "accent"
                  )("mat-warn", r.color === "warn")(
                    "mat-mdc-radio-checked",
                    r.checked
                  )("mat-mdc-radio-disabled", r.disabled)(
                    "mat-mdc-radio-disabled-interactive",
                    r.disabledInteractive
                  )("_mat-animation-noopable", r._noopAnimations));
            },
            inputs: {
              id: "id",
              name: "name",
              ariaLabel: [0, "aria-label", "ariaLabel"],
              ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
              ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
              disableRipple: [2, "disableRipple", "disableRipple", K],
              tabIndex: [
                2,
                "tabIndex",
                "tabIndex",
                (e) => (e == null ? 0 : Yt(e)),
              ],
              checked: [2, "checked", "checked", K],
              value: "value",
              labelPosition: "labelPosition",
              disabled: [2, "disabled", "disabled", K],
              required: [2, "required", "required", K],
              color: "color",
              disabledInteractive: [
                2,
                "disabledInteractive",
                "disabledInteractive",
                K,
              ],
            },
            outputs: { change: "change" },
            exportAs: ["matRadioButton"],
            standalone: !0,
            features: [he, J],
            ngContentSelectors: bm,
            decls: 13,
            vars: 17,
            consts: [
              ["formField", ""],
              ["input", ""],
              ["mat-internal-form-field", "", 3, "labelPosition"],
              [1, "mdc-radio"],
              [1, "mat-mdc-radio-touch-target", 3, "click"],
              [
                "type",
                "radio",
                1,
                "mdc-radio__native-control",
                3,
                "change",
                "id",
                "checked",
                "disabled",
                "required",
              ],
              [1, "mdc-radio__background"],
              [1, "mdc-radio__outer-circle"],
              [1, "mdc-radio__inner-circle"],
              [
                "mat-ripple",
                "",
                1,
                "mat-radio-ripple",
                "mat-mdc-focus-indicator",
                3,
                "matRippleTrigger",
                "matRippleDisabled",
                "matRippleCentered",
              ],
              [1, "mat-ripple-element", "mat-radio-persistent-ripple"],
              [1, "mdc-label", 3, "for"],
            ],
            template: function (n, r) {
              if (n & 1) {
                let o = Pe();
                ue(),
                  d(0, "div", 2, 0)(2, "div", 3)(3, "div", 4),
                  F("click", function (c) {
                    return M(o), A(r._onTouchTargetClick(c));
                  }),
                  l(),
                  d(4, "input", 5, 1),
                  F("change", function (c) {
                    return M(o), A(r._onInputInteraction(c));
                  }),
                  l(),
                  d(6, "div", 6),
                  R(7, "div", 7)(8, "div", 8),
                  l(),
                  d(9, "div", 9),
                  R(10, "div", 10),
                  l()(),
                  d(11, "label", 11),
                  se(12),
                  l()();
              }
              n & 2 &&
                (v("labelPosition", r.labelPosition),
                m(2),
                ee("mdc-radio--disabled", r.disabled),
                m(2),
                v("id", r.inputId)("checked", r.checked)(
                  "disabled",
                  r.disabled && !r.disabledInteractive
                )("required", r.required),
                te("name", r.name)("value", r.value)("aria-label", r.ariaLabel)(
                  "aria-labelledby",
                  r.ariaLabelledby
                )("aria-describedby", r.ariaDescribedby)(
                  "aria-disabled",
                  r.disabled && r.disabledInteractive ? "true" : null
                ),
                m(5),
                v("matRippleTrigger", r._rippleTrigger.nativeElement)(
                  "matRippleDisabled",
                  r._isRippleDisabled()
                )("matRippleCentered", !0),
                m(2),
                v("for", r.inputId));
            },
            dependencies: [wi, xn],
            styles: [
              '.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}',
            ],
            encapsulation: 2,
            changeDetection: 0,
          });
        }
      }
      return t;
    })(),
    pc = (() => {
      class t {
        static {
          this.ɵfac = function (n) {
            return new (n || t)();
          };
        }
        static {
          this.ɵmod = T({ type: t });
        }
        static {
          this.ɵinj = S({ imports: [H, Te, yn, On, H] });
        }
      }
      return t;
    })();
  var Di = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [H, Te, fs, H] });
      }
    }
    return t;
  })();
  var fc = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({});
      }
    }
    return t;
  })();
  var gc = (() => {
    class t {
      static {
        this.ɵfac = function (n) {
          return new (n || t)();
        };
      }
      static {
        this.ɵmod = T({ type: t });
      }
      static {
        this.ɵinj = S({ imports: [H, Di, Di, fc, H] });
      }
    }
    return t;
  })();
  var Pn = class t {
    static ɵfac = function (e) {
      return new (e || t)();
    };
    static ɵcmp = X({
      type: t,
      selectors: [["app-footer"]],
      standalone: !0,
      features: [J],
      decls: 30,
      vars: 0,
      consts: [
        ["color", "primary", 1, "footer"],
        [1, "footer-content", 2, "padding-bottom", "20px"],
        [1, "footer-column"],
        [
          "href",
          "https://sr.wikipedia.org/wiki/Motorni_benzin",
          "target",
          "_blank",
        ],
        [
          "href",
          "https://sr.wikipedia.org/wiki/%D0%94%D0%B8%D0%B7%D0%B5%D0%BB-%D0%B3%D0%BE%D1%80%D0%B8%D0%B2%D0%BE",
          "target",
          "_blank",
        ],
        [
          "href",
          "https://sr.wikipedia.org/wiki/Te%C4%8Dni_naftni_gas",
          "target",
          "_blank",
        ],
        [1, "footer-column", 2, "margin-bottom", "114px"],
        [
          "mat-icon-button",
          "",
          "href",
          "mailto:dejan933.culic@gmail.com?subject=Info&body=Zdravo",
          "aria-label",
          "Email",
        ],
        [1, "footer-email"],
        [1, "copyright"],
      ],
      template: function (e, n) {
        e & 1 &&
          (d(0, "footer")(1, "mat-toolbar", 0)(2, "div", 1)(3, "div", 2)(4, "h3"),
          h(5, "Goriva:"),
          l(),
          d(6, "ul")(7, "nav")(8, "li")(9, "a", 3),
          h(10, "Benzin 95"),
          l()(),
          d(11, "li")(12, "a", 3),
          h(13, "Benzin 98"),
          l()(),
          d(14, "li")(15, "a", 4),
          h(16, "Evro dizel"),
          l()(),
          d(17, "li")(18, "a", 5),
          h(19, "Autogas (TNG)"),
          l()()()()(),
          d(20, "div", 6)(21, "h3"),
          h(22, "Kontakt:"),
          l(),
          d(23, "a", 7)(24, "mat-icon"),
          h(25, "email"),
          l(),
          R(26, "span", 8),
          l()()(),
          d(27, "div", 9)(28, "span"),
          h(29, " Copyright \xA9 2024 Visi osnovac."),
          l()()()());
      },
      dependencies: [Tn, Sn, Dn, oc, Di, gc],
      styles: [
        ".footer[_ngcontent-%COMP%]{position:relative;bottom:0;width:100%;height:218px;display:flex;background-color:#faf9fd;color:#121713;z-index:10;top:79px;justify-content:space-around}.footer-content[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;max-width:1200px;padding:0 20px;justify-content:space-between}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:0 10px}.footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#007bff}.footer-column[_ngcontent-%COMP%]{padding:10px;color:#fff;font-size:.9rem;margin-bottom:.45em;color:#121713}.footer-form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:700!important}.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disclosure-closed;padding:0;margin-top:0;color:#007bff}.footer-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:0;color:#121713}.footer-form-field[_ngcontent-%COMP%]{width:200px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{margin-top:10px}.copyright[_ngcontent-%COMP%]{position:absolute;bottom:9px;font-size:1rem}.footer-email[_ngcontent-%COMP%]{position:relative;bottom:6px;margin-left:8px;font-family:Fauna One,Lora,Roboto,Helvetica Neue,sans-serif}@media screen and (max-width: 540px){.footer-email[_ngcontent-%COMP%]{display:none!important}}",
      ],
    });
  };
  function Cm(t, i) {
    if (t & 1) {
      let e = Pe();
      d(0, "div", 1)(1, "div", 2),
        Oi(),
        d(2, "svg", 3),
        R(3, "path", 4)(4, "path", 5),
        l(),
        Pi(),
        d(5, "button", 6),
        F("click", function () {
          M(e);
          let r = E();
          return A(r.scrollToTop());
        }),
        h(6, "\u2B06"),
        l()()();
    }
    if (t & 2) {
      let e = E();
      m(4), te("stroke-dasharray", e.scrollProgress + ", 100");
    }
  }
  var Nn = class t {
    isButtonVisible = !1;
    scrollProgress = 0;
    onScroll() {
      let i =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0,
        e =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
      (this.scrollProgress = (i / e) * 100), (this.isButtonVisible = i > 100);
    }
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    static ɵfac = function (e) {
      return new (e || t)();
    };
    static ɵcmp = X({
      type: t,
      selectors: [["app-back-to-top"]],
      hostBindings: function (e, n) {
        e & 1 &&
          F(
            "scroll",
            function () {
              return n.onScroll();
            },
            !1,
            Vo
          );
      },
      standalone: !0,
      features: [J],
      decls: 1,
      vars: 1,
      consts: [
        ["class", "back-to-top-container", 4, "ngIf"],
        [1, "back-to-top-container"],
        [1, "progress-circle"],
        ["viewBox", "0 0 36 36", 1, "circle"],
        [
          "d",
          `M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831`,
          1,
          "circle-bg",
        ],
        [
          "d",
          `M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831`,
          1,
          "circle-progress",
        ],
        [1, "back-to-top", 3, "click"],
      ],
      template: function (e, n) {
        e & 1 && _e(0, Cm, 7, 1, "div", 0), e & 2 && v("ngIf", n.isButtonVisible);
      },
      dependencies: [Te, Zi],
      styles: [
        ".back-to-top-container[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:60px;height:60px;display:flex;justify-content:center;align-items:center;z-index:1000}.progress-circle[_ngcontent-%COMP%]{position:relative;width:60px;height:60px}.circle[_ngcontent-%COMP%]{transform:rotate(-90deg);width:100%;height:100%}.circle-bg[_ngcontent-%COMP%], .circle-progress[_ngcontent-%COMP%]{fill:none;stroke-width:3.8}.circle-bg[_ngcontent-%COMP%]{stroke:#e6e6e6}.circle-progress[_ngcontent-%COMP%]{stroke:#007bff;stroke-linecap:round;transition:stroke-dasharray .3s ease}.back-to-top[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#007bff;color:#fff;border:none;border-radius:50%;width:40px;height:40px;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:20px;box-shadow:0 4px 6px #0000001a}.back-to-top[_ngcontent-%COMP%]:hover{background-color:#0056b3}",
      ],
    });
  };
  var Ln = class t {
    constructor() {}
    rates = {
      RSD: 1,
      BAM: 0.0166875,
      EUR: 0.0085,
      MKD: 0.52575,
      BGN: 0.01675,
      ALL: 0.8434,
    };
    convert(i, e, n) {
      if (e === n) return i;
      if (!this.rates[e] || !this.rates[n])
        throw new Error(`Conversion rate not found for ${e} or ${n}`);
      return i.map((r) => (r / this.rates[e]) * this.rates[n]);
    }
    static ɵfac = function (e) {
      return new (e || t)();
    };
    static ɵprov = w({ token: t, factory: t.ɵfac, providedIn: "root" });
  };
  var Im = (t) => ({ "background-color": t }),
    B = (t) => ({ color: t });
  function Em(t, i) {
    if ((t & 1 && (d(0, "mat-radio-button", 22), h(1), l()), t & 2)) {
      let e = i.$implicit;
      v("value", e), m(), Ne(e);
    }
  }
  function Mm(t, i) {
    if (t & 1) {
      let e = Pe();
      d(0, "div")(1, "mat-radio-group", 20),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.activeCurrency2, r) || (o.activeCurrency2 = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.onCurrencyChange());
        }),
        _e(2, Em, 2, 2, "mat-radio-button", 21),
        l()();
    }
    if (t & 2) {
      let e = E();
      m(), ye("ngModel", e.activeCurrency2), m(), v("ngForOf", e.currencies);
    }
  }
  function Am(t, i) {
    if (t & 1) {
      let e = Pe();
      d(0, "div", 23)(1, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.selectAll, r) || (o.selectAll = r), A(r);
        }),
        F("change", function (r) {
          M(e);
          let o = E();
          return A(o.toggleAll(r.checked));
        }),
        h(2, " Selektuj sve "),
        l(),
        d(3, "div", 25)(4, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showBih, r) || (o.showBih = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(5, "Bih"),
        l(),
        d(6, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showCro, r) || (o.showCro = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(7, "Hrvatska"),
        l(),
        d(8, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showSer, r) || (o.showSer = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(9, "Srbija"),
        l(),
        d(10, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showSlo, r) || (o.showSlo = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(11, "Slovenija"),
        l(),
        d(12, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showMont, r) || (o.showMont = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(13, "Crna Gora"),
        l(),
        d(14, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showMace, r) || (o.showMace = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(15, "Severna Makedonija"),
        l(),
        d(16, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showGreece, r) || (o.showGreece = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(17, "Gr\u010Dka"),
        l(),
        d(18, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showBulgaria, r) || (o.showBulgaria = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(19, "Bugarska"),
        l(),
        d(20, "mat-checkbox", 24),
        we("ngModelChange", function (r) {
          M(e);
          let o = E();
          return xe(o.showAlba, r) || (o.showAlba = r), A(r);
        }),
        F("change", function () {
          M(e);
          let r = E();
          return A(r.updateSelectAll());
        }),
        h(21, "Albanija"),
        l()()();
    }
    if (t & 2) {
      let e = E();
      m(),
        ye("ngModel", e.selectAll),
        m(3),
        ye("ngModel", e.showBih),
        m(2),
        ye("ngModel", e.showCro),
        m(2),
        ye("ngModel", e.showSer),
        m(2),
        ye("ngModel", e.showSlo),
        m(2),
        ye("ngModel", e.showMont),
        m(2),
        ye("ngModel", e.showMace),
        m(2),
        ye("ngModel", e.showGreece),
        m(2),
        ye("ngModel", e.showBulgaria),
        m(2),
        ye("ngModel", e.showAlba);
    }
  }
  function Dm(t, i) {
    if (
      (t & 1 &&
        (d(0, "div", 26)(1, "div", 27),
        R(2, "div", 28),
        d(3, "div", 29),
        h(4),
        l()()()),
      t & 2)
    ) {
      let e = i.$implicit;
      m(2), v("ngStyle", j(2, Im, e.color)), m(2), Ne(e.name);
    }
  }
  function Sm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 30),
        R(1, "div", 31),
        d(2, "div", 32),
        R(3, "div", 33),
        l(),
        d(4, "mat-card-title", 34),
        h(5),
        l(),
        d(6, "mat-card-content", 35)(7, "div", 36)(8, "label"),
        h(9, "BMB 95:"),
        l(),
        d(10, "span", 37),
        h(11),
        O(12, "number"),
        l()(),
        d(13, "div", 36)(14, "label"),
        h(15, "Diesel:"),
        l(),
        d(16, "span", 37),
        h(17),
        O(18, "number"),
        l()(),
        d(19, "div", 36)(20, "label"),
        h(21, "Gas:"),
        l(),
        d(22, "span", 37),
        h(23),
        O(24, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(5),
        Ne(e.countries2[0].name),
        m(5),
        v("ngStyle", j(19, B, e.getColor("bmb95", e.fuelPrices.Bosnia.bmb95))),
        m(),
        V(
          "",
          P(12, 10, e.convertedAmount[0], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(21, B, e.getColor("diesel", e.fuelPrices.Bosnia.diesel))),
        m(),
        V(
          "",
          P(18, 13, e.convertedAmount[1], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(23, B, e.getColor("gas", e.fuelPrices.Bosnia.gas))),
        m(),
        V(
          "",
          P(24, 16, e.convertedAmount[2], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Tm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 38)(1, "div", 39),
        R(2, "img", 40),
        l(),
        d(3, "mat-card-title"),
        h(4),
        l(),
        d(5, "mat-card-content", 41)(6, "div", 36)(7, "label"),
        h(8, "BMB 95: "),
        l(),
        d(9, "span", 37),
        h(10),
        O(11, "number"),
        l()(),
        d(12, "div", 36)(13, "label"),
        h(14, "Diesel:"),
        l(),
        d(15, "span", 37),
        h(16),
        O(17, "number"),
        l()(),
        d(18, "div", 36)(19, "label"),
        h(20, "Gas:"),
        l(),
        d(21, "span", 37),
        h(22),
        O(23, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(4),
        Ne(e.countries2[1].name),
        m(5),
        v("ngStyle", j(19, B, e.getColor("bmb95", e.fuelPrices.Croatia.bmb95))),
        m(),
        V(
          "",
          P(11, 10, e.convertedAmount[3], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(21, B, e.getColor("diesel", e.fuelPrices.Croatia.diesel))),
        m(),
        V(
          "",
          P(17, 13, e.convertedAmount[4], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(23, B, e.getColor("gas", e.fuelPrices.Croatia.gas))),
        m(),
        V(
          "",
          P(23, 16, e.convertedAmount[5], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Rm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 42)(1, "div", 43),
        R(2, "img", 44),
        l(),
        d(3, "mat-card-title"),
        h(4),
        l(),
        d(5, "mat-card-content", 45)(6, "div", 36)(7, "label"),
        h(8, "BMB 95:"),
        l(),
        d(9, "span", 37),
        h(10),
        O(11, "number"),
        l()(),
        d(12, "div", 36)(13, "label"),
        h(14, "Diesel:"),
        l(),
        d(15, "span", 37),
        h(16),
        O(17, "number"),
        l()(),
        d(18, "div", 36)(19, "label"),
        h(20, "Gas:"),
        l(),
        d(21, "span", 37),
        h(22),
        O(23, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(4),
        Ne(e.countries2[2].name),
        m(5),
        v("ngStyle", j(19, B, e.getColor("bmb95", e.fuelPrices.Serbia.bmb95))),
        m(),
        V(
          "",
          P(11, 10, e.convertedAmount[6], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(21, B, e.getColor("diesel", e.fuelPrices.Serbia.diesel))),
        m(),
        V(
          "",
          P(17, 13, e.convertedAmount[7], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(23, B, e.getColor("gas", e.fuelPrices.Serbia.gas))),
        m(),
        V(
          "",
          P(23, 16, e.convertedAmount[8], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Fm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 46)(1, "div", 47),
        R(2, "img", 48),
        l(),
        d(3, "mat-card-title", 49),
        h(4),
        l(),
        d(5, "mat-card-content", 50)(6, "div", 36)(7, "label"),
        h(8, "BMB 95:"),
        l(),
        d(9, "span", 37),
        h(10),
        O(11, "number"),
        l()(),
        d(12, "div", 36)(13, "label"),
        h(14, "Diesel:"),
        l(),
        d(15, "span", 37),
        h(16),
        O(17, "number"),
        l()(),
        d(18, "div", 36)(19, "label"),
        h(20, "Gas:"),
        l(),
        d(21, "span", 37),
        h(22),
        O(23, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(4),
        Ne(e.countries2[3].name),
        m(5),
        v("ngStyle", j(19, B, e.getColor("bmb95", e.fuelPrices.Slovenia.bmb95))),
        m(),
        V(
          "",
          P(11, 10, e.convertedAmount[9], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v(
          "ngStyle",
          j(21, B, e.getColor("diesel", e.fuelPrices.Slovenia.diesel))
        ),
        m(),
        V(
          "",
          P(17, 13, e.convertedAmount[10], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(23, B, e.getColor("gas", e.fuelPrices.Slovenia.gas))),
        m(),
        V(
          "",
          P(23, 16, e.convertedAmount[11], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Om(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 51)(1, "div", 52),
        R(2, "img", 53),
        l(),
        d(3, "mat-card-title"),
        h(4),
        l(),
        d(5, "mat-card-content", 54)(6, "div", 36)(7, "label"),
        h(8, "BMB 95:"),
        l(),
        d(9, "span", 37),
        h(10),
        O(11, "number"),
        l()(),
        d(12, "div", 36)(13, "label"),
        h(14, "Diesel:"),
        l(),
        d(15, "span", 37),
        h(16),
        O(17, "number"),
        l()(),
        d(18, "div", 36)(19, "label"),
        h(20, "Gas:"),
        l(),
        d(21, "span", 37),
        h(22),
        O(23, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(4),
        Ne(e.countries2[4].name),
        m(5),
        v(
          "ngStyle",
          j(19, B, e.getColor("bmb95", e.fuelPrices.Montenegro.bmb95))
        ),
        m(),
        V(
          "",
          P(11, 10, e.convertedAmount[12], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v(
          "ngStyle",
          j(21, B, e.getColor("diesel", e.fuelPrices.Montenegro.diesel))
        ),
        m(),
        V(
          "",
          P(17, 13, e.convertedAmount[13], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(23, B, e.getColor("gas", e.fuelPrices.Montenegro.gas))),
        m(),
        V(
          "",
          P(23, 16, e.convertedAmount[14], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Pm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 55)(1, "div", 56),
        R(2, "div", 57)(3, "div", 57)(4, "div", 57),
        l(),
        R(5, "div", 58)(6, "div", 59),
        d(7, "div", 60)(8, "mat-card-title", 61),
        h(9, "Severna Makedonija"),
        l(),
        d(10, "mat-card-content", 62)(11, "div", 36)(12, "label"),
        h(13, "BMB 95:"),
        l(),
        d(14, "span", 37),
        h(15),
        O(16, "number"),
        l()(),
        d(17, "div", 36)(18, "label"),
        h(19, "Diesel:"),
        l(),
        d(20, "span", 37),
        h(21),
        O(22, "number"),
        l()(),
        d(23, "div", 36)(24, "label"),
        h(25, "Gas:"),
        l(),
        d(26, "span", 37),
        h(27),
        O(28, "number"),
        l()()()()()),
      t & 2)
    ) {
      let e = E();
      m(14),
        v(
          "ngStyle",
          j(18, B, e.getColor("bmb95", e.fuelPrices.North_Macedonia.bmb95))
        ),
        m(),
        V(
          "",
          P(16, 9, e.convertedAmount[15], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v(
          "ngStyle",
          j(20, B, e.getColor("diesel", e.fuelPrices.North_Macedonia.diesel))
        ),
        m(),
        V(
          "",
          P(22, 12, e.convertedAmount[16], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v(
          "ngStyle",
          j(22, B, e.getColor("gas", e.fuelPrices.North_Macedonia.gas))
        ),
        m(),
        V(
          "",
          P(28, 15, e.convertedAmount[17], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Nm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 63)(1, "div", 64),
        R(2, "div")(3, "div")(4, "div")(5, "div"),
        l(),
        d(6, "div", 60)(7, "mat-card-title", 65),
        h(8, "Gr\u010Dka"),
        l(),
        d(9, "mat-card-content", 66)(10, "div", 36)(11, "label"),
        h(12, "BMB 95:"),
        l(),
        d(13, "span", 37),
        h(14),
        O(15, "number"),
        l()(),
        d(16, "div", 36)(17, "label"),
        h(18, "Diesel:"),
        l(),
        d(19, "span", 37),
        h(20),
        O(21, "number"),
        l()(),
        d(22, "div", 36)(23, "label"),
        h(24, "Gas:"),
        l(),
        d(25, "span", 37),
        h(26),
        O(27, "number"),
        l()()()()()),
      t & 2)
    ) {
      let e = E();
      m(13),
        v("ngStyle", j(18, B, e.getColor("bmb95", e.fuelPrices.Greece.bmb95))),
        m(),
        V(
          "",
          P(15, 9, e.convertedAmount[18], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(20, B, e.getColor("diesel", e.fuelPrices.Greece.diesel))),
        m(),
        V(
          "",
          P(21, 12, e.convertedAmount[19], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(22, B, e.getColor("gas", e.fuelPrices.Greece.gas))),
        m(),
        V(
          "",
          P(27, 15, e.convertedAmount[20], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function Lm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 67)(1, "mat-card-title", 68),
        h(2, "Bugarska"),
        l(),
        d(3, "mat-card-content", 69)(4, "div", 36)(5, "label"),
        h(6, "BMB 95: "),
        l(),
        d(7, "span", 37),
        h(8),
        O(9, "number"),
        l()(),
        d(10, "div", 36)(11, "label"),
        h(12, "Diesel:"),
        l(),
        d(13, "span", 37),
        h(14),
        O(15, "number"),
        l()(),
        d(16, "div", 36)(17, "label"),
        h(18, "Gas:"),
        l(),
        d(19, "span", 37),
        h(20),
        O(21, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(7),
        v("ngStyle", j(18, B, e.getColor("bmb95", e.fuelPrices.Bulgaria.bmb95))),
        m(),
        V(
          "",
          P(9, 9, e.convertedAmount[21], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v(
          "ngStyle",
          j(20, B, e.getColor("diesel", e.fuelPrices.Bulgaria.diesel))
        ),
        m(),
        V(
          "",
          P(15, 12, e.convertedAmount[22], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(22, B, e.getColor("gas", e.fuelPrices.Bulgaria.gas))),
        m(),
        V(
          "",
          P(21, 15, e.convertedAmount[23], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  function jm(t, i) {
    if (
      (t & 1 &&
        (d(0, "mat-card", 70)(1, "div", 71),
        R(2, "img", 72),
        l(),
        d(3, "mat-card-title"),
        h(4, "Albanija"),
        l(),
        d(5, "mat-card-content", 73)(6, "div", 36)(7, "label"),
        h(8, "BMB 95:"),
        l(),
        d(9, "span", 37),
        h(10),
        O(11, "number"),
        l()(),
        d(12, "div", 36)(13, "label"),
        h(14, "Diesel:"),
        l(),
        d(15, "span", 37),
        h(16),
        O(17, "number"),
        l()(),
        d(18, "div", 36)(19, "label"),
        h(20, "Gas:"),
        l(),
        d(21, "span", 37),
        h(22),
        O(23, "number"),
        l()()()()),
      t & 2)
    ) {
      let e = E();
      m(9),
        v("ngStyle", j(18, B, e.getColor("bmb95", e.fuelPrices.Albania.bmb95))),
        m(),
        V(
          "",
          P(11, 9, e.convertedAmount[24], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(20, B, e.getColor("diesel", e.fuelPrices.Albania.diesel))),
        m(),
        V(
          "",
          P(17, 12, e.convertedAmount[25], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        ),
        m(5),
        v("ngStyle", j(22, B, e.getColor("gas", e.fuelPrices.Albania.gas))),
        m(),
        V(
          "",
          P(23, 15, e.convertedAmount[26], "1.2-2"),
          " ",
          e.activeCurrency2 || "RSD",
          ""
        );
    }
  }
  var jn = class t {
    constructor(i, e) {
      this.currencyService = i;
      this.platformId = e;
      (this.updated = new Date(2024, 11, 2)),
        (this.ekavica = "Cene"),
        (this.ijekavica = "Cijene");
    }
    title = "fuel-app";
    selectAll = !0;
    showBih = !1;
    showCro = !1;
    showSer = !1;
    showSlo = !1;
    showMont = !1;
    showMace = !1;
    showGreece = !1;
    showBulgaria = !1;
    showAlba = !1;
    fuelPrices = {
      Bosnia: { bmb95: 143.966, diesel: 145.161, gas: 77.81 },
      Croatia: { bmb95: 177.643, diesel: 177.643, gas: 98.23 },
      Serbia: { bmb95: 181, diesel: 196.33, gas: 104.56 },
      Slovenia: { bmb95: 173.43, diesel: 182.78, gas: 109.81 },
      Montenegro: { bmb95: 166.174, diesel: 156.812, gas: 77.2 },
      North_Macedonia: { bmb95: 146.408, diesel: 137.02, gas: 87.54 },
      Greece: { bmb95: 208.654, diesel: 181.26, gas: 111.21 },
      Bulgaria: { bmb95: 147.951, diesel: 152.05, gas: 76.32 },
      Albania: { bmb95: 206.424, diesel: 206.424, gas: 68.012 },
    };
    countries2 = [
      { name: "Bih", selected: !1, class: "bosnia" },
      { name: "Hrvatska", selected: !1, class: "croatia" },
      { name: "Srbija", selected: !1, class: "serbia" },
      { name: "Slovenija", selected: !1, class: "slovenia" },
      { name: "Crna Gora", selected: !1, class: "montenegro" },
      { name: "Severna Makedonija", selected: !1, class: "north_macedonia" },
      { name: "Gr\u010Dka", selected: !1, class: "north_macedonia" },
      { name: "Bugarska", selected: !1, class: "north_macedonia" },
      { name: "Albanija", selected: !1, class: "albania" },
    ];
    legends = [
      { name: "Najeftinije", color: "#4CAF50" },
      { name: "Najskuplje", color: "red" },
    ];
    filteredCountries = [...this.countries2];
    selectedCurrency = { RSD: !1, BAM: !1, EUR: !1, MKD: !1, BGN: !1, ALL: !1 };
    activeCurrency2 = "RSD";
    isActiveCurrency;
    currencies = ["RSD", "BAM", "EUR", "MKD", "BGN", "ALL"];
    amounts = [
      this.fuelPrices.Bosnia.bmb95,
      this.fuelPrices.Bosnia.diesel,
      this.fuelPrices.Bosnia.gas,
      this.fuelPrices.Croatia.bmb95,
      this.fuelPrices.Croatia.diesel,
      this.fuelPrices.Croatia.gas,
      this.fuelPrices.Serbia.bmb95,
      this.fuelPrices.Serbia.diesel,
      this.fuelPrices.Serbia.gas,
      this.fuelPrices.Slovenia.bmb95,
      this.fuelPrices.Slovenia.diesel,
      this.fuelPrices.Slovenia.gas,
      this.fuelPrices.Montenegro.bmb95,
      this.fuelPrices.Montenegro.diesel,
      this.fuelPrices.Montenegro.gas,
      this.fuelPrices.North_Macedonia.bmb95,
      this.fuelPrices.North_Macedonia.diesel,
      this.fuelPrices.North_Macedonia.gas,
      this.fuelPrices.Greece.bmb95,
      this.fuelPrices.Greece.diesel,
      this.fuelPrices.Greece.gas,
      this.fuelPrices.Bulgaria.bmb95,
      this.fuelPrices.Bulgaria.diesel,
      this.fuelPrices.Bulgaria.gas,
      this.fuelPrices.Albania.bmb95,
      this.fuelPrices.Albania.diesel,
      this.fuelPrices.Albania.gas,
    ];
    convertedAmount = [];
    fuelTypes = ["bmb95", "diesel", "gas"];
    countries = Object.keys(this.fuelPrices);
    minMaxValues = {};
    selections;
    loading = !0;
    updated;
    ekavica;
    ijekavica;
    ngOnInit() {
      this.calculateMinMax(),
        this.getselectedCurrencies(),
        this.getSelectedCountries();
    }
    ngAfterViewInit() {
      this.getselectedCurrencies(), this.getSelectedCountries();
    }
    getUserLocation() {
      navigator.geolocation
        ? navigator.geolocation.getCurrentPosition(
            (i) => {
              console.log(i);
              let e = i.coords.latitude;
              console.log(e);
              let n = i.coords.longitude;
              console.log(n), this.getCountryFromCoordinates(e, n);
            },
            (i) => {
              console.error("Error getting location", i);
            }
          )
        : console.error("Geolocation is not supported by this browser.");
    }
    getCountryFromCoordinates(i, e) {
      return i >= 42 && i <= 46 && e >= 15 && e <= 19
        ? this.ijekavica
        : i >= 44 && i <= 46 && e >= 19 && e <= 23
        ? this.ekavica
        : "Cena";
    }
    getSelectedCountries() {
      if (Ke(this.platformId)) {
        let i = localStorage.getItem("selections");
        if (i) {
          let e = JSON.parse(i);
          (this.showBih = e.showBih ?? !1),
            (this.showCro = e.showCro ?? !1),
            (this.showSer = e.showSer ?? !1),
            (this.showSlo = e.showSlo ?? !1),
            (this.showMont = e.showMont ?? !1),
            (this.showMace = e.showMace ?? !1),
            (this.showGreece = e.showGreece ?? !1),
            (this.showBulgaria = e.showBulgaria ?? !1),
            (this.showAlba = e.showAlba ?? !1),
            this.updateSelectAll();
        } else this.toggleAll(!0);
        this.loading = !1;
      }
    }
    getselectedCurrencies() {
      if (Ke(this.platformId)) {
        let i = localStorage.getItem("selectedCurrency");
        i && this.currencies.includes(i)
          ? (this.activeCurrency2 = i)
          : (this.activeCurrency2 = "RSD"),
          this.onCurrencyChange(),
          (this.loading = !1);
      }
    }
    calculateMinMax() {
      this.fuelTypes.forEach((i) => {
        let e = this.countries.map((n) => this.fuelPrices[n][i]);
        this.minMaxValues[i] = { min: Math.min(...e), max: Math.max(...e) };
      });
    }
    getColor(i, e) {
      return e === this.minMaxValues[i].max
        ? "red"
        : e === this.minMaxValues[i].min
        ? "#4CAF50"
        : "white";
    }
    onCurrencyChange() {
      Ke(this.platformId) &&
        localStorage.setItem("selectedCurrency", this.activeCurrency2),
        (this.convertedAmount = this.currencyService.convert(
          this.amounts,
          "RSD",
          this.activeCurrency2
        ));
    }
    isCheckboxDisabled(i) {
      return this.activeCurrency2 !== null && this.activeCurrency2 !== i;
    }
    toggleAll(i) {
      (this.selectAll = i),
        (this.showBih = i),
        (this.showCro = i),
        (this.showSer = i),
        (this.showSlo = i),
        (this.showMont = i),
        (this.showMace = i),
        (this.showGreece = i),
        (this.showBulgaria = i),
        (this.showAlba = i),
        this.saveSelections();
    }
    updateSelectAll() {
      let i =
        this.showBih &&
        this.showCro &&
        this.showSer &&
        this.showSlo &&
        this.showMont &&
        this.showMace &&
        this.showGreece &&
        this.showBulgaria &&
        this.showAlba;
      (this.selectAll = i), Ke(this.platformId) && this.saveSelections();
    }
    saveSelections() {
      let i = {
        showBih: this.showBih,
        showCro: this.showCro,
        showSer: this.showSer,
        showSlo: this.showSlo,
        showMont: this.showMont,
        showMace: this.showMace,
        showGreece: this.showGreece,
        showBulgaria: this.showBulgaria,
        showAlba: this.showAlba,
      };
      Ke(this.platformId) &&
        localStorage.setItem("selections", JSON.stringify(i));
    }
    static ɵfac = function (e) {
      return new (e || t)(y(Ln), y(De));
    };
    static ɵcmp = X({
      type: t,
      selectors: [["app-root"]],
      standalone: !0,
      features: [J],
      decls: 43,
      vars: 20,
      consts: [
        [1, "example-spacer"],
        [4, "ngIf"],
        [2, "margin-left", "20px", "font-weight", "300", "font-size", "2.3rem"],
        ["class", "filter-container", 4, "ngIf"],
        [1, "legend-wrapper"],
        ["style", "margin: 20px 15px 0px 15px;", 4, "ngFor", "ngForOf"],
        [1, "info-wrapper"],
        [1, "flag-cards"],
        [1, "row"],
        ["class", "flag-card flag bosnia", 4, "ngIf"],
        ["class", "flag-card flag croatia", 4, "ngIf"],
        ["class", "flag-card flag serbia", 4, "ngIf"],
        ["class", "flag-card flag slovenia", 4, "ngIf"],
        ["class", "flag-card flag montenegro", 4, "ngIf"],
        [
          "class",
          "flag-card flag north_macedonia",
          "style",
          "padding: 0;",
          4,
          "ngIf",
        ],
        ["class", "flag-card flag greece", "style", "padding: 0;", 4, "ngIf"],
        ["class", "flag-card flag bulgaria", 4, "ngIf"],
        ["class", "flag-card flag albania", 4, "ngIf"],
        [1, "disclaimer-wrapper"],
        [2, "margin", "0"],
        [1, "radio-currencies", 3, "ngModelChange", "change", "ngModel"],
        [3, "value", 4, "ngFor", "ngForOf"],
        [3, "value"],
        [1, "filter-container"],
        [3, "ngModelChange", "change", "ngModel"],
        [1, "checkboxes"],
        [2, "margin", "20px 15px 0px 15px"],
        [1, "legend-container"],
        [1, "legend-color", 3, "ngStyle"],
        [1, "legend-text"],
        [1, "flag-card", "flag", "bosnia"],
        [1, "bosnia__triangle"],
        [1, "bosnia__star__wrapper"],
        [1, "star"],
        [2, "z-index", "1", "margin-right", "15px"],
        [1, "each-card", 2, "margin-left", "35px"],
        [1, "fuel-row"],
        [3, "ngStyle"],
        [1, "flag-card", "flag", "croatia"],
        [1, "croatia__logo"],
        [
          "src",
          "https://imgur.com/QnZcQaW.png",
          "alt",
          "",
          "width",
          "75",
          "height",
          "115",
        ],
        [1, "each-card", 2, "margin-left", "69px"],
        [1, "flag-card", "flag", "serbia"],
        [1, "img-serbia"],
        ["src", "https://imgur.com/7PtlQSE.png", "width", "75", "alt", ""],
        [1, "each-card", 2, "margin-left", "71px"],
        [1, "flag-card", "flag", "slovenia"],
        [1, "img-slovenia"],
        ["src", "https://imgur.com/ZDBGTBj.png", "width", "75", "alt", ""],
        [2, "color", "red"],
        [1, "each-card", 2, "margin-left", "70px"],
        [1, "flag-card", "flag", "montenegro"],
        [1, "img-montenegro"],
        [
          "src",
          "https://imgur.com/ioH7KHX.png",
          "height",
          "115",
          "width",
          "75",
          "alt",
          "",
        ],
        [1, "each-card", 2, "margin-left", "54px"],
        [1, "flag-card", "flag", "north_macedonia", 2, "padding", "0"],
        [1, "left_shapes"],
        [1, "shape"],
        [1, "top__shape"],
        [1, "bottom__shape"],
        [1, "container-north-macedonia"],
        [2, "margin-left", "48px"],
        [1, "each-card", 2, "margin-left", "46px"],
        [1, "flag-card", "flag", "greece", 2, "padding", "0"],
        [1, "greece__top_left"],
        [
          2,
          "z-index",
          "1",
          "color",
          "red",
          "margin-left",
          "92px",
          "position",
          "relative",
          "top",
          "4px",
        ],
        [1, "each-card", 2, "margin-left", "48px"],
        [1, "flag-card", "flag", "bulgaria"],
        [2, "color", "red", "margin-right", "10px"],
        [1, "each-card", 2, "margin-left", "31px"],
        [1, "flag-card", "flag", "albania"],
        [1, "albania__logo"],
        [
          "src",
          "https://imgur.com/ddXXb8M.png",
          "width",
          "80",
          "height",
          "115",
          "alt",
          "",
        ],
        [1, "each-card", 2, "margin-left", "74px"],
      ],
      template: function (e, n) {
        e & 1 &&
          (d(0, "main")(1, "header")(2, "mat-toolbar")(3, "h1"),
          h(4, "Cijene goriva"),
          l(),
          R(5, "span", 0),
          _e(6, Mm, 3, 2, "div", 1),
          l()(),
          d(7, "section")(8, "h1", 2),
          h(9, "Najpristupa\u010Dnije cijene goriva u regionu"),
          l(),
          _e(10, Am, 22, 10, "div", 3),
          l(),
          d(11, "section")(12, "div", 4),
          _e(13, Dm, 5, 4, "div", 5),
          l()(),
          d(14, "section")(15, "div", 6)(16, "i"),
          h(17, "Cijene zadnji put a\u017Eurirane "),
          d(18, "time"),
          O(19, "date"),
          h(20),
          O(21, "date"),
          l()()()(),
          d(22, "section")(23, "div", 7)(24, "div", 8),
          _e(25, Sm, 25, 25, "mat-card", 9)(26, Tm, 24, 25, "mat-card", 10)(
            27,
            Rm,
            24,
            25,
            "mat-card",
            11
          ),
          l(),
          d(28, "div", 8),
          _e(29, Fm, 24, 25, "mat-card", 12)(30, Om, 24, 25, "mat-card", 13)(
            31,
            Pm,
            29,
            24,
            "mat-card",
            14
          ),
          l(),
          d(32, "div", 8),
          _e(33, Nm, 28, 24, "mat-card", 15)(34, Lm, 22, 24, "mat-card", 16)(
            35,
            jm,
            24,
            24,
            "mat-card",
            17
          ),
          l()()(),
          d(36, "section")(37, "div", 18)(38, "p", 19),
          h(
            39,
            "Cijene su informativnog karaktera i mogu da variraju od pumpe od pumpe."
          ),
          l()()(),
          d(40, "section"),
          R(41, "app-back-to-top"),
          l(),
          R(42, "app-footer"),
          l()),
          e & 2 &&
            (m(6),
            v("ngIf", !n.loading),
            m(4),
            v("ngIf", !n.loading),
            m(3),
            v("ngForOf", n.legends),
            m(5),
            te("datetime", P(19, 14, n.updated, "dd.MM.yyyy")),
            m(2),
            Ne(P(21, 17, n.updated, "dd.MM.yyyy")),
            m(5),
            v("ngIf", n.showBih),
            m(),
            v("ngIf", n.showCro),
            m(),
            v("ngIf", n.showSer),
            m(2),
            v("ngIf", n.showSlo),
            m(),
            v("ngIf", n.showMont),
            m(),
            v("ngIf", n.showMace),
            m(2),
            v("ngIf", n.showGreece),
            m(),
            v("ngIf", n.showBulgaria),
            m(),
            v("ngIf", n.showAlba));
      },
      dependencies: [
        Fs,
        Ss,
        Rs,
        Ts,
        Js,
        Ks,
        bo,
        Te,
        Ko,
        Zi,
        Qo,
        Jo,
        Xo,
        Tn,
        Sn,
        ac,
        Dn,
        lc,
        Rn,
        pc,
        _o,
        On,
        Pn,
        Nn,
      ],
      styles: [
        '@charset "UTF-8";.flag-cards[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;position:relative;top:37px;flex-direction:column}.flag-card[_ngcontent-%COMP%]{width:200px;padding:16px;color:#fff;font-weight:700;text-align:center;font-size:19px}.bosnia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#002f6c 50%,#ff0 50%);position:relative;color:#fff}.bosnia-flag[_ngcontent-%COMP%]:before{content:"\\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605";font-size:10px;color:#fff;position:absolute;top:26%;left:26%;transform:rotate(0);white-space:nowrap}.bosnia-flag[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;width:40px;height:100%;background-color:#ff0;clip-path:polygon(100% 0,0 100%,100% 100%)}.croatia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,red 33%,#fff 33% 66%,#00f 66%)}.serbia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,red 33%,#00f 33% 66%,#fff 66%)}.highest-price[_ngcontent-%COMP%]{color:red;font-weight:700}.lowest-price[_ngcontent-%COMP%]{color:green;font-weight:700}.each-card[_ngcontent-%COMP%]{background-color:#000;border-radius:10px;width:178px;z-index:1;margin-left:77px;margin-top:8px}.fuel-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;margin-top:14px;width:190px}h3[_ngcontent-%COMP%]{position:absolute;text-align:center;top:20px}.flag[_ngcontent-%COMP%]{position:relative;width:300px;height:200px;box-shadow:0 0 1px #00000080;overflow:hidden}.bosnia[_ngcontent-%COMP%]{background-color:#001e96}.bosnia__triangle[_ngcontent-%COMP%]{position:absolute;top:-72%;left:35%;border:142px solid transparent;border-left-color:#ffcc01;transform:rotate(-45deg)}.bosnia__star__wrapper[_ngcontent-%COMP%]{filter:drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff)}.bosnia__star__wrapper[_ngcontent-%COMP%] > .star[_ngcontent-%COMP%]{width:35px;height:35px;margin:-20px 0;background-color:#fff;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}.croatia[_ngcontent-%COMP%]{background:linear-gradient(red 33%,#fff 33% 67%,#171796 0)}.croatia__logo[_ngcontent-%COMP%]{position:absolute;margin:auto;left:6px;top:48px}.serbia[_ngcontent-%COMP%]{background:linear-gradient(#c83339 33%,#033e76 33% 66%,#fff 0)}.serbia[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:70px;top:17px}.img-serbia[_ngcontent-%COMP%]{position:absolute;left:8px;top:17px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.example-margin[_ngcontent-%COMP%]{margin:0 10px}.example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.checkbox-group[_ngcontent-%COMP%]{display:flex;gap:10px;margin-left:20px}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.slovenia[_ngcontent-%COMP%]{background:linear-gradient(#fff 33%,#00f 33% 66%,red 0)}.slovenia[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:19%;top:17%}.img-slovenia[_ngcontent-%COMP%]{position:absolute;left:2%;top:17%}.montenegro[_ngcontent-%COMP%]{border:10px solid #e9b528;background-color:#e30613;display:grid;place-items:center}.img-montenegro[_ngcontent-%COMP%]{position:absolute;left:0%;top:17%}.north_macedonia[_ngcontent-%COMP%]{background:#d91a21}.north_macedonia[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#f8e92e;inset:0;margin:auto;width:50px;aspect-ratio:1;border-radius:1in;border:6px solid #d91a21;z-index:1}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:100%;width:50%;-webkit-box-reflect:right 0}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .top__shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{background-color:#f8e92e;width:100%;height:40px;clip-path:polygon(0 0,100% 45%,100% 55%,0% 100%)}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%]:nth-child(1){transform:scaleX(1.5) rotate(50deg)}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%]:nth-child(3){transform:scaleX(1.5) rotate(-50deg)}.north_macedonia[_ngcontent-%COMP%] > .top__shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{position:absolute;margin:0 auto;width:25%;height:50px;rotate:90deg;left:29%;top:11px;transform:translatey(-50%)}.north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{transform:scaleX(-1);top:70%;left:38%}.container-north-macedonia[_ngcontent-%COMP%]{z-index:1;position:absolute;top:17px;display:flex;flex-direction:column}.greece[_ngcontent-%COMP%]{background:repeating-linear-gradient(#055eb2,#055eb2 11.11%,#fff 11.11% 22.22%)}.greece__top_left[_ngcontent-%COMP%]{width:138px;height:111.33px;background-color:#fff;display:grid;grid-template-columns:1fr 1fr;gap:25px}.greece__top_left[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:#055eb2}.bulgaria[_ngcontent-%COMP%]{background:linear-gradient(#fff 33%,#00956e 33% 66%,#d52612 0)}.albania[_ngcontent-%COMP%]{background-color:#da2b26}.albania__logo[_ngcontent-%COMP%]{position:absolute;width:140px;margin:auto;right:183px;top:59px}.filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;margin:20px 10px}.checkboxes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px}.radio-currencies[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin:10px;padding-top:5px}@media (max-width: 599px){.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:75px}}@media (max-width: 489px){.radio-currencies[_ngcontent-%COMP%]{width:222px}}@media screen and (min-width: 599px){.filter-container[_ngcontent-%COMP%]{display:none!important}}.legend-container[_ngcontent-%COMP%]{padding:.5rem}.legend-container[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute;border-radius:10px}.legend-container[_ngcontent-%COMP%]   .legend-text[_ngcontent-%COMP%]{position:relative;left:1rem;padding-left:.5rem;height:1.25rem;line-height:1.25rem;font-size:.9rem}.legend-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center}.info-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;color:#433c3c}.disclaimer-wrapper[_ngcontent-%COMP%]{margin-top:67px;font-style:italic;display:flex;justify-content:center;text-align:center;color:#433c3c}',
      ],
    });
  };
  Ca(jn, ms).catch((t) => console.error(t));
  