/* 
⭐️ 문제 정보 ⭐️
문제 : 17684 - [3차] 압축
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/17684
*/

function solution(msg) {
  const answer = [];
  // 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화
  const dict = new Map();
  const CAPITAL_A = 65;
  for (let i = 0; i < 26; i++) {
    dict.set(String.fromCharCode(CAPITAL_A + i), i + 1);
  }
  // msg 압축
  let cursor = 0;
  while (cursor < msg.length) {
    // 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w 찾기
    let offset = 1;
    while (
      cursor + offset <= msg.length &&
      dict.has(msg.slice(cursor, cursor + offset))
    ) {
      offset++;
    }
    const w = msg.slice(cursor, cursor + offset - 1);
    // 3. w에 해당하는 사전의 색인 번호 출력
    answer.push(dict.get(w));
    // 4. 입력에서 처리되지 않은 다음 글자가 남아 있다면 (c) w+c에 해당하는 단어를 사전에 등록한다. (인덱스는 사전의 가장 마지막 인덱스)
    if (cursor + offset - 1 < msg.length) {
      const c = msg[cursor + offset - 1];
      dict.set(w + c, dict.size + 1);
    }
    // 5. 입력에서 w 제거
    cursor = cursor + offset - 1;
  }
  return answer;
}
