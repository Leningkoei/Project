export { SummaryRanges };
/**
 * 朴素;
 */
const SummaryRanges = class {
    constructor() {
        this.result = [];
    }
    addNum(val) {
        for (var i = 0; i < this.result.length; i++) {
            if (val === this.result[i][0] - 1) {
                this.result[i][0] = val;
                break;
            } else if (val === this.result[i][1] + 1) {
                this.result[i][1] = val;
                if (i < this.result.length - 1 && this.result[i][1] === this.result[i + 1][0] - 1) {
                    this.result[i][1] = this.result[i + 1][1];
                    this.result.splice(i + 1, 1);
                }
                break;
            } else if (val >= this.result[i][0] && val <= this.result[i][1]) {
                break;
            }
        }
        if (i === this.result.length) {
            this.result.push([ val, val ]);
        }
    }
    getIntervals() {
        this.result.sort((a, b) => a[0] - b[0]);
        return this.result;
    }
}
/**
 * 并查集;
 */
const SummaryRangesKai = class {
    constructor() {
        this.nums = new Array(10002);                   // [ undefined, 2, ... ];
    }
    addNum(val) {
        if (this.nums[val] === undefined) {
            this.nums[val] = val + 1;
        } else {
            this.findAndUnion(val);
        }
        // this.nums[val] ? (this.nums[val] = val + 1) : this.findAndUnion(val);
    }
    findAndUnion(val) {                      // 2;
        if (this.nums[val] === undefined) {             // true;
            return val;                                 // return 2;
        } else {
            this.nums[val] = this.findAndUnion(this.nums[val]);
        }
        return this.nums[val];
        // return this.nums[val] ? val : (this.nums[val] = this.findAndUnion(this.nums[val]));
    }
    getIntervals() {
        const result = [];
        for (let i = 0; i < 10001;) {
            if (this.nums[i] !== undefined) {           // this.nums[1] !== undefined;
                let tmp = new Array(2);
                tmp[0] = i;                             // tmp[0] = 1;
                tmp[1] = this.findAndUnion(this.nums[i]) - 1;  // this.find(2) - 1 = 1;
                i = tmp[1] + 1;                         // i = 2;
                result.push(tmp);                       // result = [ [ 1, 1 ] ];
            } else {
                i++;
            }
        }
        return result;
    }
}
