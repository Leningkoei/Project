export { minDistance };
/**
 * @param {string} word1
 * @param {string} word2
 */
const minDistance = function(word1, word2) {
    // 动态规划, 2维表格记录情况;
    const map = new Array(word1.length + 1).fill(undefined).map(new Array(word2.length + 1).fill(0));
    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                map[i][j] = map[i - 1][j - 1] + 1;
            } else {
                map[i][j] = Math.max(map[i - 1][j], map[i][j - 1]);
            }
        }
    }
    return word1.length + word2.length - 2 * map[word1.length][word2.length];
    // /**
    //  * 暴力递归, 枚举所有情况, 每次删除word1或word2的首字母;
    //  * @param {string} word1
    //  * @param {string} word2
    //  * @param {number} count
    //  * @returns {number}
    //  */
    // const myFunction = function(word1, word2, count) {
    //     if (!(word1 && word2)) {
    //         return count + word1.length + word2.length;
    //     }
    //     if (word1[0] === word2[0]) {
    //         return myFunction(word1.slice(1, word1.length), word2.slice(1, word2.length), count);
    //     }
    //     const delete1Count = myFunction(word1.slice(1, word1.length), word2, count + 1);
    //     const delete2Count = myFunction(word1, word2.slice(1, word2.length), count + 1);
    //     return Math.min(delete1Count, delete2Count);
    // }
    // return myFunction(word1, word2, 0);
}
