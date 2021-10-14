export { subsets };
/**
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsets(nums) {
    const result = [];
    const log = new Array();
    /**
     * @param {number} index
     */
    function microSubset(index) {
        for (let i = index; i < nums.length; i++) {
            log.push(nums[i]);
            microSubset(i + 1);
            log.pop();
        }
        result.push([ ...log ]);
    }
    microSubset(0);
    return result;
}
