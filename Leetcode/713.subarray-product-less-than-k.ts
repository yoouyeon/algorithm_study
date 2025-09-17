/*
 * [713] Subarray Product Less Than K
 */

function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;
  if (nums.length === 1) {
    return nums[0] > k ? 1 : 0;
  }

  let left = 0;
  let right = 0;
  let product = 1;
  let count = 0;

  while (right < nums.length) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    // right 위치로 끝나는 모든 부분배열의 개수
    count += right - left + 1;
    right++;
  }

  return count;
}
