/*
⭐️ 문제 정보 ⭐️
문제 : 48 - Rotate Image
레벨 : Medium
링크 : https://leetcode.com/problems/rotate-image/
*/

// ANCHOR 2026.04.09 풀이 (40분 소요)
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // 시계방향으로 90도 돌려야 함...
  // [i][j] => [j][n-1-i] 이런 규칙이 보임.
  // [0][0] => [0][n-1]
  // [0][n-1] => [n-1][n-1]
  // [n-1][n-1] => [n-1][0]
  // [n-1][0] => [0][0]
  const n = matrix.length;
  for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
    for (let j = i; j <= n - 2 - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }
}
