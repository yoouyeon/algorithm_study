/**
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 3 - Longest Substring Without Repeating Characters
 * 레벨 : Medium
 * 링크 : https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/*
 * [3] Longest Substring Without Repeating Characters
 */

function lengthOfLongestSubstring(s: string): number {
  // 문자열의 문자가 1개 이하인 경우 해당 문자열이 최대 길이 substring
  if (s.length <= 1) return s.length;

  let maxLength = 1; // 최소 substring 길이는 문자 하나 길이인 1
  const charSet = new Set();
  let left = 0,
    right = left + 1;

  charSet.add(s[left]);
  while (left < right && right < s.length) {
    // right의 문자가 charSet에 없을 때 까지 까지 left를 이동
    while (charSet.has(s[right]) && left < right) {
      charSet.delete(s[left]);
      left++;
    }
    // substring 길이 업데이트하기
    maxLength = Math.max(maxLength, right - left + 1);
    // right를 오른쪽으로 한칸 옮기기
    charSet.add(s[right]);
    right++;
  }

  return maxLength;
}
