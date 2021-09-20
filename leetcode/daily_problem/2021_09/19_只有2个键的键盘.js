const leetcode = leetcode || {};
leetcode.minSteps = function(n) {
    let result = 0;
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            n /= i;
            result += i;
        }
    }
    return result;
}
