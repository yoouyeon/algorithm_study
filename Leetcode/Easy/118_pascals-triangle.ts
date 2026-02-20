/*
⭐️ 문제 정보 ⭐️
문제 : 118 - Pascal's Triangle
레벨 : Easy
링크 : https://leetcode.com/problems/pascals-triangle/
*/

/*
 * [118] Pascal's Triangle
 */

function generate(numRows: number): number[][] {
  const answer: number[][] = [];

  for (let row = 0; row < numRows; row++) {
    const currentRow = Array(row + 1).fill(1);
    for (let col = 1; col < row; col++) {
      currentRow[col] = answer[row - 1][col - 1] + answer[row - 1][col];
    }
    answer.push(currentRow);
  }

  return answer;
}
