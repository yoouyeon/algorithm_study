/*
⭐️ 문제 정보 ⭐️
문제 : 790 - Domino and Tromino Tiling
레벨 : Medium
링크 : https://leetcode.com/problems/domino-and-tromino-tiling
*/

// ANCHOR 2026.07.14 풀이 (28분 소요)
function numTilings(n: number): number {
    const MOD = 10 ** 9 + 7;

    const dp = new Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;

    for (let i = 4; i <= n; i++) {
        dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % MOD;
    }

    return dp[n];
};
