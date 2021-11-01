export { fractionToDecimal };
/**
 * @param {number} numerator
 * @param {number} denominator
 * @returns {string}
 */
 function fractionToDecimal(numerator, denominator) {
    if (numerator % denominator) {  // 注意余数可以是负数;
        const flag = (numerator >= 0) ^ (denominator > 0);  // 同号为 true, 异号为 false;
        numerator = Math.abs(numerator);
        denominator = Math.abs(denominator);
        const integerPart = Math.floor(numerator / denominator);    // 注意使用 parseInt 会溢出;
        const decimalPart = [];
        const remainderLog = new Map(); // <余数, 余数出现的位置>
        let remainder = numerator % denominator;
        let index = 0;
        while (remainder && !remainderLog.has(remainder) && index <= 10000) {
            remainderLog.set(remainder, index++);
            let numerator = remainder * 10;
            let quotient = Math.floor(numerator / denominator);
            decimalPart.push(quotient);
            remainder = numerator % denominator;
        }
        const bgnBracketLocation = remainderLog.get(remainder);
        if (bgnBracketLocation !== undefined) {
            decimalPart.splice(bgnBracketLocation, 0, "(");
            decimalPart.push(")");
        }
        return `${flag ? "-" : ""}${integerPart.toString()}.${decimalPart.join("")}`;
    } else {
        return (numerator / denominator).toString();
    }
}
