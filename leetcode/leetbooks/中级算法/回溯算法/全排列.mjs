export { permute };
/**
 * @param {number[]} nums
 * @returns {number[][]}
 */
function permute(nums) {
    const result = [];
    const log = new Set();
    function microPermute() {
        if (log.size === nums.length) {
            result.push([ ...log ]);
        } else {
            for (const num of nums) {
                if (!log.has(num)) {
                    log.add(num);
                    microPermute();
                    log.delete(num);
                }
            }
        }
    }
    microPermute(0);
    return result;
}
