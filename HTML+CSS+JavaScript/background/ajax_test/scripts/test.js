const btns = window.document.getElementsByTagName("button");
const btn = btns[0];
const btnKai = btns[1];
const btnKaiNi = btns[2];
// const btnKaiNiKou = btns[3];
// const btnKaiNiOTsu = btns[4];
const result = document.getElementById("result");
// 发送GET请求;
btn.onclick = function() {
    // 创建对象;
    const xhr = new XMLHttpRequest();
    // 初始化: 设置请求的类型和url;
    xhr.open("GET", "http://127.0.0.1:8000/server");
    // 发送;
    xhr.send();
    // 事件绑定: 当"状态"改变的时候;
    /**
     * xhr.readyState = *; -- "状态"
     * *0: 未初始化;
     * *1: open()调用完毕;
     * *2: send()调用完毕;
     * *3: 服务端返回部分接口;
     * *4: 服务端返回全部接口;
     */
    xhr.onreadystatechange = function() {
        // 判断"状态"和响应状态码;
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 处理结果;
            console.log(xhr.status);                    // 状态码;
            console.log(xhr.statusText);                // 状态字符串;
            console.log(xhr.getAllResponseHeaders());   // 响应头;
            console.log(xhr.response);                  // 响应体;
            result.innerText = xhr.response;            // 将响应体赋值给result;
        } else {
            //
        }
    }
}
// 发送POST请求;
btnKai.onclick = function() {
    // 创建对象;
    const xhr = new XMLHttpRequest();
    // 初始化: 设置请求的类型和url;
    xhr.open("POST", "http://127.0.0.1:8000/server?t=" + Date.now());
    // 设置请求头; -- xhr.setRequestHeader(请求体的类型, 参数字符串类型)
    // xhr.setRequestHeader("Content-Type", "application-application/x-www-form-urlencoded");
    // 发送;
    xhr.send();
    // // 取消发送;
    // xhr.abort();
    // // 设置响应体的类型;
    // xhr.responseType = "json";
    // 设置超时;
    xhr.timeout = 2000;
    // 设置服务器超时时的行为;
    xhr.ontimeout = function() {
        alert("nmsl");
    }
    // 设置客户端网络超时时的行为;
    xhr.onerror = function() {
        alert("nmnbdsl");
    }
    // 事件绑定;
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // result.innerText = xhr.response;
            // 将String格式还原为JSON格式;
            let data = JSON.parse(xhr.responseText);
            result.innerText = data.name;
        }
    }
}
// 取消发送重复请求;
let i = null;
// 设置是否正在发送请求; -- 正在发送 ? true : false
let onSending = false;
btnKaiNi.onclick = function() {
    // 如果正在发送; -- 正在发送 ? 关闭上1个请求
    if (onSending) {
        i.abort();
    }
    i = new XMLHttpRequest();
    i.open("GET", "http://127.0.0.1:8000/server?t=" + Date.now());
    i.send();
    // 将状态设置为正在发送;
    onSending = true;
    // 如果服务端返回全部接口; -- 服务端完成服务 ? 状态设置为空闲
    if (i.readyState === 4) {
        onSending = false;
    }
}
$("button").eq("3").click(() => {
    // $get("url", json, (响应体) => {...}), 响应体类型; -- 发送GET请求
    $.get("http://127.0.0.1:8000/server?t=" + Date.now(), { a: "nmsl", b: "nmhl" }, (data) => {
        console.log(data);
    })
})
$("button").eq("4").click(() => {
    $.post("http://127.0.0.1:8000/server?t=" + Date.now(), { a: "nmsl", b: "nmhl" }, (data) => {
        console.log(data);
    }, "json")
})
$("button").eq("5").click(() => {
    $.ajax({
        // url;
        url: "http://127.0.0.1:8000/server?t=" + Date.now(),
        // params;
        data: { a: "nmsl", b: "nmhl" },
        // requerse type;
        type: "GET",
        // callback of response success;
        success: function(data) {
            console.log(data);
        },
        // time out;
        timeout: 2000,
        // callback of response fall;
        error: function() {
            alert("nmsl");
        }
    })
})
$("button").eq("6").click(() => {
    axios.defaults.baseURL = "http://127.0.0.1:8000";
    // if requerse type === get, axios.get.params = [ url, config ];
    // if requerse type === post, axios.post.params = [ url, request body, config ];
    axios.get("/server?t=" + Date.now(), {
        // params;
        params: { a: "nmsl", b: "nmhl" },
    }).then(value => {
        console.log(value);
    })
})
