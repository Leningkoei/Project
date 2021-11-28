class Block {
    /**
     * @param {number | null} value
     */
    constructor(value, countFlag) {
        this._value = value
        this._count = countFlag ? 1 : 0
    }
    getValue() {
        return this._value
    }
    getCount() {
        return this._count
    }
    plusCount() {
        this._count++
    }
}
class Memory {
    constructor(size) {
        this._memory = []
        for (let i = 0; i < size; i++) {
            this._memory.push(new Block(null, false))
        }
        this._hitCount = 0
        this._totalCount = 0
    }
    insert(value) {
        let minCountIndex = 0
        let minCount = this._memory[0].getCount()
        for (let i = 0; i < this._memory.length; i++) {
            const block = this._memory[i]
            if (block.getValue() === value) {
                block.plusCount()
                this._hitCount++
                break
            } else {
                const blockCount = block.getCount()
                if (blockCount < minCount) {
                    minCountIndex = i
                    minCount = blockCount
                }
            }
        }
        this._memory[minCountIndex] = new Block(value, true)
        this._totalCount++
    }
    getHitCount() {
        return this._hitCount
    }
}
function main() {
    const size3Memory = new Memory(3)
    const size4Memory = new Memory(4)
    for (let i = 0; i < 10000; i++) {
        const randomNumber = Math.random() * 10 >> 0
        size3Memory.insert(randomNumber)
        size4Memory.insert(randomNumber)
    }
    console.log(size3Memory.getHitCount())
    console.log(size4Memory.getHitCount())
}
main()
