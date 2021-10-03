export { destCity };
/**
 * @param {string[][]} paths
 * @returns {string}
 */
const destCity = function(paths) {
    const map = new Set();
    for (const path of paths) {
        map.add(path[0]);
    }
    for (const path of paths) {
        if (!map.has(path[1])) {
            return path[1];
        }
    }
}
