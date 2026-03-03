/*
⭐️ 문제 정보 ⭐️
문제 : 1918 - Maximum Score of a Good Subarray
레벨 : Hard
링크 : https://leetcode.com/problems/maximum-score-of-a-good-subarray
*/

// ANCHOR 2026.03.03 풀이
function maximumScore(nums: number[], k: number): number {
  // 좋은 부분 배열이란 인덱스 k를 포함하고 있는 부분배열 (닫힌 구간)
  // 점수 : 부분 배열의 최솟값 * 부분 배열 길이
  // 부분 배열이 k를 포함해야 하기 때문에 k를 중심으로 해서 양쪽으로 확장하는 방식의 투포인터
  // 포인터 이동 기준 : 현재 min을 최대한 높게 유지해야 한다. => 작은쪽이 변하면 더 min이 변할 수 있으니까 큰 것을 옮긴다.
  let left = k,
    right = k;
  let curMin = nums[k]; // k 시작점 반영
  let maxScore = nums[k]; // [k, k] 구간 score도 초기값으로 (최솟값을 누적하도록)

  while (left > 0 || right < nums.length - 1) {
    if (left === 0) right++;
    else if (right === nums.length - 1) left--;
    // 선택해서 확장해야 함. (다음 것이 더 큰 쪽으로 이동)
    else if (nums[left - 1] >= nums[right + 1]) left--;
    else right++;

    curMin = Math.min(curMin, nums[left], nums[right]);
    maxScore = Math.max(maxScore, curMin * (right - left + 1));
  }

  return maxScore;
}
