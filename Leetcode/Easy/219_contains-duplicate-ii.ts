/*
⭐️ 문제 정보 ⭐️
문제 : 219 - Contains Duplicate II
레벨 : Easy
링크 : https://leetcode.com/problems/contains-duplicate-ii
*/

// ANCHOR 2026.03.21 풀이
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // // set 초기 설정
  // const set = new Set();
  // for (let idx = 0; idx <= Math.min(nums.length - 1, k); idx++) {
  //   if (set.has(nums[idx])) return true;
  //   set.add(nums[idx]);
  // }

  // // 이후 범위 탐색
  // for (let idx = k + 1; idx < nums.length; idx++) {
  //   const oldFront = nums[idx - k - 1];
  //   set.delete(oldFront);
  //   const newBack = nums[idx];
  //   if (set.has(newBack)) return true;
  //   set.add(newBack);
  // }

  // 좀 더 깔끔하게 하나의 루프로 끝내기 (더 직관적이기도 하다.)
  const set = new Set();
  for (let idx = 0; idx < nums.length; idx++) {
    if (set.has(nums[idx])) return true;
    set.add(nums[idx]);
    if (set.size > k) set.delete(nums[idx - k]);
  }

  return false;
}
