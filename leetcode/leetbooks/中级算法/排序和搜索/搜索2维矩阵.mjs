export { searchMatrix as searchMatrixKai };
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
    const m = matrix[0].length;
    const n = matrix.length;
    const l = Math.min(m, n);
    // let low = 0;
    // let high = l;
    // while (low < high) {
    //     const mid = low + high >>> 1;
    //     const midVal = matrix[mid][mid];
    //     if (midVal === target) {
    //         return true;
    //     } else if (midVal < target) {
    //         low = mid + 1;
    //     } else if (midVal > target) {
    //         high = mid;
    //     }
    // }
    // if (low < l) {
    for (let low = 0; low < l; low++) {
        // 检查target是不是在对角线上;
        if (matrix[low][low] === target) {
            return true;
        }
        // 此时low === target所处的行列之中;
        // 搜索列;
        let top = 0;
        let btm = low;
        while (top < btm) {
            const mid = top + btm >>> 1;
            const midVal = matrix[mid][low];
            if (midVal === target) {
                return true;
            } else if (midVal < target) {
                top = mid + 1;
            } else if (midVal > target) {
                btm = mid;
            }
        }
        // 搜索行;
        let left = 0;
        let right = low;
        while (left < right) {
            const mid = left + right >>> 1;
            const midVal = matrix[low][mid];
            if (midVal === target) {
                return true;
            } else if (midVal < target) {
                left = mid + 1;
            } else if (midVal > target) {
                right = mid;
            }
        }
    }
    // } else {
    // 此时target在正方形之外;
    // 搜索多余列;
    for (let col = l; col < m; col++) {
        let top = 0;
        let btm = n;
        while (top < btm) {
            const mid = top + btm >>> 1;
            const midVal = matrix[mid][col];
            if (midVal === target) {
                return true;
            } else if (midVal < target) {
                top = mid + 1;
            } else if (midVal > target) {
                btm = mid;
            }
        }
    }
    // 搜索多余行
    for (let row = l; row < n; row++) {
        let left = 0;
        let right = m;
        while (left < right) {
            const mid = left + right >>> 1;
            const midVal = matrix[row][mid];
            if (midVal === target) {
                return true;
            } else if (midVal < target) {
                left = mid + 1;
            } else if (midVal > target) {
                right = mid;
            }
        }
    }
    // }
    return false;
}
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {number}
 */
function searchMatrixKai(matrix, target) {
    const m = matrix[0].length; // 列长;
    const n = matrix.length;    // 行长;
    let x = 0;
    let y = n - 1;
    while (x < m && 0 <= y) {
        if (matrix[y][x] === target) {
            return true;
        } else if (matrix[y][x] < target) {
            x++;
        } else if (matrix[y][x] > target) {
            y--;
        }
    }
    return false;
}
