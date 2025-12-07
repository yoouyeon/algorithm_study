/* 
⭐️ 문제 정보 ⭐️
문제 : 42888 - 오픈채팅방
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42888
*/

// ANCHOR - 2025.12.07 풀이
function solution(record) {
  const userMap = new Map();
  for (let idx = 0; idx < record.length; idx++) {
    const [type, uid, name] = record[idx].split(" ");
    if (type === "Enter" || type === "Change") {
      userMap.set(uid, name);
    }
  }

  const answer = [];
  for (let idx = 0; idx < record.length; idx++) {
    const [type, uid, _] = record[idx].split(" ");
    if (type === "Enter") answer.push(`${userMap.get(uid)}님이 들어왔습니다.`);
    else if (type === "Leave")
      answer.push(`${userMap.get(uid)}님이 나갔습니다.`);
  }

  return answer;
}

// ANCHOR 2025.10.06 풀이
function solution2(record) {
  const nicknameMap = new Map(); // key: 유저 아이디, value: 현재 닉네임

  // 닉네임 결정
  for (const r of record) {
    const [op, userId, nickname] = r.split(" ");
    switch (op) {
      case "Enter":
        nicknameMap.set(userId, nickname);
        break;
      case "Leave":
        break;
      case "Change":
        nicknameMap.set(userId, nickname);
        break;
      default:
    }
  }

  // 메시지 만들기
  const answer = [];
  for (const r of record) {
    const [op, userId, nickname] = r.split(" ");
    switch (op) {
      case "Enter":
        answer.push(`${nicknameMap.get(userId)}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${nicknameMap.get(userId)}님이 나갔습니다.`);
        break;
      case "Change":
        break;
      default:
    }
  }
  return answer;
}

// ANCHOR 2024.02.26 풀아
const userMap = new Map();

function solution1(record) {
  let answer = [];
  const recordList = [];

  record.forEach((message) => {
    const [command, uid, nickname] = message.split(" ");
    switch (command) {
      case "Enter":
        userMap.set(uid, nickname);
        recordList.push({ command: "Enter", uid });
        break;
      case "Leave":
        recordList.push({ command: "Leave", uid });
        break;
      case "Change":
        userMap.set(uid, nickname);
        break;
    }
  });
  recordList.forEach((recordItem) => {
    switch (recordItem.command) {
      case "Enter":
        answer.push(`${userMap.get(recordItem.uid)}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${userMap.get(recordItem.uid)}님이 나갔습니다.`);
    }
  });
  return answer;
}
