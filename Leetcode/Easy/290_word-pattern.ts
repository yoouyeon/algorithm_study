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

  const patternArray = pattern.split('');
  const sArray = s.split(' ');

  if (patternArray.length !== sArray.length) return false;

  for (let idx = 0; idx < patternArray.length; idx++) {
    const p = patternArray[idx];
    const w = sArray[idx];

    if (pToW.has(p) && pToW.get(p) !== w) return false;
    if (wToP.has(w) && wToP.get(w) !== p) return false;

    pToW.set(p, w);
    wToP.set(w, p);
  }

  return true;
}
