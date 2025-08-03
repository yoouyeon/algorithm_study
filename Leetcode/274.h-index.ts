/*
 * [274] H-Index
 */

// 적어도 h번 이상 인용된 h개의 논문이 있을 때 h의 최댓값을 찾기
function hIndex(citations: number[]): number {
  let h = 0;
  citations.sort((a, b) => b - a);

  for (let idx = 0; idx < citations.length; idx++) {
    if (citations[idx] < idx + 1) {
      break;
    }
    h = idx + 1;
  }

  return h;
}
