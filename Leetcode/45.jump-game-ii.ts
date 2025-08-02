/*
 * [45] Jump Game II
 */

// nums[n - 1]로 도달할 수 있는 가장 적은 점프 횟수
function jump(nums: number[]): number {
  let jumpCount = 0;
  let maxPos = 0;
  let currEnd = 0; // 현재 점프 안에서 갈 수 있는 최대 범위를 추적
  const n = nums.length;

  for (let curr = 0; curr < n - 1; curr++) {
    maxPos = Math.max(maxPos, curr + nums[curr]);

    if (curr === currEnd) {
      jumpCount++;
      currEnd = maxPos;
    }
  }

  return jumpCount;
}
