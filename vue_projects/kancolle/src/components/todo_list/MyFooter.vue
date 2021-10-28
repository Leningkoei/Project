<template>
<div class = "my-footer">
    <div style = "display: inline-block"
    ><input
        type = "checkbox"
    ><span
    >0 / 1 tasks has done</span
    ></div
    ><button
        class = "btn btn-danger"
    >clear completed tasks</button
    >
</div>
</template>

<script>
export default {
    "name": "MyFooter"
}
</script>

<style lang="less" scoped>
// total-width: 640px = [10px] * 2 + 10px * 2 + 600px;
.my-footer {
    margin: 4px auto 0 auto;
    padding: 10px;
    height: 36px;
    width: 600px;
    border-radius: 4px;
    line-height: 32px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /deep/ div {
        cursor: pointer;
        input {
            margin-right: 8px;
            vertical-align: middle;
            position: relative;     // 使 top 属性可设置;
            top: -2px;              // top < 0 ? 向上偏移 : 向下偏移;
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
// span {
//     color: red;
// }
}
</style>
