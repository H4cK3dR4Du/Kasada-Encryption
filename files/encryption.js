(function anonymous() {
    return (function() {
        function e(i, m) {
            var p = m * 8;
            return [o(i, p), o(i, p + 4)];
        }
        function t(i, m, _ref) {
            var p = _ref[0]
              , c = _ref[1];
            var s = m * 8;
            i[s] = p >> 24 & 255,
            i[s + 1] = p >> 16 & 255,
            i[s + 2] = p >> 8 & 255,
            i[s + 3] = p & 255,
            i[s + 4] = c >> 24 & 255,
            i[s + 5] = c >> 16 & 255,
            i[s + 6] = c >> 8 & 255,
            i[s + 7] = c & 255;
        }
        function r(i, m) {
            var p = m[0]
              , c = m[1]
              , s = 0
              , g = 2654435769;
            for (var d = 0; d < 32; d += 1)
                p = p + ((c << 4 ^ c >> 5) + c ^ s + i[s & 3]) | 0,
                s = s + g | 0,
                c = c + ((p << 4 ^ p >> 5) + p ^ s + i[s >> 11 & 3]) | 0;
            return [p, c];
        }
        function n(i, _ref2, _ref3, g, d) {
            var m = _ref2[0]
              , p = _ref2[1];
            var c = _ref3[0]
              , s = _ref3[1];
            var _ = r(i, [c ^ m, s ^ p]);
            return t(g, d, _),
            _;
        }
        function o(i, m) {
            return i[m] << 24 | i[m + 1] << 16 | i[m + 2] << 8 | i[m + 3] << 0;
        }
        function a(i) {
            if (i.length !== 8)
                throw new Error("iv must be 64-bit");
            return [o(i, 0), o(i, 4)];
        }
        function l(i) {
            if (i.length !== 16)
                throw new Error("key must be 128-bit");
            return [o(i, 0), o(i, 4), o(i, 8), o(i, 12)];
        }
        function u(i, m, p) {
            var c = l(i)
              , s = a(m)
              , g = 5
              , d = []
              , _ = Math.ceil(p.length / 8)
              , S = 0
              , R = 0
              , x = []
              , y = n(c, [0, 0], s, x, R++);
            for (d.push([0, p.length]); d.length < g && S < _; )
                d.push(e(p, S++));
            var w = 0;
            for (; d.length > 0; ) {
                w = (w + y[0]) % d.length,
                w < 0 && (w += d.length);
                var E = d[w];
                y = n(c, y, E, x, R++),
                S < _ ? d[w] = e(p, S++) : d.splice(w, 1);
            }
            return x; // Add breakpoint here in devtools so you can debug and check for iv, key & payload
        }
        return [u, n, e];
    }
    )
}
)