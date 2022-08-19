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
    switch (socialMedia) {
        case "Telegram":
            return "tg://msg?text=" + encodeURIComponent(linkUrl);
        case "Facebook":
            return "fb://share/?u=" + encodeURIComponent(linkUrl);
        case "WhatsApp":
            return ("https://api.whatsapp.com/send?text=" +
                encodeURIComponent(text + linkUrl));
        case "Twitter":
            return ("https://twitter.com/home?status=" + encodeURIComponent(text + linkUrl));
        case "Email":
            return ("mailto:?subject=".concat(emailSubject || text || linkUrl, "&body=") +
                encodeURIComponent(text + linkUrl));
        case "Message":
            return smsValue(text + linkUrl);
        default:
            break;
    }
};
exports.shareLinks = shareLinks;
