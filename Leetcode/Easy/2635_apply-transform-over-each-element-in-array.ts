/*
문제 : 2635 - Apply Transform Over Each Element in Array
난이도 : Easy
링크 : https://leetcode.com/problems/apply-transform-over-each-element-in-array/
*/

// ANCHOR 2026.10.18 풀이 (4분 소요)
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  // return arr.map((el, i) => fn(el, i));
  const ret: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    ret.push(fn(arr[i], i));
  }
  return ret;
};
