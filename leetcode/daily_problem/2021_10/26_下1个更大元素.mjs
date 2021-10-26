export { nextGreaterElementKai as nextGreaterElement };
/**
 * hash map 存储 dp;
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const result = [];
    const dp = new Map(); // 存储 nums2 中 [ num, num 的最近的最大元素 ];
    /**
     * 深度优先搜索 num 最近的最大元素;
     * @param {number} num 原始的 num;
     * @param {number} tempNum 中间查找出的错误结果;
     * @returns {number}
     */
    function dfs(num, tempNum) {
        const nextNum = dp.get(tempNum);
        if (nextNum === -1) {
            return -1;
        } else if (num < nextNum) {
            return nextNum;
        } else {
            return dfs(num, nextNum);
        }
    }
    // 初始化dp;
    for (let i = 0; i < nums2.length - 1; i++) {
        dp.set(nums2[i], nums2[i + 1]);
    }
    dp.set(nums2[nums2.length - 1], -1);
    // 逆序构造dp;
    for (let i = nums2.length - 2; i >= 0; i--) {
        dp.set(nums2[i], dfs(nums2[i], nums2[i]));
    }
    // console.log(dp);
    for (const num of nums1) {
        result.push(dp.get(num));
    }
    return result;
}
/**
 * 单调栈 + hash map;
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
function nextGreaterElementKai(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (let i = nums2.length - 1; i >= 0; i--) {
        const num = nums2[i];
        while (stack.length && num >= stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(num, stack.length ? stack[stack.length - 1] : -1);
        stack.push(num);
    }
    const result = new Array(nums1.length).fill(undefined).map((_, i) => map.get(nums1[i]));
    return result;
}
