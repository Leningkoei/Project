export { groupAnagrams };
/**
 * @param {string[]} strs
 * @returns {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = new Map();
    for (const str of strs) {
        const template = str.split("").sort().toString();
        map.has(template) ? map.get(template).push(str) : map.set(template, [ str ]);
    }
    return [ ...map.values() ];
}
