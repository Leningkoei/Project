export { longestSubsequence };
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {

    const map = new Map();

    // for (let i = arr.length - 1; i >= 0; i--) {

    //     const num = arr[i];
    //     const preCount = map.get(num + difference);

    //     map.set(num, preCount ? preCount + 1 : 1);
    // }

    for (const num of arr) {

        const preCount = map.get(num - difference);

        map.set(num, preCount ? preCount + 1 : 1);
    }

    return Math.max(...map.values());
}
function longestSubsequenceKai(arr, difference) {
    return Math.max(...arr.reduce((map, num) => {
        const preCount = map.get(num - difference);
        map.set(num, preCount ? preCount + 1 : 1);
        return map;
    }, new Map()).values());
}
