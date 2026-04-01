/*
⭐️ 문제 정보 ⭐️
문제 : 42840 - 모의고사
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42840
*/

// ANCHOR 2026.04.01 풀이 (12분 소요)
function solution(answers) {
  // 각 정답이 각 패턴에 얼마나 맞는지를 확인하기
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let answer = [];
  let max = 0;
  for (let idx = 0; idx < patterns.length; idx++) {
    const pattern = patterns[idx];
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === pattern[i % pattern.length]) count++;
    }
    if (max < count) {
      answer = [idx + 1];
      max = count;
    } else if (max === count) {
      answer.push(idx + 1);
    }
  }
  // 오름차순으로 정렬하라는 조건이 있긴 했는데, 이 풀이에서는 오름차순으로 답을 넣기 때문에 정렬이 불필요하긴 하다. (없는게 더 나음)
  return answer.sort((a, b) => a - b);
}

function solution(answers) {
  const scores = [0, 0, 0]; // 수포자들의 점수를 저장하는 배열

  // 수포자들의 정답 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 1번 수포자부터 3번 수포자까지 정답 패턴을 확인
  for (let i = 0; i < 3; i++) {
    const pattern = patterns[i];
    for (let j = 0; j < answers.length; j++) {
      if (answers[j] === pattern[j % pattern.length]) {
        scores[i]++;
      }
    }
  }

  // 가장 높은 점수 결정
  const maxScore = Math.max(...scores);

  // 가장 높은 점수를 받은 수포자 확인
  const ret = [];
  for (let idx = 0; idx < 3; idx++) {
    if (scores[idx] === maxScore) {
      ret.push(idx + 1);
    }
  }

  return ret;
}
