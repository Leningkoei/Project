var jsonp = window.jsonp || {};
var jsonpXjQuery = window.jsonpXjQuery || {};
// 响应服务端传送过来的"data";
jsonp.handle = function(data) {
    const p = window.document.getElementById("alert");
    jsonp.input.style.border = "solid 1px #F00";
    p.innerText = data.msg;
};
jsonp.input = window.document.getElementById("userName");
// 绑定"丧失焦点"事件;
jsonp.input.onblur = function() {
    const userName = this.value;
    const script = window.document.createElement("script");
    script.src = "http://127.0.0.1:8000/check-user-name";
    window.document.body.appendChild(script);
};
jsonpXjQuery.main = function() {
    $("#userNameKai").blur(function() {
        $.getJSON("http://127.0.0.1:8000/check-user-name-kai?callback=?", (data) => {
            $("#userNameKai").css({
                "border-color": "#F00",
                "border-style": "solid",
                "border-width": "1px"
            });
            $("#alertKai").html(`${data.msg}`);
        });
    });
}
jsonpXjQuery.main();
