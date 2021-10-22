export { majorityElement };
/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function majorityElement(nums) {
    const result = [];
    const targetCount = parseInt(nums.length / 3);
    const log = new Map();
    for (const num of nums) {
        const numCount = log.get(num);
        numCount ? log.set(num, numCount + 1) : log.set(num, 1);
    }
    for (const elem of log) {
        if (elem[1] > targetCount) {
            result.push(elem[0]);
        }
    }
    return result;
}
