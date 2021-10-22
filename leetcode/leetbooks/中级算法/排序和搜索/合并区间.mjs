export { merge };
/**
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [ intervals[0] ];
    for (let i = 1; i < intervals.length; i++) {
        // const preElem = intervals[i - 1];
        const preElem = result[result.length - 1];
        const thisElem = intervals[i];
        // if (preElem[1] >= thisElem[0]) {
        //     preElem[1] = Math.max(preElem[1], thisElem[1]);
        //     intervals.splice(i, 1);
        //     i--;
        // }
        // if (preElem[1] >= thisElem[0]) {
        //     preElem[1] = Math.max(preElem[1], thisElem[1]);
        // } else {
        //     result.push(thisElem);
        // }
        preElem[1] >= thisElem[0] ? preElem[1] = Math.max(preElem[1], thisElem[1]) : result.push(thisElem);
    }
    // return intervals;
    return result;
}
