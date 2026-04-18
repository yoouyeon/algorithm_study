/*
⭐️ 문제 정보 ⭐️
문제 : 151 - Reverse Words in a String
레벨 : Medium
링크 : https://leetcode.com/problems/reverse-words-in-a-string/
*/

// ANCHOR 2026.04.18 풀이 (5분 소요)
function reverseWords(s: string): string {
  // trim으로 양쪽 공백을 다 잘라내기
  // 공백으로 split
  // 뒤집기
  // 빈문자열 필터
  // 공백으로 join
  return s
    .trim()
    .split(' ')
    .reverse()
    .filter((x) => x !== '')
    .join(' ');
  /**
   * split(' ') + filter보다 split(/\s+/) 한 번으로 연속 공백을 처리하는 게 더 간결합니다.
   * return s.trim().split(/\s+/).reverse().join(' ');
   */
}
