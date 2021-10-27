<template>
<div class="school">
    <h2>{{name}}</h2>
</div>
</template>

<script>
export default {
    "name": "School",
    "data"() {
        return {
            "name": "bei da university"
        }
    }
}
</script>

<style lang="less" scoped>
.school {
    background-color: #00ffff;
}
</style>
