// [15] 3Sum

/**
 * Solution 1. DFS - Time Limit Exceeded
 *
 * [Idea]
 * 가장 처음 떠오른 방법으로 DFS를 이용해서 모든 조합을 구하고 합이 0인 것을 찾는 방법
 * 중복을 제거하기 위해서 Set을 활용했다.
 *
 * [Time Complexity]
 * O(n^3) (n: nums의 원소 개수)
 * 하나의 조합을 만드는 데 재귀적으로 DFS를 3번 호출하는데, DFS 내에서 nums를 순회하기 때문에 O(n^3)
 *
 * [Space Complexity]
 * O(n^3) (n: nums의 원소 개수)
 * 모든 조합이 unique한 경우에 DFS를 통해서 만들어지는 조합의 개수는 O(n^3)개가 된다.
 * 최악의 경우 answerSet의 크기가 O(n^3)이 될 수 있다...
 */
function threeSum1(nums: number[]): number[][] {
  const answerSet = new Set<string>();
  const answer: number[][] = [];

  function dfs(start: number, path: number[]) {
    if (path.length === 3) {
      const sum = path.reduce((a, b) => a + b, 0);
      if (sum === 0) {
        const sorted = [...path].sort((a, b) => a - b);
        const key = sorted.join(",");
        if (!answerSet.has(key)) {
          answerSet.add(key);
          answer.push(sorted);
        }
      }
      return;
    }

    for (let idx = start; idx < nums.length; idx++) {
      dfs(idx + 1, [...path, nums[idx]]);
    }
  }

  dfs(0, []);
  return answer;
}

/**
 * Solution 2. Hash map - Time Limit Exceeded
 *
 * [Idea]
 * x를 고정하고 y, z를 찾는 방법
 * Two Sum 문제와 유사한 방식으로 풀었다.
 *
 * [Time Complexity]
 * O(n^2) (n: nums의 원소 개수)
 * x를 고정시켜 nums를 순회하는 데 O(n) 소요되고
 * y, z를 찾는 데 O(n) 소요되므로 O(n^2)
 *
 * [Space Complexity]
 * O(n^2) (n: nums의 원소 개수)
 * (GPT가 이렇게 설명했지만, solution 1과 공간 복잡도 측면에서 다른 점을 잘 모르겠습니다...)
 */
function threeSum2(nums: number[]): number[][] {
  const answerSet = new Set<string>();
  const answer: number[][] = [];

  for (let xIdx = 0; xIdx < nums.length - 2; xIdx++) {
    const x = nums[xIdx];
    const set = new Set<number>();

    for (let yIdx = xIdx + 1; yIdx < nums.length; yIdx++) {
      const z = -x - nums[yIdx];
      if (set.has(z)) {
        const triplet = [x, nums[yIdx], z].sort((a, b) => a - b);
        const key = triplet.join(",");
        if (!answerSet.has(key)) {
          answerSet.add(key);
          answer.push(triplet);
        }
      }
      set.add(nums[yIdx]);
    }
  }

  return answer;
}

/**
 * Solution 3. Two Pointers
 *
 * [Idea]
 * Set을 이용하지 않고 정렬을 통해서 중복된 조합을 제거하는 방법
 * 투포인터 방식으로 x를 고정하고 y, z를 찾는다.
 * 중복된 원소는 건너뛰는 방식으로 중복된 조합을 제거한다.
 *
 * [Time Complexity]
 * O(n^2) (n: nums의 원소 개수)
 * 시작 원소 (idx)를 고정시켜 nums를 순회하는 데 O(n) 소요되고
 * 내부에서 투포인터로 y, z를 찾는 데 O(n) 소요되므로 O(n^2)
 *
 * [Space Complexity]
 * O(1)
 * left, right 변수만 사용하므로 O(1)
 */
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let idx = 0; idx < nums.length - 2; idx++) {
    // 같은 숫자로 시작하는 조합을 제거 (시도하지 않는다)
    if (idx > 0 && nums[idx] === nums[idx - 1]) continue;

    let left = idx + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[idx] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[idx], nums[left], nums[right]]);
        // 중복된 조합을 제거하기 위해서 같은 원소인 경우를 건너뛴다.
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        // 다음 조합을 시도하기
        left++;
        right--;
        continue;
      }
      if (sum < 0) {
        left++;
        continue;
      }
      right--;
    }
  }

  return result;
}
