const MAIN = {
    Custom: function() {
        this.problem = "nums: 升序数组;<br>删除nums中所有重复元素;<br>返回剩余元素的个数;";
        this.input = [ "[ 1, 1, 2 ];" ];
    },
    Problem: function() {
        this.nums = new Function("return " + window.document.getElementById("input0").value + ";")();
        /**
         * 
         * @param {array} nums
         * @returns {number}
         */
        this.removeDulicates = function(nums) {
            if (!nums.length) {
                return 0;
            }
            let slow = 0;
            for (const fast of nums) {
                if (nums[slow] !== fast) {
                    nums[++slow] = fast;
                }
            }
            return slow + 1;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.removeDulicates(this.nums);
        }
    }
}
