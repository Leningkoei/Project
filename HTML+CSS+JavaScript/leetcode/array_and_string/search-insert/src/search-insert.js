var getInput0;
var getInput1;
var getResult;
var main;
getInput0 = function() {
    var input0;
    input0 = document.getElementById("input0").value;
    return input0;
};
getInput1 = function() {
    var input1;
    input1 = document.getElementById("input1").value;
    return input1;
};
getResult = function(input0, input1) {
    var nums;
    var target;
    var searchInsert;
    // nums = input0;
    // eval("nums = " + input0 + ";");
    nums = new Function("return " + input0 + ";")();
    // target = input1;
    // eval("target = " + input1 + ";");
    target = new Function("return " + input1 + ";")();
    searchInsert = function(nums, target) {
        var midIndex;
        var searchInsertKai;
        searchInsertKai = function(bgn, end) {
            midIndex = parseInt((bgn + end) / 2);
            if (target === nums[midIndex]) {
                return midIndex;
            };
            if (bgn === end) {
                if (target < nums[bgn]) {
                    return bgn;
                };
                return end + 1;
            };
            if (target < nums[midIndex]) {
                return searchInsertKai(bgn, midIndex);
            };
            return searchInsertKai(midIndex + 1, end);
        };
        return searchInsertKai(0, nums.length - 1);
    };
    return searchInsert(nums, target);
};
main = function() {
    document.getElementById("result").value = getResult(getInput0(),
        getInput1());
};
