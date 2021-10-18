export { search };
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        const mid = left + right >>> 1;
        if (mid + 1 === nums.length) {      // 宁可考虑下越界8;
            right = mid;
        } else if (nums[mid] > nums[mid + 1]) {
            left = mid + 1;
        } else if (nums[mid] < nums[mid + 1]) {
            right = mid;
        }
    }
    // 此时, left === 翻转前的nums[0];
    const flag = target < nums[0] ? true : false;
    left = flag ? left : 0;
    right = flag ? nums.length : left;
    while (left < right) {
        const mid = left + right >>> 1;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            right = mid;
        } else if (nums[mid] > target) {
            left = mid + 1;
        }
    }
    return -1;
}
