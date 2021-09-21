#   cmd command
***
-       dir;  -- show     dir
-       cd;   -- change   dir
-       md;   -- make     dir
-       rd;   -- remove   dir
#   引入express
***
-       cd ${path}/servers;                 -- 进入目标路径下的servers文件夹
-       npm init -y;                        -- 初始化npm
-       npm install express;                -- 安装express
-       const express = require("express"); -- server.js中引入express
#   进程和线程
***
-   进程至少包含1个线程;
-   进程
    -   操作系统资源分配的基本单位;
    -   资源独立;
-   线程
    -   处理器任务调度和执行的基本单位;
    -   同1个进程中, 所有线程共享那个进程的堆和方法区资源;
