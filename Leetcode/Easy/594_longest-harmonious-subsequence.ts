/*
⭐️ 문제 정보 ⭐️
문제 : 594 - Longest Harmonious Subsequence
레벨 : Easy
링크 : https://leetcode.com/problems/longest-harmonious-subsequence
*/

// ANCHOR 2026.03.26 풀이 (23분 소요)
{
  function findLHS1(nums: number[]): number {
    // 소트하면 시간이 너무 오래 걸릴까요.
    // 소트를 해서, 각 시작점 숫자마다 범위를 구해보려고 했는데 (최대-최소가 1이어야 하기 때문에 해볼만하다고 생각함.) 포인터 이동 구조가 직관적으로 와닿지 않음
    // 다음 방법.
    // nums를 순회하면서 각 숫자의 개수를 센다.
    // 인접한 숫자들끼리 개수 더하면서 최대 갯수를 구해준다. [1,2], [2,3], [3,4] 이런식

    // 1. nums를 순회하면서 각 숫자의 개수를 센다.
    const map = new Map();
    for (const num of nums) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }

    // 2. 인접한 숫자들끼리 개수 더하면서 최대 갯수 구해주기
    // 인접한 숫자를 알아야 하기 때문에... map의 key를 받아서 오름차순 정렬
    const keys = [...map.keys()].sort((a, b) => a - b);
    let max = 0;
    for (let idx = 1; idx < keys.length; idx++) {
      // 인접한 숫자의 차이가 정확히 1이어야 함. 아니면 넘어감
      if (keys[idx] - keys[idx - 1] === 1) max = Math.max(max, map.get(keys[idx - 1]) + map.get(keys[idx]));
    }

    return max;
  }

  function findLHS2(nums: number[]): number {
    // 1. nums를 순회하면서 각 숫자의 개수를 센다.
    const map = new Map();
    for (const num of nums) {
      map.set(num, (map.get(num) ?? 0) + 1);
    }

    // 2. 인접한 숫자들끼리 개수 더하면서 최대 갯수 구해주기
    // 정렬을 해줄 필요가 없었음. map을 순회하면서 그 key에 +1한 값이 map에 있으면 max를 계산하는 방법이 있었음.
    let max = 0;
    for (const [key, value] of map) {
      if (map.has(key + 1)) max = Math.max(max, map.get(key) + map.get(key + 1));
    }

    return max;
  }
}
