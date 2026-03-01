/*
⭐️ 문제 정보 ⭐️
문제 : 2406 - Divide Intervals Into Minimum Number of Groups
레벨 : Medium
링크 : https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups
*/

// ANCHOR 2026.03.02 풀이

function minGroups(intervals: number[][]): number {
  // 필요한 최소 그룹 수는 특정 지점에서 겹치는 구간들의 최대 수와 동일하다.
  // 구간을 일일이 탐색하는 것은 시간초과일 수 밖에 없다...
  // 구간에 들어가고 나가는 것을 시간 순으로 처리해주면 동 시간대에 함께 구간에 들어가 있는 것의 개수를 구할 수 있다..!

  // 1. interval을 분해하기 => 구간에 들어가고 나가는 것을 개별 이벤트로 만든다.
  const events: number[][] = [];
  for (const [left, right] of intervals) {
    // 구간 입장 시 현재 구간에 들어가있는 것들의 개수 증가
    events.push([left, +1]);
    // 구간 퇴장 시 현재 구간에 들어아있는 것들의 개수 감소
    events.push([right, -1]);
  }

  // 2. 시간 순으로 처리하기 위해 정렬한다.
  // 같은 지점이면 입장이 먼저 와야 한다.
  // 닫힌 구간이기 때문에 [1,3] 과 [3,5] 는 겹친다.
  events.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  // 3. 순회하면서 동시에 구간에 들어가있는 것들의 최댓값을 계산한다.
  let max = 1; // 기본적으로 하나의 그룹을 쓴다.
  let count = 0;
  for (const [_, event] of events) {
    count += event;
    max = Math.max(max, count);
  }

  return max;
}
