export { maxDepth };
class Node {
    /**
     * @param {number} val
     * @param {Node[]} children
     */
    constructor(val, children) {
        this.val = val;
        this.children = children;
    }
}
/**
 * @param {Node | null} root
 * @returns {number}
 */
function maxDepth(root) {
    if (root) {
        let result = 0;
        for (const child of root.children) {
            result = Math.max(result, maxDepth(child));
        }
        return result + 1;
    } else {
        return 0;
    }
}
