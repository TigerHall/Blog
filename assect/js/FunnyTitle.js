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
    OriginTitle = document.title;
    document.title = "记得关掉❌";
    link.href = "./assect/pic/logo1.svg";
  } else {
    document.title = OriginTitle;
    link.href = "./assect/pic/logo.svg";
  }
  document.getElementsByTagName("head")[0].appendChild(link);
});
