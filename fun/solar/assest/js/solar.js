
/*初始化*/
window.onload = function () {
    RandomXiaoxingxing(2400);
    RandomXingxing(240);
};

window.onresize = function () {
    RandomXingxing(240);
};

/*随机生成小行星*/
function RandomXiaoxingxing(num) {
    var xiaoxingxing = '';
    for (let i = num; i >= 0; i--) {
        /*X轴坐标*/
        let j = Math.round(Math.random() * 360) - 180;
        /*Y轴坐标*/
        let k = Math.round(Math.random() * 360) - 180;
        /*随机透明度*/
        let l = Math.random() * 0.5;
        /*环形判断*/
        if (j * j + k * k <= 160 * 160) {
            xiaoxingxing += (j + 'px ' + k + 'px 0 -139px rgba(255,255,255,' + l + '),')
        }
    }
    /*截掉最后多余的逗号*/
    xiaoxingxing = xiaoxingxing.substr(0, xiaoxingxing.length - 1);
    /*添加到页面*/
    document.getElementsByClassName('xiaoxingxing')[0].style.boxShadow = xiaoxingxing;
}

/*随机生成背景星星*/
function RandomXingxing(num) {
    let windowHeight = document.body.clientHeight;
    let windowWidth = document.body.clientWidth;
    var xingxing = '';
    for (let i = num; i >= 0; i--) {
        /*X轴坐标*/
        let j = Math.round(Math.random() * windowWidth);
        /*Y轴坐标*/
        let k = Math.round(Math.random() * windowHeight);
        /*阴影大小*/
        let n = Math.round(Math.random() * 0.52);
        /*随机透明度*/
        let l = Math.random() * 0.5;
        /*添加阴影*/
        for (let m = 0; m < 2; m++) {
            xingxing += (j + 'px ' + k + 'px 0 ' + n + 'px rgba(255,255,255,' + l + '),');
            xingxing += (j + 'px ' + (windowHeight + k) + 'px 0 ' + n + 'px rgba(255,255,255,' + l + '),');
        }
    }
    /*截掉最后多余的逗号*/
    xingxing = xingxing + xingxing.substr(0, xingxing.length - 1);
    /*添加到页面*/
    document.getElementsByClassName('xingxing')[0].style.boxShadow = xingxing;
}

/*随机星球位置*/
function RandomPosition() {
    let num1 = Math.random() * 45;
    let x1 = (Math.random() > 0.5 ? 1 : -1) * num1 - 4 / 2;
    let y1 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(45 * 45 - num1 * num1) - 4 / 2;
    let shui = document.getElementsByClassName('shuixing-xitong')[0].style;
    shui.marginTop = x1 + 1 / 2 + 'px';
    shui.marginLeft = y1 + 1 / 2 + 'px';
    shui.transformOrigin = (-y1) + 'px ' + (-x1) + 'px';

    let num2 = Math.random() * 60;
    let x2 = (Math.random() > 0.5 ? 1 : -1) * num2 - 8 / 2;
    let y2 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(60 * 60 - num2 * num2) - 8 / 2;
    let jin = document.getElementsByClassName('jinxing-xitong')[0].style;
    jin.marginTop = x2 + 'px';
    jin.marginLeft = y2 + 'px';
    jin.transformOrigin = (-y2) + 'px ' + (-x2) + 'px';

    let num3 = Math.random() * 90;
    let x3 = (Math.random() > 0.5 ? 1 : -1) * num3 - 16 / 2;
    let y3 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(90 * 90 - num3 * num3) - 16 / 2;
    let di = document.getElementsByClassName('diqiu-xitong')[0].style;
    di.marginTop = x3 + 'px';
    di.marginLeft = y3 + 'px';
    di.transformOrigin = (-y3) + 'px ' + (-x3) + 'px';

    let num4 = Math.random() * 120;
    let x4 = (Math.random() > 0.5 ? 1 : -1) * num4 - 16 / 2;
    let y4 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(120 * 120 - num4 * num4) - 16 / 2;
    let huo = document.getElementsByClassName('huoxing-xitong')[0].style;
    huo.marginTop = x4 + 'px';
    huo.marginLeft = y4 + 'px';
    huo.transformOrigin = (-y4) + 'px ' + (-x4) + 'px';

    let num5 = Math.random() * 190;
    let x5 = (Math.random() > 0.5 ? 1 : -1) * num5 - 40 / 2;
    let y5 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(190 * 190 - num5 * num5) - 40 / 2;
    let mu = document.getElementsByClassName('muxing-xitong')[0].style;
    mu.marginTop = x5 + 'px';
    mu.marginLeft = y5 + 'px';
    mu.transformOrigin = (-y5) + 'px ' + (-x5) + 'px';

    let num6 = Math.random() * 240;
    let x6 = (Math.random() > 0.5 ? 1 : -1) * num6 - 24 / 2;
    let y6 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(240 * 240 - num6 * num6) - 24 / 2;
    let tu = document.getElementsByClassName('tuxing-xitong')[0].style;
    tu.marginTop = x6 + 'px';
    tu.marginLeft = y6 + 'px';
    tu.transformOrigin = (-y6) + 'px ' + (-x6) + 'px';

    let num7 = Math.random() * 290;
    let x7 = (Math.random() > 0.5 ? 1 : -1) * num7 - 20 / 2;
    let y7 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(290 * 290 - num7 * num7) - 20 / 2;
    let tian = document.getElementsByClassName('tianwangxing-xitong')[0].style;
    tian.marginTop = x7 + 'px';
    tian.marginLeft = y7 + 'px';
    tian.transformOrigin = (-y7) + 'px ' + (-x7) + 'px';

    let num8 = Math.random() * 340;
    let x8 = (Math.random() > 0.5 ? 1 : -1) * num8 - 18 / 2;
    let y8 = (Math.random() > 0.5 ? 1 : -1) * Math.sqrt(340 * 340 - num8 * num8) - 18 / 2;
    let hai = document.getElementsByClassName('haiwangxing-xitong')[0].style;
    hai.marginTop = x8 + 'px';
    hai.marginLeft = y8 + 'px';
    hai.transformOrigin = (-y8) + 'px ' + (-x8) + 'px';
}

/*背景颜色*/
function changeBgColor(color) {
    document.getElementsByClassName('taiyangxi')[0].style.backgroundColor = window.getComputedStyle(color).backgroundColor;
    document.getElementsByTagName('body')[0].style.backgroundColor = window.getComputedStyle(color).backgroundColor;
}

/*更改语言*/
function changeLanguage(btn) {
    let zh = document.getElementsByClassName('zh');
    let en = document.getElementsByClassName('en');
    if (btn.value === 'EN') {
        btn.value = '中';
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'none';
            en[i].style.display = 'table-cell';
        }
    } else {
        btn.value = 'EN';
        for (let i = 0; i < zh.length; i++) {
            zh[i].style.display = 'table-cell';
            en[i].style.display = 'none';
        }
    }
}

/*弹出面板*/
function popUp(btn) {
    btn.classList.toggle('optionBtnHide');
    document.getElementById('option').classList.toggle('optionHide');
}
