export { fizzBuzz };
/**
 * @param {number} n
 * @returns {string[]}
 */
const fizzBuzz = function(n) {
    const result = new Array(n).fill("");
    let num = 0;
    while (num++ - n) {
        switch ((!(num % 3) ^ 0) + ((!(num % 5) ^ 0) << 1)) {
            case 0: 
                result[num - 1] = num.toString();
            break;
            case 1: 
                result[num - 1] = "Buzz";
            break;
            case 2: 
                result[num - 1] = "Fizz";
            break;
            case 3: 
                result[num - 1] = "FizzBuzz";
            break;
        }
    }
    return result;
}
