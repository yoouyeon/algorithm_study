/*
⭐️ 문제 정보 ⭐️
문제 : 27 - Remove Element
레벨 : Easy
링크 : https://leetcode.com/problems/remove-element/
*/

/*
 * [27] Remove Element
 */

function removeElement(nums: number[], val: number): number {
  const REMOVED = -1;
  let [left, right] = [0, nums.length - 1];
  let count = 0;

  while (left <= right && nums[left] !== REMOVED) {
    // 제거하기
    if (nums[left] === val) {
      nums[left] = nums[right];
      nums[right] = REMOVED;
      right--;
      count++;
    } else {
      left++;
    }
  }

  return nums.length - count;
}
