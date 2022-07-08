var dsd = 0;

function checkTime() {
    // 可选检查5次元素,检测到元素才执行
    if (dsd < 5) {
        // dsd++;
        window.setTimeout("checkTime()", 1000);
        // console.log(dsd + '次检查 ' + ' -元素情况：' + document.getElementById('sitetime'));
        if (document.getElementById('sitetime') < 1) {
            return;
        } else {
            // console.log('执行次数+1');
            siteTime();
        }
    }
}

checkTime();

function siteTime() {
    // 设定时间UTC的算法日期
    var seconds = 1000;
    var minutes = seconds * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    // 获取现在时间
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth() + 1;
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    // 设定建站日期t1，当前日期t2，获得差值diff
    var t1 = Date.UTC(2020, 04, 15, 21, 04, 16);
    var t2 = Date.UTC(
        todayYear,
        todayMonth,
        todayDate,
        todayHour,
        todayMinute,
        todaySecond
    );
    var diff = t2 - t1;
    // 向下取整获得日期
    var diffYears = Math.floor(diff / years);
    var diffDays = Math.floor(diff / days - diffYears * 365);
    var diffHours = Math.floor(
        (diff - (diffYears * 365 + diffDays) * days) / hours
    );
    var diffMinutes = Math.floor(
        (diff - (diffYears * 365 + diffDays) * days - diffHours * hours) /
        minutes
    );
    var diffSeconds = Math.floor(
        (diff -
            (diffYears * 365 + diffDays) * days -
            diffHours * hours -
            diffMinutes * minutes) /
        seconds
    );

    // console.log(document.getElementById('sitetime'))

    document.getElementById("sitetime").innerHTML =
        "网站已运行： "
        + diffYears + " 年 "
        + diffDays + " 天 "
        + diffHours + " 小时 "
        + diffMinutes + " 分钟 "
        + diffSeconds + " 秒";

    // 如果日期为负数，则终止程序，即日期不对
    if (diffYears < 0) {
        document.getElementById("sitetime").innerHTML = '程序设计日期有误';
    }

}