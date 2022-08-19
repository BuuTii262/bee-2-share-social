import { judgeClient } from "./judgeclient.js";

interface Type {
  emailSubject?: string;
  text?: string;
  linkUrl: string;
  socialMedia: string;
}

const smsValue = (val: string) => {
  if (judgeClient() == "Android") {
    return "sms:?body=" + encodeURIComponent(val);
  }
  if (judgeClient() == "IOS") {
    return "sms:&body=" + encodeURIComponent(val);
  }
};

export const shareLinks = ({
  emailSubject,
  text,
  linkUrl,
  socialMedia,
}: Type) => {
  let app = socialMedia.toLowerCase();
  let telegramMsg: string = "tg://msg?text=" + encodeURIComponent(linkUrl);
  let facebookMsg: string = "fb://share/?u=" + encodeURIComponent(linkUrl);
  let whatsAppMsg: string =
    "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + linkUrl);
  let twitterMsg: string =
    "https://twitter.com/home?status=" + encodeURIComponent(text + linkUrl);
  let emailMsg: string =
    `mailto:?subject=${emailSubject || text || linkUrl}&body=` +
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

let social = {
  emailSubject: "Hello email subject",
  text: "Hello text ",
  linkUrl: "www.google.com",
  socialMedia: "twitter",
};
let limk = shareLinks(social);

console.log(limk);
