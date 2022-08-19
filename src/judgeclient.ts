export const judgeClient = () => {
  let u = navigator.userAgent;

  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //iOS
  if (isAndroid) {
    return "Android";
  } else if (isIOS) {
    return "IOS";
  } else {
    return "PC";
  }
};
