export { pathSumKai as pathSum };
import { TreeNode } from "../../classes/TreeNode.mjs";
/**
 * 递归穷举;
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number}
 */
const pathSum = function(root, targetSum) {
    if (root) {
        let count = rootSum(root, targetSum);         // 计算以根结点为路径开始的情况数;
        count += pathSumKai(root.left, targetSum);    // 计算以根结点的左子结点为根结点的情况数;
        count += pathSumKai(root.right, targetSum);   // 计算以根结点的右子结点为根结点的情况数;
        return count;
    }
    return 0;
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number}
 */
const rootSum = function(root, targetSum) {
    let count = 0;
    if (root) {
        const val = root.val;
        if (val === targetSum) {
            count++;
        }
        count += rootSum(root.left, targetSum - val);
        count += rootSum(root.right, targetSum - val);
    }
    return count;
}
/**
 * 前缀和;
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number}
 */
const pathSumKai = function(root, targetSum) {
    /**
     * @param {TreeNode} root
     * @param {number} curr 到该root的前缀和;
     * @returns {number}
     */
    const dfs = function(root, curr) {
        let count = 0;
        if (root) {
            curr += root.val;
            count = prefix.get(curr - targetSum) || 0;
            prefix.set(curr, (prefix.get(curr) || 0) + 1);
            count += dfs(root.left, curr) + dfs(root.right, curr);
            prefix.set(curr, (prefix.get(curr) || 0) - 1);
        }
        return count;
    }
    // 保存前缀和的Map;
    const prefix = new Map();
    prefix.set(0, 1);
    return dfs(root, 0);
}
