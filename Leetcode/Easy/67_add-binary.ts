/*
⭐️ 문제 정보 ⭐️
문제 : 67 - Add Binary
레벨 : Easy
링크 : https://leetcode.com/problems/add-binary/
*/

// ANCHOR 2026.04.30 풀이 (3분 소요)
function addBinary(a: string, b: string): string {
  // Bigint로 바꿔주기
  const decimalA = BigInt('0b' + a);
  const dicimalB = BigInt('0b' + b);
  return (decimalA + dicimalB).toString(2);
}
