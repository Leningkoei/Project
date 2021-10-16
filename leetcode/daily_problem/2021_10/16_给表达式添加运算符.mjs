export { addOperators };
/**
 * @param {string} num
 * @param {number} target
 */
function addOperators(num, target) {
    const n = num.length;
    const ans = [];
    let expr = [];
    /**
     * @param {string[]} expr 当前构建出的表达式;
     * @param {number} i 当前的枚举到了num的第i个数字;
     * @param {number} res 当前表达式的计算结果;
     * @param {number} mul 表达式最后1个连乘串的计算结果;
     */
    function backTrack(expr, i, res, mul) {
        if (i === n) {
            if (res === target) {
                ans.push(expr.join(""));
            }
            return;
        }
        const signIndex = expr.length;
        if (i > 0) {
            expr.push("");
        }
        let val = 0;
        for (let j = i; j < n && (j === i || num[i] !== "0"); j++) {
            val = val * 10 + num[j].charCodeAt() - "0".charCodeAt();
            expr.push(num[j]);
            if (i === 0) {
                backTrack(expr, j + 1, val, val);
            } else {
                expr[signIndex] = "+";
                backTrack(expr, j + 1, res + val, val);
                expr[signIndex] = "-";
                backTrack(expr, j + 1, res - val, -val);
                expr[signIndex] = "*";
                backTrack(expr, j + 1, res - mul + mul * val, mul * val);
            }
        }
        expr = expr.splice(signIndex, expr.length - signIndex);
    }
    backTrack(expr, 0, 0, 0);
    return ans;
}
