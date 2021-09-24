export { flatten };
import { DuoAndSonNode } from "../../classes/ListNode.js";
/**
 * @param {DuoAndSonNode} head
 * @returns {DuoAndSonNode}
 */
const flatten = function(head) {
    /**
     * 原地更改;
     * @param {DuoAndSonNode} node 
     */
    const dfs = function(node) {
        let p = node;
        let last = null;
        while (p) {
            if (p.child) {
                const pChildLast = dfs(p.child);
                let pNext = p.next;
                p.next = p.child;
                p.child.prev = p;
                if (pNext) {
                    pChildLast.next = pNext;
                    pNext.prev = pChildLast;
                }
                p.child = null;
                last = pChildLast;
            } else {
                last = p;
            }
            p = p.next;
        }
        return last;
    }
    dfs(head);
    return head;
    // /**
    //  * 构建新的双向链表;
    //  * @param {DuoAndSonNode} node
    //  * @returns
    //  */
    // const travelNodes = function(node) {
    //     if (!node) {
    //         return;
    //     }
    //     const nodeKai = new DuoAndSonNode(node.val, null, null, null);
    //     p.next = nodeKai;
    //     p = nodeKai;
    //     nodeKai.prev = q;
    //     q = nodeKai;
    //     travelNodes(node.child);
    //     travelNodes(node.next);
    // }
    // const result = new DuoAndSonNode(0, null, null, null);
    // let p = result;
    // let q = null;
    // travelNodes(head);
    // return result.next;
}
