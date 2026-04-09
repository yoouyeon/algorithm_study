/*
⭐️ 문제 정보 ⭐️
문제 : 2373 - Largest Local Values in a Matrix
레벨 : Easy
링크 : https://leetcode.com/problems/largest-local-values-in-a-matrix/
*/

// ANCHOR 2026.04.09 풀이 (17분 소요)
function largestLocal(grid: number[][]): number[][] {
  const n = grid.length;
  const maxLocal = Array.from({ length: n - 2 }, () => new Array(n - 2));

  // grid[i+1][j+1] 을 중심으로 하는 3*3 행렬의 최댓값 구하기
  // 겹치는 부분이 많아서 그냥 무작정 Max값을 비교하긴 좀 신경쓰입니다.
  // 한다면 이중for문 돌려서 범위의 원소들 수집해서 Math.max 썼을듯.
  // 그런데 다시 보니 n이 100으로 꽤 적다. 그래서 그냥 하기로 했습니다.
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      maxLocal[i][j] = Math.max(
        grid[i][j],
        grid[i + 1][j],
        grid[i + 2][j],
        grid[i][j + 1],
        grid[i + 1][j + 1],
        grid[i + 2][j + 1],
        grid[i][j + 2],
        grid[i + 1][j + 2],
        grid[i + 2][j + 2],
      );
    }
  }

  return maxLocal;
}
