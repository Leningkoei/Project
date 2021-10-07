export { buildTreeKai as buildTree };
import { TreeNode } from "../../../classes/TreeNode.mjs";
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @returns {TreeNode}
 */
const buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    const node = new TreeNode(preorder[0], null, null);
    let index = 0;
    while (inorder[index++] !== preorder[0]);   // pay attition!!!
    const leftSubtreePreorder = preorder.slice(1, index);
    const rightSubtreePreorder = preorder.slice(index, preorder.length);
    const leftSubtreeInorder = inorder.slice(0, index - 1);
    const rightSubtreeInorder = inorder.slice(index, inorder.length);
    node.left = buildTree(leftSubtreePreorder, leftSubtreeInorder);
    node.right = buildTree(rightSubtreePreorder, rightSubtreeInorder);
    return node;
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
