/*
⭐️ 문제 정보 ⭐️
문제 : 121 - Best Time to Buy and Sell Stock
레벨 : Easy
링크 : https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

/*
 * [121] Best Time to Buy and Sell Stock
 */
// prices 배열로 주어진 날들 중에서 사고 팔았을 때 얻을 수 있는 가장 큰 이익 구하기
function maxProfit(prices: number[]): number {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}
