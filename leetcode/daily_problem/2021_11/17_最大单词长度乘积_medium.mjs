export { maxProduct };
/**
 * @param {string[]} words
 * @returns {number}
 */
function maxProduct(words) {
    let result = 0;
    const masks = new Array(words.length).fill(0);
    const ruler = "a".charCodeAt();
    for (let i = 0; i < words.length; i++) {
        let mask = 0;
        for (const char of words[i]) {
            mask |= 1 << char.charCodeAt() - ruler;
        }
        masks[i] = mask;
    }
    for (let i = 0; i < words.length; i++) {
        // 注意握手;
        for (let j = i + 1; j < words.length; j++) {
            if (!(masks[i] & masks[j])) {
                result = Math.max(result, words[i].length * words[j].length);
            }
        }
    }
    return result;
}
