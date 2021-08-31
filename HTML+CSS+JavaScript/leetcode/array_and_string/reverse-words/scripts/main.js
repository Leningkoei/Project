const MAIN = {
    Custom: function() {
        this.problem = "反转字符串中用空格分割的单词, 单词的顺序不变;";
        this.input = [ "TODO; nmsl hello hai" ];
    },
    Problem: function() {
        this.s = window.document.getElementById("input0").value;
        /**
         * 
         * @param {string} s 
         * @returns {string}
         */
        this.reverseWords = function(s) {
            /**
             * 很喜欢py的1句话.jpg;
             */
            return s.split(" ").map(a => a.split("").reverse().join("")).join(" ");
        }
        this.main = function() {
            window.document.getElementById("result").value = this.reverseWords(this.s);
        }
    }
}
