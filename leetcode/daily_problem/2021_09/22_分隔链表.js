export { splitListToParts };
import { ListNode } from "../../classes/ListNode.js";
/**
 * @param {ListNode} head
 * @param {number} k
 * @returns {ListNode[]}
 */
const splitListToParts = function(head, k) {
    // 获取链表的长度;
    const result = [];
    const resultHelper = new Array(k).fill(0);
    let headCopy = head;
    let listLength = 0;
    while (headCopy) {
        headCopy = headCopy.next;
        listLength++;
    }
    // 每段的长度 = 链表的长度 / k;
    for (let i = 0; i < k; i++) {
        resultHelper[i] = listLength / k ^ 0;
    }
    // count = 链表的长度 % k; while (count--) { 每段的长度++ };
    for (let i = 0, count = listLength % k; count > 0; i++, count--) {
        resultHelper[i]++;
    }
    for (const i of resultHelper) {
        const thisHead = new ListNode(0, null);
        let p = thisHead;
        while (i--) {
            const node = new ListNode(0, null);
            node.val = head.val;
            p.next = node;
            p = node;
            head = head.next;
        }
        result.push(thisHead.next);
    }
    return result;
}
