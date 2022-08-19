"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shareLinks = void 0;
var judgeclient_js_1 = require("./judgeclient.js");
var smsValue = function (val) {
    if ((0, judgeclient_js_1.judgeClient)() == "Android") {
        return "sms:?body=" + encodeURIComponent(val);
    }
    if ((0, judgeclient_js_1.judgeClient)() == "IOS") {
        return "sms:&body=" + encodeURIComponent(val);
    }
};
var shareLinks = function (_a) {
    var emailSubject = _a.emailSubject, text = _a.text, linkUrl = _a.linkUrl, socialMedia = _a.socialMedia;
    var app = socialMedia.toLowerCase();
    var telegramMsg = "tg://msg?text=" + encodeURIComponent(linkUrl);
    var facebookMsg = "fb://share/?u=" + encodeURIComponent(linkUrl);
    var whatsAppMsg = "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + linkUrl);
    var twitterMsg = "https://twitter.com/home?status=" + encodeURIComponent(text + linkUrl);
    var emailMsg = "mailto:?subject=".concat(emailSubject || text || linkUrl, "&body=") +
        encodeURIComponent(text + linkUrl);
    switch (app) {
        case "telegram":
            return telegramMsg;
        case "facebook":
            return facebookMsg;
        case "whatsapp":
            return whatsAppMsg;
        case "twitter":
            return twitterMsg;
        case "email":
            return emailMsg;
        case "message":
            return smsValue(text + linkUrl);
        default:
            break;
    }
};
exports.shareLinks = shareLinks;
var social = {
    emailSubject: "Hello email subject",
    text: "Hello text ",
    linkUrl: "www.google.com",
    socialMedia: "twitter",
};
var limk = (0, exports.shareLinks)(social);
console.log(limk);
