export { fractionToDecimal };
/**
 * @param {number} numerator 分子;
 * @param {number} denominator 分母;
 */
const fractionToDecimal = function(numerator, denominator) {
    if (numerator % denominator === 0) {
        return (numerator / denominator).toString();
    }
    const result = [];
    const map = new Map();
    let count = 10000;
    if (numerator < 0 ^ denominator < 0) {
        result.push("-");
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    const remainder = numerator % denominator;
    const quotient = (numerator - remainder) / denominator;
    result.push(quotient.toString());
    result.push(".");
    let location = result.length;
    numerator = remainder * 10;
    while (count--) {
        if (map.has(numerator)) {
            location = map.get(numerator);
            break;
        } else {
            const remainder = numerator % denominator;
            const quotient = (numerator - remainder) / denominator;
            result.push(quotient);
            if (remainder === 0) {
                return result.join("");
            }
            map.set(numerator, location);
            location++;
            numerator = remainder * 10;
        }
    }
    result.splice(location, 0, "(");
    result.push(")");
    return result.join("");
}
