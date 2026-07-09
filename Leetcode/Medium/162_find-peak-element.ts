/*
⭐️ 문제 정보 ⭐️
문제 : 162 - Find Peak Element
레벨 : Medium
링크 : https://leetcode.com/problems/find-peak-element
*/

// ANCHOR 2026.07.09 풀이 (24분 소요)
function findPeakElement(nums: number[]): number {
  // You must write an algorithm that runs in O(log n) time. => 이분탐색이군요
  // 정렬안하고 이분탐색해보기는 처음임;;
  // nums[i-1] < nums[i] > nums[i+1] 일 때 nums[i]가 peak element
  // ===========
  // 정렬을 안해도 되는 이유
  // mid 기준으로 오른쪽에 반드시 peak이 있다.
  // 오른쪽의 마지막 원소는 반드시 자신의 오른쪽 원소보다 크게 되기 때문 (nums[n] = -∞)

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) return mid;
    if (nums[mid] < nums[mid + 1]) left = mid + 1;
    else right = mid;
  }

  return right;
}
