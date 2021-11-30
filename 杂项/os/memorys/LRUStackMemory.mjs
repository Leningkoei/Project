export default class Memory {
    /**
     * @param {number} size
     */
    constructor(size) {
        /**
         * @type {number}
         */
        this._memory = new Array(size)
        this._hitCount = 0
        this._totalCount = 0
    }
    insert(value) {
        const index = this._memory.indexOf(value)
        if (index !== -1) {
            this._memory.splice(index, 1)
            this._memory.unshift(value)
            this._hitCount++
        } else {
            this._memory.pop()
            this._memory.unshift(value)
        }
        this._totalCount++
    }
    getHitCount() {
        return this._hitCount
    }
}
