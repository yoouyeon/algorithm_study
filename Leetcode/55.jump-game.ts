/*
 * [55] Jump Game
 */
// DP
function canJump1(nums: number[]): boolean {
  const canAccess = Array(nums.length).fill(false);
  canAccess[0] = true; // 시작점은 접근 가능

  for (let idx = 0; idx < nums.length; idx++) {
    if (canAccess[idx]) {
      // 현재 위치에서 다음에 도달 가능한 지점들 표시하기
      for (let jump = 1; jump <= nums[idx]; jump++) {
        const next = idx + jump;
        if (next >= nums.length - 1) return true;
        if (!canAccess[next]) canAccess[next] = true;
      }
    }
  }

  return canAccess[nums.length - 1];
}

// Greedy
function canJump2(nums: number[]): boolean {
  let maximumPos = 0;

  for (let curr = 0; curr <= maximumPos; curr++) {
    const reachable = curr + nums[curr];
    if (reachable >= nums.length - 1) return true;
    maximumPos = Math.max(reachable, maximumPos);
  }

  return false;
}
