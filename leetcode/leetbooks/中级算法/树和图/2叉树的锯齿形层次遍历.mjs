export { zigzagLevelOrderKaiNi as zigzagLevelOrder };
import { TreeNode } from "../../../classes/TreeNode.mjs";
/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
const zigzagLevelOrder = function(root) {
    /**
     * @param {TreeNode} root
     * @param {number} level
     */
    const myFunction = function(root, level) {
        if (root) {
            if (result[level]) {
                level & 1 ? result[level].unshift(root.val) : result[level].push(root.val);
            } else {
                result[level] = [ root.val ];
            }
            myFunction(root.left, level + 1);
            myFunction(root.right, level + 1);
        }
    }
    const result = [];
    myFunction(root, 0);
    return result;
}
/**
 * @param {TreeNode} root
 * @returns {number[][]}
 */
const zigzagLevelOrderKai = function(root) {
    if (!root) {
        return [];
    }
    const result = [ [ root.val ] ];
    const queue = [ root ];
    let queueBgn = 0;
    let i = 1;
    let flag = false;
    while (queueBgn < queue.length) {
        if (queue[queueBgn]) {
            queue.push(queue[queueBgn].left);
            queue.push(queue[queueBgn].right);
        }
        queueBgn++;
    }
    while (i < queue.length) {
        const level = [];
        let j = 0;
        while (j < (result[result.length - 1].length) * 2) {
            const p = queue[i + j];
            if (p) {
                flag ? level.push(p.val) : level.unshift(p.val);
            }
            j++;
        }
        i += j;
        flag = !flag;
        result.push(level);
    }
    result.pop();
    return result;
}
/**
 * @param {TreeNode} root
 * @returns {number}
 */
const zigzagLevelOrderKaiNi = function(root) {
    if (!root) {
        return [];
    }
    const result = [];
    const queue = [ root ];
    let queueFront = 0;
    let isOrderLeft = true;
    while (queueFront < queue.length) {
        let levelList = [];
        const size = queue.length;
        while (queueFront < size) {
            const node = queue[queueFront++];
            isOrderLeft ? levelList.push(node.val) : levelList.unshift(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        isOrderLeft = !isOrderLeft;
        result.push(levelList);
    }
    return result;
}
