/*
⭐️ 문제 정보 ⭐️
문제 : 122 - Best Time to Buy and Sell Stock II
레벨 : Medium
링크 : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
*/

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
