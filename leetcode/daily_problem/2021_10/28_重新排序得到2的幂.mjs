export { reorderedPowerOf2 };
/**
 * 最伟大的品德是耐心;
 * @param {number} n
 * @returns {boolean}
 */
function reorderedPowerOf2(n) {
    const nStr = n.toString();
    const nBitArr = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    const map = new Set();
    //         0  1  2  3  4  5  6  7  8  9;
    map.add(([ 0, 1, 0, 0, 0, 0, 0, 0, 0, 0 ]).toString());  //  0 | 1;
    map.add(([ 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ]).toString());  //  1 | 2;
    map.add(([ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ]).toString());  //  2 | 4;
    map.add(([ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ]).toString());  //  3 | 8;
    map.add(([ 0, 1, 0, 0, 0, 0, 1, 0, 0, 0 ]).toString());  //  4 | 16;
    map.add(([ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ]).toString());  //  5 | 32;
    map.add(([ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0 ]).toString());  //  6 | 64;
    map.add(([ 0, 1, 1, 0, 0, 0, 0, 0, 1, 0 ]).toString());  //  7 | 128;
    map.add(([ 0, 0, 1, 0, 0, 1, 1, 0, 0, 0 ]).toString());  //  8 | 256;
    map.add(([ 0, 1, 1, 0, 0, 1, 0, 0, 0, 0 ]).toString());  //  9 | 512;
    map.add(([ 1, 1, 1, 0, 1, 0, 0, 0, 0, 0 ]).toString());  // 10 | 1024;
    map.add(([ 1, 0, 1, 0, 1, 0, 0, 0, 1, 0 ]).toString());  // 11 | 2048;
    map.add(([ 1, 0, 0, 0, 1, 0, 1, 0, 0, 1 ]).toString());  // 12 | 4096;
    map.add(([ 0, 1, 1, 0, 0, 0, 0, 0, 1, 1 ]).toString());  // 13 | 8192;
    map.add(([ 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ]).toString());  // 14 | 16384;
    map.add(([ 0, 0, 1, 1, 0, 0, 1, 1, 1, 0 ]).toString());  // 15 | 3768;
    map.add(([ 0, 0, 0, 1, 0, 2, 2, 0, 0, 0 ]).toString());  // 16 | 65536;
    map.add(([ 1, 2, 1, 1, 0, 0, 0, 1, 0, 0 ]).toString());  // 17 | 131072;
    map.add(([ 0, 1, 2, 0, 2, 0, 1, 0, 0, 0 ]).toString());  // 18 | 262144;
    map.add(([ 0, 0, 2, 0, 1, 1, 0, 0, 2, 0 ]).toString());  // 19 | 524288;
    map.add(([ 1, 1, 0, 0, 1, 1, 1, 1, 1, 0 ]).toString());  // 20 | 1048576;
    map.add(([ 1, 1, 2, 0, 0, 1, 0, 1, 0, 1 ]).toString());  // 21 | 2097152;
    map.add(([ 1, 1, 0, 1, 3, 0, 0, 0, 0, 1 ]).toString());  // 22 | 4194304;
    map.add(([ 1, 0, 0, 1, 0, 0, 1, 0, 4, 0 ]).toString());  // 23 | 8388608;
    map.add(([ 0, 2, 1, 0, 0, 0, 2, 3, 0, 0 ]).toString());  // 24 | 16777216;
    map.add(([ 0, 0, 1, 3, 2, 2, 0, 0, 0, 0 ]).toString());  // 25 | 33554432;
    map.add(([ 1, 1, 0, 0, 1, 0, 2, 1, 2, 0 ]).toString());  // 26 | 67108864;
    map.add(([ 0, 2, 2, 1, 1, 0, 0, 2, 1, 0 ]).toString());  // 27 | 134217728;
    map.add(([ 0, 0, 1, 1, 2, 2, 2, 0, 1, 0 ]).toString());  // 28 | 268435456;
    map.add(([ 1, 1, 1, 1, 0, 1, 1, 1, 1, 1 ]).toString());  // 29 | 536870912;
    for (const bit of nStr) {
        const bitIndex = parseInt(bit);
        nBitArr[bitIndex]++;
    }
    return map.has(nBitArr.toString());
}
