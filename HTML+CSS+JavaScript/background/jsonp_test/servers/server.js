const express = require("express");
const app = express();
app.get("/check-user-name", (request, response) => {
    const data = {
        "exist": "1",
        "msg": "用户名已经存在"
    };
    const str = JSON.stringify(data);
    response.send(`jsonp.handle(${str})`);
});
app.get("/check-user-name-kai", (request, response) => {
    const data = {
        "exist": "1",
        "msg": "用户名已经存在"
    };
    const str = JSON.stringify(data);
    const callback = request.query.callback;
    response.send(`${callback}(${str})`);
})
app.listen(8000, () => {
    console.log("服务已经启动, 8000端口监听中...");
});
