const MAIN = {
    Custom: function() {
        this.problem = "nums: length == 2n;<br>将nums分成n对, 使sum(min(1对))最大;";
        this.input = [ "[ 1, 4, 3, 2 ]" ];
    },
    Problem: function() {
        this.nums = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.arrayPairSum = function(nums) {
            let sum = 0;
            nums.sort((a, b) => a - b);
            for (let i = 0; i < nums.length - 1; i += 2) {
                sum += nums[i];
            }
            return sum;
        }
        this.main = function() {
            window.document.getElementById("result").value = this.arrayPairSum(this.nums);
        }
    }
}
