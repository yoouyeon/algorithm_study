/*
⭐️ 문제 정보 ⭐️
문제 : 134 - Gas Station
레벨 : Medium
링크 : https://leetcode.com/problems/gas-station/
*/

/*
 * [134] Gas Station
 */

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGain = 0;
  let tank = 0;
  let start = 0;

  for (let idx = 0; idx < gas.length; idx++) {
    const gain = gas[idx] - cost[idx]; // 현재 주유소에 도달한 시점에 얻는 순이득
    totalGain += gain;
    tank += gain;

    if (tank < 0) {
      // start ~ idx까지 어떤 지점을 start로 잡아도 tank 음수 엔딩이 난다
      // => start를 idx 다음으로 잡아서 다시 시작
      start = idx + 1;
      tank = 0;
    }
  }

  // 전체 받은 가스보다 소비한 가스가 많으면 어떤 출발점에서도 완주 불가
  return totalGain < 0 ? -1 : start;
}
