/*
⭐️ 문제 정보 ⭐️
문제 : 566 - Reshape the Matrix
레벨 : Easy
링크 : https://leetcode.com/problems/reshape-the-matrix/
*/

// ANCHOR 2026.04.09 풀이 (14분 소요)
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  if (r * c !== m * n) return mat; // reshape가 불가능한 경우. 문제를 꼼꼼히 읽읍시다.. 5분은 다시 본듯

  const answer: number[][] = Array.from({ length: r }, () => []);

  let row = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[row].length === c) row++;
      answer[row].push(mat[i][j]);
    }
  }

  return answer;
}
