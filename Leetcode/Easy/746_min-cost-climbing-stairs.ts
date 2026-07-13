/*
⭐️ 문제 정보 ⭐️
문제 : 746 - Min Cost Climbing Stairs
레벨 : Easy
링크 : https://leetcode.com/problems/min-cost-climbing-stairs
*/

// ANCHOR 2026.07.13 풀이 (4분 소요)
function minCostClimbingStairs(cost: number[]): number {
    const dp = new Array(1000);
    const n = cost.length;
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]);
    }

    return dp[n];
};
