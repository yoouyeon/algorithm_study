/*
 * [122] Best Time to Buy and Sell Stock II
 */

function maxProfit(prices: number[]): number {
  let totalProfit = 0;

  for (let today = 1; today < prices.length; today++) {
    const profit = prices[today] - prices[today - 1];
    if (profit > 0) {
      totalProfit += profit;
    }
  }

  return totalProfit;
}
