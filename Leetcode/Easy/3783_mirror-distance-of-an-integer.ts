/*
⭐️ 문제 정보 ⭐️
문제 : 3783 - Mirror Distance of an Integer
레벨 : Easy
링크 : https://leetcode.com/problems/mirror-distance-of-an-integer
*/

// ANCHOR 2026.04.18 풀이 (4분 소요)
function mirrorDistance(n: number): number {
  function reverse(n: number) {
    return Number(n.toString().split('').reverse().join(''));
  }

  return Math.abs(n - reverse(n));
}
