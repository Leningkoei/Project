<template>
<div class="my-footer">
    <div style="display: inline-block"><input type="checkbox"><span>0 / 1 tasks has done</span></div><button class="btn btn-danger">clear done tasks</button>
</div>
</template>

<script>
export default {
    "name": "MyFooter"
}
</script>

<style lang="less" scoped>
.my-footer {
    height: 36px;
    line-height: 36px;
    margin-top: 4px;
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 4px;
    /deep/ div {
        margin-right: 32px;
        cursor: pointer;
        /deep/ input {
            position: relative;
            margin-right: 8px;
            top: -1px;
            vertical-align: middle;
        }
    }
    /deep/ button {
        float: right;
    }
}
</style>
