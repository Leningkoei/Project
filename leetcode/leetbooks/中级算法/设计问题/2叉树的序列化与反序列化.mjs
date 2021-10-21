export { serialize, deserialize };
import { TreeNode } from "../../../classes/TreeNode.mjs";
/**
 * 序列化;
 * @param {TreeNode} root
 * @returns {string}
 */
function serialize(root) {
    const data = [];
    function dfs(root) {
        if (root) {
            data.push(root.val);
            dfs(root.left);
            dfs(root.right);
        } else {
            data.push(null);
        }
    }
    dfs(root);
    return data.join(",");
}
/**
 * 反序列化;
 * @param {string} data
 * @returns {TreeNode}
 */
function deserialize(data) {
    const dataKai = data.split(",").reverse();
    function dfs() {
        const valString = dataKai.pop();
        return valString ? new TreeNode(parseInt(valString), dfs(), dfs()) : null;
    }
    return dfs();
}
