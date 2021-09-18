const leetcode = window.leetcode || {};
/**
 * @param {character[][]} board
 * @return {boolean}
 */
leetcode.isValidSudoku = function(board) {
    // const rowList = new Array(9).fill(undefined).map(() => []);
    // const colList = new Array(9).fill(undefined).map(() =>[]);
    // const blockList = new Array(9).fill(undefined).map(() => []);
    const rowSet = new Set();
    const colSet = new Set();
    const blockSet = new Set();
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const char = board[row][col];
            const block = parseInt(row / 3) + parseInt(col / 3) * 3;
            const rowInfo = JSON.stringify({row: row, char: char});
            const colInfo = JSON.stringify({col: col, char: char});
            const blockInfo = JSON.stringify({block: block, char: char});
            if (char !== ".") {
                // alert: directly compare object type is NG!!!;
                // if (rowList[row].indexOf(char) !== -1) {
                //     return false;
                // }
                if (rowSet.has(rowInfo)) {
                    return false;
                }
                // if (colList[col].indexOf(char) !== -1) {
                //     return false;
                // }
                if (colSet.has(colInfo)) {
                    return false;
                }
                // if (blockList[block].indexOf(char) !== -1) {
                //     return false;
                // }
                if (blockSet.has(blockInfo)) {
                    return false;
                }
                // rowList[row].push(char);
                // colList[col].push(char);
                // blockList[block].push(char);
                rowSet.add(rowInfo);
                colSet.add(colInfo);
                blockSet.add(blockInfo);
            }
        }
    }
    return true;
}
/**
 * 更加完美的哈希表;
 * @param {character[][]} board
 * @return {boolean}
 */
leetcode.isValidSudokuKai = function(board) {
    // array[9][9]: 前面以位置为索引, 后面以val的种类为索引, 存储该位置该val出现的bool;
    const rowList = new Array(9).fill(undefined).map(() => new Array(9).fill(false));
    const colList = new Array(9).fill(undefined).map(() => new Array(9).fill(false));
    const blockList = new Array(9).fill(undefined).map(() => new Array(9).fill(false));
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const char = board[row][col];
            if (char !== ".") {
                const val = Number(char);
                const block = parseInt(row / 3) + parseInt(col / 3) * 3;
                if (rowList[row][val] || colList[col][val] || blockList[block][val]) {
                    return false;
                }
                rowList[row][val] = true;
                colList[col][val] = true;
                blockList[block][val] = true;
            }
        }
    }
    return true;
}
