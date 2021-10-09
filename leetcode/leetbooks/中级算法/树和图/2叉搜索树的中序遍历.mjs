export { kthSmallestKai as kthSmallest };
// read only;
import { TreeNode } from "../../../classes/TreeNode.mjs";
/**
 * @param {TreeNode} root
 * @param {number} k
 * @returns {number}
 */
const kthSmallest = function(root, k) {
    const myFunction = function(root) {
        if (root) {
            myFunction(root.left);
            vals.push(root.val);
            myFunction(root.right);
        }
    }
    const vals = [];
    myFunction(root);
    return vals[k - 1];
}
/**
 * @param {TreeNode} root
 * @param {number} k
 * @returns {number}
 */
const kthSmallestKai = function(root, k) {
    const stack = [];
    while (true) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (!--k) {
            return root.val;
        }
        root = root.right;
    }
}
