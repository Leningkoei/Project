<template>
<div class="app-kai">
    <School
    ></School
    >
    <hr>
    <Student
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
    "methods": {
        "getStudentName"(studentName) {
            alert(studentName);
        }
    }
}
</script>

<style lang="less" scoped>
.app-kai {
    background-color: #707070;
    padding: 8px;
    /deep/ hr {
        margin: 0 auto;
    }
}
</style>
