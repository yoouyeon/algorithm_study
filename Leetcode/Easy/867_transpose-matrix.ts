/*
⭐️ 문제 정보 ⭐️
문제 : 867 - Transpose Matrix
레벨 : Easy
링크 : https://leetcode.com/problems/transpose-matrix/
*/

// ANCHOR 2026.04.09 풀이 (13분 소요)
function transpose(matrix: number[][]): number[][] {
  // 대각선으로 바꾸기! 쉽다쉬워
  const m = matrix.length;
  const n = matrix[0].length;
  const answer = Array.from({ length: n }, () => new Array(m));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answer[i][j] = matrix[j][i];
    }
  }

  return answer;
}
