// s = abpclea;
//         a   b   c   d   e   f   g   h   i   j   k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z
// 0a      0   1   3       5                           4               2
// 1b      6   1   3       5                           4               2
// 2p      6   7   3       5                           4               2
// 3c      6   7   3       5                           4               7
// 4l      6   7   7       5                           4               7
// 5e      6   7   7       5                           7               7
// 6a      6   7   7       7                           7               7
// 7?      7   7   7       7                           7               7
/**
 * @param {string} s 
 * @param {string[]} dictionary 
 */
 const findLongestWord = function(s, dictionary) {
    let result = "";
    const m = s.length;
    const f = new Array(m + 1).fill(undefined).map(() => new Array(26).fill(m));
    // 逆向遍历;
    for (let i = m - 1; i >= 0; i--) {
        for (let char = 0; char < 26; char++) {
            // s当前的字符 === 当前26个字母中的字符 ? 替换上1个 : 继承上1个;
            if (s[i] === String.fromCharCode("a".charCodeAt() + char)) {
                f[i][char] = i;
            } else {
                f[i][char] = f[i + 1][char];
            }
        }
    }
    for (const word of dictionary) {
        let match = true;
        let charOfS = 0;
        for (const char of word) {
            const indexOfcharInS = f[charOfS][char.charCodeAt() - "a".charCodeAt()];
            if (m === indexOfcharInS) {
                match = false;
                break;
            }
            charOfS = indexOfcharInS + 1;
        }
        if (match) {
            if (word.length > result.length || word < result) {
                result = word;
            }
        }
    }
    return result;
}
