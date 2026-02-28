/*
⭐️ 문제 정보 ⭐️
문제 : 5 - Longest Palindromic Substring
레벨 : Medium
링크 : https://leetcode.com/problems/longest-palindromic-substring
*/

// ANCHOR 2026.02.28 풀이

/**
 * 시간복잡도: O(n²) — 중심 O(n) × 확장 O(n)
 * 공간복잡도: O(n) — answer 문자열 저장
 */
function longestPalindrome1(s: string): string {
  let answer = '';

  function expand(mid1, mid2) {
    let left = mid1,
      right = mid2;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }

    // 멈춘 시점의 left와 right는 팰린드롬 바깥을 가리키고 있기 때문에 되돌려준다.
    left++;
    right--;
    // 더 긴 팰린드롬일때만 업데이트한다.
    /**
     * NOTE: 문자열을 생성하는 대신 인덱스와 길이만 저장하는 방법도 있다.
     *
     * let start = 0, maxLen = 1;
     * // expand 내부
     * if (right - left + 1 > maxLen) {
     *  maxLen = right - left + 1;
     *  start = left;
     * }
     *
     * // 마지막에
     * return s.substring(start, start + maxLen);
     */
    if (answer.length < right - left + 1) {
      answer = s.substring(left, right + 1);
    }
  }

  for (let mid = 0; mid < s.length; mid++) {
    // mid 인덱스로부터 좌우로 펼쳐나가며 팰린드롬 확인
    expand(mid, mid);
    expand(mid, mid + 1);
  }

  return answer;
}
