function mainArray(){
    var arr;

    //      用于升序排序的函数
    function swapElemUp(x, y){
        if (x > y){
            return 1;
        }
        else if (x < y){
            return -1;
        }
        else{
            return 0;
        }
    }
    //      用于降序排序的函数
    function swapElemDown(x, y){
        if (x < y){
            return 1;
        }
        else if (x > y){
            return -1;
        }
        else{
            return 0;
        }
    }
    arr = new Array(5, 29, 14, 1, 656, 206, 41, 3, 159);
    document.write("原数组中的函数为: " + arr.toString() + "<br>");
    //      将数组元素升序排序
    arr.sort(swapElemUp);
    document.write("升序排序后的数组为: " + arr.toString() + "<br>");
    //      将数组元素降序排序
    arr.sort(swapElemDown);
    document.write("降序排序后的数组为: " + arr.toString() + "<br>");
}
function mainSqrArray(){
    var i;
    var j;
    var student;

    student = new Array();
    student[0] = new Array("李美丽", 86, 90, 88);
    student[1] = new Array("王阳明", 80, 78, 85);
    student[2] = new Array("水曜日", 76, 68, 72);
    document.write("<pre>");
        document.write("姓名\t高数\t英语\t脚本语言\t<br>");
        for (i = 0; i < student.length; i++){
            for (j = 0; j < student[i].length; j++){
                document.write(student[i][j] + "\t");
            }
            document.write("<br>");
        }
    document.write("<pre>");
}
function main(){
    mainArray();
    mainSqrArray();
}
window.onload = main();
