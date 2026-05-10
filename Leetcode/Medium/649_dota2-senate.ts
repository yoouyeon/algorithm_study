/*
⭐️ 문제 정보 ⭐️
문제 : 649 - Dota2 Senate
레벨 : Medium
링크 : https://leetcode.com/problems/dota2-senate/description
*/

// ANCHOR 2026.05.10 풀이 (39분 소요)

function predictPartyVictory(senate: string): string {
  // Radiant와 Dire라는 두 정당
  // 한명의 senator는 한 턴당 2개의 권리 중 하나를 행사할 수 있다.
  // - 다른 senator의 권리를 무력화(투표 했든 안했든 상관 없음)하거나
  // - 해당 시점에 투표할 수 있는 남은 senator가 모두 같은 정당이라면 해당 정당의 승리를 공표
  // 각 senator는 승리하기 위해서 항상 최고의 선택을 한다
  // 항상 최종 승리 정당이 나온다. 최종 승리 정당 구하기.
  // ----

  const n = senate.length;
  const radiantQueue: number[] = [];
  const direQueue: number[] = [];
  let rFront = 0;
  let dFront = 0;

  for (let idx = 0; idx < n; idx++) {
    if (senate[idx] === 'R') radiantQueue.push(idx);
    else direQueue.push(idx);
  }

  while (rFront < radiantQueue.length && dFront < direQueue.length) {
    const r = radiantQueue[rFront++];
    const d = direQueue[dFront++];
    if (r < d) radiantQueue.push(r + n);
    else direQueue.push(d + n);
  }

  return rFront < radiantQueue.length ? 'Radiant' : 'Dire';
}
