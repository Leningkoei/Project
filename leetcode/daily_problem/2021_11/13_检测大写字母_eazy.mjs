export { detectCapitalUse };
/**
 * @param {string} word
 * @returns {boolean}
 */
function detectCapitalUse(word) {
    return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
}
