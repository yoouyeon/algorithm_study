/*
⭐️ 문제 정보 ⭐️
문제 : 1926 - Nearest Exit from Entrance in Maze
레벨 : Medium
링크 : https://leetcode.com/problems/nearest-exit-from-entrance-in-maze
*/

// ANCHOR 2026.05.29 풀이 (23분 소요)
function nearestExit(maze: string[][], entrance: number[]): number {
  // 미로를 탈출하는 가장 짧은 경로 찾기
  // 미로를 탈출하는 법 : 미로의 가장자리에 도달하면 됨
  // BFS!
  const m = maze.length;
  const n = maze[0].length;

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const queue = [];
  let front = 0;
  const visited = new Set();

  queue.push([entrance[0], entrance[1], 0]); // row, col, dist
  visited.add(`${entrance[0]}, ${entrance[1]}`);

  while (front < queue.length) {
    const [row, col, dist] = queue[front++];
    // 탈출 확인
    if (!(row === entrance[0] && col === entrance[1]) && (row === 0 || row === m - 1 || col === 0 || col === n - 1)) {
      // 첫번째 시도 : answer를 계속 업데이트 해줬었음
      // BFS 특성상 가장 처음 만나는 답이 최단거리임. 따라서 그냥 여기서 반환해주는게 불필요한 방복을 줄인다.
      return dist;
    }

    for (let d = 0; d < 4; d++) {
      const nRow = row + dy[d];
      const nCol = col + dx[d];
      if (nRow < 0 || nRow >= m || nCol < 0 || nCol >= n) continue;
      if (maze[nRow][nCol] === '+') continue;
      const key = `${nRow}, ${nCol}`;
      if (visited.has(key)) continue;
      visited.add(key);
      queue.push([nRow, nCol, dist + 1]);
    }
  }

  return -1;
}
