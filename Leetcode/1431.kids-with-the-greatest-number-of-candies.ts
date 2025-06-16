/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 *
 * 문제 지문을 잘못 해석해서 시작이 좀 늦었다.
 * 아이들 한명 한명에게 extraCandies만큼의 사탕을 더 줬을 때 이 녀석이 아이들 중에서 가장 많은 사탕을 가질 수 있는지를 확인하는 문제
 * 1번 아이에게 줬을 때, 2번 아이에게 줬을 때, ... n번 아이에게 줬을 때 이렇게 개별 경우를 나눠서 생각하는 것이었음.
 * 처음에는 모든 아이들에게 extraCandies만큼을 준다고 생각해서 문제가 이상하다고 생각함 (...)
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const maxCandies = Math.max(...candies);
  return candies.map(
    (currentCandies) => currentCandies + extraCandies >= maxCandies
  );
}
// @lc code=end
