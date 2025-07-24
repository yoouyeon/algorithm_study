/*
 * [88] Merge Sorted Array
 */
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let [a, b] = [m - 1, nums1.length - 1]; // a: nums1의 가장 큰 원소를 가리키는 포인터, b: nums1의 가장 오른쪽 원소(0)를 가리키는 포인터
  let c = n - 1; // c: nums2의 가장 큰 원소를 가리키는 포인터

  // nums2를 모두 nums1로 옮길 때 까지 반복한다.
  while (c != -1) {
    // 만약에 남은 a가 없거나, a보다 c가 더 크다면 c를 b 자리에 넣는다.
    if (a < 0 || nums1[a] < nums2[c]) {
      nums1[b] = nums2[c];
      // 포인터들 업데이트
      b--;
      c--;
      continue;
    }
    // 만약에 a보다 c가 크거나 같다면 a를 b에 옮기고 기존 a자리를 비운다 (0으로)
    nums1[b] = nums1[a];
    nums1[a] = 0;
    // 포인터들 업데이트
    b--;
    a--;
  }
}
