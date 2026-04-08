/*
⭐️ 문제 정보 ⭐️
문제 : 59 - Spiral Matrix II
레벨 : Medium
링크 : https://leetcode.com/problems/spiral-matrix-ii/
*/

// ANCHOR 2026.04.08 풀이 (8분 소요)
function generateMatrix(n: number): number[][] {
  const last = n ** 2;
  const answer = Array.from({ length: n }, () => new Array(n).fill(0));
  // 54번과 동일한 매커니즘..
  let dir = 0; // top: 0, left: 1, bottom: 2, up: 3
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let [top, right, bottom, left] = [0, n - 1, n - 1, 0];
  let [y, x] = [0, 0];
  let value = 1;

  while (value <= last) {
    // 값을 넣기
    answer[y][x] = value;
    // 방향 결정. 경계값 업데이트
    if (dir === 0 && x === right) {
      dir = 1;
      top++;
    } else if (dir === 1 && y === bottom) {
      dir = 2;
      right--;
    } else if (dir === 2 && x === left) {
      dir = 3;
      bottom--;
    } else if (dir === 3 && y === top) {
      dir = 0;
      left++;
    }
    // 다음 값 위치 업데이트
    [y, x] = [y + moves[dir][0], x + moves[dir][1]];
    value++;
  }

  return answer;
}
