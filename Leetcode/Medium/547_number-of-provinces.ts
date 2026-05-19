/*
⭐️ 문제 정보 ⭐️
문제 : 547 - Number of Provinces
레벨 : Medium
링크 : https://leetcode.com/problems/number-of-provinces
*/

// ANCHOR 2026.05.19 풀이 (17분 소요)
function findCircleNum(isConnected: number[][]): number {
  // 직간접적으로 연결된 도시들의 그룹의 개수를 세는 문제
  // 나는 BFS가 좋다.

  const visited = new Set();
  const n = isConnected.length;
  let answer = 0;

  for (let idx = 0; idx < n; idx++) {
    if (visited.has(idx)) continue;
    // 해당 도시를 기준으로 BFS를 돌림
    const queue = [idx];
    visited.add(idx);
    let front = 0;
    answer++; // BFS의 시작 -> province 하나가 만들어진다는 것
    while (front < queue.length) {
      const curr = queue[front++];
      for (let j = 0; j < n; j++) {
        if (!visited.has(j) && isConnected[curr][j]) {
          queue.push(j);
          visited.add(j);
        }
      }
    }
  }

  return answer;
}
