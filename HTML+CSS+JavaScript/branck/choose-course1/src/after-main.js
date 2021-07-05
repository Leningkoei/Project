var count;
var grade;
function getGrade(subname) {
    grade = subname.options[subname.selectedIndex].value;
}
function getInfor(subname) {
    var i;
    subname.textarea_0.value = grade;
    for (i = 0; i < subname.profession.length; i++) {
        if (subname.profession[i].checked) {
            subname.textarea_0.value = subname.textarea_0.value
                + "所选专业及课程名:\n" + "\t" + subname.profession[i].value
                + "\n";
        }
    }
    for (i = 0; i < subname.subject.length; i++) {
        if (subname.subject[i].checked) {
            subname.textarea_0.value = subname.textarea_0.value + "\t"
                + subname.subject[i].value + "\n";
        }
    }
}
function resetForm(subname) {
    subname.textarea_0.value = "";
    subname.profession[0].checked = true;
    for (i = 0; i < subname.subject.length; i++) {
        subname.subject[i].checked = false;
    }
}
function afterMain() {
    //      TODO;
}
this.window.onload = this.afterMain();
