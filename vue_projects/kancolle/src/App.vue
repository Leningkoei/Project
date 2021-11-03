<template>
<div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"> -->
    <AppKai
    />
</div>
</template>

<script>
// 引入特定路径的AppKai;
// import HelloWorld from "./components/HelloWorld.vue";    -- 自带的;
// import AppKai from "./components/ref_test/AppKai.vue";
// import AppKai from "./components/props_test/AppKai.vue";
// import AppKai from "./components/mixin_test/AppKai.vue";
// import AppKai from "./components/scoped_test/AppKai.vue";
// import AppKai from "./components/todo_list/AppKai.vue";
import AppKai from "./components/custom_event/AppKai.vue";
export default {
    name: "App",
    components: {
        // HelloWorld
        AppKai
    }
}
</script>

<style>

</style>
