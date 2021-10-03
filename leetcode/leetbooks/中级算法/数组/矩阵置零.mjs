export { setZeros };
/**
 * @param {number[][]} matrix
 */
const setZeros = function(matrix) {
    const map = [];
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0, flag = false; y < matrix[0].length; y++) {
            if (matrix[x][y] === 0) {
                map.push(y);
                flag = true;
            }
        }
        if (flag) {
            for (let y = 0; y < matrix[0].length; y++) {
                matrix[x][y] = 0;
            }
        }
    }
    for (const y of map) {
        for (let x = 0; x < matrix.length; x++) {
            matrix[x][y] = 0;
        }
    }
}
