export { myFunction };
function myFunction() {
    const map = new Set([ 2, 3, 5, 7, 11, 13, 17 ]);
    const grid = new Array(3).fill(undefined).map(() => new Array(3).fill(undefined));
    const log = new Set();
    let count = 0;
    const x = 0;
    const y = 0;
    function myFunction1(x, y) {
        for (let p = 1; p < 11; p++) {
            if (log.has(p)) {
                continue;
            }
            grid[y][x] = p;
            if (delta(x, y)) {
                if (x === 2) {
                    if (y === 2) {
                        count++;
                        console.log("---------");
                        for (const row of grid) {
                            console.log(row.toString());
                        }
                    } else {
                        log.add(p);
                        myFunction1(0, y + 1);
                        log.delete(grid[y][x]);
                    }
                } else {
                    log.add(p);
                    myFunction1(x + 1, y);
                    log.delete(grid[y][x]);
                }
            }
        }
        grid[y][x] = undefined;
    }
    function delta(x, y) {
        const thisNum = grid[y][x];
        const leftNum = getNum(x - 1, y);
        const rightNum = getNum(x + 1, y);
        const upNum = getNum(x, y - 1);
        const downNum = getNum(x, y + 1);
        const deltaLeftNum = leftNum ? map.has(leftNum + thisNum) : true;
        const deltaRightNum = rightNum ? map.has(rightNum + thisNum) : true;
        const deltaUpNum = upNum ? map.has(upNum + thisNum) : true;
        const deltaDownNum = downNum ? map.has(downNum + thisNum) : true;;
        return deltaLeftNum && deltaRightNum && deltaUpNum && deltaDownNum;
    }
    function getNum(x, y) {
        if (y > -1 && y < 3 && x > -1 && x < 3) {
            return grid[y][x];
        } else {
            return undefined;
        }
    }
    myFunction1(x, y);
    console.log(count);
}
window.f = myFunction;
