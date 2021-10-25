export { manageLine };
/**
 * @param {number[][]} grid 0 ? 没有阻挡 : 有阻挡;
 * @param {number[]} pointA [ x, y ];
 * @param {number[]} pointB [ x, y ];
 * @returns {number[][]}
 */
function manageLine(grid, pointA, pointB) {
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
        levelCount++;
        if (count >= 0) {
            break;
        }
    }
    console.log(queue.length ? levelCount : "有死路罢..."); // 拿到最短路径的长度;
    if (queue.length) {
        let result = undefined;
        let path = [];
        log.clear();
        function dfs(point) {
            if (path.length === levelCount) {
                return;
            }
            if (deltaPoint(point)) {
                path.push(point);
                if (point.toString() === target) {
                    console.log(path.toString());
                    if (!result) {
                        result = new Array(levelCount);
                        for (let i = 0; i < levelCount; i++) {
                            result[i] = `[ ${path[i]} ]`;
                        }
                    }
                    path.pop();
                    return;
                }
                log.add(point.toString());
                const pointX = point[0];
                const pointY = point[1];
                const upPoint = [ pointX, pointY - 1 ];
                const rightPoint = [ pointX + 1, pointY ];
                const downPoint = [ pointX, pointY + 1 ];
                const leftPoint = [ pointX - 1, pointY ];
                dfs(upPoint);
                dfs(rightPoint);
                dfs(downPoint);
                dfs(leftPoint);
                log.delete(point.toString());
                path.pop();
            }
        }
        dfs(pointA);
        return result;
    } else {
        return false;
    }
}
console.log(`result is ${manageLine([
    [ 0, 0, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 1, 1, 0, 0 ],
    [ 1, 0, 0, 0, 1, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0, 0 ],
    [ 1, 1, 1, 0, 0, 0, 0 ]
], [ 1, 2 ], [ 5, 3 ]).toString()}`);
