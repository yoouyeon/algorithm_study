/*
⭐️ 문제 정보 ⭐️
문제 : 724 - Find Pivot Index
레벨 : Easy
링크 : https://leetcode.com/problems/find-pivot-index
*/

// ANCHOR 2026.05.04 풀이
function pivotIndex(nums: number[]): number {
  // pivot index 구하기.
  // 그게 뭐냐면 어떤 index를 기준으로 왼쪽 오른쪽 합이 "정확히" 동일하면 그 인덱스를 pivot index라고 함
  // pivot 인덱스는 합에 포함 안됨.
  // 없으면 -1 반환하기

  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i];
    if (rightSum === leftSum) return i;
    leftSum += nums[i];
  }

  return -1;
}
