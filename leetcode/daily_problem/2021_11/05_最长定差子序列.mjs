export { longestSubsequence };
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
function longestSubsequence(arr, difference) {
    const map = new Set(arr);
    for (const num of arr) {
        const low = num - difference;
        const high = num + difference;
        if (map.has(low)) {
            //
        }
    }
}
