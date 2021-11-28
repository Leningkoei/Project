export default findAnagrams
/**
 * @param {string} s
 * @param {string} p
 * @returns {number[]}
 */
function findAnagrams(s, p) {
    const result = []
    const map = new Map()
    for (const char of p) {
        const count = map.get(char)
        map.set(char, count ? count + 1 : 0)
    }
    for (let i = 0; i < s.length; i++) {
        const microMap = new Map(map)
        let offset = 0
        while (offset < p.length) {
            const char = s[i + offset]
            const count = microMap.get(char)
            if (count) {
                microMap.set(char, count - 1)
                offset++
            } else {
                break
            }
        }
        if (offset === p.length) {
            result.push(i)
        }
    }
    return result
}
