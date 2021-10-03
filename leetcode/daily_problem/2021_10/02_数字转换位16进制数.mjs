export { toHex };
/**
 * @param {number} num
 * @returns {string}
 */
const toHex = function(num) {
    if (num) {
        const result = "";
        const map = "0123456789abcdef";
        num >>>= 0;
        while (num) {
            result = map[num & 15] + result;
            num >>>= 4;
        }
        return result;
    }
    return "0";
}
