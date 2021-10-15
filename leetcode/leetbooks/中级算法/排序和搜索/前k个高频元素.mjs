export { topKFrequent };
/**
 * 排序;
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrequent(nums, k) {
    const result = new Array(k);
    const map = new Map();
    for (const num of nums) {
        const count = map.get(num);
        map.set(num, count ? count + 1 : 1);
    }
    const mapKai = [ ...map ].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < k; i++) {
        result[i] = mapKai[i][0];
    }
    return result;
}
/**
 * 维护xx堆;
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrequent(nums, k) {
    const result = new Array(k);
    const resultMap = new Array(k).fill(undefined).map(() => [ undefined, -Infinity ]);
    const map = new Map();
    for (const num of nums) {
        const count = map.get(num);
        map.set(num, count ? count + 1 : 1);
    }
    for (const elem of map) {
        // define 大根堆 new -> small -> big, 小顶堆 new -> big -> small; -- 总之"大根", "小顶"都是描述堆中最后1个元素的;
        // 大根堆;
        //#region
        // if (elem[1] > resultMap[0][1]) {
        //     // 冒泡进大根堆;
        //     resultMap[0] = elem;
        //     for (let i = 1; i < k; i++) {
        //         if (resultMap[i - 1][1] > resultMap[i][1]) {
        //             [ resultMap[i - 1], resultMap[i] ] = [ resultMap[i], resultMap[i - 1] ];
        //         } else {
        //             break;
        //         }
        //     }
        //     // 2分进大根堆; -- Array.prototype.shift()出队首(最小);
        //     resultMap.shift();
        //     const target = elem[1];
        //     let left = 0;
        //     let right = k - 1;
        //     while (left < right) {
        //         const mid = left + right >>> 1;
        //         if (resultMap[mid][1] < target) {
        //             left = mid + 1;
        //         } else if (resultMap[mid][1] >= target) {
        //             right = mid;
        //         }
        //     }
        //     // 此时left === 插入位置;
        //     resultMap.splice(left, 0, elem);
        // }
        //#endregion
        // 小顶堆;
        if (elem[1] > resultMap[k - 1][1]) {
            // 2分进小顶堆; -- Array.prototype.pop()出队尾(最小);
            resultMap.pop();
            const target = elem[1];
            let left = 0;
            let right = k - 1;
            while (left < right) {
                const mid = left + right >>> 1;
                if (resultMap[mid][1] >= target) {
                    left = mid + 1;
                } else if (resultMap[mid][1] < target) {
                    right = mid;
                }
            }
            // 此时left === 插入位置;
            resultMap.splice(left, 0, elem);
        }
    }
    for (let i = 0; i < k; i++) {
        result[i] = resultMap[i][0];
    }
    return result;
}
