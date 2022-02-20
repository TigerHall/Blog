// 浏览器动态标题

// 方法1

// window.onfocus = function () {
//   var OriginTitle = document.title;
//   document.title = "欢迎回来💓";
//   setTimeout(function () {
//     document.title = OriginTitle;
//   }, 1600);
// };
// window.onblur = function () {
//   document.title = "不想看❌就关掉";
// };

// 方法2
// var link =
//   document.querySelector('link[rel*="icon"]') || document.createElement("link");
// link.rel = "shortcut icon";

// document.addEventListener("visibilitychange", function () {
//   if (document.visibilityState == "hidden") {
//     OriginTitle = document.title;
//     document.title = "关掉撒❌";
//     link.href = "./assect/pic/logo1.svg";
//   } else {
//     document.title = "💓欢迎回来 📖";
//     setTimeout(function () {
//       document.title = OriginTitle;
//     }, 666);
//     link.href = "./assect/pic/logo.svg";
//   }
//   document.getElementsByTagName("head")[0].appendChild(link);
// });

// 简洁完成

var link =
  document.querySelector('link[rel*="icon"]') || document.createElement("link");
link.rel = "shortcut icon";

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "hidden") {
    link.href = "./assect/pic/logo1.svg";
  } else {
    link.href = "./assect/pic/logo.svg";
  }
  document.getElementsByTagName("head")[0].appendChild(link);
});

// 阅读时间
var c = 1;

function showLogin() {
  if (document.visibilityState == "hidden") {
  } else {
    c++;
    t = "测试";
    if (c > 3600) {
      h = parseInt(c / 3600);
      m = parseInt((c - h * 3600) / 60);
      s = c - h * 3600 - m * 60;
      t = h + "小时 - " + m + "分钟 - " + s + "秒";
    } else if (c > 60) {
      m = parseInt(c / 60);
      s = c - m * 60;
      t = m + "分钟 - " + s + "秒";
    } else {
      s = c;
      t = s + "秒";
    }
    if (document.title.includes("秒")) {
    } else {
      OriginTitle = document.title;
    }
    document.title = OriginTitle + " 已阅读本站 " + t;
  }
}
setInterval("showLogin()", "1000");
