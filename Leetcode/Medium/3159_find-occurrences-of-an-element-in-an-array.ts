/*
⭐️ 문제 정보 ⭐️
문제 : 3159 - Find Occurrences of an Element in an Array
레벨 : Medium
링크 : https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array
*/

// ANCHOR 2026.04.15 풀이 (5분 소요)
function occurrencesOfElement(nums: number[], queries: number[], x: number): number[] {
  // 등장할때마다 인덱스 모아주기
  const occurrences = [];
  for (let idx = 0; idx < nums.length; idx++) {
    if (nums[idx] === x) occurrences.push(idx);
  }

  // 답 구해주기
  const answer = [];
  for (const query of queries) {
    if (query > occurrences.length) answer.push(-1);
    else answer.push(occurrences[query - 1]);
  }
  return answer;
}
