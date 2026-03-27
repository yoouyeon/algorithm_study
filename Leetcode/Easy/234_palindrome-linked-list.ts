/*
⭐️ 문제 정보 ⭐️
문제 : 234 - Palindrome Linked List
레벨 : Easy
링크 : https://leetcode.com/problems/palindrome-linked-list
*/

// ANCHOR 2026.03.27 풀이 (12분 소요)
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

function isPalindrome(head: ListNode | null): boolean {
  // 팰린드롬인지 확인하는 방법 -> 뒤집어서 확인하거나 (불가) 양 끝을 투포인터로 확인해야 함 (불가?)
  // 무작정 생각나는 방법은 끝까지 순회해서 값 배열을 만들고, (배열이니까) 일반적인 투포인터 방식으로 팰린드롬 여부 확인하기.
  const arr: number[] = [];
  let ptr = head;
  while (ptr !== null) {
    arr.push(ptr.val);
    ptr = ptr.next;
  }
  // 팰린드롬 여부 확인
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) break;
    (left++, right--);
  }
  return left >= right;
}
