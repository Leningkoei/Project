// 引入express;
const express = require("express");
// 创建应用对象;
const app = express();
// 创建路由规则;
/**
 * request: 对请求报文的封装;
 * response: 对响应报文的封装;
 */
app.get("/server", (request, response) => {
    // 设置响应头; -- 允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 设置响应体;
    // response.send("this is get");
    setTimeout(() => {
        response.send("this is get");
    }, 3000)
})
app.post("/server", (request, response) => {
    // 设置响应头, 必须出现在最前面; -- 跨域?
    response.setHeader("Access-Control-Allow-Origin", "*");
    let data = {
        name: "nmsl",
        id: "nmhl"
    }
    // 将JSON格式更改为String格式;
    data = JSON.stringify(data);
    // response.send(data);
    // 设置3秒的延时响应0; -- 用来测试超时
    setTimeout(() => {
        response.send(data);
    }, 3000);
})
// 监听端口启动服务;
app.listen(8000, () => {
    console.log("服务已经启动, 8000端口监听中...");
})
