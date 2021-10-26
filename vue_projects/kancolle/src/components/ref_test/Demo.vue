<template>
<div class="demo">
    <h2>{{hello}}</h2>
    <h2>{{demo}}</h2>
</div>
</template>

<script>
export default {
    "name": "Demo",
    "data"() {
        return {
            "hello": "Hello",
            "demo": "This is a demo."
        }
    }
}
</script>

<style>
.demo {
    background-color: #7f7f7f
}
</style>
