/*
 * [58] Length of Last Word
 */

function lengthOfLastWord(s: string): number {
  const words = s.trim().split(/\s+/);
  return words[words.length - 1].length;
}
