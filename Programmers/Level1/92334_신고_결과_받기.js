/* 
⭐️ 문제 정보 ⭐️
문제 : 92334 - 신고 결과 받기
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/92334
*/

// ANCHOR 2025.10.06 풀이
function solution(id_list, report, k) {
  const mailMap = new Map(); // 유저별 메일링 리스트
  const reportMap = new Map(); // 유저별 신고 횟수

  // map 초기화
  for (const userId of id_list) {
    mailMap.set(userId, new Set());
    reportMap.set(userId, 0);
  }
  // 신고 정보 처리
  for (const r of report) {
    const [from, to] = r.split(" ");
    if (mailMap.get(from).has(to)) continue;
    reportMap.set(to, reportMap.get(to) + 1);
    mailMap.get(from).add(to);
  }
  // 메일 수 결정
  const answer = new Array(id_list.length).fill(0);
  for (let idx = 0; idx < id_list.length; idx++) {
    const userId = id_list[idx];
    for (const reported of mailMap.get(userId).values()) {
      if (reportMap.get(reported) >= k) {
        answer[idx]++;
      }
    }
  }

  return answer;
}

// ANCHOR 2024.03.14 풀이
function solution(id_list, report, k) {
  var answer = [];
  const userMap = new Map(); // key: userId, value: 신고한 유저의 Set
  const reportMap = new Map(); // key: userId, value: 신고당한 횟수
  id_list.forEach((id) => {
    userMap.set(id, new Set());
    reportMap.set(id, 0);
  });
  // report 결과 처리하기
  report.forEach((record) => {
    const [user, target] = record.split(" ");
    const reportSet = userMap.get(user);
    // 이미 신고한 적이 있는 경우에는 횟수를 누적하지 않는다.
    if (reportSet.has(target)) return;
    reportSet.add(target);
    reportMap.set(target, reportMap.get(target) + 1);
  });
  // 메일 보내기
  id_list.forEach((id) => {
    let count = 0;
    const reportSet = userMap.get(id);
    reportSet.forEach((target) => {
      if (reportMap.get(target) >= k) count++;
    });
    answer.push(count);
  });
  return answer;
}
