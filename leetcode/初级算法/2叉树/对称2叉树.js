const leetcode = window.leetcode || {};
/**
 * Definition for a binary tree node;
 */
leetcode.TreeNode = class {
    /**
     * @param {number} val
     * @param {leetcode.TreeNode} left
     * @param {leetcode.TreeNode} right
     */
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left ? left : null;
        this.right = right ? right : null;
    }
}
/**
 * 中序遍历存入数组, 检查数组是否对称; -- 比想象中的复杂许多, 会有各种特殊情况出现
 * @param {leetcode.TreeNode} root
 * @return {boolean}
 */
leetcode.isSymmetric = function(root) {
    const myList = [];
    const myListKai = [];
    const myForEach = function(root, level) {
        if (root.left || root.right) {
            if (root.left) {
                myForEach(root.left, level + 1);
            } else {
                if (myList[level + 1]) {
                    myList[level + 1].push(Infinity);
                } else {
                    myList[level + 1] = [ Infinity ];
                }
                myListKai.push(Infinity);
            }
            if (myList[level]) {
                myList[level].push(root.val);
            } else {
                myList[level] = [ root.val ];
            }
            myListKai.push(root.val);
            if (root.right) {
                myForEach(root.right, level + 1);
            } else {
                if (myList[level + 1]) {
                    myList[level + 1].push(Infinity);
                } else {
                    myList[level + 1] = [ Infinity ];
                }
                myListKai.push(Infinity);
            }
        } else {
            if (myList[level]) {
                myList[level].push(root.val);
            } else {
                myList[level] = [ root.val ];
            }
            myListKai.push(root.val);
        }
    }
    myForEach(root, 0);
    for (const levelNodes of myList) {
        for (let i = 0, j = levelNodes.length - 1; i < j; i++, j--) {
            if (levelNodes[i] !== levelNodes[j]) {
                return false;
            }
        }
    }
    for (let i = 0, j = myListKai.length - 1; i < j; i++, j--) {
        if (myListKai[i] !== myListKai[j]) {
            return false;
        }
    }
    return true;
}
/**
 * 12句话似乎不太好描述;
 * @param {leetcode.TreeNode} root
 */
leetcode.isSymmetricKai = function(root) {
    /**
     * @param {leetcode.TreeNode} rootLeft
     * @param {leetcode.TreeNode} rootRight
     * @returns {boolean}
     */
    const myFunction = function(rootLeft, rootRight) {
        if (!rootLeft && !rootRight) {
            return true;
        }
        if (!rootLeft || !rootRight || rootLeft.val !== rootRight.val) {
            return false;
        }
        return myFunction(rootLeft.left, rootRight.right) && myFunction(rootLeft.right, rootRight.left);
    }
    return myFunction(root.left, root.right);
}
