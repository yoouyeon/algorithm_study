/*
⭐️ 문제 정보 ⭐️
문제 : 1137 - N-th Tribonacci Number
레벨 : Easy
링크 : https://leetcode.com/problems/n-th-tribonacci-number/description
*/

// ANCHOR 2026.07.13 풀이 (7분 소요)
function tribonacci(n: number): number {
    const memo = new Array(38).fill(0);
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 1;

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2] + memo[i-3];
    }

    return memo[n];
};
