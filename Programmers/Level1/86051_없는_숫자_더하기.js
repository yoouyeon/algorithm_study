/*
⭐️ 문제 정보 ⭐️
문제 : 86051 - 없는 숫자 더하기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/86051
*/

// ANCHOR 2026.04.01 풀이 (2분 소요)
function solution(numbers) {
  // 0부터 9까지의 수 중에서 배열에 없는 숫자들을 더한 값 = 0부터 9까지의 수의 합에서 배열의 숫자들의 합을 뺀 값
  const total = 45; // 0부터 9까지의 수의 합
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return total - sum;
}
