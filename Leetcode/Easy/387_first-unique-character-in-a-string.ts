/*
⭐️ 문제 정보 ⭐️
문제 : 387 - First Unique Character in a String
레벨 : Easy
링크 : https://leetcode.com/problems/first-unique-character-in-a-string
*/

// ANCHOR 2026.03.22 풀이 (4분 소요)
function firstUniqChar(s: string): number {
  const map = new Map();

  for (let c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }

  for (let idx = 0; idx < s.length; idx++) {
    if (map.get(s[idx]) === 1) return idx;
  }

  return -1;
}
