export { isRectangleCover };
/**
 * corner = 1;
 * border = 2 = corner + corner;
 * inner = 4 = border + border;
 * @param {number[][]} rectangles rectangles[i] = [ x, y, a, b ]; -- b, a, y, x;
 * @returns {boolean}
 */
function isRectangleCover(rectangles) {
    let topMax = -Infinity;
    let rightMax = -Infinity;
    let bottomMin = Infinity;
    let leftMin = Infinity;
    for (const rectangle of rectangles) {
        const top = rectangle[3];
        const right = rectangle[2];
        const bottom = rectangle[1];
        const left = rectangle[0];
        topMax = Math.max(topMax, top);
        rightMax = Math.max(rightMax, right);
        bottomMin = Math.min(bottomMin, bottom);
        leftMin = Math.min(leftMin, left);
    }
    const bigRectangle
        = new Array(topMax - bottomMin + 1)
            .fill(undefined)
            .map(() => new Array(rightMax - leftMin + 1).fill(0));
    for (const rectangle of rectangles) {
        const top = rectangle[3] - bottomMin;
        const right = rectangle[2] - leftMin;
        const bottom = rectangle[1] - bottomMin;
        const left = rectangle[0] - leftMin;
        //#region set four corner;
        // set (right, top);
        bigRectangle[top][right] += 1;
        // set (right, bottom);
        bigRectangle[bottom][right] += 1;
        // set (left, bottom);
        bigRectangle[bottom][left] += 1;
        // set (left, top);
        bigRectangle[top][left] += 1;
        //#endregion
        //#region set four border;
        // set top and bottom; -- x: from left to right;
        for (let x = left + 1; x < right; x++) {
            bigRectangle[top][x] += 2;
            bigRectangle[bottom][x] += 2;
        }
        // set right and left; -- y: from top to bottom;
        for (let y = top - 1; y > bottom; y--) {
            bigRectangle[y][right] += 2;
            bigRectangle[y][left] += 2;
        }
        //#endregion
        //#region set inner;
        for (let y = bottom + 1; y < top; y++) {
            for (let x = left + 1; x < right; x++) {
                bigRectangle[y][x] += 4;
            }
        }
        //#endregion
    }
    console.log(bigRectangle);
    const top = topMax - bottomMin;
    const right = rightMax - leftMin;
    const bottom = 0;
    const left = 0;
    //#region check corner;
    if (bigRectangle[top][right] !== 1
        || bigRectangle[bottom][right] !== 1
        || bigRectangle[bottom][left] !== 1
        || bigRectangle[top][left] !== 1
    ) {
        return false;
    }
    //#endregion
    //#region check border;
    // check top and bottom; -- x: left to right;
    for (let x = left + 1; x < right; x++) {
        if (bigRectangle[top][x] !== 2
            || bigRectangle[bottom][x] !== 2
        ) {
            return false;
        }
    }
    // check right and left; -- y: top to bottom;
    for (let y = top - 1; y > bottom; y--) {
        if (bigRectangle[y][left] !== 2
            || bigRectangle[y][right] !== 2
        ) {
            return false;
        }
    }
    //#endregion
    //#region check inner;
    for (let y = bottom + 1; y < top; y++) {
        for (let x = left + 1; x < right; x++) {
            if (bigRectangle[y][x] !== 4) {
                return false;
            }
        }
    }
    //#endregion
    return true;
}
/**
 * @param {number[]} rectangles
 * @returns {boolean}
 */
function isRectangleCoverKai(rectangles) {
    class Line {
        /**
         * @param {number} x
         * @param {number} y0 bottom;
         * @param {number} y1 top;
         * @param {boolean} isLeft
         */
        constructor(x, y0, y1, isLeft) {
            this.x = x;
            this.y0 = y0;
            this.y1 = y1;
            this.isLeft = isLeft;
        }
    }
    /**
     * @type {Line[]}
     */
    const lines = new Array();
    // const lines = new Array(rectangles.length * 2);
    for (const rectangle of rectangles) {
        const top = rectangle[3];
        const right = rectangle[2];
        const bottom = rectangle[1];
        const left = rectangle[0];
        const leftEdge = new Line(left, bottom, top, true);
        const rightEdge = new Line(right, bottom, top, false);
        lines.push(leftEdge, rightEdge);
    }
    lines.sort((a, b) => a.x !== b.x ? a.x - b.x : a.y0 - b.y0);
    const top = lines[lines.length - 1].y1;
    const right = lines[lines.length - 1].x;
    const bottom = lines[0].y0;
    const left = lines[0].x;
    let bgn = 0;
    let y1Log = bottom;
    while (bgn < lines.length && lines[bgn].x === left) {
        const line = lines[bgn];
        if (line.y0 !== y1Log) {
            return false;
        } else {
            y1Log = line.y1;
            bgn++;
        }
    }
    // now: bgn === the first inner line;
    let end = lines.length - 1;
    let y0Log = top;
    while (end >= 0 && lines[end].x === right) {
        const line = lines[end];
        if (line.y1 !== y0Log) {
            return false;
        } else {
            y0Log = line.y0;
            end--;
        }
    }
    // now: end === the last inner line;
    while (bgn <= end) {
        const x = lines[bgn].x;
        while (lines[bgn].x === x && bgn <= end) {
            // 分别组合左边和右边;
        }
    }
    return true;
}
