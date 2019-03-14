function e(e, t) {
    for (var o, n = 0; n < t.length; n++)
        o = t[n],
        o.enumerable = o.enumerable || !1,
        o.configurable = !0,
        'value' in o && (o.writable = !0),
        Object.defineProperty(e, o.key, o)
}
return function(t, o, n) {
    return o && e(t.prototype, o),
        n && e(t, n),
        t
}