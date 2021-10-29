<template>
<div class="todo">
    <div style = "display: inline-block"
    ><input
        type = "checkbox"
        :checked = "todo.isCompleted"
        @change = "getId(todo.id)"
    ><span
    >{{todo.task}}</span
    ></div
    ><button
        class = "btn btn-danger"
    >delete this task</button
    >
</div>
</template>

<script>
export default {
    "name": "Todo",
    "props": [ "todo", "changeCompleted" ], // 注意只读; -- (x)v-model = "todo.isCompleted";
    "methods": {
        /**
         * 拿到 isComplated 被改变的 todo 的 id;
         * @param {string} isComplated 被改变的 todo 的 id;
         */
        "getId"(id) {
            // console.log(id);
            // console.log(this.changeCompleted);
            this.changeCompleted(id);
        }
    }
}
</script>

<style lang="less" scoped>
// total-width: 578px = 8px * 2 + [562px];
.todo {
    padding: 0 8px;
    height: 36px;
    line-height: 32px;
    font-size: 16px;
    border-bottom: 1px solid #dddddd;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /deep/ div {
        cursor: pointer;
        input {
            margin-right: 8px;
            vertical-align: middle;
            position: relative;
            top: -2px;
        }
    }
    /deep/ .btn {
        font-size: 12px;
        line-height: 24px;
        vertical-align: middle;
        text-align: center;
        padding: 4px 12px;
        margin-bottom: 0;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }
    /deep/ .btn:focus {
        outline: none;
    }
    /deep/ .btn-danger {
        color: #ffffff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }
    /deep/ .btn-danger:focus {
        background-color: #bd362f;
    }
    /deep/ .btn-danger:hover {
        background-color: #bd362f;
    }
    /deep/ button {
        display: none;
    }
}
.todo:before {
    content: initial;
}
.todo:last-child {
    border-bottom: none;
}
</style>
