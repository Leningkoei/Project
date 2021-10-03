export { lengthOfLongestSubstringKai as lengthOfLongestSubstring };
/**
 * @param {string} s
 * @returns {number}
 */
const lengthOfLongestSubstring = function(s) {
    const result = 0;
    for (let i = 0, j = 0; i < s.length; i++) {
        const map = new Map();
        for (j = i; j < s.length; j++) {
            if (map.has(s[j])) {
                break;
            }
            map.set(s[j], j);
        }
        result = Math.max(result, j - i);
        i = map.get(s[j]);
    }
    return result;
}
/**
 * @param {string} s
 * @returns {number}
 */
const lengthOfLongestSubstringKai = function(s) {
    let result = 0;
    const set = new Set();
    let log = 0;
    for (const char of s) {
        while (set.has(char)) {
            set.delete(s[log]);
            log++;
        }
        set.add(char);
        result = Math.max(result, set.size);
    }
    return result;
}
