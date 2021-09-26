export { countPrimes };
/**
 * 埃氏筛;
 * @param {number} n
 * @returns {number}
 */
const countPrimes = function(n) {
    let result = 0;
    const map = new Array(n).fill(true);
    for (let i = 2; i < n; i++) {
        if (map[i]) {
            result++;
            for (let j = i * i; j < n; j += i) {
                map[j] = false;
            }
        }
    }
    return result;
}
