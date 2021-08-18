const MAIN = {
    Custom: function() {
        this.problem = "找出字符串s中的最长回文子串;";
        this.input = [ "babad" ];
    },
    Problem: function() {
        this.s = window.document.getElementById("input0").value;
        this.getLongestPalindrome = function(s) {
            let result = 0;
            let resultLen = 1;
            let resultKaiLen = 1;
            // 从头遍历;
            for (let index = 0, i; index < s.length; index++) {
                // 当前剩余长度是否 < resultLen / 2;
                if (s.length - index < resultLen / 2) {
                    break;
                }
                // 扩展比较: <-index->, 得出的子串长度是奇数;
                i = index - 1;
                for (let j = index + 1; i > -1 && j < s.length && s[i] === s[j]; i--, j++, resultKaiLen += 2) {}
                // 如果得出的子串大于现有的子串, 则更新子串;
                if (resultLen < resultKaiLen) {
                    result = i + 1;
                    resultLen = resultKaiLen;
                }
                resultKaiLen = 0;
                // 扩展比较: <-index, index + 1->, 得出的子串长度是偶数;
                i = index;
                for (let j = index + 1; i > -1 && j < s.length && s[i] === s[j]; i--, j++, resultKaiLen += 2) {}
                // 如果得出的子串大于现有的子串, 则更新子串;
                if (resultLen < resultKaiLen) {
                    result = i + 1;
                    resultLen = resultKaiLen;
                }
                resultKaiLen = 1;
            }
            return s.substr(result, resultLen);
            // 基本同上;
            // let result = 0;
            // let resultLen = 1;
            // let resultKaiLen = 0;
            // for (let index = 0; index < s.length; index++) {
            // if (s.length - index < resultLen / 2) {
            //     break;
            // }
            //     for (let i = index - 1, j = index + 1; i > -1 && j < s.length && s[i] === s[j]; i--, j++, resultKaiLen++) {}
            //     if (resultLen < resultKaiLen * 2 + 1) {
            //         result = index - resultKaiLen;
            //         resultLen = resultKaiLen * 2 + 1;
            //     }
            //     resultKaiLen = 0;
            //     for (let i = index, j = index + 1; i > -1 && j < s.length && s[i] === s[j]; i--, j++, resultKaiLen++) {}
            //     if (resultLen < resultKaiLen * 2) {
            //         result = index - resultKaiLen + 1;
            //         resultLen = resultKaiLen * 2;
            //     }
            //     resultKaiLen = 0;
            // }
            // return s.substr(result, resultLen);
            // 中间向2边遍历, 有提前终止的判断;
            // let mid = Math.floor(s.length / 2);
            // let getLongestPalindromeKai = function(index) {
            // for (let index = 0; index < s.length; index++) {
            //     if (index < 0 || index > s.length - 1) {
            //         return;
            //     }
            //     for (let i = index - 1, j = index + 1; i > -1 && j < s.length; i--, j++) {
            //         if (s[i] !== s[j]) {
            //             break;
            //         }
            //         resultKai = [ i, j + 1 ];
            //     }
            //     if (result[1] - result[0] < resultKai[1] - resultKai[0]) {
            //         result = resultKai;
            //     }
            //     for (let i = index, j = index + 1; i > -1 && j < s.length; i--, j++) {
            //         if (s[i] !== s[j]) {
            //             break;
            //         }
            //         resultKai = [ i, j + 1 ];
            //     }
            //     if (index < mid) {
            //         if (result[1] - result[0] <= resultKai[1] - resultKai[0]) {
            //             result = resultKai;
            //         }
            //     } else {
            //         if (result[1] - result[0] < resultKai[1] - resultKai[0]) {
            //             result = resultKai;
            //         }
            //     }
            // }
            // getLongestPalindromeKai(mid);
            // for (let i = mid - 1, j = mid + 1; i > -1 && j < s.length && (i >= (result[1] - result[0]) || j <= (result[1] - result[0])); i--, j++) {
            //     getLongestPalindromeKai(i);
            //     getLongestPalindromeKai(j);
            // }
            // for (let i = result[0]; i < result[1]; i++) {
            //     result += s[i];
            // }
            // return result;
            // return s.substr(result, resultLen);
            // 慢;
            // let result = s[0];
            // let resultKai = "";
            // for (let index = 0; index < s.length || result.length >= index; index++) {
            //     resultKai = s[index];
            //     for (let i = index + 1; i < s.length; i++) {
            //         resultKai += s[i];
            //         if (s[index] === s[i]) {
            //             if (resultKai.length > result.length) {
            //                 let flag = true;
            //                 for (let i = 1, j = resultKai.length - 2; i < j; i++, j--) {
            //                     if (resultKai[i] != resultKai[j]) {
            //                         flag = false;
            //                         break;
            //                     }
            //                 }
            //                 if (flag === true) {
            //                     result = resultKai;
            //                 }
            //             }
            //         }
            //     }
            // }
            // return result;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.getLongestPalindrome(this.s);
        }
    }
}
