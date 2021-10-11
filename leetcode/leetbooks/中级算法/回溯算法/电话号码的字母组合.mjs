export { letterCombinations };
/**
 * @param {string} digits
 * @returns {string[]}
 */
function letterCombinations(digits) {
    if (!digits.length) {
        return [];
    }
    const result = [];
    const path = [];
    const map = {
        "2": [ "a", "b", "c" ],
        "3": [ "d", "e", "f" ],
        "4": [ "g", "h", "i" ],
        "5": [ "j", "k", "l" ],
        "6": [ "m", "n", "o" ],
        "7": [ "p", "q", "r", "s" ],
        "8": [ "t", "u", "v" ],
        "9": [ "w", "x", "y", "z" ]
    }
    /**
     * @param {number} index
     */
    function dfs(index) {
        if (index === digits.length) {
            result.push(path.join(""));
        } else {
            for (const bit of map[digits[index]]) {
                path.push(bit);
                dfs(index + 1);
                path.pop();
            }
        }
    }
    dfs(0);
    return result;
}
