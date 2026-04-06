/*
⭐️ 문제 정보 ⭐️
문제 : 64061 - 크레인 인형뽑기 게임
레벨 : Level 1
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/64061
*/

// ANCHOR 2026.04.06 풀이 (21분 소요)
{
  // 구현 문제는 재미 없다.
  function solution(board, moves) {
    let answer = 0;
    const basket = [];
    const gameBoard = Array.from({ length: board.length }, (_, i) =>
      board
        .map((row) => row[i])
        .filter((el) => el !== 0)
        .reverse(),
    );

    for (const move of moves) {
      // 인형을 뽑음
      const plush = gameBoard[move - 1].at(-1);
      if (plush === undefined) continue;
      gameBoard[move - 1].pop();

      // 바구니를 확인
      const top = basket.at(-1);
      if (top !== plush) basket.push(plush);
      else {
        basket.pop();
        answer += 2;
      }
    }

    return answer;
  }
}

// ANCHOR 2025.12.03 풀이
function solution3(board, moves) {
  const boardStack = Array.from({ length: board.length }, () => new Array());
  board.reverse().forEach((row) => {
    for (let idx = 0; idx < row.length; idx++) {
      row[idx] && boardStack[idx].push(row[idx]);
    }
  });

  const basket = [];
  let answer = 0;
  for (let idx = 0; idx < moves.length; idx++) {
    const target = boardStack[moves[idx] - 1].pop();
    if (!target) continue;
    if (basket.length > 0 && target === basket[basket.length - 1]) {
      basket.pop();
      answer += 2;
    } else {
      basket.push(target);
    }
  }

  return answer;
}

// ANCHOR 2025.10.03 풀이
function solution2(board, moves) {
  const boardSize = board.length;
  const topIdxs = new Array(board.length);
  const basket = [];
  let answer = 0;

  // 게임 판 각 열의 top 인덱스를 저장하기
  for (let col = 0; col < boardSize; col++) {
    for (let row = 0; row < boardSize; row++) {
      if (board[row][col] === 0) continue;
      topIdxs[col] = row;
      break;
    }
    if (topIdxs[col] === undefined) topIdxs[col] = boardSize;
  }

  // 크레인 움직이기
  for (const move of moves) {
    const moveIdx = move - 1;
    const topIdx = topIdxs[moveIdx];

    if (topIdx === boardSize) {
      // 인형이 없는 경우. 아무일도 일어나지 않는다.
      continue;
    }
    const top = board[topIdx][moveIdx];
    if (basket.length === 0) {
      basket.push(top);
    } else {
      const basketTop = basket[basket.length - 1];
      if (top === basketTop) {
        // 같으면 터진다
        basket.pop();
        answer += 2;
      } else {
        // 다르면 그냥 넣는다.
        basket.push(top);
      }
    }

    // topIdx 업데이트해주기
    topIdxs[moveIdx] = topIdx + 1;
  }

  return answer;
}

// ANCHOR 2024.02.26 풀이
function solution1(board, moves) {
  let count = 0;
  const basket = [];
  // 크레인을 움직일 보드 생성
  // const craneBoard = new Array(board.length);
  // for (let i = 0; i < craneBoard.length; i++) {
  //   craneBoard[i] = new Array();
  // }
  // board.reverse().forEach((row) =>
  //   row.forEach((type, idx) => {
  //     if (type === 0) return;
  //     craneBoard[idx].push(type);
  //   })
  // );
  // 크레인을 움직일 보드 생성 - 좀 더 깔끔한 방법
  const craneBoard = board.reverse().reduce((acc, row) => {
    row.forEach((type, idx) => {
      if (type === 0) return;
      if (!acc[idx]) acc[idx] = [];
      acc[idx].push(type);
    });
    return acc;
  }, new Array(board.length));
  // 인형 뽑기~
  moves.forEach((move) => {
    const targetIdx = move - 1;
    // 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않는다.
    if (craneBoard[targetIdx].length === 0) return;
    // 인형 뽑기
    const doll = craneBoard[targetIdx].pop();
    // 바구니의 가장 위에 있는 인형이 뽑은 인형과 같은 종류인 경우
    if (basket.length !== 0 && basket.at(-1) === doll) {
      // 터뜨리고 사라진 인형의 개수를 증가
      basket.pop();
      count += 2; // 인형이 2개 사라짐..
    } else basket.push(doll); // 바구니에 채워넣기
  });
  return count;
}
