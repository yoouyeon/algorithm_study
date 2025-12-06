/* 
⭐️ 문제 정보 ⭐️
문제 : 42577 - 전화번호 목록
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42577
*/

// ANCHOR - 2025.12.05 풀이
function solution(phone_book) {
  const numberSet = new Set();
  for (const number of phone_book) {
    // 같은 전화번호가 중복해서 들어있지 않으므로 끝번호를 제외한 부분문자열만 구해준다.
    for (let len = 1; len < number.length; len++) {
      numberSet.add(number.substr(0, len));
    }
  }

  for (const number of phone_book) {
    if (numberSet.has(number)) {
      return false;
    }
  }

  return true;
}
