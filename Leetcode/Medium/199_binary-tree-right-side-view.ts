/*
⭐️ 문제 정보 ⭐️
문제 : 199 - Binary Tree Right Side View
레벨 : Medium
링크 : https://leetcode.com/problems/binary-tree-right-side-view
*/

// ANCHOR 2026.05.15 풀이 (10분 소요)
function rightSideView(root: TreeNode | null): number[] {
  // 문제가 너무 신기하다...
  // 항상 오른쪽 자식을 먼저 돌것임. 해당 뎁스에 view 칸이 차있지 않다면 채워주는 방식으로 해보려고 함...
  // ---

  const view = [];

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) return;
    if (view.length <= depth) {
      view.push(node.val);
    }
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);

  return view;
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
