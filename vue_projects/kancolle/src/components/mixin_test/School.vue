<template>
<div>
    <h2 @click="showName">{{name}}</h2>
</div>
</template>

<script>
import { mixin } from "../../scripts/mixin_test/mixin.mjs";
export default {
    "name": "School",
    "data"() {
        return {
            "name": "bei da university"
        }
    },
    "mixins": [ mixin ]
}
</script>

<style>

</style>
