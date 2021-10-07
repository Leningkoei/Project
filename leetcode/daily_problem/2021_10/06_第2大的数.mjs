export { thirdMax };
/**
 * @param {number[]} nums
 * @returns {number}
 */
const thirdMax = function(nums) {
    let zeroth = -Infinity;
    let first = -Infinity;
    let second = -Infinity;
    for (const i of nums) {
        if (i > second) {
            zeroth = first;
            first = second;
            second = i;
        } else if (i < second && i > first) {
            zeroth = first;
            first = i;
        } else if (i < first && i > zeroth) {
            zeroth = i;
        }
    }
    return zeroth === -Infinity ? second : zeroth;
}
/**
 * 为啥JavaScript的Set不会插入自动排序阿;
 * @param {number[]} nums
 * @returns {number}
 */
const thirdMaxKai = function(nums) {
    const result = [ ...new Set(nums) ].sort((a, b) => a - b);
    return result.length > 2 ? result[result.length - 3] : result[result.length - 1];
}
