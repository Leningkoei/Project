export { incresingTriplet };
/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const incresingTriplet = function(nums) {
    if (nums.length > 2) {
        let small = Infinity;
        let middle = Infinity;
        for (const num of nums) {
            if (num <  small) {
                small = num;
            } else if (num > small && num < middle) {
                middle = num;
            } else if (num > middle) {
                return true;
            }
        }
    }
    return false;
}
