export { inorderTraversalKai as inorderTraversal };
import { TreeNode } from "../../../classes/TreeNode.mjs"
/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
const inorderTraversal = function(root) {
    /**
     * @param {TreeNode} root
     */
    const myFunction = function(root) {
        if (root) {
            myFunction(root.left);
            result.push(root.val);
            myFunction(root.right);
        }
    }
    const result = [];
    myFunction(root);
    return result;
}
/**
 * @param {TreeNode} root
 * @returns {number[]}
 */
const inorderTraversalKai = function(root) {
    const result = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
}
