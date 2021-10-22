export { titleToNumber };
/**
 * @param {string} columnTitle
 * @returns {number}
 */
function titleToNumber(columnTitle) {
    let result = 0;
    const n = columnTitle.length;
    const mask = "A".charCodeAt(0);
    for (let i = n - 1; i >= 0; i--) {
        result += 26 ** (n - i - 1) * (columnTitle.charCodeAt(i) - mask + 1);
    }
    return result;
}
