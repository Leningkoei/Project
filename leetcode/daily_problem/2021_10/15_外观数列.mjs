export { countAndSayKai as countAndSay };
/**
 * 先序递归;
 * @param {number} n
 * @returns {string}
 */
function countAndSay(n) {
    function sayString(string, n) {
        if (n) {
            let result = "";
            let i = 0;
            while (i < string.length) {
                let bgn = i;
                let char = string[i];
                while (i < string.length && string[i] === char) {
                    i++;
                }
                result += `${i - bgn}${char}`;
            }
            return sayString(result, n - 1);
        } else {
            return string;
        }
    }
    return sayString("1", n);
}
/**
 * 后序递归;
 * @param {number} n
 * @returns {string}
 */
function countAndSayKai(n) {
    if (n === 1) {
        return "1";
    }
    const preString = countAndSayKai(n - 1);
    let result = "";
    let i = 0;
    while (i < preString.length) {
        let bgn = i;
        let char = preString[i];
        while (i < preString.length && preString[i] === char) {
            i++;
        }
        result += `${i - bgn}${char}`;
    }
    return result;
}
