export { topKFrequent };
/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrequent(nums, k) {
    const result = new Array(k);
    const map = new Map();
    for (const i of nums) {
        const count = map.get(i);
        map.set(i, count ? count + 1 : 1);
    }
    const mapKai = [ ...map ].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        result[i] = mapKai[i][0];
    }
    return result;
}
