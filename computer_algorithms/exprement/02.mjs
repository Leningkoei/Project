export { managerLine };
/**
 * @param {number[][]} grid 0 ? 没有阻挡 : 有阻挡;
 * @param {number[]} aPosition [ x, y ];
 * @param {number[]} bPosition [ x, y ];
 * @returns {number[][]}
 */
function managerLine(grid, aPosition, bPosition) {
    const queue = [];
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
