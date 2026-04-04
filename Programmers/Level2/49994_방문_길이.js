/* 
⭐️ 문제 정보 ⭐️
문제 : 49994 - 방문 길이
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49994
*/

// ANCHOR 2026.04.04 풀이 (12분 소요)
function solution(dirs) {
  // [y, x]
  const moves = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  // 처음 걸어본 길이 구하기. 방향도 중요해짐.. 양방향 다 저장해야 한다.
  // 아예 from-to 형식으로 set에 저장해두는게 낫겠다.
  const visited = new Set();
  let [y, x] = [0, 0];
  for (const dir of dirs) {
    const [ny, nx] = [y + moves[dir][0], x + moves[dir][1]];
    // 범위를 벗어나는 경우 무시한다.
    if (Math.abs(ny) > 5 || Math.abs(nx) > 5) continue;
    // 양방향 다 저장
    visited.add(`${y}.${x}-${ny}.${nx}`);
    visited.add(`${ny}.${nx}-${y}.${x}`);
    [y, x] = [ny, nx];
  }

  return visited.size / 2; // 양방향 저장했으므로 반으로 나눠서 반환
}

// ANCHOR 2025.10.02 풀이
function isValidPos(pos) {
  const { x, y } = pos;
  return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

// 명령어에 따라 업데이트 된 위치를 반환하는 함수
function move(dir, pos) {
  const { x, y } = pos;

  const result = {
    U: { x, y: y - 1 },
    D: { x, y: y + 1 },
    R: { x: x + 1, y },
    L: { x: x - 1, y },
  };

  const newPos = result[dir];
  if (isValidPos(newPos)) return newPos;
  return null;
}

function solution(dirs) {
  let answer = 0;
  const visited = new Set(); // 방문한 from-to 경로를 저장하는 set
  let pos = { x: 0, y: 0 };

  for (const dir of dirs) {
    const newPos = move(dir, pos);
    if (!newPos) continue;

    const path = `${pos.x},${pos.y}-${newPos.x},${newPos.y}`;
    const oppositePath = `${newPos.x},${newPos.y}-${pos.x},${pos.y}`;

    if (!visited.has(path)) {
      visited.add(path);
      visited.add(oppositePath);
      answer++;
    }

    pos = newPos;
  }

  return answer;
}
