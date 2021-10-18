window.vm = new Vue({
    "el": "#root",
    "data"() {
        return {
            "studentDivStyle": "hide",
            "teacherDivStyle": "hide",
            "courseDivStyle": "hide",
            "gradeDivStyle": "hide"
        }
    },
    "methods": {
        "focusOnStudentDiv"() {
            this.studentDivStyle = "show";
            this.teacherDivStyle = "hide";
            this.courseDivStyle = "hide";
            this.gradeDivStyle = "hide";
        },
        "focusOnTeacherDiv"() {
            this.studentDivStyle = "hide";
            this.teacherDivStyle = "show";
            this.courseDivStyle = "hide";
            this.gradeDivStyle = "hide";
        },
        "focusOnCourseDiv"() {
            this.studentDivStyle = "hide";
            this.teacherDivStyle = "hide";
            this.courseDivStyle = "show";
            this.gradeDivStyle = "hide";
        },
        "focusOnGradeDiv"() {
            this.studentDivStyle = "hide";
            this.teacherDivStyle = "hide";
            this.courseDivStyle = "hide";
            this.gradeDivStyle = "show";
        }
    }
})
