export { isPerfectSquare };
/**
 * @param {number} num num < 0x80000000;
 * @returns {boolean}
 */
function isPerfectSquare(num) {
    let low = 0;
    let high = 46341;
    while (low < high) {
        const mid = low + (high - low >>> 1);
        const midPow = mid * mid;
        switch(true) {
            case midPow === num:
                return mid;
            case midPow < num:
                low = mid + 1;
                break;
            case midPow > num:
                high = mid;
                break;
            default:
                break;
        }
    }
    return false;
}
