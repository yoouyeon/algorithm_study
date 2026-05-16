/*
⭐️ 문제 정보 ⭐️
문제 : 1161 - Maximum Level Sum of a Binary Tree
레벨 : Medium
링크 : https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree
*/

// ANCHOR 2026.05.16 풀이 (21분 소요)
function maxLevelSum(root: TreeNode | null): number {
  const queue = [];
  const sum = [];
  let front = 0;

  queue.push([root, 0]);
  while (front < queue.length) {
    const [node, lv] = queue[front++];
    if (!node) continue;
    if (sum.length <= lv) sum.push(node.val);
    else sum[lv] += node.val;
    queue.push([node.left, lv + 1]);
    queue.push([node.right, lv + 1]);
  }

  let max = null;
  let answer = 0;
  for (let i = 0; i < sum.length; i++) {
    if (max === null || max < sum[i]) {
      max = sum[i];
      answer = i + 1;
    }
  }

  return answer;
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
