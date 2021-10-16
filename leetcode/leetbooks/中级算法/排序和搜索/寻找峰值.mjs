export { findPeakElement };
/**
 * @param {number[]} nums
 * @returns {number}
 */
function findPeakElement(nums) {
    const n = nums.length;
    if (nums.length === 1) {
        return 0;
    } else if (nums[0] > nums[1]) {
        // -Infinity < nums[0] > nums[1];
        return 0;
    } else if (nums[n - 2] < nums[n - 1]) {
        // nums[n - 2] < nums[n - 1] > -Infinity;
        return n - 1;
    } else {
        let left = 0;
        let right = n;
        while (left < right) {
            const mid = left + right >>> 1;
            if (nums[mid - 1] < nums[mid]) {
                left = mid + 1;
            } else if (nums[mid - 1] >= nums[mid]) {
                right = mid;
            }
        }
    }
    return left - 1;
}
