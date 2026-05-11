/*
⭐️ 문제 정보 ⭐️
문제 : 2095 - Delete the Middle Node of a Linked List
레벨 : Medium
링크 : https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list
*/

// ANCHOR 2026.05.11 풀이 (13분 소요)

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

{
  function deleteMiddle1(head: ListNode | null): ListNode | null {
    // 연결리스트의 중간의 것을 삭제하기.
    // .. 중간의 것을 어떻게 찾지? 일단 찾는다.
    let end = head;
    let n = 1;
    while (end.next) {
      end = end.next;
      n++;
    }

    if (n === 1) return null;

    const midIdx = Math.floor(n / 2);
    let prevMid = head; // 이전것을 알아야 mid를 제거할 수 있음
    for (let idx = 1; idx < midIdx; idx++) {
      prevMid = prevMid.next;
    }

    // 삭제하기
    prevMid.next = prevMid.next.next;

    return head;
  }
}
