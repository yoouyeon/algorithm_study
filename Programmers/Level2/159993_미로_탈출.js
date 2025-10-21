/* 
⭐️ 문제 정보 ⭐️
문제 : 159993 - 미로 탈출
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/159993
*/

/** NOTE
 * - BFS 2번이 관건
 * - 굳이 시작 지점부터의 거리를 계속 갖고 다닐 필요가 없다 => 이러면 BFS 2번 사이에 거리를 저장하고 있어야 해서 구조가 복잡해진다.
 * - 첫번째 BFS : 시작 지점에서 레버까지의 최단 거리 계산
 * - 두번째 BFS : 레버에서 출구까지의 최단 거리 계산
 * - 두 거리의 합이 답이 된다.
 * - 각 BFS 결과 도달할 수 없는 경우가 있다면 -1 반환
 * - 큐 구현을 Map으로 해봤다.
 */

class Queue {
  queue = new Map();
  head = 0;
  tail = 0;

  constructor() {}

  get size() {
    return this.tail - this.head;
  }

  enqueue(element) {
    this.queue.set(this.tail++, element);
  }

  dequeue() {
    const ret = this.queue.get(this.head);
    if (!ret) {
      return undefined;
    }
    this.queue.delete(this.head++);
    return ret;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

function BFS(maps, start, goal) {
  const R = maps.length;
  const C = maps[0].length;
  const visited = Array.from({ length: R }, () =>
    Array.from({ length: C }, () => false)
  ); // 숫자 값을 저장해서 거리 저장에 활용할수도 있음
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = new Queue();

  queue.enqueue([start, 0]);
  visited[start.r][start.c] = true;

  while (!queue.isEmpty()) {
    const [pos, dist] = queue.dequeue();

    if (pos.r === goal.r && pos.c === goal.c) {
      return dist;
    }

    // 상하좌우 이동, 이동 가능한 경우에만 큐에 넣는다.
    for (const [dirR, dirC] of dir) {
      const newR = pos.r + dirR;
      const newC = pos.c + dirC;

      if (newR < 0 || newR >= R || newC < 0 || newC >= C) continue;
      if (maps[newR][newC] === "X") continue;
      if (visited[newR][newC]) continue;

      visited[newR][newC] = true;
      queue.enqueue([{ r: newR, c: newC }, dist + 1]);
    }
  }

  // goal에 도달할 수 없는 경우
  return -1;
}

function solution(maps) {
  const R = maps.length;
  const C = maps[0].length;

  // 지도 탐색
  let S, E, L;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (maps[r][c] === "S") S = { r, c };
      else if (maps[r][c] === "E") E = { r, c };
      else if (maps[r][c] === "L") L = { r, c };
    }
  }

  // S-L 최단 거리 구하기
  const distToLever = BFS(maps, S, L);
  if (distToLever === -1) return -1;

  // L-E 최단 거리 구하기
  const distToExit = BFS(maps, L, E);
  if (distToExit === -1) return -1;

  return distToLever + distToExit;
}
