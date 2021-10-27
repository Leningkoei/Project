<template>
<div class="my-header">
    <input type="text" placeholder="input your task">
</div>
</template>

<script>
export default {
    "name": "MyHeaders"
}
</script>

<style lang="less" scoped>
.my-header {
    width: 600px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 4px;
    /deep/ input {
        font-size: 16px;
        height: 32px;
        width: 584px;
        border: 1px solid #cccccc;
        border-radius: 4px;
        padding: 4px 7px;
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
