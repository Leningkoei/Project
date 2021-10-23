export { constructRectangleKai as constructRectangle };
/**
 * @param {number} area
 * @returns {number[]}
 */
function constructRectangle(area) {
    let length = parseInt(Math.sqrt(area));
    let width = parseInt(Math.sqrt(area));
    while (length * width !== area) {
        length * width > area ? width-- : length++;
    }
    return [ length, width ];
}
/**
 * @param {number} area
 * @returns {number[]}
 */
function constructRectangleKai(area) {
    let width = parseInt(Math.sqrt(area));
    while (area % width) {
        width--;
    }
    return [ area / width, width ];
}
