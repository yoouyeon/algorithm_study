/*
⭐️ 문제 정보 ⭐️
문제 : 160 - Intersection of Two Linked Lists
레벨 : Easy
링크 : https://leetcode.com/problems/intersection-of-two-linked-lists
*/

// ANCHOR 2026.03.19 풀이
/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // 두 리스트를 함께 순회하면서 등장한 노드들을 모두 저장한다.
  // 둘 중 하나에서라도 이미 등장했던 노드에 다시 접근하게 된다면 intersection이 있는 것!
  // A와 B는 사이클이 없다 했기 때문에 nodeSet에 들어있던 같은 노드는 상대 리스트에 들어있던 노드임이 보장된다.
  // set을 사용하지 않는 방법을 찾지 못한 것이 아쉬운 포인트...

  let ptrA = headA,
    ptrB = headB;
  let nodeSet = new Set();

  while (ptrA !== null || ptrB !== null) {
    if (ptrA !== null) {
      if (nodeSet.has(ptrA)) return ptrA;
      nodeSet.add(ptrA);
      ptrA = ptrA.next;
    }
    if (ptrB !== null) {
      if (nodeSet.has(ptrB)) return ptrB;
      nodeSet.add(ptrB);
      ptrB = ptrB.next;
    }
  }

  return null;
}
