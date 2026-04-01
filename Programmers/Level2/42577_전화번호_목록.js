/*
⭐️ 문제 정보 ⭐️
문제 : 42577 - 전화번호 목록
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42577
*/

// ANCHOR 2026.04.01 풀이 (15분 소요)
function solution(phone_book) {
  // 1차 시도
  // 메서드 이름이 바로바로 생각이 안난다...ㅜㅜㅜ 매뉴얼 찾아보고 옴
  // String.prototype.indexOf
  // 근데 이렇게 풀면 시간초과 걸린다. (n * n인데 indexOf도 꽤 무거운 연산임)
  // 2차 시도
  // 부분문자열을 set에 모두 넣는다. 부분문자열의 존재 여부만 확인하면 되므로 그냥 다 쪼개서 넣으면 됨. (자신 빼고!)
  // 그리고 phone_book을 돌면서 부분문자열이랑 같은게 있는지 확인하면 끝
  const set = new Set();
  for (const number of phone_book) {
    for (let len = 1; len < number.length; len++) {
      set.add(number.substr(0, len));
    }
  }

  for (const number of phone_book) {
    if (set.has(number)) return false;
  }
  return true;
}

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
