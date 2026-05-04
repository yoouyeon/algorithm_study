/*
⭐️ 문제 정보 ⭐️
문제 : 1493 - Longest Subarray of 1's After Deleting One Element
레벨 : Medium
링크 : https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element
*/

// ANCHOR 2026.05.04 풀이 (10분 소요)
function longestSubarray(nums: number[]): number {
  // 0을 1보다 작게 갖고 있는 subarray의 길이를 구하기
  const n = nums.length;
  let left = 0;
  let zero = 0;
  let answer = 0;

  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) zero++;
    while (zero > 1) {
      if (nums[left] === 0) zero--;
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }

  return answer - 1; // 반드시 하나의 원소를 제거해야 함.
}
