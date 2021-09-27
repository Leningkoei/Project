export { mergeSort };
const mergeSort = function(nums) {
    const sort = function(left, right) {
        if (left < right) {
            const mid = left + right >> 1;
            sort(left, mid);
            sort(mid + 1, right);
            merge(left, mid, right);
        }
    }
    const merge = function(left, mid, right) {
        for (let p = mid + 1; p <= right; p++) {
            for (let q = p; q > left && nums[q - 1] > nums[q]; q--) {
                console.log(nums[q - 1], nums[q]);
                result.push([ nums[q - 1], nums[q] ]);
                [ nums[q - 1], nums[q] ] = [ nums[q], nums[q - 1] ];
            }
        }
    }
    const result = [];
    sort(0, nums.length - 1);
    console.log(result.length);
    return result;
}
