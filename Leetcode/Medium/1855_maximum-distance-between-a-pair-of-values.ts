/*
⭐️ 문제 정보 ⭐️
문제 : 1855 - Maximum Distance Between a Pair of Values
레벨 : Medium
링크 : https://leetcode.com/problems/maximum-distance-between-a-pair-of-values
*/

// ANCHOR 2026.04.19 풀이 (23분 소요)
{
  function maxDistance1(nums1: number[], nums2: number[]): number {
    // i <= j 에 nums1[i] <= nums[j] 이면 valid pair
    // j - i 값의 최대 길이 구하기
    // 아, nums1, nums2 배열은 항상 감소하는 배열이다

    // 그냥 생각나는 대로 풀어봄 => 이렇게 하면 당연히 TLE가 난다 (n이 최대 10^5임)
    let answer = 0;
    for (let i = 0; i < nums1.length; i++) {
      for (let j = i; j < nums2.length; j++) {
        if (nums1[i] <= nums2[j]) {
          // valid
          answer = Math.max(answer, j - i);
        }
      }
    }
    return answer;
  }

  function maxDistance2(nums1: number[], nums2: number[]): number {
    // 역시 투포인터로도 가능했다... (Hint2를 봄) 이건 직관적으로 이해가 됨. 가자
    let answer = 0;
    let i = 0;
    let j = 0;
    while (i < nums1.length) {
      while (j < nums2.length && nums1[i] <= nums2[j]) j++;
      answer = Math.max(answer, j - i - 1);
      i++;
      // answer보다 작은 범위는 체크 안해도 됨. 넘긴다.
      j = i + answer;
      // answer보다 큰 범위 체크가 불가능하면 탐색 종료 (answer가 가장 큰 범위임이 확정)
      if (j >= nums2.length) break;
    }

    return answer;
  }

  // 아! 정렬된 상태라는 것에 힌트를 얻었어야 했다. (Hint1을 봄) 정렬된 상태 => binary search를 쓰기 딱 좋음
  // 그런데 어떤 식으로 binary search를 써야 할지 모르겠다.
  // Claude의 설명
  function maxDistance3(nums1: number[], nums2: number[]): number {
    let answer = 0;
    for (let i = 0; i < nums1.length; i++) {
      let lo = i,
        hi = nums2.length - 1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (nums2[mid] >= nums1[i]) {
          answer = Math.max(answer, mid - i);
          lo = mid + 1;
        } else hi = mid - 1;
      }
    }
    return answer;
  }
}
