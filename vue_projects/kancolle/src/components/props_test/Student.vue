<template>
<div>
    <h2>Hello! I am a student.</h2>
    <p><span>name: {{$name}}</span></p>
    <p><span>age: {{$age}}</span></p>
    <p><span>sex: {{$sex}}</span></p>
    <p><span>age: {{age}}</span></p>
    <button @click=addAge>age plus 1</button>
</div>
</template>

<script>
export default {
    "name": "Student",
    "data"() {
        return {
            // "name": "a",
            // "age": "100",
            // "sex": "male"
            "age": this.$age                // 想要修改传入的 prop, 需要定义中转 data;
        }
    },
    "props": [ "$name", "$age", "$sex" ],   // 简单接收;
    // "props": {                              // 对接收的数据的数据类型进行限制;
    //     "name": String,
    //     "age": Number,
    //     "sex": String
    // }
    // "props": {                              // 对接收的数据进行多种限制;
    //     "name": {
    //         "type": String,
    //         "require": true
    //     },
    //     "age": {
    //         "type": Number,
    //         "require": false,
    //         "default": 99
    //     },
    //     "sex": {
    //         "type": String,
    //         "default": "undefined"
    //     }
    // }
    "methods": {
        "addAge"() {
            this.age++;
        }
    }
}
</script>

<style>

</style>
