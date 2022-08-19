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
  switch (socialMedia) {
    case "Telegram":
      return "tg://msg?text=" + encodeURIComponent(linkUrl);

    case "Facebook":
      return "fb://share/?u=" + encodeURIComponent(linkUrl);

    case "WhatsApp":
      return (
        "https://api.whatsapp.com/send?text=" +
        encodeURIComponent(text + linkUrl)
      );

    case "Twitter":
      return (
        "https://twitter.com/home?status=" + encodeURIComponent(text + linkUrl)
      );

    case "Email":
      return (
        `mailto:?subject=${emailSubject || text || linkUrl}&body=` +
        encodeURIComponent(text + linkUrl)
      );

    case "Message":
      return smsValue(text + linkUrl);

    default:
      break;
  }
};
