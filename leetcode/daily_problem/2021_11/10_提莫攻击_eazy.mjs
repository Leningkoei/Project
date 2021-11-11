export { findPoisonedDuration }
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @returns {number}
 */
function findPoisonedDuration(timeSeries, duration) {
    let result = timeSeries.length * duration;
    for (let i = 1; i < timeSeries.length; i++) {
        const subTime = timeSeries[i] - timeSeries[i - 1];
        if (subTime < duration) {
            result -= duration - subTime
        }
    }
    return result;
}
