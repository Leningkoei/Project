const leetcode = window.leetcode || {};
/**
 * @param {number} n
 * @returns {boolean}
 */
leetcode.canWinNim = function(n) {
    return (n & 3) !== 0;
}
