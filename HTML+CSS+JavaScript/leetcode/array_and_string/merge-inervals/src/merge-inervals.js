var getInput;
var getResult;
var main;
/**
 * @return {string};
 */
getInput = function() {
    var input;
    input = document.getElementById("input").value;
    return input;
};
/**
 * @param {string} input;
 * @return {number[][]};
 */
getResult = function(input) {
    var intervals;
    var mergeInervals;
    /**
     * @param {number[][]} intervals;
     * @return {number[][]};
     */
    mergeInervals = function(intervals) {
        var flag;
        var i;
        // var j;
        // var temp;
        // flag = intervals.length;
        // for (i = 0; i < intervals.length; i++, flag--) {
        //     for (j = 1; j < flag; j++) {
        //         if (intervals[j - 1][0] > intervals[j][0]) {
        //             temp = intervals[j - 1];
        //             intervals[j - 1] = intervals[j];
        //             intervals[j] = temp;
        //         };
        //     };
        // };
        intervals.sort(function(a, b) {
            return a[0] - b[0];
        });
        for (flag = 0, i = 1; i < intervals.length; i++) {
            /**
             * if (intervals[i] <in> intervals[flag]) {
             *     add;
             * } else {
             *     flag++;
             *     copy;
             * };
             */
            if (intervals[flag][1] >= intervals[i][0]) {
                intervals[flag][1] = Math.max(intervals[flag][1], intervals[i][1]);
            } else {
                flag++;
                intervals[flag] = intervals[i];
            };
        };
        intervals.splice(flag + 1, intervals.length - 1 - flag);
        return intervals;
    };
    // eval("intervals = " + input + ";");
    // var evalKai;
    // evalKai = new Function("return " + input + ";");
    // intervals = evalKai();
    // 下行等效于上行, intervals = 函数名(参数); -- 此处参数为空
    intervals = new Function("return " + input + ";")();
    return mergeInervals(intervals);
};
/**
 * @return {0};
 */
main = function() {
    document.getElementById("result").value = getResult(getInput());
    return 0;
};
