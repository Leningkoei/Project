<template>
<div class="app-kai">
    <MyHeader></MyHeader>
    <MyContent></MyContent>
    <MyFooter></MyFooter>
</div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
import MyContent from "./MyContent.vue";
import MyFooter from "./MyFooter.vue";
export default {
    "name": "AppKai",
    "components": {
        MyHeader,
        MyContent,
        MyFooter
    }
}
</script>

<style lang="less">
.app-kai {
    width: 640px;
    margin: 0 auto;
    border: 1px solid #dddddd;
    border-radius: 4px;
}
.btn {
    font-size: 12px;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding: 4px 12px;
    margin-bottom: 0;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}
.btn:focus {
    outline: none;
}
.btn-danger {
    color: #ffffff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}
.btn-danger:focus {
    background-color: #bd362f;
}
.btn-danger:hover {
    background-color: #bd362f;
}
</style>
