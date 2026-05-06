/*
⭐️ 문제 정보 ⭐️
문제 : 2215 - Find the Difference of Two Arrays
레벨 : Easy
링크 : https://leetcode.com/problems/find-the-difference-of-two-arrays
*/

// ANCHOR 2026.05.06 풀이 (6분 소요)
function findDifference(nums1: number[], nums2: number[]): number[][] {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  // distinct integers 조건 때문에 set을 배열로 바꿔서 답 구하기
  const answer1 = [...nums1Set].filter((x) => !nums2Set.has(x));
  const answer2 = [...nums2Set].filter((x) => !nums1Set.has(x));

  return [answer1, answer2];
}
