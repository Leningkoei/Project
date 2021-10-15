export { findKthLargestKai as findKthLargest };
/**
 * 小顶堆;
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function findKthLargest(nums, k) {
    const resultMap = new Array(k).fill(-Infinity);
    for (const num of nums) {
        // 维护小顶堆;
        if (num > resultMap[k - 1]) {
            resultMap.pop();
            let left = 0;
            let right = k - 1;
            while (left < right) {
                const mid = left + right >>> 1;
                if (resultMap[mid] >= num) {
                    left = mid + 1;
                } else if (resultMap[mid] < num) {
                    right = mid;
                }
            }
            // 此时left === 插入位置;
            resultMap.splice(left, 0, num);
        }
    }
    return resultMap[0];
}
/**
 * 快速搜索(递增划分);
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function findKthLargestKai(nums, k) {
    const targetIndex = nums.length - k;
    function quickSelect(bgn, end) {
        let left = bgn;
        let right = end;
        const flag = nums[left];
        while (left < right) {
            do {
                right--;
            } while (left < right && nums[right] >= target);
            [ nums[left], nums[right] ] = [ nums[right], nums[left] ];
            while (left < right && nums[left] <= flag) {
                left++;
            }
            [ nums[left], nums[right] ] = [ nums[right], nums[left] ];
        }
        // 此时, left === right的左侧皆 <= flag, 右侧皆 >= flag;
        /**
         * this time:
         * left === right &&
         * all in [bgn, left] <= flag &&
         * all in [left, end] >= flag;
         */
        if (left === targetIndex) {
            return nums[left];
        } else if (left < targetIndex) {
            return quickSelect(left, end);
        } else if (left > targetIndex) {
            return quickSelect(bgn, left);
        }
    }
    return quickSelect(0, nums.length);
}
