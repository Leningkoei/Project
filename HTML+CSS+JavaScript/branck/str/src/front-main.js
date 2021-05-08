//      string changeTitle(str str);
function moveTitle(str){
    //      设置当前标题栏和状态栏中要显示的字符;
    str = str.substring(1, str.length) + str.substring(0, 1);
    document.title = str;
    status = str;
    return str;
}
function frontMain(){
    var str;
    var newStr;
    var newStr0;
    var newStr1;
    str = "欢迎光临本站!";
    //      如果字符串长度大于限制长度(20);
    if (str.length > 20){
        //      使它变回初始状态;
        str = "欢迎光临本站!";
    }
    //      向setInterval和setTimeout中传递((含局部变量类型的参数)的函数)形式的参数需要使用匿名函数方式
    setInterval((function(){str = moveTitle(str)}), 500);
    newStr0 = "nmsl";
    newStr1 = "Sb";
    newStr = newStr0.concat(newStr1);
    document.write("字符串: " + newStr + "<br>");
    document.write("字符串的长度: " + newStr.length + "<br>");
    document.write("字符串字母转换大写: " + newStr.toUpperCase() + "<br>");
    document.write("这是指向" + newStr0.link("http://www.leningkoei.com")+ "的超链接");
}
window.onload = frontMain();
