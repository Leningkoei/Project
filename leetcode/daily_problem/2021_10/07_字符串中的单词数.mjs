export { countSegments };
/**
 * @param {string} s
 * @returns {number}
 */
const countSegments = function(s) {
    s = s.trim();
    return s ? s.split(/ +/).length : 0;
}
