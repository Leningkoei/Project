export { getHint };
/**
 * @param {string} secret
 * @param {string} guess `secret.length === guess.length`;
 * @returns {string} format: `${Bulls}A${Cows}B`;
 */
function getHint(secret, guess) {
    let bullCount = 0;
    let cowCount = 0;
    const secretCount = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
    }
    const guessCount = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0
    }
    for (let i = 0; i < secret.length; i++) {
        const secretNum = secret[i];
        const guessNum = secret[i];
        if (secretNum === guessNum) {
            // this number is a bull number;
            bullCount++;
        } else {
            // this number is not a bull number;
            secretCount[secretNum]++;
            guessCount[guessNum]++;
        }
    }
    for (let i = 0; i < 10; i++) {
        const secretNumCount = secretCount[i];
        const guessNumCount = guessCount[i];
        cowCount += Math.min(secretNumCount, guessNumCount);
    }
    return `${bullCount}A${cowCount}B`;
}
