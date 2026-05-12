/*
⭐️ 문제 정보 ⭐️
문제 : 104 - Maximum Depth of Binary Tree
레벨 : Easy
링크 : https://leetcode.com/problems/maximum-depth-of-binary-tree
*/

// ANCHOR 2026.05.12 풀이 (11분 소요)
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  let maxDepth = 0;

  function dfs(curr: TreeNode, depth: number) {
    if (curr.left === null && curr.right === null) {
      maxDepth = Math.max(maxDepth, depth);
      return;
    }
    if (curr.right) dfs(curr.right, depth + 1);
    if (curr.left) dfs(curr.left, depth + 1);
  }

  dfs(root, 1);

  return maxDepth;
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
}
