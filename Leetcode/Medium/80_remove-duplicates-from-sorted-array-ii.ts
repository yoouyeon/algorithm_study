/*
⭐️ 문제 정보 ⭐️
문제 : 80 - Remove Duplicates from Sorted Array II
레벨 : Medium
링크 : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
*/

/*
 * [80] Remove Duplicates from Sorted Array II
 */

// insertPos : 왼쪽에서 유니크한 숫자들을 모으는 포인터
// readPos : 오른쪽에서 숫자들을 탐색하는 포인터
function removeDuplicates(nums: number[]): number {
  if (nums.length <= 2) {
    // 길이가 2 이하이면 항상 유효하므로 배열 길이를 반환
    return nums.length;
  }

  let insertPos = 2; // 처음 두 개의 원소는 항상 유효하기 떄문에 새 값을 삽입할 위치는 인덱스 2부터

  for (let readPos = 2; readPos < nums.length; readPos++) {
    // 현재 읽고 있는 값이 결과 배열의 마지막 두 값 중 첫 번째 값과 다르다면
    // 지금까지 같은 숫자가 2번 이상 연속되지 않았다는 뜻 -> 유효한 숫자이므로 수집
    if (nums[readPos] !== nums[insertPos - 2]) {
      nums[insertPos] = nums[readPos];
      insertPos++;
    }
    // 유효하지 않다면 아무것도 하지 않고 넘어감
  }

  return insertPos; // 고유한 숫자들의 개수
}
