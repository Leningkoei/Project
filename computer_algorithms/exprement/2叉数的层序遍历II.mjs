export { levelOrderBottom };
import { TreeNode } from "../../leetcode/classes/TreeNode.mjs"; // read only;
/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
function levelOrderBottom(root) {
    const result = [];
    if (root) {
        /**
         * @type {TreeNode[]} queue
         */
        const queue = [];
        queue.push(root);
        while (queue.length) {
            const count = queue.length;
            const level = new Array(queue.length);
            for (let i = 0; i < count; i++) {
                const node = queue.shift();
                level[i] = node.val;
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
            result.push(level);
        }
    }
    return result.reverse();
}
