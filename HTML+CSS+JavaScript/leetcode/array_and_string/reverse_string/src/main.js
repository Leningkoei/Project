const MAIN = {
    Custom: function() {
        this.problem = "将s的顺序颠倒;";
        this.input = [ "[ \"h\", \"e\", \"l\", \"l\", \"o\" ]" ];
    },
    Problem: function() {
        this.s = new Function("return " + window.document.getElementById("input0").value + ";")();
        /**
         * 
         * @param {Array} s 
         */
        this.reverseString = function(s) {
            // s.reverse();
            for (let i = 0, j = s.length - 1; i < j; i++, j--) {
                [ s[i], s[j] ] = [ s[j], s[i] ];
            }
        }
        this.main = function() {
            window.document.getElementById("result").value = this.s;
        }
    }
}
