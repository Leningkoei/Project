export { isPowerOfThree };
/**
 * @param {number} n
 * @returns {boolean}
 */
const isPowerOfThree = function(n) {
    return /^10*$/.test(n.string(3));
}
