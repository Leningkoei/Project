export default class Memory {
    /**
     * @param {number} size
     */
    constructor(size) {
        this._memory = new Array(size).fill(null)
        this._hitCount = 0
        this._totalCount = 0
    }
    /**
     * @param {number} value
     */
    insert(value) {
        if (this._memory.indexOf(value) !== -1) {
            this._hitCount++
        } else {
            this._memory.shift()
            this._memory.push(value)
        }
        this._totalCount++
    }
    getHitCount() {
        return this._hitCount
    }
}
