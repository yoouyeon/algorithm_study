/*
⭐️ 문제 정보 ⭐️
문제 : 2615 - Sum of Distances
레벨 : Medium
링크 : https://leetcode.com/problems/sum-of-distances
*/

// ANCHOR 2026.04.23 풀이 (36분 소요)
// prefixSum 문제가 너무 어렵다.
function distance(nums: number[]): number[] {
  // 현황 파악 (TLE 주의)
  const map: Map<number, number[]> = new Map(); // key : 값, value: 그 값 인덱스
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) map.set(nums[i], []);
    map.get(nums[i])!.push(i);
  }

  // 구해주기 (TLE 주의)
  const arr = new Array(nums.length).fill(0);
  for (const indices of map.values()) {
    // 어떤 값에 해당하는 인덱스들을 한방에 구해줄 생각
    const prefixSum = [];
    let sum = 0;
    for (let j = 0; j < indices.length; j++) {
      sum += indices[j];
      prefixSum.push(sum);
    }
    for (let j = 0; j < indices.length; j++) {
      const leftSum = j === 0 ? 0 : prefixSum[j - 1];
      const rightSum = prefixSum[indices.length - 1] - prefixSum[j];
      arr[indices[j]] = indices[j] * j - leftSum + rightSum - indices[j] * (indices.length - 1 - j);
    }
  }

  return arr;
}
