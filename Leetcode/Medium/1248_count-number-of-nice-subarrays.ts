/*
⭐️ 문제 정보 ⭐️
문제 : 1248 - Count Number of Nice Subarrays
레벨 : Medium
링크 : https://leetcode.com/problems/count-number-of-nice-subarrays
*/

// ANCHOR 2026.04.14 풀이 (19분 소요)
function numberOfSubarrays(nums: number[], k: number): number {
  const n = nums.length;

  // 홀수 개수 추가
  const odds = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 !== 0) odds.push(i);
  }

  // 홀수가 k개 미만이면 nice subarray 없음
  if (odds.length < k) return 0;

  let answer = 0;

  for (let i = 0; i + k - 1 < odds.length; i++) {
    // 왼쪽: 이전 홀수가 없으면 배열 시작(0)까지, 있으면 이전 홀수 바로 다음까지
    const leftPad = i === 0 ? odds[0] + 1 : odds[i] - odds[i - 1];
    // 오른쪽: 다음 홀수가 없으면 배열 끝(n-1)까지, 있으면 다음 홀수 바로 직전까지
    const rightPad = i + k === odds.length ? n - odds[i + k - 1] : odds[i + k] - odds[i + k - 1];
    answer += leftPad * rightPad;
  }

  return answer;
}
