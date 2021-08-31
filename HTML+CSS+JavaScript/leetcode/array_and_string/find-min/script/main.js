const MAIN = {
    Custom: function() {
        this.problem = "nums原来是1个升序数组, 后来经历了n次循环左移;<br>返回数组中的最小值;";
        this.input = [ "[ 3, 4, 5, 0, 1, 2 ]"];
    },
    Problem: function() {
        this.nums = new Function("return " + window.document.getElementById("input0").value + ";")();
        this.findMin = function(nums) {
            let left = 0;
            let right = nums.length;
            let temp = 0;
            while (left < right) {
                temp = parseInt((left + right) / 2);
                nums[temp] > nums[right] ? left = temp + 1 : right = temp;
            }
            return nums[left];
        }
        this.main = function() {
            window.document.getElementById("result").value = this.findMin(this.nums);
        }
    }
}
