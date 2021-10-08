export { findRepeatedDnaSequences };
/**
 * @param {string} s
 * @returns {string[]}
 */
const findRepeatedDnaSequences = function(s) {
    if (s.length <= 10) {
        return [];
    }
    // const result = new Set();
    const result = [];
    const map = {
        "A": 0,
        "C": 1,
        "G": 2,
        "T": 3
    }
    // const log = new Set();
    const log = new Map();
    let queue = 0;
    for (let char = 0; char < 9; char++) {
        const charNum = map[s[char]];
        queue = (queue << 2) | charNum;
    }
    for (let char = 9; char < s.length; char++) {
        const charNum = map[s[char]];
        queue = ((queue << 2) | charNum) & (1 << 20) - 1;
        // log.has(queue) ? result.add(s.slice(char - 9, char + 1)) : log.add(queue);
        if (log.has(queue)) {
            const count = log.get(queue);
            if (count === 1) {
                result.push(s.slice(char - 9, char + 1));
            }
            log.set(queue, count + 1);
        } else {
            log.set(queue, 1);
        }
    }
    return [ ...result ];
}
