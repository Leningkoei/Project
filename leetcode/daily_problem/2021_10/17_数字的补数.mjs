export { findComplement };
/**
 * @param {number} num
 * @returns {number}
 */
function findComplement(num) {
    let result = ~num;
    let mask = 1;
    while (num) {
        num >>>= 1;
        mask <<= 1;
    }
    return result & mask - 1;
}
