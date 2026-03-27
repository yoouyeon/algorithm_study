/*
⭐️ 문제 정보 ⭐️
문제 : 283 - Move Zeroes
레벨 : Easy
링크 : https://leetcode.com/problems/move-zeroes
*/

// ANCHOR 2026.03.27 풀이 (26분 소요)
{
  function moveZeroes1(nums: number[]): void {
    // 순서를 유지해야 하고, in-place로 동작해야 한다...
    // 0자리를 탐색하는 왼쪽 인덱스 하나와, 0이 아닌 수 (왼쪽의 0 자리를 채울 수)를 탐색하는 오른쪽 인덱스 하나를 두면 되겠다.
    let zeroidx = 0;
    while (zeroidx < nums.length) {
      if (nums[zeroidx] !== 0) {
        zeroidx++;
        continue;
      }
      let nonzeroidx = zeroidx + 1;
      while (nonzeroidx < nums.length && nums[nonzeroidx] === 0) nonzeroidx++;
      if (nonzeroidx === nums.length) break;
      nums[zeroidx] = nums[nonzeroidx];
      nums[nonzeroidx] = 0;
    }
  }
  // 위 풀이는 시간복잡도가 최악의 경우 O(n^2)까지 갈 수 있다. (0이 연속으로 나오는 경우)
  // O(n) 풀이 -> left`는 0이 있는 자리, `right`는 0이 아닌 수를 탐색 — right가 0이 아닌 값을 찾을 때마다 left와 스왑하고 left를 전진
  function moveZeroes2(nums: number[]): void {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== 0) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
      }
    }
  }
}
