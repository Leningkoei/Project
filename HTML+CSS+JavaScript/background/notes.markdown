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
```javascript []
const vm = new Vue({
    el: "#${id}",               // 绑定容器; -- 与下面的写法2选1;
    data: function() {          // 设置容器中插值的值;
        return {
            ${somethingUseful}  // typeof(somethingUseful) === json;
        }
    },
    computed: {
        ${property}: {
            "get": function() {
                //
            },
            "set": function(value) {
                //
            }
        }
    },
    methods: {
        ${function(event, params) {...}}
    }
})
vm.$mount("#root");             // 绑定容器; -- 与上面的写法2选1; -- mount: 挂载;
```
##  事件修饰符
```javascript []
prevent;    // 阻止默认事件;
stop;       // 阻止事件冒泡;
once;       // 事件只触发1次;
capture;    // 使用事件的捕获模式;
self;       // 只有event.target是当前操作的元素才触发事件;
passive;    // 事件的默认行为立即执行, 无需等待事件回调执行完毕 -- 有些事件的执行顺序: 事件触发 -> 执行回调 -> 执行默认事件;
${keybord}  // 绑定键盘按键;
```
```
<${tag} v-bind:${property}="{{${expression}}}">        -- 单向绑定;
<${tag} :${property}="{{${expression}}}>
<${tag} v-model:value="{{${expression}}}">              -- 双向绑定, 只能绑定于表单类元素中;
<${tag} v-model="{{${expression}}}">
<${tag} v-method:${kind}="{{${function name}}}>
<${tag} @{kind}="{{${function($event, ${params})}}}>
```
#   byte operation
***
-   永远认为位运算符优先级低于常规运算符;
-   ^ 优先级低于 <<, >>;                -- 测试结果;
-   n &= n - 1;     -- 消除末尾的1;