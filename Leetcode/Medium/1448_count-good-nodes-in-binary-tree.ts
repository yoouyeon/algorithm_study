/*
⭐️ 문제 정보 ⭐️
문제 : 1448 - Count Good Nodes in Binary Tree
레벨 : Medium
링크 : https://leetcode.com/problems/count-good-nodes-in-binary-tree
*/

// ANCHOR 2026.05.13 풀이 (15분 소요)
function goodNodes(root: TreeNode | null): number {
  let count = 0;

  // 아 해당 루트에서 최댓값인... 노드의 개수를 찾는 것...
  function dfs(curr: TreeNode | null, path: number[]) {
    if (curr === null) return;
    path.push(curr.val);
    if (Math.max(...path) === curr.val) {
      count++;
    }
    if (curr.left) dfs(curr.left, path);
    if (curr.right) dfs(curr.right, path);
    path.pop();
  }

  dfs(root, []);

  return count;
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
