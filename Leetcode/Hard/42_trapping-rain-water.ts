/*
⭐️ 문제 정보 ⭐️
문제 : 42 - Trapping Rain Water
레벨 : Hard
링크 : https://leetcode.com/problems/trapping-rain-water/
*/

/*
 * [42] Trapping Rain Water
 */

function trap(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let total = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      // 왼쪽으로
      leftMax = Math.max(leftMax, height[left]);
      total += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total += rightMax - height[right];
      right--;
    }
  }

  return total;
}
