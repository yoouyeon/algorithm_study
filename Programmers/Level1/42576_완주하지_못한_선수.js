/* 
⭐️ 문제 정보 ⭐️
문제 : 42576 - 완주하지 못한 선수
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42576
*/

// ANCHOR - 2025.12.04 풀이
function solution2(participant, completion) {
  // 참여자 맵 초기화
  const participantMap = new Map(); // key: 이름, value: 해당하는 선수 수
  for (const name of participant) {
    if (participantMap.has(name)) {
      participantMap.set(name, participantMap.get(name) + 1);
    } else {
      participantMap.set(name, 1);
    }
  }

  // 완주자 확인
  for (const name of completion) {
    participantMap.set(name, participantMap.get(name) - 1);
  }

  // 완주하지 못한 선수 학인
  for (const [name, count] of participantMap) {
    if (count > 0) return name;
  }

  return ""; // NEVER
}

// ANCHOR - 2025.10.06 풀이
function solution1(participant, completion) {
  // 1. completion으로 map 만들기
  const map = new Map();
  for (const person of completion) {
    if (map.has(person)) {
      map.set(person, map.get(person) + 1);
    } else {
      map.set(person, 1);
    }
  }

  // 2. participant 돌면서 map에 없는 사람 찾기
  for (const person of participant) {
    if (!map.has(person) || map.get(person) === 0) {
      return person;
    } else {
      map.set(person, map.get(person) - 1);
    }
  }

  return ""; // 모든 사람이 완주했을 경우 (문제 조건상 발생하지 않음)
}
