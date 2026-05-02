/*
⭐️ 문제 정보 ⭐️
문제 : 1004 - Max Consecutive Ones III
레벨 : Medium
링크 : https://leetcode.com/problems/max-consecutive-ones-iii
*/

// ANCHOR 2026.05.02 풀이 (9분 소요)
function longestOnes(nums: number[], k: number): number {
  // "0이 k개 이하로 포함된 연속 구간 중 가장 긴 것"을 찾아야 한다.
  // 슬라이딩 윈도우인 것.

  let left = 0;
  let zero = 0;
  let maxLen = 0;
  const n = nums.length;

  // 매 반복마다 window 확장
  for (let right = 0; right < n; right++) {
    if (nums[right] === 0) zero++;

    // zero가 조건을 위반하는 순간 조건에 맞아질 때 까지 left를 당김
    while (zero > k) {
      if (nums[left] === 0) zero--;
      left++;
    }

    // 답 갱신
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
