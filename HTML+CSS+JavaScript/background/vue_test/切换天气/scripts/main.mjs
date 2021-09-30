export { main };
const main = function() {
    const vm = new Vue({
        "data": function() {
            return {
                "isHot": true
            }
        },
        "computed": {
            "weather": {
                "get": function() {
                    return this.isHot ? "炎热" : "凉爽";
                },
                "set": function() {
                    // TODO;
                }
            }
        },
        "methods": {
            "changeWeather": function() {
                this.isHot = !this.isHot;
            }
        },
        // 监视属性;
        "watch": {
            "weather": {
                "immediate": true,  // 是否立即执行; -- 默认false;
                "handler": function(newValue, oldValue) {
                    console.log(newValue, oldValue);
                }
            }
        }
    })
    vm.$mount("#root");
    vm.$watch("isHot", {
        "immediate": true,
        "handler": function(newValue, oldValue) {
            console.log(newValue, oldValue);
        }
    });
}
