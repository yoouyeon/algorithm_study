/*
⭐️ 문제 정보 ⭐️
문제 : 605 - Can Place Flowers
레벨 : Easy
링크 : https://leetcode.com/problems/can-place-flowers/
*/

/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 *
 * 그리디로 풀어주기
 * 빠르게 문제 풀이를 시작하긴 했는데, 방심했더니 자잘한 실수나 엣지케이스 처리가 잘 되지 않아서 여러 번 제출했었다..
 * ---
 * 엣지 케이스
 * flowerbed = [0]
 * n = 1
 * ---
 * 처음 제출했던 코드는 완전 의식의 흐름으로 풀었어가지고 지저분했는데, undefined || 0 이용해서 좀 깔끔하게 리팩토링해봤다.
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  const len = flowerbed.length;

  for (let idx = 0; idx < len && count < n; idx++) {
    const prev = flowerbed[idx - 1] || 0;
    const curr = flowerbed[idx];
    const next = flowerbed[idx + 1] || 0;

    // 심을 수 있는 경우 심어주기
    if (prev === 0 && curr === 0 && next === 0) {
      flowerbed[idx] = 1;
      count++;
    }
  }

  return count >= n;
}
// @lc code=end
