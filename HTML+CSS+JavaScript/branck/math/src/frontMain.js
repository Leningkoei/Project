function useMath(){
    var m;
    var n;
    var result;
    var i;
    while(true){
        m = parseInt(prompt("输入随机数的下限: ", 0));
        n = parseInt(prompt("输入随机数的上限: ", 0));
        if (m < n){
            break;
        }
        alert("FIFA输入");
    }
    //      Math的对象属性{
    document.write("Math.E = " + Math.E + "<br>");
    document.write("Math.LN2 = " + Math.LN2 + "<br>");
    document.write("Math.LOG2E = " + Math.LOG2E + "<br>");
    document.write("Math.LOG10E = " + Math.LOG10E + "<br>");
    document.write("Math.PI = " + Math.PI + "<br>");
    document.write("Math.SQRT_2 = " + Math.SQRT1_2 + "<br>");
    document.write("Math.SQRT2 = " + Math.SQRT2 + "<br>");
    //      }
    //      计算自然对数(log){
    document.write("Math.log(" + m + ") = " + Math.log(m) + "<br>");
    document.write("Math.log(" + n + ") = " + Math.log(n) + "<br>");
    document.write("Math.log(Math.exp(" + m + ")) = " + Math.log(Math.exp(m))
        + "<br>");
    //      }
    //      计算平方根(sqrt){
    document.write("Math.sqrt(" + m + ") = " + Math.sqrt(m) + "<br>");
    document.write("Math.sqrt(" + n + ") = " + Math.sqrt(n) + "<br>");
    //      }
    //      在[m, n]中生成10个随机数(for, random){
    document.write(m + "到" + n + "之间的10个随机数为:<br>");
    for (i = 0; i < 10; i++){
        //      Math.round(float num): 四舍五入;
        //      Math.random(): 生成1个[0, 1]的随机float型数字;
        result = Math.round(Math.random() * (n - m)) + m;
        document.write("\t" + result);
    }
    //      }
}
function frontMain(){
    useMath();
}
window.onload = frontMain();
