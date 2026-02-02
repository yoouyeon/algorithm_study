/* 
⭐️ 문제 정보 ⭐️
문제 : 43162 - 네트워크
레벨 : Level 3
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43162
*/

function solution(n, computers) {
  let answer = 0;
  const visited = new Uint8Array(n);

  function bfs(start) {
    const queue = [start];
    let head = 0;
    visited[start] = 1;

    while (head < queue.length) {
      const cur = queue[head++];

      for (let next = 0; next < n; next++) {
        if (computers[cur][next] === 0) continue;
        if (visited[next]) continue;

        visited[next] = 1;
        queue.push(next);
      }
    }
  }

  for (let start = 0; start < n; start++) {
    // 이미 어떤 네트워크에 속해 있는 경우는 제외한다.
    if (visited[start]) continue;
    bfs(start);
    answer++; // bfs 1번 = 네트워크 하나.
  }
  return answer;
}
