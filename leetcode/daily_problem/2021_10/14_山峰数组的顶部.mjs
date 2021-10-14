export { peakIndexInMountainArray };
/**
 * @param {number[]} arr
 * @returns {number}
 */
function peakIndexInMountainArray(arr) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
        const mid = left + right >>> 1;
        if (arr[mid] < arr[mid + 1]) {
            // 此时mid处于上升阶段;
            left = mid + 1;
        } else if (arr[mid] > arr[mid + 1]) {
            // 此时mid处于下降阶段;
            right = mid;
        } else {
            // 此时数组不符合题目要求;
            window.alert("This array is not a mountain array!!!");
            break;
        }
    }
    return left;
}
