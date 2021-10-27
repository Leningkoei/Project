<template>
<div class="todos">
    <Todo v-for="todo in todos" :key="todo.id" :_todo="todo"></Todo>
</div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
    "name": "Todos",
    "components": {
        Todo
    },
    "data"() {
        return {
            "todos": [
                {
                    "id": "00",
                    "content": "kancolle",
                    "isCompleted": false
                },
                {
                    "id": "01",
                    "content": "bangdream",
                    "isCompleted": true
                },
                {
                    "id": "02",
                    "content": "pcr",
                    "isCompleted": false
                }
            ]
        }
    }
}
</script>

<style lang="less">
.todos {
    width: 576px;
    margin: 0 auto;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
}
</style>
