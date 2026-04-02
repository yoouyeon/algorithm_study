/*
⭐️ 문제 정보 ⭐️
문제 : 120861 - 캐릭터의 좌표
레벨 : Level 0
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120861
*/

// ANCHOR 2026.04.02 풀이 (16분 소요)
function solution(keyinput, board) {
  // map을 사용해도 괜찮지만 (원래 그렇게 풀었었음) 키가 고정적으로 4개이기 때문에 객체가 더 간결하다.
  const moves = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };

  // 머쓱이 캐릭터 위치
  let y = 0;
  let x = 0;

  // 범위
  const [xmax, ymax] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  keyinput.forEach((input) => {
    const move = moves[input];
    const ny = y + move[1];
    const nx = x + move[0];
    // 피드백 1. ymax * -1보다 -ymax가 더 관용적인 쓰임
    // 피드백 2. Math.abs()를 사용하면 더 간결하게 표현 가능
    // if (ny < ymax * -1 || ny > ymax || nx < xmax * -1 || nx > xmax) return;
    if (Math.abs(ny) > ymax || Math.abs(nx) > xmax) return;
    y = ny;
    x = nx;
  });

  return [x, y];
}
