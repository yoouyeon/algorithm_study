/*
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 2466 - Count Ways To Build Good Strings
 * 레벨 : Medium
 * 링크 : https://leetcode.com/problems/count-ways-to-build-good-strings
 */

// ANCHOR 2026.03.17 풀이
function countGoodStrings(low: number, high: number, zero: number, one: number): number {
  // 문제이해하기...
  // 문자열을 만드는 프로세스 : (빈 문자열에서 시작한다)
  // 1. "0"을 zero번 붙인다.
  // 2. "1"을 one번 붙인다.
  // 1, 2 중 하나를 여러 번 반복한다.
  // 좋은 문자열이란 위 프로세스로 만들어진 문자열 중에 길이가 low 이상 high 이하인 것.
  // 서로 다른 좋은 문자열의 개수를 구하시오. (너무 크니까 modulo 10^9+7 한 결과를 구하자)

  // 문제 풀기...
  // 1) 점화식
  // 길이가 정확히 i인 좋은 문자열을 구하는 경우의 수 = dp[i]
  // zero = 1, one = 1일 때
  // dp[2] = 4 ('00, 01, 10, 11')
  // dp[3] = 8 ('000', '001', '010', '100', '011', '101', '110', '111')
  // dp[n]은 dp[n-zero]에다가 0을 zero만큼 덧붙이는 경우와 dp[n-one]에다가 0을 one만큼 덧붙이는 경우의 합이다...! (깨달음)
  // 2) 초깃값
  // zero = 1, one = 1일 때
  // dp[1] = dp[0] + dp[0] = 2 ('0', '1') => dp[0]은 1로 두자.

  const MOD = 10 ** 9 + 7;
  const dp = Array.from({ length: high + 1 }, () => 0);
  dp[0] = 1;
  let answer = 0;

  for (let i = 1; i <= high; i++) {
    if (i >= zero) dp[i] = (dp[i] + dp[i - zero]) % MOD;
    if (i >= one) dp[i] = (dp[i] + dp[i - one]) % MOD;
    if (i >= low) answer = (answer + dp[i]) % MOD;
  }

  return answer;
}
