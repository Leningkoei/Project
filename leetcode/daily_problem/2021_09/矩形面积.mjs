export { computeArea };
/**
 * @param {number} ax0
 * @param {number} ay0
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} bx0
 * @param {number} by0
 * @param {number} bx1
 * @param {number} by1
 * @returns {number}
 */
const computeArea = function(ax0, ay0, ax1, ay1, bx0, by0, bx1, by1) {
    const ax0 = Math.min(ax0, ax1);
    const ax1 = Math.max(ax0, ax1);
    const ay0 = Math.min(ay0, ay1);
    const ay1 = Math.max(ay0, ay1);
    const bx0 = Math.min(bx0, bx1);
    const bx1 = Math.max(bx0, bx1);
    const by0 = Math.min(by0, by1);
    const by1 = Math.max(by0, by1);
    const areaA = (ax0 - ax1) * (ay0 - ay1);
    const areaB = (bx0 - bx1) * (by0 - by1);
    const subX = Math.min(ax1, bx1) - Math.max(ax0, bx0);
    const subY = Math.min(ay1, by1) - Math.max(ay0, by0);
    const areaSub = subX * subY;
    return areaA + areaB - areaSub;
    // if (ax0 === bx0 && ay0 === by0 && areaA === areaB) {
    //     return areaA;
    // }
    // if (ax0 < bx0 && ay0 < by0 && areaA > areaB) {
    //     return areaA;
    // } else if (ax0 > bx0 && ay0 > by0 && areaA < areaB) {
    //     return areaB;
    // } else if (ax1 < bx0 || ay0 > by1 || ax0 > by1 || ay1 < by0) {
    //     return areaA + areaB;
    // } else {
    //     const subX = 
    // }
    return;
}
