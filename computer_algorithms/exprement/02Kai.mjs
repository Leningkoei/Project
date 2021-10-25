export { manageLine };
/**
 * @param {number[][]} grid 0 ? 没有阻挡 : 有阻挡;
 * @param {number[]} pointA [ x, y ];
 * @param {number[]} pointB [ x, y ];
 * @returns {number[][]}
 */
function manageLine(grid, pointA, pointB) {
    const result = [];
    const target = pointB.toString();
    const queue = [ pointA ];
    const log = new Map();
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
    log.set(pointA.toString(), undefined);
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
            deltaPoint(upPoint) && log.set(upPoint.toString(), point) && queue.push(upPoint);
            deltaPoint(rightPoint) && log.set(rightPoint.toString(), point) && queue.push(rightPoint);
            deltaPoint(downPoint) && log.set(downPoint.toString(), point) && queue.push(downPoint);
            deltaPoint(leftPoint) && log.set(leftPoint.toString(), point) && queue.push(leftPoint);
        }
        if (count >= 0) {
            break;
        }
    }
    if (queue.length) {
        for (let point = pointB; point; point = log.get(point.toString())) {
            result.push(point);
            console.log(point);
        }
        return result.reverse();
    } else {
        console.log("有死路罢...");
        return undefined;
    }
}
const result = manageLine([
    [ 0, 0, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 1, 1, 0, 0 ],
    [ 1, 0, 0, 0, 1, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0, 0 ]
], [ 1, 2 ], [ 5, 3 ]);
console.log(result ? result.toString() : "");
