/*
⭐️ 문제 정보 ⭐️
문제 : 42 - Trapping Rain Water
레벨 : Hard
링크 : https://leetcode.com/problems/trapping-rain-water/
*/

// ANCHOR 2026.03.03 풀이
function trap2(height: number[]): number {
  // 배열의 각 깊이 기둥 높이. 한 칸의 크기는 1
  // 특정 위치에 얼마나 물이 고이는지는 해당 위치 기준 왼쪽과 오른쪽 중에 작은 값에서 현재 높이를 뺀 값이 된다.
  // leftMax와 rightMax를 구하는게 관건..!
  // leftMax와와 rightMax를 매번 구해주면 O(n^2)으로 시간 초과가 될 가능성이 높은데, 뭔가 이 문제를 봤을 때 양쪽 방향에서 중심으로 향하면서 최댓값을 업데이트하는 식으로 풀 수 있을 것 같아서 투포인터 방식을 고민해보면 좋을 것 같다는 생각입니다.
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let result = 0;

  // 포인터가 만날 때 까지 반복
  while (left < right) {
    // 왼쪽 벽이 더 낮은 경우, 현재 left 위치의 물은 rightMax와 무관하게 leftMax로 결정된다.
    if (height[left] < height[right]) {
      // 낮은 벽을 업데이트해주고, 물이 찬 만큼 더해주기
      leftMax = Math.max(leftMax, height[left]);
      result += leftMax - height[left];
      left++;
    } else {
      // 오른쪽 벽이 더 낮은 경우 현재 right 위치의 물은 leftMax와 무관하게 rightMax로 결정된다.
      rightMax = Math.max(rightMax, height[right]);
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
}

// ANCHOR 2025.08.20 풀이
function trap1(height: number[]): number {
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
