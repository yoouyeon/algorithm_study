/*
⭐️ 문제 정보 ⭐️
문제 : 58 - Length of Last Word
레벨 : Easy
링크 : https://leetcode.com/problems/length-of-last-word/
*/

/*
 * [58] Length of Last Word
 */

function lengthOfLastWord(s: string): number {
  const words = s.trim().split(/\s+/);
  return words[words.length - 1].length;
}
