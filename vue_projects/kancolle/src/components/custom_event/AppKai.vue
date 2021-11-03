<template>
<div class="app-kai">
    <h2
    ><span
    >Hello, {{studentName}}</span
    ></h2
    >
    <hr
    >
    <School
    ></School
    >
    <hr>
    <Student
        @click.native = "nmsl"
        @getStudentNameFromStudent = "getStudentName"
    ></Student
    >
</div>
</template>

<script>
import School from "./School.vue";
import Student from "./Student.vue";
export default {
    "name": "AppKai",
    "components": {
        School,
        Student
    },
    "data"() {
        return {
            "studentName": undefined
        }
    },
    "methods": {
        "nmsl"() {
            alert("nmsl");
        },
        "getStudentName"(studentName) {
            // alert(studentName);
            this.studentName = studentName;
        }
    }
}
</script>

<style lang="less" scoped>
.app-kai {
    background-color: #707070;
    padding: 8px;
    /deep/ h2 {
        margin: 0 auto;
        color: #ffffff;
        text-align: center;
    }
    /deep/ hr {
        margin: 0 auto;
    }
}
</style>
