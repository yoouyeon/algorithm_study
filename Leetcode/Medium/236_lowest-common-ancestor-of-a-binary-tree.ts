/*
⭐️ 문제 정보 ⭐️
문제 : 236 - Lowest Common Ancestor of a Binary Tree
레벨 : Medium
링크 : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
*/

// ANCHOR 2026.05.15 풀이 (15분 소요)
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // p와 q의 가장 가까운 공통 조상 찾기
  // 위로 갈수는 없으니... root를 계속 업데이트해주는 방법이 ... 시간이 너무 많이 걸림
  // dfs를 돌면서 현재 루트 하위에서 둘 다를 찾을 수 있다면 그 루트를 반환해주는 방법을 쓰도록 하자.
  // ---
  function LCA(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
    if (!node) return node; // 이건 예외처리 (못찾음 상태)
    if (node === p || node === q) return node; // 이건 이미 찾았으니 찾았다 반환.

    const left = LCA(node.left, p, q);
    const right = LCA(node.right, p, q);

    if (left && right) return node; // 이건 둘 다 찾았으므로 답을 반환하는 의미에서의 반환
    return left ?? right; // 둘 중 null이 아닌 것 반환. 둘 다 null이면 null 반환하는거고.
  }

  return LCA(root, p, q);
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
