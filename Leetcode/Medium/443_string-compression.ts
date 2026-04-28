/*
⭐️ 문제 정보 ⭐️
문제 : 443 - String Compression
레벨 : Medium
링크 : https://leetcode.com/problems/string-compression
*/

// ANCHOR 2026.04.28 풀이 (25분 소요)
function compress(chars: string[]): number {
  let left = 0;
  while (left < chars.length) {
    const char = chars[left];
    let right = left;
    while (right + 1 < chars.length && chars[right + 1] == char) right++;
    // 직접 수정해줘야 함...? (splice 기억 안나서 찾아봤습니다,,)
    const count = right - left + 1;
    if (count > 1) {
      const digits = count.toString().split('');
      chars.splice(left + 1, count - 1, ...digits); // 앞에 문자 하나는 남겨둬야 하기 때문.
      left = left + 1 + digits.length; // splice하고 있음에 주의;;
    } else {
      left++;
    }
  }

  return chars.length;
}
