function Ly(a, r) {
    for (var s = 0; s < r.length; s++) {
        const c = r[s];
        if (typeof c != "string" && !Array.isArray(c)) {
            for (const u in c)
                if (u !== "default" && !(u in a)) {
                    const d = Object.getOwnPropertyDescriptor(c, u);
                    d && Object.defineProperty(a, u, d.get ? d : {
                        enumerable: !0,
                        get: () => c[u]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]')) c(u);
    new MutationObserver(u => {
        for (const d of u)
            if (d.type === "childList")
                for (const h of d.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && c(h)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(u) {
        const d = {};
        return u.integrity && (d.integrity = u.integrity), u.referrerPolicy && (d.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? d.credentials = "include" : u.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function c(u) {
        if (u.ep) return;
        u.ep = !0;
        const d = s(u);
        fetch(u.href, d)
    }
})();

function Ev(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var Gs = {
        exports: {}
    },
    Oi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uh;

function qy() {
    if (Uh) return Oi;
    Uh = 1;
    var a = Symbol.for("react.transitional.element"),
        r = Symbol.for("react.fragment");

    function s(c, u, d) {
        var h = null;
        if (d !== void 0 && (h = "" + d), u.key !== void 0 && (h = "" + u.key), "key" in u) {
            d = {};
            for (var g in u) g !== "key" && (d[g] = u[g])
        } else d = u;
        return u = d.ref, {
            $$typeof: a,
            type: c,
            key: h,
            ref: u !== void 0 ? u : null,
            props: d
        }
    }
    return Oi.Fragment = r, Oi.jsx = s, Oi.jsxs = s, Oi
}
var Hh;

function Vy() {
    return Hh || (Hh = 1, Gs.exports = qy()), Gs.exports
}
var f = Vy(),
    Ys = {
        exports: {}
    },
    he = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kh;

function Gy() {
    if (kh) return he;
    kh = 1;
    var a = Symbol.for("react.transitional.element"),
        r = Symbol.for("react.portal"),
        s = Symbol.for("react.fragment"),
        c = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        d = Symbol.for("react.consumer"),
        h = Symbol.for("react.context"),
        g = Symbol.for("react.forward_ref"),
        y = Symbol.for("react.suspense"),
        v = Symbol.for("react.memo"),
        b = Symbol.for("react.lazy"),
        A = Symbol.iterator;

    function T(E) {
        return E === null || typeof E != "object" ? null : (E = A && E[A] || E["@@iterator"], typeof E == "function" ? E : null)
    }
    var j = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        U = Object.assign,
        w = {};

    function M(E, X, W) {
        this.props = E, this.context = X, this.refs = w, this.updater = W || j
    }
    M.prototype.isReactComponent = {}, M.prototype.setState = function(E, X) {
        if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, X, "setState")
    }, M.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    };

    function z() {}
    z.prototype = M.prototype;

    function k(E, X, W) {
        this.props = E, this.context = X, this.refs = w, this.updater = W || j
    }
    var B = k.prototype = new z;
    B.constructor = k, U(B, M.prototype), B.isPureReactComponent = !0;
    var P = Array.isArray,
        q = {
            H: null,
            A: null,
            T: null,
            S: null,
            V: null
        },
        V = Object.prototype.hasOwnProperty;

    function Y(E, X, W, $, I, me) {
        return W = me.ref, {
            $$typeof: a,
            type: E,
            key: X,
            ref: W !== void 0 ? W : null,
            props: me
        }
    }

    function Z(E, X) {
        return Y(E.type, X, void 0, void 0, void 0, E.props)
    }

    function oe(E) {
        return typeof E == "object" && E !== null && E.$$typeof === a
    }

    function ve(E) {
        var X = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(W) {
            return X[W]
        })
    }
    var be = /\/+/g;

    function de(E, X) {
        return typeof E == "object" && E !== null && E.key != null ? ve("" + E.key) : X.toString(36)
    }

    function ge() {}

    function xe(E) {
        switch (E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason;
            default:
                switch (typeof E.status == "string" ? E.then(ge, ge) : (E.status = "pending", E.then(function(X) {
                        E.status === "pending" && (E.status = "fulfilled", E.value = X)
                    }, function(X) {
                        E.status === "pending" && (E.status = "rejected", E.reason = X)
                    })), E.status) {
                    case "fulfilled":
                        return E.value;
                    case "rejected":
                        throw E.reason
                }
        }
        throw E
    }

    function ce(E, X, W, $, I) {
        var me = typeof E;
        (me === "undefined" || me === "boolean") && (E = null);
        var ie = !1;
        if (E === null) ie = !0;
        else switch (me) {
            case "bigint":
            case "string":
            case "number":
                ie = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                    case a:
                    case r:
                        ie = !0;
                        break;
                    case b:
                        return ie = E._init, ce(ie(E._payload), X, W, $, I)
                }
        }
        if (ie) return I = I(E), ie = $ === "" ? "." + de(E, 0) : $, P(I) ? (W = "", ie != null && (W = ie.replace(be, "$&/") + "/"), ce(I, X, W, "", function(Re) {
            return Re
        })) : I != null && (oe(I) && (I = Z(I, W + (I.key == null || E && E.key === I.key ? "" : ("" + I.key).replace(be, "$&/") + "/") + ie)), X.push(I)), 1;
        ie = 0;
        var F = $ === "" ? "." : $ + ":";
        if (P(E))
            for (var re = 0; re < E.length; re++) $ = E[re], me = F + de($, re), ie += ce($, X, W, me, I);
        else if (re = T(E), typeof re == "function")
            for (E = re.call(E), re = 0; !($ = E.next()).done;) $ = $.value, me = F + de($, re++), ie += ce($, X, W, me, I);
        else if (me === "object") {
            if (typeof E.then == "function") return ce(xe(E), X, W, $, I);
            throw X = String(E), Error("Objects are not valid as a React child (found: " + (X === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : X) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ie
    }

    function O(E, X, W) {
        if (E == null) return E;
        var $ = [],
            I = 0;
        return ce(E, $, "", "", function(me) {
            return X.call(W, me, I++)
        }), $
    }

    function J(E) {
        if (E._status === -1) {
            var X = E._result;
            X = X(), X.then(function(W) {
                (E._status === 0 || E._status === -1) && (E._status = 1, E._result = W)
            }, function(W) {
                (E._status === 0 || E._status === -1) && (E._status = 2, E._result = W)
            }), E._status === -1 && (E._status = 0, E._result = X)
        }
        if (E._status === 1) return E._result.default;
        throw E._result
    }
    var L = typeof reportError == "function" ? reportError : function(E) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var X = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                error: E
            });
            if (!window.dispatchEvent(X)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return
        }
        console.error(E)
    };

    function le() {}
    return he.Children = {
        map: O,
        forEach: function(E, X, W) {
            O(E, function() {
                X.apply(this, arguments)
            }, W)
        },
        count: function(E) {
            var X = 0;
            return O(E, function() {
                X++
            }), X
        },
        toArray: function(E) {
            return O(E, function(X) {
                return X
            }) || []
        },
        only: function(E) {
            if (!oe(E)) throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    }, he.Component = M, he.Fragment = s, he.Profiler = u, he.PureComponent = k, he.StrictMode = c, he.Suspense = y, he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, he.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return q.H.useMemoCache(E)
        }
    }, he.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }, he.cloneElement = function(E, X, W) {
        if (E == null) throw Error("The argument must be a React element, but you passed " + E + ".");
        var $ = U({}, E.props),
            I = E.key,
            me = void 0;
        if (X != null)
            for (ie in X.ref !== void 0 && (me = void 0), X.key !== void 0 && (I = "" + X.key), X) !V.call(X, ie) || ie === "key" || ie === "__self" || ie === "__source" || ie === "ref" && X.ref === void 0 || ($[ie] = X[ie]);
        var ie = arguments.length - 2;
        if (ie === 1) $.children = W;
        else if (1 < ie) {
            for (var F = Array(ie), re = 0; re < ie; re++) F[re] = arguments[re + 2];
            $.children = F
        }
        return Y(E.type, I, void 0, void 0, me, $)
    }, he.createContext = function(E) {
        return E = {
            $$typeof: h,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, E.Provider = E, E.Consumer = {
            $$typeof: d,
            _context: E
        }, E
    }, he.createElement = function(E, X, W) {
        var $, I = {},
            me = null;
        if (X != null)
            for ($ in X.key !== void 0 && (me = "" + X.key), X) V.call(X, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (I[$] = X[$]);
        var ie = arguments.length - 2;
        if (ie === 1) I.children = W;
        else if (1 < ie) {
            for (var F = Array(ie), re = 0; re < ie; re++) F[re] = arguments[re + 2];
            I.children = F
        }
        if (E && E.defaultProps)
            for ($ in ie = E.defaultProps, ie) I[$] === void 0 && (I[$] = ie[$]);
        return Y(E, me, void 0, void 0, null, I)
    }, he.createRef = function() {
        return {
            current: null
        }
    }, he.forwardRef = function(E) {
        return {
            $$typeof: g,
            render: E
        }
    }, he.isValidElement = oe, he.lazy = function(E) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: J
        }
    }, he.memo = function(E, X) {
        return {
            $$typeof: v,
            type: E,
            compare: X === void 0 ? null : X
        }
    }, he.startTransition = function(E) {
        var X = q.T,
            W = {};
        q.T = W;
        try {
            var $ = E(),
                I = q.S;
            I !== null && I(W, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(le, L)
        } catch (me) {
            L(me)
        } finally {
            q.T = X
        }
    }, he.unstable_useCacheRefresh = function() {
        return q.H.useCacheRefresh()
    }, he.use = function(E) {
        return q.H.use(E)
    }, he.useActionState = function(E, X, W) {
        return q.H.useActionState(E, X, W)
    }, he.useCallback = function(E, X) {
        return q.H.useCallback(E, X)
    }, he.useContext = function(E) {
        return q.H.useContext(E)
    }, he.useDebugValue = function() {}, he.useDeferredValue = function(E, X) {
        return q.H.useDeferredValue(E, X)
    }, he.useEffect = function(E, X, W) {
        var $ = q.H;
        if (typeof W == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return $.useEffect(E, X)
    }, he.useId = function() {
        return q.H.useId()
    }, he.useImperativeHandle = function(E, X, W) {
        return q.H.useImperativeHandle(E, X, W)
    }, he.useInsertionEffect = function(E, X) {
        return q.H.useInsertionEffect(E, X)
    }, he.useLayoutEffect = function(E, X) {
        return q.H.useLayoutEffect(E, X)
    }, he.useMemo = function(E, X) {
        return q.H.useMemo(E, X)
    }, he.useOptimistic = function(E, X) {
        return q.H.useOptimistic(E, X)
    }, he.useReducer = function(E, X, W) {
        return q.H.useReducer(E, X, W)
    }, he.useRef = function(E) {
        return q.H.useRef(E)
    }, he.useState = function(E) {
        return q.H.useState(E)
    }, he.useSyncExternalStore = function(E, X, W) {
        return q.H.useSyncExternalStore(E, X, W)
    }, he.useTransition = function() {
        return q.H.useTransition()
    }, he.version = "19.1.0", he
}
var Bh;

function Eu() {
    return Bh || (Bh = 1, Ys.exports = Gy()), Ys.exports
}
var x = Eu();
const Wn = Ev(x),
    wv = Ly({
        __proto__: null,
        default: Wn
    }, [x]);
var Xs = {
        exports: {}
    },
    _i = {},
    Qs = {
        exports: {}
    },
    Zs = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lh;

function Yy() {
    return Lh || (Lh = 1, function(a) {
        function r(O, J) {
            var L = O.length;
            O.push(J);
            e: for (; 0 < L;) {
                var le = L - 1 >>> 1,
                    E = O[le];
                if (0 < u(E, J)) O[le] = J, O[L] = E, L = le;
                else break e
            }
        }

        function s(O) {
            return O.length === 0 ? null : O[0]
        }

        function c(O) {
            if (O.length === 0) return null;
            var J = O[0],
                L = O.pop();
            if (L !== J) {
                O[0] = L;
                e: for (var le = 0, E = O.length, X = E >>> 1; le < X;) {
                    var W = 2 * (le + 1) - 1,
                        $ = O[W],
                        I = W + 1,
                        me = O[I];
                    if (0 > u($, L)) I < E && 0 > u(me, $) ? (O[le] = me, O[I] = L, le = I) : (O[le] = $, O[W] = L, le = W);
                    else if (I < E && 0 > u(me, L)) O[le] = me, O[I] = L, le = I;
                    else break e
                }
            }
            return J
        }

        function u(O, J) {
            var L = O.sortIndex - J.sortIndex;
            return L !== 0 ? L : O.id - J.id
        }
        if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var d = performance;
            a.unstable_now = function() {
                return d.now()
            }
        } else {
            var h = Date,
                g = h.now();
            a.unstable_now = function() {
                return h.now() - g
            }
        }
        var y = [],
            v = [],
            b = 1,
            A = null,
            T = 3,
            j = !1,
            U = !1,
            w = !1,
            M = !1,
            z = typeof setTimeout == "function" ? setTimeout : null,
            k = typeof clearTimeout == "function" ? clearTimeout : null,
            B = typeof setImmediate < "u" ? setImmediate : null;

        function P(O) {
            for (var J = s(v); J !== null;) {
                if (J.callback === null) c(v);
                else if (J.startTime <= O) c(v), J.sortIndex = J.expirationTime, r(y, J);
                else break;
                J = s(v)
            }
        }

        function q(O) {
            if (w = !1, P(O), !U)
                if (s(y) !== null) U = !0, V || (V = !0, de());
                else {
                    var J = s(v);
                    J !== null && ce(q, J.startTime - O)
                }
        }
        var V = !1,
            Y = -1,
            Z = 5,
            oe = -1;

        function ve() {
            return M ? !0 : !(a.unstable_now() - oe < Z)
        }

        function be() {
            if (M = !1, V) {
                var O = a.unstable_now();
                oe = O;
                var J = !0;
                try {
                    e: {
                        U = !1,
                        w && (w = !1, k(Y), Y = -1),
                        j = !0;
                        var L = T;
                        try {
                            t: {
                                for (P(O), A = s(y); A !== null && !(A.expirationTime > O && ve());) {
                                    var le = A.callback;
                                    if (typeof le == "function") {
                                        A.callback = null, T = A.priorityLevel;
                                        var E = le(A.expirationTime <= O);
                                        if (O = a.unstable_now(), typeof E == "function") {
                                            A.callback = E, P(O), J = !0;
                                            break t
                                        }
                                        A === s(y) && c(y), P(O)
                                    } else c(y);
                                    A = s(y)
                                }
                                if (A !== null) J = !0;
                                else {
                                    var X = s(v);
                                    X !== null && ce(q, X.startTime - O), J = !1
                                }
                            }
                            break e
                        }
                        finally {
                            A = null, T = L, j = !1
                        }
                        J = void 0
                    }
                }
                finally {
                    J ? de() : V = !1
                }
            }
        }
        var de;
        if (typeof B == "function") de = function() {
            B(be)
        };
        else if (typeof MessageChannel < "u") {
            var ge = new MessageChannel,
                xe = ge.port2;
            ge.port1.onmessage = be, de = function() {
                xe.postMessage(null)
            }
        } else de = function() {
            z(be, 0)
        };

        function ce(O, J) {
            Y = z(function() {
                O(a.unstable_now())
            }, J)
        }
        a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(O) {
            O.callback = null
        }, a.unstable_forceFrameRate = function(O) {
            0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < O ? Math.floor(1e3 / O) : 5
        }, a.unstable_getCurrentPriorityLevel = function() {
            return T
        }, a.unstable_next = function(O) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                    var J = 3;
                    break;
                default:
                    J = T
            }
            var L = T;
            T = J;
            try {
                return O()
            } finally {
                T = L
            }
        }, a.unstable_requestPaint = function() {
            M = !0
        }, a.unstable_runWithPriority = function(O, J) {
            switch (O) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    O = 3
            }
            var L = T;
            T = O;
            try {
                return J()
            } finally {
                T = L
            }
        }, a.unstable_scheduleCallback = function(O, J, L) {
            var le = a.unstable_now();
            switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? le + L : le) : L = le, O) {
                case 1:
                    var E = -1;
                    break;
                case 2:
                    E = 250;
                    break;
                case 5:
                    E = 1073741823;
                    break;
                case 4:
                    E = 1e4;
                    break;
                default:
                    E = 5e3
            }
            return E = L + E, O = {
                id: b++,
                callback: J,
                priorityLevel: O,
                startTime: L,
                expirationTime: E,
                sortIndex: -1
            }, L > le ? (O.sortIndex = L, r(v, O), s(y) === null && O === s(v) && (w ? (k(Y), Y = -1) : w = !0, ce(q, L - le))) : (O.sortIndex = E, r(y, O), U || j || (U = !0, V || (V = !0, de()))), O
        }, a.unstable_shouldYield = ve, a.unstable_wrapCallback = function(O) {
            var J = T;
            return function() {
                var L = T;
                T = J;
                try {
                    return O.apply(this, arguments)
                } finally {
                    T = L
                }
            }
        }
    }(Zs)), Zs
}
var qh;

function Xy() {
    return qh || (qh = 1, Qs.exports = Yy()), Qs.exports
}
var Ks = {
        exports: {}
    },
    ht = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;

function Qy() {
    if (Vh) return ht;
    Vh = 1;
    var a = Eu();

    function r(y) {
        var v = "https://react.dev/errors/" + y;
        if (1 < arguments.length) {
            v += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++) v += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + y + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function s() {}
    var c = {
            d: {
                f: s,
                r: function() {
                    throw Error(r(522))
                },
                D: s,
                C: s,
                L: s,
                m: s,
                X: s,
                S: s,
                M: s
            },
            p: 0,
            findDOMNode: null
        },
        u = Symbol.for("react.portal");

    function d(y, v, b) {
        var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: A == null ? null : "" + A,
            children: y,
            containerInfo: v,
            implementation: b
        }
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function g(y, v) {
        if (y === "font") return "";
        if (typeof v == "string") return v === "use-credentials" ? v : ""
    }
    return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ht.createPortal = function(y, v) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
        return d(y, v, null, b)
    }, ht.flushSync = function(y) {
        var v = h.T,
            b = c.p;
        try {
            if (h.T = null, c.p = 2, y) return y()
        } finally {
            h.T = v, c.p = b, c.d.f()
        }
    }, ht.preconnect = function(y, v) {
        typeof y == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(y, v))
    }, ht.prefetchDNS = function(y) {
        typeof y == "string" && c.d.D(y)
    }, ht.preinit = function(y, v) {
        if (typeof y == "string" && v && typeof v.as == "string") {
            var b = v.as,
                A = g(b, v.crossOrigin),
                T = typeof v.integrity == "string" ? v.integrity : void 0,
                j = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
            b === "style" ? c.d.S(y, typeof v.precedence == "string" ? v.precedence : void 0, {
                crossOrigin: A,
                integrity: T,
                fetchPriority: j
            }) : b === "script" && c.d.X(y, {
                crossOrigin: A,
                integrity: T,
                fetchPriority: j,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0
            })
        }
    }, ht.preinitModule = function(y, v) {
        if (typeof y == "string")
            if (typeof v == "object" && v !== null) {
                if (v.as == null || v.as === "script") {
                    var b = g(v.as, v.crossOrigin);
                    c.d.M(y, {
                        crossOrigin: b,
                        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                        nonce: typeof v.nonce == "string" ? v.nonce : void 0
                    })
                }
            } else v == null && c.d.M(y)
    }, ht.preload = function(y, v) {
        if (typeof y == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
            var b = v.as,
                A = g(b, v.crossOrigin);
            c.d.L(y, b, {
                crossOrigin: A,
                integrity: typeof v.integrity == "string" ? v.integrity : void 0,
                nonce: typeof v.nonce == "string" ? v.nonce : void 0,
                type: typeof v.type == "string" ? v.type : void 0,
                fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
                referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
                imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
                imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
                media: typeof v.media == "string" ? v.media : void 0
            })
        }
    }, ht.preloadModule = function(y, v) {
        if (typeof y == "string")
            if (v) {
                var b = g(v.as, v.crossOrigin);
                c.d.m(y, {
                    as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
                    crossOrigin: b,
                    integrity: typeof v.integrity == "string" ? v.integrity : void 0
                })
            } else c.d.m(y)
    }, ht.requestFormReset = function(y) {
        c.d.r(y)
    }, ht.unstable_batchedUpdates = function(y, v) {
        return y(v)
    }, ht.useFormState = function(y, v, b) {
        return h.H.useFormState(y, v, b)
    }, ht.useFormStatus = function() {
        return h.H.useHostTransitionStatus()
    }, ht.version = "19.1.0", ht
}
var Gh;

function Av() {
    if (Gh) return Ks.exports;
    Gh = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (r) {
            console.error(r)
        }
    }
    return a(), Ks.exports = Qy(), Ks.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yh;

function Zy() {
    if (Yh) return _i;
    Yh = 1;
    var a = Xy(),
        r = Eu(),
        s = Av();

    function c(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }

    function d(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return; while (e)
        }
        return t.tag === 3 ? n : null
    }

    function h(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function g(e) {
        if (d(e) !== e) throw Error(c(188))
    }

    function y(e) {
        var t = e.alternate;
        if (!t) {
            if (t = d(e), t === null) throw Error(c(188));
            return t !== e ? null : e
        }
        for (var n = e, l = t;;) {
            var i = n.return;
            if (i === null) break;
            var o = i.alternate;
            if (o === null) {
                if (l = i.return, l !== null) {
                    n = l;
                    continue
                }
                break
            }
            if (i.child === o.child) {
                for (o = i.child; o;) {
                    if (o === n) return g(i), e;
                    if (o === l) return g(i), t;
                    o = o.sibling
                }
                throw Error(c(188))
            }
            if (n.return !== l.return) n = i, l = o;
            else {
                for (var m = !1, p = i.child; p;) {
                    if (p === n) {
                        m = !0, n = i, l = o;
                        break
                    }
                    if (p === l) {
                        m = !0, l = i, n = o;
                        break
                    }
                    p = p.sibling
                }
                if (!m) {
                    for (p = o.child; p;) {
                        if (p === n) {
                            m = !0, n = o, l = i;
                            break
                        }
                        if (p === l) {
                            m = !0, l = o, n = i;
                            break
                        }
                        p = p.sibling
                    }
                    if (!m) throw Error(c(189))
                }
            }
            if (n.alternate !== l) throw Error(c(190))
        }
        if (n.tag !== 3) throw Error(c(188));
        return n.stateNode.current === n ? e : t
    }

    function v(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
            if (t = v(e), t !== null) return t;
            e = e.sibling
        }
        return null
    }
    var b = Object.assign,
        A = Symbol.for("react.element"),
        T = Symbol.for("react.transitional.element"),
        j = Symbol.for("react.portal"),
        U = Symbol.for("react.fragment"),
        w = Symbol.for("react.strict_mode"),
        M = Symbol.for("react.profiler"),
        z = Symbol.for("react.provider"),
        k = Symbol.for("react.consumer"),
        B = Symbol.for("react.context"),
        P = Symbol.for("react.forward_ref"),
        q = Symbol.for("react.suspense"),
        V = Symbol.for("react.suspense_list"),
        Y = Symbol.for("react.memo"),
        Z = Symbol.for("react.lazy"),
        oe = Symbol.for("react.activity"),
        ve = Symbol.for("react.memo_cache_sentinel"),
        be = Symbol.iterator;

    function de(e) {
        return e === null || typeof e != "object" ? null : (e = be && e[be] || e["@@iterator"], typeof e == "function" ? e : null)
    }
    var ge = Symbol.for("react.client.reference");

    function xe(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.$$typeof === ge ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
            case U:
                return "Fragment";
            case M:
                return "Profiler";
            case w:
                return "StrictMode";
            case q:
                return "Suspense";
            case V:
                return "SuspenseList";
            case oe:
                return "Activity"
        }
        if (typeof e == "object") switch (e.$$typeof) {
            case j:
                return "Portal";
            case B:
                return (e.displayName || "Context") + ".Provider";
            case k:
                return (e._context.displayName || "Context") + ".Consumer";
            case P:
                var t = e.render;
                return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case Y:
                return t = e.displayName || null, t !== null ? t : xe(e.type) || "Memo";
            case Z:
                t = e._payload, e = e._init;
                try {
                    return xe(e(t))
                } catch {}
        }
        return null
    }
    var ce = Array.isArray,
        O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        L = {
            pending: !1,
            data: null,
            method: null,
            action: null
        },
        le = [],
        E = -1;

    function X(e) {
        return {
            current: e
        }
    }

    function W(e) {
        0 > E || (e.current = le[E], le[E] = null, E--)
    }

    function $(e, t) {
        E++, le[E] = e.current, e.current = t
    }
    var I = X(null),
        me = X(null),
        ie = X(null),
        F = X(null);

    function re(e, t) {
        switch ($(ie, t), $(me, e), $(I, null), t.nodeType) {
            case 9:
            case 11:
                e = (e = t.documentElement) && (e = e.namespaceURI) ? sh(e) : 0;
                break;
            default:
                if (e = t.tagName, t = t.namespaceURI) t = sh(t), e = uh(t, e);
                else switch (e) {
                    case "svg":
                        e = 1;
                        break;
                    case "math":
                        e = 2;
                        break;
                    default:
                        e = 0
                }
        }
        W(I), $(I, e)
    }

    function Re() {
        W(I), W(me), W(ie)
    }

    function Te(e) {
        e.memoizedState !== null && $(F, e);
        var t = I.current,
            n = uh(t, e.type);
        t !== n && ($(me, e), $(I, n))
    }

    function Ee(e) {
        me.current === e && (W(I), W(me)), F.current === e && (W(F), Ti._currentValue = L)
    }
    var we = Object.prototype.hasOwnProperty,
        rt = a.unstable_scheduleCallback,
        yt = a.unstable_cancelCallback,
        al = a.unstable_shouldYield,
        il = a.unstable_requestPaint,
        ft = a.unstable_now,
        Rr = a.unstable_getCurrentPriorityLevel,
        ol = a.unstable_ImmediatePriority,
        Yu = a.unstable_UserBlockingPriority,
        Vi = a.unstable_NormalPriority,
        xp = a.unstable_LowPriority,
        Xu = a.unstable_IdlePriority,
        Sp = a.log,
        Ep = a.unstable_setDisableYieldValue,
        za = null,
        At = null;

    function Tn(e) {
        if (typeof Sp == "function" && Ep(e), At && typeof At.setStrictMode == "function") try {
            At.setStrictMode(za, e)
        } catch {}
    }
    var Nt = Math.clz32 ? Math.clz32 : Np,
        wp = Math.log,
        Ap = Math.LN2;

    function Np(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - (wp(e) / Ap | 0) | 0
    }
    var Gi = 256,
        Yi = 4194304;

    function rl(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
        }
    }

    function Xi(e, t, n) {
        var l = e.pendingLanes;
        if (l === 0) return 0;
        var i = 0,
            o = e.suspendedLanes,
            m = e.pingedLanes;
        e = e.warmLanes;
        var p = l & 134217727;
        return p !== 0 ? (l = p & ~o, l !== 0 ? i = rl(l) : (m &= p, m !== 0 ? i = rl(m) : n || (n = p & ~e, n !== 0 && (i = rl(n))))) : (p = l & ~o, p !== 0 ? i = rl(p) : m !== 0 ? i = rl(m) : n || (n = l & ~e, n !== 0 && (i = rl(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & o) === 0 && (o = i & -i, n = t & -t, o >= n || o === 32 && (n & 4194048) !== 0) ? t : i
    }

    function Ua(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }

    function Tp(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function Qu() {
        var e = Gi;
        return Gi <<= 1, (Gi & 4194048) === 0 && (Gi = 256), e
    }

    function Zu() {
        var e = Yi;
        return Yi <<= 1, (Yi & 62914560) === 0 && (Yi = 4194304), e
    }

    function Or(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t
    }

    function Ha(e, t) {
        e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
    }

    function Cp(e, t, n, l, i, o) {
        var m = e.pendingLanes;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
        var p = e.entanglements,
            S = e.expirationTimes,
            _ = e.hiddenUpdates;
        for (n = m & ~n; 0 < n;) {
            var G = 31 - Nt(n),
                K = 1 << G;
            p[G] = 0, S[G] = -1;
            var D = _[G];
            if (D !== null)
                for (_[G] = null, G = 0; G < D.length; G++) {
                    var H = D[G];
                    H !== null && (H.lane &= -536870913)
                }
            n &= ~K
        }
        l !== 0 && Ku(e, l, 0), o !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(m & ~t))
    }

    function Ku(e, t, n) {
        e.pendingLanes |= t, e.suspendedLanes &= ~t;
        var l = 31 - Nt(t);
        e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 4194090
    }

    function Ju(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n;) {
            var l = 31 - Nt(n),
                i = 1 << l;
            i & t | e[l] & t && (e[l] |= t), n &= ~i
        }
    }

    function _r(e) {
        switch (e) {
            case 2:
                e = 1;
                break;
            case 8:
                e = 4;
                break;
            case 32:
                e = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                e = 128;
                break;
            case 268435456:
                e = 134217728;
                break;
            default:
                e = 0
        }
        return e
    }

    function Dr(e) {
        return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function Pu() {
        var e = J.p;
        return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Mh(e.type))
    }

    function jp(e, t) {
        var n = J.p;
        try {
            return J.p = e, t()
        } finally {
            J.p = n
        }
    }
    var Cn = Math.random().toString(36).slice(2),
        dt = "__reactFiber$" + Cn,
        bt = "__reactProps$" + Cn,
        Dl = "__reactContainer$" + Cn,
        zr = "__reactEvents$" + Cn,
        Mp = "__reactListeners$" + Cn,
        Rp = "__reactHandles$" + Cn,
        $u = "__reactResources$" + Cn,
        ka = "__reactMarker$" + Cn;

    function Ur(e) {
        delete e[dt], delete e[bt], delete e[zr], delete e[Mp], delete e[Rp]
    }

    function zl(e) {
        var t = e[dt];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[Dl] || n[dt]) {
                if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                    for (e = hh(e); e !== null;) {
                        if (n = e[dt]) return n;
                        e = hh(e)
                    }
                return t
            }
            e = n, n = e.parentNode
        }
        return null
    }

    function Ul(e) {
        if (e = e[dt] || e[Dl]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return e
        }
        return null
    }

    function Ba(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(c(33))
    }

    function Hl(e) {
        var t = e[$u];
        return t || (t = e[$u] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }), t
    }

    function lt(e) {
        e[ka] = !0
    }
    var Wu = new Set,
        Fu = {};

    function cl(e, t) {
        kl(e, t), kl(e + "Capture", t)
    }

    function kl(e, t) {
        for (Fu[e] = t, e = 0; e < t.length; e++) Wu.add(t[e])
    }
    var Op = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Iu = {},
        ef = {};

    function _p(e) {
        return we.call(ef, e) ? !0 : we.call(Iu, e) ? !1 : Op.test(e) ? ef[e] = !0 : (Iu[e] = !0, !1)
    }

    function Qi(e, t, n) {
        if (_p(t))
            if (n === null) e.removeAttribute(t);
            else {
                switch (typeof n) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var l = t.toLowerCase().slice(0, 5);
                        if (l !== "data-" && l !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                }
                e.setAttribute(t, "" + n)
            }
    }

    function Zi(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
            switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
            }
            e.setAttribute(t, "" + n)
        }
    }

    function rn(e, t, n, l) {
        if (l === null) e.removeAttribute(n);
        else {
            switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(n);
                    return
            }
            e.setAttributeNS(t, n, "" + l)
        }
    }
    var Hr, tf;

    function Bl(e) {
        if (Hr === void 0) try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Hr = t && t[1] || "", tf = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + Hr + e + tf
    }
    var kr = !1;

    function Br(e, t) {
        if (!e || kr) return "";
        kr = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (H) {
                                    var D = H
                                }
                                Reflect.construct(e, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (H) {
                                    D = H
                                }
                                e.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (H) {
                                D = H
                            }(K = e()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (H) {
                        if (H && D && typeof H.stack == "string") return [H.stack, D.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var i = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            i && i.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var o = l.DetermineComponentFrameRoot(),
                m = o[0],
                p = o[1];
            if (m && p) {
                var S = m.split(`
`),
                    _ = p.split(`
`);
                for (i = l = 0; l < S.length && !S[l].includes("DetermineComponentFrameRoot");) l++;
                for (; i < _.length && !_[i].includes("DetermineComponentFrameRoot");) i++;
                if (l === S.length || i === _.length)
                    for (l = S.length - 1, i = _.length - 1; 1 <= l && 0 <= i && S[l] !== _[i];) i--;
                for (; 1 <= l && 0 <= i; l--, i--)
                    if (S[l] !== _[i]) {
                        if (l !== 1 || i !== 1)
                            do
                                if (l--, i--, 0 > i || S[l] !== _[i]) {
                                    var G = `
` + S[l].replace(" at new ", " at ");
                                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), G
                                } while (1 <= l && 0 <= i);
                        break
                    }
            }
        } finally {
            kr = !1, Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? Bl(n) : ""
    }

    function Dp(e) {
        switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return Bl(e.type);
            case 16:
                return Bl("Lazy");
            case 13:
                return Bl("Suspense");
            case 19:
                return Bl("SuspenseList");
            case 0:
            case 15:
                return Br(e.type, !1);
            case 11:
                return Br(e.type.render, !1);
            case 1:
                return Br(e.type, !0);
            case 31:
                return Bl("Activity");
            default:
                return ""
        }
    }

    function nf(e) {
        try {
            var t = "";
            do t += Dp(e), e = e.return; while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }

    function Ut(e) {
        switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
        }
    }

    function lf(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function zp(e) {
        var t = lf(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            l = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var i = n.get,
                o = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return i.call(this)
                },
                set: function(m) {
                    l = "" + m, o.call(this, m)
                }
            }), Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }), {
                getValue: function() {
                    return l
                },
                setValue: function(m) {
                    l = "" + m
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[t]
                }
            }
        }
    }

    function Ki(e) {
        e._valueTracker || (e._valueTracker = zp(e))
    }

    function af(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            l = "";
        return e && (l = lf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1
    }

    function Ji(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var Up = /[\n"\\]/g;

    function Ht(e) {
        return e.replace(Up, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function Lr(e, t, n, l, i, o, m, p) {
        e.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.type = m : e.removeAttribute("type"), t != null ? m === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : m !== "submit" && m !== "reset" || e.removeAttribute("value"), t != null ? qr(e, m, Ut(t)) : n != null ? qr(e, m, Ut(n)) : l != null && e.removeAttribute("value"), i == null && o != null && (e.defaultChecked = !!o), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? e.name = "" + Ut(p) : e.removeAttribute("name")
    }

    function of(e, t, n, l, i, o, m, p) {
        if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.type = o), t != null || n != null) {
            if (!(o !== "submit" && o !== "reset" || t != null)) return;
            n = n != null ? "" + Ut(n) : "", t = t != null ? "" + Ut(t) : n, p || t === e.value || (e.value = t), e.defaultValue = t
        }
        l = l ?? i, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = p ? e.checked : !!l, e.defaultChecked = !!l, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (e.name = m)
    }

    function qr(e, t, n) {
        t === "number" && Ji(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }

    function Ll(e, t, n, l) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && l && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) {
                    e[i].selected = !0, l && (e[i].defaultSelected = !0);
                    return
                }
                t !== null || e[i].disabled || (t = e[i])
            }
            t !== null && (t.selected = !0)
        }
    }

    function rf(e, t, n) {
        if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + Ut(n) : ""
    }

    function cf(e, t, n, l) {
        if (t == null) {
            if (l != null) {
                if (n != null) throw Error(c(92));
                if (ce(l)) {
                    if (1 < l.length) throw Error(c(93));
                    l = l[0]
                }
                n = l
            }
            n == null && (n = ""), t = n
        }
        n = Ut(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l)
    }

    function ql(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Hp = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function sf(e, t, n) {
        var l = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Hp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }

    function uf(e, t, n) {
        if (t != null && typeof t != "object") throw Error(c(62));
        if (e = e.style, n != null) {
            for (var l in n) !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var i in t) l = t[i], t.hasOwnProperty(i) && n[i] !== l && sf(e, i, l)
        } else
            for (var o in t) t.hasOwnProperty(o) && sf(e, o, t[o])
    }

    function Vr(e) {
        if (e.indexOf("-") === -1) return !1;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }
    var kp = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"]
        ]),
        Bp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Pi(e) {
        return Bp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var Gr = null;

    function Yr(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
    }
    var Vl = null,
        Gl = null;

    function ff(e) {
        var t = Ul(e);
        if (t && (e = t.stateNode)) {
            var n = e[bt] || null;
            e: switch (e = t.stateNode, t.type) {
                case "input":
                    if (Lr(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
                        for (n = e; n.parentNode;) n = n.parentNode;
                        for (n = n.querySelectorAll('input[name="' + Ht("" + t) + '"][type="radio"]'), t = 0; t < n.length; t++) {
                            var l = n[t];
                            if (l !== e && l.form === e.form) {
                                var i = l[bt] || null;
                                if (!i) throw Error(c(90));
                                Lr(l, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name)
                            }
                        }
                        for (t = 0; t < n.length; t++) l = n[t], l.form === e.form && af(l)
                    }
                    break e;
                case "textarea":
                    rf(e, n.value, n.defaultValue);
                    break e;
                case "select":
                    t = n.value, t != null && Ll(e, !!n.multiple, t, !1)
            }
        }
    }
    var Xr = !1;

    function df(e, t, n) {
        if (Xr) return e(t, n);
        Xr = !0;
        try {
            var l = e(t);
            return l
        } finally {
            if (Xr = !1, (Vl !== null || Gl !== null) && (Uo(), Vl && (t = Vl, e = Gl, Gl = Vl = null, ff(t), e)))
                for (t = 0; t < e.length; t++) ff(e[t])
        }
    }

    function La(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var l = n[bt] || null;
        if (l === null) return null;
        n = l[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && typeof n != "function") throw Error(c(231, t, typeof n));
        return n
    }
    var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        Qr = !1;
    if (cn) try {
        var qa = {};
        Object.defineProperty(qa, "passive", {
            get: function() {
                Qr = !0
            }
        }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa)
    } catch {
        Qr = !1
    }
    var jn = null,
        Zr = null,
        $i = null;

    function mf() {
        if ($i) return $i;
        var e, t = Zr,
            n = t.length,
            l, i = "value" in jn ? jn.value : jn.textContent,
            o = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++);
        var m = n - e;
        for (l = 1; l <= m && t[n - l] === i[o - l]; l++);
        return $i = i.slice(e, 1 < l ? 1 - l : void 0)
    }

    function Wi(e) {
        var t = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
    }

    function Fi() {
        return !0
    }

    function hf() {
        return !1
    }

    function xt(e) {
        function t(n, l, i, o, m) {
            this._reactName = n, this._targetInst = i, this.type = l, this.nativeEvent = o, this.target = m, this.currentTarget = null;
            for (var p in e) e.hasOwnProperty(p) && (n = e[p], this[p] = n ? n(o) : o[p]);
            return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Fi : hf, this.isPropagationStopped = hf, this
        }
        return b(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Fi)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Fi)
            },
            persist: function() {},
            isPersistent: Fi
        }), t
    }
    var sl = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        },
        Ii = xt(sl),
        Va = b({}, sl, {
            view: 0,
            detail: 0
        }),
        Lp = xt(Va),
        Kr, Jr, Ga, eo = b({}, Va, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: $r,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== Ga && (Ga && e.type === "mousemove" ? (Kr = e.screenX - Ga.screenX, Jr = e.screenY - Ga.screenY) : Jr = Kr = 0, Ga = e), Kr)
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Jr
            }
        }),
        vf = xt(eo),
        qp = b({}, eo, {
            dataTransfer: 0
        }),
        Vp = xt(qp),
        Gp = b({}, Va, {
            relatedTarget: 0
        }),
        Pr = xt(Gp),
        Yp = b({}, sl, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        Xp = xt(Yp),
        Qp = b({}, sl, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Zp = xt(Qp),
        Kp = b({}, sl, {
            data: 0
        }),
        gf = xt(Kp),
        Jp = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        Pp = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        $p = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Wp(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = $p[e]) ? !!t[e] : !1
    }

    function $r() {
        return Wp
    }
    var Fp = b({}, Va, {
            key: function(e) {
                if (e.key) {
                    var t = Jp[e.key] || e.key;
                    if (t !== "Unidentified") return t
                }
                return e.type === "keypress" ? (e = Wi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pp[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: $r,
            charCode: function(e) {
                return e.type === "keypress" ? Wi(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Wi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        }),
        Ip = xt(Fp),
        e0 = b({}, eo, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }),
        pf = xt(e0),
        t0 = b({}, Va, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: $r
        }),
        n0 = xt(t0),
        l0 = b({}, sl, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }),
        a0 = xt(l0),
        i0 = b({}, eo, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        }),
        o0 = xt(i0),
        r0 = b({}, sl, {
            newState: 0,
            oldState: 0
        }),
        c0 = xt(r0),
        s0 = [9, 13, 27, 32],
        Wr = cn && "CompositionEvent" in window,
        Ya = null;
    cn && "documentMode" in document && (Ya = document.documentMode);
    var u0 = cn && "TextEvent" in window && !Ya,
        yf = cn && (!Wr || Ya && 8 < Ya && 11 >= Ya),
        bf = " ",
        xf = !1;

    function Sf(e, t) {
        switch (e) {
            case "keyup":
                return s0.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
        }
    }

    function Ef(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
    }
    var Yl = !1;

    function f0(e, t) {
        switch (e) {
            case "compositionend":
                return Ef(t);
            case "keypress":
                return t.which !== 32 ? null : (xf = !0, bf);
            case "textInput":
                return e = t.data, e === bf && xf ? null : e;
            default:
                return null
        }
    }

    function d0(e, t) {
        if (Yl) return e === "compositionend" || !Wr && Sf(e, t) ? (e = mf(), $i = Zr = jn = null, Yl = !1, e) : null;
        switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return yf && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }
    var m0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function wf(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!m0[e.type] : t === "textarea"
    }

    function Af(e, t, n, l) {
        Vl ? Gl ? Gl.push(l) : Gl = [l] : Vl = l, t = Vo(t, "onChange"), 0 < t.length && (n = new Ii("onChange", "change", null, n, l), e.push({
            event: n,
            listeners: t
        }))
    }
    var Xa = null,
        Qa = null;

    function h0(e) {
        ah(e, 0)
    }

    function to(e) {
        var t = Ba(e);
        if (af(t)) return e
    }

    function Nf(e, t) {
        if (e === "change") return t
    }
    var Tf = !1;
    if (cn) {
        var Fr;
        if (cn) {
            var Ir = "oninput" in document;
            if (!Ir) {
                var Cf = document.createElement("div");
                Cf.setAttribute("oninput", "return;"), Ir = typeof Cf.oninput == "function"
            }
            Fr = Ir
        } else Fr = !1;
        Tf = Fr && (!document.documentMode || 9 < document.documentMode)
    }

    function jf() {
        Xa && (Xa.detachEvent("onpropertychange", Mf), Qa = Xa = null)
    }

    function Mf(e) {
        if (e.propertyName === "value" && to(Qa)) {
            var t = [];
            Af(t, Qa, e, Yr(e)), df(h0, t)
        }
    }

    function v0(e, t, n) {
        e === "focusin" ? (jf(), Xa = t, Qa = n, Xa.attachEvent("onpropertychange", Mf)) : e === "focusout" && jf()
    }

    function g0(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return to(Qa)
    }

    function p0(e, t) {
        if (e === "click") return to(t)
    }

    function y0(e, t) {
        if (e === "input" || e === "change") return to(t)
    }

    function b0(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Tt = typeof Object.is == "function" ? Object.is : b0;

    function Za(e, t) {
        if (Tt(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        var n = Object.keys(e),
            l = Object.keys(t);
        if (n.length !== l.length) return !1;
        for (l = 0; l < n.length; l++) {
            var i = n[l];
            if (!we.call(t, i) || !Tt(e[i], t[i])) return !1
        }
        return !0
    }

    function Rf(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Of(e, t) {
        var n = Rf(e);
        e = 0;
        for (var l; n;) {
            if (n.nodeType === 3) {
                if (l = e + n.textContent.length, e <= t && l >= t) return {
                    node: n,
                    offset: t - e
                };
                e = l
            }
            e: {
                for (; n;) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = Rf(n)
        }
    }

    function _f(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function Df(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = Ji(e.document); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n) e = t.contentWindow;
            else break;
            t = Ji(e.document)
        }
        return t
    }

    function ec(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var x0 = cn && "documentMode" in document && 11 >= document.documentMode,
        Xl = null,
        tc = null,
        Ka = null,
        nc = !1;

    function zf(e, t, n) {
        var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        nc || Xl == null || Xl !== Ji(l) || (l = Xl, "selectionStart" in l && ec(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }), Ka && Za(Ka, l) || (Ka = l, l = Vo(tc, "onSelect"), 0 < l.length && (t = new Ii("onSelect", "select", null, t, n), e.push({
            event: t,
            listeners: l
        }), t.target = Xl)))
    }

    function ul(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Ql = {
            animationend: ul("Animation", "AnimationEnd"),
            animationiteration: ul("Animation", "AnimationIteration"),
            animationstart: ul("Animation", "AnimationStart"),
            transitionrun: ul("Transition", "TransitionRun"),
            transitionstart: ul("Transition", "TransitionStart"),
            transitioncancel: ul("Transition", "TransitionCancel"),
            transitionend: ul("Transition", "TransitionEnd")
        },
        lc = {},
        Uf = {};
    cn && (Uf = document.createElement("div").style, "AnimationEvent" in window || (delete Ql.animationend.animation, delete Ql.animationiteration.animation, delete Ql.animationstart.animation), "TransitionEvent" in window || delete Ql.transitionend.transition);

    function fl(e) {
        if (lc[e]) return lc[e];
        if (!Ql[e]) return e;
        var t = Ql[e],
            n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in Uf) return lc[e] = t[n];
        return e
    }
    var Hf = fl("animationend"),
        kf = fl("animationiteration"),
        Bf = fl("animationstart"),
        S0 = fl("transitionrun"),
        E0 = fl("transitionstart"),
        w0 = fl("transitioncancel"),
        Lf = fl("transitionend"),
        qf = new Map,
        ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    ac.push("scrollEnd");

    function Xt(e, t) {
        qf.set(e, t), cl(t, [e])
    }
    var Vf = new WeakMap;

    function kt(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = Vf.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: nf(t)
            }, Vf.set(e, t), t)
        }
        return {
            value: e,
            source: t,
            stack: nf(t)
        }
    }
    var Bt = [],
        Zl = 0,
        ic = 0;

    function no() {
        for (var e = Zl, t = ic = Zl = 0; t < e;) {
            var n = Bt[t];
            Bt[t++] = null;
            var l = Bt[t];
            Bt[t++] = null;
            var i = Bt[t];
            Bt[t++] = null;
            var o = Bt[t];
            if (Bt[t++] = null, l !== null && i !== null) {
                var m = l.pending;
                m === null ? i.next = i : (i.next = m.next, m.next = i), l.pending = i
            }
            o !== 0 && Gf(n, i, o)
        }
    }

    function lo(e, t, n, l) {
        Bt[Zl++] = e, Bt[Zl++] = t, Bt[Zl++] = n, Bt[Zl++] = l, ic |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l)
    }

    function oc(e, t, n, l) {
        return lo(e, t, n, l), ao(e)
    }

    function Kl(e, t) {
        return lo(e, null, null, t), ao(e)
    }

    function Gf(e, t, n) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n);
        for (var i = !1, o = e.return; o !== null;) o.childLanes |= n, l = o.alternate, l !== null && (l.childLanes |= n), o.tag === 22 && (e = o.stateNode, e === null || e._visibility & 1 || (i = !0)), e = o, o = o.return;
        return e.tag === 3 ? (o = e.stateNode, i && t !== null && (i = 31 - Nt(n), e = o.hiddenUpdates, l = e[i], l === null ? e[i] = [t] : l.push(t), t.lane = n | 536870912), o) : null
    }

    function ao(e) {
        if (50 < yi) throw yi = 0, ds = null, Error(c(185));
        for (var t = e.return; t !== null;) e = t, t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Jl = {};

    function A0(e, t, n, l) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function Ct(e, t, n, l) {
        return new A0(e, t, n, l)
    }

    function rc(e) {
        return e = e.prototype, !(!e || !e.isReactComponent)
    }

    function sn(e, t) {
        var n = e.alternate;
        return n === null ? (n = Ct(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
    }

    function Yf(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), e
    }

    function io(e, t, n, l, i, o) {
        var m = 0;
        if (l = e, typeof e == "function") rc(e) && (m = 1);
        else if (typeof e == "string") m = Ty(e, n, I.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else e: switch (e) {
            case oe:
                return e = Ct(31, n, t, i), e.elementType = oe, e.lanes = o, e;
            case U:
                return dl(n.children, i, o, t);
            case w:
                m = 8, i |= 24;
                break;
            case M:
                return e = Ct(12, n, t, i | 2), e.elementType = M, e.lanes = o, e;
            case q:
                return e = Ct(13, n, t, i), e.elementType = q, e.lanes = o, e;
            case V:
                return e = Ct(19, n, t, i), e.elementType = V, e.lanes = o, e;
            default:
                if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                    case z:
                    case B:
                        m = 10;
                        break e;
                    case k:
                        m = 9;
                        break e;
                    case P:
                        m = 11;
                        break e;
                    case Y:
                        m = 14;
                        break e;
                    case Z:
                        m = 16, l = null;
                        break e
                }
                m = 29, n = Error(c(130, e === null ? "null" : typeof e, "")), l = null
        }
        return t = Ct(m, n, t, i), t.elementType = e, t.type = l, t.lanes = o, t
    }

    function dl(e, t, n, l) {
        return e = Ct(7, e, l, t), e.lanes = n, e
    }

    function cc(e, t, n) {
        return e = Ct(6, e, null, t), e.lanes = n, e
    }

    function sc(e, t, n) {
        return t = Ct(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }
    var Pl = [],
        $l = 0,
        oo = null,
        ro = 0,
        Lt = [],
        qt = 0,
        ml = null,
        un = 1,
        fn = "";

    function hl(e, t) {
        Pl[$l++] = ro, Pl[$l++] = oo, oo = e, ro = t
    }

    function Xf(e, t, n) {
        Lt[qt++] = un, Lt[qt++] = fn, Lt[qt++] = ml, ml = e;
        var l = un;
        e = fn;
        var i = 32 - Nt(l) - 1;
        l &= ~(1 << i), n += 1;
        var o = 32 - Nt(t) + i;
        if (30 < o) {
            var m = i - i % 5;
            o = (l & (1 << m) - 1).toString(32), l >>= m, i -= m, un = 1 << 32 - Nt(t) + i | n << i | l, fn = o + e
        } else un = 1 << o | n << i | l, fn = e
    }

    function uc(e) {
        e.return !== null && (hl(e, 1), Xf(e, 1, 0))
    }

    function fc(e) {
        for (; e === oo;) oo = Pl[--$l], Pl[$l] = null, ro = Pl[--$l], Pl[$l] = null;
        for (; e === ml;) ml = Lt[--qt], Lt[qt] = null, fn = Lt[--qt], Lt[qt] = null, un = Lt[--qt], Lt[qt] = null
    }
    var pt = null,
        Ze = null,
        Me = !1,
        vl = null,
        Wt = !1,
        dc = Error(c(519));

    function gl(e) {
        var t = Error(c(418, ""));
        throw $a(kt(t, e)), dc
    }

    function Qf(e) {
        var t = e.stateNode,
            n = e.type,
            l = e.memoizedProps;
        switch (t[dt] = e, t[bt] = l, n) {
            case "dialog":
                Ne("cancel", t), Ne("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                Ne("load", t);
                break;
            case "video":
            case "audio":
                for (n = 0; n < xi.length; n++) Ne(xi[n], t);
                break;
            case "source":
                Ne("error", t);
                break;
            case "img":
            case "image":
            case "link":
                Ne("error", t), Ne("load", t);
                break;
            case "details":
                Ne("toggle", t);
                break;
            case "input":
                Ne("invalid", t), of(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0), Ki(t);
                break;
            case "select":
                Ne("invalid", t);
                break;
            case "textarea":
                Ne("invalid", t), cf(t, l.value, l.defaultValue, l.children), Ki(t)
        }
        n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || ch(t.textContent, n) ? (l.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), l.onScroll != null && Ne("scroll", t), l.onScrollEnd != null && Ne("scrollend", t), l.onClick != null && (t.onclick = Go), t = !0) : t = !1, t || gl(e)
    }

    function Zf(e) {
        for (pt = e.return; pt;) switch (pt.tag) {
            case 5:
            case 13:
                Wt = !1;
                return;
            case 27:
            case 3:
                Wt = !0;
                return;
            default:
                pt = pt.return
        }
    }

    function Ja(e) {
        if (e !== pt) return !1;
        if (!Me) return Zf(e), Me = !0, !1;
        var t = e.tag,
            n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || js(e.type, e.memoizedProps)), n = !n), n && Ze && gl(e), Zf(e), t === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (e.nodeType === 8)
                        if (n = e.data, n === "/$") {
                            if (t === 0) {
                                Ze = Zt(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                Ze = null
            }
        } else t === 27 ? (t = Ze, Xn(e.type) ? (e = _s, _s = null, Ze = e) : Ze = t) : Ze = pt ? Zt(e.stateNode.nextSibling) : null;
        return !0
    }

    function Pa() {
        Ze = pt = null, Me = !1
    }

    function Kf() {
        var e = vl;
        return e !== null && (wt === null ? wt = e : wt.push.apply(wt, e), vl = null), e
    }

    function $a(e) {
        vl === null ? vl = [e] : vl.push(e)
    }
    var mc = X(null),
        pl = null,
        dn = null;

    function Mn(e, t, n) {
        $(mc, t._currentValue), t._currentValue = n
    }

    function mn(e) {
        e._currentValue = mc.current, W(mc)
    }

    function hc(e, t, n) {
        for (; e !== null;) {
            var l = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
            e = e.return
        }
    }

    function vc(e, t, n, l) {
        var i = e.child;
        for (i !== null && (i.return = e); i !== null;) {
            var o = i.dependencies;
            if (o !== null) {
                var m = i.child;
                o = o.firstContext;
                e: for (; o !== null;) {
                    var p = o;
                    o = i;
                    for (var S = 0; S < t.length; S++)
                        if (p.context === t[S]) {
                            o.lanes |= n, p = o.alternate, p !== null && (p.lanes |= n), hc(o.return, n, e), l || (m = null);
                            break e
                        } o = p.next
                }
            } else if (i.tag === 18) {
                if (m = i.return, m === null) throw Error(c(341));
                m.lanes |= n, o = m.alternate, o !== null && (o.lanes |= n), hc(m, n, e), m = null
            } else m = i.child;
            if (m !== null) m.return = i;
            else
                for (m = i; m !== null;) {
                    if (m === e) {
                        m = null;
                        break
                    }
                    if (i = m.sibling, i !== null) {
                        i.return = m.return, m = i;
                        break
                    }
                    m = m.return
                }
            i = m
        }
    }

    function Wa(e, t, n, l) {
        e = null;
        for (var i = t, o = !1; i !== null;) {
            if (!o) {
                if ((i.flags & 524288) !== 0) o = !0;
                else if ((i.flags & 262144) !== 0) break
            }
            if (i.tag === 10) {
                var m = i.alternate;
                if (m === null) throw Error(c(387));
                if (m = m.memoizedProps, m !== null) {
                    var p = i.type;
                    Tt(i.pendingProps.value, m.value) || (e !== null ? e.push(p) : e = [p])
                }
            } else if (i === F.current) {
                if (m = i.alternate, m === null) throw Error(c(387));
                m.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(Ti) : e = [Ti])
            }
            i = i.return
        }
        e !== null && vc(t, e, n, l), t.flags |= 262144
    }

    function co(e) {
        for (e = e.firstContext; e !== null;) {
            if (!Tt(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next
        }
        return !1
    }

    function yl(e) {
        pl = e, dn = null, e = e.dependencies, e !== null && (e.firstContext = null)
    }

    function mt(e) {
        return Jf(pl, e)
    }

    function so(e, t) {
        return pl === null && yl(e), Jf(e, t)
    }

    function Jf(e, t) {
        var n = t._currentValue;
        if (t = {
                context: t,
                memoizedValue: n,
                next: null
            }, dn === null) {
            if (e === null) throw Error(c(308));
            dn = t, e.dependencies = {
                lanes: 0,
                firstContext: t
            }, e.flags |= 524288
        } else dn = dn.next = t;
        return n
    }
    var N0 = typeof AbortController < "u" ? AbortController : function() {
            var e = [],
                t = this.signal = {
                    aborted: !1,
                    addEventListener: function(n, l) {
                        e.push(l)
                    }
                };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(n) {
                    return n()
                })
            }
        },
        T0 = a.unstable_scheduleCallback,
        C0 = a.unstable_NormalPriority,
        et = {
            $$typeof: B,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };

    function gc() {
        return {
            controller: new N0,
            data: new Map,
            refCount: 0
        }
    }

    function Fa(e) {
        e.refCount--, e.refCount === 0 && T0(C0, function() {
            e.controller.abort()
        })
    }
    var Ia = null,
        pc = 0,
        Wl = 0,
        Fl = null;

    function j0(e, t) {
        if (Ia === null) {
            var n = Ia = [];
            pc = 0, Wl = bs(), Fl = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    n.push(l)
                }
            }
        }
        return pc++, t.then(Pf, Pf), t
    }

    function Pf() {
        if (--pc === 0 && Ia !== null) {
            Fl !== null && (Fl.status = "fulfilled");
            var e = Ia;
            Ia = null, Wl = 0, Fl = null;
            for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }

    function M0(e, t) {
        var n = [],
            l = {
                status: "pending",
                value: null,
                reason: null,
                then: function(i) {
                    n.push(i)
                }
            };
        return e.then(function() {
            l.status = "fulfilled", l.value = t;
            for (var i = 0; i < n.length; i++)(0, n[i])(t)
        }, function(i) {
            for (l.status = "rejected", l.reason = i, i = 0; i < n.length; i++)(0, n[i])(void 0)
        }), l
    }
    var $f = O.S;
    O.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && j0(e, t), $f !== null && $f(e, t)
    };
    var bl = X(null);

    function yc() {
        var e = bl.current;
        return e !== null ? e : Ge.pooledCache
    }

    function uo(e, t) {
        t === null ? $(bl, bl.current) : $(bl, t.pool)
    }

    function Wf() {
        var e = yc();
        return e === null ? null : {
            parent: et._currentValue,
            pool: e
        }
    }
    var ei = Error(c(460)),
        Ff = Error(c(474)),
        fo = Error(c(542)),
        bc = {
            then: function() {}
        };

    function If(e) {
        return e = e.status, e === "fulfilled" || e === "rejected"
    }

    function mo() {}

    function ed(e, t, n) {
        switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(mo, mo), t = n), t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason, nd(e), e;
            default:
                if (typeof t.status == "string") t.then(mo, mo);
                else {
                    if (e = Ge, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
                    e = t, e.status = "pending", e.then(function(l) {
                        if (t.status === "pending") {
                            var i = t;
                            i.status = "fulfilled", i.value = l
                        }
                    }, function(l) {
                        if (t.status === "pending") {
                            var i = t;
                            i.status = "rejected", i.reason = l
                        }
                    })
                }
                switch (t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        throw e = t.reason, nd(e), e
                }
                throw ti = t, ei
        }
    }
    var ti = null;

    function td() {
        if (ti === null) throw Error(c(459));
        var e = ti;
        return ti = null, e
    }

    function nd(e) {
        if (e === ei || e === fo) throw Error(c(483))
    }
    var Rn = !1;

    function xc(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }

    function Sc(e, t) {
        e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }

    function On(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }

    function _n(e, t, n) {
        var l = e.updateQueue;
        if (l === null) return null;
        if (l = l.shared, (_e & 2) !== 0) {
            var i = l.pending;
            return i === null ? t.next = t : (t.next = i.next, i.next = t), l.pending = t, t = ao(e), Gf(e, null, n), t
        }
        return lo(e, l, t, n), ao(e)
    }

    function ni(e, t, n) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
            var l = t.lanes;
            l &= e.pendingLanes, n |= l, t.lanes = n, Ju(e, n)
        }
    }

    function Ec(e, t) {
        var n = e.updateQueue,
            l = e.alternate;
        if (l !== null && (l = l.updateQueue, n === l)) {
            var i = null,
                o = null;
            if (n = n.firstBaseUpdate, n !== null) {
                do {
                    var m = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    o === null ? i = o = m : o = o.next = m, n = n.next
                } while (n !== null);
                o === null ? i = o = t : o = o.next = t
            } else i = o = t;
            n = {
                baseState: l.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: l.shared,
                callbacks: l.callbacks
            }, e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
    }
    var wc = !1;

    function li() {
        if (wc) {
            var e = Fl;
            if (e !== null) throw e
        }
    }

    function ai(e, t, n, l) {
        wc = !1;
        var i = e.updateQueue;
        Rn = !1;
        var o = i.firstBaseUpdate,
            m = i.lastBaseUpdate,
            p = i.shared.pending;
        if (p !== null) {
            i.shared.pending = null;
            var S = p,
                _ = S.next;
            S.next = null, m === null ? o = _ : m.next = _, m = S;
            var G = e.alternate;
            G !== null && (G = G.updateQueue, p = G.lastBaseUpdate, p !== m && (p === null ? G.firstBaseUpdate = _ : p.next = _, G.lastBaseUpdate = S))
        }
        if (o !== null) {
            var K = i.baseState;
            m = 0, G = _ = S = null, p = o;
            do {
                var D = p.lane & -536870913,
                    H = D !== p.lane;
                if (H ? (Ce & D) === D : (l & D) === D) {
                    D !== 0 && D === Wl && (wc = !0), G !== null && (G = G.next = {
                        lane: 0,
                        tag: p.tag,
                        payload: p.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var fe = e,
                            se = p;D = t;
                        var Be = n;
                        switch (se.tag) {
                            case 1:
                                if (fe = se.payload, typeof fe == "function") {
                                    K = fe.call(Be, K, D);
                                    break e
                                }
                                K = fe;
                                break e;
                            case 3:
                                fe.flags = fe.flags & -65537 | 128;
                            case 0:
                                if (fe = se.payload, D = typeof fe == "function" ? fe.call(Be, K, D) : fe, D == null) break e;
                                K = b({}, K, D);
                                break e;
                            case 2:
                                Rn = !0
                        }
                    }
                    D = p.callback, D !== null && (e.flags |= 64, H && (e.flags |= 8192), H = i.callbacks, H === null ? i.callbacks = [D] : H.push(D))
                } else H = {
                    lane: D,
                    tag: p.tag,
                    payload: p.payload,
                    callback: p.callback,
                    next: null
                }, G === null ? (_ = G = H, S = K) : G = G.next = H, m |= D;
                if (p = p.next, p === null) {
                    if (p = i.shared.pending, p === null) break;
                    H = p, p = H.next, H.next = null, i.lastBaseUpdate = H, i.shared.pending = null
                }
            } while (!0);
            G === null && (S = K), i.baseState = S, i.firstBaseUpdate = _, i.lastBaseUpdate = G, o === null && (i.shared.lanes = 0), qn |= m, e.lanes = m, e.memoizedState = K
        }
    }

    function ld(e, t) {
        if (typeof e != "function") throw Error(c(191, e));
        e.call(t)
    }

    function ad(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null, e = 0; e < n.length; e++) ld(n[e], t)
    }
    var Il = X(null),
        ho = X(0);

    function id(e, t) {
        e = xn, $(ho, e), $(Il, t), xn = e | t.baseLanes
    }

    function Ac() {
        $(ho, xn), $(Il, Il.current)
    }

    function Nc() {
        xn = ho.current, W(Il), W(ho)
    }
    var Dn = 0,
        pe = null,
        He = null,
        Fe = null,
        vo = !1,
        ea = !1,
        xl = !1,
        go = 0,
        ii = 0,
        ta = null,
        R0 = 0;

    function $e() {
        throw Error(c(321))
    }

    function Tc(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Tt(e[n], t[n])) return !1;
        return !0
    }

    function Cc(e, t, n, l, i, o) {
        return Dn = o, pe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? Gd : Yd, xl = !1, o = n(l, i), xl = !1, ea && (o = rd(t, n, l, i)), od(e), o
    }

    function od(e) {
        O.H = Eo;
        var t = He !== null && He.next !== null;
        if (Dn = 0, Fe = He = pe = null, vo = !1, ii = 0, ta = null, t) throw Error(c(300));
        e === null || at || (e = e.dependencies, e !== null && co(e) && (at = !0))
    }

    function rd(e, t, n, l) {
        pe = e;
        var i = 0;
        do {
            if (ea && (ta = null), ii = 0, ea = !1, 25 <= i) throw Error(c(301));
            if (i += 1, Fe = He = null, e.updateQueue != null) {
                var o = e.updateQueue;
                o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0)
            }
            O.H = k0, o = t(n, l)
        } while (ea);
        return o
    }

    function O0() {
        var e = O.H,
            t = e.useState()[0];
        return t = typeof t.then == "function" ? oi(t) : t, e = e.useState()[0], (He !== null ? He.memoizedState : null) !== e && (pe.flags |= 1024), t
    }

    function jc() {
        var e = go !== 0;
        return go = 0, e
    }

    function Mc(e, t, n) {
        t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n
    }

    function Rc(e) {
        if (vo) {
            for (e = e.memoizedState; e !== null;) {
                var t = e.queue;
                t !== null && (t.pending = null), e = e.next
            }
            vo = !1
        }
        Dn = 0, Fe = He = pe = null, ea = !1, ii = go = 0, ta = null
    }

    function St() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Fe === null ? pe.memoizedState = Fe = e : Fe = Fe.next = e, Fe
    }

    function Ie() {
        if (He === null) {
            var e = pe.alternate;
            e = e !== null ? e.memoizedState : null
        } else e = He.next;
        var t = Fe === null ? pe.memoizedState : Fe.next;
        if (t !== null) Fe = t, He = e;
        else {
            if (e === null) throw pe.alternate === null ? Error(c(467)) : Error(c(310));
            He = e, e = {
                memoizedState: He.memoizedState,
                baseState: He.baseState,
                baseQueue: He.baseQueue,
                queue: He.queue,
                next: null
            }, Fe === null ? pe.memoizedState = Fe = e : Fe = Fe.next = e
        }
        return Fe
    }

    function Oc() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }

    function oi(e) {
        var t = ii;
        return ii += 1, ta === null && (ta = []), e = ed(ta, e, t), t = pe, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? Gd : Yd), e
    }

    function po(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function") return oi(e);
            if (e.$$typeof === B) return mt(e)
        }
        throw Error(c(438, String(e)))
    }

    function _c(e) {
        var t = null,
            n = pe.updateQueue;
        if (n !== null && (t = n.memoCache), t == null) {
            var l = pe.alternate;
            l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
                data: l.data.map(function(i) {
                    return i.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
                data: [],
                index: 0
            }), n === null && (n = Oc(), pe.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
            for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = ve;
        return t.index++, n
    }

    function hn(e, t) {
        return typeof t == "function" ? t(e) : t
    }

    function yo(e) {
        var t = Ie();
        return Dc(t, He, e)
    }

    function Dc(e, t, n) {
        var l = e.queue;
        if (l === null) throw Error(c(311));
        l.lastRenderedReducer = n;
        var i = e.baseQueue,
            o = l.pending;
        if (o !== null) {
            if (i !== null) {
                var m = i.next;
                i.next = o.next, o.next = m
            }
            t.baseQueue = i = o, l.pending = null
        }
        if (o = e.baseState, i === null) e.memoizedState = o;
        else {
            t = i.next;
            var p = m = null,
                S = null,
                _ = t,
                G = !1;
            do {
                var K = _.lane & -536870913;
                if (K !== _.lane ? (Ce & K) === K : (Dn & K) === K) {
                    var D = _.revertLane;
                    if (D === 0) S !== null && (S = S.next = {
                        lane: 0,
                        revertLane: 0,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null
                    }), K === Wl && (G = !0);
                    else if ((Dn & D) === D) {
                        _ = _.next, D === Wl && (G = !0);
                        continue
                    } else K = {
                        lane: 0,
                        revertLane: _.revertLane,
                        action: _.action,
                        hasEagerState: _.hasEagerState,
                        eagerState: _.eagerState,
                        next: null
                    }, S === null ? (p = S = K, m = o) : S = S.next = K, pe.lanes |= D, qn |= D;
                    K = _.action, xl && n(o, K), o = _.hasEagerState ? _.eagerState : n(o, K)
                } else D = {
                    lane: K,
                    revertLane: _.revertLane,
                    action: _.action,
                    hasEagerState: _.hasEagerState,
                    eagerState: _.eagerState,
                    next: null
                }, S === null ? (p = S = D, m = o) : S = S.next = D, pe.lanes |= K, qn |= K;
                _ = _.next
            } while (_ !== null && _ !== t);
            if (S === null ? m = o : S.next = p, !Tt(o, e.memoizedState) && (at = !0, G && (n = Fl, n !== null))) throw n;
            e.memoizedState = o, e.baseState = m, e.baseQueue = S, l.lastRenderedState = o
        }
        return i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]
    }

    function zc(e) {
        var t = Ie(),
            n = t.queue;
        if (n === null) throw Error(c(311));
        n.lastRenderedReducer = e;
        var l = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
        if (i !== null) {
            n.pending = null;
            var m = i = i.next;
            do o = e(o, m.action), m = m.next; while (m !== i);
            Tt(o, t.memoizedState) || (at = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
        }
        return [o, l]
    }

    function cd(e, t, n) {
        var l = pe,
            i = Ie(),
            o = Me;
        if (o) {
            if (n === void 0) throw Error(c(407));
            n = n()
        } else n = t();
        var m = !Tt((He || i).memoizedState, n);
        m && (i.memoizedState = n, at = !0), i = i.queue;
        var p = fd.bind(null, l, i, e);
        if (ri(2048, 8, p, [e]), i.getSnapshot !== t || m || Fe !== null && Fe.memoizedState.tag & 1) {
            if (l.flags |= 2048, na(9, bo(), ud.bind(null, l, i, n, t), null), Ge === null) throw Error(c(349));
            o || (Dn & 124) !== 0 || sd(l, t, n)
        }
        return n
    }

    function sd(e, t, n) {
        e.flags |= 16384, e = {
            getSnapshot: t,
            value: n
        }, t = pe.updateQueue, t === null ? (t = Oc(), pe.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
    }

    function ud(e, t, n, l) {
        t.value = n, t.getSnapshot = l, dd(t) && md(e)
    }

    function fd(e, t, n) {
        return n(function() {
            dd(t) && md(e)
        })
    }

    function dd(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Tt(e, n)
        } catch {
            return !0
        }
    }

    function md(e) {
        var t = Kl(e, 2);
        t !== null && _t(t, e, 2)
    }

    function Uc(e) {
        var t = St();
        if (typeof e == "function") {
            var n = e;
            if (e = n(), xl) {
                Tn(!0);
                try {
                    n()
                } finally {
                    Tn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hn,
            lastRenderedState: e
        }, t
    }

    function hd(e, t, n, l) {
        return e.baseState = n, Dc(e, He, typeof l == "function" ? l : hn)
    }

    function _0(e, t, n, l, i) {
        if (So(e)) throw Error(c(485));
        if (e = t.action, e !== null) {
            var o = {
                payload: i,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(m) {
                    o.listeners.push(m)
                }
            };
            O.T !== null ? n(!0) : o.isTransition = !1, l(o), n = t.pending, n === null ? (o.next = t.pending = o, vd(t, o)) : (o.next = n.next, t.pending = n.next = o)
        }
    }

    function vd(e, t) {
        var n = t.action,
            l = t.payload,
            i = e.state;
        if (t.isTransition) {
            var o = O.T,
                m = {};
            O.T = m;
            try {
                var p = n(i, l),
                    S = O.S;
                S !== null && S(m, p), gd(e, t, p)
            } catch (_) {
                Hc(e, t, _)
            } finally {
                O.T = o
            }
        } else try {
            o = n(i, l), gd(e, t, o)
        } catch (_) {
            Hc(e, t, _)
        }
    }

    function gd(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(l) {
            pd(e, t, l)
        }, function(l) {
            return Hc(e, t, l)
        }) : pd(e, t, n)
    }

    function pd(e, t, n) {
        t.status = "fulfilled", t.value = n, yd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, vd(e, n)))
    }

    function Hc(e, t, n) {
        var l = e.pending;
        if (e.pending = null, l !== null) {
            l = l.next;
            do t.status = "rejected", t.reason = n, yd(t), t = t.next; while (t !== l)
        }
        e.action = null
    }

    function yd(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)(0, e[t])()
    }

    function bd(e, t) {
        return t
    }

    function xd(e, t) {
        if (Me) {
            var n = Ge.formState;
            if (n !== null) {
                e: {
                    var l = pe;
                    if (Me) {
                        if (Ze) {
                            t: {
                                for (var i = Ze, o = Wt; i.nodeType !== 8;) {
                                    if (!o) {
                                        i = null;
                                        break t
                                    }
                                    if (i = Zt(i.nextSibling), i === null) {
                                        i = null;
                                        break t
                                    }
                                }
                                o = i.data,
                                i = o === "F!" || o === "F" ? i : null
                            }
                            if (i) {
                                Ze = Zt(i.nextSibling), l = i.data === "F!";
                                break e
                            }
                        }
                        gl(l)
                    }
                    l = !1
                }
                l && (t = n[0])
            }
        }
        return n = St(), n.memoizedState = n.baseState = t, l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: bd,
            lastRenderedState: t
        }, n.queue = l, n = Ld.bind(null, pe, l), l.dispatch = n, l = Uc(!1), o = Vc.bind(null, pe, !1, l.queue), l = St(), i = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        }, l.queue = i, n = _0.bind(null, pe, i, o, n), i.dispatch = n, l.memoizedState = e, [t, n, !1]
    }

    function Sd(e) {
        var t = Ie();
        return Ed(t, He, e)
    }

    function Ed(e, t, n) {
        if (t = Dc(e, t, bd)[0], e = yo(hn)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var l = oi(t)
        } catch (m) {
            throw m === ei ? fo : m
        } else l = t;
        t = Ie();
        var i = t.queue,
            o = i.dispatch;
        return n !== t.memoizedState && (pe.flags |= 2048, na(9, bo(), D0.bind(null, i, n), null)), [l, o, e]
    }

    function D0(e, t) {
        e.action = t
    }

    function wd(e) {
        var t = Ie(),
            n = He;
        if (n !== null) return Ed(t, n, e);
        Ie(), t = t.memoizedState, n = Ie();
        var l = n.queue.dispatch;
        return n.memoizedState = e, [t, l, !1]
    }

    function na(e, t, n, l) {
        return e = {
            tag: e,
            create: n,
            deps: l,
            inst: t,
            next: null
        }, t = pe.updateQueue, t === null && (t = Oc(), pe.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e
    }

    function bo() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }

    function Ad() {
        return Ie().memoizedState
    }

    function xo(e, t, n, l) {
        var i = St();
        l = l === void 0 ? null : l, pe.flags |= e, i.memoizedState = na(1 | t, bo(), n, l)
    }

    function ri(e, t, n, l) {
        var i = Ie();
        l = l === void 0 ? null : l;
        var o = i.memoizedState.inst;
        He !== null && l !== null && Tc(l, He.memoizedState.deps) ? i.memoizedState = na(t, o, n, l) : (pe.flags |= e, i.memoizedState = na(1 | t, o, n, l))
    }

    function Nd(e, t) {
        xo(8390656, 8, e, t)
    }

    function Td(e, t) {
        ri(2048, 8, e, t)
    }

    function Cd(e, t) {
        return ri(4, 2, e, t)
    }

    function jd(e, t) {
        return ri(4, 4, e, t)
    }

    function Md(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null) return e = e(), t.current = e,
            function() {
                t.current = null
            }
    }

    function Rd(e, t, n) {
        n = n != null ? n.concat([e]) : null, ri(4, 4, Md.bind(null, t, e), n)
    }

    function kc() {}

    function Od(e, t) {
        var n = Ie();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        return t !== null && Tc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e)
    }

    function _d(e, t) {
        var n = Ie();
        t = t === void 0 ? null : t;
        var l = n.memoizedState;
        if (t !== null && Tc(t, l[1])) return l[0];
        if (l = e(), xl) {
            Tn(!0);
            try {
                e()
            } finally {
                Tn(!1)
            }
        }
        return n.memoizedState = [l, t], l
    }

    function Bc(e, t, n) {
        return n === void 0 || (Dn & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = Um(), pe.lanes |= e, qn |= e, n)
    }

    function Dd(e, t, n, l) {
        return Tt(n, t) ? n : Il.current !== null ? (e = Bc(e, n, l), Tt(e, t) || (at = !0), e) : (Dn & 42) === 0 ? (at = !0, e.memoizedState = n) : (e = Um(), pe.lanes |= e, qn |= e, t)
    }

    function zd(e, t, n, l, i) {
        var o = J.p;
        J.p = o !== 0 && 8 > o ? o : 8;
        var m = O.T,
            p = {};
        O.T = p, Vc(e, !1, t, n);
        try {
            var S = i(),
                _ = O.S;
            if (_ !== null && _(p, S), S !== null && typeof S == "object" && typeof S.then == "function") {
                var G = M0(S, l);
                ci(e, t, G, Ot(e))
            } else ci(e, t, l, Ot(e))
        } catch (K) {
            ci(e, t, {
                then: function() {},
                status: "rejected",
                reason: K
            }, Ot())
        } finally {
            J.p = o, O.T = m
        }
    }

    function z0() {}

    function Lc(e, t, n, l) {
        if (e.tag !== 5) throw Error(c(476));
        var i = Ud(e).queue;
        zd(e, i, t, L, n === null ? z0 : function() {
            return Hd(e), n(l)
        })
    }

    function Ud(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: L,
            baseState: L,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: L
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hn,
                lastRenderedState: n
            },
            next: null
        }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t
    }

    function Hd(e) {
        var t = Ud(e).next.queue;
        ci(e, t, {}, Ot())
    }

    function qc() {
        return mt(Ti)
    }

    function kd() {
        return Ie().memoizedState
    }

    function Bd() {
        return Ie().memoizedState
    }

    function U0(e) {
        for (var t = e.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var n = Ot();
                    e = On(n);
                    var l = _n(t, e, n);
                    l !== null && (_t(l, t, n), ni(l, t, n)), t = {
                        cache: gc()
                    }, e.payload = t;
                    return
            }
            t = t.return
        }
    }

    function H0(e, t, n) {
        var l = Ot();
        n = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, So(e) ? qd(t, n) : (n = oc(e, t, n, l), n !== null && (_t(n, e, l), Vd(n, t, l)))
    }

    function Ld(e, t, n) {
        var l = Ot();
        ci(e, t, n, l)
    }

    function ci(e, t, n, l) {
        var i = {
            lane: l,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (So(e)) qd(t, i);
        else {
            var o = e.alternate;
            if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
                var m = t.lastRenderedState,
                    p = o(m, n);
                if (i.hasEagerState = !0, i.eagerState = p, Tt(p, m)) return lo(e, t, i, 0), Ge === null && no(), !1
            } catch {} finally {}
            if (n = oc(e, t, i, l), n !== null) return _t(n, e, l), Vd(n, t, l), !0
        }
        return !1
    }

    function Vc(e, t, n, l) {
        if (l = {
                lane: 2,
                revertLane: bs(),
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, So(e)) {
            if (t) throw Error(c(479))
        } else t = oc(e, n, l, 2), t !== null && _t(t, e, 2)
    }

    function So(e) {
        var t = e.alternate;
        return e === pe || t !== null && t === pe
    }

    function qd(e, t) {
        ea = vo = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
    }

    function Vd(e, t, n) {
        if ((n & 4194048) !== 0) {
            var l = t.lanes;
            l &= e.pendingLanes, n |= l, t.lanes = n, Ju(e, n)
        }
    }
    var Eo = {
            readContext: mt,
            use: po,
            useCallback: $e,
            useContext: $e,
            useEffect: $e,
            useImperativeHandle: $e,
            useLayoutEffect: $e,
            useInsertionEffect: $e,
            useMemo: $e,
            useReducer: $e,
            useRef: $e,
            useState: $e,
            useDebugValue: $e,
            useDeferredValue: $e,
            useTransition: $e,
            useSyncExternalStore: $e,
            useId: $e,
            useHostTransitionStatus: $e,
            useFormState: $e,
            useActionState: $e,
            useOptimistic: $e,
            useMemoCache: $e,
            useCacheRefresh: $e
        },
        Gd = {
            readContext: mt,
            use: po,
            useCallback: function(e, t) {
                return St().memoizedState = [e, t === void 0 ? null : t], e
            },
            useContext: mt,
            useEffect: Nd,
            useImperativeHandle: function(e, t, n) {
                n = n != null ? n.concat([e]) : null, xo(4194308, 4, Md.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return xo(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                xo(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var n = St();
                t = t === void 0 ? null : t;
                var l = e();
                if (xl) {
                    Tn(!0);
                    try {
                        e()
                    } finally {
                        Tn(!1)
                    }
                }
                return n.memoizedState = [l, t], l
            },
            useReducer: function(e, t, n) {
                var l = St();
                if (n !== void 0) {
                    var i = n(t);
                    if (xl) {
                        Tn(!0);
                        try {
                            n(t)
                        } finally {
                            Tn(!1)
                        }
                    }
                } else i = t;
                return l.memoizedState = l.baseState = i, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: i
                }, l.queue = e, e = e.dispatch = H0.bind(null, pe, e), [l.memoizedState, e]
            },
            useRef: function(e) {
                var t = St();
                return e = {
                    current: e
                }, t.memoizedState = e
            },
            useState: function(e) {
                e = Uc(e);
                var t = e.queue,
                    n = Ld.bind(null, pe, t);
                return t.dispatch = n, [e.memoizedState, n]
            },
            useDebugValue: kc,
            useDeferredValue: function(e, t) {
                var n = St();
                return Bc(n, e, t)
            },
            useTransition: function() {
                var e = Uc(!1);
                return e = zd.bind(null, pe, e.queue, !0, !1), St().memoizedState = e, [!1, e]
            },
            useSyncExternalStore: function(e, t, n) {
                var l = pe,
                    i = St();
                if (Me) {
                    if (n === void 0) throw Error(c(407));
                    n = n()
                } else {
                    if (n = t(), Ge === null) throw Error(c(349));
                    (Ce & 124) !== 0 || sd(l, t, n)
                }
                i.memoizedState = n;
                var o = {
                    value: n,
                    getSnapshot: t
                };
                return i.queue = o, Nd(fd.bind(null, l, o, e), [e]), l.flags |= 2048, na(9, bo(), ud.bind(null, l, o, n, t), null), n
            },
            useId: function() {
                var e = St(),
                    t = Ge.identifierPrefix;
                if (Me) {
                    var n = fn,
                        l = un;
                    n = (l & ~(1 << 32 - Nt(l) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = go++, 0 < n && (t += "H" + n.toString(32)), t += "»"
                } else n = R0++, t = "«" + t + "r" + n.toString(32) + "»";
                return e.memoizedState = t
            },
            useHostTransitionStatus: qc,
            useFormState: xd,
            useActionState: xd,
            useOptimistic: function(e) {
                var t = St();
                t.memoizedState = t.baseState = e;
                var n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = n, t = Vc.bind(null, pe, !0, n), n.dispatch = t, [e, t]
            },
            useMemoCache: _c,
            useCacheRefresh: function() {
                return St().memoizedState = U0.bind(null, pe)
            }
        },
        Yd = {
            readContext: mt,
            use: po,
            useCallback: Od,
            useContext: mt,
            useEffect: Td,
            useImperativeHandle: Rd,
            useInsertionEffect: Cd,
            useLayoutEffect: jd,
            useMemo: _d,
            useReducer: yo,
            useRef: Ad,
            useState: function() {
                return yo(hn)
            },
            useDebugValue: kc,
            useDeferredValue: function(e, t) {
                var n = Ie();
                return Dd(n, He.memoizedState, e, t)
            },
            useTransition: function() {
                var e = yo(hn)[0],
                    t = Ie().memoizedState;
                return [typeof e == "boolean" ? e : oi(e), t]
            },
            useSyncExternalStore: cd,
            useId: kd,
            useHostTransitionStatus: qc,
            useFormState: Sd,
            useActionState: Sd,
            useOptimistic: function(e, t) {
                var n = Ie();
                return hd(n, He, e, t)
            },
            useMemoCache: _c,
            useCacheRefresh: Bd
        },
        k0 = {
            readContext: mt,
            use: po,
            useCallback: Od,
            useContext: mt,
            useEffect: Td,
            useImperativeHandle: Rd,
            useInsertionEffect: Cd,
            useLayoutEffect: jd,
            useMemo: _d,
            useReducer: zc,
            useRef: Ad,
            useState: function() {
                return zc(hn)
            },
            useDebugValue: kc,
            useDeferredValue: function(e, t) {
                var n = Ie();
                return He === null ? Bc(n, e, t) : Dd(n, He.memoizedState, e, t)
            },
            useTransition: function() {
                var e = zc(hn)[0],
                    t = Ie().memoizedState;
                return [typeof e == "boolean" ? e : oi(e), t]
            },
            useSyncExternalStore: cd,
            useId: kd,
            useHostTransitionStatus: qc,
            useFormState: wd,
            useActionState: wd,
            useOptimistic: function(e, t) {
                var n = Ie();
                return He !== null ? hd(n, He, e, t) : (n.baseState = e, [e, n.queue.dispatch])
            },
            useMemoCache: _c,
            useCacheRefresh: Bd
        },
        la = null,
        si = 0;

    function wo(e) {
        var t = si;
        return si += 1, la === null && (la = []), ed(la, e, t)
    }

    function ui(e, t) {
        t = t.props.ref, e.ref = t !== void 0 ? t : null
    }

    function Ao(e, t) {
        throw t.$$typeof === A ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }

    function Xd(e) {
        var t = e._init;
        return t(e._payload)
    }

    function Qd(e) {
        function t(C, N) {
            if (e) {
                var R = C.deletions;
                R === null ? (C.deletions = [N], C.flags |= 16) : R.push(N)
            }
        }

        function n(C, N) {
            if (!e) return null;
            for (; N !== null;) t(C, N), N = N.sibling;
            return null
        }

        function l(C) {
            for (var N = new Map; C !== null;) C.key !== null ? N.set(C.key, C) : N.set(C.index, C), C = C.sibling;
            return N
        }

        function i(C, N) {
            return C = sn(C, N), C.index = 0, C.sibling = null, C
        }

        function o(C, N, R) {
            return C.index = R, e ? (R = C.alternate, R !== null ? (R = R.index, R < N ? (C.flags |= 67108866, N) : R) : (C.flags |= 67108866, N)) : (C.flags |= 1048576, N)
        }

        function m(C) {
            return e && C.alternate === null && (C.flags |= 67108866), C
        }

        function p(C, N, R, Q) {
            return N === null || N.tag !== 6 ? (N = cc(R, C.mode, Q), N.return = C, N) : (N = i(N, R), N.return = C, N)
        }

        function S(C, N, R, Q) {
            var ee = R.type;
            return ee === U ? G(C, N, R.props.children, Q, R.key) : N !== null && (N.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Z && Xd(ee) === N.type) ? (N = i(N, R.props), ui(N, R), N.return = C, N) : (N = io(R.type, R.key, R.props, null, C.mode, Q), ui(N, R), N.return = C, N)
        }

        function _(C, N, R, Q) {
            return N === null || N.tag !== 4 || N.stateNode.containerInfo !== R.containerInfo || N.stateNode.implementation !== R.implementation ? (N = sc(R, C.mode, Q), N.return = C, N) : (N = i(N, R.children || []), N.return = C, N)
        }

        function G(C, N, R, Q, ee) {
            return N === null || N.tag !== 7 ? (N = dl(R, C.mode, Q, ee), N.return = C, N) : (N = i(N, R), N.return = C, N)
        }

        function K(C, N, R) {
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return N = cc("" + N, C.mode, R), N.return = C, N;
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                    case T:
                        return R = io(N.type, N.key, N.props, null, C.mode, R), ui(R, N), R.return = C, R;
                    case j:
                        return N = sc(N, C.mode, R), N.return = C, N;
                    case Z:
                        var Q = N._init;
                        return N = Q(N._payload), K(C, N, R)
                }
                if (ce(N) || de(N)) return N = dl(N, C.mode, R, null), N.return = C, N;
                if (typeof N.then == "function") return K(C, wo(N), R);
                if (N.$$typeof === B) return K(C, so(C, N), R);
                Ao(C, N)
            }
            return null
        }

        function D(C, N, R, Q) {
            var ee = N !== null ? N.key : null;
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint") return ee !== null ? null : p(C, N, "" + R, Q);
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case T:
                        return R.key === ee ? S(C, N, R, Q) : null;
                    case j:
                        return R.key === ee ? _(C, N, R, Q) : null;
                    case Z:
                        return ee = R._init, R = ee(R._payload), D(C, N, R, Q)
                }
                if (ce(R) || de(R)) return ee !== null ? null : G(C, N, R, Q, null);
                if (typeof R.then == "function") return D(C, N, wo(R), Q);
                if (R.$$typeof === B) return D(C, N, so(C, R), Q);
                Ao(C, R)
            }
            return null
        }

        function H(C, N, R, Q, ee) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint") return C = C.get(R) || null, p(N, C, "" + Q, ee);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                    case T:
                        return C = C.get(Q.key === null ? R : Q.key) || null, S(N, C, Q, ee);
                    case j:
                        return C = C.get(Q.key === null ? R : Q.key) || null, _(N, C, Q, ee);
                    case Z:
                        var Se = Q._init;
                        return Q = Se(Q._payload), H(C, N, R, Q, ee)
                }
                if (ce(Q) || de(Q)) return C = C.get(R) || null, G(N, C, Q, ee, null);
                if (typeof Q.then == "function") return H(C, N, R, wo(Q), ee);
                if (Q.$$typeof === B) return H(C, N, R, so(N, Q), ee);
                Ao(N, Q)
            }
            return null
        }

        function fe(C, N, R, Q) {
            for (var ee = null, Se = null, ae = N, ue = N = 0, ot = null; ae !== null && ue < R.length; ue++) {
                ae.index > ue ? (ot = ae, ae = null) : ot = ae.sibling;
                var je = D(C, ae, R[ue], Q);
                if (je === null) {
                    ae === null && (ae = ot);
                    break
                }
                e && ae && je.alternate === null && t(C, ae), N = o(je, N, ue), Se === null ? ee = je : Se.sibling = je, Se = je, ae = ot
            }
            if (ue === R.length) return n(C, ae), Me && hl(C, ue), ee;
            if (ae === null) {
                for (; ue < R.length; ue++) ae = K(C, R[ue], Q), ae !== null && (N = o(ae, N, ue), Se === null ? ee = ae : Se.sibling = ae, Se = ae);
                return Me && hl(C, ue), ee
            }
            for (ae = l(ae); ue < R.length; ue++) ot = H(ae, C, ue, R[ue], Q), ot !== null && (e && ot.alternate !== null && ae.delete(ot.key === null ? ue : ot.key), N = o(ot, N, ue), Se === null ? ee = ot : Se.sibling = ot, Se = ot);
            return e && ae.forEach(function(Pn) {
                return t(C, Pn)
            }), Me && hl(C, ue), ee
        }

        function se(C, N, R, Q) {
            if (R == null) throw Error(c(151));
            for (var ee = null, Se = null, ae = N, ue = N = 0, ot = null, je = R.next(); ae !== null && !je.done; ue++, je = R.next()) {
                ae.index > ue ? (ot = ae, ae = null) : ot = ae.sibling;
                var Pn = D(C, ae, je.value, Q);
                if (Pn === null) {
                    ae === null && (ae = ot);
                    break
                }
                e && ae && Pn.alternate === null && t(C, ae), N = o(Pn, N, ue), Se === null ? ee = Pn : Se.sibling = Pn, Se = Pn, ae = ot
            }
            if (je.done) return n(C, ae), Me && hl(C, ue), ee;
            if (ae === null) {
                for (; !je.done; ue++, je = R.next()) je = K(C, je.value, Q), je !== null && (N = o(je, N, ue), Se === null ? ee = je : Se.sibling = je, Se = je);
                return Me && hl(C, ue), ee
            }
            for (ae = l(ae); !je.done; ue++, je = R.next()) je = H(ae, C, ue, je.value, Q), je !== null && (e && je.alternate !== null && ae.delete(je.key === null ? ue : je.key), N = o(je, N, ue), Se === null ? ee = je : Se.sibling = je, Se = je);
            return e && ae.forEach(function(By) {
                return t(C, By)
            }), Me && hl(C, ue), ee
        }

        function Be(C, N, R, Q) {
            if (typeof R == "object" && R !== null && R.type === U && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                    case T:
                        e: {
                            for (var ee = R.key; N !== null;) {
                                if (N.key === ee) {
                                    if (ee = R.type, ee === U) {
                                        if (N.tag === 7) {
                                            n(C, N.sibling), Q = i(N, R.props.children), Q.return = C, C = Q;
                                            break e
                                        }
                                    } else if (N.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Z && Xd(ee) === N.type) {
                                        n(C, N.sibling), Q = i(N, R.props), ui(Q, R), Q.return = C, C = Q;
                                        break e
                                    }
                                    n(C, N);
                                    break
                                } else t(C, N);
                                N = N.sibling
                            }
                            R.type === U ? (Q = dl(R.props.children, C.mode, Q, R.key), Q.return = C, C = Q) : (Q = io(R.type, R.key, R.props, null, C.mode, Q), ui(Q, R), Q.return = C, C = Q)
                        }
                        return m(C);
                    case j:
                        e: {
                            for (ee = R.key; N !== null;) {
                                if (N.key === ee)
                                    if (N.tag === 4 && N.stateNode.containerInfo === R.containerInfo && N.stateNode.implementation === R.implementation) {
                                        n(C, N.sibling), Q = i(N, R.children || []), Q.return = C, C = Q;
                                        break e
                                    } else {
                                        n(C, N);
                                        break
                                    }
                                else t(C, N);
                                N = N.sibling
                            }
                            Q = sc(R, C.mode, Q),
                            Q.return = C,
                            C = Q
                        }
                        return m(C);
                    case Z:
                        return ee = R._init, R = ee(R._payload), Be(C, N, R, Q)
                }
                if (ce(R)) return fe(C, N, R, Q);
                if (de(R)) {
                    if (ee = de(R), typeof ee != "function") throw Error(c(150));
                    return R = ee.call(R), se(C, N, R, Q)
                }
                if (typeof R.then == "function") return Be(C, N, wo(R), Q);
                if (R.$$typeof === B) return Be(C, N, so(C, R), Q);
                Ao(C, R)
            }
            return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, N !== null && N.tag === 6 ? (n(C, N.sibling), Q = i(N, R), Q.return = C, C = Q) : (n(C, N), Q = cc(R, C.mode, Q), Q.return = C, C = Q), m(C)) : n(C, N)
        }
        return function(C, N, R, Q) {
            try {
                si = 0;
                var ee = Be(C, N, R, Q);
                return la = null, ee
            } catch (ae) {
                if (ae === ei || ae === fo) throw ae;
                var Se = Ct(29, ae, null, C.mode);
                return Se.lanes = Q, Se.return = C, Se
            } finally {}
        }
    }
    var aa = Qd(!0),
        Zd = Qd(!1),
        Vt = X(null),
        Ft = null;

    function zn(e) {
        var t = e.alternate;
        $(tt, tt.current & 1), $(Vt, e), Ft === null && (t === null || Il.current !== null || t.memoizedState !== null) && (Ft = e)
    }

    function Kd(e) {
        if (e.tag === 22) {
            if ($(tt, tt.current), $(Vt, e), Ft === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Ft = e)
            }
        } else Un()
    }

    function Un() {
        $(tt, tt.current), $(Vt, Vt.current)
    }

    function vn(e) {
        W(Vt), Ft === e && (Ft = null), W(tt)
    }
    var tt = X(0);

    function No(e) {
        for (var t = e; t !== null;) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Os(n))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Gc(e, t, n, l) {
        t = e.memoizedState, n = n(l, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Yc = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var l = Ot(),
                i = On(l);
            i.payload = t, n != null && (i.callback = n), t = _n(e, i, l), t !== null && (_t(t, e, l), ni(t, e, l))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var l = Ot(),
                i = On(l);
            i.tag = 1, i.payload = t, n != null && (i.callback = n), t = _n(e, i, l), t !== null && (_t(t, e, l), ni(t, e, l))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = Ot(),
                l = On(n);
            l.tag = 2, t != null && (l.callback = t), t = _n(e, l, n), t !== null && (_t(t, e, n), ni(t, e, n))
        }
    };

    function Jd(e, t, n, l, i, o, m) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, o, m) : t.prototype && t.prototype.isPureReactComponent ? !Za(n, l) || !Za(i, o) : !0
    }

    function Pd(e, t, n, l) {
        e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Yc.enqueueReplaceState(t, t.state, null)
    }

    function Sl(e, t) {
        var n = t;
        if ("ref" in t) {
            n = {};
            for (var l in t) l !== "ref" && (n[l] = t[l])
        }
        if (e = e.defaultProps) {
            n === t && (n = b({}, n));
            for (var i in e) n[i] === void 0 && (n[i] = e[i])
        }
        return n
    }
    var To = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    };

    function $d(e) {
        To(e)
    }

    function Wd(e) {
        console.error(e)
    }

    function Fd(e) {
        To(e)
    }

    function Co(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }

    function Id(e, t, n) {
        try {
            var l = e.onCaughtError;
            l(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }

    function Xc(e, t, n) {
        return n = On(n), n.tag = 3, n.payload = {
            element: null
        }, n.callback = function() {
            Co(e, t)
        }, n
    }

    function em(e) {
        return e = On(e), e.tag = 3, e
    }

    function tm(e, t, n, l) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == "function") {
            var o = l.value;
            e.payload = function() {
                return i(o)
            }, e.callback = function() {
                Id(t, n, l)
            }
        }
        var m = n.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (e.callback = function() {
            Id(t, n, l), typeof i != "function" && (Vn === null ? Vn = new Set([this]) : Vn.add(this));
            var p = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: p !== null ? p : ""
            })
        })
    }

    function B0(e, t, n, l, i) {
        if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
            if (t = n.alternate, t !== null && Wa(t, n, i, !0), n = Vt.current, n !== null) {
                switch (n.tag) {
                    case 13:
                        return Ft === null ? hs() : n.alternate === null && Ke === 0 && (Ke = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, l === bc ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([l]) : t.add(l), gs(e, l, i)), !1;
                    case 22:
                        return n.flags |= 65536, l === bc ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([l])
                        }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([l]) : n.add(l)), gs(e, l, i)), !1
                }
                throw Error(c(435, n.tag))
            }
            return gs(e, l, i), hs(), !1
        }
        if (Me) return t = Vt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, l !== dc && (e = Error(c(422), {
            cause: l
        }), $a(kt(e, n)))) : (l !== dc && (t = Error(c(423), {
            cause: l
        }), $a(kt(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, l = kt(l, n), i = Xc(e.stateNode, l, i), Ec(e, i), Ke !== 4 && (Ke = 2)), !1;
        var o = Error(c(520), {
            cause: l
        });
        if (o = kt(o, n), pi === null ? pi = [o] : pi.push(o), Ke !== 4 && (Ke = 2), t === null) return !0;
        l = kt(l, n), n = t;
        do {
            switch (n.tag) {
                case 3:
                    return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Xc(n.stateNode, l, e), Ec(n, e), !1;
                case 1:
                    if (t = n.type, o = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Vn === null || !Vn.has(o)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = em(i), tm(i, e, n, l), Ec(n, i), !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var nm = Error(c(461)),
        at = !1;

    function ct(e, t, n, l) {
        t.child = e === null ? Zd(t, null, n, l) : aa(t, e.child, n, l)
    }

    function lm(e, t, n, l, i) {
        n = n.render;
        var o = t.ref;
        if ("ref" in l) {
            var m = {};
            for (var p in l) p !== "ref" && (m[p] = l[p])
        } else m = l;
        return yl(t), l = Cc(e, t, n, m, o, i), p = jc(), e !== null && !at ? (Mc(e, t, i), gn(e, t, i)) : (Me && p && uc(t), t.flags |= 1, ct(e, t, l, i), t.child)
    }

    function am(e, t, n, l, i) {
        if (e === null) {
            var o = n.type;
            return typeof o == "function" && !rc(o) && o.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = o, im(e, t, o, l, i)) : (e = io(n.type, null, l, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
        }
        if (o = e.child, !Fc(e, i)) {
            var m = o.memoizedProps;
            if (n = n.compare, n = n !== null ? n : Za, n(m, l) && e.ref === t.ref) return gn(e, t, i)
        }
        return t.flags |= 1, e = sn(o, l), e.ref = t.ref, e.return = t, t.child = e
    }

    function im(e, t, n, l, i) {
        if (e !== null) {
            var o = e.memoizedProps;
            if (Za(o, l) && e.ref === t.ref)
                if (at = !1, t.pendingProps = l = o, Fc(e, i))(e.flags & 131072) !== 0 && (at = !0);
                else return t.lanes = e.lanes, gn(e, t, i)
        }
        return Qc(e, t, n, l, i)
    }

    function om(e, t, n) {
        var l = t.pendingProps,
            i = l.children,
            o = e !== null ? e.memoizedState : null;
        if (l.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (l = o !== null ? o.baseLanes | n : n, e !== null) {
                    for (i = t.child = e.child, o = 0; i !== null;) o = o | i.lanes | i.childLanes, i = i.sibling;
                    t.childLanes = o & ~l
                } else t.childLanes = 0, t.child = null;
                return rm(e, t, l, n)
            }
            if ((n & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, e !== null && uo(t, o !== null ? o.cachePool : null), o !== null ? id(t, o) : Ac(), Kd(t);
            else return t.lanes = t.childLanes = 536870912, rm(e, t, o !== null ? o.baseLanes | n : n, n)
        } else o !== null ? (uo(t, o.cachePool), id(t, o), Un(), t.memoizedState = null) : (e !== null && uo(t, null), Ac(), Un());
        return ct(e, t, i, n), t.child
    }

    function rm(e, t, n, l) {
        var i = yc();
        return i = i === null ? null : {
            parent: et._currentValue,
            pool: i
        }, t.memoizedState = {
            baseLanes: n,
            cachePool: i
        }, e !== null && uo(t, null), Ac(), Kd(t), e !== null && Wa(e, t, l, !0), null
    }

    function jo(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object") throw Error(c(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }

    function Qc(e, t, n, l, i) {
        return yl(t), n = Cc(e, t, n, l, void 0, i), l = jc(), e !== null && !at ? (Mc(e, t, i), gn(e, t, i)) : (Me && l && uc(t), t.flags |= 1, ct(e, t, n, i), t.child)
    }

    function cm(e, t, n, l, i, o) {
        return yl(t), t.updateQueue = null, n = rd(t, l, n, i), od(e), l = jc(), e !== null && !at ? (Mc(e, t, o), gn(e, t, o)) : (Me && l && uc(t), t.flags |= 1, ct(e, t, n, o), t.child)
    }

    function sm(e, t, n, l, i) {
        if (yl(t), t.stateNode === null) {
            var o = Jl,
                m = n.contextType;
            typeof m == "object" && m !== null && (o = mt(m)), o = new n(l, o), t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Yc, t.stateNode = o, o._reactInternals = t, o = t.stateNode, o.props = l, o.state = t.memoizedState, o.refs = {}, xc(t), m = n.contextType, o.context = typeof m == "object" && m !== null ? mt(m) : Jl, o.state = t.memoizedState, m = n.getDerivedStateFromProps, typeof m == "function" && (Gc(t, n, m, l), o.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (m = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), m !== o.state && Yc.enqueueReplaceState(o, o.state, null), ai(t, l, o, i), li(), o.state = t.memoizedState), typeof o.componentDidMount == "function" && (t.flags |= 4194308), l = !0
        } else if (e === null) {
            o = t.stateNode;
            var p = t.memoizedProps,
                S = Sl(n, p);
            o.props = S;
            var _ = o.context,
                G = n.contextType;
            m = Jl, typeof G == "object" && G !== null && (m = mt(G));
            var K = n.getDerivedStateFromProps;
            G = typeof K == "function" || typeof o.getSnapshotBeforeUpdate == "function", p = t.pendingProps !== p, G || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (p || _ !== m) && Pd(t, o, l, m), Rn = !1;
            var D = t.memoizedState;
            o.state = D, ai(t, l, o, i), li(), _ = t.memoizedState, p || D !== _ || Rn ? (typeof K == "function" && (Gc(t, n, K, l), _ = t.memoizedState), (S = Rn || Jd(t, n, S, l, D, _, m)) ? (G || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = _), o.props = l, o.state = _, o.context = m, l = S) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), l = !1)
        } else {
            o = t.stateNode, Sc(e, t), m = t.memoizedProps, G = Sl(n, m), o.props = G, K = t.pendingProps, D = o.context, _ = n.contextType, S = Jl, typeof _ == "object" && _ !== null && (S = mt(_)), p = n.getDerivedStateFromProps, (_ = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (m !== K || D !== S) && Pd(t, o, l, S), Rn = !1, D = t.memoizedState, o.state = D, ai(t, l, o, i), li();
            var H = t.memoizedState;
            m !== K || D !== H || Rn || e !== null && e.dependencies !== null && co(e.dependencies) ? (typeof p == "function" && (Gc(t, n, p, l), H = t.memoizedState), (G = Rn || Jd(t, n, G, l, D, H, S) || e !== null && e.dependencies !== null && co(e.dependencies)) ? (_ || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, H, S), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(l, H, S)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = H), o.props = l, o.state = H, o.context = S, l = G) : (typeof o.componentDidUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || m === e.memoizedProps && D === e.memoizedState || (t.flags |= 1024), l = !1)
        }
        return o = l, jo(e, t), l = (t.flags & 128) !== 0, o || l ? (o = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : o.render(), t.flags |= 1, e !== null && l ? (t.child = aa(t, e.child, null, i), t.child = aa(t, null, n, i)) : ct(e, t, n, i), t.memoizedState = o.state, e = t.child) : e = gn(e, t, i), e
    }

    function um(e, t, n, l) {
        return Pa(), t.flags |= 256, ct(e, t, n, l), t.child
    }
    var Zc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };

    function Kc(e) {
        return {
            baseLanes: e,
            cachePool: Wf()
        }
    }

    function Jc(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Gt), e
    }

    function fm(e, t, n) {
        var l = t.pendingProps,
            i = !1,
            o = (t.flags & 128) !== 0,
            m;
        if ((m = o) || (m = e !== null && e.memoizedState === null ? !1 : (tt.current & 2) !== 0), m && (i = !0, t.flags &= -129), m = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
            if (Me) {
                if (i ? zn(t) : Un(), Me) {
                    var p = Ze,
                        S;
                    if (S = p) {
                        e: {
                            for (S = p, p = Wt; S.nodeType !== 8;) {
                                if (!p) {
                                    p = null;
                                    break e
                                }
                                if (S = Zt(S.nextSibling), S === null) {
                                    p = null;
                                    break e
                                }
                            }
                            p = S
                        }
                        p !== null ? (t.memoizedState = {
                            dehydrated: p,
                            treeContext: ml !== null ? {
                                id: un,
                                overflow: fn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, S = Ct(18, null, null, 0), S.stateNode = p, S.return = t, t.child = S, pt = t, Ze = null, S = !0) : S = !1
                    }
                    S || gl(t)
                }
                if (p = t.memoizedState, p !== null && (p = p.dehydrated, p !== null)) return Os(p) ? t.lanes = 32 : t.lanes = 536870912, null;
                vn(t)
            }
            return p = l.children, l = l.fallback, i ? (Un(), i = t.mode, p = Mo({
                mode: "hidden",
                children: p
            }, i), l = dl(l, i, n, null), p.return = t, l.return = t, p.sibling = l, t.child = p, i = t.child, i.memoizedState = Kc(n), i.childLanes = Jc(e, m, n), t.memoizedState = Zc, l) : (zn(t), Pc(t, p))
        }
        if (S = e.memoizedState, S !== null && (p = S.dehydrated, p !== null)) {
            if (o) t.flags & 256 ? (zn(t), t.flags &= -257, t = $c(e, t, n)) : t.memoizedState !== null ? (Un(), t.child = e.child, t.flags |= 128, t = null) : (Un(), i = l.fallback, p = t.mode, l = Mo({
                mode: "visible",
                children: l.children
            }, p), i = dl(i, p, n, null), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, aa(t, e.child, null, n), l = t.child, l.memoizedState = Kc(n), l.childLanes = Jc(e, m, n), t.memoizedState = Zc, t = i);
            else if (zn(t), Os(p)) {
                if (m = p.nextSibling && p.nextSibling.dataset, m) var _ = m.dgst;
                m = _, l = Error(c(419)), l.stack = "", l.digest = m, $a({
                    value: l,
                    source: null,
                    stack: null
                }), t = $c(e, t, n)
            } else if (at || Wa(e, t, n, !1), m = (n & e.childLanes) !== 0, at || m) {
                if (m = Ge, m !== null && (l = n & -n, l = (l & 42) !== 0 ? 1 : _r(l), l = (l & (m.suspendedLanes | n)) !== 0 ? 0 : l, l !== 0 && l !== S.retryLane)) throw S.retryLane = l, Kl(e, l), _t(m, e, l), nm;
                p.data === "$?" || hs(), t = $c(e, t, n)
            } else p.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Ze = Zt(p.nextSibling), pt = t, Me = !0, vl = null, Wt = !1, e !== null && (Lt[qt++] = un, Lt[qt++] = fn, Lt[qt++] = ml, un = e.id, fn = e.overflow, ml = t), t = Pc(t, l.children), t.flags |= 4096);
            return t
        }
        return i ? (Un(), i = l.fallback, p = t.mode, S = e.child, _ = S.sibling, l = sn(S, {
            mode: "hidden",
            children: l.children
        }), l.subtreeFlags = S.subtreeFlags & 65011712, _ !== null ? i = sn(_, i) : (i = dl(i, p, n, null), i.flags |= 2), i.return = t, l.return = t, l.sibling = i, t.child = l, l = i, i = t.child, p = e.child.memoizedState, p === null ? p = Kc(n) : (S = p.cachePool, S !== null ? (_ = et._currentValue, S = S.parent !== _ ? {
            parent: _,
            pool: _
        } : S) : S = Wf(), p = {
            baseLanes: p.baseLanes | n,
            cachePool: S
        }), i.memoizedState = p, i.childLanes = Jc(e, m, n), t.memoizedState = Zc, l) : (zn(t), n = e.child, e = n.sibling, n = sn(n, {
            mode: "visible",
            children: l.children
        }), n.return = t, n.sibling = null, e !== null && (m = t.deletions, m === null ? (t.deletions = [e], t.flags |= 16) : m.push(e)), t.child = n, t.memoizedState = null, n)
    }

    function Pc(e, t) {
        return t = Mo({
            mode: "visible",
            children: t
        }, e.mode), t.return = e, e.child = t
    }

    function Mo(e, t) {
        return e = Ct(22, e, null, t), e.lanes = 0, e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, e
    }

    function $c(e, t, n) {
        return aa(t, e.child, null, n), e = Pc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
    }

    function dm(e, t, n) {
        e.lanes |= t;
        var l = e.alternate;
        l !== null && (l.lanes |= t), hc(e.return, t, n)
    }

    function Wc(e, t, n, l, i) {
        var o = e.memoizedState;
        o === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: n,
            tailMode: i
        } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = l, o.tail = n, o.tailMode = i)
    }

    function mm(e, t, n) {
        var l = t.pendingProps,
            i = l.revealOrder,
            o = l.tail;
        if (ct(e, t, l.children, n), l = tt.current, (l & 2) !== 0) l = l & 1 | 2, t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null;) {
                if (e.tag === 13) e.memoizedState !== null && dm(e, n, t);
                else if (e.tag === 19) dm(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            l &= 1
        }
        switch ($(tt, l), i) {
            case "forwards":
                for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && No(e) === null && (i = n), n = n.sibling;
                n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Wc(t, !1, i, n, o);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null;) {
                    if (e = i.alternate, e !== null && No(e) === null) {
                        t.child = i;
                        break
                    }
                    e = i.sibling, i.sibling = n, n = i, i = e
                }
                Wc(t, !0, n, null, o);
                break;
            case "together":
                Wc(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function gn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies), qn |= t.lanes, (n & t.childLanes) === 0)
            if (e !== null) {
                if (Wa(e, t, n, !1), (n & t.childLanes) === 0) return null
            } else return null;
        if (e !== null && t.child !== e.child) throw Error(c(153));
        if (t.child !== null) {
            for (e = t.child, n = sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = sn(e, e.pendingProps), n.return = t;
            n.sibling = null
        }
        return t.child
    }

    function Fc(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && co(e)))
    }

    function L0(e, t, n) {
        switch (t.tag) {
            case 3:
                re(t, t.stateNode.containerInfo), Mn(t, et, e.memoizedState.cache), Pa();
                break;
            case 27:
            case 5:
                Te(t);
                break;
            case 4:
                re(t, t.stateNode.containerInfo);
                break;
            case 10:
                Mn(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var l = t.memoizedState;
                if (l !== null) return l.dehydrated !== null ? (zn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? fm(e, t, n) : (zn(t), e = gn(e, t, n), e !== null ? e.sibling : null);
                zn(t);
                break;
            case 19:
                var i = (e.flags & 128) !== 0;
                if (l = (n & t.childLanes) !== 0, l || (Wa(e, t, n, !1), l = (n & t.childLanes) !== 0), i) {
                    if (l) return mm(e, t, n);
                    t.flags |= 128
                }
                if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $(tt, tt.current), l) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, om(e, t, n);
            case 24:
                Mn(t, et, e.memoizedState.cache)
        }
        return gn(e, t, n)
    }

    function hm(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps) at = !0;
            else {
                if (!Fc(e, n) && (t.flags & 128) === 0) return at = !1, L0(e, t, n);
                at = (e.flags & 131072) !== 0
            }
        else at = !1, Me && (t.flags & 1048576) !== 0 && Xf(t, ro, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var l = t.elementType,
                        i = l._init;
                    if (l = i(l._payload), t.type = l, typeof l == "function") rc(l) ? (e = Sl(l, e), t.tag = 1, t = sm(null, t, l, e, n)) : (t.tag = 0, t = Qc(null, t, l, e, n));
                    else {
                        if (l != null) {
                            if (i = l.$$typeof, i === P) {
                                t.tag = 11, t = lm(null, t, l, e, n);
                                break e
                            } else if (i === Y) {
                                t.tag = 14, t = am(null, t, l, e, n);
                                break e
                            }
                        }
                        throw t = xe(l) || l, Error(c(306, t, ""))
                    }
                }
                return t;
            case 0:
                return Qc(e, t, t.type, t.pendingProps, n);
            case 1:
                return l = t.type, i = Sl(l, t.pendingProps), sm(e, t, l, i, n);
            case 3:
                e: {
                    if (re(t, t.stateNode.containerInfo), e === null) throw Error(c(387));l = t.pendingProps;
                    var o = t.memoizedState;i = o.element,
                    Sc(e, t),
                    ai(t, l, null, n);
                    var m = t.memoizedState;
                    if (l = m.cache, Mn(t, et, l), l !== o.cache && vc(t, [et], n, !0), li(), l = m.element, o.isDehydrated)
                        if (o = {
                                element: l,
                                isDehydrated: !1,
                                cache: m.cache
                            }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                            t = um(e, t, l, n);
                            break e
                        } else if (l !== i) {
                        i = kt(Error(c(424)), t), $a(i), t = um(e, t, l, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo, e.nodeType) {
                            case 9:
                                e = e.body;
                                break;
                            default:
                                e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Ze = Zt(e.firstChild), pt = t, Me = !0, vl = null, Wt = !0, n = Zd(t, null, l, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling
                    } else {
                        if (Pa(), l === i) {
                            t = gn(e, t, n);
                            break e
                        }
                        ct(e, t, l, n)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return jo(e, t), e === null ? (n = yh(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Me || (n = t.type, e = t.pendingProps, l = Yo(ie.current).createElement(n), l[dt] = t, l[bt] = e, ut(l, n, e), lt(l), t.stateNode = l) : t.memoizedState = yh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
            case 27:
                return Te(t), e === null && Me && (l = t.stateNode = vh(t.type, t.pendingProps, ie.current), pt = t, Wt = !0, i = Ze, Xn(t.type) ? (_s = i, Ze = Zt(l.firstChild)) : Ze = i), ct(e, t, t.pendingProps.children, n), jo(e, t), e === null && (t.flags |= 4194304), t.child;
            case 5:
                return e === null && Me && ((i = l = Ze) && (l = my(l, t.type, t.pendingProps, Wt), l !== null ? (t.stateNode = l, pt = t, Ze = Zt(l.firstChild), Wt = !1, i = !0) : i = !1), i || gl(t)), Te(t), i = t.type, o = t.pendingProps, m = e !== null ? e.memoizedProps : null, l = o.children, js(i, o) ? l = null : m !== null && js(i, m) && (t.flags |= 32), t.memoizedState !== null && (i = Cc(e, t, O0, null, null, n), Ti._currentValue = i), jo(e, t), ct(e, t, l, n), t.child;
            case 6:
                return e === null && Me && ((e = n = Ze) && (n = hy(n, t.pendingProps, Wt), n !== null ? (t.stateNode = n, pt = t, Ze = null, e = !0) : e = !1), e || gl(t)), null;
            case 13:
                return fm(e, t, n);
            case 4:
                return re(t, t.stateNode.containerInfo), l = t.pendingProps, e === null ? t.child = aa(t, null, l, n) : ct(e, t, l, n), t.child;
            case 11:
                return lm(e, t, t.type, t.pendingProps, n);
            case 7:
                return ct(e, t, t.pendingProps, n), t.child;
            case 8:
                return ct(e, t, t.pendingProps.children, n), t.child;
            case 12:
                return ct(e, t, t.pendingProps.children, n), t.child;
            case 10:
                return l = t.pendingProps, Mn(t, t.type, l.value), ct(e, t, l.children, n), t.child;
            case 9:
                return i = t.type._context, l = t.pendingProps.children, yl(t), i = mt(i), l = l(i), t.flags |= 1, ct(e, t, l, n), t.child;
            case 14:
                return am(e, t, t.type, t.pendingProps, n);
            case 15:
                return im(e, t, t.type, t.pendingProps, n);
            case 19:
                return mm(e, t, n);
            case 31:
                return l = t.pendingProps, n = t.mode, l = {
                    mode: l.mode,
                    children: l.children
                }, e === null ? (n = Mo(l, n), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = sn(e.child, l), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
            case 22:
                return om(e, t, n);
            case 24:
                return yl(t), l = mt(et), e === null ? (i = yc(), i === null && (i = Ge, o = gc(), i.pooledCache = o, o.refCount++, o !== null && (i.pooledCacheLanes |= n), i = o), t.memoizedState = {
                    parent: l,
                    cache: i
                }, xc(t), Mn(t, et, i)) : ((e.lanes & n) !== 0 && (Sc(e, t), ai(t, null, null, n), li()), i = e.memoizedState, o = t.memoizedState, i.parent !== l ? (i = {
                    parent: l,
                    cache: l
                }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Mn(t, et, l)) : (l = o.cache, Mn(t, et, l), l !== i.cache && vc(t, [et], n, !0))), ct(e, t, t.pendingProps.children, n), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(c(156, t.tag))
    }

    function pn(e) {
        e.flags |= 4
    }

    function vm(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
        else if (e.flags |= 16777216, !wh(t)) {
            if (t = Vt.current, t !== null && ((Ce & 4194048) === Ce ? Ft !== null : (Ce & 62914560) !== Ce && (Ce & 536870912) === 0 || t !== Ft)) throw ti = bc, Ff;
            e.flags |= 8192
        }
    }

    function Ro(e, t) {
        t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zu() : 536870912, e.lanes |= t, ca |= t)
    }

    function fi(e, t) {
        if (!Me) switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var l = null; n !== null;) n.alternate !== null && (l = n), n = n.sibling;
                l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
    }

    function Qe(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
            n = 0,
            l = 0;
        if (t)
            for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, l |= i.subtreeFlags & 65011712, l |= i.flags & 65011712, i.return = e, i = i.sibling;
        else
            for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, l |= i.subtreeFlags, l |= i.flags, i.return = e, i = i.sibling;
        return e.subtreeFlags |= l, e.childLanes = n, t
    }

    function q0(e, t, n) {
        var l = t.pendingProps;
        switch (fc(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Qe(t), null;
            case 1:
                return Qe(t), null;
            case 3:
                return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), mn(et), Re(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Ja(t) ? pn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Kf())), Qe(t), null;
            case 26:
                return n = t.memoizedState, e === null ? (pn(t), n !== null ? (Qe(t), vm(t, n)) : (Qe(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (pn(t), Qe(t), vm(t, n)) : (Qe(t), t.flags &= -16777217) : (e.memoizedProps !== l && pn(t), Qe(t), t.flags &= -16777217), null;
            case 27:
                Ee(t), n = ie.current;
                var i = t.type;
                if (e !== null && t.stateNode != null) e.memoizedProps !== l && pn(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(c(166));
                        return Qe(t), null
                    }
                    e = I.current, Ja(t) ? Qf(t) : (e = vh(i, l, n), t.stateNode = e, pn(t))
                }
                return Qe(t), null;
            case 5:
                if (Ee(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== l && pn(t);
                else {
                    if (!l) {
                        if (t.stateNode === null) throw Error(c(166));
                        return Qe(t), null
                    }
                    if (e = I.current, Ja(t)) Qf(t);
                    else {
                        switch (i = Yo(ie.current), e) {
                            case 1:
                                e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                break;
                            case 2:
                                e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                break;
                            default:
                                switch (n) {
                                    case "svg":
                                        e = i.createElementNS("http://www.w3.org/2000/svg", n);
                                        break;
                                    case "math":
                                        e = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                                        break;
                                    case "script":
                                        e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                                        break;
                                    case "select":
                                        e = typeof l.is == "string" ? i.createElement("select", {
                                            is: l.is
                                        }) : i.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                                        break;
                                    default:
                                        e = typeof l.is == "string" ? i.createElement(n, {
                                            is: l.is
                                        }) : i.createElement(n)
                                }
                        }
                        e[dt] = t, e[bt] = l;
                        e: for (i = t.child; i !== null;) {
                            if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
                            else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                                i.child.return = i, i = i.child;
                                continue
                            }
                            if (i === t) break e;
                            for (; i.sibling === null;) {
                                if (i.return === null || i.return === t) break e;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
                        t.stateNode = e;
                        e: switch (ut(e, n, l), n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                e = !!l.autoFocus;
                                break e;
                            case "img":
                                e = !0;
                                break e;
                            default:
                                e = !1
                        }
                        e && pn(t)
                    }
                }
                return Qe(t), t.flags &= -16777217, null;
            case 6:
                if (e && t.stateNode != null) e.memoizedProps !== l && pn(t);
                else {
                    if (typeof l != "string" && t.stateNode === null) throw Error(c(166));
                    if (e = ie.current, Ja(t)) {
                        if (e = t.stateNode, n = t.memoizedProps, l = null, i = pt, i !== null) switch (i.tag) {
                            case 27:
                            case 5:
                                l = i.memoizedProps
                        }
                        e[dt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || ch(e.nodeValue, n)), e || gl(t)
                    } else e = Yo(e).createTextNode(l), e[dt] = t, t.stateNode = e
                }
                return Qe(t), null;
            case 13:
                if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (i = Ja(t), l !== null && l.dehydrated !== null) {
                        if (e === null) {
                            if (!i) throw Error(c(318));
                            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
                            i[dt] = t
                        } else Pa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        Qe(t), i = !1
                    } else i = Kf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
                    if (!i) return t.flags & 256 ? (vn(t), t) : (vn(t), null)
                }
                if (vn(t), (t.flags & 128) !== 0) return t.lanes = n, t;
                if (n = l !== null, e = e !== null && e.memoizedState !== null, n) {
                    l = t.child, i = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (i = l.alternate.memoizedState.cachePool.pool);
                    var o = null;
                    l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== i && (l.flags |= 2048)
                }
                return n !== e && n && (t.child.flags |= 8192), Ro(t, t.updateQueue), Qe(t), null;
            case 4:
                return Re(), e === null && ws(t.stateNode.containerInfo), Qe(t), null;
            case 10:
                return mn(t.type), Qe(t), null;
            case 19:
                if (W(tt), i = t.memoizedState, i === null) return Qe(t), null;
                if (l = (t.flags & 128) !== 0, o = i.rendering, o === null)
                    if (l) fi(i, !1);
                    else {
                        if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null;) {
                                if (o = No(e), o !== null) {
                                    for (t.flags |= 128, fi(i, !1), e = o.updateQueue, t.updateQueue = e, Ro(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Yf(n, e), n = n.sibling;
                                    return $(tt, tt.current & 1 | 2), t.child
                                }
                                e = e.sibling
                            }
                        i.tail !== null && ft() > Do && (t.flags |= 128, l = !0, fi(i, !1), t.lanes = 4194304)
                    }
                else {
                    if (!l)
                        if (e = No(o), e !== null) {
                            if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Ro(t, e), fi(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !Me) return Qe(t), null
                        } else 2 * ft() - i.renderingStartTime > Do && n !== 536870912 && (t.flags |= 128, l = !0, fi(i, !1), t.lanes = 4194304);
                    i.isBackwards ? (o.sibling = t.child, t.child = o) : (e = i.last, e !== null ? e.sibling = o : t.child = o, i.last = o)
                }
                return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ft(), t.sibling = null, e = tt.current, $(tt, l ? e & 1 | 2 : e & 1), t) : (Qe(t), null);
            case 22:
            case 23:
                return vn(t), Nc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), n = t.updateQueue, n !== null && Ro(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && W(bl), null;
            case 24:
                return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), mn(et), Qe(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(c(156, t.tag))
    }

    function V0(e, t) {
        switch (fc(t), t.tag) {
            case 1:
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 3:
                return mn(et), Re(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Ee(t), null;
            case 13:
                if (vn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                    if (t.alternate === null) throw Error(c(340));
                    Pa()
                }
                return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 19:
                return W(tt), null;
            case 4:
                return Re(), null;
            case 10:
                return mn(t.type), null;
            case 22:
            case 23:
                return vn(t), Nc(), e !== null && W(bl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
            case 24:
                return mn(et), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function gm(e, t) {
        switch (fc(t), t.tag) {
            case 3:
                mn(et), Re();
                break;
            case 26:
            case 27:
            case 5:
                Ee(t);
                break;
            case 4:
                Re();
                break;
            case 13:
                vn(t);
                break;
            case 19:
                W(tt);
                break;
            case 10:
                mn(t.type);
                break;
            case 22:
            case 23:
                vn(t), Nc(), e !== null && W(bl);
                break;
            case 24:
                mn(et)
        }
    }

    function di(e, t) {
        try {
            var n = t.updateQueue,
                l = n !== null ? n.lastEffect : null;
            if (l !== null) {
                var i = l.next;
                n = i;
                do {
                    if ((n.tag & e) === e) {
                        l = void 0;
                        var o = n.create,
                            m = n.inst;
                        l = o(), m.destroy = l
                    }
                    n = n.next
                } while (n !== i)
            }
        } catch (p) {
            qe(t, t.return, p)
        }
    }

    function Hn(e, t, n) {
        try {
            var l = t.updateQueue,
                i = l !== null ? l.lastEffect : null;
            if (i !== null) {
                var o = i.next;
                l = o;
                do {
                    if ((l.tag & e) === e) {
                        var m = l.inst,
                            p = m.destroy;
                        if (p !== void 0) {
                            m.destroy = void 0, i = t;
                            var S = n,
                                _ = p;
                            try {
                                _()
                            } catch (G) {
                                qe(i, S, G)
                            }
                        }
                    }
                    l = l.next
                } while (l !== o)
            }
        } catch (G) {
            qe(t, t.return, G)
        }
    }

    function pm(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                ad(t, n)
            } catch (l) {
                qe(e, e.return, l)
            }
        }
    }

    function ym(e, t, n) {
        n.props = Sl(e.type, e.memoizedProps), n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (l) {
            qe(e, t, l)
        }
    }

    function mi(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = e.stateNode;
                        break;
                    case 30:
                        l = e.stateNode;
                        break;
                    default:
                        l = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(l) : n.current = l
            }
        } catch (i) {
            qe(e, t, i)
        }
    }

    function It(e, t) {
        var n = e.ref,
            l = e.refCleanup;
        if (n !== null)
            if (typeof l == "function") try {
                l()
            } catch (i) {
                qe(e, t, i)
            } finally {
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null)
            } else if (typeof n == "function") try {
                n(null)
            } catch (i) {
                qe(e, t, i)
            } else n.current = null
    }

    function bm(e) {
        var t = e.type,
            n = e.memoizedProps,
            l = e.stateNode;
        try {
            e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    n.autoFocus && l.focus();
                    break e;
                case "img":
                    n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet)
            }
        }
        catch (i) {
            qe(e, e.return, i)
        }
    }

    function Ic(e, t, n) {
        try {
            var l = e.stateNode;
            cy(l, e.type, n, t), l[bt] = t
        } catch (i) {
            qe(e, e.return, i)
        }
    }

    function xm(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Xn(e.type) || e.tag === 4
    }

    function es(e) {
        e: for (;;) {
            for (; e.sibling === null;) {
                if (e.return === null || xm(e.return)) return null;
                e = e.return
            }
            for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
                if (e.tag === 27 && Xn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child
            }
            if (!(e.flags & 2)) return e.stateNode
        }
    }

    function ts(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Go));
        else if (l !== 4 && (l === 27 && Xn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
            for (ts(e, t, n), e = e.sibling; e !== null;) ts(e, t, n), e = e.sibling
    }

    function Oo(e, t, n) {
        var l = e.tag;
        if (l === 5 || l === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (l !== 4 && (l === 27 && Xn(e.type) && (n = e.stateNode), e = e.child, e !== null))
            for (Oo(e, t, n), e = e.sibling; e !== null;) Oo(e, t, n), e = e.sibling
    }

    function Sm(e) {
        var t = e.stateNode,
            n = e.memoizedProps;
        try {
            for (var l = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
            ut(t, l, n), t[dt] = e, t[bt] = n
        } catch (o) {
            qe(e, e.return, o)
        }
    }
    var yn = !1,
        We = !1,
        ns = !1,
        Em = typeof WeakSet == "function" ? WeakSet : Set,
        it = null;

    function G0(e, t) {
        if (e = e.containerInfo, Ts = Po, e = Df(e), ec(e)) {
            if ("selectionStart" in e) var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var l = n.getSelection && n.getSelection();
                if (l && l.rangeCount !== 0) {
                    n = l.anchorNode;
                    var i = l.anchorOffset,
                        o = l.focusNode;
                    l = l.focusOffset;
                    try {
                        n.nodeType, o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var m = 0,
                        p = -1,
                        S = -1,
                        _ = 0,
                        G = 0,
                        K = e,
                        D = null;
                    t: for (;;) {
                        for (var H; K !== n || i !== 0 && K.nodeType !== 3 || (p = m + i), K !== o || l !== 0 && K.nodeType !== 3 || (S = m + l), K.nodeType === 3 && (m += K.nodeValue.length), (H = K.firstChild) !== null;) D = K, K = H;
                        for (;;) {
                            if (K === e) break t;
                            if (D === n && ++_ === i && (p = m), D === o && ++G === l && (S = m), (H = K.nextSibling) !== null) break;
                            K = D, D = K.parentNode
                        }
                        K = H
                    }
                    n = p === -1 || S === -1 ? null : {
                        start: p,
                        end: S
                    }
                } else n = null
            }
            n = n || {
                start: 0,
                end: 0
            }
        } else n = null;
        for (Cs = {
                focusedElem: e,
                selectionRange: n
            }, Po = !1, it = t; it !== null;)
            if (t = it, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null) e.return = t, it = e;
            else
                for (; it !== null;) {
                    switch (t = it, o = t.alternate, e = t.flags, t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && o !== null) {
                                e = void 0, n = t, i = o.memoizedProps, o = o.memoizedState, l = n.stateNode;
                                try {
                                    var fe = Sl(n.type, i, n.elementType === n.type);
                                    e = l.getSnapshotBeforeUpdate(fe, o), l.__reactInternalSnapshotBeforeUpdate = e
                                } catch (se) {
                                    qe(n, n.return, se)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) Rs(e);
                                else if (n === 1) switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        Rs(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0) throw Error(c(163))
                    }
                    if (e = t.sibling, e !== null) {
                        e.return = t.return, it = e;
                        break
                    }
                    it = t.return
                }
    }

    function wm(e, t, n) {
        var l = n.flags;
        switch (n.tag) {
            case 0:
            case 11:
            case 15:
                kn(e, n), l & 4 && di(5, n);
                break;
            case 1:
                if (kn(e, n), l & 4)
                    if (e = n.stateNode, t === null) try {
                        e.componentDidMount()
                    } catch (m) {
                        qe(n, n.return, m)
                    } else {
                        var i = Sl(n.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (m) {
                            qe(n, n.return, m)
                        }
                    }
                l & 64 && pm(n), l & 512 && mi(n, n.return);
                break;
            case 3:
                if (kn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
                    if (t = null, n.child !== null) switch (n.child.tag) {
                        case 27:
                        case 5:
                            t = n.child.stateNode;
                            break;
                        case 1:
                            t = n.child.stateNode
                    }
                    try {
                        ad(e, t)
                    } catch (m) {
                        qe(n, n.return, m)
                    }
                }
                break;
            case 27:
                t === null && l & 4 && Sm(n);
            case 26:
            case 5:
                kn(e, n), t === null && l & 4 && bm(n), l & 512 && mi(n, n.return);
                break;
            case 12:
                kn(e, n);
                break;
            case 13:
                kn(e, n), l & 4 && Tm(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = W0.bind(null, n), vy(e, n))));
                break;
            case 22:
                if (l = n.memoizedState !== null || yn, !l) {
                    t = t !== null && t.memoizedState !== null || We, i = yn;
                    var o = We;
                    yn = l, (We = t) && !o ? Bn(e, n, (n.subtreeFlags & 8772) !== 0) : kn(e, n), yn = i, We = o
                }
                break;
            case 30:
                break;
            default:
                kn(e, n)
        }
    }

    function Am(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null, Am(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ur(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
    }
    var Ye = null,
        Et = !1;

    function bn(e, t, n) {
        for (n = n.child; n !== null;) Nm(e, t, n), n = n.sibling
    }

    function Nm(e, t, n) {
        if (At && typeof At.onCommitFiberUnmount == "function") try {
            At.onCommitFiberUnmount(za, n)
        } catch {}
        switch (n.tag) {
            case 26:
                We || It(n, t), bn(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
                break;
            case 27:
                We || It(n, t);
                var l = Ye,
                    i = Et;
                Xn(n.type) && (Ye = n.stateNode, Et = !1), bn(e, t, n), Ei(n.stateNode), Ye = l, Et = i;
                break;
            case 5:
                We || It(n, t);
            case 6:
                if (l = Ye, i = Et, Ye = null, bn(e, t, n), Ye = l, Et = i, Ye !== null)
                    if (Et) try {
                        (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(n.stateNode)
                    } catch (o) {
                        qe(n, t, o)
                    } else try {
                        Ye.removeChild(n.stateNode)
                    } catch (o) {
                        qe(n, t, o)
                    }
                break;
            case 18:
                Ye !== null && (Et ? (e = Ye, mh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Ri(e)) : mh(Ye, n.stateNode));
                break;
            case 4:
                l = Ye, i = Et, Ye = n.stateNode.containerInfo, Et = !0, bn(e, t, n), Ye = l, Et = i;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                We || Hn(2, n, t), We || Hn(4, n, t), bn(e, t, n);
                break;
            case 1:
                We || (It(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && ym(n, t, l)), bn(e, t, n);
                break;
            case 21:
                bn(e, t, n);
                break;
            case 22:
                We = (l = We) || n.memoizedState !== null, bn(e, t, n), We = l;
                break;
            default:
                bn(e, t, n)
        }
    }

    function Tm(e, t) {
        if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
            Ri(e)
        } catch (n) {
            qe(t, t.return, n)
        }
    }

    function Y0(e) {
        switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Em), t;
            case 22:
                return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Em), t;
            default:
                throw Error(c(435, e.tag))
        }
    }

    function ls(e, t) {
        var n = Y0(e);
        t.forEach(function(l) {
            var i = F0.bind(null, e, l);
            n.has(l) || (n.add(l), l.then(i, i))
        })
    }

    function jt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var l = 0; l < n.length; l++) {
                var i = n[l],
                    o = e,
                    m = t,
                    p = m;
                e: for (; p !== null;) {
                    switch (p.tag) {
                        case 27:
                            if (Xn(p.type)) {
                                Ye = p.stateNode, Et = !1;
                                break e
                            }
                            break;
                        case 5:
                            Ye = p.stateNode, Et = !1;
                            break e;
                        case 3:
                        case 4:
                            Ye = p.stateNode.containerInfo, Et = !0;
                            break e
                    }
                    p = p.return
                }
                if (Ye === null) throw Error(c(160));
                Nm(o, m, i), Ye = null, Et = !1, o = i.alternate, o !== null && (o.return = null), i.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null;) Cm(t, e), t = t.sibling
    }
    var Qt = null;

    function Cm(e, t) {
        var n = e.alternate,
            l = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                jt(t, e), Mt(e), l & 4 && (Hn(3, e, e.return), di(3, e), Hn(5, e, e.return));
                break;
            case 1:
                jt(t, e), Mt(e), l & 512 && (We || n === null || It(n, n.return)), l & 64 && yn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
                break;
            case 26:
                var i = Qt;
                if (jt(t, e), Mt(e), l & 512 && (We || n === null || It(n, n.return)), l & 4) {
                    var o = n !== null ? n.memoizedState : null;
                    if (l = e.memoizedState, n === null)
                        if (l === null)
                            if (e.stateNode === null) {
                                e: {
                                    l = e.type,
                                    n = e.memoizedProps,
                                    i = i.ownerDocument || i;t: switch (l) {
                                        case "title":
                                            o = i.getElementsByTagName("title")[0], (!o || o[ka] || o[dt] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = i.createElement(l), i.head.insertBefore(o, i.querySelector("head > title"))), ut(o, l, n), o[dt] = e, lt(o), l = o;
                                            break e;
                                        case "link":
                                            var m = Sh("link", "href", i).get(l + (n.href || ""));
                                            if (m) {
                                                for (var p = 0; p < m.length; p++)
                                                    if (o = m[p], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                        m.splice(p, 1);
                                                        break t
                                                    }
                                            }
                                            o = i.createElement(l), ut(o, l, n), i.head.appendChild(o);
                                            break;
                                        case "meta":
                                            if (m = Sh("meta", "content", i).get(l + (n.content || ""))) {
                                                for (p = 0; p < m.length; p++)
                                                    if (o = m[p], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                        m.splice(p, 1);
                                                        break t
                                                    }
                                            }
                                            o = i.createElement(l), ut(o, l, n), i.head.appendChild(o);
                                            break;
                                        default:
                                            throw Error(c(468, l))
                                    }
                                    o[dt] = e,
                                    lt(o),
                                    l = o
                                }
                                e.stateNode = l
                            }
                    else Eh(i, e.type, e.stateNode);
                    else e.stateNode = xh(i, l, e.memoizedProps);
                    else o !== l ? (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, l === null ? Eh(i, e.type, e.stateNode) : xh(i, l, e.memoizedProps)) : l === null && e.stateNode !== null && Ic(e, e.memoizedProps, n.memoizedProps)
                }
                break;
            case 27:
                jt(t, e), Mt(e), l & 512 && (We || n === null || It(n, n.return)), n !== null && l & 4 && Ic(e, e.memoizedProps, n.memoizedProps);
                break;
            case 5:
                if (jt(t, e), Mt(e), l & 512 && (We || n === null || It(n, n.return)), e.flags & 32) {
                    i = e.stateNode;
                    try {
                        ql(i, "")
                    } catch (H) {
                        qe(e, e.return, H)
                    }
                }
                l & 4 && e.stateNode != null && (i = e.memoizedProps, Ic(e, i, n !== null ? n.memoizedProps : i)), l & 1024 && (ns = !0);
                break;
            case 6:
                if (jt(t, e), Mt(e), l & 4) {
                    if (e.stateNode === null) throw Error(c(162));
                    l = e.memoizedProps, n = e.stateNode;
                    try {
                        n.nodeValue = l
                    } catch (H) {
                        qe(e, e.return, H)
                    }
                }
                break;
            case 3:
                if (Zo = null, i = Qt, Qt = Xo(t.containerInfo), jt(t, e), Qt = i, Mt(e), l & 4 && n !== null && n.memoizedState.isDehydrated) try {
                    Ri(t.containerInfo)
                } catch (H) {
                    qe(e, e.return, H)
                }
                ns && (ns = !1, jm(e));
                break;
            case 4:
                l = Qt, Qt = Xo(e.stateNode.containerInfo), jt(t, e), Mt(e), Qt = l;
                break;
            case 12:
                jt(t, e), Mt(e);
                break;
            case 13:
                jt(t, e), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (ss = ft()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ls(e, l)));
                break;
            case 22:
                i = e.memoizedState !== null;
                var S = n !== null && n.memoizedState !== null,
                    _ = yn,
                    G = We;
                if (yn = _ || i, We = G || S, jt(t, e), We = G, yn = _, Mt(e), l & 8192) e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || S || yn || We || El(e)), n = null, t = e;;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            S = n = t;
                            try {
                                if (o = S.stateNode, i) m = o.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                else {
                                    p = S.stateNode;
                                    var K = S.memoizedProps.style,
                                        D = K != null && K.hasOwnProperty("display") ? K.display : null;
                                    p.style.display = D == null || typeof D == "boolean" ? "" : ("" + D).trim()
                                }
                            } catch (H) {
                                qe(S, S.return, H)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            S = t;
                            try {
                                S.stateNode.nodeValue = i ? "" : S.memoizedProps
                            } catch (H) {
                                qe(S, S.return, H)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break e;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === e) break e;
                        n === t && (n = null), t = t.return
                    }
                    n === t && (n = null), t.sibling.return = t.return, t = t.sibling
                }
                l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, ls(e, n))));
                break;
            case 19:
                jt(t, e), Mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, ls(e, l)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                jt(t, e), Mt(e)
        }
    }

    function Mt(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, l = e.return; l !== null;) {
                    if (xm(l)) {
                        n = l;
                        break
                    }
                    l = l.return
                }
                if (n == null) throw Error(c(160));
                switch (n.tag) {
                    case 27:
                        var i = n.stateNode,
                            o = es(e);
                        Oo(e, o, i);
                        break;
                    case 5:
                        var m = n.stateNode;
                        n.flags & 32 && (ql(m, ""), n.flags &= -33);
                        var p = es(e);
                        Oo(e, p, m);
                        break;
                    case 3:
                    case 4:
                        var S = n.stateNode.containerInfo,
                            _ = es(e);
                        ts(e, _, S);
                        break;
                    default:
                        throw Error(c(161))
                }
            } catch (G) {
                qe(e, e.return, G)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }

    function jm(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null;) {
                var t = e;
                jm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling
            }
    }

    function kn(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null;) wm(e, t.alternate, t), t = t.sibling
    }

    function El(e) {
        for (e = e.child; e !== null;) {
            var t = e;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Hn(4, t, t.return), El(t);
                    break;
                case 1:
                    It(t, t.return);
                    var n = t.stateNode;
                    typeof n.componentWillUnmount == "function" && ym(t, t.return, n), El(t);
                    break;
                case 27:
                    Ei(t.stateNode);
                case 26:
                case 5:
                    It(t, t.return), El(t);
                    break;
                case 22:
                    t.memoizedState === null && El(t);
                    break;
                case 30:
                    El(t);
                    break;
                default:
                    El(t)
            }
            e = e.sibling
        }
    }

    function Bn(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var l = t.alternate,
                i = e,
                o = t,
                m = o.flags;
            switch (o.tag) {
                case 0:
                case 11:
                case 15:
                    Bn(i, o, n), di(4, o);
                    break;
                case 1:
                    if (Bn(i, o, n), l = o, i = l.stateNode, typeof i.componentDidMount == "function") try {
                        i.componentDidMount()
                    } catch (_) {
                        qe(l, l.return, _)
                    }
                    if (l = o, i = l.updateQueue, i !== null) {
                        var p = l.stateNode;
                        try {
                            var S = i.shared.hiddenCallbacks;
                            if (S !== null)
                                for (i.shared.hiddenCallbacks = null, i = 0; i < S.length; i++) ld(S[i], p)
                        } catch (_) {
                            qe(l, l.return, _)
                        }
                    }
                    n && m & 64 && pm(o), mi(o, o.return);
                    break;
                case 27:
                    Sm(o);
                case 26:
                case 5:
                    Bn(i, o, n), n && l === null && m & 4 && bm(o), mi(o, o.return);
                    break;
                case 12:
                    Bn(i, o, n);
                    break;
                case 13:
                    Bn(i, o, n), n && m & 4 && Tm(i, o);
                    break;
                case 22:
                    o.memoizedState === null && Bn(i, o, n), mi(o, o.return);
                    break;
                case 30:
                    break;
                default:
                    Bn(i, o, n)
            }
            t = t.sibling
        }
    }

    function as(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fa(n))
    }

    function is(e, t) {
        e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e))
    }

    function en(e, t, n, l) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) Mm(e, t, n, l), t = t.sibling
    }

    function Mm(e, t, n, l) {
        var i = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                en(e, t, n, l), i & 2048 && di(9, t);
                break;
            case 1:
                en(e, t, n, l);
                break;
            case 3:
                en(e, t, n, l), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e)));
                break;
            case 12:
                if (i & 2048) {
                    en(e, t, n, l), e = t.stateNode;
                    try {
                        var o = t.memoizedProps,
                            m = o.id,
                            p = o.onPostCommit;
                        typeof p == "function" && p(m, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (S) {
                        qe(t, t.return, S)
                    }
                } else en(e, t, n, l);
                break;
            case 13:
                en(e, t, n, l);
                break;
            case 23:
                break;
            case 22:
                o = t.stateNode, m = t.alternate, t.memoizedState !== null ? o._visibility & 2 ? en(e, t, n, l) : hi(e, t) : o._visibility & 2 ? en(e, t, n, l) : (o._visibility |= 2, ia(e, t, n, l, (t.subtreeFlags & 10256) !== 0)), i & 2048 && as(m, t);
                break;
            case 24:
                en(e, t, n, l), i & 2048 && is(t.alternate, t);
                break;
            default:
                en(e, t, n, l)
        }
    }

    function ia(e, t, n, l, i) {
        for (i = i && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var o = e,
                m = t,
                p = n,
                S = l,
                _ = m.flags;
            switch (m.tag) {
                case 0:
                case 11:
                case 15:
                    ia(o, m, p, S, i), di(8, m);
                    break;
                case 23:
                    break;
                case 22:
                    var G = m.stateNode;
                    m.memoizedState !== null ? G._visibility & 2 ? ia(o, m, p, S, i) : hi(o, m) : (G._visibility |= 2, ia(o, m, p, S, i)), i && _ & 2048 && as(m.alternate, m);
                    break;
                case 24:
                    ia(o, m, p, S, i), i && _ & 2048 && is(m.alternate, m);
                    break;
                default:
                    ia(o, m, p, S, i)
            }
            t = t.sibling
        }
    }

    function hi(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null;) {
                var n = e,
                    l = t,
                    i = l.flags;
                switch (l.tag) {
                    case 22:
                        hi(n, l), i & 2048 && as(l.alternate, l);
                        break;
                    case 24:
                        hi(n, l), i & 2048 && is(l.alternate, l);
                        break;
                    default:
                        hi(n, l)
                }
                t = t.sibling
            }
    }
    var vi = 8192;

    function oa(e) {
        if (e.subtreeFlags & vi)
            for (e = e.child; e !== null;) Rm(e), e = e.sibling
    }

    function Rm(e) {
        switch (e.tag) {
            case 26:
                oa(e), e.flags & vi && e.memoizedState !== null && jy(Qt, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                oa(e);
                break;
            case 3:
            case 4:
                var t = Qt;
                Qt = Xo(e.stateNode.containerInfo), oa(e), Qt = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = vi, vi = 16777216, oa(e), vi = t) : oa(e));
                break;
            default:
                oa(e)
        }
    }

    function Om(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child, e !== null)) {
            t.child = null;
            do t = e.sibling, e.sibling = null, e = t; while (e !== null)
        }
    }

    function gi(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    it = l, Dm(l, e)
                }
            Om(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null;) _m(e), e = e.sibling
    }

    function _m(e) {
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                gi(e), e.flags & 2048 && Hn(9, e, e.return);
                break;
            case 3:
                gi(e);
                break;
            case 12:
                gi(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, _o(e)) : gi(e);
                break;
            default:
                gi(e)
        }
    }

    function _o(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var l = t[n];
                    it = l, Dm(l, e)
                }
            Om(e)
        }
        for (e = e.child; e !== null;) {
            switch (t = e, t.tag) {
                case 0:
                case 11:
                case 15:
                    Hn(8, t, t.return), _o(t);
                    break;
                case 22:
                    n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, _o(t));
                    break;
                default:
                    _o(t)
            }
            e = e.sibling
        }
    }

    function Dm(e, t) {
        for (; it !== null;) {
            var n = it;
            switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Hn(8, n, t);
                    break;
                case 23:
                case 22:
                    if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                        var l = n.memoizedState.cachePool.pool;
                        l != null && l.refCount++
                    }
                    break;
                case 24:
                    Fa(n.memoizedState.cache)
            }
            if (l = n.child, l !== null) l.return = n, it = l;
            else e: for (n = e; it !== null;) {
                l = it;
                var i = l.sibling,
                    o = l.return;
                if (Am(l), l === n) {
                    it = null;
                    break e
                }
                if (i !== null) {
                    i.return = o, it = i;
                    break e
                }
                it = o
            }
        }
    }
    var X0 = {
            getCacheForType: function(e) {
                var t = mt(et),
                    n = t.data.get(e);
                return n === void 0 && (n = e(), t.data.set(e, n)), n
            }
        },
        Q0 = typeof WeakMap == "function" ? WeakMap : Map,
        _e = 0,
        Ge = null,
        Ae = null,
        Ce = 0,
        De = 0,
        Rt = null,
        Ln = !1,
        ra = !1,
        os = !1,
        xn = 0,
        Ke = 0,
        qn = 0,
        wl = 0,
        rs = 0,
        Gt = 0,
        ca = 0,
        pi = null,
        wt = null,
        cs = !1,
        ss = 0,
        Do = 1 / 0,
        zo = null,
        Vn = null,
        st = 0,
        Gn = null,
        sa = null,
        ua = 0,
        us = 0,
        fs = null,
        zm = null,
        yi = 0,
        ds = null;

    function Ot() {
        if ((_e & 2) !== 0 && Ce !== 0) return Ce & -Ce;
        if (O.T !== null) {
            var e = Wl;
            return e !== 0 ? e : bs()
        }
        return Pu()
    }

    function Um() {
        Gt === 0 && (Gt = (Ce & 536870912) === 0 || Me ? Qu() : 536870912);
        var e = Vt.current;
        return e !== null && (e.flags |= 32), Gt
    }

    function _t(e, t, n) {
        (e === Ge && (De === 2 || De === 9) || e.cancelPendingCommit !== null) && (fa(e, 0), Yn(e, Ce, Gt, !1)), Ha(e, n), ((_e & 2) === 0 || e !== Ge) && (e === Ge && ((_e & 2) === 0 && (wl |= n), Ke === 4 && Yn(e, Ce, Gt, !1)), tn(e))
    }

    function Hm(e, t, n) {
        if ((_e & 6) !== 0) throw Error(c(327));
        var l = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Ua(e, t),
            i = l ? J0(e, t) : vs(e, t, !0),
            o = l;
        do {
            if (i === 0) {
                ra && !l && Yn(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate, o && !Z0(n)) {
                    i = vs(e, t, !1), o = !1;
                    continue
                }
                if (i === 2) {
                    if (o = t, e.errorRecoveryDisabledLanes & o) var m = 0;
                    else m = e.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        t = m;
                        e: {
                            var p = e;i = pi;
                            var S = p.current.memoizedState.isDehydrated;
                            if (S && (fa(p, m).flags |= 256), m = vs(p, m, !1), m !== 2) {
                                if (os && !S) {
                                    p.errorRecoveryDisabledLanes |= o, wl |= o, i = 4;
                                    break e
                                }
                                o = wt, wt = i, o !== null && (wt === null ? wt = o : wt.push.apply(wt, o))
                            }
                            i = m
                        }
                        if (o = !1, i !== 2) continue
                    }
                }
                if (i === 1) {
                    fa(e, 0), Yn(e, t, 0, !0);
                    break
                }
                e: {
                    switch (l = e, o = i, o) {
                        case 0:
                        case 1:
                            throw Error(c(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            Yn(l, t, Gt, !Ln);
                            break e;
                        case 2:
                            wt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(c(329))
                    }
                    if ((t & 62914560) === t && (i = ss + 300 - ft(), 10 < i)) {
                        if (Yn(l, t, Gt, !Ln), Xi(l, 0, !0) !== 0) break e;
                        l.timeoutHandle = fh(km.bind(null, l, n, wt, zo, cs, t, Gt, wl, ca, Ln, o, 2, -0, 0), i);
                        break e
                    }
                    km(l, n, wt, zo, cs, t, Gt, wl, ca, Ln, o, 0, -0, 0)
                }
            }
            break
        } while (!0);
        tn(e)
    }

    function km(e, t, n, l, i, o, m, p, S, _, G, K, D, H) {
        if (e.timeoutHandle = -1, K = t.subtreeFlags, (K & 8192 || (K & 16785408) === 16785408) && (Ni = {
                stylesheets: null,
                count: 0,
                unsuspend: Cy
            }, Rm(t), K = My(), K !== null)) {
            e.cancelPendingCommit = K(Xm.bind(null, e, t, o, n, l, i, m, p, S, G, 1, D, H)), Yn(e, o, m, !_);
            return
        }
        Xm(e, t, o, n, l, i, m, p, S)
    }

    function Z0(e) {
        for (var t = e;;) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
                for (var l = 0; l < n.length; l++) {
                    var i = n[l],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Tt(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
            else {
                if (t === e) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === e) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function Yn(e, t, n, l) {
        t &= ~rs, t &= ~wl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
        for (var i = t; 0 < i;) {
            var o = 31 - Nt(i),
                m = 1 << o;
            l[o] = -1, i &= ~m
        }
        n !== 0 && Ku(e, n, t)
    }

    function Uo() {
        return (_e & 6) === 0 ? (bi(0), !1) : !0
    }

    function ms() {
        if (Ae !== null) {
            if (De === 0) var e = Ae.return;
            else e = Ae, dn = pl = null, Rc(e), la = null, si = 0, e = Ae;
            for (; e !== null;) gm(e.alternate, e), e = e.return;
            Ae = null
        }
    }

    function fa(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1, uy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), ms(), Ge = e, Ae = n = sn(e.current, null), Ce = t, De = 0, Rt = null, Ln = !1, ra = Ua(e, t), os = !1, ca = Gt = rs = wl = qn = Ke = 0, wt = pi = null, cs = !1, (t & 8) !== 0 && (t |= t & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements, l &= t; 0 < l;) {
                var i = 31 - Nt(l),
                    o = 1 << i;
                t |= e[i], l &= ~o
            }
        return xn = t, no(), n
    }

    function Bm(e, t) {
        pe = null, O.H = Eo, t === ei || t === fo ? (t = td(), De = 3) : t === Ff ? (t = td(), De = 4) : De = t === nm ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Rt = t, Ae === null && (Ke = 1, Co(e, kt(t, e.current)))
    }

    function Lm() {
        var e = O.H;
        return O.H = Eo, e === null ? Eo : e
    }

    function qm() {
        var e = O.A;
        return O.A = X0, e
    }

    function hs() {
        Ke = 4, Ln || (Ce & 4194048) !== Ce && Vt.current !== null || (ra = !0), (qn & 134217727) === 0 && (wl & 134217727) === 0 || Ge === null || Yn(Ge, Ce, Gt, !1)
    }

    function vs(e, t, n) {
        var l = _e;
        _e |= 2;
        var i = Lm(),
            o = qm();
        (Ge !== e || Ce !== t) && (zo = null, fa(e, t)), t = !1;
        var m = Ke;
        e: do try {
                if (De !== 0 && Ae !== null) {
                    var p = Ae,
                        S = Rt;
                    switch (De) {
                        case 8:
                            ms(), m = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Vt.current === null && (t = !0);
                            var _ = De;
                            if (De = 0, Rt = null, da(e, p, S, _), n && ra) {
                                m = 0;
                                break e
                            }
                            break;
                        default:
                            _ = De, De = 0, Rt = null, da(e, p, S, _)
                    }
                }
                K0(), m = Ke;
                break
            } catch (G) {
                Bm(e, G)
            }
            while (!0);
            return t && e.shellSuspendCounter++, dn = pl = null, _e = l, O.H = i, O.A = o, Ae === null && (Ge = null, Ce = 0, no()), m
    }

    function K0() {
        for (; Ae !== null;) Vm(Ae)
    }

    function J0(e, t) {
        var n = _e;
        _e |= 2;
        var l = Lm(),
            i = qm();
        Ge !== e || Ce !== t ? (zo = null, Do = ft() + 500, fa(e, t)) : ra = Ua(e, t);
        e: do try {
                if (De !== 0 && Ae !== null) {
                    t = Ae;
                    var o = Rt;
                    t: switch (De) {
                        case 1:
                            De = 0, Rt = null, da(e, t, o, 1);
                            break;
                        case 2:
                        case 9:
                            if (If(o)) {
                                De = 0, Rt = null, Gm(t);
                                break
                            }
                            t = function() {
                                De !== 2 && De !== 9 || Ge !== e || (De = 7), tn(e)
                            }, o.then(t, t);
                            break e;
                        case 3:
                            De = 7;
                            break e;
                        case 4:
                            De = 5;
                            break e;
                        case 7:
                            If(o) ? (De = 0, Rt = null, Gm(t)) : (De = 0, Rt = null, da(e, t, o, 7));
                            break;
                        case 5:
                            var m = null;
                            switch (Ae.tag) {
                                case 26:
                                    m = Ae.memoizedState;
                                case 5:
                                case 27:
                                    var p = Ae;
                                    if (!m || wh(m)) {
                                        De = 0, Rt = null;
                                        var S = p.sibling;
                                        if (S !== null) Ae = S;
                                        else {
                                            var _ = p.return;
                                            _ !== null ? (Ae = _, Ho(_)) : Ae = null
                                        }
                                        break t
                                    }
                            }
                            De = 0, Rt = null, da(e, t, o, 5);
                            break;
                        case 6:
                            De = 0, Rt = null, da(e, t, o, 6);
                            break;
                        case 8:
                            ms(), Ke = 6;
                            break e;
                        default:
                            throw Error(c(462))
                    }
                }
                P0();
                break
            } catch (G) {
                Bm(e, G)
            }
            while (!0);
            return dn = pl = null, O.H = l, O.A = i, _e = n, Ae !== null ? 0 : (Ge = null, Ce = 0, no(), Ke)
    }

    function P0() {
        for (; Ae !== null && !al();) Vm(Ae)
    }

    function Vm(e) {
        var t = hm(e.alternate, e, xn);
        e.memoizedProps = e.pendingProps, t === null ? Ho(e) : Ae = t
    }

    function Gm(e) {
        var t = e,
            n = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = cm(n, t, t.pendingProps, t.type, void 0, Ce);
                break;
            case 11:
                t = cm(n, t, t.pendingProps, t.type.render, t.ref, Ce);
                break;
            case 5:
                Rc(t);
            default:
                gm(n, t), t = Ae = Yf(t, xn), t = hm(n, t, xn)
        }
        e.memoizedProps = e.pendingProps, t === null ? Ho(e) : Ae = t
    }

    function da(e, t, n, l) {
        dn = pl = null, Rc(t), la = null, si = 0;
        var i = t.return;
        try {
            if (B0(e, i, t, n, Ce)) {
                Ke = 1, Co(e, kt(n, e.current)), Ae = null;
                return
            }
        } catch (o) {
            if (i !== null) throw Ae = i, o;
            Ke = 1, Co(e, kt(n, e.current)), Ae = null;
            return
        }
        t.flags & 32768 ? (Me || l === 1 ? e = !0 : ra || (Ce & 536870912) !== 0 ? e = !1 : (Ln = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Vt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Ym(t, e)) : Ho(t)
    }

    function Ho(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Ym(t, Ln);
                return
            }
            e = t.return;
            var n = q0(t.alternate, t, xn);
            if (n !== null) {
                Ae = n;
                return
            }
            if (t = t.sibling, t !== null) {
                Ae = t;
                return
            }
            Ae = t = e
        } while (t !== null);
        Ke === 0 && (Ke = 5)
    }

    function Ym(e, t) {
        do {
            var n = V0(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767, Ae = n;
                return
            }
            if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
                Ae = e;
                return
            }
            Ae = e = n
        } while (e !== null);
        Ke = 6, Ae = null
    }

    function Xm(e, t, n, l, i, o, m, p, S) {
        e.cancelPendingCommit = null;
        do ko(); while (st !== 0);
        if ((_e & 6) !== 0) throw Error(c(327));
        if (t !== null) {
            if (t === e.current) throw Error(c(177));
            if (o = t.lanes | t.childLanes, o |= ic, Cp(e, n, o, m, p, S), e === Ge && (Ae = Ge = null, Ce = 0), sa = t, Gn = e, ua = n, us = o, fs = i, zm = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, I0(Vi, function() {
                    return Pm(), null
                })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
                l = O.T, O.T = null, i = J.p, J.p = 2, m = _e, _e |= 4;
                try {
                    G0(e, t, n)
                } finally {
                    _e = m, J.p = i, O.T = l
                }
            }
            st = 1, Qm(), Zm(), Km()
        }
    }

    function Qm() {
        if (st === 1) {
            st = 0;
            var e = Gn,
                t = sa,
                n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = O.T, O.T = null;
                var l = J.p;
                J.p = 2;
                var i = _e;
                _e |= 4;
                try {
                    Cm(t, e);
                    var o = Cs,
                        m = Df(e.containerInfo),
                        p = o.focusedElem,
                        S = o.selectionRange;
                    if (m !== p && p && p.ownerDocument && _f(p.ownerDocument.documentElement, p)) {
                        if (S !== null && ec(p)) {
                            var _ = S.start,
                                G = S.end;
                            if (G === void 0 && (G = _), "selectionStart" in p) p.selectionStart = _, p.selectionEnd = Math.min(G, p.value.length);
                            else {
                                var K = p.ownerDocument || document,
                                    D = K && K.defaultView || window;
                                if (D.getSelection) {
                                    var H = D.getSelection(),
                                        fe = p.textContent.length,
                                        se = Math.min(S.start, fe),
                                        Be = S.end === void 0 ? se : Math.min(S.end, fe);
                                    !H.extend && se > Be && (m = Be, Be = se, se = m);
                                    var C = Of(p, se),
                                        N = Of(p, Be);
                                    if (C && N && (H.rangeCount !== 1 || H.anchorNode !== C.node || H.anchorOffset !== C.offset || H.focusNode !== N.node || H.focusOffset !== N.offset)) {
                                        var R = K.createRange();
                                        R.setStart(C.node, C.offset), H.removeAllRanges(), se > Be ? (H.addRange(R), H.extend(N.node, N.offset)) : (R.setEnd(N.node, N.offset), H.addRange(R))
                                    }
                                }
                            }
                        }
                        for (K = [], H = p; H = H.parentNode;) H.nodeType === 1 && K.push({
                            element: H,
                            left: H.scrollLeft,
                            top: H.scrollTop
                        });
                        for (typeof p.focus == "function" && p.focus(), p = 0; p < K.length; p++) {
                            var Q = K[p];
                            Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top
                        }
                    }
                    Po = !!Ts, Cs = Ts = null
                } finally {
                    _e = i, J.p = l, O.T = n
                }
            }
            e.current = t, st = 2
        }
    }

    function Zm() {
        if (st === 2) {
            st = 0;
            var e = Gn,
                t = sa,
                n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = O.T, O.T = null;
                var l = J.p;
                J.p = 2;
                var i = _e;
                _e |= 4;
                try {
                    wm(e, t.alternate, t)
                } finally {
                    _e = i, J.p = l, O.T = n
                }
            }
            st = 3
        }
    }

    function Km() {
        if (st === 4 || st === 3) {
            st = 0, il();
            var e = Gn,
                t = sa,
                n = ua,
                l = zm;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? st = 5 : (st = 0, sa = Gn = null, Jm(e, e.pendingLanes));
            var i = e.pendingLanes;
            if (i === 0 && (Vn = null), Dr(n), t = t.stateNode, At && typeof At.onCommitFiberRoot == "function") try {
                At.onCommitFiberRoot(za, t, void 0, (t.current.flags & 128) === 128)
            } catch {}
            if (l !== null) {
                t = O.T, i = J.p, J.p = 2, O.T = null;
                try {
                    for (var o = e.onRecoverableError, m = 0; m < l.length; m++) {
                        var p = l[m];
                        o(p.value, {
                            componentStack: p.stack
                        })
                    }
                } finally {
                    O.T = t, J.p = i
                }
            }(ua & 3) !== 0 && ko(), tn(e), i = e.pendingLanes, (n & 4194090) !== 0 && (i & 42) !== 0 ? e === ds ? yi++ : (yi = 0, ds = e) : yi = 0, bi(0)
        }
    }

    function Jm(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fa(t)))
    }

    function ko(e) {
        return Qm(), Zm(), Km(), Pm()
    }

    function Pm() {
        if (st !== 5) return !1;
        var e = Gn,
            t = us;
        us = 0;
        var n = Dr(ua),
            l = O.T,
            i = J.p;
        try {
            J.p = 32 > n ? 32 : n, O.T = null, n = fs, fs = null;
            var o = Gn,
                m = ua;
            if (st = 0, sa = Gn = null, ua = 0, (_e & 6) !== 0) throw Error(c(331));
            var p = _e;
            if (_e |= 4, _m(o.current), Mm(o, o.current, m, n), _e = p, bi(0, !1), At && typeof At.onPostCommitFiberRoot == "function") try {
                At.onPostCommitFiberRoot(za, o)
            } catch {}
            return !0
        } finally {
            J.p = i, O.T = l, Jm(e, t)
        }
    }

    function $m(e, t, n) {
        t = kt(n, t), t = Xc(e.stateNode, t, 2), e = _n(e, t, 2), e !== null && (Ha(e, 2), tn(e))
    }

    function qe(e, t, n) {
        if (e.tag === 3) $m(e, e, n);
        else
            for (; t !== null;) {
                if (t.tag === 3) {
                    $m(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var l = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Vn === null || !Vn.has(l))) {
                        e = kt(n, e), n = em(2), l = _n(t, n, 2), l !== null && (tm(n, l, t, e), Ha(l, 2), tn(l));
                        break
                    }
                }
                t = t.return
            }
    }

    function gs(e, t, n) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new Q0;
            var i = new Set;
            l.set(t, i)
        } else i = l.get(t), i === void 0 && (i = new Set, l.set(t, i));
        i.has(n) || (os = !0, i.add(n), e = $0.bind(null, e, t, n), t.then(e, e))
    }

    function $0(e, t, n) {
        var l = e.pingCache;
        l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ge === e && (Ce & n) === n && (Ke === 4 || Ke === 3 && (Ce & 62914560) === Ce && 300 > ft() - ss ? (_e & 2) === 0 && fa(e, 0) : rs |= n, ca === Ce && (ca = 0)), tn(e)
    }

    function Wm(e, t) {
        t === 0 && (t = Zu()), e = Kl(e, t), e !== null && (Ha(e, t), tn(e))
    }

    function W0(e) {
        var t = e.memoizedState,
            n = 0;
        t !== null && (n = t.retryLane), Wm(e, n)
    }

    function F0(e, t) {
        var n = 0;
        switch (e.tag) {
            case 13:
                var l = e.stateNode,
                    i = e.memoizedState;
                i !== null && (n = i.retryLane);
                break;
            case 19:
                l = e.stateNode;
                break;
            case 22:
                l = e.stateNode._retryCache;
                break;
            default:
                throw Error(c(314))
        }
        l !== null && l.delete(t), Wm(e, n)
    }

    function I0(e, t) {
        return rt(e, t)
    }
    var Bo = null,
        ma = null,
        ps = !1,
        Lo = !1,
        ys = !1,
        Al = 0;

    function tn(e) {
        e !== ma && e.next === null && (ma === null ? Bo = ma = e : ma = ma.next = e), Lo = !0, ps || (ps = !0, ty())
    }

    function bi(e, t) {
        if (!ys && Lo) {
            ys = !0;
            do
                for (var n = !1, l = Bo; l !== null;) {
                    if (e !== 0) {
                        var i = l.pendingLanes;
                        if (i === 0) var o = 0;
                        else {
                            var m = l.suspendedLanes,
                                p = l.pingedLanes;
                            o = (1 << 31 - Nt(42 | e) + 1) - 1, o &= i & ~(m & ~p), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0
                        }
                        o !== 0 && (n = !0, th(l, o))
                    } else o = Ce, o = Xi(l, l === Ge ? o : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), (o & 3) === 0 || Ua(l, o) || (n = !0, th(l, o));
                    l = l.next
                }
            while (n);
            ys = !1
        }
    }

    function ey() {
        Fm()
    }

    function Fm() {
        Lo = ps = !1;
        var e = 0;
        Al !== 0 && (sy() && (e = Al), Al = 0);
        for (var t = ft(), n = null, l = Bo; l !== null;) {
            var i = l.next,
                o = Im(l, t);
            o === 0 ? (l.next = null, n === null ? Bo = i : n.next = i, i === null && (ma = n)) : (n = l, (e !== 0 || (o & 3) !== 0) && (Lo = !0)), l = i
        }
        bi(e)
    }

    function Im(e, t) {
        for (var n = e.suspendedLanes, l = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes & -62914561; 0 < o;) {
            var m = 31 - Nt(o),
                p = 1 << m,
                S = i[m];
            S === -1 ? ((p & n) === 0 || (p & l) !== 0) && (i[m] = Tp(p, t)) : S <= t && (e.expiredLanes |= p), o &= ~p
        }
        if (t = Ge, n = Ce, n = Xi(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l = e.callbackNode, n === 0 || e === t && (De === 2 || De === 9) || e.cancelPendingCommit !== null) return l !== null && l !== null && yt(l), e.callbackNode = null, e.callbackPriority = 0;
        if ((n & 3) === 0 || Ua(e, n)) {
            if (t = n & -n, t === e.callbackPriority) return t;
            switch (l !== null && yt(l), Dr(n)) {
                case 2:
                case 8:
                    n = Yu;
                    break;
                case 32:
                    n = Vi;
                    break;
                case 268435456:
                    n = Xu;
                    break;
                default:
                    n = Vi
            }
            return l = eh.bind(null, e), n = rt(n, l), e.callbackPriority = t, e.callbackNode = n, t
        }
        return l !== null && l !== null && yt(l), e.callbackPriority = 2, e.callbackNode = null, 2
    }

    function eh(e, t) {
        if (st !== 0 && st !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
        var n = e.callbackNode;
        if (ko() && e.callbackNode !== n) return null;
        var l = Ce;
        return l = Xi(e, e === Ge ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), l === 0 ? null : (Hm(e, l, t), Im(e, ft()), e.callbackNode != null && e.callbackNode === n ? eh.bind(null, e) : null)
    }

    function th(e, t) {
        if (ko()) return null;
        Hm(e, t, !0)
    }

    function ty() {
        fy(function() {
            (_e & 6) !== 0 ? rt(ol, ey) : Fm()
        })
    }

    function bs() {
        return Al === 0 && (Al = Qu()), Al
    }

    function nh(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pi("" + e)
    }

    function lh(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e
    }

    function ny(e, t, n, l, i) {
        if (t === "submit" && n && n.stateNode === i) {
            var o = nh((i[bt] || null).action),
                m = l.submitter;
            m && (t = (t = m[bt] || null) ? nh(t.formAction) : m.getAttribute("formAction"), t !== null && (o = t, m = null));
            var p = new Ii("action", "action", null, l, i);
            e.push({
                event: p,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (Al !== 0) {
                                var S = m ? lh(i, m) : new FormData(i);
                                Lc(n, {
                                    pending: !0,
                                    data: S,
                                    method: i.method,
                                    action: o
                                }, null, S)
                            }
                        } else typeof o == "function" && (p.preventDefault(), S = m ? lh(i, m) : new FormData(i), Lc(n, {
                            pending: !0,
                            data: S,
                            method: i.method,
                            action: o
                        }, o, S))
                    },
                    currentTarget: i
                }]
            })
        }
    }
    for (var xs = 0; xs < ac.length; xs++) {
        var Ss = ac[xs],
            ly = Ss.toLowerCase(),
            ay = Ss[0].toUpperCase() + Ss.slice(1);
        Xt(ly, "on" + ay)
    }
    Xt(Hf, "onAnimationEnd"), Xt(kf, "onAnimationIteration"), Xt(Bf, "onAnimationStart"), Xt("dblclick", "onDoubleClick"), Xt("focusin", "onFocus"), Xt("focusout", "onBlur"), Xt(S0, "onTransitionRun"), Xt(E0, "onTransitionStart"), Xt(w0, "onTransitionCancel"), Xt(Lf, "onTransitionEnd"), kl("onMouseEnter", ["mouseout", "mouseover"]), kl("onMouseLeave", ["mouseout", "mouseover"]), kl("onPointerEnter", ["pointerout", "pointerover"]), kl("onPointerLeave", ["pointerout", "pointerover"]), cl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), cl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), cl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), cl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), cl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), cl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var xi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        iy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));

    function ah(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var l = e[n],
                i = l.event;
            l = l.listeners;
            e: {
                var o = void 0;
                if (t)
                    for (var m = l.length - 1; 0 <= m; m--) {
                        var p = l[m],
                            S = p.instance,
                            _ = p.currentTarget;
                        if (p = p.listener, S !== o && i.isPropagationStopped()) break e;
                        o = p, i.currentTarget = _;
                        try {
                            o(i)
                        } catch (G) {
                            To(G)
                        }
                        i.currentTarget = null, o = S
                    } else
                        for (m = 0; m < l.length; m++) {
                            if (p = l[m], S = p.instance, _ = p.currentTarget, p = p.listener, S !== o && i.isPropagationStopped()) break e;
                            o = p, i.currentTarget = _;
                            try {
                                o(i)
                            } catch (G) {
                                To(G)
                            }
                            i.currentTarget = null, o = S
                        }
            }
        }
    }

    function Ne(e, t) {
        var n = t[zr];
        n === void 0 && (n = t[zr] = new Set);
        var l = e + "__bubble";
        n.has(l) || (ih(t, e, 2, !1), n.add(l))
    }

    function Es(e, t, n) {
        var l = 0;
        t && (l |= 4), ih(n, e, l, t)
    }
    var qo = "_reactListening" + Math.random().toString(36).slice(2);

    function ws(e) {
        if (!e[qo]) {
            e[qo] = !0, Wu.forEach(function(n) {
                n !== "selectionchange" && (iy.has(n) || Es(n, !1, e), Es(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[qo] || (t[qo] = !0, Es("selectionchange", !1, t))
        }
    }

    function ih(e, t, n, l) {
        switch (Mh(t)) {
            case 2:
                var i = _y;
                break;
            case 8:
                i = Dy;
                break;
            default:
                i = ks
        }
        n = i.bind(null, t, n, e), i = void 0, !Qr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), l ? i !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: i
        }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
            passive: i
        }) : e.addEventListener(t, n, !1)
    }

    function As(e, t, n, l, i) {
        var o = l;
        if ((t & 1) === 0 && (t & 2) === 0 && l !== null) e: for (;;) {
            if (l === null) return;
            var m = l.tag;
            if (m === 3 || m === 4) {
                var p = l.stateNode.containerInfo;
                if (p === i) break;
                if (m === 4)
                    for (m = l.return; m !== null;) {
                        var S = m.tag;
                        if ((S === 3 || S === 4) && m.stateNode.containerInfo === i) return;
                        m = m.return
                    }
                for (; p !== null;) {
                    if (m = zl(p), m === null) return;
                    if (S = m.tag, S === 5 || S === 6 || S === 26 || S === 27) {
                        l = o = m;
                        continue e
                    }
                    p = p.parentNode
                }
            }
            l = l.return
        }
        df(function() {
            var _ = o,
                G = Yr(n),
                K = [];
            e: {
                var D = qf.get(e);
                if (D !== void 0) {
                    var H = Ii,
                        fe = e;
                    switch (e) {
                        case "keypress":
                            if (Wi(n) === 0) break e;
                        case "keydown":
                        case "keyup":
                            H = Ip;
                            break;
                        case "focusin":
                            fe = "focus", H = Pr;
                            break;
                        case "focusout":
                            fe = "blur", H = Pr;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            H = Pr;
                            break;
                        case "click":
                            if (n.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            H = vf;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            H = Vp;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            H = n0;
                            break;
                        case Hf:
                        case kf:
                        case Bf:
                            H = Xp;
                            break;
                        case Lf:
                            H = a0;
                            break;
                        case "scroll":
                        case "scrollend":
                            H = Lp;
                            break;
                        case "wheel":
                            H = o0;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            H = Zp;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            H = pf;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            H = c0
                    }
                    var se = (t & 4) !== 0,
                        Be = !se && (e === "scroll" || e === "scrollend"),
                        C = se ? D !== null ? D + "Capture" : null : D;
                    se = [];
                    for (var N = _, R; N !== null;) {
                        var Q = N;
                        if (R = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || R === null || C === null || (Q = La(N, C), Q != null && se.push(Si(N, Q, R))), Be) break;
                        N = N.return
                    }
                    0 < se.length && (D = new H(D, fe, null, n, G), K.push({
                        event: D,
                        listeners: se
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (D = e === "mouseover" || e === "pointerover", H = e === "mouseout" || e === "pointerout", D && n !== Gr && (fe = n.relatedTarget || n.fromElement) && (zl(fe) || fe[Dl])) break e;
                    if ((H || D) && (D = G.window === G ? G : (D = G.ownerDocument) ? D.defaultView || D.parentWindow : window, H ? (fe = n.relatedTarget || n.toElement, H = _, fe = fe ? zl(fe) : null, fe !== null && (Be = d(fe), se = fe.tag, fe !== Be || se !== 5 && se !== 27 && se !== 6) && (fe = null)) : (H = null, fe = _), H !== fe)) {
                        if (se = vf, Q = "onMouseLeave", C = "onMouseEnter", N = "mouse", (e === "pointerout" || e === "pointerover") && (se = pf, Q = "onPointerLeave", C = "onPointerEnter", N = "pointer"), Be = H == null ? D : Ba(H), R = fe == null ? D : Ba(fe), D = new se(Q, N + "leave", H, n, G), D.target = Be, D.relatedTarget = R, Q = null, zl(G) === _ && (se = new se(C, N + "enter", fe, n, G), se.target = R, se.relatedTarget = Be, Q = se), Be = Q, H && fe) t: {
                            for (se = H, C = fe, N = 0, R = se; R; R = ha(R)) N++;
                            for (R = 0, Q = C; Q; Q = ha(Q)) R++;
                            for (; 0 < N - R;) se = ha(se),
                            N--;
                            for (; 0 < R - N;) C = ha(C),
                            R--;
                            for (; N--;) {
                                if (se === C || C !== null && se === C.alternate) break t;
                                se = ha(se), C = ha(C)
                            }
                            se = null
                        }
                        else se = null;
                        H !== null && oh(K, D, H, se, !1), fe !== null && Be !== null && oh(K, Be, fe, se, !0)
                    }
                }
                e: {
                    if (D = _ ? Ba(_) : window, H = D.nodeName && D.nodeName.toLowerCase(), H === "select" || H === "input" && D.type === "file") var ee = Nf;
                    else if (wf(D))
                        if (Tf) ee = y0;
                        else {
                            ee = g0;
                            var Se = v0
                        }
                    else H = D.nodeName,
                    !H || H.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? _ && Vr(_.elementType) && (ee = Nf) : ee = p0;
                    if (ee && (ee = ee(e, _))) {
                        Af(K, ee, n, G);
                        break e
                    }
                    Se && Se(e, D, _),
                    e === "focusout" && _ && D.type === "number" && _.memoizedProps.value != null && qr(D, "number", D.value)
                }
                switch (Se = _ ? Ba(_) : window, e) {
                    case "focusin":
                        (wf(Se) || Se.contentEditable === "true") && (Xl = Se, tc = _, Ka = null);
                        break;
                    case "focusout":
                        Ka = tc = Xl = null;
                        break;
                    case "mousedown":
                        nc = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        nc = !1, zf(K, n, G);
                        break;
                    case "selectionchange":
                        if (x0) break;
                    case "keydown":
                    case "keyup":
                        zf(K, n, G)
                }
                var ae;
                if (Wr) e: {
                    switch (e) {
                        case "compositionstart":
                            var ue = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ue = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ue = "onCompositionUpdate";
                            break e
                    }
                    ue = void 0
                }
                else Yl ? Sf(e, n) && (ue = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ue = "onCompositionStart");ue && (yf && n.locale !== "ko" && (Yl || ue !== "onCompositionStart" ? ue === "onCompositionEnd" && Yl && (ae = mf()) : (jn = G, Zr = "value" in jn ? jn.value : jn.textContent, Yl = !0)), Se = Vo(_, ue), 0 < Se.length && (ue = new gf(ue, e, null, n, G), K.push({
                    event: ue,
                    listeners: Se
                }), ae ? ue.data = ae : (ae = Ef(n), ae !== null && (ue.data = ae)))),
                (ae = u0 ? f0(e, n) : d0(e, n)) && (ue = Vo(_, "onBeforeInput"), 0 < ue.length && (Se = new gf("onBeforeInput", "beforeinput", null, n, G), K.push({
                    event: Se,
                    listeners: ue
                }), Se.data = ae)),
                ny(K, e, _, n, G)
            }
            ah(K, t)
        })
    }

    function Si(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }

    function Vo(e, t) {
        for (var n = t + "Capture", l = []; e !== null;) {
            var i = e,
                o = i.stateNode;
            if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || o === null || (i = La(e, n), i != null && l.unshift(Si(e, i, o)), i = La(e, t), i != null && l.push(Si(e, i, o))), e.tag === 3) return l;
            e = e.return
        }
        return []
    }

    function ha(e) {
        if (e === null) return null;
        do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }

    function oh(e, t, n, l, i) {
        for (var o = t._reactName, m = []; n !== null && n !== l;) {
            var p = n,
                S = p.alternate,
                _ = p.stateNode;
            if (p = p.tag, S !== null && S === l) break;
            p !== 5 && p !== 26 && p !== 27 || _ === null || (S = _, i ? (_ = La(n, o), _ != null && m.unshift(Si(n, _, S))) : i || (_ = La(n, o), _ != null && m.push(Si(n, _, S)))), n = n.return
        }
        m.length !== 0 && e.push({
            event: t,
            listeners: m
        })
    }
    var oy = /\r\n?/g,
        ry = /\u0000|\uFFFD/g;

    function rh(e) {
        return (typeof e == "string" ? e : "" + e).replace(oy, `
`).replace(ry, "")
    }

    function ch(e, t) {
        return t = rh(t), rh(e) === t
    }

    function Go() {}

    function ke(e, t, n, l, i, o) {
        switch (n) {
            case "children":
                typeof l == "string" ? t === "body" || t === "textarea" && l === "" || ql(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && ql(e, "" + l);
                break;
            case "className":
                Zi(e, "class", l);
                break;
            case "tabIndex":
                Zi(e, "tabindex", l);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Zi(e, n, l);
                break;
            case "style":
                uf(e, l, o);
                break;
            case "data":
                if (t !== "object") {
                    Zi(e, "data", l);
                    break
                }
            case "src":
            case "href":
                if (l === "" && (t !== "a" || n !== "href")) {
                    e.removeAttribute(n);
                    break
                }
                if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                l = Pi("" + l), e.setAttribute(n, l);
                break;
            case "action":
            case "formAction":
                if (typeof l == "function") {
                    e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof o == "function" && (n === "formAction" ? (t !== "input" && ke(e, t, "name", i.name, i, null), ke(e, t, "formEncType", i.formEncType, i, null), ke(e, t, "formMethod", i.formMethod, i, null), ke(e, t, "formTarget", i.formTarget, i, null)) : (ke(e, t, "encType", i.encType, i, null), ke(e, t, "method", i.method, i, null), ke(e, t, "target", i.target, i, null)));
                if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                    e.removeAttribute(n);
                    break
                }
                l = Pi("" + l), e.setAttribute(n, l);
                break;
            case "onClick":
                l != null && (e.onclick = Go);
                break;
            case "onScroll":
                l != null && Ne("scroll", e);
                break;
            case "onScrollEnd":
                l != null && Ne("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
                    if (n = l.__html, n != null) {
                        if (i.children != null) throw Error(c(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "multiple":
                e.multiple = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "muted":
                e.muted = l && typeof l != "function" && typeof l != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                n = Pi("" + l), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
                break;
            case "capture":
            case "download":
                l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
                break;
            case "rowSpan":
            case "start":
                l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
                break;
            case "popover":
                Ne("beforetoggle", e), Ne("toggle", e), Qi(e, "popover", l);
                break;
            case "xlinkActuate":
                rn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
                break;
            case "xlinkArcrole":
                rn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
                break;
            case "xlinkRole":
                rn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
                break;
            case "xlinkShow":
                rn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
                break;
            case "xlinkTitle":
                rn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
                break;
            case "xlinkType":
                rn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
                break;
            case "xmlBase":
                rn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
                break;
            case "xmlLang":
                rn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
                break;
            case "xmlSpace":
                rn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
                break;
            case "is":
                Qi(e, "is", l);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = kp.get(n) || n, Qi(e, n, l))
        }
    }

    function Ns(e, t, n, l, i, o) {
        switch (n) {
            case "style":
                uf(e, l, o);
                break;
            case "dangerouslySetInnerHTML":
                if (l != null) {
                    if (typeof l != "object" || !("__html" in l)) throw Error(c(61));
                    if (n = l.__html, n != null) {
                        if (i.children != null) throw Error(c(60));
                        e.innerHTML = n
                    }
                }
                break;
            case "children":
                typeof l == "string" ? ql(e, l) : (typeof l == "number" || typeof l == "bigint") && ql(e, "" + l);
                break;
            case "onScroll":
                l != null && Ne("scroll", e);
                break;
            case "onScrollEnd":
                l != null && Ne("scrollend", e);
                break;
            case "onClick":
                l != null && (e.onclick = Go);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Fu.hasOwnProperty(n)) e: {
                    if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), o = e[bt] || null, o = o != null ? o[n] : null, typeof o == "function" && e.removeEventListener(t, o, i), typeof l == "function")) {
                        typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, i);
                        break e
                    }
                    n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Qi(e, n, l)
                }
        }
    }

    function ut(e, t, n) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Ne("error", e), Ne("load", e);
                var l = !1,
                    i = !1,
                    o;
                for (o in n)
                    if (n.hasOwnProperty(o)) {
                        var m = n[o];
                        if (m != null) switch (o) {
                            case "src":
                                l = !0;
                                break;
                            case "srcSet":
                                i = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(c(137, t));
                            default:
                                ke(e, t, o, m, n, null)
                        }
                    } i && ke(e, t, "srcSet", n.srcSet, n, null), l && ke(e, t, "src", n.src, n, null);
                return;
            case "input":
                Ne("invalid", e);
                var p = o = m = i = null,
                    S = null,
                    _ = null;
                for (l in n)
                    if (n.hasOwnProperty(l)) {
                        var G = n[l];
                        if (G != null) switch (l) {
                            case "name":
                                i = G;
                                break;
                            case "type":
                                m = G;
                                break;
                            case "checked":
                                S = G;
                                break;
                            case "defaultChecked":
                                _ = G;
                                break;
                            case "value":
                                o = G;
                                break;
                            case "defaultValue":
                                p = G;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (G != null) throw Error(c(137, t));
                                break;
                            default:
                                ke(e, t, l, G, n, null)
                        }
                    } of(e, o, p, S, _, m, i, !1), Ki(e);
                return;
            case "select":
                Ne("invalid", e), l = m = o = null;
                for (i in n)
                    if (n.hasOwnProperty(i) && (p = n[i], p != null)) switch (i) {
                        case "value":
                            o = p;
                            break;
                        case "defaultValue":
                            m = p;
                            break;
                        case "multiple":
                            l = p;
                        default:
                            ke(e, t, i, p, n, null)
                    }
                t = o, n = m, e.multiple = !!l, t != null ? Ll(e, !!l, t, !1) : n != null && Ll(e, !!l, n, !0);
                return;
            case "textarea":
                Ne("invalid", e), o = i = l = null;
                for (m in n)
                    if (n.hasOwnProperty(m) && (p = n[m], p != null)) switch (m) {
                        case "value":
                            l = p;
                            break;
                        case "defaultValue":
                            i = p;
                            break;
                        case "children":
                            o = p;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (p != null) throw Error(c(91));
                            break;
                        default:
                            ke(e, t, m, p, n, null)
                    }
                cf(e, l, i, o), Ki(e);
                return;
            case "option":
                for (S in n)
                    if (n.hasOwnProperty(S) && (l = n[S], l != null)) switch (S) {
                        case "selected":
                            e.selected = l && typeof l != "function" && typeof l != "symbol";
                            break;
                        default:
                            ke(e, t, S, l, n, null)
                    }
                return;
            case "dialog":
                Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
                break;
            case "iframe":
            case "object":
                Ne("load", e);
                break;
            case "video":
            case "audio":
                for (l = 0; l < xi.length; l++) Ne(xi[l], e);
                break;
            case "image":
                Ne("error", e), Ne("load", e);
                break;
            case "details":
                Ne("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                Ne("error", e), Ne("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (_ in n)
                    if (n.hasOwnProperty(_) && (l = n[_], l != null)) switch (_) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(c(137, t));
                        default:
                            ke(e, t, _, l, n, null)
                    }
                return;
            default:
                if (Vr(t)) {
                    for (G in n) n.hasOwnProperty(G) && (l = n[G], l !== void 0 && Ns(e, t, G, l, n, void 0));
                    return
                }
        }
        for (p in n) n.hasOwnProperty(p) && (l = n[p], l != null && ke(e, t, p, l, n, null))
    }

    function cy(e, t, n, l) {
        switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var i = null,
                    o = null,
                    m = null,
                    p = null,
                    S = null,
                    _ = null,
                    G = null;
                for (H in n) {
                    var K = n[H];
                    if (n.hasOwnProperty(H) && K != null) switch (H) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            S = K;
                        default:
                            l.hasOwnProperty(H) || ke(e, t, H, null, l, K)
                    }
                }
                for (var D in l) {
                    var H = l[D];
                    if (K = n[D], l.hasOwnProperty(D) && (H != null || K != null)) switch (D) {
                        case "type":
                            o = H;
                            break;
                        case "name":
                            i = H;
                            break;
                        case "checked":
                            _ = H;
                            break;
                        case "defaultChecked":
                            G = H;
                            break;
                        case "value":
                            m = H;
                            break;
                        case "defaultValue":
                            p = H;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (H != null) throw Error(c(137, t));
                            break;
                        default:
                            H !== K && ke(e, t, D, H, l, K)
                    }
                }
                Lr(e, m, p, S, _, G, o, i);
                return;
            case "select":
                H = m = p = D = null;
                for (o in n)
                    if (S = n[o], n.hasOwnProperty(o) && S != null) switch (o) {
                        case "value":
                            break;
                        case "multiple":
                            H = S;
                        default:
                            l.hasOwnProperty(o) || ke(e, t, o, null, l, S)
                    }
                for (i in l)
                    if (o = l[i], S = n[i], l.hasOwnProperty(i) && (o != null || S != null)) switch (i) {
                        case "value":
                            D = o;
                            break;
                        case "defaultValue":
                            p = o;
                            break;
                        case "multiple":
                            m = o;
                        default:
                            o !== S && ke(e, t, i, o, l, S)
                    }
                t = p, n = m, l = H, D != null ? Ll(e, !!n, D, !1) : !!l != !!n && (t != null ? Ll(e, !!n, t, !0) : Ll(e, !!n, n ? [] : "", !1));
                return;
            case "textarea":
                H = D = null;
                for (p in n)
                    if (i = n[p], n.hasOwnProperty(p) && i != null && !l.hasOwnProperty(p)) switch (p) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            ke(e, t, p, null, l, i)
                    }
                for (m in l)
                    if (i = l[m], o = n[m], l.hasOwnProperty(m) && (i != null || o != null)) switch (m) {
                        case "value":
                            D = i;
                            break;
                        case "defaultValue":
                            H = i;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (i != null) throw Error(c(91));
                            break;
                        default:
                            i !== o && ke(e, t, m, i, l, o)
                    }
                rf(e, D, H);
                return;
            case "option":
                for (var fe in n)
                    if (D = n[fe], n.hasOwnProperty(fe) && D != null && !l.hasOwnProperty(fe)) switch (fe) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            ke(e, t, fe, null, l, D)
                    }
                for (S in l)
                    if (D = l[S], H = n[S], l.hasOwnProperty(S) && D !== H && (D != null || H != null)) switch (S) {
                        case "selected":
                            e.selected = D && typeof D != "function" && typeof D != "symbol";
                            break;
                        default:
                            ke(e, t, S, D, l, H)
                    }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var se in n) D = n[se], n.hasOwnProperty(se) && D != null && !l.hasOwnProperty(se) && ke(e, t, se, null, l, D);
                for (_ in l)
                    if (D = l[_], H = n[_], l.hasOwnProperty(_) && D !== H && (D != null || H != null)) switch (_) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (D != null) throw Error(c(137, t));
                            break;
                        default:
                            ke(e, t, _, D, l, H)
                    }
                return;
            default:
                if (Vr(t)) {
                    for (var Be in n) D = n[Be], n.hasOwnProperty(Be) && D !== void 0 && !l.hasOwnProperty(Be) && Ns(e, t, Be, void 0, l, D);
                    for (G in l) D = l[G], H = n[G], !l.hasOwnProperty(G) || D === H || D === void 0 && H === void 0 || Ns(e, t, G, D, l, H);
                    return
                }
        }
        for (var C in n) D = n[C], n.hasOwnProperty(C) && D != null && !l.hasOwnProperty(C) && ke(e, t, C, null, l, D);
        for (K in l) D = l[K], H = n[K], !l.hasOwnProperty(K) || D === H || D == null && H == null || ke(e, t, K, D, l, H)
    }
    var Ts = null,
        Cs = null;

    function Yo(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }

    function sh(e) {
        switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function uh(e, t) {
        if (e === 0) switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
        }
        return e === 1 && t === "foreignObject" ? 0 : e
    }

    function js(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ms = null;

    function sy() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Ms ? !1 : (Ms = e, !0) : (Ms = null, !1)
    }
    var fh = typeof setTimeout == "function" ? setTimeout : void 0,
        uy = typeof clearTimeout == "function" ? clearTimeout : void 0,
        dh = typeof Promise == "function" ? Promise : void 0,
        fy = typeof queueMicrotask == "function" ? queueMicrotask : typeof dh < "u" ? function(e) {
            return dh.resolve(null).then(e).catch(dy)
        } : fh;

    function dy(e) {
        setTimeout(function() {
            throw e
        })
    }

    function Xn(e) {
        return e === "head"
    }

    function mh(e, t) {
        var n = t,
            l = 0,
            i = 0;
        do {
            var o = n.nextSibling;
            if (e.removeChild(n), o && o.nodeType === 8)
                if (n = o.data, n === "/$") {
                    if (0 < l && 8 > l) {
                        n = l;
                        var m = e.ownerDocument;
                        if (n & 1 && Ei(m.documentElement), n & 2 && Ei(m.body), n & 4)
                            for (n = m.head, Ei(n), m = n.firstChild; m;) {
                                var p = m.nextSibling,
                                    S = m.nodeName;
                                m[ka] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && m.rel.toLowerCase() === "stylesheet" || n.removeChild(m), m = p
                            }
                    }
                    if (i === 0) {
                        e.removeChild(o), Ri(t);
                        return
                    }
                    i--
                } else n === "$" || n === "$?" || n === "$!" ? i++ : l = n.charCodeAt(0) - 48;
            else l = 0;
            n = o
        } while (n);
        Ri(t)
    }

    function Rs(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var n = t;
            switch (t = t.nextSibling, n.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Rs(n), Ur(n);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (n.rel.toLowerCase() === "stylesheet") continue
            }
            e.removeChild(n)
        }
    }

    function my(e, t, n, l) {
        for (; e.nodeType === 1;) {
            var i = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break
            } else if (l) {
                if (!e[ka]) switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop")) break;
                        return e;
                    case "link":
                        if (o = e.getAttribute("rel"), o === "stylesheet" && e.hasAttribute("data-precedence")) break;
                        if (o !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence")) break;
                        return e;
                    case "script":
                        if (o = e.getAttribute("src"), (o !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && o && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                        return e;
                    default:
                        return e
                }
            } else if (t === "input" && e.type === "hidden") {
                var o = i.name == null ? null : "" + i.name;
                if (i.type === "hidden" && e.getAttribute("name") === o) return e
            } else return e;
            if (e = Zt(e.nextSibling), e === null) break
        }
        return null
    }

    function hy(e, t, n) {
        if (t === "") return null;
        for (; e.nodeType !== 3;)
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Zt(e.nextSibling), e === null)) return null;
        return e
    }

    function Os(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }

    function vy(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete") t();
        else {
            var l = function() {
                t(), n.removeEventListener("DOMContentLoaded", l)
            };
            n.addEventListener("DOMContentLoaded", l), e._reactRetry = l
        }
    }

    function Zt(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return e
    }
    var _s = null;

    function hh(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0) return e;
                    t--
                } else n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }

    function vh(e, t, n) {
        switch (t = Yo(n), e) {
            case "html":
                if (e = t.documentElement, !e) throw Error(c(452));
                return e;
            case "head":
                if (e = t.head, !e) throw Error(c(453));
                return e;
            case "body":
                if (e = t.body, !e) throw Error(c(454));
                return e;
            default:
                throw Error(c(451))
        }
    }

    function Ei(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        Ur(e)
    }
    var Yt = new Map,
        gh = new Set;

    function Xo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Sn = J.d;
    J.d = {
        f: gy,
        r: py,
        D: yy,
        C: by,
        L: xy,
        m: Sy,
        X: wy,
        S: Ey,
        M: Ay
    };

    function gy() {
        var e = Sn.f(),
            t = Uo();
        return e || t
    }

    function py(e) {
        var t = Ul(e);
        t !== null && t.tag === 5 && t.type === "form" ? Hd(t) : Sn.r(e)
    }
    var va = typeof document > "u" ? null : document;

    function ph(e, t, n) {
        var l = va;
        if (l && typeof t == "string" && t) {
            var i = Ht(t);
            i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), gh.has(i) || (gh.add(i), e = {
                rel: e,
                crossOrigin: n,
                href: t
            }, l.querySelector(i) === null && (t = l.createElement("link"), ut(t, "link", e), lt(t), l.head.appendChild(t)))
        }
    }

    function yy(e) {
        Sn.D(e), ph("dns-prefetch", e, null)
    }

    function by(e, t) {
        Sn.C(e, t), ph("preconnect", e, t)
    }

    function xy(e, t, n) {
        Sn.L(e, t, n);
        var l = va;
        if (l && e && t) {
            var i = 'link[rel="preload"][as="' + Ht(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Ht(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Ht(n.imageSizes) + '"]')) : i += '[href="' + Ht(e) + '"]';
            var o = i;
            switch (t) {
                case "style":
                    o = ga(e);
                    break;
                case "script":
                    o = pa(e)
            }
            Yt.has(o) || (e = b({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n), Yt.set(o, e), l.querySelector(i) !== null || t === "style" && l.querySelector(wi(o)) || t === "script" && l.querySelector(Ai(o)) || (t = l.createElement("link"), ut(t, "link", e), lt(t), l.head.appendChild(t)))
        }
    }

    function Sy(e, t) {
        Sn.m(e, t);
        var n = va;
        if (n && e) {
            var l = t && typeof t.as == "string" ? t.as : "script",
                i = 'link[rel="modulepreload"][as="' + Ht(l) + '"][href="' + Ht(e) + '"]',
                o = i;
            switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    o = pa(e)
            }
            if (!Yt.has(o) && (e = b({
                    rel: "modulepreload",
                    href: e
                }, t), Yt.set(o, e), n.querySelector(i) === null)) {
                switch (l) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (n.querySelector(Ai(o))) return
                }
                l = n.createElement("link"), ut(l, "link", e), lt(l), n.head.appendChild(l)
            }
        }
    }

    function Ey(e, t, n) {
        Sn.S(e, t, n);
        var l = va;
        if (l && e) {
            var i = Hl(l).hoistableStyles,
                o = ga(e);
            t = t || "default";
            var m = i.get(o);
            if (!m) {
                var p = {
                    loading: 0,
                    preload: null
                };
                if (m = l.querySelector(wi(o))) p.loading = 5;
                else {
                    e = b({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n), (n = Yt.get(o)) && Ds(e, n);
                    var S = m = l.createElement("link");
                    lt(S), ut(S, "link", e), S._p = new Promise(function(_, G) {
                        S.onload = _, S.onerror = G
                    }), S.addEventListener("load", function() {
                        p.loading |= 1
                    }), S.addEventListener("error", function() {
                        p.loading |= 2
                    }), p.loading |= 4, Qo(m, t, l)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: p
                }, i.set(o, m)
            }
        }
    }

    function wy(e, t) {
        Sn.X(e, t);
        var n = va;
        if (n && e) {
            var l = Hl(n).hoistableScripts,
                i = pa(e),
                o = l.get(i);
            o || (o = n.querySelector(Ai(i)), o || (e = b({
                src: e,
                async: !0
            }, t), (t = Yt.get(i)) && zs(e, t), o = n.createElement("script"), lt(o), ut(o, "link", e), n.head.appendChild(o)), o = {
                type: "script",
                instance: o,
                count: 1,
                state: null
            }, l.set(i, o))
        }
    }

    function Ay(e, t) {
        Sn.M(e, t);
        var n = va;
        if (n && e) {
            var l = Hl(n).hoistableScripts,
                i = pa(e),
                o = l.get(i);
            o || (o = n.querySelector(Ai(i)), o || (e = b({
                src: e,
                async: !0,
                type: "module"
            }, t), (t = Yt.get(i)) && zs(e, t), o = n.createElement("script"), lt(o), ut(o, "link", e), n.head.appendChild(o)), o = {
                type: "script",
                instance: o,
                count: 1,
                state: null
            }, l.set(i, o))
        }
    }

    function yh(e, t, n, l) {
        var i = (i = ie.current) ? Xo(i) : null;
        if (!i) throw Error(c(446));
        switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ga(n.href), n = Hl(i).hoistableStyles, l = n.get(t), l || (l = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                    e = ga(n.href);
                    var o = Hl(i).hoistableStyles,
                        m = o.get(e);
                    if (m || (i = i.ownerDocument || i, m = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, o.set(e, m), (o = i.querySelector(wi(e))) && !o._p && (m.instance = o, m.state.loading = 5), Yt.has(e) || (n = {
                            rel: "preload",
                            as: "style",
                            href: n.href,
                            crossOrigin: n.crossOrigin,
                            integrity: n.integrity,
                            media: n.media,
                            hrefLang: n.hrefLang,
                            referrerPolicy: n.referrerPolicy
                        }, Yt.set(e, n), o || Ny(i, e, n, m.state))), t && l === null) throw Error(c(528, ""));
                    return m
                }
                if (t && l !== null) throw Error(c(529, ""));
                return null;
            case "script":
                return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = pa(n), n = Hl(i).hoistableScripts, l = n.get(t), l || (l = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, n.set(t, l)), l) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(c(444, e))
        }
    }

    function ga(e) {
        return 'href="' + Ht(e) + '"'
    }

    function wi(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }

    function bh(e) {
        return b({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }

    function Ny(e, t, n, l) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
            return l.loading |= 1
        }), t.addEventListener("error", function() {
            return l.loading |= 2
        }), ut(t, "link", n), lt(t), e.head.appendChild(t))
    }

    function pa(e) {
        return '[src="' + Ht(e) + '"]'
    }

    function Ai(e) {
        return "script[async]" + e
    }

    function xh(e, t, n) {
        if (t.count++, t.instance === null) switch (t.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + Ht(n.href) + '"]');
                if (l) return t.instance = l, lt(l), l;
                var i = b({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"), lt(l), ut(l, "style", i), Qo(l, n.precedence, e), t.instance = l;
            case "stylesheet":
                i = ga(n.href);
                var o = e.querySelector(wi(i));
                if (o) return t.state.loading |= 4, t.instance = o, lt(o), o;
                l = bh(n), (i = Yt.get(i)) && Ds(l, i), o = (e.ownerDocument || e).createElement("link"), lt(o);
                var m = o;
                return m._p = new Promise(function(p, S) {
                    m.onload = p, m.onerror = S
                }), ut(o, "link", l), t.state.loading |= 4, Qo(o, n.precedence, e), t.instance = o;
            case "script":
                return o = pa(n.src), (i = e.querySelector(Ai(o))) ? (t.instance = i, lt(i), i) : (l = n, (i = Yt.get(o)) && (l = b({}, n), zs(l, i)), e = e.ownerDocument || e, i = e.createElement("script"), lt(i), ut(i, "link", l), e.head.appendChild(i), t.instance = i);
            case "void":
                return null;
            default:
                throw Error(c(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Qo(l, n.precedence, e));
        return t.instance
    }

    function Qo(e, t, n) {
        for (var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), i = l.length ? l[l.length - 1] : null, o = i, m = 0; m < l.length; m++) {
            var p = l[m];
            if (p.dataset.precedence === t) o = p;
            else if (o !== i) break
        }
        o ? o.parentNode.insertBefore(e, o.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild))
    }

    function Ds(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title)
    }

    function zs(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity)
    }
    var Zo = null;

    function Sh(e, t, n) {
        if (Zo === null) {
            var l = new Map,
                i = Zo = new Map;
            i.set(n, l)
        } else i = Zo, l = i.get(n), l || (l = new Map, i.set(n, l));
        if (l.has(e)) return l;
        for (l.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
            var o = n[i];
            if (!(o[ka] || o[dt] || e === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = o.getAttribute(t) || "";
                m = e + m;
                var p = l.get(m);
                p ? p.push(o) : l.set(m, [o])
            }
        }
        return l
    }

    function Eh(e, t, n) {
        e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }

    function Ty(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case "stylesheet":
                        return e = t.disabled, typeof t.precedence == "string" && e == null;
                    default:
                        return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function wh(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var Ni = null;

    function Cy() {}

    function jy(e, t, n) {
        if (Ni === null) throw Error(c(475));
        var l = Ni;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var i = ga(n.href),
                    o = e.querySelector(wi(i));
                if (o) {
                    e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = Ko.bind(l), e.then(l, l)), t.state.loading |= 4, t.instance = o, lt(o);
                    return
                }
                o = e.ownerDocument || e, n = bh(n), (i = Yt.get(i)) && Ds(n, i), o = o.createElement("link"), lt(o);
                var m = o;
                m._p = new Promise(function(p, S) {
                    m.onload = p, m.onerror = S
                }), ut(o, "link", n), t.instance = o
            }
            l.stylesheets === null && (l.stylesheets = new Map), l.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (l.count++, t = Ko.bind(l), e.addEventListener("load", t), e.addEventListener("error", t))
        }
    }

    function My() {
        if (Ni === null) throw Error(c(475));
        var e = Ni;
        return e.stylesheets && e.count === 0 && Us(e, e.stylesheets), 0 < e.count ? function(t) {
            var n = setTimeout(function() {
                if (e.stylesheets && Us(e, e.stylesheets), e.unsuspend) {
                    var l = e.unsuspend;
                    e.unsuspend = null, l()
                }
            }, 6e4);
            return e.unsuspend = t,
                function() {
                    e.unsuspend = null, clearTimeout(n)
                }
        } : null
    }

    function Ko() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) Us(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null, e()
            }
        }
    }
    var Jo = null;

    function Us(e, t) {
        e.stylesheets = null, e.unsuspend !== null && (e.count++, Jo = new Map, t.forEach(Ry, e), Jo = null, Ko.call(e))
    }

    function Ry(e, t) {
        if (!(t.state.loading & 4)) {
            var n = Jo.get(e);
            if (n) var l = n.get(null);
            else {
                n = new Map, Jo.set(e, n);
                for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), o = 0; o < i.length; o++) {
                    var m = i[o];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (n.set(m.dataset.precedence, m), l = m)
                }
                l && n.set(null, l)
            }
            i = t.instance, m = i.getAttribute("data-precedence"), o = n.get(m) || l, o === l && n.set(null, i), n.set(m, i), this.count++, l = Ko.bind(this), i.addEventListener("load", l), i.addEventListener("error", l), o ? o.parentNode.insertBefore(i, o.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4
        }
    }
    var Ti = {
        $$typeof: B,
        Provider: null,
        Consumer: null,
        _currentValue: L,
        _currentValue2: L,
        _threadCount: 0
    };

    function Oy(e, t, n, l, i, o, m, p) {
        this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Or(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Or(0), this.hiddenUpdates = Or(null), this.identifierPrefix = l, this.onUncaughtError = i, this.onCaughtError = o, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = new Map
    }

    function Ah(e, t, n, l, i, o, m, p, S, _, G, K) {
        return e = new Oy(e, t, n, m, p, S, _, K), t = 1, o === !0 && (t |= 24), o = Ct(3, null, null, t), e.current = o, o.stateNode = e, t = gc(), t.refCount++, e.pooledCache = t, t.refCount++, o.memoizedState = {
            element: l,
            isDehydrated: n,
            cache: t
        }, xc(o), e
    }

    function Nh(e) {
        return e ? (e = Jl, e) : Jl
    }

    function Th(e, t, n, l, i, o) {
        i = Nh(i), l.context === null ? l.context = i : l.pendingContext = i, l = On(t), l.payload = {
            element: n
        }, o = o === void 0 ? null : o, o !== null && (l.callback = o), n = _n(e, l, t), n !== null && (_t(n, e, t), ni(n, e, t))
    }

    function Ch(e, t) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }

    function Hs(e, t) {
        Ch(e, t), (e = e.alternate) && Ch(e, t)
    }

    function jh(e) {
        if (e.tag === 13) {
            var t = Kl(e, 67108864);
            t !== null && _t(t, e, 67108864), Hs(e, 67108864)
        }
    }
    var Po = !0;

    function _y(e, t, n, l) {
        var i = O.T;
        O.T = null;
        var o = J.p;
        try {
            J.p = 2, ks(e, t, n, l)
        } finally {
            J.p = o, O.T = i
        }
    }

    function Dy(e, t, n, l) {
        var i = O.T;
        O.T = null;
        var o = J.p;
        try {
            J.p = 8, ks(e, t, n, l)
        } finally {
            J.p = o, O.T = i
        }
    }

    function ks(e, t, n, l) {
        if (Po) {
            var i = Bs(l);
            if (i === null) As(e, t, l, $o, n), Rh(e, l);
            else if (Uy(i, e, t, n, l)) l.stopPropagation();
            else if (Rh(e, l), t & 4 && -1 < zy.indexOf(e)) {
                for (; i !== null;) {
                    var o = Ul(i);
                    if (o !== null) switch (o.tag) {
                        case 3:
                            if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                                var m = rl(o.pendingLanes);
                                if (m !== 0) {
                                    var p = o;
                                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; m;) {
                                        var S = 1 << 31 - Nt(m);
                                        p.entanglements[1] |= S, m &= ~S
                                    }
                                    tn(o), (_e & 6) === 0 && (Do = ft() + 500, bi(0))
                                }
                            }
                            break;
                        case 13:
                            p = Kl(o, 2), p !== null && _t(p, o, 2), Uo(), Hs(o, 2)
                    }
                    if (o = Bs(l), o === null && As(e, t, l, $o, n), o === i) break;
                    i = o
                }
                i !== null && l.stopPropagation()
            } else As(e, t, l, null, n)
        }
    }

    function Bs(e) {
        return e = Yr(e), Ls(e)
    }
    var $o = null;

    function Ls(e) {
        if ($o = null, e = zl(e), e !== null) {
            var t = d(e);
            if (t === null) e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = h(t), e !== null) return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else t !== e && (e = null)
            }
        }
        return $o = e, null
    }

    function Mh(e) {
        switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Rr()) {
                    case ol:
                        return 2;
                    case Yu:
                        return 8;
                    case Vi:
                    case xp:
                        return 32;
                    case Xu:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }
    var qs = !1,
        Qn = null,
        Zn = null,
        Kn = null,
        Ci = new Map,
        ji = new Map,
        Jn = [],
        zy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function Rh(e, t) {
        switch (e) {
            case "focusin":
            case "focusout":
                Qn = null;
                break;
            case "dragenter":
            case "dragleave":
                Zn = null;
                break;
            case "mouseover":
            case "mouseout":
                Kn = null;
                break;
            case "pointerover":
            case "pointerout":
                Ci.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                ji.delete(t.pointerId)
        }
    }

    function Mi(e, t, n, l, i, o) {
        return e === null || e.nativeEvent !== o ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: l,
            nativeEvent: o,
            targetContainers: [i]
        }, t !== null && (t = Ul(t), t !== null && jh(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
    }

    function Uy(e, t, n, l, i) {
        switch (t) {
            case "focusin":
                return Qn = Mi(Qn, e, t, n, l, i), !0;
            case "dragenter":
                return Zn = Mi(Zn, e, t, n, l, i), !0;
            case "mouseover":
                return Kn = Mi(Kn, e, t, n, l, i), !0;
            case "pointerover":
                var o = i.pointerId;
                return Ci.set(o, Mi(Ci.get(o) || null, e, t, n, l, i)), !0;
            case "gotpointercapture":
                return o = i.pointerId, ji.set(o, Mi(ji.get(o) || null, e, t, n, l, i)), !0
        }
        return !1
    }

    function Oh(e) {
        var t = zl(e.target);
        if (t !== null) {
            var n = d(t);
            if (n !== null) {
                if (t = n.tag, t === 13) {
                    if (t = h(n), t !== null) {
                        e.blockedOn = t, jp(e.priority, function() {
                            if (n.tag === 13) {
                                var l = Ot();
                                l = _r(l);
                                var i = Kl(n, l);
                                i !== null && _t(i, n, l), Hs(n, l)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }

    function Wo(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
            var n = Bs(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var l = new n.constructor(n.type, n);
                Gr = l, n.target.dispatchEvent(l), Gr = null
            } else return t = Ul(n), t !== null && jh(t), e.blockedOn = n, !1;
            t.shift()
        }
        return !0
    }

    function _h(e, t, n) {
        Wo(e) && n.delete(t)
    }

    function Hy() {
        qs = !1, Qn !== null && Wo(Qn) && (Qn = null), Zn !== null && Wo(Zn) && (Zn = null), Kn !== null && Wo(Kn) && (Kn = null), Ci.forEach(_h), ji.forEach(_h)
    }

    function Fo(e, t) {
        e.blockedOn === t && (e.blockedOn = null, qs || (qs = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Hy)))
    }
    var Io = null;

    function Dh(e) {
        Io !== e && (Io = e, a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            Io === e && (Io = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t],
                    l = e[t + 1],
                    i = e[t + 2];
                if (typeof l != "function") {
                    if (Ls(l || n) === null) continue;
                    break
                }
                var o = Ul(n);
                o !== null && (e.splice(t, 3), t -= 3, Lc(o, {
                    pending: !0,
                    data: i,
                    method: n.method,
                    action: l
                }, l, i))
            }
        }))
    }

    function Ri(e) {
        function t(S) {
            return Fo(S, e)
        }
        Qn !== null && Fo(Qn, e), Zn !== null && Fo(Zn, e), Kn !== null && Fo(Kn, e), Ci.forEach(t), ji.forEach(t);
        for (var n = 0; n < Jn.length; n++) {
            var l = Jn[n];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < Jn.length && (n = Jn[0], n.blockedOn === null);) Oh(n), n.blockedOn === null && Jn.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
            for (l = 0; l < n.length; l += 3) {
                var i = n[l],
                    o = n[l + 1],
                    m = i[bt] || null;
                if (typeof o == "function") m || Dh(n);
                else if (m) {
                    var p = null;
                    if (o && o.hasAttribute("formAction")) {
                        if (i = o, m = o[bt] || null) p = m.formAction;
                        else if (Ls(i) !== null) continue
                    } else p = m.action;
                    typeof p == "function" ? n[l + 1] = p : (n.splice(l, 3), l -= 3), Dh(n)
                }
            }
    }

    function Vs(e) {
        this._internalRoot = e
    }
    er.prototype.render = Vs.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null) throw Error(c(409));
        var n = t.current,
            l = Ot();
        Th(n, l, e, t, null, null)
    }, er.prototype.unmount = Vs.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Th(e.current, 2, null, e, null, null), Uo(), t[Dl] = null
        }
    };

    function er(e) {
        this._internalRoot = e
    }
    er.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Pu();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++);
            Jn.splice(n, 0, e), n === 0 && Oh(e)
        }
    };
    var zh = r.version;
    if (zh !== "19.1.0") throw Error(c(527, zh, "19.1.0"));
    J.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
        return e = y(t), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e
    };
    var ky = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: O,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!tr.isDisabled && tr.supportsFiber) try {
            za = tr.inject(ky), At = tr
        } catch {}
    }
    return _i.createRoot = function(e, t) {
        if (!u(e)) throw Error(c(299));
        var n = !1,
            l = "",
            i = $d,
            o = Wd,
            m = Fd,
            p = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (o = t.onCaughtError), t.onRecoverableError !== void 0 && (m = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (p = t.unstable_transitionCallbacks)), t = Ah(e, 1, !1, null, null, n, l, i, o, m, p, null), e[Dl] = t.current, ws(e), new Vs(t)
    }, _i.hydrateRoot = function(e, t, n) {
        if (!u(e)) throw Error(c(299));
        var l = !1,
            i = "",
            o = $d,
            m = Wd,
            p = Fd,
            S = null,
            _ = null;
        return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (o = n.onUncaughtError), n.onCaughtError !== void 0 && (m = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (S = n.unstable_transitionCallbacks), n.formState !== void 0 && (_ = n.formState)), t = Ah(e, 1, !0, t, n ?? null, l, i, o, m, p, S, _), t.context = Nh(null), n = t.current, l = Ot(), l = _r(l), i = On(l), i.callback = null, _n(n, i, l), n = l, t.current.lanes = n, Ha(t, n), tn(t), e[Dl] = t.current, ws(e), new er(t)
    }, _i.version = "19.1.0", _i
}
var Xh;

function Ky() {
    if (Xh) return Xs.exports;
    Xh = 1;

    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
        } catch (r) {
            console.error(r)
        }
    }
    return a(), Xs.exports = Zy(), Xs.exports
}
var Jy = Ky();

function Qh(a, r) {
    if (typeof a == "function") return a(r);
    a != null && (a.current = r)
}

function Py(...a) {
    return r => {
        let s = !1;
        const c = a.map(u => {
            const d = Qh(u, r);
            return !s && typeof d == "function" && (s = !0), d
        });
        if (s) return () => {
            for (let u = 0; u < c.length; u++) {
                const d = c[u];
                typeof d == "function" ? d() : Qh(a[u], null)
            }
        }
    }
}

function Xe(...a) {
    return x.useCallback(Py(...a), a)
}

function Ca(a) {
    const r = Wy(a),
        s = x.forwardRef((c, u) => {
            const {
                children: d,
                ...h
            } = c, g = x.Children.toArray(d), y = g.find(Iy);
            if (y) {
                const v = y.props.children,
                    b = g.map(A => A === y ? x.Children.count(v) > 1 ? x.Children.only(null) : x.isValidElement(v) ? v.props.children : null : A);
                return f.jsx(r, {
                    ...h,
                    ref: u,
                    children: x.isValidElement(v) ? x.cloneElement(v, void 0, b) : null
                })
            }
            return f.jsx(r, {
                ...h,
                ref: u,
                children: d
            })
        });
    return s.displayName = `${a}.Slot`, s
}
var $y = Ca("Slot");

function Wy(a) {
    const r = x.forwardRef((s, c) => {
        const {
            children: u,
            ...d
        } = s, h = x.isValidElement(u) ? tb(u) : void 0, g = Xe(h, c);
        if (x.isValidElement(u)) {
            const y = eb(d, u.props);
            return u.type !== x.Fragment && (y.ref = g), x.cloneElement(u, y)
        }
        return x.Children.count(u) > 1 ? x.Children.only(null) : null
    });
    return r.displayName = `${a}.SlotClone`, r
}
var Fy = Symbol("radix.slottable");

function Iy(a) {
    return x.isValidElement(a) && typeof a.type == "function" && "__radixId" in a.type && a.type.__radixId === Fy
}

function eb(a, r) {
    const s = {
        ...r
    };
    for (const c in r) {
        const u = a[c],
            d = r[c];
        /^on[A-Z]/.test(c) ? u && d ? s[c] = (...g) => {
            const y = d(...g);
            return u(...g), y
        } : u && (s[c] = u) : c === "style" ? s[c] = {
            ...u,
            ...d
        } : c === "className" && (s[c] = [u, d].filter(Boolean).join(" "))
    }
    return {
        ...a,
        ...s
    }
}

function tb(a) {
    var c, u;
    let r = (c = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : c.get,
        s = r && "isReactWarning" in r && r.isReactWarning;
    return s ? a.ref : (r = (u = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : u.get, s = r && "isReactWarning" in r && r.isReactWarning, s ? a.props.ref : a.props.ref || a.ref)
}

function Nv(a) {
    var r, s, c = "";
    if (typeof a == "string" || typeof a == "number") c += a;
    else if (typeof a == "object")
        if (Array.isArray(a)) {
            var u = a.length;
            for (r = 0; r < u; r++) a[r] && (s = Nv(a[r])) && (c && (c += " "), c += s)
        } else
            for (s in a) a[s] && (c && (c += " "), c += s);
    return c
}

function Tv() {
    for (var a, r, s = 0, c = "", u = arguments.length; s < u; s++)(a = arguments[s]) && (r = Nv(a)) && (c && (c += " "), c += r);
    return c
}
const Zh = a => typeof a == "boolean" ? `${a}` : a === 0 ? "0" : a,
    Kh = Tv,
    nb = (a, r) => s => {
        var c;
        if ((r == null ? void 0 : r.variants) == null) return Kh(a, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
        const {
            variants: u,
            defaultVariants: d
        } = r, h = Object.keys(u).map(v => {
            const b = s == null ? void 0 : s[v],
                A = d == null ? void 0 : d[v];
            if (b === null) return null;
            const T = Zh(b) || Zh(A);
            return u[v][T]
        }), g = s && Object.entries(s).reduce((v, b) => {
            let [A, T] = b;
            return T === void 0 || (v[A] = T), v
        }, {}), y = r == null || (c = r.compoundVariants) === null || c === void 0 ? void 0 : c.reduce((v, b) => {
            let {
                class: A,
                className: T,
                ...j
            } = b;
            return Object.entries(j).every(U => {
                let [w, M] = U;
                return Array.isArray(M) ? M.includes({
                    ...d,
                    ...g
                } [w]) : {
                    ...d,
                    ...g
                } [w] === M
            }) ? [...v, A, T] : v
        }, []);
        return Kh(a, h, y, s == null ? void 0 : s.class, s == null ? void 0 : s.className)
    },
    wu = "-",
    lb = a => {
        const r = ib(a),
            {
                conflictingClassGroups: s,
                conflictingClassGroupModifiers: c
            } = a;
        return {
            getClassGroupId: h => {
                const g = h.split(wu);
                return g[0] === "" && g.length !== 1 && g.shift(), Cv(g, r) || ab(h)
            },
            getConflictingClassGroupIds: (h, g) => {
                const y = s[h] || [];
                return g && c[h] ? [...y, ...c[h]] : y
            }
        }
    },
    Cv = (a, r) => {
        var h;
        if (a.length === 0) return r.classGroupId;
        const s = a[0],
            c = r.nextPart.get(s),
            u = c ? Cv(a.slice(1), c) : void 0;
        if (u) return u;
        if (r.validators.length === 0) return;
        const d = a.join(wu);
        return (h = r.validators.find(({
            validator: g
        }) => g(d))) == null ? void 0 : h.classGroupId
    },
    Jh = /^\[(.+)\]$/,
    ab = a => {
        if (Jh.test(a)) {
            const r = Jh.exec(a)[1],
                s = r == null ? void 0 : r.substring(0, r.indexOf(":"));
            if (s) return "arbitrary.." + s
        }
    },
    ib = a => {
        const {
            theme: r,
            classGroups: s
        } = a, c = {
            nextPart: new Map,
            validators: []
        };
        for (const u in s) ru(s[u], c, u, r);
        return c
    },
    ru = (a, r, s, c) => {
        a.forEach(u => {
            if (typeof u == "string") {
                const d = u === "" ? r : Ph(r, u);
                d.classGroupId = s;
                return
            }
            if (typeof u == "function") {
                if (ob(u)) {
                    ru(u(c), r, s, c);
                    return
                }
                r.validators.push({
                    validator: u,
                    classGroupId: s
                });
                return
            }
            Object.entries(u).forEach(([d, h]) => {
                ru(h, Ph(r, d), s, c)
            })
        })
    },
    Ph = (a, r) => {
        let s = a;
        return r.split(wu).forEach(c => {
            s.nextPart.has(c) || s.nextPart.set(c, {
                nextPart: new Map,
                validators: []
            }), s = s.nextPart.get(c)
        }), s
    },
    ob = a => a.isThemeGetter,
    rb = a => {
        if (a < 1) return {
            get: () => {},
            set: () => {}
        };
        let r = 0,
            s = new Map,
            c = new Map;
        const u = (d, h) => {
            s.set(d, h), r++, r > a && (r = 0, c = s, s = new Map)
        };
        return {
            get(d) {
                let h = s.get(d);
                if (h !== void 0) return h;
                if ((h = c.get(d)) !== void 0) return u(d, h), h
            },
            set(d, h) {
                s.has(d) ? s.set(d, h) : u(d, h)
            }
        }
    },
    cu = "!",
    su = ":",
    cb = su.length,
    sb = a => {
        const {
            prefix: r,
            experimentalParseClassName: s
        } = a;
        let c = u => {
            const d = [];
            let h = 0,
                g = 0,
                y = 0,
                v;
            for (let U = 0; U < u.length; U++) {
                let w = u[U];
                if (h === 0 && g === 0) {
                    if (w === su) {
                        d.push(u.slice(y, U)), y = U + cb;
                        continue
                    }
                    if (w === "/") {
                        v = U;
                        continue
                    }
                }
                w === "[" ? h++ : w === "]" ? h-- : w === "(" ? g++ : w === ")" && g--
            }
            const b = d.length === 0 ? u : u.substring(y),
                A = ub(b),
                T = A !== b,
                j = v && v > y ? v - y : void 0;
            return {
                modifiers: d,
                hasImportantModifier: T,
                baseClassName: A,
                maybePostfixModifierPosition: j
            }
        };
        if (r) {
            const u = r + su,
                d = c;
            c = h => h.startsWith(u) ? d(h.substring(u.length)) : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: h,
                maybePostfixModifierPosition: void 0
            }
        }
        if (s) {
            const u = c;
            c = d => s({
                className: d,
                parseClassName: u
            })
        }
        return c
    },
    ub = a => a.endsWith(cu) ? a.substring(0, a.length - 1) : a.startsWith(cu) ? a.substring(1) : a,
    fb = a => {
        const r = Object.fromEntries(a.orderSensitiveModifiers.map(c => [c, !0]));
        return c => {
            if (c.length <= 1) return c;
            const u = [];
            let d = [];
            return c.forEach(h => {
                h[0] === "[" || r[h] ? (u.push(...d.sort(), h), d = []) : d.push(h)
            }), u.push(...d.sort()), u
        }
    },
    db = a => ({
        cache: rb(a.cacheSize),
        parseClassName: sb(a),
        sortModifiers: fb(a),
        ...lb(a)
    }),
    mb = /\s+/,
    hb = (a, r) => {
        const {
            parseClassName: s,
            getClassGroupId: c,
            getConflictingClassGroupIds: u,
            sortModifiers: d
        } = r, h = [], g = a.trim().split(mb);
        let y = "";
        for (let v = g.length - 1; v >= 0; v -= 1) {
            const b = g[v],
                {
                    isExternal: A,
                    modifiers: T,
                    hasImportantModifier: j,
                    baseClassName: U,
                    maybePostfixModifierPosition: w
                } = s(b);
            if (A) {
                y = b + (y.length > 0 ? " " + y : y);
                continue
            }
            let M = !!w,
                z = c(M ? U.substring(0, w) : U);
            if (!z) {
                if (!M) {
                    y = b + (y.length > 0 ? " " + y : y);
                    continue
                }
                if (z = c(U), !z) {
                    y = b + (y.length > 0 ? " " + y : y);
                    continue
                }
                M = !1
            }
            const k = d(T).join(":"),
                B = j ? k + cu : k,
                P = B + z;
            if (h.includes(P)) continue;
            h.push(P);
            const q = u(z, M);
            for (let V = 0; V < q.length; ++V) {
                const Y = q[V];
                h.push(B + Y)
            }
            y = b + (y.length > 0 ? " " + y : y)
        }
        return y
    };

function vb() {
    let a = 0,
        r, s, c = "";
    for (; a < arguments.length;)(r = arguments[a++]) && (s = jv(r)) && (c && (c += " "), c += s);
    return c
}
const jv = a => {
    if (typeof a == "string") return a;
    let r, s = "";
    for (let c = 0; c < a.length; c++) a[c] && (r = jv(a[c])) && (s && (s += " "), s += r);
    return s
};

function gb(a, ...r) {
    let s, c, u, d = h;

    function h(y) {
        const v = r.reduce((b, A) => A(b), a());
        return s = db(v), c = s.cache.get, u = s.cache.set, d = g, g(y)
    }

    function g(y) {
        const v = c(y);
        if (v) return v;
        const b = hb(y, s);
        return u(y, b), b
    }
    return function() {
        return d(vb.apply(null, arguments))
    }
}
const nt = a => {
        const r = s => s[a] || [];
        return r.isThemeGetter = !0, r
    },
    Mv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
    Rv = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
    pb = /^\d+\/\d+$/,
    yb = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    bb = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    xb = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    Sb = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    Eb = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ya = a => pb.test(a),
    ye = a => !!a && !Number.isNaN(Number(a)),
    $n = a => !!a && Number.isInteger(Number(a)),
    Js = a => a.endsWith("%") && ye(a.slice(0, -1)),
    En = a => yb.test(a),
    wb = () => !0,
    Ab = a => bb.test(a) && !xb.test(a),
    Ov = () => !1,
    Nb = a => Sb.test(a),
    Tb = a => Eb.test(a),
    Cb = a => !te(a) && !ne(a),
    jb = a => Ma(a, zv, Ov),
    te = a => Mv.test(a),
    Nl = a => Ma(a, Uv, Ab),
    Ps = a => Ma(a, Db, ye),
    $h = a => Ma(a, _v, Ov),
    Mb = a => Ma(a, Dv, Tb),
    nr = a => Ma(a, Hv, Nb),
    ne = a => Rv.test(a),
    Di = a => Ra(a, Uv),
    Rb = a => Ra(a, zb),
    Wh = a => Ra(a, _v),
    Ob = a => Ra(a, zv),
    _b = a => Ra(a, Dv),
    lr = a => Ra(a, Hv, !0),
    Ma = (a, r, s) => {
        const c = Mv.exec(a);
        return c ? c[1] ? r(c[1]) : s(c[2]) : !1
    },
    Ra = (a, r, s = !1) => {
        const c = Rv.exec(a);
        return c ? c[1] ? r(c[1]) : s : !1
    },
    _v = a => a === "position" || a === "percentage",
    Dv = a => a === "image" || a === "url",
    zv = a => a === "length" || a === "size" || a === "bg-size",
    Uv = a => a === "length",
    Db = a => a === "number",
    zb = a => a === "family-name",
    Hv = a => a === "shadow",
    Ub = () => {
        const a = nt("color"),
            r = nt("font"),
            s = nt("text"),
            c = nt("font-weight"),
            u = nt("tracking"),
            d = nt("leading"),
            h = nt("breakpoint"),
            g = nt("container"),
            y = nt("spacing"),
            v = nt("radius"),
            b = nt("shadow"),
            A = nt("inset-shadow"),
            T = nt("text-shadow"),
            j = nt("drop-shadow"),
            U = nt("blur"),
            w = nt("perspective"),
            M = nt("aspect"),
            z = nt("ease"),
            k = nt("animate"),
            B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            P = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            q = () => [...P(), ne, te],
            V = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Y = () => ["auto", "contain", "none"],
            Z = () => [ne, te, y],
            oe = () => [ya, "full", "auto", ...Z()],
            ve = () => [$n, "none", "subgrid", ne, te],
            be = () => ["auto", {
                span: ["full", $n, ne, te]
            }, $n, ne, te],
            de = () => [$n, "auto", ne, te],
            ge = () => ["auto", "min", "max", "fr", ne, te],
            xe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            ce = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
            O = () => ["auto", ...Z()],
            J = () => [ya, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()],
            L = () => [a, ne, te],
            le = () => [...P(), Wh, $h, {
                position: [ne, te]
            }],
            E = () => ["no-repeat", {
                repeat: ["", "x", "y", "space", "round"]
            }],
            X = () => ["auto", "cover", "contain", Ob, jb, {
                size: [ne, te]
            }],
            W = () => [Js, Di, Nl],
            $ = () => ["", "none", "full", v, ne, te],
            I = () => ["", ye, Di, Nl],
            me = () => ["solid", "dashed", "dotted", "double"],
            ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            F = () => [ye, Js, Wh, $h],
            re = () => ["", "none", U, ne, te],
            Re = () => ["none", ye, ne, te],
            Te = () => ["none", ye, ne, te],
            Ee = () => [ye, ne, te],
            we = () => [ya, "full", ...Z()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [En],
                breakpoint: [En],
                color: [wb],
                container: [En],
                "drop-shadow": [En],
                ease: ["in", "out", "in-out"],
                font: [Cb],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [En],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [En],
                shadow: [En],
                spacing: ["px", ye],
                text: [En],
                "text-shadow": [En],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{
                    aspect: ["auto", "square", ya, te, ne, M]
                }],
                container: ["container"],
                columns: [{
                    columns: [ye, te, ne, g]
                }],
                "break-after": [{
                    "break-after": B()
                }],
                "break-before": [{
                    "break-before": B()
                }],
                "break-inside": [{
                    "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                }],
                "box-decoration": [{
                    "box-decoration": ["slice", "clone"]
                }],
                box: [{
                    box: ["border", "content"]
                }],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{
                    float: ["right", "left", "none", "start", "end"]
                }],
                clear: [{
                    clear: ["left", "right", "both", "none", "start", "end"]
                }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{
                    object: ["contain", "cover", "fill", "none", "scale-down"]
                }],
                "object-position": [{
                    object: q()
                }],
                overflow: [{
                    overflow: V()
                }],
                "overflow-x": [{
                    "overflow-x": V()
                }],
                "overflow-y": [{
                    "overflow-y": V()
                }],
                overscroll: [{
                    overscroll: Y()
                }],
                "overscroll-x": [{
                    "overscroll-x": Y()
                }],
                "overscroll-y": [{
                    "overscroll-y": Y()
                }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{
                    inset: oe()
                }],
                "inset-x": [{
                    "inset-x": oe()
                }],
                "inset-y": [{
                    "inset-y": oe()
                }],
                start: [{
                    start: oe()
                }],
                end: [{
                    end: oe()
                }],
                top: [{
                    top: oe()
                }],
                right: [{
                    right: oe()
                }],
                bottom: [{
                    bottom: oe()
                }],
                left: [{
                    left: oe()
                }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{
                    z: [$n, "auto", ne, te]
                }],
                basis: [{
                    basis: [ya, "full", "auto", g, ...Z()]
                }],
                "flex-direction": [{
                    flex: ["row", "row-reverse", "col", "col-reverse"]
                }],
                "flex-wrap": [{
                    flex: ["nowrap", "wrap", "wrap-reverse"]
                }],
                flex: [{
                    flex: [ye, ya, "auto", "initial", "none", te]
                }],
                grow: [{
                    grow: ["", ye, ne, te]
                }],
                shrink: [{
                    shrink: ["", ye, ne, te]
                }],
                order: [{
                    order: [$n, "first", "last", "none", ne, te]
                }],
                "grid-cols": [{
                    "grid-cols": ve()
                }],
                "col-start-end": [{
                    col: be()
                }],
                "col-start": [{
                    "col-start": de()
                }],
                "col-end": [{
                    "col-end": de()
                }],
                "grid-rows": [{
                    "grid-rows": ve()
                }],
                "row-start-end": [{
                    row: be()
                }],
                "row-start": [{
                    "row-start": de()
                }],
                "row-end": [{
                    "row-end": de()
                }],
                "grid-flow": [{
                    "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                }],
                "auto-cols": [{
                    "auto-cols": ge()
                }],
                "auto-rows": [{
                    "auto-rows": ge()
                }],
                gap: [{
                    gap: Z()
                }],
                "gap-x": [{
                    "gap-x": Z()
                }],
                "gap-y": [{
                    "gap-y": Z()
                }],
                "justify-content": [{
                    justify: [...xe(), "normal"]
                }],
                "justify-items": [{
                    "justify-items": [...ce(), "normal"]
                }],
                "justify-self": [{
                    "justify-self": ["auto", ...ce()]
                }],
                "align-content": [{
                    content: ["normal", ...xe()]
                }],
                "align-items": [{
                    items: [...ce(), {
                        baseline: ["", "last"]
                    }]
                }],
                "align-self": [{
                    self: ["auto", ...ce(), {
                        baseline: ["", "last"]
                    }]
                }],
                "place-content": [{
                    "place-content": xe()
                }],
                "place-items": [{
                    "place-items": [...ce(), "baseline"]
                }],
                "place-self": [{
                    "place-self": ["auto", ...ce()]
                }],
                p: [{
                    p: Z()
                }],
                px: [{
                    px: Z()
                }],
                py: [{
                    py: Z()
                }],
                ps: [{
                    ps: Z()
                }],
                pe: [{
                    pe: Z()
                }],
                pt: [{
                    pt: Z()
                }],
                pr: [{
                    pr: Z()
                }],
                pb: [{
                    pb: Z()
                }],
                pl: [{
                    pl: Z()
                }],
                m: [{
                    m: O()
                }],
                mx: [{
                    mx: O()
                }],
                my: [{
                    my: O()
                }],
                ms: [{
                    ms: O()
                }],
                me: [{
                    me: O()
                }],
                mt: [{
                    mt: O()
                }],
                mr: [{
                    mr: O()
                }],
                mb: [{
                    mb: O()
                }],
                ml: [{
                    ml: O()
                }],
                "space-x": [{
                    "space-x": Z()
                }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{
                    "space-y": Z()
                }],
                "space-y-reverse": ["space-y-reverse"],
                size: [{
                    size: J()
                }],
                w: [{
                    w: [g, "screen", ...J()]
                }],
                "min-w": [{
                    "min-w": [g, "screen", "none", ...J()]
                }],
                "max-w": [{
                    "max-w": [g, "screen", "none", "prose", {
                        screen: [h]
                    }, ...J()]
                }],
                h: [{
                    h: ["screen", "lh", ...J()]
                }],
                "min-h": [{
                    "min-h": ["screen", "lh", "none", ...J()]
                }],
                "max-h": [{
                    "max-h": ["screen", "lh", ...J()]
                }],
                "font-size": [{
                    text: ["base", s, Di, Nl]
                }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{
                    font: [c, ne, Ps]
                }],
                "font-stretch": [{
                    "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Js, te]
                }],
                "font-family": [{
                    font: [Rb, te, r]
                }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{
                    tracking: [u, ne, te]
                }],
                "line-clamp": [{
                    "line-clamp": [ye, "none", ne, Ps]
                }],
                leading: [{
                    leading: [d, ...Z()]
                }],
                "list-image": [{
                    "list-image": ["none", ne, te]
                }],
                "list-style-position": [{
                    list: ["inside", "outside"]
                }],
                "list-style-type": [{
                    list: ["disc", "decimal", "none", ne, te]
                }],
                "text-alignment": [{
                    text: ["left", "center", "right", "justify", "start", "end"]
                }],
                "placeholder-color": [{
                    placeholder: L()
                }],
                "text-color": [{
                    text: L()
                }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{
                    decoration: [...me(), "wavy"]
                }],
                "text-decoration-thickness": [{
                    decoration: [ye, "from-font", "auto", ne, Nl]
                }],
                "text-decoration-color": [{
                    decoration: L()
                }],
                "underline-offset": [{
                    "underline-offset": [ye, "auto", ne, te]
                }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{
                    text: ["wrap", "nowrap", "balance", "pretty"]
                }],
                indent: [{
                    indent: Z()
                }],
                "vertical-align": [{
                    align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ne, te]
                }],
                whitespace: [{
                    whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                }],
                break: [{
                    break: ["normal", "words", "all", "keep"]
                }],
                wrap: [{
                    wrap: ["break-word", "anywhere", "normal"]
                }],
                hyphens: [{
                    hyphens: ["none", "manual", "auto"]
                }],
                content: [{
                    content: ["none", ne, te]
                }],
                "bg-attachment": [{
                    bg: ["fixed", "local", "scroll"]
                }],
                "bg-clip": [{
                    "bg-clip": ["border", "padding", "content", "text"]
                }],
                "bg-origin": [{
                    "bg-origin": ["border", "padding", "content"]
                }],
                "bg-position": [{
                    bg: le()
                }],
                "bg-repeat": [{
                    bg: E()
                }],
                "bg-size": [{
                    bg: X()
                }],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{
                            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                        }, $n, ne, te],
                        radial: ["", ne, te],
                        conic: [$n, ne, te]
                    }, _b, Mb]
                }],
                "bg-color": [{
                    bg: L()
                }],
                "gradient-from-pos": [{
                    from: W()
                }],
                "gradient-via-pos": [{
                    via: W()
                }],
                "gradient-to-pos": [{
                    to: W()
                }],
                "gradient-from": [{
                    from: L()
                }],
                "gradient-via": [{
                    via: L()
                }],
                "gradient-to": [{
                    to: L()
                }],
                rounded: [{
                    rounded: $()
                }],
                "rounded-s": [{
                    "rounded-s": $()
                }],
                "rounded-e": [{
                    "rounded-e": $()
                }],
                "rounded-t": [{
                    "rounded-t": $()
                }],
                "rounded-r": [{
                    "rounded-r": $()
                }],
                "rounded-b": [{
                    "rounded-b": $()
                }],
                "rounded-l": [{
                    "rounded-l": $()
                }],
                "rounded-ss": [{
                    "rounded-ss": $()
                }],
                "rounded-se": [{
                    "rounded-se": $()
                }],
                "rounded-ee": [{
                    "rounded-ee": $()
                }],
                "rounded-es": [{
                    "rounded-es": $()
                }],
                "rounded-tl": [{
                    "rounded-tl": $()
                }],
                "rounded-tr": [{
                    "rounded-tr": $()
                }],
                "rounded-br": [{
                    "rounded-br": $()
                }],
                "rounded-bl": [{
                    "rounded-bl": $()
                }],
                "border-w": [{
                    border: I()
                }],
                "border-w-x": [{
                    "border-x": I()
                }],
                "border-w-y": [{
                    "border-y": I()
                }],
                "border-w-s": [{
                    "border-s": I()
                }],
                "border-w-e": [{
                    "border-e": I()
                }],
                "border-w-t": [{
                    "border-t": I()
                }],
                "border-w-r": [{
                    "border-r": I()
                }],
                "border-w-b": [{
                    "border-b": I()
                }],
                "border-w-l": [{
                    "border-l": I()
                }],
                "divide-x": [{
                    "divide-x": I()
                }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{
                    "divide-y": I()
                }],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{
                    border: [...me(), "hidden", "none"]
                }],
                "divide-style": [{
                    divide: [...me(), "hidden", "none"]
                }],
                "border-color": [{
                    border: L()
                }],
                "border-color-x": [{
                    "border-x": L()
                }],
                "border-color-y": [{
                    "border-y": L()
                }],
                "border-color-s": [{
                    "border-s": L()
                }],
                "border-color-e": [{
                    "border-e": L()
                }],
                "border-color-t": [{
                    "border-t": L()
                }],
                "border-color-r": [{
                    "border-r": L()
                }],
                "border-color-b": [{
                    "border-b": L()
                }],
                "border-color-l": [{
                    "border-l": L()
                }],
                "divide-color": [{
                    divide: L()
                }],
                "outline-style": [{
                    outline: [...me(), "none", "hidden"]
                }],
                "outline-offset": [{
                    "outline-offset": [ye, ne, te]
                }],
                "outline-w": [{
                    outline: ["", ye, Di, Nl]
                }],
                "outline-color": [{
                    outline: L()
                }],
                shadow: [{
                    shadow: ["", "none", b, lr, nr]
                }],
                "shadow-color": [{
                    shadow: L()
                }],
                "inset-shadow": [{
                    "inset-shadow": ["none", A, lr, nr]
                }],
                "inset-shadow-color": [{
                    "inset-shadow": L()
                }],
                "ring-w": [{
                    ring: I()
                }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{
                    ring: L()
                }],
                "ring-offset-w": [{
                    "ring-offset": [ye, Nl]
                }],
                "ring-offset-color": [{
                    "ring-offset": L()
                }],
                "inset-ring-w": [{
                    "inset-ring": I()
                }],
                "inset-ring-color": [{
                    "inset-ring": L()
                }],
                "text-shadow": [{
                    "text-shadow": ["none", T, lr, nr]
                }],
                "text-shadow-color": [{
                    "text-shadow": L()
                }],
                opacity: [{
                    opacity: [ye, ne, te]
                }],
                "mix-blend": [{
                    "mix-blend": [...ie(), "plus-darker", "plus-lighter"]
                }],
                "bg-blend": [{
                    "bg-blend": ie()
                }],
                "mask-clip": [{
                    "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
                }, "mask-no-clip"],
                "mask-composite": [{
                    mask: ["add", "subtract", "intersect", "exclude"]
                }],
                "mask-image-linear-pos": [{
                    "mask-linear": [ye]
                }],
                "mask-image-linear-from-pos": [{
                    "mask-linear-from": F()
                }],
                "mask-image-linear-to-pos": [{
                    "mask-linear-to": F()
                }],
                "mask-image-linear-from-color": [{
                    "mask-linear-from": L()
                }],
                "mask-image-linear-to-color": [{
                    "mask-linear-to": L()
                }],
                "mask-image-t-from-pos": [{
                    "mask-t-from": F()
                }],
                "mask-image-t-to-pos": [{
                    "mask-t-to": F()
                }],
                "mask-image-t-from-color": [{
                    "mask-t-from": L()
                }],
                "mask-image-t-to-color": [{
                    "mask-t-to": L()
                }],
                "mask-image-r-from-pos": [{
                    "mask-r-from": F()
                }],
                "mask-image-r-to-pos": [{
                    "mask-r-to": F()
                }],
                "mask-image-r-from-color": [{
                    "mask-r-from": L()
                }],
                "mask-image-r-to-color": [{
                    "mask-r-to": L()
                }],
                "mask-image-b-from-pos": [{
                    "mask-b-from": F()
                }],
                "mask-image-b-to-pos": [{
                    "mask-b-to": F()
                }],
                "mask-image-b-from-color": [{
                    "mask-b-from": L()
                }],
                "mask-image-b-to-color": [{
                    "mask-b-to": L()
                }],
                "mask-image-l-from-pos": [{
                    "mask-l-from": F()
                }],
                "mask-image-l-to-pos": [{
                    "mask-l-to": F()
                }],
                "mask-image-l-from-color": [{
                    "mask-l-from": L()
                }],
                "mask-image-l-to-color": [{
                    "mask-l-to": L()
                }],
                "mask-image-x-from-pos": [{
                    "mask-x-from": F()
                }],
                "mask-image-x-to-pos": [{
                    "mask-x-to": F()
                }],
                "mask-image-x-from-color": [{
                    "mask-x-from": L()
                }],
                "mask-image-x-to-color": [{
                    "mask-x-to": L()
                }],
                "mask-image-y-from-pos": [{
                    "mask-y-from": F()
                }],
                "mask-image-y-to-pos": [{
                    "mask-y-to": F()
                }],
                "mask-image-y-from-color": [{
                    "mask-y-from": L()
                }],
                "mask-image-y-to-color": [{
                    "mask-y-to": L()
                }],
                "mask-image-radial": [{
                    "mask-radial": [ne, te]
                }],
                "mask-image-radial-from-pos": [{
                    "mask-radial-from": F()
                }],
                "mask-image-radial-to-pos": [{
                    "mask-radial-to": F()
                }],
                "mask-image-radial-from-color": [{
                    "mask-radial-from": L()
                }],
                "mask-image-radial-to-color": [{
                    "mask-radial-to": L()
                }],
                "mask-image-radial-shape": [{
                    "mask-radial": ["circle", "ellipse"]
                }],
                "mask-image-radial-size": [{
                    "mask-radial": [{
                        closest: ["side", "corner"],
                        farthest: ["side", "corner"]
                    }]
                }],
                "mask-image-radial-pos": [{
                    "mask-radial-at": P()
                }],
                "mask-image-conic-pos": [{
                    "mask-conic": [ye]
                }],
                "mask-image-conic-from-pos": [{
                    "mask-conic-from": F()
                }],
                "mask-image-conic-to-pos": [{
                    "mask-conic-to": F()
                }],
                "mask-image-conic-from-color": [{
                    "mask-conic-from": L()
                }],
                "mask-image-conic-to-color": [{
                    "mask-conic-to": L()
                }],
                "mask-mode": [{
                    mask: ["alpha", "luminance", "match"]
                }],
                "mask-origin": [{
                    "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
                }],
                "mask-position": [{
                    mask: le()
                }],
                "mask-repeat": [{
                    mask: E()
                }],
                "mask-size": [{
                    mask: X()
                }],
                "mask-type": [{
                    "mask-type": ["alpha", "luminance"]
                }],
                "mask-image": [{
                    mask: ["none", ne, te]
                }],
                filter: [{
                    filter: ["", "none", ne, te]
                }],
                blur: [{
                    blur: re()
                }],
                brightness: [{
                    brightness: [ye, ne, te]
                }],
                contrast: [{
                    contrast: [ye, ne, te]
                }],
                "drop-shadow": [{
                    "drop-shadow": ["", "none", j, lr, nr]
                }],
                "drop-shadow-color": [{
                    "drop-shadow": L()
                }],
                grayscale: [{
                    grayscale: ["", ye, ne, te]
                }],
                "hue-rotate": [{
                    "hue-rotate": [ye, ne, te]
                }],
                invert: [{
                    invert: ["", ye, ne, te]
                }],
                saturate: [{
                    saturate: [ye, ne, te]
                }],
                sepia: [{
                    sepia: ["", ye, ne, te]
                }],
                "backdrop-filter": [{
                    "backdrop-filter": ["", "none", ne, te]
                }],
                "backdrop-blur": [{
                    "backdrop-blur": re()
                }],
                "backdrop-brightness": [{
                    "backdrop-brightness": [ye, ne, te]
                }],
                "backdrop-contrast": [{
                    "backdrop-contrast": [ye, ne, te]
                }],
                "backdrop-grayscale": [{
                    "backdrop-grayscale": ["", ye, ne, te]
                }],
                "backdrop-hue-rotate": [{
                    "backdrop-hue-rotate": [ye, ne, te]
                }],
                "backdrop-invert": [{
                    "backdrop-invert": ["", ye, ne, te]
                }],
                "backdrop-opacity": [{
                    "backdrop-opacity": [ye, ne, te]
                }],
                "backdrop-saturate": [{
                    "backdrop-saturate": [ye, ne, te]
                }],
                "backdrop-sepia": [{
                    "backdrop-sepia": ["", ye, ne, te]
                }],
                "border-collapse": [{
                    border: ["collapse", "separate"]
                }],
                "border-spacing": [{
                    "border-spacing": Z()
                }],
                "border-spacing-x": [{
                    "border-spacing-x": Z()
                }],
                "border-spacing-y": [{
                    "border-spacing-y": Z()
                }],
                "table-layout": [{
                    table: ["auto", "fixed"]
                }],
                caption: [{
                    caption: ["top", "bottom"]
                }],
                transition: [{
                    transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ne, te]
                }],
                "transition-behavior": [{
                    transition: ["normal", "discrete"]
                }],
                duration: [{
                    duration: [ye, "initial", ne, te]
                }],
                ease: [{
                    ease: ["linear", "initial", z, ne, te]
                }],
                delay: [{
                    delay: [ye, ne, te]
                }],
                animate: [{
                    animate: ["none", k, ne, te]
                }],
                backface: [{
                    backface: ["hidden", "visible"]
                }],
                perspective: [{
                    perspective: [w, ne, te]
                }],
                "perspective-origin": [{
                    "perspective-origin": q()
                }],
                rotate: [{
                    rotate: Re()
                }],
                "rotate-x": [{
                    "rotate-x": Re()
                }],
                "rotate-y": [{
                    "rotate-y": Re()
                }],
                "rotate-z": [{
                    "rotate-z": Re()
                }],
                scale: [{
                    scale: Te()
                }],
                "scale-x": [{
                    "scale-x": Te()
                }],
                "scale-y": [{
                    "scale-y": Te()
                }],
                "scale-z": [{
                    "scale-z": Te()
                }],
                "scale-3d": ["scale-3d"],
                skew: [{
                    skew: Ee()
                }],
                "skew-x": [{
                    "skew-x": Ee()
                }],
                "skew-y": [{
                    "skew-y": Ee()
                }],
                transform: [{
                    transform: [ne, te, "", "none", "gpu", "cpu"]
                }],
                "transform-origin": [{
                    origin: q()
                }],
                "transform-style": [{
                    transform: ["3d", "flat"]
                }],
                translate: [{
                    translate: we()
                }],
                "translate-x": [{
                    "translate-x": we()
                }],
                "translate-y": [{
                    "translate-y": we()
                }],
                "translate-z": [{
                    "translate-z": we()
                }],
                "translate-none": ["translate-none"],
                accent: [{
                    accent: L()
                }],
                appearance: [{
                    appearance: ["none", "auto"]
                }],
                "caret-color": [{
                    caret: L()
                }],
                "color-scheme": [{
                    scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
                }],
                cursor: [{
                    cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ne, te]
                }],
                "field-sizing": [{
                    "field-sizing": ["fixed", "content"]
                }],
                "pointer-events": [{
                    "pointer-events": ["auto", "none"]
                }],
                resize: [{
                    resize: ["none", "", "y", "x"]
                }],
                "scroll-behavior": [{
                    scroll: ["auto", "smooth"]
                }],
                "scroll-m": [{
                    "scroll-m": Z()
                }],
                "scroll-mx": [{
                    "scroll-mx": Z()
                }],
                "scroll-my": [{
                    "scroll-my": Z()
                }],
                "scroll-ms": [{
                    "scroll-ms": Z()
                }],
                "scroll-me": [{
                    "scroll-me": Z()
                }],
                "scroll-mt": [{
                    "scroll-mt": Z()
                }],
                "scroll-mr": [{
                    "scroll-mr": Z()
                }],
                "scroll-mb": [{
                    "scroll-mb": Z()
                }],
                "scroll-ml": [{
                    "scroll-ml": Z()
                }],
                "scroll-p": [{
                    "scroll-p": Z()
                }],
                "scroll-px": [{
                    "scroll-px": Z()
                }],
                "scroll-py": [{
                    "scroll-py": Z()
                }],
                "scroll-ps": [{
                    "scroll-ps": Z()
                }],
                "scroll-pe": [{
                    "scroll-pe": Z()
                }],
                "scroll-pt": [{
                    "scroll-pt": Z()
                }],
                "scroll-pr": [{
                    "scroll-pr": Z()
                }],
                "scroll-pb": [{
                    "scroll-pb": Z()
                }],
                "scroll-pl": [{
                    "scroll-pl": Z()
                }],
                "snap-align": [{
                    snap: ["start", "end", "center", "align-none"]
                }],
                "snap-stop": [{
                    snap: ["normal", "always"]
                }],
                "snap-type": [{
                    snap: ["none", "x", "y", "both"]
                }],
                "snap-strictness": [{
                    snap: ["mandatory", "proximity"]
                }],
                touch: [{
                    touch: ["auto", "none", "manipulation"]
                }],
                "touch-x": [{
                    "touch-pan": ["x", "left", "right"]
                }],
                "touch-y": [{
                    "touch-pan": ["y", "up", "down"]
                }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{
                    select: ["none", "text", "all", "auto"]
                }],
                "will-change": [{
                    "will-change": ["auto", "scroll", "contents", "transform", ne, te]
                }],
                fill: [{
                    fill: ["none", ...L()]
                }],
                "stroke-w": [{
                    stroke: [ye, Di, Nl, Ps]
                }],
                stroke: [{
                    stroke: ["none", ...L()]
                }],
                "forced-color-adjust": [{
                    "forced-color-adjust": ["auto", "none"]
                }]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {
                "font-size": ["leading"]
            },
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    },
    Hb = gb(Ub);

function Pe(...a) {
    return Hb(Tv(a))
}
const kb = nb("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});

function Je({
    className: a,
    variant: r,
    size: s,
    asChild: c = !1,
    ...u
}) {
    const d = c ? $y : "button";
    return f.jsx(d, {
        "data-slot": "button",
        className: Pe(kb({
            variant: r,
            size: s,
            className: a
        })),
        ...u
    })
}

function Tl({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "card",
        className: Pe("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", a),
        ...r
    })
}

function Ea({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "card-header",
        className: Pe("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", a),
        ...r
    })
}

function wa({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "card-title",
        className: Pe("leading-none font-semibold", a),
        ...r
    })
}

function kv({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "card-description",
        className: Pe("text-muted-foreground text-sm", a),
        ...r
    })
}

function Cl({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "card-content",
        className: Pe("px-6", a),
        ...r
    })
}

function ze({
    className: a,
    type: r,
    ...s
}) {
    return f.jsx("input", {
        type: r,
        "data-slot": "input",
        className: Pe("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", a),
        ...s
    })
}
var ki = Av();
const Bb = Ev(ki);
var Lb = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    Oe = Lb.reduce((a, r) => {
        const s = Ca(`Primitive.${r}`),
            c = x.forwardRef((u, d) => {
                const {
                    asChild: h,
                    ...g
                } = u, y = h ? s : r;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), f.jsx(y, {
                    ...g,
                    ref: d
                })
            });
        return c.displayName = `Primitive.${r}`, {
            ...a,
            [r]: c
        }
    }, {});

function qb(a, r) {
    a && ki.flushSync(() => a.dispatchEvent(r))
}
var Vb = "Label",
    Bv = x.forwardRef((a, r) => f.jsx(Oe.label, {
        ...a,
        ref: r,
        onMouseDown: s => {
            var u;
            s.target.closest("button, input, select, textarea") || ((u = a.onMouseDown) == null || u.call(a, s), !s.defaultPrevented && s.detail > 1 && s.preventDefault())
        }
    }));
Bv.displayName = Vb;
var Gb = Bv;

function Le({
    className: a,
    ...r
}) {
    return f.jsx(Gb, {
        "data-slot": "label",
        className: Pe("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", a),
        ...r
    })
}

function vt({
    className: a,
    ...r
}) {
    return f.jsx("textarea", {
        "data-slot": "textarea",
        className: Pe("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", a),
        ...r
    })
}

function Fh(a, [r, s]) {
    return Math.min(s, Math.max(r, a))
}

function Ve(a, r, {
    checkForDefaultPrevented: s = !0
} = {}) {
    return function(u) {
        if (a == null || a(u), s === !1 || !u.defaultPrevented) return r == null ? void 0 : r(u)
    }
}

function Yb(a, r) {
    const s = x.createContext(r),
        c = d => {
            const {
                children: h,
                ...g
            } = d, y = x.useMemo(() => g, Object.values(g));
            return f.jsx(s.Provider, {
                value: y,
                children: h
            })
        };
    c.displayName = a + "Provider";

    function u(d) {
        const h = x.useContext(s);
        if (h) return h;
        if (r !== void 0) return r;
        throw new Error(`\`${d}\` must be used within \`${a}\``)
    }
    return [c, u]
}

function Bi(a, r = []) {
    let s = [];

    function c(d, h) {
        const g = x.createContext(h),
            y = s.length;
        s = [...s, h];
        const v = A => {
            var z;
            const {
                scope: T,
                children: j,
                ...U
            } = A, w = ((z = T == null ? void 0 : T[a]) == null ? void 0 : z[y]) || g, M = x.useMemo(() => U, Object.values(U));
            return f.jsx(w.Provider, {
                value: M,
                children: j
            })
        };
        v.displayName = d + "Provider";

        function b(A, T) {
            var w;
            const j = ((w = T == null ? void 0 : T[a]) == null ? void 0 : w[y]) || g,
                U = x.useContext(j);
            if (U) return U;
            if (h !== void 0) return h;
            throw new Error(`\`${A}\` must be used within \`${d}\``)
        }
        return [v, b]
    }
    const u = () => {
        const d = s.map(h => x.createContext(h));
        return function(g) {
            const y = (g == null ? void 0 : g[a]) || d;
            return x.useMemo(() => ({
                [`__scope${a}`]: {
                    ...g,
                    [a]: y
                }
            }), [g, y])
        }
    };
    return u.scopeName = a, [c, Xb(u, ...r)]
}

function Xb(...a) {
    const r = a[0];
    if (a.length === 1) return r;
    const s = () => {
        const c = a.map(u => ({
            useScope: u(),
            scopeName: u.scopeName
        }));
        return function(d) {
            const h = c.reduce((g, {
                useScope: y,
                scopeName: v
            }) => {
                const A = y(d)[`__scope${v}`];
                return {
                    ...g,
                    ...A
                }
            }, {});
            return x.useMemo(() => ({
                [`__scope${r.scopeName}`]: h
            }), [h])
        }
    };
    return s.scopeName = r.scopeName, s
}

function Qb(a) {
    const r = a + "CollectionProvider",
        [s, c] = Bi(r),
        [u, d] = s(r, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        h = w => {
            const {
                scope: M,
                children: z
            } = w, k = Wn.useRef(null), B = Wn.useRef(new Map).current;
            return f.jsx(u, {
                scope: M,
                itemMap: B,
                collectionRef: k,
                children: z
            })
        };
    h.displayName = r;
    const g = a + "CollectionSlot",
        y = Ca(g),
        v = Wn.forwardRef((w, M) => {
            const {
                scope: z,
                children: k
            } = w, B = d(g, z), P = Xe(M, B.collectionRef);
            return f.jsx(y, {
                ref: P,
                children: k
            })
        });
    v.displayName = g;
    const b = a + "CollectionItemSlot",
        A = "data-radix-collection-item",
        T = Ca(b),
        j = Wn.forwardRef((w, M) => {
            const {
                scope: z,
                children: k,
                ...B
            } = w, P = Wn.useRef(null), q = Xe(M, P), V = d(b, z);
            return Wn.useEffect(() => (V.itemMap.set(P, {
                ref: P,
                ...B
            }), () => void V.itemMap.delete(P))), f.jsx(T, {
                [A]: "",
                ref: q,
                children: k
            })
        });
    j.displayName = b;

    function U(w) {
        const M = d(a + "CollectionConsumer", w);
        return Wn.useCallback(() => {
            const k = M.collectionRef.current;
            if (!k) return [];
            const B = Array.from(k.querySelectorAll(`[${A}]`));
            return Array.from(M.itemMap.values()).sort((V, Y) => B.indexOf(V.ref.current) - B.indexOf(Y.ref.current))
        }, [M.collectionRef, M.itemMap])
    }
    return [{
        Provider: h,
        Slot: v,
        ItemSlot: j
    }, U, c]
}
var Zb = x.createContext(void 0);

function Kb(a) {
    const r = x.useContext(Zb);
    return a || r || "ltr"
}

function jl(a) {
    const r = x.useRef(a);
    return x.useEffect(() => {
        r.current = a
    }), x.useMemo(() => (...s) => {
        var c;
        return (c = r.current) == null ? void 0 : c.call(r, ...s)
    }, [])
}

function Jb(a, r = globalThis == null ? void 0 : globalThis.document) {
    const s = jl(a);
    x.useEffect(() => {
        const c = u => {
            u.key === "Escape" && s(u)
        };
        return r.addEventListener("keydown", c, {
            capture: !0
        }), () => r.removeEventListener("keydown", c, {
            capture: !0
        })
    }, [s, r])
}
var Pb = "DismissableLayer",
    uu = "dismissableLayer.update",
    $b = "dismissableLayer.pointerDownOutside",
    Wb = "dismissableLayer.focusOutside",
    Ih, Lv = x.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Au = x.forwardRef((a, r) => {
        const {
            disableOutsidePointerEvents: s = !1,
            onEscapeKeyDown: c,
            onPointerDownOutside: u,
            onFocusOutside: d,
            onInteractOutside: h,
            onDismiss: g,
            ...y
        } = a, v = x.useContext(Lv), [b, A] = x.useState(null), T = (b == null ? void 0 : b.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, j] = x.useState({}), U = Xe(r, Y => A(Y)), w = Array.from(v.layers), [M] = [...v.layersWithOutsidePointerEventsDisabled].slice(-1), z = w.indexOf(M), k = b ? w.indexOf(b) : -1, B = v.layersWithOutsidePointerEventsDisabled.size > 0, P = k >= z, q = ex(Y => {
            const Z = Y.target,
                oe = [...v.branches].some(ve => ve.contains(Z));
            !P || oe || (u == null || u(Y), h == null || h(Y), Y.defaultPrevented || g == null || g())
        }, T), V = tx(Y => {
            const Z = Y.target;
            [...v.branches].some(ve => ve.contains(Z)) || (d == null || d(Y), h == null || h(Y), Y.defaultPrevented || g == null || g())
        }, T);
        return Jb(Y => {
            k === v.layers.size - 1 && (c == null || c(Y), !Y.defaultPrevented && g && (Y.preventDefault(), g()))
        }, T), x.useEffect(() => {
            if (b) return s && (v.layersWithOutsidePointerEventsDisabled.size === 0 && (Ih = T.body.style.pointerEvents, T.body.style.pointerEvents = "none"), v.layersWithOutsidePointerEventsDisabled.add(b)), v.layers.add(b), ev(), () => {
                s && v.layersWithOutsidePointerEventsDisabled.size === 1 && (T.body.style.pointerEvents = Ih)
            }
        }, [b, T, s, v]), x.useEffect(() => () => {
            b && (v.layers.delete(b), v.layersWithOutsidePointerEventsDisabled.delete(b), ev())
        }, [b, v]), x.useEffect(() => {
            const Y = () => j({});
            return document.addEventListener(uu, Y), () => document.removeEventListener(uu, Y)
        }, []), f.jsx(Oe.div, {
            ...y,
            ref: U,
            style: {
                pointerEvents: B ? P ? "auto" : "none" : void 0,
                ...a.style
            },
            onFocusCapture: Ve(a.onFocusCapture, V.onFocusCapture),
            onBlurCapture: Ve(a.onBlurCapture, V.onBlurCapture),
            onPointerDownCapture: Ve(a.onPointerDownCapture, q.onPointerDownCapture)
        })
    });
Au.displayName = Pb;
var Fb = "DismissableLayerBranch",
    Ib = x.forwardRef((a, r) => {
        const s = x.useContext(Lv),
            c = x.useRef(null),
            u = Xe(r, c);
        return x.useEffect(() => {
            const d = c.current;
            if (d) return s.branches.add(d), () => {
                s.branches.delete(d)
            }
        }, [s.branches]), f.jsx(Oe.div, {
            ...a,
            ref: u
        })
    });
Ib.displayName = Fb;

function ex(a, r = globalThis == null ? void 0 : globalThis.document) {
    const s = jl(a),
        c = x.useRef(!1),
        u = x.useRef(() => {});
    return x.useEffect(() => {
        const d = g => {
                if (g.target && !c.current) {
                    let y = function() {
                        qv($b, s, v, {
                            discrete: !0
                        })
                    };
                    const v = {
                        originalEvent: g
                    };
                    g.pointerType === "touch" ? (r.removeEventListener("click", u.current), u.current = y, r.addEventListener("click", u.current, {
                        once: !0
                    })) : y()
                } else r.removeEventListener("click", u.current);
                c.current = !1
            },
            h = window.setTimeout(() => {
                r.addEventListener("pointerdown", d)
            }, 0);
        return () => {
            window.clearTimeout(h), r.removeEventListener("pointerdown", d), r.removeEventListener("click", u.current)
        }
    }, [r, s]), {
        onPointerDownCapture: () => c.current = !0
    }
}

function tx(a, r = globalThis == null ? void 0 : globalThis.document) {
    const s = jl(a),
        c = x.useRef(!1);
    return x.useEffect(() => {
        const u = d => {
            d.target && !c.current && qv(Wb, s, {
                originalEvent: d
            }, {
                discrete: !1
            })
        };
        return r.addEventListener("focusin", u), () => r.removeEventListener("focusin", u)
    }, [r, s]), {
        onFocusCapture: () => c.current = !0,
        onBlurCapture: () => c.current = !1
    }
}

function ev() {
    const a = new CustomEvent(uu);
    document.dispatchEvent(a)
}

function qv(a, r, s, {
    discrete: c
}) {
    const u = s.originalEvent.target,
        d = new CustomEvent(a, {
            bubbles: !1,
            cancelable: !0,
            detail: s
        });
    r && u.addEventListener(a, r, {
        once: !0
    }), c ? qb(u, d) : u.dispatchEvent(d)
}
var $s = 0;

function Vv() {
    x.useEffect(() => {
        const a = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", a[0] ?? tv()), document.body.insertAdjacentElement("beforeend", a[1] ?? tv()), $s++, () => {
            $s === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), $s--
        }
    }, [])
}

function tv() {
    const a = document.createElement("span");
    return a.setAttribute("data-radix-focus-guard", ""), a.tabIndex = 0, a.style.outline = "none", a.style.opacity = "0", a.style.position = "fixed", a.style.pointerEvents = "none", a
}
var Ws = "focusScope.autoFocusOnMount",
    Fs = "focusScope.autoFocusOnUnmount",
    nv = {
        bubbles: !1,
        cancelable: !0
    },
    nx = "FocusScope",
    Nu = x.forwardRef((a, r) => {
        const {
            loop: s = !1,
            trapped: c = !1,
            onMountAutoFocus: u,
            onUnmountAutoFocus: d,
            ...h
        } = a, [g, y] = x.useState(null), v = jl(u), b = jl(d), A = x.useRef(null), T = Xe(r, w => y(w)), j = x.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        x.useEffect(() => {
            if (c) {
                let w = function(B) {
                        if (j.paused || !g) return;
                        const P = B.target;
                        g.contains(P) ? A.current = P : Fn(A.current, {
                            select: !0
                        })
                    },
                    M = function(B) {
                        if (j.paused || !g) return;
                        const P = B.relatedTarget;
                        P !== null && (g.contains(P) || Fn(A.current, {
                            select: !0
                        }))
                    },
                    z = function(B) {
                        if (document.activeElement === document.body)
                            for (const q of B) q.removedNodes.length > 0 && Fn(g)
                    };
                document.addEventListener("focusin", w), document.addEventListener("focusout", M);
                const k = new MutationObserver(z);
                return g && k.observe(g, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", w), document.removeEventListener("focusout", M), k.disconnect()
                }
            }
        }, [c, g, j.paused]), x.useEffect(() => {
            if (g) {
                av.add(j);
                const w = document.activeElement;
                if (!g.contains(w)) {
                    const z = new CustomEvent(Ws, nv);
                    g.addEventListener(Ws, v), g.dispatchEvent(z), z.defaultPrevented || (lx(cx(Gv(g)), {
                        select: !0
                    }), document.activeElement === w && Fn(g))
                }
                return () => {
                    g.removeEventListener(Ws, v), setTimeout(() => {
                        const z = new CustomEvent(Fs, nv);
                        g.addEventListener(Fs, b), g.dispatchEvent(z), z.defaultPrevented || Fn(w ?? document.body, {
                            select: !0
                        }), g.removeEventListener(Fs, b), av.remove(j)
                    }, 0)
                }
            }
        }, [g, v, b, j]);
        const U = x.useCallback(w => {
            if (!s && !c || j.paused) return;
            const M = w.key === "Tab" && !w.altKey && !w.ctrlKey && !w.metaKey,
                z = document.activeElement;
            if (M && z) {
                const k = w.currentTarget,
                    [B, P] = ax(k);
                B && P ? !w.shiftKey && z === P ? (w.preventDefault(), s && Fn(B, {
                    select: !0
                })) : w.shiftKey && z === B && (w.preventDefault(), s && Fn(P, {
                    select: !0
                })) : z === k && w.preventDefault()
            }
        }, [s, c, j.paused]);
        return f.jsx(Oe.div, {
            tabIndex: -1,
            ...h,
            ref: T,
            onKeyDown: U
        })
    });
Nu.displayName = nx;

function lx(a, {
    select: r = !1
} = {}) {
    const s = document.activeElement;
    for (const c of a)
        if (Fn(c, {
                select: r
            }), document.activeElement !== s) return
}

function ax(a) {
    const r = Gv(a),
        s = lv(r, a),
        c = lv(r.reverse(), a);
    return [s, c]
}

function Gv(a) {
    const r = [],
        s = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
            acceptNode: c => {
                const u = c.tagName === "INPUT" && c.type === "hidden";
                return c.disabled || c.hidden || u ? NodeFilter.FILTER_SKIP : c.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; s.nextNode();) r.push(s.currentNode);
    return r
}

function lv(a, r) {
    for (const s of a)
        if (!ix(s, {
                upTo: r
            })) return s
}

function ix(a, {
    upTo: r
}) {
    if (getComputedStyle(a).visibility === "hidden") return !0;
    for (; a;) {
        if (r !== void 0 && a === r) return !1;
        if (getComputedStyle(a).display === "none") return !0;
        a = a.parentElement
    }
    return !1
}

function ox(a) {
    return a instanceof HTMLInputElement && "select" in a
}

function Fn(a, {
    select: r = !1
} = {}) {
    if (a && a.focus) {
        const s = document.activeElement;
        a.focus({
            preventScroll: !0
        }), a !== s && ox(a) && r && a.select()
    }
}
var av = rx();

function rx() {
    let a = [];
    return {
        add(r) {
            const s = a[0];
            r !== s && (s == null || s.pause()), a = iv(a, r), a.unshift(r)
        },
        remove(r) {
            var s;
            a = iv(a, r), (s = a[0]) == null || s.resume()
        }
    }
}

function iv(a, r) {
    const s = [...a],
        c = s.indexOf(r);
    return c !== -1 && s.splice(c, 1), s
}

function cx(a) {
    return a.filter(r => r.tagName !== "A")
}
var gt = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {},
    sx = wv[" useId ".trim().toString()] || (() => {}),
    ux = 0;

function Aa(a) {
    const [r, s] = x.useState(sx());
    return gt(() => {
        s(c => c ?? String(ux++))
    }, [a]), a || (r ? `radix-${r}` : "")
}
const fx = ["top", "right", "bottom", "left"],
    el = Math.min,
    Dt = Math.max,
    hr = Math.round,
    ar = Math.floor,
    ln = a => ({
        x: a,
        y: a
    }),
    dx = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    mx = {
        start: "end",
        end: "start"
    };

function fu(a, r, s) {
    return Dt(a, el(r, s))
}

function An(a, r) {
    return typeof a == "function" ? a(r) : a
}

function Nn(a) {
    return a.split("-")[0]
}

function Oa(a) {
    return a.split("-")[1]
}

function Tu(a) {
    return a === "x" ? "y" : "x"
}

function Cu(a) {
    return a === "y" ? "height" : "width"
}

function wn(a) {
    return ["top", "bottom"].includes(Nn(a)) ? "y" : "x"
}

function ju(a) {
    return Tu(wn(a))
}

function hx(a, r, s) {
    s === void 0 && (s = !1);
    const c = Oa(a),
        u = ju(a),
        d = Cu(u);
    let h = u === "x" ? c === (s ? "end" : "start") ? "right" : "left" : c === "start" ? "bottom" : "top";
    return r.reference[d] > r.floating[d] && (h = vr(h)), [h, vr(h)]
}

function vx(a) {
    const r = vr(a);
    return [du(a), r, du(r)]
}

function du(a) {
    return a.replace(/start|end/g, r => mx[r])
}

function gx(a, r, s) {
    const c = ["left", "right"],
        u = ["right", "left"],
        d = ["top", "bottom"],
        h = ["bottom", "top"];
    switch (a) {
        case "top":
        case "bottom":
            return s ? r ? u : c : r ? c : u;
        case "left":
        case "right":
            return r ? d : h;
        default:
            return []
    }
}

function px(a, r, s, c) {
    const u = Oa(a);
    let d = gx(Nn(a), s === "start", c);
    return u && (d = d.map(h => h + "-" + u), r && (d = d.concat(d.map(du)))), d
}

function vr(a) {
    return a.replace(/left|right|bottom|top/g, r => dx[r])
}

function yx(a) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...a
    }
}

function Yv(a) {
    return typeof a != "number" ? yx(a) : {
        top: a,
        right: a,
        bottom: a,
        left: a
    }
}

function gr(a) {
    const {
        x: r,
        y: s,
        width: c,
        height: u
    } = a;
    return {
        width: c,
        height: u,
        top: s,
        left: r,
        right: r + c,
        bottom: s + u,
        x: r,
        y: s
    }
}

function ov(a, r, s) {
    let {
        reference: c,
        floating: u
    } = a;
    const d = wn(r),
        h = ju(r),
        g = Cu(h),
        y = Nn(r),
        v = d === "y",
        b = c.x + c.width / 2 - u.width / 2,
        A = c.y + c.height / 2 - u.height / 2,
        T = c[g] / 2 - u[g] / 2;
    let j;
    switch (y) {
        case "top":
            j = {
                x: b,
                y: c.y - u.height
            };
            break;
        case "bottom":
            j = {
                x: b,
                y: c.y + c.height
            };
            break;
        case "right":
            j = {
                x: c.x + c.width,
                y: A
            };
            break;
        case "left":
            j = {
                x: c.x - u.width,
                y: A
            };
            break;
        default:
            j = {
                x: c.x,
                y: c.y
            }
    }
    switch (Oa(r)) {
        case "start":
            j[h] -= T * (s && v ? -1 : 1);
            break;
        case "end":
            j[h] += T * (s && v ? -1 : 1);
            break
    }
    return j
}
const bx = async (a, r, s) => {
    const {
        placement: c = "bottom",
        strategy: u = "absolute",
        middleware: d = [],
        platform: h
    } = s, g = d.filter(Boolean), y = await (h.isRTL == null ? void 0 : h.isRTL(r));
    let v = await h.getElementRects({
            reference: a,
            floating: r,
            strategy: u
        }),
        {
            x: b,
            y: A
        } = ov(v, c, y),
        T = c,
        j = {},
        U = 0;
    for (let w = 0; w < g.length; w++) {
        const {
            name: M,
            fn: z
        } = g[w], {
            x: k,
            y: B,
            data: P,
            reset: q
        } = await z({
            x: b,
            y: A,
            initialPlacement: c,
            placement: T,
            strategy: u,
            middlewareData: j,
            rects: v,
            platform: h,
            elements: {
                reference: a,
                floating: r
            }
        });
        b = k ?? b, A = B ?? A, j = {
            ...j,
            [M]: {
                ...j[M],
                ...P
            }
        }, q && U <= 50 && (U++, typeof q == "object" && (q.placement && (T = q.placement), q.rects && (v = q.rects === !0 ? await h.getElementRects({
            reference: a,
            floating: r,
            strategy: u
        }) : q.rects), {
            x: b,
            y: A
        } = ov(v, T, y)), w = -1)
    }
    return {
        x: b,
        y: A,
        placement: T,
        strategy: u,
        middlewareData: j
    }
};
async function Ui(a, r) {
    var s;
    r === void 0 && (r = {});
    const {
        x: c,
        y: u,
        platform: d,
        rects: h,
        elements: g,
        strategy: y
    } = a, {
        boundary: v = "clippingAncestors",
        rootBoundary: b = "viewport",
        elementContext: A = "floating",
        altBoundary: T = !1,
        padding: j = 0
    } = An(r, a), U = Yv(j), M = g[T ? A === "floating" ? "reference" : "floating" : A], z = gr(await d.getClippingRect({
        element: (s = await (d.isElement == null ? void 0 : d.isElement(M))) == null || s ? M : M.contextElement || await (d.getDocumentElement == null ? void 0 : d.getDocumentElement(g.floating)),
        boundary: v,
        rootBoundary: b,
        strategy: y
    })), k = A === "floating" ? {
        x: c,
        y: u,
        width: h.floating.width,
        height: h.floating.height
    } : h.reference, B = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(g.floating)), P = await (d.isElement == null ? void 0 : d.isElement(B)) ? await (d.getScale == null ? void 0 : d.getScale(B)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, q = gr(d.convertOffsetParentRelativeRectToViewportRelativeRect ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: g,
        rect: k,
        offsetParent: B,
        strategy: y
    }) : k);
    return {
        top: (z.top - q.top + U.top) / P.y,
        bottom: (q.bottom - z.bottom + U.bottom) / P.y,
        left: (z.left - q.left + U.left) / P.x,
        right: (q.right - z.right + U.right) / P.x
    }
}
const xx = a => ({
        name: "arrow",
        options: a,
        async fn(r) {
            const {
                x: s,
                y: c,
                placement: u,
                rects: d,
                platform: h,
                elements: g,
                middlewareData: y
            } = r, {
                element: v,
                padding: b = 0
            } = An(a, r) || {};
            if (v == null) return {};
            const A = Yv(b),
                T = {
                    x: s,
                    y: c
                },
                j = ju(u),
                U = Cu(j),
                w = await h.getDimensions(v),
                M = j === "y",
                z = M ? "top" : "left",
                k = M ? "bottom" : "right",
                B = M ? "clientHeight" : "clientWidth",
                P = d.reference[U] + d.reference[j] - T[j] - d.floating[U],
                q = T[j] - d.reference[j],
                V = await (h.getOffsetParent == null ? void 0 : h.getOffsetParent(v));
            let Y = V ? V[B] : 0;
            (!Y || !await (h.isElement == null ? void 0 : h.isElement(V))) && (Y = g.floating[B] || d.floating[U]);
            const Z = P / 2 - q / 2,
                oe = Y / 2 - w[U] / 2 - 1,
                ve = el(A[z], oe),
                be = el(A[k], oe),
                de = ve,
                ge = Y - w[U] - be,
                xe = Y / 2 - w[U] / 2 + Z,
                ce = fu(de, xe, ge),
                O = !y.arrow && Oa(u) != null && xe !== ce && d.reference[U] / 2 - (xe < de ? ve : be) - w[U] / 2 < 0,
                J = O ? xe < de ? xe - de : xe - ge : 0;
            return {
                [j]: T[j] + J,
                data: {
                    [j]: ce,
                    centerOffset: xe - ce - J,
                    ...O && {
                        alignmentOffset: J
                    }
                },
                reset: O
            }
        }
    }),
    Sx = function(a) {
        return a === void 0 && (a = {}), {
            name: "flip",
            options: a,
            async fn(r) {
                var s, c;
                const {
                    placement: u,
                    middlewareData: d,
                    rects: h,
                    initialPlacement: g,
                    platform: y,
                    elements: v
                } = r, {
                    mainAxis: b = !0,
                    crossAxis: A = !0,
                    fallbackPlacements: T,
                    fallbackStrategy: j = "bestFit",
                    fallbackAxisSideDirection: U = "none",
                    flipAlignment: w = !0,
                    ...M
                } = An(a, r);
                if ((s = d.arrow) != null && s.alignmentOffset) return {};
                const z = Nn(u),
                    k = wn(g),
                    B = Nn(g) === g,
                    P = await (y.isRTL == null ? void 0 : y.isRTL(v.floating)),
                    q = T || (B || !w ? [vr(g)] : vx(g)),
                    V = U !== "none";
                !T && V && q.push(...px(g, w, U, P));
                const Y = [g, ...q],
                    Z = await Ui(r, M),
                    oe = [];
                let ve = ((c = d.flip) == null ? void 0 : c.overflows) || [];
                if (b && oe.push(Z[z]), A) {
                    const ce = hx(u, h, P);
                    oe.push(Z[ce[0]], Z[ce[1]])
                }
                if (ve = [...ve, {
                        placement: u,
                        overflows: oe
                    }], !oe.every(ce => ce <= 0)) {
                    var be, de;
                    const ce = (((be = d.flip) == null ? void 0 : be.index) || 0) + 1,
                        O = Y[ce];
                    if (O) {
                        var ge;
                        const L = A === "alignment" ? k !== wn(O) : !1,
                            le = ((ge = ve[0]) == null ? void 0 : ge.overflows[0]) > 0;
                        if (!L || le) return {
                            data: {
                                index: ce,
                                overflows: ve
                            },
                            reset: {
                                placement: O
                            }
                        }
                    }
                    let J = (de = ve.filter(L => L.overflows[0] <= 0).sort((L, le) => L.overflows[1] - le.overflows[1])[0]) == null ? void 0 : de.placement;
                    if (!J) switch (j) {
                        case "bestFit": {
                            var xe;
                            const L = (xe = ve.filter(le => {
                                if (V) {
                                    const E = wn(le.placement);
                                    return E === k || E === "y"
                                }
                                return !0
                            }).map(le => [le.placement, le.overflows.filter(E => E > 0).reduce((E, X) => E + X, 0)]).sort((le, E) => le[1] - E[1])[0]) == null ? void 0 : xe[0];
                            L && (J = L);
                            break
                        }
                        case "initialPlacement":
                            J = g;
                            break
                    }
                    if (u !== J) return {
                        reset: {
                            placement: J
                        }
                    }
                }
                return {}
            }
        }
    };

function rv(a, r) {
    return {
        top: a.top - r.height,
        right: a.right - r.width,
        bottom: a.bottom - r.height,
        left: a.left - r.width
    }
}

function cv(a) {
    return fx.some(r => a[r] >= 0)
}
const Ex = function(a) {
    return a === void 0 && (a = {}), {
        name: "hide",
        options: a,
        async fn(r) {
            const {
                rects: s
            } = r, {
                strategy: c = "referenceHidden",
                ...u
            } = An(a, r);
            switch (c) {
                case "referenceHidden": {
                    const d = await Ui(r, {
                            ...u,
                            elementContext: "reference"
                        }),
                        h = rv(d, s.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: h,
                            referenceHidden: cv(h)
                        }
                    }
                }
                case "escaped": {
                    const d = await Ui(r, {
                            ...u,
                            altBoundary: !0
                        }),
                        h = rv(d, s.floating);
                    return {
                        data: {
                            escapedOffsets: h,
                            escaped: cv(h)
                        }
                    }
                }
                default:
                    return {}
            }
        }
    }
};
async function wx(a, r) {
    const {
        placement: s,
        platform: c,
        elements: u
    } = a, d = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)), h = Nn(s), g = Oa(s), y = wn(s) === "y", v = ["left", "top"].includes(h) ? -1 : 1, b = d && y ? -1 : 1, A = An(r, a);
    let {
        mainAxis: T,
        crossAxis: j,
        alignmentAxis: U
    } = typeof A == "number" ? {
        mainAxis: A,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: A.mainAxis || 0,
        crossAxis: A.crossAxis || 0,
        alignmentAxis: A.alignmentAxis
    };
    return g && typeof U == "number" && (j = g === "end" ? U * -1 : U), y ? {
        x: j * b,
        y: T * v
    } : {
        x: T * v,
        y: j * b
    }
}
const Ax = function(a) {
        return a === void 0 && (a = 0), {
            name: "offset",
            options: a,
            async fn(r) {
                var s, c;
                const {
                    x: u,
                    y: d,
                    placement: h,
                    middlewareData: g
                } = r, y = await wx(r, a);
                return h === ((s = g.offset) == null ? void 0 : s.placement) && (c = g.arrow) != null && c.alignmentOffset ? {} : {
                    x: u + y.x,
                    y: d + y.y,
                    data: {
                        ...y,
                        placement: h
                    }
                }
            }
        }
    },
    Nx = function(a) {
        return a === void 0 && (a = {}), {
            name: "shift",
            options: a,
            async fn(r) {
                const {
                    x: s,
                    y: c,
                    placement: u
                } = r, {
                    mainAxis: d = !0,
                    crossAxis: h = !1,
                    limiter: g = {
                        fn: M => {
                            let {
                                x: z,
                                y: k
                            } = M;
                            return {
                                x: z,
                                y: k
                            }
                        }
                    },
                    ...y
                } = An(a, r), v = {
                    x: s,
                    y: c
                }, b = await Ui(r, y), A = wn(Nn(u)), T = Tu(A);
                let j = v[T],
                    U = v[A];
                if (d) {
                    const M = T === "y" ? "top" : "left",
                        z = T === "y" ? "bottom" : "right",
                        k = j + b[M],
                        B = j - b[z];
                    j = fu(k, j, B)
                }
                if (h) {
                    const M = A === "y" ? "top" : "left",
                        z = A === "y" ? "bottom" : "right",
                        k = U + b[M],
                        B = U - b[z];
                    U = fu(k, U, B)
                }
                const w = g.fn({
                    ...r,
                    [T]: j,
                    [A]: U
                });
                return {
                    ...w,
                    data: {
                        x: w.x - s,
                        y: w.y - c,
                        enabled: {
                            [T]: d,
                            [A]: h
                        }
                    }
                }
            }
        }
    },
    Tx = function(a) {
        return a === void 0 && (a = {}), {
            options: a,
            fn(r) {
                const {
                    x: s,
                    y: c,
                    placement: u,
                    rects: d,
                    middlewareData: h
                } = r, {
                    offset: g = 0,
                    mainAxis: y = !0,
                    crossAxis: v = !0
                } = An(a, r), b = {
                    x: s,
                    y: c
                }, A = wn(u), T = Tu(A);
                let j = b[T],
                    U = b[A];
                const w = An(g, r),
                    M = typeof w == "number" ? {
                        mainAxis: w,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...w
                    };
                if (y) {
                    const B = T === "y" ? "height" : "width",
                        P = d.reference[T] - d.floating[B] + M.mainAxis,
                        q = d.reference[T] + d.reference[B] - M.mainAxis;
                    j < P ? j = P : j > q && (j = q)
                }
                if (v) {
                    var z, k;
                    const B = T === "y" ? "width" : "height",
                        P = ["top", "left"].includes(Nn(u)),
                        q = d.reference[A] - d.floating[B] + (P && ((z = h.offset) == null ? void 0 : z[A]) || 0) + (P ? 0 : M.crossAxis),
                        V = d.reference[A] + d.reference[B] + (P ? 0 : ((k = h.offset) == null ? void 0 : k[A]) || 0) - (P ? M.crossAxis : 0);
                    U < q ? U = q : U > V && (U = V)
                }
                return {
                    [T]: j,
                    [A]: U
                }
            }
        }
    },
    Cx = function(a) {
        return a === void 0 && (a = {}), {
            name: "size",
            options: a,
            async fn(r) {
                var s, c;
                const {
                    placement: u,
                    rects: d,
                    platform: h,
                    elements: g
                } = r, {
                    apply: y = () => {},
                    ...v
                } = An(a, r), b = await Ui(r, v), A = Nn(u), T = Oa(u), j = wn(u) === "y", {
                    width: U,
                    height: w
                } = d.floating;
                let M, z;
                A === "top" || A === "bottom" ? (M = A, z = T === (await (h.isRTL == null ? void 0 : h.isRTL(g.floating)) ? "start" : "end") ? "left" : "right") : (z = A, M = T === "end" ? "top" : "bottom");
                const k = w - b.top - b.bottom,
                    B = U - b.left - b.right,
                    P = el(w - b[M], k),
                    q = el(U - b[z], B),
                    V = !r.middlewareData.shift;
                let Y = P,
                    Z = q;
                if ((s = r.middlewareData.shift) != null && s.enabled.x && (Z = B), (c = r.middlewareData.shift) != null && c.enabled.y && (Y = k), V && !T) {
                    const ve = Dt(b.left, 0),
                        be = Dt(b.right, 0),
                        de = Dt(b.top, 0),
                        ge = Dt(b.bottom, 0);
                    j ? Z = U - 2 * (ve !== 0 || be !== 0 ? ve + be : Dt(b.left, b.right)) : Y = w - 2 * (de !== 0 || ge !== 0 ? de + ge : Dt(b.top, b.bottom))
                }
                await y({
                    ...r,
                    availableWidth: Z,
                    availableHeight: Y
                });
                const oe = await h.getDimensions(g.floating);
                return U !== oe.width || w !== oe.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function Sr() {
    return typeof window < "u"
}

function _a(a) {
    return Xv(a) ? (a.nodeName || "").toLowerCase() : "#document"
}

function zt(a) {
    var r;
    return (a == null || (r = a.ownerDocument) == null ? void 0 : r.defaultView) || window
}

function on(a) {
    var r;
    return (r = (Xv(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : r.documentElement
}

function Xv(a) {
    return Sr() ? a instanceof Node || a instanceof zt(a).Node : !1
}

function Jt(a) {
    return Sr() ? a instanceof Element || a instanceof zt(a).Element : !1
}

function an(a) {
    return Sr() ? a instanceof HTMLElement || a instanceof zt(a).HTMLElement : !1
}

function sv(a) {
    return !Sr() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof zt(a).ShadowRoot
}

function Li(a) {
    const {
        overflow: r,
        overflowX: s,
        overflowY: c,
        display: u
    } = Pt(a);
    return /auto|scroll|overlay|hidden|clip/.test(r + c + s) && !["inline", "contents"].includes(u)
}

function jx(a) {
    return ["table", "td", "th"].includes(_a(a))
}

function Er(a) {
    return [":popover-open", ":modal"].some(r => {
        try {
            return a.matches(r)
        } catch {
            return !1
        }
    })
}

function Mu(a) {
    const r = Ru(),
        s = Jt(a) ? Pt(a) : a;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(c => s[c] ? s[c] !== "none" : !1) || (s.containerType ? s.containerType !== "normal" : !1) || !r && (s.backdropFilter ? s.backdropFilter !== "none" : !1) || !r && (s.filter ? s.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(c => (s.willChange || "").includes(c)) || ["paint", "layout", "strict", "content"].some(c => (s.contain || "").includes(c))
}

function Mx(a) {
    let r = tl(a);
    for (; an(r) && !ja(r);) {
        if (Mu(r)) return r;
        if (Er(r)) return null;
        r = tl(r)
    }
    return null
}

function Ru() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function ja(a) {
    return ["html", "body", "#document"].includes(_a(a))
}

function Pt(a) {
    return zt(a).getComputedStyle(a)
}

function wr(a) {
    return Jt(a) ? {
        scrollLeft: a.scrollLeft,
        scrollTop: a.scrollTop
    } : {
        scrollLeft: a.scrollX,
        scrollTop: a.scrollY
    }
}

function tl(a) {
    if (_a(a) === "html") return a;
    const r = a.assignedSlot || a.parentNode || sv(a) && a.host || on(a);
    return sv(r) ? r.host : r
}

function Qv(a) {
    const r = tl(a);
    return ja(r) ? a.ownerDocument ? a.ownerDocument.body : a.body : an(r) && Li(r) ? r : Qv(r)
}

function Hi(a, r, s) {
    var c;
    r === void 0 && (r = []), s === void 0 && (s = !0);
    const u = Qv(a),
        d = u === ((c = a.ownerDocument) == null ? void 0 : c.body),
        h = zt(u);
    if (d) {
        const g = mu(h);
        return r.concat(h, h.visualViewport || [], Li(u) ? u : [], g && s ? Hi(g) : [])
    }
    return r.concat(u, Hi(u, [], s))
}

function mu(a) {
    return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null
}

function Zv(a) {
    const r = Pt(a);
    let s = parseFloat(r.width) || 0,
        c = parseFloat(r.height) || 0;
    const u = an(a),
        d = u ? a.offsetWidth : s,
        h = u ? a.offsetHeight : c,
        g = hr(s) !== d || hr(c) !== h;
    return g && (s = d, c = h), {
        width: s,
        height: c,
        $: g
    }
}

function Ou(a) {
    return Jt(a) ? a : a.contextElement
}

function Na(a) {
    const r = Ou(a);
    if (!an(r)) return ln(1);
    const s = r.getBoundingClientRect(),
        {
            width: c,
            height: u,
            $: d
        } = Zv(r);
    let h = (d ? hr(s.width) : s.width) / c,
        g = (d ? hr(s.height) : s.height) / u;
    return (!h || !Number.isFinite(h)) && (h = 1), (!g || !Number.isFinite(g)) && (g = 1), {
        x: h,
        y: g
    }
}
const Rx = ln(0);

function Kv(a) {
    const r = zt(a);
    return !Ru() || !r.visualViewport ? Rx : {
        x: r.visualViewport.offsetLeft,
        y: r.visualViewport.offsetTop
    }
}

function Ox(a, r, s) {
    return r === void 0 && (r = !1), !s || r && s !== zt(a) ? !1 : r
}

function Ml(a, r, s, c) {
    r === void 0 && (r = !1), s === void 0 && (s = !1);
    const u = a.getBoundingClientRect(),
        d = Ou(a);
    let h = ln(1);
    r && (c ? Jt(c) && (h = Na(c)) : h = Na(a));
    const g = Ox(d, s, c) ? Kv(d) : ln(0);
    let y = (u.left + g.x) / h.x,
        v = (u.top + g.y) / h.y,
        b = u.width / h.x,
        A = u.height / h.y;
    if (d) {
        const T = zt(d),
            j = c && Jt(c) ? zt(c) : c;
        let U = T,
            w = mu(U);
        for (; w && c && j !== U;) {
            const M = Na(w),
                z = w.getBoundingClientRect(),
                k = Pt(w),
                B = z.left + (w.clientLeft + parseFloat(k.paddingLeft)) * M.x,
                P = z.top + (w.clientTop + parseFloat(k.paddingTop)) * M.y;
            y *= M.x, v *= M.y, b *= M.x, A *= M.y, y += B, v += P, U = zt(w), w = mu(U)
        }
    }
    return gr({
        width: b,
        height: A,
        x: y,
        y: v
    })
}

function _u(a, r) {
    const s = wr(a).scrollLeft;
    return r ? r.left + s : Ml(on(a)).left + s
}

function Jv(a, r, s) {
    s === void 0 && (s = !1);
    const c = a.getBoundingClientRect(),
        u = c.left + r.scrollLeft - (s ? 0 : _u(a, c)),
        d = c.top + r.scrollTop;
    return {
        x: u,
        y: d
    }
}

function _x(a) {
    let {
        elements: r,
        rect: s,
        offsetParent: c,
        strategy: u
    } = a;
    const d = u === "fixed",
        h = on(c),
        g = r ? Er(r.floating) : !1;
    if (c === h || g && d) return s;
    let y = {
            scrollLeft: 0,
            scrollTop: 0
        },
        v = ln(1);
    const b = ln(0),
        A = an(c);
    if ((A || !A && !d) && ((_a(c) !== "body" || Li(h)) && (y = wr(c)), an(c))) {
        const j = Ml(c);
        v = Na(c), b.x = j.x + c.clientLeft, b.y = j.y + c.clientTop
    }
    const T = h && !A && !d ? Jv(h, y, !0) : ln(0);
    return {
        width: s.width * v.x,
        height: s.height * v.y,
        x: s.x * v.x - y.scrollLeft * v.x + b.x + T.x,
        y: s.y * v.y - y.scrollTop * v.y + b.y + T.y
    }
}

function Dx(a) {
    return Array.from(a.getClientRects())
}

function zx(a) {
    const r = on(a),
        s = wr(a),
        c = a.ownerDocument.body,
        u = Dt(r.scrollWidth, r.clientWidth, c.scrollWidth, c.clientWidth),
        d = Dt(r.scrollHeight, r.clientHeight, c.scrollHeight, c.clientHeight);
    let h = -s.scrollLeft + _u(a);
    const g = -s.scrollTop;
    return Pt(c).direction === "rtl" && (h += Dt(r.clientWidth, c.clientWidth) - u), {
        width: u,
        height: d,
        x: h,
        y: g
    }
}

function Ux(a, r) {
    const s = zt(a),
        c = on(a),
        u = s.visualViewport;
    let d = c.clientWidth,
        h = c.clientHeight,
        g = 0,
        y = 0;
    if (u) {
        d = u.width, h = u.height;
        const v = Ru();
        (!v || v && r === "fixed") && (g = u.offsetLeft, y = u.offsetTop)
    }
    return {
        width: d,
        height: h,
        x: g,
        y
    }
}

function Hx(a, r) {
    const s = Ml(a, !0, r === "fixed"),
        c = s.top + a.clientTop,
        u = s.left + a.clientLeft,
        d = an(a) ? Na(a) : ln(1),
        h = a.clientWidth * d.x,
        g = a.clientHeight * d.y,
        y = u * d.x,
        v = c * d.y;
    return {
        width: h,
        height: g,
        x: y,
        y: v
    }
}

function uv(a, r, s) {
    let c;
    if (r === "viewport") c = Ux(a, s);
    else if (r === "document") c = zx(on(a));
    else if (Jt(r)) c = Hx(r, s);
    else {
        const u = Kv(a);
        c = {
            x: r.x - u.x,
            y: r.y - u.y,
            width: r.width,
            height: r.height
        }
    }
    return gr(c)
}

function Pv(a, r) {
    const s = tl(a);
    return s === r || !Jt(s) || ja(s) ? !1 : Pt(s).position === "fixed" || Pv(s, r)
}

function kx(a, r) {
    const s = r.get(a);
    if (s) return s;
    let c = Hi(a, [], !1).filter(g => Jt(g) && _a(g) !== "body"),
        u = null;
    const d = Pt(a).position === "fixed";
    let h = d ? tl(a) : a;
    for (; Jt(h) && !ja(h);) {
        const g = Pt(h),
            y = Mu(h);
        !y && g.position === "fixed" && (u = null), (d ? !y && !u : !y && g.position === "static" && !!u && ["absolute", "fixed"].includes(u.position) || Li(h) && !y && Pv(a, h)) ? c = c.filter(b => b !== h) : u = g, h = tl(h)
    }
    return r.set(a, c), c
}

function Bx(a) {
    let {
        element: r,
        boundary: s,
        rootBoundary: c,
        strategy: u
    } = a;
    const h = [...s === "clippingAncestors" ? Er(r) ? [] : kx(r, this._c) : [].concat(s), c],
        g = h[0],
        y = h.reduce((v, b) => {
            const A = uv(r, b, u);
            return v.top = Dt(A.top, v.top), v.right = el(A.right, v.right), v.bottom = el(A.bottom, v.bottom), v.left = Dt(A.left, v.left), v
        }, uv(r, g, u));
    return {
        width: y.right - y.left,
        height: y.bottom - y.top,
        x: y.left,
        y: y.top
    }
}

function Lx(a) {
    const {
        width: r,
        height: s
    } = Zv(a);
    return {
        width: r,
        height: s
    }
}

function qx(a, r, s) {
    const c = an(r),
        u = on(r),
        d = s === "fixed",
        h = Ml(a, !0, d, r);
    let g = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const y = ln(0);

    function v() {
        y.x = _u(u)
    }
    if (c || !c && !d)
        if ((_a(r) !== "body" || Li(u)) && (g = wr(r)), c) {
            const j = Ml(r, !0, d, r);
            y.x = j.x + r.clientLeft, y.y = j.y + r.clientTop
        } else u && v();
    d && !c && u && v();
    const b = u && !c && !d ? Jv(u, g) : ln(0),
        A = h.left + g.scrollLeft - y.x - b.x,
        T = h.top + g.scrollTop - y.y - b.y;
    return {
        x: A,
        y: T,
        width: h.width,
        height: h.height
    }
}

function Is(a) {
    return Pt(a).position === "static"
}

function fv(a, r) {
    if (!an(a) || Pt(a).position === "fixed") return null;
    if (r) return r(a);
    let s = a.offsetParent;
    return on(a) === s && (s = s.ownerDocument.body), s
}

function $v(a, r) {
    const s = zt(a);
    if (Er(a)) return s;
    if (!an(a)) {
        let u = tl(a);
        for (; u && !ja(u);) {
            if (Jt(u) && !Is(u)) return u;
            u = tl(u)
        }
        return s
    }
    let c = fv(a, r);
    for (; c && jx(c) && Is(c);) c = fv(c, r);
    return c && ja(c) && Is(c) && !Mu(c) ? s : c || Mx(a) || s
}
const Vx = async function(a) {
    const r = this.getOffsetParent || $v,
        s = this.getDimensions,
        c = await s(a.floating);
    return {
        reference: qx(a.reference, await r(a.floating), a.strategy),
        floating: {
            x: 0,
            y: 0,
            width: c.width,
            height: c.height
        }
    }
};

function Gx(a) {
    return Pt(a).direction === "rtl"
}
const Yx = {
    convertOffsetParentRelativeRectToViewportRelativeRect: _x,
    getDocumentElement: on,
    getClippingRect: Bx,
    getOffsetParent: $v,
    getElementRects: Vx,
    getClientRects: Dx,
    getDimensions: Lx,
    getScale: Na,
    isElement: Jt,
    isRTL: Gx
};

function Wv(a, r) {
    return a.x === r.x && a.y === r.y && a.width === r.width && a.height === r.height
}

function Xx(a, r) {
    let s = null,
        c;
    const u = on(a);

    function d() {
        var g;
        clearTimeout(c), (g = s) == null || g.disconnect(), s = null
    }

    function h(g, y) {
        g === void 0 && (g = !1), y === void 0 && (y = 1), d();
        const v = a.getBoundingClientRect(),
            {
                left: b,
                top: A,
                width: T,
                height: j
            } = v;
        if (g || r(), !T || !j) return;
        const U = ar(A),
            w = ar(u.clientWidth - (b + T)),
            M = ar(u.clientHeight - (A + j)),
            z = ar(b),
            B = {
                rootMargin: -U + "px " + -w + "px " + -M + "px " + -z + "px",
                threshold: Dt(0, el(1, y)) || 1
            };
        let P = !0;

        function q(V) {
            const Y = V[0].intersectionRatio;
            if (Y !== y) {
                if (!P) return h();
                Y ? h(!1, Y) : c = setTimeout(() => {
                    h(!1, 1e-7)
                }, 1e3)
            }
            Y === 1 && !Wv(v, a.getBoundingClientRect()) && h(), P = !1
        }
        try {
            s = new IntersectionObserver(q, {
                ...B,
                root: u.ownerDocument
            })
        } catch {
            s = new IntersectionObserver(q, B)
        }
        s.observe(a)
    }
    return h(!0), d
}

function Qx(a, r, s, c) {
    c === void 0 && (c = {});
    const {
        ancestorScroll: u = !0,
        ancestorResize: d = !0,
        elementResize: h = typeof ResizeObserver == "function",
        layoutShift: g = typeof IntersectionObserver == "function",
        animationFrame: y = !1
    } = c, v = Ou(a), b = u || d ? [...v ? Hi(v) : [], ...Hi(r)] : [];
    b.forEach(z => {
        u && z.addEventListener("scroll", s, {
            passive: !0
        }), d && z.addEventListener("resize", s)
    });
    const A = v && g ? Xx(v, s) : null;
    let T = -1,
        j = null;
    h && (j = new ResizeObserver(z => {
        let [k] = z;
        k && k.target === v && j && (j.unobserve(r), cancelAnimationFrame(T), T = requestAnimationFrame(() => {
            var B;
            (B = j) == null || B.observe(r)
        })), s()
    }), v && !y && j.observe(v), j.observe(r));
    let U, w = y ? Ml(a) : null;
    y && M();

    function M() {
        const z = Ml(a);
        w && !Wv(w, z) && s(), w = z, U = requestAnimationFrame(M)
    }
    return s(), () => {
        var z;
        b.forEach(k => {
            u && k.removeEventListener("scroll", s), d && k.removeEventListener("resize", s)
        }), A == null || A(), (z = j) == null || z.disconnect(), j = null, y && cancelAnimationFrame(U)
    }
}
const Zx = Ax,
    Kx = Nx,
    Jx = Sx,
    Px = Cx,
    $x = Ex,
    dv = xx,
    Wx = Tx,
    Fx = (a, r, s) => {
        const c = new Map,
            u = {
                platform: Yx,
                ...s
            },
            d = {
                ...u.platform,
                _c: c
            };
        return bx(a, r, {
            ...u,
            platform: d
        })
    };
var ur = typeof document < "u" ? x.useLayoutEffect : x.useEffect;

function pr(a, r) {
    if (a === r) return !0;
    if (typeof a != typeof r) return !1;
    if (typeof a == "function" && a.toString() === r.toString()) return !0;
    let s, c, u;
    if (a && r && typeof a == "object") {
        if (Array.isArray(a)) {
            if (s = a.length, s !== r.length) return !1;
            for (c = s; c-- !== 0;)
                if (!pr(a[c], r[c])) return !1;
            return !0
        }
        if (u = Object.keys(a), s = u.length, s !== Object.keys(r).length) return !1;
        for (c = s; c-- !== 0;)
            if (!{}.hasOwnProperty.call(r, u[c])) return !1;
        for (c = s; c-- !== 0;) {
            const d = u[c];
            if (!(d === "_owner" && a.$$typeof) && !pr(a[d], r[d])) return !1
        }
        return !0
    }
    return a !== a && r !== r
}

function Fv(a) {
    return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function mv(a, r) {
    const s = Fv(a);
    return Math.round(r * s) / s
}

function eu(a) {
    const r = x.useRef(a);
    return ur(() => {
        r.current = a
    }), r
}

function Ix(a) {
    a === void 0 && (a = {});
    const {
        placement: r = "bottom",
        strategy: s = "absolute",
        middleware: c = [],
        platform: u,
        elements: {
            reference: d,
            floating: h
        } = {},
        transform: g = !0,
        whileElementsMounted: y,
        open: v
    } = a, [b, A] = x.useState({
        x: 0,
        y: 0,
        strategy: s,
        placement: r,
        middlewareData: {},
        isPositioned: !1
    }), [T, j] = x.useState(c);
    pr(T, c) || j(c);
    const [U, w] = x.useState(null), [M, z] = x.useState(null), k = x.useCallback(L => {
        L !== V.current && (V.current = L, w(L))
    }, []), B = x.useCallback(L => {
        L !== Y.current && (Y.current = L, z(L))
    }, []), P = d || U, q = h || M, V = x.useRef(null), Y = x.useRef(null), Z = x.useRef(b), oe = y != null, ve = eu(y), be = eu(u), de = eu(v), ge = x.useCallback(() => {
        if (!V.current || !Y.current) return;
        const L = {
            placement: r,
            strategy: s,
            middleware: T
        };
        be.current && (L.platform = be.current), Fx(V.current, Y.current, L).then(le => {
            const E = {
                ...le,
                isPositioned: de.current !== !1
            };
            xe.current && !pr(Z.current, E) && (Z.current = E, ki.flushSync(() => {
                A(E)
            }))
        })
    }, [T, r, s, be, de]);
    ur(() => {
        v === !1 && Z.current.isPositioned && (Z.current.isPositioned = !1, A(L => ({
            ...L,
            isPositioned: !1
        })))
    }, [v]);
    const xe = x.useRef(!1);
    ur(() => (xe.current = !0, () => {
        xe.current = !1
    }), []), ur(() => {
        if (P && (V.current = P), q && (Y.current = q), P && q) {
            if (ve.current) return ve.current(P, q, ge);
            ge()
        }
    }, [P, q, ge, ve, oe]);
    const ce = x.useMemo(() => ({
            reference: V,
            floating: Y,
            setReference: k,
            setFloating: B
        }), [k, B]),
        O = x.useMemo(() => ({
            reference: P,
            floating: q
        }), [P, q]),
        J = x.useMemo(() => {
            const L = {
                position: s,
                left: 0,
                top: 0
            };
            if (!O.floating) return L;
            const le = mv(O.floating, b.x),
                E = mv(O.floating, b.y);
            return g ? {
                ...L,
                transform: "translate(" + le + "px, " + E + "px)",
                ...Fv(O.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: s,
                left: le,
                top: E
            }
        }, [s, g, O.floating, b.x, b.y]);
    return x.useMemo(() => ({
        ...b,
        update: ge,
        refs: ce,
        elements: O,
        floatingStyles: J
    }), [b, ge, ce, O, J])
}
const e1 = a => {
        function r(s) {
            return {}.hasOwnProperty.call(s, "current")
        }
        return {
            name: "arrow",
            options: a,
            fn(s) {
                const {
                    element: c,
                    padding: u
                } = typeof a == "function" ? a(s) : a;
                return c && r(c) ? c.current != null ? dv({
                    element: c.current,
                    padding: u
                }).fn(s) : {} : c ? dv({
                    element: c,
                    padding: u
                }).fn(s) : {}
            }
        }
    },
    t1 = (a, r) => ({
        ...Zx(a),
        options: [a, r]
    }),
    n1 = (a, r) => ({
        ...Kx(a),
        options: [a, r]
    }),
    l1 = (a, r) => ({
        ...Wx(a),
        options: [a, r]
    }),
    a1 = (a, r) => ({
        ...Jx(a),
        options: [a, r]
    }),
    i1 = (a, r) => ({
        ...Px(a),
        options: [a, r]
    }),
    o1 = (a, r) => ({
        ...$x(a),
        options: [a, r]
    }),
    r1 = (a, r) => ({
        ...e1(a),
        options: [a, r]
    });
var c1 = "Arrow",
    Iv = x.forwardRef((a, r) => {
        const {
            children: s,
            width: c = 10,
            height: u = 5,
            ...d
        } = a;
        return f.jsx(Oe.svg, {
            ...d,
            ref: r,
            width: c,
            height: u,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: a.asChild ? s : f.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Iv.displayName = c1;
var s1 = Iv;

function eg(a) {
    const [r, s] = x.useState(void 0);
    return gt(() => {
        if (a) {
            s({
                width: a.offsetWidth,
                height: a.offsetHeight
            });
            const c = new ResizeObserver(u => {
                if (!Array.isArray(u) || !u.length) return;
                const d = u[0];
                let h, g;
                if ("borderBoxSize" in d) {
                    const y = d.borderBoxSize,
                        v = Array.isArray(y) ? y[0] : y;
                    h = v.inlineSize, g = v.blockSize
                } else h = a.offsetWidth, g = a.offsetHeight;
                s({
                    width: h,
                    height: g
                })
            });
            return c.observe(a, {
                box: "border-box"
            }), () => c.unobserve(a)
        } else s(void 0)
    }, [a]), r
}
var Du = "Popper",
    [tg, ng] = Bi(Du),
    [u1, lg] = tg(Du),
    ag = a => {
        const {
            __scopePopper: r,
            children: s
        } = a, [c, u] = x.useState(null);
        return f.jsx(u1, {
            scope: r,
            anchor: c,
            onAnchorChange: u,
            children: s
        })
    };
ag.displayName = Du;
var ig = "PopperAnchor",
    og = x.forwardRef((a, r) => {
        const {
            __scopePopper: s,
            virtualRef: c,
            ...u
        } = a, d = lg(ig, s), h = x.useRef(null), g = Xe(r, h);
        return x.useEffect(() => {
            d.onAnchorChange((c == null ? void 0 : c.current) || h.current)
        }), c ? null : f.jsx(Oe.div, {
            ...u,
            ref: g
        })
    });
og.displayName = ig;
var zu = "PopperContent",
    [f1, d1] = tg(zu),
    rg = x.forwardRef((a, r) => {
        var F, re, Re, Te, Ee, we;
        const {
            __scopePopper: s,
            side: c = "bottom",
            sideOffset: u = 0,
            align: d = "center",
            alignOffset: h = 0,
            arrowPadding: g = 0,
            avoidCollisions: y = !0,
            collisionBoundary: v = [],
            collisionPadding: b = 0,
            sticky: A = "partial",
            hideWhenDetached: T = !1,
            updatePositionStrategy: j = "optimized",
            onPlaced: U,
            ...w
        } = a, M = lg(zu, s), [z, k] = x.useState(null), B = Xe(r, rt => k(rt)), [P, q] = x.useState(null), V = eg(P), Y = (V == null ? void 0 : V.width) ?? 0, Z = (V == null ? void 0 : V.height) ?? 0, oe = c + (d !== "center" ? "-" + d : ""), ve = typeof b == "number" ? b : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...b
        }, be = Array.isArray(v) ? v : [v], de = be.length > 0, ge = {
            padding: ve,
            boundary: be.filter(h1),
            altBoundary: de
        }, {
            refs: xe,
            floatingStyles: ce,
            placement: O,
            isPositioned: J,
            middlewareData: L
        } = Ix({
            strategy: "fixed",
            placement: oe,
            whileElementsMounted: (...rt) => Qx(...rt, {
                animationFrame: j === "always"
            }),
            elements: {
                reference: M.anchor
            },
            middleware: [t1({
                mainAxis: u + Z,
                alignmentAxis: h
            }), y && n1({
                mainAxis: !0,
                crossAxis: !1,
                limiter: A === "partial" ? l1() : void 0,
                ...ge
            }), y && a1({
                ...ge
            }), i1({
                ...ge,
                apply: ({
                    elements: rt,
                    rects: yt,
                    availableWidth: al,
                    availableHeight: il
                }) => {
                    const {
                        width: ft,
                        height: Rr
                    } = yt.reference, ol = rt.floating.style;
                    ol.setProperty("--radix-popper-available-width", `${al}px`), ol.setProperty("--radix-popper-available-height", `${il}px`), ol.setProperty("--radix-popper-anchor-width", `${ft}px`), ol.setProperty("--radix-popper-anchor-height", `${Rr}px`)
                }
            }), P && r1({
                element: P,
                padding: g
            }), v1({
                arrowWidth: Y,
                arrowHeight: Z
            }), T && o1({
                strategy: "referenceHidden",
                ...ge
            })]
        }), [le, E] = ug(O), X = jl(U);
        gt(() => {
            J && (X == null || X())
        }, [J, X]);
        const W = (F = L.arrow) == null ? void 0 : F.x,
            $ = (re = L.arrow) == null ? void 0 : re.y,
            I = ((Re = L.arrow) == null ? void 0 : Re.centerOffset) !== 0,
            [me, ie] = x.useState();
        return gt(() => {
            z && ie(window.getComputedStyle(z).zIndex)
        }, [z]), f.jsx("div", {
            ref: xe.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
                ...ce,
                transform: J ? ce.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: me,
                "--radix-popper-transform-origin": [(Te = L.transformOrigin) == null ? void 0 : Te.x, (Ee = L.transformOrigin) == null ? void 0 : Ee.y].join(" "),
                ...((we = L.hide) == null ? void 0 : we.referenceHidden) && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: a.dir,
            children: f.jsx(f1, {
                scope: s,
                placedSide: le,
                onArrowChange: q,
                arrowX: W,
                arrowY: $,
                shouldHideArrow: I,
                children: f.jsx(Oe.div, {
                    "data-side": le,
                    "data-align": E,
                    ...w,
                    ref: B,
                    style: {
                        ...w.style,
                        animation: J ? void 0 : "none"
                    }
                })
            })
        })
    });
rg.displayName = zu;
var cg = "PopperArrow",
    m1 = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    sg = x.forwardRef(function(r, s) {
        const {
            __scopePopper: c,
            ...u
        } = r, d = d1(cg, c), h = m1[d.placedSide];
        return f.jsx("span", {
            ref: d.onArrowChange,
            style: {
                position: "absolute",
                left: d.arrowX,
                top: d.arrowY,
                [h]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                } [d.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                } [d.placedSide],
                visibility: d.shouldHideArrow ? "hidden" : void 0
            },
            children: f.jsx(s1, {
                ...u,
                ref: s,
                style: {
                    ...u.style,
                    display: "block"
                }
            })
        })
    });
sg.displayName = cg;

function h1(a) {
    return a !== null
}
var v1 = a => ({
    name: "transformOrigin",
    options: a,
    fn(r) {
        var M, z, k;
        const {
            placement: s,
            rects: c,
            middlewareData: u
        } = r, h = ((M = u.arrow) == null ? void 0 : M.centerOffset) !== 0, g = h ? 0 : a.arrowWidth, y = h ? 0 : a.arrowHeight, [v, b] = ug(s), A = {
            start: "0%",
            center: "50%",
            end: "100%"
        } [b], T = (((z = u.arrow) == null ? void 0 : z.x) ?? 0) + g / 2, j = (((k = u.arrow) == null ? void 0 : k.y) ?? 0) + y / 2;
        let U = "",
            w = "";
        return v === "bottom" ? (U = h ? A : `${T}px`, w = `${-y}px`) : v === "top" ? (U = h ? A : `${T}px`, w = `${c.floating.height+y}px`) : v === "right" ? (U = `${-y}px`, w = h ? A : `${j}px`) : v === "left" && (U = `${c.floating.width+y}px`, w = h ? A : `${j}px`), {
            data: {
                x: U,
                y: w
            }
        }
    }
});

function ug(a) {
    const [r, s = "center"] = a.split("-");
    return [r, s]
}
var g1 = ag,
    p1 = og,
    y1 = rg,
    b1 = sg,
    x1 = "Portal",
    Uu = x.forwardRef((a, r) => {
        var g;
        const {
            container: s,
            ...c
        } = a, [u, d] = x.useState(!1);
        gt(() => d(!0), []);
        const h = s || u && ((g = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : g.body);
        return h ? Bb.createPortal(f.jsx(Oe.div, {
            ...c,
            ref: r
        }), h) : null
    });
Uu.displayName = x1;
var S1 = wv[" useInsertionEffect ".trim().toString()] || gt;

function yr({
    prop: a,
    defaultProp: r,
    onChange: s = () => {},
    caller: c
}) {
    const [u, d, h] = E1({
        defaultProp: r,
        onChange: s
    }), g = a !== void 0, y = g ? a : u; {
        const b = x.useRef(a !== void 0);
        x.useEffect(() => {
            const A = b.current;
            A !== g && console.warn(`${c} is changing from ${A?"controlled":"uncontrolled"} to ${g?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), b.current = g
        }, [g, c])
    }
    const v = x.useCallback(b => {
        var A;
        if (g) {
            const T = w1(b) ? b(a) : b;
            T !== a && ((A = h.current) == null || A.call(h, T))
        } else d(b)
    }, [g, a, d, h]);
    return [y, v]
}

function E1({
    defaultProp: a,
    onChange: r
}) {
    const [s, c] = x.useState(a), u = x.useRef(s), d = x.useRef(r);
    return S1(() => {
        d.current = r
    }, [r]), x.useEffect(() => {
        var h;
        u.current !== s && ((h = d.current) == null || h.call(d, s), u.current = s)
    }, [s, u]), [s, c, d]
}

function w1(a) {
    return typeof a == "function"
}

function fg(a) {
    const r = x.useRef({
        value: a,
        previous: a
    });
    return x.useMemo(() => (r.current.value !== a && (r.current.previous = r.current.value, r.current.value = a), r.current.previous), [a])
}
var dg = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
    }),
    A1 = "VisuallyHidden",
    N1 = x.forwardRef((a, r) => f.jsx(Oe.span, {
        ...a,
        ref: r,
        style: {
            ...dg,
            ...a.style
        }
    }));
N1.displayName = A1;
var T1 = function(a) {
        if (typeof document > "u") return null;
        var r = Array.isArray(a) ? a[0] : a;
        return r.ownerDocument.body
    },
    ba = new WeakMap,
    ir = new WeakMap,
    or = {},
    tu = 0,
    mg = function(a) {
        return a && (a.host || mg(a.parentNode))
    },
    C1 = function(a, r) {
        return r.map(function(s) {
            if (a.contains(s)) return s;
            var c = mg(s);
            return c && a.contains(c) ? c : (console.error("aria-hidden", s, "in not contained inside", a, ". Doing nothing"), null)
        }).filter(function(s) {
            return !!s
        })
    },
    j1 = function(a, r, s, c) {
        var u = C1(r, Array.isArray(a) ? a : [a]);
        or[s] || (or[s] = new WeakMap);
        var d = or[s],
            h = [],
            g = new Set,
            y = new Set(u),
            v = function(A) {
                !A || g.has(A) || (g.add(A), v(A.parentNode))
            };
        u.forEach(v);
        var b = function(A) {
            !A || y.has(A) || Array.prototype.forEach.call(A.children, function(T) {
                if (g.has(T)) b(T);
                else try {
                    var j = T.getAttribute(c),
                        U = j !== null && j !== "false",
                        w = (ba.get(T) || 0) + 1,
                        M = (d.get(T) || 0) + 1;
                    ba.set(T, w), d.set(T, M), h.push(T), w === 1 && U && ir.set(T, !0), M === 1 && T.setAttribute(s, "true"), U || T.setAttribute(c, "true")
                } catch (z) {
                    console.error("aria-hidden: cannot operate on ", T, z)
                }
            })
        };
        return b(r), g.clear(), tu++,
            function() {
                h.forEach(function(A) {
                    var T = ba.get(A) - 1,
                        j = d.get(A) - 1;
                    ba.set(A, T), d.set(A, j), T || (ir.has(A) || A.removeAttribute(c), ir.delete(A)), j || A.removeAttribute(s)
                }), tu--, tu || (ba = new WeakMap, ba = new WeakMap, ir = new WeakMap, or = {})
            }
    },
    hg = function(a, r, s) {
        s === void 0 && (s = "data-aria-hidden");
        var c = Array.from(Array.isArray(a) ? a : [a]),
            u = T1(a);
        return u ? (c.push.apply(c, Array.from(u.querySelectorAll("[aria-live]"))), j1(c, u, s, "aria-hidden")) : function() {
            return null
        }
    },
    nn = function() {
        return nn = Object.assign || function(r) {
            for (var s, c = 1, u = arguments.length; c < u; c++) {
                s = arguments[c];
                for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (r[d] = s[d])
            }
            return r
        }, nn.apply(this, arguments)
    };

function vg(a, r) {
    var s = {};
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && r.indexOf(c) < 0 && (s[c] = a[c]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var u = 0, c = Object.getOwnPropertySymbols(a); u < c.length; u++) r.indexOf(c[u]) < 0 && Object.prototype.propertyIsEnumerable.call(a, c[u]) && (s[c[u]] = a[c[u]]);
    return s
}

function M1(a, r, s) {
    if (s || arguments.length === 2)
        for (var c = 0, u = r.length, d; c < u; c++)(d || !(c in r)) && (d || (d = Array.prototype.slice.call(r, 0, c)), d[c] = r[c]);
    return a.concat(d || Array.prototype.slice.call(r))
}
var fr = "right-scroll-bar-position",
    dr = "width-before-scroll-bar",
    R1 = "with-scroll-bars-hidden",
    O1 = "--removed-body-scroll-bar-size";

function nu(a, r) {
    return typeof a == "function" ? a(r) : a && (a.current = r), a
}

function _1(a, r) {
    var s = x.useState(function() {
        return {
            value: a,
            callback: r,
            facade: {
                get current() {
                    return s.value
                },
                set current(c) {
                    var u = s.value;
                    u !== c && (s.value = c, s.callback(c, u))
                }
            }
        }
    })[0];
    return s.callback = r, s.facade
}
var D1 = typeof window < "u" ? x.useLayoutEffect : x.useEffect,
    hv = new WeakMap;

function z1(a, r) {
    var s = _1(null, function(c) {
        return a.forEach(function(u) {
            return nu(u, c)
        })
    });
    return D1(function() {
        var c = hv.get(s);
        if (c) {
            var u = new Set(c),
                d = new Set(a),
                h = s.current;
            u.forEach(function(g) {
                d.has(g) || nu(g, null)
            }), d.forEach(function(g) {
                u.has(g) || nu(g, h)
            })
        }
        hv.set(s, a)
    }, [a]), s
}

function U1(a) {
    return a
}

function H1(a, r) {
    r === void 0 && (r = U1);
    var s = [],
        c = !1,
        u = {
            read: function() {
                if (c) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return s.length ? s[s.length - 1] : a
            },
            useMedium: function(d) {
                var h = r(d, c);
                return s.push(h),
                    function() {
                        s = s.filter(function(g) {
                            return g !== h
                        })
                    }
            },
            assignSyncMedium: function(d) {
                for (c = !0; s.length;) {
                    var h = s;
                    s = [], h.forEach(d)
                }
                s = {
                    push: function(g) {
                        return d(g)
                    },
                    filter: function() {
                        return s
                    }
                }
            },
            assignMedium: function(d) {
                c = !0;
                var h = [];
                if (s.length) {
                    var g = s;
                    s = [], g.forEach(d), h = s
                }
                var y = function() {
                        var b = h;
                        h = [], b.forEach(d)
                    },
                    v = function() {
                        return Promise.resolve().then(y)
                    };
                v(), s = {
                    push: function(b) {
                        h.push(b), v()
                    },
                    filter: function(b) {
                        return h = h.filter(b), s
                    }
                }
            }
        };
    return u
}

function k1(a) {
    a === void 0 && (a = {});
    var r = H1(null);
    return r.options = nn({
        async: !0,
        ssr: !1
    }, a), r
}
var gg = function(a) {
    var r = a.sideCar,
        s = vg(a, ["sideCar"]);
    if (!r) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var c = r.read();
    if (!c) throw new Error("Sidecar medium not found");
    return x.createElement(c, nn({}, s))
};
gg.isSideCarExport = !0;

function B1(a, r) {
    return a.useMedium(r), gg
}
var pg = k1(),
    lu = function() {},
    Ar = x.forwardRef(function(a, r) {
        var s = x.useRef(null),
            c = x.useState({
                onScrollCapture: lu,
                onWheelCapture: lu,
                onTouchMoveCapture: lu
            }),
            u = c[0],
            d = c[1],
            h = a.forwardProps,
            g = a.children,
            y = a.className,
            v = a.removeScrollBar,
            b = a.enabled,
            A = a.shards,
            T = a.sideCar,
            j = a.noIsolation,
            U = a.inert,
            w = a.allowPinchZoom,
            M = a.as,
            z = M === void 0 ? "div" : M,
            k = a.gapMode,
            B = vg(a, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            P = T,
            q = z1([s, r]),
            V = nn(nn({}, B), u);
        return x.createElement(x.Fragment, null, b && x.createElement(P, {
            sideCar: pg,
            removeScrollBar: v,
            shards: A,
            noIsolation: j,
            inert: U,
            setCallbacks: d,
            allowPinchZoom: !!w,
            lockRef: s,
            gapMode: k
        }), h ? x.cloneElement(x.Children.only(g), nn(nn({}, V), {
            ref: q
        })) : x.createElement(z, nn({}, V, {
            className: y,
            ref: q
        }), g))
    });
Ar.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Ar.classNames = {
    fullWidth: dr,
    zeroRight: fr
};
var L1 = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function q1() {
    if (!document) return null;
    var a = document.createElement("style");
    a.type = "text/css";
    var r = L1();
    return r && a.setAttribute("nonce", r), a
}

function V1(a, r) {
    a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r))
}

function G1(a) {
    var r = document.head || document.getElementsByTagName("head")[0];
    r.appendChild(a)
}
var Y1 = function() {
        var a = 0,
            r = null;
        return {
            add: function(s) {
                a == 0 && (r = q1()) && (V1(r, s), G1(r)), a++
            },
            remove: function() {
                a--, !a && r && (r.parentNode && r.parentNode.removeChild(r), r = null)
            }
        }
    },
    X1 = function() {
        var a = Y1();
        return function(r, s) {
            x.useEffect(function() {
                return a.add(r),
                    function() {
                        a.remove()
                    }
            }, [r && s])
        }
    },
    yg = function() {
        var a = X1(),
            r = function(s) {
                var c = s.styles,
                    u = s.dynamic;
                return a(c, u), null
            };
        return r
    },
    Q1 = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    au = function(a) {
        return parseInt(a || "", 10) || 0
    },
    Z1 = function(a) {
        var r = window.getComputedStyle(document.body),
            s = r[a === "padding" ? "paddingLeft" : "marginLeft"],
            c = r[a === "padding" ? "paddingTop" : "marginTop"],
            u = r[a === "padding" ? "paddingRight" : "marginRight"];
        return [au(s), au(c), au(u)]
    },
    K1 = function(a) {
        if (a === void 0 && (a = "margin"), typeof window > "u") return Q1;
        var r = Z1(a),
            s = document.documentElement.clientWidth,
            c = window.innerWidth;
        return {
            left: r[0],
            top: r[1],
            right: r[2],
            gap: Math.max(0, c - s + r[2] - r[0])
        }
    },
    J1 = yg(),
    Ta = "data-scroll-locked",
    P1 = function(a, r, s, c) {
        var u = a.left,
            d = a.top,
            h = a.right,
            g = a.gap;
        return s === void 0 && (s = "margin"), `
  .`.concat(R1, ` {
   overflow: hidden `).concat(c, `;
   padding-right: `).concat(g, "px ").concat(c, `;
  }
  body[`).concat(Ta, `] {
    overflow: hidden `).concat(c, `;
    overscroll-behavior: contain;
    `).concat([r && "position: relative ".concat(c, ";"), s === "margin" && `
    padding-left: `.concat(u, `px;
    padding-top: `).concat(d, `px;
    padding-right: `).concat(h, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(g, "px ").concat(c, `;
    `), s === "padding" && "padding-right: ".concat(g, "px ").concat(c, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(fr, ` {
    right: `).concat(g, "px ").concat(c, `;
  }
  
  .`).concat(dr, ` {
    margin-right: `).concat(g, "px ").concat(c, `;
  }
  
  .`).concat(fr, " .").concat(fr, ` {
    right: 0 `).concat(c, `;
  }
  
  .`).concat(dr, " .").concat(dr, ` {
    margin-right: 0 `).concat(c, `;
  }
  
  body[`).concat(Ta, `] {
    `).concat(O1, ": ").concat(g, `px;
  }
`)
    },
    vv = function() {
        var a = parseInt(document.body.getAttribute(Ta) || "0", 10);
        return isFinite(a) ? a : 0
    },
    $1 = function() {
        x.useEffect(function() {
            return document.body.setAttribute(Ta, (vv() + 1).toString()),
                function() {
                    var a = vv() - 1;
                    a <= 0 ? document.body.removeAttribute(Ta) : document.body.setAttribute(Ta, a.toString())
                }
        }, [])
    },
    W1 = function(a) {
        var r = a.noRelative,
            s = a.noImportant,
            c = a.gapMode,
            u = c === void 0 ? "margin" : c;
        $1();
        var d = x.useMemo(function() {
            return K1(u)
        }, [u]);
        return x.createElement(J1, {
            styles: P1(d, !r, u, s ? "" : "!important")
        })
    },
    hu = !1;
if (typeof window < "u") try {
    var rr = Object.defineProperty({}, "passive", {
        get: function() {
            return hu = !0, !0
        }
    });
    window.addEventListener("test", rr, rr), window.removeEventListener("test", rr, rr)
} catch {
    hu = !1
}
var xa = hu ? {
        passive: !1
    } : !1,
    F1 = function(a) {
        return a.tagName === "TEXTAREA"
    },
    bg = function(a, r) {
        if (!(a instanceof Element)) return !1;
        var s = window.getComputedStyle(a);
        return s[r] !== "hidden" && !(s.overflowY === s.overflowX && !F1(a) && s[r] === "visible")
    },
    I1 = function(a) {
        return bg(a, "overflowY")
    },
    e2 = function(a) {
        return bg(a, "overflowX")
    },
    gv = function(a, r) {
        var s = r.ownerDocument,
            c = r;
        do {
            typeof ShadowRoot < "u" && c instanceof ShadowRoot && (c = c.host);
            var u = xg(a, c);
            if (u) {
                var d = Sg(a, c),
                    h = d[1],
                    g = d[2];
                if (h > g) return !0
            }
            c = c.parentNode
        } while (c && c !== s.body);
        return !1
    },
    t2 = function(a) {
        var r = a.scrollTop,
            s = a.scrollHeight,
            c = a.clientHeight;
        return [r, s, c]
    },
    n2 = function(a) {
        var r = a.scrollLeft,
            s = a.scrollWidth,
            c = a.clientWidth;
        return [r, s, c]
    },
    xg = function(a, r) {
        return a === "v" ? I1(r) : e2(r)
    },
    Sg = function(a, r) {
        return a === "v" ? t2(r) : n2(r)
    },
    l2 = function(a, r) {
        return a === "h" && r === "rtl" ? -1 : 1
    },
    a2 = function(a, r, s, c, u) {
        var d = l2(a, window.getComputedStyle(r).direction),
            h = d * c,
            g = s.target,
            y = r.contains(g),
            v = !1,
            b = h > 0,
            A = 0,
            T = 0;
        do {
            var j = Sg(a, g),
                U = j[0],
                w = j[1],
                M = j[2],
                z = w - M - d * U;
            (U || z) && xg(a, g) && (A += z, T += U), g instanceof ShadowRoot ? g = g.host : g = g.parentNode
        } while (!y && g !== document.body || y && (r.contains(g) || r === g));
        return (b && Math.abs(A) < 1 || !b && Math.abs(T) < 1) && (v = !0), v
    },
    cr = function(a) {
        return "changedTouches" in a ? [a.changedTouches[0].clientX, a.changedTouches[0].clientY] : [0, 0]
    },
    pv = function(a) {
        return [a.deltaX, a.deltaY]
    },
    yv = function(a) {
        return a && "current" in a ? a.current : a
    },
    i2 = function(a, r) {
        return a[0] === r[0] && a[1] === r[1]
    },
    o2 = function(a) {
        return `
  .block-interactivity-`.concat(a, ` {pointer-events: none;}
  .allow-interactivity-`).concat(a, ` {pointer-events: all;}
`)
    },
    r2 = 0,
    Sa = [];

function c2(a) {
    var r = x.useRef([]),
        s = x.useRef([0, 0]),
        c = x.useRef(),
        u = x.useState(r2++)[0],
        d = x.useState(yg)[0],
        h = x.useRef(a);
    x.useEffect(function() {
        h.current = a
    }, [a]), x.useEffect(function() {
        if (a.inert) {
            document.body.classList.add("block-interactivity-".concat(u));
            var w = M1([a.lockRef.current], (a.shards || []).map(yv), !0).filter(Boolean);
            return w.forEach(function(M) {
                    return M.classList.add("allow-interactivity-".concat(u))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(u)), w.forEach(function(M) {
                        return M.classList.remove("allow-interactivity-".concat(u))
                    })
                }
        }
    }, [a.inert, a.lockRef.current, a.shards]);
    var g = x.useCallback(function(w, M) {
            if ("touches" in w && w.touches.length === 2 || w.type === "wheel" && w.ctrlKey) return !h.current.allowPinchZoom;
            var z = cr(w),
                k = s.current,
                B = "deltaX" in w ? w.deltaX : k[0] - z[0],
                P = "deltaY" in w ? w.deltaY : k[1] - z[1],
                q, V = w.target,
                Y = Math.abs(B) > Math.abs(P) ? "h" : "v";
            if ("touches" in w && Y === "h" && V.type === "range") return !1;
            var Z = gv(Y, V);
            if (!Z) return !0;
            if (Z ? q = Y : (q = Y === "v" ? "h" : "v", Z = gv(Y, V)), !Z) return !1;
            if (!c.current && "changedTouches" in w && (B || P) && (c.current = q), !q) return !0;
            var oe = c.current || q;
            return a2(oe, M, w, oe === "h" ? B : P)
        }, []),
        y = x.useCallback(function(w) {
            var M = w;
            if (!(!Sa.length || Sa[Sa.length - 1] !== d)) {
                var z = "deltaY" in M ? pv(M) : cr(M),
                    k = r.current.filter(function(q) {
                        return q.name === M.type && (q.target === M.target || M.target === q.shadowParent) && i2(q.delta, z)
                    })[0];
                if (k && k.should) {
                    M.cancelable && M.preventDefault();
                    return
                }
                if (!k) {
                    var B = (h.current.shards || []).map(yv).filter(Boolean).filter(function(q) {
                            return q.contains(M.target)
                        }),
                        P = B.length > 0 ? g(M, B[0]) : !h.current.noIsolation;
                    P && M.cancelable && M.preventDefault()
                }
            }
        }, []),
        v = x.useCallback(function(w, M, z, k) {
            var B = {
                name: w,
                delta: M,
                target: z,
                should: k,
                shadowParent: s2(z)
            };
            r.current.push(B), setTimeout(function() {
                r.current = r.current.filter(function(P) {
                    return P !== B
                })
            }, 1)
        }, []),
        b = x.useCallback(function(w) {
            s.current = cr(w), c.current = void 0
        }, []),
        A = x.useCallback(function(w) {
            v(w.type, pv(w), w.target, g(w, a.lockRef.current))
        }, []),
        T = x.useCallback(function(w) {
            v(w.type, cr(w), w.target, g(w, a.lockRef.current))
        }, []);
    x.useEffect(function() {
        return Sa.push(d), a.setCallbacks({
                onScrollCapture: A,
                onWheelCapture: A,
                onTouchMoveCapture: T
            }), document.addEventListener("wheel", y, xa), document.addEventListener("touchmove", y, xa), document.addEventListener("touchstart", b, xa),
            function() {
                Sa = Sa.filter(function(w) {
                    return w !== d
                }), document.removeEventListener("wheel", y, xa), document.removeEventListener("touchmove", y, xa), document.removeEventListener("touchstart", b, xa)
            }
    }, []);
    var j = a.removeScrollBar,
        U = a.inert;
    return x.createElement(x.Fragment, null, U ? x.createElement(d, {
        styles: o2(u)
    }) : null, j ? x.createElement(W1, {
        gapMode: a.gapMode
    }) : null)
}

function s2(a) {
    for (var r = null; a !== null;) a instanceof ShadowRoot && (r = a.host, a = a.host), a = a.parentNode;
    return r
}
const u2 = B1(pg, c2);
var Hu = x.forwardRef(function(a, r) {
    return x.createElement(Ar, nn({}, a, {
        ref: r,
        sideCar: u2
    }))
});
Hu.classNames = Ar.classNames;
var f2 = [" ", "Enter", "ArrowUp", "ArrowDown"],
    d2 = [" ", "Enter"],
    Rl = "Select",
    [Nr, Tr, m2] = Qb(Rl),
    [Da, zE] = Bi(Rl, [m2, ng]),
    Cr = ng(),
    [h2, nl] = Da(Rl),
    [v2, g2] = Da(Rl),
    Eg = a => {
        const {
            __scopeSelect: r,
            children: s,
            open: c,
            defaultOpen: u,
            onOpenChange: d,
            value: h,
            defaultValue: g,
            onValueChange: y,
            dir: v,
            name: b,
            autoComplete: A,
            disabled: T,
            required: j,
            form: U
        } = a, w = Cr(r), [M, z] = x.useState(null), [k, B] = x.useState(null), [P, q] = x.useState(!1), V = Kb(v), [Y, Z] = yr({
            prop: c,
            defaultProp: u ?? !1,
            onChange: d,
            caller: Rl
        }), [oe, ve] = yr({
            prop: h,
            defaultProp: g,
            onChange: y,
            caller: Rl
        }), be = x.useRef(null), de = M ? U || !!M.closest("form") : !0, [ge, xe] = x.useState(new Set), ce = Array.from(ge).map(O => O.props.value).join(";");
        return f.jsx(g1, {
            ...w,
            children: f.jsxs(h2, {
                required: j,
                scope: r,
                trigger: M,
                onTriggerChange: z,
                valueNode: k,
                onValueNodeChange: B,
                valueNodeHasChildren: P,
                onValueNodeHasChildrenChange: q,
                contentId: Aa(),
                value: oe,
                onValueChange: ve,
                open: Y,
                onOpenChange: Z,
                dir: V,
                triggerPointerDownPosRef: be,
                disabled: T,
                children: [f.jsx(Nr.Provider, {
                    scope: r,
                    children: f.jsx(v2, {
                        scope: a.__scopeSelect,
                        onNativeOptionAdd: x.useCallback(O => {
                            xe(J => new Set(J).add(O))
                        }, []),
                        onNativeOptionRemove: x.useCallback(O => {
                            xe(J => {
                                const L = new Set(J);
                                return L.delete(O), L
                            })
                        }, []),
                        children: s
                    })
                }), de ? f.jsxs(Xg, {
                    "aria-hidden": !0,
                    required: j,
                    tabIndex: -1,
                    name: b,
                    autoComplete: A,
                    value: oe,
                    onChange: O => ve(O.target.value),
                    disabled: T,
                    form: U,
                    children: [oe === void 0 ? f.jsx("option", {
                        value: ""
                    }) : null, Array.from(ge)]
                }, ce) : null]
            })
        })
    };
Eg.displayName = Rl;
var wg = "SelectTrigger",
    Ag = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            disabled: c = !1,
            ...u
        } = a, d = Cr(s), h = nl(wg, s), g = h.disabled || c, y = Xe(r, h.onTriggerChange), v = Tr(s), b = x.useRef("touch"), [A, T, j] = Zg(w => {
            const M = v().filter(B => !B.disabled),
                z = M.find(B => B.value === h.value),
                k = Kg(M, w, z);
            k !== void 0 && h.onValueChange(k.value)
        }), U = w => {
            g || (h.onOpenChange(!0), j()), w && (h.triggerPointerDownPosRef.current = {
                x: Math.round(w.pageX),
                y: Math.round(w.pageY)
            })
        };
        return f.jsx(p1, {
            asChild: !0,
            ...d,
            children: f.jsx(Oe.button, {
                type: "button",
                role: "combobox",
                "aria-controls": h.contentId,
                "aria-expanded": h.open,
                "aria-required": h.required,
                "aria-autocomplete": "none",
                dir: h.dir,
                "data-state": h.open ? "open" : "closed",
                disabled: g,
                "data-disabled": g ? "" : void 0,
                "data-placeholder": Qg(h.value) ? "" : void 0,
                ...u,
                ref: y,
                onClick: Ve(u.onClick, w => {
                    w.currentTarget.focus(), b.current !== "mouse" && U(w)
                }),
                onPointerDown: Ve(u.onPointerDown, w => {
                    b.current = w.pointerType;
                    const M = w.target;
                    M.hasPointerCapture(w.pointerId) && M.releasePointerCapture(w.pointerId), w.button === 0 && w.ctrlKey === !1 && w.pointerType === "mouse" && (U(w), w.preventDefault())
                }),
                onKeyDown: Ve(u.onKeyDown, w => {
                    const M = A.current !== "";
                    !(w.ctrlKey || w.altKey || w.metaKey) && w.key.length === 1 && T(w.key), !(M && w.key === " ") && f2.includes(w.key) && (U(), w.preventDefault())
                })
            })
        })
    });
Ag.displayName = wg;
var Ng = "SelectValue",
    Tg = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            className: c,
            style: u,
            children: d,
            placeholder: h = "",
            ...g
        } = a, y = nl(Ng, s), {
            onValueNodeHasChildrenChange: v
        } = y, b = d !== void 0, A = Xe(r, y.onValueNodeChange);
        return gt(() => {
            v(b)
        }, [v, b]), f.jsx(Oe.span, {
            ...g,
            ref: A,
            style: {
                pointerEvents: "none"
            },
            children: Qg(y.value) ? f.jsx(f.Fragment, {
                children: h
            }) : d
        })
    });
Tg.displayName = Ng;
var p2 = "SelectIcon",
    Cg = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            children: c,
            ...u
        } = a;
        return f.jsx(Oe.span, {
            "aria-hidden": !0,
            ...u,
            ref: r,
            children: c || "▼"
        })
    });
Cg.displayName = p2;
var y2 = "SelectPortal",
    jg = a => f.jsx(Uu, {
        asChild: !0,
        ...a
    });
jg.displayName = y2;
var Ol = "SelectContent",
    Mg = x.forwardRef((a, r) => {
        const s = nl(Ol, a.__scopeSelect),
            [c, u] = x.useState();
        if (gt(() => {
                u(new DocumentFragment)
            }, []), !s.open) {
            const d = c;
            return d ? ki.createPortal(f.jsx(Rg, {
                scope: a.__scopeSelect,
                children: f.jsx(Nr.Slot, {
                    scope: a.__scopeSelect,
                    children: f.jsx("div", {
                        children: a.children
                    })
                })
            }), d) : null
        }
        return f.jsx(Og, {
            ...a,
            ref: r
        })
    });
Mg.displayName = Ol;
var Kt = 10,
    [Rg, ll] = Da(Ol),
    b2 = "SelectContentImpl",
    x2 = Ca("SelectContent.RemoveScroll"),
    Og = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            position: c = "item-aligned",
            onCloseAutoFocus: u,
            onEscapeKeyDown: d,
            onPointerDownOutside: h,
            side: g,
            sideOffset: y,
            align: v,
            alignOffset: b,
            arrowPadding: A,
            collisionBoundary: T,
            collisionPadding: j,
            sticky: U,
            hideWhenDetached: w,
            avoidCollisions: M,
            ...z
        } = a, k = nl(Ol, s), [B, P] = x.useState(null), [q, V] = x.useState(null), Y = Xe(r, F => P(F)), [Z, oe] = x.useState(null), [ve, be] = x.useState(null), de = Tr(s), [ge, xe] = x.useState(!1), ce = x.useRef(!1);
        x.useEffect(() => {
            if (B) return hg(B)
        }, [B]), Vv();
        const O = x.useCallback(F => {
                const [re, ...Re] = de().map(we => we.ref.current), [Te] = Re.slice(-1), Ee = document.activeElement;
                for (const we of F)
                    if (we === Ee || (we == null || we.scrollIntoView({
                            block: "nearest"
                        }), we === re && q && (q.scrollTop = 0), we === Te && q && (q.scrollTop = q.scrollHeight), we == null || we.focus(), document.activeElement !== Ee)) return
            }, [de, q]),
            J = x.useCallback(() => O([Z, B]), [O, Z, B]);
        x.useEffect(() => {
            ge && J()
        }, [ge, J]);
        const {
            onOpenChange: L,
            triggerPointerDownPosRef: le
        } = k;
        x.useEffect(() => {
            if (B) {
                let F = {
                    x: 0,
                    y: 0
                };
                const re = Te => {
                        var Ee, we;
                        F = {
                            x: Math.abs(Math.round(Te.pageX) - (((Ee = le.current) == null ? void 0 : Ee.x) ?? 0)),
                            y: Math.abs(Math.round(Te.pageY) - (((we = le.current) == null ? void 0 : we.y) ?? 0))
                        }
                    },
                    Re = Te => {
                        F.x <= 10 && F.y <= 10 ? Te.preventDefault() : B.contains(Te.target) || L(!1), document.removeEventListener("pointermove", re), le.current = null
                    };
                return le.current !== null && (document.addEventListener("pointermove", re), document.addEventListener("pointerup", Re, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", re), document.removeEventListener("pointerup", Re, {
                        capture: !0
                    })
                }
            }
        }, [B, L, le]), x.useEffect(() => {
            const F = () => L(!1);
            return window.addEventListener("blur", F), window.addEventListener("resize", F), () => {
                window.removeEventListener("blur", F), window.removeEventListener("resize", F)
            }
        }, [L]);
        const [E, X] = Zg(F => {
            const re = de().filter(Ee => !Ee.disabled),
                Re = re.find(Ee => Ee.ref.current === document.activeElement),
                Te = Kg(re, F, Re);
            Te && setTimeout(() => Te.ref.current.focus())
        }), W = x.useCallback((F, re, Re) => {
            const Te = !ce.current && !Re;
            (k.value !== void 0 && k.value === re || Te) && (oe(F), Te && (ce.current = !0))
        }, [k.value]), $ = x.useCallback(() => B == null ? void 0 : B.focus(), [B]), I = x.useCallback((F, re, Re) => {
            const Te = !ce.current && !Re;
            (k.value !== void 0 && k.value === re || Te) && be(F)
        }, [k.value]), me = c === "popper" ? vu : _g, ie = me === vu ? {
            side: g,
            sideOffset: y,
            align: v,
            alignOffset: b,
            arrowPadding: A,
            collisionBoundary: T,
            collisionPadding: j,
            sticky: U,
            hideWhenDetached: w,
            avoidCollisions: M
        } : {};
        return f.jsx(Rg, {
            scope: s,
            content: B,
            viewport: q,
            onViewportChange: V,
            itemRefCallback: W,
            selectedItem: Z,
            onItemLeave: $,
            itemTextRefCallback: I,
            focusSelectedItem: J,
            selectedItemText: ve,
            position: c,
            isPositioned: ge,
            searchRef: E,
            children: f.jsx(Hu, {
                as: x2,
                allowPinchZoom: !0,
                children: f.jsx(Nu, {
                    asChild: !0,
                    trapped: k.open,
                    onMountAutoFocus: F => {
                        F.preventDefault()
                    },
                    onUnmountAutoFocus: Ve(u, F => {
                        var re;
                        (re = k.trigger) == null || re.focus({
                            preventScroll: !0
                        }), F.preventDefault()
                    }),
                    children: f.jsx(Au, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: d,
                        onPointerDownOutside: h,
                        onFocusOutside: F => F.preventDefault(),
                        onDismiss: () => k.onOpenChange(!1),
                        children: f.jsx(me, {
                            role: "listbox",
                            id: k.contentId,
                            "data-state": k.open ? "open" : "closed",
                            dir: k.dir,
                            onContextMenu: F => F.preventDefault(),
                            ...z,
                            ...ie,
                            onPlaced: () => xe(!0),
                            ref: Y,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...z.style
                            },
                            onKeyDown: Ve(z.onKeyDown, F => {
                                const re = F.ctrlKey || F.altKey || F.metaKey;
                                if (F.key === "Tab" && F.preventDefault(), !re && F.key.length === 1 && X(F.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(F.key)) {
                                    let Te = de().filter(Ee => !Ee.disabled).map(Ee => Ee.ref.current);
                                    if (["ArrowUp", "End"].includes(F.key) && (Te = Te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(F.key)) {
                                        const Ee = F.target,
                                            we = Te.indexOf(Ee);
                                        Te = Te.slice(we + 1)
                                    }
                                    setTimeout(() => O(Te)), F.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
Og.displayName = b2;
var S2 = "SelectItemAlignedPosition",
    _g = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            onPlaced: c,
            ...u
        } = a, d = nl(Ol, s), h = ll(Ol, s), [g, y] = x.useState(null), [v, b] = x.useState(null), A = Xe(r, Y => b(Y)), T = Tr(s), j = x.useRef(!1), U = x.useRef(!0), {
            viewport: w,
            selectedItem: M,
            selectedItemText: z,
            focusSelectedItem: k
        } = h, B = x.useCallback(() => {
            if (d.trigger && d.valueNode && g && v && w && M && z) {
                const Y = d.trigger.getBoundingClientRect(),
                    Z = v.getBoundingClientRect(),
                    oe = d.valueNode.getBoundingClientRect(),
                    ve = z.getBoundingClientRect();
                if (d.dir !== "rtl") {
                    const Ee = ve.left - Z.left,
                        we = oe.left - Ee,
                        rt = Y.left - we,
                        yt = Y.width + rt,
                        al = Math.max(yt, Z.width),
                        il = window.innerWidth - Kt,
                        ft = Fh(we, [Kt, Math.max(Kt, il - al)]);
                    g.style.minWidth = yt + "px", g.style.left = ft + "px"
                } else {
                    const Ee = Z.right - ve.right,
                        we = window.innerWidth - oe.right - Ee,
                        rt = window.innerWidth - Y.right - we,
                        yt = Y.width + rt,
                        al = Math.max(yt, Z.width),
                        il = window.innerWidth - Kt,
                        ft = Fh(we, [Kt, Math.max(Kt, il - al)]);
                    g.style.minWidth = yt + "px", g.style.right = ft + "px"
                }
                const be = T(),
                    de = window.innerHeight - Kt * 2,
                    ge = w.scrollHeight,
                    xe = window.getComputedStyle(v),
                    ce = parseInt(xe.borderTopWidth, 10),
                    O = parseInt(xe.paddingTop, 10),
                    J = parseInt(xe.borderBottomWidth, 10),
                    L = parseInt(xe.paddingBottom, 10),
                    le = ce + O + ge + L + J,
                    E = Math.min(M.offsetHeight * 5, le),
                    X = window.getComputedStyle(w),
                    W = parseInt(X.paddingTop, 10),
                    $ = parseInt(X.paddingBottom, 10),
                    I = Y.top + Y.height / 2 - Kt,
                    me = de - I,
                    ie = M.offsetHeight / 2,
                    F = M.offsetTop + ie,
                    re = ce + O + F,
                    Re = le - re;
                if (re <= I) {
                    const Ee = be.length > 0 && M === be[be.length - 1].ref.current;
                    g.style.bottom = "0px";
                    const we = v.clientHeight - w.offsetTop - w.offsetHeight,
                        rt = Math.max(me, ie + (Ee ? $ : 0) + we + J),
                        yt = re + rt;
                    g.style.height = yt + "px"
                } else {
                    const Ee = be.length > 0 && M === be[0].ref.current;
                    g.style.top = "0px";
                    const rt = Math.max(I, ce + w.offsetTop + (Ee ? W : 0) + ie) + Re;
                    g.style.height = rt + "px", w.scrollTop = re - I + w.offsetTop
                }
                g.style.margin = `${Kt}px 0`, g.style.minHeight = E + "px", g.style.maxHeight = de + "px", c == null || c(), requestAnimationFrame(() => j.current = !0)
            }
        }, [T, d.trigger, d.valueNode, g, v, w, M, z, d.dir, c]);
        gt(() => B(), [B]);
        const [P, q] = x.useState();
        gt(() => {
            v && q(window.getComputedStyle(v).zIndex)
        }, [v]);
        const V = x.useCallback(Y => {
            Y && U.current === !0 && (B(), k == null || k(), U.current = !1)
        }, [B, k]);
        return f.jsx(w2, {
            scope: s,
            contentWrapper: g,
            shouldExpandOnScrollRef: j,
            onScrollButtonChange: V,
            children: f.jsx("div", {
                ref: y,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: P
                },
                children: f.jsx(Oe.div, {
                    ...u,
                    ref: A,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...u.style
                    }
                })
            })
        })
    });
_g.displayName = S2;
var E2 = "SelectPopperPosition",
    vu = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            align: c = "start",
            collisionPadding: u = Kt,
            ...d
        } = a, h = Cr(s);
        return f.jsx(y1, {
            ...h,
            ...d,
            ref: r,
            align: c,
            collisionPadding: u,
            style: {
                boxSizing: "border-box",
                ...d.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
vu.displayName = E2;
var [w2, ku] = Da(Ol, {}), gu = "SelectViewport", Dg = x.forwardRef((a, r) => {
    const {
        __scopeSelect: s,
        nonce: c,
        ...u
    } = a, d = ll(gu, s), h = ku(gu, s), g = Xe(r, d.onViewportChange), y = x.useRef(0);
    return f.jsxs(f.Fragment, {
        children: [f.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: c
        }), f.jsx(Nr.Slot, {
            scope: s,
            children: f.jsx(Oe.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...u,
                ref: g,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...u.style
                },
                onScroll: Ve(u.onScroll, v => {
                    const b = v.currentTarget,
                        {
                            contentWrapper: A,
                            shouldExpandOnScrollRef: T
                        } = h;
                    if (T != null && T.current && A) {
                        const j = Math.abs(y.current - b.scrollTop);
                        if (j > 0) {
                            const U = window.innerHeight - Kt * 2,
                                w = parseFloat(A.style.minHeight),
                                M = parseFloat(A.style.height),
                                z = Math.max(w, M);
                            if (z < U) {
                                const k = z + j,
                                    B = Math.min(U, k),
                                    P = k - B;
                                A.style.height = B + "px", A.style.bottom === "0px" && (b.scrollTop = P > 0 ? P : 0, A.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    y.current = b.scrollTop
                })
            })
        })]
    })
});
Dg.displayName = gu;
var zg = "SelectGroup",
    [A2, N2] = Da(zg),
    T2 = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            ...c
        } = a, u = Aa();
        return f.jsx(A2, {
            scope: s,
            id: u,
            children: f.jsx(Oe.div, {
                role: "group",
                "aria-labelledby": u,
                ...c,
                ref: r
            })
        })
    });
T2.displayName = zg;
var Ug = "SelectLabel",
    C2 = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            ...c
        } = a, u = N2(Ug, s);
        return f.jsx(Oe.div, {
            id: u.id,
            ...c,
            ref: r
        })
    });
C2.displayName = Ug;
var br = "SelectItem",
    [j2, Hg] = Da(br),
    kg = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            value: c,
            disabled: u = !1,
            textValue: d,
            ...h
        } = a, g = nl(br, s), y = ll(br, s), v = g.value === c, [b, A] = x.useState(d ?? ""), [T, j] = x.useState(!1), U = Xe(r, k => {
            var B;
            return (B = y.itemRefCallback) == null ? void 0 : B.call(y, k, c, u)
        }), w = Aa(), M = x.useRef("touch"), z = () => {
            u || (g.onValueChange(c), g.onOpenChange(!1))
        };
        if (c === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return f.jsx(j2, {
            scope: s,
            value: c,
            disabled: u,
            textId: w,
            isSelected: v,
            onItemTextChange: x.useCallback(k => {
                A(B => B || ((k == null ? void 0 : k.textContent) ?? "").trim())
            }, []),
            children: f.jsx(Nr.ItemSlot, {
                scope: s,
                value: c,
                disabled: u,
                textValue: b,
                children: f.jsx(Oe.div, {
                    role: "option",
                    "aria-labelledby": w,
                    "data-highlighted": T ? "" : void 0,
                    "aria-selected": v && T,
                    "data-state": v ? "checked" : "unchecked",
                    "aria-disabled": u || void 0,
                    "data-disabled": u ? "" : void 0,
                    tabIndex: u ? void 0 : -1,
                    ...h,
                    ref: U,
                    onFocus: Ve(h.onFocus, () => j(!0)),
                    onBlur: Ve(h.onBlur, () => j(!1)),
                    onClick: Ve(h.onClick, () => {
                        M.current !== "mouse" && z()
                    }),
                    onPointerUp: Ve(h.onPointerUp, () => {
                        M.current === "mouse" && z()
                    }),
                    onPointerDown: Ve(h.onPointerDown, k => {
                        M.current = k.pointerType
                    }),
                    onPointerMove: Ve(h.onPointerMove, k => {
                        var B;
                        M.current = k.pointerType, u ? (B = y.onItemLeave) == null || B.call(y) : M.current === "mouse" && k.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: Ve(h.onPointerLeave, k => {
                        var B;
                        k.currentTarget === document.activeElement && ((B = y.onItemLeave) == null || B.call(y))
                    }),
                    onKeyDown: Ve(h.onKeyDown, k => {
                        var P;
                        ((P = y.searchRef) == null ? void 0 : P.current) !== "" && k.key === " " || (d2.includes(k.key) && z(), k.key === " " && k.preventDefault())
                    })
                })
            })
        })
    });
kg.displayName = br;
var zi = "SelectItemText",
    Bg = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            className: c,
            style: u,
            ...d
        } = a, h = nl(zi, s), g = ll(zi, s), y = Hg(zi, s), v = g2(zi, s), [b, A] = x.useState(null), T = Xe(r, z => A(z), y.onItemTextChange, z => {
            var k;
            return (k = g.itemTextRefCallback) == null ? void 0 : k.call(g, z, y.value, y.disabled)
        }), j = b == null ? void 0 : b.textContent, U = x.useMemo(() => f.jsx("option", {
            value: y.value,
            disabled: y.disabled,
            children: j
        }, y.value), [y.disabled, y.value, j]), {
            onNativeOptionAdd: w,
            onNativeOptionRemove: M
        } = v;
        return gt(() => (w(U), () => M(U)), [w, M, U]), f.jsxs(f.Fragment, {
            children: [f.jsx(Oe.span, {
                id: y.textId,
                ...d,
                ref: T
            }), y.isSelected && h.valueNode && !h.valueNodeHasChildren ? ki.createPortal(d.children, h.valueNode) : null]
        })
    });
Bg.displayName = zi;
var Lg = "SelectItemIndicator",
    qg = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            ...c
        } = a;
        return Hg(Lg, s).isSelected ? f.jsx(Oe.span, {
            "aria-hidden": !0,
            ...c,
            ref: r
        }) : null
    });
qg.displayName = Lg;
var pu = "SelectScrollUpButton",
    Vg = x.forwardRef((a, r) => {
        const s = ll(pu, a.__scopeSelect),
            c = ku(pu, a.__scopeSelect),
            [u, d] = x.useState(!1),
            h = Xe(r, c.onScrollButtonChange);
        return gt(() => {
            if (s.viewport && s.isPositioned) {
                let g = function() {
                    const v = y.scrollTop > 0;
                    d(v)
                };
                const y = s.viewport;
                return g(), y.addEventListener("scroll", g), () => y.removeEventListener("scroll", g)
            }
        }, [s.viewport, s.isPositioned]), u ? f.jsx(Yg, {
            ...a,
            ref: h,
            onAutoScroll: () => {
                const {
                    viewport: g,
                    selectedItem: y
                } = s;
                g && y && (g.scrollTop = g.scrollTop - y.offsetHeight)
            }
        }) : null
    });
Vg.displayName = pu;
var yu = "SelectScrollDownButton",
    Gg = x.forwardRef((a, r) => {
        const s = ll(yu, a.__scopeSelect),
            c = ku(yu, a.__scopeSelect),
            [u, d] = x.useState(!1),
            h = Xe(r, c.onScrollButtonChange);
        return gt(() => {
            if (s.viewport && s.isPositioned) {
                let g = function() {
                    const v = y.scrollHeight - y.clientHeight,
                        b = Math.ceil(y.scrollTop) < v;
                    d(b)
                };
                const y = s.viewport;
                return g(), y.addEventListener("scroll", g), () => y.removeEventListener("scroll", g)
            }
        }, [s.viewport, s.isPositioned]), u ? f.jsx(Yg, {
            ...a,
            ref: h,
            onAutoScroll: () => {
                const {
                    viewport: g,
                    selectedItem: y
                } = s;
                g && y && (g.scrollTop = g.scrollTop + y.offsetHeight)
            }
        }) : null
    });
Gg.displayName = yu;
var Yg = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            onAutoScroll: c,
            ...u
        } = a, d = ll("SelectScrollButton", s), h = x.useRef(null), g = Tr(s), y = x.useCallback(() => {
            h.current !== null && (window.clearInterval(h.current), h.current = null)
        }, []);
        return x.useEffect(() => () => y(), [y]), gt(() => {
            var b;
            const v = g().find(A => A.ref.current === document.activeElement);
            (b = v == null ? void 0 : v.ref.current) == null || b.scrollIntoView({
                block: "nearest"
            })
        }, [g]), f.jsx(Oe.div, {
            "aria-hidden": !0,
            ...u,
            ref: r,
            style: {
                flexShrink: 0,
                ...u.style
            },
            onPointerDown: Ve(u.onPointerDown, () => {
                h.current === null && (h.current = window.setInterval(c, 50))
            }),
            onPointerMove: Ve(u.onPointerMove, () => {
                var v;
                (v = d.onItemLeave) == null || v.call(d), h.current === null && (h.current = window.setInterval(c, 50))
            }),
            onPointerLeave: Ve(u.onPointerLeave, () => {
                y()
            })
        })
    }),
    M2 = "SelectSeparator",
    R2 = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            ...c
        } = a;
        return f.jsx(Oe.div, {
            "aria-hidden": !0,
            ...c,
            ref: r
        })
    });
R2.displayName = M2;
var bu = "SelectArrow",
    O2 = x.forwardRef((a, r) => {
        const {
            __scopeSelect: s,
            ...c
        } = a, u = Cr(s), d = nl(bu, s), h = ll(bu, s);
        return d.open && h.position === "popper" ? f.jsx(b1, {
            ...u,
            ...c,
            ref: r
        }) : null
    });
O2.displayName = bu;
var _2 = "SelectBubbleInput",
    Xg = x.forwardRef(({
        __scopeSelect: a,
        value: r,
        ...s
    }, c) => {
        const u = x.useRef(null),
            d = Xe(c, u),
            h = fg(r);
        return x.useEffect(() => {
            const g = u.current;
            if (!g) return;
            const y = window.HTMLSelectElement.prototype,
                b = Object.getOwnPropertyDescriptor(y, "value").set;
            if (h !== r && b) {
                const A = new Event("change", {
                    bubbles: !0
                });
                b.call(g, r), g.dispatchEvent(A)
            }
        }, [h, r]), f.jsx(Oe.select, {
            ...s,
            style: {
                ...dg,
                ...s.style
            },
            ref: d,
            defaultValue: r
        })
    });
Xg.displayName = _2;

function Qg(a) {
    return a === "" || a === void 0
}

function Zg(a) {
    const r = jl(a),
        s = x.useRef(""),
        c = x.useRef(0),
        u = x.useCallback(h => {
            const g = s.current + h;
            r(g),
                function y(v) {
                    s.current = v, window.clearTimeout(c.current), v !== "" && (c.current = window.setTimeout(() => y(""), 1e3))
                }(g)
        }, [r]),
        d = x.useCallback(() => {
            s.current = "", window.clearTimeout(c.current)
        }, []);
    return x.useEffect(() => () => window.clearTimeout(c.current), []), [s, u, d]
}

function Kg(a, r, s) {
    const u = r.length > 1 && Array.from(r).every(v => v === r[0]) ? r[0] : r,
        d = s ? a.indexOf(s) : -1;
    let h = D2(a, Math.max(d, 0));
    u.length === 1 && (h = h.filter(v => v !== s));
    const y = h.find(v => v.textValue.toLowerCase().startsWith(u.toLowerCase()));
    return y !== s ? y : void 0
}

function D2(a, r) {
    return a.map((s, c) => a[(r + c) % a.length])
}
var z2 = Eg,
    U2 = Ag,
    H2 = Tg,
    k2 = Cg,
    B2 = jg,
    L2 = Mg,
    q2 = Dg,
    V2 = kg,
    G2 = Bg,
    Y2 = qg,
    X2 = Vg,
    Q2 = Gg;
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = a => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    K2 = a => a.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, s, c) => c ? c.toUpperCase() : s.toLowerCase()),
    bv = a => {
        const r = K2(a);
        return r.charAt(0).toUpperCase() + r.slice(1)
    },
    Jg = (...a) => a.filter((r, s, c) => !!r && r.trim() !== "" && c.indexOf(r) === s).join(" ").trim(),
    J2 = a => {
        for (const r in a)
            if (r.startsWith("aria-") || r === "role" || r === "title") return !0
    };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var P2 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = x.forwardRef(({
    color: a = "currentColor",
    size: r = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: c,
    className: u = "",
    children: d,
    iconNode: h,
    ...g
}, y) => x.createElement("svg", {
    ref: y,
    ...P2,
    width: r,
    height: r,
    stroke: a,
    strokeWidth: c ? Number(s) * 24 / Number(r) : s,
    className: Jg("lucide", u),
    ...!d && !J2(g) && {
        "aria-hidden": "true"
    },
    ...g
}, [...h.map(([v, b]) => x.createElement(v, b)), ...Array.isArray(d) ? d : [d]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = (a, r) => {
    const s = x.forwardRef(({
        className: c,
        ...u
    }, d) => x.createElement($2, {
        ref: d,
        iconNode: r,
        className: Jg(`lucide-${Z2(bv(a))}`, `lucide-${a}`, c),
        ...u
    }));
    return s.displayName = bv(a), s
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [
        ["path", {
            d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
            key: "1b4qmf"
        }],
        ["path", {
            d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
            key: "i71pzd"
        }],
        ["path", {
            d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
            key: "10jefs"
        }],
        ["path", {
            d: "M10 6h4",
            key: "1itunk"
        }],
        ["path", {
            d: "M10 10h4",
            key: "tcdvrf"
        }],
        ["path", {
            d: "M10 14h4",
            key: "kelpxr"
        }],
        ["path", {
            d: "M10 18h4",
            key: "1ulq68"
        }]
    ],
    F2 = Ue("building-2", W2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = [
        ["path", {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }]
    ],
    Bu = Ue("check", I2);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = [
        ["path", {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }]
    ],
    Pg = Ue("chevron-down", eS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = [
        ["path", {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }]
    ],
    nS = Ue("chevron-left", tS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lS = [
        ["path", {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }]
    ],
    aS = Ue("chevron-right", lS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iS = [
        ["path", {
            d: "m18 15-6-6-6 6",
            key: "153udz"
        }]
    ],
    oS = Ue("chevron-up", iS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rS = [
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }],
        ["polyline", {
            points: "7 10 12 15 17 10",
            key: "2ggqvy"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "15",
            y2: "3",
            key: "1vk2je"
        }]
    ],
    cS = Ue("download", rS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sS = [
        ["path", {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    uS = Ue("eye", sS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fS = [
        ["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }],
        ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }],
        ["path", {
            d: "M10 9H8",
            key: "b1mrlr"
        }],
        ["path", {
            d: "M16 13H8",
            key: "t4e002"
        }],
        ["path", {
            d: "M16 17H8",
            key: "z1uh3a"
        }]
    ],
    $g = Ue("file-text", fS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dS = [
        ["path", {
            d: "M16 5h6",
            key: "1vod17"
        }],
        ["path", {
            d: "M19 2v6",
            key: "4bpg5p"
        }],
        ["path", {
            d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
            key: "1ue2ih"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }]
    ],
    mS = Ue("image-plus", dS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hS = [
        ["rect", {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }],
        ["circle", {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }],
        ["path", {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }]
    ],
    xu = Ue("image", hS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vS = [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["path", {
            d: "M12 16v-4",
            key: "1dtifu"
        }],
        ["path", {
            d: "M12 8h.01",
            key: "e9boi3"
        }]
    ],
    gS = Ue("info", vS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pS = [
        ["rect", {
            width: "18",
            height: "7",
            x: "3",
            y: "3",
            rx: "1",
            key: "f1a2em"
        }],
        ["rect", {
            width: "9",
            height: "7",
            x: "3",
            y: "14",
            rx: "1",
            key: "jqznyg"
        }],
        ["rect", {
            width: "5",
            height: "7",
            x: "16",
            y: "14",
            rx: "1",
            key: "q5h2i8"
        }]
    ],
    yS = Ue("layout-template", pS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bS = [
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }],
        ["polyline", {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }],
        ["line", {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }]
    ],
    xS = Ue("log-out", bS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SS = [
        ["path", {
            d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
            key: "131961"
        }],
        ["path", {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }]
    ],
    ES = Ue("mic", SS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wS = [
        ["path", {
            d: "M9 18V5l12-2v13",
            key: "1jmyc2"
        }],
        ["circle", {
            cx: "6",
            cy: "18",
            r: "3",
            key: "fqmcym"
        }],
        ["circle", {
            cx: "18",
            cy: "16",
            r: "3",
            key: "1hluhg"
        }]
    ],
    xv = Ue("music", wS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AS = [
        ["path", {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }],
        ["path", {
            d: "M12 22V12",
            key: "d0xqtd"
        }],
        ["polyline", {
            points: "3.29 7 12 12 20.71 7",
            key: "ousv84"
        }],
        ["path", {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }]
    ],
    NS = Ue("package", AS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TS = [
        ["path", {
            d: "M12 20h9",
            key: "t2du7b"
        }],
        ["path", {
            d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
            key: "1ykcvy"
        }]
    ],
    Sv = Ue("pen-line", TS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CS = [
        ["polygon", {
            points: "6 3 20 12 6 21 6 3",
            key: "1oa8hb"
        }]
    ],
    jS = Ue("play", CS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MS = [
        ["path", {
            d: "M5 12h14",
            key: "1ays0h"
        }],
        ["path", {
            d: "M12 5v14",
            key: "s699le"
        }]
    ],
    RS = Ue("plus", MS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OS = [
        ["path", {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }],
        ["path", {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }],
        ["path", {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }]
    ],
    _S = Ue("save", OS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const DS = [
        ["path", {
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
            key: "1qme2f"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }]
    ],
    zS = Ue("settings", DS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const US = [
        ["circle", {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }],
        ["circle", {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }],
        ["circle", {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }],
        ["line", {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }],
        ["line", {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }]
    ],
    HS = Ue("share-2", US);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kS = [
        ["polyline", {
            points: "4 7 4 4 20 4 20 7",
            key: "1nosan"
        }],
        ["line", {
            x1: "9",
            x2: "15",
            y1: "20",
            y2: "20",
            key: "swin9y"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "4",
            y2: "20",
            key: "1tx1rr"
        }]
    ],
    BS = Ue("type", kS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LS = [
        ["path", {
            d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
            key: "ih7n3h"
        }],
        ["polyline", {
            points: "17 8 12 3 7 8",
            key: "t8dd8p"
        }],
        ["line", {
            x1: "12",
            x2: "12",
            y1: "3",
            y2: "15",
            key: "widbto"
        }]
    ],
    iu = Ue("upload", LS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qS = [
        ["path", {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }],
        ["path", {
            d: "M16 3.128a4 4 0 0 1 0 7.744",
            key: "16gr8j"
        }],
        ["path", {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }]
    ],
    VS = Ue("users", qS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const GS = [
        ["path", {
            d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
            key: "ftymec"
        }],
        ["rect", {
            x: "2",
            y: "6",
            width: "14",
            height: "12",
            rx: "2",
            key: "158x01"
        }]
    ],
    mr = Ue("video", GS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const YS = [
        ["path", {
            d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
            key: "uqj9uw"
        }],
        ["path", {
            d: "M16 9a5 5 0 0 1 0 6",
            key: "1q6k2b"
        }],
        ["path", {
            d: "M19.364 18.364a9 9 0 0 0 0-12.728",
            key: "ijwkga"
        }]
    ],
    Su = Ue("volume-2", YS);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const XS = [
        ["path", {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }],
        ["path", {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }]
    ],
    QS = Ue("x", XS);

function ZS({
    ...a
}) {
    return f.jsx(z2, {
        "data-slot": "select",
        ...a
    })
}

function KS({
    ...a
}) {
    return f.jsx(H2, {
        "data-slot": "select-value",
        ...a
    })
}

function JS({
    className: a,
    size: r = "default",
    children: s,
    ...c
}) {
    return f.jsxs(U2, {
        "data-slot": "select-trigger",
        "data-size": r,
        className: Pe("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", a),
        ...c,
        children: [s, f.jsx(k2, {
            asChild: !0,
            children: f.jsx(Pg, {
                className: "size-4 opacity-50"
            })
        })]
    })
}

function PS({
    className: a,
    children: r,
    position: s = "popper",
    ...c
}) {
    return f.jsx(B2, {
        children: f.jsxs(L2, {
            "data-slot": "select-content",
            className: Pe("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", s === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
            position: s,
            ...c,
            children: [f.jsx(WS, {}), f.jsx(q2, {
                className: Pe("p-1", s === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                children: r
            }), f.jsx(FS, {})]
        })
    })
}

function $S({
    className: a,
    children: r,
    ...s
}) {
    return f.jsxs(V2, {
        "data-slot": "select-item",
        className: Pe("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", a),
        ...s,
        children: [f.jsx("span", {
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: f.jsx(Y2, {
                children: f.jsx(Bu, {
                    className: "size-4"
                })
            })
        }), f.jsx(G2, {
            children: r
        })]
    })
}

function WS({
    className: a,
    ...r
}) {
    return f.jsx(X2, {
        "data-slot": "select-scroll-up-button",
        className: Pe("flex cursor-default items-center justify-center py-1", a),
        ...r,
        children: f.jsx(oS, {
            className: "size-4"
        })
    })
}

function FS({
    className: a,
    ...r
}) {
    return f.jsx(Q2, {
        "data-slot": "select-scroll-down-button",
        className: Pe("flex cursor-default items-center justify-center py-1", a),
        ...r,
        children: f.jsx(Pg, {
            className: "size-4"
        })
    })
}

function IS(a, r) {
    return x.useReducer((s, c) => r[s][c] ?? s, a)
}
var qi = a => {
    const {
        present: r,
        children: s
    } = a, c = eE(r), u = typeof s == "function" ? s({
        present: c.isPresent
    }) : x.Children.only(s), d = Xe(c.ref, tE(u));
    return typeof s == "function" || c.isPresent ? x.cloneElement(u, {
        ref: d
    }) : null
};
qi.displayName = "Presence";

function eE(a) {
    const [r, s] = x.useState(), c = x.useRef(null), u = x.useRef(a), d = x.useRef("none"), h = a ? "mounted" : "unmounted", [g, y] = IS(h, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return x.useEffect(() => {
        const v = sr(c.current);
        d.current = g === "mounted" ? v : "none"
    }, [g]), gt(() => {
        const v = c.current,
            b = u.current;
        if (b !== a) {
            const T = d.current,
                j = sr(v);
            a ? y("MOUNT") : j === "none" || (v == null ? void 0 : v.display) === "none" ? y("UNMOUNT") : y(b && T !== j ? "ANIMATION_OUT" : "UNMOUNT"), u.current = a
        }
    }, [a, y]), gt(() => {
        if (r) {
            let v;
            const b = r.ownerDocument.defaultView ?? window,
                A = j => {
                    const w = sr(c.current).includes(j.animationName);
                    if (j.target === r && w && (y("ANIMATION_END"), !u.current)) {
                        const M = r.style.animationFillMode;
                        r.style.animationFillMode = "forwards", v = b.setTimeout(() => {
                            r.style.animationFillMode === "forwards" && (r.style.animationFillMode = M)
                        })
                    }
                },
                T = j => {
                    j.target === r && (d.current = sr(c.current))
                };
            return r.addEventListener("animationstart", T), r.addEventListener("animationcancel", A), r.addEventListener("animationend", A), () => {
                b.clearTimeout(v), r.removeEventListener("animationstart", T), r.removeEventListener("animationcancel", A), r.removeEventListener("animationend", A)
            }
        } else y("ANIMATION_END")
    }, [r, y]), {
        isPresent: ["mounted", "unmountSuspended"].includes(g),
        ref: x.useCallback(v => {
            c.current = v ? getComputedStyle(v) : null, s(v)
        }, [])
    }
}

function sr(a) {
    return (a == null ? void 0 : a.animationName) || "none"
}

function tE(a) {
    var c, u;
    let r = (c = Object.getOwnPropertyDescriptor(a.props, "ref")) == null ? void 0 : c.get,
        s = r && "isReactWarning" in r && r.isReactWarning;
    return s ? a.ref : (r = (u = Object.getOwnPropertyDescriptor(a, "ref")) == null ? void 0 : u.get, s = r && "isReactWarning" in r && r.isReactWarning, s ? a.props.ref : a.props.ref || a.ref)
}
var jr = "Dialog",
    [Wg, UE] = Bi(jr),
    [nE, $t] = Wg(jr),
    Fg = a => {
        const {
            __scopeDialog: r,
            children: s,
            open: c,
            defaultOpen: u,
            onOpenChange: d,
            modal: h = !0
        } = a, g = x.useRef(null), y = x.useRef(null), [v, b] = yr({
            prop: c,
            defaultProp: u ?? !1,
            onChange: d,
            caller: jr
        });
        return f.jsx(nE, {
            scope: r,
            triggerRef: g,
            contentRef: y,
            contentId: Aa(),
            titleId: Aa(),
            descriptionId: Aa(),
            open: v,
            onOpenChange: b,
            onOpenToggle: x.useCallback(() => b(A => !A), [b]),
            modal: h,
            children: s
        })
    };
Fg.displayName = jr;
var Ig = "DialogTrigger",
    lE = x.forwardRef((a, r) => {
        const {
            __scopeDialog: s,
            ...c
        } = a, u = $t(Ig, s), d = Xe(r, u.triggerRef);
        return f.jsx(Oe.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": u.open,
            "aria-controls": u.contentId,
            "data-state": Vu(u.open),
            ...c,
            ref: d,
            onClick: Ve(a.onClick, u.onOpenToggle)
        })
    });
lE.displayName = Ig;
var Lu = "DialogPortal",
    [aE, ep] = Wg(Lu, {
        forceMount: void 0
    }),
    tp = a => {
        const {
            __scopeDialog: r,
            forceMount: s,
            children: c,
            container: u
        } = a, d = $t(Lu, r);
        return f.jsx(aE, {
            scope: r,
            forceMount: s,
            children: x.Children.map(c, h => f.jsx(qi, {
                present: s || d.open,
                children: f.jsx(Uu, {
                    asChild: !0,
                    container: u,
                    children: h
                })
            }))
        })
    };
tp.displayName = Lu;
var xr = "DialogOverlay",
    np = x.forwardRef((a, r) => {
        const s = ep(xr, a.__scopeDialog),
            {
                forceMount: c = s.forceMount,
                ...u
            } = a,
            d = $t(xr, a.__scopeDialog);
        return d.modal ? f.jsx(qi, {
            present: c || d.open,
            children: f.jsx(oE, {
                ...u,
                ref: r
            })
        }) : null
    });
np.displayName = xr;
var iE = Ca("DialogOverlay.RemoveScroll"),
    oE = x.forwardRef((a, r) => {
        const {
            __scopeDialog: s,
            ...c
        } = a, u = $t(xr, s);
        return f.jsx(Hu, {
            as: iE,
            allowPinchZoom: !0,
            shards: [u.contentRef],
            children: f.jsx(Oe.div, {
                "data-state": Vu(u.open),
                ...c,
                ref: r,
                style: {
                    pointerEvents: "auto",
                    ...c.style
                }
            })
        })
    }),
    _l = "DialogContent",
    lp = x.forwardRef((a, r) => {
        const s = ep(_l, a.__scopeDialog),
            {
                forceMount: c = s.forceMount,
                ...u
            } = a,
            d = $t(_l, a.__scopeDialog);
        return f.jsx(qi, {
            present: c || d.open,
            children: d.modal ? f.jsx(rE, {
                ...u,
                ref: r
            }) : f.jsx(cE, {
                ...u,
                ref: r
            })
        })
    });
lp.displayName = _l;
var rE = x.forwardRef((a, r) => {
        const s = $t(_l, a.__scopeDialog),
            c = x.useRef(null),
            u = Xe(r, s.contentRef, c);
        return x.useEffect(() => {
            const d = c.current;
            if (d) return hg(d)
        }, []), f.jsx(ap, {
            ...a,
            ref: u,
            trapFocus: s.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: Ve(a.onCloseAutoFocus, d => {
                var h;
                d.preventDefault(), (h = s.triggerRef.current) == null || h.focus()
            }),
            onPointerDownOutside: Ve(a.onPointerDownOutside, d => {
                const h = d.detail.originalEvent,
                    g = h.button === 0 && h.ctrlKey === !0;
                (h.button === 2 || g) && d.preventDefault()
            }),
            onFocusOutside: Ve(a.onFocusOutside, d => d.preventDefault())
        })
    }),
    cE = x.forwardRef((a, r) => {
        const s = $t(_l, a.__scopeDialog),
            c = x.useRef(!1),
            u = x.useRef(!1);
        return f.jsx(ap, {
            ...a,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: d => {
                var h, g;
                (h = a.onCloseAutoFocus) == null || h.call(a, d), d.defaultPrevented || (c.current || (g = s.triggerRef.current) == null || g.focus(), d.preventDefault()), c.current = !1, u.current = !1
            },
            onInteractOutside: d => {
                var y, v;
                (y = a.onInteractOutside) == null || y.call(a, d), d.defaultPrevented || (c.current = !0, d.detail.originalEvent.type === "pointerdown" && (u.current = !0));
                const h = d.target;
                ((v = s.triggerRef.current) == null ? void 0 : v.contains(h)) && d.preventDefault(), d.detail.originalEvent.type === "focusin" && u.current && d.preventDefault()
            }
        })
    }),
    ap = x.forwardRef((a, r) => {
        const {
            __scopeDialog: s,
            trapFocus: c,
            onOpenAutoFocus: u,
            onCloseAutoFocus: d,
            ...h
        } = a, g = $t(_l, s), y = x.useRef(null), v = Xe(r, y);
        return Vv(), f.jsxs(f.Fragment, {
            children: [f.jsx(Nu, {
                asChild: !0,
                loop: !0,
                trapped: c,
                onMountAutoFocus: u,
                onUnmountAutoFocus: d,
                children: f.jsx(Au, {
                    role: "dialog",
                    id: g.contentId,
                    "aria-describedby": g.descriptionId,
                    "aria-labelledby": g.titleId,
                    "data-state": Vu(g.open),
                    ...h,
                    ref: v,
                    onDismiss: () => g.onOpenChange(!1)
                })
            }), f.jsxs(f.Fragment, {
                children: [f.jsx(sE, {
                    titleId: g.titleId
                }), f.jsx(fE, {
                    contentRef: y,
                    descriptionId: g.descriptionId
                })]
            })]
        })
    }),
    qu = "DialogTitle",
    ip = x.forwardRef((a, r) => {
        const {
            __scopeDialog: s,
            ...c
        } = a, u = $t(qu, s);
        return f.jsx(Oe.h2, {
            id: u.titleId,
            ...c,
            ref: r
        })
    });
ip.displayName = qu;
var op = "DialogDescription",
    rp = x.forwardRef((a, r) => {
        const {
            __scopeDialog: s,
            ...c
        } = a, u = $t(op, s);
        return f.jsx(Oe.p, {
            id: u.descriptionId,
            ...c,
            ref: r
        })
    });
rp.displayName = op;
var cp = "DialogClose",
    sp = x.forwardRef((a, r) => {
        const {
            __scopeDialog: s,
            ...c
        } = a, u = $t(cp, s);
        return f.jsx(Oe.button, {
            type: "button",
            ...c,
            ref: r,
            onClick: Ve(a.onClick, () => u.onOpenChange(!1))
        })
    });
sp.displayName = cp;

function Vu(a) {
    return a ? "open" : "closed"
}
var up = "DialogTitleWarning",
    [HE, fp] = Yb(up, {
        contentName: _l,
        titleName: qu,
        docsSlug: "dialog"
    }),
    sE = ({
        titleId: a
    }) => {
        const r = fp(up),
            s = `\`${r.contentName}\` requires a \`${r.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${r.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${r.docsSlug}`;
        return x.useEffect(() => {
            a && (document.getElementById(a) || console.error(s))
        }, [s, a]), null
    },
    uE = "DialogDescriptionWarning",
    fE = ({
        contentRef: a,
        descriptionId: r
    }) => {
        const c = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fp(uE).contentName}}.`;
        return x.useEffect(() => {
            var d;
            const u = (d = a.current) == null ? void 0 : d.getAttribute("aria-describedby");
            r && u && (document.getElementById(r) || console.warn(c))
        }, [c, a, r]), null
    },
    dE = Fg,
    mE = tp,
    hE = np,
    vE = lp,
    gE = ip,
    pE = rp,
    yE = sp;

function bE({
    ...a
}) {
    return f.jsx(dE, {
        "data-slot": "dialog",
        ...a
    })
}

function xE({
    ...a
}) {
    return f.jsx(mE, {
        "data-slot": "dialog-portal",
        ...a
    })
}

function SE({
    className: a,
    ...r
}) {
    return f.jsx(hE, {
        "data-slot": "dialog-overlay",
        className: Pe("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", a),
        ...r
    })
}

function EE({
    className: a,
    children: r,
    ...s
}) {
    return f.jsxs(xE, {
        "data-slot": "dialog-portal",
        children: [f.jsx(SE, {}), f.jsxs(vE, {
            "data-slot": "dialog-content",
            className: Pe("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", a),
            ...s,
            children: [r, f.jsxs(yE, {
                className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                children: [f.jsx(QS, {}), f.jsx("span", {
                    className: "sr-only",
                    children: "Close"
                })]
            })]
        })]
    })
}

function wE({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "dialog-header",
        className: Pe("flex flex-col gap-2 text-center sm:text-left", a),
        ...r
    })
}

function AE({
    className: a,
    ...r
}) {
    return f.jsx("div", {
        "data-slot": "dialog-footer",
        className: Pe("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", a),
        ...r
    })
}

function NE({
    className: a,
    ...r
}) {
    return f.jsx(gE, {
        "data-slot": "dialog-title",
        className: Pe("text-lg leading-none font-semibold", a),
        ...r
    })
}

function TE({
    className: a,
    ...r
}) {
    return f.jsx(pE, {
        "data-slot": "dialog-description",
        className: Pe("text-muted-foreground text-sm", a),
        ...r
    })
}
var Mr = "Checkbox",
    [CE, kE] = Bi(Mr),
    [jE, Gu] = CE(Mr);

function ME(a) {
    const {
        __scopeCheckbox: r,
        checked: s,
        children: c,
        defaultChecked: u,
        disabled: d,
        form: h,
        name: g,
        onCheckedChange: y,
        required: v,
        value: b = "on",
        internal_do_not_use_render: A
    } = a, [T, j] = yr({
        prop: s,
        defaultProp: u ?? !1,
        onChange: y,
        caller: Mr
    }), [U, w] = x.useState(null), [M, z] = x.useState(null), k = x.useRef(!1), B = U ? !!h || !!U.closest("form") : !0, P = {
        checked: T,
        disabled: d,
        setChecked: j,
        control: U,
        setControl: w,
        name: g,
        form: h,
        value: b,
        hasConsumerStoppedPropagationRef: k,
        required: v,
        defaultChecked: In(u) ? !1 : u,
        isFormControl: B,
        bubbleInput: M,
        setBubbleInput: z
    };
    return f.jsx(jE, {
        scope: r,
        ...P,
        children: RE(A) ? A(P) : c
    })
}
var dp = "CheckboxTrigger",
    mp = x.forwardRef(({
        __scopeCheckbox: a,
        onKeyDown: r,
        onClick: s,
        ...c
    }, u) => {
        const {
            control: d,
            value: h,
            disabled: g,
            checked: y,
            required: v,
            setControl: b,
            setChecked: A,
            hasConsumerStoppedPropagationRef: T,
            isFormControl: j,
            bubbleInput: U
        } = Gu(dp, a), w = Xe(u, b), M = x.useRef(y);
        return x.useEffect(() => {
            const z = d == null ? void 0 : d.form;
            if (z) {
                const k = () => A(M.current);
                return z.addEventListener("reset", k), () => z.removeEventListener("reset", k)
            }
        }, [d, A]), f.jsx(Oe.button, {
            type: "button",
            role: "checkbox",
            "aria-checked": In(y) ? "mixed" : y,
            "aria-required": v,
            "data-state": bp(y),
            "data-disabled": g ? "" : void 0,
            disabled: g,
            value: h,
            ...c,
            ref: w,
            onKeyDown: Ve(r, z => {
                z.key === "Enter" && z.preventDefault()
            }),
            onClick: Ve(s, z => {
                A(k => In(k) ? !0 : !k), U && j && (T.current = z.isPropagationStopped(), T.current || z.stopPropagation())
            })
        })
    });
mp.displayName = dp;
var hp = x.forwardRef((a, r) => {
    const {
        __scopeCheckbox: s,
        name: c,
        checked: u,
        defaultChecked: d,
        required: h,
        disabled: g,
        value: y,
        onCheckedChange: v,
        form: b,
        ...A
    } = a;
    return f.jsx(ME, {
        __scopeCheckbox: s,
        checked: u,
        defaultChecked: d,
        disabled: g,
        required: h,
        onCheckedChange: v,
        name: c,
        form: b,
        value: y,
        internal_do_not_use_render: ({
            isFormControl: T
        }) => f.jsxs(f.Fragment, {
            children: [f.jsx(mp, {
                ...A,
                ref: r,
                __scopeCheckbox: s
            }), T && f.jsx(yp, {
                __scopeCheckbox: s
            })]
        })
    })
});
hp.displayName = Mr;
var vp = "CheckboxIndicator",
    gp = x.forwardRef((a, r) => {
        const {
            __scopeCheckbox: s,
            forceMount: c,
            ...u
        } = a, d = Gu(vp, s);
        return f.jsx(qi, {
            present: c || In(d.checked) || d.checked === !0,
            children: f.jsx(Oe.span, {
                "data-state": bp(d.checked),
                "data-disabled": d.disabled ? "" : void 0,
                ...u,
                ref: r,
                style: {
                    pointerEvents: "none",
                    ...a.style
                }
            })
        })
    });
gp.displayName = vp;
var pp = "CheckboxBubbleInput",
    yp = x.forwardRef(({
        __scopeCheckbox: a,
        ...r
    }, s) => {
        const {
            control: c,
            hasConsumerStoppedPropagationRef: u,
            checked: d,
            defaultChecked: h,
            required: g,
            disabled: y,
            name: v,
            value: b,
            form: A,
            bubbleInput: T,
            setBubbleInput: j
        } = Gu(pp, a), U = Xe(s, j), w = fg(d), M = eg(c);
        x.useEffect(() => {
            const k = T;
            if (!k) return;
            const B = window.HTMLInputElement.prototype,
                q = Object.getOwnPropertyDescriptor(B, "checked").set,
                V = !u.current;
            if (w !== d && q) {
                const Y = new Event("click", {
                    bubbles: V
                });
                k.indeterminate = In(d), q.call(k, In(d) ? !1 : d), k.dispatchEvent(Y)
            }
        }, [T, w, d, u]);
        const z = x.useRef(In(d) ? !1 : d);
        return f.jsx(Oe.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: h ?? z.current,
            required: g,
            disabled: y,
            name: v,
            value: b,
            form: A,
            ...r,
            tabIndex: -1,
            ref: U,
            style: {
                ...r.style,
                ...M,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0,
                transform: "translateX(-100%)"
            }
        })
    });
yp.displayName = pp;

function RE(a) {
    return typeof a == "function"
}

function In(a) {
    return a === "indeterminate"
}

function bp(a) {
    return In(a) ? "indeterminate" : a ? "checked" : "unchecked"
}

function ou({
    className: a,
    ...r
}) {
    return f.jsx(hp, {
        "data-slot": "checkbox",
        className: Pe("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", a),
        ...r,
        children: f.jsx(gp, {
            "data-slot": "checkbox-indicator",
            className: "flex items-center justify-center text-current transition-none",
            children: f.jsx(Bu, {
                className: "size-3.5"
            })
        })
    })
}

function OE({
    onLogin: a
}) {
    const [r, s] = x.useState("bobi"), [c, u] = x.useState(""), d = () => {
        r && c && a()
    };
    return f.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4",
        children: f.jsxs(Tl, {
            className: "w-full max-w-md shadow-2xl",
            children: [f.jsxs(Ea, {
                className: "space-y-2",
                children: [f.jsx(wa, {
                    className: "text-2xl text-center",
                    children: "Connexion"
                }), f.jsx(kv, {
                    className: "text-center",
                    children: "Accédez au Studio de Génération"
                })]
            }), f.jsxs(Cl, {
                className: "space-y-4",
                children: [f.jsxs("div", {
                    className: "space-y-2",
                    children: [f.jsx(Le, {
                        htmlFor: "username",
                        children: "Identifiant"
                    }), f.jsx(ze, {
                        id: "username",
                        placeholder: "Entrez votre identifiant",
                        value: r,
                        onChange: h => s(h.target.value),
                        onKeyPress: h => h.key === "Enter" && d()
                    })]
                }), f.jsxs("div", {
                    className: "space-y-2",
                    children: [f.jsx(Le, {
                        htmlFor: "password",
                        children: "Mot de passe"
                    }), f.jsx(ze, {
                        id: "password",
                        type: "password",
                        placeholder: "Entrez votre mot de passe",
                        value: c,
                        onChange: h => u(h.target.value),
                        onKeyPress: h => h.key === "Enter" && d()
                    })]
                }), f.jsx(Je, {
                    onClick: d,
                    className: "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                    children: "Se connecter"
                })]
            })]
        })
    })
}

function _E({
    isOpen: a,
    onClose: r,
    briefId: s,
    briefData: c
}) {
    const [u, d] = x.useState(1), h = [{
        id: 1,
        title: "Brief global",
        icon: $g
    }, {
        id: 2,
        title: "Prompts Visuels",
        icon: mS
    }, {
        id: 3,
        title: "Génération Images",
        icon: xu
    }, {
        id: 4,
        title: "Génération Vidéos",
        icon: mr
    }, {
        id: 5,
        title: "Prompt voix-off",
        icon: ES
    }, {
        id: 6,
        title: "Génération Voix-off",
        icon: Su
    }, {
        id: 7,
        title: "Prompt Musique",
        icon: xv
    }, {
        id: 8,
        title: "Génération Musique",
        icon: xv
    }, {
        id: 9,
        title: "Instructions de montage",
        icon: yS
    }], g = ({
        step: y
    }) => {
        switch (y.id) {
            case 1:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Brief global"
                    }), f.jsxs("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4 text-sm",
                        children: [f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Contexte:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: c.context || "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Objectif:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: c.objective || "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Public cible:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: c.targetAudience || "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Message clé:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: c.centralMessage || "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Durée & format:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Ton & style:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: c.tone || "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Hook:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: c.hook || "N/A"
                            })]
                        }), f.jsxs("div", {
                            className: "p-3 bg-slate-50 rounded-lg border",
                            children: [f.jsx(Le, {
                                className: "font-semibold",
                                children: "Call-to-action:"
                            }), " ", f.jsx("span", {
                                className: "text-slate-700",
                                children: "N/A"
                            })]
                        })]
                    })]
                });
            case 2:
                return f.jsxs("div", {
                    className: "space-y-6",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Prompts Visuels"
                    }), f.jsxs("div", {
                        className: "space-y-4 p-4 border rounded-lg bg-slate-50",
                        children: [f.jsx("h4", {
                            className: "font-semibold",
                            children: "Prompt Vidéo (3 cases)"
                        }), [1, 2, 3].map(v => f.jsxs("div", {
                            className: "grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4 last:mb-0 p-3 border rounded-md bg-white",
                            children: [f.jsx(ze, {
                                placeholder: "Intention"
                            }), f.jsx(ze, {
                                placeholder: "Subject"
                            }), f.jsx(ze, {
                                placeholder: "Context"
                            }), f.jsx(ze, {
                                placeholder: "Action"
                            }), f.jsx(ze, {
                                placeholder: "Style"
                            }), f.jsx(ze, {
                                placeholder: "camera_motion"
                            }), f.jsx(ze, {
                                placeholder: "camera_framing"
                            }), f.jsx(ze, {
                                placeholder: "camera_angle"
                            }), f.jsx(ze, {
                                placeholder: "Composition"
                            }), f.jsx(ze, {
                                placeholder: "focus_lens"
                            }), f.jsx(ze, {
                                placeholder: "Ambiance"
                            })]
                        }, v))]
                    }), f.jsxs("div", {
                        className: "space-y-4 p-4 border rounded-lg bg-slate-50",
                        children: [f.jsx("h4", {
                            className: "font-semibold",
                            children: "Prompt Images"
                        }), f.jsx(vt, {
                            placeholder: "Prompt pour les images...",
                            rows: 3
                        })]
                    })]
                });
            case 3:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Génération Images"
                    }), f.jsx("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [1, 2, 3].map(v => f.jsxs("div", {
                            className: "aspect-square bg-slate-200 rounded flex items-center justify-center text-slate-500",
                            children: ["Image ", v]
                        }, v))
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            case 4:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Génération Vidéos"
                    }), f.jsx("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [1, 2, 3].map(v => f.jsxs("div", {
                            className: "aspect-video bg-slate-200 rounded flex items-center justify-center text-slate-500",
                            children: ["Vidéo ", v]
                        }, v))
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            case 5:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Prompt voix-off"
                    }), f.jsx(vt, {
                        placeholder: "Prompt pour la voix-off...",
                        rows: 3
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            case 6:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Génération Voix-off"
                    }), f.jsx("div", {
                        className: "h-24 bg-slate-200 rounded flex items-center justify-center text-slate-500",
                        children: "Prévisualisation audio"
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            case 7:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Prompt Musique"
                    }), f.jsx(vt, {
                        placeholder: "Prompt pour la musique...",
                        rows: 3
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            case 8:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Génération Musique"
                    }), f.jsx("div", {
                        className: "h-24 bg-slate-200 rounded flex items-center justify-center text-slate-500",
                        children: "Prévisualisation audio"
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            case 9:
                return f.jsxs("div", {
                    className: "space-y-4",
                    children: [f.jsx("h3", {
                        className: "text-lg font-semibold",
                        children: "Instructions de montage"
                    }), f.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Template choisi"
                            }), f.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [f.jsx(ze, {
                                    placeholder: "Nom du template"
                                }), f.jsx(Je, {
                                    variant: "outline",
                                    size: "icon",
                                    children: f.jsx(gS, {
                                        className: "w-4 h-4"
                                    })
                                })]
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Durée"
                            }), f.jsx(ze, {
                                placeholder: "Durée finale (ex: 30s)"
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-2 col-span-2",
                            children: [f.jsx(Le, {
                                children: "Raison du choix"
                            }), f.jsx(vt, {
                                placeholder: "Pourquoi ce template ?",
                                rows: 2
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Texte"
                            }), f.jsx(ze, {
                                placeholder: "Type (ex: Titre, Sous-titre)"
                            }), f.jsx(vt, {
                                placeholder: "Contenu du texte",
                                rows: 2
                            }), f.jsx(ze, {
                                placeholder: "Zone (ex: Haut gauche)"
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Logo"
                            }), f.jsx(ze, {
                                placeholder: "Utilisation (ex: Filigrane, Plein écran)"
                            }), f.jsx(ze, {
                                placeholder: "Variante (ex: Noir, Blanc)"
                            })]
                        })]
                    }), f.jsx(vt, {
                        placeholder: "Saisir la modification à effectuer...",
                        rows: 2
                    }), f.jsx("div", {
                        className: "flex justify-end",
                        children: f.jsx(Je, {
                            children: "Éditer"
                        })
                    })]
                });
            default:
                return null
        }
    };
    return f.jsx(bE, {
        open: a,
        onOpenChange: r,
        children: f.jsxs(EE, {
            className: "max-w-[90vw] h-[90vh] p-0 flex flex-col",
            children: [f.jsxs(wE, {
                className: "p-6 border-b",
                children: [f.jsxs(NE, {
                    className: "text-2xl font-bold text-slate-900",
                    children: ["Édition de la Génération #", s]
                }), f.jsx(TE, {
                    className: "text-slate-600",
                    children: "Ajustez les paramètres et visualisez les étapes de production."
                })]
            }), f.jsxs("div", {
                className: "flex flex-1 overflow-hidden",
                children: [f.jsxs("div", {
                    className: "w-72 bg-slate-50 border-r border-slate-200 p-6 space-y-4 overflow-y-auto",
                    children: [f.jsx("h2", {
                        className: "text-lg font-bold text-slate-900",
                        children: "Pipeline de Production"
                    }), f.jsx("nav", {
                        className: "space-y-1",
                        children: h.map(y => f.jsxs("button", {
                            onClick: () => d(y.id),
                            className: `flex items-center gap-3 w-full p-3 rounded-lg text-left transition-colors text-sm ${u===y.id?"bg-blue-100 text-blue-700 font-semibold":"text-slate-600 hover:bg-slate-100"}`,
                            children: [f.jsx(y.icon, {
                                className: "w-5 h-5 flex-shrink-0"
                            }), f.jsx("span", {
                                children: y.title
                            })]
                        }, y.id))
                    })]
                }), f.jsx("div", {
                    className: "flex-1 p-6 lg:p-8 overflow-y-auto",
                    children: g({
                        step: h.find(y => y.id === u)
                    })
                })]
            }), f.jsx(AE, {
                className: "p-6 border-t bg-white flex justify-end",
                children: f.jsxs(Je, {
                    className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                    children: [f.jsx(Bu, {
                        className: "w-4 h-4 mr-2"
                    }), "Appliquer les modifications"]
                })
            })]
        })
    })
}

function sanitizeFilename(name) {
    return name
        .normalize("NFD")               // Décompose les lettres accentuées
        .replace(/[\u0300-\u036f]/g, "") // Enlève les accents
        .replace(/'/g, "").replace(/¨/g, "")         // Enlève apostrophes et trémas
        .replace(/\s+/g, "_")          // Remplace les espaces par des underscores
        .replace(/[^a-zA-Z0-9_-]/g, "") // Enlève les autres caractères spéciaux
        .toLowerCase();                // Optionnel : tout en minuscules
}

function DE() {
    const [a, r] = x.useState(!1), [s, c] = x.useState("config"), [u, d] = x.useState(0), [h, g] = x.useState(0), [y, v] = x.useState(!1), [b, A] = x.useState([{
        id: 1,
        selectedPole: "",
        selectedFiliale: "",
        briefData: {
            objective: "Lancement d'un nouveau produit",
            context: "Campagne digitale pour Q4",
            targetAudience: "Jeunes adultes 18-25 ans",
            centralMessage: "Innovez votre quotidien",
            tone: "Dynamique et moderne",
            hook: "Le futur est déjà là."
        },
        products: ["PROD-001", "", "", "", ""],
        contentTypes: [],
        platforms: [],
        generations: []
    }])
    const T = {
        GD: {
            emoji: "🐦",
            filiales: ["Groupe Dubreuil", "Groupe Dubreuil Services"]
        },
        "Pôle Aérien": {
            emoji: "✈️",
            filiales: ["Air Caraïbes", "French bee"]
        },
        "Pôle Agri": {
            emoji: "🌾",
            filiales: ["Agrizone", "Agri Montauban", "Agri Santerre", "Gonnin Duris", "Migaud", "TMC Bejenne", "TMC Loc"]
        },
        "Pôle Auto": {
            emoji: "🚗",
            filiales: ["Automobiles Atlantic Recycl'Auto", "Auto Pièces Atlantique Carmoine", "CARREN", "Clarens", "MaNouvelleVoiture", "MyVU", "Ouest Pièces Auto Logistique", "Trident", "Ullis"]
        },
        "Pôle Poids Lourd": {
            emoji: "🚛",
            filiales: ["StarTrucks"]
        },
        "Pôle Énergies": {
            emoji: "⚡",
            filiales: ["Aloha", "Extruplast", "Flamino", "Lubexcel", "Ougier", "Solargie", "Soligest"]
        },
        "Pôle TP": {
            emoji: "🏗️",
            filiales: ["M3", "Bati Avenue", "Codimatra", "L.Caps", "Manuland", "Newloc", "Newloc PACA", "PACA Ventes", "Propel", "Tipmat"]
        },
        "Pôle Hôtellerie": {
            emoji: "🏨",
            filiales: ["Andina", "Bistro Yonnais", "Ibis Budget Sables d'Olonnes", "Ibis Styles Sables d'Olonnes", "Mercure Hotels La-Roche-sur-Yon", "Monkey place", "Square Lodge"]
        }
    };

let select = document.getElementById("menu-filiales");
if (!select) {
    select = document.createElement("select");
    select.id = "menu-filiales";
    document.body.appendChild(select); // Ou insérer dans le container souhaité
}

for (const pole in T) {
    const group = document.createElement("optgroup");
    group.label = `${T[pole].emoji} ${pole}`;
    T[pole].filiales.forEach(filiale => {
        const option = document.createElement("option");
        option.value = filiale;
        option.textContent = filiale;
        option.setAttribute("data-logo", `logo/${filiale}.png`);
        group.appendChild(option);
    });
    select.appendChild(group);
}
    
     const j = [{
        id: "animate",
        label: "Animé",
        icon: mr
    }, {
        id: "fixed",
        label: "Fixe",
        icon: xu
    }, {
        id: "sound",
        label: "Sonore",
        icon: Su
    }, {
        id: "text",
        label: "Textuel",
        icon: BS
    }] 
    const U = ["YouTube : 1920x1080, 20s", "LinkedIn : 1200x627, 20s", "TikTok : 1080x1920, 20s", "Instagram : 1080x1350, 20s", "Facebook : 1080x1080, 20s", "Twitter : 1200x1200, 15s"], w = () => {
        const V = JSON.parse(JSON.stringify(b[u]));
        V.id = Math.max(...b.map(Y => Y.id)) + 1, A([...b, V]), d(b.length)
    } 
    const M = (V, Y) => {
        const Z = [...b];
        Z[u].products[V] = Y, A(Z)
    }
    const z = (V, Y) => {
        const Z = [...b];
        Z[u].briefData[V] = Y, A(Z)
    } 
    const k = V => {
        const Y = [...b],
            Z = Y[u].contentTypes;
        Z.includes(V) ? Y[u].contentTypes = Z.filter(oe => oe !== V) : Y[u].contentTypes = [...Z, V], A(Y)
    } 
    const B = V => {
        const Y = [...b],
            Z = Y[u].platforms;
        Z.includes(V) ? Y[u].platforms = Z.filter(oe => oe !== V) : Y[u].platforms = [...Z, V], A(Y)
    } 
    const P = V => {
        const Y = [...b];
        Y[u].selectedFiliale = V, A(Y)
    } 

    const playQuack = () => {
  const audio = new Audio("https://storage.googleapis.com/z_videobot/veobot/Quack.mp3");
  audio.play();
};


    const q = b[u];

    return a ? f.jsxs("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
        children: [f.jsx("header", {
            className: "bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50",
            children: f.jsx("div", {
                className: "container mx-auto px-6 py-4",
                children: f.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [f.jsx("div", {
                            className: "w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center",
                            children: f.jsx(mr, {
                                className: "w-6 h-6 text-white"
                            })
                        }), f.jsxs("div", {
                            children: [f.jsx("h1", {
                                className: "text-xl font-bold text-slate-900",
                                children: "Studio de Génération"
                            }), f.jsx("p", {
                                className: "text-sm text-slate-500",
                                children: "Contenus Multiformats"
                            })]
                        })]
                    }), 
                    f.jsxs("div", {
  className: "flex items-center gap-3",
  children: [
// suppr d'ici son quack coin canard :
    f.jsxs(Je, {
      variant: "ghost",
      size: "sm",
      onClick: playQuack,
      children: [
        f.jsx("span", { className: "mr-2", children: "🦆" }),
        "Quack"
      ]
    }),
// jusqu'ici

    f.jsxs(Je, {
      variant: "ghost",
      size: "sm",
      children: [
        f.jsx(VS, { className: "w-4 h-4 mr-2" }),
        "Collaborateurs"
      ]
    }),
    f.jsxs(Je, {
      variant: "ghost",
      size: "sm",
      onClick: () => r(!1),
      children: [
        f.jsx(xS, { className: "w-4 h-4 mr-2" }),
        "Déconnexion"
      ]
    })
  ]
})]
                })
            })
        }), f.jsx("div", {
            className: "bg-white border-b border-slate-200",
            children: f.jsx("div", {
                className: "container mx-auto px-6",
                children: f.jsxs("div", {
                    className: "flex gap-1",
                    children: [f.jsx("button", {
                        onClick: () => c("config"),
                        className: `px-6 py-4 font-medium border-b-2 transition-colors ${s==="config"?"border-blue-600 text-blue-600":"border-transparent text-slate-600 hover:text-slate-900"}`,
                        children: "Configuration"
                    }), f.jsx("button", {
                        onClick: () => c("generations"),
                        className: `px-6 py-4 font-medium border-b-2 transition-colors ${s==="generations"?"border-blue-600 text-blue-600":"border-transparent text-slate-600 hover:text-slate-900"}`,
                        children: "Générations"
                    })]
                })
            })
        }), f.jsxs("main", {
            className: "container mx-auto px-6 py-8",
            children: [s === "config" && f.jsxs("div", {
                className: "max-w-6xl mx-auto space-y-6 animate-fade-in",
                children: [f.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [f.jsxs("div", {
                        children: [f.jsx("h2", {
                            className: "text-2xl font-bold text-slate-900",
                            children: "Configuration de la génération"
                        }), f.jsxs("p", {
                            className: "text-slate-600 mt-1",
                            children: ["Brief ", u + 1, " sur ", b.length]
                        })]
                    }), f.jsxs(Je, {
                        variant: "outline",
                        children: [f.jsx(iu, {
                            className: "w-4 h-4 mr-2"
                        }), "Charger un preset"]
                    })]
                }), f.jsxs(Tl, {
                    className: "hover:shadow-lg transition-shadow",
                    children: [f.jsx(Ea, {
                        children: f.jsxs(wa, {
                            className: "flex items-center gap-2",
                            children: [f.jsx(F2, {
                                className: "w-5 h-5 text-blue-600"
                            }), "Filiale / Marque"]
                        })
                    }), f.jsxs(Cl, {
                        children: [f.jsxs(ZS, {
                            value: q.selectedFiliale,
                            onValueChange: P,
                            children: [f.jsx(JS, {
                                children: f.jsx(KS, {
                                    placeholder: "Sélectionner une filiale..."
                                })
                            }), f.jsx(PS, {
                                className: "max-h-96",
                                children: Object.entries(T).map(([V, Y]) => f.jsxs("div", {
                                    children: [f.jsxs("div", {
                                        className: "px-2 py-1.5 text-sm font-semibold text-slate-600 flex items-center gap-2",
                                        children: [f.jsx("span", {
                                            children: Y.emoji
                                        }), f.jsx("span", {
                                            children: V
                                        })]
                                    }), Y.filiales.map(Z => f.jsx($S, {
                                        value: Z,
                                        children: Z
                                    }, Z))]
                                }, V))
                            })]
                        }), q.selectedFiliale && f.jsxs("div", {
                            className: "mt-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200",
                            children: [f.jsx("p", {
                                className: "text-sm font-medium text-slate-900",
                                children: q.selectedFiliale
                            }), f.jsx("p", {
                                className: "text-sm text-slate-600",
                                children: "Filiale sélectionnée"
                            })]
                        })]
                    })]
                }), f.jsxs(Tl, {
                    className: "hover:shadow-lg transition-shadow",
                    children: [f.jsxs(Ea, {
                        children: [f.jsx(wa, {
                            children: "Brief"
                        }), f.jsx(kv, {
                            children: "Configurez tous les paramètres de votre génération"
                        })]
                    }), f.jsxs(Cl, {
                        className: "space-y-6",
                        children: [f.jsxs("div", {
                            className: "space-y-4 pb-6 border-b border-slate-200",
                            children: [f.jsxs("h3", {
                                className: "font-semibold text-slate-900 flex items-center gap-2",
                                children: [f.jsx($g, {
                                    className: "w-4 h-4 text-blue-600"
                                }), "Brief créatif"]
                            }), f.jsxs("div", {
                                className: "space-y-2",
                                children: [f.jsx(Le, {
                                    children: "Objectif de la campagne"
                                }), f.jsx(ze, {
                                    placeholder: "Ex: Lancement produit, promotion saisonnière...",
                                    value: q.briefData.objective,
                                    onChange: V => z("objective", V.target.value)
                                })]
                            }), f.jsxs("div", {
                                className: "space-y-2",
                                children: [f.jsx(Le, {
                                    children: "Contexte"
                                }), f.jsx(vt, {
                                    placeholder: "Décrivez le contexte de votre campagne...",
                                    value: q.briefData.context,
                                    onChange: V => z("context", V.target.value),
                                    rows: 3
                                })]
                            }), f.jsxs("div", {
                                className: "space-y-2",
                                children: [f.jsx(Le, {
                                    children: "Public cible"
                                }), f.jsx(ze, {
                                    placeholder: "Ex: Professionnels, jeunes adultes, familles...",
                                    value: q.briefData.targetAudience,
                                    onChange: V => z("targetAudience", V.target.value)
                                })]
                            }), f.jsxs("div", {
                                className: "space-y-2",
                                children: [f.jsx(Le, {
                                    children: "Message central"
                                }), f.jsx(vt, {
                                    placeholder: "Message clé à transmettre...",
                                    value: q.briefData.centralMessage,
                                    onChange: V => z("centralMessage", V.target.value),
                                    rows: 2
                                })]
                            }), f.jsxs("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [f.jsxs("div", {
                                    className: "space-y-2",
                                    children: [f.jsx(Le, {
                                        children: "Ton & style"
                                    }), f.jsx(ze, {
                                        placeholder: "Ex: Professionnel, ludique, minimaliste...",
                                        value: q.briefData.tone,
                                        onChange: V => z("tone", V.target.value)
                                    })]
                                }), f.jsxs("div", {
                                    className: "space-y-2",
                                    children: [f.jsx(Le, {
                                        children: "Hook (accroche)"
                                    }), f.jsx(ze, {
                                        placeholder: "Première impression...",
                                        value: q.briefData.hook,
                                        onChange: V => z("hook", V.target.value)
                                    })]
                                })]
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-4 pb-6 border-b border-slate-200",
                            children: [f.jsxs("h3", {
                                className: "font-semibold text-slate-900 flex items-center gap-2",
                                children: [f.jsx(NS, {
                                    className: "w-4 h-4 text-blue-600"
                                }), "Sélection des produits"]
                            }), 
                            f.jsx("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                children: q.products.map((V, Y) => f.jsxs("div", {
                                    className: "space-y-2",
                                    children: [f.jsxs(Le, {
                                        className: "text-sm",
                                        children: ["Produit ", Y + 1]
                                    }), f.jsxs("div", {
                                        className: "space-y-2",
                                        children: [f.jsx(ze, {
                                            placeholder: `Référence produit ${Y+1}...`,
                                            value: V,
                                            onChange: Z => M(Y, Z.target.value)
                                        }), 
                                        f.jsxs(Je, {
                                            variant: "outline",
                                            size: "sm",
                                            className: "w-full",
                                            children: [f.jsx(iu, {
                                                className: "w-3 h-3 mr-2"
                                            }), "Upload media"]
                                        }), 
                                        V && f.jsxs("div", {
                                            className: "space-y-2",
                                            children: [f.jsx(ze, {
                                                placeholder: "Titre du média...",
                                                className: "text-xs"
                                            }), 
                                            f.jsx(vt, {
                                                placeholder: "Description, caractéristiques...",
                                                rows: 2,
                                                className: "text-xs"
                                            })]
                                        })]
                                    })]
                                }, Y))
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-4",
                            children: [f.jsxs("h3", {
                                className: "font-semibold text-slate-900 flex items-center gap-2",
                                children: [f.jsx(zS, {
                                    className: "w-4 h-4 text-blue-600"
                                }), "Options de génération"]
                            }), f.jsxs("div", {
                                className: "space-y-3",
                                children: [f.jsx(Le, {
                                    children: "Type de contenu (sélection multiple)"
                                }), f.jsx("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                                    children: j.map(V => f.jsxs("div", {
                                        className: "flex items-center space-x-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors",
                                        children: [f.jsx(ou, {
                                            id: V.id,
                                            checked: q.contentTypes.includes(V.id),
                                            onCheckedChange: () => k(V.id)
                                        }), f.jsxs("label", {
                                            htmlFor: V.id,
                                            className: "text-sm font-medium cursor-pointer flex-1 flex items-center gap-2",
                                            children: [f.jsx(V.icon, {
                                                className: "w-4 h-4"
                                            }), V.label]
                                        })]
                                    }, V.id))
                                })]
                            }), f.jsxs("div", {
                                className: "space-y-3",
                                children: [f.jsx(Le, {
                                    children: "Réseaux de diffusion"
                                }), f.jsx("div", {
                                    className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                    children: U.map(V => f.jsxs("div", {
                                        className: "flex items-center space-x-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors",
                                        children: [f.jsx(ou, {
                                            id: `platform-${V}`,
                                            checked: q.platforms.includes(V),
                                            onCheckedChange: () => B(V)
                                        }), f.jsx("label", {
                                            htmlFor: `platform-${V}`,
                                            className: "text-sm font-medium cursor-pointer flex-1",
                                            children: V
                                        })]
                                    }, V))
                                })]
                            }), f.jsxs("div", {
                                className: "space-y-2",
                                children: [f.jsx(Le, {
                                    children: "Format libre (optionnel)"
                                }), f.jsxs("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [f.jsx(ze, {
                                        placeholder: "Résolution (ex: 1920x1080)"
                                    }), f.jsx(ze, {
                                        placeholder: "Durée (ex: 30s)"
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [f.jsx(Je, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => d(Math.max(0, u - 1)),
                            disabled: u === 0,
                            children: f.jsx(nS, {
                                className: "w-4 h-4"
                            })
                        }), f.jsx("div", {
                            className: "flex gap-1",
                            children: b.map((V, Y) => f.jsx("button", {
                                onClick: () => d(Y),
                                className: `w-8 h-8 rounded flex items-center justify-center text-xs font-medium transition-colors ${Y===u?"bg-blue-600 text-white":"bg-slate-200 text-slate-700 hover:bg-slate-300"}`,
                                children: Y + 1
                            }, Y))
                        }), f.jsx(Je, {
                            variant: "outline",
                            size: "sm",
                            onClick: () => d(Math.min(b.length - 1, u + 1)),
                            disabled: u === b.length - 1,
                            children: f.jsx(aS, {
                                className: "w-4 h-4"
                            })
                        })]
                    }), f.jsxs("div", {
                        className: "flex gap-3",
                        children: [f.jsxs(Je, {
                            variant: "outline",
                            children: [f.jsx(_S, {
                                className: "w-4 h-4 mr-2"
                            }), "Sauvegarder comme preset"]
                        }), f.jsxs(Je, {
                            onClick: w,
                            className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                            children: [f.jsx(RS, {
                                className: "w-4 h-4 mr-2"
                            }), "Ajouter un brief"]
                        }), f.jsxs(Je, {
                            className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
                            children: [f.jsx(jS, {
                                className: "w-4 h-4 mr-2"
                            }), "Lancer la génération"]
                        })]
                    })]
                })]
            }), s === "generations" && f.jsxs("div", {
                className: "max-w-6xl mx-auto space-y-6 animate-fade-in",
                children: [f.jsxs("div", {
                    children: [f.jsx("h2", {
                        className: "text-2xl font-bold text-slate-900",
                        children: "Générations"
                    }), f.jsx("p", {
                        className: "text-slate-600 mt-1",
                        children: "Visualisez et gérez vos contenus générés"
                    })]
                }), f.jsx(Tl, {
                    children: f.jsx(Cl, {
                        className: "pt-6",
                        children: f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [f.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: "État de l'export"
                                }), f.jsx("span", {
                                    className: "text-sm text-slate-600",
                                    children: "5/27"
                                })]
                            }), f.jsx("div", {
                                className: "w-full bg-slate-200 rounded-full h-2",
                                children: f.jsx("div", {
                                    className: "bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full",
                                    style: {
                                        width: "18.5%"
                                    }
                                })
                            })]
                        })
                    })
                }), f.jsxs(Tl, {
                    children: [f.jsx(Ea, {
                        children: f.jsxs(wa, {
                            className: "flex items-center gap-2",
                            children: [f.jsx(uS, {
                                className: "w-5 h-5 text-blue-600"
                            }), "Prévisualisation finale"]
                        })
                    }), f.jsxs(Cl, {
                        className: "space-y-4",
                        children: [f.jsxs("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                            children: [f.jsx("div", {
                                className: "aspect-video bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center border border-slate-300",
                                children: f.jsx(mr, {
                                    className: "w-8 h-8 text-slate-500"
                                })
                            }), [1, 2, 3].map(V => f.jsx("div", {
                                className: "aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center border border-slate-300",
                                children: f.jsx(xu, {
                                    className: "w-8 h-8 text-slate-500"
                                })
                            }, V)), f.jsx("div", {
                                className: "aspect-square bg-gradient-to-br from-slate-200 to-slate-300 rounded-lg flex items-center justify-center border border-slate-300",
                                children: f.jsx(Su, {
                                    className: "w-8 h-8 text-slate-500"
                                })
                            })]
                        }), f.jsxs("div", {
                            className: "flex gap-2",
                            children: [f.jsxs(Je, {
                                variant: "outline",
                                className: "flex-1",
                                onClick: () => v(!0),
                                children: [f.jsx(Sv, {
                                    className: "w-4 h-4 mr-2"
                                }), "Éditer"]
                            }), f.jsxs(Je, {
                                className: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
                                children: [f.jsx(cS, {
                                    className: "w-4 h-4 mr-2"
                                }), "Télécharger"]
                            })]
                        })]
                    })]
                }), f.jsxs(Tl, {
                    children: [f.jsx(Ea, {
                        children: f.jsxs(wa, {
                            className: "flex items-center gap-2",
                            children: [f.jsx(Sv, {
                                className: "w-5 h-5 text-blue-600"
                            }), "Titrage et descriptions"]
                        })
                    }), f.jsxs(Cl, {
                        className: "space-y-4",
                        children: [f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Titre"
                            }), f.jsx(ze, {
                                placeholder: "Titre de votre contenu..."
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Description"
                            }), f.jsx(vt, {
                                placeholder: "Description détaillée...",
                                rows: 4
                            })]
                        }), f.jsxs("div", {
                            className: "space-y-2",
                            children: [f.jsx(Le, {
                                children: "Tags / Mots-clés"
                            }), f.jsx(ze, {
                                placeholder: "Séparez les tags par des virgules..."
                            })]
                        })]
                    })]
                }), f.jsxs(Tl, {
                    children: [f.jsx(Ea, {
                        children: f.jsxs(wa, {
                            className: "flex items-center gap-2",
                            children: [f.jsx(HS, {
                                className: "w-5 h-5 text-blue-600"
                            }), "Publication sur les plateformes"]
                        })
                    }), f.jsx(Cl, {
                        children: f.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: U.map(V => f.jsxs("div", {
                                className: "flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all",
                                children: [f.jsx(ou, {
                                    id: `export-${V}`
                                }), f.jsx("label", {
                                    htmlFor: `export-${V}`,
                                    className: "text-sm font-medium cursor-pointer flex-1",
                                    children: V
                                })]
                            }, V))
                        })
                    })]
                }), f.jsx("div", {
                    className: "flex justify-end",
                    children: f.jsxs(Je, {
                        className: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700",
                        children: [f.jsx(iu, {
                            className: "w-5 h-5 mr-2"
                        }), "Publier sur les plateformes"]
                    })
                })]
            })]
        }), f.jsx(_E, {
            isOpen: y,
            onClose: () => v(!1),
            briefId: u + 1,
            briefData: q.briefData
        })]
    }) : f.jsx(OE, {
        onLogin: () => r(!0)
    })
}


Jy.createRoot(document.getElementById("root")).render(f.jsx(x.StrictMode, {
    children: f.jsx(DE, {})
}));
