(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['ziparray'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('ziparray'));
    } else {
        root.returnExports = factory(root.ziparray);
    }
}(this, function () {
    return function(a, callback) {
        var ret = [];
        for(var i=0, l=a.length, ai; i < l; i++) {
            for(var j=0, ai=a[i], m=ai.length; j < m; j++) {
                ret[j] = ret[j] || [];
                ret[j][i] = ret[j][i] || [];
                ret[j][i] = ai[j];
            }
        }
        return callback(ret)
    };
}));
