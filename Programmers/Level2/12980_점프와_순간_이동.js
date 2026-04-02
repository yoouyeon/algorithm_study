/*
⭐️ 문제 정보 ⭐️
문제 : 12980 - 점프와 순간 이동
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12980
*/

// ANCHOR 2026.04.02 풀이 (21분 소요)
function solution(n) {
  // 전형적인 DP문제? 현재 위치까지 오는 데 소모되는 최소 비용을 메모이제이션하는게 좋겠다.
  // const usage = new Array(n + 1).fill(0); // ⬅️ 문제는 이것이었다. 시간초과가 아니라 메모리 오버플로우였던 것 같음
  // 2배 전 위치에서 순간이동 가능하다면 순간이동 (짝수)
  // 불가능하다면 직전 위치에서 + 1 (홀수)
  // usage[1] = 1; // 1칸 점프
  // for (let i = 2; i <= n; i++) {
  //     if (i % 2 === 0) usage[i] = usage[i / 2];
  //     else usage[i] = usage[i - 1] + 1;
  // }
  // return usage[n];
  // 위처럼 풀면!!!! 시간초과!!! (N이 10억 이하의 수이다;;;)
  // Top-Down 방식으로 갈 것
  const usage = new Map();
  usage.set(0, 0);
  usage.set(1, 1); // 1칸 점프

  function go(i) {
    if (usage.get(i) !== undefined) return usage.get(i);
    if (i % 2 === 0) usage.set(i, go(i / 2));
    else usage.set(i, go(i - 1) + 1);
    return usage.get(i);
  }

  return go(n);
}
