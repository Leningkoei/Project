const leetcode = window.leetcode || {};
leetcode.TreeNode = class {
    /**
     * @param {number} val
     * @param {leetcode.TreeNode} left
     * @param {leetcode.TreeNode} right
     */
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : this.val;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}
/**
 * @param {number[]} nums
 * @returns {leetcode.TreeNode}
 */
leetcode.sortedArrayToBST = function(nums) {
    const myFunction = function(left, right) {
        if (left >= right) {
            return null;
        }
        const middle = (left + right) / 2 ^ 0;
        return new leetcode.TreeNode(nums[middle], myFunction(left, middle), myFunction(middle + 1, right));
    }
    return myFunction(0, nums.length);
}
