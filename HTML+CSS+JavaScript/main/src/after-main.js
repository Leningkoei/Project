//      bool checkEmailName();
//      bool checkPassword();
//      void checkVeriCode();
//      void makeMap();
//      void makeVeriCode();
function checkEmailName(){
    var emailNameStr;
    var atIndex;
    var dotIndex;
    emailNameStr = document.form0.email.value;
    atIndex = emailNameStr.indexOf("@");
    dot = emailNameStr.indexOf(".");
    if (emailNameStr.length === 0){
        alert("请输入邮箱名")
        return false;
    }
    if (atIndex === -1 || dotIndex === -1){
        alert("邮箱名必须包含@和.符号");
        return false;
    }
    if (atIndex === 0 || dotIndex === 0 || atIndex === emailNameStr.length - 1)
        {
        alert("字符@或.不能出现在第0位, 字符.不能出现在第-1位");
        return false;
    }
    if (atIndex > dotIndex){
        alert("字符@必须出现在字符.的前面");
        return false;
    }
    if (dotIndex - atIndex === 1){
        alert("字符@和字符.之间应该包含内容");
        return false;
    }
    if (atIndex !== emailNameStr.lastIndexOf('@')){
        alert("字符@只能出现1次");
        return false;
    }
    if (atIndex != -1 && emailNameStr.substring(atIndex + 1).toLowerCase()
        === "qq.com"){
        alert("马化腾司马了");
        return false;
    }
    return true;
}
function checkPassword(){
    var passwordStr;
    passwordStr = document.form0.password.value;
    if (passwordStr === ""){
        alert("请输入密码");
        return false;
    }
    if (passwordStr.length < 6){
        alert("密码必须多于6个字符");
        return false;
    }
    return true;
}
function checkVeriCode(){
    var veriCodeStr;
    var rightVeriCodeStr;
    veriCodeStr = document.form0.veri_code.value;
    rightVeriCodeStr = document.form0.show_veri_code.value;
    if (veriCodeStr !== rightVeriCodeStr){
        alert("验证码输入错误");
        makeVeriCode();
        return false;
    }
    else{
        return true;
    }
}
function makeMap(){
    var items;
    var i;
    items = document.getElementById("nav").getElementsByTagName("li");
    for (i = 0; i < items.length; i++){
        items[i].onmouseover = function(){
            this.className = "mouse_over";
        }
        items[i].onmouseout = function(){
            this.className = "";
        }
    }
}
function makeVeriCode(){
    var str;
    var i;
    str = "";
    for (i = 0; i < 4; i++){
        str += Math.floor(Math.random() * 10);
    }
    document.form0.show_veri_code.value = str;
}
function afterMain(){
    makeMap();
    makeVeriCode();
}
function sumbitMain(){
    if (checkVeriCode() && checkEmailName() && checkPassword()){
        return true;
    }
    else{
        return false;
    }
}
window.onload = afterMain();
