/*
⭐️ 문제 정보 ⭐️
문제 : 290 - Word Pattern
레벨 : Easy
링크 : https://leetcode.com/problems/word-pattern
*/

// ANCHOR 2026.03.21 풀이 (8분 소요)
function wordPattern(pattern: string, s: string): boolean {
  const pToW = new Map();
  const wToP = new Map();

  const words = s.split(' ');

  if (pattern.length !== words.length) return false;

  for (let idx = 0; idx < pattern.length; idx++) {
    const p = pattern[idx];
    const w = words[idx];

    if (pToW.has(p) && pToW.get(p) !== w) return false;
    if (wToP.has(w) && wToP.get(w) !== p) return false;

    pToW.set(p, w);
    wToP.set(w, p);
  }

  return true;
}
