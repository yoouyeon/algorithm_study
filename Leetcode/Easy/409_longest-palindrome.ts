/*
⭐️ 문제 정보 ⭐️
문제 : 409 - Longest Palindrome
레벨 : Easy
링크 : https://leetcode.com/problems/longest-palindrome
*/

// ANCHOR 2026.03.22 풀이 (16분 소요)
function longestPalindrome(s: string): number {
  // 짝수번 등장한 숫자는 팰린드롬의 양쪽에 둘 수 있다.
  // 홀수 하나는 중앙값으로 사용할 수 있다.

  // 1. 일단 세준다.
  const map = new Map();

  for (const c of s) map.set(c, (map.get(c) ?? 0) + 1);

  let maxLength = 0;
  let isOddExist = false;
  map.forEach((value) => {
    if (value % 2 === 0) {
      maxLength += value;
    } else {
      maxLength += value - 1;
      isOddExist = true;
    }
  });

  return maxLength + (isOddExist ? 1 : 0);
}
