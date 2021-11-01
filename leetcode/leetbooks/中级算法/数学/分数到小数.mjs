export { fractionToDecimal };
/**
 * @param {number} numerator
 * @param {number} denominator
 * @returns {string}
 */
function fractionToDecimal(numerator, denominator) {
    const integerPart = parseInt(numerator / denominator);
    const decimalPart = [];
    const remainderLog = new Map(); // <余数, 余数出现的位置>
    let remainder = numerator % denominator;
    let index = 0;
    denominator = Math.abs(denominator);
    while (remainder && !remainderLog.has(remainder) && index <= 10000) {
        remainderLog.set(remainder, index++);
        let numerator = remainder * 10;
        let quotient = parseInt(numerator / denominator);
        decimalPart.push(quotient);
        remainder = numerator % denominator;
    }
    const bgnBracketLocation = remainderLog.get(remainder);
    if (bgnBracketLocation) {
        decimalPart.splice(bgnBracketLocation, 0, "(");
        decimalPart.push(")");
    }
    return `${integerPart.toString()}.${decimalPart.join("")}`;
}
