export { ShuffleArray };
const ShuffleArray = class {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums;
        /**
         * @returns {number[]}
         */
        this.resetArray = function() {
            return this.nums;
        }
        /**
         * @returns {number[]}
         */
        this.shuffle = function() {
            const numsCopy = [ ...this.nums ];
            let count = this.nums.length;
            while (count) {
                const i = Math.random() * count-- ^ 0;
                [ numsCopy[i], numsCopy[count] ] = [ numsCopy[count], numsCopy[i]];
            }
            return numsCopy;
        }
    }
}
