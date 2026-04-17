/*
⭐️ 문제 정보 ⭐️
문제 : 3488 - Closest Equal Element Queries
레벨 : Medium
링크 : https://leetcode.com/problems/closest-equal-element-queries
*/

// ANCHOR 2026.04.17 풀이 (10분 소요)
function solveQueries(nums: number[], queries: number[]): number[] {
  // indices 배열에서 target의 위치를 찾는 이분탐색
  function binarySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) return mid;
      if (array[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return -1;
  }

  // 각 값별로 등장하는 인덱스 목록을 저장 (순서대로 등장하므로 자동 정렬)
  const map = new Map<number, number[]>();
  for (let idx = 0; idx < nums.length; idx++) {
    if (!map.has(nums[idx])) map.set(nums[idx], []);
    map.get(nums[idx])!.push(idx);
  }

  const n = nums.length;
  const dist = (a: number, b: number) => Math.min(Math.abs(a - b), n - Math.abs(a - b));

  const result: number[] = [];
  for (const query of queries) {
    const indices = map.get(nums[query])!;

    if (indices.length <= 1) {
      result.push(-1);
      continue;
    }

    // indices 목록에서 query의 위치를 이분탐색으로 찾기
    const pos = binarySearch(indices, query);

    // 왼쪽/오른쪽 이웃 (원형)
    const leftNeighbor = indices[(pos - 1 + indices.length) % indices.length];
    const rightNeighbor = indices[(pos + 1) % indices.length];

    result.push(Math.min(dist(query, leftNeighbor), dist(query, rightNeighbor)));
  }

  return result;
}
