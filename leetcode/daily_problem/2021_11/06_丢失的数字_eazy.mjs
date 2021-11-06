export { missingNumber };
/**
 * @param {number[]} nums
 * @returns {number}
 */
function missingNumber(nums) {
    return ((1 + nums.length + 1) * nums.length >>> 1) - nums.reduce(
        (sum, num) => sum + num,
        0
    );
}
