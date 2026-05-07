/*
⭐️ 문제 정보 ⭐️
문제 : 1207 - Unique Number of Occurrences
레벨 : Easy
링크 : https://leetcode.com/problems/unique-number-of-occurrences
*/

// ANCHOR 2026.05.07 풀이 (6분 소요)
function uniqueOccurrences(arr: number[]): boolean {
  const counterMap = new Map();

  for (const num of arr) {
    counterMap.set(num, (counterMap.get(num) ?? 0) + 1);
  }

  const occurrences = [...counterMap.values()];
  // 처음엔 Set을 배열로 변환해서 길이를 비교했었음.. 생각해보니 set에도 size 프로퍼티가 있었음
  return new Set(occurrences).size === occurrences.length;
}
