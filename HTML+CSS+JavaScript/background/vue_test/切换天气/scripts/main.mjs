export { main };
const main = function() {
    const vm = new Vue({
        "data": function() {
            return {
                "isHot": true,
                "numbers": {
                    "a": 1,
                    "b": 1
                }
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
            },
            "app": function() {
                this.numbers.a++;
            },
            "bpp": function() {
                this.numbers.b++;
            }
        },
        "watch": {
            "weather": {
                "immediate": true,
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
    vm.$watch("numbers", {
        "deep": true,
        "handler": function(newValue, oldValue) {
            console.log("numbers was changed");
        }
    })
}
