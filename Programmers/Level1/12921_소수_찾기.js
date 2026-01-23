/* 
⭐️ 문제 정보 ⭐️
문제 : 12921 - 소수 찾기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12921
*/

// ANCHOR - 2026.01.23 풀이
/**
 * NOTE
 * 에라토스테네스의 체
 */
function countPrime(n) {
  const isPrime = Array.from({length: n + 1}).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  
  for (let num = 2; num * num <= n; num++) {
      if (isPrime[num] === false) continue;
      for (let k = num * num; k <= n; k += num) {
          isPrime[k] = false;
      }
  }
  
  return isPrime.filter((value) => value).length;
}

function solution(n) {
  return countPrime(n);
}
