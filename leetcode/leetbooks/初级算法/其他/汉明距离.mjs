export { hammingDistance };
/**
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
const hammingDistance = function(x, y) {
    x ^= y;
    let result = 0;
    while (x) {
        x &= x - 1;
        result++;
    }
    return result;
}
