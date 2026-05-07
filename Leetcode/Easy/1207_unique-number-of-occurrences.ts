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
  return [...new Set(occurrences)].length === occurrences.length;
}
