export { uniquePaths };
/**
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
function uniquePaths(m, n) {
    // grid[y][x] = grid[y - 1][x] + grid[y][x - 1];
    const grid = new Array(n).fill(undefined).map(new Array(m).fill(1));
    for (let y = 1; y < n; y++) {
        for (let x = 1; x < m; x++) {
            grid[y][x] = grid[y - 1][x] + grid[y][x - 1];
        }
    }
    return grid[n - 1][m - 1];
}
