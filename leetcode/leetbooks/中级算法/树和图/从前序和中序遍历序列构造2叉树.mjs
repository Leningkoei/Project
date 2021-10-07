export { buildTreeKai as buildTree };
import { TreeNode } from "../../../classes/TreeNode.mjs";
const buildTree = function(preorder, inorder) {
    return;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @returns {TreeNode}
 */
const buildTreeKai = function(preorder, inorder) {
    /**
     * @param {number} preorderLeft
     * @param {number} preorderRight
     * @param {number} inorderLeft
     * @param {number} inorderRight
     * @returns {TreeNode}
     */
    const myFunction = function(preorderLeft, preorderRight, inorderLeft, inorderRight) {
        if (preorderLeft >= preorderRight) {
            return null;
        }
        const rootVal = preorder[preorderLeft];
        const root = new TreeNode(rootVal);
        const inorderRoot = map.get(rootVal);
        const leftSubtreeSize = inorderRoot - inorderLeft;
        const rightSubtreeSize = inorderRight - inorderRoot;
        root.left = myFunction(preorderLeft + 1, preorderLeft + 1 + leftSubtreeSize, inorderLeft, inorderLeft + leftSubtreeSize);
        root.right = myFunction(preorderRight - rightSubtreeSize + 1, preorderRight, inorderRight - rightSubtreeSize + 1, inorderRight);
        return root;
    }
    const map = new Map();
    inorder.forEach((value, index) => {map.set(value, index)});
    return myFunction(0, preorder.length, 0, preorder.length);
}
