export { addTwoNumbers };
import { ListNode } from "../../../classes/ListNode.mjs";
/**
 * @param {ListNode} node0
 * @param {ListNode} node1
 * @returns {ListNode}
 */
const addTwoNumbers = function(node0, node1) {
    const head = new ListNode(0, null);
    let p = head;
    let carry = 0;
    while (node0 && node1) {
        const sum = node0.val + node1.val + carry;
        const val = sum % 10;
        const node = new ListNode(val, null);
        carry = ~~(sum / 10);
        p.next = node;
        p = node;
        node0 = node0.next;
        node1 = node1.next;
    }
    while (node0) {
        const sum = node0.val + carry;
        const val = sum % 10;
        const node = new ListNode(val, null);
        carry = ~~(sum / 10);
        p.next = node;
        p = node;
        node0 = node0.next;
    }
    while (node1) {
        const sum = node1.val + carry;
        const val = sum % 10;
        const node = new ListNode(val, null);
        carry = ~~(sum / 10);
        p.next = node;
        p = node;
        node1 = node1.next;
    }
    if (carry) {
        const node = new ListNode(carry, null);
        p.next = node;
    }
    return head.next;
}
