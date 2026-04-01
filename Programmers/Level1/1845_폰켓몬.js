/*
⭐️ 문제 정보 ⭐️
문제 : 1845 - 폰켓몬
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/1845
*/

// ANCHOR 2026.04.01 풀이 (8분 소요)
function solution(nums) {
  // N/2가 폰켓몬 종류보다 크다면 특정 폰켓몬을 1마리 이상 가져가야 한다 => 폰켓몬 종류만큼 가져갈 수 있음
  // N/2가 폰켓몬 종류보다 크지 않다면 그냥 N/2 종류를 1마리씩 가져가면 된다 => N/2종류 가져갈 수 있음
  const ponkedex = new Set(nums);
  const n = nums.length;
  return Math.floor(n / 2) > ponkedex.size ? ponkedex.size : Math.floor(n / 2);
}

// ANCHOR 2023.11.01 풀이
function solution(nums) {
  const ponketmonSet = new Set(nums);
  const half = nums.length / 2;
  // 폰켓몬 종류의 수 보다 N/2가 더 작다면 최대 N/2종류의 폰켓몬을 고를 수 있음
  // 폰켓몬 종류의 수 보다 N/2가 더 크다면 모든 폰켓몬을 최소 1개씩 고르는 방법이 가장 많은 종류의 폰켓몬을 선택하는 방법
  const answer = ponketmonSet.size > half ? half : ponketmonSet.size;
  return answer;
}
