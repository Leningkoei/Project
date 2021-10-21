export { RandomizedSet };
class RandomizedSet {
    constructor() {
        this.data = [];
        this.map = new Map();
    }
    /**
     * @param {number} val
     * @returns {boolean}
     */
    insert(val) {
        if (this.map.has(val)) {
            return false;
        } else {
            this.map.set(val, this.data.length);
            this.data.push(val);
            return true;
        }
    }
    /**
     * @param {number} val
     * @returns {boolean}
     */
    remove(val) {
        if (this.map.has(val)) {
            const valIndex = this.map.get(val);
            [ this.data[valIndex], this.data[this.data.length - 1] ] = [ this.data[this.data.length - 1], this.data[valIndex] ];
            this.data.pop();
            this.map.delete(val);
            this.map.set(this.data[valIndex], valIndex);
            return true;
        } else {
            return false;
        }
    }
    /**
     * @returns {number}
     */
    getRandom() {
        const randomIndex = Math.random() * this.data.length >>> 0;
        return this.data[randomIndex];
    }
}
