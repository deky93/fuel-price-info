var Hf = Object.defineProperty,
  Uf = Object.defineProperties;
var zf = Object.getOwnPropertyDescriptors;
var Fn = Object.getOwnPropertySymbols;
var Sa = Object.prototype.hasOwnProperty,
  xa = Object.prototype.propertyIsEnumerable;
var Ma = (e, t, n) =>
    t in e
      ? Hf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Re = (e, t) => {
    for (var n in (t ||= {})) Sa.call(t, n) && Ma(e, n, t[n]);
    if (Fn) for (var n of Fn(t)) xa.call(t, n) && Ma(e, n, t[n]);
    return e;
  },
  Pe = (e, t) => Uf(e, zf(t));
var vE = (e, t) => {
  var n = {};
  for (var r in e) Sa.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Fn)
    for (var r of Fn(e)) t.indexOf(r) < 0 && xa.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ta(e, t) {
  return Object.is(e, t);
}
var z = null,
  Rn = !1,
  Pn = 1,
  ke = Symbol("SIGNAL");
function S(e) {
  let t = z;
  return (z = e), t;
}
function Na() {
  return z;
}
var en = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function No(e) {
  if (Rn) throw new Error("");
  if (z === null) return;
  z.consumerOnSignalRead(e);
  let t = z.nextProducerIndex++;
  if ((Vn(z), t < z.producerNode.length && z.producerNode[t] !== e && Xt(z))) {
    let n = z.producerNode[t];
    jn(n, z.producerIndexOfThis[t]);
  }
  z.producerNode[t] !== e &&
    ((z.producerNode[t] = e),
    (z.producerIndexOfThis[t] = Xt(z) ? Ra(e, z, t) : 0)),
    (z.producerLastReadVersion[t] = e.version);
}
function Gf() {
  Pn++;
}
function Aa(e) {
  if (!(Xt(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === Pn)) {
    if (!e.producerMustRecompute(e) && !Oo(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = Pn);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = Pn);
  }
}
function Oa(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Rn;
  Rn = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || Wf(n);
  } finally {
    Rn = t;
  }
}
function Fa() {
  return z?.consumerAllowSignalWrites !== !1;
}
function Wf(e) {
  (e.dirty = !0), Oa(e), e.consumerMarkedDirty?.(e);
}
function Ln(e) {
  return e && (e.nextProducerIndex = 0), S(e);
}
function Ao(e, t) {
  if (
    (S(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (Xt(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        jn(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Oo(e) {
  Vn(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (Aa(n), r !== n.version)) return !0;
  }
  return !1;
}
function Fo(e) {
  if ((Vn(e), Xt(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      jn(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Ra(e, t, n) {
  if ((Pa(e), e.liveConsumerNode.length === 0 && ka(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Ra(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function jn(e, t) {
  if ((Pa(e), e.liveConsumerNode.length === 1 && ka(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      jn(e.producerNode[r], e.producerIndexOfThis[r]);
  let n = e.liveConsumerNode.length - 1;
  if (
    ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
    (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
    e.liveConsumerNode.length--,
    e.liveConsumerIndexOfThis.length--,
    t < e.liveConsumerNode.length)
  ) {
    let r = e.liveConsumerIndexOfThis[t],
      o = e.liveConsumerNode[t];
    Vn(o), (o.producerIndexOfThis[r] = t);
  }
}
function Xt(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function Vn(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function Pa(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function ka(e) {
  return e.producerNode !== void 0;
}
function La(e) {
  let t = Object.create(qf);
  t.computation = e;
  let n = () => {
    if ((Aa(t), No(t), t.value === kn)) throw t.error;
    return t.value;
  };
  return (n[ke] = t), n;
}
var xo = Symbol("UNSET"),
  To = Symbol("COMPUTING"),
  kn = Symbol("ERRORED"),
  qf = Pe(Re({}, en), {
    value: xo,
    dirty: !0,
    error: null,
    equal: Ta,
    producerMustRecompute(e) {
      return e.value === xo || e.value === To;
    },
    producerRecomputeValue(e) {
      if (e.value === To) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = To;
      let n = Ln(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = kn), (e.error = o);
      } finally {
        Ao(e, n);
      }
      if (t !== xo && t !== kn && r !== kn && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function Zf() {
  throw new Error();
}
var ja = Zf;
function Va() {
  ja();
}
function Ba(e) {
  ja = e;
}
var Yf = null;
function $a(e) {
  let t = Object.create(Ua);
  t.value = e;
  let n = () => (No(t), t.value);
  return (n[ke] = t), n;
}
function Ro(e, t) {
  Fa() || Va(), e.equal(e.value, t) || ((e.value = t), Qf(e));
}
function Ha(e, t) {
  Fa() || Va(), Ro(e, t(e.value));
}
var Ua = Pe(Re({}, en), { equal: Ta, value: void 0 });
function Qf(e) {
  e.version++, Gf(), Oa(e), Yf?.();
}
function y(e) {
  return typeof e == "function";
}
function Tt(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Bn = Tt(
  (e) =>
    function (n) {
      e(this),
        (this.message = n
          ? `${n.length} errors occurred during unsubscription:
${n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)}`
          : ""),
        (this.name = "UnsubscriptionError"),
        (this.errors = n);
    }
);
function it(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var $ = class e {
  constructor(t) {
    (this.initialTeardown = t),
      (this.closed = !1),
      (this._parentage = null),
      (this._finalizers = null);
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n)
        if (((this._parentage = null), Array.isArray(n)))
          for (let i of n) i.remove(this);
        else n.remove(this);
      let { initialTeardown: r } = this;
      if (y(r))
        try {
          r();
        } catch (i) {
          t = i instanceof Bn ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            za(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Bn ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Bn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) za(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers =
          (n = this._finalizers) !== null && n !== void 0 ? n : []).push(t);
      }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || (Array.isArray(n) && n.includes(t));
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? (this._parentage = null) : Array.isArray(n) && it(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && it(n, t), t instanceof e && t._removeParent(this);
  }
};
$.EMPTY = (() => {
  let e = new $();
  return (e.closed = !0), e;
})();
var Po = $.EMPTY;
function $n(e) {
  return (
    e instanceof $ ||
    (e && "closed" in e && y(e.remove) && y(e.add) && y(e.unsubscribe))
  );
}
function za(e) {
  y(e) ? e() : e.unsubscribe();
}
var ye = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var Nt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = Nt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = Nt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Hn(e) {
  Nt.setTimeout(() => {
    let { onUnhandledError: t } = ye;
    if (t) t(e);
    else throw e;
  });
}
function tn() {}
var Ga = ko("C", void 0, void 0);
function Wa(e) {
  return ko("E", void 0, e);
}
function qa(e) {
  return ko("N", e, void 0);
}
function ko(e, t, n) {
  return { kind: e, value: t, error: n };
}
var st = null;
function At(e) {
  if (ye.useDeprecatedSynchronousErrorHandling) {
    let t = !st;
    if ((t && (st = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = st;
      if (((st = null), n)) throw r;
    }
  } else e();
}
function Za(e) {
  ye.useDeprecatedSynchronousErrorHandling &&
    st &&
    ((st.errorThrown = !0), (st.error = e));
}
var at = class extends $ {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), $n(t) && t.add(this))
          : (this.destination = Xf);
    }
    static create(t, n, r) {
      return new Le(t, n, r);
    }
    next(t) {
      this.isStopped ? jo(qa(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? jo(Wa(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? jo(Ga, this) : ((this.isStopped = !0), this._complete());
    }
    unsubscribe() {
      this.closed ||
        ((this.isStopped = !0), super.unsubscribe(), (this.destination = null));
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  Kf = Function.prototype.bind;
function Lo(e, t) {
  return Kf.call(e, t);
}
var Vo = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Un(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Un(r);
        }
      else Un(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Un(n);
        }
    }
  },
  Le = class extends at {
    constructor(t, n, r) {
      super();
      let o;
      if (y(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && ye.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Lo(t.next, i),
              error: t.error && Lo(t.error, i),
              complete: t.complete && Lo(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new Vo(o);
    }
  };
function Un(e) {
  ye.useDeprecatedSynchronousErrorHandling ? Za(e) : Hn(e);
}
function Jf(e) {
  throw e;
}
function jo(e, t) {
  let { onStoppedNotification: n } = ye;
  n && Nt.setTimeout(() => n(e, t));
}
var Xf = { closed: !0, next: tn, error: Jf, complete: tn };
var Ot = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function Q(e) {
  return e;
}
function eh(...e) {
  return Bo(e);
}
function Bo(e) {
  return e.length === 0
    ? Q
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce((r, o) => o(r), n);
      };
}
var x = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = nh(n) ? n : new Le(n, r, o);
      return (
        At(() => {
          let { operator: s, source: a } = this;
          i.add(
            s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i)
          );
        }),
        i
      );
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return (
        (r = Ya(r)),
        new r((o, i) => {
          let s = new Le({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        })
      );
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [Ot]() {
      return this;
    }
    pipe(...n) {
      return Bo(n)(this);
    }
    toPromise(n) {
      return (
        (n = Ya(n)),
        new n((r, o) => {
          let i;
          this.subscribe(
            (s) => (i = s),
            (s) => o(s),
            () => r(i)
          );
        })
      );
    }
  }
  return (e.create = (t) => new e(t)), e;
})();
function Ya(e) {
  var t;
  return (t = e ?? ye.Promise) !== null && t !== void 0 ? t : Promise;
}
function th(e) {
  return e && y(e.next) && y(e.error) && y(e.complete);
}
function nh(e) {
  return (e && e instanceof at) || (th(e) && $n(e));
}
function $o(e) {
  return y(e?.lift);
}
function E(e) {
  return (t) => {
    if ($o(t))
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function w(e, t, n, r, o) {
  return new Ho(e, t, n, r, o);
}
var Ho = class extends at {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (u) {
              t.error(u);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (u) {
              t.error(u);
            } finally {
              this.unsubscribe();
            }
          }
        : super._error),
      (this._complete = r
        ? function () {
            try {
              r();
            } catch (a) {
              t.error(a);
            } finally {
              this.unsubscribe();
            }
          }
        : super._complete);
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Uo() {
  return E((e, t) => {
    let n = null;
    e._refCount++;
    let r = w(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection,
        i = n;
      (n = null), o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var zo = class extends x {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      $o(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (
      (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject
    );
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    (this._subject = this._connection = null), t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new $();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          w(
            n,
            void 0,
            () => {
              this._teardown(), n.complete();
            },
            (r) => {
              this._teardown(), n.error(r);
            },
            () => this._teardown()
          )
        )
      ),
        t.closed && ((this._connection = null), (t = $.EMPTY));
    }
    return t;
  }
  refCount() {
    return Uo()(this);
  }
};
var Qa = Tt(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    }
);
var xe = (() => {
    class e extends x {
      constructor() {
        super(),
          (this.closed = !1),
          (this.currentObservers = null),
          (this.observers = []),
          (this.isStopped = !1),
          (this.hasError = !1),
          (this.thrownError = null);
      }
      lift(n) {
        let r = new zn(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new Qa();
      }
      next(n) {
        At(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        At(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        At(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length; ) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        (this.isStopped = this.closed = !0),
          (this.observers = this.currentObservers = null);
      }
      get observed() {
        var n;
        return (
          ((n = this.observers) === null || n === void 0 ? void 0 : n.length) >
          0
        );
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return (
          this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n)
        );
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? Po
          : ((this.currentObservers = null),
            i.push(n),
            new $(() => {
              (this.currentObservers = null), it(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new x();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new zn(t, n)), e;
  })(),
  zn = class extends xe {
    constructor(t, n) {
      super(), (this.destination = t), (this.source = n);
    }
    next(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.next) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    error(t) {
      var n, r;
      (r =
        (n = this.destination) === null || n === void 0 ? void 0 : n.error) ===
        null ||
        r === void 0 ||
        r.call(n, t);
    }
    complete() {
      var t, n;
      (n =
        (t = this.destination) === null || t === void 0
          ? void 0
          : t.complete) === null ||
        n === void 0 ||
        n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r =
        (n = this.source) === null || n === void 0
          ? void 0
          : n.subscribe(t)) !== null && r !== void 0
        ? r
        : Po;
    }
  };
var nn = class extends xe {
  constructor(t) {
    super(), (this._value = t);
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next((this._value = t));
  }
};
var Go = {
  now() {
    return (Go.delegate || Date).now();
  },
  delegate: void 0,
};
var Gn = class extends $ {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var rn = {
  setInterval(e, t, ...n) {
    let { delegate: r } = rn;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = rn;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Wn = class extends Gn {
  constructor(t, n) {
    super(t, n), (this.scheduler = t), (this.work = n), (this.pending = !1);
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id,
      i = this.scheduler;
    return (
      o != null && (this.id = this.recycleAsyncId(i, o, n)),
      (this.pending = !0),
      (this.delay = n),
      (this.id =
        (r = this.id) !== null && r !== void 0
          ? r
          : this.requestAsyncId(i, this.id, n)),
      this
    );
  }
  requestAsyncId(t, n, r = 0) {
    return rn.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && rn.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 &&
      this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1,
      o;
    try {
      this.work(t);
    } catch (i) {
      (r = !0), (o = i || new Error("Scheduled action threw falsy error"));
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this,
        { actions: r } = n;
      (this.work = this.state = this.scheduler = null),
        (this.pending = !1),
        it(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var Ft = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
Ft.now = Go.now;
var qn = class extends Ft {
  constructor(t, n = Ft.now) {
    super(t, n), (this.actions = []), (this._active = !1);
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if ((r = t.execute(t.state, t.delay))) break;
    while ((t = n.shift()));
    if (((this._active = !1), r)) {
      for (; (t = n.shift()); ) t.unsubscribe();
      throw r;
    }
  }
};
var Ka = new qn(Wn);
var on = new x((e) => e.complete());
function Ja(e) {
  return e && y(e.schedule);
}
function Xa(e) {
  return e[e.length - 1];
}
function Zn(e) {
  return y(Xa(e)) ? e.pop() : void 0;
}
function qe(e) {
  return Ja(Xa(e)) ? e.pop() : void 0;
}
function tu(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function eu(e) {
  var t = typeof Symbol == "function" && Symbol.iterator,
    n = t && e[t],
    r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function () {
        return (
          e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
        );
      },
    };
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function ut(e) {
  return this instanceof ut ? ((this.v = e), this) : new ut(e);
}
function nu(e, t, n) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []),
    o,
    i = [];
  return (
    (o = Object.create(
      (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype
    )),
    a("next"),
    a("throw"),
    a("return", s),
    (o[Symbol.asyncIterator] = function () {
      return this;
    }),
    o
  );
  function s(f) {
    return function (p) {
      return Promise.resolve(p).then(f, d);
    };
  }
  function a(f, p) {
    r[f] &&
      ((o[f] = function (m) {
        return new Promise(function (O, M) {
          i.push([f, m, O, M]) > 1 || u(f, m);
        });
      }),
      p && (o[f] = p(o[f])));
  }
  function u(f, p) {
    try {
      c(r[f](p));
    } catch (m) {
      h(i[0][3], m);
    }
  }
  function c(f) {
    f.value instanceof ut
      ? Promise.resolve(f.value.v).then(l, d)
      : h(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function h(f, p) {
    f(p), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function ru(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof eu == "function" ? eu(e) : e[Symbol.iterator]()),
      (n = {}),
      r("next"),
      r("throw"),
      r("return"),
      (n[Symbol.asyncIterator] = function () {
        return this;
      }),
      n);
  function r(i) {
    n[i] =
      e[i] &&
      function (s) {
        return new Promise(function (a, u) {
          (s = e[i](s)), o(a, u, s.done, s.value);
        });
      };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var Yn = (e) => e && typeof e.length == "number" && typeof e != "function";
function Qn(e) {
  return y(e?.then);
}
function Kn(e) {
  return y(e[Ot]);
}
function Jn(e) {
  return Symbol.asyncIterator && y(e?.[Symbol.asyncIterator]);
}
function Xn(e) {
  return new TypeError(
    `You provided ${
      e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
function rh() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var er = rh();
function tr(e) {
  return y(e?.[er]);
}
function nr(e) {
  return nu(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield ut(n.read());
        if (o) return yield ut(void 0);
        yield yield ut(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function rr(e) {
  return y(e?.getReader);
}
function V(e) {
  if (e instanceof x) return e;
  if (e != null) {
    if (Kn(e)) return oh(e);
    if (Yn(e)) return ih(e);
    if (Qn(e)) return sh(e);
    if (Jn(e)) return ou(e);
    if (tr(e)) return ah(e);
    if (rr(e)) return uh(e);
  }
  throw Xn(e);
}
function oh(e) {
  return new x((t) => {
    let n = e[Ot]();
    if (y(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function ih(e) {
  return new x((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function sh(e) {
  return new x((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n)
    ).then(null, Hn);
  });
}
function ah(e) {
  return new x((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function ou(e) {
  return new x((t) => {
    ch(e, t).catch((n) => t.error(n));
  });
}
function uh(e) {
  return ou(nr(e));
}
function ch(e, t) {
  var n, r, o, i;
  return tu(this, void 0, void 0, function* () {
    try {
      for (n = ru(e); (r = yield n.next()), !r.done; ) {
        let s = r.value;
        if ((t.next(s), t.closed)) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function te(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function or(e, t = 0) {
  return E((n, r) => {
    n.subscribe(
      w(
        r,
        (o) => te(r, e, () => r.next(o), t),
        () => te(r, e, () => r.complete(), t),
        (o) => te(r, e, () => r.error(o), t)
      )
    );
  });
}
function ir(e, t = 0) {
  return E((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function iu(e, t) {
  return V(e).pipe(ir(t), or(t));
}
function su(e, t) {
  return V(e).pipe(ir(t), or(t));
}
function au(e, t) {
  return new x((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function uu(e, t) {
  return new x((n) => {
    let r;
    return (
      te(n, t, () => {
        (r = e[er]()),
          te(
            n,
            t,
            () => {
              let o, i;
              try {
                ({ value: o, done: i } = r.next());
              } catch (s) {
                n.error(s);
                return;
              }
              i ? n.complete() : n.next(o);
            },
            0,
            !0
          );
      }),
      () => y(r?.return) && r.return()
    );
  });
}
function sr(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new x((n) => {
    te(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      te(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0
      );
    });
  });
}
function cu(e, t) {
  return sr(nr(e), t);
}
function lu(e, t) {
  if (e != null) {
    if (Kn(e)) return iu(e, t);
    if (Yn(e)) return au(e, t);
    if (Qn(e)) return su(e, t);
    if (Jn(e)) return sr(e, t);
    if (tr(e)) return uu(e, t);
    if (rr(e)) return cu(e, t);
  }
  throw Xn(e);
}
function Ze(e, t) {
  return t ? lu(e, t) : V(e);
}
function lh(...e) {
  let t = qe(e);
  return Ze(e, t);
}
function dh(e, t) {
  let n = y(e) ? e : () => e,
    r = (o) => o.error(n());
  return new x(t ? (o) => t.schedule(r, 0, o) : r);
}
function fh(e) {
  return !!e && (e instanceof x || (y(e.lift) && y(e.subscribe)));
}
var ct = Tt(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    }
);
function je(e, t) {
  return E((n, r) => {
    let o = 0;
    n.subscribe(
      w(r, (i) => {
        r.next(e.call(t, i, o++));
      })
    );
  });
}
var { isArray: hh } = Array;
function ph(e, t) {
  return hh(t) ? e(...t) : e(t);
}
function ar(e) {
  return je((t) => ph(e, t));
}
var { isArray: gh } = Array,
  { getPrototypeOf: mh, prototype: yh, keys: Dh } = Object;
function ur(e) {
  if (e.length === 1) {
    let t = e[0];
    if (gh(t)) return { args: t, keys: null };
    if (vh(t)) {
      let n = Dh(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function vh(e) {
  return e && typeof e == "object" && mh(e) === yh;
}
function cr(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Ih(...e) {
  let t = qe(e),
    n = Zn(e),
    { args: r, keys: o } = ur(e);
  if (r.length === 0) return Ze([], t);
  let i = new x(Eh(r, t, o ? (s) => cr(o, s) : Q));
  return n ? i.pipe(ar(n)) : i;
}
function Eh(e, t, n = Q) {
  return (r) => {
    du(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let u = 0; u < o; u++)
          du(
            t,
            () => {
              let c = Ze(e[u], t),
                l = !1;
              c.subscribe(
                w(
                  r,
                  (d) => {
                    (i[u] = d), l || ((l = !0), a--), a || r.next(n(i.slice()));
                  },
                  () => {
                    --s || r.complete();
                  }
                )
              );
            },
            r
          );
      },
      r
    );
  };
}
function du(e, t, n) {
  e ? te(n, e, t) : t();
}
function fu(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    h = () => {
      d && !u.length && !c && t.complete();
    },
    f = (m) => (c < r ? p(m) : u.push(m)),
    p = (m) => {
      i && t.next(m), c++;
      let O = !1;
      V(n(m, l++)).subscribe(
        w(
          t,
          (M) => {
            o?.(M), i ? f(M) : t.next(M);
          },
          () => {
            O = !0;
          },
          void 0,
          () => {
            if (O)
              try {
                for (c--; u.length && c < r; ) {
                  let M = u.shift();
                  s ? te(t, s, () => p(M)) : p(M);
                }
                h();
              } catch (M) {
                t.error(M);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      w(t, f, () => {
        (d = !0), h();
      })
    ),
    () => {
      a?.();
    }
  );
}
function lt(e, t, n = 1 / 0) {
  return y(t)
    ? lt((r, o) => je((i, s) => t(r, i, o, s))(V(e(r, o))), n)
    : (typeof t == "number" && (n = t), E((r, o) => fu(r, o, e, n)));
}
function hu(e = 1 / 0) {
  return lt(Q, e);
}
function pu() {
  return hu(1);
}
function lr(...e) {
  return pu()(Ze(e, qe(e)));
}
function wh(e) {
  return new x((t) => {
    V(e()).subscribe(t);
  });
}
function Ch(...e) {
  let t = Zn(e),
    { args: n, keys: r } = ur(e),
    o = new x((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        u = s,
        c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        V(n[l]).subscribe(
          w(
            i,
            (h) => {
              d || ((d = !0), c--), (a[l] = h);
            },
            () => u--,
            void 0,
            () => {
              (!u || !d) && (c || i.next(r ? cr(r, a) : a), i.complete());
            }
          )
        );
      }
    });
  return t ? o.pipe(ar(t)) : o;
}
function dt(e, t) {
  return E((n, r) => {
    let o = 0;
    n.subscribe(w(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function gu(e) {
  return E((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      w(n, void 0, void 0, (s) => {
        (i = V(e(s, gu(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      })
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function mu(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      u = t,
      c = 0;
    i.subscribe(
      w(
        s,
        (l) => {
          let d = c++;
          (u = a ? e(u, l, d) : ((a = !0), l)), r && s.next(u);
        },
        o &&
          (() => {
            a && s.next(u), s.complete();
          })
      )
    );
  };
}
function bh(e, t) {
  return y(t) ? lt(e, t, 1) : lt(e, 1);
}
function _h(e, t = Ka) {
  return E((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let c = i;
          (i = null), r.next(c);
        }
      };
    function u() {
      let c = s + e,
        l = t.now();
      if (l < c) {
        (o = this.schedule(void 0, c - l)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      w(
        r,
        (c) => {
          (i = c), (s = t.now()), o || ((o = t.schedule(u, e)), r.add(o));
        },
        () => {
          a(), r.complete();
        },
        void 0,
        () => {
          i = o = null;
        }
      )
    );
  });
}
function sn(e) {
  return E((t, n) => {
    let r = !1;
    t.subscribe(
      w(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => {
          r || n.next(e), n.complete();
        }
      )
    );
  });
}
function Wo(e) {
  return e <= 0
    ? () => on
    : E((t, n) => {
        let r = 0;
        t.subscribe(
          w(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          })
        );
      });
}
function Mh(e) {
  return je(() => e);
}
function Sh(e, t = Q) {
  return (
    (e = e ?? xh),
    E((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        w(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        })
      );
    })
  );
}
function xh(e, t) {
  return e === t;
}
function dr(e = Th) {
  return E((t, n) => {
    let r = !1;
    t.subscribe(
      w(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e()))
      )
    );
  });
}
function Th() {
  return new ct();
}
function Nh(e) {
  return E((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function qo(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? dt((o, i) => e(o, i, r)) : Q,
      Wo(1),
      n ? sn(t) : dr(() => new ct())
    );
}
function Zo(e) {
  return e <= 0
    ? () => on
    : E((t, n) => {
        let r = [];
        t.subscribe(
          w(
            n,
            (o) => {
              r.push(o), e < r.length && r.shift();
            },
            () => {
              for (let o of r) n.next(o);
              n.complete();
            },
            void 0,
            () => {
              r = null;
            }
          )
        );
      });
}
function Ah(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? dt((o, i) => e(o, i, r)) : Q,
      Zo(1),
      n ? sn(t) : dr(() => new ct())
    );
}
function Oh(e, t) {
  return E(mu(e, t, arguments.length >= 2, !0));
}
function Fh(e = {}) {
  let {
    connector: t = () => new xe(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      h = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        h(), (s = u = void 0), (l = d = !1);
      },
      p = () => {
        let m = s;
        f(), m?.unsubscribe();
      };
    return E((m, O) => {
      c++, !d && !l && h();
      let M = (u = u ?? t());
      O.add(() => {
        c--, c === 0 && !d && !l && (a = Yo(p, o));
      }),
        M.subscribe(O),
        !s &&
          c > 0 &&
          ((s = new Le({
            next: (L) => M.next(L),
            error: (L) => {
              (d = !0), h(), (a = Yo(f, n, L)), M.error(L);
            },
            complete: () => {
              (l = !0), h(), (a = Yo(f, r)), M.complete();
            },
          })),
          V(m).subscribe(s));
    })(i);
  };
}
function Yo(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new Le({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return V(t(...n)).subscribe(r);
}
function Rh(e) {
  return dt((t, n) => e <= n);
}
function Ph(...e) {
  let t = qe(e);
  return E((n, r) => {
    (t ? lr(e, n, t) : lr(e, n)).subscribe(r);
  });
}
function kh(e, t) {
  return E((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      w(
        r,
        (u) => {
          o?.unsubscribe();
          let c = 0,
            l = i++;
          V(e(u, l)).subscribe(
            (o = w(
              r,
              (d) => r.next(t ? t(u, d, l, c++) : d),
              () => {
                (o = null), a();
              }
            ))
          );
        },
        () => {
          (s = !0), a();
        }
      )
    );
  });
}
function Lh(e) {
  return E((t, n) => {
    V(e).subscribe(w(n, () => n.complete(), tn)), !n.closed && t.subscribe(n);
  });
}
function jh(e, t, n) {
  let r = y(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? E((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          w(
            i,
            (u) => {
              var c;
              (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
            },
            () => {
              var u;
              (a = !1),
                (u = r.complete) === null || u === void 0 || u.call(r),
                i.complete();
            },
            (u) => {
              var c;
              (a = !1),
                (c = r.error) === null || c === void 0 || c.call(r, u),
                i.error(u);
            },
            () => {
              var u, c;
              a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
                (c = r.finalize) === null || c === void 0 || c.call(r);
            }
          )
        );
      })
    : Q;
}
var rc = "https://g.co/ng/security#xss",
  C = class extends Error {
    constructor(t, n) {
      super(oc(t, n)), (this.code = t);
    }
  };
function oc(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function En(e) {
  return { toString: e }.toString();
}
var fr = "__parameters__";
function Vh(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function ic(e, t, n) {
  return En(() => {
    let r = Vh(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(fr)
          ? u[fr]
          : Object.defineProperty(u, fr, { value: [] })[fr];
        for (; d.length <= l; ) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return (
      n && (o.prototype = Object.create(n.prototype)),
      (o.prototype.ngMetadataName = e),
      (o.annotationCls = o),
      o
    );
  });
}
var Rt = globalThis;
function F(e) {
  for (let t in e) if (e[t] === F) return t;
  throw Error("Could not find renamed property on target object.");
}
function Bh(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function X(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(X).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function fi(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
    ? e
    : e + " " + t;
}
var $h = F({ __forward_ref__: F });
function sc(e) {
  return (
    (e.__forward_ref__ = sc),
    (e.toString = function () {
      return X(this());
    }),
    e
  );
}
function K(e) {
  return ac(e) ? e() : e;
}
function ac(e) {
  return (
    typeof e == "function" && e.hasOwnProperty($h) && e.__forward_ref__ === sc
  );
}
function j(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function uc(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function eo(e) {
  return yu(e, cc) || yu(e, lc);
}
function H0(e) {
  return eo(e) !== null;
}
function yu(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Hh(e) {
  let t = e && (e[cc] || e[lc]);
  return t || null;
}
function Du(e) {
  return e && (e.hasOwnProperty(vu) || e.hasOwnProperty(Uh)) ? e[vu] : null;
}
var cc = F({ ɵprov: F }),
  vu = F({ ɵinj: F }),
  lc = F({ ngInjectableDef: F }),
  Uh = F({ ngInjectorDef: F }),
  T = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = j({
              token: this,
              providedIn: n.providedIn || "root",
              factory: n.factory,
            }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function dc(e) {
  return e && !!e.ɵproviders;
}
var zh = F({ ɵcmp: F }),
  Gh = F({ ɵdir: F }),
  Wh = F({ ɵpipe: F }),
  qh = F({ ɵmod: F }),
  Mr = F({ ɵfac: F }),
  cn = F({ __NG_ELEMENT_ID__: F }),
  Iu = F({ __NG_ENV_ID__: F });
function ln(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Zh(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
    ? e.type.name || e.type.toString()
    : ln(e);
}
function Yh(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new C(-200, e);
}
function _s(e, t) {
  throw new C(-201, !1);
}
var b = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(b || {}),
  hi;
function fc() {
  return hi;
}
function ne(e) {
  let t = hi;
  return (hi = e), t;
}
function hc(e, t, n) {
  let r = eo(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & b.Optional) return null;
  if (t !== void 0) return t;
  _s(e, "Injector");
}
var Qh = {},
  dn = Qh,
  pi = "__NG_DI_FLAG__",
  Sr = "ngTempTokenPath",
  Kh = "ngTokenPath",
  Jh = /\n/gm,
  Xh = "\u0275",
  Eu = "__source",
  Vt;
function ep() {
  return Vt;
}
function Ye(e) {
  let t = Vt;
  return (Vt = e), t;
}
function tp(e, t = b.Default) {
  if (Vt === void 0) throw new C(-203, !1);
  return Vt === null
    ? hc(e, void 0, t)
    : Vt.get(e, t & b.Optional ? null : void 0, t);
}
function ie(e, t = b.Default) {
  return (fc() || tp)(K(e), t);
}
function I(e, t = b.Default) {
  return ie(e, to(t));
}
function to(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function gi(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = K(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new C(900, !1);
      let o,
        i = b.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          u = np(a);
        typeof u == "number" ? (u === -1 ? (o = a.token) : (i |= u)) : (o = a);
      }
      t.push(ie(o, i));
    } else t.push(ie(r));
  }
  return t;
}
function pc(e, t) {
  return (e[pi] = t), (e.prototype[pi] = t), e;
}
function np(e) {
  return e[pi];
}
function rp(e, t, n, r) {
  let o = e[Sr];
  throw (
    (t[Eu] && o.unshift(t[Eu]),
    (e.message = op(
      `
` + e.message,
      o,
      n,
      r
    )),
    (e[Kh] = o),
    (e[Sr] = null),
    e)
  );
}
function op(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == Xh
      ? e.slice(2)
      : e;
  let o = X(t);
  if (Array.isArray(t)) o = t.map(X).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : X(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    Jh,
    `
  `
  )}`;
}
var gc = pc(ic("Optional"), 8);
var mc = pc(ic("SkipSelf"), 4);
function pt(e, t) {
  let n = e.hasOwnProperty(Mr);
  return n ? e[Mr] : null;
}
function ip(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function sp(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Ms(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Ms(n, t) : t(n)));
}
function yc(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function xr(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function ap(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function up(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), (e[0] = n);
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t; ) {
      let i = o - 2;
      (e[o] = e[i]), o--;
    }
    (e[t] = n), (e[t + 1] = r);
  }
}
function Ss(e, t, n) {
  let r = wn(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), up(e, r, t, n)), r;
}
function Qo(e, t) {
  let n = wn(e, t);
  if (n >= 0) return e[n | 1];
}
function wn(e, t) {
  return cp(e, t, 1);
}
function cp(e, t, n) {
  let r = 0,
    o = e.length >> n;
  for (; o !== r; ) {
    let i = r + ((o - r) >> 1),
      s = e[i << n];
    if (t === s) return i << n;
    s > t ? (o = i) : (r = i + 1);
  }
  return ~(o << n);
}
var $t = {},
  J = [],
  fn = new T(""),
  Dc = new T("", -1),
  vc = new T(""),
  Tr = class {
    get(t, n = dn) {
      if (n === dn) {
        let r = new Error(`NullInjectorError: No provider for ${X(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  Ic = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(Ic || {}),
  hn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(hn || {}),
  Ke = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Ke || {});
function lp(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
function mi(e, t, n) {
  let r = 0;
  for (; r < n.length; ) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++],
        s = n[r++],
        a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o,
        s = n[++r];
      dp(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function Ec(e) {
  return e === 3 || e === 4 || e === 6;
}
function dp(e) {
  return e.charCodeAt(0) === 64;
}
function pn(e, t) {
  if (!(t === null || t.length === 0))
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? (n = o)
          : n === 0 ||
            (n === -1 || n === 2
              ? wu(e, n, o, null, t[++r])
              : wu(e, n, o, null, null));
      }
    }
  return e;
}
function wu(e, t, n, r, o) {
  let i = 0,
    s = e.length;
  if (t === -1) s = -1;
  else
    for (; i < e.length; ) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }
  for (; i < e.length; ) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), (i = s + 1)),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var wc = "ng-template";
function fp(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && lp(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (xs(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function xs(e) {
  return e.type === 4 && e.value !== wc;
}
function hp(e, t, n) {
  let r = e.type === 4 && !n ? wc : e.value;
  return t === r;
}
function pp(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? yp(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !De(r) && !De(u)) return !1;
      if (s && De(u)) continue;
      (s = !1), (r = u | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (u !== "" && !hp(e, u, n)) || (u === "" && t.length === 1))
        ) {
          if (De(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !fp(e, o, u, n)) {
          if (De(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a],
          l = gp(u, o, xs(e), n);
        if (l === -1) {
          if (De(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (
            (l > i ? (d = "") : (d = o[l + 1].toLowerCase()), r & 2 && c !== d)
          ) {
            if (De(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return De(r) || s;
}
function De(e) {
  return (e & 1) === 0;
}
function gp(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length; ) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string"; ) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return Dp(t, e);
}
function Cc(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (pp(e, t[r], n)) return !0;
  return !1;
}
function mp(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function yp(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Ec(n)) return t;
  }
  return e.length;
}
function Dp(e, t) {
  let n = e.indexOf(4);
  if (n > -1)
    for (n++; n < e.length; ) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  return -1;
}
function vp(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function Cu(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Ip(e) {
  let t = e[0],
    n = 1,
    r = 2,
    o = "",
    i = !1;
  for (; n < e.length; ) {
    let s = e[n];
    if (typeof s == "string")
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? (o += "." + s) : r & 4 && (o += " " + s);
    else
      o !== "" && !De(s) && ((t += Cu(i, o)), (o = "")),
        (r = s),
        (i = i || !De(r));
    n++;
  }
  return o !== "" && (t += Cu(i, o)), t;
}
function Ep(e) {
  return e.map(Ip).join(",");
}
function wp(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!De(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function U0(e) {
  return En(() => {
    let t = xc(e),
      n = Pe(Re({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === Ic.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || hn.Emulated,
        styles: e.styles || J,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    Tc(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = _u(r, !1)), (n.pipeDefs = _u(r, !0)), (n.id = Mp(n)), n
    );
  });
}
function Cp(e) {
  return gt(e) || _c(e);
}
function bp(e) {
  return e !== null;
}
function bc(e) {
  return En(() => ({
    type: e.type,
    bootstrap: e.bootstrap || J,
    declarations: e.declarations || J,
    imports: e.imports || J,
    exports: e.exports || J,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function bu(e, t) {
  if (e == null) return $t;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Ke.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Ke.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function no(e) {
  return En(() => {
    let t = xc(e);
    return Tc(t), t;
  });
}
function Ts(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function gt(e) {
  return e[zh] || null;
}
function _c(e) {
  return e[Gh] || null;
}
function Mc(e) {
  return e[Wh] || null;
}
function _p(e) {
  let t = gt(e) || _c(e) || Mc(e);
  return t !== null ? t.standalone : !1;
}
function Sc(e, t) {
  let n = e[qh] || null;
  if (!n && t === !0)
    throw new Error(`Type ${X(e)} does not have '\u0275mod' property.`);
  return n;
}
function xc(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || $t,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || J,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: bu(e.inputs, t),
    outputs: bu(e.outputs),
    debugInfo: null,
  };
}
function Tc(e) {
  e.features?.forEach((t) => t(e));
}
function _u(e, t) {
  if (!e) return null;
  let n = t ? Mc : Cp;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(bp);
}
function Mp(e) {
  let t = 0,
    n = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      e.consts,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ].join("|");
  for (let o of n) t = (Math.imul(31, t) + o.charCodeAt(0)) << 0;
  return (t += 2147483648), "c" + t;
}
function Nc(e) {
  return { ɵproviders: e };
}
function Sp(...e) {
  return { ɵproviders: Ac(!0, e), ɵfromNgModule: !0 };
}
function Ac(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    Ms(t, (s) => {
      let a = s;
      yi(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && Oc(o, i),
    n
  );
}
function Oc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Ns(o, (i) => {
      t(i, r);
    });
  }
}
function yi(e, t, n, r) {
  if (((e = K(e)), !e)) return !1;
  let o = null,
    i = Du(e),
    s = !i && gt(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (((i = Du(u)), i)) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let u =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let c of u) yi(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        Ms(i.imports, (l) => {
          yi(l, t, n, r) && ((c ||= []), c.push(l));
        });
      } finally {
      }
      c !== void 0 && Oc(c, t);
    }
    if (!a) {
      let c = pt(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: J }, o),
        t({ provide: vc, useValue: o, multi: !0 }, o),
        t({ provide: fn, useValue: () => ie(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      Ns(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Ns(e, t) {
  for (let n of e)
    dc(n) && (n = n.ɵproviders), Array.isArray(n) ? Ns(n, t) : t(n);
}
var xp = F({ provide: String, useValue: F });
function Fc(e) {
  return e !== null && typeof e == "object" && xp in e;
}
function Tp(e) {
  return !!(e && e.useExisting);
}
function Np(e) {
  return !!(e && e.useFactory);
}
function Ht(e) {
  return typeof e == "function";
}
function Ap(e) {
  return !!e.useClass;
}
var Rc = new T(""),
  Ir = {},
  Op = {},
  Ko;
function As() {
  return Ko === void 0 && (Ko = new Tr()), Ko;
}
var Je = class {},
  gn = class extends Je {
    get destroyed() {
      return this._destroyed;
    }
    constructor(t, n, r, o) {
      super(),
        (this.parent = n),
        (this.source = r),
        (this.scopes = o),
        (this.records = new Map()),
        (this._ngOnDestroyHooks = new Set()),
        (this._onDestroyHooks = []),
        (this._destroyed = !1),
        vi(t, (s) => this.processProvider(s)),
        this.records.set(Dc, Pt(void 0, this)),
        o.has("environment") && this.records.set(Je, Pt(void 0, this));
      let i = this.records.get(Rc);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(vc, J, b.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = S(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          S(t);
      }
    }
    onDestroy(t) {
      return (
        this.assertNotDestroyed(),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t)
      );
    }
    runInContext(t) {
      this.assertNotDestroyed();
      let n = Ye(this),
        r = ne(void 0),
        o;
      try {
        return t();
      } finally {
        Ye(n), ne(r);
      }
    }
    get(t, n = dn, r = b.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(Iu))) return t[Iu](this);
      r = to(r);
      let o,
        i = Ye(this),
        s = ne(void 0);
      try {
        if (!(r & b.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = Lp(t) && eo(t);
            c && this.injectableDefInScope(c)
              ? (u = Pt(Di(t), Ir))
              : (u = null),
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & b.Self ? As() : this.parent;
        return (n = r & b.Optional && n === dn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[Sr] = a[Sr] || []).unshift(X(t)), i)) throw a;
          return rp(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        ne(s), Ye(i);
      }
    }
    resolveInjectorInitializers() {
      let t = S(null),
        n = Ye(this),
        r = ne(void 0),
        o;
      try {
        let i = this.get(fn, J, b.Self);
        for (let s of i) s();
      } finally {
        Ye(n), ne(r), S(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(X(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new C(205, !1);
    }
    processProvider(t) {
      t = K(t);
      let n = Ht(t) ? t : K(t && t.provide),
        r = Rp(t);
      if (!Ht(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = Pt(void 0, Ir, !0)),
          (o.factory = () => gi(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = S(null);
      try {
        return (
          n.value === Ir && ((n.value = Op), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            kp(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        S(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = K(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Di(e) {
  let t = eo(e),
    n = t !== null ? t.factory : pt(e);
  if (n !== null) return n;
  if (e instanceof T) throw new C(204, !1);
  if (e instanceof Function) return Fp(e);
  throw new C(204, !1);
}
function Fp(e) {
  if (e.length > 0) throw new C(204, !1);
  let n = Hh(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function Rp(e) {
  if (Fc(e)) return Pt(void 0, e.useValue);
  {
    let t = Pc(e);
    return Pt(t, Ir);
  }
}
function Pc(e, t, n) {
  let r;
  if (Ht(e)) {
    let o = K(e);
    return pt(o) || Di(o);
  } else if (Fc(e)) r = () => K(e.useValue);
  else if (Np(e)) r = () => e.useFactory(...gi(e.deps || []));
  else if (Tp(e)) r = () => ie(K(e.useExisting));
  else {
    let o = K(e && (e.useClass || e.provide));
    if (Pp(e)) r = () => new o(...gi(e.deps));
    else return pt(o) || Di(o);
  }
  return r;
}
function Pt(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function Pp(e) {
  return !!e.deps;
}
function kp(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function Lp(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof T);
}
function vi(e, t) {
  for (let n of e)
    Array.isArray(n) ? vi(n, t) : n && dc(n) ? vi(n.ɵproviders, t) : t(n);
}
function z0(e, t) {
  e instanceof gn && e.assertNotDestroyed();
  let n,
    r = Ye(e),
    o = ne(void 0);
  try {
    return t();
  } finally {
    Ye(r), ne(o);
  }
}
function kc() {
  return fc() !== void 0 || ep() != null;
}
function jp(e) {
  if (!kc()) throw new C(-203, !1);
}
function Vp(e) {
  return typeof e == "function";
}
var ce = 0,
  D = 1,
  g = 2,
  W = 3,
  Ee = 4,
  ae = 5,
  Ce = 6,
  Nr = 7,
  be = 8,
  Ut = 9,
  Ve = 10,
  R = 11,
  mn = 12,
  Mu = 13,
  Yt = 14,
  se = 15,
  mt = 16,
  kt = 17,
  Be = 18,
  ro = 19,
  Lc = 20,
  Qe = 21,
  Jo = 22,
  ge = 23,
  G = 25,
  jc = 1,
  yn = 6,
  $e = 7,
  Ar = 8,
  zt = 9,
  re = 10,
  Or = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(Or || {});
function we(e) {
  return Array.isArray(e) && typeof e[jc] == "object";
}
function Oe(e) {
  return Array.isArray(e) && e[jc] === !0;
}
function Vc(e) {
  return (e.flags & 4) !== 0;
}
function Cn(e) {
  return e.componentOffset > -1;
}
function Os(e) {
  return (e.flags & 1) === 1;
}
function Xe(e) {
  return !!e.template;
}
function Fr(e) {
  return (e[g] & 512) !== 0;
}
var Ii = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Bc(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function $c() {
  return Hc;
}
function Hc(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = $p), Bp;
}
$c.ngInherit = !0;
function Bp() {
  let e = zc(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === $t) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function $p(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = zc(e) || Hp(e, { previous: $t, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  (a[i] = new Ii(c && c.currentValue, n, u === $t)), Bc(e, t, o, n);
}
var Uc = "__ngSimpleChanges__";
function zc(e) {
  return e[Uc] || null;
}
function Hp(e, t) {
  return (e[Uc] = t);
}
var Su = null;
var Te = function (e, t, n) {
    Su?.(e, t, n);
  },
  Gc = "svg",
  Up = "math";
function _e(e) {
  for (; Array.isArray(e); ) e = e[ce];
  return e;
}
function Wc(e, t) {
  return _e(t[e]);
}
function le(e, t) {
  return _e(t[e.index]);
}
function qc(e, t) {
  return e.data[t];
}
function Zc(e, t) {
  return e[t];
}
function nt(e, t) {
  let n = t[e];
  return we(n) ? n : n[ce];
}
function zp(e) {
  return (e[g] & 4) === 4;
}
function Fs(e) {
  return (e[g] & 128) === 128;
}
function Gp(e) {
  return Oe(e[W]);
}
function Rr(e, t) {
  return t == null ? null : e[t];
}
function Yc(e) {
  e[kt] = 0;
}
function Qc(e) {
  e[g] & 1024 || ((e[g] |= 1024), Fs(e) && io(e));
}
function Wp(e, t) {
  for (; e > 0; ) (t = t[Yt]), e--;
  return t;
}
function oo(e) {
  return !!(e[g] & 9216 || e[ge]?.dirty);
}
function Ei(e) {
  e[Ve].changeDetectionScheduler?.notify(8),
    e[g] & 64 && (e[g] |= 1024),
    oo(e) && io(e);
}
function io(e) {
  e[Ve].changeDetectionScheduler?.notify(0);
  let t = yt(e);
  for (; t !== null && !(t[g] & 8192 || ((t[g] |= 8192), !Fs(t))); ) t = yt(t);
}
function Kc(e, t) {
  if ((e[g] & 256) === 256) throw new C(911, !1);
  e[Qe] === null && (e[Qe] = []), e[Qe].push(t);
}
function qp(e, t) {
  if (e[Qe] === null) return;
  let n = e[Qe].indexOf(t);
  n !== -1 && e[Qe].splice(n, 1);
}
function yt(e) {
  let t = e[W];
  return Oe(t) ? t[W] : t;
}
var v = { lFrame: ul(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Jc = !1;
function Zp() {
  return v.lFrame.elementDepthCount;
}
function Yp() {
  v.lFrame.elementDepthCount++;
}
function Qp() {
  v.lFrame.elementDepthCount--;
}
function Xc() {
  return v.bindingsEnabled;
}
function Qt() {
  return v.skipHydrationRootTNode !== null;
}
function Kp(e) {
  return v.skipHydrationRootTNode === e;
}
function Jp(e) {
  v.skipHydrationRootTNode = e;
}
function Xp() {
  v.skipHydrationRootTNode = null;
}
function _() {
  return v.lFrame.lView;
}
function H() {
  return v.lFrame.tView;
}
function G0(e) {
  return (v.lFrame.contextLView = e), e[be];
}
function W0(e) {
  return (v.lFrame.contextLView = null), e;
}
function Z() {
  let e = el();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function el() {
  return v.lFrame.currentTNode;
}
function eg() {
  let e = v.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function bn(e, t) {
  let n = v.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function tl() {
  return v.lFrame.isParent;
}
function nl() {
  v.lFrame.isParent = !1;
}
function tg() {
  return v.lFrame.contextLView;
}
function rl() {
  return Jc;
}
function xu(e) {
  Jc = e;
}
function ol() {
  let e = v.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function ng() {
  return v.lFrame.bindingIndex;
}
function rg(e) {
  return (v.lFrame.bindingIndex = e);
}
function _n() {
  return v.lFrame.bindingIndex++;
}
function Rs(e) {
  let t = v.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function og() {
  return v.lFrame.inI18n;
}
function ig(e, t) {
  let n = v.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), wi(t);
}
function sg() {
  return v.lFrame.currentDirectiveIndex;
}
function wi(e) {
  v.lFrame.currentDirectiveIndex = e;
}
function ag(e) {
  let t = v.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function il() {
  return v.lFrame.currentQueryIndex;
}
function Ps(e) {
  v.lFrame.currentQueryIndex = e;
}
function ug(e) {
  let t = e[D];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[ae] : null;
}
function sl(e, t, n) {
  if (n & b.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & b.Host); )
      if (((o = ug(i)), o === null || ((i = i[Yt]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (v.lFrame = al());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function ks(e) {
  let t = al(),
    n = e[D];
  (v.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function al() {
  let e = v.lFrame,
    t = e === null ? null : e.child;
  return t === null ? ul(e) : t;
}
function ul(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function cl() {
  let e = v.lFrame;
  return (v.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var ll = cl;
function Ls() {
  let e = cl();
  (e.isParent = !0),
    (e.tView = null),
    (e.selectedIndex = -1),
    (e.contextLView = null),
    (e.elementDepthCount = 0),
    (e.currentDirectiveIndex = -1),
    (e.currentNamespace = null),
    (e.bindingRootIndex = -1),
    (e.bindingIndex = -1),
    (e.currentQueryIndex = 0);
}
function cg(e) {
  return (v.lFrame.contextLView = Wp(e, v.lFrame.contextLView))[be];
}
function rt() {
  return v.lFrame.selectedIndex;
}
function Dt(e) {
  v.lFrame.selectedIndex = e;
}
function so() {
  let e = v.lFrame;
  return qc(e.tView, e.selectedIndex);
}
function q0() {
  v.lFrame.currentNamespace = Gc;
}
function Z0() {
  lg();
}
function lg() {
  v.lFrame.currentNamespace = null;
}
function dl() {
  return v.lFrame.currentNamespace;
}
var fl = !0;
function js() {
  return fl;
}
function ot(e) {
  fl = e;
}
function dg(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Hc(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function Vs(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
        ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function Er(e, t, n) {
  hl(e, t, 3, n);
}
function wr(e, t, n, r) {
  (e[g] & 3) === n && hl(e, t, n, r);
}
function Xo(e, t) {
  let n = e[g];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[g] = n));
}
function hl(e, t, n, r) {
  let o = r !== void 0 ? e[kt] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++)
    if (typeof t[u + 1] == "number") {
      if (((a = t[u]), r != null && a >= r)) break;
    } else
      t[u] < 0 && (e[kt] += 65536),
        (a < i || i == -1) &&
          (fg(e, n, t, u), (e[kt] = (e[kt] & 4294901760) + u + 2)),
        u++;
}
function Tu(e, t) {
  Te(4, e, t);
  let n = S(null);
  try {
    t.call(e);
  } finally {
    S(n), Te(5, e, t);
  }
}
function fg(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[g] >> 14 < e[kt] >> 16 &&
      (e[g] & 3) === t &&
      ((e[g] += 16384), Tu(a, i))
    : Tu(a, i);
}
var Bt = -1,
  vt = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function hg(e) {
  return e instanceof vt;
}
function pg(e) {
  return (e.flags & 8) !== 0;
}
function gg(e) {
  return (e.flags & 16) !== 0;
}
var ei = {},
  Ci = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = to(r);
      let o = this.injector.get(t, ei, r);
      return o !== ei || n === ei ? o : this.parentInjector.get(t, n, r);
    }
  };
function pl(e) {
  return e !== Bt;
}
function Pr(e) {
  return e & 32767;
}
function mg(e) {
  return e >> 16;
}
function kr(e, t) {
  let n = mg(e),
    r = t;
  for (; n > 0; ) (r = r[Yt]), n--;
  return r;
}
var bi = !0;
function Lr(e) {
  let t = bi;
  return (bi = e), t;
}
var yg = 256,
  gl = yg - 1,
  ml = 5,
  Dg = 0,
  Ne = {};
function vg(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(cn) && (r = n[cn]),
    r == null && (r = n[cn] = Dg++);
  let o = r & gl,
    i = 1 << o;
  t.data[e + (o >> ml)] |= i;
}
function jr(e, t) {
  let n = yl(e, t);
  if (n !== -1) return n;
  let r = t[D];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    ti(r.data, e),
    ti(t, null),
    ti(r.blueprint, null));
  let o = Bs(e, t),
    i = e.injectorIndex;
  if (pl(o)) {
    let s = Pr(o),
      a = kr(o, t),
      u = a[D].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return (t[i + 8] = o), i;
}
function ti(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function yl(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Bs(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = wl(o)), r === null)) return Bt;
    if ((n++, (o = o[Yt]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return Bt;
}
function _i(e, t, n) {
  vg(e, t, n);
}
function Ig(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (Ec(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number")
        for (o++; o < r && typeof n[o] == "string"; ) o++;
      else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function Dl(e, t, n) {
  if (n & b.Optional || e !== void 0) return e;
  _s(t, "NodeInjector");
}
function vl(e, t, n, r) {
  if (
    (n & b.Optional && r === void 0 && (r = null), !(n & (b.Self | b.Host)))
  ) {
    let o = e[Ut],
      i = ne(void 0);
    try {
      return o ? o.get(t, r, n & b.Optional) : hc(t, r, n & b.Optional);
    } finally {
      ne(i);
    }
  }
  return Dl(r, t, n);
}
function Il(e, t, n, r = b.Default, o) {
  if (e !== null) {
    if (t[g] & 2048 && !(r & b.Self)) {
      let s = bg(e, t, n, r, Ne);
      if (s !== Ne) return s;
    }
    let i = El(e, t, n, r, Ne);
    if (i !== Ne) return i;
  }
  return vl(t, n, r, o);
}
function El(e, t, n, r, o) {
  let i = wg(n);
  if (typeof i == "function") {
    if (!sl(t, e, r)) return r & b.Host ? Dl(o, n, r) : vl(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & b.Optional))) _s(n);
      else return s;
    } finally {
      ll();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = yl(e, t),
      u = Bt,
      c = r & b.Host ? t[se][ae] : null;
    for (
      (a === -1 || r & b.SkipSelf) &&
      ((u = a === -1 ? Bs(e, t) : t[a + 8]),
      u === Bt || !Au(r, !1)
        ? (a = -1)
        : ((s = t[D]), (a = Pr(u)), (t = kr(u, t))));
      a !== -1;

    ) {
      let l = t[D];
      if (Nu(i, a, l.data)) {
        let d = Eg(a, t, n, s, r, c);
        if (d !== Ne) return d;
      }
      (u = t[a + 8]),
        u !== Bt && Au(r, t[D].data[a + 8] === c) && Nu(i, a, t)
          ? ((s = l), (a = Pr(u)), (t = kr(u, t)))
          : (a = -1);
    }
  }
  return o;
}
function Eg(e, t, n, r, o, i) {
  let s = t[D],
    a = s.data[e + 8],
    u = r == null ? Cn(a) && bi : r != s && (a.type & 3) !== 0,
    c = o & b.Host && i === a,
    l = Cr(a, s, n, u, c);
  return l !== null ? It(t, s, l, a) : Ne;
}
function Cr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    h = o ? a + l : c;
  for (let f = d; f < h; f++) {
    let p = s[f];
    if ((f < u && n === p) || (f >= u && p.type === n)) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Xe(f) && f.type === n) return u;
  }
  return null;
}
function It(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (hg(o)) {
    let s = o;
    s.resolving && Yh(Zh(i[n]));
    let a = Lr(s.canSeeViewProviders);
    s.resolving = !0;
    let u,
      c = s.injectImpl ? ne(s.injectImpl) : null,
      l = sl(e, r, b.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && dg(n, i[n], t);
    } finally {
      c !== null && ne(c), Lr(a), (s.resolving = !1), ll();
    }
  }
  return o;
}
function wg(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(cn) ? e[cn] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & gl : Cg) : t;
}
function Nu(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> ml)] & r);
}
function Au(e, t) {
  return !(e & b.Self) && !(e & b.Host && t);
}
var ht = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return Il(this._tNode, this._lView, t, to(r), n);
  }
};
function Cg() {
  return new ht(Z(), _());
}
function Y0(e) {
  return En(() => {
    let t = e.prototype.constructor,
      n = t[Mr] || Mi(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[Mr] || Mi(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function Mi(e) {
  return ac(e)
    ? () => {
        let t = Mi(K(e));
        return t && t();
      }
    : pt(e);
}
function bg(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[g] & 2048 && !(s[g] & 512); ) {
    let a = El(i, s, n, r | b.Self, Ne);
    if (a !== Ne) return a;
    let u = i.parent;
    if (!u) {
      let c = s[Lc];
      if (c) {
        let l = c.get(n, Ne, r);
        if (l !== Ne) return l;
      }
      (u = wl(s)), (s = s[Yt]);
    }
    i = u;
  }
  return o;
}
function wl(e) {
  let t = e[D],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[ae] : null;
}
function _g(e) {
  return Ig(Z(), e);
}
function Ou(e, t = null, n = null, r) {
  let o = Cl(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function Cl(e, t = null, n = null, r, o = new Set()) {
  let i = [n || J, Sp(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : X(e))),
    new gn(i, t || As(), r || null, o)
  );
}
var et = class e {
  static {
    this.THROW_IF_NOT_FOUND = dn;
  }
  static {
    this.NULL = new Tr();
  }
  static create(t, n) {
    if (Array.isArray(t)) return Ou({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Ou({ name: r }, t.parent, t.providers, r);
    }
  }
  static {
    this.ɵprov = j({ token: e, providedIn: "any", factory: () => ie(Dc) });
  }
  static {
    this.__NG_ELEMENT_ID__ = -1;
  }
};
var Mg = new T("");
Mg.__NG_ELEMENT_ID__ = (e) => {
  let t = Z();
  if (t === null) throw new C(204, !1);
  if (t.type & 2) return t.value;
  if (e & b.Optional) return null;
  throw new C(204, !1);
};
var Sg = "ngOriginalError";
function ni(e) {
  return e[Sg];
}
var bl = !0,
  $s = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = xg;
      }
      static {
        this.__NG_ENV_ID__ = (n) => n;
      }
    }
    return e;
  })(),
  Si = class extends $s {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return Kc(this._lView, t), () => qp(this._lView, t);
    }
  };
function xg() {
  return new Si(_());
}
var ao = (() => {
  class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new nn(!1));
    }
    get _hasPendingTasks() {
      return this.hasPendingTasks.value;
    }
    add() {
      this._hasPendingTasks || this.hasPendingTasks.next(!0);
      let n = this.taskId++;
      return this.pendingTasks.add(n), n;
    }
    remove(n) {
      this.pendingTasks.delete(n),
        this.pendingTasks.size === 0 &&
          this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
    }
    ngOnDestroy() {
      this.pendingTasks.clear(),
        this._hasPendingTasks && this.hasPendingTasks.next(!1);
    }
    static {
      this.ɵprov = j({ token: e, providedIn: "root", factory: () => new e() });
    }
  }
  return e;
})();
var xi = class extends xe {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        kc() &&
          ((this.destroyRef = I($s, { optional: !0 }) ?? void 0),
          (this.pendingTasks = I(ao, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = S(null);
      try {
        super.next(t);
      } finally {
        S(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let u = t;
        (o = u.next?.bind(u)),
          (i = u.error?.bind(u)),
          (s = u.complete?.bind(u));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof $ && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  Ie = xi;
function Vr(...e) {}
function _l(e) {
  let t, n;
  function r() {
    e = Vr;
    try {
      n !== void 0 &&
        typeof cancelAnimationFrame == "function" &&
        cancelAnimationFrame(n),
        t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return (
    (t = setTimeout(() => {
      e(), r();
    })),
    typeof requestAnimationFrame == "function" &&
      (n = requestAnimationFrame(() => {
        e(), r();
      })),
    () => r()
  );
}
function Fu(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = Vr;
    }
  );
}
var Hs = "isAngularZone",
  Br = Hs + "_ID",
  Tg = 0,
  oe = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new Ie(!1)),
        (this.onMicrotaskEmpty = new Ie(!1)),
        (this.onStable = new Ie(!1)),
        (this.onError = new Ie(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = bl,
      } = t;
      if (typeof Zone > "u") throw new C(908, !1);
      Zone.assertZonePatched();
      let s = this;
      (s._nesting = 0),
        (s._outer = s._inner = Zone.current),
        Zone.TaskTrackingZoneSpec &&
          (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n &&
          Zone.longStackTraceZoneSpec &&
          (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        (s.shouldCoalesceEventChangeDetection = !o && r),
        (s.shouldCoalesceRunChangeDetection = o),
        (s.callbackScheduled = !1),
        (s.scheduleInRootZone = i),
        Og(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Hs) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new C(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new C(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, Ng, Vr, Vr);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  Ng = {};
function Us(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if ((e._nesting--, !e.hasPendingMicrotasks))
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
    }
}
function Ag(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    _l(() => {
      (e.callbackScheduled = !1),
        Ti(e),
        (e.isCheckStableRunning = !0),
        Us(e),
        (e.isCheckStableRunning = !1);
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
        t();
      })
    : e._outer.run(() => {
        t();
      }),
    Ti(e);
}
function Og(e) {
  let t = () => {
      Ag(e);
    },
    n = Tg++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Hs]: !0, [Br]: n, [Br + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (Fg(u)) return r.invokeTask(i, s, a, u);
      try {
        return Ru(e), r.invokeTask(i, s, a, u);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Pu(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return Ru(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !Rg(u) &&
          t(),
          Pu(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), Ti(e), Us(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function Ti(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Ru(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Pu(e) {
  e._nesting--, Us(e);
}
var Ni = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new Ie()),
      (this.onMicrotaskEmpty = new Ie()),
      (this.onStable = new Ie()),
      (this.onError = new Ie());
  }
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function Fg(e) {
  return Ml(e, "__ignore_ng_zone__");
}
function Rg(e) {
  return Ml(e, "__scheduler_tick__");
}
function Ml(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var Gt = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && ni(t);
      for (; n && ni(n); ) n = ni(n);
      return n || null;
    }
  },
  Pg = new T("", {
    providedIn: "root",
    factory: () => {
      let e = I(oe),
        t = I(Gt);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function kg() {
  return Kt(Z(), _());
}
function Kt(e, t) {
  return new _t(le(e, t));
}
var _t = (() => {
  class e {
    constructor(n) {
      this.nativeElement = n;
    }
    static {
      this.__NG_ELEMENT_ID__ = kg;
    }
  }
  return e;
})();
function Lg(e) {
  return e instanceof _t ? e.nativeElement : e;
}
function jg() {
  return this._results[Symbol.iterator]();
}
var Ai = class e {
    get changes() {
      return (this._changes ??= new Ie());
    }
    constructor(t = !1) {
      (this._emitDistinctChangesOnly = t),
        (this.dirty = !0),
        (this._onDirty = void 0),
        (this._results = []),
        (this._changesDetected = !1),
        (this._changes = void 0),
        (this.length = 0),
        (this.first = void 0),
        (this.last = void 0);
      let n = e.prototype;
      n[Symbol.iterator] || (n[Symbol.iterator] = jg);
    }
    get(t) {
      return this._results[t];
    }
    map(t) {
      return this._results.map(t);
    }
    filter(t) {
      return this._results.filter(t);
    }
    find(t) {
      return this._results.find(t);
    }
    reduce(t, n) {
      return this._results.reduce(t, n);
    }
    forEach(t) {
      this._results.forEach(t);
    }
    some(t) {
      return this._results.some(t);
    }
    toArray() {
      return this._results.slice();
    }
    toString() {
      return this._results.toString();
    }
    reset(t, n) {
      this.dirty = !1;
      let r = sp(t);
      (this._changesDetected = !ip(this._results, r, n)) &&
        ((this._results = r),
        (this.length = r.length),
        (this.last = r[this.length - 1]),
        (this.first = r[0]));
    }
    notifyOnChanges() {
      this._changes !== void 0 &&
        (this._changesDetected || !this._emitDistinctChangesOnly) &&
        this._changes.emit(this);
    }
    onDirty(t) {
      this._onDirty = t;
    }
    setDirty() {
      (this.dirty = !0), this._onDirty?.();
    }
    destroy() {
      this._changes !== void 0 &&
        (this._changes.complete(), this._changes.unsubscribe());
    }
  },
  Vg = "ngSkipHydration",
  Bg = "ngskiphydration";
function Sl(e) {
  let t = e.mergedAttrs;
  if (t === null) return !1;
  for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == "number") return !1;
    if (typeof r == "string" && r.toLowerCase() === Bg) return !0;
  }
  return !1;
}
function xl(e) {
  return e.hasAttribute(Vg);
}
function $r(e) {
  return (e.flags & 128) === 128;
}
function $g(e) {
  if ($r(e)) return !0;
  let t = e.parent;
  for (; t; ) {
    if ($r(e) || Sl(t)) return !0;
    t = t.parent;
  }
  return !1;
}
var Tl = new Map(),
  Hg = 0;
function Ug() {
  return Hg++;
}
function zg(e) {
  Tl.set(e[ro], e);
}
function Oi(e) {
  Tl.delete(e[ro]);
}
var ku = "__ngContext__";
function Et(e, t) {
  we(t) ? ((e[ku] = t[ro]), zg(t)) : (e[ku] = t);
}
function Nl(e) {
  return Ol(e[mn]);
}
function Al(e) {
  return Ol(e[Ee]);
}
function Ol(e) {
  for (; e !== null && !Oe(e); ) e = e[Ee];
  return e;
}
var Fi;
function Q0(e) {
  Fi = e;
}
function uo() {
  if (Fi !== void 0) return Fi;
  if (typeof document < "u") return document;
  throw new C(210, !1);
}
var Gg = new T("", { providedIn: "root", factory: () => Wg }),
  Wg = "ng",
  qg = new T(""),
  zs = new T("", { providedIn: "platform", factory: () => "unknown" });
var K0 = new T(""),
  J0 = new T("", {
    providedIn: "root",
    factory: () =>
      uo().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
function Zg() {
  let e = new Gs();
  return I(zs) === "browser" && (e.store = Yg(uo(), I(Gg))), e;
}
var Gs = (() => {
  class e {
    constructor() {
      (this.store = {}), (this.onSerializeCallbacks = {});
    }
    static {
      this.ɵprov = j({ token: e, providedIn: "root", factory: Zg });
    }
    get(n, r) {
      return this.store[n] !== void 0 ? this.store[n] : r;
    }
    set(n, r) {
      this.store[n] = r;
    }
    remove(n) {
      delete this.store[n];
    }
    hasKey(n) {
      return this.store.hasOwnProperty(n);
    }
    get isEmpty() {
      return Object.keys(this.store).length === 0;
    }
    onSerialize(n, r) {
      this.onSerializeCallbacks[n] = r;
    }
    toJson() {
      for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
          try {
            this.store[n] = this.onSerializeCallbacks[n]();
          } catch (r) {
            console.warn("Exception in onSerialize callback: ", r);
          }
      return JSON.stringify(this.store).replace(/</g, "\\u003C");
    }
  }
  return e;
})();
function Yg(e, t) {
  let n = e.getElementById(t + "-state");
  if (n?.textContent)
    try {
      return JSON.parse(n.textContent);
    } catch (r) {
      console.warn("Exception while restoring TransferState for app " + t, r);
    }
  return {};
}
var Fl = "h",
  Rl = "b",
  Ri = (function (e) {
    return (e.FirstChild = "f"), (e.NextSibling = "n"), e;
  })(Ri || {}),
  Qg = "e",
  Kg = "t",
  Ws = "c",
  Pl = "x",
  Hr = "r",
  Jg = "i",
  Xg = "n",
  kl = "d";
var em = "__nghData__",
  Ll = em,
  ri = "ngh",
  tm = "nghm",
  jl = () => null;
function nm(e, t, n = !1) {
  let r = e.getAttribute(ri);
  if (r == null) return null;
  let [o, i] = r.split("|");
  if (((r = n ? i : o), !r)) return null;
  let s = i ? `|${i}` : "",
    a = n ? o : s,
    u = {};
  if (r !== "") {
    let l = t.get(Gs, null, { optional: !0 });
    l !== null && (u = l.get(Ll, [])[Number(r)]);
  }
  let c = { data: u, firstChild: e.firstChild ?? null };
  return (
    n && ((c.firstChild = e), co(c, 0, e.nextSibling)),
    a ? e.setAttribute(ri, a) : e.removeAttribute(ri),
    c
  );
}
function rm() {
  jl = nm;
}
function qs(e, t, n = !1) {
  return jl(e, t, n);
}
function om(e) {
  let t = e._lView;
  return t[D].type === 2 ? null : (Fr(t) && (t = t[G]), t);
}
function im(e) {
  return e.textContent?.replace(/\s/gm, "");
}
function sm(e) {
  let t = uo(),
    n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
      acceptNode(i) {
        let s = im(i);
        return s === "ngetn" || s === "ngtns"
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    }),
    r,
    o = [];
  for (; (r = n.nextNode()); ) o.push(r);
  for (let i of o)
    i.textContent === "ngetn"
      ? i.replaceWith(t.createTextNode(""))
      : i.remove();
}
function co(e, t, n) {
  (e.segmentHeads ??= {}), (e.segmentHeads[t] = n);
}
function Pi(e, t) {
  return e.segmentHeads?.[t] ?? null;
}
function am(e, t) {
  let n = e.data,
    r = n[Qg]?.[t] ?? null;
  return r === null && n[Ws]?.[t] && (r = Zs(e, t)), r;
}
function Vl(e, t) {
  return e.data[Ws]?.[t] ?? null;
}
function Zs(e, t) {
  let n = Vl(e, t) ?? [],
    r = 0;
  for (let o of n) r += o[Hr] * (o[Pl] ?? 1);
  return r;
}
function um(e) {
  if (typeof e.disconnectedNodes > "u") {
    let t = e.data[kl];
    e.disconnectedNodes = t ? new Set(t) : null;
  }
  return e.disconnectedNodes;
}
function Mn(e, t) {
  if (typeof e.disconnectedNodes > "u") {
    let n = e.data[kl];
    e.disconnectedNodes = n ? new Set(n) : null;
  }
  return !!um(e)?.has(t);
}
var hr = new T(""),
  Bl = !1,
  $l = new T("", { providedIn: "root", factory: () => Bl });
var pr;
function cm() {
  if (pr === void 0 && ((pr = null), Rt.trustedTypes))
    try {
      pr = Rt.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return pr;
}
function lo(e) {
  return cm()?.createHTML(e) || e;
}
var He = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${rc})`;
    }
  },
  ki = class extends He {
    getTypeName() {
      return "HTML";
    }
  },
  Li = class extends He {
    getTypeName() {
      return "Style";
    }
  },
  ji = class extends He {
    getTypeName() {
      return "Script";
    }
  },
  Vi = class extends He {
    getTypeName() {
      return "URL";
    }
  },
  Bi = class extends He {
    getTypeName() {
      return "ResourceURL";
    }
  };
function Ys(e) {
  return e instanceof He ? e.changingThisBreaksApplicationSecurity : e;
}
function X0(e, t) {
  let n = lm(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${rc})`);
  }
  return n === t;
}
function lm(e) {
  return (e instanceof He && e.getTypeName()) || null;
}
function eS(e) {
  return new ki(e);
}
function tS(e) {
  return new Li(e);
}
function nS(e) {
  return new ji(e);
}
function rS(e) {
  return new Vi(e);
}
function oS(e) {
  return new Bi(e);
}
function dm(e) {
  let t = new Hi(e);
  return fm() ? new $i(t) : t;
}
var $i = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(lo(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  Hi = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert"
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = lo(t)), n;
    }
  };
function fm() {
  try {
    return !!new window.DOMParser().parseFromString(lo(""), "text/html");
  } catch {
    return !1;
  }
}
var hm = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function pm(e) {
  return (e = String(e)), e.match(hm) ? e : "unsafe:" + e;
}
function Ue(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function Sn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Hl = Ue("area,br,col,hr,img,wbr"),
  Ul = Ue("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  zl = Ue("rp,rt"),
  gm = Sn(zl, Ul),
  mm = Sn(
    Ul,
    Ue(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
    )
  ),
  ym = Sn(
    zl,
    Ue(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
    )
  ),
  Lu = Sn(Hl, mm, ym, gm),
  Gl = Ue("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Dm = Ue(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
  ),
  vm = Ue(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
  ),
  Im = Sn(Gl, Dm, vm),
  Em = Ue("script,style,template"),
  Ui = class {
    constructor() {
      (this.sanitizedSomething = !1), (this.buf = []);
    }
    sanitizeChildren(t) {
      let n = t.firstChild,
        r = !0,
        o = [];
      for (; n; ) {
        if (
          (n.nodeType === Node.ELEMENT_NODE
            ? (r = this.startElement(n))
            : n.nodeType === Node.TEXT_NODE
            ? this.chars(n.nodeValue)
            : (this.sanitizedSomething = !0),
          r && n.firstChild)
        ) {
          o.push(n), (n = bm(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = Cm(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = ju(t).toLowerCase();
      if (!Lu.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !Em.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Im.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        Gl[a] && (u = pm(u)), this.buf.push(" ", s, '="', Vu(u), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = ju(t).toLowerCase();
      Lu.hasOwnProperty(n) &&
        !Hl.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(Vu(t));
    }
  };
function wm(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function Cm(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw Wl(t);
  return t;
}
function bm(e) {
  let t = e.firstChild;
  if (t && wm(e, t)) throw Wl(t);
  return t;
}
function ju(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function Wl(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`
  );
}
var _m = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Mm = /([^\#-~ |!])/g;
function Vu(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(_m, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(Mm, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var gr;
function iS(e, t) {
  let n = null;
  try {
    gr = gr || dm(e);
    let r = t ? String(t) : "";
    n = gr.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable"
        );
      o--, (r = i), (i = n.innerHTML), (n = gr.getInertBodyElement(r));
    } while (r !== i);
    let a = new Ui().sanitizeChildren(Bu(n) || n);
    return lo(a);
  } finally {
    if (n) {
      let r = Bu(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function Bu(e) {
  return "content" in e && Sm(e) ? e.content : null;
}
function Sm(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var xm = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(xm || {});
var Tm = /^>|^->|<!--|-->|--!>|<!-$/g,
  Nm = /(<|>)/g,
  Am = "\u200B$1\u200B";
function Om(e) {
  return e.replace(Tm, (t) => t.replace(Nm, Am));
}
function sS(e) {
  return e.ownerDocument.defaultView;
}
function Fm(e) {
  return e.ownerDocument.body;
}
function ql(e) {
  return e instanceof Function ? e() : e;
}
function an(e) {
  return (e ?? I(et)).get(zs) === "browser";
}
var Dn = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(Dn || {}),
  Rm;
function Qs(e, t) {
  return Rm(e, t);
}
function Lt(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    Oe(r) ? (i = r) : we(r) && ((s = !0), (r = r[ce]));
    let a = _e(r);
    e === 0 && n !== null
      ? o == null
        ? ed(t, n, a)
        : Ur(t, n, a, o || null, !0)
      : e === 1 && n !== null
      ? Ur(t, n, a, o || null, !0)
      : e === 2
      ? ea(t, a, s)
      : e === 3 && t.destroyNode(a),
      i != null && qm(t, e, i, n, o);
  }
}
function Zl(e, t) {
  return e.createText(t);
}
function Pm(e, t, n) {
  e.setValue(t, n);
}
function Yl(e, t) {
  return e.createComment(Om(t));
}
function Ks(e, t, n) {
  return e.createElement(t, n);
}
function km(e, t) {
  Ql(e, t), (t[ce] = null), (t[ae] = null);
}
function Lm(e, t, n, r, o, i) {
  (r[ce] = o), (r[ae] = t), fo(e, r, n, 1, o, i);
}
function Ql(e, t) {
  t[Ve].changeDetectionScheduler?.notify(9), fo(e, t, t[R], 2, null, null);
}
function jm(e) {
  let t = e[mn];
  if (!t) return oi(e[D], e);
  for (; t; ) {
    let n = null;
    if (we(t)) n = t[mn];
    else {
      let r = t[re];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[Ee] && t !== e; ) we(t) && oi(t[D], t), (t = t[W]);
      t === null && (t = e), we(t) && oi(t[D], t), (n = t && t[Ee]);
    }
    t = n;
  }
}
function Vm(e, t, n, r) {
  let o = re + r,
    i = n.length;
  r > 0 && (n[o - 1][Ee] = t),
    r < i - re
      ? ((t[Ee] = n[o]), yc(n, re + r, t))
      : (n.push(t), (t[Ee] = null)),
    (t[W] = n);
  let s = t[mt];
  s !== null && n !== s && Kl(s, t);
  let a = t[Be];
  a !== null && a.insertView(e), Ei(t), (t[g] |= 128);
}
function Kl(e, t) {
  let n = e[zt],
    r = t[W];
  if (we(r)) e[g] |= Or.HasTransplantedViews;
  else {
    let o = r[W][se];
    t[se] !== o && (e[g] |= Or.HasTransplantedViews);
  }
  n === null ? (e[zt] = [t]) : n.push(t);
}
function Js(e, t) {
  let n = e[zt],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function zi(e, t) {
  if (e.length <= re) return;
  let n = re + t,
    r = e[n];
  if (r) {
    let o = r[mt];
    o !== null && o !== e && Js(o, r), t > 0 && (e[n - 1][Ee] = r[Ee]);
    let i = xr(e, re + t);
    km(r[D], r);
    let s = i[Be];
    s !== null && s.detachView(i[D]),
      (r[W] = null),
      (r[Ee] = null),
      (r[g] &= -129);
  }
  return r;
}
function Jl(e, t) {
  if (!(t[g] & 256)) {
    let n = t[R];
    n.destroyNode && fo(e, t, n, 3, null, null), jm(t);
  }
}
function oi(e, t) {
  if (t[g] & 256) return;
  let n = S(null);
  try {
    (t[g] &= -129),
      (t[g] |= 256),
      t[ge] && Fo(t[ge]),
      $m(e, t),
      Bm(e, t),
      t[D].type === 1 && t[R].destroy();
    let r = t[mt];
    if (r !== null && Oe(t[W])) {
      r !== t[W] && Js(r, t);
      let o = t[Be];
      o !== null && o.detachView(e);
    }
    Oi(t);
  } finally {
    S(n);
  }
}
function Bm(e, t) {
  let n = e.cleanup,
    r = t[Nr];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[Nr] = null);
  let o = t[Qe];
  if (o !== null) {
    t[Qe] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function $m(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof vt)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              u = i[s + 1];
            Te(4, a, u);
            try {
              u.call(a);
            } finally {
              Te(5, a, u);
            }
          }
        else {
          Te(4, o, i);
          try {
            i.call(o);
          } finally {
            Te(5, o, i);
          }
        }
      }
    }
}
function Xl(e, t, n) {
  return Hm(e, t.parent, n);
}
function Hm(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[ce];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === hn.None || i === hn.Emulated) return null;
    }
    return le(r, n);
  }
}
function Ur(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function ed(e, t, n) {
  e.appendChild(t, n);
}
function $u(e, t, n, r, o) {
  r !== null ? Ur(e, t, n, r, o) : ed(e, t, n);
}
function td(e, t) {
  return e.parentNode(t);
}
function Um(e, t) {
  return e.nextSibling(t);
}
function nd(e, t, n) {
  return Gm(e, t, n);
}
function zm(e, t, n) {
  return e.type & 40 ? le(e, n) : null;
}
var Gm = zm,
  Hu;
function Xs(e, t, n, r) {
  let o = Xl(e, r, t),
    i = t[R],
    s = r.parent || t[ae],
    a = nd(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let u = 0; u < n.length; u++) $u(i, o, n[u], a, !1);
    else $u(i, o, n, a, !1);
  Hu !== void 0 && Hu(i, r, t, n, o);
}
function un(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return le(t, e);
    if (n & 4) return Gi(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return un(e, r);
      {
        let o = e[t.index];
        return Oe(o) ? Gi(-1, o) : _e(o);
      }
    } else {
      if (n & 128) return un(e, t.next);
      if (n & 32) return Qs(t, e)() || _e(e[t.index]);
      {
        let r = rd(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = yt(e[se]);
          return un(o, r);
        } else return un(e, t.next);
      }
    }
  }
  return null;
}
function rd(e, t) {
  if (t !== null) {
    let r = e[se][ae],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Gi(e, t) {
  let n = re + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[D].firstChild;
    if (o !== null) return un(r, o);
  }
  return t[$e];
}
function ea(e, t, n) {
  e.removeChild(null, t, n);
}
function od(e) {
  e.textContent = "";
}
function ta(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      u = n.type;
    if (
      (s && t === 0 && (a && Et(_e(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (u & 8) ta(e, t, n.child, r, o, i, !1), Lt(t, e, o, a, i);
      else if (u & 32) {
        let c = Qs(n, r),
          l;
        for (; (l = c()); ) Lt(t, e, o, l, i);
        Lt(t, e, o, a, i);
      } else u & 16 ? id(e, t, r, n, o, i) : Lt(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function fo(e, t, n, r, o, i) {
  ta(n, r, e.firstChild, t, o, i, !1);
}
function Wm(e, t, n) {
  let r = t[R],
    o = Xl(e, n, t),
    i = n.parent || t[ae],
    s = nd(i, n, t);
  id(r, 0, t, n, o, s);
}
function id(e, t, n, r, o, i) {
  let s = n[se],
    u = s[ae].projection[r.projection];
  if (Array.isArray(u))
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      Lt(t, e, o, l, i);
    }
  else {
    let c = u,
      l = s[W];
    $r(r) && (c.flags |= 128), ta(e, t, c, l, o, i, !0);
  }
}
function qm(e, t, n, r, o) {
  let i = n[$e],
    s = _e(n);
  i !== s && Lt(t, e, r, i, o);
  for (let a = re; a < n.length; a++) {
    let u = n[a];
    fo(u[D], u, e, t, r, i);
  }
}
function Zm(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Dn.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Dn.Important)),
        e.setStyle(n, r, o, i));
  }
}
function Ym(e, t, n) {
  e.setAttribute(t, "style", n);
}
function sd(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function ad(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && mi(e, t, r),
    o !== null && sd(e, t, o),
    i !== null && Ym(e, t, i);
}
var Me = {};
function aS(e = 1) {
  ud(H(), _(), rt() + e, !1);
}
function ud(e, t, n, r) {
  if (!r)
    if ((t[g] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && Er(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && wr(t, i, 0, n);
    }
  Dt(n);
}
function q(e, t = b.Default) {
  let n = _();
  if (n === null) return ie(e, t);
  let r = Z();
  return Il(r, n, K(e), t);
}
function uS() {
  let e = "invalid";
  throw new Error(e);
}
function cd(e, t, n, r, o, i) {
  let s = S(null);
  try {
    let a = null;
    o & Ke.SignalBased && (a = t[r][ke]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Ke.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : Bc(t, a, r, i);
  } finally {
    S(s);
  }
}
function Qm(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) Dt(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          ig(s, i);
          let u = t[i];
          a(2, u);
        }
      }
    } finally {
      Dt(-1);
    }
}
function ho(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return (
    (d[ce] = o),
    (d[g] = r | 4 | 128 | 8 | 64),
    (c !== null || (e && e[g] & 2048)) && (d[g] |= 2048),
    Yc(d),
    (d[W] = d[Yt] = e),
    (d[be] = n),
    (d[Ve] = s || (e && e[Ve])),
    (d[R] = a || (e && e[R])),
    (d[Ut] = u || (e && e[Ut]) || null),
    (d[ae] = i),
    (d[ro] = Ug()),
    (d[Ce] = l),
    (d[Lc] = c),
    (d[se] = t.type == 2 ? e[se] : d),
    d
  );
}
function xn(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = Km(e, t, n, r, o)), og() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = eg();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return bn(i, !0), i;
}
function Km(e, t, n, r, o) {
  let i = el(),
    s = tl(),
    a = s ? i : i && i.parent,
    u = (e.data[t] = oy(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = u),
    i !== null &&
      (s
        ? i.child == null && u.parent !== null && (i.child = u)
        : i.next === null && ((i.next = u), (u.prev = i))),
    u
  );
}
function ld(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function dd(e, t, n, r, o) {
  let i = rt(),
    s = r & 2;
  try {
    Dt(-1), s && t.length > G && ud(e, t, G, !1), Te(s ? 2 : 0, o), n(r, o);
  } finally {
    Dt(i), Te(s ? 3 : 1, o);
  }
}
function fd(e, t, n) {
  if (Vc(t)) {
    let r = S(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      S(r);
    }
  }
}
function hd(e, t, n) {
  Xc() && (ly(e, t, n, le(n, t)), (n.flags & 64) === 64 && vd(e, t, n));
}
function pd(e, t, n = le) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1],
        a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function gd(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = na(
        1,
        null,
        e.template,
        e.decls,
        e.vars,
        e.directiveDefs,
        e.pipeDefs,
        e.viewQuery,
        e.schemas,
        e.consts,
        e.id
      ))
    : t;
}
function na(e, t, n, r, o, i, s, a, u, c, l) {
  let d = G + r,
    h = d + o,
    f = Jm(d, h),
    p = typeof c == "function" ? c() : c;
  return (f[D] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: h,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: l,
  });
}
function Jm(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Me);
  return n;
}
function Xm(e, t, n, r) {
  let i = r.get($l, Bl) || n === hn.ShadowDom,
    s = e.selectRootElement(t, i);
  return ey(s), s;
}
function ey(e) {
  md(e);
}
var md = () => null;
function ty(e) {
  xl(e) ? od(e) : sm(e);
}
function ny() {
  md = ty;
}
function ry(e, t, n, r) {
  let o = wd(t);
  o.push(n), e.firstCreatePass && Cd(e).push(r, o.length - 1);
}
function oy(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Qt() && (a |= 128),
    {
      type: n,
      index: r,
      insertBeforeIndex: null,
      injectorIndex: s,
      directiveStart: -1,
      directiveEnd: -1,
      directiveStylingLast: -1,
      componentOffset: -1,
      propertyBindings: null,
      flags: a,
      providerIndexes: 0,
      value: o,
      attrs: i,
      mergedAttrs: null,
      localNames: null,
      initialInputs: void 0,
      inputs: null,
      outputs: null,
      tView: null,
      next: null,
      prev: null,
      projectionNext: null,
      child: null,
      parent: t,
      projection: null,
      styles: null,
      stylesWithoutHost: null,
      residualStyles: void 0,
      classes: null,
      classesWithoutHost: null,
      residualClasses: void 0,
      classBindings: 0,
      styleBindings: 0,
    }
  );
}
function Uu(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      u = Ke.None;
    Array.isArray(s) ? ((a = s[0]), (u = s[1])) : (a = s);
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? zu(r, n, c, a, u) : zu(r, n, c, a);
  }
  return r;
}
function zu(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function iy(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      h = n ? n.get(d) : null,
      f = h ? h.inputs : null,
      p = h ? h.outputs : null;
    (u = Uu(0, d.inputs, l, u, f)), (c = Uu(1, d.outputs, l, c, p));
    let m = u !== null && s !== null && !xs(t) ? Ey(u, l, s) : null;
    a.push(m);
  }
  u !== null &&
    (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = u),
    (t.outputs = c);
}
function sy(e) {
  return e === "class"
    ? "className"
    : e === "for"
    ? "htmlFor"
    : e === "formaction"
    ? "formAction"
    : e === "innerHtml"
    ? "innerHTML"
    : e === "readonly"
    ? "readOnly"
    : e === "tabindex"
    ? "tabIndex"
    : e;
}
function ra(e, t, n, r, o, i, s, a) {
  let u = le(t, n),
    c = t.inputs,
    l;
  !a && c != null && (l = c[r])
    ? (oa(e, n, l, r, o), Cn(t) && ay(n, t.index))
    : t.type & 3
    ? ((r = sy(r)),
      (o = s != null ? s(o, t.value || "", r) : o),
      i.setProperty(u, r, o))
    : t.type & 12;
}
function ay(e, t) {
  let n = nt(t, e);
  n[g] & 16 || (n[g] |= 64);
}
function yd(e, t, n, r) {
  if (Xc()) {
    let o = r === null ? null : { "": -1 },
      i = fy(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && Dd(e, t, n, s, o, a),
      o && hy(n, r, o);
  }
  n.mergedAttrs = pn(n.mergedAttrs, n.attrs);
}
function Dd(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) _i(jr(n, t), e, r[c].type);
  gy(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1,
    a = !1,
    u = ld(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    (n.mergedAttrs = pn(n.mergedAttrs, l.hostAttrs)),
      my(e, n, t, u, l),
      py(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
        (n.flags |= 64);
    let d = l.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      u++;
  }
  iy(e, n, i);
}
function uy(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    cy(s) != a && s.push(a), s.push(n, r, i);
  }
}
function cy(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function ly(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  Cn(n) && yy(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || jr(n, t),
    Et(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a],
      c = It(t, e, a, n);
    if ((Et(c, t), s !== null && Iy(t, a - o, c, u, n, s), Xe(u))) {
      let l = nt(n.index, t);
      l[be] = It(t, e, a, n);
    }
  }
}
function vd(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = sg();
  try {
    Dt(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a],
        c = t[a];
      wi(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
          dy(u, c);
    }
  } finally {
    Dt(-1), wi(s);
  }
}
function dy(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function fy(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (Cc(t, s.selectors, !1))
        if ((r || (r = []), Xe(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Wi(e, t, u);
          } else r.unshift(s), Wi(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Wi(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function hy(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new C(-301, !1);
      r.push(t[o], i);
    }
  }
}
function py(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    Xe(t) && (n[""] = e);
  }
}
function gy(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function my(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = pt(o.type, !0)),
    s = new vt(i, Xe(o), q);
  (e.blueprint[r] = s), (n[r] = s), uy(e, t, r, ld(e, n, o.hostVars, Me), o);
}
function yy(e, t, n) {
  let r = le(t, e),
    o = gd(n),
    i = e[Ve].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = po(
    e,
    ho(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null)
  );
  e[t.index] = a;
}
function Dy(e, t, n, r, o, i) {
  let s = le(e, t);
  vy(t[R], s, i, e.value, n, r, o);
}
function vy(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? ln(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function Iy(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let u = s[a++],
        c = s[a++],
        l = s[a++],
        d = s[a++];
      cd(r, n, u, c, l, d);
    }
}
function Ey(e, t, n) {
  let r = null,
    o = 0;
  for (; o < n.length; ) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3)
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
    }
    o += 2;
  }
  return r;
}
function Id(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function Ed(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = S(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Ps(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      S(r);
    }
  }
}
function po(e, t) {
  return e[mn] ? (e[Mu][Ee] = t) : (e[mn] = t), (e[Mu] = t), t;
}
function qi(e, t, n) {
  Ps(0);
  let r = S(null);
  try {
    t(e, n);
  } finally {
    S(r);
  }
}
function wd(e) {
  return (e[Nr] ??= []);
}
function Cd(e) {
  return (e.cleanup ??= []);
}
function bd(e, t) {
  let n = e[Ut],
    r = n ? n.get(Gt, null) : null;
  r && r.handleError(t);
}
function oa(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      u = n[i++],
      c = t[s],
      l = e.data[s];
    cd(l, c, r, a, u, o);
  }
}
function _d(e, t, n) {
  let r = Wc(t, e);
  Pm(e[R], r, n);
}
function wy(e, t) {
  let n = nt(t, e),
    r = n[D];
  Cy(r, n);
  let o = n[ce];
  o !== null && n[Ce] === null && (n[Ce] = qs(o, n[Ut])), ia(r, n, n[be]);
}
function Cy(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function ia(e, t, n) {
  ks(t);
  try {
    let r = e.viewQuery;
    r !== null && qi(1, r, n);
    let o = e.template;
    o !== null && dd(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[Be]?.finishViewCreation(e),
      e.staticContentQueries && Ed(e, t),
      e.staticViewQueries && qi(2, e.viewQuery, n);
    let i = e.components;
    i !== null && by(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[g] &= -5), Ls();
  }
}
function by(e, t) {
  for (let n = 0; n < t.length; n++) wy(e, t[n]);
}
function Md(e, t, n, r) {
  let o = S(null);
  try {
    let i = t.tView,
      a = e[g] & 4096 ? 4096 : 16,
      u = ho(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null
      ),
      c = e[t.index];
    u[mt] = c;
    let l = e[Be];
    return l !== null && (u[Be] = l.createEmbeddedView(i)), ia(i, u, n), u;
  } finally {
    S(o);
  }
}
function Zi(e, t) {
  return !t || t.firstChild === null || $r(e);
}
function Sd(e, t, n, r = !0) {
  let o = t[D];
  if ((Vm(o, t, e, n), r)) {
    let s = Gi(n, e),
      a = t[R],
      u = td(a, e[$e]);
    u !== null && Lm(o, e[ae], a, t, u, s);
  }
  let i = t[Ce];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function zr(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(_e(i)), Oe(i) && _y(i, r);
    let s = n.type;
    if (s & 8) zr(e, t, n.child, r);
    else if (s & 32) {
      let a = Qs(n, t),
        u;
      for (; (u = a()); ) r.push(u);
    } else if (s & 16) {
      let a = rd(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = yt(t[se]);
        zr(u[D], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function _y(e, t) {
  for (let n = re; n < e.length; n++) {
    let r = e[n],
      o = r[D].firstChild;
    o !== null && zr(r[D], r, o, t);
  }
  e[$e] !== e[ce] && t.push(e[$e]);
}
var xd = [];
function My(e) {
  return e[ge] ?? Sy(e);
}
function Sy(e) {
  let t = xd.pop() ?? Object.create(Ty);
  return (t.lView = e), t;
}
function xy(e) {
  e.lView[ge] !== e && ((e.lView = null), xd.push(e));
}
var Ty = Pe(Re({}, en), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    io(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[ge] = this;
  },
});
function Ny(e) {
  let t = e[ge] ?? Object.create(Ay);
  return (t.lView = e), t;
}
var Ay = Pe(Re({}, en), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = yt(e.lView);
    for (; t && !Td(t[D]); ) t = yt(t);
    t && Qc(t);
  },
  consumerOnSignalRead() {
    this.lView[ge] = this;
  },
});
function Td(e) {
  return e.type !== 2;
}
var Oy = 100;
function Nd(e, t = !0, n = 0) {
  let r = e[Ve],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    Fy(e, n);
  } catch (s) {
    throw (t && bd(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function Fy(e, t) {
  let n = rl();
  try {
    xu(!0), Yi(e, t);
    let r = 0;
    for (; oo(e); ) {
      if (r === Oy) throw new C(103, !1);
      r++, Yi(e, 1);
    }
  } finally {
    xu(n);
  }
}
function Ry(e, t, n, r) {
  let o = t[g];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[Ve].inlineEffectRunner?.flush(), ks(t);
  let a = !0,
    u = null,
    c = null;
  i ||
    (Td(e)
      ? ((c = My(t)), (u = Ln(c)))
      : Na() === null
      ? ((a = !1), (c = Ny(t)), (u = Ln(c)))
      : t[ge] && (Fo(t[ge]), (t[ge] = null)));
  try {
    Yc(t), rg(e.bindingStartIndex), n !== null && dd(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i)
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && Er(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && wr(t, f, 0, null), Xo(t, 0);
      }
    if ((s || Py(t), Ad(t, 0), e.contentQueries !== null && Ed(e, t), !i))
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && Er(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && wr(t, f, 1), Xo(t, 1);
      }
    Qm(e, t);
    let d = e.components;
    d !== null && Fd(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && qi(2, h, r), !i))
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && Er(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && wr(t, f, 2), Xo(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Jo])) {
      for (let f of t[Jo]) f();
      t[Jo] = null;
    }
    i || (t[g] &= -73);
  } catch (l) {
    throw (i || io(t), l);
  } finally {
    c !== null && (Ao(c, u), a && xy(c)), Ls();
  }
}
function Ad(e, t) {
  for (let n = Nl(e); n !== null; n = Al(n))
    for (let r = re; r < n.length; r++) {
      let o = n[r];
      Od(o, t);
    }
}
function Py(e) {
  for (let t = Nl(e); t !== null; t = Al(t)) {
    if (!(t[g] & Or.HasTransplantedViews)) continue;
    let n = t[zt];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      Qc(o);
    }
  }
}
function ky(e, t, n) {
  let r = nt(t, e);
  Od(r, n);
}
function Od(e, t) {
  Fs(e) && Yi(e, t);
}
function Yi(e, t) {
  let r = e[D],
    o = e[g],
    i = e[ge],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Oo(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[g] &= -9217),
    s)
  )
    Ry(r, e, r.template, e[be]);
  else if (o & 8192) {
    Ad(e, 1);
    let a = r.components;
    a !== null && Fd(e, a, 1);
  }
}
function Fd(e, t, n) {
  for (let r = 0; r < t.length; r++) ky(e, t[r], n);
}
function sa(e, t) {
  let n = rl() ? 64 : 1088;
  for (e[Ve].changeDetectionScheduler?.notify(t); e; ) {
    e[g] |= n;
    let r = yt(e);
    if (Fr(e) && !r) return e;
    e = r;
  }
  return null;
}
var wt = class {
    get rootNodes() {
      let t = this._lView,
        n = t[D];
      return zr(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[be];
    }
    set context(t) {
      this._lView[be] = t;
    }
    get destroyed() {
      return (this._lView[g] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[W];
        if (Oe(t)) {
          let n = t[Ar],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (zi(t, r), xr(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      Jl(this._lView[D], this._lView);
    }
    onDestroy(t) {
      Kc(this._lView, t);
    }
    markForCheck() {
      sa(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[g] &= -129;
    }
    reattach() {
      Ei(this._lView), (this._lView[g] |= 128);
    }
    detectChanges() {
      (this._lView[g] |= 1024), Nd(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new C(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Fr(this._lView),
        n = this._lView[mt];
      n !== null && !t && Js(n, this._lView), Ql(this._lView[D], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new C(902, !1);
      this._appRef = t;
      let n = Fr(this._lView),
        r = this._lView[mt];
      r !== null && !n && Kl(r, this._lView), Ei(this._lView);
    }
  },
  Ct = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = Vy;
      }
    }
    return e;
  })(),
  Ly = Ct,
  jy = class extends Ly {
    constructor(t, n, r) {
      super(),
        (this._declarationLView = t),
        (this._declarationTContainer = n),
        (this.elementRef = r);
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Md(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new wt(o);
    }
  };
function Vy() {
  return aa(Z(), _());
}
function aa(e, t) {
  return e.type & 4 ? new jy(t, e, Kt(e, t)) : null;
}
var By = new RegExp(`^(\\d+)*(${Rl}|${Fl})*(.*)`);
function $y(e) {
  let t = e.match(By),
    [n, r, o, i] = t,
    s = r ? parseInt(r, 10) : o,
    a = [];
  for (let [u, c, l] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(l, 10) || 1;
    a.push(c, d);
  }
  return [s, ...a];
}
function Hy(e) {
  return !e.prev && e.parent?.type === 8;
}
function ii(e) {
  return e.index - G;
}
function Uy(e, t) {
  let n = e.i18nNodes;
  if (n) return n.get(t);
}
function go(e, t, n, r) {
  let o = ii(r),
    i = Uy(e, o);
  if (i === void 0) {
    let s = e.data[Xg];
    if (s?.[o]) i = Gy(s[o], n);
    else if (t.firstChild === r) i = e.firstChild;
    else {
      let a = r.prev === null,
        u = r.prev ?? r.parent;
      if (Hy(r)) {
        let c = ii(r.parent);
        i = Pi(e, c);
      } else {
        let c = le(u, n);
        if (a) i = c.firstChild;
        else {
          let l = ii(u),
            d = Pi(e, l);
          if (u.type === 2 && d) {
            let f = Zs(e, l) + 1;
            i = mo(f, d);
          } else i = c.nextSibling;
        }
      }
    }
  }
  return i;
}
function mo(e, t) {
  let n = t;
  for (let r = 0; r < e; r++) n = n.nextSibling;
  return n;
}
function zy(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 2) {
    let o = t[r],
      i = t[r + 1];
    for (let s = 0; s < i; s++)
      switch (o) {
        case Ri.FirstChild:
          n = n.firstChild;
          break;
        case Ri.NextSibling:
          n = n.nextSibling;
          break;
      }
  }
  return n;
}
function Gy(e, t) {
  let [n, ...r] = $y(e),
    o;
  if (n === Fl) o = t[se][ce];
  else if (n === Rl) o = Fm(t[se][ce]);
  else {
    let i = Number(n);
    o = _e(t[i + G]);
  }
  return zy(o, r);
}
var Wy = !1;
function qy(e) {
  Wy = e;
}
function Zy(e) {
  let t = e[Ce];
  if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
      let o = e[R];
      for (let i of r.values()) Yy(o, n, i);
    }
    (t.i18nNodes = void 0), (t.dehydratedIcuData = void 0);
  }
}
function Yy(e, t, n) {
  for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - G);
    o && ea(e, o, !1);
  }
}
function Rd(e) {
  let t = e[yn] ?? [],
    r = e[W][R];
  for (let o of t) Qy(o, r);
  e[yn] = J;
}
function Qy(e, t) {
  let n = 0,
    r = e.firstChild;
  if (r) {
    let o = e.data[Hr];
    for (; n < o; ) {
      let i = r.nextSibling;
      ea(t, r, !1), (r = i), n++;
    }
  }
}
function Pd(e) {
  Rd(e);
  let t = e[ce];
  we(t) && Gr(t);
  for (let n = re; n < e.length; n++) Gr(e[n]);
}
function Gr(e) {
  Zy(e);
  let t = e[D];
  for (let n = G; n < t.bindingStartIndex; n++)
    if (Oe(e[n])) {
      let r = e[n];
      Pd(r);
    } else we(e[n]) && Gr(e[n]);
}
function Ky(e) {
  let t = e._views;
  for (let n of t) {
    let r = om(n);
    r !== null && r[ce] !== null && (we(r) ? Gr(r) : Pd(r));
  }
}
function Jy(e, t) {
  let n = [];
  for (let r of t)
    for (let o = 0; o < (r[Pl] ?? 1); o++) {
      let i = { data: r, firstChild: null };
      r[Hr] > 0 && ((i.firstChild = e), (e = mo(r[Hr], e))), n.push(i);
    }
  return [e, n];
}
var kd = () => null;
function Xy(e, t) {
  let n = e[yn];
  return !t || n === null || n.length === 0
    ? null
    : n[0].data[Jg] === t
    ? n.shift()
    : (Rd(e), null);
}
function eD() {
  kd = Xy;
}
function Qi(e, t) {
  return kd(e, t);
}
var Wt = class {},
  ua = new T("", { providedIn: "root", factory: () => !1 });
var Ld = new T(""),
  jd = new T(""),
  Ki = class {},
  Wr = class {};
function tD(e) {
  let t = Error(`No component factory found for ${X(e)}.`);
  return (t[nD] = e), t;
}
var nD = "ngComponent";
var Ji = class {
    resolveComponentFactory(t) {
      throw tD(t);
    }
  },
  qt = class {
    static {
      this.NULL = new Ji();
    }
  },
  qr = class {},
  ca = (() => {
    class e {
      constructor() {
        this.destroyNode = null;
      }
      static {
        this.__NG_ELEMENT_ID__ = () => rD();
      }
    }
    return e;
  })();
function rD() {
  let e = _(),
    t = Z(),
    n = nt(t.index, e);
  return (we(n) ? n : e)[R];
}
var oD = (() => {
  class e {
    static {
      this.ɵprov = j({ token: e, providedIn: "root", factory: () => null });
    }
  }
  return e;
})();
function Xi(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = fi(o, a);
      else if (i == 2) {
        let u = a,
          c = t[++s];
        r = fi(r, u + ": " + c + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var Zr = class extends qt {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = gt(t);
    return new vn(n, this.ngModule);
  }
};
function Gu(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Ke.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Ke.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function iD(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Gc : t === "math" ? Up : null;
}
var vn = class extends Wr {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = Gu(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return Gu(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Ep(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = S(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Je ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new Ci(t, s) : t,
          u = a.get(qr, null);
        if (u === null) throw new C(407, !1);
        let c = a.get(oD, null),
          l = a.get(Wt, null),
          d = {
            rendererFactory: u,
            sanitizer: c,
            inlineEffectRunner: null,
            changeDetectionScheduler: l,
          },
          h = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? Xm(h, r, this.componentDef.encapsulation, a)
            : Ks(h, f, iD(f)),
          m = 512;
        this.componentDef.signals
          ? (m |= 4096)
          : this.componentDef.onPush || (m |= 16);
        let O = null;
        p !== null && (O = qs(p, a, !0));
        let M = na(0, null, null, 1, 0, null, null, null, null, null, null),
          L = ho(null, M, null, m, null, null, d, h, a, null, O);
        ks(L);
        let pe,
          Y,
          Fe = null;
        try {
          let ue = this.componentDef,
            xt,
            So = null;
          ue.findHostDirectiveDefs
            ? ((xt = []),
              (So = new Map()),
              ue.findHostDirectiveDefs(ue, xt, So),
              xt.push(ue))
            : (xt = [ue]);
          let $f = sD(L, p);
          (Fe = aD($f, p, ue, xt, L, d, h)),
            (Y = qc(M, G)),
            p && lD(h, ue, p, r),
            n !== void 0 && dD(Y, this.ngContentSelectors, n),
            (pe = cD(Fe, ue, xt, So, L, [fD])),
            ia(M, L, null);
        } catch (ue) {
          throw (Fe !== null && Oi(Fe), Oi(L), ue);
        } finally {
          Ls();
        }
        return new es(this.componentType, pe, Kt(Y, L), L, Y);
      } finally {
        S(i);
      }
    }
  },
  es = class extends Ki {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new wt(o, void 0, !1)),
        (this.componentType = t);
    }
    setInput(t, n) {
      let r = this._tNode.inputs,
        o;
      if (r !== null && (o = r[t])) {
        if (
          ((this.previousInputValues ??= new Map()),
          this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n))
        )
          return;
        let i = this._rootLView;
        oa(i[D], i, o, t, n), this.previousInputValues.set(t, n);
        let s = nt(this._tNode.index, i);
        sa(s, 1);
      }
    }
    get injector() {
      return new ht(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function sD(e, t) {
  let n = e[D],
    r = G;
  return (e[r] = t), xn(n, r, 2, "#host", null);
}
function aD(e, t, n, r, o, i, s) {
  let a = o[D];
  uD(r, e, t, s);
  let u = null;
  t !== null && (u = qs(t, o[Ut]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = 16;
  n.signals ? (l = 4096) : n.onPush && (l = 64);
  let d = ho(o, gd(n), null, l, o[e.index], e, i, c, null, null, u);
  return (
    a.firstCreatePass && Wi(a, e, r.length - 1), po(o, d), (o[e.index] = d)
  );
}
function uD(e, t, n, r) {
  for (let o of e) t.mergedAttrs = pn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (Xi(t, t.mergedAttrs, !0), n !== null && ad(r, n, t));
}
function cD(e, t, n, r, o, i) {
  let s = Z(),
    a = o[D],
    u = le(s, o);
  Dd(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l,
      h = It(o, a, d, s);
    Et(h, o);
  }
  vd(a, o, s), u && Et(u, o);
  let c = It(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[be] = o[be] = c), i !== null)) for (let l of i) l(c, t);
  return fd(a, s, o), c;
}
function lD(e, t, n, r) {
  if (r) mi(e, n, ["ng-version", "18.2.11"]);
  else {
    let { attrs: o, classes: i } = wp(t.selectors[0]);
    o && mi(e, n, o), i && i.length > 0 && sd(e, n, i.join(" "));
  }
}
function dD(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function fD() {
  let e = Z();
  Vs(_()[D], e);
}
var Jt = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = hD;
    }
  }
  return e;
})();
function hD() {
  let e = Z();
  return Bd(e, _());
}
var pD = Jt,
  Vd = class extends pD {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Kt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new ht(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Bs(this._hostTNode, this._hostLView);
      if (pl(t)) {
        let n = kr(t, this._hostLView),
          r = Pr(t),
          o = n[D].data[r + 8];
        return new ht(o, n);
      } else return new ht(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = Wu(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - re;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = Qi(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Zi(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !Vp(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let u = s ? t : new vn(gt(t)),
        c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let m = (s ? c : this.parentInjector).get(Je, null);
        m && (i = m);
      }
      let l = gt(u.componentType ?? {}),
        d = Qi(this._lContainer, l?.id ?? null),
        h = d?.firstChild ?? null,
        f = u.create(c, o, h, i);
      return this.insertImpl(f.hostView, a, Zi(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (Gp(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[W],
            c = new Vd(u, u[ae], u[W]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Sd(s, o, i, r), t.attachToViewContainerRef(), yc(si(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = Wu(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = zi(this._lContainer, n);
      r && (xr(si(this._lContainer), n), Jl(r[D], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = zi(this._lContainer, n);
      return r && xr(si(this._lContainer), n) != null ? new wt(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function Wu(e) {
  return e[Ar];
}
function si(e) {
  return e[Ar] || (e[Ar] = []);
}
function Bd(e, t) {
  let n,
    r = t[e.index];
  return (
    Oe(r) ? (n = r) : ((n = Id(r, t, null, e)), (t[e.index] = n), po(t, n)),
    $d(n, t, e, r),
    new Vd(n, e, t)
  );
}
function gD(e, t) {
  let n = e[R],
    r = n.createComment(""),
    o = le(t, e),
    i = td(n, o);
  return Ur(n, i, r, Um(n, o), !1), r;
}
var $d = Hd,
  la = () => !1;
function mD(e, t, n) {
  return la(e, t, n);
}
function Hd(e, t, n, r) {
  if (e[$e]) return;
  let o;
  n.type & 8 ? (o = _e(r)) : (o = gD(t, n)), (e[$e] = o);
}
function yD(e, t, n) {
  if (e[$e] && e[yn]) return !0;
  let r = n[Ce],
    o = t.index - G;
  if (!r || $g(t) || Mn(r, o)) return !1;
  let s = Pi(r, o),
    a = r.data[Ws]?.[o],
    [u, c] = Jy(s, a);
  return (e[$e] = u), (e[yn] = c), !0;
}
function DD(e, t, n, r) {
  la(e, n, t) || Hd(e, t, n, r);
}
function vD() {
  ($d = DD), (la = yD);
}
var ts = class e {
    constructor(t) {
      (this.queryList = t), (this.matches = null);
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  ns = class e {
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i),
            a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++)
        da(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  Yr = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = SD(t)) : (this.predicate = t);
    }
  },
  rs = class e {
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].elementStart(t, n);
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t);
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i &&
          ((i.indexInDeclarationView = r), n !== null ? n.push(i) : (n = [i]));
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++)
        this.queries[r].template(t, n);
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  os = class e {
    constructor(t, n = -1) {
      (this.metadata = t),
        (this.matches = null),
        (this.indexInDeclarationView = -1),
        (this.crossesNgTemplate = !1),
        (this._appliesToNextNode = !0),
        (this._declarationNodeIndex = n);
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? ((this.crossesNgTemplate = !0),
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex,
          r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n; ) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r))
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, ID(n, i)),
            this.matchTNodeWithReadOption(t, n, Cr(n, t, i, !1, !1));
        }
      else
        r === Ct
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, Cr(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === _t || o === Jt || (o === Ct && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = Cr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function ID(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function ED(e, t) {
  return e.type & 11 ? Kt(e, t) : e.type & 4 ? aa(e, t) : null;
}
function wD(e, t, n, r) {
  return n === -1 ? ED(t, e) : n === -2 ? CD(e, t, r) : It(e, e[D], n, t);
}
function CD(e, t, n) {
  if (n === _t) return Kt(t, e);
  if (n === Ct) return aa(t, e);
  if (n === Jt) return Bd(t, e);
}
function Ud(e, t, n, r) {
  let o = t[Be].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(wD(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function is(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = Ud(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1],
          l = t[-u];
        for (let d = re; d < l.length; d++) {
          let h = l[d];
          h[mt] === h[W] && is(h[D], h, c, r);
        }
        if (l[zt] !== null) {
          let d = l[zt];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            is(f[D], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function bD(e, t) {
  return e[Be].queries[t].queryList;
}
function zd(e, t, n) {
  let r = new Ai((n & 4) === 4);
  return (
    ry(e, t, r, r.destroy), (t[Be] ??= new ns()).queries.push(new ts(r)) - 1
  );
}
function _D(e, t, n) {
  let r = H();
  return (
    r.firstCreatePass &&
      (Gd(r, new Yr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    zd(r, _(), t)
  );
}
function MD(e, t, n, r) {
  let o = H();
  if (o.firstCreatePass) {
    let i = Z();
    Gd(o, new Yr(t, n, r), i.index),
      xD(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return zd(o, _(), n);
}
function SD(e) {
  return e.split(",").map((t) => t.trim());
}
function Gd(e, t, n) {
  e.queries === null && (e.queries = new rs()), e.queries.track(new os(t, n));
}
function xD(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function da(e, t) {
  return e.queries.getByIndex(t);
}
function TD(e, t) {
  let n = e[D],
    r = da(n, t);
  return r.crossesNgTemplate ? is(n, e, t, []) : Ud(n, e, r, t);
}
var qu = new Set();
function Mt(e) {
  qu.has(e) ||
    (qu.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function ND(e) {
  return typeof e == "function" && e[ke] !== void 0;
}
function dS(e, t) {
  Mt("NgSignals");
  let n = $a(e),
    r = n[ke];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Ro(r, o)),
    (n.update = (o) => Ha(r, o)),
    (n.asReadonly = AD.bind(n)),
    n
  );
}
function AD() {
  let e = this[ke];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[ke] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Wd(e) {
  return ND(e) && typeof e.set == "function";
}
function OD(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function FD(e) {
  let t = OD(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (Xe(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new C(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = mr(e.inputs)),
          (s.inputTransforms = mr(e.inputTransforms)),
          (s.declaredInputs = mr(e.declaredInputs)),
          (s.outputs = mr(e.outputs));
        let a = o.hostBindings;
        a && jD(e, a);
        let u = o.viewQuery,
          c = o.contentQueries;
        if (
          (u && kD(e, u),
          c && LD(e, c),
          RD(e, o),
          Bh(e.outputs, o.outputs),
          Xe(o) && o.data.animation)
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === FD && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  PD(r);
}
function RD(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      ((e.inputs[n] = r),
      (e.declaredInputs[n] = t.declaredInputs[n]),
      t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      (e.inputTransforms ??= {}), (e.inputTransforms[o] = t.inputTransforms[o]);
    }
  }
}
function PD(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = pn(o.hostAttrs, (n = pn(n, o.hostAttrs))));
  }
}
function mr(e) {
  return e === $t ? {} : e === J ? [] : e;
}
function kD(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function LD(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function jD(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function VD(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var tt = class {},
  ss = class {};
var as = class extends tt {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Zr(this));
      let i = Sc(t);
      (this._bootstrapComponents = ql(i.bootstrap)),
        (this._r3Injector = Cl(
          t,
          n,
          [
            { provide: tt, useValue: this },
            { provide: qt, useValue: this.componentFactoryResolver },
            ...r,
          ],
          X(t),
          new Set(["environment"])
        )),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        (this.instance = this._r3Injector.get(this.ngModuleType));
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        (this.destroyCbs = null);
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  us = class extends ss {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new as(this.moduleType, t, []);
    }
  };
var Qr = class extends tt {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Zr(this)),
      (this.instance = null);
    let n = new gn(
      [
        ...t.providers,
        { provide: tt, useValue: this },
        { provide: qt, useValue: this.componentFactoryResolver },
      ],
      t.parent || As(),
      t.debugName,
      new Set(["environment"])
    );
    (this.injector = n),
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function BD(e, t, n = null) {
  return new Qr({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function qd(e) {
  return fa(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function $D(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function fa(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function Zd(e, t, n) {
  return (e[t] = n);
}
function Ae(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function Yd(e, t, n, r) {
  let o = Ae(e, t, n);
  return Ae(e, t + 1, r) || o;
}
function Tn(e) {
  return (e.flags & 32) === 32;
}
function HD(e, t, n, r, o, i, s, a, u) {
  let c = t.consts,
    l = xn(t, e, 4, s || null, a || null);
  yd(t, n, l, Rr(c, u)), Vs(t, l);
  let d = (l.tView = na(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, l), (d.queries = t.queries.embeddedTView(l))),
    l
  );
}
function Qd(e, t, n, r, o, i, s, a, u, c) {
  let l = n + G,
    d = t.firstCreatePass ? HD(l, t, e, r, o, i, s, a, u) : t.data[l];
  bn(d, !1);
  let h = Kd(t, e, d, n);
  js() && Xs(t, e, h, d), Et(h, e);
  let f = Id(h, e, h, d);
  return (
    (e[l] = f),
    po(e, f),
    mD(f, d, e),
    Os(d) && hd(t, e, d),
    u != null && pd(e, d, c),
    d
  );
}
function UD(e, t, n, r, o, i, s, a) {
  let u = _(),
    c = H(),
    l = Rr(c.consts, i);
  return Qd(u, c, e, t, n, r, o, l, s, a), UD;
}
var Kd = Jd;
function Jd(e, t, n, r) {
  return ot(!0), t[R].createComment("");
}
function zD(e, t, n, r) {
  let o = t[Ce],
    i = !o || Qt() || Tn(n) || Mn(o, r);
  if ((ot(i), i)) return Jd(e, t, n, r);
  let s = o.data[Kg]?.[r] ?? null;
  s !== null &&
    n.tView !== null &&
    n.tView.ssrId === null &&
    (n.tView.ssrId = s);
  let a = go(o, e, t, n);
  co(o, r, a);
  let u = Zs(o, r);
  return mo(u, a);
}
function GD() {
  Kd = zD;
}
var jt = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(jt || {}),
  Xd = (() => {
    class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
      static {
        this.ɵprov = j({
          token: e,
          providedIn: "root",
          factory: () => new e(),
        });
      }
    }
    return e;
  })(),
  cs = class e {
    constructor() {
      (this.ngZone = I(oe)),
        (this.scheduler = I(Wt)),
        (this.errorHandler = I(Gt, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    static {
      this.PHASES = [jt.EarlyRead, jt.Write, jt.MixedReadWrite, jt.Read];
    }
    execute() {
      this.executing = !0;
      for (let t of e.PHASES)
        for (let n of this.sequences)
          if (!(n.erroredOrDestroyed || !n.hooks[t]))
            try {
              n.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                n.hooks[t](n.pipelinedValue)
              );
            } catch (r) {
              (n.erroredOrDestroyed = !0), this.errorHandler?.handleError(r);
            }
      this.executing = !1;
      for (let t of this.sequences)
        t.afterRun(), t.once && (this.sequences.delete(t), t.destroy());
      for (let t of this.deferredRegistrations) this.sequences.add(t);
      this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
        this.deferredRegistrations.clear();
    }
    register(t) {
      this.executing
        ? this.deferredRegistrations.add(t)
        : (this.sequences.add(t), this.scheduler.notify(6));
    }
    unregister(t) {
      this.executing && this.sequences.has(t)
        ? ((t.erroredOrDestroyed = !0),
          (t.pipelinedValue = void 0),
          (t.once = !0))
        : (this.sequences.delete(t), this.deferredRegistrations.delete(t));
    }
    static {
      this.ɵprov = j({ token: e, providedIn: "root", factory: () => new e() });
    }
  },
  ls = class {
    constructor(t, n, r, o) {
      (this.impl = t),
        (this.hooks = n),
        (this.once = r),
        (this.erroredOrDestroyed = !1),
        (this.pipelinedValue = void 0),
        (this.unregisterOnDestroy = o?.onDestroy(() => this.destroy()));
    }
    afterRun() {
      (this.erroredOrDestroyed = !1), (this.pipelinedValue = void 0);
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
    }
  };
function WD(e, t) {
  !t?.injector && jp(WD);
  let n = t?.injector ?? I(et);
  return an(n) ? (Mt("NgAfterNextRender"), ZD(e, n, t, !0)) : YD;
}
function qD(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function ZD(e, t, n, r) {
  let o = t.get(Xd);
  o.impl ??= t.get(cs);
  let i = n?.phase ?? jt.MixedReadWrite,
    s = n?.manualCleanup !== !0 ? t.get($s) : null,
    a = new ls(o.impl, qD(e, i), r, s);
  return o.impl.register(a), a;
}
var YD = { destroy() {} };
function QD(e, t, n, r) {
  let o = _(),
    i = _n();
  if (Ae(o, i, t)) {
    let s = H(),
      a = so();
    Dy(a, o, e, t, n, r);
  }
  return QD;
}
function KD(e, t, n, r) {
  return Ae(e, _n(), n) ? t + ln(n) + r : Me;
}
function JD(e, t, n, r, o, i) {
  let s = ng(),
    a = Yd(e, s, n, o);
  return Rs(2), a ? t + ln(n) + r + ln(o) + i : Me;
}
function yr(e, t) {
  return (e << 17) | (t << 2);
}
function bt(e) {
  return (e >> 17) & 32767;
}
function XD(e) {
  return (e & 2) == 2;
}
function ev(e, t) {
  return (e & 131071) | (t << 17);
}
function ds(e) {
  return e | 2;
}
function Zt(e) {
  return (e & 131068) >> 2;
}
function ai(e, t) {
  return (e & -131069) | (t << 2);
}
function tv(e) {
  return (e & 1) === 1;
}
function fs(e) {
  return e | 1;
}
function nv(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = bt(s),
    u = Zt(s);
  e[r] = n;
  let c = !1,
    l;
  if (Array.isArray(n)) {
    let d = n;
    (l = d[1]), (l === null || wn(d, l) > 0) && (c = !0);
  } else l = n;
  if (o)
    if (u !== 0) {
      let h = bt(e[a + 1]);
      (e[r + 1] = yr(h, a)),
        h !== 0 && (e[h + 1] = ai(e[h + 1], r)),
        (e[a + 1] = ev(e[a + 1], r));
    } else
      (e[r + 1] = yr(a, 0)), a !== 0 && (e[a + 1] = ai(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = yr(u, 0)),
      a === 0 ? (a = r) : (e[u + 1] = ai(e[u + 1], r)),
      (u = r);
  c && (e[r + 1] = ds(e[r + 1])),
    Zu(e, l, r, !0),
    Zu(e, l, r, !1),
    rv(t, l, e, r, i),
    (s = yr(a, u)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function rv(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    wn(i, t) >= 0 &&
    (n[r + 1] = fs(n[r + 1]));
}
function Zu(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? bt(o) : Zt(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let u = e[s],
      c = e[s + 1];
    ov(u, t) && ((a = !0), (e[s + 1] = r ? fs(c) : ds(c))),
      (s = r ? bt(c) : Zt(c));
  }
  a && (e[n + 1] = r ? ds(o) : fs(o));
}
function ov(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
    ? wn(e, t) >= 0
    : !1;
}
var ve = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function iv(e) {
  return e.substring(ve.key, ve.keyEnd);
}
function sv(e) {
  return av(e), ef(e, tf(e, 0, ve.textEnd));
}
function ef(e, t) {
  let n = ve.textEnd;
  return n === t ? -1 : ((t = ve.keyEnd = uv(e, (ve.key = t), n)), tf(e, t, n));
}
function av(e) {
  (ve.key = 0),
    (ve.keyEnd = 0),
    (ve.value = 0),
    (ve.valueEnd = 0),
    (ve.textEnd = e.length);
}
function tf(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function uv(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function cv(e, t, n) {
  let r = _(),
    o = _n();
  if (Ae(r, o, t)) {
    let i = H(),
      s = so();
    ra(i, s, r, e, t, r[R], n, !1);
  }
  return cv;
}
function hs(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  oa(e, n, i[s], s, r);
}
function lv(e, t) {
  return fv(e, t, null, !0), lv;
}
function fS(e) {
  hv(vv, dv, e, !0);
}
function dv(e, t) {
  for (let n = sv(t); n >= 0; n = ef(t, n)) Ss(e, iv(t), !0);
}
function fv(e, t, n, r) {
  let o = _(),
    i = H(),
    s = Rs(2);
  if ((i.firstUpdatePass && rf(i, e, s, r), t !== Me && Ae(o, s, t))) {
    let a = i.data[rt()];
    of(i, a, o, o[R], e, (o[s + 1] = Ev(t, n)), r, s);
  }
}
function hv(e, t, n, r) {
  let o = H(),
    i = Rs(2);
  o.firstUpdatePass && rf(o, null, i, r);
  let s = _();
  if (n !== Me && Ae(s, i, n)) {
    let a = o.data[rt()];
    if (sf(a, r) && !nf(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = fi(u, n || "")), hs(o, a, s, n, r);
    } else Iv(o, a, s, s[R], s[i + 1], (s[i + 1] = Dv(e, t, n)), r, i);
  }
}
function nf(e, t) {
  return t >= e.expandoStartIndex;
}
function rf(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[rt()],
      s = nf(e, n);
    sf(i, r) && t === null && !s && (t = !1),
      (t = pv(o, i, t, r)),
      nv(o, i, t, n, s, r);
  }
}
function pv(e, t, n, r) {
  let o = ag(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = ui(null, e, t, n, r)), (n = In(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = ui(o, e, t, n, r)), i === null)) {
        let u = gv(e, t, r);
        u !== void 0 &&
          Array.isArray(u) &&
          ((u = ui(null, e, t, u[1], r)),
          (u = In(u, t.attrs, r)),
          mv(e, t, r, u));
      } else i = yv(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function gv(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Zt(r) !== 0) return e[bt(r)];
}
function mv(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[bt(o)] = r;
}
function yv(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = In(r, s, n);
  }
  return In(r, t.attrs, n);
}
function ui(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = In(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function In(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Ss(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Dv(e, t, n) {
  if (n == null || n === "") return J;
  let r = [],
    o = Ys(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function vv(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && Ss(e, r, n);
}
function Iv(e, t, n, r, o, i, s, a) {
  o === Me && (o = J);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null; ) {
    let h = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      p = null,
      m;
    l === d
      ? ((u += 2), (c += 2), h !== f && ((p = d), (m = f)))
      : d === null || (l !== null && l < d)
      ? ((u += 2), (p = l))
      : ((c += 2), (p = d), (m = f)),
      p !== null && of(e, t, n, r, p, m, s, a),
      (l = u < o.length ? o[u] : null),
      (d = c < i.length ? i[c] : null);
  }
}
function of(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data,
    c = u[a + 1],
    l = tv(c) ? Yu(u, t, n, o, Zt(c), s) : void 0;
  if (!Kr(l)) {
    Kr(i) || (XD(c) && (i = Yu(u, null, n, o, a, s)));
    let d = Wc(rt(), n);
    Zm(r, s, d, o, i);
  }
}
function Yu(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      h = n[o + 1];
    h === Me && (h = d ? J : void 0);
    let f = d ? Qo(h, r) : l === r ? h : void 0;
    if ((c && !Kr(f) && (f = Qo(u, r)), Kr(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? bt(p) : Zt(p);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = Qo(u, r));
  }
  return a;
}
function Kr(e) {
  return e !== void 0;
}
function Ev(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = X(Ys(e)))),
    e
  );
}
function sf(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function wv(e, t, n, r, o, i) {
  let s = t.consts,
    a = Rr(s, o),
    u = xn(t, e, 2, r, a);
  return (
    yd(t, n, u, Rr(s, i)),
    u.attrs !== null && Xi(u, u.attrs, !1),
    u.mergedAttrs !== null && Xi(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u
  );
}
function af(e, t, n, r) {
  let o = _(),
    i = H(),
    s = G + e,
    a = o[R],
    u = i.firstCreatePass ? wv(s, i, o, t, n, r) : i.data[s],
    c = cf(i, o, u, a, t, e);
  o[s] = c;
  let l = Os(u);
  return (
    bn(u, !0),
    ad(a, c, u),
    !Tn(u) && js() && Xs(i, o, c, u),
    Zp() === 0 && Et(c, o),
    Yp(),
    l && (hd(i, o, u), fd(i, u, o)),
    r !== null && pd(o, u),
    af
  );
}
function uf() {
  let e = Z();
  tl() ? nl() : ((e = e.parent), bn(e, !1));
  let t = e;
  Kp(t) && Xp(), Qp();
  let n = H();
  return (
    n.firstCreatePass && (Vs(n, e), Vc(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      pg(t) &&
      hs(n, t, _(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      gg(t) &&
      hs(n, t, _(), t.stylesWithoutHost, !1),
    uf
  );
}
function Cv(e, t, n, r) {
  return af(e, t, n, r), uf(), Cv;
}
var cf = (e, t, n, r, o, i) => (ot(!0), Ks(r, o, dl()));
function bv(e, t, n, r, o, i) {
  let s = t[Ce],
    a = !s || Qt() || Tn(n) || Mn(s, i);
  if ((ot(a), a)) return Ks(r, o, dl());
  let u = go(s, e, t, n);
  return (
    Vl(s, i) && co(s, i, u.nextSibling),
    s && (Sl(n) || xl(u)) && Cn(n) && (Jp(n), od(u)),
    u
  );
}
function _v() {
  cf = bv;
}
var Mv = (e, t, n, r) => (ot(!0), Yl(t[R], ""));
function Sv(e, t, n, r) {
  let o,
    i = t[Ce],
    s = !i || Qt() || Mn(i, r) || Tn(n);
  if ((ot(s), s)) return Yl(t[R], "");
  let a = go(i, e, t, n),
    u = am(i, r);
  return co(i, r, a), (o = mo(u, a)), o;
}
function xv() {
  Mv = Sv;
}
function hS() {
  return _();
}
function Tv(e, t, n) {
  let r = _(),
    o = _n();
  if (Ae(r, o, t)) {
    let i = H(),
      s = so();
    ra(i, s, r, e, t, r[R], n, !0);
  }
  return Tv;
}
var ft = void 0;
function Nv(e) {
  let t = e,
    n = Math.floor(Math.abs(e)),
    r = e.toString().replace(/^[^.]*\.?/, "").length;
  return n === 1 && r === 0 ? 1 : 5;
}
var Av = [
    "en",
    [["a", "p"], ["AM", "PM"], ft],
    [["AM", "PM"], ft, ft],
    [
      ["S", "M", "T", "W", "T", "F", "S"],
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ],
    ft,
    [
      ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    ],
    ft,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", ft, "{1} 'at' {0}", ft],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    Nv,
  ],
  ci = {};
function de(e) {
  let t = Ov(e),
    n = Qu(t);
  if (n) return n;
  let r = t.split("-")[0];
  if (((n = Qu(r)), n)) return n;
  if (r === "en") return Av;
  throw new C(701, !1);
}
function Qu(e) {
  return (
    e in ci ||
      (ci[e] =
        Rt.ng &&
        Rt.ng.common &&
        Rt.ng.common.locales &&
        Rt.ng.common.locales[e]),
    ci[e]
  );
}
var B = (function (e) {
  return (
    (e[(e.LocaleId = 0)] = "LocaleId"),
    (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
    (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
    (e[(e.DaysFormat = 3)] = "DaysFormat"),
    (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
    (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
    (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
    (e[(e.Eras = 7)] = "Eras"),
    (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
    (e[(e.WeekendRange = 9)] = "WeekendRange"),
    (e[(e.DateFormat = 10)] = "DateFormat"),
    (e[(e.TimeFormat = 11)] = "TimeFormat"),
    (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
    (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
    (e[(e.NumberFormats = 14)] = "NumberFormats"),
    (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
    (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
    (e[(e.CurrencyName = 17)] = "CurrencyName"),
    (e[(e.Currencies = 18)] = "Currencies"),
    (e[(e.Directionality = 19)] = "Directionality"),
    (e[(e.PluralCase = 20)] = "PluralCase"),
    (e[(e.ExtraData = 21)] = "ExtraData"),
    e
  );
})(B || {});
function Ov(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var Jr = "en-US";
var Fv = Jr;
function Rv(e) {
  typeof e == "string" && (Fv = e.toLowerCase().replace(/_/g, "-"));
}
var Pv = (e, t, n) => {};
function kv(e, t, n, r) {
  let o = _(),
    i = H(),
    s = Z();
  return lf(i, o, o[R], s, e, t, r), kv;
}
function Lv(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Nr],
          u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function lf(e, t, n, r, o, i, s) {
  let a = Os(r),
    c = e.firstCreatePass && Cd(e),
    l = t[be],
    d = wd(t),
    h = !0;
  if (r.type & 3 || s) {
    let m = le(r, t),
      O = s ? s(m) : m,
      M = d.length,
      L = s ? (Y) => s(_e(Y[r.index])) : r.index,
      pe = null;
    if ((!s && a && (pe = Lv(e, t, o, r.index)), pe !== null)) {
      let Y = pe.__ngLastListenerFn__ || pe;
      (Y.__ngNextListenerFn__ = i), (pe.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = Ju(r, t, l, i)), Pv(m, o, i);
      let Y = n.listen(O, o, i);
      d.push(i, Y), c && c.push(o, L, M, M + 1);
    }
  } else i = Ju(r, t, l, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let m = p.length;
    if (m)
      for (let O = 0; O < m; O += 2) {
        let M = p[O],
          L = p[O + 1],
          Fe = t[M][L].subscribe(i),
          ue = d.length;
        d.push(i, Fe), c && c.push(o, r.index, ue, -(ue + 1));
      }
  }
}
function Ku(e, t, n, r) {
  let o = S(null);
  try {
    return Te(6, t, n), n(r) !== !1;
  } catch (i) {
    return bd(e, i), !1;
  } finally {
    Te(7, t, n), S(o);
  }
}
function Ju(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? nt(e.index, t) : t;
    sa(s, 5);
    let a = Ku(t, n, r, i),
      u = o.__ngNextListenerFn__;
    for (; u; ) (a = Ku(t, n, u, i) && a), (u = u.__ngNextListenerFn__);
    return a;
  };
}
function pS(e = 1) {
  return cg(e);
}
function jv(e, t) {
  let n = null,
    r = mp(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? Cc(e, i, !0) : vp(r, i)) return o;
  }
  return n;
}
function gS(e) {
  let t = _()[se][ae];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = ap(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? jv(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function mS(e, t = 0, n, r, o, i) {
  let s = _(),
    a = H(),
    u = r ? e + 1 : null;
  u !== null && Qd(s, a, u, r, o, i, null, n);
  let c = xn(a, G + e, 16, null, n || null);
  c.projection === null && (c.projection = t), nl();
  let d = !s[Ce] || Qt();
  s[se][ae].projection[c.projection] === null && u !== null
    ? Vv(s, a, u)
    : d && (c.flags & 32) !== 32 && Wm(a, s, c);
}
function Vv(e, t, n) {
  let r = G + n,
    o = t.data[r],
    i = e[r],
    s = Qi(i, o.tView.ssrId),
    a = Md(e, o, void 0, { dehydratedView: s });
  Sd(i, a, 0, Zi(o, s));
}
function yS(e, t, n, r) {
  MD(e, t, n, r);
}
function DS(e, t, n) {
  _D(e, t, n);
}
function vS(e) {
  let t = _(),
    n = H(),
    r = il();
  Ps(r + 1);
  let o = da(n, r);
  if (e.dirty && zp(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = TD(t, r);
      e.reset(i, Lg), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function IS() {
  return bD(_(), il());
}
function Bv(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function ES(e) {
  let t = tg();
  return Zc(t, G + e);
}
function wS(e, t = "") {
  let n = _(),
    r = H(),
    o = e + G,
    i = r.firstCreatePass ? xn(r, o, 1, t, null) : r.data[o],
    s = df(r, n, i, t, e);
  (n[o] = s), js() && Xs(r, n, s, i), bn(i, !1);
}
var df = (e, t, n, r, o) => (ot(!0), Zl(t[R], r));
function $v(e, t, n, r, o) {
  let i = t[Ce],
    s = !i || Qt() || Tn(n) || Mn(i, o);
  return ot(s), s ? Zl(t[R], r) : go(i, e, t, n);
}
function Hv() {
  df = $v;
}
function Uv(e) {
  return ff("", e, ""), Uv;
}
function ff(e, t, n) {
  let r = _(),
    o = KD(r, e, t, n);
  return o !== Me && _d(r, rt(), o), ff;
}
function zv(e, t, n, r, o) {
  let i = _(),
    s = JD(i, e, t, n, r, o);
  return s !== Me && _d(i, rt(), s), zv;
}
function Gv(e, t, n) {
  Wd(t) && (t = t());
  let r = _(),
    o = _n();
  if (Ae(r, o, t)) {
    let i = H(),
      s = so();
    ra(i, s, r, e, t, r[R], n, !1);
  }
  return Gv;
}
function CS(e, t) {
  let n = Wd(e);
  return n && e.set(t), n;
}
function Wv(e, t) {
  let n = _(),
    r = H(),
    o = Z();
  return lf(r, n, n[R], o, e, t), Wv;
}
function qv(e, t, n) {
  let r = H();
  if (r.firstCreatePass) {
    let o = Xe(e);
    ps(n, r.data, r.blueprint, o, !0), ps(t, r.data, r.blueprint, o, !1);
  }
}
function ps(e, t, n, r, o) {
  if (((e = K(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) ps(e[i], t, n, r, o);
  else {
    let i = H(),
      s = _(),
      a = Z(),
      u = Ht(e) ? e : K(e.provide),
      c = Pc(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (Ht(e) || !e.multi) {
      let f = new vt(c, o, q),
        p = di(u, t, o ? l : l + h, d);
      p === -1
        ? (_i(jr(a, s), i, u),
          li(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = di(u, t, l + h, d),
        p = di(u, t, l, l + h),
        m = f >= 0 && n[f],
        O = p >= 0 && n[p];
      if ((o && !O) || (!o && !m)) {
        _i(jr(a, s), i, u);
        let M = Qv(o ? Yv : Zv, n.length, o, r, c);
        !o && O && (n[p].providerFactory = M),
          li(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(M),
          s.push(M);
      } else {
        let M = hf(n[o ? p : f], c, !o && r);
        li(i, e, f > -1 ? f : p, M);
      }
      !o && r && O && n[p].componentProviders++;
    }
  }
}
function li(e, t, n, r) {
  let o = Ht(t),
    i = Ap(t);
  if (o || i) {
    let u = (i ? K(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function hf(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function di(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function Zv(e, t, n, r) {
  return gs(this.multi, []);
}
function Yv(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = It(n, n[D], this.providerFactory.index, r);
    (i = a.slice(0, s)), gs(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else (i = []), gs(o, i);
  return i;
}
function gs(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function Qv(e, t, n, r, o) {
  let i = new vt(e, n, q);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    hf(i, o, r && !n),
    i
  );
}
function bS(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => qv(r, o ? o(e) : e, t);
  };
}
var Kv = (() => {
  class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = Ac(!1, n.type),
          o =
            r.length > 0
              ? BD([r], this._injector, `Standalone[${n.type.name}]`)
              : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static {
      this.ɵprov = j({
        token: e,
        providedIn: "environment",
        factory: () => new e(ie(Je)),
      });
    }
  }
  return e;
})();
function _S(e) {
  Mt("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(Kv).getOrCreateStandaloneInjector(e));
}
function MS(e, t, n, r) {
  return Jv(_(), ol(), e, t, n, r);
}
function pf(e, t) {
  let n = e[t];
  return n === Me ? void 0 : n;
}
function Jv(e, t, n, r, o, i) {
  let s = t + n;
  return Ae(e, s, o) ? Zd(e, s + 1, i ? r.call(i, o) : r(o)) : pf(e, s + 1);
}
function Xv(e, t, n, r, o, i, s) {
  let a = t + n;
  return Yd(e, a, o, i)
    ? Zd(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : pf(e, a + 2);
}
function SS(e, t) {
  let n = H(),
    r,
    o = e + G;
  n.firstCreatePass
    ? ((r = eI(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = pt(r.type, !0)),
    s,
    a = ne(q);
  try {
    let u = Lr(!1),
      c = i();
    return Lr(u), Bv(n, _(), o, c), c;
  } finally {
    ne(a);
  }
}
function eI(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function xS(e, t, n, r) {
  let o = e + G,
    i = _(),
    s = Zc(i, o);
  return tI(i, o) ? Xv(i, ol(), t, s.transform, n, r, s) : s.transform(n, r);
}
function tI(e, t) {
  return e[D].data[t].pure;
}
var TS = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "platform" });
    }
  }
  return e;
})();
var nI = new T("");
function ha(e) {
  return !!e && typeof e.then == "function";
}
function gf(e) {
  return !!e && typeof e.subscribe == "function";
}
var rI = new T(""),
  mf = (() => {
    class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, r) => {
            (this.resolve = n), (this.reject = r);
          })),
          (this.appInits = I(rI, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = o();
          if (ha(i)) n.push(i);
          else if (gf(i)) {
            let s = new Promise((a, u) => {
              i.subscribe({ complete: a, error: u });
            });
            n.push(s);
          }
        }
        let r = () => {
          (this.done = !0), this.resolve();
        };
        Promise.all(n)
          .then(() => {
            r();
          })
          .catch((o) => {
            this.reject(o);
          }),
          n.length === 0 && r(),
          (this.initialized = !0);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  yf = new T("");
function oI() {
  Ba(() => {
    throw new C(600, !1);
  });
}
function iI(e) {
  return e.isBoundToModule;
}
var sI = 10;
function aI(e, t, n) {
  try {
    let r = n();
    return ha(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var Nn = (() => {
  class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = I(Pg)),
        (this.afterRenderManager = I(Xd)),
        (this.zonelessEnabled = I(ua)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new xe()),
        (this.afterTick = new xe()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = I(ao).hasPendingTasks.pipe(je((n) => !n))),
        (this._injector = I(Je));
    }
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof Wr;
      if (!this._injector.get(mf).done) {
        let h = !o && _p(n),
          f = !1;
        throw new C(405, f);
      }
      let s;
      o ? (s = n) : (s = this._injector.get(qt).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = iI(s) ? void 0 : this._injector.get(tt),
        u = r || s.selector,
        c = s.create(et.NULL, [], u, a),
        l = c.location.nativeElement,
        d = c.injector.get(nI, null);
      return (
        d?.registerApplication(l),
        c.onDestroy(() => {
          this.detachView(c.hostView),
            br(this.components, c),
            d?.unregisterApplication(l);
        }),
        this._loadComponent(c),
        c
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new C(101, !1);
      let n = S(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1), S(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get(qr, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let r = 0;
      for (; this.dirtyFlags !== 0 && r++ < sI; ) this.synchronizeOnce(n);
    }
    synchronizeOnce(n) {
      if (
        ((this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0),
        this.dirtyFlags & 7)
      ) {
        let r = !!(this.dirtyFlags & 1);
        (this.dirtyFlags &= -8),
          (this.dirtyFlags |= 8),
          this.beforeRender.next(r);
        for (let { _lView: o, notifyErrorHandler: i } of this._views)
          uI(o, i, r, this.zonelessEnabled);
        if (
          ((this.dirtyFlags &= -5),
          this.syncDirtyFlagsWithViews(),
          this.dirtyFlags & 7)
        )
          return;
      } else n?.begin?.(), n?.end?.();
      this.dirtyFlags & 8 &&
        ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => oo(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      br(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let r = this._injector.get(yf, []);
      [...this._bootstrapListeners, ...r].forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed)
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          (this._destroyed = !0),
            (this._views = []),
            (this._bootstrapListeners = []),
            (this._destroyListeners = []);
        }
    }
    onDestroy(n) {
      return (
        this._destroyListeners.push(n), () => br(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new C(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    warnIfDestroyed() {}
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function br(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var Dr;
function Df(e) {
  Dr ??= new WeakMap();
  let t = Dr.get(e);
  if (t) return t;
  let n = e.isStable
    .pipe(qo((r) => r))
    .toPromise()
    .then(() => {});
  return Dr.set(e, n), e.onDestroy(() => Dr?.delete(e)), n;
}
function uI(e, t, n, r) {
  if (!n && !oo(e)) return;
  Nd(e, t, n && !r ? 0 : 1);
}
var ms = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  NS = (() => {
    class e {
      compileModuleSync(n) {
        return new us(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Sc(n),
          i = ql(o.declarations).reduce((s, a) => {
            let u = gt(a);
            return u && s.push(new vn(u)), s;
          }, []);
        return new ms(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var cI = (() => {
    class e {
      constructor() {
        (this.zone = I(oe)),
          (this.changeDetectionScheduler = I(Wt)),
          (this.applicationRef = I(Nn));
      }
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription =
            this.zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  lI = new T("", { factory: () => !1 });
function vf({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new oe(Pe(Re({}, If()), { scheduleInRootZone: n }))),
    [
      { provide: oe, useFactory: e },
      {
        provide: fn,
        multi: !0,
        useFactory: () => {
          let r = I(cI, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: fn,
        multi: !0,
        useFactory: () => {
          let r = I(dI);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: Ld, useValue: !0 } : [],
      { provide: jd, useValue: n ?? bl },
    ]
  );
}
function AS(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = vf({
      ngZoneFactory: () => {
        let o = If(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && Mt("NgZone_CoalesceEvent"),
          new oe(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return Nc([{ provide: lI, useValue: !0 }, { provide: ua, useValue: !1 }, r]);
}
function If(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var dI = (() => {
  class e {
    constructor() {
      (this.subscription = new $()),
        (this.initialized = !1),
        (this.zone = I(oe)),
        (this.pendingTasks = I(ao));
    }
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable &&
        !this.zone.hasPendingMacrotasks &&
        !this.zone.hasPendingMicrotasks &&
        (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(
            this.zone.onStable.subscribe(() => {
              oe.assertNotInAngularZone(),
                queueMicrotask(() => {
                  n !== null &&
                    !this.zone.hasPendingMacrotasks &&
                    !this.zone.hasPendingMicrotasks &&
                    (this.pendingTasks.remove(n), (n = null));
                });
            })
          );
        }),
        this.subscription.add(
          this.zone.onUnstable.subscribe(() => {
            oe.assertInAngularZone(), (n ??= this.pendingTasks.add());
          })
        );
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var fI = (() => {
  class e {
    constructor() {
      (this.appRef = I(Nn)),
        (this.taskService = I(ao)),
        (this.ngZone = I(oe)),
        (this.zonelessEnabled = I(ua)),
        (this.disableScheduling = I(Ld, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new $()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(Br)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (I(jd, { optional: !0 }) ?? !1)),
        (this.cancelScheduledCallback = null),
        (this.useMicrotaskScheduler = !1),
        (this.runningTick = !1),
        (this.pendingRenderTaskId = null),
        this.subscriptions.add(
          this.appRef.afterTick.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        this.subscriptions.add(
          this.ngZone.onUnstable.subscribe(() => {
            this.runningTick || this.cleanup();
          })
        ),
        (this.disableScheduling ||=
          !this.zonelessEnabled &&
          (this.ngZone instanceof Ni || !this.zoneIsDefined));
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 7: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 9:
        case 8:
        case 6:
        case 10:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (!this.shouldScheduleTick()) return;
      let r = this.useMicrotaskScheduler ? Fu : _l;
      (this.pendingRenderTaskId = this.taskService.add()),
        this.scheduleInRootZone
          ? (this.cancelScheduledCallback = Zone.root.run(() =>
              r(() => this.tick())
            ))
          : (this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
              r(() => this.tick())
            ));
    }
    shouldScheduleTick() {
      return !(
        this.disableScheduling ||
        this.pendingRenderTaskId !== null ||
        this.runningTick ||
        this.appRef._runningTick ||
        (!this.zonelessEnabled &&
          this.zoneIsDefined &&
          Zone.current.get(Br + this.angularZoneId))
      );
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      !this.zonelessEnabled &&
        this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            (this.runningTick = !0), this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs
        );
      } catch (r) {
        throw (this.taskService.remove(n), r);
      } finally {
        this.cleanup();
      }
      (this.useMicrotaskScheduler = !0),
        Fu(() => {
          (this.useMicrotaskScheduler = !1), this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        ((this.runningTick = !1),
        this.cancelScheduledCallback?.(),
        (this.cancelScheduledCallback = null),
        this.pendingRenderTaskId !== null)
      ) {
        let n = this.pendingRenderTaskId;
        (this.pendingRenderTaskId = null), this.taskService.remove(n);
      }
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function hI() {
  return (typeof $localize < "u" && $localize.locale) || Jr;
}
var An = new T("", {
  providedIn: "root",
  factory: () => I(An, b.Optional | b.SkipSelf) || hI(),
});
var ys = new T("");
function vr(e) {
  return !e.moduleRef;
}
function pI(e) {
  let t = vr(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(oe);
  return n.run(() => {
    vr(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(Gt, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      vr(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(ys);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(ys);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          br(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return aI(r, n, () => {
      let i = t.get(mf);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(An, Jr);
          if ((Rv(s || Jr), vr(e))) {
            let a = t.get(Nn);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return gI(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function gI(e, t) {
  let n = e.injector.get(Nn);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new C(-403, !1);
  t.push(e);
}
var _r = null;
function mI(e = [], t) {
  return et.create({
    name: t,
    providers: [
      { provide: Rc, useValue: "platform" },
      { provide: ys, useValue: new Set([() => (_r = null)]) },
      ...e,
    ],
  });
}
function yI(e = []) {
  if (_r) return _r;
  let t = mI(e);
  return (_r = t), oI(), DI(t), t;
}
function DI(e) {
  e.get(qg, null)?.forEach((n) => n());
}
var Ef = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = vI;
    }
  }
  return e;
})();
function vI(e) {
  return II(Z(), _(), (e & 16) === 16);
}
function II(e, t, n) {
  if (Cn(e) && !n) {
    let r = nt(e.index, t);
    return new wt(r, r);
  } else if (e.type & 175) {
    let r = t[se];
    return new wt(r, t);
  }
  return null;
}
var Ds = class {
    constructor() {}
    supports(t) {
      return qd(t);
    }
    create(t) {
      return new vs(t);
    }
  },
  EI = (e, t) => t,
  vs = class {
    constructor(t) {
      (this.length = 0),
        (this._linkedRecords = null),
        (this._unlinkedRecords = null),
        (this._previousItHead = null),
        (this._itHead = null),
        (this._itTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._movesHead = null),
        (this._movesTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null),
        (this._identityChangesHead = null),
        (this._identityChangesTail = null),
        (this._trackByFn = t || EI);
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead,
        r = this._removalsHead,
        o = 0,
        i = null;
      for (; n || r; ) {
        let s = !r || (n && n.currentIndex < Xu(r, o, i)) ? n : r,
          a = Xu(s, o, i),
          u = s.currentIndex;
        if (s === r) o--, (r = r._nextRemoved);
        else if (((n = n._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let c = a - o,
            l = u - o;
          if (c != l) {
            for (let h = 0; h < c; h++) {
              let f = h < i.length ? i[h] : (i[h] = 0),
                p = f + h;
              l <= p && p < c && (i[h] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = l - c;
          }
        }
        a !== u && t(s, a, u);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n);
    }
    diff(t) {
      if ((t == null && (t = []), !qd(t))) throw new C(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead,
        r = !1,
        o,
        i,
        s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
          (i = t[a]),
            (s = this._trackByFn(a, i)),
            n === null || !Object.is(n.trackById, s)
              ? ((n = this._mismatch(n, i, s, a)), (r = !0))
              : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            (n = n._next);
      } else
        (o = 0),
          $D(t, (a) => {
            (s = this._trackByFn(o, a)),
              n === null || !Object.is(n.trackById, s)
                ? ((n = this._mismatch(n, a, s, o)), (r = !0))
                : (r && (n = this._verifyReinsertion(n, a, s, o)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              (n = n._next),
              o++;
          }),
          (this.length = o);
      return this._truncate(n), (this.collection = t), this.isDirty;
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._movesHead !== null ||
        this._removalsHead !== null ||
        this._identityChangesHead !== null
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
          t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
          t.previousIndex = t.currentIndex;
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        )
          t.previousIndex = t.currentIndex;
        (this._movesHead = this._movesTail = null),
          (this._removalsHead = this._removalsTail = null),
          (this._identityChangesHead = this._identityChangesTail = null);
      }
    }
    _mismatch(t, n, r, o) {
      let i;
      return (
        t === null ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
        (t =
          this._unlinkedRecords === null
            ? null
            : this._unlinkedRecords.get(r, null)),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, o))
          : ((t =
              this._linkedRecords === null
                ? null
                : this._linkedRecords.get(r, o)),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : (t = this._addAfter(new Is(n, r), i, o))),
        t
      );
    }
    _verifyReinsertion(t, n, r, o) {
      let i =
        this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(r, null);
      return (
        i !== null
          ? (t = this._reinsertAfter(i, t._prev, o))
          : t.currentIndex != o &&
            ((t.currentIndex = o), this._addToMoves(t, o)),
        t
      );
    }
    _truncate(t) {
      for (; t !== null; ) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), (t = n);
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
          (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, n, r) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved,
        i = t._nextRemoved;
      return (
        o === null ? (this._removalsHead = i) : (o._nextRemoved = i),
        i === null ? (this._removalsTail = o) : (i._prevRemoved = o),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t
      );
    }
    _moveAfter(t, n, r) {
      return (
        this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t
      );
    }
    _addAfter(t, n, r) {
      return (
        this._insertAfter(t, n, r),
        this._additionsTail === null
          ? (this._additionsTail = this._additionsHead = t)
          : (this._additionsTail = this._additionsTail._nextAdded = t),
        t
      );
    }
    _insertAfter(t, n, r) {
      let o = n === null ? this._itHead : n._next;
      return (
        (t._next = o),
        (t._prev = n),
        o === null ? (this._itTail = t) : (o._prev = t),
        n === null ? (this._itHead = t) : (n._next = t),
        this._linkedRecords === null && (this._linkedRecords = new Xr()),
        this._linkedRecords.put(t),
        (t.currentIndex = r),
        t
      );
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev,
        r = t._next;
      return (
        n === null ? (this._itHead = r) : (n._next = r),
        r === null ? (this._itTail = n) : (r._prev = n),
        t
      );
    }
    _addToMoves(t, n) {
      return (
        t.previousIndex === n ||
          (this._movesTail === null
            ? (this._movesTail = this._movesHead = t)
            : (this._movesTail = this._movesTail._nextMoved = t)),
        t
      );
    }
    _addToRemovals(t) {
      return (
        this._unlinkedRecords === null && (this._unlinkedRecords = new Xr()),
        this._unlinkedRecords.put(t),
        (t.currentIndex = null),
        (t._nextRemoved = null),
        this._removalsTail === null
          ? ((this._removalsTail = this._removalsHead = t),
            (t._prevRemoved = null))
          : ((t._prevRemoved = this._removalsTail),
            (this._removalsTail = this._removalsTail._nextRemoved = t)),
        t
      );
    }
    _addIdentityChange(t, n) {
      return (
        (t.item = n),
        this._identityChangesTail === null
          ? (this._identityChangesTail = this._identityChangesHead = t)
          : (this._identityChangesTail =
              this._identityChangesTail._nextIdentityChange =
                t),
        t
      );
    }
  },
  Is = class {
    constructor(t, n) {
      (this.item = t),
        (this.trackById = n),
        (this.currentIndex = null),
        (this.previousIndex = null),
        (this._nextPrevious = null),
        (this._prev = null),
        (this._next = null),
        (this._prevDup = null),
        (this._nextDup = null),
        (this._prevRemoved = null),
        (this._nextRemoved = null),
        (this._nextAdded = null),
        (this._nextMoved = null),
        (this._nextIdentityChange = null);
    }
  },
  Es = class {
    constructor() {
      (this._head = null), (this._tail = null);
    }
    add(t) {
      this._head === null
        ? ((this._head = this._tail = t),
          (t._nextDup = null),
          (t._prevDup = null))
        : ((this._tail._nextDup = t),
          (t._prevDup = this._tail),
          (t._nextDup = null),
          (this._tail = t));
    }
    get(t, n) {
      let r;
      for (r = this._head; r !== null; r = r._nextDup)
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t))
          return r;
      return null;
    }
    remove(t) {
      let n = t._prevDup,
        r = t._nextDup;
      return (
        n === null ? (this._head = r) : (n._nextDup = r),
        r === null ? (this._tail = n) : (r._prevDup = n),
        this._head === null
      );
    }
  },
  Xr = class {
    constructor() {
      this.map = new Map();
    }
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      r || ((r = new Es()), this.map.set(n, r)), r.add(t);
    }
    get(t, n) {
      let r = t,
        o = this.map.get(r);
      return o ? o.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return this.map.get(n).remove(t) && this.map.delete(n), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function Xu(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
var ws = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || fa(t);
    }
    create() {
      return new Cs();
    }
  },
  Cs = class {
    constructor() {
      (this._records = new Map()),
        (this._mapHead = null),
        (this._appendAfter = null),
        (this._previousMapHead = null),
        (this._changesHead = null),
        (this._changesTail = null),
        (this._additionsHead = null),
        (this._additionsTail = null),
        (this._removalsHead = null),
        (this._removalsTail = null);
    }
    get isDirty() {
      return (
        this._additionsHead !== null ||
        this._changesHead !== null ||
        this._removalsHead !== null
      );
    }
    forEachItem(t) {
      let n;
      for (n = this._mapHead; n !== null; n = n._next) t(n);
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousMapHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachChangedItem(t) {
      let n;
      for (n = this._changesHead; n !== null; n = n._nextChanged) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    diff(t) {
      if (!t) t = new Map();
      else if (!(t instanceof Map || fa(t))) throw new C(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._mapHead;
      if (
        ((this._appendAfter = null),
        this._forEach(t, (r, o) => {
          if (n && n.key === o)
            this._maybeAddToChanges(n, r),
              (this._appendAfter = n),
              (n = n._next);
          else {
            let i = this._getOrCreateRecordForKey(o, r);
            n = this._insertBeforeOrAppend(n, i);
          }
        }),
        n)
      ) {
        n._prev && (n._prev._next = null), (this._removalsHead = n);
        for (let r = n; r !== null; r = r._nextRemoved)
          r === this._mapHead && (this._mapHead = null),
            this._records.delete(r.key),
            (r._nextRemoved = r._next),
            (r.previousValue = r.currentValue),
            (r.currentValue = null),
            (r._prev = null),
            (r._next = null);
      }
      return (
        this._changesTail && (this._changesTail._nextChanged = null),
        this._additionsTail && (this._additionsTail._nextAdded = null),
        this.isDirty
      );
    }
    _insertBeforeOrAppend(t, n) {
      if (t) {
        let r = t._prev;
        return (
          (n._next = t),
          (n._prev = r),
          (t._prev = n),
          r && (r._next = n),
          t === this._mapHead && (this._mapHead = n),
          (this._appendAfter = t),
          t
        );
      }
      return (
        this._appendAfter
          ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
          : (this._mapHead = n),
        (this._appendAfter = n),
        null
      );
    }
    _getOrCreateRecordForKey(t, n) {
      if (this._records.has(t)) {
        let o = this._records.get(t);
        this._maybeAddToChanges(o, n);
        let i = o._prev,
          s = o._next;
        return (
          i && (i._next = s),
          s && (s._prev = i),
          (o._next = null),
          (o._prev = null),
          o
        );
      }
      let r = new bs(t);
      return (
        this._records.set(t, r),
        (r.currentValue = n),
        this._addToAdditions(r),
        r
      );
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (
          this._previousMapHead = this._mapHead, t = this._previousMapHead;
          t !== null;
          t = t._next
        )
          t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
          t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
          t.previousValue = t.currentValue;
        (this._changesHead = this._changesTail = null),
          (this._additionsHead = this._additionsTail = null),
          (this._removalsHead = null);
      }
    }
    _maybeAddToChanges(t, n) {
      Object.is(n, t.currentValue) ||
        ((t.previousValue = t.currentValue),
        (t.currentValue = n),
        this._addToChanges(t));
    }
    _addToAdditions(t) {
      this._additionsHead === null
        ? (this._additionsHead = this._additionsTail = t)
        : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
    }
    _addToChanges(t) {
      this._changesHead === null
        ? (this._changesHead = this._changesTail = t)
        : ((this._changesTail._nextChanged = t), (this._changesTail = t));
    }
    _forEach(t, n) {
      t instanceof Map
        ? t.forEach(n)
        : Object.keys(t).forEach((r) => n(t[r], r));
    }
  },
  bs = class {
    constructor(t) {
      (this.key = t),
        (this.previousValue = null),
        (this.currentValue = null),
        (this._nextPrevious = null),
        (this._next = null),
        (this._prev = null),
        (this._nextAdded = null),
        (this._nextRemoved = null),
        (this._nextChanged = null);
    }
  };
function ec() {
  return new pa([new Ds()]);
}
var pa = (() => {
  class e {
    static {
      this.ɵprov = j({ token: e, providedIn: "root", factory: ec });
    }
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || ec()),
        deps: [[e, new mc(), new gc()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new C(901, !1);
    }
  }
  return e;
})();
function tc() {
  return new ga([new ws()]);
}
var ga = (() => {
  class e {
    static {
      this.ɵprov = j({ token: e, providedIn: "root", factory: tc });
    }
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || tc()),
        deps: [[e, new mc(), new gc()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r) return r;
      throw new C(901, !1);
    }
  }
  return e;
})();
function OS(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = yI(r),
      i = [vf({}), { provide: Wt, useExisting: fI }, ...(n || [])],
      s = new Qr({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return pI({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
var nc = !1;
function wI() {
  nc || ((nc = !0), rm(), _v(), Hv(), xv(), GD(), vD(), eD(), ny());
}
function CI(e, t) {
  return Df(e);
}
function FS() {
  return Nc([
    {
      provide: hr,
      useFactory: () => {
        let e = !0;
        return (
          an() && (e = !!I(Gs, { optional: !0 })?.get(Ll, null)),
          e && Mt("NgHydration"),
          e
        );
      },
    },
    {
      provide: fn,
      useValue: () => {
        qy(!1), an() && I(hr) && (bI(), wI());
      },
      multi: !0,
    },
    { provide: $l, useFactory: () => an() && I(hr) },
    {
      provide: yf,
      useFactory: () => {
        if (an() && I(hr)) {
          let e = I(Nn),
            t = I(et);
          return () => {
            CI(e, t).then(() => {
              Ky(e);
            });
          };
        }
        return () => {};
      },
      multi: !0,
    },
  ]);
}
function bI() {
  let e = uo(),
    t;
  for (let n of e.body.childNodes)
    if (n.nodeType === Node.COMMENT_NODE && n.textContent?.trim() === tm) {
      t = n;
      break;
    }
  if (!t) throw new C(-507, !1);
}
function _I(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function MI(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function RS(e, t) {
  Mt("NgSignals");
  let n = La(e);
  return t?.equal && (n[ke].equal = t.equal), n;
}
function SI(e) {
  let t = S(null);
  try {
    return e();
  } finally {
    S(t);
  }
}
var Nf = null;
function ma() {
  return Nf;
}
function rx(e) {
  Nf ??= e;
}
var wf = class {};
var Af = new T(""),
  Of = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = j({
          token: e,
          factory: () => I(TI),
          providedIn: "platform",
        });
      }
    }
    return e;
  })();
var TI = (() => {
  class e extends Of {
    constructor() {
      super(),
        (this._doc = I(Af)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return ma().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = ma().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("popstate", n, !1),
        () => r.removeEventListener("popstate", n)
      );
    }
    onHashChange(n) {
      let r = ma().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("hashchange", n, !1),
        () => r.removeEventListener("hashchange", n)
      );
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(n) {
      this._location.pathname = n;
    }
    pushState(n, r, o) {
      this._history.pushState(n, r, o);
    }
    replaceState(n, r, o) {
      this._history.replaceState(n, r, o);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(n = 0) {
      this._history.go(n);
    }
    getState() {
      return this._history.state;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)();
      };
    }
    static {
      this.ɵprov = j({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      });
    }
  }
  return e;
})();
function Ff(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function Cf(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function St(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var ba = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = j({ token: e, factory: () => I(AI), providedIn: "root" });
      }
    }
    return e;
  })(),
  NI = new T(""),
  AI = (() => {
    class e extends ba {
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            I(Af).location?.origin ??
            "");
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length; )
          this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n)
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Ff(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + St(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + St(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + St(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(ie(Of), ie(NI, 8));
        };
      }
      static {
        this.ɵprov = j({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var OI = (() => {
  class e {
    constructor(n) {
      (this._subject = new Ie()),
        (this._urlChangeListeners = []),
        (this._urlChangeSubscription = null),
        (this._locationStrategy = n);
      let r = this._locationStrategy.getBaseHref();
      (this._basePath = PI(Cf(bf(r)))),
        this._locationStrategy.onPopState((o) => {
          this._subject.emit({
            url: this.path(!0),
            pop: !0,
            state: o.state,
            type: o.type,
          });
        });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(),
        (this._urlChangeListeners = []);
    }
    path(n = !1) {
      return this.normalize(this._locationStrategy.path(n));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(n, r = "") {
      return this.path() == this.normalize(n + St(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(RI(this._basePath, bf(n)));
    }
    prepareExternalUrl(n) {
      return (
        n && n[0] !== "/" && (n = "/" + n),
        this._locationStrategy.prepareExternalUrl(n)
      );
    }
    go(n, r = "", o = null) {
      this._locationStrategy.pushState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + St(r)), o);
    }
    replaceState(n, r = "", o = null) {
      this._locationStrategy.replaceState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + St(r)), o);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(n = 0) {
      this._locationStrategy.historyGo?.(n);
    }
    onUrlChange(n) {
      return (
        this._urlChangeListeners.push(n),
        (this._urlChangeSubscription ??= this.subscribe((r) => {
          this._notifyUrlChangeListeners(r.url, r.state);
        })),
        () => {
          let r = this._urlChangeListeners.indexOf(n);
          this._urlChangeListeners.splice(r, 1),
            this._urlChangeListeners.length === 0 &&
              (this._urlChangeSubscription?.unsubscribe(),
              (this._urlChangeSubscription = null));
        }
      );
    }
    _notifyUrlChangeListeners(n = "", r) {
      this._urlChangeListeners.forEach((o) => o(n, r));
    }
    subscribe(n, r, o) {
      return this._subject.subscribe({ next: n, error: r, complete: o });
    }
    static {
      this.normalizeQueryParams = St;
    }
    static {
      this.joinWithSlash = Ff;
    }
    static {
      this.stripTrailingSlash = Cf;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(ie(ba));
      };
    }
    static {
      this.ɵprov = j({ token: e, factory: () => FI(), providedIn: "root" });
    }
  }
  return e;
})();
function FI() {
  return new OI(ie(ba));
}
function RI(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function bf(e) {
  return e.replace(/\/index.html$/, "");
}
function PI(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
var Rf = (function (e) {
  return (
    (e[(e.Decimal = 0)] = "Decimal"),
    (e[(e.Percent = 1)] = "Percent"),
    (e[(e.Currency = 2)] = "Currency"),
    (e[(e.Scientific = 3)] = "Scientific"),
    e
  );
})(Rf || {});
var ee = (function (e) {
    return (
      (e[(e.Format = 0)] = "Format"), (e[(e.Standalone = 1)] = "Standalone"), e
    );
  })(ee || {}),
  P = (function (e) {
    return (
      (e[(e.Narrow = 0)] = "Narrow"),
      (e[(e.Abbreviated = 1)] = "Abbreviated"),
      (e[(e.Wide = 2)] = "Wide"),
      (e[(e.Short = 3)] = "Short"),
      e
    );
  })(P || {}),
  fe = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.Medium = 1)] = "Medium"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Full = 3)] = "Full"),
      e
    );
  })(fe || {}),
  he = {
    Decimal: 0,
    Group: 1,
    List: 2,
    PercentSign: 3,
    PlusSign: 4,
    MinusSign: 5,
    Exponential: 6,
    SuperscriptingExponent: 7,
    PerMille: 8,
    Infinity: 9,
    NaN: 10,
    TimeSeparator: 11,
    CurrencyDecimal: 12,
    CurrencyGroup: 13,
  };
function kI(e) {
  return de(e)[B.LocaleId];
}
function LI(e, t, n) {
  let r = de(e),
    o = [r[B.DayPeriodsFormat], r[B.DayPeriodsStandalone]],
    i = me(o, t);
  return me(i, n);
}
function jI(e, t, n) {
  let r = de(e),
    o = [r[B.DaysFormat], r[B.DaysStandalone]],
    i = me(o, t);
  return me(i, n);
}
function VI(e, t, n) {
  let r = de(e),
    o = [r[B.MonthsFormat], r[B.MonthsStandalone]],
    i = me(o, t);
  return me(i, n);
}
function BI(e, t) {
  let r = de(e)[B.Eras];
  return me(r, t);
}
function yo(e, t) {
  let n = de(e);
  return me(n[B.DateFormat], t);
}
function Do(e, t) {
  let n = de(e);
  return me(n[B.TimeFormat], t);
}
function vo(e, t) {
  let r = de(e)[B.DateTimeFormat];
  return me(r, t);
}
function Ge(e, t) {
  let n = de(e),
    r = n[B.NumberSymbols][t];
  if (typeof r > "u") {
    if (t === he.CurrencyDecimal) return n[B.NumberSymbols][he.Decimal];
    if (t === he.CurrencyGroup) return n[B.NumberSymbols][he.Group];
  }
  return r;
}
function $I(e, t) {
  return de(e)[B.NumberFormats][t];
}
function Pf(e) {
  if (!e[B.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${
        e[B.LocaleId]
      }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
    );
}
function HI(e) {
  let t = de(e);
  return (
    Pf(t),
    (t[B.ExtraData][2] || []).map((r) =>
      typeof r == "string" ? ya(r) : [ya(r[0]), ya(r[1])]
    )
  );
}
function UI(e, t, n) {
  let r = de(e);
  Pf(r);
  let o = [r[B.ExtraData][0], r[B.ExtraData][1]],
    i = me(o, t) || [];
  return me(i, n) || [];
}
function me(e, t) {
  for (let n = t; n > -1; n--) if (typeof e[n] < "u") return e[n];
  throw new Error("Locale data API: locale data undefined");
}
function ya(e) {
  let [t, n] = e.split(":");
  return { hours: +t, minutes: +n };
}
var zI =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  Io = {},
  GI =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
  We = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.ShortGMT = 1)] = "ShortGMT"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Extended = 3)] = "Extended"),
      e
    );
  })(We || {}),
  A = (function (e) {
    return (
      (e[(e.FullYear = 0)] = "FullYear"),
      (e[(e.Month = 1)] = "Month"),
      (e[(e.Date = 2)] = "Date"),
      (e[(e.Hours = 3)] = "Hours"),
      (e[(e.Minutes = 4)] = "Minutes"),
      (e[(e.Seconds = 5)] = "Seconds"),
      (e[(e.FractionalSeconds = 6)] = "FractionalSeconds"),
      (e[(e.Day = 7)] = "Day"),
      e
    );
  })(A || {}),
  N = (function (e) {
    return (
      (e[(e.DayPeriods = 0)] = "DayPeriods"),
      (e[(e.Days = 1)] = "Days"),
      (e[(e.Months = 2)] = "Months"),
      (e[(e.Eras = 3)] = "Eras"),
      e
    );
  })(N || {});
function WI(e, t, n, r) {
  let o = tE(e);
  t = ze(n, t) || t;
  let s = [],
    a;
  for (; t; )
    if (((a = GI.exec(t)), a)) {
      s = s.concat(a.slice(1));
      let l = s.pop();
      if (!l) break;
      t = l;
    } else {
      s.push(t);
      break;
    }
  let u = o.getTimezoneOffset();
  r && ((u = Lf(r, u)), (o = eE(o, r, !0)));
  let c = "";
  return (
    s.forEach((l) => {
      let d = JI(l);
      c += d
        ? d(o, n, u)
        : l === "''"
        ? "'"
        : l.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }),
    c
  );
}
function _o(e, t, n) {
  let r = new Date(0);
  return r.setFullYear(e, t, n), r.setHours(0, 0, 0), r;
}
function ze(e, t) {
  let n = kI(e);
  if (((Io[n] ??= {}), Io[n][t])) return Io[n][t];
  let r = "";
  switch (t) {
    case "shortDate":
      r = yo(e, fe.Short);
      break;
    case "mediumDate":
      r = yo(e, fe.Medium);
      break;
    case "longDate":
      r = yo(e, fe.Long);
      break;
    case "fullDate":
      r = yo(e, fe.Full);
      break;
    case "shortTime":
      r = Do(e, fe.Short);
      break;
    case "mediumTime":
      r = Do(e, fe.Medium);
      break;
    case "longTime":
      r = Do(e, fe.Long);
      break;
    case "fullTime":
      r = Do(e, fe.Full);
      break;
    case "short":
      let o = ze(e, "shortTime"),
        i = ze(e, "shortDate");
      r = Eo(vo(e, fe.Short), [o, i]);
      break;
    case "medium":
      let s = ze(e, "mediumTime"),
        a = ze(e, "mediumDate");
      r = Eo(vo(e, fe.Medium), [s, a]);
      break;
    case "long":
      let u = ze(e, "longTime"),
        c = ze(e, "longDate");
      r = Eo(vo(e, fe.Long), [u, c]);
      break;
    case "full":
      let l = ze(e, "fullTime"),
        d = ze(e, "fullDate");
      r = Eo(vo(e, fe.Full), [l, d]);
      break;
  }
  return r && (Io[n][t] = r), r;
}
function Eo(e, t) {
  return (
    t &&
      (e = e.replace(/\{([^}]+)}/g, function (n, r) {
        return t != null && r in t ? t[r] : n;
      })),
    e
  );
}
function Se(e, t, n = "-", r, o) {
  let i = "";
  (e < 0 || (o && e <= 0)) && (o ? (e = -e + 1) : ((e = -e), (i = n)));
  let s = String(e);
  for (; s.length < t; ) s = "0" + s;
  return r && (s = s.slice(s.length - t)), i + s;
}
function qI(e, t) {
  return Se(e, 3).substring(0, t);
}
function U(e, t, n = 0, r = !1, o = !1) {
  return function (i, s) {
    let a = ZI(e, i);
    if (((n > 0 || a > -n) && (a += n), e === A.Hours))
      a === 0 && n === -12 && (a = 12);
    else if (e === A.FractionalSeconds) return qI(a, t);
    let u = Ge(s, he.MinusSign);
    return Se(a, t, u, r, o);
  };
}
function ZI(e, t) {
  switch (e) {
    case A.FullYear:
      return t.getFullYear();
    case A.Month:
      return t.getMonth();
    case A.Date:
      return t.getDate();
    case A.Hours:
      return t.getHours();
    case A.Minutes:
      return t.getMinutes();
    case A.Seconds:
      return t.getSeconds();
    case A.FractionalSeconds:
      return t.getMilliseconds();
    case A.Day:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function k(e, t, n = ee.Format, r = !1) {
  return function (o, i) {
    return YI(o, i, e, t, n, r);
  };
}
function YI(e, t, n, r, o, i) {
  switch (n) {
    case N.Months:
      return VI(t, o, r)[e.getMonth()];
    case N.Days:
      return jI(t, o, r)[e.getDay()];
    case N.DayPeriods:
      let s = e.getHours(),
        a = e.getMinutes();
      if (i) {
        let c = HI(t),
          l = UI(t, o, r),
          d = c.findIndex((h) => {
            if (Array.isArray(h)) {
              let [f, p] = h,
                m = s >= f.hours && a >= f.minutes,
                O = s < p.hours || (s === p.hours && a < p.minutes);
              if (f.hours < p.hours) {
                if (m && O) return !0;
              } else if (m || O) return !0;
            } else if (h.hours === s && h.minutes === a) return !0;
            return !1;
          });
        if (d !== -1) return l[d];
      }
      return LI(t, o, r)[s < 12 ? 0 : 1];
    case N.Eras:
      return BI(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      let u = n;
      throw new Error(`unexpected translation type ${u}`);
  }
}
function wo(e) {
  return function (t, n, r) {
    let o = -1 * r,
      i = Ge(n, he.MinusSign),
      s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case We.Short:
        return (o >= 0 ? "+" : "") + Se(s, 2, i) + Se(Math.abs(o % 60), 2, i);
      case We.ShortGMT:
        return "GMT" + (o >= 0 ? "+" : "") + Se(s, 1, i);
      case We.Long:
        return (
          "GMT" +
          (o >= 0 ? "+" : "") +
          Se(s, 2, i) +
          ":" +
          Se(Math.abs(o % 60), 2, i)
        );
      case We.Extended:
        return r === 0
          ? "Z"
          : (o >= 0 ? "+" : "") +
              Se(s, 2, i) +
              ":" +
              Se(Math.abs(o % 60), 2, i);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
var QI = 0,
  bo = 4;
function KI(e) {
  let t = _o(e, QI, 1).getDay();
  return _o(e, 0, 1 + (t <= bo ? bo : bo + 7) - t);
}
function kf(e) {
  let t = e.getDay(),
    n = t === 0 ? -3 : bo - t;
  return _o(e.getFullYear(), e.getMonth(), e.getDate() + n);
}
function Da(e, t = !1) {
  return function (n, r) {
    let o;
    if (t) {
      let i = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
        s = n.getDate();
      o = 1 + Math.floor((s + i) / 7);
    } else {
      let i = kf(n),
        s = KI(i.getFullYear()),
        a = i.getTime() - s.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return Se(o, e, Ge(r, he.MinusSign));
  };
}
function Co(e, t = !1) {
  return function (n, r) {
    let i = kf(n).getFullYear();
    return Se(i, e, Ge(r, he.MinusSign), t);
  };
}
var va = {};
function JI(e) {
  if (va[e]) return va[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = k(N.Eras, P.Abbreviated);
      break;
    case "GGGG":
      t = k(N.Eras, P.Wide);
      break;
    case "GGGGG":
      t = k(N.Eras, P.Narrow);
      break;
    case "y":
      t = U(A.FullYear, 1, 0, !1, !0);
      break;
    case "yy":
      t = U(A.FullYear, 2, 0, !0, !0);
      break;
    case "yyy":
      t = U(A.FullYear, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = U(A.FullYear, 4, 0, !1, !0);
      break;
    case "Y":
      t = Co(1);
      break;
    case "YY":
      t = Co(2, !0);
      break;
    case "YYY":
      t = Co(3);
      break;
    case "YYYY":
      t = Co(4);
      break;
    case "M":
    case "L":
      t = U(A.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      t = U(A.Month, 2, 1);
      break;
    case "MMM":
      t = k(N.Months, P.Abbreviated);
      break;
    case "MMMM":
      t = k(N.Months, P.Wide);
      break;
    case "MMMMM":
      t = k(N.Months, P.Narrow);
      break;
    case "LLL":
      t = k(N.Months, P.Abbreviated, ee.Standalone);
      break;
    case "LLLL":
      t = k(N.Months, P.Wide, ee.Standalone);
      break;
    case "LLLLL":
      t = k(N.Months, P.Narrow, ee.Standalone);
      break;
    case "w":
      t = Da(1);
      break;
    case "ww":
      t = Da(2);
      break;
    case "W":
      t = Da(1, !0);
      break;
    case "d":
      t = U(A.Date, 1);
      break;
    case "dd":
      t = U(A.Date, 2);
      break;
    case "c":
    case "cc":
      t = U(A.Day, 1);
      break;
    case "ccc":
      t = k(N.Days, P.Abbreviated, ee.Standalone);
      break;
    case "cccc":
      t = k(N.Days, P.Wide, ee.Standalone);
      break;
    case "ccccc":
      t = k(N.Days, P.Narrow, ee.Standalone);
      break;
    case "cccccc":
      t = k(N.Days, P.Short, ee.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = k(N.Days, P.Abbreviated);
      break;
    case "EEEE":
      t = k(N.Days, P.Wide);
      break;
    case "EEEEE":
      t = k(N.Days, P.Narrow);
      break;
    case "EEEEEE":
      t = k(N.Days, P.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = k(N.DayPeriods, P.Abbreviated);
      break;
    case "aaaa":
      t = k(N.DayPeriods, P.Wide);
      break;
    case "aaaaa":
      t = k(N.DayPeriods, P.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = k(N.DayPeriods, P.Abbreviated, ee.Standalone, !0);
      break;
    case "bbbb":
      t = k(N.DayPeriods, P.Wide, ee.Standalone, !0);
      break;
    case "bbbbb":
      t = k(N.DayPeriods, P.Narrow, ee.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = k(N.DayPeriods, P.Abbreviated, ee.Format, !0);
      break;
    case "BBBB":
      t = k(N.DayPeriods, P.Wide, ee.Format, !0);
      break;
    case "BBBBB":
      t = k(N.DayPeriods, P.Narrow, ee.Format, !0);
      break;
    case "h":
      t = U(A.Hours, 1, -12);
      break;
    case "hh":
      t = U(A.Hours, 2, -12);
      break;
    case "H":
      t = U(A.Hours, 1);
      break;
    case "HH":
      t = U(A.Hours, 2);
      break;
    case "m":
      t = U(A.Minutes, 1);
      break;
    case "mm":
      t = U(A.Minutes, 2);
      break;
    case "s":
      t = U(A.Seconds, 1);
      break;
    case "ss":
      t = U(A.Seconds, 2);
      break;
    case "S":
      t = U(A.FractionalSeconds, 1);
      break;
    case "SS":
      t = U(A.FractionalSeconds, 2);
      break;
    case "SSS":
      t = U(A.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = wo(We.Short);
      break;
    case "ZZZZZ":
      t = wo(We.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = wo(We.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = wo(We.Long);
      break;
    default:
      return null;
  }
  return (va[e] = t), t;
}
function Lf(e, t) {
  e = e.replace(/:/g, "");
  let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(n) ? t : n;
}
function XI(e, t) {
  return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
}
function eE(e, t, n) {
  let r = n ? -1 : 1,
    o = e.getTimezoneOffset(),
    i = Lf(t, o);
  return XI(e, r * (i - o));
}
function tE(e) {
  if (_f(e)) return e;
  if (typeof e == "number" && !isNaN(e)) return new Date(e);
  if (typeof e == "string") {
    if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
      let [o, i = 1, s = 1] = e.split("-").map((a) => +a);
      return _o(o, i - 1, s);
    }
    let n = parseFloat(e);
    if (!isNaN(e - n)) return new Date(n);
    let r;
    if ((r = e.match(zI))) return nE(r);
  }
  let t = new Date(e);
  if (!_f(t)) throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function nE(e) {
  let t = new Date(0),
    n = 0,
    r = 0,
    o = e[8] ? t.setUTCFullYear : t.setFullYear,
    i = e[8] ? t.setUTCHours : t.setHours;
  e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  let s = Number(e[4] || 0) - n,
    a = Number(e[5] || 0) - r,
    u = Number(e[6] || 0),
    c = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return i.call(t, s, a, u, c), t;
}
function _f(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
var rE = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
  Mf = 22,
  Mo = ".",
  On = "0",
  oE = ";",
  iE = ",",
  Ia = "#";
function sE(e, t, n, r, o, i, s = !1) {
  let a = "",
    u = !1;
  if (!isFinite(e)) a = Ge(n, he.Infinity);
  else {
    let c = lE(e);
    s && (c = cE(c));
    let l = t.minInt,
      d = t.minFrac,
      h = t.maxFrac;
    if (i) {
      let L = i.match(rE);
      if (L === null) throw new Error(`${i} is not a valid digit info`);
      let pe = L[1],
        Y = L[3],
        Fe = L[5];
      pe != null && (l = Ea(pe)),
        Y != null && (d = Ea(Y)),
        Fe != null ? (h = Ea(Fe)) : Y != null && d > h && (h = d);
    }
    dE(c, d, h);
    let f = c.digits,
      p = c.integerLen,
      m = c.exponent,
      O = [];
    for (u = f.every((L) => !L); p < l; p++) f.unshift(0);
    for (; p < 0; p++) f.unshift(0);
    p > 0 ? (O = f.splice(p, f.length)) : ((O = f), (f = [0]));
    let M = [];
    for (
      f.length >= t.lgSize && M.unshift(f.splice(-t.lgSize, f.length).join(""));
      f.length > t.gSize;

    )
      M.unshift(f.splice(-t.gSize, f.length).join(""));
    f.length && M.unshift(f.join("")),
      (a = M.join(Ge(n, r))),
      O.length && (a += Ge(n, o) + O.join("")),
      m && (a += Ge(n, he.Exponential) + "+" + m);
  }
  return (
    e < 0 && !u ? (a = t.negPre + a + t.negSuf) : (a = t.posPre + a + t.posSuf),
    a
  );
}
function aE(e, t, n) {
  let r = $I(t, Rf.Decimal),
    o = uE(r, Ge(t, he.MinusSign));
  return sE(e, o, t, he.Group, he.Decimal, n);
}
function uE(e, t = "-") {
  let n = {
      minInt: 1,
      minFrac: 0,
      maxFrac: 0,
      posPre: "",
      posSuf: "",
      negPre: "",
      negSuf: "",
      gSize: 0,
      lgSize: 0,
    },
    r = e.split(oE),
    o = r[0],
    i = r[1],
    s =
      o.indexOf(Mo) !== -1
        ? o.split(Mo)
        : [
            o.substring(0, o.lastIndexOf(On) + 1),
            o.substring(o.lastIndexOf(On) + 1),
          ],
    a = s[0],
    u = s[1] || "";
  n.posPre = a.substring(0, a.indexOf(Ia));
  for (let l = 0; l < u.length; l++) {
    let d = u.charAt(l);
    d === On
      ? (n.minFrac = n.maxFrac = l + 1)
      : d === Ia
      ? (n.maxFrac = l + 1)
      : (n.posSuf += d);
  }
  let c = a.split(iE);
  if (
    ((n.gSize = c[1] ? c[1].length : 0),
    (n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0),
    i)
  ) {
    let l = o.length - n.posPre.length - n.posSuf.length,
      d = i.indexOf(Ia);
    (n.negPre = i.substring(0, d).replace(/'/g, "")),
      (n.negSuf = i.slice(d + l).replace(/'/g, ""));
  } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
  return n;
}
function cE(e) {
  if (e.digits[0] === 0) return e;
  let t = e.digits.length - e.integerLen;
  return (
    e.exponent
      ? (e.exponent += 2)
      : (t === 0 ? e.digits.push(0, 0) : t === 1 && e.digits.push(0),
        (e.integerLen += 2)),
    e
  );
}
function lE(e) {
  let t = Math.abs(e) + "",
    n = 0,
    r,
    o,
    i,
    s,
    a;
  for (
    (o = t.indexOf(Mo)) > -1 && (t = t.replace(Mo, "")),
      (i = t.search(/e/i)) > 0
        ? (o < 0 && (o = i), (o += +t.slice(i + 1)), (t = t.substring(0, i)))
        : o < 0 && (o = t.length),
      i = 0;
    t.charAt(i) === On;
    i++
  );
  if (i === (a = t.length)) (r = [0]), (o = 1);
  else {
    for (a--; t.charAt(a) === On; ) a--;
    for (o -= i, r = [], s = 0; i <= a; i++, s++) r[s] = Number(t.charAt(i));
  }
  return (
    o > Mf && ((r = r.splice(0, Mf - 1)), (n = o - 1), (o = 1)),
    { digits: r, exponent: n, integerLen: o }
  );
}
function dE(e, t, n) {
  if (t > n)
    throw new Error(
      `The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`
    );
  let r = e.digits,
    o = r.length - e.integerLen,
    i = Math.min(Math.max(t, o), n),
    s = i + e.integerLen,
    a = r[s];
  if (s > 0) {
    r.splice(Math.max(e.integerLen, s));
    for (let d = s; d < r.length; d++) r[d] = 0;
  } else {
    (o = Math.max(0, o)),
      (e.integerLen = 1),
      (r.length = Math.max(1, (s = i + 1))),
      (r[0] = 0);
    for (let d = 1; d < s; d++) r[d] = 0;
  }
  if (a >= 5)
    if (s - 1 < 0) {
      for (let d = 0; d > s; d--) r.unshift(0), e.integerLen++;
      r.unshift(1), e.integerLen++;
    } else r[s - 1]++;
  for (; o < Math.max(0, i); o++) r.push(0);
  let u = i !== 0,
    c = t + e.integerLen,
    l = r.reduceRight(function (d, h, f, p) {
      return (
        (h = h + d),
        (p[f] = h < 10 ? h : h - 10),
        u && (p[f] === 0 && f >= c ? p.pop() : (u = !1)),
        h >= 10 ? 1 : 0
      );
    }, 0);
  l && (r.unshift(l), e.integerLen++);
}
function Ea(e) {
  let t = parseInt(e);
  if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + e);
  return t;
}
function ox(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var wa = class {
    constructor(t, n, r, o) {
      (this.$implicit = t),
        (this.ngForOf = n),
        (this.index = r),
        (this.count = o);
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  ix = (() => {
    class e {
      set ngForOf(n) {
        (this._ngForOf = n), (this._ngForOfDirty = !0);
      }
      set ngForTrackBy(n) {
        this._trackByFn = n;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      constructor(n, r, o) {
        (this._viewContainer = n),
          (this._template = r),
          (this._differs = o),
          (this._ngForOf = null),
          (this._ngForOfDirty = !0),
          (this._differ = null);
      }
      set ngForTemplate(n) {
        n && (this._template = n);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let n = this._ngForOf;
          if (!this._differ && n)
            if (0)
              try {
              } catch {}
            else this._differ = this._differs.find(n).create(this.ngForTrackBy);
        }
        if (this._differ) {
          let n = this._differ.diff(this._ngForOf);
          n && this._applyChanges(n);
        }
      }
      _applyChanges(n) {
        let r = this._viewContainer;
        n.forEachOperation((o, i, s) => {
          if (o.previousIndex == null)
            r.createEmbeddedView(
              this._template,
              new wa(o.item, this._ngForOf, -1, -1),
              s === null ? void 0 : s
            );
          else if (s == null) r.remove(i === null ? void 0 : i);
          else if (i !== null) {
            let a = r.get(i);
            r.move(a, s), Sf(a, o);
          }
        });
        for (let o = 0, i = r.length; o < i; o++) {
          let a = r.get(o).context;
          (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
        }
        n.forEachIdentityChange((o) => {
          let i = r.get(o.currentIndex);
          Sf(i, o);
        });
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(q(Jt), q(Ct), q(pa));
        };
      }
      static {
        this.ɵdir = no({
          type: e,
          selectors: [["", "ngFor", "", "ngForOf", ""]],
          inputs: {
            ngForOf: "ngForOf",
            ngForTrackBy: "ngForTrackBy",
            ngForTemplate: "ngForTemplate",
          },
          standalone: !0,
        });
      }
    }
    return e;
  })();
function Sf(e, t) {
  e.context.$implicit = t.item;
}
var sx = (() => {
    class e {
      constructor(n, r) {
        (this._viewContainer = n),
          (this._context = new Ca()),
          (this._thenTemplateRef = null),
          (this._elseTemplateRef = null),
          (this._thenViewRef = null),
          (this._elseViewRef = null),
          (this._thenTemplateRef = r);
      }
      set ngIf(n) {
        (this._context.$implicit = this._context.ngIf = n), this._updateView();
      }
      set ngIfThen(n) {
        xf("ngIfThen", n),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(n) {
        xf("ngIfElse", n),
          (this._elseTemplateRef = n),
          (this._elseViewRef = null),
          this._updateView();
      }
      _updateView() {
        this._context.$implicit
          ? this._thenViewRef ||
            (this._viewContainer.clear(),
            (this._elseViewRef = null),
            this._thenTemplateRef &&
              (this._thenViewRef = this._viewContainer.createEmbeddedView(
                this._thenTemplateRef,
                this._context
              )))
          : this._elseViewRef ||
            (this._viewContainer.clear(),
            (this._thenViewRef = null),
            this._elseTemplateRef &&
              (this._elseViewRef = this._viewContainer.createEmbeddedView(
                this._elseTemplateRef,
                this._context
              )));
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(q(Jt), q(Ct));
        };
      }
      static {
        this.ɵdir = no({
          type: e,
          selectors: [["", "ngIf", ""]],
          inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  Ca = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function xf(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${X(t)}'.`);
}
var ax = (() => {
  class e {
    constructor(n, r, o) {
      (this._ngEl = n),
        (this._differs = r),
        (this._renderer = o),
        (this._ngStyle = null),
        (this._differ = null);
    }
    set ngStyle(n) {
      (this._ngStyle = n),
        !this._differ && n && (this._differ = this._differs.find(n).create());
    }
    ngDoCheck() {
      if (this._differ) {
        let n = this._differ.diff(this._ngStyle);
        n && this._applyChanges(n);
      }
    }
    _setStyle(n, r) {
      let [o, i] = n.split("."),
        s = o.indexOf("-") === -1 ? void 0 : Dn.DashCase;
      r != null
        ? this._renderer.setStyle(
            this._ngEl.nativeElement,
            o,
            i ? `${r}${i}` : r,
            s
          )
        : this._renderer.removeStyle(this._ngEl.nativeElement, o, s);
    }
    _applyChanges(n) {
      n.forEachRemovedItem((r) => this._setStyle(r.key, null)),
        n.forEachAddedItem((r) => this._setStyle(r.key, r.currentValue)),
        n.forEachChangedItem((r) => this._setStyle(r.key, r.currentValue));
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(q(_t), q(ga), q(ca));
      };
    }
    static {
      this.ɵdir = no({
        type: e,
        selectors: [["", "ngStyle", ""]],
        inputs: { ngStyle: "ngStyle" },
        standalone: !0,
      });
    }
  }
  return e;
})();
function jf(e, t) {
  return new C(2100, !1);
}
var fE = "mediumDate",
  hE = new T(""),
  pE = new T(""),
  ux = (() => {
    class e {
      constructor(n, r, o) {
        (this.locale = n),
          (this.defaultTimezone = r),
          (this.defaultOptions = o);
      }
      transform(n, r, o, i) {
        if (n == null || n === "" || n !== n) return null;
        try {
          let s = r ?? this.defaultOptions?.dateFormat ?? fE,
            a =
              o ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return WI(n, s, i || this.locale, a);
        } catch (s) {
          throw jf(e, s.message);
        }
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(q(An, 16), q(hE, 24), q(pE, 24));
        };
      }
      static {
        this.ɵpipe = Ts({ name: "date", type: e, pure: !0, standalone: !0 });
      }
    }
    return e;
  })();
var cx = (() => {
  class e {
    constructor(n) {
      this._locale = n;
    }
    transform(n, r, o) {
      if (!gE(n)) return null;
      o ||= this._locale;
      try {
        let i = mE(n);
        return aE(i, o, r);
      } catch (i) {
        throw jf(e, i.message);
      }
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(q(An, 16));
      };
    }
    static {
      this.ɵpipe = Ts({ name: "number", type: e, pure: !0, standalone: !0 });
    }
  }
  return e;
})();
function gE(e) {
  return !(e == null || e === "" || e !== e);
}
function mE(e) {
  if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
    return Number(e);
  if (typeof e != "number") throw new Error(`${e} is not a number`);
  return e;
}
var lx = (() => {
    class e {
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵmod = bc({ type: e });
      }
      static {
        this.ɵinj = uc({});
      }
    }
    return e;
  })(),
  yE = "browser",
  DE = "server";
function dx(e) {
  return e === yE;
}
function fx(e) {
  return e === DE;
}
var Tf = class {};
var _a = (function (e) {
    return (
      (e[(e.State = 0)] = "State"),
      (e[(e.Transition = 1)] = "Transition"),
      (e[(e.Sequence = 2)] = "Sequence"),
      (e[(e.Group = 3)] = "Group"),
      (e[(e.Animate = 4)] = "Animate"),
      (e[(e.Keyframes = 5)] = "Keyframes"),
      (e[(e.Style = 6)] = "Style"),
      (e[(e.Trigger = 7)] = "Trigger"),
      (e[(e.Reference = 8)] = "Reference"),
      (e[(e.AnimateChild = 9)] = "AnimateChild"),
      (e[(e.AnimateRef = 10)] = "AnimateRef"),
      (e[(e.Query = 11)] = "Query"),
      (e[(e.Stagger = 12)] = "Stagger"),
      e
    );
  })(_a || {}),
  gx = "*";
function mx(e, t = null) {
  return { type: _a.Sequence, steps: e, options: t };
}
function yx(e) {
  return { type: _a.Style, styles: e, offset: null };
}
var Vf = class {
    constructor(t = 0, n = 0) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this._started = !1),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._position = 0),
        (this.parentPlayer = null),
        (this.totalTime = t + n);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        (this._started = !0);
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), (this._onStartFns = []);
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this.hasStarted() || this._onStart(),
        this.finish(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      (this._started = !1),
        (this._finished = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  Bf = class {
    constructor(t) {
      (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._onDestroyFns = []),
        (this.parentPlayer = null),
        (this.totalTime = 0),
        (this.players = t);
      let n = 0,
        r = 0,
        o = 0,
        i = this.players.length;
      i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
            s.onDone(() => {
              ++n == i && this._onFinish();
            }),
              s.onDestroy(() => {
                ++r == i && this._onDestroy();
              }),
              s.onStart(() => {
                ++o == i && this._onStart();
              });
          }),
        (this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0
        ));
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        ((this._started = !0),
        this._onStartFns.forEach((t) => t()),
        (this._onStartFns = []));
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._onFinish(),
        this.players.forEach((t) => t.destroy()),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1);
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => (n === null || r.totalTime > n.totalTime ? r : n),
        null
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  Dx = "!";
export {
  Re as a,
  Pe as b,
  vE as c,
  $ as d,
  eh as e,
  x as f,
  Uo as g,
  zo as h,
  xe as i,
  nn as j,
  on as k,
  Ze as l,
  lh as m,
  dh as n,
  fh as o,
  ct as p,
  je as q,
  Ih as r,
  lt as s,
  lr as t,
  wh as u,
  Ch as v,
  dt as w,
  gu as x,
  bh as y,
  _h as z,
  sn as A,
  Wo as B,
  Mh as C,
  Sh as D,
  Nh as E,
  qo as F,
  Zo as G,
  Ah as H,
  Oh as I,
  Fh as J,
  Rh as K,
  Ph as L,
  kh as M,
  Lh as N,
  jh as O,
  C as P,
  sc as Q,
  j as R,
  uc as S,
  H0 as T,
  T as U,
  b as V,
  ie as W,
  I as X,
  hn as Y,
  U0 as Z,
  bc as _,
  no as $,
  Nc as aa,
  Rc as ba,
  Je as ca,
  z0 as da,
  $c as ea,
  G0 as fa,
  W0 as ga,
  q0 as ha,
  Z0 as ia,
  Y0 as ja,
  _g as ka,
  et as la,
  ao as ma,
  Ie as na,
  oe as oa,
  Gt as pa,
  _t as qa,
  Q0 as ra,
  Gg as sa,
  qg as ta,
  zs as ua,
  K0 as va,
  J0 as wa,
  Gs as xa,
  Ys as ya,
  X0 as za,
  eS as Aa,
  tS as Ba,
  nS as Ca,
  rS as Da,
  oS as Ea,
  pm as Fa,
  iS as Ga,
  xm as Ha,
  sS as Ia,
  Dn as Ja,
  aS as Ka,
  q as La,
  uS as Ma,
  Wt as Na,
  qr as Oa,
  ca as Pa,
  Jt as Qa,
  Mt as Ra,
  dS as Sa,
  FD as Ta,
  VD as Ua,
  ss as Va,
  BD as Wa,
  UD as Xa,
  WD as Ya,
  QD as Za,
  cv as _a,
  lv as $a,
  fS as ab,
  af as bb,
  uf as cb,
  Cv as db,
  hS as eb,
  Tv as fb,
  kv as gb,
  pS as hb,
  gS as ib,
  mS as jb,
  yS as kb,
  DS as lb,
  vS as mb,
  IS as nb,
  ES as ob,
  wS as pb,
  Uv as qb,
  zv as rb,
  Gv as sb,
  CS as tb,
  Wv as ub,
  bS as vb,
  _S as wb,
  MS as xb,
  SS as yb,
  xS as zb,
  TS as Ab,
  ha as Bb,
  yf as Cb,
  Nn as Db,
  Df as Eb,
  NS as Fb,
  AS as Gb,
  Ef as Hb,
  OS as Ib,
  FS as Jb,
  _I as Kb,
  MI as Lb,
  RS as Mb,
  SI as Nb,
  ma as Ob,
  rx as Pb,
  wf as Qb,
  Af as Rb,
  OI as Sb,
  ox as Tb,
  ix as Ub,
  sx as Vb,
  ax as Wb,
  ux as Xb,
  cx as Yb,
  lx as Zb,
  yE as _b,
  dx as $b,
  fx as ac,
  Tf as bc,
  _a as cc,
  gx as dc,
  mx as ec,
  yx as fc,
  Vf as gc,
  Bf as hc,
  Dx as ic,
};
