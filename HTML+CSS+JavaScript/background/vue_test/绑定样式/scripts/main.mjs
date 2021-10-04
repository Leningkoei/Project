export { main };
const main = function() {
    const vm = new Vue({
        "el": "#root",
        "data": function() {
            return {
                "style": ""
            }
        },
        "methods": {
            "changeColor": function() {
                const map = [ "first", "second", "third", "forth", "fifth" ];
                // let count = 100;
                // while (count--) {
                const index = ~~(Math.random() * 5);
                this.style = map[index];
                // }
            }
        }
    })
}
