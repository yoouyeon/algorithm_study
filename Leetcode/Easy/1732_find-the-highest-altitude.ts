/*
⭐️ 문제 정보 ⭐️
문제 : 1732 - Find the Highest Altitude
레벨 : Easy
링크 : https://leetcode.com/problems/find-the-highest-altitude
*/

// ANCHOR 2026.05.04 풀이 (8분 소요)
function largestAltitude(gain: number[]): number {
  const n = gain.length;
  // gain이 뭐임? i와 i+1 사이의 "고도 증가량"
  // 구해야 할 것은 가장 높은 지점의 고도.
  let curr = 0;
  let highest = 0;

  for (let i = 0; i < n; i++) {
    curr += gain[i];
    highest = Math.max(highest, curr);
  }

  return highest;
}
