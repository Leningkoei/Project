export { findLHS };
/**
 * @param {number[]} nums
 * @returns {number}
 */
function findLHS(nums) {
    let result = 0;
    const map = new Map();
    for (const num of nums) {
        const count = map.get(num);
        map.set(num, count? count + 1: 1);
    }
    for (const num of map.keys()) {
        const lowNumCount = map.get(num);
        const highNumCount = map.get(num + 1);
        const totalCount = highNumCount? lowNumCount + highNumCount: 0;
        result = Math.max(result, totalCount);
    }
    return result;
}
