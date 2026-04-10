/*
⭐️ 문제 정보 ⭐️
문제 : 1010 - Pairs of Songs With Total Durations Divisible by 60
레벨 : Medium
링크 : https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
*/

// ANCHOR 2026.04.10 풀이 (18분 소요)
function numPairsDivisibleBy60(time: number[]): number {
  // 두 곡 재생시간 합이 60으로 나누어떨어지는 쌍의 개수를 구하시오
  // N^2로 구하기엔....time이 너무 김 (6 * 10^4)
  // 1000까지의 60의 배수를 싹 다 구하기?
  const totals = new Set([60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960]);
  const timeMap = new Map(); // key: time, value: count. 이 map 안에서만 찾을 것임. (중복 방지)

  let answer = 0;
  for (const t of time) {
    for (const total of totals) {
      if (total < t) continue;
      answer += timeMap.get(total - t) ?? 0;
    }
    timeMap.set(t, (timeMap.get(t) ?? 0) + 1);
  }

  return answer;
}
