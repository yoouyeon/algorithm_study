/*
⭐️ 문제 정보 ⭐️
문제 : 766 - Toeplitz Matrix
레벨 : Easy
링크 : https://leetcode.com/problems/toeplitz-matrix/
*/

// ANCHOR 2026.04.09 풀이 (10분 소요)
{
  function isToeplitzMatrix(matrix: number[][]): boolean {
    // 더 좋은 방법이 있을 것 같다...
    const m = matrix.length;
    const n = matrix[0].length;
    // 0번째 행을 시작점으로 하는 대각선 확인하기
    for (let col = 0; col < n; col++) {
      let y = 1;
      let x = col + 1;
      while (y < m && x < n) {
        if (matrix[y - 1][x - 1] !== matrix[y][x]) return false;
        y++;
        x++;
      }
    }

    // 0번째 행을 시작점으로 하는 대각선 확인하기
    for (let row = 1; row < m; row++) {
      let y = row + 1;
      let x = 1;
      while (y < m && x < n) {
        if (matrix[y - 1][x - 1] !== matrix[y][x]) return false;
        y++;
        x++;
      }
    }

    return true;
  }

  // 루프를 단순화하기
  function isToeplitzMatrix2(matrix: number[][]): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    // 각 원소를 오른쪽 아래의 이웃과만 비교한다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
      }
    }

    return true;
  }
}
