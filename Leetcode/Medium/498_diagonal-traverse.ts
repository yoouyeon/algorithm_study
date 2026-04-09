/*
⭐️ 문제 정보 ⭐️
문제 : 498 - Diagonal Traverse
레벨 : Medium
링크 : https://leetcode.com/problems/diagonal-traverse/
*/

// ANCHOR 2026.04.09 풀이 (19분 소요)
type MoveAction = (y: number, x: number) => [number, number];
type Moves = {
  move: MoveAction;
  turn: MoveAction;
};
type Direction = 'up' | 'down';

function findDiagonalOrder(mat: number[][]): number[] {
  // 행렬로 정말 별걸 다 한다는 생각이 듭니다...
  const [m, n] = [mat.length, mat[0].length];
  // move: 말그대로 움직이기, turn: 방향 전환
  const moves: Record<Direction, Moves> = {
    up: { move: (y, x) => [y - 1, x + 1], turn: (y, x) => (x + 1 < n ? [y, x + 1] : [y + 1, x]) },
    down: { move: (y, x) => [y + 1, x - 1], turn: (y, x) => (y + 1 < m ? [y + 1, x] : [y, x + 1]) },
  };

  // 움직이기..
  let dir: Direction = 'up';
  const answer = [];
  let [y, x] = [0, 0];
  while (answer.length < m * n) {
    answer.push(mat[y][x]);
    let [ny, nx] = moves[dir].move(y, x);
    if (ny < 0 || ny >= m || nx < 0 || nx >= n) {
      // 방향 전환이 필요한 상황!
      [ny, nx] = moves[dir].turn(y, x);
      dir = dir === 'up' ? 'down' : 'up';
    }
    [y, x] = [ny, nx];
  }

  return answer;
}
