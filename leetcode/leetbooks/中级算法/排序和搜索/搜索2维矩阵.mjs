export { searchMatrix };
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
    const m = matrix[0].length;
    const n = matrix.length;
    const low = 0;
    const high = Math.min(m, n);
    while (low < high) {
        const mid = low + high >>> 1;
        const midVal = matrix[mid][mid];
        if (midVal === target) {
            return true;
        } else if (midVal < target) {
            low = mid + 1;
        } else if (midVal > target) {
            high = mid;
        }
    }
}
