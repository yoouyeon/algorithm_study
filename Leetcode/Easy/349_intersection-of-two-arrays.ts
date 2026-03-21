/*
⭐️ 문제 정보 ⭐️
문제 : 349 - Intersection of Two Arrays
레벨 : Easy
링크 : https://leetcode.com/problems/intersection-of-two-arrays
*/

// ANCHOR 2026.03.21 풀이 (12분 소요)
function intersection(nums1: number[], nums2: number[]): number[] {
  // 중복 제거를 위해서 두 배열을 모두 set으로 변환한다.
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  // 이럴수가 설마해서 검색해봤는데 Intersection을 구하는 함수가 있었다.
  // Set.prototype.intersection()
  // 이럴수가 완전 최신문법이었다. (2024 추가...) 아쉽게도 지원이 안된다.
  // return Array.from(set1.intersection(set2));

  // set1을 다시 배열로 바꿔서 set2에 있는 것만 필터링... 명료하긴 한데 불필요한 반복이 신경쓰인다.
  return Array.from(set1).filter((num) => set2.has(num));
}
