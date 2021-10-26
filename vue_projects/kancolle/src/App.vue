<template>
<div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"> -->
    <AppKai></AppKai>
</div>
</template>

<script>
// 引入特定路径的AppKai;
// import HelloWorld from "./components/HelloWorld.vue";    -- 自带的;
// import AppKai from "./components/ref_test/AppKai.vue";
import AppKai from "./components/props_test/AppKai.vue";

export default {
    name: "App",
    components: {
        // HelloWorld
        AppKai
    }
}
</script>

<style>
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
