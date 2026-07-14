/*
⭐️ 문제 정보 ⭐️
문제 : 62 - Unique Paths
레벨 : Medium
링크 : https://leetcode.com/problems/unique-paths
*/

// ANCHOR 2026.07.15 풀이 (11분 소요)
function uniquePaths(m: number, n: number): number {
    // 어떤 지점에 도착하는 방법 : 아래로 이동해서 도착하는 방법 + 오른쪽으로 이동해서 도착하는 방법
    const dp = Array.from({length: m}, () => new Array(n));

    dp[0][0] = 1

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) dp[i][j] = dp[i][j - 1];
            else if (j === 0) dp[i][j] = dp[i - 1][j];
            else dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
        }
    }

    return dp[m - 1][n - 1];
};
