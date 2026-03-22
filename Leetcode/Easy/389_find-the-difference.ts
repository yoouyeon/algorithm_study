/*
⭐️ 문제 정보 ⭐️
문제 : 389 - Find the Difference
레벨 : Easy
링크 : https://leetcode.com/problems/find-the-difference
*/

// ANCHOR 2026.03.22 풀이 (10분 소요)
function findTheDifference(s: string, t: string): string {
  const sArr = s.split('').sort();
  const tArr = t.split('').sort();

  for (let idx = 0; idx < sArr.length; idx++) {
    if (sArr[idx] !== tArr[idx]) return tArr[idx];
  }

  return tArr[tArr.length - 1];
}
