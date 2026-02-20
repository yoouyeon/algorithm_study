/*
⭐️ 문제 정보 ⭐️
문제 : 26 - Remove Duplicates from Sorted Array
레벨 : Easy
링크 : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
*/

/*
 * [26] Remove Duplicates from Sorted Array
 */

function removeDuplicates(nums: number[]): number {
  let insertPos = 1;

  for (let readIdx = 1; readIdx < nums.length; readIdx++) {
    if (nums[readIdx] !== nums[insertPos - 1]) {
      nums[insertPos] = nums[readIdx];
      insertPos++;
    }
  }

  return insertPos; // 고유한 숫자들의 개수
}
