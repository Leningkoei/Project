<template>
<div class="student">
    <p
    ><span
    >student name: {{name}}</span
    ></p
    >
    <p
    ><span
    >student age: {{age}}</span
    ></p
    ><p
    ><button
        @click = "sendStudentName"
    >send student name to app kai</button
    ></p
    >
</div>
</template>

<script>
export default {
    "name": "Student",
    "data"() {
        return {
            "name": "Lening",
            "age": 20
        }
    },
    "methods": {
        "sendStudentName"() {
            this.$emit("getStudentNameFromStudent", this.name);
        }
    }
}
</script>

<style lang="less" scoped>
.student {
    color: #ffffff;
    background-color: red;
    /deep/ p {
        margin: 0 auto;
        text-align: center;
    }
}
</style>
