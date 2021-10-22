export { trailingZeroes };
/**
 * @param {number} n
 * @returns {number}
 */
function trailingZeroes(n) {
    let result = 0;
    while (n) {
        n = parseInt(n / 5);
        result += n;
    }
    return result;
}
