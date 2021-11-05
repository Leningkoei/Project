export { longestSubsequence };
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {

    const map = new Map();

    for (let i = arr.length - 1; i >= 0; i--) {

        const num = arr[i];
        const preCount = map.get(num + difference);

        map.set(num, preCount ? preCount + 1 : 1);
    }

    return Math.max(...map.values());
}
