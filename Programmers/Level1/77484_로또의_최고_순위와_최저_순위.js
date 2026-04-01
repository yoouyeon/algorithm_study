/*
⭐️ 문제 정보 ⭐️
문제 : 77484 - 로또의 최고 순위와 최저 순위
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/77484
*/

// ANCHOR 2026.04.01 풀이 (9분 소요)
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]; // i개 맞추면 rank[i]등
  const winSet = new Set(win_nums);

  let zero = 0;
  let count = 0;
  for (const lotto of lottos) {
    if (winSet.has(lotto)) {
      count++;
      winSet.delete(lotto);
    } else if (lotto === 0) {
      zero++;
    }
  }

  let answer = [rank[count + zero], rank[count]];
  return answer;
}

// ANCHOR 2024.03.09 문제 풀이
function solution(lottos, win_nums) {
  let answer = [];
  const ranking = [6, 6, 5, 4, 3, 2, 1]; // idx 만큼 맞추면 몇등인지
  let unknownCnt = 0; // 알아볼 수 없는 숫자들 갯수
  let winCnt = 0; // 맞춘 숫자 갯수
  lottos.forEach((lotto) => {
    if (lotto === 0) {
      unknownCnt++;
      return;
    }
    if (win_nums.find((num) => num === lotto)) {
      winCnt++;
      return;
    }
  });
  // 최고 등수 => unknownCnt가 모두 맞았을 경우 = unknownCnt + winCnt만큼 맞췄을 경우
  answer.push(ranking[winCnt + unknownCnt]);
  // 최저 등수 => unknownCnt가 모두 맞지 않는 경우 = winCnt만큼만 맞췄을 경우
  answer.push(ranking[winCnt]);
  return answer;
}
