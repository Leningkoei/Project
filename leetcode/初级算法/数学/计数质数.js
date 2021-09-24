export { countPrimes };
/**
 * @param {number} n
 * @returns {number}
 */
const countPrimes = function(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    const checkNum = function(num) {
        for (const i of map) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    const map = [2];
    let count = 0;
    while (count < n) {
        if (checkNum(count)) {
            map.push(count);
        }
    }
    return map.length;
}
