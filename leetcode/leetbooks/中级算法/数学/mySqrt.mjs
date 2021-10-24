export { mySqrt };
/**
 * 左闭右开左趋近;
 * @param {number} x
 * @returns {number}
 */
function mySqrt(x) {
    let low = 0;
    let high = x + 1;
    while (low < high) {
        const mid = low + high >>> 1;
        const midPow = mid * mid;
        if (midPow === x) {
            return mid;
        } else if (midPow < x) {
            low = mid + 1;
        } else if (midPow > x) {
            high = mid;
        }
    }
    // 退出循环时是左边状态的结束 + 1, 右边状态的开始;
    // 此时 low === high;
    return low - 1;
}
/**
 * 左开右闭右趋近;
 * @param {number} x
 * @returns {number}
 */
function mySqrtKai(x) {
    let low = -1;
    let high = x;
    while (low < high) {
        const mid = Math.ceil((low + high) / 2);    // 注意向上取整;
        const midPow = mid * mid;
        if (midPow === x) {
            return mid;
        } else if (midPow < x) {
            low = mid;
        } else if (midPow > x) {
            high = mid - 1;
        }
    }
    // 退出循环时是左边状态的结束, 右边状态的开始 - 1;
    // 此时 low === high;
    return high;
}
