const leetcode = leetcode || {};
/**
 * @param {number} n
 * @returns {number}
 */
leetcode.climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    let prePre = 1;
    let pre = 2;
    while (n-- > 2) {
        [ prePre, pre ] = [ pre, pre + prePre ];
    }
    return pre;
}
