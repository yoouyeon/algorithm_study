/*
⭐️ 문제 정보 ⭐️
문제 : 3844 - Longest Almost-Palindromic Substring
레벨 : Medium
링크 : https://leetcode.com/problems/longest-almost-palindromic-substring
*/

// ANCHOR 2026.03.02 풀이
// https://leetcode.com/problems/longest-almost-palindromic-substring/solutions/7580116/javacpython-center-expansion-by-lee215-oxto 참고...
function almostPalindromic(s: string): number {
  const len = s.length;
  let answer = 0;

  function expand(left: number, right: number) {
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
    }

    answer = Math.max(answer, right - left - 1);
    return [left, right];
  }

  for (let idx = 0; idx < 2 * len - 1; idx++) {
    // 1. 완벽한 팰린드롬 찾기 → [left, right]은 불일치 지점
    const [left, right] = expand(Math.floor(idx / 2), Math.floor((idx + 1) / 2));
    // 2. 왼쪽 제거 시도
    expand(left - 1, right);
    // 3. 오른쪽 제거 시도
    expand(left, right + 1);
  }

  // 범위가 넘어갔을 수 있기 때문에 최대 길이인 len으로 클리핑해준다.
  return Math.min(answer, len);
}
