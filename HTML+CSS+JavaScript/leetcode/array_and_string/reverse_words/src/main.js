const MAIN = {
    Custom: function() {
        this.problem = "s: 1串以字符串构成的英文;<br>将这串英文逆序输出;";
        this.input = [ "the sky is blue" ];
    },
    Problem: function() {
        this.s = window.document.getElementById("input0").value;
        this.reverWords = function(s) {
            return s.trim().split(/\ +/).reverse().join(" ");
            // let result = "";
            // s = s.replace(/^\s+ | \s+$/g, "");
            // s = s.split(/\s+/).reverse();
            // for (let i = 0; i < s.length - 1; i++) {
            //     result += s[i] + " ";
            // }
            // return result + s[s.length - 1];
        }
        this.main = function() {
            window.document.getElementById("result").value = this
                .reverWords(this.s);
        }
    }
}
