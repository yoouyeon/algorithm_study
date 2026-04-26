/*
⭐️ 문제 정보 ⭐️
문제 : 66 - Plus One
레벨 : Easy
링크 : https://leetcode.com/problems/plus-one
*/

// ANCHOR 2026.04.26 풀이
function plusOne(digits: number[]): number[] {
  const number = BigInt(digits.join(''));
  return (number + 1n)
    .toString()
    .split('')
    .map((x) => parseInt(x));
}
