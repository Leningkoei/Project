export { TreeNode };
const TreeNode = class {
    /**
     * @param {number} val 树结点的值;
     * @param {TreeNode} left 树的左子结点;
     * @param {TreeNode} right 树的右子结点;
     */
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}
