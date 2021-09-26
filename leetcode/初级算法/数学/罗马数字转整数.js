export { romanToInt };
/**
 * @param {string} s
 * @returns {number}
 */
const romanToInt = function(s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let count = s.length;
    let pre = map[s[count]];
    let result = pre;
    while (count--) {
        const now = map[s[count]];
        if (pre <= now) {
            result += now;
        } else {
            result -= now;
        }
    }
    return result;
    // let result = 0;
    // let count = s.length;
    // while (count--) {
    //     switch (s[count]) {
    //         case "I":
    //             result++;
    //         break;
    //         case "V":
    //             if (s[count - 1] !== "I") {
    //                 result += 5;
    //             } else {
    //                 result += 4;
    //                 count--;
    //             }
    //         break;
    //         case "X":
    //             if (s[count - 1] !== "I") {
    //                 result += 10;
    //             } else {
    //                 result += 9;
    //                 count--;
    //             }
    //         break;
    //         case "L":
    //             if (s[count - 1] !== "X") {
    //                 result += 50;
    //             } else {
    //                 result += 40;
    //                 count--;
    //             }
    //         break;
    //         case "C":
    //             if (s[count - 1] !== "X") {
    //                 result += 100;
    //             } else {
    //                 result += 90;
    //                 count--;
    //             }
    //         break;
    //         case "D":
    //             if (s[count - 1] !== "C") {
    //                 result += 500;
    //             } else {
    //                 result += 400;
    //                 count--;
    //             }
    //         break;
    //         case "M":
    //             if (s[count - 1] !== "C") {
    //                 result += 1000;
    //             } else {
    //                 result += 900;
    //                 count--;
    //             }
    //         break;
    //         default:
    //             console.log("nmsl");
    //         break;
    //     }
    // }
    // return result;
}
