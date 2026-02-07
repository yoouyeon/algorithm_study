/* 
⭐️ 문제 정보 ⭐️
문제 : 72416 - 매출 하락 최소화
레벨 : Level 4
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/72416
*/

// ANCHOR : 26.02.07 풀이
function solution(sales, links) {
  const n = sales.length;

  // 1) 인접 리스트 구성
  const children = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of links) {
    children[a].push(b);
  }

  // 2) 후위순회 준비
  // NOTE: order를 역순으로 처리해서 postorder 효과를 낸다.
  const order = [];
  const stack = [1];
  while (stack.length) {
    const v = stack.pop();
    order.push(v);
    for (const c of children[v]) {
      stack.push(c);
    }
  }

  // 3) dp 배열 준비 (1-indexed)
  // dp0: v가 참석했을 때의 워크숍 참석 인원의 총 하루 평균 매출액 최솟값
  // dp1: v가 참석하지 않았을 때의 워크숍 참석 인원의 총 하루 평균 매출액 최솟값
  const dp0 = new Array(n + 1).fill(0);
  const dp1 = new Array(n + 1).fill(0);

  // 4) Bottom-up DP 계산 (order를 역순으로 돌면서 후위순회)
  for (let i = order.length - 1; i >= 0; i--) {
    const v = order[i];
    const childs = children[v];

    // case 1) 리프인 경우 (순수 팀원인 경우)
    // - dp0[v] = sales[v] (본인이 참석)
    // - dp1[v] = 0 (본인 불참. 아래 팀이 없기 때문에 자식 중 한명이 꼭 참석해야 한다는 강제가 없다. 불참하면 끝.)
    if (childs.length === 0) {
      dp1[v] = sales[v - 1];
      dp0[v] = 0;
      continue;
    }

    // case 2) 팀장이고 팀원인 경우 (하위 팀이 있음)
    // a) 참석하는 경우 : 같은 팀의 다른 팀원들은 참석하든 안하든 상관 없음
    // -> dp1[v] = sales[v] + ∑ min(dp0, dp1)
    // b) 불참하는 경우 : 같은 팀의 다른 팀원 중 적어도 한명은 참석해야 함
    // -> 우선 모든 팀원들에서 가장 싼 상태를 더한 뒤 (sumMin)
    // -> 참석으로 돌렸을 때 비용이 가장 적게 추가되는 인원을 참석으로 돌린다. (extraMin)
    // -> dp0[v] = sumMin + extraMin
    let sumMin = 0;
    let extraMin = Infinity;

    for (const c of childs) {
      const m = Math.min(dp0[c], dp1[c]); // 참석하는 것과 안하는 것 중 최솟값
      sumMin += m;

      const extra = dp1[c] - m; // (참석으로 돌렸을 때 추가되는 비용)
      if (extra < extraMin) {
        extraMin = extra;
      }
    }

    dp1[v] = sales[v - 1] + sumMin;
    dp0[v] = sumMin + extraMin;
  }

  return Math.min(dp0[1], dp1[1]);
}
