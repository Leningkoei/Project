export { minMoves };
/**
 * @param {number[]} nums
 * @returns {number}
 */
function minMoves(nums) {
    const minVal = Math.min(...nums);
    // let result = 0;
    // for (const num of nums) {
        // result += num - minVal;
    // }
    // return result;
    return nums.reduce((previousValue, currentValue) => previousValue += currentValue - minVal, 0);
}
