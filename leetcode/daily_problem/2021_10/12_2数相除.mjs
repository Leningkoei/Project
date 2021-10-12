export { divde };
/**
 * 模拟除法;
 * @param {number} dividend
 * @param {number} divisor
 * @returns {number}
 */
function divde(dividend, divisor) {
    /**
     * @param {number} dividend
     * @returns {number[]}
     */
    function microDivde(dividend) {
        let result = 0;
        while (dividend >= divisor) {
            dividend -= divisor;
            result++;
        }
        return [ result, dividend ];
    }
    // const result = parseInt(dividend / divisor);
    // let result = 0;
    let result = "";
    let remainder = "";
    const flag = (dividend >= 0) ^ (divisor > 0);
    // dividend = Math.abs(dividend);
    // divisor = Math.abs(divisor);
    // while (dividend >= divisor) {
    //     dividend -= divisor;
    //     result++;
    // }
    dividend = Math.abs(dividend).toString();
    divisor = Math.abs(divisor);
    for (const microDividend of dividend) {
        const microResult = microDivde(parseInt(remainder + microDividend))
        result += microResult[0].toString();
        remainder = microResult[1].toString();
    }
    result = parseInt(result);
    if (flag) {
        result = -result;
    }
    return result < -0x80000000 || result > 0x7FFFFFFF ? 0x7FFFFFFF : result;
    // if (result < -0x80000000) {
    //     return 0x7FFFFFFF;
    // } else if (result > 0x7FFFFFFF) {
    //     return 0x7FFFFFFF;
    // } else {
    //     return result;
    // }
}
