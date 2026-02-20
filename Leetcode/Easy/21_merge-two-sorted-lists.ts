/**
 * ⭐️ 문제 정보 ⭐️
 * 문제 : 21 - Merge Two Sorted Lists
 * 레벨 : Easy
 * 링크 : https://leetcode.com/problems/merge-two-sorted-lists
 */

// ANCHOR 2026.02.21 풀이
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  let ptr1 = list1;
  let ptr2 = list2;

  while (ptr1 && ptr2) {
    if (ptr1.val < ptr2.val) {
      // cur.next = new ListNode(ptr1.val);
      cur.next = ptr1; // 기존 노드를 재사용하여 메모리 효율성 향상
      ptr1 = ptr1.next;
    } else {
      // cur.next = new ListNode(ptr2.val);
      cur.next = ptr2;
      ptr2 = ptr2.next;
    }
    cur = cur.next;
  }

  while (ptr1) {
    // cur.next = new ListNode(ptr1.val);
    cur.next = ptr1;
    ptr1 = ptr1.next;
    cur = cur.next;
  }
  while (ptr2) {
    // cur.next = new ListNode(ptr2.val);
    cur.next = ptr2;
    ptr2 = ptr2.next;
    cur = cur.next;
  }

  return dummy.next;
}
