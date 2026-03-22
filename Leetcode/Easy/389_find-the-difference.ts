/*
⭐️ 문제 정보 ⭐️
문제 : 389 - Find the Difference
레벨 : Easy
링크 : https://leetcode.com/problems/find-the-difference
*/

// ANCHOR 2026.03.22 풀이 (10분 소요)
function findTheDifference(s: string, t: string): string {
  // 풀이 1. 정렬하는 방법
  // const sArr = s.split('').sort();
  // const tArr = t.split('').sort();

  // for (let idx = 0; idx < sArr.length; idx++) {
  //   if (sArr[idx] !== tArr[idx]) return tArr[idx];
  // }

  // return tArr[tArr.length - 1];

  // 풀이 2. 아스키 코드 값을 이용하는 방법
  let diff = 0;

  for (const c of t) diff += c.charCodeAt(0);
  for (const c of s) diff -= c.charCodeAt(0);

  return String.fromCharCode(diff);
}
