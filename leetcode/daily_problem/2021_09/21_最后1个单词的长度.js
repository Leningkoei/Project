const leetcode = leetcode || {};
/**
 * @param {string} s
 * @returns {number}
 */
leetcode.lengthOfLastWord = function(s) {
    return s.trim().split(" ")[s.trim().split(" ").length - 1] .length;
}
