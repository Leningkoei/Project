export { numIslands };
/**
 * @param {number[][]} grid
 * @returns {number}
 */
const numIslands = function(grid) {
    const dfs = function(x, y) {
        if (x >= 0 && y >= 0 && x < maxRowIndex && y < maxColIndex && grid[x][y] === "1") {
            grid[x][y] = 0;
            dfs(x + 1, y);
            dfs(x, y + 1);
            dfs(x - 1, y);
            dfs(x, y - 1);
        }
    }
    const maxRowIndex = grid.length;
    const maxColIndex = grid[0].length;
    let count = 0;
    for (let rowIndex = 0; rowIndex < maxRowIndex; rowIndex++) {
        for (let colIndex = 0; colIndex < maxColIndex; colIndex++) {
            if (grid[rowIndex][colIndex] === "1") {
                dfs(rowIndex, colIndex);
                count++;
            }
        }
    }
    return count;
}
