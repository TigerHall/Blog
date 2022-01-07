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
//   $('[rel="icon"]').attr("href", "../pic/logo2.svg");
// };

// 方法2
var link =
  document.querySelector('link[rel*="icon"]') || document.createElement("link");
link.rel = "shortcut icon";

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState == "hidden") {
    normal_title = document.title;
    document.title = "记得关掉";
    link.href = "./assect/pic/logo1.svg";
  } else {
    document.title = "💓欢迎回来💓";
    setTimeout(function () {
      document.title = normal_title;
    }, 1600);
    link.href = "./assect/pic/logo.svg";
  }
  document.getElementsByTagName("head")[0].appendChild(link);
});
