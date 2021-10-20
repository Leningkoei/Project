window.vm = new Vue({
    "el": "#root",
    "data"() {
        return {
            "userInfo": {
                "account": "",
                "password": "",
                "sex": "",
                "hobby": [],
                "game": "--choose one--",
                "otherInfo": "",
                "acceptUserAgreement": false
            }
        }
    },
    "computed": {
        "time"() {
            return window.dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss");
        }
    },
    "methods": {
        "getTime"() {
            return window.dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss");
        },
        "sendMsg"() {
            window.alert("submit has successed!");
            window.alert(JSON.stringify(this.userInfo));
        }
    },
    "filters": {
        "timeFormater"(value, type="YYYY-MM-DD HH:mm:ss") {
            return window.dayjs(value).format(type);
        }
    }
})
