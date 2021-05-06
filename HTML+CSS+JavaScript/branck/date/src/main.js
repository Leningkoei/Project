function getTime(){
    var now;
    var hour;
    var minute;
    var second;

    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    timeStr = "现在时间是: " + hour + " : " + minute + " : " + second;
    alert (timeStr);
}
