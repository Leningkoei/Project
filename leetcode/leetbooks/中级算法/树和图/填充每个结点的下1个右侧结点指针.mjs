export { connectKai as connect };
// it is a helper;
const MyNode = new class {
    constructor(val, left, right, next) {
        this.val = val === undefined ? 0 : val;
        this.left = left ? left : null;
        this.right = right ? right : null;
        this.next = next ? next : null;
    }
}
/**
 * @param {MyNode} root
 * @returns {MyNode}
 */
const connect = function(root) {
    const map = [];
    const queue = [ root ];
    let queueFront = 0;
    while (queueFront < queue.length) {
        let levelList = [];
        const size = queue.length;
        while (queueFront < size) {
            const node = queue[queueFront++];
            if (node) {
                levelList.push(node);
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }
        }
        map.push(levelList);
    }
    for (const level of map) {
        for (let nodeIndex = 0; nodeIndex < level.length - 1; nodeIndex++) {
            level[nodeIndex].next = level[nodeIndex + 1];
        }
    }
    return root;
}
/**
 * @param {MyNode} root
 * @returns {MyNode}
 */
const connectKai = function(root) {
    if (root && root.left) {
        root.left.next = root.right;
        root.right.next = root.next ? root.next.left : null;
        connectKai(root.left);
        connectKai(root.right);
    }
    return root;
}
/**
 * @param {MyNode} root
 * @returns {MyNode}
 */
const connectKouKai = function(root) {
    if (root) {
        let leftMost = root;
        while (leftMost.left) {
            let head = leftMost;
            while (head) {
                head.left.next = head.right;
                if (head.next) {
                    head.right.next = head.next.left;
                }
                head = head.next;
            }
            leftMost = leftMost.left;
        }
    }
    return root;
}
