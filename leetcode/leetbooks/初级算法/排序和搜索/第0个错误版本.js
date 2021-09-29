const leetcode = leetcode || {};
/**
 * 仅仅作演示使用, 并不能真正起到实质性作用;
 * @param {number} version
 * @returns {boolean}
 */
leetcode.isBadVersion = function(version) {
    version = version;
    return false;
}
/**
 * @param {leetcode.isBadVersion} isBadVersion -- 注意注释时的类型
 * @returns {number}
 */
leetcode.solution = function(isBadVersion) {
    return function(n) {
        let bgn = 0;
        let end = n;
        while (bgn < end) {
            const middle = bgn + end >> 1;
            isBadVersion(middle) ? end = middle : bgn = middle + 1;
        }
        return bgn;
    }
}
