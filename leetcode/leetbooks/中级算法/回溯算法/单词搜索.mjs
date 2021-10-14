export { exist };
/**
 * @param {character[][]} board
 * @param {string} word
 * @returns {boolean}
 */
function exist(board, word) {
    const xMax = board[0].length;
    const yMax = board.length;
    let result = false;
    // const log = new Set();
    // function dfs(x, y, index) {
    function dfs(x, y, index, count) {
        // if (log.size === word.length) {
        if (count === word.length) {
            result = true;
        } else if (x >= 0 && x < xMax && y >= 0 && y < yMax) {
            // const thisLocation = [ x, y ].toString();
            const thisChar = board[y][x];
            // if (!log.has(thisLocation) && board[y][x] === word[index]) {
            if (thisChar === word[index]) {
                // log.add(thisLocation);
                board[y][x] = undefined;
                // dfs(x - 1, y, index + 1);
                dfs(x - 1, y, index + 1, count + 1);
                // dfs(x + 1, y, index + 1);
                dfs(x + 1, y, index + 1, count + 1);
                // dfs(x, y - 1, index + 1);
                dfs(x, y - 1, index + 1, count + 1);
                // dfs(x, y + 1, index + 1);
                dfs(x, y + 1, index + 1, count + 1);
                // log.delete(thisLocation);
                board[y][x] = thisChar;
            }
        }
    }
    for (let y = 0; y < yMax && !result; y++) {
        for (let x = 0; x < xMax && !result; x++) {
            // dfs(x, y, 0);
            dfs(x, y, 0, 0);
        }
    }
    return result;
}
