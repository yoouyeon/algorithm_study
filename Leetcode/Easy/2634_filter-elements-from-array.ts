/*
문제 : 2634 - Filter Elements from Array
난이도 : Easy
링크 : https://leetcode.com/problems/filter-elements-from-array/
*/

// ANCHOR 2026.10.18 풀이 (2분 소요)
type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const ret: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) ret.push(arr[i]);
  }
  return ret;
};
