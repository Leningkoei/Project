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
export default class Memory {
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
