export { reverseBitsKai as reverseBits };
/**
 * @param {number} n
 * @returns {number}
 */
const reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32 && n > 0; i++) {
        result |= (n & 1) << 31 - i;
        n >>>= 1;
    }
    return result;
}
/**
 * 分治;
 * @param {number} n
 * @returns {number}
 */
const reverseBitsKai = function(n) {
    const m0 = 0b01010101010101010101010101010101;
    const m1 = 0b00110011001100110011001100110011;
    const m2 = 0b00001111000011110000111100001111;
    const m3 = 0b00000000111111110000000011111111;
    n = n >>> 1 & m0 | (n & m0) << 1;
    n = n >>> 2 & m1 | (n & m1) << 2;
    n = n >>> 4 & m2 | (n & m2) << 4;
    n = n >>> 8 & m3 | (n & m3) << 8;
    return (n >>> 16 | n << 16) >>> 0;
}
