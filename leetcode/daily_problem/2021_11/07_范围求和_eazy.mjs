export { maxCount };
/**
 * @param {number} m row;
 * @param {number} n col;
 * @param {number[][]} ops [ [ row, col ], ... ];
 * @returns {number}
 */
function maxCount(m, n, ops) {
    let x = n;  // row;
    let y = m;  // col;
    for (const op of ops) {
        x = Math.min(x, op[1]);
        y = Math.min(y, op[0]);
    }
    return x * y;
}
