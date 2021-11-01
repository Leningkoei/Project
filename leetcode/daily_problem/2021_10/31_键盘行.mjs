export { findWords };
/**
 * @param {string[]} words
 * @returns {string[]}
 */
function findWords(words) {
    // const result = [];
    const map = new Map();  // <char, rowIndex>
    map.set("q", 0);
    map.set("w", 0);
    map.set("e", 0);
    map.set("r", 0);
    map.set("t", 0);
    map.set("y", 0);
    map.set("u", 0);
    map.set("i", 0);
    map.set("o", 0);
    map.set("p", 0);
    map.set("a", 1);
    map.set("s", 1);
    map.set("d", 1);
    map.set("f", 1);
    map.set("g", 1);
    map.set("h", 1);
    map.set("j", 1);
    map.set("k", 1);
    map.set("l", 1);
    map.set("z", 2);
    map.set("x", 2);
    map.set("c", 2);
    map.set("v", 2);
    map.set("b", 2);
    map.set("n", 2);
    map.set("m", 2);
    // for (const word of words) {
    //     const rowIndex = map.get(word[0].toLowerCase());
    //     for (var i = 1; i < word.length; i++) {
    //         const char = word[i].toLowerCase();
    //         const thisRowIndex = map.get(char);
    //         if (thisRowIndex !== rowIndex) {
    //             break;
    //         }
    //     }
    //     if (i === word.length) {
    //         result.push(word);
    //     }
    // }
    return words.filter((word) => {
        const rowIndex = map.get(word[0].toLowerCase());
        let index = 1;
        while (index < word.length) {
            const char = word[index].toLowerCase();
            const thisRowIndex = map.get(char);
            if (thisRowIndex !== rowIndex) {
                break;
            } else {
                index++;
            }
        }
        return i === word.length;
    });
}
