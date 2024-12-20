var hg = Object.defineProperty,
  pg = Object.defineProperties;
var gg = Object.getOwnPropertyDescriptors;
var Dr = Object.getOwnPropertySymbols;
var Eu = Object.prototype.hasOwnProperty,
  wu = Object.prototype.propertyIsEnumerable;
var Du = (e, t, n) =>
    t in e
      ? hg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  _e = (e, t) => {
    for (var n in (t ||= {})) Eu.call(t, n) && Du(e, n, t[n]);
    if (Dr) for (var n of Dr(t)) wu.call(t, n) && Du(e, n, t[n]);
    return e;
  },
  nt = (e, t) => pg(e, gg(t));
var _u = (e, t) => {
  var n = {};
  for (var r in e) Eu.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && Dr)
    for (var r of Dr(e)) t.indexOf(r) < 0 && wu.call(e, r) && (n[r] = e[r]);
  return n;
};
var mg = (e, t, n) =>
  new Promise((r, o) => {
    var i = (l) => {
        try {
          a(n.next(l));
        } catch (u) {
          o(u);
        }
      },
      s = (l) => {
        try {
          a(n.throw(l));
        } catch (u) {
          o(u);
        }
      },
      a = (l) => (l.done ? r(l.value) : Promise.resolve(l.value).then(i, s));
    a((n = n.apply(e, t)).next());
  });
function Iu(e, t) {
  return Object.is(e, t);
}
var te = null,
  Er = !1,
  wr = 1,
  rt = Symbol("SIGNAL");
function R(e) {
  let t = te;
  return (te = e), t;
}
function Cu() {
  return te;
}
var Fn = {
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
function Ri(e) {
  if (Er) throw new Error("");
  if (te === null) return;
  te.consumerOnSignalRead(e);
  let t = te.nextProducerIndex++;
  if (
    (br(te), t < te.producerNode.length && te.producerNode[t] !== e && Pn(te))
  ) {
    let n = te.producerNode[t];
    Cr(n, te.producerIndexOfThis[t]);
  }
  te.producerNode[t] !== e &&
    ((te.producerNode[t] = e),
    (te.producerIndexOfThis[t] = Pn(te) ? Tu(e, te, t) : 0)),
    (te.producerLastReadVersion[t] = e.version);
}
function yg() {
  wr++;
}
function bu(e) {
  if (!(Pn(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === wr)) {
    if (!e.producerMustRecompute(e) && !Li(e)) {
      (e.dirty = !1), (e.lastCleanEpoch = wr);
      return;
    }
    e.producerRecomputeValue(e), (e.dirty = !1), (e.lastCleanEpoch = wr);
  }
}
function Su(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Er;
  Er = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || vg(n);
  } finally {
    Er = t;
  }
}
function Mu() {
  return te?.consumerAllowSignalWrites !== !1;
}
function vg(e) {
  (e.dirty = !0), Su(e), e.consumerMarkedDirty?.(e);
}
function Ir(e) {
  return e && (e.nextProducerIndex = 0), R(e);
}
function ki(e, t) {
  if (
    (R(t),
    !(
      !e ||
      e.producerNode === void 0 ||
      e.producerIndexOfThis === void 0 ||
      e.producerLastReadVersion === void 0
    ))
  ) {
    if (Pn(e))
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
        Cr(e.producerNode[n], e.producerIndexOfThis[n]);
    for (; e.producerNode.length > e.nextProducerIndex; )
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
  }
}
function Li(e) {
  br(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t],
      r = e.producerLastReadVersion[t];
    if (r !== n.version || (bu(n), r !== n.version)) return !0;
  }
  return !1;
}
function ji(e) {
  if ((br(e), Pn(e)))
    for (let t = 0; t < e.producerNode.length; t++)
      Cr(e.producerNode[t], e.producerIndexOfThis[t]);
  (e.producerNode.length =
    e.producerLastReadVersion.length =
    e.producerIndexOfThis.length =
      0),
    e.liveConsumerNode &&
      (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Tu(e, t, n) {
  if ((Nu(e), e.liveConsumerNode.length === 0 && xu(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      e.producerIndexOfThis[r] = Tu(e.producerNode[r], e, r);
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function Cr(e, t) {
  if ((Nu(e), e.liveConsumerNode.length === 1 && xu(e)))
    for (let r = 0; r < e.producerNode.length; r++)
      Cr(e.producerNode[r], e.producerIndexOfThis[r]);
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
    br(o), (o.producerIndexOfThis[r] = t);
  }
}
function Pn(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function br(e) {
  (e.producerNode ??= []),
    (e.producerIndexOfThis ??= []),
    (e.producerLastReadVersion ??= []);
}
function Nu(e) {
  (e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []);
}
function xu(e) {
  return e.producerNode !== void 0;
}
function Au(e) {
  let t = Object.create(Dg);
  t.computation = e;
  let n = () => {
    if ((bu(t), Ri(t), t.value === _r)) throw t.error;
    return t.value;
  };
  return (n[rt] = t), n;
}
var Pi = Symbol("UNSET"),
  Fi = Symbol("COMPUTING"),
  _r = Symbol("ERRORED"),
  Dg = nt(_e({}, Fn), {
    value: Pi,
    dirty: !0,
    error: null,
    equal: Iu,
    producerMustRecompute(e) {
      return e.value === Pi || e.value === Fi;
    },
    producerRecomputeValue(e) {
      if (e.value === Fi) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = Fi;
      let n = Ir(e),
        r;
      try {
        r = e.computation();
      } catch (o) {
        (r = _r), (e.error = o);
      } finally {
        ki(e, n);
      }
      if (t !== Pi && t !== _r && r !== _r && e.equal(t, r)) {
        e.value = t;
        return;
      }
      (e.value = r), e.version++;
    },
  });
function Eg() {
  throw new Error();
}
var Ou = Eg;
function Pu() {
  Ou();
}
function Fu(e) {
  Ou = e;
}
var wg = null;
function Ru(e) {
  let t = Object.create(Lu);
  t.value = e;
  let n = () => (Ri(t), t.value);
  return (n[rt] = t), n;
}
function Vi(e, t) {
  Mu() || Pu(), e.equal(e.value, t) || ((e.value = t), _g(e));
}
function ku(e, t) {
  Mu() || Pu(), Vi(e, t(e.value));
}
var Lu = nt(_e({}, Fn), { equal: Iu, value: void 0 });
function _g(e) {
  e.version++, yg(), Su(e), wg?.();
}
function C(e) {
  return typeof e == "function";
}
function sn(e) {
  let n = e((r) => {
    Error.call(r), (r.stack = new Error().stack);
  });
  return (
    (n.prototype = Object.create(Error.prototype)),
    (n.prototype.constructor = n),
    n
  );
}
var Sr = sn(
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
function Ot(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var Y = class e {
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
      if (C(r))
        try {
          r();
        } catch (i) {
          t = i instanceof Sr ? i.errors : [i];
        }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o)
          try {
            ju(i);
          } catch (s) {
            (t = t ?? []),
              s instanceof Sr ? (t = [...t, ...s.errors]) : t.push(s);
          }
      }
      if (t) throw new Sr(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this)
      if (this.closed) ju(t);
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
    n === t ? (this._parentage = null) : Array.isArray(n) && Ot(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && Ot(n, t), t instanceof e && t._removeParent(this);
  }
};
Y.EMPTY = (() => {
  let e = new Y();
  return (e.closed = !0), e;
})();
var Bi = Y.EMPTY;
function Mr(e) {
  return (
    e instanceof Y ||
    (e && "closed" in e && C(e.remove) && C(e.add) && C(e.unsubscribe))
  );
}
function ju(e) {
  C(e) ? e() : e.unsubscribe();
}
var Re = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var an = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = an;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = an;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Tr(e) {
  an.setTimeout(() => {
    let { onUnhandledError: t } = Re;
    if (t) t(e);
    else throw e;
  });
}
function Rn() {}
var Vu = $i("C", void 0, void 0);
function Bu(e) {
  return $i("E", void 0, e);
}
function $u(e) {
  return $i("N", e, void 0);
}
function $i(e, t, n) {
  return { kind: e, value: t, error: n };
}
var Pt = null;
function ln(e) {
  if (Re.useDeprecatedSynchronousErrorHandling) {
    let t = !Pt;
    if ((t && (Pt = { errorThrown: !1, error: null }), e(), t)) {
      let { errorThrown: n, error: r } = Pt;
      if (((Pt = null), n)) throw r;
    }
  } else e();
}
function Hu(e) {
  Re.useDeprecatedSynchronousErrorHandling &&
    Pt &&
    ((Pt.errorThrown = !0), (Pt.error = e));
}
var Ft = class extends Y {
    constructor(t) {
      super(),
        (this.isStopped = !1),
        t
          ? ((this.destination = t), Mr(t) && t.add(this))
          : (this.destination = bg);
    }
    static create(t, n, r) {
      return new ot(t, n, r);
    }
    next(t) {
      this.isStopped ? Ui($u(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped
        ? Ui(Bu(t), this)
        : ((this.isStopped = !0), this._error(t));
    }
    complete() {
      this.isStopped ? Ui(Vu, this) : ((this.isStopped = !0), this._complete());
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
  Ig = Function.prototype.bind;
function Hi(e, t) {
  return Ig.call(e, t);
}
var zi = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next)
        try {
          n.next(t);
        } catch (r) {
          Nr(r);
        }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error)
        try {
          n.error(t);
        } catch (r) {
          Nr(r);
        }
      else Nr(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete)
        try {
          t.complete();
        } catch (n) {
          Nr(n);
        }
    }
  },
  ot = class extends Ft {
    constructor(t, n, r) {
      super();
      let o;
      if (C(t) || !t)
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      else {
        let i;
        this && Re.useDeprecatedNextContext
          ? ((i = Object.create(t)),
            (i.unsubscribe = () => this.unsubscribe()),
            (o = {
              next: t.next && Hi(t.next, i),
              error: t.error && Hi(t.error, i),
              complete: t.complete && Hi(t.complete, i),
            }))
          : (o = t);
      }
      this.destination = new zi(o);
    }
  };
function Nr(e) {
  Re.useDeprecatedSynchronousErrorHandling ? Hu(e) : Tr(e);
}
function Cg(e) {
  throw e;
}
function Ui(e, t) {
  let { onStoppedNotification: n } = Re;
  n && an.setTimeout(() => n(e, t));
}
var bg = { closed: !0, next: Rn, error: Cg, complete: Rn };
var un = (typeof Symbol == "function" && Symbol.observable) || "@@observable";
function de(e) {
  return e;
}
function Sg(...e) {
  return qi(e);
}
function qi(e) {
  return e.length === 0
    ? de
    : e.length === 1
    ? e[0]
    : function (n) {
        return e.reduce((r, o) => o(r), n);
      };
}
var L = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return (r.source = this), (r.operator = n), r;
    }
    subscribe(n, r, o) {
      let i = Tg(n) ? n : new ot(n, r, o);
      return (
        ln(() => {
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
        (r = Uu(r)),
        new r((o, i) => {
          let s = new ot({
            next: (a) => {
              try {
                n(a);
              } catch (l) {
                i(l), s.unsubscribe();
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
    [un]() {
      return this;
    }
    pipe(...n) {
      return qi(n)(this);
    }
    toPromise(n) {
      return (
        (n = Uu(n)),
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
function Uu(e) {
  var t;
  return (t = e ?? Re.Promise) !== null && t !== void 0 ? t : Promise;
}
function Mg(e) {
  return e && C(e.next) && C(e.error) && C(e.complete);
}
function Tg(e) {
  return (e && e instanceof Ft) || (Mg(e) && Mr(e));
}
function Gi(e) {
  return C(e?.lift);
}
function N(e) {
  return (t) => {
    if (Gi(t))
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
function x(e, t, n, r, o) {
  return new Wi(e, t, n, r, o);
}
var Wi = class extends Ft {
  constructor(t, n, r, o, i, s) {
    super(t),
      (this.onFinalize = i),
      (this.shouldUnsubscribe = s),
      (this._next = n
        ? function (a) {
            try {
              n(a);
            } catch (l) {
              t.error(l);
            }
          }
        : super._next),
      (this._error = o
        ? function (a) {
            try {
              o(a);
            } catch (l) {
              t.error(l);
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
function Qi() {
  return N((e, t) => {
    let n = null;
    e._refCount++;
    let r = x(t, void 0, void 0, void 0, () => {
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
var Zi = class extends L {
  constructor(t, n) {
    super(),
      (this.source = t),
      (this.subjectFactory = n),
      (this._subject = null),
      (this._refCount = 0),
      (this._connection = null),
      Gi(t) && (this.lift = t.lift);
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
      t = this._connection = new Y();
      let n = this.getSubject();
      t.add(
        this.source.subscribe(
          x(
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
        t.closed && ((this._connection = null), (t = Y.EMPTY));
    }
    return t;
  }
  refCount() {
    return Qi()(this);
  }
};
var zu = sn(
  (e) =>
    function () {
      e(this),
        (this.name = "ObjectUnsubscribedError"),
        (this.message = "object unsubscribed");
    }
);
var Ae = (() => {
    class e extends L {
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
        let r = new xr(this, this);
        return (r.operator = n), r;
      }
      _throwIfClosed() {
        if (this.closed) throw new zu();
      }
      next(n) {
        ln(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        ln(() => {
          if ((this._throwIfClosed(), !this.isStopped)) {
            (this.hasError = this.isStopped = !0), (this.thrownError = n);
            let { observers: r } = this;
            for (; r.length; ) r.shift().error(n);
          }
        });
      }
      complete() {
        ln(() => {
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
          ? Bi
          : ((this.currentObservers = null),
            i.push(n),
            new Y(() => {
              (this.currentObservers = null), Ot(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new L();
        return (n.source = this), n;
      }
    }
    return (e.create = (t, n) => new xr(t, n)), e;
  })(),
  xr = class extends Ae {
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
        : Bi;
    }
  };
var kn = class extends Ae {
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
var Ln = {
  now() {
    return (Ln.delegate || Date).now();
  },
  delegate: void 0,
};
var Ar = class extends Ae {
  constructor(t = 1 / 0, n = 1 / 0, r = Ln) {
    super(),
      (this._bufferSize = t),
      (this._windowTime = n),
      (this._timestampProvider = r),
      (this._buffer = []),
      (this._infiniteTimeWindow = !0),
      (this._infiniteTimeWindow = n === 1 / 0),
      (this._bufferSize = Math.max(1, t)),
      (this._windowTime = Math.max(1, n));
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if ((t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o)) {
      let s = n.now(),
        a = 0;
      for (let l = 1; l < r.length && r[l] <= s; l += 2) a = l;
      a && r.splice(0, a + 1);
    }
  }
};
var Or = class extends Y {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var jn = {
  setInterval(e, t, ...n) {
    let { delegate: r } = jn;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = jn;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Pr = class extends Or {
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
    return jn.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && jn.clearInterval(n);
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
        Ot(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        (this.delay = null),
        super.unsubscribe();
    }
  }
};
var cn = class e {
  constructor(t, n = e.now) {
    (this.schedulerActionCtor = t), (this.now = n);
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
cn.now = Ln.now;
var Fr = class extends cn {
  constructor(t, n = cn.now) {
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
var qu = new Fr(Pr);
var Vn = new L((e) => e.complete());
function Gu(e) {
  return e && C(e.schedule);
}
function Wu(e) {
  return e[e.length - 1];
}
function Rr(e) {
  return C(Wu(e)) ? e.pop() : void 0;
}
function gt(e) {
  return Gu(Wu(e)) ? e.pop() : void 0;
}
function Zu(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(c) {
      try {
        u(r.next(c));
      } catch (d) {
        s(d);
      }
    }
    function l(c) {
      try {
        u(r.throw(c));
      } catch (d) {
        s(d);
      }
    }
    function u(c) {
      c.done ? i(c.value) : o(c.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}
function Qu(e) {
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
function Rt(e) {
  return this instanceof Rt ? ((this.v = e), this) : new Rt(e);
}
function Ku(e, t, n) {
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
      ((o[f] = function (g) {
        return new Promise(function (D, v) {
          i.push([f, g, D, v]) > 1 || l(f, g);
        });
      }),
      p && (o[f] = p(o[f])));
  }
  function l(f, p) {
    try {
      u(r[f](p));
    } catch (g) {
      h(i[0][3], g);
    }
  }
  function u(f) {
    f.value instanceof Rt
      ? Promise.resolve(f.value.v).then(c, d)
      : h(i[0][2], f);
  }
  function c(f) {
    l("next", f);
  }
  function d(f) {
    l("throw", f);
  }
  function h(f, p) {
    f(p), i.shift(), i.length && l(i[0][0], i[0][1]);
  }
}
function Yu(e) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator],
    n;
  return t
    ? t.call(e)
    : ((e = typeof Qu == "function" ? Qu(e) : e[Symbol.iterator]()),
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
        return new Promise(function (a, l) {
          (s = e[i](s)), o(a, l, s.done, s.value);
        });
      };
  }
  function o(i, s, a, l) {
    Promise.resolve(l).then(function (u) {
      i({ value: u, done: a });
    }, s);
  }
}
var kr = (e) => e && typeof e.length == "number" && typeof e != "function";
function Lr(e) {
  return C(e?.then);
}
function jr(e) {
  return C(e[un]);
}
function Vr(e) {
  return Symbol.asyncIterator && C(e?.[Symbol.asyncIterator]);
}
function Br(e) {
  return new TypeError(
    `You provided ${
      e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
  );
}
function Ng() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var $r = Ng();
function Hr(e) {
  return C(e?.[$r]);
}
function Ur(e) {
  return Ku(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Rt(n.read());
        if (o) return yield Rt(void 0);
        yield yield Rt(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function zr(e) {
  return C(e?.getReader);
}
function Q(e) {
  if (e instanceof L) return e;
  if (e != null) {
    if (jr(e)) return xg(e);
    if (kr(e)) return Ag(e);
    if (Lr(e)) return Og(e);
    if (Vr(e)) return Ju(e);
    if (Hr(e)) return Pg(e);
    if (zr(e)) return Fg(e);
  }
  throw Br(e);
}
function xg(e) {
  return new L((t) => {
    let n = e[un]();
    if (C(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable"
    );
  });
}
function Ag(e) {
  return new L((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Og(e) {
  return new L((t) => {
    e.then(
      (n) => {
        t.closed || (t.next(n), t.complete());
      },
      (n) => t.error(n)
    ).then(null, Tr);
  });
}
function Pg(e) {
  return new L((t) => {
    for (let n of e) if ((t.next(n), t.closed)) return;
    t.complete();
  });
}
function Ju(e) {
  return new L((t) => {
    Rg(e, t).catch((n) => t.error(n));
  });
}
function Fg(e) {
  return Ju(Ur(e));
}
function Rg(e, t) {
  var n, r, o, i;
  return Zu(this, void 0, void 0, function* () {
    try {
      for (n = Yu(e); (r = yield n.next()), !r.done; ) {
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
function me(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if ((e.add(i), !o)) return i;
}
function qr(e, t = 0) {
  return N((n, r) => {
    n.subscribe(
      x(
        r,
        (o) => me(r, e, () => r.next(o), t),
        () => me(r, e, () => r.complete(), t),
        (o) => me(r, e, () => r.error(o), t)
      )
    );
  });
}
function Gr(e, t = 0) {
  return N((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function Xu(e, t) {
  return Q(e).pipe(Gr(t), qr(t));
}
function ec(e, t) {
  return Q(e).pipe(Gr(t), qr(t));
}
function tc(e, t) {
  return new L((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function nc(e, t) {
  return new L((n) => {
    let r;
    return (
      me(n, t, () => {
        (r = e[$r]()),
          me(
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
      () => C(r?.return) && r.return()
    );
  });
}
function Wr(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new L((n) => {
    me(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      me(
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
function rc(e, t) {
  return Wr(Ur(e), t);
}
function oc(e, t) {
  if (e != null) {
    if (jr(e)) return Xu(e, t);
    if (kr(e)) return tc(e, t);
    if (Lr(e)) return ec(e, t);
    if (Vr(e)) return Wr(e, t);
    if (Hr(e)) return nc(e, t);
    if (zr(e)) return rc(e, t);
  }
  throw Br(e);
}
function mt(e, t) {
  return t ? oc(e, t) : Q(e);
}
function kg(...e) {
  let t = gt(e);
  return mt(e, t);
}
function Lg(e, t) {
  let n = C(e) ? e : () => e,
    r = (o) => o.error(n());
  return new L(t ? (o) => t.schedule(r, 0, o) : r);
}
function jg(e) {
  return !!e && (e instanceof L || (C(e.lift) && C(e.subscribe)));
}
var kt = sn(
  (e) =>
    function () {
      e(this),
        (this.name = "EmptyError"),
        (this.message = "no elements in sequence");
    }
);
function it(e, t) {
  return N((n, r) => {
    let o = 0;
    n.subscribe(
      x(r, (i) => {
        r.next(e.call(t, i, o++));
      })
    );
  });
}
var { isArray: Vg } = Array;
function Bg(e, t) {
  return Vg(t) ? e(...t) : e(t);
}
function Qr(e) {
  return it((t) => Bg(e, t));
}
var { isArray: $g } = Array,
  { getPrototypeOf: Hg, prototype: Ug, keys: zg } = Object;
function Zr(e) {
  if (e.length === 1) {
    let t = e[0];
    if ($g(t)) return { args: t, keys: null };
    if (qg(t)) {
      let n = zg(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function qg(e) {
  return e && typeof e == "object" && Hg(e) === Ug;
}
function Kr(e, t) {
  return e.reduce((n, r, o) => ((n[r] = t[o]), n), {});
}
function Gg(...e) {
  let t = gt(e),
    n = Rr(e),
    { args: r, keys: o } = Zr(e);
  if (r.length === 0) return mt([], t);
  let i = new L(Wg(r, t, o ? (s) => Kr(o, s) : de));
  return n ? i.pipe(Qr(n)) : i;
}
function Wg(e, t, n = de) {
  return (r) => {
    ic(
      t,
      () => {
        let { length: o } = e,
          i = new Array(o),
          s = o,
          a = o;
        for (let l = 0; l < o; l++)
          ic(
            t,
            () => {
              let u = mt(e[l], t),
                c = !1;
              u.subscribe(
                x(
                  r,
                  (d) => {
                    (i[l] = d), c || ((c = !0), a--), a || r.next(n(i.slice()));
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
function ic(e, t, n) {
  e ? me(n, e, t) : t();
}
function sc(e, t, n, r, o, i, s, a) {
  let l = [],
    u = 0,
    c = 0,
    d = !1,
    h = () => {
      d && !l.length && !u && t.complete();
    },
    f = (g) => (u < r ? p(g) : l.push(g)),
    p = (g) => {
      i && t.next(g), u++;
      let D = !1;
      Q(n(g, c++)).subscribe(
        x(
          t,
          (v) => {
            o?.(v), i ? f(v) : t.next(v);
          },
          () => {
            D = !0;
          },
          void 0,
          () => {
            if (D)
              try {
                for (u--; l.length && u < r; ) {
                  let v = l.shift();
                  s ? me(t, s, () => p(v)) : p(v);
                }
                h();
              } catch (v) {
                t.error(v);
              }
          }
        )
      );
    };
  return (
    e.subscribe(
      x(t, f, () => {
        (d = !0), h();
      })
    ),
    () => {
      a?.();
    }
  );
}
function Lt(e, t, n = 1 / 0) {
  return C(t)
    ? Lt((r, o) => it((i, s) => t(r, i, o, s))(Q(e(r, o))), n)
    : (typeof t == "number" && (n = t), N((r, o) => sc(r, o, e, n)));
}
function ac(e = 1 / 0) {
  return Lt(de, e);
}
function lc() {
  return ac(1);
}
function Yr(...e) {
  return lc()(mt(e, gt(e)));
}
function Qg(e) {
  return new L((t) => {
    Q(e()).subscribe(t);
  });
}
function Zg(...e) {
  let t = Rr(e),
    { args: n, keys: r } = Zr(e),
    o = new L((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s),
        l = s,
        u = s;
      for (let c = 0; c < s; c++) {
        let d = !1;
        Q(n[c]).subscribe(
          x(
            i,
            (h) => {
              d || ((d = !0), u--), (a[c] = h);
            },
            () => l--,
            void 0,
            () => {
              (!l || !d) && (u || i.next(r ? Kr(r, a) : a), i.complete());
            }
          )
        );
      }
    });
  return t ? o.pipe(Qr(t)) : o;
}
function jt(e, t) {
  return N((n, r) => {
    let o = 0;
    n.subscribe(x(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function uc(e) {
  return N((t, n) => {
    let r = null,
      o = !1,
      i;
    (r = t.subscribe(
      x(n, void 0, void 0, (s) => {
        (i = Q(e(s, uc(e)(t)))),
          r ? (r.unsubscribe(), (r = null), i.subscribe(n)) : (o = !0);
      })
    )),
      o && (r.unsubscribe(), (r = null), i.subscribe(n));
  });
}
function cc(e, t, n, r, o) {
  return (i, s) => {
    let a = n,
      l = t,
      u = 0;
    i.subscribe(
      x(
        s,
        (c) => {
          let d = u++;
          (l = a ? e(l, c, d) : ((a = !0), c)), r && s.next(l);
        },
        o &&
          (() => {
            a && s.next(l), s.complete();
          })
      )
    );
  };
}
function Kg(e, t) {
  return C(t) ? Lt(e, t, 1) : Lt(e, 1);
}
function Yg(e, t = qu) {
  return N((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), (o = null);
          let u = i;
          (i = null), r.next(u);
        }
      };
    function l() {
      let u = s + e,
        c = t.now();
      if (c < u) {
        (o = this.schedule(void 0, u - c)), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(
      x(
        r,
        (u) => {
          (i = u), (s = t.now()), o || ((o = t.schedule(l, e)), r.add(o));
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
function Bn(e) {
  return N((t, n) => {
    let r = !1;
    t.subscribe(
      x(
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
function Ki(e) {
  return e <= 0
    ? () => Vn
    : N((t, n) => {
        let r = 0;
        t.subscribe(
          x(n, (o) => {
            ++r <= e && (n.next(o), e <= r && n.complete());
          })
        );
      });
}
function Jg(e) {
  return it(() => e);
}
function Xg(e, t = de) {
  return (
    (e = e ?? em),
    N((n, r) => {
      let o,
        i = !0;
      n.subscribe(
        x(r, (s) => {
          let a = t(s);
          (i || !e(o, a)) && ((i = !1), (o = a), r.next(s));
        })
      );
    })
  );
}
function em(e, t) {
  return e === t;
}
function Jr(e = tm) {
  return N((t, n) => {
    let r = !1;
    t.subscribe(
      x(
        n,
        (o) => {
          (r = !0), n.next(o);
        },
        () => (r ? n.complete() : n.error(e()))
      )
    );
  });
}
function tm() {
  return new kt();
}
function nm(e) {
  return N((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function Yi(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? jt((o, i) => e(o, i, r)) : de,
      Ki(1),
      n ? Bn(t) : Jr(() => new kt())
    );
}
function Ji(e) {
  return e <= 0
    ? () => Vn
    : N((t, n) => {
        let r = [];
        t.subscribe(
          x(
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
function rm(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? jt((o, i) => e(o, i, r)) : de,
      Ji(1),
      n ? Bn(t) : Jr(() => new kt())
    );
}
function om(e, t) {
  return N(cc(e, t, arguments.length >= 2, !0));
}
function es(e = {}) {
  let {
    connector: t = () => new Ae(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      l,
      u = 0,
      c = !1,
      d = !1,
      h = () => {
        a?.unsubscribe(), (a = void 0);
      },
      f = () => {
        h(), (s = l = void 0), (c = d = !1);
      },
      p = () => {
        let g = s;
        f(), g?.unsubscribe();
      };
    return N((g, D) => {
      u++, !d && !c && h();
      let v = (l = l ?? t());
      D.add(() => {
        u--, u === 0 && !d && !c && (a = Xi(p, o));
      }),
        v.subscribe(D),
        !s &&
          u > 0 &&
          ((s = new ot({
            next: (I) => v.next(I),
            error: (I) => {
              (d = !0), h(), (a = Xi(f, n, I)), v.error(I);
            },
            complete: () => {
              (c = !0), h(), (a = Xi(f, r)), v.complete();
            },
          })),
          Q(g).subscribe(s));
    })(i);
  };
}
function Xi(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new ot({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return Q(t(...n)).subscribe(r);
}
function im(e, t, n) {
  let r,
    o = !1;
  return (
    e && typeof e == "object"
      ? ({
          bufferSize: r = 1 / 0,
          windowTime: t = 1 / 0,
          refCount: o = !1,
          scheduler: n,
        } = e)
      : (r = e ?? 1 / 0),
    es({
      connector: () => new Ar(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    })
  );
}
function sm(e) {
  return jt((t, n) => e <= n);
}
function am(...e) {
  let t = gt(e);
  return N((n, r) => {
    (t ? Yr(e, n, t) : Yr(e, n)).subscribe(r);
  });
}
function lm(e, t) {
  return N((n, r) => {
    let o = null,
      i = 0,
      s = !1,
      a = () => s && !o && r.complete();
    n.subscribe(
      x(
        r,
        (l) => {
          o?.unsubscribe();
          let u = 0,
            c = i++;
          Q(e(l, c)).subscribe(
            (o = x(
              r,
              (d) => r.next(t ? t(l, d, c, u++) : d),
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
function um(e) {
  return N((t, n) => {
    Q(e).subscribe(x(n, () => n.complete(), Rn)), !n.closed && t.subscribe(n);
  });
}
function cm(e, t, n) {
  let r = C(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? N((o, i) => {
        var s;
        (s = r.subscribe) === null || s === void 0 || s.call(r);
        let a = !0;
        o.subscribe(
          x(
            i,
            (l) => {
              var u;
              (u = r.next) === null || u === void 0 || u.call(r, l), i.next(l);
            },
            () => {
              var l;
              (a = !1),
                (l = r.complete) === null || l === void 0 || l.call(r),
                i.complete();
            },
            (l) => {
              var u;
              (a = !1),
                (u = r.error) === null || u === void 0 || u.call(r, l),
                i.error(l);
            },
            () => {
              var l, u;
              a && ((l = r.unsubscribe) === null || l === void 0 || l.call(r)),
                (u = r.finalize) === null || u === void 0 || u.call(r);
            }
          )
        );
      })
    : de;
}
var Jc = "https://g.co/ng/security#xss",
  m = class extends Error {
    constructor(t, n) {
      super(Xc(t, n)), (this.code = t);
    }
  };
function Xc(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
function er(e) {
  return { toString: e }.toString();
}
var Xr = "__parameters__";
function dm(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function ed(e, t, n) {
  return er(() => {
    let r = dm(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return (a.annotation = s), a;
      function a(l, u, c) {
        let d = l.hasOwnProperty(Xr)
          ? l[Xr]
          : Object.defineProperty(l, Xr, { value: [] })[Xr];
        for (; d.length <= c; ) d.push(null);
        return (d[c] = d[c] || []).push(s), l;
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
var vt = globalThis;
function H(e) {
  for (let t in e) if (e[t] === H) return t;
  throw Error("Could not find renamed property on target object.");
}
function fm(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function pe(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(pe).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function ys(e, t) {
  return e == null || e === ""
    ? t === null
      ? ""
      : t
    : t == null || t === ""
    ? e
    : e + " " + t;
}
var hm = H({ __forward_ref__: H });
function td(e) {
  return (
    (e.__forward_ref__ = td),
    (e.toString = function () {
      return pe(this());
    }),
    e
  );
}
function fe(e) {
  return nd(e) ? e() : e;
}
function nd(e) {
  return (
    typeof e == "function" && e.hasOwnProperty(hm) && e.__forward_ref__ === td
  );
}
function $(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function xa(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Uo(e) {
  return dc(e, rd) || dc(e, od);
}
function Zx(e) {
  return Uo(e) !== null;
}
function dc(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function pm(e) {
  let t = e && (e[rd] || e[od]);
  return t || null;
}
function fc(e) {
  return e && (e.hasOwnProperty(hc) || e.hasOwnProperty(gm)) ? e[hc] : null;
}
var rd = H({ ɵprov: H }),
  hc = H({ ɵinj: H }),
  od = H({ ngInjectableDef: H }),
  gm = H({ ngInjectorDef: H }),
  k = class {
    constructor(t, n) {
      (this._desc = t),
        (this.ngMetadataName = "InjectionToken"),
        (this.ɵprov = void 0),
        typeof n == "number"
          ? (this.__NG_ELEMENT_ID__ = n)
          : n !== void 0 &&
            (this.ɵprov = $({
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
function id(e) {
  return e && !!e.ɵproviders;
}
var mm = H({ ɵcmp: H }),
  ym = H({ ɵdir: H }),
  vm = H({ ɵpipe: H }),
  Dm = H({ ɵmod: H }),
  go = H({ ɵfac: H }),
  Un = H({ __NG_ELEMENT_ID__: H }),
  pc = H({ __NG_ENV_ID__: H });
function yn(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Em(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
    ? e.type.name || e.type.toString()
    : yn(e);
}
function wm(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new m(-200, e);
}
function Aa(e, t) {
  throw new m(-201, !1);
}
var O = (function (e) {
    return (
      (e[(e.Default = 0)] = "Default"),
      (e[(e.Host = 1)] = "Host"),
      (e[(e.Self = 2)] = "Self"),
      (e[(e.SkipSelf = 4)] = "SkipSelf"),
      (e[(e.Optional = 8)] = "Optional"),
      e
    );
  })(O || {}),
  vs;
function sd() {
  return vs;
}
function ye(e) {
  let t = vs;
  return (vs = e), t;
}
function ad(e, t, n) {
  let r = Uo(e);
  if (r && r.providedIn == "root")
    return r.value === void 0 ? (r.value = r.factory()) : r.value;
  if (n & O.Optional) return null;
  if (t !== void 0) return t;
  Aa(e, "Injector");
}
var _m = {},
  zn = _m,
  Ds = "__NG_DI_FLAG__",
  mo = "ngTempTokenPath",
  Im = "ngTokenPath",
  Cm = /\n/gm,
  bm = "\u0275",
  gc = "__source",
  gn;
function Sm() {
  return gn;
}
function yt(e) {
  let t = gn;
  return (gn = e), t;
}
function Mm(e, t = O.Default) {
  if (gn === void 0) throw new m(-203, !1);
  return gn === null
    ? ad(e, void 0, t)
    : gn.get(e, t & O.Optional ? null : void 0, t);
}
function oe(e, t = O.Default) {
  return (sd() || Mm)(fe(e), t);
}
function M(e, t = O.Default) {
  return oe(e, zo(t));
}
function zo(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function Es(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = fe(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new m(900, !1);
      let o,
        i = O.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s],
          l = Tm(a);
        typeof l == "number" ? (l === -1 ? (o = a.token) : (i |= l)) : (o = a);
      }
      t.push(oe(o, i));
    } else t.push(oe(r));
  }
  return t;
}
function ld(e, t) {
  return (e[Ds] = t), (e.prototype[Ds] = t), e;
}
function Tm(e) {
  return e[Ds];
}
function Nm(e, t, n, r) {
  let o = e[mo];
  throw (
    (t[gc] && o.unshift(t[gc]),
    (e.message = xm(
      `
` + e.message,
      o,
      n,
      r
    )),
    (e[Im] = o),
    (e[mo] = null),
    e)
  );
}
function xm(e, t, n, r = null) {
  e =
    e &&
    e.charAt(0) ===
      `
` &&
    e.charAt(1) == bm
      ? e.slice(2)
      : e;
  let o = pe(t);
  if (Array.isArray(t)) o = t.map(pe).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t)
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : pe(a)));
      }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
    Cm,
    `
  `
  )}`;
}
var ud = ld(ed("Optional"), 8);
var cd = ld(ed("SkipSelf"), 4);
function $t(e, t) {
  let n = e.hasOwnProperty(go);
  return n ? e[go] : null;
}
function Am(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r],
      i = t[r];
    if ((n && ((o = n(o)), (i = n(i))), i !== o)) return !1;
  }
  return !0;
}
function Om(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Oa(e, t) {
  e.forEach((n) => (Array.isArray(n) ? Oa(n, t) : t(n)));
}
function dd(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function yo(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Pm(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function Fm(e, t, n, r) {
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
function Pa(e, t, n) {
  let r = tr(e, t);
  return r >= 0 ? (e[r | 1] = n) : ((r = ~r), Fm(e, r, t, n)), r;
}
function ts(e, t) {
  let n = tr(e, t);
  if (n >= 0) return e[n | 1];
}
function tr(e, t) {
  return Rm(e, t, 1);
}
function Rm(e, t, n) {
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
var vn = {},
  he = [],
  qn = new k(""),
  fd = new k("", -1),
  hd = new k(""),
  vo = class {
    get(t, n = zn) {
      if (n === zn) {
        let r = new Error(`NullInjectorError: No provider for ${pe(t)}!`);
        throw ((r.name = "NullInjectorError"), r);
      }
      return n;
    }
  },
  pd = (function (e) {
    return (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e;
  })(pd || {}),
  Gn = (function (e) {
    return (
      (e[(e.Emulated = 0)] = "Emulated"),
      (e[(e.None = 2)] = "None"),
      (e[(e.ShadowDom = 3)] = "ShadowDom"),
      e
    );
  })(Gn || {}),
  Et = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.SignalBased = 1)] = "SignalBased"),
      (e[(e.HasDecoratorInputTransform = 2)] = "HasDecoratorInputTransform"),
      e
    );
  })(Et || {});
function km(e, t, n) {
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
function ws(e, t, n) {
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
      Lm(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function gd(e) {
  return e === 3 || e === 4 || e === 6;
}
function Lm(e) {
  return e.charCodeAt(0) === 64;
}
function Wn(e, t) {
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
              ? mc(e, n, o, null, t[++r])
              : mc(e, n, o, null, null));
      }
    }
  return e;
}
function mc(e, t, n, r, o) {
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
var md = "ng-template";
function jm(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2)
      if (t[o] === "class" && km(t[o + 1].toLowerCase(), n, 0) !== -1)
        return !0;
  } else if (Fa(e)) return !1;
  if (((o = t.indexOf(1, o)), o > -1)) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string"; )
      if (i.toLowerCase() === n) return !0;
  }
  return !1;
}
function Fa(e) {
  return e.type === 4 && e.value !== md;
}
function Vm(e, t, n) {
  let r = e.type === 4 && !n ? md : e.value;
  return t === r;
}
function Bm(e, t, n) {
  let r = 4,
    o = e.attrs,
    i = o !== null ? Um(o) : 0,
    s = !1;
  for (let a = 0; a < t.length; a++) {
    let l = t[a];
    if (typeof l == "number") {
      if (!s && !ke(r) && !ke(l)) return !1;
      if (s && ke(l)) continue;
      (s = !1), (r = l | (r & 1));
      continue;
    }
    if (!s)
      if (r & 4) {
        if (
          ((r = 2 | (r & 1)),
          (l !== "" && !Vm(e, l, n)) || (l === "" && t.length === 1))
        ) {
          if (ke(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !jm(e, o, l, n)) {
          if (ke(r)) return !1;
          s = !0;
        }
      } else {
        let u = t[++a],
          c = $m(l, o, Fa(e), n);
        if (c === -1) {
          if (ke(r)) return !1;
          s = !0;
          continue;
        }
        if (u !== "") {
          let d;
          if (
            (c > i ? (d = "") : (d = o[c + 1].toLowerCase()), r & 2 && u !== d)
          ) {
            if (ke(r)) return !1;
            s = !0;
          }
        }
      }
  }
  return ke(r) || s;
}
function ke(e) {
  return (e & 1) === 0;
}
function $m(e, t, n, r) {
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
  } else return zm(t, e);
}
function yd(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Bm(e, t[r], n)) return !0;
  return !1;
}
function Hm(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Um(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (gd(n)) return t;
  }
  return e.length;
}
function zm(e, t) {
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
function qm(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function yc(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Gm(e) {
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
      o !== "" && !ke(s) && ((t += yc(i, o)), (o = "")),
        (r = s),
        (i = i || !ke(r));
    n++;
  }
  return o !== "" && (t += yc(i, o)), t;
}
function Wm(e) {
  return e.map(Gm).join(",");
}
function Qm(e) {
  let t = [],
    n = [],
    r = 1,
    o = 2;
  for (; r < e.length; ) {
    let i = e[r];
    if (typeof i == "string")
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    else {
      if (!ke(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
function Kx(e) {
  return er(() => {
    let t = wd(e),
      n = nt(_e({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === pd.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: (t.standalone && e.dependencies) || null,
        getStandaloneInjector: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || Gn.Emulated,
        styles: e.styles || he,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    _d(n);
    let r = e.dependencies;
    return (
      (n.directiveDefs = Dc(r, !1)), (n.pipeDefs = Dc(r, !0)), (n.id = Jm(n)), n
    );
  });
}
function Zm(e) {
  return Ht(e) || vd(e);
}
function Km(e) {
  return e !== null;
}
function Ra(e) {
  return er(() => ({
    type: e.type,
    bootstrap: e.bootstrap || he,
    declarations: e.declarations || he,
    imports: e.imports || he,
    exports: e.exports || he,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function vc(e, t) {
  if (e == null) return vn;
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let o = e[r],
        i,
        s,
        a = Et.None;
      Array.isArray(o)
        ? ((a = o[0]), (i = o[1]), (s = o[2] ?? i))
        : ((i = o), (s = o)),
        t ? ((n[i] = a !== Et.None ? [r, a] : r), (t[i] = s)) : (n[i] = r);
    }
  return n;
}
function qo(e) {
  return er(() => {
    let t = wd(e);
    return _d(t), t;
  });
}
function ka(e) {
  return {
    type: e.type,
    name: e.name,
    factory: null,
    pure: e.pure !== !1,
    standalone: e.standalone === !0,
    onDestroy: e.type.prototype.ngOnDestroy || null,
  };
}
function Ht(e) {
  return e[mm] || null;
}
function vd(e) {
  return e[ym] || null;
}
function Dd(e) {
  return e[vm] || null;
}
function Ym(e) {
  let t = Ht(e) || vd(e) || Dd(e);
  return t !== null ? t.standalone : !1;
}
function Ed(e, t) {
  let n = e[Dm] || null;
  if (!n && t === !0)
    throw new Error(`Type ${pe(e)} does not have '\u0275mod' property.`);
  return n;
}
function wd(e) {
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
    inputConfig: e.inputs || vn,
    exportAs: e.exportAs || null,
    standalone: e.standalone === !0,
    signals: e.signals === !0,
    selectors: e.selectors || he,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: vc(e.inputs, t),
    outputs: vc(e.outputs),
    debugInfo: null,
  };
}
function _d(e) {
  e.features?.forEach((t) => t(e));
}
function Dc(e, t) {
  if (!e) return null;
  let n = t ? Dd : Zm;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Km);
}
function Jm(e) {
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
function Id(e) {
  return { ɵproviders: e };
}
function Xm(...e) {
  return { ɵproviders: Cd(!0, e), ɵfromNgModule: !0 };
}
function Cd(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return (
    Oa(t, (s) => {
      let a = s;
      _s(a, i, [], r) && ((o ||= []), o.push(a));
    }),
    o !== void 0 && bd(o, i),
    n
  );
}
function bd(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    La(o, (i) => {
      t(i, r);
    });
  }
}
function _s(e, t, n, r) {
  if (((e = fe(e)), !e)) return !1;
  let o = null,
    i = fc(e),
    s = !i && Ht(e);
  if (!i && !s) {
    let l = e.ngModule;
    if (((i = fc(l)), i)) o = l;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if ((r.add(o), s.dependencies)) {
      let l =
        typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
      for (let u of l) _s(u, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let u;
      try {
        Oa(i.imports, (c) => {
          _s(c, t, n, r) && ((u ||= []), u.push(c));
        });
      } finally {
      }
      u !== void 0 && bd(u, t);
    }
    if (!a) {
      let u = $t(o) || (() => new o());
      t({ provide: o, useFactory: u, deps: he }, o),
        t({ provide: hd, useValue: o, multi: !0 }, o),
        t({ provide: qn, useValue: () => oe(o), multi: !0 }, o);
    }
    let l = i.providers;
    if (l != null && !a) {
      let u = e;
      La(l, (c) => {
        t(c, u);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function La(e, t) {
  for (let n of e)
    id(n) && (n = n.ɵproviders), Array.isArray(n) ? La(n, t) : t(n);
}
var ey = H({ provide: String, useValue: H });
function Sd(e) {
  return e !== null && typeof e == "object" && ey in e;
}
function ty(e) {
  return !!(e && e.useExisting);
}
function ny(e) {
  return !!(e && e.useFactory);
}
function Dn(e) {
  return typeof e == "function";
}
function ry(e) {
  return !!e.useClass;
}
var Md = new k(""),
  lo = {},
  oy = {},
  ns;
function ja() {
  return ns === void 0 && (ns = new vo()), ns;
}
var wt = class {},
  Qn = class extends wt {
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
        Cs(t, (s) => this.processProvider(s)),
        this.records.set(fd, dn(void 0, this)),
        o.has("environment") && this.records.set(wt, dn(void 0, this));
      let i = this.records.get(Md);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        (this.injectorDefTypes = new Set(this.get(hd, he, O.Self)));
    }
    destroy() {
      this.assertNotDestroyed(), (this._destroyed = !0);
      let t = R(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          R(t);
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
      let n = yt(this),
        r = ye(void 0),
        o;
      try {
        return t();
      } finally {
        yt(n), ye(r);
      }
    }
    get(t, n = zn, r = O.Default) {
      if ((this.assertNotDestroyed(), t.hasOwnProperty(pc))) return t[pc](this);
      r = zo(r);
      let o,
        i = yt(this),
        s = ye(void 0);
      try {
        if (!(r & O.SkipSelf)) {
          let l = this.records.get(t);
          if (l === void 0) {
            let u = uy(t) && Uo(t);
            u && this.injectableDefInScope(u)
              ? (l = dn(Is(t), lo))
              : (l = null),
              this.records.set(t, l);
          }
          if (l != null) return this.hydrate(t, l);
        }
        let a = r & O.Self ? ja() : this.parent;
        return (n = r & O.Optional && n === zn ? null : n), a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if (((a[mo] = a[mo] || []).unshift(pe(t)), i)) throw a;
          return Nm(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        ye(s), yt(i);
      }
    }
    resolveInjectorInitializers() {
      let t = R(null),
        n = yt(this),
        r = ye(void 0),
        o;
      try {
        let i = this.get(qn, he, O.Self);
        for (let s of i) s();
      } finally {
        yt(n), ye(r), R(t);
      }
    }
    toString() {
      let t = [],
        n = this.records;
      for (let r of n.keys()) t.push(pe(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    assertNotDestroyed() {
      if (this._destroyed) throw new m(205, !1);
    }
    processProvider(t) {
      t = fe(t);
      let n = Dn(t) ? t : fe(t && t.provide),
        r = sy(t);
      if (!Dn(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
          ((o = dn(void 0, lo, !0)),
          (o.factory = () => Es(o.multi)),
          this.records.set(n, o)),
          (n = t),
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = R(null);
      try {
        return (
          n.value === lo && ((n.value = oy), (n.value = n.factory())),
          typeof n.value == "object" &&
            n.value &&
            ly(n.value) &&
            this._ngOnDestroyHooks.add(n.value),
          n.value
        );
      } finally {
        R(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = fe(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Is(e) {
  let t = Uo(e),
    n = t !== null ? t.factory : $t(e);
  if (n !== null) return n;
  if (e instanceof k) throw new m(204, !1);
  if (e instanceof Function) return iy(e);
  throw new m(204, !1);
}
function iy(e) {
  if (e.length > 0) throw new m(204, !1);
  let n = pm(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function sy(e) {
  if (Sd(e)) return dn(void 0, e.useValue);
  {
    let t = Td(e);
    return dn(t, lo);
  }
}
function Td(e, t, n) {
  let r;
  if (Dn(e)) {
    let o = fe(e);
    return $t(o) || Is(o);
  } else if (Sd(e)) r = () => fe(e.useValue);
  else if (ny(e)) r = () => e.useFactory(...Es(e.deps || []));
  else if (ty(e)) r = () => oe(fe(e.useExisting));
  else {
    let o = fe(e && (e.useClass || e.provide));
    if (ay(e)) r = () => new o(...Es(e.deps));
    else return $t(o) || Is(o);
  }
  return r;
}
function dn(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function ay(e) {
  return !!e.deps;
}
function ly(e) {
  return (
    e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"
  );
}
function uy(e) {
  return typeof e == "function" || (typeof e == "object" && e instanceof k);
}
function Cs(e, t) {
  for (let n of e)
    Array.isArray(n) ? Cs(n, t) : n && id(n) ? Cs(n.ɵproviders, t) : t(n);
}
function Yx(e, t) {
  e instanceof Qn && e.assertNotDestroyed();
  let n,
    r = yt(e),
    o = ye(void 0);
  try {
    return t();
  } finally {
    yt(r), ye(o);
  }
}
function Nd() {
  return sd() !== void 0 || Sm() != null;
}
function cy(e) {
  if (!Nd()) throw new m(-203, !1);
}
function dy(e) {
  return typeof e == "function";
}
var Ie = 0,
  b = 1,
  _ = 2,
  ie = 3,
  Ve = 4,
  Ee = 5,
  $e = 6,
  Do = 7,
  He = 8,
  En = 9,
  Ke = 10,
  U = 11,
  Zn = 12,
  Ec = 13,
  Sn = 14,
  De = 15,
  Ut = 16,
  fn = 17,
  st = 18,
  Go = 19,
  xd = 20,
  Dt = 21,
  rs = 22,
  Oe = 23,
  J = 25,
  Ad = 1,
  Kn = 6,
  at = 7,
  Eo = 8,
  wn = 9,
  ve = 10,
  wo = (function (e) {
    return (
      (e[(e.None = 0)] = "None"),
      (e[(e.HasTransplantedViews = 2)] = "HasTransplantedViews"),
      e
    );
  })(wo || {});
function Be(e) {
  return Array.isArray(e) && typeof e[Ad] == "object";
}
function Je(e) {
  return Array.isArray(e) && e[Ad] === !0;
}
function Od(e) {
  return (e.flags & 4) !== 0;
}
function nr(e) {
  return e.componentOffset > -1;
}
function Va(e) {
  return (e.flags & 1) === 1;
}
function _t(e) {
  return !!e.template;
}
function _o(e) {
  return (e[_] & 512) !== 0;
}
var bs = class {
  constructor(t, n, r) {
    (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Pd(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : (e[n] = r);
}
function Fd() {
  return Rd;
}
function Rd(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = hy), fy;
}
Fd.ngInherit = !0;
function fy() {
  let e = Ld(this),
    t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === vn) e.previous = t;
    else for (let r in t) n[r] = t[r];
    (e.current = null), this.ngOnChanges(t);
  }
}
function hy(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Ld(e) || py(e, { previous: vn, current: null }),
    a = s.current || (s.current = {}),
    l = s.previous,
    u = l[i];
  (a[i] = new bs(u && u.currentValue, n, l === vn)), Pd(e, t, o, n);
}
var kd = "__ngSimpleChanges__";
function Ld(e) {
  return e[kd] || null;
}
function py(e, t) {
  return (e[kd] = t);
}
var wc = null;
var Qe = function (e, t, n) {
    wc?.(e, t, n);
  },
  jd = "svg",
  gy = "math";
function Ue(e) {
  for (; Array.isArray(e); ) e = e[Ie];
  return e;
}
function Vd(e, t) {
  return Ue(t[e]);
}
function Ce(e, t) {
  return Ue(t[e.index]);
}
function Bd(e, t) {
  return e.data[t];
}
function Ba(e, t) {
  return e[t];
}
function bt(e, t) {
  let n = t[e];
  return Be(n) ? n : n[Ie];
}
function my(e) {
  return (e[_] & 4) === 4;
}
function $a(e) {
  return (e[_] & 128) === 128;
}
function yy(e) {
  return Je(e[ie]);
}
function Io(e, t) {
  return t == null ? null : e[t];
}
function $d(e) {
  e[fn] = 0;
}
function Hd(e) {
  e[_] & 1024 || ((e[_] |= 1024), $a(e) && Qo(e));
}
function vy(e, t) {
  for (; e > 0; ) (t = t[Sn]), e--;
  return t;
}
function Wo(e) {
  return !!(e[_] & 9216 || e[Oe]?.dirty);
}
function Ss(e) {
  e[Ke].changeDetectionScheduler?.notify(8),
    e[_] & 64 && (e[_] |= 1024),
    Wo(e) && Qo(e);
}
function Qo(e) {
  e[Ke].changeDetectionScheduler?.notify(0);
  let t = zt(e);
  for (; t !== null && !(t[_] & 8192 || ((t[_] |= 8192), !$a(t))); ) t = zt(t);
}
function Ud(e, t) {
  if ((e[_] & 256) === 256) throw new m(911, !1);
  e[Dt] === null && (e[Dt] = []), e[Dt].push(t);
}
function Dy(e, t) {
  if (e[Dt] === null) return;
  let n = e[Dt].indexOf(t);
  n !== -1 && e[Dt].splice(n, 1);
}
function zt(e) {
  let t = e[ie];
  return Je(t) ? t[ie] : t;
}
var S = { lFrame: Xd(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var zd = !1;
function Ey() {
  return S.lFrame.elementDepthCount;
}
function wy() {
  S.lFrame.elementDepthCount++;
}
function _y() {
  S.lFrame.elementDepthCount--;
}
function qd() {
  return S.bindingsEnabled;
}
function Mn() {
  return S.skipHydrationRootTNode !== null;
}
function Iy(e) {
  return S.skipHydrationRootTNode === e;
}
function Cy(e) {
  S.skipHydrationRootTNode = e;
}
function by() {
  S.skipHydrationRootTNode = null;
}
function A() {
  return S.lFrame.lView;
}
function X() {
  return S.lFrame.tView;
}
function Jx(e) {
  return (S.lFrame.contextLView = e), e[He];
}
function Xx(e) {
  return (S.lFrame.contextLView = null), e;
}
function ce() {
  let e = Gd();
  for (; e !== null && e.type === 64; ) e = e.parent;
  return e;
}
function Gd() {
  return S.lFrame.currentTNode;
}
function Sy() {
  let e = S.lFrame,
    t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function rr(e, t) {
  let n = S.lFrame;
  (n.currentTNode = e), (n.isParent = t);
}
function Wd() {
  return S.lFrame.isParent;
}
function Qd() {
  S.lFrame.isParent = !1;
}
function My() {
  return S.lFrame.contextLView;
}
function Zd() {
  return zd;
}
function _c(e) {
  zd = e;
}
function Ha() {
  let e = S.lFrame,
    t = e.bindingRootIndex;
  return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
}
function Ty() {
  return S.lFrame.bindingIndex;
}
function Ny(e) {
  return (S.lFrame.bindingIndex = e);
}
function or() {
  return S.lFrame.bindingIndex++;
}
function Ua(e) {
  let t = S.lFrame,
    n = t.bindingIndex;
  return (t.bindingIndex = t.bindingIndex + e), n;
}
function xy() {
  return S.lFrame.inI18n;
}
function Ay(e, t) {
  let n = S.lFrame;
  (n.bindingIndex = n.bindingRootIndex = e), Ms(t);
}
function Oy() {
  return S.lFrame.currentDirectiveIndex;
}
function Ms(e) {
  S.lFrame.currentDirectiveIndex = e;
}
function Py(e) {
  let t = S.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function Kd() {
  return S.lFrame.currentQueryIndex;
}
function za(e) {
  S.lFrame.currentQueryIndex = e;
}
function Fy(e) {
  let t = e[b];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[Ee] : null;
}
function Yd(e, t, n) {
  if (n & O.SkipSelf) {
    let o = t,
      i = e;
    for (; (o = o.parent), o === null && !(n & O.Host); )
      if (((o = Fy(i)), o === null || ((i = i[Sn]), o.type & 10))) break;
    if (o === null) return !1;
    (t = o), (e = i);
  }
  let r = (S.lFrame = Jd());
  return (r.currentTNode = t), (r.lView = e), !0;
}
function qa(e) {
  let t = Jd(),
    n = e[b];
  (S.lFrame = t),
    (t.currentTNode = n.firstChild),
    (t.lView = e),
    (t.tView = n),
    (t.contextLView = e),
    (t.bindingIndex = n.bindingStartIndex),
    (t.inI18n = !1);
}
function Jd() {
  let e = S.lFrame,
    t = e === null ? null : e.child;
  return t === null ? Xd(e) : t;
}
function Xd(e) {
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
function ef() {
  let e = S.lFrame;
  return (S.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
}
var tf = ef;
function Ga() {
  let e = ef();
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
function Ry(e) {
  return (S.lFrame.contextLView = vy(e, S.lFrame.contextLView))[He];
}
function St() {
  return S.lFrame.selectedIndex;
}
function qt(e) {
  S.lFrame.selectedIndex = e;
}
function Zo() {
  let e = S.lFrame;
  return Bd(e.tView, e.selectedIndex);
}
function eA() {
  S.lFrame.currentNamespace = jd;
}
function tA() {
  ky();
}
function ky() {
  S.lFrame.currentNamespace = null;
}
function nf() {
  return S.lFrame.currentNamespace;
}
var rf = !0;
function Wa() {
  return rf;
}
function Mt(e) {
  rf = e;
}
function Ly(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Rd(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
      ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function Qa(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: l,
        ngAfterViewChecked: u,
        ngOnDestroy: c,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
        ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      l && (e.viewHooks ??= []).push(-n, l),
      u &&
        ((e.viewHooks ??= []).push(n, u), (e.viewCheckHooks ??= []).push(n, u)),
      c != null && (e.destroyHooks ??= []).push(n, c);
  }
}
function uo(e, t, n) {
  of(e, t, 3, n);
}
function co(e, t, n, r) {
  (e[_] & 3) === n && of(e, t, n, r);
}
function os(e, t) {
  let n = e[_];
  (n & 3) === t && ((n &= 16383), (n += 1), (e[_] = n));
}
function of(e, t, n, r) {
  let o = r !== void 0 ? e[fn] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let l = o; l < s; l++)
    if (typeof t[l + 1] == "number") {
      if (((a = t[l]), r != null && a >= r)) break;
    } else
      t[l] < 0 && (e[fn] += 65536),
        (a < i || i == -1) &&
          (jy(e, n, t, l), (e[fn] = (e[fn] & 4294901760) + l + 2)),
        l++;
}
function Ic(e, t) {
  Qe(4, e, t);
  let n = R(null);
  try {
    t.call(e);
  } finally {
    R(n), Qe(5, e, t);
  }
}
function jy(e, t, n, r) {
  let o = n[r] < 0,
    i = n[r + 1],
    s = o ? -n[r] : n[r],
    a = e[s];
  o
    ? e[_] >> 14 < e[fn] >> 16 &&
      (e[_] & 3) === t &&
      ((e[_] += 16384), Ic(a, i))
    : Ic(a, i);
}
var mn = -1,
  Gt = class {
    constructor(t, n, r) {
      (this.factory = t),
        (this.resolving = !1),
        (this.canSeeViewProviders = n),
        (this.injectImpl = r);
    }
  };
function Vy(e) {
  return e instanceof Gt;
}
function By(e) {
  return (e.flags & 8) !== 0;
}
function $y(e) {
  return (e.flags & 16) !== 0;
}
var is = {},
  Ts = class {
    constructor(t, n) {
      (this.injector = t), (this.parentInjector = n);
    }
    get(t, n, r) {
      r = zo(r);
      let o = this.injector.get(t, is, r);
      return o !== is || n === is ? o : this.parentInjector.get(t, n, r);
    }
  };
function sf(e) {
  return e !== mn;
}
function Co(e) {
  return e & 32767;
}
function Hy(e) {
  return e >> 16;
}
function bo(e, t) {
  let n = Hy(e),
    r = t;
  for (; n > 0; ) (r = r[Sn]), n--;
  return r;
}
var Ns = !0;
function So(e) {
  let t = Ns;
  return (Ns = e), t;
}
var Uy = 256,
  af = Uy - 1,
  lf = 5,
  zy = 0,
  Ze = {};
function qy(e, t, n) {
  let r;
  typeof n == "string"
    ? (r = n.charCodeAt(0) || 0)
    : n.hasOwnProperty(Un) && (r = n[Un]),
    r == null && (r = n[Un] = zy++);
  let o = r & af,
    i = 1 << o;
  t.data[e + (o >> lf)] |= i;
}
function Mo(e, t) {
  let n = uf(e, t);
  if (n !== -1) return n;
  let r = t[b];
  r.firstCreatePass &&
    ((e.injectorIndex = t.length),
    ss(r.data, e),
    ss(t, null),
    ss(r.blueprint, null));
  let o = Za(e, t),
    i = e.injectorIndex;
  if (sf(o)) {
    let s = Co(o),
      a = bo(o, t),
      l = a[b].data;
    for (let u = 0; u < 8; u++) t[i + u] = a[s + u] | l[s + u];
  }
  return (t[i + 8] = o), i;
}
function ss(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function uf(e, t) {
  return e.injectorIndex === -1 ||
    (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
    t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function Za(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0,
    r = null,
    o = t;
  for (; o !== null; ) {
    if (((r = pf(o)), r === null)) return mn;
    if ((n++, (o = o[Sn]), r.injectorIndex !== -1))
      return r.injectorIndex | (n << 16);
  }
  return mn;
}
function xs(e, t, n) {
  qy(e, t, n);
}
function Gy(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length,
      o = 0;
    for (; o < r; ) {
      let i = n[o];
      if (gd(i)) break;
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
function cf(e, t, n) {
  if (n & O.Optional || e !== void 0) return e;
  Aa(t, "NodeInjector");
}
function df(e, t, n, r) {
  if (
    (n & O.Optional && r === void 0 && (r = null), !(n & (O.Self | O.Host)))
  ) {
    let o = e[En],
      i = ye(void 0);
    try {
      return o ? o.get(t, r, n & O.Optional) : ad(t, r, n & O.Optional);
    } finally {
      ye(i);
    }
  }
  return cf(r, t, n);
}
function ff(e, t, n, r = O.Default, o) {
  if (e !== null) {
    if (t[_] & 2048 && !(r & O.Self)) {
      let s = Ky(e, t, n, r, Ze);
      if (s !== Ze) return s;
    }
    let i = hf(e, t, n, r, Ze);
    if (i !== Ze) return i;
  }
  return df(t, n, r, o);
}
function hf(e, t, n, r, o) {
  let i = Qy(n);
  if (typeof i == "function") {
    if (!Yd(t, e, r)) return r & O.Host ? cf(o, n, r) : df(t, n, r, o);
    try {
      let s;
      if (((s = i(r)), s == null && !(r & O.Optional))) Aa(n);
      else return s;
    } finally {
      tf();
    }
  } else if (typeof i == "number") {
    let s = null,
      a = uf(e, t),
      l = mn,
      u = r & O.Host ? t[De][Ee] : null;
    for (
      (a === -1 || r & O.SkipSelf) &&
      ((l = a === -1 ? Za(e, t) : t[a + 8]),
      l === mn || !bc(r, !1)
        ? (a = -1)
        : ((s = t[b]), (a = Co(l)), (t = bo(l, t))));
      a !== -1;

    ) {
      let c = t[b];
      if (Cc(i, a, c.data)) {
        let d = Wy(a, t, n, s, r, u);
        if (d !== Ze) return d;
      }
      (l = t[a + 8]),
        l !== mn && bc(r, t[b].data[a + 8] === u) && Cc(i, a, t)
          ? ((s = c), (a = Co(l)), (t = bo(l, t)))
          : (a = -1);
    }
  }
  return o;
}
function Wy(e, t, n, r, o, i) {
  let s = t[b],
    a = s.data[e + 8],
    l = r == null ? nr(a) && Ns : r != s && (a.type & 3) !== 0,
    u = o & O.Host && i === a,
    c = fo(a, s, n, l, u);
  return c !== null ? Wt(t, s, c, a) : Ze;
}
function fo(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    l = e.directiveStart,
    u = e.directiveEnd,
    c = i >> 20,
    d = r ? a : a + c,
    h = o ? a + c : u;
  for (let f = d; f < h; f++) {
    let p = s[f];
    if ((f < l && n === p) || (f >= l && p.type === n)) return f;
  }
  if (o) {
    let f = s[l];
    if (f && _t(f) && f.type === n) return l;
  }
  return null;
}
function Wt(e, t, n, r) {
  let o = e[n],
    i = t.data;
  if (Vy(o)) {
    let s = o;
    s.resolving && wm(Em(i[n]));
    let a = So(s.canSeeViewProviders);
    s.resolving = !0;
    let l,
      u = s.injectImpl ? ye(s.injectImpl) : null,
      c = Yd(e, r, O.Default);
    try {
      (o = e[n] = s.factory(void 0, i, e, r)),
        t.firstCreatePass && n >= r.directiveStart && Ly(n, i[n], t);
    } finally {
      u !== null && ye(u), So(a), (s.resolving = !1), tf();
    }
  }
  return o;
}
function Qy(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(Un) ? e[Un] : void 0;
  return typeof t == "number" ? (t >= 0 ? t & af : Zy) : t;
}
function Cc(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> lf)] & r);
}
function bc(e, t) {
  return !(e & O.Self) && !(e & O.Host && t);
}
var Bt = class {
  constructor(t, n) {
    (this._tNode = t), (this._lView = n);
  }
  get(t, n, r) {
    return ff(this._tNode, this._lView, t, zo(r), n);
  }
};
function Zy() {
  return new Bt(ce(), A());
}
function nA(e) {
  return er(() => {
    let t = e.prototype.constructor,
      n = t[go] || As(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r; ) {
      let i = o[go] || As(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function As(e) {
  return nd(e)
    ? () => {
        let t = As(fe(e));
        return t && t();
      }
    : $t(e);
}
function Ky(e, t, n, r, o) {
  let i = e,
    s = t;
  for (; i !== null && s !== null && s[_] & 2048 && !(s[_] & 512); ) {
    let a = hf(i, s, n, r | O.Self, Ze);
    if (a !== Ze) return a;
    let l = i.parent;
    if (!l) {
      let u = s[xd];
      if (u) {
        let c = u.get(n, Ze, r);
        if (c !== Ze) return c;
      }
      (l = pf(s)), (s = s[Sn]);
    }
    i = l;
  }
  return o;
}
function pf(e) {
  let t = e[b],
    n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[Ee] : null;
}
function Yy(e) {
  return Gy(ce(), e);
}
function Sc(e, t = null, n = null, r) {
  let o = gf(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function gf(e, t = null, n = null, r, o = new Set()) {
  let i = [n || he, Xm(e)];
  return (
    (r = r || (typeof e == "object" ? void 0 : pe(e))),
    new Qn(i, t || ja(), r || null, o)
  );
}
var It = class e {
  static {
    this.THROW_IF_NOT_FOUND = zn;
  }
  static {
    this.NULL = new vo();
  }
  static create(t, n) {
    if (Array.isArray(t)) return Sc({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return Sc({ name: r }, t.parent, t.providers, r);
    }
  }
  static {
    this.ɵprov = $({ token: e, providedIn: "any", factory: () => oe(fd) });
  }
  static {
    this.__NG_ELEMENT_ID__ = -1;
  }
};
var Jy = new k("");
Jy.__NG_ELEMENT_ID__ = (e) => {
  let t = ce();
  if (t === null) throw new m(204, !1);
  if (t.type & 2) return t.value;
  if (e & O.Optional) return null;
  throw new m(204, !1);
};
var Xy = "ngOriginalError";
function as(e) {
  return e[Xy];
}
var mf = !0,
  Ka = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = ev;
      }
      static {
        this.__NG_ENV_ID__ = (n) => n;
      }
    }
    return e;
  })(),
  Os = class extends Ka {
    constructor(t) {
      super(), (this._lView = t);
    }
    onDestroy(t) {
      return Ud(this._lView, t), () => Dy(this._lView, t);
    }
  };
function ev() {
  return new Os(A());
}
var Ko = (() => {
  class e {
    constructor() {
      (this.taskId = 0),
        (this.pendingTasks = new Set()),
        (this.hasPendingTasks = new kn(!1));
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
      this.ɵprov = $({ token: e, providedIn: "root", factory: () => new e() });
    }
  }
  return e;
})();
var Ps = class extends Ae {
    constructor(t = !1) {
      super(),
        (this.destroyRef = void 0),
        (this.pendingTasks = void 0),
        (this.__isAsync = t),
        Nd() &&
          ((this.destroyRef = M(Ka, { optional: !0 }) ?? void 0),
          (this.pendingTasks = M(Ko, { optional: !0 }) ?? void 0));
    }
    emit(t) {
      let n = R(null);
      try {
        super.next(t);
      } finally {
        R(n);
      }
    }
    subscribe(t, n, r) {
      let o = t,
        i = n || (() => null),
        s = r;
      if (t && typeof t == "object") {
        let l = t;
        (o = l.next?.bind(l)),
          (i = l.error?.bind(l)),
          (s = l.complete?.bind(l));
      }
      this.__isAsync &&
        ((i = this.wrapInTimeout(i)),
        o && (o = this.wrapInTimeout(o)),
        s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof Y && t.add(a), a;
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
  je = Ps;
function To(...e) {}
function yf(e) {
  let t, n;
  function r() {
    e = To;
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
function Mc(e) {
  return (
    queueMicrotask(() => e()),
    () => {
      e = To;
    }
  );
}
var Ya = "isAngularZone",
  No = Ya + "_ID",
  tv = 0,
  ue = class e {
    constructor(t) {
      (this.hasPendingMacrotasks = !1),
        (this.hasPendingMicrotasks = !1),
        (this.isStable = !0),
        (this.onUnstable = new je(!1)),
        (this.onMicrotaskEmpty = new je(!1)),
        (this.onStable = new je(!1)),
        (this.onError = new je(!1));
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = mf,
      } = t;
      if (typeof Zone > "u") throw new m(908, !1);
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
        ov(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(Ya) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new m(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new m(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, nv, To, To);
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
  nv = {};
function Ja(e) {
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
function rv(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    yf(() => {
      (e.callbackScheduled = !1),
        Fs(e),
        (e.isCheckStableRunning = !0),
        Ja(e),
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
    Fs(e);
}
function ov(e) {
  let t = () => {
      rv(e);
    },
    n = tv++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [Ya]: !0, [No]: n, [No + n]: !0 },
    onInvokeTask: (r, o, i, s, a, l) => {
      if (iv(l)) return r.invokeTask(i, s, a, l);
      try {
        return Tc(e), r.invokeTask(i, s, a, l);
      } finally {
        ((e.shouldCoalesceEventChangeDetection && s.type === "eventTask") ||
          e.shouldCoalesceRunChangeDetection) &&
          t(),
          Nc(e);
      }
    },
    onInvoke: (r, o, i, s, a, l, u) => {
      try {
        return Tc(e), r.invoke(i, s, a, l, u);
      } finally {
        e.shouldCoalesceRunChangeDetection &&
          !e.callbackScheduled &&
          !sv(l) &&
          t(),
          Nc(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
          (s.change == "microTask"
            ? ((e._hasPendingMicrotasks = s.microTask), Fs(e), Ja(e))
            : s.change == "macroTask" &&
              (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (r, o, i, s) => (
      r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1
    ),
  });
}
function Fs(e) {
  e._hasPendingMicrotasks ||
  ((e.shouldCoalesceEventChangeDetection ||
    e.shouldCoalesceRunChangeDetection) &&
    e.callbackScheduled === !0)
    ? (e.hasPendingMicrotasks = !0)
    : (e.hasPendingMicrotasks = !1);
}
function Tc(e) {
  e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
}
function Nc(e) {
  e._nesting--, Ja(e);
}
var Rs = class {
  constructor() {
    (this.hasPendingMicrotasks = !1),
      (this.hasPendingMacrotasks = !1),
      (this.isStable = !0),
      (this.onUnstable = new je()),
      (this.onMicrotaskEmpty = new je()),
      (this.onStable = new je()),
      (this.onError = new je());
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
function iv(e) {
  return vf(e, "__ignore_ng_zone__");
}
function sv(e) {
  return vf(e, "__scheduler_tick__");
}
function vf(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var _n = class {
    constructor() {
      this._console = console;
    }
    handleError(t) {
      let n = this._findOriginalError(t);
      this._console.error("ERROR", t),
        n && this._console.error("ORIGINAL ERROR", n);
    }
    _findOriginalError(t) {
      let n = t && as(t);
      for (; n && as(n); ) n = as(n);
      return n || null;
    }
  },
  av = new k("", {
    providedIn: "root",
    factory: () => {
      let e = M(ue),
        t = M(_n);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function lv() {
  return Tn(ce(), A());
}
function Tn(e, t) {
  return new Jt(Ce(e, t));
}
var Jt = (() => {
  class e {
    constructor(n) {
      this.nativeElement = n;
    }
    static {
      this.__NG_ELEMENT_ID__ = lv;
    }
  }
  return e;
})();
function uv(e) {
  return e instanceof Jt ? e.nativeElement : e;
}
function cv() {
  return this._results[Symbol.iterator]();
}
var ks = class e {
    get changes() {
      return (this._changes ??= new je());
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
      n[Symbol.iterator] || (n[Symbol.iterator] = cv);
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
      let r = Om(t);
      (this._changesDetected = !Am(this._results, r, n)) &&
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
  dv = "ngSkipHydration",
  fv = "ngskiphydration";
function Df(e) {
  let t = e.mergedAttrs;
  if (t === null) return !1;
  for (let n = 0; n < t.length; n += 2) {
    let r = t[n];
    if (typeof r == "number") return !1;
    if (typeof r == "string" && r.toLowerCase() === fv) return !0;
  }
  return !1;
}
function Ef(e) {
  return e.hasAttribute(dv);
}
function xo(e) {
  return (e.flags & 128) === 128;
}
function hv(e) {
  if (xo(e)) return !0;
  let t = e.parent;
  for (; t; ) {
    if (xo(e) || Df(t)) return !0;
    t = t.parent;
  }
  return !1;
}
var wf = new Map(),
  pv = 0;
function gv() {
  return pv++;
}
function mv(e) {
  wf.set(e[Go], e);
}
function Ls(e) {
  wf.delete(e[Go]);
}
var xc = "__ngContext__";
function Qt(e, t) {
  Be(t) ? ((e[xc] = t[Go]), mv(t)) : (e[xc] = t);
}
function _f(e) {
  return Cf(e[Zn]);
}
function If(e) {
  return Cf(e[Ve]);
}
function Cf(e) {
  for (; e !== null && !Je(e); ) e = e[Ve];
  return e;
}
var js;
function rA(e) {
  js = e;
}
function ir() {
  if (js !== void 0) return js;
  if (typeof document < "u") return document;
  throw new m(210, !1);
}
var yv = new k("", { providedIn: "root", factory: () => vv }),
  vv = "ng",
  Dv = new k(""),
  Xa = new k("", { providedIn: "platform", factory: () => "unknown" });
var oA = new k(""),
  iA = new k("", {
    providedIn: "root",
    factory: () =>
      ir().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
function Ev() {
  let e = new el();
  return M(Xa) === "browser" && (e.store = wv(ir(), M(yv))), e;
}
var el = (() => {
  class e {
    constructor() {
      (this.store = {}), (this.onSerializeCallbacks = {});
    }
    static {
      this.ɵprov = $({ token: e, providedIn: "root", factory: Ev });
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
function wv(e, t) {
  let n = e.getElementById(t + "-state");
  if (n?.textContent)
    try {
      return JSON.parse(n.textContent);
    } catch (r) {
      console.warn("Exception while restoring TransferState for app " + t, r);
    }
  return {};
}
var bf = "h",
  Sf = "b",
  Vs = (function (e) {
    return (e.FirstChild = "f"), (e.NextSibling = "n"), e;
  })(Vs || {}),
  _v = "e",
  Iv = "t",
  tl = "c",
  Mf = "x",
  Ao = "r",
  Cv = "i",
  bv = "n",
  Tf = "d";
var Sv = "__nghData__",
  Nf = Sv,
  ls = "ngh",
  Mv = "nghm",
  xf = () => null;
function Tv(e, t, n = !1) {
  let r = e.getAttribute(ls);
  if (r == null) return null;
  let [o, i] = r.split("|");
  if (((r = n ? i : o), !r)) return null;
  let s = i ? `|${i}` : "",
    a = n ? o : s,
    l = {};
  if (r !== "") {
    let c = t.get(el, null, { optional: !0 });
    c !== null && (l = c.get(Nf, [])[Number(r)]);
  }
  let u = { data: l, firstChild: e.firstChild ?? null };
  return (
    n && ((u.firstChild = e), Yo(u, 0, e.nextSibling)),
    a ? e.setAttribute(ls, a) : e.removeAttribute(ls),
    u
  );
}
function Nv() {
  xf = Tv;
}
function nl(e, t, n = !1) {
  return xf(e, t, n);
}
function xv(e) {
  let t = e._lView;
  return t[b].type === 2 ? null : (_o(t) && (t = t[J]), t);
}
function Av(e) {
  return e.textContent?.replace(/\s/gm, "");
}
function Ov(e) {
  let t = ir(),
    n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
      acceptNode(i) {
        let s = Av(i);
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
function Yo(e, t, n) {
  (e.segmentHeads ??= {}), (e.segmentHeads[t] = n);
}
function Bs(e, t) {
  return e.segmentHeads?.[t] ?? null;
}
function Pv(e, t) {
  let n = e.data,
    r = n[_v]?.[t] ?? null;
  return r === null && n[tl]?.[t] && (r = rl(e, t)), r;
}
function Af(e, t) {
  return e.data[tl]?.[t] ?? null;
}
function rl(e, t) {
  let n = Af(e, t) ?? [],
    r = 0;
  for (let o of n) r += o[Ao] * (o[Mf] ?? 1);
  return r;
}
function Fv(e) {
  if (typeof e.disconnectedNodes > "u") {
    let t = e.data[Tf];
    e.disconnectedNodes = t ? new Set(t) : null;
  }
  return e.disconnectedNodes;
}
function sr(e, t) {
  if (typeof e.disconnectedNodes > "u") {
    let n = e.data[Tf];
    e.disconnectedNodes = n ? new Set(n) : null;
  }
  return !!Fv(e)?.has(t);
}
var eo = new k(""),
  Of = !1,
  Pf = new k("", { providedIn: "root", factory: () => Of });
var to;
function Rv() {
  if (to === void 0 && ((to = null), vt.trustedTypes))
    try {
      to = vt.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return to;
}
function Jo(e) {
  return Rv()?.createHTML(e) || e;
}
var no;
function kv() {
  if (no === void 0 && ((no = null), vt.trustedTypes))
    try {
      no = vt.trustedTypes.createPolicy("angular#unsafe-bypass", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  return no;
}
function Ac(e) {
  return kv()?.createHTML(e) || e;
}
var lt = class {
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Jc})`;
    }
  },
  $s = class extends lt {
    getTypeName() {
      return "HTML";
    }
  },
  Hs = class extends lt {
    getTypeName() {
      return "Style";
    }
  },
  Us = class extends lt {
    getTypeName() {
      return "Script";
    }
  },
  zs = class extends lt {
    getTypeName() {
      return "URL";
    }
  },
  qs = class extends lt {
    getTypeName() {
      return "ResourceURL";
    }
  };
function Xo(e) {
  return e instanceof lt ? e.changingThisBreaksApplicationSecurity : e;
}
function Lv(e, t) {
  let n = jv(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Jc})`);
  }
  return n === t;
}
function jv(e) {
  return (e instanceof lt && e.getTypeName()) || null;
}
function sA(e) {
  return new $s(e);
}
function aA(e) {
  return new Hs(e);
}
function lA(e) {
  return new Us(e);
}
function uA(e) {
  return new zs(e);
}
function cA(e) {
  return new qs(e);
}
function Vv(e) {
  let t = new Ws(e);
  return Bv() ? new Gs(t) : t;
}
var Gs = class {
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(Jo(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  Ws = class {
    constructor(t) {
      (this.defaultDoc = t),
        (this.inertDocument =
          this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert"
          ));
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return (n.innerHTML = Jo(t)), n;
    }
  };
function Bv() {
  try {
    return !!new window.DOMParser().parseFromString(Jo(""), "text/html");
  } catch {
    return !1;
  }
}
var $v = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Hv(e) {
  return (e = String(e)), e.match($v) ? e : "unsafe:" + e;
}
function ut(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function ar(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Ff = ut("area,br,col,hr,img,wbr"),
  Rf = ut("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  kf = ut("rp,rt"),
  Uv = ar(kf, Rf),
  zv = ar(
    Rf,
    ut(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
    )
  ),
  qv = ar(
    kf,
    ut(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
    )
  ),
  Oc = ar(Ff, zv, qv, Uv),
  Lf = ut("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  Gv = ut(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
  ),
  Wv = ut(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
  ),
  Qv = ar(Lf, Gv, Wv),
  Zv = ut("script,style,template"),
  Qs = class {
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
          o.push(n), (n = Jv(n));
          continue;
        }
        for (; n; ) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = Yv(n);
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
      let n = Pc(t).toLowerCase();
      if (!Oc.hasOwnProperty(n))
        return (this.sanitizedSomething = !0), !Zv.hasOwnProperty(n);
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o),
          s = i.name,
          a = s.toLowerCase();
        if (!Qv.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let l = i.value;
        Lf[a] && (l = Hv(l)), this.buf.push(" ", s, '="', Fc(l), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = Pc(t).toLowerCase();
      Oc.hasOwnProperty(n) &&
        !Ff.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(Fc(t));
    }
  };
function Kv(e, t) {
  return (
    (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY
  );
}
function Yv(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw jf(t);
  return t;
}
function Jv(e) {
  let t = e.firstChild;
  if (t && Kv(e, t)) throw jf(t);
  return t;
}
function Pc(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function jf(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`
  );
}
var Xv = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  eD = /([^\#-~ |!])/g;
function Fc(e) {
  return e
    .replace(/&/g, "&amp;")
    .replace(Xv, function (t) {
      let n = t.charCodeAt(0),
        r = t.charCodeAt(1);
      return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
    })
    .replace(eD, function (t) {
      return "&#" + t.charCodeAt(0) + ";";
    })
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
var ro;
function tD(e, t) {
  let n = null;
  try {
    ro = ro || Vv(e);
    let r = t ? String(t) : "";
    n = ro.getInertBodyElement(r);
    let o = 5,
      i = r;
    do {
      if (o === 0)
        throw new Error(
          "Failed to sanitize html because the input is unstable"
        );
      o--, (r = i), (i = n.innerHTML), (n = ro.getInertBodyElement(r));
    } while (r !== i);
    let a = new Qs().sanitizeChildren(Rc(n) || n);
    return Jo(a);
  } finally {
    if (n) {
      let r = Rc(n) || n;
      for (; r.firstChild; ) r.firstChild.remove();
    }
  }
}
function Rc(e) {
  return "content" in e && nD(e) ? e.content : null;
}
function nD(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var Vf = (function (e) {
  return (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.HTML = 1)] = "HTML"),
    (e[(e.STYLE = 2)] = "STYLE"),
    (e[(e.SCRIPT = 3)] = "SCRIPT"),
    (e[(e.URL = 4)] = "URL"),
    (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
    e
  );
})(Vf || {});
function dA(e) {
  let t = rD();
  return t
    ? Ac(t.sanitize(Vf.HTML, e) || "")
    : Lv(e, "HTML")
    ? Ac(Xo(e))
    : tD(ir(), yn(e));
}
function rD() {
  let e = A();
  return e && e[Ke].sanitizer;
}
var oD = /^>|^->|<!--|-->|--!>|<!-$/g,
  iD = /(<|>)/g,
  sD = "\u200B$1\u200B";
function aD(e) {
  return e.replace(oD, (t) => t.replace(iD, sD));
}
function fA(e) {
  return e.ownerDocument.defaultView;
}
function lD(e) {
  return e.ownerDocument.body;
}
function Bf(e) {
  return e instanceof Function ? e() : e;
}
function $n(e) {
  return (e ?? M(It)).get(Xa) === "browser";
}
var Yn = (function (e) {
    return (
      (e[(e.Important = 1)] = "Important"),
      (e[(e.DashCase = 2)] = "DashCase"),
      e
    );
  })(Yn || {}),
  uD;
function ol(e, t) {
  return uD(e, t);
}
function hn(e, t, n, r, o) {
  if (r != null) {
    let i,
      s = !1;
    Je(r) ? (i = r) : Be(r) && ((s = !0), (r = r[Ie]));
    let a = Ue(r);
    e === 0 && n !== null
      ? o == null
        ? Wf(t, n, a)
        : Oo(t, n, a, o || null, !0)
      : e === 1 && n !== null
      ? Oo(t, n, a, o || null, !0)
      : e === 2
      ? ll(t, a, s)
      : e === 3 && t.destroyNode(a),
      i != null && _D(t, e, i, n, o);
  }
}
function $f(e, t) {
  return e.createText(t);
}
function cD(e, t, n) {
  e.setValue(t, n);
}
function Hf(e, t) {
  return e.createComment(aD(t));
}
function il(e, t, n) {
  return e.createElement(t, n);
}
function dD(e, t) {
  Uf(e, t), (t[Ie] = null), (t[Ee] = null);
}
function fD(e, t, n, r, o, i) {
  (r[Ie] = o), (r[Ee] = t), ei(e, r, n, 1, o, i);
}
function Uf(e, t) {
  t[Ke].changeDetectionScheduler?.notify(9), ei(e, t, t[U], 2, null, null);
}
function hD(e) {
  let t = e[Zn];
  if (!t) return us(e[b], e);
  for (; t; ) {
    let n = null;
    if (Be(t)) n = t[Zn];
    else {
      let r = t[ve];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[Ve] && t !== e; ) Be(t) && us(t[b], t), (t = t[ie]);
      t === null && (t = e), Be(t) && us(t[b], t), (n = t && t[Ve]);
    }
    t = n;
  }
}
function pD(e, t, n, r) {
  let o = ve + r,
    i = n.length;
  r > 0 && (n[o - 1][Ve] = t),
    r < i - ve
      ? ((t[Ve] = n[o]), dd(n, ve + r, t))
      : (n.push(t), (t[Ve] = null)),
    (t[ie] = n);
  let s = t[Ut];
  s !== null && n !== s && zf(s, t);
  let a = t[st];
  a !== null && a.insertView(e), Ss(t), (t[_] |= 128);
}
function zf(e, t) {
  let n = e[wn],
    r = t[ie];
  if (Be(r)) e[_] |= wo.HasTransplantedViews;
  else {
    let o = r[ie][De];
    t[De] !== o && (e[_] |= wo.HasTransplantedViews);
  }
  n === null ? (e[wn] = [t]) : n.push(t);
}
function sl(e, t) {
  let n = e[wn],
    r = n.indexOf(t);
  n.splice(r, 1);
}
function Zs(e, t) {
  if (e.length <= ve) return;
  let n = ve + t,
    r = e[n];
  if (r) {
    let o = r[Ut];
    o !== null && o !== e && sl(o, r), t > 0 && (e[n - 1][Ve] = r[Ve]);
    let i = yo(e, ve + t);
    dD(r[b], r);
    let s = i[st];
    s !== null && s.detachView(i[b]),
      (r[ie] = null),
      (r[Ve] = null),
      (r[_] &= -129);
  }
  return r;
}
function qf(e, t) {
  if (!(t[_] & 256)) {
    let n = t[U];
    n.destroyNode && ei(e, t, n, 3, null, null), hD(t);
  }
}
function us(e, t) {
  if (t[_] & 256) return;
  let n = R(null);
  try {
    (t[_] &= -129),
      (t[_] |= 256),
      t[Oe] && ji(t[Oe]),
      mD(e, t),
      gD(e, t),
      t[b].type === 1 && t[U].destroy();
    let r = t[Ut];
    if (r !== null && Je(t[ie])) {
      r !== t[ie] && sl(r, t);
      let o = t[st];
      o !== null && o.detachView(e);
    }
    Ls(t);
  } finally {
    R(n);
  }
}
function gD(e, t) {
  let n = e.cleanup,
    r = t[Do];
  if (n !== null)
    for (let i = 0; i < n.length - 1; i += 2)
      if (typeof n[i] == "string") {
        let s = n[i + 3];
        s >= 0 ? r[s]() : r[-s].unsubscribe(), (i += 2);
      } else {
        let s = r[n[i + 1]];
        n[i].call(s);
      }
  r !== null && (t[Do] = null);
  let o = t[Dt];
  if (o !== null) {
    t[Dt] = null;
    for (let i = 0; i < o.length; i++) {
      let s = o[i];
      s();
    }
  }
}
function mD(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null)
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof Gt)) {
        let i = n[r + 1];
        if (Array.isArray(i))
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]],
              l = i[s + 1];
            Qe(4, a, l);
            try {
              l.call(a);
            } finally {
              Qe(5, a, l);
            }
          }
        else {
          Qe(4, o, i);
          try {
            i.call(o);
          } finally {
            Qe(5, o, i);
          }
        }
      }
    }
}
function Gf(e, t, n) {
  return yD(e, t.parent, n);
}
function yD(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168; ) (t = r), (r = t.parent);
  if (r === null) return n[Ie];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === Gn.None || i === Gn.Emulated) return null;
    }
    return Ce(r, n);
  }
}
function Oo(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function Wf(e, t, n) {
  e.appendChild(t, n);
}
function kc(e, t, n, r, o) {
  r !== null ? Oo(e, t, n, r, o) : Wf(e, t, n);
}
function Qf(e, t) {
  return e.parentNode(t);
}
function vD(e, t) {
  return e.nextSibling(t);
}
function Zf(e, t, n) {
  return ED(e, t, n);
}
function DD(e, t, n) {
  return e.type & 40 ? Ce(e, n) : null;
}
var ED = DD,
  Lc;
function al(e, t, n, r) {
  let o = Gf(e, r, t),
    i = t[U],
    s = r.parent || t[Ee],
    a = Zf(s, r, t);
  if (o != null)
    if (Array.isArray(n))
      for (let l = 0; l < n.length; l++) kc(i, o, n[l], a, !1);
    else kc(i, o, n, a, !1);
  Lc !== void 0 && Lc(i, r, t, n, o);
}
function Hn(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return Ce(t, e);
    if (n & 4) return Ks(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Hn(e, r);
      {
        let o = e[t.index];
        return Je(o) ? Ks(-1, o) : Ue(o);
      }
    } else {
      if (n & 128) return Hn(e, t.next);
      if (n & 32) return ol(t, e)() || Ue(e[t.index]);
      {
        let r = Kf(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = zt(e[De]);
          return Hn(o, r);
        } else return Hn(e, t.next);
      }
    }
  }
  return null;
}
function Kf(e, t) {
  if (t !== null) {
    let r = e[De][Ee],
      o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Ks(e, t) {
  let n = ve + e + 1;
  if (n < t.length) {
    let r = t[n],
      o = r[b].firstChild;
    if (o !== null) return Hn(r, o);
  }
  return t[at];
}
function ll(e, t, n) {
  e.removeChild(null, t, n);
}
function Yf(e) {
  e.textContent = "";
}
function ul(e, t, n, r, o, i, s) {
  for (; n != null; ) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index],
      l = n.type;
    if (
      (s && t === 0 && (a && Qt(Ue(a), r), (n.flags |= 2)),
      (n.flags & 32) !== 32)
    )
      if (l & 8) ul(e, t, n.child, r, o, i, !1), hn(t, e, o, a, i);
      else if (l & 32) {
        let u = ol(n, r),
          c;
        for (; (c = u()); ) hn(t, e, o, c, i);
        hn(t, e, o, a, i);
      } else l & 16 ? Jf(e, t, r, n, o, i) : hn(t, e, o, a, i);
    n = s ? n.projectionNext : n.next;
  }
}
function ei(e, t, n, r, o, i) {
  ul(n, r, e.firstChild, t, o, i, !1);
}
function wD(e, t, n) {
  let r = t[U],
    o = Gf(e, n, t),
    i = n.parent || t[Ee],
    s = Zf(i, n, t);
  Jf(r, 0, t, n, o, s);
}
function Jf(e, t, n, r, o, i) {
  let s = n[De],
    l = s[Ee].projection[r.projection];
  if (Array.isArray(l))
    for (let u = 0; u < l.length; u++) {
      let c = l[u];
      hn(t, e, o, c, i);
    }
  else {
    let u = l,
      c = s[ie];
    xo(r) && (u.flags |= 128), ul(e, t, u, c, o, i, !0);
  }
}
function _D(e, t, n, r, o) {
  let i = n[at],
    s = Ue(n);
  i !== s && hn(t, e, r, i, o);
  for (let a = ve; a < n.length; a++) {
    let l = n[a];
    ei(l[b], l, e, t, r, i);
  }
}
function ID(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Yn.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" &&
          o.endsWith("!important") &&
          ((o = o.slice(0, -10)), (i |= Yn.Important)),
        e.setStyle(n, r, o, i));
  }
}
function CD(e, t, n) {
  e.setAttribute(t, "style", n);
}
function Xf(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function eh(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && ws(e, t, r),
    o !== null && Xf(e, t, o),
    i !== null && CD(e, t, i);
}
var ze = {};
function hA(e = 1) {
  th(X(), A(), St() + e, !1);
}
function th(e, t, n, r) {
  if (!r)
    if ((t[_] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && uo(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && co(t, i, 0, n);
    }
  qt(n);
}
function se(e, t = O.Default) {
  let n = A();
  if (n === null) return oe(e, t);
  let r = ce();
  return ff(r, n, fe(e), t);
}
function pA() {
  let e = "invalid";
  throw new Error(e);
}
function nh(e, t, n, r, o, i) {
  let s = R(null);
  try {
    let a = null;
    o & Et.SignalBased && (a = t[r][rt]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Et.HasDecoratorInputTransform &&
        (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : Pd(t, a, r, i);
  } finally {
    R(s);
  }
}
function bD(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null)
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) qt(~o);
        else {
          let i = o,
            s = n[++r],
            a = n[++r];
          Ay(s, i);
          let l = t[i];
          a(2, l);
        }
      }
    } finally {
      qt(-1);
    }
}
function ti(e, t, n, r, o, i, s, a, l, u, c) {
  let d = t.blueprint.slice();
  return (
    (d[Ie] = o),
    (d[_] = r | 4 | 128 | 8 | 64),
    (u !== null || (e && e[_] & 2048)) && (d[_] |= 2048),
    $d(d),
    (d[ie] = d[Sn] = e),
    (d[He] = n),
    (d[Ke] = s || (e && e[Ke])),
    (d[U] = a || (e && e[U])),
    (d[En] = l || (e && e[En]) || null),
    (d[Ee] = i),
    (d[Go] = gv()),
    (d[$e] = c),
    (d[xd] = u),
    (d[De] = t.type == 2 ? e[De] : d),
    d
  );
}
function lr(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) (i = SD(e, t, n, r, o)), xy() && (i.flags |= 32);
  else if (i.type & 64) {
    (i.type = n), (i.value = r), (i.attrs = o);
    let s = Sy();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return rr(i, !0), i;
}
function SD(e, t, n, r, o) {
  let i = Gd(),
    s = Wd(),
    a = s ? i : i && i.parent,
    l = (e.data[t] = PD(e, a, n, t, r, o));
  return (
    e.firstChild === null && (e.firstChild = l),
    i !== null &&
      (s
        ? i.child == null && l.parent !== null && (i.child = l)
        : i.next === null && ((i.next = l), (l.prev = i))),
    l
  );
}
function rh(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function oh(e, t, n, r, o) {
  let i = St(),
    s = r & 2;
  try {
    qt(-1), s && t.length > J && th(e, t, J, !1), Qe(s ? 2 : 0, o), n(r, o);
  } finally {
    qt(i), Qe(s ? 3 : 1, o);
  }
}
function ih(e, t, n) {
  if (Od(t)) {
    let r = R(null);
    try {
      let o = t.directiveStart,
        i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let l = n[s];
          a.contentQueries(1, l, s);
        }
      }
    } finally {
      R(r);
    }
  }
}
function sh(e, t, n) {
  qd() && (VD(e, t, n, Ce(n, t)), (n.flags & 64) === 64 && fh(e, t, n));
}
function ah(e, t, n = Ce) {
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
function lh(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? (e.tView = cl(
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
function cl(e, t, n, r, o, i, s, a, l, u, c) {
  let d = J + r,
    h = d + o,
    f = MD(d, h),
    p = typeof u == "function" ? u() : u;
  return (f[b] = {
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
    schemas: l,
    consts: p,
    incompleteFirstPass: !1,
    ssrId: c,
  });
}
function MD(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : ze);
  return n;
}
function TD(e, t, n, r) {
  let i = r.get(Pf, Of) || n === Gn.ShadowDom,
    s = e.selectRootElement(t, i);
  return ND(s), s;
}
function ND(e) {
  uh(e);
}
var uh = () => null;
function xD(e) {
  Ef(e) ? Yf(e) : Ov(e);
}
function AD() {
  uh = xD;
}
function OD(e, t, n, r) {
  let o = gh(t);
  o.push(n), e.firstCreatePass && mh(e).push(r, o.length - 1);
}
function PD(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1,
    a = 0;
  return (
    Mn() && (a |= 128),
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
function jc(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a,
      l = Et.None;
    Array.isArray(s) ? ((a = s[0]), (l = s[1])) : (a = s);
    let u = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      u = o[i];
    }
    e === 0 ? Vc(r, n, u, a, l) : Vc(r, n, u, a);
  }
  return r;
}
function Vc(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : (i = e[n] = [t, r]),
    o !== void 0 && i.push(o);
}
function FD(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    l = null,
    u = null;
  for (let c = r; c < o; c++) {
    let d = i[c],
      h = n ? n.get(d) : null,
      f = h ? h.inputs : null,
      p = h ? h.outputs : null;
    (l = jc(0, d.inputs, c, l, f)), (u = jc(1, d.outputs, c, u, p));
    let g = l !== null && s !== null && !Fa(t) ? KD(l, c, s) : null;
    a.push(g);
  }
  l !== null &&
    (l.hasOwnProperty("class") && (t.flags |= 8),
    l.hasOwnProperty("style") && (t.flags |= 16)),
    (t.initialInputs = a),
    (t.inputs = l),
    (t.outputs = u);
}
function RD(e) {
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
function dl(e, t, n, r, o, i, s, a) {
  let l = Ce(t, n),
    u = t.inputs,
    c;
  !a && u != null && (c = u[r])
    ? (fl(e, n, c, r, o), nr(t) && kD(n, t.index))
    : t.type & 3
    ? ((r = RD(r)),
      (o = s != null ? s(o, t.value || "", r) : o),
      i.setProperty(l, r, o))
    : t.type & 12;
}
function kD(e, t) {
  let n = bt(t, e);
  n[_] & 16 || (n[_] |= 64);
}
function ch(e, t, n, r) {
  if (qd()) {
    let o = r === null ? null : { "": -1 },
      i = $D(e, n),
      s,
      a;
    i === null ? (s = a = null) : ([s, a] = i),
      s !== null && dh(e, t, n, s, o, a),
      o && HD(n, r, o);
  }
  n.mergedAttrs = Wn(n.mergedAttrs, n.attrs);
}
function dh(e, t, n, r, o, i) {
  for (let u = 0; u < r.length; u++) xs(Mo(n, t), e, r[u].type);
  zD(n, e.data.length, r.length);
  for (let u = 0; u < r.length; u++) {
    let c = r[u];
    c.providersResolver && c.providersResolver(c);
  }
  let s = !1,
    a = !1,
    l = rh(e, t, r.length, null);
  for (let u = 0; u < r.length; u++) {
    let c = r[u];
    (n.mergedAttrs = Wn(n.mergedAttrs, c.hostAttrs)),
      qD(e, n, t, l, c),
      UD(l, c, o),
      c.contentQueries !== null && (n.flags |= 4),
      (c.hostBindings !== null || c.hostAttrs !== null || c.hostVars !== 0) &&
        (n.flags |= 64);
    let d = c.type.prototype;
    !s &&
      (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
      ((e.preOrderHooks ??= []).push(n.index), (s = !0)),
      !a &&
        (d.ngOnChanges || d.ngDoCheck) &&
        ((e.preOrderCheckHooks ??= []).push(n.index), (a = !0)),
      l++;
  }
  FD(e, n, i);
}
function LD(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    jD(s) != a && s.push(a), s.push(n, r, i);
  }
}
function jD(e) {
  let t = e.length;
  for (; t > 0; ) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function VD(e, t, n, r) {
  let o = n.directiveStart,
    i = n.directiveEnd;
  nr(n) && GD(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || Mo(n, t),
    Qt(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let l = e.data[a],
      u = Wt(t, e, a, n);
    if ((Qt(u, t), s !== null && ZD(t, a - o, u, l, n, s), _t(l))) {
      let c = bt(n.index, t);
      c[He] = Wt(t, e, a, n);
    }
  }
}
function fh(e, t, n) {
  let r = n.directiveStart,
    o = n.directiveEnd,
    i = n.index,
    s = Oy();
  try {
    qt(i);
    for (let a = r; a < o; a++) {
      let l = e.data[a],
        u = t[a];
      Ms(a),
        (l.hostBindings !== null || l.hostVars !== 0 || l.hostAttrs !== null) &&
          BD(l, u);
    }
  } finally {
    qt(-1), Ms(s);
  }
}
function BD(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function $D(e, t) {
  let n = e.directiveRegistry,
    r = null,
    o = null;
  if (n)
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (yd(t, s.selectors, !1))
        if ((r || (r = []), _t(s)))
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            (o = o || new Map()),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let l = a.length;
            Ys(e, t, l);
          } else r.unshift(s), Ys(e, t, 0);
        else
          (o = o || new Map()), s.findHostDirectiveDefs?.(s, r, o), r.push(s);
    }
  return r === null ? null : [r, o];
}
function Ys(e, t, n) {
  (t.componentOffset = n), (e.components ??= []).push(t.index);
}
function HD(e, t, n) {
  if (t) {
    let r = (e.localNames = []);
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new m(-301, !1);
      r.push(t[o], i);
    }
  }
}
function UD(e, t, n) {
  if (n) {
    if (t.exportAs)
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    _t(t) && (n[""] = e);
  }
}
function zD(e, t, n) {
  (e.flags |= 1),
    (e.directiveStart = t),
    (e.directiveEnd = t + n),
    (e.providerIndexes = t);
}
function qD(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = $t(o.type, !0)),
    s = new Gt(i, _t(o), se);
  (e.blueprint[r] = s), (n[r] = s), LD(e, t, r, rh(e, n, o.hostVars, ze), o);
}
function GD(e, t, n) {
  let r = Ce(t, e),
    o = lh(n),
    i = e[Ke].rendererFactory,
    s = 16;
  n.signals ? (s = 4096) : n.onPush && (s = 64);
  let a = ni(
    e,
    ti(e, o, null, s, r, t, null, i.createRenderer(r, n), null, null, null)
  );
  e[t.index] = a;
}
function WD(e, t, n, r, o, i) {
  let s = Ce(e, t);
  QD(t[U], s, i, e.value, n, r, o);
}
function QD(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? yn(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function ZD(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null)
    for (let a = 0; a < s.length; ) {
      let l = s[a++],
        u = s[a++],
        c = s[a++],
        d = s[a++];
      nh(r, n, l, u, c, d);
    }
}
function KD(e, t, n) {
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
function hh(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function ph(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = R(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o],
          s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          za(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      R(r);
    }
  }
}
function ni(e, t) {
  return e[Zn] ? (e[Ec][Ve] = t) : (e[Zn] = t), (e[Ec] = t), t;
}
function Js(e, t, n) {
  za(0);
  let r = R(null);
  try {
    t(e, n);
  } finally {
    R(r);
  }
}
function gh(e) {
  return (e[Do] ??= []);
}
function mh(e) {
  return (e.cleanup ??= []);
}
function yh(e, t) {
  let n = e[En],
    r = n ? n.get(_n, null) : null;
  r && r.handleError(t);
}
function fl(e, t, n, r, o) {
  for (let i = 0; i < n.length; ) {
    let s = n[i++],
      a = n[i++],
      l = n[i++],
      u = t[s],
      c = e.data[s];
    nh(c, u, r, a, l, o);
  }
}
function vh(e, t, n) {
  let r = Vd(t, e);
  cD(e[U], r, n);
}
function YD(e, t) {
  let n = bt(t, e),
    r = n[b];
  JD(r, n);
  let o = n[Ie];
  o !== null && n[$e] === null && (n[$e] = nl(o, n[En])), hl(r, n, n[He]);
}
function JD(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function hl(e, t, n) {
  qa(t);
  try {
    let r = e.viewQuery;
    r !== null && Js(1, r, n);
    let o = e.template;
    o !== null && oh(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[st]?.finishViewCreation(e),
      e.staticContentQueries && ph(e, t),
      e.staticViewQueries && Js(2, e.viewQuery, n);
    let i = e.components;
    i !== null && XD(t, i);
  } catch (r) {
    throw (
      (e.firstCreatePass &&
        ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
      r)
    );
  } finally {
    (t[_] &= -5), Ga();
  }
}
function XD(e, t) {
  for (let n = 0; n < t.length; n++) YD(e, t[n]);
}
function Dh(e, t, n, r) {
  let o = R(null);
  try {
    let i = t.tView,
      a = e[_] & 4096 ? 4096 : 16,
      l = ti(
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
      u = e[t.index];
    l[Ut] = u;
    let c = e[st];
    return c !== null && (l[st] = c.createEmbeddedView(i)), hl(i, l, n), l;
  } finally {
    R(o);
  }
}
function Xs(e, t) {
  return !t || t.firstChild === null || xo(e);
}
function Eh(e, t, n, r = !0) {
  let o = t[b];
  if ((pD(o, t, e, n), r)) {
    let s = Ks(n, e),
      a = t[U],
      l = Qf(a, e[at]);
    l !== null && fD(o, e[Ee], a, t, l, s);
  }
  let i = t[$e];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function Po(e, t, n, r, o = !1) {
  for (; n !== null; ) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(Ue(i)), Je(i) && eE(i, r);
    let s = n.type;
    if (s & 8) Po(e, t, n.child, r);
    else if (s & 32) {
      let a = ol(n, t),
        l;
      for (; (l = a()); ) r.push(l);
    } else if (s & 16) {
      let a = Kf(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let l = zt(t[De]);
        Po(l[b], l, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function eE(e, t) {
  for (let n = ve; n < e.length; n++) {
    let r = e[n],
      o = r[b].firstChild;
    o !== null && Po(r[b], r, o, t);
  }
  e[at] !== e[Ie] && t.push(e[at]);
}
var wh = [];
function tE(e) {
  return e[Oe] ?? nE(e);
}
function nE(e) {
  let t = wh.pop() ?? Object.create(oE);
  return (t.lView = e), t;
}
function rE(e) {
  e.lView[Oe] !== e && ((e.lView = null), wh.push(e));
}
var oE = nt(_e({}, Fn), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    Qo(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[Oe] = this;
  },
});
function iE(e) {
  let t = e[Oe] ?? Object.create(sE);
  return (t.lView = e), t;
}
var sE = nt(_e({}, Fn), {
  consumerIsAlwaysLive: !0,
  consumerMarkedDirty: (e) => {
    let t = zt(e.lView);
    for (; t && !_h(t[b]); ) t = zt(t);
    t && Hd(t);
  },
  consumerOnSignalRead() {
    this.lView[Oe] = this;
  },
});
function _h(e) {
  return e.type !== 2;
}
var aE = 100;
function Ih(e, t = !0, n = 0) {
  let r = e[Ke],
    o = r.rendererFactory,
    i = !1;
  i || o.begin?.();
  try {
    lE(e, n);
  } catch (s) {
    throw (t && yh(e, s), s);
  } finally {
    i || (o.end?.(), r.inlineEffectRunner?.flush());
  }
}
function lE(e, t) {
  let n = Zd();
  try {
    _c(!0), ea(e, t);
    let r = 0;
    for (; Wo(e); ) {
      if (r === aE) throw new m(103, !1);
      r++, ea(e, 1);
    }
  } finally {
    _c(n);
  }
}
function uE(e, t, n, r) {
  let o = t[_];
  if ((o & 256) === 256) return;
  let i = !1,
    s = !1;
  !i && t[Ke].inlineEffectRunner?.flush(), qa(t);
  let a = !0,
    l = null,
    u = null;
  i ||
    (_h(e)
      ? ((u = tE(t)), (l = Ir(u)))
      : Cu() === null
      ? ((a = !1), (u = iE(t)), (l = Ir(u)))
      : t[Oe] && (ji(t[Oe]), (t[Oe] = null)));
  try {
    $d(t), Ny(e.bindingStartIndex), n !== null && oh(e, t, n, 2, r);
    let c = (o & 3) === 3;
    if (!i)
      if (c) {
        let f = e.preOrderCheckHooks;
        f !== null && uo(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && co(t, f, 0, null), os(t, 0);
      }
    if ((s || cE(t), Ch(t, 0), e.contentQueries !== null && ph(e, t), !i))
      if (c) {
        let f = e.contentCheckHooks;
        f !== null && uo(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && co(t, f, 1), os(t, 1);
      }
    bD(e, t);
    let d = e.components;
    d !== null && Sh(t, d, 0);
    let h = e.viewQuery;
    if ((h !== null && Js(2, h, r), !i))
      if (c) {
        let f = e.viewCheckHooks;
        f !== null && uo(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && co(t, f, 2), os(t, 2);
      }
    if ((e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[rs])) {
      for (let f of t[rs]) f();
      t[rs] = null;
    }
    i || (t[_] &= -73);
  } catch (c) {
    throw (i || Qo(t), c);
  } finally {
    u !== null && (ki(u, l), a && rE(u)), Ga();
  }
}
function Ch(e, t) {
  for (let n = _f(e); n !== null; n = If(n))
    for (let r = ve; r < n.length; r++) {
      let o = n[r];
      bh(o, t);
    }
}
function cE(e) {
  for (let t = _f(e); t !== null; t = If(t)) {
    if (!(t[_] & wo.HasTransplantedViews)) continue;
    let n = t[wn];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      Hd(o);
    }
  }
}
function dE(e, t, n) {
  let r = bt(t, e);
  bh(r, n);
}
function bh(e, t) {
  $a(e) && ea(e, t);
}
function ea(e, t) {
  let r = e[b],
    o = e[_],
    i = e[Oe],
    s = !!(t === 0 && o & 16);
  if (
    ((s ||= !!(o & 64 && t === 0)),
    (s ||= !!(o & 1024)),
    (s ||= !!(i?.dirty && Li(i))),
    (s ||= !1),
    i && (i.dirty = !1),
    (e[_] &= -9217),
    s)
  )
    uE(r, e, r.template, e[He]);
  else if (o & 8192) {
    Ch(e, 1);
    let a = r.components;
    a !== null && Sh(e, a, 1);
  }
}
function Sh(e, t, n) {
  for (let r = 0; r < t.length; r++) dE(e, t[r], n);
}
function pl(e, t) {
  let n = Zd() ? 64 : 1088;
  for (e[Ke].changeDetectionScheduler?.notify(t); e; ) {
    e[_] |= n;
    let r = zt(e);
    if (_o(e) && !r) return e;
    e = r;
  }
  return null;
}
var Zt = class {
    get rootNodes() {
      let t = this._lView,
        n = t[b];
      return Po(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      (this._lView = t),
        (this._cdRefInjectingView = n),
        (this.notifyErrorHandler = r),
        (this._appRef = null),
        (this._attachedToViewContainer = !1);
    }
    get context() {
      return this._lView[He];
    }
    set context(t) {
      this._lView[He] = t;
    }
    get destroyed() {
      return (this._lView[_] & 256) === 256;
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[ie];
        if (Je(t)) {
          let n = t[Eo],
            r = n ? n.indexOf(this) : -1;
          r > -1 && (Zs(t, r), yo(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      qf(this._lView[b], this._lView);
    }
    onDestroy(t) {
      Ud(this._lView, t);
    }
    markForCheck() {
      pl(this._cdRefInjectingView || this._lView, 4);
    }
    detach() {
      this._lView[_] &= -129;
    }
    reattach() {
      Ss(this._lView), (this._lView[_] |= 128);
    }
    detectChanges() {
      (this._lView[_] |= 1024), Ih(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new m(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = _o(this._lView),
        n = this._lView[Ut];
      n !== null && !t && sl(n, this._lView), Uf(this._lView[b], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new m(902, !1);
      this._appRef = t;
      let n = _o(this._lView),
        r = this._lView[Ut];
      r !== null && !n && zf(r, this._lView), Ss(this._lView);
    }
  },
  Kt = (() => {
    class e {
      static {
        this.__NG_ELEMENT_ID__ = pE;
      }
    }
    return e;
  })(),
  fE = Kt,
  hE = class extends fE {
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
      let o = Dh(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new Zt(o);
    }
  };
function pE() {
  return gl(ce(), A());
}
function gl(e, t) {
  return e.type & 4 ? new hE(t, e, Tn(e, t)) : null;
}
var gE = new RegExp(`^(\\d+)*(${Sf}|${bf})*(.*)`);
function mE(e) {
  let t = e.match(gE),
    [n, r, o, i] = t,
    s = r ? parseInt(r, 10) : o,
    a = [];
  for (let [l, u, c] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(c, 10) || 1;
    a.push(u, d);
  }
  return [s, ...a];
}
function yE(e) {
  return !e.prev && e.parent?.type === 8;
}
function cs(e) {
  return e.index - J;
}
function vE(e, t) {
  let n = e.i18nNodes;
  if (n) return n.get(t);
}
function ri(e, t, n, r) {
  let o = cs(r),
    i = vE(e, o);
  if (i === void 0) {
    let s = e.data[bv];
    if (s?.[o]) i = EE(s[o], n);
    else if (t.firstChild === r) i = e.firstChild;
    else {
      let a = r.prev === null,
        l = r.prev ?? r.parent;
      if (yE(r)) {
        let u = cs(r.parent);
        i = Bs(e, u);
      } else {
        let u = Ce(l, n);
        if (a) i = u.firstChild;
        else {
          let c = cs(l),
            d = Bs(e, c);
          if (l.type === 2 && d) {
            let f = rl(e, c) + 1;
            i = oi(f, d);
          } else i = u.nextSibling;
        }
      }
    }
  }
  return i;
}
function oi(e, t) {
  let n = t;
  for (let r = 0; r < e; r++) n = n.nextSibling;
  return n;
}
function DE(e, t) {
  let n = e;
  for (let r = 0; r < t.length; r += 2) {
    let o = t[r],
      i = t[r + 1];
    for (let s = 0; s < i; s++)
      switch (o) {
        case Vs.FirstChild:
          n = n.firstChild;
          break;
        case Vs.NextSibling:
          n = n.nextSibling;
          break;
      }
  }
  return n;
}
function EE(e, t) {
  let [n, ...r] = mE(e),
    o;
  if (n === bf) o = t[De][Ie];
  else if (n === Sf) o = lD(t[De][Ie]);
  else {
    let i = Number(n);
    o = Ue(t[i + J]);
  }
  return DE(o, r);
}
var wE = !1;
function _E(e) {
  wE = e;
}
function IE(e) {
  let t = e[$e];
  if (t) {
    let { i18nNodes: n, dehydratedIcuData: r } = t;
    if (n && r) {
      let o = e[U];
      for (let i of r.values()) CE(o, n, i);
    }
    (t.i18nNodes = void 0), (t.dehydratedIcuData = void 0);
  }
}
function CE(e, t, n) {
  for (let r of n.node.cases[n.case]) {
    let o = t.get(r.index - J);
    o && ll(e, o, !1);
  }
}
function Mh(e) {
  let t = e[Kn] ?? [],
    r = e[ie][U];
  for (let o of t) bE(o, r);
  e[Kn] = he;
}
function bE(e, t) {
  let n = 0,
    r = e.firstChild;
  if (r) {
    let o = e.data[Ao];
    for (; n < o; ) {
      let i = r.nextSibling;
      ll(t, r, !1), (r = i), n++;
    }
  }
}
function Th(e) {
  Mh(e);
  let t = e[Ie];
  Be(t) && Fo(t);
  for (let n = ve; n < e.length; n++) Fo(e[n]);
}
function Fo(e) {
  IE(e);
  let t = e[b];
  for (let n = J; n < t.bindingStartIndex; n++)
    if (Je(e[n])) {
      let r = e[n];
      Th(r);
    } else Be(e[n]) && Fo(e[n]);
}
function SE(e) {
  let t = e._views;
  for (let n of t) {
    let r = xv(n);
    r !== null && r[Ie] !== null && (Be(r) ? Fo(r) : Th(r));
  }
}
function ME(e, t) {
  let n = [];
  for (let r of t)
    for (let o = 0; o < (r[Mf] ?? 1); o++) {
      let i = { data: r, firstChild: null };
      r[Ao] > 0 && ((i.firstChild = e), (e = oi(r[Ao], e))), n.push(i);
    }
  return [e, n];
}
var Nh = () => null;
function TE(e, t) {
  let n = e[Kn];
  return !t || n === null || n.length === 0
    ? null
    : n[0].data[Cv] === t
    ? n.shift()
    : (Mh(e), null);
}
function NE() {
  Nh = TE;
}
function ta(e, t) {
  return Nh(e, t);
}
var In = class {},
  ml = new k("", { providedIn: "root", factory: () => !1 });
var xh = new k(""),
  Ah = new k(""),
  na = class {},
  Ro = class {};
function xE(e) {
  let t = Error(`No component factory found for ${pe(e)}.`);
  return (t[AE] = e), t;
}
var AE = "ngComponent";
var ra = class {
    resolveComponentFactory(t) {
      throw xE(t);
    }
  },
  Cn = class {
    static {
      this.NULL = new ra();
    }
  },
  ko = class {},
  yl = (() => {
    class e {
      constructor() {
        this.destroyNode = null;
      }
      static {
        this.__NG_ELEMENT_ID__ = () => OE();
      }
    }
    return e;
  })();
function OE() {
  let e = A(),
    t = ce(),
    n = bt(t.index, e);
  return (Be(n) ? n : e)[U];
}
var PE = (() => {
  class e {
    static {
      this.ɵprov = $({ token: e, providedIn: "root", factory: () => null });
    }
  }
  return e;
})();
function oa(e, t, n) {
  let r = n ? e.styles : null,
    o = n ? e.classes : null,
    i = 0;
  if (t !== null)
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = ys(o, a);
      else if (i == 2) {
        let l = a,
          u = t[++s];
        r = ys(r, l + ": " + u + ";");
      }
    }
  n ? (e.styles = r) : (e.stylesWithoutHost = r),
    n ? (e.classes = o) : (e.classesWithoutHost = o);
}
var Lo = class extends Cn {
  constructor(t) {
    super(), (this.ngModule = t);
  }
  resolveComponentFactory(t) {
    let n = Ht(t);
    return new Jn(n, this.ngModule);
  }
};
function Bc(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o),
      s = i ? o[0] : o,
      a = i ? o[1] : Et.None;
    t
      ? n.push({
          propName: s,
          templateName: r,
          isSignal: (a & Et.SignalBased) !== 0,
        })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function FE(e) {
  let t = e.toLowerCase();
  return t === "svg" ? jd : t === "math" ? gy : null;
}
var Jn = class extends Ro {
    get inputs() {
      let t = this.componentDef,
        n = t.inputTransforms,
        r = Bc(t.inputs, !0);
      if (n !== null)
        for (let o of r)
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
      return r;
    }
    get outputs() {
      return Bc(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        (this.componentDef = t),
        (this.ngModule = n),
        (this.componentType = t.type),
        (this.selector = Wm(t.selectors)),
        (this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : []),
        (this.isBoundToModule = !!n);
    }
    create(t, n, r, o) {
      let i = R(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof wt ? o : o?.injector;
        s &&
          this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new Ts(t, s) : t,
          l = a.get(ko, null);
        if (l === null) throw new m(407, !1);
        let u = a.get(PE, null),
          c = a.get(In, null),
          d = {
            rendererFactory: l,
            sanitizer: u,
            inlineEffectRunner: null,
            changeDetectionScheduler: c,
          },
          h = l.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          p = r
            ? TD(h, r, this.componentDef.encapsulation, a)
            : il(h, f, FE(f)),
          g = 512;
        this.componentDef.signals
          ? (g |= 4096)
          : this.componentDef.onPush || (g |= 16);
        let D = null;
        p !== null && (D = nl(p, a, !0));
        let v = cl(0, null, null, 1, 0, null, null, null, null, null, null),
          I = ti(null, v, null, g, null, null, d, h, a, null, D);
        qa(I);
        let B,
          P,
          ae = null;
        try {
          let G = this.componentDef,
            Z,
            ne = null;
          G.findHostDirectiveDefs
            ? ((Z = []),
              (ne = new Map()),
              G.findHostDirectiveDefs(G, Z, ne),
              Z.push(G))
            : (Z = [G]);
          let tt = RE(I, p);
          (ae = kE(tt, p, G, Z, I, d, h)),
            (P = Bd(v, J)),
            p && VE(h, G, p, r),
            n !== void 0 && BE(P, this.ngContentSelectors, n),
            (B = jE(ae, G, Z, ne, I, [$E])),
            hl(v, I, null);
        } catch (G) {
          throw (ae !== null && Ls(ae), Ls(I), G);
        } finally {
          Ga();
        }
        return new ia(this.componentType, B, Tn(P, I), I, P);
      } finally {
        R(i);
      }
    }
  },
  ia = class extends na {
    constructor(t, n, r, o, i) {
      super(),
        (this.location = r),
        (this._rootLView = o),
        (this._tNode = i),
        (this.previousInputValues = null),
        (this.instance = n),
        (this.hostView = this.changeDetectorRef = new Zt(o, void 0, !1)),
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
        fl(i[b], i, o, t, n), this.previousInputValues.set(t, n);
        let s = bt(this._tNode.index, i);
        pl(s, 1);
      }
    }
    get injector() {
      return new Bt(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function RE(e, t) {
  let n = e[b],
    r = J;
  return (e[r] = t), lr(n, r, 2, "#host", null);
}
function kE(e, t, n, r, o, i, s) {
  let a = o[b];
  LE(r, e, t, s);
  let l = null;
  t !== null && (l = nl(t, o[En]));
  let u = i.rendererFactory.createRenderer(t, n),
    c = 16;
  n.signals ? (c = 4096) : n.onPush && (c = 64);
  let d = ti(o, lh(n), null, c, o[e.index], e, i, u, null, null, l);
  return (
    a.firstCreatePass && Ys(a, e, r.length - 1), ni(o, d), (o[e.index] = d)
  );
}
function LE(e, t, n, r) {
  for (let o of e) t.mergedAttrs = Wn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (oa(t, t.mergedAttrs, !0), n !== null && eh(r, n, t));
}
function jE(e, t, n, r, o, i) {
  let s = ce(),
    a = o[b],
    l = Ce(s, o);
  dh(a, o, s, n, null, r);
  for (let c = 0; c < n.length; c++) {
    let d = s.directiveStart + c,
      h = Wt(o, a, d, s);
    Qt(h, o);
  }
  fh(a, o, s), l && Qt(l, o);
  let u = Wt(o, a, s.directiveStart + s.componentOffset, s);
  if (((e[He] = o[He] = u), i !== null)) for (let c of i) c(u, t);
  return ih(a, s, o), u;
}
function VE(e, t, n, r) {
  if (r) ws(e, n, ["ng-version", "18.2.11"]);
  else {
    let { attrs: o, classes: i } = Qm(t.selectors[0]);
    o && ws(e, n, o), i && i.length > 0 && Xf(e, n, i.join(" "));
  }
}
function BE(e, t, n) {
  let r = (e.projection = []);
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null ? Array.from(i) : null);
  }
}
function $E() {
  let e = ce();
  Qa(A()[b], e);
}
var Nn = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = HE;
    }
  }
  return e;
})();
function HE() {
  let e = ce();
  return Ph(e, A());
}
var UE = Nn,
  Oh = class extends UE {
    constructor(t, n, r) {
      super(),
        (this._lContainer = t),
        (this._hostTNode = n),
        (this._hostLView = r);
    }
    get element() {
      return Tn(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Bt(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = Za(this._hostTNode, this._hostLView);
      if (sf(t)) {
        let n = bo(t, this._hostLView),
          r = Co(t),
          o = n[b].data[r + 8];
        return new Bt(o, n);
      } else return new Bt(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0; ) this.remove(this.length - 1);
    }
    get(t) {
      let n = $c(this._lContainer);
      return (n !== null && n[t]) || null;
    }
    get length() {
      return this._lContainer.length - ve;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number"
        ? (o = r)
        : r != null && ((o = r.index), (i = r.injector));
      let s = ta(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Xs(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !dy(t),
        a;
      if (s) a = n;
      else {
        let p = n || {};
        (a = p.index),
          (r = p.injector),
          (o = p.projectableNodes),
          (i = p.environmentInjector || p.ngModuleRef);
      }
      let l = s ? t : new Jn(Ht(t)),
        u = r || this.parentInjector;
      if (!i && l.ngModule == null) {
        let g = (s ? u : this.parentInjector).get(wt, null);
        g && (i = g);
      }
      let c = Ht(l.componentType ?? {}),
        d = ta(this._lContainer, c?.id ?? null),
        h = d?.firstChild ?? null,
        f = l.create(u, o, h, i);
      return this.insertImpl(f.hostView, a, Xs(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (yy(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let l = o[ie],
            u = new Oh(l, l[Ee], l[ie]);
          u.detach(u.indexOf(t));
        }
      }
      let i = this._adjustIndex(n),
        s = this._lContainer;
      return Eh(s, o, i, r), t.attachToViewContainerRef(), dd(ds(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = $c(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1),
        r = Zs(this._lContainer, n);
      r && (yo(ds(this._lContainer), n), qf(r[b], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1),
        r = Zs(this._lContainer, n);
      return r && yo(ds(this._lContainer), n) != null ? new Zt(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function $c(e) {
  return e[Eo];
}
function ds(e) {
  return e[Eo] || (e[Eo] = []);
}
function Ph(e, t) {
  let n,
    r = t[e.index];
  return (
    Je(r) ? (n = r) : ((n = hh(r, t, null, e)), (t[e.index] = n), ni(t, n)),
    Fh(n, t, e, r),
    new Oh(n, e, t)
  );
}
function zE(e, t) {
  let n = e[U],
    r = n.createComment(""),
    o = Ce(t, e),
    i = Qf(n, o);
  return Oo(n, i, r, vD(n, o), !1), r;
}
var Fh = Rh,
  vl = () => !1;
function qE(e, t, n) {
  return vl(e, t, n);
}
function Rh(e, t, n, r) {
  if (e[at]) return;
  let o;
  n.type & 8 ? (o = Ue(r)) : (o = zE(t, n)), (e[at] = o);
}
function GE(e, t, n) {
  if (e[at] && e[Kn]) return !0;
  let r = n[$e],
    o = t.index - J;
  if (!r || hv(t) || sr(r, o)) return !1;
  let s = Bs(r, o),
    a = r.data[tl]?.[o],
    [l, u] = ME(s, a);
  return (e[at] = l), (e[Kn] = u), !0;
}
function WE(e, t, n, r) {
  vl(e, n, t) || Rh(e, t, n, r);
}
function QE() {
  (Fh = WE), (vl = GE);
}
var sa = class e {
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
  aa = class e {
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
        Dl(t, n).matches !== null && this.queries[n].setDirty();
    }
  },
  jo = class {
    constructor(t, n, r = null) {
      (this.flags = n),
        (this.read = r),
        typeof t == "string" ? (this.predicate = nw(t)) : (this.predicate = t);
    }
  },
  la = class e {
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
  ua = class e {
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
          this.matchTNodeWithReadOption(t, n, ZE(n, i)),
            this.matchTNodeWithReadOption(t, n, fo(n, t, i, !1, !1));
        }
      else
        r === Kt
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, fo(n, t, r, !1, !1));
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null)
          if (o === Jt || o === Nn || (o === Kt && n.type & 4))
            this.addMatch(n.index, -2);
          else {
            let i = fo(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? (this.matches = [t, n]) : this.matches.push(t, n);
    }
  };
function ZE(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function KE(e, t) {
  return e.type & 11 ? Tn(e, t) : e.type & 4 ? gl(e, t) : null;
}
function YE(e, t, n, r) {
  return n === -1 ? KE(t, e) : n === -2 ? JE(e, t, r) : Wt(e, e[b], n, t);
}
function JE(e, t, n) {
  if (n === Jt) return Tn(t, e);
  if (n === Kt) return gl(t, e);
  if (n === Nn) return Ph(t, e);
}
function kh(e, t, n, r) {
  let o = t[st].queries[r];
  if (o.matches === null) {
    let i = e.data,
      s = n.matches,
      a = [];
    for (let l = 0; s !== null && l < s.length; l += 2) {
      let u = s[l];
      if (u < 0) a.push(null);
      else {
        let c = i[u];
        a.push(YE(t, c, s[l + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function ca(e, t, n, r) {
  let o = e.queries.getByIndex(n),
    i = o.matches;
  if (i !== null) {
    let s = kh(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let l = i[a];
      if (l > 0) r.push(s[a / 2]);
      else {
        let u = i[a + 1],
          c = t[-l];
        for (let d = ve; d < c.length; d++) {
          let h = c[d];
          h[Ut] === h[ie] && ca(h[b], h, u, r);
        }
        if (c[wn] !== null) {
          let d = c[wn];
          for (let h = 0; h < d.length; h++) {
            let f = d[h];
            ca(f[b], f, u, r);
          }
        }
      }
    }
  }
  return r;
}
function XE(e, t) {
  return e[st].queries[t].queryList;
}
function Lh(e, t, n) {
  let r = new ks((n & 4) === 4);
  return (
    OD(e, t, r, r.destroy), (t[st] ??= new aa()).queries.push(new sa(r)) - 1
  );
}
function ew(e, t, n) {
  let r = X();
  return (
    r.firstCreatePass &&
      (jh(r, new jo(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    Lh(r, A(), t)
  );
}
function tw(e, t, n, r) {
  let o = X();
  if (o.firstCreatePass) {
    let i = ce();
    jh(o, new jo(t, n, r), i.index),
      rw(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return Lh(o, A(), n);
}
function nw(e) {
  return e.split(",").map((t) => t.trim());
}
function jh(e, t, n) {
  e.queries === null && (e.queries = new la()), e.queries.track(new ua(t, n));
}
function rw(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function Dl(e, t) {
  return e.queries.getByIndex(t);
}
function ow(e, t) {
  let n = e[b],
    r = Dl(n, t);
  return r.crossesNgTemplate ? ca(n, e, t, []) : kh(n, e, r, t);
}
var Hc = new Set();
function Xt(e) {
  Hc.has(e) ||
    (Hc.add(e),
    performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function iw(e) {
  return typeof e == "function" && e[rt] !== void 0;
}
function yA(e, t) {
  Xt("NgSignals");
  let n = Ru(e),
    r = n[rt];
  return (
    t?.equal && (r.equal = t.equal),
    (n.set = (o) => Vi(r, o)),
    (n.update = (o) => ku(r, o)),
    (n.asReadonly = sw.bind(n)),
    n
  );
}
function sw() {
  let e = this[rt];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    (t[rt] = e), (e.readonlyFn = t);
  }
  return e.readonlyFn;
}
function Vh(e) {
  return iw(e) && typeof e.set == "function";
}
function aw(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function lw(e) {
  let t = aw(e.type),
    n = !0,
    r = [e];
  for (; t; ) {
    let o;
    if (_t(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new m(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        (s.inputs = oo(e.inputs)),
          (s.inputTransforms = oo(e.inputTransforms)),
          (s.declaredInputs = oo(e.declaredInputs)),
          (s.outputs = oo(e.outputs));
        let a = o.hostBindings;
        a && hw(e, a);
        let l = o.viewQuery,
          u = o.contentQueries;
        if (
          (l && dw(e, l),
          u && fw(e, u),
          uw(e, o),
          fm(e.outputs, o.outputs),
          _t(o) && o.data.animation)
        ) {
          let c = e.data;
          c.animation = (c.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i)
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === lw && (n = !1);
        }
    }
    t = Object.getPrototypeOf(t);
  }
  cw(r);
}
function uw(e, t) {
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
function cw(e) {
  let t = 0,
    n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    (o.hostVars = t += o.hostVars),
      (o.hostAttrs = Wn(o.hostAttrs, (n = Wn(n, o.hostAttrs))));
  }
}
function oo(e) {
  return e === vn ? {} : e === he ? [] : e;
}
function dw(e, t) {
  let n = e.viewQuery;
  n
    ? (e.viewQuery = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.viewQuery = t);
}
function fw(e, t) {
  let n = e.contentQueries;
  n
    ? (e.contentQueries = (r, o, i) => {
        t(r, o, i), n(r, o, i);
      })
    : (e.contentQueries = t);
}
function hw(e, t) {
  let n = e.hostBindings;
  n
    ? (e.hostBindings = (r, o) => {
        t(r, o), n(r, o);
      })
    : (e.hostBindings = t);
}
function pw(e) {
  let t = e.inputConfig,
    n = {};
  for (let r in t)
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  e.inputTransforms = n;
}
var Ct = class {},
  da = class {};
var fa = class extends Ct {
    constructor(t, n, r, o = !0) {
      super(),
        (this.ngModuleType = t),
        (this._parent = n),
        (this._bootstrapComponents = []),
        (this.destroyCbs = []),
        (this.componentFactoryResolver = new Lo(this));
      let i = Ed(t);
      (this._bootstrapComponents = Bf(i.bootstrap)),
        (this._r3Injector = gf(
          t,
          n,
          [
            { provide: Ct, useValue: this },
            { provide: Cn, useValue: this.componentFactoryResolver },
            ...r,
          ],
          pe(t),
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
  ha = class extends da {
    constructor(t) {
      super(), (this.moduleType = t);
    }
    create(t) {
      return new fa(this.moduleType, t, []);
    }
  };
var Vo = class extends Ct {
  constructor(t) {
    super(),
      (this.componentFactoryResolver = new Lo(this)),
      (this.instance = null);
    let n = new Qn(
      [
        ...t.providers,
        { provide: Ct, useValue: this },
        { provide: Cn, useValue: this.componentFactoryResolver },
      ],
      t.parent || ja(),
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
function gw(e, t, n = null) {
  return new Vo({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
function Bh(e) {
  return El(e)
    ? Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e)
    : !1;
}
function mw(e, t) {
  if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
  else {
    let n = e[Symbol.iterator](),
      r;
    for (; !(r = n.next()).done; ) t(r.value);
  }
}
function El(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function $h(e, t, n) {
  return (e[t] = n);
}
function Ye(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : ((e[t] = n), !0);
}
function Hh(e, t, n, r) {
  let o = Ye(e, t, n);
  return Ye(e, t + 1, r) || o;
}
function ur(e) {
  return (e.flags & 32) === 32;
}
function yw(e, t, n, r, o, i, s, a, l) {
  let u = t.consts,
    c = lr(t, e, 4, s || null, a || null);
  ch(t, n, c, Io(u, l)), Qa(t, c);
  let d = (c.tView = cl(
    2,
    c,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    u,
    null
  ));
  return (
    t.queries !== null &&
      (t.queries.template(t, c), (d.queries = t.queries.embeddedTView(c))),
    c
  );
}
function Uh(e, t, n, r, o, i, s, a, l, u) {
  let c = n + J,
    d = t.firstCreatePass ? yw(c, t, e, r, o, i, s, a, l) : t.data[c];
  rr(d, !1);
  let h = zh(t, e, d, n);
  Wa() && al(t, e, h, d), Qt(h, e);
  let f = hh(h, e, h, d);
  return (
    (e[c] = f),
    ni(e, f),
    qE(f, d, e),
    Va(d) && sh(t, e, d),
    l != null && ah(e, d, u),
    d
  );
}
function vw(e, t, n, r, o, i, s, a) {
  let l = A(),
    u = X(),
    c = Io(u.consts, i);
  return Uh(l, u, e, t, n, r, o, c, s, a), vw;
}
var zh = qh;
function qh(e, t, n, r) {
  return Mt(!0), t[U].createComment("");
}
function Dw(e, t, n, r) {
  let o = t[$e],
    i = !o || Mn() || ur(n) || sr(o, r);
  if ((Mt(i), i)) return qh(e, t, n, r);
  let s = o.data[Iv]?.[r] ?? null;
  s !== null &&
    n.tView !== null &&
    n.tView.ssrId === null &&
    (n.tView.ssrId = s);
  let a = ri(o, e, t, n);
  Yo(o, r, a);
  let l = rl(o, r);
  return oi(l, a);
}
function Ew() {
  zh = Dw;
}
var pn = (function (e) {
    return (
      (e[(e.EarlyRead = 0)] = "EarlyRead"),
      (e[(e.Write = 1)] = "Write"),
      (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
      (e[(e.Read = 3)] = "Read"),
      e
    );
  })(pn || {}),
  Gh = (() => {
    class e {
      constructor() {
        this.impl = null;
      }
      execute() {
        this.impl?.execute();
      }
      static {
        this.ɵprov = $({
          token: e,
          providedIn: "root",
          factory: () => new e(),
        });
      }
    }
    return e;
  })(),
  pa = class e {
    constructor() {
      (this.ngZone = M(ue)),
        (this.scheduler = M(In)),
        (this.errorHandler = M(_n, { optional: !0 })),
        (this.sequences = new Set()),
        (this.deferredRegistrations = new Set()),
        (this.executing = !1);
    }
    static {
      this.PHASES = [pn.EarlyRead, pn.Write, pn.MixedReadWrite, pn.Read];
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
      this.ɵprov = $({ token: e, providedIn: "root", factory: () => new e() });
    }
  },
  ga = class {
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
function ww(e, t) {
  !t?.injector && cy(ww);
  let n = t?.injector ?? M(It);
  return $n(n) ? (Xt("NgAfterNextRender"), Iw(e, n, t, !0)) : Cw;
}
function _w(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return (n[t] = e), n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function Iw(e, t, n, r) {
  let o = t.get(Gh);
  o.impl ??= t.get(pa);
  let i = n?.phase ?? pn.MixedReadWrite,
    s = n?.manualCleanup !== !0 ? t.get(Ka) : null,
    a = new ga(o.impl, _w(e, i), r, s);
  return o.impl.register(a), a;
}
var Cw = { destroy() {} };
function bw(e, t, n, r) {
  let o = A(),
    i = or();
  if (Ye(o, i, t)) {
    let s = X(),
      a = Zo();
    WD(a, o, e, t, n, r);
  }
  return bw;
}
function Sw(e, t, n, r) {
  return Ye(e, or(), n) ? t + yn(n) + r : ze;
}
function Mw(e, t, n, r, o, i) {
  let s = Ty(),
    a = Hh(e, s, n, o);
  return Ua(2), a ? t + yn(n) + r + yn(o) + i : ze;
}
function io(e, t) {
  return (e << 17) | (t << 2);
}
function Yt(e) {
  return (e >> 17) & 32767;
}
function Tw(e) {
  return (e & 2) == 2;
}
function Nw(e, t) {
  return (e & 131071) | (t << 17);
}
function ma(e) {
  return e | 2;
}
function bn(e) {
  return (e & 131068) >> 2;
}
function fs(e, t) {
  return (e & -131069) | (t << 2);
}
function xw(e) {
  return (e & 1) === 1;
}
function ya(e) {
  return e | 1;
}
function Aw(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings,
    a = Yt(s),
    l = bn(s);
  e[r] = n;
  let u = !1,
    c;
  if (Array.isArray(n)) {
    let d = n;
    (c = d[1]), (c === null || tr(d, c) > 0) && (u = !0);
  } else c = n;
  if (o)
    if (l !== 0) {
      let h = Yt(e[a + 1]);
      (e[r + 1] = io(h, a)),
        h !== 0 && (e[h + 1] = fs(e[h + 1], r)),
        (e[a + 1] = Nw(e[a + 1], r));
    } else
      (e[r + 1] = io(a, 0)), a !== 0 && (e[a + 1] = fs(e[a + 1], r)), (a = r);
  else
    (e[r + 1] = io(l, 0)),
      a === 0 ? (a = r) : (e[l + 1] = fs(e[l + 1], r)),
      (l = r);
  u && (e[r + 1] = ma(e[r + 1])),
    Uc(e, c, r, !0),
    Uc(e, c, r, !1),
    Ow(t, c, e, r, i),
    (s = io(a, l)),
    i ? (t.classBindings = s) : (t.styleBindings = s);
}
function Ow(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null &&
    typeof t == "string" &&
    tr(i, t) >= 0 &&
    (n[r + 1] = ya(n[r + 1]));
}
function Uc(e, t, n, r) {
  let o = e[n + 1],
    i = t === null,
    s = r ? Yt(o) : bn(o),
    a = !1;
  for (; s !== 0 && (a === !1 || i); ) {
    let l = e[s],
      u = e[s + 1];
    Pw(l, t) && ((a = !0), (e[s + 1] = r ? ya(u) : ma(u))),
      (s = r ? Yt(u) : bn(u));
  }
  a && (e[n + 1] = r ? ma(o) : ya(o));
}
function Pw(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
    ? tr(e, t) >= 0
    : !1;
}
var Le = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Fw(e) {
  return e.substring(Le.key, Le.keyEnd);
}
function Rw(e) {
  return kw(e), Wh(e, Qh(e, 0, Le.textEnd));
}
function Wh(e, t) {
  let n = Le.textEnd;
  return n === t ? -1 : ((t = Le.keyEnd = Lw(e, (Le.key = t), n)), Qh(e, t, n));
}
function kw(e) {
  (Le.key = 0),
    (Le.keyEnd = 0),
    (Le.value = 0),
    (Le.valueEnd = 0),
    (Le.textEnd = e.length);
}
function Qh(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32; ) t++;
  return t;
}
function Lw(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32; ) t++;
  return t;
}
function jw(e, t, n) {
  let r = A(),
    o = or();
  if (Ye(r, o, t)) {
    let i = X(),
      s = Zo();
    dl(i, s, r, e, t, r[U], n, !1);
  }
  return jw;
}
function va(e, t, n, r, o) {
  let i = t.inputs,
    s = o ? "class" : "style";
  fl(e, n, i[s], s, r);
}
function Zh(e, t, n) {
  return Kh(e, t, n, !1), Zh;
}
function Vw(e, t) {
  return Kh(e, t, null, !0), Vw;
}
function vA(e) {
  $w(Ww, Bw, e, !0);
}
function Bw(e, t) {
  for (let n = Rw(t); n >= 0; n = Wh(t, n)) Pa(e, Fw(t), !0);
}
function Kh(e, t, n, r) {
  let o = A(),
    i = X(),
    s = Ua(2);
  if ((i.firstUpdatePass && Jh(i, e, s, r), t !== ze && Ye(o, s, t))) {
    let a = i.data[St()];
    Xh(i, a, o, o[U], e, (o[s + 1] = Zw(t, n)), r, s);
  }
}
function $w(e, t, n, r) {
  let o = X(),
    i = Ua(2);
  o.firstUpdatePass && Jh(o, null, i, r);
  let s = A();
  if (n !== ze && Ye(s, i, n)) {
    let a = o.data[St()];
    if (ep(a, r) && !Yh(o, i)) {
      let l = r ? a.classesWithoutHost : a.stylesWithoutHost;
      l !== null && (n = ys(l, n || "")), va(o, a, s, n, r);
    } else Qw(o, a, s, s[U], s[i + 1], (s[i + 1] = Gw(e, t, n)), r, i);
  }
}
function Yh(e, t) {
  return t >= e.expandoStartIndex;
}
function Jh(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[St()],
      s = Yh(e, n);
    ep(i, r) && t === null && !s && (t = !1),
      (t = Hw(o, i, t, r)),
      Aw(o, i, t, n, s, r);
  }
}
function Hw(e, t, n, r) {
  let o = Py(e),
    i = r ? t.residualClasses : t.residualStyles;
  if (o === null)
    (r ? t.classBindings : t.styleBindings) === 0 &&
      ((n = hs(null, e, t, n, r)), (n = Xn(n, t.attrs, r)), (i = null));
  else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o)
      if (((n = hs(o, e, t, n, r)), i === null)) {
        let l = Uw(e, t, r);
        l !== void 0 &&
          Array.isArray(l) &&
          ((l = hs(null, e, t, l[1], r)),
          (l = Xn(l, t.attrs, r)),
          zw(e, t, r, l));
      } else i = qw(e, t, r);
  }
  return (
    i !== void 0 && (r ? (t.residualClasses = i) : (t.residualStyles = i)), n
  );
}
function Uw(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (bn(r) !== 0) return e[Yt(r)];
}
function zw(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[Yt(o)] = r;
}
function qw(e, t, n) {
  let r,
    o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = Xn(r, s, n);
  }
  return Xn(r, t.attrs, n);
}
function hs(e, t, n, r, o) {
  let i = null,
    s = n.directiveEnd,
    a = n.directiveStylingLast;
  for (
    a === -1 ? (a = n.directiveStart) : a++;
    a < s && ((i = t[a]), (r = Xn(r, i.hostAttrs, o)), i !== e);

  )
    a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function Xn(e, t, n) {
  let r = n ? 1 : 2,
    o = -1;
  if (t !== null)
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number"
        ? (o = s)
        : o === r &&
          (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Pa(e, s, n ? !0 : t[++i]));
    }
  return e === void 0 ? null : e;
}
function Gw(e, t, n) {
  if (n == null || n === "") return he;
  let r = [],
    o = Xo(n);
  if (Array.isArray(o)) for (let i = 0; i < o.length; i++) e(r, o[i], !0);
  else if (typeof o == "object")
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  else typeof o == "string" && t(r, o);
  return r;
}
function Ww(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && Pa(e, r, n);
}
function Qw(e, t, n, r, o, i, s, a) {
  o === ze && (o = he);
  let l = 0,
    u = 0,
    c = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; c !== null || d !== null; ) {
    let h = l < o.length ? o[l + 1] : void 0,
      f = u < i.length ? i[u + 1] : void 0,
      p = null,
      g;
    c === d
      ? ((l += 2), (u += 2), h !== f && ((p = d), (g = f)))
      : d === null || (c !== null && c < d)
      ? ((l += 2), (p = c))
      : ((u += 2), (p = d), (g = f)),
      p !== null && Xh(e, t, n, r, p, g, s, a),
      (c = l < o.length ? o[l] : null),
      (d = u < i.length ? i[u] : null);
  }
}
function Xh(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let l = e.data,
    u = l[a + 1],
    c = xw(u) ? zc(l, t, n, o, bn(u), s) : void 0;
  if (!Bo(c)) {
    Bo(i) || (Tw(u) && (i = zc(l, null, n, o, a, s)));
    let d = Vd(St(), n);
    ID(r, s, d, o, i);
  }
}
function zc(e, t, n, r, o, i) {
  let s = t === null,
    a;
  for (; o > 0; ) {
    let l = e[o],
      u = Array.isArray(l),
      c = u ? l[1] : l,
      d = c === null,
      h = n[o + 1];
    h === ze && (h = d ? he : void 0);
    let f = d ? ts(h, r) : c === r ? h : void 0;
    if ((u && !Bo(f) && (f = ts(l, r)), Bo(f) && ((a = f), s))) return a;
    let p = e[o + 1];
    o = s ? Yt(p) : bn(p);
  }
  if (t !== null) {
    let l = i ? t.residualClasses : t.residualStyles;
    l != null && (a = ts(l, r));
  }
  return a;
}
function Bo(e) {
  return e !== void 0;
}
function Zw(e, t) {
  return (
    e == null ||
      e === "" ||
      (typeof t == "string"
        ? (e = e + t)
        : typeof e == "object" && (e = pe(Xo(e)))),
    e
  );
}
function ep(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function Kw(e, t, n, r, o, i) {
  let s = t.consts,
    a = Io(s, o),
    l = lr(t, e, 2, r, a);
  return (
    ch(t, n, l, Io(s, i)),
    l.attrs !== null && oa(l, l.attrs, !1),
    l.mergedAttrs !== null && oa(l, l.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, l),
    l
  );
}
function tp(e, t, n, r) {
  let o = A(),
    i = X(),
    s = J + e,
    a = o[U],
    l = i.firstCreatePass ? Kw(s, i, o, t, n, r) : i.data[s],
    u = rp(i, o, l, a, t, e);
  o[s] = u;
  let c = Va(l);
  return (
    rr(l, !0),
    eh(a, u, l),
    !ur(l) && Wa() && al(i, o, u, l),
    Ey() === 0 && Qt(u, o),
    wy(),
    c && (sh(i, o, l), ih(i, l, o)),
    r !== null && ah(o, l),
    tp
  );
}
function np() {
  let e = ce();
  Wd() ? Qd() : ((e = e.parent), rr(e, !1));
  let t = e;
  Iy(t) && by(), _y();
  let n = X();
  return (
    n.firstCreatePass && (Qa(n, e), Od(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null &&
      By(t) &&
      va(n, t, A(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null &&
      $y(t) &&
      va(n, t, A(), t.stylesWithoutHost, !1),
    np
  );
}
function Yw(e, t, n, r) {
  return tp(e, t, n, r), np(), Yw;
}
var rp = (e, t, n, r, o, i) => (Mt(!0), il(r, o, nf()));
function Jw(e, t, n, r, o, i) {
  let s = t[$e],
    a = !s || Mn() || ur(n) || sr(s, i);
  if ((Mt(a), a)) return il(r, o, nf());
  let l = ri(s, e, t, n);
  return (
    Af(s, i) && Yo(s, i, l.nextSibling),
    s && (Df(n) || Ef(l)) && nr(n) && (Cy(n), Yf(l)),
    l
  );
}
function Xw() {
  rp = Jw;
}
var e_ = (e, t, n, r) => (Mt(!0), Hf(t[U], ""));
function t_(e, t, n, r) {
  let o,
    i = t[$e],
    s = !i || Mn() || sr(i, r) || ur(n);
  if ((Mt(s), s)) return Hf(t[U], "");
  let a = ri(i, e, t, n),
    l = Pv(i, r);
  return Yo(i, r, a), (o = oi(l, a)), o;
}
function n_() {
  e_ = t_;
}
function DA() {
  return A();
}
function r_(e, t, n) {
  let r = A(),
    o = or();
  if (Ye(r, o, t)) {
    let i = X(),
      s = Zo();
    dl(i, s, r, e, t, r[U], n, !0);
  }
  return r_;
}
var Vt = void 0;
function o_(e) {
  let t = e,
    n = Math.floor(Math.abs(e)),
    r = e.toString().replace(/^[^.]*\.?/, "").length;
  return n === 1 && r === 0 ? 1 : 5;
}
var i_ = [
    "en",
    [["a", "p"], ["AM", "PM"], Vt],
    [["AM", "PM"], Vt, Vt],
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
    Vt,
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
    Vt,
    [
      ["B", "A"],
      ["BC", "AD"],
      ["Before Christ", "Anno Domini"],
    ],
    0,
    [6, 0],
    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
    ["{1}, {0}", Vt, "{1} 'at' {0}", Vt],
    [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"],
    ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"],
    "USD",
    "$",
    "US Dollar",
    {},
    "ltr",
    o_,
  ],
  ps = {};
function be(e) {
  let t = s_(e),
    n = qc(t);
  if (n) return n;
  let r = t.split("-")[0];
  if (((n = qc(r)), n)) return n;
  if (r === "en") return i_;
  throw new m(701, !1);
}
function qc(e) {
  return (
    e in ps ||
      (ps[e] =
        vt.ng &&
        vt.ng.common &&
        vt.ng.common.locales &&
        vt.ng.common.locales[e]),
    ps[e]
  );
}
var K = (function (e) {
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
})(K || {});
function s_(e) {
  return e.toLowerCase().replace(/_/g, "-");
}
var $o = "en-US";
var a_ = $o;
function l_(e) {
  typeof e == "string" && (a_ = e.toLowerCase().replace(/_/g, "-"));
}
var u_ = (e, t, n) => {};
function c_(e, t, n, r) {
  let o = A(),
    i = X(),
    s = ce();
  return op(i, o, o[U], s, e, t, r), c_;
}
function d_(e, t, n, r) {
  let o = e.cleanup;
  if (o != null)
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Do],
          l = o[i + 2];
        return a.length > l ? a[l] : null;
      }
      typeof s == "string" && (i += 2);
    }
  return null;
}
function op(e, t, n, r, o, i, s) {
  let a = Va(r),
    u = e.firstCreatePass && mh(e),
    c = t[He],
    d = gh(t),
    h = !0;
  if (r.type & 3 || s) {
    let g = Ce(r, t),
      D = s ? s(g) : g,
      v = d.length,
      I = s ? (P) => s(Ue(P[r.index])) : r.index,
      B = null;
    if ((!s && a && (B = d_(e, t, o, r.index)), B !== null)) {
      let P = B.__ngLastListenerFn__ || B;
      (P.__ngNextListenerFn__ = i), (B.__ngLastListenerFn__ = i), (h = !1);
    } else {
      (i = Wc(r, t, c, i)), u_(g, o, i);
      let P = n.listen(D, o, i);
      d.push(i, P), u && u.push(o, I, v, v + 1);
    }
  } else i = Wc(r, t, c, i);
  let f = r.outputs,
    p;
  if (h && f !== null && (p = f[o])) {
    let g = p.length;
    if (g)
      for (let D = 0; D < g; D += 2) {
        let v = p[D],
          I = p[D + 1],
          ae = t[v][I].subscribe(i),
          G = d.length;
        d.push(i, ae), u && u.push(o, r.index, G, -(G + 1));
      }
  }
}
function Gc(e, t, n, r) {
  let o = R(null);
  try {
    return Qe(6, t, n), n(r) !== !1;
  } catch (i) {
    return yh(e, i), !1;
  } finally {
    Qe(7, t, n), R(o);
  }
}
function Wc(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? bt(e.index, t) : t;
    pl(s, 5);
    let a = Gc(t, n, r, i),
      l = o.__ngNextListenerFn__;
    for (; l; ) (a = Gc(t, n, l, i) && a), (l = l.__ngNextListenerFn__);
    return a;
  };
}
function EA(e = 1) {
  return Ry(e);
}
function f_(e, t) {
  let n = null,
    r = Hm(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? yd(e, i, !0) : qm(r, i)) return o;
  }
  return n;
}
function wA(e) {
  let t = A()[De][Ee];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = (t.projection = Pm(n, null)),
      o = r.slice(),
      i = t.child;
    for (; i !== null; ) {
      if (i.type !== 128) {
        let s = e ? f_(i, e) : 0;
        s !== null &&
          (o[s] ? (o[s].projectionNext = i) : (r[s] = i), (o[s] = i));
      }
      i = i.next;
    }
  }
}
function _A(e, t = 0, n, r, o, i) {
  let s = A(),
    a = X(),
    l = r ? e + 1 : null;
  l !== null && Uh(s, a, l, r, o, i, null, n);
  let u = lr(a, J + e, 16, null, n || null);
  u.projection === null && (u.projection = t), Qd();
  let d = !s[$e] || Mn();
  s[De][Ee].projection[u.projection] === null && l !== null
    ? h_(s, a, l)
    : d && (u.flags & 32) !== 32 && wD(a, s, u);
}
function h_(e, t, n) {
  let r = J + n,
    o = t.data[r],
    i = e[r],
    s = ta(i, o.tView.ssrId),
    a = Dh(e, o, void 0, { dehydratedView: s });
  Eh(i, a, 0, Xs(o, s));
}
function IA(e, t, n, r) {
  tw(e, t, n, r);
}
function CA(e, t, n) {
  ew(e, t, n);
}
function bA(e) {
  let t = A(),
    n = X(),
    r = Kd();
  za(r + 1);
  let o = Dl(n, r);
  if (e.dirty && my(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = ow(t, r);
      e.reset(i, uv), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function SA() {
  return XE(A(), Kd());
}
function p_(e, t, n, r) {
  n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
    (t[n] = r);
}
function MA(e) {
  let t = My();
  return Ba(t, J + e);
}
function TA(e, t = "") {
  let n = A(),
    r = X(),
    o = e + J,
    i = r.firstCreatePass ? lr(r, o, 1, t, null) : r.data[o],
    s = ip(r, n, i, t, e);
  (n[o] = s), Wa() && al(r, n, s, i), rr(i, !1);
}
var ip = (e, t, n, r, o) => (Mt(!0), $f(t[U], r));
function g_(e, t, n, r, o) {
  let i = t[$e],
    s = !i || Mn() || ur(n) || sr(i, o);
  return Mt(s), s ? $f(t[U], r) : ri(i, e, t, n);
}
function m_() {
  ip = g_;
}
function y_(e) {
  return sp("", e, ""), y_;
}
function sp(e, t, n) {
  let r = A(),
    o = Sw(r, e, t, n);
  return o !== ze && vh(r, St(), o), sp;
}
function v_(e, t, n, r, o) {
  let i = A(),
    s = Mw(i, e, t, n, r, o);
  return s !== ze && vh(i, St(), s), v_;
}
function D_(e, t, n) {
  Vh(t) && (t = t());
  let r = A(),
    o = or();
  if (Ye(r, o, t)) {
    let i = X(),
      s = Zo();
    dl(i, s, r, e, t, r[U], n, !1);
  }
  return D_;
}
function NA(e, t) {
  let n = Vh(e);
  return n && e.set(t), n;
}
function E_(e, t) {
  let n = A(),
    r = X(),
    o = ce();
  return op(r, n, n[U], o, e, t), E_;
}
function w_(e, t, n) {
  let r = X();
  if (r.firstCreatePass) {
    let o = _t(e);
    Da(n, r.data, r.blueprint, o, !0), Da(t, r.data, r.blueprint, o, !1);
  }
}
function Da(e, t, n, r, o) {
  if (((e = fe(e)), Array.isArray(e)))
    for (let i = 0; i < e.length; i++) Da(e[i], t, n, r, o);
  else {
    let i = X(),
      s = A(),
      a = ce(),
      l = Dn(e) ? e : fe(e.provide),
      u = Td(e),
      c = a.providerIndexes & 1048575,
      d = a.directiveStart,
      h = a.providerIndexes >> 20;
    if (Dn(e) || !e.multi) {
      let f = new Gt(u, o, se),
        p = ms(l, t, o ? c : c + h, d);
      p === -1
        ? (xs(Mo(a, s), i, l),
          gs(i, e, t.length),
          t.push(l),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : ((n[p] = f), (s[p] = f));
    } else {
      let f = ms(l, t, c + h, d),
        p = ms(l, t, c, c + h),
        g = f >= 0 && n[f],
        D = p >= 0 && n[p];
      if ((o && !D) || (!o && !g)) {
        xs(Mo(a, s), i, l);
        let v = C_(o ? I_ : __, n.length, o, r, u);
        !o && D && (n[p].providerFactory = v),
          gs(i, e, t.length, 0),
          t.push(l),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(v),
          s.push(v);
      } else {
        let v = ap(n[o ? p : f], u, !o && r);
        gs(i, e, f > -1 ? f : p, v);
      }
      !o && r && D && n[p].componentProviders++;
    }
  }
}
function gs(e, t, n, r) {
  let o = Dn(t),
    i = ry(t);
  if (o || i) {
    let l = (i ? fe(t.useClass) : t).prototype.ngOnDestroy;
    if (l) {
      let u = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let c = u.indexOf(n);
        c === -1 ? u.push(n, [r, l]) : u[c + 1].push(r, l);
      } else u.push(n, l);
    }
  }
}
function ap(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function ms(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function __(e, t, n, r) {
  return Ea(this.multi, []);
}
function I_(e, t, n, r) {
  let o = this.multi,
    i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = Wt(n, n[b], this.providerFactory.index, r);
    (i = a.slice(0, s)), Ea(o, i);
    for (let l = s; l < a.length; l++) i.push(a[l]);
  } else (i = []), Ea(o, i);
  return i;
}
function Ea(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function C_(e, t, n, r, o) {
  let i = new Gt(e, n, se);
  return (
    (i.multi = []),
    (i.index = t),
    (i.componentProviders = 0),
    ap(i, o, r && !n),
    i
  );
}
function xA(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => w_(r, o ? o(e) : e, t);
  };
}
var b_ = (() => {
  class e {
    constructor(n) {
      (this._injector = n), (this.cachedInjectors = new Map());
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = Cd(!1, n.type),
          o =
            r.length > 0
              ? gw([r], this._injector, `Standalone[${n.type.name}]`)
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
      this.ɵprov = $({
        token: e,
        providedIn: "environment",
        factory: () => new e(oe(wt)),
      });
    }
  }
  return e;
})();
function AA(e) {
  Xt("NgStandalone"),
    (e.getStandaloneInjector = (t) =>
      t.get(b_).getOrCreateStandaloneInjector(e));
}
function OA(e, t, n, r) {
  return up(A(), Ha(), e, t, n, r);
}
function lp(e, t) {
  let n = e[t];
  return n === ze ? void 0 : n;
}
function up(e, t, n, r, o, i) {
  let s = t + n;
  return Ye(e, s, o) ? $h(e, s + 1, i ? r.call(i, o) : r(o)) : lp(e, s + 1);
}
function S_(e, t, n, r, o, i, s) {
  let a = t + n;
  return Hh(e, a, o, i)
    ? $h(e, a + 2, s ? r.call(s, o, i) : r(o, i))
    : lp(e, a + 2);
}
function PA(e, t) {
  let n = X(),
    r,
    o = e + J;
  n.firstCreatePass
    ? ((r = M_(t, n.pipeRegistry)),
      (n.data[o] = r),
      r.onDestroy && (n.destroyHooks ??= []).push(o, r.onDestroy))
    : (r = n.data[o]);
  let i = r.factory || (r.factory = $t(r.type, !0)),
    s,
    a = ye(se);
  try {
    let l = So(!1),
      u = i();
    return So(l), p_(n, A(), o, u), u;
  } finally {
    ye(a);
  }
}
function M_(e, t) {
  if (t)
    for (let n = t.length - 1; n >= 0; n--) {
      let r = t[n];
      if (e === r.name) return r;
    }
}
function FA(e, t, n) {
  let r = e + J,
    o = A(),
    i = Ba(o, r);
  return cp(o, r) ? up(o, Ha(), t, i.transform, n, i) : i.transform(n);
}
function RA(e, t, n, r) {
  let o = e + J,
    i = A(),
    s = Ba(i, o);
  return cp(i, o) ? S_(i, Ha(), t, s.transform, n, r, s) : s.transform(n, r);
}
function cp(e, t) {
  return e[b].data[t].pure;
}
var kA = (() => {
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
      this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "platform" });
    }
  }
  return e;
})();
var T_ = new k(""),
  N_ = new k(""),
  LA = (() => {
    class e {
      constructor(n, r, o) {
        (this._ngZone = n),
          (this.registry = r),
          (this._isZoneStable = !0),
          (this._callbacks = []),
          (this.taskTrackingZone = null),
          wl || (A_(o), o.addToWindow(r)),
          this._watchAngularEvents(),
          n.run(() => {
            this.taskTrackingZone =
              typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone");
          });
      }
      _watchAngularEvents() {
        this._ngZone.onUnstable.subscribe({
          next: () => {
            this._isZoneStable = !1;
          },
        }),
          this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.subscribe({
              next: () => {
                ue.assertNotInAngularZone(),
                  queueMicrotask(() => {
                    (this._isZoneStable = !0), this._runCallbacksIfReady();
                  });
              },
            });
          });
      }
      isStable() {
        return this._isZoneStable && !this._ngZone.hasPendingMacrotasks;
      }
      _runCallbacksIfReady() {
        if (this.isStable())
          queueMicrotask(() => {
            for (; this._callbacks.length !== 0; ) {
              let n = this._callbacks.pop();
              clearTimeout(n.timeoutId), n.doneCb();
            }
          });
        else {
          let n = this.getPendingTasks();
          this._callbacks = this._callbacks.filter((r) =>
            r.updateCb && r.updateCb(n) ? (clearTimeout(r.timeoutId), !1) : !0
          );
        }
      }
      getPendingTasks() {
        return this.taskTrackingZone
          ? this.taskTrackingZone.macroTasks.map((n) => ({
              source: n.source,
              creationLocation: n.creationLocation,
              data: n.data,
            }))
          : [];
      }
      addCallback(n, r, o) {
        let i = -1;
        r &&
          r > 0 &&
          (i = setTimeout(() => {
            (this._callbacks = this._callbacks.filter(
              (s) => s.timeoutId !== i
            )),
              n();
          }, r)),
          this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: o });
      }
      whenStable(n, r, o) {
        if (o && !this.taskTrackingZone)
          throw new Error(
            'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
          );
        this.addCallback(n, r, o), this._runCallbacksIfReady();
      }
      registerApplication(n) {
        this.registry.registerApplication(n, this);
      }
      unregisterApplication(n) {
        this.registry.unregisterApplication(n);
      }
      findProviders(n, r, o) {
        return [];
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(oe(ue), oe(x_), oe(N_));
        };
      }
      static {
        this.ɵprov = $({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  x_ = (() => {
    class e {
      constructor() {
        this._applications = new Map();
      }
      registerApplication(n, r) {
        this._applications.set(n, r);
      }
      unregisterApplication(n) {
        this._applications.delete(n);
      }
      unregisterAllApplications() {
        this._applications.clear();
      }
      getTestability(n) {
        return this._applications.get(n) || null;
      }
      getAllTestabilities() {
        return Array.from(this._applications.values());
      }
      getAllRootElements() {
        return Array.from(this._applications.keys());
      }
      findTestabilityInTree(n, r = !0) {
        return wl?.findTestabilityInTree(this, n, r) ?? null;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "platform" });
      }
    }
    return e;
  })();
function A_(e) {
  wl = e;
}
var wl;
function _l(e) {
  return !!e && typeof e.then == "function";
}
function dp(e) {
  return !!e && typeof e.subscribe == "function";
}
var O_ = new k(""),
  fp = (() => {
    class e {
      constructor() {
        (this.initialized = !1),
          (this.done = !1),
          (this.donePromise = new Promise((n, r) => {
            (this.resolve = n), (this.reject = r);
          })),
          (this.appInits = M(O_, { optional: !0 }) ?? []);
      }
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = o();
          if (_l(i)) n.push(i);
          else if (dp(i)) {
            let s = new Promise((a, l) => {
              i.subscribe({ complete: a, error: l });
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
        this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  hp = new k("");
function P_() {
  Fu(() => {
    throw new m(600, !1);
  });
}
function F_(e) {
  return e.isBoundToModule;
}
var R_ = 10;
function k_(e, t, n) {
  try {
    let r = n();
    return _l(r)
      ? r.catch((o) => {
          throw (t.runOutsideAngular(() => e.handleError(o)), o);
        })
      : r;
  } catch (r) {
    throw (t.runOutsideAngular(() => e.handleError(r)), r);
  }
}
var xn = (() => {
  class e {
    constructor() {
      (this._bootstrapListeners = []),
        (this._runningTick = !1),
        (this._destroyed = !1),
        (this._destroyListeners = []),
        (this._views = []),
        (this.internalErrorHandler = M(av)),
        (this.afterRenderManager = M(Gh)),
        (this.zonelessEnabled = M(ml)),
        (this.dirtyFlags = 0),
        (this.deferredDirtyFlags = 0),
        (this.externalTestViews = new Set()),
        (this.beforeRender = new Ae()),
        (this.afterTick = new Ae()),
        (this.componentTypes = []),
        (this.components = []),
        (this.isStable = M(Ko).hasPendingTasks.pipe(it((n) => !n))),
        (this._injector = M(wt));
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
      let o = n instanceof Ro;
      if (!this._injector.get(fp).done) {
        let h = !o && Ym(n),
          f = !1;
        throw new m(405, f);
      }
      let s;
      o ? (s = n) : (s = this._injector.get(Cn).resolveComponentFactory(n)),
        this.componentTypes.push(s.componentType);
      let a = F_(s) ? void 0 : this._injector.get(Ct),
        l = r || s.selector,
        u = s.create(It.NULL, [], l, a),
        c = u.location.nativeElement,
        d = u.injector.get(T_, null);
      return (
        d?.registerApplication(c),
        u.onDestroy(() => {
          this.detachView(u.hostView),
            ho(this.components, u),
            d?.unregisterApplication(c);
        }),
        this._loadComponent(u),
        u
      );
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick() {
      if (this._runningTick) throw new m(101, !1);
      let n = R(null);
      try {
        (this._runningTick = !0), this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        (this._runningTick = !1), R(n), this.afterTick.next();
      }
    }
    synchronize() {
      let n = null;
      this._injector.destroyed ||
        (n = this._injector.get(ko, null, { optional: !0 })),
        (this.dirtyFlags |= this.deferredDirtyFlags),
        (this.deferredDirtyFlags = 0);
      let r = 0;
      for (; this.dirtyFlags !== 0 && r++ < R_; ) this.synchronizeOnce(n);
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
          L_(o, i, r, this.zonelessEnabled);
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
      if (this.allViews.some(({ _lView: n }) => Wo(n))) {
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
      ho(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView), this.tick(), this.components.push(n);
      let r = this._injector.get(hp, []);
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
        this._destroyListeners.push(n), () => ho(this._destroyListeners, n)
      );
    }
    destroy() {
      if (this._destroyed) throw new m(406, !1);
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
      this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function ho(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var so;
function pp(e) {
  so ??= new WeakMap();
  let t = so.get(e);
  if (t) return t;
  let n = e.isStable
    .pipe(Yi((r) => r))
    .toPromise()
    .then(() => {});
  return so.set(e, n), e.onDestroy(() => so?.delete(e)), n;
}
function L_(e, t, n, r) {
  if (!n && !Wo(e)) return;
  Ih(e, t, n && !r ? 0 : 1);
}
var wa = class {
    constructor(t, n) {
      (this.ngModuleFactory = t), (this.componentFactories = n);
    }
  },
  jA = (() => {
    class e {
      compileModuleSync(n) {
        return new ha(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Ed(n),
          i = Bf(o.declarations).reduce((s, a) => {
            let l = Ht(a);
            return l && s.push(new Jn(l)), s;
          }, []);
        return new wa(r, i);
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
        this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var j_ = (() => {
    class e {
      constructor() {
        (this.zone = M(ue)),
          (this.changeDetectionScheduler = M(In)),
          (this.applicationRef = M(xn));
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
        this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })(),
  V_ = new k("", { factory: () => !1 });
function gp({
  ngZoneFactory: e,
  ignoreChangesOutsideZone: t,
  scheduleInRootZone: n,
}) {
  return (
    (e ??= () => new ue(nt(_e({}, mp()), { scheduleInRootZone: n }))),
    [
      { provide: ue, useFactory: e },
      {
        provide: qn,
        multi: !0,
        useFactory: () => {
          let r = M(j_, { optional: !0 });
          return () => r.initialize();
        },
      },
      {
        provide: qn,
        multi: !0,
        useFactory: () => {
          let r = M(B_);
          return () => {
            r.initialize();
          };
        },
      },
      t === !0 ? { provide: xh, useValue: !0 } : [],
      { provide: Ah, useValue: n ?? mf },
    ]
  );
}
function VA(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = gp({
      ngZoneFactory: () => {
        let o = mp(e);
        return (
          (o.scheduleInRootZone = n),
          o.shouldCoalesceEventChangeDetection && Xt("NgZone_CoalesceEvent"),
          new ue(o)
        );
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return Id([{ provide: V_, useValue: !0 }, { provide: ml, useValue: !1 }, r]);
}
function mp(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var B_ = (() => {
  class e {
    constructor() {
      (this.subscription = new Y()),
        (this.initialized = !1),
        (this.zone = M(ue)),
        (this.pendingTasks = M(Ko));
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
              ue.assertNotInAngularZone(),
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
            ue.assertInAngularZone(), (n ??= this.pendingTasks.add());
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
      this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
var $_ = (() => {
  class e {
    constructor() {
      (this.appRef = M(xn)),
        (this.taskService = M(Ko)),
        (this.ngZone = M(ue)),
        (this.zonelessEnabled = M(ml)),
        (this.disableScheduling = M(xh, { optional: !0 }) ?? !1),
        (this.zoneIsDefined = typeof Zone < "u" && !!Zone.root.run),
        (this.schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }]),
        (this.subscriptions = new Y()),
        (this.angularZoneId = this.zoneIsDefined
          ? this.ngZone._inner?.get(No)
          : null),
        (this.scheduleInRootZone =
          !this.zonelessEnabled &&
          this.zoneIsDefined &&
          (M(Ah, { optional: !0 }) ?? !1)),
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
          (this.ngZone instanceof Rs || !this.zoneIsDefined));
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
      let r = this.useMicrotaskScheduler ? Mc : yf;
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
          Zone.current.get(No + this.angularZoneId))
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
        Mc(() => {
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
      this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
  }
  return e;
})();
function H_() {
  return (typeof $localize < "u" && $localize.locale) || $o;
}
var cr = new k("", {
  providedIn: "root",
  factory: () => M(cr, O.Optional | O.SkipSelf) || H_(),
});
var _a = new k("");
function ao(e) {
  return !e.moduleRef;
}
function U_(e) {
  let t = ao(e) ? e.r3Injector : e.moduleRef.injector,
    n = t.get(ue);
  return n.run(() => {
    ao(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(_n, null),
      o;
    if (
      (n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }),
      ao(e))
    ) {
      let i = () => t.destroy(),
        s = e.platformInjector.get(_a);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(),
        s = e.platformInjector.get(_a);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          ho(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return k_(r, n, () => {
      let i = t.get(fp);
      return (
        i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(cr, $o);
          if ((l_(s || $o), ao(e))) {
            let a = t.get(xn);
            return (
              e.rootComponent !== void 0 && a.bootstrap(e.rootComponent), a
            );
          } else return z_(e.moduleRef, e.allPlatformModules), e.moduleRef;
        })
      );
    });
  });
}
function z_(e, t) {
  let n = e.injector.get(xn);
  if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new m(-403, !1);
  t.push(e);
}
var po = null;
function q_(e = [], t) {
  return It.create({
    name: t,
    providers: [
      { provide: Md, useValue: "platform" },
      { provide: _a, useValue: new Set([() => (po = null)]) },
      ...e,
    ],
  });
}
function G_(e = []) {
  if (po) return po;
  let t = q_(e);
  return (po = t), P_(), W_(t), t;
}
function W_(e) {
  e.get(Dv, null)?.forEach((n) => n());
}
var yp = (() => {
  class e {
    static {
      this.__NG_ELEMENT_ID__ = Q_;
    }
  }
  return e;
})();
function Q_(e) {
  return Z_(ce(), A(), (e & 16) === 16);
}
function Z_(e, t, n) {
  if (nr(e) && !n) {
    let r = bt(e.index, t);
    return new Zt(r, r);
  } else if (e.type & 175) {
    let r = t[De];
    return new Zt(r, t);
  }
  return null;
}
var Ia = class {
    constructor() {}
    supports(t) {
      return Bh(t);
    }
    create(t) {
      return new Ca(t);
    }
  },
  K_ = (e, t) => t,
  Ca = class {
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
        (this._trackByFn = t || K_);
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
        let s = !r || (n && n.currentIndex < Qc(r, o, i)) ? n : r,
          a = Qc(s, o, i),
          l = s.currentIndex;
        if (s === r) o--, (r = r._nextRemoved);
        else if (((n = n._next), s.previousIndex == null)) o++;
        else {
          i || (i = []);
          let u = a - o,
            c = l - o;
          if (u != c) {
            for (let h = 0; h < u; h++) {
              let f = h < i.length ? i[h] : (i[h] = 0),
                p = f + h;
              c <= p && p < u && (i[h] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = c - u;
          }
        }
        a !== l && t(s, a, l);
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
      if ((t == null && (t = []), !Bh(t))) throw new m(900, !1);
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
          mw(t, (a) => {
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
              : (t = this._addAfter(new ba(n, r), i, o))),
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
        this._linkedRecords === null && (this._linkedRecords = new Ho()),
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
        this._unlinkedRecords === null && (this._unlinkedRecords = new Ho()),
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
  ba = class {
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
  Sa = class {
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
  Ho = class {
    constructor() {
      this.map = new Map();
    }
    put(t) {
      let n = t.trackById,
        r = this.map.get(n);
      r || ((r = new Sa()), this.map.set(n, r)), r.add(t);
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
function Qc(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
var Ma = class {
    constructor() {}
    supports(t) {
      return t instanceof Map || El(t);
    }
    create() {
      return new Ta();
    }
  },
  Ta = class {
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
      else if (!(t instanceof Map || El(t))) throw new m(900, !1);
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
      let r = new Na(t);
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
  Na = class {
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
function Zc() {
  return new Il([new Ia()]);
}
var Il = (() => {
  class e {
    static {
      this.ɵprov = $({ token: e, providedIn: "root", factory: Zc });
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
        useFactory: (r) => e.create(n, r || Zc()),
        deps: [[e, new cd(), new ud()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new m(901, !1);
    }
  }
  return e;
})();
function Kc() {
  return new Cl([new Ma()]);
}
var Cl = (() => {
  class e {
    static {
      this.ɵprov = $({ token: e, providedIn: "root", factory: Kc });
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
        useFactory: (r) => e.create(n, r || Kc()),
        deps: [[e, new cd(), new ud()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r) return r;
      throw new m(901, !1);
    }
  }
  return e;
})();
var BA = (() => {
  class e {
    constructor(n) {}
    static {
      this.ɵfac = function (r) {
        return new (r || e)(oe(xn));
      };
    }
    static {
      this.ɵmod = Ra({ type: e });
    }
    static {
      this.ɵinj = xa({});
    }
  }
  return e;
})();
function $A(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = G_(r),
      i = [gp({}), { provide: In, useExisting: $_ }, ...(n || [])],
      s = new Vo({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return U_({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
var Yc = !1;
function Y_() {
  Yc || ((Yc = !0), Nv(), Xw(), m_(), n_(), Ew(), QE(), NE(), AD());
}
function J_(e, t) {
  return pp(e);
}
function HA() {
  return Id([
    {
      provide: eo,
      useFactory: () => {
        let e = !0;
        return (
          $n() && (e = !!M(el, { optional: !0 })?.get(Nf, null)),
          e && Xt("NgHydration"),
          e
        );
      },
    },
    {
      provide: qn,
      useValue: () => {
        _E(!1), $n() && M(eo) && (X_(), Y_());
      },
      multi: !0,
    },
    { provide: Pf, useFactory: () => $n() && M(eo) },
    {
      provide: hp,
      useFactory: () => {
        if ($n() && M(eo)) {
          let e = M(xn),
            t = M(It);
          return () => {
            J_(e, t).then(() => {
              SE(e);
            });
          };
        }
        return () => {};
      },
      multi: !0,
    },
  ]);
}
function X_() {
  let e = ir(),
    t;
  for (let n of e.body.childNodes)
    if (n.nodeType === Node.COMMENT_NODE && n.textContent?.trim() === Mv) {
      t = n;
      break;
    }
  if (!t) throw new m(-507, !1);
}
function eI(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function tI(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function UA(e, t) {
  Xt("NgSignals");
  let n = Au(e);
  return t?.equal && (n[rt].equal = t.equal), n;
}
function nI(e) {
  let t = R(null);
  try {
    return e();
  } finally {
    R(t);
  }
}
var Mp = null;
function bl() {
  return Mp;
}
function cO(e) {
  Mp ??= e;
}
var Dp = class {};
var Tp = new k(""),
  Np = (() => {
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
        this.ɵprov = $({
          token: e,
          factory: () => M(rI),
          providedIn: "platform",
        });
      }
    }
    return e;
  })();
var rI = (() => {
  class e extends Np {
    constructor() {
      super(),
        (this._doc = M(Tp)),
        (this._location = window.location),
        (this._history = window.history);
    }
    getBaseHrefFromDOM() {
      return bl().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = bl().getGlobalEventTarget(this._doc, "window");
      return (
        r.addEventListener("popstate", n, !1),
        () => r.removeEventListener("popstate", n)
      );
    }
    onHashChange(n) {
      let r = bl().getGlobalEventTarget(this._doc, "window");
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
      this.ɵprov = $({
        token: e,
        factory: () => new e(),
        providedIn: "platform",
      });
    }
  }
  return e;
})();
function xp(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return (
    e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t
  );
}
function Ep(e) {
  let t = e.match(/#|\?|$/),
    n = (t && t.index) || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function en(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var Pl = (() => {
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
        this.ɵprov = $({ token: e, factory: () => M(iI), providedIn: "root" });
      }
    }
    return e;
  })(),
  oI = new k(""),
  iI = (() => {
    class e extends Pl {
      constructor(n, r) {
        super(),
          (this._platformLocation = n),
          (this._removeListenerFns = []),
          (this._baseHref =
            r ??
            this._platformLocation.getBaseHrefFromDOM() ??
            M(Tp).location?.origin ??
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
        return xp(this._baseHref, n);
      }
      path(n = !1) {
        let r =
            this._platformLocation.pathname + en(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + en(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + en(i));
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
          return new (r || e)(oe(Np), oe(oI, 8));
        };
      }
      static {
        this.ɵprov = $({ token: e, factory: e.ɵfac, providedIn: "root" });
      }
    }
    return e;
  })();
var sI = (() => {
  class e {
    constructor(n) {
      (this._subject = new je()),
        (this._urlChangeListeners = []),
        (this._urlChangeSubscription = null),
        (this._locationStrategy = n);
      let r = this._locationStrategy.getBaseHref();
      (this._basePath = uI(Ep(wp(r)))),
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
      return this.path() == this.normalize(n + en(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(lI(this._basePath, wp(n)));
    }
    prepareExternalUrl(n) {
      return (
        n && n[0] !== "/" && (n = "/" + n),
        this._locationStrategy.prepareExternalUrl(n)
      );
    }
    go(n, r = "", o = null) {
      this._locationStrategy.pushState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + en(r)), o);
    }
    replaceState(n, r = "", o = null) {
      this._locationStrategy.replaceState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + en(r)), o);
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
      this.normalizeQueryParams = en;
    }
    static {
      this.joinWithSlash = xp;
    }
    static {
      this.stripTrailingSlash = Ep;
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(oe(Pl));
      };
    }
    static {
      this.ɵprov = $({ token: e, factory: () => aI(), providedIn: "root" });
    }
  }
  return e;
})();
function aI() {
  return new sI(oe(Pl));
}
function lI(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function wp(e) {
  return e.replace(/\/index.html$/, "");
}
function uI(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
var Ap = (function (e) {
  return (
    (e[(e.Decimal = 0)] = "Decimal"),
    (e[(e.Percent = 1)] = "Percent"),
    (e[(e.Currency = 2)] = "Currency"),
    (e[(e.Scientific = 3)] = "Scientific"),
    e
  );
})(Ap || {});
var ge = (function (e) {
    return (
      (e[(e.Format = 0)] = "Format"), (e[(e.Standalone = 1)] = "Standalone"), e
    );
  })(ge || {}),
  z = (function (e) {
    return (
      (e[(e.Narrow = 0)] = "Narrow"),
      (e[(e.Abbreviated = 1)] = "Abbreviated"),
      (e[(e.Wide = 2)] = "Wide"),
      (e[(e.Short = 3)] = "Short"),
      e
    );
  })(z || {}),
  Se = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.Medium = 1)] = "Medium"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Full = 3)] = "Full"),
      e
    );
  })(Se || {}),
  Me = {
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
function cI(e) {
  return be(e)[K.LocaleId];
}
function dI(e, t, n) {
  let r = be(e),
    o = [r[K.DayPeriodsFormat], r[K.DayPeriodsStandalone]],
    i = Pe(o, t);
  return Pe(i, n);
}
function fI(e, t, n) {
  let r = be(e),
    o = [r[K.DaysFormat], r[K.DaysStandalone]],
    i = Pe(o, t);
  return Pe(i, n);
}
function hI(e, t, n) {
  let r = be(e),
    o = [r[K.MonthsFormat], r[K.MonthsStandalone]],
    i = Pe(o, t);
  return Pe(i, n);
}
function pI(e, t) {
  let r = be(e)[K.Eras];
  return Pe(r, t);
}
function ii(e, t) {
  let n = be(e);
  return Pe(n[K.DateFormat], t);
}
function si(e, t) {
  let n = be(e);
  return Pe(n[K.TimeFormat], t);
}
function ai(e, t) {
  let r = be(e)[K.DateTimeFormat];
  return Pe(r, t);
}
function dt(e, t) {
  let n = be(e),
    r = n[K.NumberSymbols][t];
  if (typeof r > "u") {
    if (t === Me.CurrencyDecimal) return n[K.NumberSymbols][Me.Decimal];
    if (t === Me.CurrencyGroup) return n[K.NumberSymbols][Me.Group];
  }
  return r;
}
function gI(e, t) {
  return be(e)[K.NumberFormats][t];
}
function Op(e) {
  if (!e[K.ExtraData])
    throw new Error(
      `Missing extra locale data for the locale "${
        e[K.LocaleId]
      }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
    );
}
function mI(e) {
  let t = be(e);
  return (
    Op(t),
    (t[K.ExtraData][2] || []).map((r) =>
      typeof r == "string" ? Sl(r) : [Sl(r[0]), Sl(r[1])]
    )
  );
}
function yI(e, t, n) {
  let r = be(e);
  Op(r);
  let o = [r[K.ExtraData][0], r[K.ExtraData][1]],
    i = Pe(o, t) || [];
  return Pe(i, n) || [];
}
function Pe(e, t) {
  for (let n = t; n > -1; n--) if (typeof e[n] < "u") return e[n];
  throw new Error("Locale data API: locale data undefined");
}
function Sl(e) {
  let [t, n] = e.split(":");
  return { hours: +t, minutes: +n };
}
var vI =
    /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
  li = {},
  DI =
    /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/,
  ft = (function (e) {
    return (
      (e[(e.Short = 0)] = "Short"),
      (e[(e.ShortGMT = 1)] = "ShortGMT"),
      (e[(e.Long = 2)] = "Long"),
      (e[(e.Extended = 3)] = "Extended"),
      e
    );
  })(ft || {}),
  V = (function (e) {
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
  })(V || {}),
  j = (function (e) {
    return (
      (e[(e.DayPeriods = 0)] = "DayPeriods"),
      (e[(e.Days = 1)] = "Days"),
      (e[(e.Months = 2)] = "Months"),
      (e[(e.Eras = 3)] = "Eras"),
      e
    );
  })(j || {});
function EI(e, t, n, r) {
  let o = NI(e);
  t = ct(n, t) || t;
  let s = [],
    a;
  for (; t; )
    if (((a = DI.exec(t)), a)) {
      s = s.concat(a.slice(1));
      let c = s.pop();
      if (!c) break;
      t = c;
    } else {
      s.push(t);
      break;
    }
  let l = o.getTimezoneOffset();
  r && ((l = Fp(r, l)), (o = TI(o, r, !0)));
  let u = "";
  return (
    s.forEach((c) => {
      let d = SI(c);
      u += d
        ? d(o, n, l)
        : c === "''"
        ? "'"
        : c.replace(/(^'|'$)/g, "").replace(/''/g, "'");
    }),
    u
  );
}
function hi(e, t, n) {
  let r = new Date(0);
  return r.setFullYear(e, t, n), r.setHours(0, 0, 0), r;
}
function ct(e, t) {
  let n = cI(e);
  if (((li[n] ??= {}), li[n][t])) return li[n][t];
  let r = "";
  switch (t) {
    case "shortDate":
      r = ii(e, Se.Short);
      break;
    case "mediumDate":
      r = ii(e, Se.Medium);
      break;
    case "longDate":
      r = ii(e, Se.Long);
      break;
    case "fullDate":
      r = ii(e, Se.Full);
      break;
    case "shortTime":
      r = si(e, Se.Short);
      break;
    case "mediumTime":
      r = si(e, Se.Medium);
      break;
    case "longTime":
      r = si(e, Se.Long);
      break;
    case "fullTime":
      r = si(e, Se.Full);
      break;
    case "short":
      let o = ct(e, "shortTime"),
        i = ct(e, "shortDate");
      r = ui(ai(e, Se.Short), [o, i]);
      break;
    case "medium":
      let s = ct(e, "mediumTime"),
        a = ct(e, "mediumDate");
      r = ui(ai(e, Se.Medium), [s, a]);
      break;
    case "long":
      let l = ct(e, "longTime"),
        u = ct(e, "longDate");
      r = ui(ai(e, Se.Long), [l, u]);
      break;
    case "full":
      let c = ct(e, "fullTime"),
        d = ct(e, "fullDate");
      r = ui(ai(e, Se.Full), [c, d]);
      break;
  }
  return r && (li[n][t] = r), r;
}
function ui(e, t) {
  return (
    t &&
      (e = e.replace(/\{([^}]+)}/g, function (n, r) {
        return t != null && r in t ? t[r] : n;
      })),
    e
  );
}
function qe(e, t, n = "-", r, o) {
  let i = "";
  (e < 0 || (o && e <= 0)) && (o ? (e = -e + 1) : ((e = -e), (i = n)));
  let s = String(e);
  for (; s.length < t; ) s = "0" + s;
  return r && (s = s.slice(s.length - t)), i + s;
}
function wI(e, t) {
  return qe(e, 3).substring(0, t);
}
function ee(e, t, n = 0, r = !1, o = !1) {
  return function (i, s) {
    let a = _I(e, i);
    if (((n > 0 || a > -n) && (a += n), e === V.Hours))
      a === 0 && n === -12 && (a = 12);
    else if (e === V.FractionalSeconds) return wI(a, t);
    let l = dt(s, Me.MinusSign);
    return qe(a, t, l, r, o);
  };
}
function _I(e, t) {
  switch (e) {
    case V.FullYear:
      return t.getFullYear();
    case V.Month:
      return t.getMonth();
    case V.Date:
      return t.getDate();
    case V.Hours:
      return t.getHours();
    case V.Minutes:
      return t.getMinutes();
    case V.Seconds:
      return t.getSeconds();
    case V.FractionalSeconds:
      return t.getMilliseconds();
    case V.Day:
      return t.getDay();
    default:
      throw new Error(`Unknown DateType value "${e}".`);
  }
}
function q(e, t, n = ge.Format, r = !1) {
  return function (o, i) {
    return II(o, i, e, t, n, r);
  };
}
function II(e, t, n, r, o, i) {
  switch (n) {
    case j.Months:
      return hI(t, o, r)[e.getMonth()];
    case j.Days:
      return fI(t, o, r)[e.getDay()];
    case j.DayPeriods:
      let s = e.getHours(),
        a = e.getMinutes();
      if (i) {
        let u = mI(t),
          c = yI(t, o, r),
          d = u.findIndex((h) => {
            if (Array.isArray(h)) {
              let [f, p] = h,
                g = s >= f.hours && a >= f.minutes,
                D = s < p.hours || (s === p.hours && a < p.minutes);
              if (f.hours < p.hours) {
                if (g && D) return !0;
              } else if (g || D) return !0;
            } else if (h.hours === s && h.minutes === a) return !0;
            return !1;
          });
        if (d !== -1) return c[d];
      }
      return dI(t, o, r)[s < 12 ? 0 : 1];
    case j.Eras:
      return pI(t, r)[e.getFullYear() <= 0 ? 0 : 1];
    default:
      let l = n;
      throw new Error(`unexpected translation type ${l}`);
  }
}
function ci(e) {
  return function (t, n, r) {
    let o = -1 * r,
      i = dt(n, Me.MinusSign),
      s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
    switch (e) {
      case ft.Short:
        return (o >= 0 ? "+" : "") + qe(s, 2, i) + qe(Math.abs(o % 60), 2, i);
      case ft.ShortGMT:
        return "GMT" + (o >= 0 ? "+" : "") + qe(s, 1, i);
      case ft.Long:
        return (
          "GMT" +
          (o >= 0 ? "+" : "") +
          qe(s, 2, i) +
          ":" +
          qe(Math.abs(o % 60), 2, i)
        );
      case ft.Extended:
        return r === 0
          ? "Z"
          : (o >= 0 ? "+" : "") +
              qe(s, 2, i) +
              ":" +
              qe(Math.abs(o % 60), 2, i);
      default:
        throw new Error(`Unknown zone width "${e}"`);
    }
  };
}
var CI = 0,
  fi = 4;
function bI(e) {
  let t = hi(e, CI, 1).getDay();
  return hi(e, 0, 1 + (t <= fi ? fi : fi + 7) - t);
}
function Pp(e) {
  let t = e.getDay(),
    n = t === 0 ? -3 : fi - t;
  return hi(e.getFullYear(), e.getMonth(), e.getDate() + n);
}
function Ml(e, t = !1) {
  return function (n, r) {
    let o;
    if (t) {
      let i = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
        s = n.getDate();
      o = 1 + Math.floor((s + i) / 7);
    } else {
      let i = Pp(n),
        s = bI(i.getFullYear()),
        a = i.getTime() - s.getTime();
      o = 1 + Math.round(a / 6048e5);
    }
    return qe(o, e, dt(r, Me.MinusSign));
  };
}
function di(e, t = !1) {
  return function (n, r) {
    let i = Pp(n).getFullYear();
    return qe(i, e, dt(r, Me.MinusSign), t);
  };
}
var Tl = {};
function SI(e) {
  if (Tl[e]) return Tl[e];
  let t;
  switch (e) {
    case "G":
    case "GG":
    case "GGG":
      t = q(j.Eras, z.Abbreviated);
      break;
    case "GGGG":
      t = q(j.Eras, z.Wide);
      break;
    case "GGGGG":
      t = q(j.Eras, z.Narrow);
      break;
    case "y":
      t = ee(V.FullYear, 1, 0, !1, !0);
      break;
    case "yy":
      t = ee(V.FullYear, 2, 0, !0, !0);
      break;
    case "yyy":
      t = ee(V.FullYear, 3, 0, !1, !0);
      break;
    case "yyyy":
      t = ee(V.FullYear, 4, 0, !1, !0);
      break;
    case "Y":
      t = di(1);
      break;
    case "YY":
      t = di(2, !0);
      break;
    case "YYY":
      t = di(3);
      break;
    case "YYYY":
      t = di(4);
      break;
    case "M":
    case "L":
      t = ee(V.Month, 1, 1);
      break;
    case "MM":
    case "LL":
      t = ee(V.Month, 2, 1);
      break;
    case "MMM":
      t = q(j.Months, z.Abbreviated);
      break;
    case "MMMM":
      t = q(j.Months, z.Wide);
      break;
    case "MMMMM":
      t = q(j.Months, z.Narrow);
      break;
    case "LLL":
      t = q(j.Months, z.Abbreviated, ge.Standalone);
      break;
    case "LLLL":
      t = q(j.Months, z.Wide, ge.Standalone);
      break;
    case "LLLLL":
      t = q(j.Months, z.Narrow, ge.Standalone);
      break;
    case "w":
      t = Ml(1);
      break;
    case "ww":
      t = Ml(2);
      break;
    case "W":
      t = Ml(1, !0);
      break;
    case "d":
      t = ee(V.Date, 1);
      break;
    case "dd":
      t = ee(V.Date, 2);
      break;
    case "c":
    case "cc":
      t = ee(V.Day, 1);
      break;
    case "ccc":
      t = q(j.Days, z.Abbreviated, ge.Standalone);
      break;
    case "cccc":
      t = q(j.Days, z.Wide, ge.Standalone);
      break;
    case "ccccc":
      t = q(j.Days, z.Narrow, ge.Standalone);
      break;
    case "cccccc":
      t = q(j.Days, z.Short, ge.Standalone);
      break;
    case "E":
    case "EE":
    case "EEE":
      t = q(j.Days, z.Abbreviated);
      break;
    case "EEEE":
      t = q(j.Days, z.Wide);
      break;
    case "EEEEE":
      t = q(j.Days, z.Narrow);
      break;
    case "EEEEEE":
      t = q(j.Days, z.Short);
      break;
    case "a":
    case "aa":
    case "aaa":
      t = q(j.DayPeriods, z.Abbreviated);
      break;
    case "aaaa":
      t = q(j.DayPeriods, z.Wide);
      break;
    case "aaaaa":
      t = q(j.DayPeriods, z.Narrow);
      break;
    case "b":
    case "bb":
    case "bbb":
      t = q(j.DayPeriods, z.Abbreviated, ge.Standalone, !0);
      break;
    case "bbbb":
      t = q(j.DayPeriods, z.Wide, ge.Standalone, !0);
      break;
    case "bbbbb":
      t = q(j.DayPeriods, z.Narrow, ge.Standalone, !0);
      break;
    case "B":
    case "BB":
    case "BBB":
      t = q(j.DayPeriods, z.Abbreviated, ge.Format, !0);
      break;
    case "BBBB":
      t = q(j.DayPeriods, z.Wide, ge.Format, !0);
      break;
    case "BBBBB":
      t = q(j.DayPeriods, z.Narrow, ge.Format, !0);
      break;
    case "h":
      t = ee(V.Hours, 1, -12);
      break;
    case "hh":
      t = ee(V.Hours, 2, -12);
      break;
    case "H":
      t = ee(V.Hours, 1);
      break;
    case "HH":
      t = ee(V.Hours, 2);
      break;
    case "m":
      t = ee(V.Minutes, 1);
      break;
    case "mm":
      t = ee(V.Minutes, 2);
      break;
    case "s":
      t = ee(V.Seconds, 1);
      break;
    case "ss":
      t = ee(V.Seconds, 2);
      break;
    case "S":
      t = ee(V.FractionalSeconds, 1);
      break;
    case "SS":
      t = ee(V.FractionalSeconds, 2);
      break;
    case "SSS":
      t = ee(V.FractionalSeconds, 3);
      break;
    case "Z":
    case "ZZ":
    case "ZZZ":
      t = ci(ft.Short);
      break;
    case "ZZZZZ":
      t = ci(ft.Extended);
      break;
    case "O":
    case "OO":
    case "OOO":
    case "z":
    case "zz":
    case "zzz":
      t = ci(ft.ShortGMT);
      break;
    case "OOOO":
    case "ZZZZ":
    case "zzzz":
      t = ci(ft.Long);
      break;
    default:
      return null;
  }
  return (Tl[e] = t), t;
}
function Fp(e, t) {
  e = e.replace(/:/g, "");
  let n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
  return isNaN(n) ? t : n;
}
function MI(e, t) {
  return (e = new Date(e.getTime())), e.setMinutes(e.getMinutes() + t), e;
}
function TI(e, t, n) {
  let r = n ? -1 : 1,
    o = e.getTimezoneOffset(),
    i = Fp(t, o);
  return MI(e, r * (i - o));
}
function NI(e) {
  if (_p(e)) return e;
  if (typeof e == "number" && !isNaN(e)) return new Date(e);
  if (typeof e == "string") {
    if (((e = e.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e))) {
      let [o, i = 1, s = 1] = e.split("-").map((a) => +a);
      return hi(o, i - 1, s);
    }
    let n = parseFloat(e);
    if (!isNaN(e - n)) return new Date(n);
    let r;
    if ((r = e.match(vI))) return xI(r);
  }
  let t = new Date(e);
  if (!_p(t)) throw new Error(`Unable to convert "${e}" into a date`);
  return t;
}
function xI(e) {
  let t = new Date(0),
    n = 0,
    r = 0,
    o = e[8] ? t.setUTCFullYear : t.setFullYear,
    i = e[8] ? t.setUTCHours : t.setHours;
  e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
    o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
  let s = Number(e[4] || 0) - n,
    a = Number(e[5] || 0) - r,
    l = Number(e[6] || 0),
    u = Math.floor(parseFloat("0." + (e[7] || 0)) * 1e3);
  return i.call(t, s, a, l, u), t;
}
function _p(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}
var AI = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
  Ip = 22,
  pi = ".",
  dr = "0",
  OI = ";",
  PI = ",",
  Nl = "#";
function FI(e, t, n, r, o, i, s = !1) {
  let a = "",
    l = !1;
  if (!isFinite(e)) a = dt(n, Me.Infinity);
  else {
    let u = jI(e);
    s && (u = LI(u));
    let c = t.minInt,
      d = t.minFrac,
      h = t.maxFrac;
    if (i) {
      let I = i.match(AI);
      if (I === null) throw new Error(`${i} is not a valid digit info`);
      let B = I[1],
        P = I[3],
        ae = I[5];
      B != null && (c = xl(B)),
        P != null && (d = xl(P)),
        ae != null ? (h = xl(ae)) : P != null && d > h && (h = d);
    }
    VI(u, d, h);
    let f = u.digits,
      p = u.integerLen,
      g = u.exponent,
      D = [];
    for (l = f.every((I) => !I); p < c; p++) f.unshift(0);
    for (; p < 0; p++) f.unshift(0);
    p > 0 ? (D = f.splice(p, f.length)) : ((D = f), (f = [0]));
    let v = [];
    for (
      f.length >= t.lgSize && v.unshift(f.splice(-t.lgSize, f.length).join(""));
      f.length > t.gSize;

    )
      v.unshift(f.splice(-t.gSize, f.length).join(""));
    f.length && v.unshift(f.join("")),
      (a = v.join(dt(n, r))),
      D.length && (a += dt(n, o) + D.join("")),
      g && (a += dt(n, Me.Exponential) + "+" + g);
  }
  return (
    e < 0 && !l ? (a = t.negPre + a + t.negSuf) : (a = t.posPre + a + t.posSuf),
    a
  );
}
function RI(e, t, n) {
  let r = gI(t, Ap.Decimal),
    o = kI(r, dt(t, Me.MinusSign));
  return FI(e, o, t, Me.Group, Me.Decimal, n);
}
function kI(e, t = "-") {
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
    r = e.split(OI),
    o = r[0],
    i = r[1],
    s =
      o.indexOf(pi) !== -1
        ? o.split(pi)
        : [
            o.substring(0, o.lastIndexOf(dr) + 1),
            o.substring(o.lastIndexOf(dr) + 1),
          ],
    a = s[0],
    l = s[1] || "";
  n.posPre = a.substring(0, a.indexOf(Nl));
  for (let c = 0; c < l.length; c++) {
    let d = l.charAt(c);
    d === dr
      ? (n.minFrac = n.maxFrac = c + 1)
      : d === Nl
      ? (n.maxFrac = c + 1)
      : (n.posSuf += d);
  }
  let u = a.split(PI);
  if (
    ((n.gSize = u[1] ? u[1].length : 0),
    (n.lgSize = u[2] || u[1] ? (u[2] || u[1]).length : 0),
    i)
  ) {
    let c = o.length - n.posPre.length - n.posSuf.length,
      d = i.indexOf(Nl);
    (n.negPre = i.substring(0, d).replace(/'/g, "")),
      (n.negSuf = i.slice(d + c).replace(/'/g, ""));
  } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
  return n;
}
function LI(e) {
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
function jI(e) {
  let t = Math.abs(e) + "",
    n = 0,
    r,
    o,
    i,
    s,
    a;
  for (
    (o = t.indexOf(pi)) > -1 && (t = t.replace(pi, "")),
      (i = t.search(/e/i)) > 0
        ? (o < 0 && (o = i), (o += +t.slice(i + 1)), (t = t.substring(0, i)))
        : o < 0 && (o = t.length),
      i = 0;
    t.charAt(i) === dr;
    i++
  );
  if (i === (a = t.length)) (r = [0]), (o = 1);
  else {
    for (a--; t.charAt(a) === dr; ) a--;
    for (o -= i, r = [], s = 0; i <= a; i++, s++) r[s] = Number(t.charAt(i));
  }
  return (
    o > Ip && ((r = r.splice(0, Ip - 1)), (n = o - 1), (o = 1)),
    { digits: r, exponent: n, integerLen: o }
  );
}
function VI(e, t, n) {
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
  let l = i !== 0,
    u = t + e.integerLen,
    c = r.reduceRight(function (d, h, f, p) {
      return (
        (h = h + d),
        (p[f] = h < 10 ? h : h - 10),
        l && (p[f] === 0 && f >= u ? p.pop() : (l = !1)),
        h >= 10 ? 1 : 0
      );
    }, 0);
  c && (r.unshift(c), e.integerLen++);
}
function xl(e) {
  let t = parseInt(e);
  if (isNaN(t)) throw new Error("Invalid integer literal when parsing " + e);
  return t;
}
function dO(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var Al = class {
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
  fO = (() => {
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
              new Al(o.item, this._ngForOf, -1, -1),
              s === null ? void 0 : s
            );
          else if (s == null) r.remove(i === null ? void 0 : i);
          else if (i !== null) {
            let a = r.get(i);
            r.move(a, s), Cp(a, o);
          }
        });
        for (let o = 0, i = r.length; o < i; o++) {
          let a = r.get(o).context;
          (a.index = o), (a.count = i), (a.ngForOf = this._ngForOf);
        }
        n.forEachIdentityChange((o) => {
          let i = r.get(o.currentIndex);
          Cp(i, o);
        });
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(se(Nn), se(Kt), se(Il));
        };
      }
      static {
        this.ɵdir = qo({
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
function Cp(e, t) {
  e.context.$implicit = t.item;
}
var hO = (() => {
    class e {
      constructor(n, r) {
        (this._viewContainer = n),
          (this._context = new Ol()),
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
        bp("ngIfThen", n),
          (this._thenTemplateRef = n),
          (this._thenViewRef = null),
          this._updateView();
      }
      set ngIfElse(n) {
        bp("ngIfElse", n),
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
          return new (r || e)(se(Nn), se(Kt));
        };
      }
      static {
        this.ɵdir = qo({
          type: e,
          selectors: [["", "ngIf", ""]],
          inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
          standalone: !0,
        });
      }
    }
    return e;
  })(),
  Ol = class {
    constructor() {
      (this.$implicit = null), (this.ngIf = null);
    }
  };
function bp(e, t) {
  if (!!!(!t || t.createEmbeddedView))
    throw new Error(`${e} must be a TemplateRef, but received '${pe(t)}'.`);
}
var pO = (() => {
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
        s = o.indexOf("-") === -1 ? void 0 : Yn.DashCase;
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
        return new (r || e)(se(Jt), se(Cl), se(yl));
      };
    }
    static {
      this.ɵdir = qo({
        type: e,
        selectors: [["", "ngStyle", ""]],
        inputs: { ngStyle: "ngStyle" },
        standalone: !0,
      });
    }
  }
  return e;
})();
function Rp(e, t) {
  return new m(2100, !1);
}
var BI = "mediumDate",
  $I = new k(""),
  HI = new k(""),
  gO = (() => {
    class e {
      constructor(n, r, o) {
        (this.locale = n),
          (this.defaultTimezone = r),
          (this.defaultOptions = o);
      }
      transform(n, r, o, i) {
        if (n == null || n === "" || n !== n) return null;
        try {
          let s = r ?? this.defaultOptions?.dateFormat ?? BI,
            a =
              o ??
              this.defaultOptions?.timezone ??
              this.defaultTimezone ??
              void 0;
          return EI(n, s, i || this.locale, a);
        } catch (s) {
          throw Rp(e, s.message);
        }
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)(se(cr, 16), se($I, 24), se(HI, 24));
        };
      }
      static {
        this.ɵpipe = ka({ name: "date", type: e, pure: !0, standalone: !0 });
      }
    }
    return e;
  })();
var mO = (() => {
  class e {
    constructor(n) {
      this._locale = n;
    }
    transform(n, r, o) {
      if (!UI(n)) return null;
      o ||= this._locale;
      try {
        let i = zI(n);
        return RI(i, o, r);
      } catch (i) {
        throw Rp(e, i.message);
      }
    }
    static {
      this.ɵfac = function (r) {
        return new (r || e)(se(cr, 16));
      };
    }
    static {
      this.ɵpipe = ka({ name: "number", type: e, pure: !0, standalone: !0 });
    }
  }
  return e;
})();
function UI(e) {
  return !(e == null || e === "" || e !== e);
}
function zI(e) {
  if (typeof e == "string" && !isNaN(Number(e) - parseFloat(e)))
    return Number(e);
  if (typeof e != "number") throw new Error(`${e} is not a number`);
  return e;
}
var yO = (() => {
    class e {
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵmod = Ra({ type: e });
      }
      static {
        this.ɵinj = xa({});
      }
    }
    return e;
  })(),
  qI = "browser",
  GI = "server";
function vO(e) {
  return e === qI;
}
function DO(e) {
  return e === GI;
}
var Sp = class {};
var T = (function (e) {
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
  })(T || {}),
  Xe = "*";
function _O(e, t) {
  return { type: T.Trigger, name: e, definitions: t, options: {} };
}
function IO(e, t = null) {
  return { type: T.Animate, styles: t, timings: e };
}
function kp(e, t = null) {
  return { type: T.Sequence, steps: e, options: t };
}
function Fl(e) {
  return { type: T.Style, styles: e, offset: null };
}
function CO(e, t, n) {
  return { type: T.State, name: e, styles: t, options: n };
}
function bO(e, t, n = null) {
  return { type: T.Transition, expr: e, animation: t, options: n };
}
var Tt = class {
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
  fr = class {
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
  gi = "!";
function Lp(e) {
  return new m(3e3, !1);
}
function WI() {
  return new m(3100, !1);
}
function QI() {
  return new m(3101, !1);
}
function ZI(e) {
  return new m(3001, !1);
}
function KI(e) {
  return new m(3003, !1);
}
function YI(e) {
  return new m(3004, !1);
}
function JI(e, t) {
  return new m(3005, !1);
}
function XI() {
  return new m(3006, !1);
}
function eC() {
  return new m(3007, !1);
}
function tC(e, t) {
  return new m(3008, !1);
}
function nC(e) {
  return new m(3002, !1);
}
function rC(e, t, n, r, o) {
  return new m(3010, !1);
}
function oC() {
  return new m(3011, !1);
}
function iC() {
  return new m(3012, !1);
}
function sC() {
  return new m(3200, !1);
}
function aC() {
  return new m(3202, !1);
}
function lC() {
  return new m(3013, !1);
}
function uC(e) {
  return new m(3014, !1);
}
function cC(e) {
  return new m(3015, !1);
}
function dC(e) {
  return new m(3016, !1);
}
function fC(e) {
  return new m(3500, !1);
}
function hC(e) {
  return new m(3501, !1);
}
function pC(e, t) {
  return new m(3404, !1);
}
function gC(e) {
  return new m(3502, !1);
}
function mC(e) {
  return new m(3503, !1);
}
function yC() {
  return new m(3300, !1);
}
function vC(e) {
  return new m(3504, !1);
}
function DC(e) {
  return new m(3301, !1);
}
function EC(e, t) {
  return new m(3302, !1);
}
function wC(e) {
  return new m(3303, !1);
}
function _C(e, t) {
  return new m(3400, !1);
}
function IC(e) {
  return new m(3401, !1);
}
function CC(e) {
  return new m(3402, !1);
}
function bC(e, t) {
  return new m(3505, !1);
}
var SC = new Set([
  "-moz-outline-radius",
  "-moz-outline-radius-bottomleft",
  "-moz-outline-radius-bottomright",
  "-moz-outline-radius-topleft",
  "-moz-outline-radius-topright",
  "-ms-grid-columns",
  "-ms-grid-rows",
  "-webkit-line-clamp",
  "-webkit-text-fill-color",
  "-webkit-text-stroke",
  "-webkit-text-stroke-color",
  "accent-color",
  "all",
  "backdrop-filter",
  "background",
  "background-color",
  "background-position",
  "background-size",
  "block-size",
  "border",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-width",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image-outset",
  "border-image-slice",
  "border-image-width",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-width",
  "border-left",
  "border-left-color",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-width",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-width",
  "border-width",
  "bottom",
  "box-shadow",
  "caret-color",
  "clip",
  "clip-path",
  "color",
  "column-count",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-width",
  "column-width",
  "columns",
  "filter",
  "flex",
  "flex-basis",
  "flex-grow",
  "flex-shrink",
  "font",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-variation-settings",
  "font-weight",
  "gap",
  "grid-column-gap",
  "grid-gap",
  "grid-row-gap",
  "grid-template-columns",
  "grid-template-rows",
  "height",
  "inline-size",
  "input-security",
  "inset",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "left",
  "letter-spacing",
  "line-clamp",
  "line-height",
  "margin",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "mask",
  "mask-border",
  "mask-position",
  "mask-size",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-lines",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-width",
  "padding",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "perspective",
  "perspective-origin",
  "right",
  "rotate",
  "row-gap",
  "scale",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-coordinate",
  "scroll-snap-destination",
  "scrollbar-color",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "tab-size",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-indent",
  "text-shadow",
  "text-underline-offset",
  "top",
  "transform",
  "transform-origin",
  "translate",
  "vertical-align",
  "visibility",
  "width",
  "word-spacing",
  "z-index",
  "zoom",
]);
function Nt(e) {
  switch (e.length) {
    case 0:
      return new Tt();
    case 1:
      return e[0];
    default:
      return new fr(e);
  }
}
function tg(e, t, n = new Map(), r = new Map()) {
  let o = [],
    i = [],
    s = -1,
    a = null;
  if (
    (t.forEach((l) => {
      let u = l.get("offset"),
        c = u == s,
        d = (c && a) || new Map();
      l.forEach((h, f) => {
        let p = f,
          g = h;
        if (f !== "offset")
          switch (((p = e.normalizePropertyName(p, o)), g)) {
            case gi:
              g = n.get(f);
              break;
            case Xe:
              g = r.get(f);
              break;
            default:
              g = e.normalizeStyleValue(f, p, g, o);
              break;
          }
        d.set(p, g);
      }),
        c || i.push(d),
        (a = d),
        (s = u);
    }),
    o.length)
  )
    throw gC(o);
  return i;
}
function su(e, t, n, r) {
  switch (t) {
    case "start":
      e.onStart(() => r(n && Rl(n, "start", e)));
      break;
    case "done":
      e.onDone(() => r(n && Rl(n, "done", e)));
      break;
    case "destroy":
      e.onDestroy(() => r(n && Rl(n, "destroy", e)));
      break;
  }
}
function Rl(e, t, n) {
  let r = n.totalTime,
    o = !!n.disabled,
    i = au(
      e.element,
      e.triggerName,
      e.fromState,
      e.toState,
      t || e.phaseName,
      r ?? e.totalTime,
      o
    ),
    s = e._data;
  return s != null && (i._data = s), i;
}
function au(e, t, n, r, o = "", i = 0, s) {
  return {
    element: e,
    triggerName: t,
    fromState: n,
    toState: r,
    phaseName: o,
    totalTime: i,
    disabled: !!s,
  };
}
function Ne(e, t, n) {
  let r = e.get(t);
  return r || e.set(t, (r = n)), r;
}
function jp(e) {
  let t = e.indexOf(":"),
    n = e.substring(1, t),
    r = e.slice(t + 1);
  return [n, r];
}
var MC = typeof document > "u" ? null : document.documentElement;
function lu(e) {
  let t = e.parentNode || e.host || null;
  return t === MC ? null : t;
}
function TC(e) {
  return e.substring(1, 6) == "ebkit";
}
var tn = null,
  Vp = !1;
function NC(e) {
  tn ||
    ((tn = xC() || {}), (Vp = tn.style ? "WebkitAppearance" in tn.style : !1));
  let t = !0;
  return (
    tn.style &&
      !TC(e) &&
      ((t = e in tn.style),
      !t &&
        Vp &&
        (t = "Webkit" + e.charAt(0).toUpperCase() + e.slice(1) in tn.style)),
    t
  );
}
function xO(e) {
  return SC.has(e);
}
function xC() {
  return typeof document < "u" ? document.body : null;
}
function ng(e, t) {
  for (; t; ) {
    if (t === e) return !0;
    t = lu(t);
  }
  return !1;
}
function rg(e, t, n) {
  if (n) return Array.from(e.querySelectorAll(t));
  let r = e.querySelector(t);
  return r ? [r] : [];
}
var og = (() => {
    class e {
      validateStyleProperty(n) {
        return NC(n);
      }
      containsElement(n, r) {
        return ng(n, r);
      }
      getParentElement(n) {
        return lu(n);
      }
      query(n, r, o) {
        return rg(n, r, o);
      }
      computeStyle(n, r, o) {
        return o || "";
      }
      animate(n, r, o, i, s, a = [], l) {
        return new Tt(o, i);
      }
      static {
        this.ɵfac = function (r) {
          return new (r || e)();
        };
      }
      static {
        this.ɵprov = $({ token: e, factory: e.ɵfac });
      }
    }
    return e;
  })(),
  Bp = class {
    static {
      this.NOOP = new og();
    }
  },
  $l = class {},
  Hl = class {
    normalizePropertyName(t, n) {
      return t;
    }
    normalizeStyleValue(t, n, r, o) {
      return r;
    }
  },
  AC = 1e3,
  ig = "{{",
  OC = "}}",
  uu = "ng-enter",
  wi = "ng-leave",
  mi = "ng-trigger",
  _i = ".ng-trigger",
  $p = "ng-animating",
  Ul = ".ng-animating";
function ht(e) {
  if (typeof e == "number") return e;
  let t = e.match(/^(-?[\.\d]+)(m?s)/);
  return !t || t.length < 2 ? 0 : zl(parseFloat(t[1]), t[2]);
}
function zl(e, t) {
  switch (t) {
    case "s":
      return e * AC;
    default:
      return e;
  }
}
function Ii(e, t, n) {
  return e.hasOwnProperty("duration") ? e : PC(e, t, n);
}
function PC(e, t, n) {
  let r =
      /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,
    o,
    i = 0,
    s = "";
  if (typeof e == "string") {
    let a = e.match(r);
    if (a === null) return t.push(Lp(e)), { duration: 0, delay: 0, easing: "" };
    o = zl(parseFloat(a[1]), a[2]);
    let l = a[3];
    l != null && (i = zl(parseFloat(l), a[4]));
    let u = a[5];
    u && (s = u);
  } else o = e;
  if (!n) {
    let a = !1,
      l = t.length;
    o < 0 && (t.push(WI()), (a = !0)),
      i < 0 && (t.push(QI()), (a = !0)),
      a && t.splice(l, 0, Lp(e));
  }
  return { duration: o, delay: i, easing: s };
}
function FC(e) {
  return e.length
    ? e[0] instanceof Map
      ? e
      : e.map((t) => new Map(Object.entries(t)))
    : [];
}
function Hp(e) {
  return Array.isArray(e) ? new Map(...e) : new Map(e);
}
function et(e, t, n) {
  t.forEach((r, o) => {
    let i = cu(o);
    n && !n.has(o) && n.set(o, e.style[i]), (e.style[i] = r);
  });
}
function rn(e, t) {
  t.forEach((n, r) => {
    let o = cu(r);
    e.style[o] = "";
  });
}
function hr(e) {
  return Array.isArray(e) ? (e.length == 1 ? e[0] : kp(e)) : e;
}
function RC(e, t, n) {
  let r = t.params || {},
    o = sg(e);
  o.length &&
    o.forEach((i) => {
      r.hasOwnProperty(i) || n.push(ZI(i));
    });
}
var ql = new RegExp(`${ig}\\s*(.+?)\\s*${OC}`, "g");
function sg(e) {
  let t = [];
  if (typeof e == "string") {
    let n;
    for (; (n = ql.exec(e)); ) t.push(n[1]);
    ql.lastIndex = 0;
  }
  return t;
}
function gr(e, t, n) {
  let r = `${e}`,
    o = r.replace(ql, (i, s) => {
      let a = t[s];
      return a == null && (n.push(KI(s)), (a = "")), a.toString();
    });
  return o == r ? e : o;
}
var kC = /-+([a-z0-9])/g;
function cu(e) {
  return e.replace(kC, (...t) => t[1].toUpperCase());
}
function AO(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function LC(e, t) {
  return e === 0 || t === 0;
}
function jC(e, t, n) {
  if (n.size && t.length) {
    let r = t[0],
      o = [];
    if (
      (n.forEach((i, s) => {
        r.has(s) || o.push(s), r.set(s, i);
      }),
      o.length)
    )
      for (let i = 1; i < t.length; i++) {
        let s = t[i];
        o.forEach((a) => s.set(a, du(e, a)));
      }
  }
  return t;
}
function Te(e, t, n) {
  switch (t.type) {
    case T.Trigger:
      return e.visitTrigger(t, n);
    case T.State:
      return e.visitState(t, n);
    case T.Transition:
      return e.visitTransition(t, n);
    case T.Sequence:
      return e.visitSequence(t, n);
    case T.Group:
      return e.visitGroup(t, n);
    case T.Animate:
      return e.visitAnimate(t, n);
    case T.Keyframes:
      return e.visitKeyframes(t, n);
    case T.Style:
      return e.visitStyle(t, n);
    case T.Reference:
      return e.visitReference(t, n);
    case T.AnimateChild:
      return e.visitAnimateChild(t, n);
    case T.AnimateRef:
      return e.visitAnimateRef(t, n);
    case T.Query:
      return e.visitQuery(t, n);
    case T.Stagger:
      return e.visitStagger(t, n);
    default:
      throw YI(t.type);
  }
}
function du(e, t) {
  return window.getComputedStyle(e)[t];
}
var VC = new Set([
    "width",
    "height",
    "minWidth",
    "minHeight",
    "maxWidth",
    "maxHeight",
    "left",
    "top",
    "bottom",
    "right",
    "fontSize",
    "outlineWidth",
    "outlineOffset",
    "paddingTop",
    "paddingLeft",
    "paddingBottom",
    "paddingRight",
    "marginTop",
    "marginLeft",
    "marginBottom",
    "marginRight",
    "borderRadius",
    "borderWidth",
    "borderTopWidth",
    "borderLeftWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "textIndent",
    "perspective",
  ]),
  Gl = class extends $l {
    normalizePropertyName(t, n) {
      return cu(t);
    }
    normalizeStyleValue(t, n, r, o) {
      let i = "",
        s = r.toString().trim();
      if (VC.has(n) && r !== 0 && r !== "0")
        if (typeof r == "number") i = "px";
        else {
          let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
          a && a[1].length == 0 && o.push(JI(t, r));
        }
      return s + i;
    }
  };
var Ci = "*";
function BC(e, t) {
  let n = [];
  return (
    typeof e == "string"
      ? e.split(/\s*,\s*/).forEach((r) => $C(r, n, t))
      : n.push(e),
    n
  );
}
function $C(e, t, n) {
  if (e[0] == ":") {
    let l = HC(e, n);
    if (typeof l == "function") {
      t.push(l);
      return;
    }
    e = l;
  }
  let r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (r == null || r.length < 4) return n.push(cC(e)), t;
  let o = r[1],
    i = r[2],
    s = r[3];
  t.push(Up(o, s));
  let a = o == Ci && s == Ci;
  i[0] == "<" && !a && t.push(Up(s, o));
}
function HC(e, t) {
  switch (e) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (n, r) => parseFloat(r) > parseFloat(n);
    case ":decrement":
      return (n, r) => parseFloat(r) < parseFloat(n);
    default:
      return t.push(dC(e)), "* => *";
  }
}
var yi = new Set(["true", "1"]),
  vi = new Set(["false", "0"]);
function Up(e, t) {
  let n = yi.has(e) || vi.has(e),
    r = yi.has(t) || vi.has(t);
  return (o, i) => {
    let s = e == Ci || e == o,
      a = t == Ci || t == i;
    return (
      !s && n && typeof o == "boolean" && (s = o ? yi.has(e) : vi.has(e)),
      !a && r && typeof i == "boolean" && (a = i ? yi.has(t) : vi.has(t)),
      s && a
    );
  };
}
var ag = ":self",
  UC = new RegExp(`s*${ag}s*,?`, "g");
function fu(e, t, n, r) {
  return new Wl(e).build(t, n, r);
}
var zp = "",
  Wl = class {
    constructor(t) {
      this._driver = t;
    }
    build(t, n, r) {
      let o = new Ql(n);
      return this._resetContextStyleTimingState(o), Te(this, hr(t), o);
    }
    _resetContextStyleTimingState(t) {
      (t.currentQuerySelector = zp),
        (t.collectedStyles = new Map()),
        t.collectedStyles.set(zp, new Map()),
        (t.currentTime = 0);
    }
    visitTrigger(t, n) {
      let r = (n.queryCount = 0),
        o = (n.depCount = 0),
        i = [],
        s = [];
      return (
        t.name.charAt(0) == "@" && n.errors.push(XI()),
        t.definitions.forEach((a) => {
          if ((this._resetContextStyleTimingState(n), a.type == T.State)) {
            let l = a,
              u = l.name;
            u
              .toString()
              .split(/\s*,\s*/)
              .forEach((c) => {
                (l.name = c), i.push(this.visitState(l, n));
              }),
              (l.name = u);
          } else if (a.type == T.Transition) {
            let l = this.visitTransition(a, n);
            (r += l.queryCount), (o += l.depCount), s.push(l);
          } else n.errors.push(eC());
        }),
        {
          type: T.Trigger,
          name: t.name,
          states: i,
          transitions: s,
          queryCount: r,
          depCount: o,
          options: null,
        }
      );
    }
    visitState(t, n) {
      let r = this.visitStyle(t.styles, n),
        o = (t.options && t.options.params) || null;
      if (r.containsDynamicStyles) {
        let i = new Set(),
          s = o || {};
        r.styles.forEach((a) => {
          a instanceof Map &&
            a.forEach((l) => {
              sg(l).forEach((u) => {
                s.hasOwnProperty(u) || i.add(u);
              });
            });
        }),
          i.size && n.errors.push(tC(t.name, [...i.values()]));
      }
      return {
        type: T.State,
        name: t.name,
        style: r,
        options: o ? { params: o } : null,
      };
    }
    visitTransition(t, n) {
      (n.queryCount = 0), (n.depCount = 0);
      let r = Te(this, hr(t.animation), n),
        o = BC(t.expr, n.errors);
      return {
        type: T.Transition,
        matchers: o,
        animation: r,
        queryCount: n.queryCount,
        depCount: n.depCount,
        options: nn(t.options),
      };
    }
    visitSequence(t, n) {
      return {
        type: T.Sequence,
        steps: t.steps.map((r) => Te(this, r, n)),
        options: nn(t.options),
      };
    }
    visitGroup(t, n) {
      let r = n.currentTime,
        o = 0,
        i = t.steps.map((s) => {
          n.currentTime = r;
          let a = Te(this, s, n);
          return (o = Math.max(o, n.currentTime)), a;
        });
      return (
        (n.currentTime = o), { type: T.Group, steps: i, options: nn(t.options) }
      );
    }
    visitAnimate(t, n) {
      let r = WC(t.timings, n.errors);
      n.currentAnimateTimings = r;
      let o,
        i = t.styles ? t.styles : Fl({});
      if (i.type == T.Keyframes) o = this.visitKeyframes(i, n);
      else {
        let s = t.styles,
          a = !1;
        if (!s) {
          a = !0;
          let u = {};
          r.easing && (u.easing = r.easing), (s = Fl(u));
        }
        n.currentTime += r.duration + r.delay;
        let l = this.visitStyle(s, n);
        (l.isEmptyStep = a), (o = l);
      }
      return (
        (n.currentAnimateTimings = null),
        { type: T.Animate, timings: r, style: o, options: null }
      );
    }
    visitStyle(t, n) {
      let r = this._makeStyleAst(t, n);
      return this._validateStyleAst(r, n), r;
    }
    _makeStyleAst(t, n) {
      let r = [],
        o = Array.isArray(t.styles) ? t.styles : [t.styles];
      for (let a of o)
        typeof a == "string"
          ? a === Xe
            ? r.push(a)
            : n.errors.push(nC(a))
          : r.push(new Map(Object.entries(a)));
      let i = !1,
        s = null;
      return (
        r.forEach((a) => {
          if (
            a instanceof Map &&
            (a.has("easing") && ((s = a.get("easing")), a.delete("easing")), !i)
          ) {
            for (let l of a.values())
              if (l.toString().indexOf(ig) >= 0) {
                i = !0;
                break;
              }
          }
        }),
        {
          type: T.Style,
          styles: r,
          easing: s,
          offset: t.offset,
          containsDynamicStyles: i,
          options: null,
        }
      );
    }
    _validateStyleAst(t, n) {
      let r = n.currentAnimateTimings,
        o = n.currentTime,
        i = n.currentTime;
      r && i > 0 && (i -= r.duration + r.delay),
        t.styles.forEach((s) => {
          typeof s != "string" &&
            s.forEach((a, l) => {
              let u = n.collectedStyles.get(n.currentQuerySelector),
                c = u.get(l),
                d = !0;
              c &&
                (i != o &&
                  i >= c.startTime &&
                  o <= c.endTime &&
                  (n.errors.push(rC(l, c.startTime, c.endTime, i, o)),
                  (d = !1)),
                (i = c.startTime)),
                d && u.set(l, { startTime: i, endTime: o }),
                n.options && RC(a, n.options, n.errors);
            });
        });
    }
    visitKeyframes(t, n) {
      let r = { type: T.Keyframes, styles: [], options: null };
      if (!n.currentAnimateTimings) return n.errors.push(oC()), r;
      let o = 1,
        i = 0,
        s = [],
        a = !1,
        l = !1,
        u = 0,
        c = t.steps.map((v) => {
          let I = this._makeStyleAst(v, n),
            B = I.offset != null ? I.offset : GC(I.styles),
            P = 0;
          return (
            B != null && (i++, (P = I.offset = B)),
            (l = l || P < 0 || P > 1),
            (a = a || P < u),
            (u = P),
            s.push(P),
            I
          );
        });
      l && n.errors.push(iC()), a && n.errors.push(sC());
      let d = t.steps.length,
        h = 0;
      i > 0 && i < d ? n.errors.push(aC()) : i == 0 && (h = o / (d - 1));
      let f = d - 1,
        p = n.currentTime,
        g = n.currentAnimateTimings,
        D = g.duration;
      return (
        c.forEach((v, I) => {
          let B = h > 0 ? (I == f ? 1 : h * I) : s[I],
            P = B * D;
          (n.currentTime = p + g.delay + P),
            (g.duration = P),
            this._validateStyleAst(v, n),
            (v.offset = B),
            r.styles.push(v);
        }),
        r
      );
    }
    visitReference(t, n) {
      return {
        type: T.Reference,
        animation: Te(this, hr(t.animation), n),
        options: nn(t.options),
      };
    }
    visitAnimateChild(t, n) {
      return n.depCount++, { type: T.AnimateChild, options: nn(t.options) };
    }
    visitAnimateRef(t, n) {
      return {
        type: T.AnimateRef,
        animation: this.visitReference(t.animation, n),
        options: nn(t.options),
      };
    }
    visitQuery(t, n) {
      let r = n.currentQuerySelector,
        o = t.options || {};
      n.queryCount++, (n.currentQuery = t);
      let [i, s] = zC(t.selector);
      (n.currentQuerySelector = r.length ? r + " " + i : i),
        Ne(n.collectedStyles, n.currentQuerySelector, new Map());
      let a = Te(this, hr(t.animation), n);
      return (
        (n.currentQuery = null),
        (n.currentQuerySelector = r),
        {
          type: T.Query,
          selector: i,
          limit: o.limit || 0,
          optional: !!o.optional,
          includeSelf: s,
          animation: a,
          originalSelector: t.selector,
          options: nn(t.options),
        }
      );
    }
    visitStagger(t, n) {
      n.currentQuery || n.errors.push(lC());
      let r =
        t.timings === "full"
          ? { duration: 0, delay: 0, easing: "full" }
          : Ii(t.timings, n.errors, !0);
      return {
        type: T.Stagger,
        animation: Te(this, hr(t.animation), n),
        timings: r,
        options: null,
      };
    }
  };
function zC(e) {
  let t = !!e.split(/\s*,\s*/).find((n) => n == ag);
  return (
    t && (e = e.replace(UC, "")),
    (e = e
      .replace(/@\*/g, _i)
      .replace(/@\w+/g, (n) => _i + "-" + n.slice(1))
      .replace(/:animating/g, Ul)),
    [e, t]
  );
}
function qC(e) {
  return e ? _e({}, e) : null;
}
var Ql = class {
  constructor(t) {
    (this.errors = t),
      (this.queryCount = 0),
      (this.depCount = 0),
      (this.currentTransition = null),
      (this.currentQuery = null),
      (this.currentQuerySelector = null),
      (this.currentAnimateTimings = null),
      (this.currentTime = 0),
      (this.collectedStyles = new Map()),
      (this.options = null),
      (this.unsupportedCSSPropertiesFound = new Set());
  }
};
function GC(e) {
  if (typeof e == "string") return null;
  let t = null;
  if (Array.isArray(e))
    e.forEach((n) => {
      if (n instanceof Map && n.has("offset")) {
        let r = n;
        (t = parseFloat(r.get("offset"))), r.delete("offset");
      }
    });
  else if (e instanceof Map && e.has("offset")) {
    let n = e;
    (t = parseFloat(n.get("offset"))), n.delete("offset");
  }
  return t;
}
function WC(e, t) {
  if (e.hasOwnProperty("duration")) return e;
  if (typeof e == "number") {
    let i = Ii(e, t).duration;
    return kl(i, 0, "");
  }
  let n = e;
  if (n.split(/\s+/).some((i) => i.charAt(0) == "{" && i.charAt(1) == "{")) {
    let i = kl(0, 0, "");
    return (i.dynamic = !0), (i.strValue = n), i;
  }
  let o = Ii(n, t);
  return kl(o.duration, o.delay, o.easing);
}
function nn(e) {
  return (
    e ? ((e = _e({}, e)), e.params && (e.params = qC(e.params))) : (e = {}), e
  );
}
function kl(e, t, n) {
  return { duration: e, delay: t, easing: n };
}
function hu(e, t, n, r, o, i, s = null, a = !1) {
  return {
    type: 1,
    element: e,
    keyframes: t,
    preStyleProps: n,
    postStyleProps: r,
    duration: o,
    delay: i,
    totalTime: o + i,
    easing: s,
    subTimeline: a,
  };
}
var On = class {
    constructor() {
      this._map = new Map();
    }
    get(t) {
      return this._map.get(t) || [];
    }
    append(t, n) {
      let r = this._map.get(t);
      r || this._map.set(t, (r = [])), r.push(...n);
    }
    has(t) {
      return this._map.has(t);
    }
    clear() {
      this._map.clear();
    }
  },
  QC = 1,
  ZC = ":enter",
  KC = new RegExp(ZC, "g"),
  YC = ":leave",
  JC = new RegExp(YC, "g");
function pu(e, t, n, r, o, i = new Map(), s = new Map(), a, l, u = []) {
  return new Zl().buildKeyframes(e, t, n, r, o, i, s, a, l, u);
}
var Zl = class {
    buildKeyframes(t, n, r, o, i, s, a, l, u, c = []) {
      u = u || new On();
      let d = new Kl(t, n, u, o, i, c, []);
      d.options = l;
      let h = l.delay ? ht(l.delay) : 0;
      d.currentTimeline.delayNextStep(h),
        d.currentTimeline.setStyles([s], null, d.errors, l),
        Te(this, r, d);
      let f = d.timelines.filter((p) => p.containsAnimation());
      if (f.length && a.size) {
        let p;
        for (let g = f.length - 1; g >= 0; g--) {
          let D = f[g];
          if (D.element === n) {
            p = D;
            break;
          }
        }
        p &&
          !p.allowOnlyTimelineStyles() &&
          p.setStyles([a], null, d.errors, l);
      }
      return f.length
        ? f.map((p) => p.buildKeyframes())
        : [hu(n, [], [], [], 0, h, "", !1)];
    }
    visitTrigger(t, n) {}
    visitState(t, n) {}
    visitTransition(t, n) {}
    visitAnimateChild(t, n) {
      let r = n.subInstructions.get(n.element);
      if (r) {
        let o = n.createSubContext(t.options),
          i = n.currentTimeline.currentTime,
          s = this._visitSubInstructions(r, o, o.options);
        i != s && n.transformIntoNewTimeline(s);
      }
      n.previousNode = t;
    }
    visitAnimateRef(t, n) {
      let r = n.createSubContext(t.options);
      r.transformIntoNewTimeline(),
        this._applyAnimationRefDelays([t.options, t.animation.options], n, r),
        this.visitReference(t.animation, r),
        n.transformIntoNewTimeline(r.currentTimeline.currentTime),
        (n.previousNode = t);
    }
    _applyAnimationRefDelays(t, n, r) {
      for (let o of t) {
        let i = o?.delay;
        if (i) {
          let s =
            typeof i == "number" ? i : ht(gr(i, o?.params ?? {}, n.errors));
          r.delayNextStep(s);
        }
      }
    }
    _visitSubInstructions(t, n, r) {
      let i = n.currentTimeline.currentTime,
        s = r.duration != null ? ht(r.duration) : null,
        a = r.delay != null ? ht(r.delay) : null;
      return (
        s !== 0 &&
          t.forEach((l) => {
            let u = n.appendInstructionToTimeline(l, s, a);
            i = Math.max(i, u.duration + u.delay);
          }),
        i
      );
    }
    visitReference(t, n) {
      n.updateOptions(t.options, !0),
        Te(this, t.animation, n),
        (n.previousNode = t);
    }
    visitSequence(t, n) {
      let r = n.subContextCount,
        o = n,
        i = t.options;
      if (
        i &&
        (i.params || i.delay) &&
        ((o = n.createSubContext(i)),
        o.transformIntoNewTimeline(),
        i.delay != null)
      ) {
        o.previousNode.type == T.Style &&
          (o.currentTimeline.snapshotCurrentStyles(), (o.previousNode = bi));
        let s = ht(i.delay);
        o.delayNextStep(s);
      }
      t.steps.length &&
        (t.steps.forEach((s) => Te(this, s, o)),
        o.currentTimeline.applyStylesToKeyframe(),
        o.subContextCount > r && o.transformIntoNewTimeline()),
        (n.previousNode = t);
    }
    visitGroup(t, n) {
      let r = [],
        o = n.currentTimeline.currentTime,
        i = t.options && t.options.delay ? ht(t.options.delay) : 0;
      t.steps.forEach((s) => {
        let a = n.createSubContext(t.options);
        i && a.delayNextStep(i),
          Te(this, s, a),
          (o = Math.max(o, a.currentTimeline.currentTime)),
          r.push(a.currentTimeline);
      }),
        r.forEach((s) => n.currentTimeline.mergeTimelineCollectedStyles(s)),
        n.transformIntoNewTimeline(o),
        (n.previousNode = t);
    }
    _visitTiming(t, n) {
      if (t.dynamic) {
        let r = t.strValue,
          o = n.params ? gr(r, n.params, n.errors) : r;
        return Ii(o, n.errors);
      } else return { duration: t.duration, delay: t.delay, easing: t.easing };
    }
    visitAnimate(t, n) {
      let r = (n.currentAnimateTimings = this._visitTiming(t.timings, n)),
        o = n.currentTimeline;
      r.delay && (n.incrementTime(r.delay), o.snapshotCurrentStyles());
      let i = t.style;
      i.type == T.Keyframes
        ? this.visitKeyframes(i, n)
        : (n.incrementTime(r.duration),
          this.visitStyle(i, n),
          o.applyStylesToKeyframe()),
        (n.currentAnimateTimings = null),
        (n.previousNode = t);
    }
    visitStyle(t, n) {
      let r = n.currentTimeline,
        o = n.currentAnimateTimings;
      !o && r.hasCurrentStyleProperties() && r.forwardFrame();
      let i = (o && o.easing) || t.easing;
      t.isEmptyStep
        ? r.applyEmptyStep(i)
        : r.setStyles(t.styles, i, n.errors, n.options),
        (n.previousNode = t);
    }
    visitKeyframes(t, n) {
      let r = n.currentAnimateTimings,
        o = n.currentTimeline.duration,
        i = r.duration,
        a = n.createSubContext().currentTimeline;
      (a.easing = r.easing),
        t.styles.forEach((l) => {
          let u = l.offset || 0;
          a.forwardTime(u * i),
            a.setStyles(l.styles, l.easing, n.errors, n.options),
            a.applyStylesToKeyframe();
        }),
        n.currentTimeline.mergeTimelineCollectedStyles(a),
        n.transformIntoNewTimeline(o + i),
        (n.previousNode = t);
    }
    visitQuery(t, n) {
      let r = n.currentTimeline.currentTime,
        o = t.options || {},
        i = o.delay ? ht(o.delay) : 0;
      i &&
        (n.previousNode.type === T.Style ||
          (r == 0 && n.currentTimeline.hasCurrentStyleProperties())) &&
        (n.currentTimeline.snapshotCurrentStyles(), (n.previousNode = bi));
      let s = r,
        a = n.invokeQuery(
          t.selector,
          t.originalSelector,
          t.limit,
          t.includeSelf,
          !!o.optional,
          n.errors
        );
      n.currentQueryTotal = a.length;
      let l = null;
      a.forEach((u, c) => {
        n.currentQueryIndex = c;
        let d = n.createSubContext(t.options, u);
        i && d.delayNextStep(i),
          u === n.element && (l = d.currentTimeline),
          Te(this, t.animation, d),
          d.currentTimeline.applyStylesToKeyframe();
        let h = d.currentTimeline.currentTime;
        s = Math.max(s, h);
      }),
        (n.currentQueryIndex = 0),
        (n.currentQueryTotal = 0),
        n.transformIntoNewTimeline(s),
        l &&
          (n.currentTimeline.mergeTimelineCollectedStyles(l),
          n.currentTimeline.snapshotCurrentStyles()),
        (n.previousNode = t);
    }
    visitStagger(t, n) {
      let r = n.parentContext,
        o = n.currentTimeline,
        i = t.timings,
        s = Math.abs(i.duration),
        a = s * (n.currentQueryTotal - 1),
        l = s * n.currentQueryIndex;
      switch (i.duration < 0 ? "reverse" : i.easing) {
        case "reverse":
          l = a - l;
          break;
        case "full":
          l = r.currentStaggerTime;
          break;
      }
      let c = n.currentTimeline;
      l && c.delayNextStep(l);
      let d = c.currentTime;
      Te(this, t.animation, n),
        (n.previousNode = t),
        (r.currentStaggerTime =
          o.currentTime - d + (o.startTime - r.currentTimeline.startTime));
    }
  },
  bi = {},
  Kl = class e {
    constructor(t, n, r, o, i, s, a, l) {
      (this._driver = t),
        (this.element = n),
        (this.subInstructions = r),
        (this._enterClassName = o),
        (this._leaveClassName = i),
        (this.errors = s),
        (this.timelines = a),
        (this.parentContext = null),
        (this.currentAnimateTimings = null),
        (this.previousNode = bi),
        (this.subContextCount = 0),
        (this.options = {}),
        (this.currentQueryIndex = 0),
        (this.currentQueryTotal = 0),
        (this.currentStaggerTime = 0),
        (this.currentTimeline = l || new Si(this._driver, n, 0)),
        a.push(this.currentTimeline);
    }
    get params() {
      return this.options.params;
    }
    updateOptions(t, n) {
      if (!t) return;
      let r = t,
        o = this.options;
      r.duration != null && (o.duration = ht(r.duration)),
        r.delay != null && (o.delay = ht(r.delay));
      let i = r.params;
      if (i) {
        let s = o.params;
        s || (s = this.options.params = {}),
          Object.keys(i).forEach((a) => {
            (!n || !s.hasOwnProperty(a)) && (s[a] = gr(i[a], s, this.errors));
          });
      }
    }
    _copyOptions() {
      let t = {};
      if (this.options) {
        let n = this.options.params;
        if (n) {
          let r = (t.params = {});
          Object.keys(n).forEach((o) => {
            r[o] = n[o];
          });
        }
      }
      return t;
    }
    createSubContext(t = null, n, r) {
      let o = n || this.element,
        i = new e(
          this._driver,
          o,
          this.subInstructions,
          this._enterClassName,
          this._leaveClassName,
          this.errors,
          this.timelines,
          this.currentTimeline.fork(o, r || 0)
        );
      return (
        (i.previousNode = this.previousNode),
        (i.currentAnimateTimings = this.currentAnimateTimings),
        (i.options = this._copyOptions()),
        i.updateOptions(t),
        (i.currentQueryIndex = this.currentQueryIndex),
        (i.currentQueryTotal = this.currentQueryTotal),
        (i.parentContext = this),
        this.subContextCount++,
        i
      );
    }
    transformIntoNewTimeline(t) {
      return (
        (this.previousNode = bi),
        (this.currentTimeline = this.currentTimeline.fork(this.element, t)),
        this.timelines.push(this.currentTimeline),
        this.currentTimeline
      );
    }
    appendInstructionToTimeline(t, n, r) {
      let o = {
          duration: n ?? t.duration,
          delay: this.currentTimeline.currentTime + (r ?? 0) + t.delay,
          easing: "",
        },
        i = new Yl(
          this._driver,
          t.element,
          t.keyframes,
          t.preStyleProps,
          t.postStyleProps,
          o,
          t.stretchStartingKeyframe
        );
      return this.timelines.push(i), o;
    }
    incrementTime(t) {
      this.currentTimeline.forwardTime(this.currentTimeline.duration + t);
    }
    delayNextStep(t) {
      t > 0 && this.currentTimeline.delayNextStep(t);
    }
    invokeQuery(t, n, r, o, i, s) {
      let a = [];
      if ((o && a.push(this.element), t.length > 0)) {
        (t = t.replace(KC, "." + this._enterClassName)),
          (t = t.replace(JC, "." + this._leaveClassName));
        let l = r != 1,
          u = this._driver.query(this.element, t, l);
        r !== 0 &&
          (u = r < 0 ? u.slice(u.length + r, u.length) : u.slice(0, r)),
          a.push(...u);
      }
      return !i && a.length == 0 && s.push(uC(n)), a;
    }
  },
  Si = class e {
    constructor(t, n, r, o) {
      (this._driver = t),
        (this.element = n),
        (this.startTime = r),
        (this._elementTimelineStylesLookup = o),
        (this.duration = 0),
        (this.easing = null),
        (this._previousKeyframe = new Map()),
        (this._currentKeyframe = new Map()),
        (this._keyframes = new Map()),
        (this._styleSummary = new Map()),
        (this._localTimelineStyles = new Map()),
        (this._pendingStyles = new Map()),
        (this._backFill = new Map()),
        (this._currentEmptyStepKeyframe = null),
        this._elementTimelineStylesLookup ||
          (this._elementTimelineStylesLookup = new Map()),
        (this._globalTimelineStyles = this._elementTimelineStylesLookup.get(n)),
        this._globalTimelineStyles ||
          ((this._globalTimelineStyles = this._localTimelineStyles),
          this._elementTimelineStylesLookup.set(n, this._localTimelineStyles)),
        this._loadKeyframe();
    }
    containsAnimation() {
      switch (this._keyframes.size) {
        case 0:
          return !1;
        case 1:
          return this.hasCurrentStyleProperties();
        default:
          return !0;
      }
    }
    hasCurrentStyleProperties() {
      return this._currentKeyframe.size > 0;
    }
    get currentTime() {
      return this.startTime + this.duration;
    }
    delayNextStep(t) {
      let n = this._keyframes.size === 1 && this._pendingStyles.size;
      this.duration || n
        ? (this.forwardTime(this.currentTime + t),
          n && this.snapshotCurrentStyles())
        : (this.startTime += t);
    }
    fork(t, n) {
      return (
        this.applyStylesToKeyframe(),
        new e(
          this._driver,
          t,
          n || this.currentTime,
          this._elementTimelineStylesLookup
        )
      );
    }
    _loadKeyframe() {
      this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe),
        (this._currentKeyframe = this._keyframes.get(this.duration)),
        this._currentKeyframe ||
          ((this._currentKeyframe = new Map()),
          this._keyframes.set(this.duration, this._currentKeyframe));
    }
    forwardFrame() {
      (this.duration += QC), this._loadKeyframe();
    }
    forwardTime(t) {
      this.applyStylesToKeyframe(), (this.duration = t), this._loadKeyframe();
    }
    _updateStyle(t, n) {
      this._localTimelineStyles.set(t, n),
        this._globalTimelineStyles.set(t, n),
        this._styleSummary.set(t, { time: this.currentTime, value: n });
    }
    allowOnlyTimelineStyles() {
      return this._currentEmptyStepKeyframe !== this._currentKeyframe;
    }
    applyEmptyStep(t) {
      t && this._previousKeyframe.set("easing", t);
      for (let [n, r] of this._globalTimelineStyles)
        this._backFill.set(n, r || Xe), this._currentKeyframe.set(n, Xe);
      this._currentEmptyStepKeyframe = this._currentKeyframe;
    }
    setStyles(t, n, r, o) {
      n && this._previousKeyframe.set("easing", n);
      let i = (o && o.params) || {},
        s = XC(t, this._globalTimelineStyles);
      for (let [a, l] of s) {
        let u = gr(l, i, r);
        this._pendingStyles.set(a, u),
          this._localTimelineStyles.has(a) ||
            this._backFill.set(a, this._globalTimelineStyles.get(a) ?? Xe),
          this._updateStyle(a, u);
      }
    }
    applyStylesToKeyframe() {
      this._pendingStyles.size != 0 &&
        (this._pendingStyles.forEach((t, n) => {
          this._currentKeyframe.set(n, t);
        }),
        this._pendingStyles.clear(),
        this._localTimelineStyles.forEach((t, n) => {
          this._currentKeyframe.has(n) || this._currentKeyframe.set(n, t);
        }));
    }
    snapshotCurrentStyles() {
      for (let [t, n] of this._localTimelineStyles)
        this._pendingStyles.set(t, n), this._updateStyle(t, n);
    }
    getFinalKeyframe() {
      return this._keyframes.get(this.duration);
    }
    get properties() {
      let t = [];
      for (let n in this._currentKeyframe) t.push(n);
      return t;
    }
    mergeTimelineCollectedStyles(t) {
      t._styleSummary.forEach((n, r) => {
        let o = this._styleSummary.get(r);
        (!o || n.time > o.time) && this._updateStyle(r, n.value);
      });
    }
    buildKeyframes() {
      this.applyStylesToKeyframe();
      let t = new Set(),
        n = new Set(),
        r = this._keyframes.size === 1 && this.duration === 0,
        o = [];
      this._keyframes.forEach((a, l) => {
        let u = new Map([...this._backFill, ...a]);
        u.forEach((c, d) => {
          c === gi ? t.add(d) : c === Xe && n.add(d);
        }),
          r || u.set("offset", l / this.duration),
          o.push(u);
      });
      let i = [...t.values()],
        s = [...n.values()];
      if (r) {
        let a = o[0],
          l = new Map(a);
        a.set("offset", 0), l.set("offset", 1), (o = [a, l]);
      }
      return hu(
        this.element,
        o,
        i,
        s,
        this.duration,
        this.startTime,
        this.easing,
        !1
      );
    }
  },
  Yl = class extends Si {
    constructor(t, n, r, o, i, s, a = !1) {
      super(t, n, s.delay),
        (this.keyframes = r),
        (this.preStyleProps = o),
        (this.postStyleProps = i),
        (this._stretchStartingKeyframe = a),
        (this.timings = {
          duration: s.duration,
          delay: s.delay,
          easing: s.easing,
        });
    }
    containsAnimation() {
      return this.keyframes.length > 1;
    }
    buildKeyframes() {
      let t = this.keyframes,
        { delay: n, duration: r, easing: o } = this.timings;
      if (this._stretchStartingKeyframe && n) {
        let i = [],
          s = r + n,
          a = n / s,
          l = new Map(t[0]);
        l.set("offset", 0), i.push(l);
        let u = new Map(t[0]);
        u.set("offset", qp(a)), i.push(u);
        let c = t.length - 1;
        for (let d = 1; d <= c; d++) {
          let h = new Map(t[d]),
            f = h.get("offset"),
            p = n + f * r;
          h.set("offset", qp(p / s)), i.push(h);
        }
        (r = s), (n = 0), (o = ""), (t = i);
      }
      return hu(
        this.element,
        t,
        this.preStyleProps,
        this.postStyleProps,
        r,
        n,
        o,
        !0
      );
    }
  };
function qp(e, t = 3) {
  let n = Math.pow(10, t - 1);
  return Math.round(e * n) / n;
}
function XC(e, t) {
  let n = new Map(),
    r;
  return (
    e.forEach((o) => {
      if (o === "*") {
        r ??= t.keys();
        for (let i of r) n.set(i, Xe);
      } else for (let [i, s] of o) n.set(i, s);
    }),
    n
  );
}
function Gp(e, t, n, r, o, i, s, a, l, u, c, d, h) {
  return {
    type: 0,
    element: e,
    triggerName: t,
    isRemovalTransition: o,
    fromState: n,
    fromStyles: i,
    toState: r,
    toStyles: s,
    timelines: a,
    queriedElements: l,
    preStyleProps: u,
    postStyleProps: c,
    totalTime: d,
    errors: h,
  };
}
var Ll = {},
  Mi = class {
    constructor(t, n, r) {
      (this._triggerName = t), (this.ast = n), (this._stateStyles = r);
    }
    match(t, n, r, o) {
      return eb(this.ast.matchers, t, n, r, o);
    }
    buildStyles(t, n, r) {
      let o = this._stateStyles.get("*");
      return (
        t !== void 0 && (o = this._stateStyles.get(t?.toString()) || o),
        o ? o.buildStyles(n, r) : new Map()
      );
    }
    build(t, n, r, o, i, s, a, l, u, c) {
      let d = [],
        h = (this.ast.options && this.ast.options.params) || Ll,
        f = (a && a.params) || Ll,
        p = this.buildStyles(r, f, d),
        g = (l && l.params) || Ll,
        D = this.buildStyles(o, g, d),
        v = new Set(),
        I = new Map(),
        B = new Map(),
        P = o === "void",
        ae = { params: lg(g, h), delay: this.ast.options?.delay },
        G = c ? [] : pu(t, n, this.ast.animation, i, s, p, D, ae, u, d),
        Z = 0;
      return (
        G.forEach((ne) => {
          Z = Math.max(ne.duration + ne.delay, Z);
        }),
        d.length
          ? Gp(n, this._triggerName, r, o, P, p, D, [], [], I, B, Z, d)
          : (G.forEach((ne) => {
              let tt = ne.element,
                on = Ne(I, tt, new Set());
              ne.preStyleProps.forEach((xt) => on.add(xt));
              let gu = Ne(B, tt, new Set());
              ne.postStyleProps.forEach((xt) => gu.add(xt)),
                tt !== n && v.add(tt);
            }),
            Gp(
              n,
              this._triggerName,
              r,
              o,
              P,
              p,
              D,
              G,
              [...v.values()],
              I,
              B,
              Z
            ))
      );
    }
  };
function eb(e, t, n, r, o) {
  return e.some((i) => i(t, n, r, o));
}
function lg(e, t) {
  let n = _e({}, t);
  return (
    Object.entries(e).forEach(([r, o]) => {
      o != null && (n[r] = o);
    }),
    n
  );
}
var Jl = class {
  constructor(t, n, r) {
    (this.styles = t), (this.defaultParams = n), (this.normalizer = r);
  }
  buildStyles(t, n) {
    let r = new Map(),
      o = lg(t, this.defaultParams);
    return (
      this.styles.styles.forEach((i) => {
        typeof i != "string" &&
          i.forEach((s, a) => {
            s && (s = gr(s, o, n));
            let l = this.normalizer.normalizePropertyName(a, n);
            (s = this.normalizer.normalizeStyleValue(a, l, s, n)), r.set(a, s);
          });
      }),
      r
    );
  }
};
function tb(e, t, n) {
  return new Xl(e, t, n);
}
var Xl = class {
  constructor(t, n, r) {
    (this.name = t),
      (this.ast = n),
      (this._normalizer = r),
      (this.transitionFactories = []),
      (this.states = new Map()),
      n.states.forEach((o) => {
        let i = (o.options && o.options.params) || {};
        this.states.set(o.name, new Jl(o.style, i, r));
      }),
      Wp(this.states, "true", "1"),
      Wp(this.states, "false", "0"),
      n.transitions.forEach((o) => {
        this.transitionFactories.push(new Mi(t, o, this.states));
      }),
      (this.fallbackTransition = nb(t, this.states, this._normalizer));
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(t, n, r, o) {
    return this.transitionFactories.find((s) => s.match(t, n, r, o)) || null;
  }
  matchStyles(t, n, r) {
    return this.fallbackTransition.buildStyles(t, n, r);
  }
};
function nb(e, t, n) {
  let r = [(s, a) => !0],
    o = { type: T.Sequence, steps: [], options: null },
    i = {
      type: T.Transition,
      animation: o,
      matchers: r,
      options: null,
      queryCount: 0,
      depCount: 0,
    };
  return new Mi(e, i, t);
}
function Wp(e, t, n) {
  e.has(t) ? e.has(n) || e.set(n, e.get(t)) : e.has(n) && e.set(t, e.get(n));
}
var rb = new On(),
  eu = class {
    constructor(t, n, r) {
      (this.bodyNode = t),
        (this._driver = n),
        (this._normalizer = r),
        (this._animations = new Map()),
        (this._playersById = new Map()),
        (this.players = []);
    }
    register(t, n) {
      let r = [],
        o = [],
        i = fu(this._driver, n, r, o);
      if (r.length) throw mC(r);
      o.length && void 0, this._animations.set(t, i);
    }
    _buildPlayer(t, n, r) {
      let o = t.element,
        i = tg(this._normalizer, t.keyframes, n, r);
      return this._driver.animate(o, i, t.duration, t.delay, t.easing, [], !0);
    }
    create(t, n, r = {}) {
      let o = [],
        i = this._animations.get(t),
        s,
        a = new Map();
      if (
        (i
          ? ((s = pu(
              this._driver,
              n,
              i,
              uu,
              wi,
              new Map(),
              new Map(),
              r,
              rb,
              o
            )),
            s.forEach((c) => {
              let d = Ne(a, c.element, new Map());
              c.postStyleProps.forEach((h) => d.set(h, null));
            }))
          : (o.push(yC()), (s = [])),
        o.length)
      )
        throw vC(o);
      a.forEach((c, d) => {
        c.forEach((h, f) => {
          c.set(f, this._driver.computeStyle(d, f, Xe));
        });
      });
      let l = s.map((c) => {
          let d = a.get(c.element);
          return this._buildPlayer(c, new Map(), d);
        }),
        u = Nt(l);
      return (
        this._playersById.set(t, u),
        u.onDestroy(() => this.destroy(t)),
        this.players.push(u),
        u
      );
    }
    destroy(t) {
      let n = this._getPlayer(t);
      n.destroy(), this._playersById.delete(t);
      let r = this.players.indexOf(n);
      r >= 0 && this.players.splice(r, 1);
    }
    _getPlayer(t) {
      let n = this._playersById.get(t);
      if (!n) throw DC(t);
      return n;
    }
    listen(t, n, r, o) {
      let i = au(n, "", "", "");
      return su(this._getPlayer(t), r, i, o), () => {};
    }
    command(t, n, r, o) {
      if (r == "register") {
        this.register(t, o[0]);
        return;
      }
      if (r == "create") {
        let s = o[0] || {};
        this.create(t, n, s);
        return;
      }
      let i = this._getPlayer(t);
      switch (r) {
        case "play":
          i.play();
          break;
        case "pause":
          i.pause();
          break;
        case "reset":
          i.reset();
          break;
        case "restart":
          i.restart();
          break;
        case "finish":
          i.finish();
          break;
        case "init":
          i.init();
          break;
        case "setPosition":
          i.setPosition(parseFloat(o[0]));
          break;
        case "destroy":
          this.destroy(t);
          break;
      }
    }
  },
  Qp = "ng-animate-queued",
  ob = ".ng-animate-queued",
  jl = "ng-animate-disabled",
  ib = ".ng-animate-disabled",
  sb = "ng-star-inserted",
  ab = ".ng-star-inserted",
  lb = [],
  ug = {
    namespaceId: "",
    setForRemoval: !1,
    setForMove: !1,
    hasAnimation: !1,
    removedBeforeQueried: !1,
  },
  ub = {
    namespaceId: "",
    setForMove: !1,
    setForRemoval: !1,
    hasAnimation: !1,
    removedBeforeQueried: !0,
  },
  Ge = "__ng_removed",
  mr = class {
    get params() {
      return this.options.params;
    }
    constructor(t, n = "") {
      this.namespaceId = n;
      let r = t && t.hasOwnProperty("value"),
        o = r ? t.value : t;
      if (((this.value = db(o)), r)) {
        let i = t,
          { value: s } = i,
          a = _u(i, ["value"]);
        this.options = a;
      } else this.options = {};
      this.options.params || (this.options.params = {});
    }
    absorbOptions(t) {
      let n = t.params;
      if (n) {
        let r = this.options.params;
        Object.keys(n).forEach((o) => {
          r[o] == null && (r[o] = n[o]);
        });
      }
    }
  },
  pr = "void",
  Vl = new mr(pr),
  tu = class {
    constructor(t, n, r) {
      (this.id = t),
        (this.hostElement = n),
        (this._engine = r),
        (this.players = []),
        (this._triggers = new Map()),
        (this._queue = []),
        (this._elementListeners = new Map()),
        (this._hostClassName = "ng-tns-" + t),
        Fe(n, this._hostClassName);
    }
    listen(t, n, r, o) {
      if (!this._triggers.has(n)) throw EC(r, n);
      if (r == null || r.length == 0) throw wC(n);
      if (!fb(r)) throw _C(r, n);
      let i = Ne(this._elementListeners, t, []),
        s = { name: n, phase: r, callback: o };
      i.push(s);
      let a = Ne(this._engine.statesByElement, t, new Map());
      return (
        a.has(n) || (Fe(t, mi), Fe(t, mi + "-" + n), a.set(n, Vl)),
        () => {
          this._engine.afterFlush(() => {
            let l = i.indexOf(s);
            l >= 0 && i.splice(l, 1), this._triggers.has(n) || a.delete(n);
          });
        }
      );
    }
    register(t, n) {
      return this._triggers.has(t) ? !1 : (this._triggers.set(t, n), !0);
    }
    _getTrigger(t) {
      let n = this._triggers.get(t);
      if (!n) throw IC(t);
      return n;
    }
    trigger(t, n, r, o = !0) {
      let i = this._getTrigger(n),
        s = new yr(this.id, n, t),
        a = this._engine.statesByElement.get(t);
      a ||
        (Fe(t, mi),
        Fe(t, mi + "-" + n),
        this._engine.statesByElement.set(t, (a = new Map())));
      let l = a.get(n),
        u = new mr(r, this.id);
      if (
        (!(r && r.hasOwnProperty("value")) && l && u.absorbOptions(l.options),
        a.set(n, u),
        l || (l = Vl),
        !(u.value === pr) && l.value === u.value)
      ) {
        if (!gb(l.params, u.params)) {
          let g = [],
            D = i.matchStyles(l.value, l.params, g),
            v = i.matchStyles(u.value, u.params, g);
          g.length
            ? this._engine.reportError(g)
            : this._engine.afterFlush(() => {
                rn(t, D), et(t, v);
              });
        }
        return;
      }
      let h = Ne(this._engine.playersByElement, t, []);
      h.forEach((g) => {
        g.namespaceId == this.id &&
          g.triggerName == n &&
          g.queued &&
          g.destroy();
      });
      let f = i.matchTransition(l.value, u.value, t, u.params),
        p = !1;
      if (!f) {
        if (!o) return;
        (f = i.fallbackTransition), (p = !0);
      }
      return (
        this._engine.totalQueuedPlayers++,
        this._queue.push({
          element: t,
          triggerName: n,
          transition: f,
          fromState: l,
          toState: u,
          player: s,
          isFallbackTransition: p,
        }),
        p ||
          (Fe(t, Qp),
          s.onStart(() => {
            An(t, Qp);
          })),
        s.onDone(() => {
          let g = this.players.indexOf(s);
          g >= 0 && this.players.splice(g, 1);
          let D = this._engine.playersByElement.get(t);
          if (D) {
            let v = D.indexOf(s);
            v >= 0 && D.splice(v, 1);
          }
        }),
        this.players.push(s),
        h.push(s),
        s
      );
    }
    deregister(t) {
      this._triggers.delete(t),
        this._engine.statesByElement.forEach((n) => n.delete(t)),
        this._elementListeners.forEach((n, r) => {
          this._elementListeners.set(
            r,
            n.filter((o) => o.name != t)
          );
        });
    }
    clearElementCache(t) {
      this._engine.statesByElement.delete(t), this._elementListeners.delete(t);
      let n = this._engine.playersByElement.get(t);
      n &&
        (n.forEach((r) => r.destroy()),
        this._engine.playersByElement.delete(t));
    }
    _signalRemovalForInnerTriggers(t, n) {
      let r = this._engine.driver.query(t, _i, !0);
      r.forEach((o) => {
        if (o[Ge]) return;
        let i = this._engine.fetchNamespacesByElement(o);
        i.size
          ? i.forEach((s) => s.triggerLeaveAnimation(o, n, !1, !0))
          : this.clearElementCache(o);
      }),
        this._engine.afterFlushAnimationsDone(() =>
          r.forEach((o) => this.clearElementCache(o))
        );
    }
    triggerLeaveAnimation(t, n, r, o) {
      let i = this._engine.statesByElement.get(t),
        s = new Map();
      if (i) {
        let a = [];
        if (
          (i.forEach((l, u) => {
            if ((s.set(u, l.value), this._triggers.has(u))) {
              let c = this.trigger(t, u, pr, o);
              c && a.push(c);
            }
          }),
          a.length)
        )
          return (
            this._engine.markElementAsRemoved(this.id, t, !0, n, s),
            r && Nt(a).onDone(() => this._engine.processLeaveNode(t)),
            !0
          );
      }
      return !1;
    }
    prepareLeaveAnimationListeners(t) {
      let n = this._elementListeners.get(t),
        r = this._engine.statesByElement.get(t);
      if (n && r) {
        let o = new Set();
        n.forEach((i) => {
          let s = i.name;
          if (o.has(s)) return;
          o.add(s);
          let l = this._triggers.get(s).fallbackTransition,
            u = r.get(s) || Vl,
            c = new mr(pr),
            d = new yr(this.id, s, t);
          this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: t,
              triggerName: s,
              transition: l,
              fromState: u,
              toState: c,
              player: d,
              isFallbackTransition: !0,
            });
        });
      }
    }
    removeNode(t, n) {
      let r = this._engine;
      if (
        (t.childElementCount && this._signalRemovalForInnerTriggers(t, n),
        this.triggerLeaveAnimation(t, n, !0))
      )
        return;
      let o = !1;
      if (r.totalAnimations) {
        let i = r.players.length ? r.playersByQueriedElement.get(t) : [];
        if (i && i.length) o = !0;
        else {
          let s = t;
          for (; (s = s.parentNode); )
            if (r.statesByElement.get(s)) {
              o = !0;
              break;
            }
        }
      }
      if ((this.prepareLeaveAnimationListeners(t), o))
        r.markElementAsRemoved(this.id, t, !1, n);
      else {
        let i = t[Ge];
        (!i || i === ug) &&
          (r.afterFlush(() => this.clearElementCache(t)),
          r.destroyInnerAnimations(t),
          r._onRemovalComplete(t, n));
      }
    }
    insertNode(t, n) {
      Fe(t, this._hostClassName);
    }
    drainQueuedTransitions(t) {
      let n = [];
      return (
        this._queue.forEach((r) => {
          let o = r.player;
          if (o.destroyed) return;
          let i = r.element,
            s = this._elementListeners.get(i);
          s &&
            s.forEach((a) => {
              if (a.name == r.triggerName) {
                let l = au(
                  i,
                  r.triggerName,
                  r.fromState.value,
                  r.toState.value
                );
                (l._data = t), su(r.player, a.phase, l, a.callback);
              }
            }),
            o.markedForDestroy
              ? this._engine.afterFlush(() => {
                  o.destroy();
                })
              : n.push(r);
        }),
        (this._queue = []),
        n.sort((r, o) => {
          let i = r.transition.ast.depCount,
            s = o.transition.ast.depCount;
          return i == 0 || s == 0
            ? i - s
            : this._engine.driver.containsElement(r.element, o.element)
            ? 1
            : -1;
        })
      );
    }
    destroy(t) {
      this.players.forEach((n) => n.destroy()),
        this._signalRemovalForInnerTriggers(this.hostElement, t);
    }
  },
  nu = class {
    _onRemovalComplete(t, n) {
      this.onRemovalComplete(t, n);
    }
    constructor(t, n, r) {
      (this.bodyNode = t),
        (this.driver = n),
        (this._normalizer = r),
        (this.players = []),
        (this.newHostElements = new Map()),
        (this.playersByElement = new Map()),
        (this.playersByQueriedElement = new Map()),
        (this.statesByElement = new Map()),
        (this.disabledNodes = new Set()),
        (this.totalAnimations = 0),
        (this.totalQueuedPlayers = 0),
        (this._namespaceLookup = {}),
        (this._namespaceList = []),
        (this._flushFns = []),
        (this._whenQuietFns = []),
        (this.namespacesByHostElement = new Map()),
        (this.collectedEnterElements = []),
        (this.collectedLeaveElements = []),
        (this.onRemovalComplete = (o, i) => {});
    }
    get queuedPlayers() {
      let t = [];
      return (
        this._namespaceList.forEach((n) => {
          n.players.forEach((r) => {
            r.queued && t.push(r);
          });
        }),
        t
      );
    }
    createNamespace(t, n) {
      let r = new tu(t, n, this);
      return (
        this.bodyNode && this.driver.containsElement(this.bodyNode, n)
          ? this._balanceNamespaceList(r, n)
          : (this.newHostElements.set(n, r), this.collectEnterElement(n)),
        (this._namespaceLookup[t] = r)
      );
    }
    _balanceNamespaceList(t, n) {
      let r = this._namespaceList,
        o = this.namespacesByHostElement;
      if (r.length - 1 >= 0) {
        let s = !1,
          a = this.driver.getParentElement(n);
        for (; a; ) {
          let l = o.get(a);
          if (l) {
            let u = r.indexOf(l);
            r.splice(u + 1, 0, t), (s = !0);
            break;
          }
          a = this.driver.getParentElement(a);
        }
        s || r.unshift(t);
      } else r.push(t);
      return o.set(n, t), t;
    }
    register(t, n) {
      let r = this._namespaceLookup[t];
      return r || (r = this.createNamespace(t, n)), r;
    }
    registerTrigger(t, n, r) {
      let o = this._namespaceLookup[t];
      o && o.register(n, r) && this.totalAnimations++;
    }
    destroy(t, n) {
      t &&
        (this.afterFlush(() => {}),
        this.afterFlushAnimationsDone(() => {
          let r = this._fetchNamespace(t);
          this.namespacesByHostElement.delete(r.hostElement);
          let o = this._namespaceList.indexOf(r);
          o >= 0 && this._namespaceList.splice(o, 1),
            r.destroy(n),
            delete this._namespaceLookup[t];
        }));
    }
    _fetchNamespace(t) {
      return this._namespaceLookup[t];
    }
    fetchNamespacesByElement(t) {
      let n = new Set(),
        r = this.statesByElement.get(t);
      if (r) {
        for (let o of r.values())
          if (o.namespaceId) {
            let i = this._fetchNamespace(o.namespaceId);
            i && n.add(i);
          }
      }
      return n;
    }
    trigger(t, n, r, o) {
      if (Di(n)) {
        let i = this._fetchNamespace(t);
        if (i) return i.trigger(n, r, o), !0;
      }
      return !1;
    }
    insertNode(t, n, r, o) {
      if (!Di(n)) return;
      let i = n[Ge];
      if (i && i.setForRemoval) {
        (i.setForRemoval = !1), (i.setForMove = !0);
        let s = this.collectedLeaveElements.indexOf(n);
        s >= 0 && this.collectedLeaveElements.splice(s, 1);
      }
      if (t) {
        let s = this._fetchNamespace(t);
        s && s.insertNode(n, r);
      }
      o && this.collectEnterElement(n);
    }
    collectEnterElement(t) {
      this.collectedEnterElements.push(t);
    }
    markElementAsDisabled(t, n) {
      n
        ? this.disabledNodes.has(t) || (this.disabledNodes.add(t), Fe(t, jl))
        : this.disabledNodes.has(t) &&
          (this.disabledNodes.delete(t), An(t, jl));
    }
    removeNode(t, n, r) {
      if (Di(n)) {
        let o = t ? this._fetchNamespace(t) : null;
        o ? o.removeNode(n, r) : this.markElementAsRemoved(t, n, !1, r);
        let i = this.namespacesByHostElement.get(n);
        i && i.id !== t && i.removeNode(n, r);
      } else this._onRemovalComplete(n, r);
    }
    markElementAsRemoved(t, n, r, o, i) {
      this.collectedLeaveElements.push(n),
        (n[Ge] = {
          namespaceId: t,
          setForRemoval: o,
          hasAnimation: r,
          removedBeforeQueried: !1,
          previousTriggersValues: i,
        });
    }
    listen(t, n, r, o, i) {
      return Di(n) ? this._fetchNamespace(t).listen(n, r, o, i) : () => {};
    }
    _buildInstruction(t, n, r, o, i) {
      return t.transition.build(
        this.driver,
        t.element,
        t.fromState.value,
        t.toState.value,
        r,
        o,
        t.fromState.options,
        t.toState.options,
        n,
        i
      );
    }
    destroyInnerAnimations(t) {
      let n = this.driver.query(t, _i, !0);
      n.forEach((r) => this.destroyActiveAnimationsForElement(r)),
        this.playersByQueriedElement.size != 0 &&
          ((n = this.driver.query(t, Ul, !0)),
          n.forEach((r) => this.finishActiveQueriedAnimationOnElement(r)));
    }
    destroyActiveAnimationsForElement(t) {
      let n = this.playersByElement.get(t);
      n &&
        n.forEach((r) => {
          r.queued ? (r.markedForDestroy = !0) : r.destroy();
        });
    }
    finishActiveQueriedAnimationOnElement(t) {
      let n = this.playersByQueriedElement.get(t);
      n && n.forEach((r) => r.finish());
    }
    whenRenderingDone() {
      return new Promise((t) => {
        if (this.players.length) return Nt(this.players).onDone(() => t());
        t();
      });
    }
    processLeaveNode(t) {
      let n = t[Ge];
      if (n && n.setForRemoval) {
        if (((t[Ge] = ug), n.namespaceId)) {
          this.destroyInnerAnimations(t);
          let r = this._fetchNamespace(n.namespaceId);
          r && r.clearElementCache(t);
        }
        this._onRemovalComplete(t, n.setForRemoval);
      }
      t.classList?.contains(jl) && this.markElementAsDisabled(t, !1),
        this.driver.query(t, ib, !0).forEach((r) => {
          this.markElementAsDisabled(r, !1);
        });
    }
    flush(t = -1) {
      let n = [];
      if (
        (this.newHostElements.size &&
          (this.newHostElements.forEach((r, o) =>
            this._balanceNamespaceList(r, o)
          ),
          this.newHostElements.clear()),
        this.totalAnimations && this.collectedEnterElements.length)
      )
        for (let r = 0; r < this.collectedEnterElements.length; r++) {
          let o = this.collectedEnterElements[r];
          Fe(o, sb);
        }
      if (
        this._namespaceList.length &&
        (this.totalQueuedPlayers || this.collectedLeaveElements.length)
      ) {
        let r = [];
        try {
          n = this._flushAnimations(r, t);
        } finally {
          for (let o = 0; o < r.length; o++) r[o]();
        }
      } else
        for (let r = 0; r < this.collectedLeaveElements.length; r++) {
          let o = this.collectedLeaveElements[r];
          this.processLeaveNode(o);
        }
      if (
        ((this.totalQueuedPlayers = 0),
        (this.collectedEnterElements.length = 0),
        (this.collectedLeaveElements.length = 0),
        this._flushFns.forEach((r) => r()),
        (this._flushFns = []),
        this._whenQuietFns.length)
      ) {
        let r = this._whenQuietFns;
        (this._whenQuietFns = []),
          n.length
            ? Nt(n).onDone(() => {
                r.forEach((o) => o());
              })
            : r.forEach((o) => o());
      }
    }
    reportError(t) {
      throw CC(t);
    }
    _flushAnimations(t, n) {
      let r = new On(),
        o = [],
        i = new Map(),
        s = [],
        a = new Map(),
        l = new Map(),
        u = new Map(),
        c = new Set();
      this.disabledNodes.forEach((y) => {
        c.add(y);
        let E = this.driver.query(y, ob, !0);
        for (let w = 0; w < E.length; w++) c.add(E[w]);
      });
      let d = this.bodyNode,
        h = Array.from(this.statesByElement.keys()),
        f = Yp(h, this.collectedEnterElements),
        p = new Map(),
        g = 0;
      f.forEach((y, E) => {
        let w = uu + g++;
        p.set(E, w), y.forEach((F) => Fe(F, w));
      });
      let D = [],
        v = new Set(),
        I = new Set();
      for (let y = 0; y < this.collectedLeaveElements.length; y++) {
        let E = this.collectedLeaveElements[y],
          w = E[Ge];
        w &&
          w.setForRemoval &&
          (D.push(E),
          v.add(E),
          w.hasAnimation
            ? this.driver.query(E, ab, !0).forEach((F) => v.add(F))
            : I.add(E));
      }
      let B = new Map(),
        P = Yp(h, Array.from(v));
      P.forEach((y, E) => {
        let w = wi + g++;
        B.set(E, w), y.forEach((F) => Fe(F, w));
      }),
        t.push(() => {
          f.forEach((y, E) => {
            let w = p.get(E);
            y.forEach((F) => An(F, w));
          }),
            P.forEach((y, E) => {
              let w = B.get(E);
              y.forEach((F) => An(F, w));
            }),
            D.forEach((y) => {
              this.processLeaveNode(y);
            });
        });
      let ae = [],
        G = [];
      for (let y = this._namespaceList.length - 1; y >= 0; y--)
        this._namespaceList[y].drainQueuedTransitions(n).forEach((w) => {
          let F = w.player,
            re = w.element;
          if ((ae.push(F), this.collectedEnterElements.length)) {
            let le = re[Ge];
            if (le && le.setForMove) {
              if (
                le.previousTriggersValues &&
                le.previousTriggersValues.has(w.triggerName)
              ) {
                let At = le.previousTriggersValues.get(w.triggerName),
                  xe = this.statesByElement.get(w.element);
                if (xe && xe.has(w.triggerName)) {
                  let vr = xe.get(w.triggerName);
                  (vr.value = At), xe.set(w.triggerName, vr);
                }
              }
              F.destroy();
              return;
            }
          }
          let We = !d || !this.driver.containsElement(d, re),
            we = B.get(re),
            pt = p.get(re),
            W = this._buildInstruction(w, r, pt, we, We);
          if (W.errors && W.errors.length) {
            G.push(W);
            return;
          }
          if (We) {
            F.onStart(() => rn(re, W.fromStyles)),
              F.onDestroy(() => et(re, W.toStyles)),
              o.push(F);
            return;
          }
          if (w.isFallbackTransition) {
            F.onStart(() => rn(re, W.fromStyles)),
              F.onDestroy(() => et(re, W.toStyles)),
              o.push(F);
            return;
          }
          let vu = [];
          W.timelines.forEach((le) => {
            (le.stretchStartingKeyframe = !0),
              this.disabledNodes.has(le.element) || vu.push(le);
          }),
            (W.timelines = vu),
            r.append(re, W.timelines);
          let fg = { instruction: W, player: F, element: re };
          s.push(fg),
            W.queriedElements.forEach((le) => Ne(a, le, []).push(F)),
            W.preStyleProps.forEach((le, At) => {
              if (le.size) {
                let xe = l.get(At);
                xe || l.set(At, (xe = new Set())),
                  le.forEach((vr, Oi) => xe.add(Oi));
              }
            }),
            W.postStyleProps.forEach((le, At) => {
              let xe = u.get(At);
              xe || u.set(At, (xe = new Set())),
                le.forEach((vr, Oi) => xe.add(Oi));
            });
        });
      if (G.length) {
        let y = [];
        G.forEach((E) => {
          y.push(bC(E.triggerName, E.errors));
        }),
          ae.forEach((E) => E.destroy()),
          this.reportError(y);
      }
      let Z = new Map(),
        ne = new Map();
      s.forEach((y) => {
        let E = y.element;
        r.has(E) &&
          (ne.set(E, E),
          this._beforeAnimationBuild(y.player.namespaceId, y.instruction, Z));
      }),
        o.forEach((y) => {
          let E = y.element;
          this._getPreviousPlayers(
            E,
            !1,
            y.namespaceId,
            y.triggerName,
            null
          ).forEach((F) => {
            Ne(Z, E, []).push(F), F.destroy();
          });
        });
      let tt = D.filter((y) => Jp(y, l, u)),
        on = new Map();
      Kp(on, this.driver, I, u, Xe).forEach((y) => {
        Jp(y, l, u) && tt.push(y);
      });
      let xt = new Map();
      f.forEach((y, E) => {
        Kp(xt, this.driver, new Set(y), l, gi);
      }),
        tt.forEach((y) => {
          let E = on.get(y),
            w = xt.get(y);
          on.set(
            y,
            new Map([...(E?.entries() ?? []), ...(w?.entries() ?? [])])
          );
        });
      let Ai = [],
        mu = [],
        yu = {};
      s.forEach((y) => {
        let { element: E, player: w, instruction: F } = y;
        if (r.has(E)) {
          if (c.has(E)) {
            w.onDestroy(() => et(E, F.toStyles)),
              (w.disabled = !0),
              w.overrideTotalTime(F.totalTime),
              o.push(w);
            return;
          }
          let re = yu;
          if (ne.size > 1) {
            let we = E,
              pt = [];
            for (; (we = we.parentNode); ) {
              let W = ne.get(we);
              if (W) {
                re = W;
                break;
              }
              pt.push(we);
            }
            pt.forEach((W) => ne.set(W, re));
          }
          let We = this._buildAnimation(w.namespaceId, F, Z, i, xt, on);
          if ((w.setRealPlayer(We), re === yu)) Ai.push(w);
          else {
            let we = this.playersByElement.get(re);
            we && we.length && (w.parentPlayer = Nt(we)), o.push(w);
          }
        } else
          rn(E, F.fromStyles),
            w.onDestroy(() => et(E, F.toStyles)),
            mu.push(w),
            c.has(E) && o.push(w);
      }),
        mu.forEach((y) => {
          let E = i.get(y.element);
          if (E && E.length) {
            let w = Nt(E);
            y.setRealPlayer(w);
          }
        }),
        o.forEach((y) => {
          y.parentPlayer ? y.syncPlayerEvents(y.parentPlayer) : y.destroy();
        });
      for (let y = 0; y < D.length; y++) {
        let E = D[y],
          w = E[Ge];
        if ((An(E, wi), w && w.hasAnimation)) continue;
        let F = [];
        if (a.size) {
          let We = a.get(E);
          We && We.length && F.push(...We);
          let we = this.driver.query(E, Ul, !0);
          for (let pt = 0; pt < we.length; pt++) {
            let W = a.get(we[pt]);
            W && W.length && F.push(...W);
          }
        }
        let re = F.filter((We) => !We.destroyed);
        re.length ? hb(this, E, re) : this.processLeaveNode(E);
      }
      return (
        (D.length = 0),
        Ai.forEach((y) => {
          this.players.push(y),
            y.onDone(() => {
              y.destroy();
              let E = this.players.indexOf(y);
              this.players.splice(E, 1);
            }),
            y.play();
        }),
        Ai
      );
    }
    afterFlush(t) {
      this._flushFns.push(t);
    }
    afterFlushAnimationsDone(t) {
      this._whenQuietFns.push(t);
    }
    _getPreviousPlayers(t, n, r, o, i) {
      let s = [];
      if (n) {
        let a = this.playersByQueriedElement.get(t);
        a && (s = a);
      } else {
        let a = this.playersByElement.get(t);
        if (a) {
          let l = !i || i == pr;
          a.forEach((u) => {
            u.queued || (!l && u.triggerName != o) || s.push(u);
          });
        }
      }
      return (
        (r || o) &&
          (s = s.filter(
            (a) => !((r && r != a.namespaceId) || (o && o != a.triggerName))
          )),
        s
      );
    }
    _beforeAnimationBuild(t, n, r) {
      let o = n.triggerName,
        i = n.element,
        s = n.isRemovalTransition ? void 0 : t,
        a = n.isRemovalTransition ? void 0 : o;
      for (let l of n.timelines) {
        let u = l.element,
          c = u !== i,
          d = Ne(r, u, []);
        this._getPreviousPlayers(u, c, s, a, n.toState).forEach((f) => {
          let p = f.getRealPlayer();
          p.beforeDestroy && p.beforeDestroy(), f.destroy(), d.push(f);
        });
      }
      rn(i, n.fromStyles);
    }
    _buildAnimation(t, n, r, o, i, s) {
      let a = n.triggerName,
        l = n.element,
        u = [],
        c = new Set(),
        d = new Set(),
        h = n.timelines.map((p) => {
          let g = p.element;
          c.add(g);
          let D = g[Ge];
          if (D && D.removedBeforeQueried) return new Tt(p.duration, p.delay);
          let v = g !== l,
            I = pb((r.get(g) || lb).map((Z) => Z.getRealPlayer())).filter(
              (Z) => {
                let ne = Z;
                return ne.element ? ne.element === g : !1;
              }
            ),
            B = i.get(g),
            P = s.get(g),
            ae = tg(this._normalizer, p.keyframes, B, P),
            G = this._buildPlayer(p, ae, I);
          if ((p.subTimeline && o && d.add(g), v)) {
            let Z = new yr(t, a, g);
            Z.setRealPlayer(G), u.push(Z);
          }
          return G;
        });
      u.forEach((p) => {
        Ne(this.playersByQueriedElement, p.element, []).push(p),
          p.onDone(() => cb(this.playersByQueriedElement, p.element, p));
      }),
        c.forEach((p) => Fe(p, $p));
      let f = Nt(h);
      return (
        f.onDestroy(() => {
          c.forEach((p) => An(p, $p)), et(l, n.toStyles);
        }),
        d.forEach((p) => {
          Ne(o, p, []).push(f);
        }),
        f
      );
    }
    _buildPlayer(t, n, r) {
      return n.length > 0
        ? this.driver.animate(t.element, n, t.duration, t.delay, t.easing, r)
        : new Tt(t.duration, t.delay);
    }
  },
  yr = class {
    constructor(t, n, r) {
      (this.namespaceId = t),
        (this.triggerName = n),
        (this.element = r),
        (this._player = new Tt()),
        (this._containsRealPlayer = !1),
        (this._queuedCallbacks = new Map()),
        (this.destroyed = !1),
        (this.parentPlayer = null),
        (this.markedForDestroy = !1),
        (this.disabled = !1),
        (this.queued = !0),
        (this.totalTime = 0);
    }
    setRealPlayer(t) {
      this._containsRealPlayer ||
        ((this._player = t),
        this._queuedCallbacks.forEach((n, r) => {
          n.forEach((o) => su(t, r, void 0, o));
        }),
        this._queuedCallbacks.clear(),
        (this._containsRealPlayer = !0),
        this.overrideTotalTime(t.totalTime),
        (this.queued = !1));
    }
    getRealPlayer() {
      return this._player;
    }
    overrideTotalTime(t) {
      this.totalTime = t;
    }
    syncPlayerEvents(t) {
      let n = this._player;
      n.triggerCallback && t.onStart(() => n.triggerCallback("start")),
        t.onDone(() => this.finish()),
        t.onDestroy(() => this.destroy());
    }
    _queueEvent(t, n) {
      Ne(this._queuedCallbacks, t, []).push(n);
    }
    onDone(t) {
      this.queued && this._queueEvent("done", t), this._player.onDone(t);
    }
    onStart(t) {
      this.queued && this._queueEvent("start", t), this._player.onStart(t);
    }
    onDestroy(t) {
      this.queued && this._queueEvent("destroy", t), this._player.onDestroy(t);
    }
    init() {
      this._player.init();
    }
    hasStarted() {
      return this.queued ? !1 : this._player.hasStarted();
    }
    play() {
      !this.queued && this._player.play();
    }
    pause() {
      !this.queued && this._player.pause();
    }
    restart() {
      !this.queued && this._player.restart();
    }
    finish() {
      this._player.finish();
    }
    destroy() {
      (this.destroyed = !0), this._player.destroy();
    }
    reset() {
      !this.queued && this._player.reset();
    }
    setPosition(t) {
      this.queued || this._player.setPosition(t);
    }
    getPosition() {
      return this.queued ? 0 : this._player.getPosition();
    }
    triggerCallback(t) {
      let n = this._player;
      n.triggerCallback && n.triggerCallback(t);
    }
  };
function cb(e, t, n) {
  let r = e.get(t);
  if (r) {
    if (r.length) {
      let o = r.indexOf(n);
      r.splice(o, 1);
    }
    r.length == 0 && e.delete(t);
  }
  return r;
}
function db(e) {
  return e ?? null;
}
function Di(e) {
  return e && e.nodeType === 1;
}
function fb(e) {
  return e == "start" || e == "done";
}
function Zp(e, t) {
  let n = e.style.display;
  return (e.style.display = t ?? "none"), n;
}
function Kp(e, t, n, r, o) {
  let i = [];
  n.forEach((l) => i.push(Zp(l)));
  let s = [];
  r.forEach((l, u) => {
    let c = new Map();
    l.forEach((d) => {
      let h = t.computeStyle(u, d, o);
      c.set(d, h), (!h || h.length == 0) && ((u[Ge] = ub), s.push(u));
    }),
      e.set(u, c);
  });
  let a = 0;
  return n.forEach((l) => Zp(l, i[a++])), s;
}
function Yp(e, t) {
  let n = new Map();
  if ((e.forEach((a) => n.set(a, [])), t.length == 0)) return n;
  let r = 1,
    o = new Set(t),
    i = new Map();
  function s(a) {
    if (!a) return r;
    let l = i.get(a);
    if (l) return l;
    let u = a.parentNode;
    return n.has(u) ? (l = u) : o.has(u) ? (l = r) : (l = s(u)), i.set(a, l), l;
  }
  return (
    t.forEach((a) => {
      let l = s(a);
      l !== r && n.get(l).push(a);
    }),
    n
  );
}
function Fe(e, t) {
  e.classList?.add(t);
}
function An(e, t) {
  e.classList?.remove(t);
}
function hb(e, t, n) {
  Nt(n).onDone(() => e.processLeaveNode(t));
}
function pb(e) {
  let t = [];
  return cg(e, t), t;
}
function cg(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r instanceof fr ? cg(r.players, t) : t.push(r);
  }
}
function gb(e, t) {
  let n = Object.keys(e),
    r = Object.keys(t);
  if (n.length != r.length) return !1;
  for (let o = 0; o < n.length; o++) {
    let i = n[o];
    if (!t.hasOwnProperty(i) || e[i] !== t[i]) return !1;
  }
  return !0;
}
function Jp(e, t, n) {
  let r = n.get(e);
  if (!r) return !1;
  let o = t.get(e);
  return o ? r.forEach((i) => o.add(i)) : t.set(e, r), n.delete(e), !0;
}
var Ti = class {
  constructor(t, n, r) {
    (this._driver = n),
      (this._normalizer = r),
      (this._triggerCache = {}),
      (this.onRemovalComplete = (o, i) => {}),
      (this._transitionEngine = new nu(t.body, n, r)),
      (this._timelineEngine = new eu(t.body, n, r)),
      (this._transitionEngine.onRemovalComplete = (o, i) =>
        this.onRemovalComplete(o, i));
  }
  registerTrigger(t, n, r, o, i) {
    let s = t + "-" + o,
      a = this._triggerCache[s];
    if (!a) {
      let l = [],
        u = [],
        c = fu(this._driver, i, l, u);
      if (l.length) throw pC(o, l);
      u.length && void 0,
        (a = tb(o, c, this._normalizer)),
        (this._triggerCache[s] = a);
    }
    this._transitionEngine.registerTrigger(n, o, a);
  }
  register(t, n) {
    this._transitionEngine.register(t, n);
  }
  destroy(t, n) {
    this._transitionEngine.destroy(t, n);
  }
  onInsert(t, n, r, o) {
    this._transitionEngine.insertNode(t, n, r, o);
  }
  onRemove(t, n, r) {
    this._transitionEngine.removeNode(t, n, r);
  }
  disableAnimations(t, n) {
    this._transitionEngine.markElementAsDisabled(t, n);
  }
  process(t, n, r, o) {
    if (r.charAt(0) == "@") {
      let [i, s] = jp(r),
        a = o;
      this._timelineEngine.command(i, n, s, a);
    } else this._transitionEngine.trigger(t, n, r, o);
  }
  listen(t, n, r, o, i) {
    if (r.charAt(0) == "@") {
      let [s, a] = jp(r);
      return this._timelineEngine.listen(s, n, a, i);
    }
    return this._transitionEngine.listen(t, n, r, o, i);
  }
  flush(t = -1) {
    this._transitionEngine.flush(t);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(t) {
    this._transitionEngine.afterFlushAnimationsDone(t);
  }
};
function mb(e, t) {
  let n = null,
    r = null;
  return (
    Array.isArray(t) && t.length
      ? ((n = Bl(t[0])), t.length > 1 && (r = Bl(t[t.length - 1])))
      : t instanceof Map && (n = Bl(t)),
    n || r ? new ru(e, n, r) : null
  );
}
var ru = class e {
  static {
    this.initialStylesByElement = new WeakMap();
  }
  constructor(t, n, r) {
    (this._element = t),
      (this._startStyles = n),
      (this._endStyles = r),
      (this._state = 0);
    let o = e.initialStylesByElement.get(t);
    o || e.initialStylesByElement.set(t, (o = new Map())),
      (this._initialStyles = o);
  }
  start() {
    this._state < 1 &&
      (this._startStyles &&
        et(this._element, this._startStyles, this._initialStyles),
      (this._state = 1));
  }
  finish() {
    this.start(),
      this._state < 2 &&
        (et(this._element, this._initialStyles),
        this._endStyles &&
          (et(this._element, this._endStyles), (this._endStyles = null)),
        (this._state = 1));
  }
  destroy() {
    this.finish(),
      this._state < 3 &&
        (e.initialStylesByElement.delete(this._element),
        this._startStyles &&
          (rn(this._element, this._startStyles), (this._endStyles = null)),
        this._endStyles &&
          (rn(this._element, this._endStyles), (this._endStyles = null)),
        et(this._element, this._initialStyles),
        (this._state = 3));
  }
};
function Bl(e) {
  let t = null;
  return (
    e.forEach((n, r) => {
      yb(r) && ((t = t || new Map()), t.set(r, n));
    }),
    t
  );
}
function yb(e) {
  return e === "display" || e === "position";
}
var Ni = class {
    constructor(t, n, r, o) {
      (this.element = t),
        (this.keyframes = n),
        (this.options = r),
        (this._specialStyles = o),
        (this._onDoneFns = []),
        (this._onStartFns = []),
        (this._onDestroyFns = []),
        (this._initialized = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._destroyed = !1),
        (this._originalOnDoneFns = []),
        (this._originalOnStartFns = []),
        (this.time = 0),
        (this.parentPlayer = null),
        (this.currentSnapshot = new Map()),
        (this._duration = r.duration),
        (this._delay = r.delay || 0),
        (this.time = this._duration + this._delay);
    }
    _onFinish() {
      this._finished ||
        ((this._finished = !0),
        this._onDoneFns.forEach((t) => t()),
        (this._onDoneFns = []));
    }
    init() {
      this._buildPlayer(), this._preparePlayerBeforeStart();
    }
    _buildPlayer() {
      if (this._initialized) return;
      this._initialized = !0;
      let t = this.keyframes;
      (this.domPlayer = this._triggerWebAnimation(
        this.element,
        t,
        this.options
      )),
        (this._finalKeyframe = t.length ? t[t.length - 1] : new Map());
      let n = () => this._onFinish();
      this.domPlayer.addEventListener("finish", n),
        this.onDestroy(() => {
          this.domPlayer.removeEventListener("finish", n);
        });
    }
    _preparePlayerBeforeStart() {
      this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
    }
    _convertKeyframesToObject(t) {
      let n = [];
      return (
        t.forEach((r) => {
          n.push(Object.fromEntries(r));
        }),
        n
      );
    }
    _triggerWebAnimation(t, n, r) {
      return t.animate(this._convertKeyframesToObject(n), r);
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
    play() {
      this._buildPlayer(),
        this.hasStarted() ||
          (this._onStartFns.forEach((t) => t()),
          (this._onStartFns = []),
          (this._started = !0),
          this._specialStyles && this._specialStyles.start()),
        this.domPlayer.play();
    }
    pause() {
      this.init(), this.domPlayer.pause();
    }
    finish() {
      this.init(),
        this._specialStyles && this._specialStyles.finish(),
        this._onFinish(),
        this.domPlayer.finish();
    }
    reset() {
      this._resetDomPlayerState(),
        (this._destroyed = !1),
        (this._finished = !1),
        (this._started = !1),
        (this._onStartFns = this._originalOnStartFns),
        (this._onDoneFns = this._originalOnDoneFns);
    }
    _resetDomPlayerState() {
      this.domPlayer && this.domPlayer.cancel();
    }
    restart() {
      this.reset(), this.play();
    }
    hasStarted() {
      return this._started;
    }
    destroy() {
      this._destroyed ||
        ((this._destroyed = !0),
        this._resetDomPlayerState(),
        this._onFinish(),
        this._specialStyles && this._specialStyles.destroy(),
        this._onDestroyFns.forEach((t) => t()),
        (this._onDestroyFns = []));
    }
    setPosition(t) {
      this.domPlayer === void 0 && this.init(),
        (this.domPlayer.currentTime = t * this.time);
    }
    getPosition() {
      return +(this.domPlayer.currentTime ?? 0) / this.time;
    }
    get totalTime() {
      return this._delay + this._duration;
    }
    beforeDestroy() {
      let t = new Map();
      this.hasStarted() &&
        this._finalKeyframe.forEach((r, o) => {
          o !== "offset" && t.set(o, this._finished ? r : du(this.element, o));
        }),
        (this.currentSnapshot = t);
    }
    triggerCallback(t) {
      let n = t === "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), (n.length = 0);
    }
  },
  ou = class {
    validateStyleProperty(t) {
      return !0;
    }
    validateAnimatableStyleProperty(t) {
      return !0;
    }
    containsElement(t, n) {
      return ng(t, n);
    }
    getParentElement(t) {
      return lu(t);
    }
    query(t, n, r) {
      return rg(t, n, r);
    }
    computeStyle(t, n, r) {
      return du(t, n);
    }
    animate(t, n, r, o, i, s = []) {
      let a = o == 0 ? "both" : "forwards",
        l = { duration: r, delay: o, fill: a };
      i && (l.easing = i);
      let u = new Map(),
        c = s.filter((f) => f instanceof Ni);
      LC(r, o) &&
        c.forEach((f) => {
          f.currentSnapshot.forEach((p, g) => u.set(g, p));
        });
      let d = FC(n).map((f) => new Map(f));
      d = jC(t, d, u);
      let h = mb(t, d);
      return new Ni(t, d, l, h);
    }
  };
function OO(e, t) {
  return e === "noop"
    ? new Ti(t, new og(), new Hl())
    : new Ti(t, new ou(), new Gl());
}
var Xp = class {
    constructor(t, n) {
      this._driver = t;
      let r = [],
        o = [],
        i = fu(t, n, r, o);
      if (r.length) throw fC(r);
      o.length && void 0, (this._animationAst = i);
    }
    buildTimelines(t, n, r, o, i) {
      let s = Array.isArray(n) ? Hp(n) : n,
        a = Array.isArray(r) ? Hp(r) : r,
        l = [];
      i = i || new On();
      let u = pu(this._driver, t, this._animationAst, uu, wi, s, a, o, i, l);
      if (l.length) throw hC(l);
      return u;
    }
  },
  Ei = "@",
  dg = "@.disabled",
  xi = class {
    constructor(t, n, r, o) {
      (this.namespaceId = t),
        (this.delegate = n),
        (this.engine = r),
        (this._onDestroy = o),
        (this.ɵtype = 0);
    }
    get data() {
      return this.delegate.data;
    }
    destroyNode(t) {
      this.delegate.destroyNode?.(t);
    }
    destroy() {
      this.engine.destroy(this.namespaceId, this.delegate),
        this.engine.afterFlushAnimationsDone(() => {
          queueMicrotask(() => {
            this.delegate.destroy();
          });
        }),
        this._onDestroy?.();
    }
    createElement(t, n) {
      return this.delegate.createElement(t, n);
    }
    createComment(t) {
      return this.delegate.createComment(t);
    }
    createText(t) {
      return this.delegate.createText(t);
    }
    appendChild(t, n) {
      this.delegate.appendChild(t, n),
        this.engine.onInsert(this.namespaceId, n, t, !1);
    }
    insertBefore(t, n, r, o = !0) {
      this.delegate.insertBefore(t, n, r),
        this.engine.onInsert(this.namespaceId, n, t, o);
    }
    removeChild(t, n, r) {
      this.parentNode(n) &&
        this.engine.onRemove(this.namespaceId, n, this.delegate);
    }
    selectRootElement(t, n) {
      return this.delegate.selectRootElement(t, n);
    }
    parentNode(t) {
      return this.delegate.parentNode(t);
    }
    nextSibling(t) {
      return this.delegate.nextSibling(t);
    }
    setAttribute(t, n, r, o) {
      this.delegate.setAttribute(t, n, r, o);
    }
    removeAttribute(t, n, r) {
      this.delegate.removeAttribute(t, n, r);
    }
    addClass(t, n) {
      this.delegate.addClass(t, n);
    }
    removeClass(t, n) {
      this.delegate.removeClass(t, n);
    }
    setStyle(t, n, r, o) {
      this.delegate.setStyle(t, n, r, o);
    }
    removeStyle(t, n, r) {
      this.delegate.removeStyle(t, n, r);
    }
    setProperty(t, n, r) {
      n.charAt(0) == Ei && n == dg
        ? this.disableAnimations(t, !!r)
        : this.delegate.setProperty(t, n, r);
    }
    setValue(t, n) {
      this.delegate.setValue(t, n);
    }
    listen(t, n, r) {
      return this.delegate.listen(t, n, r);
    }
    disableAnimations(t, n) {
      this.engine.disableAnimations(t, n);
    }
  },
  iu = class extends xi {
    constructor(t, n, r, o, i) {
      super(n, r, o, i), (this.factory = t), (this.namespaceId = n);
    }
    setProperty(t, n, r) {
      n.charAt(0) == Ei
        ? n.charAt(1) == "." && n == dg
          ? ((r = r === void 0 ? !0 : !!r), this.disableAnimations(t, r))
          : this.engine.process(this.namespaceId, t, n.slice(1), r)
        : this.delegate.setProperty(t, n, r);
    }
    listen(t, n, r) {
      if (n.charAt(0) == Ei) {
        let o = vb(t),
          i = n.slice(1),
          s = "";
        return (
          i.charAt(0) != Ei && ([i, s] = Db(i)),
          this.engine.listen(this.namespaceId, o, i, s, (a) => {
            let l = a._data || -1;
            this.factory.scheduleListenerCallback(l, r, a);
          })
        );
      }
      return this.delegate.listen(t, n, r);
    }
  };
function vb(e) {
  switch (e) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return e;
  }
}
function Db(e) {
  let t = e.indexOf("."),
    n = e.substring(0, t),
    r = e.slice(t + 1);
  return [n, r];
}
var eg = class {
  constructor(t, n, r) {
    (this.delegate = t),
      (this.engine = n),
      (this._zone = r),
      (this._currentId = 0),
      (this._microtaskId = 1),
      (this._animationCallbacksBuffer = []),
      (this._rendererCache = new Map()),
      (this._cdRecurDepth = 0),
      (n.onRemovalComplete = (o, i) => {
        i?.removeChild(null, o);
      });
  }
  createRenderer(t, n) {
    let r = "",
      o = this.delegate.createRenderer(t, n);
    if (!t || !n?.data?.animation) {
      let u = this._rendererCache,
        c = u.get(o);
      if (!c) {
        let d = () => u.delete(o);
        (c = new xi(r, o, this.engine, d)), u.set(o, c);
      }
      return c;
    }
    let i = n.id,
      s = n.id + "-" + this._currentId;
    this._currentId++, this.engine.register(s, t);
    let a = (u) => {
      Array.isArray(u)
        ? u.forEach(a)
        : this.engine.registerTrigger(i, s, t, u.name, u);
    };
    return n.data.animation.forEach(a), new iu(this, s, o, this.engine);
  }
  begin() {
    this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  scheduleListenerCallback(t, n, r) {
    if (t >= 0 && t < this._microtaskId) {
      this._zone.run(() => n(r));
      return;
    }
    let o = this._animationCallbacksBuffer;
    o.length == 0 &&
      queueMicrotask(() => {
        this._zone.run(() => {
          o.forEach((i) => {
            let [s, a] = i;
            s(a);
          }),
            (this._animationCallbacksBuffer = []);
        });
      }),
      o.push([n, r]);
  }
  end() {
    this._cdRecurDepth--,
      this._cdRecurDepth == 0 &&
        this._zone.runOutsideAngular(() => {
          this._scheduleCountTask(), this.engine.flush(this._microtaskId);
        }),
      this.delegate.end && this.delegate.end();
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};
export {
  _e as a,
  nt as b,
  _u as c,
  mg as d,
  Y as e,
  Sg as f,
  L as g,
  Qi as h,
  Zi as i,
  Ae as j,
  kn as k,
  Vn as l,
  mt as m,
  kg as n,
  Lg as o,
  jg as p,
  kt as q,
  it as r,
  Gg as s,
  Lt as t,
  Yr as u,
  Qg as v,
  Zg as w,
  jt as x,
  uc as y,
  Kg as z,
  Yg as A,
  Bn as B,
  Ki as C,
  Jg as D,
  Xg as E,
  nm as F,
  Yi as G,
  Ji as H,
  rm as I,
  om as J,
  es as K,
  im as L,
  sm as M,
  am as N,
  lm as O,
  um as P,
  cm as Q,
  m as R,
  vt as S,
  td as T,
  $ as U,
  xa as V,
  Zx as W,
  k as X,
  O as Y,
  oe as Z,
  M as _,
  Gn as $,
  Kx as aa,
  Ra as ba,
  qo as ca,
  ka as da,
  Id as ea,
  Xm as fa,
  Md as ga,
  wt as ha,
  Yx as ia,
  Fd as ja,
  Jx as ka,
  Xx as la,
  eA as ma,
  tA as na,
  nA as oa,
  Yy as pa,
  It as qa,
  Ko as ra,
  je as sa,
  ue as ta,
  _n as ua,
  Jt as va,
  rA as wa,
  yv as xa,
  Dv as ya,
  Xa as za,
  oA as Aa,
  iA as Ba,
  el as Ca,
  Xo as Da,
  Lv as Ea,
  sA as Fa,
  aA as Ga,
  lA as Ha,
  uA as Ia,
  cA as Ja,
  Hv as Ka,
  tD as La,
  Vf as Ma,
  dA as Na,
  fA as Oa,
  Yn as Pa,
  hA as Qa,
  se as Ra,
  pA as Sa,
  In as Ta,
  ko as Ua,
  yl as Va,
  Nn as Wa,
  Xt as Xa,
  yA as Ya,
  lw as Za,
  pw as _a,
  da as $a,
  gw as ab,
  vw as bb,
  ww as cb,
  bw as db,
  jw as eb,
  Zh as fb,
  Vw as gb,
  vA as hb,
  tp as ib,
  np as jb,
  Yw as kb,
  DA as lb,
  r_ as mb,
  c_ as nb,
  EA as ob,
  wA as pb,
  _A as qb,
  IA as rb,
  CA as sb,
  bA as tb,
  SA as ub,
  MA as vb,
  TA as wb,
  y_ as xb,
  sp as yb,
  v_ as zb,
  D_ as Ab,
  NA as Bb,
  E_ as Cb,
  xA as Db,
  AA as Eb,
  OA as Fb,
  PA as Gb,
  FA as Hb,
  RA as Ib,
  kA as Jb,
  T_ as Kb,
  N_ as Lb,
  LA as Mb,
  x_ as Nb,
  _l as Ob,
  hp as Pb,
  xn as Qb,
  pp as Rb,
  jA as Sb,
  VA as Tb,
  yp as Ub,
  BA as Vb,
  $A as Wb,
  HA as Xb,
  eI as Yb,
  tI as Zb,
  UA as _b,
  nI as $b,
  bl as ac,
  cO as bc,
  Dp as cc,
  Tp as dc,
  sI as ec,
  dO as fc,
  fO as gc,
  hO as hc,
  pO as ic,
  gO as jc,
  mO as kc,
  yO as lc,
  qI as mc,
  vO as nc,
  DO as oc,
  Sp as pc,
  _O as qc,
  IO as rc,
  Fl as sc,
  CO as tc,
  bO as uc,
  lu as vc,
  NC as wc,
  xO as xc,
  ng as yc,
  rg as zc,
  og as Ac,
  Bp as Bc,
  $l as Cc,
  Hl as Dc,
  FC as Ec,
  AO as Fc,
  LC as Gc,
  Gl as Hc,
  Ti as Ic,
  Ni as Jc,
  ou as Kc,
  OO as Lc,
  Xp as Mc,
  xi as Nc,
  iu as Oc,
  eg as Pc,
};
