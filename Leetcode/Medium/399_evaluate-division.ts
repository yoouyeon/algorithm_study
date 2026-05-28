/*
⭐️ 문제 정보 ⭐️
문제 : 399 - Evaluate Division
레벨 : Medium
링크 : https://leetcode.com/problems/evaluate-division
*/

// ANCHOR 2026.05.28 풀이 (28분 소요)
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  // a/b, b/c 값을 이용해서 a/c, ... 이런 값들을 찾으면 되는 것
  // 이런 문제를 그래프로 풀다니 짱신기하다.

  // 가중치 정보 정리하기
  const weight = new Map();
  for (let i = 0; i < equations.length; i++) {
    const [A, B] = equations[i];
    const value = values[i];
    if (weight.has(A)) weight.get(A).push([B, value]);
    else weight.set(A, [[B, value]]);
    if (weight.has(B)) weight.get(B).push([A, 1 / value]);
    else weight.set(B, [[A, 1 / value]]);
  }

  // 무난히 BFS로 가겠습니다.
  const answer = [];
  for (const query of queries) {
    const [C, D] = query;

    if (!weight.has(C) || !weight.has(D)) {
      answer.push(-1);
      continue;
    }

    if (C === D) {
      answer.push(1);
      continue;
    }

    const queue: [string, number][] = [[C, 1]];
    const visited = new Set<string>([C]);
    let front = 0;
    let result = -1;

    while (front < queue.length) {
      const [node, product] = queue[front++];

      for (const [next, w] of weight.get(node)) {
        if (next === D) {
          result = product * w;
          break;
        }
        if (!visited.has(next)) {
          visited.add(next);
          queue.push([next, product * w]);
        }
      }

      if (result !== -1) break;
    }

    answer.push(result);
  }

  return answer;
}
