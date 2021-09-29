export { findMinMoves };
/**
 * @param {number[]} machines
 * @returns {number}
 */
const findMinMoves = function(machines) {
    const sumClothes = machines.reduce((acc, cur) => acc + cur, 0);
    if (sumClothes % machines.length) {
        return -1;
    }
    const avg = ~~sumClothes / machines.length;
    let result = 0;
    let sum = 0;
    for (let machine of machines) {
        machine -= avg
        sum += machine;
        result = Math.max(result, Math.max(Math.abs(sum), machine));
    }
    return result;
}
