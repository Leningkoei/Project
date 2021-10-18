export { kthSmallest };
// read only;
import { TreeNode } from "../../classes/TreeNode.mjs";
/**
 * @param {TreeNode} root
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(root, k) {
    // function inOrderTravelTree(root) {
    //     inOrderTravelTree(root.left);
    //     console.log(root.val);
    //     inOrderTravelTree(root.right);
    // }
    const stack = new Array();
    k--;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (!k--) {
            return root.val;
        }
        root = root.right;
    }
}
