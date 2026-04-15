/*
⭐️ 문제 정보 ⭐️
문제 : 2515 - Shortest Distance to Target String in a Circular Array
레벨 : Easy
링크 : https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array
*/

// ANCHOR 2026.04.16 풀이 (24분 소요)
function closestTarget(words: string[], target: string, startIndex: number): number {
  // startIndex에서 시작해서 target에 가장 먼저 도착할 수 있는 step. 이동은 앞뒤로 움직일 수 있다.
  // 앞으로 가는게 더 빠른지 뒤로 가는게 더 빠른지 확인해보면 되는거 아닌가?
  const n = words.length;
  let answer = Infinity;
  for (let idx = 0; idx < n; idx++) {
    if (words[idx] === target) {
      const nextStep = (idx - startIndex + n) % n;
      const prevStep = n - nextStep;
      answer = Math.min(answer, nextStep, prevStep);
    }
  }
  return answer === Infinity ? -1 : answer;
}
