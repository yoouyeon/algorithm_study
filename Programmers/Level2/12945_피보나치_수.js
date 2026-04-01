/*
⭐️ 문제 정보 ⭐️
문제 : 12945 - 피보나치 수
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12945
*/

// ANCHOR 2026.04.01 풀이 (7분 소요)
function solution(n) {
  // DP!
  const MOD = 1234567;
  const f = new Array(n + 1).fill(0);
  f[0] = 0;
  f[1] = 1;

  for (let num = 2; num <= n; num++) {
    f[num] = (f[num - 1] + f[num - 2]) % MOD;
  }

  return f[n] % MOD;
}
