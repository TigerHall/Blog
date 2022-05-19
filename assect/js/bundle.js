let previousLink = document.location.href,
  nextLink = document.location.href;

let linkRefresher = () => {
  let previousArr = document.getElementsByClassName('pagination-item pagination-item--previous'),
    nextArr = document.getElementsByClassName('pagination-item pagination-item--next');

  previousLink = previousArr[0] ?
    previousArr[0].getElementsByTagName('a')[0].href :
    document.location.href;

  nextLink = nextArr[0] ?
    nextArr[0].getElementsByTagName('a')[0].href :
    document.location.href;
};

document.onkeydown = (e) => {
  e = e || window.event;

  switch (e.key) {
    case 'ArrowRight': document.location.href = nextLink; break;
    case 'ArrowLeft': document.location.href = previousLink; break;
    case 'l': document.location.href = nextLink; break;
    case 'h': document.location.href = previousLink; break;
  }
}; window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat([
  (hook, vm) => hook.doneEach(linkRefresher)
]);

//监听用户滑动手势
$("body").on("touchstart", function (e) {
  e.preventDefault();
  startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").on("touchmove", function (e) {
  e.preventDefault();
  moveEndX = e.originalEvent.changedTouches[0].pageX,
    moveEndY = e.originalEvent.changedTouches[0].pageY,
    X = moveEndX - startX,
    Y = moveEndY - startY;

  if (Math.abs(X) > Math.abs(Y) && X > 0) {
    document.location.href = nextLink;
    // alert("左到右");
    // $("#myCarousel").carousel('prev');
  }
  else if (Math.abs(X) > Math.abs(Y) && X < 0) {
    document.location.href = previousLink
    // alert("右到左");
    // $("#myCarousel").carousel('next');
  }
  else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
    // alert("上到下");
  }
  else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
    // alert("下到上");
  }
  else {
    //alert("just touch");
  }
});
