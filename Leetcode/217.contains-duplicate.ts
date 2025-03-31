// [217] Contains Duplicate

/**
 * Solution 1. Set을 활용하기 1
 *
 * Idea:
 * - 자주 사용했던 패턴이라 문제를 보자마자 바로 Set을 활용하는 방법을 떠올렸습니다...
 * - nums에서 중복된 원소를 제거하기 위해 nums를 이용해서 중복을 허용하지 않는 자료구조인 Set을 생성합니다. (numSet)
 * - 중복된 원소가 있었다면 numSet에서 제거되어 nums의 길이와 numSet의 크기가 다를 것이므로 비교해서 결과를 반환합니다.
 *
 * Runtime: 14ms Beats 49.07%
 * Time Complexity: O(n) (n: nums의 원소 개수)
 * - nums 배열을 이용해서 Set을 만드는 곳에서 O(n)이 소요됩니다.
 *
 * Memory: 67.42MB Beats 55.35%
 * Space Complexity: O(n) (n: nums의 원소 개수)
 * - nums에 중복된 원소가 없는 최악의 경우 numSet을 생성하기 위해 n만큼의 공간이 추가로 필요합니다.
 */
function containsDuplicate1(nums: number[]): boolean {
  const numsSet = new Set<number>(nums);
  return numsSet.size !== nums.length;
}

/**
 * Solution 2. Set을 활용하기 2
 *
 * Idea:
 * - 최악의 경우(모든 원소들이 중복이 아닌 경우)가 아닐 때 약간 더 빠르게 결과를 반환할 수 있는 방법
 * - 동일하게 Set을 활용하지만 직접 nums를 순회하며 numSet에 없는 원소일 경우에만 numSet에 원소를 추가합니다.
 * - numSet에 이미 존재하는 원소를 nums에서 마주친다면 이 원소는 중복이므로 바로 true를 반환합니다.
 * - 중복인 원소를 발견하자마자 순회를 멈추기 때문에 시간 복잡도는 동일하지만 아주 약간 더 빠릅니다...
 *
 * Runtime: 13ms Beats 58.46%
 * Time Complexity: O(n) (n: nums의 원소 개수)
 * - nums를 순회하며 Set을 만드는 곳에서 O(n)이 소요됩니다.
 *
 * Memory: 69.76MB Beats 19.75%
 * Space Complexity: O(n) (n: nums의 원소 개수)
 * - Solution 1과 동일
 * - 메모리가 2MB 이상으로 꽤 차이 나는 이유는 아마도 Set에 원소를 추가할 때 생성자로 추가하는 것과 add로 추가하는 것에서 발생하는 최적화 차이가 아닐까... 하고 생각했습니다 🤨
 */
function containsDuplicate2(nums: number[]): boolean {
  const numSet = new Set<number>();

  for (let num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}
