export { isHappyKai as isHappy };
/**
 * @param {number} n
 * @returns {boolean}
 */
function isHappy(n) {
    const log = new Set();
    function dfs(n) {
        if (n === 1) {
            return true;
        } else if (log.has(n)) {
            return false;
        } else {
            log.add(n);
            let nNext = 0;
            while (n) {
                nNext += (n % 10) ** 2;
                n = n / 10 >> 0;
            }
            return dfs(nNext);
        }
    }
    return dfs(n);
}
function isHappyKai(n) {
    function getNext(n) {
        let result = 0;
        while (n) {
            result += (n % 10) ** 2;
            n = n / 10 >> 0;
        }
        return result;
    }
    let slow = n;
    let fast = getNext(n);
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
}
