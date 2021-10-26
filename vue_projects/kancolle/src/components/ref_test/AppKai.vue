<template>
<div>
    <h2 ref="dom">nmsl</h2>
    <Demo ref="vC"></Demo>
    <button @click="showDom">show DOM</button><br>
    <button @click="showVc">show VC</button><br>
</div>
</template>

<script>
import Demo from "./Demo.vue";
export default {
    "name": "AppKai",
    "components": {
        Demo
    },
    "methods": {
        "showDom"() {
            console.log(this.$refs.dom);
        },
        "showVc"() {
            console.log(this.$refs.vC);
        }
    }
}
</script>

<style>

</style>
