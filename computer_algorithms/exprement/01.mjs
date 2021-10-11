export { myFunction };
function myFunction() {
    const grid = new Array(3).fill(undefined).map(() => new Array(3).fill(undefined));
    const map = new Set([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
    const log = new Set();
    let count = 0;
    /**
     * @param {number} x 当前坐标的x值;
     * @param {number} y 当前坐标的y值;
     */
    function dfs(x, y) {
        if (y === 3) {
            // 递归出口;
            count++;
            console.log("------");
            for (const row of grid) {
                console.log(row.toString());
            }
        } else {
            for (let thisNum = 1; thisNum < 11; thisNum++) {
                if (!log.has(thisNum)) {
                    grid[y][x] = thisNum;
                    if (delta(x, y)) {
                        log.add(thisNum);
                        x === 2 ? dfs(0, y + 1) : dfs(x + 1, y);
                        log.delete(thisNum);
                    }
                }
            }
            grid[y][x] = undefined;
        }
    }
    /**
     * 判断grid[y][x]是否符合要求;
     * @param {number}} x 当前坐标的x值;
     * @param {number} y 当前坐标的y值;
     * @returns {boolean}
     */
    function delta(x, y) {
        const thisNum = grid[y][x];
        const leftNum = getNum(x - 1, y);
        const rightNum = getNum(x + 1, y);
        const upNum = getNum(x, y - 1);
        const downNum = getNum(x, y + 1);
        /**
         * const deltaLeftNum = leftNum ? map.has(leftNum + thisNum) : true;
         * const deltaRightNum = rightNum ? map.has(rightNum + thisNum) : true;
         * const deltaUpNum = upNum ? map.has(upNum + thisNum) : true;
         * const deltaDownNum = downNum ? map.has(downNum + thisNum) : true;
         * return deltaLeftNum && deltaRightNum && deltaUpNum && deltaDownNum;
         */
        return (
            (leftNum ? map.has(leftNum + thisNum) : true) &&
            (rightNum ? map.has(rightNum + thisNum) : true) &&
            (upNum ? map.has(upNum + thisNum) : true) &&
            (downNum ? map.has(downNum + thisNum) : true)
        );
    }
    /**
     * 获取grid[y][x]的value; -- 若x || y越界, 则返回undefined;
     * @param {number} x 想要获取value的坐标的x值;
     * @param {number} y 想要获取value的坐标的y值;
     * @returns {number}
     */
    function getNum(x, y) {
        if (y > -1 && y < 3 && x > -1 && x < 3) {
            return grid[y][x];
        } else {
            return undefined;
        }
    }
    dfs(0, 0);
    console.log(count);
}
