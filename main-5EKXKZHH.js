import {
  $ as pi,
  $a as Ya,
  $b as It,
  A as Nr,
  Aa as Le,
  Ab as De,
  Ac as ms,
  B as jr,
  Ba as gi,
  Bb as Te,
  Bc as wi,
  C as he,
  Ca as Ur,
  Cb as Re,
  Cc as Fn,
  D as Da,
  Da as Vt,
  Db as Be,
  E as Ta,
  Ea as Bt,
  Eb as ne,
  F as rt,
  Fa as Va,
  Fb as $,
  G as ot,
  Ga as Ba,
  Gb as f,
  H as Lr,
  Ha as za,
  Hb as w,
  Hc as hs,
  I as Ra,
  Ia as Ua,
  Ib as U,
  Ic as On,
  J as Fa,
  Ja as Ha,
  Jb as Cn,
  K as Oa,
  Ka as Ga,
  Kb as Xa,
  Kc as ps,
  L as Vr,
  La as $a,
  Lb as wn,
  M as un,
  Ma as Ie,
  Mb as In,
  N as mn,
  Na as qa,
  Nb as Gr,
  O as _e,
  Oa as Wa,
  Ob as kn,
  P as at,
  Pa as bi,
  Pb as En,
  Pc as fs,
  Q as re,
  Qa as l,
  Qb as yi,
  R as W,
  Ra as _,
  Rb as Ja,
  S as st,
  Sa as bn,
  Sb as $r,
  T as yt,
  Ta as Za,
  Tb as es,
  U as y,
  Ua as zt,
  Ub as ge,
  V as T,
  Va as vn,
  Vb as ts,
  W as Pa,
  Wa as Ka,
  Wb as is,
  X as E,
  Xa as vi,
  Xb as ns,
  Y as Br,
  Ya as _n,
  Yb as oe,
  Z as b,
  Za as Ct,
  Zb as xi,
  _ as x,
  _a as ke,
  _b as Mn,
  a as g,
  aa as te,
  ab as Qa,
  ac as lt,
  b as q,
  ba as R,
  bb as pe,
  bc as rs,
  c as Ma,
  ca as J,
  cb as yn,
  cc as os,
  d as Fr,
  da as hn,
  db as ce,
  dc as H,
  e as ui,
  ea as Ue,
  eb as C,
  ec as An,
  f as Aa,
  fa as zr,
  fb as xn,
  fc as Sn,
  g as mi,
  ga as Na,
  gb as ae,
  gc as Dn,
  h as Or,
  ha as jt,
  hb as Xe,
  hc as Ht,
  i as Pr,
  ia as je,
  ib as u,
  ic as as,
  j as ue,
  ja as He,
  jb as m,
  jc as ss,
  k as me,
  ka as j,
  kb as V,
  kc as cs,
  l as it,
  la as L,
  lb as $e,
  lc as we,
  m as ve,
  ma as pn,
  mb as _i,
  mc as ls,
  n as I,
  na as fn,
  nb as z,
  nc as dt,
  o as vt,
  oa as Ge,
  ob as D,
  oc as Ci,
  p as Ye,
  pa as ct,
  pb as fe,
  pc as Tn,
  q as Sa,
  qa as Lt,
  qb as le,
  qc as ds,
  r as M,
  ra as gn,
  rb as Ut,
  rc as qr,
  s as hi,
  sa as ie,
  sb as Ve,
  sc as Rn,
  t as Ae,
  ta as B,
  tb as ye,
  tc as us,
  u as _t,
  ua as xt,
  ub as xe,
  uc as Wr,
  v as Pt,
  va as Z,
  vb as Hr,
  w as Nt,
  wa as ja,
  wb as p,
  x as Ne,
  xa as fi,
  xb as k,
  y as nt,
  ya as La,
  yb as wt,
  z as Qe,
  za as Se,
  zb as K,
} from "./chunk-66EV5GFL.js";
var ki = class {},
  Ei = class {},
  qe = class t {
    constructor(n) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        n
          ? typeof n == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  n
                    .split(
                      `
`
                    )
                    .forEach((e) => {
                      let i = e.indexOf(":");
                      if (i > 0) {
                        let r = e.slice(0, i),
                          o = r.toLowerCase(),
                          a = e.slice(i + 1).trim();
                        this.maybeSetNormalizedName(r, o),
                          this.headers.has(o)
                            ? this.headers.get(o).push(a)
                            : this.headers.set(o, [a]);
                      }
                    });
              })
            : typeof Headers < "u" && n instanceof Headers
            ? ((this.headers = new Map()),
              n.forEach((e, i) => {
                this.setHeaderEntries(i, e);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(n).forEach(([e, i]) => {
                    this.setHeaderEntries(e, i);
                  });
              })
          : (this.headers = new Map());
    }
    has(n) {
      return this.init(), this.headers.has(n.toLowerCase());
    }
    get(n) {
      this.init();
      let e = this.headers.get(n.toLowerCase());
      return e && e.length > 0 ? e[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(n) {
      return this.init(), this.headers.get(n.toLowerCase()) || null;
    }
    append(n, e) {
      return this.clone({ name: n, value: e, op: "a" });
    }
    set(n, e) {
      return this.clone({ name: n, value: e, op: "s" });
    }
    delete(n, e) {
      return this.clone({ name: n, value: e, op: "d" });
    }
    maybeSetNormalizedName(n, e) {
      this.normalizedNames.has(e) || this.normalizedNames.set(e, n);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof t
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((n) => this.applyUpdate(n)),
          (this.lazyUpdate = null)));
    }
    copyFrom(n) {
      n.init(),
        Array.from(n.headers.keys()).forEach((e) => {
          this.headers.set(e, n.headers.get(e)),
            this.normalizedNames.set(e, n.normalizedNames.get(e));
        });
    }
    clone(n) {
      let e = new t();
      return (
        (e.lazyInit =
          this.lazyInit && this.lazyInit instanceof t ? this.lazyInit : this),
        (e.lazyUpdate = (this.lazyUpdate || []).concat([n])),
        e
      );
    }
    applyUpdate(n) {
      let e = n.name.toLowerCase();
      switch (n.op) {
        case "a":
        case "s":
          let i = n.value;
          if ((typeof i == "string" && (i = [i]), i.length === 0)) return;
          this.maybeSetNormalizedName(n.name, e);
          let r = (n.op === "a" ? this.headers.get(e) : void 0) || [];
          r.push(...i), this.headers.set(e, r);
          break;
        case "d":
          let o = n.value;
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
    setHeaderEntries(n, e) {
      let i = (Array.isArray(e) ? e : [e]).map((o) => o.toString()),
        r = n.toLowerCase();
      this.headers.set(r, i), this.maybeSetNormalizedName(n, r);
    }
    forEach(n) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((e) =>
          n(this.normalizedNames.get(e), this.headers.get(e))
        );
    }
  };
var Kr = class {
  encodeKey(n) {
    return gs(n);
  }
  encodeValue(n) {
    return gs(n);
  }
  decodeKey(n) {
    return decodeURIComponent(n);
  }
  decodeValue(n) {
    return decodeURIComponent(n);
  }
};
function id(t, n) {
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
                ? [n.decodeKey(r), ""]
                : [n.decodeKey(r.slice(0, o)), n.decodeValue(r.slice(o + 1))],
            s = e.get(a) || [];
          s.push(c), e.set(a, s);
        }),
    e
  );
}
var nd = /%(\d[a-f0-9])/gi,
  rd = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function gs(t) {
  return encodeURIComponent(t).replace(nd, (n, e) => rd[e] ?? n);
}
function Pn(t) {
  return `${t}`;
}
var mt = class t {
  constructor(n = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = n.encoder || new Kr()),
      n.fromString)
    ) {
      if (n.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = id(n.fromString, this.encoder);
    } else
      n.fromObject
        ? ((this.map = new Map()),
          Object.keys(n.fromObject).forEach((e) => {
            let i = n.fromObject[e],
              r = Array.isArray(i) ? i.map(Pn) : [Pn(i)];
            this.map.set(e, r);
          }))
        : (this.map = null);
  }
  has(n) {
    return this.init(), this.map.has(n);
  }
  get(n) {
    this.init();
    let e = this.map.get(n);
    return e ? e[0] : null;
  }
  getAll(n) {
    return this.init(), this.map.get(n) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(n, e) {
    return this.clone({ param: n, value: e, op: "a" });
  }
  appendAll(n) {
    let e = [];
    return (
      Object.keys(n).forEach((i) => {
        let r = n[i];
        Array.isArray(r)
          ? r.forEach((o) => {
              e.push({ param: i, value: o, op: "a" });
            })
          : e.push({ param: i, value: r, op: "a" });
      }),
      this.clone(e)
    );
  }
  set(n, e) {
    return this.clone({ param: n, value: e, op: "s" });
  }
  delete(n, e) {
    return this.clone({ param: n, value: e, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((n) => {
          let e = this.encoder.encodeKey(n);
          return this.map
            .get(n)
            .map((i) => e + "=" + this.encoder.encodeValue(i))
            .join("&");
        })
        .filter((n) => n !== "")
        .join("&")
    );
  }
  clone(n) {
    let e = new t({ encoder: this.encoder });
    return (
      (e.cloneFrom = this.cloneFrom || this),
      (e.updates = (this.updates || []).concat(n)),
      e
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((n) => this.map.set(n, this.cloneFrom.map.get(n))),
        this.updates.forEach((n) => {
          switch (n.op) {
            case "a":
            case "s":
              let e = (n.op === "a" ? this.map.get(n.param) : void 0) || [];
              e.push(Pn(n.value)), this.map.set(n.param, e);
              break;
            case "d":
              if (n.value !== void 0) {
                let i = this.map.get(n.param) || [],
                  r = i.indexOf(Pn(n.value));
                r !== -1 && i.splice(r, 1),
                  i.length > 0
                    ? this.map.set(n.param, i)
                    : this.map.delete(n.param);
              } else {
                this.map.delete(n.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var Yr = class {
  constructor() {
    this.map = new Map();
  }
  set(n, e) {
    return this.map.set(n, e), this;
  }
  get(n) {
    return (
      this.map.has(n) || this.map.set(n, n.defaultValue()), this.map.get(n)
    );
  }
  delete(n) {
    return this.map.delete(n), this;
  }
  has(n) {
    return this.map.has(n);
  }
  keys() {
    return this.map.keys();
  }
};
function od(t) {
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
function bs(t) {
  return typeof ArrayBuffer < "u" && t instanceof ArrayBuffer;
}
function vs(t) {
  return typeof Blob < "u" && t instanceof Blob;
}
function _s(t) {
  return typeof FormData < "u" && t instanceof FormData;
}
function ad(t) {
  return typeof URLSearchParams < "u" && t instanceof URLSearchParams;
}
var Ii = class t {
    constructor(n, e, i, r) {
      (this.url = e),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = n.toUpperCase());
      let o;
      if (
        (od(this.method) || r
          ? ((this.body = i !== void 0 ? i : null), (o = r))
          : (o = i),
        o &&
          ((this.reportProgress = !!o.reportProgress),
          (this.withCredentials = !!o.withCredentials),
          o.responseType && (this.responseType = o.responseType),
          o.headers && (this.headers = o.headers),
          o.context && (this.context = o.context),
          o.params && (this.params = o.params),
          (this.transferCache = o.transferCache)),
        (this.headers ??= new qe()),
        (this.context ??= new Yr()),
        !this.params)
      )
        (this.params = new mt()), (this.urlWithParams = e);
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
          bs(this.body) ||
          vs(this.body) ||
          _s(this.body) ||
          ad(this.body)
        ? this.body
        : this.body instanceof mt
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || _s(this.body)
        ? null
        : vs(this.body)
        ? this.body.type || null
        : bs(this.body)
        ? null
        : typeof this.body == "string"
        ? "text/plain"
        : this.body instanceof mt
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? "application/json"
        : null;
    }
    clone(n = {}) {
      let e = n.method || this.method,
        i = n.url || this.url,
        r = n.responseType || this.responseType,
        o = n.transferCache ?? this.transferCache,
        a = n.body !== void 0 ? n.body : this.body,
        c = n.withCredentials ?? this.withCredentials,
        s = n.reportProgress ?? this.reportProgress,
        d = n.headers || this.headers,
        h = n.params || this.params,
        v = n.context ?? this.context;
      return (
        n.setHeaders !== void 0 &&
          (d = Object.keys(n.setHeaders).reduce(
            (O, P) => O.set(P, n.setHeaders[P]),
            d
          )),
        n.setParams &&
          (h = Object.keys(n.setParams).reduce(
            (O, P) => O.set(P, n.setParams[P]),
            h
          )),
        new t(e, i, a, {
          params: h,
          headers: d,
          context: v,
          reportProgress: s,
          responseType: r,
          withCredentials: c,
          transferCache: o,
        })
      );
    }
  },
  ht = (function (t) {
    return (
      (t[(t.Sent = 0)] = "Sent"),
      (t[(t.UploadProgress = 1)] = "UploadProgress"),
      (t[(t.ResponseHeader = 2)] = "ResponseHeader"),
      (t[(t.DownloadProgress = 3)] = "DownloadProgress"),
      (t[(t.Response = 4)] = "Response"),
      (t[(t.User = 5)] = "User"),
      t
    );
  })(ht || {}),
  Mi = class {
    constructor(n, e = 200, i = "OK") {
      (this.headers = n.headers || new qe()),
        (this.status = n.status !== void 0 ? n.status : e),
        (this.statusText = n.statusText || i),
        (this.url = n.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  jn = class t extends Mi {
    constructor(n = {}) {
      super(n), (this.type = ht.ResponseHeader);
    }
    clone(n = {}) {
      return new t({
        headers: n.headers || this.headers,
        status: n.status !== void 0 ? n.status : this.status,
        statusText: n.statusText || this.statusText,
        url: n.url || this.url || void 0,
      });
    }
  },
  kt = class t extends Mi {
    constructor(n = {}) {
      super(n),
        (this.type = ht.Response),
        (this.body = n.body !== void 0 ? n.body : null);
    }
    clone(n = {}) {
      return new t({
        body: n.body !== void 0 ? n.body : this.body,
        headers: n.headers || this.headers,
        status: n.status !== void 0 ? n.status : this.status,
        statusText: n.statusText || this.statusText,
        url: n.url || this.url || void 0,
      });
    }
  },
  ut = class extends Mi {
    constructor(n) {
      super(n, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              n.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              n.url || "(unknown url)"
            }: ${n.status} ${n.statusText}`),
        (this.error = n.error || null);
    }
  },
  Ts = 200,
  sd = 204;
function Zr(t, n) {
  return {
    body: n,
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
var Et = (() => {
    class t {
      constructor(e) {
        this.handler = e;
      }
      request(e, i, r = {}) {
        let o;
        if (e instanceof Ii) o = e;
        else {
          let s;
          r.headers instanceof qe ? (s = r.headers) : (s = new qe(r.headers));
          let d;
          r.params &&
            (r.params instanceof mt
              ? (d = r.params)
              : (d = new mt({ fromObject: r.params }))),
            (o = new Ii(e, i, r.body !== void 0 ? r.body : null, {
              headers: s,
              context: r.context,
              params: d,
              reportProgress: r.reportProgress,
              responseType: r.responseType || "json",
              withCredentials: r.withCredentials,
              transferCache: r.transferCache,
            }));
        }
        let a = I(o).pipe(Qe((s) => this.handler.handle(s)));
        if (e instanceof Ii || r.observe === "events") return a;
        let c = a.pipe(Ne((s) => s instanceof kt));
        switch (r.observe || "body") {
          case "body":
            switch (o.responseType) {
              case "arraybuffer":
                return c.pipe(
                  M((s) => {
                    if (s.body !== null && !(s.body instanceof ArrayBuffer))
                      throw new Error("Response is not an ArrayBuffer.");
                    return s.body;
                  })
                );
              case "blob":
                return c.pipe(
                  M((s) => {
                    if (s.body !== null && !(s.body instanceof Blob))
                      throw new Error("Response is not a Blob.");
                    return s.body;
                  })
                );
              case "text":
                return c.pipe(
                  M((s) => {
                    if (s.body !== null && typeof s.body != "string")
                      throw new Error("Response is not a string.");
                    return s.body;
                  })
                );
              case "json":
              default:
                return c.pipe(M((s) => s.body));
            }
          case "response":
            return c;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${r.observe}}`
            );
        }
      }
      delete(e, i = {}) {
        return this.request("DELETE", e, i);
      }
      get(e, i = {}) {
        return this.request("GET", e, i);
      }
      head(e, i = {}) {
        return this.request("HEAD", e, i);
      }
      jsonp(e, i) {
        return this.request("JSONP", e, {
          params: new mt().append(i, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(e, i = {}) {
        return this.request("OPTIONS", e, i);
      }
      patch(e, i, r = {}) {
        return this.request("PATCH", e, Zr(r, i));
      }
      post(e, i, r = {}) {
        return this.request("POST", e, Zr(r, i));
      }
      put(e, i, r = {}) {
        return this.request("PUT", e, Zr(r, i));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(ki));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  cd = /^\)\]\}',?\n/,
  ld = "X-Request-URL";
function ys(t) {
  if (t.url) return t.url;
  let n = ld.toLocaleLowerCase();
  return t.headers.get(n);
}
var Qr = (() => {
    class t {
      constructor() {
        (this.fetchImpl =
          x(Xr, { optional: !0 })?.fetch ?? ((...e) => globalThis.fetch(...e))),
          (this.ngZone = x(B));
      }
      handle(e) {
        return new mi((i) => {
          let r = new AbortController();
          return (
            this.doRequest(e, r.signal, i).then(Jr, (o) =>
              i.error(new ut({ error: o }))
            ),
            () => r.abort()
          );
        });
      }
      doRequest(e, i, r) {
        return Fr(this, null, function* () {
          let o = this.createRequestInit(e),
            a;
          try {
            let P = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(e.urlWithParams, g({ signal: i }, o))
            );
            dd(P), r.next({ type: ht.Sent }), (a = yield P);
          } catch (P) {
            r.error(
              new ut({
                error: P,
                status: P.status ?? 0,
                statusText: P.statusText,
                url: e.urlWithParams,
                headers: P.headers,
              })
            );
            return;
          }
          let c = new qe(a.headers),
            s = a.statusText,
            d = ys(a) ?? e.urlWithParams,
            h = a.status,
            v = null;
          if (
            (e.reportProgress &&
              r.next(new jn({ headers: c, status: h, statusText: s, url: d })),
            a.body)
          ) {
            let P = a.headers.get("content-length"),
              N = [],
              A = a.body.getReader(),
              S = 0,
              se,
              Ce,
              Q = typeof Zone < "u" && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              Fr(this, null, function* () {
                for (;;) {
                  let { done: Ke, value: di } = yield A.read();
                  if (Ke) break;
                  if ((N.push(di), (S += di.length), e.reportProgress)) {
                    Ce =
                      e.responseType === "text"
                        ? (Ce ?? "") +
                          (se ??= new TextDecoder()).decode(di, { stream: !0 })
                        : void 0;
                    let Ea = () =>
                      r.next({
                        type: ht.DownloadProgress,
                        total: P ? +P : void 0,
                        loaded: S,
                        partialText: Ce,
                      });
                    Q ? Q.run(Ea) : Ea();
                  }
                }
              })
            );
            let Ze = this.concatChunks(N, S);
            try {
              let Ke = a.headers.get("Content-Type") ?? "";
              v = this.parseBody(e, Ze, Ke);
            } catch (Ke) {
              r.error(
                new ut({
                  error: Ke,
                  headers: new qe(a.headers),
                  status: a.status,
                  statusText: a.statusText,
                  url: ys(a) ?? e.urlWithParams,
                })
              );
              return;
            }
          }
          h === 0 && (h = v ? Ts : 0),
            h >= 200 && h < 300
              ? (r.next(
                  new kt({
                    body: v,
                    headers: c,
                    status: h,
                    statusText: s,
                    url: d,
                  })
                ),
                r.complete())
              : r.error(
                  new ut({
                    error: v,
                    headers: c,
                    status: h,
                    statusText: s,
                    url: d,
                  })
                );
        });
      }
      parseBody(e, i, r) {
        switch (e.responseType) {
          case "json":
            let o = new TextDecoder().decode(i).replace(cd, "");
            return o === "" ? null : JSON.parse(o);
          case "text":
            return new TextDecoder().decode(i);
          case "blob":
            return new Blob([i], { type: r });
          case "arraybuffer":
            return i.buffer;
        }
      }
      createRequestInit(e) {
        let i = {},
          r = e.withCredentials ? "include" : void 0;
        if (
          (e.headers.forEach((o, a) => (i[o] = a.join(","))),
          e.headers.has("Accept") ||
            (i.Accept = "application/json, text/plain, */*"),
          !e.headers.has("Content-Type"))
        ) {
          let o = e.detectContentTypeHeader();
          o !== null && (i["Content-Type"] = o);
        }
        return {
          body: e.serializeBody(),
          method: e.method,
          headers: i,
          credentials: r,
        };
      }
      concatChunks(e, i) {
        let r = new Uint8Array(i),
          o = 0;
        for (let a of e) r.set(a, o), (o += a.length);
        return r;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  Xr = class {};
function Jr() {}
function dd(t) {
  t.then(Jr, Jr);
}
function ud(t, n) {
  return n(t);
}
function md(t, n, e) {
  return (i, r) => je(e, () => n(i, (o) => t(o, r)));
}
var Rs = new E(""),
  Fs = new E(""),
  hd = new E("", { providedIn: "root", factory: () => !0 });
var xs = (() => {
  class t extends ki {
    constructor(e, i) {
      super(),
        (this.backend = e),
        (this.injector = i),
        (this.chain = null),
        (this.pendingTasks = x(gn)),
        (this.contributeToStability = x(hd));
    }
    handle(e) {
      if (this.chain === null) {
        let i = Array.from(
          new Set([...this.injector.get(Rs), ...this.injector.get(Fs, [])])
        );
        this.chain = i.reduceRight((r, o) => md(r, o, this.injector), ud);
      }
      if (this.contributeToStability) {
        let i = this.pendingTasks.add();
        return this.chain(e, (r) => this.backend.handle(r)).pipe(
          rt(() => this.pendingTasks.remove(i))
        );
      } else return this.chain(e, (i) => this.backend.handle(i));
    }
    static {
      this.ɵfac = function (i) {
        return new (i || t)(b(Ei), b(jt));
      };
    }
    static {
      this.ɵprov = y({ token: t, factory: t.ɵfac });
    }
  }
  return t;
})();
var pd = /^\)\]\}',?\n/;
function fd(t) {
  return "responseURL" in t && t.responseURL
    ? t.responseURL
    : /^X-Request-URL:/m.test(t.getAllResponseHeaders())
    ? t.getResponseHeader("X-Request-URL")
    : null;
}
var Cs = (() => {
    class t {
      constructor(e) {
        this.xhrFactory = e;
      }
      handle(e) {
        if (e.method === "JSONP") throw new W(-2800, !1);
        let i = this.xhrFactory;
        return (i.ɵloadImpl ? ve(i.ɵloadImpl()) : I(null)).pipe(
          _e(
            () =>
              new mi((o) => {
                let a = i.build();
                if (
                  (a.open(e.method, e.urlWithParams),
                  e.withCredentials && (a.withCredentials = !0),
                  e.headers.forEach((A, S) =>
                    a.setRequestHeader(A, S.join(","))
                  ),
                  e.headers.has("Accept") ||
                    a.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !e.headers.has("Content-Type"))
                ) {
                  let A = e.detectContentTypeHeader();
                  A !== null && a.setRequestHeader("Content-Type", A);
                }
                if (e.responseType) {
                  let A = e.responseType.toLowerCase();
                  a.responseType = A !== "json" ? A : "text";
                }
                let c = e.serializeBody(),
                  s = null,
                  d = () => {
                    if (s !== null) return s;
                    let A = a.statusText || "OK",
                      S = new qe(a.getAllResponseHeaders()),
                      se = fd(a) || e.url;
                    return (
                      (s = new jn({
                        headers: S,
                        status: a.status,
                        statusText: A,
                        url: se,
                      })),
                      s
                    );
                  },
                  h = () => {
                    let {
                        headers: A,
                        status: S,
                        statusText: se,
                        url: Ce,
                      } = d(),
                      Q = null;
                    S !== sd &&
                      (Q =
                        typeof a.response > "u" ? a.responseText : a.response),
                      S === 0 && (S = Q ? Ts : 0);
                    let Ze = S >= 200 && S < 300;
                    if (e.responseType === "json" && typeof Q == "string") {
                      let Ke = Q;
                      Q = Q.replace(pd, "");
                      try {
                        Q = Q !== "" ? JSON.parse(Q) : null;
                      } catch (di) {
                        (Q = Ke),
                          Ze && ((Ze = !1), (Q = { error: di, text: Q }));
                      }
                    }
                    Ze
                      ? (o.next(
                          new kt({
                            body: Q,
                            headers: A,
                            status: S,
                            statusText: se,
                            url: Ce || void 0,
                          })
                        ),
                        o.complete())
                      : o.error(
                          new ut({
                            error: Q,
                            headers: A,
                            status: S,
                            statusText: se,
                            url: Ce || void 0,
                          })
                        );
                  },
                  v = (A) => {
                    let { url: S } = d(),
                      se = new ut({
                        error: A,
                        status: a.status || 0,
                        statusText: a.statusText || "Unknown Error",
                        url: S || void 0,
                      });
                    o.error(se);
                  },
                  O = !1,
                  P = (A) => {
                    O || (o.next(d()), (O = !0));
                    let S = { type: ht.DownloadProgress, loaded: A.loaded };
                    A.lengthComputable && (S.total = A.total),
                      e.responseType === "text" &&
                        a.responseText &&
                        (S.partialText = a.responseText),
                      o.next(S);
                  },
                  N = (A) => {
                    let S = { type: ht.UploadProgress, loaded: A.loaded };
                    A.lengthComputable && (S.total = A.total), o.next(S);
                  };
                return (
                  a.addEventListener("load", h),
                  a.addEventListener("error", v),
                  a.addEventListener("timeout", v),
                  a.addEventListener("abort", v),
                  e.reportProgress &&
                    (a.addEventListener("progress", P),
                    c !== null &&
                      a.upload &&
                      a.upload.addEventListener("progress", N)),
                  a.send(c),
                  o.next({ type: ht.Sent }),
                  () => {
                    a.removeEventListener("error", v),
                      a.removeEventListener("abort", v),
                      a.removeEventListener("load", h),
                      a.removeEventListener("timeout", v),
                      e.reportProgress &&
                        (a.removeEventListener("progress", P),
                        c !== null &&
                          a.upload &&
                          a.upload.removeEventListener("progress", N)),
                      a.readyState !== a.DONE && a.abort();
                  }
                );
              })
          )
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(Tn));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  Os = new E(""),
  gd = "XSRF-TOKEN",
  bd = new E("", { providedIn: "root", factory: () => gd }),
  vd = "X-XSRF-TOKEN",
  _d = new E("", { providedIn: "root", factory: () => vd }),
  Ln = class {},
  yd = (() => {
    class t {
      constructor(e, i, r) {
        (this.doc = e),
          (this.platform = i),
          (this.cookieName = r),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let e = this.doc.cookie || "";
        return (
          e !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = Sn(e, this.cookieName)),
            (this.lastCookieString = e)),
          this.lastToken
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(H), b(Se), b(bd));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })();
function xd(t, n) {
  let e = t.url.toLowerCase();
  if (
    !x(Os) ||
    t.method === "GET" ||
    t.method === "HEAD" ||
    e.startsWith("http://") ||
    e.startsWith("https://")
  )
    return n(t);
  let i = x(Ln).getToken(),
    r = x(_d);
  return (
    i != null &&
      !t.headers.has(r) &&
      (t = t.clone({ headers: t.headers.set(r, i) })),
    n(t)
  );
}
var Ps = (function (t) {
  return (
    (t[(t.Interceptors = 0)] = "Interceptors"),
    (t[(t.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (t[(t.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (t[(t.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (t[(t.JsonpSupport = 4)] = "JsonpSupport"),
    (t[(t.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (t[(t.Fetch = 6)] = "Fetch"),
    t
  );
})(Ps || {});
function Cd(t, n) {
  return { ɵkind: t, ɵproviders: n };
}
function Ns(...t) {
  let n = [
    Et,
    Cs,
    xs,
    { provide: ki, useExisting: xs },
    { provide: Ei, useFactory: () => x(Qr, { optional: !0 }) ?? x(Cs) },
    { provide: Rs, useValue: xd, multi: !0 },
    { provide: Os, useValue: !0 },
    { provide: Ln, useClass: yd },
  ];
  for (let e of t) n.push(...e.ɵproviders);
  return Ue(n);
}
function js() {
  return Cd(Ps.Fetch, [Qr, { provide: Ei, useExisting: Qr }]);
}
var wd = new E(""),
  ws = "b",
  Is = "h",
  ks = "s",
  Es = "st",
  Ms = "u",
  As = "rt",
  Nn = new E(""),
  Id = ["GET", "HEAD"];
function kd(t, n) {
  let P = x(Nn),
    { isCacheActive: e } = P,
    i = Ma(P, ["isCacheActive"]),
    { transferCache: r, method: o } = t;
  if (
    !e ||
    r === !1 ||
    (o === "POST" && !i.includePostRequests && !r) ||
    (o !== "POST" && !Id.includes(o)) ||
    (!i.includeRequestsWithAuthHeaders && Ed(t)) ||
    i.filter?.(t) === !1
  )
    return n(t);
  let a = x(Ur),
    c = x(wd, { optional: !0 }),
    s = Ci(x(Se));
  if (c && !s) throw new W(2803, !1);
  let d = s && c ? Dd(t.url, c) : t.url,
    h = Ad(t, d),
    v = a.get(h, null),
    O = i.includeHeaders;
  if ((typeof r == "object" && r.includeHeaders && (O = r.includeHeaders), v)) {
    let { [ws]: N, [As]: A, [Is]: S, [ks]: se, [Es]: Ce, [Ms]: Q } = v,
      Ze = N;
    switch (A) {
      case "arraybuffer":
        Ze = new TextEncoder().encode(N).buffer;
        break;
      case "blob":
        Ze = new Blob([N]);
        break;
    }
    let Ke = new qe(S);
    return I(
      new kt({ body: Ze, headers: Ke, status: se, statusText: Ce, url: Q })
    );
  }
  return n(t).pipe(
    re((N) => {
      N instanceof kt &&
        s &&
        a.set(h, {
          [ws]: N.body,
          [Is]: Md(N.headers, O),
          [ks]: N.status,
          [Es]: N.statusText,
          [Ms]: d,
          [As]: t.responseType,
        });
    })
  );
}
function Ed(t) {
  return t.headers.has("authorization") || t.headers.has("proxy-authorization");
}
function Md(t, n) {
  if (!n) return {};
  let e = {};
  for (let i of n) {
    let r = t.getAll(i);
    r !== null && (e[i] = r);
  }
  return e;
}
function Ss(t) {
  return [...t.keys()]
    .sort()
    .map((n) => `${n}=${t.getAll(n)}`)
    .join("&");
}
function Ad(t, n) {
  let { params: e, method: i, responseType: r } = t,
    o = Ss(e),
    a = t.serializeBody();
  a instanceof URLSearchParams ? (a = Ss(a)) : typeof a != "string" && (a = "");
  let c = [i, r, n, a, o].join("|"),
    s = Sd(c);
  return s;
}
function Sd(t) {
  let n = 0;
  for (let e of t) n = (Math.imul(31, n) + e.charCodeAt(0)) << 0;
  return (n += 2147483648), n.toString();
}
function Ls(t) {
  return [
    {
      provide: Nn,
      useFactory: () => (
        vi("NgHttpTransferCache"), g({ isCacheActive: !0 }, t)
      ),
    },
    { provide: Fs, useValue: kd, multi: !0, deps: [Ur, Nn] },
    {
      provide: En,
      multi: !0,
      useFactory: () => {
        let n = x(yi),
          e = x(Nn);
        return () => {
          Ja(n).then(() => {
            e.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
function Dd(t, n) {
  let e = new URL(t, "resolve://").origin,
    i = n[e];
  return i ? t.replace(e, i) : t;
}
var io = class extends os {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  no = class t extends io {
    static makeCurrent() {
      rs(new t());
    }
    onAndCancel(n, e, i) {
      return (
        n.addEventListener(e, i),
        () => {
          n.removeEventListener(e, i);
        }
      );
    }
    dispatchEvent(n, e) {
      n.dispatchEvent(e);
    }
    remove(n) {
      n.remove();
    }
    createElement(n, e) {
      return (e = e || this.getDefaultDocument()), e.createElement(n);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(n) {
      return n.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(n) {
      return n instanceof DocumentFragment;
    }
    getGlobalEventTarget(n, e) {
      return e === "window"
        ? window
        : e === "document"
        ? n
        : e === "body"
        ? n.body
        : null;
    }
    getBaseHref(n) {
      let e = Rd();
      return e == null ? null : Fd(e);
    }
    resetBaseElement() {
      Ai = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(n) {
      return Sn(document.cookie, n);
    }
  },
  Ai = null;
function Rd() {
  return (
    (Ai = Ai || document.querySelector("base")),
    Ai ? Ai.getAttribute("href") : null
  );
}
function Fd(t) {
  return new URL(t, document.baseURI).pathname;
}
var ro = class {
    addToWindow(n) {
      (st.getAngularTestability = (i, r = !0) => {
        let o = n.findTestabilityInTree(i, r);
        if (o == null) throw new W(5103, !1);
        return o;
      }),
        (st.getAllAngularTestabilities = () => n.getAllTestabilities()),
        (st.getAllAngularRootElements = () => n.getAllRootElements());
      let e = (i) => {
        let r = st.getAllAngularTestabilities(),
          o = r.length,
          a = function () {
            o--, o == 0 && i();
          };
        r.forEach((c) => {
          c.whenStable(a);
        });
      };
      st.frameworkStabilizers || (st.frameworkStabilizers = []),
        st.frameworkStabilizers.push(e);
    }
    findTestabilityInTree(n, e, i) {
      if (e == null) return null;
      let r = n.getTestability(e);
      return (
        r ??
        (i
          ? lt().isShadowRoot(e)
            ? this.findTestabilityInTree(n, e.host, !0)
            : this.findTestabilityInTree(n, e.parentElement, !0)
          : null)
      );
    }
  },
  Od = (() => {
    class t {
      build() {
        return new XMLHttpRequest();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  oo = new E(""),
  Hs = (() => {
    class t {
      constructor(e, i) {
        (this._zone = i),
          (this._eventNameToPlugin = new Map()),
          e.forEach((r) => {
            r.manager = this;
          }),
          (this._plugins = e.slice().reverse());
      }
      addEventListener(e, i, r) {
        return this._findPluginFor(i).addEventListener(e, i, r);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let i = this._eventNameToPlugin.get(e);
        if (i) return i;
        if (((i = this._plugins.find((o) => o.supports(e))), !i))
          throw new W(5101, !1);
        return this._eventNameToPlugin.set(e, i), i;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(oo), b(B));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  Vn = class {
    constructor(n) {
      this._doc = n;
    }
  },
  eo = "ng-app-id",
  Gs = (() => {
    class t {
      constructor(e, i, r, o = {}) {
        (this.doc = e),
          (this.appId = i),
          (this.nonce = r),
          (this.platformId = o),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Ci(o)),
          this.resetHostNodes();
      }
      addStyles(e) {
        for (let i of e)
          this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
      }
      removeStyles(e) {
        for (let i of e)
          this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
      }
      ngOnDestroy() {
        let e = this.styleNodesInDOM;
        e && (e.forEach((i) => i.remove()), e.clear());
        for (let i of this.getAllStyles()) this.onStyleRemoved(i);
        this.resetHostNodes();
      }
      addHost(e) {
        this.hostNodes.add(e);
        for (let i of this.getAllStyles()) this.addStyleToHost(e, i);
      }
      removeHost(e) {
        this.hostNodes.delete(e);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(e) {
        for (let i of this.hostNodes) this.addStyleToHost(i, e);
      }
      onStyleRemoved(e) {
        let i = this.styleRef;
        i.get(e)?.elements?.forEach((r) => r.remove()), i.delete(e);
      }
      collectServerRenderedStyles() {
        let e = this.doc.head?.querySelectorAll(`style[${eo}="${this.appId}"]`);
        if (e?.length) {
          let i = new Map();
          return (
            e.forEach((r) => {
              r.textContent != null && i.set(r.textContent, r);
            }),
            i
          );
        }
        return null;
      }
      changeUsageCount(e, i) {
        let r = this.styleRef;
        if (r.has(e)) {
          let o = r.get(e);
          return (o.usage += i), o.usage;
        }
        return r.set(e, { usage: i, elements: [] }), i;
      }
      getStyleElement(e, i) {
        let r = this.styleNodesInDOM,
          o = r?.get(i);
        if (o?.parentNode === e) return r.delete(i), o.removeAttribute(eo), o;
        {
          let a = this.doc.createElement("style");
          return (
            this.nonce && a.setAttribute("nonce", this.nonce),
            (a.textContent = i),
            this.platformIsServer && a.setAttribute(eo, this.appId),
            e.appendChild(a),
            a
          );
        }
      }
      addStyleToHost(e, i) {
        let r = this.getStyleElement(e, i),
          o = this.styleRef,
          a = o.get(i)?.elements;
        a ? a.push(r) : o.set(i, { elements: [r], usage: 1 });
      }
      resetHostNodes() {
        let e = this.hostNodes;
        e.clear(), e.add(this.doc.head);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(H), b(fi), b(gi, 8), b(Se));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  to = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  lo = /%COMP%/g,
  $s = "%COMP%",
  Pd = `_nghost-${$s}`,
  Nd = `_ngcontent-${$s}`,
  jd = !0,
  Ld = new E("", { providedIn: "root", factory: () => jd });
function Vd(t) {
  return Nd.replace(lo, t);
}
function Bd(t) {
  return Pd.replace(lo, t);
}
function qs(t, n) {
  return n.map((e) => e.replace(lo, t));
}
var Gt = (() => {
    class t {
      constructor(e, i, r, o, a, c, s, d = null) {
        (this.eventManager = e),
          (this.sharedStylesHost = i),
          (this.appId = r),
          (this.removeStylesOnCompDestroy = o),
          (this.doc = a),
          (this.platformId = c),
          (this.ngZone = s),
          (this.nonce = d),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Ci(c)),
          (this.defaultRenderer = new Si(e, a, s, this.platformIsServer));
      }
      createRenderer(e, i) {
        if (!e || !i) return this.defaultRenderer;
        this.platformIsServer &&
          i.encapsulation === pi.ShadowDom &&
          (i = q(g({}, i), { encapsulation: pi.Emulated }));
        let r = this.getOrCreateRenderer(e, i);
        return (
          r instanceof Bn
            ? r.applyToHost(e)
            : r instanceof Di && r.applyStyles(),
          r
        );
      }
      getOrCreateRenderer(e, i) {
        let r = this.rendererByCompId,
          o = r.get(i.id);
        if (!o) {
          let a = this.doc,
            c = this.ngZone,
            s = this.eventManager,
            d = this.sharedStylesHost,
            h = this.removeStylesOnCompDestroy,
            v = this.platformIsServer;
          switch (i.encapsulation) {
            case pi.Emulated:
              o = new Bn(s, d, i, this.appId, h, a, c, v);
              break;
            case pi.ShadowDom:
              return new ao(s, d, e, i, a, c, this.nonce, v);
            default:
              o = new Di(s, d, i, h, a, c, v);
              break;
          }
          r.set(i.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(
            b(Hs),
            b(Gs),
            b(fi),
            b(Ld),
            b(H),
            b(Se),
            b(B),
            b(gi)
          );
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  Si = class {
    constructor(n, e, i, r) {
      (this.eventManager = n),
        (this.doc = e),
        (this.ngZone = i),
        (this.platformIsServer = r),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(n, e) {
      return e
        ? this.doc.createElementNS(to[e] || e, n)
        : this.doc.createElement(n);
    }
    createComment(n) {
      return this.doc.createComment(n);
    }
    createText(n) {
      return this.doc.createTextNode(n);
    }
    appendChild(n, e) {
      (Bs(n) ? n.content : n).appendChild(e);
    }
    insertBefore(n, e, i) {
      n && (Bs(n) ? n.content : n).insertBefore(e, i);
    }
    removeChild(n, e) {
      e.remove();
    }
    selectRootElement(n, e) {
      let i = typeof n == "string" ? this.doc.querySelector(n) : n;
      if (!i) throw new W(-5104, !1);
      return e || (i.textContent = ""), i;
    }
    parentNode(n) {
      return n.parentNode;
    }
    nextSibling(n) {
      return n.nextSibling;
    }
    setAttribute(n, e, i, r) {
      if (r) {
        e = r + ":" + e;
        let o = to[r];
        o ? n.setAttributeNS(o, e, i) : n.setAttribute(e, i);
      } else n.setAttribute(e, i);
    }
    removeAttribute(n, e, i) {
      if (i) {
        let r = to[i];
        r ? n.removeAttributeNS(r, e) : n.removeAttribute(`${i}:${e}`);
      } else n.removeAttribute(e);
    }
    addClass(n, e) {
      n.classList.add(e);
    }
    removeClass(n, e) {
      n.classList.remove(e);
    }
    setStyle(n, e, i, r) {
      r & (bi.DashCase | bi.Important)
        ? n.style.setProperty(e, i, r & bi.Important ? "important" : "")
        : (n.style[e] = i);
    }
    removeStyle(n, e, i) {
      i & bi.DashCase ? n.style.removeProperty(e) : (n.style[e] = "");
    }
    setProperty(n, e, i) {
      n != null && (n[e] = i);
    }
    setValue(n, e) {
      n.nodeValue = e;
    }
    listen(n, e, i) {
      if (
        typeof n == "string" &&
        ((n = lt().getGlobalEventTarget(this.doc, n)), !n)
      )
        throw new Error(`Unsupported event target ${n} for event ${e}`);
      return this.eventManager.addEventListener(
        n,
        e,
        this.decoratePreventDefault(i)
      );
    }
    decoratePreventDefault(n) {
      return (e) => {
        if (e === "__ngUnwrap__") return n;
        (this.platformIsServer ? this.ngZone.runGuarded(() => n(e)) : n(e)) ===
          !1 && e.preventDefault();
      };
    }
  };
function Bs(t) {
  return t.tagName === "TEMPLATE" && t.content !== void 0;
}
var ao = class extends Si {
    constructor(n, e, i, r, o, a, c, s) {
      super(n, o, a, s),
        (this.sharedStylesHost = e),
        (this.hostEl = i),
        (this.shadowRoot = i.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let d = qs(r.id, r.styles);
      for (let h of d) {
        let v = document.createElement("style");
        c && v.setAttribute("nonce", c),
          (v.textContent = h),
          this.shadowRoot.appendChild(v);
      }
    }
    nodeOrShadowRoot(n) {
      return n === this.hostEl ? this.shadowRoot : n;
    }
    appendChild(n, e) {
      return super.appendChild(this.nodeOrShadowRoot(n), e);
    }
    insertBefore(n, e, i) {
      return super.insertBefore(this.nodeOrShadowRoot(n), e, i);
    }
    removeChild(n, e) {
      return super.removeChild(null, e);
    }
    parentNode(n) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Di = class extends Si {
    constructor(n, e, i, r, o, a, c, s) {
      super(n, o, a, c),
        (this.sharedStylesHost = e),
        (this.removeStylesOnCompDestroy = r),
        (this.styles = s ? qs(s, i.styles) : i.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Bn = class extends Di {
    constructor(n, e, i, r, o, a, c, s) {
      let d = r + "-" + i.id;
      super(n, e, i, o, a, c, s, d),
        (this.contentAttr = Vd(d)),
        (this.hostAttr = Bd(d));
    }
    applyToHost(n) {
      this.applyStyles(), this.setAttribute(n, this.hostAttr, "");
    }
    createElement(n, e) {
      let i = super.createElement(n, e);
      return super.setAttribute(i, this.contentAttr, ""), i;
    }
  },
  zd = (() => {
    class t extends Vn {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, i, r) {
        return (
          e.addEventListener(i, r, !1), () => this.removeEventListener(e, i, r)
        );
      }
      removeEventListener(e, i, r) {
        return e.removeEventListener(i, r);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(H));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  zs = ["alt", "control", "meta", "shift"],
  Ud = {
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
  Hd = {
    alt: (t) => t.altKey,
    control: (t) => t.ctrlKey,
    meta: (t) => t.metaKey,
    shift: (t) => t.shiftKey,
  },
  Gd = (() => {
    class t extends Vn {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return t.parseEventName(e) != null;
      }
      addEventListener(e, i, r) {
        let o = t.parseEventName(i),
          a = t.eventCallback(o.fullKey, r, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => lt().onAndCancel(e, o.domEventName, a));
      }
      static parseEventName(e) {
        let i = e.toLowerCase().split("."),
          r = i.shift();
        if (i.length === 0 || !(r === "keydown" || r === "keyup")) return null;
        let o = t._normalizeKey(i.pop()),
          a = "",
          c = i.indexOf("code");
        if (
          (c > -1 && (i.splice(c, 1), (a = "code.")),
          zs.forEach((d) => {
            let h = i.indexOf(d);
            h > -1 && (i.splice(h, 1), (a += d + "."));
          }),
          (a += o),
          i.length != 0 || o.length === 0)
        )
          return null;
        let s = {};
        return (s.domEventName = r), (s.fullKey = a), s;
      }
      static matchEventFullKeyCode(e, i) {
        let r = Ud[e.key] || e.key,
          o = "";
        return (
          i.indexOf("code.") > -1 && ((r = e.code), (o = "code.")),
          r == null || !r
            ? !1
            : ((r = r.toLowerCase()),
              r === " " ? (r = "space") : r === "." && (r = "dot"),
              zs.forEach((a) => {
                if (a !== r) {
                  let c = Hd[a];
                  c(e) && (o += a + ".");
                }
              }),
              (o += r),
              o === i)
        );
      }
      static eventCallback(e, i, r) {
        return (o) => {
          t.matchEventFullKeyCode(o, e) && r.runGuarded(() => i(o));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(H));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })();
function Ws(t, n) {
  return is(g({ rootComponent: t }, $d(n)));
}
function $d(t) {
  return {
    appProviders: [...Zs, ...(t?.providers ?? [])],
    platformProviders: Kd,
  };
}
function qd() {
  no.makeCurrent();
}
function Wd() {
  return new xt();
}
function Zd() {
  return ja(document), document;
}
var Kd = [
  { provide: Se, useValue: ls },
  { provide: La, useValue: qd, multi: !0 },
  { provide: H, useFactory: Zd, deps: [] },
];
var Yd = new E(""),
  Qd = [
    { provide: wn, useClass: ro, deps: [] },
    { provide: Xa, useClass: In, deps: [B, Gr, wn] },
    { provide: In, useClass: In, deps: [B, Gr, wn] },
  ],
  Zs = [
    { provide: Na, useValue: "root" },
    { provide: xt, useFactory: Wd, deps: [] },
    { provide: oo, useClass: zd, multi: !0, deps: [H, B, Se] },
    { provide: oo, useClass: Gd, multi: !0, deps: [H] },
    Gt,
    Gs,
    Hs,
    { provide: zt, useExisting: Gt },
    { provide: Tn, useClass: Od, deps: [] },
    [],
  ],
  Ks = (() => {
    class t {
      constructor(e) {}
      static withServerTransition(e) {
        return { ngModule: t, providers: [{ provide: fi, useValue: e.appId }] };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(Yd, 12));
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ providers: [...Zs, ...Qd], imports: [we, ts] });
      }
    }
    return t;
  })(),
  Ys = (() => {
    class t {
      constructor(e) {
        (this._doc = e), (this._dom = lt());
      }
      addTag(e, i = !1) {
        return e ? this._getOrCreateElement(e, i) : null;
      }
      addTags(e, i = !1) {
        return e
          ? e.reduce(
              (r, o) => (o && r.push(this._getOrCreateElement(o, i)), r),
              []
            )
          : [];
      }
      getTag(e) {
        return (e && this._doc.querySelector(`meta[${e}]`)) || null;
      }
      getTags(e) {
        if (!e) return [];
        let i = this._doc.querySelectorAll(`meta[${e}]`);
        return i ? [].slice.call(i) : [];
      }
      updateTag(e, i) {
        if (!e) return null;
        i = i || this._parseSelector(e);
        let r = this.getTag(i);
        return r
          ? this._setMetaElementAttributes(e, r)
          : this._getOrCreateElement(e, !0);
      }
      removeTag(e) {
        this.removeTagElement(this.getTag(e));
      }
      removeTagElement(e) {
        e && this._dom.remove(e);
      }
      _getOrCreateElement(e, i = !1) {
        if (!i) {
          let a = this._parseSelector(e),
            c = this.getTags(a).filter((s) =>
              this._containsAttributes(e, s)
            )[0];
          if (c !== void 0) return c;
        }
        let r = this._dom.createElement("meta");
        return (
          this._setMetaElementAttributes(e, r),
          this._doc.getElementsByTagName("head")[0].appendChild(r),
          r
        );
      }
      _setMetaElementAttributes(e, i) {
        return (
          Object.keys(e).forEach((r) =>
            i.setAttribute(this._getMetaKeyMap(r), e[r])
          ),
          i
        );
      }
      _parseSelector(e) {
        let i = e.name ? "name" : "property";
        return `${i}="${e[i]}"`;
      }
      _containsAttributes(e, i) {
        return Object.keys(e).every(
          (r) => i.getAttribute(this._getMetaKeyMap(r)) === e[r]
        );
      }
      _getMetaKeyMap(e) {
        return Xd[e] || e;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(H));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Xd = { httpEquiv: "http-equiv" },
  zn = (() => {
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
        this.ɵfac = function (i) {
          return new (i || t)(b(H));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
var Ti = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({
          token: t,
          factory: function (i) {
            let r = null;
            return i ? (r = new (i || t)()) : (r = b(Jd)), r;
          },
          providedIn: "root",
        });
      }
    }
    return t;
  })(),
  Jd = (() => {
    class t extends Ti {
      constructor(e) {
        super(), (this._doc = e);
      }
      sanitize(e, i) {
        if (i == null) return null;
        switch (e) {
          case Ie.NONE:
            return i;
          case Ie.HTML:
            return Bt(i, "HTML") ? Vt(i) : $a(this._doc, String(i)).toString();
          case Ie.STYLE:
            return Bt(i, "Style") ? Vt(i) : i;
          case Ie.SCRIPT:
            if (Bt(i, "Script")) return Vt(i);
            throw new W(5200, !1);
          case Ie.URL:
            return Bt(i, "URL") ? Vt(i) : Ga(String(i));
          case Ie.RESOURCE_URL:
            if (Bt(i, "ResourceURL")) return Vt(i);
            throw new W(5201, !1);
          default:
            throw new W(5202, !1);
        }
      }
      bypassSecurityTrustHtml(e) {
        return Va(e);
      }
      bypassSecurityTrustStyle(e) {
        return Ba(e);
      }
      bypassSecurityTrustScript(e) {
        return za(e);
      }
      bypassSecurityTrustUrl(e) {
        return Ua(e);
      }
      bypassSecurityTrustResourceUrl(e) {
        return Ha(e);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(H));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  so = (function (t) {
    return (
      (t[(t.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
      (t[(t.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
      (t[(t.I18nSupport = 2)] = "I18nSupport"),
      (t[(t.EventReplay = 3)] = "EventReplay"),
      t
    );
  })(so || {});
function Qs(...t) {
  let n = [],
    e = new Set(),
    i = e.has(so.HttpTransferCacheOptions);
  for (let { ɵproviders: r, ɵkind: o } of t) e.add(o), r.length && n.push(r);
  return Ue([[], ns(), e.has(so.NoHttpTransferCache) || i ? [] : Ls({}), n]);
}
var F = "primary",
  Zi = Symbol("RouteTitle"),
  fo = class {
    constructor(n) {
      this.params = n || {};
    }
    has(n) {
      return Object.prototype.hasOwnProperty.call(this.params, n);
    }
    get(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(n) {
      if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function Yt(t) {
  return new fo(t);
}
function tu(t, n, e) {
  let i = e.path.split("/");
  if (
    i.length > t.length ||
    (e.pathMatch === "full" && (n.hasChildren() || i.length < t.length))
  )
    return null;
  let r = {};
  for (let o = 0; o < i.length; o++) {
    let a = i[o],
      c = t[o];
    if (a[0] === ":") r[a.substring(1)] = c;
    else if (a !== c.path) return null;
  }
  return { consumed: t.slice(0, i.length), posParams: r };
}
function iu(t, n) {
  if (t.length !== n.length) return !1;
  for (let e = 0; e < t.length; ++e) if (!We(t[e], n[e])) return !1;
  return !0;
}
function We(t, n) {
  let e = t ? go(t) : void 0,
    i = n ? go(n) : void 0;
  if (!e || !i || e.length != i.length) return !1;
  let r;
  for (let o = 0; o < e.length; o++)
    if (((r = e[o]), !oc(t[r], n[r]))) return !1;
  return !0;
}
function go(t) {
  return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)];
}
function oc(t, n) {
  if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length) return !1;
    let e = [...t].sort(),
      i = [...n].sort();
    return e.every((r, o) => i[o] === r);
  } else return t === n;
}
function ac(t) {
  return t.length > 0 ? t[t.length - 1] : null;
}
function pt(t) {
  return Ye(t) ? t : kn(t) ? ve(Promise.resolve(t)) : I(t);
}
var nu = { exact: cc, subset: lc },
  sc = { exact: ru, subset: ou, ignored: () => !0 };
function Xs(t, n, e) {
  return (
    nu[e.paths](t.root, n.root, e.matrixParams) &&
    sc[e.queryParams](t.queryParams, n.queryParams) &&
    !(e.fragment === "exact" && t.fragment !== n.fragment)
  );
}
function ru(t, n) {
  return We(t, n);
}
function cc(t, n, e) {
  if (
    !At(t.segments, n.segments) ||
    !$n(t.segments, n.segments, e) ||
    t.numberOfChildren !== n.numberOfChildren
  )
    return !1;
  for (let i in n.children)
    if (!t.children[i] || !cc(t.children[i], n.children[i], e)) return !1;
  return !0;
}
function ou(t, n) {
  return (
    Object.keys(n).length <= Object.keys(t).length &&
    Object.keys(n).every((e) => oc(t[e], n[e]))
  );
}
function lc(t, n, e) {
  return dc(t, n, n.segments, e);
}
function dc(t, n, e, i) {
  if (t.segments.length > e.length) {
    let r = t.segments.slice(0, e.length);
    return !(!At(r, e) || n.hasChildren() || !$n(r, e, i));
  } else if (t.segments.length === e.length) {
    if (!At(t.segments, e) || !$n(t.segments, e, i)) return !1;
    for (let r in n.children)
      if (!t.children[r] || !lc(t.children[r], n.children[r], i)) return !1;
    return !0;
  } else {
    let r = e.slice(0, t.segments.length),
      o = e.slice(t.segments.length);
    return !At(t.segments, r) || !$n(t.segments, r, i) || !t.children[F]
      ? !1
      : dc(t.children[F], n, o, i);
  }
}
function $n(t, n, e) {
  return n.every((i, r) => sc[e](t[r].parameters, i.parameters));
}
var et = class {
    constructor(n = new G([], {}), e = {}, i = null) {
      (this.root = n), (this.queryParams = e), (this.fragment = i);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Yt(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return cu.serialize(this);
    }
  },
  G = class {
    constructor(n, e) {
      (this.segments = n),
        (this.children = e),
        (this.parent = null),
        Object.values(e).forEach((i) => (i.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return qn(this);
    }
  },
  Mt = class {
    constructor(n, e) {
      (this.path = n), (this.parameters = e);
    }
    get parameterMap() {
      return (this._parameterMap ??= Yt(this.parameters)), this._parameterMap;
    }
    toString() {
      return mc(this);
    }
  };
function au(t, n) {
  return At(t, n) && t.every((e, i) => We(e.parameters, n[i].parameters));
}
function At(t, n) {
  return t.length !== n.length ? !1 : t.every((e, i) => e.path === n[i].path);
}
function su(t, n) {
  let e = [];
  return (
    Object.entries(t.children).forEach(([i, r]) => {
      i === F && (e = e.concat(n(r, i)));
    }),
    Object.entries(t.children).forEach(([i, r]) => {
      i !== F && (e = e.concat(n(r, i)));
    }),
    e
  );
}
var Uo = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({
          token: t,
          factory: () => new Li(),
          providedIn: "root",
        });
      }
    }
    return t;
  })(),
  Li = class {
    parse(n) {
      let e = new vo(n);
      return new et(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment()
      );
    }
    serialize(n) {
      let e = `/${Ri(n.root, !0)}`,
        i = uu(n.queryParams),
        r = typeof n.fragment == "string" ? `#${lu(n.fragment)}` : "";
      return `${e}${i}${r}`;
    }
  },
  cu = new Li();
function qn(t) {
  return t.segments.map((n) => mc(n)).join("/");
}
function Ri(t, n) {
  if (!t.hasChildren()) return qn(t);
  if (n) {
    let e = t.children[F] ? Ri(t.children[F], !1) : "",
      i = [];
    return (
      Object.entries(t.children).forEach(([r, o]) => {
        r !== F && i.push(`${r}:${Ri(o, !1)}`);
      }),
      i.length > 0 ? `${e}(${i.join("//")})` : e
    );
  } else {
    let e = su(t, (i, r) =>
      r === F ? [Ri(t.children[F], !1)] : [`${r}:${Ri(i, !1)}`]
    );
    return Object.keys(t.children).length === 1 && t.children[F] != null
      ? `${qn(t)}/${e[0]}`
      : `${qn(t)}/(${e.join("//")})`;
  }
}
function uc(t) {
  return encodeURIComponent(t)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function Hn(t) {
  return uc(t).replace(/%3B/gi, ";");
}
function lu(t) {
  return encodeURI(t);
}
function bo(t) {
  return uc(t)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Wn(t) {
  return decodeURIComponent(t);
}
function Js(t) {
  return Wn(t.replace(/\+/g, "%20"));
}
function mc(t) {
  return `${bo(t.path)}${du(t.parameters)}`;
}
function du(t) {
  return Object.entries(t)
    .map(([n, e]) => `;${bo(n)}=${bo(e)}`)
    .join("");
}
function uu(t) {
  let n = Object.entries(t)
    .map(([e, i]) =>
      Array.isArray(i)
        ? i.map((r) => `${Hn(e)}=${Hn(r)}`).join("&")
        : `${Hn(e)}=${Hn(i)}`
    )
    .filter((e) => e);
  return n.length ? `?${n.join("&")}` : "";
}
var mu = /^[^\/()?;#]+/;
function uo(t) {
  let n = t.match(mu);
  return n ? n[0] : "";
}
var hu = /^[^\/()?;=#]+/;
function pu(t) {
  let n = t.match(hu);
  return n ? n[0] : "";
}
var fu = /^[^=?&#]+/;
function gu(t) {
  let n = t.match(fu);
  return n ? n[0] : "";
}
var bu = /^[^&#]+/;
function vu(t) {
  let n = t.match(bu);
  return n ? n[0] : "";
}
var vo = class {
  constructor(n) {
    (this.url = n), (this.remaining = n);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new G([], {})
        : new G([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let n = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(n);
      while (this.consumeOptional("&"));
    return n;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let n = [];
    for (
      this.peekStartsWith("(") || n.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), n.push(this.parseSegment());
    let e = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (e = this.parseParens(!0)));
    let i = {};
    return (
      this.peekStartsWith("(") && (i = this.parseParens(!1)),
      (n.length > 0 || Object.keys(e).length > 0) && (i[F] = new G(n, e)),
      i
    );
  }
  parseSegment() {
    let n = uo(this.remaining);
    if (n === "" && this.peekStartsWith(";")) throw new W(4009, !1);
    return this.capture(n), new Mt(Wn(n), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let n = {};
    for (; this.consumeOptional(";"); ) this.parseParam(n);
    return n;
  }
  parseParam(n) {
    let e = pu(this.remaining);
    if (!e) return;
    this.capture(e);
    let i = "";
    if (this.consumeOptional("=")) {
      let r = uo(this.remaining);
      r && ((i = r), this.capture(i));
    }
    n[Wn(e)] = Wn(i);
  }
  parseQueryParam(n) {
    let e = gu(this.remaining);
    if (!e) return;
    this.capture(e);
    let i = "";
    if (this.consumeOptional("=")) {
      let a = vu(this.remaining);
      a && ((i = a), this.capture(i));
    }
    let r = Js(e),
      o = Js(i);
    if (n.hasOwnProperty(r)) {
      let a = n[r];
      Array.isArray(a) || ((a = [a]), (n[r] = a)), a.push(o);
    } else n[r] = o;
  }
  parseParens(n) {
    let e = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let i = uo(this.remaining),
        r = this.remaining[i.length];
      if (r !== "/" && r !== ")" && r !== ";") throw new W(4010, !1);
      let o;
      i.indexOf(":") > -1
        ? ((o = i.slice(0, i.indexOf(":"))), this.capture(o), this.capture(":"))
        : n && (o = F);
      let a = this.parseChildren();
      (e[o] = Object.keys(a).length === 1 ? a[F] : new G([], a)),
        this.consumeOptional("//");
    }
    return e;
  }
  peekStartsWith(n) {
    return this.remaining.startsWith(n);
  }
  consumeOptional(n) {
    return this.peekStartsWith(n)
      ? ((this.remaining = this.remaining.substring(n.length)), !0)
      : !1;
  }
  capture(n) {
    if (!this.consumeOptional(n)) throw new W(4011, !1);
  }
};
function hc(t) {
  return t.segments.length > 0 ? new G([], { [F]: t }) : t;
}
function pc(t) {
  let n = {};
  for (let [i, r] of Object.entries(t.children)) {
    let o = pc(r);
    if (i === F && o.segments.length === 0 && o.hasChildren())
      for (let [a, c] of Object.entries(o.children)) n[a] = c;
    else (o.segments.length > 0 || o.hasChildren()) && (n[i] = o);
  }
  let e = new G(t.segments, n);
  return _u(e);
}
function _u(t) {
  if (t.numberOfChildren === 1 && t.children[F]) {
    let n = t.children[F];
    return new G(t.segments.concat(n.segments), n.children);
  }
  return t;
}
function Vi(t) {
  return t instanceof et;
}
function yu(t, n, e = null, i = null) {
  let r = fc(t);
  return gc(r, n, e, i);
}
function fc(t) {
  let n;
  function e(o) {
    let a = {};
    for (let s of o.children) {
      let d = e(s);
      a[s.outlet] = d;
    }
    let c = new G(o.url, a);
    return o === t && (n = c), c;
  }
  let i = e(t.root),
    r = hc(i);
  return n ?? r;
}
function gc(t, n, e, i) {
  let r = t;
  for (; r.parent; ) r = r.parent;
  if (n.length === 0) return mo(r, r, r, e, i);
  let o = xu(n);
  if (o.toRoot()) return mo(r, r, new G([], {}), e, i);
  let a = Cu(o, r, t),
    c = a.processChildren
      ? Pi(a.segmentGroup, a.index, o.commands)
      : vc(a.segmentGroup, a.index, o.commands);
  return mo(r, a.segmentGroup, c, e, i);
}
function Zn(t) {
  return typeof t == "object" && t != null && !t.outlets && !t.segmentPath;
}
function Bi(t) {
  return typeof t == "object" && t != null && t.outlets;
}
function mo(t, n, e, i, r) {
  let o = {};
  i &&
    Object.entries(i).forEach(([s, d]) => {
      o[s] = Array.isArray(d) ? d.map((h) => `${h}`) : `${d}`;
    });
  let a;
  t === n ? (a = e) : (a = bc(t, n, e));
  let c = hc(pc(a));
  return new et(c, o, r);
}
function bc(t, n, e) {
  let i = {};
  return (
    Object.entries(t.children).forEach(([r, o]) => {
      o === n ? (i[r] = e) : (i[r] = bc(o, n, e));
    }),
    new G(t.segments, i)
  );
}
var Kn = class {
  constructor(n, e, i) {
    if (
      ((this.isAbsolute = n),
      (this.numberOfDoubleDots = e),
      (this.commands = i),
      n && i.length > 0 && Zn(i[0]))
    )
      throw new W(4003, !1);
    let r = i.find(Bi);
    if (r && r !== ac(i)) throw new W(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function xu(t) {
  if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new Kn(!0, 0, t);
  let n = 0,
    e = !1,
    i = t.reduce((r, o, a) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let c = {};
          return (
            Object.entries(o.outlets).forEach(([s, d]) => {
              c[s] = typeof d == "string" ? d.split("/") : d;
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
                ? n++
                : c != "" && r.push(c));
          }),
          r)
        : [...r, o];
    }, []);
  return new Kn(e, n, i);
}
var Wt = class {
  constructor(n, e, i) {
    (this.segmentGroup = n), (this.processChildren = e), (this.index = i);
  }
};
function Cu(t, n, e) {
  if (t.isAbsolute) return new Wt(n, !0, 0);
  if (!e) return new Wt(n, !1, NaN);
  if (e.parent === null) return new Wt(e, !0, 0);
  let i = Zn(t.commands[0]) ? 0 : 1,
    r = e.segments.length - 1 + i;
  return wu(e, r, t.numberOfDoubleDots);
}
function wu(t, n, e) {
  let i = t,
    r = n,
    o = e;
  for (; o > r; ) {
    if (((o -= r), (i = i.parent), !i)) throw new W(4005, !1);
    r = i.segments.length;
  }
  return new Wt(i, !1, r - o);
}
function Iu(t) {
  return Bi(t[0]) ? t[0].outlets : { [F]: t };
}
function vc(t, n, e) {
  if (((t ??= new G([], {})), t.segments.length === 0 && t.hasChildren()))
    return Pi(t, n, e);
  let i = ku(t, n, e),
    r = e.slice(i.commandIndex);
  if (i.match && i.pathIndex < t.segments.length) {
    let o = new G(t.segments.slice(0, i.pathIndex), {});
    return (
      (o.children[F] = new G(t.segments.slice(i.pathIndex), t.children)),
      Pi(o, 0, r)
    );
  } else
    return i.match && r.length === 0
      ? new G(t.segments, {})
      : i.match && !t.hasChildren()
      ? _o(t, n, e)
      : i.match
      ? Pi(t, 0, r)
      : _o(t, n, e);
}
function Pi(t, n, e) {
  if (e.length === 0) return new G(t.segments, {});
  {
    let i = Iu(e),
      r = {};
    if (
      Object.keys(i).some((o) => o !== F) &&
      t.children[F] &&
      t.numberOfChildren === 1 &&
      t.children[F].segments.length === 0
    ) {
      let o = Pi(t.children[F], n, e);
      return new G(t.segments, o.children);
    }
    return (
      Object.entries(i).forEach(([o, a]) => {
        typeof a == "string" && (a = [a]),
          a !== null && (r[o] = vc(t.children[o], n, a));
      }),
      Object.entries(t.children).forEach(([o, a]) => {
        i[o] === void 0 && (r[o] = a);
      }),
      new G(t.segments, r)
    );
  }
}
function ku(t, n, e) {
  let i = 0,
    r = n,
    o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < t.segments.length; ) {
    if (i >= e.length) return o;
    let a = t.segments[r],
      c = e[i];
    if (Bi(c)) break;
    let s = `${c}`,
      d = i < e.length - 1 ? e[i + 1] : null;
    if (r > 0 && s === void 0) break;
    if (s && d && typeof d == "object" && d.outlets === void 0) {
      if (!tc(s, d, a)) return o;
      i += 2;
    } else {
      if (!tc(s, {}, a)) return o;
      i++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: i };
}
function _o(t, n, e) {
  let i = t.segments.slice(0, n),
    r = 0;
  for (; r < e.length; ) {
    let o = e[r];
    if (Bi(o)) {
      let s = Eu(o.outlets);
      return new G(i, s);
    }
    if (r === 0 && Zn(e[0])) {
      let s = t.segments[n];
      i.push(new Mt(s.path, ec(e[0]))), r++;
      continue;
    }
    let a = Bi(o) ? o.outlets[F] : `${o}`,
      c = r < e.length - 1 ? e[r + 1] : null;
    a && c && Zn(c)
      ? (i.push(new Mt(a, ec(c))), (r += 2))
      : (i.push(new Mt(a, {})), r++);
  }
  return new G(i, {});
}
function Eu(t) {
  let n = {};
  return (
    Object.entries(t).forEach(([e, i]) => {
      typeof i == "string" && (i = [i]),
        i !== null && (n[e] = _o(new G([], {}), 0, i));
    }),
    n
  );
}
function ec(t) {
  let n = {};
  return Object.entries(t).forEach(([e, i]) => (n[e] = `${i}`)), n;
}
function tc(t, n, e) {
  return t == e.path && We(n, e.parameters);
}
var Ni = "imperative",
  de = (function (t) {
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
  })(de || {}),
  Fe = class {
    constructor(n, e) {
      (this.id = n), (this.url = e);
    }
  },
  zi = class extends Fe {
    constructor(n, e, i = "imperative", r = null) {
      super(n, e),
        (this.type = de.NavigationStart),
        (this.navigationTrigger = i),
        (this.restoredState = r);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  St = class extends Fe {
    constructor(n, e, i) {
      super(n, e), (this.urlAfterRedirects = i), (this.type = de.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  Me = (function (t) {
    return (
      (t[(t.Redirect = 0)] = "Redirect"),
      (t[(t.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (t[(t.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (t[(t.GuardRejected = 3)] = "GuardRejected"),
      t
    );
  })(Me || {}),
  yo = (function (t) {
    return (
      (t[(t.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (t[(t.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      t
    );
  })(yo || {}),
  Je = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.reason = i),
        (this.code = r),
        (this.type = de.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Dt = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.reason = i),
        (this.code = r),
        (this.type = de.NavigationSkipped);
    }
  },
  Ui = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.error = i),
        (this.target = r),
        (this.type = de.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Yn = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = de.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  xo = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = de.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Co = class extends Fe {
    constructor(n, e, i, r, o) {
      super(n, e),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.shouldActivate = o),
        (this.type = de.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  wo = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = de.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Io = class extends Fe {
    constructor(n, e, i, r) {
      super(n, e),
        (this.urlAfterRedirects = i),
        (this.state = r),
        (this.type = de.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ko = class {
    constructor(n) {
      (this.route = n), (this.type = de.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Eo = class {
    constructor(n) {
      (this.route = n), (this.type = de.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Mo = class {
    constructor(n) {
      (this.snapshot = n), (this.type = de.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Ao = class {
    constructor(n) {
      (this.snapshot = n), (this.type = de.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  So = class {
    constructor(n) {
      (this.snapshot = n), (this.type = de.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Do = class {
    constructor(n) {
      (this.snapshot = n), (this.type = de.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  };
var Hi = class {},
  Qt = class {
    constructor(n, e) {
      (this.url = n), (this.navigationBehaviorOptions = e);
    }
  };
function Mu(t, n) {
  return (
    t.providers &&
      !t._injector &&
      (t._injector = Qa(t.providers, n, `Route: ${t.path}`)),
    t._injector ?? n
  );
}
function ze(t) {
  return t.outlet || F;
}
function Au(t, n) {
  let e = t.filter((i) => ze(i) === n);
  return e.push(...t.filter((i) => ze(i) !== n)), e;
}
function Ki(t) {
  if (!t) return null;
  if (t.routeConfig?._injector) return t.routeConfig._injector;
  for (let n = t.parent; n; n = n.parent) {
    let e = n.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var To = class {
    get injector() {
      return Ki(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(n) {}
    constructor(n) {
      (this.rootInjector = n),
        (this.outlet = null),
        (this.route = null),
        (this.children = new nr(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  nr = (() => {
    class t {
      constructor(e) {
        (this.rootInjector = e), (this.contexts = new Map());
      }
      onChildOutletCreated(e, i) {
        let r = this.getOrCreateContext(e);
        (r.outlet = i), this.contexts.set(e, r);
      }
      onChildOutletDestroyed(e) {
        let i = this.getContext(e);
        i && ((i.outlet = null), (i.attachRef = null));
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let i = this.getContext(e);
        return (
          i || ((i = new To(this.rootInjector)), this.contexts.set(e, i)), i
        );
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(jt));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Qn = class {
    constructor(n) {
      this._root = n;
    }
    get root() {
      return this._root.value;
    }
    parent(n) {
      let e = this.pathFromRoot(n);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(n) {
      let e = Ro(n, this._root);
      return e ? e.children.map((i) => i.value) : [];
    }
    firstChild(n) {
      let e = Ro(n, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(n) {
      let e = Fo(n, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((r) => r.value).filter((r) => r !== n);
    }
    pathFromRoot(n) {
      return Fo(n, this._root).map((e) => e.value);
    }
  };
function Ro(t, n) {
  if (t === n.value) return n;
  for (let e of n.children) {
    let i = Ro(t, e);
    if (i) return i;
  }
  return null;
}
function Fo(t, n) {
  if (t === n.value) return [n];
  for (let e of n.children) {
    let i = Fo(t, e);
    if (i.length) return i.unshift(n), i;
  }
  return [];
}
var Ee = class {
  constructor(n, e) {
    (this.value = n), (this.children = e);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function qt(t) {
  let n = {};
  return t && t.children.forEach((e) => (n[e.value.outlet] = e)), n;
}
var Xn = class extends Qn {
  constructor(n, e) {
    super(n), (this.snapshot = e), Ho(this, n);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function _c(t) {
  let n = Su(t),
    e = new me([new Mt("", {})]),
    i = new me({}),
    r = new me({}),
    o = new me({}),
    a = new me(""),
    c = new Xt(e, i, o, a, r, F, t, n.root);
  return (c.snapshot = n.root), new Xn(new Ee(c, []), n);
}
function Su(t) {
  let n = {},
    e = {},
    i = {},
    r = "",
    o = new Zt([], n, i, r, e, F, t, null, {});
  return new er("", new Ee(o, []));
}
var Xt = class {
  constructor(n, e, i, r, o, a, c, s) {
    (this.urlSubject = n),
      (this.paramsSubject = e),
      (this.queryParamsSubject = i),
      (this.fragmentSubject = r),
      (this.dataSubject = o),
      (this.outlet = a),
      (this.component = c),
      (this._futureSnapshot = s),
      (this.title = this.dataSubject?.pipe(M((d) => d[Zi])) ?? I(void 0)),
      (this.url = n),
      (this.params = e),
      (this.queryParams = i),
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
      (this._paramMap ??= this.params.pipe(M((n) => Yt(n)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(M((n) => Yt(n)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Jn(t, n, e = "emptyOnly") {
  let i,
    { routeConfig: r } = t;
  return (
    n !== null &&
    (e === "always" ||
      r?.path === "" ||
      (!n.component && !n.routeConfig?.loadComponent))
      ? (i = {
          params: g(g({}, n.params), t.params),
          data: g(g({}, n.data), t.data),
          resolve: g(g(g(g({}, t.data), n.data), r?.data), t._resolvedData),
        })
      : (i = {
          params: g({}, t.params),
          data: g({}, t.data),
          resolve: g(g({}, t.data), t._resolvedData ?? {}),
        }),
    r && xc(r) && (i.resolve[Zi] = r.title),
    i
  );
}
var Zt = class {
    get title() {
      return this.data?.[Zi];
    }
    constructor(n, e, i, r, o, a, c, s, d) {
      (this.url = n),
        (this.params = e),
        (this.queryParams = i),
        (this.fragment = r),
        (this.data = o),
        (this.outlet = a),
        (this.component = c),
        (this.routeConfig = s),
        (this._resolve = d);
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
      return (this._paramMap ??= Yt(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= Yt(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let n = this.url.map((i) => i.toString()).join("/"),
        e = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${n}', path:'${e}')`;
    }
  },
  er = class extends Qn {
    constructor(n, e) {
      super(e), (this.url = n), Ho(this, e);
    }
    toString() {
      return yc(this._root);
    }
  };
function Ho(t, n) {
  (n.value._routerState = t), n.children.forEach((e) => Ho(t, e));
}
function yc(t) {
  let n = t.children.length > 0 ? ` { ${t.children.map(yc).join(", ")} } ` : "";
  return `${t.value}${n}`;
}
function ho(t) {
  if (t.snapshot) {
    let n = t.snapshot,
      e = t._futureSnapshot;
    (t.snapshot = e),
      We(n.queryParams, e.queryParams) ||
        t.queryParamsSubject.next(e.queryParams),
      n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment),
      We(n.params, e.params) || t.paramsSubject.next(e.params),
      iu(n.url, e.url) || t.urlSubject.next(e.url),
      We(n.data, e.data) || t.dataSubject.next(e.data);
  } else
    (t.snapshot = t._futureSnapshot),
      t.dataSubject.next(t._futureSnapshot.data);
}
function Oo(t, n) {
  let e = We(t.params, n.params) && au(t.url, n.url),
    i = !t.parent != !n.parent;
  return e && !i && (!t.parent || Oo(t.parent, n.parent));
}
function xc(t) {
  return typeof t.title == "string" || t.title === null;
}
var Du = (() => {
    class t {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = F),
          (this.activateEvents = new ie()),
          (this.deactivateEvents = new ie()),
          (this.attachEvents = new ie()),
          (this.detachEvents = new ie()),
          (this.parentContexts = x(nr)),
          (this.location = x(Ka)),
          (this.changeDetector = x(ge)),
          (this.inputBinder = x(Go, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: i, previousValue: r } = e.name;
          if (i) return;
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
        if (!this.activated) throw new W(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new W(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new W(4012, !1);
        this.location.detach();
        let e = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(e.instance),
          e
        );
      }
      attach(e, i) {
        (this.activated = e),
          (this._activatedRoute = i),
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
      activateWith(e, i) {
        if (this.isActivated) throw new W(4013, !1);
        this._activatedRoute = e;
        let r = this.location,
          a = e.snapshot.component,
          c = this.parentContexts.getOrCreateContext(this.name).children,
          s = new Po(e, c, r.injector);
        (this.activated = r.createComponent(a, {
          index: r.length,
          injector: s,
          environmentInjector: i,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵdir = J({
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
          features: [He],
        });
      }
    }
    return t;
  })(),
  Po = class t {
    __ngOutletInjector(n) {
      return new t(this.route, this.childContexts, n);
    }
    constructor(n, e, i) {
      (this.route = n), (this.childContexts = e), (this.parent = i);
    }
    get(n, e) {
      return n === Xt
        ? this.route
        : n === nr
        ? this.childContexts
        : this.parent.get(n, e);
    }
  },
  Go = new E("");
function Tu(t, n, e) {
  let i = Gi(t, n._root, e ? e._root : void 0);
  return new Xn(i, n);
}
function Gi(t, n, e) {
  if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let i = e.value;
    i._futureSnapshot = n.value;
    let r = Ru(t, n, e);
    return new Ee(i, r);
  } else {
    if (t.shouldAttach(n.value)) {
      let o = t.retrieve(n.value);
      if (o !== null) {
        let a = o.route;
        return (
          (a.value._futureSnapshot = n.value),
          (a.children = n.children.map((c) => Gi(t, c))),
          a
        );
      }
    }
    let i = Fu(n.value),
      r = n.children.map((o) => Gi(t, o));
    return new Ee(i, r);
  }
}
function Ru(t, n, e) {
  return n.children.map((i) => {
    for (let r of e.children)
      if (t.shouldReuseRoute(i.value, r.value.snapshot)) return Gi(t, i, r);
    return Gi(t, i);
  });
}
function Fu(t) {
  return new Xt(
    new me(t.url),
    new me(t.params),
    new me(t.queryParams),
    new me(t.fragment),
    new me(t.data),
    t.outlet,
    t.component,
    t
  );
}
var $i = class {
    constructor(n, e) {
      (this.redirectTo = n), (this.navigationBehaviorOptions = e);
    }
  },
  Cc = "ngNavigationCancelingError";
function tr(t, n) {
  let { redirectTo: e, navigationBehaviorOptions: i } = Vi(n)
      ? { redirectTo: n, navigationBehaviorOptions: void 0 }
      : n,
    r = wc(!1, Me.Redirect);
  return (r.url = e), (r.navigationBehaviorOptions = i), r;
}
function wc(t, n) {
  let e = new Error(`NavigationCancelingError: ${t || ""}`);
  return (e[Cc] = !0), (e.cancellationCode = n), e;
}
function Ou(t) {
  return Ic(t) && Vi(t.url);
}
function Ic(t) {
  return !!t && t[Cc];
}
var Pu = (t, n, e, i) =>
    M(
      (r) => (
        new No(n, r.targetRouterState, r.currentRouterState, e, i).activate(t),
        r
      )
    ),
  No = class {
    constructor(n, e, i, r, o) {
      (this.routeReuseStrategy = n),
        (this.futureState = e),
        (this.currState = i),
        (this.forwardEvent = r),
        (this.inputBindingEnabled = o);
    }
    activate(n) {
      let e = this.futureState._root,
        i = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, i, n),
        ho(this.futureState.root),
        this.activateChildRoutes(e, i, n);
    }
    deactivateChildRoutes(n, e, i) {
      let r = qt(e);
      n.children.forEach((o) => {
        let a = o.value.outlet;
        this.deactivateRoutes(o, r[a], i), delete r[a];
      }),
        Object.values(r).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, i);
        });
    }
    deactivateRoutes(n, e, i) {
      let r = n.value,
        o = e ? e.value : null;
      if (r === o)
        if (r.component) {
          let a = i.getContext(r.outlet);
          a && this.deactivateChildRoutes(n, e, a.children);
        } else this.deactivateChildRoutes(n, e, i);
      else o && this.deactivateRouteAndItsChildren(e, i);
    }
    deactivateRouteAndItsChildren(n, e) {
      n.value.component &&
      this.routeReuseStrategy.shouldDetach(n.value.snapshot)
        ? this.detachAndStoreRouteSubtree(n, e)
        : this.deactivateRouteAndOutlet(n, e);
    }
    detachAndStoreRouteSubtree(n, e) {
      let i = e.getContext(n.value.outlet),
        r = i && n.value.component ? i.children : e,
        o = qt(n);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
      if (i && i.outlet) {
        let a = i.outlet.detach(),
          c = i.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, {
          componentRef: a,
          route: n,
          contexts: c,
        });
      }
    }
    deactivateRouteAndOutlet(n, e) {
      let i = e.getContext(n.value.outlet),
        r = i && n.value.component ? i.children : e,
        o = qt(n);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
      i &&
        (i.outlet && (i.outlet.deactivate(), i.children.onOutletDeactivated()),
        (i.attachRef = null),
        (i.route = null));
    }
    activateChildRoutes(n, e, i) {
      let r = qt(e);
      n.children.forEach((o) => {
        this.activateRoutes(o, r[o.value.outlet], i),
          this.forwardEvent(new Do(o.value.snapshot));
      }),
        n.children.length && this.forwardEvent(new Ao(n.value.snapshot));
    }
    activateRoutes(n, e, i) {
      let r = n.value,
        o = e ? e.value : null;
      if ((ho(r), r === o))
        if (r.component) {
          let a = i.getOrCreateContext(r.outlet);
          this.activateChildRoutes(n, e, a.children);
        } else this.activateChildRoutes(n, e, i);
      else if (r.component) {
        let a = i.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let c = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            a.children.onOutletReAttached(c.contexts),
            (a.attachRef = c.componentRef),
            (a.route = c.route.value),
            a.outlet && a.outlet.attach(c.componentRef, c.route.value),
            ho(c.route.value),
            this.activateChildRoutes(n, null, a.children);
        } else
          (a.attachRef = null),
            (a.route = r),
            a.outlet && a.outlet.activateWith(r, a.injector),
            this.activateChildRoutes(n, null, a.children);
      } else this.activateChildRoutes(n, null, i);
    }
  },
  ir = class {
    constructor(n) {
      (this.path = n), (this.route = this.path[this.path.length - 1]);
    }
  },
  Kt = class {
    constructor(n, e) {
      (this.component = n), (this.route = e);
    }
  };
function Nu(t, n, e) {
  let i = t._root,
    r = n ? n._root : null;
  return Fi(i, r, e, [i.value]);
}
function ju(t) {
  let n = t.routeConfig ? t.routeConfig.canActivateChild : null;
  return !n || n.length === 0 ? null : { node: t, guards: n };
}
function ei(t, n) {
  let e = Symbol(),
    i = n.get(t, e);
  return i === e ? (typeof t == "function" && !Pa(t) ? t : n.get(t)) : i;
}
function Fi(
  t,
  n,
  e,
  i,
  r = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = qt(n);
  return (
    t.children.forEach((a) => {
      Lu(a, o[a.value.outlet], e, i.concat([a.value]), r),
        delete o[a.value.outlet];
    }),
    Object.entries(o).forEach(([a, c]) => ji(c, e.getContext(a), r)),
    r
  );
}
function Lu(
  t,
  n,
  e,
  i,
  r = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let o = t.value,
    a = n ? n.value : null,
    c = e ? e.getContext(t.value.outlet) : null;
  if (a && o.routeConfig === a.routeConfig) {
    let s = Vu(a, o, o.routeConfig.runGuardsAndResolvers);
    s
      ? r.canActivateChecks.push(new ir(i))
      : ((o.data = a.data), (o._resolvedData = a._resolvedData)),
      o.component ? Fi(t, n, c ? c.children : null, i, r) : Fi(t, n, e, i, r),
      s &&
        c &&
        c.outlet &&
        c.outlet.isActivated &&
        r.canDeactivateChecks.push(new Kt(c.outlet.component, a));
  } else
    a && ji(n, c, r),
      r.canActivateChecks.push(new ir(i)),
      o.component
        ? Fi(t, null, c ? c.children : null, i, r)
        : Fi(t, null, e, i, r);
  return r;
}
function Vu(t, n, e) {
  if (typeof e == "function") return e(t, n);
  switch (e) {
    case "pathParamsChange":
      return !At(t.url, n.url);
    case "pathParamsOrQueryParamsChange":
      return !At(t.url, n.url) || !We(t.queryParams, n.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Oo(t, n) || !We(t.queryParams, n.queryParams);
    case "paramsChange":
    default:
      return !Oo(t, n);
  }
}
function ji(t, n, e) {
  let i = qt(t),
    r = t.value;
  Object.entries(i).forEach(([o, a]) => {
    r.component
      ? n
        ? ji(a, n.children.getContext(o), e)
        : ji(a, null, e)
      : ji(a, n, e);
  }),
    r.component
      ? n && n.outlet && n.outlet.isActivated
        ? e.canDeactivateChecks.push(new Kt(n.outlet.component, r))
        : e.canDeactivateChecks.push(new Kt(null, r))
      : e.canDeactivateChecks.push(new Kt(null, r));
}
function Yi(t) {
  return typeof t == "function";
}
function Bu(t) {
  return typeof t == "boolean";
}
function zu(t) {
  return t && Yi(t.canLoad);
}
function Uu(t) {
  return t && Yi(t.canActivate);
}
function Hu(t) {
  return t && Yi(t.canActivateChild);
}
function Gu(t) {
  return t && Yi(t.canDeactivate);
}
function $u(t) {
  return t && Yi(t.canMatch);
}
function kc(t) {
  return t instanceof Sa || t?.name === "EmptyError";
}
var Gn = Symbol("INITIAL_VALUE");
function Jt() {
  return _e((t) =>
    hi(t.map((n) => n.pipe(he(1), mn(Gn)))).pipe(
      M((n) => {
        for (let e of n)
          if (e !== !0) {
            if (e === Gn) return Gn;
            if (e === !1 || qu(e)) return e;
          }
        return !0;
      }),
      Ne((n) => n !== Gn),
      he(1)
    )
  );
}
function qu(t) {
  return Vi(t) || t instanceof $i;
}
function Wu(t, n) {
  return Ae((e) => {
    let {
      targetSnapshot: i,
      currentSnapshot: r,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = e;
    return a.length === 0 && o.length === 0
      ? I(q(g({}, e), { guardsResult: !0 }))
      : Zu(a, i, r, t).pipe(
          Ae((c) => (c && Bu(c) ? Ku(i, o, t, n) : I(c))),
          M((c) => q(g({}, e), { guardsResult: c }))
        );
  });
}
function Zu(t, n, e, i) {
  return ve(t).pipe(
    Ae((r) => em(r.component, r.route, e, n, i)),
    ot((r) => r !== !0, !0)
  );
}
function Ku(t, n, e, i) {
  return ve(n).pipe(
    Qe((r) =>
      _t(
        Qu(r.route.parent, i),
        Yu(r.route, i),
        Ju(t, r.path, e),
        Xu(t, r.route, e)
      )
    ),
    ot((r) => r !== !0, !0)
  );
}
function Yu(t, n) {
  return t !== null && n && n(new So(t)), I(!0);
}
function Qu(t, n) {
  return t !== null && n && n(new Mo(t)), I(!0);
}
function Xu(t, n, e) {
  let i = n.routeConfig ? n.routeConfig.canActivate : null;
  if (!i || i.length === 0) return I(!0);
  let r = i.map((o) =>
    Pt(() => {
      let a = Ki(n) ?? e,
        c = ei(o, a),
        s = Uu(c) ? c.canActivate(n, t) : je(a, () => c(n, t));
      return pt(s).pipe(ot());
    })
  );
  return I(r).pipe(Jt());
}
function Ju(t, n, e) {
  let i = n[n.length - 1],
    o = n
      .slice(0, n.length - 1)
      .reverse()
      .map((a) => ju(a))
      .filter((a) => a !== null)
      .map((a) =>
        Pt(() => {
          let c = a.guards.map((s) => {
            let d = Ki(a.node) ?? e,
              h = ei(s, d),
              v = Hu(h) ? h.canActivateChild(i, t) : je(d, () => h(i, t));
            return pt(v).pipe(ot());
          });
          return I(c).pipe(Jt());
        })
      );
  return I(o).pipe(Jt());
}
function em(t, n, e, i, r) {
  let o = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return I(!0);
  let a = o.map((c) => {
    let s = Ki(n) ?? r,
      d = ei(c, s),
      h = Gu(d) ? d.canDeactivate(t, n, e, i) : je(s, () => d(t, n, e, i));
    return pt(h).pipe(ot());
  });
  return I(a).pipe(Jt());
}
function tm(t, n, e, i) {
  let r = n.canLoad;
  if (r === void 0 || r.length === 0) return I(!0);
  let o = r.map((a) => {
    let c = ei(a, t),
      s = zu(c) ? c.canLoad(n, e) : je(t, () => c(n, e));
    return pt(s);
  });
  return I(o).pipe(Jt(), Ec(i));
}
function Ec(t) {
  return Aa(
    re((n) => {
      if (typeof n != "boolean") throw tr(t, n);
    }),
    M((n) => n === !0)
  );
}
function im(t, n, e, i) {
  let r = n.canMatch;
  if (!r || r.length === 0) return I(!0);
  let o = r.map((a) => {
    let c = ei(a, t),
      s = $u(c) ? c.canMatch(n, e) : je(t, () => c(n, e));
    return pt(s);
  });
  return I(o).pipe(Jt(), Ec(i));
}
var qi = class {
    constructor(n) {
      this.segmentGroup = n || null;
    }
  },
  Wi = class extends Error {
    constructor(n) {
      super(), (this.urlTree = n);
    }
  };
function $t(t) {
  return vt(new qi(t));
}
function nm(t) {
  return vt(new W(4e3, !1));
}
function rm(t) {
  return vt(wc(!1, Me.GuardRejected));
}
var jo = class {
    constructor(n, e) {
      (this.urlSerializer = n), (this.urlTree = e);
    }
    lineralizeSegments(n, e) {
      let i = [],
        r = e.root;
      for (;;) {
        if (((i = i.concat(r.segments)), r.numberOfChildren === 0)) return I(i);
        if (r.numberOfChildren > 1 || !r.children[F])
          return nm(`${n.redirectTo}`);
        r = r.children[F];
      }
    }
    applyRedirectCommands(n, e, i, r, o) {
      if (typeof e != "string") {
        let c = e,
          {
            queryParams: s,
            fragment: d,
            routeConfig: h,
            url: v,
            outlet: O,
            params: P,
            data: N,
            title: A,
          } = r,
          S = je(o, () =>
            c({
              params: P,
              data: N,
              queryParams: s,
              fragment: d,
              routeConfig: h,
              url: v,
              outlet: O,
              title: A,
            })
          );
        if (S instanceof et) throw new Wi(S);
        e = S;
      }
      let a = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        n,
        i
      );
      if (e[0] === "/") throw new Wi(a);
      return a;
    }
    applyRedirectCreateUrlTree(n, e, i, r) {
      let o = this.createSegmentGroup(n, e.root, i, r);
      return new et(
        o,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment
      );
    }
    createQueryParams(n, e) {
      let i = {};
      return (
        Object.entries(n).forEach(([r, o]) => {
          if (typeof o == "string" && o[0] === ":") {
            let c = o.substring(1);
            i[r] = e[c];
          } else i[r] = o;
        }),
        i
      );
    }
    createSegmentGroup(n, e, i, r) {
      let o = this.createSegments(n, e.segments, i, r),
        a = {};
      return (
        Object.entries(e.children).forEach(([c, s]) => {
          a[c] = this.createSegmentGroup(n, s, i, r);
        }),
        new G(o, a)
      );
    }
    createSegments(n, e, i, r) {
      return e.map((o) =>
        o.path[0] === ":" ? this.findPosParam(n, o, r) : this.findOrReturn(o, i)
      );
    }
    findPosParam(n, e, i) {
      let r = i[e.path.substring(1)];
      if (!r) throw new W(4001, !1);
      return r;
    }
    findOrReturn(n, e) {
      let i = 0;
      for (let r of e) {
        if (r.path === n.path) return e.splice(i), r;
        i++;
      }
      return n;
    }
  },
  Lo = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function om(t, n, e, i, r) {
  let o = Mc(t, n, e);
  return o.matched
    ? ((i = Mu(n, i)),
      im(i, n, e, r).pipe(M((a) => (a === !0 ? o : g({}, Lo)))))
    : I(o);
}
function Mc(t, n, e) {
  if (n.path === "**") return am(e);
  if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0)
      ? g({}, Lo)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: e,
          parameters: {},
          positionalParamSegments: {},
        };
  let r = (n.matcher || tu)(e, t, n);
  if (!r) return g({}, Lo);
  let o = {};
  Object.entries(r.posParams ?? {}).forEach(([c, s]) => {
    o[c] = s.path;
  });
  let a =
    r.consumed.length > 0
      ? g(g({}, o), r.consumed[r.consumed.length - 1].parameters)
      : o;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: e.slice(r.consumed.length),
    parameters: a,
    positionalParamSegments: r.posParams ?? {},
  };
}
function am(t) {
  return {
    matched: !0,
    parameters: t.length > 0 ? ac(t).parameters : {},
    consumedSegments: t,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ic(t, n, e, i) {
  return e.length > 0 && lm(t, e, i)
    ? {
        segmentGroup: new G(n, cm(i, new G(e, t.children))),
        slicedSegments: [],
      }
    : e.length === 0 && dm(t, e, i)
    ? {
        segmentGroup: new G(t.segments, sm(t, e, i, t.children)),
        slicedSegments: e,
      }
    : { segmentGroup: new G(t.segments, t.children), slicedSegments: e };
}
function sm(t, n, e, i) {
  let r = {};
  for (let o of e)
    if (rr(t, n, o) && !i[ze(o)]) {
      let a = new G([], {});
      r[ze(o)] = a;
    }
  return g(g({}, i), r);
}
function cm(t, n) {
  let e = {};
  e[F] = n;
  for (let i of t)
    if (i.path === "" && ze(i) !== F) {
      let r = new G([], {});
      e[ze(i)] = r;
    }
  return e;
}
function lm(t, n, e) {
  return e.some((i) => rr(t, n, i) && ze(i) !== F);
}
function dm(t, n, e) {
  return e.some((i) => rr(t, n, i));
}
function rr(t, n, e) {
  return (t.hasChildren() || n.length > 0) && e.pathMatch === "full"
    ? !1
    : e.path === "";
}
function um(t, n, e) {
  return n.length === 0 && !t.children[e];
}
var Vo = class {};
function mm(t, n, e, i, r, o, a = "emptyOnly") {
  return new Bo(t, n, e, i, r, a, o).recognize();
}
var hm = 31,
  Bo = class {
    constructor(n, e, i, r, o, a, c) {
      (this.injector = n),
        (this.configLoader = e),
        (this.rootComponentType = i),
        (this.config = r),
        (this.urlTree = o),
        (this.paramsInheritanceStrategy = a),
        (this.urlSerializer = c),
        (this.applyRedirects = new jo(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(n) {
      return new W(4002, `'${n.segmentGroup}'`);
    }
    recognize() {
      let n = ic(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(n).pipe(
        M(({ children: e, rootSnapshot: i }) => {
          let r = new Ee(i, e),
            o = new er("", r),
            a = yu(i, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (a.queryParams = this.urlTree.queryParams),
            (o.url = this.urlSerializer.serialize(a)),
            { state: o, tree: a }
          );
        })
      );
    }
    match(n) {
      let e = new Zt(
        [],
        Object.freeze({}),
        Object.freeze(g({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        F,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(this.injector, this.config, n, F, e).pipe(
        M((i) => ({ children: i, rootSnapshot: e })),
        nt((i) => {
          if (i instanceof Wi)
            return (this.urlTree = i.urlTree), this.match(i.urlTree.root);
          throw i instanceof qi ? this.noMatchError(i) : i;
        })
      );
    }
    processSegmentGroup(n, e, i, r, o) {
      return i.segments.length === 0 && i.hasChildren()
        ? this.processChildren(n, e, i, o)
        : this.processSegment(n, e, i, i.segments, r, !0, o).pipe(
            M((a) => (a instanceof Ee ? [a] : []))
          );
    }
    processChildren(n, e, i, r) {
      let o = [];
      for (let a of Object.keys(i.children))
        a === "primary" ? o.unshift(a) : o.push(a);
      return ve(o).pipe(
        Qe((a) => {
          let c = i.children[a],
            s = Au(e, a);
          return this.processSegmentGroup(n, s, c, a, r);
        }),
        Fa((a, c) => (a.push(...c), a)),
        jr(null),
        Ra(),
        Ae((a) => {
          if (a === null) return $t(i);
          let c = Ac(a);
          return pm(c), I(c);
        })
      );
    }
    processSegment(n, e, i, r, o, a, c) {
      return ve(e).pipe(
        Qe((s) =>
          this.processSegmentAgainstRoute(
            s._injector ?? n,
            e,
            s,
            i,
            r,
            o,
            a,
            c
          ).pipe(
            nt((d) => {
              if (d instanceof qi) return I(null);
              throw d;
            })
          )
        ),
        ot((s) => !!s),
        nt((s) => {
          if (kc(s)) return um(i, r, o) ? I(new Vo()) : $t(i);
          throw s;
        })
      );
    }
    processSegmentAgainstRoute(n, e, i, r, o, a, c, s) {
      return ze(i) !== a && (a === F || !rr(r, o, i))
        ? $t(r)
        : i.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(n, r, i, o, a, s)
        : this.allowRedirects && c
        ? this.expandSegmentAgainstRouteUsingRedirect(n, r, e, i, o, a, s)
        : $t(r);
    }
    expandSegmentAgainstRouteUsingRedirect(n, e, i, r, o, a, c) {
      let {
        matched: s,
        parameters: d,
        consumedSegments: h,
        positionalParamSegments: v,
        remainingSegments: O,
      } = Mc(e, r, o);
      if (!s) return $t(e);
      typeof r.redirectTo == "string" &&
        r.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > hm && (this.allowRedirects = !1));
      let P = new Zt(
          o,
          d,
          Object.freeze(g({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          nc(r),
          ze(r),
          r.component ?? r._loadedComponent ?? null,
          r,
          rc(r)
        ),
        N = Jn(P, c, this.paramsInheritanceStrategy);
      (P.params = Object.freeze(N.params)), (P.data = Object.freeze(N.data));
      let A = this.applyRedirects.applyRedirectCommands(
        h,
        r.redirectTo,
        v,
        P,
        n
      );
      return this.applyRedirects
        .lineralizeSegments(r, A)
        .pipe(Ae((S) => this.processSegment(n, i, e, S.concat(O), a, !1, c)));
    }
    matchSegmentAgainstRoute(n, e, i, r, o, a) {
      let c = om(e, i, r, n, this.urlSerializer);
      return (
        i.path === "**" && (e.children = {}),
        c.pipe(
          _e((s) =>
            s.matched
              ? ((n = i._injector ?? n),
                this.getChildConfig(n, i, r).pipe(
                  _e(({ routes: d }) => {
                    let h = i._loadedInjector ?? n,
                      {
                        parameters: v,
                        consumedSegments: O,
                        remainingSegments: P,
                      } = s,
                      N = new Zt(
                        O,
                        v,
                        Object.freeze(g({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        nc(i),
                        ze(i),
                        i.component ?? i._loadedComponent ?? null,
                        i,
                        rc(i)
                      ),
                      A = Jn(N, a, this.paramsInheritanceStrategy);
                    (N.params = Object.freeze(A.params)),
                      (N.data = Object.freeze(A.data));
                    let { segmentGroup: S, slicedSegments: se } = ic(
                      e,
                      O,
                      P,
                      d
                    );
                    if (se.length === 0 && S.hasChildren())
                      return this.processChildren(h, d, S, N).pipe(
                        M((Q) => new Ee(N, Q))
                      );
                    if (d.length === 0 && se.length === 0)
                      return I(new Ee(N, []));
                    let Ce = ze(i) === o;
                    return this.processSegment(
                      h,
                      d,
                      S,
                      se,
                      Ce ? F : o,
                      !0,
                      N
                    ).pipe(M((Q) => new Ee(N, Q instanceof Ee ? [Q] : [])));
                  })
                ))
              : $t(e)
          )
        )
      );
    }
    getChildConfig(n, e, i) {
      return e.children
        ? I({ routes: e.children, injector: n })
        : e.loadChildren
        ? e._loadedRoutes !== void 0
          ? I({ routes: e._loadedRoutes, injector: e._loadedInjector })
          : tm(n, e, i, this.urlSerializer).pipe(
              Ae((r) =>
                r
                  ? this.configLoader.loadChildren(n, e).pipe(
                      re((o) => {
                        (e._loadedRoutes = o.routes),
                          (e._loadedInjector = o.injector);
                      })
                    )
                  : rm(e)
              )
            )
        : I({ routes: [], injector: n });
    }
  };
function pm(t) {
  t.sort((n, e) =>
    n.value.outlet === F
      ? -1
      : e.value.outlet === F
      ? 1
      : n.value.outlet.localeCompare(e.value.outlet)
  );
}
function fm(t) {
  let n = t.value.routeConfig;
  return n && n.path === "";
}
function Ac(t) {
  let n = [],
    e = new Set();
  for (let i of t) {
    if (!fm(i)) {
      n.push(i);
      continue;
    }
    let r = n.find((o) => i.value.routeConfig === o.value.routeConfig);
    r !== void 0 ? (r.children.push(...i.children), e.add(r)) : n.push(i);
  }
  for (let i of e) {
    let r = Ac(i.children);
    n.push(new Ee(i.value, r));
  }
  return n.filter((i) => !e.has(i));
}
function nc(t) {
  return t.data || {};
}
function rc(t) {
  return t.resolve || {};
}
function gm(t, n, e, i, r, o) {
  return Ae((a) =>
    mm(t, n, e, i, a.extractedUrl, r, o).pipe(
      M(({ state: c, tree: s }) =>
        q(g({}, a), { targetSnapshot: c, urlAfterRedirects: s })
      )
    )
  );
}
function bm(t, n) {
  return Ae((e) => {
    let {
      targetSnapshot: i,
      guards: { canActivateChecks: r },
    } = e;
    if (!r.length) return I(e);
    let o = new Set(r.map((s) => s.route)),
      a = new Set();
    for (let s of o) if (!a.has(s)) for (let d of Sc(s)) a.add(d);
    let c = 0;
    return ve(a).pipe(
      Qe((s) =>
        o.has(s)
          ? vm(s, i, t, n)
          : ((s.data = Jn(s, s.parent, t).resolve), I(void 0))
      ),
      re(() => c++),
      Lr(1),
      Ae((s) => (c === a.size ? I(e) : it))
    );
  });
}
function Sc(t) {
  let n = t.children.map((e) => Sc(e)).flat();
  return [t, ...n];
}
function vm(t, n, e, i) {
  let r = t.routeConfig,
    o = t._resolve;
  return (
    r?.title !== void 0 && !xc(r) && (o[Zi] = r.title),
    _m(o, t, n, i).pipe(
      M(
        (a) => (
          (t._resolvedData = a), (t.data = Jn(t, t.parent, e).resolve), null
        )
      )
    )
  );
}
function _m(t, n, e, i) {
  let r = go(t);
  if (r.length === 0) return I({});
  let o = {};
  return ve(r).pipe(
    Ae((a) =>
      ym(t[a], n, e, i).pipe(
        ot(),
        re((c) => {
          if (c instanceof $i) throw tr(new Li(), c);
          o[a] = c;
        })
      )
    ),
    Lr(1),
    Da(o),
    nt((a) => (kc(a) ? it : vt(a)))
  );
}
function ym(t, n, e, i) {
  let r = Ki(n) ?? i,
    o = ei(t, r),
    a = o.resolve ? o.resolve(n, e) : je(r, () => o(n, e));
  return pt(a);
}
function po(t) {
  return _e((n) => {
    let e = t(n);
    return e ? ve(e).pipe(M(() => n)) : I(n);
  });
}
var Dc = (() => {
    class t {
      buildTitle(e) {
        let i,
          r = e.root;
        for (; r !== void 0; )
          (i = this.getResolvedTitleForRoute(r) ?? i),
            (r = r.children.find((o) => o.outlet === F));
        return i;
      }
      getResolvedTitleForRoute(e) {
        return e.data[Zi];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: () => x(xm), providedIn: "root" });
      }
    }
    return t;
  })(),
  xm = (() => {
    class t extends Dc {
      constructor(e) {
        super(), (this.title = e);
      }
      updateTitle(e) {
        let i = this.buildTitle(e);
        i !== void 0 && this.title.setTitle(i);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(zn));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  $o = new E("", { providedIn: "root", factory: () => ({}) }),
  Cm = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["ng-component"]],
          standalone: !0,
          features: [ne],
          decls: 1,
          vars: 0,
          template: function (i, r) {
            i & 1 && V(0, "router-outlet");
          },
          dependencies: [Du],
          encapsulation: 2,
        });
      }
    }
    return t;
  })();
function qo(t) {
  let n = t.children && t.children.map(qo),
    e = n ? q(g({}, t), { children: n }) : g({}, t);
  return (
    !e.component &&
      !e.loadComponent &&
      (n || e.loadChildren) &&
      e.outlet &&
      e.outlet !== F &&
      (e.component = Cm),
    e
  );
}
var Wo = new E(""),
  wm = (() => {
    class t {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = x($r));
      }
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return I(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let i = pt(e.loadComponent()).pipe(
            M(Tc),
            re((o) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                (e._loadedComponent = o);
            }),
            rt(() => {
              this.componentLoaders.delete(e);
            })
          ),
          r = new Pr(i, () => new ue()).pipe(Or());
        return this.componentLoaders.set(e, r), r;
      }
      loadChildren(e, i) {
        if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
        if (i._loadedRoutes)
          return I({ routes: i._loadedRoutes, injector: i._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(i);
        let o = Im(i, this.compiler, e, this.onLoadEndListener).pipe(
            rt(() => {
              this.childrenLoaders.delete(i);
            })
          ),
          a = new Pr(o, () => new ue()).pipe(Or());
        return this.childrenLoaders.set(i, a), a;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
function Im(t, n, e, i) {
  return pt(t.loadChildren()).pipe(
    M(Tc),
    Ae((r) =>
      r instanceof Ya || Array.isArray(r) ? I(r) : ve(n.compileModuleAsync(r))
    ),
    M((r) => {
      i && i(t);
      let o,
        a,
        c = !1;
      return (
        Array.isArray(r)
          ? ((a = r), (c = !0))
          : ((o = r.create(e).injector),
            (a = o.get(Wo, [], { optional: !0, self: !0 }).flat())),
        { routes: a.map(qo), injector: o }
      );
    })
  );
}
function km(t) {
  return t && typeof t == "object" && "default" in t;
}
function Tc(t) {
  return km(t) ? t.default : t;
}
var Zo = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: () => x(Em), providedIn: "root" });
      }
    }
    return t;
  })(),
  Em = (() => {
    class t {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, i) {
        return e;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Mm = new E("");
var Am = new E(""),
  Sm = (() => {
    class t {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new ue()),
          (this.transitionAbortSubject = new ue()),
          (this.configLoader = x(wm)),
          (this.environmentInjector = x(jt)),
          (this.urlSerializer = x(Uo)),
          (this.rootContexts = x(nr)),
          (this.location = x(An)),
          (this.inputBindingEnabled = x(Go, { optional: !0 }) !== null),
          (this.titleStrategy = x(Dc)),
          (this.options = x($o, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = x(Zo)),
          (this.createViewTransition = x(Mm, { optional: !0 })),
          (this.navigationErrorHandler = x(Am, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => I(void 0)),
          (this.rootComponentType = null);
        let e = (r) => this.events.next(new ko(r)),
          i = (r) => this.events.next(new Eo(r));
        (this.configLoader.onLoadEndListener = i),
          (this.configLoader.onLoadStartListener = e);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let i = ++this.navigationId;
        this.transitions?.next(
          q(g(g({}, this.transitions.value), e), { id: i })
        );
      }
      setupNavigations(e, i, r) {
        return (
          (this.transitions = new me({
            id: 0,
            currentUrlTree: i,
            currentRawUrl: i,
            extractedUrl: this.urlHandlingStrategy.extract(i),
            urlAfterRedirects: this.urlHandlingStrategy.extract(i),
            rawUrl: i,
            extras: {},
            resolve: () => {},
            reject: () => {},
            promise: Promise.resolve(!0),
            source: Ni,
            restoredState: null,
            currentSnapshot: r.snapshot,
            targetSnapshot: null,
            currentRouterState: r,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Ne((o) => o.id !== 0),
            M((o) =>
              q(g({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              })
            ),
            _e((o) => {
              let a = !1,
                c = !1;
              return I(o).pipe(
                _e((s) => {
                  if (this.navigationId > o.id)
                    return (
                      this.cancelNavigationTransition(
                        o,
                        "",
                        Me.SupersededByNewNavigation
                      ),
                      it
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
                        ? q(g({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let d =
                      !e.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    h = s.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!d && h !== "reload") {
                    let v = "";
                    return (
                      this.events.next(
                        new Dt(
                          s.id,
                          this.urlSerializer.serialize(s.rawUrl),
                          v,
                          yo.IgnoredSameUrlNavigation
                        )
                      ),
                      s.resolve(!1),
                      it
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))
                    return I(s).pipe(
                      _e((v) => {
                        let O = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new zi(
                              v.id,
                              this.urlSerializer.serialize(v.extractedUrl),
                              v.source,
                              v.restoredState
                            )
                          ),
                          O !== this.transitions?.getValue()
                            ? it
                            : Promise.resolve(v)
                        );
                      }),
                      gm(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      re((v) => {
                        (o.targetSnapshot = v.targetSnapshot),
                          (o.urlAfterRedirects = v.urlAfterRedirects),
                          (this.currentNavigation = q(
                            g({}, this.currentNavigation),
                            { finalUrl: v.urlAfterRedirects }
                          ));
                        let O = new Yn(
                          v.id,
                          this.urlSerializer.serialize(v.extractedUrl),
                          this.urlSerializer.serialize(v.urlAfterRedirects),
                          v.targetSnapshot
                        );
                        this.events.next(O);
                      })
                    );
                  if (
                    d &&
                    this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)
                  ) {
                    let {
                        id: v,
                        extractedUrl: O,
                        source: P,
                        restoredState: N,
                        extras: A,
                      } = s,
                      S = new zi(v, this.urlSerializer.serialize(O), P, N);
                    this.events.next(S);
                    let se = _c(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = o =
                        q(g({}, s), {
                          targetSnapshot: se,
                          urlAfterRedirects: O,
                          extras: q(g({}, A), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = O),
                      I(o)
                    );
                  } else {
                    let v = "";
                    return (
                      this.events.next(
                        new Dt(
                          s.id,
                          this.urlSerializer.serialize(s.extractedUrl),
                          v,
                          yo.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      s.resolve(!1),
                      it
                    );
                  }
                }),
                re((s) => {
                  let d = new xo(
                    s.id,
                    this.urlSerializer.serialize(s.extractedUrl),
                    this.urlSerializer.serialize(s.urlAfterRedirects),
                    s.targetSnapshot
                  );
                  this.events.next(d);
                }),
                M(
                  (s) => (
                    (this.currentTransition = o =
                      q(g({}, s), {
                        guards: Nu(
                          s.targetSnapshot,
                          s.currentSnapshot,
                          this.rootContexts
                        ),
                      })),
                    o
                  )
                ),
                Wu(this.environmentInjector, (s) => this.events.next(s)),
                re((s) => {
                  if (
                    ((o.guardsResult = s.guardsResult),
                    s.guardsResult && typeof s.guardsResult != "boolean")
                  )
                    throw tr(this.urlSerializer, s.guardsResult);
                  let d = new Co(
                    s.id,
                    this.urlSerializer.serialize(s.extractedUrl),
                    this.urlSerializer.serialize(s.urlAfterRedirects),
                    s.targetSnapshot,
                    !!s.guardsResult
                  );
                  this.events.next(d);
                }),
                Ne((s) =>
                  s.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(s, "", Me.GuardRejected),
                      !1)
                ),
                po((s) => {
                  if (s.guards.canActivateChecks.length)
                    return I(s).pipe(
                      re((d) => {
                        let h = new wo(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot
                        );
                        this.events.next(h);
                      }),
                      _e((d) => {
                        let h = !1;
                        return I(d).pipe(
                          bm(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector
                          ),
                          re({
                            next: () => (h = !0),
                            complete: () => {
                              h ||
                                this.cancelNavigationTransition(
                                  d,
                                  "",
                                  Me.NoDataFromResolver
                                );
                            },
                          })
                        );
                      }),
                      re((d) => {
                        let h = new Io(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot
                        );
                        this.events.next(h);
                      })
                    );
                }),
                po((s) => {
                  let d = (h) => {
                    let v = [];
                    h.routeConfig?.loadComponent &&
                      !h.routeConfig._loadedComponent &&
                      v.push(
                        this.configLoader.loadComponent(h.routeConfig).pipe(
                          re((O) => {
                            h.component = O;
                          }),
                          M(() => {})
                        )
                      );
                    for (let O of h.children) v.push(...d(O));
                    return v;
                  };
                  return hi(d(s.targetSnapshot.root)).pipe(jr(null), he(1));
                }),
                po(() => this.afterPreactivation()),
                _e(() => {
                  let { currentSnapshot: s, targetSnapshot: d } = o,
                    h = this.createViewTransition?.(
                      this.environmentInjector,
                      s.root,
                      d.root
                    );
                  return h ? ve(h).pipe(M(() => o)) : I(o);
                }),
                M((s) => {
                  let d = Tu(
                    e.routeReuseStrategy,
                    s.targetSnapshot,
                    s.currentRouterState
                  );
                  return (
                    (this.currentTransition = o =
                      q(g({}, s), { targetRouterState: d })),
                    (this.currentNavigation.targetRouterState = d),
                    o
                  );
                }),
                re(() => {
                  this.events.next(new Hi());
                }),
                Pu(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (s) => this.events.next(s),
                  this.inputBindingEnabled
                ),
                he(1),
                re({
                  next: (s) => {
                    (a = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new St(
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
                at(
                  this.transitionAbortSubject.pipe(
                    re((s) => {
                      throw s;
                    })
                  )
                ),
                rt(() => {
                  !a &&
                    !c &&
                    this.cancelNavigationTransition(
                      o,
                      "",
                      Me.SupersededByNewNavigation
                    ),
                    this.currentTransition?.id === o.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                nt((s) => {
                  if (((c = !0), Ic(s)))
                    this.events.next(
                      new Je(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        s.message,
                        s.cancellationCode
                      )
                    ),
                      Ou(s)
                        ? this.events.next(
                            new Qt(s.url, s.navigationBehaviorOptions)
                          )
                        : o.resolve(!1);
                  else {
                    let d = new Ui(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      s,
                      o.targetSnapshot ?? void 0
                    );
                    try {
                      let h = je(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(d)
                      );
                      if (h instanceof $i) {
                        let { message: v, cancellationCode: O } = tr(
                          this.urlSerializer,
                          h
                        );
                        this.events.next(
                          new Je(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            v,
                            O
                          )
                        ),
                          this.events.next(
                            new Qt(h.redirectTo, h.navigationBehaviorOptions)
                          );
                      } else {
                        this.events.next(d);
                        let v = e.errorHandler(s);
                        o.resolve(!!v);
                      }
                    } catch (h) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(h);
                    }
                  }
                  return it;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(e, i, r) {
        let o = new Je(
          e.id,
          this.urlSerializer.serialize(e.extractedUrl),
          i,
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
          i =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          e.toString() !== i?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
function Dm(t) {
  return t !== Ni;
}
var Tm = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: () => x(Rm), providedIn: "root" });
      }
    }
    return t;
  })(),
  zo = class {
    shouldDetach(n) {
      return !1;
    }
    store(n, e) {}
    shouldAttach(n) {
      return !1;
    }
    retrieve(n) {
      return null;
    }
    shouldReuseRoute(n, e) {
      return n.routeConfig === e.routeConfig;
    }
  },
  Rm = (() => {
    class t extends zo {
      static {
        this.ɵfac = (() => {
          let e;
          return function (r) {
            return (e || (e = Ge(t)))(r || t);
          };
        })();
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Rc = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: () => x(Fm), providedIn: "root" });
      }
    }
    return t;
  })(),
  Fm = (() => {
    class t extends Rc {
      constructor() {
        super(...arguments),
          (this.location = x(An)),
          (this.urlSerializer = x(Uo)),
          (this.options = x($o, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = x(Zo)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new et()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = _c(null)),
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
        return this.location.subscribe((i) => {
          i.type === "popstate" && e(i.url, i.state);
        });
      }
      handleRouterEvent(e, i) {
        if (e instanceof zi) this.stateMemento = this.createStateMemento();
        else if (e instanceof Dt) this.rawUrlTree = i.initialUrl;
        else if (e instanceof Yn) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !i.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
            this.setBrowserUrl(i.targetBrowserUrl ?? r, i);
          }
        } else
          e instanceof Hi
            ? ((this.currentUrlTree = i.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                i.finalUrl,
                i.initialUrl
              )),
              (this.routerState = i.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !i.extras.skipLocationChange &&
                this.setBrowserUrl(i.targetBrowserUrl ?? this.rawUrlTree, i))
            : e instanceof Je &&
              (e.code === Me.GuardRejected || e.code === Me.NoDataFromResolver)
            ? this.restoreHistory(i)
            : e instanceof Ui
            ? this.restoreHistory(i, !0)
            : e instanceof St &&
              ((this.lastSuccessfulId = e.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(e, i) {
        let r = e instanceof et ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(r) || i.extras.replaceUrl) {
          let o = this.browserPageId,
            a = g(g({}, i.extras.state), this.generateNgRouterState(i.id, o));
          this.location.replaceState(r, "", a);
        } else {
          let o = g(
            g({}, i.extras.state),
            this.generateNgRouterState(i.id, this.browserPageId + 1)
          );
          this.location.go(r, "", o);
        }
      }
      restoreHistory(e, i = !1) {
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
            (i && this.resetState(e), this.resetUrlToCurrentUrlTree());
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
      generateNgRouterState(e, i) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: i }
          : { navigationId: e };
      }
      static {
        this.ɵfac = (() => {
          let e;
          return function (r) {
            return (e || (e = Ge(t)))(r || t);
          };
        })();
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Oi = (function (t) {
    return (
      (t[(t.COMPLETE = 0)] = "COMPLETE"),
      (t[(t.FAILED = 1)] = "FAILED"),
      (t[(t.REDIRECTING = 2)] = "REDIRECTING"),
      t
    );
  })(Oi || {});
function Om(t, n) {
  t.events
    .pipe(
      Ne(
        (e) =>
          e instanceof St ||
          e instanceof Je ||
          e instanceof Ui ||
          e instanceof Dt
      ),
      M((e) =>
        e instanceof St || e instanceof Dt
          ? Oi.COMPLETE
          : (
              e instanceof Je
                ? e.code === Me.Redirect ||
                  e.code === Me.SupersededByNewNavigation
                : !1
            )
          ? Oi.REDIRECTING
          : Oi.FAILED
      ),
      Ne((e) => e !== Oi.REDIRECTING),
      he(1)
    )
    .subscribe(() => {
      n();
    });
}
function Pm(t) {
  throw t;
}
var Nm = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  jm = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Fc = (() => {
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
          (this.console = x(Cn)),
          (this.stateManager = x(Rc)),
          (this.options = x($o, { optional: !0 }) || {}),
          (this.pendingTasks = x(gn)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = x(Sm)),
          (this.urlSerializer = x(Uo)),
          (this.location = x(An)),
          (this.urlHandlingStrategy = x(Zo)),
          (this._events = new ue()),
          (this.errorHandler = this.options.errorHandler || Pm),
          (this.navigated = !1),
          (this.routeReuseStrategy = x(Tm)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = x(Wo, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!x(Go, { optional: !0 })),
          (this.eventsSubscription = new ui()),
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
        let e = this.navigationTransitions.events.subscribe((i) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (r !== null && o !== null) {
              if (
                (this.stateManager.handleRouterEvent(i, o),
                i instanceof Je &&
                  i.code !== Me.Redirect &&
                  i.code !== Me.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (i instanceof St) this.navigated = !0;
              else if (i instanceof Qt) {
                let a = i.navigationBehaviorOptions,
                  c = this.urlHandlingStrategy.merge(i.url, r.currentRawUrl),
                  s = g(
                    {
                      browserUrl: r.extras.browserUrl,
                      info: r.extras.info,
                      skipLocationChange: r.extras.skipLocationChange,
                      replaceUrl:
                        r.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        Dm(r.source),
                    },
                    a
                  );
                this.scheduleNavigation(c, Ni, null, s, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            Vm(i) && this._events.next(i);
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
              Ni,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (e, i) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(e, "popstate", i);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(e, i, r) {
        let o = { replaceUrl: !0 },
          a = r?.navigationId ? r : null;
        if (r) {
          let s = g({}, r);
          delete s.navigationId,
            delete s.ɵrouterPageId,
            Object.keys(s).length !== 0 && (o.state = s);
        }
        let c = this.parseUrl(e);
        this.scheduleNavigation(c, i, a, o);
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
        (this.config = e.map(qo)), (this.navigated = !1);
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
      createUrlTree(e, i = {}) {
        let {
            relativeTo: r,
            queryParams: o,
            fragment: a,
            queryParamsHandling: c,
            preserveFragment: s,
          } = i,
          d = s ? this.currentUrlTree.fragment : a,
          h = null;
        switch (c ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            h = g(g({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
          default:
            h = o || null;
        }
        h !== null && (h = this.removeEmptyProps(h));
        let v;
        try {
          let O = r ? r.snapshot : this.routerState.snapshot.root;
          v = fc(O);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            (v = this.currentUrlTree.root);
        }
        return gc(v, e, h, d ?? null);
      }
      navigateByUrl(e, i = { skipLocationChange: !1 }) {
        let r = Vi(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(o, Ni, null, i);
      }
      navigate(e, i = { skipLocationChange: !1 }) {
        return Lm(e), this.navigateByUrl(this.createUrlTree(e, i), i);
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
      isActive(e, i) {
        let r;
        if (
          (i === !0 ? (r = g({}, Nm)) : i === !1 ? (r = g({}, jm)) : (r = i),
          Vi(e))
        )
          return Xs(this.currentUrlTree, e, r);
        let o = this.parseUrl(e);
        return Xs(this.currentUrlTree, o, r);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (i, [r, o]) => (o != null && (i[r] = o), i),
          {}
        );
      }
      scheduleNavigation(e, i, r, o, a) {
        if (this.disposed) return Promise.resolve(!1);
        let c, s, d;
        a
          ? ((c = a.resolve), (s = a.reject), (d = a.promise))
          : (d = new Promise((v, O) => {
              (c = v), (s = O);
            }));
        let h = this.pendingTasks.add();
        return (
          Om(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(h));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: i,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: c,
            reject: s,
            promise: d,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          d.catch((v) => Promise.reject(v))
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
function Lm(t) {
  for (let n = 0; n < t.length; n++) if (t[n] == null) throw new W(4008, !1);
}
function Vm(t) {
  return !(t instanceof Hi) && !(t instanceof Qt);
}
var Bm = new E("");
function Oc(t, ...n) {
  return Ue([
    { provide: Wo, multi: !0, useValue: t },
    [],
    { provide: Xt, useFactory: zm, deps: [Fc] },
    { provide: En, multi: !0, useFactory: Um },
    n.map((e) => e.ɵproviders),
  ]);
}
function zm(t) {
  return t.routerState.root;
}
function Um() {
  let t = x(Lt);
  return (n) => {
    let e = t.get(yi);
    if (n !== e.components[0]) return;
    let i = t.get(Fc),
      r = t.get(Hm);
    t.get(Gm) === 1 && i.initialNavigation(),
      t.get($m, null, Br.Optional)?.setUpPreloading(),
      t.get(Bm, null, Br.Optional)?.init(),
      i.resetRootComponentType(e.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var Hm = new E("", { factory: () => new ue() }),
  Gm = new E("", { providedIn: "root", factory: () => 1 });
var $m = new E("");
var Pc = [];
var qm = "@",
  Wm = (() => {
    class t {
      constructor(e, i, r, o, a) {
        (this.doc = e),
          (this.delegate = i),
          (this.zone = r),
          (this.animationType = o),
          (this.moduleImpl = a),
          (this._rendererFactoryPromise = null),
          (this.scheduler = x(Za, { optional: !0 })),
          (this.loadingSchedulerFn = x(Zm, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let e = () =>
            this.moduleImpl ?? import("./chunk-Q73QA5BO.js").then((r) => r),
          i;
        return (
          this.loadingSchedulerFn
            ? (i = this.loadingSchedulerFn(e))
            : (i = e()),
          i
            .catch((r) => {
              throw new W(5300, !1);
            })
            .then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: o }) => {
              this._engine = r(this.animationType, this.doc);
              let a = new o(this.delegate, this._engine, this.zone);
              return (this.delegate = a), a;
            })
        );
      }
      createRenderer(e, i) {
        let r = this.delegate.createRenderer(e, i);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == "boolean" &&
          (r.throwOnSyntheticProps = !1);
        let o = new Ko(r);
        return (
          i?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((a) => {
              let c = a.createRenderer(e, i);
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
        this.ɵfac = function (i) {
          bn();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac });
      }
    }
    return t;
  })(),
  Ko = class {
    constructor(n) {
      (this.delegate = n), (this.replay = []), (this.ɵtype = 1);
    }
    use(n) {
      if (((this.delegate = n), this.replay !== null)) {
        for (let e of this.replay) e(n);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(n, e) {
      return this.delegate.createElement(n, e);
    }
    createComment(n) {
      return this.delegate.createComment(n);
    }
    createText(n) {
      return this.delegate.createText(n);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(n, e) {
      this.delegate.appendChild(n, e);
    }
    insertBefore(n, e, i, r) {
      this.delegate.insertBefore(n, e, i, r);
    }
    removeChild(n, e, i) {
      this.delegate.removeChild(n, e, i);
    }
    selectRootElement(n, e) {
      return this.delegate.selectRootElement(n, e);
    }
    parentNode(n) {
      return this.delegate.parentNode(n);
    }
    nextSibling(n) {
      return this.delegate.nextSibling(n);
    }
    setAttribute(n, e, i, r) {
      this.delegate.setAttribute(n, e, i, r);
    }
    removeAttribute(n, e, i) {
      this.delegate.removeAttribute(n, e, i);
    }
    addClass(n, e) {
      this.delegate.addClass(n, e);
    }
    removeClass(n, e) {
      this.delegate.removeClass(n, e);
    }
    setStyle(n, e, i, r) {
      this.delegate.setStyle(n, e, i, r);
    }
    removeStyle(n, e, i) {
      this.delegate.removeStyle(n, e, i);
    }
    setProperty(n, e, i) {
      this.shouldReplay(e) && this.replay.push((r) => r.setProperty(n, e, i)),
        this.delegate.setProperty(n, e, i);
    }
    setValue(n, e) {
      this.delegate.setValue(n, e);
    }
    listen(n, e, i) {
      return (
        this.shouldReplay(e) && this.replay.push((r) => r.listen(n, e, i)),
        this.delegate.listen(n, e, i)
      );
    }
    shouldReplay(n) {
      return this.replay !== null && n.startsWith(qm);
    }
  },
  Zm = new E("");
function Nc(t = "animations") {
  return (
    vi("NgAsyncAnimations"),
    Ue([
      {
        provide: zt,
        useFactory: (n, e, i) => new Wm(n, e, i, t),
        deps: [H, Gt, B],
      },
      {
        provide: Le,
        useValue: t === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var gt = class {},
  jc = (() => {
    class t extends gt {
      getTranslation(e) {
        return I({});
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ge(t)))(r || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  Xi = class {},
  Lc = (() => {
    class t {
      handle(e) {
        return e.key;
      }
      static ɵfac = function (i) {
        return new (i || t)();
      };
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })();
function ar(t, n) {
  if (t === n) return !0;
  if (t === null || n === null) return !1;
  if (t !== t && n !== n) return !0;
  let e = typeof t,
    i = typeof n,
    r,
    o,
    a;
  if (e == i && e == "object")
    if (Array.isArray(t)) {
      if (!Array.isArray(n)) return !1;
      if ((r = t.length) == n.length) {
        for (o = 0; o < r; o++) if (!ar(t[o], n[o])) return !1;
        return !0;
      }
    } else {
      if (Array.isArray(n)) return !1;
      a = Object.create(null);
      for (o in t) {
        if (!ar(t[o], n[o])) return !1;
        a[o] = !0;
      }
      for (o in n) if (!(o in a) && typeof n[o] < "u") return !1;
      return !0;
    }
  return !1;
}
function ft(t) {
  return typeof t < "u" && t !== null;
}
function en(t) {
  return or(t) && !ia(t);
}
function or(t) {
  return typeof t == "object";
}
function ia(t) {
  return Array.isArray(t);
}
function na(t) {
  return typeof t == "string";
}
function Km(t) {
  return typeof t == "function";
}
function Yo(t, n) {
  let e = Object.assign({}, t);
  return or(t)
    ? (or(t) &&
        or(n) &&
        Object.keys(n).forEach((i) => {
          en(n[i])
            ? i in t
              ? (e[i] = Yo(t[i], n[i]))
              : Object.assign(e, { [i]: n[i] })
            : Object.assign(e, { [i]: n[i] });
        }),
      e)
    : Yo({}, n);
}
function Qo(t, n) {
  let e = n.split(".");
  n = "";
  do
    (n += e.shift()),
      ft(t) && ft(t[n]) && (en(t[n]) || ia(t[n]) || !e.length)
        ? ((t = t[n]), (n = ""))
        : e.length
        ? (n += ".")
        : (t = void 0);
  while (e.length);
  return t;
}
function Ym(t, n, e) {
  let i = n.split("."),
    r = t;
  for (let o = 0; o < i.length; o++) {
    let a = i[o];
    o === i.length - 1
      ? (r[a] = e)
      : ((!r[a] || !en(r[a])) && (r[a] = {}), (r = r[a]));
  }
}
var ti = class {},
  Vc = (() => {
    class t extends ti {
      templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
      interpolate(e, i) {
        if (na(e)) return this.interpolateString(e, i);
        if (Km(e)) return this.interpolateFunction(e, i);
      }
      interpolateFunction(e, i) {
        return e(i);
      }
      interpolateString(e, i) {
        return i
          ? e.replace(this.templateMatcher, (r, o) => {
              let a = Qo(i, o);
              return ft(a) ? a : r;
            })
          : e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ge(t)))(r || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  ii = class {},
  Bc = (() => {
    class t extends ii {
      compile(e, i) {
        return e;
      }
      compileTranslations(e, i) {
        return e;
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ge(t)))(r || t);
        };
      })();
      static ɵprov = y({ token: t, factory: t.ɵfac });
    }
    return t;
  })(),
  sr = class {
    defaultLang;
    currentLang = this.defaultLang;
    translations = {};
    langs = [];
    onTranslationChange = new ie();
    onLangChange = new ie();
    onDefaultLangChange = new ie();
  },
  Xo = new E("ISOALTE_TRANSLATE_SERVICE"),
  Jo = new E("USE_DEFAULT_LANG"),
  ea = new E("DEFAULT_LANGUAGE"),
  ta = new E("USE_EXTEND"),
  Qi = (t) => (Ye(t) ? t : I(t)),
  Ji = (() => {
    class t {
      store;
      currentLoader;
      compiler;
      parser;
      missingTranslationHandler;
      useDefaultLang;
      isolate;
      extend;
      loadingTranslations;
      pending = !1;
      _onTranslationChange = new ie();
      _onLangChange = new ie();
      _onDefaultLangChange = new ie();
      _defaultLang;
      _currentLang;
      _langs = [];
      _translations = {};
      _translationRequests = {};
      lastUseLanguage = null;
      get onTranslationChange() {
        return this.isolate
          ? this._onTranslationChange
          : this.store.onTranslationChange;
      }
      get onLangChange() {
        return this.isolate ? this._onLangChange : this.store.onLangChange;
      }
      get onDefaultLangChange() {
        return this.isolate
          ? this._onDefaultLangChange
          : this.store.onDefaultLangChange;
      }
      get defaultLang() {
        return this.isolate ? this._defaultLang : this.store.defaultLang;
      }
      set defaultLang(e) {
        this.isolate ? (this._defaultLang = e) : (this.store.defaultLang = e);
      }
      get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
      }
      set currentLang(e) {
        this.isolate ? (this._currentLang = e) : (this.store.currentLang = e);
      }
      get langs() {
        return this.isolate ? this._langs : this.store.langs;
      }
      set langs(e) {
        this.isolate ? (this._langs = e) : (this.store.langs = e);
      }
      get translations() {
        return this.isolate ? this._translations : this.store.translations;
      }
      set translations(e) {
        this.isolate ? (this._translations = e) : (this.store.translations = e);
      }
      constructor(e, i, r, o, a, c = !0, s = !1, d = !1, h) {
        (this.store = e),
          (this.currentLoader = i),
          (this.compiler = r),
          (this.parser = o),
          (this.missingTranslationHandler = a),
          (this.useDefaultLang = c),
          (this.isolate = s),
          (this.extend = d),
          h && this.setDefaultLang(h);
      }
      setDefaultLang(e) {
        if (e === this.defaultLang) return;
        let i = this.retrieveTranslations(e);
        typeof i < "u"
          ? (this.defaultLang == null && (this.defaultLang = e),
            i.pipe(he(1)).subscribe(() => {
              this.changeDefaultLang(e);
            }))
          : this.changeDefaultLang(e);
      }
      getDefaultLang() {
        return this.defaultLang;
      }
      use(e) {
        if (((this.lastUseLanguage = e), e === this.currentLang))
          return I(this.translations[e]);
        this.currentLang || (this.currentLang = e);
        let i = this.retrieveTranslations(e);
        return Ye(i)
          ? (i.pipe(he(1)).subscribe(() => {
              this.changeLang(e);
            }),
            i)
          : (this.changeLang(e), I(this.translations[e]));
      }
      changeLang(e) {
        e === this.lastUseLanguage &&
          ((this.currentLang = e),
          this.onLangChange.emit({
            lang: e,
            translations: this.translations[e],
          }),
          this.defaultLang == null && this.changeDefaultLang(e));
      }
      retrieveTranslations(e) {
        if (typeof this.translations[e] > "u" || this.extend)
          return (
            (this._translationRequests[e] =
              this._translationRequests[e] ||
              this.loadAndCompileTranslations(e)),
            this._translationRequests[e]
          );
      }
      getTranslation(e) {
        return this.loadAndCompileTranslations(e);
      }
      loadAndCompileTranslations(e) {
        this.pending = !0;
        let i = this.currentLoader.getTranslation(e).pipe(Vr(1), he(1));
        return (
          (this.loadingTranslations = i.pipe(
            M((r) => this.compiler.compileTranslations(r, e)),
            Vr(1),
            he(1)
          )),
          this.loadingTranslations.subscribe({
            next: (r) => {
              (this.translations[e] =
                this.extend && this.translations[e]
                  ? g(g({}, r), this.translations[e])
                  : r),
                this.updateLangs(),
                (this.pending = !1);
            },
            error: (r) => {
              this.pending = !1;
            },
          }),
          i
        );
      }
      setTranslation(e, i, r = !1) {
        let o = this.compiler.compileTranslations(i, e);
        (r || this.extend) && this.translations[e]
          ? (this.translations[e] = Yo(this.translations[e], o))
          : (this.translations[e] = o),
          this.updateLangs(),
          this.onTranslationChange.emit({
            lang: e,
            translations: this.translations[e],
          });
      }
      getLangs() {
        return this.langs;
      }
      addLangs(e) {
        e.forEach((i) => {
          this.langs.indexOf(i) === -1 && this.langs.push(i);
        });
      }
      updateLangs() {
        this.addLangs(Object.keys(this.translations));
      }
      getParsedResultForKey(e, i, r) {
        let o;
        if (
          (e && (o = this.runInterpolation(Qo(e, i), r)),
          o === void 0 &&
            this.defaultLang != null &&
            this.defaultLang !== this.currentLang &&
            this.useDefaultLang &&
            (o = this.runInterpolation(
              Qo(this.translations[this.defaultLang], i),
              r
            )),
          o === void 0)
        ) {
          let a = { key: i, translateService: this };
          typeof r < "u" && (a.interpolateParams = r),
            (o = this.missingTranslationHandler.handle(a));
        }
        return o !== void 0 ? o : i;
      }
      runInterpolation(e, i) {
        if (ia(e)) return e.map((r) => this.runInterpolation(r, i));
        if (en(e)) {
          let r = {};
          for (let o in e) r[o] = this.runInterpolation(e[o], i);
          return r;
        } else return this.parser.interpolate(e, i);
      }
      getParsedResult(e, i, r) {
        if (i instanceof Array) {
          let o = {},
            a = !1;
          for (let s of i)
            (o[s] = this.getParsedResultForKey(e, s, r)), (a = a || Ye(o[s]));
          if (!a) return o;
          let c = i.map((s) => Qi(o[s]));
          return Nt(c).pipe(
            M((s) => {
              let d = {};
              return (
                s.forEach((h, v) => {
                  d[i[v]] = h;
                }),
                d
              );
            })
          );
        }
        return this.getParsedResultForKey(e, i, r);
      }
      get(e, i) {
        if (!ft(e) || !e.length)
          throw new Error('Parameter "key" is required and cannot be empty');
        return this.pending
          ? this.loadingTranslations.pipe(
              Qe((r) => Qi(this.getParsedResult(r, e, i)))
            )
          : Qi(this.getParsedResult(this.translations[this.currentLang], e, i));
      }
      getStreamOnTranslationChange(e, i) {
        if (!ft(e) || !e.length)
          throw new Error('Parameter "key" is required and cannot be empty');
        return _t(
          Pt(() => this.get(e, i)),
          this.onTranslationChange.pipe(
            _e((r) => {
              let o = this.getParsedResult(r.translations, e, i);
              return Qi(o);
            })
          )
        );
      }
      stream(e, i) {
        if (!ft(e) || !e.length) throw new Error('Parameter "key" required');
        return _t(
          Pt(() => this.get(e, i)),
          this.onLangChange.pipe(
            _e((r) => {
              let o = this.getParsedResult(r.translations, e, i);
              return Qi(o);
            })
          )
        );
      }
      instant(e, i) {
        if (!ft(e) || e.length === 0)
          throw new Error('Parameter "key" is required and cannot be empty');
        let r = this.getParsedResult(this.translations[this.currentLang], e, i);
        return Ye(r)
          ? Array.isArray(e)
            ? e.reduce((o, a) => ((o[a] = a), o), {})
            : e
          : r;
      }
      set(e, i, r = this.currentLang) {
        Ym(
          this.translations[r],
          e,
          na(i)
            ? this.compiler.compile(i, r)
            : this.compiler.compileTranslations(i, r)
        ),
          this.updateLangs(),
          this.onTranslationChange.emit({
            lang: r,
            translations: this.translations[r],
          });
      }
      changeDefaultLang(e) {
        (this.defaultLang = e),
          this.onDefaultLangChange.emit({
            lang: e,
            translations: this.translations[e],
          });
      }
      reloadLang(e) {
        return this.resetLang(e), this.loadAndCompileTranslations(e);
      }
      resetLang(e) {
        delete this._translationRequests[e], delete this.translations[e];
      }
      getBrowserLang() {
        if (typeof window > "u" || !window.navigator) return;
        let e = this.getBrowserCultureLang();
        return e ? e.split(/[-_]/)[0] : void 0;
      }
      getBrowserCultureLang() {
        if (!(typeof window > "u" || typeof window.navigator > "u"))
          return window.navigator.languages
            ? window.navigator.languages[0]
            : window.navigator.language ||
                window.navigator.browserLanguage ||
                window.navigator.userLanguage;
      }
      static ɵfac = function (i) {
        return new (i || t)(
          b(sr),
          b(gt),
          b(ii),
          b(ti),
          b(Xi),
          b(Jo),
          b(Xo),
          b(ta),
          b(ea)
        );
      };
      static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
    return t;
  })();
var cr = (() => {
  class t {
    translate;
    _ref;
    value = "";
    lastKey = null;
    lastParams = [];
    onTranslationChange;
    onLangChange;
    onDefaultLangChange;
    constructor(e, i) {
      (this.translate = e), (this._ref = i);
    }
    updateValue(e, i, r) {
      let o = (a) => {
        (this.value = a !== void 0 ? a : e),
          (this.lastKey = e),
          this._ref.markForCheck();
      };
      if (r) {
        let a = this.translate.getParsedResult(r, e, i);
        Ye(a) ? a.subscribe(o) : o(a);
      }
      this.translate.get(e, i).subscribe(o);
    }
    transform(e, ...i) {
      if (!e || !e.length) return e;
      if (ar(e, this.lastKey) && ar(i, this.lastParams)) return this.value;
      let r;
      if (ft(i[0]) && i.length)
        if (na(i[0]) && i[0].length) {
          let o = i[0]
            .replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":')
            .replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
          try {
            r = JSON.parse(o);
          } catch (a) {
            throw new SyntaxError(
              `Wrong parameter in TranslatePipe. Expected a valid Object, received: ${i[0]}`
            );
          }
        } else en(i[0]) && (r = i[0]);
      return (
        (this.lastKey = e),
        (this.lastParams = i),
        this.updateValue(e, r),
        this._dispose(),
        this.onTranslationChange ||
          (this.onTranslationChange =
            this.translate.onTranslationChange.subscribe((o) => {
              this.lastKey &&
                o.lang === this.translate.currentLang &&
                ((this.lastKey = null), this.updateValue(e, r, o.translations));
            })),
        this.onLangChange ||
          (this.onLangChange = this.translate.onLangChange.subscribe((o) => {
            this.lastKey &&
              ((this.lastKey = null), this.updateValue(e, r, o.translations));
          })),
        this.onDefaultLangChange ||
          (this.onDefaultLangChange =
            this.translate.onDefaultLangChange.subscribe(() => {
              this.lastKey && ((this.lastKey = null), this.updateValue(e, r));
            })),
        this.value
      );
    }
    _dispose() {
      typeof this.onTranslationChange < "u" &&
        (this.onTranslationChange.unsubscribe(),
        (this.onTranslationChange = void 0)),
        typeof this.onLangChange < "u" &&
          (this.onLangChange.unsubscribe(), (this.onLangChange = void 0)),
        typeof this.onDefaultLangChange < "u" &&
          (this.onDefaultLangChange.unsubscribe(),
          (this.onDefaultLangChange = void 0));
    }
    ngOnDestroy() {
      this._dispose();
    }
    static ɵfac = function (i) {
      return new (i || t)(_(Ji, 16), _(ge, 16));
    };
    static ɵpipe = hn({ name: "translate", type: t, pure: !1, standalone: !0 });
    static ɵprov = y({ token: t, factory: t.ɵfac });
  }
  return t;
})();
var ni = (() => {
  class t {
    static forRoot(e = {}) {
      return {
        ngModule: t,
        providers: [
          e.loader || { provide: gt, useClass: jc },
          e.compiler || { provide: ii, useClass: Bc },
          e.parser || { provide: ti, useClass: Vc },
          e.missingTranslationHandler || { provide: Xi, useClass: Lc },
          sr,
          { provide: Xo, useValue: e.isolate },
          { provide: Jo, useValue: e.useDefaultLang },
          { provide: ta, useValue: e.extend },
          { provide: ea, useValue: e.defaultLanguage },
          Ji,
        ],
      };
    }
    static forChild(e = {}) {
      return {
        ngModule: t,
        providers: [
          e.loader || { provide: gt, useClass: jc },
          e.compiler || { provide: ii, useClass: Bc },
          e.parser || { provide: ti, useClass: Vc },
          e.missingTranslationHandler || { provide: Xi, useClass: Lc },
          { provide: Xo, useValue: e.isolate },
          { provide: Jo, useValue: e.useDefaultLang },
          { provide: ta, useValue: e.extend },
          { provide: ea, useValue: e.defaultLanguage },
          Ji,
        ],
      };
    }
    static ɵfac = function (i) {
      return new (i || t)();
    };
    static ɵmod = R({ type: t });
    static ɵinj = T({});
  }
  return t;
})();
var lr = class {
  http;
  prefix;
  suffix;
  constructor(n, e = "/assets/i18n/", i = ".json") {
    (this.http = n), (this.prefix = e), (this.suffix = i);
  }
  getTranslation(n) {
    return this.http.get(`${this.prefix}${n}${this.suffix}`);
  }
};
var Qm = (() => {
  class t extends On {
    constructor(e, i, r) {
      super(e, i, r);
    }
    ngOnDestroy() {
      this.flush();
    }
    static {
      this.ɵfac = function (i) {
        return new (i || t)(b(H), b(wi), b(Fn));
      };
    }
    static {
      this.ɵprov = y({ token: t, factory: t.ɵfac });
    }
  }
  return t;
})();
function Xm() {
  return new hs();
}
function Jm(t, n, e) {
  return new fs(t, n, e);
}
var Hc = [
    { provide: Fn, useFactory: Xm },
    { provide: On, useClass: Qm },
    { provide: zt, useFactory: Jm, deps: [Gt, On, B] },
  ],
  Uc = [
    { provide: wi, useFactory: () => new ps() },
    { provide: Le, useValue: "BrowserAnimations" },
    ...Hc,
  ],
  eh = [
    { provide: wi, useClass: ms },
    { provide: Le, useValue: "NoopAnimations" },
    ...Hc,
  ],
  Gc = (() => {
    class t {
      static withConfig(e) {
        return { ngModule: t, providers: e.disableAnimations ? eh : Uc };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ providers: Uc, imports: [Ks] });
      }
    }
    return t;
  })();
var th = (t) => new lr(t, "./i18n/", ".json"),
  $c = {
    providers: [
      es({ eventCoalescing: !0 }),
      Oc(Pc),
      Qs(),
      Nc(),
      Ns(js()),
      zr([ni.forRoot({ loader: { provide: gt, useFactory: th, deps: [Et] } })]),
      zr([Gc]),
    ],
  };
var oa;
try {
  oa = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  oa = !1;
}
var Oe = (() => {
  class t {
    constructor(e) {
      (this._platformId = e),
        (this.isBrowser = this._platformId
          ? dt(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || oa) &&
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
      this.ɵfac = function (i) {
        return new (i || t)(b(Se));
      };
    }
    static {
      this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
  }
  return t;
})();
var tn;
function ih() {
  if (tn == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (tn = !0) })
      );
    } finally {
      tn = tn || !1;
    }
  return tn;
}
function ri(t) {
  return ih() ? t : !!t.capture;
}
var ra;
function nh() {
  if (ra == null) {
    let t = typeof document < "u" ? document.head : null;
    ra = !!(t && (t.createShadowRoot || t.attachShadow));
  }
  return ra;
}
function qc(t) {
  if (nh()) {
    let n = t.getRootNode ? t.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && n instanceof ShadowRoot)
      return n;
  }
  return null;
}
function bt(t) {
  return t.composedPath ? t.composedPath()[0] : t.target;
}
function Wc() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function aa(t) {
  return Array.isArray(t) ? t : [t];
}
function Tt(t) {
  return t instanceof Z ? t.nativeElement : t;
}
var rh = (() => {
  class t {
    create(e) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(e);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
  }
  return t;
})();
var Zc = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ providers: [rh] });
    }
  }
  return t;
})();
var Kc = new Set(),
  Rt,
  oh = (() => {
    class t {
      constructor(e, i) {
        (this._platform = e),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : sh);
      }
      matchMedia(e) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && ah(e, this._nonce),
          this._matchMedia(e)
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(Oe), b(gi, 8));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
function ah(t, n) {
  if (!Kc.has(t))
    try {
      Rt ||
        ((Rt = document.createElement("style")),
        n && Rt.setAttribute("nonce", n),
        Rt.setAttribute("type", "text/css"),
        document.head.appendChild(Rt)),
        Rt.sheet &&
          (Rt.sheet.insertRule(`@media ${t} {body{ }}`, 0), Kc.add(t));
    } catch (e) {
      console.error(e);
    }
}
function sh(t) {
  return {
    matches: t === "all" || t === "",
    media: t,
    addListener: () => {},
    removeListener: () => {},
  };
}
var Qc = (() => {
  class t {
    constructor(e, i) {
      (this._mediaMatcher = e),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new ue());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return Yc(aa(e)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(e) {
      let r = Yc(aa(e)).map((a) => this._registerQuery(a).observable),
        o = hi(r);
      return (
        (o = _t(o.pipe(he(1)), o.pipe(un(1), Nr(0)))),
        o.pipe(
          M((a) => {
            let c = { matches: !1, breakpoints: {} };
            return (
              a.forEach(({ matches: s, query: d }) => {
                (c.matches = c.matches || s), (c.breakpoints[d] = s);
              }),
              c
            );
          })
        )
      );
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let i = this._mediaMatcher.matchMedia(e),
        o = {
          observable: new mi((a) => {
            let c = (s) => this._zone.run(() => a.next(s));
            return (
              i.addListener(c),
              () => {
                i.removeListener(c);
              }
            );
          }).pipe(
            mn(i),
            M(({ matches: a }) => ({ query: e, matches: a })),
            at(this._destroySubject)
          ),
          mql: i,
        };
      return this._queries.set(e, o), o;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || t)(b(oh), b(B));
      };
    }
    static {
      this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
  }
  return t;
})();
function Yc(t) {
  return t
    .map((n) => n.split(","))
    .reduce((n, e) => n.concat(e))
    .map((n) => n.trim());
}
function ca(t) {
  return t.buttons === 0 || t.detail === 0;
}
function la(t) {
  let n =
    (t.touches && t.touches[0]) || (t.changedTouches && t.changedTouches[0]);
  return (
    !!n &&
    n.identifier === -1 &&
    (n.radiusX == null || n.radiusX === 1) &&
    (n.radiusY == null || n.radiusY === 1)
  );
}
var ch = new E("cdk-input-modality-detector-options"),
  lh = { ignoreKeys: [18, 17, 224, 91, 16] },
  el = 650,
  oi = ri({ passive: !0, capture: !0 }),
  dh = (() => {
    class t {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(e, i, r, o) {
        (this._platform = e),
          (this._mostRecentTarget = null),
          (this._modality = new me(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (a) => {
            this._options?.ignoreKeys?.some((c) => c === a.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = bt(a)));
          }),
          (this._onMousedown = (a) => {
            Date.now() - this._lastTouchMs < el ||
              (this._modality.next(ca(a) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = bt(a)));
          }),
          (this._onTouchstart = (a) => {
            if (la(a)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = bt(a));
          }),
          (this._options = g(g({}, lh), o)),
          (this.modalityDetected = this._modality.pipe(un(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Ta())),
          e.isBrowser &&
            i.runOutsideAngular(() => {
              r.addEventListener("keydown", this._onKeydown, oi),
                r.addEventListener("mousedown", this._onMousedown, oi),
                r.addEventListener("touchstart", this._onTouchstart, oi);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, oi),
            document.removeEventListener("mousedown", this._onMousedown, oi),
            document.removeEventListener("touchstart", this._onTouchstart, oi));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(Oe), b(B), b(H), b(ch, 8));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
var mr = (function (t) {
    return (
      (t[(t.IMMEDIATE = 0)] = "IMMEDIATE"),
      (t[(t.EVENTUAL = 1)] = "EVENTUAL"),
      t
    );
  })(mr || {}),
  uh = new E("cdk-focus-monitor-default-options"),
  ur = ri({ passive: !0, capture: !0 }),
  tl = (() => {
    class t {
      constructor(e, i, r, o, a) {
        (this._ngZone = e),
          (this._platform = i),
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
          (this._stopInputModalityDetector = new ue()),
          (this._rootNodeFocusAndBlurListener = (c) => {
            let s = bt(c);
            for (let d = s; d; d = d.parentElement)
              c.type === "focus" ? this._onFocus(c, d) : this._onBlur(c, d);
          }),
          (this._document = o),
          (this._detectionMode = a?.detectionMode || mr.IMMEDIATE);
      }
      monitor(e, i = !1) {
        let r = Tt(e);
        if (!this._platform.isBrowser || r.nodeType !== 1) return I();
        let o = qc(r) || this._getDocument(),
          a = this._elementInfo.get(r);
        if (a) return i && (a.checkChildren = !0), a.subject;
        let c = { checkChildren: i, subject: new ue(), rootNode: o };
        return (
          this._elementInfo.set(r, c),
          this._registerGlobalListeners(c),
          c.subject
        );
      }
      stopMonitoring(e) {
        let i = Tt(e),
          r = this._elementInfo.get(i);
        r &&
          (r.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(r));
      }
      focusVia(e, i, r) {
        let o = Tt(e),
          a = this._getDocument().activeElement;
        o === a
          ? this._getClosestElementsInfo(o).forEach(([c, s]) =>
              this._originChanged(c, i, s)
            )
          : (this._setOrigin(i), typeof o.focus == "function" && o.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, i) => this.stopMonitoring(i));
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
          this._detectionMode === mr.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(e, i) {
        e.classList.toggle("cdk-focused", !!i),
          e.classList.toggle("cdk-touch-focused", i === "touch"),
          e.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", i === "mouse"),
          e.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(e, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = e),
            (this._originFromTouchInteraction = e === "touch" && i),
            this._detectionMode === mr.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? el : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), r);
          }
        });
      }
      _onFocus(e, i) {
        let r = this._elementInfo.get(i),
          o = bt(e);
        !r ||
          (!r.checkChildren && i !== o) ||
          this._originChanged(i, this._getFocusOrigin(o), r);
      }
      _onBlur(e, i) {
        let r = this._elementInfo.get(i);
        !r ||
          (r.checkChildren &&
            e.relatedTarget instanceof Node &&
            i.contains(e.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(r, null));
      }
      _emitOrigin(e, i) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(i));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let i = e.rootNode,
          r = this._rootNodeFocusListenerCount.get(i) || 0;
        r ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, ur),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                ur
              );
          }),
          this._rootNodeFocusListenerCount.set(i, r + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(at(this._stopInputModalityDetector))
              .subscribe((o) => {
                this._setOrigin(o, !0);
              }));
      }
      _removeGlobalListeners(e) {
        let i = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let r = this._rootNodeFocusListenerCount.get(i);
          r > 1
            ? this._rootNodeFocusListenerCount.set(i, r - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                ur
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                ur
              ),
              this._rootNodeFocusListenerCount.delete(i));
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
      _originChanged(e, i, r) {
        this._setClasses(e, i),
          this._emitOrigin(r, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(e) {
        let i = [];
        return (
          this._elementInfo.forEach((r, o) => {
            (o === e || (r.checkChildren && o.contains(e))) && i.push([o, r]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: i, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" ||
          !i ||
          i === e ||
          (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA") ||
          e.disabled
        )
          return !1;
        let o = e.labels;
        if (o) {
          for (let a = 0; a < o.length; a++) if (o[a].contains(i)) return !0;
        }
        return !1;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(B), b(Oe), b(dh), b(H, 8), b(uh, 8));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
var Ft = (function (t) {
    return (
      (t[(t.NONE = 0)] = "NONE"),
      (t[(t.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (t[(t.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      t
    );
  })(Ft || {}),
  Xc = "cdk-high-contrast-black-on-white",
  Jc = "cdk-high-contrast-white-on-black",
  sa = "cdk-high-contrast-active",
  il = (() => {
    class t {
      constructor(e, i) {
        (this._platform = e),
          (this._document = i),
          (this._breakpointSubscription = x(Qc)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return Ft.NONE;
        let e = this._document.createElement("div");
        (e.style.backgroundColor = "rgb(1,2,3)"),
          (e.style.position = "absolute"),
          this._document.body.appendChild(e);
        let i = this._document.defaultView || window,
          r = i && i.getComputedStyle ? i.getComputedStyle(e) : null,
          o = ((r && r.backgroundColor) || "").replace(/ /g, "");
        switch ((e.remove(), o)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return Ft.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return Ft.BLACK_ON_WHITE;
        }
        return Ft.NONE;
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
          e.remove(sa, Xc, Jc), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === Ft.BLACK_ON_WHITE
            ? e.add(sa, Xc)
            : i === Ft.WHITE_ON_BLACK && e.add(sa, Jc);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(Oe), b(H));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
var da = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({});
    }
  }
  return t;
})();
var hh = ["mat-internal-form-field", ""],
  ph = ["*"];
function fh() {
  return !0;
}
var gh = new E("mat-sanity-checks", { providedIn: "root", factory: fh }),
  ee = (() => {
    class t {
      constructor(e, i, r) {
        (this._sanityChecks = i),
          (this._document = r),
          (this._hasDoneGlobalChecks = !1),
          e._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(e) {
        return Wc()
          ? !1
          : typeof this._sanityChecks == "boolean"
          ? this._sanityChecks
          : !!this._sanityChecks[e];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(il), b(gh, 8), b(H));
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ imports: [da, da] });
      }
    }
    return t;
  })();
var Pe = (function (t) {
    return (
      (t[(t.FADING_IN = 0)] = "FADING_IN"),
      (t[(t.VISIBLE = 1)] = "VISIBLE"),
      (t[(t.FADING_OUT = 2)] = "FADING_OUT"),
      (t[(t.HIDDEN = 3)] = "HIDDEN"),
      t
    );
  })(Pe || {}),
  ua = class {
    constructor(n, e, i, r = !1) {
      (this._renderer = n),
        (this.element = e),
        (this.config = i),
        (this._animationForciblyDisabledThroughCss = r),
        (this.state = Pe.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  rl = ri({ passive: !0, capture: !0 }),
  ma = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (n) => {
          let e = bt(n);
          e &&
            this._events.get(n.type)?.forEach((i, r) => {
              (r === e || r.contains(e)) && i.forEach((o) => o.handleEvent(n));
            });
        });
    }
    addHandler(n, e, i, r) {
      let o = this._events.get(e);
      if (o) {
        let a = o.get(i);
        a ? a.add(r) : o.set(i, new Set([r]));
      } else
        this._events.set(e, new Map([[i, new Set([r])]])),
          n.runOutsideAngular(() => {
            document.addEventListener(e, this._delegateEventHandler, rl);
          });
    }
    removeHandler(n, e, i) {
      let r = this._events.get(n);
      if (!r) return;
      let o = r.get(e);
      o &&
        (o.delete(i),
        o.size === 0 && r.delete(e),
        r.size === 0 &&
          (this._events.delete(n),
          document.removeEventListener(n, this._delegateEventHandler, rl)));
    }
  },
  ol = { enterDuration: 225, exitDuration: 150 },
  bh = 800,
  al = ri({ passive: !0, capture: !0 }),
  sl = ["mousedown", "touchstart"],
  cl = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  ha = class t {
    static {
      this._eventManager = new ma();
    }
    constructor(n, e, i, r) {
      (this._target = n),
        (this._ngZone = e),
        (this._platform = r),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        r.isBrowser && (this._containerElement = Tt(i));
    }
    fadeInRipple(n, e, i = {}) {
      let r = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        o = g(g({}, ol), i.animation);
      i.centered && ((n = r.left + r.width / 2), (e = r.top + r.height / 2));
      let a = i.radius || vh(n, e, r),
        c = n - r.left,
        s = e - r.top,
        d = o.enterDuration,
        h = document.createElement("div");
      h.classList.add("mat-ripple-element"),
        (h.style.left = `${c - a}px`),
        (h.style.top = `${s - a}px`),
        (h.style.height = `${a * 2}px`),
        (h.style.width = `${a * 2}px`),
        i.color != null && (h.style.backgroundColor = i.color),
        (h.style.transitionDuration = `${d}ms`),
        this._containerElement.appendChild(h);
      let v = window.getComputedStyle(h),
        O = v.transitionProperty,
        P = v.transitionDuration,
        N =
          O === "none" ||
          P === "0s" ||
          P === "0s, 0s" ||
          (r.width === 0 && r.height === 0),
        A = new ua(this, h, i, N);
      (h.style.transform = "scale3d(1, 1, 1)"),
        (A.state = Pe.FADING_IN),
        i.persistent || (this._mostRecentTransientRipple = A);
      let S = null;
      return (
        !N &&
          (d || o.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let se = () => {
                S && (S.fallbackTimer = null),
                  clearTimeout(Q),
                  this._finishRippleTransition(A);
              },
              Ce = () => this._destroyRipple(A),
              Q = setTimeout(Ce, d + 100);
            h.addEventListener("transitionend", se),
              h.addEventListener("transitioncancel", Ce),
              (S = {
                onTransitionEnd: se,
                onTransitionCancel: Ce,
                fallbackTimer: Q,
              });
          }),
        this._activeRipples.set(A, S),
        (N || !d) && this._finishRippleTransition(A),
        A
      );
    }
    fadeOutRipple(n) {
      if (n.state === Pe.FADING_OUT || n.state === Pe.HIDDEN) return;
      let e = n.element,
        i = g(g({}, ol), n.config.animation);
      (e.style.transitionDuration = `${i.exitDuration}ms`),
        (e.style.opacity = "0"),
        (n.state = Pe.FADING_OUT),
        (n._animationForciblyDisabledThroughCss || !i.exitDuration) &&
          this._finishRippleTransition(n);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((n) => n.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((n) => {
        n.config.persistent || n.fadeOut();
      });
    }
    setupTriggerEvents(n) {
      let e = Tt(n);
      !this._platform.isBrowser ||
        !e ||
        e === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = e),
        sl.forEach((i) => {
          t._eventManager.addHandler(this._ngZone, i, e, this);
        }));
    }
    handleEvent(n) {
      n.type === "mousedown"
        ? this._onMousedown(n)
        : n.type === "touchstart"
        ? this._onTouchStart(n)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            cl.forEach((e) => {
              this._triggerElement.addEventListener(e, this, al);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(n) {
      n.state === Pe.FADING_IN
        ? this._startFadeOutTransition(n)
        : n.state === Pe.FADING_OUT && this._destroyRipple(n);
    }
    _startFadeOutTransition(n) {
      let e = n === this._mostRecentTransientRipple,
        { persistent: i } = n.config;
      (n.state = Pe.VISIBLE), !i && (!e || !this._isPointerDown) && n.fadeOut();
    }
    _destroyRipple(n) {
      let e = this._activeRipples.get(n) ?? null;
      this._activeRipples.delete(n),
        this._activeRipples.size || (this._containerRect = null),
        n === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (n.state = Pe.HIDDEN),
        e !== null &&
          (n.element.removeEventListener("transitionend", e.onTransitionEnd),
          n.element.removeEventListener(
            "transitioncancel",
            e.onTransitionCancel
          ),
          e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)),
        n.element.remove();
    }
    _onMousedown(n) {
      let e = ca(n),
        i =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + bh;
      !this._target.rippleDisabled &&
        !e &&
        !i &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(n.clientX, n.clientY, this._target.rippleConfig));
    }
    _onTouchStart(n) {
      if (!this._target.rippleDisabled && !la(n)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let e = n.changedTouches;
        if (e)
          for (let i = 0; i < e.length; i++)
            this.fadeInRipple(
              e[i].clientX,
              e[i].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((n) => {
          let e =
            n.state === Pe.VISIBLE ||
            (n.config.terminateOnPointerUp && n.state === Pe.FADING_IN);
          !n.config.persistent && e && n.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let n = this._triggerElement;
      n &&
        (sl.forEach((e) => t._eventManager.removeHandler(e, n, this)),
        this._pointerUpEventsRegistered &&
          (cl.forEach((e) => n.removeEventListener(e, this, al)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
function vh(t, n, e) {
  let i = Math.max(Math.abs(t - e.left), Math.abs(t - e.right)),
    r = Math.max(Math.abs(n - e.top), Math.abs(n - e.bottom));
  return Math.sqrt(i * i + r * r);
}
var _h = new E("mat-ripple-global-options"),
  nn = (() => {
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
      constructor(e, i, r, o, a) {
        (this._elementRef = e),
          (this._animationMode = a),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = o || {}),
          (this._rippleRenderer = new ha(this, i, e, r));
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
          animation: g(
            g(
              g({}, this._globalOptions.animation),
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
      launch(e, i = 0, r) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
              e,
              i,
              g(g({}, this.rippleConfig), r)
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              g(g({}, this.rippleConfig), e)
            );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(_(Z), _(B), _(Oe), _(_h, 8), _(Le, 8));
        };
      }
      static {
        this.ɵdir = J({
          type: t,
          selectors: [
            ["", "mat-ripple", ""],
            ["", "matRipple", ""],
          ],
          hostAttrs: [1, "mat-ripple"],
          hostVars: 2,
          hostBindings: function (i, r) {
            i & 2 && ae("mat-ripple-unbounded", r.unbounded);
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
  hr = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ imports: [ee, ee] });
      }
    }
    return t;
  })();
var pr = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵcmp = te({
        type: t,
        selectors: [["div", "mat-internal-form-field", ""]],
        hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
        hostVars: 2,
        hostBindings: function (i, r) {
          i & 2 &&
            ae("mdc-form-field--align-end", r.labelPosition === "before");
        },
        inputs: { labelPosition: "labelPosition" },
        standalone: !0,
        features: [ne],
        attrs: hh,
        ngContentSelectors: ph,
        decls: 1,
        vars: 0,
        template: function (i, r) {
          i & 1 && (fe(), le(0));
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
var yh = ["*"];
var xh = new E("MAT_CARD_CONFIG"),
  ll = (() => {
    class t {
      constructor(e) {
        this.appearance = e?.appearance || "raised";
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(_(xh, 8));
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["mat-card"]],
          hostAttrs: [1, "mat-mdc-card", "mdc-card"],
          hostVars: 4,
          hostBindings: function (i, r) {
            i & 2 &&
              ae("mat-mdc-card-outlined", r.appearance === "outlined")(
                "mdc-card--outlined",
                r.appearance === "outlined"
              );
          },
          inputs: { appearance: "appearance" },
          exportAs: ["matCard"],
          standalone: !0,
          features: [ne],
          ngContentSelectors: yh,
          decls: 1,
          vars: 0,
          template: function (i, r) {
            i & 1 && (fe(), le(0));
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
  dl = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵdir = J({
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
var ul = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵdir = J({
        type: t,
        selectors: [["mat-card-content"]],
        hostAttrs: [1, "mat-mdc-card-content"],
        standalone: !0,
      });
    }
  }
  return t;
})();
var ml = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [ee, we, ee] });
    }
  }
  return t;
})();
var yl = (() => {
    class t {
      constructor(e, i) {
        (this._renderer = e),
          (this._elementRef = i),
          (this.onChange = (r) => {}),
          (this.onTouched = () => {});
      }
      setProperty(e, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, i);
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
        this.ɵfac = function (i) {
          return new (i || t)(_(vn), _(Z));
        };
      }
      static {
        this.ɵdir = J({ type: t });
      }
    }
    return t;
  })(),
  wh = (() => {
    class t extends yl {
      static {
        this.ɵfac = (() => {
          let e;
          return function (r) {
            return (e || (e = Ge(t)))(r || t);
          };
        })();
      }
      static {
        this.ɵdir = J({ type: t, features: [Ct] });
      }
    }
    return t;
  })(),
  li = new E("");
var Ih = { provide: li, useExisting: yt(() => xl), multi: !0 };
function kh() {
  let t = lt() ? lt().getUserAgent() : "";
  return /android (\d+)/.test(t.toLowerCase());
}
var Eh = new E(""),
  xl = (() => {
    class t extends yl {
      constructor(e, i, r) {
        super(e, i),
          (this._compositionMode = r),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !kh());
      }
      writeValue(e) {
        let i = e ?? "";
        this.setProperty("value", i);
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
        this.ɵfac = function (i) {
          return new (i || t)(_(vn), _(Z), _(Eh, 8));
        };
      }
      static {
        this.ɵdir = J({
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
          hostBindings: function (i, r) {
            i & 1 &&
              z("input", function (a) {
                return r._handleInput(a.target.value);
              })("blur", function () {
                return r.onTouched();
              })("compositionstart", function () {
                return r._compositionStart();
              })("compositionend", function (a) {
                return r._compositionEnd(a.target.value);
              });
          },
          features: [Be([Ih]), Ct],
        });
      }
    }
    return t;
  })();
var va = new E(""),
  Mh = new E("");
function Cl(t) {
  return t != null;
}
function wl(t) {
  return kn(t) ? ve(t) : t;
}
function Il(t) {
  let n = {};
  return (
    t.forEach((e) => {
      n = e != null ? g(g({}, n), e) : n;
    }),
    Object.keys(n).length === 0 ? null : n
  );
}
function kl(t, n) {
  return n.map((e) => e(t));
}
function Ah(t) {
  return !t.validate;
}
function El(t) {
  return t.map((n) => (Ah(n) ? n : (e) => n.validate(e)));
}
function Sh(t) {
  if (!t) return null;
  let n = t.filter(Cl);
  return n.length == 0
    ? null
    : function (e) {
        return Il(kl(e, n));
      };
}
function Ml(t) {
  return t != null ? Sh(El(t)) : null;
}
function Dh(t) {
  if (!t) return null;
  let n = t.filter(Cl);
  return n.length == 0
    ? null
    : function (e) {
        let i = kl(e, n).map(wl);
        return Nt(i).pipe(M(Il));
      };
}
function Al(t) {
  return t != null ? Dh(El(t)) : null;
}
function hl(t, n) {
  return t === null ? [n] : Array.isArray(t) ? [...t, n] : [t, n];
}
function Th(t) {
  return t._rawValidators;
}
function Rh(t) {
  return t._rawAsyncValidators;
}
function pa(t) {
  return t ? (Array.isArray(t) ? t : [t]) : [];
}
function gr(t, n) {
  return Array.isArray(t) ? t.includes(n) : t === n;
}
function pl(t, n) {
  let e = pa(n);
  return (
    pa(t).forEach((r) => {
      gr(e, r) || e.push(r);
    }),
    e
  );
}
function fl(t, n) {
  return pa(n).filter((e) => !gr(t, e));
}
var br = class {
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
    _setValidators(n) {
      (this._rawValidators = n || []),
        (this._composedValidatorFn = Ml(this._rawValidators));
    }
    _setAsyncValidators(n) {
      (this._rawAsyncValidators = n || []),
        (this._composedAsyncValidatorFn = Al(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(n) {
      this._onDestroyCallbacks.push(n);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((n) => n()),
        (this._onDestroyCallbacks = []);
    }
    reset(n = void 0) {
      this.control && this.control.reset(n);
    }
    hasError(n, e) {
      return this.control ? this.control.hasError(n, e) : !1;
    }
    getError(n, e) {
      return this.control ? this.control.getError(n, e) : null;
    }
  },
  fa = class extends br {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  cn = class extends br {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  ga = class {
    constructor(n) {
      this._cd = n;
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
  Fh = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  _v = q(g({}, Fh), { "[class.ng-submitted]": "isSubmitted" }),
  Sl = (() => {
    class t extends ga {
      constructor(e) {
        super(e);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(_(cn, 2));
        };
      }
      static {
        this.ɵdir = J({
          type: t,
          selectors: [
            ["", "formControlName", ""],
            ["", "ngModel", ""],
            ["", "formControl", ""],
          ],
          hostVars: 14,
          hostBindings: function (i, r) {
            i & 2 &&
              ae("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
                "ng-pristine",
                r.isPristine
              )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
                "ng-invalid",
                r.isInvalid
              )("ng-pending", r.isPending);
          },
          features: [Ct],
        });
      }
    }
    return t;
  })();
var rn = "VALID",
  fr = "INVALID",
  ai = "PENDING",
  on = "DISABLED",
  ci = class {},
  vr = class extends ci {
    constructor(n, e) {
      super(), (this.value = n), (this.source = e);
    }
  },
  an = class extends ci {
    constructor(n, e) {
      super(), (this.pristine = n), (this.source = e);
    }
  },
  sn = class extends ci {
    constructor(n, e) {
      super(), (this.touched = n), (this.source = e);
    }
  },
  si = class extends ci {
    constructor(n, e) {
      super(), (this.status = n), (this.source = e);
    }
  };
function Oh(t) {
  return (_r(t) ? t.validators : t) || null;
}
function Ph(t) {
  return Array.isArray(t) ? Ml(t) : t || null;
}
function Nh(t, n) {
  return (_r(n) ? n.asyncValidators : t) || null;
}
function jh(t) {
  return Array.isArray(t) ? Al(t) : t || null;
}
function _r(t) {
  return t != null && !Array.isArray(t) && typeof t == "object";
}
var ba = class {
  constructor(n, e) {
    (this._pendingDirty = !1),
      (this._hasOwnPendingAsyncValidator = null),
      (this._pendingTouched = !1),
      (this._onCollectionChange = () => {}),
      (this._parent = null),
      (this._status = Mn(() => this.statusReactive())),
      (this.statusReactive = _n(void 0)),
      (this._pristine = Mn(() => this.pristineReactive())),
      (this.pristineReactive = _n(!0)),
      (this._touched = Mn(() => this.touchedReactive())),
      (this.touchedReactive = _n(!1)),
      (this._events = new ue()),
      (this.events = this._events.asObservable()),
      (this._onDisabledChange = []),
      this._assignValidators(n),
      this._assignAsyncValidators(e);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(n) {
    this._rawValidators = this._composedValidatorFn = n;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(n) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = n;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return It(this.statusReactive);
  }
  set status(n) {
    It(() => this.statusReactive.set(n));
  }
  get valid() {
    return this.status === rn;
  }
  get invalid() {
    return this.status === fr;
  }
  get pending() {
    return this.status == ai;
  }
  get disabled() {
    return this.status === on;
  }
  get enabled() {
    return this.status !== on;
  }
  get pristine() {
    return It(this.pristineReactive);
  }
  set pristine(n) {
    It(() => this.pristineReactive.set(n));
  }
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return It(this.touchedReactive);
  }
  set touched(n) {
    It(() => this.touchedReactive.set(n));
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
  setValidators(n) {
    this._assignValidators(n);
  }
  setAsyncValidators(n) {
    this._assignAsyncValidators(n);
  }
  addValidators(n) {
    this.setValidators(pl(n, this._rawValidators));
  }
  addAsyncValidators(n) {
    this.setAsyncValidators(pl(n, this._rawAsyncValidators));
  }
  removeValidators(n) {
    this.setValidators(fl(n, this._rawValidators));
  }
  removeAsyncValidators(n) {
    this.setAsyncValidators(fl(n, this._rawAsyncValidators));
  }
  hasValidator(n) {
    return gr(this._rawValidators, n);
  }
  hasAsyncValidator(n) {
    return gr(this._rawAsyncValidators, n);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(n = {}) {
    let e = this.touched === !1;
    this.touched = !0;
    let i = n.sourceControl ?? this;
    this._parent &&
      !n.onlySelf &&
      this._parent.markAsTouched(q(g({}, n), { sourceControl: i })),
      e && n.emitEvent !== !1 && this._events.next(new sn(!0, i));
  }
  markAllAsTouched(n = {}) {
    this.markAsTouched({
      onlySelf: !0,
      emitEvent: n.emitEvent,
      sourceControl: this,
    }),
      this._forEachChild((e) => e.markAllAsTouched(n));
  }
  markAsUntouched(n = {}) {
    let e = this.touched === !0;
    (this.touched = !1), (this._pendingTouched = !1);
    let i = n.sourceControl ?? this;
    this._forEachChild((r) => {
      r.markAsUntouched({
        onlySelf: !0,
        emitEvent: n.emitEvent,
        sourceControl: i,
      });
    }),
      this._parent && !n.onlySelf && this._parent._updateTouched(n, i),
      e && n.emitEvent !== !1 && this._events.next(new sn(!1, i));
  }
  markAsDirty(n = {}) {
    let e = this.pristine === !0;
    this.pristine = !1;
    let i = n.sourceControl ?? this;
    this._parent &&
      !n.onlySelf &&
      this._parent.markAsDirty(q(g({}, n), { sourceControl: i })),
      e && n.emitEvent !== !1 && this._events.next(new an(!1, i));
  }
  markAsPristine(n = {}) {
    let e = this.pristine === !1;
    (this.pristine = !0), (this._pendingDirty = !1);
    let i = n.sourceControl ?? this;
    this._forEachChild((r) => {
      r.markAsPristine({ onlySelf: !0, emitEvent: n.emitEvent });
    }),
      this._parent && !n.onlySelf && this._parent._updatePristine(n, i),
      e && n.emitEvent !== !1 && this._events.next(new an(!0, i));
  }
  markAsPending(n = {}) {
    this.status = ai;
    let e = n.sourceControl ?? this;
    n.emitEvent !== !1 &&
      (this._events.next(new si(this.status, e)),
      this.statusChanges.emit(this.status)),
      this._parent &&
        !n.onlySelf &&
        this._parent.markAsPending(q(g({}, n), { sourceControl: e }));
  }
  disable(n = {}) {
    let e = this._parentMarkedDirty(n.onlySelf);
    (this.status = on),
      (this.errors = null),
      this._forEachChild((r) => {
        r.disable(q(g({}, n), { onlySelf: !0 }));
      }),
      this._updateValue();
    let i = n.sourceControl ?? this;
    n.emitEvent !== !1 &&
      (this._events.next(new vr(this.value, i)),
      this._events.next(new si(this.status, i)),
      this.valueChanges.emit(this.value),
      this.statusChanges.emit(this.status)),
      this._updateAncestors(q(g({}, n), { skipPristineCheck: e }), this),
      this._onDisabledChange.forEach((r) => r(!0));
  }
  enable(n = {}) {
    let e = this._parentMarkedDirty(n.onlySelf);
    (this.status = rn),
      this._forEachChild((i) => {
        i.enable(q(g({}, n), { onlySelf: !0 }));
      }),
      this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent }),
      this._updateAncestors(q(g({}, n), { skipPristineCheck: e }), this),
      this._onDisabledChange.forEach((i) => i(!1));
  }
  _updateAncestors(n, e) {
    this._parent &&
      !n.onlySelf &&
      (this._parent.updateValueAndValidity(n),
      n.skipPristineCheck || this._parent._updatePristine({}, e),
      this._parent._updateTouched({}, e));
  }
  setParent(n) {
    this._parent = n;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(n = {}) {
    if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
      let i = this._cancelExistingSubscription();
      (this.errors = this._runValidator()),
        (this.status = this._calculateStatus()),
        (this.status === rn || this.status === ai) &&
          this._runAsyncValidator(i, n.emitEvent);
    }
    let e = n.sourceControl ?? this;
    n.emitEvent !== !1 &&
      (this._events.next(new vr(this.value, e)),
      this._events.next(new si(this.status, e)),
      this.valueChanges.emit(this.value),
      this.statusChanges.emit(this.status)),
      this._parent &&
        !n.onlySelf &&
        this._parent.updateValueAndValidity(q(g({}, n), { sourceControl: e }));
  }
  _updateTreeValidity(n = { emitEvent: !0 }) {
    this._forEachChild((e) => e._updateTreeValidity(n)),
      this.updateValueAndValidity({ onlySelf: !0, emitEvent: n.emitEvent });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? on : rn;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(n, e) {
    if (this.asyncValidator) {
      (this.status = ai),
        (this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1 });
      let i = wl(this.asyncValidator(this));
      this._asyncValidationSubscription = i.subscribe((r) => {
        (this._hasOwnPendingAsyncValidator = null),
          this.setErrors(r, { emitEvent: e, shouldHaveEmitted: n });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      let n = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
      return (this._hasOwnPendingAsyncValidator = null), n;
    }
    return !1;
  }
  setErrors(n, e = {}) {
    (this.errors = n),
      this._updateControlsErrors(e.emitEvent !== !1, this, e.shouldHaveEmitted);
  }
  get(n) {
    let e = n;
    return e == null || (Array.isArray(e) || (e = e.split(".")), e.length === 0)
      ? null
      : e.reduce((i, r) => i && i._find(r), this);
  }
  getError(n, e) {
    let i = e ? this.get(e) : this;
    return i && i.errors ? i.errors[n] : null;
  }
  hasError(n, e) {
    return !!this.getError(n, e);
  }
  get root() {
    let n = this;
    for (; n._parent; ) n = n._parent;
    return n;
  }
  _updateControlsErrors(n, e, i) {
    (this.status = this._calculateStatus()),
      n && this.statusChanges.emit(this.status),
      (n || i) && this._events.next(new si(this.status, e)),
      this._parent && this._parent._updateControlsErrors(n, e, i);
  }
  _initObservables() {
    (this.valueChanges = new ie()), (this.statusChanges = new ie());
  }
  _calculateStatus() {
    return this._allControlsDisabled()
      ? on
      : this.errors
      ? fr
      : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ai)
      ? ai
      : this._anyControlsHaveStatus(fr)
      ? fr
      : rn;
  }
  _anyControlsHaveStatus(n) {
    return this._anyControls((e) => e.status === n);
  }
  _anyControlsDirty() {
    return this._anyControls((n) => n.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((n) => n.touched);
  }
  _updatePristine(n, e) {
    let i = !this._anyControlsDirty(),
      r = this.pristine !== i;
    (this.pristine = i),
      this._parent && !n.onlySelf && this._parent._updatePristine(n, e),
      r && this._events.next(new an(this.pristine, e));
  }
  _updateTouched(n = {}, e) {
    (this.touched = this._anyControlsTouched()),
      this._events.next(new sn(this.touched, e)),
      this._parent && !n.onlySelf && this._parent._updateTouched(n, e);
  }
  _registerOnCollectionChange(n) {
    this._onCollectionChange = n;
  }
  _setUpdateStrategy(n) {
    _r(n) && n.updateOn != null && (this._updateOn = n.updateOn);
  }
  _parentMarkedDirty(n) {
    let e = this._parent && this._parent.dirty;
    return !n && !!e && !this._parent._anyControlsDirty();
  }
  _find(n) {
    return null;
  }
  _assignValidators(n) {
    (this._rawValidators = Array.isArray(n) ? n.slice() : n),
      (this._composedValidatorFn = Ph(this._rawValidators));
  }
  _assignAsyncValidators(n) {
    (this._rawAsyncValidators = Array.isArray(n) ? n.slice() : n),
      (this._composedAsyncValidatorFn = jh(this._rawAsyncValidators));
  }
};
var Dl = new E("CallSetDisabledState", {
    providedIn: "root",
    factory: () => _a,
  }),
  _a = "always";
function Lh(t, n) {
  return [...n.path, t];
}
function Vh(t, n, e = _a) {
  zh(t, n),
    n.valueAccessor.writeValue(t.value),
    (t.disabled || e === "always") &&
      n.valueAccessor.setDisabledState?.(t.disabled),
    Uh(t, n),
    Gh(t, n),
    Hh(t, n),
    Bh(t, n);
}
function gl(t, n) {
  t.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(n);
  });
}
function Bh(t, n) {
  if (n.valueAccessor.setDisabledState) {
    let e = (i) => {
      n.valueAccessor.setDisabledState(i);
    };
    t.registerOnDisabledChange(e),
      n._registerOnDestroy(() => {
        t._unregisterOnDisabledChange(e);
      });
  }
}
function zh(t, n) {
  let e = Th(t);
  n.validator !== null
    ? t.setValidators(hl(e, n.validator))
    : typeof e == "function" && t.setValidators([e]);
  let i = Rh(t);
  n.asyncValidator !== null
    ? t.setAsyncValidators(hl(i, n.asyncValidator))
    : typeof i == "function" && t.setAsyncValidators([i]);
  let r = () => t.updateValueAndValidity();
  gl(n._rawValidators, r), gl(n._rawAsyncValidators, r);
}
function Uh(t, n) {
  n.valueAccessor.registerOnChange((e) => {
    (t._pendingValue = e),
      (t._pendingChange = !0),
      (t._pendingDirty = !0),
      t.updateOn === "change" && Tl(t, n);
  });
}
function Hh(t, n) {
  n.valueAccessor.registerOnTouched(() => {
    (t._pendingTouched = !0),
      t.updateOn === "blur" && t._pendingChange && Tl(t, n),
      t.updateOn !== "submit" && t.markAsTouched();
  });
}
function Tl(t, n) {
  t._pendingDirty && t.markAsDirty(),
    t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
    n.viewToModelUpdate(t._pendingValue),
    (t._pendingChange = !1);
}
function Gh(t, n) {
  let e = (i, r) => {
    n.valueAccessor.writeValue(i), r && n.viewToModelUpdate(i);
  };
  t.registerOnChange(e),
    n._registerOnDestroy(() => {
      t._unregisterOnChange(e);
    });
}
function $h(t, n) {
  if (!t.hasOwnProperty("model")) return !1;
  let e = t.model;
  return e.isFirstChange() ? !0 : !Object.is(n, e.currentValue);
}
function qh(t) {
  return Object.getPrototypeOf(t.constructor) === wh;
}
function Wh(t, n) {
  if (!n) return null;
  Array.isArray(n);
  let e, i, r;
  return (
    n.forEach((o) => {
      o.constructor === xl ? (e = o) : qh(o) ? (i = o) : (r = o);
    }),
    r || i || e || null
  );
}
function bl(t, n) {
  let e = t.indexOf(n);
  e > -1 && t.splice(e, 1);
}
function vl(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    Object.keys(t).length === 2 &&
    "value" in t &&
    "disabled" in t
  );
}
var Zh = class extends ba {
  constructor(n = null, e, i) {
    super(Oh(e), Nh(i, e)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(n),
      this._setUpdateStrategy(e),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      _r(e) &&
        (e.nonNullable || e.initialValueIsDefault) &&
        (vl(n) ? (this.defaultValue = n.value) : (this.defaultValue = n));
  }
  setValue(n, e = {}) {
    (this.value = this._pendingValue = n),
      this._onChange.length &&
        e.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, e.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(e);
  }
  patchValue(n, e = {}) {
    this.setValue(n, e);
  }
  reset(n = this.defaultValue, e = {}) {
    this._applyFormState(n),
      this.markAsPristine(e),
      this.markAsUntouched(e),
      this.setValue(this.value, e),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(n) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(n) {
    this._onChange.push(n);
  }
  _unregisterOnChange(n) {
    bl(this._onChange, n);
  }
  registerOnDisabledChange(n) {
    this._onDisabledChange.push(n);
  }
  _unregisterOnDisabledChange(n) {
    bl(this._onDisabledChange, n);
  }
  _forEachChild(n) {}
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
  _applyFormState(n) {
    vl(n)
      ? ((this.value = this._pendingValue = n.value),
        n.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = n);
  }
};
var Kh = { provide: cn, useExisting: yt(() => ya) },
  _l = Promise.resolve(),
  ya = (() => {
    class t extends cn {
      constructor(e, i, r, o, a, c) {
        super(),
          (this._changeDetectorRef = a),
          (this.callSetDisabledState = c),
          (this.control = new Zh()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new ie()),
          (this._parent = e),
          this._setValidators(i),
          this._setAsyncValidators(r),
          (this.valueAccessor = Wh(this, o));
      }
      ngOnChanges(e) {
        if ((this._checkForErrors(), !this._registered || "name" in e)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let i = e.name.previousValue;
            this.formDirective.removeControl({
              name: i,
              path: this._getPath(i),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in e && this._updateDisabled(e),
          $h(e, this.viewModel) &&
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
        Vh(this.control, this, this.callSetDisabledState),
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
        _l.then(() => {
          this.control.setValue(e, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(e) {
        let i = e.isDisabled.currentValue,
          r = i !== 0 && oe(i);
        _l.then(() => {
          r && !this.control.disabled
            ? this.control.disable()
            : !r && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(e) {
        return this._parent ? Lh(e, this._parent) : [e];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(
            _(fa, 9),
            _(va, 10),
            _(Mh, 10),
            _(li, 10),
            _(ge, 8),
            _(Dl, 8)
          );
        };
      }
      static {
        this.ɵdir = J({
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
          features: [Be([Kh]), Ct, He],
        });
      }
    }
    return t;
  })();
var Yh = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({});
    }
  }
  return t;
})();
var Rl = (() => {
  class t {
    static withConfig(e) {
      return {
        ngModule: t,
        providers: [{ provide: Dl, useValue: e.callSetDisabledState ?? _a }],
      };
    }
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [Yh] });
    }
  }
  return t;
})();
var Xh = ["*"],
  yr;
function Jh() {
  if (yr === void 0 && ((yr = null), typeof window < "u")) {
    let t = window;
    t.trustedTypes !== void 0 &&
      (yr = t.trustedTypes.createPolicy("angular#components", {
        createHTML: (n) => n,
      }));
  }
  return yr;
}
function ln(t) {
  return Jh()?.createHTML(t) || t;
}
function Fl(t) {
  return Error(`Unable to find icon with the name "${t}"`);
}
function ep() {
  return Error(
    "Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers."
  );
}
function Ol(t) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`
  );
}
function Pl(t) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`
  );
}
var tt = class {
    constructor(n, e, i) {
      (this.url = n), (this.svgText = e), (this.options = i);
    }
  },
  tp = (() => {
    class t {
      constructor(e, i, r, o) {
        (this._httpClient = e),
          (this._sanitizer = i),
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
      addSvgIcon(e, i, r) {
        return this.addSvgIconInNamespace("", e, i, r);
      }
      addSvgIconLiteral(e, i, r) {
        return this.addSvgIconLiteralInNamespace("", e, i, r);
      }
      addSvgIconInNamespace(e, i, r, o) {
        return this._addSvgIconConfig(e, i, new tt(r, null, o));
      }
      addSvgIconResolver(e) {
        return this._resolvers.push(e), this;
      }
      addSvgIconLiteralInNamespace(e, i, r, o) {
        let a = this._sanitizer.sanitize(Ie.HTML, r);
        if (!a) throw Pl(r);
        let c = ln(a);
        return this._addSvgIconConfig(e, i, new tt("", c, o));
      }
      addSvgIconSet(e, i) {
        return this.addSvgIconSetInNamespace("", e, i);
      }
      addSvgIconSetLiteral(e, i) {
        return this.addSvgIconSetLiteralInNamespace("", e, i);
      }
      addSvgIconSetInNamespace(e, i, r) {
        return this._addSvgIconSetConfig(e, new tt(i, null, r));
      }
      addSvgIconSetLiteralInNamespace(e, i, r) {
        let o = this._sanitizer.sanitize(Ie.HTML, i);
        if (!o) throw Pl(i);
        let a = ln(o);
        return this._addSvgIconSetConfig(e, new tt("", a, r));
      }
      registerFontClassAlias(e, i = e) {
        return this._fontCssClassesByAlias.set(e, i), this;
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
        let i = this._sanitizer.sanitize(Ie.RESOURCE_URL, e);
        if (!i) throw Ol(e);
        let r = this._cachedIconsByUrl.get(i);
        return r
          ? I(xr(r))
          : this._loadSvgIconFromConfig(new tt(e, null)).pipe(
              re((o) => this._cachedIconsByUrl.set(i, o)),
              M((o) => xr(o))
            );
      }
      getNamedSvgIcon(e, i = "") {
        let r = Nl(i, e),
          o = this._svgIconConfigs.get(r);
        if (o) return this._getSvgFromConfig(o);
        if (((o = this._getIconConfigFromResolvers(i, e)), o))
          return this._svgIconConfigs.set(r, o), this._getSvgFromConfig(o);
        let a = this._iconSetConfigs.get(i);
        return a ? this._getSvgFromIconSetConfigs(e, a) : vt(Fl(r));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(e) {
        return e.svgText
          ? I(xr(this._svgElementFromConfig(e)))
          : this._loadSvgIconFromConfig(e).pipe(M((i) => xr(i)));
      }
      _getSvgFromIconSetConfigs(e, i) {
        let r = this._extractIconWithNameFromAnySet(e, i);
        if (r) return I(r);
        let o = i
          .filter((a) => !a.svgText)
          .map((a) =>
            this._loadSvgIconSetFromConfig(a).pipe(
              nt((c) => {
                let d = `Loading icon set URL: ${this._sanitizer.sanitize(
                  Ie.RESOURCE_URL,
                  a.url
                )} failed: ${c.message}`;
                return this._errorHandler.handleError(new Error(d)), I(null);
              })
            )
          );
        return Nt(o).pipe(
          M(() => {
            let a = this._extractIconWithNameFromAnySet(e, i);
            if (!a) throw Fl(e);
            return a;
          })
        );
      }
      _extractIconWithNameFromAnySet(e, i) {
        for (let r = i.length - 1; r >= 0; r--) {
          let o = i[r];
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
          re((i) => (e.svgText = i)),
          M(() => this._svgElementFromConfig(e))
        );
      }
      _loadSvgIconSetFromConfig(e) {
        return e.svgText
          ? I(null)
          : this._fetchIcon(e).pipe(re((i) => (e.svgText = i)));
      }
      _extractSvgIconFromSet(e, i, r) {
        let o = e.querySelector(`[id="${i}"]`);
        if (!o) return null;
        let a = o.cloneNode(!0);
        if ((a.removeAttribute("id"), a.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(a, r);
        if (a.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(a), r);
        let c = this._svgElementFromString(ln("<svg></svg>"));
        return c.appendChild(a), this._setSvgAttributes(c, r);
      }
      _svgElementFromString(e) {
        let i = this._document.createElement("DIV");
        i.innerHTML = e;
        let r = i.querySelector("svg");
        if (!r) throw Error("<svg> tag not found");
        return r;
      }
      _toSvgElement(e) {
        let i = this._svgElementFromString(ln("<svg></svg>")),
          r = e.attributes;
        for (let o = 0; o < r.length; o++) {
          let { name: a, value: c } = r[o];
          a !== "id" && i.setAttribute(a, c);
        }
        for (let o = 0; o < e.childNodes.length; o++)
          e.childNodes[o].nodeType === this._document.ELEMENT_NODE &&
            i.appendChild(e.childNodes[o].cloneNode(!0));
        return i;
      }
      _setSvgAttributes(e, i) {
        return (
          e.setAttribute("fit", ""),
          e.setAttribute("height", "100%"),
          e.setAttribute("width", "100%"),
          e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          e.setAttribute("focusable", "false"),
          i && i.viewBox && e.setAttribute("viewBox", i.viewBox),
          e
        );
      }
      _fetchIcon(e) {
        let { url: i, options: r } = e,
          o = r?.withCredentials ?? !1;
        if (!this._httpClient) throw ep();
        if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
        let a = this._sanitizer.sanitize(Ie.RESOURCE_URL, i);
        if (!a) throw Ol(i);
        let c = this._inProgressUrlFetches.get(a);
        if (c) return c;
        let s = this._httpClient
          .get(a, { responseType: "text", withCredentials: o })
          .pipe(
            M((d) => ln(d)),
            rt(() => this._inProgressUrlFetches.delete(a)),
            Oa()
          );
        return this._inProgressUrlFetches.set(a, s), s;
      }
      _addSvgIconConfig(e, i, r) {
        return this._svgIconConfigs.set(Nl(e, i), r), this;
      }
      _addSvgIconSetConfig(e, i) {
        let r = this._iconSetConfigs.get(e);
        return r ? r.push(i) : this._iconSetConfigs.set(e, [i]), this;
      }
      _svgElementFromConfig(e) {
        if (!e.svgElement) {
          let i = this._svgElementFromString(e.svgText);
          this._setSvgAttributes(i, e.options), (e.svgElement = i);
        }
        return e.svgElement;
      }
      _getIconConfigFromResolvers(e, i) {
        for (let r = 0; r < this._resolvers.length; r++) {
          let o = this._resolvers[r](i, e);
          if (o)
            return ip(o) ? new tt(o.url, null, o.options) : new tt(o, null);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(b(Et, 8), b(Ti), b(H, 8), b(xt));
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })();
function xr(t) {
  return t.cloneNode(!0);
}
function Nl(t, n) {
  return t + ":" + n;
}
function ip(t) {
  return !!(t.url && t.options);
}
var np = new E("MAT_ICON_DEFAULT_OPTIONS"),
  rp = new E("mat-icon-location", { providedIn: "root", factory: op });
function op() {
  let t = x(H),
    n = t ? t.location : null;
  return { getPathname: () => (n ? n.pathname + n.search : "") };
}
var jl = [
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
  ap = jl.map((t) => `[${t}]`).join(", "),
  sp = /^url\(['"]?#(.*?)['"]?\)$/,
  Ll = (() => {
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
        let i = this._cleanupFontValue(e);
        i !== this._fontSet &&
          ((this._fontSet = i), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(e) {
        let i = this._cleanupFontValue(e);
        i !== this._fontIcon &&
          ((this._fontIcon = i), this._updateFontIconClasses());
      }
      constructor(e, i, r, o, a, c) {
        (this._elementRef = e),
          (this._iconRegistry = i),
          (this._location = o),
          (this._errorHandler = a),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = ui.EMPTY),
          c &&
            (c.color && (this.color = this._defaultColor = c.color),
            c.fontSet && (this.fontSet = c.fontSet)),
          r || e.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(e) {
        if (!e) return ["", ""];
        let i = e.split(":");
        switch (i.length) {
          case 1:
            return ["", i[0]];
          case 2:
            return i;
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
          let i = this._location.getPathname();
          i !== this._previousPath &&
            ((this._previousPath = i), this._prependPathToReferences(i));
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
        let i = this._location.getPathname();
        (this._previousPath = i),
          this._cacheChildrenWithExternalReferences(e),
          this._prependPathToReferences(i),
          this._elementRef.nativeElement.appendChild(e);
      }
      _clearSvgElement() {
        let e = this._elementRef.nativeElement,
          i = e.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          i--;

        ) {
          let r = e.childNodes[i];
          (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") &&
            r.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let e = this._elementRef.nativeElement,
          i = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((r) => r.length > 0);
        this._previousFontSetClass.forEach((r) => e.classList.remove(r)),
          i.forEach((r) => e.classList.add(r)),
          (this._previousFontSetClass = i),
          this.fontIcon !== this._previousFontIconClass &&
            !i.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(e) {
        return typeof e == "string" ? e.trim().split(" ")[0] : e;
      }
      _prependPathToReferences(e) {
        let i = this._elementsWithExternalReferences;
        i &&
          i.forEach((r, o) => {
            r.forEach((a) => {
              o.setAttribute(a.name, `url('${e}#${a.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(e) {
        let i = e.querySelectorAll(ap),
          r = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let o = 0; o < i.length; o++)
          jl.forEach((a) => {
            let c = i[o],
              s = c.getAttribute(a),
              d = s ? s.match(sp) : null;
            if (d) {
              let h = r.get(c);
              h || ((h = []), r.set(c, h)), h.push({ name: a, value: d[1] });
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
          let [i, r] = this._splitIconName(e);
          i && (this._svgNamespace = i),
            r && (this._svgName = r),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(r, i)
              .pipe(he(1))
              .subscribe(
                (o) => this._setSvgElement(o),
                (o) => {
                  let a = `Error retrieving icon ${i}:${r}! ${o.message}`;
                  this._errorHandler.handleError(new Error(a));
                }
              ));
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(
            _(Z),
            _(tp),
            ct("aria-hidden"),
            _(rp),
            _(xt),
            _(np, 8)
          );
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["mat-icon"]],
          hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
          hostVars: 10,
          hostBindings: function (i, r) {
            i & 2 &&
              (ce("data-mat-icon-type", r._usingFontIcon() ? "font" : "svg")(
                "data-mat-icon-name",
                r._svgName || r.fontIcon
              )("data-mat-icon-namespace", r._svgNamespace || r.fontSet)(
                "fontIcon",
                r._usingFontIcon() ? r.fontIcon : null
              ),
              Xe(r.color ? "mat-" + r.color : ""),
              ae("mat-icon-inline", r.inline)(
                "mat-icon-no-color",
                r.color !== "primary" &&
                  r.color !== "accent" &&
                  r.color !== "warn"
              ));
          },
          inputs: {
            color: "color",
            inline: [2, "inline", "inline", oe],
            svgIcon: "svgIcon",
            fontSet: "fontSet",
            fontIcon: "fontIcon",
          },
          exportAs: ["matIcon"],
          standalone: !0,
          features: [ke, ne],
          ngContentSelectors: Xh,
          decls: 1,
          vars: 0,
          template: function (i, r) {
            i & 1 && (fe(), le(0));
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
  Cr = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ imports: [ee, ee] });
      }
    }
    return t;
  })();
var Vl = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [ee, hr, ee] });
    }
  }
  return t;
})();
var lp = ["*", [["mat-toolbar-row"]]],
  dp = ["*", "mat-toolbar-row"],
  up = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵdir = J({
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
  wr = (() => {
    class t {
      constructor(e, i, r) {
        (this._elementRef = e), (this._platform = i), (this._document = r);
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
        this.ɵfac = function (i) {
          return new (i || t)(_(Z), _(Oe), _(H));
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["mat-toolbar"]],
          contentQueries: function (i, r, o) {
            if ((i & 1 && Ut(o, up, 5), i & 2)) {
              let a;
              ye((a = xe())) && (r._toolbarRows = a);
            }
          },
          hostAttrs: [1, "mat-toolbar"],
          hostVars: 6,
          hostBindings: function (i, r) {
            i & 2 &&
              (Xe(r.color ? "mat-" + r.color : ""),
              ae("mat-toolbar-multiple-rows", r._toolbarRows.length > 0)(
                "mat-toolbar-single-row",
                r._toolbarRows.length === 0
              ));
          },
          inputs: { color: "color" },
          exportAs: ["matToolbar"],
          standalone: !0,
          features: [ne],
          ngContentSelectors: dp,
          decls: 2,
          vars: 0,
          template: function (i, r) {
            i & 1 && (fe(lp), le(0), le(1, 1));
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
var Ir = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [ee, ee] });
    }
  }
  return t;
})();
var mp = ["input"],
  hp = ["label"],
  pp = ["*"],
  fp = new E("mat-checkbox-default-options", {
    providedIn: "root",
    factory: Ul,
  });
function Ul() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: !1,
  };
}
var be = (function (t) {
    return (
      (t[(t.Init = 0)] = "Init"),
      (t[(t.Checked = 1)] = "Checked"),
      (t[(t.Unchecked = 2)] = "Unchecked"),
      (t[(t.Indeterminate = 3)] = "Indeterminate"),
      t
    );
  })(be || {}),
  gp = { provide: li, useExisting: yt(() => kr), multi: !0 },
  xa = class {},
  bp = 0,
  zl = Ul(),
  kr = (() => {
    class t {
      focus() {
        this._inputElement.nativeElement.focus();
      }
      _createChangeEvent(e) {
        let i = new xa();
        return (i.source = this), (i.checked = e), i;
      }
      _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
      }
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor(e, i, r, o, a, c) {
        (this._elementRef = e),
          (this._changeDetectorRef = i),
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
          (this.change = new ie()),
          (this.indeterminateChange = new ie()),
          (this._onTouched = () => {}),
          (this._currentAnimationClass = ""),
          (this._currentCheckState = be.Init),
          (this._controlValueAccessorChangeFn = () => {}),
          (this._validatorChangeFn = () => {}),
          (this._checked = !1),
          (this._disabled = !1),
          (this._indeterminate = !1),
          (this._options = this._options || zl),
          (this.color = this._options.color || zl.color),
          (this.tabIndex = parseInt(o) || 0),
          (this.id = this._uniqueId = `mat-mdc-checkbox-${++bp}`),
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
        let i = e != this._indeterminate;
        (this._indeterminate = e),
          i &&
            (this._indeterminate
              ? this._transitionCheckState(be.Indeterminate)
              : this._transitionCheckState(
                  this.checked ? be.Checked : be.Unchecked
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
        let i = this._currentCheckState,
          r = this._getAnimationTargetElement();
        if (
          !(i === e || !r) &&
          (this._currentAnimationClass &&
            r.classList.remove(this._currentAnimationClass),
          (this._currentAnimationClass =
            this._getAnimationClassForCheckStateTransition(i, e)),
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
              this._checked ? be.Checked : be.Unchecked
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
      _getAnimationClassForCheckStateTransition(e, i) {
        if (this._animationMode === "NoopAnimations") return "";
        switch (e) {
          case be.Init:
            if (i === be.Checked)
              return this._animationClasses.uncheckedToChecked;
            if (i == be.Indeterminate)
              return this._checked
                ? this._animationClasses.checkedToIndeterminate
                : this._animationClasses.uncheckedToIndeterminate;
            break;
          case be.Unchecked:
            return i === be.Checked
              ? this._animationClasses.uncheckedToChecked
              : this._animationClasses.uncheckedToIndeterminate;
          case be.Checked:
            return i === be.Unchecked
              ? this._animationClasses.checkedToUnchecked
              : this._animationClasses.checkedToIndeterminate;
          case be.Indeterminate:
            return i === be.Checked
              ? this._animationClasses.indeterminateToChecked
              : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
      }
      _syncIndeterminate(e) {
        let i = this._inputElement;
        i && (i.nativeElement.indeterminate = e);
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
        this.ɵfac = function (i) {
          return new (i || t)(
            _(Z),
            _(ge),
            _(B),
            ct("tabindex"),
            _(Le, 8),
            _(fp, 8)
          );
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["mat-checkbox"]],
          viewQuery: function (i, r) {
            if ((i & 1 && (Ve(mp, 5), Ve(hp, 5), Ve(nn, 5)), i & 2)) {
              let o;
              ye((o = xe())) && (r._inputElement = o.first),
                ye((o = xe())) && (r._labelElement = o.first),
                ye((o = xe())) && (r.ripple = o.first);
            }
          },
          hostAttrs: [1, "mat-mdc-checkbox"],
          hostVars: 16,
          hostBindings: function (i, r) {
            i & 2 &&
              (_i("id", r.id),
              ce("tabindex", null)("aria-label", null)("aria-labelledby", null),
              Xe(r.color ? "mat-" + r.color : "mat-accent"),
              ae(
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
            required: [2, "required", "required", oe],
            labelPosition: "labelPosition",
            name: "name",
            value: "value",
            disableRipple: [2, "disableRipple", "disableRipple", oe],
            tabIndex: [
              2,
              "tabIndex",
              "tabIndex",
              (e) => (e == null ? void 0 : xi(e)),
            ],
            color: "color",
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              oe,
            ],
            checked: [2, "checked", "checked", oe],
            disabled: [2, "disabled", "disabled", oe],
            indeterminate: [2, "indeterminate", "indeterminate", oe],
          },
          outputs: {
            change: "change",
            indeterminateChange: "indeterminateChange",
          },
          exportAs: ["matCheckbox"],
          standalone: !0,
          features: [
            Be([gp, { provide: va, useExisting: t, multi: !0 }]),
            ke,
            He,
            ne,
          ],
          ngContentSelectors: pp,
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
          template: function (i, r) {
            if (i & 1) {
              let o = $e();
              fe(),
                u(0, "div", 3),
                z("click", function (c) {
                  return j(o), L(r._preventBubblingFromLabel(c));
                }),
                u(1, "div", 4, 0)(3, "div", 5),
                z("click", function () {
                  return j(o), L(r._onTouchTargetClick());
                }),
                m(),
                u(4, "input", 6, 1),
                z("blur", function () {
                  return j(o), L(r._onBlur());
                })("click", function () {
                  return j(o), L(r._onInputClick());
                })("change", function (c) {
                  return j(o), L(r._onInteractionEvent(c));
                }),
                m(),
                V(6, "div", 7),
                u(7, "div", 8),
                pn(),
                u(8, "svg", 9),
                V(9, "path", 10),
                m(),
                fn(),
                V(10, "div", 11),
                m(),
                V(11, "div", 12),
                m(),
                u(12, "label", 13, 2),
                le(14),
                m()();
            }
            if (i & 2) {
              let o = Hr(2);
              C("labelPosition", r.labelPosition),
                l(4),
                ae("mdc-checkbox--selected", r.checked),
                C("checked", r.checked)("indeterminate", r.indeterminate)(
                  "disabled",
                  r.disabled && !r.disabledInteractive
                )("id", r.inputId)("required", r.required)(
                  "tabIndex",
                  r.disabled && !r.disabledInteractive ? -1 : r.tabIndex
                ),
                ce("aria-label", r.ariaLabel || null)(
                  "aria-labelledby",
                  r.ariaLabelledby
                )("aria-describedby", r.ariaDescribedby)(
                  "aria-checked",
                  r.indeterminate ? "mixed" : null
                )(
                  "aria-disabled",
                  r.disabled && r.disabledInteractive ? !0 : null
                )("name", r.name)("value", r.value),
                l(7),
                C("matRippleTrigger", o)(
                  "matRippleDisabled",
                  r.disableRipple || r.disabled
                )("matRippleCentered", !0),
                l(),
                C("for", r.inputId);
            }
          },
          dependencies: [nn, pr],
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
var Hl = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [kr, ee, ee] });
    }
  }
  return t;
})();
var Gl = (() => {
  class t {
    constructor() {
      this._listeners = [];
    }
    notify(e, i) {
      for (let r of this._listeners) r(e, i);
    }
    listen(e) {
      return (
        this._listeners.push(e),
        () => {
          this._listeners = this._listeners.filter((i) => e !== i);
        }
      );
    }
    ngOnDestroy() {
      this._listeners = [];
    }
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
    }
  }
  return t;
})();
var yp = ["input"],
  xp = ["formField"],
  Cp = ["*"],
  $l = 0,
  Er = class {
    constructor(n, e) {
      (this.source = n), (this.value = e);
    }
  },
  wp = { provide: li, useExisting: yt(() => Ca), multi: !0 },
  ql = new E("MatRadioGroup"),
  Ip = new E("mat-radio-default-options", { providedIn: "root", factory: kp });
function kp() {
  return { color: "accent", disabledInteractive: !1 };
}
var Ca = (() => {
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
          (this._name = `mat-radio-group-${$l++}`),
          (this._selected = null),
          (this._isInitialized = !1),
          (this._labelPosition = "after"),
          (this._disabled = !1),
          (this._required = !1),
          (this._controlValueAccessorChangeFn = () => {}),
          (this.onTouched = () => {}),
          (this.change = new ie()),
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
          this._radios.forEach((i) => {
            (i.checked = this.value === i.value),
              i.checked && (this._selected = i);
          }));
      }
      _emitChangeEvent() {
        this._isInitialized &&
          this.change.emit(new Er(this._selected, this._value));
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
        this.ɵfac = function (i) {
          return new (i || t)(_(ge));
        };
      }
      static {
        this.ɵdir = J({
          type: t,
          selectors: [["mat-radio-group"]],
          contentQueries: function (i, r, o) {
            if ((i & 1 && Ut(o, Mr, 5), i & 2)) {
              let a;
              ye((a = xe())) && (r._radios = a);
            }
          },
          hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
          inputs: {
            color: "color",
            name: "name",
            labelPosition: "labelPosition",
            value: "value",
            selected: "selected",
            disabled: [2, "disabled", "disabled", oe],
            required: [2, "required", "required", oe],
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              oe,
            ],
          },
          outputs: { change: "change" },
          exportAs: ["matRadioGroup"],
          standalone: !0,
          features: [Be([wp, { provide: ql, useExisting: t }]), ke],
        });
      }
    }
    return t;
  })(),
  Mr = (() => {
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
      constructor(e, i, r, o, a, c, s, d) {
        (this._elementRef = i),
          (this._changeDetector = r),
          (this._focusMonitor = o),
          (this._radioDispatcher = a),
          (this._defaultOptions = s),
          (this._ngZone = x(B)),
          (this._uniqueId = `mat-radio-${++$l}`),
          (this.id = this._uniqueId),
          (this.disableRipple = !1),
          (this.tabIndex = 0),
          (this.change = new ie()),
          (this._checked = !1),
          (this._value = null),
          (this._removeUniqueSelectionListener = () => {}),
          (this._injector = x(Lt)),
          (this._onInputClick = (h) => {
            this.disabled && this.disabledInteractive && h.preventDefault();
          }),
          (this.radioGroup = e),
          (this._noopAnimations = c === "NoopAnimations"),
          (this._disabledInteractive = s?.disabledInteractive ?? !1),
          d && (this.tabIndex = xi(d, 0));
      }
      focus(e, i) {
        i
          ? this._focusMonitor.focusVia(this._inputElement, i, e)
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
            (e, i) => {
              e !== this.id && i === this.name && (this.checked = !1);
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
        this.change.emit(new Er(this, this._value));
      }
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      _onInputInteraction(e) {
        if ((e.stopPropagation(), !this.checked && !this.disabled)) {
          let i = this.radioGroup && this.value !== this.radioGroup.value;
          (this.checked = !0),
            this._emitChangeEvent(),
            this.radioGroup &&
              (this.radioGroup._controlValueAccessorChangeFn(this.value),
              i && this.radioGroup._emitChangeEvent());
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
          i;
        if (
          (!e || !e.selected || this.disabled
            ? (i = this.tabIndex)
            : (i = e.selected === this ? this.tabIndex : -1),
          i !== this._previousTabIndex)
        ) {
          let r = this._inputElement?.nativeElement;
          r &&
            (r.setAttribute("tabindex", i + ""),
            (this._previousTabIndex = i),
            yn(
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
        this.ɵfac = function (i) {
          return new (i || t)(
            _(ql, 8),
            _(Z),
            _(ge),
            _(tl),
            _(Gl),
            _(Le, 8),
            _(Ip, 8),
            ct("tabindex")
          );
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["mat-radio-button"]],
          viewQuery: function (i, r) {
            if ((i & 1 && (Ve(yp, 5), Ve(xp, 7, Z)), i & 2)) {
              let o;
              ye((o = xe())) && (r._inputElement = o.first),
                ye((o = xe())) && (r._rippleTrigger = o.first);
            }
          },
          hostAttrs: [1, "mat-mdc-radio-button"],
          hostVars: 19,
          hostBindings: function (i, r) {
            i & 1 &&
              z("focus", function () {
                return r._inputElement.nativeElement.focus();
              }),
              i & 2 &&
                (ce("id", r.id)("tabindex", null)("aria-label", null)(
                  "aria-labelledby",
                  null
                )("aria-describedby", null),
                ae("mat-primary", r.color === "primary")(
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
            disableRipple: [2, "disableRipple", "disableRipple", oe],
            tabIndex: [
              2,
              "tabIndex",
              "tabIndex",
              (e) => (e == null ? 0 : xi(e)),
            ],
            checked: [2, "checked", "checked", oe],
            value: "value",
            labelPosition: "labelPosition",
            disabled: [2, "disabled", "disabled", oe],
            required: [2, "required", "required", oe],
            color: "color",
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              oe,
            ],
          },
          outputs: { change: "change" },
          exportAs: ["matRadioButton"],
          standalone: !0,
          features: [ke, ne],
          ngContentSelectors: Cp,
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
          template: function (i, r) {
            if (i & 1) {
              let o = $e();
              fe(),
                u(0, "div", 2, 0)(2, "div", 3)(3, "div", 4),
                z("click", function (c) {
                  return j(o), L(r._onTouchTargetClick(c));
                }),
                m(),
                u(4, "input", 5, 1),
                z("change", function (c) {
                  return j(o), L(r._onInputInteraction(c));
                }),
                m(),
                u(6, "div", 6),
                V(7, "div", 7)(8, "div", 8),
                m(),
                u(9, "div", 9),
                V(10, "div", 10),
                m()(),
                u(11, "label", 11),
                le(12),
                m()();
            }
            i & 2 &&
              (C("labelPosition", r.labelPosition),
              l(2),
              ae("mdc-radio--disabled", r.disabled),
              l(2),
              C("id", r.inputId)("checked", r.checked)(
                "disabled",
                r.disabled && !r.disabledInteractive
              )("required", r.required),
              ce("name", r.name)("value", r.value)("aria-label", r.ariaLabel)(
                "aria-labelledby",
                r.ariaLabelledby
              )("aria-describedby", r.ariaDescribedby)(
                "aria-disabled",
                r.disabled && r.disabledInteractive ? "true" : null
              ),
              l(5),
              C("matRippleTrigger", r._rippleTrigger.nativeElement)(
                "matRippleDisabled",
                r._isRippleDisabled()
              )("matRippleCentered", !0),
              l(2),
              C("for", r.inputId));
          },
          dependencies: [nn, pr],
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
  Wl = (() => {
    class t {
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ imports: [ee, we, hr, Mr, ee] });
      }
    }
    return t;
  })();
var dn = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [ee, we, Zc, ee] });
    }
  }
  return t;
})();
var Zl = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({});
    }
  }
  return t;
})();
var Kl = (() => {
  class t {
    static {
      this.ɵfac = function (i) {
        return new (i || t)();
      };
    }
    static {
      this.ɵmod = R({ type: t });
    }
    static {
      this.ɵinj = T({ imports: [ee, dn, dn, Zl, ee] });
    }
  }
  return t;
})();
var Ar = class t {
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = te({
    type: t,
    selectors: [["app-footer"]],
    standalone: !0,
    features: [ne],
    decls: 37,
    vars: 18,
    consts: [
      ["color", "primary", 1, "footer"],
      [1, "footer-content", 2, "padding-bottom", "20px"],
      [1, "footer-column"],
      [
        "href",
        "https://sr.wikipedia.org/sr-el/Motorni_benzin",
        "target",
        "_blank",
      ],
      [
        "href",
        "https://sr.wikipedia.org/sr-el/%D0%94%D0%B8%D0%B7%D0%B5%D0%BB-%D0%B3%D0%BE%D1%80%D0%B8%D0%B2%D0%BE",
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
        "mailto:admin@gorivoinfo.com?subject=Info&body=Zdravo",
        "aria-label",
        "Email",
      ],
      [1, "footer-email"],
      [1, "copyright"],
    ],
    template: function (e, i) {
      e & 1 &&
        (u(0, "footer")(1, "mat-toolbar", 0)(2, "div", 1)(3, "div", 2)(4, "h3"),
        p(5),
        f(6, "translate"),
        m(),
        u(7, "ul")(8, "nav")(9, "li")(10, "a", 3),
        p(11),
        f(12, "translate"),
        m()(),
        u(13, "li")(14, "a", 3),
        p(15),
        f(16, "translate"),
        m()(),
        u(17, "li")(18, "a", 4),
        p(19),
        f(20, "translate"),
        m()(),
        u(21, "li")(22, "a", 5),
        p(23),
        f(24, "translate"),
        m()()()()(),
        u(25, "div", 6)(26, "h3"),
        p(27),
        f(28, "translate"),
        m(),
        u(29, "a", 7)(30, "mat-icon"),
        p(31, "email"),
        m(),
        u(32, "span", 8),
        p(33, "admin@gorivoinfo.com"),
        m()()()(),
        u(34, "div", 9)(35, "span"),
        p(36, " Copyright \xA9 2024 Visi osnovac."),
        m()()()()),
        e & 2 &&
          (l(5),
          k(w(6, 6, "GORIVA")),
          l(6),
          k(w(12, 8, "BENZIN_95")),
          l(4),
          k(w(16, 10, "BENZIN_98")),
          l(4),
          k(w(20, 12, "EVRO_DIZEL")),
          l(4),
          k(w(24, 14, "AUTO_GAS")),
          l(4),
          k(w(28, 16, "KONTAKT")));
    },
    dependencies: [Ir, wr, Cr, Ll, dn, Kl, ni, cr],
    styles: [
      ".footer[_ngcontent-%COMP%]{position:relative;bottom:0;width:100%;height:218px;display:flex;background-color:#faf9fd;color:#121713;z-index:10;top:79px;justify-content:space-around}.footer-content[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;max-width:1200px;padding:0 20px;justify-content:space-between}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:0 10px}.footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#007bff}.footer-column[_ngcontent-%COMP%]{padding:10px;color:#fff;font-size:.9rem;margin-bottom:.45em;color:#121713}.footer-form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:700!important}.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disclosure-closed;padding:0;margin-top:0;color:#007bff}.footer-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:0;color:#121713}.footer-form-field[_ngcontent-%COMP%]{width:200px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{margin-top:10px}.copyright[_ngcontent-%COMP%]{position:absolute;bottom:9px;font-size:1rem}.footer-email[_ngcontent-%COMP%]{position:relative;bottom:6px;margin-left:8px;font-family:Fauna One,Lora,Roboto,Helvetica Neue,sans-serif}@media screen and (max-width: 540px){.footer-email[_ngcontent-%COMP%]{display:none!important}}",
    ],
  });
};
function Mp(t, n) {
  if (t & 1) {
    let e = $e();
    u(0, "div", 1)(1, "div", 2),
      pn(),
      u(2, "svg", 3),
      V(3, "path", 4)(4, "path", 5),
      m(),
      fn(),
      u(5, "div", 6),
      z("click", function () {
        j(e);
        let r = D();
        return L(r.scrollToTop());
      }),
      u(6, "span", 7),
      p(7, "arrow_upward_alt"),
      m()()()();
  }
  if (t & 2) {
    let e = D();
    l(4), ce("stroke-dasharray", e.scrollProgress + ", 100");
  }
}
var Sr = class t {
  isButtonVisible = !1;
  scrollProgress = 0;
  onScroll() {
    let n =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0,
      e =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    (this.scrollProgress = (n / e) * 100), (this.isButtonVisible = n > 100);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵcmp = te({
    type: t,
    selectors: [["app-back-to-top"]],
    hostBindings: function (e, i) {
      e & 1 &&
        z(
          "scroll",
          function () {
            return i.onScroll();
          },
          !1,
          Wa
        );
    },
    standalone: !0,
    features: [ne],
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
      [1, "material-symbols-outlined"],
    ],
    template: function (e, i) {
      e & 1 && pe(0, Mp, 8, 1, "div", 0), e & 2 && C("ngIf", i.isButtonVisible);
    },
    dependencies: [we, Ht],
    styles: [
      ".back-to-top-container[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:60px;height:60px;display:flex;justify-content:center;align-items:center;z-index:1000}.progress-circle[_ngcontent-%COMP%]{position:relative;width:60px;height:60px}.progress-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{pointer-events:none}.circle[_ngcontent-%COMP%]{transform:rotate(-90deg);width:100%;height:100%}.circle-bg[_ngcontent-%COMP%], .circle-progress[_ngcontent-%COMP%]{fill:none;stroke-width:3.8}.circle-bg[_ngcontent-%COMP%]{stroke:#e6e6e6}.circle-progress[_ngcontent-%COMP%]{stroke:#007bff;stroke-linecap:round;transition:stroke-dasharray .3s ease}.back-to-top[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#007bff;color:#fff;border:none;border-radius:50%;width:40px;height:40px;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:20px;-webkit-tap-highlight-color:transparent;box-shadow:none;outline:none}.back-to-top[_ngcontent-%COMP%]:hover{background-color:#0056b3}",
    ],
  });
};
var Ap = ["overlay"],
  Sp = ["*"];
function Dp(t, n) {
  t & 1 && V(0, "div");
}
function Tp(t, n) {
  if ((t & 1 && (u(0, "div"), pe(1, Dp, 1, 0, "div", 6), m()), t & 2)) {
    let e = D(2);
    Xe(e.spinner.class),
      xn("color", e.spinner.color),
      l(),
      C("ngForOf", e.spinner.divArray);
  }
}
function Rp(t, n) {
  if ((t & 1 && (V(0, "div", 7), f(1, "safeHtml")), t & 2)) {
    let e = D(2);
    C("innerHTML", w(1, 1, e.template), qa);
  }
}
function Fp(t, n) {
  if (
    (t & 1 &&
      (u(0, "div", 2, 0),
      pe(2, Tp, 2, 5, "div", 3)(3, Rp, 2, 3, "div", 4),
      u(4, "div", 5),
      le(5),
      m()()),
    t & 2)
  ) {
    let e = D();
    xn("background-color", e.spinner.bdColor)("z-index", e.spinner.zIndex)(
      "position",
      e.spinner.fullScreen ? "fixed" : "absolute"
    ),
      C("@.disabled", e.disableAnimation)("@fadeIn", "in"),
      l(2),
      C("ngIf", !e.template),
      l(),
      C("ngIf", e.template),
      l(),
      xn("z-index", e.spinner.zIndex);
  }
}
var Op = {
    "ball-8bits": 16,
    "ball-atom": 4,
    "ball-beat": 3,
    "ball-circus": 5,
    "ball-climbing-dot": 4,
    "ball-clip-rotate": 1,
    "ball-clip-rotate-multiple": 2,
    "ball-clip-rotate-pulse": 2,
    "ball-elastic-dots": 5,
    "ball-fall": 3,
    "ball-fussion": 4,
    "ball-grid-beat": 9,
    "ball-grid-pulse": 9,
    "ball-newton-cradle": 4,
    "ball-pulse": 3,
    "ball-pulse-rise": 5,
    "ball-pulse-sync": 3,
    "ball-rotate": 1,
    "ball-running-dots": 5,
    "ball-scale": 1,
    "ball-scale-multiple": 3,
    "ball-scale-pulse": 2,
    "ball-scale-ripple": 1,
    "ball-scale-ripple-multiple": 3,
    "ball-spin": 8,
    "ball-spin-clockwise": 8,
    "ball-spin-clockwise-fade": 8,
    "ball-spin-clockwise-fade-rotating": 8,
    "ball-spin-fade": 8,
    "ball-spin-fade-rotating": 8,
    "ball-spin-rotate": 2,
    "ball-square-clockwise-spin": 8,
    "ball-square-spin": 8,
    "ball-triangle-path": 3,
    "ball-zig-zag": 2,
    "ball-zig-zag-deflect": 2,
    cog: 1,
    "cube-transition": 2,
    fire: 3,
    "line-scale": 5,
    "line-scale-party": 5,
    "line-scale-pulse-out": 5,
    "line-scale-pulse-out-rapid": 5,
    "line-spin-clockwise-fade": 8,
    "line-spin-clockwise-fade-rotating": 8,
    "line-spin-fade": 8,
    "line-spin-fade-rotating": 8,
    pacman: 6,
    "square-jelly-box": 2,
    "square-loader": 1,
    "square-spin": 1,
    timer: 1,
    "triangle-skew-spin": 1,
  },
  wa = {
    BD_COLOR: "rgba(51,51,51,0.8)",
    SPINNER_COLOR: "#fff",
    Z_INDEX: 99999,
  },
  Ia = "primary",
  Ot = class t {
    constructor(n) {
      Object.assign(this, n);
    }
    static create(n) {
      return (
        !n?.template &&
          !n?.type &&
          console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),
        new t(n)
      );
    }
  },
  ka = (() => {
    class t {
      constructor() {
        this.spinnerObservable = new me(null);
      }
      getSpinner(e) {
        return this.spinnerObservable
          .asObservable()
          .pipe(Ne((i) => i && i.name === e));
      }
      show(e = Ia, i) {
        return new Promise((r, o) => {
          setTimeout(() => {
            i && Object.keys(i).length
              ? ((i.name = e),
                this.spinnerObservable.next(new Ot(q(g({}, i), { show: !0 }))),
                r(!0))
              : (this.spinnerObservable.next(new Ot({ name: e, show: !0 })),
                r(!0));
          }, 10);
        });
      }
      hide(e = Ia, i = 10) {
        return new Promise((r, o) => {
          setTimeout(() => {
            this.spinnerObservable.next(new Ot({ name: e, show: !1 })), r(!0);
          }, i);
        });
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
      }
    }
    return t;
  })(),
  Ql = new E("NGX_SPINNER_CONFIG"),
  Pp = (() => {
    class t {
      constructor(e) {
        this._sanitizer = e;
      }
      transform(e) {
        if (e) return this._sanitizer.bypassSecurityTrustHtml(e);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(_(Ti, 16));
        };
      }
      static {
        this.ɵpipe = hn({
          name: "safeHtml",
          type: t,
          pure: !0,
          standalone: !0,
        });
      }
    }
    return t;
  })(),
  Xl = (() => {
    class t {
      constructor(e, i, r, o) {
        (this.spinnerService = e),
          (this.changeDetector = i),
          (this.elementRef = r),
          (this.globalConfig = o),
          (this.disableAnimation = !1),
          (this.spinner = new Ot()),
          (this.ngUnsubscribe = new ue()),
          (this.setDefaultOptions = () => {
            let { type: a } = this.globalConfig ?? {};
            this.spinner = Ot.create({
              name: this.name,
              bdColor: this.bdColor,
              size: this.size,
              color: this.color,
              type: this.type ?? a,
              fullScreen: this.fullScreen,
              divArray: this.divArray,
              divCount: this.divCount,
              show: this.show,
              zIndex: this.zIndex,
              template: this.template,
              showSpinner: this.showSpinner,
            });
          }),
          (this.bdColor = wa.BD_COLOR),
          (this.zIndex = wa.Z_INDEX),
          (this.color = wa.SPINNER_COLOR),
          (this.size = "large"),
          (this.fullScreen = !0),
          (this.name = Ia),
          (this.template = null),
          (this.showSpinner = !1),
          (this.divArray = []),
          (this.divCount = 0),
          (this.show = !1);
      }
      initObservable() {
        this.spinnerService
          .getSpinner(this.name)
          .pipe(at(this.ngUnsubscribe))
          .subscribe((e) => {
            this.setDefaultOptions(),
              Object.assign(this.spinner, e),
              e.show && this.onInputChange(),
              this.changeDetector.detectChanges();
          });
      }
      ngOnInit() {
        this.setDefaultOptions(), this.initObservable();
      }
      isSpinnerZone(e) {
        return e === this.elementRef.nativeElement.parentElement
          ? !0
          : e.parentNode && this.isSpinnerZone(e.parentNode);
      }
      ngOnChanges(e) {
        for (let i in e)
          if (i) {
            let r = e[i];
            if (r.isFirstChange()) return;
            typeof r.currentValue < "u" &&
              r.currentValue !== r.previousValue &&
              r.currentValue !== "" &&
              ((this.spinner[i] = r.currentValue),
              i === "showSpinner" &&
                (r.currentValue
                  ? this.spinnerService.show(this.spinner.name, this.spinner)
                  : this.spinnerService.hide(this.spinner.name)),
              i === "name" && this.initObservable());
          }
      }
      getClass(e, i) {
        (this.spinner.divCount = Op[e]),
          (this.spinner.divArray = Array(this.spinner.divCount)
            .fill(0)
            .map((o, a) => a));
        let r = "";
        switch (i.toLowerCase()) {
          case "small":
            r = "la-sm";
            break;
          case "medium":
            r = "la-2x";
            break;
          case "large":
            r = "la-3x";
            break;
          default:
            break;
        }
        return "la-" + e + " " + r;
      }
      onInputChange() {
        this.spinner.class = this.getClass(
          this.spinner.type,
          this.spinner.size
        );
      }
      ngOnDestroy() {
        this.ngUnsubscribe.next(), this.ngUnsubscribe.complete();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)(_(ka), _(ge), _(Z), _(Ql, 8));
        };
      }
      static {
        this.ɵcmp = te({
          type: t,
          selectors: [["ngx-spinner"]],
          viewQuery: function (i, r) {
            if ((i & 1 && Ve(Ap, 5), i & 2)) {
              let o;
              ye((o = xe())) && (r.spinnerDOM = o.first);
            }
          },
          inputs: {
            bdColor: "bdColor",
            size: "size",
            color: "color",
            type: "type",
            fullScreen: "fullScreen",
            name: "name",
            zIndex: "zIndex",
            template: "template",
            showSpinner: "showSpinner",
            disableAnimation: "disableAnimation",
          },
          standalone: !0,
          features: [He, ne],
          ngContentSelectors: Sp,
          decls: 1,
          vars: 1,
          consts: [
            ["overlay", ""],
            [
              "class",
              "ngx-spinner-overlay",
              3,
              "background-color",
              "z-index",
              "position",
              4,
              "ngIf",
            ],
            [1, "ngx-spinner-overlay"],
            [3, "class", "color", 4, "ngIf"],
            [3, "innerHTML", 4, "ngIf"],
            [1, "loading-text"],
            [4, "ngFor", "ngForOf"],
            [3, "innerHTML"],
          ],
          template: function (i, r) {
            i & 1 && (fe(), pe(0, Fp, 6, 12, "div", 1)),
              i & 2 && C("ngIf", r.spinner.show);
          },
          dependencies: [Pp, Ht, Dn],
          styles: [
            ".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}",
          ],
          data: {
            animation: [
              ds("fadeIn", [
                us("in", Rn({ opacity: 1 })),
                Wr(":enter", [Rn({ opacity: 0 }), qr(300)]),
                Wr(":leave", qr(200, Rn({ opacity: 0 }))),
              ]),
            ],
          },
          changeDetection: 0,
        });
      }
    }
    return t;
  })(),
  Jl = (() => {
    class t {
      static forRoot(e) {
        return { ngModule: t, providers: [{ provide: Ql, useValue: e }] };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || t)();
        };
      }
      static {
        this.ɵmod = R({ type: t });
      }
      static {
        this.ɵinj = T({ imports: [we] });
      }
    }
    return t;
  })();
var Dr = class t {
  constructor() {}
  rates = {
    RSD: 1,
    BAM: 0.0166875,
    EUR: 0.0085,
    MKD: 0.52575,
    BGN: 0.01675,
    ALL: 0.8434,
  };
  convert(n, e, i) {
    if (e === i) return n;
    if (!this.rates[e] || !this.rates[i])
      throw new Error(`Conversion rate not found for ${e} or ${i}`);
    return n.map((r) => (r / this.rates[e]) * this.rates[i]);
  }
  static ɵfac = function (e) {
    return new (e || t)();
  };
  static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
};
var ed = {
  production: !1,
  apiUrl: "https://location-finder-api-1.azurewebsites.net/api/location",
};
var Tr = class t {
  constructor(n) {
    this.http = n;
  }
  geoApiUrl = ed.apiUrl;
  getUsersLocation() {
    return this.http.get(this.geoApiUrl);
  }
  splitIpAddress(n) {
    if (!/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(n))
      throw new Error("Invalid IP address format");
    return n.split(".").map((i) => parseInt(i, 10));
  }
  static ɵfac = function (e) {
    return new (e || t)(b(Et));
  };
  static ɵprov = y({ token: t, factory: t.ɵfac, providedIn: "root" });
};
var Vp = (t) => ({ "background-color": t }),
  X = (t) => ({ color: t });
function Bp(t, n) {
  if ((t & 1 && (u(0, "mat-radio-button", 25), p(1), m()), t & 2)) {
    let e = n.$implicit;
    C("value", e), l(), k(e);
  }
}
function zp(t, n) {
  if (t & 1) {
    let e = $e();
    u(0, "div")(1, "mat-radio-group", 23),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.activeCurrency2, r) || (o.activeCurrency2 = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.onCurrencyChange());
      }),
      pe(2, Bp, 2, 2, "mat-radio-button", 24),
      m()();
  }
  if (t & 2) {
    let e = D();
    l(), De("ngModel", e.activeCurrency2), l(), C("ngForOf", e.currencies);
  }
}
function Up(t, n) {
  if (t & 1) {
    let e = $e();
    u(0, "div", 26)(1, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.selectAll, r) || (o.selectAll = r), L(r);
      }),
      z("change", function (r) {
        j(e);
        let o = D();
        return L(o.toggleAll(r.checked));
      }),
      p(2),
      f(3, "translate"),
      m(),
      u(4, "div", 28)(5, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showBih, r) || (o.showBih = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(6),
      f(7, "translate"),
      m(),
      u(8, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showCro, r) || (o.showCro = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showSer, r) || (o.showSer = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(12),
      f(13, "translate"),
      m(),
      u(14, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showSlo, r) || (o.showSlo = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(15),
      f(16, "translate"),
      m(),
      u(17, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showMont, r) || (o.showMont = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(18),
      f(19, "translate"),
      m(),
      u(20, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showMace, r) || (o.showMace = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(21),
      f(22, "translate"),
      m(),
      u(23, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showGreece, r) || (o.showGreece = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(24),
      f(25, "translate"),
      m(),
      u(26, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showBulgaria, r) || (o.showBulgaria = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(27),
      f(28, "translate"),
      m(),
      u(29, "mat-checkbox", 27),
      Re("ngModelChange", function (r) {
        j(e);
        let o = D();
        return Te(o.showAlba, r) || (o.showAlba = r), L(r);
      }),
      z("change", function () {
        j(e);
        let r = D();
        return L(r.updateSelectAll());
      }),
      p(30),
      f(31, "translate"),
      m()()();
  }
  if (t & 2) {
    let e = D();
    l(),
      De("ngModel", e.selectAll),
      l(),
      wt(" ", w(3, 20, "SELEKTUJ_SVE"), " "),
      l(3),
      De("ngModel", e.showBih),
      l(),
      k(w(7, 22, "Bih")),
      l(2),
      De("ngModel", e.showCro),
      l(),
      k(w(10, 24, "Hrvatska")),
      l(2),
      De("ngModel", e.showSer),
      l(),
      k(w(13, 26, "Srbija")),
      l(2),
      De("ngModel", e.showSlo),
      l(),
      k(w(16, 28, "Slovenija")),
      l(2),
      De("ngModel", e.showMont),
      l(),
      k(w(19, 30, "Crna Gora")),
      l(2),
      De("ngModel", e.showMace),
      l(),
      k(w(22, 32, "Severna Makedonija")),
      l(2),
      De("ngModel", e.showGreece),
      l(),
      k(w(25, 34, "Grcka")),
      l(2),
      De("ngModel", e.showBulgaria),
      l(),
      k(w(28, 36, "Bugarska")),
      l(2),
      De("ngModel", e.showAlba),
      l(),
      k(w(31, 38, "Albanija"));
  }
}
function Hp(t, n) {
  if (
    (t & 1 &&
      (u(0, "div", 29)(1, "div", 30),
      V(2, "div", 31),
      u(3, "div", 32),
      p(4),
      f(5, "translate"),
      m()()()),
    t & 2)
  ) {
    let e = n.$implicit;
    l(2), C("ngStyle", $(4, Vp, e.color)), l(2), k(w(5, 2, e.name));
  }
}
function Gp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 33),
      V(1, "div", 34),
      u(2, "div", 35),
      V(3, "div", 36),
      m(),
      u(4, "mat-card-title", 37),
      p(5),
      f(6, "translate"),
      m(),
      u(7, "mat-card-content", 38)(8, "div", 39)(9, "label"),
      p(10),
      f(11, "translate"),
      m(),
      u(12, "span", 40),
      p(13),
      f(14, "number"),
      m()(),
      u(15, "div", 39)(16, "label"),
      p(17),
      f(18, "translate"),
      m(),
      u(19, "span", 40),
      p(20),
      f(21, "number"),
      m()(),
      u(22, "div", 39)(23, "label"),
      p(24),
      f(25, "translate"),
      m(),
      u(26, "span", 40),
      p(27),
      f(28, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(5),
      k(w(6, 13, e.countries2[0].name)),
      l(5),
      k(w(11, 15, "BMB_95")),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Bosnia.bmb95))),
      l(),
      K(
        "",
        U(14, 17, e.convertedAmount[0], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(18, 20, "DIZEL")),
      l(2),
      C("ngStyle", $(32, X, e.getColor("diesel", e.fuelPrices.Bosnia.diesel))),
      l(),
      K(
        "",
        U(21, 22, e.convertedAmount[1], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(25, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Bosnia.gas))),
      l(),
      K(
        "",
        U(28, 27, e.convertedAmount[2], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function $p(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 41)(1, "div", 42),
      V(2, "img", 43),
      m(),
      u(3, "mat-card-title"),
      p(4),
      f(5, "translate"),
      m(),
      u(6, "mat-card-content", 44)(7, "div", 39)(8, "label"),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "span", 40),
      p(12),
      f(13, "number"),
      m()(),
      u(14, "div", 39)(15, "label"),
      p(16),
      f(17, "translate"),
      m(),
      u(18, "span", 40),
      p(19),
      f(20, "number"),
      m()(),
      u(21, "div", 39)(22, "label"),
      p(23),
      f(24, "translate"),
      m(),
      u(25, "span", 40),
      p(26),
      f(27, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(4),
      k(w(5, 13, e.countries2[1].name)),
      l(5),
      wt("", w(10, 15, "BMB_95"), " "),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Croatia.bmb95))),
      l(),
      K(
        "",
        U(13, 17, e.convertedAmount[3], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(17, 20, "DIZEL")),
      l(2),
      C("ngStyle", $(32, X, e.getColor("diesel", e.fuelPrices.Croatia.diesel))),
      l(),
      K(
        "",
        U(20, 22, e.convertedAmount[4], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(24, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Croatia.gas))),
      l(),
      K(
        "",
        U(27, 27, e.convertedAmount[5], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function qp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 45)(1, "div", 46),
      V(2, "img", 47),
      m(),
      u(3, "mat-card-title"),
      p(4),
      f(5, "translate"),
      m(),
      u(6, "mat-card-content", 48)(7, "div", 39)(8, "label"),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "span", 40),
      p(12),
      f(13, "number"),
      m()(),
      u(14, "div", 39)(15, "label"),
      p(16),
      f(17, "translate"),
      m(),
      u(18, "span", 40),
      p(19),
      f(20, "number"),
      m()(),
      u(21, "div", 39)(22, "label"),
      p(23),
      f(24, "translate"),
      m(),
      u(25, "span", 40),
      p(26),
      f(27, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(4),
      k(w(5, 13, e.countries2[2].name)),
      l(5),
      k(w(10, 15, "BMB_95")),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Serbia.bmb95))),
      l(),
      K(
        "",
        U(13, 17, e.convertedAmount[6], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(17, 20, "DIZEL")),
      l(2),
      C("ngStyle", $(32, X, e.getColor("diesel", e.fuelPrices.Serbia.diesel))),
      l(),
      K(
        "",
        U(20, 22, e.convertedAmount[7], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(24, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Serbia.gas))),
      l(),
      K(
        "",
        U(27, 27, e.convertedAmount[8], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function Wp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 49)(1, "div", 50),
      V(2, "img", 51),
      m(),
      u(3, "mat-card-title", 52),
      p(4),
      f(5, "translate"),
      m(),
      u(6, "mat-card-content", 53)(7, "div", 39)(8, "label"),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "span", 40),
      p(12),
      f(13, "number"),
      m()(),
      u(14, "div", 39)(15, "label"),
      p(16),
      f(17, "translate"),
      m(),
      u(18, "span", 40),
      p(19),
      f(20, "number"),
      m()(),
      u(21, "div", 39)(22, "label"),
      p(23),
      f(24, "translate"),
      m(),
      u(25, "span", 40),
      p(26),
      f(27, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(4),
      k(w(5, 13, e.countries2[3].name)),
      l(5),
      k(w(10, 15, "BMB_95")),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Slovenia.bmb95))),
      l(),
      K(
        "",
        U(13, 17, e.convertedAmount[9], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(17, 20, "DIZEL")),
      l(2),
      C(
        "ngStyle",
        $(32, X, e.getColor("diesel", e.fuelPrices.Slovenia.diesel))
      ),
      l(),
      K(
        "",
        U(20, 22, e.convertedAmount[10], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(24, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Slovenia.gas))),
      l(),
      K(
        "",
        U(27, 27, e.convertedAmount[11], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function Zp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 54)(1, "div", 55),
      V(2, "img", 56),
      m(),
      u(3, "mat-card-title"),
      p(4),
      f(5, "translate"),
      m(),
      u(6, "mat-card-content", 57)(7, "div", 39)(8, "label"),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "span", 40),
      p(12),
      f(13, "number"),
      m()(),
      u(14, "div", 39)(15, "label"),
      p(16),
      f(17, "translate"),
      m(),
      u(18, "span", 40),
      p(19),
      f(20, "number"),
      m()(),
      u(21, "div", 39)(22, "label"),
      p(23),
      f(24, "translate"),
      m(),
      u(25, "span", 40),
      p(26),
      f(27, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(4),
      k(w(5, 13, e.countries2[4].name)),
      l(5),
      k(w(10, 15, "BMB_95")),
      l(2),
      C(
        "ngStyle",
        $(30, X, e.getColor("bmb95", e.fuelPrices.Montenegro.bmb95))
      ),
      l(),
      K(
        "",
        U(13, 17, e.convertedAmount[12], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(17, 20, "DIZEL")),
      l(2),
      C(
        "ngStyle",
        $(32, X, e.getColor("diesel", e.fuelPrices.Montenegro.diesel))
      ),
      l(),
      K(
        "",
        U(20, 22, e.convertedAmount[13], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(24, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Montenegro.gas))),
      l(),
      K(
        "",
        U(27, 27, e.convertedAmount[14], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function Kp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 58)(1, "div", 59),
      V(2, "div", 60)(3, "div", 60)(4, "div", 60),
      m(),
      V(5, "div", 61)(6, "div", 62),
      u(7, "div", 63)(8, "mat-card-title", 64),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "mat-card-content", 65)(12, "div", 39)(13, "label"),
      p(14),
      f(15, "translate"),
      m(),
      u(16, "span", 40),
      p(17),
      f(18, "number"),
      m()(),
      u(19, "div", 39)(20, "label"),
      p(21),
      f(22, "translate"),
      m(),
      u(23, "span", 40),
      p(24),
      f(25, "number"),
      m()(),
      u(26, "div", 39)(27, "label"),
      p(28),
      f(29, "translate"),
      m(),
      u(30, "span", 40),
      p(31),
      f(32, "number"),
      m()()()()()),
    t & 2)
  ) {
    let e = D();
    l(9),
      k(w(10, 13, e.countries2[5].name)),
      l(5),
      k(w(15, 15, "BMB_95")),
      l(2),
      C(
        "ngStyle",
        $(30, X, e.getColor("bmb95", e.fuelPrices.North_Macedonia.bmb95))
      ),
      l(),
      K(
        "",
        U(18, 17, e.convertedAmount[15], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(22, 20, "DIZEL")),
      l(2),
      C(
        "ngStyle",
        $(32, X, e.getColor("diesel", e.fuelPrices.North_Macedonia.diesel))
      ),
      l(),
      K(
        "",
        U(25, 22, e.convertedAmount[16], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(29, 25, "GAS")),
      l(2),
      C(
        "ngStyle",
        $(34, X, e.getColor("gas", e.fuelPrices.North_Macedonia.gas))
      ),
      l(),
      K(
        "",
        U(32, 27, e.convertedAmount[17], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function Yp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 66)(1, "div", 67),
      V(2, "div")(3, "div")(4, "div")(5, "div"),
      m(),
      u(6, "div", 63)(7, "mat-card-title", 68),
      p(8),
      f(9, "translate"),
      m(),
      u(10, "mat-card-content", 69)(11, "div", 39)(12, "label"),
      p(13),
      f(14, "translate"),
      m(),
      u(15, "span", 40),
      p(16),
      f(17, "number"),
      m()(),
      u(18, "div", 39)(19, "label"),
      p(20),
      f(21, "translate"),
      m(),
      u(22, "span", 40),
      p(23),
      f(24, "number"),
      m()(),
      u(25, "div", 39)(26, "label"),
      p(27),
      f(28, "translate"),
      m(),
      u(29, "span", 40),
      p(30),
      f(31, "number"),
      m()()()()()),
    t & 2)
  ) {
    let e = D();
    l(8),
      k(w(9, 13, e.countries2[6].name)),
      l(5),
      k(w(14, 15, "BMB_95")),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Greece.bmb95))),
      l(),
      K(
        "",
        U(17, 17, e.convertedAmount[18], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(21, 20, "DIZEL")),
      l(2),
      C("ngStyle", $(32, X, e.getColor("diesel", e.fuelPrices.Greece.diesel))),
      l(),
      K(
        "",
        U(24, 22, e.convertedAmount[19], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(28, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Greece.gas))),
      l(),
      K(
        "",
        U(31, 27, e.convertedAmount[20], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function Qp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 70)(1, "mat-card-title", 71),
      p(2),
      f(3, "translate"),
      m(),
      u(4, "mat-card-content", 72)(5, "div", 39)(6, "label"),
      p(7),
      f(8, "translate"),
      m(),
      u(9, "span", 40),
      p(10),
      f(11, "number"),
      m()(),
      u(12, "div", 39)(13, "label"),
      p(14),
      f(15, "translate"),
      m(),
      u(16, "span", 40),
      p(17),
      f(18, "number"),
      m()(),
      u(19, "div", 39)(20, "label"),
      p(21),
      f(22, "translate"),
      m(),
      u(23, "span", 40),
      p(24),
      f(25, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(2),
      k(w(3, 13, e.countries2[7].name)),
      l(5),
      wt("", w(8, 15, "BMB_95"), " "),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Bulgaria.bmb95))),
      l(),
      K(
        "",
        U(11, 17, e.convertedAmount[21], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(15, 20, "DIZEL")),
      l(2),
      C(
        "ngStyle",
        $(32, X, e.getColor("diesel", e.fuelPrices.Bulgaria.diesel))
      ),
      l(),
      K(
        "",
        U(18, 22, e.convertedAmount[22], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(22, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Bulgaria.gas))),
      l(),
      K(
        "",
        U(25, 27, e.convertedAmount[23], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
function Xp(t, n) {
  if (
    (t & 1 &&
      (u(0, "mat-card", 73)(1, "div", 74),
      V(2, "img", 75),
      m(),
      u(3, "mat-card-title"),
      p(4),
      f(5, "translate"),
      m(),
      u(6, "mat-card-content", 76)(7, "div", 39)(8, "label"),
      p(9),
      f(10, "translate"),
      m(),
      u(11, "span", 40),
      p(12),
      f(13, "number"),
      m()(),
      u(14, "div", 39)(15, "label"),
      p(16),
      f(17, "translate"),
      m(),
      u(18, "span", 40),
      p(19),
      f(20, "number"),
      m()(),
      u(21, "div", 39)(22, "label"),
      p(23),
      f(24, "translate"),
      m(),
      u(25, "span", 40),
      p(26),
      f(27, "number"),
      m()()()()),
    t & 2)
  ) {
    let e = D();
    l(4),
      k(w(5, 13, e.countries2[8].name)),
      l(5),
      k(w(10, 15, "BMB_95")),
      l(2),
      C("ngStyle", $(30, X, e.getColor("bmb95", e.fuelPrices.Albania.bmb95))),
      l(),
      K(
        "",
        U(13, 17, e.convertedAmount[24], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(17, 20, "DIZEL")),
      l(2),
      C("ngStyle", $(32, X, e.getColor("diesel", e.fuelPrices.Albania.diesel))),
      l(),
      K(
        "",
        U(20, 22, e.convertedAmount[25], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      ),
      l(4),
      k(w(24, 25, "GAS")),
      l(2),
      C("ngStyle", $(34, X, e.getColor("gas", e.fuelPrices.Albania.gas))),
      l(),
      K(
        "",
        U(27, 27, e.convertedAmount[26], "1.2-2"),
        " ",
        e.activeCurrency2 || "RSD",
        ""
      );
  }
}
var Rr = class t {
  constructor(n, e, i, r, o, a, c) {
    this.currencyService = n;
    this.platformId = e;
    //console.log(i);
    
    this.fuelPriceService = i;
    this.translate = r;
    this.meta = o;
    this.titleService = a;
    this.spinner = c;
    (this.updated = new Date(2024, 11, 17)),
      this.translate.addLangs(["sr", "sl", "mk", "hr", "gr", "en", "bg", "al"]),
      this.translate.setDefaultLang("en");
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
    Bosnia: { bmb95: 143.79, diesel: 145.59, gas: 79.09 },
    Croatia: { bmb95: 173.08, diesel: 163.72, gas: 93.56 },
    Serbia: { bmb95: 179.62, diesel: 196.34, gas: 104.73 },
    Slovenia: { bmb95: 178.81, diesel: 183.25, gas: 107.47 },
    Montenegro: { bmb95: 168.417, diesel: 160.23, gas: 77.16 },
    North_Macedonia: { bmb95: 145.52, diesel: 134.1, gas: 87.5 },
    Greece: { bmb95: 208.98, diesel: 180.8, gas: 110.16 },
    Bulgaria: { bmb95: 151.52, diesel: 152.71, gas: 77.26 },
    Albania: { bmb95: 206.136, diesel: 206.136, gas: 67.918 },
  };
  countries2 = [
    { name: "Bih", selected: !1 },
    { name: "Hrvatska", selected: !1 },
    { name: "Srbija", selected: !1 },
    { name: "Slovenija", selected: !1 },
    { name: "Crna Gora", selected: !1 },
    { name: "Severna Makedonija", selected: !1 },
    { name: "Grcka", selected: !1 },
    { name: "Bugarska", selected: !1 },
    { name: "Albanija", selected: !1 },
  ];
  legends = [
    { name: "Najeftinije", color: "#00ea00" },
    { name: "Jeftinije", color: "#4CAF50" },
    { name: "Skuplje", color: "orange" },
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
  ekavica = "Cene";
  ijekavica = "Cijene";
  ngOnInit() {
    this.calculateMinMax(),
      this.getselectedCurrencies(),
      this.getSelectedCountries(),
      this.getUsersLocation();
  }
  ngAfterViewInit() {
    this.getselectedCurrencies(), this.getSelectedCountries();
  }
  ngDoCheck() {
    this.getselectedCurrencies(), this.getSelectedCountries();
  }
  getUserLocation() {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          (n) => {
            console.log(n);
            let e = n.coords.latitude;
            console.log(e);
            let i = n.coords.longitude;
            console.log(i), this.getCountryFromCoordinates(e, i);
          },
          (n) => {
            console.error("Error getting location", n);
          }
        )
      : console.error("Geolocation is not supported by this browser.");
  }
  getCountryFromCoordinates(n, e) {
    return n >= 42 && n <= 46 && e >= 15 && e <= 19
      ? this.ijekavica
      : n >= 44 && n <= 46 && e >= 19 && e <= 23
      ? this.ekavica
      : "Cena";
  }
  getSelectedCountries() {
    if (dt(this.platformId)) {
      let n = localStorage.getItem("selections");
      if (n) {
        let e = JSON.parse(n);
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
    if (dt(this.platformId)) {
      let n = localStorage.getItem("selectedCurrency");
      n && this.currencies.includes(n)
        ? (this.activeCurrency2 = n)
        : (this.activeCurrency2 = "RSD"),
        this.onCurrencyChange(),
        (this.loading = !1);
    }
  }
  calculateMinMax() {
    this.fuelTypes.forEach((n) => {
      let e = this.countries.map((c) => this.fuelPrices[c][n]);
      e.sort((c, s) => c - s);
      let i = e[0],
        r = e[e.length - 1],
        o = e[1] || i,
        a = e[e.length - 2] || r;
      this.minMaxValues[n] = { min: i, max: r, minNext: o, maxPrev: a };
    });
  }
  getColor(n, e) {
    let { min: i, max: r, minNext: o, maxPrev: a } = this.minMaxValues[n];
    return e === r
      ? "red"
      : e === i
      ? "#00ea00"
      : e === o
      ? "#4CAF50"
      : e === a
      ? "orange"
      : "white";
  }
  onCurrencyChange() {
    dt(this.platformId) &&
      localStorage.setItem("selectedCurrency", this.activeCurrency2),
      (this.convertedAmount = this.currencyService.convert(
        this.amounts,
        "RSD",
        this.activeCurrency2
      ));
  }
  isCheckboxDisabled(n) {
    return this.activeCurrency2 !== null && this.activeCurrency2 !== n;
  }
  toggleAll(n) {
    (this.selectAll = n),
      (this.showBih = n),
      (this.showCro = n),
      (this.showSer = n),
      (this.showSlo = n),
      (this.showMont = n),
      (this.showMace = n),
      (this.showGreece = n),
      (this.showBulgaria = n),
      (this.showAlba = n),
      this.saveSelections();
  }
  updateSelectAll() {
    let n =
      this.showBih &&
      this.showCro &&
      this.showSer &&
      this.showSlo &&
      this.showMont &&
      this.showMace &&
      this.showGreece &&
      this.showBulgaria &&
      this.showAlba;
    (this.selectAll = n), dt(this.platformId) && this.saveSelections();
  }
  saveSelections() {
    let n = {
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
    dt(this.platformId) &&
      localStorage.setItem("selections", JSON.stringify(n));
  }
  getUsersLocation() {
    this.spinner.show("getUsersLocationSpinner"),
      this.fuelPriceService.getUsersLocation().subscribe({
        next: (n) => {
          console.log(n);

          n.country === "Serbia"
            ? (this.translate.use("sr"),
              this.titleService.setTitle("Cene goriva u regionu i Balkanu"),
              this.meta.updateTag({
                name: "title",
                content: "Cene goriva u regionu i Balkanu",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Pogledajte trenutne cene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Severnoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "cena goriva, cene goriva, cene goriva region, cene goriva balkan, cene goriva srbija, cene goriva bosna, cene goriva bih, cene goriva hrvatska, cene goriva slovenija, cene goriva crna gora, cene goriva makedonija, cene goriva grcka, cene goriva bugarska, cene goriva albanija",
              }),
              this.meta.addTag({
                property: "og:title",
                content: "Cene goriva u regionu i Balkanu",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Pogledajte trenutne cene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Severnoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }))
            : n.country === "Bosnia and Herzegovina"
            ? (this.translate.use("hr"),
              this.titleService.setTitle("Cijene goriva u regionu i Balkanu"),
              this.meta.updateTag({
                name: "title",
                content: "Cijene goriva u regionu i Balkanu",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Pogledajte trenutne cijene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Sjevernoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "cijena goriva, cijene goriva, cijene goriva region, cijene goriva balkan, cijene goriva bih, cijene goriva bosna, cijene goriva republika srpska, cijene goriva hrvatska, cijene goriva srbija, cijene goriva slovenija, cijene goriva crna gora, cijene goriva makedonija, cijene goriva grcka, cijene goriva bugarska, cijene goriva albanija",
              }),
              this.meta.addTag({
                property: "og:title",
                content: "Cijene goriva u regionu i Balkanu",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Pogledajte trenutne cijene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Sjevernoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }))
            : n.country === "Croatia"
            ? (this.translate.use("hr"),
              this.titleService.setTitle("Cijene goriva u regionu i Balkanu"),
              this.meta.updateTag({
                name: "title",
                content: "Cijene goriva u regionu i Balkanu",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Pogledajte trenutne cijene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Sjevernoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "cijena goriva, cijene goriva, cijene goriva region, cijene goriva balkan, cijene goriva bih, cijene goriva bosna, cijene goriva republika srpska, cijene goriva hrvatska, cijene goriva srbija, cijene goriva slovenija, cijene goriva crna gora, cijene goriva makedonija, cijene goriva grcka, cijene goriva bugarska, cijene goriva albanija",
              }),
              this.meta.addTag({
                property: "og:title",
                content: "Cijene goriva u regionu i Balkanu",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Pogledajte trenutne cijene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Sjevernoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }))
            : n.country === "Montenegro"
            ? (this.translate.use("hr"),
              this.titleService.setTitle("Cijene goriva u regionu i Balkanu"),
              this.meta.updateTag({
                name: "title",
                content: "Cijene goriva u regionu i Balkanu",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Pogledajte trenutne cijene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Sjevernoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "cijena goriva, cijene goriva, cijene goriva region, cijene goriva balkan, cijene goriva bih, cijene goriva bosna, cijene goriva republika srpska, cijene goriva hrvatska, cijene goriva srbija, cijene goriva slovenija, cijene goriva crna gora, cijene goriva makedonija, cijene goriva grcka, cijene goriva bugarska, cijene goriva albanija",
              }),
              this.meta.addTag({
                property: "og:title",
                content: "Cijene goriva u regionu i Balkanu",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Pogledajte trenutne cijene goriva: benzin, dizel, gas u Bosni,Hrvatskoj,Srbiji,Sloveniji,Crnoj Gori,Sjevernoj Makedoniji,Grckoj,Bugarskoj,Albaniji",
              }))
            : n.country === "Slovenia"
            ? (this.translate.use("sl"),
              this.titleService.setTitle("Cene goriva v regiji in na Balkanu"),
              this.meta.updateTag({
                name: "title",
                content: "Cene goriva v regiji in na Balkanu",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Oglejte si trenutne cene goriva: bencin, dizel, plin v Bosni, Hrva\u0161ki, Srbiji, Sloveniji, \u010Crni Gori, Severni Makedoniji, Gr\u010Diji, Bolgariji, Albaniji",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "cena goriva, cene goriva, cene goriva regija, cene goriva Balkan, cene goriva Srbija, cene goriva Bosna, cene goriva Hrva\u0161ka, cene goriva Slovenija, cene goriva \u010Crna Gora, cene goriva Makedonija, cene goriva Gr\u010Dija, cene goriva Bolgarija, cene goriva Albanija",
              }),
              this.meta.addTag({
                property: "og:title",
                content: "Cene goriva v regiji in na Balkanu",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Oglejte si trenutne cene goriva: bencin, dizel, plin v Bosni, Hrva\u0161ki, Srbiji, Sloveniji, \u010Crni Gori, Severni Makedoniji, Gr\u010Diji, Bolgariji, Albaniji",
              }))
            : n.country === "Albania"
            ? (this.translate.use("al"),
              this.titleService.setTitle(
                "\xC7mimet e karburanteve n\xEB rajon dhe n\xEB Ballkan"
              ),
              this.meta.updateTag({
                name: "title",
                content:
                  "\xC7mimet e karburanteve n\xEB rajon dhe n\xEB Ballkan",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Shikoni \xE7mimet aktuale t\xEB karburanteve: benzin\xEB, naft\xEB, gaz n\xEB Bosnje, Kroaci, Serbi, Slloveni, Mal t\xEB Zi, Maqedoni t\xEB Veriut, Greqi, Bullgari, Shqip\xEBri",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "\xE7mimi karburantit, \xE7mimet e karburanteve, \xE7mimet e rajonit, \xE7mimet Balkan, \xE7mimet Serbi, \xE7mimet Bosnje, \xE7mimet Kroaci, \xE7mimet Slloveni, \xE7mimet Mal t\xEB Zi, \xE7mimet Maqedoni, \xE7mimet Greqi, \xE7mimet Bullgari, \xE7mimet Shqip\xEBri",
              }),
              this.meta.addTag({
                property: "og:title",
                content:
                  "\xC7mimet e karburanteve n\xEB rajon dhe n\xEB Ballkan",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Shikoni \xE7mimet aktuale t\xEB karburanteve: benzin\xEB, naft\xEB, gaz n\xEB Bosnje, Kroaci, Serbi, Slloveni, Mal t\xEB Zi, Maqedoni t\xEB Veriut, Greqi, Bullgari, Shqip\xEBri",
              }))
            : n.country === "North Macedonia"
            ? (this.translate.use("mk"),
              this.titleService.setTitle(
                "\u0426\u0435\u043D\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0432\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0442 \u0438 \u043D\u0430 \u0411\u0430\u043B\u043A\u0430\u043D\u043E\u0442"
              ),
              this.meta.updateTag({
                name: "title",
                content:
                  "\u0426\u0435\u043D\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0432\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0442 \u0438 \u043D\u0430 \u0411\u0430\u043B\u043A\u0430\u043D\u043E\u0442",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "\u041F\u043E\u0433\u043B\u0435\u0434\u043D\u0435\u0442\u0435 \u0433\u0438 \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u043D\u0438\u0442\u0435 \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430: \u0431\u0435\u043D\u0437\u0438\u043D, \u0434\u0438\u0437\u0435\u043B, \u0433\u0430\u0441 \u0432\u043E \u0411\u043E\u0441\u043D\u0430, \u0425\u0440\u0432\u0430\u0442\u0441\u043A\u0430, \u0421\u0440\u0431\u0438\u0458\u0430, \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u0458\u0430, \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430, \u0413\u0440\u0446\u0438\u0458\u0430, \u0411\u0443\u0433\u0430\u0440\u0438\u0458\u0430, \u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "\u0446\u0435\u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430 \u0440\u0435\u0433\u0438\u043E\u043D, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0411\u0430\u043B\u043A\u0430\u043D, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0421\u0440\u0431\u0438\u0458\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0411\u043E\u0441\u043D\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0425\u0440\u0432\u0430\u0442\u0441\u043A\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u0458\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0413\u0440\u0446\u0438\u0458\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0411\u0443\u0433\u0430\u0440\u0438\u0458\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E \u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430",
              }),
              this.meta.addTag({
                property: "og:title",
                content:
                  "\u0426\u0435\u043D\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0432\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0442 \u0438 \u043D\u0430 \u0411\u0430\u043B\u043A\u0430\u043D\u043E\u0442",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "\u041F\u043E\u0433\u043B\u0435\u0434\u043D\u0435\u0442\u0435 \u0433\u0438 \u043C\u043E\u043C\u0435\u043D\u0442\u0430\u043B\u043D\u0438\u0442\u0435 \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430: \u0431\u0435\u043D\u0437\u0438\u043D, \u0434\u0438\u0437\u0435\u043B, \u0433\u0430\u0441 \u0432\u043E \u0411\u043E\u0441\u043D\u0430, \u0425\u0440\u0432\u0430\u0442\u0441\u043A\u0430, \u0421\u0440\u0431\u0438\u0458\u0430, \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u0458\u0430, \u0426\u0440\u043D\u0430 \u0413\u043E\u0440\u0430, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430, \u0413\u0440\u0446\u0438\u0458\u0430, \u0411\u0443\u0433\u0430\u0440\u0438\u0458\u0430, \u0410\u043B\u0431\u0430\u043D\u0438\u0458\u0430",
              }))
            : n.country === "Bulgaria"
            ? (this.translate.use("bg"),
              this.titleService.setTitle(
                "\u0426\u0435\u043D\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u0438 \u043D\u0430 \u0411\u0430\u043B\u043A\u0430\u043D\u0438\u0442\u0435"
              ),
              this.meta.updateTag({
                name: "title",
                content:
                  "\u0426\u0435\u043D\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u0438 \u043D\u0430 \u0411\u0430\u043B\u043A\u0430\u043D\u0438\u0442\u0435",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "\u0412\u0438\u0436\u0442\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u043D\u0438\u0442\u0435 \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430: \u0431\u0435\u043D\u0437\u0438\u043D, \u0434\u0438\u0437\u0435\u043B, \u0433\u0430\u0437 \u0432 \u0411\u043E\u0441\u043D\u0430, \u0425\u044A\u0440\u0432\u0430\u0442\u0438\u044F, \u0421\u044A\u0440\u0431\u0438\u044F, \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F, \u0427\u0435\u0440\u043D\u0430 \u0433\u043E\u0440\u0430, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F, \u0413\u044A\u0440\u0446\u0438\u044F, \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F, \u0410\u043B\u0431\u0430\u043D\u0438\u044F",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "\u0446\u0435\u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u043E, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u043E\u043D, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0411\u0430\u043B\u043A\u0430\u043D, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0421\u044A\u0440\u0431\u0438\u044F, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0411\u043E\u0441\u043D\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0425\u044A\u0440\u0432\u0430\u0442\u0438\u044F, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0427\u0435\u0440\u043D\u0430 \u0433\u043E\u0440\u0430, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0413\u044A\u0440\u0446\u0438\u044F, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F, \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0410\u043B\u0431\u0430\u043D\u0438\u044F",
              }),
              this.meta.addTag({
                property: "og:title",
                content:
                  "\u0426\u0435\u043D\u0438\u0442\u0435 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430 \u0432 \u0440\u0435\u0433\u0438\u043E\u043D\u0430 \u0438 \u043D\u0430 \u0411\u0430\u043B\u043A\u0430\u043D\u0438\u0442\u0435",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "\u0412\u0438\u0436\u0442\u0435 \u0430\u043A\u0442\u0443\u0430\u043B\u043D\u0438\u0442\u0435 \u0446\u0435\u043D\u0438 \u043D\u0430 \u0433\u043E\u0440\u0438\u0432\u0430\u0442\u0430: \u0431\u0435\u043D\u0437\u0438\u043D, \u0434\u0438\u0437\u0435\u043B, \u0433\u0430\u0437 \u0432 \u0411\u043E\u0441\u043D\u0430, \u0425\u044A\u0440\u0432\u0430\u0442\u0438\u044F, \u0421\u044A\u0440\u0431\u0438\u044F, \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F, \u0427\u0435\u0440\u043D\u0430 \u0433\u043E\u0440\u0430, \u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u044F, \u0413\u044A\u0440\u0446\u0438\u044F, \u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F, \u0410\u043B\u0431\u0430\u043D\u0438\u044F",
              }))
            : n.country === "Greece"
            ? (this.translate.use("gr"),
              this.titleService.setTitle(
                "\u03A4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B1 \u0392\u03B1\u03BB\u03BA\u03AC\u03BD\u03B9\u03B1"
              ),
              this.meta.updateTag({
                name: "title",
                content:
                  "\u03A4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B1 \u0392\u03B1\u03BB\u03BA\u03AC\u03BD\u03B9\u03B1",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "\u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03C4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B5\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD: \u03B2\u03B5\u03BD\u03B6\u03AF\u03BD\u03B7, \u03C0\u03B5\u03C4\u03C1\u03AD\u03BB\u03B1\u03B9\u03BF, \u03B1\u03AD\u03C1\u03B9\u03BF \u03C3\u03C4\u03B7 \u0392\u03BF\u03C3\u03BD\u03AF\u03B1, \u039A\u03C1\u03BF\u03B1\u03C4\u03AF\u03B1, \u03A3\u03B5\u03C1\u03B2\u03AF\u03B1, \u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1, \u039C\u03B1\u03C5\u03C1\u03BF\u03B2\u03BF\u03CD\u03BD\u03B9\u03BF, \u0392\u03CC\u03C1\u03B5\u03B9\u03B1 \u039C\u03B1\u03BA\u03B5\u03B4\u03BF\u03BD\u03AF\u03B1, \u0395\u03BB\u03BB\u03AC\u03B4\u03B1, \u0392\u03BF\u03C5\u03BB\u03B3\u03B1\u03C1\u03AF\u03B1, \u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "\u03C4\u03B9\u03BC\u03AE \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03BF\u03C5, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u0392\u03B1\u03BB\u03BA\u03AC\u03BD\u03B9\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u03A3\u03B5\u03C1\u03B2\u03AF\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u0392\u03BF\u03C3\u03BD\u03AF\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u039A\u03C1\u03BF\u03B1\u03C4\u03AF\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u039C\u03B1\u03C5\u03C1\u03BF\u03B2\u03BF\u03CD\u03BD\u03B9\u03BF, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u039C\u03B1\u03BA\u03B5\u03B4\u03BF\u03BD\u03AF\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u0395\u03BB\u03BB\u03AC\u03B4\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u0392\u03BF\u03C5\u03BB\u03B3\u03B1\u03C1\u03AF\u03B1, \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1",
              }),
              this.meta.addTag({
                property: "og:title",
                content:
                  "\u03A4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD \u03C3\u03C4\u03B7\u03BD \u03C0\u03B5\u03C1\u03B9\u03BF\u03C7\u03AE \u03BA\u03B1\u03B9 \u03C3\u03C4\u03B1 \u0392\u03B1\u03BB\u03BA\u03AC\u03BD\u03B9\u03B1",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "\u0394\u03B5\u03AF\u03C4\u03B5 \u03C4\u03B9\u03C2 \u03C4\u03C1\u03AD\u03C7\u03BF\u03C5\u03C3\u03B5\u03C2 \u03C4\u03B9\u03BC\u03AD\u03C2 \u03BA\u03B1\u03C5\u03C3\u03AF\u03BC\u03C9\u03BD: \u03B2\u03B5\u03BD\u03B6\u03AF\u03BD\u03B7, \u03C0\u03B5\u03C4\u03C1\u03AD\u03BB\u03B1\u03B9\u03BF, \u03B1\u03AD\u03C1\u03B9\u03BF \u03C3\u03C4\u03B7 \u0392\u03BF\u03C3\u03BD\u03AF\u03B1, \u039A\u03C1\u03BF\u03B1\u03C4\u03AF\u03B1, \u03A3\u03B5\u03C1\u03B2\u03AF\u03B1, \u03A3\u03BB\u03BF\u03B2\u03B5\u03BD\u03AF\u03B1, \u039C\u03B1\u03C5\u03C1\u03BF\u03B2\u03BF\u03CD\u03BD\u03B9\u03BF, \u0392\u03CC\u03C1\u03B5\u03B9\u03B1 \u039C\u03B1\u03BA\u03B5\u03B4\u03BF\u03BD\u03AF\u03B1, \u0395\u03BB\u03BB\u03AC\u03B4\u03B1, \u0392\u03BF\u03C5\u03BB\u03B3\u03B1\u03C1\u03AF\u03B1, \u0391\u03BB\u03B2\u03B1\u03BD\u03AF\u03B1",
              }))
            : (this.translate.use("en"),
              this.titleService.setTitle("Fuel prices in the Balkans"),
              this.meta.updateTag({
                name: "title",
                content: "Fuel prices in the Balkans",
              }),
              this.meta.updateTag({
                name: "description",
                content:
                  "Check current fuel prices: gasoline, diesel, gas in Bosnia, Croatia, Serbia, Slovenia, Montenegro, North Macedonia, Greece, Bulgaria, Albania",
              }),
              this.meta.updateTag({
                name: "keywords",
                content:
                  "fuel price, fuel prices, regional fuel prices, Balkan fuel prices, fuel prices Serbia, fuel prices Bosnia, fuel prices Croatia, fuel prices Slovenia, fuel prices Montenegro, fuel prices Macedonia, fuel prices Greece, fuel prices Bulgaria, fuel prices Albania",
              }),
              this.meta.addTag({
                property: "og:title",
                content: "Fuel prices in the Balkans",
              }),
              this.meta.addTag({
                property: "og:description",
                content:
                  "Check current fuel prices: gasoline, diesel, gas in Bosnia, Croatia, Serbia, Slovenia, Montenegro, North Macedonia, Greece, Bulgaria, Albania",
              }),
              console.log("Check")),
            this.spinner.hide("getUsersLocationSpinner");
        },
        error: (n) => {
          console.error(n), this.spinner.hide("getUsersLocationSpinner");
        },
      });
  }
  static ɵfac = function (e) {
    return new (e || t)(_(Dr), _(Se), _(Tr), _(Ji), _(Ys), _(zn), _(ka));
  };
  static ɵcmp = te({
    type: t,
    selectors: [["app-root"]],
    standalone: !0,
    features: [ne],
    decls: 51,
    vars: 36,
    consts: [
      [1, "example-spacer"],
      [4, "ngIf"],
      [
        1,
        "small-devices-h1",
        2,
        "margin-left",
        "20px",
        "font-weight",
        "300",
        "font-size",
        "2.3rem",
      ],
      ["class", "filter-container", 4, "ngIf"],
      [1, "legend-wrapper"],
      ["class", "legend-item", 4, "ngFor", "ngForOf"],
      [1, "info-wrapper"],
      [1, "small-devices-show"],
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
      [1, "small-devices-disclaimer", 2, "margin", "0"],
      [
        "bdColor",
        "rgba(0, 0, 0, 0.8)",
        "size",
        "medium",
        "color",
        "#fff",
        "name",
        "getUsersLocationSpinner",
        "type",
        "ball-clip-rotate-multiple",
        2,
        "overflow",
        "hidden",
        3,
        "fullScreen",
      ],
      [2, "color", "white"],
      [1, "radio-currencies", 3, "ngModelChange", "change", "ngModel"],
      [3, "value", 4, "ngFor", "ngForOf"],
      [3, "value"],
      [1, "filter-container"],
      [3, "ngModelChange", "change", "ngModel"],
      [1, "checkboxes"],
      [1, "legend-item"],
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
    template: function (e, i) {
      e & 1 &&
        (u(0, "main")(1, "header")(2, "mat-toolbar")(3, "h1"),
        p(4),
        f(5, "translate"),
        m(),
        V(6, "span", 0),
        pe(7, zp, 3, 2, "div", 1),
        m()(),
        u(8, "section")(9, "h1", 2),
        p(10),
        f(11, "translate"),
        m(),
        pe(12, Up, 32, 40, "div", 3),
        m(),
        u(13, "section")(14, "div", 4),
        pe(15, Hp, 6, 6, "div", 5),
        m()(),
        u(16, "section")(17, "div", 6)(18, "i", 7),
        p(19),
        f(20, "translate"),
        u(21, "time"),
        f(22, "date"),
        p(23),
        f(24, "date"),
        m()()()(),
        u(25, "section")(26, "div", 8)(27, "div", 9),
        pe(28, Gp, 29, 36, "mat-card", 10)(29, $p, 28, 36, "mat-card", 11)(
          30,
          qp,
          28,
          36,
          "mat-card",
          12
        ),
        m(),
        u(31, "div", 9),
        pe(32, Wp, 28, 36, "mat-card", 13)(33, Zp, 28, 36, "mat-card", 14)(
          34,
          Kp,
          33,
          36,
          "mat-card",
          15
        ),
        m(),
        u(35, "div", 9),
        pe(36, Yp, 32, 36, "mat-card", 16)(37, Qp, 26, 36, "mat-card", 17)(
          38,
          Xp,
          28,
          36,
          "mat-card",
          18
        ),
        m()()(),
        u(39, "section")(40, "div", 19)(41, "p", 20),
        p(42),
        f(43, "translate"),
        m()()(),
        u(44, "section"),
        V(45, "app-back-to-top"),
        m(),
        V(46, "app-footer"),
        m(),
        u(47, "ngx-spinner", 21)(48, "p", 22),
        p(49),
        f(50, "translate"),
        m()()),
        e & 2 &&
          (l(4),
          k(w(5, 20, "CENE_GORIVA")),
          l(3),
          C("ngIf", !i.loading),
          l(3),
          k(w(11, 22, "H1")),
          l(2),
          C("ngIf", !i.loading),
          l(3),
          C("ngForOf", i.legends),
          l(4),
          wt("", w(20, 24, "AZURIRANJE"), "\xA0"),
          l(2),
          ce("datetime", U(22, 26, i.updated, "dd.MM.yyyy")),
          l(2),
          k(U(24, 29, i.updated, "dd.MM.yyyy")),
          l(5),
          C("ngIf", i.showBih),
          l(),
          C("ngIf", i.showCro),
          l(),
          C("ngIf", i.showSer),
          l(2),
          C("ngIf", i.showSlo),
          l(),
          C("ngIf", i.showMont),
          l(),
          C("ngIf", i.showMace),
          l(2),
          C("ngIf", i.showGreece),
          l(),
          C("ngIf", i.showBulgaria),
          l(),
          C("ngIf", i.showAlba),
          l(4),
          k(w(43, 32, "DISCLAIMER")),
          l(5),
          C("fullScreen", !1),
          l(2),
          wt(" ", w(50, 34, "UCITAVANJE"), " "));
    },
    dependencies: [
      ml,
      ll,
      ul,
      dl,
      Rl,
      Sl,
      ya,
      we,
      Dn,
      Ht,
      as,
      cs,
      ss,
      Ir,
      wr,
      Vl,
      Cr,
      Hl,
      kr,
      Wl,
      Ca,
      Mr,
      Ar,
      Sr,
      ni,
      cr,
      Jl,
      Xl,
    ],
    styles: [
      '@charset "UTF-8";.flag-cards[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;position:relative;top:37px;flex-direction:column}.flag-card[_ngcontent-%COMP%]{width:200px;padding:16px;color:#fff;font-weight:700;text-align:center;font-size:19px}.bosnia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#002f6c 50%,#ff0 50%);position:relative;color:#fff}.bosnia-flag[_ngcontent-%COMP%]:before{content:"\\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605";font-size:10px;color:#fff;position:absolute;top:26%;left:26%;transform:rotate(0);white-space:nowrap}.bosnia-flag[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;width:40px;height:100%;background-color:#ff0;clip-path:polygon(100% 0,0 100%,100% 100%)}.croatia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,red 33%,#fff 33% 66%,#00f 66%)}.serbia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,red 33%,#00f 33% 66%,#fff 66%)}.highest-price[_ngcontent-%COMP%]{color:red;font-weight:700}.lowest-price[_ngcontent-%COMP%]{color:green;font-weight:700}.each-card[_ngcontent-%COMP%]{background-color:#000;border-radius:10px;width:178px;z-index:1;margin-left:77px;margin-top:8px}.fuel-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;margin-top:14px;width:190px}h3[_ngcontent-%COMP%]{position:absolute;text-align:center;top:20px}.flag[_ngcontent-%COMP%]{position:relative;width:300px;height:200px;box-shadow:0 0 1px #00000080;overflow:hidden}.bosnia[_ngcontent-%COMP%]{background-color:#001e96}.bosnia__triangle[_ngcontent-%COMP%]{position:absolute;top:-72%;left:35%;border:142px solid transparent;border-left-color:#ffcc01;transform:rotate(-45deg)}.bosnia__star__wrapper[_ngcontent-%COMP%]{filter:drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff)}.bosnia__star__wrapper[_ngcontent-%COMP%] > .star[_ngcontent-%COMP%]{width:35px;height:35px;margin:-20px 0;background-color:#fff;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}.croatia[_ngcontent-%COMP%]{background:linear-gradient(red 33%,#fff 33% 67%,#171796 0)}.croatia__logo[_ngcontent-%COMP%]{position:absolute;margin:auto;left:6px;top:48px}.serbia[_ngcontent-%COMP%]{background:linear-gradient(#c83339 33%,#033e76 33% 66%,#fff 0)}.serbia[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:70px;top:17px}.img-serbia[_ngcontent-%COMP%]{position:absolute;left:8px;top:17px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.example-margin[_ngcontent-%COMP%]{margin:0 10px}.example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.checkbox-group[_ngcontent-%COMP%]{display:flex;gap:10px;margin-left:20px}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.slovenia[_ngcontent-%COMP%]{background:linear-gradient(#fff 33%,#00f 33% 66%,red 0)}.slovenia[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:19%;top:17%}.img-slovenia[_ngcontent-%COMP%]{position:absolute;left:2%;top:17%}.montenegro[_ngcontent-%COMP%]{border:10px solid #e9b528;background-color:#e30613;display:grid;place-items:center}.img-montenegro[_ngcontent-%COMP%]{position:absolute;left:0%;top:17%}.north_macedonia[_ngcontent-%COMP%]{background:#d91a21}.north_macedonia[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#f8e92e;inset:0;margin:auto;width:50px;aspect-ratio:1;border-radius:1in;border:6px solid #d91a21;z-index:1}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:100%;width:50%;-webkit-box-reflect:right 0}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .top__shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{background-color:#f8e92e;width:100%;height:40px;clip-path:polygon(0 0,100% 45%,100% 55%,0% 100%)}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%]:nth-child(1){transform:scaleX(1.5) rotate(50deg)}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%]:nth-child(3){transform:scaleX(1.5) rotate(-50deg)}.north_macedonia[_ngcontent-%COMP%] > .top__shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{position:absolute;margin:0 auto;width:25%;height:50px;rotate:90deg;left:29%;top:11px;transform:translatey(-50%)}.north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{transform:scaleX(-1);top:70%;left:38%}.container-north-macedonia[_ngcontent-%COMP%]{z-index:1;position:absolute;top:17px;display:flex;flex-direction:column}.greece[_ngcontent-%COMP%]{background:repeating-linear-gradient(#055eb2,#055eb2 11.11%,#fff 11.11% 22.22%)}.greece__top_left[_ngcontent-%COMP%]{width:138px;height:111.33px;background-color:#fff;display:grid;grid-template-columns:1fr 1fr;gap:25px}.greece__top_left[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:#055eb2}.bulgaria[_ngcontent-%COMP%]{background:linear-gradient(#fff 33%,#00956e 33% 66%,#d52612 0)}.albania[_ngcontent-%COMP%]{background-color:#da2b26}.albania__logo[_ngcontent-%COMP%]{position:absolute;width:140px;margin:auto;right:183px;top:59px}.filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:20px 10px;flex-wrap:wrap;justify-content:center}.checkboxes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.radio-currencies[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin:10px;padding-top:5px}@media (min-width: 358px) and (max-width: 599px){.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:75px;white-space:normal!important}.disclaimer-wrapper[_ngcontent-%COMP%], .info-wrapper[_ngcontent-%COMP%]{font-size:14px}.mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:17px!important}.small-devices-show[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.small-devices-disclaimer[_ngcontent-%COMP%]{padding:5px 10px}.small-devices-h1[_ngcontent-%COMP%]{text-align:center;padding-right:14px}.legend-item[_ngcontent-%COMP%]{flex:0 1 calc(50% - 84px)}.legend-text[_ngcontent-%COMP%]{width:116px}}@media (max-width: 489px){.radio-currencies[_ngcontent-%COMP%]{width:222px}}@media screen and (min-width: 599px){.filter-container[_ngcontent-%COMP%]{display:none!important}.small-devices-h1[_ngcontent-%COMP%]{text-align:center;padding-right:14px}}.legend-container[_ngcontent-%COMP%]{padding:.5rem;display:flex;align-items:center}.legend-container[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute;border-radius:10px}.legend-container[_ngcontent-%COMP%]   .legend-text[_ngcontent-%COMP%]{position:relative;left:1rem;padding-left:.5rem;height:1.25rem;line-height:1.25rem;font-size:.9rem}.legend-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.legend-item[_ngcontent-%COMP%]{margin:20px 15px 0;box-sizing:border-box}.info-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;color:#433c3c}.disclaimer-wrapper[_ngcontent-%COMP%]{margin-top:67px;font-style:italic;display:flex;justify-content:center;text-align:center;color:#433c3c}',
    ],
  });
};
Ws(Rr, $c).catch((t) => console.error(t));
