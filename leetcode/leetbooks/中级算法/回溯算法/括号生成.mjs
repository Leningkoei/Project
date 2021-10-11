export { generateParenthesis };
/**
 * @param {number} n
 * @returns {string[]}
 */
function generateParenthesis(n) {
    const result = [];
    const temp = [];
    let left = 0;
    let right = 0;
    function dfs() {
        if (temp.length === n * 2) {
            result.push(temp.join(""));
        } else {
            if (left < n) {
                temp.push("(");
                left++;
                dfs();
                temp.pop();
                left--;
            }
            if (left > right) {
                temp.push(")");
                right++;
                dfs();
                temp.pop();
                right--;
            }
        }
    }
    dfs();
    return result;
}
