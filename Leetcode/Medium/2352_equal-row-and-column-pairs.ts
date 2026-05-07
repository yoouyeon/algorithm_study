/*
⭐️ 문제 정보 ⭐️
문제 : 2352 - Equal Row and Column Pairs
레벨 : Medium
링크 : https://leetcode.com/problems/equal-row-and-column-pairs
*/

// ANCHOR 2026.05.07 풀이 (10분 소요)
function equalPairs(grid: number[][]): number {
  // 일일이 다 비교하는 방법...?
  // row 맵을 만들어두고 col을 돌면서 같은게 있으면 개수를 세어주면 되겠다!

  const n = grid.length;
  const rowMap = new Map(); // key: row, value: row idx
  for (let idx = 0; idx < n; idx++) {
    const row = grid[idx].join(',');
    rowMap.set(row, [...(rowMap.get(row) ?? []), idx]);
  }

  // col 확인
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const colArr = [];
    for (let j = 0; j < n; j++) {
      colArr.push(grid[j][i]);
    }
    const col = colArr.join(',');
    const rows = rowMap.get(col) ?? [];
    // 같은게 없으면 0이 더해질 것.
    answer += rows.length;
  }
  return answer;
}
