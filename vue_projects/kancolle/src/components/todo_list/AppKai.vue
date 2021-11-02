<template>
<div class="app-kai">
    <MyHeader
        ref = "myHeader"
        :request = "request"
        :changeCount = "changeCount"
    ></MyHeader
    >
    <MyContent
        ref = "myContent"
        :changeCompletedCount = "changeCompletedCount"
    ></MyContent
    >
    <MyFooter
        ref = "myFooter"
        :myContent = myContent
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
    "data"() {
        return {
            "myContent": null
        }
    },
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
        },
        "changeCompletedCount"(flag) {
            this.$refs.myFooter.changeCompletedCount(flag);
        },
        "changeCount"(flag) {
            this.$refs.myFooter.changeCount(flag);
        }
    },
    "mounted"() {
        this.myContent = this.$refs.myContent;
    }
}
</script>

<style lang="less" scoped>
// total-width: html-width = [?] * 2 + 1px * 2 + 620px;
.app-kai {
    margin: 0 auto;
    border: 1px solid #dddddd;
    padding-bottom: 10px;
    width: 620px;
    border-radius: 4px;
    display: flex;
    height: 96vh;
    flex-direction: column;
}
</style>
