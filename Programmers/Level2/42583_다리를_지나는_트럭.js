/* 
⭐️ 문제 정보 ⭐️
문제 : 42583 - 다리를 지나는 트럭
레벨 : Level 2
링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42583
*/

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = []; // [{ weight: 트럭 무게, enteredAt: 다리 진입 시간 }];
  let currentWeight = 0;
  let truckIndex = 0;
  let frontIndex = 0; // 다리에서 가장 먼저 나갈 트럭의 인덱스

  while (truckIndex < truck_weights.length || frontIndex < bridge.length) {
    time++;

    // 다리를 다 건넌 트럭 제거
    if (
      frontIndex < bridge.length &&
      time - bridge[frontIndex].enteredAt >= bridge_length
    ) {
      currentWeight -= bridge[frontIndex].weight;
      frontIndex++;
    }

    // 새 트럭 진입 (가능하다면)
    if (truckIndex < truck_weights.length) {
      const nextTruckWeight = truck_weights[truckIndex];

      if (
        currentWeight + nextTruckWeight <= weight &&
        bridge.length - frontIndex < bridge_length
      ) {
        bridge.push({ weight: nextTruckWeight, enteredAt: time });
        currentWeight += nextTruckWeight;
        truckIndex++;
      }
    }
  }

  return time;
}
