/*
⭐️ 문제 정보 ⭐️
문제 : 714 - Best Time to Buy and Sell Stock with Transaction Fee
레벨 : Medium
링크 : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee
*/

// ANCHOR 2026.07.22 풀이 (7분 소요)
function maxProfit(prices: number[], fee: number): number {
    if (prices.length === 0) return 0;

    let cash = 0;
    let hold = -prices[0];

    for (let i = 1; i < prices.length; i++) {
        const prevCash = cash;
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, prevCash - prices[i]);
    }

    return cash;
};
