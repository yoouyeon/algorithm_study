/*
 * [169] Majority Element
 */

// Time Complexity: O(nlogn)
function majorityElement1(nums: number[]): number {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
}

// Boyer–Moore Voting Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
function majorityElement2(nums: number[]): number {
  let count = 0;
  let candidate = 0;

  for (let idx = 0; idx < nums.length; idx++) {
    // count가 0인 경우에는 현재 요소를 새로운 후보로 설정하고 count = 1
    if (count === 0) {
      candidate = nums[idx];
      count = 1;
    } else {
      candidate === nums[idx] ? count++ : count--;
    }
  }

  return candidate;
}
