/*
⭐️ 문제 정보 ⭐️
문제 : 328 - Odd Even Linked List
레벨 : Medium
링크 : https://leetcode.com/problems/odd-even-linked-list
*/

// ANCHOR 2026.05.11 풀이 (24분 소요)
// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  // 1, 2, 3, 4, 5,
  //    e  o
  // 둘이 바꿔줌
  // 1, 3, 2, 4, 5
  //    e  o
  // 1, 3, 2, 4, 5
  //       e     o
  // 이런 식으로 값을 스왑해주는 방식을 써보려고 했는데요. 답이 안 나왔습니다.
  // => 짝수/홀수 리스트를 따로 만들어서 나중에 이어주는 방법을 써보기로 함.

  // 이미 잘 정렬되어 있는 경우 그대로 반환
  if (!head?.next?.next) return head;

  // 나중 연결을 위해 따로 저장해두기.
  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  // 1, 2, 3, 4, 5
  // o : 1
  // e : 2
  // 원하는 모양은 아래의 모양
  // o : 1 - 3
  // e : 2 - 4
  while (even?.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  // 마지막에 이어붙여주기.
  odd.next = evenHead;

  return head;
}
