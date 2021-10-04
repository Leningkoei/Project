const main = function() {
    const vm = new Vue({
        // 数据;
        "data": function() {
            return {
                "firstName": "Zhang",
                "lastName": "3",
                "fillName": "Zhang-3"
            }
        },
        // // 计算属性;
        // "computed": {
        //     "subName": {
        //         "get": function() {
        //             return this.firstName.slice(0, 10) + "-" + this.lastName.slice(0, 10);
        //         },
        //         "set": function(value) {
        //             const fillName = value.split("-");
        //             this.firstName = fillName[0];
        //             this.lastName = fillName[1];
        //         }
        //     }
        // },
        // // 方法;
        // "methods": {
        // //     "subName": function() {
        // //         return this.firstName.slice(0, 10) + "-" + this.lastName.slice(0, 10);
        // //     }
        //     "resetName": function() {
        //         this.subName = "Zhang-3";
        //     }
        // },
        "watch": {
            "firstName": function(newValue) {
                this.fillName = newValue + "-" + this.lastName;
            },
            "lastName": function(newValue) {
                this.fillName = this.firstName + "-" + newValue;
            }
        }
    })
    vm.$mount("#root");
}
main();
