/*
⭐️ 문제 정보 ⭐️
문제 : 1466 - Reorder Routes to Make All Paths Lead to the City Zero
레벨 : Medium
링크 : https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero
*/

// ANCHOR 2026.05.27 풀이 (28분 소요)
function minReorder(n: number, connections: number[][]): number {
  // 0에서부터 다른 도시로 모두 이동할 수 있게 하기
  // 길에는 방향이 있다.
  // 루트인 0으로부터 다른 도시로 (leaf) 이동할 수 있게 해주면 됨
  // ---

  // 길 정보 저장하기
  const roads = new Map(); // key : 시작점, value : [끝점, 방향 ('original' | 'reverse')]
  for (const connection of connections) {
    const [from, to] = connection;
    roads.set(from, [...(roads.get(from) ?? []), [to, 'original']]);
    roads.set(to, [...(roads.get(to) ?? []), [from, 'reverse']]);
  }

  // 0부터 시작해서 탐색하기... bfs로 해야겠다.
  let answer = 0;
  const visited = new Set([0]);
  const queue = [0]; // 현재 노드
  let front = 0;

  while (front < queue.length) {
    const curr = queue[front++];
    const currRoads = roads.get(curr);
    for (const road of currRoads) {
      const [to, dir] = road;
      if (visited.has(to)) continue;
      visited.add(to);
      if (dir === 'original') answer++; // 잊지 말기! 우리는 지금 0에서 멀어지는 방향으로 탐색 중!
      queue.push(to);
    }
  }

  return answer;
}
