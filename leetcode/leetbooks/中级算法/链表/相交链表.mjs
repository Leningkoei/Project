export { getIntersectionNodeKai as getIntersectionNode };
import { ListNode } from "../../../classes/ListNode.mjs";
/**
 * hash map;
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    const nodes = new Set();
    while (headA) {
        nodes.add(headA);
        headA = headA.next;
    }
    while (headB) {
        if (nodes.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
}
/**
 * 对比hash map, 节约了空间;
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @returns {ListNode}
 */
const getIntersectionNodeKai = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }
    return pA;
}
