<template>
<div class="content">
    <Todos
        ref="todos"
        :changeCompletedCount = "changeCompletedCount"
    ></Todos
    >
</div>
</template>

<script>
import Todos from "./Todos.vue";
export default {
    "name": "MyContent",
    "components": { Todos },
    "props": [ "changeCompletedCount" ],
    "methods": {
        "request"(respond) {
            // console.log("This is my content, I was got respond");
            this.pass(respond);
        },
        "pass"(respond) {
            // console.log("This is my content, I was passed respond");
            this.$refs.todos.request(respond);
        }
    }
}
</script>

<style>

</style>
