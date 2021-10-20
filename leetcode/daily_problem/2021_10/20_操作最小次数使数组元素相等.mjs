export { minMoves };
/**
 * @param {number[]} nums
 * @returns {number}
 */
function minMoves(nums) {
    // let result = 0;
    // for (const num of nums) {
    //     result += Math.abs(num - nums[0]);
    // }
    // return result;
    return nums.reduce((previousValue, currentValue) => previousValue += Math.abs(previousValue - currentValue), 0);
}
