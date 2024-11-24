function fetchBytecode(vm, alphabet, constants) {
    function l(v, u, f) {
        for (var a = u.length, r = a - f, t = [], M = 0; M < v.length; )
            for (var h = 0, l = 1; ; ) {
                var x = u.indexOf(v[M++]);
                if (h += l * (x % f),
                x < f) {
                    t.push(h | 0);
                    break
                }
                h += f * l,
                l *= r
            }
        return t
    }
    
    var T = "length";
    var t = l(vm, alphabet, 50);
    var u = t[T];
    var c = u + 4;
    var v = 28;
    
    for (var a = "", c = u + (a + !0)[T], E = {
        e: ""
    }, v = 0; v < 28; v++)
        a += String.fromCharCode(97 + Math.floor(26 * Math.random()));
    
    var P = t[u + a.indexOf(".")] ^ c
    var idk = t[P + 1];
    var O = t.splice(P, idk + 2);

    var R = function(v, u, f, a) {
        v[u[0]++];
        
        for (var t = "", M = v[u[0]++], h = 0; h < M; h++) {
            var l = v[u[0]++];
            t += String.fromCharCode(l & 4294967232 | l * 59 & 63)
        }
        return t
    }
    
    var E = R(O, [0], constants);
    
    return E;
}