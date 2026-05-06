/*
⭐️ 문제 정보 ⭐️
문제 : 1657 - Determine if Two Strings Are Close
레벨 : Medium
링크 : https://leetcode.com/problems/determine-if-two-strings-are-close
*/

// ANCHOR 2026.05.06 풀이 (20분 소요)
function closeStrings(word1: string, word2: string): boolean {
  // close가 되는 조건
  // 등장하는 문자의 종류가 같고, 그 빈도수가 같아야 함.
  // map을 활용하고... 정렬해서 비교해도 괜찮을지모르겠음 일단 고

  if (word1.length !== word2.length) return false;

  const word1Map = new Map(); // key: 문자, value: 빈도
  const word2Map = new Map();

  for (const char of word1) {
    word1Map.set(char, (word1Map.get(char) ?? 0) + 1);
  }
  for (const char of word2) {
    word2Map.set(char, (word2Map.get(char) ?? 0) + 1);
  }

  // 조건 1 비교
  const keys1 = [...word1Map.keys()].sort().join('');
  const keys2 = [...word2Map.keys()].sort().join('');
  if (keys1 !== keys2) return false;

  // 조건 2 비교
  const frequency1 = [...word1Map.values()].sort((a, b) => a - b).join(',');
  const frequency2 = [...word2Map.values()].sort((a, b) => a - b).join(',');
  if (frequency1 !== frequency2) return false;

  return true;
}
