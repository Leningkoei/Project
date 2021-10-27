export { majorityElement };
/**
 * 摩尔投票;
 * @param {number[]} nums
 * @returns {number}
 */
function majorityElement(nums) {
    let result = nums[0];
    let resultCount = 1;
    let otherCount = 0;
    for (const num of nums) {
        if (num === result) {
            resultCount++;
        } else {
            otherCount++;
        }
        if (resultCount <= otherCount) {
            result = num;
            resultCount = 1;
            otherCount = 0;
        }
    }
    return result;
}
