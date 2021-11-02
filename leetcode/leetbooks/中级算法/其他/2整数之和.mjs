export { getSum };
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getSum(a, b) {
    while (b) {
        const carry = a & b << 1;
        a ^= b;
        b = carry;
    }
    return a;
}
