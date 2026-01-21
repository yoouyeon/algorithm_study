/* 
⭐️ 문제 정보 ⭐️
문제 : 12940 - 최대공약수와 최소공배수
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12940
*/

// ANCHOR - 2026.01.21풀이
/**
 * NOTE
 * 유클리드 호제법 기억하기
 */
function Euclidean (a, b) {
  if (b === 0) {
      return a;
  }
  return Euclidean(b, a % b);
}

function solution(n, m) {
  const gcd = Euclidean(n, m);
  const lcm = parseInt(n * m / gcd);
  return [gcd, lcm];
}