/* 
⭐️ 문제 정보 ⭐️
문제 : 49994 - 방문 길이
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/49994
*/

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
