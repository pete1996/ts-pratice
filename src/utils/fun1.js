function enumize() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var ret = {};
    args.forEach(function (k) {
        ret[k] = k;
    });
    return ret;
}
var p = enumize("zhangsan", "lisi", "wangwu");
function useRequest(api, params) {
    return api;
}
var key = "sss";
useRequest(key);
