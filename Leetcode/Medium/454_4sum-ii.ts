/*
⭐️ 문제 정보 ⭐️
문제 : 454 - 4Sum II
레벨 : Medium
링크 : https://leetcode.com/problems/4sum-ii/
*/

// ANCHOR 2026.04.10 풀이 (19분 소요)
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
  // 각 배열의 원소들을 하나씩 뽑아서 0이 되는 조합을 구하시오...?
  // 다 구하면 N^4인데 시간이 너무너무 오래 걸린다.
  // 아무리봐도 해시
  // 해시를 하려면 Key 값으로 쓸만한게 있어야 하는데... (a + b) = -(c + d) 이런 식으로 해서 N^2로 해결을 해야 할 듯 하다.
  let answer = 0;
  const map = new Map<number, number>(); // key : a + b, value : 등장 횟수
  const n = nums1.length;

  // a + b 처리
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      map.set(nums1[i] + nums2[j], (map.get(nums1[i] + nums2[j]) ?? 0) + 1);
    }
  }

  // c + d 처리
  for (let k = 0; k < n; k++) {
    for (let l = 0; l < n; l++) {
      if (map.has(-(nums3[k] + nums4[l]))) answer += map.get(-(nums3[k] + nums4[l]));
    }
  }

  return answer;
}
