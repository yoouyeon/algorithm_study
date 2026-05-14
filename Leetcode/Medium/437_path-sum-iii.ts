/*
⭐️ 문제 정보 ⭐️
문제 : 437 - Path Sum III
레벨 : Medium
링크 : https://leetcode.com/problems/path-sum-iii
*/

// ANCHOR 2026.05.14 풀이 (12분 소요)
function pathSum(root: TreeNode | null, targetSum: number): number {
  // 경로의 시작지점이 꼭 루트를 포함할 필요는 없음
  // 경로의 총 합이 targetSum과 동일한 경로 개수를 구하시오.
  // 아 한개가 아니야? ㅎㅎ..
  // 루트를 포함하지 않아도 된다는게 너무헷갈림
  // dfs를 두번 도는 방식!

  let answer = 0;

  // 모든 노드를 시작점으로 순회하면서 InnerDFS를 호출하는 함수
  function outerDFS(start: TreeNode | null) {
    if (!start) return;
    innerDFS(start, start.val);
    if (start.left) outerDFS(start.left);
    if (start.right) outerDFS(start.right);
  }

  // 현재 노드를 포함한 경로 중 합이 targetSum인 경우의 수
  function innerDFS(curr: TreeNode, sum: number) {
    if (sum === targetSum) answer++;
    if (curr.left) innerDFS(curr.left, sum + curr.left.val);
    if (curr.right) innerDFS(curr.right, sum + curr.right.val);
  }

  outerDFS(root);

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
}
