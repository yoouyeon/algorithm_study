/* 
⭐️ 문제 정보 ⭐️
문제 : 12928 - 약수의 합
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12928
*/

// ANCHOR - 2026.01.20 풀이
/**
 * NOTE
 * 약수는 항상 쌍으로 존재하기 때문에 √n (i * i <= n) 까지만 탐색하면 된다는 점을 잊지 말기
 */
function getDivisors(n) {
  const divisors = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (n / i !== i) {
        divisors.push(n / i);
      }
    }
  }

  return divisors;
}

function solution(n) {
  return getDivisors(n).reduce((acc, cur) => acc + cur, 0);
}
