/*
 * [169] Majority Element
 */

function majorityElement(nums: number[]): number {
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
}
