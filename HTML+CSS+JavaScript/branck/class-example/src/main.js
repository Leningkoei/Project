var Student;
var main;

Student = function(no, name, englishScore, mathScore, jsScore, dataStructScore)
{
    this.dataStructScore = dataStructScore;
    this.englishScore = englishScore;
    this.jsScore = jsScore;
    this.mathScore = mathScore;
    this.name = name;
    this.no = no;

    this.showStudentInfor = function()
    {
        document.write("学号: " + this.no + "&nbsp; &nbsp; &nbsp; &nbsp" + "姓名: " + this.name + "<br>");
        document.write("英语: " + this.englishScore + "<br>");
        document.write("高数: " + this.mathScore + "<br>");
        document.write("动态脚本: " + this.jsScore + "<br>");
        document.write("数据结构: " + this.dataStructScore + "<br>");
    }

    this.getSumScore = function()
    {
        return this.englishScore + this.mathScore + this.jsScore + this.dataStructScore;
    }
}

main = function()
{
    var student0;
    
    student0 = new Student("114514", "TianSuoHaoEr", 19, 19, 81, 0);
    with (student0)
    {
        var sum;
    
        showStudentInfor();
        sum = getSumScore();
        document.write("总分: " + sum);
    }
}

window.onload = main();
