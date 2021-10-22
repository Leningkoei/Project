export { lengthOfLIS };
/**
 * @param {number[]} nums
 * @returns {number}
 */
function lengthOfLIS(nums) {
    let result = 0;
    const dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; i++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(result, dp[i]);
    }
    return result;
}
