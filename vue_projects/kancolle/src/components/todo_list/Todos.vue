<template>
<div class="todos">
    <Todo
        ref = "todo"
        v-for = "todo in todos" :key="todo.id"
        :todo = "todo"
        :changeCompleted = "changeCompleted"
    ></Todo
    >
</div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
    "name": "Todos",
    "components": { Todo },
    "props": [ "changeCompletedCount" ],
    "data"() {
        return {
            "todos": [
                {
                    "id": "00",
                    "task": "kancolle",
                    "isCompleted": false
                },
                {
                    "id": "01",
                    "task": "bangdream",
                    "isCompleted": false
                },
                {
                    "id": "02",
                    "task": "pcr",
                    "isCompleted": false
                }
            ]
        }
    },
    "methods": {
        "request"(respond) {
            // console.log("This is todos, I was got respond.");
            this.unshiftNewTodo(respond);
        },
        "unshiftNewTodo"(newTodo) {
            this.todos.unshift(newTodo);
        },
        "changeCompleted"(id) {
            for (const todo of this.todos) {
                if (todo.id === id) {
                    // todo.isCompleted = !todo.isCompleted;
                    if (todo.isCompleted) {
                        todo.isCompleted = false;
                        this.changeCompletedCount(false);
                    } else {
                        todo.isCompleted = true;
                        this.changeCompletedCount(true);
                    }
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
// total-width: 640px = [20px] * 2 + 1px * 2 + 10px * 2 + 578px;
.todos {
    margin: 0 auto;
    border: 1px solid #dddddd;
    padding: 10px;
    width: 578px;
    border-radius: 4px;
}
</style>
