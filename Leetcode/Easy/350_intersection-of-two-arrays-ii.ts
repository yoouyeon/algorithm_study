/*
⭐️ 문제 정보 ⭐️
문제 : 350 - Intersection of Two Arrays II
레벨 : Easy
링크 : https://leetcode.com/problems/intersection-of-two-arrays-ii
*/

// ANCHOR 2026.03.21 풀이 (10분 소요)
function intersect(nums1: number[], nums2: number[]): number[] {
  // 349보다 더 쉬워진듯 (오산이었다.)
  // 투포인터로 간다!
  // 정렬하고, 두 배열을 동시에 탐색하는 포인터를 둔다.
  // 같은 값을 가리킬 때 까지 이동시키고, 같으면 둘 중 하나라도 다른 숫자가 나올 때 까지 포인터를 이동시키며 결과 배열에 넣는다.
  // 둘 중 하나라도 종료될 때 까지 반복...

  let ptr1 = 0,
    ptr2 = 0;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const ret: number[] = [];

  while (ptr1 < nums1.length && ptr2 < nums2.length) {
    if (nums1[ptr1] < nums2[ptr2]) ptr1++;
    else if (nums1[ptr1] > nums2[ptr2]) ptr2++;
    else {
      ret.push(nums1[ptr1]);
      (ptr1++, ptr2++);
    }
  }

  return ret;
}
