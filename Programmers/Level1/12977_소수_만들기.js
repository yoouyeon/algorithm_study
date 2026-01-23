/* 
⭐️ 문제 정보 ⭐️
문제 : 12977 - 소수 만들기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12977
*/

// ANCHOR - 2026.01.23 풀이
/**
 * NOTE
 * 조합으로 3개씩 뽑아서 소수인지 확인
 * (combinations 함수를 구현하는 것 보다 삼중 for문을 돌리는 것이 더 효율적이다. (공간복잡도 측면에서))
 */
function eratosthenes(n) {
  const isPrime = Array.from({ length: n + 1 }).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let num = 2; num * num <= n; num++) {
    if (isPrime[num] === false) continue;
    for (let k = num * num; k <= n; k += num) {
      isPrime[k] = false;
    }
  }

  return isPrime;
}

function solution(nums) {
  let answer = 0;
  const isPrime = eratosthenes(2997); // 주어진 숫자 3개를 더했을 때 나올 수 있는 최댓값이 2997 (1000+999+998)

  for (let a = 0; a < nums.length - 2; a++) {
    for (let b = a + 1; b < nums.length - 1; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        if (isPrime[nums[a] + nums[b] + nums[c]]) answer++;
      }
    }
  }

  return answer;
}
