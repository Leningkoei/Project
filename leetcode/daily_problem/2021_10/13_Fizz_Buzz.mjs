export { fizzBuzz };
/**
 * @param {number} n
 * @returns {string[]}
 */
function fizzBuzz(n) {
    const result = new Array(n);
    for (let i = 1; i <= n; i++) {
        const deltaFizz = i % 3;
        const deltaBuzz = i % 5;
        if (!deltaFizz && !deltaBuzz) {
            result[i - 1] = "FizzBuzz";
        } else if (!deltaFizz) {
            result[i - 1] = "Fizz";
        } else if (!deltaBuzz) {
            result[i - 1] = "Buzz";
        } else {
            result[i - 1] = i.toString();
        }
    }
    return result;
}
