export { bulbSwitchKai as bulbSwitch };

/**
 * 模拟;
 * @param {number} n
 * @returns {number}
 */
function bulbSwitch(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        const lightStatuses = new Array(n).fill(true);
        function changeLightStatus(i) {
            const step = i + 1;
            for (; i < n; i += step) {
                lightStatuses[i] = !lightStatuses[i];
            }
        }
        for (let i = 1; i < n; i++) {
            changeLightStatus(i);
        }
        return lightStatuses.reduce(
            (count, lightStatus) => lightStatus ? count + 1 : count,
            0
        );
    }
}

/**
 * @param {number} n
 * @returns {number}
 */
function bulbSwitchKai(n) {
    return Math.sqrt(n) >> 0;
}
