/**
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 1 - Two Sum
 * 레벨 : Easy
 * 링크 : https://leetcode.com/problems/two-sum
 */

/**
 * Solution 1. 배열에서 짝 찾기
 *
 * [Idea]
 * 단순하게 nums를 순회하면서 현재 원소(num)과 합해서 target을 만들 수 있는 원소가 있는지 확인함
 *
 * [Time Complexity]
 * O(n^2) (n: nums의 원소 개수)
 * nums를 순회하면서 (O(n)) Array.indexOf 메소드로 짝이 되는 원소를 찾는 방식 (O(n))
 * O(n)이 중첩되어 있으므로 O(n^2)
 *
 * [Space Complexity]
 * O(1) (n: nums의 원소 개수)
 * 추가로 필요한 공간이 없다.
 */
function twoSum1(nums: number[], target: number): number[] {
  for (let idx = 0; idx < nums.length - 1; idx++) {
    const complementIdx = nums.indexOf(target - nums[idx], idx + 1);
    if (complementIdx !== -1) {
      return [idx, complementIdx];
    }
  }
  // 타입 에러를 제거하기 위해 추가한 코드.
  // 답이 무조건 존재한다는 조건이 있었으므로 이 코드에는 도달하지 않는다.
  return [];
}

/**
 * Solution 2. Map을 이용하기 - 1
 *
 * [Idea]
 * O(n)보다 작게 만들 수 있는 방법은 인덱스를 찾는 데 걸리는 시간을 줄이는 것이라 생각해서 검색 시간이 짧은 Map을 활용했다.
 * Map인 이유는 index도 함께 저장해야 하기 때문...
 * nums의 원소를 key로, 그 index를 value로 하는 Map을 미리 만들어두고 시작했다.
 *
 * [Time Complexity]
 * O(n) (n: nums의 원소 개수)
 * Map을 생성할 때 O(n)
 * Map에서 짝이 되는 원소를 찾는 것은 O(1)
 *
 * [Space Complexity]
 * O(n) (n: nums의 원소 개수)
 * Map을 생성할 때 필요한 공간 n
 */
function twoSum2(nums: number[], target: number): number[] {
  const numMap = nums.reduce((map, num, idx) => {
    map.set(num, idx);
    return map;
  }, new Map());

  for (let idx = 0; idx < nums.length; idx++) {
    const complementIdx = numMap.get(target - nums[idx]);
    if (complementIdx !== undefined && complementIdx !== idx) {
      return [idx, complementIdx];
    }
  }

  return [];
}

/**
 * Solution 3. Map을 이용하기 - 2
 *
 * [Idea]
 * 짝을 찾는 for loop에서 Map에서 찾은 원소가 현재 원소와 동일한 것인지를 확인하는 조건문이 마음에 들지 않아서 좀 더 좋은 방법이 있는지 찾아보다 발견한 방법.
 * Map을 미리 생성하지 않고 짝을 찾는 for loop에서 Map을 생성한다.
 * [a, b]가 답일 때 지금까지는 a를 기준으로 b를 찾았지만 지금은 b를 기준으로 a를 찾게 되는 것!
 * 원소의 짝을 찾을 때 현재 원소를 Map에 추가하기 전이기 때문에 맘에 들지 않던 조건문도 안 써도 된다.
 *
 * [Time Complexity]
 * O(n) (n: nums의 원소 개수)
 *
 * [Space Complexity]
 * O(n) (n: nums의 원소 개수)
 * Solution 1보다 조금 메모리를 덜 쓴다.
 */
function twoSum3(nums: number[], target: number): number[] {
  const numMap = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const complementIdx = numMap.get(target - nums[idx]);
    if (complementIdx !== undefined) {
      return [idx, complementIdx];
    }
    numMap.set(nums[idx], idx);
  }

  return [];
}
