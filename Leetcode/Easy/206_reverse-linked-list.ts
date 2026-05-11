/*
⭐️ 문제 정보 ⭐️
문제 : 206 - Reverse Linked List
레벨 : Easy
링크 : https://leetcode.com/problems/reverse-linked-list
*/

// ANCHOR 2026.05.11 풀이 (17분 소요)
{
  // 어떻게 예전에 7분만에 풀었지;
  function reverseList(head: ListNode | null): ListNode | null {
    if (!head?.next) return head;

    let prev = head;
    let curr = head.next;
    head.next = null; // head가 가장 마지막 노드가 될 것이므로...
    while (curr) {
      const next = curr.next;
      curr.next = prev; // 뒤집어주기
      prev = curr;
      curr = next;
    }

    return prev;
  }
}

// ANCHOR 2026.04.22 풀이 (7분 소요)
{
  function reverseList(head: ListNode | null): ListNode | null {
    // 3가지가 필요함 : 현재노드, 이전노드, 다음노드
    let curr = head;
    let prev = null;
    let next = null;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
}

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
