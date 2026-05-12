/*
⭐️ 문제 정보 ⭐️
문제 : 872 - Leaf-Similar Trees
레벨 : Easy
링크 : https://leetcode.com/problems/leaf-similar-trees
*/

// ANCHOR 2026.05.12 풀이 (9분 소요)
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  // left부터 접근해서 leaf를 구하면 됨.

  function leafSequence(curr: TreeNode | null): number[] {
    if (curr === null) return [];
    if (!curr.left && !curr.right) return [curr.val];
    return [...leafSequence(curr.left), ...leafSequence(curr.right)];
  }

  const root1Sequence = leafSequence(root1).join(', ');
  const root2Sequence = leafSequence(root2).join(', ');

  return root1Sequence === root2Sequence;
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
