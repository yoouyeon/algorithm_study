/*
⭐️ 문제 정보 ⭐️
문제 : 42748 - K번째수
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42748
*/

// ANCHOR 2026.04.01 풀이 (6분 소요)
function solution(array, commands) {
  // 그대로 구현하면 될 듯
  const answer = [];
  for (const command of commands) {
    const [i, j, k] = command;
    const arr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(arr[k - 1]);
  }
  return answer;
}
