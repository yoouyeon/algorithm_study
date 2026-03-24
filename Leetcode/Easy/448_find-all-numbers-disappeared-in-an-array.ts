/*
⭐️ 문제 정보 ⭐️
문제 : 448 - Find All Numbers Disappeared in an Array
레벨 : Easy
링크 : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
*/

// ANCHOR 2026.03.24 풀이 (9분 소요)
function findDisappearedNumbers(nums: number[]): number[] {
  const numSet = new Set(nums);
  const n = nums.length;
  const ret: number[] = [];

  for (let num = 1; num <= n; num++) {
    // set에 숫자가 없으면 빠진 숫자에 추가
    if (!numSet.has(num)) ret.push(num);
  }

  return ret;
}
