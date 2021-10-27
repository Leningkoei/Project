<template>
<div class="todo">
    <div style="display: inline-block"><input type="checkbox" :checked="_todo.isCompleted"><span>{{_todo.content}}</span></div><button class="btn btn-danger">delete this tast</button>
</div>
</template>

<script>
export default {
    "name": "Todo",
    "props": [ "_todo" ],
    "mounted"() {
        console.log(this._todo);
    }
}
</script>

<style lang="less" scoped>
.todo {
    height: 32px;
    padding: 0 8px;
    line-height: 32px;
    font-size: 16px;
    border-bottom: 1px solid #dddddd;
    /deep/ div {
        float: left;
        cursor: pointer;
        /deep/ input {
            margin-right: 8px;
            position: relative;
            top: -1px;
            vertical-align: middle;
        }
    }
    /deep/ button {
        display: none;
        float: right;
    }
}
.todo:before {
    content: initial;
}
.todo:last-child {
    border-bottom: none;
}
</style>
