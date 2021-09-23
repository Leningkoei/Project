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
```javascript []
const vm = new Vue({
    el: "#${id}",               // 绑定容器; -- 与下面的写法2选1;
    data: function() {          // 设置容器中插值的值;
        return {
            ${somethingUseful}  // typeof(somethingUseful) === json;
        }
    }
})
vm.$mount("#root");             // 绑定容器; -- 与上面的写法2选1; -- mount: 挂载;
```
```
<${tag} v-blind:${attribute}="{{${expression}}}"> -- 单向绑定
<${tag} v-model:value="{{${expression}}}"> -- 双向绑定, 只能绑定于表单类元素中
```
