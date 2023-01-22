var Oe = {}, Yr = {
  get exports() {
    return Oe;
  },
  set exports(Ze) {
    Oe = Ze;
  }
};
(function(Ze, hn) {
  (function(P, G) {
    Ze.exports = G();
  })(window, function() {
    return function(P) {
      var G = {};
      function b(g) {
        if (G[g])
          return G[g].exports;
        var h = G[g] = { i: g, l: !1, exports: {} };
        return P[g].call(h.exports, h, h.exports, b), h.l = !0, h.exports;
      }
      return b.m = P, b.c = G, b.d = function(g, h, m) {
        b.o(g, h) || Object.defineProperty(g, h, { enumerable: !0, get: m });
      }, b.r = function(g) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(g, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(g, "__esModule", { value: !0 });
      }, b.t = function(g, h) {
        if (1 & h && (g = b(g)), 8 & h || 4 & h && typeof g == "object" && g && g.__esModule)
          return g;
        var m = /* @__PURE__ */ Object.create(null);
        if (b.r(m), Object.defineProperty(m, "default", { enumerable: !0, value: g }), 2 & h && typeof g != "string")
          for (var E in g)
            b.d(m, E, function(_) {
              return g[_];
            }.bind(null, E));
        return m;
      }, b.n = function(g) {
        var h = g && g.__esModule ? function() {
          return g.default;
        } : function() {
          return g;
        };
        return b.d(h, "a", h), h;
      }, b.o = function(g, h) {
        return Object.prototype.hasOwnProperty.call(g, h);
      }, b.p = "/", b(b.s = 63);
    }([function(P, G, b) {
      P.exports = function(g) {
        var h = {};
        function m(E) {
          if (h[E])
            return h[E].exports;
          var _ = h[E] = { i: E, l: !1, exports: {} };
          return g[E].call(_.exports, _, _.exports, m), _.l = !0, _.exports;
        }
        return m.m = g, m.c = h, m.d = function(E, _, A) {
          m.o(E, _) || Object.defineProperty(E, _, { enumerable: !0, get: A });
        }, m.r = function(E) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(E, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(E, "__esModule", { value: !0 });
        }, m.t = function(E, _) {
          if (1 & _ && (E = m(E)), 8 & _ || 4 & _ && typeof E == "object" && E && E.__esModule)
            return E;
          var A = /* @__PURE__ */ Object.create(null);
          if (m.r(A), Object.defineProperty(A, "default", { enumerable: !0, value: E }), 2 & _ && typeof E != "string")
            for (var L in E)
              m.d(A, L, function(v) {
                return E[v];
              }.bind(null, L));
          return A;
        }, m.n = function(E) {
          var _ = E && E.__esModule ? function() {
            return E.default;
          } : function() {
            return E;
          };
          return m.d(_, "a", _), _;
        }, m.o = function(E, _) {
          return Object.prototype.hasOwnProperty.call(E, _);
        }, m.p = "/", m(m.s = 8);
      }([function(g, h) {
        g.exports = b(5);
      }, function(g, h) {
        g.exports = b(39);
      }, function(g, h) {
        g.exports = b(8);
      }, function(g, h) {
        g.exports = b(42);
      }, function(g, h) {
        g.exports = b(64);
      }, function(g, h) {
        g.exports = b(65);
      }, function(g, h) {
        g.exports = b(60);
      }, function(g, h) {
        g.exports = b(62);
      }, function(g, h, m) {
        m.r(h), m.d(h, "BrowserNotification", function() {
          return B;
        }), m.d(h, "createBrowserNotifications", function() {
          return X;
        }), m.d(h, "Decorator", function() {
          return Q;
        }), m.d(h, "Err", function() {
          return ot;
        }), m.d(h, "Evt", function() {
          return K;
        }), m.d(h, "createHttp", function() {
          return Nt;
        }), m.d(h, "I18N", function() {
          return Ht;
        }), m.d(h, "createLogger", function() {
          return z;
        }), m.d(h, "Logger", function() {
          return v;
        }), m.d(h, "createNotifications", function() {
          return Z;
        }), m.d(h, "Notifications", function() {
          return vt;
        }), m.d(h, "Signal", function() {
          return gt;
        });
        var E = m(0), _ = m.n(E), A = m(1);
        const L = (...w) => w.map((y) => typeof y == "string" ? y : JSON.stringify(y));
        var v;
        function z(w) {
          const y = new v.Service(w);
          return v.POOL.addLogger(y), y;
        }
        (function(w) {
          w.MAX_LOGS_SIZE = 1048576, w.LS_LOGS_KEY = "uuip-logs";
          const y = /[\u0100-\uFFFF]/g;
          let ct;
          (function(W) {
            W[W.Trace = 1] = "Trace", W[W.Debug = 2] = "Debug", W[W.Warn = 3] = "Warn", W[W.Error = 4] = "Error", W[W.Fatal = 5] = "Fatal";
          })(ct = w.Level || (w.Level = {})), w.Service = class {
            constructor(W) {
              this.loggerEmitter = _()(), this.prefix = W;
            }
            log(W, ...R) {
              const ft = L(this.prefix ? ["" + this.prefix, ...R] : R), $ = Date.now(), a = A.DateTime.fromMillis($).toFormat("yyyy-LL-dd HH:mm:ss:SSS");
              switch (W) {
                case w.Level.Trace:
                  console.info(a, ...ft);
                  break;
                case w.Level.Debug:
                  console.log(a, ...ft);
                  break;
                case w.Level.Warn:
                  console.warn(a, ...ft);
                  break;
                case w.Level.Error:
                case w.Level.Fatal:
                  console.error(a, ...ft);
                  break;
                default:
                  console.log(...ft);
              }
              const u = { pfx: this.prefix, msgs: [...R], ts: $, lvl: W };
              this.emit("add", u);
            }
            info(...W) {
              this.log(ct.Trace, ...W);
            }
            debug(...W) {
              this.log(ct.Debug, ...W);
            }
            warn(...W) {
              this.log(ct.Warn, ...W);
            }
            error(...W) {
              this.log(ct.Error, ...W);
            }
            emit(W, ...R) {
              this.loggerEmitter.emit(W, ...R);
            }
            addEventListener(W, R) {
              return this.loggerEmitter.on(W, R), () => {
                this.removeEventListener(W, R);
              };
            }
            removeEventListener(W, R) {
              this.loggerEmitter.off(W, R);
            }
          };
          class ut {
            constructor() {
              this.loggers = /* @__PURE__ */ new Map(), this.logsCollection = [], this.prefixedLogsCollections = {}, this.logRecordsSerializedLength = 0, this.onLoggerAddRecord = (R) => {
                this.addLogRecord(R), this.save();
              }, this.restore();
            }
            static getSerializedJsonLogRecordBytesSize(R = "") {
              const ft = R.length;
              if (ft) {
                const $ = R.replace(y, "").length;
                return 1 * $ + 2 * (ft - $);
              }
              return ft;
            }
            get serializedJsonLogsBytesSize() {
              const R = this.logsCollection.length;
              return 2 + this.logRecordsSerializedLength + 1 * (R - 1);
            }
            save() {
              window.localStorage.setItem(w.LS_LOGS_KEY, JSON.stringify(this.logsCollection));
            }
            restore() {
              try {
                (JSON.parse(window.localStorage.getItem(w.LS_LOGS_KEY) || "[]") || []).forEach((R) => this.addLogRecord(R));
              } catch (R) {
                console.warn("Logger failed read logs from localStorage: ", R);
              }
            }
            addLogRecord(R) {
              for (this.logsCollection.push(R), this.logRecordsSerializedLength += ut.getSerializedJsonLogRecordBytesSize(JSON.stringify(R)), this.prefixedLogsCollections[R.pfx] = this.prefixedLogsCollections[R.pfx] || /* @__PURE__ */ new Set(), this.prefixedLogsCollections[R.pfx].add(R); this.serializedJsonLogsBytesSize > w.MAX_LOGS_SIZE; )
                this.logsCollection.length && this.removeLogRecord(this.logsCollection[0]);
            }
            removeLogRecord(R) {
              if (R) {
                const ft = this.logsCollection.indexOf(R);
                ft !== -1 && (this.logsCollection.splice(ft, 1), this.logRecordsSerializedLength -= ut.getSerializedJsonLogRecordBytesSize(JSON.stringify(R)), this.prefixedLogsCollections[R.pfx] && this.prefixedLogsCollections[R.pfx].has(R) && this.prefixedLogsCollections[R.pfx].delete(R));
              }
            }
            static getLogRecordReadable(R) {
              return { prefix: R.pfx, messages: R.msgs, timestamp: A.DateTime.fromMillis(R.ts).toFormat("yyyy-LL-dd HH:mm:ss:SSS"), level: ct[R.lvl] };
            }
            static getLogsReadableJson(R) {
              const ft = ($) => $.map((a) => ut.getLogRecordReadable(a));
              return JSON.stringify(Array.isArray(R) ? ft(R) : Object.keys(R).reduce(($, a) => ($[a] = ft(R[a]), $), {}), null, 2);
            }
            static getLogsReadableText(R) {
              const ft = ($) => $.reduce((a, u) => {
                const r = ut.getLogRecordReadable(u);
                return a + (r.timestamp + " ") + r.prefix + " " + r.level + " " + L(r.messages).join(" ") + ` \r
`;
              }, "");
              return Array.isArray(R) ? ft(R) : Object.keys(R).reduce(($, a) => ($ += `[SERVICE "${a}" LOGS]: `) + ft(R[a]), "");
            }
            static getLogsUrl(R) {
              return "data:text/plain;charset=utf-8," + encodeURIComponent(R);
            }
            static browserDownload(R, ft) {
              try {
                if (document && document.createElement) {
                  const $ = document.createElement("a");
                  $.setAttribute("href", R), $.setAttribute("download", ft), $.style.display = "none", document.body.appendChild($), $.click(), document.body.removeChild($);
                } else
                  console.warn("Browser is not supported to download logs");
              } catch {
              }
            }
            addLogger(R) {
              this.loggers.set(R.prefix, R), R.removeEventListener("add", this.onLoggerAddRecord), R.addEventListener("add", this.onLoggerAddRecord);
            }
            getAllLogsJsonUrl() {
              return ut.getLogsUrl(ut.getLogsReadableJson(this.logsCollection));
            }
            getAllPrefixedLogsJsonUrl() {
              return ut.getLogsUrl(ut.getLogsReadableJson(this.getAllPrefixedLogsCollections()));
            }
            getPrefixedLogsJsonUrl(R) {
              return ut.getLogsUrl(ut.getLogsReadableJson(this.getPrefixedLogsCollection(R)));
            }
            getAllLogsTextUrl() {
              return ut.getLogsUrl(ut.getLogsReadableText(this.logsCollection));
            }
            getPrefixedLogsTextUrl(R) {
              return ut.getLogsUrl(ut.getLogsReadableText(this.getPrefixedLogsCollection(R)));
            }
            browserDownloadAllLogsJson() {
              ut.browserDownload(this.getAllLogsJsonUrl(), new Date() + "_all_logs.json");
            }
            browserDownloadAllPrefixedLogsJson() {
              ut.browserDownload(this.getAllPrefixedLogsJsonUrl(), new Date() + "_all_prefixed_logs.json");
            }
            browserDownloadPrefixedLogsJson(R) {
              ut.browserDownload(this.getPrefixedLogsJsonUrl(R), `${new Date()}_${R}_logs.json`);
            }
            browserDownloadAllLogsText() {
              ut.browserDownload(this.getAllLogsTextUrl(), new Date() + "_all_logs.log");
            }
            browserDownloadPrefixedLogsText(R) {
              ut.browserDownload(this.getPrefixedLogsTextUrl(R), `${new Date()}_${R}_logs.log`);
            }
            cleanupAllLogs() {
              this.logsCollection.length = 0, this.logRecordsSerializedLength = 0, Object.keys(this.prefixedLogsCollections).forEach((R) => this.prefixedLogsCollections[R] = /* @__PURE__ */ new Set()), this.save();
            }
            cleanupPrefixedLogs(R) {
              this.getPrefixedLogsCollection(R).forEach((ft) => this.removeLogRecord(ft)), this.prefixedLogsCollections[R] = /* @__PURE__ */ new Set(), this.save();
            }
            getAllLogsCollection() {
              return [...this.logsCollection];
            }
            getAllPrefixedLogsCollections() {
              return Object.keys(this.prefixedLogsCollections).reduce((R, ft) => (R[ft] = this.getPrefixedLogsCollection(ft), R), {});
            }
            getPrefixedLogsCollection(R) {
              return Array.from(this.prefixedLogsCollections[R] || /* @__PURE__ */ new Set());
            }
          }
          w.ServicesPool = ut, w.POOL = new w.ServicesPool();
        })(v || (v = {}));
        const T = z("unified-ui-platform-sdk");
        var B, ot;
        function X(w) {
          return new B.Service(w);
        }
        function it(w, y) {
          if (w.descriptor = w.descriptor || Object.getOwnPropertyDescriptor(w.target, w.key), typeof w.descriptor.value != "function")
            return console.warn(w.key, "Decorator must be used on function"), w.descriptor;
          const ct = w.descriptor.value, ut = w.target.constructor.name;
          return w.descriptor.value = function() {
            const W = [];
            for (let R = 0; R < arguments.length; R++)
              W[R] = arguments[R];
            return y.call(this, ct, W, ut);
          }, w.descriptor;
        }
        (function(w) {
          class y {
            constructor(ut) {
              this.defaultOptions = ut || {};
            }
            static get isBrowserNotificationPromiseSupported() {
              try {
                window.Notification.requestPermission().then();
              } catch {
                return !1;
              }
              return !0;
            }
            get isBrowserNotificationSupported() {
              return "Notification" in window;
            }
            get isBrowserNotificationIconSupported() {
              return this.isBrowserNotificationSupported && "icon" in window.Notification.prototype;
            }
            get isBrowserNotificationImageSupported() {
              return this.isBrowserNotificationSupported && "image" in window.Notification.prototype;
            }
            get isBrowserNotificationBadgeSupported() {
              return this.isBrowserNotificationSupported && "badge" in window.Notification.prototype;
            }
            get isPermissionGranted() {
              return window.Notification.permission === "granted";
            }
            get isPermissionDenied() {
              return window.Notification.permission === "denied";
            }
            get isPermissionUnknown() {
              return !this.isPermissionGranted && !this.isPermissionDenied;
            }
            requestNotificationUserPermission() {
              return function(ut, W, R, ft) {
                return new (R || (R = Promise))(function($, a) {
                  function u(d) {
                    try {
                      s(ft.next(d));
                    } catch (O) {
                      a(O);
                    }
                  }
                  function r(d) {
                    try {
                      s(ft.throw(d));
                    } catch (O) {
                      a(O);
                    }
                  }
                  function s(d) {
                    var O;
                    d.done ? $(d.value) : (O = d.value, O instanceof R ? O : new R(function(x) {
                      x(O);
                    })).then(u, r);
                  }
                  s((ft = ft.apply(ut, W || [])).next());
                });
              }(this, void 0, void 0, function* () {
                this.isBrowserNotificationSupported ? y.isBrowserNotificationPromiseSupported ? yield window.Notification.requestPermission() : yield new Promise((ut) => window.Notification.requestPermission((W) => ut(W))) : T.warn("Browser notification is not supported...");
              });
            }
            fire(ut, W) {
              return new window.Notification(ut, Object.assign(Object.assign({}, this.defaultOptions), W || {}));
            }
          }
          w.Service = y;
        })(B || (B = {})), function(w) {
          class y extends Error {
            constructor(W, R) {
              super(), this.isErr = "yes", this.id = W, this.stack = new Error().stack, typeof R == "string" ? this.message = R : R instanceof Error ? (this.message = R.message, this.name = R.name) : this.message = "";
            }
          }
          w.Message = y;
          class ct extends Error {
            constructor(W, R) {
              super(), this.isErr = "yes", this.id = W, this.stack = new Error().stack, this.details = R, this.message = "{err.details}";
            }
          }
          w.Details = ct;
        }(ot || (ot = {}));
        var Q, et, st = function(w, y, ct, ut) {
          return new (ct || (ct = Promise))(function(W, R) {
            function ft(u) {
              try {
                a(ut.next(u));
              } catch (r) {
                R(r);
              }
            }
            function $(u) {
              try {
                a(ut.throw(u));
              } catch (r) {
                R(r);
              }
            }
            function a(u) {
              var r;
              u.done ? W(u.value) : (r = u.value, r instanceof ct ? r : new ct(function(s) {
                s(r);
              })).then(ft, $);
            }
            a((ut = ut.apply(w, y || [])).next());
          });
        };
        (et = Q || (Q = {})).Debounce = function(w = 250) {
          return function(y, ct, ut) {
            let W;
            return it({ target: y, key: ct, descriptor: ut }, function(R, ft) {
              clearTimeout(W), W = window.setTimeout(() => {
                clearTimeout(W), R.apply(this, ft);
              }, w);
            });
          };
        }, et.Evt = function() {
          return (w, y) => {
            const ct = { get() {
              return new K(this, y !== void 0 ? y : w.key);
            }, enumerable: !0, configurable: !0 };
            return y !== void 0 ? Object.defineProperty(w, y, ct) : { kind: "method", placement: "prototype", key: w.key, descriptor: ct };
          };
        }, et.Exec = function(w, y = !0) {
          return function(ct, ut, W) {
            return it({ target: ct, key: ut, descriptor: W }, function(R, ft) {
              return function($, a, u, r) {
                return new (u || (u = Promise))(function(s, d) {
                  function O(q) {
                    try {
                      V(r.next(q));
                    } catch (tt) {
                      d(tt);
                    }
                  }
                  function x(q) {
                    try {
                      V(r.throw(q));
                    } catch (tt) {
                      d(tt);
                    }
                  }
                  function V(q) {
                    var tt;
                    q.done ? s(q.value) : (tt = q.value, tt instanceof u ? tt : new u(function(wt) {
                      wt(tt);
                    })).then(O, x);
                  }
                  V((r = r.apply($, a || [])).next());
                });
              }(this, void 0, void 0, function* () {
                const $ = "_" + ut + "_exec_flag";
                if (y && this[$])
                  return void console.log("PREVENTING DOUBLE EXECUTION");
                const a = (r) => {
                  if (this[$] = r, typeof w == "function")
                    w.call(this, { isExec: r, ctx: this });
                  else {
                    const s = w;
                    r ? s.before && s.before.call(this, this) : s.after && s.after.call(this, this);
                  }
                };
                a(!0);
                const u = R.apply(this, ft);
                return u instanceof Promise ? u.then(() => a(!1)).catch(() => a(!1)) : (console.warn("Must be async function to use [@Executing] decorator"), a(!1)), u;
              });
            });
          };
        }, et.Handle = function(w) {
          return function(y, ct, ut) {
            return it({ target: y, key: ct, descriptor: ut }, function(W, R, ft) {
              return st(this, void 0, void 0, function* () {
                const $ = this, a = (u) => st(this, void 0, void 0, function* () {
                  u.id && typeof u.id == "string" && u.isErr === "yes" || (typeof u == "string" || u instanceof Error ? u = new ot.Message("system", u) : (console.warn("Err must be 'string' or 'new Error()' instance"), u = new ot.Message("system", "")));
                  const r = u;
                  r.ctx = $;
                  const s = `Error] ${ft}.${ct} [${r.id}]: ${r.message}`;
                  if (typeof w == "function") {
                    const d = w;
                    console.log("[Handled" + s);
                    const O = d.call($, r);
                    O instanceof Promise && (yield O);
                  } else {
                    const d = w;
                    if (d[r.id]) {
                      console.log("[Handled" + s);
                      const O = d[r.id].call($, r);
                      O instanceof Promise && (yield O);
                    } else if (d.handle) {
                      console.log("[Handled" + s);
                      const O = d.handle.call($, r);
                      O instanceof Promise && (yield O);
                    } else
                      console.warn("[Unhandled " + s);
                    if (d.fallback) {
                      const O = d.fallback.call($, r);
                      O instanceof Promise && (yield O);
                    }
                  }
                });
                try {
                  const u = W.apply($, R);
                  return u instanceof Promise ? new Promise((r) => {
                    u.then(r).catch((s) => st(this, void 0, void 0, function* () {
                      yield a(s), r(void 0);
                    }));
                  }) : u;
                } catch (u) {
                  return void (yield a(u));
                }
              });
            });
          };
        }, et.Once = function() {
          return function(w, y, ct) {
            return it({ target: w, key: y, descriptor: ct }, function(ut, W) {
              const R = "_" + y + "_once_flag";
              if (!this[R])
                return this[R] = !0, ut.call(this, W);
            });
          };
        }, et.Throttle = function(w = 1e3 / 60) {
          return function(y, ct, ut) {
            let W, R = Date.now();
            return it({ target: y, key: ct, descriptor: ut }, function(ft, $) {
              const a = (...u) => {
                const r = Date.now();
                window.clearTimeout(W), !R || r - R >= w ? (R = r, ft.apply(this, u)) : W = window.setTimeout(() => a(...u), w - (r - R));
              };
              a(...$);
            });
          };
        };
        class K {
          constructor(y, ct) {
            this.target = y, this.eventName = ct;
          }
          emit(y, ct = { bubbles: !0, composed: !0, cancelable: !1 }) {
            this.target.dispatchEvent(new CustomEvent(this.eventName, Object.assign({ detail: y }, ct)));
          }
        }
        var M = m(3), kt = m.n(M), Ct = m(4);
        function Nt(w) {
          const y = kt.a.create();
          return y.accessToken = w, y.interceptors.request.use((ct) => {
            if (!ct.headers.Authorization && y.accessToken && (ct.headers.Authorization = "Bearer " + y.accessToken), !ct.headers.TrackingID) {
              const ut = Object(Ct.v1)();
              ct.headers.TrackingID = `uuip_${ut}_1.0:1.0`;
            }
            return ct.headers["Content-Type"] || (ct.headers["Content-Type"] = "application/json"), ct;
          }), y;
        }
        var Ht, j, H = m(5), N = m.n(H), l = m(6), k = m.n(l), I = m(7), at = m.n(I);
        (j = Ht || (Ht = {})).createService = (w) => {
          const y = N.a.createInstance();
          {
            const ct = w && w.backend ? w.backend : new k.a();
            y.use(ct);
          }
          {
            const ct = w && w.languageDetector ? w.languageDetector : new at.a();
            y.use(ct);
          }
          return w && w.logger && y.use({ log: "log" in w.logger ? w.logger.log : w.logger.info, warn: w.logger.warn, error: w.logger.error, type: "logger" }), y;
        }, j.mergeServiceInitOptions = (...w) => Object.assign.call(null, {}, ...w), j.createMixin = (w) => {
          const y = "i18n" in w ? w.i18n : j.createService(), ct = "i18nInitOptions" in w ? w.i18nInitOptions : null;
          ct || T.info("i18n mixin instance waiting service initialization outside...");
          let ut = !1;
          return (W) => class extends W {
            constructor() {
              super(...arguments), this.onI18NInitialized = (R) => this.requestUpdate(), this.onI18NLanguageChanged = (R) => this.requestUpdate();
            }
            connectedCallback() {
              super.connectedCallback && super.connectedCallback(), y.on("initialized", this.onI18NInitialized), y.on("languageChanged", this.onI18NLanguageChanged), y.isInitialized || ut || !ct || (ut = !0, y.init(ct).finally(() => ut = !1));
            }
            disconnectedCallback() {
              y.off("initialized", this.onI18NInitialized), y.off("languageChanged", this.onI18NLanguageChanged), super.disconnectedCallback && super.disconnectedCallback();
            }
            t(...R) {
              return y.t(...R);
            }
          };
        };
        var vt, gt, Mt = m(2), F = m.n(Mt);
        function Z(w = {}) {
          const y = new vt.Service();
          return y.updateConfig(w), y;
        }
        (function(w) {
          let y, ct;
          (function($) {
            let a, u, r;
            (function(s) {
              s.Info = "info", s.Warn = "warn", s.Error = "error", s.Success = "success", s.Chat = "chat", s.Default = "default";
            })(a = $.Type || ($.Type = {})), $.TYPES = Object.values(a), function(s) {
              s.Silent = "silent", s.AutoDismiss = "autodismiss", s.Acknowledge = "acknowledge";
            }(u = $.Mode || ($.Mode = {})), $.MODES = Object.values(u), function(s) {
              s.Added = "added", s.Pended = "pended", s.Activated = "activated", s.Deactivated = "deactivated", s.Removed = "removed";
            }(r = $.Status || ($.Status = {})), $.StatusWeight = { [r.Added]: 0, [r.Pended]: 1, [r.Activated]: 2, [r.Deactivated]: 3, [r.Removed]: 4 }, $.STATUSES = Object.values(r), function(s) {
              s.User = "user_add";
            }($.AddEventReason || ($.AddEventReason = {})), function(s) {
              s.ServiceAutoPropagate = "service_auto_propagate_pending", s.ServiceAutoDismiss = "service_autodismiss_pending", s.UserSilent = "user_silent_pending";
            }($.PendingEventReason || ($.PendingEventReason = {})), function(s) {
              s.ServiceAutoPropagate = "service_auto_propagate_activate";
            }($.ActivateEventReason || ($.ActivateEventReason = {})), function(s) {
              s.UserNegative = "user_negative_deactivate", s.UserPositive = "user_positive_deactivate", s.UserNeutral = "user_neutral_deactivate";
            }($.DeactivateEventReason || ($.DeactivateEventReason = {})), function(s) {
              s.User = "user_remove";
            }($.RemoveEventReason || ($.RemoveEventReason = {}));
          })(y = w.ItemMeta || (w.ItemMeta = {})), function($) {
            $.STATUS_EVENTS = ["add", "pending", "activate", "deactivate", "remove"], $.STATUS_EVENT_MAP = { add: y.Status.Added, pending: y.Status.Pended, activate: y.Status.Activated, deactivate: y.Status.Deactivated, remove: y.Status.Removed }, $.DISABLED_ITEM_MODE = { [y.Mode.Silent]: !1, [y.Mode.AutoDismiss]: !1, [y.Mode.Acknowledge]: !1 }, $.ACTIVATED_ITEM_MODE_LIMIT = { [y.Mode.Silent]: 0, [y.Mode.AutoDismiss]: 10, [y.Mode.Acknowledge]: 1 }, $.AUTO_DISMISS_TIMEOUT = 5e3;
          }(ct = w.ServiceMeta || (w.ServiceMeta = {}));
          class ut {
            constructor() {
              this.hubEmitter = _()();
            }
            emit(a, ...u) {
              this.hubEmitter.emit(a, ...u);
            }
            addEventListener(a, u) {
              this.hubEmitter.on(a, u);
            }
            addOnceEventListener(a, u) {
              this.hubEmitter.once(a, u);
            }
            removeEventListener(a, u) {
              this.hubEmitter.off(a, u);
            }
            removeAllEventListeners() {
              F()(this.hubEmitter);
            }
          }
          w.Item = class {
            constructor($, a) {
              this._serviceHubSubscriptions = [], this._itemEmitter = _()();
              const { type: u, mode: r, title: s, data: d, timestamp: O } = $.data;
              this.type = u, this.title = s, this.data = d, this._mode = r, this.timestamp = O || new Date().toISOString(), this.datetime = A.DateTime.fromISO(this.timestamp).toLocaleString(A.DateTime.DATETIME_SHORT_WITH_SECONDS), this.options = Object.freeze(this.validateAuxOptions($.options || {})), a && (this._serviceHubAdapter = a, this._status = y.Status.Added, this._reason = y.AddEventReason.User, this.bindItemHubListeners());
            }
            get status() {
              return this._status;
            }
            get reason() {
              return this._reason;
            }
            get mode() {
              return this._mode;
            }
            validateAuxOptions($) {
              let a = {};
              return $ && $.AUTO_DISMISS_TIMEOUT !== void 0 && this.mode === y.Mode.AutoDismiss && (a = Object.assign(Object.assign({}, a), { AUTO_DISMISS_TIMEOUT: $.AUTO_DISMISS_TIMEOUT })), a;
            }
            bindItemHubListeners() {
              if (this._serviceHubAdapter) {
                {
                  const $ = (u, r, s) => {
                    this.timestamp in u && (this._status = r, this._reason = s, r === y.Status.Removed && (this.unbindItemHubListeners(), this.removeAllEventListeners()), this.emit("statusUpdate", r, s));
                  };
                  this._serviceHubAdapter.addEventListener("statusServiceUpdateResponse", $);
                  const a = () => {
                    var u;
                    (u = this._serviceHubAdapter) === null || u === void 0 || u.removeEventListener("statusServiceUpdateResponse", $);
                  };
                  this._serviceHubSubscriptions.push(a);
                }
                {
                  const $ = (u, r) => {
                    this.timestamp in u && (this._mode = r, this.emit("modeUpdate", r));
                  };
                  this._serviceHubAdapter.addEventListener("modeStatusUpdateResponse", $);
                  const a = () => {
                    var u;
                    (u = this._serviceHubAdapter) === null || u === void 0 || u.removeEventListener("modeStatusUpdateResponse", $);
                  };
                  this._serviceHubSubscriptions.push(a);
                }
              }
            }
            unbindItemHubListeners() {
              this._serviceHubSubscriptions && (this._serviceHubSubscriptions.forEach(($) => $()), this._serviceHubSubscriptions.length = 0);
            }
            deactivate($) {
              this._status && y.StatusWeight[this._status] < y.StatusWeight[y.Status.Deactivated] ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, y.Status.Deactivated, $) : T.warn("Service hub adapter is not initialized for this notification item instance: ", this) : T.warn(`Notification should have "${y.Status.Pended}" or "${y.Status.Activated}" status to be able change status to "${y.Status.Deactivated}".Current notification status is "${this._status}". Ignoring this change`);
            }
            pending() {
              this._status === y.Status.Activated || this.mode !== y.Mode.Silent ? this._serviceHubAdapter ? this._serviceHubAdapter.emit("statusServiceUpdateRequest", this, y.Status.Pended, y.PendingEventReason.UserSilent) : T.warn("Service hub adapter is not initialized for this notification item instance: ", this) : T.warn(`Notification should have "${y.Status.Activated}" status or not "${y.Mode.Silent}" mode, to be able change status to "${y.Status.Pended}" and mode to "${y.Mode.Silent}".Current notification status is "${this._status}" and mode is "${this.mode}". Ignoring this change`);
            }
            emit($, ...a) {
              this._itemEmitter.emit($, ...a);
            }
            addEventListener($, a) {
              this._itemEmitter.on($, a);
            }
            addOnceEventListener($, a) {
              this._itemEmitter.once($, a);
            }
            removeEventListener($, a) {
              this._itemEmitter.off($, a);
            }
            removeAllEventListeners() {
              F()(this._itemEmitter);
            }
          };
          const W = ($, a, u = () => 0) => [...$, ...a].sort(u), R = ($, a) => $.reduce((u, r) => (a.indexOf(r) === -1 && u.push(r), u), []);
          class ft {
            constructor() {
              this.emitter = _()(), this.map = {}, this.status = ft.createStatus(), this.serviceConfig = { DISABLED_ITEM_MODE: Object.assign({}, ct.DISABLED_ITEM_MODE), ACTIVATED_ITEM_MODE_LIMIT: Object.assign({}, ct.ACTIVATED_ITEM_MODE_LIMIT), AUTO_DISMISS_TIMEOUT: ct.AUTO_DISMISS_TIMEOUT }, this.activeAutoDismissTimeoutRefs = {}, this.serviceHubAdapter = new ut(), this.bindServiceHubEvents();
            }
            static mergeConfig(a, ...u) {
              if (!u.length)
                return a;
              const r = u.shift(), s = (d) => d && typeof d == "object" && !Array.isArray(d);
              if (s(a) && s(r))
                for (const d in r)
                  s(r[d]) ? (a[d] || Object.assign(a, { [d]: {} }), this.mergeConfig(a[d], r[d])) : Object.assign(a, { [d]: r[d] });
              return this.mergeConfig(a, ...u);
            }
            static createStatus() {
              return { [y.Status.Added]: this.createStatusHolderCollection(), [y.Status.Pended]: this.createStatusHolderCollection(), [y.Status.Activated]: this.createStatusHolderCollection(), [y.Status.Deactivated]: this.createStatusHolderCollection(), [y.Status.Removed]: this.createStatusHolderCollection() };
            }
            static createStatusHolderCollection() {
              return Object.assign([], Object.assign(Object.assign({ ids: [] }, this.createStatusHolderSubCollections(y.MODES)), this.createStatusHolderSubCollections(y.TYPES)));
            }
            static createStatusHolderSubCollections(a) {
              return Object.assign({}, a.reduce((u, r) => (u[r] = [], u), {}));
            }
            updateNotificationsCollections() {
              const a = ft.createStatus();
              this.status.added.ids.forEach((u) => {
                const r = this.map[u];
                y.STATUSES.forEach((s) => {
                  this.status[s].ids.indexOf(r.timestamp) !== -1 && (a[s].push(r), a[s].ids.push(u), a[s][r.mode].push(r), a[s][r.type].push(r));
                });
              }), this.status = a;
            }
            setAutoDismiss(a, u = () => {
            }) {
              this.prepareUpdateNotifications(a).forEach((r) => {
                var s;
                if (r.mode === y.Mode.AutoDismiss) {
                  const d = () => u(r);
                  this.activeAutoDismissTimeoutRefs[r.timestamp] = window.setTimeout(d, (s = r.options.AUTO_DISMISS_TIMEOUT) !== null && s !== void 0 ? s : this.serviceConfig.AUTO_DISMISS_TIMEOUT);
                }
              });
            }
            removeAutoDismiss(a, u = () => {
            }) {
              this.prepareUpdateNotifications(a).forEach((r) => {
                r.timestamp in this.activeAutoDismissTimeoutRefs && (u(r), window.clearTimeout(this.activeAutoDismissTimeoutRefs[r.timestamp]), delete this.activeAutoDismissTimeoutRefs[r.timestamp]);
              });
            }
            update(a, u, r) {
              const s = Array.isArray(r) ? r : [r];
              if (s.length) {
                const d = s.map((O) => O.timestamp);
                switch (a) {
                  case "add":
                    s.forEach((O) => this.map[O.timestamp] = O), this.status.added.ids = W(this.status.added.ids, d, ft.sortTimestampsFn);
                    break;
                  case "pending":
                    this.status.pended.ids = W(this.status.pended.ids, d, ft.sortTimestampsFn), this.status.activated.ids = R(this.status.activated.ids, d), this.status.deactivated.ids = R(this.status.deactivated.ids, d);
                    break;
                  case "activate":
                    this.status.pended.ids = R(this.status.pended.ids, d), this.status.activated.ids = W(this.status.activated.ids, d, ft.sortTimestampsFn), this.status.deactivated.ids = R(this.status.deactivated.ids, d);
                    break;
                  case "deactivate":
                    this.status.pended.ids = R(this.status.pended.ids, d), this.status.activated.ids = R(this.status.activated.ids, d), this.status.deactivated.ids = W(this.status.deactivated.ids, d, ft.sortTimestampsFn);
                    break;
                  case "remove":
                    this.status.pended.ids = R(this.status.pended.ids, d), this.status.activated.ids = R(this.status.activated.ids, d), this.status.deactivated.ids = R(this.status.deactivated.ids, d), this.status.added.ids = R(this.status.added.ids, d), this.status.removed.ids = W(this.status.removed.ids, d, ft.sortTimestampsFn), d.forEach((O) => delete this.map[O]);
                }
                this.updateNotificationsCollections(), this.emit(a, s, u), this.propagate(a, u, s);
              }
            }
            propagate(a, u, r) {
              const s = Array.isArray(r) ? r : [r];
              if (s.length)
                switch (a) {
                  case "add":
                    this.update("pending", y.PendingEventReason.ServiceAutoPropagate, s);
                    break;
                  case "pending":
                    s.forEach((d) => {
                      this.removeAutoDismiss(d);
                    }), this.update("activate", y.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                    break;
                  case "activate":
                    s.forEach((d) => {
                      this.setAutoDismiss(d, (O) => {
                        O.mode === y.Mode.AutoDismiss && this.serviceHubAdapter.emit("statusServiceUpdateRequest", O, y.Status.Pended, y.PendingEventReason.ServiceAutoDismiss);
                      });
                    });
                    break;
                  case "deactivate":
                    s.forEach((d) => {
                      this.removeAutoDismiss(d);
                    }), this.update("activate", y.ActivateEventReason.ServiceAutoPropagate, this.prepareActiveCandidatesNotifications(this.status.pended));
                    break;
                  case "remove":
                    this.update("deactivate", y.DeactivateEventReason.UserNegative, s);
                }
            }
            prepareAddNotifications(a) {
              const u = Object.keys(this.serviceConfig.DISABLED_ITEM_MODE).reduce((r, s) => (this.serviceConfig.DISABLED_ITEM_MODE[s] || r.push(s), r), []).map((r) => `"${r}"`).join(", ");
              return (Array.isArray(a) ? a : [a]).filter((r) => !this.serviceConfig.DISABLED_ITEM_MODE[r.data.mode] || (T.error(`Trying to .add(...) notification mode "${r.data.mode}" that is disabled in this notifications service instance by configuration.Current configuration is: "${JSON.stringify(this.config)}"Only ${u} allowed. Ignoring .add(${JSON.stringify(r)}) notification...`), !1)).map((r) => new w.Item(r, this.serviceHubAdapter));
            }
            prepareUpdateNotifications(a) {
              return (Array.isArray(a) ? a : [a]).reduce((u, r) => (r.timestamp in this.map ? u.push(r) : T.error("Trying to handle untracked notification. Call .add(...) first...", JSON.stringify(r)), u), []);
            }
            prepareActiveCandidatesNotifications(a) {
              const u = (Array.isArray(a) ? a : [a]).reduce((r, s) => (this.status.activated[s.mode].length + r[s.mode].length < this.serviceConfig.ACTIVATED_ITEM_MODE_LIMIT[s.mode] && r[s.mode].push(s), r), ft.createStatusHolderSubCollections(y.MODES));
              return Object.values(u).reduce((r, s) => r.concat(s), []);
            }
            static sortByTimestampsFn(a, u) {
              return ft.sortTimestampsFn(a.timestamp, u.timestamp);
            }
            get added() {
              return this.status.added;
            }
            get pended() {
              return this.status.pended;
            }
            get activated() {
              return this.status.activated;
            }
            get deactivated() {
              return this.status.deactivated;
            }
            getNotificationStatus(a) {
              return Object.keys(this.status).filter((u) => u !== y.Status.Added).find((u) => this.status[u].ids.indexOf(a.timestamp) !== -1);
            }
            get config() {
              return Object.freeze(this.serviceConfig);
            }
            static validateUpdateConfig(a) {
              const u = a;
              if (u.ACTIVATED_ITEM_MODE_LIMIT && u.ACTIVATED_ITEM_MODE_LIMIT.acknowledge > ct.ACTIVATED_ITEM_MODE_LIMIT.acknowledge)
                throw new Error(`
          Max ${y.Mode.Acknowledge} limit is ${ct.ACTIVATED_ITEM_MODE_LIMIT.acknowledge}
        `);
              if (u.DISABLED_ITEM_MODE) {
                if (!Object.keys(u.DISABLED_ITEM_MODE).reduce((r, s) => (u.DISABLED_ITEM_MODE[s] && r++, r), 0))
                  throw new Error("At least one notifications mode should be allowed in service instance");
                Object.keys(u.ACTIVATED_ITEM_MODE_LIMIT).forEach((r) => {
                  r in u.DISABLED_ITEM_MODE && u.DISABLED_ITEM_MODE[r] && T.warn(`Changing configuration limit count for mode "${r}" won't have any effect, because this mode is disabled in notifications service instance`);
                }), "AUTO_DISMISS_TIMEOUT" in u && u.DISABLED_ITEM_MODE[y.Mode.AutoDismiss] && T.warn(`Changing "AUTO_DISMISS_TIMEOUT" configuration option won't have any effect,because "${y.Mode.AutoDismiss}" mode is disabled in notifications service instance`);
              }
              return !0;
            }
            updateConfig(a) {
              ft.validateUpdateConfig(a) && (this.serviceConfig = ft.mergeConfig({}, this.serviceConfig, a), T.info("Updated notifications service configuration: ", this.config));
            }
            add(a) {
              const u = this.prepareAddNotifications(a);
              return this.update("add", y.AddEventReason.User, u), u;
            }
            pending(a) {
              const u = this.prepareUpdateNotifications(a);
              return this.serviceHubAdapter.emit("statusServiceUpdateRequest", u, y.Status.Pended, y.PendingEventReason.UserSilent), u;
            }
            deactivate(a, u) {
              const r = this.prepareUpdateNotifications(a);
              return this.serviceHubAdapter.emit("statusServiceUpdateRequest", r, y.Status.Deactivated, u), r;
            }
            remove(a) {
              const u = this.prepareUpdateNotifications(a);
              return this.serviceHubAdapter.emit("statusServiceUpdateRequest", u, y.Status.Removed, y.RemoveEventReason.User), u;
            }
            pendingAllActivated() {
              return this.pending(this.status.activated);
            }
            pendingAll() {
              return this.pending([...this.status.pended, ...this.status.activated]);
            }
            deactivateAllActivated(a) {
              return this.deactivate(this.status.activated, a);
            }
            deactivateAll(a) {
              return this.deactivate([...this.status.pended, ...this.status.activated], a);
            }
            removeAllDeactivated() {
              return this.remove(this.status.deactivated);
            }
            removeAll() {
              return this.remove(this.status.added);
            }
            addEventListener(a, u) {
              this.emitter.on(a, u);
            }
            removeEventListener(a, u) {
              this.emitter.off(a, u);
            }
            addOnceEventListener(a, u) {
              this.emitter.once(a, u);
            }
            removeAllEventListeners() {
              F()(this.emitter);
            }
            emit(a, ...u) {
              this.emitter.emit(a, ...u);
            }
            bindServiceHubEvents() {
              this.serviceHubAdapter.addEventListener("statusServiceUpdateRequest", (a, u, r) => {
                const s = Array.isArray(a) ? a : [a], d = s.reduce((O, x) => (O[x.timestamp] = this.getNotificationStatus(x), O), {});
                {
                  const O = s.filter((x) => (d[x.timestamp] === y.Status.Activated || x.mode !== y.Mode.Silent) && u === y.Status.Pended);
                  {
                    const x = O.filter((V) => V.mode !== y.Mode.Silent);
                    x.length && this.serviceHubAdapter.emit("modeStatusUpdateResponse", x.reduce((V, q) => (V[q.timestamp] = q, V), {}), y.Mode.Silent);
                  }
                  O.length && this.update("pending", r, O);
                }
                {
                  const O = s.filter((x) => {
                    const V = d[x.timestamp];
                    return (V === y.Status.Pended || V === y.Status.Activated) && u === y.Status.Deactivated;
                  });
                  O.length && this.update("deactivate", r, O);
                }
                s.filter((O) => {
                  const x = d[O.timestamp];
                  return (x === y.Status.Pended || x === y.Status.Activated || x === y.Status.Deactivated) && u === y.Status.Removed;
                }).length && this.update("remove", r, a);
              }), ct.STATUS_EVENTS.forEach((a) => {
                this.addEventListener(a, (u, r) => {
                  const s = ct.STATUS_EVENT_MAP[a], d = u.reduce((O, x) => (O[x.timestamp] = x, O), {});
                  this.serviceHubAdapter.emit("statusServiceUpdateResponse", d, s, r);
                });
              });
            }
          }
          ft.sortTimestampsFn = ($, a) => $ > a ? 1 : $ < a ? -1 : 0, w.Service = ft;
        })(vt || (vt = {})), function(w) {
          class y {
            constructor() {
              this.listeners = [], this.listenersOnce = [], this.listen = (W) => (this.listeners.push(W), { stopListen: () => this.stopListen(W) }), this.listenOnce = (W) => (this.listenersOnce.push(W), { stopListenOnce: () => this.stopListenOnce(W) }), this.stopListen = (W) => {
                const R = this.listeners.indexOf(W, 0);
                return R > -1 && (this.listeners.splice(R, 1), !0);
              }, this.stopListenOnce = (W) => {
                const R = this.listenersOnce.indexOf(W, 0);
                return R > -1 && (this.listenersOnce.splice(R, 1), !0);
              }, this.stopListenAll = () => {
                this.listeners = [], this.listenersOnce = [];
              }, this.send = (W) => {
                this.listeners.forEach((R) => R(W)), this.listenersOnce.forEach((R) => R(W)), this.listenersOnce = [];
              };
            }
          }
          class ct {
            constructor() {
              this.listeners = [], this.listenersOnce = [], this.listen = (W) => (this.listeners.push(W), { stopListen: () => this.stopListen(W) }), this.listenOnce = (W) => (this.listenersOnce.push(W), { stopListenOnce: () => this.stopListenOnce(W) }), this.stopListen = (W) => {
                const R = this.listeners.indexOf(W, 0);
                return R > -1 && (this.listeners.splice(R, 1), !0);
              }, this.stopListenOnce = (W) => {
                const R = this.listenersOnce.indexOf(W, 0);
                return R > -1 && (this.listenersOnce.splice(R, 1), !0);
              }, this.stopListenAll = () => {
                this.listeners = [], this.listenersOnce = [];
              }, this.send = () => {
                this.listeners.forEach((W) => W()), this.listenersOnce.forEach((W) => W()), this.listenersOnce = [];
              };
            }
          }
          w.create = new class {
            withData() {
              const ut = new y();
              return { signal: ut, send: ut.send, stopListenAll: ut.stopListenAll };
            }
            empty() {
              const ut = new ct();
              return { signal: ut, send: ut.send, stopListenAll: ut.stopListenAll };
            }
          }();
        }(gt || (gt = {}));
      }]);
    }, function(P, G, b) {
      var g = b(10), h = Object.prototype.toString;
      function m(v) {
        return h.call(v) === "[object Array]";
      }
      function E(v) {
        return v === void 0;
      }
      function _(v) {
        return v !== null && typeof v == "object";
      }
      function A(v) {
        return h.call(v) === "[object Function]";
      }
      function L(v, z) {
        if (v != null)
          if (typeof v != "object" && (v = [v]), m(v))
            for (var T = 0, B = v.length; T < B; T++)
              z.call(null, v[T], T, v);
          else
            for (var ot in v)
              Object.prototype.hasOwnProperty.call(v, ot) && z.call(null, v[ot], ot, v);
      }
      P.exports = { isArray: m, isArrayBuffer: function(v) {
        return h.call(v) === "[object ArrayBuffer]";
      }, isBuffer: function(v) {
        return v !== null && !E(v) && v.constructor !== null && !E(v.constructor) && typeof v.constructor.isBuffer == "function" && v.constructor.isBuffer(v);
      }, isFormData: function(v) {
        return typeof FormData < "u" && v instanceof FormData;
      }, isArrayBufferView: function(v) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(v) : v && v.buffer && v.buffer instanceof ArrayBuffer;
      }, isString: function(v) {
        return typeof v == "string";
      }, isNumber: function(v) {
        return typeof v == "number";
      }, isObject: _, isUndefined: E, isDate: function(v) {
        return h.call(v) === "[object Date]";
      }, isFile: function(v) {
        return h.call(v) === "[object File]";
      }, isBlob: function(v) {
        return h.call(v) === "[object Blob]";
      }, isFunction: A, isStream: function(v) {
        return _(v) && A(v.pipe);
      }, isURLSearchParams: function(v) {
        return typeof URLSearchParams < "u" && v instanceof URLSearchParams;
      }, isStandardBrowserEnv: function() {
        return (typeof navigator > "u" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window < "u" && typeof document < "u";
      }, forEach: L, merge: function v() {
        var z = {};
        function T(X, it) {
          typeof z[it] == "object" && typeof X == "object" ? z[it] = v(z[it], X) : z[it] = X;
        }
        for (var B = 0, ot = arguments.length; B < ot; B++)
          L(arguments[B], T);
        return z;
      }, deepMerge: function v() {
        var z = {};
        function T(X, it) {
          typeof z[it] == "object" && typeof X == "object" ? z[it] = v(z[it], X) : z[it] = typeof X == "object" ? v({}, X) : X;
        }
        for (var B = 0, ot = arguments.length; B < ot; B++)
          L(arguments[B], T);
        return z;
      }, extend: function(v, z, T) {
        return L(z, function(B, ot) {
          v[ot] = T && typeof B == "function" ? g(B, T) : B;
        }), v;
      }, trim: function(v) {
        return v.replace(/^\s*/, "").replace(/\s*$/, "");
      } };
    }, function(P, G, b) {
      function g(h, m) {
        if (!(h instanceof m))
          throw new TypeError("Cannot call a class as a function");
      }
      b.d(G, "a", function() {
        return g;
      });
    }, function(P, G, b) {
      function g(m, E) {
        for (var _ = 0; _ < E.length; _++) {
          var A = E[_];
          A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(m, A.key, A);
        }
      }
      function h(m, E, _) {
        return E && g(m.prototype, E), _ && g(m, _), m;
      }
      b.d(G, "a", function() {
        return h;
      });
    }, function(P, G, b) {
      function g(v) {
        return (g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(z) {
          return typeof z;
        } : function(z) {
          return z && typeof Symbol == "function" && z.constructor === Symbol && z !== Symbol.prototype ? "symbol" : typeof z;
        })(v);
      }
      b.d(G, "a", function() {
        return _;
      }), b.d(G, "b", function() {
        return A;
      }), b.d(G, "c", function() {
        return L;
      });
      var h = [], m = h.forEach, E = h.slice;
      function _(v) {
        return m.call(E.call(arguments, 1), function(z) {
          if (z)
            for (var T in z)
              v[T] === void 0 && (v[T] = z[T]);
        }), v;
      }
      function A() {
        return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : g(XMLHttpRequest)) === "object";
      }
      function L(v) {
        return function(z) {
          return !!z && typeof z.then == "function";
        }(v) ? v : Promise.resolve(v);
      }
    }, function(P, G, b) {
      var g, h, m, E, _, A, L, v = b(21), z = b(38), T = Function.prototype.apply, B = Function.prototype.call, ot = Object.create, X = Object.defineProperty, it = Object.defineProperties, Q = Object.prototype.hasOwnProperty, et = { configurable: !0, enumerable: !1, writable: !0 };
      h = function(st, K) {
        var M, kt;
        return z(K), kt = this, g.call(this, st, M = function() {
          m.call(kt, st, M), T.call(K, this, arguments);
        }), M.__eeOnceListener__ = K, this;
      }, _ = { on: g = function(st, K) {
        var M;
        return z(K), Q.call(this, "__ee__") ? M = this.__ee__ : (M = et.value = ot(null), X(this, "__ee__", et), et.value = null), M[st] ? typeof M[st] == "object" ? M[st].push(K) : M[st] = [M[st], K] : M[st] = K, this;
      }, once: h, off: m = function(st, K) {
        var M, kt, Ct, Nt;
        if (z(K), !Q.call(this, "__ee__"))
          return this;
        if (!(M = this.__ee__)[st])
          return this;
        if (typeof (kt = M[st]) == "object")
          for (Nt = 0; Ct = kt[Nt]; ++Nt)
            Ct !== K && Ct.__eeOnceListener__ !== K || (kt.length === 2 ? M[st] = kt[Nt ? 0 : 1] : kt.splice(Nt, 1));
        else
          kt !== K && kt.__eeOnceListener__ !== K || delete M[st];
        return this;
      }, emit: E = function(st) {
        var K, M, kt, Ct, Nt;
        if (Q.call(this, "__ee__") && (Ct = this.__ee__[st]))
          if (typeof Ct == "object") {
            for (M = arguments.length, Nt = new Array(M - 1), K = 1; K < M; ++K)
              Nt[K - 1] = arguments[K];
            for (Ct = Ct.slice(), K = 0; kt = Ct[K]; ++K)
              T.call(kt, this, Nt);
          } else
            switch (arguments.length) {
              case 1:
                B.call(Ct, this);
                break;
              case 2:
                B.call(Ct, this, arguments[1]);
                break;
              case 3:
                B.call(Ct, this, arguments[1], arguments[2]);
                break;
              default:
                for (M = arguments.length, Nt = new Array(M - 1), K = 1; K < M; ++K)
                  Nt[K - 1] = arguments[K];
                T.call(Ct, this, Nt);
            }
      } }, A = { on: v(g), once: v(h), off: v(m), emit: v(E) }, L = it({}, A), P.exports = G = function(st) {
        return st == null ? ot(L) : it(Object(st), A);
      }, G.methods = _;
    }, function(P, G, b) {
      var g = b(32)();
      P.exports = function(h) {
        return h !== g && h !== null;
      };
    }, function(P, G, b) {
      (function(g) {
        var h;
        if (typeof fetch == "function" && (g !== void 0 && g.fetch ? h = g.fetch : typeof window < "u" && window.fetch && (h = window.fetch)), typeof window > "u" || window.document === void 0) {
          var m = h || b(61);
          m.default && (m = m.default), G.default = m, P.exports = G.default;
        }
      }).call(this, b(18));
    }, function(P, G, b) {
      var g = b(40), h = Object.prototype.hasOwnProperty;
      P.exports = function(m) {
        var E, _ = arguments[1];
        if (g(m), _ === void 0)
          h.call(m, "__ee__") && delete m.__ee__;
        else {
          if (!(E = h.call(m, "__ee__") && m.__ee__))
            return;
          E[_] && delete E[_];
        }
      };
    }, function(P, G, b) {
      P.exports = function(g) {
        return g != null;
      };
    }, function(P, G, b) {
      P.exports = function(g, h) {
        return function() {
          for (var m = new Array(arguments.length), E = 0; E < m.length; E++)
            m[E] = arguments[E];
          return g.apply(h, m);
        };
      };
    }, function(P, G, b) {
      var g = b(1);
      function h(m) {
        return encodeURIComponent(m).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      }
      P.exports = function(m, E, _) {
        if (!E)
          return m;
        var A;
        if (_)
          A = _(E);
        else if (g.isURLSearchParams(E))
          A = E.toString();
        else {
          var L = [];
          g.forEach(E, function(z, T) {
            z != null && (g.isArray(z) ? T += "[]" : z = [z], g.forEach(z, function(B) {
              g.isDate(B) ? B = B.toISOString() : g.isObject(B) && (B = JSON.stringify(B)), L.push(h(T) + "=" + h(B));
            }));
          }), A = L.join("&");
        }
        if (A) {
          var v = m.indexOf("#");
          v !== -1 && (m = m.slice(0, v)), m += (m.indexOf("?") === -1 ? "?" : "&") + A;
        }
        return m;
      };
    }, function(P, G, b) {
      P.exports = function(g) {
        return !(!g || !g.__CANCEL__);
      };
    }, function(P, G, b) {
      (function(g) {
        var h = b(1), m = b(49), E = { "Content-Type": "application/x-www-form-urlencoded" };
        function _(v, z) {
          !h.isUndefined(v) && h.isUndefined(v["Content-Type"]) && (v["Content-Type"] = z);
        }
        var A, L = { adapter: ((typeof XMLHttpRequest < "u" || g !== void 0 && Object.prototype.toString.call(g) === "[object process]") && (A = b(14)), A), transformRequest: [function(v, z) {
          return m(z, "Accept"), m(z, "Content-Type"), h.isFormData(v) || h.isArrayBuffer(v) || h.isBuffer(v) || h.isStream(v) || h.isFile(v) || h.isBlob(v) ? v : h.isArrayBufferView(v) ? v.buffer : h.isURLSearchParams(v) ? (_(z, "application/x-www-form-urlencoded;charset=utf-8"), v.toString()) : h.isObject(v) ? (_(z, "application/json;charset=utf-8"), JSON.stringify(v)) : v;
        }], transformResponse: [function(v) {
          if (typeof v == "string")
            try {
              v = JSON.parse(v);
            } catch {
            }
          return v;
        }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function(v) {
          return v >= 200 && v < 300;
        } };
        L.headers = { common: { Accept: "application/json, text/plain, */*" } }, h.forEach(["delete", "get", "head"], function(v) {
          L.headers[v] = {};
        }), h.forEach(["post", "put", "patch"], function(v) {
          L.headers[v] = h.merge(E);
        }), P.exports = L;
      }).call(this, b(48));
    }, function(P, G, b) {
      var g = b(1), h = b(50), m = b(11), E = b(52), _ = b(55), A = b(56), L = b(15);
      P.exports = function(v) {
        return new Promise(function(z, T) {
          var B = v.data, ot = v.headers;
          g.isFormData(B) && delete ot["Content-Type"];
          var X = new XMLHttpRequest();
          if (v.auth) {
            var it = v.auth.username || "", Q = v.auth.password || "";
            ot.Authorization = "Basic " + btoa(it + ":" + Q);
          }
          var et = E(v.baseURL, v.url);
          if (X.open(v.method.toUpperCase(), m(et, v.params, v.paramsSerializer), !0), X.timeout = v.timeout, X.onreadystatechange = function() {
            if (X && X.readyState === 4 && (X.status !== 0 || X.responseURL && X.responseURL.indexOf("file:") === 0)) {
              var M = "getAllResponseHeaders" in X ? _(X.getAllResponseHeaders()) : null, kt = { data: v.responseType && v.responseType !== "text" ? X.response : X.responseText, status: X.status, statusText: X.statusText, headers: M, config: v, request: X };
              h(z, T, kt), X = null;
            }
          }, X.onabort = function() {
            X && (T(L("Request aborted", v, "ECONNABORTED", X)), X = null);
          }, X.onerror = function() {
            T(L("Network Error", v, null, X)), X = null;
          }, X.ontimeout = function() {
            var M = "timeout of " + v.timeout + "ms exceeded";
            v.timeoutErrorMessage && (M = v.timeoutErrorMessage), T(L(M, v, "ECONNABORTED", X)), X = null;
          }, g.isStandardBrowserEnv()) {
            var st = b(57), K = (v.withCredentials || A(et)) && v.xsrfCookieName ? st.read(v.xsrfCookieName) : void 0;
            K && (ot[v.xsrfHeaderName] = K);
          }
          if ("setRequestHeader" in X && g.forEach(ot, function(M, kt) {
            B === void 0 && kt.toLowerCase() === "content-type" ? delete ot[kt] : X.setRequestHeader(kt, M);
          }), g.isUndefined(v.withCredentials) || (X.withCredentials = !!v.withCredentials), v.responseType)
            try {
              X.responseType = v.responseType;
            } catch (M) {
              if (v.responseType !== "json")
                throw M;
            }
          typeof v.onDownloadProgress == "function" && X.addEventListener("progress", v.onDownloadProgress), typeof v.onUploadProgress == "function" && X.upload && X.upload.addEventListener("progress", v.onUploadProgress), v.cancelToken && v.cancelToken.promise.then(function(M) {
            X && (X.abort(), T(M), X = null);
          }), B === void 0 && (B = null), X.send(B);
        });
      };
    }, function(P, G, b) {
      var g = b(51);
      P.exports = function(h, m, E, _, A) {
        var L = new Error(h);
        return g(L, m, E, _, A);
      };
    }, function(P, G, b) {
      var g = b(1);
      P.exports = function(h, m) {
        m = m || {};
        var E = {}, _ = ["url", "method", "params", "data"], A = ["headers", "auth", "proxy"], L = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        g.forEach(_, function(T) {
          m[T] !== void 0 && (E[T] = m[T]);
        }), g.forEach(A, function(T) {
          g.isObject(m[T]) ? E[T] = g.deepMerge(h[T], m[T]) : m[T] !== void 0 ? E[T] = m[T] : g.isObject(h[T]) ? E[T] = g.deepMerge(h[T]) : h[T] !== void 0 && (E[T] = h[T]);
        }), g.forEach(L, function(T) {
          m[T] !== void 0 ? E[T] = m[T] : h[T] !== void 0 && (E[T] = h[T]);
        });
        var v = _.concat(A).concat(L), z = Object.keys(m).filter(function(T) {
          return v.indexOf(T) === -1;
        });
        return g.forEach(z, function(T) {
          m[T] !== void 0 ? E[T] = m[T] : h[T] !== void 0 && (E[T] = h[T]);
        }), E;
      };
    }, function(P, G, b) {
      function g(h) {
        this.message = h;
      }
      g.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }, g.prototype.__CANCEL__ = !0, P.exports = g;
    }, function(P, G) {
      var b;
      b = function() {
        return this;
      }();
      try {
        b = b || new Function("return this")();
      } catch {
        typeof window == "object" && (b = window);
      }
      P.exports = b;
    }, function(P, G) {
      function b(g) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? (P.exports = b = function(h) {
          return typeof h;
        }, P.exports.default = P.exports, P.exports.__esModule = !0) : (P.exports = b = function(h) {
          return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
        }, P.exports.default = P.exports, P.exports.__esModule = !0), b(g);
      }
      P.exports = b, P.exports.default = P.exports, P.exports.__esModule = !0;
    }, function(P, G, b) {
      (function(g) {
        var h, m, E, _ = b(4), A = b(7), L = b.n(A);
        function v(T) {
          return (v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
            return typeof B;
          } : function(B) {
            return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
          })(T);
        }
        typeof fetch == "function" && (g !== void 0 && g.fetch ? h = g.fetch : typeof window < "u" && window.fetch && (h = window.fetch)), _.b && (g !== void 0 && g.XMLHttpRequest ? m = g.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (m = window.XMLHttpRequest)), typeof ActiveXObject == "function" && (g !== void 0 && g.ActiveXObject ? E = g.ActiveXObject : typeof window < "u" && window.ActiveXObject && (E = window.ActiveXObject)), h || !A || m || E || (h = L.a || A), typeof h != "function" && (h = void 0);
        var z = function(T, B) {
          if (B && v(B) === "object") {
            var ot = "";
            for (var X in B)
              ot += "&" + encodeURIComponent(X) + "=" + encodeURIComponent(B[X]);
            if (!ot)
              return T;
            T = T + (T.indexOf("?") !== -1 ? "&" : "?") + ot.slice(1);
          }
          return T;
        };
        G.a = function(T, B, ot, X) {
          return typeof ot == "function" && (X = ot, ot = void 0), X = X || function() {
          }, h ? function(it, Q, et, st) {
            it.queryStringParams && (Q = z(Q, it.queryStringParams));
            var K = Object(_.a)({}, typeof it.customHeaders == "function" ? it.customHeaders() : it.customHeaders);
            et && (K["Content-Type"] = "application/json"), h(Q, Object(_.a)({ method: et ? "POST" : "GET", body: et ? it.stringify(et) : void 0, headers: K }, typeof it.requestOptions == "function" ? it.requestOptions(et) : it.requestOptions)).then(function(M) {
              if (!M.ok)
                return st(M.statusText || "Error", { status: M.status });
              M.text().then(function(kt) {
                st(null, { status: M.status, data: kt });
              }).catch(st);
            }).catch(st);
          }(T, B, ot, X) : _.b || typeof ActiveXObject == "function" ? function(it, Q, et, st) {
            et && v(et) === "object" && (et = z("", et).slice(1)), it.queryStringParams && (Q = z(Q, it.queryStringParams));
            try {
              var K;
              (K = m ? new m() : new E("MSXML2.XMLHTTP.3.0")).open(et ? "POST" : "GET", Q, 1), it.crossDomain || K.setRequestHeader("X-Requested-With", "XMLHttpRequest"), K.withCredentials = !!it.withCredentials, et && K.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), K.overrideMimeType && K.overrideMimeType("application/json");
              var M = it.customHeaders;
              if (M = typeof M == "function" ? M() : M)
                for (var kt in M)
                  K.setRequestHeader(kt, M[kt]);
              K.onreadystatechange = function() {
                K.readyState > 3 && st(K.status >= 400 ? K.statusText : null, { status: K.status, data: K.responseText });
              }, K.send(et);
            } catch (Ct) {
              console && console.log(Ct);
            }
          }(T, B, ot, X) : void 0;
        };
      }).call(this, b(18));
    }, function(P, G, b) {
      var g = b(9), h = b(22), m = b(26), E = b(34), _ = b(35);
      (P.exports = function(A, L) {
        var v, z, T, B, ot;
        return arguments.length < 2 || typeof A != "string" ? (B = L, L = A, A = null) : B = arguments[2], g(A) ? (v = _.call(A, "c"), z = _.call(A, "e"), T = _.call(A, "w")) : (v = T = !0, z = !1), ot = { value: L, configurable: v, enumerable: z, writable: T }, B ? m(E(B), ot) : ot;
      }).gs = function(A, L, v) {
        var z, T, B, ot;
        return typeof A != "string" ? (B = v, v = L, L = A, A = null) : B = arguments[3], g(L) ? h(L) ? g(v) ? h(v) || (B = v, v = void 0) : v = void 0 : (B = L, L = v = void 0) : L = void 0, g(A) ? (z = _.call(A, "c"), T = _.call(A, "e")) : (z = !0, T = !1), ot = { get: L, set: v, configurable: z, enumerable: T }, B ? m(E(B), ot) : ot;
      };
    }, function(P, G, b) {
      var g = b(23), h = /^\s*class[\s{/}]/, m = Function.prototype.toString;
      P.exports = function(E) {
        return !!g(E) && !h.test(m.call(E));
      };
    }, function(P, G, b) {
      var g = b(24);
      P.exports = function(h) {
        if (typeof h != "function" || !hasOwnProperty.call(h, "length"))
          return !1;
        try {
          if (typeof h.length != "number" || typeof h.call != "function" || typeof h.apply != "function")
            return !1;
        } catch {
          return !1;
        }
        return !g(h);
      };
    }, function(P, G, b) {
      var g = b(25);
      P.exports = function(h) {
        if (!g(h))
          return !1;
        try {
          return !!h.constructor && h.constructor.prototype === h;
        } catch {
          return !1;
        }
      };
    }, function(P, G, b) {
      var g = b(9), h = { object: !0, function: !0, undefined: !0 };
      P.exports = function(m) {
        return !!g(m) && hasOwnProperty.call(h, typeof m);
      };
    }, function(P, G, b) {
      P.exports = b(27)() ? Object.assign : b(28);
    }, function(P, G, b) {
      P.exports = function() {
        var g, h = Object.assign;
        return typeof h == "function" && (h(g = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), g.foo + g.bar + g.trzy === "razdwatrzy");
      };
    }, function(P, G, b) {
      var g = b(29), h = b(33), m = Math.max;
      P.exports = function(E, _) {
        var A, L, v, z = m(arguments.length, 2);
        for (E = Object(h(E)), v = function(T) {
          try {
            E[T] = _[T];
          } catch (B) {
            A || (A = B);
          }
        }, L = 1; L < z; ++L)
          g(_ = arguments[L]).forEach(v);
        if (A !== void 0)
          throw A;
        return E;
      };
    }, function(P, G, b) {
      P.exports = b(30)() ? Object.keys : b(31);
    }, function(P, G, b) {
      P.exports = function() {
        try {
          return Object.keys("primitive"), !0;
        } catch {
          return !1;
        }
      };
    }, function(P, G, b) {
      var g = b(6), h = Object.keys;
      P.exports = function(m) {
        return h(g(m) ? Object(m) : m);
      };
    }, function(P, G, b) {
      P.exports = function() {
      };
    }, function(P, G, b) {
      var g = b(6);
      P.exports = function(h) {
        if (!g(h))
          throw new TypeError("Cannot use null or undefined");
        return h;
      };
    }, function(P, G, b) {
      var g = b(6), h = Array.prototype.forEach, m = Object.create, E = function(_, A) {
        var L;
        for (L in _)
          A[L] = _[L];
      };
      P.exports = function(_) {
        var A = m(null);
        return h.call(arguments, function(L) {
          g(L) && E(Object(L), A);
        }), A;
      };
    }, function(P, G, b) {
      P.exports = b(36)() ? String.prototype.contains : b(37);
    }, function(P, G, b) {
      var g = "razdwatrzy";
      P.exports = function() {
        return typeof g.contains == "function" && g.contains("dwa") === !0 && g.contains("foo") === !1;
      };
    }, function(P, G, b) {
      var g = String.prototype.indexOf;
      P.exports = function(h) {
        return g.call(this, h, arguments[1]) > -1;
      };
    }, function(P, G, b) {
      P.exports = function(g) {
        if (typeof g != "function")
          throw new TypeError(g + " is not a function");
        return g;
      };
    }, function(P, G, b) {
      function g(e, i) {
        for (var t = 0; t < i.length; t++) {
          var n = i[t];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }
      function h(e, i, t) {
        return i && g(e.prototype, i), t && g(e, t), e;
      }
      function m(e, i) {
        e.prototype = Object.create(i.prototype), e.prototype.constructor = e, e.__proto__ = i;
      }
      function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
          return i.__proto__ || Object.getPrototypeOf(i);
        })(e);
      }
      function _(e, i) {
        return (_ = Object.setPrototypeOf || function(t, n) {
          return t.__proto__ = n, t;
        })(e, i);
      }
      function A() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function L(e, i, t) {
        return (L = A() ? Reflect.construct : function(n, o, f) {
          var S = [null];
          S.push.apply(S, o);
          var C = new (Function.bind.apply(n, S))();
          return f && _(C, f.prototype), C;
        }).apply(null, arguments);
      }
      function v(e) {
        var i = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return (v = function(t) {
          if (t === null || (n = t, Function.toString.call(n).indexOf("[native code]") === -1))
            return t;
          var n;
          if (typeof t != "function")
            throw new TypeError("Super expression must either be null or a function");
          if (i !== void 0) {
            if (i.has(t))
              return i.get(t);
            i.set(t, o);
          }
          function o() {
            return L(t, arguments, E(this).constructor);
          }
          return o.prototype = Object.create(t.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), _(o, t);
        })(e);
      }
      function z(e, i) {
        (i == null || i > e.length) && (i = e.length);
        for (var t = 0, n = new Array(i); t < i; t++)
          n[t] = e[t];
        return n;
      }
      function T(e) {
        var i = 0;
        if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
          if (Array.isArray(e) || (e = function(t, n) {
            if (t) {
              if (typeof t == "string")
                return z(t, n);
              var o = Object.prototype.toString.call(t).slice(8, -1);
              return o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set" ? Array.from(o) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? z(t, n) : void 0;
            }
          }(e)))
            return function() {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            };
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        return (i = e[Symbol.iterator]()).next.bind(i);
      }
      Object.defineProperty(G, "__esModule", { value: !0 });
      var B = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        return m(i, e), i;
      }(v(Error)), ot = function(e) {
        function i(t) {
          return e.call(this, "Invalid DateTime: " + t.toMessage()) || this;
        }
        return m(i, e), i;
      }(B), X = function(e) {
        function i(t) {
          return e.call(this, "Invalid Interval: " + t.toMessage()) || this;
        }
        return m(i, e), i;
      }(B), it = function(e) {
        function i(t) {
          return e.call(this, "Invalid Duration: " + t.toMessage()) || this;
        }
        return m(i, e), i;
      }(B), Q = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        return m(i, e), i;
      }(B), et = function(e) {
        function i(t) {
          return e.call(this, "Invalid unit " + t) || this;
        }
        return m(i, e), i;
      }(B), st = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        return m(i, e), i;
      }(B), K = function(e) {
        function i() {
          return e.call(this, "Zone is an abstract class") || this;
        }
        return m(i, e), i;
      }(B), M = "numeric", kt = "short", Ct = "long", Nt = { year: M, month: M, day: M }, Ht = { year: M, month: kt, day: M }, j = { year: M, month: kt, day: M, weekday: kt }, H = { year: M, month: Ct, day: M }, N = { year: M, month: Ct, day: M, weekday: Ct }, l = { hour: M, minute: M }, k = { hour: M, minute: M, second: M }, I = { hour: M, minute: M, second: M, timeZoneName: kt }, at = { hour: M, minute: M, second: M, timeZoneName: Ct }, vt = { hour: M, minute: M, hour12: !1 }, gt = { hour: M, minute: M, second: M, hour12: !1 }, Mt = { hour: M, minute: M, second: M, hour12: !1, timeZoneName: kt }, F = { hour: M, minute: M, second: M, hour12: !1, timeZoneName: Ct }, Z = { year: M, month: M, day: M, hour: M, minute: M }, w = { year: M, month: M, day: M, hour: M, minute: M, second: M }, y = { year: M, month: kt, day: M, hour: M, minute: M }, ct = { year: M, month: kt, day: M, hour: M, minute: M, second: M }, ut = { year: M, month: kt, day: M, weekday: kt, hour: M, minute: M }, W = { year: M, month: Ct, day: M, hour: M, minute: M, timeZoneName: kt }, R = { year: M, month: Ct, day: M, hour: M, minute: M, second: M, timeZoneName: kt }, ft = { year: M, month: Ct, day: M, weekday: Ct, hour: M, minute: M, timeZoneName: Ct }, $ = { year: M, month: Ct, day: M, weekday: Ct, hour: M, minute: M, second: M, timeZoneName: Ct };
      function a(e) {
        return e === void 0;
      }
      function u(e) {
        return typeof e == "number";
      }
      function r(e) {
        return typeof e == "number" && e % 1 == 0;
      }
      function s() {
        try {
          return typeof Intl < "u" && Intl.DateTimeFormat;
        } catch {
          return !1;
        }
      }
      function d() {
        return !a(Intl.DateTimeFormat.prototype.formatToParts);
      }
      function O() {
        try {
          return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
        } catch {
          return !1;
        }
      }
      function x(e, i, t) {
        if (e.length !== 0)
          return e.reduce(function(n, o) {
            var f = [i(o), o];
            return n && t(n[0], f[0]) === n[0] ? n : f;
          }, null)[1];
      }
      function V(e, i) {
        return i.reduce(function(t, n) {
          return t[n] = e[n], t;
        }, {});
      }
      function q(e, i) {
        return Object.prototype.hasOwnProperty.call(e, i);
      }
      function tt(e, i, t) {
        return r(e) && e >= i && e <= t;
      }
      function wt(e, i) {
        i === void 0 && (i = 2);
        var t = e < 0 ? "-" : "", n = t ? -1 * e : e;
        return "" + t + (n.toString().length < i ? ("0".repeat(i) + n).slice(-i) : n.toString());
      }
      function pt(e) {
        return a(e) || e === null || e === "" ? void 0 : parseInt(e, 10);
      }
      function Lt(e) {
        if (!a(e) && e !== null && e !== "") {
          var i = 1e3 * parseFloat("0." + e);
          return Math.floor(i);
        }
      }
      function Ot(e, i, t) {
        t === void 0 && (t = !1);
        var n = Math.pow(10, i);
        return (t ? Math.trunc : Math.round)(e * n) / n;
      }
      function dt(e) {
        return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
      }
      function U(e) {
        return dt(e) ? 366 : 365;
      }
      function c(e, i) {
        var t = function(n, o) {
          return n - o * Math.floor(n / o);
        }(i - 1, 12) + 1;
        return t === 2 ? dt(e + (i - t) / 12) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
      }
      function p(e) {
        var i = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
        return e.year < 100 && e.year >= 0 && (i = new Date(i)).setUTCFullYear(i.getUTCFullYear() - 1900), +i;
      }
      function nt(e) {
        var i = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, t = e - 1, n = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
        return i === 4 || n === 3 ? 53 : 52;
      }
      function ht(e) {
        return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
      }
      function lt(e, i, t, n) {
        n === void 0 && (n = null);
        var o = new Date(e), f = { hour12: !1, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
        n && (f.timeZone = n);
        var S = Object.assign({ timeZoneName: i }, f), C = s();
        if (C && d()) {
          var D = new Intl.DateTimeFormat(t, S).formatToParts(o).find(function(J) {
            return J.type.toLowerCase() === "timezonename";
          });
          return D ? D.value : null;
        }
        if (C) {
          var Y = new Intl.DateTimeFormat(t, f).format(o);
          return new Intl.DateTimeFormat(t, S).format(o).substring(Y.length).replace(/^[, \u200e]+/, "");
        }
        return null;
      }
      function Tt(e, i) {
        var t = parseInt(e, 10);
        Number.isNaN(t) && (t = 0);
        var n = parseInt(i, 10) || 0;
        return 60 * t + (t < 0 || Object.is(t, -0) ? -n : n);
      }
      function Rt(e) {
        var i = Number(e);
        if (typeof e == "boolean" || e === "" || Number.isNaN(i))
          throw new st("Invalid unit value " + e);
        return i;
      }
      function It(e, i, t) {
        var n = {};
        for (var o in e)
          if (q(e, o)) {
            if (t.indexOf(o) >= 0)
              continue;
            var f = e[o];
            if (f == null)
              continue;
            n[i(o)] = Rt(f);
          }
        return n;
      }
      function mt(e, i) {
        var t = Math.trunc(Math.abs(e / 60)), n = Math.trunc(Math.abs(e % 60)), o = e >= 0 ? "+" : "-";
        switch (i) {
          case "short":
            return "" + o + wt(t, 2) + ":" + wt(n, 2);
          case "narrow":
            return "" + o + t + (n > 0 ? ":" + n : "");
          case "techie":
            return "" + o + wt(t, 2) + wt(n, 2);
          default:
            throw new RangeError("Value format " + i + " is out of range for property format");
        }
      }
      function Et(e) {
        return V(e, ["hour", "minute", "second", "millisecond"]);
      }
      var Pt = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
      function Dt(e) {
        return JSON.stringify(e, Object.keys(e).sort());
      }
      var Qt = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Yt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Ce = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function me(e) {
        switch (e) {
          case "narrow":
            return [].concat(Ce);
          case "short":
            return [].concat(Yt);
          case "long":
            return [].concat(Qt);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var xe = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], ce = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], ne = ["M", "T", "W", "T", "F", "S", "S"];
      function ve(e) {
        switch (e) {
          case "narrow":
            return [].concat(ne);
          case "short":
            return [].concat(ce);
          case "long":
            return [].concat(xe);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var le = ["AM", "PM"], pe = ["Before Christ", "Anno Domini"], ye = ["BC", "AD"], Te = ["B", "A"];
      function re(e) {
        switch (e) {
          case "narrow":
            return [].concat(Te);
          case "short":
            return [].concat(ye);
          case "long":
            return [].concat(pe);
          default:
            return null;
        }
      }
      function ie(e, i) {
        for (var t, n = "", o = T(e); !(t = o()).done; ) {
          var f = t.value;
          f.literal ? n += f.val : n += i(f.val);
        }
        return n;
      }
      var Le = { D: Nt, DD: Ht, DDD: H, DDDD: N, t: l, tt: k, ttt: I, tttt: at, T: vt, TT: gt, TTT: Mt, TTTT: F, f: Z, ff: y, fff: W, ffff: ft, F: w, FF: ct, FFF: R, FFFF: $ }, Kt = function() {
        function e(t, n) {
          this.opts = n, this.loc = t, this.systemLoc = null;
        }
        e.create = function(t, n) {
          return n === void 0 && (n = {}), new e(t, n);
        }, e.parseFormat = function(t) {
          for (var n = null, o = "", f = !1, S = [], C = 0; C < t.length; C++) {
            var D = t.charAt(C);
            D === "'" ? (o.length > 0 && S.push({ literal: f, val: o }), n = null, o = "", f = !f) : f || D === n ? o += D : (o.length > 0 && S.push({ literal: !1, val: o }), o = D, n = D);
          }
          return o.length > 0 && S.push({ literal: f, val: o }), S;
        }, e.macroTokenToFormatOpts = function(t) {
          return Le[t];
        };
        var i = e.prototype;
        return i.formatWithSystemDefault = function(t, n) {
          return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(t, Object.assign({}, this.opts, n)).format();
        }, i.formatDateTime = function(t, n) {
          return n === void 0 && (n = {}), this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).format();
        }, i.formatDateTimeParts = function(t, n) {
          return n === void 0 && (n = {}), this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).formatToParts();
        }, i.resolvedOptions = function(t, n) {
          return n === void 0 && (n = {}), this.loc.dtFormatter(t, Object.assign({}, this.opts, n)).resolvedOptions();
        }, i.num = function(t, n) {
          if (n === void 0 && (n = 0), this.opts.forceSimple)
            return wt(t, n);
          var o = Object.assign({}, this.opts);
          return n > 0 && (o.padTo = n), this.loc.numberFormatter(o).format(t);
        }, i.formatDateTimeFromString = function(t, n) {
          var o = this, f = this.loc.listingMode() === "en", S = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && d(), C = function(bt, xt) {
            return o.loc.extract(t, bt, xt);
          }, D = function(bt) {
            return t.isOffsetFixed && t.offset === 0 && bt.allowZ ? "Z" : t.isValid ? t.zone.formatOffset(t.ts, bt.format) : "";
          }, Y = function() {
            return f ? function(bt) {
              return le[bt.hour < 12 ? 0 : 1];
            }(t) : C({ hour: "numeric", hour12: !0 }, "dayperiod");
          }, J = function(bt, xt) {
            return f ? function(_t, St) {
              return me(St)[_t.month - 1];
            }(t, bt) : C(xt ? { month: bt } : { month: bt, day: "numeric" }, "month");
          }, rt = function(bt, xt) {
            return f ? function(_t, St) {
              return ve(St)[_t.weekday - 1];
            }(t, bt) : C(xt ? { weekday: bt } : { weekday: bt, month: "long", day: "numeric" }, "weekday");
          }, yt = function(bt) {
            return f ? function(xt, _t) {
              return re(_t)[xt.year < 0 ? 0 : 1];
            }(t, bt) : C({ era: bt }, "era");
          };
          return ie(e.parseFormat(n), function(bt) {
            switch (bt) {
              case "S":
                return o.num(t.millisecond);
              case "u":
              case "SSS":
                return o.num(t.millisecond, 3);
              case "s":
                return o.num(t.second);
              case "ss":
                return o.num(t.second, 2);
              case "m":
                return o.num(t.minute);
              case "mm":
                return o.num(t.minute, 2);
              case "h":
                return o.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
              case "hh":
                return o.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
              case "H":
                return o.num(t.hour);
              case "HH":
                return o.num(t.hour, 2);
              case "Z":
                return D({ format: "narrow", allowZ: o.opts.allowZ });
              case "ZZ":
                return D({ format: "short", allowZ: o.opts.allowZ });
              case "ZZZ":
                return D({ format: "techie", allowZ: o.opts.allowZ });
              case "ZZZZ":
                return t.zone.offsetName(t.ts, { format: "short", locale: o.loc.locale });
              case "ZZZZZ":
                return t.zone.offsetName(t.ts, { format: "long", locale: o.loc.locale });
              case "z":
                return t.zoneName;
              case "a":
                return Y();
              case "d":
                return S ? C({ day: "numeric" }, "day") : o.num(t.day);
              case "dd":
                return S ? C({ day: "2-digit" }, "day") : o.num(t.day, 2);
              case "c":
                return o.num(t.weekday);
              case "ccc":
                return rt("short", !0);
              case "cccc":
                return rt("long", !0);
              case "ccccc":
                return rt("narrow", !0);
              case "E":
                return o.num(t.weekday);
              case "EEE":
                return rt("short", !1);
              case "EEEE":
                return rt("long", !1);
              case "EEEEE":
                return rt("narrow", !1);
              case "L":
                return S ? C({ month: "numeric", day: "numeric" }, "month") : o.num(t.month);
              case "LL":
                return S ? C({ month: "2-digit", day: "numeric" }, "month") : o.num(t.month, 2);
              case "LLL":
                return J("short", !0);
              case "LLLL":
                return J("long", !0);
              case "LLLLL":
                return J("narrow", !0);
              case "M":
                return S ? C({ month: "numeric" }, "month") : o.num(t.month);
              case "MM":
                return S ? C({ month: "2-digit" }, "month") : o.num(t.month, 2);
              case "MMM":
                return J("short", !1);
              case "MMMM":
                return J("long", !1);
              case "MMMMM":
                return J("narrow", !1);
              case "y":
                return S ? C({ year: "numeric" }, "year") : o.num(t.year);
              case "yy":
                return S ? C({ year: "2-digit" }, "year") : o.num(t.year.toString().slice(-2), 2);
              case "yyyy":
                return S ? C({ year: "numeric" }, "year") : o.num(t.year, 4);
              case "yyyyyy":
                return S ? C({ year: "numeric" }, "year") : o.num(t.year, 6);
              case "G":
                return yt("short");
              case "GG":
                return yt("long");
              case "GGGGG":
                return yt("narrow");
              case "kk":
                return o.num(t.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return o.num(t.weekYear, 4);
              case "W":
                return o.num(t.weekNumber);
              case "WW":
                return o.num(t.weekNumber, 2);
              case "o":
                return o.num(t.ordinal);
              case "ooo":
                return o.num(t.ordinal, 3);
              case "q":
                return o.num(t.quarter);
              case "qq":
                return o.num(t.quarter, 2);
              case "X":
                return o.num(Math.floor(t.ts / 1e3));
              case "x":
                return o.num(t.ts);
              default:
                return function(xt) {
                  var _t = e.macroTokenToFormatOpts(xt);
                  return _t ? o.formatWithSystemDefault(t, _t) : xt;
                }(bt);
            }
          });
        }, i.formatDurationFromString = function(t, n) {
          var o, f = this, S = function(J) {
            switch (J[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, C = e.parseFormat(n), D = C.reduce(function(J, rt) {
            var yt = rt.literal, bt = rt.val;
            return yt ? J : J.concat(bt);
          }, []), Y = t.shiftTo.apply(t, D.map(S).filter(function(J) {
            return J;
          }));
          return ie(C, (o = Y, function(J) {
            var rt = S(J);
            return rt ? f.num(o.get(rt), J.length) : J;
          }));
        }, e;
      }(), oe = function() {
        function e(i, t) {
          this.reason = i, this.explanation = t;
        }
        return e.prototype.toMessage = function() {
          return this.explanation ? this.reason + ": " + this.explanation : this.reason;
        }, e;
      }(), Ie = function() {
        function e() {
        }
        var i = e.prototype;
        return i.offsetName = function(t, n) {
          throw new K();
        }, i.formatOffset = function(t, n) {
          throw new K();
        }, i.offset = function(t) {
          throw new K();
        }, i.equals = function(t) {
          throw new K();
        }, h(e, [{ key: "type", get: function() {
          throw new K();
        } }, { key: "name", get: function() {
          throw new K();
        } }, { key: "universal", get: function() {
          throw new K();
        } }, { key: "isValid", get: function() {
          throw new K();
        } }]), e;
      }(), Ke = null, gn = function(e) {
        function i() {
          return e.apply(this, arguments) || this;
        }
        m(i, e);
        var t = i.prototype;
        return t.offsetName = function(n, o) {
          return lt(n, o.format, o.locale);
        }, t.formatOffset = function(n, o) {
          return mt(this.offset(n), o);
        }, t.offset = function(n) {
          return -new Date(n).getTimezoneOffset();
        }, t.equals = function(n) {
          return n.type === "local";
        }, h(i, [{ key: "type", get: function() {
          return "local";
        } }, { key: "name", get: function() {
          return s() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
        } }, { key: "universal", get: function() {
          return !1;
        } }, { key: "isValid", get: function() {
          return !0;
        } }], [{ key: "instance", get: function() {
          return Ke === null && (Ke = new i()), Ke;
        } }]), i;
      }(Ie), ir = RegExp("^" + Pt.source + "$"), Je = {}, or = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, Ge = {}, de = function(e) {
        function i(n) {
          var o;
          return (o = e.call(this) || this).zoneName = n, o.valid = i.isValidZone(n), o;
        }
        m(i, e), i.create = function(n) {
          return Ge[n] || (Ge[n] = new i(n)), Ge[n];
        }, i.resetCache = function() {
          Ge = {}, Je = {};
        }, i.isValidSpecifier = function(n) {
          return !(!n || !n.match(ir));
        }, i.isValidZone = function(n) {
          try {
            return new Intl.DateTimeFormat("en-US", { timeZone: n }).format(), !0;
          } catch {
            return !1;
          }
        }, i.parseGMTOffset = function(n) {
          if (n) {
            var o = n.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
            if (o)
              return -60 * parseInt(o[1]);
          }
          return null;
        };
        var t = i.prototype;
        return t.offsetName = function(n, o) {
          return lt(n, o.format, o.locale, this.name);
        }, t.formatOffset = function(n, o) {
          return mt(this.offset(n), o);
        }, t.offset = function(n) {
          var o = new Date(n);
          if (isNaN(o))
            return NaN;
          var f, S = (f = this.name, Je[f] || (Je[f] = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: f, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })), Je[f]), C = S.formatToParts ? function(xt, _t) {
            for (var St = xt.formatToParts(_t), jt = [], At = 0; At < St.length; At++) {
              var Ft = St[At], Ut = Ft.type, Gt = Ft.value, $t = or[Ut];
              a($t) || (jt[$t] = parseInt(Gt, 10));
            }
            return jt;
          }(S, o) : function(xt, _t) {
            var St = xt.format(_t).replace(/\u200E/g, ""), jt = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(St), At = jt[1], Ft = jt[2];
            return [jt[3], At, Ft, jt[4], jt[5], jt[6]];
          }(S, o), D = C[0], Y = C[1], J = C[2], rt = C[3], yt = +o, bt = yt % 1e3;
          return (p({ year: D, month: Y, day: J, hour: rt === 24 ? 0 : rt, minute: C[4], second: C[5], millisecond: 0 }) - (yt -= bt >= 0 ? bt : 1e3 + bt)) / 6e4;
        }, t.equals = function(n) {
          return n.type === "iana" && n.name === this.name;
        }, h(i, [{ key: "type", get: function() {
          return "iana";
        } }, { key: "name", get: function() {
          return this.zoneName;
        } }, { key: "universal", get: function() {
          return !1;
        } }, { key: "isValid", get: function() {
          return this.valid;
        } }]), i;
      }(Ie), Xe = null, Xt = function(e) {
        function i(n) {
          var o;
          return (o = e.call(this) || this).fixed = n, o;
        }
        m(i, e), i.instance = function(n) {
          return n === 0 ? i.utcInstance : new i(n);
        }, i.parseSpecifier = function(n) {
          if (n) {
            var o = n.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (o)
              return new i(Tt(o[1], o[2]));
          }
          return null;
        }, h(i, null, [{ key: "utcInstance", get: function() {
          return Xe === null && (Xe = new i(0)), Xe;
        } }]);
        var t = i.prototype;
        return t.offsetName = function() {
          return this.name;
        }, t.formatOffset = function(n, o) {
          return mt(this.fixed, o);
        }, t.offset = function() {
          return this.fixed;
        }, t.equals = function(n) {
          return n.type === "fixed" && n.fixed === this.fixed;
        }, h(i, [{ key: "type", get: function() {
          return "fixed";
        } }, { key: "name", get: function() {
          return this.fixed === 0 ? "UTC" : "UTC" + mt(this.fixed, "narrow");
        } }, { key: "universal", get: function() {
          return !0;
        } }, { key: "isValid", get: function() {
          return !0;
        } }]), i;
      }(Ie), Qe = function(e) {
        function i(n) {
          var o;
          return (o = e.call(this) || this).zoneName = n, o;
        }
        m(i, e);
        var t = i.prototype;
        return t.offsetName = function() {
          return null;
        }, t.formatOffset = function() {
          return "";
        }, t.offset = function() {
          return NaN;
        }, t.equals = function() {
          return !1;
        }, h(i, [{ key: "type", get: function() {
          return "invalid";
        } }, { key: "name", get: function() {
          return this.zoneName;
        } }, { key: "universal", get: function() {
          return !1;
        } }, { key: "isValid", get: function() {
          return !1;
        } }]), i;
      }(Ie);
      function Se(e, i) {
        var t;
        if (a(e) || e === null)
          return i;
        if (e instanceof Ie)
          return e;
        if (typeof e == "string") {
          var n = e.toLowerCase();
          return n === "local" ? i : n === "utc" || n === "gmt" ? Xt.utcInstance : (t = de.parseGMTOffset(e)) != null ? Xt.instance(t) : de.isValidSpecifier(n) ? de.create(e) : Xt.parseSpecifier(n) || new Qe(e);
        }
        return u(e) ? Xt.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new Qe(e);
      }
      var pn = function() {
        return Date.now();
      }, mn = null, vn = null, yn = null, Sn = null, bn = !1, zt = function() {
        function e() {
        }
        return e.resetCaches = function() {
          Jt.resetCache(), de.resetCache();
        }, h(e, null, [{ key: "now", get: function() {
          return pn;
        }, set: function(i) {
          pn = i;
        } }, { key: "defaultZoneName", get: function() {
          return e.defaultZone.name;
        }, set: function(i) {
          mn = i ? Se(i) : null;
        } }, { key: "defaultZone", get: function() {
          return mn || gn.instance;
        } }, { key: "defaultLocale", get: function() {
          return vn;
        }, set: function(i) {
          vn = i;
        } }, { key: "defaultNumberingSystem", get: function() {
          return yn;
        }, set: function(i) {
          yn = i;
        } }, { key: "defaultOutputCalendar", get: function() {
          return Sn;
        }, set: function(i) {
          Sn = i;
        } }, { key: "throwOnInvalid", get: function() {
          return bn;
        }, set: function(i) {
          bn = i;
        } }]), e;
      }(), tn = {};
      function en(e, i) {
        i === void 0 && (i = {});
        var t = JSON.stringify([e, i]), n = tn[t];
        return n || (n = new Intl.DateTimeFormat(e, i), tn[t] = n), n;
      }
      var nn = {}, rn = {};
      function sr(e, i) {
        i === void 0 && (i = {});
        var t = i, n = (t.base, function(S, C) {
          if (S == null)
            return {};
          var D, Y, J = {}, rt = Object.keys(S);
          for (Y = 0; Y < rt.length; Y++)
            D = rt[Y], C.indexOf(D) >= 0 || (J[D] = S[D]);
          return J;
        }(t, ["base"])), o = JSON.stringify([e, n]), f = rn[o];
        return f || (f = new Intl.RelativeTimeFormat(e, i), rn[o] = f), f;
      }
      var Pe = null;
      function We(e, i, t, n, o) {
        var f = e.listingMode(t);
        return f === "error" ? null : f === "en" ? n(i) : o(i);
      }
      var ar = function() {
        function e(i, t, n) {
          if (this.padTo = n.padTo || 0, this.floor = n.floor || !1, !t && s()) {
            var o = { useGrouping: !1 };
            n.padTo > 0 && (o.minimumIntegerDigits = n.padTo), this.inf = function(f, S) {
              S === void 0 && (S = {});
              var C = JSON.stringify([f, S]), D = nn[C];
              return D || (D = new Intl.NumberFormat(f, S), nn[C] = D), D;
            }(i, o);
          }
        }
        return e.prototype.format = function(i) {
          if (this.inf) {
            var t = this.floor ? Math.floor(i) : i;
            return this.inf.format(t);
          }
          return wt(this.floor ? Math.floor(i) : Ot(i, 3), this.padTo);
        }, e;
      }(), ur = function() {
        function e(t, n, o) {
          var f;
          if (this.opts = o, this.hasIntl = s(), t.zone.universal && this.hasIntl) {
            var S = t.offset / 60 * -1, C = S >= 0 ? "Etc/GMT+" + S : "Etc/GMT" + S, D = de.isValidZone(C);
            t.offset !== 0 && D ? (f = C, this.dt = t) : (f = "UTC", o.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : Bt.fromMillis(t.ts + 60 * t.offset * 1e3));
          } else
            t.zone.type === "local" ? this.dt = t : (this.dt = t, f = t.zone.name);
          if (this.hasIntl) {
            var Y = Object.assign({}, this.opts);
            f && (Y.timeZone = f), this.dtf = en(n, Y);
          }
        }
        var i = e.prototype;
        return i.format = function() {
          if (this.hasIntl)
            return this.dtf.format(this.dt.toJSDate());
          var t = function(o) {
            switch (Dt(V(o, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]))) {
              case Dt(Nt):
                return "M/d/yyyy";
              case Dt(Ht):
                return "LLL d, yyyy";
              case Dt(j):
                return "EEE, LLL d, yyyy";
              case Dt(H):
                return "LLLL d, yyyy";
              case Dt(N):
                return "EEEE, LLLL d, yyyy";
              case Dt(l):
                return "h:mm a";
              case Dt(k):
                return "h:mm:ss a";
              case Dt(I):
              case Dt(at):
                return "h:mm a";
              case Dt(vt):
                return "HH:mm";
              case Dt(gt):
                return "HH:mm:ss";
              case Dt(Mt):
              case Dt(F):
                return "HH:mm";
              case Dt(Z):
                return "M/d/yyyy, h:mm a";
              case Dt(y):
                return "LLL d, yyyy, h:mm a";
              case Dt(W):
                return "LLLL d, yyyy, h:mm a";
              case Dt(ft):
                return "EEEE, LLLL d, yyyy, h:mm a";
              case Dt(w):
                return "M/d/yyyy, h:mm:ss a";
              case Dt(ct):
                return "LLL d, yyyy, h:mm:ss a";
              case Dt(ut):
                return "EEE, d LLL yyyy, h:mm a";
              case Dt(R):
                return "LLLL d, yyyy, h:mm:ss a";
              case Dt($):
                return "EEEE, LLLL d, yyyy, h:mm:ss a";
              default:
                return "EEEE, LLLL d, yyyy, h:mm a";
            }
          }(this.opts), n = Jt.create("en-US");
          return Kt.create(n).formatDateTimeFromString(this.dt, t);
        }, i.formatToParts = function() {
          return this.hasIntl && d() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
        }, i.resolvedOptions = function() {
          return this.hasIntl ? this.dtf.resolvedOptions() : { locale: "en-US", numberingSystem: "latn", outputCalendar: "gregory" };
        }, e;
      }(), cr = function() {
        function e(t, n, o) {
          this.opts = Object.assign({ style: "long" }, o), !n && O() && (this.rtf = sr(t, o));
        }
        var i = e.prototype;
        return i.format = function(t, n) {
          return this.rtf ? this.rtf.format(t, n) : function(o, f, S, C) {
            S === void 0 && (S = "always"), C === void 0 && (C = !1);
            var D = { years: ["year", "yr."], quarters: ["quarter", "qtr."], months: ["month", "mo."], weeks: ["week", "wk."], days: ["day", "day", "days"], hours: ["hour", "hr."], minutes: ["minute", "min."], seconds: ["second", "sec."] }, Y = ["hours", "minutes", "seconds"].indexOf(o) === -1;
            if (S === "auto" && Y) {
              var J = o === "days";
              switch (f) {
                case 1:
                  return J ? "tomorrow" : "next " + D[o][0];
                case -1:
                  return J ? "yesterday" : "last " + D[o][0];
                case 0:
                  return J ? "today" : "this " + D[o][0];
              }
            }
            var rt = Object.is(f, -0) || f < 0, yt = Math.abs(f), bt = yt === 1, xt = D[o], _t = C ? bt ? xt[1] : xt[2] || xt[1] : bt ? D[o][0] : o;
            return rt ? yt + " " + _t + " ago" : "in " + yt + " " + _t;
          }(n, t, this.opts.numeric, this.opts.style !== "long");
        }, i.formatToParts = function(t, n) {
          return this.rtf ? this.rtf.formatToParts(t, n) : [];
        }, e;
      }(), Jt = function() {
        function e(t, n, o, f) {
          var S = function(J) {
            var rt = J.indexOf("-u-");
            if (rt === -1)
              return [J];
            var yt, bt = J.substring(0, rt);
            try {
              yt = en(J).resolvedOptions();
            } catch {
              yt = en(bt).resolvedOptions();
            }
            var xt = yt;
            return [bt, xt.numberingSystem, xt.calendar];
          }(t), C = S[0], D = S[1], Y = S[2];
          this.locale = C, this.numberingSystem = n || D || null, this.outputCalendar = o || Y || null, this.intl = function(J, rt, yt) {
            return s() ? ((yt || rt) && (J += "-u", yt && (J += "-ca-" + yt), rt && (J += "-nu-" + rt)), J) : [];
          }(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = f, this.fastNumbersCached = null;
        }
        e.fromOpts = function(t) {
          return e.create(t.locale, t.numberingSystem, t.outputCalendar, t.defaultToEN);
        }, e.create = function(t, n, o, f) {
          f === void 0 && (f = !1);
          var S = t || zt.defaultLocale;
          return new e(S || (f ? "en-US" : function() {
            if (Pe)
              return Pe;
            if (s()) {
              var C = new Intl.DateTimeFormat().resolvedOptions().locale;
              return Pe = C && C !== "und" ? C : "en-US";
            }
            return Pe = "en-US";
          }()), n || zt.defaultNumberingSystem, o || zt.defaultOutputCalendar, S);
        }, e.resetCache = function() {
          Pe = null, tn = {}, nn = {}, rn = {};
        }, e.fromObject = function(t) {
          var n = t === void 0 ? {} : t, o = n.locale, f = n.numberingSystem, S = n.outputCalendar;
          return e.create(o, f, S);
        };
        var i = e.prototype;
        return i.listingMode = function(t) {
          t === void 0 && (t = !0);
          var n = s() && d(), o = this.isEnglish(), f = !(this.numberingSystem !== null && this.numberingSystem !== "latn" || this.outputCalendar !== null && this.outputCalendar !== "gregory");
          return n || o && f || t ? !n || o && f ? "en" : "intl" : "error";
        }, i.clone = function(t) {
          return t && Object.getOwnPropertyNames(t).length !== 0 ? e.create(t.locale || this.specifiedLocale, t.numberingSystem || this.numberingSystem, t.outputCalendar || this.outputCalendar, t.defaultToEN || !1) : this;
        }, i.redefaultToEN = function(t) {
          return t === void 0 && (t = {}), this.clone(Object.assign({}, t, { defaultToEN: !0 }));
        }, i.redefaultToSystem = function(t) {
          return t === void 0 && (t = {}), this.clone(Object.assign({}, t, { defaultToEN: !1 }));
        }, i.months = function(t, n, o) {
          var f = this;
          return n === void 0 && (n = !1), o === void 0 && (o = !0), We(this, t, o, me, function() {
            var S = n ? { month: t, day: "numeric" } : { month: t }, C = n ? "format" : "standalone";
            return f.monthsCache[C][t] || (f.monthsCache[C][t] = function(D) {
              for (var Y = [], J = 1; J <= 12; J++) {
                var rt = Bt.utc(2016, J, 1);
                Y.push(D(rt));
              }
              return Y;
            }(function(D) {
              return f.extract(D, S, "month");
            })), f.monthsCache[C][t];
          });
        }, i.weekdays = function(t, n, o) {
          var f = this;
          return n === void 0 && (n = !1), o === void 0 && (o = !0), We(this, t, o, ve, function() {
            var S = n ? { weekday: t, year: "numeric", month: "long", day: "numeric" } : { weekday: t }, C = n ? "format" : "standalone";
            return f.weekdaysCache[C][t] || (f.weekdaysCache[C][t] = function(D) {
              for (var Y = [], J = 1; J <= 7; J++) {
                var rt = Bt.utc(2016, 11, 13 + J);
                Y.push(D(rt));
              }
              return Y;
            }(function(D) {
              return f.extract(D, S, "weekday");
            })), f.weekdaysCache[C][t];
          });
        }, i.meridiems = function(t) {
          var n = this;
          return t === void 0 && (t = !0), We(this, void 0, t, function() {
            return le;
          }, function() {
            if (!n.meridiemCache) {
              var o = { hour: "numeric", hour12: !0 };
              n.meridiemCache = [Bt.utc(2016, 11, 13, 9), Bt.utc(2016, 11, 13, 19)].map(function(f) {
                return n.extract(f, o, "dayperiod");
              });
            }
            return n.meridiemCache;
          });
        }, i.eras = function(t, n) {
          var o = this;
          return n === void 0 && (n = !0), We(this, t, n, re, function() {
            var f = { era: t };
            return o.eraCache[t] || (o.eraCache[t] = [Bt.utc(-40, 1, 1), Bt.utc(2017, 1, 1)].map(function(S) {
              return o.extract(S, f, "era");
            })), o.eraCache[t];
          });
        }, i.extract = function(t, n, o) {
          var f = this.dtFormatter(t, n).formatToParts().find(function(S) {
            return S.type.toLowerCase() === o;
          });
          return f ? f.value : null;
        }, i.numberFormatter = function(t) {
          return t === void 0 && (t = {}), new ar(this.intl, t.forceSimple || this.fastNumbers, t);
        }, i.dtFormatter = function(t, n) {
          return n === void 0 && (n = {}), new ur(t, this.intl, n);
        }, i.relFormatter = function(t) {
          return t === void 0 && (t = {}), new cr(this.intl, this.isEnglish(), t);
        }, i.isEnglish = function() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || s() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        }, i.equals = function(t) {
          return this.locale === t.locale && this.numberingSystem === t.numberingSystem && this.outputCalendar === t.outputCalendar;
        }, h(e, [{ key: "fastNumbers", get: function() {
          var t;
          return this.fastNumbersCached == null && (this.fastNumbersCached = (!(t = this).numberingSystem || t.numberingSystem === "latn") && (t.numberingSystem === "latn" || !t.locale || t.locale.startsWith("en") || s() && new Intl.DateTimeFormat(t.intl).resolvedOptions().numberingSystem === "latn")), this.fastNumbersCached;
        } }]), e;
      }();
      function Ae() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
          i[t] = arguments[t];
        var n = i.reduce(function(o, f) {
          return o + f.source;
        }, "");
        return RegExp("^" + n + "$");
      }
      function be() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
          i[t] = arguments[t];
        return function(n) {
          return i.reduce(function(o, f) {
            var S = o[0], C = o[1], D = o[2], Y = f(n, D), J = Y[0], rt = Y[1], yt = Y[2];
            return [Object.assign(S, J), C || rt, yt];
          }, [{}, null, 1]).slice(0, 2);
        };
      }
      function Re(e) {
        if (e == null)
          return [null, null];
        for (var i = arguments.length, t = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
          t[n - 1] = arguments[n];
        for (var o = 0, f = t; o < f.length; o++) {
          var S = f[o], C = S[0], D = S[1], Y = C.exec(e);
          if (Y)
            return D(Y);
        }
        return [null, null];
      }
      function wn() {
        for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
          i[t] = arguments[t];
        return function(n, o) {
          var f, S = {};
          for (f = 0; f < i.length; f++)
            S[i[f]] = pt(n[o + f]);
          return [S, null, o + f];
        };
      }
      var En = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, on = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, kn = RegExp("" + on.source + En.source + "?"), sn = RegExp("(?:T" + kn.source + ")?"), lr = wn("weekYear", "weekNumber", "weekDay"), dr = wn("year", "ordinal"), On = RegExp(on.source + " ?(?:" + En.source + "|(" + Pt.source + "))?"), fr = RegExp("(?: " + On.source + ")?");
      function De(e, i, t) {
        var n = e[i];
        return a(n) ? t : pt(n);
      }
      function Cn(e, i) {
        return [{ year: De(e, i), month: De(e, i + 1, 1), day: De(e, i + 2, 1) }, null, i + 3];
      }
      function we(e, i) {
        return [{ hours: De(e, i, 0), minutes: De(e, i + 1, 0), seconds: De(e, i + 2, 0), milliseconds: Lt(e[i + 3]) }, null, i + 4];
      }
      function Ne(e, i) {
        var t = !e[i] && !e[i + 1], n = Tt(e[i + 1], e[i + 2]);
        return [{}, t ? null : Xt.instance(n), i + 3];
      }
      function xn(e, i) {
        return [{}, e[i] ? de.create(e[i]) : null, i + 1];
      }
      var hr = RegExp("^T?" + on.source + "$"), gr = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
      function pr(e) {
        var i = e[0], t = e[1], n = e[2], o = e[3], f = e[4], S = e[5], C = e[6], D = e[7], Y = e[8], J = i[0] === "-", rt = D && D[0] === "-", yt = function(bt, xt) {
          return xt === void 0 && (xt = !1), bt !== void 0 && (xt || bt && J) ? -bt : bt;
        };
        return [{ years: yt(pt(t)), months: yt(pt(n)), weeks: yt(pt(o)), days: yt(pt(f)), hours: yt(pt(S)), minutes: yt(pt(C)), seconds: yt(pt(D), D === "-0"), milliseconds: yt(Lt(Y), rt) }];
      }
      var mr = { GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };
      function an(e, i, t, n, o, f, S) {
        var C = { year: i.length === 2 ? ht(pt(i)) : pt(i), month: Yt.indexOf(t) + 1, day: pt(n), hour: pt(o), minute: pt(f) };
        return S && (C.second = pt(S)), e && (C.weekday = e.length > 3 ? xe.indexOf(e) + 1 : ce.indexOf(e) + 1), C;
      }
      var vr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function yr(e) {
        var i, t = e[1], n = e[2], o = e[3], f = e[4], S = e[5], C = e[6], D = e[7], Y = e[8], J = e[9], rt = e[10], yt = e[11], bt = an(t, f, o, n, S, C, D);
        return i = Y ? mr[Y] : J ? 0 : Tt(rt, yt), [bt, new Xt(i)];
      }
      var Sr = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, br = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, wr = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function Tn(e) {
        var i = e[1], t = e[2], n = e[3];
        return [an(i, e[4], n, t, e[5], e[6], e[7]), Xt.utcInstance];
      }
      function Er(e) {
        var i = e[1], t = e[2], n = e[3], o = e[4], f = e[5], S = e[6];
        return [an(i, e[7], t, n, o, f, S), Xt.utcInstance];
      }
      var kr = Ae(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, sn), Or = Ae(/(\d{4})-?W(\d\d)(?:-?(\d))?/, sn), Cr = Ae(/(\d{4})-?(\d{3})/, sn), xr = Ae(kn), Tr = be(Cn, we, Ne), Lr = be(lr, we, Ne), Ir = be(dr, we, Ne), Ar = be(we, Ne), Rr = be(we), Dr = Ae(/(\d{4})-(\d\d)-(\d\d)/, fr), Nr = Ae(On), Mr = be(Cn, we, Ne, xn), _r = be(we, Ne, xn), Ln = { weeks: { days: 7, hours: 168, minutes: 10080, seconds: 604800, milliseconds: 6048e5 }, days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 }, hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 }, minutes: { seconds: 60, milliseconds: 6e4 }, seconds: { milliseconds: 1e3 } }, jr = Object.assign({ years: { quarters: 4, months: 12, weeks: 52, days: 365, hours: 8760, minutes: 525600, seconds: 31536e3, milliseconds: 31536e6 }, quarters: { months: 3, weeks: 13, days: 91, hours: 2184, minutes: 131040, seconds: 7862400, milliseconds: 78624e5 }, months: { weeks: 4, days: 30, hours: 720, minutes: 43200, seconds: 2592e3, milliseconds: 2592e6 } }, Ln), Pr = Object.assign({ years: { quarters: 4, months: 12, weeks: 52.1775, days: 365.2425, hours: 8765.82, minutes: 525949.2, seconds: 525949.2 * 60, milliseconds: 525949.2 * 60 * 1e3 }, quarters: { months: 3, weeks: 13.044375, days: 91.310625, hours: 2191.455, minutes: 131487.3, seconds: 525949.2 * 60 / 4, milliseconds: 7889237999999999e-6 }, months: { weeks: 30.436875 / 7, days: 30.436875, hours: 730.485, minutes: 43829.1, seconds: 2629746, milliseconds: 2629746e3 } }, Ln), Me = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Vr = Me.slice(0).reverse();
      function Ee(e, i, t) {
        t === void 0 && (t = !1);
        var n = { values: t ? i.values : Object.assign({}, e.values, i.values || {}), loc: e.loc.clone(i.loc), conversionAccuracy: i.conversionAccuracy || e.conversionAccuracy };
        return new Wt(n);
      }
      function In(e, i, t, n, o) {
        var f = e[o][t], S = i[t] / f, C = Math.sign(S) !== Math.sign(n[o]) && n[o] !== 0 && Math.abs(S) <= 1 ? function(D) {
          return D < 0 ? Math.floor(D) : Math.ceil(D);
        }(S) : Math.trunc(S);
        n[o] += C, i[t] -= C * f;
      }
      var Wt = function() {
        function e(t) {
          var n = t.conversionAccuracy === "longterm" || !1;
          this.values = t.values, this.loc = t.loc || Jt.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? Pr : jr, this.isLuxonDuration = !0;
        }
        e.fromMillis = function(t, n) {
          return e.fromObject(Object.assign({ milliseconds: t }, n));
        }, e.fromObject = function(t) {
          if (t == null || typeof t != "object")
            throw new st("Duration.fromObject: argument expected to be an object, got " + (t === null ? "null" : typeof t));
          return new e({ values: It(t, e.normalizeUnit, ["locale", "numberingSystem", "conversionAccuracy", "zone"]), loc: Jt.fromObject(t), conversionAccuracy: t.conversionAccuracy });
        }, e.fromISO = function(t, n) {
          var o = function(S) {
            return Re(S, [gr, pr]);
          }(t)[0];
          if (o) {
            var f = Object.assign(o, n);
            return e.fromObject(f);
          }
          return e.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
        }, e.fromISOTime = function(t, n) {
          var o = function(S) {
            return Re(S, [hr, Rr]);
          }(t)[0];
          if (o) {
            var f = Object.assign(o, n);
            return e.fromObject(f);
          }
          return e.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
        }, e.invalid = function(t, n) {
          if (n === void 0 && (n = null), !t)
            throw new st("need to specify a reason the Duration is invalid");
          var o = t instanceof oe ? t : new oe(t, n);
          if (zt.throwOnInvalid)
            throw new it(o);
          return new e({ invalid: o });
        }, e.normalizeUnit = function(t) {
          var n = { year: "years", years: "years", quarter: "quarters", quarters: "quarters", month: "months", months: "months", week: "weeks", weeks: "weeks", day: "days", days: "days", hour: "hours", hours: "hours", minute: "minutes", minutes: "minutes", second: "seconds", seconds: "seconds", millisecond: "milliseconds", milliseconds: "milliseconds" }[t && t.toLowerCase()];
          if (!n)
            throw new et(t);
          return n;
        }, e.isDuration = function(t) {
          return t && t.isLuxonDuration || !1;
        };
        var i = e.prototype;
        return i.toFormat = function(t, n) {
          n === void 0 && (n = {});
          var o = Object.assign({}, n, { floor: n.round !== !1 && n.floor !== !1 });
          return this.isValid ? Kt.create(this.loc, o).formatDurationFromString(this, t) : "Invalid Duration";
        }, i.toObject = function(t) {
          if (t === void 0 && (t = {}), !this.isValid)
            return {};
          var n = Object.assign({}, this.values);
          return t.includeConfig && (n.conversionAccuracy = this.conversionAccuracy, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
        }, i.toISO = function() {
          if (!this.isValid)
            return null;
          var t = "P";
          return this.years !== 0 && (t += this.years + "Y"), this.months === 0 && this.quarters === 0 || (t += this.months + 3 * this.quarters + "M"), this.weeks !== 0 && (t += this.weeks + "W"), this.days !== 0 && (t += this.days + "D"), this.hours === 0 && this.minutes === 0 && this.seconds === 0 && this.milliseconds === 0 || (t += "T"), this.hours !== 0 && (t += this.hours + "H"), this.minutes !== 0 && (t += this.minutes + "M"), this.seconds === 0 && this.milliseconds === 0 || (t += Ot(this.seconds + this.milliseconds / 1e3, 3) + "S"), t === "P" && (t += "T0S"), t;
        }, i.toISOTime = function(t) {
          if (t === void 0 && (t = {}), !this.isValid)
            return null;
          var n = this.toMillis();
          if (n < 0 || n >= 864e5)
            return null;
          t = Object.assign({ suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: "extended" }, t);
          var o = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), f = t.format === "basic" ? "hhmm" : "hh:mm";
          t.suppressSeconds && o.seconds === 0 && o.milliseconds === 0 || (f += t.format === "basic" ? "ss" : ":ss", t.suppressMilliseconds && o.milliseconds === 0 || (f += ".SSS"));
          var S = o.toFormat(f);
          return t.includePrefix && (S = "T" + S), S;
        }, i.toJSON = function() {
          return this.toISO();
        }, i.toString = function() {
          return this.toISO();
        }, i.toMillis = function() {
          return this.as("milliseconds");
        }, i.valueOf = function() {
          return this.toMillis();
        }, i.plus = function(t) {
          if (!this.isValid)
            return this;
          for (var n, o = ke(t), f = {}, S = T(Me); !(n = S()).done; ) {
            var C = n.value;
            (q(o.values, C) || q(this.values, C)) && (f[C] = o.get(C) + this.get(C));
          }
          return Ee(this, { values: f }, !0);
        }, i.minus = function(t) {
          if (!this.isValid)
            return this;
          var n = ke(t);
          return this.plus(n.negate());
        }, i.mapUnits = function(t) {
          if (!this.isValid)
            return this;
          for (var n = {}, o = 0, f = Object.keys(this.values); o < f.length; o++) {
            var S = f[o];
            n[S] = Rt(t(this.values[S], S));
          }
          return Ee(this, { values: n }, !0);
        }, i.get = function(t) {
          return this[e.normalizeUnit(t)];
        }, i.set = function(t) {
          return this.isValid ? Ee(this, { values: Object.assign(this.values, It(t, e.normalizeUnit, [])) }) : this;
        }, i.reconfigure = function(t) {
          var n = t === void 0 ? {} : t, o = n.locale, f = n.numberingSystem, S = n.conversionAccuracy, C = { loc: this.loc.clone({ locale: o, numberingSystem: f }) };
          return S && (C.conversionAccuracy = S), Ee(this, C);
        }, i.as = function(t) {
          return this.isValid ? this.shiftTo(t).get(t) : NaN;
        }, i.normalize = function() {
          if (!this.isValid)
            return this;
          var t = this.toObject();
          return function(n, o) {
            Vr.reduce(function(f, S) {
              return a(o[S]) ? f : (f && In(n, o, f, o, S), S);
            }, null);
          }(this.matrix, t), Ee(this, { values: t }, !0);
        }, i.shiftTo = function() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          if (!this.isValid)
            return this;
          if (n.length === 0)
            return this;
          n = n.map(function(jt) {
            return e.normalizeUnit(jt);
          });
          for (var f, S, C = {}, D = {}, Y = this.toObject(), J = T(Me); !(S = J()).done; ) {
            var rt = S.value;
            if (n.indexOf(rt) >= 0) {
              f = rt;
              var yt = 0;
              for (var bt in D)
                yt += this.matrix[bt][rt] * D[bt], D[bt] = 0;
              u(Y[rt]) && (yt += Y[rt]);
              var xt = Math.trunc(yt);
              for (var _t in C[rt] = xt, D[rt] = yt - xt, Y)
                Me.indexOf(_t) > Me.indexOf(rt) && In(this.matrix, Y, _t, C, rt);
            } else
              u(Y[rt]) && (D[rt] = Y[rt]);
          }
          for (var St in D)
            D[St] !== 0 && (C[f] += St === f ? D[St] : D[St] / this.matrix[f][St]);
          return Ee(this, { values: C }, !0).normalize();
        }, i.negate = function() {
          if (!this.isValid)
            return this;
          for (var t = {}, n = 0, o = Object.keys(this.values); n < o.length; n++) {
            var f = o[n];
            t[f] = -this.values[f];
          }
          return Ee(this, { values: t }, !0);
        }, i.equals = function(t) {
          if (!this.isValid || !t.isValid || !this.loc.equals(t.loc))
            return !1;
          for (var n, o = T(Me); !(n = o()).done; ) {
            var f = n.value;
            if (S = this.values[f], C = t.values[f], !(S === void 0 || S === 0 ? C === void 0 || C === 0 : S === C))
              return !1;
          }
          var S, C;
          return !0;
        }, h(e, [{ key: "locale", get: function() {
          return this.isValid ? this.loc.locale : null;
        } }, { key: "numberingSystem", get: function() {
          return this.isValid ? this.loc.numberingSystem : null;
        } }, { key: "years", get: function() {
          return this.isValid ? this.values.years || 0 : NaN;
        } }, { key: "quarters", get: function() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        } }, { key: "months", get: function() {
          return this.isValid ? this.values.months || 0 : NaN;
        } }, { key: "weeks", get: function() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        } }, { key: "days", get: function() {
          return this.isValid ? this.values.days || 0 : NaN;
        } }, { key: "hours", get: function() {
          return this.isValid ? this.values.hours || 0 : NaN;
        } }, { key: "minutes", get: function() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        } }, { key: "seconds", get: function() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        } }, { key: "milliseconds", get: function() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        } }, { key: "isValid", get: function() {
          return this.invalid === null;
        } }, { key: "invalidReason", get: function() {
          return this.invalid ? this.invalid.reason : null;
        } }, { key: "invalidExplanation", get: function() {
          return this.invalid ? this.invalid.explanation : null;
        } }]), e;
      }();
      function ke(e) {
        if (u(e))
          return Wt.fromMillis(e);
        if (Wt.isDuration(e))
          return e;
        if (typeof e == "object")
          return Wt.fromObject(e);
        throw new st("Unknown duration argument " + e + " of type " + typeof e);
      }
      var Ve = "Invalid Interval";
      function qr(e, i) {
        return e && e.isValid ? i && i.isValid ? i < e ? qe.invalid("end before start", "The end of an interval must be after its start, but you had start=" + e.toISO() + " and end=" + i.toISO()) : null : qe.invalid("missing or invalid end") : qe.invalid("missing or invalid start");
      }
      var qe = function() {
        function e(t) {
          this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
        }
        e.invalid = function(t, n) {
          if (n === void 0 && (n = null), !t)
            throw new st("need to specify a reason the Interval is invalid");
          var o = t instanceof oe ? t : new oe(t, n);
          if (zt.throwOnInvalid)
            throw new X(o);
          return new e({ invalid: o });
        }, e.fromDateTimes = function(t, n) {
          var o = ze(t), f = ze(n), S = qr(o, f);
          return S ?? new e({ start: o, end: f });
        }, e.after = function(t, n) {
          var o = ke(n), f = ze(t);
          return e.fromDateTimes(f, f.plus(o));
        }, e.before = function(t, n) {
          var o = ke(n), f = ze(t);
          return e.fromDateTimes(f.minus(o), f);
        }, e.fromISO = function(t, n) {
          var o = (t || "").split("/", 2), f = o[0], S = o[1];
          if (f && S) {
            var C, D, Y, J;
            try {
              D = (C = Bt.fromISO(f, n)).isValid;
            } catch {
              D = !1;
            }
            try {
              J = (Y = Bt.fromISO(S, n)).isValid;
            } catch {
              J = !1;
            }
            if (D && J)
              return e.fromDateTimes(C, Y);
            if (D) {
              var rt = Wt.fromISO(S, n);
              if (rt.isValid)
                return e.after(C, rt);
            } else if (J) {
              var yt = Wt.fromISO(f, n);
              if (yt.isValid)
                return e.before(Y, yt);
            }
          }
          return e.invalid("unparsable", 'the input "' + t + `" can't be parsed as ISO 8601`);
        }, e.isInterval = function(t) {
          return t && t.isLuxonInterval || !1;
        };
        var i = e.prototype;
        return i.length = function(t) {
          return t === void 0 && (t = "milliseconds"), this.isValid ? this.toDuration.apply(this, [t]).get(t) : NaN;
        }, i.count = function(t) {
          if (t === void 0 && (t = "milliseconds"), !this.isValid)
            return NaN;
          var n = this.start.startOf(t), o = this.end.startOf(t);
          return Math.floor(o.diff(n, t).get(t)) + 1;
        }, i.hasSame = function(t) {
          return !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, t));
        }, i.isEmpty = function() {
          return this.s.valueOf() === this.e.valueOf();
        }, i.isAfter = function(t) {
          return !!this.isValid && this.s > t;
        }, i.isBefore = function(t) {
          return !!this.isValid && this.e <= t;
        }, i.contains = function(t) {
          return !!this.isValid && this.s <= t && this.e > t;
        }, i.set = function(t) {
          var n = t === void 0 ? {} : t, o = n.start, f = n.end;
          return this.isValid ? e.fromDateTimes(o || this.s, f || this.e) : this;
        }, i.splitAt = function() {
          var t = this;
          if (!this.isValid)
            return [];
          for (var n = arguments.length, o = new Array(n), f = 0; f < n; f++)
            o[f] = arguments[f];
          for (var S = o.map(ze).filter(function(yt) {
            return t.contains(yt);
          }).sort(), C = [], D = this.s, Y = 0; D < this.e; ) {
            var J = S[Y] || this.e, rt = +J > +this.e ? this.e : J;
            C.push(e.fromDateTimes(D, rt)), D = rt, Y += 1;
          }
          return C;
        }, i.splitBy = function(t) {
          var n = ke(t);
          if (!this.isValid || !n.isValid || n.as("milliseconds") === 0)
            return [];
          for (var o, f = this.s, S = 1, C = []; f < this.e; ) {
            var D = this.start.plus(n.mapUnits(function(Y) {
              return Y * S;
            }));
            o = +D > +this.e ? this.e : D, C.push(e.fromDateTimes(f, o)), f = o, S += 1;
          }
          return C;
        }, i.divideEqually = function(t) {
          return this.isValid ? this.splitBy(this.length() / t).slice(0, t) : [];
        }, i.overlaps = function(t) {
          return this.e > t.s && this.s < t.e;
        }, i.abutsStart = function(t) {
          return !!this.isValid && +this.e == +t.s;
        }, i.abutsEnd = function(t) {
          return !!this.isValid && +t.e == +this.s;
        }, i.engulfs = function(t) {
          return !!this.isValid && this.s <= t.s && this.e >= t.e;
        }, i.equals = function(t) {
          return !(!this.isValid || !t.isValid) && this.s.equals(t.s) && this.e.equals(t.e);
        }, i.intersection = function(t) {
          if (!this.isValid)
            return this;
          var n = this.s > t.s ? this.s : t.s, o = this.e < t.e ? this.e : t.e;
          return n >= o ? null : e.fromDateTimes(n, o);
        }, i.union = function(t) {
          if (!this.isValid)
            return this;
          var n = this.s < t.s ? this.s : t.s, o = this.e > t.e ? this.e : t.e;
          return e.fromDateTimes(n, o);
        }, e.merge = function(t) {
          var n = t.sort(function(S, C) {
            return S.s - C.s;
          }).reduce(function(S, C) {
            var D = S[0], Y = S[1];
            return Y ? Y.overlaps(C) || Y.abutsStart(C) ? [D, Y.union(C)] : [D.concat([Y]), C] : [D, C];
          }, [[], null]), o = n[0], f = n[1];
          return f && o.push(f), o;
        }, e.xor = function(t) {
          for (var n, o, f = null, S = 0, C = [], D = t.map(function(rt) {
            return [{ time: rt.s, type: "s" }, { time: rt.e, type: "e" }];
          }), Y = T((n = Array.prototype).concat.apply(n, D).sort(function(rt, yt) {
            return rt.time - yt.time;
          })); !(o = Y()).done; ) {
            var J = o.value;
            (S += J.type === "s" ? 1 : -1) === 1 ? f = J.time : (f && +f != +J.time && C.push(e.fromDateTimes(f, J.time)), f = null);
          }
          return e.merge(C);
        }, i.difference = function() {
          for (var t = this, n = arguments.length, o = new Array(n), f = 0; f < n; f++)
            o[f] = arguments[f];
          return e.xor([this].concat(o)).map(function(S) {
            return t.intersection(S);
          }).filter(function(S) {
            return S && !S.isEmpty();
          });
        }, i.toString = function() {
          return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : Ve;
        }, i.toISO = function(t) {
          return this.isValid ? this.s.toISO(t) + "/" + this.e.toISO(t) : Ve;
        }, i.toISODate = function() {
          return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : Ve;
        }, i.toISOTime = function(t) {
          return this.isValid ? this.s.toISOTime(t) + "/" + this.e.toISOTime(t) : Ve;
        }, i.toFormat = function(t, n) {
          var o = (n === void 0 ? {} : n).separator, f = o === void 0 ? " – " : o;
          return this.isValid ? "" + this.s.toFormat(t) + f + this.e.toFormat(t) : Ve;
        }, i.toDuration = function(t, n) {
          return this.isValid ? this.e.diff(this.s, t, n) : Wt.invalid(this.invalidReason);
        }, i.mapEndpoints = function(t) {
          return e.fromDateTimes(t(this.s), t(this.e));
        }, h(e, [{ key: "start", get: function() {
          return this.isValid ? this.s : null;
        } }, { key: "end", get: function() {
          return this.isValid ? this.e : null;
        } }, { key: "isValid", get: function() {
          return this.invalidReason === null;
        } }, { key: "invalidReason", get: function() {
          return this.invalid ? this.invalid.reason : null;
        } }, { key: "invalidExplanation", get: function() {
          return this.invalid ? this.invalid.explanation : null;
        } }]), e;
      }(), Ue = function() {
        function e() {
        }
        return e.hasDST = function(i) {
          i === void 0 && (i = zt.defaultZone);
          var t = Bt.now().setZone(i).set({ month: 12 });
          return !i.universal && t.offset !== t.set({ month: 6 }).offset;
        }, e.isValidIANAZone = function(i) {
          return de.isValidSpecifier(i) && de.isValidZone(i);
        }, e.normalizeZone = function(i) {
          return Se(i, zt.defaultZone);
        }, e.months = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, f = o === void 0 ? null : o, S = n.numberingSystem, C = S === void 0 ? null : S, D = n.locObj, Y = D === void 0 ? null : D, J = n.outputCalendar, rt = J === void 0 ? "gregory" : J;
          return (Y || Jt.create(f, C, rt)).months(i);
        }, e.monthsFormat = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, f = o === void 0 ? null : o, S = n.numberingSystem, C = S === void 0 ? null : S, D = n.locObj, Y = D === void 0 ? null : D, J = n.outputCalendar, rt = J === void 0 ? "gregory" : J;
          return (Y || Jt.create(f, C, rt)).months(i, !0);
        }, e.weekdays = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, f = o === void 0 ? null : o, S = n.numberingSystem, C = S === void 0 ? null : S, D = n.locObj;
          return ((D === void 0 ? null : D) || Jt.create(f, C, null)).weekdays(i);
        }, e.weekdaysFormat = function(i, t) {
          i === void 0 && (i = "long");
          var n = t === void 0 ? {} : t, o = n.locale, f = o === void 0 ? null : o, S = n.numberingSystem, C = S === void 0 ? null : S, D = n.locObj;
          return ((D === void 0 ? null : D) || Jt.create(f, C, null)).weekdays(i, !0);
        }, e.meridiems = function(i) {
          var t = (i === void 0 ? {} : i).locale, n = t === void 0 ? null : t;
          return Jt.create(n).meridiems();
        }, e.eras = function(i, t) {
          i === void 0 && (i = "short");
          var n = (t === void 0 ? {} : t).locale, o = n === void 0 ? null : n;
          return Jt.create(o, null, "gregory").eras(i);
        }, e.features = function() {
          var i = !1, t = !1, n = !1, o = !1;
          if (s()) {
            i = !0, t = d(), o = O();
            try {
              n = new Intl.DateTimeFormat("en", { timeZone: "America/New_York" }).resolvedOptions().timeZone === "America/New_York";
            } catch {
              n = !1;
            }
          }
          return { intl: i, intlTokens: t, zones: n, relative: o };
        }, e;
      }();
      function An(e, i) {
        var t = function(o) {
          return o.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf();
        }, n = t(i) - t(e);
        return Math.floor(Wt.fromMillis(n).as("days"));
      }
      function Ur(e, i, t, n) {
        var o = function(xt, _t, St) {
          for (var jt, At, Ft = {}, Ut = 0, Gt = [["years", function(ee, ue) {
            return ue.year - ee.year;
          }], ["quarters", function(ee, ue) {
            return ue.quarter - ee.quarter;
          }], ["months", function(ee, ue) {
            return ue.month - ee.month + 12 * (ue.year - ee.year);
          }], ["weeks", function(ee, ue) {
            var je = An(ee, ue);
            return (je - je % 7) / 7;
          }], ["days", An]]; Ut < Gt.length; Ut++) {
            var $t = Gt[Ut], Zt = $t[0], Vt = $t[1];
            if (St.indexOf(Zt) >= 0) {
              var fe;
              jt = Zt;
              var he, ge = Vt(xt, _t);
              (At = xt.plus(((fe = {})[Zt] = ge, fe))) > _t ? (xt = xt.plus(((he = {})[Zt] = ge - 1, he)), ge -= 1) : xt = At, Ft[Zt] = ge;
            }
          }
          return [xt, Ft, At, jt];
        }(e, i, t), f = o[0], S = o[1], C = o[2], D = o[3], Y = i - f, J = t.filter(function(xt) {
          return ["hours", "minutes", "seconds", "milliseconds"].indexOf(xt) >= 0;
        });
        if (J.length === 0) {
          var rt;
          C < i && (C = f.plus(((rt = {})[D] = 1, rt))), C !== f && (S[D] = (S[D] || 0) + Y / (C - f));
        }
        var yt, bt = Wt.fromObject(Object.assign(S, n));
        return J.length > 0 ? (yt = Wt.fromMillis(Y, n)).shiftTo.apply(yt, J).plus(bt) : bt;
      }
      var un = { arab: "[٠-٩]", arabext: "[۰-۹]", bali: "[᭐-᭙]", beng: "[০-৯]", deva: "[०-९]", fullwide: "[０-９]", gujr: "[૦-૯]", hanidec: "[〇|一|二|三|四|五|六|七|八|九]", khmr: "[០-៩]", knda: "[೦-೯]", laoo: "[໐-໙]", limb: "[᥆-᥏]", mlym: "[൦-൯]", mong: "[᠐-᠙]", mymr: "[၀-၉]", orya: "[୦-୯]", tamldec: "[௦-௯]", telu: "[౦-౯]", thai: "[๐-๙]", tibt: "[༠-༩]", latn: "\\d" }, Rn = { arab: [1632, 1641], arabext: [1776, 1785], bali: [6992, 7001], beng: [2534, 2543], deva: [2406, 2415], fullwide: [65296, 65303], gujr: [2790, 2799], khmr: [6112, 6121], knda: [3302, 3311], laoo: [3792, 3801], limb: [6470, 6479], mlym: [3430, 3439], mong: [6160, 6169], mymr: [4160, 4169], orya: [2918, 2927], tamldec: [3046, 3055], telu: [3174, 3183], thai: [3664, 3673], tibt: [3872, 3881] }, Fr = un.hanidec.replace(/[\[|\]]/g, "").split("");
      function se(e, i) {
        var t = e.numberingSystem;
        return i === void 0 && (i = ""), new RegExp("" + un[t || "latn"] + i);
      }
      function qt(e, i) {
        return i === void 0 && (i = function(t) {
          return t;
        }), { regex: e, deser: function(t) {
          var n = t[0];
          return i(function(o) {
            var f = parseInt(o, 10);
            if (isNaN(f)) {
              f = "";
              for (var S = 0; S < o.length; S++) {
                var C = o.charCodeAt(S);
                if (o[S].search(un.hanidec) !== -1)
                  f += Fr.indexOf(o[S]);
                else
                  for (var D in Rn) {
                    var Y = Rn[D], J = Y[0], rt = Y[1];
                    C >= J && C <= rt && (f += C - J);
                  }
              }
              return parseInt(f, 10);
            }
            return f;
          }(n));
        } };
      }
      var Dn = "( |" + String.fromCharCode(160) + ")", Nn = new RegExp(Dn, "g");
      function Hr(e) {
        return e.replace(/\./g, "\\.?").replace(Nn, Dn);
      }
      function Mn(e) {
        return e.replace(/\./g, "").replace(Nn, " ").toLowerCase();
      }
      function ae(e, i) {
        return e === null ? null : { regex: RegExp(e.map(Hr).join("|")), deser: function(t) {
          var n = t[0];
          return e.findIndex(function(o) {
            return Mn(n) === Mn(o);
          }) + i;
        } };
      }
      function _n(e, i) {
        return { regex: e, deser: function(t) {
          return Tt(t[1], t[2]);
        }, groups: i };
      }
      function jn(e) {
        return { regex: e, deser: function(i) {
          return i[0];
        } };
      }
      var zr = { year: { "2-digit": "yy", numeric: "yyyyy" }, month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" }, day: { numeric: "d", "2-digit": "dd" }, weekday: { short: "EEE", long: "EEEE" }, dayperiod: "a", dayPeriod: "a", hour: { numeric: "h", "2-digit": "hh" }, minute: { numeric: "m", "2-digit": "mm" }, second: { numeric: "s", "2-digit": "ss" } }, cn = null;
      function Br(e, i) {
        if (e.literal)
          return e;
        var t = Kt.macroTokenToFormatOpts(e.val);
        if (!t)
          return e;
        var n = Kt.create(i, t).formatDateTimeParts((cn || (cn = Bt.fromMillis(1555555555555)), cn)).map(function(o) {
          return function(f, S, C) {
            var D = f.type, Y = f.value;
            if (D === "literal")
              return { literal: !0, val: Y };
            var J = C[D], rt = zr[D];
            return typeof rt == "object" && (rt = rt[J]), rt ? { literal: !1, val: rt } : void 0;
          }(o, 0, t);
        });
        return n.includes(void 0) ? e : n;
      }
      function Pn(e, i, t) {
        var n = function(St, jt) {
          var At;
          return (At = Array.prototype).concat.apply(At, St.map(function(Ft) {
            return Br(Ft, jt);
          }));
        }(Kt.parseFormat(t), e), o = n.map(function(St) {
          return jt = St, Ft = se(At = e), Ut = se(At, "{2}"), Gt = se(At, "{3}"), $t = se(At, "{4}"), Zt = se(At, "{6}"), Vt = se(At, "{1,2}"), fe = se(At, "{1,3}"), he = se(At, "{1,6}"), ge = se(At, "{1,9}"), ee = se(At, "{2,4}"), ue = se(At, "{4,6}"), je = function(Be) {
            return { regex: RegExp((rr = Be.val, rr.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"))), deser: function($r) {
              return $r[0];
            }, literal: !0 };
            var rr;
          }, (nr = function(Be) {
            if (jt.literal)
              return je(Be);
            switch (Be.val) {
              case "G":
                return ae(At.eras("short", !1), 0);
              case "GG":
                return ae(At.eras("long", !1), 0);
              case "y":
                return qt(he);
              case "yy":
                return qt(ee, ht);
              case "yyyy":
                return qt($t);
              case "yyyyy":
                return qt(ue);
              case "yyyyyy":
                return qt(Zt);
              case "M":
                return qt(Vt);
              case "MM":
                return qt(Ut);
              case "MMM":
                return ae(At.months("short", !0, !1), 1);
              case "MMMM":
                return ae(At.months("long", !0, !1), 1);
              case "L":
                return qt(Vt);
              case "LL":
                return qt(Ut);
              case "LLL":
                return ae(At.months("short", !1, !1), 1);
              case "LLLL":
                return ae(At.months("long", !1, !1), 1);
              case "d":
                return qt(Vt);
              case "dd":
                return qt(Ut);
              case "o":
                return qt(fe);
              case "ooo":
                return qt(Gt);
              case "HH":
                return qt(Ut);
              case "H":
                return qt(Vt);
              case "hh":
                return qt(Ut);
              case "h":
                return qt(Vt);
              case "mm":
                return qt(Ut);
              case "m":
              case "q":
                return qt(Vt);
              case "qq":
                return qt(Ut);
              case "s":
                return qt(Vt);
              case "ss":
                return qt(Ut);
              case "S":
                return qt(fe);
              case "SSS":
                return qt(Gt);
              case "u":
                return jn(ge);
              case "a":
                return ae(At.meridiems(), 0);
              case "kkkk":
                return qt($t);
              case "kk":
                return qt(ee, ht);
              case "W":
                return qt(Vt);
              case "WW":
                return qt(Ut);
              case "E":
              case "c":
                return qt(Ft);
              case "EEE":
                return ae(At.weekdays("short", !1, !1), 1);
              case "EEEE":
                return ae(At.weekdays("long", !1, !1), 1);
              case "ccc":
                return ae(At.weekdays("short", !0, !1), 1);
              case "cccc":
                return ae(At.weekdays("long", !0, !1), 1);
              case "Z":
              case "ZZ":
                return _n(new RegExp("([+-]" + Vt.source + ")(?::(" + Ut.source + "))?"), 2);
              case "ZZZ":
                return _n(new RegExp("([+-]" + Vt.source + ")(" + Ut.source + ")?"), 2);
              case "z":
                return jn(/[a-z_+-/]{1,256}?/i);
              default:
                return je(Be);
            }
          }(jt) || { invalidReason: "missing Intl.DateTimeFormat.formatToParts support" }).token = jt, nr;
          var jt, At, Ft, Ut, Gt, $t, Zt, Vt, fe, he, ge, ee, ue, je, nr;
        }), f = o.find(function(St) {
          return St.invalidReason;
        });
        if (f)
          return { input: i, tokens: n, invalidReason: f.invalidReason };
        var S = function(St) {
          return ["^" + St.map(function(jt) {
            return jt.regex;
          }).reduce(function(jt, At) {
            return jt + "(" + At.source + ")";
          }, "") + "$", St];
        }(o), C = S[0], D = S[1], Y = RegExp(C, "i"), J = function(St, jt, At) {
          var Ft = St.match(jt);
          if (Ft) {
            var Ut = {}, Gt = 1;
            for (var $t in At)
              if (q(At, $t)) {
                var Zt = At[$t], Vt = Zt.groups ? Zt.groups + 1 : 1;
                !Zt.literal && Zt.token && (Ut[Zt.token.val[0]] = Zt.deser(Ft.slice(Gt, Gt + Vt))), Gt += Vt;
              }
            return [Ft, Ut];
          }
          return [Ft, {}];
        }(i, Y, D), rt = J[0], yt = J[1], bt = yt ? function(St) {
          var jt;
          return jt = a(St.Z) ? a(St.z) ? null : de.create(St.z) : new Xt(St.Z), a(St.q) || (St.M = 3 * (St.q - 1) + 1), a(St.h) || (St.h < 12 && St.a === 1 ? St.h += 12 : St.h === 12 && St.a === 0 && (St.h = 0)), St.G === 0 && St.y && (St.y = -St.y), a(St.u) || (St.S = Lt(St.u)), [Object.keys(St).reduce(function(At, Ft) {
            var Ut = function(Gt) {
              switch (Gt) {
                case "S":
                  return "millisecond";
                case "s":
                  return "second";
                case "m":
                  return "minute";
                case "h":
                case "H":
                  return "hour";
                case "d":
                  return "day";
                case "o":
                  return "ordinal";
                case "L":
                case "M":
                  return "month";
                case "y":
                  return "year";
                case "E":
                case "c":
                  return "weekday";
                case "W":
                  return "weekNumber";
                case "k":
                  return "weekYear";
                case "q":
                  return "quarter";
                default:
                  return null;
              }
            }(Ft);
            return Ut && (At[Ut] = St[Ft]), At;
          }, {}), jt];
        }(yt) : [null, null], xt = bt[0], _t = bt[1];
        if (q(yt, "a") && q(yt, "H"))
          throw new Q("Can't include meridiem when specifying 24-hour format");
        return { input: i, tokens: n, regex: Y, rawMatches: rt, matches: yt, result: xt, zone: _t };
      }
      var Vn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], qn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function te(e, i) {
        return new oe("unit out of range", "you specified " + i + " (of type " + typeof i + ") as a " + e + ", which is invalid");
      }
      function Un(e, i, t) {
        var n = new Date(Date.UTC(e, i - 1, t)).getUTCDay();
        return n === 0 ? 7 : n;
      }
      function Fn(e, i, t) {
        return t + (dt(e) ? qn : Vn)[i - 1];
      }
      function Hn(e, i) {
        var t = dt(e) ? qn : Vn, n = t.findIndex(function(o) {
          return o < i;
        });
        return { month: n + 1, day: i - t[n] };
      }
      function ln(e) {
        var i, t = e.year, n = e.month, o = e.day, f = Fn(t, n, o), S = Un(t, n, o), C = Math.floor((f - S + 10) / 7);
        return C < 1 ? C = nt(i = t - 1) : C > nt(t) ? (i = t + 1, C = 1) : i = t, Object.assign({ weekYear: i, weekNumber: C, weekday: S }, Et(e));
      }
      function zn(e) {
        var i, t = e.weekYear, n = e.weekNumber, o = e.weekday, f = Un(t, 1, 4), S = U(t), C = 7 * n + o - f - 3;
        C < 1 ? C += U(i = t - 1) : C > S ? (i = t + 1, C -= U(t)) : i = t;
        var D = Hn(i, C), Y = D.month, J = D.day;
        return Object.assign({ year: i, month: Y, day: J }, Et(e));
      }
      function dn(e) {
        var i = e.year, t = Fn(i, e.month, e.day);
        return Object.assign({ year: i, ordinal: t }, Et(e));
      }
      function Bn(e) {
        var i = e.year, t = Hn(i, e.ordinal), n = t.month, o = t.day;
        return Object.assign({ year: i, month: n, day: o }, Et(e));
      }
      function Zn(e) {
        var i = r(e.year), t = tt(e.month, 1, 12), n = tt(e.day, 1, c(e.year, e.month));
        return i ? t ? !n && te("day", e.day) : te("month", e.month) : te("year", e.year);
      }
      function Jn(e) {
        var i = e.hour, t = e.minute, n = e.second, o = e.millisecond, f = tt(i, 0, 23) || i === 24 && t === 0 && n === 0 && o === 0, S = tt(t, 0, 59), C = tt(n, 0, 59), D = tt(o, 0, 999);
        return f ? S ? C ? !D && te("millisecond", o) : te("second", n) : te("minute", t) : te("hour", i);
      }
      function $e(e) {
        return new oe("unsupported zone", 'the zone "' + e.name + '" is not supported');
      }
      function fn(e) {
        return e.weekData === null && (e.weekData = ln(e.c)), e.weekData;
      }
      function Fe(e, i) {
        var t = { ts: e.ts, zone: e.zone, c: e.c, o: e.o, loc: e.loc, invalid: e.invalid };
        return new Bt(Object.assign({}, t, i, { old: t }));
      }
      function Gn(e, i, t) {
        var n = e - 60 * i * 1e3, o = t.offset(n);
        if (i === o)
          return [n, i];
        n -= 60 * (o - i) * 1e3;
        var f = t.offset(n);
        return o === f ? [n, o] : [e - 60 * Math.min(o, f) * 1e3, Math.max(o, f)];
      }
      function Wn(e, i) {
        var t = new Date(e += 60 * i * 1e3);
        return { year: t.getUTCFullYear(), month: t.getUTCMonth() + 1, day: t.getUTCDate(), hour: t.getUTCHours(), minute: t.getUTCMinutes(), second: t.getUTCSeconds(), millisecond: t.getUTCMilliseconds() };
      }
      function Ye(e, i, t) {
        return Gn(p(e), i, t);
      }
      function $n(e, i) {
        var t = e.o, n = e.c.year + Math.trunc(i.years), o = e.c.month + Math.trunc(i.months) + 3 * Math.trunc(i.quarters), f = Object.assign({}, e.c, { year: n, month: o, day: Math.min(e.c.day, c(n, o)) + Math.trunc(i.days) + 7 * Math.trunc(i.weeks) }), S = Wt.fromObject({ years: i.years - Math.trunc(i.years), quarters: i.quarters - Math.trunc(i.quarters), months: i.months - Math.trunc(i.months), weeks: i.weeks - Math.trunc(i.weeks), days: i.days - Math.trunc(i.days), hours: i.hours, minutes: i.minutes, seconds: i.seconds, milliseconds: i.milliseconds }).as("milliseconds"), C = Gn(p(f), t, e.zone), D = C[0], Y = C[1];
        return S !== 0 && (D += S, Y = e.zone.offset(D)), { ts: D, o: Y };
      }
      function He(e, i, t, n, o) {
        var f = t.setZone, S = t.zone;
        if (e && Object.keys(e).length !== 0) {
          var C = i || S, D = Bt.fromObject(Object.assign(e, t, { zone: C, setZone: void 0 }));
          return f ? D : D.setZone(S);
        }
        return Bt.invalid(new oe("unparsable", 'the input "' + o + `" can't be parsed as ` + n));
      }
      function _e(e, i, t) {
        return t === void 0 && (t = !0), e.isValid ? Kt.create(Jt.create("en-US"), { allowZ: t, forceSimple: !0 }).formatDateTimeFromString(e, i) : null;
      }
      function Yn(e, i) {
        var t = i.suppressSeconds, n = t !== void 0 && t, o = i.suppressMilliseconds, f = o !== void 0 && o, S = i.includeOffset, C = i.includePrefix, D = C !== void 0 && C, Y = i.includeZone, J = Y !== void 0 && Y, rt = i.spaceZone, yt = rt !== void 0 && rt, bt = i.format, xt = bt === void 0 ? "extended" : bt, _t = xt === "basic" ? "HHmm" : "HH:mm";
        n && e.second === 0 && e.millisecond === 0 || (_t += xt === "basic" ? "ss" : ":ss", f && e.millisecond === 0 || (_t += ".SSS")), (J || S) && yt && (_t += " "), J ? _t += "z" : S && (_t += xt === "basic" ? "ZZZ" : "ZZ");
        var St = _e(e, _t);
        return D && (St = "T" + St), St;
      }
      var Kn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Zr = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Jr = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }, Xn = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Gr = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], Wr = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function Qn(e) {
        var i = { year: "year", years: "year", month: "month", months: "month", day: "day", days: "day", hour: "hour", hours: "hour", minute: "minute", minutes: "minute", quarter: "quarter", quarters: "quarter", second: "second", seconds: "second", millisecond: "millisecond", milliseconds: "millisecond", weekday: "weekday", weekdays: "weekday", weeknumber: "weekNumber", weeksnumber: "weekNumber", weeknumbers: "weekNumber", weekyear: "weekYear", weekyears: "weekYear", ordinal: "ordinal" }[e.toLowerCase()];
        if (!i)
          throw new et(e);
        return i;
      }
      function tr(e, i) {
        for (var t, n = T(Xn); !(t = n()).done; ) {
          var o = t.value;
          a(e[o]) && (e[o] = Kn[o]);
        }
        var f = Zn(e) || Jn(e);
        if (f)
          return Bt.invalid(f);
        var S = zt.now(), C = Ye(e, i.offset(S), i), D = C[0], Y = C[1];
        return new Bt({ ts: D, zone: i, o: Y });
      }
      function er(e, i, t) {
        var n = !!a(t.round) || t.round, o = function(J, rt) {
          return J = Ot(J, n || t.calendary ? 0 : 2, !0), i.loc.clone(t).relFormatter(t).format(J, rt);
        }, f = function(J) {
          return t.calendary ? i.hasSame(e, J) ? 0 : i.startOf(J).diff(e.startOf(J), J).get(J) : i.diff(e, J).get(J);
        };
        if (t.unit)
          return o(f(t.unit), t.unit);
        for (var S, C = T(t.units); !(S = C()).done; ) {
          var D = S.value, Y = f(D);
          if (Math.abs(Y) >= 1)
            return o(Y, D);
        }
        return o(e > i ? -0 : 0, t.units[t.units.length - 1]);
      }
      var Bt = function() {
        function e(t) {
          var n = t.zone || zt.defaultZone, o = t.invalid || (Number.isNaN(t.ts) ? new oe("invalid input") : null) || (n.isValid ? null : $e(n));
          this.ts = a(t.ts) ? zt.now() : t.ts;
          var f = null, S = null;
          if (!o)
            if (t.old && t.old.ts === this.ts && t.old.zone.equals(n)) {
              var C = [t.old.c, t.old.o];
              f = C[0], S = C[1];
            } else {
              var D = n.offset(this.ts);
              f = Wn(this.ts, D), f = (o = Number.isNaN(f.year) ? new oe("invalid input") : null) ? null : f, S = o ? null : D;
            }
          this._zone = n, this.loc = t.loc || Jt.create(), this.invalid = o, this.weekData = null, this.c = f, this.o = S, this.isLuxonDateTime = !0;
        }
        e.now = function() {
          return new e({});
        }, e.local = function(t, n, o, f, S, C, D) {
          return a(t) ? e.now() : tr({ year: t, month: n, day: o, hour: f, minute: S, second: C, millisecond: D }, zt.defaultZone);
        }, e.utc = function(t, n, o, f, S, C, D) {
          return a(t) ? new e({ ts: zt.now(), zone: Xt.utcInstance }) : tr({ year: t, month: n, day: o, hour: f, minute: S, second: C, millisecond: D }, Xt.utcInstance);
        }, e.fromJSDate = function(t, n) {
          n === void 0 && (n = {});
          var o, f = (o = t, Object.prototype.toString.call(o) === "[object Date]" ? t.valueOf() : NaN);
          if (Number.isNaN(f))
            return e.invalid("invalid input");
          var S = Se(n.zone, zt.defaultZone);
          return S.isValid ? new e({ ts: f, zone: S, loc: Jt.fromObject(n) }) : e.invalid($e(S));
        }, e.fromMillis = function(t, n) {
          if (n === void 0 && (n = {}), u(t))
            return t < -864e13 || t > 864e13 ? e.invalid("Timestamp out of range") : new e({ ts: t, zone: Se(n.zone, zt.defaultZone), loc: Jt.fromObject(n) });
          throw new st("fromMillis requires a numerical input, but received a " + typeof t + " with value " + t);
        }, e.fromSeconds = function(t, n) {
          if (n === void 0 && (n = {}), u(t))
            return new e({ ts: 1e3 * t, zone: Se(n.zone, zt.defaultZone), loc: Jt.fromObject(n) });
          throw new st("fromSeconds requires a numerical input");
        }, e.fromObject = function(t) {
          var n = Se(t.zone, zt.defaultZone);
          if (!n.isValid)
            return e.invalid($e(n));
          var o = zt.now(), f = n.offset(o), S = It(t, Qn, ["zone", "locale", "outputCalendar", "numberingSystem"]), C = !a(S.ordinal), D = !a(S.year), Y = !a(S.month) || !a(S.day), J = D || Y, rt = S.weekYear || S.weekNumber, yt = Jt.fromObject(t);
          if ((J || C) && rt)
            throw new Q("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          if (Y && C)
            throw new Q("Can't mix ordinal dates with month/day");
          var bt, xt, _t = rt || S.weekday && !J, St = Wn(o, f);
          _t ? (bt = Gr, xt = Zr, St = ln(St)) : C ? (bt = Wr, xt = Jr, St = dn(St)) : (bt = Xn, xt = Kn);
          for (var jt, At = !1, Ft = T(bt); !(jt = Ft()).done; ) {
            var Ut = jt.value;
            a(S[Ut]) ? S[Ut] = At ? xt[Ut] : St[Ut] : At = !0;
          }
          var Gt = (_t ? function(Vt) {
            var fe = r(Vt.weekYear), he = tt(Vt.weekNumber, 1, nt(Vt.weekYear)), ge = tt(Vt.weekday, 1, 7);
            return fe ? he ? !ge && te("weekday", Vt.weekday) : te("week", Vt.week) : te("weekYear", Vt.weekYear);
          }(S) : C ? function(Vt) {
            var fe = r(Vt.year), he = tt(Vt.ordinal, 1, U(Vt.year));
            return fe ? !he && te("ordinal", Vt.ordinal) : te("year", Vt.year);
          }(S) : Zn(S)) || Jn(S);
          if (Gt)
            return e.invalid(Gt);
          var $t = Ye(_t ? zn(S) : C ? Bn(S) : S, f, n), Zt = new e({ ts: $t[0], zone: n, o: $t[1], loc: yt });
          return S.weekday && J && t.weekday !== Zt.weekday ? e.invalid("mismatched weekday", "you can't specify both a weekday of " + S.weekday + " and a date of " + Zt.toISO()) : Zt;
        }, e.fromISO = function(t, n) {
          n === void 0 && (n = {});
          var o = function(f) {
            return Re(f, [kr, Tr], [Or, Lr], [Cr, Ir], [xr, Ar]);
          }(t);
          return He(o[0], o[1], n, "ISO 8601", t);
        }, e.fromRFC2822 = function(t, n) {
          n === void 0 && (n = {});
          var o = function(f) {
            return Re(function(S) {
              return S.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
            }(f), [vr, yr]);
          }(t);
          return He(o[0], o[1], n, "RFC 2822", t);
        }, e.fromHTTP = function(t, n) {
          n === void 0 && (n = {});
          var o = function(f) {
            return Re(f, [Sr, Tn], [br, Tn], [wr, Er]);
          }(t);
          return He(o[0], o[1], n, "HTTP", n);
        }, e.fromFormat = function(t, n, o) {
          if (o === void 0 && (o = {}), a(t) || a(n))
            throw new st("fromFormat requires an input string and a format");
          var f = o, S = f.locale, C = S === void 0 ? null : S, D = f.numberingSystem, Y = D === void 0 ? null : D, J = function(xt, _t, St) {
            var jt = Pn(xt, _t, St);
            return [jt.result, jt.zone, jt.invalidReason];
          }(Jt.fromOpts({ locale: C, numberingSystem: Y, defaultToEN: !0 }), t, n), rt = J[0], yt = J[1], bt = J[2];
          return bt ? e.invalid(bt) : He(rt, yt, o, "format " + n, t);
        }, e.fromString = function(t, n, o) {
          return o === void 0 && (o = {}), e.fromFormat(t, n, o);
        }, e.fromSQL = function(t, n) {
          n === void 0 && (n = {});
          var o = function(f) {
            return Re(f, [Dr, Mr], [Nr, _r]);
          }(t);
          return He(o[0], o[1], n, "SQL", t);
        }, e.invalid = function(t, n) {
          if (n === void 0 && (n = null), !t)
            throw new st("need to specify a reason the DateTime is invalid");
          var o = t instanceof oe ? t : new oe(t, n);
          if (zt.throwOnInvalid)
            throw new ot(o);
          return new e({ invalid: o });
        }, e.isDateTime = function(t) {
          return t && t.isLuxonDateTime || !1;
        };
        var i = e.prototype;
        return i.get = function(t) {
          return this[t];
        }, i.resolvedLocaleOpts = function(t) {
          t === void 0 && (t = {});
          var n = Kt.create(this.loc.clone(t), t).resolvedOptions(this);
          return { locale: n.locale, numberingSystem: n.numberingSystem, outputCalendar: n.calendar };
        }, i.toUTC = function(t, n) {
          return t === void 0 && (t = 0), n === void 0 && (n = {}), this.setZone(Xt.instance(t), n);
        }, i.toLocal = function() {
          return this.setZone(zt.defaultZone);
        }, i.setZone = function(t, n) {
          var o = n === void 0 ? {} : n, f = o.keepLocalTime, S = f !== void 0 && f, C = o.keepCalendarTime, D = C !== void 0 && C;
          if ((t = Se(t, zt.defaultZone)).equals(this.zone))
            return this;
          if (t.isValid) {
            var Y = this.ts;
            if (S || D) {
              var J = t.offset(this.ts);
              Y = Ye(this.toObject(), J, t)[0];
            }
            return Fe(this, { ts: Y, zone: t });
          }
          return e.invalid($e(t));
        }, i.reconfigure = function(t) {
          var n = t === void 0 ? {} : t, o = n.locale, f = n.numberingSystem, S = n.outputCalendar;
          return Fe(this, { loc: this.loc.clone({ locale: o, numberingSystem: f, outputCalendar: S }) });
        }, i.setLocale = function(t) {
          return this.reconfigure({ locale: t });
        }, i.set = function(t) {
          if (!this.isValid)
            return this;
          var n, o = It(t, Qn, []), f = !a(o.weekYear) || !a(o.weekNumber) || !a(o.weekday), S = !a(o.ordinal), C = !a(o.year), D = !a(o.month) || !a(o.day), Y = C || D, J = o.weekYear || o.weekNumber;
          if ((Y || S) && J)
            throw new Q("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          if (D && S)
            throw new Q("Can't mix ordinal dates with month/day");
          f ? n = zn(Object.assign(ln(this.c), o)) : a(o.ordinal) ? (n = Object.assign(this.toObject(), o), a(o.day) && (n.day = Math.min(c(n.year, n.month), n.day))) : n = Bn(Object.assign(dn(this.c), o));
          var rt = Ye(n, this.o, this.zone);
          return Fe(this, { ts: rt[0], o: rt[1] });
        }, i.plus = function(t) {
          return this.isValid ? Fe(this, $n(this, ke(t))) : this;
        }, i.minus = function(t) {
          return this.isValid ? Fe(this, $n(this, ke(t).negate())) : this;
        }, i.startOf = function(t) {
          if (!this.isValid)
            return this;
          var n = {}, o = Wt.normalizeUnit(t);
          switch (o) {
            case "years":
              n.month = 1;
            case "quarters":
            case "months":
              n.day = 1;
            case "weeks":
            case "days":
              n.hour = 0;
            case "hours":
              n.minute = 0;
            case "minutes":
              n.second = 0;
            case "seconds":
              n.millisecond = 0;
          }
          if (o === "weeks" && (n.weekday = 1), o === "quarters") {
            var f = Math.ceil(this.month / 3);
            n.month = 3 * (f - 1) + 1;
          }
          return this.set(n);
        }, i.endOf = function(t) {
          var n;
          return this.isValid ? this.plus((n = {}, n[t] = 1, n)).startOf(t).minus(1) : this;
        }, i.toFormat = function(t, n) {
          return n === void 0 && (n = {}), this.isValid ? Kt.create(this.loc.redefaultToEN(n)).formatDateTimeFromString(this, t) : "Invalid DateTime";
        }, i.toLocaleString = function(t) {
          return t === void 0 && (t = Nt), this.isValid ? Kt.create(this.loc.clone(t), t).formatDateTime(this) : "Invalid DateTime";
        }, i.toLocaleParts = function(t) {
          return t === void 0 && (t = {}), this.isValid ? Kt.create(this.loc.clone(t), t).formatDateTimeParts(this) : [];
        }, i.toISO = function(t) {
          return t === void 0 && (t = {}), this.isValid ? this.toISODate(t) + "T" + this.toISOTime(t) : null;
        }, i.toISODate = function(t) {
          var n = (t === void 0 ? {} : t).format, o = (n === void 0 ? "extended" : n) === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
          return this.year > 9999 && (o = "+" + o), _e(this, o);
        }, i.toISOWeekDate = function() {
          return _e(this, "kkkk-'W'WW-c");
        }, i.toISOTime = function(t) {
          var n = t === void 0 ? {} : t, o = n.suppressMilliseconds, f = o !== void 0 && o, S = n.suppressSeconds, C = S !== void 0 && S, D = n.includeOffset, Y = D === void 0 || D, J = n.includePrefix, rt = J !== void 0 && J, yt = n.format;
          return Yn(this, { suppressSeconds: C, suppressMilliseconds: f, includeOffset: Y, includePrefix: rt, format: yt === void 0 ? "extended" : yt });
        }, i.toRFC2822 = function() {
          return _e(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
        }, i.toHTTP = function() {
          return _e(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }, i.toSQLDate = function() {
          return _e(this, "yyyy-MM-dd");
        }, i.toSQLTime = function(t) {
          var n = t === void 0 ? {} : t, o = n.includeOffset, f = o === void 0 || o, S = n.includeZone;
          return Yn(this, { includeOffset: f, includeZone: S !== void 0 && S, spaceZone: !0 });
        }, i.toSQL = function(t) {
          return t === void 0 && (t = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(t) : null;
        }, i.toString = function() {
          return this.isValid ? this.toISO() : "Invalid DateTime";
        }, i.valueOf = function() {
          return this.toMillis();
        }, i.toMillis = function() {
          return this.isValid ? this.ts : NaN;
        }, i.toSeconds = function() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }, i.toJSON = function() {
          return this.toISO();
        }, i.toBSON = function() {
          return this.toJSDate();
        }, i.toObject = function(t) {
          if (t === void 0 && (t = {}), !this.isValid)
            return {};
          var n = Object.assign({}, this.c);
          return t.includeConfig && (n.outputCalendar = this.outputCalendar, n.numberingSystem = this.loc.numberingSystem, n.locale = this.loc.locale), n;
        }, i.toJSDate = function() {
          return new Date(this.isValid ? this.ts : NaN);
        }, i.diff = function(t, n, o) {
          if (n === void 0 && (n = "milliseconds"), o === void 0 && (o = {}), !this.isValid || !t.isValid)
            return Wt.invalid(this.invalid || t.invalid, "created by diffing an invalid DateTime");
          var f, S = Object.assign({ locale: this.locale, numberingSystem: this.numberingSystem }, o), C = (f = n, Array.isArray(f) ? f : [f]).map(Wt.normalizeUnit), D = t.valueOf() > this.valueOf(), Y = Ur(D ? this : t, D ? t : this, C, S);
          return D ? Y.negate() : Y;
        }, i.diffNow = function(t, n) {
          return t === void 0 && (t = "milliseconds"), n === void 0 && (n = {}), this.diff(e.now(), t, n);
        }, i.until = function(t) {
          return this.isValid ? qe.fromDateTimes(this, t) : this;
        }, i.hasSame = function(t, n) {
          if (!this.isValid)
            return !1;
          var o = t.valueOf(), f = this.setZone(t.zone, { keepLocalTime: !0 });
          return f.startOf(n) <= o && o <= f.endOf(n);
        }, i.equals = function(t) {
          return this.isValid && t.isValid && this.valueOf() === t.valueOf() && this.zone.equals(t.zone) && this.loc.equals(t.loc);
        }, i.toRelative = function(t) {
          if (t === void 0 && (t = {}), !this.isValid)
            return null;
          var n = t.base || e.fromObject({ zone: this.zone }), o = t.padding ? this < n ? -t.padding : t.padding : 0, f = ["years", "months", "days", "hours", "minutes", "seconds"], S = t.unit;
          return Array.isArray(t.unit) && (f = t.unit, S = void 0), er(n, this.plus(o), Object.assign(t, { numeric: "always", units: f, unit: S }));
        }, i.toRelativeCalendar = function(t) {
          return t === void 0 && (t = {}), this.isValid ? er(t.base || e.fromObject({ zone: this.zone }), this, Object.assign(t, { numeric: "auto", units: ["years", "months", "days"], calendary: !0 })) : null;
        }, e.min = function() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          if (!n.every(e.isDateTime))
            throw new st("min requires all arguments be DateTimes");
          return x(n, function(f) {
            return f.valueOf();
          }, Math.min);
        }, e.max = function() {
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          if (!n.every(e.isDateTime))
            throw new st("max requires all arguments be DateTimes");
          return x(n, function(f) {
            return f.valueOf();
          }, Math.max);
        }, e.fromFormatExplain = function(t, n, o) {
          o === void 0 && (o = {});
          var f = o, S = f.locale, C = S === void 0 ? null : S, D = f.numberingSystem, Y = D === void 0 ? null : D;
          return Pn(Jt.fromOpts({ locale: C, numberingSystem: Y, defaultToEN: !0 }), t, n);
        }, e.fromStringExplain = function(t, n, o) {
          return o === void 0 && (o = {}), e.fromFormatExplain(t, n, o);
        }, h(e, [{ key: "isValid", get: function() {
          return this.invalid === null;
        } }, { key: "invalidReason", get: function() {
          return this.invalid ? this.invalid.reason : null;
        } }, { key: "invalidExplanation", get: function() {
          return this.invalid ? this.invalid.explanation : null;
        } }, { key: "locale", get: function() {
          return this.isValid ? this.loc.locale : null;
        } }, { key: "numberingSystem", get: function() {
          return this.isValid ? this.loc.numberingSystem : null;
        } }, { key: "outputCalendar", get: function() {
          return this.isValid ? this.loc.outputCalendar : null;
        } }, { key: "zone", get: function() {
          return this._zone;
        } }, { key: "zoneName", get: function() {
          return this.isValid ? this.zone.name : null;
        } }, { key: "year", get: function() {
          return this.isValid ? this.c.year : NaN;
        } }, { key: "quarter", get: function() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        } }, { key: "month", get: function() {
          return this.isValid ? this.c.month : NaN;
        } }, { key: "day", get: function() {
          return this.isValid ? this.c.day : NaN;
        } }, { key: "hour", get: function() {
          return this.isValid ? this.c.hour : NaN;
        } }, { key: "minute", get: function() {
          return this.isValid ? this.c.minute : NaN;
        } }, { key: "second", get: function() {
          return this.isValid ? this.c.second : NaN;
        } }, { key: "millisecond", get: function() {
          return this.isValid ? this.c.millisecond : NaN;
        } }, { key: "weekYear", get: function() {
          return this.isValid ? fn(this).weekYear : NaN;
        } }, { key: "weekNumber", get: function() {
          return this.isValid ? fn(this).weekNumber : NaN;
        } }, { key: "weekday", get: function() {
          return this.isValid ? fn(this).weekday : NaN;
        } }, { key: "ordinal", get: function() {
          return this.isValid ? dn(this.c).ordinal : NaN;
        } }, { key: "monthShort", get: function() {
          return this.isValid ? Ue.months("short", { locObj: this.loc })[this.month - 1] : null;
        } }, { key: "monthLong", get: function() {
          return this.isValid ? Ue.months("long", { locObj: this.loc })[this.month - 1] : null;
        } }, { key: "weekdayShort", get: function() {
          return this.isValid ? Ue.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
        } }, { key: "weekdayLong", get: function() {
          return this.isValid ? Ue.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
        } }, { key: "offset", get: function() {
          return this.isValid ? +this.o : NaN;
        } }, { key: "offsetNameShort", get: function() {
          return this.isValid ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale }) : null;
        } }, { key: "offsetNameLong", get: function() {
          return this.isValid ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale }) : null;
        } }, { key: "isOffsetFixed", get: function() {
          return this.isValid ? this.zone.universal : null;
        } }, { key: "isInDST", get: function() {
          return !this.isOffsetFixed && (this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset);
        } }, { key: "isInLeapYear", get: function() {
          return dt(this.year);
        } }, { key: "daysInMonth", get: function() {
          return c(this.year, this.month);
        } }, { key: "daysInYear", get: function() {
          return this.isValid ? U(this.year) : NaN;
        } }, { key: "weeksInWeekYear", get: function() {
          return this.isValid ? nt(this.weekYear) : NaN;
        } }], [{ key: "DATE_SHORT", get: function() {
          return Nt;
        } }, { key: "DATE_MED", get: function() {
          return Ht;
        } }, { key: "DATE_MED_WITH_WEEKDAY", get: function() {
          return j;
        } }, { key: "DATE_FULL", get: function() {
          return H;
        } }, { key: "DATE_HUGE", get: function() {
          return N;
        } }, { key: "TIME_SIMPLE", get: function() {
          return l;
        } }, { key: "TIME_WITH_SECONDS", get: function() {
          return k;
        } }, { key: "TIME_WITH_SHORT_OFFSET", get: function() {
          return I;
        } }, { key: "TIME_WITH_LONG_OFFSET", get: function() {
          return at;
        } }, { key: "TIME_24_SIMPLE", get: function() {
          return vt;
        } }, { key: "TIME_24_WITH_SECONDS", get: function() {
          return gt;
        } }, { key: "TIME_24_WITH_SHORT_OFFSET", get: function() {
          return Mt;
        } }, { key: "TIME_24_WITH_LONG_OFFSET", get: function() {
          return F;
        } }, { key: "DATETIME_SHORT", get: function() {
          return Z;
        } }, { key: "DATETIME_SHORT_WITH_SECONDS", get: function() {
          return w;
        } }, { key: "DATETIME_MED", get: function() {
          return y;
        } }, { key: "DATETIME_MED_WITH_SECONDS", get: function() {
          return ct;
        } }, { key: "DATETIME_MED_WITH_WEEKDAY", get: function() {
          return ut;
        } }, { key: "DATETIME_FULL", get: function() {
          return W;
        } }, { key: "DATETIME_FULL_WITH_SECONDS", get: function() {
          return R;
        } }, { key: "DATETIME_HUGE", get: function() {
          return ft;
        } }, { key: "DATETIME_HUGE_WITH_SECONDS", get: function() {
          return $;
        } }]), e;
      }();
      function ze(e) {
        if (Bt.isDateTime(e))
          return e;
        if (e && e.valueOf && u(e.valueOf()))
          return Bt.fromJSDate(e);
        if (e && typeof e == "object")
          return Bt.fromObject(e);
        throw new st("Unknown datetime argument: " + e + ", of type " + typeof e);
      }
      G.DateTime = Bt, G.Duration = Wt, G.FixedOffsetZone = Xt, G.IANAZone = de, G.Info = Ue, G.Interval = qe, G.InvalidZone = Qe, G.LocalZone = gn, G.Settings = zt, G.VERSION = "1.28.0", G.Zone = Ie;
    }, function(P, G, b) {
      var g = b(41);
      P.exports = function(h) {
        if (!g(h))
          throw new TypeError(h + " is not an Object");
        return h;
      };
    }, function(P, G, b) {
      var g = b(6), h = { function: !0, object: !0 };
      P.exports = function(m) {
        return g(m) && h[typeof m] || !1;
      };
    }, function(P, G, b) {
      P.exports = b(43);
    }, function(P, G, b) {
      var g = b(1), h = b(10), m = b(44), E = b(16);
      function _(L) {
        var v = new m(L), z = h(m.prototype.request, v);
        return g.extend(z, m.prototype, v), g.extend(z, v), z;
      }
      var A = _(b(13));
      A.Axios = m, A.create = function(L) {
        return _(E(A.defaults, L));
      }, A.Cancel = b(17), A.CancelToken = b(58), A.isCancel = b(12), A.all = function(L) {
        return Promise.all(L);
      }, A.spread = b(59), P.exports = A, P.exports.default = A;
    }, function(P, G, b) {
      var g = b(1), h = b(11), m = b(45), E = b(46), _ = b(16);
      function A(L) {
        this.defaults = L, this.interceptors = { request: new m(), response: new m() };
      }
      A.prototype.request = function(L) {
        typeof L == "string" ? (L = arguments[1] || {}).url = arguments[0] : L = L || {}, (L = _(this.defaults, L)).method ? L.method = L.method.toLowerCase() : this.defaults.method ? L.method = this.defaults.method.toLowerCase() : L.method = "get";
        var v = [E, void 0], z = Promise.resolve(L);
        for (this.interceptors.request.forEach(function(T) {
          v.unshift(T.fulfilled, T.rejected);
        }), this.interceptors.response.forEach(function(T) {
          v.push(T.fulfilled, T.rejected);
        }); v.length; )
          z = z.then(v.shift(), v.shift());
        return z;
      }, A.prototype.getUri = function(L) {
        return L = _(this.defaults, L), h(L.url, L.params, L.paramsSerializer).replace(/^\?/, "");
      }, g.forEach(["delete", "get", "head", "options"], function(L) {
        A.prototype[L] = function(v, z) {
          return this.request(g.merge(z || {}, { method: L, url: v }));
        };
      }), g.forEach(["post", "put", "patch"], function(L) {
        A.prototype[L] = function(v, z, T) {
          return this.request(g.merge(T || {}, { method: L, url: v, data: z }));
        };
      }), P.exports = A;
    }, function(P, G, b) {
      var g = b(1);
      function h() {
        this.handlers = [];
      }
      h.prototype.use = function(m, E) {
        return this.handlers.push({ fulfilled: m, rejected: E }), this.handlers.length - 1;
      }, h.prototype.eject = function(m) {
        this.handlers[m] && (this.handlers[m] = null);
      }, h.prototype.forEach = function(m) {
        g.forEach(this.handlers, function(E) {
          E !== null && m(E);
        });
      }, P.exports = h;
    }, function(P, G, b) {
      var g = b(1), h = b(47), m = b(12), E = b(13);
      function _(A) {
        A.cancelToken && A.cancelToken.throwIfRequested();
      }
      P.exports = function(A) {
        return _(A), A.headers = A.headers || {}, A.data = h(A.data, A.headers, A.transformRequest), A.headers = g.merge(A.headers.common || {}, A.headers[A.method] || {}, A.headers), g.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(L) {
          delete A.headers[L];
        }), (A.adapter || E.adapter)(A).then(function(L) {
          return _(A), L.data = h(L.data, L.headers, A.transformResponse), L;
        }, function(L) {
          return m(L) || (_(A), L && L.response && (L.response.data = h(L.response.data, L.response.headers, A.transformResponse))), Promise.reject(L);
        });
      };
    }, function(P, G, b) {
      var g = b(1);
      P.exports = function(h, m, E) {
        return g.forEach(E, function(_) {
          h = _(h, m);
        }), h;
      };
    }, function(P, G) {
      var b, g, h = P.exports = {};
      function m() {
        throw new Error("setTimeout has not been defined");
      }
      function E() {
        throw new Error("clearTimeout has not been defined");
      }
      function _(it) {
        if (b === setTimeout)
          return setTimeout(it, 0);
        if ((b === m || !b) && setTimeout)
          return b = setTimeout, setTimeout(it, 0);
        try {
          return b(it, 0);
        } catch {
          try {
            return b.call(null, it, 0);
          } catch {
            return b.call(this, it, 0);
          }
        }
      }
      (function() {
        try {
          b = typeof setTimeout == "function" ? setTimeout : m;
        } catch {
          b = m;
        }
        try {
          g = typeof clearTimeout == "function" ? clearTimeout : E;
        } catch {
          g = E;
        }
      })();
      var A, L = [], v = !1, z = -1;
      function T() {
        v && A && (v = !1, A.length ? L = A.concat(L) : z = -1, L.length && B());
      }
      function B() {
        if (!v) {
          var it = _(T);
          v = !0;
          for (var Q = L.length; Q; ) {
            for (A = L, L = []; ++z < Q; )
              A && A[z].run();
            z = -1, Q = L.length;
          }
          A = null, v = !1, function(et) {
            if (g === clearTimeout)
              return clearTimeout(et);
            if ((g === E || !g) && clearTimeout)
              return g = clearTimeout, clearTimeout(et);
            try {
              g(et);
            } catch {
              try {
                return g.call(null, et);
              } catch {
                return g.call(this, et);
              }
            }
          }(it);
        }
      }
      function ot(it, Q) {
        this.fun = it, this.array = Q;
      }
      function X() {
      }
      h.nextTick = function(it) {
        var Q = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var et = 1; et < arguments.length; et++)
            Q[et - 1] = arguments[et];
        L.push(new ot(it, Q)), L.length !== 1 || v || _(B);
      }, ot.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = X, h.addListener = X, h.once = X, h.off = X, h.removeListener = X, h.removeAllListeners = X, h.emit = X, h.prependListener = X, h.prependOnceListener = X, h.listeners = function(it) {
        return [];
      }, h.binding = function(it) {
        throw new Error("process.binding is not supported");
      }, h.cwd = function() {
        return "/";
      }, h.chdir = function(it) {
        throw new Error("process.chdir is not supported");
      }, h.umask = function() {
        return 0;
      };
    }, function(P, G, b) {
      var g = b(1);
      P.exports = function(h, m) {
        g.forEach(h, function(E, _) {
          _ !== m && _.toUpperCase() === m.toUpperCase() && (h[m] = E, delete h[_]);
        });
      };
    }, function(P, G, b) {
      var g = b(15);
      P.exports = function(h, m, E) {
        var _ = E.config.validateStatus;
        !_ || _(E.status) ? h(E) : m(g("Request failed with status code " + E.status, E.config, null, E.request, E));
      };
    }, function(P, G, b) {
      P.exports = function(g, h, m, E, _) {
        return g.config = h, m && (g.code = m), g.request = E, g.response = _, g.isAxiosError = !0, g.toJSON = function() {
          return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: this.config, code: this.code };
        }, g;
      };
    }, function(P, G, b) {
      var g = b(53), h = b(54);
      P.exports = function(m, E) {
        return m && !g(E) ? h(m, E) : E;
      };
    }, function(P, G, b) {
      P.exports = function(g) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(g);
      };
    }, function(P, G, b) {
      P.exports = function(g, h) {
        return h ? g.replace(/\/+$/, "") + "/" + h.replace(/^\/+/, "") : g;
      };
    }, function(P, G, b) {
      var g = b(1), h = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
      P.exports = function(m) {
        var E, _, A, L = {};
        return m && g.forEach(m.split(`
`), function(v) {
          if (A = v.indexOf(":"), E = g.trim(v.substr(0, A)).toLowerCase(), _ = g.trim(v.substr(A + 1)), E) {
            if (L[E] && h.indexOf(E) >= 0)
              return;
            L[E] = E === "set-cookie" ? (L[E] ? L[E] : []).concat([_]) : L[E] ? L[E] + ", " + _ : _;
          }
        }), L;
      };
    }, function(P, G, b) {
      var g = b(1);
      P.exports = g.isStandardBrowserEnv() ? function() {
        var h, m = /(msie|trident)/i.test(navigator.userAgent), E = document.createElement("a");
        function _(A) {
          var L = A;
          return m && (E.setAttribute("href", L), L = E.href), E.setAttribute("href", L), { href: E.href, protocol: E.protocol ? E.protocol.replace(/:$/, "") : "", host: E.host, search: E.search ? E.search.replace(/^\?/, "") : "", hash: E.hash ? E.hash.replace(/^#/, "") : "", hostname: E.hostname, port: E.port, pathname: E.pathname.charAt(0) === "/" ? E.pathname : "/" + E.pathname };
        }
        return h = _(window.location.href), function(A) {
          var L = g.isString(A) ? _(A) : A;
          return L.protocol === h.protocol && L.host === h.host;
        };
      }() : function() {
        return !0;
      };
    }, function(P, G, b) {
      var g = b(1);
      P.exports = g.isStandardBrowserEnv() ? { write: function(h, m, E, _, A, L) {
        var v = [];
        v.push(h + "=" + encodeURIComponent(m)), g.isNumber(E) && v.push("expires=" + new Date(E).toGMTString()), g.isString(_) && v.push("path=" + _), g.isString(A) && v.push("domain=" + A), L === !0 && v.push("secure"), document.cookie = v.join("; ");
      }, read: function(h) {
        var m = document.cookie.match(new RegExp("(^|;\\s*)(" + h + ")=([^;]*)"));
        return m ? decodeURIComponent(m[3]) : null;
      }, remove: function(h) {
        this.write(h, "", Date.now() - 864e5);
      } } : { write: function() {
      }, read: function() {
        return null;
      }, remove: function() {
      } };
    }, function(P, G, b) {
      var g = b(17);
      function h(m) {
        if (typeof m != "function")
          throw new TypeError("executor must be a function.");
        var E;
        this.promise = new Promise(function(A) {
          E = A;
        });
        var _ = this;
        m(function(A) {
          _.reason || (_.reason = new g(A), E(_.reason));
        });
      }
      h.prototype.throwIfRequested = function() {
        if (this.reason)
          throw this.reason;
      }, h.source = function() {
        var m;
        return { token: new h(function(E) {
          m = E;
        }), cancel: m };
      }, P.exports = h;
    }, function(P, G, b) {
      P.exports = function(g) {
        return function(h) {
          return g.apply(null, h);
        };
      };
    }, function(P, G, b) {
      b.r(G);
      var g = b(4), h = b(20);
      function m(L, v) {
        if (!(L instanceof v))
          throw new TypeError("Cannot call a class as a function");
      }
      function E(L, v) {
        for (var z = 0; z < v.length; z++) {
          var T = v[z];
          T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(L, T.key, T);
        }
      }
      var _ = function() {
        return { loadPath: "/locales/{{lng}}/{{ns}}.json", addPath: "/locales/add/{{lng}}/{{ns}}", allowMultiLoading: !1, parse: function(L) {
          return JSON.parse(L);
        }, stringify: JSON.stringify, parsePayload: function(L, v, z) {
          return function(T, B, ot) {
            return B in T ? Object.defineProperty(T, B, { value: ot, enumerable: !0, configurable: !0, writable: !0 }) : T[B] = ot, T;
          }({}, v, z || "");
        }, request: h.a, reloadInterval: typeof window > "u" && 36e5, customHeaders: {}, queryStringParams: {}, crossDomain: !1, withCredentials: !1, overrideMimeType: !1, requestOptions: { mode: "cors", credentials: "same-origin", cache: "default" } };
      }, A = function() {
        function L(T) {
          var B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ot = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          m(this, L), this.services = T, this.options = B, this.allOptions = ot, this.type = "backend", this.init(T, B, ot);
        }
        var v, z;
        return v = L, (z = [{ key: "init", value: function(T) {
          var B = this, ot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          this.services = T, this.options = Object(g.a)(ot, this.options || {}, _()), this.allOptions = X, this.services && this.options.reloadInterval && setInterval(function() {
            return B.reload();
          }, this.options.reloadInterval);
        } }, { key: "readMulti", value: function(T, B, ot) {
          this._readAny(T, T, B, B, ot);
        } }, { key: "read", value: function(T, B, ot) {
          this._readAny([T], T, [B], B, ot);
        } }, { key: "_readAny", value: function(T, B, ot, X, it) {
          var Q = this, et = this.options.loadPath;
          typeof this.options.loadPath == "function" && (et = this.options.loadPath(T, ot)), (et = Object(g.c)(et)).then(function(st) {
            var K = Q.services.interpolator.interpolate(st, { lng: T.join("+"), ns: ot.join("+") });
            Q.loadUrl(K, it, B, X);
          });
        } }, { key: "loadUrl", value: function(T, B, ot, X) {
          var it = this;
          this.options.request(this.options, T, void 0, function(Q, et) {
            if (et && (et.status >= 500 && et.status < 600 || !et.status))
              return B("failed loading " + T + "; status code: " + et.status, !0);
            if (et && et.status >= 400 && et.status < 500)
              return B("failed loading " + T + "; status code: " + et.status, !1);
            if (!et && Q && Q.message && Q.message.indexOf("Failed to fetch") > -1)
              return B("failed loading " + T + ": " + Q.message, !0);
            if (Q)
              return B(Q, !1);
            var st, K;
            try {
              st = typeof et.data == "string" ? it.options.parse(et.data, ot, X) : et.data;
            } catch {
              K = "failed parsing " + T + " to json";
            }
            if (K)
              return B(K, !1);
            B(null, st);
          });
        } }, { key: "create", value: function(T, B, ot, X, it) {
          var Q = this;
          if (this.options.addPath) {
            typeof T == "string" && (T = [T]);
            var et = this.options.parsePayload(B, ot, X), st = 0, K = [], M = [];
            T.forEach(function(kt) {
              var Ct = Q.options.addPath;
              typeof Q.options.addPath == "function" && (Ct = Q.options.addPath(kt, B));
              var Nt = Q.services.interpolator.interpolate(Ct, { lng: kt, ns: B });
              Q.options.request(Q.options, Nt, et, function(Ht, j) {
                st += 1, K.push(Ht), M.push(j), st === T.length && it && it(K, M);
              });
            });
          }
        } }, { key: "reload", value: function() {
          var T = this, B = this.services, ot = B.backendConnector, X = B.languageUtils, it = B.logger, Q = ot.language;
          if (!Q || Q.toLowerCase() !== "cimode") {
            var et = [], st = function(K) {
              X.toResolveHierarchy(K).forEach(function(M) {
                et.indexOf(M) < 0 && et.push(M);
              });
            };
            st(Q), this.allOptions.preload && this.allOptions.preload.forEach(function(K) {
              return st(K);
            }), et.forEach(function(K) {
              T.allOptions.ns.forEach(function(M) {
                ot.read(K, M, "read", null, null, function(kt, Ct) {
                  kt && it.warn("loading namespace ".concat(M, " for language ").concat(K, " failed"), kt), !kt && Ct && it.log("loaded namespace ".concat(M, " for language ").concat(K), Ct), ot.loaded("".concat(K, "|").concat(M), kt, Ct);
                });
              });
            });
          }
        } }]) && E(v.prototype, z), L;
      }();
      A.type = "backend", G.default = A;
    }, function(P, G) {
      var b = typeof self < "u" ? self : this, g = function() {
        function m() {
          this.fetch = !1, this.DOMException = b.DOMException;
        }
        return m.prototype = b, new m();
      }();
      (function(m) {
        (function(E) {
          var _ = "URLSearchParams" in m, A = "Symbol" in m && "iterator" in Symbol, L = "FileReader" in m && "Blob" in m && function() {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          }(), v = "FormData" in m, z = "ArrayBuffer" in m;
          if (z)
            var T = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], B = ArrayBuffer.isView || function(l) {
              return l && T.indexOf(Object.prototype.toString.call(l)) > -1;
            };
          function ot(l) {
            if (typeof l != "string" && (l = String(l)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(l))
              throw new TypeError("Invalid character in header field name");
            return l.toLowerCase();
          }
          function X(l) {
            return typeof l != "string" && (l = String(l)), l;
          }
          function it(l) {
            var k = { next: function() {
              var I = l.shift();
              return { done: I === void 0, value: I };
            } };
            return A && (k[Symbol.iterator] = function() {
              return k;
            }), k;
          }
          function Q(l) {
            this.map = {}, l instanceof Q ? l.forEach(function(k, I) {
              this.append(I, k);
            }, this) : Array.isArray(l) ? l.forEach(function(k) {
              this.append(k[0], k[1]);
            }, this) : l && Object.getOwnPropertyNames(l).forEach(function(k) {
              this.append(k, l[k]);
            }, this);
          }
          function et(l) {
            if (l.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            l.bodyUsed = !0;
          }
          function st(l) {
            return new Promise(function(k, I) {
              l.onload = function() {
                k(l.result);
              }, l.onerror = function() {
                I(l.error);
              };
            });
          }
          function K(l) {
            var k = new FileReader(), I = st(k);
            return k.readAsArrayBuffer(l), I;
          }
          function M(l) {
            if (l.slice)
              return l.slice(0);
            var k = new Uint8Array(l.byteLength);
            return k.set(new Uint8Array(l)), k.buffer;
          }
          function kt() {
            return this.bodyUsed = !1, this._initBody = function(l) {
              var k;
              this._bodyInit = l, l ? typeof l == "string" ? this._bodyText = l : L && Blob.prototype.isPrototypeOf(l) ? this._bodyBlob = l : v && FormData.prototype.isPrototypeOf(l) ? this._bodyFormData = l : _ && URLSearchParams.prototype.isPrototypeOf(l) ? this._bodyText = l.toString() : z && L && (k = l) && DataView.prototype.isPrototypeOf(k) ? (this._bodyArrayBuffer = M(l.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : z && (ArrayBuffer.prototype.isPrototypeOf(l) || B(l)) ? this._bodyArrayBuffer = M(l) : this._bodyText = l = Object.prototype.toString.call(l) : this._bodyText = "", this.headers.get("content-type") || (typeof l == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _ && URLSearchParams.prototype.isPrototypeOf(l) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }, L && (this.blob = function() {
              var l = et(this);
              if (l)
                return l;
              if (this._bodyBlob)
                return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }, this.arrayBuffer = function() {
              return this._bodyArrayBuffer ? et(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(K);
            }), this.text = function() {
              var l, k, I, at = et(this);
              if (at)
                return at;
              if (this._bodyBlob)
                return l = this._bodyBlob, k = new FileReader(), I = st(k), k.readAsText(l), I;
              if (this._bodyArrayBuffer)
                return Promise.resolve(function(vt) {
                  for (var gt = new Uint8Array(vt), Mt = new Array(gt.length), F = 0; F < gt.length; F++)
                    Mt[F] = String.fromCharCode(gt[F]);
                  return Mt.join("");
                }(this._bodyArrayBuffer));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }, v && (this.formData = function() {
              return this.text().then(Ht);
            }), this.json = function() {
              return this.text().then(JSON.parse);
            }, this;
          }
          Q.prototype.append = function(l, k) {
            l = ot(l), k = X(k);
            var I = this.map[l];
            this.map[l] = I ? I + ", " + k : k;
          }, Q.prototype.delete = function(l) {
            delete this.map[ot(l)];
          }, Q.prototype.get = function(l) {
            return l = ot(l), this.has(l) ? this.map[l] : null;
          }, Q.prototype.has = function(l) {
            return this.map.hasOwnProperty(ot(l));
          }, Q.prototype.set = function(l, k) {
            this.map[ot(l)] = X(k);
          }, Q.prototype.forEach = function(l, k) {
            for (var I in this.map)
              this.map.hasOwnProperty(I) && l.call(k, this.map[I], I, this);
          }, Q.prototype.keys = function() {
            var l = [];
            return this.forEach(function(k, I) {
              l.push(I);
            }), it(l);
          }, Q.prototype.values = function() {
            var l = [];
            return this.forEach(function(k) {
              l.push(k);
            }), it(l);
          }, Q.prototype.entries = function() {
            var l = [];
            return this.forEach(function(k, I) {
              l.push([I, k]);
            }), it(l);
          }, A && (Q.prototype[Symbol.iterator] = Q.prototype.entries);
          var Ct = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function Nt(l, k) {
            var I, at, vt = (k = k || {}).body;
            if (l instanceof Nt) {
              if (l.bodyUsed)
                throw new TypeError("Already read");
              this.url = l.url, this.credentials = l.credentials, k.headers || (this.headers = new Q(l.headers)), this.method = l.method, this.mode = l.mode, this.signal = l.signal, vt || l._bodyInit == null || (vt = l._bodyInit, l.bodyUsed = !0);
            } else
              this.url = String(l);
            if (this.credentials = k.credentials || this.credentials || "same-origin", !k.headers && this.headers || (this.headers = new Q(k.headers)), this.method = (I = k.method || this.method || "GET", at = I.toUpperCase(), Ct.indexOf(at) > -1 ? at : I), this.mode = k.mode || this.mode || null, this.signal = k.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && vt)
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(vt);
          }
          function Ht(l) {
            var k = new FormData();
            return l.trim().split("&").forEach(function(I) {
              if (I) {
                var at = I.split("="), vt = at.shift().replace(/\+/g, " "), gt = at.join("=").replace(/\+/g, " ");
                k.append(decodeURIComponent(vt), decodeURIComponent(gt));
              }
            }), k;
          }
          function j(l, k) {
            k || (k = {}), this.type = "default", this.status = k.status === void 0 ? 200 : k.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in k ? k.statusText : "OK", this.headers = new Q(k.headers), this.url = k.url || "", this._initBody(l);
          }
          Nt.prototype.clone = function() {
            return new Nt(this, { body: this._bodyInit });
          }, kt.call(Nt.prototype), kt.call(j.prototype), j.prototype.clone = function() {
            return new j(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new Q(this.headers), url: this.url });
          }, j.error = function() {
            var l = new j(null, { status: 0, statusText: "" });
            return l.type = "error", l;
          };
          var H = [301, 302, 303, 307, 308];
          j.redirect = function(l, k) {
            if (H.indexOf(k) === -1)
              throw new RangeError("Invalid status code");
            return new j(null, { status: k, headers: { location: l } });
          }, E.DOMException = m.DOMException;
          try {
            new E.DOMException();
          } catch {
            E.DOMException = function(k, I) {
              this.message = k, this.name = I;
              var at = Error(k);
              this.stack = at.stack;
            }, E.DOMException.prototype = Object.create(Error.prototype), E.DOMException.prototype.constructor = E.DOMException;
          }
          function N(l, k) {
            return new Promise(function(I, at) {
              var vt = new Nt(l, k);
              if (vt.signal && vt.signal.aborted)
                return at(new E.DOMException("Aborted", "AbortError"));
              var gt = new XMLHttpRequest();
              function Mt() {
                gt.abort();
              }
              gt.onload = function() {
                var F, Z, w = { status: gt.status, statusText: gt.statusText, headers: (F = gt.getAllResponseHeaders() || "", Z = new Q(), F.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(ct) {
                  var ut = ct.split(":"), W = ut.shift().trim();
                  if (W) {
                    var R = ut.join(":").trim();
                    Z.append(W, R);
                  }
                }), Z) };
                w.url = "responseURL" in gt ? gt.responseURL : w.headers.get("X-Request-URL");
                var y = "response" in gt ? gt.response : gt.responseText;
                I(new j(y, w));
              }, gt.onerror = function() {
                at(new TypeError("Network request failed"));
              }, gt.ontimeout = function() {
                at(new TypeError("Network request failed"));
              }, gt.onabort = function() {
                at(new E.DOMException("Aborted", "AbortError"));
              }, gt.open(vt.method, vt.url, !0), vt.credentials === "include" ? gt.withCredentials = !0 : vt.credentials === "omit" && (gt.withCredentials = !1), "responseType" in gt && L && (gt.responseType = "blob"), vt.headers.forEach(function(F, Z) {
                gt.setRequestHeader(Z, F);
              }), vt.signal && (vt.signal.addEventListener("abort", Mt), gt.onreadystatechange = function() {
                gt.readyState === 4 && vt.signal.removeEventListener("abort", Mt);
              }), gt.send(vt._bodyInit === void 0 ? null : vt._bodyInit);
            });
          }
          N.polyfill = !0, m.fetch || (m.fetch = N, m.Headers = Q, m.Request = Nt, m.Response = j), E.Headers = Q, E.Request = Nt, E.Response = j, E.fetch = N, Object.defineProperty(E, "__esModule", { value: !0 });
        })({});
      })(g), g.fetch.ponyfill = !0, delete g.fetch.polyfill;
      var h = g;
      (G = h.fetch).default = h.fetch, G.fetch = h.fetch, G.Headers = h.Headers, G.Request = h.Request, G.Response = h.Response, P.exports = G;
    }, function(P, G, b) {
      b.r(G);
      var g = b(2), h = b(3), m = [], E = m.forEach, _ = m.slice;
      function A(j) {
        return E.call(_.call(arguments, 1), function(H) {
          if (H)
            for (var N in H)
              j[N] === void 0 && (j[N] = H[N]);
        }), j;
      }
      var L = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, v = function(j, H, N) {
        var l = N || {};
        l.path = l.path || "/";
        var k = j + "=" + encodeURIComponent(H);
        if (l.maxAge > 0) {
          var I = l.maxAge - 0;
          if (isNaN(I))
            throw new Error("maxAge should be a Number");
          k += "; Max-Age=" + Math.floor(I);
        }
        if (l.domain) {
          if (!L.test(l.domain))
            throw new TypeError("option domain is invalid");
          k += "; Domain=" + l.domain;
        }
        if (l.path) {
          if (!L.test(l.path))
            throw new TypeError("option path is invalid");
          k += "; Path=" + l.path;
        }
        if (l.expires) {
          if (typeof l.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
          k += "; Expires=" + l.expires.toUTCString();
        }
        if (l.httpOnly && (k += "; HttpOnly"), l.secure && (k += "; Secure"), l.sameSite)
          switch (typeof l.sameSite == "string" ? l.sameSite.toLowerCase() : l.sameSite) {
            case !0:
              k += "; SameSite=Strict";
              break;
            case "lax":
              k += "; SameSite=Lax";
              break;
            case "strict":
              k += "; SameSite=Strict";
              break;
            case "none":
              k += "; SameSite=None";
              break;
            default:
              throw new TypeError("option sameSite is invalid");
          }
        return k;
      }, z = function(j, H, N, l) {
        var k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { path: "/", sameSite: "strict" };
        N && (k.expires = new Date(), k.expires.setTime(k.expires.getTime() + 60 * N * 1e3)), l && (k.domain = l), document.cookie = v(j, encodeURIComponent(H), k);
      }, T = function(j) {
        for (var H = j + "=", N = document.cookie.split(";"), l = 0; l < N.length; l++) {
          for (var k = N[l]; k.charAt(0) === " "; )
            k = k.substring(1, k.length);
          if (k.indexOf(H) === 0)
            return k.substring(H.length, k.length);
        }
        return null;
      }, B = { name: "cookie", lookup: function(j) {
        var H;
        if (j.lookupCookie && typeof document < "u") {
          var N = T(j.lookupCookie);
          N && (H = N);
        }
        return H;
      }, cacheUserLanguage: function(j, H) {
        H.lookupCookie && typeof document < "u" && z(H.lookupCookie, j, H.cookieMinutes, H.cookieDomain, H.cookieOptions);
      } }, ot = { name: "querystring", lookup: function(j) {
        var H;
        if (typeof window < "u")
          for (var N = window.location.search.substring(1).split("&"), l = 0; l < N.length; l++) {
            var k = N[l].indexOf("=");
            k > 0 && N[l].substring(0, k) === j.lookupQuerystring && (H = N[l].substring(k + 1));
          }
        return H;
      } }, X = null, it = function() {
        if (X !== null)
          return X;
        try {
          X = window !== "undefined" && window.localStorage !== null, window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo");
        } catch {
          X = !1;
        }
        return X;
      }, Q = { name: "localStorage", lookup: function(j) {
        var H;
        if (j.lookupLocalStorage && it()) {
          var N = window.localStorage.getItem(j.lookupLocalStorage);
          N && (H = N);
        }
        return H;
      }, cacheUserLanguage: function(j, H) {
        H.lookupLocalStorage && it() && window.localStorage.setItem(H.lookupLocalStorage, j);
      } }, et = null, st = function() {
        if (et !== null)
          return et;
        try {
          et = window !== "undefined" && window.sessionStorage !== null, window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo");
        } catch {
          et = !1;
        }
        return et;
      }, K = { name: "sessionStorage", lookup: function(j) {
        var H;
        if (j.lookupSessionStorage && st()) {
          var N = window.sessionStorage.getItem(j.lookupSessionStorage);
          N && (H = N);
        }
        return H;
      }, cacheUserLanguage: function(j, H) {
        H.lookupSessionStorage && st() && window.sessionStorage.setItem(H.lookupSessionStorage, j);
      } }, M = { name: "navigator", lookup: function(j) {
        var H = [];
        if (typeof navigator < "u") {
          if (navigator.languages)
            for (var N = 0; N < navigator.languages.length; N++)
              H.push(navigator.languages[N]);
          navigator.userLanguage && H.push(navigator.userLanguage), navigator.language && H.push(navigator.language);
        }
        return H.length > 0 ? H : void 0;
      } }, kt = { name: "htmlTag", lookup: function(j) {
        var H, N = j.htmlTag || (typeof document < "u" ? document.documentElement : null);
        return N && typeof N.getAttribute == "function" && (H = N.getAttribute("lang")), H;
      } }, Ct = { name: "path", lookup: function(j) {
        var H;
        if (typeof window < "u") {
          var N = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
          if (N instanceof Array)
            if (typeof j.lookupFromPathIndex == "number") {
              if (typeof N[j.lookupFromPathIndex] != "string")
                return;
              H = N[j.lookupFromPathIndex].replace("/", "");
            } else
              H = N[0].replace("/", "");
        }
        return H;
      } }, Nt = { name: "subdomain", lookup: function(j) {
        var H;
        if (typeof window < "u") {
          var N = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
          N instanceof Array && (H = typeof j.lookupFromSubdomainIndex == "number" ? N[j.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : N[0].replace("http://", "").replace("https://", "").replace(".", ""));
        }
        return H;
      } }, Ht = function() {
        function j(H) {
          var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          Object(g.a)(this, j), this.type = "languageDetector", this.detectors = {}, this.init(H, N);
        }
        return Object(h.a)(j, [{ key: "init", value: function(H) {
          var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          this.services = H, this.options = A(N, this.options || {}, { order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"], lookupQuerystring: "lng", lookupCookie: "i18next", lookupLocalStorage: "i18nextLng", lookupSessionStorage: "i18nextLng", caches: ["localStorage"], excludeCacheFor: ["cimode"] }), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = l, this.addDetector(B), this.addDetector(ot), this.addDetector(Q), this.addDetector(K), this.addDetector(M), this.addDetector(kt), this.addDetector(Ct), this.addDetector(Nt);
        } }, { key: "addDetector", value: function(H) {
          this.detectors[H.name] = H;
        } }, { key: "detect", value: function(H) {
          var N = this;
          H || (H = this.options.order);
          var l = [];
          return H.forEach(function(k) {
            if (N.detectors[k]) {
              var I = N.detectors[k].lookup(N.options);
              I && typeof I == "string" && (I = [I]), I && (l = l.concat(I));
            }
          }), this.services.languageUtils.getBestMatchFromCodes ? l : l.length > 0 ? l[0] : null;
        } }, { key: "cacheUserLanguage", value: function(H, N) {
          var l = this;
          N || (N = this.options.caches), N && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(H) > -1 || N.forEach(function(k) {
            l.detectors[k] && l.detectors[k].cacheUserLanguage(H, l.options);
          }));
        } }]), j;
      }();
      Ht.type = "languageDetector", G.default = Ht;
    }, function(P, G, b) {
      b.r(G), b.d(G, "Desktop", function() {
        return dt;
      });
      var g = b(0);
      const h = Object(g.createLogger)("agentx-js-api"), m = (U, c) => ({ info: (...p) => U.info(c, ...p), warn: (...p) => U.warn(c, ...p), error: (...p) => U.error(c, ...p) });
      class E {
        constructor(c) {
          this.logger = c.logger;
        }
        check(c) {
          return c ? !!c.isInited || (this.logger.error("SERVICE still not initialized... Await it's init(...) first."), !1) : (this.logger.error("SERVICE is not defined..."), !1);
        }
      }
      const _ = (U) => new E(U);
      var A = function(U, c, p, nt) {
        return new (p || (p = Promise))(function(ht, lt) {
          function Tt(mt) {
            try {
              It(nt.next(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function Rt(mt) {
            try {
              It(nt.throw(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function It(mt) {
            var Et;
            mt.done ? ht(mt.value) : (Et = mt.value, Et instanceof p ? Et : new p(function(Pt) {
              Pt(Et);
            })).then(Tt, Rt);
          }
          It((nt = nt.apply(U, c || [])).next());
        });
      };
      const L = { rps: 120, tag: "jsapi" }, v = { rps: 0, tag: "jsapi" }, z = { tag: "jsapi" }, T = (U) => U.actionsChannels.createSource("fireGeneralSilentNotification/Req", L), B = (U) => U.actionsChannels.createSource("fireGeneralAutoDismissNotification/Req", v), ot = (U) => U.actionsChannels.createDestination("fireGeneralAutoDismissNotification/Res", v), X = (U) => U.actionsChannels.createSource("fireGeneralAcknowledgeNotification/Req", v), it = (U) => U.actionsChannels.createDestination("fireGeneralAcknowledgeNotification/Res", v), Q = (U) => U.actionsChannels.createSource("addCustomTask", L), et = (U) => U.actionsChannels.createSource("getToken/Req", v), st = (U) => U.actionsChannels.createDestination("getToken/Res", z), K = (U) => U.actionsChannels.createSource("getTaskMap/Req", v), M = (U) => U.actionsChannels.createDestination("getTaskMap/Res", z), kt = (U) => U.actionsChannels.createSource("getMediaTypeQueue/Req", v), Ct = (U) => U.actionsChannels.createDestination("getMediaTypeQueue/Res", z), Nt = (U) => U.actionsChannels.createSource("getIdleCodes/Req", v), Ht = (U) => U.actionsChannels.createDestination("getIdleCodes/Res", z), j = (U) => U.actionsChannels.createSource("getWrapUpCodes/Req", v), H = (U) => U.actionsChannels.createDestination("getWrapUpCodes/Res", z);
      class N {
        constructor(c) {
          this.lastReqTs = Date.now(), this.lastReqN = 0, this.toggleMiximizeRestore = (p) => {
            var nt;
            if (p && p.target) {
              const ht = (nt = this.getClosestElement(p.target, ".dynamic-widget-wrapper")) === null || nt === void 0 ? void 0 : nt.id;
              if (ht) {
                const lt = new CustomEvent("toggle-maximize-restore", { detail: { widgetId: ht } });
                window.dispatchEvent(lt), h.info("Dispatching toggle-maximize-restore event for widgetId:", ht);
              }
            }
          }, this.logger = c.logger, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        getNextReqId() {
          const c = Date.now();
          return this.lastReqTs !== c ? (this.lastReqTs = c, this.lastReqN = 0) : this.lastReqN++, `${this.lastReqTs}_${this.lastReqN}`;
        }
        init(c) {
          c && (this.SERVICE = c), this.checkService() && (this.sourceActionsChannels = { fireGeneralSilentNotification: T(this.SERVICE), fireGeneralAutoDismissNotification: B(this.SERVICE), fireGeneralAcknowledgeNotification: X(this.SERVICE), addCustomTask: Q(this.SERVICE), getToken: et(this.SERVICE), getTaskMap: K(this.SERVICE), getMediaTypeQueue: kt(this.SERVICE), getIdleCodes: Nt(this.SERVICE), getWrapUpCodes: j(this.SERVICE) }, this.destinationActionsChannels = { fireGeneralAutoDismissNotification: ot(this.SERVICE), fireGeneralAcknowledgeNotification: it(this.SERVICE), getToken: st(this.SERVICE), getTaskMap: M(this.SERVICE), getMediaTypeQueue: Ct(this.SERVICE), getIdleCodes: Ht(this.SERVICE), getWrapUpCodes: H(this.SERVICE) }, this.logger.info("Inited"));
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        fireGeneralSilentNotification(...c) {
          this.checkService() && this.sourceActionsChannels.fireGeneralSilentNotification.send(...c);
        }
        fireGeneralAutoDismissNotification(...c) {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((p) => {
                const nt = this.getNextReqId(), ht = ({ args: [lt, Tt, Rt, It] }) => {
                  It === nt && (Rt !== g.Notifications.ItemMeta.Mode.AutoDismiss && Rt !== g.Notifications.ItemMeta.Mode.Silent || lt === g.Notifications.ItemMeta.Status.Deactivated && (p([lt, Tt, Rt]), this.destinationActionsChannels.fireGeneralAutoDismissNotification.removeListener(ht)));
                };
                this.destinationActionsChannels.fireGeneralAutoDismissNotification.addListener(ht), this.sourceActionsChannels.fireGeneralAutoDismissNotification.send(...c);
              });
          });
        }
        fireGeneralAcknowledgeNotification(...c) {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((p) => {
                const nt = this.getNextReqId(), ht = ({ args: [lt, Tt, Rt, It] }) => {
                  It === nt && (Rt !== g.Notifications.ItemMeta.Mode.Acknowledge && Rt !== g.Notifications.ItemMeta.Mode.Silent || lt === g.Notifications.ItemMeta.Status.Deactivated && (p([lt, Tt, Rt]), this.destinationActionsChannels.fireGeneralAcknowledgeNotification.removeListener(ht)));
                };
                this.destinationActionsChannels.fireGeneralAcknowledgeNotification.addListener(ht), this.sourceActionsChannels.fireGeneralAcknowledgeNotification.send(...c);
              });
          });
        }
        addCustomTask(...c) {
          this.checkService() && this.sourceActionsChannels.addCustomTask.send(...c);
        }
        getTaskMap() {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((c) => {
                const p = this.getNextReqId(), nt = ({ args: [ht, lt] }) => {
                  lt === p && (c(ht), this.destinationActionsChannels.getTaskMap.removeListener(nt));
                };
                this.destinationActionsChannels.getTaskMap.addListener(nt), this.sourceActionsChannels.getTaskMap.send(p);
              });
          });
        }
        getMediaTypeQueue(c) {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((p) => {
                const nt = this.getNextReqId(), ht = ({ args: [lt, Tt] }) => {
                  Tt === nt && (p(lt), this.destinationActionsChannels.getMediaTypeQueue.removeListener(ht));
                };
                this.destinationActionsChannels.getMediaTypeQueue.addListener(ht), this.sourceActionsChannels.getMediaTypeQueue.send(c, nt);
              });
          });
        }
        getToken() {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((c) => {
                const p = this.getNextReqId(), nt = ({ args: [ht, lt] }) => {
                  lt === p && (c(ht), this.destinationActionsChannels.getToken.removeListener(nt));
                };
                this.destinationActionsChannels.getToken.addListener(nt), this.sourceActionsChannels.getToken.send(p);
              });
          });
        }
        getIdleCodes() {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((c) => {
                const p = this.getNextReqId(), nt = ({ args: [ht, lt] }) => {
                  lt === p && (c(ht), this.destinationActionsChannels.getIdleCodes.removeListener(nt));
                };
                this.destinationActionsChannels.getIdleCodes.addListener(nt), this.sourceActionsChannels.getIdleCodes.send(p);
              });
          });
        }
        getWrapUpCodes() {
          return A(this, void 0, void 0, function* () {
            if (this.checkService())
              return yield new Promise((c) => {
                const p = this.getNextReqId(), nt = ({ args: [ht, lt] }) => {
                  lt === p && (c(ht), this.destinationActionsChannels.getWrapUpCodes.removeListener(nt));
                };
                this.destinationActionsChannels.getWrapUpCodes.addListener(nt), this.sourceActionsChannels.getWrapUpCodes.send(p);
              });
          });
        }
        getClosestElement(c, p) {
          return c && c !== document && c !== window ? c instanceof ShadowRoot ? this.getClosestElement(c.host, p) : c instanceof HTMLElement && c.matches(p) ? c : this.getClosestElement(c.parentNode, p) : null;
        }
      }
      const l = m(h, "[Actions JSAPI] =>");
      class k {
        constructor(c) {
          this.isInited = !1, this.listeners = /* @__PURE__ */ new Map(), this.listenersOnce = /* @__PURE__ */ new Map(), this.logger = c.logger;
        }
        init(c) {
          this.aqmServiceEntity = c.aqmServiceEntity, this.aqmServiceEntityString = c.aqmServiceEntityString, this.isInited = !0;
        }
        cleanup() {
          this.removeAllEventListeners(), this.aqmServiceEntity = void 0, this.aqmServiceEntityString = void 0, this.isInited = !1;
        }
        _addEventListener(c, p, nt) {
          var ht, lt, Tt;
          const Rt = nt ? "listenersOnce" : "listeners";
          this[Rt].has(c) || this[Rt].set(c, /* @__PURE__ */ new Map());
          const It = this[Rt].get(c), mt = nt ? "listenOnce" : "listen", Et = (Pt) => {
            let Dt = null;
            return nt && (Dt = this.aqmServiceEntity[c].listenOnce(() => this.removeOnceEventListener(c, p))), () => {
              var Qt;
              if (Pt) {
                nt ? (Pt.stopListenOnce(), Dt && Dt.stopListenOnce()) : Pt.stopListen();
                const Yt = [];
                Yt.push(`UnBound "${c}"`), nt && Yt.push("Once"), this.aqmServiceEntityString && Yt.push(`from "${this.aqmServiceEntityString}"`), (Qt = this.logger) === null || Qt === void 0 || Qt.info(Yt.join(" "));
              }
            };
          };
          if (this.aqmServiceEntity)
            if (c in this.aqmServiceEntity && mt in this.aqmServiceEntity[c]) {
              const Pt = this.aqmServiceEntity[c][mt](p);
              It.set(p, Et(Pt));
              const Dt = [];
              Dt.push(`Bound "${c}"`), nt && Dt.push("Once"), this.aqmServiceEntityString && Dt.push(`to "${this.aqmServiceEntityString}"`), (ht = this.logger) === null || ht === void 0 || ht.info(Dt.join(" "));
            } else
              (lt = this.logger) === null || lt === void 0 || lt.warn(`EventName "${c}" is not recognized, so won't be subscribed...`);
          else
            (Tt = this.logger) === null || Tt === void 0 || Tt.error(`"${this.aqmServiceEntityString}" is not ready yet. .init(...) first...`);
        }
        _removeEventListener(c, p, nt) {
          const ht = nt ? "listenersOnce" : "listeners";
          if (this[ht].has(c)) {
            const lt = this[ht].get(c);
            lt && (lt.has(p) && (lt.get(p)(), lt.delete(p)), lt.size < 1 && this[ht].delete(c));
          }
        }
        addEventListener(c, p) {
          this._addEventListener(c, p, !1);
        }
        addOnceEventListener(c, p) {
          this._addEventListener(c, p, !0);
        }
        removeEventListener(c, p) {
          this._removeEventListener(c, p, !1);
        }
        removeOnceEventListener(c, p) {
          this._removeEventListener(c, p, !0);
        }
        removeAllEventListeners() {
          ["listeners", "listenersOnce"].forEach((c) => {
            this[c].forEach((p, nt) => {
              p.forEach((ht, lt) => ht()), p.clear();
            }), this[c].clear();
          });
        }
      }
      const I = (U) => new k(U);
      var at = function(U, c, p, nt) {
        return new (p || (p = Promise))(function(ht, lt) {
          function Tt(mt) {
            try {
              It(nt.next(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function Rt(mt) {
            try {
              It(nt.throw(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function It(mt) {
            var Et;
            mt.done ? ht(mt.value) : (Et = mt.value, Et instanceof p ? Et : new p(function(Pt) {
              Pt(Et);
            })).then(Tt, Rt);
          }
          It((nt = nt.apply(U, c || [])).next());
        });
      };
      class vt {
        constructor(c) {
          this.logger = c.logger, this.aqmEvents = c.aqmEvents, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(c) {
          c && (this.SERVICE = c), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.contact, aqmServiceEntityString: "SERVICE.aqm.contact" }), this.logger.info("Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        accept(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.accept(c);
          });
        }
        consultAccept(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.consultAccept(c);
          });
        }
        buddyAgents(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.buddyAgents(c);
          });
        }
        end(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.end(c);
          });
        }
        consultEnd(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.consultEnd(c);
          });
        }
        cancelCtq(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.cancelCtq(c);
          });
        }
        wrapup(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.wrapup(c);
          });
        }
        vteamTransfer(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.vteamTransfer(c);
          });
        }
        blindTransfer(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.blindTransfer(c);
          });
        }
        hold(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.hold(c);
          });
        }
        unHold(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.unHold(c);
          });
        }
        consult(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.consult(c);
          });
        }
        consultConference(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.consultConference(c);
          });
        }
        decline(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.decline(c);
          });
        }
        consultTransfer(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.consultTransfer(c);
          });
        }
        vteamList(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.vteamList(c);
          });
        }
        pauseRecording(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.pauseRecording(c);
          });
        }
        resumeRecording(c) {
          var p;
          return at(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.contact.resumeRecording(c);
          });
        }
        addEventListener(c, p) {
          this.checkService() && this.aqmEvents.addEventListener(c, p);
        }
        addOnceEventListener(c, p) {
          this.checkService() && this.aqmEvents.addOnceEventListener(c, p);
        }
        removeEventListener(c, p) {
          this.aqmEvents.removeEventListener(c, p);
        }
        removeOnceEventListener(c, p) {
          this.aqmEvents.removeOnceEventListener(c, p);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const gt = m(h, "[AgentContact JSAPI] =>"), Mt = m(gt, "[AqmServiceEvents: Contact] => ");
      var F = b(5), Z = b.n(F), w = b(8), y = b.n(w), ct = function(U, c, p, nt) {
        return new (p || (p = Promise))(function(ht, lt) {
          function Tt(mt) {
            try {
              It(nt.next(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function Rt(mt) {
            try {
              It(nt.throw(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function It(mt) {
            var Et;
            mt.done ? ht(mt.value) : (Et = mt.value, Et instanceof p ? Et : new p(function(Pt) {
              Pt(Et);
            })).then(Tt, Rt);
          }
          It((nt = nt.apply(U, c || [])).next());
        });
      };
      const ut = { agentName: void 0, agentProfileID: void 0, agentSessionId: void 0, idleCode: void 0, teamId: void 0, teamName: void 0, dn: void 0, status: void 0, subStatus: void 0, idleCodes: void 0, wrapupCodes: void 0, outDialRegex: void 0, isOutboundEnabledForTenant: void 0, isOutboundEnabledForAgent: void 0, isEndCallEnabled: void 0, isEndConsultEnabled: void 0, allowConsultToQueue: void 0, isAdhocDialingEnabled: void 0, isAgentAvailableAfterOutdial: void 0, isCampaignManagementEnabled: void 0, agentPersonalStatsEnabled: void 0 };
      class W {
        constructor(c) {
          this.emitter = Z()(), this.listeners = /* @__PURE__ */ new Set(), this.teams = [], this.idleCodes = {}, this.latestData = JSON.parse(JSON.stringify(ut)), this.logger = c.logger, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        emit(c, ...p) {
          this.emitter.emit(c, ...p);
        }
        update(c) {
          const p = Object.keys(c).reduce((nt, ht) => {
            const lt = c[ht], Tt = this.latestData[ht];
            return JSON.stringify(lt) !== JSON.stringify(Tt) && nt.push({ name: ht, value: lt, oldValue: Tt }), nt;
          }, []);
          p.length && (p.forEach((nt) => this.latestData[nt.name] = nt.value), this.emit("updated", p));
        }
        static getOutdialRegex(c) {
          if (c && c.dialPlanEntity) {
            const p = c.dialPlanEntity.find((nt) => nt.name === "Any Format");
            if (p)
              return p.regex;
          }
          return "";
        }
        static findTeamName(c, p) {
          const nt = c.find((ht) => ht.teamId === p);
          return (nt == null ? void 0 : nt.teamName) || "";
        }
        init(c) {
          return ct(this, void 0, void 0, function* () {
            c && (this.SERVICE = c), this.checkService() && (yield this.fetchLatestData(), this.subscribeSelfDataEvents(), this.logger.info("Inited"));
          });
        }
        cleanup() {
          this.unsubscribeSelfDataEvents(), this.removeAllEventListeners(), this.SERVICE = void 0, this.update(JSON.parse(JSON.stringify(ut))), this.logger.info("Cleaned");
        }
        fetchLatestData() {
          var c, p, nt;
          return ct(this, void 0, void 0, function* () {
            const ht = !((c = this.SERVICE) === null || c === void 0) && c.conf.profile ? (p = this.SERVICE) === null || p === void 0 ? void 0 : p.conf.profile : yield (nt = this.SERVICE) === null || nt === void 0 ? void 0 : nt.conf.fetchProfile();
            if (ht) {
              const { teams: lt, agentName: Tt, agentProfileID: Rt, defaultDn: It, agentSubStatus: mt, agentStatus: Et, idleCode: Pt, idleCodes: Dt, wrapupCodes: Qt, dialPlan: Yt, isOutboundEnabledForTenant: Ce, isOutboundEnabledForAgent: me, isAdhocDialingEnabled: xe, isEndCallEnabled: ce, isEndConsultEnabled: ne, allowConsultToQueue: ve, isAgentAvailableAfterOutdial: le, isCampaignManagementEnabled: pe, agentPersonalStatsEnabled: ye } = ht;
              this.teams = lt, Dt.forEach((Kt) => {
                this.idleCodes[Kt.id] = { id: Kt.id, name: Kt.name };
              });
              const Te = It, re = Et, ie = mt, Le = W.getOutdialRegex(Yt);
              this.update({ agentName: Tt, agentProfileID: Rt, dn: Te, status: re, subStatus: ie, idleCode: Pt, idleCodes: Dt, wrapupCodes: Qt, outDialRegex: Le, isOutboundEnabledForTenant: Ce, isOutboundEnabledForAgent: me, isAdhocDialingEnabled: xe, isEndCallEnabled: ce, isEndConsultEnabled: ne, allowConsultToQueue: ve, isAgentAvailableAfterOutdial: le, isCampaignManagementEnabled: pe, agentPersonalStatsEnabled: ye });
            }
          });
        }
        subscribeSelfDataEvents() {
          var c, p, nt, ht;
          if (this.checkService()) {
            {
              const lt = (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.eAgentReloginSuccess.listen(({ data: Tt }) => {
                const { agentSessionId: Rt, teamId: It, dn: mt, status: Et, subStatus: Pt, auxCodeId: Dt } = Tt, Qt = W.findTeamName(this.teams, It);
                this.update({ agentSessionId: Rt, teamId: It, teamName: Qt, dn: mt, status: Et, subStatus: Pt, idleCode: this.idleCodes[Dt] });
              });
              this.listeners.add(() => lt == null ? void 0 : lt.stopListen());
            }
            {
              const lt = (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.agent.eAgentStationLoginSuccess.listen(({ data: Tt }) => {
                const { agentSessionId: Rt, teamId: It, status: mt, subStatus: Et, auxCodeId: Pt } = Tt, Dt = W.findTeamName(this.teams, It);
                this.update({ agentSessionId: Rt, teamId: It, teamName: Dt, status: mt, subStatus: Et, idleCode: this.idleCodes[Pt] });
              });
              this.listeners.add(() => lt == null ? void 0 : lt.stopListen());
            }
            {
              const lt = (nt = this.SERVICE) === null || nt === void 0 ? void 0 : nt.aqm.agent.eAgentStateChangeSuccess.listen(({ data: Tt }) => {
                const { agentSessionId: Rt, status: It, subStatus: mt, auxCodeId: Et } = Tt;
                this.update({ agentSessionId: Rt, status: It, subStatus: mt, idleCode: this.idleCodes[Et] });
              });
              this.listeners.add(() => lt == null ? void 0 : lt.stopListen());
            }
            {
              const lt = (ht = this.SERVICE) === null || ht === void 0 ? void 0 : ht.aqm.agent.eAgentDNRegistered.listen(({ data: Tt }) => {
                const { dn: Rt } = Tt;
                this.update({ dn: Rt });
              });
              this.listeners.add(() => lt == null ? void 0 : lt.stopListen());
            }
          }
        }
        unsubscribeSelfDataEvents() {
          this.listeners.forEach((c) => c()), this.listeners.clear();
        }
        stateChange(c) {
          var p;
          return ct(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.agent.stateChange({ data: c });
          });
        }
        mockOutdialAniList() {
          var c;
          return ct(this, void 0, void 0, function* () {
            if (this.checkService())
              return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.mockOutdialAniList({ p: null });
          });
        }
        fetchAddressBooks() {
          var c;
          return ct(this, void 0, void 0, function* () {
            if (this.checkService())
              return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.aqm.agent.fetchAddressBooks({ p: null });
          });
        }
        addEventListener(c, p) {
          this.checkService() && this.emitter.on(c, p);
        }
        removeEventListener(c, p) {
          this.checkService() && this.emitter.off(c, p);
        }
        removeAllEventListeners() {
          y()(this.emitter);
        }
      }
      const R = m(h, "[AgentInfo JSAPI] =>");
      var ft = function(U, c, p, nt) {
        return new (p || (p = Promise))(function(ht, lt) {
          function Tt(mt) {
            try {
              It(nt.next(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function Rt(mt) {
            try {
              It(nt.throw(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function It(mt) {
            var Et;
            mt.done ? ht(mt.value) : (Et = mt.value, Et instanceof p ? Et : new p(function(Pt) {
              Pt(Et);
            })).then(Tt, Rt);
          }
          It((nt = nt.apply(U, c || [])).next());
        });
      };
      class $ {
        constructor(c) {
          this.emitter = Z()(), this.logger = c.logger, this.agentxSERVICE = c.SERVICE;
        }
        waitUntil(c) {
          return ft(this, void 0, void 0, function* () {
            typeof c == "function" && (yield new Promise((p) => setTimeout(p, 1e3 / 30)), !c() && (yield this.waitUntil(c)));
          });
        }
        checkService(c) {
          return ft(this, void 0, void 0, function* () {
            c ? (c.isInited || (this.logger.warn("SERVICE is not inited. Awaiting it's initAgentxServices(...)..."), yield this.waitUntil(() => c.isInited)), this.logger.info("SERVICE is inited. Continuing..."), this.emit("inited")) : this.logger.error("SERVICE is not defiend...");
          });
        }
        emit(c, ...p) {
          this.emitter.emit(c, ...p);
        }
        init() {
          return ft(this, void 0, void 0, function* () {
            this.agentxSERVICE ? yield this.checkService(this.agentxSERVICE) : this.logger.error("SERVICE is not defined...");
          });
        }
        cleanup() {
          this.agentxSERVICE = void 0, this.emit("cleaned"), this.logger.info("Cleaned");
        }
        get clientLocale() {
          return window.navigator.languages != null ? window.navigator.languages[0] : window.navigator.language;
        }
        addEventListener(c, p) {
          this.emitter.on(c, p);
        }
        removeEventListener(c, p) {
          this.emitter.off(c, p);
        }
      }
      const a = m(h, "[Config JSAPI] =>");
      var u = function(U, c, p, nt) {
        return new (p || (p = Promise))(function(ht, lt) {
          function Tt(mt) {
            try {
              It(nt.next(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function Rt(mt) {
            try {
              It(nt.throw(mt));
            } catch (Et) {
              lt(Et);
            }
          }
          function It(mt) {
            var Et;
            mt.done ? ht(mt.value) : (Et = mt.value, Et instanceof p ? Et : new p(function(Pt) {
              Pt(Et);
            })).then(Tt, Rt);
          }
          It((nt = nt.apply(U, c || [])).next());
        });
      };
      class r {
        constructor(c) {
          this.logger = c.logger, this.aqmEvents = c.aqmEvents, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(c) {
          c && (this.SERVICE = c), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.dialer, aqmServiceEntityString: "SERVICE.aqm.dialer" }), this.logger.info("Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        startOutdial(c) {
          var p;
          return u(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.dialer.startOutdial(c);
          });
        }
        updateCadVariables(c) {
          var p;
          return u(this, void 0, void 0, function* () {
            if (this.checkService())
              return (p = this.SERVICE) === null || p === void 0 ? void 0 : p.aqm.dialer.updateCadVariables(c);
          });
        }
        addEventListener(c, p) {
          this.checkService() && this.aqmEvents.addEventListener(c, p);
        }
        addOnceEventListener(c, p) {
          this.checkService() && this.aqmEvents.addOnceEventListener(c, p);
        }
        removeEventListener(c, p) {
          this.aqmEvents.removeEventListener(c, p);
        }
        removeOnceEventListener(c, p) {
          this.aqmEvents.removeOnceEventListener(c, p);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const s = m(h, "[Dialer JSAPI] =>"), d = m(s, "[AqmServiceEvents: Dialer] =>");
      class O {
        constructor(c) {
          this.logger = c.logger, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(c) {
          c && (this.SERVICE = c), this.checkService() && this.logger.info("Inited");
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        createInstance(c) {
          return g.I18N.createService(c);
        }
        createMixin(c) {
          return g.I18N.createMixin(c);
        }
        get DEFAULT_INIT_OPTIONS() {
          var c;
          if (this.checkService())
            return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.i18n.DEFAULT_INIT_OPTIONS;
        }
        getMergedInitOptions(...c) {
          return g.I18N.mergeServiceInitOptions(...c);
        }
      }
      const x = m(h, "[I18N JSAPI] =>");
      class V {
        constructor(c) {
          this.clientLoggers = /* @__PURE__ */ new Map(), this.logger = c.logger;
        }
        createLogger(c) {
          const p = Object(g.createLogger)(c);
          return this.clientLoggers.set(c, p), this.logger.info(`Client logger created: "${c}"`), p;
        }
        cleanupLogs(c) {
          this.clientLoggers.has(c) && g.Logger.POOL.cleanupPrefixedLogs(c);
        }
        browserDownloadLogsJson(c) {
          this.clientLoggers.has(c) && g.Logger.POOL.browserDownloadPrefixedLogsJson(c);
        }
        browserDownloadLogsText(c) {
          this.clientLoggers.has(c) && g.Logger.POOL.browserDownloadPrefixedLogsText(c);
        }
        getLogsCollection(c) {
          if (this.clientLoggers.has(c))
            return g.Logger.POOL.getPrefixedLogsCollection(c);
        }
        getLogsJsonUrl(c) {
          if (this.clientLoggers.has(c))
            return g.Logger.POOL.getPrefixedLogsJsonUrl(c);
        }
        getLogsTextUrl(c) {
          if (this.clientLoggers.has(c))
            return g.Logger.POOL.getPrefixedLogsTextUrl(c);
        }
      }
      const q = m(h, "[Logger JSAPI] =>");
      class tt {
        constructor(c) {
          this.logger = c.logger, this.aqmEvents = c.aqmEvents, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(c) {
          c && (this.SERVICE = c), this.checkService() && (this.aqmEvents.init({ aqmServiceEntity: this.SERVICE.aqm.screenpop, aqmServiceEntityString: "SERVICE.aqm.screenpop" }), this.logger.info("Inited"));
        }
        cleanup() {
          this.aqmEvents.cleanup(), this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        addEventListener(c, p) {
          this.checkService() && this.aqmEvents.addEventListener(c, p);
        }
        addOnceEventListener(c, p) {
          this.checkService() && this.aqmEvents.addOnceEventListener(c, p);
        }
        removeEventListener(c, p) {
          this.aqmEvents.removeEventListener(c, p);
        }
        removeOnceEventListener(c, p) {
          this.aqmEvents.removeOnceEventListener(c, p);
        }
        removeAllEventListeners() {
          this.aqmEvents.removeAllEventListeners();
        }
      }
      const wt = m(h, "[ScreenPop JSAPI] =>"), pt = m(wt, "[AqmServiceEvents: ScreenPop] =>");
      class Lt {
        constructor(c) {
          this.logger = c.logger, this.serviceChecker = c.serviceChecker;
        }
        checkService() {
          return this.serviceChecker.check(this.SERVICE);
        }
        init(c) {
          c && (this.SERVICE = c), this.checkService() && this.logger.info("Inited");
        }
        cleanup() {
          this.SERVICE = void 0, this.logger.info("Cleaned");
        }
        listenKeyPress(...c) {
          var p;
          this.checkService() && ((p = this.SERVICE) === null || p === void 0 || p.shortcut.event.listenKeyPress(...c));
        }
        listenKeyConflict(...c) {
          var p;
          this.checkService() && ((p = this.SERVICE) === null || p === void 0 || p.shortcut.event.listenKeyConflict(...c));
        }
        listenConflictResolved(...c) {
          var p;
          this.checkService() && ((p = this.SERVICE) === null || p === void 0 || p.shortcut.event.listenConflictResolved(...c));
        }
        register(...c) {
          var p;
          this.checkService() && ((p = this.SERVICE) === null || p === void 0 || p.shortcut.register(...c));
        }
        unregisterKeys(...c) {
          var p;
          this.checkService() && ((p = this.SERVICE) === null || p === void 0 || p.shortcut.unregisterKeys(...c));
        }
        getRegisteredKeys() {
          var c;
          if (this.checkService())
            return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.shortcut.getRegisteredKeys();
        }
        get DEFAULT_SHORTCUT_KEYS() {
          var c;
          return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.shortcut.DEFAULT_SHORTCUT_KEYS;
        }
        get MODIFIERS() {
          var c;
          return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.shortcut.MODIFIERS;
        }
        get REGISTERED_KEYS() {
          var c;
          return (c = this.SERVICE) === null || c === void 0 ? void 0 : c.shortcut.REGISTERED_KEYS;
        }
      }
      const Ot = m(h, "[ShortcutKey JSAPI] =>"), dt = (() => {
        AGENTX_SERVICE ? h.info('Found global "AGENTX_SERVICE"!') : h.error('Missed global "AGENTX_SERVICE"...');
        const U = (c = AGENTX_SERVICE, new $({ logger: a, SERVICE: c }));
        var c;
        const p = new V({ logger: q }), nt = new Lt({ logger: Ot, serviceChecker: _({ logger: Ot }) }), ht = new N({ logger: l, serviceChecker: _({ logger: l }) }), lt = new W({ logger: R, serviceChecker: _({ logger: R }) }), Tt = new vt({ logger: gt, serviceChecker: _({ logger: gt }), aqmEvents: I({ logger: Mt }) }), Rt = new r({ logger: s, aqmEvents: I({ logger: d }), serviceChecker: _({ logger: s }) }), It = new tt({ logger: wt, aqmEvents: I({ logger: pt }), serviceChecker: _({ logger: wt }) }), mt = new O({ logger: x, serviceChecker: _({ logger: x }) });
        return U.addEventListener("inited", () => {
          Tt.init(AGENTX_SERVICE), lt.init(AGENTX_SERVICE), Rt.init(AGENTX_SERVICE), It.init(AGENTX_SERVICE), nt.init(AGENTX_SERVICE), ht.init(AGENTX_SERVICE), mt.init(AGENTX_SERVICE);
        }), U.addEventListener("cleaned", () => {
          Tt.cleanup(), lt.cleanup(), Rt.cleanup(), It.cleanup(), nt.cleanup(), mt.cleanup(), ht.cleanup();
        }), { config: U, logger: p, shortcutKey: nt, actions: ht, agentContact: Tt, agentStateInfo: lt, dialer: Rt, screenpop: It, i18n: mt };
      })();
    }, function(P, G, b) {
      b.r(G), b.d(G, "v1", function() {
        return B;
      }), b.d(G, "v3", function() {
        return M;
      }), b.d(G, "v4", function() {
        return kt;
      }), b.d(G, "v5", function() {
        return Ht;
      });
      var g = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), h = new Uint8Array(16);
      function m() {
        if (!g)
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return g(h);
      }
      for (var E = [], _ = 0; _ < 256; ++_)
        E[_] = (_ + 256).toString(16).substr(1);
      var A, L, v = function(j, H) {
        var N = H || 0, l = E;
        return [l[j[N++]], l[j[N++]], l[j[N++]], l[j[N++]], "-", l[j[N++]], l[j[N++]], "-", l[j[N++]], l[j[N++]], "-", l[j[N++]], l[j[N++]], "-", l[j[N++]], l[j[N++]], l[j[N++]], l[j[N++]], l[j[N++]], l[j[N++]]].join("");
      }, z = 0, T = 0, B = function(j, H, N) {
        var l = H && N || 0, k = H || [], I = (j = j || {}).node || A, at = j.clockseq !== void 0 ? j.clockseq : L;
        if (I == null || at == null) {
          var vt = j.random || (j.rng || m)();
          I == null && (I = A = [1 | vt[0], vt[1], vt[2], vt[3], vt[4], vt[5]]), at == null && (at = L = 16383 & (vt[6] << 8 | vt[7]));
        }
        var gt = j.msecs !== void 0 ? j.msecs : new Date().getTime(), Mt = j.nsecs !== void 0 ? j.nsecs : T + 1, F = gt - z + (Mt - T) / 1e4;
        if (F < 0 && j.clockseq === void 0 && (at = at + 1 & 16383), (F < 0 || gt > z) && j.nsecs === void 0 && (Mt = 0), Mt >= 1e4)
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        z = gt, T = Mt, L = at;
        var Z = (1e4 * (268435455 & (gt += 122192928e5)) + Mt) % 4294967296;
        k[l++] = Z >>> 24 & 255, k[l++] = Z >>> 16 & 255, k[l++] = Z >>> 8 & 255, k[l++] = 255 & Z;
        var w = gt / 4294967296 * 1e4 & 268435455;
        k[l++] = w >>> 8 & 255, k[l++] = 255 & w, k[l++] = w >>> 24 & 15 | 16, k[l++] = w >>> 16 & 255, k[l++] = at >>> 8 | 128, k[l++] = 255 & at;
        for (var y = 0; y < 6; ++y)
          k[l + y] = I[y];
        return H || v(k);
      }, ot = function(j, H, N) {
        var l = function(k, I, at, vt) {
          var gt = at && vt || 0;
          if (typeof k == "string" && (k = function(Z) {
            Z = unescape(encodeURIComponent(Z));
            for (var w = new Array(Z.length), y = 0; y < Z.length; y++)
              w[y] = Z.charCodeAt(y);
            return w;
          }(k)), typeof I == "string" && (I = function(Z) {
            var w = [];
            return Z.replace(/[a-fA-F0-9]{2}/g, function(y) {
              w.push(parseInt(y, 16));
            }), w;
          }(I)), !Array.isArray(k))
            throw TypeError("value must be an array of bytes");
          if (!Array.isArray(I) || I.length !== 16)
            throw TypeError("namespace must be uuid string or an Array of 16 byte values");
          var Mt = N(I.concat(k));
          if (Mt[6] = 15 & Mt[6] | H, Mt[8] = 63 & Mt[8] | 128, at)
            for (var F = 0; F < 16; ++F)
              at[gt + F] = Mt[F];
          return at || v(Mt);
        };
        try {
          l.name = j;
        } catch {
        }
        return l.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", l.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", l;
      };
      function X(j, H) {
        var N = (65535 & j) + (65535 & H);
        return (j >> 16) + (H >> 16) + (N >> 16) << 16 | 65535 & N;
      }
      function it(j, H, N, l, k, I) {
        return X((at = X(X(H, j), X(l, I))) << (vt = k) | at >>> 32 - vt, N);
        var at, vt;
      }
      function Q(j, H, N, l, k, I, at) {
        return it(H & N | ~H & l, j, H, k, I, at);
      }
      function et(j, H, N, l, k, I, at) {
        return it(H & l | N & ~l, j, H, k, I, at);
      }
      function st(j, H, N, l, k, I, at) {
        return it(H ^ N ^ l, j, H, k, I, at);
      }
      function K(j, H, N, l, k, I, at) {
        return it(N ^ (H | ~l), j, H, k, I, at);
      }
      var M = ot("v3", 48, function(j) {
        if (typeof j == "string") {
          var H = unescape(encodeURIComponent(j));
          j = new Array(H.length);
          for (var N = 0; N < H.length; N++)
            j[N] = H.charCodeAt(N);
        }
        return function(l) {
          var k, I, at, vt = [], gt = 32 * l.length;
          for (k = 0; k < gt; k += 8)
            I = l[k >> 5] >>> k % 32 & 255, at = parseInt("0123456789abcdef".charAt(I >>> 4 & 15) + "0123456789abcdef".charAt(15 & I), 16), vt.push(at);
          return vt;
        }(function(l, k) {
          var I, at, vt, gt, Mt;
          l[k >> 5] |= 128 << k % 32, l[14 + (k + 64 >>> 9 << 4)] = k;
          var F = 1732584193, Z = -271733879, w = -1732584194, y = 271733878;
          for (I = 0; I < l.length; I += 16)
            at = F, vt = Z, gt = w, Mt = y, F = Q(F, Z, w, y, l[I], 7, -680876936), y = Q(y, F, Z, w, l[I + 1], 12, -389564586), w = Q(w, y, F, Z, l[I + 2], 17, 606105819), Z = Q(Z, w, y, F, l[I + 3], 22, -1044525330), F = Q(F, Z, w, y, l[I + 4], 7, -176418897), y = Q(y, F, Z, w, l[I + 5], 12, 1200080426), w = Q(w, y, F, Z, l[I + 6], 17, -1473231341), Z = Q(Z, w, y, F, l[I + 7], 22, -45705983), F = Q(F, Z, w, y, l[I + 8], 7, 1770035416), y = Q(y, F, Z, w, l[I + 9], 12, -1958414417), w = Q(w, y, F, Z, l[I + 10], 17, -42063), Z = Q(Z, w, y, F, l[I + 11], 22, -1990404162), F = Q(F, Z, w, y, l[I + 12], 7, 1804603682), y = Q(y, F, Z, w, l[I + 13], 12, -40341101), w = Q(w, y, F, Z, l[I + 14], 17, -1502002290), Z = Q(Z, w, y, F, l[I + 15], 22, 1236535329), F = et(F, Z, w, y, l[I + 1], 5, -165796510), y = et(y, F, Z, w, l[I + 6], 9, -1069501632), w = et(w, y, F, Z, l[I + 11], 14, 643717713), Z = et(Z, w, y, F, l[I], 20, -373897302), F = et(F, Z, w, y, l[I + 5], 5, -701558691), y = et(y, F, Z, w, l[I + 10], 9, 38016083), w = et(w, y, F, Z, l[I + 15], 14, -660478335), Z = et(Z, w, y, F, l[I + 4], 20, -405537848), F = et(F, Z, w, y, l[I + 9], 5, 568446438), y = et(y, F, Z, w, l[I + 14], 9, -1019803690), w = et(w, y, F, Z, l[I + 3], 14, -187363961), Z = et(Z, w, y, F, l[I + 8], 20, 1163531501), F = et(F, Z, w, y, l[I + 13], 5, -1444681467), y = et(y, F, Z, w, l[I + 2], 9, -51403784), w = et(w, y, F, Z, l[I + 7], 14, 1735328473), Z = et(Z, w, y, F, l[I + 12], 20, -1926607734), F = st(F, Z, w, y, l[I + 5], 4, -378558), y = st(y, F, Z, w, l[I + 8], 11, -2022574463), w = st(w, y, F, Z, l[I + 11], 16, 1839030562), Z = st(Z, w, y, F, l[I + 14], 23, -35309556), F = st(F, Z, w, y, l[I + 1], 4, -1530992060), y = st(y, F, Z, w, l[I + 4], 11, 1272893353), w = st(w, y, F, Z, l[I + 7], 16, -155497632), Z = st(Z, w, y, F, l[I + 10], 23, -1094730640), F = st(F, Z, w, y, l[I + 13], 4, 681279174), y = st(y, F, Z, w, l[I], 11, -358537222), w = st(w, y, F, Z, l[I + 3], 16, -722521979), Z = st(Z, w, y, F, l[I + 6], 23, 76029189), F = st(F, Z, w, y, l[I + 9], 4, -640364487), y = st(y, F, Z, w, l[I + 12], 11, -421815835), w = st(w, y, F, Z, l[I + 15], 16, 530742520), Z = st(Z, w, y, F, l[I + 2], 23, -995338651), F = K(F, Z, w, y, l[I], 6, -198630844), y = K(y, F, Z, w, l[I + 7], 10, 1126891415), w = K(w, y, F, Z, l[I + 14], 15, -1416354905), Z = K(Z, w, y, F, l[I + 5], 21, -57434055), F = K(F, Z, w, y, l[I + 12], 6, 1700485571), y = K(y, F, Z, w, l[I + 3], 10, -1894986606), w = K(w, y, F, Z, l[I + 10], 15, -1051523), Z = K(Z, w, y, F, l[I + 1], 21, -2054922799), F = K(F, Z, w, y, l[I + 8], 6, 1873313359), y = K(y, F, Z, w, l[I + 15], 10, -30611744), w = K(w, y, F, Z, l[I + 6], 15, -1560198380), Z = K(Z, w, y, F, l[I + 13], 21, 1309151649), F = K(F, Z, w, y, l[I + 4], 6, -145523070), y = K(y, F, Z, w, l[I + 11], 10, -1120210379), w = K(w, y, F, Z, l[I + 2], 15, 718787259), Z = K(Z, w, y, F, l[I + 9], 21, -343485551), F = X(F, at), Z = X(Z, vt), w = X(w, gt), y = X(y, Mt);
          return [F, Z, w, y];
        }(function(l) {
          var k, I = [];
          for (I[(l.length >> 2) - 1] = void 0, k = 0; k < I.length; k += 1)
            I[k] = 0;
          var at = 8 * l.length;
          for (k = 0; k < at; k += 8)
            I[k >> 5] |= (255 & l[k / 8]) << k % 32;
          return I;
        }(j), 8 * j.length));
      }), kt = function(j, H, N) {
        var l = H && N || 0;
        typeof j == "string" && (H = j === "binary" ? new Array(16) : null, j = null);
        var k = (j = j || {}).random || (j.rng || m)();
        if (k[6] = 15 & k[6] | 64, k[8] = 63 & k[8] | 128, H)
          for (var I = 0; I < 16; ++I)
            H[l + I] = k[I];
        return H || v(k);
      };
      function Ct(j, H, N, l) {
        switch (j) {
          case 0:
            return H & N ^ ~H & l;
          case 1:
            return H ^ N ^ l;
          case 2:
            return H & N ^ H & l ^ N & l;
          case 3:
            return H ^ N ^ l;
        }
      }
      function Nt(j, H) {
        return j << H | j >>> 32 - H;
      }
      var Ht = ot("v5", 80, function(j) {
        var H = [1518500249, 1859775393, 2400959708, 3395469782], N = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        if (typeof j == "string") {
          var l = unescape(encodeURIComponent(j));
          j = new Array(l.length);
          for (var k = 0; k < l.length; k++)
            j[k] = l.charCodeAt(k);
        }
        j.push(128);
        var I = j.length / 4 + 2, at = Math.ceil(I / 16), vt = new Array(at);
        for (k = 0; k < at; k++) {
          vt[k] = new Array(16);
          for (var gt = 0; gt < 16; gt++)
            vt[k][gt] = j[64 * k + 4 * gt] << 24 | j[64 * k + 4 * gt + 1] << 16 | j[64 * k + 4 * gt + 2] << 8 | j[64 * k + 4 * gt + 3];
        }
        for (vt[at - 1][14] = 8 * (j.length - 1) / Math.pow(2, 32), vt[at - 1][14] = Math.floor(vt[at - 1][14]), vt[at - 1][15] = 8 * (j.length - 1) & 4294967295, k = 0; k < at; k++) {
          for (var Mt = new Array(80), F = 0; F < 16; F++)
            Mt[F] = vt[k][F];
          for (F = 16; F < 80; F++)
            Mt[F] = Nt(Mt[F - 3] ^ Mt[F - 8] ^ Mt[F - 14] ^ Mt[F - 16], 1);
          var Z = N[0], w = N[1], y = N[2], ct = N[3], ut = N[4];
          for (F = 0; F < 80; F++) {
            var W = Math.floor(F / 20), R = Nt(Z, 5) + Ct(W, w, y, ct) + ut + H[W] + Mt[F] >>> 0;
            ut = ct, ct = y, y = Nt(w, 30) >>> 0, w = Z, Z = R;
          }
          N[0] = N[0] + Z >>> 0, N[1] = N[1] + w >>> 0, N[2] = N[2] + y >>> 0, N[3] = N[3] + ct >>> 0, N[4] = N[4] + ut >>> 0;
        }
        return [N[0] >> 24 & 255, N[0] >> 16 & 255, N[0] >> 8 & 255, 255 & N[0], N[1] >> 24 & 255, N[1] >> 16 & 255, N[1] >> 8 & 255, 255 & N[1], N[2] >> 24 & 255, N[2] >> 16 & 255, N[2] >> 8 & 255, 255 & N[2], N[3] >> 24 & 255, N[3] >> 16 & 255, N[3] >> 8 & 255, 255 & N[3], N[4] >> 24 & 255, N[4] >> 16 & 255, N[4] >> 8 & 255, 255 & N[4]];
      });
    }, function(P, G, b) {
      function g(a) {
        return (g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
          return typeof u;
        } : function(u) {
          return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
        })(a);
      }
      function h(a, u, r) {
        return u in a ? Object.defineProperty(a, u, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : a[u] = r, a;
      }
      function m(a) {
        for (var u = 1; u < arguments.length; u++) {
          var r = arguments[u] != null ? Object(arguments[u]) : {}, s = Object.keys(r);
          typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(r).filter(function(d) {
            return Object.getOwnPropertyDescriptor(r, d).enumerable;
          })), s.forEach(function(d) {
            h(a, d, r[d]);
          });
        }
        return a;
      }
      b.r(G);
      var E = b(2), _ = b(3), A = b(19), L = b.n(A);
      function v(a) {
        if (a === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a;
      }
      function z(a, u) {
        if (u && (L()(u) === "object" || typeof u == "function"))
          return u;
        if (u !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return v(a);
      }
      function T(a) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(u) {
          return u.__proto__ || Object.getPrototypeOf(u);
        })(a);
      }
      function B(a, u) {
        return (B = Object.setPrototypeOf || function(r, s) {
          return r.__proto__ = s, r;
        })(a, u);
      }
      function ot(a, u) {
        if (typeof u != "function" && u !== null)
          throw new TypeError("Super expression must either be null or a function");
        a.prototype = Object.create(u && u.prototype, { constructor: { value: a, writable: !0, configurable: !0 } }), u && B(a, u);
      }
      var X = { type: "logger", log: function(a) {
        this.output("log", a);
      }, warn: function(a) {
        this.output("warn", a);
      }, error: function(a) {
        this.output("error", a);
      }, output: function(a, u) {
        console && console[a] && console[a].apply(console, u);
      } }, it = new (function() {
        function a(u) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          Object(E.a)(this, a), this.init(u, r);
        }
        return Object(_.a)(a, [{ key: "init", value: function(u) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.prefix = r.prefix || "i18next:", this.logger = u || X, this.options = r, this.debug = r.debug;
        } }, { key: "setDebug", value: function(u) {
          this.debug = u;
        } }, { key: "log", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++)
            r[s] = arguments[s];
          return this.forward(r, "log", "", !0);
        } }, { key: "warn", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++)
            r[s] = arguments[s];
          return this.forward(r, "warn", "", !0);
        } }, { key: "error", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++)
            r[s] = arguments[s];
          return this.forward(r, "error", "");
        } }, { key: "deprecate", value: function() {
          for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++)
            r[s] = arguments[s];
          return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
        } }, { key: "forward", value: function(u, r, s, d) {
          return d && !this.debug ? null : (typeof u[0] == "string" && (u[0] = "".concat(s).concat(this.prefix, " ").concat(u[0])), this.logger[r](u));
        } }, { key: "create", value: function(u) {
          return new a(this.logger, m({}, { prefix: "".concat(this.prefix, ":").concat(u, ":") }, this.options));
        } }]), a;
      }())(), Q = function() {
        function a() {
          Object(E.a)(this, a), this.observers = {};
        }
        return Object(_.a)(a, [{ key: "on", value: function(u, r) {
          var s = this;
          return u.split(" ").forEach(function(d) {
            s.observers[d] = s.observers[d] || [], s.observers[d].push(r);
          }), this;
        } }, { key: "off", value: function(u, r) {
          this.observers[u] && (r ? this.observers[u] = this.observers[u].filter(function(s) {
            return s !== r;
          }) : delete this.observers[u]);
        } }, { key: "emit", value: function(u) {
          for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), d = 1; d < r; d++)
            s[d - 1] = arguments[d];
          if (this.observers[u]) {
            var O = [].concat(this.observers[u]);
            O.forEach(function(V) {
              V.apply(void 0, s);
            });
          }
          if (this.observers["*"]) {
            var x = [].concat(this.observers["*"]);
            x.forEach(function(V) {
              V.apply(V, [u].concat(s));
            });
          }
        } }]), a;
      }();
      function et() {
        var a, u, r = new Promise(function(s, d) {
          a = s, u = d;
        });
        return r.resolve = a, r.reject = u, r;
      }
      function st(a) {
        return a == null ? "" : "" + a;
      }
      function K(a, u, r) {
        a.forEach(function(s) {
          u[s] && (r[s] = u[s]);
        });
      }
      function M(a, u, r) {
        function s(V) {
          return V && V.indexOf("###") > -1 ? V.replace(/###/g, ".") : V;
        }
        function d() {
          return !a || typeof a == "string";
        }
        for (var O = typeof u != "string" ? [].concat(u) : u.split("."); O.length > 1; ) {
          if (d())
            return {};
          var x = s(O.shift());
          !a[x] && r && (a[x] = new r()), a = Object.prototype.hasOwnProperty.call(a, x) ? a[x] : {};
        }
        return d() ? {} : { obj: a, k: s(O.shift()) };
      }
      function kt(a, u, r) {
        var s = M(a, u, Object);
        s.obj[s.k] = r;
      }
      function Ct(a, u) {
        var r = M(a, u), s = r.obj, d = r.k;
        if (s)
          return s[d];
      }
      function Nt(a, u, r) {
        var s = Ct(a, r);
        return s !== void 0 ? s : Ct(u, r);
      }
      function Ht(a, u, r) {
        for (var s in u)
          s !== "__proto__" && s !== "constructor" && (s in a ? typeof a[s] == "string" || a[s] instanceof String || typeof u[s] == "string" || u[s] instanceof String ? r && (a[s] = u[s]) : Ht(a[s], u[s], r) : a[s] = u[s]);
        return a;
      }
      function j(a) {
        return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var H = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
      function N(a) {
        return typeof a == "string" ? a.replace(/[&<>"'\/]/g, function(u) {
          return H[u];
        }) : a;
      }
      var l = typeof window < "u" && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1, k = function(a) {
        function u(r) {
          var s, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
          return Object(E.a)(this, u), s = z(this, T(u).call(this)), l && Q.call(v(s)), s.data = r || {}, s.options = d, s.options.keySeparator === void 0 && (s.options.keySeparator = "."), s;
        }
        return ot(u, a), Object(_.a)(u, [{ key: "addNamespaces", value: function(r) {
          this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
        } }, { key: "removeNamespaces", value: function(r) {
          var s = this.options.ns.indexOf(r);
          s > -1 && this.options.ns.splice(s, 1);
        } }, { key: "getResource", value: function(r, s, d) {
          var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, x = O.keySeparator !== void 0 ? O.keySeparator : this.options.keySeparator, V = [r, s];
          return d && typeof d != "string" && (V = V.concat(d)), d && typeof d == "string" && (V = V.concat(x ? d.split(x) : d)), r.indexOf(".") > -1 && (V = r.split(".")), Ct(this.data, V);
        } }, { key: "addResource", value: function(r, s, d, O) {
          var x = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 }, V = this.options.keySeparator;
          V === void 0 && (V = ".");
          var q = [r, s];
          d && (q = q.concat(V ? d.split(V) : d)), r.indexOf(".") > -1 && (O = s, s = (q = r.split("."))[1]), this.addNamespaces(s), kt(this.data, q, O), x.silent || this.emit("added", r, s, d, O);
        } }, { key: "addResources", value: function(r, s, d) {
          var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
          for (var x in d)
            typeof d[x] != "string" && Object.prototype.toString.apply(d[x]) !== "[object Array]" || this.addResource(r, s, x, d[x], { silent: !0 });
          O.silent || this.emit("added", r, s, d);
        } }, { key: "addResourceBundle", value: function(r, s, d, O, x) {
          var V = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1 }, q = [r, s];
          r.indexOf(".") > -1 && (O = d, d = s, s = (q = r.split("."))[1]), this.addNamespaces(s);
          var tt = Ct(this.data, q) || {};
          O ? Ht(tt, d, x) : tt = m({}, tt, d), kt(this.data, q, tt), V.silent || this.emit("added", r, s, d);
        } }, { key: "removeResourceBundle", value: function(r, s) {
          this.hasResourceBundle(r, s) && delete this.data[r][s], this.removeNamespaces(s), this.emit("removed", r, s);
        } }, { key: "hasResourceBundle", value: function(r, s) {
          return this.getResource(r, s) !== void 0;
        } }, { key: "getResourceBundle", value: function(r, s) {
          return s || (s = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? m({}, {}, this.getResource(r, s)) : this.getResource(r, s);
        } }, { key: "getDataByLanguage", value: function(r) {
          return this.data[r];
        } }, { key: "toJSON", value: function() {
          return this.data;
        } }]), u;
      }(Q), I = { processors: {}, addPostProcessor: function(a) {
        this.processors[a.name] = a;
      }, handle: function(a, u, r, s, d) {
        var O = this;
        return a.forEach(function(x) {
          O.processors[x] && (u = O.processors[x].process(u, r, s, d));
        }), u;
      } }, at = {}, vt = function(a) {
        function u(r) {
          var s, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return Object(E.a)(this, u), s = z(this, T(u).call(this)), l && Q.call(v(s)), K(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, v(s)), s.options = d, s.options.keySeparator === void 0 && (s.options.keySeparator = "."), s.logger = it.create("translator"), s;
        }
        return ot(u, a), Object(_.a)(u, [{ key: "changeLanguage", value: function(r) {
          r && (this.language = r);
        } }, { key: "exists", value: function(r) {
          var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }, d = this.resolve(r, s);
          return d && d.res !== void 0;
        } }, { key: "extractFromKey", value: function(r, s) {
          var d = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
          d === void 0 && (d = ":");
          var O = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, x = s.ns || this.options.defaultNS;
          if (d && r.indexOf(d) > -1) {
            var V = r.match(this.interpolator.nestingRegexp);
            if (V && V.length > 0)
              return { key: r, namespaces: x };
            var q = r.split(d);
            (d !== O || d === O && this.options.ns.indexOf(q[0]) > -1) && (x = q.shift()), r = q.join(O);
          }
          return typeof x == "string" && (x = [x]), { key: r, namespaces: x };
        } }, { key: "translate", value: function(r, s, d) {
          var O = this;
          if (g(s) !== "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), s || (s = {}), r == null)
            return "";
          Array.isArray(r) || (r = [String(r)]);
          var x = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, V = this.extractFromKey(r[r.length - 1], s), q = V.key, tt = V.namespaces, wt = tt[tt.length - 1], pt = s.lng || this.language, Lt = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
          if (pt && pt.toLowerCase() === "cimode") {
            if (Lt) {
              var Ot = s.nsSeparator || this.options.nsSeparator;
              return wt + Ot + q;
            }
            return q;
          }
          var dt = this.resolve(r, s), U = dt && dt.res, c = dt && dt.usedKey || q, p = dt && dt.exactUsedKey || q, nt = Object.prototype.toString.apply(U), ht = ["[object Number]", "[object Function]", "[object RegExp]"], lt = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, Tt = !this.i18nFormat || this.i18nFormat.handleAsObject, Rt = typeof U != "string" && typeof U != "boolean" && typeof U != "number";
          if (Tt && U && Rt && ht.indexOf(nt) < 0 && (typeof lt != "string" || nt !== "[object Array]")) {
            if (!s.returnObjects && !this.options.returnObjects)
              return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(c, U, s) : "key '".concat(q, " (").concat(this.language, ")' returned an object instead of string.");
            if (x) {
              var It = nt === "[object Array]", mt = It ? [] : {}, Et = It ? p : c;
              for (var Pt in U)
                if (Object.prototype.hasOwnProperty.call(U, Pt)) {
                  var Dt = "".concat(Et).concat(x).concat(Pt);
                  mt[Pt] = this.translate(Dt, m({}, s, { joinArrays: !1, ns: tt })), mt[Pt] === Dt && (mt[Pt] = U[Pt]);
                }
              U = mt;
            }
          } else if (Tt && typeof lt == "string" && nt === "[object Array]")
            (U = U.join(lt)) && (U = this.extendTranslation(U, r, s, d));
          else {
            var Qt = !1, Yt = !1, Ce = s.count !== void 0 && typeof s.count != "string", me = u.hasDefaultValue(s), xe = Ce ? this.pluralResolver.getSuffix(pt, s.count) : "", ce = s["defaultValue".concat(xe)] || s.defaultValue;
            !this.isValidLookup(U) && me && (Qt = !0, U = ce), this.isValidLookup(U) || (Yt = !0, U = q);
            var ne = me && ce !== U && this.options.updateMissing;
            if (Yt || Qt || ne) {
              if (this.logger.log(ne ? "updateKey" : "missingKey", pt, wt, q, ne ? ce : U), x) {
                var ve = this.resolve(q, m({}, s, { keySeparator: !1 }));
                ve && ve.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
              }
              var le = [], pe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
              if (this.options.saveMissingTo === "fallback" && pe && pe[0])
                for (var ye = 0; ye < pe.length; ye++)
                  le.push(pe[ye]);
              else
                this.options.saveMissingTo === "all" ? le = this.languageUtils.toResolveHierarchy(s.lng || this.language) : le.push(s.lng || this.language);
              var Te = function(re, ie, Le) {
                O.options.missingKeyHandler ? O.options.missingKeyHandler(re, wt, ie, ne ? Le : U, ne, s) : O.backendConnector && O.backendConnector.saveMissing && O.backendConnector.saveMissing(re, wt, ie, ne ? Le : U, ne, s), O.emit("missingKey", re, wt, ie, U);
              };
              this.options.saveMissing && (this.options.saveMissingPlurals && Ce ? le.forEach(function(re) {
                O.pluralResolver.getSuffixes(re).forEach(function(ie) {
                  Te([re], q + ie, s["defaultValue".concat(ie)] || ce);
                });
              }) : Te(le, q, ce));
            }
            U = this.extendTranslation(U, r, s, dt, d), Yt && U === q && this.options.appendNamespaceToMissingKey && (U = "".concat(wt, ":").concat(q)), Yt && this.options.parseMissingKeyHandler && (U = this.options.parseMissingKeyHandler(U));
          }
          return U;
        } }, { key: "extendTranslation", value: function(r, s, d, O, x) {
          var V = this;
          if (this.i18nFormat && this.i18nFormat.parse)
            r = this.i18nFormat.parse(r, d, O.usedLng, O.usedNS, O.usedKey, { resolved: O });
          else if (!d.skipInterpolation) {
            d.interpolation && this.interpolator.init(m({}, d, { interpolation: m({}, this.options.interpolation, d.interpolation) }));
            var q, tt = d.interpolation && d.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
            if (tt) {
              var wt = r.match(this.interpolator.nestingRegexp);
              q = wt && wt.length;
            }
            var pt = d.replace && typeof d.replace != "string" ? d.replace : d;
            if (this.options.interpolation.defaultVariables && (pt = m({}, this.options.interpolation.defaultVariables, pt)), r = this.interpolator.interpolate(r, pt, d.lng || this.language, d), tt) {
              var Lt = r.match(this.interpolator.nestingRegexp);
              q < (Lt && Lt.length) && (d.nest = !1);
            }
            d.nest !== !1 && (r = this.interpolator.nest(r, function() {
              for (var U = arguments.length, c = new Array(U), p = 0; p < U; p++)
                c[p] = arguments[p];
              return x && x[0] === c[0] && !d.context ? (V.logger.warn("It seems you are nesting recursively key: ".concat(c[0], " in key: ").concat(s[0])), null) : V.translate.apply(V, c.concat([s]));
            }, d)), d.interpolation && this.interpolator.reset();
          }
          var Ot = d.postProcess || this.options.postProcess, dt = typeof Ot == "string" ? [Ot] : Ot;
          return r != null && dt && dt.length && d.applyPostProcessor !== !1 && (r = I.handle(dt, r, s, this.options && this.options.postProcessPassResolved ? m({ i18nResolved: O }, d) : d, this)), r;
        } }, { key: "resolve", value: function(r) {
          var s, d, O, x, V, q = this, tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return typeof r == "string" && (r = [r]), r.forEach(function(wt) {
            if (!q.isValidLookup(s)) {
              var pt = q.extractFromKey(wt, tt), Lt = pt.key;
              d = Lt;
              var Ot = pt.namespaces;
              q.options.fallbackNS && (Ot = Ot.concat(q.options.fallbackNS));
              var dt = tt.count !== void 0 && typeof tt.count != "string", U = tt.context !== void 0 && typeof tt.context == "string" && tt.context !== "", c = tt.lngs ? tt.lngs : q.languageUtils.toResolveHierarchy(tt.lng || q.language, tt.fallbackLng);
              Ot.forEach(function(p) {
                q.isValidLookup(s) || (V = p, !at["".concat(c[0], "-").concat(p)] && q.utils && q.utils.hasLoadedNamespace && !q.utils.hasLoadedNamespace(V) && (at["".concat(c[0], "-").concat(p)] = !0, q.logger.warn('key "'.concat(d, '" for languages "').concat(c.join(", "), `" won't get resolved as namespace "`).concat(V, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), c.forEach(function(nt) {
                  if (!q.isValidLookup(s)) {
                    x = nt;
                    var ht, lt, Tt = Lt, Rt = [Tt];
                    for (q.i18nFormat && q.i18nFormat.addLookupKeys ? q.i18nFormat.addLookupKeys(Rt, Lt, nt, p, tt) : (dt && (ht = q.pluralResolver.getSuffix(nt, tt.count)), dt && U && Rt.push(Tt + ht), U && Rt.push(Tt += "".concat(q.options.contextSeparator).concat(tt.context)), dt && Rt.push(Tt += ht)); lt = Rt.pop(); )
                      q.isValidLookup(s) || (O = lt, s = q.getResource(nt, p, lt, tt));
                  }
                }));
              });
            }
          }), { res: s, usedKey: d, exactUsedKey: O, usedLng: x, usedNS: V };
        } }, { key: "isValidLookup", value: function(r) {
          return !(r === void 0 || !this.options.returnNull && r === null || !this.options.returnEmptyString && r === "");
        } }, { key: "getResource", value: function(r, s, d) {
          var O = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(r, s, d, O) : this.resourceStore.getResource(r, s, d, O);
        } }], [{ key: "hasDefaultValue", value: function(r) {
          for (var s in r)
            if (Object.prototype.hasOwnProperty.call(r, s) && s.substring(0, 12) === "defaultValue" && r[s] !== void 0)
              return !0;
          return !1;
        } }]), u;
      }(Q);
      function gt(a) {
        return a.charAt(0).toUpperCase() + a.slice(1);
      }
      var Mt = function() {
        function a(u) {
          Object(E.a)(this, a), this.options = u, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = it.create("languageUtils");
        }
        return Object(_.a)(a, [{ key: "getScriptPartFromCode", value: function(u) {
          if (!u || u.indexOf("-") < 0)
            return null;
          var r = u.split("-");
          return r.length === 2 ? null : (r.pop(), r[r.length - 1].toLowerCase() === "x" ? null : this.formatLanguageCode(r.join("-")));
        } }, { key: "getLanguagePartFromCode", value: function(u) {
          if (!u || u.indexOf("-") < 0)
            return u;
          var r = u.split("-");
          return this.formatLanguageCode(r[0]);
        } }, { key: "formatLanguageCode", value: function(u) {
          if (typeof u == "string" && u.indexOf("-") > -1) {
            var r = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"], s = u.split("-");
            return this.options.lowerCaseLng ? s = s.map(function(d) {
              return d.toLowerCase();
            }) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), r.indexOf(s[1].toLowerCase()) > -1 && (s[1] = gt(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), r.indexOf(s[1].toLowerCase()) > -1 && (s[1] = gt(s[1].toLowerCase())), r.indexOf(s[2].toLowerCase()) > -1 && (s[2] = gt(s[2].toLowerCase()))), s.join("-");
          }
          return this.options.cleanCode || this.options.lowerCaseLng ? u.toLowerCase() : u;
        } }, { key: "isWhitelisted", value: function(u) {
          return this.logger.deprecate("languageUtils.isWhitelisted", `function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it's usage asap.`), this.isSupportedCode(u);
        } }, { key: "isSupportedCode", value: function(u) {
          return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (u = this.getLanguagePartFromCode(u)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(u) > -1;
        } }, { key: "getBestMatchFromCodes", value: function(u) {
          var r, s = this;
          return u ? (u.forEach(function(d) {
            if (!r) {
              var O = s.formatLanguageCode(d);
              s.options.supportedLngs && !s.isSupportedCode(O) || (r = O);
            }
          }), !r && this.options.supportedLngs && u.forEach(function(d) {
            if (!r) {
              var O = s.getLanguagePartFromCode(d);
              if (s.isSupportedCode(O))
                return r = O;
              r = s.options.supportedLngs.find(function(x) {
                if (x.indexOf(O) === 0)
                  return x;
              });
            }
          }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r) : null;
        } }, { key: "getFallbackCodes", value: function(u, r) {
          if (!u)
            return [];
          if (typeof u == "function" && (u = u(r)), typeof u == "string" && (u = [u]), Object.prototype.toString.apply(u) === "[object Array]")
            return u;
          if (!r)
            return u.default || [];
          var s = u[r];
          return s || (s = u[this.getScriptPartFromCode(r)]), s || (s = u[this.formatLanguageCode(r)]), s || (s = u[this.getLanguagePartFromCode(r)]), s || (s = u.default), s || [];
        } }, { key: "toResolveHierarchy", value: function(u, r) {
          var s = this, d = this.getFallbackCodes(r || this.options.fallbackLng || [], u), O = [], x = function(V) {
            V && (s.isSupportedCode(V) ? O.push(V) : s.logger.warn("rejecting language code not found in supportedLngs: ".concat(V)));
          };
          return typeof u == "string" && u.indexOf("-") > -1 ? (this.options.load !== "languageOnly" && x(this.formatLanguageCode(u)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && x(this.getScriptPartFromCode(u)), this.options.load !== "currentOnly" && x(this.getLanguagePartFromCode(u))) : typeof u == "string" && x(this.formatLanguageCode(u)), d.forEach(function(V) {
            O.indexOf(V) < 0 && x(s.formatLanguageCode(V));
          }), O;
        } }]), a;
      }(), F = [{ lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 }, { lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"], nr: [1, 2], fc: 2 }, { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 }, { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 }, { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 }, { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 }, { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 }, { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 }, { lngs: ["fr"], nr: [1, 2], fc: 9 }, { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 }, { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 }, { lngs: ["is"], nr: [1, 2], fc: 12 }, { lngs: ["jv"], nr: [0, 1], fc: 13 }, { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 }, { lngs: ["lt"], nr: [1, 2, 10], fc: 15 }, { lngs: ["lv"], nr: [1, 2, 0], fc: 16 }, { lngs: ["mk"], nr: [1, 2], fc: 17 }, { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 }, { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 }, { lngs: ["or"], nr: [2, 1], fc: 2 }, { lngs: ["ro"], nr: [1, 2, 20], fc: 20 }, { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 }, { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 }], Z = { 1: function(a) {
        return Number(a > 1);
      }, 2: function(a) {
        return Number(a != 1);
      }, 3: function(a) {
        return 0;
      }, 4: function(a) {
        return Number(a % 10 == 1 && a % 100 != 11 ? 0 : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? 1 : 2);
      }, 5: function(a) {
        return Number(a == 0 ? 0 : a == 1 ? 1 : a == 2 ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5);
      }, 6: function(a) {
        return Number(a == 1 ? 0 : a >= 2 && a <= 4 ? 1 : 2);
      }, 7: function(a) {
        return Number(a == 1 ? 0 : a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? 1 : 2);
      }, 8: function(a) {
        return Number(a == 1 ? 0 : a == 2 ? 1 : a != 8 && a != 11 ? 2 : 3);
      }, 9: function(a) {
        return Number(a >= 2);
      }, 10: function(a) {
        return Number(a == 1 ? 0 : a == 2 ? 1 : a < 7 ? 2 : a < 11 ? 3 : 4);
      }, 11: function(a) {
        return Number(a == 1 || a == 11 ? 0 : a == 2 || a == 12 ? 1 : a > 2 && a < 20 ? 2 : 3);
      }, 12: function(a) {
        return Number(a % 10 != 1 || a % 100 == 11);
      }, 13: function(a) {
        return Number(a !== 0);
      }, 14: function(a) {
        return Number(a == 1 ? 0 : a == 2 ? 1 : a == 3 ? 2 : 3);
      }, 15: function(a) {
        return Number(a % 10 == 1 && a % 100 != 11 ? 0 : a % 10 >= 2 && (a % 100 < 10 || a % 100 >= 20) ? 1 : 2);
      }, 16: function(a) {
        return Number(a % 10 == 1 && a % 100 != 11 ? 0 : a !== 0 ? 1 : 2);
      }, 17: function(a) {
        return Number(a == 1 || a % 10 == 1 && a % 100 != 11 ? 0 : 1);
      }, 18: function(a) {
        return Number(a == 0 ? 0 : a == 1 ? 1 : 2);
      }, 19: function(a) {
        return Number(a == 1 ? 0 : a == 0 || a % 100 > 1 && a % 100 < 11 ? 1 : a % 100 > 10 && a % 100 < 20 ? 2 : 3);
      }, 20: function(a) {
        return Number(a == 1 ? 0 : a == 0 || a % 100 > 0 && a % 100 < 20 ? 1 : 2);
      }, 21: function(a) {
        return Number(a % 100 == 1 ? 1 : a % 100 == 2 ? 2 : a % 100 == 3 || a % 100 == 4 ? 3 : 0);
      }, 22: function(a) {
        return Number(a == 1 ? 0 : a == 2 ? 1 : (a < 0 || a > 10) && a % 10 == 0 ? 2 : 3);
      } };
      function w() {
        var a = {};
        return F.forEach(function(u) {
          u.lngs.forEach(function(r) {
            a[r] = { numbers: u.nr, plurals: Z[u.fc] };
          });
        }), a;
      }
      var y = function() {
        function a(u) {
          var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          Object(E.a)(this, a), this.languageUtils = u, this.options = r, this.logger = it.create("pluralResolver"), this.rules = w();
        }
        return Object(_.a)(a, [{ key: "addRule", value: function(u, r) {
          this.rules[u] = r;
        } }, { key: "getRule", value: function(u) {
          return this.rules[u] || this.rules[this.languageUtils.getLanguagePartFromCode(u)];
        } }, { key: "needsPlural", value: function(u) {
          var r = this.getRule(u);
          return r && r.numbers.length > 1;
        } }, { key: "getPluralFormsOfKey", value: function(u, r) {
          return this.getSuffixes(u).map(function(s) {
            return r + s;
          });
        } }, { key: "getSuffixes", value: function(u) {
          var r = this, s = this.getRule(u);
          return s ? s.numbers.map(function(d) {
            return r.getSuffix(u, d);
          }) : [];
        } }, { key: "getSuffix", value: function(u, r) {
          var s = this, d = this.getRule(u);
          if (d) {
            var O = d.noAbs ? d.plurals(r) : d.plurals(Math.abs(r)), x = d.numbers[O];
            this.options.simplifyPluralSuffix && d.numbers.length === 2 && d.numbers[0] === 1 && (x === 2 ? x = "plural" : x === 1 && (x = ""));
            var V = function() {
              return s.options.prepend && x.toString() ? s.options.prepend + x.toString() : x.toString();
            };
            return this.options.compatibilityJSON === "v1" ? x === 1 ? "" : typeof x == "number" ? "_plural_".concat(x.toString()) : V() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && d.numbers.length === 2 && d.numbers[0] === 1 ? V() : this.options.prepend && O.toString() ? this.options.prepend + O.toString() : O.toString();
          }
          return this.logger.warn("no plural rule found for: ".concat(u)), "";
        } }]), a;
      }(), ct = function() {
        function a() {
          var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          Object(E.a)(this, a), this.logger = it.create("interpolator"), this.options = u, this.format = u.interpolation && u.interpolation.format || function(r) {
            return r;
          }, this.init(u);
        }
        return Object(_.a)(a, [{ key: "init", value: function() {
          var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          u.interpolation || (u.interpolation = { escapeValue: !0 });
          var r = u.interpolation;
          this.escape = r.escape !== void 0 ? r.escape : N, this.escapeValue = r.escapeValue === void 0 || r.escapeValue, this.useRawValueToEscape = r.useRawValueToEscape !== void 0 && r.useRawValueToEscape, this.prefix = r.prefix ? j(r.prefix) : r.prefixEscaped || "{{", this.suffix = r.suffix ? j(r.suffix) : r.suffixEscaped || "}}", this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",", this.unescapePrefix = r.unescapeSuffix ? "" : r.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : r.unescapeSuffix || "", this.nestingPrefix = r.nestingPrefix ? j(r.nestingPrefix) : r.nestingPrefixEscaped || j("$t("), this.nestingSuffix = r.nestingSuffix ? j(r.nestingSuffix) : r.nestingSuffixEscaped || j(")"), this.nestingOptionsSeparator = r.nestingOptionsSeparator ? r.nestingOptionsSeparator : r.nestingOptionsSeparator || ",", this.maxReplaces = r.maxReplaces ? r.maxReplaces : 1e3, this.alwaysFormat = r.alwaysFormat !== void 0 && r.alwaysFormat, this.resetRegExp();
        } }, { key: "reset", value: function() {
          this.options && this.init(this.options);
        } }, { key: "resetRegExp", value: function() {
          var u = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(u, "g");
          var r = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
          this.regexpUnescape = new RegExp(r, "g");
          var s = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(s, "g");
        } }, { key: "interpolate", value: function(u, r, s, d) {
          var O, x, V, q = this, tt = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
          function wt(dt) {
            return dt.replace(/\$/g, "$$$$");
          }
          var pt = function(dt) {
            if (dt.indexOf(q.formatSeparator) < 0) {
              var U = Nt(r, tt, dt);
              return q.alwaysFormat ? q.format(U, void 0, s) : U;
            }
            var c = dt.split(q.formatSeparator), p = c.shift().trim(), nt = c.join(q.formatSeparator).trim();
            return q.format(Nt(r, tt, p), nt, s, d);
          };
          this.resetRegExp();
          var Lt = d && d.missingInterpolationHandler || this.options.missingInterpolationHandler, Ot = d && d.interpolation && d.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
          return [{ regex: this.regexpUnescape, safeValue: function(dt) {
            return wt(dt);
          } }, { regex: this.regexp, safeValue: function(dt) {
            return q.escapeValue ? wt(q.escape(dt)) : wt(dt);
          } }].forEach(function(dt) {
            for (V = 0; O = dt.regex.exec(u); ) {
              if ((x = pt(O[1].trim())) === void 0)
                if (typeof Lt == "function") {
                  var U = Lt(u, O, d);
                  x = typeof U == "string" ? U : "";
                } else {
                  if (Ot) {
                    x = O[0];
                    continue;
                  }
                  q.logger.warn("missed to pass in variable ".concat(O[1], " for interpolating ").concat(u)), x = "";
                }
              else
                typeof x == "string" || q.useRawValueToEscape || (x = st(x));
              if (u = u.replace(O[0], dt.safeValue(x)), dt.regex.lastIndex = 0, ++V >= q.maxReplaces)
                break;
            }
          }), u;
        } }, { key: "nest", value: function(u, r) {
          var s, d, O = this, x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, V = m({}, x);
          function q(Lt, Ot) {
            var dt = this.nestingOptionsSeparator;
            if (Lt.indexOf(dt) < 0)
              return Lt;
            var U = Lt.split(new RegExp("".concat(dt, "[ ]*{"))), c = "{".concat(U[1]);
            Lt = U[0], c = (c = this.interpolate(c, V)).replace(/'/g, '"');
            try {
              V = JSON.parse(c), Ot && (V = m({}, Ot, V));
            } catch (p) {
              return this.logger.warn("failed parsing options string in nesting for key ".concat(Lt), p), "".concat(Lt).concat(dt).concat(c);
            }
            return delete V.defaultValue, Lt;
          }
          for (V.applyPostProcessor = !1, delete V.defaultValue; s = this.nestingRegexp.exec(u); ) {
            var tt = [], wt = !1;
            if (s[0].includes(this.formatSeparator) && !/{.*}/.test(s[1])) {
              var pt = s[1].split(this.formatSeparator).map(function(Lt) {
                return Lt.trim();
              });
              s[1] = pt.shift(), tt = pt, wt = !0;
            }
            if ((d = r(q.call(this, s[1].trim(), V), V)) && s[0] === u && typeof d != "string")
              return d;
            typeof d != "string" && (d = st(d)), d || (this.logger.warn("missed to resolve ".concat(s[1], " for nesting ").concat(u)), d = ""), wt && (d = tt.reduce(function(Lt, Ot) {
              return O.format(Lt, Ot, x.lng, x);
            }, d.trim())), u = u.replace(s[0], d), this.regexp.lastIndex = 0;
          }
          return u;
        } }]), a;
      }(), ut = function(a) {
        function u(r, s, d) {
          var O, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          return Object(E.a)(this, u), O = z(this, T(u).call(this)), l && Q.call(v(O)), O.backend = r, O.store = s, O.services = d, O.languageUtils = d.languageUtils, O.options = x, O.logger = it.create("backendConnector"), O.state = {}, O.queue = [], O.backend && O.backend.init && O.backend.init(d, x.backend, x), O;
        }
        return ot(u, a), Object(_.a)(u, [{ key: "queueLoad", value: function(r, s, d, O) {
          var x = this, V = [], q = [], tt = [], wt = [];
          return r.forEach(function(pt) {
            var Lt = !0;
            s.forEach(function(Ot) {
              var dt = "".concat(pt, "|").concat(Ot);
              !d.reload && x.store.hasResourceBundle(pt, Ot) ? x.state[dt] = 2 : x.state[dt] < 0 || (x.state[dt] === 1 ? q.indexOf(dt) < 0 && q.push(dt) : (x.state[dt] = 1, Lt = !1, q.indexOf(dt) < 0 && q.push(dt), V.indexOf(dt) < 0 && V.push(dt), wt.indexOf(Ot) < 0 && wt.push(Ot)));
            }), Lt || tt.push(pt);
          }), (V.length || q.length) && this.queue.push({ pending: q, loaded: {}, errors: [], callback: O }), { toLoad: V, pending: q, toLoadLanguages: tt, toLoadNamespaces: wt };
        } }, { key: "loaded", value: function(r, s, d) {
          var O = r.split("|"), x = O[0], V = O[1];
          s && this.emit("failedLoading", x, V, s), d && this.store.addResourceBundle(x, V, d), this.state[r] = s ? -1 : 2;
          var q = {};
          this.queue.forEach(function(tt) {
            var wt, pt, Lt, Ot, dt;
            wt = tt.loaded, pt = V, Lt = M(wt, [x], Object), Ot = Lt.obj, dt = Lt.k, Ot[dt] = Ot[dt] || [], Ot[dt].push(pt), function(U, c) {
              for (var p = U.indexOf(c); p !== -1; )
                U.splice(p, 1), p = U.indexOf(c);
            }(tt.pending, r), s && tt.errors.push(s), tt.pending.length !== 0 || tt.done || (Object.keys(tt.loaded).forEach(function(U) {
              q[U] || (q[U] = []), tt.loaded[U].length && tt.loaded[U].forEach(function(c) {
                q[U].indexOf(c) < 0 && q[U].push(c);
              });
            }), tt.done = !0, tt.errors.length ? tt.callback(tt.errors) : tt.callback());
          }), this.emit("loaded", q), this.queue = this.queue.filter(function(tt) {
            return !tt.done;
          });
        } }, { key: "read", value: function(r, s, d) {
          var O = this, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, V = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 350, q = arguments.length > 5 ? arguments[5] : void 0;
          return r.length ? this.backend[d](r, s, function(tt, wt) {
            tt && wt && x < 5 ? setTimeout(function() {
              O.read.call(O, r, s, d, x + 1, 2 * V, q);
            }, V) : q(tt, wt);
          }) : q(null, {});
        } }, { key: "prepareLoading", value: function(r, s) {
          var d = this, O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."), x && x();
          typeof r == "string" && (r = this.languageUtils.toResolveHierarchy(r)), typeof s == "string" && (s = [s]);
          var V = this.queueLoad(r, s, O, x);
          if (!V.toLoad.length)
            return V.pending.length || x(), null;
          V.toLoad.forEach(function(q) {
            d.loadOne(q);
          });
        } }, { key: "load", value: function(r, s, d) {
          this.prepareLoading(r, s, {}, d);
        } }, { key: "reload", value: function(r, s, d) {
          this.prepareLoading(r, s, { reload: !0 }, d);
        } }, { key: "loadOne", value: function(r) {
          var s = this, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", O = r.split("|"), x = O[0], V = O[1];
          this.read(x, V, "read", void 0, void 0, function(q, tt) {
            q && s.logger.warn("".concat(d, "loading namespace ").concat(V, " for language ").concat(x, " failed"), q), !q && tt && s.logger.log("".concat(d, "loaded namespace ").concat(V, " for language ").concat(x), tt), s.loaded(r, q, tt);
          });
        } }, { key: "saveMissing", value: function(r, s, d, O, x) {
          var V = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
          this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(s) ? this.logger.warn('did not save key "'.concat(d, '" as the namespace "').concat(s, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : d != null && d !== "" && (this.backend && this.backend.create && this.backend.create(r, s, d, O, null, m({}, V, { isUpdate: x })), r && r[0] && this.store.addResource(r[0], s, d, O));
        } }]), u;
      }(Q);
      function W() {
        return { debug: !1, initImmediate: !0, ns: ["translation"], defaultNS: ["translation"], fallbackLng: ["dev"], fallbackNS: !1, whitelist: !1, nonExplicitWhitelist: !1, supportedLngs: !1, nonExplicitSupportedLngs: !1, load: "all", preload: !1, simplifyPluralSuffix: !0, keySeparator: ".", nsSeparator: ":", pluralSeparator: "_", contextSeparator: "_", partialBundledLanguages: !1, saveMissing: !1, updateMissing: !1, saveMissingTo: "fallback", saveMissingPlurals: !0, missingKeyHandler: !1, missingInterpolationHandler: !1, postProcess: !1, postProcessPassResolved: !1, returnNull: !0, returnEmptyString: !0, returnObjects: !1, joinArrays: !1, returnedObjectHandler: !1, parseMissingKeyHandler: !1, appendNamespaceToMissingKey: !1, appendNamespaceToCIMode: !1, overloadTranslationOptionHandler: function(a) {
          var u = {};
          if (g(a[1]) === "object" && (u = a[1]), typeof a[1] == "string" && (u.defaultValue = a[1]), typeof a[2] == "string" && (u.tDescription = a[2]), g(a[2]) === "object" || g(a[3]) === "object") {
            var r = a[3] || a[2];
            Object.keys(r).forEach(function(s) {
              u[s] = r[s];
            });
          }
          return u;
        }, interpolation: { escapeValue: !0, format: function(a, u, r, s) {
          return a;
        }, prefix: "{{", suffix: "}}", formatSeparator: ",", unescapePrefix: "-", nestingPrefix: "$t(", nestingSuffix: ")", nestingOptionsSeparator: ",", maxReplaces: 1e3, skipOnVariables: !1 } };
      }
      function R(a) {
        return typeof a.ns == "string" && (a.ns = [a.ns]), typeof a.fallbackLng == "string" && (a.fallbackLng = [a.fallbackLng]), typeof a.fallbackNS == "string" && (a.fallbackNS = [a.fallbackNS]), a.whitelist && (a.whitelist && a.whitelist.indexOf("cimode") < 0 && (a.whitelist = a.whitelist.concat(["cimode"])), a.supportedLngs = a.whitelist), a.nonExplicitWhitelist && (a.nonExplicitSupportedLngs = a.nonExplicitWhitelist), a.supportedLngs && a.supportedLngs.indexOf("cimode") < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])), a;
      }
      function ft() {
      }
      var $ = new (function(a) {
        function u() {
          var r, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
          if (Object(E.a)(this, u), r = z(this, T(u).call(this)), l && Q.call(v(r)), r.options = R(s), r.services = {}, r.logger = it, r.modules = { external: [] }, d && !r.isInitialized && !s.isClone) {
            if (!r.options.initImmediate)
              return r.init(s, d), z(r, v(r));
            setTimeout(function() {
              r.init(s, d);
            }, 0);
          }
          return r;
        }
        return ot(u, a), Object(_.a)(u, [{ key: "init", value: function() {
          var r = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
          function O(Ot) {
            return Ot ? typeof Ot == "function" ? new Ot() : Ot : null;
          }
          if (typeof s == "function" && (d = s, s = {}), s.whitelist && !s.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), s.nonExplicitWhitelist && !s.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = m({}, W(), this.options, R(s)), this.format = this.options.interpolation.format, d || (d = ft), !this.options.isClone) {
            this.modules.logger ? it.init(O(this.modules.logger), this.options) : it.init(null, this.options);
            var x = new Mt(this.options);
            this.store = new k(this.options.resources, this.options);
            var V = this.services;
            V.logger = it, V.resourceStore = this.store, V.languageUtils = x, V.pluralResolver = new y(x, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix }), V.interpolator = new ct(this.options), V.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }, V.backendConnector = new ut(O(this.modules.backend), V.resourceStore, V, this.options), V.backendConnector.on("*", function(Ot) {
              for (var dt = arguments.length, U = new Array(dt > 1 ? dt - 1 : 0), c = 1; c < dt; c++)
                U[c - 1] = arguments[c];
              r.emit.apply(r, [Ot].concat(U));
            }), this.modules.languageDetector && (V.languageDetector = O(this.modules.languageDetector), V.languageDetector.init(V, this.options.detection, this.options)), this.modules.i18nFormat && (V.i18nFormat = O(this.modules.i18nFormat), V.i18nFormat.init && V.i18nFormat.init(this)), this.translator = new vt(this.services, this.options), this.translator.on("*", function(Ot) {
              for (var dt = arguments.length, U = new Array(dt > 1 ? dt - 1 : 0), c = 1; c < dt; c++)
                U[c - 1] = arguments[c];
              r.emit.apply(r, [Ot].concat(U));
            }), this.modules.external.forEach(function(Ot) {
              Ot.init && Ot.init(r);
            });
          }
          if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            var q = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            q.length > 0 && q[0] !== "dev" && (this.options.lng = q[0]);
          }
          this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
          var tt = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
          tt.forEach(function(Ot) {
            r[Ot] = function() {
              var dt;
              return (dt = r.store)[Ot].apply(dt, arguments);
            };
          });
          var wt = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
          wt.forEach(function(Ot) {
            r[Ot] = function() {
              var dt;
              return (dt = r.store)[Ot].apply(dt, arguments), r;
            };
          });
          var pt = et(), Lt = function() {
            var Ot = function(dt, U) {
              r.isInitialized && r.logger.warn("init: i18next is already initialized. You should call init just once!"), r.isInitialized = !0, r.options.isClone || r.logger.log("initialized", r.options), r.emit("initialized", r.options), pt.resolve(U), d(dt, U);
            };
            if (r.languages && r.options.compatibilityAPI !== "v1" && !r.isInitialized)
              return Ot(null, r.t.bind(r));
            r.changeLanguage(r.options.lng, Ot);
          };
          return this.options.resources || !this.options.initImmediate ? Lt() : setTimeout(Lt, 0), pt;
        } }, { key: "loadResources", value: function(r) {
          var s = this, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ft, O = d, x = typeof r == "string" ? r : this.language;
          if (typeof r == "function" && (O = r), !this.options.resources || this.options.partialBundledLanguages) {
            if (x && x.toLowerCase() === "cimode")
              return O();
            var V = [], q = function(wt) {
              wt && s.services.languageUtils.toResolveHierarchy(wt).forEach(function(pt) {
                V.indexOf(pt) < 0 && V.push(pt);
              });
            };
            if (x)
              q(x);
            else {
              var tt = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
              tt.forEach(function(wt) {
                return q(wt);
              });
            }
            this.options.preload && this.options.preload.forEach(function(wt) {
              return q(wt);
            }), this.services.backendConnector.load(V, this.options.ns, O);
          } else
            O(null);
        } }, { key: "reloadResources", value: function(r, s, d) {
          var O = et();
          return r || (r = this.languages), s || (s = this.options.ns), d || (d = ft), this.services.backendConnector.reload(r, s, function(x) {
            O.resolve(), d(x);
          }), O;
        } }, { key: "use", value: function(r) {
          if (!r)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
          if (!r.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
          return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && I.addPostProcessor(r), r.type === "3rdParty" && this.modules.external.push(r), this;
        } }, { key: "changeLanguage", value: function(r, s) {
          var d = this;
          this.isLanguageChangingTo = r;
          var O = et();
          this.emit("languageChanging", r);
          var x = function(V) {
            var q = typeof V == "string" ? V : d.services.languageUtils.getBestMatchFromCodes(V);
            q && (d.language || (d.language = q, d.languages = d.services.languageUtils.toResolveHierarchy(q)), d.translator.language || d.translator.changeLanguage(q), d.services.languageDetector && d.services.languageDetector.cacheUserLanguage(q)), d.loadResources(q, function(tt) {
              (function(wt, pt) {
                pt ? (d.language = pt, d.languages = d.services.languageUtils.toResolveHierarchy(pt), d.translator.changeLanguage(pt), d.isLanguageChangingTo = void 0, d.emit("languageChanged", pt), d.logger.log("languageChanged", pt)) : d.isLanguageChangingTo = void 0, O.resolve(function() {
                  return d.t.apply(d, arguments);
                }), s && s(wt, function() {
                  return d.t.apply(d, arguments);
                });
              })(tt, q);
            });
          };
          return r || !this.services.languageDetector || this.services.languageDetector.async ? !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(x) : x(r) : x(this.services.languageDetector.detect()), O;
        } }, { key: "getFixedT", value: function(r, s) {
          var d = this, O = function x(V, q) {
            var tt;
            if (g(q) !== "object") {
              for (var wt = arguments.length, pt = new Array(wt > 2 ? wt - 2 : 0), Lt = 2; Lt < wt; Lt++)
                pt[Lt - 2] = arguments[Lt];
              tt = d.options.overloadTranslationOptionHandler([V, q].concat(pt));
            } else
              tt = m({}, q);
            return tt.lng = tt.lng || x.lng, tt.lngs = tt.lngs || x.lngs, tt.ns = tt.ns || x.ns, d.t(V, tt);
          };
          return typeof r == "string" ? O.lng = r : O.lngs = r, O.ns = s, O;
        } }, { key: "t", value: function() {
          var r;
          return this.translator && (r = this.translator).translate.apply(r, arguments);
        } }, { key: "exists", value: function() {
          var r;
          return this.translator && (r = this.translator).exists.apply(r, arguments);
        } }, { key: "setDefaultNamespace", value: function(r) {
          this.options.defaultNS = r;
        } }, { key: "hasLoadedNamespace", value: function(r) {
          var s = this, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
          if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
          var O = this.languages[0], x = !!this.options && this.options.fallbackLng, V = this.languages[this.languages.length - 1];
          if (O.toLowerCase() === "cimode")
            return !0;
          var q = function(wt, pt) {
            var Lt = s.services.backendConnector.state["".concat(wt, "|").concat(pt)];
            return Lt === -1 || Lt === 2;
          };
          if (d.precheck) {
            var tt = d.precheck(this, q);
            if (tt !== void 0)
              return tt;
          }
          return !!this.hasResourceBundle(O, r) || !this.services.backendConnector.backend || !(!q(O, r) || x && !q(V, r));
        } }, { key: "loadNamespaces", value: function(r, s) {
          var d = this, O = et();
          return this.options.ns ? (typeof r == "string" && (r = [r]), r.forEach(function(x) {
            d.options.ns.indexOf(x) < 0 && d.options.ns.push(x);
          }), this.loadResources(function(x) {
            O.resolve(), s && s(x);
          }), O) : (s && s(), Promise.resolve());
        } }, { key: "loadLanguages", value: function(r, s) {
          var d = et();
          typeof r == "string" && (r = [r]);
          var O = this.options.preload || [], x = r.filter(function(V) {
            return O.indexOf(V) < 0;
          });
          return x.length ? (this.options.preload = O.concat(x), this.loadResources(function(V) {
            d.resolve(), s && s(V);
          }), d) : (s && s(), Promise.resolve());
        } }, { key: "dir", value: function(r) {
          return r || (r = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), r ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(r)) >= 0 ? "rtl" : "ltr" : "rtl";
        } }, { key: "createInstance", value: function() {
          var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
          return new u(r, s);
        } }, { key: "cloneInstance", value: function() {
          var r = this, s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ft, O = m({}, this.options, s, { isClone: !0 }), x = new u(O), V = ["store", "services", "language"];
          return V.forEach(function(q) {
            x[q] = r[q];
          }), x.services = m({}, this.services), x.services.utils = { hasLoadedNamespace: x.hasLoadedNamespace.bind(x) }, x.translator = new vt(x.services, x.options), x.translator.on("*", function(q) {
            for (var tt = arguments.length, wt = new Array(tt > 1 ? tt - 1 : 0), pt = 1; pt < tt; pt++)
              wt[pt - 1] = arguments[pt];
            x.emit.apply(x, [q].concat(wt));
          }), x.init(O, d), x.translator.options = x.options, x.translator.backendConnector.services.utils = { hasLoadedNamespace: x.hasLoadedNamespace.bind(x) }, x;
        } }]), u;
      }(Q))();
      G.default = $;
    }]);
  });
})(Yr);
const Kr = Oe.Desktop.logger.createLogger("adhoc-record");
class Xr extends HTMLElement {
  constructor() {
    super(), this.interactionId = null;
  }
  connectedCallback() {
    this.init(), Oe.Desktop.agentContact.addEventListener("eCallRecordingStarted", (hn) => {
      this.interactionId = hn.data.interactionId, this.pauseRecord();
    });
  }
  disconnectedCallback() {
    Oe.Desktop.agentContact.removeAllEventListeners();
  }
  async init() {
    Oe.Desktop.config.init();
  }
  async pauseRecord() {
    await Oe.Desktop.agentContact.pauseRecording({ interactionId: this.interactionId }), Kr.info("Call recording paused by adhoc-record widget");
  }
}
customElements.define("adhoc-record", Xr);
