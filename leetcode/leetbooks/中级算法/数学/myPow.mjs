export { myPow };
/**
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function myPow(x, n) {
    function quickMul(x, n) {
        if (n) {
            const y = quickMul(x, n >>> 1);
            return n % 2 ? y * y * x : y * y;
        } else {
            return 1;
        }
    }
    return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n);
}
