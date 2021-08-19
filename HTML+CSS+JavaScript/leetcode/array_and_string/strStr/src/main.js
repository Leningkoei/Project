const MAIN = {
    Custom: function() {
        this.problem = "在字符串haystack中查找字符串needle;";
        this.input = [ "hello", "ll" ];
    },
    Problem: function() {
        this.haystack = window.document.getElementById("input0").value;
        this.needle   = window.document.getElementById("input1").value;
        this.strStr = function(haystack, needle) {
            // return haystack.indexOf(needle);
            if (needle === "") {
                return 0;
            }
            const buildNext = function() {
                let next = new Array(needle.length);
                next[0] = -1;
                for (let i = -1, j = 0; j < needle.length - 1;) {
                    if (needle[j] === needle[next[j]]) {
                        next[j] = next[next[j]];
                    }
                    if (i < 0 || needle[i] === needle[j]) {
                        i++;
                        j++;
                        next[j] = i;
                    } else {
                        i = next[i];
                    }
                }
                return next;
            }
            const next = buildNext();
            for (let i = 0, j = 0; i < haystack.length;) {
                if (haystack[i] === needle[j]) {
                    i++;
                    j++;
                    if (j === needle.length) {
                        return (i - needle.length);
                    }
                } else {
                    if (next[j] === -1) {
                        i++;
                        j = 0;
                    } else {
                        j = next[j];
                    }
                }
            }
            return -1;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.strStr(this.haystack, this.needle);
        }
    }
}
