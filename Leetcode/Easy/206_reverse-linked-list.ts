/*
⭐️ 문제 정보 ⭐️
문제 : 206 - Reverse Linked List
레벨 : Easy
링크 : https://leetcode.com/problems/reverse-linked-list
*/

// ANCHOR 2026.04.22 풀이 (7분 소요)
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
