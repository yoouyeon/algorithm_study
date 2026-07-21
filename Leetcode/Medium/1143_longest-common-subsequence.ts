/*
⭐️ 문제 정보 ⭐️
문제 : 1143 - Longest Common Subsequence
레벨 : Medium
링크 : https://leetcode.com/problems/longest-common-subsequence
*/

// ANCHOR 2026.07.21 풀이 (20분 소요)
function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({length: m + 1}, () => new Array(n + 1));

    // dp 초기값 설정
    for (let i = 0; i <= m; i++) dp[i][0] = 0;
    for (let j = 0; j <= n; j++) dp[0][j] = 0;

    // dp
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            const c1 = text1[i - 1];
            const c2 = text2[j - 1];

            if (c1 === c2) dp[i][j] = dp[i - 1][j - 1] + 1;
            else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[m][n];
};
