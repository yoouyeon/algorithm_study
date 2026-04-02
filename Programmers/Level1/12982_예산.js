/*
⭐️ 문제 정보 ⭐️
문제 : 12982 - 예산
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12982
*/

// ANCHOR 2026.04.02 풀이 (10분 소요)
function solution(d, budget) {
  // 앞구르기하면서 봐도 그리디
  d.sort((a, b) => a - b);
  let answer = 0;
  let currBudget = budget;
  let idx = 0;
  while (currBudget > 0 && idx < d.length) {
    if (currBudget < d[idx]) break;
    currBudget -= d[idx++];
    answer++;
  }
  return answer;
}
