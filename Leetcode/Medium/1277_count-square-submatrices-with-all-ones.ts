/*
⭐️ 문제 정보 ⭐️
문제 : 1277 - Count Square Submatrices with All Ones
레벨 : Medium
링크 : https://leetcode.com/problems/count-square-submatrices-with-all-ones/
*/

// ANCHOR 2026.04.09 풀이 (26분 소요)
function countSquares(matrix: number[][]): number {
  // 부분 행렬의 개수를 세는 가산표? => 우와 이게 DP로 풀라는 얘기였구나.
  const m = matrix.length;
  const n = matrix[0].length;
  // dp[i][j]: matrix[i][j]를 우하단 꼭짓점으로 하는 정사각형의 개수
  // 첫 행/열 처리를 위해 한칸 더 크게 만듦
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  let answer = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === 0) dp[i][j] = 0;
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      answer += dp[i][j];
    }
  }

  return answer;
}
