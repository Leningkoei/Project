<template>
<div class="todos">
    <Todo
        ref = "todo"
        v-for = "todo in todos" :key="todo.id"
        :todo = "todo"
        :changeCompleted = "changeCompleted"
        :deleteTodo = "deleteTodo"
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
            // "todos": [
            //     {
            //         "id": "00",
            //         "task": "kancolle",
            //         "isCompleted": false
            //     },
            //     {
            //         "id": "01",
            //         "task": "bangdream",
            //         "isCompleted": false
            //     },
            //     {
            //         "id": "02",
            //         "task": "pcr",
            //         "isCompleted": false
            //     }
            // ],
            "todos": JSON.parse(localStorage.getItem("todos")) || [],
            "completedCount": 0,
            "count": 0
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
        },
        "deleteTodo"(id) {
            // console.log(id);
            // this.todos = this.todos.filter((todo) => todo.id !== id);
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id === id) {
                    this.todos.splice(i, 1);
                    break;
                }
            }
        },
        "chooseAll"(checked) {
            this.todos.forEach((todo) => todo.isCompleted = checked);
        },
        "deleteAllCompleted"() {
            this.todos = this.todos.filter((todo) => !todo.isCompleted);
        }
    },
    "watch": {
        "todos": {
            "handler"() {
                this.completedCount = this.todos.reduce((completedCount, todo) => todo.isCompleted ? completedCount + 1 : completedCount, 0);   // 注意 completedCount++ 会在 return (...) ? ... : ... 结束后才++!!!;
                this.count = this.todos.length;
                localStorage.setItem("todos", JSON.stringify(this.todos));
            },
            "immediate": true,
            "deep": true
        }
    }
}
</script>

<style lang="less" scoped>
// total-width: 640px = [20px] * 2 + 1px * 2 + 0 * 2 + 598px;
.todos {
    margin: 0 auto;
    border: 1px solid #dddddd;
    // padding: 10px;
    width: 598px;
    border-radius: 4px;
}
</style>
