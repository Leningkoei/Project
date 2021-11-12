export { getMoneyAmount };
/**
 * @param {number} n
 * @returns {number}
 */
function getMoneyAmount(n) {
    switch(true) {
        case n === 1:
            return 0;
        case n === 2:
            return 1;
        case n === 3:
            return 2;
        default:
            return n - 3 + Math.max(n - 1, getMoneyAmount(n - 4));
    }
}
