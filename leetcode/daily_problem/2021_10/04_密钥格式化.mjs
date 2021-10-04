export { licenseKeyFormatting };
/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
const licenseKeyFormatting = function(s, k) {
    const result = [];
    for (const char of s) {
        if (char !== "-") {
            result.push(char.toUpperCase());
        }
    }
    let i = result.length;
    while (i) {
        let kCopy = k;
        while (i && kCopy--) {
            i--;
        }
        result.splice(i, 0, "-");
    }
    result.shift();
    return result.join("");
}
