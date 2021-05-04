var input;
var show;
var main;

input = function()
{
    var x;

    x = prompt("输入考生成绩: ", "");
    try
    {
        if (x < 0)
        {
            throw "err0";
        }
        else if (x > 100)
        {
            throw "err1";
        }
        else if (isNaN(x))
        {
            throw "err2";
        }
        alert("输入的成绩为: " + x);
    }
    catch(er)
    {
        if (er === "err0")
        {
            alert("成绩不能为负");
        }
        if (er === "err1")
        {
            alert("成绩不能大于100");
        }
        if (er === "err2")
        {
            alert("成绩是数字类型");
        }
    }
    finally
    {
        alert("成绩录入完了");
    }
}

main = function()
{
    this.input();
}

window.onload = main();
