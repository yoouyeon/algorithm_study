/*
⭐️ 문제 정보 ⭐️
문제 : 35 - Search Insert Position
레벨 : Easy
링크 : https://leetcode.com/problems/search-insert-position/
*/

// ANCHOR 2026.02.22 풀이
function searchInsert(nums: number[], target: number): number {
  // NOTE: O(log n)... 이진탐색이다.
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
  }

  return left;
};