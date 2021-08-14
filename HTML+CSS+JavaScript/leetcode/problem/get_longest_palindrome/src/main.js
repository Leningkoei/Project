const MAIN = {
    Custom: function() {
        this.problem = "TODO;";
        this.input = [ "babad" ];
    },
    Problem: function() {
        this.s = window.document.getElementById("input0").value;
        this.getLongestPalindrome = function(s) {
            let result = "";
            let resultKa = [ 0, 1 ];
            let resultKaKai = [ -1, -1 ];
            // 从头遍历;
            for (let index = 0; index < s.length; index++) {
                
                if (index < 0 || index > s.length - 1) {
                    return;
                }
                for (let i = index - 1, j = index + 1; i > -1 && j < s.length; i--, j++) {
                    if (s[i] !== s[j]) {
                        break;
                    }
                    resultKaKai = [ i, j + 1 ];
                }
                if (resultKa[1] - resultKa[0] < resultKaKai[1] - resultKaKai[0]) {
                    resultKa = resultKaKai;
                }
                for (let i = index, j = index + 1; i > -1 && j < s.length; i--, j++) {
                    if (s[i] !== s[j]) {
                        break;
                    }
                    resultKaKai = [ i, j + 1 ];
                }
                if (resultKa[1] - resultKa[0] < resultKaKai[1] - resultKaKai[0]) {
                    resultKa = resultKaKai;
                }
            }
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
            //         resultKaKai = [ i, j + 1 ];
            //     }
            //     if (resultKa[1] - resultKa[0] < resultKaKai[1] - resultKaKai[0]) {
            //         resultKa = resultKaKai;
            //     }
            //     for (let i = index, j = index + 1; i > -1 && j < s.length; i--, j++) {
            //         if (s[i] !== s[j]) {
            //             break;
            //         }
            //         resultKaKai = [ i, j + 1 ];
            //     }
            //     if (index < mid) {
            //         if (resultKa[1] - resultKa[0] <= resultKaKai[1] - resultKaKai[0]) {
            //             resultKa = resultKaKai;
            //         }
            //     } else {
            //         if (resultKa[1] - resultKa[0] < resultKaKai[1] - resultKaKai[0]) {
            //             resultKa = resultKaKai;
            //         }
            //     }
            // }
            // getLongestPalindromeKai(mid);
            // for (let i = mid - 1, j = mid + 1; i > -1 && j < s.length && (i >= (resultKa[1] - resultKa[0]) || j <= (resultKa[1] - resultKa[0])); i--, j++) {
            //     getLongestPalindromeKai(i);
            //     getLongestPalindromeKai(j);
            // }
            for (let i = resultKa[0]; i < resultKa[1]; i++) {
                result += s[i];
            }
            return result;
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
