export { missingNumberKai as missingNumber };
/**
 * @param {number[]} nums
 * @returns {number}
 */
const missingNumber = function(nums) {
    return nums.reduce((result, num, index) => result ^ num ^ index, 0) ^ nums.length;
}
/**
 * @param {number[]} nums
 * @returns {number}
 */
const missingNumberKai = function(nums) {
    return (nums.length * (nums.length + 1) >>> 1) - nums.reduce((sum, num) => sum + num, 0);
}
