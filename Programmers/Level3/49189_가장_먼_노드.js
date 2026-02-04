/* 
⭐️ 문제 정보 ⭐️
문제 : 49189 - 가장 먼 노드
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49189
*/

// ANCHOR : 26.02.04 풀이
/**
  APPROACH:
  하나의 노드에서 다른 노드"들"까지의 최단경로를 구해야 하는 문제이기 때문에 다익스트라 알고리즘을 먼저 생각했었음.
  하지만 이 문제는 모든 간선의 가중치가 1로 동일하기 때문에 다익스트라를 쓰지 않고 BFS만으로도 각 노드까지의 최단거리를 구할 수 있다.
*/
function solution(n, edge) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of edge) {
    adj[a].push(b);
    adj[b].push(a);
  }

  // -1은 아직 모르는 거리를 의미함
  // NOTE : BFS에서는 첫 방문 거리가 곧 최단거리이므로 (다익스트라처럼 갱신 x) Infinity 대신 -1을 쓴다.
  const dist = Array.from({ length: n + 1 }, () => -1);

  // BFS 시작
  dist[1] = 0; // 시작 지점
  const queue = [1];
  let head = 0;
  while (head < queue.length) {
    const front = queue[head++];
    const neighbors = adj[front];
    if (neighbors.length === 0) continue;

    neighbors.forEach((neighbor) => {
      if (dist[neighbor] !== -1) return;
      // 처음 방문하는 시점이 바로 최단거리이므로 주저없이 업데이트
      // 방문 기록은 겸사겸사
      dist[neighbor] = dist[front] + 1;
      queue.push(neighbor);
    });
  }

  const maxDist = Math.max(...dist);
  const answer = dist.filter((d) => d === maxDist).length;
  return answer;
}
