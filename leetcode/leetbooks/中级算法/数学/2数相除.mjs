export { divide };
/**
 * 模拟除法;
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
function divide(dividend, divisor) {
    /**
     * 模拟每1bit的除法;
     * @param {number} dividend 被除数
     * @returns {number[]} [ 除法结果, 余数 ];
     */
    function microDivde(dividend) {
        let result = 0;
        while (dividend >= divisor) {
            dividend -= divisor;
            result++;
        }
        return [ result, dividend ];
    }
    let result = "";    // 记录result;
    let remainder = ""; // 记录余数;
    const flag = (dividend >= 0) ^ (divisor > 0);   // 得到符号位;
    dividend = Math.abs(dividend).toString();
    divisor = Math.abs(divisor);
    for (const microDividend of dividend) {
        const microResult = microDivde(parseInt(remainder + microDividend));
        result += microResult[0].toString();
        remainder = microResult[1].toString();
    }
    result = parseInt(result);
    if (flag) {
        result = -result;
    }
    return result < -0x80000000 || result > 0x7FFFFFFF ? 0x7FFFFFFF : result;
}
