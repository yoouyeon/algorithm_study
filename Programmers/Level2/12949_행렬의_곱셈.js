/*
⭐️ 문제 정보 ⭐️
문제 : 12949 - 행렬의 곱셈
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12949
*/

// ANCHOR 2026.04.03 풀이 (13분 소요)
function solution(arr1, arr2) {
  // 결과 행렬 준비
  const [row1, col1] = [arr1.length, arr1[0].length];
  const col2 = arr2[0].length;
  const answer = Array.from({ length: row1 }, () => new Array(col2).fill(0));

  // 곱셈
  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}

function solution(arr1, arr2) {
  const row1 = arr1.length;
  const col1 = arr1[0].length;
  const row2 = arr2.length;
  const col2 = arr2[0].length;

  // 결과를 저장할 배열 초기화 (row1 * col2)
  const answer = [];
  for (let cnt = 0; cnt < row1; cnt++) {
    answer.push(new Array(col2).fill(0));
  }

  // 곱셈 시작
  for (let i = 0; i < row1; i++) {
    for (let j = 0; j < col2; j++) {
      for (let k = 0; k < col1; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}
