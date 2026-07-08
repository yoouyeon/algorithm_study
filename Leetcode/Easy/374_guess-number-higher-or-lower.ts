/*
⭐️ 문제 정보 ⭐️
문제 : 374 - Guess Number Higher or Lower
레벨 : Easy
링크 : https://leetcode.com/problems/guess-number-higher-or-lower
*/

// ANCHOR 2026.07.08 풀이 (12분 소요)
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
function guessNumber(n: number): number {
  let left = 1;
  let right = n;
  let mid = Math.floor((right + left) / 2);

  while (true) {
    const g = guess(mid);
    if (g === 0) break;
    // mid가 답이 아님이 확실하므로 굳이 범위에 남길 필요가 없다.
    if (g === -1) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((right + left) / 2);
  }

  return mid;
}
