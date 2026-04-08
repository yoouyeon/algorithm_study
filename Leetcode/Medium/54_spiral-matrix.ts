/*
⭐️ 문제 정보 ⭐️
문제 : 54 - Spiral Matrix
레벨 : Medium
링크 : https://leetcode.com/problems/spiral-matrix
*/

// ANCHOR 2026.04.08 풀이 (19분 소요)
function spiralOrder(matrix: number[][]): number[] {
  const answer = [];
  const [m, n] = [matrix.length, matrix[0].length];
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // 순서대로 우-하-좌-상 방향 이동
  let [y, x] = [0, 0];
  let dir = 0; // 0: 오른쪽, 1: 아래쪽, 2: 왼쪽, 3: 위쪽 방향
  let [top, right, bottom, left] = [0, n - 1, m - 1, 0]; // 상, 우, 하, 좌 경계. 방향 바뀔때마다 업데이트됨

  // 모든 원소를 출력할 때 까지 반복한다.
  while (answer.length !== m * n) {
    // 현재 원소 출력
    answer.push(matrix[y][x]);
    // 이동 방향 결정 : boundary에 닿아 있으면 방향을 전환해줌.
    // boundary값도 함께 변경한다. (해당 행/열을 모두 소비했기 때문...)
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
    // 다음 원소 결정
    [y, x] = [y + moves[dir][0], x + moves[dir][1]];
  }

  return answer;
}
