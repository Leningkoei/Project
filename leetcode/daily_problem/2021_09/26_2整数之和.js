export { getSum };
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const getSum = function(a, b) {
    while (b) {
        const carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    return a;
}
