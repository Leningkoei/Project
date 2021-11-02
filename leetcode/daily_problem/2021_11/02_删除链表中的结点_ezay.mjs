export { deleteNode };
import { ListNode } from "../../classes/ListNode.mjs"
/**
 * @param {ListNode} node
 */
function deleteNode(node) {
    const nextNode = node.next;
    const nextNodeVal = nextNode.val;
    const nextNodeNextNode = nextNode.next;
    node.val = nextNodeVal;
    node.next = nextNodeNextNode;
}
