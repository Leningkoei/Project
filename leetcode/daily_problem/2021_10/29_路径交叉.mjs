export { isSelfCrossing };
import { ListNode } from "../../classes/ListNode.mjs";
/**
 * 暴力记录路径;
 * @param {number[]} distance
 * @returns {boolean}
 */
function isSelfCrossing(distance) {
    // const direction = [ 0, 1, 2, 3 ];
    // 借助循环链表调整方向;
    const north = new ListNode(0, null);
    const west = new ListNode(1, null);
    const south = new ListNode(2, null);
    const east = new ListNode(3, null);
    north.next = west;
    west.next = south;
    south.next = east;
    east.next = north;
    // const position = [ 0, 0 ];  // 初始位置;
    let x = 0;                  // 初始位置 x 值;
    let y = 0;                  // 初始位置 y 值;
    let direction = north;      // 初始方向;
    const path = new Set();     // 路径记录;
    for (let len of distance) {
        switch (direction.val) {
            case 0:
                while (len--) {
                    y++;
                    const position = [x, y].toString();
                    if (path.has(position)) {
                        return true;
                    } else {
                        path.add(position);
                    }
                }
                direction = direction.next;
                break;
            case 1:
                while (len--) {
                    x--;
                    const position = [x, y].toString();
                    if (path.has(position)) {
                        return true;
                    } else {
                        path.add(position);
                    }
                }
                direction = direction.next;
                break;
            case 2:
                while (len--) {
                    y--;
                    const position = [x, y].toString();
                    if (path.has(position)) {
                        return true;
                    } else {
                        path.add(position);
                    }
                }
                direction = direction.next;
                break;
            case 3:
                while (len--) {
                    x++;
                    const position = [x, y].toString();
                    if (path.has(position)) {
                        return true;
                    } else {
                        path.add(position);
                    }
                }
                direction = direction.next;
                break;
            default: break;
        }
    }
    return false;
}
