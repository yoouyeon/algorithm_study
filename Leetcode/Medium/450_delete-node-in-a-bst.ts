/*
⭐️ 문제 정보 ⭐️
문제 : 450 - Delete Node in a BST
레벨 : Medium
링크 : https://leetcode.com/problems/delete-node-in-a-bst
*/

// ANCHOR 2026.05.16 풀이 (38분 소요)
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;

  if (key < root.val) root.left = deleteNode(root.left, key);
  else if (key > root.val) root.right = deleteNode(root.right, key);
  else {
    // 삭제 로직 수행
    if (!root.left && !root.right) return null;
    if (!root.left || !root.right) return root.left ?? root.right;

    // 오른쪽에서 가장 작은 것 찾기 (왼쪽)
    let curr = root.right;
    while (curr.left) curr = curr.left;
    root.val = curr.val;
    root.right = deleteNode(root.right, curr.val);
  }
  return root;
}

//Definition for a binary tree node.
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
