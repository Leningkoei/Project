#   cmd: command || terminal
***
-       dir;  -- show     dir;
-       cd;   -- change   dir;
-       md;   -- make     dir;
-       rd;   -- remove   dir;
#   引入express
***
-       cd ${path}/servers;                 -- 进入目标路径下的servers文件夹;
-       npm init -y;                        -- 初始化npm;
-       npm install express;                -- 安装express;
-       const express = require("express"); -- server.js中引入express;
#   进程和线程
***
-   进程至少包含1个线程;
-   进程
    -   操作系统资源分配的基本单位;
    -   资源独立;
-   线程
    -   处理器任务调度和执行的基本单位;
    -   同1个进程中, 所有线程共享那个进程的堆和方法区资源;
#   Vue
***
##  基础语法
``` JavaScript []
const vm = new Vue({
    "el": "#${id}",                 // 绑定容器; -- 与下面的写法2选1;
    "data": function() {            // 设置容器中插值的值;
        return {
            ${somethingUseful}      // typeof(somethingUseful) === json;
        }
    },
    "computed": {
        "${property}": {
            "get": function() {
                //
            },
            "set": function(value) {
                // TODO;
                return TODO;
            }
        }
    },
    "methods": {
        ${function(event, params) {...}}
    },
    "watch": {                      // 设置监视属性;
        "${property}": {
            "immediate": ${boolean};
            "handler": function(newValue, oldValue) {
                // TODO;
            }
        }
    },
    "watch": {                      // 简写;
        "${property}": function(newValue, oldValue) {
            // TODO;
        }
    },
    "filters": {
        "${functionName}"(params) {
            // TODO;
        }
    },
    "directives": {
        "${name}": {
            "bind"() {                  // 模板更新时, 元素绑定成功时调用;
                // TODO;
            },
            "inserted"() {              // 只有元素插入页面时调用;
                // TODO;
            },
            "update"() {                // 模板重新解析时调用;
                // TODO;
            }
        }
        "${name}"(element, binding) {   // 模板更新时, 元素绑定成功时调用;
            // TODO;
        }
    }
})
vm.$mount("#root");                 // 绑定容器; -- 与上面的写法2选1; -- mount: 挂载;
vm.$watch("${property}", {          // 设置监视属性;
    "deep": ${boolean},             // 是否深度监视;
    "handler": function(newValue, oldValue) {
        // TODO;
    },
    "immediate": ${boolean}         // 是否立即执行;
})
vm.$watch("${property}", function(newValue, oldValue) { // 简写;
    // TODO;
})
Vue.set(window.vm.${property}, "${key}", "${value}");
vm.$set(window.vm.${property}, "${key}", "${value}");
```
##  事件修饰符
***
``` JavaScript []
prevent;    // 阻止默认事件;
stop;       // 阻止事件冒泡;
once;       // 事件只触发1次;
capture;    // 使用事件的捕获模式;
self;       // 只有event.target是当前操作的元素才触发事件;
passive;    // 事件的默认行为立即执行, 无需等待事件回调执行完毕 -- 有些事件的执行顺序: 事件触发 -> 执行回调 -> 执行默认事件;
${keybord}  // 绑定键盘按键;
```
```
<${tag} v-bind:${property}="${expression}">         -- 单向绑定;
<${tag} :${property}="${expression}>
<${tag} v-model:value="${expression}">              -- 双向绑定, 只能绑定于表单类元素中;
<${tag} v-model="${expression}">
<${tag} v-method:${kind}="${function name}>
<${tag} @{kind}="${function($event, ${params})}>
<${tag} v-show="${boolean}">                        -- template不能与之配合;
<${tag} v-if="${boolean}">
<${tag} v-else-if="${boolean}">
<${tag} v-else">
<li v-for="(${elem}, index) in || of ${Array}" :key="${id}" || "index">{{${elem}}}</li> -- 可以遍历对象(${value}, ${name})和string和指定次数;
value | ${filterA(params)} | ${filterB(params)} | ... | ${filterZ(params)};
v-cloak;    -- 当Vue渲染结束后会消失, 可以和display: none配合使用;
v-once;     -- Vue仅渲染1次;
v-pre;      -- 跳过Vue的渲染;
```
#   byte operation
***
-   永远认为位运算符优先级低于常规运算符;
-   ^ 优先级低于 <<, >>;                -- 测试结果;
-   n &= n - 1;     -- 消除末尾的1;
