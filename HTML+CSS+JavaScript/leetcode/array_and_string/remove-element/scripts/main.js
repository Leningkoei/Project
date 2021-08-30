const MAIN = {
    Custom: function() {
        this.problem = "移除数组nums中所有value === val的数, 返回剩余的数;";
        this.input = [ "[ 3, 2, 2, 3 ]", "3" ];
    },
    Problem: function() {
        this.nums = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.val = new Function("return " + window.document.getElementById("input1").value + ";")();
        /**
         * 
         * @param {Array} nums 
         * @param {Number} val 
         * @returns 
         */
        this.removeElement = function(nums, val) {
            let slow = 0;
            for (const fast of nums) {
                if (fast !== val) {
                    nums[slow++] = fast;
                }
            }
            return slow;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.nums.splice(0, this.removeElement(this.nums, this.val));
        }
    }
}
