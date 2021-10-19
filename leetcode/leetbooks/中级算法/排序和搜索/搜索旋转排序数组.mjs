export { searchKai as search };
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + right >>> 1;
        if (nums[mid] === nums[right]) {
            right--;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        }
    }
    // 此时, left === 翻转前的nums[0];
    if (nums[left] === target) {
        return left;
    } else if (nums[0] <= target && target <= nums[left - 1]) {
        right = left;
        left = 0;
    } else if (nums[left] < target && target < nums[0]) {
        right = nums.length;
        left = left;
    } else if (nums[left] <= target && target <= nums[nums.length - 1]) {
        right = nums.length;
        left = 0;
    }
    while (left < right) {
        const mid = left + right >>> 1;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    return -1;
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function searchKai(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + right >>> 1;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[left] === target) {
            return left;
        } else if (nums[right] === target) {
            return right;
        } else {
            if (nums[left] <= nums[mid]) {
                // 此时[left, mid]有序;
                if (nums[left] < target && target < nums[mid]) {
                    //此时target在有序区;
                    right = mid - 1;
                } else if (nums[mid] < target || target < nums[left]) {
                    // 此时target在无序区;
                    left = mid + 1;
                }
            } else if (nums[mid] <= nums[right]) {
                // 此时[mid, right]有序;
                if (nums[mid] < target && target < nums[right]) {
                    // 此时target在有序区;
                    left = mid + 1;
                } else if (nums[right] < target || target < nums[mid]) {
                    // 此时target在无序区;
                    right = mid - 1;
                }
            }
        }
    }
    return -1;
}
