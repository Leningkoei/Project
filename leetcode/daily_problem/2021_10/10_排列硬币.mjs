export { arrayCoinsKaiNi as arrayCoins };
/**
 * @param {number} n
 * @returns {number}
 */
function arrayCoins(n) {
    let level = 1;
    while ((n -= level++) >= level)
    return level - 1;
}
/**
 * @param {number} n
 * @returns {number}
 */
function arrayCoinsKai(n) {
    return ~~((Math.sqrt(8 * n + 1) + 1) / 2);
}
/**
 * @param {number} n
 * @returns {number}
 */
function arrayCoinsKaiNi(n) {
    let left = 1;
    let right = n + 1;
    while (left < right) {
        const mid = left + (right - left >>> 1);
        const delta = mid * (1 + mid) / 2;
        if (delta <= n) {
            left = mid + 1;
        } else if (delta > n) {
            right = mid;
        }
    }
    return left - 1;
}
