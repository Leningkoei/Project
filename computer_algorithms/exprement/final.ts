function getMinPathSumByDFS(grid: number[][]) {
    /**
     * 注意调用这个要从(xSize - 1, ySize - 1)到(0, 0), 因为边界条件比较好写
     */
    function dfs(x: number, y: number): number {
        if (x && y) {
            // not edge

            const top: number = dfs(x, y - 1)
            const left: number = dfs(x - 1, y)

            return grid[y][x] + Math.min(top, left)
        } else if(x && !y) {
            // top edge

            return grid[y][x] + dfs(x - 1, y)
        } else if(!x && y) {
            // left edge

            return grid[y][x] + dfs(x, y - 1)
        } else {
            // top left corner

            return grid[y][x]
        }
    }

    return dfs(grid[0].length - 1, grid.length - 1)
}
function getMinPathSum(grid: number[][]): number {
    for (let y: number = 0; y < grid.length; y++) {
        for (let x: number = 0; x < grid[0].length; x++) {
            const previousTop: number = grid[y - 1] && grid[y - 1][x]
                ? grid[y - 1][x]
                : 0
            const previousLeft: number = grid[y][x - 1] ? grid[y][x - 1] : 0

            if (x && y) {
                // is edge === false

                grid[y][x] += Math.min(previousTop, previousLeft)
            } else {
                // is edge === true

                grid[y][x] += Math.max(previousTop, previousLeft)
            }
        }
    }

    return grid[grid.length - 1][grid[0].length - 1]
}

function createGrid(xSize: number, ySize: number): number[][] {
    const grid: number[][] = new Array(ySize)
        .fill(null)
        .map(() => new Array(xSize).fill(0))

    for (let y: number = 0; y < ySize; y++) {
        for (let x: number = 0; x < xSize; x++) {
            const top: number = grid[y - 1] && grid[y - 1][x]
                ? grid[y - 1][x]
                : Infinity
            const left: number = grid[y][x - 1] ? grid[y][x - 1] : Infinity

            // grid[y][x] = Math.random() * 101 << 0
            do {
                grid[y][x] = Math.random() * 101 << 0
            } while (
                grid[y][x] < 0 ||
                Math.abs(grid[y][x] - top) <= 10 ||
                Math.abs(grid[y][x] - left) <= 10 ||
                isNeedCheckAgain(grid[y][x])
            )
        }
    }

    return grid
}
function isNeedCheckAgain(num: number): boolean {
    if (num >= 10 && num <= 90) {
        return false
    }

    switch(true) {
        case num === 0 || num === 100:
            return Math.random() * 90 < 10
        case num === 1 || num === 99:
            return Math.random() * 89 < 9
        case num === 2 || num === 98:
            return Math.random() * 88 < 8
        case num === 3 || num === 97:
            return Math.random() * 87 < 7
        case num === 4 || num === 96:
            return Math.random() * 86 < 6
        case num === 5 || num === 95:
            return Math.random() * 85 < 5
        case num === 6 || num === 94:
            return Math.random() * 84 < 4
        case num === 7 || num === 93:
            return Math.random() * 83 < 3
        case num === 8 || num === 92:
            return Math.random() * 82 < 2
        case num === 9 || num === 91:
            return Math.random() * 81 < 1
        default:
            throw(new Error('絶対おかしいなこれ'))
    }
}
function print10By10TopLeftOfGrid(grid: number[][]) {
    if (grid.length < 10 || grid[0].length < 10) {
        throw(new Error('grid is too small'))
    }

    for (let i: number = 0; i < 10; i++) {
        const row: number[] = grid[i]

        console.log(
            `${row[0]}\t` +
            `${row[1]}\t` +
            `${row[2]}\t` +
            `${row[3]}\t` +
            `${row[4]}\t` +
            `${row[5]}\t` +
            `${row[6]}\t` +
            `${row[7]}\t` +
            `${row[8]}\t` +
            `${row[9]}`
        )
    }
}
function printNumsCount(grid: number[][]) {
    const map: Map<number, number> = new Map<number, number>()

    for (let i: number = 0; i < 101; i++) {
        map.set(i, 0)
    }

    for (const row of grid) {
        for (const point of row) {
            map.set(point, map.get(point) + 1)
        }
    }

    const totalCount = [ ...map.values() ].reduce((
        previousValue: number,
        currentValue: number
    ) => previousValue + currentValue, 0)

    // console.log(map)
    for (let i = 0; i < 10; i++) {
        console.log(
            `${i * 10 + 0}:\t${map.get(i * 10 + 0)}\t` +
            `${i * 10 + 1}:\t${map.get(i * 10 + 1)}\t` +
            `${i * 10 + 2}:\t${map.get(i * 10 + 2)}\t` +
            `${i * 10 + 3}:\t${map.get(i * 10 + 3)}\t` +
            `${i * 10 + 4}:\t${map.get(i * 10 + 4)}\t` +
            `${i * 10 + 5}:\t${map.get(i * 10 + 5)}\t` +
            `${i * 10 + 6}:\t${map.get(i * 10 + 6)}\t` +
            `${i * 10 + 7}:\t${map.get(i * 10 + 7)}\t` +
            `${i * 10 + 8}:\t${map.get(i * 10 + 8)}\t` +
            `${i * 10 + 9}:\t${map.get(i * 10 + 9)}\t`
        )
    }
    console.log(`100:\t${map.get(100)}`)

    console.log(`total count: ${totalCount}`)
}
function printResultAndTime(
    grid: number[][],
    getMinPathSumFunction: (grid: number[][]) => number
) {
    // 注意, 为了方便和节约内存, getMinPathSum会原地修改源矩阵,
    //     传入参数时需要复制矩阵(或者重新调用createGrid, 不过这样不能验证2种方法结果1样)
    const copyGrid: number[][] = new Array(grid.length)
        .fill(null)
        .map((_: number, currentIndex: number) => [ ...grid[currentIndex] ])

    const beginTime: number = Number(new Date())
    const result: number = getMinPathSumFunction(copyGrid)
    const endTime: number = Number(new Date())

    const time: Date = new Date(endTime - beginTime)
    const minute: number = time.getMinutes()
    const second: number = time.getSeconds()
    const millisecond: number = time.getMilliseconds()

    console.log(`result: ${result}`)
    console.log(`time: ${minute * 60 * 1000 + second * 1000 + millisecond}ms`)
}

function main() {
    const grid: number[][] = createGrid(10000, 10000)

    print10By10TopLeftOfGrid(grid)

    printNumsCount(grid)

    printResultAndTime(grid, getMinPathSum)
    // printResultAndTime(grid, getMinPathSumByDFS)
}

main()
