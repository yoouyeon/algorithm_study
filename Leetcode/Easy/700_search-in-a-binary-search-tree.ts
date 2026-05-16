/*
⭐️ 문제 정보 ⭐️
문제 : 700 - Search in a Binary Search Tree
레벨 : Easy
링크 : https://leetcode.com/problems/search-in-a-binary-search-tree
*/

// ANCHOR 2026.05.16 풀이 (13분 소요)
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  let curr = root;
  while (curr) {
    if (curr.val === val) return curr;
    if (val < curr.val) curr = curr.left;
    else curr = curr.right;
  }
  return null;
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
