export { singleNumber };
/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function singleNumber(nums) {
    const orSum = nums.reduce((orSum, num) => orSum ^= num, 0);
    const lsb = orSum & -orSum;
    // let type0 = 0;
    // let type1 = 0;
    // nums.forEach((num) => num & lsb ? type1 ^= num : type0 ^= num);
    // return [ type0, type1 ];
    return nums.reduce((result, num) => num & lsb ? [ result[0], result[1] ^= num ] : [ result[0] ^= num, result[1] ], [ 0, 0 ]);
}
