export { searchRange };
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function searchRange(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = left + right >>> 1;
        if (nums[mid] === target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    let leftBorder = left;
    left = 0;
    right = nums.length;
    while (left < right) {
        const mid = left + right >>> 1;
        if (nums[mid] === target) {
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    let rightBorder = left - 1;
    return leftBorder <= rightBorder ? [ leftBorder, rightBorder ] : [ -1, -1 ];
}
