/*
⭐️ 문제 정보 ⭐️
문제 : 338 - Counting Bits
레벨 : Easy
링크 : https://leetcode.com/problems/counting-bits
*/

// ANCHOR 2026.07.24 풀이 (10분 소요)
function countBits(n: number): number[] {
    const ans = [0]; // 0의 1의 개수는 0

    for (let i = 1; i <= n; i++) {
        // 맨 끝자리 비트를 어떻게 알 수 있는가...
        // 홀수면 1, 짝수면 0.
        // 이전 값에 짝/홀에 맞춰서 끝자리 더해주는 느낌. 오호!
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
};
