/*
⭐️ 문제 정보 ⭐️
문제 : 334 - Increasing Triplet Subsequence
레벨 : Medium
링크 : https://leetcode.com/problems/increasing-triplet-subsequence
*/

// ANCHOR 2026.04.24 풀이 (16분 소요)
function increasingTriplet(nums: number[]): boolean {
  // O(n)? 반드시 생각해낸다
  // 스택? -> [10, 12, 5, 13] 의 반례
  // first, second 후보 두개를 들고 다니는걸로 변경
  let first = Infinity;
  let second = Infinity;
  for (const num of nums) {
    if (num <= first) first = num;
    else if (num <= second) second = num;
    else return true;
  }
  return false;
}
