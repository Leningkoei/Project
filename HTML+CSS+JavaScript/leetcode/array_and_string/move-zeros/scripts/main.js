const MAIN = {
    Custom: function() {
        this.problem = "将数组nums中所有的0移动到最右端, 并且不改变非0数的顺序;";
        this.input = [ "[ 0, 1, 0, 3, 12 ]" ];
    },
    Problem: function() {
        this.nums = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.moveZeros = function(nums) {
            for (let fast = 0, slow = 0; fast < nums.length; fast++) {
                nums[fast] && (nums[slow++] = nums[fast] + (nums[fast] = 0));
            }
        }
        this.main = function() {
            this.moveZeros(this.nums);
            window.document.getElementById("result").value = this.nums;
        }
    }
}
