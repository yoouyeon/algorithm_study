/*
⭐️ 문제 정보 ⭐️
문제 : 2078 - Two Furthest Houses With Different Colors
레벨 : Easy
링크 : https://leetcode.com/problems/two-furthest-houses-with-different-colors
*/

// ANCHOR 2026.04.20 풀이 (11분 소요)
function maxDistance(colors: number[]): number {
  // 다른 숫자 사이의 거리가 가장 먼 것을 구하면 됨.
  // 모든 경우에서, 한쪽 끝은 배열의 가장 끝에 있어야 함 (가장 먼 것을 구해야 하니까, 만약에 끝에 다른 색깔이 있다면 그 색을 선택하는게 가장 먼 것이 되는 경우이다.)
  // 그 끝이 왼쪽이 될지, 오른쪽이 될지 모르기 때문에 두 경우를 모두 구해서 긴 것을 반환해 줄 계획임

  // 1. 왼쪽 끝(0)에서 가장 먼 길이 구하기
  let right = colors.length - 1;
  while (colors[0] === colors[right]) right--;
  const leftMax = right - 0;

  // 2. 오른쪽 끝(colors.length - 1)에서 가장 먼 길이 구하기
  let left = 0;
  while (colors[colors.length - 1] === colors[left]) left++;
  const rightMax = colors.length - 1 - left;

  return Math.max(leftMax, rightMax);
}
