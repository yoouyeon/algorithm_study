/*
⭐️ 문제 정보 ⭐️
문제 : 392 - Is Subsequence
레벨 : Easy
링크 : https://leetcode.com/problems/is-subsequence/
*/

// ANCHOR 2026.03.30 풀이 (4분 소요)
{
  function isSubsequence(s: string, t: string): boolean {
    // s가 t의 subsequence인지를 확인해야 함.
    // s에 등장하는 문자 순서대로 t에 모두 등장하는지만 확인하면 된다.
    let tidx = 0;
    for (const c of s) {
      while (tidx < t.length && c !== t[tidx]) tidx++;
      if (tidx >= t.length) return false;
      tidx++;
    }
    return true;
  }
}

// ANCHOR 2025.08.12 풀이
{
  function isSubsequence(s: string, t: string): boolean {
    let sIdx = 0,
      tIdx = 0;
    if (s.length === 0) return true;
    if (t.length === 0) return false;
    while (sIdx < s.length && tIdx < t.length) {
      const sChar = s[sIdx];
      while (tIdx < t.length && t[tIdx] !== sChar) {
        tIdx++;
      }
      if (tIdx >= t.length) return false;
      tIdx++;
      sIdx++;
    }
    return sIdx === s.length;
  }
}
