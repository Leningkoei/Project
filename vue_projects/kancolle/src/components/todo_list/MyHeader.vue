<template>
<div class="my-header">
    <input
        type="text"
        placeholder="input your new task"
        v-model="newTask"
        @keyup.enter="addTodo"
    >
</div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
    "name": "MyHeaders",
    "data"() {
        return {
            "newTask": ""
        }
    },
    "props": [ "request", "changeCount" ],
    "methods": {
        "addTodo"() {
            if (this.newTask.trim()) {
                const todo = {
                    "id": nanoid(),
                    "task": this.newTask,
                    "isComplete": false
                }
                this.request(todo);
                this.changeCount(true);
            } else {
                alert("别nm输入空的了");
            }
            this.newTask = "";
        }
    }
}
</script>

<style lang="less" scoped>
// total-width: 640px = [10px] * 2 + 10px * 2 + 600px;
.my-header {
    margin: 0 auto;
    padding: 10px;
    width: 600px;
    // total-width: 600px = 1px * 2 + 8px * 2 + 584px;
    /deep/ input {
        border: 1px solid #cccccc;
        padding: 4px 8px;
        height: 32px;
        width: 584px;
        border-radius: 4px;
        font-size: 16px;
    }
    /deep/ input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
    /deep/ input:hover {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
}
</style>
