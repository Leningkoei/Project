const leetcode = leetcode || {};
/**
 * time out;
 * @param {number[]} nums
 * @returns {number}
 */
const findNumberOfLTS = function(nums) {
    const myFunction = function(i, count) {
        if (nextMap[i].length === 0) {
            if (count > maxLength) {
                maxLength = count;
                result = 1;
            } else if (count === maxLength) {
                result++;
            }
            return;
        }
        for (const iNext of nextMap[i]) {
            myFunction(iNext, count + 1);
        }
    }
    let result = 0;
    let maxLength = 1;
    const nextMap = new Array(nums.length).fill(undefined).map(() => []);
    for (let i = 0; i < nums.length; i++) {
        let minNext = Infinity;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                if (nums[j] < minNext) {
                    minNext = nums[j];
                    nextMap[i] = [j];
                } else if (nums[j] === minNext) {
                    nextMap[i].push(j);
                }
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        myFunction(i, 1);
    }
    return result;
}
/**
 * @param {number[]} nums
 * @returns {number}
 */
const findNumberOfLTSKai = function(nums) {
    // nums中索引 - 截止至该索引, nums中最长子序列长度;
    const myMap = new Array(nums.length).fill(1);
    // nums中索引 - 截止至该索引, nums中最多的最长子序列的个数;
    const myLog = new Array(nums.length).fill(1);
    let maxLength = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (myMap[i] < myMap[j] + 1) {
                    myMap[i] = myMap[j] + 1;
                    myLog[i] = myLog[j];
                } else if (myMap[i] === myMap[j] + 1) {
                    myLog[i] += myLog[j];
                }
            }
        }
        if (myMap[i] > maxLength) {
            maxLength = myMap[i];
            result = myLog[i];
        } else if (myMap[i] === maxLength) {
            result += myLog[i];
        }
    }
    return result;
}
