/*
⭐️ 문제 정보 ⭐️
문제 : 1372 - Longest ZigZag Path in a Binary Tree
레벨 : Medium
링크 : https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree
*/

// ANCHOR 2026.05.14 풀이 (38분 소요)
function longestZigZag(root: TreeNode | null): number {
  let answer = 0;

  function zigzag(node: TreeNode | null, leftLength: number, rightLength: number) {
    if (!node) return;
    answer = Math.max(answer, leftLength, rightLength);
    zigzag(node.right, 0, leftLength + 1); // 오른쪽으로 꺾음
    zigzag(node.left, rightLength + 1, 0); // 왼쪽으로 꺾음
  }

  zigzag(root, 0, 0);

  return answer;
}
// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
