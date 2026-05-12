/*
⭐️ 문제 정보 ⭐️
문제 : 2130 - Maximum Twin Sum of a Linked List
레벨 : Medium
링크 : https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list
*/

// ANCHOR 2026.05.12 풀이 (29분 소요)
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

function pairSum(head: ListNode | null): number {
  // twin sum의 최댓값을 구하는 문제...
  // ----
  if (head.next.next === null) return head.val + head.next.val;

  let slow = head;
  let fast = head.next.next;
  // fast는 두칸씩, slow는 한칸씩 가다 보면 fast가 끝에 도달하는 시점에 slow는 절반보다 하나 뒤에 있게 됨.
  while (fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 배열을 뒤집어주자...
  let prev = slow.next; // 위치 보정
  let curr = prev.next;
  prev.next = null; // 현재 prev가 리스트의 마지막 노드가 됨

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // twin sum 구해줍시다..
  let leftHalf = head;
  let rightHalf = prev;
  let maxTwinSum = 0;

  while (leftHalf && rightHalf) {
    maxTwinSum = Math.max(maxTwinSum, leftHalf.val + rightHalf.val);
    leftHalf = leftHalf.next;
    rightHalf = rightHalf.next;
  }

  return maxTwinSum;
}
