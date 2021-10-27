<template>
<div>
    <p><span @click="showName">name: {{name}}</span></p>
    <p><span>age: {{age}}</span></p>
</div>
</template>

<script>
import { mixin } from "../../scripts/mixin_test/mixin.mjs";
export default {
    "name": "Student",
    "data"() {
        return {
            "name": "a",
            "age": 10
        }
    },
    "mixins": [ mixin ]
}
</script>

<style>

</style>
