/*
⭐️ 문제 정보 ⭐️
문제 : 1722 - Minimize Hamming Distance After Swap Operations
레벨 : Medium
링크 : https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations
*/

// ANCHOR 2026.04.21 풀이 (15분 소요)
function minimumHammingDistance(source: number[], target: number[], allowedSwaps: number[][]): number {
  const n = source.length;

  // 1. 인접 리스트 그래프 구성
  const graph = Array.from({ length: n }, () => []);
  for (const [a, b] of allowedSwaps) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 2. BFS로 연결 컴포넌트 추출
  const visited = new Array(n).fill(false);
  let hammingDistance = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    // BFS: 현재 컴포넌트의 인덱스 수집
    const indices = [];
    const queue = [i];
    visited[i] = true;

    while (queue.length > 0) {
      const cur = queue.shift()!;
      indices.push(cur);
      for (const next of graph[cur]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }

    // 3. 컴포넌트 내 source 빈도수 계산
    const freq = new Map();
    for (const idx of indices) {
      freq.set(source[idx], (freq.get(source[idx]) ?? 0) + 1);
    }

    // 4. target과 매칭
    for (const idx of indices) {
      const t = target[idx];
      if (freq.get(t) > 0) {
        freq.set(t, freq.get(t) - 1);
      } else {
        hammingDistance++;
      }
    }
  }

  return hammingDistance;
}
