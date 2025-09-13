/*
 * [209] Minimum Size Subarray Sum
 */

function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity;
  let left = 0,
    right = left;
  let sum = 0;

  while (right < nums.length) {
    if (sum < target) {
      sum += nums[right];
      right++;
    }
    while (sum >= target) {
      minLength = Math.min(minLength, right - left);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
