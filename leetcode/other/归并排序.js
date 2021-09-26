export { mergeSort };
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
const mergeSort = function(nums, left, right) {
    if (left >= right) {
        return left;
    }
    const middle = left + right >> 1;
    return merge(mergeSort(nums, left, middle), mergeSort(nums, middle + 1, right));
}
/**
 * @param {number} leftPart
 * @param {number} rightPart
 */
const merge = function(leftPart, rightPart) {
    //
}
