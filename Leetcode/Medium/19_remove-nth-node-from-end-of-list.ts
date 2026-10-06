/*
문제 : 19 - Remove Nth Node From End of List
난이도 : Medium
링크 : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
태그 : Linked List, Two Pointers
*/

// ANCHOR 2026.10.06 풀이 (12분 소요)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let fast: ListNode | null = dummy;
    let slow: ListNode = dummy;

    // fast를 n칸 먼저 보내서 slow와 간격을 n으로 벌린다
    for (let i = 0; i < n; i++) fast = fast!.next;

    // fast가 마지막 노드에 닿으면 slow는 삭제할 노드의 바로 앞에 있다
    while (fast!.next) {
        fast = fast!.next;
        slow = slow.next!;
    }

    slow.next = slow.next!.next;

    return dummy.next;
};
