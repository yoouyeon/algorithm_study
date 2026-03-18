// ⭐️ 문제 정보 ⭐️
// 문제 : 141 - Linked List Cycle
// 레벨 : Easy
// 링크 : https://leetcode.com/problems/linked-list-cycle

// ANCHOR 2026.03.18 풀이

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle1(head: ListNode | null): boolean {
  // pos는 tail의 next가 가리키는 노드의 인덱스 (0-indexed) 를 의미함
  // 근데 인자로 주어지진 않음. 그래서 코드에선 쓸수는 없음...? (그냥 리트코드가 활용하는 값인 것 같다. (예제 입력 분석할 때 정도만 활용됨))
  // 사이클이 있으려면 tail의 next가 null이 아니라 다른 노드를 가리켜야 한다.

  // O(n) : tail을 직접 확인하기
  let cur = head;
  const visited = new Set();

  while (cur !== null) {
    if (visited.has(cur)) return true;
    visited.add(cur);
    cur = cur.next;
  }

  return false;
}

// 플로이드의 토끼와 거북이 알고리즘 (Floyd's Tortoise and Hare Algorithm)
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next; // 2칸씩 이동

    if (slow === fast) return true;
  }

  return false;
}
