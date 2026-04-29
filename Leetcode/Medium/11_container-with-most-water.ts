/**
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 11 - Container With Most Water
 * 레벨 : Medium
 * 링크 : https://leetcode.com/problems/container-with-most-water/
 */

// ANCHOR 2026.04.29 풀이 (28분 소요)
{
  function maxArea(height: number[]): number {
    const n = height.length;
    let left = 0;
    let right = n - 1;
    let max = Math.min(height[left], height[right]) * (right - left);

    while (left < right) {
      // 둘 중 작은 것을 "안쪽으로" 옮김
      if (height[left] < height[right]) left++;
      else right--;
      max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    }

    return max;
  }
}

// 2025.05.06 풀이
function maxArea(height: number[]): number {
  const n = height.length;
  let answer = 0;
  let leftIdx = 0;
  let rightIdx = n - 1;

  while (leftIdx < rightIdx) {
    const minHeight = Math.min(height[leftIdx], height[rightIdx]);
    const area = (rightIdx - leftIdx) * minHeight;

    answer = Math.max(answer, area);

    // 전략: 항상 더 낮은 높이의 포인터를 이동 (높이 증가 가능성 최대화)
    // 높이가 낮은 것을 옮겨야 최소 높이 상승을 기대할 수 있다.
    // 높은 것을 옮기면 운 좋으면 minHeight 유지, 운 나쁘면 minHeight가 더 작아진다.

    if (height[leftIdx] === minHeight) {
      leftIdx++;
      continue;
    }
    rightIdx--;
  }

  return answer;
}
