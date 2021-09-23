export { maxProfit };
/**
 * @param {number[]} prices
 * @returns {number}
 */
const maxProfit = function(prices) {
    let result = 0;
    let minPrice = prices[0];
    for (const i of prices) {
        if (i <= minPrice) {
            minPrice = i;
        } else {
            result = Math.max(i - minPrice, result);
        }
    }
    return result;
    // let result = 0;
    // // prices中索引 - 从左到右直到该索引的最低价格;
    // const buyMap = new Array(prices.length);
    // // prices中索引 - 从右到左直到该索引的最高价格;
    // const saleMap = new Array(prices.length);
    // buyMap[0] = prices[0];
    // saleMap[prices.length - 1] = prices[prices.length - 1];
    // for (let i = 1; i < prices.length; i++) {
    //     buyMap[i] = Math.min(buyMap[i - 1], prices[i]);
    // }
    // for (let i = prices.length - 2; i > - 1; i--) {
    //     saleMap[i] = Math.max(saleMap[i + 1], prices[i]);
    // }
    // for (let i = 0; i < prices.length; i++) {
    //     const profit = saleMap[i] - buyMap[i];
    //     result = Math.max(result, profit);
    // }
    // return result;
}
