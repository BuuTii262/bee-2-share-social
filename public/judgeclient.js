"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.judgeClient = void 0;
var judgeClient = function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //iOS
    if (isAndroid) {
        return "Android";
    }
    else if (isIOS) {
        return "IOS";
    }
    else {
        return "PC";
    }
};
exports.judgeClient = judgeClient;
