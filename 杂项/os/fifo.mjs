class ArrayMemory {
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
class ListNode {
    /**
     * @param {number | null} value
     * @param {ListNode | null} next
     */
    constructor(value, next) {
        this._value = value
        this._next = next
    }
    getValue() {
        return this._value
    }
    getNext() {
        return this._next
    }
    setNext(next) {
        this._next = next
    }
}
class ListMemory {
    /**
     * @param {number} size
     */
    constructor(size) {
        const head = new ListNode(null, null)
        let tail = head
        for (let i = 0; i < size - 1; i++) {
            const node = new ListNode(null, null)
            tail.setNext(node)
            tail = tail.getNext()
        }
        this._head = head
        this._tail = tail
        this._hitCount = 0
        this._totalCount = 0
    }
    _find(value) {
        let p = this._head
        while (p) {
            if (p.getValue() === value) {
                return true
            }
            p = p.getNext()
        }
        return false
    }
    insert(value) {
        if (this._find(value)) {
            this._hitCount++
        } else {
            const node = new ListNode(value, null)
            this._head = this._head.getNext()
            this._tail.setNext(node)
            this._tail = this._tail.getNext()
        }
        this._totalCount++
    }
    getHitCount() {
        return this._hitCount
    }
}
function main() {
    const size3ArrayMemory = new ArrayMemory(3)
    const size3ListMemory = new ListMemory(3)
    const size4ArrayMemory = new ArrayMemory(4)
    const size4ListMemory = new ListMemory(4)
    for (let count = 0; count < 10000; count++) {
        const randomNum = Math.random() * 10 >> 0
        size3ArrayMemory.insert(randomNum)
        size3ListMemory.insert(randomNum)
        size4ArrayMemory.insert(randomNum)
        size4ListMemory.insert(randomNum)
    }
    console.log(
            `size 3 array memory hit count is ${size3ArrayMemory.getHitCount()}`
        )
    console.log(
            `size 3 list memory hit count is ${size3ListMemory.getHitCount()}`
        )
    console.log(
            `size 4 array memory hit count is ${size4ArrayMemory.getHitCount()}`
        )
    console.log(
            `size 4 list memory hit count is ${size4ListMemory.getHitCount()}`
        )
}
main()
