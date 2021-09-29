export { maxSubArray };
/**
 * @param {number[]} nums
 * @returns {number}
 */
const maxSubArray = function(nums) {
    // // nums索引 - 到该索引为止, 最大的子序和;
    // const myMap = new Array(nums.length).fill(nums[0]);
    let result = -Infinity;
    let pre = -Infinity;
    // for (let i = 1; i < nums.length; i++) {
    for (const i of nums) {
        // myMap[i] = Math.max(myMap[i - 1] + i, i);
        // const pre = myMap[i - 1];
        // myMap[i] = pre > 0 ? pre + nums[i] : nums[i];
        pre = pre > 0 ? pre + i : i;
        result = Math.max(pre, result);
    }
    // return Math.max(...myMap);
    return result;
}
