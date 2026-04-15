/*
⭐️ 문제 정보 ⭐️
문제 : 3160 - Find the Number of Distinct Colors Among the Balls
레벨 : Medium
링크 : https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls
*/

// ANCHOR 2026.04.15 풀이 (24분 소요)
function queryResults(limit: number, queries: number[][]): number[] {
  // queries에서 [x번째 공을 y색으로 칠함]
  // 각 쿼리마다 공의 색깔들을 반환하면 됨;
  // 그대로 구현하면 될듯
  const result = [];
  const colorCount = new Map<number, number>(); // 색깔별 공의 개수. 매번 key의 개수를 result에 저장해줄 예정
  // const ballColor = new Array(limit + 1).fill(-1); // 색은 양수부터. 현재 공의 색을 저장해둔다.
  // 10^9 크기 배열이 너무 커서 TLE가 발생합니다... 색깔이 정해지는 공만 저장하기 위해 map 사용
  const ballColor = new Map<number, number>(); // key : 공숫자, value: 공색깔

  for (const query of queries) {
    const [x, y] = query;
    // 1. 공의 현재 색을 확인
    const oldY = ballColor[x];
    // 2. 만약에 색이 없다면 그대로 색칠해주면 된다.
    if (oldY === undefined) {
      ballColor[x] = y;
      colorCount.set(y, (colorCount.get(y) ?? 0) + 1);
    }
    // 3. 만약에 색이 다르다면 바꿔준다. (색이 같으면 그냥 가면 됨)
    else if (oldY !== y) {
      // a. 기존 map의 값 감소 (더 없으면 제거하기)
      const oldCount = colorCount.get(oldY)!;
      oldCount === 1 ? colorCount.delete(oldY) : colorCount.set(oldY, oldCount - 1);
      // b. 새로운 색깔 수 증가
      colorCount.set(y, (colorCount.get(y) ?? 0) + 1);
      // c. 공 배열 업데이트
      ballColor[x] = y;
    }
    // 4. map의 key의 개수를 result에 저장해줌
    result.push(colorCount.size);
  }

  return result;
}
