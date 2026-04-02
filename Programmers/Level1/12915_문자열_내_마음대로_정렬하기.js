/*
⭐️ 문제 정보 ⭐️
문제 : 12915 - 문자열 내 마음대로 정렬하기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12915
*/

// ANCHOR 2026.04.02 풀이 (6분 소요)
function solution(strings, n) {
  return strings.sort((a, b) => (a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])));
}
