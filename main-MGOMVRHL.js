import {
  $ as Ta,
  $a as hf,
  $b as cn,
  A as Kc,
  Aa as Vr,
  Ab as Sr,
  Ac as Pa,
  B as Yc,
  Ba as Ia,
  Bb as Ar,
  Bc as _s,
  C as Wt,
  Ca as tl,
  Cb as Ir,
  D as $u,
  Da as Nn,
  Db as zr,
  E as Xu,
  Ea as Pn,
  Eb as ht,
  F as gi,
  Fa as tf,
  Fb as Je,
  G as Mi,
  Ga as rf,
  Gb as ee,
  Gc as If,
  H as Zc,
  Ha as nf,
  Hb as xe,
  Hc as bs,
  I as qu,
  Ia as af,
  Ib as it,
  J as Ku,
  Ja as of,
  Jb as cs,
  Jc as Ff,
  K as Yu,
  Ka as sf,
  Kb as pf,
  L as Qc,
  La as cf,
  Lb as ls,
  M as Qo,
  Ma as vr,
  Mb as ds,
  N as Jo,
  Na as lf,
  Nb as il,
  O as ar,
  Oa as df,
  Ob as us,
  Oc as Df,
  P as Ri,
  Pa as Fa,
  Pb as fs,
  Q as gt,
  Qa as N,
  Qb as Ra,
  R as et,
  Ra as fe,
  Rb as gf,
  S as Oi,
  Sa as is,
  Sb as nl,
  T as nn,
  Ta as uf,
  Tb as vf,
  U as pe,
  Ua as Ln,
  Ub as Xt,
  V as Me,
  Va as ns,
  Vb as xf,
  W as Zu,
  Wa as ff,
  Wb as _f,
  X as Ee,
  Xa as Da,
  Xb as bf,
  Y as Jc,
  Ya as as,
  Yb as vt,
  Z as ae,
  Za as on,
  Zb as Oa,
  _ as he,
  _a as xr,
  _b as hs,
  a as te,
  aa as ut,
  ab as mf,
  ac as Pi,
  b as Xe,
  ba as Re,
  bb as Gt,
  bc as yf,
  c as Hu,
  ca as st,
  cb as os,
  cc as wf,
  d as en,
  da as es,
  db as Dt,
  dc as Ye,
  e as ka,
  ea as Jr,
  eb as ge,
  ec as ms,
  f as Wu,
  fa as el,
  fb as ss,
  fc as ps,
  g as Ea,
  ga as Qu,
  gb as Et,
  gc as gs,
  h as Xc,
  ha as Rn,
  hb as vi,
  hc as jn,
  i as qc,
  ia as jr,
  ib as H,
  ic as kf,
  j as zt,
  ja as ei,
  jb as W,
  jc as Ef,
  k as Ht,
  ka as Le,
  kb as Ge,
  kc as hr,
  l as Fi,
  la as Be,
  lb as ri,
  lc as Cf,
  m as nr,
  ma as ts,
  mb as Ma,
  mc as Hr,
  n as ke,
  na as rs,
  nb as Ke,
  nc as Na,
  o as tn,
  oa as ti,
  ob as Fe,
  oc as vs,
  p as mi,
  pa as Ni,
  pb as $t,
  pc as Tf,
  q as Gu,
  qa as On,
  qb as Lt,
  qc as al,
  r as Se,
  ra as Sa,
  rb as Bn,
  rc as xs,
  s as Ca,
  sa as ft,
  sb as Ur,
  sc as Sf,
  t as Cr,
  ta as qe,
  tb as or,
  tc as ol,
  u as rn,
  ua as an,
  ub as sr,
  v as Dn,
  va as tt,
  vb as rl,
  w as Mn,
  wa as Ju,
  wb as Q,
  x as Br,
  xa as Aa,
  xb as we,
  y as Di,
  ya as ef,
  yb as sn,
  z as pi,
  za as Tr,
  zb as rt,
  zc as Af,
} from "./chunk-MTX3DUHJ.js";
var Ba = class {},
  ja = class {},
  ii = class e {
    constructor(r) {
      (this.normalizedNames = new Map()),
        (this.lazyUpdate = null),
        r
          ? typeof r == "string"
            ? (this.lazyInit = () => {
                (this.headers = new Map()),
                  r
                    .split(
                      `
`
                    )
                    .forEach((t) => {
                      let i = t.indexOf(":");
                      if (i > 0) {
                        let n = t.slice(0, i),
                          a = n.toLowerCase(),
                          o = t.slice(i + 1).trim();
                        this.maybeSetNormalizedName(n, a),
                          this.headers.has(a)
                            ? this.headers.get(a).push(o)
                            : this.headers.set(a, [o]);
                      }
                    });
              })
            : typeof Headers < "u" && r instanceof Headers
            ? ((this.headers = new Map()),
              r.forEach((t, i) => {
                this.setHeaderEntries(i, t);
              }))
            : (this.lazyInit = () => {
                (this.headers = new Map()),
                  Object.entries(r).forEach(([t, i]) => {
                    this.setHeaderEntries(t, i);
                  });
              })
          : (this.headers = new Map());
    }
    has(r) {
      return this.init(), this.headers.has(r.toLowerCase());
    }
    get(r) {
      this.init();
      let t = this.headers.get(r.toLowerCase());
      return t && t.length > 0 ? t[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(r) {
      return this.init(), this.headers.get(r.toLowerCase()) || null;
    }
    append(r, t) {
      return this.clone({ name: r, value: t, op: "a" });
    }
    set(r, t) {
      return this.clone({ name: r, value: t, op: "s" });
    }
    delete(r, t) {
      return this.clone({ name: r, value: t, op: "d" });
    }
    maybeSetNormalizedName(r, t) {
      this.normalizedNames.has(t) || this.normalizedNames.set(t, r);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof e
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
        (this.lazyInit = null),
        this.lazyUpdate &&
          (this.lazyUpdate.forEach((r) => this.applyUpdate(r)),
          (this.lazyUpdate = null)));
    }
    copyFrom(r) {
      r.init(),
        Array.from(r.headers.keys()).forEach((t) => {
          this.headers.set(t, r.headers.get(t)),
            this.normalizedNames.set(t, r.normalizedNames.get(t));
        });
    }
    clone(r) {
      let t = new e();
      return (
        (t.lazyInit =
          this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this),
        (t.lazyUpdate = (this.lazyUpdate || []).concat([r])),
        t
      );
    }
    applyUpdate(r) {
      let t = r.name.toLowerCase();
      switch (r.op) {
        case "a":
        case "s":
          let i = r.value;
          if ((typeof i == "string" && (i = [i]), i.length === 0)) return;
          this.maybeSetNormalizedName(r.name, t);
          let n = (r.op === "a" ? this.headers.get(t) : void 0) || [];
          n.push(...i), this.headers.set(t, n);
          break;
        case "d":
          let a = r.value;
          if (!a) this.headers.delete(t), this.normalizedNames.delete(t);
          else {
            let o = this.headers.get(t);
            if (!o) return;
            (o = o.filter((s) => a.indexOf(s) === -1)),
              o.length === 0
                ? (this.headers.delete(t), this.normalizedNames.delete(t))
                : this.headers.set(t, o);
          }
          break;
      }
    }
    setHeaderEntries(r, t) {
      let i = (Array.isArray(t) ? t : [t]).map((a) => a.toString()),
        n = r.toLowerCase();
      this.headers.set(n, i), this.maybeSetNormalizedName(r, n);
    }
    forEach(r) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((t) =>
          r(this.normalizedNames.get(t), this.headers.get(t))
        );
    }
  };
var cl = class {
  encodeKey(r) {
    return Mf(r);
  }
  encodeValue(r) {
    return Mf(r);
  }
  decodeKey(r) {
    return decodeURIComponent(r);
  }
  decodeValue(r) {
    return decodeURIComponent(r);
  }
};
function mv(e, r) {
  let t = new Map();
  return (
    e.length > 0 &&
      e
        .replace(/^\?/, "")
        .split("&")
        .forEach((n) => {
          let a = n.indexOf("="),
            [o, s] =
              a == -1
                ? [r.decodeKey(n), ""]
                : [r.decodeKey(n.slice(0, a)), r.decodeValue(n.slice(a + 1))],
            c = t.get(o) || [];
          c.push(s), t.set(o, c);
        }),
    t
  );
}
var pv = /%(\d[a-f0-9])/gi,
  gv = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function Mf(e) {
  return encodeURIComponent(e).replace(pv, (r, t) => gv[t] ?? r);
}
function ys(e) {
  return `${e}`;
}
var Bi = class e {
  constructor(r = {}) {
    if (
      ((this.updates = null),
      (this.cloneFrom = null),
      (this.encoder = r.encoder || new cl()),
      r.fromString)
    ) {
      if (r.fromObject)
        throw new Error("Cannot specify both fromString and fromObject.");
      this.map = mv(r.fromString, this.encoder);
    } else
      r.fromObject
        ? ((this.map = new Map()),
          Object.keys(r.fromObject).forEach((t) => {
            let i = r.fromObject[t],
              n = Array.isArray(i) ? i.map(ys) : [ys(i)];
            this.map.set(t, n);
          }))
        : (this.map = null);
  }
  has(r) {
    return this.init(), this.map.has(r);
  }
  get(r) {
    this.init();
    let t = this.map.get(r);
    return t ? t[0] : null;
  }
  getAll(r) {
    return this.init(), this.map.get(r) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(r, t) {
    return this.clone({ param: r, value: t, op: "a" });
  }
  appendAll(r) {
    let t = [];
    return (
      Object.keys(r).forEach((i) => {
        let n = r[i];
        Array.isArray(n)
          ? n.forEach((a) => {
              t.push({ param: i, value: a, op: "a" });
            })
          : t.push({ param: i, value: n, op: "a" });
      }),
      this.clone(t)
    );
  }
  set(r, t) {
    return this.clone({ param: r, value: t, op: "s" });
  }
  delete(r, t) {
    return this.clone({ param: r, value: t, op: "d" });
  }
  toString() {
    return (
      this.init(),
      this.keys()
        .map((r) => {
          let t = this.encoder.encodeKey(r);
          return this.map
            .get(r)
            .map((i) => t + "=" + this.encoder.encodeValue(i))
            .join("&");
        })
        .filter((r) => r !== "")
        .join("&")
    );
  }
  clone(r) {
    let t = new e({ encoder: this.encoder });
    return (
      (t.cloneFrom = this.cloneFrom || this),
      (t.updates = (this.updates || []).concat(r)),
      t
    );
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
        (this.cloneFrom.init(),
        this.cloneFrom
          .keys()
          .forEach((r) => this.map.set(r, this.cloneFrom.map.get(r))),
        this.updates.forEach((r) => {
          switch (r.op) {
            case "a":
            case "s":
              let t = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
              t.push(ys(r.value)), this.map.set(r.param, t);
              break;
            case "d":
              if (r.value !== void 0) {
                let i = this.map.get(r.param) || [],
                  n = i.indexOf(ys(r.value));
                n !== -1 && i.splice(n, 1),
                  i.length > 0
                    ? this.map.set(r.param, i)
                    : this.map.delete(r.param);
              } else {
                this.map.delete(r.param);
                break;
              }
          }
        }),
        (this.cloneFrom = this.updates = null));
  }
};
var ll = class {
  constructor() {
    this.map = new Map();
  }
  set(r, t) {
    return this.map.set(r, t), this;
  }
  get(r) {
    return (
      this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r)
    );
  }
  delete(r) {
    return this.map.delete(r), this;
  }
  has(r) {
    return this.map.has(r);
  }
  keys() {
    return this.map.keys();
  }
};
function vv(e) {
  switch (e) {
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
function Rf(e) {
  return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer;
}
function Of(e) {
  return typeof Blob < "u" && e instanceof Blob;
}
function Nf(e) {
  return typeof FormData < "u" && e instanceof FormData;
}
function xv(e) {
  return typeof URLSearchParams < "u" && e instanceof URLSearchParams;
}
var La = class e {
    constructor(r, t, i, n) {
      (this.url = t),
        (this.body = null),
        (this.reportProgress = !1),
        (this.withCredentials = !1),
        (this.responseType = "json"),
        (this.method = r.toUpperCase());
      let a;
      if (
        (vv(this.method) || n
          ? ((this.body = i !== void 0 ? i : null), (a = n))
          : (a = i),
        a &&
          ((this.reportProgress = !!a.reportProgress),
          (this.withCredentials = !!a.withCredentials),
          a.responseType && (this.responseType = a.responseType),
          a.headers && (this.headers = a.headers),
          a.context && (this.context = a.context),
          a.params && (this.params = a.params),
          (this.transferCache = a.transferCache)),
        (this.headers ??= new ii()),
        (this.context ??= new ll()),
        !this.params)
      )
        (this.params = new Bi()), (this.urlWithParams = t);
      else {
        let o = this.params.toString();
        if (o.length === 0) this.urlWithParams = t;
        else {
          let s = t.indexOf("?"),
            c = s === -1 ? "?" : s < t.length - 1 ? "&" : "";
          this.urlWithParams = t + c + o;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" ||
          Rf(this.body) ||
          Of(this.body) ||
          Nf(this.body) ||
          xv(this.body)
        ? this.body
        : this.body instanceof Bi
        ? this.body.toString()
        : typeof this.body == "object" ||
          typeof this.body == "boolean" ||
          Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Nf(this.body)
        ? null
        : Of(this.body)
        ? this.body.type || null
        : Rf(this.body)
        ? null
        : typeof this.body == "string"
        ? "text/plain"
        : this.body instanceof Bi
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" ||
          typeof this.body == "number" ||
          typeof this.body == "boolean"
        ? "application/json"
        : null;
    }
    clone(r = {}) {
      let t = r.method || this.method,
        i = r.url || this.url,
        n = r.responseType || this.responseType,
        a = r.transferCache ?? this.transferCache,
        o = r.body !== void 0 ? r.body : this.body,
        s = r.withCredentials ?? this.withCredentials,
        c = r.reportProgress ?? this.reportProgress,
        l = r.headers || this.headers,
        d = r.params || this.params,
        u = r.context ?? this.context;
      return (
        r.setHeaders !== void 0 &&
          (l = Object.keys(r.setHeaders).reduce(
            (h, m) => h.set(m, r.setHeaders[m]),
            l
          )),
        r.setParams &&
          (d = Object.keys(r.setParams).reduce(
            (h, m) => h.set(m, r.setParams[m]),
            d
          )),
        new e(t, i, o, {
          params: d,
          headers: l,
          context: u,
          reportProgress: c,
          responseType: n,
          withCredentials: s,
          transferCache: a,
        })
      );
    }
  },
  ji = (function (e) {
    return (
      (e[(e.Sent = 0)] = "Sent"),
      (e[(e.UploadProgress = 1)] = "UploadProgress"),
      (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
      (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
      (e[(e.Response = 4)] = "Response"),
      (e[(e.User = 5)] = "User"),
      e
    );
  })(ji || {}),
  Va = class {
    constructor(r, t = 200, i = "OK") {
      (this.headers = r.headers || new ii()),
        (this.status = r.status !== void 0 ? r.status : t),
        (this.statusText = r.statusText || i),
        (this.url = r.url || null),
        (this.ok = this.status >= 200 && this.status < 300);
    }
  },
  ks = class e extends Va {
    constructor(r = {}) {
      super(r), (this.type = ji.ResponseHeader);
    }
    clone(r = {}) {
      return new e({
        headers: r.headers || this.headers,
        status: r.status !== void 0 ? r.status : this.status,
        statusText: r.statusText || this.statusText,
        url: r.url || this.url || void 0,
      });
    }
  },
  ln = class e extends Va {
    constructor(r = {}) {
      super(r),
        (this.type = ji.Response),
        (this.body = r.body !== void 0 ? r.body : null);
    }
    clone(r = {}) {
      return new e({
        body: r.body !== void 0 ? r.body : this.body,
        headers: r.headers || this.headers,
        status: r.status !== void 0 ? r.status : this.status,
        statusText: r.statusText || this.statusText,
        url: r.url || this.url || void 0,
      });
    }
  },
  Li = class extends Va {
    constructor(r) {
      super(r, 0, "Unknown Error"),
        (this.name = "HttpErrorResponse"),
        (this.ok = !1),
        this.status >= 200 && this.status < 300
          ? (this.message = `Http failure during parsing for ${
              r.url || "(unknown url)"
            }`)
          : (this.message = `Http failure response for ${
              r.url || "(unknown url)"
            }: ${r.status} ${r.statusText}`),
        (this.error = r.error || null);
    }
  },
  qf = 200,
  _v = 204;
function sl(e, r) {
  return {
    body: r,
    headers: e.headers,
    context: e.context,
    observe: e.observe,
    params: e.params,
    reportProgress: e.reportProgress,
    responseType: e.responseType,
    withCredentials: e.withCredentials,
    transferCache: e.transferCache,
  };
}
var xi = (() => {
    class e {
      constructor(t) {
        this.handler = t;
      }
      request(t, i, n = {}) {
        let a;
        if (t instanceof La) a = t;
        else {
          let c;
          n.headers instanceof ii ? (c = n.headers) : (c = new ii(n.headers));
          let l;
          n.params &&
            (n.params instanceof Bi
              ? (l = n.params)
              : (l = new Bi({ fromObject: n.params }))),
            (a = new La(t, i, n.body !== void 0 ? n.body : null, {
              headers: c,
              context: n.context,
              params: l,
              reportProgress: n.reportProgress,
              responseType: n.responseType || "json",
              withCredentials: n.withCredentials,
              transferCache: n.transferCache,
            }));
        }
        let o = ke(a).pipe(pi((c) => this.handler.handle(c)));
        if (t instanceof La || n.observe === "events") return o;
        let s = o.pipe(Br((c) => c instanceof ln));
        switch (n.observe || "body") {
          case "body":
            switch (a.responseType) {
              case "arraybuffer":
                return s.pipe(
                  Se((c) => {
                    if (c.body !== null && !(c.body instanceof ArrayBuffer))
                      throw new Error("Response is not an ArrayBuffer.");
                    return c.body;
                  })
                );
              case "blob":
                return s.pipe(
                  Se((c) => {
                    if (c.body !== null && !(c.body instanceof Blob))
                      throw new Error("Response is not a Blob.");
                    return c.body;
                  })
                );
              case "text":
                return s.pipe(
                  Se((c) => {
                    if (c.body !== null && typeof c.body != "string")
                      throw new Error("Response is not a string.");
                    return c.body;
                  })
                );
              case "json":
              default:
                return s.pipe(Se((c) => c.body));
            }
          case "response":
            return s;
          default:
            throw new Error(
              `Unreachable: unhandled observe type ${n.observe}}`
            );
        }
      }
      delete(t, i = {}) {
        return this.request("DELETE", t, i);
      }
      get(t, i = {}) {
        return this.request("GET", t, i);
      }
      head(t, i = {}) {
        return this.request("HEAD", t, i);
      }
      jsonp(t, i) {
        return this.request("JSONP", t, {
          params: new Bi().append(i, "JSONP_CALLBACK"),
          observe: "body",
          responseType: "json",
        });
      }
      options(t, i = {}) {
        return this.request("OPTIONS", t, i);
      }
      patch(t, i, n = {}) {
        return this.request("PATCH", t, sl(n, i));
      }
      post(t, i, n = {}) {
        return this.request("POST", t, sl(n, i));
      }
      put(t, i, n = {}) {
        return this.request("PUT", t, sl(n, i));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ba));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  bv = /^\)\]\}',?\n/,
  yv = "X-Request-URL";
function Pf(e) {
  if (e.url) return e.url;
  let r = yv.toLocaleLowerCase();
  return e.headers.get(r);
}
var dl = (() => {
    class e {
      constructor() {
        (this.fetchImpl =
          he(ul, { optional: !0 })?.fetch ??
          ((...t) => globalThis.fetch(...t))),
          (this.ngZone = he(qe));
      }
      handle(t) {
        return new Ea((i) => {
          let n = new AbortController();
          return (
            this.doRequest(t, n.signal, i).then(fl, (a) =>
              i.error(new Li({ error: a }))
            ),
            () => n.abort()
          );
        });
      }
      doRequest(t, i, n) {
        return en(this, null, function* () {
          let a = this.createRequestInit(t),
            o;
          try {
            let m = this.ngZone.runOutsideAngular(() =>
              this.fetchImpl(t.urlWithParams, te({ signal: i }, a))
            );
            wv(m), n.next({ type: ji.Sent }), (o = yield m);
          } catch (m) {
            n.error(
              new Li({
                error: m,
                status: m.status ?? 0,
                statusText: m.statusText,
                url: t.urlWithParams,
                headers: m.headers,
              })
            );
            return;
          }
          let s = new ii(o.headers),
            c = o.statusText,
            l = Pf(o) ?? t.urlWithParams,
            d = o.status,
            u = null;
          if (
            (t.reportProgress &&
              n.next(new ks({ headers: s, status: d, statusText: c, url: l })),
            o.body)
          ) {
            let m = o.headers.get("content-length"),
              p = [],
              f = o.body.getReader(),
              g = 0,
              T,
              E,
              x = typeof Zone < "u" && Zone.current;
            yield this.ngZone.runOutsideAngular(() =>
              en(this, null, function* () {
                for (;;) {
                  let { done: z, value: F } = yield f.read();
                  if (z) break;
                  if ((p.push(F), (g += F.length), t.reportProgress)) {
                    E =
                      t.responseType === "text"
                        ? (E ?? "") +
                          (T ??= new TextDecoder()).decode(F, { stream: !0 })
                        : void 0;
                    let C = () =>
                      n.next({
                        type: ji.DownloadProgress,
                        total: m ? +m : void 0,
                        loaded: g,
                        partialText: E,
                      });
                    x ? x.run(C) : C();
                  }
                }
              })
            );
            let O = this.concatChunks(p, g);
            try {
              let z = o.headers.get("Content-Type") ?? "";
              u = this.parseBody(t, O, z);
            } catch (z) {
              n.error(
                new Li({
                  error: z,
                  headers: new ii(o.headers),
                  status: o.status,
                  statusText: o.statusText,
                  url: Pf(o) ?? t.urlWithParams,
                })
              );
              return;
            }
          }
          d === 0 && (d = u ? qf : 0),
            d >= 200 && d < 300
              ? (n.next(
                  new ln({
                    body: u,
                    headers: s,
                    status: d,
                    statusText: c,
                    url: l,
                  })
                ),
                n.complete())
              : n.error(
                  new Li({
                    error: u,
                    headers: s,
                    status: d,
                    statusText: c,
                    url: l,
                  })
                );
        });
      }
      parseBody(t, i, n) {
        switch (t.responseType) {
          case "json":
            let a = new TextDecoder().decode(i).replace(bv, "");
            return a === "" ? null : JSON.parse(a);
          case "text":
            return new TextDecoder().decode(i);
          case "blob":
            return new Blob([i], { type: n });
          case "arraybuffer":
            return i.buffer;
        }
      }
      createRequestInit(t) {
        let i = {},
          n = t.withCredentials ? "include" : void 0;
        if (
          (t.headers.forEach((a, o) => (i[a] = o.join(","))),
          t.headers.has("Accept") ||
            (i.Accept = "application/json, text/plain, */*"),
          !t.headers.has("Content-Type"))
        ) {
          let a = t.detectContentTypeHeader();
          a !== null && (i["Content-Type"] = a);
        }
        return {
          body: t.serializeBody(),
          method: t.method,
          headers: i,
          credentials: n,
        };
      }
      concatChunks(t, i) {
        let n = new Uint8Array(i),
          a = 0;
        for (let o of t) n.set(o, a), (a += o.length);
        return n;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  ul = class {};
function fl() {}
function wv(e) {
  e.then(fl, fl);
}
function Kf(e, r) {
  return r(e);
}
function kv(e, r) {
  return (t, i) => r.intercept(t, { handle: (n) => e(n, i) });
}
function Ev(e, r, t) {
  return (i, n) => jr(t, () => r(i, (a) => e(a, n)));
}
var Cv = new Ee(""),
  hl = new Ee(""),
  Yf = new Ee(""),
  Zf = new Ee("", { providedIn: "root", factory: () => !0 });
function Tv() {
  let e = null;
  return (r, t) => {
    e === null && (e = (he(Cv, { optional: !0 }) ?? []).reduceRight(kv, Kf));
    let i = he(Sa);
    if (he(Zf)) {
      let a = i.add();
      return e(r, t).pipe(gi(() => i.remove(a)));
    } else return e(r, t);
  };
}
var Lf = (() => {
  class e extends Ba {
    constructor(t, i) {
      super(),
        (this.backend = t),
        (this.injector = i),
        (this.chain = null),
        (this.pendingTasks = he(Sa)),
        (this.contributeToStability = he(Zf));
    }
    handle(t) {
      if (this.chain === null) {
        let i = Array.from(
          new Set([...this.injector.get(hl), ...this.injector.get(Yf, [])])
        );
        this.chain = i.reduceRight((n, a) => Ev(n, a, this.injector), Kf);
      }
      if (this.contributeToStability) {
        let i = this.pendingTasks.add();
        return this.chain(t, (n) => this.backend.handle(n)).pipe(
          gi(() => this.pendingTasks.remove(i))
        );
      } else return this.chain(t, (i) => this.backend.handle(i));
    }
    static {
      this.ɵfac = function (i) {
        return new (i || e)(ae(ja), ae(Rn));
      };
    }
    static {
      this.ɵprov = pe({ token: e, factory: e.ɵfac });
    }
  }
  return e;
})();
var Sv = /^\)\]\}',?\n/;
function Av(e) {
  return "responseURL" in e && e.responseURL
    ? e.responseURL
    : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
    ? e.getResponseHeader("X-Request-URL")
    : null;
}
var Bf = (() => {
    class e {
      constructor(t) {
        this.xhrFactory = t;
      }
      handle(t) {
        if (t.method === "JSONP") throw new et(-2800, !1);
        let i = this.xhrFactory;
        return (i.ɵloadImpl ? nr(i.ɵloadImpl()) : ke(null)).pipe(
          ar(
            () =>
              new Ea((a) => {
                let o = i.build();
                if (
                  (o.open(t.method, t.urlWithParams),
                  t.withCredentials && (o.withCredentials = !0),
                  t.headers.forEach((f, g) =>
                    o.setRequestHeader(f, g.join(","))
                  ),
                  t.headers.has("Accept") ||
                    o.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !t.headers.has("Content-Type"))
                ) {
                  let f = t.detectContentTypeHeader();
                  f !== null && o.setRequestHeader("Content-Type", f);
                }
                if (t.responseType) {
                  let f = t.responseType.toLowerCase();
                  o.responseType = f !== "json" ? f : "text";
                }
                let s = t.serializeBody(),
                  c = null,
                  l = () => {
                    if (c !== null) return c;
                    let f = o.statusText || "OK",
                      g = new ii(o.getAllResponseHeaders()),
                      T = Av(o) || t.url;
                    return (
                      (c = new ks({
                        headers: g,
                        status: o.status,
                        statusText: f,
                        url: T,
                      })),
                      c
                    );
                  },
                  d = () => {
                    let { headers: f, status: g, statusText: T, url: E } = l(),
                      x = null;
                    g !== _v &&
                      (x =
                        typeof o.response > "u" ? o.responseText : o.response),
                      g === 0 && (g = x ? qf : 0);
                    let O = g >= 200 && g < 300;
                    if (t.responseType === "json" && typeof x == "string") {
                      let z = x;
                      x = x.replace(Sv, "");
                      try {
                        x = x !== "" ? JSON.parse(x) : null;
                      } catch (F) {
                        (x = z), O && ((O = !1), (x = { error: F, text: x }));
                      }
                    }
                    O
                      ? (a.next(
                          new ln({
                            body: x,
                            headers: f,
                            status: g,
                            statusText: T,
                            url: E || void 0,
                          })
                        ),
                        a.complete())
                      : a.error(
                          new Li({
                            error: x,
                            headers: f,
                            status: g,
                            statusText: T,
                            url: E || void 0,
                          })
                        );
                  },
                  u = (f) => {
                    let { url: g } = l(),
                      T = new Li({
                        error: f,
                        status: o.status || 0,
                        statusText: o.statusText || "Unknown Error",
                        url: g || void 0,
                      });
                    a.error(T);
                  },
                  h = !1,
                  m = (f) => {
                    h || (a.next(l()), (h = !0));
                    let g = { type: ji.DownloadProgress, loaded: f.loaded };
                    f.lengthComputable && (g.total = f.total),
                      t.responseType === "text" &&
                        o.responseText &&
                        (g.partialText = o.responseText),
                      a.next(g);
                  },
                  p = (f) => {
                    let g = { type: ji.UploadProgress, loaded: f.loaded };
                    f.lengthComputable && (g.total = f.total), a.next(g);
                  };
                return (
                  o.addEventListener("load", d),
                  o.addEventListener("error", u),
                  o.addEventListener("timeout", u),
                  o.addEventListener("abort", u),
                  t.reportProgress &&
                    (o.addEventListener("progress", m),
                    s !== null &&
                      o.upload &&
                      o.upload.addEventListener("progress", p)),
                  o.send(s),
                  a.next({ type: ji.Sent }),
                  () => {
                    o.removeEventListener("error", u),
                      o.removeEventListener("abort", u),
                      o.removeEventListener("load", d),
                      o.removeEventListener("timeout", u),
                      t.reportProgress &&
                        (o.removeEventListener("progress", m),
                        s !== null &&
                          o.upload &&
                          o.upload.removeEventListener("progress", p)),
                      o.readyState !== o.DONE && o.abort();
                  }
                );
              })
          )
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(vs));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  Qf = new Ee(""),
  Iv = "XSRF-TOKEN",
  Fv = new Ee("", { providedIn: "root", factory: () => Iv }),
  Dv = "X-XSRF-TOKEN",
  Mv = new Ee("", { providedIn: "root", factory: () => Dv }),
  Es = class {},
  Rv = (() => {
    class e {
      constructor(t, i, n) {
        (this.doc = t),
          (this.platform = i),
          (this.cookieName = n),
          (this.lastCookieString = ""),
          (this.lastToken = null),
          (this.parseCount = 0);
      }
      getToken() {
        if (this.platform === "server") return null;
        let t = this.doc.cookie || "";
        return (
          t !== this.lastCookieString &&
            (this.parseCount++,
            (this.lastToken = ps(t, this.cookieName)),
            (this.lastCookieString = t)),
          this.lastToken
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye), ae(Tr), ae(Fv));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })();
function Ov(e, r) {
  let t = e.url.toLowerCase();
  if (
    !he(Qf) ||
    e.method === "GET" ||
    e.method === "HEAD" ||
    t.startsWith("http://") ||
    t.startsWith("https://")
  )
    return r(e);
  let i = he(Es).getToken(),
    n = he(Mv);
  return (
    i != null &&
      !e.headers.has(n) &&
      (e = e.clone({ headers: e.headers.set(n, i) })),
    r(e)
  );
}
var ml = (function (e) {
  return (
    (e[(e.Interceptors = 0)] = "Interceptors"),
    (e[(e.LegacyInterceptors = 1)] = "LegacyInterceptors"),
    (e[(e.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
    (e[(e.NoXsrfProtection = 3)] = "NoXsrfProtection"),
    (e[(e.JsonpSupport = 4)] = "JsonpSupport"),
    (e[(e.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
    (e[(e.Fetch = 6)] = "Fetch"),
    e
  );
})(ml || {});
function Jf(e, r) {
  return { ɵkind: e, ɵproviders: r };
}
function eh(...e) {
  let r = [
    xi,
    Bf,
    Lf,
    { provide: Ba, useExisting: Lf },
    { provide: ja, useFactory: () => he(dl, { optional: !0 }) ?? he(Bf) },
    { provide: hl, useValue: Ov, multi: !0 },
    { provide: Qf, useValue: !0 },
    { provide: Es, useClass: Rv },
  ];
  for (let t of e) r.push(...t.ɵproviders);
  return Jr(r);
}
var jf = new Ee("");
function th() {
  return Jf(ml.LegacyInterceptors, [
    { provide: jf, useFactory: Tv },
    { provide: hl, useExisting: jf, multi: !0 },
  ]);
}
function rh() {
  return Jf(ml.Fetch, [dl, { provide: ja, useExisting: dl }]);
}
var Nv = new Ee(""),
  Vf = "b",
  Uf = "h",
  zf = "s",
  Hf = "st",
  Wf = "u",
  Gf = "rt",
  ws = new Ee(""),
  Pv = ["GET", "HEAD"];
function Lv(e, r) {
  let m = he(ws),
    { isCacheActive: t } = m,
    i = Hu(m, ["isCacheActive"]),
    { transferCache: n, method: a } = e;
  if (
    !t ||
    n === !1 ||
    (a === "POST" && !i.includePostRequests && !n) ||
    (a !== "POST" && !Pv.includes(a)) ||
    (!i.includeRequestsWithAuthHeaders && Bv(e)) ||
    i.filter?.(e) === !1
  )
    return r(e);
  let o = he(tl),
    s = he(Nv, { optional: !0 }),
    c = Na(he(Tr));
  if (s && !c) throw new et(2803, !1);
  let l = c && s ? zv(e.url, s) : e.url,
    d = Vv(e, l),
    u = o.get(d, null),
    h = i.includeHeaders;
  if ((typeof n == "object" && n.includeHeaders && (h = n.includeHeaders), u)) {
    let { [Vf]: p, [Gf]: f, [Uf]: g, [zf]: T, [Hf]: E, [Wf]: x } = u,
      O = p;
    switch (f) {
      case "arraybuffer":
        O = new TextEncoder().encode(p).buffer;
        break;
      case "blob":
        O = new Blob([p]);
        break;
    }
    let z = new ii(g);
    return ke(
      new ln({ body: O, headers: z, status: T, statusText: E, url: x })
    );
  }
  return r(e).pipe(
    gt((p) => {
      p instanceof ln &&
        c &&
        o.set(d, {
          [Vf]: p.body,
          [Uf]: jv(p.headers, h),
          [zf]: p.status,
          [Hf]: p.statusText,
          [Wf]: l,
          [Gf]: e.responseType,
        });
    })
  );
}
function Bv(e) {
  return e.headers.has("authorization") || e.headers.has("proxy-authorization");
}
function jv(e, r) {
  if (!r) return {};
  let t = {};
  for (let i of r) {
    let n = e.getAll(i);
    n !== null && (t[i] = n);
  }
  return t;
}
function $f(e) {
  return [...e.keys()]
    .sort()
    .map((r) => `${r}=${e.getAll(r)}`)
    .join("&");
}
function Vv(e, r) {
  let { params: t, method: i, responseType: n } = e,
    a = $f(t),
    o = e.serializeBody();
  o instanceof URLSearchParams ? (o = $f(o)) : typeof o != "string" && (o = "");
  let s = [i, n, r, o, a].join("|"),
    c = Uv(s);
  return c;
}
function Uv(e) {
  let r = 0;
  for (let t of e) r = (Math.imul(31, r) + t.charCodeAt(0)) << 0;
  return (r += 2147483648), r.toString();
}
function ih(e) {
  return [
    {
      provide: ws,
      useFactory: () => (
        Da("NgHttpTransferCache"), te({ isCacheActive: !0 }, e)
      ),
    },
    { provide: Yf, useValue: Lv, multi: !0, deps: [tl, ws] },
    {
      provide: fs,
      multi: !0,
      useFactory: () => {
        let r = he(Ra),
          t = he(ws);
        return () => {
          gf(r).then(() => {
            t.isCacheActive = !1;
          });
        };
      },
    },
  ];
}
function zv(e, r) {
  let t = new URL(e, "resolve://").origin,
    i = r[t];
  return i ? e.replace(t, i) : e;
}
var xl = class extends wf {
    constructor() {
      super(...arguments), (this.supportsDOMEvents = !0);
    }
  },
  _l = class e extends xl {
    static makeCurrent() {
      yf(new e());
    }
    onAndCancel(r, t, i) {
      return (
        r.addEventListener(t, i),
        () => {
          r.removeEventListener(t, i);
        }
      );
    }
    dispatchEvent(r, t) {
      r.dispatchEvent(t);
    }
    remove(r) {
      r.remove();
    }
    createElement(r, t) {
      return (t = t || this.getDefaultDocument()), t.createElement(r);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(r) {
      return r.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(r) {
      return r instanceof DocumentFragment;
    }
    getGlobalEventTarget(r, t) {
      return t === "window"
        ? window
        : t === "document"
        ? r
        : t === "body"
        ? r.body
        : null;
    }
    getBaseHref(r) {
      let t = Wv();
      return t == null ? null : Gv(t);
    }
    resetBaseElement() {
      Ua = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(r) {
      return ps(document.cookie, r);
    }
  },
  Ua = null;
function Wv() {
  return (
    (Ua = Ua || document.querySelector("base")),
    Ua ? Ua.getAttribute("href") : null
  );
}
function Gv(e) {
  return new URL(e, document.baseURI).pathname;
}
var bl = class {
    addToWindow(r) {
      (Oi.getAngularTestability = (i, n = !0) => {
        let a = r.findTestabilityInTree(i, n);
        if (a == null) throw new et(5103, !1);
        return a;
      }),
        (Oi.getAllAngularTestabilities = () => r.getAllTestabilities()),
        (Oi.getAllAngularRootElements = () => r.getAllRootElements());
      let t = (i) => {
        let n = Oi.getAllAngularTestabilities(),
          a = n.length,
          o = function () {
            a--, a == 0 && i();
          };
        n.forEach((s) => {
          s.whenStable(o);
        });
      };
      Oi.frameworkStabilizers || (Oi.frameworkStabilizers = []),
        Oi.frameworkStabilizers.push(t);
    }
    findTestabilityInTree(r, t, i) {
      if (t == null) return null;
      let n = r.getTestability(t);
      return (
        n ??
        (i
          ? Pi().isShadowRoot(t)
            ? this.findTestabilityInTree(r, t.host, !0)
            : this.findTestabilityInTree(r, t.parentElement, !0)
          : null)
      );
    }
  },
  $v = (() => {
    class e {
      build() {
        return new XMLHttpRequest();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  yl = new Ee(""),
  sh = (() => {
    class e {
      constructor(t, i) {
        (this._zone = i),
          (this._eventNameToPlugin = new Map()),
          t.forEach((n) => {
            n.manager = this;
          }),
          (this._plugins = t.slice().reverse());
      }
      addEventListener(t, i, n) {
        return this._findPluginFor(i).addEventListener(t, i, n);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(t) {
        let i = this._eventNameToPlugin.get(t);
        if (i) return i;
        if (((i = this._plugins.find((a) => a.supports(t))), !i))
          throw new et(5101, !1);
        return this._eventNameToPlugin.set(t, i), i;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(yl), ae(qe));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  Cs = class {
    constructor(r) {
      this._doc = r;
    }
  },
  gl = "ng-app-id",
  ch = (() => {
    class e {
      constructor(t, i, n, a = {}) {
        (this.doc = t),
          (this.appId = i),
          (this.nonce = n),
          (this.platformId = a),
          (this.styleRef = new Map()),
          (this.hostNodes = new Set()),
          (this.styleNodesInDOM = this.collectServerRenderedStyles()),
          (this.platformIsServer = Na(a)),
          this.resetHostNodes();
      }
      addStyles(t) {
        for (let i of t)
          this.changeUsageCount(i, 1) === 1 && this.onStyleAdded(i);
      }
      removeStyles(t) {
        for (let i of t)
          this.changeUsageCount(i, -1) <= 0 && this.onStyleRemoved(i);
      }
      ngOnDestroy() {
        let t = this.styleNodesInDOM;
        t && (t.forEach((i) => i.remove()), t.clear());
        for (let i of this.getAllStyles()) this.onStyleRemoved(i);
        this.resetHostNodes();
      }
      addHost(t) {
        this.hostNodes.add(t);
        for (let i of this.getAllStyles()) this.addStyleToHost(t, i);
      }
      removeHost(t) {
        this.hostNodes.delete(t);
      }
      getAllStyles() {
        return this.styleRef.keys();
      }
      onStyleAdded(t) {
        for (let i of this.hostNodes) this.addStyleToHost(i, t);
      }
      onStyleRemoved(t) {
        let i = this.styleRef;
        i.get(t)?.elements?.forEach((n) => n.remove()), i.delete(t);
      }
      collectServerRenderedStyles() {
        let t = this.doc.head?.querySelectorAll(`style[${gl}="${this.appId}"]`);
        if (t?.length) {
          let i = new Map();
          return (
            t.forEach((n) => {
              n.textContent != null && i.set(n.textContent, n);
            }),
            i
          );
        }
        return null;
      }
      changeUsageCount(t, i) {
        let n = this.styleRef;
        if (n.has(t)) {
          let a = n.get(t);
          return (a.usage += i), a.usage;
        }
        return n.set(t, { usage: i, elements: [] }), i;
      }
      getStyleElement(t, i) {
        let n = this.styleNodesInDOM,
          a = n?.get(i);
        if (a?.parentNode === t) return n.delete(i), a.removeAttribute(gl), a;
        {
          let o = this.doc.createElement("style");
          return (
            this.nonce && o.setAttribute("nonce", this.nonce),
            (o.textContent = i),
            this.platformIsServer && o.setAttribute(gl, this.appId),
            t.appendChild(o),
            o
          );
        }
      }
      addStyleToHost(t, i) {
        let n = this.getStyleElement(t, i),
          a = this.styleRef,
          o = a.get(i)?.elements;
        o ? o.push(n) : a.set(i, { elements: [n], usage: 1 });
      }
      resetHostNodes() {
        let t = this.hostNodes;
        t.clear(), t.add(this.doc.head);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye), ae(Aa), ae(Ia, 8), ae(Tr));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  vl = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  Cl = /%COMP%/g,
  lh = "%COMP%",
  Xv = `_nghost-${lh}`,
  qv = `_ngcontent-${lh}`,
  Kv = !0,
  Yv = new Ee("", { providedIn: "root", factory: () => Kv });
function Zv(e) {
  return qv.replace(Cl, e);
}
function Qv(e) {
  return Xv.replace(Cl, e);
}
function dh(e, r) {
  return r.map((t) => t.replace(Cl, e));
}
var Vn = (() => {
    class e {
      constructor(t, i, n, a, o, s, c, l = null) {
        (this.eventManager = t),
          (this.sharedStylesHost = i),
          (this.appId = n),
          (this.removeStylesOnCompDestroy = a),
          (this.doc = o),
          (this.platformId = s),
          (this.ngZone = c),
          (this.nonce = l),
          (this.rendererByCompId = new Map()),
          (this.platformIsServer = Na(s)),
          (this.defaultRenderer = new za(t, o, c, this.platformIsServer));
      }
      createRenderer(t, i) {
        if (!t || !i) return this.defaultRenderer;
        this.platformIsServer &&
          i.encapsulation === Ta.ShadowDom &&
          (i = Xe(te({}, i), { encapsulation: Ta.Emulated }));
        let n = this.getOrCreateRenderer(t, i);
        return (
          n instanceof Ts
            ? n.applyToHost(t)
            : n instanceof Ha && n.applyStyles(),
          n
        );
      }
      getOrCreateRenderer(t, i) {
        let n = this.rendererByCompId,
          a = n.get(i.id);
        if (!a) {
          let o = this.doc,
            s = this.ngZone,
            c = this.eventManager,
            l = this.sharedStylesHost,
            d = this.removeStylesOnCompDestroy,
            u = this.platformIsServer;
          switch (i.encapsulation) {
            case Ta.Emulated:
              a = new Ts(c, l, i, this.appId, d, o, s, u);
              break;
            case Ta.ShadowDom:
              return new wl(c, l, t, i, o, s, this.nonce, u);
            default:
              a = new Ha(c, l, i, d, o, s, u);
              break;
          }
          n.set(i.id, a);
        }
        return a;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(
            ae(sh),
            ae(ch),
            ae(Aa),
            ae(Yv),
            ae(Ye),
            ae(Tr),
            ae(qe),
            ae(Ia)
          );
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  za = class {
    constructor(r, t, i, n) {
      (this.eventManager = r),
        (this.doc = t),
        (this.ngZone = i),
        (this.platformIsServer = n),
        (this.data = Object.create(null)),
        (this.throwOnSyntheticProps = !0),
        (this.destroyNode = null);
    }
    destroy() {}
    createElement(r, t) {
      return t
        ? this.doc.createElementNS(vl[t] || t, r)
        : this.doc.createElement(r);
    }
    createComment(r) {
      return this.doc.createComment(r);
    }
    createText(r) {
      return this.doc.createTextNode(r);
    }
    appendChild(r, t) {
      (nh(r) ? r.content : r).appendChild(t);
    }
    insertBefore(r, t, i) {
      r && (nh(r) ? r.content : r).insertBefore(t, i);
    }
    removeChild(r, t) {
      t.remove();
    }
    selectRootElement(r, t) {
      let i = typeof r == "string" ? this.doc.querySelector(r) : r;
      if (!i) throw new et(-5104, !1);
      return t || (i.textContent = ""), i;
    }
    parentNode(r) {
      return r.parentNode;
    }
    nextSibling(r) {
      return r.nextSibling;
    }
    setAttribute(r, t, i, n) {
      if (n) {
        t = n + ":" + t;
        let a = vl[n];
        a ? r.setAttributeNS(a, t, i) : r.setAttribute(t, i);
      } else r.setAttribute(t, i);
    }
    removeAttribute(r, t, i) {
      if (i) {
        let n = vl[i];
        n ? r.removeAttributeNS(n, t) : r.removeAttribute(`${i}:${t}`);
      } else r.removeAttribute(t);
    }
    addClass(r, t) {
      r.classList.add(t);
    }
    removeClass(r, t) {
      r.classList.remove(t);
    }
    setStyle(r, t, i, n) {
      n & (Fa.DashCase | Fa.Important)
        ? r.style.setProperty(t, i, n & Fa.Important ? "important" : "")
        : (r.style[t] = i);
    }
    removeStyle(r, t, i) {
      i & Fa.DashCase ? r.style.removeProperty(t) : (r.style[t] = "");
    }
    setProperty(r, t, i) {
      r != null && (r[t] = i);
    }
    setValue(r, t) {
      r.nodeValue = t;
    }
    listen(r, t, i) {
      if (
        typeof r == "string" &&
        ((r = Pi().getGlobalEventTarget(this.doc, r)), !r)
      )
        throw new Error(`Unsupported event target ${r} for event ${t}`);
      return this.eventManager.addEventListener(
        r,
        t,
        this.decoratePreventDefault(i)
      );
    }
    decoratePreventDefault(r) {
      return (t) => {
        if (t === "__ngUnwrap__") return r;
        (this.platformIsServer ? this.ngZone.runGuarded(() => r(t)) : r(t)) ===
          !1 && t.preventDefault();
      };
    }
  };
function nh(e) {
  return e.tagName === "TEMPLATE" && e.content !== void 0;
}
var wl = class extends za {
    constructor(r, t, i, n, a, o, s, c) {
      super(r, a, o, c),
        (this.sharedStylesHost = t),
        (this.hostEl = i),
        (this.shadowRoot = i.attachShadow({ mode: "open" })),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let l = dh(n.id, n.styles);
      for (let d of l) {
        let u = document.createElement("style");
        s && u.setAttribute("nonce", s),
          (u.textContent = d),
          this.shadowRoot.appendChild(u);
      }
    }
    nodeOrShadowRoot(r) {
      return r === this.hostEl ? this.shadowRoot : r;
    }
    appendChild(r, t) {
      return super.appendChild(this.nodeOrShadowRoot(r), t);
    }
    insertBefore(r, t, i) {
      return super.insertBefore(this.nodeOrShadowRoot(r), t, i);
    }
    removeChild(r, t) {
      return super.removeChild(null, t);
    }
    parentNode(r) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  Ha = class extends za {
    constructor(r, t, i, n, a, o, s, c) {
      super(r, a, o, s),
        (this.sharedStylesHost = t),
        (this.removeStylesOnCompDestroy = n),
        (this.styles = c ? dh(c, i.styles) : i.styles);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles);
    }
  },
  Ts = class extends Ha {
    constructor(r, t, i, n, a, o, s, c) {
      let l = n + "-" + i.id;
      super(r, t, i, a, o, s, c, l),
        (this.contentAttr = Zv(l)),
        (this.hostAttr = Qv(l));
    }
    applyToHost(r) {
      this.applyStyles(), this.setAttribute(r, this.hostAttr, "");
    }
    createElement(r, t) {
      let i = super.createElement(r, t);
      return super.setAttribute(i, this.contentAttr, ""), i;
    }
  },
  Jv = (() => {
    class e extends Cs {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return !0;
      }
      addEventListener(t, i, n) {
        return (
          t.addEventListener(i, n, !1), () => this.removeEventListener(t, i, n)
        );
      }
      removeEventListener(t, i, n) {
        return t.removeEventListener(i, n);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  ah = ["alt", "control", "meta", "shift"],
  ex = {
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
  tx = {
    alt: (e) => e.altKey,
    control: (e) => e.ctrlKey,
    meta: (e) => e.metaKey,
    shift: (e) => e.shiftKey,
  },
  rx = (() => {
    class e extends Cs {
      constructor(t) {
        super(t);
      }
      supports(t) {
        return e.parseEventName(t) != null;
      }
      addEventListener(t, i, n) {
        let a = e.parseEventName(i),
          o = e.eventCallback(a.fullKey, n, this.manager.getZone());
        return this.manager
          .getZone()
          .runOutsideAngular(() => Pi().onAndCancel(t, a.domEventName, o));
      }
      static parseEventName(t) {
        let i = t.toLowerCase().split("."),
          n = i.shift();
        if (i.length === 0 || !(n === "keydown" || n === "keyup")) return null;
        let a = e._normalizeKey(i.pop()),
          o = "",
          s = i.indexOf("code");
        if (
          (s > -1 && (i.splice(s, 1), (o = "code.")),
          ah.forEach((l) => {
            let d = i.indexOf(l);
            d > -1 && (i.splice(d, 1), (o += l + "."));
          }),
          (o += a),
          i.length != 0 || a.length === 0)
        )
          return null;
        let c = {};
        return (c.domEventName = n), (c.fullKey = o), c;
      }
      static matchEventFullKeyCode(t, i) {
        let n = ex[t.key] || t.key,
          a = "";
        return (
          i.indexOf("code.") > -1 && ((n = t.code), (a = "code.")),
          n == null || !n
            ? !1
            : ((n = n.toLowerCase()),
              n === " " ? (n = "space") : n === "." && (n = "dot"),
              ah.forEach((o) => {
                if (o !== n) {
                  let s = tx[o];
                  s(t) && (a += o + ".");
                }
              }),
              (a += n),
              a === i)
        );
      }
      static eventCallback(t, i, n) {
        return (a) => {
          e.matchEventFullKeyCode(a, t) && n.runGuarded(() => i(a));
        };
      }
      static _normalizeKey(t) {
        return t === "esc" ? "escape" : t;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })();
function uh(e, r) {
  return _f(te({ rootComponent: e }, ix(r)));
}
function ix(e) {
  return {
    appProviders: [...fh, ...(e?.providers ?? [])],
    platformProviders: sx,
  };
}
function nx() {
  _l.makeCurrent();
}
function ax() {
  return new an();
}
function ox() {
  return Ju(document), document;
}
var sx = [
  { provide: Tr, useValue: Cf },
  { provide: ef, useValue: nx, multi: !0 },
  { provide: Ye, useFactory: ox, deps: [] },
];
var cx = new Ee(""),
  lx = [
    { provide: ls, useClass: bl, deps: [] },
    { provide: pf, useClass: ds, deps: [qe, il, ls] },
    { provide: ds, useClass: ds, deps: [qe, il, ls] },
  ],
  fh = [
    { provide: Qu, useValue: "root" },
    { provide: an, useFactory: ax, deps: [] },
    { provide: yl, useClass: Jv, multi: !0, deps: [Ye, qe, Tr] },
    { provide: yl, useClass: rx, multi: !0, deps: [Ye] },
    Vn,
    ch,
    sh,
    { provide: Ln, useExisting: Vn },
    { provide: vs, useClass: $v, deps: [] },
    [],
  ],
  hh = (() => {
    class e {
      constructor(t) {}
      static withServerTransition(t) {
        return { ngModule: e, providers: [{ provide: Aa, useValue: t.appId }] };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(cx, 12));
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ providers: [...fh, ...lx], imports: [hr, xf] });
      }
    }
    return e;
  })(),
  mh = (() => {
    class e {
      constructor(t) {
        (this._doc = t), (this._dom = Pi());
      }
      addTag(t, i = !1) {
        return t ? this._getOrCreateElement(t, i) : null;
      }
      addTags(t, i = !1) {
        return t
          ? t.reduce(
              (n, a) => (a && n.push(this._getOrCreateElement(a, i)), n),
              []
            )
          : [];
      }
      getTag(t) {
        return (t && this._doc.querySelector(`meta[${t}]`)) || null;
      }
      getTags(t) {
        if (!t) return [];
        let i = this._doc.querySelectorAll(`meta[${t}]`);
        return i ? [].slice.call(i) : [];
      }
      updateTag(t, i) {
        if (!t) return null;
        i = i || this._parseSelector(t);
        let n = this.getTag(i);
        return n
          ? this._setMetaElementAttributes(t, n)
          : this._getOrCreateElement(t, !0);
      }
      removeTag(t) {
        this.removeTagElement(this.getTag(t));
      }
      removeTagElement(t) {
        t && this._dom.remove(t);
      }
      _getOrCreateElement(t, i = !1) {
        if (!i) {
          let o = this._parseSelector(t),
            s = this.getTags(o).filter((c) =>
              this._containsAttributes(t, c)
            )[0];
          if (s !== void 0) return s;
        }
        let n = this._dom.createElement("meta");
        return (
          this._setMetaElementAttributes(t, n),
          this._doc.getElementsByTagName("head")[0].appendChild(n),
          n
        );
      }
      _setMetaElementAttributes(t, i) {
        return (
          Object.keys(t).forEach((n) =>
            i.setAttribute(this._getMetaKeyMap(n), t[n])
          ),
          i
        );
      }
      _parseSelector(t) {
        let i = t.name ? "name" : "property";
        return `${i}="${t[i]}"`;
      }
      _containsAttributes(t, i) {
        return Object.keys(t).every(
          (n) => i.getAttribute(this._getMetaKeyMap(n)) === t[n]
        );
      }
      _getMetaKeyMap(t) {
        return dx[t] || t;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  dx = { httpEquiv: "http-equiv" },
  Ss = (() => {
    class e {
      constructor(t) {
        this._doc = t;
      }
      getTitle() {
        return this._doc.title;
      }
      setTitle(t) {
        this._doc.title = t || "";
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Wa = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({
          token: e,
          factory: function (i) {
            let n = null;
            return i ? (n = new (i || e)()) : (n = ae(ux)), n;
          },
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  ux = (() => {
    class e extends Wa {
      constructor(t) {
        super(), (this._doc = t);
      }
      sanitize(t, i) {
        if (i == null) return null;
        switch (t) {
          case vr.NONE:
            return i;
          case vr.HTML:
            return Pn(i, "HTML") ? Nn(i) : cf(this._doc, String(i)).toString();
          case vr.STYLE:
            return Pn(i, "Style") ? Nn(i) : i;
          case vr.SCRIPT:
            if (Pn(i, "Script")) return Nn(i);
            throw new et(5200, !1);
          case vr.URL:
            return Pn(i, "URL") ? Nn(i) : sf(String(i));
          case vr.RESOURCE_URL:
            if (Pn(i, "ResourceURL")) return Nn(i);
            throw new et(5201, !1);
          default:
            throw new et(5202, !1);
        }
      }
      bypassSecurityTrustHtml(t) {
        return tf(t);
      }
      bypassSecurityTrustStyle(t) {
        return rf(t);
      }
      bypassSecurityTrustScript(t) {
        return nf(t);
      }
      bypassSecurityTrustUrl(t) {
        return af(t);
      }
      bypassSecurityTrustResourceUrl(t) {
        return of(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ye));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  kl = (function (e) {
    return (
      (e[(e.NoHttpTransferCache = 0)] = "NoHttpTransferCache"),
      (e[(e.HttpTransferCacheOptions = 1)] = "HttpTransferCacheOptions"),
      (e[(e.I18nSupport = 2)] = "I18nSupport"),
      (e[(e.EventReplay = 3)] = "EventReplay"),
      e
    );
  })(kl || {});
function ph(...e) {
  let r = [],
    t = new Set(),
    i = t.has(kl.HttpTransferCacheOptions);
  for (let { ɵproviders: n, ɵkind: a } of e) t.add(a), n.length && r.push(n);
  return Jr([[], bf(), t.has(kl.NoHttpTransferCache) || i ? [] : ih({}), r]);
}
var Oe = "primary",
  so = Symbol("RouteTitle"),
  Fl = class {
    constructor(r) {
      this.params = r || {};
    }
    has(r) {
      return Object.prototype.hasOwnProperty.call(this.params, r);
    }
    get(r) {
      if (this.has(r)) {
        let t = this.params[r];
        return Array.isArray(t) ? t[0] : t;
      }
      return null;
    }
    getAll(r) {
      if (this.has(r)) {
        let t = this.params[r];
        return Array.isArray(t) ? t : [t];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function $n(e) {
  return new Fl(e);
}
function hx(e, r, t) {
  let i = t.path.split("/");
  if (
    i.length > e.length ||
    (t.pathMatch === "full" && (r.hasChildren() || i.length < e.length))
  )
    return null;
  let n = {};
  for (let a = 0; a < i.length; a++) {
    let o = i[a],
      s = e[a];
    if (o[0] === ":") n[o.substring(1)] = s;
    else if (o !== s.path) return null;
  }
  return { consumed: e.slice(0, i.length), posParams: n };
}
function mx(e, r) {
  if (e.length !== r.length) return !1;
  for (let t = 0; t < e.length; ++t) if (!ni(e[t], r[t])) return !1;
  return !0;
}
function ni(e, r) {
  let t = e ? Dl(e) : void 0,
    i = r ? Dl(r) : void 0;
  if (!t || !i || t.length != i.length) return !1;
  let n;
  for (let a = 0; a < t.length; a++)
    if (((n = t[a]), !kh(e[n], r[n]))) return !1;
  return !0;
}
function Dl(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e)];
}
function kh(e, r) {
  if (Array.isArray(e) && Array.isArray(r)) {
    if (e.length !== r.length) return !1;
    let t = [...e].sort(),
      i = [...r].sort();
    return t.every((n, a) => i[a] === n);
  } else return e === r;
}
function Eh(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function Vi(e) {
  return mi(e) ? e : us(e) ? nr(Promise.resolve(e)) : ke(e);
}
var px = { exact: Th, subset: Sh },
  Ch = { exact: gx, subset: vx, ignored: () => !0 };
function gh(e, r, t) {
  return (
    px[t.paths](e.root, r.root, t.matrixParams) &&
    Ch[t.queryParams](e.queryParams, r.queryParams) &&
    !(t.fragment === "exact" && e.fragment !== r.fragment)
  );
}
function gx(e, r) {
  return ni(e, r);
}
function Th(e, r, t) {
  if (
    !un(e.segments, r.segments) ||
    !Ds(e.segments, r.segments, t) ||
    e.numberOfChildren !== r.numberOfChildren
  )
    return !1;
  for (let i in r.children)
    if (!e.children[i] || !Th(e.children[i], r.children[i], t)) return !1;
  return !0;
}
function vx(e, r) {
  return (
    Object.keys(r).length <= Object.keys(e).length &&
    Object.keys(r).every((t) => kh(e[t], r[t]))
  );
}
function Sh(e, r, t) {
  return Ah(e, r, r.segments, t);
}
function Ah(e, r, t, i) {
  if (e.segments.length > t.length) {
    let n = e.segments.slice(0, t.length);
    return !(!un(n, t) || r.hasChildren() || !Ds(n, t, i));
  } else if (e.segments.length === t.length) {
    if (!un(e.segments, t) || !Ds(e.segments, t, i)) return !1;
    for (let n in r.children)
      if (!e.children[n] || !Sh(e.children[n], r.children[n], i)) return !1;
    return !0;
  } else {
    let n = t.slice(0, e.segments.length),
      a = t.slice(e.segments.length);
    return !un(e.segments, n) || !Ds(e.segments, n, i) || !e.children[Oe]
      ? !1
      : Ah(e.children[Oe], r, a, i);
  }
}
function Ds(e, r, t) {
  return r.every((i, n) => Ch[t](e[n].parameters, i.parameters));
}
var bi = class {
    constructor(r = new Ze([], {}), t = {}, i = null) {
      (this.root = r), (this.queryParams = t), (this.fragment = i);
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= $n(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      return bx.serialize(this);
    }
  },
  Ze = class {
    constructor(r, t) {
      (this.segments = r),
        (this.children = t),
        (this.parent = null),
        Object.values(t).forEach((i) => (i.parent = this));
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return Ms(this);
    }
  },
  dn = class {
    constructor(r, t) {
      (this.path = r), (this.parameters = t);
    }
    get parameterMap() {
      return (this._parameterMap ??= $n(this.parameters)), this._parameterMap;
    }
    toString() {
      return Fh(this);
    }
  };
function xx(e, r) {
  return un(e, r) && e.every((t, i) => ni(t.parameters, r[i].parameters));
}
function un(e, r) {
  return e.length !== r.length ? !1 : e.every((t, i) => t.path === r[i].path);
}
function _x(e, r) {
  let t = [];
  return (
    Object.entries(e.children).forEach(([i, n]) => {
      i === Oe && (t = t.concat(r(n, i)));
    }),
    Object.entries(e.children).forEach(([i, n]) => {
      i !== Oe && (t = t.concat(r(n, i)));
    }),
    t
  );
}
var id = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({
          token: e,
          factory: () => new Za(),
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  Za = class {
    parse(r) {
      let t = new Rl(r);
      return new bi(
        t.parseRootSegment(),
        t.parseQueryParams(),
        t.parseFragment()
      );
    }
    serialize(r) {
      let t = `/${Ga(r.root, !0)}`,
        i = kx(r.queryParams),
        n = typeof r.fragment == "string" ? `#${yx(r.fragment)}` : "";
      return `${t}${i}${n}`;
    }
  },
  bx = new Za();
function Ms(e) {
  return e.segments.map((r) => Fh(r)).join("/");
}
function Ga(e, r) {
  if (!e.hasChildren()) return Ms(e);
  if (r) {
    let t = e.children[Oe] ? Ga(e.children[Oe], !1) : "",
      i = [];
    return (
      Object.entries(e.children).forEach(([n, a]) => {
        n !== Oe && i.push(`${n}:${Ga(a, !1)}`);
      }),
      i.length > 0 ? `${t}(${i.join("//")})` : t
    );
  } else {
    let t = _x(e, (i, n) =>
      n === Oe ? [Ga(e.children[Oe], !1)] : [`${n}:${Ga(i, !1)}`]
    );
    return Object.keys(e.children).length === 1 && e.children[Oe] != null
      ? `${Ms(e)}/${t[0]}`
      : `${Ms(e)}/(${t.join("//")})`;
  }
}
function Ih(e) {
  return encodeURIComponent(e)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}
function Is(e) {
  return Ih(e).replace(/%3B/gi, ";");
}
function yx(e) {
  return encodeURI(e);
}
function Ml(e) {
  return Ih(e)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%26/gi, "&");
}
function Rs(e) {
  return decodeURIComponent(e);
}
function vh(e) {
  return Rs(e.replace(/\+/g, "%20"));
}
function Fh(e) {
  return `${Ml(e.path)}${wx(e.parameters)}`;
}
function wx(e) {
  return Object.entries(e)
    .map(([r, t]) => `;${Ml(r)}=${Ml(t)}`)
    .join("");
}
function kx(e) {
  let r = Object.entries(e)
    .map(([t, i]) =>
      Array.isArray(i)
        ? i.map((n) => `${Is(t)}=${Is(n)}`).join("&")
        : `${Is(t)}=${Is(i)}`
    )
    .filter((t) => t);
  return r.length ? `?${r.join("&")}` : "";
}
var Ex = /^[^\/()?;#]+/;
function Tl(e) {
  let r = e.match(Ex);
  return r ? r[0] : "";
}
var Cx = /^[^\/()?;=#]+/;
function Tx(e) {
  let r = e.match(Cx);
  return r ? r[0] : "";
}
var Sx = /^[^=?&#]+/;
function Ax(e) {
  let r = e.match(Sx);
  return r ? r[0] : "";
}
var Ix = /^[^&#]+/;
function Fx(e) {
  let r = e.match(Ix);
  return r ? r[0] : "";
}
var Rl = class {
  constructor(r) {
    (this.url = r), (this.remaining = r);
  }
  parseRootSegment() {
    return (
      this.consumeOptional("/"),
      this.remaining === "" ||
      this.peekStartsWith("?") ||
      this.peekStartsWith("#")
        ? new Ze([], {})
        : new Ze([], this.parseChildren())
    );
  }
  parseQueryParams() {
    let r = {};
    if (this.consumeOptional("?"))
      do this.parseQueryParam(r);
      while (this.consumeOptional("&"));
    return r;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let r = [];
    for (
      this.peekStartsWith("(") || r.push(this.parseSegment());
      this.peekStartsWith("/") &&
      !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");

    )
      this.capture("/"), r.push(this.parseSegment());
    let t = {};
    this.peekStartsWith("/(") &&
      (this.capture("/"), (t = this.parseParens(!0)));
    let i = {};
    return (
      this.peekStartsWith("(") && (i = this.parseParens(!1)),
      (r.length > 0 || Object.keys(t).length > 0) && (i[Oe] = new Ze(r, t)),
      i
    );
  }
  parseSegment() {
    let r = Tl(this.remaining);
    if (r === "" && this.peekStartsWith(";")) throw new et(4009, !1);
    return this.capture(r), new dn(Rs(r), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let r = {};
    for (; this.consumeOptional(";"); ) this.parseParam(r);
    return r;
  }
  parseParam(r) {
    let t = Tx(this.remaining);
    if (!t) return;
    this.capture(t);
    let i = "";
    if (this.consumeOptional("=")) {
      let n = Tl(this.remaining);
      n && ((i = n), this.capture(i));
    }
    r[Rs(t)] = Rs(i);
  }
  parseQueryParam(r) {
    let t = Ax(this.remaining);
    if (!t) return;
    this.capture(t);
    let i = "";
    if (this.consumeOptional("=")) {
      let o = Fx(this.remaining);
      o && ((i = o), this.capture(i));
    }
    let n = vh(t),
      a = vh(i);
    if (r.hasOwnProperty(n)) {
      let o = r[n];
      Array.isArray(o) || ((o = [o]), (r[n] = o)), o.push(a);
    } else r[n] = a;
  }
  parseParens(r) {
    let t = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;

    ) {
      let i = Tl(this.remaining),
        n = this.remaining[i.length];
      if (n !== "/" && n !== ")" && n !== ";") throw new et(4010, !1);
      let a;
      i.indexOf(":") > -1
        ? ((a = i.slice(0, i.indexOf(":"))), this.capture(a), this.capture(":"))
        : r && (a = Oe);
      let o = this.parseChildren();
      (t[a] = Object.keys(o).length === 1 ? o[Oe] : new Ze([], o)),
        this.consumeOptional("//");
    }
    return t;
  }
  peekStartsWith(r) {
    return this.remaining.startsWith(r);
  }
  consumeOptional(r) {
    return this.peekStartsWith(r)
      ? ((this.remaining = this.remaining.substring(r.length)), !0)
      : !1;
  }
  capture(r) {
    if (!this.consumeOptional(r)) throw new et(4011, !1);
  }
};
function Dh(e) {
  return e.segments.length > 0 ? new Ze([], { [Oe]: e }) : e;
}
function Mh(e) {
  let r = {};
  for (let [i, n] of Object.entries(e.children)) {
    let a = Mh(n);
    if (i === Oe && a.segments.length === 0 && a.hasChildren())
      for (let [o, s] of Object.entries(a.children)) r[o] = s;
    else (a.segments.length > 0 || a.hasChildren()) && (r[i] = a);
  }
  let t = new Ze(e.segments, r);
  return Dx(t);
}
function Dx(e) {
  if (e.numberOfChildren === 1 && e.children[Oe]) {
    let r = e.children[Oe];
    return new Ze(e.segments.concat(r.segments), r.children);
  }
  return e;
}
function Qa(e) {
  return e instanceof bi;
}
function Mx(e, r, t = null, i = null) {
  let n = Rh(e);
  return Oh(n, r, t, i);
}
function Rh(e) {
  let r;
  function t(a) {
    let o = {};
    for (let c of a.children) {
      let l = t(c);
      o[c.outlet] = l;
    }
    let s = new Ze(a.url, o);
    return a === e && (r = s), s;
  }
  let i = t(e.root),
    n = Dh(i);
  return r ?? n;
}
function Oh(e, r, t, i) {
  let n = e;
  for (; n.parent; ) n = n.parent;
  if (r.length === 0) return Sl(n, n, n, t, i);
  let a = Rx(r);
  if (a.toRoot()) return Sl(n, n, new Ze([], {}), t, i);
  let o = Ox(a, n, e),
    s = o.processChildren
      ? qa(o.segmentGroup, o.index, a.commands)
      : Ph(o.segmentGroup, o.index, a.commands);
  return Sl(n, o.segmentGroup, s, t, i);
}
function Os(e) {
  return typeof e == "object" && e != null && !e.outlets && !e.segmentPath;
}
function Ja(e) {
  return typeof e == "object" && e != null && e.outlets;
}
function Sl(e, r, t, i, n) {
  let a = {};
  i &&
    Object.entries(i).forEach(([c, l]) => {
      a[c] = Array.isArray(l) ? l.map((d) => `${d}`) : `${l}`;
    });
  let o;
  e === r ? (o = t) : (o = Nh(e, r, t));
  let s = Dh(Mh(o));
  return new bi(s, a, n);
}
function Nh(e, r, t) {
  let i = {};
  return (
    Object.entries(e.children).forEach(([n, a]) => {
      a === r ? (i[n] = t) : (i[n] = Nh(a, r, t));
    }),
    new Ze(e.segments, i)
  );
}
var Ns = class {
  constructor(r, t, i) {
    if (
      ((this.isAbsolute = r),
      (this.numberOfDoubleDots = t),
      (this.commands = i),
      r && i.length > 0 && Os(i[0]))
    )
      throw new et(4003, !1);
    let n = i.find(Ja);
    if (n && n !== Eh(i)) throw new et(4004, !1);
  }
  toRoot() {
    return (
      this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"
    );
  }
};
function Rx(e) {
  if (typeof e[0] == "string" && e.length === 1 && e[0] === "/")
    return new Ns(!0, 0, e);
  let r = 0,
    t = !1,
    i = e.reduce((n, a, o) => {
      if (typeof a == "object" && a != null) {
        if (a.outlets) {
          let s = {};
          return (
            Object.entries(a.outlets).forEach(([c, l]) => {
              s[c] = typeof l == "string" ? l.split("/") : l;
            }),
            [...n, { outlets: s }]
          );
        }
        if (a.segmentPath) return [...n, a.segmentPath];
      }
      return typeof a != "string"
        ? [...n, a]
        : o === 0
        ? (a.split("/").forEach((s, c) => {
            (c == 0 && s === ".") ||
              (c == 0 && s === ""
                ? (t = !0)
                : s === ".."
                ? r++
                : s != "" && n.push(s));
          }),
          n)
        : [...n, a];
    }, []);
  return new Ns(t, r, i);
}
var Hn = class {
  constructor(r, t, i) {
    (this.segmentGroup = r), (this.processChildren = t), (this.index = i);
  }
};
function Ox(e, r, t) {
  if (e.isAbsolute) return new Hn(r, !0, 0);
  if (!t) return new Hn(r, !1, NaN);
  if (t.parent === null) return new Hn(t, !0, 0);
  let i = Os(e.commands[0]) ? 0 : 1,
    n = t.segments.length - 1 + i;
  return Nx(t, n, e.numberOfDoubleDots);
}
function Nx(e, r, t) {
  let i = e,
    n = r,
    a = t;
  for (; a > n; ) {
    if (((a -= n), (i = i.parent), !i)) throw new et(4005, !1);
    n = i.segments.length;
  }
  return new Hn(i, !1, n - a);
}
function Px(e) {
  return Ja(e[0]) ? e[0].outlets : { [Oe]: e };
}
function Ph(e, r, t) {
  if (((e ??= new Ze([], {})), e.segments.length === 0 && e.hasChildren()))
    return qa(e, r, t);
  let i = Lx(e, r, t),
    n = t.slice(i.commandIndex);
  if (i.match && i.pathIndex < e.segments.length) {
    let a = new Ze(e.segments.slice(0, i.pathIndex), {});
    return (
      (a.children[Oe] = new Ze(e.segments.slice(i.pathIndex), e.children)),
      qa(a, 0, n)
    );
  } else
    return i.match && n.length === 0
      ? new Ze(e.segments, {})
      : i.match && !e.hasChildren()
      ? Ol(e, r, t)
      : i.match
      ? qa(e, 0, n)
      : Ol(e, r, t);
}
function qa(e, r, t) {
  if (t.length === 0) return new Ze(e.segments, {});
  {
    let i = Px(t),
      n = {};
    if (
      Object.keys(i).some((a) => a !== Oe) &&
      e.children[Oe] &&
      e.numberOfChildren === 1 &&
      e.children[Oe].segments.length === 0
    ) {
      let a = qa(e.children[Oe], r, t);
      return new Ze(e.segments, a.children);
    }
    return (
      Object.entries(i).forEach(([a, o]) => {
        typeof o == "string" && (o = [o]),
          o !== null && (n[a] = Ph(e.children[a], r, o));
      }),
      Object.entries(e.children).forEach(([a, o]) => {
        i[a] === void 0 && (n[a] = o);
      }),
      new Ze(e.segments, n)
    );
  }
}
function Lx(e, r, t) {
  let i = 0,
    n = r,
    a = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; n < e.segments.length; ) {
    if (i >= t.length) return a;
    let o = e.segments[n],
      s = t[i];
    if (Ja(s)) break;
    let c = `${s}`,
      l = i < t.length - 1 ? t[i + 1] : null;
    if (n > 0 && c === void 0) break;
    if (c && l && typeof l == "object" && l.outlets === void 0) {
      if (!_h(c, l, o)) return a;
      i += 2;
    } else {
      if (!_h(c, {}, o)) return a;
      i++;
    }
    n++;
  }
  return { match: !0, pathIndex: n, commandIndex: i };
}
function Ol(e, r, t) {
  let i = e.segments.slice(0, r),
    n = 0;
  for (; n < t.length; ) {
    let a = t[n];
    if (Ja(a)) {
      let c = Bx(a.outlets);
      return new Ze(i, c);
    }
    if (n === 0 && Os(t[0])) {
      let c = e.segments[r];
      i.push(new dn(c.path, xh(t[0]))), n++;
      continue;
    }
    let o = Ja(a) ? a.outlets[Oe] : `${a}`,
      s = n < t.length - 1 ? t[n + 1] : null;
    o && s && Os(s)
      ? (i.push(new dn(o, xh(s))), (n += 2))
      : (i.push(new dn(o, {})), n++);
  }
  return new Ze(i, {});
}
function Bx(e) {
  let r = {};
  return (
    Object.entries(e).forEach(([t, i]) => {
      typeof i == "string" && (i = [i]),
        i !== null && (r[t] = Ol(new Ze([], {}), 0, i));
    }),
    r
  );
}
function xh(e) {
  let r = {};
  return Object.entries(e).forEach(([t, i]) => (r[t] = `${i}`)), r;
}
function _h(e, r, t) {
  return e == t.path && ni(r, t.parameters);
}
var Ka = "imperative",
  Bt = (function (e) {
    return (
      (e[(e.NavigationStart = 0)] = "NavigationStart"),
      (e[(e.NavigationEnd = 1)] = "NavigationEnd"),
      (e[(e.NavigationCancel = 2)] = "NavigationCancel"),
      (e[(e.NavigationError = 3)] = "NavigationError"),
      (e[(e.RoutesRecognized = 4)] = "RoutesRecognized"),
      (e[(e.ResolveStart = 5)] = "ResolveStart"),
      (e[(e.ResolveEnd = 6)] = "ResolveEnd"),
      (e[(e.GuardsCheckStart = 7)] = "GuardsCheckStart"),
      (e[(e.GuardsCheckEnd = 8)] = "GuardsCheckEnd"),
      (e[(e.RouteConfigLoadStart = 9)] = "RouteConfigLoadStart"),
      (e[(e.RouteConfigLoadEnd = 10)] = "RouteConfigLoadEnd"),
      (e[(e.ChildActivationStart = 11)] = "ChildActivationStart"),
      (e[(e.ChildActivationEnd = 12)] = "ChildActivationEnd"),
      (e[(e.ActivationStart = 13)] = "ActivationStart"),
      (e[(e.ActivationEnd = 14)] = "ActivationEnd"),
      (e[(e.Scroll = 15)] = "Scroll"),
      (e[(e.NavigationSkipped = 16)] = "NavigationSkipped"),
      e
    );
  })(Bt || {}),
  Fr = class {
    constructor(r, t) {
      (this.id = r), (this.url = t);
    }
  },
  eo = class extends Fr {
    constructor(r, t, i = "imperative", n = null) {
      super(r, t),
        (this.type = Bt.NavigationStart),
        (this.navigationTrigger = i),
        (this.restoredState = n);
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  fn = class extends Fr {
    constructor(r, t, i) {
      super(r, t), (this.urlAfterRedirects = i), (this.type = Bt.NavigationEnd);
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  br = (function (e) {
    return (
      (e[(e.Redirect = 0)] = "Redirect"),
      (e[(e.SupersededByNewNavigation = 1)] = "SupersededByNewNavigation"),
      (e[(e.NoDataFromResolver = 2)] = "NoDataFromResolver"),
      (e[(e.GuardRejected = 3)] = "GuardRejected"),
      e
    );
  })(br || {}),
  Nl = (function (e) {
    return (
      (e[(e.IgnoredSameUrlNavigation = 0)] = "IgnoredSameUrlNavigation"),
      (e[(e.IgnoredByUrlHandlingStrategy = 1)] =
        "IgnoredByUrlHandlingStrategy"),
      e
    );
  })(Nl || {}),
  _i = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.reason = i),
        (this.code = n),
        (this.type = Bt.NavigationCancel);
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  hn = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.reason = i),
        (this.code = n),
        (this.type = Bt.NavigationSkipped);
    }
  },
  to = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.error = i),
        (this.target = n),
        (this.type = Bt.NavigationError);
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Ps = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = Bt.RoutesRecognized);
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Pl = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = Bt.GuardsCheckStart);
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Ll = class extends Fr {
    constructor(r, t, i, n, a) {
      super(r, t),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.shouldActivate = a),
        (this.type = Bt.GuardsCheckEnd);
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  Bl = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = Bt.ResolveStart);
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  jl = class extends Fr {
    constructor(r, t, i, n) {
      super(r, t),
        (this.urlAfterRedirects = i),
        (this.state = n),
        (this.type = Bt.ResolveEnd);
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Vl = class {
    constructor(r) {
      (this.route = r), (this.type = Bt.RouteConfigLoadStart);
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Ul = class {
    constructor(r) {
      (this.route = r), (this.type = Bt.RouteConfigLoadEnd);
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  zl = class {
    constructor(r) {
      (this.snapshot = r), (this.type = Bt.ChildActivationStart);
    }
    toString() {
      return `ChildActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Hl = class {
    constructor(r) {
      (this.snapshot = r), (this.type = Bt.ChildActivationEnd);
    }
    toString() {
      return `ChildActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Wl = class {
    constructor(r) {
      (this.snapshot = r), (this.type = Bt.ActivationStart);
    }
    toString() {
      return `ActivationStart(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  },
  Gl = class {
    constructor(r) {
      (this.snapshot = r), (this.type = Bt.ActivationEnd);
    }
    toString() {
      return `ActivationEnd(path: '${
        (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
      }')`;
    }
  };
var ro = class {},
  Xn = class {
    constructor(r, t) {
      (this.url = r), (this.navigationBehaviorOptions = t);
    }
  };
function jx(e, r) {
  return (
    e.providers &&
      !e._injector &&
      (e._injector = mf(e.providers, r, `Route: ${e.path}`)),
    e._injector ?? r
  );
}
function Wr(e) {
  return e.outlet || Oe;
}
function Vx(e, r) {
  let t = e.filter((i) => Wr(i) === r);
  return t.push(...e.filter((i) => Wr(i) !== r)), t;
}
function co(e) {
  if (!e) return null;
  if (e.routeConfig?._injector) return e.routeConfig._injector;
  for (let r = e.parent; r; r = r.parent) {
    let t = r.routeConfig;
    if (t?._loadedInjector) return t._loadedInjector;
    if (t?._injector) return t._injector;
  }
  return null;
}
var $l = class {
    get injector() {
      return co(this.route?.snapshot) ?? this.rootInjector;
    }
    set injector(r) {}
    constructor(r) {
      (this.rootInjector = r),
        (this.outlet = null),
        (this.route = null),
        (this.children = new Hs(this.rootInjector)),
        (this.attachRef = null);
    }
  },
  Hs = (() => {
    class e {
      constructor(t) {
        (this.rootInjector = t), (this.contexts = new Map());
      }
      onChildOutletCreated(t, i) {
        let n = this.getOrCreateContext(t);
        (n.outlet = i), this.contexts.set(t, n);
      }
      onChildOutletDestroyed(t) {
        let i = this.getContext(t);
        i && ((i.outlet = null), (i.attachRef = null));
      }
      onOutletDeactivated() {
        let t = this.contexts;
        return (this.contexts = new Map()), t;
      }
      onOutletReAttached(t) {
        this.contexts = t;
      }
      getOrCreateContext(t) {
        let i = this.getContext(t);
        return (
          i || ((i = new $l(this.rootInjector)), this.contexts.set(t, i)), i
        );
      }
      getContext(t) {
        return this.contexts.get(t) || null;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Rn));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Ls = class {
    constructor(r) {
      this._root = r;
    }
    get root() {
      return this._root.value;
    }
    parent(r) {
      let t = this.pathFromRoot(r);
      return t.length > 1 ? t[t.length - 2] : null;
    }
    children(r) {
      let t = Xl(r, this._root);
      return t ? t.children.map((i) => i.value) : [];
    }
    firstChild(r) {
      let t = Xl(r, this._root);
      return t && t.children.length > 0 ? t.children[0].value : null;
    }
    siblings(r) {
      let t = ql(r, this._root);
      return t.length < 2
        ? []
        : t[t.length - 2].children.map((n) => n.value).filter((n) => n !== r);
    }
    pathFromRoot(r) {
      return ql(r, this._root).map((t) => t.value);
    }
  };
function Xl(e, r) {
  if (e === r.value) return r;
  for (let t of r.children) {
    let i = Xl(e, t);
    if (i) return i;
  }
  return null;
}
function ql(e, r) {
  if (e === r.value) return [r];
  for (let t of r.children) {
    let i = ql(e, t);
    if (i.length) return i.unshift(r), i;
  }
  return [];
}
var _r = class {
  constructor(r, t) {
    (this.value = r), (this.children = t);
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function zn(e) {
  let r = {};
  return e && e.children.forEach((t) => (r[t.value.outlet] = t)), r;
}
var Bs = class extends Ls {
  constructor(r, t) {
    super(r), (this.snapshot = t), nd(this, r);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function Lh(e) {
  let r = Ux(e),
    t = new Ht([new dn("", {})]),
    i = new Ht({}),
    n = new Ht({}),
    a = new Ht({}),
    o = new Ht(""),
    s = new qn(t, i, a, o, n, Oe, e, r.root);
  return (s.snapshot = r.root), new Bs(new _r(s, []), r);
}
function Ux(e) {
  let r = {},
    t = {},
    i = {},
    n = "",
    a = new Wn([], r, i, n, t, Oe, e, null, {});
  return new Vs("", new _r(a, []));
}
var qn = class {
  constructor(r, t, i, n, a, o, s, c) {
    (this.urlSubject = r),
      (this.paramsSubject = t),
      (this.queryParamsSubject = i),
      (this.fragmentSubject = n),
      (this.dataSubject = a),
      (this.outlet = o),
      (this.component = s),
      (this._futureSnapshot = c),
      (this.title = this.dataSubject?.pipe(Se((l) => l[so])) ?? ke(void 0)),
      (this.url = r),
      (this.params = t),
      (this.queryParams = i),
      (this.fragment = n),
      (this.data = a);
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
      (this._paramMap ??= this.params.pipe(Se((r) => $n(r)))), this._paramMap
    );
  }
  get queryParamMap() {
    return (
      (this._queryParamMap ??= this.queryParams.pipe(Se((r) => $n(r)))),
      this._queryParamMap
    );
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function js(e, r, t = "emptyOnly") {
  let i,
    { routeConfig: n } = e;
  return (
    r !== null &&
    (t === "always" ||
      n?.path === "" ||
      (!r.component && !r.routeConfig?.loadComponent))
      ? (i = {
          params: te(te({}, r.params), e.params),
          data: te(te({}, r.data), e.data),
          resolve: te(te(te(te({}, e.data), r.data), n?.data), e._resolvedData),
        })
      : (i = {
          params: te({}, e.params),
          data: te({}, e.data),
          resolve: te(te({}, e.data), e._resolvedData ?? {}),
        }),
    n && jh(n) && (i.resolve[so] = n.title),
    i
  );
}
var Wn = class {
    get title() {
      return this.data?.[so];
    }
    constructor(r, t, i, n, a, o, s, c, l) {
      (this.url = r),
        (this.params = t),
        (this.queryParams = i),
        (this.fragment = n),
        (this.data = a),
        (this.outlet = o),
        (this.component = s),
        (this.routeConfig = c),
        (this._resolve = l);
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
      return (this._paramMap ??= $n(this.params)), this._paramMap;
    }
    get queryParamMap() {
      return (
        (this._queryParamMap ??= $n(this.queryParams)), this._queryParamMap
      );
    }
    toString() {
      let r = this.url.map((i) => i.toString()).join("/"),
        t = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${r}', path:'${t}')`;
    }
  },
  Vs = class extends Ls {
    constructor(r, t) {
      super(t), (this.url = r), nd(this, t);
    }
    toString() {
      return Bh(this._root);
    }
  };
function nd(e, r) {
  (r.value._routerState = e), r.children.forEach((t) => nd(e, t));
}
function Bh(e) {
  let r = e.children.length > 0 ? ` { ${e.children.map(Bh).join(", ")} } ` : "";
  return `${e.value}${r}`;
}
function Al(e) {
  if (e.snapshot) {
    let r = e.snapshot,
      t = e._futureSnapshot;
    (e.snapshot = t),
      ni(r.queryParams, t.queryParams) ||
        e.queryParamsSubject.next(t.queryParams),
      r.fragment !== t.fragment && e.fragmentSubject.next(t.fragment),
      ni(r.params, t.params) || e.paramsSubject.next(t.params),
      mx(r.url, t.url) || e.urlSubject.next(t.url),
      ni(r.data, t.data) || e.dataSubject.next(t.data);
  } else
    (e.snapshot = e._futureSnapshot),
      e.dataSubject.next(e._futureSnapshot.data);
}
function Kl(e, r) {
  let t = ni(e.params, r.params) && xx(e.url, r.url),
    i = !e.parent != !r.parent;
  return t && !i && (!e.parent || Kl(e.parent, r.parent));
}
function jh(e) {
  return typeof e.title == "string" || e.title === null;
}
var zx = (() => {
    class e {
      constructor() {
        (this.activated = null),
          (this._activatedRoute = null),
          (this.name = Oe),
          (this.activateEvents = new ft()),
          (this.deactivateEvents = new ft()),
          (this.attachEvents = new ft()),
          (this.detachEvents = new ft()),
          (this.parentContexts = he(Hs)),
          (this.location = he(ff)),
          (this.changeDetector = he(Xt)),
          (this.inputBinder = he(ad, { optional: !0 })),
          (this.supportsBindingToComponentInputs = !0);
      }
      get activatedComponentRef() {
        return this.activated;
      }
      ngOnChanges(t) {
        if (t.name) {
          let { firstChange: i, previousValue: n } = t.name;
          if (i) return;
          this.isTrackedInParentContexts(n) &&
            (this.deactivate(), this.parentContexts.onChildOutletDestroyed(n)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
          this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(t) {
        return this.parentContexts.getContext(t)?.outlet === this;
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
        let t = this.parentContexts.getContext(this.name);
        t?.route &&
          (t.attachRef
            ? this.attach(t.attachRef, t.route)
            : this.activateWith(t.route, t.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new et(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new et(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new et(4012, !1);
        this.location.detach();
        let t = this.activated;
        return (
          (this.activated = null),
          (this._activatedRoute = null),
          this.detachEvents.emit(t.instance),
          t
        );
      }
      attach(t, i) {
        (this.activated = t),
          (this._activatedRoute = i),
          this.location.insert(t.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(t.instance);
      }
      deactivate() {
        if (this.activated) {
          let t = this.component;
          this.activated.destroy(),
            (this.activated = null),
            (this._activatedRoute = null),
            this.deactivateEvents.emit(t);
        }
      }
      activateWith(t, i) {
        if (this.isActivated) throw new et(4013, !1);
        this._activatedRoute = t;
        let n = this.location,
          o = t.snapshot.component,
          s = this.parentContexts.getOrCreateContext(this.name).children,
          c = new Yl(t, s, n.injector);
        (this.activated = n.createComponent(o, {
          index: n.length,
          injector: c,
          environmentInjector: i,
        })),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵdir = st({
          type: e,
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
          features: [ei],
        });
      }
    }
    return e;
  })(),
  Yl = class e {
    __ngOutletInjector(r) {
      return new e(this.route, this.childContexts, r);
    }
    constructor(r, t, i) {
      (this.route = r), (this.childContexts = t), (this.parent = i);
    }
    get(r, t) {
      return r === qn
        ? this.route
        : r === Hs
        ? this.childContexts
        : this.parent.get(r, t);
    }
  },
  ad = new Ee("");
function Hx(e, r, t) {
  let i = io(e, r._root, t ? t._root : void 0);
  return new Bs(i, r);
}
function io(e, r, t) {
  if (t && e.shouldReuseRoute(r.value, t.value.snapshot)) {
    let i = t.value;
    i._futureSnapshot = r.value;
    let n = Wx(e, r, t);
    return new _r(i, n);
  } else {
    if (e.shouldAttach(r.value)) {
      let a = e.retrieve(r.value);
      if (a !== null) {
        let o = a.route;
        return (
          (o.value._futureSnapshot = r.value),
          (o.children = r.children.map((s) => io(e, s))),
          o
        );
      }
    }
    let i = Gx(r.value),
      n = r.children.map((a) => io(e, a));
    return new _r(i, n);
  }
}
function Wx(e, r, t) {
  return r.children.map((i) => {
    for (let n of t.children)
      if (e.shouldReuseRoute(i.value, n.value.snapshot)) return io(e, i, n);
    return io(e, i);
  });
}
function Gx(e) {
  return new qn(
    new Ht(e.url),
    new Ht(e.params),
    new Ht(e.queryParams),
    new Ht(e.fragment),
    new Ht(e.data),
    e.outlet,
    e.component,
    e
  );
}
var no = class {
    constructor(r, t) {
      (this.redirectTo = r), (this.navigationBehaviorOptions = t);
    }
  },
  Vh = "ngNavigationCancelingError";
function Us(e, r) {
  let { redirectTo: t, navigationBehaviorOptions: i } = Qa(r)
      ? { redirectTo: r, navigationBehaviorOptions: void 0 }
      : r,
    n = Uh(!1, br.Redirect);
  return (n.url = t), (n.navigationBehaviorOptions = i), n;
}
function Uh(e, r) {
  let t = new Error(`NavigationCancelingError: ${e || ""}`);
  return (t[Vh] = !0), (t.cancellationCode = r), t;
}
function $x(e) {
  return zh(e) && Qa(e.url);
}
function zh(e) {
  return !!e && e[Vh];
}
var Xx = (e, r, t, i) =>
    Se(
      (n) => (
        new Zl(r, n.targetRouterState, n.currentRouterState, t, i).activate(e),
        n
      )
    ),
  Zl = class {
    constructor(r, t, i, n, a) {
      (this.routeReuseStrategy = r),
        (this.futureState = t),
        (this.currState = i),
        (this.forwardEvent = n),
        (this.inputBindingEnabled = a);
    }
    activate(r) {
      let t = this.futureState._root,
        i = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(t, i, r),
        Al(this.futureState.root),
        this.activateChildRoutes(t, i, r);
    }
    deactivateChildRoutes(r, t, i) {
      let n = zn(t);
      r.children.forEach((a) => {
        let o = a.value.outlet;
        this.deactivateRoutes(a, n[o], i), delete n[o];
      }),
        Object.values(n).forEach((a) => {
          this.deactivateRouteAndItsChildren(a, i);
        });
    }
    deactivateRoutes(r, t, i) {
      let n = r.value,
        a = t ? t.value : null;
      if (n === a)
        if (n.component) {
          let o = i.getContext(n.outlet);
          o && this.deactivateChildRoutes(r, t, o.children);
        } else this.deactivateChildRoutes(r, t, i);
      else a && this.deactivateRouteAndItsChildren(t, i);
    }
    deactivateRouteAndItsChildren(r, t) {
      r.value.component &&
      this.routeReuseStrategy.shouldDetach(r.value.snapshot)
        ? this.detachAndStoreRouteSubtree(r, t)
        : this.deactivateRouteAndOutlet(r, t);
    }
    detachAndStoreRouteSubtree(r, t) {
      let i = t.getContext(r.value.outlet),
        n = i && r.value.component ? i.children : t,
        a = zn(r);
      for (let o of Object.values(a)) this.deactivateRouteAndItsChildren(o, n);
      if (i && i.outlet) {
        let o = i.outlet.detach(),
          s = i.children.onOutletDeactivated();
        this.routeReuseStrategy.store(r.value.snapshot, {
          componentRef: o,
          route: r,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(r, t) {
      let i = t.getContext(r.value.outlet),
        n = i && r.value.component ? i.children : t,
        a = zn(r);
      for (let o of Object.values(a)) this.deactivateRouteAndItsChildren(o, n);
      i &&
        (i.outlet && (i.outlet.deactivate(), i.children.onOutletDeactivated()),
        (i.attachRef = null),
        (i.route = null));
    }
    activateChildRoutes(r, t, i) {
      let n = zn(t);
      r.children.forEach((a) => {
        this.activateRoutes(a, n[a.value.outlet], i),
          this.forwardEvent(new Gl(a.value.snapshot));
      }),
        r.children.length && this.forwardEvent(new Hl(r.value.snapshot));
    }
    activateRoutes(r, t, i) {
      let n = r.value,
        a = t ? t.value : null;
      if ((Al(n), n === a))
        if (n.component) {
          let o = i.getOrCreateContext(n.outlet);
          this.activateChildRoutes(r, t, o.children);
        } else this.activateChildRoutes(r, t, i);
      else if (n.component) {
        let o = i.getOrCreateContext(n.outlet);
        if (this.routeReuseStrategy.shouldAttach(n.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(n.snapshot);
          this.routeReuseStrategy.store(n.snapshot, null),
            o.children.onOutletReAttached(s.contexts),
            (o.attachRef = s.componentRef),
            (o.route = s.route.value),
            o.outlet && o.outlet.attach(s.componentRef, s.route.value),
            Al(s.route.value),
            this.activateChildRoutes(r, null, o.children);
        } else
          (o.attachRef = null),
            (o.route = n),
            o.outlet && o.outlet.activateWith(n, o.injector),
            this.activateChildRoutes(r, null, o.children);
      } else this.activateChildRoutes(r, null, i);
    }
  },
  zs = class {
    constructor(r) {
      (this.path = r), (this.route = this.path[this.path.length - 1]);
    }
  },
  Gn = class {
    constructor(r, t) {
      (this.component = r), (this.route = t);
    }
  };
function qx(e, r, t) {
  let i = e._root,
    n = r ? r._root : null;
  return $a(i, n, t, [i.value]);
}
function Kx(e) {
  let r = e.routeConfig ? e.routeConfig.canActivateChild : null;
  return !r || r.length === 0 ? null : { node: e, guards: r };
}
function Yn(e, r) {
  let t = Symbol(),
    i = r.get(e, t);
  return i === t ? (typeof e == "function" && !Zu(e) ? e : r.get(e)) : i;
}
function $a(
  e,
  r,
  t,
  i,
  n = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let a = zn(r);
  return (
    e.children.forEach((o) => {
      Yx(o, a[o.value.outlet], t, i.concat([o.value]), n),
        delete a[o.value.outlet];
    }),
    Object.entries(a).forEach(([o, s]) => Ya(s, t.getContext(o), n)),
    n
  );
}
function Yx(
  e,
  r,
  t,
  i,
  n = { canDeactivateChecks: [], canActivateChecks: [] }
) {
  let a = e.value,
    o = r ? r.value : null,
    s = t ? t.getContext(e.value.outlet) : null;
  if (o && a.routeConfig === o.routeConfig) {
    let c = Zx(o, a, a.routeConfig.runGuardsAndResolvers);
    c
      ? n.canActivateChecks.push(new zs(i))
      : ((a.data = o.data), (a._resolvedData = o._resolvedData)),
      a.component ? $a(e, r, s ? s.children : null, i, n) : $a(e, r, t, i, n),
      c &&
        s &&
        s.outlet &&
        s.outlet.isActivated &&
        n.canDeactivateChecks.push(new Gn(s.outlet.component, o));
  } else
    o && Ya(r, s, n),
      n.canActivateChecks.push(new zs(i)),
      a.component
        ? $a(e, null, s ? s.children : null, i, n)
        : $a(e, null, t, i, n);
  return n;
}
function Zx(e, r, t) {
  if (typeof t == "function") return t(e, r);
  switch (t) {
    case "pathParamsChange":
      return !un(e.url, r.url);
    case "pathParamsOrQueryParamsChange":
      return !un(e.url, r.url) || !ni(e.queryParams, r.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Kl(e, r) || !ni(e.queryParams, r.queryParams);
    case "paramsChange":
    default:
      return !Kl(e, r);
  }
}
function Ya(e, r, t) {
  let i = zn(e),
    n = e.value;
  Object.entries(i).forEach(([a, o]) => {
    n.component
      ? r
        ? Ya(o, r.children.getContext(a), t)
        : Ya(o, null, t)
      : Ya(o, r, t);
  }),
    n.component
      ? r && r.outlet && r.outlet.isActivated
        ? t.canDeactivateChecks.push(new Gn(r.outlet.component, n))
        : t.canDeactivateChecks.push(new Gn(null, n))
      : t.canDeactivateChecks.push(new Gn(null, n));
}
function lo(e) {
  return typeof e == "function";
}
function Qx(e) {
  return typeof e == "boolean";
}
function Jx(e) {
  return e && lo(e.canLoad);
}
function e_(e) {
  return e && lo(e.canActivate);
}
function t_(e) {
  return e && lo(e.canActivateChild);
}
function r_(e) {
  return e && lo(e.canDeactivate);
}
function i_(e) {
  return e && lo(e.canMatch);
}
function Hh(e) {
  return e instanceof Gu || e?.name === "EmptyError";
}
var Fs = Symbol("INITIAL_VALUE");
function Kn() {
  return ar((e) =>
    Ca(e.map((r) => r.pipe(Wt(1), Jo(Fs)))).pipe(
      Se((r) => {
        for (let t of r)
          if (t !== !0) {
            if (t === Fs) return Fs;
            if (t === !1 || n_(t)) return t;
          }
        return !0;
      }),
      Br((r) => r !== Fs),
      Wt(1)
    )
  );
}
function n_(e) {
  return Qa(e) || e instanceof no;
}
function a_(e, r) {
  return Cr((t) => {
    let {
      targetSnapshot: i,
      currentSnapshot: n,
      guards: { canActivateChecks: a, canDeactivateChecks: o },
    } = t;
    return o.length === 0 && a.length === 0
      ? ke(Xe(te({}, t), { guardsResult: !0 }))
      : o_(o, i, n, e).pipe(
          Cr((s) => (s && Qx(s) ? s_(i, a, e, r) : ke(s))),
          Se((s) => Xe(te({}, t), { guardsResult: s }))
        );
  });
}
function o_(e, r, t, i) {
  return nr(e).pipe(
    Cr((n) => f_(n.component, n.route, t, r, i)),
    Mi((n) => n !== !0, !0)
  );
}
function s_(e, r, t, i) {
  return nr(r).pipe(
    pi((n) =>
      rn(
        l_(n.route.parent, i),
        c_(n.route, i),
        u_(e, n.path, t),
        d_(e, n.route, t)
      )
    ),
    Mi((n) => n !== !0, !0)
  );
}
function c_(e, r) {
  return e !== null && r && r(new Wl(e)), ke(!0);
}
function l_(e, r) {
  return e !== null && r && r(new zl(e)), ke(!0);
}
function d_(e, r, t) {
  let i = r.routeConfig ? r.routeConfig.canActivate : null;
  if (!i || i.length === 0) return ke(!0);
  let n = i.map((a) =>
    Dn(() => {
      let o = co(r) ?? t,
        s = Yn(a, o),
        c = e_(s) ? s.canActivate(r, e) : jr(o, () => s(r, e));
      return Vi(c).pipe(Mi());
    })
  );
  return ke(n).pipe(Kn());
}
function u_(e, r, t) {
  let i = r[r.length - 1],
    a = r
      .slice(0, r.length - 1)
      .reverse()
      .map((o) => Kx(o))
      .filter((o) => o !== null)
      .map((o) =>
        Dn(() => {
          let s = o.guards.map((c) => {
            let l = co(o.node) ?? t,
              d = Yn(c, l),
              u = t_(d) ? d.canActivateChild(i, e) : jr(l, () => d(i, e));
            return Vi(u).pipe(Mi());
          });
          return ke(s).pipe(Kn());
        })
      );
  return ke(a).pipe(Kn());
}
function f_(e, r, t, i, n) {
  let a = r && r.routeConfig ? r.routeConfig.canDeactivate : null;
  if (!a || a.length === 0) return ke(!0);
  let o = a.map((s) => {
    let c = co(r) ?? n,
      l = Yn(s, c),
      d = r_(l) ? l.canDeactivate(e, r, t, i) : jr(c, () => l(e, r, t, i));
    return Vi(d).pipe(Mi());
  });
  return ke(o).pipe(Kn());
}
function h_(e, r, t, i) {
  let n = r.canLoad;
  if (n === void 0 || n.length === 0) return ke(!0);
  let a = n.map((o) => {
    let s = Yn(o, e),
      c = Jx(s) ? s.canLoad(r, t) : jr(e, () => s(r, t));
    return Vi(c);
  });
  return ke(a).pipe(Kn(), Wh(i));
}
function Wh(e) {
  return Wu(
    gt((r) => {
      if (typeof r != "boolean") throw Us(e, r);
    }),
    Se((r) => r === !0)
  );
}
function m_(e, r, t, i) {
  let n = r.canMatch;
  if (!n || n.length === 0) return ke(!0);
  let a = n.map((o) => {
    let s = Yn(o, e),
      c = i_(s) ? s.canMatch(r, t) : jr(e, () => s(r, t));
    return Vi(c);
  });
  return ke(a).pipe(Kn(), Wh(i));
}
var ao = class {
    constructor(r) {
      this.segmentGroup = r || null;
    }
  },
  oo = class extends Error {
    constructor(r) {
      super(), (this.urlTree = r);
    }
  };
function Un(e) {
  return tn(new ao(e));
}
function p_(e) {
  return tn(new et(4e3, !1));
}
function g_(e) {
  return tn(Uh(!1, br.GuardRejected));
}
var Ql = class {
    constructor(r, t) {
      (this.urlSerializer = r), (this.urlTree = t);
    }
    lineralizeSegments(r, t) {
      let i = [],
        n = t.root;
      for (;;) {
        if (((i = i.concat(n.segments)), n.numberOfChildren === 0))
          return ke(i);
        if (n.numberOfChildren > 1 || !n.children[Oe])
          return p_(`${r.redirectTo}`);
        n = n.children[Oe];
      }
    }
    applyRedirectCommands(r, t, i, n, a) {
      if (typeof t != "string") {
        let s = t,
          {
            queryParams: c,
            fragment: l,
            routeConfig: d,
            url: u,
            outlet: h,
            params: m,
            data: p,
            title: f,
          } = n,
          g = jr(a, () =>
            s({
              params: m,
              data: p,
              queryParams: c,
              fragment: l,
              routeConfig: d,
              url: u,
              outlet: h,
              title: f,
            })
          );
        if (g instanceof bi) throw new oo(g);
        t = g;
      }
      let o = this.applyRedirectCreateUrlTree(
        t,
        this.urlSerializer.parse(t),
        r,
        i
      );
      if (t[0] === "/") throw new oo(o);
      return o;
    }
    applyRedirectCreateUrlTree(r, t, i, n) {
      let a = this.createSegmentGroup(r, t.root, i, n);
      return new bi(
        a,
        this.createQueryParams(t.queryParams, this.urlTree.queryParams),
        t.fragment
      );
    }
    createQueryParams(r, t) {
      let i = {};
      return (
        Object.entries(r).forEach(([n, a]) => {
          if (typeof a == "string" && a[0] === ":") {
            let s = a.substring(1);
            i[n] = t[s];
          } else i[n] = a;
        }),
        i
      );
    }
    createSegmentGroup(r, t, i, n) {
      let a = this.createSegments(r, t.segments, i, n),
        o = {};
      return (
        Object.entries(t.children).forEach(([s, c]) => {
          o[s] = this.createSegmentGroup(r, c, i, n);
        }),
        new Ze(a, o)
      );
    }
    createSegments(r, t, i, n) {
      return t.map((a) =>
        a.path[0] === ":" ? this.findPosParam(r, a, n) : this.findOrReturn(a, i)
      );
    }
    findPosParam(r, t, i) {
      let n = i[t.path.substring(1)];
      if (!n) throw new et(4001, !1);
      return n;
    }
    findOrReturn(r, t) {
      let i = 0;
      for (let n of t) {
        if (n.path === r.path) return t.splice(i), n;
        i++;
      }
      return r;
    }
  },
  Jl = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function v_(e, r, t, i, n) {
  let a = Gh(e, r, t);
  return a.matched
    ? ((i = jx(r, i)),
      m_(i, r, t, n).pipe(Se((o) => (o === !0 ? a : te({}, Jl)))))
    : ke(a);
}
function Gh(e, r, t) {
  if (r.path === "**") return x_(t);
  if (r.path === "")
    return r.pathMatch === "full" && (e.hasChildren() || t.length > 0)
      ? te({}, Jl)
      : {
          matched: !0,
          consumedSegments: [],
          remainingSegments: t,
          parameters: {},
          positionalParamSegments: {},
        };
  let n = (r.matcher || hx)(t, e, r);
  if (!n) return te({}, Jl);
  let a = {};
  Object.entries(n.posParams ?? {}).forEach(([s, c]) => {
    a[s] = c.path;
  });
  let o =
    n.consumed.length > 0
      ? te(te({}, a), n.consumed[n.consumed.length - 1].parameters)
      : a;
  return {
    matched: !0,
    consumedSegments: n.consumed,
    remainingSegments: t.slice(n.consumed.length),
    parameters: o,
    positionalParamSegments: n.posParams ?? {},
  };
}
function x_(e) {
  return {
    matched: !0,
    parameters: e.length > 0 ? Eh(e).parameters : {},
    consumedSegments: e,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function bh(e, r, t, i) {
  return t.length > 0 && y_(e, t, i)
    ? {
        segmentGroup: new Ze(r, b_(i, new Ze(t, e.children))),
        slicedSegments: [],
      }
    : t.length === 0 && w_(e, t, i)
    ? {
        segmentGroup: new Ze(e.segments, __(e, t, i, e.children)),
        slicedSegments: t,
      }
    : { segmentGroup: new Ze(e.segments, e.children), slicedSegments: t };
}
function __(e, r, t, i) {
  let n = {};
  for (let a of t)
    if (Ws(e, r, a) && !i[Wr(a)]) {
      let o = new Ze([], {});
      n[Wr(a)] = o;
    }
  return te(te({}, i), n);
}
function b_(e, r) {
  let t = {};
  t[Oe] = r;
  for (let i of e)
    if (i.path === "" && Wr(i) !== Oe) {
      let n = new Ze([], {});
      t[Wr(i)] = n;
    }
  return t;
}
function y_(e, r, t) {
  return t.some((i) => Ws(e, r, i) && Wr(i) !== Oe);
}
function w_(e, r, t) {
  return t.some((i) => Ws(e, r, i));
}
function Ws(e, r, t) {
  return (e.hasChildren() || r.length > 0) && t.pathMatch === "full"
    ? !1
    : t.path === "";
}
function k_(e, r, t) {
  return r.length === 0 && !e.children[t];
}
var ed = class {};
function E_(e, r, t, i, n, a, o = "emptyOnly") {
  return new td(e, r, t, i, n, o, a).recognize();
}
var C_ = 31,
  td = class {
    constructor(r, t, i, n, a, o, s) {
      (this.injector = r),
        (this.configLoader = t),
        (this.rootComponentType = i),
        (this.config = n),
        (this.urlTree = a),
        (this.paramsInheritanceStrategy = o),
        (this.urlSerializer = s),
        (this.applyRedirects = new Ql(this.urlSerializer, this.urlTree)),
        (this.absoluteRedirectCount = 0),
        (this.allowRedirects = !0);
    }
    noMatchError(r) {
      return new et(4002, `'${r.segmentGroup}'`);
    }
    recognize() {
      let r = bh(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(r).pipe(
        Se(({ children: t, rootSnapshot: i }) => {
          let n = new _r(i, t),
            a = new Vs("", n),
            o = Mx(i, [], this.urlTree.queryParams, this.urlTree.fragment);
          return (
            (o.queryParams = this.urlTree.queryParams),
            (a.url = this.urlSerializer.serialize(o)),
            { state: a, tree: o }
          );
        })
      );
    }
    match(r) {
      let t = new Wn(
        [],
        Object.freeze({}),
        Object.freeze(te({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        Oe,
        this.rootComponentType,
        null,
        {}
      );
      return this.processSegmentGroup(
        this.injector,
        this.config,
        r,
        Oe,
        t
      ).pipe(
        Se((i) => ({ children: i, rootSnapshot: t })),
        Di((i) => {
          if (i instanceof oo)
            return (this.urlTree = i.urlTree), this.match(i.urlTree.root);
          throw i instanceof ao ? this.noMatchError(i) : i;
        })
      );
    }
    processSegmentGroup(r, t, i, n, a) {
      return i.segments.length === 0 && i.hasChildren()
        ? this.processChildren(r, t, i, a)
        : this.processSegment(r, t, i, i.segments, n, !0, a).pipe(
            Se((o) => (o instanceof _r ? [o] : []))
          );
    }
    processChildren(r, t, i, n) {
      let a = [];
      for (let o of Object.keys(i.children))
        o === "primary" ? a.unshift(o) : a.push(o);
      return nr(a).pipe(
        pi((o) => {
          let s = i.children[o],
            c = Vx(t, o);
          return this.processSegmentGroup(r, c, s, o, n);
        }),
        Ku((o, s) => (o.push(...s), o)),
        Yc(null),
        qu(),
        Cr((o) => {
          if (o === null) return Un(i);
          let s = $h(o);
          return T_(s), ke(s);
        })
      );
    }
    processSegment(r, t, i, n, a, o, s) {
      return nr(t).pipe(
        pi((c) =>
          this.processSegmentAgainstRoute(
            c._injector ?? r,
            t,
            c,
            i,
            n,
            a,
            o,
            s
          ).pipe(
            Di((l) => {
              if (l instanceof ao) return ke(null);
              throw l;
            })
          )
        ),
        Mi((c) => !!c),
        Di((c) => {
          if (Hh(c)) return k_(i, n, a) ? ke(new ed()) : Un(i);
          throw c;
        })
      );
    }
    processSegmentAgainstRoute(r, t, i, n, a, o, s, c) {
      return Wr(i) !== o && (o === Oe || !Ws(n, a, i))
        ? Un(n)
        : i.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(r, n, i, a, o, c)
        : this.allowRedirects && s
        ? this.expandSegmentAgainstRouteUsingRedirect(r, n, t, i, a, o, c)
        : Un(n);
    }
    expandSegmentAgainstRouteUsingRedirect(r, t, i, n, a, o, s) {
      let {
        matched: c,
        parameters: l,
        consumedSegments: d,
        positionalParamSegments: u,
        remainingSegments: h,
      } = Gh(t, n, a);
      if (!c) return Un(t);
      typeof n.redirectTo == "string" &&
        n.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
        this.absoluteRedirectCount > C_ && (this.allowRedirects = !1));
      let m = new Wn(
          a,
          l,
          Object.freeze(te({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          yh(n),
          Wr(n),
          n.component ?? n._loadedComponent ?? null,
          n,
          wh(n)
        ),
        p = js(m, s, this.paramsInheritanceStrategy);
      (m.params = Object.freeze(p.params)), (m.data = Object.freeze(p.data));
      let f = this.applyRedirects.applyRedirectCommands(
        d,
        n.redirectTo,
        u,
        m,
        r
      );
      return this.applyRedirects
        .lineralizeSegments(n, f)
        .pipe(Cr((g) => this.processSegment(r, i, t, g.concat(h), o, !1, s)));
    }
    matchSegmentAgainstRoute(r, t, i, n, a, o) {
      let s = v_(t, i, n, r, this.urlSerializer);
      return (
        i.path === "**" && (t.children = {}),
        s.pipe(
          ar((c) =>
            c.matched
              ? ((r = i._injector ?? r),
                this.getChildConfig(r, i, n).pipe(
                  ar(({ routes: l }) => {
                    let d = i._loadedInjector ?? r,
                      {
                        parameters: u,
                        consumedSegments: h,
                        remainingSegments: m,
                      } = c,
                      p = new Wn(
                        h,
                        u,
                        Object.freeze(te({}, this.urlTree.queryParams)),
                        this.urlTree.fragment,
                        yh(i),
                        Wr(i),
                        i.component ?? i._loadedComponent ?? null,
                        i,
                        wh(i)
                      ),
                      f = js(p, o, this.paramsInheritanceStrategy);
                    (p.params = Object.freeze(f.params)),
                      (p.data = Object.freeze(f.data));
                    let { segmentGroup: g, slicedSegments: T } = bh(t, h, m, l);
                    if (T.length === 0 && g.hasChildren())
                      return this.processChildren(d, l, g, p).pipe(
                        Se((x) => new _r(p, x))
                      );
                    if (l.length === 0 && T.length === 0)
                      return ke(new _r(p, []));
                    let E = Wr(i) === a;
                    return this.processSegment(
                      d,
                      l,
                      g,
                      T,
                      E ? Oe : a,
                      !0,
                      p
                    ).pipe(Se((x) => new _r(p, x instanceof _r ? [x] : [])));
                  })
                ))
              : Un(t)
          )
        )
      );
    }
    getChildConfig(r, t, i) {
      return t.children
        ? ke({ routes: t.children, injector: r })
        : t.loadChildren
        ? t._loadedRoutes !== void 0
          ? ke({ routes: t._loadedRoutes, injector: t._loadedInjector })
          : h_(r, t, i, this.urlSerializer).pipe(
              Cr((n) =>
                n
                  ? this.configLoader.loadChildren(r, t).pipe(
                      gt((a) => {
                        (t._loadedRoutes = a.routes),
                          (t._loadedInjector = a.injector);
                      })
                    )
                  : g_(t)
              )
            )
        : ke({ routes: [], injector: r });
    }
  };
function T_(e) {
  e.sort((r, t) =>
    r.value.outlet === Oe
      ? -1
      : t.value.outlet === Oe
      ? 1
      : r.value.outlet.localeCompare(t.value.outlet)
  );
}
function S_(e) {
  let r = e.value.routeConfig;
  return r && r.path === "";
}
function $h(e) {
  let r = [],
    t = new Set();
  for (let i of e) {
    if (!S_(i)) {
      r.push(i);
      continue;
    }
    let n = r.find((a) => i.value.routeConfig === a.value.routeConfig);
    n !== void 0 ? (n.children.push(...i.children), t.add(n)) : r.push(i);
  }
  for (let i of t) {
    let n = $h(i.children);
    r.push(new _r(i.value, n));
  }
  return r.filter((i) => !t.has(i));
}
function yh(e) {
  return e.data || {};
}
function wh(e) {
  return e.resolve || {};
}
function A_(e, r, t, i, n, a) {
  return Cr((o) =>
    E_(e, r, t, i, o.extractedUrl, n, a).pipe(
      Se(({ state: s, tree: c }) =>
        Xe(te({}, o), { targetSnapshot: s, urlAfterRedirects: c })
      )
    )
  );
}
function I_(e, r) {
  return Cr((t) => {
    let {
      targetSnapshot: i,
      guards: { canActivateChecks: n },
    } = t;
    if (!n.length) return ke(t);
    let a = new Set(n.map((c) => c.route)),
      o = new Set();
    for (let c of a) if (!o.has(c)) for (let l of Xh(c)) o.add(l);
    let s = 0;
    return nr(o).pipe(
      pi((c) =>
        a.has(c)
          ? F_(c, i, e, r)
          : ((c.data = js(c, c.parent, e).resolve), ke(void 0))
      ),
      gt(() => s++),
      Zc(1),
      Cr((c) => (s === o.size ? ke(t) : Fi))
    );
  });
}
function Xh(e) {
  let r = e.children.map((t) => Xh(t)).flat();
  return [e, ...r];
}
function F_(e, r, t, i) {
  let n = e.routeConfig,
    a = e._resolve;
  return (
    n?.title !== void 0 && !jh(n) && (a[so] = n.title),
    D_(a, e, r, i).pipe(
      Se(
        (o) => (
          (e._resolvedData = o), (e.data = js(e, e.parent, t).resolve), null
        )
      )
    )
  );
}
function D_(e, r, t, i) {
  let n = Dl(e);
  if (n.length === 0) return ke({});
  let a = {};
  return nr(n).pipe(
    Cr((o) =>
      M_(e[o], r, t, i).pipe(
        Mi(),
        gt((s) => {
          if (s instanceof no) throw Us(new Za(), s);
          a[o] = s;
        })
      )
    ),
    Zc(1),
    $u(a),
    Di((o) => (Hh(o) ? Fi : tn(o)))
  );
}
function M_(e, r, t, i) {
  let n = co(r) ?? i,
    a = Yn(e, n),
    o = a.resolve ? a.resolve(r, t) : jr(n, () => a(r, t));
  return Vi(o);
}
function Il(e) {
  return ar((r) => {
    let t = e(r);
    return t ? nr(t).pipe(Se(() => r)) : ke(r);
  });
}
var qh = (() => {
    class e {
      buildTitle(t) {
        let i,
          n = t.root;
        for (; n !== void 0; )
          (i = this.getResolvedTitleForRoute(n) ?? i),
            (n = n.children.find((a) => a.outlet === Oe));
        return i;
      }
      getResolvedTitleForRoute(t) {
        return t.data[so];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({
          token: e,
          factory: () => he(R_),
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  R_ = (() => {
    class e extends qh {
      constructor(t) {
        super(), (this.title = t);
      }
      updateTitle(t) {
        let i = this.buildTitle(t);
        i !== void 0 && this.title.setTitle(i);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Ss));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  od = new Ee("", { providedIn: "root", factory: () => ({}) }),
  O_ = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["ng-component"]],
          standalone: !0,
          features: [ht],
          decls: 1,
          vars: 0,
          template: function (i, n) {
            i & 1 && Ge(0, "router-outlet");
          },
          dependencies: [zx],
          encapsulation: 2,
        });
      }
    }
    return e;
  })();
function sd(e) {
  let r = e.children && e.children.map(sd),
    t = r ? Xe(te({}, e), { children: r }) : te({}, e);
  return (
    !t.component &&
      !t.loadComponent &&
      (r || t.loadChildren) &&
      t.outlet &&
      t.outlet !== Oe &&
      (t.component = O_),
    t
  );
}
var cd = new Ee(""),
  N_ = (() => {
    class e {
      constructor() {
        (this.componentLoaders = new WeakMap()),
          (this.childrenLoaders = new WeakMap()),
          (this.compiler = he(nl));
      }
      loadComponent(t) {
        if (this.componentLoaders.get(t)) return this.componentLoaders.get(t);
        if (t._loadedComponent) return ke(t._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(t);
        let i = Vi(t.loadComponent()).pipe(
            Se(Kh),
            gt((a) => {
              this.onLoadEndListener && this.onLoadEndListener(t),
                (t._loadedComponent = a);
            }),
            gi(() => {
              this.componentLoaders.delete(t);
            })
          ),
          n = new qc(i, () => new zt()).pipe(Xc());
        return this.componentLoaders.set(t, n), n;
      }
      loadChildren(t, i) {
        if (this.childrenLoaders.get(i)) return this.childrenLoaders.get(i);
        if (i._loadedRoutes)
          return ke({ routes: i._loadedRoutes, injector: i._loadedInjector });
        this.onLoadStartListener && this.onLoadStartListener(i);
        let a = P_(i, this.compiler, t, this.onLoadEndListener).pipe(
            gi(() => {
              this.childrenLoaders.delete(i);
            })
          ),
          o = new qc(a, () => new zt()).pipe(Xc());
        return this.childrenLoaders.set(i, o), o;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function P_(e, r, t, i) {
  return Vi(e.loadChildren()).pipe(
    Se(Kh),
    Cr((n) =>
      n instanceof hf || Array.isArray(n) ? ke(n) : nr(r.compileModuleAsync(n))
    ),
    Se((n) => {
      i && i(e);
      let a,
        o,
        s = !1;
      return (
        Array.isArray(n)
          ? ((o = n), (s = !0))
          : ((a = n.create(t).injector),
            (o = a.get(cd, [], { optional: !0, self: !0 }).flat())),
        { routes: o.map(sd), injector: a }
      );
    })
  );
}
function L_(e) {
  return e && typeof e == "object" && "default" in e;
}
function Kh(e) {
  return L_(e) ? e.default : e;
}
var ld = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({
          token: e,
          factory: () => he(B_),
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  B_ = (() => {
    class e {
      shouldProcessUrl(t) {
        return !0;
      }
      extract(t) {
        return t;
      }
      merge(t, i) {
        return t;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  j_ = new Ee("");
var V_ = new Ee(""),
  U_ = (() => {
    class e {
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      constructor() {
        (this.currentNavigation = null),
          (this.currentTransition = null),
          (this.lastSuccessfulNavigation = null),
          (this.events = new zt()),
          (this.transitionAbortSubject = new zt()),
          (this.configLoader = he(N_)),
          (this.environmentInjector = he(Rn)),
          (this.urlSerializer = he(id)),
          (this.rootContexts = he(Hs)),
          (this.location = he(ms)),
          (this.inputBindingEnabled = he(ad, { optional: !0 }) !== null),
          (this.titleStrategy = he(qh)),
          (this.options = he(od, { optional: !0 }) || {}),
          (this.paramsInheritanceStrategy =
            this.options.paramsInheritanceStrategy || "emptyOnly"),
          (this.urlHandlingStrategy = he(ld)),
          (this.createViewTransition = he(j_, { optional: !0 })),
          (this.navigationErrorHandler = he(V_, { optional: !0 })),
          (this.navigationId = 0),
          (this.afterPreactivation = () => ke(void 0)),
          (this.rootComponentType = null);
        let t = (n) => this.events.next(new Vl(n)),
          i = (n) => this.events.next(new Ul(n));
        (this.configLoader.onLoadEndListener = i),
          (this.configLoader.onLoadStartListener = t);
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(t) {
        let i = ++this.navigationId;
        this.transitions?.next(
          Xe(te(te({}, this.transitions.value), t), { id: i })
        );
      }
      setupNavigations(t, i, n) {
        return (
          (this.transitions = new Ht({
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
            source: Ka,
            restoredState: null,
            currentSnapshot: n.snapshot,
            targetSnapshot: null,
            currentRouterState: n,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
          })),
          this.transitions.pipe(
            Br((a) => a.id !== 0),
            Se((a) =>
              Xe(te({}, a), {
                extractedUrl: this.urlHandlingStrategy.extract(a.rawUrl),
              })
            ),
            ar((a) => {
              let o = !1,
                s = !1;
              return ke(a).pipe(
                ar((c) => {
                  if (this.navigationId > a.id)
                    return (
                      this.cancelNavigationTransition(
                        a,
                        "",
                        br.SupersededByNewNavigation
                      ),
                      Fi
                    );
                  (this.currentTransition = a),
                    (this.currentNavigation = {
                      id: c.id,
                      initialUrl: c.rawUrl,
                      extractedUrl: c.extractedUrl,
                      targetBrowserUrl:
                        typeof c.extras.browserUrl == "string"
                          ? this.urlSerializer.parse(c.extras.browserUrl)
                          : c.extras.browserUrl,
                      trigger: c.source,
                      extras: c.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Xe(te({}, this.lastSuccessfulNavigation), {
                            previousNavigation: null,
                          })
                        : null,
                    });
                  let l =
                      !t.navigated ||
                      this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    d = c.extras.onSameUrlNavigation ?? t.onSameUrlNavigation;
                  if (!l && d !== "reload") {
                    let u = "";
                    return (
                      this.events.next(
                        new hn(
                          c.id,
                          this.urlSerializer.serialize(c.rawUrl),
                          u,
                          Nl.IgnoredSameUrlNavigation
                        )
                      ),
                      c.resolve(!1),
                      Fi
                    );
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl))
                    return ke(c).pipe(
                      ar((u) => {
                        let h = this.transitions?.getValue();
                        return (
                          this.events.next(
                            new eo(
                              u.id,
                              this.urlSerializer.serialize(u.extractedUrl),
                              u.source,
                              u.restoredState
                            )
                          ),
                          h !== this.transitions?.getValue()
                            ? Fi
                            : Promise.resolve(u)
                        );
                      }),
                      A_(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        t.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy
                      ),
                      gt((u) => {
                        (a.targetSnapshot = u.targetSnapshot),
                          (a.urlAfterRedirects = u.urlAfterRedirects),
                          (this.currentNavigation = Xe(
                            te({}, this.currentNavigation),
                            { finalUrl: u.urlAfterRedirects }
                          ));
                        let h = new Ps(
                          u.id,
                          this.urlSerializer.serialize(u.extractedUrl),
                          this.urlSerializer.serialize(u.urlAfterRedirects),
                          u.targetSnapshot
                        );
                        this.events.next(h);
                      })
                    );
                  if (
                    l &&
                    this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                  ) {
                    let {
                        id: u,
                        extractedUrl: h,
                        source: m,
                        restoredState: p,
                        extras: f,
                      } = c,
                      g = new eo(u, this.urlSerializer.serialize(h), m, p);
                    this.events.next(g);
                    let T = Lh(this.rootComponentType).snapshot;
                    return (
                      (this.currentTransition = a =
                        Xe(te({}, c), {
                          targetSnapshot: T,
                          urlAfterRedirects: h,
                          extras: Xe(te({}, f), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })),
                      (this.currentNavigation.finalUrl = h),
                      ke(a)
                    );
                  } else {
                    let u = "";
                    return (
                      this.events.next(
                        new hn(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          u,
                          Nl.IgnoredByUrlHandlingStrategy
                        )
                      ),
                      c.resolve(!1),
                      Fi
                    );
                  }
                }),
                gt((c) => {
                  let l = new Pl(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot
                  );
                  this.events.next(l);
                }),
                Se(
                  (c) => (
                    (this.currentTransition = a =
                      Xe(te({}, c), {
                        guards: qx(
                          c.targetSnapshot,
                          c.currentSnapshot,
                          this.rootContexts
                        ),
                      })),
                    a
                  )
                ),
                a_(this.environmentInjector, (c) => this.events.next(c)),
                gt((c) => {
                  if (
                    ((a.guardsResult = c.guardsResult),
                    c.guardsResult && typeof c.guardsResult != "boolean")
                  )
                    throw Us(this.urlSerializer, c.guardsResult);
                  let l = new Ll(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                    !!c.guardsResult
                  );
                  this.events.next(l);
                }),
                Br((c) =>
                  c.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(c, "", br.GuardRejected),
                      !1)
                ),
                Il((c) => {
                  if (c.guards.canActivateChecks.length)
                    return ke(c).pipe(
                      gt((l) => {
                        let d = new Bl(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          this.urlSerializer.serialize(l.urlAfterRedirects),
                          l.targetSnapshot
                        );
                        this.events.next(d);
                      }),
                      ar((l) => {
                        let d = !1;
                        return ke(l).pipe(
                          I_(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector
                          ),
                          gt({
                            next: () => (d = !0),
                            complete: () => {
                              d ||
                                this.cancelNavigationTransition(
                                  l,
                                  "",
                                  br.NoDataFromResolver
                                );
                            },
                          })
                        );
                      }),
                      gt((l) => {
                        let d = new jl(
                          l.id,
                          this.urlSerializer.serialize(l.extractedUrl),
                          this.urlSerializer.serialize(l.urlAfterRedirects),
                          l.targetSnapshot
                        );
                        this.events.next(d);
                      })
                    );
                }),
                Il((c) => {
                  let l = (d) => {
                    let u = [];
                    d.routeConfig?.loadComponent &&
                      !d.routeConfig._loadedComponent &&
                      u.push(
                        this.configLoader.loadComponent(d.routeConfig).pipe(
                          gt((h) => {
                            d.component = h;
                          }),
                          Se(() => {})
                        )
                      );
                    for (let h of d.children) u.push(...l(h));
                    return u;
                  };
                  return Ca(l(c.targetSnapshot.root)).pipe(Yc(null), Wt(1));
                }),
                Il(() => this.afterPreactivation()),
                ar(() => {
                  let { currentSnapshot: c, targetSnapshot: l } = a,
                    d = this.createViewTransition?.(
                      this.environmentInjector,
                      c.root,
                      l.root
                    );
                  return d ? nr(d).pipe(Se(() => a)) : ke(a);
                }),
                Se((c) => {
                  let l = Hx(
                    t.routeReuseStrategy,
                    c.targetSnapshot,
                    c.currentRouterState
                  );
                  return (
                    (this.currentTransition = a =
                      Xe(te({}, c), { targetRouterState: l })),
                    (this.currentNavigation.targetRouterState = l),
                    a
                  );
                }),
                gt(() => {
                  this.events.next(new ro());
                }),
                Xx(
                  this.rootContexts,
                  t.routeReuseStrategy,
                  (c) => this.events.next(c),
                  this.inputBindingEnabled
                ),
                Wt(1),
                gt({
                  next: (c) => {
                    (o = !0),
                      (this.lastSuccessfulNavigation = this.currentNavigation),
                      this.events.next(
                        new fn(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects)
                        )
                      ),
                      this.titleStrategy?.updateTitle(
                        c.targetRouterState.snapshot
                      ),
                      c.resolve(!0);
                  },
                  complete: () => {
                    o = !0;
                  },
                }),
                Ri(
                  this.transitionAbortSubject.pipe(
                    gt((c) => {
                      throw c;
                    })
                  )
                ),
                gi(() => {
                  !o &&
                    !s &&
                    this.cancelNavigationTransition(
                      a,
                      "",
                      br.SupersededByNewNavigation
                    ),
                    this.currentTransition?.id === a.id &&
                      ((this.currentNavigation = null),
                      (this.currentTransition = null));
                }),
                Di((c) => {
                  if (((s = !0), zh(c)))
                    this.events.next(
                      new _i(
                        a.id,
                        this.urlSerializer.serialize(a.extractedUrl),
                        c.message,
                        c.cancellationCode
                      )
                    ),
                      $x(c)
                        ? this.events.next(
                            new Xn(c.url, c.navigationBehaviorOptions)
                          )
                        : a.resolve(!1);
                  else {
                    let l = new to(
                      a.id,
                      this.urlSerializer.serialize(a.extractedUrl),
                      c,
                      a.targetSnapshot ?? void 0
                    );
                    try {
                      let d = jr(this.environmentInjector, () =>
                        this.navigationErrorHandler?.(l)
                      );
                      if (d instanceof no) {
                        let { message: u, cancellationCode: h } = Us(
                          this.urlSerializer,
                          d
                        );
                        this.events.next(
                          new _i(
                            a.id,
                            this.urlSerializer.serialize(a.extractedUrl),
                            u,
                            h
                          )
                        ),
                          this.events.next(
                            new Xn(d.redirectTo, d.navigationBehaviorOptions)
                          );
                      } else {
                        this.events.next(l);
                        let u = t.errorHandler(c);
                        a.resolve(!!u);
                      }
                    } catch (d) {
                      this.options.resolveNavigationPromiseOnError
                        ? a.resolve(!1)
                        : a.reject(d);
                    }
                  }
                  return Fi;
                })
              );
            })
          )
        );
      }
      cancelNavigationTransition(t, i, n) {
        let a = new _i(
          t.id,
          this.urlSerializer.serialize(t.extractedUrl),
          i,
          n
        );
        this.events.next(a), t.resolve(!1);
      }
      isUpdatingInternalState() {
        return (
          this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString()
        );
      }
      isUpdatedBrowserUrl() {
        let t = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0))
          ),
          i =
            this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return (
          t.toString() !== i?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function z_(e) {
  return e !== Ka;
}
var H_ = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({
          token: e,
          factory: () => he(W_),
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  rd = class {
    shouldDetach(r) {
      return !1;
    }
    store(r, t) {}
    shouldAttach(r) {
      return !1;
    }
    retrieve(r) {
      return null;
    }
    shouldReuseRoute(r, t) {
      return r.routeConfig === t.routeConfig;
    }
  },
  W_ = (() => {
    class e extends rd {
      static {
        this.ɵfac = (() => {
          let t;
          return function (n) {
            return (t || (t = ti(e)))(n || e);
          };
        })();
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Yh = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({
          token: e,
          factory: () => he(G_),
          providedIn: "root",
        });
      }
    }
    return e;
  })(),
  G_ = (() => {
    class e extends Yh {
      constructor() {
        super(...arguments),
          (this.location = he(ms)),
          (this.urlSerializer = he(id)),
          (this.options = he(od, { optional: !0 }) || {}),
          (this.canceledNavigationResolution =
            this.options.canceledNavigationResolution || "replace"),
          (this.urlHandlingStrategy = he(ld)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.currentUrlTree = new bi()),
          (this.rawUrlTree = this.currentUrlTree),
          (this.currentPageId = 0),
          (this.lastSuccessfulId = -1),
          (this.routerState = Lh(null)),
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
      registerNonRouterCurrentEntryChangeListener(t) {
        return this.location.subscribe((i) => {
          i.type === "popstate" && t(i.url, i.state);
        });
      }
      handleRouterEvent(t, i) {
        if (t instanceof eo) this.stateMemento = this.createStateMemento();
        else if (t instanceof hn) this.rawUrlTree = i.initialUrl;
        else if (t instanceof Ps) {
          if (
            this.urlUpdateStrategy === "eager" &&
            !i.extras.skipLocationChange
          ) {
            let n = this.urlHandlingStrategy.merge(i.finalUrl, i.initialUrl);
            this.setBrowserUrl(i.targetBrowserUrl ?? n, i);
          }
        } else
          t instanceof ro
            ? ((this.currentUrlTree = i.finalUrl),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                i.finalUrl,
                i.initialUrl
              )),
              (this.routerState = i.targetRouterState),
              this.urlUpdateStrategy === "deferred" &&
                !i.extras.skipLocationChange &&
                this.setBrowserUrl(i.targetBrowserUrl ?? this.rawUrlTree, i))
            : t instanceof _i &&
              (t.code === br.GuardRejected || t.code === br.NoDataFromResolver)
            ? this.restoreHistory(i)
            : t instanceof to
            ? this.restoreHistory(i, !0)
            : t instanceof fn &&
              ((this.lastSuccessfulId = t.id),
              (this.currentPageId = this.browserPageId));
      }
      setBrowserUrl(t, i) {
        let n = t instanceof bi ? this.urlSerializer.serialize(t) : t;
        if (this.location.isCurrentPathEqualTo(n) || i.extras.replaceUrl) {
          let a = this.browserPageId,
            o = te(te({}, i.extras.state), this.generateNgRouterState(i.id, a));
          this.location.replaceState(n, "", o);
        } else {
          let a = te(
            te({}, i.extras.state),
            this.generateNgRouterState(i.id, this.browserPageId + 1)
          );
          this.location.go(n, "", a);
        }
      }
      restoreHistory(t, i = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let n = this.browserPageId,
            a = this.currentPageId - n;
          a !== 0
            ? this.location.historyGo(a)
            : this.currentUrlTree === t.finalUrl &&
              a === 0 &&
              (this.resetState(t), this.resetUrlToCurrentUrlTree());
        } else
          this.canceledNavigationResolution === "replace" &&
            (i && this.resetState(t), this.resetUrlToCurrentUrlTree());
      }
      resetState(t) {
        (this.routerState = this.stateMemento.routerState),
          (this.currentUrlTree = this.stateMemento.currentUrlTree),
          (this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            t.finalUrl ?? this.rawUrlTree
          ));
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)
        );
      }
      generateNgRouterState(t, i) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: t, ɵrouterPageId: i }
          : { navigationId: t };
      }
      static {
        this.ɵfac = (() => {
          let t;
          return function (n) {
            return (t || (t = ti(e)))(n || e);
          };
        })();
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  Xa = (function (e) {
    return (
      (e[(e.COMPLETE = 0)] = "COMPLETE"),
      (e[(e.FAILED = 1)] = "FAILED"),
      (e[(e.REDIRECTING = 2)] = "REDIRECTING"),
      e
    );
  })(Xa || {});
function $_(e, r) {
  e.events
    .pipe(
      Br(
        (t) =>
          t instanceof fn ||
          t instanceof _i ||
          t instanceof to ||
          t instanceof hn
      ),
      Se((t) =>
        t instanceof fn || t instanceof hn
          ? Xa.COMPLETE
          : (
              t instanceof _i
                ? t.code === br.Redirect ||
                  t.code === br.SupersededByNewNavigation
                : !1
            )
          ? Xa.REDIRECTING
          : Xa.FAILED
      ),
      Br((t) => t !== Xa.REDIRECTING),
      Wt(1)
    )
    .subscribe(() => {
      r();
    });
}
function X_(e) {
  throw e;
}
var q_ = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  K_ = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Zh = (() => {
    class e {
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
          (this.console = he(cs)),
          (this.stateManager = he(Yh)),
          (this.options = he(od, { optional: !0 }) || {}),
          (this.pendingTasks = he(Sa)),
          (this.urlUpdateStrategy =
            this.options.urlUpdateStrategy || "deferred"),
          (this.navigationTransitions = he(U_)),
          (this.urlSerializer = he(id)),
          (this.location = he(ms)),
          (this.urlHandlingStrategy = he(ld)),
          (this._events = new zt()),
          (this.errorHandler = this.options.errorHandler || X_),
          (this.navigated = !1),
          (this.routeReuseStrategy = he(H_)),
          (this.onSameUrlNavigation =
            this.options.onSameUrlNavigation || "ignore"),
          (this.config = he(cd, { optional: !0 })?.flat() ?? []),
          (this.componentInputBindingEnabled = !!he(ad, { optional: !0 })),
          (this.eventsSubscription = new ka()),
          this.resetConfig(this.config),
          this.navigationTransitions
            .setupNavigations(this, this.currentUrlTree, this.routerState)
            .subscribe({
              error: (t) => {
                this.console.warn(t);
              },
            }),
          this.subscribeToNavigationEvents();
      }
      subscribeToNavigationEvents() {
        let t = this.navigationTransitions.events.subscribe((i) => {
          try {
            let n = this.navigationTransitions.currentTransition,
              a = this.navigationTransitions.currentNavigation;
            if (n !== null && a !== null) {
              if (
                (this.stateManager.handleRouterEvent(i, a),
                i instanceof _i &&
                  i.code !== br.Redirect &&
                  i.code !== br.SupersededByNewNavigation)
              )
                this.navigated = !0;
              else if (i instanceof fn) this.navigated = !0;
              else if (i instanceof Xn) {
                let o = i.navigationBehaviorOptions,
                  s = this.urlHandlingStrategy.merge(i.url, n.currentRawUrl),
                  c = te(
                    {
                      browserUrl: n.extras.browserUrl,
                      info: n.extras.info,
                      skipLocationChange: n.extras.skipLocationChange,
                      replaceUrl:
                        n.extras.replaceUrl ||
                        this.urlUpdateStrategy === "eager" ||
                        z_(n.source),
                    },
                    o
                  );
                this.scheduleNavigation(s, Ka, null, c, {
                  resolve: n.resolve,
                  reject: n.reject,
                  promise: n.promise,
                });
              }
            }
            Z_(i) && this._events.next(i);
          } catch (n) {
            this.navigationTransitions.transitionAbortSubject.next(n);
          }
        });
        this.eventsSubscription.add(t);
      }
      resetRootComponentType(t) {
        (this.routerState.root.component = t),
          (this.navigationTransitions.rootComponentType = t);
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
            this.navigateToSyncWithBrowser(
              this.location.path(!0),
              Ka,
              this.stateManager.restoredState()
            );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??=
          this.stateManager.registerNonRouterCurrentEntryChangeListener(
            (t, i) => {
              setTimeout(() => {
                this.navigateToSyncWithBrowser(t, "popstate", i);
              }, 0);
            }
          );
      }
      navigateToSyncWithBrowser(t, i, n) {
        let a = { replaceUrl: !0 },
          o = n?.navigationId ? n : null;
        if (n) {
          let c = te({}, n);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (a.state = c);
        }
        let s = this.parseUrl(t);
        this.scheduleNavigation(s, i, o, a);
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
      resetConfig(t) {
        (this.config = t.map(sd)), (this.navigated = !1);
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
      createUrlTree(t, i = {}) {
        let {
            relativeTo: n,
            queryParams: a,
            fragment: o,
            queryParamsHandling: s,
            preserveFragment: c,
          } = i,
          l = c ? this.currentUrlTree.fragment : o,
          d = null;
        switch (s ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            d = te(te({}, this.currentUrlTree.queryParams), a);
            break;
          case "preserve":
            d = this.currentUrlTree.queryParams;
            break;
          default:
            d = a || null;
        }
        d !== null && (d = this.removeEmptyProps(d));
        let u;
        try {
          let h = n ? n.snapshot : this.routerState.snapshot.root;
          u = Rh(h);
        } catch {
          (typeof t[0] != "string" || t[0][0] !== "/") && (t = []),
            (u = this.currentUrlTree.root);
        }
        return Oh(u, t, d, l ?? null);
      }
      navigateByUrl(t, i = { skipLocationChange: !1 }) {
        let n = Qa(t) ? t : this.parseUrl(t),
          a = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
        return this.scheduleNavigation(a, Ka, null, i);
      }
      navigate(t, i = { skipLocationChange: !1 }) {
        return Y_(t), this.navigateByUrl(this.createUrlTree(t, i), i);
      }
      serializeUrl(t) {
        return this.urlSerializer.serialize(t);
      }
      parseUrl(t) {
        try {
          return this.urlSerializer.parse(t);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(t, i) {
        let n;
        if (
          (i === !0 ? (n = te({}, q_)) : i === !1 ? (n = te({}, K_)) : (n = i),
          Qa(t))
        )
          return gh(this.currentUrlTree, t, n);
        let a = this.parseUrl(t);
        return gh(this.currentUrlTree, a, n);
      }
      removeEmptyProps(t) {
        return Object.entries(t).reduce(
          (i, [n, a]) => (a != null && (i[n] = a), i),
          {}
        );
      }
      scheduleNavigation(t, i, n, a, o) {
        if (this.disposed) return Promise.resolve(!1);
        let s, c, l;
        o
          ? ((s = o.resolve), (c = o.reject), (l = o.promise))
          : (l = new Promise((u, h) => {
              (s = u), (c = h);
            }));
        let d = this.pendingTasks.add();
        return (
          $_(this, () => {
            queueMicrotask(() => this.pendingTasks.remove(d));
          }),
          this.navigationTransitions.handleNavigationRequest({
            source: i,
            restoredState: n,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: t,
            extras: a,
            resolve: s,
            reject: c,
            promise: l,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          l.catch((u) => Promise.reject(u))
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function Y_(e) {
  for (let r = 0; r < e.length; r++) if (e[r] == null) throw new et(4008, !1);
}
function Z_(e) {
  return !(e instanceof ro) && !(e instanceof Xn);
}
var Q_ = new Ee("");
function Qh(e, ...r) {
  return Jr([
    { provide: cd, multi: !0, useValue: e },
    [],
    { provide: qn, useFactory: J_, deps: [Zh] },
    { provide: fs, multi: !0, useFactory: eb },
    r.map((t) => t.ɵproviders),
  ]);
}
function J_(e) {
  return e.routerState.root;
}
function eb() {
  let e = he(On);
  return (r) => {
    let t = e.get(Ra);
    if (r !== t.components[0]) return;
    let i = e.get(Zh),
      n = e.get(tb);
    e.get(rb) === 1 && i.initialNavigation(),
      e.get(ib, null, Jc.Optional)?.setUpPreloading(),
      e.get(Q_, null, Jc.Optional)?.init(),
      i.resetRootComponentType(t.componentTypes[0]),
      n.closed || (n.next(), n.complete(), n.unsubscribe());
  };
}
var tb = new Ee("", { factory: () => new zt() }),
  rb = new Ee("", { providedIn: "root", factory: () => 1 });
var ib = new Ee("");
var Jh = [];
var nb = "@",
  ab = (() => {
    class e {
      constructor(t, i, n, a, o) {
        (this.doc = t),
          (this.delegate = i),
          (this.zone = n),
          (this.animationType = a),
          (this.moduleImpl = o),
          (this._rendererFactoryPromise = null),
          (this.scheduler = he(uf, { optional: !0 })),
          (this.loadingSchedulerFn = he(ob, { optional: !0 }));
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let t = () =>
            this.moduleImpl ?? import("./chunk-CGGRU6KE.js").then((n) => n),
          i;
        return (
          this.loadingSchedulerFn
            ? (i = this.loadingSchedulerFn(t))
            : (i = t()),
          i
            .catch((n) => {
              throw new et(5300, !1);
            })
            .then(({ ɵcreateEngine: n, ɵAnimationRendererFactory: a }) => {
              this._engine = n(this.animationType, this.doc);
              let o = new a(this.delegate, this._engine, this.zone);
              return (this.delegate = o), o;
            })
        );
      }
      createRenderer(t, i) {
        let n = this.delegate.createRenderer(t, i);
        if (n.ɵtype === 0) return n;
        typeof n.throwOnSyntheticProps == "boolean" &&
          (n.throwOnSyntheticProps = !1);
        let a = new dd(n);
        return (
          i?.data?.animation &&
            !this._rendererFactoryPromise &&
            (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise
            ?.then((o) => {
              let s = o.createRenderer(t, i);
              a.use(s), this.scheduler?.notify(10);
            })
            .catch((o) => {
              a.use(n);
            }),
          a
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
          is();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  dd = class {
    constructor(r) {
      (this.delegate = r), (this.replay = []), (this.ɵtype = 1);
    }
    use(r) {
      if (((this.delegate = r), this.replay !== null)) {
        for (let t of this.replay) t(r);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      (this.replay = null), this.delegate.destroy();
    }
    createElement(r, t) {
      return this.delegate.createElement(r, t);
    }
    createComment(r) {
      return this.delegate.createComment(r);
    }
    createText(r) {
      return this.delegate.createText(r);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(r, t) {
      this.delegate.appendChild(r, t);
    }
    insertBefore(r, t, i, n) {
      this.delegate.insertBefore(r, t, i, n);
    }
    removeChild(r, t, i) {
      this.delegate.removeChild(r, t, i);
    }
    selectRootElement(r, t) {
      return this.delegate.selectRootElement(r, t);
    }
    parentNode(r) {
      return this.delegate.parentNode(r);
    }
    nextSibling(r) {
      return this.delegate.nextSibling(r);
    }
    setAttribute(r, t, i, n) {
      this.delegate.setAttribute(r, t, i, n);
    }
    removeAttribute(r, t, i) {
      this.delegate.removeAttribute(r, t, i);
    }
    addClass(r, t) {
      this.delegate.addClass(r, t);
    }
    removeClass(r, t) {
      this.delegate.removeClass(r, t);
    }
    setStyle(r, t, i, n) {
      this.delegate.setStyle(r, t, i, n);
    }
    removeStyle(r, t, i) {
      this.delegate.removeStyle(r, t, i);
    }
    setProperty(r, t, i) {
      this.shouldReplay(t) && this.replay.push((n) => n.setProperty(r, t, i)),
        this.delegate.setProperty(r, t, i);
    }
    setValue(r, t) {
      this.delegate.setValue(r, t);
    }
    listen(r, t, i) {
      return (
        this.shouldReplay(t) && this.replay.push((n) => n.listen(r, t, i)),
        this.delegate.listen(r, t, i)
      );
    }
    shouldReplay(r) {
      return this.replay !== null && r.startsWith(nb);
    }
  },
  ob = new Ee("");
function e0(e = "animations") {
  return (
    Da("NgAsyncAnimations"),
    Jr([
      {
        provide: Ln,
        useFactory: (r, t, i) => new ab(r, t, i, e),
        deps: [Ye, Vn, qe],
      },
      {
        provide: Vr,
        useValue: e === "noop" ? "NoopAnimations" : "BrowserAnimations",
      },
    ])
  );
}
var zi = class {},
  t0 = (() => {
    class e extends zi {
      getTranslation(t) {
        return ke({});
      }
      static ɵfac = (() => {
        let t;
        return function (n) {
          return (t || (t = ti(e)))(n || e);
        };
      })();
      static ɵprov = pe({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  fo = class {},
  r0 = (() => {
    class e {
      handle(t) {
        return t.key;
      }
      static ɵfac = function (i) {
        return new (i || e)();
      };
      static ɵprov = pe({ token: e, factory: e.ɵfac });
    }
    return e;
  })();
function $s(e, r) {
  if (e === r) return !0;
  if (e === null || r === null) return !1;
  if (e !== e && r !== r) return !0;
  let t = typeof e,
    i = typeof r,
    n,
    a,
    o;
  if (t == i && t == "object")
    if (Array.isArray(e)) {
      if (!Array.isArray(r)) return !1;
      if ((n = e.length) == r.length) {
        for (a = 0; a < n; a++) if (!$s(e[a], r[a])) return !1;
        return !0;
      }
    } else {
      if (Array.isArray(r)) return !1;
      o = Object.create(null);
      for (a in e) {
        if (!$s(e[a], r[a])) return !1;
        o[a] = !0;
      }
      for (a in r) if (!(a in o) && typeof r[a] < "u") return !1;
      return !0;
    }
  return !1;
}
function Ui(e) {
  return typeof e < "u" && e !== null;
}
function mo(e) {
  return Gs(e) && !vd(e);
}
function Gs(e) {
  return typeof e == "object";
}
function vd(e) {
  return Array.isArray(e);
}
function xd(e) {
  return typeof e == "string";
}
function sb(e) {
  return typeof e == "function";
}
function ud(e, r) {
  let t = Object.assign({}, e);
  return Gs(e)
    ? (Gs(e) &&
        Gs(r) &&
        Object.keys(r).forEach((i) => {
          mo(r[i])
            ? i in e
              ? (t[i] = ud(e[i], r[i]))
              : Object.assign(t, { [i]: r[i] })
            : Object.assign(t, { [i]: r[i] });
        }),
      t)
    : ud({}, r);
}
function fd(e, r) {
  let t = r.split(".");
  r = "";
  do
    (r += t.shift()),
      Ui(e) && Ui(e[r]) && (mo(e[r]) || vd(e[r]) || !t.length)
        ? ((e = e[r]), (r = ""))
        : t.length
        ? (r += ".")
        : (e = void 0);
  while (t.length);
  return e;
}
function cb(e, r, t) {
  let i = r.split("."),
    n = e;
  for (let a = 0; a < i.length; a++) {
    let o = i[a];
    a === i.length - 1
      ? (n[o] = t)
      : ((!n[o] || !mo(n[o])) && (n[o] = {}), (n = n[o]));
  }
}
var Zn = class {},
  i0 = (() => {
    class e extends Zn {
      templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
      interpolate(t, i) {
        if (xd(t)) return this.interpolateString(t, i);
        if (sb(t)) return this.interpolateFunction(t, i);
      }
      interpolateFunction(t, i) {
        return t(i);
      }
      interpolateString(t, i) {
        return i
          ? t.replace(this.templateMatcher, (n, a) => {
              let o = fd(i, a);
              return Ui(o) ? o : n;
            })
          : t;
      }
      static ɵfac = (() => {
        let t;
        return function (n) {
          return (t || (t = ti(e)))(n || e);
        };
      })();
      static ɵprov = pe({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  Qn = class {},
  n0 = (() => {
    class e extends Qn {
      compile(t, i) {
        return t;
      }
      compileTranslations(t, i) {
        return t;
      }
      static ɵfac = (() => {
        let t;
        return function (n) {
          return (t || (t = ti(e)))(n || e);
        };
      })();
      static ɵprov = pe({ token: e, factory: e.ɵfac });
    }
    return e;
  })(),
  Xs = class {
    defaultLang;
    currentLang = this.defaultLang;
    translations = {};
    langs = [];
    onTranslationChange = new ft();
    onLangChange = new ft();
    onDefaultLangChange = new ft();
  },
  hd = new Ee("ISOALTE_TRANSLATE_SERVICE"),
  md = new Ee("USE_DEFAULT_LANG"),
  pd = new Ee("DEFAULT_LANGUAGE"),
  gd = new Ee("USE_EXTEND"),
  uo = (e) => (mi(e) ? e : ke(e)),
  ho = (() => {
    class e {
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
      _onTranslationChange = new ft();
      _onLangChange = new ft();
      _onDefaultLangChange = new ft();
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
      set defaultLang(t) {
        this.isolate ? (this._defaultLang = t) : (this.store.defaultLang = t);
      }
      get currentLang() {
        return this.isolate ? this._currentLang : this.store.currentLang;
      }
      set currentLang(t) {
        this.isolate ? (this._currentLang = t) : (this.store.currentLang = t);
      }
      get langs() {
        return this.isolate ? this._langs : this.store.langs;
      }
      set langs(t) {
        this.isolate ? (this._langs = t) : (this.store.langs = t);
      }
      get translations() {
        return this.isolate ? this._translations : this.store.translations;
      }
      set translations(t) {
        this.isolate ? (this._translations = t) : (this.store.translations = t);
      }
      constructor(t, i, n, a, o, s = !0, c = !1, l = !1, d) {
        (this.store = t),
          (this.currentLoader = i),
          (this.compiler = n),
          (this.parser = a),
          (this.missingTranslationHandler = o),
          (this.useDefaultLang = s),
          (this.isolate = c),
          (this.extend = l),
          d && this.setDefaultLang(d);
      }
      setDefaultLang(t) {
        if (t === this.defaultLang) return;
        let i = this.retrieveTranslations(t);
        typeof i < "u"
          ? (this.defaultLang == null && (this.defaultLang = t),
            i.pipe(Wt(1)).subscribe(() => {
              this.changeDefaultLang(t);
            }))
          : this.changeDefaultLang(t);
      }
      getDefaultLang() {
        return this.defaultLang;
      }
      use(t) {
        if (((this.lastUseLanguage = t), t === this.currentLang))
          return ke(this.translations[t]);
        this.currentLang || (this.currentLang = t);
        let i = this.retrieveTranslations(t);
        return mi(i)
          ? (i.pipe(Wt(1)).subscribe(() => {
              this.changeLang(t);
            }),
            i)
          : (this.changeLang(t), ke(this.translations[t]));
      }
      changeLang(t) {
        t === this.lastUseLanguage &&
          ((this.currentLang = t),
          this.onLangChange.emit({
            lang: t,
            translations: this.translations[t],
          }),
          this.defaultLang == null && this.changeDefaultLang(t));
      }
      retrieveTranslations(t) {
        if (typeof this.translations[t] > "u" || this.extend)
          return (
            (this._translationRequests[t] =
              this._translationRequests[t] ||
              this.loadAndCompileTranslations(t)),
            this._translationRequests[t]
          );
      }
      getTranslation(t) {
        return this.loadAndCompileTranslations(t);
      }
      loadAndCompileTranslations(t) {
        this.pending = !0;
        let i = this.currentLoader.getTranslation(t).pipe(Qc(1), Wt(1));
        return (
          (this.loadingTranslations = i.pipe(
            Se((n) => this.compiler.compileTranslations(n, t)),
            Qc(1),
            Wt(1)
          )),
          this.loadingTranslations.subscribe({
            next: (n) => {
              (this.translations[t] =
                this.extend && this.translations[t]
                  ? te(te({}, n), this.translations[t])
                  : n),
                this.updateLangs(),
                (this.pending = !1);
            },
            error: (n) => {
              this.pending = !1;
            },
          }),
          i
        );
      }
      setTranslation(t, i, n = !1) {
        let a = this.compiler.compileTranslations(i, t);
        (n || this.extend) && this.translations[t]
          ? (this.translations[t] = ud(this.translations[t], a))
          : (this.translations[t] = a),
          this.updateLangs(),
          this.onTranslationChange.emit({
            lang: t,
            translations: this.translations[t],
          });
      }
      getLangs() {
        return this.langs;
      }
      addLangs(t) {
        t.forEach((i) => {
          this.langs.indexOf(i) === -1 && this.langs.push(i);
        });
      }
      updateLangs() {
        this.addLangs(Object.keys(this.translations));
      }
      getParsedResultForKey(t, i, n) {
        let a;
        if (
          (t && (a = this.runInterpolation(fd(t, i), n)),
          a === void 0 &&
            this.defaultLang != null &&
            this.defaultLang !== this.currentLang &&
            this.useDefaultLang &&
            (a = this.runInterpolation(
              fd(this.translations[this.defaultLang], i),
              n
            )),
          a === void 0)
        ) {
          let o = { key: i, translateService: this };
          typeof n < "u" && (o.interpolateParams = n),
            (a = this.missingTranslationHandler.handle(o));
        }
        return a !== void 0 ? a : i;
      }
      runInterpolation(t, i) {
        if (vd(t)) return t.map((n) => this.runInterpolation(n, i));
        if (mo(t)) {
          let n = {};
          for (let a in t) n[a] = this.runInterpolation(t[a], i);
          return n;
        } else return this.parser.interpolate(t, i);
      }
      getParsedResult(t, i, n) {
        if (i instanceof Array) {
          let a = {},
            o = !1;
          for (let c of i)
            (a[c] = this.getParsedResultForKey(t, c, n)), (o = o || mi(a[c]));
          if (!o) return a;
          let s = i.map((c) => uo(a[c]));
          return Mn(s).pipe(
            Se((c) => {
              let l = {};
              return (
                c.forEach((d, u) => {
                  l[i[u]] = d;
                }),
                l
              );
            })
          );
        }
        return this.getParsedResultForKey(t, i, n);
      }
      get(t, i) {
        if (!Ui(t) || !t.length)
          throw new Error('Parameter "key" is required and cannot be empty');
        return this.pending
          ? this.loadingTranslations.pipe(
              pi((n) => uo(this.getParsedResult(n, t, i)))
            )
          : uo(this.getParsedResult(this.translations[this.currentLang], t, i));
      }
      getStreamOnTranslationChange(t, i) {
        if (!Ui(t) || !t.length)
          throw new Error('Parameter "key" is required and cannot be empty');
        return rn(
          Dn(() => this.get(t, i)),
          this.onTranslationChange.pipe(
            ar((n) => {
              let a = this.getParsedResult(n.translations, t, i);
              return uo(a);
            })
          )
        );
      }
      stream(t, i) {
        if (!Ui(t) || !t.length) throw new Error('Parameter "key" required');
        return rn(
          Dn(() => this.get(t, i)),
          this.onLangChange.pipe(
            ar((n) => {
              let a = this.getParsedResult(n.translations, t, i);
              return uo(a);
            })
          )
        );
      }
      instant(t, i) {
        if (!Ui(t) || t.length === 0)
          throw new Error('Parameter "key" is required and cannot be empty');
        let n = this.getParsedResult(this.translations[this.currentLang], t, i);
        return mi(n)
          ? Array.isArray(t)
            ? t.reduce((a, o) => ((a[o] = o), a), {})
            : t
          : n;
      }
      set(t, i, n = this.currentLang) {
        cb(
          this.translations[n],
          t,
          xd(i)
            ? this.compiler.compile(i, n)
            : this.compiler.compileTranslations(i, n)
        ),
          this.updateLangs(),
          this.onTranslationChange.emit({
            lang: n,
            translations: this.translations[n],
          });
      }
      changeDefaultLang(t) {
        (this.defaultLang = t),
          this.onDefaultLangChange.emit({
            lang: t,
            translations: this.translations[t],
          });
      }
      reloadLang(t) {
        return this.resetLang(t), this.loadAndCompileTranslations(t);
      }
      resetLang(t) {
        delete this._translationRequests[t], delete this.translations[t];
      }
      getBrowserLang() {
        if (typeof window > "u" || !window.navigator) return;
        let t = this.getBrowserCultureLang();
        return t ? t.split(/[-_]/)[0] : void 0;
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
        return new (i || e)(
          ae(Xs),
          ae(zi),
          ae(Qn),
          ae(Zn),
          ae(fo),
          ae(md),
          ae(hd),
          ae(gd),
          ae(pd)
        );
      };
      static ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var qs = (() => {
  class e {
    translate;
    _ref;
    value = "";
    lastKey = null;
    lastParams = [];
    onTranslationChange;
    onLangChange;
    onDefaultLangChange;
    constructor(t, i) {
      (this.translate = t), (this._ref = i);
    }
    updateValue(t, i, n) {
      let a = (o) => {
        (this.value = o !== void 0 ? o : t),
          (this.lastKey = t),
          this._ref.markForCheck();
      };
      if (n) {
        let o = this.translate.getParsedResult(n, t, i);
        mi(o) ? o.subscribe(a) : a(o);
      }
      this.translate.get(t, i).subscribe(a);
    }
    transform(t, ...i) {
      if (!t || !t.length) return t;
      if ($s(t, this.lastKey) && $s(i, this.lastParams)) return this.value;
      let n;
      if (Ui(i[0]) && i.length)
        if (xd(i[0]) && i[0].length) {
          let a = i[0]
            .replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":')
            .replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
          try {
            n = JSON.parse(a);
          } catch (o) {
            throw new SyntaxError(
              `Wrong parameter in TranslatePipe. Expected a valid Object, received: ${i[0]}`
            );
          }
        } else mo(i[0]) && (n = i[0]);
      return (
        (this.lastKey = t),
        (this.lastParams = i),
        this.updateValue(t, n),
        this._dispose(),
        this.onTranslationChange ||
          (this.onTranslationChange =
            this.translate.onTranslationChange.subscribe((a) => {
              this.lastKey &&
                a.lang === this.translate.currentLang &&
                ((this.lastKey = null), this.updateValue(t, n, a.translations));
            })),
        this.onLangChange ||
          (this.onLangChange = this.translate.onLangChange.subscribe((a) => {
            this.lastKey &&
              ((this.lastKey = null), this.updateValue(t, n, a.translations));
          })),
        this.onDefaultLangChange ||
          (this.onDefaultLangChange =
            this.translate.onDefaultLangChange.subscribe(() => {
              this.lastKey && ((this.lastKey = null), this.updateValue(t, n));
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
      return new (i || e)(fe(ho, 16), fe(Xt, 16));
    };
    static ɵpipe = es({ name: "translate", type: e, pure: !1, standalone: !0 });
    static ɵprov = pe({ token: e, factory: e.ɵfac });
  }
  return e;
})();
var Jn = (() => {
  class e {
    static forRoot(t = {}) {
      return {
        ngModule: e,
        providers: [
          t.loader || { provide: zi, useClass: t0 },
          t.compiler || { provide: Qn, useClass: n0 },
          t.parser || { provide: Zn, useClass: i0 },
          t.missingTranslationHandler || { provide: fo, useClass: r0 },
          Xs,
          { provide: hd, useValue: t.isolate },
          { provide: md, useValue: t.useDefaultLang },
          { provide: gd, useValue: t.extend },
          { provide: pd, useValue: t.defaultLanguage },
          ho,
        ],
      };
    }
    static forChild(t = {}) {
      return {
        ngModule: e,
        providers: [
          t.loader || { provide: zi, useClass: t0 },
          t.compiler || { provide: Qn, useClass: n0 },
          t.parser || { provide: Zn, useClass: i0 },
          t.missingTranslationHandler || { provide: fo, useClass: r0 },
          { provide: hd, useValue: t.isolate },
          { provide: md, useValue: t.useDefaultLang },
          { provide: gd, useValue: t.extend },
          { provide: pd, useValue: t.defaultLanguage },
          ho,
        ],
      };
    }
    static ɵfac = function (i) {
      return new (i || e)();
    };
    static ɵmod = Re({ type: e });
    static ɵinj = Me({});
  }
  return e;
})();
var Ks = class {
  http;
  prefix;
  suffix;
  constructor(r, t = "/assets/i18n/", i = ".json") {
    (this.http = r), (this.prefix = t), (this.suffix = i);
  }
  getTranslation(r) {
    return this.http.get(`${this.prefix}${r}${this.suffix}`);
  }
};
var lb = (() => {
  class e extends bs {
    constructor(t, i, n) {
      super(t, i, n);
    }
    ngOnDestroy() {
      this.flush();
    }
    static {
      this.ɵfac = function (i) {
        return new (i || e)(ae(Ye), ae(Pa), ae(_s));
      };
    }
    static {
      this.ɵprov = pe({ token: e, factory: e.ɵfac });
    }
  }
  return e;
})();
function db() {
  return new If();
}
function ub(e, r, t) {
  return new Df(e, r, t);
}
var s0 = [
    { provide: _s, useFactory: db },
    { provide: bs, useClass: lb },
    { provide: Ln, useFactory: ub, deps: [Vn, bs, qe] },
  ],
  o0 = [
    { provide: Pa, useFactory: () => new Ff() },
    { provide: Vr, useValue: "BrowserAnimations" },
    ...s0,
  ],
  fb = [
    { provide: Pa, useClass: Af },
    { provide: Vr, useValue: "NoopAnimations" },
    ...s0,
  ],
  c0 = (() => {
    class e {
      static withConfig(t) {
        return { ngModule: e, providers: t.disableAnimations ? fb : o0 };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ providers: o0, imports: [hh] });
      }
    }
    return e;
  })();
var hb = (e) => new Ks(e, "./i18n/", ".json"),
  l0 = {
    providers: [
      vf({ eventCoalescing: !0 }),
      Qh(Jh),
      ph(),
      e0(),
      eh(rh(), th()),
      el([Jn.forRoot({ loader: { provide: zi, useFactory: hb, deps: [xi] } })]),
      el([c0]),
    ],
  };
var bd;
try {
  bd = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  bd = !1;
}
var Dr = (() => {
  class e {
    constructor(t) {
      (this._platformId = t),
        (this.isBrowser = this._platformId
          ? Hr(this._platformId)
          : typeof document == "object" && !!document),
        (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
        (this.TRIDENT =
          this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
        (this.BLINK =
          this.isBrowser &&
          !!(window.chrome || bd) &&
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
        return new (i || e)(ae(Tr));
      };
    }
    static {
      this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var po;
function mb() {
  if (po == null && typeof window < "u")
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => (po = !0) })
      );
    } finally {
      po = po || !1;
    }
  return po;
}
function ea(e) {
  return mb() ? e : !!e.capture;
}
var _d;
function pb() {
  if (_d == null) {
    let e = typeof document < "u" ? document.head : null;
    _d = !!(e && (e.createShadowRoot || e.attachShadow));
  }
  return _d;
}
function d0(e) {
  if (pb()) {
    let r = e.getRootNode ? e.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && r instanceof ShadowRoot)
      return r;
  }
  return null;
}
function Hi(e) {
  return e.composedPath ? e.composedPath()[0] : e.target;
}
function u0() {
  return (
    (typeof __karma__ < "u" && !!__karma__) ||
    (typeof jasmine < "u" && !!jasmine) ||
    (typeof jest < "u" && !!jest) ||
    (typeof Mocha < "u" && !!Mocha)
  );
}
function yd(e) {
  return Array.isArray(e) ? e : [e];
}
function mn(e) {
  return e instanceof tt ? e.nativeElement : e;
}
var gb = (() => {
  class e {
    create(t) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(t);
    }
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var f0 = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ providers: [gb] });
    }
  }
  return e;
})();
var h0 = new Set(),
  pn,
  vb = (() => {
    class e {
      constructor(t, i) {
        (this._platform = t),
          (this._nonce = i),
          (this._matchMedia =
            this._platform.isBrowser && window.matchMedia
              ? window.matchMedia.bind(window)
              : _b);
      }
      matchMedia(t) {
        return (
          (this._platform.WEBKIT || this._platform.BLINK) && xb(t, this._nonce),
          this._matchMedia(t)
        );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Dr), ae(Ia, 8));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function xb(e, r) {
  if (!h0.has(e))
    try {
      pn ||
        ((pn = document.createElement("style")),
        r && pn.setAttribute("nonce", r),
        pn.setAttribute("type", "text/css"),
        document.head.appendChild(pn)),
        pn.sheet &&
          (pn.sheet.insertRule(`@media ${e} {body{ }}`, 0), h0.add(e));
    } catch (t) {
      console.error(t);
    }
}
function _b(e) {
  return {
    matches: e === "all" || e === "",
    media: e,
    addListener: () => {},
    removeListener: () => {},
  };
}
var p0 = (() => {
  class e {
    constructor(t, i) {
      (this._mediaMatcher = t),
        (this._zone = i),
        (this._queries = new Map()),
        (this._destroySubject = new zt());
    }
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(t) {
      return m0(yd(t)).some((n) => this._registerQuery(n).mql.matches);
    }
    observe(t) {
      let n = m0(yd(t)).map((o) => this._registerQuery(o).observable),
        a = Ca(n);
      return (
        (a = rn(a.pipe(Wt(1)), a.pipe(Qo(1), Kc(0)))),
        a.pipe(
          Se((o) => {
            let s = { matches: !1, breakpoints: {} };
            return (
              o.forEach(({ matches: c, query: l }) => {
                (s.matches = s.matches || c), (s.breakpoints[l] = c);
              }),
              s
            );
          })
        )
      );
    }
    _registerQuery(t) {
      if (this._queries.has(t)) return this._queries.get(t);
      let i = this._mediaMatcher.matchMedia(t),
        a = {
          observable: new Ea((o) => {
            let s = (c) => this._zone.run(() => o.next(c));
            return (
              i.addListener(s),
              () => {
                i.removeListener(s);
              }
            );
          }).pipe(
            Jo(i),
            Se(({ matches: o }) => ({ query: t, matches: o })),
            Ri(this._destroySubject)
          ),
          mql: i,
        };
      return this._queries.set(t, a), a;
    }
    static {
      this.ɵfac = function (i) {
        return new (i || e)(ae(vb), ae(qe));
      };
    }
    static {
      this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function m0(e) {
  return e
    .map((r) => r.split(","))
    .reduce((r, t) => r.concat(t))
    .map((r) => r.trim());
}
function kd(e) {
  return e.buttons === 0 || e.detail === 0;
}
function Ed(e) {
  let r =
    (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
  return (
    !!r &&
    r.identifier === -1 &&
    (r.radiusX == null || r.radiusX === 1) &&
    (r.radiusY == null || r.radiusY === 1)
  );
}
var bb = new Ee("cdk-input-modality-detector-options"),
  yb = { ignoreKeys: [18, 17, 224, 91, 16] },
  x0 = 650,
  ta = ea({ passive: !0, capture: !0 }),
  wb = (() => {
    class e {
      get mostRecentModality() {
        return this._modality.value;
      }
      constructor(t, i, n, a) {
        (this._platform = t),
          (this._mostRecentTarget = null),
          (this._modality = new Ht(null)),
          (this._lastTouchMs = 0),
          (this._onKeydown = (o) => {
            this._options?.ignoreKeys?.some((s) => s === o.keyCode) ||
              (this._modality.next("keyboard"),
              (this._mostRecentTarget = Hi(o)));
          }),
          (this._onMousedown = (o) => {
            Date.now() - this._lastTouchMs < x0 ||
              (this._modality.next(kd(o) ? "keyboard" : "mouse"),
              (this._mostRecentTarget = Hi(o)));
          }),
          (this._onTouchstart = (o) => {
            if (Ed(o)) {
              this._modality.next("keyboard");
              return;
            }
            (this._lastTouchMs = Date.now()),
              this._modality.next("touch"),
              (this._mostRecentTarget = Hi(o));
          }),
          (this._options = te(te({}, yb), a)),
          (this.modalityDetected = this._modality.pipe(Qo(1))),
          (this.modalityChanged = this.modalityDetected.pipe(Xu())),
          t.isBrowser &&
            i.runOutsideAngular(() => {
              n.addEventListener("keydown", this._onKeydown, ta),
                n.addEventListener("mousedown", this._onMousedown, ta),
                n.addEventListener("touchstart", this._onTouchstart, ta);
            });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
            (document.removeEventListener("keydown", this._onKeydown, ta),
            document.removeEventListener("mousedown", this._onMousedown, ta),
            document.removeEventListener("touchstart", this._onTouchstart, ta));
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Dr), ae(qe), ae(Ye), ae(bb, 8));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Qs = (function (e) {
    return (
      (e[(e.IMMEDIATE = 0)] = "IMMEDIATE"),
      (e[(e.EVENTUAL = 1)] = "EVENTUAL"),
      e
    );
  })(Qs || {}),
  kb = new Ee("cdk-focus-monitor-default-options"),
  Zs = ea({ passive: !0, capture: !0 }),
  _0 = (() => {
    class e {
      constructor(t, i, n, a, o) {
        (this._ngZone = t),
          (this._platform = i),
          (this._inputModalityDetector = n),
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
          (this._stopInputModalityDetector = new zt()),
          (this._rootNodeFocusAndBlurListener = (s) => {
            let c = Hi(s);
            for (let l = c; l; l = l.parentElement)
              s.type === "focus" ? this._onFocus(s, l) : this._onBlur(s, l);
          }),
          (this._document = a),
          (this._detectionMode = o?.detectionMode || Qs.IMMEDIATE);
      }
      monitor(t, i = !1) {
        let n = mn(t);
        if (!this._platform.isBrowser || n.nodeType !== 1) return ke();
        let a = d0(n) || this._getDocument(),
          o = this._elementInfo.get(n);
        if (o) return i && (o.checkChildren = !0), o.subject;
        let s = { checkChildren: i, subject: new zt(), rootNode: a };
        return (
          this._elementInfo.set(n, s),
          this._registerGlobalListeners(s),
          s.subject
        );
      }
      stopMonitoring(t) {
        let i = mn(t),
          n = this._elementInfo.get(i);
        n &&
          (n.subject.complete(),
          this._setClasses(i),
          this._elementInfo.delete(i),
          this._removeGlobalListeners(n));
      }
      focusVia(t, i, n) {
        let a = mn(t),
          o = this._getDocument().activeElement;
        a === o
          ? this._getClosestElementsInfo(a).forEach(([s, c]) =>
              this._originChanged(s, i, c)
            )
          : (this._setOrigin(i), typeof a.focus == "function" && a.focus(n));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((t, i) => this.stopMonitoring(i));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(t) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(t)
              ? "touch"
              : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : t && this._isLastInteractionFromInputLabel(t)
          ? "mouse"
          : "program";
      }
      _shouldBeAttributedToTouch(t) {
        return (
          this._detectionMode === Qs.EVENTUAL ||
          !!t?.contains(this._inputModalityDetector._mostRecentTarget)
        );
      }
      _setClasses(t, i) {
        t.classList.toggle("cdk-focused", !!i),
          t.classList.toggle("cdk-touch-focused", i === "touch"),
          t.classList.toggle("cdk-keyboard-focused", i === "keyboard"),
          t.classList.toggle("cdk-mouse-focused", i === "mouse"),
          t.classList.toggle("cdk-program-focused", i === "program");
      }
      _setOrigin(t, i = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            ((this._origin = t),
            (this._originFromTouchInteraction = t === "touch" && i),
            this._detectionMode === Qs.IMMEDIATE)
          ) {
            clearTimeout(this._originTimeoutId);
            let n = this._originFromTouchInteraction ? x0 : 1;
            this._originTimeoutId = setTimeout(() => (this._origin = null), n);
          }
        });
      }
      _onFocus(t, i) {
        let n = this._elementInfo.get(i),
          a = Hi(t);
        !n ||
          (!n.checkChildren && i !== a) ||
          this._originChanged(i, this._getFocusOrigin(a), n);
      }
      _onBlur(t, i) {
        let n = this._elementInfo.get(i);
        !n ||
          (n.checkChildren &&
            t.relatedTarget instanceof Node &&
            i.contains(t.relatedTarget)) ||
          (this._setClasses(i), this._emitOrigin(n, null));
      }
      _emitOrigin(t, i) {
        t.subject.observers.length && this._ngZone.run(() => t.subject.next(i));
      }
      _registerGlobalListeners(t) {
        if (!this._platform.isBrowser) return;
        let i = t.rootNode,
          n = this._rootNodeFocusListenerCount.get(i) || 0;
        n ||
          this._ngZone.runOutsideAngular(() => {
            i.addEventListener("focus", this._rootNodeFocusAndBlurListener, Zs),
              i.addEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Zs
              );
          }),
          this._rootNodeFocusListenerCount.set(i, n + 1),
          ++this._monitoredElementCount === 1 &&
            (this._ngZone.runOutsideAngular(() => {
              this._getWindow().addEventListener(
                "focus",
                this._windowFocusListener
              );
            }),
            this._inputModalityDetector.modalityDetected
              .pipe(Ri(this._stopInputModalityDetector))
              .subscribe((a) => {
                this._setOrigin(a, !0);
              }));
      }
      _removeGlobalListeners(t) {
        let i = t.rootNode;
        if (this._rootNodeFocusListenerCount.has(i)) {
          let n = this._rootNodeFocusListenerCount.get(i);
          n > 1
            ? this._rootNodeFocusListenerCount.set(i, n - 1)
            : (i.removeEventListener(
                "focus",
                this._rootNodeFocusAndBlurListener,
                Zs
              ),
              i.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                Zs
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
      _originChanged(t, i, n) {
        this._setClasses(t, i),
          this._emitOrigin(n, i),
          (this._lastFocusOrigin = i);
      }
      _getClosestElementsInfo(t) {
        let i = [];
        return (
          this._elementInfo.forEach((n, a) => {
            (a === t || (n.checkChildren && a.contains(t))) && i.push([a, n]);
          }),
          i
        );
      }
      _isLastInteractionFromInputLabel(t) {
        let { _mostRecentTarget: i, mostRecentModality: n } =
          this._inputModalityDetector;
        if (
          n !== "mouse" ||
          !i ||
          i === t ||
          (t.nodeName !== "INPUT" && t.nodeName !== "TEXTAREA") ||
          t.disabled
        )
          return !1;
        let a = t.labels;
        if (a) {
          for (let o = 0; o < a.length; o++) if (a[o].contains(i)) return !0;
        }
        return !1;
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(qe), ae(Dr), ae(wb), ae(Ye, 8), ae(kb, 8));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var gn = (function (e) {
    return (
      (e[(e.NONE = 0)] = "NONE"),
      (e[(e.BLACK_ON_WHITE = 1)] = "BLACK_ON_WHITE"),
      (e[(e.WHITE_ON_BLACK = 2)] = "WHITE_ON_BLACK"),
      e
    );
  })(gn || {}),
  g0 = "cdk-high-contrast-black-on-white",
  v0 = "cdk-high-contrast-white-on-black",
  wd = "cdk-high-contrast-active",
  b0 = (() => {
    class e {
      constructor(t, i) {
        (this._platform = t),
          (this._document = i),
          (this._breakpointSubscription = he(p0)
            .observe("(forced-colors: active)")
            .subscribe(() => {
              this._hasCheckedHighContrastMode &&
                ((this._hasCheckedHighContrastMode = !1),
                this._applyBodyHighContrastModeCssClasses());
            }));
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return gn.NONE;
        let t = this._document.createElement("div");
        (t.style.backgroundColor = "rgb(1,2,3)"),
          (t.style.position = "absolute"),
          this._document.body.appendChild(t);
        let i = this._document.defaultView || window,
          n = i && i.getComputedStyle ? i.getComputedStyle(t) : null,
          a = ((n && n.backgroundColor) || "").replace(/ /g, "");
        switch ((t.remove(), a)) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return gn.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return gn.BLACK_ON_WHITE;
        }
        return gn.NONE;
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
          let t = this._document.body.classList;
          t.remove(wd, g0, v0), (this._hasCheckedHighContrastMode = !0);
          let i = this.getHighContrastMode();
          i === gn.BLACK_ON_WHITE
            ? t.add(wd, g0)
            : i === gn.WHITE_ON_BLACK && t.add(wd, v0);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(Dr), ae(Ye));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var Cd = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({});
    }
  }
  return e;
})();
var Cb = ["mat-internal-form-field", ""],
  Tb = ["*"];
function Sb() {
  return !0;
}
var Ab = new Ee("mat-sanity-checks", { providedIn: "root", factory: Sb }),
  ct = (() => {
    class e {
      constructor(t, i, n) {
        (this._sanityChecks = i),
          (this._document = n),
          (this._hasDoneGlobalChecks = !1),
          t._applyBodyHighContrastModeCssClasses(),
          this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0);
      }
      _checkIsEnabled(t) {
        return u0()
          ? !1
          : typeof this._sanityChecks == "boolean"
          ? this._sanityChecks
          : !!this._sanityChecks[t];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(b0), ae(Ab, 8), ae(Ye));
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ imports: [Cd, Cd] });
      }
    }
    return e;
  })();
var Mr = (function (e) {
    return (
      (e[(e.FADING_IN = 0)] = "FADING_IN"),
      (e[(e.VISIBLE = 1)] = "VISIBLE"),
      (e[(e.FADING_OUT = 2)] = "FADING_OUT"),
      (e[(e.HIDDEN = 3)] = "HIDDEN"),
      e
    );
  })(Mr || {}),
  Td = class {
    constructor(r, t, i, n = !1) {
      (this._renderer = r),
        (this.element = t),
        (this.config = i),
        (this._animationForciblyDisabledThroughCss = n),
        (this.state = Mr.HIDDEN);
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  w0 = ea({ passive: !0, capture: !0 }),
  Sd = class {
    constructor() {
      (this._events = new Map()),
        (this._delegateEventHandler = (r) => {
          let t = Hi(r);
          t &&
            this._events.get(r.type)?.forEach((i, n) => {
              (n === t || n.contains(t)) && i.forEach((a) => a.handleEvent(r));
            });
        });
    }
    addHandler(r, t, i, n) {
      let a = this._events.get(t);
      if (a) {
        let o = a.get(i);
        o ? o.add(n) : a.set(i, new Set([n]));
      } else
        this._events.set(t, new Map([[i, new Set([n])]])),
          r.runOutsideAngular(() => {
            document.addEventListener(t, this._delegateEventHandler, w0);
          });
    }
    removeHandler(r, t, i) {
      let n = this._events.get(r);
      if (!n) return;
      let a = n.get(t);
      a &&
        (a.delete(i),
        a.size === 0 && n.delete(t),
        n.size === 0 &&
          (this._events.delete(r),
          document.removeEventListener(r, this._delegateEventHandler, w0)));
    }
  },
  k0 = { enterDuration: 225, exitDuration: 150 },
  Ib = 800,
  E0 = ea({ passive: !0, capture: !0 }),
  C0 = ["mousedown", "touchstart"],
  T0 = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Ad = class e {
    static {
      this._eventManager = new Sd();
    }
    constructor(r, t, i, n) {
      (this._target = r),
        (this._ngZone = t),
        (this._platform = n),
        (this._isPointerDown = !1),
        (this._activeRipples = new Map()),
        (this._pointerUpEventsRegistered = !1),
        n.isBrowser && (this._containerElement = mn(i));
    }
    fadeInRipple(r, t, i = {}) {
      let n = (this._containerRect =
          this._containerRect ||
          this._containerElement.getBoundingClientRect()),
        a = te(te({}, k0), i.animation);
      i.centered && ((r = n.left + n.width / 2), (t = n.top + n.height / 2));
      let o = i.radius || Fb(r, t, n),
        s = r - n.left,
        c = t - n.top,
        l = a.enterDuration,
        d = document.createElement("div");
      d.classList.add("mat-ripple-element"),
        (d.style.left = `${s - o}px`),
        (d.style.top = `${c - o}px`),
        (d.style.height = `${o * 2}px`),
        (d.style.width = `${o * 2}px`),
        i.color != null && (d.style.backgroundColor = i.color),
        (d.style.transitionDuration = `${l}ms`),
        this._containerElement.appendChild(d);
      let u = window.getComputedStyle(d),
        h = u.transitionProperty,
        m = u.transitionDuration,
        p =
          h === "none" ||
          m === "0s" ||
          m === "0s, 0s" ||
          (n.width === 0 && n.height === 0),
        f = new Td(this, d, i, p);
      (d.style.transform = "scale3d(1, 1, 1)"),
        (f.state = Mr.FADING_IN),
        i.persistent || (this._mostRecentTransientRipple = f);
      let g = null;
      return (
        !p &&
          (l || a.exitDuration) &&
          this._ngZone.runOutsideAngular(() => {
            let T = () => {
                g && (g.fallbackTimer = null),
                  clearTimeout(x),
                  this._finishRippleTransition(f);
              },
              E = () => this._destroyRipple(f),
              x = setTimeout(E, l + 100);
            d.addEventListener("transitionend", T),
              d.addEventListener("transitioncancel", E),
              (g = {
                onTransitionEnd: T,
                onTransitionCancel: E,
                fallbackTimer: x,
              });
          }),
        this._activeRipples.set(f, g),
        (p || !l) && this._finishRippleTransition(f),
        f
      );
    }
    fadeOutRipple(r) {
      if (r.state === Mr.FADING_OUT || r.state === Mr.HIDDEN) return;
      let t = r.element,
        i = te(te({}, k0), r.config.animation);
      (t.style.transitionDuration = `${i.exitDuration}ms`),
        (t.style.opacity = "0"),
        (r.state = Mr.FADING_OUT),
        (r._animationForciblyDisabledThroughCss || !i.exitDuration) &&
          this._finishRippleTransition(r);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((r) => r.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((r) => {
        r.config.persistent || r.fadeOut();
      });
    }
    setupTriggerEvents(r) {
      let t = mn(r);
      !this._platform.isBrowser ||
        !t ||
        t === this._triggerElement ||
        (this._removeTriggerEvents(),
        (this._triggerElement = t),
        C0.forEach((i) => {
          e._eventManager.addHandler(this._ngZone, i, t, this);
        }));
    }
    handleEvent(r) {
      r.type === "mousedown"
        ? this._onMousedown(r)
        : r.type === "touchstart"
        ? this._onTouchStart(r)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
          (this._ngZone.runOutsideAngular(() => {
            T0.forEach((t) => {
              this._triggerElement.addEventListener(t, this, E0);
            });
          }),
          (this._pointerUpEventsRegistered = !0));
    }
    _finishRippleTransition(r) {
      r.state === Mr.FADING_IN
        ? this._startFadeOutTransition(r)
        : r.state === Mr.FADING_OUT && this._destroyRipple(r);
    }
    _startFadeOutTransition(r) {
      let t = r === this._mostRecentTransientRipple,
        { persistent: i } = r.config;
      (r.state = Mr.VISIBLE), !i && (!t || !this._isPointerDown) && r.fadeOut();
    }
    _destroyRipple(r) {
      let t = this._activeRipples.get(r) ?? null;
      this._activeRipples.delete(r),
        this._activeRipples.size || (this._containerRect = null),
        r === this._mostRecentTransientRipple &&
          (this._mostRecentTransientRipple = null),
        (r.state = Mr.HIDDEN),
        t !== null &&
          (r.element.removeEventListener("transitionend", t.onTransitionEnd),
          r.element.removeEventListener(
            "transitioncancel",
            t.onTransitionCancel
          ),
          t.fallbackTimer !== null && clearTimeout(t.fallbackTimer)),
        r.element.remove();
    }
    _onMousedown(r) {
      let t = kd(r),
        i =
          this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + Ib;
      !this._target.rippleDisabled &&
        !t &&
        !i &&
        ((this._isPointerDown = !0),
        this.fadeInRipple(r.clientX, r.clientY, this._target.rippleConfig));
    }
    _onTouchStart(r) {
      if (!this._target.rippleDisabled && !Ed(r)) {
        (this._lastTouchStartEvent = Date.now()), (this._isPointerDown = !0);
        let t = r.changedTouches;
        if (t)
          for (let i = 0; i < t.length; i++)
            this.fadeInRipple(
              t[i].clientX,
              t[i].clientY,
              this._target.rippleConfig
            );
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        ((this._isPointerDown = !1),
        this._getActiveRipples().forEach((r) => {
          let t =
            r.state === Mr.VISIBLE ||
            (r.config.terminateOnPointerUp && r.state === Mr.FADING_IN);
          !r.config.persistent && t && r.fadeOut();
        }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let r = this._triggerElement;
      r &&
        (C0.forEach((t) => e._eventManager.removeHandler(t, r, this)),
        this._pointerUpEventsRegistered &&
          (T0.forEach((t) => r.removeEventListener(t, this, E0)),
          (this._pointerUpEventsRegistered = !1)));
    }
  };
function Fb(e, r, t) {
  let i = Math.max(Math.abs(e - t.left), Math.abs(e - t.right)),
    n = Math.max(Math.abs(r - t.top), Math.abs(r - t.bottom));
  return Math.sqrt(i * i + n * n);
}
var Db = new Ee("mat-ripple-global-options"),
  go = (() => {
    class e {
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        t && this.fadeOutAllNonPersistent(),
          (this._disabled = t),
          this._setupTriggerEventsIfEnabled();
      }
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(t) {
        (this._trigger = t), this._setupTriggerEventsIfEnabled();
      }
      constructor(t, i, n, a, o) {
        (this._elementRef = t),
          (this._animationMode = o),
          (this.radius = 0),
          (this._disabled = !1),
          (this._isInitialized = !1),
          (this._globalOptions = a || {}),
          (this._rippleRenderer = new Ad(this, i, t, n));
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
          animation: te(
            te(
              te({}, this._globalOptions.animation),
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
      launch(t, i = 0, n) {
        return typeof t == "number"
          ? this._rippleRenderer.fadeInRipple(
              t,
              i,
              te(te({}, this.rippleConfig), n)
            )
          : this._rippleRenderer.fadeInRipple(
              0,
              0,
              te(te({}, this.rippleConfig), t)
            );
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(tt), fe(qe), fe(Dr), fe(Db, 8), fe(Vr, 8));
        };
      }
      static {
        this.ɵdir = st({
          type: e,
          selectors: [
            ["", "mat-ripple", ""],
            ["", "matRipple", ""],
          ],
          hostAttrs: [1, "mat-ripple"],
          hostVars: 2,
          hostBindings: function (i, n) {
            i & 2 && Et("mat-ripple-unbounded", n.unbounded);
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
    return e;
  })(),
  Js = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ imports: [ct, ct] });
      }
    }
    return e;
  })();
var ec = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵcmp = ut({
        type: e,
        selectors: [["div", "mat-internal-form-field", ""]],
        hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
        hostVars: 2,
        hostBindings: function (i, n) {
          i & 2 &&
            Et("mdc-form-field--align-end", n.labelPosition === "before");
        },
        inputs: { labelPosition: "labelPosition" },
        standalone: !0,
        features: [ht],
        attrs: Cb,
        ngContentSelectors: Tb,
        decls: 1,
        vars: 0,
        template: function (i, n) {
          i & 1 && ($t(), Lt(0));
        },
        styles: [
          ".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
  }
  return e;
})();
var Mb = ["*"];
var Rb = new Ee("MAT_CARD_CONFIG"),
  S0 = (() => {
    class e {
      constructor(t) {
        this.appearance = t?.appearance || "raised";
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(Rb, 8));
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["mat-card"]],
          hostAttrs: [1, "mat-mdc-card", "mdc-card"],
          hostVars: 4,
          hostBindings: function (i, n) {
            i & 2 &&
              Et("mat-mdc-card-outlined", n.appearance === "outlined")(
                "mdc-card--outlined",
                n.appearance === "outlined"
              );
          },
          inputs: { appearance: "appearance" },
          exportAs: ["matCard"],
          standalone: !0,
          features: [ht],
          ngContentSelectors: Mb,
          decls: 1,
          vars: 0,
          template: function (i, n) {
            i & 1 && ($t(), Lt(0));
          },
          styles: [
            '.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-app-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-app-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-app-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-app-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-app-corner-medium));border-width:var(--mdc-outlined-card-outline-width);border-color:var(--mdc-outlined-card-outline-color, var(--mat-app-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-app-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-app-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-app-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-app-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-app-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-app-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-app-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-app-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-app-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-app-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-app-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-app-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  A0 = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵdir = st({
          type: e,
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
    return e;
  })();
var I0 = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵdir = st({
        type: e,
        selectors: [["mat-card-content"]],
        hostAttrs: [1, "mat-mdc-card-content"],
        standalone: !0,
      });
    }
  }
  return e;
})();
var F0 = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [ct, hr, ct] });
    }
  }
  return e;
})();
var B0 = (() => {
    class e {
      constructor(t, i) {
        (this._renderer = t),
          (this._elementRef = i),
          (this.onChange = (n) => {}),
          (this.onTouched = () => {});
      }
      setProperty(t, i) {
        this._renderer.setProperty(this._elementRef.nativeElement, t, i);
      }
      registerOnTouched(t) {
        this.onTouched = t;
      }
      registerOnChange(t) {
        this.onChange = t;
      }
      setDisabledState(t) {
        this.setProperty("disabled", t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(ns), fe(tt));
        };
      }
      static {
        this.ɵdir = st({ type: e });
      }
    }
    return e;
  })(),
  Nb = (() => {
    class e extends B0 {
      static {
        this.ɵfac = (() => {
          let t;
          return function (n) {
            return (t || (t = ti(e)))(n || e);
          };
        })();
      }
      static {
        this.ɵdir = st({ type: e, features: [on] });
      }
    }
    return e;
  })(),
  aa = new Ee("");
var Pb = { provide: aa, useExisting: nn(() => j0), multi: !0 };
function Lb() {
  let e = Pi() ? Pi().getUserAgent() : "";
  return /android (\d+)/.test(e.toLowerCase());
}
var Bb = new Ee(""),
  j0 = (() => {
    class e extends B0 {
      constructor(t, i, n) {
        super(t, i),
          (this._compositionMode = n),
          (this._composing = !1),
          this._compositionMode == null && (this._compositionMode = !Lb());
      }
      writeValue(t) {
        let i = t ?? "";
        this.setProperty("value", i);
      }
      _handleInput(t) {
        (!this._compositionMode ||
          (this._compositionMode && !this._composing)) &&
          this.onChange(t);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(t) {
        (this._composing = !1), this._compositionMode && this.onChange(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(ns), fe(tt), fe(Bb, 8));
        };
      }
      static {
        this.ɵdir = st({
          type: e,
          selectors: [
            ["input", "formControlName", "", 3, "type", "checkbox"],
            ["textarea", "formControlName", ""],
            ["input", "formControl", "", 3, "type", "checkbox"],
            ["textarea", "formControl", ""],
            ["input", "ngModel", "", 3, "type", "checkbox"],
            ["textarea", "ngModel", ""],
            ["", "ngDefaultControl", ""],
          ],
          hostBindings: function (i, n) {
            i & 1 &&
              Ke("input", function (o) {
                return n._handleInput(o.target.value);
              })("blur", function () {
                return n.onTouched();
              })("compositionstart", function () {
                return n._compositionStart();
              })("compositionend", function (o) {
                return n._compositionEnd(o.target.value);
              });
          },
          features: [zr([Pb]), on],
        });
      }
    }
    return e;
  })();
var Rd = new Ee(""),
  jb = new Ee("");
function V0(e) {
  return e != null;
}
function U0(e) {
  return us(e) ? nr(e) : e;
}
function z0(e) {
  let r = {};
  return (
    e.forEach((t) => {
      r = t != null ? te(te({}, r), t) : r;
    }),
    Object.keys(r).length === 0 ? null : r
  );
}
function H0(e, r) {
  return r.map((t) => t(e));
}
function Vb(e) {
  return !e.validate;
}
function W0(e) {
  return e.map((r) => (Vb(r) ? r : (t) => r.validate(t)));
}
function Ub(e) {
  if (!e) return null;
  let r = e.filter(V0);
  return r.length == 0
    ? null
    : function (t) {
        return z0(H0(t, r));
      };
}
function G0(e) {
  return e != null ? Ub(W0(e)) : null;
}
function zb(e) {
  if (!e) return null;
  let r = e.filter(V0);
  return r.length == 0
    ? null
    : function (t) {
        let i = H0(t, r).map(U0);
        return Mn(i).pipe(Se(z0));
      };
}
function $0(e) {
  return e != null ? zb(W0(e)) : null;
}
function D0(e, r) {
  return e === null ? [r] : Array.isArray(e) ? [...e, r] : [e, r];
}
function Hb(e) {
  return e._rawValidators;
}
function Wb(e) {
  return e._rawAsyncValidators;
}
function Id(e) {
  return e ? (Array.isArray(e) ? e : [e]) : [];
}
function rc(e, r) {
  return Array.isArray(e) ? e.includes(r) : e === r;
}
function M0(e, r) {
  let t = Id(r);
  return (
    Id(e).forEach((n) => {
      rc(t, n) || t.push(n);
    }),
    t
  );
}
function R0(e, r) {
  return Id(r).filter((t) => !rc(e, t));
}
var ic = class {
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
    _setValidators(r) {
      (this._rawValidators = r || []),
        (this._composedValidatorFn = G0(this._rawValidators));
    }
    _setAsyncValidators(r) {
      (this._rawAsyncValidators = r || []),
        (this._composedAsyncValidatorFn = $0(this._rawAsyncValidators));
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _registerOnDestroy(r) {
      this._onDestroyCallbacks.push(r);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((r) => r()),
        (this._onDestroyCallbacks = []);
    }
    reset(r = void 0) {
      this.control && this.control.reset(r);
    }
    hasError(r, t) {
      return this.control ? this.control.hasError(r, t) : !1;
    }
    getError(r, t) {
      return this.control ? this.control.getError(r, t) : null;
    }
  },
  Fd = class extends ic {
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  yo = class extends ic {
    constructor() {
      super(...arguments),
        (this._parent = null),
        (this.name = null),
        (this.valueAccessor = null);
    }
  },
  Dd = class {
    constructor(r) {
      this._cd = r;
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
  Gb = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  RM = Xe(te({}, Gb), { "[class.ng-submitted]": "isSubmitted" }),
  X0 = (() => {
    class e extends Dd {
      constructor(t) {
        super(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(yo, 2));
        };
      }
      static {
        this.ɵdir = st({
          type: e,
          selectors: [
            ["", "formControlName", ""],
            ["", "ngModel", ""],
            ["", "formControl", ""],
          ],
          hostVars: 14,
          hostBindings: function (i, n) {
            i & 2 &&
              Et("ng-untouched", n.isUntouched)("ng-touched", n.isTouched)(
                "ng-pristine",
                n.isPristine
              )("ng-dirty", n.isDirty)("ng-valid", n.isValid)(
                "ng-invalid",
                n.isInvalid
              )("ng-pending", n.isPending);
          },
          features: [on],
        });
      }
    }
    return e;
  })();
var vo = "VALID",
  tc = "INVALID",
  ra = "PENDING",
  xo = "DISABLED",
  na = class {},
  nc = class extends na {
    constructor(r, t) {
      super(), (this.value = r), (this.source = t);
    }
  },
  _o = class extends na {
    constructor(r, t) {
      super(), (this.pristine = r), (this.source = t);
    }
  },
  bo = class extends na {
    constructor(r, t) {
      super(), (this.touched = r), (this.source = t);
    }
  },
  ia = class extends na {
    constructor(r, t) {
      super(), (this.status = r), (this.source = t);
    }
  };
function $b(e) {
  return (ac(e) ? e.validators : e) || null;
}
function Xb(e) {
  return Array.isArray(e) ? G0(e) : e || null;
}
function qb(e, r) {
  return (ac(r) ? r.asyncValidators : e) || null;
}
function Kb(e) {
  return Array.isArray(e) ? $0(e) : e || null;
}
function ac(e) {
  return e != null && !Array.isArray(e) && typeof e == "object";
}
var Md = class {
  constructor(r, t) {
    (this._pendingDirty = !1),
      (this._hasOwnPendingAsyncValidator = null),
      (this._pendingTouched = !1),
      (this._onCollectionChange = () => {}),
      (this._parent = null),
      (this._status = hs(() => this.statusReactive())),
      (this.statusReactive = as(void 0)),
      (this._pristine = hs(() => this.pristineReactive())),
      (this.pristineReactive = as(!0)),
      (this._touched = hs(() => this.touchedReactive())),
      (this.touchedReactive = as(!1)),
      (this._events = new zt()),
      (this.events = this._events.asObservable()),
      (this._onDisabledChange = []),
      this._assignValidators(r),
      this._assignAsyncValidators(t);
  }
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(r) {
    this._rawValidators = this._composedValidatorFn = r;
  }
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(r) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = r;
  }
  get parent() {
    return this._parent;
  }
  get status() {
    return cn(this.statusReactive);
  }
  set status(r) {
    cn(() => this.statusReactive.set(r));
  }
  get valid() {
    return this.status === vo;
  }
  get invalid() {
    return this.status === tc;
  }
  get pending() {
    return this.status == ra;
  }
  get disabled() {
    return this.status === xo;
  }
  get enabled() {
    return this.status !== xo;
  }
  get pristine() {
    return cn(this.pristineReactive);
  }
  set pristine(r) {
    cn(() => this.pristineReactive.set(r));
  }
  get dirty() {
    return !this.pristine;
  }
  get touched() {
    return cn(this.touchedReactive);
  }
  set touched(r) {
    cn(() => this.touchedReactive.set(r));
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
  setValidators(r) {
    this._assignValidators(r);
  }
  setAsyncValidators(r) {
    this._assignAsyncValidators(r);
  }
  addValidators(r) {
    this.setValidators(M0(r, this._rawValidators));
  }
  addAsyncValidators(r) {
    this.setAsyncValidators(M0(r, this._rawAsyncValidators));
  }
  removeValidators(r) {
    this.setValidators(R0(r, this._rawValidators));
  }
  removeAsyncValidators(r) {
    this.setAsyncValidators(R0(r, this._rawAsyncValidators));
  }
  hasValidator(r) {
    return rc(this._rawValidators, r);
  }
  hasAsyncValidator(r) {
    return rc(this._rawAsyncValidators, r);
  }
  clearValidators() {
    this.validator = null;
  }
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(r = {}) {
    let t = this.touched === !1;
    this.touched = !0;
    let i = r.sourceControl ?? this;
    this._parent &&
      !r.onlySelf &&
      this._parent.markAsTouched(Xe(te({}, r), { sourceControl: i })),
      t && r.emitEvent !== !1 && this._events.next(new bo(!0, i));
  }
  markAllAsTouched(r = {}) {
    this.markAsTouched({
      onlySelf: !0,
      emitEvent: r.emitEvent,
      sourceControl: this,
    }),
      this._forEachChild((t) => t.markAllAsTouched(r));
  }
  markAsUntouched(r = {}) {
    let t = this.touched === !0;
    (this.touched = !1), (this._pendingTouched = !1);
    let i = r.sourceControl ?? this;
    this._forEachChild((n) => {
      n.markAsUntouched({
        onlySelf: !0,
        emitEvent: r.emitEvent,
        sourceControl: i,
      });
    }),
      this._parent && !r.onlySelf && this._parent._updateTouched(r, i),
      t && r.emitEvent !== !1 && this._events.next(new bo(!1, i));
  }
  markAsDirty(r = {}) {
    let t = this.pristine === !0;
    this.pristine = !1;
    let i = r.sourceControl ?? this;
    this._parent &&
      !r.onlySelf &&
      this._parent.markAsDirty(Xe(te({}, r), { sourceControl: i })),
      t && r.emitEvent !== !1 && this._events.next(new _o(!1, i));
  }
  markAsPristine(r = {}) {
    let t = this.pristine === !1;
    (this.pristine = !0), (this._pendingDirty = !1);
    let i = r.sourceControl ?? this;
    this._forEachChild((n) => {
      n.markAsPristine({ onlySelf: !0, emitEvent: r.emitEvent });
    }),
      this._parent && !r.onlySelf && this._parent._updatePristine(r, i),
      t && r.emitEvent !== !1 && this._events.next(new _o(!0, i));
  }
  markAsPending(r = {}) {
    this.status = ra;
    let t = r.sourceControl ?? this;
    r.emitEvent !== !1 &&
      (this._events.next(new ia(this.status, t)),
      this.statusChanges.emit(this.status)),
      this._parent &&
        !r.onlySelf &&
        this._parent.markAsPending(Xe(te({}, r), { sourceControl: t }));
  }
  disable(r = {}) {
    let t = this._parentMarkedDirty(r.onlySelf);
    (this.status = xo),
      (this.errors = null),
      this._forEachChild((n) => {
        n.disable(Xe(te({}, r), { onlySelf: !0 }));
      }),
      this._updateValue();
    let i = r.sourceControl ?? this;
    r.emitEvent !== !1 &&
      (this._events.next(new nc(this.value, i)),
      this._events.next(new ia(this.status, i)),
      this.valueChanges.emit(this.value),
      this.statusChanges.emit(this.status)),
      this._updateAncestors(Xe(te({}, r), { skipPristineCheck: t }), this),
      this._onDisabledChange.forEach((n) => n(!0));
  }
  enable(r = {}) {
    let t = this._parentMarkedDirty(r.onlySelf);
    (this.status = vo),
      this._forEachChild((i) => {
        i.enable(Xe(te({}, r), { onlySelf: !0 }));
      }),
      this.updateValueAndValidity({ onlySelf: !0, emitEvent: r.emitEvent }),
      this._updateAncestors(Xe(te({}, r), { skipPristineCheck: t }), this),
      this._onDisabledChange.forEach((i) => i(!1));
  }
  _updateAncestors(r, t) {
    this._parent &&
      !r.onlySelf &&
      (this._parent.updateValueAndValidity(r),
      r.skipPristineCheck || this._parent._updatePristine({}, t),
      this._parent._updateTouched({}, t));
  }
  setParent(r) {
    this._parent = r;
  }
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(r = {}) {
    if ((this._setInitialStatus(), this._updateValue(), this.enabled)) {
      let i = this._cancelExistingSubscription();
      (this.errors = this._runValidator()),
        (this.status = this._calculateStatus()),
        (this.status === vo || this.status === ra) &&
          this._runAsyncValidator(i, r.emitEvent);
    }
    let t = r.sourceControl ?? this;
    r.emitEvent !== !1 &&
      (this._events.next(new nc(this.value, t)),
      this._events.next(new ia(this.status, t)),
      this.valueChanges.emit(this.value),
      this.statusChanges.emit(this.status)),
      this._parent &&
        !r.onlySelf &&
        this._parent.updateValueAndValidity(
          Xe(te({}, r), { sourceControl: t })
        );
  }
  _updateTreeValidity(r = { emitEvent: !0 }) {
    this._forEachChild((t) => t._updateTreeValidity(r)),
      this.updateValueAndValidity({ onlySelf: !0, emitEvent: r.emitEvent });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? xo : vo;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(r, t) {
    if (this.asyncValidator) {
      (this.status = ra),
        (this._hasOwnPendingAsyncValidator = { emitEvent: t !== !1 });
      let i = U0(this.asyncValidator(this));
      this._asyncValidationSubscription = i.subscribe((n) => {
        (this._hasOwnPendingAsyncValidator = null),
          this.setErrors(n, { emitEvent: t, shouldHaveEmitted: r });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      let r = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
      return (this._hasOwnPendingAsyncValidator = null), r;
    }
    return !1;
  }
  setErrors(r, t = {}) {
    (this.errors = r),
      this._updateControlsErrors(t.emitEvent !== !1, this, t.shouldHaveEmitted);
  }
  get(r) {
    let t = r;
    return t == null || (Array.isArray(t) || (t = t.split(".")), t.length === 0)
      ? null
      : t.reduce((i, n) => i && i._find(n), this);
  }
  getError(r, t) {
    let i = t ? this.get(t) : this;
    return i && i.errors ? i.errors[r] : null;
  }
  hasError(r, t) {
    return !!this.getError(r, t);
  }
  get root() {
    let r = this;
    for (; r._parent; ) r = r._parent;
    return r;
  }
  _updateControlsErrors(r, t, i) {
    (this.status = this._calculateStatus()),
      r && this.statusChanges.emit(this.status),
      (r || i) && this._events.next(new ia(this.status, t)),
      this._parent && this._parent._updateControlsErrors(r, t, i);
  }
  _initObservables() {
    (this.valueChanges = new ft()), (this.statusChanges = new ft());
  }
  _calculateStatus() {
    return this._allControlsDisabled()
      ? xo
      : this.errors
      ? tc
      : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(ra)
      ? ra
      : this._anyControlsHaveStatus(tc)
      ? tc
      : vo;
  }
  _anyControlsHaveStatus(r) {
    return this._anyControls((t) => t.status === r);
  }
  _anyControlsDirty() {
    return this._anyControls((r) => r.dirty);
  }
  _anyControlsTouched() {
    return this._anyControls((r) => r.touched);
  }
  _updatePristine(r, t) {
    let i = !this._anyControlsDirty(),
      n = this.pristine !== i;
    (this.pristine = i),
      this._parent && !r.onlySelf && this._parent._updatePristine(r, t),
      n && this._events.next(new _o(this.pristine, t));
  }
  _updateTouched(r = {}, t) {
    (this.touched = this._anyControlsTouched()),
      this._events.next(new bo(this.touched, t)),
      this._parent && !r.onlySelf && this._parent._updateTouched(r, t);
  }
  _registerOnCollectionChange(r) {
    this._onCollectionChange = r;
  }
  _setUpdateStrategy(r) {
    ac(r) && r.updateOn != null && (this._updateOn = r.updateOn);
  }
  _parentMarkedDirty(r) {
    let t = this._parent && this._parent.dirty;
    return !r && !!t && !this._parent._anyControlsDirty();
  }
  _find(r) {
    return null;
  }
  _assignValidators(r) {
    (this._rawValidators = Array.isArray(r) ? r.slice() : r),
      (this._composedValidatorFn = Xb(this._rawValidators));
  }
  _assignAsyncValidators(r) {
    (this._rawAsyncValidators = Array.isArray(r) ? r.slice() : r),
      (this._composedAsyncValidatorFn = Kb(this._rawAsyncValidators));
  }
};
var q0 = new Ee("CallSetDisabledState", {
    providedIn: "root",
    factory: () => Od,
  }),
  Od = "always";
function Yb(e, r) {
  return [...r.path, e];
}
function Zb(e, r, t = Od) {
  Jb(e, r),
    r.valueAccessor.writeValue(e.value),
    (e.disabled || t === "always") &&
      r.valueAccessor.setDisabledState?.(e.disabled),
    e1(e, r),
    r1(e, r),
    t1(e, r),
    Qb(e, r);
}
function O0(e, r) {
  e.forEach((t) => {
    t.registerOnValidatorChange && t.registerOnValidatorChange(r);
  });
}
function Qb(e, r) {
  if (r.valueAccessor.setDisabledState) {
    let t = (i) => {
      r.valueAccessor.setDisabledState(i);
    };
    e.registerOnDisabledChange(t),
      r._registerOnDestroy(() => {
        e._unregisterOnDisabledChange(t);
      });
  }
}
function Jb(e, r) {
  let t = Hb(e);
  r.validator !== null
    ? e.setValidators(D0(t, r.validator))
    : typeof t == "function" && e.setValidators([t]);
  let i = Wb(e);
  r.asyncValidator !== null
    ? e.setAsyncValidators(D0(i, r.asyncValidator))
    : typeof i == "function" && e.setAsyncValidators([i]);
  let n = () => e.updateValueAndValidity();
  O0(r._rawValidators, n), O0(r._rawAsyncValidators, n);
}
function e1(e, r) {
  r.valueAccessor.registerOnChange((t) => {
    (e._pendingValue = t),
      (e._pendingChange = !0),
      (e._pendingDirty = !0),
      e.updateOn === "change" && K0(e, r);
  });
}
function t1(e, r) {
  r.valueAccessor.registerOnTouched(() => {
    (e._pendingTouched = !0),
      e.updateOn === "blur" && e._pendingChange && K0(e, r),
      e.updateOn !== "submit" && e.markAsTouched();
  });
}
function K0(e, r) {
  e._pendingDirty && e.markAsDirty(),
    e.setValue(e._pendingValue, { emitModelToViewChange: !1 }),
    r.viewToModelUpdate(e._pendingValue),
    (e._pendingChange = !1);
}
function r1(e, r) {
  let t = (i, n) => {
    r.valueAccessor.writeValue(i), n && r.viewToModelUpdate(i);
  };
  e.registerOnChange(t),
    r._registerOnDestroy(() => {
      e._unregisterOnChange(t);
    });
}
function i1(e, r) {
  if (!e.hasOwnProperty("model")) return !1;
  let t = e.model;
  return t.isFirstChange() ? !0 : !Object.is(r, t.currentValue);
}
function n1(e) {
  return Object.getPrototypeOf(e.constructor) === Nb;
}
function a1(e, r) {
  if (!r) return null;
  Array.isArray(r);
  let t, i, n;
  return (
    r.forEach((a) => {
      a.constructor === j0 ? (t = a) : n1(a) ? (i = a) : (n = a);
    }),
    n || i || t || null
  );
}
function N0(e, r) {
  let t = e.indexOf(r);
  t > -1 && e.splice(t, 1);
}
function P0(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    Object.keys(e).length === 2 &&
    "value" in e &&
    "disabled" in e
  );
}
var o1 = class extends Md {
  constructor(r = null, t, i) {
    super($b(t), qb(i, t)),
      (this.defaultValue = null),
      (this._onChange = []),
      (this._pendingChange = !1),
      this._applyFormState(r),
      this._setUpdateStrategy(t),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      ac(t) &&
        (t.nonNullable || t.initialValueIsDefault) &&
        (P0(r) ? (this.defaultValue = r.value) : (this.defaultValue = r));
  }
  setValue(r, t = {}) {
    (this.value = this._pendingValue = r),
      this._onChange.length &&
        t.emitModelToViewChange !== !1 &&
        this._onChange.forEach((i) =>
          i(this.value, t.emitViewToModelChange !== !1)
        ),
      this.updateValueAndValidity(t);
  }
  patchValue(r, t = {}) {
    this.setValue(r, t);
  }
  reset(r = this.defaultValue, t = {}) {
    this._applyFormState(r),
      this.markAsPristine(t),
      this.markAsUntouched(t),
      this.setValue(this.value, t),
      (this._pendingChange = !1);
  }
  _updateValue() {}
  _anyControls(r) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(r) {
    this._onChange.push(r);
  }
  _unregisterOnChange(r) {
    N0(this._onChange, r);
  }
  registerOnDisabledChange(r) {
    this._onDisabledChange.push(r);
  }
  _unregisterOnDisabledChange(r) {
    N0(this._onDisabledChange, r);
  }
  _forEachChild(r) {}
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
  _applyFormState(r) {
    P0(r)
      ? ((this.value = this._pendingValue = r.value),
        r.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : (this.value = this._pendingValue = r);
  }
};
var s1 = { provide: yo, useExisting: nn(() => Nd) },
  L0 = Promise.resolve(),
  Nd = (() => {
    class e extends yo {
      constructor(t, i, n, a, o, s) {
        super(),
          (this._changeDetectorRef = o),
          (this.callSetDisabledState = s),
          (this.control = new o1()),
          (this._registered = !1),
          (this.name = ""),
          (this.update = new ft()),
          (this._parent = t),
          this._setValidators(i),
          this._setAsyncValidators(n),
          (this.valueAccessor = a1(this, a));
      }
      ngOnChanges(t) {
        if ((this._checkForErrors(), !this._registered || "name" in t)) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let i = t.name.previousValue;
            this.formDirective.removeControl({
              name: i,
              path: this._getPath(i),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in t && this._updateDisabled(t),
          i1(t, this.viewModel) &&
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
      viewToModelUpdate(t) {
        (this.viewModel = t), this.update.emit(t);
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
        Zb(this.control, this, this.callSetDisabledState),
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
      _updateValue(t) {
        L0.then(() => {
          this.control.setValue(t, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(t) {
        let i = t.isDisabled.currentValue,
          n = i !== 0 && vt(i);
        L0.then(() => {
          n && !this.control.disabled
            ? this.control.disable()
            : !n && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(t) {
        return this._parent ? Yb(t, this._parent) : [t];
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(
            fe(Fd, 9),
            fe(Rd, 10),
            fe(jb, 10),
            fe(aa, 10),
            fe(Xt, 8),
            fe(q0, 8)
          );
        };
      }
      static {
        this.ɵdir = st({
          type: e,
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
          features: [zr([s1]), on, ei],
        });
      }
    }
    return e;
  })();
var c1 = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({});
    }
  }
  return e;
})();
var Y0 = (() => {
  class e {
    static withConfig(t) {
      return {
        ngModule: e,
        providers: [{ provide: q0, useValue: t.callSetDisabledState ?? Od }],
      };
    }
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [c1] });
    }
  }
  return e;
})();
var d1 = ["*"],
  oc;
function u1() {
  if (oc === void 0 && ((oc = null), typeof window < "u")) {
    let e = window;
    e.trustedTypes !== void 0 &&
      (oc = e.trustedTypes.createPolicy("angular#components", {
        createHTML: (r) => r,
      }));
  }
  return oc;
}
function wo(e) {
  return u1()?.createHTML(e) || e;
}
function Z0(e) {
  return Error(`Unable to find icon with the name "${e}"`);
}
function f1() {
  return Error(
    "Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers."
  );
}
function Q0(e) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${e}".`
  );
}
function J0(e) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${e}".`
  );
}
var yi = class {
    constructor(r, t, i) {
      (this.url = r), (this.svgText = t), (this.options = i);
    }
  },
  h1 = (() => {
    class e {
      constructor(t, i, n, a) {
        (this._httpClient = t),
          (this._sanitizer = i),
          (this._errorHandler = a),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
          (this._document = n);
      }
      addSvgIcon(t, i, n) {
        return this.addSvgIconInNamespace("", t, i, n);
      }
      addSvgIconLiteral(t, i, n) {
        return this.addSvgIconLiteralInNamespace("", t, i, n);
      }
      addSvgIconInNamespace(t, i, n, a) {
        return this._addSvgIconConfig(t, i, new yi(n, null, a));
      }
      addSvgIconResolver(t) {
        return this._resolvers.push(t), this;
      }
      addSvgIconLiteralInNamespace(t, i, n, a) {
        let o = this._sanitizer.sanitize(vr.HTML, n);
        if (!o) throw J0(n);
        let s = wo(o);
        return this._addSvgIconConfig(t, i, new yi("", s, a));
      }
      addSvgIconSet(t, i) {
        return this.addSvgIconSetInNamespace("", t, i);
      }
      addSvgIconSetLiteral(t, i) {
        return this.addSvgIconSetLiteralInNamespace("", t, i);
      }
      addSvgIconSetInNamespace(t, i, n) {
        return this._addSvgIconSetConfig(t, new yi(i, null, n));
      }
      addSvgIconSetLiteralInNamespace(t, i, n) {
        let a = this._sanitizer.sanitize(vr.HTML, i);
        if (!a) throw J0(i);
        let o = wo(a);
        return this._addSvgIconSetConfig(t, new yi("", o, n));
      }
      registerFontClassAlias(t, i = t) {
        return this._fontCssClassesByAlias.set(t, i), this;
      }
      classNameForFontAlias(t) {
        return this._fontCssClassesByAlias.get(t) || t;
      }
      setDefaultFontSetClass(...t) {
        return (this._defaultFontSetClass = t), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(t) {
        let i = this._sanitizer.sanitize(vr.RESOURCE_URL, t);
        if (!i) throw Q0(t);
        let n = this._cachedIconsByUrl.get(i);
        return n
          ? ke(sc(n))
          : this._loadSvgIconFromConfig(new yi(t, null)).pipe(
              gt((a) => this._cachedIconsByUrl.set(i, a)),
              Se((a) => sc(a))
            );
      }
      getNamedSvgIcon(t, i = "") {
        let n = em(i, t),
          a = this._svgIconConfigs.get(n);
        if (a) return this._getSvgFromConfig(a);
        if (((a = this._getIconConfigFromResolvers(i, t)), a))
          return this._svgIconConfigs.set(n, a), this._getSvgFromConfig(a);
        let o = this._iconSetConfigs.get(i);
        return o ? this._getSvgFromIconSetConfigs(t, o) : tn(Z0(n));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(t) {
        return t.svgText
          ? ke(sc(this._svgElementFromConfig(t)))
          : this._loadSvgIconFromConfig(t).pipe(Se((i) => sc(i)));
      }
      _getSvgFromIconSetConfigs(t, i) {
        let n = this._extractIconWithNameFromAnySet(t, i);
        if (n) return ke(n);
        let a = i
          .filter((o) => !o.svgText)
          .map((o) =>
            this._loadSvgIconSetFromConfig(o).pipe(
              Di((s) => {
                let l = `Loading icon set URL: ${this._sanitizer.sanitize(
                  vr.RESOURCE_URL,
                  o.url
                )} failed: ${s.message}`;
                return this._errorHandler.handleError(new Error(l)), ke(null);
              })
            )
          );
        return Mn(a).pipe(
          Se(() => {
            let o = this._extractIconWithNameFromAnySet(t, i);
            if (!o) throw Z0(t);
            return o;
          })
        );
      }
      _extractIconWithNameFromAnySet(t, i) {
        for (let n = i.length - 1; n >= 0; n--) {
          let a = i[n];
          if (a.svgText && a.svgText.toString().indexOf(t) > -1) {
            let o = this._svgElementFromConfig(a),
              s = this._extractSvgIconFromSet(o, t, a.options);
            if (s) return s;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(t) {
        return this._fetchIcon(t).pipe(
          gt((i) => (t.svgText = i)),
          Se(() => this._svgElementFromConfig(t))
        );
      }
      _loadSvgIconSetFromConfig(t) {
        return t.svgText
          ? ke(null)
          : this._fetchIcon(t).pipe(gt((i) => (t.svgText = i)));
      }
      _extractSvgIconFromSet(t, i, n) {
        let a = t.querySelector(`[id="${i}"]`);
        if (!a) return null;
        let o = a.cloneNode(!0);
        if ((o.removeAttribute("id"), o.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(o, n);
        if (o.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(o), n);
        let s = this._svgElementFromString(wo("<svg></svg>"));
        return s.appendChild(o), this._setSvgAttributes(s, n);
      }
      _svgElementFromString(t) {
        let i = this._document.createElement("DIV");
        i.innerHTML = t;
        let n = i.querySelector("svg");
        if (!n) throw Error("<svg> tag not found");
        return n;
      }
      _toSvgElement(t) {
        let i = this._svgElementFromString(wo("<svg></svg>")),
          n = t.attributes;
        for (let a = 0; a < n.length; a++) {
          let { name: o, value: s } = n[a];
          o !== "id" && i.setAttribute(o, s);
        }
        for (let a = 0; a < t.childNodes.length; a++)
          t.childNodes[a].nodeType === this._document.ELEMENT_NODE &&
            i.appendChild(t.childNodes[a].cloneNode(!0));
        return i;
      }
      _setSvgAttributes(t, i) {
        return (
          t.setAttribute("fit", ""),
          t.setAttribute("height", "100%"),
          t.setAttribute("width", "100%"),
          t.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          t.setAttribute("focusable", "false"),
          i && i.viewBox && t.setAttribute("viewBox", i.viewBox),
          t
        );
      }
      _fetchIcon(t) {
        let { url: i, options: n } = t,
          a = n?.withCredentials ?? !1;
        if (!this._httpClient) throw f1();
        if (i == null) throw Error(`Cannot fetch icon from URL "${i}".`);
        let o = this._sanitizer.sanitize(vr.RESOURCE_URL, i);
        if (!o) throw Q0(i);
        let s = this._inProgressUrlFetches.get(o);
        if (s) return s;
        let c = this._httpClient
          .get(o, { responseType: "text", withCredentials: a })
          .pipe(
            Se((l) => wo(l)),
            gi(() => this._inProgressUrlFetches.delete(o)),
            Yu()
          );
        return this._inProgressUrlFetches.set(o, c), c;
      }
      _addSvgIconConfig(t, i, n) {
        return this._svgIconConfigs.set(em(t, i), n), this;
      }
      _addSvgIconSetConfig(t, i) {
        let n = this._iconSetConfigs.get(t);
        return n ? n.push(i) : this._iconSetConfigs.set(t, [i]), this;
      }
      _svgElementFromConfig(t) {
        if (!t.svgElement) {
          let i = this._svgElementFromString(t.svgText);
          this._setSvgAttributes(i, t.options), (t.svgElement = i);
        }
        return t.svgElement;
      }
      _getIconConfigFromResolvers(t, i) {
        for (let n = 0; n < this._resolvers.length; n++) {
          let a = this._resolvers[n](i, t);
          if (a)
            return m1(a) ? new yi(a.url, null, a.options) : new yi(a, null);
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(ae(xi, 8), ae(Wa), ae(Ye, 8), ae(an));
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
function sc(e) {
  return e.cloneNode(!0);
}
function em(e, r) {
  return e + ":" + r;
}
function m1(e) {
  return !!(e.url && e.options);
}
var p1 = new Ee("MAT_ICON_DEFAULT_OPTIONS"),
  g1 = new Ee("mat-icon-location", { providedIn: "root", factory: v1 });
function v1() {
  let e = he(Ye),
    r = e ? e.location : null;
  return { getPathname: () => (r ? r.pathname + r.search : "") };
}
var tm = [
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
  x1 = tm.map((e) => `[${e}]`).join(", "),
  _1 = /^url\(['"]?#(.*?)['"]?\)$/,
  rm = (() => {
    class e {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(t) {
        this._color = t;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(t) {
        t !== this._svgIcon &&
          (t
            ? this._updateSvgIcon(t)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = t));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(t) {
        let i = this._cleanupFontValue(t);
        i !== this._fontSet &&
          ((this._fontSet = i), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(t) {
        let i = this._cleanupFontValue(t);
        i !== this._fontIcon &&
          ((this._fontIcon = i), this._updateFontIconClasses());
      }
      constructor(t, i, n, a, o, s) {
        (this._elementRef = t),
          (this._iconRegistry = i),
          (this._location = a),
          (this._errorHandler = o),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = ka.EMPTY),
          s &&
            (s.color && (this.color = this._defaultColor = s.color),
            s.fontSet && (this.fontSet = s.fontSet)),
          n || t.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(t) {
        if (!t) return ["", ""];
        let i = t.split(":");
        switch (i.length) {
          case 1:
            return ["", i[0]];
          case 2:
            return i;
          default:
            throw Error(`Invalid icon name: "${t}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let t = this._elementsWithExternalReferences;
        if (t && t.size) {
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
      _setSvgElement(t) {
        this._clearSvgElement();
        let i = this._location.getPathname();
        (this._previousPath = i),
          this._cacheChildrenWithExternalReferences(t),
          this._prependPathToReferences(i),
          this._elementRef.nativeElement.appendChild(t);
      }
      _clearSvgElement() {
        let t = this._elementRef.nativeElement,
          i = t.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          i--;

        ) {
          let n = t.childNodes[i];
          (n.nodeType !== 1 || n.nodeName.toLowerCase() === "svg") &&
            n.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let t = this._elementRef.nativeElement,
          i = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((n) => n.length > 0);
        this._previousFontSetClass.forEach((n) => t.classList.remove(n)),
          i.forEach((n) => t.classList.add(n)),
          (this._previousFontSetClass = i),
          this.fontIcon !== this._previousFontIconClass &&
            !i.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              t.classList.remove(this._previousFontIconClass),
            this.fontIcon && t.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(t) {
        return typeof t == "string" ? t.trim().split(" ")[0] : t;
      }
      _prependPathToReferences(t) {
        let i = this._elementsWithExternalReferences;
        i &&
          i.forEach((n, a) => {
            n.forEach((o) => {
              a.setAttribute(o.name, `url('${t}#${o.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(t) {
        let i = t.querySelectorAll(x1),
          n = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let a = 0; a < i.length; a++)
          tm.forEach((o) => {
            let s = i[a],
              c = s.getAttribute(o),
              l = c ? c.match(_1) : null;
            if (l) {
              let d = n.get(s);
              d || ((d = []), n.set(s, d)), d.push({ name: o, value: l[1] });
            }
          });
      }
      _updateSvgIcon(t) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          t)
        ) {
          let [i, n] = this._splitIconName(t);
          i && (this._svgNamespace = i),
            n && (this._svgName = n),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(n, i)
              .pipe(Wt(1))
              .subscribe(
                (a) => this._setSvgElement(a),
                (a) => {
                  let o = `Error retrieving icon ${i}:${n}! ${a.message}`;
                  this._errorHandler.handleError(new Error(o));
                }
              ));
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(
            fe(tt),
            fe(h1),
            Ni("aria-hidden"),
            fe(g1),
            fe(an),
            fe(p1, 8)
          );
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["mat-icon"]],
          hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
          hostVars: 10,
          hostBindings: function (i, n) {
            i & 2 &&
              (Dt("data-mat-icon-type", n._usingFontIcon() ? "font" : "svg")(
                "data-mat-icon-name",
                n._svgName || n.fontIcon
              )("data-mat-icon-namespace", n._svgNamespace || n.fontSet)(
                "fontIcon",
                n._usingFontIcon() ? n.fontIcon : null
              ),
              vi(n.color ? "mat-" + n.color : ""),
              Et("mat-icon-inline", n.inline)(
                "mat-icon-no-color",
                n.color !== "primary" &&
                  n.color !== "accent" &&
                  n.color !== "warn"
              ));
          },
          inputs: {
            color: "color",
            inline: [2, "inline", "inline", vt],
            svgIcon: "svgIcon",
            fontSet: "fontSet",
            fontIcon: "fontIcon",
          },
          exportAs: ["matIcon"],
          standalone: !0,
          features: [xr, ht],
          ngContentSelectors: d1,
          decls: 1,
          vars: 0,
          template: function (i, n) {
            i & 1 && ($t(), Lt(0));
          },
          styles: [
            "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  cc = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ imports: [ct, ct] });
      }
    }
    return e;
  })();
var im = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [ct, Js, ct] });
    }
  }
  return e;
})();
var y1 = ["*", [["mat-toolbar-row"]]],
  w1 = ["*", "mat-toolbar-row"],
  k1 = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵdir = st({
          type: e,
          selectors: [["mat-toolbar-row"]],
          hostAttrs: [1, "mat-toolbar-row"],
          exportAs: ["matToolbarRow"],
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  lc = (() => {
    class e {
      constructor(t, i, n) {
        (this._elementRef = t), (this._platform = i), (this._document = n);
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
          return new (i || e)(fe(tt), fe(Dr), fe(Ye));
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["mat-toolbar"]],
          contentQueries: function (i, n, a) {
            if ((i & 1 && Bn(a, k1, 5), i & 2)) {
              let o;
              or((o = sr())) && (n._toolbarRows = o);
            }
          },
          hostAttrs: [1, "mat-toolbar"],
          hostVars: 6,
          hostBindings: function (i, n) {
            i & 2 &&
              (vi(n.color ? "mat-" + n.color : ""),
              Et("mat-toolbar-multiple-rows", n._toolbarRows.length > 0)(
                "mat-toolbar-single-row",
                n._toolbarRows.length === 0
              ));
          },
          inputs: { color: "color" },
          exportAs: ["matToolbar"],
          standalone: !0,
          features: [ht],
          ngContentSelectors: w1,
          decls: 2,
          vars: 0,
          template: function (i, n) {
            i & 1 && ($t(y1), Lt(0), Lt(1, 1));
          },
          styles: [
            ".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}",
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })();
var dc = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [ct, ct] });
    }
  }
  return e;
})();
var E1 = ["input"],
  C1 = ["label"],
  T1 = ["*"],
  S1 = new Ee("mat-checkbox-default-options", {
    providedIn: "root",
    factory: om,
  });
function om() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: !1,
  };
}
var qt = (function (e) {
    return (
      (e[(e.Init = 0)] = "Init"),
      (e[(e.Checked = 1)] = "Checked"),
      (e[(e.Unchecked = 2)] = "Unchecked"),
      (e[(e.Indeterminate = 3)] = "Indeterminate"),
      e
    );
  })(qt || {}),
  A1 = { provide: aa, useExisting: nn(() => uc), multi: !0 },
  Pd = class {},
  I1 = 0,
  am = om(),
  uc = (() => {
    class e {
      focus() {
        this._inputElement.nativeElement.focus();
      }
      _createChangeEvent(t) {
        let i = new Pd();
        return (i.source = this), (i.checked = t), i;
      }
      _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
      }
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor(t, i, n, a, o, s) {
        (this._elementRef = t),
          (this._changeDetectorRef = i),
          (this._ngZone = n),
          (this._animationMode = o),
          (this._options = s),
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
          (this.change = new ft()),
          (this.indeterminateChange = new ft()),
          (this._onTouched = () => {}),
          (this._currentAnimationClass = ""),
          (this._currentCheckState = qt.Init),
          (this._controlValueAccessorChangeFn = () => {}),
          (this._validatorChangeFn = () => {}),
          (this._checked = !1),
          (this._disabled = !1),
          (this._indeterminate = !1),
          (this._options = this._options || am),
          (this.color = this._options.color || am.color),
          (this.tabIndex = parseInt(a) || 0),
          (this.id = this._uniqueId = `mat-mdc-checkbox-${++I1}`),
          (this.disabledInteractive = s?.disabledInteractive ?? !1);
      }
      ngOnChanges(t) {
        t.required && this._validatorChangeFn();
      }
      ngAfterViewInit() {
        this._syncIndeterminate(this._indeterminate);
      }
      get checked() {
        return this._checked;
      }
      set checked(t) {
        t != this.checked &&
          ((this._checked = t), this._changeDetectorRef.markForCheck());
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        t !== this.disabled &&
          ((this._disabled = t), this._changeDetectorRef.markForCheck());
      }
      get indeterminate() {
        return this._indeterminate;
      }
      set indeterminate(t) {
        let i = t != this._indeterminate;
        (this._indeterminate = t),
          i &&
            (this._indeterminate
              ? this._transitionCheckState(qt.Indeterminate)
              : this._transitionCheckState(
                  this.checked ? qt.Checked : qt.Unchecked
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
      writeValue(t) {
        this.checked = !!t;
      }
      registerOnChange(t) {
        this._controlValueAccessorChangeFn = t;
      }
      registerOnTouched(t) {
        this._onTouched = t;
      }
      setDisabledState(t) {
        this.disabled = t;
      }
      validate(t) {
        return this.required && t.value !== !0 ? { required: !0 } : null;
      }
      registerOnValidatorChange(t) {
        this._validatorChangeFn = t;
      }
      _transitionCheckState(t) {
        let i = this._currentCheckState,
          n = this._getAnimationTargetElement();
        if (
          !(i === t || !n) &&
          (this._currentAnimationClass &&
            n.classList.remove(this._currentAnimationClass),
          (this._currentAnimationClass =
            this._getAnimationClassForCheckStateTransition(i, t)),
          (this._currentCheckState = t),
          this._currentAnimationClass.length > 0)
        ) {
          n.classList.add(this._currentAnimationClass);
          let a = this._currentAnimationClass;
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              n.classList.remove(a);
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
        let t = this._options?.clickAction;
        !this.disabled && t !== "noop"
          ? (this.indeterminate &&
              t !== "check" &&
              Promise.resolve().then(() => {
                (this._indeterminate = !1),
                  this.indeterminateChange.emit(this._indeterminate);
              }),
            (this._checked = !this._checked),
            this._transitionCheckState(
              this._checked ? qt.Checked : qt.Unchecked
            ),
            this._emitChangeEvent())
          : ((this.disabled && this.disabledInteractive) ||
              (!this.disabled && t === "noop")) &&
            ((this._inputElement.nativeElement.checked = this.checked),
            (this._inputElement.nativeElement.indeterminate =
              this.indeterminate));
      }
      _onInteractionEvent(t) {
        t.stopPropagation();
      }
      _onBlur() {
        Promise.resolve().then(() => {
          this._onTouched(), this._changeDetectorRef.markForCheck();
        });
      }
      _getAnimationClassForCheckStateTransition(t, i) {
        if (this._animationMode === "NoopAnimations") return "";
        switch (t) {
          case qt.Init:
            if (i === qt.Checked)
              return this._animationClasses.uncheckedToChecked;
            if (i == qt.Indeterminate)
              return this._checked
                ? this._animationClasses.checkedToIndeterminate
                : this._animationClasses.uncheckedToIndeterminate;
            break;
          case qt.Unchecked:
            return i === qt.Checked
              ? this._animationClasses.uncheckedToChecked
              : this._animationClasses.uncheckedToIndeterminate;
          case qt.Checked:
            return i === qt.Unchecked
              ? this._animationClasses.checkedToUnchecked
              : this._animationClasses.checkedToIndeterminate;
          case qt.Indeterminate:
            return i === qt.Checked
              ? this._animationClasses.indeterminateToChecked
              : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
      }
      _syncIndeterminate(t) {
        let i = this._inputElement;
        i && (i.nativeElement.indeterminate = t);
      }
      _onInputClick() {
        this._handleInputClick();
      }
      _onTouchTargetClick() {
        this._handleInputClick(),
          this.disabled || this._inputElement.nativeElement.focus();
      }
      _preventBubblingFromLabel(t) {
        t.target &&
          this._labelElement.nativeElement.contains(t.target) &&
          t.stopPropagation();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(
            fe(tt),
            fe(Xt),
            fe(qe),
            Ni("tabindex"),
            fe(Vr, 8),
            fe(S1, 8)
          );
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["mat-checkbox"]],
          viewQuery: function (i, n) {
            if ((i & 1 && (Ur(E1, 5), Ur(C1, 5), Ur(go, 5)), i & 2)) {
              let a;
              or((a = sr())) && (n._inputElement = a.first),
                or((a = sr())) && (n._labelElement = a.first),
                or((a = sr())) && (n.ripple = a.first);
            }
          },
          hostAttrs: [1, "mat-mdc-checkbox"],
          hostVars: 16,
          hostBindings: function (i, n) {
            i & 2 &&
              (Ma("id", n.id),
              Dt("tabindex", null)("aria-label", null)("aria-labelledby", null),
              vi(n.color ? "mat-" + n.color : "mat-accent"),
              Et(
                "_mat-animation-noopable",
                n._animationMode === "NoopAnimations"
              )("mdc-checkbox--disabled", n.disabled)(
                "mat-mdc-checkbox-disabled",
                n.disabled
              )("mat-mdc-checkbox-checked", n.checked)(
                "mat-mdc-checkbox-disabled-interactive",
                n.disabledInteractive
              ));
          },
          inputs: {
            ariaLabel: [0, "aria-label", "ariaLabel"],
            ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
            ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
            id: "id",
            required: [2, "required", "required", vt],
            labelPosition: "labelPosition",
            name: "name",
            value: "value",
            disableRipple: [2, "disableRipple", "disableRipple", vt],
            tabIndex: [
              2,
              "tabIndex",
              "tabIndex",
              (t) => (t == null ? void 0 : Oa(t)),
            ],
            color: "color",
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              vt,
            ],
            checked: [2, "checked", "checked", vt],
            disabled: [2, "disabled", "disabled", vt],
            indeterminate: [2, "indeterminate", "indeterminate", vt],
          },
          outputs: {
            change: "change",
            indeterminateChange: "indeterminateChange",
          },
          exportAs: ["matCheckbox"],
          standalone: !0,
          features: [
            zr([A1, { provide: Rd, useExisting: e, multi: !0 }]),
            xr,
            ei,
            ht,
          ],
          ngContentSelectors: T1,
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
          template: function (i, n) {
            if (i & 1) {
              let a = ri();
              $t(),
                H(0, "div", 3),
                Ke("click", function (s) {
                  return Le(a), Be(n._preventBubblingFromLabel(s));
                }),
                H(1, "div", 4, 0)(3, "div", 5),
                Ke("click", function () {
                  return Le(a), Be(n._onTouchTargetClick());
                }),
                W(),
                H(4, "input", 6, 1),
                Ke("blur", function () {
                  return Le(a), Be(n._onBlur());
                })("click", function () {
                  return Le(a), Be(n._onInputClick());
                })("change", function (s) {
                  return Le(a), Be(n._onInteractionEvent(s));
                }),
                W(),
                Ge(6, "div", 7),
                H(7, "div", 8),
                ts(),
                H(8, "svg", 9),
                Ge(9, "path", 10),
                W(),
                rs(),
                Ge(10, "div", 11),
                W(),
                Ge(11, "div", 12),
                W(),
                H(12, "label", 13, 2),
                Lt(14),
                W()();
            }
            if (i & 2) {
              let a = rl(2);
              ge("labelPosition", n.labelPosition),
                N(4),
                Et("mdc-checkbox--selected", n.checked),
                ge("checked", n.checked)("indeterminate", n.indeterminate)(
                  "disabled",
                  n.disabled && !n.disabledInteractive
                )("id", n.inputId)("required", n.required)(
                  "tabIndex",
                  n.disabled && !n.disabledInteractive ? -1 : n.tabIndex
                ),
                Dt("aria-label", n.ariaLabel || null)(
                  "aria-labelledby",
                  n.ariaLabelledby
                )("aria-describedby", n.ariaDescribedby)(
                  "aria-checked",
                  n.indeterminate ? "mixed" : null
                )(
                  "aria-disabled",
                  n.disabled && n.disabledInteractive ? !0 : null
                )("name", n.name)("value", n.value),
                N(7),
                ge("matRippleTrigger", a)(
                  "matRippleDisabled",
                  n.disableRipple || n.disabled
                )("matRippleCentered", !0),
                N(),
                ge("for", n.inputId);
            }
          },
          dependencies: [go, ec],
          styles: [
            '.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:""}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })();
var sm = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [uc, ct, ct] });
    }
  }
  return e;
})();
var cm = (() => {
  class e {
    constructor() {
      this._listeners = [];
    }
    notify(t, i) {
      for (let n of this._listeners) n(t, i);
    }
    listen(t) {
      return (
        this._listeners.push(t),
        () => {
          this._listeners = this._listeners.filter((i) => t !== i);
        }
      );
    }
    ngOnDestroy() {
      this._listeners = [];
    }
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var M1 = ["input"],
  R1 = ["formField"],
  O1 = ["*"],
  lm = 0,
  fc = class {
    constructor(r, t) {
      (this.source = r), (this.value = t);
    }
  },
  N1 = { provide: aa, useExisting: nn(() => Ld), multi: !0 },
  dm = new Ee("MatRadioGroup"),
  P1 = new Ee("mat-radio-default-options", { providedIn: "root", factory: L1 });
function L1() {
  return { color: "accent", disabledInteractive: !1 };
}
var Ld = (() => {
    class e {
      get name() {
        return this._name;
      }
      set name(t) {
        (this._name = t), this._updateRadioButtonNames();
      }
      get labelPosition() {
        return this._labelPosition;
      }
      set labelPosition(t) {
        (this._labelPosition = t === "before" ? "before" : "after"),
          this._markRadiosForCheck();
      }
      get value() {
        return this._value;
      }
      set value(t) {
        this._value !== t &&
          ((this._value = t),
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
      set selected(t) {
        (this._selected = t),
          (this.value = t ? t.value : null),
          this._checkSelectedRadioButton();
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = t), this._markRadiosForCheck();
      }
      get required() {
        return this._required;
      }
      set required(t) {
        (this._required = t), this._markRadiosForCheck();
      }
      get disabledInteractive() {
        return this._disabledInteractive;
      }
      set disabledInteractive(t) {
        (this._disabledInteractive = t), this._markRadiosForCheck();
      }
      constructor(t) {
        (this._changeDetector = t),
          (this._value = null),
          (this._name = `mat-radio-group-${lm++}`),
          (this._selected = null),
          (this._isInitialized = !1),
          (this._labelPosition = "after"),
          (this._disabled = !1),
          (this._required = !1),
          (this._controlValueAccessorChangeFn = () => {}),
          (this.onTouched = () => {}),
          (this.change = new ft()),
          (this._disabledInteractive = !1);
      }
      ngAfterContentInit() {
        (this._isInitialized = !0),
          (this._buttonChanges = this._radios.changes.subscribe(() => {
            this.selected &&
              !this._radios.find((t) => t === this.selected) &&
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
          this._radios.forEach((t) => {
            (t.name = this.name), t._markForCheck();
          });
      }
      _updateSelectedRadioFromValue() {
        let t = this._selected !== null && this._selected.value === this._value;
        this._radios &&
          !t &&
          ((this._selected = null),
          this._radios.forEach((i) => {
            (i.checked = this.value === i.value),
              i.checked && (this._selected = i);
          }));
      }
      _emitChangeEvent() {
        this._isInitialized &&
          this.change.emit(new fc(this._selected, this._value));
      }
      _markRadiosForCheck() {
        this._radios && this._radios.forEach((t) => t._markForCheck());
      }
      writeValue(t) {
        (this.value = t), this._changeDetector.markForCheck();
      }
      registerOnChange(t) {
        this._controlValueAccessorChangeFn = t;
      }
      registerOnTouched(t) {
        this.onTouched = t;
      }
      setDisabledState(t) {
        (this.disabled = t), this._changeDetector.markForCheck();
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(Xt));
        };
      }
      static {
        this.ɵdir = st({
          type: e,
          selectors: [["mat-radio-group"]],
          contentQueries: function (i, n, a) {
            if ((i & 1 && Bn(a, hc, 5), i & 2)) {
              let o;
              or((o = sr())) && (n._radios = o);
            }
          },
          hostAttrs: ["role", "radiogroup", 1, "mat-mdc-radio-group"],
          inputs: {
            color: "color",
            name: "name",
            labelPosition: "labelPosition",
            value: "value",
            selected: "selected",
            disabled: [2, "disabled", "disabled", vt],
            required: [2, "required", "required", vt],
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              vt,
            ],
          },
          outputs: { change: "change" },
          exportAs: ["matRadioGroup"],
          standalone: !0,
          features: [zr([N1, { provide: dm, useExisting: e }]), xr],
        });
      }
    }
    return e;
  })(),
  hc = (() => {
    class e {
      get checked() {
        return this._checked;
      }
      set checked(t) {
        this._checked !== t &&
          ((this._checked = t),
          t && this.radioGroup && this.radioGroup.value !== this.value
            ? (this.radioGroup.selected = this)
            : !t &&
              this.radioGroup &&
              this.radioGroup.value === this.value &&
              (this.radioGroup.selected = null),
          t && this._radioDispatcher.notify(this.id, this.name),
          this._changeDetector.markForCheck());
      }
      get value() {
        return this._value;
      }
      set value(t) {
        this._value !== t &&
          ((this._value = t),
          this.radioGroup !== null &&
            (this.checked || (this.checked = this.radioGroup.value === t),
            this.checked && (this.radioGroup.selected = this)));
      }
      get labelPosition() {
        return (
          this._labelPosition ||
          (this.radioGroup && this.radioGroup.labelPosition) ||
          "after"
        );
      }
      set labelPosition(t) {
        this._labelPosition = t;
      }
      get disabled() {
        return (
          this._disabled ||
          (this.radioGroup !== null && this.radioGroup.disabled)
        );
      }
      set disabled(t) {
        this._setDisabled(t);
      }
      get required() {
        return this._required || (this.radioGroup && this.radioGroup.required);
      }
      set required(t) {
        this._required = t;
      }
      get color() {
        return (
          this._color ||
          (this.radioGroup && this.radioGroup.color) ||
          (this._defaultOptions && this._defaultOptions.color) ||
          "accent"
        );
      }
      set color(t) {
        this._color = t;
      }
      get disabledInteractive() {
        return (
          this._disabledInteractive ||
          (this.radioGroup !== null && this.radioGroup.disabledInteractive)
        );
      }
      set disabledInteractive(t) {
        this._disabledInteractive = t;
      }
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      constructor(t, i, n, a, o, s, c, l) {
        (this._elementRef = i),
          (this._changeDetector = n),
          (this._focusMonitor = a),
          (this._radioDispatcher = o),
          (this._defaultOptions = c),
          (this._ngZone = he(qe)),
          (this._uniqueId = `mat-radio-${++lm}`),
          (this.id = this._uniqueId),
          (this.disableRipple = !1),
          (this.tabIndex = 0),
          (this.change = new ft()),
          (this._checked = !1),
          (this._value = null),
          (this._removeUniqueSelectionListener = () => {}),
          (this._injector = he(On)),
          (this._onInputClick = (d) => {
            this.disabled && this.disabledInteractive && d.preventDefault();
          }),
          (this.radioGroup = t),
          (this._noopAnimations = s === "NoopAnimations"),
          (this._disabledInteractive = c?.disabledInteractive ?? !1),
          l && (this.tabIndex = Oa(l, 0));
      }
      focus(t, i) {
        i
          ? this._focusMonitor.focusVia(this._inputElement, i, t)
          : this._inputElement.nativeElement.focus(t);
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
            (t, i) => {
              t !== this.id && i === this.name && (this.checked = !1);
            }
          ));
      }
      ngDoCheck() {
        this._updateTabIndex();
      }
      ngAfterViewInit() {
        this._updateTabIndex(),
          this._focusMonitor.monitor(this._elementRef, !0).subscribe((t) => {
            !t && this.radioGroup && this.radioGroup._touch();
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
        this.change.emit(new fc(this, this._value));
      }
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      _onInputInteraction(t) {
        if ((t.stopPropagation(), !this.checked && !this.disabled)) {
          let i = this.radioGroup && this.value !== this.radioGroup.value;
          (this.checked = !0),
            this._emitChangeEvent(),
            this.radioGroup &&
              (this.radioGroup._controlValueAccessorChangeFn(this.value),
              i && this.radioGroup._emitChangeEvent());
        }
      }
      _onTouchTargetClick(t) {
        this._onInputInteraction(t),
          (!this.disabled || this.disabledInteractive) &&
            this._inputElement?.nativeElement.focus();
      }
      _setDisabled(t) {
        this._disabled !== t &&
          ((this._disabled = t), this._changeDetector.markForCheck());
      }
      _updateTabIndex() {
        let t = this.radioGroup,
          i;
        if (
          (!t || !t.selected || this.disabled
            ? (i = this.tabIndex)
            : (i = t.selected === this ? this.tabIndex : -1),
          i !== this._previousTabIndex)
        ) {
          let n = this._inputElement?.nativeElement;
          n &&
            (n.setAttribute("tabindex", i + ""),
            (this._previousTabIndex = i),
            os(
              () => {
                queueMicrotask(() => {
                  t &&
                    t.selected &&
                    t.selected !== this &&
                    document.activeElement === n &&
                    (t.selected?._inputElement.nativeElement.focus(),
                    document.activeElement === n &&
                      this._inputElement.nativeElement.blur());
                });
              },
              { injector: this._injector }
            ));
        }
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(
            fe(dm, 8),
            fe(tt),
            fe(Xt),
            fe(_0),
            fe(cm),
            fe(Vr, 8),
            fe(P1, 8),
            Ni("tabindex")
          );
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["mat-radio-button"]],
          viewQuery: function (i, n) {
            if ((i & 1 && (Ur(M1, 5), Ur(R1, 7, tt)), i & 2)) {
              let a;
              or((a = sr())) && (n._inputElement = a.first),
                or((a = sr())) && (n._rippleTrigger = a.first);
            }
          },
          hostAttrs: [1, "mat-mdc-radio-button"],
          hostVars: 19,
          hostBindings: function (i, n) {
            i & 1 &&
              Ke("focus", function () {
                return n._inputElement.nativeElement.focus();
              }),
              i & 2 &&
                (Dt("id", n.id)("tabindex", null)("aria-label", null)(
                  "aria-labelledby",
                  null
                )("aria-describedby", null),
                Et("mat-primary", n.color === "primary")(
                  "mat-accent",
                  n.color === "accent"
                )("mat-warn", n.color === "warn")(
                  "mat-mdc-radio-checked",
                  n.checked
                )("mat-mdc-radio-disabled", n.disabled)(
                  "mat-mdc-radio-disabled-interactive",
                  n.disabledInteractive
                )("_mat-animation-noopable", n._noopAnimations));
          },
          inputs: {
            id: "id",
            name: "name",
            ariaLabel: [0, "aria-label", "ariaLabel"],
            ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
            ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
            disableRipple: [2, "disableRipple", "disableRipple", vt],
            tabIndex: [
              2,
              "tabIndex",
              "tabIndex",
              (t) => (t == null ? 0 : Oa(t)),
            ],
            checked: [2, "checked", "checked", vt],
            value: "value",
            labelPosition: "labelPosition",
            disabled: [2, "disabled", "disabled", vt],
            required: [2, "required", "required", vt],
            color: "color",
            disabledInteractive: [
              2,
              "disabledInteractive",
              "disabledInteractive",
              vt,
            ],
          },
          outputs: { change: "change" },
          exportAs: ["matRadioButton"],
          standalone: !0,
          features: [xr, ht],
          ngContentSelectors: O1,
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
          template: function (i, n) {
            if (i & 1) {
              let a = ri();
              $t(),
                H(0, "div", 2, 0)(2, "div", 3)(3, "div", 4),
                Ke("click", function (s) {
                  return Le(a), Be(n._onTouchTargetClick(s));
                }),
                W(),
                H(4, "input", 5, 1),
                Ke("change", function (s) {
                  return Le(a), Be(n._onInputInteraction(s));
                }),
                W(),
                H(6, "div", 6),
                Ge(7, "div", 7)(8, "div", 8),
                W(),
                H(9, "div", 9),
                Ge(10, "div", 10),
                W()(),
                H(11, "label", 11),
                Lt(12),
                W()();
            }
            i & 2 &&
              (ge("labelPosition", n.labelPosition),
              N(2),
              Et("mdc-radio--disabled", n.disabled),
              N(2),
              ge("id", n.inputId)("checked", n.checked)(
                "disabled",
                n.disabled && !n.disabledInteractive
              )("required", n.required),
              Dt("name", n.name)("value", n.value)("aria-label", n.ariaLabel)(
                "aria-labelledby",
                n.ariaLabelledby
              )("aria-describedby", n.ariaDescribedby)(
                "aria-disabled",
                n.disabled && n.disabledInteractive ? "true" : null
              ),
              N(5),
              ge("matRippleTrigger", n._rippleTrigger.nativeElement)(
                "matRippleDisabled",
                n._isRippleDisabled()
              )("matRippleCentered", !0),
              N(2),
              ge("for", n.inputId));
          },
          dependencies: [go, ec],
          styles: [
            '.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled])~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-radio-button .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-radio-button .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-radio-button .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio__native-control:enabled:focus:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-radio-button .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled{pointer-events:auto}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled:hover .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control:checked:focus+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color, var(--mat-app-primary))}.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mat-ripple-element,.mat-mdc-radio-button.mat-mdc-radio-disabled-interactive .mdc-radio--disabled .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color, var(--mat-app-on-surface))}.mat-mdc-radio-button .mat-internal-form-field{color:var(--mat-radio-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-radio-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-radio-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-radio-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-radio-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-radio-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-disabled{cursor:default;pointer-events:none}.mat-mdc-radio-disabled.mat-mdc-radio-disabled-interactive{pointer-events:auto}.mat-mdc-radio-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:auto;right:50%;transform:translate(50%, -50%)}',
          ],
          encapsulation: 2,
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  um = (() => {
    class e {
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ imports: [ct, hr, Js, hc, ct] });
      }
    }
    return e;
  })();
var ko = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [ct, hr, f0, ct] });
    }
  }
  return e;
})();
var fm = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({});
    }
  }
  return e;
})();
var hm = (() => {
  class e {
    static {
      this.ɵfac = function (i) {
        return new (i || e)();
      };
    }
    static {
      this.ɵmod = Re({ type: e });
    }
    static {
      this.ɵinj = Me({ imports: [ct, ko, ko, fm, ct] });
    }
  }
  return e;
})();
var mc = class e {
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = ut({
    type: e,
    selectors: [["app-footer"]],
    standalone: !0,
    features: [ht],
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
    template: function (t, i) {
      t & 1 &&
        (H(0, "footer")(1, "mat-toolbar", 0)(2, "div", 1)(3, "div", 2)(4, "h3"),
        Q(5),
        ee(6, "translate"),
        W(),
        H(7, "ul")(8, "nav")(9, "li")(10, "a", 3),
        Q(11),
        ee(12, "translate"),
        W()(),
        H(13, "li")(14, "a", 3),
        Q(15),
        ee(16, "translate"),
        W()(),
        H(17, "li")(18, "a", 4),
        Q(19),
        ee(20, "translate"),
        W()(),
        H(21, "li")(22, "a", 5),
        Q(23),
        ee(24, "translate"),
        W()()()()(),
        H(25, "div", 6)(26, "h3"),
        Q(27),
        ee(28, "translate"),
        W(),
        H(29, "a", 7)(30, "mat-icon"),
        Q(31, "email"),
        W(),
        H(32, "span", 8),
        Q(33, "admin@gorivoinfo.com"),
        W()()()(),
        H(34, "div", 9)(35, "span"),
        Q(36, " Copyright \xA9 2024 Visi osnovac."),
        W()()()()),
        t & 2 &&
          (N(5),
          we(xe(6, 6, "GORIVA")),
          N(6),
          we(xe(12, 8, "BENZIN_95")),
          N(4),
          we(xe(16, 10, "BENZIN_98")),
          N(4),
          we(xe(20, 12, "EVRO_DIZEL")),
          N(4),
          we(xe(24, 14, "AUTO_GAS")),
          N(4),
          we(xe(28, 16, "KONTAKT")));
    },
    dependencies: [dc, lc, cc, rm, ko, hm, Jn, qs],
    styles: [
      ".footer[_ngcontent-%COMP%]{position:relative;bottom:0;width:100%;height:218px;display:flex;background-color:#faf9fd;color:#121713;z-index:10;top:79px;justify-content:space-around}.footer-content[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;max-width:1200px;padding:0 20px;justify-content:space-between}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;margin:0 10px}.footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#007bff}.footer-column[_ngcontent-%COMP%]{padding:10px;color:#fff;font-size:.9rem;margin-bottom:.45em;color:#121713}.footer-form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.footer-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem;font-weight:700!important}.footer-column[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style-type:disclosure-closed;padding:0;margin-top:0;color:#007bff}.footer-column[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px 0}.footer-column[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:0;color:#121713}.footer-form-field[_ngcontent-%COMP%]{width:200px;margin-bottom:10px}button[type=submit][_ngcontent-%COMP%]{margin-top:10px}.copyright[_ngcontent-%COMP%]{position:absolute;bottom:9px;font-size:1rem}.footer-email[_ngcontent-%COMP%]{position:relative;bottom:6px;margin-left:8px;font-family:Fauna One,Lora,Roboto,Helvetica Neue,sans-serif}@media screen and (max-width: 540px){.footer-email[_ngcontent-%COMP%]{display:none!important}}",
    ],
  });
};
function j1(e, r) {
  if (e & 1) {
    let t = ri();
    H(0, "div", 1)(1, "div", 2),
      ts(),
      H(2, "svg", 3),
      Ge(3, "path", 4)(4, "path", 5),
      W(),
      rs(),
      H(5, "div", 6),
      Ke("click", function () {
        Le(t);
        let n = Fe();
        return Be(n.scrollToTop());
      }),
      H(6, "span", 7),
      Q(7, "arrow_upward_alt"),
      W()()()();
  }
  if (e & 2) {
    let t = Fe();
    N(4), Dt("stroke-dasharray", t.scrollProgress + ", 100");
  }
}
var pc = class e {
  isButtonVisible = !1;
  scrollProgress = 0;
  onScroll() {
    let r =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0,
      t =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    (this.scrollProgress = (r / t) * 100), (this.isButtonVisible = r > 100);
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵcmp = ut({
    type: e,
    selectors: [["app-back-to-top"]],
    hostBindings: function (t, i) {
      t & 1 &&
        Ke(
          "scroll",
          function () {
            return i.onScroll();
          },
          !1,
          df
        );
    },
    standalone: !0,
    features: [ht],
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
    template: function (t, i) {
      t & 1 && Gt(0, j1, 8, 1, "div", 0),
        t & 2 && ge("ngIf", i.isButtonVisible);
    },
    dependencies: [hr, jn],
    styles: [
      ".back-to-top-container[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:20px;width:60px;height:60px;display:flex;justify-content:center;align-items:center;z-index:1000}.progress-circle[_ngcontent-%COMP%]{position:relative;width:60px;height:60px}.progress-circle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{pointer-events:none}.circle[_ngcontent-%COMP%]{transform:rotate(-90deg);width:100%;height:100%}.circle-bg[_ngcontent-%COMP%], .circle-progress[_ngcontent-%COMP%]{fill:none;stroke-width:3.8}.circle-bg[_ngcontent-%COMP%]{stroke:#e6e6e6}.circle-progress[_ngcontent-%COMP%]{stroke:#007bff;stroke-linecap:round;transition:stroke-dasharray .3s ease}.back-to-top[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#007bff;color:#fff;border:none;border-radius:50%;width:40px;height:40px;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:20px;-webkit-tap-highlight-color:transparent;box-shadow:none;outline:none}.back-to-top[_ngcontent-%COMP%]:hover{background-color:#0056b3}",
    ],
  });
};
var V1 = ["overlay"],
  U1 = ["*"];
function z1(e, r) {
  e & 1 && Ge(0, "div");
}
function H1(e, r) {
  if ((e & 1 && (H(0, "div"), Gt(1, z1, 1, 0, "div", 6), W()), e & 2)) {
    let t = Fe(2);
    vi(t.spinner.class),
      ss("color", t.spinner.color),
      N(),
      ge("ngForOf", t.spinner.divArray);
  }
}
function W1(e, r) {
  if ((e & 1 && (Ge(0, "div", 7), ee(1, "safeHtml")), e & 2)) {
    let t = Fe(2);
    ge("innerHTML", xe(1, 1, t.template), lf);
  }
}
function G1(e, r) {
  if (
    (e & 1 &&
      (H(0, "div", 2, 0),
      Gt(2, H1, 2, 5, "div", 3)(3, W1, 2, 3, "div", 4),
      H(4, "div", 5),
      Lt(5),
      W()()),
    e & 2)
  ) {
    let t = Fe();
    ss("background-color", t.spinner.bdColor)("z-index", t.spinner.zIndex)(
      "position",
      t.spinner.fullScreen ? "fixed" : "absolute"
    ),
      ge("@.disabled", t.disableAnimation)("@fadeIn", "in"),
      N(2),
      ge("ngIf", !t.template),
      N(),
      ge("ngIf", t.template),
      N(),
      ss("z-index", t.spinner.zIndex);
  }
}
var $1 = {
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
  Bd = {
    BD_COLOR: "rgba(51,51,51,0.8)",
    SPINNER_COLOR: "#fff",
    Z_INDEX: 99999,
  },
  jd = "primary",
  vn = class e {
    constructor(r) {
      Object.assign(this, r);
    }
    static create(r) {
      return (
        !r?.template &&
          !r?.type &&
          console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),
        new e(r)
      );
    }
  },
  Vd = (() => {
    class e {
      constructor() {
        this.spinnerObservable = new Ht(null);
      }
      getSpinner(t) {
        return this.spinnerObservable
          .asObservable()
          .pipe(Br((i) => i && i.name === t));
      }
      show(t = jd, i) {
        return new Promise((n, a) => {
          setTimeout(() => {
            i && Object.keys(i).length
              ? ((i.name = t),
                this.spinnerObservable.next(
                  new vn(Xe(te({}, i), { show: !0 }))
                ),
                n(!0))
              : (this.spinnerObservable.next(new vn({ name: t, show: !0 })),
                n(!0));
          }, 10);
        });
      }
      hide(t = jd, i = 10) {
        return new Promise((n, a) => {
          setTimeout(() => {
            this.spinnerObservable.next(new vn({ name: t, show: !1 })), n(!0);
          }, i);
        });
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  pm = new Ee("NGX_SPINNER_CONFIG"),
  X1 = (() => {
    class e {
      constructor(t) {
        this._sanitizer = t;
      }
      transform(t) {
        if (t) return this._sanitizer.bypassSecurityTrustHtml(t);
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)(fe(Wa, 16));
        };
      }
      static {
        this.ɵpipe = es({
          name: "safeHtml",
          type: e,
          pure: !0,
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  gm = (() => {
    class e {
      constructor(t, i, n, a) {
        (this.spinnerService = t),
          (this.changeDetector = i),
          (this.elementRef = n),
          (this.globalConfig = a),
          (this.disableAnimation = !1),
          (this.spinner = new vn()),
          (this.ngUnsubscribe = new zt()),
          (this.setDefaultOptions = () => {
            let { type: o } = this.globalConfig ?? {};
            this.spinner = vn.create({
              name: this.name,
              bdColor: this.bdColor,
              size: this.size,
              color: this.color,
              type: this.type ?? o,
              fullScreen: this.fullScreen,
              divArray: this.divArray,
              divCount: this.divCount,
              show: this.show,
              zIndex: this.zIndex,
              template: this.template,
              showSpinner: this.showSpinner,
            });
          }),
          (this.bdColor = Bd.BD_COLOR),
          (this.zIndex = Bd.Z_INDEX),
          (this.color = Bd.SPINNER_COLOR),
          (this.size = "large"),
          (this.fullScreen = !0),
          (this.name = jd),
          (this.template = null),
          (this.showSpinner = !1),
          (this.divArray = []),
          (this.divCount = 0),
          (this.show = !1);
      }
      initObservable() {
        this.spinnerService
          .getSpinner(this.name)
          .pipe(Ri(this.ngUnsubscribe))
          .subscribe((t) => {
            this.setDefaultOptions(),
              Object.assign(this.spinner, t),
              t.show && this.onInputChange(),
              this.changeDetector.detectChanges();
          });
      }
      ngOnInit() {
        this.setDefaultOptions(), this.initObservable();
      }
      isSpinnerZone(t) {
        return t === this.elementRef.nativeElement.parentElement
          ? !0
          : t.parentNode && this.isSpinnerZone(t.parentNode);
      }
      ngOnChanges(t) {
        for (let i in t)
          if (i) {
            let n = t[i];
            if (n.isFirstChange()) return;
            typeof n.currentValue < "u" &&
              n.currentValue !== n.previousValue &&
              n.currentValue !== "" &&
              ((this.spinner[i] = n.currentValue),
              i === "showSpinner" &&
                (n.currentValue
                  ? this.spinnerService.show(this.spinner.name, this.spinner)
                  : this.spinnerService.hide(this.spinner.name)),
              i === "name" && this.initObservable());
          }
      }
      getClass(t, i) {
        (this.spinner.divCount = $1[t]),
          (this.spinner.divArray = Array(this.spinner.divCount)
            .fill(0)
            .map((a, o) => o));
        let n = "";
        switch (i.toLowerCase()) {
          case "small":
            n = "la-sm";
            break;
          case "medium":
            n = "la-2x";
            break;
          case "large":
            n = "la-3x";
            break;
          default:
            break;
        }
        return "la-" + t + " " + n;
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
          return new (i || e)(fe(Vd), fe(Xt), fe(tt), fe(pm, 8));
        };
      }
      static {
        this.ɵcmp = ut({
          type: e,
          selectors: [["ngx-spinner"]],
          viewQuery: function (i, n) {
            if ((i & 1 && Ur(V1, 5), i & 2)) {
              let a;
              or((a = sr())) && (n.spinnerDOM = a.first);
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
          features: [ei, ht],
          ngContentSelectors: U1,
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
          template: function (i, n) {
            i & 1 && ($t(), Gt(0, G1, 6, 12, "div", 1)),
              i & 2 && ge("ngIf", n.spinner.show);
          },
          dependencies: [X1, jn, gs],
          styles: [
            ".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}",
          ],
          data: {
            animation: [
              Tf("fadeIn", [
                Sf("in", xs({ opacity: 1 })),
                ol(":enter", [xs({ opacity: 0 }), al(300)]),
                ol(":leave", al(200, xs({ opacity: 0 }))),
              ]),
            ],
          },
          changeDetection: 0,
        });
      }
    }
    return e;
  })(),
  vm = (() => {
    class e {
      static forRoot(t) {
        return { ngModule: e, providers: [{ provide: pm, useValue: t }] };
      }
      static {
        this.ɵfac = function (i) {
          return new (i || e)();
        };
      }
      static {
        this.ɵmod = Re({ type: e });
      }
      static {
        this.ɵinj = Me({ imports: [hr] });
      }
    }
    return e;
  })();
var yp = {};
yp.version = "0.18.5";
var si = 1200,
  ua = 1252,
  K1 = [
    874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257,
    1258, 1e4,
  ],
  cu = {
    0: 1252,
    1: 65001,
    2: 65001,
    77: 1e4,
    128: 932,
    129: 949,
    130: 1361,
    134: 936,
    136: 950,
    161: 1253,
    162: 1254,
    163: 1258,
    177: 1255,
    178: 1256,
    186: 1257,
    204: 1251,
    222: 874,
    238: 1250,
    255: 1252,
    69: 6969,
  },
  lu = function (e) {
    K1.indexOf(e) != -1 && (ua = cu[0] = e);
  };
function Y1() {
  lu(1252);
}
var qr = function (e) {
  (si = e), lu(e);
};
function wp() {
  qr(1200), Y1();
}
function Zd(e) {
  for (var r = [], t = 0, i = e.length; t < i; ++t) r[t] = e.charCodeAt(t);
  return r;
}
function Z1(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t)
    r[t] = String.fromCharCode(
      e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8)
    );
  return r.join("");
}
function kp(e) {
  for (var r = [], t = 0; t < e.length >> 1; ++t)
    r[t] = String.fromCharCode(
      e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8)
    );
  return r.join("");
}
var Co = function (e) {
    var r = e.charCodeAt(0),
      t = e.charCodeAt(1);
    return r == 255 && t == 254
      ? Z1(e.slice(2))
      : r == 254 && t == 255
      ? kp(e.slice(2))
      : r == 65279
      ? e.slice(1)
      : e;
  },
  gc = function (r) {
    return String.fromCharCode(r);
  },
  xm = function (r) {
    return String.fromCharCode(r);
  },
  Qe;
var It = null,
  Eo = !0,
  $i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function _m(e) {
  for (
    var r = "", t = 0, i = 0, n = 0, a = 0, o = 0, s = 0, c = 0, l = 0;
    l < e.length;

  )
    (t = e.charCodeAt(l++)),
      (a = t >> 2),
      (i = e.charCodeAt(l++)),
      (o = ((t & 3) << 4) | (i >> 4)),
      (n = e.charCodeAt(l++)),
      (s = ((i & 15) << 2) | (n >> 6)),
      (c = n & 63),
      isNaN(i) ? (s = c = 64) : isNaN(n) && (c = 64),
      (r += $i.charAt(a) + $i.charAt(o) + $i.charAt(s) + $i.charAt(c));
  return r;
}
function wr(e) {
  var r = "",
    t = 0,
    i = 0,
    n = 0,
    a = 0,
    o = 0,
    s = 0,
    c = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; )
    (a = $i.indexOf(e.charAt(l++))),
      (o = $i.indexOf(e.charAt(l++))),
      (t = (a << 2) | (o >> 4)),
      (r += String.fromCharCode(t)),
      (s = $i.indexOf(e.charAt(l++))),
      (i = ((o & 15) << 4) | (s >> 2)),
      s !== 64 && (r += String.fromCharCode(i)),
      (c = $i.indexOf(e.charAt(l++))),
      (n = ((s & 3) << 6) | c),
      c !== 64 && (r += String.fromCharCode(n));
  return r;
}
var je = (function () {
    return (
      typeof Buffer < "u" &&
      typeof process < "u" &&
      typeof process.versions < "u" &&
      !!process.versions.node
    );
  })(),
  Cn = (function () {
    if (typeof Buffer < "u") {
      var e = !Buffer.from;
      if (!e)
        try {
          Buffer.from("foo", "utf8");
        } catch {
          e = !0;
        }
      return e
        ? function (r, t) {
            return t ? new Buffer(r, t) : new Buffer(r);
          }
        : Buffer.from.bind(Buffer);
    }
    return function () {};
  })();
function Ki(e) {
  return je
    ? Buffer.alloc
      ? Buffer.alloc(e)
      : new Buffer(e)
    : typeof Uint8Array < "u"
    ? new Uint8Array(e)
    : new Array(e);
}
function bm(e) {
  return je
    ? Buffer.allocUnsafe
      ? Buffer.allocUnsafe(e)
      : new Buffer(e)
    : typeof Uint8Array < "u"
    ? new Uint8Array(e)
    : new Array(e);
}
var Xr = function (r) {
  return je
    ? Cn(r, "binary")
    : r.split("").map(function (t) {
        return t.charCodeAt(0) & 255;
      });
};
function Tn(e) {
  if (Array.isArray(e))
    return e
      .map(function (i) {
        return String.fromCharCode(i);
      })
      .join("");
  for (var r = [], t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
  return r.join("");
}
function du(e) {
  if (typeof ArrayBuffer > "u") throw new Error("Unsupported");
  if (e instanceof ArrayBuffer) return du(new Uint8Array(e));
  for (var r = new Array(e.length), t = 0; t < e.length; ++t) r[t] = e[t];
  return r;
}
var Gi = je
  ? function (e) {
      return Buffer.concat(
        e.map(function (r) {
          return Buffer.isBuffer(r) ? r : Cn(r);
        })
      );
    }
  : function (e) {
      if (typeof Uint8Array < "u") {
        var r = 0,
          t = 0;
        for (r = 0; r < e.length; ++r) t += e[r].length;
        var i = new Uint8Array(t),
          n = 0;
        for (r = 0, t = 0; r < e.length; t += n, ++r)
          if (((n = e[r].length), e[r] instanceof Uint8Array)) i.set(e[r], t);
          else {
            if (typeof e[r] == "string") throw "wtf";
            i.set(new Uint8Array(e[r]), t);
          }
        return i;
      }
      return [].concat.apply(
        [],
        e.map(function (a) {
          return Array.isArray(a) ? a : [].slice.call(a);
        })
      );
    };
function Q1(e) {
  for (
    var r = [], t = 0, i = e.length + 250, n = Ki(e.length + 255), a = 0;
    a < e.length;
    ++a
  ) {
    var o = e.charCodeAt(a);
    if (o < 128) n[t++] = o;
    else if (o < 2048)
      (n[t++] = 192 | ((o >> 6) & 31)), (n[t++] = 128 | (o & 63));
    else if (o >= 55296 && o < 57344) {
      o = (o & 1023) + 64;
      var s = e.charCodeAt(++a) & 1023;
      (n[t++] = 240 | ((o >> 8) & 7)),
        (n[t++] = 128 | ((o >> 2) & 63)),
        (n[t++] = 128 | ((s >> 6) & 15) | ((o & 3) << 4)),
        (n[t++] = 128 | (s & 63));
    } else
      (n[t++] = 224 | ((o >> 12) & 15)),
        (n[t++] = 128 | ((o >> 6) & 63)),
        (n[t++] = 128 | (o & 63));
    t > i && (r.push(n.slice(0, t)), (t = 0), (n = Ki(65535)), (i = 65530));
  }
  return r.push(n.slice(0, t)), Gi(r);
}
var Jt = /\u0000/g,
  To = /[\u0001-\u0006]/g;
function ca(e) {
  for (var r = "", t = e.length - 1; t >= 0; ) r += e.charAt(t--);
  return r;
}
function Kr(e, r) {
  var t = "" + e;
  return t.length >= r ? t : xt("0", r - t.length) + t;
}
function uu(e, r) {
  var t = "" + e;
  return t.length >= r ? t : xt(" ", r - t.length) + t;
}
function Cc(e, r) {
  var t = "" + e;
  return t.length >= r ? t : t + xt(" ", r - t.length);
}
function J1(e, r) {
  var t = "" + Math.round(e);
  return t.length >= r ? t : xt("0", r - t.length) + t;
}
function ey(e, r) {
  var t = "" + e;
  return t.length >= r ? t : xt("0", r - t.length) + t;
}
var ym = Math.pow(2, 32);
function oa(e, r) {
  if (e > ym || e < -ym) return J1(e, r);
  var t = Math.round(e);
  return ey(t, r);
}
function Tc(e, r) {
  return (
    (r = r || 0),
    e.length >= 7 + r &&
      (e.charCodeAt(r) | 32) === 103 &&
      (e.charCodeAt(r + 1) | 32) === 101 &&
      (e.charCodeAt(r + 2) | 32) === 110 &&
      (e.charCodeAt(r + 3) | 32) === 101 &&
      (e.charCodeAt(r + 4) | 32) === 114 &&
      (e.charCodeAt(r + 5) | 32) === 97 &&
      (e.charCodeAt(r + 6) | 32) === 108
  );
}
var wm = [
    ["Sun", "Sunday"],
    ["Mon", "Monday"],
    ["Tue", "Tuesday"],
    ["Wed", "Wednesday"],
    ["Thu", "Thursday"],
    ["Fri", "Friday"],
    ["Sat", "Saturday"],
  ],
  Ud = [
    ["J", "Jan", "January"],
    ["F", "Feb", "February"],
    ["M", "Mar", "March"],
    ["A", "Apr", "April"],
    ["M", "May", "May"],
    ["J", "Jun", "June"],
    ["J", "Jul", "July"],
    ["A", "Aug", "August"],
    ["S", "Sep", "September"],
    ["O", "Oct", "October"],
    ["N", "Nov", "November"],
    ["D", "Dec", "December"],
  ];
function ty(e) {
  return (
    e || (e = {}),
    (e[0] = "General"),
    (e[1] = "0"),
    (e[2] = "0.00"),
    (e[3] = "#,##0"),
    (e[4] = "#,##0.00"),
    (e[9] = "0%"),
    (e[10] = "0.00%"),
    (e[11] = "0.00E+00"),
    (e[12] = "# ?/?"),
    (e[13] = "# ??/??"),
    (e[14] = "m/d/yy"),
    (e[15] = "d-mmm-yy"),
    (e[16] = "d-mmm"),
    (e[17] = "mmm-yy"),
    (e[18] = "h:mm AM/PM"),
    (e[19] = "h:mm:ss AM/PM"),
    (e[20] = "h:mm"),
    (e[21] = "h:mm:ss"),
    (e[22] = "m/d/yy h:mm"),
    (e[37] = "#,##0 ;(#,##0)"),
    (e[38] = "#,##0 ;[Red](#,##0)"),
    (e[39] = "#,##0.00;(#,##0.00)"),
    (e[40] = "#,##0.00;[Red](#,##0.00)"),
    (e[45] = "mm:ss"),
    (e[46] = "[h]:mm:ss"),
    (e[47] = "mmss.0"),
    (e[48] = "##0.0E+0"),
    (e[49] = "@"),
    (e[56] = '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "'),
    e
  );
}
var De = {
    0: "General",
    1: "0",
    2: "0.00",
    3: "#,##0",
    4: "#,##0.00",
    9: "0%",
    10: "0.00%",
    11: "0.00E+00",
    12: "# ?/?",
    13: "# ??/??",
    14: "m/d/yy",
    15: "d-mmm-yy",
    16: "d-mmm",
    17: "mmm-yy",
    18: "h:mm AM/PM",
    19: "h:mm:ss AM/PM",
    20: "h:mm",
    21: "h:mm:ss",
    22: "m/d/yy h:mm",
    37: "#,##0 ;(#,##0)",
    38: "#,##0 ;[Red](#,##0)",
    39: "#,##0.00;(#,##0.00)",
    40: "#,##0.00;[Red](#,##0.00)",
    45: "mm:ss",
    46: "[h]:mm:ss",
    47: "mmss.0",
    48: "##0.0E+0",
    49: "@",
    56: '"\u4E0A\u5348/\u4E0B\u5348 "hh"\u6642"mm"\u5206"ss"\u79D2 "',
  },
  km = {
    5: 37,
    6: 38,
    7: 39,
    8: 40,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 14,
    28: 14,
    29: 14,
    30: 14,
    31: 14,
    50: 14,
    51: 14,
    52: 14,
    53: 14,
    54: 14,
    55: 14,
    56: 14,
    57: 14,
    58: 14,
    59: 1,
    60: 2,
    61: 3,
    62: 4,
    67: 9,
    68: 10,
    69: 12,
    70: 13,
    71: 14,
    72: 14,
    73: 15,
    74: 16,
    75: 17,
    76: 20,
    77: 21,
    78: 22,
    79: 45,
    80: 46,
    81: 47,
    82: 0,
  },
  ry = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    63: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)',
  };
function Sc(e, r, t) {
  for (
    var i = e < 0 ? -1 : 1,
      n = e * i,
      a = 0,
      o = 1,
      s = 0,
      c = 1,
      l = 0,
      d = 0,
      u = Math.floor(n);
    l < r &&
    ((u = Math.floor(n)), (s = u * o + a), (d = u * l + c), !(n - u < 5e-8));

  )
    (n = 1 / (n - u)), (a = o), (o = s), (c = l), (l = d);
  if ((d > r && (l > r ? ((d = c), (s = a)) : ((d = l), (s = o))), !t))
    return [0, i * s, d];
  var h = Math.floor((i * s) / d);
  return [h, i * s - h * d, d];
}
function _n(e, r, t) {
  if (e > 2958465 || e < 0) return null;
  var i = e | 0,
    n = Math.floor(86400 * (e - i)),
    a = 0,
    o = [],
    s = {
      D: i,
      T: n,
      u: 86400 * (e - i) - n,
      y: 0,
      m: 0,
      d: 0,
      H: 0,
      M: 0,
      S: 0,
      q: 0,
    };
  if (
    (Math.abs(s.u) < 1e-6 && (s.u = 0),
    r && r.date1904 && (i += 1462),
    s.u > 0.9999 && ((s.u = 0), ++n == 86400 && ((s.T = n = 0), ++i, ++s.D)),
    i === 60)
  )
    (o = t ? [1317, 10, 29] : [1900, 2, 29]), (a = 3);
  else if (i === 0) (o = t ? [1317, 8, 29] : [1900, 1, 0]), (a = 6);
  else {
    i > 60 && --i;
    var c = new Date(1900, 0, 1);
    c.setDate(c.getDate() + i - 1),
      (o = [c.getFullYear(), c.getMonth() + 1, c.getDate()]),
      (a = c.getDay()),
      i < 60 && (a = (a + 6) % 7),
      t && (a = cy(c, o));
  }
  return (
    (s.y = o[0]),
    (s.m = o[1]),
    (s.d = o[2]),
    (s.S = n % 60),
    (n = Math.floor(n / 60)),
    (s.M = n % 60),
    (n = Math.floor(n / 60)),
    (s.H = n),
    (s.q = a),
    s
  );
}
var Ep = new Date(1899, 11, 31, 0, 0, 0),
  iy = Ep.getTime(),
  ny = new Date(1900, 2, 1, 0, 0, 0);
function Cp(e, r) {
  var t = e.getTime();
  return (
    r ? (t -= 1461 * 24 * 60 * 60 * 1e3) : e >= ny && (t += 24 * 60 * 60 * 1e3),
    (t - (iy + (e.getTimezoneOffset() - Ep.getTimezoneOffset()) * 6e4)) /
      (24 * 60 * 60 * 1e3)
  );
}
function fu(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function ay(e) {
  return e.indexOf("E") == -1
    ? e
    : e
        .replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E")
        .replace(/(E[+-])(\d)$/, "$10$2");
}
function oy(e) {
  var r = e < 0 ? 12 : 11,
    t = fu(e.toFixed(12));
  return t.length <= r || ((t = e.toPrecision(10)), t.length <= r)
    ? t
    : e.toExponential(5);
}
function sy(e) {
  var r = fu(e.toFixed(11));
  return r.length > (e < 0 ? 12 : 11) || r === "0" || r === "-0"
    ? e.toPrecision(6)
    : r;
}
function Bo(e) {
  var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
    t;
  return (
    r >= -4 && r <= -1
      ? (t = e.toPrecision(10 + r))
      : Math.abs(r) <= 9
      ? (t = oy(e))
      : r === 10
      ? (t = e.toFixed(10).substr(0, 12))
      : (t = sy(e)),
    fu(ay(t.toUpperCase()))
  );
}
function wn(e, r) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Bo(e);
    case "undefined":
      return "";
    case "object":
      if (e == null) return "";
      if (e instanceof Date) return Pr(14, Cp(e, r && r.date1904), r);
  }
  throw new Error("unsupported value in General format: " + e);
}
function cy(e, r) {
  r[0] -= 581;
  var t = e.getDay();
  return e < 60 && (t = (t + 6) % 7), t;
}
function ly(e, r, t, i) {
  var n = "",
    a = 0,
    o = 0,
    s = t.y,
    c,
    l = 0;
  switch (e) {
    case 98:
      s = t.y + 543;
    case 121:
      switch (r.length) {
        case 1:
        case 2:
          (c = s % 100), (l = 2);
          break;
        default:
          (c = s % 1e4), (l = 4);
          break;
      }
      break;
    case 109:
      switch (r.length) {
        case 1:
        case 2:
          (c = t.m), (l = r.length);
          break;
        case 3:
          return Ud[t.m - 1][1];
        case 5:
          return Ud[t.m - 1][0];
        default:
          return Ud[t.m - 1][2];
      }
      break;
    case 100:
      switch (r.length) {
        case 1:
        case 2:
          (c = t.d), (l = r.length);
          break;
        case 3:
          return wm[t.q][0];
        default:
          return wm[t.q][1];
      }
      break;
    case 104:
      switch (r.length) {
        case 1:
        case 2:
          (c = 1 + ((t.H + 11) % 12)), (l = r.length);
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 72:
      switch (r.length) {
        case 1:
        case 2:
          (c = t.H), (l = r.length);
          break;
        default:
          throw "bad hour format: " + r;
      }
      break;
    case 77:
      switch (r.length) {
        case 1:
        case 2:
          (c = t.M), (l = r.length);
          break;
        default:
          throw "bad minute format: " + r;
      }
      break;
    case 115:
      if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000")
        throw "bad second format: " + r;
      return t.u === 0 && (r == "s" || r == "ss")
        ? Kr(t.S, r.length)
        : (i >= 2 ? (o = i === 3 ? 1e3 : 100) : (o = i === 1 ? 10 : 1),
          (a = Math.round(o * (t.S + t.u))),
          a >= 60 * o && (a = 0),
          r === "s"
            ? a === 0
              ? "0"
              : "" + a / o
            : ((n = Kr(a, 2 + i)),
              r === "ss" ? n.substr(0, 2) : "." + n.substr(2, r.length - 1)));
    case 90:
      switch (r) {
        case "[h]":
        case "[hh]":
          c = t.D * 24 + t.H;
          break;
        case "[m]":
        case "[mm]":
          c = (t.D * 24 + t.H) * 60 + t.M;
          break;
        case "[s]":
        case "[ss]":
          c = ((t.D * 24 + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
          break;
        default:
          throw "bad abstime format: " + r;
      }
      l = r.length === 3 ? 1 : 2;
      break;
    case 101:
      (c = s), (l = 1);
      break;
  }
  var d = l > 0 ? Kr(c, l) : "";
  return d;
}
function Xi(e) {
  var r = 3;
  if (e.length <= r) return e;
  for (var t = e.length % r, i = e.substr(0, t); t != e.length; t += r)
    i += (i.length > 0 ? "," : "") + e.substr(t, r);
  return i;
}
var Tp = /%/g;
function dy(e, r, t) {
  var i = r.replace(Tp, ""),
    n = r.length - i.length;
  return Ei(e, i, t * Math.pow(10, 2 * n)) + xt("%", n);
}
function uy(e, r, t) {
  for (var i = r.length - 1; r.charCodeAt(i - 1) === 44; ) --i;
  return Ei(e, r.substr(0, i), t / Math.pow(10, 3 * (r.length - i)));
}
function Sp(e, r) {
  var t,
    i = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Sp(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var a = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (
      (a < 0 && (a += n),
      (t = (r / Math.pow(10, a)).toPrecision(i + 1 + ((n + a) % n))),
      t.indexOf("e") === -1)
    ) {
      var o = Math.floor(Math.log(r) * Math.LOG10E);
      for (
        t.indexOf(".") === -1
          ? (t = t.charAt(0) + "." + t.substr(1) + "E+" + (o - t.length + a))
          : (t += "E+" + (o - a));
        t.substr(0, 2) === "0.";

      )
        (t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n)),
          (t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0."));
      t = t.replace(/\+-/, "-");
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (s, c, l, d) {
      return c + l + d.substr(0, (n + a) % n) + "." + d.substr(a) + "E";
    });
  } else t = r.toExponential(i);
  return (
    e.match(/E\+00$/) &&
      t.match(/e[+-]\d$/) &&
      (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)),
    e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")),
    t.replace("e", "E")
  );
}
var Ap = /# (\?+)( ?)\/( ?)(\d+)/;
function fy(e, r, t) {
  var i = parseInt(e[4], 10),
    n = Math.round(r * i),
    a = Math.floor(n / i),
    o = n - a * i,
    s = i;
  return (
    t +
    (a === 0 ? "" : "" + a) +
    " " +
    (o === 0
      ? xt(" ", e[1].length + 1 + e[4].length)
      : uu(o, e[1].length) + e[2] + "/" + e[3] + Kr(s, e[4].length))
  );
}
function hy(e, r, t) {
  return t + (r === 0 ? "" : "" + r) + xt(" ", e[1].length + 2 + e[4].length);
}
var Ip = /^#*0*\.([0#]+)/,
  Fp = /\).*[0#]/,
  Dp = /\(###\) ###\\?-####/;
function cr(e) {
  for (var r = "", t, i = 0; i != e.length; ++i)
    switch ((t = e.charCodeAt(i))) {
      case 35:
        break;
      case 63:
        r += " ";
        break;
      case 48:
        r += "0";
        break;
      default:
        r += String.fromCharCode(t);
    }
  return r;
}
function Em(e, r) {
  var t = Math.pow(10, r);
  return "" + Math.round(e * t) / t;
}
function Cm(e, r) {
  var t = e - Math.floor(e),
    i = Math.pow(10, r);
  return r < ("" + Math.round(t * i)).length ? 0 : Math.round(t * i);
}
function my(e, r) {
  return r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length
    ? 1
    : 0;
}
function py(e) {
  return e < 2147483647 && e > -2147483648
    ? "" + (e >= 0 ? e | 0 : (e - 1) | 0)
    : "" + Math.floor(e);
}
function Or(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Fp)) {
    var i = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? Or("n", i, t) : "(" + Or("n", i, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return uy(e, r, t);
  if (r.indexOf("%") !== -1) return dy(e, r, t);
  if (r.indexOf("E") !== -1) return Sp(r, t);
  if (r.charCodeAt(0) === 36)
    return "$" + Or(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n,
    a,
    o,
    s,
    c = Math.abs(t),
    l = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return l + oa(c, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (n = oa(t, 0)),
      n === "0" && (n = ""),
      n.length > r.length ? n : cr(r.substr(0, r.length - n.length)) + n
    );
  if ((a = r.match(Ap))) return fy(a, c, l);
  if (r.match(/^#+0+$/)) return l + oa(c, r.length - r.indexOf("0"));
  if ((a = r.match(Ip)))
    return (
      (n = Em(t, a[1].length)
        .replace(/^([^\.]+)$/, "$1." + cr(a[1]))
        .replace(/\.$/, "." + cr(a[1]))
        .replace(/\.(\d*)$/, function (p, f) {
          return "." + f + xt("0", cr(a[1]).length - f.length);
        })),
      r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".")
    );
  if (((r = r.replace(/^#+([0.])/, "$1")), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      l +
      Em(c, a[2].length)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, a[1].length ? "0." : ".")
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return l + Xi(oa(c, 0));
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0
      ? "-" + Or(e, r, -t)
      : Xi("" + (Math.floor(t) + my(t, a[1].length))) +
          "." +
          Kr(Cm(t, a[1].length), a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return Or(e, r.replace(/^#,#*,/, ""), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (n = ca(Or(e, r.replace(/[\\-]/g, ""), t))),
      (o = 0),
      ca(
        ca(r.replace(/\\/g, "")).replace(/[0#]/g, function (p) {
          return o < n.length ? n.charAt(o++) : p === "0" ? "0" : "";
        })
      )
    );
  if (r.match(Dp))
    return (
      (n = Or(e, "##########", t)),
      "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6)
    );
  var d = "";
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(a[4].length, 7)),
      (s = Sc(c, Math.pow(10, o) - 1, !1)),
      (n = "" + l),
      (d = Ei("n", a[1], s[1])),
      d.charAt(d.length - 1) == " " && (d = d.substr(0, d.length - 1) + "0"),
      (n += d + a[2] + "/" + a[3]),
      (d = Cc(s[2], o)),
      d.length < a[4].length &&
        (d = cr(a[4].substr(a[4].length - d.length)) + d),
      (n += d),
      n
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (s = Sc(c, Math.pow(10, o) - 1, !0)),
      l +
        (s[0] || (s[1] ? "" : "0")) +
        " " +
        (s[1]
          ? uu(s[1], o) + a[2] + "/" + a[3] + Cc(s[2], o)
          : xt(" ", 2 * o + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (n = oa(t, 0)),
      r.length <= n.length ? n : cr(r.substr(0, r.length - n.length)) + n
    );
  if ((a = r.match(/^([#0?]+)\.([#0]+)$/))) {
    (n = "" + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, "$1")),
      (o = n.indexOf("."));
    var u = r.indexOf(".") - o,
      h = r.length - n.length - u;
    return cr(r.substr(0, u) + n + r.substr(r.length - h));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return (
      (o = Cm(t, a[1].length)),
      t < 0
        ? "-" + Or(e, r, -t)
        : Xi(py(t))
            .replace(/^\d,\d{3}$/, "0$&")
            .replace(/^\d*$/, function (p) {
              return "00," + (p.length < 3 ? Kr(0, 3 - p.length) : "") + p;
            }) +
          "." +
          Kr(o, a[1].length)
    );
  switch (r) {
    case "###,##0.00":
      return Or(e, "#,##0.00", t);
    case "###,###":
    case "##,###":
    case "#,###":
      var m = Xi(oa(c, 0));
      return m !== "0" ? l + m : "";
    case "###,###.00":
      return Or(e, "###,##0.00", t).replace(/^0\./, ".");
    case "#,###.00":
      return Or(e, "#,##0.00", t).replace(/^0\./, ".");
    default:
  }
  throw new Error("unsupported format |" + r + "|");
}
function gy(e, r, t) {
  for (var i = r.length - 1; r.charCodeAt(i - 1) === 44; ) --i;
  return Ei(e, r.substr(0, i), t / Math.pow(10, 3 * (r.length - i)));
}
function vy(e, r, t) {
  var i = r.replace(Tp, ""),
    n = r.length - i.length;
  return Ei(e, i, t * Math.pow(10, 2 * n)) + xt("%", n);
}
function Mp(e, r) {
  var t,
    i = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (r == 0) return "0.0E+0";
    if (r < 0) return "-" + Mp(e, -r);
    var n = e.indexOf(".");
    n === -1 && (n = e.indexOf("E"));
    var a = Math.floor(Math.log(r) * Math.LOG10E) % n;
    if (
      (a < 0 && (a += n),
      (t = (r / Math.pow(10, a)).toPrecision(i + 1 + ((n + a) % n))),
      !t.match(/[Ee]/))
    ) {
      var o = Math.floor(Math.log(r) * Math.LOG10E);
      t.indexOf(".") === -1
        ? (t = t.charAt(0) + "." + t.substr(1) + "E+" + (o - t.length + a))
        : (t += "E+" + (o - a)),
        (t = t.replace(/\+-/, "-"));
    }
    t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (s, c, l, d) {
      return c + l + d.substr(0, (n + a) % n) + "." + d.substr(a) + "E";
    });
  } else t = r.toExponential(i);
  return (
    e.match(/E\+00$/) &&
      t.match(/e[+-]\d$/) &&
      (t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1)),
    e.match(/E\-/) && t.match(/e\+/) && (t = t.replace(/e\+/, "e")),
    t.replace("e", "E")
  );
}
function oi(e, r, t) {
  if (e.charCodeAt(0) === 40 && !r.match(Fp)) {
    var i = r.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return t >= 0 ? oi("n", i, t) : "(" + oi("n", i, -t) + ")";
  }
  if (r.charCodeAt(r.length - 1) === 44) return gy(e, r, t);
  if (r.indexOf("%") !== -1) return vy(e, r, t);
  if (r.indexOf("E") !== -1) return Mp(r, t);
  if (r.charCodeAt(0) === 36)
    return "$" + oi(e, r.substr(r.charAt(1) == " " ? 2 : 1), t);
  var n,
    a,
    o,
    s,
    c = Math.abs(t),
    l = t < 0 ? "-" : "";
  if (r.match(/^00+$/)) return l + Kr(c, r.length);
  if (r.match(/^[#?]+$/))
    return (
      (n = "" + t),
      t === 0 && (n = ""),
      n.length > r.length ? n : cr(r.substr(0, r.length - n.length)) + n
    );
  if ((a = r.match(Ap))) return hy(a, c, l);
  if (r.match(/^#+0+$/)) return l + Kr(c, r.length - r.indexOf("0"));
  if ((a = r.match(Ip)))
    return (
      (n = ("" + t)
        .replace(/^([^\.]+)$/, "$1." + cr(a[1]))
        .replace(/\.$/, "." + cr(a[1]))),
      (n = n.replace(/\.(\d*)$/, function (p, f) {
        return "." + f + xt("0", cr(a[1]).length - f.length);
      })),
      r.indexOf("0.") !== -1 ? n : n.replace(/^0\./, ".")
    );
  if (((r = r.replace(/^#+([0.])/, "$1")), (a = r.match(/^(0*)\.(#*)$/))))
    return (
      l +
      ("" + c)
        .replace(/\.(\d*[1-9])0*$/, ".$1")
        .replace(/^(-?\d*)$/, "$1.")
        .replace(/^0\./, a[1].length ? "0." : ".")
    );
  if ((a = r.match(/^#{1,3},##0(\.?)$/))) return l + Xi("" + c);
  if ((a = r.match(/^#,##0\.([#0]*0)$/)))
    return t < 0 ? "-" + oi(e, r, -t) : Xi("" + t) + "." + xt("0", a[1].length);
  if ((a = r.match(/^#,#*,#0/))) return oi(e, r.replace(/^#,#*,/, ""), t);
  if ((a = r.match(/^([0#]+)(\\?-([0#]+))+$/)))
    return (
      (n = ca(oi(e, r.replace(/[\\-]/g, ""), t))),
      (o = 0),
      ca(
        ca(r.replace(/\\/g, "")).replace(/[0#]/g, function (p) {
          return o < n.length ? n.charAt(o++) : p === "0" ? "0" : "";
        })
      )
    );
  if (r.match(Dp))
    return (
      (n = oi(e, "##########", t)),
      "(" + n.substr(0, 3) + ") " + n.substr(3, 3) + "-" + n.substr(6)
    );
  var d = "";
  if ((a = r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(a[4].length, 7)),
      (s = Sc(c, Math.pow(10, o) - 1, !1)),
      (n = "" + l),
      (d = Ei("n", a[1], s[1])),
      d.charAt(d.length - 1) == " " && (d = d.substr(0, d.length - 1) + "0"),
      (n += d + a[2] + "/" + a[3]),
      (d = Cc(s[2], o)),
      d.length < a[4].length &&
        (d = cr(a[4].substr(a[4].length - d.length)) + d),
      (n += d),
      n
    );
  if ((a = r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)))
    return (
      (o = Math.min(Math.max(a[1].length, a[4].length), 7)),
      (s = Sc(c, Math.pow(10, o) - 1, !0)),
      l +
        (s[0] || (s[1] ? "" : "0")) +
        " " +
        (s[1]
          ? uu(s[1], o) + a[2] + "/" + a[3] + Cc(s[2], o)
          : xt(" ", 2 * o + 1 + a[2].length + a[3].length))
    );
  if ((a = r.match(/^[#0?]+$/)))
    return (
      (n = "" + t),
      r.length <= n.length ? n : cr(r.substr(0, r.length - n.length)) + n
    );
  if ((a = r.match(/^([#0]+)\.([#0]+)$/))) {
    (n = "" + t.toFixed(Math.min(a[2].length, 10)).replace(/([^0])0+$/, "$1")),
      (o = n.indexOf("."));
    var u = r.indexOf(".") - o,
      h = r.length - n.length - u;
    return cr(r.substr(0, u) + n + r.substr(r.length - h));
  }
  if ((a = r.match(/^00,000\.([#0]*0)$/)))
    return t < 0
      ? "-" + oi(e, r, -t)
      : Xi("" + t)
          .replace(/^\d,\d{3}$/, "0$&")
          .replace(/^\d*$/, function (p) {
            return "00," + (p.length < 3 ? Kr(0, 3 - p.length) : "") + p;
          }) +
          "." +
          Kr(0, a[1].length);
  switch (r) {
    case "###,###":
    case "##,###":
    case "#,###":
      var m = Xi("" + c);
      return m !== "0" ? l + m : "";
    default:
      if (r.match(/\.[0#?]*$/))
        return (
          oi(e, r.slice(0, r.lastIndexOf(".")), t) +
          cr(r.slice(r.lastIndexOf(".")))
        );
  }
  throw new Error("unsupported format |" + r + "|");
}
function Ei(e, r, t) {
  return (t | 0) === t ? oi(e, r, t) : Or(e, r, t);
}
function xy(e) {
  for (var r = [], t = !1, i = 0, n = 0; i < e.length; ++i)
    switch (e.charCodeAt(i)) {
      case 34:
        t = !t;
        break;
      case 95:
      case 42:
      case 92:
        ++i;
        break;
      case 59:
        (r[r.length] = e.substr(n, i - n)), (n = i + 1);
    }
  if (((r[r.length] = e.substr(n)), t === !0))
    throw new Error("Format |" + e + "| unterminated string ");
  return r;
}
var Rp = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function pa(e) {
  for (var r = 0, t = "", i = ""; r < e.length; )
    switch ((t = e.charAt(r))) {
      case "G":
        Tc(e, r) && (r += 6), r++;
        break;
      case '"':
        for (; e.charCodeAt(++r) !== 34 && r < e.length; );
        ++r;
        break;
      case "\\":
        r += 2;
        break;
      case "_":
        r += 2;
        break;
      case "@":
        ++r;
        break;
      case "B":
      case "b":
        if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2") return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "\u4E0A":
        if (
          e.substr(r, 3).toUpperCase() === "A/P" ||
          e.substr(r, 5).toUpperCase() === "AM/PM" ||
          e.substr(r, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348"
        )
          return !0;
        ++r;
        break;
      case "[":
        for (i = t; e.charAt(r++) !== "]" && r < e.length; ) i += e.charAt(r);
        if (i.match(Rp)) return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (
          ;
          r < e.length &&
          ("0#?.,E+-%".indexOf((t = e.charAt(++r))) > -1 ||
            (t == "\\" &&
              e.charAt(r + 1) == "-" &&
              "0#".indexOf(e.charAt(r + 2)) > -1));

        );
        break;
      case "?":
        for (; e.charAt(++r) === t; );
        break;
      case "*":
        ++r, (e.charAt(r) == " " || e.charAt(r) == "*") && ++r;
        break;
      case "(":
      case ")":
        ++r;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1; );
        break;
      case " ":
        ++r;
        break;
      default:
        ++r;
        break;
    }
  return !1;
}
function _y(e, r, t, i) {
  for (
    var n = [], a = "", o = 0, s = "", c = "t", l, d, u, h = "H";
    o < e.length;

  )
    switch ((s = e.charAt(o))) {
      case "G":
        if (!Tc(e, o))
          throw new Error("unrecognized character " + s + " in " + e);
        (n[n.length] = { t: "G", v: "General" }), (o += 7);
        break;
      case '"':
        for (a = ""; (u = e.charCodeAt(++o)) !== 34 && o < e.length; )
          a += String.fromCharCode(u);
        (n[n.length] = { t: "t", v: a }), ++o;
        break;
      case "\\":
        var m = e.charAt(++o),
          p = m === "(" || m === ")" ? m : "t";
        (n[n.length] = { t: p, v: m }), ++o;
        break;
      case "_":
        (n[n.length] = { t: "t", v: " " }), (o += 2);
        break;
      case "@":
        (n[n.length] = { t: "T", v: r }), ++o;
        break;
      case "B":
      case "b":
        if (e.charAt(o + 1) === "1" || e.charAt(o + 1) === "2") {
          if (l == null && ((l = _n(r, t, e.charAt(o + 1) === "2")), l == null))
            return "";
          (n[n.length] = { t: "X", v: e.substr(o, 2) }), (c = s), (o += 2);
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        s = s.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (r < 0 || (l == null && ((l = _n(r, t)), l == null))) return "";
        for (a = s; ++o < e.length && e.charAt(o).toLowerCase() === s; ) a += s;
        s === "m" && c.toLowerCase() === "h" && (s = "M"),
          s === "h" && (s = h),
          (n[n.length] = { t: s, v: a }),
          (c = s);
        break;
      case "A":
      case "a":
      case "\u4E0A":
        var f = { t: s, v: s };
        if (
          (l == null && (l = _n(r, t)),
          e.substr(o, 3).toUpperCase() === "A/P"
            ? (l != null && (f.v = l.H >= 12 ? "P" : "A"),
              (f.t = "T"),
              (h = "h"),
              (o += 3))
            : e.substr(o, 5).toUpperCase() === "AM/PM"
            ? (l != null && (f.v = l.H >= 12 ? "PM" : "AM"),
              (f.t = "T"),
              (o += 5),
              (h = "h"))
            : e.substr(o, 5).toUpperCase() === "\u4E0A\u5348/\u4E0B\u5348"
            ? (l != null && (f.v = l.H >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348"),
              (f.t = "T"),
              (o += 5),
              (h = "h"))
            : ((f.t = "t"), ++o),
          l == null && f.t === "T")
        )
          return "";
        (n[n.length] = f), (c = s);
        break;
      case "[":
        for (a = s; e.charAt(o++) !== "]" && o < e.length; ) a += e.charAt(o);
        if (a.slice(-1) !== "]") throw 'unterminated "[" block: |' + a + "|";
        if (a.match(Rp)) {
          if (l == null && ((l = _n(r, t)), l == null)) return "";
          (n[n.length] = { t: "Z", v: a.toLowerCase() }), (c = a.charAt(1));
        } else
          a.indexOf("$") > -1 &&
            ((a = (a.match(/\$([^-\[\]]*)/) || [])[1] || "$"),
            pa(e) || (n[n.length] = { t: "t", v: a }));
        break;
      case ".":
        if (l != null) {
          for (a = s; ++o < e.length && (s = e.charAt(o)) === "0"; ) a += s;
          n[n.length] = { t: "s", v: a };
          break;
        }
      case "0":
      case "#":
        for (
          a = s;
          ++o < e.length && "0#?.,E+-%".indexOf((s = e.charAt(o))) > -1;

        )
          a += s;
        n[n.length] = { t: "n", v: a };
        break;
      case "?":
        for (a = s; e.charAt(++o) === s; ) a += s;
        (n[n.length] = { t: s, v: a }), (c = s);
        break;
      case "*":
        ++o, (e.charAt(o) == " " || e.charAt(o) == "*") && ++o;
        break;
      case "(":
      case ")":
        (n[n.length] = { t: i === 1 ? "t" : s, v: s }), ++o;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (a = s; o < e.length && "0123456789".indexOf(e.charAt(++o)) > -1; )
          a += e.charAt(o);
        n[n.length] = { t: "D", v: a };
        break;
      case " ":
        (n[n.length] = { t: s, v: s }), ++o;
        break;
      case "$":
        (n[n.length] = { t: "t", v: "$" }), ++o;
        break;
      default:
        if (",$-+/():!^&'~{}<>=\u20ACacfijklopqrtuvwxzP".indexOf(s) === -1)
          throw new Error("unrecognized character " + s + " in " + e);
        (n[n.length] = { t: "t", v: s }), ++o;
        break;
    }
  var g = 0,
    T = 0,
    E;
  for (o = n.length - 1, c = "t"; o >= 0; --o)
    switch (n[o].t) {
      case "h":
      case "H":
        (n[o].t = h), (c = "h"), g < 1 && (g = 1);
        break;
      case "s":
        (E = n[o].v.match(/\.0+$/)) && (T = Math.max(T, E[0].length - 1)),
          g < 3 && (g = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        c = n[o].t;
        break;
      case "m":
        c === "s" && ((n[o].t = "M"), g < 2 && (g = 2));
        break;
      case "X":
        break;
      case "Z":
        g < 1 && n[o].v.match(/[Hh]/) && (g = 1),
          g < 2 && n[o].v.match(/[Mm]/) && (g = 2),
          g < 3 && n[o].v.match(/[Ss]/) && (g = 3);
    }
  switch (g) {
    case 0:
      break;
    case 1:
      l.u >= 0.5 && ((l.u = 0), ++l.S),
        l.S >= 60 && ((l.S = 0), ++l.M),
        l.M >= 60 && ((l.M = 0), ++l.H);
      break;
    case 2:
      l.u >= 0.5 && ((l.u = 0), ++l.S), l.S >= 60 && ((l.S = 0), ++l.M);
      break;
  }
  var x = "",
    O;
  for (o = 0; o < n.length; ++o)
    switch (n[o].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        (n[o].v = ""), (n[o].t = ";");
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        (n[o].v = ly(n[o].t.charCodeAt(0), n[o].v, l, T)), (n[o].t = "t");
        break;
      case "n":
      case "?":
        for (
          O = o + 1;
          n[O] != null &&
          ((s = n[O].t) === "?" ||
            s === "D" ||
            ((s === " " || s === "t") &&
              n[O + 1] != null &&
              (n[O + 1].t === "?" ||
                (n[O + 1].t === "t" && n[O + 1].v === "/"))) ||
            (n[o].t === "(" && (s === " " || s === "n" || s === ")")) ||
            (s === "t" &&
              (n[O].v === "/" ||
                (n[O].v === " " && n[O + 1] != null && n[O + 1].t == "?"))));

        )
          (n[o].v += n[O].v), (n[O] = { v: "", t: ";" }), ++O;
        (x += n[o].v), (o = O - 1);
        break;
      case "G":
        (n[o].t = "t"), (n[o].v = wn(r, t));
        break;
    }
  var z = "",
    F,
    C;
  if (x.length > 0) {
    x.charCodeAt(0) == 40
      ? ((F = r < 0 && x.charCodeAt(0) === 45 ? -r : r), (C = Ei("n", x, F)))
      : ((F = r < 0 && i > 1 ? -r : r),
        (C = Ei("n", x, F)),
        F < 0 &&
          n[0] &&
          n[0].t == "t" &&
          ((C = C.substr(1)), (n[0].v = "-" + n[0].v))),
      (O = C.length - 1);
    var P = n.length;
    for (o = 0; o < n.length; ++o)
      if (n[o] != null && n[o].t != "t" && n[o].v.indexOf(".") > -1) {
        P = o;
        break;
      }
    var M = n.length;
    if (P === n.length && C.indexOf("E") === -1) {
      for (o = n.length - 1; o >= 0; --o)
        n[o] == null ||
          "n?".indexOf(n[o].t) === -1 ||
          (O >= n[o].v.length - 1
            ? ((O -= n[o].v.length), (n[o].v = C.substr(O + 1, n[o].v.length)))
            : O < 0
            ? (n[o].v = "")
            : ((n[o].v = C.substr(0, O + 1)), (O = -1)),
          (n[o].t = "t"),
          (M = o));
      O >= 0 && M < n.length && (n[M].v = C.substr(0, O + 1) + n[M].v);
    } else if (P !== n.length && C.indexOf("E") === -1) {
      for (O = C.indexOf(".") - 1, o = P; o >= 0; --o)
        if (!(n[o] == null || "n?".indexOf(n[o].t) === -1)) {
          for (
            d =
              n[o].v.indexOf(".") > -1 && o === P
                ? n[o].v.indexOf(".") - 1
                : n[o].v.length - 1,
              z = n[o].v.substr(d + 1);
            d >= 0;
            --d
          )
            O >= 0 &&
              (n[o].v.charAt(d) === "0" || n[o].v.charAt(d) === "#") &&
              (z = C.charAt(O--) + z);
          (n[o].v = z), (n[o].t = "t"), (M = o);
        }
      for (
        O >= 0 && M < n.length && (n[M].v = C.substr(0, O + 1) + n[M].v),
          O = C.indexOf(".") + 1,
          o = P;
        o < n.length;
        ++o
      )
        if (!(n[o] == null || ("n?(".indexOf(n[o].t) === -1 && o !== P))) {
          for (
            d =
              n[o].v.indexOf(".") > -1 && o === P ? n[o].v.indexOf(".") + 1 : 0,
              z = n[o].v.substr(0, d);
            d < n[o].v.length;
            ++d
          )
            O < C.length && (z += C.charAt(O++));
          (n[o].v = z), (n[o].t = "t"), (M = o);
        }
    }
  }
  for (o = 0; o < n.length; ++o)
    n[o] != null &&
      "n?".indexOf(n[o].t) > -1 &&
      ((F = i > 1 && r < 0 && o > 0 && n[o - 1].v === "-" ? -r : r),
      (n[o].v = Ei(n[o].t, n[o].v, F)),
      (n[o].t = "t"));
  var X = "";
  for (o = 0; o !== n.length; ++o) n[o] != null && (X += n[o].v);
  return X;
}
var Tm = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function Sm(e, r) {
  if (r == null) return !1;
  var t = parseFloat(r[2]);
  switch (r[1]) {
    case "=":
      if (e == t) return !0;
      break;
    case ">":
      if (e > t) return !0;
      break;
    case "<":
      if (e < t) return !0;
      break;
    case "<>":
      if (e != t) return !0;
      break;
    case ">=":
      if (e >= t) return !0;
      break;
    case "<=":
      if (e <= t) return !0;
      break;
  }
  return !1;
}
function by(e, r) {
  var t = xy(e),
    i = t.length,
    n = t[i - 1].indexOf("@");
  if ((i < 4 && n > -1 && --i, t.length > 4))
    throw new Error("cannot find right format for |" + t.join("|") + "|");
  if (typeof r != "number")
    return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];
  switch (t.length) {
    case 1:
      t =
        n > -1
          ? ["General", "General", "General", t[0]]
          : [t[0], t[0], t[0], "@"];
      break;
    case 2:
      t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
      break;
    case 3:
      t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
      break;
    case 4:
      break;
  }
  var a = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
  if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [i, a];
  if (t[0].match(/\[[=<>]/) != null || t[1].match(/\[[=<>]/) != null) {
    var o = t[0].match(Tm),
      s = t[1].match(Tm);
    return Sm(r, o)
      ? [i, t[0]]
      : Sm(r, s)
      ? [i, t[1]]
      : [i, t[o != null && s != null ? 2 : 1]];
  }
  return [i, a];
}
function Pr(e, r, t) {
  t == null && (t = {});
  var i = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && t.dateNF ? (i = t.dateNF) : (i = e);
      break;
    case "number":
      e == 14 && t.dateNF
        ? (i = t.dateNF)
        : (i = (t.table != null ? t.table : De)[e]),
        i == null && (i = (t.table && t.table[km[e]]) || De[km[e]]),
        i == null && (i = ry[e] || "General");
      break;
  }
  if (Tc(i, 0)) return wn(r, t);
  r instanceof Date && (r = Cp(r, t.date1904));
  var n = by(i, r);
  if (Tc(n[1])) return wn(r, t);
  if (r === !0) r = "TRUE";
  else if (r === !1) r = "FALSE";
  else if (r === "" || r == null) return "";
  return _y(n[1], r, t, n[0]);
}
function bn(e, r) {
  if (typeof r != "number") {
    r = +r || -1;
    for (var t = 0; t < 392; ++t) {
      if (De[t] == null) {
        r < 0 && (r = t);
        continue;
      }
      if (De[t] == e) {
        r = t;
        break;
      }
    }
    r < 0 && (r = 391);
  }
  return (De[r] = e), r;
}
function Op() {
  De = ty();
}
var yy = {
    5: '"$"#,##0_);\\("$"#,##0\\)',
    6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    23: "General",
    24: "General",
    25: "General",
    26: "General",
    27: "m/d/yy",
    28: "m/d/yy",
    29: "m/d/yy",
    30: "m/d/yy",
    31: "m/d/yy",
    32: "h:mm:ss",
    33: "h:mm:ss",
    34: "h:mm:ss",
    35: "h:mm:ss",
    36: "m/d/yy",
    41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
    42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
    43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
    44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
    50: "m/d/yy",
    51: "m/d/yy",
    52: "m/d/yy",
    53: "m/d/yy",
    54: "m/d/yy",
    55: "m/d/yy",
    56: "m/d/yy",
    57: "m/d/yy",
    58: "m/d/yy",
    59: "0",
    60: "0.00",
    61: "#,##0",
    62: "#,##0.00",
    63: '"$"#,##0_);\\("$"#,##0\\)',
    64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
    65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
    66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    67: "0%",
    68: "0.00%",
    69: "# ?/?",
    70: "# ??/??",
    71: "m/d/yy",
    72: "m/d/yy",
    73: "d-mmm-yy",
    74: "d-mmm",
    75: "mmm-yy",
    76: "h:mm",
    77: "h:mm:ss",
    78: "m/d/yy h:mm",
    79: "mm:ss",
    80: "[h]:mm:ss",
    81: "mmss.0",
  },
  Np = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function wy(e) {
  var r = typeof e == "number" ? De[e] : e;
  return (r = r.replace(Np, "(\\d+)")), new RegExp("^" + r + "$");
}
function ky(e, r, t) {
  var i = -1,
    n = -1,
    a = -1,
    o = -1,
    s = -1,
    c = -1;
  (r.match(Np) || []).forEach(function (u, h) {
    var m = parseInt(t[h + 1], 10);
    switch (u.toLowerCase().charAt(0)) {
      case "y":
        i = m;
        break;
      case "d":
        a = m;
        break;
      case "h":
        o = m;
        break;
      case "s":
        c = m;
        break;
      case "m":
        o >= 0 ? (s = m) : (n = m);
        break;
    }
  }),
    c >= 0 && s == -1 && n >= 0 && ((s = n), (n = -1));
  var l =
    ("" + (i >= 0 ? i : new Date().getFullYear())).slice(-4) +
    "-" +
    ("00" + (n >= 1 ? n : 1)).slice(-2) +
    "-" +
    ("00" + (a >= 1 ? a : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var d =
    ("00" + (o >= 0 ? o : 0)).slice(-2) +
    ":" +
    ("00" + (s >= 0 ? s : 0)).slice(-2) +
    ":" +
    ("00" + (c >= 0 ? c : 0)).slice(-2);
  return o == -1 && s == -1 && c == -1
    ? l
    : i == -1 && n == -1 && a == -1
    ? d
    : l + "T" + d;
}
var Ey = (function () {
    var e = {};
    e.version = "1.2.0";
    function r() {
      for (var C = 0, P = new Array(256), M = 0; M != 256; ++M)
        (C = M),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (C = C & 1 ? -306674912 ^ (C >>> 1) : C >>> 1),
          (P[M] = C);
      return typeof Int32Array < "u" ? new Int32Array(P) : P;
    }
    var t = r();
    function i(C) {
      var P = 0,
        M = 0,
        X = 0,
        G = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
      for (X = 0; X != 256; ++X) G[X] = C[X];
      for (X = 0; X != 256; ++X)
        for (M = C[X], P = 256 + X; P < 4096; P += 256)
          M = G[P] = (M >>> 8) ^ C[M & 255];
      var R = [];
      for (X = 1; X != 16; ++X)
        R[X - 1] =
          typeof Int32Array < "u"
            ? G.subarray(X * 256, X * 256 + 256)
            : G.slice(X * 256, X * 256 + 256);
      return R;
    }
    var n = i(t),
      a = n[0],
      o = n[1],
      s = n[2],
      c = n[3],
      l = n[4],
      d = n[5],
      u = n[6],
      h = n[7],
      m = n[8],
      p = n[9],
      f = n[10],
      g = n[11],
      T = n[12],
      E = n[13],
      x = n[14];
    function O(C, P) {
      for (var M = P ^ -1, X = 0, G = C.length; X < G; )
        M = (M >>> 8) ^ t[(M ^ C.charCodeAt(X++)) & 255];
      return ~M;
    }
    function z(C, P) {
      for (var M = P ^ -1, X = C.length - 15, G = 0; G < X; )
        M =
          x[C[G++] ^ (M & 255)] ^
          E[C[G++] ^ ((M >> 8) & 255)] ^
          T[C[G++] ^ ((M >> 16) & 255)] ^
          g[C[G++] ^ (M >>> 24)] ^
          f[C[G++]] ^
          p[C[G++]] ^
          m[C[G++]] ^
          h[C[G++]] ^
          u[C[G++]] ^
          d[C[G++]] ^
          l[C[G++]] ^
          c[C[G++]] ^
          s[C[G++]] ^
          o[C[G++]] ^
          a[C[G++]] ^
          t[C[G++]];
      for (X += 15; G < X; ) M = (M >>> 8) ^ t[(M ^ C[G++]) & 255];
      return ~M;
    }
    function F(C, P) {
      for (var M = P ^ -1, X = 0, G = C.length, R = 0, re = 0; X < G; )
        (R = C.charCodeAt(X++)),
          R < 128
            ? (M = (M >>> 8) ^ t[(M ^ R) & 255])
            : R < 2048
            ? ((M = (M >>> 8) ^ t[(M ^ (192 | ((R >> 6) & 31))) & 255]),
              (M = (M >>> 8) ^ t[(M ^ (128 | (R & 63))) & 255]))
            : R >= 55296 && R < 57344
            ? ((R = (R & 1023) + 64),
              (re = C.charCodeAt(X++) & 1023),
              (M = (M >>> 8) ^ t[(M ^ (240 | ((R >> 8) & 7))) & 255]),
              (M = (M >>> 8) ^ t[(M ^ (128 | ((R >> 2) & 63))) & 255]),
              (M =
                (M >>> 8) ^
                t[(M ^ (128 | ((re >> 6) & 15) | ((R & 3) << 4))) & 255]),
              (M = (M >>> 8) ^ t[(M ^ (128 | (re & 63))) & 255]))
            : ((M = (M >>> 8) ^ t[(M ^ (224 | ((R >> 12) & 15))) & 255]),
              (M = (M >>> 8) ^ t[(M ^ (128 | ((R >> 6) & 63))) & 255]),
              (M = (M >>> 8) ^ t[(M ^ (128 | (R & 63))) & 255]));
      return ~M;
    }
    return (e.table = t), (e.bstr = O), (e.buf = z), (e.str = F), e;
  })(),
  Ue = (function () {
    var r = {};
    r.version = "1.2.1";
    function t(v, y) {
      for (
        var _ = v.split("/"),
          b = y.split("/"),
          w = 0,
          k = 0,
          L = Math.min(_.length, b.length);
        w < L;
        ++w
      ) {
        if ((k = _[w].length - b[w].length)) return k;
        if (_[w] != b[w]) return _[w] < b[w] ? -1 : 1;
      }
      return _.length - b.length;
    }
    function i(v) {
      if (v.charAt(v.length - 1) == "/")
        return v.slice(0, -1).indexOf("/") === -1 ? v : i(v.slice(0, -1));
      var y = v.lastIndexOf("/");
      return y === -1 ? v : v.slice(0, y + 1);
    }
    function n(v) {
      if (v.charAt(v.length - 1) == "/") return n(v.slice(0, -1));
      var y = v.lastIndexOf("/");
      return y === -1 ? v : v.slice(y + 1);
    }
    function a(v, y) {
      typeof y == "string" && (y = new Date(y));
      var _ = y.getHours();
      (_ = (_ << 6) | y.getMinutes()),
        (_ = (_ << 5) | (y.getSeconds() >>> 1)),
        v.write_shift(2, _);
      var b = y.getFullYear() - 1980;
      (b = (b << 4) | (y.getMonth() + 1)),
        (b = (b << 5) | y.getDate()),
        v.write_shift(2, b);
    }
    function o(v) {
      var y = v.read_shift(2) & 65535,
        _ = v.read_shift(2) & 65535,
        b = new Date(),
        w = _ & 31;
      _ >>>= 5;
      var k = _ & 15;
      (_ >>>= 4),
        b.setMilliseconds(0),
        b.setFullYear(_ + 1980),
        b.setMonth(k - 1),
        b.setDate(w);
      var L = y & 31;
      y >>>= 5;
      var q = y & 63;
      return (
        (y >>>= 6), b.setHours(y), b.setMinutes(q), b.setSeconds(L << 1), b
      );
    }
    function s(v) {
      jt(v, 0);
      for (var y = {}, _ = 0; v.l <= v.length - 4; ) {
        var b = v.read_shift(2),
          w = v.read_shift(2),
          k = v.l + w,
          L = {};
        switch (b) {
          case 21589:
            (_ = v.read_shift(1)),
              _ & 1 && (L.mtime = v.read_shift(4)),
              w > 5 &&
                (_ & 2 && (L.atime = v.read_shift(4)),
                _ & 4 && (L.ctime = v.read_shift(4))),
              L.mtime && (L.mt = new Date(L.mtime * 1e3));
            break;
        }
        (v.l = k), (y[b] = L);
      }
      return y;
    }
    var c;
    function l() {
      return c || (c = {});
    }
    function d(v, y) {
      if (v[0] == 80 && v[1] == 75) return zu(v, y);
      if ((v[0] | 32) == 109 && (v[1] | 32) == 105) return sv(v, y);
      if (v.length < 512)
        throw new Error("CFB file size " + v.length + " < 512");
      var _ = 3,
        b = 512,
        w = 0,
        k = 0,
        L = 0,
        q = 0,
        j = 0,
        B = [],
        U = v.slice(0, 512);
      jt(U, 0);
      var J = u(U);
      switch (((_ = J[0]), _)) {
        case 3:
          b = 512;
          break;
        case 4:
          b = 4096;
          break;
        case 0:
          if (J[1] == 0) return zu(v, y);
        default:
          throw new Error("Major Version: Expected 3 or 4 saw " + _);
      }
      b !== 512 && ((U = v.slice(0, b)), jt(U, 28));
      var ie = v.slice(0, b);
      h(U, _);
      var ve = U.read_shift(4, "i");
      if (_ === 3 && ve !== 0)
        throw new Error("# Directory Sectors: Expected 0 saw " + ve);
      (U.l += 4),
        (L = U.read_shift(4, "i")),
        (U.l += 4),
        U.chk("00100000", "Mini Stream Cutoff Size: "),
        (q = U.read_shift(4, "i")),
        (w = U.read_shift(4, "i")),
        (j = U.read_shift(4, "i")),
        (k = U.read_shift(4, "i"));
      for (
        var ne = -1, se = 0;
        se < 109 && ((ne = U.read_shift(4, "i")), !(ne < 0));
        ++se
      )
        B[se] = ne;
      var Ae = m(v, b);
      g(j, k, Ae, b, B);
      var dt = E(Ae, L, B, b);
      (dt[L].name = "!Directory"),
        w > 0 && q !== re && (dt[q].name = "!MiniFAT"),
        (dt[B[0]].name = "!FAT"),
        (dt.fat_addrs = B),
        (dt.ssz = b);
      var fr = {},
        kt = [],
        gr = [],
        ya = [];
      x(L, dt, Ae, kt, w, fr, gr, q), p(gr, ya, kt), kt.shift();
      var wa = { FileIndex: gr, FullPaths: ya };
      return y && y.raw && (wa.raw = { header: ie, sectors: Ae }), wa;
    }
    function u(v) {
      if (v[v.l] == 80 && v[v.l + 1] == 75) return [0, 0];
      v.chk(be, "Header Signature: "), (v.l += 16);
      var y = v.read_shift(2, "u");
      return [v.read_shift(2, "u"), y];
    }
    function h(v, y) {
      var _ = 9;
      switch (((v.l += 2), (_ = v.read_shift(2)))) {
        case 9:
          if (y != 3) throw new Error("Sector Shift: Expected 9 saw " + _);
          break;
        case 12:
          if (y != 4) throw new Error("Sector Shift: Expected 12 saw " + _);
          break;
        default:
          throw new Error("Sector Shift: Expected 9 or 12 saw " + _);
      }
      v.chk("0600", "Mini Sector Shift: "), v.chk("000000000000", "Reserved: ");
    }
    function m(v, y) {
      for (var _ = Math.ceil(v.length / y) - 1, b = [], w = 1; w < _; ++w)
        b[w - 1] = v.slice(w * y, (w + 1) * y);
      return (b[_ - 1] = v.slice(_ * y)), b;
    }
    function p(v, y, _) {
      for (
        var b = 0, w = 0, k = 0, L = 0, q = 0, j = _.length, B = [], U = [];
        b < j;
        ++b
      )
        (B[b] = U[b] = b), (y[b] = _[b]);
      for (; q < U.length; ++q)
        (b = U[q]),
          (w = v[b].L),
          (k = v[b].R),
          (L = v[b].C),
          B[b] === b &&
            (w !== -1 && B[w] !== w && (B[b] = B[w]),
            k !== -1 && B[k] !== k && (B[b] = B[k])),
          L !== -1 && (B[L] = b),
          w !== -1 &&
            b != B[b] &&
            ((B[w] = B[b]), U.lastIndexOf(w) < q && U.push(w)),
          k !== -1 &&
            b != B[b] &&
            ((B[k] = B[b]), U.lastIndexOf(k) < q && U.push(k));
      for (b = 1; b < j; ++b)
        B[b] === b &&
          (k !== -1 && B[k] !== k
            ? (B[b] = B[k])
            : w !== -1 && B[w] !== w && (B[b] = B[w]));
      for (b = 1; b < j; ++b)
        if (v[b].type !== 0) {
          if (((q = b), q != B[q]))
            do (q = B[q]), (y[b] = y[q] + "/" + y[b]);
            while (q !== 0 && B[q] !== -1 && q != B[q]);
          B[b] = -1;
        }
      for (y[0] += "/", b = 1; b < j; ++b) v[b].type !== 2 && (y[b] += "/");
    }
    function f(v, y, _) {
      for (var b = v.start, w = v.size, k = [], L = b; _ && w > 0 && L >= 0; )
        k.push(y.slice(L * R, L * R + R)), (w -= R), (L = xn(_, L * 4));
      return k.length === 0 ? At(0) : Gi(k).slice(0, v.size);
    }
    function g(v, y, _, b, w) {
      var k = re;
      if (v === re) {
        if (y !== 0) throw new Error("DIFAT chain shorter than expected");
      } else if (v !== -1) {
        var L = _[v],
          q = (b >>> 2) - 1;
        if (!L) return;
        for (var j = 0; j < q && (k = xn(L, j * 4)) !== re; ++j) w.push(k);
        g(xn(L, b - 4), y - 1, _, b, w);
      }
    }
    function T(v, y, _, b, w) {
      var k = [],
        L = [];
      w || (w = []);
      var q = b - 1,
        j = 0,
        B = 0;
      for (j = y; j >= 0; ) {
        (w[j] = !0), (k[k.length] = j), L.push(v[j]);
        var U = _[Math.floor((j * 4) / b)];
        if (((B = (j * 4) & q), b < 4 + B))
          throw new Error("FAT boundary crossed: " + j + " 4 " + b);
        if (!v[U]) break;
        j = xn(v[U], B);
      }
      return { nodes: k, data: Bm([L]) };
    }
    function E(v, y, _, b) {
      var w = v.length,
        k = [],
        L = [],
        q = [],
        j = [],
        B = b - 1,
        U = 0,
        J = 0,
        ie = 0,
        ve = 0;
      for (U = 0; U < w; ++U)
        if (((q = []), (ie = U + y), ie >= w && (ie -= w), !L[ie])) {
          j = [];
          var ne = [];
          for (J = ie; J >= 0; ) {
            (ne[J] = !0), (L[J] = !0), (q[q.length] = J), j.push(v[J]);
            var se = _[Math.floor((J * 4) / b)];
            if (((ve = (J * 4) & B), b < 4 + ve))
              throw new Error("FAT boundary crossed: " + J + " 4 " + b);
            if (!v[se] || ((J = xn(v[se], ve)), ne[J])) break;
          }
          k[ie] = { nodes: q, data: Bm([j]) };
        }
      return k;
    }
    function x(v, y, _, b, w, k, L, q) {
      for (
        var j = 0, B = b.length ? 2 : 0, U = y[v].data, J = 0, ie = 0, ve;
        J < U.length;
        J += 128
      ) {
        var ne = U.slice(J, J + 128);
        jt(ne, 64),
          (ie = ne.read_shift(2)),
          (ve = Lc(ne, 0, ie - B)),
          b.push(ve);
        var se = {
            name: ve,
            type: ne.read_shift(1),
            color: ne.read_shift(1),
            L: ne.read_shift(4, "i"),
            R: ne.read_shift(4, "i"),
            C: ne.read_shift(4, "i"),
            clsid: ne.read_shift(16),
            state: ne.read_shift(4, "i"),
            start: 0,
            size: 0,
          },
          Ae =
            ne.read_shift(2) +
            ne.read_shift(2) +
            ne.read_shift(2) +
            ne.read_shift(2);
        Ae !== 0 && (se.ct = O(ne, ne.l - 8));
        var dt =
          ne.read_shift(2) +
          ne.read_shift(2) +
          ne.read_shift(2) +
          ne.read_shift(2);
        dt !== 0 && (se.mt = O(ne, ne.l - 8)),
          (se.start = ne.read_shift(4, "i")),
          (se.size = ne.read_shift(4, "i")),
          se.size < 0 &&
            se.start < 0 &&
            ((se.size = se.type = 0), (se.start = re), (se.name = "")),
          se.type === 5
            ? ((j = se.start), w > 0 && j !== re && (y[j].name = "!StreamData"))
            : se.size >= 4096
            ? ((se.storage = "fat"),
              y[se.start] === void 0 &&
                (y[se.start] = T(_, se.start, y.fat_addrs, y.ssz)),
              (y[se.start].name = se.name),
              (se.content = y[se.start].data.slice(0, se.size)))
            : ((se.storage = "minifat"),
              se.size < 0
                ? (se.size = 0)
                : j !== re &&
                  se.start !== re &&
                  y[j] &&
                  (se.content = f(se, y[j].data, (y[q] || {}).data))),
          se.content && jt(se.content, 0),
          (k[ve] = se),
          L.push(se);
      }
    }
    function O(v, y) {
      return new Date(
        ((Nt(v, y + 4) / 1e7) * Math.pow(2, 32) +
          Nt(v, y) / 1e7 -
          11644473600) *
          1e3
      );
    }
    function z(v, y) {
      return l(), d(c.readFileSync(v), y);
    }
    function F(v, y) {
      var _ = y && y.type;
      switch (
        (_ || (je && Buffer.isBuffer(v) && (_ = "buffer")), _ || "base64")
      ) {
        case "file":
          return z(v, y);
        case "base64":
          return d(Xr(wr(v)), y);
        case "binary":
          return d(Xr(v), y);
      }
      return d(v, y);
    }
    function C(v, y) {
      var _ = y || {},
        b = _.root || "Root Entry";
      if (
        (v.FullPaths || (v.FullPaths = []),
        v.FileIndex || (v.FileIndex = []),
        v.FullPaths.length !== v.FileIndex.length)
      )
        throw new Error("inconsistent CFB structure");
      v.FullPaths.length === 0 &&
        ((v.FullPaths[0] = b + "/"), (v.FileIndex[0] = { name: b, type: 5 })),
        _.CLSID && (v.FileIndex[0].clsid = _.CLSID),
        P(v);
    }
    function P(v) {
      var y = "Sh33tJ5";
      if (!Ue.find(v, "/" + y)) {
        var _ = At(4);
        (_[0] = 55),
          (_[1] = _[3] = 50),
          (_[2] = 54),
          v.FileIndex.push({
            name: y,
            type: 2,
            content: _,
            size: 4,
            L: 69,
            R: 69,
            C: 69,
          }),
          v.FullPaths.push(v.FullPaths[0] + y),
          M(v);
      }
    }
    function M(v, y) {
      C(v);
      for (var _ = !1, b = !1, w = v.FullPaths.length - 1; w >= 0; --w) {
        var k = v.FileIndex[w];
        switch (k.type) {
          case 0:
            b ? (_ = !0) : (v.FileIndex.pop(), v.FullPaths.pop());
            break;
          case 1:
          case 2:
          case 5:
            (b = !0),
              isNaN(k.R * k.L * k.C) && (_ = !0),
              k.R > -1 && k.L > -1 && k.R == k.L && (_ = !0);
            break;
          default:
            _ = !0;
            break;
        }
      }
      if (!(!_ && !y)) {
        var L = new Date(1987, 1, 19),
          q = 0,
          j = Object.create ? Object.create(null) : {},
          B = [];
        for (w = 0; w < v.FullPaths.length; ++w)
          (j[v.FullPaths[w]] = !0),
            v.FileIndex[w].type !== 0 &&
              B.push([v.FullPaths[w], v.FileIndex[w]]);
        for (w = 0; w < B.length; ++w) {
          var U = i(B[w][0]);
          (b = j[U]),
            b ||
              (B.push([
                U,
                {
                  name: n(U).replace("/", ""),
                  type: 1,
                  clsid: Ce,
                  ct: L,
                  mt: L,
                  content: null,
                },
              ]),
              (j[U] = !0));
        }
        for (
          B.sort(function (ve, ne) {
            return t(ve[0], ne[0]);
          }),
            v.FullPaths = [],
            v.FileIndex = [],
            w = 0;
          w < B.length;
          ++w
        )
          (v.FullPaths[w] = B[w][0]), (v.FileIndex[w] = B[w][1]);
        for (w = 0; w < B.length; ++w) {
          var J = v.FileIndex[w],
            ie = v.FullPaths[w];
          if (
            ((J.name = n(ie).replace("/", "")),
            (J.L = J.R = J.C = -(J.color = 1)),
            (J.size = J.content ? J.content.length : 0),
            (J.start = 0),
            (J.clsid = J.clsid || Ce),
            w === 0)
          )
            (J.C = B.length > 1 ? 1 : -1), (J.size = 0), (J.type = 5);
          else if (ie.slice(-1) == "/") {
            for (q = w + 1; q < B.length && i(v.FullPaths[q]) != ie; ++q);
            for (
              J.C = q >= B.length ? -1 : q, q = w + 1;
              q < B.length && i(v.FullPaths[q]) != i(ie);
              ++q
            );
            (J.R = q >= B.length ? -1 : q), (J.type = 1);
          } else
            i(v.FullPaths[w + 1] || "") == i(ie) && (J.R = w + 1), (J.type = 2);
        }
      }
    }
    function X(v, y) {
      var _ = y || {};
      if (_.fileType == "mad") return cv(v, _);
      switch ((M(v), _.fileType)) {
        case "zip":
          return tv(v, _);
      }
      var b = (function (ve) {
          for (var ne = 0, se = 0, Ae = 0; Ae < ve.FileIndex.length; ++Ae) {
            var dt = ve.FileIndex[Ae];
            if (dt.content) {
              var fr = dt.content.length;
              fr > 0 &&
                (fr < 4096 ? (ne += (fr + 63) >> 6) : (se += (fr + 511) >> 9));
            }
          }
          for (
            var kt = (ve.FullPaths.length + 3) >> 2,
              gr = (ne + 7) >> 3,
              ya = (ne + 127) >> 7,
              wa = gr + se + kt + ya,
              Ji = (wa + 127) >> 7,
              $c = Ji <= 109 ? 0 : Math.ceil((Ji - 109) / 127);
            (wa + Ji + $c + 127) >> 7 > Ji;

          )
            $c = ++Ji <= 109 ? 0 : Math.ceil((Ji - 109) / 127);
          var hi = [1, $c, Ji, ya, kt, se, ne, 0];
          return (
            (ve.FileIndex[0].size = ne << 6),
            (hi[7] =
              (ve.FileIndex[0].start =
                hi[0] + hi[1] + hi[2] + hi[3] + hi[4] + hi[5]) +
              ((hi[6] + 7) >> 3)),
            hi
          );
        })(v),
        w = At(b[7] << 9),
        k = 0,
        L = 0;
      {
        for (k = 0; k < 8; ++k) w.write_shift(1, oe[k]);
        for (k = 0; k < 8; ++k) w.write_shift(2, 0);
        for (
          w.write_shift(2, 62),
            w.write_shift(2, 3),
            w.write_shift(2, 65534),
            w.write_shift(2, 9),
            w.write_shift(2, 6),
            k = 0;
          k < 3;
          ++k
        )
          w.write_shift(2, 0);
        for (
          w.write_shift(4, 0),
            w.write_shift(4, b[2]),
            w.write_shift(4, b[0] + b[1] + b[2] + b[3] - 1),
            w.write_shift(4, 0),
            w.write_shift(4, 4096),
            w.write_shift(4, b[3] ? b[0] + b[1] + b[2] - 1 : re),
            w.write_shift(4, b[3]),
            w.write_shift(-4, b[1] ? b[0] - 1 : re),
            w.write_shift(4, b[1]),
            k = 0;
          k < 109;
          ++k
        )
          w.write_shift(-4, k < b[2] ? b[1] + k : -1);
      }
      if (b[1])
        for (L = 0; L < b[1]; ++L) {
          for (; k < 236 + L * 127; ++k)
            w.write_shift(-4, k < b[2] ? b[1] + k : -1);
          w.write_shift(-4, L === b[1] - 1 ? re : L + 1);
        }
      var q = function (ve) {
        for (L += ve; k < L - 1; ++k) w.write_shift(-4, k + 1);
        ve && (++k, w.write_shift(-4, re));
      };
      for (L = k = 0, L += b[1]; k < L; ++k) w.write_shift(-4, _e.DIFSECT);
      for (L += b[2]; k < L; ++k) w.write_shift(-4, _e.FATSECT);
      q(b[3]), q(b[4]);
      for (var j = 0, B = 0, U = v.FileIndex[0]; j < v.FileIndex.length; ++j)
        (U = v.FileIndex[j]),
          U.content &&
            ((B = U.content.length),
            !(B < 4096) && ((U.start = L), q((B + 511) >> 9)));
      for (q((b[6] + 7) >> 3); w.l & 511; ) w.write_shift(-4, _e.ENDOFCHAIN);
      for (L = k = 0, j = 0; j < v.FileIndex.length; ++j)
        (U = v.FileIndex[j]),
          U.content &&
            ((B = U.content.length),
            !(!B || B >= 4096) && ((U.start = L), q((B + 63) >> 6)));
      for (; w.l & 511; ) w.write_shift(-4, _e.ENDOFCHAIN);
      for (k = 0; k < b[4] << 2; ++k) {
        var J = v.FullPaths[k];
        if (!J || J.length === 0) {
          for (j = 0; j < 17; ++j) w.write_shift(4, 0);
          for (j = 0; j < 3; ++j) w.write_shift(4, -1);
          for (j = 0; j < 12; ++j) w.write_shift(4, 0);
          continue;
        }
        (U = v.FileIndex[k]), k === 0 && (U.start = U.size ? U.start - 1 : re);
        var ie = (k === 0 && _.root) || U.name;
        if (
          ((B = 2 * (ie.length + 1)),
          w.write_shift(64, ie, "utf16le"),
          w.write_shift(2, B),
          w.write_shift(1, U.type),
          w.write_shift(1, U.color),
          w.write_shift(-4, U.L),
          w.write_shift(-4, U.R),
          w.write_shift(-4, U.C),
          U.clsid)
        )
          w.write_shift(16, U.clsid, "hex");
        else for (j = 0; j < 4; ++j) w.write_shift(4, 0);
        w.write_shift(4, U.state || 0),
          w.write_shift(4, 0),
          w.write_shift(4, 0),
          w.write_shift(4, 0),
          w.write_shift(4, 0),
          w.write_shift(4, U.start),
          w.write_shift(4, U.size),
          w.write_shift(4, 0);
      }
      for (k = 1; k < v.FileIndex.length; ++k)
        if (((U = v.FileIndex[k]), U.size >= 4096))
          if (((w.l = (U.start + 1) << 9), je && Buffer.isBuffer(U.content)))
            U.content.copy(w, w.l, 0, U.size), (w.l += (U.size + 511) & -512);
          else {
            for (j = 0; j < U.size; ++j) w.write_shift(1, U.content[j]);
            for (; j & 511; ++j) w.write_shift(1, 0);
          }
      for (k = 1; k < v.FileIndex.length; ++k)
        if (((U = v.FileIndex[k]), U.size > 0 && U.size < 4096))
          if (je && Buffer.isBuffer(U.content))
            U.content.copy(w, w.l, 0, U.size), (w.l += (U.size + 63) & -64);
          else {
            for (j = 0; j < U.size; ++j) w.write_shift(1, U.content[j]);
            for (; j & 63; ++j) w.write_shift(1, 0);
          }
      if (je) w.l = w.length;
      else for (; w.l < w.length; ) w.write_shift(1, 0);
      return w;
    }
    function G(v, y) {
      var _ = v.FullPaths.map(function (j) {
          return j.toUpperCase();
        }),
        b = _.map(function (j) {
          var B = j.split("/");
          return B[B.length - (j.slice(-1) == "/" ? 2 : 1)];
        }),
        w = !1;
      y.charCodeAt(0) === 47
        ? ((w = !0), (y = _[0].slice(0, -1) + y))
        : (w = y.indexOf("/") !== -1);
      var k = y.toUpperCase(),
        L = w === !0 ? _.indexOf(k) : b.indexOf(k);
      if (L !== -1) return v.FileIndex[L];
      var q = !k.match(To);
      for (
        k = k.replace(Jt, ""), q && (k = k.replace(To, "!")), L = 0;
        L < _.length;
        ++L
      )
        if (
          (q ? _[L].replace(To, "!") : _[L]).replace(Jt, "") == k ||
          (q ? b[L].replace(To, "!") : b[L]).replace(Jt, "") == k
        )
          return v.FileIndex[L];
      return null;
    }
    var R = 64,
      re = -2,
      be = "d0cf11e0a1b11ae1",
      oe = [208, 207, 17, 224, 161, 177, 26, 225],
      Ce = "00000000000000000000000000000000",
      _e = {
        MAXREGSECT: -6,
        DIFSECT: -4,
        FATSECT: -3,
        ENDOFCHAIN: re,
        FREESECT: -1,
        HEADER_SIGNATURE: be,
        HEADER_MINOR_VERSION: "3e00",
        MAXREGSID: -6,
        NOSTREAM: -1,
        HEADER_CLSID: Ce,
        EntryTypes: [
          "unknown",
          "storage",
          "stream",
          "lockbytes",
          "property",
          "root",
        ],
      };
    function He(v, y, _) {
      l();
      var b = X(v, _);
      c.writeFileSync(y, b);
    }
    function le(v) {
      for (var y = new Array(v.length), _ = 0; _ < v.length; ++_)
        y[_] = String.fromCharCode(v[_]);
      return y.join("");
    }
    function ye(v, y) {
      var _ = X(v, y);
      switch ((y && y.type) || "buffer") {
        case "file":
          return l(), c.writeFileSync(y.filename, _), _;
        case "binary":
          return typeof _ == "string" ? _ : le(_);
        case "base64":
          return _m(typeof _ == "string" ? _ : le(_));
        case "buffer":
          if (je) return Buffer.isBuffer(_) ? _ : Cn(_);
        case "array":
          return typeof _ == "string" ? Xr(_) : _;
      }
      return _;
    }
    var K;
    function A(v) {
      try {
        var y = v.InflateRaw,
          _ = new y();
        if (
          (_._processChunk(new Uint8Array([3, 0]), _._finishFlushFlag),
          _.bytesRead)
        )
          K = v;
        else throw new Error("zlib does not expose bytesRead");
      } catch (b) {
        console.error("cannot use native zlib: " + (b.message || b));
      }
    }
    function V(v, y) {
      if (!K) return Vu(v, y);
      var _ = K.InflateRaw,
        b = new _(),
        w = b._processChunk(v.slice(v.l), b._finishFlushFlag);
      return (v.l += b.bytesRead), w;
    }
    function D(v) {
      return K ? K.deflateRawSync(v) : Ne(v);
    }
    var I = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      Y = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258,
      ],
      me = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
      ];
    function ce(v) {
      var y =
        (((v << 1) | (v << 11)) & 139536) | (((v << 5) | (v << 15)) & 558144);
      return ((y >> 16) | (y >> 8) | y) & 255;
    }
    for (
      var ue = typeof Uint8Array < "u",
        Z = ue ? new Uint8Array(256) : [],
        Ve = 0;
      Ve < 256;
      ++Ve
    )
      Z[Ve] = ce(Ve);
    function S(v, y) {
      var _ = Z[v & 255];
      return y <= 8
        ? _ >>> (8 - y)
        : ((_ = (_ << 8) | Z[(v >> 8) & 255]),
          y <= 16
            ? _ >>> (16 - y)
            : ((_ = (_ << 8) | Z[(v >> 16) & 255]), _ >>> (24 - y)));
    }
    function pt(v, y) {
      var _ = y & 7,
        b = y >>> 3;
      return ((v[b] | (_ <= 6 ? 0 : v[b + 1] << 8)) >>> _) & 3;
    }
    function We(v, y) {
      var _ = y & 7,
        b = y >>> 3;
      return ((v[b] | (_ <= 5 ? 0 : v[b + 1] << 8)) >>> _) & 7;
    }
    function at(v, y) {
      var _ = y & 7,
        b = y >>> 3;
      return ((v[b] | (_ <= 4 ? 0 : v[b + 1] << 8)) >>> _) & 15;
    }
    function Pe(v, y) {
      var _ = y & 7,
        b = y >>> 3;
      return ((v[b] | (_ <= 3 ? 0 : v[b + 1] << 8)) >>> _) & 31;
    }
    function de(v, y) {
      var _ = y & 7,
        b = y >>> 3;
      return ((v[b] | (_ <= 1 ? 0 : v[b + 1] << 8)) >>> _) & 127;
    }
    function bt(v, y, _) {
      var b = y & 7,
        w = y >>> 3,
        k = (1 << _) - 1,
        L = v[w] >>> b;
      return (
        _ < 8 - b ||
          ((L |= v[w + 1] << (8 - b)), _ < 16 - b) ||
          ((L |= v[w + 2] << (16 - b)), _ < 24 - b) ||
          (L |= v[w + 3] << (24 - b)),
        L & k
      );
    }
    function kr(v, y, _) {
      var b = y & 7,
        w = y >>> 3;
      return (
        b <= 5
          ? (v[w] |= (_ & 7) << b)
          : ((v[w] |= (_ << b) & 255), (v[w + 1] = (_ & 7) >> (8 - b))),
        y + 3
      );
    }
    function Zr(v, y, _) {
      var b = y & 7,
        w = y >>> 3;
      return (_ = (_ & 1) << b), (v[w] |= _), y + 1;
    }
    function ui(v, y, _) {
      var b = y & 7,
        w = y >>> 3;
      return (_ <<= b), (v[w] |= _ & 255), (_ >>>= 8), (v[w + 1] = _), y + 8;
    }
    function _a(v, y, _) {
      var b = y & 7,
        w = y >>> 3;
      return (
        (_ <<= b),
        (v[w] |= _ & 255),
        (_ >>>= 8),
        (v[w + 1] = _ & 255),
        (v[w + 2] = _ >>> 8),
        y + 16
      );
    }
    function Ai(v, y) {
      var _ = v.length,
        b = 2 * _ > y ? 2 * _ : y + 5,
        w = 0;
      if (_ >= y) return v;
      if (je) {
        var k = bm(b);
        if (v.copy) v.copy(k);
        else for (; w < v.length; ++w) k[w] = v[w];
        return k;
      } else if (ue) {
        var L = new Uint8Array(b);
        if (L.set) L.set(v);
        else for (; w < _; ++w) L[w] = v[w];
        return L;
      }
      return (v.length = b), v;
    }
    function pr(v) {
      for (var y = new Array(v), _ = 0; _ < v; ++_) y[_] = 0;
      return y;
    }
    function fi(v, y, _) {
      var b = 1,
        w = 0,
        k = 0,
        L = 0,
        q = 0,
        j = v.length,
        B = ue ? new Uint16Array(32) : pr(32);
      for (k = 0; k < 32; ++k) B[k] = 0;
      for (k = j; k < _; ++k) v[k] = 0;
      j = v.length;
      var U = ue ? new Uint16Array(j) : pr(j);
      for (k = 0; k < j; ++k) B[(w = v[k])]++, b < w && (b = w), (U[k] = 0);
      for (B[0] = 0, k = 1; k <= b; ++k) B[k + 16] = q = (q + B[k - 1]) << 1;
      for (k = 0; k < j; ++k) (q = v[k]), q != 0 && (U[k] = B[q + 16]++);
      var J = 0;
      for (k = 0; k < j; ++k)
        if (((J = v[k]), J != 0))
          for (
            q = S(U[k], b) >> (b - J), L = (1 << (b + 4 - J)) - 1;
            L >= 0;
            --L
          )
            y[q | (L << J)] = (J & 15) | (k << 4);
      return b;
    }
    var Ii = ue ? new Uint16Array(512) : pr(512),
      ba = ue ? new Uint16Array(32) : pr(32);
    if (!ue) {
      for (var ir = 0; ir < 512; ++ir) Ii[ir] = 0;
      for (ir = 0; ir < 32; ++ir) ba[ir] = 0;
    }
    (function () {
      for (var v = [], y = 0; y < 32; y++) v.push(5);
      fi(v, ba, 32);
      var _ = [];
      for (y = 0; y <= 143; y++) _.push(8);
      for (; y <= 255; y++) _.push(9);
      for (; y <= 279; y++) _.push(7);
      for (; y <= 287; y++) _.push(8);
      fi(_, Ii, 288);
    })();
    var Qr = (function () {
      for (
        var y = ue ? new Uint8Array(32768) : [], _ = 0, b = 0;
        _ < me.length - 1;
        ++_
      )
        for (; b < me[_ + 1]; ++b) y[b] = _;
      for (; b < 32768; ++b) y[b] = 29;
      var w = ue ? new Uint8Array(259) : [];
      for (_ = 0, b = 0; _ < Y.length - 1; ++_)
        for (; b < Y[_ + 1]; ++b) w[b] = _;
      function k(q, j) {
        for (var B = 0; B < q.length; ) {
          var U = Math.min(65535, q.length - B),
            J = B + U == q.length;
          for (
            j.write_shift(1, +J),
              j.write_shift(2, U),
              j.write_shift(2, ~U & 65535);
            U-- > 0;

          )
            j[j.l++] = q[B++];
        }
        return j.l;
      }
      function L(q, j) {
        for (
          var B = 0, U = 0, J = ue ? new Uint16Array(32768) : [];
          U < q.length;

        ) {
          var ie = Math.min(65535, q.length - U);
          if (ie < 10) {
            for (
              B = kr(j, B, +(U + ie == q.length)),
                B & 7 && (B += 8 - (B & 7)),
                j.l = (B / 8) | 0,
                j.write_shift(2, ie),
                j.write_shift(2, ~ie & 65535);
              ie-- > 0;

            )
              j[j.l++] = q[U++];
            B = j.l * 8;
            continue;
          }
          B = kr(j, B, +(U + ie == q.length) + 2);
          for (var ve = 0; ie-- > 0; ) {
            var ne = q[U];
            ve = ((ve << 5) ^ ne) & 32767;
            var se = -1,
              Ae = 0;
            if (
              (se = J[ve]) &&
              ((se |= U & -32768), se > U && (se -= 32768), se < U)
            )
              for (; q[se + Ae] == q[U + Ae] && Ae < 250; ) ++Ae;
            if (Ae > 2) {
              (ne = w[Ae]),
                ne <= 22
                  ? (B = ui(j, B, Z[ne + 1] >> 1) - 1)
                  : (ui(j, B, 3),
                    (B += 5),
                    ui(j, B, Z[ne - 23] >> 5),
                    (B += 3));
              var dt = ne < 8 ? 0 : (ne - 4) >> 2;
              dt > 0 && (_a(j, B, Ae - Y[ne]), (B += dt)),
                (ne = y[U - se]),
                (B = ui(j, B, Z[ne] >> 3)),
                (B -= 3);
              var fr = ne < 4 ? 0 : (ne - 2) >> 1;
              fr > 0 && (_a(j, B, U - se - me[ne]), (B += fr));
              for (var kt = 0; kt < Ae; ++kt)
                (J[ve] = U & 32767), (ve = ((ve << 5) ^ q[U]) & 32767), ++U;
              ie -= Ae - 1;
            } else
              ne <= 143 ? (ne = ne + 48) : (B = Zr(j, B, 1)),
                (B = ui(j, B, Z[ne])),
                (J[ve] = U & 32767),
                ++U;
          }
          B = ui(j, B, 0) - 1;
        }
        return (j.l = ((B + 7) / 8) | 0), j.l;
      }
      return function (j, B) {
        return j.length < 8 ? k(j, B) : L(j, B);
      };
    })();
    function Ne(v) {
      var y = At(50 + Math.floor(v.length * 1.1)),
        _ = Qr(v, y);
      return y.slice(0, _);
    }
    var yt = ue ? new Uint16Array(32768) : pr(32768),
      Er = ue ? new Uint16Array(32768) : pr(32768),
      Ft = ue ? new Uint16Array(128) : pr(128),
      Qi = 1,
      ju = 1;
    function Qg(v, y) {
      var _ = Pe(v, y) + 257;
      y += 5;
      var b = Pe(v, y) + 1;
      y += 5;
      var w = at(v, y) + 4;
      y += 4;
      for (
        var k = 0,
          L = ue ? new Uint8Array(19) : pr(19),
          q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          j = 1,
          B = ue ? new Uint8Array(8) : pr(8),
          U = ue ? new Uint8Array(8) : pr(8),
          J = L.length,
          ie = 0;
        ie < w;
        ++ie
      )
        (L[I[ie]] = k = We(v, y)), j < k && (j = k), B[k]++, (y += 3);
      var ve = 0;
      for (B[0] = 0, ie = 1; ie <= j; ++ie) U[ie] = ve = (ve + B[ie - 1]) << 1;
      for (ie = 0; ie < J; ++ie) (ve = L[ie]) != 0 && (q[ie] = U[ve]++);
      var ne = 0;
      for (ie = 0; ie < J; ++ie)
        if (((ne = L[ie]), ne != 0)) {
          ve = Z[q[ie]] >> (8 - ne);
          for (var se = (1 << (7 - ne)) - 1; se >= 0; --se)
            Ft[ve | (se << ne)] = (ne & 7) | (ie << 3);
        }
      var Ae = [];
      for (j = 1; Ae.length < _ + b; )
        switch (((ve = Ft[de(v, y)]), (y += ve & 7), (ve >>>= 3))) {
          case 16:
            for (k = 3 + pt(v, y), y += 2, ve = Ae[Ae.length - 1]; k-- > 0; )
              Ae.push(ve);
            break;
          case 17:
            for (k = 3 + We(v, y), y += 3; k-- > 0; ) Ae.push(0);
            break;
          case 18:
            for (k = 11 + de(v, y), y += 7; k-- > 0; ) Ae.push(0);
            break;
          default:
            Ae.push(ve), j < ve && (j = ve);
            break;
        }
      var dt = Ae.slice(0, _),
        fr = Ae.slice(_);
      for (ie = _; ie < 286; ++ie) dt[ie] = 0;
      for (ie = b; ie < 30; ++ie) fr[ie] = 0;
      return (Qi = fi(dt, yt, 286)), (ju = fi(fr, Er, 30)), y;
    }
    function Jg(v, y) {
      if (v[0] == 3 && !(v[1] & 3)) return [Ki(y), 2];
      for (
        var _ = 0,
          b = 0,
          w = bm(y || 1 << 18),
          k = 0,
          L = w.length >>> 0,
          q = 0,
          j = 0;
        !(b & 1);

      ) {
        if (((b = We(v, _)), (_ += 3), b >>> 1))
          b >> 1 == 1
            ? ((q = 9), (j = 5))
            : ((_ = Qg(v, _)), (q = Qi), (j = ju));
        else {
          _ & 7 && (_ += 8 - (_ & 7));
          var B = v[_ >>> 3] | (v[(_ >>> 3) + 1] << 8);
          if (((_ += 32), B > 0))
            for (
              !y && L < k + B && ((w = Ai(w, k + B)), (L = w.length));
              B-- > 0;

            )
              (w[k++] = v[_ >>> 3]), (_ += 8);
          continue;
        }
        for (;;) {
          !y && L < k + 32767 && ((w = Ai(w, k + 32767)), (L = w.length));
          var U = bt(v, _, q),
            J = b >>> 1 == 1 ? Ii[U] : yt[U];
          if (((_ += J & 15), (J >>>= 4), !((J >>> 8) & 255))) w[k++] = J;
          else {
            if (J == 256) break;
            J -= 257;
            var ie = J < 8 ? 0 : (J - 4) >> 2;
            ie > 5 && (ie = 0);
            var ve = k + Y[J];
            ie > 0 && ((ve += bt(v, _, ie)), (_ += ie)),
              (U = bt(v, _, j)),
              (J = b >>> 1 == 1 ? ba[U] : Er[U]),
              (_ += J & 15),
              (J >>>= 4);
            var ne = J < 4 ? 0 : (J - 2) >> 1,
              se = me[J];
            for (
              ne > 0 && ((se += bt(v, _, ne)), (_ += ne)),
                !y && L < ve && ((w = Ai(w, ve + 100)), (L = w.length));
              k < ve;

            )
              (w[k] = w[k - se]), ++k;
          }
        }
      }
      return y ? [w, (_ + 7) >>> 3] : [w.slice(0, k), (_ + 7) >>> 3];
    }
    function Vu(v, y) {
      var _ = v.slice(v.l || 0),
        b = Jg(_, y);
      return (v.l += b[1]), b[0];
    }
    function Uu(v, y) {
      if (v) typeof console < "u" && console.error(y);
      else throw new Error(y);
    }
    function zu(v, y) {
      var _ = v;
      jt(_, 0);
      var b = [],
        w = [],
        k = { FileIndex: b, FullPaths: w };
      C(k, { root: y.root });
      for (
        var L = _.length - 4;
        (_[L] != 80 || _[L + 1] != 75 || _[L + 2] != 5 || _[L + 3] != 6) &&
        L >= 0;

      )
        --L;
      (_.l = L + 4), (_.l += 4);
      var q = _.read_shift(2);
      _.l += 6;
      var j = _.read_shift(4);
      for (_.l = j, L = 0; L < q; ++L) {
        _.l += 20;
        var B = _.read_shift(4),
          U = _.read_shift(4),
          J = _.read_shift(2),
          ie = _.read_shift(2),
          ve = _.read_shift(2);
        _.l += 8;
        var ne = _.read_shift(4),
          se = s(_.slice(_.l + J, _.l + J + ie));
        _.l += J + ie + ve;
        var Ae = _.l;
        (_.l = ne + 4), ev(_, B, U, k, se), (_.l = Ae);
      }
      return k;
    }
    function ev(v, y, _, b, w) {
      v.l += 2;
      var k = v.read_shift(2),
        L = v.read_shift(2),
        q = o(v);
      if (k & 8257) throw new Error("Unsupported ZIP encryption");
      for (
        var j = v.read_shift(4),
          B = v.read_shift(4),
          U = v.read_shift(4),
          J = v.read_shift(2),
          ie = v.read_shift(2),
          ve = "",
          ne = 0;
        ne < J;
        ++ne
      )
        ve += String.fromCharCode(v[v.l++]);
      if (ie) {
        var se = s(v.slice(v.l, v.l + ie));
        (se[21589] || {}).mt && (q = se[21589].mt),
          ((w || {})[21589] || {}).mt && (q = w[21589].mt);
      }
      v.l += ie;
      var Ae = v.slice(v.l, v.l + B);
      switch (L) {
        case 8:
          Ae = V(v, U);
          break;
        case 0:
          break;
        default:
          throw new Error("Unsupported ZIP Compression method " + L);
      }
      var dt = !1;
      k & 8 &&
        ((j = v.read_shift(4)),
        j == 134695760 && ((j = v.read_shift(4)), (dt = !0)),
        (B = v.read_shift(4)),
        (U = v.read_shift(4))),
        B != y && Uu(dt, "Bad compressed size: " + y + " != " + B),
        U != _ && Uu(dt, "Bad uncompressed size: " + _ + " != " + U),
        Gc(b, ve, Ae, { unsafe: !0, mt: q });
    }
    function tv(v, y) {
      var _ = y || {},
        b = [],
        w = [],
        k = At(1),
        L = _.compression ? 8 : 0,
        q = 0,
        j = !1;
      j && (q |= 8);
      var B = 0,
        U = 0,
        J = 0,
        ie = 0,
        ve = v.FullPaths[0],
        ne = ve,
        se = v.FileIndex[0],
        Ae = [],
        dt = 0;
      for (B = 1; B < v.FullPaths.length; ++B)
        if (
          ((ne = v.FullPaths[B].slice(ve.length)),
          (se = v.FileIndex[B]),
          !(!se.size || !se.content || ne == "Sh33tJ5"))
        ) {
          var fr = J,
            kt = At(ne.length);
          for (U = 0; U < ne.length; ++U)
            kt.write_shift(1, ne.charCodeAt(U) & 127);
          (kt = kt.slice(0, kt.l)), (Ae[ie] = Ey.buf(se.content, 0));
          var gr = se.content;
          L == 8 && (gr = D(gr)),
            (k = At(30)),
            k.write_shift(4, 67324752),
            k.write_shift(2, 20),
            k.write_shift(2, q),
            k.write_shift(2, L),
            se.mt ? a(k, se.mt) : k.write_shift(4, 0),
            k.write_shift(-4, q & 8 ? 0 : Ae[ie]),
            k.write_shift(4, q & 8 ? 0 : gr.length),
            k.write_shift(4, q & 8 ? 0 : se.content.length),
            k.write_shift(2, kt.length),
            k.write_shift(2, 0),
            (J += k.length),
            b.push(k),
            (J += kt.length),
            b.push(kt),
            (J += gr.length),
            b.push(gr),
            q & 8 &&
              ((k = At(12)),
              k.write_shift(-4, Ae[ie]),
              k.write_shift(4, gr.length),
              k.write_shift(4, se.content.length),
              (J += k.l),
              b.push(k)),
            (k = At(46)),
            k.write_shift(4, 33639248),
            k.write_shift(2, 0),
            k.write_shift(2, 20),
            k.write_shift(2, q),
            k.write_shift(2, L),
            k.write_shift(4, 0),
            k.write_shift(-4, Ae[ie]),
            k.write_shift(4, gr.length),
            k.write_shift(4, se.content.length),
            k.write_shift(2, kt.length),
            k.write_shift(2, 0),
            k.write_shift(2, 0),
            k.write_shift(2, 0),
            k.write_shift(2, 0),
            k.write_shift(4, 0),
            k.write_shift(4, fr),
            (dt += k.l),
            w.push(k),
            (dt += kt.length),
            w.push(kt),
            ++ie;
        }
      return (
        (k = At(22)),
        k.write_shift(4, 101010256),
        k.write_shift(2, 0),
        k.write_shift(2, 0),
        k.write_shift(2, ie),
        k.write_shift(2, ie),
        k.write_shift(4, dt),
        k.write_shift(4, J),
        k.write_shift(2, 0),
        Gi([Gi(b), Gi(w), k])
      );
    }
    var Zo = {
      htm: "text/html",
      xml: "text/xml",
      gif: "image/gif",
      jpg: "image/jpeg",
      png: "image/png",
      mso: "application/x-mso",
      thmx: "application/vnd.ms-officetheme",
      sh33tj5: "application/octet-stream",
    };
    function rv(v, y) {
      if (v.ctype) return v.ctype;
      var _ = v.name || "",
        b = _.match(/\.([^\.]+)$/);
      return (b && Zo[b[1]]) ||
        (y && ((b = (_ = y).match(/[\.\\]([^\.\\])+$/)), b && Zo[b[1]]))
        ? Zo[b[1]]
        : "application/octet-stream";
    }
    function iv(v) {
      for (var y = _m(v), _ = [], b = 0; b < y.length; b += 76)
        _.push(y.slice(b, b + 76));
      return (
        _.join(`\r
`) +
        `\r
`
      );
    }
    function nv(v) {
      var y = v.replace(
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,
        function (B) {
          var U = B.charCodeAt(0).toString(16).toUpperCase();
          return "=" + (U.length == 1 ? "0" + U : U);
        }
      );
      (y = y.replace(/ $/gm, "=20").replace(/\t$/gm, "=09")),
        y.charAt(0) ==
          `
` && (y = "=0D" + y.slice(1)),
        (y = y
          .replace(/\r(?!\n)/gm, "=0D")
          .replace(
            /\n\n/gm,
            `
=0A`
          )
          .replace(/([^\r\n])\n/gm, "$1=0A"));
      for (
        var _ = [],
          b = y.split(`\r
`),
          w = 0;
        w < b.length;
        ++w
      ) {
        var k = b[w];
        if (k.length == 0) {
          _.push("");
          continue;
        }
        for (var L = 0; L < k.length; ) {
          var q = 76,
            j = k.slice(L, L + q);
          j.charAt(q - 1) == "="
            ? q--
            : j.charAt(q - 2) == "="
            ? (q -= 2)
            : j.charAt(q - 3) == "=" && (q -= 3),
            (j = k.slice(L, L + q)),
            (L += q),
            L < k.length && (j += "="),
            _.push(j);
        }
      }
      return _.join(`\r
`);
    }
    function av(v) {
      for (var y = [], _ = 0; _ < v.length; ++_) {
        for (var b = v[_]; _ <= v.length && b.charAt(b.length - 1) == "="; )
          b = b.slice(0, b.length - 1) + v[++_];
        y.push(b);
      }
      for (var w = 0; w < y.length; ++w)
        y[w] = y[w].replace(/[=][0-9A-Fa-f]{2}/g, function (k) {
          return String.fromCharCode(parseInt(k.slice(1), 16));
        });
      return Xr(
        y.join(`\r
`)
      );
    }
    function ov(v, y, _) {
      for (var b = "", w = "", k = "", L, q = 0; q < 10; ++q) {
        var j = y[q];
        if (!j || j.match(/^\s*$/)) break;
        var B = j.match(/^(.*?):\s*([^\s].*)$/);
        if (B)
          switch (B[1].toLowerCase()) {
            case "content-location":
              b = B[2].trim();
              break;
            case "content-type":
              k = B[2].trim();
              break;
            case "content-transfer-encoding":
              w = B[2].trim();
              break;
          }
      }
      switch ((++q, w.toLowerCase())) {
        case "base64":
          L = Xr(wr(y.slice(q).join("")));
          break;
        case "quoted-printable":
          L = av(y.slice(q));
          break;
        default:
          throw new Error("Unsupported Content-Transfer-Encoding " + w);
      }
      var U = Gc(v, b.slice(_.length), L, { unsafe: !0 });
      k && (U.ctype = k);
    }
    function sv(v, y) {
      if (le(v.slice(0, 13)).toLowerCase() != "mime-version:")
        throw new Error("Unsupported MAD header");
      var _ = (y && y.root) || "",
        b = (je && Buffer.isBuffer(v) ? v.toString("binary") : le(v)).split(`\r
`),
        w = 0,
        k = "";
      for (w = 0; w < b.length; ++w)
        if (
          ((k = b[w]),
          !!/^Content-Location:/i.test(k) &&
            ((k = k.slice(k.indexOf("file"))),
            _ || (_ = k.slice(0, k.lastIndexOf("/") + 1)),
            k.slice(0, _.length) != _))
        )
          for (
            ;
            _.length > 0 &&
            ((_ = _.slice(0, _.length - 1)),
            (_ = _.slice(0, _.lastIndexOf("/") + 1)),
            k.slice(0, _.length) != _);

          );
      var L = (b[1] || "").match(/boundary="(.*?)"/);
      if (!L) throw new Error("MAD cannot find boundary");
      var q = "--" + (L[1] || ""),
        j = [],
        B = [],
        U = { FileIndex: j, FullPaths: B };
      C(U);
      var J,
        ie = 0;
      for (w = 0; w < b.length; ++w) {
        var ve = b[w];
        (ve !== q && ve !== q + "--") ||
          (ie++ && ov(U, b.slice(J, w), _), (J = w));
      }
      return U;
    }
    function cv(v, y) {
      var _ = y || {},
        b = _.boundary || "SheetJS";
      b = "------=" + b;
      for (
        var w = [
            "MIME-Version: 1.0",
            'Content-Type: multipart/related; boundary="' + b.slice(2) + '"',
            "",
            "",
            "",
          ],
          k = v.FullPaths[0],
          L = k,
          q = v.FileIndex[0],
          j = 1;
        j < v.FullPaths.length;
        ++j
      )
        if (
          ((L = v.FullPaths[j].slice(k.length)),
          (q = v.FileIndex[j]),
          !(!q.size || !q.content || L == "Sh33tJ5"))
        ) {
          L = L.replace(
            /[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,
            function (Ae) {
              return "_x" + Ae.charCodeAt(0).toString(16) + "_";
            }
          ).replace(/[\u0080-\uFFFF]/g, function (Ae) {
            return "_u" + Ae.charCodeAt(0).toString(16) + "_";
          });
          for (
            var B = q.content,
              U = je && Buffer.isBuffer(B) ? B.toString("binary") : le(B),
              J = 0,
              ie = Math.min(1024, U.length),
              ve = 0,
              ne = 0;
            ne <= ie;
            ++ne
          )
            (ve = U.charCodeAt(ne)) >= 32 && ve < 128 && ++J;
          var se = J >= (ie * 4) / 5;
          w.push(b),
            w.push(
              "Content-Location: " + (_.root || "file:///C:/SheetJS/") + L
            ),
            w.push(
              "Content-Transfer-Encoding: " +
                (se ? "quoted-printable" : "base64")
            ),
            w.push("Content-Type: " + rv(q, L)),
            w.push(""),
            w.push(se ? nv(U) : iv(U));
        }
      return (
        w.push(
          b +
            `--\r
`
        ),
        w.join(`\r
`)
      );
    }
    function lv(v) {
      var y = {};
      return C(y, v), y;
    }
    function Gc(v, y, _, b) {
      var w = b && b.unsafe;
      w || C(v);
      var k = !w && Ue.find(v, y);
      if (!k) {
        var L = v.FullPaths[0];
        y.slice(0, L.length) == L
          ? (L = y)
          : (L.slice(-1) != "/" && (L += "/"),
            (L = (L + y).replace("//", "/"))),
          (k = { name: n(y), type: 2 }),
          v.FileIndex.push(k),
          v.FullPaths.push(L),
          w || Ue.utils.cfb_gc(v);
      }
      return (
        (k.content = _),
        (k.size = _ ? _.length : 0),
        b &&
          (b.CLSID && (k.clsid = b.CLSID),
          b.mt && (k.mt = b.mt),
          b.ct && (k.ct = b.ct)),
        k
      );
    }
    function dv(v, y) {
      C(v);
      var _ = Ue.find(v, y);
      if (_) {
        for (var b = 0; b < v.FileIndex.length; ++b)
          if (v.FileIndex[b] == _)
            return v.FileIndex.splice(b, 1), v.FullPaths.splice(b, 1), !0;
      }
      return !1;
    }
    function uv(v, y, _) {
      C(v);
      var b = Ue.find(v, y);
      if (b) {
        for (var w = 0; w < v.FileIndex.length; ++w)
          if (v.FileIndex[w] == b)
            return (v.FileIndex[w].name = n(_)), (v.FullPaths[w] = _), !0;
      }
      return !1;
    }
    function fv(v) {
      M(v, !0);
    }
    return (
      (r.find = G),
      (r.read = F),
      (r.parse = d),
      (r.write = ye),
      (r.writeFile = He),
      (r.utils = {
        cfb_new: lv,
        cfb_add: Gc,
        cfb_del: dv,
        cfb_mov: uv,
        cfb_gc: fv,
        ReadShift: Io,
        CheckField: Jp,
        prep_blob: jt,
        bconcat: Gi,
        use_zlib: A,
        _deflateRaw: Ne,
        _inflateRaw: Vu,
        consts: _e,
      }),
      r
    );
  })(),
  Am;
function Cy(e) {
  if (typeof Am < "u") return Am.readFileSync(e);
  if (typeof Deno < "u") return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var r = File(e);
      r.open("r"), (r.encoding = "binary");
      var t = r.read();
      return r.close(), t;
    } catch (i) {
      if (!i.message || !i.message.match(/onstruct/)) throw i;
    }
  throw new Error("Cannot access file " + e);
}
function ci(e) {
  for (var r = Object.keys(e), t = [], i = 0; i < r.length; ++i)
    Object.prototype.hasOwnProperty.call(e, r[i]) && t.push(r[i]);
  return t;
}
function hu(e) {
  for (var r = [], t = ci(e), i = 0; i !== t.length; ++i) r[e[t[i]]] = t[i];
  return r;
}
var Ac = new Date(1899, 11, 30, 0, 0, 0);
function ur(e, r) {
  var t = e.getTime();
  r && (t -= 1462 * 24 * 60 * 60 * 1e3);
  var i = Ac.getTime() + (e.getTimezoneOffset() - Ac.getTimezoneOffset()) * 6e4;
  return (t - i) / (24 * 60 * 60 * 1e3);
}
var Pp = new Date(),
  Ty = Ac.getTime() + (Pp.getTimezoneOffset() - Ac.getTimezoneOffset()) * 6e4,
  Im = Pp.getTimezoneOffset();
function Pc(e) {
  var r = new Date();
  return (
    r.setTime(e * 24 * 60 * 60 * 1e3 + Ty),
    r.getTimezoneOffset() !== Im &&
      r.setTime(r.getTime() + (r.getTimezoneOffset() - Im) * 6e4),
    r
  );
}
function Sy(e) {
  var r = 0,
    t = 0,
    i = !1,
    n = e.match(
      /P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/
    );
  if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var a = 1; a != n.length; ++a)
    if (n[a]) {
      switch (((t = 1), a > 3 && (i = !0), n[a].slice(n[a].length - 1))) {
        case "Y":
          throw new Error(
            "Unsupported ISO Duration Field: " + n[a].slice(n[a].length - 1)
          );
        case "D":
          t *= 24;
        case "H":
          t *= 60;
        case "M":
          if (i) t *= 60;
          else throw new Error("Unsupported ISO Duration Field: M");
        case "S":
          break;
      }
      r += t * parseInt(n[a], 10);
    }
  return r;
}
var Fm = new Date("2017-02-19T19:06:09.000Z"),
  Lp = isNaN(Fm.getFullYear()) ? new Date("2/19/17") : Fm,
  Ay = Lp.getFullYear() == 2017;
function Pt(e, r) {
  var t = new Date(e);
  if (Ay)
    return (
      r > 0
        ? t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3)
        : r < 0 && t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3),
      t
    );
  if (e instanceof Date) return e;
  if (Lp.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
    var i = t.getFullYear();
    return e.indexOf("" + i) > -1 || t.setFullYear(t.getFullYear() + 100), t;
  }
  var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"],
    a = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
  return (
    e.indexOf("Z") > -1 &&
      (a = new Date(a.getTime() - a.getTimezoneOffset() * 60 * 1e3)),
    a
  );
}
function kn(e, r) {
  if (je && Buffer.isBuffer(e)) {
    if (r) {
      if (e[0] == 255 && e[1] == 254) return Ao(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return Ao(kp(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (r) {
        if (e[0] == 255 && e[1] == 254)
          return Ao(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return Ao(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var t = {
        "\u20AC": "\x80",
        "\u201A": "\x82",
        ƒ: "\x83",
        "\u201E": "\x84",
        "\u2026": "\x85",
        "\u2020": "\x86",
        "\u2021": "\x87",
        "\u02C6": "\x88",
        "\u2030": "\x89",
        Š: "\x8A",
        "\u2039": "\x8B",
        Œ: "\x8C",
        Ž: "\x8E",
        "\u2018": "\x91",
        "\u2019": "\x92",
        "\u201C": "\x93",
        "\u201D": "\x94",
        "\u2022": "\x95",
        "\u2013": "\x96",
        "\u2014": "\x97",
        "\u02DC": "\x98",
        "\u2122": "\x99",
        š: "\x9A",
        "\u203A": "\x9B",
        œ: "\x9C",
        ž: "\x9E",
        Ÿ: "\x9F",
      };
      return (
        Array.isArray(e) && (e = new Uint8Array(e)),
        new TextDecoder("latin1")
          .decode(e)
          .replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function (a) {
            return t[a] || a;
          })
      );
    } catch {}
  for (var i = [], n = 0; n != e.length; ++n) i.push(String.fromCharCode(e[n]));
  return i.join("");
}
function Vt(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null) return e;
  if (e instanceof Date) return new Date(e.getTime());
  var r = {};
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = Vt(e[t]));
  return r;
}
function xt(e, r) {
  for (var t = ""; t.length < r; ) t += e;
  return t;
}
function Yr(e) {
  var r = Number(e);
  if (!isNaN(r)) return isFinite(r) ? r : NaN;
  if (!/\d/.test(e)) return r;
  var t = 1,
    i = e
      .replace(/([\d]),([\d])/g, "$1$2")
      .replace(/[$]/g, "")
      .replace(/[%]/g, function () {
        return (t *= 100), "";
      });
  return !isNaN((r = Number(i))) ||
    ((i = i.replace(/[(](.*)[)]/, function (n, a) {
      return (t = -t), a;
    })),
    !isNaN((r = Number(i))))
    ? r / t
    : r;
}
var Iy = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
function fa(e) {
  var r = new Date(e),
    t = new Date(NaN),
    i = r.getYear(),
    n = r.getMonth(),
    a = r.getDate();
  if (isNaN(a)) return t;
  var o = e.toLowerCase();
  if (o.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (
      ((o = o.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, "")),
      o.length > 3 && Iy.indexOf(o) == -1)
    )
      return t;
  } else if (o.match(/[a-z]/)) return t;
  return i < 0 || i > 8099
    ? t
    : (n > 0 || a > 1) && i != 101
    ? r
    : e.match(/[^-0-9:,\/\\]/)
    ? t
    : r;
}
var Fy = (function () {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function (t, i, n) {
    if (e || typeof i == "string") return t.split(i);
    for (var a = t.split(i), o = [a[0]], s = 1; s < a.length; ++s)
      o.push(n), o.push(a[s]);
    return o;
  };
})();
function Bp(e) {
  return e
    ? e.content && e.type
      ? kn(e.content, !0)
      : e.data
      ? Co(e.data)
      : e.asNodeBuffer && je
      ? Co(e.asNodeBuffer().toString("binary"))
      : e.asBinary
      ? Co(e.asBinary())
      : e._data && e._data.getContent
      ? Co(kn(Array.prototype.slice.call(e._data.getContent(), 0)))
      : null
    : null;
}
function jp(e) {
  if (!e) return null;
  if (e.data) return Zd(e.data);
  if (e.asNodeBuffer && je) return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var r = e._data.getContent();
    return typeof r == "string" ? Zd(r) : Array.prototype.slice.call(r);
  }
  return e.content && e.type ? e.content : null;
}
function Dy(e) {
  return e && e.name.slice(-4) === ".bin" ? jp(e) : Bp(e);
}
function Nr(e, r) {
  for (
    var t = e.FullPaths || ci(e.files),
      i = r.toLowerCase().replace(/[\/]/g, "\\"),
      n = i.replace(/\\/g, "/"),
      a = 0;
    a < t.length;
    ++a
  ) {
    var o = t[a].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (i == o || n == o) return e.files ? e.files[t[a]] : e.FileIndex[a];
  }
  return null;
}
function mu(e, r) {
  var t = Nr(e, r);
  if (t == null) throw new Error("Cannot find file " + r + " in zip");
  return t;
}
function Tt(e, r, t) {
  if (!t) return Dy(mu(e, r));
  if (!r) return null;
  try {
    return Tt(e, r);
  } catch {
    return null;
  }
}
function yr(e, r, t) {
  if (!t) return Bp(mu(e, r));
  if (!r) return null;
  try {
    return yr(e, r);
  } catch {
    return null;
  }
}
function Vp(e, r, t) {
  if (!t) return jp(mu(e, r));
  if (!r) return null;
  try {
    return Vp(e, r);
  } catch {
    return null;
  }
}
function Dm(e) {
  for (var r = e.FullPaths || ci(e.files), t = [], i = 0; i < r.length; ++i)
    r[i].slice(-1) != "/" && t.push(r[i].replace(/^Root Entry[\/]/, ""));
  return t.sort();
}
function My(e, r, t) {
  if (e.FullPaths) {
    if (typeof t == "string") {
      var i;
      return je ? (i = Cn(t)) : (i = Q1(t)), Ue.utils.cfb_add(e, r, i);
    }
    Ue.utils.cfb_add(e, r, t);
  } else e.file(r, t);
}
function Up(e, r) {
  switch (r.type) {
    case "base64":
      return Ue.read(e, { type: "base64" });
    case "binary":
      return Ue.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return Ue.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + r.type);
}
function So(e, r) {
  if (e.charAt(0) == "/") return e.slice(1);
  var t = r.split("/");
  r.slice(-1) != "/" && t.pop();
  for (var i = e.split("/"); i.length !== 0; ) {
    var n = i.shift();
    n === ".." ? t.pop() : n !== "." && t.push(n);
  }
  return t.join("/");
}
var zp = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,
  Ry = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,
  Mm =
    /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm,
  Oy = /<[^>]*>/g,
  rr = zp.match(Mm) ? Mm : Oy,
  Ny = /<\w*:/,
  Py = /<(\/?)\w+:/;
function Te(e, r, t) {
  for (
    var i = {}, n = 0, a = 0;
    n !== e.length && !((a = e.charCodeAt(n)) === 32 || a === 10 || a === 13);
    ++n
  );
  if ((r || (i[0] = e.slice(0, n)), n === e.length)) return i;
  var o = e.match(Ry),
    s = 0,
    c = "",
    l = 0,
    d = "",
    u = "",
    h = 1;
  if (o)
    for (l = 0; l != o.length; ++l) {
      for (u = o[l], a = 0; a != u.length && u.charCodeAt(a) !== 61; ++a);
      for (d = u.slice(0, a).trim(); u.charCodeAt(a + 1) == 32; ) ++a;
      for (
        h = (n = u.charCodeAt(a + 1)) == 34 || n == 39 ? 1 : 0,
          c = u.slice(a + 1 + h, u.length - h),
          s = 0;
        s != d.length && d.charCodeAt(s) !== 58;
        ++s
      );
      if (s === d.length)
        d.indexOf("_") > 0 && (d = d.slice(0, d.indexOf("_"))),
          (i[d] = c),
          t || (i[d.toLowerCase()] = c);
      else {
        var m =
          (s === 5 && d.slice(0, 5) === "xmlns" ? "xmlns" : "") +
          d.slice(s + 1);
        if (i[m] && d.slice(s - 3, s) == "ext") continue;
        (i[m] = c), t || (i[m.toLowerCase()] = c);
      }
    }
  return i;
}
function li(e) {
  return e.replace(Py, "<$1");
}
var Hp = {
    "&quot;": '"',
    "&apos;": "'",
    "&gt;": ">",
    "&lt;": "<",
    "&amp;": "&",
  },
  Ly = hu(Hp),
  $e = (function () {
    var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi,
      r = /_x([\da-fA-F]{4})_/gi;
    return function t(i) {
      var n = i + "",
        a = n.indexOf("<![CDATA[");
      if (a == -1)
        return n
          .replace(e, function (s, c) {
            return (
              Hp[s] ||
              String.fromCharCode(parseInt(c, s.indexOf("x") > -1 ? 16 : 10)) ||
              s
            );
          })
          .replace(r, function (s, c) {
            return String.fromCharCode(parseInt(c, 16));
          });
      var o = n.indexOf("]]>");
      return t(n.slice(0, a)) + n.slice(a + 9, o) + t(n.slice(o + 3));
    };
  })(),
  By = /[&<>'"]/g;
var jy = /[\u0000-\u001f]/g;
function pu(e) {
  var r = e + "";
  return r
    .replace(By, function (t) {
      return Ly[t];
    })
    .replace(/\n/g, "<br/>")
    .replace(jy, function (t) {
      return "&#x" + ("000" + t.charCodeAt(0).toString(16)).slice(-4) + ";";
    });
}
var Rm = (function () {
  var e = /&#(\d+);/g;
  function r(t, i) {
    return String.fromCharCode(parseInt(i, 10));
  }
  return function (i) {
    return i.replace(e, r);
  };
})();
function mt(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function zd(e) {
  for (var r = "", t = 0, i = 0, n = 0, a = 0, o = 0, s = 0; t < e.length; ) {
    if (((i = e.charCodeAt(t++)), i < 128)) {
      r += String.fromCharCode(i);
      continue;
    }
    if (((n = e.charCodeAt(t++)), i > 191 && i < 224)) {
      (o = (i & 31) << 6), (o |= n & 63), (r += String.fromCharCode(o));
      continue;
    }
    if (((a = e.charCodeAt(t++)), i < 240)) {
      r += String.fromCharCode(((i & 15) << 12) | ((n & 63) << 6) | (a & 63));
      continue;
    }
    (o = e.charCodeAt(t++)),
      (s =
        (((i & 7) << 18) | ((n & 63) << 12) | ((a & 63) << 6) | (o & 63)) -
        65536),
      (r += String.fromCharCode(55296 + ((s >>> 10) & 1023))),
      (r += String.fromCharCode(56320 + (s & 1023)));
  }
  return r;
}
function Om(e) {
  var r = Ki(2 * e.length),
    t,
    i,
    n = 1,
    a = 0,
    o = 0,
    s;
  for (i = 0; i < e.length; i += n)
    (n = 1),
      (s = e.charCodeAt(i)) < 128
        ? (t = s)
        : s < 224
        ? ((t = (s & 31) * 64 + (e.charCodeAt(i + 1) & 63)), (n = 2))
        : s < 240
        ? ((t =
            (s & 15) * 4096 +
            (e.charCodeAt(i + 1) & 63) * 64 +
            (e.charCodeAt(i + 2) & 63)),
          (n = 3))
        : ((n = 4),
          (t =
            (s & 7) * 262144 +
            (e.charCodeAt(i + 1) & 63) * 4096 +
            (e.charCodeAt(i + 2) & 63) * 64 +
            (e.charCodeAt(i + 3) & 63)),
          (t -= 65536),
          (o = 55296 + ((t >>> 10) & 1023)),
          (t = 56320 + (t & 1023))),
      o !== 0 && ((r[a++] = o & 255), (r[a++] = o >>> 8), (o = 0)),
      (r[a++] = t % 256),
      (r[a++] = t >>> 8);
  return r.slice(0, a).toString("ucs2");
}
function Nm(e) {
  return Cn(e, "binary").toString("utf8");
}
var vc = "foo bar baz\xE2\x98\x83\xF0\x9F\x8D\xA3",
  lt = (je && ((Nm(vc) == zd(vc) && Nm) || (Om(vc) == zd(vc) && Om))) || zd,
  Ao = je
    ? function (e) {
        return Cn(e, "utf8").toString("binary");
      }
    : function (e) {
        for (var r = [], t = 0, i = 0, n = 0; t < e.length; )
          switch (((i = e.charCodeAt(t++)), !0)) {
            case i < 128:
              r.push(String.fromCharCode(i));
              break;
            case i < 2048:
              r.push(String.fromCharCode(192 + (i >> 6))),
                r.push(String.fromCharCode(128 + (i & 63)));
              break;
            case i >= 55296 && i < 57344:
              (i -= 55296),
                (n = e.charCodeAt(t++) - 56320 + (i << 10)),
                r.push(String.fromCharCode(240 + ((n >> 18) & 7))),
                r.push(String.fromCharCode(144 + ((n >> 12) & 63))),
                r.push(String.fromCharCode(128 + ((n >> 6) & 63))),
                r.push(String.fromCharCode(128 + (n & 63)));
              break;
            default:
              r.push(String.fromCharCode(224 + (i >> 12))),
                r.push(String.fromCharCode(128 + ((i >> 6) & 63))),
                r.push(String.fromCharCode(128 + (i & 63)));
          }
        return r.join("");
      },
  jo = (function () {
    var e = {};
    return function (t, i) {
      var n = t + "|" + (i || "");
      return e[n]
        ? e[n]
        : (e[n] = new RegExp(
            "<(?:\\w+:)?" +
              t +
              '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' +
              t +
              ">",
            i || ""
          ));
    };
  })(),
  Wp = (function () {
    var e = [
      ["nbsp", " "],
      ["middot", "\xB7"],
      ["quot", '"'],
      ["apos", "'"],
      ["gt", ">"],
      ["lt", "<"],
      ["amp", "&"],
    ].map(function (r) {
      return [new RegExp("&" + r[0] + ";", "ig"), r[1]];
    });
    return function (t) {
      for (
        var i = t
            .replace(/^[\t\n\r ]+/, "")
            .replace(/[\t\n\r ]+$/, "")
            .replace(/>\s+/g, ">")
            .replace(/\s+</g, "<")
            .replace(/[\t\n\r ]+/g, " ")
            .replace(
              /<\s*[bB][rR]\s*\/?>/g,
              `
`
            )
            .replace(/<[^>]*>/g, ""),
          n = 0;
        n < e.length;
        ++n
      )
        i = i.replace(e[n][0], e[n][1]);
      return i;
    };
  })(),
  Vy = (function () {
    var e = {};
    return function (t) {
      return e[t] !== void 0
        ? e[t]
        : (e[t] = new RegExp(
            "<(?:vt:)?" + t + ">([\\s\\S]*?)</(?:vt:)?" + t + ">",
            "g"
          ));
    };
  })(),
  Uy = /<\/?(?:vt:)?variant>/g,
  zy = /<(?:vt:)([^>]*)>([\s\S]*)</;
function Pm(e, r) {
  var t = Te(e),
    i = e.match(Vy(t.baseType)) || [],
    n = [];
  if (i.length != t.size) {
    if (r.WTF)
      throw new Error("unexpected vector length " + i.length + " != " + t.size);
    return n;
  }
  return (
    i.forEach(function (a) {
      var o = a.replace(Uy, "").match(zy);
      o && n.push({ v: lt(o[2]), t: o[1] });
    }),
    n
  );
}
var Hy = /(^\s|\s$|\n)/;
function Wy(e) {
  return ci(e)
    .map(function (r) {
      return " " + r + '="' + e[r] + '"';
    })
    .join("");
}
function Gy(e, r, t) {
  return (
    "<" +
    e +
    (t != null ? Wy(t) : "") +
    (r != null
      ? (r.match(Hy) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e
      : "/") +
    ">"
  );
}
function gu(e) {
  if (je && Buffer.isBuffer(e)) return e.toString("utf8");
  if (typeof e == "string") return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array) return lt(Tn(du(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Vo = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/gm,
  $y = {
    CORE_PROPS:
      "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    CUST_PROPS:
      "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
    EXT_PROPS:
      "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
    CT: "http://schemas.openxmlformats.org/package/2006/content-types",
    RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
    TCMNT:
      "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
    dc: "http://purl.org/dc/elements/1.1/",
    dcterms: "http://purl.org/dc/terms/",
    dcmitype: "http://purl.org/dc/dcmitype/",
    mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
    r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
    vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
    xsi: "http://www.w3.org/2001/XMLSchema-instance",
    xsd: "http://www.w3.org/2001/XMLSchema",
  },
  Xy = [
    "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "http://purl.oclc.org/ooxml/spreadsheetml/main",
    "http://schemas.microsoft.com/office/excel/2006/main",
    "http://schemas.microsoft.com/office/excel/2006/2",
  ];
function qy(e, r) {
  for (
    var t = 1 - 2 * (e[r + 7] >>> 7),
      i = ((e[r + 7] & 127) << 4) + ((e[r + 6] >>> 4) & 15),
      n = e[r + 6] & 15,
      a = 5;
    a >= 0;
    --a
  )
    n = n * 256 + e[r + a];
  return i == 2047
    ? n == 0
      ? t * (1 / 0)
      : NaN
    : (i == 0 ? (i = -1022) : ((i -= 1023), (n += Math.pow(2, 52))),
      t * Math.pow(2, i - 52) * n);
}
function Ky(e, r, t) {
  var i = (r < 0 || 1 / r == -1 / 0 ? 1 : 0) << 7,
    n = 0,
    a = 0,
    o = i ? -r : r;
  isFinite(o)
    ? o == 0
      ? (n = a = 0)
      : ((n = Math.floor(Math.log(o) / Math.LN2)),
        (a = o * Math.pow(2, 52 - n)),
        n <= -1023 && (!isFinite(a) || a < Math.pow(2, 52))
          ? (n = -1022)
          : ((a -= Math.pow(2, 52)), (n += 1023)))
    : ((n = 2047), (a = isNaN(r) ? 26985 : 0));
  for (var s = 0; s <= 5; ++s, a /= 256) e[t + s] = a & 255;
  (e[t + 6] = ((n & 15) << 4) | (a & 15)), (e[t + 7] = (n >> 4) | i);
}
var Lm = function (e) {
    for (var r = [], t = 10240, i = 0; i < e[0].length; ++i)
      if (e[0][i])
        for (var n = 0, a = e[0][i].length; n < a; n += t)
          r.push.apply(r, e[0][i].slice(n, n + t));
    return r;
  },
  Bm = je
    ? function (e) {
        return e[0].length > 0 && Buffer.isBuffer(e[0][0])
          ? Buffer.concat(
              e[0].map(function (r) {
                return Buffer.isBuffer(r) ? r : Cn(r);
              })
            )
          : Lm(e);
      }
    : Lm,
  jm = function (e, r, t) {
    for (var i = [], n = r; n < t; n += 2)
      i.push(String.fromCharCode(ki(e, n)));
    return i.join("").replace(Jt, "");
  },
  Lc = je
    ? function (e, r, t) {
        return Buffer.isBuffer(e)
          ? e.toString("utf16le", r, t).replace(Jt, "")
          : jm(e, r, t);
      }
    : jm,
  Vm = function (e, r, t) {
    for (var i = [], n = r; n < r + t; ++n)
      i.push(("0" + e[n].toString(16)).slice(-2));
    return i.join("");
  },
  Gp = je
    ? function (e, r, t) {
        return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : Vm(e, r, t);
      }
    : Vm,
  Um = function (e, r, t) {
    for (var i = [], n = r; n < t; n++) i.push(String.fromCharCode(sa(e, n)));
    return i.join("");
  },
  ga = je
    ? function (r, t, i) {
        return Buffer.isBuffer(r) ? r.toString("utf8", t, i) : Um(r, t, i);
      }
    : Um,
  $p = function (e, r) {
    var t = Nt(e, r);
    return t > 0 ? ga(e, r + 4, r + 4 + t - 1) : "";
  },
  vu = $p,
  Xp = function (e, r) {
    var t = Nt(e, r);
    return t > 0 ? ga(e, r + 4, r + 4 + t - 1) : "";
  },
  xu = Xp,
  qp = function (e, r) {
    var t = 2 * Nt(e, r);
    return t > 0 ? ga(e, r + 4, r + 4 + t - 1) : "";
  },
  _u = qp,
  Kp = function (r, t) {
    var i = Nt(r, t);
    return i > 0 ? Lc(r, t + 4, t + 4 + i) : "";
  },
  bu = Kp,
  Yp = function (e, r) {
    var t = Nt(e, r);
    return t > 0 ? ga(e, r + 4, r + 4 + t) : "";
  },
  yu = Yp,
  Zp = function (e, r) {
    return qy(e, r);
  },
  Ic = Zp,
  Qp = function (r) {
    return (
      Array.isArray(r) || (typeof Uint8Array < "u" && r instanceof Uint8Array)
    );
  };
je &&
  ((vu = function (r, t) {
    if (!Buffer.isBuffer(r)) return $p(r, t);
    var i = r.readUInt32LE(t);
    return i > 0 ? r.toString("utf8", t + 4, t + 4 + i - 1) : "";
  }),
  (xu = function (r, t) {
    if (!Buffer.isBuffer(r)) return Xp(r, t);
    var i = r.readUInt32LE(t);
    return i > 0 ? r.toString("utf8", t + 4, t + 4 + i - 1) : "";
  }),
  (_u = function (r, t) {
    if (!Buffer.isBuffer(r)) return qp(r, t);
    var i = 2 * r.readUInt32LE(t);
    return r.toString("utf16le", t + 4, t + 4 + i - 1);
  }),
  (bu = function (r, t) {
    if (!Buffer.isBuffer(r)) return Kp(r, t);
    var i = r.readUInt32LE(t);
    return r.toString("utf16le", t + 4, t + 4 + i);
  }),
  (yu = function (r, t) {
    if (!Buffer.isBuffer(r)) return Yp(r, t);
    var i = r.readUInt32LE(t);
    return r.toString("utf8", t + 4, t + 4 + i);
  }),
  (Ic = function (r, t) {
    return Buffer.isBuffer(r) ? r.readDoubleLE(t) : Zp(r, t);
  }),
  (Qp = function (r) {
    return (
      Buffer.isBuffer(r) ||
      Array.isArray(r) ||
      (typeof Uint8Array < "u" && r instanceof Uint8Array)
    );
  }));
function Yy() {
  (Lc = function (e, r, t) {
    return Qe.utils.decode(1200, e.slice(r, t)).replace(Jt, "");
  }),
    (ga = function (e, r, t) {
      return Qe.utils.decode(65001, e.slice(r, t));
    }),
    (vu = function (e, r) {
      var t = Nt(e, r);
      return t > 0 ? Qe.utils.decode(ua, e.slice(r + 4, r + 4 + t - 1)) : "";
    }),
    (xu = function (e, r) {
      var t = Nt(e, r);
      return t > 0 ? Qe.utils.decode(si, e.slice(r + 4, r + 4 + t - 1)) : "";
    }),
    (_u = function (e, r) {
      var t = 2 * Nt(e, r);
      return t > 0 ? Qe.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1)) : "";
    }),
    (bu = function (e, r) {
      var t = Nt(e, r);
      return t > 0 ? Qe.utils.decode(1200, e.slice(r + 4, r + 4 + t)) : "";
    }),
    (yu = function (e, r) {
      var t = Nt(e, r);
      return t > 0 ? Qe.utils.decode(65001, e.slice(r + 4, r + 4 + t)) : "";
    });
}
typeof Qe < "u" && Yy();
var sa = function (e, r) {
    return e[r];
  },
  ki = function (e, r) {
    return e[r + 1] * 256 + e[r];
  },
  Zy = function (e, r) {
    var t = e[r + 1] * 256 + e[r];
    return t < 32768 ? t : (65535 - t + 1) * -1;
  },
  Nt = function (e, r) {
    return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
  },
  xn = function (e, r) {
    return (e[r + 3] << 24) | (e[r + 2] << 16) | (e[r + 1] << 8) | e[r];
  },
  Qy = function (e, r) {
    return (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3];
  };
function Io(e, r) {
  var t = "",
    i,
    n,
    a = [],
    o,
    s,
    c,
    l;
  switch (r) {
    case "dbcs":
      if (((l = this.l), je && Buffer.isBuffer(this)))
        t = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (c = 0; c < e; ++c)
          (t += String.fromCharCode(ki(this, l))), (l += 2);
      e *= 2;
      break;
    case "utf8":
      t = ga(this, this.l, this.l + e);
      break;
    case "utf16le":
      (e *= 2), (t = Lc(this, this.l, this.l + e));
      break;
    case "wstr":
      if (typeof Qe < "u")
        t = Qe.utils.decode(si, this.slice(this.l, this.l + 2 * e));
      else return Io.call(this, e, "dbcs");
      e = 2 * e;
      break;
    case "lpstr-ansi":
      (t = vu(this, this.l)), (e = 4 + Nt(this, this.l));
      break;
    case "lpstr-cp":
      (t = xu(this, this.l)), (e = 4 + Nt(this, this.l));
      break;
    case "lpwstr":
      (t = _u(this, this.l)), (e = 4 + 2 * Nt(this, this.l));
      break;
    case "lpp4":
      (e = 4 + Nt(this, this.l)), (t = bu(this, this.l)), e & 2 && (e += 2);
      break;
    case "8lpp4":
      (e = 4 + Nt(this, this.l)),
        (t = yu(this, this.l)),
        e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, t = ""; (o = sa(this, this.l + e++)) !== 0; ) a.push(gc(o));
      t = a.join("");
      break;
    case "_wstr":
      for (e = 0, t = ""; (o = ki(this, this.l + e)) !== 0; )
        a.push(gc(o)), (e += 2);
      (e += 2), (t = a.join(""));
      break;
    case "dbcs-cont":
      for (t = "", l = this.l, c = 0; c < e; ++c) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return (
            (o = sa(this, l)),
            (this.l = l + 1),
            (s = Io.call(this, e - c, o ? "dbcs-cont" : "sbcs-cont")),
            a.join("") + s
          );
        a.push(gc(ki(this, l))), (l += 2);
      }
      (t = a.join("")), (e *= 2);
      break;
    case "cpstr":
      if (typeof Qe < "u") {
        t = Qe.utils.decode(si, this.slice(this.l, this.l + e));
        break;
      }
    case "sbcs-cont":
      for (t = "", l = this.l, c = 0; c != e; ++c) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return (
            (o = sa(this, l)),
            (this.l = l + 1),
            (s = Io.call(this, e - c, o ? "dbcs-cont" : "sbcs-cont")),
            a.join("") + s
          );
        a.push(gc(sa(this, l))), (l += 1);
      }
      t = a.join("");
      break;
    default:
      switch (e) {
        case 1:
          return (i = sa(this, this.l)), this.l++, i;
        case 2:
          return (i = (r === "i" ? Zy : ki)(this, this.l)), (this.l += 2), i;
        case 4:
        case -4:
          return r === "i" || !(this[this.l + 3] & 128)
            ? ((i = (e > 0 ? xn : Qy)(this, this.l)), (this.l += 4), i)
            : ((n = Nt(this, this.l)), (this.l += 4), n);
        case 8:
        case -8:
          if (r === "f")
            return (
              e == 8
                ? (n = Ic(this, this.l))
                : (n = Ic(
                    [
                      this[this.l + 7],
                      this[this.l + 6],
                      this[this.l + 5],
                      this[this.l + 4],
                      this[this.l + 3],
                      this[this.l + 2],
                      this[this.l + 1],
                      this[this.l + 0],
                    ],
                    0
                  )),
              (this.l += 8),
              n
            );
          e = 8;
        case 16:
          t = Gp(this, this.l, e);
          break;
      }
  }
  return (this.l += e), t;
}
var Jy = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >>> 8) & 255),
      (e[t + 2] = (r >>> 16) & 255),
      (e[t + 3] = (r >>> 24) & 255);
  },
  ew = function (e, r, t) {
    (e[t] = r & 255),
      (e[t + 1] = (r >> 8) & 255),
      (e[t + 2] = (r >> 16) & 255),
      (e[t + 3] = (r >> 24) & 255);
  },
  tw = function (e, r, t) {
    (e[t] = r & 255), (e[t + 1] = (r >>> 8) & 255);
  };
function rw(e, r, t) {
  var i = 0,
    n = 0;
  if (t === "dbcs") {
    for (n = 0; n != r.length; ++n) tw(this, r.charCodeAt(n), this.l + 2 * n);
    i = 2 * r.length;
  } else if (t === "sbcs") {
    if (typeof Qe < "u" && ua == 874)
      for (n = 0; n != r.length; ++n) {
        var a = Qe.utils.encode(ua, r.charAt(n));
        this[this.l + n] = a[0];
      }
    else
      for (r = r.replace(/[^\x00-\x7F]/g, "_"), n = 0; n != r.length; ++n)
        this[this.l + n] = r.charCodeAt(n) & 255;
    i = r.length;
  } else if (t === "hex") {
    for (; n < e; ++n)
      this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
    return this;
  } else if (t === "utf16le") {
    var o = Math.min(this.l + e, this.length);
    for (n = 0; n < Math.min(r.length, e); ++n) {
      var s = r.charCodeAt(n);
      (this[this.l++] = s & 255), (this[this.l++] = s >> 8);
    }
    for (; this.l < o; ) this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        (i = 1), (this[this.l] = r & 255);
        break;
      case 2:
        (i = 2),
          (this[this.l] = r & 255),
          (r >>>= 8),
          (this[this.l + 1] = r & 255);
        break;
      case 3:
        (i = 3),
          (this[this.l] = r & 255),
          (r >>>= 8),
          (this[this.l + 1] = r & 255),
          (r >>>= 8),
          (this[this.l + 2] = r & 255);
        break;
      case 4:
        (i = 4), Jy(this, r, this.l);
        break;
      case 8:
        if (((i = 8), t === "f")) {
          Ky(this, r, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        (i = 4), ew(this, r, this.l);
        break;
    }
  return (this.l += i), this;
}
function Jp(e, r) {
  var t = Gp(this, this.l, e.length >> 1);
  if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
  this.l += e.length >> 1;
}
function jt(e, r) {
  (e.l = r), (e.read_shift = Io), (e.chk = Jp), (e.write_shift = rw);
}
function tr(e, r) {
  e.l += r;
}
function At(e) {
  var r = Ki(e);
  return jt(r, 0), r;
}
function Si(e, r, t) {
  if (e) {
    var i, n, a;
    jt(e, e.l || 0);
    for (var o = e.length, s = 0, c = 0; e.l < o; ) {
      (s = e.read_shift(1)),
        s & 128 && (s = (s & 127) + ((e.read_shift(1) & 127) << 7));
      var l = Nc[s] || Nc[65535];
      for (i = e.read_shift(1), a = i & 127, n = 1; n < 4 && i & 128; ++n)
        a += ((i = e.read_shift(1)) & 127) << (7 * n);
      c = e.l + a;
      var d = l.f && l.f(e, a, t);
      if (((e.l = c), r(d, l, s))) return;
    }
  }
}
function Qd() {
  var e = [],
    r = je ? 256 : 2048,
    t = function (l) {
      var d = At(l);
      return jt(d, 0), d;
    },
    i = t(r),
    n = function () {
      i &&
        (i.length > i.l && ((i = i.slice(0, i.l)), (i.l = i.length)),
        i.length > 0 && e.push(i),
        (i = null));
    },
    a = function (l) {
      return i && l < i.length - i.l ? i : (n(), (i = t(Math.max(l + 1, r))));
    },
    o = function () {
      return n(), Gi(e);
    },
    s = function (l) {
      n(), (i = l), i.l == null && (i.l = i.length), a(r);
    };
  return { next: a, push: s, end: o, _bufs: e };
}
function Fo(e, r, t) {
  var i = Vt(e);
  if (
    (r.s
      ? (i.cRel && (i.c += r.s.c), i.rRel && (i.r += r.s.r))
      : (i.cRel && (i.c += r.c), i.rRel && (i.r += r.r)),
    !t || t.biff < 12)
  ) {
    for (; i.c >= 256; ) i.c -= 256;
    for (; i.r >= 65536; ) i.r -= 65536;
  }
  return i;
}
function zm(e, r, t) {
  var i = Vt(e);
  return (i.s = Fo(i.s, r.s, t)), (i.e = Fo(i.e, r.s, t)), i;
}
function Do(e, r) {
  if (e.cRel && e.c < 0) for (e = Vt(e); e.c < 0; ) e.c += r > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = Vt(e); e.r < 0; ) e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
  var t = Ie(e);
  return (
    !e.cRel && e.cRel != null && (t = aw(t)),
    !e.rRel && e.rRel != null && (t = iw(t)),
    t
  );
}
function Hd(e, r) {
  return e.s.r == 0 &&
    !e.s.rRel &&
    e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
    !e.e.rRel
    ? (e.s.cRel ? "" : "$") +
        Mt(e.s.c) +
        ":" +
        (e.e.cRel ? "" : "$") +
        Mt(e.e.c)
    : e.s.c == 0 &&
      !e.s.cRel &&
      e.e.c == (r.biff >= 12 ? 16383 : 255) &&
      !e.e.cRel
    ? (e.s.rRel ? "" : "$") +
      Ut(e.s.r) +
      ":" +
      (e.e.rRel ? "" : "$") +
      Ut(e.e.r)
    : Do(e.s, r.biff) + ":" + Do(e.e, r.biff);
}
function wu(e) {
  return parseInt(nw(e), 10) - 1;
}
function Ut(e) {
  return "" + (e + 1);
}
function iw(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function nw(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function ku(e) {
  for (var r = ow(e), t = 0, i = 0; i !== r.length; ++i)
    t = 26 * t + r.charCodeAt(i) - 64;
  return t - 1;
}
function Mt(e) {
  if (e < 0) throw new Error("invalid column " + e);
  var r = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    r = String.fromCharCode(((e - 1) % 26) + 65) + r;
  return r;
}
function aw(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function ow(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function sw(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function dr(e) {
  for (var r = 0, t = 0, i = 0; i < e.length; ++i) {
    var n = e.charCodeAt(i);
    n >= 48 && n <= 57
      ? (r = 10 * r + (n - 48))
      : n >= 65 && n <= 90 && (t = 26 * t + (n - 64));
  }
  return { c: t - 1, r: r - 1 };
}
function Ie(e) {
  for (var r = e.c + 1, t = ""; r; r = ((r - 1) / 26) | 0)
    t = String.fromCharCode(((r - 1) % 26) + 65) + t;
  return t + (e.r + 1);
}
function va(e) {
  var r = e.indexOf(":");
  return r == -1
    ? { s: dr(e), e: dr(e) }
    : { s: dr(e.slice(0, r)), e: dr(e.slice(r + 1)) };
}
function ze(e, r) {
  return typeof r > "u" || typeof r == "number"
    ? ze(e.s, e.e)
    : (typeof e != "string" && (e = Ie(e)),
      typeof r != "string" && (r = Ie(r)),
      e == r ? e : e + ":" + r);
}
function _t(e) {
  var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    t = 0,
    i = 0,
    n = 0,
    a = e.length;
  for (t = 0; i < a && !((n = e.charCodeAt(i) - 64) < 1 || n > 26); ++i)
    t = 26 * t + n;
  for (
    r.s.c = --t, t = 0;
    i < a && !((n = e.charCodeAt(i) - 48) < 0 || n > 9);
    ++i
  )
    t = 10 * t + n;
  if (((r.s.r = --t), i === a || n != 10))
    return (r.e.c = r.s.c), (r.e.r = r.s.r), r;
  for (++i, t = 0; i != a && !((n = e.charCodeAt(i) - 64) < 1 || n > 26); ++i)
    t = 26 * t + n;
  for (
    r.e.c = --t, t = 0;
    i != a && !((n = e.charCodeAt(i) - 48) < 0 || n > 9);
    ++i
  )
    t = 10 * t + n;
  return (r.e.r = --t), r;
}
function Hm(e, r) {
  var t = e.t == "d" && r instanceof Date;
  if (e.z != null)
    try {
      return (e.w = Pr(e.z, t ? ur(r) : r));
    } catch {}
  try {
    return (e.w = Pr((e.XF || {}).numFmtId || (t ? 14 : 0), t ? ur(r) : r));
  } catch {
    return "" + r;
  }
}
function Ti(e, r, t) {
  return e == null || e.t == null || e.t == "z"
    ? ""
    : e.w !== void 0
    ? e.w
    : (e.t == "d" && !e.z && t && t.dateNF && (e.z = t.dateNF),
      e.t == "e" ? In[e.v] || e.v : r == null ? Hm(e, e.v) : Hm(e, r));
}
function Zi(e, r) {
  var t = r && r.sheet ? r.sheet : "Sheet1",
    i = {};
  return (i[t] = e), { SheetNames: [t], Sheets: i };
}
function eg(e, r, t) {
  var i = t || {},
    n = e ? Array.isArray(e) : i.dense;
  It != null && n == null && (n = It);
  var a = e || (n ? [] : {}),
    o = 0,
    s = 0;
  if (a && i.origin != null) {
    if (typeof i.origin == "number") o = i.origin;
    else {
      var c = typeof i.origin == "string" ? dr(i.origin) : i.origin;
      (o = c.r), (s = c.c);
    }
    a["!ref"] || (a["!ref"] = "A1:A1");
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (a["!ref"]) {
    var d = _t(a["!ref"]);
    (l.s.c = d.s.c),
      (l.s.r = d.s.r),
      (l.e.c = Math.max(l.e.c, d.e.c)),
      (l.e.r = Math.max(l.e.r, d.e.r)),
      o == -1 && (l.e.r = o = d.e.r + 1);
  }
  for (var u = 0; u != r.length; ++u)
    if (r[u]) {
      if (!Array.isArray(r[u]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var h = 0; h != r[u].length; ++h)
        if (!(typeof r[u][h] > "u")) {
          var m = { v: r[u][h] },
            p = o + u,
            f = s + h;
          if (
            (l.s.r > p && (l.s.r = p),
            l.s.c > f && (l.s.c = f),
            l.e.r < p && (l.e.r = p),
            l.e.c < f && (l.e.c = f),
            r[u][h] &&
              typeof r[u][h] == "object" &&
              !Array.isArray(r[u][h]) &&
              !(r[u][h] instanceof Date))
          )
            m = r[u][h];
          else if (
            (Array.isArray(m.v) && ((m.f = r[u][h][1]), (m.v = m.v[0])),
            m.v === null)
          )
            if (m.f) m.t = "n";
            else if (i.nullError) (m.t = "e"), (m.v = 0);
            else if (i.sheetStubs) m.t = "z";
            else continue;
          else
            typeof m.v == "number"
              ? (m.t = "n")
              : typeof m.v == "boolean"
              ? (m.t = "b")
              : m.v instanceof Date
              ? ((m.z = i.dateNF || De[14]),
                i.cellDates
                  ? ((m.t = "d"), (m.w = Pr(m.z, ur(m.v))))
                  : ((m.t = "n"), (m.v = ur(m.v)), (m.w = Pr(m.z, m.v))))
              : (m.t = "s");
          if (n)
            a[p] || (a[p] = []),
              a[p][f] && a[p][f].z && (m.z = a[p][f].z),
              (a[p][f] = m);
          else {
            var g = Ie({ c: f, r: p });
            a[g] && a[g].z && (m.z = a[g].z), (a[g] = m);
          }
        }
    }
  return l.s.c < 1e7 && (a["!ref"] = ze(l)), a;
}
function xa(e, r) {
  return eg(null, e, r);
}
function cw(e) {
  return e.read_shift(4, "i");
}
function er(e) {
  var r = e.read_shift(4);
  return r === 0 ? "" : e.read_shift(r, "dbcs");
}
function lw(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function Eu(e, r) {
  var t = e.l,
    i = e.read_shift(1),
    n = er(e),
    a = [],
    o = { t: n, h: n };
  if (i & 1) {
    for (var s = e.read_shift(4), c = 0; c != s; ++c) a.push(lw(e));
    o.r = a;
  } else o.r = [{ ich: 0, ifnt: 0 }];
  return (e.l = t + r), o;
}
var dw = Eu;
function Lr(e) {
  var r = e.read_shift(4),
    t = e.read_shift(2);
  return (t += e.read_shift(1) << 16), e.l++, { c: r, iStyleRef: t };
}
function Sn(e) {
  var r = e.read_shift(2);
  return (r += e.read_shift(1) << 16), e.l++, { c: -1, iStyleRef: r };
}
var uw = er;
function Cu(e) {
  var r = e.read_shift(4);
  return r === 0 || r === 4294967295 ? "" : e.read_shift(r, "dbcs");
}
var fw = er,
  Jd = Cu;
function Tu(e) {
  var r = e.slice(e.l, e.l + 4),
    t = r[0] & 1,
    i = r[0] & 2;
  e.l += 4;
  var n =
    i === 0 ? Ic([0, 0, 0, 0, r[0] & 252, r[1], r[2], r[3]], 0) : xn(r, 0) >> 2;
  return t ? n / 100 : n;
}
function tg(e) {
  var r = { s: {}, e: {} };
  return (
    (r.s.r = e.read_shift(4)),
    (r.e.r = e.read_shift(4)),
    (r.s.c = e.read_shift(4)),
    (r.e.c = e.read_shift(4)),
    r
  );
}
var An = tg;
function Zt(e) {
  if (e.length - e.l < 8) throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function hw(e) {
  var r = {},
    t = e.read_shift(1),
    i = t >>> 1,
    n = e.read_shift(1),
    a = e.read_shift(2, "i"),
    o = e.read_shift(1),
    s = e.read_shift(1),
    c = e.read_shift(1);
  switch ((e.l++, i)) {
    case 0:
      r.auto = 1;
      break;
    case 1:
      r.index = n;
      var l = yn[n];
      l && (r.rgb = zo(l));
      break;
    case 2:
      r.rgb = zo([o, s, c]);
      break;
    case 3:
      r.theme = n;
      break;
  }
  return a != 0 && (r.tint = a > 0 ? a / 32767 : a / 32768), r;
}
function mw(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = {
    fBold: r & 1,
    fItalic: r & 2,
    fUnderline: r & 4,
    fStrikeout: r & 8,
    fOutline: r & 16,
    fShadow: r & 32,
    fCondense: r & 64,
    fExtend: r & 128,
  };
  return t;
}
function rg(e, r) {
  var t = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" },
    i = e.read_shift(4);
  switch (i) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return t[e.read_shift(4)] || "";
  }
  if (i > 400) throw new Error("Unsupported Clipboard: " + i.toString(16));
  return (e.l -= 4), e.read_shift(0, r == 1 ? "lpstr" : "lpwstr");
}
function pw(e) {
  return rg(e, 1);
}
function gw(e) {
  return rg(e, 2);
}
var Su = 2,
  mr = 3,
  xc = 11,
  Wm = 12,
  Fc = 19;
var _c = 64,
  vw = 65,
  xw = 71;
var _w = 4108,
  bw = 4126,
  Ot = 80,
  ig = 81,
  yw = [Ot, ig],
  ww = {
    1: { n: "CodePage", t: Su },
    2: { n: "Category", t: Ot },
    3: { n: "PresentationFormat", t: Ot },
    4: { n: "ByteCount", t: mr },
    5: { n: "LineCount", t: mr },
    6: { n: "ParagraphCount", t: mr },
    7: { n: "SlideCount", t: mr },
    8: { n: "NoteCount", t: mr },
    9: { n: "HiddenCount", t: mr },
    10: { n: "MultimediaClipCount", t: mr },
    11: { n: "ScaleCrop", t: xc },
    12: { n: "HeadingPairs", t: _w },
    13: { n: "TitlesOfParts", t: bw },
    14: { n: "Manager", t: Ot },
    15: { n: "Company", t: Ot },
    16: { n: "LinksUpToDate", t: xc },
    17: { n: "CharacterCount", t: mr },
    19: { n: "SharedDoc", t: xc },
    22: { n: "HyperlinksChanged", t: xc },
    23: { n: "AppVersion", t: mr, p: "version" },
    24: { n: "DigSig", t: vw },
    26: { n: "ContentType", t: Ot },
    27: { n: "ContentStatus", t: Ot },
    28: { n: "Language", t: Ot },
    29: { n: "Version", t: Ot },
    255: {},
    2147483648: { n: "Locale", t: Fc },
    2147483651: { n: "Behavior", t: Fc },
    1919054434: {},
  },
  kw = {
    1: { n: "CodePage", t: Su },
    2: { n: "Title", t: Ot },
    3: { n: "Subject", t: Ot },
    4: { n: "Author", t: Ot },
    5: { n: "Keywords", t: Ot },
    6: { n: "Comments", t: Ot },
    7: { n: "Template", t: Ot },
    8: { n: "LastAuthor", t: Ot },
    9: { n: "RevNumber", t: Ot },
    10: { n: "EditTime", t: _c },
    11: { n: "LastPrinted", t: _c },
    12: { n: "CreatedDate", t: _c },
    13: { n: "ModifiedDate", t: _c },
    14: { n: "PageCount", t: mr },
    15: { n: "WordCount", t: mr },
    16: { n: "CharCount", t: mr },
    17: { n: "Thumbnail", t: xw },
    18: { n: "Application", t: Ot },
    19: { n: "DocSecurity", t: mr },
    255: {},
    2147483648: { n: "Locale", t: Fc },
    2147483651: { n: "Behavior", t: Fc },
    1919054434: {},
  },
  Gm = {
    1: "US",
    2: "CA",
    3: "",
    7: "RU",
    20: "EG",
    30: "GR",
    31: "NL",
    32: "BE",
    33: "FR",
    34: "ES",
    36: "HU",
    39: "IT",
    41: "CH",
    43: "AT",
    44: "GB",
    45: "DK",
    46: "SE",
    47: "NO",
    48: "PL",
    49: "DE",
    52: "MX",
    55: "BR",
    61: "AU",
    64: "NZ",
    66: "TH",
    81: "JP",
    82: "KR",
    84: "VN",
    86: "CN",
    90: "TR",
    105: "JS",
    213: "DZ",
    216: "MA",
    218: "LY",
    351: "PT",
    354: "IS",
    358: "FI",
    420: "CZ",
    886: "TW",
    961: "LB",
    962: "JO",
    963: "SY",
    964: "IQ",
    965: "KW",
    966: "SA",
    971: "AE",
    972: "IL",
    974: "QA",
    981: "IR",
    65535: "US",
  },
  Ew = [
    null,
    "solid",
    "mediumGray",
    "darkGray",
    "lightGray",
    "darkHorizontal",
    "darkVertical",
    "darkDown",
    "darkUp",
    "darkGrid",
    "darkTrellis",
    "lightHorizontal",
    "lightVertical",
    "lightDown",
    "lightUp",
    "lightGrid",
    "lightTrellis",
    "gray125",
    "gray0625",
  ];
function Cw(e) {
  return e.map(function (r) {
    return [(r >> 16) & 255, (r >> 8) & 255, r & 255];
  });
}
var Tw = Cw([
    0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215,
    16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128,
    8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164,
    13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960,
    65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113,
    10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232,
    16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056,
    3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]),
  yn = Vt(Tw),
  In = {
    0: "#NULL!",
    7: "#DIV/0!",
    15: "#VALUE!",
    23: "#REF!",
    29: "#NAME?",
    36: "#NUM!",
    42: "#N/A",
    43: "#GETTING_DATA",
    255: "#WTF?",
  },
  ng = {
    "#NULL!": 0,
    "#DIV/0!": 7,
    "#VALUE!": 15,
    "#REF!": 23,
    "#NAME?": 29,
    "#NUM!": 36,
    "#N/A": 42,
    "#GETTING_DATA": 43,
    "#WTF?": 255,
  },
  $m = {
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
      "workbooks",
    "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
    "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
    "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":
      "workbooks",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":
      "sheets",
    "application/vnd.ms-excel.worksheet": "sheets",
    "application/vnd.ms-excel.binIndexWs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":
      "charts",
    "application/vnd.ms-excel.chartsheet": "charts",
    "application/vnd.ms-excel.macrosheet+xml": "macros",
    "application/vnd.ms-excel.macrosheet": "macros",
    "application/vnd.ms-excel.intlmacrosheet": "TODO",
    "application/vnd.ms-excel.binIndexMs": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":
      "dialogs",
    "application/vnd.ms-excel.dialogsheet": "dialogs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":
      "strs",
    "application/vnd.ms-excel.sharedStrings": "strs",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":
      "styles",
    "application/vnd.ms-excel.styles": "styles",
    "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
    "application/vnd.openxmlformats-officedocument.custom-properties+xml":
      "custprops",
    "application/vnd.openxmlformats-officedocument.extended-properties+xml":
      "extprops",
    "application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":
      "comments",
    "application/vnd.ms-excel.comments": "comments",
    "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
    "application/vnd.ms-excel.person+xml": "people",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
      "metadata",
    "application/vnd.ms-excel.sheetMetadata": "metadata",
    "application/vnd.ms-excel.pivotTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
    "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
    "application/vnd.ms-office.chartstyle+xml": "TODO",
    "application/vnd.ms-office.chartex+xml": "TODO",
    "application/vnd.ms-excel.calcChain": "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
      "calcchains",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
      "TODO",
    "application/vnd.ms-office.activeX": "TODO",
    "application/vnd.ms-office.activeX+xml": "TODO",
    "application/vnd.ms-excel.attachedToolbars": "TODO",
    "application/vnd.ms-excel.connections": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
      "TODO",
    "application/vnd.ms-excel.externalLink": "links",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
      "links",
    "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
    "application/vnd.ms-excel.pivotCacheRecords": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
      "TODO",
    "application/vnd.ms-excel.queryTable": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
      "TODO",
    "application/vnd.ms-excel.userNames": "TODO",
    "application/vnd.ms-excel.revisionHeaders": "TODO",
    "application/vnd.ms-excel.revisionLog": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
      "TODO",
    "application/vnd.ms-excel.tableSingleCells": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
      "TODO",
    "application/vnd.ms-excel.slicer": "TODO",
    "application/vnd.ms-excel.slicerCache": "TODO",
    "application/vnd.ms-excel.slicer+xml": "TODO",
    "application/vnd.ms-excel.slicerCache+xml": "TODO",
    "application/vnd.ms-excel.wsSortMap": "TODO",
    "application/vnd.ms-excel.table": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
    "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
    "application/vnd.ms-excel.Timeline+xml": "TODO",
    "application/vnd.ms-excel.TimelineCache+xml": "TODO",
    "application/vnd.ms-office.vbaProject": "vba",
    "application/vnd.ms-office.vbaProjectSignature": "TODO",
    "application/vnd.ms-office.volatileDependencies": "TODO",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
      "TODO",
    "application/vnd.ms-excel.controlproperties+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.model+data": "TODO",
    "application/vnd.ms-excel.Survey+xml": "TODO",
    "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
    "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
      "TODO",
    "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
    "application/vnd.openxmlformats-package.relationships+xml": "rels",
    "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
    "image/png": "TODO",
    sheet: "js",
  };
function Sw() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: "",
  };
}
function Aw(e) {
  var r = Sw();
  if (!e || !e.match) return r;
  var t = {};
  if (
    ((e.match(rr) || []).forEach(function (i) {
      var n = Te(i);
      switch (n[0].replace(Ny, "<")) {
        case "<?xml":
          break;
        case "<Types":
          r.xmlns = n["xmlns" + (n[0].match(/<(\w+):/) || ["", ""])[1]];
          break;
        case "<Default":
          t[n.Extension] = n.ContentType;
          break;
        case "<Override":
          r[$m[n.ContentType]] !== void 0 &&
            r[$m[n.ContentType]].push(n.PartName);
          break;
      }
    }),
    r.xmlns !== $y.CT)
  )
    throw new Error("Unknown Namespace: " + r.xmlns);
  return (
    (r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : ""),
    (r.sst = r.strs.length > 0 ? r.strs[0] : ""),
    (r.style = r.styles.length > 0 ? r.styles[0] : ""),
    (r.defaults = t),
    delete r.calcchains,
    r
  );
}
var wi = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET:
    "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS:
    "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS:
    "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA:
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT:
    "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
};
function eu(e) {
  var r = e.lastIndexOf("/");
  return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
}
function Mo(e, r) {
  var t = { "!id": {} };
  if (!e) return t;
  r.charAt(0) !== "/" && (r = "/" + r);
  var i = {};
  return (
    (e.match(rr) || []).forEach(function (n) {
      var a = Te(n);
      if (a[0] === "<Relationship") {
        var o = {};
        (o.Type = a.Type),
          (o.Target = a.Target),
          (o.Id = a.Id),
          a.TargetMode && (o.TargetMode = a.TargetMode);
        var s = a.TargetMode === "External" ? a.Target : So(a.Target, r);
        (t[s] = o), (i[a.Id] = o);
      }
    }),
    (t["!id"] = i),
    t
  );
}
var Iw = "application/vnd.oasis.opendocument.spreadsheet";
function Fw(e, r) {
  for (var t = gu(e), i, n; (i = Vo.exec(t)); )
    switch (i[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (((n = Te(i[0], !1)), n.path == "/" && n.type !== Iw))
          throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (r && r.WTF) throw i;
    }
}
var Ro = [
    ["cp:category", "Category"],
    ["cp:contentStatus", "ContentStatus"],
    ["cp:keywords", "Keywords"],
    ["cp:lastModifiedBy", "LastAuthor"],
    ["cp:lastPrinted", "LastPrinted"],
    ["cp:revision", "RevNumber"],
    ["cp:version", "Version"],
    ["dc:creator", "Author"],
    ["dc:description", "Comments"],
    ["dc:identifier", "Identifier"],
    ["dc:language", "Language"],
    ["dc:subject", "Subject"],
    ["dc:title", "Title"],
    ["dcterms:created", "CreatedDate", "date"],
    ["dcterms:modified", "ModifiedDate", "date"],
  ],
  Dw = (function () {
    for (var e = new Array(Ro.length), r = 0; r < Ro.length; ++r) {
      var t = Ro[r],
        i =
          "(?:" +
          t[0].slice(0, t[0].indexOf(":")) +
          ":)" +
          t[0].slice(t[0].indexOf(":") + 1);
      e[r] = new RegExp("<" + i + "[^>]*>([\\s\\S]*?)</" + i + ">");
    }
    return e;
  })();
function ag(e) {
  var r = {};
  e = lt(e);
  for (var t = 0; t < Ro.length; ++t) {
    var i = Ro[t],
      n = e.match(Dw[t]);
    n != null && n.length > 0 && (r[i[1]] = $e(n[1])),
      i[2] === "date" && r[i[1]] && (r[i[1]] = Pt(r[i[1]]));
  }
  return r;
}
var Mw = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"],
];
function og(e, r, t, i) {
  var n = [];
  if (typeof e == "string") n = Pm(e, i);
  else
    for (var a = 0; a < e.length; ++a)
      n = n.concat(
        e[a].map(function (d) {
          return { v: d };
        })
      );
  var o =
      typeof r == "string"
        ? Pm(r, i).map(function (d) {
            return d.v;
          })
        : r,
    s = 0,
    c = 0;
  if (o.length > 0)
    for (var l = 0; l !== n.length; l += 2) {
      switch (((c = +n[l + 1].v), n[l].v)) {
        case "Worksheets":
        case "\u5DE5\u4F5C\u8868":
        case "\u041B\u0438\u0441\u0442\u044B":
        case "\u0623\u0648\u0631\u0627\u0642 \u0627\u0644\u0639\u0645\u0644":
        case "\u30EF\u30FC\u30AF\u30B7\u30FC\u30C8":
        case "\u05D2\u05DC\u05D9\u05D5\u05E0\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4":
        case "Arbeitsbl\xE4tter":
        case "\xC7al\u0131\u015Fma Sayfalar\u0131":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de c\xE1lculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de c\xE1lculo":
        case "Werkbladen":
          (t.Worksheets = c), (t.SheetNames = o.slice(s, s + c));
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "\u540D\u524D\u4ED8\u304D\u4E00\u89A7":
        case "Benannte Bereiche":
        case "Navngivne omr\xE5der":
          (t.NamedRanges = c), (t.DefinedNames = o.slice(s, s + c));
          break;
        case "Charts":
        case "Diagramme":
          (t.Chartsheets = c), (t.ChartNames = o.slice(s, s + c));
          break;
      }
      s += c;
    }
}
function Rw(e, r, t) {
  var i = {};
  return (
    r || (r = {}),
    (e = lt(e)),
    Mw.forEach(function (n) {
      var a = (e.match(jo(n[0])) || [])[1];
      switch (n[2]) {
        case "string":
          a && (r[n[1]] = $e(a));
          break;
        case "bool":
          r[n[1]] = a === "true";
          break;
        case "raw":
          var o = e.match(
            new RegExp("<" + n[0] + "[^>]*>([\\s\\S]*?)</" + n[0] + ">")
          );
          o && o.length > 0 && (i[n[1]] = o[1]);
          break;
      }
    }),
    i.HeadingPairs &&
      i.TitlesOfParts &&
      og(i.HeadingPairs, i.TitlesOfParts, r, t),
    r
  );
}
var Ow = /<[^>]+>[^<]*/g;
function Nw(e, r) {
  var t = {},
    i = "",
    n = e.match(Ow);
  if (n)
    for (var a = 0; a != n.length; ++a) {
      var o = n[a],
        s = Te(o);
      switch (s[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          i = $e(s.name);
          break;
        case "</property>":
          i = null;
          break;
        default:
          if (o.indexOf("<vt:") === 0) {
            var c = o.split(">"),
              l = c[0].slice(4),
              d = c[1];
            switch (l) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                t[i] = $e(d);
                break;
              case "bool":
                t[i] = mt(d);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                t[i] = parseInt(d, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                t[i] = parseFloat(d);
                break;
              case "filetime":
              case "date":
                t[i] = Pt(d);
                break;
              case "cy":
              case "error":
                t[i] = $e(d);
                break;
              default:
                if (l.slice(-1) == "/") break;
                r.WTF &&
                  typeof console < "u" &&
                  console.warn("Unexpected", o, l, c);
            }
          } else if (o.slice(0, 2) !== "</") {
            if (r.WTF) throw new Error(o);
          }
      }
    }
  return t;
}
var Pw = {
    Title: "Title",
    Subject: "Subject",
    Author: "Author",
    Keywords: "Keywords",
    Comments: "Description",
    LastAuthor: "LastAuthor",
    RevNumber: "Revision",
    Application: "AppName",
    LastPrinted: "LastPrinted",
    CreatedDate: "Created",
    ModifiedDate: "LastSaved",
    Category: "Category",
    Manager: "Manager",
    Company: "Company",
    AppVersion: "Version",
    ContentStatus: "ContentStatus",
    Identifier: "Identifier",
    Language: "Language",
  },
  Wd;
function Lw(e, r, t) {
  Wd || (Wd = hu(Pw)), (r = Wd[r] || r), (e[r] = t);
}
function Au(e) {
  var r = e.read_shift(4),
    t = e.read_shift(4);
  return new Date(((t / 1e7) * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3)
    .toISOString()
    .replace(/\.000/, "");
}
function sg(e, r, t) {
  var i = e.l,
    n = e.read_shift(0, "lpstr-cp");
  if (t) for (; (e.l - i) & 3; ) ++e.l;
  return n;
}
function cg(e, r, t) {
  var i = e.read_shift(0, "lpwstr");
  return t && (e.l += (4 - ((i.length + 1) & 3)) & 3), i;
}
function lg(e, r, t) {
  return r === 31 ? cg(e) : sg(e, r, t);
}
function tu(e, r, t) {
  return lg(e, r, t === !1 ? 0 : 4);
}
function Bw(e, r) {
  if (!r) throw new Error("VtUnalignedString must have positive length");
  return lg(e, r, 0);
}
function jw(e) {
  for (var r = e.read_shift(4), t = [], i = 0; i != r; ++i) {
    var n = e.l;
    (t[i] = e.read_shift(0, "lpwstr").replace(Jt, "")),
      (e.l - n) & 2 && (e.l += 2);
  }
  return t;
}
function Vw(e) {
  for (var r = e.read_shift(4), t = [], i = 0; i != r; ++i)
    t[i] = e.read_shift(0, "lpstr-cp").replace(Jt, "");
  return t;
}
function Uw(e) {
  var r = e.l,
    t = Dc(e, ig);
  e[e.l] == 0 && e[e.l + 1] == 0 && (e.l - r) & 2 && (e.l += 2);
  var i = Dc(e, mr);
  return [t, i];
}
function zw(e) {
  for (var r = e.read_shift(4), t = [], i = 0; i < r / 2; ++i) t.push(Uw(e));
  return t;
}
function Xm(e, r) {
  for (var t = e.read_shift(4), i = {}, n = 0; n != t; ++n) {
    var a = e.read_shift(4),
      o = e.read_shift(4);
    (i[a] = e
      .read_shift(o, r === 1200 ? "utf16le" : "utf8")
      .replace(Jt, "")
      .replace(To, "!")),
      r === 1200 && o % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = (e.l >> 3) << 2), i;
}
function dg(e) {
  var r = e.read_shift(4),
    t = e.slice(e.l, e.l + r);
  return (e.l += r), (r & 3) > 0 && (e.l += (4 - (r & 3)) & 3), t;
}
function Hw(e) {
  var r = {};
  return (
    (r.Size = e.read_shift(4)), (e.l += r.Size + 3 - ((r.Size - 1) % 4)), r
  );
}
function Dc(e, r, t) {
  var i = e.read_shift(2),
    n,
    a = t || {};
  if (
    ((e.l += 2),
    r !== Wm &&
      i !== r &&
      yw.indexOf(r) === -1 &&
      !((r & 65534) == 4126 && (i & 65534) == 4126))
  )
    throw new Error("Expected type " + r + " saw " + i);
  switch (r === Wm ? i : r) {
    case 2:
      return (n = e.read_shift(2, "i")), a.raw || (e.l += 2), n;
    case 3:
      return (n = e.read_shift(4, "i")), n;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return (n = e.read_shift(4)), n;
    case 30:
      return sg(e, i, 4).replace(Jt, "");
    case 31:
      return cg(e);
    case 64:
      return Au(e);
    case 65:
      return dg(e);
    case 71:
      return Hw(e);
    case 80:
      return tu(e, i, !a.raw).replace(Jt, "");
    case 81:
      return Bw(e, i).replace(Jt, "");
    case 4108:
      return zw(e);
    case 4126:
    case 4127:
      return i == 4127 ? jw(e) : Vw(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + r + " " + i);
  }
}
function qm(e, r) {
  var t = e.l,
    i = e.read_shift(4),
    n = e.read_shift(4),
    a = [],
    o = 0,
    s = 0,
    c = -1,
    l = {};
  for (o = 0; o != n; ++o) {
    var d = e.read_shift(4),
      u = e.read_shift(4);
    a[o] = [d, u + t];
  }
  a.sort(function (E, x) {
    return E[1] - x[1];
  });
  var h = {};
  for (o = 0; o != n; ++o) {
    if (e.l !== a[o][1]) {
      var m = !0;
      if (o > 0 && r)
        switch (r[a[o - 1][0]].t) {
          case 2:
            e.l + 2 === a[o][1] && ((e.l += 2), (m = !1));
            break;
          case 80:
            e.l <= a[o][1] && ((e.l = a[o][1]), (m = !1));
            break;
          case 4108:
            e.l <= a[o][1] && ((e.l = a[o][1]), (m = !1));
            break;
        }
      if (((!r || o == 0) && e.l <= a[o][1] && ((m = !1), (e.l = a[o][1])), m))
        throw new Error(
          "Read Error: Expected address " + a[o][1] + " at " + e.l + " :" + o
        );
    }
    if (r) {
      var p = r[a[o][0]];
      if (
        ((h[p.n] = Dc(e, p.t, { raw: !0 })),
        p.p === "version" &&
          (h[p.n] =
            String(h[p.n] >> 16) +
            "." +
            ("0000" + String(h[p.n] & 65535)).slice(-4)),
        p.n == "CodePage")
      )
        switch (h[p.n]) {
          case 0:
            h[p.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            qr((s = (h[p.n] >>> 0) & 65535));
            break;
          default:
            throw new Error("Unsupported CodePage: " + h[p.n]);
        }
    } else if (a[o][0] === 1) {
      if (((s = h.CodePage = Dc(e, Su)), qr(s), c !== -1)) {
        var f = e.l;
        (e.l = a[c][1]), (l = Xm(e, s)), (e.l = f);
      }
    } else if (a[o][0] === 0) {
      if (s === 0) {
        (c = o), (e.l = a[o + 1][1]);
        continue;
      }
      l = Xm(e, s);
    } else {
      var g = l[a[o][0]],
        T;
      switch (e[e.l]) {
        case 65:
          (e.l += 4), (T = dg(e));
          break;
        case 30:
          (e.l += 4), (T = tu(e, e[e.l - 4]).replace(/\u0000+$/, ""));
          break;
        case 31:
          (e.l += 4), (T = tu(e, e[e.l - 4]).replace(/\u0000+$/, ""));
          break;
        case 3:
          (e.l += 4), (T = e.read_shift(4, "i"));
          break;
        case 19:
          (e.l += 4), (T = e.read_shift(4));
          break;
        case 5:
          (e.l += 4), (T = e.read_shift(8, "f"));
          break;
        case 11:
          (e.l += 4), (T = wt(e, 4));
          break;
        case 64:
          (e.l += 4), (T = Pt(Au(e)));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      h[g] = T;
    }
  }
  return (e.l = t + i), h;
}
function Km(e, r, t) {
  var i = e.content;
  if (!i) return {};
  jt(i, 0);
  var n,
    a,
    o,
    s,
    c = 0;
  i.chk("feff", "Byte Order: "), i.read_shift(2);
  var l = i.read_shift(4),
    d = i.read_shift(16);
  if (d !== Ue.utils.consts.HEADER_CLSID && d !== t)
    throw new Error("Bad PropertySet CLSID " + d);
  if (((n = i.read_shift(4)), n !== 1 && n !== 2))
    throw new Error("Unrecognized #Sets: " + n);
  if (((a = i.read_shift(16)), (s = i.read_shift(4)), n === 1 && s !== i.l))
    throw new Error("Length mismatch: " + s + " !== " + i.l);
  n === 2 && ((o = i.read_shift(16)), (c = i.read_shift(4)));
  var u = qm(i, r),
    h = { SystemIdentifier: l };
  for (var m in u) h[m] = u[m];
  if (((h.FMTID = a), n === 1)) return h;
  if ((c - i.l == 2 && (i.l += 2), i.l !== c))
    throw new Error("Length mismatch 2: " + i.l + " !== " + c);
  var p;
  try {
    p = qm(i, null);
  } catch {}
  for (m in p) h[m] = p[m];
  return (h.FMTID = [a, o]), h;
}
function Wi(e, r) {
  return e.read_shift(r), null;
}
function Ww(e, r, t) {
  for (var i = [], n = e.l + r; e.l < n; ) i.push(t(e, n - e.l));
  if (n !== e.l) throw new Error("Slurp error");
  return i;
}
function wt(e, r) {
  return e.read_shift(r) === 1;
}
function St(e) {
  return e.read_shift(2, "u");
}
function ug(e, r) {
  return Ww(e, r, St);
}
function Gw(e) {
  var r = e.read_shift(1),
    t = e.read_shift(1);
  return t === 1 ? r : r === 1;
}
function $o(e, r, t) {
  var i = e.read_shift(t && t.biff >= 12 ? 2 : 1),
    n = "sbcs-cont",
    a = si;
  if ((t && t.biff >= 8 && (si = 1200), !t || t.biff == 8)) {
    var o = e.read_shift(1);
    o && (n = "dbcs-cont");
  } else t.biff == 12 && (n = "wstr");
  t.biff >= 2 && t.biff <= 5 && (n = "cpstr");
  var s = i ? e.read_shift(i, n) : "";
  return (si = a), s;
}
function $w(e) {
  var r = si;
  si = 1200;
  var t = e.read_shift(2),
    i = e.read_shift(1),
    n = i & 4,
    a = i & 8,
    o = 1 + (i & 1),
    s = 0,
    c,
    l = {};
  a && (s = e.read_shift(2)), n && (c = e.read_shift(4));
  var d = o == 2 ? "dbcs-cont" : "sbcs-cont",
    u = t === 0 ? "" : e.read_shift(t, d);
  return (
    a && (e.l += 4 * s),
    n && (e.l += c),
    (l.t = u),
    a || ((l.raw = "<t>" + l.t + "</t>"), (l.r = l.t)),
    (si = r),
    l
  );
}
function En(e, r, t) {
  var i;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return e.read_shift(r, "cpstr");
    if (t.biff >= 12) return e.read_shift(r, "dbcs-cont");
  }
  var n = e.read_shift(1);
  return (
    n === 0
      ? (i = e.read_shift(r, "sbcs-cont"))
      : (i = e.read_shift(r, "dbcs-cont")),
    i
  );
}
function Xo(e, r, t) {
  var i = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return i === 0 ? (e.l++, "") : En(e, i, t);
}
function Fn(e, r, t) {
  if (t.biff > 5) return Xo(e, r, t);
  var i = e.read_shift(1);
  return i === 0
    ? (e.l++, "")
    : e.read_shift(i, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Xw(e) {
  var r = e.read_shift(1);
  e.l++;
  var t = e.read_shift(2);
  return (e.l += 2), [r, t];
}
function qw(e) {
  var r = e.read_shift(4),
    t = e.l,
    i = !1;
  r > 24 &&
    ((e.l += r - 24),
    e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (i = !0),
    (e.l = t));
  var n = e.read_shift((i ? r - 24 : r) >> 1, "utf16le").replace(Jt, "");
  return i && (e.l += 24), n;
}
function Kw(e) {
  for (var r = e.read_shift(2), t = ""; r-- > 0; ) t += "../";
  var i = e.read_shift(0, "lpstr-ansi");
  if (((e.l += 2), e.read_shift(2) != 57005))
    throw new Error("Bad FileMoniker");
  var n = e.read_shift(4);
  if (n === 0) return t + i.replace(/\\/g, "/");
  var a = e.read_shift(4);
  if (e.read_shift(2) != 3) throw new Error("Bad FileMoniker");
  var o = e.read_shift(a >> 1, "utf16le").replace(Jt, "");
  return t + o;
}
function Yw(e, r) {
  var t = e.read_shift(16);
  switch (((r -= 16), t)) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return qw(e, r);
    case "0303000000000000c000000000000046":
      return Kw(e, r);
    default:
      throw new Error("Unsupported Moniker " + t);
  }
}
function bc(e) {
  var r = e.read_shift(4),
    t = r > 0 ? e.read_shift(r, "utf16le").replace(Jt, "") : "";
  return t;
}
function Zw(e, r) {
  var t = e.l + r,
    i = e.read_shift(4);
  if (i !== 2) throw new Error("Unrecognized streamVersion: " + i);
  var n = e.read_shift(2);
  e.l += 2;
  var a,
    o,
    s,
    c,
    l = "",
    d,
    u;
  n & 16 && (a = bc(e, t - e.l)),
    n & 128 && (o = bc(e, t - e.l)),
    (n & 257) === 257 && (s = bc(e, t - e.l)),
    (n & 257) === 1 && (c = Yw(e, t - e.l)),
    n & 8 && (l = bc(e, t - e.l)),
    n & 32 && (d = e.read_shift(16)),
    n & 64 && (u = Au(e)),
    (e.l = t);
  var h = o || s || c || "";
  h && l && (h += "#" + l),
    h || (h = "#" + l),
    n & 2 && h.charAt(0) == "/" && h.charAt(1) != "/" && (h = "file://" + h);
  var m = { Target: h };
  return d && (m.guid = d), u && (m.time = u), a && (m.Tooltip = a), m;
}
function fg(e) {
  var r = e.read_shift(1),
    t = e.read_shift(1),
    i = e.read_shift(1),
    n = e.read_shift(1);
  return [r, t, i, n];
}
function hg(e, r) {
  var t = fg(e, r);
  return (t[3] = 0), t;
}
function di(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(2);
  return { r, c: t, ixfe: i };
}
function Qw(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2);
  return (e.l += 8), { type: r, flags: t };
}
function Jw(e, r, t) {
  return r === 0 ? "" : Fn(e, r, t);
}
function e2(e, r, t) {
  var i = t.biff > 8 ? 4 : 2,
    n = e.read_shift(i),
    a = e.read_shift(i, "i"),
    o = e.read_shift(i, "i");
  return [n, a, o];
}
function mg(e) {
  var r = e.read_shift(2),
    t = Tu(e);
  return [r, t];
}
function t2(e, r, t) {
  (e.l += 4), (r -= 4);
  var i = e.l + r,
    n = $o(e, r, t),
    a = e.read_shift(2);
  if (((i -= e.l), a !== i))
    throw new Error("Malformed AddinUdf: padding = " + i + " != " + a);
  return (e.l += a), n;
}
function Bc(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(2),
    n = e.read_shift(2);
  return { s: { c: i, r }, e: { c: n, r: t } };
}
function pg(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(1),
    n = e.read_shift(1);
  return { s: { c: i, r }, e: { c: n, r: t } };
}
var r2 = pg;
function gg(e) {
  e.l += 4;
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(2);
  return (e.l += 12), [t, r, i];
}
function i2(e) {
  var r = {};
  return (
    (e.l += 4), (e.l += 16), (r.fSharedNote = e.read_shift(2)), (e.l += 4), r
  );
}
function n2(e) {
  var r = {};
  return (e.l += 4), (e.cf = e.read_shift(2)), r;
}
function Kt(e) {
  (e.l += 2), (e.l += e.read_shift(2));
}
var a2 = {
  0: Kt,
  4: Kt,
  5: Kt,
  6: Kt,
  7: n2,
  8: Kt,
  9: Kt,
  10: Kt,
  11: Kt,
  12: Kt,
  13: i2,
  14: Kt,
  15: Kt,
  16: Kt,
  17: Kt,
  18: Kt,
  19: Kt,
  20: Kt,
  21: gg,
};
function o2(e, r) {
  for (var t = e.l + r, i = []; e.l < t; ) {
    var n = e.read_shift(2);
    e.l -= 2;
    try {
      i.push(a2[n](e, t - e.l));
    } catch {
      return (e.l = t), i;
    }
  }
  return e.l != t && (e.l = t), i;
}
function yc(e, r) {
  var t = { BIFFVer: 0, dt: 0 };
  switch (
    ((t.BIFFVer = e.read_shift(2)),
    (r -= 2),
    r >= 2 && ((t.dt = e.read_shift(2)), (e.l -= 2)),
    t.BIFFVer)
  ) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (r > 6) throw new Error("Unexpected BIFF Ver " + t.BIFFVer);
  }
  return e.read_shift(r), t;
}
function s2(e, r) {
  return r === 0 || e.read_shift(2), 1200;
}
function c2(e, r, t) {
  if (t.enc) return (e.l += r), "";
  var i = e.l,
    n = Fn(e, 0, t);
  return e.read_shift(r + i - e.l), n;
}
function l2(e, r, t) {
  var i = (t && t.biff == 8) || r == 2 ? e.read_shift(2) : ((e.l += r), 0);
  return { fDialog: i & 16, fBelow: i & 64, fRight: i & 128 };
}
function d2(e, r, t) {
  var i = e.read_shift(4),
    n = e.read_shift(1) & 3,
    a = e.read_shift(1);
  switch (a) {
    case 0:
      a = "Worksheet";
      break;
    case 1:
      a = "Macrosheet";
      break;
    case 2:
      a = "Chartsheet";
      break;
    case 6:
      a = "VBAModule";
      break;
  }
  var o = $o(e, 0, t);
  return o.length === 0 && (o = "Sheet1"), { pos: i, hs: n, dt: a, name: o };
}
function u2(e, r) {
  for (
    var t = e.l + r, i = e.read_shift(4), n = e.read_shift(4), a = [], o = 0;
    o != n && e.l < t;
    ++o
  )
    a.push($w(e));
  return (a.Count = i), (a.Unique = n), a;
}
function f2(e, r) {
  var t = {};
  return (t.dsst = e.read_shift(2)), (e.l += r - 2), t;
}
function h2(e) {
  var r = {};
  (r.r = e.read_shift(2)),
    (r.c = e.read_shift(2)),
    (r.cnt = e.read_shift(2) - r.c);
  var t = e.read_shift(2);
  e.l += 4;
  var i = e.read_shift(1);
  return (
    (e.l += 3),
    i & 7 && (r.level = i & 7),
    i & 32 && (r.hidden = !0),
    i & 64 && (r.hpt = t / 20),
    r
  );
}
function m2(e) {
  var r = Qw(e);
  if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
  var t = e.read_shift(4);
  return t !== 0;
}
function p2(e) {
  return e.read_shift(2), e.read_shift(4);
}
function Ym(e, r, t) {
  var i = 0;
  (t && t.biff == 2) || (i = e.read_shift(2));
  var n = e.read_shift(2);
  t && t.biff == 2 && ((i = 1 - (n >> 15)), (n &= 32767));
  var a = {
    Unsynced: i & 1,
    DyZero: (i & 2) >> 1,
    ExAsc: (i & 4) >> 2,
    ExDsc: (i & 8) >> 3,
  };
  return [a, n];
}
function g2(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(2),
    n = e.read_shift(2),
    a = e.read_shift(2),
    o = e.read_shift(2),
    s = e.read_shift(2),
    c = e.read_shift(2),
    l = e.read_shift(2);
  return {
    Pos: [r, t],
    Dim: [i, n],
    Flags: a,
    CurTab: o,
    FirstTab: s,
    Selected: c,
    TabRatio: l,
  };
}
function v2(e, r, t) {
  if (t && t.biff >= 2 && t.biff < 5) return {};
  var i = e.read_shift(2);
  return { RTL: i & 64 };
}
function x2() {}
function _2(e, r, t) {
  var i = { dyHeight: e.read_shift(2), fl: e.read_shift(2) };
  switch ((t && t.biff) || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return (i.name = $o(e, 0, t)), i;
}
function b2(e) {
  var r = di(e);
  return (r.isst = e.read_shift(4)), r;
}
function y2(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var i = e.l + r,
    n = di(e, 6);
  t.biff == 2 && e.l++;
  var a = Xo(e, i - e.l, t);
  return (n.val = a), n;
}
function w2(e, r, t) {
  var i = e.read_shift(2),
    n = Fn(e, 0, t);
  return [i, n];
}
var k2 = Fn;
function Zm(e, r, t) {
  var i = e.l + r,
    n = t.biff == 8 || !t.biff ? 4 : 2,
    a = e.read_shift(n),
    o = e.read_shift(n),
    s = e.read_shift(2),
    c = e.read_shift(2);
  return (e.l = i), { s: { r: a, c: s }, e: { r: o, c } };
}
function E2(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = mg(e);
  return { r, c: t, ixfe: i[0], rknum: i[1] };
}
function C2(e, r) {
  for (
    var t = e.l + r - 2, i = e.read_shift(2), n = e.read_shift(2), a = [];
    e.l < t;

  )
    a.push(mg(e));
  if (e.l !== t) throw new Error("MulRK read error");
  var o = e.read_shift(2);
  if (a.length != o - n + 1) throw new Error("MulRK length mismatch");
  return { r: i, c: n, C: o, rkrec: a };
}
function T2(e, r) {
  for (
    var t = e.l + r - 2, i = e.read_shift(2), n = e.read_shift(2), a = [];
    e.l < t;

  )
    a.push(e.read_shift(2));
  if (e.l !== t) throw new Error("MulBlank read error");
  var o = e.read_shift(2);
  if (a.length != o - n + 1) throw new Error("MulBlank length mismatch");
  return { r: i, c: n, C: o, ixfe: a };
}
function S2(e, r, t, i) {
  var n = {},
    a = e.read_shift(4),
    o = e.read_shift(4),
    s = e.read_shift(4),
    c = e.read_shift(2);
  return (
    (n.patternType = Ew[s >> 26]),
    i.cellStyles &&
      ((n.alc = a & 7),
      (n.fWrap = (a >> 3) & 1),
      (n.alcV = (a >> 4) & 7),
      (n.fJustLast = (a >> 7) & 1),
      (n.trot = (a >> 8) & 255),
      (n.cIndent = (a >> 16) & 15),
      (n.fShrinkToFit = (a >> 20) & 1),
      (n.iReadOrder = (a >> 22) & 2),
      (n.fAtrNum = (a >> 26) & 1),
      (n.fAtrFnt = (a >> 27) & 1),
      (n.fAtrAlc = (a >> 28) & 1),
      (n.fAtrBdr = (a >> 29) & 1),
      (n.fAtrPat = (a >> 30) & 1),
      (n.fAtrProt = (a >> 31) & 1),
      (n.dgLeft = o & 15),
      (n.dgRight = (o >> 4) & 15),
      (n.dgTop = (o >> 8) & 15),
      (n.dgBottom = (o >> 12) & 15),
      (n.icvLeft = (o >> 16) & 127),
      (n.icvRight = (o >> 23) & 127),
      (n.grbitDiag = (o >> 30) & 3),
      (n.icvTop = s & 127),
      (n.icvBottom = (s >> 7) & 127),
      (n.icvDiag = (s >> 14) & 127),
      (n.dgDiag = (s >> 21) & 15),
      (n.icvFore = c & 127),
      (n.icvBack = (c >> 7) & 127),
      (n.fsxButton = (c >> 14) & 1)),
    n
  );
}
function A2(e, r, t) {
  var i = {};
  return (
    (i.ifnt = e.read_shift(2)),
    (i.numFmtId = e.read_shift(2)),
    (i.flags = e.read_shift(2)),
    (i.fStyle = (i.flags >> 2) & 1),
    (r -= 6),
    (i.data = S2(e, r, i.fStyle, t)),
    i
  );
}
function I2(e) {
  e.l += 4;
  var r = [e.read_shift(2), e.read_shift(2)];
  if ((r[0] !== 0 && r[0]--, r[1] !== 0 && r[1]--, r[0] > 7 || r[1] > 7))
    throw new Error("Bad Gutters: " + r.join("|"));
  return r;
}
function Qm(e, r, t) {
  var i = di(e, 6);
  (t.biff == 2 || r == 9) && ++e.l;
  var n = Gw(e, 2);
  return (i.val = n), (i.t = n === !0 || n === !1 ? "b" : "e"), i;
}
function F2(e, r, t) {
  t.biffguess && t.biff == 2 && (t.biff = 5);
  var i = di(e, 6),
    n = Zt(e, 8);
  return (i.val = n), i;
}
var Jm = Jw;
function D2(e, r, t) {
  var i = e.l + r,
    n = e.read_shift(2),
    a = e.read_shift(2);
  if (((t.sbcch = a), a == 1025 || a == 14849)) return [a, n];
  if (a < 1 || a > 255) throw new Error("Unexpected SupBook type: " + a);
  for (var o = En(e, a), s = []; i > e.l; ) s.push(Xo(e));
  return [a, n, o, s];
}
function ep(e, r, t) {
  var i = e.read_shift(2),
    n,
    a = {
      fBuiltIn: i & 1,
      fWantAdvise: (i >>> 1) & 1,
      fWantPict: (i >>> 2) & 1,
      fOle: (i >>> 3) & 1,
      fOleLink: (i >>> 4) & 1,
      cf: (i >>> 5) & 1023,
      fIcon: (i >>> 15) & 1,
    };
  return (
    t.sbcch === 14849 && (n = t2(e, r - 2, t)),
    (a.body = n || e.read_shift(r - 2)),
    typeof n == "string" && (a.Name = n),
    a
  );
}
var M2 = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase",
];
function tp(e, r, t) {
  var i = e.l + r,
    n = e.read_shift(2),
    a = e.read_shift(1),
    o = e.read_shift(1),
    s = e.read_shift(t && t.biff == 2 ? 1 : 2),
    c = 0;
  (!t || t.biff >= 5) &&
    (t.biff != 5 && (e.l += 2),
    (c = e.read_shift(2)),
    t.biff == 5 && (e.l += 2),
    (e.l += 4));
  var l = En(e, o, t);
  n & 32 && (l = M2[l.charCodeAt(0)]);
  var d = i - e.l;
  t && t.biff == 2 && --d;
  var u = i == e.l || s === 0 || !(d > 0) ? [] : hT(e, d, t, s);
  return { chKey: a, Name: l, itab: c, rgce: u };
}
function vg(e, r, t) {
  if (t.biff < 8) return R2(e, r, t);
  for (
    var i = [], n = e.l + r, a = e.read_shift(t.biff > 8 ? 4 : 2);
    a-- !== 0;

  )
    i.push(e2(e, t.biff > 8 ? 12 : 6, t));
  if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
  return i;
}
function R2(e, r, t) {
  e[e.l + 1] == 3 && e[e.l]++;
  var i = $o(e, r, t);
  return i.charCodeAt(0) == 3 ? i.slice(1) : i;
}
function O2(e, r, t) {
  if (t.biff < 8) {
    e.l += r;
    return;
  }
  var i = e.read_shift(2),
    n = e.read_shift(2),
    a = En(e, i, t),
    o = En(e, n, t);
  return [a, o];
}
function N2(e, r, t) {
  var i = pg(e, 6);
  e.l++;
  var n = e.read_shift(1);
  return (r -= 8), [mT(e, r, t), n, i];
}
function rp(e, r, t) {
  var i = r2(e, 6);
  switch (t.biff) {
    case 2:
      e.l++, (r -= 7);
      break;
    case 3:
    case 4:
      (e.l += 2), (r -= 8);
      break;
    default:
      (e.l += 6), (r -= 12);
  }
  return [i, uT(e, r, t, i)];
}
function P2(e) {
  var r = e.read_shift(4) !== 0,
    t = e.read_shift(4) !== 0,
    i = e.read_shift(4);
  return [r, t, i];
}
function L2(e, r, t) {
  if (!(t.biff < 8)) {
    var i = e.read_shift(2),
      n = e.read_shift(2),
      a = e.read_shift(2),
      o = e.read_shift(2),
      s = Fn(e, 0, t);
    return t.biff < 8 && e.read_shift(1), [{ r: i, c: n }, s, o, a];
  }
}
function B2(e, r, t) {
  return L2(e, r, t);
}
function j2(e, r) {
  for (var t = [], i = e.read_shift(2); i--; ) t.push(Bc(e, r));
  return t;
}
function V2(e, r, t) {
  if (t && t.biff < 8) return z2(e, r, t);
  var i = gg(e, 22),
    n = o2(e, r - 22, i[1]);
  return { cmo: i, ft: n };
}
var U2 = {
  8: function (e, r) {
    var t = e.l + r;
    e.l += 10;
    var i = e.read_shift(2);
    (e.l += 4), (e.l += 2), (e.l += 2), (e.l += 2), (e.l += 4);
    var n = e.read_shift(1);
    return (e.l += n), (e.l = t), { fmt: i };
  },
};
function z2(e, r, t) {
  e.l += 4;
  var i = e.read_shift(2),
    n = e.read_shift(2),
    a = e.read_shift(2);
  (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 2),
    (e.l += 6),
    (r -= 36);
  var o = [];
  return o.push((U2[i] || tr)(e, r, t)), { cmo: [n, i, a], ft: o };
}
function H2(e, r, t) {
  var i = e.l,
    n = "";
  try {
    e.l += 4;
    var a = (t.lastobj || { cmo: [0, 0] }).cmo[1],
      o;
    [0, 5, 7, 11, 12, 14].indexOf(a) == -1 ? (e.l += 6) : (o = Xw(e, 6, t));
    var s = e.read_shift(2);
    e.read_shift(2), St(e, 2);
    var c = e.read_shift(2);
    e.l += c;
    for (var l = 1; l < e.lens.length - 1; ++l) {
      if (e.l - i != e.lens[l]) throw new Error("TxO: bad continue record");
      var d = e[e.l],
        u = En(e, e.lens[l + 1] - e.lens[l] - 1);
      if (((n += u), n.length >= (d ? s : 2 * s))) break;
    }
    if (n.length !== s && n.length !== s * 2)
      throw new Error("cchText: " + s + " != " + n.length);
    return (e.l = i + r), { t: n };
  } catch {
    return (e.l = i + r), { t: n };
  }
}
function W2(e, r) {
  var t = Bc(e, 8);
  e.l += 16;
  var i = Zw(e, r - 24);
  return [t, i];
}
function G2(e, r) {
  e.read_shift(2);
  var t = Bc(e, 8),
    i = e.read_shift((r - 10) / 2, "dbcs-cont");
  return (i = i.replace(Jt, "")), [t, i];
}
function $2(e) {
  var r = [0, 0],
    t;
  return (
    (t = e.read_shift(2)),
    (r[0] = Gm[t] || t),
    (t = e.read_shift(2)),
    (r[1] = Gm[t] || t),
    r
  );
}
function X2(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(hg(e, 8));
  return t;
}
function q2(e) {
  for (var r = e.read_shift(2), t = []; r-- > 0; ) t.push(hg(e, 8));
  return t;
}
function K2(e) {
  e.l += 2;
  var r = { cxfs: 0, crc: 0 };
  return (r.cxfs = e.read_shift(2)), (r.crc = e.read_shift(4)), r;
}
function xg(e, r, t) {
  if (!t.cellStyles) return tr(e, r);
  var i = t && t.biff >= 12 ? 4 : 2,
    n = e.read_shift(i),
    a = e.read_shift(i),
    o = e.read_shift(i),
    s = e.read_shift(i),
    c = e.read_shift(2);
  i == 2 && (e.l += 2);
  var l = { s: n, e: a, w: o, ixfe: s, flags: c };
  return (t.biff >= 5 || !t.biff) && (l.level = (c >> 8) & 7), l;
}
function Y2(e, r) {
  var t = {};
  return (
    r < 32 ||
      ((e.l += 16), (t.header = Zt(e, 8)), (t.footer = Zt(e, 8)), (e.l += 2)),
    t
  );
}
function Z2(e, r, t) {
  var i = { area: !1 };
  if (t.biff != 5) return (e.l += r), i;
  var n = e.read_shift(1);
  return (e.l += 3), n & 16 && (i.area = !0), i;
}
var Q2 = di,
  J2 = ug,
  ek = Xo;
function tk(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(4),
    n = { fmt: r, env: t, len: i, data: e.slice(e.l, e.l + i) };
  return (e.l += i), n;
}
function rk(e, r, t) {
  t.biffguess && t.biff == 5 && (t.biff = 2);
  var i = di(e, 6);
  ++e.l;
  var n = Fn(e, r - 7, t);
  return (i.t = "str"), (i.val = n), i;
}
function ik(e) {
  var r = di(e, 6);
  ++e.l;
  var t = Zt(e, 8);
  return (r.t = "n"), (r.val = t), r;
}
function nk(e) {
  var r = di(e, 6);
  ++e.l;
  var t = e.read_shift(2);
  return (r.t = "n"), (r.val = t), r;
}
function ak(e) {
  var r = e.read_shift(1);
  return r === 0 ? (e.l++, "") : e.read_shift(r, "sbcs-cont");
}
function ok(e, r) {
  (e.l += 6), (e.l += 2), (e.l += 1), (e.l += 3), (e.l += 1), (e.l += r - 13);
}
function sk(e, r, t) {
  var i = e.l + r,
    n = di(e, 6),
    a = e.read_shift(2),
    o = En(e, a, t);
  return (e.l = i), (n.t = "str"), (n.val = o), n;
}
var ck = [2, 3, 48, 49, 131, 139, 140, 245],
  ip = (function () {
    var e = {
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
        8: 865,
        9: 437,
        10: 850,
        11: 437,
        13: 437,
        14: 850,
        15: 437,
        16: 850,
        17: 437,
        18: 850,
        19: 932,
        20: 850,
        21: 437,
        22: 850,
        23: 865,
        24: 437,
        25: 437,
        26: 850,
        27: 437,
        28: 863,
        29: 850,
        31: 852,
        34: 852,
        35: 852,
        36: 860,
        37: 850,
        38: 866,
        55: 850,
        64: 852,
        77: 936,
        78: 949,
        79: 950,
        80: 874,
        87: 1252,
        88: 1252,
        89: 1252,
        108: 863,
        134: 737,
        135: 852,
        136: 857,
        204: 1257,
        255: 16969,
      },
      r = hu({
        1: 437,
        2: 850,
        3: 1252,
        4: 1e4,
        100: 852,
        101: 866,
        102: 865,
        103: 861,
        104: 895,
        105: 620,
        106: 737,
        107: 857,
        120: 950,
        121: 949,
        122: 936,
        123: 932,
        124: 874,
        125: 1255,
        126: 1256,
        150: 10007,
        151: 10029,
        152: 10006,
        200: 1250,
        201: 1251,
        202: 1254,
        203: 1253,
        0: 20127,
      });
    function t(s, c) {
      var l = [],
        d = Ki(1);
      switch (c.type) {
        case "base64":
          d = Xr(wr(s));
          break;
        case "binary":
          d = Xr(s);
          break;
        case "buffer":
        case "array":
          d = s;
          break;
      }
      jt(d, 0);
      var u = d.read_shift(1),
        h = !!(u & 136),
        m = !1,
        p = !1;
      switch (u) {
        case 2:
          break;
        case 3:
          break;
        case 48:
          (m = !0), (h = !0);
          break;
        case 49:
          (m = !0), (h = !0);
          break;
        case 131:
          break;
        case 139:
          break;
        case 140:
          p = !0;
          break;
        case 245:
          break;
        default:
          throw new Error("DBF Unsupported Version: " + u.toString(16));
      }
      var f = 0,
        g = 521;
      u == 2 && (f = d.read_shift(2)),
        (d.l += 3),
        u != 2 && (f = d.read_shift(4)),
        f > 1048576 && (f = 1e6),
        u != 2 && (g = d.read_shift(2));
      var T = d.read_shift(2),
        E = c.codepage || 1252;
      u != 2 &&
        ((d.l += 16),
        d.read_shift(1),
        d[d.l] !== 0 && (E = e[d[d.l]]),
        (d.l += 1),
        (d.l += 2)),
        p && (d.l += 36);
      for (
        var x = [],
          O = {},
          z = Math.min(d.length, u == 2 ? 521 : g - 10 - (m ? 264 : 0)),
          F = p ? 32 : 11;
        d.l < z && d[d.l] != 13;

      )
        switch (
          ((O = {}),
          (O.name = Qe.utils
            .decode(E, d.slice(d.l, d.l + F))
            .replace(/[\u0000\r\n].*$/g, "")),
          (d.l += F),
          (O.type = String.fromCharCode(d.read_shift(1))),
          u != 2 && !p && (O.offset = d.read_shift(4)),
          (O.len = d.read_shift(1)),
          u == 2 && (O.offset = d.read_shift(2)),
          (O.dec = d.read_shift(1)),
          O.name.length && x.push(O),
          u != 2 && (d.l += p ? 13 : 14),
          O.type)
        ) {
          case "B":
            (!m || O.len != 8) &&
              c.WTF &&
              console.log("Skipping " + O.name + ":" + O.type);
            break;
          case "G":
          case "P":
            c.WTF && console.log("Skipping " + O.name + ":" + O.type);
            break;
          case "+":
          case "0":
          case "@":
          case "C":
          case "D":
          case "F":
          case "I":
          case "L":
          case "M":
          case "N":
          case "O":
          case "T":
          case "Y":
            break;
          default:
            throw new Error("Unknown Field Type: " + O.type);
        }
      if ((d[d.l] !== 13 && (d.l = g - 1), d.read_shift(1) !== 13))
        throw new Error("DBF Terminator not found " + d.l + " " + d[d.l]);
      d.l = g;
      var C = 0,
        P = 0;
      for (l[0] = [], P = 0; P != x.length; ++P) l[0][P] = x[P].name;
      for (; f-- > 0; ) {
        if (d[d.l] === 42) {
          d.l += T;
          continue;
        }
        for (++d.l, l[++C] = [], P = 0, P = 0; P != x.length; ++P) {
          var M = d.slice(d.l, d.l + x[P].len);
          (d.l += x[P].len), jt(M, 0);
          var X = Qe.utils.decode(E, M);
          switch (x[P].type) {
            case "C":
              X.trim().length && (l[C][P] = X.replace(/\s+$/, ""));
              break;
            case "D":
              X.length === 8
                ? (l[C][P] = new Date(
                    +X.slice(0, 4),
                    +X.slice(4, 6) - 1,
                    +X.slice(6, 8)
                  ))
                : (l[C][P] = X);
              break;
            case "F":
              l[C][P] = parseFloat(X.trim());
              break;
            case "+":
            case "I":
              l[C][P] = p
                ? M.read_shift(-4, "i") ^ 2147483648
                : M.read_shift(4, "i");
              break;
            case "L":
              switch (X.trim().toUpperCase()) {
                case "Y":
                case "T":
                  l[C][P] = !0;
                  break;
                case "N":
                case "F":
                  l[C][P] = !1;
                  break;
                case "":
                case "?":
                  break;
                default:
                  throw new Error("DBF Unrecognized L:|" + X + "|");
              }
              break;
            case "M":
              if (!h)
                throw new Error(
                  "DBF Unexpected MEMO for type " + u.toString(16)
                );
              l[C][P] =
                "##MEMO##" + (p ? parseInt(X.trim(), 10) : M.read_shift(4));
              break;
            case "N":
              (X = X.replace(/\u0000/g, "").trim()),
                X && X != "." && (l[C][P] = +X || 0);
              break;
            case "@":
              l[C][P] = new Date(M.read_shift(-8, "f") - 621356832e5);
              break;
            case "T":
              l[C][P] = new Date(
                (M.read_shift(4) - 2440588) * 864e5 + M.read_shift(4)
              );
              break;
            case "Y":
              l[C][P] =
                M.read_shift(4, "i") / 1e4 +
                (M.read_shift(4, "i") / 1e4) * Math.pow(2, 32);
              break;
            case "O":
              l[C][P] = -M.read_shift(-8, "f");
              break;
            case "B":
              if (m && x[P].len == 8) {
                l[C][P] = M.read_shift(8, "f");
                break;
              }
            case "G":
            case "P":
              M.l += x[P].len;
              break;
            case "0":
              if (x[P].name === "_NullFlags") break;
            default:
              throw new Error("DBF Unsupported data type " + x[P].type);
          }
        }
      }
      if (u != 2 && d.l < d.length && d[d.l++] != 26)
        throw new Error(
          "DBF EOF Marker missing " +
            (d.l - 1) +
            " of " +
            d.length +
            " " +
            d[d.l - 1].toString(16)
        );
      return c && c.sheetRows && (l = l.slice(0, c.sheetRows)), (c.DBF = x), l;
    }
    function i(s, c) {
      var l = c || {};
      l.dateNF || (l.dateNF = "yyyymmdd");
      var d = xa(t(s, l), l);
      return (
        (d["!cols"] = l.DBF.map(function (u) {
          return { wch: u.len, DBF: u };
        })),
        delete l.DBF,
        d
      );
    }
    function n(s, c) {
      try {
        return Zi(i(s, c), c);
      } catch (l) {
        if (c && c.WTF) throw l;
      }
      return { SheetNames: [], Sheets: {} };
    }
    var a = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
    function o(s, c) {
      var l = c || {};
      if ((+l.codepage >= 0 && qr(+l.codepage), l.type == "string"))
        throw new Error("Cannot write DBF to JS string");
      var d = Qd(),
        u = su(s, { header: 1, raw: !0, cellDates: !0 }),
        h = u[0],
        m = u.slice(1),
        p = s["!cols"] || [],
        f = 0,
        g = 0,
        T = 0,
        E = 1;
      for (f = 0; f < h.length; ++f) {
        if (((p[f] || {}).DBF || {}).name) {
          (h[f] = p[f].DBF.name), ++T;
          continue;
        }
        if (h[f] != null) {
          if (
            (++T,
            typeof h[f] == "number" && (h[f] = h[f].toString(10)),
            typeof h[f] != "string")
          )
            throw new Error(
              "DBF Invalid column name " + h[f] + " |" + typeof h[f] + "|"
            );
          if (h.indexOf(h[f]) !== f) {
            for (g = 0; g < 1024; ++g)
              if (h.indexOf(h[f] + "_" + g) == -1) {
                h[f] += "_" + g;
                break;
              }
          }
        }
      }
      var x = _t(s["!ref"]),
        O = [],
        z = [],
        F = [];
      for (f = 0; f <= x.e.c - x.s.c; ++f) {
        var C = "",
          P = "",
          M = 0,
          X = [];
        for (g = 0; g < m.length; ++g) m[g][f] != null && X.push(m[g][f]);
        if (X.length == 0 || h[f] == null) {
          O[f] = "?";
          continue;
        }
        for (g = 0; g < X.length; ++g) {
          switch (typeof X[g]) {
            case "number":
              P = "B";
              break;
            case "string":
              P = "C";
              break;
            case "boolean":
              P = "L";
              break;
            case "object":
              P = X[g] instanceof Date ? "D" : "C";
              break;
            default:
              P = "C";
          }
          (M = Math.max(M, String(X[g]).length)), (C = C && C != P ? "C" : P);
        }
        M > 250 && (M = 250),
          (P = ((p[f] || {}).DBF || {}).type),
          P == "C" && p[f].DBF.len > M && (M = p[f].DBF.len),
          C == "B" &&
            P == "N" &&
            ((C = "N"), (F[f] = p[f].DBF.dec), (M = p[f].DBF.len)),
          (z[f] = C == "C" || P == "N" ? M : a[C] || 0),
          (E += z[f]),
          (O[f] = C);
      }
      var G = d.next(32);
      for (
        G.write_shift(4, 318902576),
          G.write_shift(4, m.length),
          G.write_shift(2, 296 + 32 * T),
          G.write_shift(2, E),
          f = 0;
        f < 4;
        ++f
      )
        G.write_shift(4, 0);
      for (
        G.write_shift(4, 0 | ((+r[ua] || 3) << 8)), f = 0, g = 0;
        f < h.length;
        ++f
      )
        if (h[f] != null) {
          var R = d.next(32),
            re = (h[f].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
          R.write_shift(1, re, "sbcs"),
            R.write_shift(1, O[f] == "?" ? "C" : O[f], "sbcs"),
            R.write_shift(4, g),
            R.write_shift(1, z[f] || a[O[f]] || 0),
            R.write_shift(1, F[f] || 0),
            R.write_shift(1, 2),
            R.write_shift(4, 0),
            R.write_shift(1, 0),
            R.write_shift(4, 0),
            R.write_shift(4, 0),
            (g += z[f] || a[O[f]] || 0);
        }
      var be = d.next(264);
      for (be.write_shift(4, 13), f = 0; f < 65; ++f) be.write_shift(4, 0);
      for (f = 0; f < m.length; ++f) {
        var oe = d.next(E);
        for (oe.write_shift(1, 0), g = 0; g < h.length; ++g)
          if (h[g] != null)
            switch (O[g]) {
              case "L":
                oe.write_shift(1, m[f][g] == null ? 63 : m[f][g] ? 84 : 70);
                break;
              case "B":
                oe.write_shift(8, m[f][g] || 0, "f");
                break;
              case "N":
                var Ce = "0";
                for (
                  typeof m[f][g] == "number" &&
                    (Ce = m[f][g].toFixed(F[g] || 0)),
                    T = 0;
                  T < z[g] - Ce.length;
                  ++T
                )
                  oe.write_shift(1, 32);
                oe.write_shift(1, Ce, "sbcs");
                break;
              case "D":
                m[f][g]
                  ? (oe.write_shift(
                      4,
                      ("0000" + m[f][g].getFullYear()).slice(-4),
                      "sbcs"
                    ),
                    oe.write_shift(
                      2,
                      ("00" + (m[f][g].getMonth() + 1)).slice(-2),
                      "sbcs"
                    ),
                    oe.write_shift(
                      2,
                      ("00" + m[f][g].getDate()).slice(-2),
                      "sbcs"
                    ))
                  : oe.write_shift(8, "00000000", "sbcs");
                break;
              case "C":
                var _e = String(m[f][g] != null ? m[f][g] : "").slice(0, z[g]);
                for (
                  oe.write_shift(1, _e, "sbcs"), T = 0;
                  T < z[g] - _e.length;
                  ++T
                )
                  oe.write_shift(1, 32);
                break;
            }
      }
      return d.next(1).write_shift(1, 26), d.end();
    }
    return { to_workbook: n, to_sheet: i, from_sheet: o };
  })(),
  lk = (function () {
    var e = {
        AA: "\xC0",
        BA: "\xC1",
        CA: "\xC2",
        DA: 195,
        HA: "\xC4",
        JA: 197,
        AE: "\xC8",
        BE: "\xC9",
        CE: "\xCA",
        HE: "\xCB",
        AI: "\xCC",
        BI: "\xCD",
        CI: "\xCE",
        HI: "\xCF",
        AO: "\xD2",
        BO: "\xD3",
        CO: "\xD4",
        DO: 213,
        HO: "\xD6",
        AU: "\xD9",
        BU: "\xDA",
        CU: "\xDB",
        HU: "\xDC",
        Aa: "\xE0",
        Ba: "\xE1",
        Ca: "\xE2",
        Da: 227,
        Ha: "\xE4",
        Ja: 229,
        Ae: "\xE8",
        Be: "\xE9",
        Ce: "\xEA",
        He: "\xEB",
        Ai: "\xEC",
        Bi: "\xED",
        Ci: "\xEE",
        Hi: "\xEF",
        Ao: "\xF2",
        Bo: "\xF3",
        Co: "\xF4",
        Do: 245,
        Ho: "\xF6",
        Au: "\xF9",
        Bu: "\xFA",
        Cu: "\xFB",
        Hu: "\xFC",
        KC: "\xC7",
        Kc: "\xE7",
        q: "\xE6",
        z: "\u0153",
        a: "\xC6",
        j: "\u0152",
        DN: 209,
        Dn: 241,
        Hy: 255,
        S: 169,
        c: 170,
        R: 174,
        "B ": 180,
        0: 176,
        1: 177,
        2: 178,
        3: 179,
        5: 181,
        6: 182,
        7: 183,
        Q: 185,
        k: 186,
        b: 208,
        i: 216,
        l: 222,
        s: 240,
        y: 248,
        "!": 161,
        '"': 162,
        "#": 163,
        "(": 164,
        "%": 165,
        "'": 167,
        "H ": 168,
        "+": 171,
        ";": 187,
        "<": 188,
        "=": 189,
        ">": 190,
        "?": 191,
        "{": 223,
      },
      r = new RegExp(
        "\x1BN(" +
          ci(e)
            .join("|")
            .replace(/\|\|\|/, "|\\||")
            .replace(/([?()+])/g, "\\$1") +
          "|\\|)",
        "gm"
      ),
      t = function (h, m) {
        var p = e[m];
        return typeof p == "number" ? xm(p) : p;
      },
      i = function (h, m, p) {
        var f = ((m.charCodeAt(0) - 32) << 4) | (p.charCodeAt(0) - 48);
        return f == 59 ? h : xm(f);
      };
    e["|"] = 254;
    function n(h, m) {
      switch (m.type) {
        case "base64":
          return a(wr(h), m);
        case "binary":
          return a(h, m);
        case "buffer":
          return a(je && Buffer.isBuffer(h) ? h.toString("binary") : Tn(h), m);
        case "array":
          return a(kn(h), m);
      }
      throw new Error("Unrecognized type " + m.type);
    }
    function a(h, m) {
      var p = h.split(/[\n\r]+/),
        f = -1,
        g = -1,
        T = 0,
        E = 0,
        x = [],
        O = [],
        z = null,
        F = {},
        C = [],
        P = [],
        M = [],
        X = 0,
        G;
      for (+m.codepage >= 0 && qr(+m.codepage); T !== p.length; ++T) {
        X = 0;
        var R = p[T].trim()
            .replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, i)
            .replace(r, t),
          re = R.replace(/;;/g, "\0")
            .split(";")
            .map(function (I) {
              return I.replace(/\u0000/g, ";");
            }),
          be = re[0],
          oe;
        if (R.length > 0)
          switch (be) {
            case "ID":
              break;
            case "E":
              break;
            case "B":
              break;
            case "O":
              break;
            case "W":
              break;
            case "P":
              re[1].charAt(0) == "P" && O.push(R.slice(3).replace(/;;/g, ";"));
              break;
            case "C":
              var Ce = !1,
                _e = !1,
                He = !1,
                le = !1,
                ye = -1,
                K = -1;
              for (E = 1; E < re.length; ++E)
                switch (re[E].charAt(0)) {
                  case "A":
                    break;
                  case "X":
                    (g = parseInt(re[E].slice(1)) - 1), (_e = !0);
                    break;
                  case "Y":
                    for (
                      f = parseInt(re[E].slice(1)) - 1,
                        _e || (g = 0),
                        G = x.length;
                      G <= f;
                      ++G
                    )
                      x[G] = [];
                    break;
                  case "K":
                    (oe = re[E].slice(1)),
                      oe.charAt(0) === '"'
                        ? (oe = oe.slice(1, oe.length - 1))
                        : oe === "TRUE"
                        ? (oe = !0)
                        : oe === "FALSE"
                        ? (oe = !1)
                        : isNaN(Yr(oe))
                        ? isNaN(fa(oe).getDate()) || (oe = Pt(oe))
                        : ((oe = Yr(oe)), z !== null && pa(z) && (oe = Pc(oe))),
                      typeof Qe < "u" &&
                        typeof oe == "string" &&
                        (m || {}).type != "string" &&
                        (m || {}).codepage &&
                        (oe = Qe.utils.decode(m.codepage, oe)),
                      (Ce = !0);
                    break;
                  case "E":
                    le = !0;
                    var A = la(re[E].slice(1), { r: f, c: g });
                    x[f][g] = [x[f][g], A];
                    break;
                  case "S":
                    (He = !0), (x[f][g] = [x[f][g], "S5S"]);
                    break;
                  case "G":
                    break;
                  case "R":
                    ye = parseInt(re[E].slice(1)) - 1;
                    break;
                  case "C":
                    K = parseInt(re[E].slice(1)) - 1;
                    break;
                  default:
                    if (m && m.WTF) throw new Error("SYLK bad record " + R);
                }
              if (
                (Ce &&
                  (x[f][g] && x[f][g].length == 2
                    ? (x[f][g][0] = oe)
                    : (x[f][g] = oe),
                  (z = null)),
                He)
              ) {
                if (le)
                  throw new Error(
                    "SYLK shared formula cannot have own formula"
                  );
                var V = ye > -1 && x[ye][K];
                if (!V || !V[1])
                  throw new Error("SYLK shared formula cannot find base");
                x[f][g][1] = Ag(V[1], { r: f - ye, c: g - K });
              }
              break;
            case "F":
              var D = 0;
              for (E = 1; E < re.length; ++E)
                switch (re[E].charAt(0)) {
                  case "X":
                    (g = parseInt(re[E].slice(1)) - 1), ++D;
                    break;
                  case "Y":
                    for (
                      f = parseInt(re[E].slice(1)) - 1, G = x.length;
                      G <= f;
                      ++G
                    )
                      x[G] = [];
                    break;
                  case "M":
                    X = parseInt(re[E].slice(1)) / 20;
                    break;
                  case "F":
                    break;
                  case "G":
                    break;
                  case "P":
                    z = O[parseInt(re[E].slice(1))];
                    break;
                  case "S":
                    break;
                  case "D":
                    break;
                  case "N":
                    break;
                  case "W":
                    for (
                      M = re[E].slice(1).split(" "), G = parseInt(M[0], 10);
                      G <= parseInt(M[1], 10);
                      ++G
                    )
                      (X = parseInt(M[2], 10)),
                        (P[G - 1] = X === 0 ? { hidden: !0 } : { wch: X }),
                        ha(P[G - 1]);
                    break;
                  case "C":
                    (g = parseInt(re[E].slice(1)) - 1), P[g] || (P[g] = {});
                    break;
                  case "R":
                    (f = parseInt(re[E].slice(1)) - 1),
                      C[f] || (C[f] = {}),
                      X > 0
                        ? ((C[f].hpt = X), (C[f].hpx = Ho(X)))
                        : X === 0 && (C[f].hidden = !0);
                    break;
                  default:
                    if (m && m.WTF) throw new Error("SYLK bad record " + R);
                }
              D < 1 && (z = null);
              break;
            default:
              if (m && m.WTF) throw new Error("SYLK bad record " + R);
          }
      }
      return (
        C.length > 0 && (F["!rows"] = C),
        P.length > 0 && (F["!cols"] = P),
        m && m.sheetRows && (x = x.slice(0, m.sheetRows)),
        [x, F]
      );
    }
    function o(h, m) {
      var p = n(h, m),
        f = p[0],
        g = p[1],
        T = xa(f, m);
      return (
        ci(g).forEach(function (E) {
          T[E] = g[E];
        }),
        T
      );
    }
    function s(h, m) {
      return Zi(o(h, m), m);
    }
    function c(h, m, p, f) {
      var g = "C;Y" + (p + 1) + ";X" + (f + 1) + ";K";
      switch (h.t) {
        case "n":
          (g += h.v || 0), h.f && !h.F && (g += ";E" + KE(h.f, { r: p, c: f }));
          break;
        case "b":
          g += h.v ? "TRUE" : "FALSE";
          break;
        case "e":
          g += h.w || h.v;
          break;
        case "d":
          g += '"' + (h.w || h.v) + '"';
          break;
        case "s":
          g += '"' + h.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
          break;
      }
      return g;
    }
    function l(h, m) {
      m.forEach(function (p, f) {
        var g = "F;W" + (f + 1) + " " + (f + 1) + " ";
        p.hidden
          ? (g += "0")
          : (typeof p.width == "number" && !p.wpx && (p.wpx = Rc(p.width)),
            typeof p.wpx == "number" && !p.wch && (p.wch = Oc(p.wpx)),
            typeof p.wch == "number" && (g += Math.round(p.wch))),
          g.charAt(g.length - 1) != " " && h.push(g);
      });
    }
    function d(h, m) {
      m.forEach(function (p, f) {
        var g = "F;";
        p.hidden
          ? (g += "M0;")
          : p.hpt
          ? (g += "M" + 20 * p.hpt + ";")
          : p.hpx && (g += "M" + 20 * Cg(p.hpx) + ";"),
          g.length > 2 && h.push(g + "R" + (f + 1));
      });
    }
    function u(h, m) {
      var p = ["ID;PWXL;N;E"],
        f = [],
        g = _t(h["!ref"]),
        T,
        E = Array.isArray(h),
        x = `\r
`;
      p.push("P;PGeneral"),
        p.push("F;P0;DG0G8;M255"),
        h["!cols"] && l(p, h["!cols"]),
        h["!rows"] && d(p, h["!rows"]),
        p.push(
          "B;Y" +
            (g.e.r - g.s.r + 1) +
            ";X" +
            (g.e.c - g.s.c + 1) +
            ";D" +
            [g.s.c, g.s.r, g.e.c, g.e.r].join(" ")
        );
      for (var O = g.s.r; O <= g.e.r; ++O)
        for (var z = g.s.c; z <= g.e.c; ++z) {
          var F = Ie({ r: O, c: z });
          (T = E ? (h[O] || [])[z] : h[F]),
            !(!T || (T.v == null && (!T.f || T.F))) && f.push(c(T, h, O, z, m));
        }
      return p.join(x) + x + f.join(x) + x + "E" + x;
    }
    return { to_workbook: s, to_sheet: o, from_sheet: u };
  })(),
  dk = (function () {
    function e(a, o) {
      switch (o.type) {
        case "base64":
          return r(wr(a), o);
        case "binary":
          return r(a, o);
        case "buffer":
          return r(je && Buffer.isBuffer(a) ? a.toString("binary") : Tn(a), o);
        case "array":
          return r(kn(a), o);
      }
      throw new Error("Unrecognized type " + o.type);
    }
    function r(a, o) {
      for (
        var s = a.split(`
`),
          c = -1,
          l = -1,
          d = 0,
          u = [];
        d !== s.length;
        ++d
      ) {
        if (s[d].trim() === "BOT") {
          (u[++c] = []), (l = 0);
          continue;
        }
        if (!(c < 0)) {
          var h = s[d].trim().split(","),
            m = h[0],
            p = h[1];
          ++d;
          for (
            var f = s[d] || "";
            (f.match(/["]/g) || []).length & 1 && d < s.length - 1;

          )
            f +=
              `
` + s[++d];
          switch (((f = f.trim()), +m)) {
            case -1:
              if (f === "BOT") {
                (u[++c] = []), (l = 0);
                continue;
              } else if (f !== "EOD")
                throw new Error("Unrecognized DIF special command " + f);
              break;
            case 0:
              f === "TRUE"
                ? (u[c][l] = !0)
                : f === "FALSE"
                ? (u[c][l] = !1)
                : isNaN(Yr(p))
                ? isNaN(fa(p).getDate())
                  ? (u[c][l] = p)
                  : (u[c][l] = Pt(p))
                : (u[c][l] = Yr(p)),
                ++l;
              break;
            case 1:
              (f = f.slice(1, f.length - 1)),
                (f = f.replace(/""/g, '"')),
                Eo && f && f.match(/^=".*"$/) && (f = f.slice(2, -1)),
                (u[c][l++] = f !== "" ? f : null);
              break;
          }
          if (f === "EOD") break;
        }
      }
      return o && o.sheetRows && (u = u.slice(0, o.sheetRows)), u;
    }
    function t(a, o) {
      return xa(e(a, o), o);
    }
    function i(a, o) {
      return Zi(t(a, o), o);
    }
    var n = (function () {
      var a = function (c, l, d, u, h) {
          c.push(l),
            c.push(d + "," + u),
            c.push('"' + h.replace(/"/g, '""') + '"');
        },
        o = function (c, l, d, u) {
          c.push(l + "," + d),
            c.push(l == 1 ? '"' + u.replace(/"/g, '""') + '"' : u);
        };
      return function (c) {
        var l = [],
          d = _t(c["!ref"]),
          u,
          h = Array.isArray(c);
        a(l, "TABLE", 0, 1, "sheetjs"),
          a(l, "VECTORS", 0, d.e.r - d.s.r + 1, ""),
          a(l, "TUPLES", 0, d.e.c - d.s.c + 1, ""),
          a(l, "DATA", 0, 0, "");
        for (var m = d.s.r; m <= d.e.r; ++m) {
          o(l, -1, 0, "BOT");
          for (var p = d.s.c; p <= d.e.c; ++p) {
            var f = Ie({ r: m, c: p });
            if (((u = h ? (c[m] || [])[p] : c[f]), !u)) {
              o(l, 1, 0, "");
              continue;
            }
            switch (u.t) {
              case "n":
                var g = Eo ? u.w : u.v;
                !g && u.v != null && (g = u.v),
                  g == null
                    ? Eo && u.f && !u.F
                      ? o(l, 1, 0, "=" + u.f)
                      : o(l, 1, 0, "")
                    : o(l, 0, g, "V");
                break;
              case "b":
                o(l, 0, u.v ? 1 : 0, u.v ? "TRUE" : "FALSE");
                break;
              case "s":
                o(l, 1, 0, !Eo || isNaN(u.v) ? u.v : '="' + u.v + '"');
                break;
              case "d":
                u.w || (u.w = Pr(u.z || De[14], ur(Pt(u.v)))),
                  Eo ? o(l, 0, u.w, "V") : o(l, 1, 0, u.w);
                break;
              default:
                o(l, 1, 0, "");
            }
          }
        }
        o(l, -1, 0, "EOD");
        var T = `\r
`,
          E = l.join(T);
        return E;
      };
    })();
    return { to_workbook: i, to_sheet: t, from_sheet: n };
  })(),
  uk = (function () {
    function e(u) {
      return u
        .replace(/\\b/g, "\\")
        .replace(/\\c/g, ":")
        .replace(
          /\\n/g,
          `
`
        );
    }
    function r(u) {
      return u.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
    }
    function t(u, h) {
      for (
        var m = u.split(`
`),
          p = -1,
          f = -1,
          g = 0,
          T = [];
        g !== m.length;
        ++g
      ) {
        var E = m[g].trim().split(":");
        if (E[0] === "cell") {
          var x = dr(E[1]);
          if (T.length <= x.r)
            for (p = T.length; p <= x.r; ++p) T[p] || (T[p] = []);
          switch (((p = x.r), (f = x.c), E[2])) {
            case "t":
              T[p][f] = e(E[3]);
              break;
            case "v":
              T[p][f] = +E[3];
              break;
            case "vtf":
              var O = E[E.length - 1];
            case "vtc":
              switch (E[3]) {
                case "nl":
                  T[p][f] = !!+E[4];
                  break;
                default:
                  T[p][f] = +E[4];
                  break;
              }
              E[2] == "vtf" && (T[p][f] = [T[p][f], O]);
          }
        }
      }
      return h && h.sheetRows && (T = T.slice(0, h.sheetRows)), T;
    }
    function i(u, h) {
      return xa(t(u, h), h);
    }
    function n(u, h) {
      return Zi(i(u, h), h);
    }
    var a = [
        "socialcalc:version:1.5",
        "MIME-Version: 1.0",
        "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
      ].join(`
`),
      o =
        [
          "--SocialCalcSpreadsheetControlSave",
          "Content-type: text/plain; charset=UTF-8",
        ].join(`
`) +
        `
`,
      s = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join(`
`),
      c = "--SocialCalcSpreadsheetControlSave--";
    function l(u) {
      if (!u || !u["!ref"]) return "";
      for (
        var h = [],
          m = [],
          p,
          f = "",
          g = va(u["!ref"]),
          T = Array.isArray(u),
          E = g.s.r;
        E <= g.e.r;
        ++E
      )
        for (var x = g.s.c; x <= g.e.c; ++x)
          if (
            ((f = Ie({ r: E, c: x })),
            (p = T ? (u[E] || [])[x] : u[f]),
            !(!p || p.v == null || p.t === "z"))
          ) {
            switch (((m = ["cell", f, "t"]), p.t)) {
              case "s":
              case "str":
                m.push(r(p.v));
                break;
              case "n":
                p.f
                  ? ((m[2] = "vtf"),
                    (m[3] = "n"),
                    (m[4] = p.v),
                    (m[5] = r(p.f)))
                  : ((m[2] = "v"), (m[3] = p.v));
                break;
              case "b":
                (m[2] = "vt" + (p.f ? "f" : "c")),
                  (m[3] = "nl"),
                  (m[4] = p.v ? "1" : "0"),
                  (m[5] = r(p.f || (p.v ? "TRUE" : "FALSE")));
                break;
              case "d":
                var O = ur(Pt(p.v));
                (m[2] = "vtc"),
                  (m[3] = "nd"),
                  (m[4] = "" + O),
                  (m[5] = p.w || Pr(p.z || De[14], O));
                break;
              case "e":
                continue;
            }
            h.push(m.join(":"));
          }
      return (
        h.push(
          "sheet:c:" +
            (g.e.c - g.s.c + 1) +
            ":r:" +
            (g.e.r - g.s.r + 1) +
            ":tvf:1"
        ),
        h.push("valueformat:1:text-wiki"),
        h.join(`
`)
      );
    }
    function d(u) {
      return [a, o, s, o, l(u), c].join(`
`);
    }
    return { to_workbook: n, to_sheet: i, from_sheet: d };
  })(),
  Uo = (function () {
    function e(d, u, h, m, p) {
      p.raw
        ? (u[h][m] = d)
        : d === "" ||
          (d === "TRUE"
            ? (u[h][m] = !0)
            : d === "FALSE"
            ? (u[h][m] = !1)
            : isNaN(Yr(d))
            ? isNaN(fa(d).getDate())
              ? (u[h][m] = d)
              : (u[h][m] = Pt(d))
            : (u[h][m] = Yr(d)));
    }
    function r(d, u) {
      var h = u || {},
        m = [];
      if (!d || d.length === 0) return m;
      for (
        var p = d.split(/[\r\n]/), f = p.length - 1;
        f >= 0 && p[f].length === 0;

      )
        --f;
      for (var g = 10, T = 0, E = 0; E <= f; ++E)
        (T = p[E].indexOf(" ")),
          T == -1 ? (T = p[E].length) : T++,
          (g = Math.max(g, T));
      for (E = 0; E <= f; ++E) {
        m[E] = [];
        var x = 0;
        for (
          e(p[E].slice(0, g).trim(), m, E, x, h), x = 1;
          x <= (p[E].length - g) / 10 + 1;
          ++x
        )
          e(p[E].slice(g + (x - 1) * 10, g + x * 10).trim(), m, E, x, h);
      }
      return h.sheetRows && (m = m.slice(0, h.sheetRows)), m;
    }
    var t = { 44: ",", 9: "	", 59: ";", 124: "|" },
      i = { 44: 3, 9: 2, 59: 1, 124: 0 };
    function n(d) {
      for (var u = {}, h = !1, m = 0, p = 0; m < d.length; ++m)
        (p = d.charCodeAt(m)) == 34
          ? (h = !h)
          : !h && p in t && (u[p] = (u[p] || 0) + 1);
      p = [];
      for (m in u)
        Object.prototype.hasOwnProperty.call(u, m) && p.push([u[m], m]);
      if (!p.length) {
        u = i;
        for (m in u)
          Object.prototype.hasOwnProperty.call(u, m) && p.push([u[m], m]);
      }
      return (
        p.sort(function (f, g) {
          return f[0] - g[0] || i[f[1]] - i[g[1]];
        }),
        t[p.pop()[1]] || 44
      );
    }
    function a(d, u) {
      var h = u || {},
        m = "";
      It != null && h.dense == null && (h.dense = It);
      var p = h.dense ? [] : {},
        f = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
      d.slice(0, 4) == "sep="
        ? d.charCodeAt(5) == 13 && d.charCodeAt(6) == 10
          ? ((m = d.charAt(4)), (d = d.slice(7)))
          : d.charCodeAt(5) == 13 || d.charCodeAt(5) == 10
          ? ((m = d.charAt(4)), (d = d.slice(6)))
          : (m = n(d.slice(0, 1024)))
        : h && h.FS
        ? (m = h.FS)
        : (m = n(d.slice(0, 1024)));
      var g = 0,
        T = 0,
        E = 0,
        x = 0,
        O = 0,
        z = m.charCodeAt(0),
        F = !1,
        C = 0,
        P = d.charCodeAt(0);
      d = d.replace(
        /\r\n/gm,
        `
`
      );
      var M = h.dateNF != null ? wy(h.dateNF) : null;
      function X() {
        var G = d.slice(x, O),
          R = {};
        if (
          (G.charAt(0) == '"' &&
            G.charAt(G.length - 1) == '"' &&
            (G = G.slice(1, -1).replace(/""/g, '"')),
          G.length === 0)
        )
          R.t = "z";
        else if (h.raw) (R.t = "s"), (R.v = G);
        else if (G.trim().length === 0) (R.t = "s"), (R.v = G);
        else if (G.charCodeAt(0) == 61)
          G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34
            ? ((R.t = "s"), (R.v = G.slice(2, -1).replace(/""/g, '"')))
            : ZE(G)
            ? ((R.t = "n"), (R.f = G.slice(1)))
            : ((R.t = "s"), (R.v = G));
        else if (G == "TRUE") (R.t = "b"), (R.v = !0);
        else if (G == "FALSE") (R.t = "b"), (R.v = !1);
        else if (!isNaN((E = Yr(G))))
          (R.t = "n"), h.cellText !== !1 && (R.w = G), (R.v = E);
        else if (!isNaN(fa(G).getDate()) || (M && G.match(M))) {
          R.z = h.dateNF || De[14];
          var re = 0;
          M &&
            G.match(M) &&
            ((G = ky(G, h.dateNF, G.match(M) || [])), (re = 1)),
            h.cellDates
              ? ((R.t = "d"), (R.v = Pt(G, re)))
              : ((R.t = "n"), (R.v = ur(Pt(G, re)))),
            h.cellText !== !1 &&
              (R.w = Pr(R.z, R.v instanceof Date ? ur(R.v) : R.v)),
            h.cellNF || delete R.z;
        } else (R.t = "s"), (R.v = G);
        if (
          (R.t == "z" ||
            (h.dense
              ? (p[g] || (p[g] = []), (p[g][T] = R))
              : (p[Ie({ c: T, r: g })] = R)),
          (x = O + 1),
          (P = d.charCodeAt(x)),
          f.e.c < T && (f.e.c = T),
          f.e.r < g && (f.e.r = g),
          C == z)
        )
          ++T;
        else if (((T = 0), ++g, h.sheetRows && h.sheetRows <= g)) return !0;
      }
      e: for (; O < d.length; ++O)
        switch ((C = d.charCodeAt(O))) {
          case 34:
            P === 34 && (F = !F);
            break;
          case z:
          case 10:
          case 13:
            if (!F && X()) break e;
            break;
          default:
            break;
        }
      return O - x > 0 && X(), (p["!ref"] = ze(f)), p;
    }
    function o(d, u) {
      return !(u && u.PRN) ||
        u.FS ||
        d.slice(0, 4) == "sep=" ||
        d.indexOf("	") >= 0 ||
        d.indexOf(",") >= 0 ||
        d.indexOf(";") >= 0
        ? a(d, u)
        : xa(r(d, u), u);
    }
    function s(d, u) {
      var h = "",
        m = u.type == "string" ? [0, 0, 0, 0] : Pu(d, u);
      switch (u.type) {
        case "base64":
          h = wr(d);
          break;
        case "binary":
          h = d;
          break;
        case "buffer":
          u.codepage == 65001
            ? (h = d.toString("utf8"))
            : u.codepage && typeof Qe < "u"
            ? (h = Qe.utils.decode(u.codepage, d))
            : (h = je && Buffer.isBuffer(d) ? d.toString("binary") : Tn(d));
          break;
        case "array":
          h = kn(d);
          break;
        case "string":
          h = d;
          break;
        default:
          throw new Error("Unrecognized type " + u.type);
      }
      return (
        m[0] == 239 && m[1] == 187 && m[2] == 191
          ? (h = lt(h.slice(3)))
          : u.type != "string" && u.type != "buffer" && u.codepage == 65001
          ? (h = lt(h))
          : u.type == "binary" &&
            typeof Qe < "u" &&
            u.codepage &&
            (h = Qe.utils.decode(u.codepage, Qe.utils.encode(28591, h))),
        h.slice(0, 19) == "socialcalc:version:"
          ? uk.to_sheet(u.type == "string" ? h : lt(h), u)
          : o(h, u)
      );
    }
    function c(d, u) {
      return Zi(s(d, u), u);
    }
    function l(d) {
      for (
        var u = [], h = _t(d["!ref"]), m, p = Array.isArray(d), f = h.s.r;
        f <= h.e.r;
        ++f
      ) {
        for (var g = [], T = h.s.c; T <= h.e.c; ++T) {
          var E = Ie({ r: f, c: T });
          if (((m = p ? (d[f] || [])[T] : d[E]), !m || m.v == null)) {
            g.push("          ");
            continue;
          }
          for (
            var x = (m.w || (Ti(m), m.w) || "").slice(0, 10);
            x.length < 10;

          )
            x += " ";
          g.push(x + (T === 0 ? " " : ""));
        }
        u.push(g.join(""));
      }
      return u.join(`
`);
    }
    return { to_workbook: c, to_sheet: s, from_sheet: l };
  })();
function fk(e, r) {
  var t = r || {},
    i = !!t.WTF;
  t.WTF = !0;
  try {
    var n = lk.to_workbook(e, t);
    return (t.WTF = i), n;
  } catch (a) {
    if (((t.WTF = i), !a.message.match(/SYLK bad record ID/) && i)) throw a;
    return Uo.to_workbook(e, r);
  }
}
var Oo = (function () {
  function e(A, V, D) {
    if (A) {
      jt(A, A.l || 0);
      for (var I = D.Enum || ye; A.l < A.length; ) {
        var Y = A.read_shift(2),
          me = I[Y] || I[65535],
          ce = A.read_shift(2),
          ue = A.l + ce,
          Z = me.f && me.f(A, ce, D);
        if (((A.l = ue), V(Z, me, Y))) return;
      }
    }
  }
  function r(A, V) {
    switch (V.type) {
      case "base64":
        return t(Xr(wr(A)), V);
      case "binary":
        return t(Xr(A), V);
      case "buffer":
      case "array":
        return t(A, V);
    }
    throw "Unsupported type " + V.type;
  }
  function t(A, V) {
    if (!A) return A;
    var D = V || {};
    It != null && D.dense == null && (D.dense = It);
    var I = D.dense ? [] : {},
      Y = "Sheet1",
      me = "",
      ce = 0,
      ue = {},
      Z = [],
      Ve = [],
      S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
      pt = D.sheetRows || 0;
    if (
      A[2] == 0 &&
      (A[3] == 8 || A[3] == 9) &&
      A.length >= 16 &&
      A[14] == 5 &&
      A[15] === 108
    )
      throw new Error("Unsupported Works 3 for Mac file");
    if (A[2] == 2)
      (D.Enum = ye),
        e(
          A,
          function (de, bt, kr) {
            switch (kr) {
              case 0:
                (D.vers = de), de >= 4096 && (D.qpro = !0);
                break;
              case 6:
                S = de;
                break;
              case 204:
                de && (me = de);
                break;
              case 222:
                me = de;
                break;
              case 15:
              case 51:
                D.qpro || (de[1].v = de[1].v.slice(1));
              case 13:
              case 14:
              case 16:
                kr == 14 &&
                  (de[2] & 112) == 112 &&
                  (de[2] & 15) > 1 &&
                  (de[2] & 15) < 15 &&
                  ((de[1].z = D.dateNF || De[14]),
                  D.cellDates && ((de[1].t = "d"), (de[1].v = Pc(de[1].v)))),
                  D.qpro &&
                    de[3] > ce &&
                    ((I["!ref"] = ze(S)),
                    (ue[Y] = I),
                    Z.push(Y),
                    (I = D.dense ? [] : {}),
                    (S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                    (ce = de[3]),
                    (Y = me || "Sheet" + (ce + 1)),
                    (me = ""));
                var Zr = D.dense ? (I[de[0].r] || [])[de[0].c] : I[Ie(de[0])];
                if (Zr) {
                  (Zr.t = de[1].t),
                    (Zr.v = de[1].v),
                    de[1].z != null && (Zr.z = de[1].z),
                    de[1].f != null && (Zr.f = de[1].f);
                  break;
                }
                D.dense
                  ? (I[de[0].r] || (I[de[0].r] = []),
                    (I[de[0].r][de[0].c] = de[1]))
                  : (I[Ie(de[0])] = de[1]);
                break;
              default:
            }
          },
          D
        );
    else if (A[2] == 26 || A[2] == 14)
      (D.Enum = K),
        A[2] == 14 && ((D.qpro = !0), (A.l = 0)),
        e(
          A,
          function (de, bt, kr) {
            switch (kr) {
              case 204:
                Y = de;
                break;
              case 22:
                de[1].v = de[1].v.slice(1);
              case 23:
              case 24:
              case 25:
              case 37:
              case 39:
              case 40:
                if (
                  (de[3] > ce &&
                    ((I["!ref"] = ze(S)),
                    (ue[Y] = I),
                    Z.push(Y),
                    (I = D.dense ? [] : {}),
                    (S = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
                    (ce = de[3]),
                    (Y = "Sheet" + (ce + 1))),
                  pt > 0 && de[0].r >= pt)
                )
                  break;
                D.dense
                  ? (I[de[0].r] || (I[de[0].r] = []),
                    (I[de[0].r][de[0].c] = de[1]))
                  : (I[Ie(de[0])] = de[1]),
                  S.e.c < de[0].c && (S.e.c = de[0].c),
                  S.e.r < de[0].r && (S.e.r = de[0].r);
                break;
              case 27:
                de[14e3] && (Ve[de[14e3][0]] = de[14e3][1]);
                break;
              case 1537:
                (Ve[de[0]] = de[1]), de[0] == ce && (Y = de[1]);
                break;
              default:
                break;
            }
          },
          D
        );
    else throw new Error("Unrecognized LOTUS BOF " + A[2]);
    if (((I["!ref"] = ze(S)), (ue[me || Y] = I), Z.push(me || Y), !Ve.length))
      return { SheetNames: Z, Sheets: ue };
    for (var We = {}, at = [], Pe = 0; Pe < Ve.length; ++Pe)
      ue[Z[Pe]]
        ? (at.push(Ve[Pe] || Z[Pe]), (We[Ve[Pe]] = ue[Ve[Pe]] || ue[Z[Pe]]))
        : (at.push(Ve[Pe]), (We[Ve[Pe]] = { "!ref": "A1" }));
    return { SheetNames: at, Sheets: We };
  }
  function i(A, V) {
    var D = V || {};
    if ((+D.codepage >= 0 && qr(+D.codepage), D.type == "string"))
      throw new Error("Cannot write WK1 to JS string");
    var I = Qd(),
      Y = _t(A["!ref"]),
      me = Array.isArray(A),
      ce = [];
    $r(I, 0, a(1030)), $r(I, 6, c(Y));
    for (var ue = Math.min(Y.e.r, 8191), Z = Y.s.r; Z <= ue; ++Z)
      for (var Ve = Ut(Z), S = Y.s.c; S <= Y.e.c; ++S) {
        Z === Y.s.r && (ce[S] = Mt(S));
        var pt = ce[S] + Ve,
          We = me ? (A[Z] || [])[S] : A[pt];
        if (!(!We || We.t == "z"))
          if (We.t == "n")
            (We.v | 0) == We.v && We.v >= -32768 && We.v <= 32767
              ? $r(I, 13, m(Z, S, We.v))
              : $r(I, 14, f(Z, S, We.v));
          else {
            var at = Ti(We);
            $r(I, 15, u(Z, S, at.slice(0, 239)));
          }
      }
    return $r(I, 1), I.end();
  }
  function n(A, V) {
    var D = V || {};
    if ((+D.codepage >= 0 && qr(+D.codepage), D.type == "string"))
      throw new Error("Cannot write WK3 to JS string");
    var I = Qd();
    $r(I, 0, o(A));
    for (var Y = 0, me = 0; Y < A.SheetNames.length; ++Y)
      (A.Sheets[A.SheetNames[Y]] || {})["!ref"] &&
        $r(I, 27, le(A.SheetNames[Y], me++));
    var ce = 0;
    for (Y = 0; Y < A.SheetNames.length; ++Y) {
      var ue = A.Sheets[A.SheetNames[Y]];
      if (!(!ue || !ue["!ref"])) {
        for (
          var Z = _t(ue["!ref"]),
            Ve = Array.isArray(ue),
            S = [],
            pt = Math.min(Z.e.r, 8191),
            We = Z.s.r;
          We <= pt;
          ++We
        )
          for (var at = Ut(We), Pe = Z.s.c; Pe <= Z.e.c; ++Pe) {
            We === Z.s.r && (S[Pe] = Mt(Pe));
            var de = S[Pe] + at,
              bt = Ve ? (ue[We] || [])[Pe] : ue[de];
            if (!(!bt || bt.t == "z"))
              if (bt.t == "n") $r(I, 23, X(We, Pe, ce, bt.v));
              else {
                var kr = Ti(bt);
                $r(I, 22, C(We, Pe, ce, kr.slice(0, 239)));
              }
          }
        ++ce;
      }
    }
    return $r(I, 1), I.end();
  }
  function a(A) {
    var V = At(2);
    return V.write_shift(2, A), V;
  }
  function o(A) {
    var V = At(26);
    V.write_shift(2, 4096), V.write_shift(2, 4), V.write_shift(4, 0);
    for (var D = 0, I = 0, Y = 0, me = 0; me < A.SheetNames.length; ++me) {
      var ce = A.SheetNames[me],
        ue = A.Sheets[ce];
      if (!(!ue || !ue["!ref"])) {
        ++Y;
        var Z = va(ue["!ref"]);
        D < Z.e.r && (D = Z.e.r), I < Z.e.c && (I = Z.e.c);
      }
    }
    return (
      D > 8191 && (D = 8191),
      V.write_shift(2, D),
      V.write_shift(1, Y),
      V.write_shift(1, I),
      V.write_shift(2, 0),
      V.write_shift(2, 0),
      V.write_shift(1, 1),
      V.write_shift(1, 2),
      V.write_shift(4, 0),
      V.write_shift(4, 0),
      V
    );
  }
  function s(A, V, D) {
    var I = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return V == 8 && D.qpro
      ? ((I.s.c = A.read_shift(1)),
        A.l++,
        (I.s.r = A.read_shift(2)),
        (I.e.c = A.read_shift(1)),
        A.l++,
        (I.e.r = A.read_shift(2)),
        I)
      : ((I.s.c = A.read_shift(2)),
        (I.s.r = A.read_shift(2)),
        V == 12 && D.qpro && (A.l += 2),
        (I.e.c = A.read_shift(2)),
        (I.e.r = A.read_shift(2)),
        V == 12 && D.qpro && (A.l += 2),
        I.s.c == 65535 && (I.s.c = I.e.c = I.s.r = I.e.r = 0),
        I);
  }
  function c(A) {
    var V = At(8);
    return (
      V.write_shift(2, A.s.c),
      V.write_shift(2, A.s.r),
      V.write_shift(2, A.e.c),
      V.write_shift(2, A.e.r),
      V
    );
  }
  function l(A, V, D) {
    var I = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return (
      D.qpro && D.vers != 20768
        ? ((I[0].c = A.read_shift(1)),
          (I[3] = A.read_shift(1)),
          (I[0].r = A.read_shift(2)),
          (A.l += 2))
        : ((I[2] = A.read_shift(1)),
          (I[0].c = A.read_shift(2)),
          (I[0].r = A.read_shift(2))),
      I
    );
  }
  function d(A, V, D) {
    var I = A.l + V,
      Y = l(A, V, D);
    if (((Y[1].t = "s"), D.vers == 20768)) {
      A.l++;
      var me = A.read_shift(1);
      return (Y[1].v = A.read_shift(me, "utf8")), Y;
    }
    return D.qpro && A.l++, (Y[1].v = A.read_shift(I - A.l, "cstr")), Y;
  }
  function u(A, V, D) {
    var I = At(7 + D.length);
    I.write_shift(1, 255),
      I.write_shift(2, V),
      I.write_shift(2, A),
      I.write_shift(1, 39);
    for (var Y = 0; Y < I.length; ++Y) {
      var me = D.charCodeAt(Y);
      I.write_shift(1, me >= 128 ? 95 : me);
    }
    return I.write_shift(1, 0), I;
  }
  function h(A, V, D) {
    var I = l(A, V, D);
    return (I[1].v = A.read_shift(2, "i")), I;
  }
  function m(A, V, D) {
    var I = At(7);
    return (
      I.write_shift(1, 255),
      I.write_shift(2, V),
      I.write_shift(2, A),
      I.write_shift(2, D, "i"),
      I
    );
  }
  function p(A, V, D) {
    var I = l(A, V, D);
    return (I[1].v = A.read_shift(8, "f")), I;
  }
  function f(A, V, D) {
    var I = At(13);
    return (
      I.write_shift(1, 255),
      I.write_shift(2, V),
      I.write_shift(2, A),
      I.write_shift(8, D, "f"),
      I
    );
  }
  function g(A, V, D) {
    var I = A.l + V,
      Y = l(A, V, D);
    if (((Y[1].v = A.read_shift(8, "f")), D.qpro)) A.l = I;
    else {
      var me = A.read_shift(2);
      O(A.slice(A.l, A.l + me), Y), (A.l += me);
    }
    return Y;
  }
  function T(A, V, D) {
    var I = V & 32768;
    return (
      (V &= -32769),
      (V = (I ? A : 0) + (V >= 8192 ? V - 16384 : V)),
      (I ? "" : "$") + (D ? Mt(V) : Ut(V))
    );
  }
  var E = {
      51: ["FALSE", 0],
      52: ["TRUE", 0],
      70: ["LEN", 1],
      80: ["SUM", 69],
      81: ["AVERAGEA", 69],
      82: ["COUNTA", 69],
      83: ["MINA", 69],
      84: ["MAXA", 69],
      111: ["T", 1],
    },
    x = [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "+",
      "-",
      "*",
      "/",
      "^",
      "=",
      "<>",
      "<=",
      ">=",
      "<",
      ">",
      "",
      "",
      "",
      "",
      "&",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
  function O(A, V) {
    jt(A, 0);
    for (
      var D = [], I = 0, Y = "", me = "", ce = "", ue = "";
      A.l < A.length;

    ) {
      var Z = A[A.l++];
      switch (Z) {
        case 0:
          D.push(A.read_shift(8, "f"));
          break;
        case 1:
          (me = T(V[0].c, A.read_shift(2), !0)),
            (Y = T(V[0].r, A.read_shift(2), !1)),
            D.push(me + Y);
          break;
        case 2:
          {
            var Ve = T(V[0].c, A.read_shift(2), !0),
              S = T(V[0].r, A.read_shift(2), !1);
            (me = T(V[0].c, A.read_shift(2), !0)),
              (Y = T(V[0].r, A.read_shift(2), !1)),
              D.push(Ve + S + ":" + me + Y);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          D.push("(" + D.pop() + ")");
          break;
        case 5:
          D.push(A.read_shift(2));
          break;
        case 6:
          {
            for (var pt = ""; (Z = A[A.l++]); ) pt += String.fromCharCode(Z);
            D.push('"' + pt.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          D.push("-" + D.pop());
          break;
        case 23:
          D.push("+" + D.pop());
          break;
        case 22:
          D.push("NOT(" + D.pop() + ")");
          break;
        case 20:
        case 21:
          (ue = D.pop()),
            (ce = D.pop()),
            D.push(["AND", "OR"][Z - 20] + "(" + ce + "," + ue + ")");
          break;
        default:
          if (Z < 32 && x[Z])
            (ue = D.pop()), (ce = D.pop()), D.push(ce + x[Z] + ue);
          else if (E[Z]) {
            if (((I = E[Z][1]), I == 69 && (I = A[A.l++]), I > D.length)) {
              console.error(
                "WK1 bad formula parse 0x" +
                  Z.toString(16) +
                  ":|" +
                  D.join("|") +
                  "|"
              );
              return;
            }
            var We = D.slice(-I);
            (D.length -= I), D.push(E[Z][0] + "(" + We.join(",") + ")");
          } else
            return Z <= 7
              ? console.error("WK1 invalid opcode " + Z.toString(16))
              : Z <= 24
              ? console.error("WK1 unsupported op " + Z.toString(16))
              : Z <= 30
              ? console.error("WK1 invalid opcode " + Z.toString(16))
              : Z <= 115
              ? console.error(
                  "WK1 unsupported function opcode " + Z.toString(16)
                )
              : console.error("WK1 unrecognized opcode " + Z.toString(16));
      }
    }
    D.length == 1
      ? (V[1].f = "" + D[0])
      : console.error("WK1 bad formula parse |" + D.join("|") + "|");
  }
  function z(A) {
    var V = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return (
      (V[0].r = A.read_shift(2)), (V[3] = A[A.l++]), (V[0].c = A[A.l++]), V
    );
  }
  function F(A, V) {
    var D = z(A, V);
    return (D[1].t = "s"), (D[1].v = A.read_shift(V - 4, "cstr")), D;
  }
  function C(A, V, D, I) {
    var Y = At(6 + I.length);
    Y.write_shift(2, A),
      Y.write_shift(1, D),
      Y.write_shift(1, V),
      Y.write_shift(1, 39);
    for (var me = 0; me < I.length; ++me) {
      var ce = I.charCodeAt(me);
      Y.write_shift(1, ce >= 128 ? 95 : ce);
    }
    return Y.write_shift(1, 0), Y;
  }
  function P(A, V) {
    var D = z(A, V);
    D[1].v = A.read_shift(2);
    var I = D[1].v >> 1;
    if (D[1].v & 1)
      switch (I & 7) {
        case 0:
          I = (I >> 3) * 5e3;
          break;
        case 1:
          I = (I >> 3) * 500;
          break;
        case 2:
          I = (I >> 3) / 20;
          break;
        case 3:
          I = (I >> 3) / 200;
          break;
        case 4:
          I = (I >> 3) / 2e3;
          break;
        case 5:
          I = (I >> 3) / 2e4;
          break;
        case 6:
          I = (I >> 3) / 16;
          break;
        case 7:
          I = (I >> 3) / 64;
          break;
      }
    return (D[1].v = I), D;
  }
  function M(A, V) {
    var D = z(A, V),
      I = A.read_shift(4),
      Y = A.read_shift(4),
      me = A.read_shift(2);
    if (me == 65535)
      return (
        I === 0 && Y === 3221225472
          ? ((D[1].t = "e"), (D[1].v = 15))
          : I === 0 && Y === 3489660928
          ? ((D[1].t = "e"), (D[1].v = 42))
          : (D[1].v = 0),
        D
      );
    var ce = me & 32768;
    return (
      (me = (me & 32767) - 16446),
      (D[1].v =
        (1 - ce * 2) * (Y * Math.pow(2, me + 32) + I * Math.pow(2, me))),
      D
    );
  }
  function X(A, V, D, I) {
    var Y = At(14);
    if ((Y.write_shift(2, A), Y.write_shift(1, D), Y.write_shift(1, V), I == 0))
      return (
        Y.write_shift(4, 0), Y.write_shift(4, 0), Y.write_shift(2, 65535), Y
      );
    var me = 0,
      ce = 0,
      ue = 0,
      Z = 0;
    return (
      I < 0 && ((me = 1), (I = -I)),
      (ce = Math.log2(I) | 0),
      (I /= Math.pow(2, ce - 31)),
      (Z = I >>> 0),
      Z & 2147483648 || ((I /= 2), ++ce, (Z = I >>> 0)),
      (I -= Z),
      (Z |= 2147483648),
      (Z >>>= 0),
      (I *= Math.pow(2, 32)),
      (ue = I >>> 0),
      Y.write_shift(4, ue),
      Y.write_shift(4, Z),
      (ce += 16383 + (me ? 32768 : 0)),
      Y.write_shift(2, ce),
      Y
    );
  }
  function G(A, V) {
    var D = M(A, 14);
    return (A.l += V - 14), D;
  }
  function R(A, V) {
    var D = z(A, V),
      I = A.read_shift(4);
    return (D[1].v = I >> 6), D;
  }
  function re(A, V) {
    var D = z(A, V),
      I = A.read_shift(8, "f");
    return (D[1].v = I), D;
  }
  function be(A, V) {
    var D = re(A, 14);
    return (A.l += V - 10), D;
  }
  function oe(A, V) {
    return A[A.l + V - 1] == 0 ? A.read_shift(V, "cstr") : "";
  }
  function Ce(A, V) {
    var D = A[A.l++];
    D > V - 1 && (D = V - 1);
    for (var I = ""; I.length < D; ) I += String.fromCharCode(A[A.l++]);
    return I;
  }
  function _e(A, V, D) {
    if (!(!D.qpro || V < 21)) {
      var I = A.read_shift(1);
      (A.l += 17), (A.l += 1), (A.l += 2);
      var Y = A.read_shift(V - 21, "cstr");
      return [I, Y];
    }
  }
  function He(A, V) {
    for (var D = {}, I = A.l + V; A.l < I; ) {
      var Y = A.read_shift(2);
      if (Y == 14e3) {
        for (D[Y] = [0, ""], D[Y][0] = A.read_shift(2); A[A.l]; )
          (D[Y][1] += String.fromCharCode(A[A.l])), A.l++;
        A.l++;
      }
    }
    return D;
  }
  function le(A, V) {
    var D = At(5 + A.length);
    D.write_shift(2, 14e3), D.write_shift(2, V);
    for (var I = 0; I < A.length; ++I) {
      var Y = A.charCodeAt(I);
      D[D.l++] = Y > 127 ? 95 : Y;
    }
    return (D[D.l++] = 0), D;
  }
  var ye = {
      0: { n: "BOF", f: St },
      1: { n: "EOF" },
      2: { n: "CALCMODE" },
      3: { n: "CALCORDER" },
      4: { n: "SPLIT" },
      5: { n: "SYNC" },
      6: { n: "RANGE", f: s },
      7: { n: "WINDOW1" },
      8: { n: "COLW1" },
      9: { n: "WINTWO" },
      10: { n: "COLW2" },
      11: { n: "NAME" },
      12: { n: "BLANK" },
      13: { n: "INTEGER", f: h },
      14: { n: "NUMBER", f: p },
      15: { n: "LABEL", f: d },
      16: { n: "FORMULA", f: g },
      24: { n: "TABLE" },
      25: { n: "ORANGE" },
      26: { n: "PRANGE" },
      27: { n: "SRANGE" },
      28: { n: "FRANGE" },
      29: { n: "KRANGE1" },
      32: { n: "HRANGE" },
      35: { n: "KRANGE2" },
      36: { n: "PROTEC" },
      37: { n: "FOOTER" },
      38: { n: "HEADER" },
      39: { n: "SETUP" },
      40: { n: "MARGINS" },
      41: { n: "LABELFMT" },
      42: { n: "TITLES" },
      43: { n: "SHEETJS" },
      45: { n: "GRAPH" },
      46: { n: "NGRAPH" },
      47: { n: "CALCCOUNT" },
      48: { n: "UNFORMATTED" },
      49: { n: "CURSORW12" },
      50: { n: "WINDOW" },
      51: { n: "STRING", f: d },
      55: { n: "PASSWORD" },
      56: { n: "LOCKED" },
      60: { n: "QUERY" },
      61: { n: "QUERYNAME" },
      62: { n: "PRINT" },
      63: { n: "PRINTNAME" },
      64: { n: "GRAPH2" },
      65: { n: "GRAPHNAME" },
      66: { n: "ZOOM" },
      67: { n: "SYMSPLIT" },
      68: { n: "NSROWS" },
      69: { n: "NSCOLS" },
      70: { n: "RULER" },
      71: { n: "NNAME" },
      72: { n: "ACOMM" },
      73: { n: "AMACRO" },
      74: { n: "PARSE" },
      102: { n: "PRANGES??" },
      103: { n: "RRANGES??" },
      104: { n: "FNAME??" },
      105: { n: "MRANGES??" },
      204: { n: "SHEETNAMECS", f: oe },
      222: { n: "SHEETNAMELP", f: Ce },
      65535: { n: "" },
    },
    K = {
      0: { n: "BOF" },
      1: { n: "EOF" },
      2: { n: "PASSWORD" },
      3: { n: "CALCSET" },
      4: { n: "WINDOWSET" },
      5: { n: "SHEETCELLPTR" },
      6: { n: "SHEETLAYOUT" },
      7: { n: "COLUMNWIDTH" },
      8: { n: "HIDDENCOLUMN" },
      9: { n: "USERRANGE" },
      10: { n: "SYSTEMRANGE" },
      11: { n: "ZEROFORCE" },
      12: { n: "SORTKEYDIR" },
      13: { n: "FILESEAL" },
      14: { n: "DATAFILLNUMS" },
      15: { n: "PRINTMAIN" },
      16: { n: "PRINTSTRING" },
      17: { n: "GRAPHMAIN" },
      18: { n: "GRAPHSTRING" },
      19: { n: "??" },
      20: { n: "ERRCELL" },
      21: { n: "NACELL" },
      22: { n: "LABEL16", f: F },
      23: { n: "NUMBER17", f: M },
      24: { n: "NUMBER18", f: P },
      25: { n: "FORMULA19", f: G },
      26: { n: "FORMULA1A" },
      27: { n: "XFORMAT", f: He },
      28: { n: "DTLABELMISC" },
      29: { n: "DTLABELCELL" },
      30: { n: "GRAPHWINDOW" },
      31: { n: "CPA" },
      32: { n: "LPLAUTO" },
      33: { n: "QUERY" },
      34: { n: "HIDDENSHEET" },
      35: { n: "??" },
      37: { n: "NUMBER25", f: R },
      38: { n: "??" },
      39: { n: "NUMBER27", f: re },
      40: { n: "FORMULA28", f: be },
      142: { n: "??" },
      147: { n: "??" },
      150: { n: "??" },
      151: { n: "??" },
      152: { n: "??" },
      153: { n: "??" },
      154: { n: "??" },
      155: { n: "??" },
      156: { n: "??" },
      163: { n: "??" },
      174: { n: "??" },
      175: { n: "??" },
      176: { n: "??" },
      177: { n: "??" },
      184: { n: "??" },
      185: { n: "??" },
      186: { n: "??" },
      187: { n: "??" },
      188: { n: "??" },
      195: { n: "??" },
      201: { n: "??" },
      204: { n: "SHEETNAMECS", f: oe },
      205: { n: "??" },
      206: { n: "??" },
      207: { n: "??" },
      208: { n: "??" },
      256: { n: "??" },
      259: { n: "??" },
      260: { n: "??" },
      261: { n: "??" },
      262: { n: "??" },
      263: { n: "??" },
      265: { n: "??" },
      266: { n: "??" },
      267: { n: "??" },
      268: { n: "??" },
      270: { n: "??" },
      271: { n: "??" },
      384: { n: "??" },
      389: { n: "??" },
      390: { n: "??" },
      393: { n: "??" },
      396: { n: "??" },
      512: { n: "??" },
      514: { n: "??" },
      513: { n: "??" },
      516: { n: "??" },
      517: { n: "??" },
      640: { n: "??" },
      641: { n: "??" },
      642: { n: "??" },
      643: { n: "??" },
      644: { n: "??" },
      645: { n: "??" },
      646: { n: "??" },
      647: { n: "??" },
      648: { n: "??" },
      658: { n: "??" },
      659: { n: "??" },
      660: { n: "??" },
      661: { n: "??" },
      662: { n: "??" },
      665: { n: "??" },
      666: { n: "??" },
      768: { n: "??" },
      772: { n: "??" },
      1537: { n: "SHEETINFOQP", f: _e },
      1600: { n: "??" },
      1602: { n: "??" },
      1793: { n: "??" },
      1794: { n: "??" },
      1795: { n: "??" },
      1796: { n: "??" },
      1920: { n: "??" },
      2048: { n: "??" },
      2049: { n: "??" },
      2052: { n: "??" },
      2688: { n: "??" },
      10998: { n: "??" },
      12849: { n: "??" },
      28233: { n: "??" },
      28484: { n: "??" },
      65535: { n: "" },
    };
  return { sheet_to_wk1: i, book_to_wk3: n, to_workbook: r };
})();
function hk(e) {
  var r = {},
    t = e.match(rr),
    i = 0,
    n = !1;
  if (t)
    for (; i != t.length; ++i) {
      var a = Te(t[i]);
      switch (a[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!a.val) break;
        case "<shadow>":
        case "<shadow/>":
          r.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (a.val == "1") break;
          r.cp = cu[parseInt(a.val, 10)];
          break;
        case "<outline":
          if (!a.val) break;
        case "<outline>":
        case "<outline/>":
          r.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          r.name = a.val;
          break;
        case "<sz":
          r.sz = a.val;
          break;
        case "<strike":
          if (!a.val) break;
        case "<strike>":
        case "<strike/>":
          r.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!a.val) break;
          switch (a.val) {
            case "double":
              r.uval = "double";
              break;
            case "singleAccounting":
              r.uval = "single-accounting";
              break;
            case "doubleAccounting":
              r.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          r.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (a.val == "0") break;
        case "<b>":
        case "<b/>":
          r.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (a.val == "0") break;
        case "<i>":
        case "<i/>":
          r.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          a.rgb && (r.color = a.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          r.family = a.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          r.valign = a.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        default:
          if (a[0].charCodeAt(1) !== 47 && !n)
            throw new Error("Unrecognized rich format " + a[0]);
      }
    }
  return r;
}
var mk = (function () {
    var e = jo("t"),
      r = jo("rPr");
    function t(a) {
      var o = a.match(e);
      if (!o) return { t: "s", v: "" };
      var s = { t: "s", v: $e(o[1]) },
        c = a.match(r);
      return c && (s.s = hk(c[1])), s;
    }
    var i = /<(?:\w+:)?r>/g,
      n = /<\/(?:\w+:)?r>/;
    return function (o) {
      return o
        .replace(i, "")
        .split(n)
        .map(t)
        .filter(function (s) {
          return s.v;
        });
    };
  })(),
  pk = (function () {
    var r = /(\r\n|\n)/g;
    function t(n, a, o) {
      var s = [];
      n.u && s.push("text-decoration: underline;"),
        n.uval && s.push("text-underline-style:" + n.uval + ";"),
        n.sz && s.push("font-size:" + n.sz + "pt;"),
        n.outline && s.push("text-effect: outline;"),
        n.shadow && s.push("text-shadow: auto;"),
        a.push('<span style="' + s.join("") + '">'),
        n.b && (a.push("<b>"), o.push("</b>")),
        n.i && (a.push("<i>"), o.push("</i>")),
        n.strike && (a.push("<s>"), o.push("</s>"));
      var c = n.valign || "";
      return (
        c == "superscript" || c == "super"
          ? (c = "sup")
          : c == "subscript" && (c = "sub"),
        c != "" && (a.push("<" + c + ">"), o.push("</" + c + ">")),
        o.push("</span>"),
        n
      );
    }
    function i(n) {
      var a = [[], n.v, []];
      return n.v
        ? (n.s && t(n.s, a[0], a[2]),
          a[0].join("") + a[1].replace(r, "<br/>") + a[2].join(""))
        : "";
    }
    return function (a) {
      return a.map(i).join("");
    };
  })(),
  gk = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
  vk = /<(?:\w+:)?r>/,
  xk = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function Iu(e, r) {
  var t = r ? r.cellHTML : !0,
    i = {};
  return e
    ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/)
        ? ((i.t = $e(
            lt(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")
          )),
          (i.r = lt(e)),
          t && (i.h = pu(i.t)))
        : e.match(vk) &&
          ((i.r = lt(e)),
          (i.t = $e(
            lt((e.replace(xk, "").match(gk) || []).join("").replace(rr, ""))
          )),
          t && (i.h = pk(mk(i.r)))),
      i)
    : { t: "" };
}
var _k = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,
  bk = /<(?:\w+:)?(?:si|sstItem)>/g,
  yk = /<\/(?:\w+:)?(?:si|sstItem)>/;
function wk(e, r) {
  var t = [],
    i = "";
  if (!e) return t;
  var n = e.match(_k);
  if (n) {
    i = n[2].replace(bk, "").split(yk);
    for (var a = 0; a != i.length; ++a) {
      var o = Iu(i[a].trim(), r);
      o != null && (t[t.length] = o);
    }
    (n = Te(n[1])), (t.Count = n.count), (t.Unique = n.uniqueCount);
  }
  return t;
}
function kk(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function Ek(e, r) {
  var t = [],
    i = !1;
  return (
    Si(e, function (a, o, s) {
      switch (s) {
        case 159:
          (t.Count = a[0]), (t.Unique = a[1]);
          break;
        case 19:
          t.push(a);
          break;
        case 160:
          return !0;
        case 35:
          i = !0;
          break;
        case 36:
          i = !1;
          break;
        default:
          if ((o.T, !i || r.WTF))
            throw new Error("Unexpected record 0x" + s.toString(16));
      }
    }),
    t
  );
}
function _g(e) {
  if (typeof Qe < "u") return Qe.utils.encode(ua, e);
  for (var r = [], t = e.split(""), i = 0; i < t.length; ++i)
    r[i] = t[i].charCodeAt(0);
  return r;
}
function Ci(e, r) {
  var t = {};
  return (
    (t.Major = e.read_shift(2)),
    (t.Minor = e.read_shift(2)),
    r >= 4 && (e.l += r - 4),
    t
  );
}
function Ck(e) {
  var r = {};
  return (
    (r.id = e.read_shift(0, "lpp4")),
    (r.R = Ci(e, 4)),
    (r.U = Ci(e, 4)),
    (r.W = Ci(e, 4)),
    r
  );
}
function Tk(e) {
  for (
    var r = e.read_shift(4),
      t = e.l + r - 4,
      i = {},
      n = e.read_shift(4),
      a = [];
    n-- > 0;

  )
    a.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (((i.name = e.read_shift(0, "lpp4")), (i.comps = a), e.l != t))
    throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
  return i;
}
function Sk(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(Tk(e));
  return r;
}
function Ak(e) {
  var r = [];
  e.l += 4;
  for (var t = e.read_shift(4); t-- > 0; ) r.push(e.read_shift(0, "lpp4"));
  return r;
}
function Ik(e) {
  var r = {};
  return (
    e.read_shift(4),
    (e.l += 4),
    (r.id = e.read_shift(0, "lpp4")),
    (r.name = e.read_shift(0, "lpp4")),
    (r.R = Ci(e, 4)),
    (r.U = Ci(e, 4)),
    (r.W = Ci(e, 4)),
    r
  );
}
function Fk(e) {
  var r = Ik(e);
  if (
    ((r.ename = e.read_shift(0, "8lpp4")),
    (r.blksz = e.read_shift(4)),
    (r.cmode = e.read_shift(4)),
    e.read_shift(4) != 4)
  )
    throw new Error("Bad !Primary record");
  return r;
}
function bg(e, r) {
  var t = e.l + r,
    i = {};
  (i.Flags = e.read_shift(4) & 63), (e.l += 4), (i.AlgID = e.read_shift(4));
  var n = !1;
  switch (i.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      n = i.Flags == 36;
      break;
    case 26625:
      n = i.Flags == 4;
      break;
    case 0:
      n = i.Flags == 16 || i.Flags == 4 || i.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + i.AlgID;
  }
  if (!n) throw new Error("Encryption Flags/AlgID mismatch");
  return (
    (i.AlgIDHash = e.read_shift(4)),
    (i.KeySize = e.read_shift(4)),
    (i.ProviderType = e.read_shift(4)),
    (e.l += 8),
    (i.CSPName = e.read_shift((t - e.l) >> 1, "utf16le")),
    (e.l = t),
    i
  );
}
function yg(e, r) {
  var t = {},
    i = e.l + r;
  return (
    (e.l += 4),
    (t.Salt = e.slice(e.l, e.l + 16)),
    (e.l += 16),
    (t.Verifier = e.slice(e.l, e.l + 16)),
    (e.l += 16),
    e.read_shift(4),
    (t.VerifierHash = e.slice(e.l, i)),
    (e.l = i),
    t
  );
}
function Dk(e) {
  var r = Ci(e);
  switch (r.Minor) {
    case 2:
      return [r.Minor, Mk(e, r)];
    case 3:
      return [r.Minor, Rk(e, r)];
    case 4:
      return [r.Minor, Ok(e, r)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
}
function Mk(e) {
  var r = e.read_shift(4);
  if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
  var t = e.read_shift(4),
    i = bg(e, t),
    n = yg(e, e.length - e.l);
  return { t: "Std", h: i, v: n };
}
function Rk() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function Ok(e) {
  var r = [
    "saltSize",
    "blockSize",
    "keyBits",
    "hashSize",
    "cipherAlgorithm",
    "cipherChaining",
    "hashAlgorithm",
    "saltValue",
  ];
  e.l += 4;
  var t = e.read_shift(e.length - e.l, "utf8"),
    i = {};
  return (
    t.replace(rr, function (a) {
      var o = Te(a);
      switch (li(o[0])) {
        case "<?xml":
          break;
        case "<encryption":
        case "</encryption>":
          break;
        case "<keyData":
          r.forEach(function (s) {
            i[s] = o[s];
          });
          break;
        case "<dataIntegrity":
          (i.encryptedHmacKey = o.encryptedHmacKey),
            (i.encryptedHmacValue = o.encryptedHmacValue);
          break;
        case "<keyEncryptors>":
        case "<keyEncryptors":
          i.encs = [];
          break;
        case "</keyEncryptors>":
          break;
        case "<keyEncryptor":
          i.uri = o.uri;
          break;
        case "</keyEncryptor>":
          break;
        case "<encryptedKey":
          i.encs.push(o);
          break;
        default:
          throw o[0];
      }
    }),
    i
  );
}
function Nk(e, r) {
  var t = {},
    i = (t.EncryptionVersionInfo = Ci(e, 4));
  if (((r -= 4), i.Minor != 2))
    throw new Error("unrecognized minor version code: " + i.Minor);
  if (i.Major > 4 || i.Major < 2)
    throw new Error("unrecognized major version code: " + i.Major);
  (t.Flags = e.read_shift(4)), (r -= 4);
  var n = e.read_shift(4);
  return (
    (r -= 4),
    (t.EncryptionHeader = bg(e, n)),
    (r -= n),
    (t.EncryptionVerifier = yg(e, r)),
    t
  );
}
function Pk(e) {
  var r = {},
    t = (r.EncryptionVersionInfo = Ci(e, 4));
  if (t.Major != 1 || t.Minor != 1)
    throw "unrecognized version code " + t.Major + " : " + t.Minor;
  return (
    (r.Salt = e.read_shift(16)),
    (r.EncryptedVerifier = e.read_shift(16)),
    (r.EncryptedVerifierHash = e.read_shift(16)),
    r
  );
}
function Lk(e) {
  var r = 0,
    t,
    i = _g(e),
    n = i.length + 1,
    a,
    o,
    s,
    c,
    l;
  for (t = Ki(n), t[0] = i.length, a = 1; a != n; ++a) t[a] = i[a - 1];
  for (a = n - 1; a >= 0; --a)
    (o = t[a]),
      (s = r & 16384 ? 1 : 0),
      (c = (r << 1) & 32767),
      (l = s | c),
      (r = l ^ o);
  return r ^ 52811;
}
var wg = (function () {
    var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0],
      r = [
        57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287,
        34041, 10252, 43370, 20163,
      ],
      t = [
        44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933,
        60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624,
        23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807,
        41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605,
        29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774,
        3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203,
        28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601,
        17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079,
        14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105,
        26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657,
        9314, 18628,
      ],
      i = function (o) {
        return ((o / 2) | (o * 128)) & 255;
      },
      n = function (o, s) {
        return i(o ^ s);
      },
      a = function (o) {
        for (var s = r[o.length - 1], c = 104, l = o.length - 1; l >= 0; --l)
          for (var d = o[l], u = 0; u != 7; ++u)
            d & 64 && (s ^= t[c]), (d *= 2), --c;
        return s;
      };
    return function (o) {
      for (
        var s = _g(o), c = a(s), l = s.length, d = Ki(16), u = 0;
        u != 16;
        ++u
      )
        d[u] = 0;
      var h, m, p;
      for (
        (l & 1) === 1 &&
        ((h = c >> 8),
        (d[l] = n(e[0], h)),
        --l,
        (h = c & 255),
        (m = s[s.length - 1]),
        (d[l] = n(m, h)));
        l > 0;

      )
        --l,
          (h = c >> 8),
          (d[l] = n(s[l], h)),
          --l,
          (h = c & 255),
          (d[l] = n(s[l], h));
      for (l = 15, p = 15 - s.length; p > 0; )
        (h = c >> 8),
          (d[l] = n(e[p], h)),
          --l,
          --p,
          (h = c & 255),
          (d[l] = n(s[l], h)),
          --l,
          --p;
      return d;
    };
  })(),
  Bk = function (e, r, t, i, n) {
    n || (n = r), i || (i = wg(e));
    var a, o;
    for (a = 0; a != r.length; ++a)
      (o = r[a]),
        (o ^= i[t]),
        (o = ((o >> 5) | (o << 3)) & 255),
        (n[a] = o),
        ++t;
    return [n, t, i];
  },
  jk = function (e) {
    var r = 0,
      t = wg(e);
    return function (i) {
      var n = Bk("", i, r, t);
      return (r = n[1]), n[0];
    };
  };
function Vk(e, r, t, i) {
  var n = { key: St(e), verificationBytes: St(e) };
  return (
    t.password && (n.verifier = Lk(t.password)),
    (i.valid = n.verificationBytes === n.verifier),
    i.valid && (i.insitu = jk(t.password)),
    n
  );
}
function Uk(e, r, t) {
  var i = t || {};
  return (
    (i.Info = e.read_shift(2)),
    (e.l -= 2),
    i.Info === 1 ? (i.Data = Pk(e, r)) : (i.Data = Nk(e, r)),
    i
  );
}
function zk(e, r, t) {
  var i = { Type: t.biff >= 8 ? e.read_shift(2) : 0 };
  return i.Type ? Uk(e, r - 2, i) : Vk(e, t.biff >= 8 ? r : r - 2, t, i), i;
}
var Hk = (function () {
  function e(n, a) {
    switch (a.type) {
      case "base64":
        return r(wr(n), a);
      case "binary":
        return r(n, a);
      case "buffer":
        return r(je && Buffer.isBuffer(n) ? n.toString("binary") : Tn(n), a);
      case "array":
        return r(kn(n), a);
    }
    throw new Error("Unrecognized type " + a.type);
  }
  function r(n, a) {
    var o = a || {},
      s = o.dense ? [] : {},
      c = n.match(/\\trowd.*?\\row\b/g);
    if (!c.length) throw new Error("RTF missing table");
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: c.length - 1 } };
    return (
      c.forEach(function (d, u) {
        Array.isArray(s) && (s[u] = []);
        for (var h = /\\\w+\b/g, m = 0, p, f = -1; (p = h.exec(d)); ) {
          switch (p[0]) {
            case "\\cell":
              var g = d.slice(m, h.lastIndex - p[0].length);
              if ((g[0] == " " && (g = g.slice(1)), ++f, g.length)) {
                var T = { v: g, t: "s" };
                Array.isArray(s) ? (s[u][f] = T) : (s[Ie({ r: u, c: f })] = T);
              }
              break;
          }
          m = h.lastIndex;
        }
        f > l.e.c && (l.e.c = f);
      }),
      (s["!ref"] = ze(l)),
      s
    );
  }
  function t(n, a) {
    return Zi(e(n, a), a);
  }
  function i(n) {
    for (
      var a = ["{\\rtf1\\ansi"],
        o = _t(n["!ref"]),
        s,
        c = Array.isArray(n),
        l = o.s.r;
      l <= o.e.r;
      ++l
    ) {
      a.push("\\trowd\\trautofit1");
      for (var d = o.s.c; d <= o.e.c; ++d) a.push("\\cellx" + (d + 1));
      for (a.push("\\pard\\intbl"), d = o.s.c; d <= o.e.c; ++d) {
        var u = Ie({ r: l, c: d });
        (s = c ? (n[l] || [])[d] : n[u]),
          !(!s || (s.v == null && (!s.f || s.F))) &&
            (a.push(" " + (s.w || (Ti(s), s.w))), a.push("\\cell"));
      }
      a.push("\\pard\\intbl\\row");
    }
    return a.join("") + "}";
  }
  return { to_workbook: t, to_sheet: e, from_sheet: i };
})();
function Wk(e) {
  var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [
    parseInt(r.slice(0, 2), 16),
    parseInt(r.slice(2, 4), 16),
    parseInt(r.slice(4, 6), 16),
  ];
}
function zo(e) {
  for (var r = 0, t = 1; r != 3; ++r)
    t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
  return t.toString(16).toUpperCase().slice(1);
}
function Gk(e) {
  var r = e[0] / 255,
    t = e[1] / 255,
    i = e[2] / 255,
    n = Math.max(r, t, i),
    a = Math.min(r, t, i),
    o = n - a;
  if (o === 0) return [0, 0, r];
  var s = 0,
    c = 0,
    l = n + a;
  switch (((c = o / (l > 1 ? 2 - l : l)), n)) {
    case r:
      s = ((t - i) / o + 6) % 6;
      break;
    case t:
      s = (i - r) / o + 2;
      break;
    case i:
      s = (r - t) / o + 4;
      break;
  }
  return [s / 6, c, l / 2];
}
function $k(e) {
  var r = e[0],
    t = e[1],
    i = e[2],
    n = t * 2 * (i < 0.5 ? i : 1 - i),
    a = i - n / 2,
    o = [a, a, a],
    s = 6 * r,
    c;
  if (t !== 0)
    switch (s | 0) {
      case 0:
      case 6:
        (c = n * s), (o[0] += n), (o[1] += c);
        break;
      case 1:
        (c = n * (2 - s)), (o[0] += c), (o[1] += n);
        break;
      case 2:
        (c = n * (s - 2)), (o[1] += n), (o[2] += c);
        break;
      case 3:
        (c = n * (4 - s)), (o[1] += c), (o[2] += n);
        break;
      case 4:
        (c = n * (s - 4)), (o[2] += n), (o[0] += c);
        break;
      case 5:
        (c = n * (6 - s)), (o[2] += c), (o[0] += n);
        break;
    }
  for (var l = 0; l != 3; ++l) o[l] = Math.round(o[l] * 255);
  return o;
}
function Mc(e, r) {
  if (r === 0) return e;
  var t = Gk(Wk(e));
  return (
    r < 0 ? (t[2] = t[2] * (1 + r)) : (t[2] = 1 - (1 - t[2]) * (1 - r)),
    zo($k(t))
  );
}
var kg = 6,
  Xk = 15,
  qk = 1,
  lr = kg;
function Rc(e) {
  return Math.floor((e + Math.round(128 / lr) / 256) * lr);
}
function Oc(e) {
  return Math.floor(((e - 5) / lr) * 100 + 0.5) / 100;
}
function ru(e) {
  return Math.round(((e * lr + 5) / lr) * 256) / 256;
}
function Gd(e) {
  return ru(Oc(Rc(e)));
}
function Fu(e) {
  var r = Math.abs(e - Gd(e)),
    t = lr;
  if (r > 0.005)
    for (lr = qk; lr < Xk; ++lr)
      Math.abs(e - Gd(e)) <= r && ((r = Math.abs(e - Gd(e))), (t = lr));
  lr = t;
}
function ha(e) {
  e.width
    ? ((e.wpx = Rc(e.width)), (e.wch = Oc(e.wpx)), (e.MDW = lr))
    : e.wpx
    ? ((e.wch = Oc(e.wpx)), (e.width = ru(e.wch)), (e.MDW = lr))
    : typeof e.wch == "number" &&
      ((e.width = ru(e.wch)), (e.wpx = Rc(e.width)), (e.MDW = lr)),
    e.customWidth && delete e.customWidth;
}
var Kk = 96,
  Eg = Kk;
function Cg(e) {
  return (e * 96) / Eg;
}
function Ho(e) {
  return (e * Eg) / 96;
}
var Yk = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid",
};
function Zk(e, r, t, i) {
  r.Borders = [];
  var n = {},
    a = !1;
  (e[0].match(rr) || []).forEach(function (o) {
    var s = Te(o);
    switch (li(s[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        (n = {}),
          s.diagonalUp && (n.diagonalUp = mt(s.diagonalUp)),
          s.diagonalDown && (n.diagonalDown = mt(s.diagonalDown)),
          r.Borders.push(n);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (i && i.WTF && !a)
          throw new Error("unrecognized " + s[0] + " in borders");
    }
  });
}
function Qk(e, r, t, i) {
  r.Fills = [];
  var n = {},
    a = !1;
  (e[0].match(rr) || []).forEach(function (o) {
    var s = Te(o);
    switch (li(s[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        (n = {}), r.Fills.push(n);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        r.Fills.push(n), (n = {});
        break;
      case "<patternFill":
      case "<patternFill>":
        s.patternType && (n.patternType = s.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        n.bgColor || (n.bgColor = {}),
          s.indexed && (n.bgColor.indexed = parseInt(s.indexed, 10)),
          s.theme && (n.bgColor.theme = parseInt(s.theme, 10)),
          s.tint && (n.bgColor.tint = parseFloat(s.tint)),
          s.rgb && (n.bgColor.rgb = s.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        n.fgColor || (n.fgColor = {}),
          s.theme && (n.fgColor.theme = parseInt(s.theme, 10)),
          s.tint && (n.fgColor.tint = parseFloat(s.tint)),
          s.rgb != null && (n.fgColor.rgb = s.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (i && i.WTF && !a)
          throw new Error("unrecognized " + s[0] + " in fills");
    }
  });
}
function Jk(e, r, t, i) {
  r.Fonts = [];
  var n = {},
    a = !1;
  (e[0].match(rr) || []).forEach(function (o) {
    var s = Te(o);
    switch (li(s[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        r.Fonts.push(n), (n = {});
        break;
      case "<name":
        s.val && (n.name = lt(s.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        n.bold = s.val ? mt(s.val) : 1;
        break;
      case "<b/>":
        n.bold = 1;
        break;
      case "<i":
        n.italic = s.val ? mt(s.val) : 1;
        break;
      case "<i/>":
        n.italic = 1;
        break;
      case "<u":
        switch (s.val) {
          case "none":
            n.underline = 0;
            break;
          case "single":
            n.underline = 1;
            break;
          case "double":
            n.underline = 2;
            break;
          case "singleAccounting":
            n.underline = 33;
            break;
          case "doubleAccounting":
            n.underline = 34;
            break;
        }
        break;
      case "<u/>":
        n.underline = 1;
        break;
      case "<strike":
        n.strike = s.val ? mt(s.val) : 1;
        break;
      case "<strike/>":
        n.strike = 1;
        break;
      case "<outline":
        n.outline = s.val ? mt(s.val) : 1;
        break;
      case "<outline/>":
        n.outline = 1;
        break;
      case "<shadow":
        n.shadow = s.val ? mt(s.val) : 1;
        break;
      case "<shadow/>":
        n.shadow = 1;
        break;
      case "<condense":
        n.condense = s.val ? mt(s.val) : 1;
        break;
      case "<condense/>":
        n.condense = 1;
        break;
      case "<extend":
        n.extend = s.val ? mt(s.val) : 1;
        break;
      case "<extend/>":
        n.extend = 1;
        break;
      case "<sz":
        s.val && (n.sz = +s.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        s.val && (n.vertAlign = s.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        s.val && (n.family = parseInt(s.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        s.val && (n.scheme = s.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (s.val == "1") break;
        s.codepage = cu[parseInt(s.val, 10)];
        break;
      case "<color":
        if (
          (n.color || (n.color = {}),
          s.auto && (n.color.auto = mt(s.auto)),
          s.rgb)
        )
          n.color.rgb = s.rgb.slice(-6);
        else if (s.indexed) {
          n.color.index = parseInt(s.indexed, 10);
          var c = yn[n.color.index];
          n.color.index == 81 && (c = yn[1]),
            c || (c = yn[1]),
            (n.color.rgb =
              c[0].toString(16) + c[1].toString(16) + c[2].toString(16));
        } else
          s.theme &&
            ((n.color.theme = parseInt(s.theme, 10)),
            s.tint && (n.color.tint = parseFloat(s.tint)),
            s.theme &&
              t.themeElements &&
              t.themeElements.clrScheme &&
              (n.color.rgb = Mc(
                t.themeElements.clrScheme[n.color.theme].rgb,
                n.color.tint || 0
              )));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        a = !0;
        break;
      case "</AlternateContent>":
        a = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        a = !0;
        break;
      case "</ext>":
        a = !1;
        break;
      default:
        if (i && i.WTF && !a)
          throw new Error("unrecognized " + s[0] + " in fonts");
    }
  });
}
function eE(e, r, t) {
  r.NumberFmt = [];
  for (var i = ci(De), n = 0; n < i.length; ++n) r.NumberFmt[i[n]] = De[i[n]];
  var a = e[0].match(rr);
  if (a)
    for (n = 0; n < a.length; ++n) {
      var o = Te(a[n]);
      switch (li(o[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var s = $e(lt(o.formatCode)),
              c = parseInt(o.numFmtId, 10);
            if (((r.NumberFmt[c] = s), c > 0)) {
              if (c > 392) {
                for (c = 392; c > 60 && r.NumberFmt[c] != null; --c);
                r.NumberFmt[c] = s;
              }
              bn(s, c);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (t.WTF) throw new Error("unrecognized " + o[0] + " in numFmts");
      }
    }
}
var wc = ["numFmtId", "fillId", "fontId", "borderId", "xfId"],
  kc = [
    "applyAlignment",
    "applyBorder",
    "applyFill",
    "applyFont",
    "applyNumberFormat",
    "applyProtection",
    "pivotButton",
    "quotePrefix",
  ];
function tE(e, r, t) {
  r.CellXf = [];
  var i,
    n = !1;
  (e[0].match(rr) || []).forEach(function (a) {
    var o = Te(a),
      s = 0;
    switch (li(o[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (i = o, delete i[0], s = 0; s < wc.length; ++s)
          i[wc[s]] && (i[wc[s]] = parseInt(i[wc[s]], 10));
        for (s = 0; s < kc.length; ++s) i[kc[s]] && (i[kc[s]] = mt(i[kc[s]]));
        if (r.NumberFmt && i.numFmtId > 392) {
          for (s = 392; s > 60; --s)
            if (r.NumberFmt[i.numFmtId] == r.NumberFmt[s]) {
              i.numFmtId = s;
              break;
            }
        }
        r.CellXf.push(i);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var c = {};
        o.vertical && (c.vertical = o.vertical),
          o.horizontal && (c.horizontal = o.horizontal),
          o.textRotation != null && (c.textRotation = o.textRotation),
          o.indent && (c.indent = o.indent),
          o.wrapText && (c.wrapText = mt(o.wrapText)),
          (i.alignment = c);
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (t && t.WTF && !n)
          throw new Error("unrecognized " + o[0] + " in cellXfs");
    }
  });
}
var rE = (function () {
  var r = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,
    t = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,
    i = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,
    n = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,
    a = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function (s, c, l) {
    var d = {};
    if (!s) return d;
    s = s
      .replace(/<!--([\s\S]*?)-->/gm, "")
      .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var u;
    return (
      (u = s.match(r)) && eE(u, d, l),
      (u = s.match(n)) && Jk(u, d, c, l),
      (u = s.match(i)) && Qk(u, d, c, l),
      (u = s.match(a)) && Zk(u, d, c, l),
      (u = s.match(t)) && tE(u, d, l),
      d
    );
  };
})();
function iE(e, r) {
  var t = e.read_shift(2),
    i = er(e, r - 2);
  return [t, i];
}
function nE(e, r, t) {
  var i = {};
  i.sz = e.read_shift(2) / 20;
  var n = mw(e, 2, t);
  n.fItalic && (i.italic = 1),
    n.fCondense && (i.condense = 1),
    n.fExtend && (i.extend = 1),
    n.fShadow && (i.shadow = 1),
    n.fOutline && (i.outline = 1),
    n.fStrikeout && (i.strike = 1);
  var a = e.read_shift(2);
  switch ((a === 700 && (i.bold = 1), e.read_shift(2))) {
    case 1:
      i.vertAlign = "superscript";
      break;
    case 2:
      i.vertAlign = "subscript";
      break;
  }
  var o = e.read_shift(1);
  o != 0 && (i.underline = o);
  var s = e.read_shift(1);
  s > 0 && (i.family = s);
  var c = e.read_shift(1);
  switch (
    (c > 0 && (i.charset = c), e.l++, (i.color = hw(e, 8)), e.read_shift(1))
  ) {
    case 1:
      i.scheme = "major";
      break;
    case 2:
      i.scheme = "minor";
      break;
  }
  return (i.name = er(e, r - 21)), i;
}
var aE = tr;
function oE(e, r) {
  var t = e.l + r,
    i = e.read_shift(2),
    n = e.read_shift(2);
  return (e.l = t), { ixfe: i, numFmtId: n };
}
var sE = tr;
function cE(e, r, t) {
  var i = {};
  i.NumberFmt = [];
  for (var n in De) i.NumberFmt[n] = De[n];
  (i.CellXf = []), (i.Fonts = []);
  var a = [],
    o = !1;
  return (
    Si(e, function (c, l, d) {
      switch (d) {
        case 44:
          (i.NumberFmt[c[0]] = c[1]), bn(c[1], c[0]);
          break;
        case 43:
          i.Fonts.push(c),
            c.color.theme != null &&
              r &&
              r.themeElements &&
              r.themeElements.clrScheme &&
              (c.color.rgb = Mc(
                r.themeElements.clrScheme[c.color.theme].rgb,
                c.color.tint || 0
              ));
          break;
        case 1025:
          break;
        case 45:
          break;
        case 46:
          break;
        case 47:
          a[a.length - 1] == 617 && i.CellXf.push(c);
          break;
        case 48:
        case 507:
        case 572:
        case 475:
          break;
        case 1171:
        case 2102:
        case 1130:
        case 512:
        case 2095:
        case 3072:
          break;
        case 35:
          o = !0;
          break;
        case 36:
          o = !1;
          break;
        case 37:
          a.push(d), (o = !0);
          break;
        case 38:
          a.pop(), (o = !1);
          break;
        default:
          if (l.T > 0) a.push(d);
          else if (l.T < 0) a.pop();
          else if (!o || (t.WTF && a[a.length - 1] != 37))
            throw new Error("Unexpected record 0x" + d.toString(16));
      }
    }),
    i
  );
}
var lE = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>",
];
function dE(e, r, t) {
  r.themeElements.clrScheme = [];
  var i = {};
  (e[0].match(rr) || []).forEach(function (n) {
    var a = Te(n);
    switch (a[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        i.rgb = a.val;
        break;
      case "<a:sysClr":
        i.rgb = a.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        a[0].charAt(1) === "/"
          ? ((r.themeElements.clrScheme[lE.indexOf(a[0])] = i), (i = {}))
          : (i.name = a[0].slice(3, a[0].length - 1));
        break;
      default:
        if (t && t.WTF)
          throw new Error("Unrecognized " + a[0] + " in clrScheme");
    }
  });
}
function uE() {}
function fE() {}
var hE = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,
  mE = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,
  pE = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function gE(e, r, t) {
  r.themeElements = {};
  var i;
  [
    ["clrScheme", hE, dE],
    ["fontScheme", mE, uE],
    ["fmtScheme", pE, fE],
  ].forEach(function (n) {
    if (!(i = e.match(n[1])))
      throw new Error(n[0] + " not found in themeElements");
    n[2](i, r, t);
  });
}
var vE = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function Tg(e, r) {
  (!e || e.length === 0) && (e = xE());
  var t,
    i = {};
  if (!(t = e.match(vE))) throw new Error("themeElements not found in theme");
  return gE(t[0], i, r), (i.raw = e), i;
}
function xE(e, r) {
  if (r && r.themeXLSX) return r.themeXLSX;
  if (e && typeof e.raw == "string") return e.raw;
  var t = [zp];
  return (
    (t[t.length] =
      '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">'),
    (t[t.length] = "<a:themeElements>"),
    (t[t.length] = '<a:clrScheme name="Office">'),
    (t[t.length] =
      '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>'),
    (t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>'),
    (t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>'),
    (t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>'),
    (t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>'),
    (t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>'),
    (t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>'),
    (t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>'),
    (t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>'),
    (t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>'),
    (t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>'),
    (t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>'),
    (t[t.length] = "</a:clrScheme>"),
    (t[t.length] = '<a:fontScheme name="Office">'),
    (t[t.length] = "<a:majorFont>"),
    (t[t.length] = '<a:latin typeface="Cambria"/>'),
    (t[t.length] = '<a:ea typeface=""/>'),
    (t[t.length] = '<a:cs typeface=""/>'),
    (t[t.length] =
      '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>'),
    (t[t.length] =
      '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>'),
    (t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>'),
    (t[t.length] =
      '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>'),
    (t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>'),
    (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>'),
    (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (t[t.length] = "</a:majorFont>"),
    (t[t.length] = "<a:minorFont>"),
    (t[t.length] = '<a:latin typeface="Calibri"/>'),
    (t[t.length] = '<a:ea typeface=""/>'),
    (t[t.length] = '<a:cs typeface=""/>'),
    (t[t.length] =
      '<a:font script="Jpan" typeface="\uFF2D\uFF33 \uFF30\u30B4\u30B7\u30C3\u30AF"/>'),
    (t[t.length] =
      '<a:font script="Hang" typeface="\uB9D1\uC740 \uACE0\uB515"/>'),
    (t[t.length] = '<a:font script="Hans" typeface="\u5B8B\u4F53"/>'),
    (t[t.length] =
      '<a:font script="Hant" typeface="\u65B0\u7D30\u660E\u9AD4"/>'),
    (t[t.length] = '<a:font script="Arab" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Hebr" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>'),
    (t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>'),
    (t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>'),
    (t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>'),
    (t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>'),
    (t[t.length] = '<a:font script="Knda" typeface="Tunga"/>'),
    (t[t.length] = '<a:font script="Guru" typeface="Raavi"/>'),
    (t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>'),
    (t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>'),
    (t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>'),
    (t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>'),
    (t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>'),
    (t[t.length] = '<a:font script="Deva" typeface="Mangal"/>'),
    (t[t.length] = '<a:font script="Telu" typeface="Gautami"/>'),
    (t[t.length] = '<a:font script="Taml" typeface="Latha"/>'),
    (t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>'),
    (t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>'),
    (t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>'),
    (t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>'),
    (t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>'),
    (t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>'),
    (t[t.length] = '<a:font script="Viet" typeface="Arial"/>'),
    (t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>'),
    (t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>'),
    (t[t.length] = "</a:minorFont>"),
    (t[t.length] = "</a:fontScheme>"),
    (t[t.length] = '<a:fmtScheme name="Office">'),
    (t[t.length] = "<a:fillStyleLst>"),
    (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] = '<a:lin ang="16200000" scaled="1"/>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] = '<a:lin ang="16200000" scaled="0"/>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = "</a:fillStyleLst>"),
    (t[t.length] = "<a:lnStyleLst>"),
    (t[t.length] =
      '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] =
      '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] =
      '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>'),
    (t[t.length] = "</a:lnStyleLst>"),
    (t[t.length] = "<a:effectStyleLst>"),
    (t[t.length] = "<a:effectStyle>"),
    (t[t.length] = "<a:effectLst>"),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = "</a:effectLst>"),
    (t[t.length] = "</a:effectStyle>"),
    (t[t.length] = "<a:effectStyle>"),
    (t[t.length] = "<a:effectLst>"),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = "</a:effectLst>"),
    (t[t.length] = "</a:effectStyle>"),
    (t[t.length] = "<a:effectStyle>"),
    (t[t.length] = "<a:effectLst>"),
    (t[t.length] =
      '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>'),
    (t[t.length] = "</a:effectLst>"),
    (t[t.length] =
      '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>'),
    (t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>'),
    (t[t.length] = "</a:effectStyle>"),
    (t[t.length] = "</a:effectStyleLst>"),
    (t[t.length] = "<a:bgFillStyleLst>"),
    (t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>'),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = '<a:gradFill rotWithShape="1">'),
    (t[t.length] = "<a:gsLst>"),
    (t[t.length] =
      '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>'),
    (t[t.length] =
      '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>'),
    (t[t.length] = "</a:gsLst>"),
    (t[t.length] =
      '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>'),
    (t[t.length] = "</a:gradFill>"),
    (t[t.length] = "</a:bgFillStyleLst>"),
    (t[t.length] = "</a:fmtScheme>"),
    (t[t.length] = "</a:themeElements>"),
    (t[t.length] = "<a:objectDefaults>"),
    (t[t.length] = "<a:spDef>"),
    (t[t.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>'),
    (t[t.length] = "</a:spDef>"),
    (t[t.length] = "<a:lnDef>"),
    (t[t.length] =
      '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>'),
    (t[t.length] = "</a:lnDef>"),
    (t[t.length] = "</a:objectDefaults>"),
    (t[t.length] = "<a:extraClrSchemeLst/>"),
    (t[t.length] = "</a:theme>"),
    t.join("")
  );
}
function _E(e, r, t) {
  var i = e.l + r,
    n = e.read_shift(4);
  if (n !== 124226) {
    if (!t.cellStyles) {
      e.l = i;
      return;
    }
    var a = e.slice(e.l);
    e.l = i;
    var o;
    try {
      o = Up(a, { type: "array" });
    } catch {
      return;
    }
    var s = yr(o, "theme/theme/theme1.xml", !0);
    if (s) return Tg(s, t);
  }
}
function bE(e) {
  return e.read_shift(4);
}
function yE(e) {
  var r = {};
  switch (
    ((r.xclrType = e.read_shift(2)),
    (r.nTintShade = e.read_shift(2)),
    r.xclrType)
  ) {
    case 0:
      e.l += 4;
      break;
    case 1:
      r.xclrValue = wE(e, 4);
      break;
    case 2:
      r.xclrValue = fg(e, 4);
      break;
    case 3:
      r.xclrValue = bE(e, 4);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return (e.l += 8), r;
}
function wE(e, r) {
  return tr(e, r);
}
function kE(e, r) {
  return tr(e, r);
}
function EE(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2) - 4,
    i = [r];
  switch (r) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      i[1] = yE(e, t);
      break;
    case 6:
      i[1] = kE(e, t);
      break;
    case 14:
    case 15:
      i[1] = e.read_shift(t === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + r + " " + t);
  }
  return i;
}
function CE(e, r) {
  var t = e.l + r;
  e.l += 2;
  var i = e.read_shift(2);
  e.l += 2;
  for (var n = e.read_shift(2), a = []; n-- > 0; ) a.push(EE(e, t - e.l));
  return { ixfe: i, ext: a };
}
function TE(e, r) {
  r.forEach(function (t) {
    switch (t[0]) {
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
      case 8:
        break;
      case 9:
        break;
      case 10:
        break;
      case 11:
        break;
      case 13:
        break;
      case 14:
        break;
      case 15:
        break;
    }
  });
}
function SE(e, r) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: er(e, r - 8),
  };
}
function AE(e) {
  for (var r = [], t = e.read_shift(4); t-- > 0; )
    r.push([e.read_shift(4), e.read_shift(4)]);
  return r;
}
function IE(e) {
  return (e.l += 4), e.read_shift(4) != 0;
}
function FE(e, r, t) {
  var i = { Types: [], Cell: [], Value: [] },
    n = t || {},
    a = [],
    o = !1,
    s = 2;
  return (
    Si(e, function (c, l, d) {
      switch (d) {
        case 335:
          i.Types.push({ name: c.name });
          break;
        case 51:
          c.forEach(function (u) {
            s == 1
              ? i.Cell.push({ type: i.Types[u[0] - 1].name, index: u[1] })
              : s == 0 &&
                i.Value.push({ type: i.Types[u[0] - 1].name, index: u[1] });
          });
          break;
        case 337:
          s = c ? 1 : 0;
          break;
        case 338:
          s = 2;
          break;
        case 35:
          a.push(d), (o = !0);
          break;
        case 36:
          a.pop(), (o = !1);
          break;
        default:
          if (!l.T) {
            if (!o || (n.WTF && a[a.length - 1] != 35))
              throw new Error("Unexpected record 0x" + d.toString(16));
          }
      }
    }),
    i
  );
}
function DE(e, r, t) {
  var i = { Types: [], Cell: [], Value: [] };
  if (!e) return i;
  var n = !1,
    a = 2,
    o;
  return (
    e.replace(rr, function (s) {
      var c = Te(s);
      switch (li(c[0])) {
        case "<?xml":
          break;
        case "<metadata":
        case "</metadata>":
          break;
        case "<metadataTypes":
        case "</metadataTypes>":
          break;
        case "<metadataType":
          i.Types.push({ name: c.name });
          break;
        case "</metadataType>":
          break;
        case "<futureMetadata":
          for (var l = 0; l < i.Types.length; ++l)
            i.Types[l].name == c.name && (o = i.Types[l]);
          break;
        case "</futureMetadata>":
          break;
        case "<bk>":
          break;
        case "</bk>":
          break;
        case "<rc":
          a == 1
            ? i.Cell.push({ type: i.Types[c.t - 1].name, index: +c.v })
            : a == 0 &&
              i.Value.push({ type: i.Types[c.t - 1].name, index: +c.v });
          break;
        case "</rc>":
          break;
        case "<cellMetadata":
          a = 1;
          break;
        case "</cellMetadata>":
          a = 2;
          break;
        case "<valueMetadata":
          a = 0;
          break;
        case "</valueMetadata>":
          a = 2;
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          n = !0;
          break;
        case "</ext>":
          n = !1;
          break;
        case "<rvb":
          if (!o) break;
          o.offsets || (o.offsets = []), o.offsets.push(+c.i);
          break;
        default:
          if (!n && t.WTF)
            throw new Error("unrecognized " + c[0] + " in metadata");
      }
      return s;
    }),
    i
  );
}
function ME(e) {
  var r = [];
  if (!e) return r;
  var t = 1;
  return (
    (e.match(rr) || []).forEach(function (i) {
      var n = Te(i);
      switch (n[0]) {
        case "<?xml":
          break;
        case "<calcChain":
        case "<calcChain>":
        case "</calcChain>":
          break;
        case "<c":
          delete n[0], n.i ? (t = n.i) : (n.i = t), r.push(n);
          break;
      }
    }),
    r
  );
}
function RE(e) {
  var r = {};
  r.i = e.read_shift(4);
  var t = {};
  (t.r = e.read_shift(4)), (t.c = e.read_shift(4)), (r.r = Ie(t));
  var i = e.read_shift(1);
  return i & 2 && (r.l = "1"), i & 8 && (r.a = "1"), r;
}
function OE(e, r, t) {
  var i = [],
    n = !1;
  return (
    Si(e, function (o, s, c) {
      switch (c) {
        case 63:
          i.push(o);
          break;
        default:
          if (!s.T) {
            if (!n || t.WTF)
              throw new Error("Unexpected record 0x" + c.toString(16));
          }
      }
    }),
    i
  );
}
function NE(e, r, t, i) {
  if (!e) return e;
  var n = i || {},
    a = !1,
    o = !1;
  Si(
    e,
    function (c, l, d) {
      if (!o)
        switch (d) {
          case 359:
          case 363:
          case 364:
          case 366:
          case 367:
          case 368:
          case 369:
          case 370:
          case 371:
          case 472:
          case 577:
          case 578:
          case 579:
          case 580:
          case 581:
          case 582:
          case 583:
          case 584:
          case 585:
          case 586:
          case 587:
            break;
          case 35:
            a = !0;
            break;
          case 36:
            a = !1;
            break;
          default:
            if (!l.T) {
              if (!a || n.WTF)
                throw new Error("Unexpected record 0x" + d.toString(16));
            }
        }
    },
    n
  );
}
function PE(e, r) {
  if (!e) return "??";
  var t = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return r["!id"][t].Target;
}
function np(e, r, t, i) {
  var n = Array.isArray(e),
    a;
  r.forEach(function (o) {
    var s = dr(o.ref);
    if (
      (n ? (e[s.r] || (e[s.r] = []), (a = e[s.r][s.c])) : (a = e[o.ref]), !a)
    ) {
      (a = { t: "z" }), n ? (e[s.r][s.c] = a) : (e[o.ref] = a);
      var c = _t(e["!ref"] || "BDWGO1000001:A1");
      c.s.r > s.r && (c.s.r = s.r),
        c.e.r < s.r && (c.e.r = s.r),
        c.s.c > s.c && (c.s.c = s.c),
        c.e.c < s.c && (c.e.c = s.c);
      var l = ze(c);
      l !== e["!ref"] && (e["!ref"] = l);
    }
    a.c || (a.c = []);
    var d = { a: o.author, t: o.t, r: o.r, T: t };
    o.h && (d.h = o.h);
    for (var u = a.c.length - 1; u >= 0; --u) {
      if (!t && a.c[u].T) return;
      t && !a.c[u].T && a.c.splice(u, 1);
    }
    if (t && i) {
      for (u = 0; u < i.length; ++u)
        if (d.a == i[u].id) {
          d.a = i[u].name || d.a;
          break;
        }
    }
    a.c.push(d);
  });
}
function LE(e, r) {
  if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
  var t = [],
    i = [],
    n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  n &&
    n[1] &&
    n[1].split(/<\/\w*:?author>/).forEach(function (o) {
      if (!(o === "" || o.trim() === "")) {
        var s = o.match(/<(?:\w+:)?author[^>]*>(.*)/);
        s && t.push(s[1]);
      }
    });
  var a = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return (
    a &&
      a[1] &&
      a[1].split(/<\/\w*:?comment>/).forEach(function (o) {
        if (!(o === "" || o.trim() === "")) {
          var s = o.match(/<(?:\w+:)?comment[^>]*>/);
          if (s) {
            var c = Te(s[0]),
              l = {
                author: (c.authorId && t[c.authorId]) || "sheetjsghost",
                ref: c.ref,
                guid: c.guid,
              },
              d = dr(c.ref);
            if (!(r.sheetRows && r.sheetRows <= d.r)) {
              var u = o.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),
                h = (!!u && !!u[1] && Iu(u[1])) || { r: "", t: "", h: "" };
              (l.r = h.r),
                h.r == "<t></t>" && (h.t = h.h = ""),
                (l.t = (h.t || "")
                  .replace(
                    /\r\n/g,
                    `
`
                  )
                  .replace(
                    /\r/g,
                    `
`
                  )),
                r.cellHTML && (l.h = h.h),
                i.push(l);
            }
          }
        }
      }),
    i
  );
}
function BE(e, r) {
  var t = [],
    i = !1,
    n = {},
    a = 0;
  return (
    e.replace(rr, function (s, c) {
      var l = Te(s);
      switch (li(l[0])) {
        case "<?xml":
          break;
        case "<ThreadedComments":
          break;
        case "</ThreadedComments>":
          break;
        case "<threadedComment":
          n = { author: l.personId, guid: l.id, ref: l.ref, T: 1 };
          break;
        case "</threadedComment>":
          n.t != null && t.push(n);
          break;
        case "<text>":
        case "<text":
          a = c + s.length;
          break;
        case "</text>":
          n.t = e
            .slice(a, c)
            .replace(
              /\r\n/g,
              `
`
            )
            .replace(
              /\r/g,
              `
`
            );
          break;
        case "<mentions":
        case "<mentions>":
          i = !0;
          break;
        case "</mentions>":
          i = !1;
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          i = !0;
          break;
        case "</ext>":
          i = !1;
          break;
        default:
          if (!i && r.WTF)
            throw new Error("unrecognized " + l[0] + " in threaded comments");
      }
      return s;
    }),
    t
  );
}
function jE(e, r) {
  var t = [],
    i = !1;
  return (
    e.replace(rr, function (a) {
      var o = Te(a);
      switch (li(o[0])) {
        case "<?xml":
          break;
        case "<personList":
          break;
        case "</personList>":
          break;
        case "<person":
          t.push({ name: o.displayname, id: o.id });
          break;
        case "</person>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          i = !0;
          break;
        case "</ext>":
          i = !1;
          break;
        default:
          if (!i && r.WTF)
            throw new Error("unrecognized " + o[0] + " in threaded comments");
      }
      return a;
    }),
    t
  );
}
function VE(e) {
  var r = {};
  r.iauthor = e.read_shift(4);
  var t = An(e, 16);
  return (r.rfx = t.s), (r.ref = Ie(t.s)), (e.l += 16), r;
}
var UE = er;
function zE(e, r) {
  var t = [],
    i = [],
    n = {},
    a = !1;
  return (
    Si(e, function (s, c, l) {
      switch (l) {
        case 632:
          i.push(s);
          break;
        case 635:
          n = s;
          break;
        case 637:
          (n.t = s.t), (n.h = s.h), (n.r = s.r);
          break;
        case 636:
          if (
            ((n.author = i[n.iauthor]),
            delete n.iauthor,
            r.sheetRows && n.rfx && r.sheetRows <= n.rfx.r)
          )
            break;
          n.t || (n.t = ""), delete n.rfx, t.push(n);
          break;
        case 3072:
          break;
        case 35:
          a = !0;
          break;
        case 36:
          a = !1;
          break;
        case 37:
          break;
        case 38:
          break;
        default:
          if (!c.T) {
            if (!a || r.WTF)
              throw new Error("Unexpected record 0x" + l.toString(16));
          }
      }
    }),
    t
  );
}
var HE = "application/vnd.ms-office.vbaProject";
function WE(e) {
  var r = Ue.utils.cfb_new({ root: "R" });
  return (
    e.FullPaths.forEach(function (t, i) {
      if (!(t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/))) {
        var n = t
          .replace(/^[^\/]*/, "R")
          .replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
        Ue.utils.cfb_add(r, n, e.FileIndex[i].content);
      }
    }),
    Ue.write(r)
  );
}
function GE() {
  return { "!type": "dialog" };
}
function $E() {
  return { "!type": "dialog" };
}
function XE() {
  return { "!type": "macro" };
}
function qE() {
  return { "!type": "macro" };
}
var la = (function () {
    var e =
        /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,
      r = { r: 0, c: 0 };
    function t(i, n, a, o) {
      var s = !1,
        c = !1;
      a.length == 0
        ? (c = !0)
        : a.charAt(0) == "[" && ((c = !0), (a = a.slice(1, -1))),
        o.length == 0
          ? (s = !0)
          : o.charAt(0) == "[" && ((s = !0), (o = o.slice(1, -1)));
      var l = a.length > 0 ? parseInt(a, 10) | 0 : 0,
        d = o.length > 0 ? parseInt(o, 10) | 0 : 0;
      return (
        s ? (d += r.c) : --d,
        c ? (l += r.r) : --l,
        n + (s ? "" : "$") + Mt(d) + (c ? "" : "$") + Ut(l)
      );
    }
    return function (n, a) {
      return (r = a), n.replace(e, t);
    };
  })(),
  Sg =
    /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,
  KE = (function () {
    return function (r, t) {
      return r.replace(Sg, function (i, n, a, o, s, c) {
        var l = ku(o) - (a ? 0 : t.c),
          d = wu(c) - (s ? 0 : t.r),
          u = d == 0 ? "" : s ? d + 1 : "[" + d + "]",
          h = l == 0 ? "" : a ? l + 1 : "[" + l + "]";
        return n + "R" + u + "C" + h;
      });
    };
  })();
function Ag(e, r) {
  return e.replace(Sg, function (t, i, n, a, o, s) {
    return (
      i +
      (n == "$" ? n + a : Mt(ku(a) + r.c)) +
      (o == "$" ? o + s : Ut(wu(s) + r.r))
    );
  });
}
function YE(e, r, t) {
  var i = va(r),
    n = i.s,
    a = dr(t),
    o = { r: a.r - n.r, c: a.c - n.c };
  return Ag(e, o);
}
function ZE(e) {
  return e.length != 1;
}
function ap(e) {
  return e.replace(/_xlfn\./g, "");
}
function Ct(e) {
  e.l += 1;
}
function Yi(e, r) {
  var t = e.read_shift(r == 1 ? 1 : 2);
  return [t & 16383, (t >> 14) & 1, (t >> 15) & 1];
}
function Ig(e, r, t) {
  var i = 2;
  if (t) {
    if (t.biff >= 2 && t.biff <= 5) return Fg(e, r, t);
    t.biff == 12 && (i = 4);
  }
  var n = e.read_shift(i),
    a = e.read_shift(i),
    o = Yi(e, 2),
    s = Yi(e, 2);
  return {
    s: { r: n, c: o[0], cRel: o[1], rRel: o[2] },
    e: { r: a, c: s[0], cRel: s[1], rRel: s[2] },
  };
}
function Fg(e) {
  var r = Yi(e, 2),
    t = Yi(e, 2),
    i = e.read_shift(1),
    n = e.read_shift(1);
  return {
    s: { r: r[0], c: i, cRel: r[1], rRel: r[2] },
    e: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
  };
}
function QE(e, r, t) {
  if (t.biff < 8) return Fg(e, r, t);
  var i = e.read_shift(t.biff == 12 ? 4 : 2),
    n = e.read_shift(t.biff == 12 ? 4 : 2),
    a = Yi(e, 2),
    o = Yi(e, 2);
  return {
    s: { r: i, c: a[0], cRel: a[1], rRel: a[2] },
    e: { r: n, c: o[0], cRel: o[1], rRel: o[2] },
  };
}
function Dg(e, r, t) {
  if (t && t.biff >= 2 && t.biff <= 5) return JE(e, r, t);
  var i = e.read_shift(t && t.biff == 12 ? 4 : 2),
    n = Yi(e, 2);
  return { r: i, c: n[0], cRel: n[1], rRel: n[2] };
}
function JE(e) {
  var r = Yi(e, 2),
    t = e.read_shift(1);
  return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
}
function eC(e) {
  var r = e.read_shift(2),
    t = e.read_shift(2);
  return {
    r,
    c: t & 255,
    fQuoted: !!(t & 16384),
    cRel: t >> 15,
    rRel: t >> 15,
  };
}
function tC(e, r, t) {
  var i = t && t.biff ? t.biff : 8;
  if (i >= 2 && i <= 5) return rC(e, r, t);
  var n = e.read_shift(i >= 12 ? 4 : 2),
    a = e.read_shift(2),
    o = (a & 16384) >> 14,
    s = (a & 32768) >> 15;
  if (((a &= 16383), s == 1)) for (; n > 524287; ) n -= 1048576;
  if (o == 1) for (; a > 8191; ) a = a - 16384;
  return { r: n, c: a, cRel: o, rRel: s };
}
function rC(e) {
  var r = e.read_shift(2),
    t = e.read_shift(1),
    i = (r & 32768) >> 15,
    n = (r & 16384) >> 14;
  return (
    (r &= 16383),
    i == 1 && r >= 8192 && (r = r - 16384),
    n == 1 && t >= 128 && (t = t - 256),
    { r, c: t, cRel: n, rRel: i }
  );
}
function iC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5,
    n = Ig(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
  return [i, n];
}
function nC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5,
    n = e.read_shift(2, "i"),
    a = 8;
  if (t)
    switch (t.biff) {
      case 5:
        (e.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  var o = Ig(e, a, t);
  return [i, n, o];
}
function aC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5;
  return (e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8), [i];
}
function oC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5,
    n = e.read_shift(2),
    a = 8;
  if (t)
    switch (t.biff) {
      case 5:
        (e.l += 12), (a = 6);
        break;
      case 12:
        a = 12;
        break;
    }
  return (e.l += a), [i, n];
}
function sC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5,
    n = QE(e, r - 1, t);
  return [i, n];
}
function cC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5;
  return (e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7), [i];
}
function op(e) {
  var r = e[e.l + 1] & 1,
    t = 1;
  return (e.l += 4), [r, t];
}
function lC(e, r, t) {
  e.l += 2;
  for (
    var i = e.read_shift(t && t.biff == 2 ? 1 : 2), n = [], a = 0;
    a <= i;
    ++a
  )
    n.push(e.read_shift(t && t.biff == 2 ? 1 : 2));
  return n;
}
function dC(e, r, t) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [i, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function uC(e, r, t) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [i, e.read_shift(t && t.biff == 2 ? 1 : 2)];
}
function fC(e) {
  var r = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += 2), [r, e.read_shift(2)];
}
function hC(e, r, t) {
  var i = e[e.l + 1] & 255 ? 1 : 0;
  return (e.l += t && t.biff == 2 ? 3 : 4), [i];
}
function Mg(e) {
  var r = e.read_shift(1),
    t = e.read_shift(1);
  return [r, t];
}
function mC(e) {
  return e.read_shift(2), Mg(e, 2);
}
function pC(e) {
  return e.read_shift(2), Mg(e, 2);
}
function gC(e, r, t) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = Dg(e, 0, t);
  return [i, n];
}
function vC(e, r, t) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = tC(e, 0, t);
  return [i, n];
}
function xC(e, r, t) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(2);
  t && t.biff == 5 && (e.l += 12);
  var a = Dg(e, 0, t);
  return [i, n, a];
}
function _C(e, r, t) {
  var i = (e[e.l] & 96) >> 5;
  e.l += 1;
  var n = e.read_shift(t && t.biff <= 3 ? 1 : 2);
  return [bT[n], Ng[n], i];
}
function bC(e, r, t) {
  var i = e[e.l++],
    n = e.read_shift(1),
    a = t && t.biff <= 3 ? [i == 88 ? -1 : 0, e.read_shift(1)] : yC(e);
  return [n, (a[0] === 0 ? Ng : _T)[a[1]]];
}
function yC(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function wC(e, r, t) {
  e.l += t && t.biff == 2 ? 3 : 4;
}
function kC(e, r, t) {
  if ((e.l++, t && t.biff == 12)) return [e.read_shift(4, "i"), 0];
  var i = e.read_shift(2),
    n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [i, n];
}
function EC(e) {
  return e.l++, In[e.read_shift(1)];
}
function CC(e) {
  return e.l++, e.read_shift(2);
}
function TC(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function SC(e) {
  return e.l++, Zt(e, 8);
}
function AC(e, r, t) {
  return e.l++, $o(e, r - 1, t);
}
function IC(e, r) {
  var t = [e.read_shift(1)];
  if (r == 12)
    switch (t[0]) {
      case 2:
        t[0] = 4;
        break;
      case 4:
        t[0] = 16;
        break;
      case 0:
        t[0] = 1;
        break;
      case 1:
        t[0] = 2;
        break;
    }
  switch (t[0]) {
    case 4:
      (t[1] = wt(e, 1) ? "TRUE" : "FALSE"), r != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      (t[1] = In[e[e.l]]), (e.l += r == 12 ? 4 : 8);
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      t[1] = Zt(e, 8);
      break;
    case 2:
      t[1] = Fn(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
      break;
    default:
      throw new Error("Bad SerAr: " + t[0]);
  }
  return t;
}
function FC(e, r, t) {
  for (var i = e.read_shift(t.biff == 12 ? 4 : 2), n = [], a = 0; a != i; ++a)
    n.push((t.biff == 12 ? An : Bc)(e, 8));
  return n;
}
function DC(e, r, t) {
  var i = 0,
    n = 0;
  t.biff == 12
    ? ((i = e.read_shift(4)), (n = e.read_shift(4)))
    : ((n = 1 + e.read_shift(1)), (i = 1 + e.read_shift(2))),
    t.biff >= 2 && t.biff < 8 && (--i, --n == 0 && (n = 256));
  for (var a = 0, o = []; a != i && (o[a] = []); ++a)
    for (var s = 0; s != n; ++s) o[a][s] = IC(e, t.biff);
  return o;
}
function MC(e, r, t) {
  var i = (e.read_shift(1) >>> 5) & 3,
    n = !t || t.biff >= 8 ? 4 : 2,
    a = e.read_shift(n);
  switch (t.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [i, 0, a];
}
function RC(e, r, t) {
  if (t.biff == 5) return OC(e, r, t);
  var i = (e.read_shift(1) >>> 5) & 3,
    n = e.read_shift(2),
    a = e.read_shift(4);
  return [i, n, a];
}
function OC(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2, "i");
  e.l += 8;
  var i = e.read_shift(2);
  return (e.l += 12), [r, t, i];
}
function NC(e, r, t) {
  var i = (e.read_shift(1) >>> 5) & 3;
  e.l += t && t.biff == 2 ? 3 : 4;
  var n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [i, n];
}
function PC(e, r, t) {
  var i = (e.read_shift(1) >>> 5) & 3,
    n = e.read_shift(t && t.biff == 2 ? 1 : 2);
  return [i, n];
}
function LC(e, r, t) {
  var i = (e.read_shift(1) >>> 5) & 3;
  return (e.l += 4), t.biff < 8 && e.l--, t.biff == 12 && (e.l += 2), [i];
}
function BC(e, r, t) {
  var i = (e[e.l++] & 96) >> 5,
    n = e.read_shift(2),
    a = 4;
  if (t)
    switch (t.biff) {
      case 5:
        a = 15;
        break;
      case 12:
        a = 6;
        break;
    }
  return (e.l += a), [i, n];
}
var jC = tr,
  VC = tr,
  UC = tr;
function qo(e, r, t) {
  return (e.l += 2), [eC(e, 4, t)];
}
function Du(e) {
  return (e.l += 6), [];
}
var zC = qo,
  HC = Du,
  WC = Du,
  GC = qo;
function Rg(e) {
  return (e.l += 2), [St(e), e.read_shift(2) & 1];
}
var $C = qo,
  XC = Rg,
  qC = Du,
  KC = qo,
  YC = qo,
  ZC = [
    "Data",
    "All",
    "Headers",
    "??",
    "?Data2",
    "??",
    "?DataHeaders",
    "??",
    "Totals",
    "??",
    "??",
    "??",
    "?DataTotals",
    "??",
    "??",
    "??",
    "?Current",
  ];
function QC(e) {
  e.l += 2;
  var r = e.read_shift(2),
    t = e.read_shift(2),
    i = e.read_shift(4),
    n = e.read_shift(2),
    a = e.read_shift(2),
    o = ZC[(t >> 2) & 31];
  return { ixti: r, coltype: t & 3, rt: o, idx: i, c: n, C: a };
}
function JC(e) {
  return (e.l += 2), [e.read_shift(4)];
}
function eT(e, r, t) {
  return (e.l += 5), (e.l += 2), (e.l += t.biff == 2 ? 1 : 4), ["PTGSHEET"];
}
function tT(e, r, t) {
  return (e.l += t.biff == 2 ? 4 : 5), ["PTGENDSHEET"];
}
function rT(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function iT(e) {
  var r = (e.read_shift(1) >>> 5) & 3,
    t = e.read_shift(2);
  return [r, t];
}
function nT(e) {
  return (e.l += 4), [0, 0];
}
var sp = {
    1: { n: "PtgExp", f: kC },
    2: { n: "PtgTbl", f: UC },
    3: { n: "PtgAdd", f: Ct },
    4: { n: "PtgSub", f: Ct },
    5: { n: "PtgMul", f: Ct },
    6: { n: "PtgDiv", f: Ct },
    7: { n: "PtgPower", f: Ct },
    8: { n: "PtgConcat", f: Ct },
    9: { n: "PtgLt", f: Ct },
    10: { n: "PtgLe", f: Ct },
    11: { n: "PtgEq", f: Ct },
    12: { n: "PtgGe", f: Ct },
    13: { n: "PtgGt", f: Ct },
    14: { n: "PtgNe", f: Ct },
    15: { n: "PtgIsect", f: Ct },
    16: { n: "PtgUnion", f: Ct },
    17: { n: "PtgRange", f: Ct },
    18: { n: "PtgUplus", f: Ct },
    19: { n: "PtgUminus", f: Ct },
    20: { n: "PtgPercent", f: Ct },
    21: { n: "PtgParen", f: Ct },
    22: { n: "PtgMissArg", f: Ct },
    23: { n: "PtgStr", f: AC },
    26: { n: "PtgSheet", f: eT },
    27: { n: "PtgEndSheet", f: tT },
    28: { n: "PtgErr", f: EC },
    29: { n: "PtgBool", f: TC },
    30: { n: "PtgInt", f: CC },
    31: { n: "PtgNum", f: SC },
    32: { n: "PtgArray", f: cC },
    33: { n: "PtgFunc", f: _C },
    34: { n: "PtgFuncVar", f: bC },
    35: { n: "PtgName", f: MC },
    36: { n: "PtgRef", f: gC },
    37: { n: "PtgArea", f: iC },
    38: { n: "PtgMemArea", f: NC },
    39: { n: "PtgMemErr", f: jC },
    40: { n: "PtgMemNoMem", f: VC },
    41: { n: "PtgMemFunc", f: PC },
    42: { n: "PtgRefErr", f: LC },
    43: { n: "PtgAreaErr", f: aC },
    44: { n: "PtgRefN", f: vC },
    45: { n: "PtgAreaN", f: sC },
    46: { n: "PtgMemAreaN", f: rT },
    47: { n: "PtgMemNoMemN", f: iT },
    57: { n: "PtgNameX", f: RC },
    58: { n: "PtgRef3d", f: xC },
    59: { n: "PtgArea3d", f: nC },
    60: { n: "PtgRefErr3d", f: BC },
    61: { n: "PtgAreaErr3d", f: oC },
    255: {},
  },
  aT = {
    64: 32,
    96: 32,
    65: 33,
    97: 33,
    66: 34,
    98: 34,
    67: 35,
    99: 35,
    68: 36,
    100: 36,
    69: 37,
    101: 37,
    70: 38,
    102: 38,
    71: 39,
    103: 39,
    72: 40,
    104: 40,
    73: 41,
    105: 41,
    74: 42,
    106: 42,
    75: 43,
    107: 43,
    76: 44,
    108: 44,
    77: 45,
    109: 45,
    78: 46,
    110: 46,
    79: 47,
    111: 47,
    88: 34,
    120: 34,
    89: 57,
    121: 57,
    90: 58,
    122: 58,
    91: 59,
    123: 59,
    92: 60,
    124: 60,
    93: 61,
    125: 61,
  },
  oT = {
    1: { n: "PtgElfLel", f: Rg },
    2: { n: "PtgElfRw", f: KC },
    3: { n: "PtgElfCol", f: zC },
    6: { n: "PtgElfRwV", f: YC },
    7: { n: "PtgElfColV", f: GC },
    10: { n: "PtgElfRadical", f: $C },
    11: { n: "PtgElfRadicalS", f: qC },
    13: { n: "PtgElfColS", f: HC },
    15: { n: "PtgElfColSV", f: WC },
    16: { n: "PtgElfRadicalLel", f: XC },
    25: { n: "PtgList", f: QC },
    29: { n: "PtgSxName", f: JC },
    255: {},
  },
  sT = {
    0: { n: "PtgAttrNoop", f: nT },
    1: { n: "PtgAttrSemi", f: hC },
    2: { n: "PtgAttrIf", f: uC },
    4: { n: "PtgAttrChoose", f: lC },
    8: { n: "PtgAttrGoto", f: dC },
    16: { n: "PtgAttrSum", f: wC },
    32: { n: "PtgAttrBaxcel", f: op },
    33: { n: "PtgAttrBaxcel", f: op },
    64: { n: "PtgAttrSpace", f: mC },
    65: { n: "PtgAttrSpaceSemi", f: pC },
    128: { n: "PtgAttrIfError", f: fC },
    255: {},
  };
function Ko(e, r, t, i) {
  if (i.biff < 8) return tr(e, r);
  for (var n = e.l + r, a = [], o = 0; o !== t.length; ++o)
    switch (t[o][0]) {
      case "PtgArray":
        (t[o][1] = DC(e, 0, i)), a.push(t[o][1]);
        break;
      case "PtgMemArea":
        (t[o][2] = FC(e, t[o][1], i)), a.push(t[o][2]);
        break;
      case "PtgExp":
        i && i.biff == 12 && ((t[o][1][1] = e.read_shift(4)), a.push(t[o][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + t[o][0];
      default:
        break;
    }
  return (r = n - e.l), r !== 0 && a.push(tr(e, r)), a;
}
function Yo(e, r, t) {
  for (var i = e.l + r, n, a, o = []; i != e.l; )
    (r = i - e.l),
      (a = e[e.l]),
      (n = sp[a] || sp[aT[a]]),
      (a === 24 || a === 25) && (n = (a === 24 ? oT : sT)[e[e.l + 1]]),
      !n || !n.f ? tr(e, r) : o.push([n.n, n.f(e, r, t)]);
  return o;
}
function cT(e) {
  for (var r = [], t = 0; t < e.length; ++t) {
    for (var i = e[t], n = [], a = 0; a < i.length; ++a) {
      var o = i[a];
      if (o)
        switch (o[0]) {
          case 2:
            n.push('"' + o[1].replace(/"/g, '""') + '"');
            break;
          default:
            n.push(o[1]);
        }
      else n.push("");
    }
    r.push(n.join(","));
  }
  return r.join(";");
}
var lT = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-",
};
function dT(e, r) {
  if (!e && !(r && r.biff <= 5 && r.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Og(e, r, t) {
  if (!e) return "SH33TJSERR0";
  if (t.biff > 8 && (!e.XTI || !e.XTI[r])) return e.SheetNames[r];
  if (!e.XTI) return "SH33TJSERR6";
  var i = e.XTI[r];
  if (t.biff < 8)
    return (
      r > 1e4 && (r -= 65536), r < 0 && (r = -r), r == 0 ? "" : e.XTI[r - 1]
    );
  if (!i) return "SH33TJSERR1";
  var n = "";
  if (t.biff > 8)
    switch (e[i[0]][0]) {
      case 357:
        return (
          (n = i[1] == -1 ? "#REF" : e.SheetNames[i[1]]),
          i[1] == i[2] ? n : n + ":" + e.SheetNames[i[2]]
        );
      case 358:
        return t.SID != null ? e.SheetNames[t.SID] : "SH33TJSSAME" + e[i[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[i[0]][0];
    }
  switch (e[i[0]][0][0]) {
    case 1025:
      return (
        (n = i[1] == -1 ? "#REF" : e.SheetNames[i[1]] || "SH33TJSERR3"),
        i[1] == i[2] ? n : n + ":" + e.SheetNames[i[2]]
      );
    case 14849:
      return e[i[0]]
        .slice(1)
        .map(function (a) {
          return a.Name;
        })
        .join(";;");
    default:
      return e[i[0]][0][3]
        ? ((n = i[1] == -1 ? "#REF" : e[i[0]][0][3][i[1]] || "SH33TJSERR4"),
          i[1] == i[2] ? n : n + ":" + e[i[0]][0][3][i[2]])
        : "SH33TJSERR2";
  }
}
function cp(e, r, t) {
  var i = Og(e, r, t);
  return i == "#REF" ? i : dT(i, t);
}
function Yt(e, r, t, i, n) {
  var a = (n && n.biff) || 8,
    o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } },
    s = [],
    c,
    l,
    d,
    u = 0,
    h = 0,
    m,
    p = "";
  if (!e[0] || !e[0][0]) return "";
  for (var f = -1, g = "", T = 0, E = e[0].length; T < E; ++T) {
    var x = e[0][T];
    switch (x[0]) {
      case "PtgUminus":
        s.push("-" + s.pop());
        break;
      case "PtgUplus":
        s.push("+" + s.pop());
        break;
      case "PtgPercent":
        s.push(s.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (((c = s.pop()), (l = s.pop()), f >= 0)) {
          switch (e[0][f][1][0]) {
            case 0:
              g = xt(" ", e[0][f][1][1]);
              break;
            case 1:
              g = xt("\r", e[0][f][1][1]);
              break;
            default:
              if (((g = ""), n.WTF))
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][f][1][0]);
          }
          (l = l + g), (f = -1);
        }
        s.push(l + lT[x[0]] + c);
        break;
      case "PtgIsect":
        (c = s.pop()), (l = s.pop()), s.push(l + " " + c);
        break;
      case "PtgUnion":
        (c = s.pop()), (l = s.pop()), s.push(l + "," + c);
        break;
      case "PtgRange":
        (c = s.pop()), (l = s.pop()), s.push(l + ":" + c);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        (d = Fo(x[1][1], o, n)), s.push(Do(d, a));
        break;
      case "PtgRefN":
        (d = t ? Fo(x[1][1], t, n) : x[1][1]), s.push(Do(d, a));
        break;
      case "PtgRef3d":
        (u = x[1][1]), (d = Fo(x[1][2], o, n)), (p = cp(i, u, n));
        var O = p;
        s.push(p + "!" + Do(d, a));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var z = x[1][0],
          F = x[1][1];
        z || (z = 0), (z &= 127);
        var C = z == 0 ? [] : s.slice(-z);
        (s.length -= z),
          F === "User" && (F = C.shift()),
          s.push(F + "(" + C.join(",") + ")");
        break;
      case "PtgBool":
        s.push(x[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        s.push(x[1]);
        break;
      case "PtgNum":
        s.push(String(x[1]));
        break;
      case "PtgStr":
        s.push('"' + x[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        s.push(x[1]);
        break;
      case "PtgAreaN":
        (m = zm(x[1][1], t ? { s: t } : o, n)), s.push(Hd(m, n));
        break;
      case "PtgArea":
        (m = zm(x[1][1], o, n)), s.push(Hd(m, n));
        break;
      case "PtgArea3d":
        (u = x[1][1]),
          (m = x[1][2]),
          (p = cp(i, u, n)),
          s.push(p + "!" + Hd(m, n));
        break;
      case "PtgAttrSum":
        s.push("SUM(" + s.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        h = x[1][2];
        var P = (i.names || [])[h - 1] || (i[0] || [])[h],
          M = P ? P.Name : "SH33TJSNAME" + String(h);
        M && M.slice(0, 6) == "_xlfn." && !n.xlfn && (M = M.slice(6)),
          s.push(M);
        break;
      case "PtgNameX":
        var X = x[1][1];
        h = x[1][2];
        var G;
        if (n.biff <= 5) X < 0 && (X = -X), i[X] && (G = i[X][h]);
        else {
          var R = "";
          if (
            (((i[X] || [])[0] || [])[0] == 14849 ||
              (((i[X] || [])[0] || [])[0] == 1025
                ? i[X][h] &&
                  i[X][h].itab > 0 &&
                  (R = i.SheetNames[i[X][h].itab - 1] + "!")
                : (R = i.SheetNames[h - 1] + "!")),
            i[X] && i[X][h])
          )
            R += i[X][h].Name;
          else if (i[0] && i[0][h]) R += i[0][h].Name;
          else {
            var re = (Og(i, X, n) || "").split(";;");
            re[h - 1] ? (R = re[h - 1]) : (R += "SH33TJSERRX");
          }
          s.push(R);
          break;
        }
        G || (G = { Name: "SH33TJSERRY" }), s.push(G.Name);
        break;
      case "PtgParen":
        var be = "(",
          oe = ")";
        if (f >= 0) {
          switch (((g = ""), e[0][f][1][0])) {
            case 2:
              be = xt(" ", e[0][f][1][1]) + be;
              break;
            case 3:
              be = xt("\r", e[0][f][1][1]) + be;
              break;
            case 4:
              oe = xt(" ", e[0][f][1][1]) + oe;
              break;
            case 5:
              oe = xt("\r", e[0][f][1][1]) + oe;
              break;
            default:
              if (n.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][f][1][0]);
          }
          f = -1;
        }
        s.push(be + s.pop() + oe);
        break;
      case "PtgRefErr":
        s.push("#REF!");
        break;
      case "PtgRefErr3d":
        s.push("#REF!");
        break;
      case "PtgExp":
        d = { c: x[1][1], r: x[1][0] };
        var Ce = { c: t.c, r: t.r };
        if (i.sharedf[Ie(d)]) {
          var _e = i.sharedf[Ie(d)];
          s.push(Yt(_e, o, Ce, i, n));
        } else {
          var He = !1;
          for (c = 0; c != i.arrayf.length; ++c)
            if (
              ((l = i.arrayf[c]),
              !(d.c < l[0].s.c || d.c > l[0].e.c) &&
                !(d.r < l[0].s.r || d.r > l[0].e.r))
            ) {
              s.push(Yt(l[1], o, Ce, i, n)), (He = !0);
              break;
            }
          He || s.push(x[1]);
        }
        break;
      case "PtgArray":
        s.push("{" + cT(x[1]) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        f = T;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        s.push("");
        break;
      case "PtgAreaErr":
        s.push("#REF!");
        break;
      case "PtgAreaErr3d":
        s.push("#REF!");
        break;
      case "PtgList":
        s.push("Table" + x[1].idx + "[#" + x[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(x));
      default:
        throw new Error("Unrecognized Formula Token: " + String(x));
    }
    var le = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (n.biff != 3 && f >= 0 && le.indexOf(e[0][T][0]) == -1) {
      x = e[0][f];
      var ye = !0;
      switch (x[1][0]) {
        case 4:
          ye = !1;
        case 0:
          g = xt(" ", x[1][1]);
          break;
        case 5:
          ye = !1;
        case 1:
          g = xt("\r", x[1][1]);
          break;
        default:
          if (((g = ""), n.WTF))
            throw new Error("Unexpected PtgAttrSpaceType " + x[1][0]);
      }
      s.push((ye ? g : "") + s.pop() + (ye ? "" : g)), (f = -1);
    }
  }
  if (s.length > 1 && n.WTF) throw new Error("bad formula stack");
  return s[0];
}
function uT(e, r, t) {
  var i = e.l + r,
    n = t.biff == 2 ? 1 : 2,
    a,
    o = e.read_shift(n);
  if (o == 65535) return [[], tr(e, r - 2)];
  var s = Yo(e, o, t);
  return r !== o + n && (a = Ko(e, r - o - n, s, t)), (e.l = i), [s, a];
}
function fT(e, r, t) {
  var i = e.l + r,
    n = t.biff == 2 ? 1 : 2,
    a,
    o = e.read_shift(n);
  if (o == 65535) return [[], tr(e, r - 2)];
  var s = Yo(e, o, t);
  return r !== o + n && (a = Ko(e, r - o - n, s, t)), (e.l = i), [s, a];
}
function hT(e, r, t, i) {
  var n = e.l + r,
    a = Yo(e, i, t),
    o;
  return n !== e.l && (o = Ko(e, n - e.l, a, t)), [a, o];
}
function mT(e, r, t) {
  var i = e.l + r,
    n,
    a = e.read_shift(2),
    o = Yo(e, a, t);
  return a == 65535
    ? [[], tr(e, r - 2)]
    : (r !== a + 2 && (n = Ko(e, i - a - 2, o, t)), [o, n]);
}
function pT(e) {
  var r;
  if (ki(e, e.l + 6) !== 65535) return [Zt(e), "n"];
  switch (e[e.l]) {
    case 0:
      return (e.l += 8), ["String", "s"];
    case 1:
      return (r = e[e.l + 2] === 1), (e.l += 8), [r, "b"];
    case 2:
      return (r = e[e.l + 2]), (e.l += 8), [r, "e"];
    case 3:
      return (e.l += 8), ["", "s"];
  }
  return [];
}
function $d(e, r, t) {
  var i = e.l + r,
    n = di(e, 6);
  t.biff == 2 && ++e.l;
  var a = pT(e, 8),
    o = e.read_shift(1);
  t.biff != 2 && (e.read_shift(1), t.biff >= 5 && e.read_shift(4));
  var s = fT(e, i - e.l, t);
  return { cell: n, val: a[0], formula: s, shared: (o >> 3) & 1, tt: a[1] };
}
function jc(e, r, t) {
  var i = e.read_shift(4),
    n = Yo(e, i, t),
    a = e.read_shift(4),
    o = a > 0 ? Ko(e, a, n, t) : null;
  return [n, o];
}
var gT = jc,
  Vc = jc,
  vT = jc,
  xT = jc,
  _T = {
    0: "BEEP",
    1: "OPEN",
    2: "OPEN.LINKS",
    3: "CLOSE.ALL",
    4: "SAVE",
    5: "SAVE.AS",
    6: "FILE.DELETE",
    7: "PAGE.SETUP",
    8: "PRINT",
    9: "PRINTER.SETUP",
    10: "QUIT",
    11: "NEW.WINDOW",
    12: "ARRANGE.ALL",
    13: "WINDOW.SIZE",
    14: "WINDOW.MOVE",
    15: "FULL",
    16: "CLOSE",
    17: "RUN",
    22: "SET.PRINT.AREA",
    23: "SET.PRINT.TITLES",
    24: "SET.PAGE.BREAK",
    25: "REMOVE.PAGE.BREAK",
    26: "FONT",
    27: "DISPLAY",
    28: "PROTECT.DOCUMENT",
    29: "PRECISION",
    30: "A1.R1C1",
    31: "CALCULATE.NOW",
    32: "CALCULATION",
    34: "DATA.FIND",
    35: "EXTRACT",
    36: "DATA.DELETE",
    37: "SET.DATABASE",
    38: "SET.CRITERIA",
    39: "SORT",
    40: "DATA.SERIES",
    41: "TABLE",
    42: "FORMAT.NUMBER",
    43: "ALIGNMENT",
    44: "STYLE",
    45: "BORDER",
    46: "CELL.PROTECTION",
    47: "COLUMN.WIDTH",
    48: "UNDO",
    49: "CUT",
    50: "COPY",
    51: "PASTE",
    52: "CLEAR",
    53: "PASTE.SPECIAL",
    54: "EDIT.DELETE",
    55: "INSERT",
    56: "FILL.RIGHT",
    57: "FILL.DOWN",
    61: "DEFINE.NAME",
    62: "CREATE.NAMES",
    63: "FORMULA.GOTO",
    64: "FORMULA.FIND",
    65: "SELECT.LAST.CELL",
    66: "SHOW.ACTIVE.CELL",
    67: "GALLERY.AREA",
    68: "GALLERY.BAR",
    69: "GALLERY.COLUMN",
    70: "GALLERY.LINE",
    71: "GALLERY.PIE",
    72: "GALLERY.SCATTER",
    73: "COMBINATION",
    74: "PREFERRED",
    75: "ADD.OVERLAY",
    76: "GRIDLINES",
    77: "SET.PREFERRED",
    78: "AXES",
    79: "LEGEND",
    80: "ATTACH.TEXT",
    81: "ADD.ARROW",
    82: "SELECT.CHART",
    83: "SELECT.PLOT.AREA",
    84: "PATTERNS",
    85: "MAIN.CHART",
    86: "OVERLAY",
    87: "SCALE",
    88: "FORMAT.LEGEND",
    89: "FORMAT.TEXT",
    90: "EDIT.REPEAT",
    91: "PARSE",
    92: "JUSTIFY",
    93: "HIDE",
    94: "UNHIDE",
    95: "WORKSPACE",
    96: "FORMULA",
    97: "FORMULA.FILL",
    98: "FORMULA.ARRAY",
    99: "DATA.FIND.NEXT",
    100: "DATA.FIND.PREV",
    101: "FORMULA.FIND.NEXT",
    102: "FORMULA.FIND.PREV",
    103: "ACTIVATE",
    104: "ACTIVATE.NEXT",
    105: "ACTIVATE.PREV",
    106: "UNLOCKED.NEXT",
    107: "UNLOCKED.PREV",
    108: "COPY.PICTURE",
    109: "SELECT",
    110: "DELETE.NAME",
    111: "DELETE.FORMAT",
    112: "VLINE",
    113: "HLINE",
    114: "VPAGE",
    115: "HPAGE",
    116: "VSCROLL",
    117: "HSCROLL",
    118: "ALERT",
    119: "NEW",
    120: "CANCEL.COPY",
    121: "SHOW.CLIPBOARD",
    122: "MESSAGE",
    124: "PASTE.LINK",
    125: "APP.ACTIVATE",
    126: "DELETE.ARROW",
    127: "ROW.HEIGHT",
    128: "FORMAT.MOVE",
    129: "FORMAT.SIZE",
    130: "FORMULA.REPLACE",
    131: "SEND.KEYS",
    132: "SELECT.SPECIAL",
    133: "APPLY.NAMES",
    134: "REPLACE.FONT",
    135: "FREEZE.PANES",
    136: "SHOW.INFO",
    137: "SPLIT",
    138: "ON.WINDOW",
    139: "ON.DATA",
    140: "DISABLE.INPUT",
    142: "OUTLINE",
    143: "LIST.NAMES",
    144: "FILE.CLOSE",
    145: "SAVE.WORKBOOK",
    146: "DATA.FORM",
    147: "COPY.CHART",
    148: "ON.TIME",
    149: "WAIT",
    150: "FORMAT.FONT",
    151: "FILL.UP",
    152: "FILL.LEFT",
    153: "DELETE.OVERLAY",
    155: "SHORT.MENUS",
    159: "SET.UPDATE.STATUS",
    161: "COLOR.PALETTE",
    162: "DELETE.STYLE",
    163: "WINDOW.RESTORE",
    164: "WINDOW.MAXIMIZE",
    166: "CHANGE.LINK",
    167: "CALCULATE.DOCUMENT",
    168: "ON.KEY",
    169: "APP.RESTORE",
    170: "APP.MOVE",
    171: "APP.SIZE",
    172: "APP.MINIMIZE",
    173: "APP.MAXIMIZE",
    174: "BRING.TO.FRONT",
    175: "SEND.TO.BACK",
    185: "MAIN.CHART.TYPE",
    186: "OVERLAY.CHART.TYPE",
    187: "SELECT.END",
    188: "OPEN.MAIL",
    189: "SEND.MAIL",
    190: "STANDARD.FONT",
    191: "CONSOLIDATE",
    192: "SORT.SPECIAL",
    193: "GALLERY.3D.AREA",
    194: "GALLERY.3D.COLUMN",
    195: "GALLERY.3D.LINE",
    196: "GALLERY.3D.PIE",
    197: "VIEW.3D",
    198: "GOAL.SEEK",
    199: "WORKGROUP",
    200: "FILL.GROUP",
    201: "UPDATE.LINK",
    202: "PROMOTE",
    203: "DEMOTE",
    204: "SHOW.DETAIL",
    206: "UNGROUP",
    207: "OBJECT.PROPERTIES",
    208: "SAVE.NEW.OBJECT",
    209: "SHARE",
    210: "SHARE.NAME",
    211: "DUPLICATE",
    212: "APPLY.STYLE",
    213: "ASSIGN.TO.OBJECT",
    214: "OBJECT.PROTECTION",
    215: "HIDE.OBJECT",
    216: "SET.EXTRACT",
    217: "CREATE.PUBLISHER",
    218: "SUBSCRIBE.TO",
    219: "ATTRIBUTES",
    220: "SHOW.TOOLBAR",
    222: "PRINT.PREVIEW",
    223: "EDIT.COLOR",
    224: "SHOW.LEVELS",
    225: "FORMAT.MAIN",
    226: "FORMAT.OVERLAY",
    227: "ON.RECALC",
    228: "EDIT.SERIES",
    229: "DEFINE.STYLE",
    240: "LINE.PRINT",
    243: "ENTER.DATA",
    249: "GALLERY.RADAR",
    250: "MERGE.STYLES",
    251: "EDITION.OPTIONS",
    252: "PASTE.PICTURE",
    253: "PASTE.PICTURE.LINK",
    254: "SPELLING",
    256: "ZOOM",
    259: "INSERT.OBJECT",
    260: "WINDOW.MINIMIZE",
    265: "SOUND.NOTE",
    266: "SOUND.PLAY",
    267: "FORMAT.SHAPE",
    268: "EXTEND.POLYGON",
    269: "FORMAT.AUTO",
    272: "GALLERY.3D.BAR",
    273: "GALLERY.3D.SURFACE",
    274: "FILL.AUTO",
    276: "CUSTOMIZE.TOOLBAR",
    277: "ADD.TOOL",
    278: "EDIT.OBJECT",
    279: "ON.DOUBLECLICK",
    280: "ON.ENTRY",
    281: "WORKBOOK.ADD",
    282: "WORKBOOK.MOVE",
    283: "WORKBOOK.COPY",
    284: "WORKBOOK.OPTIONS",
    285: "SAVE.WORKSPACE",
    288: "CHART.WIZARD",
    289: "DELETE.TOOL",
    290: "MOVE.TOOL",
    291: "WORKBOOK.SELECT",
    292: "WORKBOOK.ACTIVATE",
    293: "ASSIGN.TO.TOOL",
    295: "COPY.TOOL",
    296: "RESET.TOOL",
    297: "CONSTRAIN.NUMERIC",
    298: "PASTE.TOOL",
    302: "WORKBOOK.NEW",
    305: "SCENARIO.CELLS",
    306: "SCENARIO.DELETE",
    307: "SCENARIO.ADD",
    308: "SCENARIO.EDIT",
    309: "SCENARIO.SHOW",
    310: "SCENARIO.SHOW.NEXT",
    311: "SCENARIO.SUMMARY",
    312: "PIVOT.TABLE.WIZARD",
    313: "PIVOT.FIELD.PROPERTIES",
    314: "PIVOT.FIELD",
    315: "PIVOT.ITEM",
    316: "PIVOT.ADD.FIELDS",
    318: "OPTIONS.CALCULATION",
    319: "OPTIONS.EDIT",
    320: "OPTIONS.VIEW",
    321: "ADDIN.MANAGER",
    322: "MENU.EDITOR",
    323: "ATTACH.TOOLBARS",
    324: "VBAActivate",
    325: "OPTIONS.CHART",
    328: "VBA.INSERT.FILE",
    330: "VBA.PROCEDURE.DEFINITION",
    336: "ROUTING.SLIP",
    338: "ROUTE.DOCUMENT",
    339: "MAIL.LOGON",
    342: "INSERT.PICTURE",
    343: "EDIT.TOOL",
    344: "GALLERY.DOUGHNUT",
    350: "CHART.TREND",
    352: "PIVOT.ITEM.PROPERTIES",
    354: "WORKBOOK.INSERT",
    355: "OPTIONS.TRANSITION",
    356: "OPTIONS.GENERAL",
    370: "FILTER.ADVANCED",
    373: "MAIL.ADD.MAILER",
    374: "MAIL.DELETE.MAILER",
    375: "MAIL.REPLY",
    376: "MAIL.REPLY.ALL",
    377: "MAIL.FORWARD",
    378: "MAIL.NEXT.LETTER",
    379: "DATA.LABEL",
    380: "INSERT.TITLE",
    381: "FONT.PROPERTIES",
    382: "MACRO.OPTIONS",
    383: "WORKBOOK.HIDE",
    384: "WORKBOOK.UNHIDE",
    385: "WORKBOOK.DELETE",
    386: "WORKBOOK.NAME",
    388: "GALLERY.CUSTOM",
    390: "ADD.CHART.AUTOFORMAT",
    391: "DELETE.CHART.AUTOFORMAT",
    392: "CHART.ADD.DATA",
    393: "AUTO.OUTLINE",
    394: "TAB.ORDER",
    395: "SHOW.DIALOG",
    396: "SELECT.ALL",
    397: "UNGROUP.SHEETS",
    398: "SUBTOTAL.CREATE",
    399: "SUBTOTAL.REMOVE",
    400: "RENAME.OBJECT",
    412: "WORKBOOK.SCROLL",
    413: "WORKBOOK.NEXT",
    414: "WORKBOOK.PREV",
    415: "WORKBOOK.TAB.SPLIT",
    416: "FULL.SCREEN",
    417: "WORKBOOK.PROTECT",
    420: "SCROLLBAR.PROPERTIES",
    421: "PIVOT.SHOW.PAGES",
    422: "TEXT.TO.COLUMNS",
    423: "FORMAT.CHARTTYPE",
    424: "LINK.FORMAT",
    425: "TRACER.DISPLAY",
    430: "TRACER.NAVIGATE",
    431: "TRACER.CLEAR",
    432: "TRACER.ERROR",
    433: "PIVOT.FIELD.GROUP",
    434: "PIVOT.FIELD.UNGROUP",
    435: "CHECKBOX.PROPERTIES",
    436: "LABEL.PROPERTIES",
    437: "LISTBOX.PROPERTIES",
    438: "EDITBOX.PROPERTIES",
    439: "PIVOT.REFRESH",
    440: "LINK.COMBO",
    441: "OPEN.TEXT",
    442: "HIDE.DIALOG",
    443: "SET.DIALOG.FOCUS",
    444: "ENABLE.OBJECT",
    445: "PUSHBUTTON.PROPERTIES",
    446: "SET.DIALOG.DEFAULT",
    447: "FILTER",
    448: "FILTER.SHOW.ALL",
    449: "CLEAR.OUTLINE",
    450: "FUNCTION.WIZARD",
    451: "ADD.LIST.ITEM",
    452: "SET.LIST.ITEM",
    453: "REMOVE.LIST.ITEM",
    454: "SELECT.LIST.ITEM",
    455: "SET.CONTROL.VALUE",
    456: "SAVE.COPY.AS",
    458: "OPTIONS.LISTS.ADD",
    459: "OPTIONS.LISTS.DELETE",
    460: "SERIES.AXES",
    461: "SERIES.X",
    462: "SERIES.Y",
    463: "ERRORBAR.X",
    464: "ERRORBAR.Y",
    465: "FORMAT.CHART",
    466: "SERIES.ORDER",
    467: "MAIL.LOGOFF",
    468: "CLEAR.ROUTING.SLIP",
    469: "APP.ACTIVATE.MICROSOFT",
    470: "MAIL.EDIT.MAILER",
    471: "ON.SHEET",
    472: "STANDARD.WIDTH",
    473: "SCENARIO.MERGE",
    474: "SUMMARY.INFO",
    475: "FIND.FILE",
    476: "ACTIVE.CELL.FONT",
    477: "ENABLE.TIPWIZARD",
    478: "VBA.MAKE.ADDIN",
    480: "INSERTDATATABLE",
    481: "WORKGROUP.OPTIONS",
    482: "MAIL.SEND.MAILER",
    485: "AUTOCORRECT",
    489: "POST.DOCUMENT",
    491: "PICKLIST",
    493: "VIEW.SHOW",
    494: "VIEW.DEFINE",
    495: "VIEW.DELETE",
    509: "SHEET.BACKGROUND",
    510: "INSERT.MAP.OBJECT",
    511: "OPTIONS.MENONO",
    517: "MSOCHECKS",
    518: "NORMAL",
    519: "LAYOUT",
    520: "RM.PRINT.AREA",
    521: "CLEAR.PRINT.AREA",
    522: "ADD.PRINT.AREA",
    523: "MOVE.BRK",
    545: "HIDECURR.NOTE",
    546: "HIDEALL.NOTES",
    547: "DELETE.NOTE",
    548: "TRAVERSE.NOTES",
    549: "ACTIVATE.NOTES",
    620: "PROTECT.REVISIONS",
    621: "UNPROTECT.REVISIONS",
    647: "OPTIONS.ME",
    653: "WEB.PUBLISH",
    667: "NEWWEBQUERY",
    673: "PIVOT.TABLE.CHART",
    753: "OPTIONS.SAVE",
    755: "OPTIONS.SPELL",
    808: "HIDEALL.INKANNOTS",
  },
  Ng = {
    0: "COUNT",
    1: "IF",
    2: "ISNA",
    3: "ISERROR",
    4: "SUM",
    5: "AVERAGE",
    6: "MIN",
    7: "MAX",
    8: "ROW",
    9: "COLUMN",
    10: "NA",
    11: "NPV",
    12: "STDEV",
    13: "DOLLAR",
    14: "FIXED",
    15: "SIN",
    16: "COS",
    17: "TAN",
    18: "ATAN",
    19: "PI",
    20: "SQRT",
    21: "EXP",
    22: "LN",
    23: "LOG10",
    24: "ABS",
    25: "INT",
    26: "SIGN",
    27: "ROUND",
    28: "LOOKUP",
    29: "INDEX",
    30: "REPT",
    31: "MID",
    32: "LEN",
    33: "VALUE",
    34: "TRUE",
    35: "FALSE",
    36: "AND",
    37: "OR",
    38: "NOT",
    39: "MOD",
    40: "DCOUNT",
    41: "DSUM",
    42: "DAVERAGE",
    43: "DMIN",
    44: "DMAX",
    45: "DSTDEV",
    46: "VAR",
    47: "DVAR",
    48: "TEXT",
    49: "LINEST",
    50: "TREND",
    51: "LOGEST",
    52: "GROWTH",
    53: "GOTO",
    54: "HALT",
    55: "RETURN",
    56: "PV",
    57: "FV",
    58: "NPER",
    59: "PMT",
    60: "RATE",
    61: "MIRR",
    62: "IRR",
    63: "RAND",
    64: "MATCH",
    65: "DATE",
    66: "TIME",
    67: "DAY",
    68: "MONTH",
    69: "YEAR",
    70: "WEEKDAY",
    71: "HOUR",
    72: "MINUTE",
    73: "SECOND",
    74: "NOW",
    75: "AREAS",
    76: "ROWS",
    77: "COLUMNS",
    78: "OFFSET",
    79: "ABSREF",
    80: "RELREF",
    81: "ARGUMENT",
    82: "SEARCH",
    83: "TRANSPOSE",
    84: "ERROR",
    85: "STEP",
    86: "TYPE",
    87: "ECHO",
    88: "SET.NAME",
    89: "CALLER",
    90: "DEREF",
    91: "WINDOWS",
    92: "SERIES",
    93: "DOCUMENTS",
    94: "ACTIVE.CELL",
    95: "SELECTION",
    96: "RESULT",
    97: "ATAN2",
    98: "ASIN",
    99: "ACOS",
    100: "CHOOSE",
    101: "HLOOKUP",
    102: "VLOOKUP",
    103: "LINKS",
    104: "INPUT",
    105: "ISREF",
    106: "GET.FORMULA",
    107: "GET.NAME",
    108: "SET.VALUE",
    109: "LOG",
    110: "EXEC",
    111: "CHAR",
    112: "LOWER",
    113: "UPPER",
    114: "PROPER",
    115: "LEFT",
    116: "RIGHT",
    117: "EXACT",
    118: "TRIM",
    119: "REPLACE",
    120: "SUBSTITUTE",
    121: "CODE",
    122: "NAMES",
    123: "DIRECTORY",
    124: "FIND",
    125: "CELL",
    126: "ISERR",
    127: "ISTEXT",
    128: "ISNUMBER",
    129: "ISBLANK",
    130: "T",
    131: "N",
    132: "FOPEN",
    133: "FCLOSE",
    134: "FSIZE",
    135: "FREADLN",
    136: "FREAD",
    137: "FWRITELN",
    138: "FWRITE",
    139: "FPOS",
    140: "DATEVALUE",
    141: "TIMEVALUE",
    142: "SLN",
    143: "SYD",
    144: "DDB",
    145: "GET.DEF",
    146: "REFTEXT",
    147: "TEXTREF",
    148: "INDIRECT",
    149: "REGISTER",
    150: "CALL",
    151: "ADD.BAR",
    152: "ADD.MENU",
    153: "ADD.COMMAND",
    154: "ENABLE.COMMAND",
    155: "CHECK.COMMAND",
    156: "RENAME.COMMAND",
    157: "SHOW.BAR",
    158: "DELETE.MENU",
    159: "DELETE.COMMAND",
    160: "GET.CHART.ITEM",
    161: "DIALOG.BOX",
    162: "CLEAN",
    163: "MDETERM",
    164: "MINVERSE",
    165: "MMULT",
    166: "FILES",
    167: "IPMT",
    168: "PPMT",
    169: "COUNTA",
    170: "CANCEL.KEY",
    171: "FOR",
    172: "WHILE",
    173: "BREAK",
    174: "NEXT",
    175: "INITIATE",
    176: "REQUEST",
    177: "POKE",
    178: "EXECUTE",
    179: "TERMINATE",
    180: "RESTART",
    181: "HELP",
    182: "GET.BAR",
    183: "PRODUCT",
    184: "FACT",
    185: "GET.CELL",
    186: "GET.WORKSPACE",
    187: "GET.WINDOW",
    188: "GET.DOCUMENT",
    189: "DPRODUCT",
    190: "ISNONTEXT",
    191: "GET.NOTE",
    192: "NOTE",
    193: "STDEVP",
    194: "VARP",
    195: "DSTDEVP",
    196: "DVARP",
    197: "TRUNC",
    198: "ISLOGICAL",
    199: "DCOUNTA",
    200: "DELETE.BAR",
    201: "UNREGISTER",
    204: "USDOLLAR",
    205: "FINDB",
    206: "SEARCHB",
    207: "REPLACEB",
    208: "LEFTB",
    209: "RIGHTB",
    210: "MIDB",
    211: "LENB",
    212: "ROUNDUP",
    213: "ROUNDDOWN",
    214: "ASC",
    215: "DBCS",
    216: "RANK",
    219: "ADDRESS",
    220: "DAYS360",
    221: "TODAY",
    222: "VDB",
    223: "ELSE",
    224: "ELSE.IF",
    225: "END.IF",
    226: "FOR.CELL",
    227: "MEDIAN",
    228: "SUMPRODUCT",
    229: "SINH",
    230: "COSH",
    231: "TANH",
    232: "ASINH",
    233: "ACOSH",
    234: "ATANH",
    235: "DGET",
    236: "CREATE.OBJECT",
    237: "VOLATILE",
    238: "LAST.ERROR",
    239: "CUSTOM.UNDO",
    240: "CUSTOM.REPEAT",
    241: "FORMULA.CONVERT",
    242: "GET.LINK.INFO",
    243: "TEXT.BOX",
    244: "INFO",
    245: "GROUP",
    246: "GET.OBJECT",
    247: "DB",
    248: "PAUSE",
    251: "RESUME",
    252: "FREQUENCY",
    253: "ADD.TOOLBAR",
    254: "DELETE.TOOLBAR",
    255: "User",
    256: "RESET.TOOLBAR",
    257: "EVALUATE",
    258: "GET.TOOLBAR",
    259: "GET.TOOL",
    260: "SPELLING.CHECK",
    261: "ERROR.TYPE",
    262: "APP.TITLE",
    263: "WINDOW.TITLE",
    264: "SAVE.TOOLBAR",
    265: "ENABLE.TOOL",
    266: "PRESS.TOOL",
    267: "REGISTER.ID",
    268: "GET.WORKBOOK",
    269: "AVEDEV",
    270: "BETADIST",
    271: "GAMMALN",
    272: "BETAINV",
    273: "BINOMDIST",
    274: "CHIDIST",
    275: "CHIINV",
    276: "COMBIN",
    277: "CONFIDENCE",
    278: "CRITBINOM",
    279: "EVEN",
    280: "EXPONDIST",
    281: "FDIST",
    282: "FINV",
    283: "FISHER",
    284: "FISHERINV",
    285: "FLOOR",
    286: "GAMMADIST",
    287: "GAMMAINV",
    288: "CEILING",
    289: "HYPGEOMDIST",
    290: "LOGNORMDIST",
    291: "LOGINV",
    292: "NEGBINOMDIST",
    293: "NORMDIST",
    294: "NORMSDIST",
    295: "NORMINV",
    296: "NORMSINV",
    297: "STANDARDIZE",
    298: "ODD",
    299: "PERMUT",
    300: "POISSON",
    301: "TDIST",
    302: "WEIBULL",
    303: "SUMXMY2",
    304: "SUMX2MY2",
    305: "SUMX2PY2",
    306: "CHITEST",
    307: "CORREL",
    308: "COVAR",
    309: "FORECAST",
    310: "FTEST",
    311: "INTERCEPT",
    312: "PEARSON",
    313: "RSQ",
    314: "STEYX",
    315: "SLOPE",
    316: "TTEST",
    317: "PROB",
    318: "DEVSQ",
    319: "GEOMEAN",
    320: "HARMEAN",
    321: "SUMSQ",
    322: "KURT",
    323: "SKEW",
    324: "ZTEST",
    325: "LARGE",
    326: "SMALL",
    327: "QUARTILE",
    328: "PERCENTILE",
    329: "PERCENTRANK",
    330: "MODE",
    331: "TRIMMEAN",
    332: "TINV",
    334: "MOVIE.COMMAND",
    335: "GET.MOVIE",
    336: "CONCATENATE",
    337: "POWER",
    338: "PIVOT.ADD.DATA",
    339: "GET.PIVOT.TABLE",
    340: "GET.PIVOT.FIELD",
    341: "GET.PIVOT.ITEM",
    342: "RADIANS",
    343: "DEGREES",
    344: "SUBTOTAL",
    345: "SUMIF",
    346: "COUNTIF",
    347: "COUNTBLANK",
    348: "SCENARIO.GET",
    349: "OPTIONS.LISTS.GET",
    350: "ISPMT",
    351: "DATEDIF",
    352: "DATESTRING",
    353: "NUMBERSTRING",
    354: "ROMAN",
    355: "OPEN.DIALOG",
    356: "SAVE.DIALOG",
    357: "VIEW.GET",
    358: "GETPIVOTDATA",
    359: "HYPERLINK",
    360: "PHONETIC",
    361: "AVERAGEA",
    362: "MAXA",
    363: "MINA",
    364: "STDEVPA",
    365: "VARPA",
    366: "STDEVA",
    367: "VARA",
    368: "BAHTTEXT",
    369: "THAIDAYOFWEEK",
    370: "THAIDIGIT",
    371: "THAIMONTHOFYEAR",
    372: "THAINUMSOUND",
    373: "THAINUMSTRING",
    374: "THAISTRINGLENGTH",
    375: "ISTHAIDIGIT",
    376: "ROUNDBAHTDOWN",
    377: "ROUNDBAHTUP",
    378: "THAIYEAR",
    379: "RTD",
    380: "CUBEVALUE",
    381: "CUBEMEMBER",
    382: "CUBEMEMBERPROPERTY",
    383: "CUBERANKEDMEMBER",
    384: "HEX2BIN",
    385: "HEX2DEC",
    386: "HEX2OCT",
    387: "DEC2BIN",
    388: "DEC2HEX",
    389: "DEC2OCT",
    390: "OCT2BIN",
    391: "OCT2HEX",
    392: "OCT2DEC",
    393: "BIN2DEC",
    394: "BIN2OCT",
    395: "BIN2HEX",
    396: "IMSUB",
    397: "IMDIV",
    398: "IMPOWER",
    399: "IMABS",
    400: "IMSQRT",
    401: "IMLN",
    402: "IMLOG2",
    403: "IMLOG10",
    404: "IMSIN",
    405: "IMCOS",
    406: "IMEXP",
    407: "IMARGUMENT",
    408: "IMCONJUGATE",
    409: "IMAGINARY",
    410: "IMREAL",
    411: "COMPLEX",
    412: "IMSUM",
    413: "IMPRODUCT",
    414: "SERIESSUM",
    415: "FACTDOUBLE",
    416: "SQRTPI",
    417: "QUOTIENT",
    418: "DELTA",
    419: "GESTEP",
    420: "ISEVEN",
    421: "ISODD",
    422: "MROUND",
    423: "ERF",
    424: "ERFC",
    425: "BESSELJ",
    426: "BESSELK",
    427: "BESSELY",
    428: "BESSELI",
    429: "XIRR",
    430: "XNPV",
    431: "PRICEMAT",
    432: "YIELDMAT",
    433: "INTRATE",
    434: "RECEIVED",
    435: "DISC",
    436: "PRICEDISC",
    437: "YIELDDISC",
    438: "TBILLEQ",
    439: "TBILLPRICE",
    440: "TBILLYIELD",
    441: "PRICE",
    442: "YIELD",
    443: "DOLLARDE",
    444: "DOLLARFR",
    445: "NOMINAL",
    446: "EFFECT",
    447: "CUMPRINC",
    448: "CUMIPMT",
    449: "EDATE",
    450: "EOMONTH",
    451: "YEARFRAC",
    452: "COUPDAYBS",
    453: "COUPDAYS",
    454: "COUPDAYSNC",
    455: "COUPNCD",
    456: "COUPNUM",
    457: "COUPPCD",
    458: "DURATION",
    459: "MDURATION",
    460: "ODDLPRICE",
    461: "ODDLYIELD",
    462: "ODDFPRICE",
    463: "ODDFYIELD",
    464: "RANDBETWEEN",
    465: "WEEKNUM",
    466: "AMORDEGRC",
    467: "AMORLINC",
    468: "CONVERT",
    724: "SHEETJS",
    469: "ACCRINT",
    470: "ACCRINTM",
    471: "WORKDAY",
    472: "NETWORKDAYS",
    473: "GCD",
    474: "MULTINOMIAL",
    475: "LCM",
    476: "FVSCHEDULE",
    477: "CUBEKPIMEMBER",
    478: "CUBESET",
    479: "CUBESETCOUNT",
    480: "IFERROR",
    481: "COUNTIFS",
    482: "SUMIFS",
    483: "AVERAGEIF",
    484: "AVERAGEIFS",
  },
  bT = {
    2: 1,
    3: 1,
    10: 0,
    15: 1,
    16: 1,
    17: 1,
    18: 1,
    19: 0,
    20: 1,
    21: 1,
    22: 1,
    23: 1,
    24: 1,
    25: 1,
    26: 1,
    27: 2,
    30: 2,
    31: 3,
    32: 1,
    33: 1,
    34: 0,
    35: 0,
    38: 1,
    39: 2,
    40: 3,
    41: 3,
    42: 3,
    43: 3,
    44: 3,
    45: 3,
    47: 3,
    48: 2,
    53: 1,
    61: 3,
    63: 0,
    65: 3,
    66: 3,
    67: 1,
    68: 1,
    69: 1,
    70: 1,
    71: 1,
    72: 1,
    73: 1,
    74: 0,
    75: 1,
    76: 1,
    77: 1,
    79: 2,
    80: 2,
    83: 1,
    85: 0,
    86: 1,
    89: 0,
    90: 1,
    94: 0,
    95: 0,
    97: 2,
    98: 1,
    99: 1,
    101: 3,
    102: 3,
    105: 1,
    106: 1,
    108: 2,
    111: 1,
    112: 1,
    113: 1,
    114: 1,
    117: 2,
    118: 1,
    119: 4,
    121: 1,
    126: 1,
    127: 1,
    128: 1,
    129: 1,
    130: 1,
    131: 1,
    133: 1,
    134: 1,
    135: 1,
    136: 2,
    137: 2,
    138: 2,
    140: 1,
    141: 1,
    142: 3,
    143: 4,
    144: 4,
    161: 1,
    162: 1,
    163: 1,
    164: 1,
    165: 2,
    172: 1,
    175: 2,
    176: 2,
    177: 3,
    178: 2,
    179: 1,
    184: 1,
    186: 1,
    189: 3,
    190: 1,
    195: 3,
    196: 3,
    197: 1,
    198: 1,
    199: 3,
    201: 1,
    207: 4,
    210: 3,
    211: 1,
    212: 2,
    213: 2,
    214: 1,
    215: 1,
    225: 0,
    229: 1,
    230: 1,
    231: 1,
    232: 1,
    233: 1,
    234: 1,
    235: 3,
    244: 1,
    247: 4,
    252: 2,
    257: 1,
    261: 1,
    271: 1,
    273: 4,
    274: 2,
    275: 2,
    276: 2,
    277: 3,
    278: 3,
    279: 1,
    280: 3,
    281: 3,
    282: 3,
    283: 1,
    284: 1,
    285: 2,
    286: 4,
    287: 3,
    288: 2,
    289: 4,
    290: 3,
    291: 3,
    292: 3,
    293: 4,
    294: 1,
    295: 3,
    296: 1,
    297: 3,
    298: 1,
    299: 2,
    300: 3,
    301: 3,
    302: 4,
    303: 2,
    304: 2,
    305: 2,
    306: 2,
    307: 2,
    308: 2,
    309: 3,
    310: 2,
    311: 2,
    312: 2,
    313: 2,
    314: 2,
    315: 2,
    316: 4,
    325: 2,
    326: 2,
    327: 2,
    328: 2,
    331: 2,
    332: 2,
    337: 2,
    342: 1,
    343: 1,
    346: 2,
    347: 1,
    350: 4,
    351: 3,
    352: 1,
    353: 2,
    360: 1,
    368: 1,
    369: 1,
    370: 1,
    371: 1,
    372: 1,
    373: 1,
    374: 1,
    375: 1,
    376: 1,
    377: 1,
    378: 1,
    382: 3,
    385: 1,
    392: 1,
    393: 1,
    396: 2,
    397: 2,
    398: 2,
    399: 1,
    400: 1,
    401: 1,
    402: 1,
    403: 1,
    404: 1,
    405: 1,
    406: 1,
    407: 1,
    408: 1,
    409: 1,
    410: 1,
    414: 4,
    415: 1,
    416: 1,
    417: 2,
    420: 1,
    421: 1,
    422: 2,
    424: 1,
    425: 2,
    426: 2,
    427: 2,
    428: 2,
    430: 3,
    438: 3,
    439: 3,
    440: 3,
    443: 2,
    444: 2,
    445: 2,
    446: 2,
    447: 6,
    448: 6,
    449: 2,
    450: 2,
    464: 2,
    468: 3,
    476: 2,
    479: 1,
    480: 2,
    65535: 0,
  };
function lp(e) {
  return (
    e.slice(0, 3) == "of:" && (e = e.slice(3)),
    e.charCodeAt(0) == 61 &&
      ((e = e.slice(1)), e.charCodeAt(0) == 61 && (e = e.slice(1))),
    (e = e.replace(/COM\.MICROSOFT\./g, "")),
    (e = e.replace(
      /\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,
      function (r, t) {
        return t.replace(/\./g, "");
      }
    )),
    (e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1")),
    e.replace(/[;~]/g, ",").replace(/\|/g, ";")
  );
}
function Xd(e) {
  var r = e.split(":"),
    t = r[0].split(".")[0];
  return [
    t,
    r[0].split(".")[1] +
      (r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : ""),
  ];
}
var No = {},
  da = {};
function Po(e, r) {
  if (e) {
    var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    r == "xlml" && (t = [1, 1, 1, 1, 0.5, 0.5]),
      e.left == null && (e.left = t[0]),
      e.right == null && (e.right = t[1]),
      e.top == null && (e.top = t[2]),
      e.bottom == null && (e.bottom = t[3]),
      e.header == null && (e.header = t[4]),
      e.footer == null && (e.footer = t[5]);
  }
}
function Pg(e, r, t, i, n, a) {
  try {
    i.cellNF && (e.z = De[r]);
  } catch (s) {
    if (i.WTF) throw s;
  }
  if (!(e.t === "z" && !i.cellStyles)) {
    if (
      (e.t === "d" && typeof e.v == "string" && (e.v = Pt(e.v)),
      (!i || i.cellText !== !1) && e.t !== "z")
    )
      try {
        if ((De[r] == null && bn(yy[r] || "General", r), e.t === "e"))
          e.w = e.w || In[e.v];
        else if (r === 0)
          if (e.t === "n")
            (e.v | 0) === e.v ? (e.w = e.v.toString(10)) : (e.w = Bo(e.v));
          else if (e.t === "d") {
            var o = ur(e.v);
            (o | 0) === o ? (e.w = o.toString(10)) : (e.w = Bo(o));
          } else {
            if (e.v === void 0) return "";
            e.w = wn(e.v, da);
          }
        else e.t === "d" ? (e.w = Pr(r, ur(e.v), da)) : (e.w = Pr(r, e.v, da));
      } catch (s) {
        if (i.WTF) throw s;
      }
    if (i.cellStyles && t != null)
      try {
        (e.s = a.Fills[t]),
          e.s.fgColor &&
            e.s.fgColor.theme &&
            !e.s.fgColor.rgb &&
            ((e.s.fgColor.rgb = Mc(
              n.themeElements.clrScheme[e.s.fgColor.theme].rgb,
              e.s.fgColor.tint || 0
            )),
            i.WTF &&
              (e.s.fgColor.raw_rgb =
                n.themeElements.clrScheme[e.s.fgColor.theme].rgb)),
          e.s.bgColor &&
            e.s.bgColor.theme &&
            ((e.s.bgColor.rgb = Mc(
              n.themeElements.clrScheme[e.s.bgColor.theme].rgb,
              e.s.bgColor.tint || 0
            )),
            i.WTF &&
              (e.s.bgColor.raw_rgb =
                n.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (s) {
        if (i.WTF && a.Fills) throw s;
      }
  }
}
function yT(e, r) {
  var t = _t(r);
  t.s.r <= t.e.r &&
    t.s.c <= t.e.c &&
    t.s.r >= 0 &&
    t.s.c >= 0 &&
    (e["!ref"] = ze(t));
}
var wT = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,
  kT = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/,
  ET = /<(?:\w:)?hyperlink [^>]*>/gm,
  CT = /"(\w*:\w*)"/,
  TT = /<(?:\w:)?col\b[^>]*[\/]?>/g,
  ST = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,
  AT = /<(?:\w:)?pageMargins[^>]*\/>/g,
  Lg = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/,
  IT = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/,
  FT = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function DT(e, r, t, i, n, a, o) {
  if (!e) return e;
  i || (i = { "!id": {} }), It != null && r.dense == null && (r.dense = It);
  var s = r.dense ? [] : {},
    c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    l = "",
    d = "",
    u = e.match(kT);
  u
    ? ((l = e.slice(0, u.index)), (d = e.slice(u.index + u[0].length)))
    : (l = d = e);
  var h = l.match(Lg);
  h
    ? Mu(h[0], s, n, t)
    : (h = l.match(IT)) && MT(h[0], h[1] || "", s, n, t, o, a);
  var m = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (m > 0) {
    var p = l.slice(m, m + 50).match(CT);
    p && yT(s, p[1]);
  }
  var f = l.match(FT);
  f && f[1] && BT(f[1], n);
  var g = [];
  if (r.cellStyles) {
    var T = l.match(TT);
    T && NT(g, T);
  }
  u && jT(u[1], s, r, c, a, o);
  var E = d.match(ST);
  E && (s["!autofilter"] = PT(E[0]));
  var x = [],
    O = d.match(wT);
  if (O)
    for (m = 0; m != O.length; ++m)
      x[m] = _t(O[m].slice(O[m].indexOf('"') + 1));
  var z = d.match(ET);
  z && RT(s, z, i);
  var F = d.match(AT);
  if (
    (F && (s["!margins"] = OT(Te(F[0]))),
    !s["!ref"] && c.e.c >= c.s.c && c.e.r >= c.s.r && (s["!ref"] = ze(c)),
    r.sheetRows > 0 && s["!ref"])
  ) {
    var C = _t(s["!ref"]);
    r.sheetRows <= +C.e.r &&
      ((C.e.r = r.sheetRows - 1),
      C.e.r > c.e.r && (C.e.r = c.e.r),
      C.e.r < C.s.r && (C.s.r = C.e.r),
      C.e.c > c.e.c && (C.e.c = c.e.c),
      C.e.c < C.s.c && (C.s.c = C.e.c),
      (s["!fullref"] = s["!ref"]),
      (s["!ref"] = ze(C)));
  }
  return (
    g.length > 0 && (s["!cols"] = g), x.length > 0 && (s["!merges"] = x), s
  );
}
function Mu(e, r, t, i) {
  var n = Te(e);
  t.Sheets[i] || (t.Sheets[i] = {}),
    n.codeName && (t.Sheets[i].CodeName = $e(lt(n.codeName)));
}
function MT(e, r, t, i, n) {
  Mu(e.slice(0, e.indexOf(">")), t, i, n);
}
function RT(e, r, t) {
  for (var i = Array.isArray(e), n = 0; n != r.length; ++n) {
    var a = Te(lt(r[n]), !0);
    if (!a.ref) return;
    var o = ((t || {})["!id"] || [])[a.id];
    o
      ? ((a.Target = o.Target),
        a.location && (a.Target += "#" + $e(a.location)))
      : ((a.Target = "#" + $e(a.location)),
        (o = { Target: a.Target, TargetMode: "Internal" })),
      (a.Rel = o),
      a.tooltip && ((a.Tooltip = a.tooltip), delete a.tooltip);
    for (var s = _t(a.ref), c = s.s.r; c <= s.e.r; ++c)
      for (var l = s.s.c; l <= s.e.c; ++l) {
        var d = Ie({ c: l, r: c });
        i
          ? (e[c] || (e[c] = []),
            e[c][l] || (e[c][l] = { t: "z", v: void 0 }),
            (e[c][l].l = a))
          : (e[d] || (e[d] = { t: "z", v: void 0 }), (e[d].l = a));
      }
  }
}
function OT(e) {
  var r = {};
  return (
    ["left", "right", "top", "bottom", "header", "footer"].forEach(function (
      t
    ) {
      e[t] && (r[t] = parseFloat(e[t]));
    }),
    r
  );
}
function NT(e, r) {
  for (var t = !1, i = 0; i != r.length; ++i) {
    var n = Te(r[i], !0);
    n.hidden && (n.hidden = mt(n.hidden));
    var a = parseInt(n.min, 10) - 1,
      o = parseInt(n.max, 10) - 1;
    for (
      n.outlineLevel && (n.level = +n.outlineLevel || 0),
        delete n.min,
        delete n.max,
        n.width = +n.width,
        !t && n.width && ((t = !0), Fu(n.width)),
        ha(n);
      a <= o;

    )
      e[a++] = Vt(n);
  }
}
function PT(e) {
  var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return r;
}
var LT = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function BT(e, r) {
  r.Views || (r.Views = [{}]),
    (e.match(LT) || []).forEach(function (t, i) {
      var n = Te(t);
      r.Views[i] || (r.Views[i] = {}),
        +n.zoomScale && (r.Views[i].zoom = +n.zoomScale),
        mt(n.rightToLeft) && (r.Views[i].RTL = !0);
    });
}
var jT = (function () {
  var e = /<(?:\w+:)?c[ \/>]/,
    r = /<\/(?:\w+:)?row>/,
    t = /r=["']([^"']*)["']/,
    i = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,
    n = /ref=["']([^"']*)["']/,
    a = jo("v"),
    o = jo("f");
  return function (c, l, d, u, h, m) {
    for (
      var p = 0,
        f = "",
        g = [],
        T = [],
        E = 0,
        x = 0,
        O = 0,
        z = "",
        F,
        C,
        P = 0,
        M = 0,
        X,
        G,
        R = 0,
        re = 0,
        be = Array.isArray(m.CellXf),
        oe,
        Ce = [],
        _e = [],
        He = Array.isArray(l),
        le = [],
        ye = {},
        K = !1,
        A = !!d.sheetStubs,
        V = c.split(r),
        D = 0,
        I = V.length;
      D != I;
      ++D
    ) {
      f = V[D].trim();
      var Y = f.length;
      if (Y !== 0) {
        var me = 0;
        e: for (p = 0; p < Y; ++p)
          switch (f[p]) {
            case ">":
              if (f[p - 1] != "/") {
                ++p;
                break e;
              }
              if (d && d.cellStyles) {
                if (
                  ((C = Te(f.slice(me, p), !0)),
                  (P = C.r != null ? parseInt(C.r, 10) : P + 1),
                  (M = -1),
                  d.sheetRows && d.sheetRows < P)
                )
                  continue;
                (ye = {}),
                  (K = !1),
                  C.ht &&
                    ((K = !0),
                    (ye.hpt = parseFloat(C.ht)),
                    (ye.hpx = Ho(ye.hpt))),
                  C.hidden == "1" && ((K = !0), (ye.hidden = !0)),
                  C.outlineLevel != null &&
                    ((K = !0), (ye.level = +C.outlineLevel)),
                  K && (le[P - 1] = ye);
              }
              break;
            case "<":
              me = p;
              break;
          }
        if (me >= p) break;
        if (
          ((C = Te(f.slice(me, p), !0)),
          (P = C.r != null ? parseInt(C.r, 10) : P + 1),
          (M = -1),
          !(d.sheetRows && d.sheetRows < P))
        ) {
          u.s.r > P - 1 && (u.s.r = P - 1),
            u.e.r < P - 1 && (u.e.r = P - 1),
            d &&
              d.cellStyles &&
              ((ye = {}),
              (K = !1),
              C.ht &&
                ((K = !0), (ye.hpt = parseFloat(C.ht)), (ye.hpx = Ho(ye.hpt))),
              C.hidden == "1" && ((K = !0), (ye.hidden = !0)),
              C.outlineLevel != null &&
                ((K = !0), (ye.level = +C.outlineLevel)),
              K && (le[P - 1] = ye)),
            (g = f.slice(p).split(e));
          for (
            var ce = 0;
            ce != g.length && g[ce].trim().charAt(0) == "<";
            ++ce
          );
          for (g = g.slice(ce), p = 0; p != g.length; ++p)
            if (((f = g[p].trim()), f.length !== 0)) {
              if (
                ((T = f.match(t)),
                (E = p),
                (x = 0),
                (O = 0),
                (f = "<c " + (f.slice(0, 1) == "<" ? ">" : "") + f),
                T != null && T.length === 2)
              ) {
                for (
                  E = 0, z = T[1], x = 0;
                  x != z.length && !((O = z.charCodeAt(x) - 64) < 1 || O > 26);
                  ++x
                )
                  E = 26 * E + O;
                --E, (M = E);
              } else ++M;
              for (x = 0; x != f.length && f.charCodeAt(x) !== 62; ++x);
              if (
                (++x,
                (C = Te(f.slice(0, x), !0)),
                C.r || (C.r = Ie({ r: P - 1, c: M })),
                (z = f.slice(x)),
                (F = { t: "" }),
                (T = z.match(a)) != null && T[1] !== "" && (F.v = $e(T[1])),
                d.cellFormula)
              ) {
                if ((T = z.match(o)) != null && T[1] !== "") {
                  if (
                    ((F.f = $e(lt(T[1])).replace(
                      /\r\n/g,
                      `
`
                    )),
                    d.xlfn || (F.f = ap(F.f)),
                    T[0].indexOf('t="array"') > -1)
                  )
                    (F.F = (z.match(n) || [])[1]),
                      F.F.indexOf(":") > -1 && Ce.push([_t(F.F), F.F]);
                  else if (T[0].indexOf('t="shared"') > -1) {
                    G = Te(T[0]);
                    var ue = $e(lt(T[1]));
                    d.xlfn || (ue = ap(ue)),
                      (_e[parseInt(G.si, 10)] = [G, ue, C.r]);
                  }
                } else
                  (T = z.match(/<f[^>]*\/>/)) &&
                    ((G = Te(T[0])),
                    _e[G.si] && (F.f = YE(_e[G.si][1], _e[G.si][2], C.r)));
                var Z = dr(C.r);
                for (x = 0; x < Ce.length; ++x)
                  Z.r >= Ce[x][0].s.r &&
                    Z.r <= Ce[x][0].e.r &&
                    Z.c >= Ce[x][0].s.c &&
                    Z.c <= Ce[x][0].e.c &&
                    (F.F = Ce[x][1]);
              }
              if (C.t == null && F.v === void 0)
                if (F.f || F.F) (F.v = 0), (F.t = "n");
                else if (A) F.t = "z";
                else continue;
              else F.t = C.t || "n";
              switch (
                (u.s.c > M && (u.s.c = M), u.e.c < M && (u.e.c = M), F.t)
              ) {
                case "n":
                  if (F.v == "" || F.v == null) {
                    if (!A) continue;
                    F.t = "z";
                  } else F.v = parseFloat(F.v);
                  break;
                case "s":
                  if (typeof F.v > "u") {
                    if (!A) continue;
                    F.t = "z";
                  } else
                    (X = No[parseInt(F.v, 10)]),
                      (F.v = X.t),
                      (F.r = X.r),
                      d.cellHTML && (F.h = X.h);
                  break;
                case "str":
                  (F.t = "s"),
                    (F.v = F.v != null ? lt(F.v) : ""),
                    d.cellHTML && (F.h = pu(F.v));
                  break;
                case "inlineStr":
                  (T = z.match(i)),
                    (F.t = "s"),
                    T != null && (X = Iu(T[1]))
                      ? ((F.v = X.t), d.cellHTML && (F.h = X.h))
                      : (F.v = "");
                  break;
                case "b":
                  F.v = mt(F.v);
                  break;
                case "d":
                  d.cellDates
                    ? (F.v = Pt(F.v, 1))
                    : ((F.v = ur(Pt(F.v, 1))), (F.t = "n"));
                  break;
                case "e":
                  (!d || d.cellText !== !1) && (F.w = F.v), (F.v = ng[F.v]);
                  break;
              }
              if (
                ((R = re = 0),
                (oe = null),
                be &&
                  C.s !== void 0 &&
                  ((oe = m.CellXf[C.s]),
                  oe != null &&
                    (oe.numFmtId != null && (R = oe.numFmtId),
                    d.cellStyles && oe.fillId != null && (re = oe.fillId))),
                Pg(F, R, re, d, h, m),
                d.cellDates &&
                  be &&
                  F.t == "n" &&
                  pa(De[R]) &&
                  ((F.t = "d"), (F.v = Pc(F.v))),
                C.cm && d.xlmeta)
              ) {
                var Ve = (d.xlmeta.Cell || [])[+C.cm - 1];
                Ve && Ve.type == "XLDAPR" && (F.D = !0);
              }
              if (He) {
                var S = dr(C.r);
                l[S.r] || (l[S.r] = []), (l[S.r][S.c] = F);
              } else l[C.r] = F;
            }
        }
      }
    }
    le.length > 0 && (l["!rows"] = le);
  };
})();
function VT(e, r) {
  var t = {},
    i = e.l + r;
  (t.r = e.read_shift(4)), (e.l += 4);
  var n = e.read_shift(2);
  e.l += 1;
  var a = e.read_shift(1);
  return (
    (e.l = i),
    a & 7 && (t.level = a & 7),
    a & 16 && (t.hidden = !0),
    a & 32 && (t.hpt = n / 20),
    t
  );
}
var UT = An;
function zT() {}
function HT(e, r) {
  var t = {},
    i = e[e.l];
  return (
    ++e.l,
    (t.above = !(i & 64)),
    (t.left = !(i & 128)),
    (e.l += 18),
    (t.name = uw(e, r - 19)),
    t
  );
}
function WT(e) {
  var r = Lr(e);
  return [r];
}
function GT(e) {
  var r = Sn(e);
  return [r];
}
function $T(e) {
  var r = Lr(e),
    t = e.read_shift(1);
  return [r, t, "b"];
}
function XT(e) {
  var r = Sn(e),
    t = e.read_shift(1);
  return [r, t, "b"];
}
function qT(e) {
  var r = Lr(e),
    t = e.read_shift(1);
  return [r, t, "e"];
}
function KT(e) {
  var r = Sn(e),
    t = e.read_shift(1);
  return [r, t, "e"];
}
function YT(e) {
  var r = Lr(e),
    t = e.read_shift(4);
  return [r, t, "s"];
}
function ZT(e) {
  var r = Sn(e),
    t = e.read_shift(4);
  return [r, t, "s"];
}
function QT(e) {
  var r = Lr(e),
    t = Zt(e);
  return [r, t, "n"];
}
function Bg(e) {
  var r = Sn(e),
    t = Zt(e);
  return [r, t, "n"];
}
function JT(e) {
  var r = Lr(e),
    t = Tu(e);
  return [r, t, "n"];
}
function eS(e) {
  var r = Sn(e),
    t = Tu(e);
  return [r, t, "n"];
}
function tS(e) {
  var r = Lr(e),
    t = Eu(e);
  return [r, t, "is"];
}
function rS(e) {
  var r = Lr(e),
    t = er(e);
  return [r, t, "str"];
}
function iS(e) {
  var r = Sn(e),
    t = er(e);
  return [r, t, "str"];
}
function nS(e, r, t) {
  var i = e.l + r,
    n = Lr(e);
  n.r = t["!row"];
  var a = e.read_shift(1),
    o = [n, a, "b"];
  if (t.cellFormula) {
    e.l += 2;
    var s = Vc(e, i - e.l, t);
    o[3] = Yt(s, null, n, t.supbooks, t);
  } else e.l = i;
  return o;
}
function aS(e, r, t) {
  var i = e.l + r,
    n = Lr(e);
  n.r = t["!row"];
  var a = e.read_shift(1),
    o = [n, a, "e"];
  if (t.cellFormula) {
    e.l += 2;
    var s = Vc(e, i - e.l, t);
    o[3] = Yt(s, null, n, t.supbooks, t);
  } else e.l = i;
  return o;
}
function oS(e, r, t) {
  var i = e.l + r,
    n = Lr(e);
  n.r = t["!row"];
  var a = Zt(e),
    o = [n, a, "n"];
  if (t.cellFormula) {
    e.l += 2;
    var s = Vc(e, i - e.l, t);
    o[3] = Yt(s, null, n, t.supbooks, t);
  } else e.l = i;
  return o;
}
function sS(e, r, t) {
  var i = e.l + r,
    n = Lr(e);
  n.r = t["!row"];
  var a = er(e),
    o = [n, a, "str"];
  if (t.cellFormula) {
    e.l += 2;
    var s = Vc(e, i - e.l, t);
    o[3] = Yt(s, null, n, t.supbooks, t);
  } else e.l = i;
  return o;
}
var cS = An;
function lS(e, r) {
  var t = e.l + r,
    i = An(e, 16),
    n = Cu(e),
    a = er(e),
    o = er(e),
    s = er(e);
  e.l = t;
  var c = { rfx: i, relId: n, loc: a, display: s };
  return o && (c.Tooltip = o), c;
}
function dS() {}
function uS(e, r, t) {
  var i = e.l + r,
    n = tg(e, 16),
    a = e.read_shift(1),
    o = [n];
  if (((o[2] = a), t.cellFormula)) {
    var s = gT(e, i - e.l, t);
    o[1] = s;
  } else e.l = i;
  return o;
}
function fS(e, r, t) {
  var i = e.l + r,
    n = An(e, 16),
    a = [n];
  if (t.cellFormula) {
    var o = xT(e, i - e.l, t);
    (a[1] = o), (e.l = i);
  } else e.l = i;
  return a;
}
var hS = ["left", "right", "top", "bottom", "header", "footer"];
function mS(e) {
  var r = {};
  return (
    hS.forEach(function (t) {
      r[t] = Zt(e, 8);
    }),
    r
  );
}
function pS(e) {
  var r = e.read_shift(2);
  return (e.l += 28), { RTL: r & 32 };
}
function gS() {}
function vS() {}
function xS(e, r, t, i, n, a, o) {
  if (!e) return e;
  var s = r || {};
  i || (i = { "!id": {} }), It != null && s.dense == null && (s.dense = It);
  var c = s.dense ? [] : {},
    l,
    d = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    u = [],
    h = !1,
    m = !1,
    p,
    f,
    g,
    T,
    E,
    x,
    O,
    z,
    F,
    C = [];
  (s.biff = 12), (s["!row"] = 0);
  var P = 0,
    M = !1,
    X = [],
    G = {},
    R = s.supbooks || n.supbooks || [[]];
  if (
    ((R.sharedf = G),
    (R.arrayf = X),
    (R.SheetNames =
      n.SheetNames ||
      n.Sheets.map(function (ye) {
        return ye.name;
      })),
    !s.supbooks && ((s.supbooks = R), n.Names))
  )
    for (var re = 0; re < n.Names.length; ++re) R[0][re + 1] = n.Names[re];
  var be = [],
    oe = [],
    Ce = !1;
  Nc[16] = { n: "BrtShortReal", f: Bg };
  var _e, He;
  if (
    (Si(
      e,
      function (K, A, V) {
        if (!m)
          switch (V) {
            case 148:
              l = K;
              break;
            case 0:
              (p = K),
                s.sheetRows && s.sheetRows <= p.r && (m = !0),
                (z = Ut((T = p.r))),
                (s["!row"] = p.r),
                (K.hidden || K.hpt || K.level != null) &&
                  (K.hpt && (K.hpx = Ho(K.hpt)), (oe[K.r] = K));
              break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 62:
              switch (((f = { t: K[2] }), K[2])) {
                case "n":
                  f.v = K[1];
                  break;
                case "s":
                  (O = No[K[1]]), (f.v = O.t), (f.r = O.r);
                  break;
                case "b":
                  f.v = !!K[1];
                  break;
                case "e":
                  (f.v = K[1]), s.cellText !== !1 && (f.w = In[f.v]);
                  break;
                case "str":
                  (f.t = "s"), (f.v = K[1]);
                  break;
                case "is":
                  (f.t = "s"), (f.v = K[1].t);
                  break;
              }
              if (
                ((g = o.CellXf[K[0].iStyleRef]) &&
                  Pg(f, g.numFmtId, null, s, a, o),
                (E = K[0].c == -1 ? E + 1 : K[0].c),
                s.dense
                  ? (c[T] || (c[T] = []), (c[T][E] = f))
                  : (c[Mt(E) + z] = f),
                s.cellFormula)
              ) {
                for (M = !1, P = 0; P < X.length; ++P) {
                  var D = X[P];
                  p.r >= D[0].s.r &&
                    p.r <= D[0].e.r &&
                    E >= D[0].s.c &&
                    E <= D[0].e.c &&
                    ((f.F = ze(D[0])), (M = !0));
                }
                !M && K.length > 3 && (f.f = K[3]);
              }
              if (
                (d.s.r > p.r && (d.s.r = p.r),
                d.s.c > E && (d.s.c = E),
                d.e.r < p.r && (d.e.r = p.r),
                d.e.c < E && (d.e.c = E),
                s.cellDates && g && f.t == "n" && pa(De[g.numFmtId]))
              ) {
                var I = _n(f.v);
                I &&
                  ((f.t = "d"),
                  (f.v = new Date(I.y, I.m - 1, I.d, I.H, I.M, I.S, I.u)));
              }
              _e && (_e.type == "XLDAPR" && (f.D = !0), (_e = void 0)),
                He && (He = void 0);
              break;
            case 1:
            case 12:
              if (!s.sheetStubs || h) break;
              (f = { t: "z", v: void 0 }),
                (E = K[0].c == -1 ? E + 1 : K[0].c),
                s.dense
                  ? (c[T] || (c[T] = []), (c[T][E] = f))
                  : (c[Mt(E) + z] = f),
                d.s.r > p.r && (d.s.r = p.r),
                d.s.c > E && (d.s.c = E),
                d.e.r < p.r && (d.e.r = p.r),
                d.e.c < E && (d.e.c = E),
                _e && (_e.type == "XLDAPR" && (f.D = !0), (_e = void 0)),
                He && (He = void 0);
              break;
            case 176:
              C.push(K);
              break;
            case 49:
              _e = ((s.xlmeta || {}).Cell || [])[K - 1];
              break;
            case 494:
              var Y = i["!id"][K.relId];
              for (
                Y
                  ? ((K.Target = Y.Target),
                    K.loc && (K.Target += "#" + K.loc),
                    (K.Rel = Y))
                  : K.relId == "" && (K.Target = "#" + K.loc),
                  T = K.rfx.s.r;
                T <= K.rfx.e.r;
                ++T
              )
                for (E = K.rfx.s.c; E <= K.rfx.e.c; ++E)
                  s.dense
                    ? (c[T] || (c[T] = []),
                      c[T][E] || (c[T][E] = { t: "z", v: void 0 }),
                      (c[T][E].l = K))
                    : ((x = Ie({ c: E, r: T })),
                      c[x] || (c[x] = { t: "z", v: void 0 }),
                      (c[x].l = K));
              break;
            case 426:
              if (!s.cellFormula) break;
              X.push(K),
                (F = s.dense ? c[T][E] : c[Mt(E) + z]),
                (F.f = Yt(K[1], d, { r: p.r, c: E }, R, s)),
                (F.F = ze(K[0]));
              break;
            case 427:
              if (!s.cellFormula) break;
              (G[Ie(K[0].s)] = K[1]),
                (F = s.dense ? c[T][E] : c[Mt(E) + z]),
                (F.f = Yt(K[1], d, { r: p.r, c: E }, R, s));
              break;
            case 60:
              if (!s.cellStyles) break;
              for (; K.e >= K.s; )
                (be[K.e--] = {
                  width: K.w / 256,
                  hidden: !!(K.flags & 1),
                  level: K.level,
                }),
                  Ce || ((Ce = !0), Fu(K.w / 256)),
                  ha(be[K.e + 1]);
              break;
            case 161:
              c["!autofilter"] = { ref: ze(K) };
              break;
            case 476:
              c["!margins"] = K;
              break;
            case 147:
              n.Sheets[t] || (n.Sheets[t] = {}),
                K.name && (n.Sheets[t].CodeName = K.name),
                (K.above || K.left) &&
                  (c["!outline"] = { above: K.above, left: K.left });
              break;
            case 137:
              n.Views || (n.Views = [{}]),
                n.Views[0] || (n.Views[0] = {}),
                K.RTL && (n.Views[0].RTL = !0);
              break;
            case 485:
              break;
            case 64:
            case 1053:
              break;
            case 151:
              break;
            case 152:
            case 175:
            case 644:
            case 625:
            case 562:
            case 396:
            case 1112:
            case 1146:
            case 471:
            case 1050:
            case 649:
            case 1105:
            case 589:
            case 607:
            case 564:
            case 1055:
            case 168:
            case 174:
            case 1180:
            case 499:
            case 507:
            case 550:
            case 171:
            case 167:
            case 1177:
            case 169:
            case 1181:
            case 551:
            case 552:
            case 661:
            case 639:
            case 478:
            case 537:
            case 477:
            case 536:
            case 1103:
            case 680:
            case 1104:
            case 1024:
            case 663:
            case 535:
            case 678:
            case 504:
            case 1043:
            case 428:
            case 170:
            case 3072:
            case 50:
            case 2070:
            case 1045:
              break;
            case 35:
              h = !0;
              break;
            case 36:
              h = !1;
              break;
            case 37:
              u.push(V), (h = !0);
              break;
            case 38:
              u.pop(), (h = !1);
              break;
            default:
              if (!A.T) {
                if (!h || s.WTF)
                  throw new Error("Unexpected record 0x" + V.toString(16));
              }
          }
      },
      s
    ),
    delete s.supbooks,
    delete s["!row"],
    !c["!ref"] &&
      (d.s.r < 2e6 ||
        (l && (l.e.r > 0 || l.e.c > 0 || l.s.r > 0 || l.s.c > 0))) &&
      (c["!ref"] = ze(l || d)),
    s.sheetRows && c["!ref"])
  ) {
    var le = _t(c["!ref"]);
    s.sheetRows <= +le.e.r &&
      ((le.e.r = s.sheetRows - 1),
      le.e.r > d.e.r && (le.e.r = d.e.r),
      le.e.r < le.s.r && (le.s.r = le.e.r),
      le.e.c > d.e.c && (le.e.c = d.e.c),
      le.e.c < le.s.c && (le.s.c = le.e.c),
      (c["!fullref"] = c["!ref"]),
      (c["!ref"] = ze(le)));
  }
  return (
    C.length > 0 && (c["!merges"] = C),
    be.length > 0 && (c["!cols"] = be),
    oe.length > 0 && (c["!rows"] = oe),
    c
  );
}
function _S(e) {
  var r = [],
    t = e.match(/^<c:numCache>/),
    i;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (a) {
    var o = a.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    o && (r[+o[1]] = t ? +o[2] : o[2]);
  });
  var n = $e(
    (e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]
  );
  return (
    (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (a) {
      i = a.replace(/<.*?>/g, "");
    }),
    [r, n, i]
  );
}
function bS(e, r, t, i, n, a) {
  var o = a || { "!type": "chart" };
  if (!e) return a;
  var s = 0,
    c = 0,
    l = "A",
    d = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (
    (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (
      u
    ) {
      var h = _S(u);
      (d.s.r = d.s.c = 0),
        (d.e.c = s),
        (l = Mt(s)),
        h[0].forEach(function (m, p) {
          (o[l + Ut(p)] = { t: "n", v: m, z: h[1] }), (c = p);
        }),
        d.e.r < c && (d.e.r = c),
        ++s;
    }),
    s > 0 && (o["!ref"] = ze(d)),
    o
  );
}
function yS(e, r, t, i, n) {
  if (!e) return e;
  i || (i = { "!id": {} });
  var a = { "!type": "chart", "!drawel": null, "!rel": "" },
    o,
    s = e.match(Lg);
  return (
    s && Mu(s[0], a, n, t),
    (o = e.match(/drawing r:id="(.*?)"/)) && (a["!rel"] = o[1]),
    i["!id"][a["!rel"]] && (a["!drawel"] = i["!id"][a["!rel"]]),
    a
  );
}
function wS(e, r) {
  e.l += 10;
  var t = er(e, r - 10);
  return { name: t };
}
function kS(e, r, t, i, n) {
  if (!e) return e;
  i || (i = { "!id": {} });
  var a = { "!type": "chart", "!drawel": null, "!rel": "" },
    o = [],
    s = !1;
  return (
    Si(
      e,
      function (l, d, u) {
        switch (u) {
          case 550:
            a["!rel"] = l;
            break;
          case 651:
            n.Sheets[t] || (n.Sheets[t] = {}),
              l.name && (n.Sheets[t].CodeName = l.name);
            break;
          case 562:
          case 652:
          case 669:
          case 679:
          case 551:
          case 552:
          case 476:
          case 3072:
            break;
          case 35:
            s = !0;
            break;
          case 36:
            s = !1;
            break;
          case 37:
            o.push(u);
            break;
          case 38:
            o.pop();
            break;
          default:
            if (d.T > 0) o.push(u);
            else if (d.T < 0) o.pop();
            else if (!s || r.WTF)
              throw new Error("Unexpected record 0x" + u.toString(16));
        }
      },
      r
    ),
    i["!id"][a["!rel"]] && (a["!drawel"] = i["!id"][a["!rel"]]),
    a
  );
}
var jg = [
    ["allowRefreshQuery", !1, "bool"],
    ["autoCompressPictures", !0, "bool"],
    ["backupFile", !1, "bool"],
    ["checkCompatibility", !1, "bool"],
    ["CodeName", ""],
    ["date1904", !1, "bool"],
    ["defaultThemeVersion", 0, "int"],
    ["filterPrivacy", !1, "bool"],
    ["hidePivotFieldList", !1, "bool"],
    ["promptedSolutions", !1, "bool"],
    ["publishItems", !1, "bool"],
    ["refreshAllConnections", !1, "bool"],
    ["saveExternalLinkValues", !0, "bool"],
    ["showBorderUnselectedTables", !0, "bool"],
    ["showInkAnnotation", !0, "bool"],
    ["showObjects", "all"],
    ["showPivotChartFilter", !1, "bool"],
    ["updateLinks", "userSet"],
  ],
  ES = [
    ["activeTab", 0, "int"],
    ["autoFilterDateGrouping", !0, "bool"],
    ["firstSheet", 0, "int"],
    ["minimized", !1, "bool"],
    ["showHorizontalScroll", !0, "bool"],
    ["showSheetTabs", !0, "bool"],
    ["showVerticalScroll", !0, "bool"],
    ["tabRatio", 600, "int"],
    ["visibility", "visible"],
  ],
  CS = [],
  TS = [
    ["calcCompleted", "true"],
    ["calcMode", "auto"],
    ["calcOnSave", "true"],
    ["concurrentCalc", "true"],
    ["fullCalcOnLoad", "false"],
    ["fullPrecision", "true"],
    ["iterate", "false"],
    ["iterateCount", "100"],
    ["iterateDelta", "0.001"],
    ["refMode", "A1"],
  ];
function dp(e, r) {
  for (var t = 0; t != e.length; ++t)
    for (var i = e[t], n = 0; n != r.length; ++n) {
      var a = r[n];
      if (i[a[0]] == null) i[a[0]] = a[1];
      else
        switch (a[2]) {
          case "bool":
            typeof i[a[0]] == "string" && (i[a[0]] = mt(i[a[0]]));
            break;
          case "int":
            typeof i[a[0]] == "string" && (i[a[0]] = parseInt(i[a[0]], 10));
            break;
        }
    }
}
function up(e, r) {
  for (var t = 0; t != r.length; ++t) {
    var i = r[t];
    if (e[i[0]] == null) e[i[0]] = i[1];
    else
      switch (i[2]) {
        case "bool":
          typeof e[i[0]] == "string" && (e[i[0]] = mt(e[i[0]]));
          break;
        case "int":
          typeof e[i[0]] == "string" && (e[i[0]] = parseInt(e[i[0]], 10));
          break;
      }
  }
}
function Vg(e) {
  up(e.WBProps, jg),
    up(e.CalcPr, TS),
    dp(e.WBView, ES),
    dp(e.Sheets, CS),
    (da.date1904 = mt(e.WBProps.date1904));
}
var SS = "][*?/\\".split("");
function AS(e, r) {
  if (e.length > 31) {
    if (r) return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var t = !0;
  return (
    SS.forEach(function (i) {
      if (e.indexOf(i) != -1) {
        if (!r) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
        t = !1;
      }
    }),
    t
  );
}
var IS = /<\w+:workbook/;
function FS(e, r) {
  if (!e) throw new Error("Could not find file");
  var t = {
      AppVersion: {},
      WBProps: {},
      WBView: [],
      Sheets: [],
      CalcPr: {},
      Names: [],
      xmlns: "",
    },
    i = !1,
    n = "xmlns",
    a = {},
    o = 0;
  if (
    (e.replace(rr, function (c, l) {
      var d = Te(c);
      switch (li(d[0])) {
        case "<?xml":
          break;
        case "<workbook":
          c.match(IS) && (n = "xmlns" + c.match(/<(\w+):/)[1]),
            (t.xmlns = d[n]);
          break;
        case "</workbook>":
          break;
        case "<fileVersion":
          delete d[0], (t.AppVersion = d);
          break;
        case "<fileVersion/>":
        case "</fileVersion>":
          break;
        case "<fileSharing":
          break;
        case "<fileSharing/>":
          break;
        case "<workbookPr":
        case "<workbookPr/>":
          jg.forEach(function (u) {
            if (d[u[0]] != null)
              switch (u[2]) {
                case "bool":
                  t.WBProps[u[0]] = mt(d[u[0]]);
                  break;
                case "int":
                  t.WBProps[u[0]] = parseInt(d[u[0]], 10);
                  break;
                default:
                  t.WBProps[u[0]] = d[u[0]];
              }
          }),
            d.codeName && (t.WBProps.CodeName = lt(d.codeName));
          break;
        case "</workbookPr>":
          break;
        case "<workbookProtection":
          break;
        case "<workbookProtection/>":
          break;
        case "<bookViews":
        case "<bookViews>":
        case "</bookViews>":
          break;
        case "<workbookView":
        case "<workbookView/>":
          delete d[0], t.WBView.push(d);
          break;
        case "</workbookView>":
          break;
        case "<sheets":
        case "<sheets>":
        case "</sheets>":
          break;
        case "<sheet":
          switch (d.state) {
            case "hidden":
              d.Hidden = 1;
              break;
            case "veryHidden":
              d.Hidden = 2;
              break;
            default:
              d.Hidden = 0;
          }
          delete d.state,
            (d.name = $e(lt(d.name))),
            delete d[0],
            t.Sheets.push(d);
          break;
        case "</sheet>":
          break;
        case "<functionGroups":
        case "<functionGroups/>":
          break;
        case "<functionGroup":
          break;
        case "<externalReferences":
        case "</externalReferences>":
        case "<externalReferences>":
          break;
        case "<externalReference":
          break;
        case "<definedNames/>":
          break;
        case "<definedNames>":
        case "<definedNames":
          i = !0;
          break;
        case "</definedNames>":
          i = !1;
          break;
        case "<definedName":
          (a = {}),
            (a.Name = lt(d.name)),
            d.comment && (a.Comment = d.comment),
            d.localSheetId && (a.Sheet = +d.localSheetId),
            mt(d.hidden || "0") && (a.Hidden = !0),
            (o = l + c.length);
          break;
        case "</definedName>":
          (a.Ref = $e(lt(e.slice(o, l)))), t.Names.push(a);
          break;
        case "<definedName/>":
          break;
        case "<calcPr":
          delete d[0], (t.CalcPr = d);
          break;
        case "<calcPr/>":
          delete d[0], (t.CalcPr = d);
          break;
        case "</calcPr>":
          break;
        case "<oleSize":
          break;
        case "<customWorkbookViews>":
        case "</customWorkbookViews>":
        case "<customWorkbookViews":
          break;
        case "<customWorkbookView":
        case "</customWorkbookView>":
          break;
        case "<pivotCaches>":
        case "</pivotCaches>":
        case "<pivotCaches":
          break;
        case "<pivotCache":
          break;
        case "<smartTagPr":
        case "<smartTagPr/>":
          break;
        case "<smartTagTypes":
        case "<smartTagTypes>":
        case "</smartTagTypes>":
          break;
        case "<smartTagType":
          break;
        case "<webPublishing":
        case "<webPublishing/>":
          break;
        case "<fileRecoveryPr":
        case "<fileRecoveryPr/>":
          break;
        case "<webPublishObjects>":
        case "<webPublishObjects":
        case "</webPublishObjects>":
          break;
        case "<webPublishObject":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
        case "<extLst/>":
          break;
        case "<ext":
          i = !0;
          break;
        case "</ext>":
          i = !1;
          break;
        case "<ArchID":
          break;
        case "<AlternateContent":
        case "<AlternateContent>":
          i = !0;
          break;
        case "</AlternateContent>":
          i = !1;
          break;
        case "<revisionPtr":
          break;
        default:
          if (!i && r.WTF)
            throw new Error("unrecognized " + d[0] + " in workbook");
      }
      return c;
    }),
    Xy.indexOf(t.xmlns) === -1)
  )
    throw new Error("Unknown Namespace: " + t.xmlns);
  return Vg(t), t;
}
function DS(e, r) {
  var t = {};
  return (
    (t.Hidden = e.read_shift(4)),
    (t.iTabID = e.read_shift(4)),
    (t.strRelID = Jd(e, r - 8)),
    (t.name = er(e)),
    t
  );
}
function MS(e, r) {
  var t = {},
    i = e.read_shift(4);
  t.defaultThemeVersion = e.read_shift(4);
  var n = r > 8 ? er(e) : "";
  return (
    n.length > 0 && (t.CodeName = n),
    (t.autoCompressPictures = !!(i & 65536)),
    (t.backupFile = !!(i & 64)),
    (t.checkCompatibility = !!(i & 4096)),
    (t.date1904 = !!(i & 1)),
    (t.filterPrivacy = !!(i & 8)),
    (t.hidePivotFieldList = !!(i & 1024)),
    (t.promptedSolutions = !!(i & 16)),
    (t.publishItems = !!(i & 2048)),
    (t.refreshAllConnections = !!(i & 262144)),
    (t.saveExternalLinkValues = !!(i & 128)),
    (t.showBorderUnselectedTables = !!(i & 4)),
    (t.showInkAnnotation = !!(i & 32)),
    (t.showObjects = ["all", "placeholders", "none"][(i >> 13) & 3]),
    (t.showPivotChartFilter = !!(i & 32768)),
    (t.updateLinks = ["userSet", "never", "always"][(i >> 8) & 3]),
    t
  );
}
function RS(e, r) {
  var t = {};
  return e.read_shift(4), (t.ArchID = e.read_shift(4)), (e.l += r - 8), t;
}
function OS(e, r, t) {
  var i = e.l + r;
  (e.l += 4), (e.l += 1);
  var n = e.read_shift(4),
    a = fw(e),
    o = vT(e, 0, t),
    s = Cu(e);
  e.l = i;
  var c = { Name: a, Ptg: o };
  return n < 268435455 && (c.Sheet = n), s && (c.Comment = s), c;
}
function NS(e, r) {
  var t = {
      AppVersion: {},
      WBProps: {},
      WBView: [],
      Sheets: [],
      CalcPr: {},
      xmlns: "",
    },
    i = [],
    n = !1;
  r || (r = {}), (r.biff = 12);
  var a = [],
    o = [[]];
  return (
    (o.SheetNames = []),
    (o.XTI = []),
    (Nc[16] = { n: "BrtFRTArchID$", f: RS }),
    Si(
      e,
      function (c, l, d) {
        switch (d) {
          case 156:
            o.SheetNames.push(c.name), t.Sheets.push(c);
            break;
          case 153:
            t.WBProps = c;
            break;
          case 39:
            c.Sheet != null && (r.SID = c.Sheet),
              (c.Ref = Yt(c.Ptg, null, null, o, r)),
              delete r.SID,
              delete c.Ptg,
              a.push(c);
            break;
          case 1036:
            break;
          case 357:
          case 358:
          case 355:
          case 667:
            o[0].length ? o.push([d, c]) : (o[0] = [d, c]),
              (o[o.length - 1].XTI = []);
            break;
          case 362:
            o.length === 0 && ((o[0] = []), (o[0].XTI = [])),
              (o[o.length - 1].XTI = o[o.length - 1].XTI.concat(c)),
              (o.XTI = o.XTI.concat(c));
            break;
          case 361:
            break;
          case 2071:
          case 158:
          case 143:
          case 664:
          case 353:
            break;
          case 3072:
          case 3073:
          case 534:
          case 677:
          case 157:
          case 610:
          case 2050:
          case 155:
          case 548:
          case 676:
          case 128:
          case 665:
          case 2128:
          case 2125:
          case 549:
          case 2053:
          case 596:
          case 2076:
          case 2075:
          case 2082:
          case 397:
          case 154:
          case 1117:
          case 553:
          case 2091:
            break;
          case 35:
            i.push(d), (n = !0);
            break;
          case 36:
            i.pop(), (n = !1);
            break;
          case 37:
            i.push(d), (n = !0);
            break;
          case 38:
            i.pop(), (n = !1);
            break;
          case 16:
            break;
          default:
            if (!l.T) {
              if (
                !n ||
                (r.WTF && i[i.length - 1] != 37 && i[i.length - 1] != 35)
              )
                throw new Error("Unexpected record 0x" + d.toString(16));
            }
        }
      },
      r
    ),
    Vg(t),
    (t.Names = a),
    (t.supbooks = o),
    t
  );
}
function PS(e, r, t) {
  return r.slice(-4) === ".bin" ? NS(e, t) : FS(e, t);
}
function LS(e, r, t, i, n, a, o, s) {
  return r.slice(-4) === ".bin"
    ? xS(e, i, t, n, a, o, s)
    : DT(e, i, t, n, a, o, s);
}
function BS(e, r, t, i, n, a, o, s) {
  return r.slice(-4) === ".bin"
    ? kS(e, i, t, n, a, o, s)
    : yS(e, i, t, n, a, o, s);
}
function jS(e, r, t, i, n, a, o, s) {
  return r.slice(-4) === ".bin"
    ? XE(e, i, t, n, a, o, s)
    : qE(e, i, t, n, a, o, s);
}
function VS(e, r, t, i, n, a, o, s) {
  return r.slice(-4) === ".bin"
    ? GE(e, i, t, n, a, o, s)
    : $E(e, i, t, n, a, o, s);
}
function US(e, r, t, i) {
  return r.slice(-4) === ".bin" ? cE(e, t, i) : rE(e, t, i);
}
function zS(e, r, t) {
  return Tg(e, t);
}
function HS(e, r, t) {
  return r.slice(-4) === ".bin" ? Ek(e, t) : wk(e, t);
}
function WS(e, r, t) {
  return r.slice(-4) === ".bin" ? zE(e, t) : LE(e, t);
}
function GS(e, r, t) {
  return r.slice(-4) === ".bin" ? OE(e, r, t) : ME(e, r, t);
}
function $S(e, r, t, i) {
  return t.slice(-4) === ".bin" ? NE(e, r, t, i) : void 0;
}
function XS(e, r, t) {
  return r.slice(-4) === ".bin" ? FE(e, r, t) : DE(e, r, t);
}
var Ug = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,
  zg = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Gr(e, r) {
  var t = e.split(/\s+/),
    i = [];
  if ((r || (i[0] = t[0]), t.length === 1)) return i;
  var n = e.match(Ug),
    a,
    o,
    s,
    c;
  if (n)
    for (c = 0; c != n.length; ++c)
      (a = n[c].match(zg)),
        (o = a[1].indexOf(":")) === -1
          ? (i[a[1]] = a[2].slice(1, a[2].length - 1))
          : (a[1].slice(0, 6) === "xmlns:"
              ? (s = "xmlns" + a[1].slice(6))
              : (s = a[1].slice(o + 1)),
            (i[s] = a[2].slice(1, a[2].length - 1)));
  return i;
}
function qS(e) {
  var r = e.split(/\s+/),
    t = {};
  if (r.length === 1) return t;
  var i = e.match(Ug),
    n,
    a,
    o,
    s;
  if (i)
    for (s = 0; s != i.length; ++s)
      (n = i[s].match(zg)),
        (a = n[1].indexOf(":")) === -1
          ? (t[n[1]] = n[2].slice(1, n[2].length - 1))
          : (n[1].slice(0, 6) === "xmlns:"
              ? (o = "xmlns" + n[1].slice(6))
              : (o = n[1].slice(a + 1)),
            (t[o] = n[2].slice(1, n[2].length - 1)));
  return t;
}
var Lo;
function KS(e, r) {
  var t = Lo[e] || $e(e);
  return t === "General" ? wn(r) : Pr(t, r);
}
function YS(e, r, t, i) {
  var n = i;
  switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      n = mt(i);
      break;
    case "i2":
    case "int":
      n = parseInt(i, 10);
      break;
    case "r4":
    case "float":
      n = parseFloat(i);
      break;
    case "date":
    case "dateTime.tz":
      n = Pt(i);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + t[0]);
  }
  e[$e(r)] = n;
}
function ZS(e, r, t) {
  if (e.t !== "z") {
    if (!t || t.cellText !== !1)
      try {
        e.t === "e"
          ? (e.w = e.w || In[e.v])
          : r === "General"
          ? e.t === "n"
            ? (e.v | 0) === e.v
              ? (e.w = e.v.toString(10))
              : (e.w = Bo(e.v))
            : (e.w = wn(e.v))
          : (e.w = KS(r || "General", e.v));
      } catch (a) {
        if (t.WTF) throw a;
      }
    try {
      var i = Lo[r] || r || "General";
      if ((t.cellNF && (e.z = i), t.cellDates && e.t == "n" && pa(i))) {
        var n = _n(e.v);
        n &&
          ((e.t = "d"),
          (e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
      }
    } catch (a) {
      if (t.WTF) throw a;
    }
  }
}
function QS(e, r, t) {
  if (t.cellStyles && r.Interior) {
    var i = r.Interior;
    i.Pattern && (i.patternType = Yk[i.Pattern] || i.Pattern);
  }
  e[r.ID] = r;
}
function JS(e, r, t, i, n, a, o, s, c, l) {
  var d = "General",
    u = i.StyleID,
    h = {};
  l = l || {};
  var m = [],
    p = 0;
  for (
    u === void 0 && s && (u = s.StyleID), u === void 0 && o && (u = o.StyleID);
    a[u] !== void 0 &&
    (a[u].nf && (d = a[u].nf),
    a[u].Interior && m.push(a[u].Interior),
    !!a[u].Parent);

  )
    u = a[u].Parent;
  switch (t.Type) {
    case "Boolean":
      (i.t = "b"), (i.v = mt(e));
      break;
    case "String":
      (i.t = "s"),
        (i.r = Rm($e(e))),
        (i.v = e.indexOf("<") > -1 ? $e(r || e).replace(/<.*?>/g, "") : i.r);
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"),
        (i.v =
          (Pt(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3)),
        i.v !== i.v ? (i.v = $e(e)) : i.v < 60 && (i.v = i.v - 1),
        (!d || d == "General") && (d = "yyyy-mm-dd");
    case "Number":
      i.v === void 0 && (i.v = +e), i.t || (i.t = "n");
      break;
    case "Error":
      (i.t = "e"), (i.v = ng[e]), l.cellText !== !1 && (i.w = e);
      break;
    default:
      e == "" && r == "" ? (i.t = "z") : ((i.t = "s"), (i.v = Rm(r || e)));
      break;
  }
  if ((ZS(i, d, l), l.cellFormula !== !1))
    if (i.Formula) {
      var f = $e(i.Formula);
      f.charCodeAt(0) == 61 && (f = f.slice(1)),
        (i.f = la(f, n)),
        delete i.Formula,
        i.ArrayRange == "RC"
          ? (i.F = la("RC:RC", n))
          : i.ArrayRange &&
            ((i.F = la(i.ArrayRange, n)), c.push([_t(i.F), i.F]));
    } else
      for (p = 0; p < c.length; ++p)
        n.r >= c[p][0].s.r &&
          n.r <= c[p][0].e.r &&
          n.c >= c[p][0].s.c &&
          n.c <= c[p][0].e.c &&
          (i.F = c[p][1]);
  l.cellStyles &&
    (m.forEach(function (g) {
      !h.patternType && g.patternType && (h.patternType = g.patternType);
    }),
    (i.s = h)),
    i.StyleID !== void 0 && (i.ixfe = i.StyleID);
}
function eA(e) {
  (e.t = e.v || ""),
    (e.t = e.t
      .replace(
        /\r\n/g,
        `
`
      )
      .replace(
        /\r/g,
        `
`
      )),
    (e.v = e.w = e.ixfe = void 0);
}
function qd(e, r) {
  var t = r || {};
  Op();
  var i = Co(gu(e));
  (t.type == "binary" || t.type == "array" || t.type == "base64") &&
    (typeof Qe < "u" ? (i = Qe.utils.decode(65001, Zd(i))) : (i = lt(i)));
  var n = i.slice(0, 1024).toLowerCase(),
    a = !1;
  if (
    ((n = n.replace(/".*?"/g, "")),
    (n.indexOf(">") & 1023) >
      Math.min(n.indexOf(",") & 1023, n.indexOf(";") & 1023))
  ) {
    var o = Vt(t);
    return (o.type = "string"), Uo.to_workbook(i, o);
  }
  if (
    (n.indexOf("<?xml") == -1 &&
      ["html", "table", "head", "meta", "script", "style", "div"].forEach(
        function (bt) {
          n.indexOf("<" + bt) >= 0 && (a = !0);
        }
      ),
    a)
  )
    return lA(i, t);
  Lo = {
    "General Number": "General",
    "General Date": De[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": De[15],
    "Short Date": De[14],
    "Long Time": De[19],
    "Medium Time": De[18],
    "Short Time": De[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: De[2],
    Standard: De[4],
    Percent: De[10],
    Scientific: De[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@',
  };
  var s,
    c = [],
    l;
  It != null && t.dense == null && (t.dense = It);
  var d = {},
    u = [],
    h = t.dense ? [] : {},
    m = "",
    p = {},
    f = {},
    g = Gr('<Data ss:Type="String">'),
    T = 0,
    E = 0,
    x = 0,
    O = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } },
    z = {},
    F = {},
    C = "",
    P = 0,
    M = [],
    X = {},
    G = {},
    R = 0,
    re = [],
    be = [],
    oe = {},
    Ce = [],
    _e,
    He = !1,
    le = [],
    ye = [],
    K = {},
    A = 0,
    V = 0,
    D = { Sheets: [], WBProps: { date1904: !1 } },
    I = {};
  (Vo.lastIndex = 0), (i = i.replace(/<!--([\s\S]*?)-->/gm, ""));
  for (var Y = ""; (s = Vo.exec(i)); )
    switch ((s[3] = (Y = s[3]).toLowerCase())) {
      case "data":
        if (Y == "data") {
          if (s[1] === "/") {
            if ((l = c.pop())[0] !== s[3])
              throw new Error("Bad state: " + l.join("|"));
          } else s[0].charAt(s[0].length - 2) !== "/" && c.push([s[3], !0]);
          break;
        }
        if (c[c.length - 1][1]) break;
        s[1] === "/"
          ? JS(
              i.slice(T, s.index),
              C,
              g,
              c[c.length - 1][0] == "comment" ? oe : p,
              { c: E, r: x },
              z,
              Ce[E],
              f,
              le,
              t
            )
          : ((C = ""), (g = Gr(s[0])), (T = s.index + s[0].length));
        break;
      case "cell":
        if (s[1] === "/")
          if (
            (be.length > 0 && (p.c = be),
            (!t.sheetRows || t.sheetRows > x) &&
              p.v !== void 0 &&
              (t.dense
                ? (h[x] || (h[x] = []), (h[x][E] = p))
                : (h[Mt(E) + Ut(x)] = p)),
            p.HRef &&
              ((p.l = { Target: $e(p.HRef) }),
              p.HRefScreenTip && (p.l.Tooltip = p.HRefScreenTip),
              delete p.HRef,
              delete p.HRefScreenTip),
            (p.MergeAcross || p.MergeDown) &&
              ((A = E + (parseInt(p.MergeAcross, 10) | 0)),
              (V = x + (parseInt(p.MergeDown, 10) | 0)),
              M.push({ s: { c: E, r: x }, e: { c: A, r: V } })),
            !t.sheetStubs)
          )
            p.MergeAcross ? (E = A + 1) : ++E;
          else if (p.MergeAcross || p.MergeDown) {
            for (var me = E; me <= A; ++me)
              for (var ce = x; ce <= V; ++ce)
                (me > E || ce > x) &&
                  (t.dense
                    ? (h[ce] || (h[ce] = []), (h[ce][me] = { t: "z" }))
                    : (h[Mt(me) + Ut(ce)] = { t: "z" }));
            E = A + 1;
          } else ++E;
        else
          (p = qS(s[0])),
            p.Index && (E = +p.Index - 1),
            E < O.s.c && (O.s.c = E),
            E > O.e.c && (O.e.c = E),
            s[0].slice(-2) === "/>" && ++E,
            (be = []);
        break;
      case "row":
        s[1] === "/" || s[0].slice(-2) === "/>"
          ? (x < O.s.r && (O.s.r = x),
            x > O.e.r && (O.e.r = x),
            s[0].slice(-2) === "/>" &&
              ((f = Gr(s[0])), f.Index && (x = +f.Index - 1)),
            (E = 0),
            ++x)
          : ((f = Gr(s[0])),
            f.Index && (x = +f.Index - 1),
            (K = {}),
            (f.AutoFitHeight == "0" || f.Height) &&
              ((K.hpx = parseInt(f.Height, 10)),
              (K.hpt = Cg(K.hpx)),
              (ye[x] = K)),
            f.Hidden == "1" && ((K.hidden = !0), (ye[x] = K)));
        break;
      case "worksheet":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
          u.push(m),
            O.s.r <= O.e.r &&
              O.s.c <= O.e.c &&
              ((h["!ref"] = ze(O)),
              t.sheetRows &&
                t.sheetRows <= O.e.r &&
                ((h["!fullref"] = h["!ref"]),
                (O.e.r = t.sheetRows - 1),
                (h["!ref"] = ze(O)))),
            M.length && (h["!merges"] = M),
            Ce.length > 0 && (h["!cols"] = Ce),
            ye.length > 0 && (h["!rows"] = ye),
            (d[m] = h);
        } else
          (O = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }),
            (x = E = 0),
            c.push([s[3], !1]),
            (l = Gr(s[0])),
            (m = $e(l.Name)),
            (h = t.dense ? [] : {}),
            (M = []),
            (le = []),
            (ye = []),
            (I = { name: m, Hidden: 0 }),
            D.Sheets.push(I);
        break;
      case "table":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
        } else {
          if (s[0].slice(-2) == "/>") break;
          c.push([s[3], !1]), (Ce = []), (He = !1);
        }
        break;
      case "style":
        s[1] === "/" ? QS(z, F, t) : (F = Gr(s[0]));
        break;
      case "numberformat":
        (F.nf = $e(Gr(s[0]).Format || "General")),
          Lo[F.nf] && (F.nf = Lo[F.nf]);
        for (var ue = 0; ue != 392 && De[ue] != F.nf; ++ue);
        if (ue == 392) {
          for (ue = 57; ue != 392; ++ue)
            if (De[ue] == null) {
              bn(F.nf, ue);
              break;
            }
        }
        break;
      case "column":
        if (c[c.length - 1][0] !== "table") break;
        if (
          ((_e = Gr(s[0])),
          _e.Hidden && ((_e.hidden = !0), delete _e.Hidden),
          _e.Width && (_e.wpx = parseInt(_e.Width, 10)),
          !He && _e.wpx > 10)
        ) {
          (He = !0), (lr = kg);
          for (var Z = 0; Z < Ce.length; ++Z) Ce[Z] && ha(Ce[Z]);
        }
        He && ha(_e), (Ce[_e.Index - 1 || Ce.length] = _e);
        for (var Ve = 0; Ve < +_e.Span; ++Ve) Ce[Ce.length] = Vt(_e);
        break;
      case "namedrange":
        if (s[1] === "/") break;
        D.Names || (D.Names = []);
        var S = Te(s[0]),
          pt = { Name: S.Name, Ref: la(S.RefersTo.slice(1), { r: 0, c: 0 }) };
        D.Sheets.length > 0 && (pt.Sheet = D.Sheets.length - 1),
          D.Names.push(pt);
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (s[0].slice(-2) === "/>") break;
        s[1] === "/" ? (C += i.slice(P, s.index)) : (P = s.index + s[0].length);
        break;
      case "interior":
        if (!t.cellStyles) break;
        F.Interior = Gr(s[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (s[0].slice(-2) === "/>") break;
        s[1] === "/"
          ? Lw(X, Y, i.slice(R, s.index))
          : (R = s.index + s[0].length);
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
        } else c.push([s[3], !1]);
        break;
      case "comment":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
          eA(oe), be.push(oe);
        } else c.push([s[3], !1]), (l = Gr(s[0])), (oe = { a: l.Author });
        break;
      case "autofilter":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
        } else if (s[0].charAt(s[0].length - 2) !== "/") {
          var We = Gr(s[0]);
          (h["!autofilter"] = { ref: la(We.Range).replace(/\$/g, "") }),
            c.push([s[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
        } else s[0].charAt(s[0].length - 2) !== "/" && c.push([s[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (s[1] === "/") {
          if ((l = c.pop())[0] !== s[3])
            throw new Error("Bad state: " + l.join("|"));
        } else s[0].charAt(s[0].length - 2) !== "/" && c.push([s[3], !0]);
        break;
      case "null":
        break;
      default:
        if (
          (c.length == 0 && s[3] == "document") ||
          (c.length == 0 && s[3] == "uof")
        )
          return vp(i, t);
        var at = !0;
        switch (c[c.length - 1][0]) {
          case "officedocumentsettings":
            switch (s[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                at = !1;
            }
            break;
          case "componentoptions":
            switch (s[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                at = !1;
            }
            break;
          case "excelworkbook":
            switch (s[3]) {
              case "date1904":
                D.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                at = !1;
            }
            break;
          case "workbookoptions":
            switch (s[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                at = !1;
            }
            break;
          case "worksheetoptions":
            switch (s[3]) {
              case "visible":
                if (s[0].slice(-2) !== "/>")
                  if (s[1] === "/")
                    switch (i.slice(R, s.index)) {
                      case "SheetHidden":
                        I.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        I.Hidden = 2;
                        break;
                    }
                  else R = s.index + s[0].length;
                break;
              case "header":
                h["!margins"] || Po((h["!margins"] = {}), "xlml"),
                  isNaN(+Te(s[0]).Margin) ||
                    (h["!margins"].header = +Te(s[0]).Margin);
                break;
              case "footer":
                h["!margins"] || Po((h["!margins"] = {}), "xlml"),
                  isNaN(+Te(s[0]).Margin) ||
                    (h["!margins"].footer = +Te(s[0]).Margin);
                break;
              case "pagemargins":
                var Pe = Te(s[0]);
                h["!margins"] || Po((h["!margins"] = {}), "xlml"),
                  isNaN(+Pe.Top) || (h["!margins"].top = +Pe.Top),
                  isNaN(+Pe.Left) || (h["!margins"].left = +Pe.Left),
                  isNaN(+Pe.Right) || (h["!margins"].right = +Pe.Right),
                  isNaN(+Pe.Bottom) || (h["!margins"].bottom = +Pe.Bottom);
                break;
              case "displayrighttoleft":
                D.Views || (D.Views = []),
                  D.Views[0] || (D.Views[0] = {}),
                  (D.Views[0].RTL = !0);
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                h["!outline"] || (h["!outline"] = {}),
                  (h["!outline"].above = !0);
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                h["!outline"] || (h["!outline"] = {}),
                  (h["!outline"].left = !0);
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                at = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (s[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                at = !1;
            }
            break;
          case "pagebreaks":
            switch (s[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                at = !1;
            }
            break;
          case "autofilter":
            switch (s[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                at = !1;
            }
            break;
          case "querytable":
            switch (s[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                at = !1;
            }
            break;
          case "datavalidation":
            switch (s[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                at = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (s[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                at = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (s[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                at = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            at = !1;
            break;
        }
        if (at || s[3].match(/!\[CDATA/)) break;
        if (!c[c.length - 1][1])
          throw "Unrecognized tag: " + s[3] + "|" + c.join("|");
        if (c[c.length - 1][0] === "customdocumentproperties") {
          if (s[0].slice(-2) === "/>") break;
          s[1] === "/"
            ? YS(G, Y, re, i.slice(R, s.index))
            : ((re = s), (R = s.index + s[0].length));
          break;
        }
        if (t.WTF) throw "Unrecognized tag: " + s[3] + "|" + c.join("|");
    }
  var de = {};
  return (
    !t.bookSheets && !t.bookProps && (de.Sheets = d),
    (de.SheetNames = u),
    (de.Workbook = D),
    (de.SSF = Vt(De)),
    (de.Props = X),
    (de.Custprops = G),
    de
  );
}
function iu(e, r) {
  switch ((Nu((r = r || {})), r.type || "base64")) {
    case "base64":
      return qd(wr(e), r);
    case "binary":
    case "buffer":
    case "file":
      return qd(e, r);
    case "array":
      return qd(Tn(e), r);
  }
}
function tA(e) {
  var r = {},
    t = e.content;
  if (
    ((t.l = 28),
    (r.AnsiUserType = t.read_shift(0, "lpstr-ansi")),
    (r.AnsiClipboardFormat = pw(t)),
    t.length - t.l <= 4)
  )
    return r;
  var i = t.read_shift(4);
  if (
    i == 0 ||
    i > 40 ||
    ((t.l -= 4),
    (r.Reserved1 = t.read_shift(0, "lpstr-ansi")),
    t.length - t.l <= 4) ||
    ((i = t.read_shift(4)), i !== 1907505652) ||
    ((r.UnicodeClipboardFormat = gw(t)),
    (i = t.read_shift(4)),
    i == 0 || i > 40)
  )
    return r;
  (t.l -= 4), (r.Reserved2 = t.read_shift(0, "lpwstr"));
}
var rA = [60, 1084, 2066, 2165, 2175];
function iA(e, r, t, i, n) {
  var a = i,
    o = [],
    s = t.slice(t.l, t.l + a);
  if (n && n.enc && n.enc.insitu && s.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        n.enc.insitu(s);
    }
  o.push(s), (t.l += a);
  for (var c = ki(t, t.l), l = nu[c], d = 0; l != null && rA.indexOf(c) > -1; )
    (a = ki(t, t.l + 2)),
      (d = t.l + 4),
      c == 2066 ? (d += 4) : (c == 2165 || c == 2175) && (d += 12),
      (s = t.slice(d, t.l + 4 + a)),
      o.push(s),
      (t.l += 4 + a),
      (l = nu[(c = ki(t, t.l))]);
  var u = Gi(o);
  jt(u, 0);
  var h = 0;
  u.lens = [];
  for (var m = 0; m < o.length; ++m) u.lens.push(h), (h += o[m].length);
  if (u.length < i)
    throw (
      "XLS Record 0x" + e.toString(16) + " Truncated: " + u.length + " < " + i
    );
  return r.f(u, u.length, n);
}
function ai(e, r, t) {
  if (e.t !== "z" && e.XF) {
    var i = 0;
    try {
      (i = e.z || e.XF.numFmtId || 0), r.cellNF && (e.z = De[i]);
    } catch (a) {
      if (r.WTF) throw a;
    }
    if (!r || r.cellText !== !1)
      try {
        e.t === "e"
          ? (e.w = e.w || In[e.v])
          : i === 0 || i == "General"
          ? e.t === "n"
            ? (e.v | 0) === e.v
              ? (e.w = e.v.toString(10))
              : (e.w = Bo(e.v))
            : (e.w = wn(e.v))
          : (e.w = Pr(i, e.v, { date1904: !!t, dateNF: r && r.dateNF }));
      } catch (a) {
        if (r.WTF) throw a;
      }
    if (r.cellDates && i && e.t == "n" && pa(De[i] || String(i))) {
      var n = _n(e.v);
      n &&
        ((e.t = "d"), (e.v = new Date(n.y, n.m - 1, n.d, n.H, n.M, n.S, n.u)));
    }
  }
}
function Ec(e, r, t) {
  return { v: e, ixfe: r, t };
}
function nA(e, r) {
  var t = { opts: {} },
    i = {};
  It != null && r.dense == null && (r.dense = It);
  var n = r.dense ? [] : {},
    a = {},
    o = {},
    s = null,
    c = [],
    l = "",
    d = {},
    u,
    h = "",
    m,
    p,
    f,
    g,
    T = {},
    E = [],
    x,
    O,
    z = [],
    F = [],
    C = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] },
    P = {},
    M = function (Ne) {
      return Ne < 8 ? yn[Ne] : (Ne < 64 && F[Ne - 8]) || yn[Ne];
    },
    X = function (Ne, yt, Er) {
      var Ft = yt.XF.data;
      if (!(!Ft || !Ft.patternType || !Er || !Er.cellStyles)) {
        (yt.s = {}), (yt.s.patternType = Ft.patternType);
        var Qi;
        (Qi = zo(M(Ft.icvFore))) && (yt.s.fgColor = { rgb: Qi }),
          (Qi = zo(M(Ft.icvBack))) && (yt.s.bgColor = { rgb: Qi });
      }
    },
    G = function (Ne, yt, Er) {
      if (!(K > 1) && !(Er.sheetRows && Ne.r >= Er.sheetRows)) {
        if (
          (Er.cellStyles && yt.XF && yt.XF.data && X(Ne, yt, Er),
          delete yt.ixfe,
          delete yt.XF,
          (u = Ne),
          (h = Ie(Ne)),
          (!o || !o.s || !o.e) &&
            (o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }),
          Ne.r < o.s.r && (o.s.r = Ne.r),
          Ne.c < o.s.c && (o.s.c = Ne.c),
          Ne.r + 1 > o.e.r && (o.e.r = Ne.r + 1),
          Ne.c + 1 > o.e.c && (o.e.c = Ne.c + 1),
          Er.cellFormula && yt.f)
        ) {
          for (var Ft = 0; Ft < E.length; ++Ft)
            if (
              !(E[Ft][0].s.c > Ne.c || E[Ft][0].s.r > Ne.r) &&
              !(E[Ft][0].e.c < Ne.c || E[Ft][0].e.r < Ne.r)
            ) {
              (yt.F = ze(E[Ft][0])),
                (E[Ft][0].s.c != Ne.c || E[Ft][0].s.r != Ne.r) && delete yt.f,
                yt.f && (yt.f = "" + Yt(E[Ft][1], o, Ne, le, R));
              break;
            }
        }
        Er.dense
          ? (n[Ne.r] || (n[Ne.r] = []), (n[Ne.r][Ne.c] = yt))
          : (n[h] = yt);
      }
    },
    R = {
      enc: !1,
      sbcch: 0,
      snames: [],
      sharedf: T,
      arrayf: E,
      rrtabid: [],
      lastuser: "",
      biff: 8,
      codepage: 0,
      winlocked: 0,
      cellStyles: !!r && !!r.cellStyles,
      WTF: !!r && !!r.wtf,
    };
  r.password && (R.password = r.password);
  var re,
    be = [],
    oe = [],
    Ce = [],
    _e = [],
    He = !1,
    le = [];
  (le.SheetNames = R.snames),
    (le.sharedf = R.sharedf),
    (le.arrayf = R.arrayf),
    (le.names = []),
    (le.XTI = []);
  var ye = 0,
    K = 0,
    A = 0,
    V = [],
    D = [],
    I;
  (R.codepage = 1200), qr(1200);
  for (var Y = !1; e.l < e.length - 1; ) {
    var me = e.l,
      ce = e.read_shift(2);
    if (ce === 0 && ye === 10) break;
    var ue = e.l === e.length ? 0 : e.read_shift(2),
      Z = nu[ce];
    if (Z && Z.f) {
      if (r.bookSheets && ye === 133 && ce !== 133) break;
      if (((ye = ce), Z.r === 2 || Z.r == 12)) {
        var Ve = e.read_shift(2);
        if (
          ((ue -= 2),
          !R.enc && Ve !== ce && (((Ve & 255) << 8) | (Ve >> 8)) !== ce)
        )
          throw new Error("rt mismatch: " + Ve + "!=" + ce);
        Z.r == 12 && ((e.l += 10), (ue -= 10));
      }
      var S = {};
      if (
        (ce === 10 ? (S = Z.f(e, ue, R)) : (S = iA(ce, Z, e, ue, R)),
        K == 0 && [9, 521, 1033, 2057].indexOf(ye) === -1)
      )
        continue;
      switch (ce) {
        case 34:
          t.opts.Date1904 = C.WBProps.date1904 = S;
          break;
        case 134:
          t.opts.WriteProtect = !0;
          break;
        case 47:
          if ((R.enc || (e.l = 0), (R.enc = S), !r.password))
            throw new Error("File is password-protected");
          if (S.valid == null) throw new Error("Encryption scheme unsupported");
          if (!S.valid) throw new Error("Password is incorrect");
          break;
        case 92:
          R.lastuser = S;
          break;
        case 66:
          var pt = Number(S);
          switch (pt) {
            case 21010:
              pt = 1200;
              break;
            case 32768:
              pt = 1e4;
              break;
            case 32769:
              pt = 1252;
              break;
          }
          qr((R.codepage = pt)), (Y = !0);
          break;
        case 317:
          R.rrtabid = S;
          break;
        case 25:
          R.winlocked = S;
          break;
        case 439:
          t.opts.RefreshAll = S;
          break;
        case 12:
          t.opts.CalcCount = S;
          break;
        case 16:
          t.opts.CalcDelta = S;
          break;
        case 17:
          t.opts.CalcIter = S;
          break;
        case 13:
          t.opts.CalcMode = S;
          break;
        case 14:
          t.opts.CalcPrecision = S;
          break;
        case 95:
          t.opts.CalcSaveRecalc = S;
          break;
        case 15:
          R.CalcRefMode = S;
          break;
        case 2211:
          t.opts.FullCalc = S;
          break;
        case 129:
          S.fDialog && (n["!type"] = "dialog"),
            S.fBelow || ((n["!outline"] || (n["!outline"] = {})).above = !0),
            S.fRight || ((n["!outline"] || (n["!outline"] = {})).left = !0);
          break;
        case 224:
          z.push(S);
          break;
        case 430:
          le.push([S]), (le[le.length - 1].XTI = []);
          break;
        case 35:
        case 547:
          le[le.length - 1].push(S);
          break;
        case 24:
        case 536:
          (I = { Name: S.Name, Ref: Yt(S.rgce, o, null, le, R) }),
            S.itab > 0 && (I.Sheet = S.itab - 1),
            le.names.push(I),
            le[0] || ((le[0] = []), (le[0].XTI = [])),
            le[le.length - 1].push(S),
            S.Name == "_xlnm._FilterDatabase" &&
              S.itab > 0 &&
              S.rgce &&
              S.rgce[0] &&
              S.rgce[0][0] &&
              S.rgce[0][0][0] == "PtgArea3d" &&
              (D[S.itab - 1] = { ref: ze(S.rgce[0][0][1][2]) });
          break;
        case 22:
          R.ExternCount = S;
          break;
        case 23:
          le.length == 0 && ((le[0] = []), (le[0].XTI = [])),
            (le[le.length - 1].XTI = le[le.length - 1].XTI.concat(S)),
            (le.XTI = le.XTI.concat(S));
          break;
        case 2196:
          if (R.biff < 8) break;
          I != null && (I.Comment = S[1]);
          break;
        case 18:
          n["!protect"] = S;
          break;
        case 19:
          S !== 0 && R.WTF && console.error("Password verifier: " + S);
          break;
        case 133:
          (a[S.pos] = S), R.snames.push(S.name);
          break;
        case 10:
          {
            if (--K) break;
            if (o.e) {
              if (o.e.r > 0 && o.e.c > 0) {
                if (
                  (o.e.r--,
                  o.e.c--,
                  (n["!ref"] = ze(o)),
                  r.sheetRows && r.sheetRows <= o.e.r)
                ) {
                  var We = o.e.r;
                  (o.e.r = r.sheetRows - 1),
                    (n["!fullref"] = n["!ref"]),
                    (n["!ref"] = ze(o)),
                    (o.e.r = We);
                }
                o.e.r++, o.e.c++;
              }
              be.length > 0 && (n["!merges"] = be),
                oe.length > 0 && (n["!objects"] = oe),
                Ce.length > 0 && (n["!cols"] = Ce),
                _e.length > 0 && (n["!rows"] = _e),
                C.Sheets.push(P);
            }
            l === "" ? (d = n) : (i[l] = n), (n = r.dense ? [] : {});
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (
              (R.biff === 8 &&
                (R.biff =
                  { 9: 2, 521: 3, 1033: 4 }[ce] ||
                  { 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[
                    S.BIFFVer
                  ] ||
                  8),
              (R.biffguess = S.BIFFVer == 0),
              S.BIFFVer == 0 &&
                S.dt == 4096 &&
                ((R.biff = 5), (Y = !0), qr((R.codepage = 28591))),
              R.biff == 8 && S.BIFFVer == 0 && S.dt == 16 && (R.biff = 2),
              K++)
            )
              break;
            if (
              ((n = r.dense ? [] : {}),
              R.biff < 8 &&
                !Y &&
                ((Y = !0), qr((R.codepage = r.codepage || 1252))),
              R.biff < 5 || (S.BIFFVer == 0 && S.dt == 4096))
            ) {
              l === "" && (l = "Sheet1"),
                (o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } });
              var at = { pos: e.l - ue, name: l };
              (a[at.pos] = at), R.snames.push(l);
            } else l = (a[me] || { name: "" }).name;
            S.dt == 32 && (n["!type"] = "chart"),
              S.dt == 64 && (n["!type"] = "macro"),
              (be = []),
              (oe = []),
              (R.arrayf = E = []),
              (Ce = []),
              (_e = []),
              (He = !1),
              (P = { Hidden: (a[me] || { hs: 0 }).hs, name: l });
          }
          break;
        case 515:
        case 3:
        case 2:
          n["!type"] == "chart" &&
            (r.dense ? (n[S.r] || [])[S.c] : n[Ie({ c: S.c, r: S.r })]) &&
            ++S.c,
            (x = { ixfe: S.ixfe, XF: z[S.ixfe] || {}, v: S.val, t: "n" }),
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
            ai(x, r, t.opts.Date1904),
            G({ c: S.c, r: S.r }, x, r);
          break;
        case 5:
        case 517:
          (x = { ixfe: S.ixfe, XF: z[S.ixfe], v: S.val, t: S.t }),
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
            ai(x, r, t.opts.Date1904),
            G({ c: S.c, r: S.r }, x, r);
          break;
        case 638:
          (x = { ixfe: S.ixfe, XF: z[S.ixfe], v: S.rknum, t: "n" }),
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
            ai(x, r, t.opts.Date1904),
            G({ c: S.c, r: S.r }, x, r);
          break;
        case 189:
          for (var Pe = S.c; Pe <= S.C; ++Pe) {
            var de = S.rkrec[Pe - S.c][0];
            (x = { ixfe: de, XF: z[de], v: S.rkrec[Pe - S.c][1], t: "n" }),
              A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
              ai(x, r, t.opts.Date1904),
              G({ c: Pe, r: S.r }, x, r);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (S.val == "String") {
              s = S;
              break;
            }
            if (
              ((x = Ec(S.val, S.cell.ixfe, S.tt)),
              (x.XF = z[x.ixfe]),
              r.cellFormula)
            ) {
              var bt = S.formula;
              if (bt && bt[0] && bt[0][0] && bt[0][0][0] == "PtgExp") {
                var kr = bt[0][0][1][0],
                  Zr = bt[0][0][1][1],
                  ui = Ie({ r: kr, c: Zr });
                T[ui]
                  ? (x.f = "" + Yt(S.formula, o, S.cell, le, R))
                  : (x.F = ((r.dense ? (n[kr] || [])[Zr] : n[ui]) || {}).F);
              } else x.f = "" + Yt(S.formula, o, S.cell, le, R);
            }
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
              ai(x, r, t.opts.Date1904),
              G(S.cell, x, r),
              (s = S);
          }
          break;
        case 7:
        case 519:
          if (s)
            (s.val = S),
              (x = Ec(S, s.cell.ixfe, "s")),
              (x.XF = z[x.ixfe]),
              r.cellFormula && (x.f = "" + Yt(s.formula, o, s.cell, le, R)),
              A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
              ai(x, r, t.opts.Date1904),
              G(s.cell, x, r),
              (s = null);
          else throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            E.push(S);
            var _a = Ie(S[0].s);
            if (
              ((m = r.dense ? (n[S[0].s.r] || [])[S[0].s.c] : n[_a]),
              r.cellFormula && m)
            ) {
              if (!s || !_a || !m) break;
              (m.f = "" + Yt(S[1], o, S[0], le, R)), (m.F = ze(S[0]));
            }
          }
          break;
        case 1212:
          {
            if (!r.cellFormula) break;
            if (h) {
              if (!s) break;
              (T[Ie(s.cell)] = S[0]),
                (m = r.dense ? (n[s.cell.r] || [])[s.cell.c] : n[Ie(s.cell)]),
                ((m || {}).f = "" + Yt(S[0], o, u, le, R));
            }
          }
          break;
        case 253:
          (x = Ec(c[S.isst].t, S.ixfe, "s")),
            c[S.isst].h && (x.h = c[S.isst].h),
            (x.XF = z[x.ixfe]),
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
            ai(x, r, t.opts.Date1904),
            G({ c: S.c, r: S.r }, x, r);
          break;
        case 513:
          r.sheetStubs &&
            ((x = { ixfe: S.ixfe, XF: z[S.ixfe], t: "z" }),
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
            ai(x, r, t.opts.Date1904),
            G({ c: S.c, r: S.r }, x, r));
          break;
        case 190:
          if (r.sheetStubs)
            for (var Ai = S.c; Ai <= S.C; ++Ai) {
              var pr = S.ixfe[Ai - S.c];
              (x = { ixfe: pr, XF: z[pr], t: "z" }),
                A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
                ai(x, r, t.opts.Date1904),
                G({ c: Ai, r: S.r }, x, r);
            }
          break;
        case 214:
        case 516:
        case 4:
          (x = Ec(S.val, S.ixfe, "s")),
            (x.XF = z[x.ixfe]),
            A > 0 && (x.z = V[(x.ixfe >> 8) & 63]),
            ai(x, r, t.opts.Date1904),
            G({ c: S.c, r: S.r }, x, r);
          break;
        case 0:
        case 512:
          K === 1 && (o = S);
          break;
        case 252:
          c = S;
          break;
        case 1054:
          if (R.biff == 4) {
            V[A++] = S[1];
            for (var fi = 0; fi < A + 163 && De[fi] != S[1]; ++fi);
            fi >= 163 && bn(S[1], A + 163);
          } else bn(S[1], S[0]);
          break;
        case 30:
          {
            V[A++] = S;
            for (var Ii = 0; Ii < A + 163 && De[Ii] != S; ++Ii);
            Ii >= 163 && bn(S, A + 163);
          }
          break;
        case 229:
          be = be.concat(S);
          break;
        case 93:
          oe[S.cmo[0]] = R.lastobj = S;
          break;
        case 438:
          R.lastobj.TxO = S;
          break;
        case 127:
          R.lastobj.ImData = S;
          break;
        case 440:
          for (g = S[0].s.r; g <= S[0].e.r; ++g)
            for (f = S[0].s.c; f <= S[0].e.c; ++f)
              (m = r.dense ? (n[g] || [])[f] : n[Ie({ c: f, r: g })]),
                m && (m.l = S[1]);
          break;
        case 2048:
          for (g = S[0].s.r; g <= S[0].e.r; ++g)
            for (f = S[0].s.c; f <= S[0].e.c; ++f)
              (m = r.dense ? (n[g] || [])[f] : n[Ie({ c: f, r: g })]),
                m && m.l && (m.l.Tooltip = S[1]);
          break;
        case 28:
          {
            if (R.biff <= 5 && R.biff >= 2) break;
            m = r.dense ? (n[S[0].r] || [])[S[0].c] : n[Ie(S[0])];
            var ba = oe[S[2]];
            m ||
              (r.dense
                ? (n[S[0].r] || (n[S[0].r] = []),
                  (m = n[S[0].r][S[0].c] = { t: "z" }))
                : (m = n[Ie(S[0])] = { t: "z" }),
              (o.e.r = Math.max(o.e.r, S[0].r)),
              (o.s.r = Math.min(o.s.r, S[0].r)),
              (o.e.c = Math.max(o.e.c, S[0].c)),
              (o.s.c = Math.min(o.s.c, S[0].c))),
              m.c || (m.c = []),
              (p = { a: S[1], t: ba.TxO.t }),
              m.c.push(p);
          }
          break;
        case 2173:
          TE(z[S.ixfe], S.ext);
          break;
        case 125:
          {
            if (!R.cellStyles) break;
            for (; S.e >= S.s; )
              (Ce[S.e--] = {
                width: S.w / 256,
                level: S.level || 0,
                hidden: !!(S.flags & 1),
              }),
                He || ((He = !0), Fu(S.w / 256)),
                ha(Ce[S.e + 1]);
          }
          break;
        case 520:
          {
            var ir = {};
            S.level != null && ((_e[S.r] = ir), (ir.level = S.level)),
              S.hidden && ((_e[S.r] = ir), (ir.hidden = !0)),
              S.hpt && ((_e[S.r] = ir), (ir.hpt = S.hpt), (ir.hpx = Ho(S.hpt)));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          n["!margins"] || Po((n["!margins"] = {})),
            (n["!margins"][
              { 38: "left", 39: "right", 40: "top", 41: "bottom" }[ce]
            ] = S);
          break;
        case 161:
          n["!margins"] || Po((n["!margins"] = {})),
            (n["!margins"].header = S.header),
            (n["!margins"].footer = S.footer);
          break;
        case 574:
          S.RTL && (C.Views[0].RTL = !0);
          break;
        case 146:
          F = S;
          break;
        case 2198:
          re = S;
          break;
        case 140:
          O = S;
          break;
        case 442:
          l
            ? (P.CodeName = S || P.name)
            : (C.WBProps.CodeName = S || "ThisWorkbook");
          break;
      }
    } else
      Z || console.error("Missing Info for XLS Record 0x" + ce.toString(16)),
        (e.l += ue);
  }
  return (
    (t.SheetNames = ci(a)
      .sort(function (Qr, Ne) {
        return Number(Qr) - Number(Ne);
      })
      .map(function (Qr) {
        return a[Qr].name;
      })),
    r.bookSheets || (t.Sheets = i),
    !t.SheetNames.length && d["!ref"]
      ? (t.SheetNames.push("Sheet1"), t.Sheets && (t.Sheets.Sheet1 = d))
      : (t.Preamble = d),
    t.Sheets &&
      D.forEach(function (Qr, Ne) {
        t.Sheets[t.SheetNames[Ne]]["!autofilter"] = Qr;
      }),
    (t.Strings = c),
    (t.SSF = Vt(De)),
    R.enc && (t.Encryption = R.enc),
    re && (t.Themes = re),
    (t.Metadata = {}),
    O !== void 0 && (t.Metadata.Country = O),
    le.names.length > 0 && (C.Names = le.names),
    (t.Workbook = C),
    t
  );
}
var fp = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae",
};
function aA(e, r, t) {
  var i = Ue.find(e, "/!DocumentSummaryInformation");
  if (i && i.size > 0)
    try {
      var n = Km(i, ww, fp.DSI);
      for (var a in n) r[a] = n[a];
    } catch (l) {
      if (t.WTF) throw l;
    }
  var o = Ue.find(e, "/!SummaryInformation");
  if (o && o.size > 0)
    try {
      var s = Km(o, kw, fp.SI);
      for (var c in s) r[c] == null && (r[c] = s[c]);
    } catch (l) {
      if (t.WTF) throw l;
    }
  r.HeadingPairs &&
    r.TitlesOfParts &&
    (og(r.HeadingPairs, r.TitlesOfParts, r, t),
    delete r.HeadingPairs,
    delete r.TitlesOfParts);
}
function Hg(e, r) {
  r || (r = {}), Nu(r), wp(), r.codepage && lu(r.codepage);
  var t, i;
  if (e.FullPaths) {
    if (Ue.find(e, "/encryption"))
      throw new Error("File is password-protected");
    (t = Ue.find(e, "!CompObj")),
      (i = Ue.find(e, "/Workbook") || Ue.find(e, "/Book"));
  } else {
    switch (r.type) {
      case "base64":
        e = Xr(wr(e));
        break;
      case "binary":
        e = Xr(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    jt(e, 0), (i = { content: e });
  }
  var n, a;
  if ((t && tA(t), r.bookProps && !r.bookSheets)) n = {};
  else {
    var o = je ? "buffer" : "array";
    if (i && i.content) n = nA(i.content, r);
    else if ((a = Ue.find(e, "PerfectOffice_MAIN")) && a.content)
      n = Oo.to_workbook(a.content, ((r.type = o), r));
    else if ((a = Ue.find(e, "NativeContent_MAIN")) && a.content)
      n = Oo.to_workbook(a.content, ((r.type = o), r));
    else
      throw (a = Ue.find(e, "MN0")) && a.content
        ? new Error("Unsupported Works 4 for Mac file")
        : new Error("Cannot find Workbook stream");
    r.bookVBA &&
      e.FullPaths &&
      Ue.find(e, "/_VBA_PROJECT_CUR/VBA/dir") &&
      (n.vbaraw = WE(e));
  }
  var s = {};
  return (
    e.FullPaths && aA(e, s, r),
    (n.Props = n.Custprops = s),
    r.bookFiles && (n.cfb = e),
    n
  );
}
var Nc = {
    0: { f: VT },
    1: { f: WT },
    2: { f: JT },
    3: { f: qT },
    4: { f: $T },
    5: { f: QT },
    6: { f: rS },
    7: { f: YT },
    8: { f: sS },
    9: { f: oS },
    10: { f: nS },
    11: { f: aS },
    12: { f: GT },
    13: { f: eS },
    14: { f: KT },
    15: { f: XT },
    16: { f: Bg },
    17: { f: iS },
    18: { f: ZT },
    19: { f: Eu },
    20: {},
    21: {},
    22: {},
    23: {},
    24: {},
    25: {},
    26: {},
    27: {},
    28: {},
    29: {},
    30: {},
    31: {},
    32: {},
    33: {},
    34: {},
    35: { T: 1 },
    36: { T: -1 },
    37: { T: 1 },
    38: { T: -1 },
    39: { f: OS },
    40: {},
    42: {},
    43: { f: nE },
    44: { f: iE },
    45: { f: aE },
    46: { f: sE },
    47: { f: oE },
    48: {},
    49: { f: cw },
    50: {},
    51: { f: AE },
    52: { T: 1 },
    53: { T: -1 },
    54: { T: 1 },
    55: { T: -1 },
    56: { T: 1 },
    57: { T: -1 },
    58: {},
    59: {},
    60: { f: xg },
    62: { f: tS },
    63: { f: RE },
    64: { f: gS },
    65: {},
    66: {},
    67: {},
    68: {},
    69: {},
    70: {},
    128: {},
    129: { T: 1 },
    130: { T: -1 },
    131: { T: 1, f: tr, p: 0 },
    132: { T: -1 },
    133: { T: 1 },
    134: { T: -1 },
    135: { T: 1 },
    136: { T: -1 },
    137: { T: 1, f: pS },
    138: { T: -1 },
    139: { T: 1 },
    140: { T: -1 },
    141: { T: 1 },
    142: { T: -1 },
    143: { T: 1 },
    144: { T: -1 },
    145: { T: 1 },
    146: { T: -1 },
    147: { f: HT },
    148: { f: UT, p: 16 },
    151: { f: dS },
    152: {},
    153: { f: MS },
    154: {},
    155: {},
    156: { f: DS },
    157: {},
    158: {},
    159: { T: 1, f: kk },
    160: { T: -1 },
    161: { T: 1, f: An },
    162: { T: -1 },
    163: { T: 1 },
    164: { T: -1 },
    165: { T: 1 },
    166: { T: -1 },
    167: {},
    168: {},
    169: {},
    170: {},
    171: {},
    172: { T: 1 },
    173: { T: -1 },
    174: {},
    175: {},
    176: { f: cS },
    177: { T: 1 },
    178: { T: -1 },
    179: { T: 1 },
    180: { T: -1 },
    181: { T: 1 },
    182: { T: -1 },
    183: { T: 1 },
    184: { T: -1 },
    185: { T: 1 },
    186: { T: -1 },
    187: { T: 1 },
    188: { T: -1 },
    189: { T: 1 },
    190: { T: -1 },
    191: { T: 1 },
    192: { T: -1 },
    193: { T: 1 },
    194: { T: -1 },
    195: { T: 1 },
    196: { T: -1 },
    197: { T: 1 },
    198: { T: -1 },
    199: { T: 1 },
    200: { T: -1 },
    201: { T: 1 },
    202: { T: -1 },
    203: { T: 1 },
    204: { T: -1 },
    205: { T: 1 },
    206: { T: -1 },
    207: { T: 1 },
    208: { T: -1 },
    209: { T: 1 },
    210: { T: -1 },
    211: { T: 1 },
    212: { T: -1 },
    213: { T: 1 },
    214: { T: -1 },
    215: { T: 1 },
    216: { T: -1 },
    217: { T: 1 },
    218: { T: -1 },
    219: { T: 1 },
    220: { T: -1 },
    221: { T: 1 },
    222: { T: -1 },
    223: { T: 1 },
    224: { T: -1 },
    225: { T: 1 },
    226: { T: -1 },
    227: { T: 1 },
    228: { T: -1 },
    229: { T: 1 },
    230: { T: -1 },
    231: { T: 1 },
    232: { T: -1 },
    233: { T: 1 },
    234: { T: -1 },
    235: { T: 1 },
    236: { T: -1 },
    237: { T: 1 },
    238: { T: -1 },
    239: { T: 1 },
    240: { T: -1 },
    241: { T: 1 },
    242: { T: -1 },
    243: { T: 1 },
    244: { T: -1 },
    245: { T: 1 },
    246: { T: -1 },
    247: { T: 1 },
    248: { T: -1 },
    249: { T: 1 },
    250: { T: -1 },
    251: { T: 1 },
    252: { T: -1 },
    253: { T: 1 },
    254: { T: -1 },
    255: { T: 1 },
    256: { T: -1 },
    257: { T: 1 },
    258: { T: -1 },
    259: { T: 1 },
    260: { T: -1 },
    261: { T: 1 },
    262: { T: -1 },
    263: { T: 1 },
    264: { T: -1 },
    265: { T: 1 },
    266: { T: -1 },
    267: { T: 1 },
    268: { T: -1 },
    269: { T: 1 },
    270: { T: -1 },
    271: { T: 1 },
    272: { T: -1 },
    273: { T: 1 },
    274: { T: -1 },
    275: { T: 1 },
    276: { T: -1 },
    277: {},
    278: { T: 1 },
    279: { T: -1 },
    280: { T: 1 },
    281: { T: -1 },
    282: { T: 1 },
    283: { T: 1 },
    284: { T: -1 },
    285: { T: 1 },
    286: { T: -1 },
    287: { T: 1 },
    288: { T: -1 },
    289: { T: 1 },
    290: { T: -1 },
    291: { T: 1 },
    292: { T: -1 },
    293: { T: 1 },
    294: { T: -1 },
    295: { T: 1 },
    296: { T: -1 },
    297: { T: 1 },
    298: { T: -1 },
    299: { T: 1 },
    300: { T: -1 },
    301: { T: 1 },
    302: { T: -1 },
    303: { T: 1 },
    304: { T: -1 },
    305: { T: 1 },
    306: { T: -1 },
    307: { T: 1 },
    308: { T: -1 },
    309: { T: 1 },
    310: { T: -1 },
    311: { T: 1 },
    312: { T: -1 },
    313: { T: -1 },
    314: { T: 1 },
    315: { T: -1 },
    316: { T: 1 },
    317: { T: -1 },
    318: { T: 1 },
    319: { T: -1 },
    320: { T: 1 },
    321: { T: -1 },
    322: { T: 1 },
    323: { T: -1 },
    324: { T: 1 },
    325: { T: -1 },
    326: { T: 1 },
    327: { T: -1 },
    328: { T: 1 },
    329: { T: -1 },
    330: { T: 1 },
    331: { T: -1 },
    332: { T: 1 },
    333: { T: -1 },
    334: { T: 1 },
    335: { f: SE },
    336: { T: -1 },
    337: { f: IE, T: 1 },
    338: { T: -1 },
    339: { T: 1 },
    340: { T: -1 },
    341: { T: 1 },
    342: { T: -1 },
    343: { T: 1 },
    344: { T: -1 },
    345: { T: 1 },
    346: { T: -1 },
    347: { T: 1 },
    348: { T: -1 },
    349: { T: 1 },
    350: { T: -1 },
    351: {},
    352: {},
    353: { T: 1 },
    354: { T: -1 },
    355: { f: Jd },
    357: {},
    358: {},
    359: {},
    360: { T: 1 },
    361: {},
    362: { f: vg },
    363: {},
    364: {},
    366: {},
    367: {},
    368: {},
    369: {},
    370: {},
    371: {},
    372: { T: 1 },
    373: { T: -1 },
    374: { T: 1 },
    375: { T: -1 },
    376: { T: 1 },
    377: { T: -1 },
    378: { T: 1 },
    379: { T: -1 },
    380: { T: 1 },
    381: { T: -1 },
    382: { T: 1 },
    383: { T: -1 },
    384: { T: 1 },
    385: { T: -1 },
    386: { T: 1 },
    387: { T: -1 },
    388: { T: 1 },
    389: { T: -1 },
    390: { T: 1 },
    391: { T: -1 },
    392: { T: 1 },
    393: { T: -1 },
    394: { T: 1 },
    395: { T: -1 },
    396: {},
    397: {},
    398: {},
    399: {},
    400: {},
    401: { T: 1 },
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    409: {},
    410: {},
    411: {},
    412: {},
    413: {},
    414: {},
    415: {},
    416: {},
    417: {},
    418: {},
    419: {},
    420: {},
    421: {},
    422: { T: 1 },
    423: { T: 1 },
    424: { T: -1 },
    425: { T: -1 },
    426: { f: uS },
    427: { f: fS },
    428: {},
    429: { T: 1 },
    430: { T: -1 },
    431: { T: 1 },
    432: { T: -1 },
    433: { T: 1 },
    434: { T: -1 },
    435: { T: 1 },
    436: { T: -1 },
    437: { T: 1 },
    438: { T: -1 },
    439: { T: 1 },
    440: { T: -1 },
    441: { T: 1 },
    442: { T: -1 },
    443: { T: 1 },
    444: { T: -1 },
    445: { T: 1 },
    446: { T: -1 },
    447: { T: 1 },
    448: { T: -1 },
    449: { T: 1 },
    450: { T: -1 },
    451: { T: 1 },
    452: { T: -1 },
    453: { T: 1 },
    454: { T: -1 },
    455: { T: 1 },
    456: { T: -1 },
    457: { T: 1 },
    458: { T: -1 },
    459: { T: 1 },
    460: { T: -1 },
    461: { T: 1 },
    462: { T: -1 },
    463: { T: 1 },
    464: { T: -1 },
    465: { T: 1 },
    466: { T: -1 },
    467: { T: 1 },
    468: { T: -1 },
    469: { T: 1 },
    470: { T: -1 },
    471: {},
    472: {},
    473: { T: 1 },
    474: { T: -1 },
    475: {},
    476: { f: mS },
    477: {},
    478: {},
    479: { T: 1 },
    480: { T: -1 },
    481: { T: 1 },
    482: { T: -1 },
    483: { T: 1 },
    484: { T: -1 },
    485: { f: zT },
    486: { T: 1 },
    487: { T: -1 },
    488: { T: 1 },
    489: { T: -1 },
    490: { T: 1 },
    491: { T: -1 },
    492: { T: 1 },
    493: { T: -1 },
    494: { f: lS },
    495: { T: 1 },
    496: { T: -1 },
    497: { T: 1 },
    498: { T: -1 },
    499: {},
    500: { T: 1 },
    501: { T: -1 },
    502: { T: 1 },
    503: { T: -1 },
    504: {},
    505: { T: 1 },
    506: { T: -1 },
    507: {},
    508: { T: 1 },
    509: { T: -1 },
    510: { T: 1 },
    511: { T: -1 },
    512: {},
    513: {},
    514: { T: 1 },
    515: { T: -1 },
    516: { T: 1 },
    517: { T: -1 },
    518: { T: 1 },
    519: { T: -1 },
    520: { T: 1 },
    521: { T: -1 },
    522: {},
    523: {},
    524: {},
    525: {},
    526: {},
    527: {},
    528: { T: 1 },
    529: { T: -1 },
    530: { T: 1 },
    531: { T: -1 },
    532: { T: 1 },
    533: { T: -1 },
    534: {},
    535: {},
    536: {},
    537: {},
    538: { T: 1 },
    539: { T: -1 },
    540: { T: 1 },
    541: { T: -1 },
    542: { T: 1 },
    548: {},
    549: {},
    550: { f: Jd },
    551: {},
    552: {},
    553: {},
    554: { T: 1 },
    555: { T: -1 },
    556: { T: 1 },
    557: { T: -1 },
    558: { T: 1 },
    559: { T: -1 },
    560: { T: 1 },
    561: { T: -1 },
    562: {},
    564: {},
    565: { T: 1 },
    566: { T: -1 },
    569: { T: 1 },
    570: { T: -1 },
    572: {},
    573: { T: 1 },
    574: { T: -1 },
    577: {},
    578: {},
    579: {},
    580: {},
    581: {},
    582: {},
    583: {},
    584: {},
    585: {},
    586: {},
    587: {},
    588: { T: -1 },
    589: {},
    590: { T: 1 },
    591: { T: -1 },
    592: { T: 1 },
    593: { T: -1 },
    594: { T: 1 },
    595: { T: -1 },
    596: {},
    597: { T: 1 },
    598: { T: -1 },
    599: { T: 1 },
    600: { T: -1 },
    601: { T: 1 },
    602: { T: -1 },
    603: { T: 1 },
    604: { T: -1 },
    605: { T: 1 },
    606: { T: -1 },
    607: {},
    608: { T: 1 },
    609: { T: -1 },
    610: {},
    611: { T: 1 },
    612: { T: -1 },
    613: { T: 1 },
    614: { T: -1 },
    615: { T: 1 },
    616: { T: -1 },
    617: { T: 1 },
    618: { T: -1 },
    619: { T: 1 },
    620: { T: -1 },
    625: {},
    626: { T: 1 },
    627: { T: -1 },
    628: { T: 1 },
    629: { T: -1 },
    630: { T: 1 },
    631: { T: -1 },
    632: { f: UE },
    633: { T: 1 },
    634: { T: -1 },
    635: { T: 1, f: VE },
    636: { T: -1 },
    637: { f: dw },
    638: { T: 1 },
    639: {},
    640: { T: -1 },
    641: { T: 1 },
    642: { T: -1 },
    643: { T: 1 },
    644: {},
    645: { T: -1 },
    646: { T: 1 },
    648: { T: 1 },
    649: {},
    650: { T: -1 },
    651: { f: wS },
    652: {},
    653: { T: 1 },
    654: { T: -1 },
    655: { T: 1 },
    656: { T: -1 },
    657: { T: 1 },
    658: { T: -1 },
    659: {},
    660: { T: 1 },
    661: {},
    662: { T: -1 },
    663: {},
    664: { T: 1 },
    665: {},
    666: { T: -1 },
    667: {},
    668: {},
    669: {},
    671: { T: 1 },
    672: { T: -1 },
    673: { T: 1 },
    674: { T: -1 },
    675: {},
    676: {},
    677: {},
    678: {},
    679: {},
    680: {},
    681: {},
    1024: {},
    1025: {},
    1026: { T: 1 },
    1027: { T: -1 },
    1028: { T: 1 },
    1029: { T: -1 },
    1030: {},
    1031: { T: 1 },
    1032: { T: -1 },
    1033: { T: 1 },
    1034: { T: -1 },
    1035: {},
    1036: {},
    1037: {},
    1038: { T: 1 },
    1039: { T: -1 },
    1040: {},
    1041: { T: 1 },
    1042: { T: -1 },
    1043: {},
    1044: {},
    1045: {},
    1046: { T: 1 },
    1047: { T: -1 },
    1048: { T: 1 },
    1049: { T: -1 },
    1050: {},
    1051: { T: 1 },
    1052: { T: 1 },
    1053: { f: vS },
    1054: { T: 1 },
    1055: {},
    1056: { T: 1 },
    1057: { T: -1 },
    1058: { T: 1 },
    1059: { T: -1 },
    1061: {},
    1062: { T: 1 },
    1063: { T: -1 },
    1064: { T: 1 },
    1065: { T: -1 },
    1066: { T: 1 },
    1067: { T: -1 },
    1068: { T: 1 },
    1069: { T: -1 },
    1070: { T: 1 },
    1071: { T: -1 },
    1072: { T: 1 },
    1073: { T: -1 },
    1075: { T: 1 },
    1076: { T: -1 },
    1077: { T: 1 },
    1078: { T: -1 },
    1079: { T: 1 },
    1080: { T: -1 },
    1081: { T: 1 },
    1082: { T: -1 },
    1083: { T: 1 },
    1084: { T: -1 },
    1085: {},
    1086: { T: 1 },
    1087: { T: -1 },
    1088: { T: 1 },
    1089: { T: -1 },
    1090: { T: 1 },
    1091: { T: -1 },
    1092: { T: 1 },
    1093: { T: -1 },
    1094: { T: 1 },
    1095: { T: -1 },
    1096: {},
    1097: { T: 1 },
    1098: {},
    1099: { T: -1 },
    1100: { T: 1 },
    1101: { T: -1 },
    1102: {},
    1103: {},
    1104: {},
    1105: {},
    1111: {},
    1112: {},
    1113: { T: 1 },
    1114: { T: -1 },
    1115: { T: 1 },
    1116: { T: -1 },
    1117: {},
    1118: { T: 1 },
    1119: { T: -1 },
    1120: { T: 1 },
    1121: { T: -1 },
    1122: { T: 1 },
    1123: { T: -1 },
    1124: { T: 1 },
    1125: { T: -1 },
    1126: {},
    1128: { T: 1 },
    1129: { T: -1 },
    1130: {},
    1131: { T: 1 },
    1132: { T: -1 },
    1133: { T: 1 },
    1134: { T: -1 },
    1135: { T: 1 },
    1136: { T: -1 },
    1137: { T: 1 },
    1138: { T: -1 },
    1139: { T: 1 },
    1140: { T: -1 },
    1141: {},
    1142: { T: 1 },
    1143: { T: -1 },
    1144: { T: 1 },
    1145: { T: -1 },
    1146: {},
    1147: { T: 1 },
    1148: { T: -1 },
    1149: { T: 1 },
    1150: { T: -1 },
    1152: { T: 1 },
    1153: { T: -1 },
    1154: { T: -1 },
    1155: { T: -1 },
    1156: { T: -1 },
    1157: { T: 1 },
    1158: { T: -1 },
    1159: { T: 1 },
    1160: { T: -1 },
    1161: { T: 1 },
    1162: { T: -1 },
    1163: { T: 1 },
    1164: { T: -1 },
    1165: { T: 1 },
    1166: { T: -1 },
    1167: { T: 1 },
    1168: { T: -1 },
    1169: { T: 1 },
    1170: { T: -1 },
    1171: {},
    1172: { T: 1 },
    1173: { T: -1 },
    1177: {},
    1178: { T: 1 },
    1180: {},
    1181: {},
    1182: {},
    2048: { T: 1 },
    2049: { T: -1 },
    2050: {},
    2051: { T: 1 },
    2052: { T: -1 },
    2053: {},
    2054: {},
    2055: { T: 1 },
    2056: { T: -1 },
    2057: { T: 1 },
    2058: { T: -1 },
    2060: {},
    2067: {},
    2068: { T: 1 },
    2069: { T: -1 },
    2070: {},
    2071: {},
    2072: { T: 1 },
    2073: { T: -1 },
    2075: {},
    2076: {},
    2077: { T: 1 },
    2078: { T: -1 },
    2079: {},
    2080: { T: 1 },
    2081: { T: -1 },
    2082: {},
    2083: { T: 1 },
    2084: { T: -1 },
    2085: { T: 1 },
    2086: { T: -1 },
    2087: { T: 1 },
    2088: { T: -1 },
    2089: { T: 1 },
    2090: { T: -1 },
    2091: {},
    2092: {},
    2093: { T: 1 },
    2094: { T: -1 },
    2095: {},
    2096: { T: 1 },
    2097: { T: -1 },
    2098: { T: 1 },
    2099: { T: -1 },
    2100: { T: 1 },
    2101: { T: -1 },
    2102: {},
    2103: { T: 1 },
    2104: { T: -1 },
    2105: {},
    2106: { T: 1 },
    2107: { T: -1 },
    2108: {},
    2109: { T: 1 },
    2110: { T: -1 },
    2111: { T: 1 },
    2112: { T: -1 },
    2113: { T: 1 },
    2114: { T: -1 },
    2115: {},
    2116: {},
    2117: {},
    2118: { T: 1 },
    2119: { T: -1 },
    2120: {},
    2121: { T: 1 },
    2122: { T: -1 },
    2123: { T: 1 },
    2124: { T: -1 },
    2125: {},
    2126: { T: 1 },
    2127: { T: -1 },
    2128: {},
    2129: { T: 1 },
    2130: { T: -1 },
    2131: { T: 1 },
    2132: { T: -1 },
    2133: { T: 1 },
    2134: {},
    2135: {},
    2136: {},
    2137: { T: 1 },
    2138: { T: -1 },
    2139: { T: 1 },
    2140: { T: -1 },
    2141: {},
    3072: {},
    3073: {},
    4096: { T: 1 },
    4097: { T: -1 },
    5002: { T: 1 },
    5003: { T: -1 },
    5081: { T: 1 },
    5082: { T: -1 },
    5083: {},
    5084: { T: 1 },
    5085: { T: -1 },
    5086: { T: 1 },
    5087: { T: -1 },
    5088: {},
    5089: {},
    5090: {},
    5092: { T: 1 },
    5093: { T: -1 },
    5094: {},
    5095: { T: 1 },
    5096: { T: -1 },
    5097: {},
    5099: {},
    65535: { n: "" },
  },
  nu = {
    6: { f: $d },
    10: { f: Wi },
    12: { f: St },
    13: { f: St },
    14: { f: wt },
    15: { f: wt },
    16: { f: Zt },
    17: { f: wt },
    18: { f: wt },
    19: { f: St },
    20: { f: Jm },
    21: { f: Jm },
    23: { f: vg },
    24: { f: tp },
    25: { f: wt },
    26: {},
    27: {},
    28: { f: B2 },
    29: {},
    34: { f: wt },
    35: { f: ep },
    38: { f: Zt },
    39: { f: Zt },
    40: { f: Zt },
    41: { f: Zt },
    42: { f: wt },
    43: { f: wt },
    47: { f: zk },
    49: { f: _2 },
    51: { f: St },
    60: {},
    61: { f: g2 },
    64: { f: wt },
    65: { f: x2 },
    66: { f: St },
    77: {},
    80: {},
    81: {},
    82: {},
    85: { f: St },
    89: {},
    90: {},
    91: {},
    92: { f: c2 },
    93: { f: V2 },
    94: {},
    95: { f: wt },
    96: {},
    97: {},
    99: { f: wt },
    125: { f: xg },
    128: { f: I2 },
    129: { f: l2 },
    130: { f: St },
    131: { f: wt },
    132: { f: wt },
    133: { f: d2 },
    134: {},
    140: { f: $2 },
    141: { f: St },
    144: {},
    146: { f: q2 },
    151: {},
    152: {},
    153: {},
    154: {},
    155: {},
    156: { f: St },
    157: {},
    158: {},
    160: { f: J2 },
    161: { f: Y2 },
    174: {},
    175: {},
    176: {},
    177: {},
    178: {},
    180: {},
    181: {},
    182: {},
    184: {},
    185: {},
    189: { f: C2 },
    190: { f: T2 },
    193: { f: Wi },
    197: {},
    198: {},
    199: {},
    200: {},
    201: {},
    202: { f: wt },
    203: {},
    204: {},
    205: {},
    206: {},
    207: {},
    208: {},
    209: {},
    210: {},
    211: {},
    213: {},
    215: {},
    216: {},
    217: {},
    218: { f: St },
    220: {},
    221: { f: wt },
    222: {},
    224: { f: A2 },
    225: { f: s2 },
    226: { f: Wi },
    227: {},
    229: { f: j2 },
    233: {},
    235: {},
    236: {},
    237: {},
    239: {},
    240: {},
    241: {},
    242: {},
    244: {},
    245: {},
    246: {},
    247: {},
    248: {},
    249: {},
    251: {},
    252: { f: u2 },
    253: { f: b2 },
    255: { f: f2 },
    256: {},
    259: {},
    290: {},
    311: {},
    312: {},
    315: {},
    317: { f: ug },
    318: {},
    319: {},
    320: {},
    330: {},
    331: {},
    333: {},
    334: {},
    335: {},
    336: {},
    337: {},
    338: {},
    339: {},
    340: {},
    351: {},
    352: { f: wt },
    353: { f: Wi },
    401: {},
    402: {},
    403: {},
    404: {},
    405: {},
    406: {},
    407: {},
    408: {},
    425: {},
    426: {},
    427: {},
    428: {},
    429: {},
    430: { f: D2 },
    431: { f: wt },
    432: {},
    433: {},
    434: {},
    437: {},
    438: { f: H2 },
    439: { f: wt },
    440: { f: W2 },
    441: {},
    442: { f: Xo },
    443: {},
    444: { f: St },
    445: {},
    446: {},
    448: { f: Wi },
    449: { f: p2, r: 2 },
    450: { f: Wi },
    512: { f: Zm },
    513: { f: Q2 },
    515: { f: F2 },
    516: { f: y2 },
    517: { f: Qm },
    519: { f: ek },
    520: { f: h2 },
    523: {},
    545: { f: rp },
    549: { f: Ym },
    566: {},
    574: { f: v2 },
    638: { f: E2 },
    659: {},
    1048: {},
    1054: { f: w2 },
    1084: {},
    1212: { f: N2 },
    2048: { f: G2 },
    2049: {},
    2050: {},
    2051: {},
    2052: {},
    2053: {},
    2054: {},
    2055: {},
    2056: {},
    2057: { f: yc },
    2058: {},
    2059: {},
    2060: {},
    2061: {},
    2062: {},
    2063: {},
    2064: {},
    2066: {},
    2067: {},
    2128: {},
    2129: {},
    2130: {},
    2131: {},
    2132: {},
    2133: {},
    2134: {},
    2135: {},
    2136: {},
    2137: {},
    2138: {},
    2146: {},
    2147: { r: 12 },
    2148: {},
    2149: {},
    2150: {},
    2151: { f: Wi },
    2152: {},
    2154: {},
    2155: {},
    2156: {},
    2161: {},
    2162: {},
    2164: {},
    2165: {},
    2166: {},
    2167: {},
    2168: {},
    2169: {},
    2170: {},
    2171: {},
    2172: { f: K2, r: 12 },
    2173: { f: CE, r: 12 },
    2174: {},
    2175: {},
    2180: {},
    2181: {},
    2182: {},
    2183: {},
    2184: {},
    2185: {},
    2186: {},
    2187: {},
    2188: { f: wt, r: 12 },
    2189: {},
    2190: { r: 12 },
    2191: {},
    2192: {},
    2194: {},
    2195: {},
    2196: { f: O2, r: 12 },
    2197: {},
    2198: { f: _E, r: 12 },
    2199: {},
    2200: {},
    2201: {},
    2202: { f: P2, r: 12 },
    2203: { f: Wi },
    2204: {},
    2205: {},
    2206: {},
    2207: {},
    2211: { f: m2 },
    2212: {},
    2213: {},
    2214: {},
    2215: {},
    4097: {},
    4098: {},
    4099: {},
    4102: {},
    4103: {},
    4105: {},
    4106: {},
    4107: {},
    4108: {},
    4109: {},
    4116: {},
    4117: {},
    4118: {},
    4119: {},
    4120: {},
    4121: {},
    4122: {},
    4123: {},
    4124: {},
    4125: {},
    4126: {},
    4127: {},
    4128: {},
    4129: {},
    4130: {},
    4132: {},
    4133: {},
    4134: { f: St },
    4135: {},
    4146: {},
    4147: {},
    4148: {},
    4149: {},
    4154: {},
    4156: {},
    4157: {},
    4158: {},
    4159: {},
    4160: {},
    4161: {},
    4163: {},
    4164: { f: Z2 },
    4165: {},
    4166: {},
    4168: {},
    4170: {},
    4171: {},
    4174: {},
    4175: {},
    4176: {},
    4177: {},
    4187: {},
    4188: { f: X2 },
    4189: {},
    4191: {},
    4192: {},
    4193: {},
    4194: {},
    4195: {},
    4196: {},
    4197: {},
    4198: {},
    4199: {},
    4200: {},
    0: { f: Zm },
    1: {},
    2: { f: nk },
    3: { f: ik },
    4: { f: rk },
    5: { f: Qm },
    7: { f: ak },
    8: {},
    9: { f: yc },
    11: {},
    22: { f: St },
    30: { f: k2 },
    31: {},
    32: {},
    33: { f: rp },
    36: {},
    37: { f: Ym },
    50: { f: ok },
    62: {},
    52: {},
    67: {},
    68: { f: St },
    69: {},
    86: {},
    126: {},
    127: { f: tk },
    135: {},
    136: {},
    137: {},
    145: {},
    148: {},
    149: {},
    150: {},
    169: {},
    171: {},
    188: {},
    191: {},
    192: {},
    194: {},
    195: {},
    214: { f: sk },
    223: {},
    234: {},
    354: {},
    421: {},
    518: { f: $d },
    521: { f: yc },
    536: { f: tp },
    547: { f: ep },
    561: {},
    579: {},
    1030: { f: $d },
    1033: { f: yc },
    1091: {},
    2157: {},
    2163: {},
    2177: {},
    2240: {},
    2241: {},
    2242: {},
    2243: {},
    2244: {},
    2245: {},
    2246: {},
    2247: {},
    2248: {},
    2249: {},
    2250: {},
    2251: {},
    2262: { r: 12 },
    29282: {},
  };
function $r(e, r, t, i) {
  var n = r;
  if (!isNaN(n)) {
    var a = i || (t || []).length || 0,
      o = e.next(4);
    o.write_shift(2, n), o.write_shift(2, a), a > 0 && Qp(t) && e.push(t);
  }
}
function hp(e, r) {
  var t = r || {};
  It != null && t.dense == null && (t.dense = It);
  var i = t.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var n = e.match(/<table/i);
  if (!n) throw new Error("Invalid HTML: could not find <table>");
  var a = e.match(/<\/table/i),
    o = n.index,
    s = (a && a.index) || e.length,
    c = Fy(e.slice(o, s), /(:?<tr[^>]*>)/i, "<tr>"),
    l = -1,
    d = 0,
    u = 0,
    h = 0,
    m = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } },
    p = [];
  for (o = 0; o < c.length; ++o) {
    var f = c[o].trim(),
      g = f.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if ((++l, t.sheetRows && t.sheetRows <= l)) {
        --l;
        break;
      }
      d = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var T = f.split(/<\/t[dh]>/i);
      for (s = 0; s < T.length; ++s) {
        var E = T[s].trim();
        if (E.match(/<t[dh]/i)) {
          for (
            var x = E, O = 0;
            x.charAt(0) == "<" && (O = x.indexOf(">")) > -1;

          )
            x = x.slice(O + 1);
          for (var z = 0; z < p.length; ++z) {
            var F = p[z];
            F.s.c == d &&
              F.s.r < l &&
              l <= F.e.r &&
              ((d = F.e.c + 1), (z = -1));
          }
          var C = Te(E.slice(0, E.indexOf(">")));
          (h = C.colspan ? +C.colspan : 1),
            ((u = +C.rowspan) > 1 || h > 1) &&
              p.push({
                s: { r: l, c: d },
                e: { r: l + (u || 1) - 1, c: d + h - 1 },
              });
          var P = C.t || C["data-t"] || "";
          if (!x.length) {
            d += h;
            continue;
          }
          if (
            ((x = Wp(x)),
            m.s.r > l && (m.s.r = l),
            m.e.r < l && (m.e.r = l),
            m.s.c > d && (m.s.c = d),
            m.e.c < d && (m.e.c = d),
            !x.length)
          ) {
            d += h;
            continue;
          }
          var M = { t: "s", v: x };
          t.raw ||
            !x.trim().length ||
            P == "s" ||
            (x === "TRUE"
              ? (M = { t: "b", v: !0 })
              : x === "FALSE"
              ? (M = { t: "b", v: !1 })
              : isNaN(Yr(x))
              ? isNaN(fa(x).getDate()) ||
                ((M = { t: "d", v: Pt(x) }),
                t.cellDates || (M = { t: "n", v: ur(M.v) }),
                (M.z = t.dateNF || De[14]))
              : (M = { t: "n", v: Yr(x) })),
            t.dense
              ? (i[l] || (i[l] = []), (i[l][d] = M))
              : (i[Ie({ r: l, c: d })] = M),
            (d += h);
        }
      }
    }
  }
  return (i["!ref"] = ze(m)), p.length && (i["!merges"] = p), i;
}
function oA(e, r, t, i) {
  for (var n = e["!merges"] || [], a = [], o = r.s.c; o <= r.e.c; ++o) {
    for (var s = 0, c = 0, l = 0; l < n.length; ++l)
      if (!(n[l].s.r > t || n[l].s.c > o) && !(n[l].e.r < t || n[l].e.c < o)) {
        if (n[l].s.r < t || n[l].s.c < o) {
          s = -1;
          break;
        }
        (s = n[l].e.r - n[l].s.r + 1), (c = n[l].e.c - n[l].s.c + 1);
        break;
      }
    if (!(s < 0)) {
      var d = Ie({ r: t, c: o }),
        u = i.dense ? (e[t] || [])[o] : e[d],
        h = (u && u.v != null && (u.h || pu(u.w || (Ti(u), u.w) || ""))) || "",
        m = {};
      s > 1 && (m.rowspan = s),
        c > 1 && (m.colspan = c),
        i.editable
          ? (h = '<span contenteditable="true">' + h + "</span>")
          : u &&
            ((m["data-t"] = (u && u.t) || "z"),
            u.v != null && (m["data-v"] = u.v),
            u.z != null && (m["data-z"] = u.z),
            u.l &&
              (u.l.Target || "#").charAt(0) != "#" &&
              (h = '<a href="' + u.l.Target + '">' + h + "</a>")),
        (m.id = (i.id || "sjs") + "-" + d),
        a.push(Gy("td", h, m));
    }
  }
  var p = "<tr>";
  return p + a.join("") + "</tr>";
}
var sA =
    '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',
  cA = "</body></html>";
function lA(e, r) {
  var t = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!t || t.length == 0)
    throw new Error("Invalid HTML: could not find <table>");
  if (t.length == 1) return Zi(hp(t[0], r), r);
  var i = Lu();
  return (
    t.forEach(function (n, a) {
      Bu(i, hp(n, r), "Sheet" + (a + 1));
    }),
    i
  );
}
function dA(e, r, t) {
  var i = [];
  return i.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
}
function uA(e, r) {
  var t = r || {},
    i = t.header != null ? t.header : sA,
    n = t.footer != null ? t.footer : cA,
    a = [i],
    o = va(e["!ref"]);
  (t.dense = Array.isArray(e)), a.push(dA(e, o, t));
  for (var s = o.s.r; s <= o.e.r; ++s) a.push(oA(e, o, s, t));
  return a.push("</table>" + n), a.join("");
}
function Wg(e, r, t) {
  var i = t || {};
  It != null && (i.dense = It);
  var n = 0,
    a = 0;
  if (i.origin != null)
    if (typeof i.origin == "number") n = i.origin;
    else {
      var o = typeof i.origin == "string" ? dr(i.origin) : i.origin;
      (n = o.r), (a = o.c);
    }
  var s = r.getElementsByTagName("tr"),
    c = Math.min(i.sheetRows || 1e7, s.length),
    l = { s: { r: 0, c: 0 }, e: { r: n, c: a } };
  if (e["!ref"]) {
    var d = va(e["!ref"]);
    (l.s.r = Math.min(l.s.r, d.s.r)),
      (l.s.c = Math.min(l.s.c, d.s.c)),
      (l.e.r = Math.max(l.e.r, d.e.r)),
      (l.e.c = Math.max(l.e.c, d.e.c)),
      n == -1 && (l.e.r = n = d.e.r + 1);
  }
  var u = [],
    h = 0,
    m = e["!rows"] || (e["!rows"] = []),
    p = 0,
    f = 0,
    g = 0,
    T = 0,
    E = 0,
    x = 0;
  for (e["!cols"] || (e["!cols"] = []); p < s.length && f < c; ++p) {
    var O = s[p];
    if (mp(O)) {
      if (i.display) continue;
      m[f] = { hidden: !0 };
    }
    var z = O.children;
    for (g = T = 0; g < z.length; ++g) {
      var F = z[g];
      if (!(i.display && mp(F))) {
        var C = F.hasAttribute("data-v")
            ? F.getAttribute("data-v")
            : F.hasAttribute("v")
            ? F.getAttribute("v")
            : Wp(F.innerHTML),
          P = F.getAttribute("data-z") || F.getAttribute("z");
        for (h = 0; h < u.length; ++h) {
          var M = u[h];
          M.s.c == T + a &&
            M.s.r < f + n &&
            f + n <= M.e.r &&
            ((T = M.e.c + 1 - a), (h = -1));
        }
        (x = +F.getAttribute("colspan") || 1),
          ((E = +F.getAttribute("rowspan") || 1) > 1 || x > 1) &&
            u.push({
              s: { r: f + n, c: T + a },
              e: { r: f + n + (E || 1) - 1, c: T + a + (x || 1) - 1 },
            });
        var X = { t: "s", v: C },
          G = F.getAttribute("data-t") || F.getAttribute("t") || "";
        C != null &&
          (C.length == 0
            ? (X.t = G || "z")
            : i.raw ||
              C.trim().length == 0 ||
              G == "s" ||
              (C === "TRUE"
                ? (X = { t: "b", v: !0 })
                : C === "FALSE"
                ? (X = { t: "b", v: !1 })
                : isNaN(Yr(C))
                ? isNaN(fa(C).getDate()) ||
                  ((X = { t: "d", v: Pt(C) }),
                  i.cellDates || (X = { t: "n", v: ur(X.v) }),
                  (X.z = i.dateNF || De[14]))
                : (X = { t: "n", v: Yr(C) }))),
          X.z === void 0 && P != null && (X.z = P);
        var R = "",
          re = F.getElementsByTagName("A");
        if (re && re.length)
          for (
            var be = 0;
            be < re.length &&
            !(
              re[be].hasAttribute("href") &&
              ((R = re[be].getAttribute("href")), R.charAt(0) != "#")
            );
            ++be
          );
        R && R.charAt(0) != "#" && (X.l = { Target: R }),
          i.dense
            ? (e[f + n] || (e[f + n] = []), (e[f + n][T + a] = X))
            : (e[Ie({ c: T + a, r: f + n })] = X),
          l.e.c < T + a && (l.e.c = T + a),
          (T += x);
      }
    }
    ++f;
  }
  return (
    u.length && (e["!merges"] = (e["!merges"] || []).concat(u)),
    (l.e.r = Math.max(l.e.r, f - 1 + n)),
    (e["!ref"] = ze(l)),
    f >= c && (e["!fullref"] = ze(((l.e.r = s.length - p + f - 1 + n), l))),
    e
  );
}
function Gg(e, r) {
  var t = r || {},
    i = t.dense ? [] : {};
  return Wg(i, e, r);
}
function fA(e, r) {
  return Zi(Gg(e, r), r);
}
function mp(e) {
  var r = "",
    t = hA(e);
  return (
    t && (r = t(e).getPropertyValue("display")),
    r || (r = e.style && e.style.display),
    r === "none"
  );
}
function hA(e) {
  return e.ownerDocument.defaultView &&
    typeof e.ownerDocument.defaultView.getComputedStyle == "function"
    ? e.ownerDocument.defaultView.getComputedStyle
    : typeof getComputedStyle == "function"
    ? getComputedStyle
    : null;
}
function mA(e) {
  var r = e
      .replace(/[\t\r\n]/g, " ")
      .trim()
      .replace(/ +/g, " ")
      .replace(/<text:s\/>/g, " ")
      .replace(/<text:s text:c="(\d+)"\/>/g, function (i, n) {
        return Array(parseInt(n, 10) + 1).join(" ");
      })
      .replace(/<text:tab[^>]*\/>/g, "	")
      .replace(
        /<text:line-break\/>/g,
        `
`
      ),
    t = $e(r.replace(/<[^>]*>/g, ""));
  return [t];
}
var pp = {
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  quarter: ["\\Qm", 'm\\"th quarter"'],
};
function $g(e, r) {
  var t = r || {};
  It != null && t.dense == null && (t.dense = It);
  var i = gu(e),
    n = [],
    a,
    o,
    s = { name: "" },
    c = "",
    l = 0,
    d,
    u,
    h = {},
    m = [],
    p = t.dense ? [] : {},
    f,
    g,
    T = { value: "" },
    E = "",
    x = 0,
    O,
    z = [],
    F = -1,
    C = -1,
    P = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } },
    M = 0,
    X = {},
    G = [],
    R = {},
    re = 0,
    be = 0,
    oe = [],
    Ce = 1,
    _e = 1,
    He = [],
    le = { Names: [] },
    ye = {},
    K = ["", ""],
    A = [],
    V = {},
    D = "",
    I = 0,
    Y = !1,
    me = !1,
    ce = 0;
  for (
    Vo.lastIndex = 0,
      i = i
        .replace(/<!--([\s\S]*?)-->/gm, "")
        .replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    (f = Vo.exec(i));

  )
    switch ((f[3] = f[3].replace(/_.*$/, ""))) {
      case "table":
      case "\u5DE5\u4F5C\u8868":
        f[1] === "/"
          ? (P.e.c >= P.s.c && P.e.r >= P.s.r
              ? (p["!ref"] = ze(P))
              : (p["!ref"] = "A1:A1"),
            t.sheetRows > 0 &&
              t.sheetRows <= P.e.r &&
              ((p["!fullref"] = p["!ref"]),
              (P.e.r = t.sheetRows - 1),
              (p["!ref"] = ze(P))),
            G.length && (p["!merges"] = G),
            oe.length && (p["!rows"] = oe),
            (d.name = d.名称 || d.name),
            typeof JSON < "u" && JSON.stringify(d),
            m.push(d.name),
            (h[d.name] = p),
            (me = !1))
          : f[0].charAt(f[0].length - 2) !== "/" &&
            ((d = Te(f[0], !1)),
            (F = C = -1),
            (P.s.r = P.s.c = 1e7),
            (P.e.r = P.e.c = 0),
            (p = t.dense ? [] : {}),
            (G = []),
            (oe = []),
            (me = !0));
        break;
      case "table-row-group":
        f[1] === "/" ? --M : ++M;
        break;
      case "table-row":
      case "\u884C":
        if (f[1] === "/") {
          (F += Ce), (Ce = 1);
          break;
        }
        if (
          ((u = Te(f[0], !1)),
          u.行号 ? (F = u.行号 - 1) : F == -1 && (F = 0),
          (Ce = +u["number-rows-repeated"] || 1),
          Ce < 10)
        )
          for (ce = 0; ce < Ce; ++ce) M > 0 && (oe[F + ce] = { level: M });
        C = -1;
        break;
      case "covered-table-cell":
        f[1] !== "/" && ++C,
          t.sheetStubs &&
            (t.dense
              ? (p[F] || (p[F] = []), (p[F][C] = { t: "z" }))
              : (p[Ie({ r: F, c: C })] = { t: "z" })),
          (E = ""),
          (z = []);
        break;
      case "table-cell":
      case "\u6570\u636E":
        if (f[0].charAt(f[0].length - 2) === "/")
          ++C,
            (T = Te(f[0], !1)),
            (_e = parseInt(T["number-columns-repeated"] || "1", 10)),
            (g = { t: "z", v: null }),
            T.formula && t.cellFormula != !1 && (g.f = lp($e(T.formula))),
            (T.数据类型 || T["value-type"]) == "string" &&
              ((g.t = "s"),
              (g.v = $e(T["string-value"] || "")),
              t.dense
                ? (p[F] || (p[F] = []), (p[F][C] = g))
                : (p[Ie({ r: F, c: C })] = g)),
            (C += _e - 1);
        else if (f[1] !== "/") {
          ++C, (E = ""), (x = 0), (z = []), (_e = 1);
          var ue = Ce ? F + Ce - 1 : F;
          if (
            (C > P.e.c && (P.e.c = C),
            C < P.s.c && (P.s.c = C),
            F < P.s.r && (P.s.r = F),
            ue > P.e.r && (P.e.r = ue),
            (T = Te(f[0], !1)),
            (A = []),
            (V = {}),
            (g = { t: T.数据类型 || T["value-type"], v: null }),
            t.cellFormula)
          )
            if (
              (T.formula && (T.formula = $e(T.formula)),
              T["number-matrix-columns-spanned"] &&
                T["number-matrix-rows-spanned"] &&
                ((re = parseInt(T["number-matrix-rows-spanned"], 10) || 0),
                (be = parseInt(T["number-matrix-columns-spanned"], 10) || 0),
                (R = {
                  s: { r: F, c: C },
                  e: { r: F + re - 1, c: C + be - 1 },
                }),
                (g.F = ze(R)),
                He.push([R, g.F])),
              T.formula)
            )
              g.f = lp(T.formula);
            else
              for (ce = 0; ce < He.length; ++ce)
                F >= He[ce][0].s.r &&
                  F <= He[ce][0].e.r &&
                  C >= He[ce][0].s.c &&
                  C <= He[ce][0].e.c &&
                  (g.F = He[ce][1]);
          switch (
            ((T["number-columns-spanned"] || T["number-rows-spanned"]) &&
              ((re = parseInt(T["number-rows-spanned"], 10) || 0),
              (be = parseInt(T["number-columns-spanned"], 10) || 0),
              (R = { s: { r: F, c: C }, e: { r: F + re - 1, c: C + be - 1 } }),
              G.push(R)),
            T["number-columns-repeated"] &&
              (_e = parseInt(T["number-columns-repeated"], 10)),
            g.t)
          ) {
            case "boolean":
              (g.t = "b"), (g.v = mt(T["boolean-value"]));
              break;
            case "float":
              (g.t = "n"), (g.v = parseFloat(T.value));
              break;
            case "percentage":
              (g.t = "n"), (g.v = parseFloat(T.value));
              break;
            case "currency":
              (g.t = "n"), (g.v = parseFloat(T.value));
              break;
            case "date":
              (g.t = "d"),
                (g.v = Pt(T["date-value"])),
                t.cellDates || ((g.t = "n"), (g.v = ur(g.v))),
                (g.z = "m/d/yy");
              break;
            case "time":
              (g.t = "n"),
                (g.v = Sy(T["time-value"]) / 86400),
                t.cellDates && ((g.t = "d"), (g.v = Pc(g.v))),
                (g.z = "HH:MM:SS");
              break;
            case "number":
              (g.t = "n"), (g.v = parseFloat(T.数据数值));
              break;
            default:
              if (g.t === "string" || g.t === "text" || !g.t)
                (g.t = "s"),
                  T["string-value"] != null &&
                    ((E = $e(T["string-value"])), (z = []));
              else throw new Error("Unsupported value type " + g.t);
          }
        } else {
          if (
            ((Y = !1),
            g.t === "s" &&
              ((g.v = E || ""), z.length && (g.R = z), (Y = x == 0)),
            ye.Target && (g.l = ye),
            A.length > 0 && ((g.c = A), (A = [])),
            E && t.cellText !== !1 && (g.w = E),
            Y && ((g.t = "z"), delete g.v),
            (!Y || t.sheetStubs) && !(t.sheetRows && t.sheetRows <= F))
          )
            for (var Z = 0; Z < Ce; ++Z) {
              if (
                ((_e = parseInt(T["number-columns-repeated"] || "1", 10)),
                t.dense)
              )
                for (
                  p[F + Z] || (p[F + Z] = []), p[F + Z][C] = Z == 0 ? g : Vt(g);
                  --_e > 0;

                )
                  p[F + Z][C + _e] = Vt(g);
              else
                for (p[Ie({ r: F + Z, c: C })] = g; --_e > 0; )
                  p[Ie({ r: F + Z, c: C + _e })] = Vt(g);
              P.e.c <= C && (P.e.c = C);
            }
          (_e = parseInt(T["number-columns-repeated"] || "1", 10)),
            (C += _e - 1),
            (_e = 0),
            (g = {}),
            (E = ""),
            (z = []);
        }
        ye = {};
        break;
      case "document":
      case "document-content":
      case "\u7535\u5B50\u8868\u683C\u6587\u6863":
      case "spreadsheet":
      case "\u4E3B\u4F53":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (f[1] === "/") {
          if ((a = n.pop())[0] !== f[3]) throw "Bad state: " + a;
        } else f[0].charAt(f[0].length - 2) !== "/" && n.push([f[3], !0]);
        break;
      case "annotation":
        if (f[1] === "/") {
          if ((a = n.pop())[0] !== f[3]) throw "Bad state: " + a;
          (V.t = E), z.length && (V.R = z), (V.a = D), A.push(V);
        } else f[0].charAt(f[0].length - 2) !== "/" && n.push([f[3], !1]);
        (D = ""), (I = 0), (E = ""), (x = 0), (z = []);
        break;
      case "creator":
        f[1] === "/" ? (D = i.slice(I, f.index)) : (I = f.index + f[0].length);
        break;
      case "meta":
      case "\u5143\u6570\u636E":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (f[1] === "/") {
          if ((a = n.pop())[0] !== f[3]) throw "Bad state: " + a;
        } else f[0].charAt(f[0].length - 2) !== "/" && n.push([f[3], !1]);
        (E = ""), (x = 0), (z = []);
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (f[1] === "/") {
          if (((X[s.name] = c), (a = n.pop())[0] !== f[3]))
            throw "Bad state: " + a;
        } else
          f[0].charAt(f[0].length - 2) !== "/" &&
            ((c = ""), (s = Te(f[0], !1)), n.push([f[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            (o = Te(f[0], !1)), (c += pp[f[3]][o.style === "long" ? 1 : 0]);
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (n[n.length - 1][0]) {
          case "time-style":
          case "date-style":
            (o = Te(f[0], !1)), (c += pp[f[3]][o.style === "long" ? 1 : 0]);
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (f[0].slice(-2) === "/>") break;
        if (f[1] === "/")
          switch (n[n.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              c += i.slice(l, f.index);
              break;
          }
        else l = f.index + f[0].length;
        break;
      case "named-range":
        (o = Te(f[0], !1)), (K = Xd(o["cell-range-address"]));
        var Ve = { Name: o.name, Ref: K[0] + "!" + K[1] };
        me && (Ve.Sheet = m.length), le.Names.push(Ve);
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "\u7535\u5B50\u8868\u683C":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "\u6587\u672C\u4E32":
        if (["master-styles"].indexOf(n[n.length - 1][0]) > -1) break;
        if (f[1] === "/" && (!T || !T["string-value"])) {
          var S = mA(i.slice(x, f.index), O);
          E =
            (E.length > 0
              ? E +
                `
`
              : "") + S[0];
        } else (O = Te(f[0], !1)), (x = f.index + f[0].length);
        break;
      case "s":
        break;
      case "database-range":
        if (f[1] === "/") break;
        try {
          (K = Xd(Te(f[0])["target-range-address"])),
            (h[K[0]]["!autofilter"] = { ref: K[1] });
        } catch {}
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "\u6807\u9898":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (f[1] !== "/") {
          if (((ye = Te(f[0], !1)), !ye.href)) break;
          (ye.Target = $e(ye.href)),
            delete ye.href,
            ye.Target.charAt(0) == "#" && ye.Target.indexOf(".") > -1
              ? ((K = Xd(ye.Target.slice(1))),
                (ye.Target = "#" + K[0] + "!" + K[1]))
              : ye.Target.match(/^\.\.[\\\/]/) &&
                (ye.Target = ye.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (f[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "\u8868:":
          case "\u5B57:":
            break;
          default:
            if (t.WTF) throw new Error(f);
        }
    }
  var pt = { Sheets: h, SheetNames: m, Workbook: le };
  return t.bookSheets && delete pt.Sheets, pt;
}
function gp(e, r) {
  (r = r || {}),
    Nr(e, "META-INF/manifest.xml") && Fw(Tt(e, "META-INF/manifest.xml"), r);
  var t = yr(e, "content.xml");
  if (!t) throw new Error("Missing content.xml in ODS / UOF file");
  var i = $g(lt(t), r);
  return Nr(e, "meta.xml") && (i.Props = ag(Tt(e, "meta.xml"))), i;
}
function vp(e, r) {
  return $g(e, r);
}
function Ru(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function au(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : lt(Tn(e));
}
function ou(e) {
  var r = e.reduce(function (n, a) {
      return n + a.length;
    }, 0),
    t = new Uint8Array(r),
    i = 0;
  return (
    e.forEach(function (n) {
      t.set(n, i), (i += n.length);
    }),
    t
  );
}
function xp(e) {
  return (
    (e -= (e >> 1) & 1431655765),
    (e = (e & 858993459) + ((e >> 2) & 858993459)),
    (((e + (e >> 4)) & 252645135) * 16843009) >>> 24
  );
}
function pA(e, r) {
  for (
    var t = ((e[r + 15] & 127) << 7) | (e[r + 14] >> 1),
      i = e[r + 14] & 1,
      n = r + 13;
    n >= r;
    --n
  )
    i = i * 256 + e[n];
  return (e[r + 15] & 128 ? -i : i) * Math.pow(10, t - 6176);
}
function Wo(e, r) {
  var t = r ? r[0] : 0,
    i = e[t] & 127;
  e: if (
    e[t++] >= 128 &&
    ((i |= (e[t] & 127) << 7),
    e[t++] < 128 ||
      ((i |= (e[t] & 127) << 14), e[t++] < 128) ||
      ((i |= (e[t] & 127) << 21), e[t++] < 128) ||
      ((i += (e[t] & 127) * Math.pow(2, 28)), ++t, e[t++] < 128) ||
      ((i += (e[t] & 127) * Math.pow(2, 35)), ++t, e[t++] < 128) ||
      ((i += (e[t] & 127) * Math.pow(2, 42)), ++t, e[t++] < 128))
  )
    break e;
  return r && (r[0] = t), i;
}
function Rt(e) {
  var r = 0,
    t = e[r] & 127;
  e: if (e[r++] >= 128) {
    if (
      ((t |= (e[r] & 127) << 7),
      e[r++] < 128 ||
        ((t |= (e[r] & 127) << 14), e[r++] < 128) ||
        ((t |= (e[r] & 127) << 21), e[r++] < 128))
    )
      break e;
    t |= (e[r] & 127) << 28;
  }
  return t;
}
function Qt(e) {
  for (var r = [], t = [0]; t[0] < e.length; ) {
    var i = t[0],
      n = Wo(e, t),
      a = n & 7;
    n = Math.floor(n / 8);
    var o = 0,
      s;
    if (n == 0) break;
    switch (a) {
      case 0:
        {
          for (var c = t[0]; e[t[0]++] >= 128; );
          s = e.slice(c, t[0]);
        }
        break;
      case 5:
        (o = 4), (s = e.slice(t[0], t[0] + o)), (t[0] += o);
        break;
      case 1:
        (o = 8), (s = e.slice(t[0], t[0] + o)), (t[0] += o);
        break;
      case 2:
        (o = Wo(e, t)), (s = e.slice(t[0], t[0] + o)), (t[0] += o);
        break;
      case 3:
      case 4:
      default:
        throw new Error(
          "PB Type ".concat(a, " for Field ").concat(n, " at offset ").concat(i)
        );
    }
    var l = { data: s, type: a };
    r[n] == null ? (r[n] = [l]) : r[n].push(l);
  }
  return r;
}
function Ou(e, r) {
  return (
    e?.map(function (t) {
      return r(t.data);
    }) || []
  );
}
function gA(e) {
  for (var r, t = [], i = [0]; i[0] < e.length; ) {
    var n = Wo(e, i),
      a = Qt(e.slice(i[0], i[0] + n));
    i[0] += n;
    var o = { id: Rt(a[1][0].data), messages: [] };
    a[2].forEach(function (s) {
      var c = Qt(s.data),
        l = Rt(c[3][0].data);
      o.messages.push({ meta: c, data: e.slice(i[0], i[0] + l) }), (i[0] += l);
    }),
      (r = a[3]) != null && r[0] && (o.merge = Rt(a[3][0].data) >>> 0 > 0),
      t.push(o);
  }
  return t;
}
function vA(e, r) {
  if (e != 0) throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var t = [0], i = Wo(r, t), n = []; t[0] < r.length; ) {
    var a = r[t[0]] & 3;
    if (a == 0) {
      var o = r[t[0]++] >> 2;
      if (o < 60) ++o;
      else {
        var s = o - 59;
        (o = r[t[0]]),
          s > 1 && (o |= r[t[0] + 1] << 8),
          s > 2 && (o |= r[t[0] + 2] << 16),
          s > 3 && (o |= r[t[0] + 3] << 24),
          (o >>>= 0),
          o++,
          (t[0] += s);
      }
      n.push(r.slice(t[0], t[0] + o)), (t[0] += o);
      continue;
    } else {
      var c = 0,
        l = 0;
      if (
        (a == 1
          ? ((l = ((r[t[0]] >> 2) & 7) + 4),
            (c = (r[t[0]++] & 224) << 3),
            (c |= r[t[0]++]))
          : ((l = (r[t[0]++] >> 2) + 1),
            a == 2
              ? ((c = r[t[0]] | (r[t[0] + 1] << 8)), (t[0] += 2))
              : ((c =
                  (r[t[0]] |
                    (r[t[0] + 1] << 8) |
                    (r[t[0] + 2] << 16) |
                    (r[t[0] + 3] << 24)) >>>
                  0),
                (t[0] += 4))),
        (n = [ou(n)]),
        c == 0)
      )
        throw new Error("Invalid offset 0");
      if (c > n[0].length) throw new Error("Invalid offset beyond length");
      if (l >= c)
        for (n.push(n[0].slice(-c)), l -= c; l >= n[n.length - 1].length; )
          n.push(n[n.length - 1]), (l -= n[n.length - 1].length);
      n.push(n[0].slice(-c, -c + l));
    }
  }
  var d = ou(n);
  if (d.length != i)
    throw new Error("Unexpected length: ".concat(d.length, " != ").concat(i));
  return d;
}
function xA(e) {
  for (var r = [], t = 0; t < e.length; ) {
    var i = e[t++],
      n = e[t] | (e[t + 1] << 8) | (e[t + 2] << 16);
    (t += 3), r.push(vA(i, e.slice(t, t + n))), (t += n);
  }
  if (t !== e.length) throw new Error("data is not a valid framed stream!");
  return ou(r);
}
function _A(e, r, t, i) {
  var n = Ru(e),
    a = n.getUint32(4, !0),
    o = (i > 1 ? 12 : 8) + xp(a & (i > 1 ? 3470 : 398)) * 4,
    s = -1,
    c = -1,
    l = NaN,
    d = new Date(2001, 0, 1);
  a & 512 && ((s = n.getUint32(o, !0)), (o += 4)),
    (o += xp(a & (i > 1 ? 12288 : 4096)) * 4),
    a & 16 && ((c = n.getUint32(o, !0)), (o += 4)),
    a & 32 && ((l = n.getFloat64(o, !0)), (o += 8)),
    a & 64 && (d.setTime(d.getTime() + n.getFloat64(o, !0) * 1e3), (o += 8));
  var u;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: l };
      break;
    case 3:
      u = { t: "s", v: r[c] };
      break;
    case 5:
      u = { t: "d", v: d };
      break;
    case 6:
      u = { t: "b", v: l > 0 };
      break;
    case 7:
      u = { t: "n", v: l / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (s > -1) u = { t: "s", v: t[s] };
      else if (c > -1) u = { t: "s", v: r[c] };
      else if (!isNaN(l)) u = { t: "n", v: l };
      else throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return u;
}
function bA(e, r, t) {
  var i = Ru(e),
    n = i.getUint32(8, !0),
    a = 12,
    o = -1,
    s = -1,
    c = NaN,
    l = NaN,
    d = new Date(2001, 0, 1);
  n & 1 && ((c = pA(e, a)), (a += 16)),
    n & 2 && ((l = i.getFloat64(a, !0)), (a += 8)),
    n & 4 && (d.setTime(d.getTime() + i.getFloat64(a, !0) * 1e3), (a += 8)),
    n & 8 && ((s = i.getUint32(a, !0)), (a += 4)),
    n & 16 && ((o = i.getUint32(a, !0)), (a += 4));
  var u;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      u = { t: "n", v: c };
      break;
    case 3:
      u = { t: "s", v: r[s] };
      break;
    case 5:
      u = { t: "d", v: d };
      break;
    case 6:
      u = { t: "b", v: l > 0 };
      break;
    case 7:
      u = { t: "n", v: l / 86400 };
      break;
    case 8:
      u = { t: "e", v: 0 };
      break;
    case 9:
      if (o > -1) u = { t: "s", v: t[o] };
      else
        throw new Error(
          "Unsupported cell type "
            .concat(e[1], " : ")
            .concat(n & 31, " : ")
            .concat(e.slice(0, 4))
        );
      break;
    case 10:
      u = { t: "n", v: c };
      break;
    default:
      throw new Error(
        "Unsupported cell type "
          .concat(e[1], " : ")
          .concat(n & 31, " : ")
          .concat(e.slice(0, 4))
      );
  }
  return u;
}
function yA(e, r, t) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return _A(e, r, t, e[0]);
    case 5:
      return bA(e, r, t);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function qi(e) {
  var r = Qt(e);
  return Wo(r[1][0].data);
}
function _p(e, r) {
  var t = Qt(r.data),
    i = Rt(t[1][0].data),
    n = t[3],
    a = [];
  return (
    (n || []).forEach(function (o) {
      var s = Qt(o.data),
        c = Rt(s[1][0].data) >>> 0;
      switch (i) {
        case 1:
          a[c] = au(s[3][0].data);
          break;
        case 8:
          {
            var l = e[qi(s[9][0].data)][0],
              d = Qt(l.data),
              u = e[qi(d[1][0].data)][0],
              h = Rt(u.meta[1][0].data);
            if (h != 2001)
              throw new Error("2000 unexpected reference to ".concat(h));
            var m = Qt(u.data);
            a[c] = m[3]
              .map(function (p) {
                return au(p.data);
              })
              .join("");
          }
          break;
      }
    }),
    a
  );
}
function wA(e, r) {
  var t,
    i,
    n,
    a,
    o,
    s,
    c,
    l,
    d,
    u,
    h,
    m,
    p,
    f,
    g = Qt(e),
    T = Rt(g[1][0].data) >>> 0,
    E = Rt(g[2][0].data) >>> 0,
    x =
      (((i = (t = g[8]) == null ? void 0 : t[0]) == null ? void 0 : i.data) &&
        Rt(g[8][0].data) > 0) ||
      !1,
    O,
    z;
  if ((a = (n = g[7]) == null ? void 0 : n[0]) != null && a.data && r != 0)
    (O = (s = (o = g[7]) == null ? void 0 : o[0]) == null ? void 0 : s.data),
      (z = (l = (c = g[6]) == null ? void 0 : c[0]) == null ? void 0 : l.data);
  else if ((u = (d = g[4]) == null ? void 0 : d[0]) != null && u.data && r != 1)
    (O = (m = (h = g[4]) == null ? void 0 : h[0]) == null ? void 0 : m.data),
      (z = (f = (p = g[3]) == null ? void 0 : p[0]) == null ? void 0 : f.data);
  else throw "NUMBERS Tile missing ".concat(r, " cell storage");
  for (var F = x ? 4 : 1, C = Ru(O), P = [], M = 0; M < O.length / 2; ++M) {
    var X = C.getUint16(M * 2, !0);
    X < 65535 && P.push([M, X]);
  }
  if (P.length != E)
    throw "Expected ".concat(E, " cells, found ").concat(P.length);
  var G = [];
  for (M = 0; M < P.length - 1; ++M)
    G[P[M][0]] = z.subarray(P[M][1] * F, P[M + 1][1] * F);
  return (
    P.length >= 1 &&
      (G[P[P.length - 1][0]] = z.subarray(P[P.length - 1][1] * F)),
    { R: T, cells: G }
  );
}
function kA(e, r) {
  var t,
    i = Qt(r.data),
    n =
      (t = i?.[7]) != null && t[0] ? (Rt(i[7][0].data) >>> 0 > 0 ? 1 : 0) : -1,
    a = Ou(i[5], function (o) {
      return wA(o, n);
    });
  return {
    nrows: Rt(i[4][0].data) >>> 0,
    data: a.reduce(function (o, s) {
      return (
        o[s.R] || (o[s.R] = []),
        s.cells.forEach(function (c, l) {
          if (o[s.R][l])
            throw new Error("Duplicate cell r=".concat(s.R, " c=").concat(l));
          o[s.R][l] = c;
        }),
        o
      );
    }, []),
  };
}
function EA(e, r, t) {
  var i,
    n = Qt(r.data),
    a = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (((a.e.r = (Rt(n[6][0].data) >>> 0) - 1), a.e.r < 0))
    throw new Error("Invalid row varint ".concat(n[6][0].data));
  if (((a.e.c = (Rt(n[7][0].data) >>> 0) - 1), a.e.c < 0))
    throw new Error("Invalid col varint ".concat(n[7][0].data));
  t["!ref"] = ze(a);
  var o = Qt(n[4][0].data),
    s = _p(e, e[qi(o[4][0].data)][0]),
    c = (i = o[17]) != null && i[0] ? _p(e, e[qi(o[17][0].data)][0]) : [],
    l = Qt(o[3][0].data),
    d = 0;
  l[1].forEach(function (u) {
    var h = Qt(u.data),
      m = e[qi(h[2][0].data)][0],
      p = Rt(m.meta[1][0].data);
    if (p != 6002) throw new Error("6001 unexpected reference to ".concat(p));
    var f = kA(e, m);
    f.data.forEach(function (g, T) {
      g.forEach(function (E, x) {
        var O = Ie({ r: d + T, c: x }),
          z = yA(E, s, c);
        z && (t[O] = z);
      });
    }),
      (d += f.nrows);
  });
}
function CA(e, r) {
  var t = Qt(r.data),
    i = { "!ref": "A1" },
    n = e[qi(t[2][0].data)],
    a = Rt(n[0].meta[1][0].data);
  if (a != 6001) throw new Error("6000 unexpected reference to ".concat(a));
  return EA(e, n[0], i), i;
}
function TA(e, r) {
  var t,
    i = Qt(r.data),
    n = {
      name: (t = i[1]) != null && t[0] ? au(i[1][0].data) : "",
      sheets: [],
    },
    a = Ou(i[2], qi);
  return (
    a.forEach(function (o) {
      e[o].forEach(function (s) {
        var c = Rt(s.meta[1][0].data);
        c == 6e3 && n.sheets.push(CA(e, s));
      });
    }),
    n
  );
}
function SA(e, r) {
  var t = Lu(),
    i = Qt(r.data),
    n = Ou(i[1], qi);
  if (
    (n.forEach(function (a) {
      e[a].forEach(function (o) {
        var s = Rt(o.meta[1][0].data);
        if (s == 2) {
          var c = TA(e, o);
          c.sheets.forEach(function (l, d) {
            Bu(t, l, d == 0 ? c.name : c.name + "_" + d, !0);
          });
        }
      });
    }),
    t.SheetNames.length == 0)
  )
    throw new Error("Empty NUMBERS file");
  return t;
}
function Kd(e) {
  var r,
    t,
    i,
    n,
    a = {},
    o = [];
  if (
    (e.FullPaths.forEach(function (c) {
      if (c.match(/\.iwpv2/))
        throw new Error("Unsupported password protection");
    }),
    e.FileIndex.forEach(function (c) {
      if (c.name.match(/\.iwa$/)) {
        var l;
        try {
          l = xA(c.content);
        } catch (u) {
          return console.log("?? " + c.content.length + " " + (u.message || u));
        }
        var d;
        try {
          d = gA(l);
        } catch (u) {
          return console.log("## " + (u.message || u));
        }
        d.forEach(function (u) {
          (a[u.id] = u.messages), o.push(u.id);
        });
      }
    }),
    !o.length)
  )
    throw new Error("File has no messages");
  var s =
    ((n =
      (i =
        (t = (r = a?.[1]) == null ? void 0 : r[0]) == null ? void 0 : t.meta) ==
      null
        ? void 0
        : i[1]) == null
      ? void 0
      : n[0].data) &&
    Rt(a[1][0].meta[1][0].data) == 1 &&
    a[1][0];
  if (
    (s ||
      o.forEach(function (c) {
        a[c].forEach(function (l) {
          var d = Rt(l.meta[1][0].data) >>> 0;
          if (d == 1)
            if (!s) s = l;
            else throw new Error("Document has multiple roots");
        });
      }),
    !s)
  )
    throw new Error("Cannot find Document root");
  return SA(a, s);
}
function AA(e) {
  return function (t) {
    for (var i = 0; i != e.length; ++i) {
      var n = e[i];
      t[n[0]] === void 0 && (t[n[0]] = n[1]),
        n[2] === "n" && (t[n[0]] = Number(t[n[0]]));
    }
  };
}
function Nu(e) {
  AA([
    ["cellNF", !1],
    ["cellHTML", !0],
    ["cellFormula", !0],
    ["cellStyles", !1],
    ["cellText", !0],
    ["cellDates", !1],
    ["sheetStubs", !1],
    ["sheetRows", 0, "n"],
    ["bookDeps", !1],
    ["bookSheets", !1],
    ["bookProps", !1],
    ["bookFiles", !1],
    ["bookVBA", !1],
    ["password", ""],
    ["WTF", !1],
  ])(e);
}
function IA(e) {
  return wi.WS.indexOf(e) > -1
    ? "sheet"
    : wi.CS && e == wi.CS
    ? "chart"
    : wi.DS && e == wi.DS
    ? "dialog"
    : wi.MS && e == wi.MS
    ? "macro"
    : e && e.length
    ? e
    : "sheet";
}
function FA(e, r) {
  if (!e) return 0;
  try {
    e = r.map(function (i) {
      return (
        i.id || (i.id = i.strRelID),
        [i.name, e["!id"][i.id].Target, IA(e["!id"][i.id].Type)]
      );
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function DA(e, r, t, i, n, a, o, s, c, l, d, u) {
  try {
    a[i] = Mo(yr(e, t, !0), r);
    var h = Tt(e, r),
      m;
    switch (s) {
      case "sheet":
        m = LS(h, r, n, c, a[i], l, d, u);
        break;
      case "chart":
        if (((m = BS(h, r, n, c, a[i], l, d, u)), !m || !m["!drawel"])) break;
        var p = So(m["!drawel"].Target, r),
          f = eu(p),
          g = PE(yr(e, p, !0), Mo(yr(e, f, !0), p)),
          T = So(g, p),
          E = eu(T);
        m = bS(yr(e, T, !0), T, c, Mo(yr(e, E, !0), T), l, m);
        break;
      case "macro":
        m = jS(h, r, n, c, a[i], l, d, u);
        break;
      case "dialog":
        m = VS(h, r, n, c, a[i], l, d, u);
        break;
      default:
        throw new Error("Unrecognized sheet type " + s);
    }
    o[i] = m;
    var x = [];
    a &&
      a[i] &&
      ci(a[i]).forEach(function (O) {
        var z = "";
        if (a[i][O].Type == wi.CMNT) {
          z = So(a[i][O].Target, r);
          var F = WS(Tt(e, z, !0), z, c);
          if (!F || !F.length) return;
          np(m, F, !1);
        }
        a[i][O].Type == wi.TCMNT &&
          ((z = So(a[i][O].Target, r)), (x = x.concat(BE(Tt(e, z, !0), c))));
      }),
      x && x.length && np(m, x, !0, c.people || []);
  } catch (O) {
    if (c.WTF) throw O;
  }
}
function Rr(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function MA(e, r) {
  if (
    (Op(),
    (r = r || {}),
    Nu(r),
    Nr(e, "META-INF/manifest.xml") || Nr(e, "objectdata.xml"))
  )
    return gp(e, r);
  if (Nr(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u")
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Kd < "u") {
      if (e.FileIndex) return Kd(e);
      var t = Ue.utils.cfb_new();
      return (
        Dm(e).forEach(function (be) {
          My(t, be, Vp(e, be));
        }),
        Kd(t)
      );
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!Nr(e, "[Content_Types].xml"))
    throw Nr(e, "index.xml.gz")
      ? new Error("Unsupported NUMBERS 08 file")
      : Nr(e, "index.xml")
      ? new Error("Unsupported NUMBERS 09 file")
      : new Error("Unsupported ZIP file");
  var i = Dm(e),
    n = Aw(yr(e, "[Content_Types].xml")),
    a = !1,
    o,
    s;
  if (
    (n.workbooks.length === 0 &&
      ((s = "xl/workbook.xml"), Tt(e, s, !0) && n.workbooks.push(s)),
    n.workbooks.length === 0)
  ) {
    if (((s = "xl/workbook.bin"), !Tt(e, s, !0)))
      throw new Error("Could not find workbook");
    n.workbooks.push(s), (a = !0);
  }
  n.workbooks[0].slice(-3) == "bin" && (a = !0);
  var c = {},
    l = {};
  if (!r.bookSheets && !r.bookProps) {
    if (((No = []), n.sst))
      try {
        No = HS(Tt(e, Rr(n.sst)), n.sst, r);
      } catch (be) {
        if (r.WTF) throw be;
      }
    r.cellStyles &&
      n.themes.length &&
      (c = zS(yr(e, n.themes[0].replace(/^\//, ""), !0) || "", n.themes[0], r)),
      n.style && (l = US(Tt(e, Rr(n.style)), n.style, c, r));
  }
  n.links.map(function (be) {
    try {
      var oe = Mo(yr(e, eu(Rr(be))), be);
      return $S(Tt(e, Rr(be)), oe, be, r);
    } catch {}
  });
  var d = PS(Tt(e, Rr(n.workbooks[0])), n.workbooks[0], r),
    u = {},
    h = "";
  n.coreprops.length &&
    ((h = Tt(e, Rr(n.coreprops[0]), !0)),
    h && (u = ag(h)),
    n.extprops.length !== 0 &&
      ((h = Tt(e, Rr(n.extprops[0]), !0)), h && Rw(h, u, r)));
  var m = {};
  (!r.bookSheets || r.bookProps) &&
    n.custprops.length !== 0 &&
    ((h = yr(e, Rr(n.custprops[0]), !0)), h && (m = Nw(h, r)));
  var p = {};
  if (
    (r.bookSheets || r.bookProps) &&
    (d.Sheets
      ? (o = d.Sheets.map(function (oe) {
          return oe.name;
        }))
      : u.Worksheets && u.SheetNames.length > 0 && (o = u.SheetNames),
    r.bookProps && ((p.Props = u), (p.Custprops = m)),
    r.bookSheets && typeof o < "u" && (p.SheetNames = o),
    r.bookSheets ? p.SheetNames : r.bookProps)
  )
    return p;
  o = {};
  var f = {};
  r.bookDeps && n.calcchain && (f = GS(Tt(e, Rr(n.calcchain)), n.calcchain, r));
  var g = 0,
    T = {},
    E,
    x;
  {
    var O = d.Sheets;
    (u.Worksheets = O.length), (u.SheetNames = []);
    for (var z = 0; z != O.length; ++z) u.SheetNames[z] = O[z].name;
  }
  var F = a ? "bin" : "xml",
    C = n.workbooks[0].lastIndexOf("/"),
    P = (
      n.workbooks[0].slice(0, C + 1) +
      "_rels/" +
      n.workbooks[0].slice(C + 1) +
      ".rels"
    ).replace(/^\//, "");
  Nr(e, P) || (P = "xl/_rels/workbook." + F + ".rels");
  var M = Mo(yr(e, P, !0), P.replace(/_rels.*/, "s5s"));
  (n.metadata || []).length >= 1 &&
    (r.xlmeta = XS(Tt(e, Rr(n.metadata[0])), n.metadata[0], r)),
    (n.people || []).length >= 1 && (r.people = jE(Tt(e, Rr(n.people[0])), r)),
    M && (M = FA(M, d.Sheets));
  var X = Tt(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e: for (g = 0; g != u.Worksheets; ++g) {
    var G = "sheet";
    if (
      (M && M[g]
        ? ((E = "xl/" + M[g][1].replace(/[\/]?xl\//, "")),
          Nr(e, E) || (E = M[g][1]),
          Nr(e, E) || (E = P.replace(/_rels\/.*$/, "") + M[g][1]),
          (G = M[g][2]))
        : ((E = "xl/worksheets/sheet" + (g + 1 - X) + "." + F),
          (E = E.replace(/sheet0\./, "sheet."))),
      (x = E.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels")),
      r && r.sheets != null)
    )
      switch (typeof r.sheets) {
        case "number":
          if (g != r.sheets) continue e;
          break;
        case "string":
          if (u.SheetNames[g].toLowerCase() != r.sheets.toLowerCase())
            continue e;
          break;
        default:
          if (Array.isArray && Array.isArray(r.sheets)) {
            for (var R = !1, re = 0; re != r.sheets.length; ++re)
              typeof r.sheets[re] == "number" && r.sheets[re] == g && (R = 1),
                typeof r.sheets[re] == "string" &&
                  r.sheets[re].toLowerCase() == u.SheetNames[g].toLowerCase() &&
                  (R = 1);
            if (!R) continue e;
          }
      }
    DA(e, E, x, u.SheetNames[g], g, T, o, G, r, d, c, l);
  }
  return (
    (p = {
      Directory: n,
      Workbook: d,
      Props: u,
      Custprops: m,
      Deps: f,
      Sheets: o,
      SheetNames: u.SheetNames,
      Strings: No,
      Styles: l,
      Themes: c,
      SSF: Vt(De),
    }),
    r &&
      r.bookFiles &&
      (e.files
        ? ((p.keys = i), (p.files = e.files))
        : ((p.keys = []),
          (p.files = {}),
          e.FullPaths.forEach(function (be, oe) {
            (be = be.replace(/^Root Entry[\/]/, "")),
              p.keys.push(be),
              (p.files[be] = e.FileIndex[oe]);
          }))),
    r &&
      r.bookVBA &&
      (n.vba.length > 0
        ? (p.vbaraw = Tt(e, Rr(n.vba[0]), !0))
        : n.defaults &&
          n.defaults.bin === HE &&
          (p.vbaraw = Tt(e, "xl/vbaProject.bin", !0))),
    p
  );
}
function RA(e, r) {
  var t = r || {},
    i = "Workbook",
    n = Ue.find(e, i);
  try {
    if (((i = "/!DataSpaces/Version"), (n = Ue.find(e, i)), !n || !n.content))
      throw new Error("ECMA-376 Encrypted file missing " + i);
    if (
      (Ck(n.content),
      (i = "/!DataSpaces/DataSpaceMap"),
      (n = Ue.find(e, i)),
      !n || !n.content)
    )
      throw new Error("ECMA-376 Encrypted file missing " + i);
    var a = Sk(n.content);
    if (
      a.length !== 1 ||
      a[0].comps.length !== 1 ||
      a[0].comps[0].t !== 0 ||
      a[0].name !== "StrongEncryptionDataSpace" ||
      a[0].comps[0].v !== "EncryptedPackage"
    )
      throw new Error("ECMA-376 Encrypted file bad " + i);
    if (
      ((i = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace"),
      (n = Ue.find(e, i)),
      !n || !n.content)
    )
      throw new Error("ECMA-376 Encrypted file missing " + i);
    var o = Ak(n.content);
    if (o.length != 1 || o[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + i);
    if (
      ((i = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary"),
      (n = Ue.find(e, i)),
      !n || !n.content)
    )
      throw new Error("ECMA-376 Encrypted file missing " + i);
    Fk(n.content);
  } catch {}
  if (((i = "/EncryptionInfo"), (n = Ue.find(e, i)), !n || !n.content))
    throw new Error("ECMA-376 Encrypted file missing " + i);
  var s = Dk(n.content);
  if (((i = "/EncryptedPackage"), (n = Ue.find(e, i)), !n || !n.content))
    throw new Error("ECMA-376 Encrypted file missing " + i);
  if (s[0] == 4 && typeof decrypt_agile < "u")
    return decrypt_agile(s[1], n.content, t.password || "", t);
  if (s[0] == 2 && typeof decrypt_std76 < "u")
    return decrypt_std76(s[1], n.content, t.password || "", t);
  throw new Error("File is password-protected");
}
function Pu(e, r) {
  var t = "";
  switch ((r || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      t = wr(e.slice(0, 12));
      break;
    case "binary":
      t = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + ((r && r.type) || "undefined"));
  }
  return [
    t.charCodeAt(0),
    t.charCodeAt(1),
    t.charCodeAt(2),
    t.charCodeAt(3),
    t.charCodeAt(4),
    t.charCodeAt(5),
    t.charCodeAt(6),
    t.charCodeAt(7),
  ];
}
function OA(e, r) {
  return Ue.find(e, "EncryptedPackage") ? RA(e, r) : Hg(e, r);
}
function NA(e, r) {
  var t,
    i = e,
    n = r || {};
  return (
    n.type || (n.type = je && Buffer.isBuffer(e) ? "buffer" : "base64"),
    (t = Up(i, n)),
    MA(t, n)
  );
}
function Xg(e, r) {
  var t = 0;
  e: for (; t < e.length; )
    switch (e.charCodeAt(t)) {
      case 10:
      case 13:
      case 32:
        ++t;
        break;
      case 60:
        return iu(e.slice(t), r);
      default:
        break e;
    }
  return Uo.to_workbook(e, r);
}
function PA(e, r) {
  var t = "",
    i = Pu(e, r);
  switch (r.type) {
    case "base64":
      t = wr(e);
      break;
    case "binary":
      t = e;
      break;
    case "buffer":
      t = e.toString("binary");
      break;
    case "array":
      t = kn(e);
      break;
    default:
      throw new Error("Unrecognized type " + r.type);
  }
  return (
    i[0] == 239 && i[1] == 187 && i[2] == 191 && (t = lt(t)),
    (r.type = "binary"),
    Xg(t, r)
  );
}
function LA(e, r) {
  var t = e;
  return (
    r.type == "base64" && (t = wr(t)),
    (t = Qe.utils.decode(1200, t.slice(2), "str")),
    (r.type = "binary"),
    Xg(t, r)
  );
}
function BA(e) {
  return e.match(/[^\x00-\x7F]/) ? Ao(e) : e;
}
function Yd(e, r, t, i) {
  return i ? ((t.type = "string"), Uo.to_workbook(e, t)) : Uo.to_workbook(r, t);
}
function ma(e, r) {
  wp();
  var t = r || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer)
    return ma(new Uint8Array(e), ((t = Vt(t)), (t.type = "array"), t));
  typeof Uint8Array < "u" &&
    e instanceof Uint8Array &&
    !t.type &&
    (t.type = typeof Deno < "u" ? "buffer" : "array");
  var i = e,
    n = [0, 0, 0, 0],
    a = !1;
  if (
    (t.cellStyles && ((t.cellNF = !0), (t.sheetStubs = !0)),
    (da = {}),
    t.dateNF && (da.dateNF = t.dateNF),
    t.type || (t.type = je && Buffer.isBuffer(e) ? "buffer" : "base64"),
    t.type == "file" &&
      ((t.type = je ? "buffer" : "binary"),
      (i = Cy(e)),
      typeof Uint8Array < "u" && !je && (t.type = "array")),
    t.type == "string" &&
      ((a = !0), (t.type = "binary"), (t.codepage = 65001), (i = BA(e))),
    t.type == "array" &&
      typeof Uint8Array < "u" &&
      e instanceof Uint8Array &&
      typeof ArrayBuffer < "u")
  ) {
    var o = new ArrayBuffer(3),
      s = new Uint8Array(o);
    if (((s.foo = "bar"), !s.foo))
      return (t = Vt(t)), (t.type = "array"), ma(du(i), t);
  }
  switch ((n = Pu(i, t))[0]) {
    case 208:
      if (
        n[1] === 207 &&
        n[2] === 17 &&
        n[3] === 224 &&
        n[4] === 161 &&
        n[5] === 177 &&
        n[6] === 26 &&
        n[7] === 225
      )
        return OA(Ue.read(i, t), t);
      break;
    case 9:
      if (n[1] <= 8) return Hg(i, t);
      break;
    case 60:
      return iu(i, t);
    case 73:
      if (n[1] === 73 && n[2] === 42 && n[3] === 0)
        throw new Error("TIFF Image File is not a spreadsheet");
      if (n[1] === 68) return fk(i, t);
      break;
    case 84:
      if (n[1] === 65 && n[2] === 66 && n[3] === 76)
        return dk.to_workbook(i, t);
      break;
    case 80:
      return n[1] === 75 && n[2] < 9 && n[3] < 9 ? NA(i, t) : Yd(e, i, t, a);
    case 239:
      return n[3] === 60 ? iu(i, t) : Yd(e, i, t, a);
    case 255:
      if (n[1] === 254) return LA(i, t);
      if (n[1] === 0 && n[2] === 2 && n[3] === 0) return Oo.to_workbook(i, t);
      break;
    case 0:
      if (
        n[1] === 0 &&
        ((n[2] >= 2 && n[3] === 0) ||
          (n[2] === 0 && (n[3] === 8 || n[3] === 9)))
      )
        return Oo.to_workbook(i, t);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return ip.to_workbook(i, t);
    case 123:
      if (n[1] === 92 && n[2] === 114 && n[3] === 116)
        return Hk.to_workbook(i, t);
      break;
    case 10:
    case 13:
    case 32:
      return PA(i, t);
    case 137:
      if (n[1] === 80 && n[2] === 78 && n[3] === 71)
        throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return ck.indexOf(n[0]) > -1 && n[2] <= 12 && n[3] <= 31
    ? ip.to_workbook(i, t)
    : Yd(e, i, t, a);
}
function jA(e, r, t, i, n, a, o, s) {
  var c = Ut(t),
    l = s.defval,
    d = s.raw || !Object.prototype.hasOwnProperty.call(s, "raw"),
    u = !0,
    h = n === 1 ? [] : {};
  if (n !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(h, "__rowNum__", { value: t, enumerable: !1 });
      } catch {
        h.__rowNum__ = t;
      }
    else h.__rowNum__ = t;
  if (!o || e[t])
    for (var m = r.s.c; m <= r.e.c; ++m) {
      var p = o ? e[t][m] : e[i[m] + c];
      if (p === void 0 || p.t === void 0) {
        if (l === void 0) continue;
        a[m] != null && (h[a[m]] = l);
        continue;
      }
      var f = p.v;
      switch (p.t) {
        case "z":
          if (f == null) break;
          continue;
        case "e":
          f = f == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + p.t);
      }
      if (a[m] != null) {
        if (f == null)
          if (p.t == "e" && f === null) h[a[m]] = null;
          else if (l !== void 0) h[a[m]] = l;
          else if (d && f === null) h[a[m]] = null;
          else continue;
        else
          h[a[m]] =
            d && (p.t !== "n" || (p.t === "n" && s.rawNumbers !== !1))
              ? f
              : Ti(p, f, s);
        f != null && (u = !1);
      }
    }
  return { row: h, isempty: u };
}
function su(e, r) {
  if (e == null || e["!ref"] == null) return [];
  var t = { t: "n", v: 0 },
    i = 0,
    n = 1,
    a = [],
    o = 0,
    s = "",
    c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } },
    l = r || {},
    d = l.range != null ? l.range : e["!ref"];
  switch (
    (l.header === 1
      ? (i = 1)
      : l.header === "A"
      ? (i = 2)
      : Array.isArray(l.header)
      ? (i = 3)
      : l.header == null && (i = 0),
    typeof d)
  ) {
    case "string":
      c = _t(d);
      break;
    case "number":
      (c = _t(e["!ref"])), (c.s.r = d);
      break;
    default:
      c = d;
  }
  i > 0 && (n = 0);
  var u = Ut(c.s.r),
    h = [],
    m = [],
    p = 0,
    f = 0,
    g = Array.isArray(e),
    T = c.s.r,
    E = 0,
    x = {};
  g && !e[T] && (e[T] = []);
  var O = (l.skipHidden && e["!cols"]) || [],
    z = (l.skipHidden && e["!rows"]) || [];
  for (E = c.s.c; E <= c.e.c; ++E)
    if (!(O[E] || {}).hidden)
      switch (((h[E] = Mt(E)), (t = g ? e[T][E] : e[h[E] + u]), i)) {
        case 1:
          a[E] = E - c.s.c;
          break;
        case 2:
          a[E] = h[E];
          break;
        case 3:
          a[E] = l.header[E - c.s.c];
          break;
        default:
          if (
            (t == null && (t = { w: "__EMPTY", t: "s" }),
            (s = o = Ti(t, null, l)),
            (f = x[o] || 0),
            !f)
          )
            x[o] = 1;
          else {
            do s = o + "_" + f++;
            while (x[s]);
            (x[o] = f), (x[s] = 1);
          }
          a[E] = s;
      }
  for (T = c.s.r + n; T <= c.e.r; ++T)
    if (!(z[T] || {}).hidden) {
      var F = jA(e, c, T, h, i, a, g, l);
      (F.isempty === !1 || (i === 1 ? l.blankrows !== !1 : l.blankrows)) &&
        (m[p++] = F.row);
    }
  return (m.length = p), m;
}
var bp = /"/g;
function VA(e, r, t, i, n, a, o, s) {
  for (var c = !0, l = [], d = "", u = Ut(t), h = r.s.c; h <= r.e.c; ++h)
    if (i[h]) {
      var m = s.dense ? (e[t] || [])[h] : e[i[h] + u];
      if (m == null) d = "";
      else if (m.v != null) {
        (c = !1),
          (d = "" + (s.rawNumbers && m.t == "n" ? m.v : Ti(m, null, s)));
        for (var p = 0, f = 0; p !== d.length; ++p)
          if (
            (f = d.charCodeAt(p)) === n ||
            f === a ||
            f === 34 ||
            s.forceQuotes
          ) {
            d = '"' + d.replace(bp, '""') + '"';
            break;
          }
        d == "ID" && (d = '"ID"');
      } else
        m.f != null && !m.F
          ? ((c = !1),
            (d = "=" + m.f),
            d.indexOf(",") >= 0 && (d = '"' + d.replace(bp, '""') + '"'))
          : (d = "");
      l.push(d);
    }
  return s.blankrows === !1 && c ? null : l.join(o);
}
function qg(e, r) {
  var t = [],
    i = r ?? {};
  if (e == null || e["!ref"] == null) return "";
  var n = _t(e["!ref"]),
    a = i.FS !== void 0 ? i.FS : ",",
    o = a.charCodeAt(0),
    s =
      i.RS !== void 0
        ? i.RS
        : `
`,
    c = s.charCodeAt(0),
    l = new RegExp((a == "|" ? "\\|" : a) + "+$"),
    d = "",
    u = [];
  i.dense = Array.isArray(e);
  for (
    var h = (i.skipHidden && e["!cols"]) || [],
      m = (i.skipHidden && e["!rows"]) || [],
      p = n.s.c;
    p <= n.e.c;
    ++p
  )
    (h[p] || {}).hidden || (u[p] = Mt(p));
  for (var f = 0, g = n.s.r; g <= n.e.r; ++g)
    (m[g] || {}).hidden ||
      ((d = VA(e, n, g, u, o, c, a, i)),
      d != null &&
        (i.strip && (d = d.replace(l, "")),
        (d || i.blankrows !== !1) && t.push((f++ ? s : "") + d)));
  return delete i.dense, t.join("");
}
function UA(e, r) {
  r || (r = {}),
    (r.FS = "	"),
    (r.RS = `
`);
  var t = qg(e, r);
  if (typeof Qe > "u" || r.type == "string") return t;
  var i = Qe.utils.encode(1200, t, "str");
  return "\xFF\xFE" + i;
}
function zA(e) {
  var r = "",
    t,
    i = "";
  if (e == null || e["!ref"] == null) return [];
  var n = _t(e["!ref"]),
    a = "",
    o = [],
    s,
    c = [],
    l = Array.isArray(e);
  for (s = n.s.c; s <= n.e.c; ++s) o[s] = Mt(s);
  for (var d = n.s.r; d <= n.e.r; ++d)
    for (a = Ut(d), s = n.s.c; s <= n.e.c; ++s)
      if (
        ((r = o[s] + a),
        (t = l ? (e[d] || [])[s] : e[r]),
        (i = ""),
        t !== void 0)
      ) {
        if (t.F != null) {
          if (((r = t.F), !t.f)) continue;
          (i = t.f), r.indexOf(":") == -1 && (r = r + ":" + r);
        }
        if (t.f != null) i = t.f;
        else {
          if (t.t == "z") continue;
          if (t.t == "n" && t.v != null) i = "" + t.v;
          else if (t.t == "b") i = t.v ? "TRUE" : "FALSE";
          else if (t.w !== void 0) i = "'" + t.w;
          else {
            if (t.v === void 0) continue;
            t.t == "s" ? (i = "'" + t.v) : (i = "" + t.v);
          }
        }
        c[c.length] = r + "=" + i;
      }
  return c;
}
function Kg(e, r, t) {
  var i = t || {},
    n = +!i.skipHeader,
    a = e || {},
    o = 0,
    s = 0;
  if (a && i.origin != null)
    if (typeof i.origin == "number") o = i.origin;
    else {
      var c = typeof i.origin == "string" ? dr(i.origin) : i.origin;
      (o = c.r), (s = c.c);
    }
  var l,
    d = { s: { c: 0, r: 0 }, e: { c: s, r: o + r.length - 1 + n } };
  if (a["!ref"]) {
    var u = _t(a["!ref"]);
    (d.e.c = Math.max(d.e.c, u.e.c)),
      (d.e.r = Math.max(d.e.r, u.e.r)),
      o == -1 && ((o = u.e.r + 1), (d.e.r = o + r.length - 1 + n));
  } else o == -1 && ((o = 0), (d.e.r = r.length - 1 + n));
  var h = i.header || [],
    m = 0;
  r.forEach(function (f, g) {
    ci(f).forEach(function (T) {
      (m = h.indexOf(T)) == -1 && (h[(m = h.length)] = T);
      var E = f[T],
        x = "z",
        O = "",
        z = Ie({ c: s + m, r: o + g + n });
      (l = Go(a, z)),
        E && typeof E == "object" && !(E instanceof Date)
          ? (a[z] = E)
          : (typeof E == "number"
              ? (x = "n")
              : typeof E == "boolean"
              ? (x = "b")
              : typeof E == "string"
              ? (x = "s")
              : E instanceof Date
              ? ((x = "d"),
                i.cellDates || ((x = "n"), (E = ur(E))),
                (O = i.dateNF || De[14]))
              : E === null && i.nullError && ((x = "e"), (E = 0)),
            l
              ? ((l.t = x), (l.v = E), delete l.w, delete l.R, O && (l.z = O))
              : (a[z] = l = { t: x, v: E }),
            O && (l.z = O));
    });
  }),
    (d.e.c = Math.max(d.e.c, s + h.length - 1));
  var p = Ut(o);
  if (n) for (m = 0; m < h.length; ++m) a[Mt(m + s) + p] = { t: "s", v: h[m] };
  return (a["!ref"] = ze(d)), a;
}
function HA(e, r) {
  return Kg(null, e, r);
}
function Go(e, r, t) {
  if (typeof r == "string") {
    if (Array.isArray(e)) {
      var i = dr(r);
      return e[i.r] || (e[i.r] = []), e[i.r][i.c] || (e[i.r][i.c] = { t: "z" });
    }
    return e[r] || (e[r] = { t: "z" });
  }
  return typeof r != "number" ? Go(e, Ie(r)) : Go(e, Ie({ r, c: t || 0 }));
}
function WA(e, r) {
  if (typeof r == "number") {
    if (r >= 0 && e.SheetNames.length > r) return r;
    throw new Error("Cannot find sheet # " + r);
  } else if (typeof r == "string") {
    var t = e.SheetNames.indexOf(r);
    if (t > -1) return t;
    throw new Error("Cannot find sheet name |" + r + "|");
  } else throw new Error("Cannot find sheet |" + r + "|");
}
function Lu() {
  return { SheetNames: [], Sheets: {} };
}
function Bu(e, r, t, i) {
  var n = 1;
  if (!t)
    for (
      ;
      n <= 65535 && e.SheetNames.indexOf((t = "Sheet" + n)) != -1;
      ++n, t = void 0
    );
  if (!t || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (i && e.SheetNames.indexOf(t) >= 0) {
    var a = t.match(/(^.*?)(\d+)$/);
    n = (a && +a[2]) || 0;
    var o = (a && a[1]) || t;
    for (++n; n <= 65535 && e.SheetNames.indexOf((t = o + n)) != -1; ++n);
  }
  if ((AS(t), e.SheetNames.indexOf(t) >= 0))
    throw new Error("Worksheet with name |" + t + "| already exists!");
  return e.SheetNames.push(t), (e.Sheets[t] = r), t;
}
function GA(e, r, t) {
  e.Workbook || (e.Workbook = {}),
    e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var i = WA(e, r);
  switch ((e.Workbook.Sheets[i] || (e.Workbook.Sheets[i] = {}), t)) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + t);
  }
  e.Workbook.Sheets[i].Hidden = t;
}
function $A(e, r) {
  return (e.z = r), e;
}
function Yg(e, r, t) {
  return r ? ((e.l = { Target: r }), t && (e.l.Tooltip = t)) : delete e.l, e;
}
function XA(e, r, t) {
  return Yg(e, "#" + r, t);
}
function qA(e, r, t) {
  e.c || (e.c = []), e.c.push({ t: r, a: t || "SheetJS" });
}
function KA(e, r, t, i) {
  for (
    var n = typeof r != "string" ? r : _t(r),
      a = typeof r == "string" ? r : ze(r),
      o = n.s.r;
    o <= n.e.r;
    ++o
  )
    for (var s = n.s.c; s <= n.e.c; ++s) {
      var c = Go(e, o, s);
      (c.t = "n"),
        (c.F = a),
        delete c.v,
        o == n.s.r && s == n.s.c && ((c.f = t), i && (c.D = !0));
    }
  return e;
}
var Uc = {
  encode_col: Mt,
  encode_row: Ut,
  encode_cell: Ie,
  encode_range: ze,
  decode_col: ku,
  decode_row: wu,
  split_cell: sw,
  decode_cell: dr,
  decode_range: va,
  format_cell: Ti,
  sheet_add_aoa: eg,
  sheet_add_json: Kg,
  sheet_add_dom: Wg,
  aoa_to_sheet: xa,
  json_to_sheet: HA,
  table_to_sheet: Gg,
  table_to_book: fA,
  sheet_to_csv: qg,
  sheet_to_txt: UA,
  sheet_to_json: su,
  sheet_to_html: uA,
  sheet_to_formulae: zA,
  sheet_to_row_object_array: su,
  sheet_get_cell: Go,
  book_new: Lu,
  book_append_sheet: Bu,
  book_set_sheet_visibility: GA,
  cell_set_number_format: $A,
  cell_set_hyperlink: Yg,
  cell_set_internal_link: XA,
  cell_add_comment: qA,
  sheet_set_array_formula: KA,
  consts: { SHEET_VISIBLE: 0, SHEET_HIDDEN: 1, SHEET_VERY_HIDDEN: 2 },
};
var gR = yp.version;
var zc = class e {
  constructor() {}
  rates = {
    RSD: 1,
    BAM: 0.0166875,
    EUR: 0.0085,
    MKD: 0.52575,
    BGN: 0.01675,
    ALL: 0.8434,
  };
  BGN_TO_RSD_RATE = 60.22;
  convert(r, t, i) {
    if (t === i) return r;
    if (!this.rates[t] || !this.rates[i])
      throw new Error(`Conversion rate not found for ${t} or ${i}`);
    return r.map((n) => (n / this.rates[t]) * this.rates[i]);
  }
  convertBGNToRSD(r) {
    if (r < 0) throw new Error("Amount cannot be negative.");
    return r * this.BGN_TO_RSD_RATE;
  }
  static ɵfac = function (t) {
    return new (t || e)();
  };
  static ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
};
var Zg = {
  production: !1,
  apiUrl: "https://location-finder-api-1.azurewebsites.net/api/location",
};
var Hc = class e {
  constructor(r) {
    this.http = r;
  }
  geoApiUrl = Zg.apiUrl;
  getUsersLocation() {
    return this.http.get(this.geoApiUrl);
  }
  splitIpAddress(r) {
    if (!/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.test(r))
      throw new Error("Invalid IP address format");
    return r.split(".").map((i) => parseInt(i, 10));
  }
  static ɵfac = function (t) {
    return new (t || e)(ae(xi));
  };
  static ɵprov = pe({ token: e, factory: e.ɵfac, providedIn: "root" });
};
var JA = (e) => ({ "background-color": e }),
  ot = (e) => ({ color: e });
function eI(e, r) {
  if (
    (e & 1 && (H(0, "mat-radio-button", 25), Q(1), ee(2, "translate"), W()),
    e & 2)
  ) {
    let t = r.$implicit;
    ge("value", t), N(), we(xe(2, 2, t));
  }
}
function tI(e, r) {
  if (e & 1) {
    let t = ri();
    H(0, "div")(1, "mat-radio-group", 23),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.activeCurrency2, n) || (a.activeCurrency2 = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.onCurrencyChange());
      }),
      Gt(2, eI, 3, 4, "mat-radio-button", 24),
      W()();
  }
  if (e & 2) {
    let t = Fe();
    N(), Sr("ngModel", t.activeCurrency2), N(), ge("ngForOf", t.currencies);
  }
}
function rI(e, r) {
  if (e & 1) {
    let t = ri();
    H(0, "div", 26)(1, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.selectAll, n) || (a.selectAll = n), Be(n);
      }),
      Ke("change", function (n) {
        Le(t);
        let a = Fe();
        return Be(a.toggleAll(n.checked));
      }),
      Q(2),
      ee(3, "translate"),
      W(),
      H(4, "div", 28)(5, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showBih, n) || (a.showBih = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(6),
      ee(7, "translate"),
      W(),
      H(8, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showCro, n) || (a.showCro = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showSer, n) || (a.showSer = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(12),
      ee(13, "translate"),
      W(),
      H(14, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showSlo, n) || (a.showSlo = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(15),
      ee(16, "translate"),
      W(),
      H(17, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showMont, n) || (a.showMont = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(18),
      ee(19, "translate"),
      W(),
      H(20, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showMace, n) || (a.showMace = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(21),
      ee(22, "translate"),
      W(),
      H(23, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showGreece, n) || (a.showGreece = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(24),
      ee(25, "translate"),
      W(),
      H(26, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showBulgaria, n) || (a.showBulgaria = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(27),
      ee(28, "translate"),
      W(),
      H(29, "mat-checkbox", 27),
      Ir("ngModelChange", function (n) {
        Le(t);
        let a = Fe();
        return Ar(a.showAlba, n) || (a.showAlba = n), Be(n);
      }),
      Ke("change", function () {
        Le(t);
        let n = Fe();
        return Be(n.updateSelectAll());
      }),
      Q(30),
      ee(31, "translate"),
      W()()();
  }
  if (e & 2) {
    let t = Fe();
    N(),
      Sr("ngModel", t.selectAll),
      N(),
      sn(" ", xe(3, 20, "SELEKTUJ_SVE"), " "),
      N(3),
      Sr("ngModel", t.showBih),
      N(),
      we(xe(7, 22, "Bih")),
      N(2),
      Sr("ngModel", t.showCro),
      N(),
      we(xe(10, 24, "Hrvatska")),
      N(2),
      Sr("ngModel", t.showSer),
      N(),
      we(xe(13, 26, "Srbija")),
      N(2),
      Sr("ngModel", t.showSlo),
      N(),
      we(xe(16, 28, "Slovenija")),
      N(2),
      Sr("ngModel", t.showMont),
      N(),
      we(xe(19, 30, "Crna Gora")),
      N(2),
      Sr("ngModel", t.showMace),
      N(),
      we(xe(22, 32, "Severna Makedonija")),
      N(2),
      Sr("ngModel", t.showGreece),
      N(),
      we(xe(25, 34, "Grcka")),
      N(2),
      Sr("ngModel", t.showBulgaria),
      N(),
      we(xe(28, 36, "Bugarska")),
      N(2),
      Sr("ngModel", t.showAlba),
      N(),
      we(xe(31, 38, "Albanija"));
  }
}
function iI(e, r) {
  if (
    (e & 1 &&
      (H(0, "div", 29)(1, "div", 30),
      Ge(2, "div", 31),
      H(3, "div", 32),
      Q(4),
      ee(5, "translate"),
      W()()()),
    e & 2)
  ) {
    let t = r.$implicit;
    N(2), ge("ngStyle", Je(4, JA, t.color)), N(2), we(xe(5, 2, t.name));
  }
}
function nI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 33),
      Ge(1, "div", 34),
      H(2, "div", 35),
      Ge(3, "div", 36),
      W(),
      H(4, "mat-card-title", 37),
      Q(5),
      ee(6, "translate"),
      W(),
      H(7, "mat-card-content", 38)(8, "div", 39)(9, "label"),
      Q(10),
      ee(11, "translate"),
      W(),
      H(12, "span", 40),
      Q(13),
      ee(14, "number"),
      W()(),
      H(15, "div", 39)(16, "label"),
      Q(17),
      ee(18, "translate"),
      W(),
      H(19, "span", 40),
      Q(20),
      ee(21, "number"),
      W()(),
      H(22, "div", 39)(23, "label"),
      Q(24),
      ee(25, "translate"),
      W(),
      H(26, "span", 40),
      Q(27),
      ee(28, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(5),
      we(xe(6, 13, t.countries2[0].name)),
      N(5),
      we(xe(11, 15, "BMB_95")),
      N(2),
      ge("ngStyle", Je(30, ot, t.getColor("bmb95", t.fuelPrices.Bosnia.bmb95))),
      N(),
      rt(
        "",
        it(14, 17, t.convertedAmount[0], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(18, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Bosnia.diesel))
      ),
      N(),
      rt(
        "",
        it(21, 22, t.convertedAmount[1], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(25, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Bosnia.gas))),
      N(),
      rt(
        "",
        it(28, 27, t.convertedAmount[2], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function aI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 41)(1, "div", 42),
      Ge(2, "img", 43),
      W(),
      H(3, "mat-card-title"),
      Q(4),
      ee(5, "translate"),
      W(),
      H(6, "mat-card-content", 44)(7, "div", 39)(8, "label"),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "span", 40),
      Q(12),
      ee(13, "number"),
      W()(),
      H(14, "div", 39)(15, "label"),
      Q(16),
      ee(17, "translate"),
      W(),
      H(18, "span", 40),
      Q(19),
      ee(20, "number"),
      W()(),
      H(21, "div", 39)(22, "label"),
      Q(23),
      ee(24, "translate"),
      W(),
      H(25, "span", 40),
      Q(26),
      ee(27, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(4),
      we(xe(5, 13, t.countries2[1].name)),
      N(5),
      sn("", xe(10, 15, "BMB_95"), " "),
      N(2),
      ge(
        "ngStyle",
        Je(30, ot, t.getColor("bmb95", t.fuelPrices.Croatia.bmb95))
      ),
      N(),
      rt(
        "",
        it(13, 17, t.convertedAmount[3], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(17, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Croatia.diesel))
      ),
      N(),
      rt(
        "",
        it(20, 22, t.convertedAmount[4], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(24, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Croatia.gas))),
      N(),
      rt(
        "",
        it(27, 27, t.convertedAmount[5], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function oI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 45)(1, "div", 46),
      Ge(2, "img", 47),
      W(),
      H(3, "mat-card-title"),
      Q(4),
      ee(5, "translate"),
      W(),
      H(6, "mat-card-content", 48)(7, "div", 39)(8, "label"),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "span", 40),
      Q(12),
      ee(13, "number"),
      W()(),
      H(14, "div", 39)(15, "label"),
      Q(16),
      ee(17, "translate"),
      W(),
      H(18, "span", 40),
      Q(19),
      ee(20, "number"),
      W()(),
      H(21, "div", 39)(22, "label"),
      Q(23),
      ee(24, "translate"),
      W(),
      H(25, "span", 40),
      Q(26),
      ee(27, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(4),
      we(xe(5, 13, t.countries2[2].name)),
      N(5),
      we(xe(10, 15, "BMB_95")),
      N(2),
      ge("ngStyle", Je(30, ot, t.getColor("bmb95", t.fuelPrices.Serbia.bmb95))),
      N(),
      rt(
        "",
        it(13, 17, t.convertedAmount[6], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(17, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Serbia.diesel))
      ),
      N(),
      rt(
        "",
        it(20, 22, t.convertedAmount[7], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(24, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Serbia.gas))),
      N(),
      rt(
        "",
        it(27, 27, t.convertedAmount[8], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function sI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 49)(1, "div", 50),
      Ge(2, "img", 51),
      W(),
      H(3, "mat-card-title", 52),
      Q(4),
      ee(5, "translate"),
      W(),
      H(6, "mat-card-content", 53)(7, "div", 39)(8, "label"),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "span", 40),
      Q(12),
      ee(13, "number"),
      W()(),
      H(14, "div", 39)(15, "label"),
      Q(16),
      ee(17, "translate"),
      W(),
      H(18, "span", 40),
      Q(19),
      ee(20, "number"),
      W()(),
      H(21, "div", 39)(22, "label"),
      Q(23),
      ee(24, "translate"),
      W(),
      H(25, "span", 40),
      Q(26),
      ee(27, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(4),
      we(xe(5, 13, t.countries2[3].name)),
      N(5),
      we(xe(10, 15, "BMB_95")),
      N(2),
      ge(
        "ngStyle",
        Je(30, ot, t.getColor("bmb95", t.fuelPrices.Slovenia.bmb95))
      ),
      N(),
      rt(
        "",
        it(13, 17, t.convertedAmount[9], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(17, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Slovenia.diesel))
      ),
      N(),
      rt(
        "",
        it(20, 22, t.convertedAmount[10], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(24, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Slovenia.gas))),
      N(),
      rt(
        "",
        it(27, 27, t.convertedAmount[11], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function cI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 54)(1, "div", 55),
      Ge(2, "img", 56),
      W(),
      H(3, "mat-card-title"),
      Q(4),
      ee(5, "translate"),
      W(),
      H(6, "mat-card-content", 57)(7, "div", 39)(8, "label"),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "span", 40),
      Q(12),
      ee(13, "number"),
      W()(),
      H(14, "div", 39)(15, "label"),
      Q(16),
      ee(17, "translate"),
      W(),
      H(18, "span", 40),
      Q(19),
      ee(20, "number"),
      W()(),
      H(21, "div", 39)(22, "label"),
      Q(23),
      ee(24, "translate"),
      W(),
      H(25, "span", 40),
      Q(26),
      ee(27, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(4),
      we(xe(5, 13, t.countries2[4].name)),
      N(5),
      we(xe(10, 15, "BMB_95")),
      N(2),
      ge(
        "ngStyle",
        Je(30, ot, t.getColor("bmb95", t.fuelPrices.Montenegro.bmb95))
      ),
      N(),
      rt(
        "",
        it(13, 17, t.convertedAmount[12], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(17, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Montenegro.diesel))
      ),
      N(),
      rt(
        "",
        it(20, 22, t.convertedAmount[13], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(24, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Montenegro.gas))),
      N(),
      rt(
        "",
        it(27, 27, t.convertedAmount[14], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function lI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 58)(1, "div", 59),
      Ge(2, "div", 60)(3, "div", 60)(4, "div", 60),
      W(),
      Ge(5, "div", 61)(6, "div", 62),
      H(7, "div", 63)(8, "mat-card-title", 64),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "mat-card-content", 65)(12, "div", 39)(13, "label"),
      Q(14),
      ee(15, "translate"),
      W(),
      H(16, "span", 40),
      Q(17),
      ee(18, "number"),
      W()(),
      H(19, "div", 39)(20, "label"),
      Q(21),
      ee(22, "translate"),
      W(),
      H(23, "span", 40),
      Q(24),
      ee(25, "number"),
      W()(),
      H(26, "div", 39)(27, "label"),
      Q(28),
      ee(29, "translate"),
      W(),
      H(30, "span", 40),
      Q(31),
      ee(32, "number"),
      W()()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(9),
      we(xe(10, 13, t.countries2[5].name)),
      N(5),
      we(xe(15, 15, "BMB_95")),
      N(2),
      ge(
        "ngStyle",
        Je(30, ot, t.getColor("bmb95", t.fuelPrices.North_Macedonia.bmb95))
      ),
      N(),
      rt(
        "",
        it(18, 17, t.convertedAmount[15], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(22, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.North_Macedonia.diesel))
      ),
      N(),
      rt(
        "",
        it(25, 22, t.convertedAmount[16], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(29, 25, "GAS")),
      N(2),
      ge(
        "ngStyle",
        Je(34, ot, t.getColor("gas", t.fuelPrices.North_Macedonia.gas))
      ),
      N(),
      rt(
        "",
        it(32, 27, t.convertedAmount[17], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function dI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 66)(1, "div", 67),
      Ge(2, "div")(3, "div")(4, "div")(5, "div"),
      W(),
      H(6, "div", 63)(7, "mat-card-title", 68),
      Q(8),
      ee(9, "translate"),
      W(),
      H(10, "mat-card-content", 69)(11, "div", 39)(12, "label"),
      Q(13),
      ee(14, "translate"),
      W(),
      H(15, "span", 40),
      Q(16),
      ee(17, "number"),
      W()(),
      H(18, "div", 39)(19, "label"),
      Q(20),
      ee(21, "translate"),
      W(),
      H(22, "span", 40),
      Q(23),
      ee(24, "number"),
      W()(),
      H(25, "div", 39)(26, "label"),
      Q(27),
      ee(28, "translate"),
      W(),
      H(29, "span", 40),
      Q(30),
      ee(31, "number"),
      W()()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(8),
      we(xe(9, 13, t.countries2[6].name)),
      N(5),
      we(xe(14, 15, "BMB_95")),
      N(2),
      ge("ngStyle", Je(30, ot, t.getColor("bmb95", t.fuelPrices.Greece.bmb95))),
      N(),
      rt(
        "",
        it(17, 17, t.convertedAmount[18], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(21, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Greece.diesel))
      ),
      N(),
      rt(
        "",
        it(24, 22, t.convertedAmount[19], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(28, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Greece.gas))),
      N(),
      rt(
        "",
        it(31, 27, t.convertedAmount[20], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function uI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 70)(1, "mat-card-title", 71),
      Q(2),
      ee(3, "translate"),
      W(),
      H(4, "mat-card-content", 72)(5, "div", 39)(6, "label"),
      Q(7),
      ee(8, "translate"),
      W(),
      H(9, "span", 40),
      Q(10),
      ee(11, "number"),
      W()(),
      H(12, "div", 39)(13, "label"),
      Q(14),
      ee(15, "translate"),
      W(),
      H(16, "span", 40),
      Q(17),
      ee(18, "number"),
      W()(),
      H(19, "div", 39)(20, "label"),
      Q(21),
      ee(22, "translate"),
      W(),
      H(23, "span", 40),
      Q(24),
      ee(25, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(2),
      we(xe(3, 13, t.countries2[7].name)),
      N(5),
      sn("", xe(8, 15, "BMB_95"), " "),
      N(2),
      ge(
        "ngStyle",
        Je(30, ot, t.getColor("bmb95", t.fuelPrices.Bulgaria.bmb95))
      ),
      N(),
      rt(
        "",
        it(11, 17, t.convertedAmount[21], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(15, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Bulgaria.diesel))
      ),
      N(),
      rt(
        "",
        it(18, 22, t.convertedAmount[22], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(22, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Bulgaria.gas))),
      N(),
      rt(
        "",
        it(25, 27, t.convertedAmount[23], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
function fI(e, r) {
  if (
    (e & 1 &&
      (H(0, "mat-card", 73)(1, "div", 74),
      Ge(2, "img", 75),
      W(),
      H(3, "mat-card-title"),
      Q(4),
      ee(5, "translate"),
      W(),
      H(6, "mat-card-content", 76)(7, "div", 39)(8, "label"),
      Q(9),
      ee(10, "translate"),
      W(),
      H(11, "span", 40),
      Q(12),
      ee(13, "number"),
      W()(),
      H(14, "div", 39)(15, "label"),
      Q(16),
      ee(17, "translate"),
      W(),
      H(18, "span", 40),
      Q(19),
      ee(20, "number"),
      W()(),
      H(21, "div", 39)(22, "label"),
      Q(23),
      ee(24, "translate"),
      W(),
      H(25, "span", 40),
      Q(26),
      ee(27, "number"),
      W()()()()),
    e & 2)
  ) {
    let t = Fe();
    N(4),
      we(xe(5, 13, t.countries2[8].name)),
      N(5),
      we(xe(10, 15, "BMB_95")),
      N(2),
      ge(
        "ngStyle",
        Je(30, ot, t.getColor("bmb95", t.fuelPrices.Albania.bmb95))
      ),
      N(),
      rt(
        "",
        it(13, 17, t.convertedAmount[24], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(17, 20, "DIZEL")),
      N(2),
      ge(
        "ngStyle",
        Je(32, ot, t.getColor("diesel", t.fuelPrices.Albania.diesel))
      ),
      N(),
      rt(
        "",
        it(20, 22, t.convertedAmount[25], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      ),
      N(4),
      we(xe(24, 25, "GAS")),
      N(2),
      ge("ngStyle", Je(34, ot, t.getColor("gas", t.fuelPrices.Albania.gas))),
      N(),
      rt(
        "",
        it(27, 27, t.convertedAmount[26], "1.2-2"),
        " ",
        t.activeCurrency2 || "RSD",
        ""
      );
  }
}
var Wc = class e {
  constructor(r, t, i, n, a, o, s, c) {
    this.currencyService = r;
    this.platformId = t;
    this.fuelPriceService = i;
    this.translate = n;
    this.meta = a;
    this.titleService = o;
    this.spinner = s;
    this.http = c;
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
  excelAmounts = [];
  convertedAmount = [];
  fuelTypes = ["bmb95", "diesel", "gas"];
  countries = Object.keys(this.fuelPrices);
  minMaxValues = {};
  selections;
  loading = !0;
  updated;
  ekavica = "Cene";
  ijekavica = "Cijene";
  isFacebookBrowser = !1;
  isInstagramBrowser = !1;
  fileData = [];
  fileDataAlbania = [];
  fileDataMontenegro = [];
  convertToNumber = [];
  ngOnInit() {
    if (
      (this.getselectedCurrencies(),
      this.getSelectedCountries(),
      Hr(this.platformId))
    ) {
      try {
        this.loadExcelFile(),
          this.loadExcelFileAlbania(),
          this.loadExcelFileMontenegro();
      } catch (r) {
        console.log(r);
      } finally {
        this.loadExcelFile(),
          this.loadExcelFileAlbania(),
          this.loadExcelFileMontenegro();
      }
      this.getselectedCurrencies(),
        this.getSelectedCountries(),
        this.getUsersLocation(),
        this.calculateMinMax();
    }
  }
  ngAfterViewInit() {
    if (Hr(this.platformId)) {
      try {
        this.loadExcelFile(),
          this.loadExcelFileAlbania(),
          this.loadExcelFileMontenegro();
      } catch (r) {
        console.log(r);
      } finally {
        this.loadExcelFile(),
          this.loadExcelFileAlbania(),
          this.loadExcelFileMontenegro();
      }
      this.getselectedCurrencies(), this.getSelectedCountries();
    }
  }
  ngDoCheck() {
    Hr(this.platformId) &&
      (this.getselectedCurrencies(), this.getSelectedCountries());
  }
  getUserLocation() {
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(
          (r) => {
            console.log(r);
            let t = r.coords.latitude;
            console.log(t);
            let i = r.coords.longitude;
            console.log(i), this.getCountryFromCoordinates(t, i);
          },
          (r) => {
            console.error("Error getting location", r);
          }
        )
      : console.error("Geolocation is not supported by this browser.");
  }
  getCountryFromCoordinates(r, t) {
    return r >= 42 && r <= 46 && t >= 15 && t <= 19
      ? this.ijekavica
      : r >= 44 && r <= 46 && t >= 19 && t <= 23
      ? this.ekavica
      : "Cena";
  }
  getSelectedCountries() {
    if (Hr(this.platformId)) {
      let r = localStorage.getItem("selections");
      if (r) {
        let t = JSON.parse(r);
        (this.showBih = t.showBih ?? !1),
          (this.showCro = t.showCro ?? !1),
          (this.showSer = t.showSer ?? !1),
          (this.showSlo = t.showSlo ?? !1),
          (this.showMont = t.showMont ?? !1),
          (this.showMace = t.showMace ?? !1),
          (this.showGreece = t.showGreece ?? !1),
          (this.showBulgaria = t.showBulgaria ?? !1),
          (this.showAlba = t.showAlba ?? !1),
          this.updateSelectAll();
      } else this.toggleAll(!0);
      this.loading = !1;
    }
  }
  getselectedCurrencies() {
    if (Hr(this.platformId)) {
      let r = localStorage.getItem("selectedCurrency");
      r && this.currencies.includes(r)
        ? (this.activeCurrency2 = r)
        : (this.activeCurrency2 = "RSD"),
        this.onCurrencyChange(),
        (this.loading = !1);
    }
  }
  calculateMinMax() {
    this.fuelTypes.forEach((r) => {
      let t = this.countries.map((s) => this.fuelPrices[s][r]);
      t.sort((s, c) => s - c);
      let i = t[0],
        n = t[t.length - 1],
        a = t[1] || i,
        o = t[t.length - 2] || n;
      this.minMaxValues[r] = { min: i, max: n, minNext: a, maxPrev: o };
    });
  }
  getColor(r, t) {
    let { min: i, max: n, minNext: a, maxPrev: o } = this.minMaxValues[r];
    return t === n
      ? "red"
      : t === i
      ? "#00ea00"
      : t === a
      ? "#4CAF50"
      : t === o
      ? "orange"
      : "white";
  }
  onCurrencyChange() {
    Hr(this.platformId) &&
      localStorage.setItem("selectedCurrency", this.activeCurrency2),
      (this.convertedAmount = this.currencyService.convert(
        this.excelAmounts,
        "RSD",
        this.activeCurrency2
      ));
  }
  isCheckboxDisabled(r) {
    return this.activeCurrency2 !== null && this.activeCurrency2 !== r;
  }
  toggleAll(r) {
    (this.selectAll = r),
      (this.showBih = r),
      (this.showCro = r),
      (this.showSer = r),
      (this.showSlo = r),
      (this.showMont = r),
      (this.showMace = r),
      (this.showGreece = r),
      (this.showBulgaria = r),
      (this.showAlba = r),
      this.saveSelections();
  }
  updateSelectAll() {
    let r =
      this.showBih &&
      this.showCro &&
      this.showSer &&
      this.showSlo &&
      this.showMont &&
      this.showMace &&
      this.showGreece &&
      this.showBulgaria &&
      this.showAlba;
    (this.selectAll = r), Hr(this.platformId) && this.saveSelections();
  }
  saveSelections() {
    let r = {
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
    Hr(this.platformId) &&
      localStorage.setItem("selections", JSON.stringify(r));
  }
  getUsersLocation() {
    this.spinner.show("getUsersLocationSpinner"),
      this.fuelPriceService.getUsersLocation().subscribe({
        next: (r) => {
          r.country === "Serbia"
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
            : r.country === "Bosnia and Herzegovina"
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
            : r.country === "Croatia"
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
            : r.country === "Montenegro"
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
            : r.country === "Slovenia"
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
            : r.country === "Albania"
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
            : r.country === "North Macedonia"
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
            : r.country === "Bulgaria"
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
            : r.country === "Greece"
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
        error: (r) => {
          console.error(r), this.spinner.hide("getUsersLocationSpinner");
        },
      });
  }
  loadExcelFile() {
    return en(this, null, function* () {
      yield this.http
        .get("Book1.xlsx", { responseType: "arraybuffer" })
        .subscribe(
          (t) => {
            let i = ma(new Uint8Array(t), { type: "array" }),
              n = i.Sheets[i.SheetNames[0]];
            (this.fileData = Uc.sheet_to_json(n)),
              this.fileData != null &&
                (this.fileData = this.fileData.map((a) =>
                  Xe(te({}, a), {
                    priceGasoline: isNaN(
                      Number(a.Gasoline_Price.replace(",", ".").trim())
                    )
                      ? 0
                      : Number(a.Gasoline_Price.replace(",", ".").trim()),
                    priceDizel: isNaN(+a.Diesel_Price.replace(",", ".").trim())
                      ? 0
                      : +a.Diesel_Price.replace(",", ".").trim(),
                    priceLPg: isNaN(+a.LPG_Price.replace(",", ".").trim())
                      ? 0
                      : +a.LPG_Price.replace(",", ".").trim(),
                  })
                ));
          },
          (t) => {
            console.error("Error loading Excel file:", t);
          }
        );
    });
  }
  loadExcelFileAlbania() {
    return en(this, null, function* () {
      yield this.http
        .get("Book2.xlsx", { responseType: "arraybuffer" })
        .subscribe(
          (t) => {
            let i = ma(new Uint8Array(t), { type: "array" }),
              n = i.Sheets[i.SheetNames[0]];
            (this.fileDataAlbania = Uc.sheet_to_json(n)),
              this.fileDataAlbania != null &&
                (this.fileDataAlbania = this.fileDataAlbania.map((a) =>
                  Xe(te({}, a), {
                    priceGasolineAlbania: isNaN(
                      Number(a.albania_gasoline.replace(",", ".").trim())
                    )
                      ? 0
                      : Number(a.albania_gasoline.replace(",", ".").trim()),
                    priceDizelAlbania: isNaN(
                      +a.albania_diesel.replace(",", ".").trim()
                    )
                      ? 0
                      : +a.albania_diesel.replace(",", ".").trim(),
                    priceLPgAlbania: isNaN(
                      +a.albania_gas.replace(",", ".").trim()
                    )
                      ? 0
                      : +a.albania_gas.replace(",", ".").trim(),
                  })
                ));
          },
          (t) => {
            console.error("Error loading Excel file:", t);
          }
        );
    });
  }
  loadExcelFileMontenegro() {
    return en(this, null, function* () {
      yield this.http
        .get("Book3.xlsx", { responseType: "arraybuffer" })
        .subscribe(
          (t) => {
            let i = ma(new Uint8Array(t), { type: "array" }),
              n = i.Sheets[i.SheetNames[0]];
            (this.fileDataMontenegro = Uc.sheet_to_json(n)),
              (this.fileData != undefined || this.fileDataAlbania != undefined) &&
                ((this.fileDataMontenegro = this.fileDataMontenegro.map((a) =>
                  Xe(te({}, a), {
                    priceGasolineMontenegro: isNaN(
                      Number(a.montenegro_gasoline.replace(",", ".").trim())
                    )
                      ? 0
                      : Number(a.montenegro_gasoline.replace(",", ".").trim()),
                    priceDizelMontenegro: isNaN(
                      +a.montenegro_diesel.replace(",", ".").trim()
                    )
                      ? 0
                      : +a.montenegro_diesel.replace(",", ".").trim(),
                    priceLPgMontenegro: isNaN(
                      +a.montenegro_gas.replace(",", ".").trim()
                    )
                      ? 0
                      : +a.montenegro_gas.replace(",", ".").trim(),
                  })
                )),
                (this.excelAmounts = [
                  +this.fileData[1].priceGasoline,
                  +this.fileData[1].priceDizel,
                  +this.fileData[1].priceLPg,
                  +this.fileData[11].priceGasoline,
                  +this.fileData[11].priceDizel,
                  +this.fileData[11].priceLPg,
                  +this.fileData[22].priceGasoline,
                  +this.fileData[22].priceDizel,
                  +this.fileData[22].priceLPg,
                  +this.fileData[23].priceGasoline,
                  +this.fileData[23].priceDizel,
                  +this.fileData[23].priceLPg,
                  this.currencyService.convertBGNToRSD(
                    this.fileDataMontenegro[30].priceGasolineMontenegro
                  ),
                  this.currencyService.convertBGNToRSD(
                    this.fileDataMontenegro[30].priceDizelMontenegro
                  ),
                  this.currencyService.convertBGNToRSD(
                    this.fileDataMontenegro[30].priceLPgMontenegro
                  ),
                  +this.fileData[17].priceGasoline,
                  +this.fileData[17].priceDizel,
                  +this.fileData[17].priceLPg,
                  +this.fileData[10].priceGasoline,
                  +this.fileData[10].priceDizel,
                  +this.fileData[10].priceLPg,
                  +this.fileData[2].priceGasoline,
                  +this.fileData[2].priceDizel,
                  +this.fileData[2].priceLPg,
                  this.currencyService.convertBGNToRSD(
                    this.fileDataAlbania[30].priceGasolineAlbania
                  ),
                  this.currencyService.convertBGNToRSD(
                    this.fileDataAlbania[30].priceDizelAlbania
                  ),
                  this.currencyService.convertBGNToRSD(
                    this.fileDataAlbania[30].priceLPgAlbania
                  ),
                ]),
                (this.updated = this.fileDataMontenegro[30].date));
          },
          (t) => {
            console.error("Error loading Excel file:", t);
          }
        );
    });
  }
  static ɵfac = function (t) {
    return new (t || e)(
      fe(zc),
      fe(Tr),
      fe(Hc),
      fe(ho),
      fe(mh),
      fe(Ss),
      fe(Vd),
      fe(xi)
    );
  };
  static ɵcmp = ut({
    type: e,
    selectors: [["app-root"]],
    standalone: !0,
    features: [ht],
    decls: 53,
    vars: 33,
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
    template: function (t, i) {
      t & 1 &&
        (H(0, "main")(1, "header")(2, "mat-toolbar")(3, "h1"),
        Q(4),
        ee(5, "translate"),
        W(),
        Ge(6, "span", 0),
        Gt(7, tI, 3, 2, "div", 1),
        W()(),
        H(8, "section")(9, "h1", 2),
        Q(10),
        ee(11, "translate"),
        W(),
        Gt(12, rI, 32, 40, "div", 3),
        W(),
        H(13, "section")(14, "div", 4),
        Gt(15, iI, 6, 6, "div", 5),
        W()(),
        H(16, "section")(17, "div", 6)(18, "i", 7),
        Q(19),
        ee(20, "translate"),
        H(21, "time"),
        Q(22),
        W()()(),
        H(23, "div", 6)(24, "i", 7),
        Q(25),
        ee(26, "translate"),
        W()()(),
        H(27, "section")(28, "div", 8)(29, "div", 9),
        Gt(30, nI, 29, 36, "mat-card", 10)(31, aI, 28, 36, "mat-card", 11)(
          32,
          oI,
          28,
          36,
          "mat-card",
          12
        ),
        W(),
        H(33, "div", 9),
        Gt(34, sI, 28, 36, "mat-card", 13)(35, cI, 28, 36, "mat-card", 14)(
          36,
          lI,
          33,
          36,
          "mat-card",
          15
        ),
        W(),
        H(37, "div", 9),
        Gt(38, dI, 32, 36, "mat-card", 16)(39, uI, 26, 36, "mat-card", 17)(
          40,
          fI,
          28,
          36,
          "mat-card",
          18
        ),
        W()()(),
        H(41, "section")(42, "div", 19)(43, "p", 20),
        Q(44),
        ee(45, "translate"),
        W()()(),
        H(46, "section"),
        Ge(47, "app-back-to-top"),
        W(),
        Ge(48, "app-footer"),
        W(),
        H(49, "ngx-spinner", 21)(50, "p", 22),
        Q(51),
        ee(52, "translate"),
        W()()),
        t & 2 &&
          (N(4),
          we(xe(5, 21, "CENE_GORIVA")),
          N(3),
          ge("ngIf", !i.loading),
          N(3),
          we(xe(11, 23, "H1")),
          N(2),
          ge("ngIf", !i.loading),
          N(3),
          ge("ngForOf", i.legends),
          N(4),
          sn("", xe(20, 25, "AZURIRANJE"), "\xA0"),
          N(2),
          Dt("datetime", i.updated),
          N(),
          we(i.updated),
          N(3),
          we(xe(26, 27, "UPDATE_INFO")),
          N(5),
          ge("ngIf", i.showBih),
          N(),
          ge("ngIf", i.showCro),
          N(),
          ge("ngIf", i.showSer),
          N(2),
          ge("ngIf", i.showSlo),
          N(),
          ge("ngIf", i.showMont),
          N(),
          ge("ngIf", i.showMace),
          N(2),
          ge("ngIf", i.showGreece),
          N(),
          ge("ngIf", i.showBulgaria),
          N(),
          ge("ngIf", i.showAlba),
          N(4),
          we(xe(45, 29, "DISCLAIMER")),
          N(5),
          ge("fullScreen", !1),
          N(2),
          sn(" ", xe(52, 31, "UCITAVANJE"), " "));
    },
    dependencies: [
      F0,
      S0,
      I0,
      A0,
      Y0,
      X0,
      Nd,
      hr,
      gs,
      jn,
      kf,
      Ef,
      dc,
      lc,
      im,
      cc,
      sm,
      uc,
      um,
      Ld,
      hc,
      mc,
      pc,
      Jn,
      qs,
      vm,
      gm,
    ],
    styles: [
      '@charset "UTF-8";.flag-cards[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:center;position:relative;top:37px;flex-direction:column}.flag-card[_ngcontent-%COMP%]{width:200px;padding:16px;color:#fff;font-weight:700;text-align:center;font-size:19px}.bosnia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#002f6c 50%,#ff0 50%);position:relative;color:#fff}.bosnia-flag[_ngcontent-%COMP%]:before{content:"\\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605  \\2605";font-size:10px;color:#fff;position:absolute;top:26%;left:26%;transform:rotate(0);white-space:nowrap}.bosnia-flag[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;right:0;width:40px;height:100%;background-color:#ff0;clip-path:polygon(100% 0,0 100%,100% 100%)}.croatia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,red 33%,#fff 33% 66%,#00f 66%)}.serbia-flag[_ngcontent-%COMP%]{background:linear-gradient(to bottom,red 33%,#00f 33% 66%,#fff 66%)}.highest-price[_ngcontent-%COMP%]{color:red;font-weight:700}.lowest-price[_ngcontent-%COMP%]{color:green;font-weight:700}.each-card[_ngcontent-%COMP%]{background-color:#000;border-radius:10px;width:178px;z-index:1;margin-left:77px;margin-top:8px}.fuel-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;margin-top:14px;width:190px}h3[_ngcontent-%COMP%]{position:absolute;text-align:center;top:20px}.flag[_ngcontent-%COMP%]{position:relative;width:300px;height:200px;box-shadow:0 0 1px #00000080;overflow:hidden}.bosnia[_ngcontent-%COMP%]{background-color:#001e96}.bosnia__triangle[_ngcontent-%COMP%]{position:absolute;top:-72%;left:35%;border:142px solid transparent;border-left-color:#ffcc01;transform:rotate(-45deg)}.bosnia__star__wrapper[_ngcontent-%COMP%]{filter:drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff) drop-shadow(25px 25px #fff)}.bosnia__star__wrapper[_ngcontent-%COMP%] > .star[_ngcontent-%COMP%]{width:35px;height:35px;margin:-20px 0;background-color:#fff;clip-path:polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)}.croatia[_ngcontent-%COMP%]{background:linear-gradient(red 33%,#fff 33% 67%,#171796 0)}.croatia__logo[_ngcontent-%COMP%]{position:absolute;margin:auto;left:6px;top:48px}.serbia[_ngcontent-%COMP%]{background:linear-gradient(#c83339 33%,#033e76 33% 66%,#fff 0)}.serbia[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:70px;top:17px}.img-serbia[_ngcontent-%COMP%]{position:absolute;left:8px;top:17px}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.example-margin[_ngcontent-%COMP%]{margin:0 10px}.example-section[_ngcontent-%COMP%]{display:flex;align-content:center;align-items:center;height:60px}.checkbox-group[_ngcontent-%COMP%]{display:flex;gap:10px;margin-left:20px}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.slovenia[_ngcontent-%COMP%]{background:linear-gradient(#fff 33%,#00f 33% 66%,red 0)}.slovenia[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{position:absolute;left:19%;top:17%}.img-slovenia[_ngcontent-%COMP%]{position:absolute;left:2%;top:17%}.montenegro[_ngcontent-%COMP%]{border:10px solid #e9b528;background-color:#e30613;display:grid;place-items:center}.img-montenegro[_ngcontent-%COMP%]{position:absolute;left:0%;top:17%}.north_macedonia[_ngcontent-%COMP%]{background:#d91a21}.north_macedonia[_ngcontent-%COMP%]:before{content:"";position:absolute;background-color:#f8e92e;inset:0;margin:auto;width:50px;aspect-ratio:1;border-radius:1in;border:6px solid #d91a21;z-index:1}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-evenly;height:100%;width:50%;-webkit-box-reflect:right 0}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .top__shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{background-color:#f8e92e;width:100%;height:40px;clip-path:polygon(0 0,100% 45%,100% 55%,0% 100%)}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%]:nth-child(1){transform:scaleX(1.5) rotate(50deg)}.north_macedonia[_ngcontent-%COMP%] > .left_shapes[_ngcontent-%COMP%] > .shape[_ngcontent-%COMP%]:nth-child(3){transform:scaleX(1.5) rotate(-50deg)}.north_macedonia[_ngcontent-%COMP%] > .top__shape[_ngcontent-%COMP%], .north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{position:absolute;margin:0 auto;width:25%;height:50px;rotate:90deg;left:29%;top:11px;transform:translatey(-50%)}.north_macedonia[_ngcontent-%COMP%] > .bottom__shape[_ngcontent-%COMP%]{transform:scaleX(-1);top:70%;left:38%}.container-north-macedonia[_ngcontent-%COMP%]{z-index:1;position:absolute;top:17px;display:flex;flex-direction:column}.greece[_ngcontent-%COMP%]{background:repeating-linear-gradient(#055eb2,#055eb2 11.11%,#fff 11.11% 22.22%)}.greece__top_left[_ngcontent-%COMP%]{width:138px;height:111.33px;background-color:#fff;display:grid;grid-template-columns:1fr 1fr;gap:25px}.greece__top_left[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:#055eb2}.bulgaria[_ngcontent-%COMP%]{background:linear-gradient(#fff 33%,#00956e 33% 66%,#d52612 0)}.albania[_ngcontent-%COMP%]{background-color:#da2b26}.albania__logo[_ngcontent-%COMP%]{position:absolute;width:140px;margin:auto;right:183px;top:59px}.filter-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin:20px 10px;flex-wrap:wrap;justify-content:center}.checkboxes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.radio-currencies[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;margin:10px;padding-top:5px}@media (min-width: 320px) and (max-width: 599px){.mat-toolbar-row[_ngcontent-%COMP%], .mat-toolbar-single-row[_ngcontent-%COMP%]{height:75px;white-space:normal!important}.disclaimer-wrapper[_ngcontent-%COMP%], .info-wrapper[_ngcontent-%COMP%]{font-size:14px}.mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:17px!important}.small-devices-show[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.small-devices-disclaimer[_ngcontent-%COMP%]{padding:5px 10px}.small-devices-h1[_ngcontent-%COMP%]{text-align:center;padding-right:14px}.legend-item[_ngcontent-%COMP%]{flex:0 1 calc(50% - 84px)}.legend-text[_ngcontent-%COMP%]{width:116px}}@media (max-width: 489px){.radio-currencies[_ngcontent-%COMP%]{width:222px}}@media screen and (min-width: 599px){.filter-container[_ngcontent-%COMP%]{display:none!important}.small-devices-h1[_ngcontent-%COMP%]{text-align:center;padding-right:14px}}.legend-container[_ngcontent-%COMP%]{padding:.5rem;display:flex;align-items:center}.legend-container[_ngcontent-%COMP%]   .legend-color[_ngcontent-%COMP%]{height:1rem;width:1rem;position:absolute;border-radius:10px}.legend-container[_ngcontent-%COMP%]   .legend-text[_ngcontent-%COMP%]{position:relative;left:1rem;padding-left:.5rem;height:1.25rem;line-height:1.25rem;font-size:.9rem}.legend-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-wrap:wrap}.legend-item[_ngcontent-%COMP%]{margin:20px 15px 0;box-sizing:border-box}.info-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:20px;color:#433c3c}.disclaimer-wrapper[_ngcontent-%COMP%]{margin-top:67px;font-style:italic;display:flex;justify-content:center;text-align:center;color:#433c3c}',
    ],
  });
};
uh(Wc, l0).catch((e) => console.error(e));
