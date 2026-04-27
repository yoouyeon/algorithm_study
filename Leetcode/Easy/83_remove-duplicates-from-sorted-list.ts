/*
⭐️ 문제 정보 ⭐️
문제 : 83 - Remove Duplicates from Sorted List
레벨 : Easy
링크 : https://leetcode.com/problems/remove-duplicates-from-sorted-list
*/

// ANCHOR 2026.04.27 풀이
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  const answer = new ListNode(head.val, head.next);
  let curr = answer;

  while (curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next; // 중복이면 건너뜀
    } else {
      curr = curr.next; // 다른 값이면 이동
    }
  }

  return answer;
}
