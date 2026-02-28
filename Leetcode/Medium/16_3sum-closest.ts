/*
⭐️ 문제 정보 ⭐️
문제 : 16 - 3Sum Closest
레벨 : Medium
링크 : https://leetcode.com/problems/3sum-closest
*/

// ANCHOR 2026.02.28 풀이
// 시간복잡도: O(n²) — 정렬 O(n log n) + 고정 O(n) × 투 포인터 O(n)
// 공간복잡도: O(1)
function threeSumClosest1(nums: number[], target: number): number {
  let closest;
  // 투포인터를 활용하기 위해 정렬한다.
  nums.sort((a, b) => a - b);

  // x, y, z 3 수 중에서 y를 고정하고, x, z를 움직이는 투포인터 방식!
  // NOTE : 3sum 문제처럼 첫번째를 고정하는 방식이 좀 더 일반적이라는 리뷰를 받았다.
  for (let y = 1; y <= nums.length - 2; y++) {
    let x = y - 1,
      z = y + 1;
    while (x >= 0 && z <= nums.length - 1) {
      const sum = nums[x] + nums[y] + nums[z];
      // 1. target과 동일한 경우
      if (sum === target) return target;

      // target과 더 가까운 값이 나온 경우 업데이트한다.
      if (closest === undefined || Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      // 2. target보다 작은 경우
      if (sum < target) {
        // 더 큰 숫자를 더해줘야 하기 때문에 z를 오른쪽으로 옮긴다.
        z++;
      }
      // 3. target보다 큰 경우
      else {
        // 더 작은 숫자를 더해줘야 하기 때문에 x를 왼쪽으로 옮긴다.
        x--;
      }
    }
  }

  return closest;
}
