export { shoppingOffers };
/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @returns {number}
 */
function shoppingOffers(price, special, needs) {
    let result = buySingely();
    function dfs(totalCost) {
        for (const bag of special) {
            if (deltaBag(bag)) {
                let totalCostCopy = totalCost;
                setNeed(bag);
                dfs(totalCost + bag[needs.length]);
                totalCostCopy += bag[needs.length];
                totalCostCopy += buySingely();
                result = Math.min(result, totalCostCopy);
                resetNeed(bag);
            }
        }
    }
    function deltaBag(bag) {
        for (let i = 0; i < needs.length; i++) {
            if (bag[i] > needs[i]) {
                return false;
            }
        }
        return true;
    }
    function setNeed(bag) {
        for (let i = 0; i < needs.length; i++) {
            needs[i] -= bag[i];
        }
    }
    function resetNeed(bag) {
        for (let i = 0; i < needs.length; i++) {
            needs[i] += bag[i];
        }
    }
    function buySingely() {
        let totalCost = 0;
        for (let i = 0; i < needs.length; i++) {
            totalCost += price[i] * needs[i];
        }
        return totalCost;
    }
    dfs(0);
    return result;
}
