/*
⭐️ 문제 정보 ⭐️
문제 : 1844 - 게임 맵 최단거리
레벨 : Level2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/1844
*/

// ANCHOR 2026.03.31 풀이 (36분 소요)
function solution(maps) {
  // 가장 적은 칸을 지나서 상대 팀 진영으로 도착할 때 지나갈 수 있는 칸의 최솟값을 구하는 문제
  // 가장 빠르게 도착하는 것이 답이기 때문에...... BFS를 쓰겠습니다.
  // 방문 확인과 길이 기록을 함께 하는 dist
  const dist = Array.from({ length: maps.length }, (_, i) => new Array(maps[i].length).fill(-1));
  const queue = []; // BFS queue
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  // 상대 진영 위치 설정 (0-index로 변환)
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  // 초기 위치 설정 (0-index로 변환)
  queue.push([0, 0]);
  dist[0][0] = 1;
  let front = 0;

  // BFS
  while (front < queue.length) {
    const [x, y] = queue[front++];

    // 상하좌우 움직여주기
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      // 움직일 수 없는 범위라면 넘긴다
      if (nx < 0 || nx > n || ny < 0 || ny > m) continue;
      if (maps[nx][ny] === 0) continue;
      // 이미 방문한 범위라면 넘긴다.
      if (dist[nx][ny] !== -1) continue;
      // 길이 업데이트하고 큐에 추가
      dist[nx][ny] = dist[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  return dist[n][m];
}
