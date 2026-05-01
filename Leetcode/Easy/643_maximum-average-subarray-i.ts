/*
⭐️ 문제 정보 ⭐️
문제 : 643 - Maximum Average Subarray I
레벨 : Easy
링크 : https://leetcode.com/problems/maximum-average-subarray-i
*/

// ANCHOR 2026.05.01 풀이 (7분 소요)
function findMaxAverage(nums: number[], k: number): number {
  // 평균이 가장 큰 k 길이 subarray 찾기 => 그 평균을 반환하시오
  // 절대 슬라이딩 윈도우가 맞다.
  const n = nums.length;
  let left = 0;
  let right = k - 1;

  // 초기 배열의 평균 구하기
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let maxAverage = sum / k;

  // 슬라이딩 윈도우
  // "옮길 수 있을때"까지 옮긴다
  while (right < n - 1) {
    sum -= nums[left++]; // 앞에것 빼고 윈도우 옮기기
    sum += nums[++right]; // 윈도우 옮겨서 추가된 것 더하기
    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
}
