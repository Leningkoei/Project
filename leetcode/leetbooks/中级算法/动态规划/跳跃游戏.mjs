export { canJumpKai as canJump };
/**
 * @param {number[]} nums
 * @returns {boolean}
 */
function canJump(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            let iCopy = i;
            while (iCopy > -1 && iCopy + nums[iCopy] - i <= 0) {
                iCopy--;
            }
            if (iCopy === -1) {
                return false;
            }
        }
    }
    return true;
}
function canJumpKai(nums) {
    const n = nums.length;
    let rightMost = 0;
    for (let i = 0; i < n; i++) {
        if (i <= rightMost) {
            rightMost = Math.max(rightMost, nums[i] + i);
            if (rightMost >= n - 1) {
                return true;
            }
        }
    }
    return false;
}
