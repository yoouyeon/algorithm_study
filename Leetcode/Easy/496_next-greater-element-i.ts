/*
⭐️ 문제 정보 ⭐️
문제 : 496 - Next Greater Element I
레벨 : Easy
링크 : https://leetcode.com/problems/next-greater-element-i
*/

// ANCHOR 2026.03.24 풀이 (50분 소요)
{
  /**
    [첫 번째 아이디어]
    for (const num of nums1) {
        // nums2에서 num의 위치 확인
        // 해당 위치에서부터 num보다 큰 값이 nums2에 있는지 확인
        // 있으면 그 값의 인덱스, 없으면 -1 ans에 삽입
    }
    시간복잡도 O(n^2) => 다른 방법이 있다면 찾아보자.
  */

  /**
    [두 번째 아이디어]
    nums2를 먼저 돌면서 정답을 미리 찾아둔다.
    반환 배열은 구해둔 값을 이용해서 nums1의 각 원소에 해당하는 값을 뽑아서 만든다.
  */
  function nextGreaterElement1(nums1: number[], nums2: number[]): number[] {
    const ans: number[] = [];
    const numMap = new Map<number, number>();

    for (let i = 0; i < nums2.length; i++) {
      const num = nums2[i];
      for (let j = i + 1; j < nums2.length; j++) {
        if (num < nums2[j]) {
          numMap.set(num, nums2[j]);
          break;
        }
      }
      if (!numMap.has(num)) numMap.set(num, -1);
    }

    for (const num of nums1) {
      ans.push(numMap.get(num)!); // 반드시 존재함 (문제 조건)
    }

    return ans;
  }

  /**
    [세 번째 아이디어]
    리트코드의 도발 ... 
    > Follow up: Could you find an O(nums1.length + nums2.length) solution?
    과 함께 토픽에 있는 Monotonic Stack이 궁금해서 찾아본 풀이.
    Monotonic Stack은 단조 스택. 내부 원소들이 항상 증가하거나, 항상 감소하는 스택
    새로운 원소를 넣을 때 조건을 위반하는 원소들을 pop하면서 처리한다.
  */
  function nextGreaterElement2(nums1: number[], nums2: number[]): number[] {
    const ans: number[] = [];
    const stack: number[] = [];
    const map = new Map();

    // 1. 단조증가스택을 이용해서 map을 채우기
    for (let idx = 0; idx < nums2.length; idx++) {
      const num = nums2[idx];
      while (stack.length > 0 && stack[stack.length - 1] < num) {
        // stack의 top이 num보다 작은 경우, top의 next greater가 num이 된다.
        map.set(stack[stack.length - 1], num);
        stack.pop();
      }
      // 다 채웠으면 현재 원소는 stack에 (나중 루프에서 map을 채운다.)
      stack.push(num);
    }

    // 2. 여전히 스택에 남아있는 원소들은 next greater가 없는 원소들
    for (const num of stack) {
      map.set(num, -1);
    }

    // 3. 정답 배열 만들기
    for (const num of nums1) {
      ans.push(map.get(num));
    }

    return ans;
  }
}
