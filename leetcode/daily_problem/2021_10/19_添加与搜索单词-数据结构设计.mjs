export { WordDictionary };
class WordDictionary {
    constructor() {
        this.words = new Map();
    }
    /**
     * @param {string} word
     */
    addWord(word) {
        const rank = this.words.get(word.length);   // 获取同长度的words;
        if (rank) {
            rank.push(word);
        } else {
            this.words.set(word.length, [ word ]);
        }
    }
    /**
     * @param {string} word
     * @returns {boolean}
     */
    search(word) {
        const regExpString = `^${word}$`;
        const regExp = new RegExp(regExpString);
        const rank = this.words.get(word.length);
        if (rank) {
            for (const word of rank) {
                if (regExp.test(word)) {
                    return true;
                }
            }
        }
        return false;
    }
}
