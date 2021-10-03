export { fractionToDecimal };
/**
 * @param {number} numerator 分子;
 * @param {number} denominator 分母;
 */
const fractionToDecimal = function(numerator, denominator) {
    let count = 10000;
    const map = new Map();
    const remainder = numerator % denominator;
    const quotient = (numerator - remainder) / denominator;
    const front = quotient.toString() + ".";
    if (remainder === 0) {
        return front + "0";
    }
    numerator = remainder * 10;
    while (count--) {
        /**
         * 余数;
         */
        const remainder = numerator % denominator;
        if (map.has(remainder)) {
            break;
        }
        /**
         * 商;
         */
        const quotient = (numerator - remainder) / denominator;
        map.set(remainder, quotient);
        if (remainder === 0) {
            return front + map.values.join("");
        }
        numerator = remainder * 10;
    }
    return front + "(" + map.values.join("") + ")";
}
