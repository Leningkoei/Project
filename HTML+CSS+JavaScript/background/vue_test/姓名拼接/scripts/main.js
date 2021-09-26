const main = function() {
    const vm = new Vue({
        "data": function() {
            return {
                "firstName": "Zhang",
                "secondName": "3"
            }
        },
        "computed": {
            "subName": {
                "get": function() {
                    return this.firstName.slice(0, 10) + "-" + this.secondName.slice(0, 10);
                },
                "set": function(value) {
                    const fillName = value.split("-");
                    this.firstName = fillName[0];
                    this.secondName = fillName[1];
                }
            }
        },
        methods: {
        //     "subName": function() {
        //         return this.firstName.slice(0, 10) + "-" + this.secondName.slice(0, 10);
        //     }
            "resetName": function() {
                this.subName = "Zhang-3";
            }
        }
    })
    vm.$mount("#root");
}
main();
