/* 
⭐️ 문제 정보 ⭐️
문제 : 87390 - n^2 배열 자르기
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/87390
*/

// ANCHOR 2025.10.03 풀이
function solution2(n, left, right) {
  let answer = [];

  for (let idx = left; idx <= right; idx++) {
    const div = parseInt(idx / n);
    const mod = idx % n;

    answer.push(Math.max(div, mod) + 1);
  }

  return answer;
}

// ANCHOR 2024.05.10 풀이

function solution1(n, left, right) {
  let answer = [];
  for (let idx = left; idx <= right; idx++) {
    const y = Math.floor(idx / n);
    const x = idx % n;
    const element = Math.max(y, x) + 1;
    answer.push(element);
  }
  return answer;
}
