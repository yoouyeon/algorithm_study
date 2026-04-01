/*
⭐️ 문제 정보 ⭐️
문제 : 12900 - 2 x n 타일링
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12900
*/

// ANCHOR 2026.04.01 풀이 (13분 소요)
function solution(n) {
  // n = 1 -> (세로) => 1가지
  // n = 2 -> (세로 * 2) + (가로 * 2) => 2가지
  // n = 3 -> (세로 * 3) + (가로 * 2 + 세로 * 1) * 2 => 3가지
  // 피보나치!

  const MOD = 1000000007;
  // 피보나치 (메모이제이션 하지 않는 방식)
  let [a, b] = [0, 1];
  for (let i = 1; i <= n; i++) {
    [a, b] = [b, (a + b) % MOD];
  }

  return b % MOD;
}
