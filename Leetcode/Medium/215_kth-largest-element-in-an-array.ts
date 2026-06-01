/*
⭐️ 문제 정보 ⭐️
문제 : 215 - Kth Largest Element in an Array
레벨 : Medium
링크 : https://leetcode.com/problems/kth-largest-element-in-an-array
*/

// ANCHOR 2026.06.01 풀이 (34분 소요)
function findKthLargest(nums: number[], k: number): number {
  function partition(left: number, right: number): [number, number] {
    const randomIdx = Math.floor(Math.random() * (right - left + 1)) + left;
    [nums[randomIdx], nums[right]] = [nums[right], nums[randomIdx]];

    const pivot = nums[right];
    let mid = left; // == pivot 구역의 시작
    let curr = left;
    let end = right;

    while (curr <= end) {
      if (nums[curr] > pivot) {
        [nums[mid], nums[curr]] = [nums[curr], nums[mid]];
        mid++;
        curr++;
      } else if (nums[curr] === pivot) {
        curr++;
      } else {
        [nums[curr], nums[end]] = [nums[end], nums[curr]];
        end--;
      }
    }

    return [mid, end]; // pivot이 확정된 범위 [mid, end]
  }

  let left = 0;
  let right = nums.length - 1;

  while (true) {
    const [pivotStart, pivotEnd] = partition(left, right);
    if (pivotStart <= k - 1 && k - 1 <= pivotEnd) return nums[k - 1];
    if (k - 1 < pivotStart) right = pivotStart - 1;
    else left = pivotEnd + 1;
  }
}
