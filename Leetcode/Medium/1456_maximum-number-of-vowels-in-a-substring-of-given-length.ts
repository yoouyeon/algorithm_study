/*
⭐️ 문제 정보 ⭐️
문제 : 1456 - Maximum Number of Vowels in a Substring of Given Length
레벨 : Medium
링크 : https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length
*/

// ANCHOR 2026.05.01 풀이 (11분 소요)
function maxVowels(s: string, k: number): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  const n = s.length;

  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }
  let maxCount = count;

  // 윈도우 밀기
  for (let i = k; i < n; i++) {
    count += (vowels.has(s[i - k]) ? -1 : 0) + (vowels.has(s[i]) ? 1 : 0);
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
