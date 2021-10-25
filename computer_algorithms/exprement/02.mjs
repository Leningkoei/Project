export { managerLine };
/**
 * @param {number[][]} grid 0 ? 没有阻挡 : 有阻挡;
 * @param {number[]} pointA [ x, y ];
 * @param {number[]} pointB [ x, y ];
 * @returns {number[][]}
 */
function managerLine(grid, pointA, pointB) {
    const target = pointB.toString();
    const queue = [ pointA ];
    const log = new Set();
    let levelCount = 0;
    function deltaPoint(point) {
        const pointX = point[0];
        const pointY = point[1];
        if (pointX < 0 || pointY < 0 || pointX >= 7 || pointY >= 7) {
            return false;
        }
        if (grid[pointY][pointX]) {
            return false;
        }
        if (log.has(point.toString())) {
            return false;
        }
        return true;
    }
    log.add(pointA.toString());
    while (queue.length) {
        let count = queue.length;
        while (count--) {
            const point = queue.shift();
            if (point.toString() === target) {
                break;
            }
            const pointX = point[0];
            const pointY = point[1];
            const upPoint = [ pointX, pointY - 1 ]
            const rightPoint = [ pointX + 1, pointY ];
            const downPoint = [ pointX, pointY + 1 ];
            const leftPoint = [ pointX - 1, pointY ];
            // 如果 point 符合条件, 则将 point 加入 log 和 queue;
            deltaPoint(upPoint) && log.add(upPoint.toString()) && queue.push(upPoint);
            deltaPoint(rightPoint) && log.add(rightPoint.toString()) && queue.push(rightPoint);
            deltaPoint(downPoint) && log.add(downPoint.toString()) && queue.push(downPoint);
            deltaPoint(leftPoint) && log.add(leftPoint.toString()) && queue.push(leftPoint);
        }
        if (count >= 0) {
            break;
        }
        levelCount++;
    }
    console.log(queue.length ? levelCount : "有死路罢..."); // 拿到最短路径的长度;
    return;
}
managerLine([
    [ 0, 0, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 1, 1, 0, 0 ],
    [ 1, 0, 0, 0, 1, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0, 0 ]
], [ 1, 2 ], [ 5, 3 ]);
