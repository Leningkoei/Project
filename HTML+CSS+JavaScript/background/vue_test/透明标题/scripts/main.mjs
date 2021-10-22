window.vm = new Vue({
    "el": "#root",
    "data"() {
        return {
            "opacity": "1"
        }
    },
    "methods": {
        // "setWelcomeInterval"() {
        //     let flag = true;
        //     setInterval(() => {
        //         function sub() {
        //             this.opacity -= 0.01;
        //         }
        //         function add() {
        //             this.opacity += 0.01;
        //         }
        //         if (flag) {
        //             sub();
        //         } else {
        //             add();
        //         }
        //         if (this.opacity <= 0 || this.opacity >= 1) {
        //             flag = !flag;
        //         }
        //     }, 16)
        // }
    },
    "mounted"() {
        // console.log(this);
        function setWelcomeInterval(that) {
            // console.log(this);
            // console.log(that);
            let flag = true;
            setInterval(() => {
                function sub() {
                    that.opacity -= 0.01;
                }
                function add() {
                    that.opacity += 0.01;
                }
                if (flag) {
                    sub();
                } else {
                    add();
                }
                if (that.opacity <= 0 || that.opacity >= 1) {
                    flag = !flag;
                }
            }, 16)
        }
        setWelcomeInterval(this);
    }
})
// let flag = true;
// setInterval(() => {
//     function sub() {
//         vm.opacity -= 0.01;
//     }
//     function add() {
//         vm.opacity += 0.01;
//     }
//     if (flag) {
//         sub();
//     } else {
//         add();
//     }
//     if (vm.opacity <= 0 || vm.opacity >= 1) {
//         flag = !flag;
//     }
// }, 16)
