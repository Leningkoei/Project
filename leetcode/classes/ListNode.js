export { ListNode };
const ListNode = class {
    /**
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val, next) {
        this.val = (val === undefined) ? 0 : val;
        this.next = next ? next : null;
    }
}
