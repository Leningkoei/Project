export { threeNum };
/**
 * @param {number[]} nums
 * @returns {number[][]}
 */
const threeNum = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
        const sub = -nums[i] - nums[j];        
    }
    return;
}
