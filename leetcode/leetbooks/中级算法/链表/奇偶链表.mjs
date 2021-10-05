export { oddEvenListKai as oddEvenList };
import { ListNode } from "../../../classes/ListNode.mjs";
/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
const oddEvenList = function(head) {
    let p = head;
    let q = p ? head.next : null;
    let r = q ? head.next.next : null;
    const log = head ? head.next : null;
    while (r) {
        p.next = r;
        q.next = r.next;
        r.next = log;
        p = p.next;
        q = q.next;
        r = q ? q.next : null;
    }
    return head;
}
/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
const oddEvenListKai = function(head) {
    if (head) {
        const evenHead = head.next;
        let odd = head;
        let even = head.next;
        while (even && even.next) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
    }
    return head;
}
