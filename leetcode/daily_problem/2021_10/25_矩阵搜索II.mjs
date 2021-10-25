export { searchMatrix };
/**
 * 从左下向右上查找;
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
    let x = 0;
    let y = matrix.length - 1;
    while (x < matrix[0].length && y > -1) {
        if (matrix[y][x] === target) {
            return true;
        } else if (matrix[y][x] < target) {
            y--;
        } else if (matrix[y][x] > target) {
            x++;
        }
    }
    return false;
}
/**
 * 从右上向左下查找;
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function searchMatrixKai(matrix, target) {
    let x = matrix[0].length - 1;
    let y = 0;
    while (x > -1 && y < matrix.length) {
        if (matrix[y][x] === target) {
            return true;
        } else if (matrix[y][x] < target) {
            y++;
        } else if (matrix[y][x] > target) {
            x--;
        }
    }
    return false;
}
