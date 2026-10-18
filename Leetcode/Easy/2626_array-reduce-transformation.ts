/*
문제 : 2626 - Array Reduce Transformation
난이도 : Easy
링크 : https://leetcode.com/problems/array-reduce-transformation/
*/

// ANCHOR 2026.10.18 풀이 (1분 소요)
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let ret = init;
  for (let i = 0; i < nums.length; i++) {
    ret = fn(ret, nums[i]);
  }
  return ret;
};
