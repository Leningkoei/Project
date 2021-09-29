export { generate };
/**
 * @param {number} numRows
 * @returns {number[]}
 */
const generate = function(numRows) {
    const result = new Array(numRows).fill(undefined).map(() => [1]);
    const numRowsCopy = numRows;
    while (--numRows) {
        row = numRowsCopy - numRows;
        for (let i = 1; i < row; i++) {
            result[row][i] = result[row - 1][i - 1] + result[row - 1];
        }
        result[row][row] = 1;
    }
    return result;
}
