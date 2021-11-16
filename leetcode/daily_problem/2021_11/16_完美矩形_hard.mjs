export { isRectangleCover };
/**
 * corner = 1;
 * border = 2 = corner + corner;
 * inner = 4 = border + border;
 * @param {number[][]} rectangles rectangles[i] = [ x, y, a, b ]; -- b, a, y, x;
 * @returns {boolean}
 */
function isRectangleCover(rectangles) {
    const corner = 1;
    const border = 2;
    const inner = 4;
    let upMax = -Infinity;
    let rightMax = -Infinity;
    let bottom = Infinity;
    let left = Infinity;
    for (const rectangle of rectangles) {
        const up = rectangle[3];
        const right = rectangle[2];
        const bottom = rectangle[1];
        const left = rectangle[0];
        upMax = Math.max(upMax, up);
        rightMax = Math.max(rightMax, right);
        bottomMin = Math.min(bottomMin, bottom);
        leftMin = Math.min(leftMin, left);
    }
    const bigRectangle
        = new Array(upMax - bottomMin)
        .fill(undefined)
        .map(() => new Array(rightMax - leftMin).fill(0));
    for (const rectangle of rectangles) {
        const up = rectangle[3] - bottomMin;
        const right = rectangle[2] - leftMin;
        const bottom = rectangle[1] - bottomMin;
        const left = rectangle[0] - leftMin;
        //#region set four corner;
        // set (right, up);
        bigRectangle[up][right] += 1;
        // set (right, bottom);
        bigRectangle[bottom][right] += 1;
        // set (left, bottom);
        bigRectangle[bottom][left] += 1;
        // set (left, up);
        bigRectangle[up][left] += 1;
        //#endregion
    }
    //#region past;
    /**
     * inner hit count === 1;
     * border hit count === 1 || 2;
     * corner hit count === 1 || 2 or 3 || 4;
     * border which is big border hit count === 1;
     * border which is big inner hit count === 2;
     * corner which is big corner hit count === 1;
     * corner which is big border hit count === 2;
     * corner which is big inner hit count === 3 || 4;
     */
    // const cornerLog = new Map();
    // const borderLog = new Map();
    // const innerLog = new Set();
    // let upMax = -Infinity;
    // let rightMax = -Infinity;
    // let bottomMin = Infinity;
    // let leftMin = Infinity;
    // for (const rectangle of rectangles) {
    //     const up = rectangle[3];
    //     const right = rectangle[2];
    //     const bottom = rectangle[1];
    //     const left = rectangle[0];
    //     //#region save big corner and border;
    //     upMax = Math.max(upMax, up);
    //     rightMax = Math.max(rightMax, right);
    //     bottomMin = Math.min(bottomMin, bottom);
    //     leftMin = Math.min(leftMin, left);
    //     //#endregion
    //     //#region add corners to corner log; -- if corner in border log?
    //     const rightUp = `(${right}, ${up})`;
    //     const rightBottom = `(${right}, ${bottom})`;
    //     const leftBottom = `(${left}, ${bottom})`;
    //     const leftUp = `(${left}, ${up})`;
    //     for (const corner of [ rightUp, rightBottom, leftBottom, leftUp ]) {
    //         if (innerLog.has(corner)) {
    //             return false;
    //         } else {
    //             borderLog.delete(corner);
    //             count = cornerLog.get(corner);
    //             cornerLog.set(corner, count ? count + 1 : 1);
    //         }
    //     }
    //     //#endregion
    //     //#region add borders to border log;
    //     // up; -- x: left to right;
    //     for (let i = left + 1; i < right; i++) {
    //         const border = `(${i}, ${up})`;
    //         if (!cornerLog.has(border)) {
    //             if (innerLog.has(border)) {
    //                 return false;
    //             } else {
    //                 const count = borderLog.get(border);
    //                 borderLog.set(border, count ? count + 1 : 1);
    //             }
    //         }
    //     }
    //     // right; -- y: up to bottom;
    //     for (let i = up - 1; i > bottom; i--) {
    //         const border = `(${right}, ${i})`;
    //         if (!cornerLog.has(border)) {
    //             if (innerLog.has(border)) {
    //                 return false;
    //             } else {
    //                 const count = borderLog.get(border);
    //                 borderLog.set(border, count ? count + 1 : 1);
    //             }
    //         }
    //     }
    //     // bottom; -- x: right to left;
    //     for (let i = right - 1; i > left; i--) {
    //         const border = `(${i}, ${bottom})`;
    //         if (!cornerLog.has(border)) {
    //             if (innerLog.has(border)) {
    //                 return false;
    //             } else {
    //                 const count = borderLog.get(border);
    //                 borderLog.set(border, count ? count + 1 : 1);
    //             }
    //         }
    //     }
    //     // left; -- y: bottom to up;
    //     for (let i = bottom + 1; i < up; i++) {
    //         const border = `(${left}, ${i})`;
    //         if (!cornerLog.has(border)) {
    //             if (innerLog.has(border)) {
    //                 return false;
    //             } else {
    //                 const count = borderLog.get(border);
    //                 borderLog.set(border, count ? count + 1 : 1);
    //             }
    //         }
    //     }
    //     //#endregion
    //     //#region add inners to inner log;
    //     // y: bottom to up;
    //     for (let y = bottom + 1; y < up; y++) {
    //         // x: left to right;
    //         for (let x = left + 1; x < right; x++) {
    //             const point = `(${x}, ${y})`;
    //             innerLog.add(point);
    //         }
    //     }
    //     //#endregion
    // }
    // // const borderLog = new Map();
    // // const innerLog = new Set();
    // // let upMax = -Infinity;
    // // let rightMax = -Infinity;
    // // let bottomMin = Infinity;
    // // let leftMin = Infinity;
    // // for (const rectangle of rectangles) {
    // //     const up = rectangle[3];
    // //     const right = rectangle[2];
    // //     const bottom = rectangle[1];
    // //     const left = rectangle[0];
    // //     // 顺便取得组合矩形的上右下左;
    // //     upMax = Math.max(upMax, up);
    // //     rightMax = Math.max(rightMax, right);
    // //     bottomMin = Math.min(bottomMin, bottom);
    // //     leftMin = Math.min(leftMin, left);
    // //     // add borders to border log;
    // //     // up; -- position i is (left, up);
    // //     for (let i = left; i < right; i++) {
    // //         const point = `(${i}, ${up})`;
    // //         if (innerLog.has(point)) {
    // //             return false;
    // //         } else {
    // //             // borderLog.add(point);
    // //             const log = borderLog.get(point);
    // //             borderLog.set(log ? log + 1 : log)
    // //             }
    // //         }
    // //     }
    // //     // right; -- position i is (right, up);
    // //     for (let i = up; i > bottom; i--) {
    // //         const point = `(${right}, ${i})`;
    // //         if (innerLog.has(point)) {
    // //             return false;
    // //         } else {
    // //             borderLog.add(point);
    // //         }
    // //     }
    // //     // bottom; -- position i is (right, bottom);
    // //     for (let i = right; i > left; i--) {
    // //         const point = `(${i}, ${bottom})`;
    // //         if (innerLog.has(point)) {
    // //             return false;
    // //         } else {
    // //             borderLog.add(point);
    // //         }
    // //     }
    // //     // left; -- position i is (left, bottom);
    // //     for (let i = bottom; i < up; i++) {
    // //         const point = `(${left}, ${i})`;
    // //         if (innerLog.has(point)) {
    // //             return false;
    // //         } else {
    // //             borderLog.add(point);
    // //         }
    // //     }
    // //     // add inners to inner log;
    // //     for (let y = bottom + 1; y < up; y++) {
    // //         for (let x = left + 1; x < right; x++) {
    // //             const point = `(${x}, ${y})`;
    // //             innerLog.add(point);
    // //         }
    // //     }
    // // }
    // // for (let y = bottomMin; y <= upMax; y++) {
    // //     for (let x = leftMin; x <= rightMax; x++) {
    // //         const point = `(${x}, ${y})`;
    // //         if (!(innerLog.has(point) || borderLog.has(point))) {
    // //             return false;
    // //         }
    // //     }
    // // }
    // // return true;
    //#endregion
}
