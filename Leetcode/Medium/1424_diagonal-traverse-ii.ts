/*
⭐️ 문제 정보 ⭐️
문제 : 1424 - Diagonal Traverse II
레벨 : Medium
링크 : https://leetcode.com/problems/diagonal-traverse-ii
*/

// ANCHOR 2026.04.15 풀이 (20분 소요)
function findDiagonalOrder(nums: number[][]): number[] {
  // 이차원 배열을 일일이 순회하면 N = 10^5 에서 O(N^2)의 시간복잡도를 갖는다.
  // 그런데 sum(nums[i].length) ≤ 10^2이니까 실제 존재하는 원소만 방문하면 O(10^5)로 충분.
  // 원소 그대로를 순회해 줍시다.
  // (힌트를 슬쩍 봤습니다.)
  // 하나의 대각선 안에 있는 것들을 정리해보기
  // (0, 0)
  // (1, 0), (0, 1)
  // (2, 0), (1, 1), (0, 2)
  // ...
  // row와 col의 합이 작은 순서대로 정렬, 합이 같으면 row 오름차순으로 정렬하면 될듯

  const tuples = [];
  for (let row = 0; row < nums.length; row++) {
    for (let col = 0; col < nums[row].length; col++) {
      tuples.push({ row, col, num: nums[row][col] });
    }
  }

  return tuples
    .sort((a, b) => (a.row + a.col === b.row + b.col ? b.row - a.row : a.row + a.col - (b.row + b.col)))
    .map((tuple) => tuple.num);
}
