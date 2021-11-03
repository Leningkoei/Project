<template>
<div class="school">
    <h2
    ><span
    >school name: {{name}}</span
    ></h2
    >
</div>
</template>

<script>
export default {
    "name": "School",
    "data"() {
        return {
            "name": "Bei Da University"
        }
    }
}
</script>

<style lang="less" scoped>
.school {
    color: #ffffff;
    background-color: green;
    /deep/ h2 {
        margin: 0 auto;
        text-align: center;
    }
}
</style>
