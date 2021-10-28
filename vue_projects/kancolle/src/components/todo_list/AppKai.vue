<template>
<div class="app-kai">
    <MyHeader
        ref = "myHeader"
        :request = "request"
    ></MyHeader
    >
    <MyContent
        ref = "myContent"
    ></MyContent
    >
    <MyFooter
        ref = "myFooter"
    ></MyFooter
    >
</div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
import MyContent from "./MyContent.vue";
import MyFooter from "./MyFooter.vue";
export default {
    "name": "AppKai",
    "components": { MyHeader, MyContent, MyFooter },
    "methods": {
        "request"(respond) {
            // this.pass(respond);
            this.unshiftNewTodo(respond);
        },
        "pass"(respond) {
            this.$refs.myContent.request(respond);
        },
        "unshiftNewTodo"(respond) {
            this.$refs.myContent.$refs.todos.unshiftNewTodo(respond);
        }
    }
}
</script>

<style lang="less" scoped>
// total-width: html-width = [?] * 2 + 1px * 2 + 640px;
.app-kai {
    margin: 0 auto;
    border: 1px solid #dddddd;
    width: 640px;
    border-radius: 4px;
}
</style>
