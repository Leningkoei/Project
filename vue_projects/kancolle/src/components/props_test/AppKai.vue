<template>
<div>
    <Student $name="a" v-bind:$age="1" $sex="female"></Student>
    <Student $name="b" :$age="100" $sex="male"></student>
</div>
</template>

<script>
import Student from "./Student.vue";
export default {
    "name": "AppKai",
    "components": {
        Student
    }
}
</script>

<style>

</style>
