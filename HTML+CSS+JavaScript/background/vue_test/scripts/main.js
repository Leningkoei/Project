const vm = new Vue({
    // el: "#root",
    data: function() {
        return {
            head: "nmsl",
        }
    },
    methods: {
        showInfo: function() {
            alert("nmsl!");
        }
    }
})
vm.$mount("#root");
