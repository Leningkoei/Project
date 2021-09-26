export { hammingWeight };
const hammingWeight = function(n) {
    let result = 0;
    while (n) {
        n &= n - 1;
        result++;
    }
    return result;
}
