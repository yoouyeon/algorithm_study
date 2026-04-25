/*
⭐️ 문제 정보 ⭐️
문제 : 58 - Length of Last Word
레벨 : Easy
링크 : https://leetcode.com/problems/length-of-last-word/
*/

// ANCHOR 2026.04.25 풀이 (3분 소요)
{
  function lengthOfLastWord(s: string): number {
    const a = s.split(' ').filter((w) => w != '');
    return a[a.length - 1].length;
  }
}

/*
 * [58] Length of Last Word
 */

function lengthOfLastWord(s: string): number {
  const words = s.trim().split(/\s+/);
  return words[words.length - 1].length;
}
