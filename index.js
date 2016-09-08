(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.zip_array = factory();
  }
}(this, function () {
    return function zip_array(a, callback){
        var ret = [];
        for(var i=0, l=a.length, ai; i < l; i++) {
            for(var j=0, ai=a[i], m=ai.length; j < m; j++) {
                ret[j] = ret[j] || [];
                ret[j][i] = ret[j][i] || [];
                ret[j][i] = ai[j];
            }
        }
        callback(ret)
    };
}));

