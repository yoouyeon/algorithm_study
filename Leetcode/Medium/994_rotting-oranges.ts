/*
⭐️ 문제 정보 ⭐️
문제 : 994 - Rotting Oranges
레벨 : Medium
링크 : https://leetcode.com/problems/rotting-oranges
*/

// ANCHOR 2026.05.29 풀이 (31분 소요)
function orangesRotting(grid: number[][]): number {
  // 이거 완전 백준 토마토랑 동일한 문제 아님?

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const fresh = new Set();
  const queue = [];
  let front = 0;

  // 현황 분석
  const m = grid.length;
  const n = grid[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) fresh.add(r * n + c);
      else if (grid[r][c] === 2) queue.push([r, c, 0]);
    }
  }

  if (fresh.size === 0) return 0; // 신선한 토마토가 없음

  // BFS
  while (front < queue.length) {
    const [row, col, minute] = queue[front++];
    // 썩은 것 근처에서 썩힐 수 있는 것을 큐에 담는다.
    for (const [dr, dc] of dirs) {
      const nRow = row + dr;
      const nCol = col + dc;
      if (nRow < 0 || nRow >= m || nCol < 0 || nCol >= n) continue;
      const key = nRow * n + nCol;
      if (fresh.has(key)) {
        fresh.delete(key);
        // 신선한 것 개수 확인
        if (fresh.size === 0) return minute + 1;
        queue.push([nRow, nCol, minute + 1]);
      }
    }
  }

  return -1;
}
