export { Solution }
class Solution {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.nums = nums
    }
    reset() {
        return this.nums
    }
    shuffle() {
        const numsCopy = [ ...this.nums ]
        for (let i = 1; i <= this.nums.length; i++) {
            const randomIndex = Math.random() * i >> 0
            ;[ numsCopy[randomIndex], numsCopy[i - 1] ] =
                [ numsCopy[i - 1], numsCopy[randomIndex] ]
        }
        return numsCopy
    }
}
