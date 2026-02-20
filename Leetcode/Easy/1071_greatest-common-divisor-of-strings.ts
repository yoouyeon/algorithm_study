/*
⭐️ 문제 정보 ⭐️
문제 : 1071 - Greatest Common Divisor of Strings
레벨 : Easy
링크 : https://leetcode.com/problems/greatest-common-divisor-of-strings/
*/

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function gcdOfStrings(str1: string, str2: string): string {
  // 1. 공통 약수 존재 여부 확인
  if (str1 + str2 !== str2 + str1) return "";

  // 2. GCD 길이만큼 자르기
  const gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}
