export { sortColor };
/**
 * @param {number[]} nums
 */
function sortColor(nums) {
    /**
     * 有序区的分割范围;
     * all in [ 0, p0 ) === 0;
     * all in [ p0, i ) === 1;
     * all in [ p2, nums.length ) === 2;
     */
    for (let i = 0, p0 = 0, p2 = nums.length; i < p2; i++) {
        while (i < p2 && nums[i] === 2) {
            p2--;
            [ nums[i], nums[p2] ] = [ nums[p2], nums[i] ];
        }
        if (!nums[i]) {
            [ nums[p0], nums[i] ] = [ nums[i], nums[p0] ];
            p0++;
        }
    }
}
