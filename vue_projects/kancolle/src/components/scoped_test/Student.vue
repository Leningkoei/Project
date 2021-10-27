<template>
<div class="student">
    <p><span>{{name}}</span></p>
    <p><span>{{age}}</span></p>
</div>
</template>

<script>
export default {
    "name": "Student",
    "data"() {
        return {
            "name": "lening",
            "age": 20
        }
    }
}
</script>

<style lang="less" scoped>
.student {
    background-color: #ff00ff;
    * {
        color: #ffffff;
    }
}
</style>
// npm install less;
