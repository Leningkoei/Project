export { MapSum };
class MapSum {

    constructor() {
        this.map = new Map();
    }

    /**
     * @param {string} key
     * @param {number} val
     */
    insert(key, val) {
        this.map.set(key, val);
    }
    /**
     * @param {string} prefix
     * @returns {number}
     */
    sum(prefix) {
        let result = 0;
        const regExp = new RegExp(`^${prefix}`);
        for (const key of this.map.keys()) {
            if (regExp.test(key)) {
                result += this.map.get(key);
            }
        }
        return result;
    }
}
