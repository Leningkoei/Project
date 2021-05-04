var getTime;
var showTime;
var main;

getTime = function()
{
    var hour;
    var minute;
    var now;
    var second;

    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    if (minute < 10)
    {
        minute = "0" + minute;
    }
    if (second < 10)
    {
        second = "0" + second;
    }
    a1.innerHTML = hour + ":" + minute + ":" + second;
}
var OnlineStayTime;
var hourStopwatch;
var minuteStopwatch;
var secondStopwatch;
OnlineStayTime = function()
{
    secondStopwatch++;
    if (secondStopwatch == 60)
    {
        secondStopwatch = 0;
        minuteStopwatch++;
    }
    if (minuteStopwatch == 60)
    {
        minuteStopwatch == 0;
        hourStopwatch++;
    }
    a2.innerHTML="您在本网页停留时间" + hourStopwatch + "小时" + minuteStopwatch + "分钟" + secondStopwatch + "秒钟";
}

showTime = function()
{
    /*
    今天是...年...月...日
    <br>
    ...曜日
    <br>
    现在时间
    <br>
    根据现在时间的小时输出提示信息
    <br>
    您在本网页停留的时间
    */

    var hour;
    //var hourStopwatch;
    //var minuteStopwatch;
    //var secondStopwatch;
    var today;
    var todayInfor;
    var week;

    //var OnlineStayTime;

    today = new Date();
    week = new Array("日", "月", "火", "水", "木", "金", "土");
    //      today.getDay()/* 0 ~ 6 */作为数组week的下标索引
    todayInfor = "今天是" + (today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日<br>" + week[today.getDay()] + "曜日");
    document.write(todayInfor + "<br>");
    
    document.write("<p id=\"a1\">您在本网页停留的时间</p>");setInterval("getTime()", 1000);
    hour = today.getHours();
    if (hour === 23 || hour >= 0 && hour < 6) document.write("你这年龄段这个点睡得着觉?");
    if (hour >= 6 && hour < 12) document.write("开心上班.jpg");
    if (hour >= 12 && hour < 14) document.write("继续上班 中午ver");
    if (hour >= 14 && hour < 18) document.write("继续上班 下午ver");
    if (hour >= 18 && hour < 23) document.write("加班time");
    document.write("<p id=\"a2\"></p>");
    hourStopwatch = 0;
    minuteStopwatch = 0;
    secondStopwatch = 0;
    /*
    OnlineStayTime = function()
    {
        secondStopwatch++;
        if (secondStopwatch == 60)
        {
            secondStopwatch = 0;
            minuteStopwatch++;
        }
        if (minuteStopwatch == 60)
        {
            minuteStopwatch == 0;
            hourStopwatch++;
        }
        a2.innerHTML="您在本网页停留时间" + hourStopwatch + "小时" + minuteStopwatch + "分钟" + secondStopwatch + "秒钟";
    }
    */
    window.setInterval("OnlineStayTime()", 1000);
}

main = function()
{
    //this.getTime();
    this.showTime();
}

window.onload = main();
