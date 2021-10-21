export { plusOneKai as plusOne };
/**
 * 模拟加法;
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOne(digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        const microResult = digits[i] + carry;
        digits[i] = microResult % 10;
        carry = parseInt(microResult / 10);
    }
    if (carry) {
        digits.unshift(1);
    }
    return digits;
}
/**
 * 逆序找9;
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOneKai(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            for (let j = i + 1; j < digits.length; j++) {
                digits[j] = 0;
            }
            return digits;
        }
    }
    const digitsKai = new Array(digits.length + 1).fill(0);
    digitsKai[0] = 1;
    return digitsKai;
}
