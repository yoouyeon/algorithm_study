/*
⭐️ 문제 정보 ⭐️
문제 : 345 - Reverse Vowels of a String
레벨 : Easy
링크 : https://leetcode.com/problems/reverse-vowels-of-a-string
*/

// ANCHOR 2026.03.30 풀이 (13분 소요)
function reverseVowels(s: string): string {
  const ret = [...s];
  // 1. vowels를 판별할 set 정의 (소문자)
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // 2. 투포인터 설정 (양쪽 끝에서 vowel을 만나면 스왑한다.)
  let left = 0;
  let right = s.length - 1;
  // 3. 진행!
  while (left < right) {
    // a. vowels가 등장할 때 까지 포인터 이동
    while (left < right && !vowels.has(s[left].toLowerCase())) left++;
    while (left < right && !vowels.has(s[right].toLowerCase())) right--;
    // b. 스왑이 불가능하다면 종료
    if (left >= right) break;
    // c. 스왑
    [ret[left], ret[right]] = [ret[right], ret[left]];
    // d. 다음 진행
    left++;
    right--;
  }
  // 4. 결과 배열 문자열로 변환
  return ret.join('');
}
