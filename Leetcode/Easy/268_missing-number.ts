/*
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 268 - Missing Number
 * 레벨 : Easy
 * 링크 : https://leetcode.com/problems/missing-number
 */

// ANCHOR 2026.03.20 풀이
function missingNumber(nums: number[]): number {
  // NOTE 문제 이해하기
  // 0부터 n까지의 수가 겹치지 않고 들어있는 nums 배열. 그 범위 중에서 빠져있는 수 한개를 구하시오.

  // NOTE 풀이 아이디어 1
  // 그냥 구한다. 지금까지 등장한 수들 + 최댓값을 nums를 순회하며 구한다.
  // 그리고 다시 한번 0부터 n까지 순회하면서 빠진 수를 구한다.
  // 만약에 다 들어있다면 가장 큰 수가 빠져있는 것. max + 1이 실제 n이었던 것이므로 그걸 반환한다.

  // let max = 0;
  // const set = new Set();

  // for (const num of nums) {
  //   set.add(num);
  //   max = Math.max(max, num);
  // }

  // const ret = [];
  // for (let i = 0; i <= max; i++) {
  //   if (!set.has(i)) return i;
  // }

  // return max + 1;

  // NOTE 풀이 아이디어 2
  // 풀고 나니 덧셈으로도 가능할 것 같다.
  // 단순히 maxSum === numsSum으로 판단하게 되면 0이 빠진 경우를 결정하기 어렵기 때문에 배열의 길이를 비교해서 가장 큰 수가 빠져있는 경우를 판단했다.

  const max = Math.max(...nums);
  const numsSum = nums.reduce((acc, cur) => acc + cur, 0);
  const maxSum = Math.floor((max * (max + 1)) / 2);

  return nums.length === max ? maxSum - numsSum : max + 1;
}
