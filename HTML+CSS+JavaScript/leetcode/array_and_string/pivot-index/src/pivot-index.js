var getInput;
var getResult;
var main;
getInput = function() {
    var input;
    input = document.getElementById("input").value;
    return input;
}
getResult = function(input) {
    var nums;
    var pivotIndex;
    pivotIndex = function(nums) {
        var mid;
        var lftSum;
        var sum;
        var i;
        for (i = 0, sum = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        if (sum - nums[0] === 0) {
            return 0;
        }
        for (mid = 1, lftSum = 0; mid < nums.length; mid++) {
            lftSum += nums[mid - 1];
            if (lftSum * 2 + nums[mid] === sum) {
                return mid;
            }
        }
        return -1;
        /*  暴力解法;
        var getSum;
        var lftSum;
        var ritSum;
        var i;
        getSum = function(bgn, end) {
            var i;
            var sum;
            for (i = bgn, sum = 0; i < end; i++) {
                sum += nums[i];
            }
            return sum;
        }
        if (getSum(1, nums.length) === 0) {
            return 0;
        }
        for (i = 1; i < nums.length; i++) {
            lftSum = getSum(0, i);
            ritSum = getSum(i + 1, nums.length);
            if (lftSum === ritSum) {
                return i;
            }
        }
        return -1;
        */
    }
    // nums = input; -- 字符串转数组
    // eval("nums = " + input + ";");
    nums = new Function("return " + input + ";")();
    return pivotIndex(nums);
}
main = function() {
    document.getElementById("result").value = getResult(getInput());
}
