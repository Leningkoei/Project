export { ListNode, DuoAndSonNode };
const ListNode = class {
    /**
     * 单链表;
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val, next) {
        this.val = (val === undefined) ? 0 : val;
        this.next = next ? next : null;
    }
}
const DuoAndSonNode = class {
    /**
     * 双向多级链表;
     * @param {number} val
     * @param {DuoAndSonNode} prev
     * @param {DuoAndSonNode} next
     * @param {DuoAndSonNode} child
     */
    constructor(val, prev, next, child) {
        this.val = val;
        this.prev = prev;
        this.next = next;
        this.child = child;
    }
}
