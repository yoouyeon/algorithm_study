/*
⭐️ 문제 정보 ⭐️
문제 : 835 - Image Overlap
레벨 : Medium
링크 : https://leetcode.com/problems/image-overlap/
*/

// ANCHOR 2026.04.09 풀이 (10분 소요)
function largestOverlap(img1: number[][], img2: number[][]): number {
  // img1의 각 원소를 상하좌우 shift했을때 img2의 1과 겹치는 부분이 가장 큰 경우를 구하는... 문제
  // 상하좌우로 가장 많이 갈 수 있는 Offset은 N.
  // 실제로 shift를 할 필요는 없을 것 같고, 범위를 줄여주면 된다. 시작 지점 위치를 [0][0]에서 [0][1]로 옮겨주는 느낌
  // dy: -(n-1) ~ +(n-1), dx: -(n-1) ~ +(n-1) 이런 것이다...
  // shift한 좌표에서 실제로 0~n-1 범위 안에 있는 것만 비교해주면 되는 문제..!
  const n = img1.length;
  let max = 0;

  // 모든 이동 케이스 구해주기
  for (let dy = -n + 1; dy <= n - 1; dy++) {
    for (let dx = -n + 1; dx <= n - 1; dx++) {
      // dx, dy만큼 shift한 이미지를 구하고 있습니다.
      let overlap = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (i + dy < 0 || i + dy >= n || j + dx < 0 || j + dx >= n) continue;
          overlap += img1[i + dy][j + dx] & img2[i][j];
        }
      }

      max = Math.max(overlap, max);
    }
  }

  return max;
}
