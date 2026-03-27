/*
⭐️ 문제 정보 ⭐️
문제 : 28 - Find the Index of the First Occurrence in a String
레벨 : Easy
링크 : https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string
*/

// ANCHOR 2026.03.27 풀이 (13분 소요)
function strStr(haystack: string, needle: string): number {
  // 왼쪽 인덱스를 계속 옮겨간다.
  for (let left = 0; left <= haystack.length - needle.length; left++) {
    if (haystack[left] !== needle[0]) continue;
    // needle의 첫번째 문자와 같은 문자가 있다면, 오른족 인덱스를 설정하고 needle만큼의 길이를 탐색한다.
    let right = 0;
    while (haystack[left + right] === needle[right]) {
      right++;
      // 끝까지 탐색 가능하다면 왼쪽 리턴
      if (right === needle.length) return left;
    }
    // 불가능하면 왼쪽 업데이트하고 재진행
  }

  // 어떤 것도 반환하지 못했다면 -1 반환.
  return -1;
}
