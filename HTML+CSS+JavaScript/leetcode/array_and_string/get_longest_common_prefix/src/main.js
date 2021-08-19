const MAIN = {
    Custom: function() {
        this.problem = "找出字符串数组strs中的最长公共前缀;";
        this.input = [ "[ \"flower\", \"flow\", \"flight\" ]" ];
    },
    Problem: function() {
        this.strs = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.getLongestCommonPrefix = function(strs) {
            /**
             * 
             * 循环写法;
             */
            // let result;
            // for (let index = 0; index < strs.length - 1; index++) {
            //     let resultKai = "";
            //     for (let i = 0; i < strs[index].length; i++) {
            //         if (strs[index][i] === strs[index + 1][i]) {
            //             resultKai += strs[index][i];
            //         } else {
            //             break;
            //         }
            //     }
            //     if (resultKai === "") {
            //         result = "";
            //         break;
            //     }
            //     if (result > resultKai) {
            //         result = resultKai;
            //     }
            // }
            /**
             * 
             * 递归写法;
             */
            var index = 1;
            var result = strs[0];
            var resultKai = "";
            var max = strs.length;
            const getLongestCommonPrefixKai = function() {
                if (index >= max) {
                    return result;
                }
                // 找出strs[index - 1]和strs[index]中相同的部分;
                for (let i = 0; i < strs[index].length; i++) {
                    if (strs[index - 1][i] === strs[index][i]) {
                        resultKai += strs[index][i];
                    } else {
                        break;
                    }
                }
                if (resultKai === "") {
                    return "";
                }
                if (result <= resultKai) {
                    index++;
                    resultKai = "";
                    return getLongestCommonPrefixKai();
                }
                if (result > resultKai) {
                    result = resultKai;
                    index++;
                    resultKai = "";
                    return getLongestCommonPrefixKai();
                }
                alert("NMSL");
                return;
            }
            return getLongestCommonPrefixKai();
        }
        this.main = function() {
            window.document.getElementById("result").value = this.getLongestCommonPrefix(this.strs);
        }
    }
}
