/*
⭐️ 문제 정보 ⭐️
문제 : 3898 - Find the Degree of Each Vertex
레벨 : Easy
링크 : https://leetcode.com/problems/find-the-degree-of-each-vertex
*/

// ANCHOR 2026.04.16 풀이 (3분 소요)
function findDegrees(matrix: number[][]): number[] {
  const answer = [];
  for (let idx = 0; idx < matrix.length; idx++) {
    // 첫번째 시도 : 무지성풀이
    // answer.push(matrix[idx].filter((x) => x === 1).length);
    // 두번째 시도 : 인접 행렬의 특성 활용하기 - 인접 행렬에서 degree는 곧 행의 합
    answer.push(matrix[idx].reduce((sum, x) => sum + x, 0));
  }
  return answer;
}
