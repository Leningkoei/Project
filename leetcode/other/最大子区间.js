const leetcode = leetcode || {};
/**
 * 分治;
 * @param {number[]} nums
 * @returns {number}
 */
leetcode.maxSubArray = function(nums) {
    const Status = class {
        /**
         * @param {number} leftSum
         * @param {number} rightSum
         * @param {number} maxSum
         * @param {number} allSum
         */
        constructor(leftSum, rightSum, maxSum, allSum) {
            this.leftSum = leftSum;     // [ left, right ]内以left为左端点的最大子区间和;
            this.rightSum = rightSum;   // [ left, right ]内以right为右端点的最大子区间和;
            this.maxSum = maxSum;       // [ left, right ]内最大子区间和;
            this.allSum = allSum;       // [ left, right ]区间和; -- allSum === leftSum + rightSum
        }
    }
    /**
     * @param {leetcode.Status} left
     * @param {leetcode.Status} right
     * @returns {leetcode.Status}
     */
    const pushUp = function(left, right) {
        const leftSum = Math.max(left.leftSum, left.allSum + right.leftSum);
        const rightSum = Math.max(right.rightSum, right.allSum + left.rightSum);
        const maxSum = Math.max(Math.max(left.maxSum, right.maxSum), left.rightSum + right.leftSum);
        const allSum = left.allSum + right.allSum;
        return new Status(leftSum, rightSum, maxSum, allSum);
    }
    const getInfo = function(left, right) {
        if (left === right) {
            return new Status(nums[left], nums[left], nums[left], nums[left]);
        }
        const middle = (left + right) >> 1;             // (m + n) >> 1 === (m + n) / 2 ^ 0;
        const leftSub = getInfo(left, middle);
        const rightSub = getInfo(middle + 1, right);
        return pushUp(leftSub, rightSub);
    }
    return getInfo(0, nums.length).maxSum;
}
