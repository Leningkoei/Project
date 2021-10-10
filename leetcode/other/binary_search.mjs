export { binarySearch };
/**
 * @param {number[]} nums 目标数组;
 * @param {number} target 目标值;
 * @returns {number[]}
 */
 function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = left + (right - left >>> 1);
        if (nums[mid] === target) {
            return [ mid, mid ];
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return [ left, left + 1 ];
}
