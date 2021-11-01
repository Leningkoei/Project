export { distributeCandies };
/**
 * @param {number[]} candyType
 * @returns {number}
 */
function distributeCandies(candyType) {
    // const type = new Set();
    // candyType.forEach((candy) => type.add(candy));
    // return Math.min(type.size, candyType.length >>> 1);
    return Math.min(new Set(candyType).size, candyType.length >>> 1);
}
