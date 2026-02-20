/*
⭐️ 문제 정보 ⭐️
문제 : 392 - Is Subsequence
레벨 : Easy
링크 : https://leetcode.com/problems/is-subsequence/
*/

/*
 * [392] Is Subsequence
 */

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
