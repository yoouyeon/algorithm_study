/*
⭐️ 문제 정보 ⭐️
문제 : 977 - Squares of a Sorted Array
레벨 : Easy
링크 : https://leetcode.com/problems/squares-of-a-sorted-array
*/

// ANCHOR 2026.04.20 풀이 (8분 소요)
{
  function sortedSquares1(nums: number[]): number[] {
    // 감소하지 않는 nums배열
    // 각 숫자의 제곱을 감소하지 않는 순서대로 정렬해서 반환하기
    // 1. 그대로 구현한다 (제곱한다 -> 정렬한다) => nlogn => 시간초과가 나겠지 (안났다)
    const answer = [];
    for (const num of nums) {
      answer.push(num ** 2);
    }
    return answer.sort((a, b) => a - b);
  }

  function sortedSquares2(nums: number[]): number[] {
    // 2. O(n) solution을 찾아보라는 도발
    // 결국 키워드를 봤다. 투포인터?!
    // 입력 배열이 이미 정렬되어 있다는 것을 활용하면 된다
    // [-14, -3, 0, 1, 27] 이런 식의 배열이면
    // 양쪽에서 좁혀가면서 절댓값이 크거나 같은 것을 곱해서 뒤에서부터 넣어주는 방식으로 진행하면 됨
    let answer = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let pos = nums.length - 1; // 뒤에서부터 넣는다.
    while (left <= right) {
      const leftSquare = nums[left] ** 2;
      const rightSquare = nums[right] ** 2;
      if (leftSquare > rightSquare) {
        answer[pos] = leftSquare;
        (pos--, left++);
      } else {
        answer[pos] = rightSquare;
        (pos--, right--);
      }
    }
    return answer;
  }
}
