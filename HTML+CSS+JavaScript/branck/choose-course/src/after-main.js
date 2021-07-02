function changeMajor() {
    var classList;
    var newOption;
    var i;
    var j;
    classList = new Array();
    classList["计算机信息管理"] = [ "11 信息管理(IT)", "12 信息管理 1", "12 信息管理 2",
        "13 交通信息管理" ];
    classList["计算机应用技术"] = [ "11 嵌入式技术", "11 应用技术 3G", "12 应用技术 3G",
        "13 应用技术对口 "];
    classList["计算机软媒技术"] = [ "11 软件测试", "12 多媒体技术 1", "12 多媒体技术 2",
        "13 大妈设计与制作 1", "13 大妈设计与制作 2" ];
    classList["计算机网络"] = [ "11 应用技术 CIW", "12 网络技术", "13 网络工程" ];
    //      获取专业选项的索引号;
    //      document.[想要获取的元素id(树?)].[想要获取的部分];
    i = document.choose_course_system.choose_major.value;
    document.choose_course_system.choose_class.options.length = 0;
    //      将指定专业的每个课程添加进choose_class下拉列表中;
    for (j in classList[i]) {
        //      新建1个下拉列表的选项元素: new Option([text], [value]);
        newOption = new Option(classList[i][j], classList[i][j]);
        //      将该新建的选项元素添加进指定的下拉列表中;
        document.choose_course_system.choose_class.options.add(newOption);
    }
}
function allIn() {
    var flag;
    var group;
    var i;
    if (document.getElementById("all").innerHTML == "全要参加") {
        flag = true;
        document.getElementById("all").innerHTML = "全不参加";
    }
    else {
        flag = false;
        document.getElementById("all").innerHTML = "全要参加";
    }
    //      将name == "choose_course"的元素放入group数组中;
    group = document.getElementsByName("choose_course");
    for (i = 0; i < group.length; i++) {
        //      group中的ith元素的控制是否被选中的bool值变更为flag;
        group[i].checked = flag;
    }
}
function getScore() {
    var group;
    var score;
    var i;
    group = document.getElementsByName("choose_course");
    for (i = 0, score = 0; i < group.length; i++) {
        if (group[i].checked) {
            score += parseFloat(group[i].value);
        }
    }
    alert("所选课程总学分: " + score);
}
function afterMain() {
    //      TODO;
}
window.onload = afterMain();
