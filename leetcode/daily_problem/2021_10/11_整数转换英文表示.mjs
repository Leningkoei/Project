export { numberToWordsKai as numberToWords };
/**
 * 懒得改了;
 * @param {number} num
 * @returns {string}
 */
function numberToWords(num) {
    if (!num) {
        return "Zero";
    }
    /**
     * @param {string} num
     * @returns {string}
     */
    function threeBitNumToWords(num) {
        if (num === "0") {
            return "";
        }
        const result = [];
        const zeroth = num[num.length - 3];
        const first = num[num.length - 2];
        const second = num[num.length - 1];
        if (first === "1") {
            result.push(data0[first + second]);
            if (data0[zeroth]) {
                result.unshift(data0[zeroth] + " Hundred");
            }
        } else {
            result.push(data0[second]);
            if (data1[first]) {
                // console.log(data1[first]);
                result.unshift(data1[first]);
                if (data0[zeroth]) {
                    result.unshift(data0[zeroth] + " Hundred");
                }
            } else {
                if (data0[zeroth]) {
                    result.unshift(data0[zeroth] + " Hundred");
                }
            }
        }
        // console.log(result);
        return result.join(" ").trim();
    }
    const result = [];
    const numKai = [];
    const data0 = {
        // "0": "",
        "1": "One",
        "2": "Two",
        "3": "Three",
        "4": "Four",
        "5": "Five",
        "6": "Six",
        "7": "Seven",
        "8": "Eight",
        "9": "Nine",
        "10": "Ten",
        "11": "Eleven",
        "12": "Twelve",
        "13": "Thirteen",
        "14": "Fourteen",
        "15": "Fifteen",
        "16": "Sixteen",
        "17": "Seventeen",
        "18": "Eighteen",
        "19": "Nineteen"
    }
    const data1 = {
        // "0": "",
        "2": "Twenty",
        "3": "Thirty",
        "4": "Forty",
        "5": "Fifty",
        "6": "Sixty",
        "7": "Seventy",
        "8": "Eighty",
        "9": "Ninety"
    }
    const data2 = {
        // "0": "",
        "0": "Thousand",
        "1": "Million",
        "2": "Billion"
    }
    while (num >= 1000) {
        numKai.push((num % 1000).toString());
        num /= 1000;
        num >>>= 0;
    }
    numKai.push(num.toString());
    for (const threeBitNum of numKai) {
        result.push(threeBitNumToWords(threeBitNum));
    }
    for (let count = 0; count < result.length; count++) {
        if (result[count + 1]) {
            result[count] = result[count] ? data2[count.toString()] + " " + result[count] : data2[count.toString()];
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i]) {
            continue;
        }
        result.splice(i, 1);
    }
    return result.reverse().join(" ").trim();
}
function numberToWordsKai(num) {
    if (num === 0) {
        return "Zero";
    }
    const singles = [ "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten" ];
    const teens = [ "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ];
    const tens = [ "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];
    const thousands = [ "", "Thousand", "Million", "Billion" ];
    /**
     * @param {string[]} curr
     * @param {number} num
     */
    function recursion(curr, num) {
        if (num === 0) {
            // do nothing;
        } else if (num < 10) {
            curr.push(singles[num] + " ");
        } else if (num < 20) {
            curr.push(teens[num - 10] + " ");
        } else if (num < 100) {
            curr.push(tens[num / 10 >>> 0] + " ");
            recursion(curr, num % 10);
        } else {
            curr.push(singles[num / 100 >>> 0] + "Hundred ");
            recursion(curr, num % 100);
        }
    }
    const result = [];
    for (let i = 3, unit = 1000000000; i >= 0; i--, unit = unit / 1000 >>> 0) {
        const curNum = num / unit >>> 0;
        if (curNum) {
            num -= curNum * unit;
            const curr = [];
            recursion(curr, curNum);
            curr.push(thousands[i] + " ");
            result.push(curr.join(""));
        }
    }
    return result.join("").trim();
}
